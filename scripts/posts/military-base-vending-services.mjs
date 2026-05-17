import { seedPost, tldr, statStrip, specList, tipCards, comparisonTable, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("military-base-vending-services", [
  tldr({
    heading: "How does vending work on military bases — and what's different?",
    paragraph:
      "Military base vending operates under a distinct regulatory + procurement framework versus civilian placements. Categories: AAFES (Army & Air Force Exchange Service) + NEXCOM (Navy Exchange Service Command) + MCCS (Marine Corps Community Services) + DeCA (Defense Commissary Agency) installations run their own vending under exchange contracts; non-exchange placements (industrial / training / readiness areas) procured by base contracting office under FAR Part 13 (simplified acquisition under $250K) or FAR Part 15 (negotiated procurement above $250K). Randolph-Sheppard Act preference: blind vendors operating under state licensing agencies get statutory preference at federal-facility vending including military bases (estimated 20-30% of military vending operates under R-S program). Operator requirements: SAM.gov active registration + CAGE code + small business / 8(a) / SDVOSB / HUBZone status often required for non-exchange contracts, security clearance for personnel (typically NACI / Tier 1 at minimum; SECRET at sensitive installations), 24/7 service capability (military operates 24/7), industrial-style planogram (high-calorie + caffeine + hydration + familiar brands at moderate pricing), allergen-restricted basics, base-access protocols (PASS / visitor badge + escort + vehicle inspection). Modern military vending operators provide telemetry + ESG reporting + electrical / refrigerant compliance. Build operator FAR compliance + R-S coordination + security clearance + 24/7 SLA into RFP at concept.",
    bullets: [
      { emphasis: "Exchange vs non-exchange procurement paths:",
        text: "AAFES / NEXCOM / MCCS / DeCA run exchange vending; non-exchange placements via FAR Part 13 (simplified) or Part 15 (negotiated). Match path to placement type." },
      { emphasis: "Randolph-Sheppard Act preference:",
        text: "Blind vendors under state licensing agencies get statutory preference at federal-facility vending. 20-30% of military vending operates under R-S program." },
      { emphasis: "Security clearance + 24/7 capability required:",
        text: "NACI / Tier 1 minimum for personnel; SECRET at sensitive installations. 24/7 service + telemetry + industrial planogram. Modern operator standard.", },
    ],
  }),
  statStrip({
    heading: "Military base vending benchmarks",
    stats: [
      { number: "4 exchanges", label: "service-branch exchanges", sub: "AAFES + NEXCOM + MCCS + DeCA", accent: "blue" },
      { number: "20-30%", label: "R-S program share", sub: "blind vendor statutory preference", accent: "blue" },
      { number: "24/7", label: "operating window", sub: "military operates continuously", accent: "blue" },
      { number: "NACI / Tier 1+", label: "personnel clearance minimum", sub: "SECRET at sensitive installations", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Military base vending procurement paths",
    sub: "Different paths for exchange vs non-exchange placements + R-S preference. Match path to placement type + operator qualifications.",
    headers: ["Procurement path", "Authority", "Operator requirements", "Typical placements"],
    rows: [
      ["AAFES exchange contract", "Army & Air Force Exchange Service", "AAFES contractor registration + vendor agreement", "Army + Air Force base exchanges + post-X stores + on-base retail"],
      ["NEXCOM exchange contract", "Navy Exchange Service Command", "NEXCOM contractor registration + vendor agreement", "Navy + Marine Corps base exchanges + Navy retail"],
      ["MCCS contract", "Marine Corps Community Services", "MCCS contractor agreement", "Marine Corps base community + retail amenities"],
      ["DeCA exchange contract", "Defense Commissary Agency", "DeCA vendor agreement", "Commissary store vending + adjacent"],
      ["FAR Part 13 (simplified, <$250K)", "Base contracting office", "SAM.gov + CAGE code + small biz / 8(a) status often", "Non-exchange industrial / training / readiness placements"],
      ["FAR Part 15 (negotiated, >$250K)", "Base contracting office or DLA", "Full FAR compliance + competitive proposal + security clearance", "Large non-exchange placements; multi-machine fleet contracts"],
      ["Randolph-Sheppard preference", "State licensing agency + base", "Blind vendor under state licensing agency", "Federal-facility vending; statutory preference"],
    ],
  }),
  specList({
    heading: "Military base vending specifications",
    items: [
      { label: "Exchange vs non-exchange procurement", value: "Exchange placements (post-X / NEX / MCX stores + commissary) procured via AAFES / NEXCOM / MCCS / DeCA contractor agreements. Non-exchange placements (industrial / training / readiness / billeting areas) procured by base contracting office under FAR Part 13 (simplified, under $250K) or Part 15 (negotiated, above $250K). Match procurement path to placement type." },
      { label: "Randolph-Sheppard Act coordination", value: "Federal Randolph-Sheppard Act gives blind vendors operating under state licensing agencies statutory preference at federal-facility vending including military bases. 20-30% of military vending operates under R-S program. Coordinate with state licensing agency + base contracting office. R-S vendor + commercial operator may partner (joint-venture or sub-contract structure)." },
      { label: "SAM.gov + CAGE code registration", value: "Federal contractor registration via SAM.gov (System for Award Management) + CAGE code (Commercial and Government Entity) required for non-exchange contracts. NAICS code 454210 (vending machine operators) + 311999 (food manufacturing) common. Small business size standard $30M revenue or 500 employees. 8(a) / SDVOSB / HUBZone / WOSB status often weighted in evaluation." },
      { label: "Security clearance + base access", value: "Personnel clearance NACI / Tier 1 minimum (background investigation); SECRET at sensitive installations (R&D, command + control, intelligence facilities). Base-access protocols: PASS or visitor badge + escort, vehicle inspection at gate, restricted-area access coordination, photo restrictions. Lead time 6-12 weeks for clearance + base access setup." },
      { label: "24/7 service capability", value: "Military operates 24/7 — exchanges + dining + industrial + training + readiness. Vending demand peaks at shift transitions (typically 0530-0700 + 1200-1300 + 1700-1830 + 2200-2300). Operator service capability 24/7 with telemetry-driven prioritization. Modern operators have natively; legacy operators struggle." },
      { label: "Industrial-style planogram + moderate pricing", value: "Military workforce includes industrial / training / readiness personnel + administrative + medical + dining + retail staff. Industrial-style planogram (high-calorie + caffeine + hydration + familiar brands like Lay's + Hershey + Snickers + Hostess) at moderate pricing (anchor to convenience-store +10-20% upper bound; aggressive markup produces base ops complaints)." },
      { label: "Allergen + dietary accommodations", value: "Allergen-restricted basics (gluten-free, nut-free, lactose-free), kosher / halal at installations with religious accommodations + interfaith chaplaincy programs (varies by base), vegetarian / vegan options, MyPlate-aligned options at base health promotion zones. Match planogram to base demographics + commander's health initiative." },
      { label: "Telemetry + compliance reporting", value: "Modern operators provide telemetry-driven service + monthly reporting (uptime, dispense count, revenue, service tickets) + quarterly business review with contracting officer. ESG / sustainability data feeds DoD sustainability reporting (Federal Sustainability Plan + service-branch goals). Modern operator standard; legacy operators lag." },
      { label: "Buy American Act / Buy Indian Act compliance", value: "Federal procurement preferences for domestic products + Indian-owned businesses where applicable. Operator product sourcing should document domestic origin or qualified exception (Trade Agreements Act for designated countries). Build into product procurement + reporting; modern operators support natively.", },
    ],
  }),
  tipCards({
    heading: "Five military base vending mistakes",
    sub: "All preventable with FAR compliance + R-S coordination + security clearance + modern operator capability.",
    items: [
      { title: "Treating military base like civilian commercial placement", body: "Military base vending operates under distinct regulatory + procurement framework. SAM.gov + CAGE code + FAR compliance + R-S coordination + security clearance + base access protocols + 24/7 SLA + industrial planogram. Civilian commercial process produces RFP rejection + contracting officer friction. Build military-specific framework at concept." },
      { title: "Ignoring Randolph-Sheppard preference", body: "Blind vendors under state licensing agencies have statutory preference at federal-facility vending. 20-30% of military vending under R-S program. Coordinate with state licensing agency at concept. R-S vendor + commercial operator may partner (joint-venture or sub-contract structure). Bypassing R-S triggers legal + contracting officer issues." },
      { title: "Civilian-pricing strategy at industrial / readiness placement", body: "Industrial / training / readiness areas of military bases require moderate pricing (anchor to convenience-store +10-20% upper bound). Aggressive markup (+30-60% civilian highway / airport benchmark) produces base ops complaints + contracting officer escalation + reputation damage. Match pricing to placement type + workforce demographics." },
      { title: "Standard-hours service at 24/7 operation", body: "Military operates 24/7. Standard 9 AM - 5 PM operator service misses shift-transition peaks (0530-0700 + 1200-1300 + 1700-1830 + 2200-2300). 24/7 service capability with telemetry-driven prioritization modern standard. SIDA-equivalent badged drivers + base-access protocols. Build into operator contract." },
      { title: "Skipping security clearance + base access lead time", body: "NACI / Tier 1 minimum personnel clearance + base access protocols 6-12 week lead time. Operators that skip clearance setup miss installation deadlines + can't service contract. Build clearance + base access into proposal timeline. SECRET clearance lead time 6-12 months at sensitive installations.", },
    ],
  }),
  inlineCta({
    text: "Want the military base vending framework (procurement + R-S + clearance + 24/7 + planogram)?",
    buttonLabel: "Get the military vending framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported military base vending operations across Army + Air Force + Navy + Marine Corps installations — including AAFES / NEXCOM / MCCS / DeCA exchange coordination, FAR Part 13 + Part 15 non-exchange procurement, Randolph-Sheppard Act coordination, security clearance + base access protocols, 24/7 service operations, and industrial-style planogram design. The benchmarks reflect operator-side data + contracting officer + R-S vendor feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does vending work on military bases?", answer: "Two procurement paths — exchange (AAFES / NEXCOM / MCCS / DeCA contractor agreements at post-X / NEX / MCX / commissary placements) and non-exchange (FAR Part 13 simplified or Part 15 negotiated at industrial / training / readiness / billeting placements). Randolph-Sheppard Act gives blind vendors statutory preference at federal-facility vending.", audience: "Contracting Officers" },
      { question: "What's the Randolph-Sheppard Act preference?", answer: "Federal R-S Act gives blind vendors operating under state licensing agencies statutory preference at federal-facility vending including military bases. 20-30% of military vending operates under R-S program. Coordinate with state licensing agency + base contracting office. R-S vendor + commercial operator may partner.", audience: "Contracting Officers" },
      { question: "What clearance do operator personnel need?", answer: "NACI / Tier 1 minimum (background investigation). SECRET at sensitive installations (R&D, command + control, intelligence facilities). Base-access protocols: PASS or visitor badge + escort, vehicle inspection at gate, restricted-area access coordination. Lead time 6-12 weeks NACI; 6-12 months SECRET.", audience: "Operators" },
      { question: "What FAR compliance is required?", answer: "SAM.gov registration + CAGE code + NAICS code 454210 (vending machine operators). FAR Part 13 (simplified acquisition under $250K) for smaller placements; Part 15 (negotiated procurement above $250K) for larger. 8(a) / SDVOSB / HUBZone / WOSB status often weighted in evaluation. Buy American Act compliance.", audience: "Operators" },
      { question: "What pricing should we use at military bases?", answer: "Moderate pricing — anchor to convenience-store benchmarks +10-20% upper bound. Industrial / training / readiness areas + military workforce price-sensitive demographic. Aggressive markup (+30-60% civilian highway / airport benchmark) produces base ops complaints + contracting officer escalation + reputation damage.", audience: "Operators" },
      { question: "What planogram works at military bases?", answer: "Industrial-style — high-calorie + caffeine + hydration + familiar brands (Lay's, Hershey, Snickers, Hostess). Allergen-restricted basics (gluten-free, nut-free, lactose-free). Kosher / halal at installations with religious accommodations. Vegetarian / vegan. MyPlate-aligned at health promotion zones. Match to base demographics + commander's health initiative.", audience: "Operators" },
      { question: "Do we need 24/7 service capability?", answer: "Yes — military operates 24/7. Standard 9 AM - 5 PM service misses shift-transition peaks (0530-0700 + 1200-1300 + 1700-1830 + 2200-2300). 24/7 service capability with telemetry-driven prioritization modern standard. SIDA-equivalent badged drivers + base-access protocols. Build into operator contract.", audience: "Contracting Officers" },
      { question: "What about Buy American Act compliance?", answer: "Federal procurement preferences for domestic products + Indian-owned businesses where applicable. Operator product sourcing should document domestic origin or qualified exception (Trade Agreements Act for designated countries). Build into product procurement + reporting; modern operators support natively. Legacy operators may lack documentation.", audience: "Contracting Officers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AAFES — Army & Air Force Exchange Service", url: "https://www.aafes.com/", note: "Army + Air Force exchange procurement authority" },
      { label: "NEXCOM — Navy Exchange Service Command", url: "https://www.mynavyexchange.com/", note: "Navy exchange procurement authority" },
      { label: "Randolph-Sheppard Act — Department of Education", url: "https://rsa.ed.gov/about/programs/randolph-sheppard-vending-facility-program", note: "Federal Randolph-Sheppard Vending Facility Program" },
      { label: "SAM.gov — System for Award Management", url: "https://sam.gov/", note: "Federal contractor registration platform" },
      { label: "FAR — Federal Acquisition Regulation", url: "https://www.acquisition.gov/browse/index/far", note: "Federal procurement regulation underlying non-exchange contracts" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending in federal courthouses", description: "Federal facility vending with FAR compliance + Randolph-Sheppard coordination + security protocols.", href: "/vending-for-public-buildings/vending-in-federal-courthouses" },
      { eyebrow: "Operations", title: "Energy-efficient vending for public service", description: "ENERGY STAR + LED + telemetry-routing at government and public-building placements.", href: "/vending-for-public-buildings/energy-efficient-vending-public-service" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Federal, state, military, courthouse, and public-facility vending operations + procurement + compliance.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
