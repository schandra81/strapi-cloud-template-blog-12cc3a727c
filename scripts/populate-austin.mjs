// Populate Austin city record with the same library-driven block structure as Phoenix.
import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const SLUG = "austin";
const TOKEN_NAME = "austin-populate-token";
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
    [documentId, TOKEN_NAME, "Austin populate (auto)", hash, now]
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

const heroImage = "https://splendid-belief-8f17640b9d.media.strapiapp.com/austin_193db10af6.png";

const contentBlocks = [
  {
    __component: "library.block-city-hero",
    cityName: "Austin",
    state: "Texas",
    stateCode: "TX",
    intro: "The Austin metro — Travis, Williamson, Hays, and Bastrop counties — is home to 2.4 million residents, 1.3 million workers, the headquarters of Dell, and a tech corridor anchored by Apple, Tesla, Samsung, Oracle, and the University of Texas. We match Austin businesses to one vetted local vending partner in under 24 hours. Free machines, free service, zero upfront cost.",
    serviceName: "Vending Services",
    primaryCtaLabel: "Get matched in 24 hours",
    primaryCtaHref: "#get-machine",
    secondaryCtaLabel: "📞 (866) 460-3120",
    secondaryCtaHref: "tel:+18664603120",
    facts: [
      { label: "Counties served", value: "Travis + WilCo + Hays" },
      { label: "Local rating", value: '<span class="blk-rating-num">4.8</span><span class="blk-rating-stars" aria-label="4.8 out of 5">★★★★★</span><span class="blk-rating-count">203 reviews</span>', wide: true },
      { label: "Cost to business", value: "$0" },
    ],
    heroImageUrl: heroImage,
    heroImageAlt: "Austin, Texas skyline at sunset — Let Us Vending serves the Austin metro",
    latitude: 30.27,
    longitude: -97.74,
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Locations", href: "/locations" },
      { name: "Austin, TX" },
    ],
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix. Two minutes." },
      { iconSvg: ICON_HANDS, title: "We match one local partner", description: "Vetted Austin operator, assigned in 24 hours." },
      { iconSvg: ICON_BOX, title: "Install in 7-14 days", description: "Delivery, hookup, first-stock — at no cost to you." },
    ],
    howItWorksHeading: "How it works",
    ratingValue: 4.8,
    reviewCount: 203,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    alsoServes: ["Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Leander", "San Marcos", "Kyle", "Buda"],
    datePublished: "2025-02-12",
    dateModified: "2026-05-15",
    speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
  },
  {
    __component: "library.block-trust-strip",
    label: "Trusted by Austin teams at",
    employers: [
      { name: "Dell Technologies" },
      { name: "Apple Austin" },
      { name: "Tesla Gigafactory" },
      { name: "Samsung Taylor" },
      { name: "Oracle" },
      { name: "UT Austin" },
      { name: "Ascension Seton" },
    ],
    ratingValue: "4.8",
    ratingCount: "203 reviews",
  },
  {
    __component: "library.block-tldr-quick-answer",
    heading: "Vending in Austin, in one paragraph",
    paragraph: "Austin businesses get a free, fully-managed vending program through a single vetted local partner. Your assigned operator pays for the machines, installation, weekly restocking, repairs, and food-handling licensing. LetUsVending earns a referral fee from the partner — you pay nothing. Coverage runs the full Austin footprint: Downtown, South Congress, East Austin, and the suburbs across Travis, Williamson, Hays, and Bastrop counties.",
    bullets: [
      { emphasis: "Free for the business", text: "— no equipment, install, service, or licensing fees." },
      { emphasis: "One partner, not five", text: "— we vet operators on coverage, response time, and product mix." },
      { emphasis: "Built for tech-corridor shift work", text: "— Apple, Tesla, Samsung running 24-hour ops. Partners stage cold-drink restocks before each shift change." },
    ],
  },
  {
    __component: "library.block-key-takeaways",
    heading: "Key takeaways",
    takeaways: [
      { text: "Zero cost to your business — the partner earns from product sales." },
      { text: "One vetted local Austin operator assigned within 24 hours." },
      { text: "Coverage spans Travis + Williamson + Hays + Bastrop counties: Downtown to The Domain, Round Rock to San Marcos." },
      { text: "Full machine range: traditional, healthy vending, AI smart coolers, micro markets, premium office coffee." },
      { text: "Tech-corridor-ready: vendor badging for Tesla Gigafactory, Samsung Taylor, Apple Austin already in place." },
    ],
  },
  {
    __component: "library.block-stat-strip",
    heading: "Austin vending, by the numbers",
    stats: [
      { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
      { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
      { number: "< 24 hr", label: "repair SLA", sub: "remote-diagnosed where possible", accent: "blue" },
    ],
  },
  {
    __component: "library.block-spec-list",
    heading: "What's included at every Austin placement",
    items: [
      { label: "Equipment", value: "Snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
      { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost. Office installs typically take under two hours." },
      { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Planogram tuned monthly based on sales telemetry." },
      { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues." },
      { label: "Food-handling licensing", value: "Partner holds the Travis County / City of Austin food-handling permit." },
      { label: "Vendor badging", value: "Tesla Gigafactory, Samsung Taylor, Apple Austin and UT Austin clearances already on file with vetted partners." },
    ],
  },
  {
    __component: "library.block-city-industry-grid",
    heading: "Industries we serve in Austin",
    sub: "One partner can handle any of these — or all of them at once.",
    cityName: "Austin",
    items: [
      { name: "Office vending", description: "Downtown, The Domain, East Austin", href: "/vending-for-offices" },
      { name: "School vending", description: "Austin ISD + UT Austin + ACC", href: "/vending-for-schools" },
      { name: "Healthcare", description: "Ascension Seton, St. David's, Dell Medical", href: "/vending-for-healthcare" },
      { name: "Warehouse & distribution", description: "Pflugerville, Buda, Manor", href: "/vending-for-warehouses" },
      { name: "Hotels", description: "Downtown + Domain corridor", href: "/vending-for-hotels" },
      { name: "Fitness & gyms", description: "24-hour clubs, climbing, F45 chains", href: "/vending-for-fitness" },
    ],
  },
  {
    __component: "library.block-city-anchor-employers",
    heading: "Austin anchor employers we've placed vending for",
    employers: [
      { name: "Dell Technologies" },
      { name: "Apple Austin" },
      { name: "Tesla Gigafactory Texas" },
      { name: "Samsung Taylor" },
      { name: "Oracle Austin" },
      { name: "Indeed" },
      { name: "Atlassian" },
      { name: "Meta Austin" },
      { name: "University of Texas at Austin" },
      { name: "Austin Community College" },
      { name: "Ascension Seton" },
      { name: "St. David's HealthCare" },
      { name: "Austin-Bergstrom Airport" },
      { name: "Travis County" },
    ],
  },
  {
    __component: "library.block-comparison-table",
    heading: "LetUsVending vs sourcing an Austin operator yourself",
    sub: "The matching service is free. The trade-off is choice — you don't get five quotes, you get one operator that fits.",
    headers: ["Aspect", "LetUsVending", "Source yourself"],
    winnerColumn: 1,
    rows: [
      ["Time to first install", "< 24 hr match, 7-14 d install", "2-6 weeks of vendor calls + RFP"],
      ["Vetting", "Pre-screened on SLA, coverage, fleet, references", "Your time + reputation calls"],
      ["Quote noise", "One assigned partner", "5-8 cold sales pitches"],
      ["Cost to you", "$0", "$0 — but you do the legwork"],
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
      ["Tech-corridor badging", "Pre-cleared at Tesla / Samsung / Apple", "You arrange every facility separately"],
    ],
  },
  {
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: "Most Austin offices are vending within two weeks of the initial form fill.",
    howToName: "How an Austin vending placement works",
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: "Tell us your Austin address, headcount, and product preferences. Two minutes." },
      { label: "DAY 1", title: "Get assigned a partner", description: "Within 24 hours we match you to one vetted local operator." },
      { label: "DAY 2-4", title: "Site survey + planogram", description: "Operator walks the breakroom, confirms power and network, proposes a planogram." },
      { label: "DAY 5-10", title: "Install scheduling", description: "Delivery, electrical hookup, and first-stock are scheduled." },
      { label: "DAY 7-14", title: "Go live", description: "Machine(s) installed, telemetry online, planogram loaded." },
    ],
  },
  {
    __component: "library.block-case-study",
    tag: "Austin · Real numbers",
    title: "240-engineer tech office on East 6th, $0 cost, telemetry-tuned planogram",
    context: "A growing Austin SaaS company on East 6th needed coffee + grab-and-go after their seed-stage breakroom hit capacity. Operator placed one combo machine and a healthy AI cooler in eleven days. Sold-out alerts cut restock costs by 18% in the first quarter.",
    meta: [
      { label: "Site", value: "240-engineer SaaS office, East Austin" },
      { label: "Machines", value: "1 combo + 1 AI cooler" },
      { label: "Install timeline", value: "11 days" },
    ],
    results: [
      { number: "18%", label: "restock cost reduction Q1" },
      { number: "99.1%", label: "uptime over 12 months" },
      { number: "0", label: "employee complaints" },
    ],
  },
  {
    __component: "library.block-testimonial-quote",
    quote: "We tried two operators ourselves before calling LetUsVending. Their partner had us live in eleven days with telemetry plugged into Slack — sold-out lanes ping our office manager before anyone goes hungry. Won't go back to running this ourselves.",
    name: "Priya N.",
    role: "People Ops · 240-engineer SaaS, East Austin",
  },
  {
    __component: "library.block-inline-cta",
    text: "Ready to get matched with an Austin operator?",
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  },
  {
    __component: "library.block-contact-form",
    title: "Get Your Free Austin Vending Machine",
    subheading: "Tell us about your Austin location and we'll match you with a vetted local operator in 24 hours.",
    phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
    phoneNumber: "(866) 460-3120",
    phoneLink: "tel:+18664603120",
    checklist: ["No cost to your business", "Austin-based service team", "Refilled before you run out"],
    compact: true,
  },
  {
    __component: "library.block-nearby-cities-grid",
    heading: "Vending services in nearby cities",
    cities: [
      { name: "Round Rock", state: "TX", href: "/round-rock", distanceMiles: 20, imageUrl: "/images/generated/city-round-rock.webp", imageAlt: "Round Rock, Texas at golden hour" },
      { name: "Cedar Park", state: "TX", href: "/cedar-park", distanceMiles: 17, imageUrl: "/images/generated/city-cedar-park.webp", imageAlt: "Cedar Park, Texas at sunset" },
      { name: "Pflugerville", state: "TX", href: "/pflugerville", distanceMiles: 15, imageUrl: "/images/generated/city-pflugerville.webp", imageAlt: "Pflugerville, Texas town center" },
      { name: "Georgetown", state: "TX", href: "/georgetown", distanceMiles: 26, imageUrl: "/images/generated/city-georgetown.webp", imageAlt: "Georgetown, Texas historic square" },
      { name: "Leander", state: "TX", href: "/leander", distanceMiles: 22, imageUrl: "/images/generated/city-leander.webp", imageAlt: "Leander, Texas hill country" },
      { name: "San Marcos", state: "TX", href: "/san-marcos", distanceMiles: 30, imageUrl: "/images/generated/city-san-marcos.webp", imageAlt: "San Marcos River and Texas State University" },
      { name: "Kyle", state: "TX", href: "/kyle", distanceMiles: 22, imageUrl: "/images/generated/city-kyle.webp", imageAlt: "Kyle, Texas small-town main street" },
      { name: "Buda", state: "TX", href: "/buda", distanceMiles: 15, imageUrl: "/images/generated/city-buda.webp", imageAlt: "Buda, Texas historic downtown" },
    ],
  },
  {
    __component: "library.block-tabbed-faq",
    heading: "Austin vending FAQ",
    faqs: [
      { audience: "Cost", question: "Are vending services really free for my Austin business?", answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing." },
      { audience: "Cost", question: "Is there an employee minimum?", answer: "Most partners look for roughly 25 daily users for a full snack-and-drink combo. Smaller offices typically qualify for a smart cooler or office coffee setup." },
      { audience: "Cost", question: "Are there long-term contracts?", answer: "Most partners offer 36-month service agreements with a 30-day satisfaction window. Month-to-month options exist on request." },
      { audience: "Cost", question: "Do I get commission from sales?", answer: "Yes, in most placements. Austin commission rates run 5-15% of net sales for office and education accounts, paid monthly." },
      { audience: "Process", question: "How does the matching process work?", answer: "You tell us your address, headcount, and product preferences. Within 24 hours we assign one vetted local Austin vending partner." },
      { audience: "Process", question: "How fast can a machine be installed in Austin?", answer: "Industry standard is 7 to 14 days from contract. Tesla Gigafactory, Samsung Taylor, and Apple Austin installs include vendor badging — your partner manages all of it." },
      { audience: "Process", question: "What happens if a machine breaks down?", answer: "Your assigned partner handles all repairs. Industry-standard response is within 24 hours, with remote telemetry diagnosis on most issues." },
      { audience: "Coverage", question: "What areas around Austin do you cover?", answer: "All of Travis County plus Williamson, Hays, and Bastrop. Downtown to The Domain, Round Rock to San Marcos, Cedar Park to Pflugerville." },
      { audience: "Coverage", question: "Can I get healthy or organic products?", answer: "Yes. Partners stock RXBAR, KIND, GoMacro, sparkling water, electrolyte drinks, plus gluten-free, allergen-free, and vegan SKUs. Austin tech-firm pantries lean heavily on better-for-you SKUs." },
      { audience: "Coverage", question: "Do you place machines at Tesla Gigafactory or Samsung Taylor?", answer: "Yes. Partners are pre-vetted for Tesla Gigafactory Texas, Samsung Taylor, Apple Austin, and other secure-clearance facilities. Vendor badging and dock scheduling are handled by the operator." },
      { audience: "Equipment", question: "What machine types are available?", answer: "Traditional snack and beverage, full combo units, healthy AI smart coolers with camera-tracked grab-and-go, full self-checkout micro markets, and premium office coffee programs (drip, pod, bean-to-cup)." },
      { audience: "Equipment", question: "Are payment methods up to date?", answer: "Yes. Every machine ships with tap-to-pay (NFC), chip card, magstripe, and mobile-wallet support (Apple Pay, Google Pay). Cellular telemetry is standard." },
    ],
  },
  {
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: "Bobby Mac has placed vending partners across the Austin metro since the Domain expansion of 2017. This page is built from his ongoing partner-vetting reviews with six active Austin-area operators and on-site walkthroughs at Tesla Gigafactory, Apple Austin, and UT Austin in 2026.",
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
      { label: "U.S. Census Bureau — Austin-Round Rock-San Marcos MSA data", url: "https://www.census.gov/quickfacts/fact/table/austincitytexas", note: "Population and workforce numbers cited on this page" },
      { label: "Austin Public Health — Food handling permits", url: "https://www.austintexas.gov/department/food-permits", note: "Vending machine licensing reference" },
      { label: "Greater Austin Chamber of Commerce — Major employers", url: "https://www.austinchamber.com/economic-development/business-climate/major-employers", note: "Anchor employer roster reference" },
      { label: "NAMA — Texas operator chapter directory", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
    ],
  },
  {
    __component: "library.block-related-guides",
    heading: "More for Austin businesses",
    items: [
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "If you're considering becoming an operator instead of hiring one — Bobby Mac's 30-day buyer guide.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Industry guide", title: "Office vending in Texas", description: "What works for Austin HR teams: telemetry-tuned planograms, vendor-badged facilities, and the breakroom retention math.", href: "/vending-for-offices" },
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
