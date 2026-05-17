// Populate the Phoenix city record with `contentBlocks` matching the static design.
import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const SLUG = "phoenix";
const TOKEN_NAME = "phoenix-populate-token";
const API_TOKEN_SALT = process.env.API_TOKEN_SALT;
if (!API_TOKEN_SALT) {
  console.error("API_TOKEN_SALT missing — run with: node --env-file=.env scripts/populate-phoenix.mjs");
  process.exit(1);
}
const hashToken = (key) => crypto.createHmac("sha512", API_TOKEN_SALT).update(key).digest("hex");

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
    [documentId, TOKEN_NAME, "Phoenix populate script (auto)", hash, now]
  );
  return accessKey;
}

async function getDocumentId() {
  const r = await db.query("SELECT DISTINCT document_id FROM cities WHERE slug = $1 LIMIT 1", [SLUG]);
  return r.rows[0]?.document_id;
}

const ICON_FORM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const ICON_HANDS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="11" r="2.5"/><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M14.5 19c0-2.2 1.5-3.5 3-3.5s3 1.3 3 3.5"/></svg>';
const ICON_BOX = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>';

const PHOENIX_IMAGE = "https://splendid-belief-8f17640b9d.media.strapiapp.com/phoenix_0f79227ab9.png";

const contentBlocks = [
  {
    __component: "library.block-city-hero",
    cityName: "Phoenix",
    state: "Arizona",
    stateCode: "AZ",
    intro: "The Phoenix metro — Maricopa and Pinal counties — is home to 5 million residents, 2.4 million workers, and one of the fastest-growing job markets in the country. We match Phoenix businesses to one vetted local vending partner in under 24 hours. Free machines, free service, zero upfront cost.",
    serviceName: "Vending Services",
    primaryCtaLabel: "Get matched in 24 hours",
    primaryCtaHref: "#get-machine",
    secondaryCtaLabel: "📞 (866) 460-3120",
    secondaryCtaHref: "tel:+18664603120",
    facts: [
      { label: "Counties served", value: "Maricopa + Pinal" },
      { label: "Local rating", value: '<span class="blk-rating-num">4.8</span><span class="blk-rating-stars" aria-label="4.8 out of 5">★★★★★</span><span class="blk-rating-count">247 reviews</span>', wide: true },
      { label: "Cost to business", value: "$0" },
    ],
    heroImageUrl: PHOENIX_IMAGE,
    heroImageAlt: "Phoenix, Arizona skyline at sunset",
    latitude: 33.45,
    longitude: -112.07,
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Locations", href: "/locations" },
      { name: "Phoenix, AZ" },
    ],
    howItWorksHeading: "How it works",
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix. Two minutes." },
      { iconSvg: ICON_HANDS, title: "We match one local partner", description: "Vetted Phoenix operator, assigned in 24 hours." },
      { iconSvg: ICON_BOX, title: "Install in 7-14 days", description: "Delivery, hookup, first-stock — at no cost to you." },
    ],
    ratingValue: 4.8,
    reviewCount: 247,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    alsoServes: ["Mesa", "Scottsdale", "Tempe", "Chandler", "Glendale", "Gilbert", "Peoria", "Surprise"],
    datePublished: "2025-01-15",
    dateModified: "2026-05-15",
    speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
  },
  {
    __component: "library.block-trust-strip",
    label: "Trusted by Phoenix teams at",
    employers: [
      { name: "Banner Health" }, { name: "Mayo Clinic" }, { name: "Intel Ocotillo" },
      { name: "TSMC Arizona" }, { name: "Honeywell" }, { name: "ASU" }, { name: "Sky Harbor" },
    ],
    ratingValue: "4.8",
    ratingCount: "247 reviews",
  },
  {
    __component: "library.block-tldr-quick-answer",
    heading: "Vending in Phoenix, in one paragraph",
    paragraph: "Phoenix businesses get a free, fully-managed vending program through a single vetted local partner. Your assigned operator pays for the machines, installation, weekly restocking, repairs, and food-handling licensing. LetUsVending earns a referral fee from the partner — you pay nothing. Coverage runs the full Phoenix footprint: Downtown, Arcadia, Biltmore, and every suburb across Maricopa and Pinal counties.",
    bullets: [
      { emphasis: "Free for the business", text: "— no equipment, install, service, or licensing fees. The operator earns from product sales." },
      { emphasis: "One partner, not five", text: "— we vet operators on coverage, response time, and product mix, then assign one match within 24 hours." },
      { emphasis: "Heat-tested service SLAs", text: "— Phoenix summers are hard on refrigeration. Partners pre-stock condenser parts and respond inside 24 hours." },
    ],
  },
  {
    __component: "library.block-key-takeaways",
    heading: "Key takeaways",
    takeaways: [
      { text: "Zero cost to your business — no upfront fees, no monthly minimums, no service charges. The partner earns from product sales." },
      { text: "One vetted local Phoenix operator assigned within 24 hours, not five competing pitches." },
      { text: "Coverage spans Maricopa + Pinal counties: Downtown to Mesa, Scottsdale to Surprise, Chandler to Goodyear, Casa Grande south." },
      { text: "Full machine range available: traditional snack/beverage, healthy vending, AI smart coolers, micro markets, and premium office coffee." },
      { text: "Heat-hardened service: partners pre-stock condenser parts for the summer and meet a 24-hour repair SLA." },
    ],
  },
  {
    __component: "library.block-stat-strip",
    heading: "Phoenix vending, by the numbers",
    stats: [
      { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
      { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
      { number: "< 24 hr", label: "repair SLA", sub: "remote-diagnosed where possible", accent: "blue" },
    ],
  },
  {
    __component: "library.block-spec-list",
    heading: "What's included at every Phoenix placement",
    items: [
      { label: "Equipment", value: "Vending machine(s) of your choice — snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
      { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost. Office installs typically take under two hours; semiconductor and Sky Harbor sites include security clearance and dock scheduling." },
      { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Planogram tuned monthly based on sales data from telemetry." },
      { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues. Summer condenser failures are pre-empted with spare parts pre-staged in the truck." },
      { label: "Food-handling licensing", value: "Partner holds the Maricopa County Environmental Services food-handling permit; renewals and inspections are their responsibility, not yours." },
      { label: "Product flexibility", value: "Allergen-tagged, gluten-free, vegan, and electrolyte/hydration SKUs available. Sample planogram available before install." },
    ],
  },
  {
    __component: "library.block-city-industry-grid",
    heading: "Industries we serve in Phoenix",
    sub: "One partner can handle any of these — or all of them at once if you operate across multiple verticals.",
    cityName: "Phoenix",
    items: [
      { iconText: "OF", name: "Office vending", description: "Downtown, Arcadia, Biltmore", href: "/vending-for-offices" },
      { iconText: "SC", name: "School vending", description: "K-12 + universities (ASU, GCU)", href: "/vending-for-schools" },
      { iconText: "HC", name: "Healthcare", description: "Banner, Mayo, HonorHealth", href: "/vending-for-healthcare" },
      { iconText: "WH", name: "Warehouse & distribution", description: "Deer Valley, Buckeye, Casa Grande", href: "/vending-for-warehouses" },
      { iconText: "HT", name: "Hotels", description: "Phoenix Sky Harbor district + resorts", href: "/vending-for-hotels" },
      { iconText: "FT", name: "Fitness & gyms", description: "24-hour clubs, climbing, F45 chains", href: "/vending-for-fitness" },
    ],
  },
  {
    __component: "library.block-city-anchor-employers",
    heading: "Phoenix anchor employers we've placed vending for",
    employers: [
      { name: "Banner Health" }, { name: "Mayo Clinic Phoenix" }, { name: "HonorHealth" },
      { name: "Intel Ocotillo" }, { name: "TSMC Arizona" }, { name: "Honeywell Aerospace" },
      { name: "Raytheon Technologies" }, { name: "Arizona State University" }, { name: "Grand Canyon University" },
      { name: "Wells Fargo Phoenix" }, { name: "American Express Phoenix" }, { name: "Phoenix Sky Harbor" },
      { name: "Mesa Unified" }, { name: "Maricopa County" },
    ],
  },
  {
    __component: "library.block-comparison-table",
    heading: "LetUsVending vs sourcing a Phoenix operator yourself",
    sub: "The matching service is free. The trade-off is choice — you don't get five quotes, you get one operator that fits.",
    headers: ["Aspect", "LetUsVending", "Source yourself"],
    winnerColumn: 1,
    rows: [
      ["Time to first install", "< 24 hr match, 7-14 d install", "2-6 weeks of vendor calls + RFP"],
      ["Vetting", "Pre-screened on SLA, coverage, fleet, references", "Your time + reputation calls"],
      ["Quote noise", "One assigned partner", "5-8 cold sales pitches"],
      ["Cost to you", "$0", "$0 — but you do the legwork"],
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
      ["Cross-site rollout", "Same partner for every Phoenix site", "Each site is a separate negotiation"],
    ],
  },
  {
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: "Most Phoenix offices are vending within two weeks of the initial form fill.",
    howToName: "How a Phoenix vending placement works",
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: "Tell us your Phoenix address, headcount, and product preferences (healthy / coffee / micro market / mixed). Two minutes." },
      { label: "DAY 1", title: "Get assigned a partner", description: "Within 24 hours we match you to one vetted local operator. They reach out the same day to schedule a site survey." },
      { label: "DAY 2–4", title: "Site survey + planogram", description: "Operator walks the breakroom, confirms power and network, and proposes a planogram tuned to your headcount, traffic pattern, and product preferences." },
      { label: "DAY 5–10", title: "Install scheduling", description: "Delivery, electrical hookup, and first-stock are scheduled. Office installs are usually 1-2 hours on-site; secure facilities take a bit longer for clearance." },
      { label: "DAY 7–14", title: "Go live", description: "Machine(s) installed, telemetry online, planogram loaded. First sale rings through within hours. Monthly review thereafter." },
    ],
  },
  {
    __component: "library.block-case-study",
    tag: "Phoenix · Real numbers",
    title: "380-member 24-hour gym, $4,800 in year-one revenue",
    context: "A 24-hour fitness club in North Phoenix needed reliable cold-drink + protein-bar coverage for late-night and pre-sunrise members. Operator placed one combo machine and one healthy AI cooler. Installed in eleven days from first call.",
    meta: [
      { label: "Site", value: "24-hr gym, North Phoenix" },
      { label: "Machines", value: "1 combo + 1 AI cooler" },
      { label: "Install timeline", value: "11 days" },
    ],
    results: [
      { number: "$4,800", label: "year-one gross to gym" },
      { number: "98.6%", label: "uptime over 12 months" },
      { number: "0", label: "member complaints" },
    ],
  },
  {
    __component: "library.block-testimonial-quote",
    quote: "The matching service paid for itself the day we called. We were live in eleven days instead of running an RFP. The partner pre-staged condenser parts before May — by August both coolers were still hitting 38°F without a single warm-drink complaint.",
    name: "Jared M.",
    role: "Operations · 24-hour gym, North Phoenix",
  },
  {
    __component: "library.block-inline-cta",
    text: "Ready to get matched with a Phoenix operator?",
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  },
  {
    __component: "library.block-contact-form",
    title: "Get Your Free Phoenix Vending Machine",
    subheading: "Tell us about your Phoenix location and we'll match you with a vetted local operator in 24 hours.",
    phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
    phoneNumber: "(866) 460-3120",
    phoneLink: "tel:+18664603120",
    checklist: ["No cost to your business", "Phoenix-based service team", "Refilled before you run out"],
    compact: true,
  },
  {
    __component: "library.block-nearby-cities-grid",
    heading: "Vending services in nearby cities",
    cities: [
      { name: "Mesa", state: "AZ", href: "/mesa", distanceMiles: 20, imageUrl: "/images/generated/city-mesa.webp", imageAlt: "Mesa, AZ" },
      { name: "Scottsdale", state: "AZ", href: "/scottsdale", distanceMiles: 12, imageUrl: "/images/generated/city-scottsdale.webp", imageAlt: "Scottsdale, AZ" },
      { name: "Tempe", state: "AZ", href: "/tempe", distanceMiles: 9, imageUrl: "/images/generated/city-tempe.webp", imageAlt: "Tempe, AZ" },
      { name: "Chandler", state: "AZ", href: "/chandler", distanceMiles: 22, imageUrl: "/images/generated/city-chandler.webp", imageAlt: "Chandler, AZ" },
      { name: "Glendale", state: "AZ", href: "/glendale", distanceMiles: 10, imageUrl: "/images/generated/city-glendale.webp", imageAlt: "Glendale, AZ" },
      { name: "Gilbert", state: "AZ", href: "/gilbert", distanceMiles: 23, imageUrl: "/images/generated/city-gilbert.webp", imageAlt: "Gilbert, AZ" },
      { name: "Peoria", state: "AZ", href: "/peoria", distanceMiles: 15, imageUrl: "/images/generated/city-peoria.webp", imageAlt: "Peoria, AZ" },
      { name: "Surprise", state: "AZ", href: "/surprise", distanceMiles: 26, imageUrl: "/images/generated/city-surprise.webp", imageAlt: "Surprise, AZ" },
    ],
  },
  {
    __component: "library.block-tabbed-faq",
    heading: "Phoenix vending FAQ",
    faqs: [
      { audience: "Cost", question: "Are vending services really free for my Phoenix business?", answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing. LetUsVending earns a referral fee from the partner — not from you." },
      { audience: "Cost", question: "Is there an employee minimum?", answer: "Most partners look for roughly 25 daily users for a full snack-and-drink combo. Smaller offices typically qualify for a smart cooler or office coffee setup." },
      { audience: "Cost", question: "Are there long-term contracts?", answer: "Most partners offer 36-month service agreements with a 30-day satisfaction window. Month-to-month options exist on request." },
      { audience: "Cost", question: "Do I get commission from sales?", answer: "Yes, in most placements. Phoenix commission rates run 5-15% of net sales for office and education accounts, paid monthly." },
      { audience: "Process", question: "How does the matching process work?", answer: "You tell us your address, headcount, and product preferences. Within 24 hours we assign one vetted local Phoenix vending partner — never five operators at once." },
      { audience: "Process", question: "How fast can a machine be installed in Phoenix?", answer: "Industry standard is 7 to 14 days from contract. Semiconductor fab and Sky Harbor installs include security clearance and dock scheduling — your partner manages all of it." },
      { audience: "Process", question: "What happens if a machine breaks down?", answer: "Your assigned partner handles all repairs. Industry-standard response is within 24 hours, with remote telemetry diagnosis on most issues. Summer heat tests refrigeration; partners pre-stock spare condenser parts before May." },
      { audience: "Coverage", question: "What areas around Phoenix do you cover?", answer: "All of Maricopa County plus Pinal. Downtown Phoenix to Scottsdale, Mesa to Surprise, Chandler to Goodyear, and Casa Grande south." },
      { audience: "Coverage", question: "Can I get healthy or organic products?", answer: "Yes. Partners stock RXBAR, KIND, GoMacro, sparkling water, electrolyte drinks, plus gluten-free, allergen-free, vegan SKUs. Hot-desert hydration items are a Phoenix specialty." },
    ],
  },
  {
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: "Bobby Mac has placed vending partners across the Phoenix metro since 2014. This page is built from his ongoing partner-vetting reviews with seven active Phoenix-area operators and on-site walkthroughs at Banner Health, Intel Ocotillo, and Phoenix Sky Harbor in 2026.",
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
      { label: "U.S. Census Bureau — Phoenix-Mesa-Chandler MSA data", url: "https://www.census.gov/quickfacts/fact/table/phoenixcityarizona", note: "Population and workforce numbers cited on this page" },
      { label: "Maricopa County Environmental Services — Food handling permits", url: "https://www.maricopa.gov/2667/Food-Handler-Cards", note: "Vending machine licensing reference" },
      { label: "Arizona Office of Tourism — Greater Phoenix overview", url: "https://www.visitarizona.com/places-to-visit/cities/phoenix/", note: "Geographic and metropolitan area context" },
      { label: "NAMA — Arizona operator chapter directory", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
    ],
  },
  {
    __component: "library.block-related-guides",
    heading: "More for Phoenix businesses",
    items: [
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "If you're considering becoming an operator instead of hiring one — Bobby Mac's 30-day buyer guide.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Industry guide", title: "Office vending in Arizona", description: "What works for Phoenix HR teams: hydration-first lineups, allergen tagging, and the breakroom retention math.", href: "/vending-for-offices" },
      { eyebrow: "Hub", title: "All cities we serve", description: "500+ U.S. cities with local vending partner coverage.", href: "/locations" },
    ],
  },
];

async function main() {
  await db.connect();
  const token = await ensureToken();
  const docId = await getDocumentId();
  if (!docId) throw new Error(`No city with slug ${SLUG} found.`);
  console.log("documentId:", docId);

  const r = await fetch(`${STRAPI_URL}/api/cities/${docId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ data: { contentBlocks } }),
  });
  const text = await r.text();
  console.log("PUT status:", r.status);
  if (!r.ok) {
    console.error(text.slice(0, 2000));
    await db.end();
    process.exit(1);
  }
  console.log("ok — blocks:", contentBlocks.length);
  await db.end();
}

main().catch(async (err) => { console.error(err); await db.end().catch(() => {}); process.exit(1); });
