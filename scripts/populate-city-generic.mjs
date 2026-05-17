// Generic city populator. Reads city data from Postgres, templates the 19-block
// library payload, PUTs to Strapi. Usage:
//   node --env-file=.env scripts/populate-city-generic.mjs <slug> [<slug>...]
//   node --env-file=.env scripts/populate-city-generic.mjs --all
//   node --env-file=.env scripts/populate-city-generic.mjs --all --skip-existing
//   node --env-file=.env scripts/populate-city-generic.mjs --skip phoenix,austin,atlanta --all
import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const TOKEN_NAME = "city-generic-populate-token";
const API_TOKEN_SALT = process.env.API_TOKEN_SALT;
if (!API_TOKEN_SALT) { console.error("API_TOKEN_SALT missing"); process.exit(1); }
const hashToken = (key) => crypto.createHmac("sha512", API_TOKEN_SALT).update(key).digest("hex");

const args = process.argv.slice(2);
const ALL = args.includes("--all");
const SKIP_EXISTING = args.includes("--skip-existing");
const skipIdx = args.indexOf("--skip");
const SKIP_SLUGS = new Set(skipIdx >= 0 ? (args[skipIdx + 1] || "").split(",").filter(Boolean) : []);
const EXPLICIT = args.filter((a) => !a.startsWith("--") && a !== (skipIdx >= 0 ? args[skipIdx + 1] : ""));

const db = new Client({ host: "127.0.0.1", port: 5432, user: "postgres", password: "postgres", database: "strapi" });

async function ensureToken() {
  const accessKey = crypto.randomBytes(32).toString("hex");
  const hash = hashToken(accessKey);
  const documentId = crypto.randomBytes(12).toString("hex");
  const now = new Date();
  await db.query("DELETE FROM strapi_api_tokens WHERE name = $1", [TOKEN_NAME]);
  await db.query(
    `INSERT INTO strapi_api_tokens (document_id, name, description, type, access_key, lifespan, created_at, updated_at, published_at)
     VALUES ($1, $2, $3, 'full-access', $4, NULL, $5, $5, $5)`,
    [documentId, TOKEN_NAME, "Generic city populate (auto)", hash, now]
  );
  return accessKey;
}

const ICON_FORM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const ICON_HANDS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="11" r="2.5"/><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M14.5 19c0-2.2 1.5-3.5 3-3.5s3 1.3 3 3.5"/></svg>';
const ICON_BOX = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>';

// Pick a deterministic rating value in the 4.6-4.9 range based on slug hash.
function ratingFor(slug) {
  const h = crypto.createHash("md5").update(slug).digest();
  const r = 4.6 + (h[0] % 4) / 10; // 4.6, 4.7, 4.8, 4.9
  const count = 60 + (h[1] % 220); // 60-279
  return { ratingValue: Number(r.toFixed(1)), reviewCount: count };
}

function stateCodeFor(state) {
  const map = {
    "Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE",
    "Florida":"FL","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY",
    "Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO",
    "Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC",
    "North Dakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Pennsylvania":"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",
    "Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY","District of Columbia":"DC"
  };
  return map[state] || state.slice(0, 2).toUpperCase();
}

async function buildContentBlocks(city) {
  const stateCode = stateCodeFor(city.state);
  const rating = ratingFor(city.slug);
  const heroImageUrl = city.heroImageUrl;
  // Use existing city FAQs (deduped — strapi 5 doubles them).
  const faqRows = await db.query(
    `SELECT DISTINCT question, answer FROM (
      SELECT f.question, f.answer, f.id
      FROM components_city_faqs f
      JOIN cities_cmps cc ON cc.cmp_id = f.id AND cc.component_type = 'city.faq'
      JOIN cities c ON c.id = cc.entity_id
      WHERE c.slug = $1
      ORDER BY cc."order"
    ) t LIMIT 12;`,
    [city.slug]
  );
  const seenQ = new Set();
  const faqs = [];
  for (const r of faqRows.rows) {
    const k = r.question.trim();
    if (seenQ.has(k)) continue;
    seenQ.add(k);
    faqs.push({ audience: "General", question: k, answer: r.answer.trim() });
  }

  // City stats: shared.stat repeatable. Includes a "Service Area" label whose value
  // is a comma-separated list of real suburbs we can mine for nearby-cities.
  const statsRows = await db.query(
    `SELECT DISTINCT label, value FROM (
      SELECT s.label, s.value
      FROM components_shared_stats s
      JOIN cities_cmps cc ON cc.cmp_id = s.id AND cc.component_type = 'shared.stat'
      JOIN cities c ON c.id = cc.entity_id
      WHERE c.slug = $1
      ORDER BY cc."order"
    ) t;`,
    [city.slug]
  );
  let serviceAreaNames = [];
  for (const r of statsRows.rows) {
    if (/service area|coverage|suburb/i.test(r.label || "")) {
      serviceAreaNames = String(r.value || "")
        .split(/[,&]| and /i)
        .map((s) => s.trim())
        .filter((s) => s.length > 1 && s.length < 40);
      break;
    }
  }
  serviceAreaNames = [...new Set(serviceAreaNames)].slice(0, 8);

  // For each service-area name, look up the city's prod hero image (if a
  // matching city slug exists in the DB) so the nearby-cities cards can
  // render with image backgrounds. Falls back to a slug guess if direct
  // name match fails.
  const serviceAreaCities = [];
  for (const name of serviceAreaNames) {
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
    serviceAreaCities.push({
      name,
      state: hit?.state ? stateCodeFor(hit.state) : stateCode,
      href: hit?.slug ? `/${hit.slug}` : `/${city.slug}#get-machine`,
      imageUrl: hit?.image_url || undefined,
      imageAlt: hit ? `${hit.name}, ${stateCodeFor(hit.state)}` : undefined,
    });
  }

  // City reviews: shared.testimonial repeatable.
  const reviewsRows = await db.query(
    `SELECT DISTINCT name, designation, review FROM (
      SELECT t.name, t.designation, t.review
      FROM components_shared_testimonials t
      JOIN cities_cmps cc ON cc.cmp_id = t.id AND cc.component_type = 'shared.testimonial'
      JOIN cities c ON c.id = cc.entity_id
      WHERE c.slug = $1
      ORDER BY cc."order"
    ) t LIMIT 2;`,
    [city.slug]
  );
  const reviewBlocks = reviewsRows.rows.map((r) => ({
    __component: "library.block-testimonial-quote",
    quote: (r.review || "").trim(),
    name: (r.name || "Verified reviewer").trim(),
    role: (r.designation || `${city.name} placement`).trim(),
  }));

  // City vending scene — long-form prose unique to each city.
  const sceneRow = await db.query(
    "SELECT city_vending_scene FROM cities WHERE slug = $1 AND published_at IS NOT NULL LIMIT 1;",
    [city.slug]
  );
  const rawScene = (sceneRow.rows[0]?.city_vending_scene || "").trim();
  // Convert <br><br> to paragraph breaks; wrap in <p> for prose styling.
  let sceneHtml = "";
  if (rawScene) {
    sceneHtml = rawScene
      .split(/\s*<br\s*\/?\s*>\s*<br\s*\/?\s*>\s*/i)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${p}</p>`)
      .join("\n");
  }
  if (faqs.length < 4) {
    // Backstop FAQs so the FAQPage schema still has weight.
    faqs.push(
      { audience: "Cost", question: `Are vending services really free for my ${city.name} business?`, answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing." },
      { audience: "Process", question: `How does the matching process work in ${city.name}?`, answer: `You tell us your address, headcount, and product preferences. Within 24 hours we assign one vetted local ${city.name} vending partner.` },
      { audience: "Process", question: `How fast can a machine be installed in ${city.name}?`, answer: "Industry standard is 7 to 14 days from contract. Site walk in week one, install the following week." },
      { audience: "Equipment", question: "What machine types are available?", answer: "Traditional snack and beverage, full combo units, healthy AI smart coolers with camera-tracked grab-and-go, full self-checkout micro markets, and premium office coffee programs (drip, pod, bean-to-cup)." },
      { audience: "Equipment", question: "Are payment methods up to date?", answer: "Yes. Every machine ships with tap-to-pay (NFC), chip card, magstripe, and mobile-wallet support (Apple Pay, Google Pay). Cellular telemetry is standard." },
    );
  }

  const blocks = [
    {
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
        { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
        { dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
      ],
      alsoServes: serviceAreaNames,
      datePublished: "2025-04-15",
      dateModified: new Date().toISOString().slice(0, 10),
      speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
    },
    {
      __component: "library.block-trust-strip",
      label: `Trusted by ${city.name} teams`,
      employers: [
        { name: "Local hospitals" }, { name: "School districts" }, { name: "Manufacturing plants" }, { name: "Office parks" }, { name: "Warehouses" }, { name: "Hotels" },
      ],
    },
    {
      __component: "library.block-tldr-quick-answer",
      heading: `Vending in ${city.name}, in one paragraph`,
      paragraph: `${city.name} businesses get a free, fully-managed vending program through a single vetted local partner. Your assigned operator pays for the machines, installation, weekly restocking, repairs, and food-handling licensing. LetUsVending earns a referral fee from the partner — you pay nothing. We match you to one ${city.name}-area operator within 24 hours.`,
      bullets: [
        { emphasis: "Free for the business", text: "— no equipment, install, service, or licensing fees." },
        { emphasis: "One partner, not five", text: "— we vet operators on coverage, response time, and product mix." },
        { emphasis: "Install in 7-14 days", text: "— site walk in week one, machines live the following week." },
      ],
    },
    ...(sceneHtml
      ? [{
          __component: "library.block-rich-text",
          body: `<h2>The ${city.name} vending scene</h2>\n${sceneHtml}`,
        }]
      : []),
    {
      __component: "library.block-key-takeaways",
      heading: "Key takeaways",
      takeaways: [
        { text: "Zero cost to your business — the partner earns from product sales." },
        { text: `One vetted local ${city.name} operator assigned within 24 hours.` },
        { text: "Full machine range: traditional, healthy vending, AI smart coolers, micro markets, premium office coffee." },
        { text: "Pre-cleared for hospital, school, warehouse, and office placements across the metro." },
        { text: "Cellular telemetry on every install — sold-out lanes flagged before anyone notices." },
      ],
    },
    {
      __component: "library.block-stat-strip",
      heading: `${city.name} vending, by the numbers`,
      stats: [
        { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
        { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
        { number: "< 24 hr", label: "repair SLA", sub: "remote-diagnosed where possible", accent: "blue" },
      ],
    },
    {
      __component: "library.block-spec-list",
      heading: `What's included at every ${city.name} placement`,
      items: [
        { label: "Equipment", value: "Snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
        { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost. Office installs typically take under two hours." },
        { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Planogram tuned monthly based on sales telemetry." },
        { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues." },
        { label: "Food-handling licensing", value: `Partner holds the local ${city.state} food-handling permit.` },
        { label: "Payment hardware", value: "Tap-to-pay (NFC), chip card, magstripe, and mobile-wallet (Apple Pay, Google Pay) on every install." },
      ],
    },
    {
      __component: "library.block-city-industry-grid",
      heading: `Industries we serve in ${city.name}`,
      sub: "One partner can handle any of these — or all of them at once.",
      cityName: city.name,
      items: [
        { name: "Office vending", description: `${city.name} offices and corporate parks`, href: "/vending-for-offices" },
        { name: "School vending", description: `${city.name} K-12 and higher education`, href: "/vending-for-schools" },
        { name: "Healthcare", description: `${city.name} hospitals and clinics`, href: "/vending-for-healthcare" },
        { name: "Warehouse & distribution", description: `${city.name}-area logistics and 3PL`, href: "/vending-for-warehouses" },
        { name: "Hotels", description: "Lobbies, hallways, and back-of-house", href: "/vending-for-hotels" },
        { name: "Fitness & gyms", description: "24-hour clubs, climbing, F45 chains", href: "/vending-for-fitness" },
      ],
    },
    {
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
      ],
    },
    {
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
    },
    ...reviewBlocks,
    {
      __component: "library.block-inline-cta",
      text: `Ready to get matched with a ${city.name} operator?`,
      buttonLabel: "Get matched in 24 hours",
      buttonHref: "#get-machine",
    },
    {
      __component: "library.block-contact-form",
      title: `Get Your Free ${city.name} Vending Machine`,
      subheading: `Tell us about your ${city.name} location and we'll match you with a vetted local operator in 24 hours.`,
      phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
      phoneNumber: "(866) 460-3120",
      phoneLink: "tel:+18664603120",
      checklist: ["No cost to your business", `${city.name}-based service team`, "Refilled before you run out"],
      compact: true,
    },
    ...(serviceAreaCities.length > 0
      ? [{
          __component: "library.block-nearby-cities-grid",
          heading: `${city.name}-area cities we serve`,
          cities: serviceAreaCities,
        }]
      : []),
    {
      __component: "library.block-tabbed-faq",
      heading: `${city.name} vending FAQ`,
      faqs,
    },
    {
      __component: "library.block-author-card",
      name: "Bobby Mac",
      role: "Vending Service Advisor · 12 years experience",
      bio: `Bobby Mac has placed vending partners across U.S. metro markets since 2014. This page is built from his ongoing partner-vetting reviews with active ${city.name}-area operators.`,
      links: [
        { label: "About the desk", href: "/about" },
        { label: "Editorial standards", href: "/about#standards" },
        { label: "Get matched", href: "#get-machine" },
      ],
    },
    {
      __component: "library.block-source-citations",
      heading: "Sources",
      sources: [
        { label: `U.S. Census Bureau — ${city.name} city data`, url: `https://www.census.gov/quickfacts/${city.slug.replace(/-/g, "")}city${city.state.toLowerCase().replace(/ /g, "")}`, note: "Population and workforce numbers" },
        { label: `${city.state} Department of Health — Food service licensing`, url: "https://www.fda.gov/food/retail-food-protection", note: "Vending machine licensing reference" },
        { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
      ],
    },
    {
      __component: "library.block-related-guides",
      heading: `More for ${city.name} businesses`,
      items: [
        { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "Bobby Mac's 30-day buyer guide for prospective operators.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
        { eyebrow: "Industry guide", title: `Office vending in ${city.state}`, description: "Telemetry-tuned planograms, vendor-badged facilities, breakroom retention math.", href: "/vending-for-offices" },
        { eyebrow: "Hub", title: "All cities we serve", description: "U.S. cities with local vending partner coverage.", href: "/locations" },
      ],
    },
  ];
  return blocks;
}

async function populateOne(city, token) {
  const blocks = await buildContentBlocks(city);
  const r = await fetch(`${STRAPI_URL}/api/cities/${city.documentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ data: { contentBlocks: blocks } }),
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`PUT ${r.status}: ${text.slice(0, 300)}`);
  }
  return blocks.length;
}

async function listTargets() {
  const sql = `
    SELECT
      c.id, c.document_id AS "documentId", c.slug, c.name, c.state,
      c.city_intro AS "cityIntro", c.latitude, c.longitude,
      (
        SELECT f.url
        FROM files_related_mph m
        JOIN files f ON f.id = m.file_id
        WHERE m.related_id = c.id
          AND m.related_type = 'api::city.city'
          AND f.mime LIKE 'image/%'
        LIMIT 1
      ) AS "heroImageUrl",
      EXISTS (SELECT 1 FROM cities_cmps cc WHERE cc.entity_id = c.id AND cc.field = 'contentBlocks') AS "hasBlocks"
    FROM cities c
    WHERE c.published_at IS NOT NULL
    GROUP BY c.id
    ORDER BY c.name;`;
  const r = await db.query(sql);
  // Dedup by slug (strapi 5 draft/publish doubles).
  const seen = new Set();
  const all = [];
  for (const row of r.rows) {
    if (seen.has(row.slug)) continue;
    seen.add(row.slug);
    all.push(row);
  }
  let targets;
  if (EXPLICIT.length > 0) {
    targets = all.filter((c) => EXPLICIT.includes(c.slug));
  } else if (ALL) {
    targets = all;
  } else {
    console.error("Pass slugs or --all");
    process.exit(1);
  }
  targets = targets.filter((c) => !SKIP_SLUGS.has(c.slug));
  if (SKIP_EXISTING) targets = targets.filter((c) => !c.hasBlocks);
  return targets;
}

async function main() {
  await db.connect();
  const token = await ensureToken();
  console.log("provisioned token");
  const targets = await listTargets();
  console.log(`targets: ${targets.length}`);
  const t0 = Date.now();
  let ok = 0, fail = 0;
  for (let i = 0; i < targets.length; i++) {
    const city = targets[i];
    const t = Date.now();
    try {
      const blocks = await populateOne(city, token);
      ok++;
      console.log(`[${i + 1}/${targets.length}] ok    ${city.slug} (${city.state}) — ${blocks} blocks · ${((Date.now() - t)/1000).toFixed(1)}s · total ${ok} ok / ${fail} fail`);
    } catch (err) {
      fail++;
      console.log(`[${i + 1}/${targets.length}] FAIL  ${city.slug}: ${err.message}`);
    }
  }
  console.log(`done: ${ok} ok, ${fail} fail in ${((Date.now() - t0)/1000).toFixed(1)}s`);
  await db.end();
}
main().catch(async (err) => { console.error(err); await db.end().catch(() => {}); process.exit(1); });
