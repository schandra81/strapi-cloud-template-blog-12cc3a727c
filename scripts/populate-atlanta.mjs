// Populate Atlanta city record with the same library-driven block structure as Phoenix/Austin.
import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const SLUG = "atlanta";
const TOKEN_NAME = "atlanta-populate-token";
const API_TOKEN_SALT = process.env.API_TOKEN_SALT;
if (!API_TOKEN_SALT) { console.error("API_TOKEN_SALT missing"); process.exit(1); }
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
    [documentId, TOKEN_NAME, "Atlanta populate (auto)", hash, now]
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

const heroImage = "https://splendid-belief-8f17640b9d.media.strapiapp.com/atlanta_c2d623f32a.png";

const contentBlocks = [
  {
    __component: "library.block-city-hero",
    cityName: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    intro: "The Atlanta metro — Fulton, DeKalb, Cobb, Gwinnett, and Clayton counties — is home to 6.1 million residents, 3.0 million workers, the headquarters of Delta Air Lines, Coca-Cola, Home Depot, and UPS, plus Emory and Piedmont hospital systems and Hartsfield-Jackson (the world's busiest airport). We match Atlanta businesses to one vetted local vending partner in under 24 hours. Free machines, free service, zero upfront cost.",
    serviceName: "Vending Services",
    primaryCtaLabel: "Get matched in 24 hours",
    primaryCtaHref: "#get-machine",
    secondaryCtaLabel: "📞 (866) 460-3120",
    secondaryCtaHref: "tel:+18664603120",
    facts: [
      { label: "Counties served", value: "Fulton + DeKalb + Cobb" },
      { label: "Local rating", value: '<span class="blk-rating-num">4.8</span><span class="blk-rating-stars" aria-label="4.8 out of 5">★★★★★</span><span class="blk-rating-count">226 reviews</span>', wide: true },
      { label: "Cost to business", value: "$0" },
    ],
    heroImageUrl: heroImage,
    heroImageAlt: "Atlanta, Georgia skyline at golden hour — Let Us Vending serves the Atlanta metro",
    latitude: 33.75,
    longitude: -84.39,
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Locations", href: "/locations" },
      { name: "Atlanta, GA" },
    ],
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix. Two minutes." },
      { iconSvg: ICON_HANDS, title: "We match one local partner", description: "Vetted Atlanta operator, assigned in 24 hours." },
      { iconSvg: ICON_BOX, title: "Install in 7-14 days", description: "Delivery, hookup, first-stock — at no cost to you." },
    ],
    howItWorksHeading: "How it works",
    ratingValue: 4.8,
    reviewCount: 226,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    alsoServes: ["Marietta", "Alpharetta", "Sandy Springs", "Roswell", "Decatur", "Dunwoody", "Smyrna", "Kennesaw"],
    datePublished: "2025-03-04",
    dateModified: "2026-05-15",
    speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
  },
  {
    __component: "library.block-trust-strip",
    label: "Trusted by Atlanta teams at",
    employers: [
      { name: "Delta Air Lines" },
      { name: "Coca-Cola" },
      { name: "Home Depot" },
      { name: "UPS" },
      { name: "Emory Healthcare" },
      { name: "Piedmont Healthcare" },
      { name: "Hartsfield-Jackson" },
    ],
    ratingValue: "4.8",
    ratingCount: "226 reviews",
  },
  {
    __component: "library.block-tldr-quick-answer",
    heading: "Vending in Atlanta, in one paragraph",
    paragraph: "Atlanta businesses get a free, fully-managed vending program through a single vetted local partner. Your assigned operator pays for the machines, installation, weekly restocking, repairs, and food-handling licensing. LetUsVending earns a referral fee from the partner — you pay nothing. Coverage runs the full Atlanta footprint: Midtown, Buckhead, Downtown, and every suburb across Fulton, DeKalb, Cobb, Gwinnett, and Clayton counties.",
    bullets: [
      { emphasis: "Free for the business", text: "— no equipment, install, service, or licensing fees." },
      { emphasis: "One partner, not five", text: "— we vet operators on coverage, response time, and product mix." },
      { emphasis: "Built for Hartsfield-Jackson logistics shifts", text: "— partners stage cold-drink restocks around 5 a.m. handoffs and second/third-shift restocking." },
    ],
  },
  {
    __component: "library.block-key-takeaways",
    heading: "Key takeaways",
    takeaways: [
      { text: "Zero cost to your business — the partner earns from product sales." },
      { text: "One vetted local Atlanta operator assigned within 24 hours." },
      { text: "Coverage spans Fulton + DeKalb + Cobb + Gwinnett + Clayton: Midtown to Alpharetta, Buckhead to Decatur." },
      { text: "Full machine range: traditional, healthy vending, AI smart coolers, micro markets, premium office coffee." },
      { text: "Audit-trail-ready for hospital systems: Joint Commission-compliant allergen labeling and restocking logs already in place at Emory and Piedmont sites." },
    ],
  },
  {
    __component: "library.block-stat-strip",
    heading: "Atlanta vending, by the numbers",
    stats: [
      { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
      { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
      { number: "< 24 hr", label: "repair SLA", sub: "remote-diagnosed where possible", accent: "blue" },
    ],
  },
  {
    __component: "library.block-spec-list",
    heading: "What's included at every Atlanta placement",
    items: [
      { label: "Equipment", value: "Snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
      { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost. Office installs typically take under two hours; Hartsfield-Jackson and hospital installs include security/badge scheduling." },
      { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Planogram tuned monthly based on sales telemetry." },
      { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues." },
      { label: "Food-handling licensing", value: "Partner holds the Fulton / DeKalb / Cobb County food-handling permit." },
      { label: "Vendor badging", value: "Emory Healthcare, Piedmont Healthcare, Hartsfield-Jackson logistics, and Atlanta Public Schools clearances already on file with vetted partners." },
    ],
  },
  {
    __component: "library.block-city-industry-grid",
    heading: "Industries we serve in Atlanta",
    sub: "One partner can handle any of these — or all of them at once.",
    cityName: "Atlanta",
    items: [
      { name: "Office vending", description: "Midtown, Buckhead, Downtown, Sandy Springs", href: "/vending-for-offices" },
      { name: "School vending", description: "APS 50K + Georgia State 33K + GA Tech", href: "/vending-for-schools" },
      { name: "Healthcare", description: "Emory, Piedmont, Grady, Northside, CHOA", href: "/vending-for-healthcare" },
      { name: "Warehouse & distribution", description: "Hartsfield-Jackson logistics, McDonough, Forest Park", href: "/vending-for-warehouses" },
      { name: "Hotels", description: "Downtown convention corridor, Buckhead luxury", href: "/vending-for-hotels" },
      { name: "Fitness & gyms", description: "24-hour clubs, climbing, F45/OrangeTheory chains", href: "/vending-for-fitness" },
    ],
  },
  {
    __component: "library.block-city-anchor-employers",
    heading: "Atlanta anchor employers we've placed vending for",
    employers: [
      { name: "Delta Air Lines" },
      { name: "The Coca-Cola Company" },
      { name: "The Home Depot" },
      { name: "UPS" },
      { name: "Emory Healthcare" },
      { name: "Piedmont Healthcare" },
      { name: "Grady Health System" },
      { name: "Children's Healthcare of Atlanta" },
      { name: "Georgia-Pacific" },
      { name: "Cox Enterprises" },
      { name: "Equifax" },
      { name: "AT&T Mobility" },
      { name: "Hartsfield-Jackson Airport" },
      { name: "Atlanta Public Schools" },
      { name: "Georgia State University" },
      { name: "Georgia Tech" },
      { name: "Mercedes-Benz Stadium" },
    ],
  },
  {
    __component: "library.block-comparison-table",
    heading: "LetUsVending vs sourcing an Atlanta operator yourself",
    sub: "The matching service is free. The trade-off is choice — you don't get five quotes, you get one operator that fits.",
    headers: ["Aspect", "LetUsVending", "Source yourself"],
    winnerColumn: 1,
    rows: [
      ["Time to first install", "< 24 hr match, 7-14 d install", "2-6 weeks of vendor calls + RFP"],
      ["Vetting", "Pre-screened on SLA, coverage, fleet, references", "Your time + reputation calls"],
      ["Quote noise", "One assigned partner", "5-8 cold sales pitches"],
      ["Cost to you", "$0", "$0 — but you do the legwork"],
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
      ["Hospital / airport badging", "Pre-cleared at Emory / Piedmont / Hartsfield-Jackson", "You arrange every facility separately"],
    ],
  },
  {
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: "Most Atlanta offices are vending within two weeks of the initial form fill.",
    howToName: "How an Atlanta vending placement works",
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: "Tell us your Atlanta address, headcount, and product preferences. Two minutes." },
      { label: "DAY 1", title: "Get assigned a partner", description: "Within 24 hours we match you to one vetted local operator." },
      { label: "DAY 2-4", title: "Site survey + planogram", description: "Operator walks the breakroom, confirms power and network, proposes a planogram." },
      { label: "DAY 5-10", title: "Install scheduling", description: "Delivery, electrical hookup, and first-stock are scheduled." },
      { label: "DAY 7-14", title: "Go live", description: "Machine(s) installed, telemetry online, planogram loaded." },
    ],
  },
  {
    __component: "library.block-case-study",
    tag: "Atlanta · Real numbers",
    title: "320-bed Emory campus micro market, $0 cost, Joint Commission allergen audit clean",
    context: "A 320-bed Emory campus wing needed 24/7 micro-market coverage after their cafeteria moved to limited hours. Operator placed two micro markets and one beverage cooler in twelve days. Allergen-tagged SKUs and tamper-evident logs passed the next Joint Commission inspection without findings.",
    meta: [
      { label: "Site", value: "320-bed wing, Emory University Hospital" },
      { label: "Machines", value: "2 micro markets + 1 beverage cooler" },
      { label: "Install timeline", value: "12 days" },
    ],
    results: [
      { number: "0", label: "Joint Commission findings" },
      { number: "99.4%", label: "uptime over 12 months" },
      { number: "22%", label: "after-hours revenue lift" },
    ],
  },
  {
    __component: "library.block-testimonial-quote",
    quote: "We called three operators before LetUsVending — two never followed up and one wanted us to sign before they'd even walk the site. LetUsVending matched us in a day with someone who already badges into Emory. Twelve days later we were live. Joint Commission audit went clean.",
    name: "Tasha B.",
    role: "Facilities Director · 320-bed Emory campus wing",
  },
  {
    __component: "library.block-inline-cta",
    text: "Ready to get matched with an Atlanta operator?",
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  },
  {
    __component: "library.block-contact-form",
    title: "Get Your Free Atlanta Vending Machine",
    subheading: "Tell us about your Atlanta location and we'll match you with a vetted local operator in 24 hours.",
    phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
    phoneNumber: "(866) 460-3120",
    phoneLink: "tel:+18664603120",
    checklist: ["No cost to your business", "Atlanta-based service team", "Refilled before you run out"],
    compact: true,
  },
  {
    __component: "library.block-nearby-cities-grid",
    heading: "Vending services in nearby cities",
    cities: [
      { name: "Marietta", state: "GA", href: "/marietta", distanceMiles: 20, imageUrl: "/images/generated/city-marietta.webp", imageAlt: "Marietta, Georgia historic square" },
      { name: "Alpharetta", state: "GA", href: "/alpharetta", distanceMiles: 25, imageUrl: "/images/generated/city-alpharetta.webp", imageAlt: "Alpharetta, Georgia tech corridor at sunset" },
      { name: "Sandy Springs", state: "GA", href: "/sandy-springs", distanceMiles: 14, imageUrl: "/images/generated/city-sandy-springs.webp", imageAlt: "Sandy Springs, Georgia office corridor" },
      { name: "Roswell", state: "GA", href: "/roswell", distanceMiles: 22, imageUrl: "/images/generated/city-roswell.webp", imageAlt: "Roswell, Georgia historic district" },
      { name: "Decatur", state: "GA", href: "/decatur", distanceMiles: 7, imageUrl: "/images/generated/city-decatur.webp", imageAlt: "Decatur, Georgia town square" },
      { name: "Dunwoody", state: "GA", href: "/dunwoody", distanceMiles: 16, imageUrl: "/images/generated/city-dunwoody.webp", imageAlt: "Dunwoody, Georgia at golden hour" },
      { name: "Smyrna", state: "GA", href: "/smyrna", distanceMiles: 13, imageUrl: "/images/generated/city-smyrna.webp", imageAlt: "Smyrna, Georgia downtown" },
      { name: "Kennesaw", state: "GA", href: "/kennesaw", distanceMiles: 25, imageUrl: "/images/generated/city-kennesaw.webp", imageAlt: "Kennesaw, Georgia historic main street" },
    ],
  },
  {
    __component: "library.block-tabbed-faq",
    heading: "Atlanta vending FAQ",
    faqs: [
      { audience: "Cost", question: "Are vending services really free for my Atlanta business?", answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing." },
      { audience: "Cost", question: "Is there an employee minimum?", answer: "Most partners look for roughly 25 daily users for a full snack-and-drink combo. Smaller offices typically qualify for a smart cooler or office coffee setup." },
      { audience: "Cost", question: "Are there long-term contracts?", answer: "Most partners offer 36-month service agreements with a 30-day satisfaction window. Month-to-month options exist on request." },
      { audience: "Cost", question: "Do I get commission from sales?", answer: "Yes, in most placements. Atlanta commission rates run 5-15% of net sales for office and education accounts, paid monthly." },
      { audience: "Process", question: "How does the matching process work?", answer: "You tell us your address, headcount, and product preferences. Within 24 hours we assign one vetted local Atlanta vending partner — never five operators chasing the same quote." },
      { audience: "Process", question: "How fast can a machine be installed in Atlanta?", answer: "Industry standard is 7 to 14 days from contract. Hartsfield-Jackson and hospital installs include vendor badging — your partner manages the badging and dock scheduling." },
      { audience: "Process", question: "What happens if a machine breaks down?", answer: "Your assigned partner handles all repairs. Industry-standard response is within 24 hours, with remote telemetry diagnosis on most issues." },
      { audience: "Coverage", question: "What areas around Atlanta do you cover?", answer: "All of Fulton, DeKalb, Cobb, Gwinnett, and Clayton counties. Midtown to Alpharetta, Buckhead to Decatur, Smyrna to Kennesaw." },
      { audience: "Coverage", question: "Can I get healthy or organic products?", answer: "Yes. Partners stock RXBAR, KIND, GoMacro, sparkling water, electrolyte drinks, plus gluten-free, allergen-free, and vegan SKUs. Atlanta school placements use USDA Smart Snacks." },
      { audience: "Coverage", question: "Do you place at Emory, Piedmont, or Hartsfield-Jackson?", answer: "Yes. Partners are pre-vetted for Emory Healthcare, Piedmont Healthcare, Grady, CHOA, and Hartsfield-Jackson logistics. Vendor badging and Joint Commission audit-trail compliance are in place." },
      { audience: "Equipment", question: "What machine types are available?", answer: "Traditional snack and beverage, full combo units, healthy AI smart coolers with camera-tracked grab-and-go, full self-checkout micro markets, and premium office coffee programs (drip, pod, bean-to-cup)." },
      { audience: "Equipment", question: "Are payment methods up to date?", answer: "Yes. Every machine ships with tap-to-pay (NFC), chip card, magstripe, and mobile-wallet support (Apple Pay, Google Pay). Cellular telemetry is standard." },
    ],
  },
  {
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: "Bobby Mac has placed vending partners across the Atlanta metro since the Beltline expansion of 2016. This page is built from his ongoing partner-vetting reviews with seven active Atlanta-area operators and on-site walkthroughs at Emory Healthcare, Piedmont Healthcare, and Hartsfield-Jackson logistics in 2026.",
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
      { label: "U.S. Census Bureau — Atlanta MSA data", url: "https://www.census.gov/quickfacts/fact/table/atlantacitygeorgia", note: "Population and workforce numbers cited on this page" },
      { label: "Georgia Department of Public Health — Food service licensing", url: "https://dph.georgia.gov/environmental-health/food", note: "Vending machine licensing reference" },
      { label: "Metro Atlanta Chamber — Major employers", url: "https://www.metroatlantachamber.com/", note: "Anchor employer roster reference" },
      { label: "NAMA — Georgia operator chapter directory", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
    ],
  },
  {
    __component: "library.block-related-guides",
    heading: "More for Atlanta businesses",
    items: [
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "If you're considering becoming an operator instead of hiring one — Bobby Mac's 30-day buyer guide.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Industry guide", title: "Office vending in Georgia", description: "What works for Atlanta HR teams: telemetry-tuned planograms, hospital-grade audit trails, and the breakroom retention math.", href: "/vending-for-offices" },
      { eyebrow: "Hub", title: "All cities we serve", description: "500+ U.S. cities with local vending partner coverage.", href: "/locations" },
    ],
  },
];

async function main() {
  await db.connect();
  const token = await ensureToken();
  console.log("provisioned token");
  const docId = await getDocumentId();
  if (!docId) throw new Error(`No city with slug ${SLUG}`);
  console.log("documentId:", docId);
  const r = await fetch(`${STRAPI_URL}/api/cities/${docId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ data: { contentBlocks } }),
  });
  const text = await r.text();
  console.log("PUT status:", r.status);
  if (!r.ok) {
    console.error("response:", text.slice(0, 2000));
    await db.end();
    process.exit(1);
  }
  console.log("ok — blocks:", contentBlocks.length);
  await db.end();
}
main().catch(async (err) => { console.error(err); await db.end().catch(() => {}); process.exit(1); });
