import { seedPost, tldr, statStrip, specList, comparisonTable, dimensionDiagram, tipCards, timeline, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("hotel-vending-electrical-needs", [
  tldr({
    heading: "What electrical infrastructure does hotel vending require — and how does it vary by placement zone?",
    paragraph:
      "Hotel vending electrical requirements vary substantially by placement zone, equipment type, and code framework. The baseline requirement at any modern vending machine is a dedicated 120V/15A or 20A circuit per machine on its own breaker, with NEMA 5-15R (15A) or NEMA 5-20R (20A) outlet within 6 feet of the placement location. The four placement zones each carry distinct overlays: (1) standard interior zones (lobby alcove, corridor, fitness center interior, conference center, business center) — dedicated 120V/15A circuit suffices for combo machines + beverage coolers; load typical 4-8 amps continuous; (2) water-adjacent zones (pool deck, fitness center near pool, ice machine alcove, near sinks or laundry) — GFCI protection required per NEC Article 422.5 and 210.8, often 20A circuit recommended; (3) outdoor zones (pool deck open-air, outdoor lounge, parking-lot vending) — outdoor-rated equipment (NEMA 3R or 4 enclosure) + GFCI + weather-resistant outlet (WR-rated) + in-use weatherproof cover; conduit-protected wiring; lightning protection consideration; (4) AI vending cooler placements (typically lobby + executive lounge + premium amenity zones) — dedicated 120V/20A circuit; higher continuous load (10-15 amps with refrigeration + telemetry + payment + LED interior + display screen); UPS battery backup recommended at premium urban placements where utility interruption affects guest experience. State + local code overlays vary — California Title 24, NYC LL97, Florida Building Code (hurricane-rated outlets at coastal properties), and properties in flood-zones carry additional considerations. The hotel is responsible for electrical infrastructure on standard operator-funded contracts; cost typical $0-400 per machine for standard interior placements (existing alcoves often have wiring already), up to $1,000-2,500 for water-adjacent or outdoor placements requiring GFCI + weather-resistant infrastructure + conduit. This guide walks through each placement zone with the specific requirements, code citations, cost picture, contractor coordination, and contract clauses around responsibility split.",
    bullets: [
      { emphasis: "Baseline: dedicated 120V/15A or 20A circuit per machine:", text: "Own breaker, NEMA 5-15R or 5-20R outlet within 6 feet of placement. Continuous load 4-8 amps for combo + beverage cooler; 10-15 amps for AI cooler. State + local code overlays apply." },
      { emphasis: "Four placement zones with distinct overlays:", text: "Standard interior (basic circuit) + water-adjacent (GFCI per NEC) + outdoor (NEMA 3R/4 + WR + in-use cover + conduit + lightning) + AI cooler placements (20A dedicated + UPS recommended at premium urban)." },
      { emphasis: "Hotel responsibility under operator-funded contracts:", text: "Hotel pays $0-400 for standard interior; $1,000-2,500 for water-adjacent + outdoor + AI cooler. Operator coordinates placement + load spec; hotel's electrical contractor installs to code." },
    ],
  }),
  statStrip({
    heading: "Hotel vending electrical benchmarks",
    stats: [
      { number: "120V/15-20A", label: "dedicated circuit per machine", sub: "own breaker; NEMA 5-15R or 5-20R outlet", accent: "blue" },
      { number: "$0-400", label: "standard interior install", sub: "existing alcove wiring typical", accent: "orange" },
      { number: "$1-2.5K", label: "water-adjacent or outdoor install", sub: "GFCI + WR + conduit + in-use cover", accent: "orange" },
      { number: "10-15 A", label: "AI cooler continuous load", sub: "vs 4-8 A combo / beverage cooler", accent: "blue" },
    ],
  }),
  dimensionDiagram({
    heading: "Standard hotel vending machine — electrical specification",
    sub: "Baseline 120V/15A or 20A dedicated circuit on its own breaker. Outlet within 6 feet of placement. GFCI required in water-adjacent zones.",
    machineName: "Combo machine or beverage cooler",
    width: "39 in (99 cm) typical",
    depth: "33 in (84 cm) typical",
    height: "72 in (183 cm) typical",
    footprint: "9 sq ft",
    weightEmpty: "650 lb (295 kg) typical",
    weightLoaded: "950 lb (430 kg) loaded",
    doorwayClearance: "≥32 in (81 cm) on accessible route",
    note: "Electrical: dedicated 120V/15A or 20A circuit on own breaker. NEMA 5-15R (15A) or NEMA 5-20R (20A) outlet within 6 ft of placement. Continuous load 4-8 amps typical for combo machine + beverage cooler at standard interior placement. GFCI per NEC 210.8 at water-adjacent zones (pool deck, fitness near pool, ice machine alcove, near sinks). Outdoor-rated NEMA 3R/4 + WR outlet + in-use weatherproof cover at outdoor placements.",
  }),
  comparisonTable({
    heading: "Electrical requirements by placement zone",
    sub: "Four placement zones with distinct electrical requirements. Standard interior + water-adjacent + outdoor + AI cooler.",
    headers: ["Requirement", "Standard interior", "Water-adjacent", "Outdoor", "AI cooler"],
    rows: [
      ["Circuit", "120V/15A dedicated", "120V/20A dedicated", "120V/20A dedicated", "120V/20A dedicated"],
      ["Outlet", "NEMA 5-15R", "NEMA 5-15R or 5-20R", "NEMA 5-15R/5-20R WR-rated", "NEMA 5-20R"],
      ["GFCI", "Not required", "Required (NEC 210.8)", "Required", "Recommended"],
      ["Enclosure rating", "NEMA 1 (indoor)", "NEMA 1", "NEMA 3R or 4 (outdoor)", "NEMA 1"],
      ["In-use weatherproof cover", "Not required", "Recommended", "Required", "Not required"],
      ["Conduit protection", "Not required", "Recommended", "Required", "Not required"],
      ["Lightning protection", "Not required", "Not required", "Recommended at exposed sites", "Recommended at premium urban"],
      ["UPS battery backup", "Optional", "Optional", "Optional", "Recommended at premium urban"],
      ["Continuous load (amps)", "4-8 A", "4-8 A", "5-10 A (depending on equipment)", "10-15 A"],
      ["Install cost typical", "$0-400", "$500-1,500", "$1,000-2,500", "$300-800"],
    ],
  }),
  specList({
    heading: "Electrical requirement detail by zone",
    items: [
      { label: "Standard interior placement — lobby, corridor, fitness, conference, business center", value: "Dedicated 120V/15A circuit on its own breaker. NEMA 5-15R outlet within 6 feet of placement. Continuous load 4-8 amps typical for combo machine + beverage cooler. Existing electrical alcoves at hotels often have wiring already; install cost $0-100 typical. New circuit run $200-400 depending on distance from panel + chase access. No GFCI required at standard interior zones (NEC 210.8 doesn't apply). Standard NEMA 1 enclosure rating on equipment." },
      { label: "Water-adjacent placement — pool deck, fitness near pool, ice alcove, near sinks", value: "GFCI protection required per NEC Article 422.5 (appliance specific) and Article 210.8 (general dwelling + occupancy water-adjacent). 20A circuit recommended. NEMA 5-15R or 5-20R outlet within 6 feet. In-use weatherproof cover recommended even at indoor locations near water (humidity + condensation considerations). Conduit protection recommended. Install cost $500-1,500 depending on existing wiring + GFCI breaker + outlet swap." },
      { label: "Outdoor placement — pool deck open-air, outdoor lounge, parking-lot vending", value: "Outdoor-rated equipment (NEMA 3R or 4 enclosure on machine — verify model spec; modern outdoor units carry NEMA 4 weatherproof). GFCI protection required. NEMA 5-15R or 5-20R outlet WR-rated (weather-resistant). In-use weatherproof cover required. Conduit-protected wiring required. Lightning protection consideration at exposed sites (especially coastal + lightning-prone regions — FL, TX, OK). Install cost $1,000-2,500 depending on infrastructure scope." },
      { label: "AI vending cooler placements — lobby, executive lounge, premium amenity zones", value: "Dedicated 120V/20A circuit (continuous load 10-15 amps with refrigeration + telemetry + payment + LED interior + display screen — exceeds 15A circuit threshold). NEMA 5-20R outlet within 6 feet. UPS battery backup recommended at premium urban placements where utility interruption affects guest experience (minimum 30-min backup for graceful shutdown + telemetry alarm). Lightning protection recommended at premium urban exposed sites. Install cost $300-800 (often new 20A circuit run)." },
      { label: "State + local code overlays — CA Title 24", value: "California Title 24 Part 6 (energy efficiency) imposes equipment efficiency requirements at all electrical loads including vending. ENERGY STAR-certified equipment satisfies; non-ENERGY STAR may face additional code requirements. Title 24 Part 3 (electrical code) carries enhanced GFCI requirements at water-adjacent zones beyond NEC baseline. Coordinate with property compliance counsel at California properties." },
      { label: "State + local code overlays — NYC LL97 + LL157", value: "NYC Local Law 97 (building emissions) imposes building-level emissions caps at properties over 25,000 sq ft. Vending equipment energy consumption contributes to building total. ENERGY STAR equipment minimizes contribution. LL157 (gas detector) and electrical safety standards apply at all vending placements with gas-line proximity (uncommon at vending but applicable in mixed-use hotel + restaurant placements). Coordinate with property compliance + facilities engineering." },
      { label: "State + local code overlays — Florida Building Code coastal + hurricane", value: "Florida Building Code at coastal properties imposes hurricane-rated outlet + wiring requirements at outdoor placements. Lightning protection requirements at exposed sites. Wind-load ratings on outdoor equipment + canopy infrastructure. Coordinate with property facilities engineering + structural engineer at coastal Florida properties. Cost premium $200-800 per outdoor placement above standard." },
      { label: "Flood-zone considerations", value: "Properties in FEMA flood zones (A, AE, VE) carry additional electrical considerations: outlets above flood elevation, conduit protection on exposed runs, equipment elevation on platforms above flood elevation, disconnect access at flood event. Coordinate with property facilities engineering + flood-zone compliance counsel. Cost premium $500-2,000 per placement above standard at flood-zone properties." },
      { label: "Contractor coordination + permit", value: "Licensed electrical contractor required for circuit install + outlet install + GFCI breaker install. State licensing varies. Permit required for new circuit install in most jurisdictions; inspection typically within 30 days of permit pull. Hotel coordinates contractor + permit; operator coordinates placement + load spec. Modern hotel-experienced operators provide electrical spec sheet at proposal stage; legacy operators may not." },
    ],
  }),
  timeline({
    heading: "Hotel vending electrical installation timeline",
    sub: "Typical timeline from operator placement spec through contractor install + inspection to machine install.",
    howToName: "Electrical install sequence",
    totalTime: "2-4 weeks typical",
    steps: [
      { label: "Week 1", title: "Operator placement spec + load assessment", description: "Operator account team provides placement spec (zone, equipment type, continuous load amps, circuit + outlet + GFCI requirements). Hotel facilities engineering reviews against existing electrical infrastructure (panel capacity, alcove wiring, GFCI status, chase access). Identifies gaps requiring contractor install." },
      { label: "Week 1-2", title: "Licensed electrical contractor engagement", description: "Hotel engages licensed electrical contractor (state licensing varies). Contractor reviews placement spec + existing infrastructure + permit requirements. Quote provided ($0-400 standard interior, $500-1,500 water-adjacent, $1,000-2,500 outdoor, $300-800 AI cooler). Contractor pulls permit from local jurisdiction." },
      { label: "Week 2-3", title: "Circuit + outlet + GFCI install", description: "Contractor runs dedicated circuit from panel to placement zone. Installs breaker (15A or 20A per spec), conduit-protected wiring where required, outlet (NEMA 5-15R or 5-20R, WR-rated outdoors), GFCI breaker + outlet at water-adjacent + outdoor zones, in-use weatherproof cover at outdoor. Tests circuit + GFCI per code." },
      { label: "Week 3", title: "Inspection + permit close-out", description: "Local jurisdiction inspector reviews install; verifies code compliance (NEC + state + local). Issues permit close-out. Hotel facilities engineering signs off on install. Contractor delivers final documentation (circuit map, breaker assignment, GFCI test record). Inspection typically within 30 days of permit pull." },
      { label: "Week 3-4", title: "Operator machine install + commissioning", description: "Operator delivers + positions machine at placement zone. Connects to dedicated outlet. Commissions telemetry + payment + cold-chain. Tests under load. Validates electrical baseline (continuous load matches spec; no breaker trip under continuous + peak load). Issues install completion record to hotel." },
    ],
  }),
  tipCards({
    heading: "Eight hotel vending electrical patterns",
    sub: "Each pattern appears at modern hotel-experienced operator electrical coordination. Build into operator service contract + facilities engineering coordination.",
    items: [
      { title: "Operator-supplied electrical spec sheet at proposal", body: "Modern hotel-experienced operators provide electrical spec sheet at proposal stage: placement zone, equipment type, continuous load amps, circuit + outlet + GFCI requirements. Legacy operators may not provide. Hotel facilities engineering reviews against existing infrastructure before contract signing. Identifies gaps + cost before commitment." },
      { title: "GFCI at water-adjacent zones — non-negotiable", body: "NEC Article 422.5 + 210.8 require GFCI at water-adjacent placements (pool deck, fitness near pool, ice machine alcove, near sinks). 20A circuit recommended. In-use weatherproof cover even at indoor water-adjacent locations. Install cost $500-1,500 depending on existing wiring. Don't skip — code citation + insurance + safety implications." },
      { title: "Outdoor placements — full weatherproof infrastructure", body: "Outdoor-rated equipment (NEMA 3R or 4) + GFCI + WR outlet + in-use weatherproof cover + conduit-protected wiring + lightning protection at exposed sites. Install cost $1,000-2,500. Verify equipment model NEMA rating in operator spec; reject indoor-rated equipment at outdoor placements. Modern hotel-experienced operators carry outdoor-rated inventory; legacy operators may not." },
      { title: "AI cooler placements — 20A dedicated + UPS at premium urban", body: "AI vending coolers exceed 15A circuit threshold (continuous load 10-15 amps). Dedicated 120V/20A circuit required. UPS battery backup recommended at premium urban placements (minimum 30-min for graceful shutdown + telemetry alarm on utility interruption). Lightning protection at exposed sites. Modern hotel-experienced operators support spec; legacy operators may not." },
      { title: "State + local code overlay review", body: "Review state + local code overlays before placement: California Title 24, NYC LL97 + LL157, Florida Building Code coastal + hurricane, FEMA flood-zone, state-specific GFCI enhancements. Coordinate with property compliance counsel + facilities engineering + structural engineer at exposed properties. Cost premium $200-2,000 above standard at enhanced-code locations." },
      { title: "Licensed contractor + permit coordination", body: "Licensed electrical contractor required for circuit install + outlet install + GFCI breaker install. State licensing varies. Permit required for new circuit install in most jurisdictions; inspection within 30 days of permit pull. Hotel coordinates; operator coordinates placement + load spec. Build coordination process into operator service contract." },
      { title: "Panel capacity assessment at multi-machine deployments", body: "Multi-machine deployments (6-12 machines at mid-size hotel) consume meaningful electrical capacity (60-120 amps total continuous load across all placements). Verify panel capacity at hotel facilities engineering before contract signing. Sub-panel install may be required at older properties with limited capacity ($2-8K depending on scope). Coordinate with property facilities engineering early." },
      { title: "Documentation retention — circuit map + breaker assignment", body: "Retain circuit map, breaker assignment, GFCI test records, permit close-out documentation, contractor warranty for all vending electrical installs. Hotel facilities engineering central file. 5+ year retention; longer in some jurisdictions. Important for future operator transitions + equipment refresh + code-update remediation." },
    ],
  }),
  decisionTree({
    heading: "Do we need enhanced electrical infrastructure or standard interior baseline?",
    question: "Are any of your planned vending placements in water-adjacent zones (pool deck, fitness near pool, ice alcove, near sinks), outdoor zones (pool deck open-air, outdoor lounge), or premium amenity zones (AI vending cooler at lobby/executive lounge)?",
    yesBranch: {
      title: "Enhanced electrical infrastructure required.",
      description: "Water-adjacent zones require GFCI + 20A circuit + in-use weatherproof cover + conduit ($500-1,500 install). Outdoor zones require NEMA 3R/4 equipment + GFCI + WR outlet + in-use cover + conduit + lightning protection ($1,000-2,500 install). AI cooler placements require 20A dedicated + UPS backup at premium urban ($300-800 install). Coordinate licensed electrical contractor + permit + inspection. Operator-supplied electrical spec sheet required at proposal stage.",
      finalTone: "go",
      finalLabel: "ENHANCED · CODE-OVERLAY",
    },
    noBranch: {
      title: "Standard interior baseline acceptable.",
      description: "All-interior placements (lobby alcove, corridor, fitness interior, conference center, business center) without water-adjacency or outdoor exposure: dedicated 120V/15A circuit on own breaker + NEMA 5-15R outlet within 6 feet. No GFCI required. Continuous load 4-8 amps. Existing electrical alcoves often have wiring already; install cost $0-400 typical. Standard contractor engagement; modest permit + inspection.",
      finalTone: "stop",
      finalLabel: "STANDARD · INTERIOR",
    },
  }),
  keyTakeaways({
    heading: "Hotel vending electrical — what to plan for",
    takeaways: [
      { text: "Baseline: dedicated 120V/15A or 20A circuit per machine on own breaker; outlet within 6 feet of placement." },
      { text: "Four placement zones with distinct overlays: standard interior + water-adjacent + outdoor + AI cooler." },
      { text: "Water-adjacent zones require GFCI per NEC 422.5 + 210.8; 20A circuit + in-use weatherproof cover recommended." },
      { text: "Outdoor zones require NEMA 3R/4 equipment + GFCI + WR outlet + in-use cover + conduit + lightning protection." },
      { text: "AI cooler placements require 20A dedicated (continuous load 10-15 amps); UPS backup recommended at premium urban." },
      { text: "State + local code overlays apply: CA Title 24, NYC LL97/LL157, FL coastal/hurricane, FEMA flood zones." },
      { text: "Hotel responsible for electrical infrastructure on standard operator-funded contracts; cost $0-2,500 per machine by zone." },
      { text: "Licensed electrical contractor + permit + inspection; 2-4 week timeline from placement spec to machine install." },
    ],
  }),
  inlineCta({
    text: "Want the hotel vending electrical framework (4-zone requirements + code overlays + contractor coordination)?",
    buttonLabel: "Get the electrical framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac advises hotel clients on vending electrical infrastructure — placement-zone-specific requirements, NEC + state code overlays, GFCI at water-adjacent zones, outdoor-rated equipment + weatherproof infrastructure, AI cooler 20A dedicated circuits, UPS battery backup at premium urban placements, licensed contractor coordination, permit + inspection workflow. The electrical benchmarks reflect modern hotel-experienced operator practice and hotel facilities engineering feedback patterns from limited-service, full-service, and luxury / upscale programs.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What electrical does hotel vending need?", answer: "Baseline: dedicated 120V/15A or 20A circuit per machine on its own breaker, with NEMA 5-15R (15A) or NEMA 5-20R (20A) outlet within 6 feet of placement. Continuous load 4-8 amps for combo + beverage cooler; 10-15 amps for AI cooler (requires 20A circuit). Four placement zones with distinct overlays: standard interior + water-adjacent + outdoor + AI cooler. Hotel responsible under standard operator-funded contracts.", audience: "Facilities Engineering" },
      { question: "When is GFCI required?", answer: "GFCI required per NEC Article 422.5 + 210.8 at water-adjacent placements (pool deck, fitness center near pool, ice machine alcove, near sinks or laundry). 20A circuit recommended. In-use weatherproof cover recommended even at indoor water-adjacent locations (humidity + condensation considerations). Install cost $500-1,500 above standard interior. Non-negotiable — code citation + insurance + safety implications.", audience: "Compliance Leads" },
      { question: "What do outdoor placements require?", answer: "Outdoor-rated equipment (NEMA 3R or 4 enclosure — verify model spec) + GFCI protection + NEMA 5-15R/5-20R outlet WR-rated (weather-resistant) + in-use weatherproof cover + conduit-protected wiring + lightning protection at exposed sites. Install cost $1,000-2,500. Florida coastal + hurricane-prone regions impose additional state code overlays. Modern hotel-experienced operators carry outdoor-rated inventory; verify spec.", audience: "Facilities Engineering" },
      { question: "What about AI vending coolers?", answer: "AI vending coolers exceed 15A circuit threshold (continuous load 10-15 amps with refrigeration + telemetry + payment + LED interior + display screen). Dedicated 120V/20A circuit required. NEMA 5-20R outlet within 6 feet. UPS battery backup recommended at premium urban placements where utility interruption affects guest experience (minimum 30-min backup for graceful shutdown + telemetry alarm). Lightning protection at exposed sites.", audience: "Operations" },
      { question: "Who pays for the electrical install?", answer: "Hotel responsible for electrical infrastructure on standard operator-funded contracts. Cost $0-400 for standard interior (existing alcoves often wired); $500-1,500 for water-adjacent (GFCI + 20A); $1,000-2,500 for outdoor (NEMA 3R/4 + WR + conduit + lightning); $300-800 for AI cooler (20A dedicated). Operator coordinates placement + load spec; hotel's electrical contractor installs to code.", audience: "Finance" },
      { question: "What about state + local code overlays?", answer: "California Title 24 imposes equipment efficiency + enhanced GFCI requirements. NYC LL97 (building emissions caps) + LL157 (gas detector + electrical safety). Florida Building Code coastal + hurricane-rated outlets + lightning protection. FEMA flood-zone considerations (outlets above flood elevation, conduit protection). State-specific GFCI enhancements vary. Coordinate with property compliance counsel + facilities engineering at enhanced-code properties.", audience: "Compliance Leads" },
      { question: "What's the install timeline?", answer: "2-4 weeks typical from operator placement spec through contractor install + inspection to machine install. Week 1: operator spec + load assessment + contractor engagement. Week 1-2: contractor quote + permit pull. Week 2-3: circuit + outlet + GFCI install. Week 3: inspection + permit close-out. Week 3-4: operator machine install + commissioning. Coordinate with operator deployment schedule.", audience: "Project Managers" },
      { question: "Do we need a panel capacity assessment?", answer: "Multi-machine deployments (6-12 machines at mid-size hotel) consume meaningful electrical capacity (60-120 amps total continuous load across all placements). Verify panel capacity at hotel facilities engineering before contract signing. Sub-panel install may be required at older properties with limited capacity ($2-8K depending on scope). Coordinate with property facilities engineering early in placement planning.", audience: "Facilities Engineering" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NFPA 70 — National Electrical Code (NEC)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal baseline electrical code covering GFCI Article 210.8 + 422.5 + dedicated circuit requirements" },
      { label: "OSHA — 29 CFR 1910 Subpart S electrical standards", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910SubpartS", note: "Federal workplace electrical safety standards applicable at vending placement" },
      { label: "California Department of General Services — Title 24 Building Energy Efficiency", url: "https://www.dgs.ca.gov/", note: "California enhanced electrical + energy efficiency framework applicable at CA hotels" },
      { label: "Florida Department of Business and Professional Regulation — Florida Building Code", url: "http://www.floridabuilding.org/", note: "Florida coastal + hurricane-rated electrical requirements applicable at coastal hotels" },
      { label: "AHLA — American Hotel & Lodging Association engineering resources", url: "https://www.ahla.com/", note: "Industry trade association covering hotel engineering + electrical infrastructure standards" },
    ],
  }),
  relatedGuides({
    heading: "Related hotel vending guides",
    items: [
      { eyebrow: "Hub", title: "All hotel vending guides", description: "Equipment, placement, planogram, cold-chain, payment, brand-finish, and operator capability at hotels.", href: "/vending-for-hotels" },
      { eyebrow: "Cost", title: "Cost of vending services for hotels", description: "Operator-funded vs hybrid contract economics, commission tiers, PMS integration costs.", href: "/vending-for-hotels/cost-of-vending-services-for-hotels" },
      { eyebrow: "Compliance", title: "Accessibility hotel vending machines", description: "ADA Title III equipment + placement compliance; FHA overlay at extended-stay; state framework enhancements.", href: "/vending-for-hotels/accessibility-hotel-vending-machines" },
    ],
  }),
]);
process.exit(0);
