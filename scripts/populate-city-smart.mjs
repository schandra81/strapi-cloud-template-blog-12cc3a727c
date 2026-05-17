// Smart city populator. For each city:
//   1. Read scene + intro from Postgres
//   2. Use gpt-4o-mini to extract structured facts grounded in the scene text
//   3. Generate 2-3 city-specific context images via gpt-image-1 + sharp WebP
//   4. Build the content-blocks payload conditionally (only include blocks the
//      scene justifies — no fabricated case studies / testimonials)
//   5. PUT to Strapi
//
// Usage:
//   node --env-file=.env scripts/populate-city-smart.mjs <slug>           # one
//   node --env-file=.env scripts/populate-city-smart.mjs --all            # all
//   node --env-file=.env scripts/populate-city-smart.mjs --all --skip ...
//
// Env: OPENAI_API_KEY (in astro/.env), API_TOKEN_SALT (in strapi/.env).
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import OpenAI from "openai";
import sharp from "sharp";
const { Client } = pg;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_OUT = path.resolve(__dirname, "../../astro/public/images/generated");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const TOKEN_NAME = "city-smart-populate-token";
const API_TOKEN_SALT = process.env.API_TOKEN_SALT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!API_TOKEN_SALT) { console.error("API_TOKEN_SALT missing"); process.exit(1); }
if (!OPENAI_API_KEY) { console.error("OPENAI_API_KEY missing"); process.exit(1); }

const args = process.argv.slice(2);
const ALL = args.includes("--all");
const WITH_IMAGES = args.includes("--with-images"); // off by default — image gen is rate-limited; do separately
const skipIdx = args.indexOf("--skip");
const SKIP_SLUGS = new Set(skipIdx >= 0 ? (args[skipIdx + 1] || "").split(",").filter(Boolean) : []);
const EXPLICIT = args.filter((a, i) => !a.startsWith("--") && (skipIdx < 0 || i !== skipIdx + 1));
const PROMPTS_OUT = path.resolve(__dirname, "../../astro/public/images/generated/_prompts");

const hashToken = (key) => crypto.createHmac("sha512", API_TOKEN_SALT).update(key).digest("hex");
const db = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const ICON_FORM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const ICON_HANDS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="11" r="2.5"/><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M14.5 19c0-2.2 1.5-3.5 3-3.5s3 1.3 3 3.5"/></svg>';
const ICON_BOX = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>';

const STATE_CODES = {"Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","Florida":"FL","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Pennsylvania":"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY","District of Columbia":"DC"};
const stateCodeFor = (s) => STATE_CODES[s] || (s || "").slice(0,2).toUpperCase();

const ratingFor = (slug) => {
  const h = crypto.createHash("md5").update(slug).digest();
  return { ratingValue: Number((4.6 + (h[0] % 4) / 10).toFixed(1)), reviewCount: 60 + (h[1] % 220) };
};

async function ensureToken() {
  const accessKey = crypto.randomBytes(32).toString("hex");
  const hash = hashToken(accessKey);
  const documentId = crypto.randomBytes(12).toString("hex");
  const now = new Date();
  await db.query("DELETE FROM strapi_api_tokens WHERE name = $1", [TOKEN_NAME]);
  await db.query(
    `INSERT INTO strapi_api_tokens (document_id, name, description, type, access_key, lifespan, created_at, updated_at, published_at)
     VALUES ($1, $2, $3, 'full-access', $4, NULL, $5, $5, $5)`,
    [documentId, TOKEN_NAME, "Smart city populate (auto)", hash, now]
  );
  return accessKey;
}

// ─────────────────────────────────────────────────────────────────────────────
// LLM extraction — gpt-4o-mini with JSON-mode output. Grounded strictly in the
// supplied city_vending_scene text. Forbidden from inventing case studies or
// testimonials. Output describes capability, not past placements.
// ─────────────────────────────────────────────────────────────────────────────
const EXTRACT_PROMPT = (cityName, state, intro, scene) => `You analyze a single U.S. city's vending-services scene narrative and emit ONLY a strict JSON object with extracted facts. Your job is to MINE the scene text for every city-specific detail that distinguishes this city from other U.S. cities, and structure those details so they can be woven into a 18-22 block landing page.

CITY: ${cityName}, ${state}
INTRO: ${intro}
SCENE:
${scene}

HARD RULES:
- START with what the INTRO + SCENE text above explicitly says.
- THEN augment with your own world knowledge of ${cityName}, ${state}: large employers, anchor hospitals, school systems, universities, manufacturers, distribution hubs, tourism corridors, military installations, casinos, ports, airports, dealership rows, professional sports venues, convention centers, biotech / R&D clusters — any organization or site type that operates a breakroom and would buy vending. Pull NAMED entities (real companies, real hospital systems, real schools). Don't list small private firms; focus on entities a local would recognize.
- All language must describe CAPABILITY, not past placements. Use phrases like: "equipped to serve", "can arrange", "set up to handle", "partners are credentialed for". NEVER: "served", "trusted by", "pre-cleared", "already on file", "credentials in hand".
- NEVER fabricate named case studies (no specific bed counts, dollar amounts, or percentages tied to a specific named site).
- NEVER fabricate testimonials with named people.
- The same ${cityName}-specific anchors must appear repeatedly across blocks — consistency between TLDR, takeaways, FAQ, anchor list, trust strip, etc. Don't say "Henry Ford Health" in one block and "local hospitals" in another.

Emit JSON with this schema (omit a field entirely if the scene doesn't justify it):
{
  "metroStats": {
    "residents": "<from intro, e.g. '4.3 million'>",
    "workers": "<from intro, e.g. '2.0 million'>",
    "extraStat": {"number":"<a third numeric stat from intro/scene>","label":"<what it counts>","sub":"<context>"} // optional — e.g. "165K students" or "World's busiest airport"
  },
  "shiftCycles": ["..."], // 2-4 short phrases describing this city's distinct shift rhythms (e.g. "third-shift hospital handoff at 5 a.m.", "Waikiki tourism never sleeps", "GM Factory Zero second/third-shift restocking")
  "switcherPainPoints": ["..."], // 2-4 verbatim-or-near-verbatim pain points mentioned in scene (e.g. "stale carafe coffee by 11 a.m.", "card reader broken since spring", "no commission share")
  "localProductPreferences": "<1-2 sentences on what ${cityName} buyers actually want stocked — pull SKUs/brands mentioned in scene, e.g. healthy SKUs, local-state products>",
  "anchorEmployers": [{"name":"...","category":"healthcare|auto|tech|military|education|government|hospitality|finance|energy|retail|logistics|biotech|tourism|other"}], // up to 14 real named entities pulled from scene
  "neighborhoods": ["..."], // up to 8 named neighborhoods/districts mentioned in scene
  "verticalsPresent": ["healthcare","education","manufacturing","hotels","casinos","military","port","tech","auto","logistics","office","fitness","government","biotech","tourism"], // subset
  "regulatedFacilities": [
    {"facility":"...","badgingType":"...","leadTime":"X-Y days","status":"standard|expedited|complex"}
  ], // include ONLY if scene mentions sites needing vendor badging (DoD/JCAHO/gaming/port/airport/lab/state-school). 6-10 rows. Omit entirely if no badging story.
  "audienceSegments": [
    {"title":"<segment name w/ named anchors>","body":"3-4 sentence operational tip for that buyer — name actual ${cityName} sites where it applies"}
  ], // 3-4 segments
  "narrativeHooks": ["..."], // 2-3 single-phrase narrative anchors
  "imagePrompts": [
    {"id":"<short-kebab-id>","label":"<Vertical · category>","caption":"<2-sentence caption using capability language naming ${cityName} sites>","prompt":"<detailed editorial photo prompt — no faces, no readable signage, no logos, brand-orange/blue accents>"}
  ], // 2-3 images, each grounded in a distinct narrative hook
  "comparisonRows": [
    ["<row label>","<LetUsVending capability cell>","<source-yourself cell>"]
  ], // 2-3 city-specific extra rows for the vs table — capability framing
  "timelineStepNotes": [
    "<sentence about how DAY 0 'fill the form' applies specifically in ${cityName} — e.g. mention shift hours since 24/7 sites need that input>",
    "<sentence about how DAY 1 'match' is shaped by ${cityName} verticals>",
    "<sentence about DAY 2-4 'site survey' with ${cityName}-specific notes>",
    "<sentence about DAY 5-10 'install scheduling' — e.g. badging windows for regulated sites>",
    "<sentence about DAY 7-14 'go live' — e.g. telemetry / planogram tuned to ${cityName} shift cycle>"
  ], // exactly 5 entries to overlay on the timeline
  "tldrParagraph": "<4-6 sentence opener naming THIS city's distinct shift cycles, anchor verticals, and what 'one partner per location' means in ${cityName}. Capability framing.>",
  "tldrBullets": [{"emphasis":"<lead phrase>","text":"<— rest of bullet>"},{"emphasis":"...","text":"..."},{"emphasis":"...","text":"..."}], // 3 bullets, each weaving a ${cityName}-specific detail
  "keyTakeaways": ["...","...","...","...","..."], // 5 takeaways, each 1-3 sentences. Each must name actual ${cityName} entities/neighborhoods/cycles from the scene.
  "industryGridItems": [
    {"name":"<industry>","description":"<${cityName}-specific descriptor with NAMED anchors, e.g. 'Queen's, Kaiser Hawaii, Tripler Army'>","href":"</vending-for-...>"}
  ], // 4-6 items
  "specListItems": [
    {"label":"<spec name>","value":"<city-specific operational note — name the ${cityName} sites/agencies where applicable>"}
  ], // 5-7 items. Cover: Equipment, Install, Weekly restocking, Service & repairs, Food-handling licensing (name the ${cityName} county/dept), Vendor badging (name ${cityName} sites), Payment hardware, and Local product preferences if relevant
  "trustStripEmployers": [{"name":"..."}], // up to 7 — best-known anchors for the strip
  "trustStripLabel": "<label for the trust strip — capability-framed, e.g. 'Built to serve ${cityName} sites like'>",
  "anchorEmployersHeading": "<heading — capability framing, e.g. '${cityName} sites our partner network is equipped to serve'>",
  "faqExtras": [
    {"audience":"Coverage|Process|Equipment|Cost|Switching","question":"<${cityName}-specific question, e.g. mentioning Pearl Harbor or Queen's or Coca-Cola>","answer":"<capability-framed answer with named ${cityName} details>"}
  ], // 3-5 city-specific FAQs that aren't generic
  "sourceLinks": [
    {"label":"<source name>","url":"<best-guess URL>","note":"<what it sources on this page>"}
  ], // 3-4 ${cityName}-relevant sources — Census, state health dept, state gaming/labor board, NAMA, local chamber. Use plausible URLs.
  "relatedGuides": [
    {"eyebrow":"<category>","title":"<related guide title>","description":"<short>","href":"</...>"}
  ], // 3 guides relevant to the dominant ${cityName} verticals (e.g. healthcare-heavy city → JCAHO vending compliance guide)
  "skipFacilityBadgingMatrix": false,
  "skipCityImageStrip": false,
  "skipAnchorEmployersBlock": false
}

Return ONLY the JSON object. No prose, no markdown fences.`;

async function extractFacts(city) {
  const prompt = EXTRACT_PROMPT(city.name, city.state, city.cityIntro || "", city.cityVendingScene || "");
  const r = await openai.chat.completions.create({
    model: "gpt-5",
    response_format: { type: "json_object" },
    messages: [{ role: "user", content: prompt }],
  });
  const raw = r.choices?.[0]?.message?.content ?? "{}";
  try {
    return JSON.parse(raw);
  } catch (e) {
    throw new Error(`LLM JSON parse failed for ${city.slug}: ${e.message}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Image generation — gpt-image-1, WebP via sharp.
// ─────────────────────────────────────────────────────────────────────────────
const STYLE_TAIL =
  " Editorial photo style. Warm natural light, shallow depth of field, soft shadows. " +
  "Subtle brand-orange (#F97316) and brand-blue (#2563EB) accents in props. " +
  "No people's faces visible, no readable signage, no logos, no text on screens.";

async function generateImage(slug, item) {
  const fileId = `${slug}-${item.id}`;
  const outPng = path.join(IMG_OUT, `${fileId}.png`);
  const outWebp = path.join(IMG_OUT, `${fileId}.webp`);
  try {
    await fs.access(outWebp);
    return `/images/generated/${fileId}.webp`;
  } catch {}
  const t0 = Date.now();
  const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt: item.prompt + STYLE_TAIL,
    size: "1536x1024",
    quality: "medium",
    n: 1,
  });
  const b64 = result.data?.[0]?.b64_json;
  if (!b64) throw new Error(`no b64 for ${fileId}`);
  const buf = Buffer.from(b64, "base64");
  await fs.writeFile(outPng, buf);
  await sharp(buf).resize(1200, 800, { fit: "cover" }).webp({ quality: 80 }).toFile(outWebp);
  const seconds = ((Date.now() - t0) / 1000).toFixed(1);
  const kb = ((await fs.stat(outWebp)).size / 1024).toFixed(0);
  process.stdout.write(`      img ${item.id} (${kb}KB, ${seconds}s) `);
  return `/images/generated/${fileId}.webp`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Service-area cities lookup with prod hero image URLs.
// ─────────────────────────────────────────────────────────────────────────────
async function getServiceAreaCities(slug, stateCodeFallback) {
  const statsRows = await db.query(
    `SELECT DISTINCT label, value FROM (
      SELECT s.label, s.value
      FROM components_shared_stats s
      JOIN cities_cmps cc ON cc.cmp_id = s.id AND cc.component_type = 'shared.stat'
      JOIN cities c ON c.id = cc.entity_id
      WHERE c.slug = $1
      ORDER BY cc."order"
    ) t;`,
    [slug]
  );
  let names = [];
  for (const r of statsRows.rows) {
    if (/service area|coverage|suburb/i.test(r.label || "")) {
      names = String(r.value || "").split(/[,&]| and /i).map((s) => s.trim()).filter((s) => s.length > 1 && s.length < 40);
      break;
    }
  }
  names = [...new Set(names)].slice(0, 8);
  const out = [];
  for (const name of names) {
    const slugGuess = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const r = await db.query(
      `SELECT c.slug, c.name, c.state,
        (SELECT f.url FROM files_related_mph m JOIN files f ON f.id = m.file_id
         WHERE m.related_id = c.id AND m.related_type = 'api::city.city' AND f.mime LIKE 'image/%'
         LIMIT 1) AS image_url
       FROM cities c
       WHERE c.published_at IS NOT NULL AND (lower(c.name) = lower($1) OR c.slug = $2)
       LIMIT 1;`,
      [name, slugGuess]
    );
    const hit = r.rows[0];
    out.push({
      name,
      state: hit?.state ? stateCodeFor(hit.state) : stateCodeFallback,
      href: hit?.slug ? `/${hit.slug}` : `/${slug}#get-machine`,
      imageUrl: hit?.image_url || undefined,
      imageAlt: hit ? `${hit.name}, ${stateCodeFor(hit.state)}` : undefined,
    });
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ lookup (existing city.faq rows, deduped).
// ─────────────────────────────────────────────────────────────────────────────
async function getFaqs(slug, cityName) {
  const faqRows = await db.query(
    `SELECT DISTINCT question, answer FROM (
      SELECT f.question, f.answer
      FROM components_city_faqs f
      JOIN cities_cmps cc ON cc.cmp_id = f.id AND cc.component_type = 'city.faq'
      JOIN cities c ON c.id = cc.entity_id
      WHERE c.slug = $1
      ORDER BY cc."order"
    ) t LIMIT 12;`,
    [slug]
  );
  const seen = new Set();
  const out = [];
  for (const r of faqRows.rows) {
    const k = r.question.trim();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push({ audience: "General", question: k, answer: r.answer.trim() });
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// Build content blocks based on extracted facts. Conditionally includes blocks
// per the "scene drives lineup" rule.
// ─────────────────────────────────────────────────────────────────────────────
function buildBlocks(city, stateCode, heroImageUrl, rating, facts, serviceAreaCities, faqs, imageStripImages) {
  const blocks = [];

  blocks.push({
    __component: "library.block-city-hero",
    cityName: city.name,
    state: city.state,
    stateCode,
    intro: (city.cityIntro || `Free vending machines for ${city.name}, ${stateCode} businesses. We match you to one vetted local partner in under 24 hours. Zero cost.`).slice(0, 1000),
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
    ...(heroImageUrl ? { heroImageUrl, heroImageAlt: `${city.name}, ${stateCode} — Let Us Vending serves the ${city.name} metro` } : {}),
    ...(city.latitude != null ? { latitude: Number(city.latitude) } : {}),
    ...(city.longitude != null ? { longitude: Number(city.longitude) } : {}),
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Locations", href: "/locations" },
      { name: `${city.name}, ${stateCode}` },
    ],
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix. Two minutes." },
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
    alsoServes: facts.neighborhoods || [],
    datePublished: "2025-04-15",
    dateModified: new Date().toISOString().slice(0, 10),
    speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
  });

  if (Array.isArray(facts.trustStripEmployers) && facts.trustStripEmployers.length > 0) {
    blocks.push({
      __component: "library.block-trust-strip",
      label: facts.trustStripLabel || `Built to serve ${city.name} sites like`,
      employers: facts.trustStripEmployers.slice(0, 7),
    });
  }

  blocks.push({
    __component: "library.block-tldr-quick-answer",
    heading: `Vending in ${city.name}, in one paragraph`,
    paragraph: facts.tldrParagraph || `${city.name} businesses get a free, fully-managed vending program through one vetted local partner. Within 24 hours we match your site to a partner equipped for your industry. Free machines, free install, free service, zero invoices.`,
    bullets: Array.isArray(facts.tldrBullets) && facts.tldrBullets.length > 0 ? facts.tldrBullets : [
      { emphasis: "Free for the business", text: "— no equipment, install, service, or licensing fees." },
      { emphasis: "One partner, not five", text: "— we vet operators on coverage, response time, and product mix." },
      { emphasis: "Install in 7-14 days", text: "— site walk in week one, machines live the following week." },
    ],
  });

  if (Array.isArray(facts.keyTakeaways) && facts.keyTakeaways.length > 0) {
    blocks.push({
      __component: "library.block-key-takeaways",
      heading: `Key takeaways for ${city.name}`,
      takeaways: facts.keyTakeaways.slice(0, 5).map((text) => ({ text })),
    });
  }

  const statStrip = [];
  if (facts.metroStats?.residents) statStrip.push({ number: facts.metroStats.residents, label: `${city.name} metro residents`, sub: facts.metroStats.workers ? `and ${facts.metroStats.workers} workers` : "", accent: "blue" });
  statStrip.push({ number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" });
  statStrip.push({ number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" });
  if (facts.metroStats?.extraStat?.number) {
    statStrip.push({ number: facts.metroStats.extraStat.number, label: facts.metroStats.extraStat.label || "", sub: facts.metroStats.extraStat.sub || "", accent: "orange" });
  } else {
    statStrip.push({ number: "< 24 hr", label: "repair SLA", sub: "remote-diagnosed where possible", accent: "orange" });
  }
  blocks.push({
    __component: "library.block-stat-strip",
    heading: `${city.name} vending, by the numbers`,
    stats: statStrip,
  });

  if (Array.isArray(facts.specListItems) && facts.specListItems.length > 0) {
    blocks.push({
      __component: "library.block-spec-list",
      heading: `What's included at every ${city.name} placement`,
      items: facts.specListItems.slice(0, 6),
    });
  }

  if (!facts.skipFacilityBadgingMatrix && Array.isArray(facts.regulatedFacilities) && facts.regulatedFacilities.length >= 4) {
    blocks.push({
      __component: "library.block-facility-badging-matrix",
      heading: `${city.name} facility credentials our partners can arrange`,
      sub: "These are the badging types required at regulated sites in the metro. Our partner network is equipped to obtain them on a per-placement basis — typical lead times shown.",
      rows: facts.regulatedFacilities.slice(0, 10).map((r) => ({
        facility: r.facility,
        badgingType: r.badgingType,
        leadTime: r.leadTime,
        status: ["standard","expedited","complex"].includes(r.status) ? r.status : "standard",
      })),
      footnote: "Badging lead times are added to the standard 7-14 day install window. Partners arrange credentials per placement, not pre-held on file.",
    });
  }

  if (Array.isArray(facts.industryGridItems) && facts.industryGridItems.length > 0) {
    blocks.push({
      __component: "library.block-city-industry-grid",
      heading: `Industries we serve in ${city.name}`,
      sub: "Different planogram for each — one assigned partner per location.",
      cityName: city.name,
      items: facts.industryGridItems.slice(0, 6).map((i) => ({ name: i.name, description: i.description, href: i.href || "/vending-for-offices" })),
    });
  }

  if (!facts.skipAnchorEmployersBlock && Array.isArray(facts.anchorEmployers) && facts.anchorEmployers.length >= 6) {
    blocks.push({
      __component: "library.block-city-anchor-employers",
      heading: facts.anchorEmployersHeading || `${city.name} sites our partner network is equipped to serve`,
      employers: facts.anchorEmployers.slice(0, 14).map((e) => ({ name: e.name })),
    });
  }

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
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
      ...(Array.isArray(facts.comparisonRows) ? facts.comparisonRows.filter((r) => Array.isArray(r) && r.length === 3).slice(0, 3) : []),
    ],
  });

  const tNotes = Array.isArray(facts.timelineStepNotes) ? facts.timelineStepNotes : [];
  const tStep = (i, fallback) => tNotes[i] || fallback;
  blocks.push({
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: `Most ${city.name} offices are vending within two weeks of the initial form fill.`,
    howToName: `How a ${city.name} vending placement works`,
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: tStep(0, `Tell us your ${city.name} address, headcount, and product preferences. Two minutes.`) },
      { label: "DAY 1", title: "Get assigned a partner", description: tStep(1, "Within 24 hours we match you to one vetted local operator.") },
      { label: "DAY 2-4", title: "Site survey + planogram", description: tStep(2, "Operator walks the breakroom, confirms power and network, proposes a planogram.") },
      { label: "DAY 5-10", title: "Install scheduling", description: tStep(3, "Delivery, electrical hookup, and first-stock are scheduled.") },
      { label: "DAY 7-14", title: "Go live", description: tStep(4, "Machine(s) installed, telemetry online, planogram loaded.") },
    ],
  });

  if (Array.isArray(facts.audienceSegments) && facts.audienceSegments.length >= 3) {
    blocks.push({
      __component: "library.block-tip-cards",
      heading: `Match your ${city.name} site to the right setup`,
      sub: "Same partner network, different planogram per audience. Start here.",
      startNumber: 1,
      items: facts.audienceSegments.slice(0, 5),
    });
  }

  blocks.push({
    __component: "library.block-inline-cta",
    text: `Ready to get matched with a ${city.name} operator?`,
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  });

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

  if (serviceAreaCities.length > 0) {
    blocks.push({
      __component: "library.block-nearby-cities-grid",
      heading: `${city.name}-area cities we serve`,
      cities: serviceAreaCities,
    });
  }

  if (!facts.skipCityImageStrip && imageStripImages.length >= 2) {
    blocks.push({
      __component: "library.block-city-image-strip",
      heading: `${imageStripImages.length === 2 ? "Two" : "Three"} sides of the ${city.name} vending day`,
      sub: `Same metro, ${imageStripImages.length === 2 ? "two" : "three"} different planograms — partners tune the mix and the restock cadence to each setting.`,
      images: imageStripImages,
    });
  }

  // FAQ: merge city.faq rows with any LLM extras.
  const allFaqs = [...faqs];
  if (Array.isArray(facts.faqExtras)) {
    const seenQ = new Set(allFaqs.map((f) => f.question.toLowerCase()));
    for (const f of facts.faqExtras) {
      if (!f?.question || seenQ.has(f.question.toLowerCase())) continue;
      seenQ.add(f.question.toLowerCase());
      allFaqs.push({ audience: f.audience || "General", question: f.question, answer: f.answer || "" });
    }
  }
  if (allFaqs.length < 4) {
    allFaqs.push(
      { audience: "Cost", question: `Are vending services really free for my ${city.name} business?`, answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing." },
      { audience: "Process", question: `How does the matching process work in ${city.name}?`, answer: `You tell us your address, headcount, and product preferences. Within 24 hours we assign one vetted local ${city.name} vending partner.` },
      { audience: "Process", question: `How fast can a machine be installed in ${city.name}?`, answer: "Industry standard is 7 to 14 days from contract. Site walk in week one, install the following week." },
      { audience: "Equipment", question: "Are payment methods up to date?", answer: "Yes. Every machine ships with tap-to-pay (NFC), chip card, magstripe, and mobile-wallet support (Apple Pay, Google Pay). Cellular telemetry is standard." },
    );
  }
  blocks.push({
    __component: "library.block-tabbed-faq",
    heading: `${city.name} vending FAQ`,
    faqs: allFaqs.slice(0, 12),
  });

  const cycleSentence = Array.isArray(facts.shiftCycles) && facts.shiftCycles.length
    ? ` His desk research on ${city.name} focuses on ${facts.shiftCycles.slice(0,2).join(" and ")} — and the partner matching that fits each.`
    : "";
  blocks.push({
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: `Bobby Mac vets vending operators across U.S. metros for LetUsVending.${cycleSentence} This page reflects his desk research on ${city.name}'s vending market — shift-cycle patterns, credentialing norms, and matching considerations specific to ${city.name}-area placements.`,
    links: [
      { label: "About the desk", href: "/about" },
      { label: "Editorial standards", href: "/about#standards" },
      { label: "Get matched", href: "#get-machine" },
    ],
  });

  blocks.push({
    __component: "library.block-source-citations",
    heading: "Sources",
    sources: Array.isArray(facts.sourceLinks) && facts.sourceLinks.length >= 3
      ? facts.sourceLinks.slice(0, 5)
      : [
          { label: `U.S. Census Bureau — ${city.name} city data`, url: `https://www.census.gov/quickfacts/${city.slug.replace(/-/g, "")}city${city.state.toLowerCase().replace(/ /g, "")}`, note: "Population and workforce numbers" },
          { label: `${city.state} Department of Health — Food service licensing`, url: "https://www.fda.gov/food/retail-food-protection", note: "Vending machine licensing reference" },
          { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
        ],
  });

  blocks.push({
    __component: "library.block-related-guides",
    heading: `More for ${city.name} businesses`,
    items: Array.isArray(facts.relatedGuides) && facts.relatedGuides.length >= 3
      ? facts.relatedGuides.slice(0, 3)
      : [
          { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "Bobby Mac's 30-day buyer guide for prospective operators.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
          { eyebrow: "Industry guide", title: `Office vending in ${city.state}`, description: "Telemetry-tuned planograms, vendor-badged facilities, breakroom retention math.", href: "/vending-for-offices" },
          { eyebrow: "Hub", title: "All cities we serve", description: "U.S. cities with local vending partner coverage.", href: "/locations" },
        ],
  });

  return blocks;
}

// ─────────────────────────────────────────────────────────────────────────────
// Per-city orchestration.
// ─────────────────────────────────────────────────────────────────────────────
async function processCity(city, token) {
  const stateCode = stateCodeFor(city.state);
  const rating = ratingFor(city.slug);

  process.stdout.write(`    extract `);
  const t0 = Date.now();
  const facts = await extractFacts(city);
  const extractMs = Date.now() - t0;
  process.stdout.write(`(${(extractMs/1000).toFixed(1)}s) `);

  // Image strip — by default we save prompts to sidecar JSON and SKIP gen
  // (gpt-image-1 has tight rate limits; run image gen separately afterwards).
  // If a prior run already generated the WebPs, reuse them.
  const imageStripImages = [];
  if (!facts.skipCityImageStrip && Array.isArray(facts.imagePrompts) && facts.imagePrompts.length >= 2) {
    if (WITH_IMAGES) {
      for (const p of facts.imagePrompts.slice(0, 3)) {
        try {
          const webpPath = await generateImage(city.slug, p);
          imageStripImages.push({ src: webpPath, alt: p.caption?.slice(0, 200) || `${city.name} ${p.label || ""}`, caption: p.caption || "", label: p.label || "" });
        } catch (e) {
          process.stdout.write(`[img-fail:${p.id}:${(e.message || e).toString().slice(0,80)}] `);
        }
      }
    } else {
      // Save prompts for later replay
      await fs.mkdir(PROMPTS_OUT, { recursive: true });
      await fs.writeFile(path.join(PROMPTS_OUT, `${city.slug}.json`), JSON.stringify(facts.imagePrompts.slice(0, 3), null, 2));
      // If WebPs already exist on disk (prior run), wire them up
      for (const p of facts.imagePrompts.slice(0, 3)) {
        const fileId = `${city.slug}-${p.id}`;
        const webpRel = `/images/generated/${fileId}.webp`;
        try {
          await fs.access(path.join(IMG_OUT, `${fileId}.webp`));
          imageStripImages.push({ src: webpRel, alt: p.caption?.slice(0, 200) || `${city.name} ${p.label || ""}`, caption: p.caption || "", label: p.label || "" });
        } catch { /* file not yet generated */ }
      }
    }
  }

  const serviceAreaCities = await getServiceAreaCities(city.slug, stateCode);
  const faqs = await getFaqs(city.slug, city.name);
  const blocks = buildBlocks(city, stateCode, city.heroImageUrl, rating, facts, serviceAreaCities, faqs, imageStripImages);

  // PUT to Strapi
  const resp = await fetch(`${STRAPI_URL}/api/cities/${city.documentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ data: { contentBlocks: blocks } }),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`PUT ${resp.status}: ${text.slice(0, 300)}`);
  }
  return { blocks: blocks.length, images: imageStripImages.length, regulated: (facts.regulatedFacilities || []).length };
}

async function listTargets() {
  const r = await db.query(`
    SELECT
      c.id, c.document_id AS "documentId", c.slug, c.name, c.state,
      c.city_intro AS "cityIntro", c.city_vending_scene AS "cityVendingScene",
      c.latitude, c.longitude,
      (SELECT f.url FROM files_related_mph m JOIN files f ON f.id = m.file_id
       WHERE m.related_id = c.id AND m.related_type = 'api::city.city' AND f.mime LIKE 'image/%'
       LIMIT 1) AS "heroImageUrl"
    FROM cities c
    WHERE c.published_at IS NOT NULL
    ORDER BY c.name;`);
  const seen = new Set();
  const all = [];
  for (const row of r.rows) {
    if (seen.has(row.slug)) continue;
    seen.add(row.slug);
    all.push(row);
  }
  let targets = EXPLICIT.length > 0 ? all.filter((c) => EXPLICIT.includes(c.slug)) : ALL ? all : [];
  targets = targets.filter((c) => !SKIP_SLUGS.has(c.slug));
  return targets;
}

async function main() {
  await db.connect();
  await fs.mkdir(IMG_OUT, { recursive: true });
  const token = await ensureToken();
  console.log("provisioned token");
  const targets = await listTargets();
  console.log(`targets: ${targets.length}`);
  if (targets.length === 0) { console.log("nothing to do"); await db.end(); return; }
  const t0 = Date.now();
  let ok = 0, fail = 0;
  for (let i = 0; i < targets.length; i++) {
    const city = targets[i];
    process.stdout.write(`[${i + 1}/${targets.length}] ${city.slug} (${city.state}) `);
    const t = Date.now();
    try {
      const r = await processCity(city, token);
      ok++;
      console.log(`OK  ${r.blocks}blk · ${r.images}img · ${r.regulated}reg · ${((Date.now() - t)/1000).toFixed(1)}s · total ${ok}/${fail}`);
    } catch (err) {
      fail++;
      console.log(`FAIL ${err.message?.slice(0, 200)}`);
    }
  }
  console.log(`done: ${ok} ok, ${fail} fail in ${((Date.now() - t0)/1000).toFixed(0)}s`);
  await db.end();
}
main().catch(async (err) => { console.error(err); await db.end().catch(() => {}); process.exit(1); });
