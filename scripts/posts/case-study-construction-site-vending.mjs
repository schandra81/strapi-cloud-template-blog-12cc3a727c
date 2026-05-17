import { seedPost, tldr, caseStudy, statStrip, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("case-study-construction-site-vending", [
  tldr({
    heading: "How does a structured construction site vending program perform vs ad-hoc placement?",
    paragraph:
      "A multi-phase commercial construction site (450K sq ft mixed-use, 24-month timeline, peak crew 180 workers, 3 active phases) deployed a structured vending program after 9 months of ad-hoc placement underperformance. Approach: 3 outdoor-rated combo machines + 1 outdoor-rated cold beverage machine + 1 coffee unit at gate-adjacent + trailer-adjacent + restroom-adjacent placements (high security oversight zones), cellular telemetry across all units, anti-tipping anchoring to concrete pads, payroll-card payment integration for sub-contractor crews, allergen-restricted formats covering crew dietary diversity (15% of planogram), early-morning service routes (4-6 AM) aligned with shift start, weather-protected canopy installation. Results: $42K cumulative gross revenue over remaining 15 months (vs projected $14K under prior ad-hoc), $7K GC commission revenue, productivity uplift (crew reports reduced off-site lunch trips), 0.6% theft rate (vs 3-5% under ad-hoc), zero anchoring-related incidents during equipment movements. The case reflects construction-site best practice — outdoor-rated equipment, gate / trailer / restroom placement, cellular telemetry, payroll-card payment, allergen-restricted formats, anchoring + security stack.",
    bullets: [
      { emphasis: "$42K cumulative revenue over 15 months (vs $14K ad-hoc):", text: "3× revenue lift with structured program. Gate / trailer / restroom placement + outdoor-rated equipment + payroll-card payment drove uplift." },
      { emphasis: "0.6% theft rate (vs 3-5% ad-hoc):", text: "Outdoor-rated chassis + anti-tipping anchoring + cellular telemetry + gate-adjacent oversight drove theft rate well below ad-hoc baseline." },
      { emphasis: "Productivity uplift on crew lunch trips:", text: "Crew reports reduced off-site lunch trips after vending program rollout. GC validates productivity benefit; supports business case for vending program retention at future projects." },
    ],
  }),
  statStrip({
    heading: "Construction site vending benchmarks",
    stats: [
      { number: "$42K", label: "cumulative gross revenue", sub: "15 months structured vs $14K ad-hoc", accent: "blue" },
      { number: "0.6%", label: "theft rate", sub: "vs 3-5% under ad-hoc placement", accent: "blue" },
      { number: "5 units", label: "deployed", sub: "3 combo + 1 cold beverage + 1 coffee", accent: "blue" },
      { number: "15%", label: "allergen-restricted planogram share", sub: "Crew dietary diversity covered", accent: "blue" },
    ],
  }),
  caseStudy({
    tag: "Construction site vending success",
    title: "Mixed-use commercial site — structured program produces 3× revenue + sub-1% theft over 15 months",
    context: "450K sq ft mixed-use commercial construction site, 24-month total timeline. Peak crew 180 workers across 3 active phases (foundation / structure / finish). Pre-implementation (months 1-9): ad-hoc vending placement — 2 standard indoor machines deployed outdoors without weather protection, no anti-tipping anchoring, placed at back-of-site low-visibility zones, no telemetry, frequent stockouts, theft + vandalism at 3-5% of revenue. GC initiated structured operator transition at month 9; 15-month structured program followed.",
    meta: [
      { label: "Project scope", value: "450K sq ft mixed-use commercial, 24-month timeline, peak crew 180" },
      { label: "Pre-implementation baseline", value: "Ad-hoc placement, $14K projected revenue, 3-5% theft rate, frequent stockouts" },
      { label: "Structured program scope", value: "5 outdoor-rated units (3 combo + 1 cold beverage + 1 coffee) at gate / trailer / restroom placements" },
      { label: "Structured capability stack", value: "Cellular telemetry, anti-tipping anchoring, payroll-card payment, allergen-restricted formats, early-morning service routes, weather-protected canopies" },
    ],
    results: [
      { metric: "$42K", description: "Cumulative gross revenue over 15 months of structured program (vs $14K projected under ad-hoc continuation). 3× revenue lift." },
      { metric: "$7K", description: "GC commission revenue at 15% tiered commission structure. Offsets crew-amenity cost line in project budget." },
      { metric: "0.6%", description: "Theft rate under structured program (vs 3-5% ad-hoc). Outdoor-rated chassis + anti-tipping + cellular telemetry + gate-adjacent oversight drove improvement." },
      { metric: "0", description: "Anchoring-related incidents during equipment movements over 15 months. Anti-tipping bolts to concrete pads + placement away from heavy-equipment paths prevented tip-over events." },
      { metric: "15%", description: "Allergen-restricted planogram share. Covers gluten-free, nut-free, vegan, lactose-free SKUs for crew dietary diversity. FDA top 9 allergens labeled." },
      { metric: "Reduced off-site lunch trips", description: "Crew survey reports reduced off-site lunch trips after program rollout. GC validates productivity benefit; supports business case for vending retention at future projects." },
    ],
  }),
  specList({
    heading: "Construction site vending program specifications",
    items: [
      { label: "Outdoor-rated equipment standard", value: "All 5 units outdoor-rated — reinforced chassis, laminated glass, anti-pry door construction, IP-rated electronics, temperature-rated to -10°F / 110°F operating range. Standard indoor machines deployed outdoors lack these features and produce theft / vandalism / weather damage." },
      { label: "Placement strategy — security oversight zones", value: "Gate-adjacent (visible to site security check-in), trailer-adjacent (continuous foot traffic from site office), restroom-adjacent (continuous foot traffic from crew break periods). Avoid: back-of-site unmonitored zones, materials yard, equipment laydown areas. Security oversight zones produce 5-10× lower theft / vandalism rates." },
      { label: "Anti-tipping anchoring", value: "All units bolted to concrete pads (8\" thick, 4 anchor bolts per machine). Pad pre-poured during site setup; coordinated with site engineer at install. Prevents tip-over from heavy equipment traffic (forklifts, deliveries) and theft attempts. Standard at construction-site placements." },
      { label: "Cellular telemetry on all units", value: "100% telemetry coverage via cellular (Cantaloupe / Nayax / USConnect or similar). Real-time data — revenue, transactions, stockouts, service tickets, door-open events. Anomaly detection flags unexpected access (theft signal), payment hardware tampering, refrigeration failures. No site Wi-Fi dependence." },
      { label: "Payroll-card payment integration", value: "Modern payment stack — EMV + contactless + mobile-wallet (Apple Pay, Google Pay) + payroll-card integration for sub-contractor crews. Some sub-contractors use payroll cards from PaySchools, Branch, others; integration with payment platform reduces cash collection while supporting unbanked crew members." },
      { label: "Allergen-restricted formats", value: "15% of planogram tagged gluten-free, nut-free, vegan, lactose-free. Covers crew dietary diversity. FDA top 9 allergens labeled per regulation. Operator dashboard tracks allergen-restricted SKU performance separately; refresh based on demand." },
      { label: "Service route timing — early morning", value: "Service routes 4-6 AM to align with crew shift start (typically 6-7 AM). Restocks before peak demand. Coordinates with site gate access (typically restricted hours). Avoids equipment-movement disruption during active construction. Reduces service-SLA risk." },
      { label: "Weather protection", value: "Canopy installation over each outdoor unit. Reduces direct sun exposure (extends equipment life + reduces refrigeration load), reduces rain exposure (reduces electrical exposure + payment hardware degradation), reduces snow / ice accumulation. Coordinated with site canopy spec at install." },
      { label: "Operator coordination at install + ongoing", value: "Pre-install coordination with GC + site safety officer on placement zones, electrical, anchoring, security protocol, after-hours access. Quarterly business review during active construction phases. Operator + GC + crew feedback loop on planogram + service quality." },
    ],
  }),
  tipCards({
    heading: "Five construction site vending success patterns",
    sub: "Each is reflected in the case study and represents construction-site best practice.",
    items: [
      { title: "Outdoor-rated equipment, not retrofit indoor", body: "Standard indoor machines deployed outdoors lack reinforced chassis, laminated glass, weather protection, anti-pry construction. Theft / vandalism / weather damage substantially higher. Outdoor-rated equipment is the standard at construction sites; capital premium 15-30% but operational economics favor at exposed placements." },
      { title: "Gate / trailer / restroom placement strategy", body: "Security oversight zones produce 5-10× lower theft / vandalism than back-of-site placements. Concentrate at gate-adjacent (visible to security), trailer-adjacent (continuous oversight), restroom-adjacent (continuous foot traffic). Avoid materials yard, equipment laydown, back-of-site unmonitored zones." },
      { title: "Cellular telemetry + anomaly detection", body: "Construction sites lack site Wi-Fi typically. Cellular telemetry provides real-time data + anomaly detection (theft, tampering, refrigeration failures). 100% coverage modern standard. Drives proactive service + security response. Legacy operators without telemetry produce 30-50% lower revenue at same placements." },
      { title: "Payroll-card payment for sub-contractor crews", body: "Sub-contractor crews often use payroll cards (PaySchools, Branch, similar) instead of traditional bank cards. Payment platform integration supports unbanked crew members + reduces cash collection. Cash collection on construction sites carries security overhead; cashless preferred." },
      { title: "Early-morning service route timing", body: "4-6 AM service routes align with crew shift start (6-7 AM). Restocks before peak demand. Coordinates with restricted gate access hours. Avoids equipment-movement disruption during active construction. Reduces service-SLA risk. Construction-specialty operators have this natively." },
    ],
  }),
  inlineCta({
    text: "Want the construction site vending program framework (outdoor equipment + placement + telemetry + payment + anchoring)?",
    buttonLabel: "Get the construction site framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported construction site vending program design across commercial, residential, and industrial projects — including outdoor-rated equipment specification, security-oversight placement, anti-tipping anchoring, cellular telemetry deployment, and payroll-card payment integration. The case study benchmarks reflect operator-side data and GC + site safety officer feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does a successful construction site vending program look like?", answer: "Outdoor-rated equipment (5-unit typical for 150+ crew site), placement at gate / trailer / restroom (security oversight zones), cellular telemetry across all units, anti-tipping anchoring to concrete pads, payroll-card payment integration, allergen-restricted formats, early-morning service routes, weather protection. Structured programs produce 3× revenue + sub-1% theft vs ad-hoc placement.", audience: "GCs" },
      { question: "How much revenue should a construction site vending program produce?", answer: "Varies by crew size + project length + program quality. Mid-size site (150-200 crew, 18-24 months): $30-50K cumulative revenue over project life typical at structured program. Per-unit per-month: $1-4K at active phases. Ad-hoc placement produces 30-50% of structured-program revenue.", audience: "GCs" },
      { question: "Where should we place vending on the site?", answer: "Gate-adjacent (visible to site security check-in), trailer-adjacent (continuous foot traffic from site office), restroom-adjacent (continuous foot traffic from crew break periods). Avoid: back-of-site unmonitored zones, materials yard, equipment laydown areas. Security oversight zones produce 5-10× lower theft / vandalism rates.", audience: "Site Managers" },
      { question: "Should we use outdoor-rated or standard equipment?", answer: "Outdoor-rated at construction sites. Standard indoor machines deployed outdoors lack reinforced chassis, laminated glass, weather protection, anti-pry construction. Theft / vandalism / weather damage substantially higher. Outdoor-rated capital premium 15-30% but operational economics favor at exposed placements.", audience: "Operators" },
      { question: "What about theft and vandalism?", answer: "0.5-2% theft rate typical at structured programs (vs 3-5% under ad-hoc). Outdoor-rated chassis + anti-tipping anchoring + cellular telemetry + security-oversight placement drive improvement. Concentrate placements at gate / trailer / restroom zones. Back-of-site unmonitored placements have 5-10× higher theft / vandalism rates.", audience: "Site Safety Officers" },
      { question: "How does payment work?", answer: "Modern payment stack — EMV + contactless + mobile-wallet (Apple Pay, Google Pay) + payroll-card integration for sub-contractor crews. Most modern construction sites lean cashless to reduce collection security concerns. Some operators integrate payroll cards (PaySchools, Branch, others) for unbanked crew members.", audience: "Operators" },
      { question: "When should service routes run?", answer: "Early morning (4-6 AM) to align with crew shift start (6-7 AM). Restocks before peak demand. Coordinates with restricted gate access hours. Avoids equipment-movement disruption during active construction. Reduces service-SLA risk. Construction-specialty operators have this routing natively.", audience: "Operators" },
      { question: "How does the program transition between phases?", answer: "Multi-phase construction sites have varying crew counts across foundation / structure / finish phases. Operator + GC review program quarterly during active construction. Add / remove units as crew counts change. Refresh planogram for phase-specific crew composition. Decommission at project close; relocate equipment to next project.", audience: "GCs" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AGC — Associated General Contractors of America", url: "https://www.agc.org/", note: "Industry trade association covering construction-site amenity programs" },
      { label: "OSHA — workplace safety + amenity standards", url: "https://www.osha.gov/", note: "Federal workplace safety governing construction-site amenities" },
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing outdoor construction electrical" },
      { label: "FDA — vending machine labeling requirements", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/vending-machine-labeling-requirements", note: "Federal labeling compliance applicable to construction site vending" },
      { label: "NAMA — construction and outdoor vending practice", url: "https://www.namanow.org/", note: "Industry guidance on construction-site vending operations" },
    ],
  }),
  relatedGuides({
    heading: "Related construction site vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Security for construction site vending", description: "Reinforced chassis, anti-tipping, cellular telemetry, and CCTV coordination.", href: "/vending-for-construction-sites/security-for-construction-site-vending" },
      { eyebrow: "Operations", title: "Placement of vending on construction sites", description: "Gate / trailer / restroom placement zones, electrical, phase relocation.", href: "/vending-for-construction-sites/placement-of-vending-on-construction-sites" },
      { eyebrow: "Hub", title: "All construction-site vending guides", description: "Equipment, planogram, security, placement, payment, and operations for construction and industrial placements.", href: "/vending-for-construction-sites" },
    ],
  }),
]);
process.exit(0);
