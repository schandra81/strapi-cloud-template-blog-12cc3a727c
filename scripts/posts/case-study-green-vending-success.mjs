import { seedPost, tldr, caseStudy, statStrip, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("case-study-green-vending-success", [
  tldr({
    heading: "How did one campus achieve substantial green vending success?",
    paragraph:
      "A mid-size university (15,000 students, ~60 vending machines across campus) implemented a structured green vending program over 18 months: 100% ENERGY STAR refrigerated fleet, LED + occupancy-sensor lighting on all machines, low-GWP refrigerant (R-290) on refrigerated units, telemetry-driven service routing, aluminum-and-glass packaging preference (62% of beverage SKUs), recycling bin co-location at all machines, wellness program integration (10% discount on healthy SKUs for wellness-participating students). Results: 180,000 kWh saved annually (vs prior fleet baseline), 35% truck-mile reduction via telemetry routing, 68% recycling capture vs 28% baseline, healthy-SKU share lift from 22% to 41%, AASHE STARS sustainability credits earned, $42K annual energy cost savings. ROI on equipment refresh + integration <3 years. Approach reflects modern best practice — measurable specifications, operator partnership, sustainability office coordination, ongoing measurement + reporting.",
    bullets: [
      { emphasis: "180,000 kWh saved annually:", text: "ENERGY STAR + LED + occupancy sensors + tight setpoint produced substantial fleet-level energy reduction." },
      { emphasis: "35% truck miles cut + 68% recycling capture:", text: "Telemetry-driven service routing + recycling bin co-location produced measurable downstream impact." },
      { emphasis: "Healthy-SKU share 22% → 41%:", text: "Wellness program integration drove healthy-share lift via 10% discount for wellness-participating students." },
    ],
  }),
  statStrip({
    heading: "Green vending case study benchmarks",
    stats: [
      { number: "180K kWh", label: "annual energy saved", sub: "vs prior fleet baseline", accent: "blue" },
      { number: "35%", label: "truck miles cut", sub: "telemetry-driven routing", accent: "blue" },
      { number: "68%", label: "recycling capture", sub: "vs 28% baseline (co-location)", accent: "blue" },
      { number: "$42K", label: "annual energy cost savings", sub: "campus utility budget impact", accent: "blue" },
    ],
  }),
  caseStudy({
    tag: "Campus green vending success",
    title: "Mid-size university — 18-month structured green vending program produces $42K annual energy savings + STARS credits",
    context: "Mid-size university with 15,000 students and 60 vending machines across campus. Pre-implementation: legacy refrigerated fleet (50% non-ENERGY STAR), fluorescent always-on lighting, legacy HFC refrigerants (R-134a), fixed-route service, no telemetry, ~30% recycling capture, ~22% healthy-SKU share. Sustainability office partnered with auxiliary services on structured green vending program. Operator changed at RFP renewal to modern-capability operator. Implementation over 18 months.",
    meta: [
      { label: "Placement scope", value: "60 vending machines across 15,000-student campus" },
      { label: "Implementation period", value: "18 months (initial 6-month operator transition + 12-month refresh)" },
      { label: "Pre-implementation baseline", value: "Legacy fleet, fixed-route service, ~22% healthy SKUs, ~30% recycling capture" },
      { label: "Intervention stack", value: "ENERGY STAR + LED + occupancy sensors + R-290 refrigerant + telemetry routing + aluminum packaging + recycling co-location + wellness integration" },
    ],
    results: [
      { metric: "180,000 kWh", description: "Annual energy saved vs prior fleet baseline. ENERGY STAR + LED + occupancy sensors + tight refrigeration setpoint (35-40°F)." },
      { metric: "35%", description: "Truck miles cut via telemetry-driven service routing. Routes optimized daily; skip machines without need." },
      { metric: "68% (vs 28% baseline)", description: "Recycling capture rate with recycling bin co-location. Standard recycling bin within 10 feet of every machine." },
      { metric: "22% → 41%", description: "Healthy-SKU share lift via wellness program integration. 10% discount on healthy SKUs for wellness-participating students." },
      { metric: "$42K", description: "Annual energy cost savings (campus utility budget). Plus operational savings from reduced stockouts + waste." },
      { metric: "STARS credits", description: "AASHE STARS sustainability credits earned across OP-15 (Energy), OP-22 (Waste Minimization), PA-7 (Affordability & Access)." },
    ],
  }),
  specList({
    heading: "Green vending success program specifications",
    items: [
      { label: "Operator transition at RFP renewal", value: "RFP required modern-capability operator: 100% telemetry coverage, ENERGY STAR fleet, low-GWP refrigerant capability, sustainability reporting, healthy-SKU planogram capability. Selected operator with strong campus references." },
      { label: "Fleet refresh schedule", value: "Oldest 30% of fleet refreshed in first 6 months; remaining 30% over months 7-12; final 40% over months 13-18. Annual 10% refresh cadence thereafter. ENERGY STAR specification at all refreshes." },
      { label: "Energy efficiency stack", value: "ENERGY STAR refrigeration (all units), LED lighting (all units), occupancy-sensor lighting (all units), tight refrigeration setpoint (35-40°F documented). Combined 50-70% per-machine energy reduction." },
      { label: "Low-GWP refrigerant adoption", value: "R-290 hydrocarbon refrigerant on all refrigerated units. GWP 3 vs legacy R-134a GWP 1,430. Massive global warming impact reduction. Coordinated with refrigeration HVAC service on conversion." },
      { label: "Telemetry-driven service routing", value: "100% telemetry coverage. Routes optimized daily based on fill level + days-to-empty. Cuts truck miles 35% vs prior fixed-route schedule. Reduces stockouts 60%+ vs prior fleet." },
      { label: "Packaging procurement preference", value: "Aluminum-and-glass beverages preferred over PET. 62% of beverage SKUs in aluminum + glass at conclusion (vs 35% baseline). Built into operator contract; coordinated with sustainability office." },
      { label: "Recycling bin co-location", value: "Standard recycling bin (single-stream + aluminum-and-bottle separate at some buildings) within 10 feet of every machine. Joint operator + facilities responsibility. Capture rate 68% vs 28% baseline." },
      { label: "Wellness program integration", value: "10% discount on healthy SKUs for wellness-program-participating students. Coordinated with student affairs + wellness office. Drove healthy-share lift from 22% to 41% over 12 months." },
      { label: "STARS reporting integration", value: "Operator provides quarterly reports formatted for AASHE STARS submissions: kWh per machine, ENERGY STAR coverage, recycling capture, low-GWP refrigerant share, packaging mix, truck-mile reduction. Earned credits across OP-15, OP-22, PA-7.", },
    ],
  }),
  tipCards({
    heading: "Five green vending success patterns",
    sub: "Each is reflected in the case study above and represents modern best practice. Replicate these patterns at your campus / facility.",
    items: [
      { title: "Modern operator capability is foundational", body: "Without modern operator (100% telemetry, ENERGY STAR fleet, low-GWP refrigerant, sustainability reporting), green vending program can't reach measurable results. Operator transition at RFP renewal is the typical leverage point. Build modern requirements into RFP." },
      { title: "Phased fleet refresh over 12-18 months", body: "Don't try blanket replacement. Phased 30%-30%-40% over 12-18 months matches campus capital plan, allows operator transition, produces measurable progress. ENERGY STAR specification at all refreshes; annual 10% refresh thereafter." },
      { title: "Layered intervention stack", body: "ENERGY STAR + LED + occupancy sensors + low-GWP refrigerant + telemetry routing + packaging + recycling + wellness integration. Each contributes; combined produces 50-70% per-machine reduction. No single intervention is sufficient." },
      { title: "Wellness integration drives healthy-share lift", body: "Healthy-share lift from 22% to 41% over 12 months via 10% discount on healthy SKUs for wellness-program-participating students. Coordinate with student affairs + wellness office. Integration produces both wellness engagement + healthy-share lift." },
      { title: "STARS reporting throughout (not at end)", body: "Operator provides quarterly STARS-formatted reports throughout program. Sustainability office aggregates into annual STARS submission. Continuous data reduces audit prep + identifies optimization opportunities throughout program.", },
    ],
  }),
  inlineCta({
    text: "Want the green vending program framework (operator transition + fleet refresh + intervention stack + STARS)?",
    buttonLabel: "Get the green vending framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported campus green vending program design across mid-size and large universities — including operator transition planning, phased fleet refresh, intervention-stack design, and STARS-aligned reporting. The case study patterns reflect operator-side data and sustainability office feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does a successful green vending program look like?", answer: "Layered intervention stack over 12-18 months: modern operator (telemetry, ENERGY STAR, low-GWP refrigerant, sustainability reporting), phased fleet refresh, energy efficiency interventions (LED + occupancy sensors + tight setpoint), recycling bin co-location, packaging procurement preference, wellness integration. Produces measurable results.", audience: "Sustainability Officers" },
      { question: "How much energy savings is realistic?", answer: "150,000-250,000 kWh annual savings at 50-100 machine campus depending on baseline fleet age + intervention stack. Substantial annual savings translate to STARS credits + utility cost reduction. ROI on equipment refresh + integration <3 years typical.", audience: "Sustainability Officers" },
      { question: "What's the timeline?", answer: "18-month structured program typical: 6-month operator transition + 12-month fleet refresh in phases (30%-30%-40%). Annual 10% refresh cadence thereafter. ENERGY STAR specification at all refreshes; reporting throughout for STARS submission.", audience: "Auxiliary Services" },
      { question: "Do we need to change operators?", answer: "Almost always yes. Legacy operators lack modern capabilities (telemetry, ENERGY STAR fleet, low-GWP refrigerant capability, sustainability reporting). Operator transition at RFP renewal is the typical leverage point. Build modern requirements into RFP.", audience: "Procurement" },
      { question: "What about packaging?", answer: "Aluminum-and-glass beverages preferred over PET. Some campuses negotiate aluminum-share targets (60%+ of beverage SKUs) into operator contracts. Coordinated with sustainability office on procurement criteria. Affects downstream packaging waste; aligns with broader sustainability program.", audience: "Sustainability Officers" },
      { question: "How does wellness integration drive healthy-share?", answer: "10% discount on healthy SKUs for wellness-program-participating students drove healthy-share lift from 22% to 41% over 12 months in this case study. Coordinate with student affairs + wellness office. Produces both wellness engagement + healthy-share lift.", audience: "Wellness Officers" },
      { question: "What about STARS credits?", answer: "Modern green vending program earns credits across multiple STARS categories: OP-15 (Energy), OP-22 (Waste Minimization), PA-7 (Affordability & Access). Coordinated with sustainability office on quarterly reporting cadence. Operator provides pre-formatted reports.", audience: "Sustainability Officers" },
      { question: "How do we replicate at our campus?", answer: "Engage sustainability office + auxiliary services at start. Plan operator transition at next RFP renewal. Build modern-capability requirements + sustainability spec into RFP. Phased fleet refresh over 12-18 months. Continuous reporting throughout. Annual 10% refresh thereafter.", audience: "Auxiliary Services" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AASHE STARS — sustainability framework", url: "https://stars.aashe.org/", note: "Campus sustainability framework underlying vending sustainability credit" },
      { label: "ENERGY STAR — commercial refrigeration", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Federal energy efficiency certification standard" },
      { label: "EPA — Global Warming Potential reference", url: "https://www.epa.gov/ghgemissions/understanding-global-warming-potentials", note: "Federal reference for refrigerant GWP comparison" },
      { label: "NACAS — campus auxiliary services standards", url: "https://www.nacas.org/", note: "Industry trade association covering campus amenity sustainability" },
      { label: "Second Nature — campus climate commitments", url: "https://secondnature.org/", note: "Campus climate commitment framework underlying carbon reduction goals" },
    ],
  }),
  relatedGuides({
    heading: "Related sustainability guides",
    items: [
      { eyebrow: "Sister guide", title: "Green vending initiatives on campus", description: "ENERGY STAR, LED, telemetry-driven routing, recycling co-location, and STARS reporting.", href: "/ai-vending-coolers/green-vending-initiatives-campus" },
      { eyebrow: "Operations", title: "Renewable energy for campus vending", description: "Solar augmentation, grid-renewables matching, and emissions accounting for campus vending.", href: "/ai-vending-coolers/renewable-energy-campus-vending" },
      { eyebrow: "Hub", title: "All eco-friendly vending guides", description: "Sustainability programs, ENERGY STAR, low-GWP refrigerant, packaging, recycling, and operator selection.", href: "/eco-friendly-vending" },
    ],
  }),
]);
process.exit(0);
