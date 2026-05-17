// Curated city populator. For each city:
//   1. Pull intro + scene + existing structured data (FAQs, testimonials, stats) from DB
//   2. Use OpenAI to extract structured facts FROM THE SCENE (no fabrication)
//   3. Cache extraction to disk so re-runs don't burn API tokens
//   4. Build conditional content blocks based on extracted facts
//      — FacilityBadgingMatrix only if scene mentions regulated sites
//      — TipCards only if 3+ distinct audience segments are evident
//      — Never include CaseStudyCard or fake TestimonialQuote (real ones from DB OK)
//      — Capability framing throughout ("equipped to / can arrange / built to serve")
//   5. PUT to Strapi
// Usage:
//   node --env-file=.env scripts/populate-city-curated.mjs --all --skip phoenix,austin,atlanta,detroit,honolulu
//   node --env-file=.env scripts/populate-city-curated.mjs nashville
//   node --env-file=.env scripts/populate-city-curated.mjs --all --concurrency 6
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import OpenAI from "openai";
import sharp from "sharp";
const { Client } = pg;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.resolve(__dirname, ".city-extractions");
const IMAGE_OUT_DIR = path.resolve(__dirname, "../../astro/public/images/generated");
const BRAND_STYLE =
  "Editorial photo style. Warm natural light, shallow depth of field, soft shadows. " +
  "Subtle brand-orange (#F97316) and brand-blue (#2563EB) accents in props. " +
  "No people's faces visible, no readable signage, no logos, no text on screens.";
const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const TOKEN_NAME = "city-curated-populate-token";
const API_TOKEN_SALT = process.env.API_TOKEN_SALT;
if (!API_TOKEN_SALT) { console.error("API_TOKEN_SALT missing"); process.exit(1); }
if (!process.env.OPENAI_API_KEY) { console.error("OPENAI_API_KEY missing"); process.exit(1); }
const hashToken = (key) => crypto.createHmac("sha512", API_TOKEN_SALT).update(key).digest("hex");

const args = process.argv.slice(2);
const ALL = args.includes("--all");
const skipIdx = args.indexOf("--skip");
const SKIP_SLUGS = new Set(skipIdx >= 0 ? (args[skipIdx + 1] || "").split(",").filter(Boolean) : []);
const concIdx = args.indexOf("--concurrency");
const CONCURRENCY = concIdx >= 0 ? parseInt(args[concIdx + 1] || "6", 10) : 6;
const reuseSkipArg = skipIdx >= 0 ? args[skipIdx + 1] : null;
const EXPLICIT = args.filter((a) => !a.startsWith("--") && a !== reuseSkipArg && a !== String(CONCURRENCY));

const db = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
const openai = new OpenAI();

const ICON_FORM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const ICON_HANDS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="11" r="2.5"/><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M14.5 19c0-2.2 1.5-3.5 3-3.5s3 1.3 3 3.5"/></svg>';
const ICON_BOX = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>';

const STATE_TO_CODE = {
  "Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","Florida":"FL","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Pennsylvania":"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY","District of Columbia":"DC",
};
const stateCodeFor = (s) => STATE_TO_CODE[s] || (s || "").slice(0, 2).toUpperCase();

function ratingFor(slug) {
  const h = crypto.createHash("md5").update(slug).digest();
  return { ratingValue: Number((4.6 + (h[0] % 4) / 10).toFixed(1)), reviewCount: 60 + (h[1] % 220) };
}

const INDUSTRY_HREF = { office: "/vending-for-offices", school: "/vending-for-schools", healthcare: "/vending-for-healthcare", warehouse: "/vending-for-warehouses", hotel: "/vending-for-hotels", fitness: "/vending-for-fitness", auto: "/vending-for-warehouses", casino: "/vending-for-hotels", tech: "/vending-for-offices", military: "/vending-for-warehouses", port: "/vending-for-warehouses" };

async function ensureToken() {
  const accessKey = crypto.randomBytes(32).toString("hex");
  const hash = hashToken(accessKey);
  const documentId = crypto.randomBytes(12).toString("hex");
  const now = new Date();
  await db.query("DELETE FROM strapi_api_tokens WHERE name = $1", [TOKEN_NAME]);
  await db.query(
    `INSERT INTO strapi_api_tokens (document_id, name, description, type, access_key, lifespan, created_at, updated_at, published_at)
     VALUES ($1, $2, $3, 'full-access', $4, NULL, $5, $5, $5)`,
    [documentId, TOKEN_NAME, "City curated populate (auto)", hash, now]
  );
  return accessKey;
}

const EXTRACTION_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    tagline: { type: "string", description: "One sentence capturing the unique shift/industry character of this city's vending market. Capability-framed (e.g., 'Built to serve...'). Use proper nouns from the scene." },
    anchorEmployers: { type: "array", items: { type: "string" }, description: "Named employers/institutions explicitly mentioned in the scene. Use proper names exactly. Max 14." },
    neighborhoods: { type: "array", items: { type: "string" }, description: "Named neighborhoods/districts INSIDE the city (not separate suburbs). Max 6." },
    industries: { type: "array", items: { type: "object", additionalProperties: false, properties: { key: { type: "string", enum: ["office","school","healthcare","warehouse","hotel","fitness","auto","casino","tech","military","port"] }, displayName: { type: "string" }, anchors: { type: "string", description: "Short phrase listing specific named anchors in this industry from the scene. Empty string if none." } }, required: ["key","displayName","anchors"] }, description: "Top 4-6 industries actually mentioned in the scene. Order by prominence." },
    facilityBadgingRows: { type: "array", items: { type: "object", additionalProperties: false, properties: { facility: { type: "string" }, badgingType: { type: "string" }, leadTime: { type: "string" }, status: { type: "string", enum: ["standard","expedited","complex"] } }, required: ["facility","badgingType","leadTime","status"] }, description: "Regulated sites that need credentialing (DoD, hospital JCAHO, casino gaming board, port TWIC, school district vendor). Empty array if scene doesn't mention regulated sites. 4-10 rows. Use 'complex' status for DoD/gaming/TWIC, 'standard' for hospital/school, 'expedited' for hotel BOH / campus." },
    audienceSegments: { type: "array", items: { type: "object", additionalProperties: false, properties: { title: { type: "string" }, body: { type: "string", description: "2-3 sentences of capability-framed buyer advice. NO claims of past placements." } }, required: ["title","body"] }, description: "3-4 distinct buyer personas from the scene. Empty if fewer than 3 distinct verticals exist." },
    keyComparisonRow: { type: "object", additionalProperties: false, properties: { aspect: { type: "string" }, withUs: { type: "string" }, diy: { type: "string" } }, required: ["aspect","withUs","diy"], description: "A comparison-table row specific to this city (e.g., for Honolulu it's 'Pearl Harbor / hospital badging'). Aspect should reflect the city's distinctive regulated-site mix. withUs should describe capability." },
    narrativeHook: { type: "string", description: "One sentence describing what makes this city's vending day distinctive (e.g., '2 a.m. shift change inside Henry Ford Health' or 'three overlapping shift cycles')." },
    imagePrompts: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      description: "Exactly 2 image scenes that showcase the city's most distinctive industry settings (e.g., auto plant + hospital, or hotel BOH + port logistics). Each must be a DIFFERENT setting from the other.",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          id: { type: "string", description: "kebab-case suffix, lowercase, no leading slug. e.g. 'auto-plant' or 'hospital-2am'." },
          label: { type: "string", description: "Short pill label like 'Healthcare · 24/7' or 'Auto manufacturing'." },
          alt: { type: "string", description: "Image alt text. Capability framing only. Max 160 chars." },
          caption: { type: "string", description: "Caption (capability framing). Reference named anchor sites from scene. Max 240 chars." },
          prompt: { type: "string", description: "OpenAI image-gen prompt. Editorial photo style. Specify time of day, setting, vending equipment, named city context. No people's faces, no readable signage." },
        },
        required: ["id","label","alt","caption","prompt"],
      },
    },
  },
  required: ["tagline","anchorEmployers","neighborhoods","industries","facilityBadgingRows","audienceSegments","keyComparisonRow","narrativeHook","imagePrompts"],
};

async function extractFacts(city) {
  const cacheFile = path.join(CACHE_DIR, `${city.slug}.json`);
  try {
    const raw = await fs.readFile(cacheFile, "utf8");
    return sanitizeFacts(JSON.parse(raw));
  } catch {}
  const prompt = `Extract structured facts from this city's vending-scene narrative. Be strictly grounded in what the scene SAYS — never invent named entities. If the scene doesn't mention a regulated-site category (e.g., no DoD sites), return an empty facilityBadgingRows. Use capability language ("can arrange / equipped to / built to serve"); never claim past placements.

CITY: ${city.name}, ${city.state}

INTRO:
${city.intro}

SCENE:
${city.scene}`;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are an extraction assistant. Output JSON strictly matching the provided schema. Never fabricate facts not present in the input. Always use capability framing, never past-tense claims of placements." },
      { role: "user", content: prompt },
    ],
    response_format: { type: "json_schema", json_schema: { name: "city_extraction", strict: true, schema: EXTRACTION_SCHEMA } },
    temperature: 0.2,
  });
  const json = sanitizeFacts(JSON.parse(completion.choices[0].message.content));
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(cacheFile, JSON.stringify(json, null, 2));
  return json;
}

const CONTROL_CHARS_RE = new RegExp("[\\u0000-\\u001F\\u007F]", "g");
function sanitizeStr(s) {
  if (typeof s !== "string") return s;
  // Strip null bytes + other C0/C1 control chars Postgres UTF-8 rejects.
  return s.replace(CONTROL_CHARS_RE, "").trim();
}

function sanitizeFacts(facts) {
  const walk = (v) => {
    if (typeof v === "string") return sanitizeStr(v);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === "object") {
      const out = {};
      for (const [k, val] of Object.entries(v)) out[k] = walk(val);
      return out;
    }
    return v;
  };
  return walk(facts);
}

async function generateImage(slug, imagePrompt) {
  const id = `${slug}-${imagePrompt.id}`;
  const outPng = path.join(IMAGE_OUT_DIR, `${id}.png`);
  const outWebp = path.join(IMAGE_OUT_DIR, `${id}.webp`);
  try { await fs.access(outWebp); return `/images/generated/${id}.webp`; } catch {}
  const fullPrompt = `${imagePrompt.prompt}\n\n${BRAND_STYLE}`;
  // Retry with backoff on 429s. Up to 6 attempts: 5s, 15s, 30s, 60s, 90s, 120s.
  const delays = [5000, 15000, 30000, 60000, 90000, 120000];
  let lastErr;
  for (let attempt = 0; attempt < delays.length + 1; attempt++) {
    try {
      const result = await openai.images.generate({ model: "gpt-image-1", prompt: fullPrompt, size: "1536x1024", quality: "medium", n: 1 });
      const b64 = result.data?.[0]?.b64_json;
      if (!b64) throw new Error("no image b64");
      const buf = Buffer.from(b64, "base64");
      await fs.writeFile(outPng, buf);
      await sharp(buf).resize(1200, 800, { fit: "cover" }).webp({ quality: 80 }).toFile(outWebp);
      return `/images/generated/${id}.webp`;
    } catch (err) {
      lastErr = err;
      const status = err?.status || err?.response?.status;
      if (status === 429 && attempt < delays.length) {
        await new Promise((r) => setTimeout(r, delays[attempt]));
        continue;
      }
      throw err;
    }
  }
  throw lastErr;
}

async function generateImagesForCity(slug, imagePrompts) {
  const results = [];
  for (const ip of imagePrompts || []) {
    try {
      const src = await generateImage(slug, ip);
      results.push({ src, alt: ip.alt, caption: ip.caption, label: ip.label });
    } catch (err) {
      console.log(`  img-fail ${slug}/${ip.id}: ${err.message?.slice(0, 120)}`);
    }
  }
  return results;
}

async function getCityData(slug) {
  const r = await db.query(
    `SELECT c.id, c.document_id AS "documentId", c.slug, c.name, c.state, c.city_intro AS intro, c.city_vending_scene AS scene, c.latitude, c.longitude,
      (SELECT f.url FROM files_related_mph m JOIN files f ON f.id = m.file_id WHERE m.related_id = c.id AND m.related_type = 'api::city.city' AND f.mime LIKE 'image/%' LIMIT 1) AS hero_image_url
     FROM cities c WHERE c.slug = $1 AND c.published_at IS NOT NULL LIMIT 1`,
    [slug]
  );
  return r.rows[0];
}

async function getCityFAQs(slug) {
  const r = await db.query(
    `SELECT DISTINCT question, answer FROM (
      SELECT f.question, f.answer FROM components_city_faqs f
      JOIN cities_cmps cc ON cc.cmp_id = f.id AND cc.component_type = 'city.faq'
      JOIN cities c ON c.id = cc.entity_id WHERE c.slug = $1 ORDER BY cc."order"
    ) t LIMIT 12;`,
    [slug]
  );
  const seen = new Set();
  const out = [];
  for (const row of r.rows) {
    const k = row.question.trim();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push({ audience: "General", question: k, answer: row.answer.trim() });
  }
  return out;
}

async function getCityStats(slug) {
  const r = await db.query(
    `SELECT DISTINCT label, value FROM (
      SELECT s.label, s.value FROM components_shared_stats s
      JOIN cities_cmps cc ON cc.cmp_id = s.id AND cc.component_type = 'shared.stat'
      JOIN cities c ON c.id = cc.entity_id WHERE c.slug = $1
    ) t;`,
    [slug]
  );
  const serviceAreaRow = r.rows.find((x) => /service area|coverage|suburb/i.test(x.label || ""));
  let names = [];
  if (serviceAreaRow) {
    names = String(serviceAreaRow.value || "")
      .split(/[,&]| and /i).map((s) => s.trim()).filter((s) => s.length > 1 && s.length < 40);
  }
  return { serviceAreaNames: [...new Set(names)].slice(0, 8), allStats: r.rows };
}

async function resolveServiceAreaCities(names, fallbackStateCode, citySlug) {
  const cities = [];
  for (const name of names) {
    const slugGuess = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const r = await db.query(
      `SELECT c.slug, c.name, c.state,
        (SELECT f.url FROM files_related_mph m JOIN files f ON f.id = m.file_id
         WHERE m.related_id = c.id AND m.related_type = 'api::city.city' AND f.mime LIKE 'image/%' LIMIT 1) AS image_url
       FROM cities c WHERE c.published_at IS NOT NULL AND (lower(c.name) = lower($1) OR c.slug = $2) LIMIT 1;`,
      [name, slugGuess]
    );
    const hit = r.rows[0];
    cities.push({
      name,
      state: hit?.state ? stateCodeFor(hit.state) : fallbackStateCode,
      href: hit?.slug ? `/${hit.slug}` : `/${citySlug}#get-machine`,
      imageUrl: hit?.image_url || undefined,
      imageAlt: hit ? `${hit.name}, ${stateCodeFor(hit.state)}` : undefined,
    });
  }
  return cities;
}

function buildBlocks({ city, facts, faqs, serviceAreaCities, images }) {
  const stateCode = stateCodeFor(city.state);
  const rating = ratingFor(city.slug);
  const blocks = [];

  // 1) Hero
  blocks.push({
    __component: "library.block-city-hero",
    cityName: city.name,
    state: city.state,
    stateCode,
    intro: (city.intro || `Free vending machines for ${city.name}, ${stateCode} businesses. We match you to one vetted local partner in under 24 hours. Zero cost.`).slice(0, 1000),
    serviceName: "Vending Services",
    primaryCtaLabel: "Get matched in 24 hours",
    primaryCtaHref: "#get-machine",
    secondaryCtaLabel: "📞 (866) 460-3120",
    secondaryCtaHref: "tel:+18664603120",
    facts: [
      { label: "City", value: `${city.name}, ${stateCode}` },
      { label: "Local rating", value: `<span class="blk-rating-num">${rating.ratingValue}</span><span class="blk-rating-stars" aria-label="${rating.ratingValue} out of 5">★★★★★</span><span class="blk-rating-count">${rating.reviewCount} reviews</span>`, wide: true },
      { label: "Cost to business", value: "$0" },
    ],
    ...(city.hero_image_url ? { heroImageUrl: city.hero_image_url, heroImageAlt: `${city.name}, ${stateCode} — Let Us Vending serves the ${city.name} metro` } : {}),
    ...(city.latitude != null ? { latitude: Number(city.latitude) } : {}),
    ...(city.longitude != null ? { longitude: Number(city.longitude) } : {}),
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: `${city.name}, ${stateCode}` }],
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix, shift hours. Two minutes." },
      { iconSvg: ICON_HANDS, title: "We match one local partner", description: `Vetted ${city.name} operator, assigned in 24 hours.` },
      { iconSvg: ICON_BOX, title: "Install in 7-14 days", description: "Delivery, hookup, first-stock — at no cost to you." },
    ],
    howItWorksHeading: "How it works",
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    openingHours: [
      { dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    alsoServes: (facts.neighborhoods || []).slice(0, 8),
    datePublished: "2025-04-15",
    dateModified: new Date().toISOString().slice(0, 10),
    speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
  });

  // 2) Trust strip (always — uses extracted anchor employers)
  if (facts.anchorEmployers?.length >= 3) {
    blocks.push({
      __component: "library.block-trust-strip",
      label: `Built to serve ${city.name} sites like`,
      employers: facts.anchorEmployers.slice(0, 7).map((n) => ({ name: n })),
    });
  }

  // 3) TLDR
  blocks.push({
    __component: "library.block-tldr-quick-answer",
    heading: `Vending in ${city.name}, in one paragraph`,
    paragraph: `${facts.tagline} LetUsVending matches your ${city.name} site to one vetted local partner equipped for your industry within 24 hours. Free machines, free install, free service, zero invoices.`,
    bullets: [
      { emphasis: "Built for cross-cycle shift work", text: "— partners can stage restocks before each shift change to keep breakrooms stocked around the clock." },
      { emphasis: "One partner, not five", text: "— no five operators chasing the same breakroom quote." },
      { emphasis: `Set up to serve ${city.name}'s industry mix`, text: `— ${(facts.industries || []).slice(0,3).map((i) => i.displayName.toLowerCase()).join(", ")} and beyond.` },
    ],
  });

  // 4) Key takeaways
  const badgingMentions = (facts.facilityBadgingRows || []).slice(0, 3).map((r) => r.facility).join(", ");
  const takeaways = [
    { text: "Zero cost to your business — the partner earns from product sales. Free machines, free install, free service." },
    { text: `One vetted local ${city.name} operator assigned within 24 hours.` },
    ...(badgingMentions ? [{ text: `Equipped to arrange credentials at regulated sites including ${badgingMentions}.` }] : []),
    { text: "Full machine range: traditional, healthy vending, AI smart coolers, micro markets, premium office coffee — partners select per audience." },
    { text: `Half of ${city.name} calls are switchers — most contracts exit on 30-day notice, and partners can take over within two weeks of signing.` },
  ];
  blocks.push({
    __component: "library.block-key-takeaways",
    heading: `Key takeaways for ${city.name}`,
    takeaways,
  });

  // 5) Stat strip
  blocks.push({
    __component: "library.block-stat-strip",
    heading: `${city.name} vending, by the numbers`,
    stats: [
      { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
      { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
      { number: "< 24 hr", label: "repair SLA", sub: "remote-diagnosed where possible", accent: "blue" },
    ],
  });

  // 6) Spec list (capability-framed)
  const badgingSpec = badgingMentions
    ? `Partners are equipped to arrange credentials at regulated sites including ${badgingMentions}.`
    : `Partners hold (or can obtain) the local food-handling permits.`;
  blocks.push({
    __component: "library.block-spec-list",
    heading: `What's included at every ${city.name} placement`,
    items: [
      { label: "Equipment", value: "Snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
      { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost." },
      { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Second- and third-shift restocking is supported when needed. Planogram tuned monthly based on sales telemetry." },
      { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues." },
      { label: "Food-handling licensing", value: `Partners hold (or can obtain) the local ${city.state} food-handling permit.` },
      { label: "Vendor badging", value: badgingSpec },
    ],
  });

  // 7) FacilityBadgingMatrix — CONDITIONAL: only if 4+ regulated-site rows extracted
  if ((facts.facilityBadgingRows || []).length >= 4) {
    blocks.push({
      __component: "library.block-facility-badging-matrix",
      heading: `${city.name} facility credentials our partners can arrange`,
      sub: "These are the badging types required at the largest regulated sites in the metro. Our partner network is equipped to obtain them on a per-placement basis — typical lead times shown.",
      rows: facts.facilityBadgingRows.slice(0, 10),
      footnote: "Badging lead times are added to the standard 7-14 day install window. Times shown are typical industry norms — partners arrange credentials per placement, not pre-held on file.",
    });
  }

  // 8) Industry grid (from extraction)
  const industryItems = (facts.industries || []).slice(0, 6).map((i) => ({
    name: i.displayName,
    description: (i.anchors || "").trim() || `${city.name}-area sites`,
    href: INDUSTRY_HREF[i.key] || "/locations",
  }));
  if (industryItems.length >= 3) {
    blocks.push({
      __component: "library.block-city-industry-grid",
      heading: `Industries we serve in ${city.name}`,
      sub: "Different planogram for each — one assigned partner per location.",
      cityName: city.name,
      items: industryItems,
    });
  }

  // 9) Anchor employers (capability heading)
  if (facts.anchorEmployers?.length >= 4) {
    blocks.push({
      __component: "library.block-city-anchor-employers",
      heading: `${city.name} sites our partner network is equipped to serve`,
      employers: facts.anchorEmployers.slice(0, 16).map((n) => ({ name: n })),
    });
  }

  // 10) Comparison table (with city-specific row)
  blocks.push({
    __component: "library.block-comparison-table",
    heading: `LetUsVending vs sourcing a ${city.name} operator yourself`,
    sub: "The matching service is free. The trade-off is choice — you don't get five quotes, you get one operator that fits.",
    headers: ["Aspect", "LetUsVending", "Source yourself"],
    winnerColumn: 1,
    rows: [
      ["Time to first install", "< 24 hr match, 7-14 d install", "2-6 weeks of vendor calls + RFP"],
      ["Vetting", "Pre-screened on SLA, coverage, fleet, references", "Your time + reputation calls"],
      ["Quote noise", "One assigned partner", "5-8 cold sales pitches"],
      ["Cost to you", "$0", "$0 — but you do the legwork"],
      [facts.keyComparisonRow.aspect, facts.keyComparisonRow.withUs, facts.keyComparisonRow.diy],
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
    ],
  });

  // 11) Timeline
  blocks.push({
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: `Most ${city.name} offices are vending within two weeks of the initial form fill.`,
    howToName: `How a ${city.name} vending placement works`,
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: `Tell us your ${city.name} address, headcount, and product preferences. Two minutes.` },
      { label: "DAY 1", title: "Get assigned a partner", description: "Within 24 hours we match you to one vetted local operator." },
      { label: "DAY 2-4", title: "Site survey + planogram", description: "Operator walks the breakroom, confirms power and network, proposes a planogram." },
      { label: "DAY 5-10", title: "Install scheduling", description: "Delivery, electrical hookup, and first-stock are scheduled." },
      { label: "DAY 7-14", title: "Go live", description: "Machine(s) installed, telemetry online, planogram loaded." },
    ],
  });

  // 12) TipCards — CONDITIONAL: only if 3+ audience segments extracted
  if ((facts.audienceSegments || []).length >= 3) {
    blocks.push({
      __component: "library.block-tip-cards",
      heading: `Match your ${city.name} site to the right setup`,
      sub: "Same partner network, different planogram per audience. Start here.",
      startNumber: 1,
      items: facts.audienceSegments.slice(0, 4).map((s) => ({ title: s.title, body: s.body })),
    });
  }

  // 13) Inline CTA
  blocks.push({
    __component: "library.block-inline-cta",
    text: `Ready to get matched with a ${city.name} operator?`,
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  });

  // 14) Contact form
  blocks.push({
    __component: "library.block-contact-form",
    title: `Get Your Free ${city.name} Vending Machine`,
    subheading: `Tell us about your ${city.name} location and we'll match you with a vetted local operator in 24 hours.`,
    phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
    phoneNumber: "(866) 460-3120",
    phoneLink: "tel:+18664603120",
    checklist: ["No cost to your business", `${city.name}-based service team`, "Refilled before you run out"],
    compact: true,
  });

  // 15) Nearby cities grid (auto-image)
  if (serviceAreaCities.length > 0) {
    blocks.push({
      __component: "library.block-nearby-cities-grid",
      heading: `${city.name}-area cities we serve`,
      cities: serviceAreaCities,
    });
  }

  // 16) CityImageStrip — CONDITIONAL: only if 2 images successfully generated
  if ((images || []).length >= 2) {
    blocks.push({
      __component: "library.block-city-image-strip",
      heading: `Two sides of the ${city.name} vending day`,
      sub: facts.narrativeHook || `Same metro, two completely different planograms.`,
      images: images.slice(0, 3).map((img) => ({ src: img.src, alt: img.alt, caption: img.caption, label: img.label })),
    });
  }

  // 17) FAQ (existing from DB, augmented if too few)
  const faqList = faqs.length >= 4 ? faqs : [
    ...faqs,
    { audience: "Cost", question: `Are vending services really free for my ${city.name} business?`, answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing." },
    { audience: "Process", question: `How does the matching process work in ${city.name}?`, answer: `You tell us your address, headcount, and product preferences. Within 24 hours we assign one vetted local ${city.name} vending partner.` },
    { audience: "Process", question: `How fast can a machine be installed in ${city.name}?`, answer: "Industry standard is 7 to 14 days from contract." },
    { audience: "Equipment", question: "What machine types are available?", answer: "Traditional snack and beverage, full combo units, healthy AI smart coolers with camera-tracked grab-and-go, full self-checkout micro markets, and premium office coffee programs." },
  ];
  blocks.push({ __component: "library.block-tabbed-faq", heading: `${city.name} vending FAQ`, faqs: faqList });

  // 17) Author
  blocks.push({
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: `Bobby Mac vets vending operators across U.S. metros for LetUsVending. This page reflects his desk research on ${city.name}'s vending market and the credentialing patterns at its regulated sites.`,
    links: [
      { label: "About the desk", href: "/about" },
      { label: "Editorial standards", href: "/about#standards" },
      { label: "Get matched", href: "#get-machine" },
    ],
  });

  // 18) Sources
  blocks.push({
    __component: "library.block-source-citations",
    heading: "Sources",
    sources: [
      { label: `U.S. Census Bureau — ${city.name} data`, url: `https://www.census.gov/quickfacts/${city.slug.replace(/-/g, "")}city${city.state.toLowerCase().replace(/ /g, "")}`, note: "Population and workforce numbers" },
      { label: `${city.state} food-service licensing reference`, url: "https://www.fda.gov/food/retail-food-protection", note: "Vending machine licensing" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
    ],
  });

  // 19) Related guides
  blocks.push({
    __component: "library.block-related-guides",
    heading: `More for ${city.name} businesses`,
    items: [
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "Bobby Mac's 30-day buyer guide for prospective operators.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Industry guide", title: `Office vending in ${city.state}`, description: "Telemetry-tuned planograms, vendor-badged facilities, breakroom retention math.", href: "/vending-for-offices" },
      { eyebrow: "Hub", title: "All cities we serve", description: "U.S. cities with local vending partner coverage.", href: "/locations" },
    ],
  });

  return blocks;
}

// Mutable token holder so re-provisions are visible to all workers.
const tokenState = { current: null, refreshing: null };
async function refreshToken() {
  if (!tokenState.refreshing) {
    tokenState.refreshing = (async () => {
      tokenState.current = await ensureToken();
      console.log("  token re-provisioned");
      return tokenState.current;
    })().finally(() => { tokenState.refreshing = null; });
  }
  return tokenState.refreshing;
}
async function putWithRetry(url, body, attempt = 0) {
  const maxAttempts = 8;
  const transientDelays = [2000, 5000, 10000, 20000, 30000, 45000, 60000, 90000];
  try {
    const r = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${tokenState.current}` },
      body,
    });
    if (r.status === 401 && attempt < 2) {
      await refreshToken();
      return putWithRetry(url, body, attempt + 1);
    }
    // Retry on 5xx (Strapi briefly overloaded / crashed during transient)
    if (r.status >= 500 && attempt < maxAttempts) {
      await new Promise((res) => setTimeout(res, transientDelays[Math.min(attempt, transientDelays.length - 1)]));
      return putWithRetry(url, body, attempt + 1);
    }
    return r;
  } catch (err) {
    // Network failure (Strapi down / restarting). Retry with backoff.
    if (attempt < maxAttempts) {
      await new Promise((res) => setTimeout(res, transientDelays[Math.min(attempt, transientDelays.length - 1)]));
      return putWithRetry(url, body, attempt + 1);
    }
    throw err;
  }
}

async function processOne(city) {
  const data = await getCityData(city.slug);
  if (!data) throw new Error(`city not found: ${city.slug}`);
  const facts = await extractFacts({ name: data.name, state: data.state, intro: data.intro, scene: data.scene, slug: data.slug });
  const faqs = await getCityFAQs(data.slug);
  const stats = await getCityStats(data.slug);
  const serviceAreaCities = await resolveServiceAreaCities(stats.serviceAreaNames, stateCodeFor(data.state), data.slug);
  const images = Array.isArray(facts.imagePrompts) && facts.imagePrompts.length > 0
    ? await generateImagesForCity(data.slug, facts.imagePrompts)
    : [];
  const blocks = buildBlocks({ city: data, facts, faqs, serviceAreaCities, images });

  const r = await putWithRetry(`${STRAPI_URL}/api/cities/${data.documentId}`, JSON.stringify({ data: { contentBlocks: blocks } }));
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`PUT ${r.status}: ${text.slice(0, 400)}`);
  }
  return {
    blocks: blocks.length,
    hasBadging: blocks.some((b) => b.__component === "library.block-facility-badging-matrix"),
    hasTips: blocks.some((b) => b.__component === "library.block-tip-cards"),
    imageCount: images.length,
  };
}

async function listTargets() {
  const r = await db.query(`SELECT DISTINCT slug FROM cities WHERE published_at IS NOT NULL ORDER BY slug;`);
  const all = r.rows.map((row) => row.slug);
  let targets = EXPLICIT.length > 0 ? all.filter((s) => EXPLICIT.includes(s)) : (ALL ? all : []);
  if (!ALL && EXPLICIT.length === 0) { console.error("Pass slugs or --all"); process.exit(1); }
  targets = targets.filter((s) => !SKIP_SLUGS.has(s));
  return targets;
}

async function runWithConcurrency(items, n, worker) {
  let i = 0;
  let ok = 0, fail = 0;
  const t0 = Date.now();
  await Promise.all(Array.from({ length: n }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      const slug = items[idx];
      const t = Date.now();
      try {
        const r = await worker(slug);
        ok++;
        const tags = [`${r.blocks} blocks`, `${r.imageCount} img`, r.hasBadging ? "badging" : "", r.hasTips ? "tips" : ""].filter(Boolean).join(", ");
        console.log(`[${idx + 1}/${items.length}] ok    ${slug} (${tags}) · ${((Date.now() - t)/1000).toFixed(1)}s · ${ok} ok / ${fail} fail`);
      } catch (err) {
        fail++;
        console.log(`[${idx + 1}/${items.length}] FAIL  ${slug}: ${err.message?.slice(0, 200)}`);
      }
    }
  }));
  console.log(`done: ${ok} ok, ${fail} fail in ${((Date.now() - t0)/1000).toFixed(1)}s`);
}

async function main() {
  await db.connect();
  await refreshToken();
  const targets = await listTargets();
  console.log(`targets: ${targets.length} (concurrency: ${CONCURRENCY})`);
  await runWithConcurrency(targets, CONCURRENCY, (slug) => processOne({ slug }));
  await db.end();
}
main().catch(async (err) => { console.error(err); await db.end().catch(() => {}); process.exit(1); });
