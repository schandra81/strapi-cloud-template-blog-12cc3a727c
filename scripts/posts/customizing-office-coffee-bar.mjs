import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, dimensionDiagram, costBreakdown, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("customizing-office-coffee-bar", [
  tldr({
    heading: "How should offices design + customize a coffee bar that fits headcount, culture, equipment mix, and physical-space constraints?",
    paragraph:
      "Customizing an office coffee bar is a multi-dimensional design problem — not a single equipment-selection decision. The structural variables: (1) headcount + utilization — small office (10-40 people, 60-120 cups/day), mid-size (40-150 people, 200-400 cups/day), large (150-500+ people, 500-1500+ cups/day); (2) physical-space allocation — counter length (typically 6-15 linear feet for mid-size coffee bar, 12-25 feet for large), depth (24-30 inches for coffee bar + work surface), backsplash + cabinetry, plumbing + drainage, electrical (dedicated 20A circuits for espresso + commercial grinders), water filtration (mandatory for espresso + bean-to-cup quality); (3) equipment mix — drip + Keurig + bean-to-cup + espresso + cold brew kegerator + pour-over + specialty tea + matcha + kombucha + water dispenser — variety scales with headcount and culture; (4) workflow design — entry / queue / order / payment / pickup / cream-and-sugar / disposal flow paths; (5) culture + branding — premium positioning, sustainability narrative, branded cups + signage, art + lighting. Three customization approaches: (A) modular off-the-shelf coffee station — fits 10-60 people offices, $2-8K capital, prebuilt cabinetry + countertop + standard equipment slots, 2-4 week deployment; (B) custom millwork coffee bar — fits 40-300 people offices, $15-50K capital + cabinetry + plumbing + electrical work, 6-12 week deployment, full design control; (C) architectural-integrated coffee bar — fits 200-1000+ people offices, $50-200K+ capital with architect / interior designer involvement, custom millwork + integrated water + drainage + ventilation + lighting + brand-integrated finishes, 12-24 week deployment with construction coordination. Customization decisions are most often constrained by physical space (counter length, depth, plumbing access) and budget. Equipment mix should follow headcount + culture rather than aspirational positioning. Coffee bar quality directly impacts employee satisfaction + retention + recruiting.",
    bullets: [
      { emphasis: "Customization is multi-dimensional — headcount / space / equipment / workflow / culture:",
        text: "Not single equipment-selection decision. Three customization approaches: modular off-the-shelf, custom millwork, architectural-integrated. Match to office scale + budget + positioning." },
      { emphasis: "Physical-space allocation drives constraint set:",
        text: "Counter length (6-25 linear feet), depth (24-30 inches), plumbing + drainage, electrical (dedicated 20A circuits), water filtration. Coordinate with facilities + landlord at design phase." },
      { emphasis: "Equipment mix should follow headcount + culture:",
        text: "Not aspirational positioning. Small office bean-to-cup + Keurig variety; mid-size add cold brew kegerator + specialty tea; large add premium espresso + pour-over + barista occasional." },
    ],
  }),
  statStrip({
    heading: "Office coffee bar customization benchmarks",
    stats: [
      { number: "$2-200K", label: "capital range", sub: "modular to architectural-integrated", accent: "blue" },
      { number: "6-25 ft", label: "counter length range", sub: "scales with headcount + variety", accent: "blue" },
      { number: "60-1500", label: "cups per day", sub: "across small to large offices", accent: "blue" },
      { number: "2-24 weeks", label: "deployment timeline", sub: "modular to architectural-integrated", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Three coffee bar customization approaches",
    sub: "Match approach to office scale, budget, and positioning. Equipment mix and physical-space allocation drive feasibility within each approach.",
    headers: ["Approach", "Office scale fit", "Capital", "Deployment", "Customization scope"],
    rows: [
      ["(A) Modular off-the-shelf coffee station", "10-60 people", "$2-8K", "2-4 weeks", "Standard equipment slots, limited cabinetry choices"],
      ["(B) Custom millwork coffee bar", "40-300 people", "$15-50K", "6-12 weeks", "Custom cabinetry + countertop, equipment mix flexibility, plumbing + electrical coordination"],
      ["(C) Architectural-integrated coffee bar", "200-1000+ people", "$50-200K+", "12-24 weeks", "Architect / interior designer involvement, brand-integrated finishes, integrated water + drainage + ventilation"],
      ["Mobile / pop-up coffee bar (event + flex space)", "Variable (event-driven)", "$3-15K", "1-2 weeks", "Mobile bar cart + standard equipment, no permanent build-out"],
    ],
  }),
  dimensionDiagram({
    heading: "Mid-size custom millwork coffee bar dimensions",
    sub: "Typical layout for a 100-200 person office coffee bar (Approach B). Dimensions assume 12-foot counter with bean-to-cup + cold brew kegerator + Keurig variety + specialty tea station. Adjust for specific equipment selection.",
    machineName: "12-foot custom millwork coffee bar",
    width: "12 ft (144 in)",
    depth: "30 in (work surface)",
    height: "36 in (counter) + 18 in upper cabinetry",
    footprint: "30 sq ft floor",
    weightEmpty: "Cabinetry + countertop ~600 lb",
    weightLoaded: "With equipment ~1,400 lb",
    doorwayClearance: "32 in minimum for delivery of bean-to-cup machine",
    note: "Plumbing drop required at left third (espresso + ice + water dispenser). Drainage to floor or wall stub. Dedicated 20A circuit per espresso / bean-to-cup machine. Water filtration system at supply line. Coordinate with facilities + plumber + electrician at design phase.",
  }),
  specList({
    heading: "Custom coffee bar specifications by element",
    items: [
      { label: "Counter length + depth + height", value: "Counter length scales with headcount + equipment mix: small office 6-9 linear feet, mid-size 10-15 feet, large 15-25 feet. Depth 24-30 inches (work surface accommodates equipment + service + cream-and-sugar). Counter height 36 inches (ADA compliance + workflow ergonomics). Some custom bars include lower service shelf at 28 inches for ADA accessibility." },
      { label: "Countertop material selection", value: "Material options: quartz (Caesarstone, Silestone — durable, stain-resistant, mid-tier capital $40-80 per square foot installed), granite or marble (premium positioning, $60-150 per square foot, requires periodic sealing), stainless steel (commercial-grade durability, hygienic, $50-100 per square foot), reclaimed wood + epoxy resin (sustainability narrative, $40-80 per square foot, requires sealing). Match to office aesthetic + sustainability positioning + maintenance tolerance." },
      { label: "Cabinetry + storage design", value: "Lower cabinetry for cup + lid + supply storage + trash bin integration. Upper cabinetry for less-frequent supplies (filter paper, machine cleaning supplies, signage backstock). Pull-out trash + recycling + compost bin integration mandatory (especially with sustainability positioning). Pull-out work shelf for K-Cup variety display. Custom cabinetry adds $80-200 per linear foot vs prefab." },
      { label: "Plumbing + drainage + water filtration", value: "Plumbing drop at espresso + bean-to-cup + ice + water dispenser locations. Drainage to floor stub or wall stub; coordinate with facilities + landlord. Water filtration system (Pentair Everpure 4FC-S, 3M HF65, BUNN Easy Clear) mandatory for espresso + bean-to-cup quality + equipment longevity. Filtration cartridge replacement quarterly. Backflow prevention per local plumbing code." },
      { label: "Electrical + dedicated circuits", value: "Dedicated 20A circuits per espresso / bean-to-cup machine (premium commercial draws 1.5-3.5 kW peak). Dedicated 15-20A circuit per Keurig commercial. Dedicated circuit per kegerator. GFCI protection at countertop receptacles per NEC code. Surge protection for sensitive electronics. Coordinate with electrician + landlord at design phase; some buildings require additional service upgrades." },
      { label: "Ventilation + steam + heat management", value: "Commercial espresso + bean-to-cup machines vent steam + heat — minor at prosumer scale, more significant at commercial scale. Ventilation hood not typically required at office coffee bar (espresso steam differs from cooking smoke), but air circulation should accommodate steam dispersion. Some architectural-integrated bars include subtle ventilation behind cabinetry for steam clearance + heat management." },
      { label: "Equipment mix selection", value: "Equipment mix follows headcount + culture: small office — bean-to-cup (Saeco, Jura) + Keurig variety + drip + water dispenser ($5-12K equipment); mid-size — add cold brew kegerator + specialty tea + matcha + kombucha + improved bean-to-cup ($15-30K); large — premium espresso (Synesso, Slayer, La Marzocco) + cold brew kegerator + pour-over station + Keurig variety + specialty tea + occasional barista ($35-80K equipment). Match to scale + culture, not aspirational positioning." },
      { label: "Workflow design — entry to disposal flow", value: "Entry / queue / order / payment / pickup / cream-and-sugar / disposal flow paths. Avoid crossing flows (drinkers picking up cross paths with drinkers ordering). Trash + recycling + compost at end-of-flow + visible. Some custom bars include digital menu display + signage for variety visibility. Coordinate with interior designer + workflow analysis at design phase." },
      { label: "Brand + culture + lighting integration", value: "Brand-integrated finishes — company colors, logo signage, art + photography aligned with brand. Pendant lighting over counter (typically 3 pendants at 12-foot bar, dimmable for daypart variation). Backsplash with branded signage or art. Sustainability narrative signage (composting, single-origin sourcing). Coordinated with interior designer + brand team at architectural-integrated approach." },
      { label: "Sustainability + accessibility considerations", value: "Compostable cups + lids + stirrers (Vegware, World Centric, Eco-Products). Refillable / reusable mug program with company-branded mugs. K-Compostable pods. Recycling + composting + landfill stream separation. ADA accessibility — lower service shelf at 28 inches, reach-range compliance for self-serve equipment, clear floor space for wheelchair maneuver. Coordinate with sustainability + accessibility consultants where applicable." },
    ],
  }),
  costBreakdown({
    heading: "Custom millwork coffee bar (100-200 person office, Approach B)",
    sub: "Typical economics for a mid-size custom millwork coffee bar with bean-to-cup + cold brew kegerator + Keurig variety + specialty tea + custom cabinetry + countertop + plumbing + electrical coordination.",
    items: [
      { label: "Custom millwork cabinetry + countertop (12 linear feet)", amount: "$8,000-18,000", range: "Quartz or granite countertop + custom cabinetry" },
      { label: "Bean-to-cup commercial equipment (Schaerer / Franke / Eversys / Jura)", amount: "$5,000-15,000", range: "Mid-tier commercial bean-to-cup machine" },
      { label: "Cold brew kegerator + nitro tap", amount: "$2,500-5,000", range: "Dual-zone kegerator + nitro CO2 setup" },
      { label: "Keurig commercial brewer + K-Cup variety setup", amount: "$800-2,500", range: "K-2500 / K-3000 + variety K-Cup display" },
      { label: "Specialty tea + matcha + kombucha station", amount: "$500-2,000", range: "Tea selection + matcha equipment + kombucha tap or fridge" },
      { label: "Plumbing + drainage + water filtration", amount: "$1,500-4,500", range: "Plumbing drop + drainage + water filtration system" },
      { label: "Electrical (dedicated circuits + GFCI)", amount: "$1,000-3,500", range: "Dedicated 20A circuits + GFCI + surge protection" },
      { label: "Design + project management + interior designer", amount: "$2,000-8,000", range: "Optional interior designer + project coordination" },
    ],
    totalLabel: "Total capital (custom millwork coffee bar)",
    totalAmount: "$21,300-58,500",
  }),
  decisionTree({
    heading: "Which coffee bar customization approach fits your office?",
    question: "What's your headcount, budget, and positioning? Small office (10-60 people, $2-8K budget) needs modular off-the-shelf. Mid-size (40-300 people, $15-50K budget) suits custom millwork. Large + premium-positioning office (200-1000+ people, $50-200K+ budget) suits architectural-integrated.",
    yesBranch: {
      title: "Custom millwork or architectural-integrated — engage design + facilities at outset",
      description: "Engage interior designer + facilities + landlord + plumber + electrician at design phase. Map physical-space constraints (counter length, depth, plumbing access, electrical service). Equipment mix follows headcount + culture. Workflow design (entry / queue / order / payment / pickup / cream-and-sugar / disposal) avoids crossing flows. Sustainability + accessibility integration. 6-24 week deployment timeline.",
      finalTone: "go",
      finalLabel: "Custom design path",
    },
    noBranch: {
      title: "Modular off-the-shelf — fast deployment + cost discipline",
      description: "Modular off-the-shelf coffee station fits 10-60 people offices at $2-8K capital with 2-4 week deployment. Prebuilt cabinetry + countertop + standard equipment slots. Limited customization but rapid deployment + cost discipline. Equipment mix: bean-to-cup + Keurig variety + drip + water dispenser. Upgrade path to custom millwork when office scale + budget allows.",
      finalTone: "wait",
      finalLabel: "Modular path",
    },
  }),
  tipCards({
    heading: "Five coffee bar customization mistakes",
    sub: "Documented at office facilities + interior designer post-implementation reviews. All preventable with multi-dimensional design framing.",
    items: [
      { title: "Equipment-first design without space + workflow analysis", body: "Selecting equipment before mapping physical-space constraints + workflow design produces equipment that doesn't fit counter length, plumbing access, electrical service, or crossing flow paths. Map space + workflow first; select equipment within physical constraints. Coordinate with facilities + interior designer + plumber + electrician at design phase." },
      { title: "Aspirational equipment mix beyond headcount", body: "Small office (10-40 people) doesn't need premium espresso (Synesso, Slayer, La Marzocco) — equipment utilization low, capital wasted, complexity exceeds operator capability. Match equipment mix to headcount + culture. Small office bean-to-cup + Keurig variety; mid-size add cold brew kegerator + specialty tea; large add premium espresso. Don't aspirational-overspec." },
      { title: "Inadequate electrical + plumbing planning", body: "Premium commercial espresso draws 1.5-3.5 kW peak; bean-to-cup similar. Without dedicated 20A circuits + water filtration + drainage, equipment underperforms + breaks down. Some buildings require service upgrades for additional 20A circuits. Coordinate with electrician + landlord + plumber at design phase; not at install." },
      { title: "No water filtration", body: "Water filtration mandatory for espresso + bean-to-cup quality + equipment longevity. Unfiltered municipal water produces inconsistent taste + scale buildup + premature equipment failure. Pentair Everpure 4FC-S, 3M HF65, BUNN Easy Clear at supply line. Filtration cartridge replacement quarterly. Backflow prevention per local plumbing code." },
      { title: "Sustainability + accessibility as afterthought", body: "Sustainability narrative (compostable cups + lids + stirrers, refillable mug program, single-origin sourcing) and accessibility (ADA lower service shelf, reach-range compliance, wheelchair maneuver clearance) integrated at design phase, not retrofit. Retrofit adds cost + reduces design coherence. Coordinate with sustainability + accessibility consultants at design phase." },
    ],
  }),
  inlineCta({
    text: "Want the office coffee bar customization framework — multi-dimensional design, equipment mix, workflow, sustainability + accessibility integration?",
    buttonLabel: "Get the customization framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help office facilities, interior designers, and operations teams scope coffee bar customization — including modular off-the-shelf coffee station deployment, custom millwork coffee bar design with cabinetry + countertop + plumbing + electrical coordination, and architectural-integrated coffee bar projects with interior designer + brand integration. Capabilities include equipment mix selection across small / mid-size / large office scale, workflow design (entry / queue / order / payment / pickup / cream-and-sugar / disposal), sustainability + accessibility integration. Benchmarks reflect supplier + operator data + interior designer practice.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Which customization approach fits our office?", answer: "10-60 people, $2-8K budget → modular off-the-shelf coffee station (2-4 week deployment). 40-300 people, $15-50K budget → custom millwork coffee bar (6-12 week deployment, cabinetry + countertop + plumbing + electrical coordination). 200-1000+ people, $50-200K+ budget → architectural-integrated coffee bar (12-24 weeks, architect / interior designer involvement, brand-integrated finishes).", audience: "Office Managers / Facilities" },
      { question: "What counter length do we need?", answer: "Small office (10-40 people) 6-9 linear feet; mid-size (40-150) 10-15 feet; large (150-500+) 15-25 feet. Depth 24-30 inches (work surface accommodates equipment + service + cream-and-sugar). Counter height 36 inches (ADA + workflow ergonomics). Some custom bars include lower service shelf at 28 inches for ADA accessibility.", audience: "Facilities / Interior Designers" },
      { question: "What equipment mix should we select?", answer: "Equipment mix follows headcount + culture: small office — bean-to-cup (Saeco, Jura) + Keurig variety + drip + water dispenser ($5-12K equipment); mid-size — add cold brew kegerator + specialty tea + matcha + kombucha + improved bean-to-cup ($15-30K); large — premium espresso (Synesso, Slayer, La Marzocco) + cold brew kegerator + pour-over + Keurig variety + specialty tea + occasional barista ($35-80K equipment).", audience: "Office Managers" },
      { question: "What plumbing + electrical do we need?", answer: "Plumbing drop at espresso + bean-to-cup + ice + water dispenser locations. Drainage to floor or wall stub. Water filtration system mandatory (Pentair Everpure, 3M HF65, BUNN Easy Clear). Dedicated 20A circuits per espresso / bean-to-cup machine. GFCI protection at countertop receptacles. Some buildings require service upgrades. Coordinate with electrician + plumber + landlord at design phase.", audience: "Facilities / Project Managers" },
      { question: "What countertop material is best?", answer: "Quartz (Caesarstone, Silestone) — durable, stain-resistant, mid-tier capital. Granite or marble — premium positioning, requires periodic sealing. Stainless steel — commercial-grade durability, hygienic. Reclaimed wood + epoxy resin — sustainability narrative, requires sealing. Match to aesthetic + sustainability positioning + maintenance tolerance.", audience: "Interior Designers / Office Managers" },
      { question: "How do we handle workflow design?", answer: "Map entry / queue / order / payment / pickup / cream-and-sugar / disposal flow paths. Avoid crossing flows (drinkers picking up cross paths with drinkers ordering). Trash + recycling + compost at end-of-flow + visible. Digital menu display + signage for variety visibility. Coordinate with interior designer + workflow analysis at design phase.", audience: "Interior Designers / Operations" },
      { question: "What about sustainability + accessibility?", answer: "Compostable cups + lids + stirrers (Vegware, World Centric, Eco-Products). Refillable / reusable mug program. K-Compostable pods. Recycling + composting + landfill stream separation. ADA accessibility — lower service shelf at 28 inches, reach-range compliance, clear floor space for wheelchair maneuver. Integrate at design phase, not retrofit.", audience: "Sustainability / Accessibility" },
      { question: "How long does deployment take?", answer: "Modular off-the-shelf: 2-4 weeks. Custom millwork: 6-12 weeks including cabinetry fabrication + plumbing + electrical + equipment install + commissioning. Architectural-integrated: 12-24 weeks with construction coordination + interior designer + brand integration. Match deployment timeline to project + office move-in or renovation schedule.", audience: "Project Managers / Facilities" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SCA — Specialty Coffee Association espresso + brew standards", url: "https://sca.coffee/", note: "Industry trade association covering specialty coffee + espresso + barista standards relevant to office coffee bar design" },
      { label: "NCA — National Coffee Association consumption trends + specialty coffee", url: "https://www.ncausa.org/Industry-Resources/Market-Research", note: "Industry trade association covering coffee consumption data + specialty coffee growth" },
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing office coffee bar dedicated circuits + GFCI protection" },
      { label: "ADA Accessibility Guidelines — countertops + reach ranges", url: "https://www.access-board.gov/ada/", note: "Federal accessibility standards governing coffee bar countertop height + reach range + clear floor space" },
      { label: "NAMA — refreshment service operator practice for office coffee bars", url: "https://www.namanow.org/", note: "Industry guidance on office coffee bar customization including equipment selection and operator service practice" },
    ],
  }),
  relatedGuides({
    heading: "Related office coffee guides",
    items: [
      { eyebrow: "Sister guide", title: "Office coffee for creative agencies", description: "Premium coffee positioning at creative agencies including cold brew, espresso, and specialty drinks.", href: "/blog-category/office-coffee-creative-agencies" },
      { eyebrow: "Operations", title: "Breakroom coffee station ideas", description: "Breakroom design, equipment selection, supply management for office breakroom coffee.", href: "/blog-category/breakroom-coffee-station-ideas" },
      { eyebrow: "Hub", title: "All office coffee guides", description: "Coffee solutions, office amenity, vending integration patterns.", href: "/blog-category" },
    ],
  }),
]);
process.exit(0);
