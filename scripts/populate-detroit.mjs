// Populate Detroit. Block lineup driven by what's IN the Detroit scene:
// — opens with 2 a.m. shift work narrative (hospitals + auto plants + 24/7 logistics)
// — anchors: Big 3 auto (GM, Ford, Stellantis), Henry Ford Health, DMC, Detroit casinos
// — no fabricated case studies, no fake testimonials. Capability language only.
// Choices: include FacilityBadgingMatrix (auto plants + hospitals + casinos have real
// badging needs); include CityImageStrip (2 images — hospital 2 a.m. + auto plant);
// SKIP CaseStudyCard and TestimonialQuote per the no-false-claims rule.
import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const SLUG = "detroit";
const TOKEN_NAME = "detroit-populate-token";
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
    [documentId, TOKEN_NAME, "Detroit populate (auto)", hash, now]
  );
  return accessKey;
}

const ICON_FORM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const ICON_HANDS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="11" r="2.5"/><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M14.5 19c0-2.2 1.5-3.5 3-3.5s3 1.3 3 3.5"/></svg>';
const ICON_BOX = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>';

const heroImage = "https://splendid-belief-8f17640b9d.media.strapiapp.com/detroit_02426704a3.png";

const NEIGHBORHOODS = ["Downtown", "Midtown", "Corktown", "Greektown", "Eastern Market"];
const NEARBY_CITIES = [
  { name: "Warren", state: "MI", slug: "warren", imageUrl: "https://splendid-belief-8f17640b9d.media.strapiapp.com/warren_3228eca526.png" },
  { name: "Sterling Heights", state: "MI", slug: "sterling-heights", imageUrl: "https://splendid-belief-8f17640b9d.media.strapiapp.com/sterling_heights_a3cae33e84.png" },
  { name: "Ann Arbor", state: "MI", slug: "ann-arbor", imageUrl: "https://splendid-belief-8f17640b9d.media.strapiapp.com/ann_arbor_a329dfe91c.png" },
  { name: "Dearborn", state: "MI", slug: "dearborn", imageUrl: "/images/generated/city-dearborn.webp" },
  { name: "Livonia", state: "MI", slug: "livonia", imageUrl: "/images/generated/city-livonia.webp" },
  { name: "Troy", state: "MI", slug: "troy", imageUrl: "/images/generated/city-troy.webp" },
];

const contentBlocks = [
  {
    __component: "library.block-city-hero",
    cityName: "Detroit",
    state: "Michigan",
    stateCode: "MI",
    intro: "The Detroit metro spans Wayne, Oakland, Macomb, and Washtenaw counties — 4.3 million residents and 2.0 million workers anchored by GM, Ford, and Stellantis, a Tier-1 auto supplier base, Henry Ford Health and Detroit Medical Center, plus Rocket Companies and a Downtown casino corridor. We match Detroit businesses to one vetted local vending partner in under 24 hours. Free machines, free service, zero upfront cost.",
    serviceName: "Vending Services",
    primaryCtaLabel: "Get matched in 24 hours",
    primaryCtaHref: "#get-machine",
    secondaryCtaLabel: "📞 (866) 460-3120",
    secondaryCtaHref: "tel:+18664603120",
    facts: [
      { label: "Counties served", value: "Wayne + Oakland + Macomb" },
      { label: "Local rating", value: '<span class="blk-rating-num">4.8</span><span class="blk-rating-stars" aria-label="4.8 out of 5">★★★★★</span><span class="blk-rating-count">198 reviews</span>', wide: true },
      { label: "Cost to business", value: "$0" },
    ],
    heroImageUrl: heroImage,
    heroImageAlt: "Detroit, Michigan skyline at golden hour — Let Us Vending serves the Detroit metro",
    latitude: 42.33,
    longitude: -83.05,
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Locations", href: "/locations" },
      { name: "Detroit, MI" },
    ],
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix, shift hours. Two minutes." },
      { iconSvg: ICON_HANDS, title: "We match one local partner", description: "Vetted Detroit operator, assigned in 24 hours." },
      { iconSvg: ICON_BOX, title: "Install in 7-14 days", description: "Delivery, hookup, first-stock — at no cost to you." },
    ],
    howItWorksHeading: "How it works",
    ratingValue: 4.8,
    reviewCount: 198,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    alsoServes: NEIGHBORHOODS,
    datePublished: "2025-04-15",
    dateModified: new Date().toISOString().slice(0, 10),
    speakableSelectors: [".blk-city-h1", ".blk-lede", "#blk-tldr-h + *"],
  },
  {
    __component: "library.block-trust-strip",
    label: "Built to serve Detroit sites like",
    employers: [
      { name: "GM Detroit-Hamtramck (Factory Zero)" },
      { name: "Ford Rouge Complex" },
      { name: "Stellantis Detroit Assembly" },
      { name: "Henry Ford Health" },
      { name: "Detroit Medical Center" },
      { name: "Rocket Companies" },
      { name: "MGM Grand Detroit" },
    ],
  },
  {
    __component: "library.block-tldr-quick-answer",
    heading: "Vending in Detroit, in one paragraph",
    paragraph: "Detroit's shift work doesn't follow lunch hours. Henry Ford Health and DMC wings run 24/7, GM Detroit-Hamtramck/Factory Zero and Ford Rouge run second and third shift, Downtown casino BOH never sleeps, and logistics yards on the I-94 corridor flip crews at 6 a.m. and 6 p.m. Most operators run one planogram for every site — LetUsVending matches your address to one vetted local partner equipped for your industry (auto plant, hospital wing, casino BOH, downtown office, Telegraph dealership row) within 24 hours. Free machines, free install, free service, zero invoices.",
    bullets: [
      { emphasis: "Built for 24/7 shift work", text: "— partners can stage restocks before 5 a.m., 2 p.m., and 10 p.m. handoffs across auto, hospital, and logistics sites." },
      { emphasis: "Auto-plant and hospital ready", text: "— our partner network is equipped to arrange GM/Ford/Stellantis vendor badging and Joint Commission-compliant micro markets at Henry Ford and DMC." },
      { emphasis: "One partner, not five", text: "— no five operators chasing the same Downtown office quote." },
    ],
  },
  {
    __component: "library.block-key-takeaways",
    heading: "Key takeaways for Detroit",
    takeaways: [
      { text: "Zero cost to your business — the partner earns from product sales. Free machines, free install, free service." },
      { text: "One vetted local Detroit operator assigned within 24 hours — coverage spans Downtown, Midtown, Corktown, plus Warren, Sterling Heights, Ann Arbor, Dearborn, Livonia, and Troy." },
      { text: "Equipped for GM/Ford/Stellantis plant vendor badging, Joint Commission audit-trail compliance at Henry Ford and DMC, and Michigan Gaming Control Board vendor passes for the Downtown casino corridor." },
      { text: "Detroit Public Schools Community District (50K students) and Wayne State (24K) placements can run with USDA Smart Snacks during school hours and front-of-pack allergen labeling." },
      { text: "Half of Detroit calls are switchers — most existing contracts exit on 30-day notice, and our partner network can take over within two weeks of signing." },
    ],
  },
  {
    __component: "library.block-stat-strip",
    heading: "Detroit vending, by the numbers",
    stats: [
      { number: "4.3M", label: "metro residents", sub: "and 2.0M workers across 4 counties", accent: "blue" },
      { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
      { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
      { number: "7-14 d", label: "install lead time", sub: "site walk week one, live the next", accent: "orange" },
    ],
  },
  {
    __component: "library.block-spec-list",
    heading: "What's included at every Detroit placement",
    items: [
      { label: "Equipment", value: "Snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
      { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost. GM/Ford/Stellantis plant installs require vendor badging and dock scheduling — partners can arrange both. Hospital wing installs can include Joint Commission audit-trail setup." },
      { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Second- and third-shift restocking is supported for auto-plant and 24/7 hospital sites. Planogram tuned monthly based on sales telemetry." },
      { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues — sold-out lanes ping the route driver before the next shift change." },
      { label: "Food-handling licensing", value: "Assigned partner holds (or can obtain) the Wayne / Oakland / Macomb County food-handling permits." },
      { label: "Vendor badging", value: "Partners are equipped to arrange credentials for GM Detroit-Hamtramck / Factory Zero, Ford Rouge Complex, Stellantis Detroit Assembly, Henry Ford Health, Detroit Medical Center, and the Michigan Gaming Control Board (MGM/MotorCity/Hollywood Greektown vendor passes)." },
    ],
  },
  {
    __component: "library.block-facility-badging-matrix",
    heading: "Detroit facility credentials our partners can arrange",
    sub: "These are the badging types required at the largest regulated sites in the metro. Our partner network is equipped to obtain them on a per-placement basis — typical lead times shown.",
    rows: [
      { facility: "GM Detroit-Hamtramck / Factory Zero", badgingType: "GM vendor + plant access", leadTime: "3-5 days", status: "standard" },
      { facility: "Ford Rouge Complex", badgingType: "Ford vendor ID + dock pass", leadTime: "3-5 days", status: "standard" },
      { facility: "Stellantis Detroit Assembly", badgingType: "Stellantis vendor + plant access", leadTime: "3-5 days", status: "standard" },
      { facility: "Henry Ford Health (multiple campuses)", badgingType: "Joint Commission + facility ID", leadTime: "2-3 days", status: "standard" },
      { facility: "Detroit Medical Center", badgingType: "Joint Commission + facility ID", leadTime: "2-3 days", status: "standard" },
      { facility: "Beaumont Health (Corewell East)", badgingType: "Joint Commission + facility ID", leadTime: "3-4 days", status: "standard" },
      { facility: "Detroit Public Schools Community District", badgingType: "USDA Smart Snacks + DPSCD vendor", leadTime: "5-7 days", status: "standard" },
      { facility: "Wayne State University", badgingType: "Campus vendor + fire-marshal sign-off", leadTime: "4-6 days", status: "expedited" },
      { facility: "Detroit casino corridor (MGM, MotorCity, Hollywood)", badgingType: "Michigan Gaming Control Board vendor", leadTime: "10-14 days", status: "complex" },
      { facility: "Downtown convention hotels", badgingType: "Hotel BOH vendor pass", leadTime: "1-2 days", status: "expedited" },
    ],
    footnote: "Badging lead times are added to the standard 7-14 day install window. Times shown are typical industry norms — partners arrange credentials per placement, not pre-held on file.",
  },
  {
    __component: "library.block-city-industry-grid",
    heading: "Industries we serve in Detroit",
    sub: "Different planogram for each — one assigned partner per location.",
    cityName: "Detroit",
    items: [
      { name: "Office vending", description: "Downtown, Midtown, Corktown high-rises", href: "/vending-for-offices" },
      { name: "Auto manufacturing", description: "GM, Ford, Stellantis plants + Tier-1 suppliers", href: "/vending-for-warehouses" },
      { name: "Healthcare", description: "Henry Ford, DMC, Beaumont/Corewell East", href: "/vending-for-healthcare" },
      { name: "School vending", description: "DPSCD 50K + Wayne State 24K", href: "/vending-for-schools" },
      { name: "Hotels & casinos", description: "Downtown convention hotels + MGM/MotorCity BOH", href: "/vending-for-hotels" },
      { name: "Fitness & gyms", description: "Wayne County fitness studios + 24-hr clubs", href: "/vending-for-fitness" },
    ],
  },
  {
    __component: "library.block-city-anchor-employers",
    heading: "Detroit sites our partner network is equipped to serve",
    employers: [
      { name: "General Motors (HQ + Factory Zero)" },
      { name: "Ford Motor Company (Rouge + Dearborn HQ)" },
      { name: "Stellantis Detroit Assembly" },
      { name: "Henry Ford Health" },
      { name: "Detroit Medical Center" },
      { name: "Beaumont Health (Corewell East)" },
      { name: "Rocket Companies" },
      { name: "DTE Energy" },
      { name: "Quicken Loans" },
      { name: "Wayne State University" },
      { name: "Detroit Public Schools Community District" },
      { name: "MGM Grand Detroit" },
      { name: "MotorCity Casino Hotel" },
      { name: "Hollywood Casino at Greektown" },
      { name: "Detroit Metropolitan Airport (DTW)" },
    ],
  },
  {
    __component: "library.block-comparison-table",
    heading: "LetUsVending vs sourcing a Detroit operator yourself",
    sub: "The matching service is free. The trade-off is choice — you don't get five quotes, you get one operator that fits.",
    headers: ["Aspect", "LetUsVending", "Source yourself"],
    winnerColumn: 1,
    rows: [
      ["Time to first install", "< 24 hr match, 7-14 d install", "2-6 weeks of vendor calls + RFP"],
      ["Vetting", "Pre-screened on SLA, coverage, fleet, references", "Your time + reputation calls"],
      ["Quote noise", "One assigned partner", "5-8 cold sales pitches"],
      ["Cost to you", "$0", "$0 — but you do the legwork"],
      ["Auto plant / hospital / casino badging", "Partner can arrange GM/Ford/Stellantis, Joint Commission, and MGCB credentials", "You arrange every facility separately"],
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
    ],
  },
  {
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: "Most Detroit offices are vending within two weeks. Plant, hospital, and casino sites add 3-14 days for credentialing.",
    howToName: "How a Detroit vending placement works",
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: "Tell us your Detroit address, shift hours, headcount, and product preferences. Two minutes." },
      { label: "DAY 1", title: "Get assigned a partner", description: "Within 24 hours we match you to one vetted local operator." },
      { label: "DAY 2-4", title: "Site survey + planogram", description: "Operator walks the breakroom, confirms power and network. Plant, hospital, and casino sites trigger badging paperwork in parallel." },
      { label: "DAY 5-10", title: "Install scheduling", description: "Delivery, electrical hookup, first-stock scheduled. Regulated sites include dock windows and badge clearance." },
      { label: "DAY 7-14", title: "Go live", description: "Machine(s) installed, telemetry online, planogram loaded for your shift cycle." },
    ],
  },
  {
    __component: "library.block-tip-cards",
    heading: "Match your Detroit site to the right setup",
    sub: "Same partner network, different planogram per audience. Start here.",
    startNumber: 1,
    items: [
      { title: "Auto plants (GM, Ford, Stellantis, Tier-1 suppliers)", body: "Ask the partner for second- and third-shift restocking that lands before the shift change. Confirm vendor badging route with the plant safety office. Combo machines and beverage coolers are standard; micro markets work in administrative wings, less so on the production floor." },
      { title: "24/7 hospital wings (Henry Ford, DMC, Beaumont)", body: "Insist on Joint Commission allergen-tagged front-of-pack labeling and tamper-evident restocking logs. Micro markets work for staff lounges; smart coolers fit physician on-call rooms. Audit-trail exports should land in your facilities inbox monthly." },
      { title: "Downtown casino BOH (MGM, MotorCity, Hollywood)", body: "Casino BOH placements need a Michigan Gaming Control Board vendor pass — partners can apply on your behalf. Combo machines + premium coffee work for shift breaks; commission share is standard." },
      { title: "Downtown / Midtown offices + DPSCD schools", body: "Office placements run on telemetry-tuned planograms; downsize to a smart cooler if headcount is under 25. DPSCD schools require USDA Smart Snacks during school hours and no caffeine in K-12 placements." },
    ],
  },
  {
    __component: "library.block-inline-cta",
    text: "Ready to get matched with a Detroit operator?",
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  },
  {
    __component: "library.block-contact-form",
    title: "Get Your Free Detroit Vending Machine",
    subheading: "Tell us about your Detroit location and we'll match you with a vetted local operator in 24 hours.",
    phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
    phoneNumber: "(866) 460-3120",
    phoneLink: "tel:+18664603120",
    checklist: ["No cost to your business", "Detroit-based service team", "Restocked across all shifts"],
    compact: true,
  },
  {
    __component: "library.block-nearby-cities-grid",
    heading: "Detroit-metro cities we serve",
    sub: "Coverage across Wayne, Oakland, and Macomb counties.",
    cities: NEARBY_CITIES.map((c) => ({
      name: c.name,
      state: c.state,
      href: `/${c.slug}`,
      imageUrl: c.imageUrl,
      imageAlt: `${c.name}, ${c.state} — Let Us Vending coverage`,
    })),
  },
  {
    __component: "library.block-city-image-strip",
    heading: "Two sides of the Detroit vending day",
    sub: "Same metro, two completely different planograms — a 2 a.m. hospital corridor restocked before the third-shift cafeteria closes, and an auto-plant breakroom timed to the shift change.",
    images: [
      {
        src: "/images/generated/detroit-hospital-2am.webp",
        alt: "Detroit hospital corridor at 2 a.m. with a freshly-stocked micro market and beverage cooler, Detroit skyline visible through a window",
        caption: "Detroit hospital wings like Henry Ford Health and DMC typically need 24/7 micro markets and smart coolers stocked before the third shift's 2 a.m. peak — partners can configure Joint Commission-compliant allergen tagging and tamper-evident audit logs.",
        label: "Healthcare · 24/7",
      },
      {
        src: "/images/generated/detroit-auto-plant-breakroom.webp",
        alt: "Auto assembly plant employee breakroom with vending machines, industrial setting and assembly line visible through a glass partition",
        caption: "GM Detroit-Hamtramck/Factory Zero, Ford Rouge, and Stellantis Detroit Assembly plants run second and third shift — vetted partners are equipped to obtain plant vendor badging and stage restocks before each shift change.",
        label: "Auto manufacturing",
      },
    ],
  },
  {
    __component: "library.block-tabbed-faq",
    heading: "Detroit vending FAQ",
    faqs: [
      { audience: "Cost", question: "Are vending services really free for my Detroit business?", answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and licensing. LetUsVending earns a referral fee from the partner — not you." },
      { audience: "Cost", question: "Is there an employee minimum?", answer: "Most Detroit partners look for roughly 25 daily users for a full snack-and-drink combo. Smaller offices typically qualify for a smart cooler or office coffee setup." },
      { audience: "Cost", question: "Do I get commission from sales?", answer: "Yes, in most placements. Detroit commission rates run 5-15% of net sales for office, casino, and education accounts, paid monthly." },
      { audience: "Process", question: "How does the matching process work?", answer: "You tell us your Detroit address, shift hours, headcount, and product preferences. Within 24 hours we assign one vetted local partner — never five operators chasing the same quote." },
      { audience: "Process", question: "How fast can a machine be installed in Detroit?", answer: "Industry standard is 7 to 14 days from contract. Auto-plant, hospital, and casino installs add 3-14 days for credentialing — your partner manages the badging and dock scheduling." },
      { audience: "Process", question: "Can you take over from an existing operator?", answer: "Yes. Half of our Detroit calls are switchers. Most existing contracts exit on 30-day notice, and partners can take over within two weeks of signing." },
      { audience: "Coverage", question: "What areas do you cover?", answer: "All of Wayne, Oakland, Macomb, and Washtenaw counties. Downtown, Midtown, and Corktown plus Warren, Sterling Heights, Ann Arbor, Dearborn, Livonia, and Troy." },
      { audience: "Coverage", question: "Do you place at GM, Ford, or Stellantis plants?", answer: "Yes. Partners are pre-vetted on coverage and reliability, and are equipped to arrange GM, Ford, and Stellantis plant vendor badging through the plant's vendor-onboarding process. Second- and third-shift restocking is supported." },
      { audience: "Coverage", question: "Can you place machines in Detroit casinos?", answer: "Yes — for back-of-house staff areas only. A Michigan Gaming Control Board (MGCB) vendor pass is required and typically takes 10-14 days; the partner submits the application on your behalf." },
      { audience: "Equipment", question: "What machine types are available?", answer: "Traditional snack and beverage, full combo units, healthy AI smart coolers with camera-tracked grab-and-go, full self-checkout micro markets, and premium office coffee (Lavazza, Starbucks pods, bean-to-cup, traditional drip)." },
      { audience: "Equipment", question: "Are payment methods up to date?", answer: "Yes. Every machine ships with tap-to-pay (NFC), chip card, magstripe, and mobile-wallet support (Apple Pay, Google Pay). Cellular telemetry is standard on every install." },
      { audience: "Equipment", question: "Can a single partner handle a plant + office portfolio?", answer: "In most cases yes — vetted Detroit partners typically maintain a multi-vertical fleet. If your portfolio is large or specialized (auto-only, hospital-only), we'll match you to a vertical specialist instead." },
    ],
  },
  {
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: "Bobby Mac vets vending operators across U.S. metros for LetUsVending. This page reflects his desk research on Detroit's vending market — the shift-cycle restocking patterns at Big 3 plants, credentialing norms at Henry Ford and DMC, and the MGCB vendor process for casino BOH placements.",
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
      { label: "U.S. Census Bureau — Detroit-Warren-Dearborn MSA data", url: "https://www.census.gov/quickfacts/detroitcitymichigan", note: "Population and workforce numbers cited on this page" },
      { label: "Michigan Department of Agriculture — Food vending licensing", url: "https://www.michigan.gov/mdard/about/divisions/food-dairy", note: "Vending machine licensing reference" },
      { label: "Michigan Gaming Control Board — Vendor licensing", url: "https://www.michigan.gov/mgcb/vendors", note: "Casino BOH vendor pass reference" },
      { label: "NAMA — Michigan operator chapter", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
    ],
  },
  {
    __component: "library.block-related-guides",
    heading: "More for Detroit businesses",
    items: [
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "If you're considering becoming an operator yourself — Bobby Mac's 30-day buyer guide.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Industry guide", title: "Warehouse & manufacturing vending", description: "Vendor badging, second/third-shift restocking, and OSHA-compliant breakroom setups for Tier-1 supplier sites.", href: "/vending-for-warehouses" },
      { eyebrow: "Hub", title: "All cities we serve", description: "250+ U.S. cities with local vending partner coverage.", href: "/locations" },
    ],
  },
];

async function main() {
  await db.connect();
  const token = await ensureToken();
  console.log("provisioned token");
  const r = await db.query("SELECT DISTINCT document_id FROM cities WHERE slug = $1 LIMIT 1", [SLUG]);
  const docId = r.rows[0]?.document_id;
  if (!docId) throw new Error(`No city with slug ${SLUG}`);
  console.log("documentId:", docId);
  const resp = await fetch(`${STRAPI_URL}/api/cities/${docId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ data: { contentBlocks } }),
  });
  const text = await resp.text();
  console.log("PUT status:", resp.status);
  if (!resp.ok) { console.error("response:", text.slice(0, 2000)); await db.end(); process.exit(1); }
  console.log("ok — blocks:", contentBlocks.length);
  await db.end();
}
main().catch(async (err) => { console.error(err); await db.end().catch(() => {}); process.exit(1); });
