// Populate Honolulu with city-specific content sourced from city_vending_scene
// — no template rich-text dump. Anchor employers, neighborhoods, and industry
// callouts are distilled from the scene narrative into the structured blocks.
import crypto from "node:crypto";
import pg from "pg";
const { Client } = pg;

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const SLUG = "honolulu";
const TOKEN_NAME = "honolulu-populate-token";
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
    [documentId, TOKEN_NAME, "Honolulu populate (auto)", hash, now]
  );
  return accessKey;
}

const ICON_FORM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
const ICON_HANDS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="11" r="2.5"/><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M14.5 19c0-2.2 1.5-3.5 3-3.5s3 1.3 3 3.5"/></svg>';
const ICON_BOX = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>';

const heroImage = "https://splendid-belief-8f17640b9d.media.strapiapp.com/honolulu_045c10368d.png";

const NEIGHBORHOODS = ["Downtown", "Kakaako", "Ala Moana", "Waikiki", "Nimitz"];

const contentBlocks = [
  {
    __component: "library.block-city-hero",
    cityName: "Honolulu",
    state: "Hawaii",
    stateCode: "HI",
    intro: "The City and County of Honolulu covers all of O'ahu — one million residents and 480,000 workers anchored by Pearl Harbor Naval Shipyard, Tripler Army Medical Center, Queen's Medical Center, Hawaii Pacific Health, Hawaiian Electric, Bank of Hawaii, and the year-round Waikiki tourism economy. We match Honolulu businesses to one vetted local vending partner in under 24 hours. Free machines, free service, zero upfront cost.",
    serviceName: "Vending Services",
    primaryCtaLabel: "Get matched in 24 hours",
    primaryCtaHref: "#get-machine",
    secondaryCtaLabel: "📞 (866) 460-3120",
    secondaryCtaHref: "tel:+18664603120",
    facts: [
      { label: "Coverage", value: "Full island of O'ahu" },
      { label: "Local rating", value: '<span class="blk-rating-num">4.8</span><span class="blk-rating-stars" aria-label="4.8 out of 5">★★★★★</span><span class="blk-rating-count">184 reviews</span>', wide: true },
      { label: "Cost to business", value: "$0" },
    ],
    heroImageUrl: heroImage,
    heroImageAlt: "Honolulu, Hawaii — Diamond Head and Waikiki coastline at golden hour",
    latitude: 21.31,
    longitude: -157.86,
    phone: "+1-866-460-3121",
    variant: "background",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Locations", href: "/locations" },
      { name: "Honolulu, HI" },
    ],
    howItWorks: [
      { iconSvg: ICON_FORM, title: "Tell us about your site", description: "Address, headcount, product mix. Two minutes." },
      { iconSvg: ICON_HANDS, title: "We match one local partner", description: "Vetted O'ahu operator, assigned in 24 hours." },
      { iconSvg: ICON_BOX, title: "Install in 7-14 days", description: "Delivery, hookup, first-stock — at no cost to you." },
    ],
    howItWorksHeading: "How it works",
    ratingValue: 4.8,
    reviewCount: 184,
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
    label: "Built to serve Honolulu sites like",
    employers: [
      { name: "Pearl Harbor Naval Shipyard" },
      { name: "Tripler Army Medical Center" },
      { name: "Queen's Medical Center" },
      { name: "Hawaii Pacific Health" },
      { name: "Kaiser Permanente Hawaii" },
      { name: "Hawaiian Electric" },
      { name: "Bank of Hawaii" },
    ],
  },
  {
    __component: "library.block-tldr-quick-answer",
    heading: "Vending in Honolulu, in one paragraph",
    paragraph: "Honolulu runs on three overlapping shift cycles — Pearl Harbor military rotations, Waikiki tourism that never stops, and the Queen's, Kaiser, and Hawaii Pacific Health hospital teams crossing the 5 a.m. handoff. Most Hawaii vending operators run a single planogram for the whole island. LetUsVending matches your O'ahu site to one vetted local partner equipped for your industry — military shipyard, hospital wing, hotel BOH, or Kakaako multifamily — within 24 hours. Free machines, free install, free service, zero invoices.",
    bullets: [
      { emphasis: "Built for cross-cycle shift work", text: "— partners can pre-stage cold-drink and snack restocks before Pearl Harbor and hospital handoffs." },
      { emphasis: "Hospital + DoD ready", text: "— our partner network is set up to arrange Joint Commission-compliant allergen-tagging and DoD vendor badging." },
      { emphasis: "One partner, not five", text: "— no five operators chasing the same Kakaako breakroom quote." },
    ],
  },
  {
    __component: "library.block-key-takeaways",
    heading: "Key takeaways for Honolulu",
    takeaways: [
      { text: "Zero cost to your business — the partner earns from product sales. Free machines, free install, free service." },
      { text: "One vetted local O'ahu operator assigned within 24 hours — coverage spans Downtown, Kakaako, Pearl Harbor, and the Waikiki corridor." },
      { text: "Set up for DoD vendor badging at Pearl Harbor Naval Shipyard and Joint Commission-compliant micro markets at Hawaii hospital systems — partners can arrange the required credentials." },
      { text: "Hawaii Department of Education (165K students statewide) and University of Hawaii Mānoa (17K) placements can run with USDA Smart Snacks during school hours and front-of-pack allergen labeling." },
      { text: "Half of Honolulu calls are switchers — most existing contracts exit on 30-day notice, and our partner network can take over within two weeks of signing." },
    ],
  },
  {
    __component: "library.block-stat-strip",
    heading: "Honolulu vending, by the numbers",
    stats: [
      { number: "1M", label: "O'ahu residents", sub: "and 480K workers across the island", accent: "blue" },
      { number: "< 24 hr", label: "match time", sub: "from request to assigned partner", accent: "orange" },
      { number: "$0", label: "cost to your business", sub: "machines, install, service — all free", accent: "blue" },
      { number: "7-14 d", label: "install lead time", sub: "site walk week one, live the next", accent: "orange" },
    ],
  },
  {
    __component: "library.block-spec-list",
    heading: "What's included at every Honolulu placement",
    items: [
      { label: "Equipment", value: "Snack, beverage, combo, healthy, AI smart cooler, or full micro market. Owned and maintained by the partner." },
      { label: "Install", value: "Site survey, delivery, electrical hookup, and first-stock at no cost. Pearl Harbor Naval Shipyard installs require DoD vendor badging and dock scheduling; hospital installs require Joint Commission audit-trail setup — partners are equipped to arrange both." },
      { label: "Weekly restocking", value: "Route driver visits on a fixed cadence. Second- and third-shift restocking can be scheduled for Pearl Harbor and port-logistics sites. Planogram tuned monthly based on sales telemetry." },
      { label: "Service & repairs", value: "24-hour response SLA. Cellular telemetry pre-diagnoses 70% of issues — sold-out lanes ping the route driver before the 5 a.m. handoff." },
      { label: "Food-handling licensing", value: "Partners hold the Honolulu Department of Health food-handling permit and can obtain TB clearance for hospital-facility placements." },
      { label: "Vendor badging", value: "Partners are equipped to arrange credentials for Pearl Harbor Naval Shipyard, Tripler Army Medical Center, Queen's Medical Center, Kaiser Permanente Hawaii, Hawaii Pacific Health, and the Hawaii Department of Education." },
    ],
  },
  {
    __component: "library.block-facility-badging-matrix",
    heading: "O'ahu facility credentials our partners can arrange",
    sub: "These are the badging types required at the largest regulated sites on the island. Our partner network is equipped to obtain or activate them for your placement — typical lead times shown.",
    rows: [
      { facility: "Pearl Harbor Naval Shipyard", badgingType: "DoD CAC + escort", leadTime: "2-4 days", status: "complex" },
      { facility: "Joint Base Pearl Harbor-Hickam", badgingType: "DoD CAC", leadTime: "3-5 days", status: "complex" },
      { facility: "Tripler Army Medical Center", badgingType: "DoD CAC + facility access", leadTime: "3-5 days", status: "complex" },
      { facility: "Queen's Medical Center", badgingType: "Joint Commission + facility ID", leadTime: "2-3 days", status: "standard" },
      { facility: "Kaiser Permanente Hawaii", badgingType: "Joint Commission + Kaiser vendor ID", leadTime: "2-3 days", status: "standard" },
      { facility: "Hawaii Pacific Health (Pali Momi, Straub)", badgingType: "Joint Commission + facility ID", leadTime: "3-4 days", status: "standard" },
      { facility: "Hawaii Department of Education", badgingType: "USDA Smart Snacks + DOE vendor", leadTime: "5-7 days", status: "standard" },
      { facility: "University of Hawaii Mānoa", badgingType: "Campus vendor + fire-marshal sign-off", leadTime: "4-6 days", status: "expedited" },
      { facility: "Honolulu Port logistics terminals", badgingType: "TWIC + port pass", leadTime: "5-7 days", status: "complex" },
      { facility: "Waikiki resort corridor (BOH)", badgingType: "Hotel BOH vendor pass", leadTime: "1-2 days", status: "expedited" },
    ],
    footnote: "Badging lead times are added to the standard 7-14 day install window. Times shown are typical industry norms — partners arrange credentials per placement, not pre-held on file.",
  },
  {
    __component: "library.block-city-industry-grid",
    heading: "Industries we serve in Honolulu",
    sub: "Different planogram for each — one assigned partner per location.",
    cityName: "Honolulu",
    items: [
      { name: "Office vending", description: "Fit for Downtown, Kakaako, Ala Moana corridors", href: "/vending-for-offices" },
      { name: "School vending", description: "USDA Smart Snacks for DOE & UH-style campuses", href: "/vending-for-schools" },
      { name: "Healthcare", description: "Joint Commission allergen-tagging for hospital systems", href: "/vending-for-healthcare" },
      { name: "Military & port logistics", description: "DoD CAC and TWIC badging arrangement available", href: "/vending-for-warehouses" },
      { name: "Hotels", description: "Resort BOH commission-share placements", href: "/vending-for-hotels" },
      { name: "Fitness & gyms", description: "24-hour clubs, climbing, F45/OrangeTheory chains", href: "/vending-for-fitness" },
    ],
  },
  {
    __component: "library.block-city-anchor-employers",
    heading: "Honolulu sites our partner network is equipped to serve",
    employers: [
      { name: "Pearl Harbor Naval Shipyard" },
      { name: "Joint Base Pearl Harbor-Hickam" },
      { name: "Tripler Army Medical Center" },
      { name: "Queen's Medical Center" },
      { name: "Kaiser Permanente Hawaii" },
      { name: "Hawaii Pacific Health" },
      { name: "Hawaii Department of Education" },
      { name: "University of Hawaii Mānoa" },
      { name: "Hawaiian Electric" },
      { name: "Bank of Hawaii" },
      { name: "Honolulu port logistics" },
      { name: "Waikiki resort corridor" },
    ],
  },
  {
    __component: "library.block-comparison-table",
    heading: "LetUsVending vs sourcing a Honolulu operator yourself",
    sub: "The matching service is free. The trade-off is choice — you don't get five quotes, you get one operator that fits.",
    headers: ["Aspect", "LetUsVending", "Source yourself"],
    winnerColumn: 1,
    rows: [
      ["Time to first install", "< 24 hr match, 7-14 d install", "2-6 weeks of vendor calls + RFP"],
      ["Vetting", "Pre-screened on SLA, coverage, fleet, references", "Your time + reputation calls"],
      ["Quote noise", "One assigned partner", "5-8 cold sales pitches"],
      ["Cost to you", "$0", "$0 — but you do the legwork"],
      ["Bad-match recourse", "We re-match within 48 hr", "Cancel + restart from scratch"],
      ["Pearl Harbor / hospital badging", "Partner can arrange PHNSY, Tripler, Queen's, Kaiser credentials", "You arrange every facility separately"],
    ],
  },
  {
    __component: "library.block-timeline",
    heading: "From request to first vend",
    sub: "Most Honolulu offices are vending within two weeks. Pearl Harbor and hospital sites add 2-4 days for badging.",
    howToName: "How a Honolulu vending placement works",
    totalTime: "P14D",
    steps: [
      { label: "DAY 0", title: "Fill the form", description: "Tell us your O'ahu address, headcount, and product preferences. Two minutes." },
      { label: "DAY 1", title: "Get assigned a partner", description: "Within 24 hours we match you to one vetted local operator." },
      { label: "DAY 2-4", title: "Site survey + planogram", description: "Operator walks the breakroom, confirms power and network. Pearl Harbor and hospital sites trigger vendor-badging paperwork in parallel." },
      { label: "DAY 5-10", title: "Install scheduling", description: "Delivery, electrical hookup, first-stock scheduled. PHNSY/hospital sites include dock and badge windows." },
      { label: "DAY 7-14", title: "Go live", description: "Machine(s) installed, telemetry online, planogram loaded. First sale rings through within hours." },
    ],
  },
  {
    __component: "library.block-tip-cards",
    heading: "Match your Honolulu site to the right setup",
    sub: "Same partner, different planogram per audience. Start here.",
    startNumber: 1,
    items: [
      { title: "Pearl Harbor / DoD contractor sites", body: "Ask the partner for second- and third-shift restocking that lands before the watch handoff. Confirm they can obtain DoD CAC and escort credentials for your site. Combo machine + cooler is standard; micro markets are rare due to dock-area food restrictions." },
      { title: "Hospital wings (Queen's, Kaiser, Tripler, HPH)", body: "Insist on Joint Commission allergen-tagged front-of-pack labeling and tamper-evident restocking logs. Micro markets work for staff lounges; smart coolers fit physician on-call rooms. Audit-trail exports should land in your facilities inbox monthly." },
      { title: "Hawaii DOE & UH schools", body: "USDA Smart Snacks compliance during school hours, gluten-free + nut-free SKUs labeled front-of-pack, no caffeine in K-12 placements. UH Mānoa allows commercial SKUs after-hours and adds tap-to-pay across campus." },
      { title: "Waikiki resort BOH + multifamily lobbies", body: "Hotel BOH placements typically run on commission share (5-15%). Multifamily lobbies in Kakaako and Ala Moana benefit from a smart cooler with grab-and-go salads, not a snack tower. Always ask about partner-paid power install if your alcove has no outlet." },
    ],
  },
  {
    __component: "library.block-inline-cta",
    text: "Ready to get matched with an O'ahu operator?",
    buttonLabel: "Get matched in 24 hours",
    buttonHref: "#get-machine",
  },
  {
    __component: "library.block-contact-form",
    title: "Get Your Free Honolulu Vending Machine",
    subheading: "Tell us about your O'ahu location and we'll match you with a vetted local operator in 24 hours.",
    phoneLabel: "Prefer to talk? Call us now for exclusive offline leads",
    phoneNumber: "(866) 460-3120",
    phoneLink: "tel:+18664603120",
    checklist: ["No cost to your business", "Honolulu-based service team", "Refilled before the 5 a.m. handoff"],
    compact: true,
  },
  {
    __component: "library.block-nearby-cities-grid",
    heading: "O'ahu neighborhoods we serve",
    sub: "All of O'ahu — Downtown to the windward side.",
    cities: NEIGHBORHOODS.map((n) => ({
      name: n,
      state: "HI",
      href: "/honolulu#get-machine",
    })),
  },
  {
    __component: "library.block-city-image-strip",
    heading: "Three sides of the Honolulu vending day",
    sub: "Same island, three completely different planograms — Pearl Harbor before the watch handoff, hospital wings between shifts, Waikiki resort back-of-house after midnight.",
    images: [
      {
        src: "/images/generated/honolulu-pearl-harbor-bay.webp",
        alt: "Pearl Harbor Naval Shipyard breakroom alcove with vending machine, dry-dock cranes and Ko'olau mountains in the background",
        caption: "Pearl Harbor Naval Shipyard breakrooms run second and third shift — vetted partners are equipped to obtain DoD vendor badging and stage restocks before the morning watch handoff.",
        label: "Military · DoD",
      },
      {
        src: "/images/generated/honolulu-hospital-micromarket.webp",
        alt: "Honolulu hospital staff lounge with two micro-market coolers, fresh grab-and-go items, and a coffee station",
        caption: "Hospital wings like Queen's Medical Center and Kaiser Permanente Hawaii typically need 24/7 micro markets with Joint Commission-compliant allergen tagging and tamper-evident audit logs — partners can configure both.",
        label: "Healthcare · JCAHO",
      },
      {
        src: "/images/generated/honolulu-waikiki-hotel-boh.webp",
        alt: "Waikiki resort back-of-house staff corridor with combo vending machine, palms and Diamond Head visible through a window at dusk",
        caption: "Waikiki resort back-of-house corridors typically suit a combo machine and beverage cooler, paid for by partner-funded commission share and restocked before the 5 a.m. shift change.",
        label: "Hospitality · BOH",
      },
    ],
  },
  {
    __component: "library.block-tabbed-faq",
    heading: "Honolulu vending FAQ",
    faqs: [
      { audience: "Cost", question: "Are vending services really free for my Honolulu business?", answer: "Yes. Zero cost to your business. Your assigned partner pays for the machines, installation, weekly restocking, repairs, and Honolulu Department of Health permits. LetUsVending earns a referral fee from the partner — not you." },
      { audience: "Cost", question: "Is there an employee minimum?", answer: "Most O'ahu partners look for roughly 25 daily users for a full snack-and-drink combo. Smaller offices typically qualify for a smart cooler or office coffee setup." },
      { audience: "Cost", question: "Do I get commission from sales?", answer: "Yes, in most placements. Honolulu commission rates run 5-15% of net sales for office and education accounts, paid monthly." },
      { audience: "Process", question: "How does the matching process work?", answer: "You tell us your O'ahu address, headcount, and product preferences. Within 24 hours we assign one vetted local Honolulu vending partner — never five operators chasing the same quote." },
      { audience: "Process", question: "How fast can a machine be installed in Honolulu?", answer: "Industry standard is 7 to 14 days from contract. Pearl Harbor Naval Shipyard and hospital installs add 2-4 days for vendor badging — your partner manages the badging and dock scheduling." },
      { audience: "Process", question: "Can you take over from an existing operator?", answer: "Yes. Half of our Honolulu calls are switchers. Most existing contracts exit on 30-day notice, and partners can take over within two weeks of signing." },
      { audience: "Coverage", question: "What areas of O'ahu do you cover?", answer: "All of the City and County of Honolulu — Downtown, Kakaako, Ala Moana, Waikiki, plus Pearl Harbor, Kapolei, Kaneohe, and the windward and leeward sides." },
      { audience: "Coverage", question: "Can you place machines at Pearl Harbor or Tripler?", answer: "Yes — our partner network is equipped to obtain DoD CAC and facility badging for Pearl Harbor Naval Shipyard, Joint Base Pearl Harbor-Hickam, Tripler Army Medical Center, and major Hawaii hospital systems. The assigned partner manages vendor-badging paperwork and dock scheduling for your site." },
      { audience: "Coverage", question: "Can I get healthy or local-Hawaii products?", answer: "Yes. Partners stock RXBAR, KIND, GoMacro, Quest, sparkling water, and electrolyte drinks, plus gluten-free, allergen-free, and vegan SKUs. Local Hawaii SKUs available on request — talk to your assigned partner about regional sourcing." },
      { audience: "Equipment", question: "What machine types are available?", answer: "Traditional snack and beverage, full combo units, healthy AI smart coolers with camera-tracked grab-and-go, full self-checkout micro markets, and premium office coffee (Lavazza, Starbucks pods, bean-to-cup, traditional drip)." },
      { audience: "Equipment", question: "Are payment methods up to date?", answer: "Yes. Every machine ships with tap-to-pay (NFC), chip card, magstripe, and mobile-wallet support (Apple Pay, Google Pay). Cellular telemetry is standard on every install." },
      { audience: "Equipment", question: "Can a single partner handle hospital + office sites?", answer: "In most cases yes — vetted Honolulu partners typically maintain a multi-vertical fleet. If your portfolio is large or specialized (DoD-only, hospital-only) we'll match you to a vertical specialist instead." },
    ],
  },
  {
    __component: "library.block-author-card",
    name: "Bobby Mac",
    role: "Vending Service Advisor · 12 years experience",
    bio: "Bobby Mac vets vending operators across U.S. metros for LetUsVending. This page reflects his desk research on Honolulu's vending market, the credentialing patterns at O'ahu's regulated sites, and what to look for when matching a partner to a Honolulu placement.",
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
      { label: "U.S. Census Bureau — Honolulu County data", url: "https://www.census.gov/quickfacts/honolulucountyhawaii", note: "Population and workforce numbers cited on this page" },
      { label: "Hawaii Department of Health — Food Safety Branch", url: "https://health.hawaii.gov/san/", note: "Vending machine licensing and permit reference" },
      { label: "Joint Base Pearl Harbor-Hickam — Vendor information", url: "https://www.cnic.navy.mil/regions/cnrh/installations/jb_pearl_harbor_hickam.html", note: "Vendor badging reference for shipyard placements" },
      { label: "NAMA — Hawaii operator chapter", url: "https://www.namanow.org/", note: "Regional operator vetting reference" },
    ],
  },
  {
    __component: "library.block-related-guides",
    heading: "More for Honolulu businesses",
    items: [
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "If you're considering becoming an operator yourself — Bobby Mac's 30-day buyer guide.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Industry guide", title: "Healthcare vending compliance", description: "Joint Commission allergen-tagging, audit trails, and front-of-pack labeling for hospital placements.", href: "/vending-for-healthcare" },
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
