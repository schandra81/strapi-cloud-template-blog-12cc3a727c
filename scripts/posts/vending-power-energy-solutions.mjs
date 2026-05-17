import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, costBreakdown, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-power-energy-solutions", [
  tldr({
    heading: "How should entertainment venues power and energy-manage vending equipment — and which electrical, efficiency, backup, and outdoor power solutions apply at venue scale?",
    paragraph:
      "Powering vending equipment at entertainment venue scale requires planning across six dimensions beyond simple wall-outlet placement: (1) electrical service capacity — refrigerated vending typically draws 4-8 amps continuous with 12-20 amp peak compressor start; combo vending 3-6 amps continuous; interactive equipment with 32-65 inch touchscreen 5-10 amps continuous; aggregate placement load drives circuit specification (typically 20-amp circuit per 2-3 vending machines or 1-2 interactive machines); (2) ENERGY STAR efficiency — qualified equipment cuts annual electricity 30-50% vs legacy (saving $200-$600 per machine per year at venue duty cycle), LED lighting and motion-sensor activation cut 20-30% on top, smart-cycle compressor management reduces peak-demand load contributing to venue demand-charge optimization; (3) low-GWP natural refrigerant — R-290 propane (GWP 3) and R-744 CO2 (GWP 1) replace high-GWP HFC R-134a (GWP 1430) and R-404A (GWP 3922); eliminates venue HFC refrigerant footprint and supports ESG reporting; (4) outdoor and weather-rated power — IP54-65 rated power connections at outdoor vending placements, GFCI protection per NEC 210.8, weather-rated outlet enclosures with locking covers, conduit and box specification meeting outdoor classification; (5) backup power and event-day continuity — generator backup or UPS at critical placements supporting event-day continuity during outages (event-day outage risk is operationally critical because foot traffic peaks at outage windows are likely), automatic transfer switch (ATS) integration with venue backup power infrastructure; (6) emerging — solar augmentation and battery storage — solar PV with battery storage at outdoor placements supports off-grid or grid-augmented operation at sustainability-priority venues, typical solar PV 200-400W per machine with 2-5 kWh battery providing 12-24 hour off-grid runtime. Cost picture: ENERGY STAR equipment 5-15% capital premium recovers in 2-4 years through energy savings; low-GWP refrigerant 5-10% capital premium; outdoor power specification adds $400-$1,800 per placement at install; backup power and solar augmentation add $1,200-$8,000 per critical placement. Modern venue-experienced operators carry full power and energy planning capability with venue facilities engineering coordination; legacy operators carry default power-tap planning only. This guide covers the six-dimension framework, electrical specification, efficiency and refrigerant standards, outdoor and backup considerations, solar augmentation, and operator capability vetting.",
    bullets: [
      { emphasis: "Six power and energy dimension framework:", text: "Electrical service capacity + ENERGY STAR efficiency + low-GWP refrigerant + outdoor and weather-rated power + backup and event-day continuity + emerging solar augmentation. Modern venue-experienced operator carries full planning capability." },
      { emphasis: "ENERGY STAR + LED + motion-sensor cuts electricity 50-70%:", text: "30-50% from ENERGY STAR + 20-30% from LED and motion-sensor on top. Saves $200-$600 per machine per year. Capital premium 5-15% recovers in 2-4 years. Low-GWP refrigerant eliminates HFC footprint." },
      { emphasis: "Outdoor placements require IP54-65 + GFCI + weather-rated specification:", text: "Per NEC 210.8 outdoor outlet GFCI protection, IP54-65 weather-rated power connections, conduit and box meeting outdoor classification. Add $400-$1,800 per placement at install. Specify at proposal." },
    ],
  }),
  statStrip({
    heading: "Venue vending power and energy benchmarks",
    stats: [
      { number: "4-10A", label: "typical continuous draw", sub: "refrigerated, combo, and interactive equipment", accent: "blue" },
      { number: "30-50%", label: "ENERGY STAR electricity reduction", sub: "$200-$600/machine/year savings", accent: "orange" },
      { number: "$400-1,800", label: "outdoor power install premium", sub: "GFCI + IP54-65 + weather-rated", accent: "blue" },
      { number: "2-4 yr", label: "ENERGY STAR payback", sub: "capital premium recovers through energy savings", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Venue vending equipment power profile and specifications",
    sub: "Each equipment type carries distinct power profile and circuit specification. Aggregate placement load drives electrical service planning.",
    headers: ["Equipment type", "Continuous draw", "Peak compressor start", "Recommended circuit"],
    rows: [
      ["Combo vending (snack + beverage)", "3-6 amps", "8-12 amps", "20-amp circuit; 2 per circuit OK"],
      ["Refrigerated beverage cooler", "4-8 amps", "12-20 amps", "20-amp circuit; 1-2 per circuit"],
      ["Glass-front beverage merchandiser", "5-9 amps", "14-22 amps", "20-amp circuit; 1 per circuit"],
      ["Interactive 32-43 inch touchscreen", "5-8 amps", "9-12 amps", "20-amp circuit; 1-2 per circuit"],
      ["Interactive 55-65 inch flagship", "7-10 amps", "11-14 amps", "20-amp circuit; 1 per circuit"],
      ["AI cooler with camera and AI compute", "6-9 amps", "13-18 amps", "20-amp circuit; 1 per circuit"],
      ["Hot beverage / coffee equipment", "8-12 amps (peak brew)", "Brew event 12-15 amps", "20-amp circuit; 1 per circuit"],
    ],
  }),
  specList({
    heading: "Venue vending power and energy specifications",
    items: [
      { label: "Electrical service capacity planning", value: "Aggregate placement load drives electrical service specification. Concourse placement of 4-6 vending machines typically draws 20-50 amps aggregate, requiring 3-4 dedicated 20-amp circuits. Premium-zone placement of 2-3 interactive machines plus refrigerated cooler draws 20-30 amps requiring 2-3 dedicated 20-amp circuits. Coordinate with venue facilities engineering at proposal. Specify circuit capacity at install with electrical contractor permit and inspection." },
      { label: "ENERGY STAR equipment specification", value: "ENERGY STAR-qualified refrigerated vending machines and coolers cut annual electricity 30-50% vs legacy fleet, saving $200-$600 per machine per year at venue duty cycle. Capital premium 5-15% recovers in 2-4 years. LED lighting cuts lighting energy 60-75% vs fluorescent; motion-sensor activation cuts idle lighting 20-30%. Smart-cycle compressor management reduces peak-demand load contributing to venue demand-charge optimization. Specify at proposal; reject non-qualifying equipment at install." },
      { label: "Low-GWP natural refrigerant — R-290 propane, R-744 CO2", value: "Natural refrigerants R-290 (propane, GWP 3) and R-744 (CO2, GWP 1) replace high-GWP hydrofluorocarbon refrigerants R-134a (GWP 1430) and R-404A (GWP 3922) at refrigerated coolers and beverage equipment. EPA SNAP-listed for vending use. Eliminates venue HFC refrigerant footprint; supports ESG reporting (GRI Standards, AASHE STARS, CDP, B Corp recertification). Modern operators carry low-GWP fleet; legacy operators carry HFC default. Specify at proposal." },
      { label: "Outdoor and weather-rated power specification", value: "Outdoor vending placements require IP54-65 rated power connections per equipment classification, GFCI protection per NEC 210.8 (Class A GFCI in damp/wet locations), weather-rated outlet enclosures with locking covers (NEMA 3R minimum, NEMA 4 at splash zones near water features or rain exposure), conduit and box specification meeting outdoor classification (rigid metal conduit RMC or EMT with rain-tight fittings; non-metallic PVC where permitted by local code). Permit and inspection by venue electrical contractor. Add $400-$1,800 per placement at install." },
      { label: "Backup power and event-day continuity", value: "Generator backup or UPS at critical placements supporting event-day continuity during outages. Event-day outage risk is operationally critical because foot traffic peaks at outage windows are likely. Critical placement specification: refrigerated coolers preserving perishable inventory ($500-$2,000 inventory at risk per machine); interactive equipment running sponsor activation during event; flagship entry plaza placement at high-visibility location. Backup specification: small UPS (1500-3000 VA) for critical interactive equipment runtime 15-30 minutes; generator backup with automatic transfer switch (ATS) for refrigerated cooler runtime 4-24+ hours per venue emergency power plan." },
      { label: "Demand charge optimization at high-utility-rate venues", value: "Venue electrical bills often include demand charges (peak 15-minute load per month at $5-$30 per kW) in addition to consumption charges. Smart-cycle compressor management on modern ENERGY STAR equipment reduces peak load contributing to venue demand-charge optimization. At venues with $15-$30 per kW demand rates and 4-6 vending placements, smart-cycle savings can reach $200-$800 per year in demand charge alone, on top of consumption savings. Specify smart-cycle at proposal; modern equipment carries as standard." },
      { label: "Solar augmentation and battery storage at outdoor placements", value: "Solar PV with battery storage at outdoor placements supports off-grid or grid-augmented operation at sustainability-priority venues. Typical specification: 200-400W solar PV panel mounted on equipment top or adjacent pole, 2-5 kWh lithium iron phosphate (LFP) battery providing 12-24 hour off-grid runtime, charge controller and grid-tie inverter where applicable, monitoring and reporting integration with venue ESG dashboard. Capital $1,200-$5,000 per machine; supports AASHE STARS, GRESB, CDP reporting. Modern venue-experienced operators with sustainability focus support; specify at proposal." },
      { label: "Emergency power infrastructure integration", value: "Critical placement backup power integrates with venue emergency power infrastructure where available. Automatic transfer switch (ATS) at refrigerated cooler placements connects to venue generator backup. Specify integration with venue emergency power plan; coordinate with venue facilities engineering at scoping. Verify ATS operation at venue emergency-power-test cadence (typically monthly or quarterly per NFPA 110 standard). Modern operators coordinate; legacy operators run standalone." },
      { label: "Power monitoring and energy reporting", value: "Modern equipment supports per-machine power monitoring (current, voltage, kWh consumption, peak demand) via IoT telemetry. Data feeds venue ESG dashboard for energy consumption reporting (GRI Standards, AASHE STARS, CDP, B Corp). Modern venue-experienced operators carry monitoring capability; legacy operators provide meter-read data only. Specify monitoring tier at proposal." },
      { label: "Operator capability — power and energy planning coordination", value: "Modern venue-experienced operators carry power and energy planning capability with venue facilities engineering coordination, ENERGY STAR and low-GWP equipment sourcing, outdoor and weather-rated power specification, backup power and ATS integration, solar augmentation specification at sustainability-priority venues, demand charge optimization through smart-cycle equipment, and per-machine power monitoring with ESG reporting integration. Legacy operators carry default power-tap planning only. Verify at proposal with venue facilities engineering reference at comparable major venues." },
    ],
  }),
  costBreakdown({
    heading: "Power and energy cost picture — typical 8-machine venue placement program",
    sub: "Illustrative annual cost picture for a venue with 8 vending machines (5 standard combo + 2 interactive + 1 refrigerated cooler). Costs vary by venue utility rate and operator program.",
    items: [
      { label: "Electrical service install (one-time, amortized)", amount: "$3,200-$14,400", range: "$400-$1,800 per machine outdoor; $300-$900 indoor" },
      { label: "ENERGY STAR equipment capital premium (amortized)", amount: "$1,600-$4,800", range: "5-15% capital premium recovering in 2-4 years" },
      { label: "Annual electricity consumption (ENERGY STAR fleet)", amount: "$1,800-$3,600", range: "vs $3,000-$7,200 legacy fleet" },
      { label: "Annual demand charge (smart-cycle optimized)", amount: "$400-$1,400", range: "vs $800-$2,200 legacy" },
      { label: "Backup power and UPS (amortized critical placements)", amount: "$600-$2,400", range: "Critical placements only; 1-2 per venue" },
      { label: "Power monitoring and ESG reporting integration", amount: "$400-$1,200", range: "If broken out from operator service contract" },
    ],
    totalLabel: "Total annual power and energy program cost",
    totalAmount: "$8,000-$27,800",
  }),
  tipCards({
    heading: "Eight venue vending power and energy planning patterns",
    sub: "Each pattern documented at modern venue-experienced operator deployments. Build into proposal evaluation and MSA specification.",
    items: [
      { title: "Aggregate placement load planning with venue facilities engineering", body: "Coordinate aggregate load planning with venue facilities engineering at proposal. Specify circuit capacity per placement based on equipment mix. Concourse placement of 4-6 vending machines typically requires 3-4 dedicated 20-amp circuits. Permit and inspection by venue electrical contractor at install." },
      { title: "ENERGY STAR + LED + motion-sensor + smart-cycle at every placement", body: "ENERGY STAR equipment cuts electricity 30-50%; LED + motion-sensor adds 20-30%; smart-cycle compressor management reduces peak demand. Combined 50-70% electricity reduction vs legacy. Capital premium 5-15% recovers in 2-4 years. Modern operators carry as standard." },
      { title: "Low-GWP refrigerant at every refrigerated placement", body: "R-290 propane (GWP 3) or R-744 CO2 (GWP 1) replaces HFC R-134a (GWP 1430) and R-404A (GWP 3922). EPA SNAP-listed for vending. Eliminates HFC refrigerant footprint; supports ESG reporting (GRI, AASHE STARS, CDP, B Corp). Specify at proposal." },
      { title: "Outdoor power IP54-65 + GFCI + weather-rated", body: "NEC 210.8 outdoor GFCI Class A; weather-rated outlet enclosure (NEMA 3R minimum, NEMA 4 at splash zones); rigid metal conduit or EMT with rain-tight fittings. Add $400-$1,800 per placement at install. Specify at proposal." },
      { title: "Backup power at critical placements with ATS integration", body: "Critical placement backup power (refrigerated coolers preserving perishable inventory, interactive equipment running sponsor activation, flagship entry plaza). UPS 1500-3000 VA for interactive 15-30 min runtime; generator with ATS for refrigerated cooler 4-24+ hr per venue emergency power plan. Coordinate with venue facilities engineering at scoping." },
      { title: "Smart-cycle compressor management for demand charge optimization", body: "Venues with $15-$30 per kW demand rates and 4-6 vending placements see $200-$800 per year demand charge savings from smart-cycle compressor management on ENERGY STAR equipment. On top of consumption savings. Modern equipment carries smart-cycle as standard; legacy operators may carry equipment without." },
      { title: "Solar augmentation at sustainability-priority outdoor placements", body: "200-400W solar PV with 2-5 kWh LFP battery at outdoor placements supports off-grid or grid-augmented operation at sustainability-priority venues. Capital $1,200-$5,000 per machine. Supports AASHE STARS, GRESB, CDP reporting. Specify at proposal at sustainability-priority programming." },
      { title: "Per-machine power monitoring with ESG reporting integration", body: "IoT telemetry covering per-machine current, voltage, kWh consumption, peak demand. Data feeds venue ESG dashboard for energy consumption reporting (GRI Standards, AASHE STARS, CDP, B Corp recertification, IAVM venue sustainability benchmark). Modern operators carry; legacy provide meter-read only. Specify at MSA." },
    ],
  }),
  decisionTree({
    heading: "Should we run a comprehensive power and energy program at venue scale?",
    question: "Do we operate 6+ venue placements with venue facilities engineering team for coordination, sustainability or ESG reporting priority, AND budget for ENERGY STAR + low-GWP + outdoor weather-rated + backup power MSA?",
    yesBranch: {
      title: "Run comprehensive six-dimension power and energy program — modern venue-experienced operator MSA.",
      description: "Specify aggregate placement load planning with venue facilities engineering, ENERGY STAR equipment with LED and motion-sensor and smart-cycle at every placement, low-GWP natural refrigerant at every refrigerated placement, outdoor power IP54-65 with GFCI and weather-rated specification, backup power at critical placements with ATS integration where venue emergency power supports, smart-cycle for demand charge optimization, solar augmentation at sustainability-priority outdoor placements, and per-machine power monitoring with ESG reporting integration. Vet through structured RFP with venue facilities engineering reference at comparable major venues.",
      finalTone: "go",
      finalLabel: "COMPREHENSIVE POWER MSA",
    },
    noBranch: {
      title: "Phase-in starting with efficiency and outdoor weather-rated specification.",
      description: "Without enterprise budget or coordination capacity for full six-dimension deployment, phase-in starting with ENERGY STAR efficiency specification and outdoor weather-rated power at primary placements. Document energy savings and ESG metrics. Expand to low-GWP refrigerant, backup power, solar augmentation, and per-machine monitoring at year-2 with broader rollout.",
      finalTone: "stop",
      finalLabel: "PHASE-IN · YEAR-1",
    },
  }),
  keyTakeaways({
    heading: "Venue vending power and energy — what to plan for",
    takeaways: [
      "Six-dimension power and energy framework: electrical service capacity + ENERGY STAR efficiency + low-GWP refrigerant + outdoor weather-rated power + backup and event-day continuity + emerging solar augmentation. Modern venue-experienced operator carries full planning capability.",
      "Equipment power profile: combo vending 3-6 amps continuous, refrigerated cooler 4-8 amps, interactive 32-65 inch 5-10 amps, AI cooler 6-9 amps. Aggregate load drives circuit specification (typically 20-amp circuit per 1-3 machines).",
      "ENERGY STAR cuts electricity 30-50% saving $200-$600/machine/year; LED + motion-sensor adds 20-30%; smart-cycle reduces demand charge $200-$800/year per placement. Capital premium 5-15% recovers in 2-4 years.",
      "Outdoor placement specification adds $400-$1,800 per placement at install (IP54-65 + GFCI per NEC 210.8 + weather-rated NEMA 3R/4 + rigid conduit). Backup power $600-$2,400 amortized per critical placement.",
      "Build power and energy program through structured RFP with venue facilities engineering reference, ENERGY STAR and low-GWP equipment sourcing capability, outdoor weather-rated power specification, ATS integration capability, solar augmentation portfolio, per-machine monitoring and ESG reporting integration.",
    ],
  }),
  inlineCta({
    text: "Want the venue vending power and energy framework (six-dimension spec, electrical service planning, ENERGY STAR/low-GWP standards, outdoor specification, operator RFP template)?",
    buttonLabel: "Get the power and energy framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support entertainment venue vending power and energy programs — including six-dimension framework specification (electrical service capacity planning with aggregate placement load, ENERGY STAR efficiency with LED and motion-sensor and smart-cycle compressor management, low-GWP natural refrigerant per EPA SNAP listing, outdoor and weather-rated power per NEC 210.8 and IP54-65 classification, backup power and event-day continuity with ATS integration to venue emergency power, solar augmentation with battery storage at sustainability-priority outdoor placements), venue facilities engineering coordination at proposal and install, demand charge optimization through smart-cycle equipment specification, per-machine power monitoring via IoT telemetry with ESG reporting integration for GRI Standards and AASHE STARS and CDP and B Corp and IAVM venue benchmark, and operator capability vetting through venue facilities engineering reference at comparable major venues. Recommendations reflect operator-side data and venue power and energy outcomes across comparable major venues.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the typical power draw of venue vending equipment?", answer: "Combo vending (snack + beverage) 3-6 amps continuous with 8-12 amp compressor start; refrigerated beverage cooler 4-8 amps continuous with 12-20 amp start; glass-front beverage merchandiser 5-9 amps continuous with 14-22 amp start; interactive 32-43 inch touchscreen 5-8 amps; interactive 55-65 inch flagship 7-10 amps; AI cooler 6-9 amps; hot beverage / coffee 8-12 amps peak brew. Aggregate placement load drives circuit specification.", audience: "Facilities / Operations" },
      { question: "How much electricity does ENERGY STAR equipment save?", answer: "ENERGY STAR-qualified refrigerated vending machines and coolers cut annual electricity 30-50% vs legacy, saving $200-$600 per machine per year at venue duty cycle. LED lighting cuts lighting energy 60-75% vs fluorescent; motion-sensor activation cuts idle lighting 20-30% on top. Smart-cycle compressor management reduces peak-demand load. Capital premium 5-15% recovers in 2-4 years.", audience: "Facilities / Finance" },
      { question: "What does outdoor power specification require?", answer: "IP54-65 rated power connections per equipment classification, GFCI protection per NEC 210.8 (Class A in damp/wet locations), weather-rated outlet enclosures with locking covers (NEMA 3R minimum, NEMA 4 at splash zones), conduit and box specification meeting outdoor classification (rigid metal conduit RMC or EMT with rain-tight fittings; PVC where local code permits). Permit and inspection by venue electrical contractor. Add $400-$1,800 per placement at install.", audience: "Facilities / Electrical" },
      { question: "When do we need backup power?", answer: "Critical placement specification: refrigerated coolers preserving perishable inventory ($500-$2,000 inventory at risk per machine), interactive equipment running sponsor activation during event, flagship entry plaza high-visibility placement. UPS 1500-3000 VA for interactive 15-30 minute runtime; generator backup with ATS for refrigerated cooler 4-24+ hour per venue emergency power plan. Coordinate with venue facilities engineering at scoping.", audience: "Operations / Emergency Planning" },
      { question: "What's low-GWP refrigerant and why does it matter?", answer: "Natural refrigerants R-290 (propane, GWP 3) and R-744 (CO2, GWP 1) replace high-GWP hydrofluorocarbon refrigerants R-134a (GWP 1430) and R-404A (GWP 3922). EPA SNAP-listed for vending use. Eliminates venue HFC refrigerant footprint; supports ESG reporting (GRI Standards, AASHE STARS, CDP, B Corp recertification). Modern operators carry low-GWP fleet; legacy operators carry HFC default.", audience: "Sustainability / Facilities" },
      { question: "How does demand charge optimization work?", answer: "Venue electrical bills often include demand charges ($5-$30 per kW peak 15-minute load per month) in addition to consumption charges. Smart-cycle compressor management on modern ENERGY STAR equipment reduces peak load contributing to venue demand-charge optimization. At venues with $15-$30 per kW demand rates and 4-6 vending placements, smart-cycle savings reach $200-$800 per year in demand charge alone.", audience: "Facilities / Finance" },
      { question: "Should we consider solar augmentation at outdoor placements?", answer: "At sustainability-priority venues with outdoor placements yes. Typical specification: 200-400W solar PV panel mounted on equipment top or adjacent pole, 2-5 kWh LFP battery providing 12-24 hour off-grid runtime, charge controller and grid-tie inverter where applicable, monitoring integration with venue ESG dashboard. Capital $1,200-$5,000 per machine. Supports AASHE STARS, GRESB, CDP reporting. Modern venue-experienced operators with sustainability focus support.", audience: "Sustainability / Facilities" },
      { question: "How do we integrate power monitoring with ESG reporting?", answer: "Modern equipment supports per-machine power monitoring (current, voltage, kWh consumption, peak demand) via IoT telemetry. Data feeds venue ESG dashboard for GRI Standards, AASHE STARS, CDP, B Corp recertification, IAVM venue sustainability benchmark. Modern venue-experienced operators carry monitoring capability; legacy operators provide meter-read data only. Specify monitoring tier at proposal.", audience: "Sustainability / IT" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "EPA ENERGY STAR — Commercial Refrigeration program", url: "https://www.energystar.gov/", note: "Federal program qualifying refrigerated vending equipment with energy performance specifications; vending machines and coolers eligible for $200-$600 per machine per year savings at venue duty cycles" },
      { label: "EPA SNAP — Significant New Alternatives Policy refrigerant listings", url: "https://www.epa.gov/snap", note: "Federal program listing acceptable substitute refrigerants including R-290 propane and R-744 CO2 for low-GWP vending applications replacing HFC refrigerants" },
      { label: "NEC — National Electrical Code (NFPA 70) GFCI and outdoor outlet standards", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "National Electrical Code (NFPA 70) governing GFCI protection (Article 210.8), weather-rated outlet standards, and outdoor power installation specifications applicable to outdoor vending placements" },
      { label: "NFPA 110 — Standard for Emergency and Standby Power Systems", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=110", note: "NFPA standard governing emergency and standby power systems including ATS integration and emergency power test cadence applicable to venue backup power at vending placements" },
      { label: "IAVM — International Association of Venue Managers facilities and sustainability guidance", url: "https://www.iavm.org/", note: "Industry trade body covering venue facilities operations including power and energy planning, sustainability programs, and ESG reporting at arenas, stadiums, theatres, and convention centers" },
    ],
  }),
  relatedGuides({
    heading: "Related entertainment venue guides",
    items: [
      { eyebrow: "Sister guide", title: "Eco-friendly vending for entertainment", description: "Six-dimension eco framework, certified-SKU curation, packaging hierarchy, ESG reporting integration, and operator vetting for venue sustainability programs.", href: "/vending-for-entertainment-venues/eco-friendly-vending-for-entertainment" },
      { eyebrow: "Sister guide", title: "Data analytics and venue vending", description: "Tier-1 telemetry, event-day topoff alerts, venue BI integration, and operator capability vetting for venue vending programs.", href: "/vending-for-entertainment-venues/data-analytics-venue-vending" },
      { eyebrow: "Hub", title: "All entertainment venue vending guides", description: "Format selection, premium-zone placement, power and energy, and operator vetting across arenas, stadiums, parks, and concert venues.", href: "/vending-for-entertainment-venues" },
    ],
  }),
]);
process.exit(0);
