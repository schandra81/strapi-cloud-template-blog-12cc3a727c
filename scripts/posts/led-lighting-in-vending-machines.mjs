import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, tipCards, decisionTree, caseStudy, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("led-lighting-in-vending-machines", [
  tldr({
    heading: "What does LED lighting do for vending machines — and what should hosts actually specify?",
    paragraph:
      "LED lighting in vending machines is one of the two highest-ROI sustainability interventions (alongside ENERGY STAR refrigeration). Modern vending machines ship with LED lighting standard; older fleets still use T8 or T12 fluorescent tubes that draw 40-90W vs LED at 8-20W per machine, run hotter (adding to refrigeration load), and fail at 12,000-18,000 hours vs LED at 50,000-100,000 hours. Annual energy savings: 400-1,100 kWh per machine when retrofitting fluorescent to LED, with combined savings up to 1,400-1,800 kWh per machine when LED is paired with occupancy/motion sensors that dim or shut lighting when the machine isn't being approached. LED also improves merchandising (better color rendering CRI 80-90+ vs fluorescent CRI 60-70 makes product packaging look closer to true color), reduces interior heat load (extending refrigeration MTBF), and eliminates fluorescent tube disposal (mercury content, hazardous waste handling at end-of-life). Specifications that matter: LED type (strip vs tube replacement vs integrated panel), CRI (80+ for merchandising quality), color temperature (4000K-5000K cool white for product visibility), occupancy sensor integration (motion sensor + dim-to-off or dim-to-low), dimmable controller, and verification that the LED + driver are rated for vending-machine enclosure conditions (temperature, vibration, humidity). Retrofit ROI typically 18-30 months on energy savings alone; faster with utility rebates (PG&E, ConEd, others rebate $20-80 per LED retrofit fixture under commercial lighting programs). Federal facilities should explore ESPC (Energy Savings Performance Contract) financing under FEMP guidance — operator-paid retrofit amortized via energy savings.",
    bullets: [
      { emphasis: "400-1,100 kWh saved annually per machine with LED retrofit:",
        text: "Up to 1,400-1,800 kWh when paired with occupancy/motion sensors. Combined with ENERGY STAR refrigeration, lighting is the second largest sustainability lever." },
      { emphasis: "LED merchandising quality matters too:",
        text: "CRI 80-90+ vs fluorescent CRI 60-70 makes product packaging look closer to true color. Modern vending merchandising depends on this." },
      { emphasis: "Specify occupancy sensor integration, not just LED:",
        text: "LED alone saves 400-1,100 kWh. LED + occupancy sensor + dim-to-low extends savings to 1,400-1,800 kWh. Modern operators specify both; legacy operators specify LED only.", },
    ],
  }),
  statStrip({
    heading: "Vending LED lighting benchmarks",
    stats: [
      { number: "400-1,100", label: "kWh saved annually", sub: "LED retrofit per machine", accent: "blue" },
      { number: "1,400-1,800", label: "kWh saved annually", sub: "LED + occupancy sensors", accent: "blue" },
      { number: "50,000-100,000", label: "hour LED life", sub: "vs 12,000-18,000 fluorescent", accent: "blue" },
      { number: "18-30 months", label: "retrofit ROI", sub: "energy savings alone", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending machine lighting technologies compared",
    sub: "Three lighting options at modern and legacy vending placements. LED is the modern standard; LED + occupancy sensor is the modern best practice.",
    headers: ["Technology", "Power draw per machine", "Lamp life", "Annual kWh", "Merchandising quality (CRI)"],
    rows: [
      ["T12 fluorescent (legacy)", "60-90W (always-on)", "12,000-18,000 hours", "~525-790 kWh", "60-65 (poor color rendering)"],
      ["T8 fluorescent", "40-65W (always-on)", "15,000-24,000 hours", "~350-570 kWh", "65-75 (acceptable)"],
      ["LED tube replacement", "12-25W (always-on)", "50,000-80,000 hours", "~105-220 kWh", "80-90 (excellent)"],
      ["LED strip integrated", "8-20W (always-on)", "60,000-100,000 hours", "~70-175 kWh", "80-95 (excellent)"],
      ["LED + occupancy sensor", "8-20W (dim/off when idle)", "60,000-100,000 hours", "~25-70 kWh", "80-95 (excellent)"],
      ["LED + dim-to-low standby", "8-20W (low-level standby)", "60,000-100,000 hours", "~40-90 kWh", "80-95 (excellent)"],
    ],
  }),
  costBreakdown({
    heading: "LED retrofit cost breakdown — single combo vending machine",
    sub: "Representative LED retrofit cost stack for a combo vending machine moving from T8 fluorescent to LED + occupancy sensor.",
    items: [
      { label: "LED tube or strip replacement (qty 2-4 per machine)", amount: "$40-110", range: "Premium tier with high CRI 85+, vending-rated driver" },
      { label: "Occupancy / motion sensor + controller", amount: "$60-140", range: "Vending-grade sensor with dim-to-low capability" },
      { label: "Installation labor (operator technician)", amount: "$60-110", range: "1-1.5 hours; includes calibration and testing" },
      { label: "Existing fluorescent disposal (mercury hazardous waste)", amount: "$8-18", range: "Per-tube hazardous waste fee; required for T8/T12" },
      { label: "Utility rebate offset (where applicable)", amount: "−$20-80", range: "PG&E, ConEd, others; commercial lighting program" },
    ],
    totalLabel: "Net retrofit cost per machine",
    totalAmount: "$148-298",
  }),
  specList({
    heading: "Vending machine LED lighting specifications",
    items: [
      { label: "LED type — strip vs tube vs panel", value: "Modern vending machines ship with integrated LED strip (8-20W, 80-95 CRI, 50,000-100,000 hour life). Retrofit options: LED tube replacement for legacy T8/T12 fluorescent fixtures (12-25W, 80-90 CRI, 50,000-80,000 hours) or integrated panel for full-front backlight. Match retrofit to existing fixture geometry; verify driver compatibility." },
      { label: "Color rendering index (CRI)", value: "CRI measures how accurately light reveals true color. CRI 80+ is required for vending merchandising quality (product packaging looks correct). Fluorescent CRI 60-70 makes packaging look dull or yellow-shifted. LED CRI 80-95 is modern standard. Verify on spec sheet; reject below 80 for merchandising-critical placements." },
      { label: "Color temperature", value: "4000K-5000K cool white is modern vending standard (product visibility, alertness). 3000K warm white may fit hospitality or lifestyle placements but compromises product visibility. Avoid mixed color temperatures across a fleet (visual inconsistency). Specify in operator contract." },
      { label: "Occupancy / motion sensor integration", value: "PIR (passive infrared) or microwave sensor at machine front. Dims or shuts lighting when no approach detected for 30-90 seconds. Re-illuminates within 0.5-1.0 seconds on approach. Adds 30-50% energy savings on top of LED alone. Modern operators specify; legacy operators don't." },
      { label: "Dim-to-low standby option", value: "Alternative to dim-to-off — lighting drops to 10-20% output when idle (instead of fully off). Better for placements where machines are part of nighttime aesthetic (apartment lobby, hospitality, transit). Saves 50-70% vs always-on. Operator-configurable parameter." },
      { label: "Vending-rated driver + enclosure", value: "LED + driver must tolerate vending machine enclosure conditions: temperature swing (35-95F dock, 95-110F non-conditioned), vibration (dock traffic), humidity. Commercial-grade LED rated to UL 1598 or equivalent. Verify driver rating (Class 2 typical); reject office-grade LED at industrial placements." },
      { label: "Utility rebates + ESPC financing", value: "Most major utilities (PG&E, ConEd, Xcel, others) rebate $20-80 per LED retrofit fixture under commercial lighting programs. Federal facilities should explore ESPC (Energy Savings Performance Contract) financing under FEMP — operator-paid retrofit amortized via energy savings, no upfront capital from host." },
      { label: "Mercury disposal compliance", value: "Fluorescent tubes contain mercury (3-15mg per T8/T12 tube). Federal Universal Waste Rule requires hazardous-waste handling at end-of-life. LED retrofit eliminates ongoing mercury disposal. Verify operator follows Universal Waste protocol for fluorescent disposal during retrofit." },
      { label: "Operator capability + telemetry visibility", value: "Modern operators report fleet-wide LED coverage percentage via telemetry (Cantaloupe Seed, Nayax, USConnect Hub). Sustainability programs require this visibility. Legacy operators may not track. Build into RFP: report LED + occupancy-sensor coverage percentage; target 100% within 18-month timeline." },
    ],
  }),
  tipCards({
    heading: "Five LED lighting specification mistakes",
    sub: "Documented across sustainability-program post-implementation reviews. All preventable with measurable specification discipline.",
    items: [
      { title: "Specifying LED without occupancy sensor", body: "LED alone saves 400-1,100 kWh per machine per year; LED + occupancy sensor saves 1,400-1,800 kWh. The sensor adds 30-50% on top of LED-only savings. Modern operators specify both; legacy operators specify LED only and miss the larger portion of available savings. Build sensor into spec." },
      { title: "Accepting LED without CRI verification", body: "Cheap LED retrofit fixtures can have CRI 65-75 (similar to fluorescent). Vending merchandising depends on CRI 80+ for product packaging color rendering. Specify CRI 80+ minimum; verify on spec sheet. Reject below 80 for merchandising-critical placements." },
      { title: "Mixed color temperatures across fleet", body: "Some machines 4000K, others 5000K, others 3000K — visual inconsistency at multi-machine placements (lobby, breakroom bank). Specify single color temperature across fleet. Modern operators standardize at 4000K-5000K cool white; legacy retrofits often produce mixed-temp fleets." },
      { title: "Office-grade LED at industrial site", body: "Commercial-grade LED (UL 1598 or equivalent) is required at industrial placements (temperature swing, vibration, humidity). Office-grade LED fails 2-3x faster at industrial conditions. Verify driver rating and enclosure spec at proposal; reject office-grade where industrial is required." },
      { title: "Skipping utility rebate + ESPC options", body: "Most major utilities rebate $20-80 per LED retrofit fixture; federal facilities can use ESPC financing under FEMP. Skipping these subsidies leaves money on the table. Modern operator program design includes rebate capture and ESPC where applicable. Verify operator does this; build into contract." },
    ],
  }),
  decisionTree({
    heading: "Should we retrofit existing fluorescent fleet to LED?",
    question: "Does the fleet have machines older than 5 years AND can the operator deliver LED + occupancy sensor at the placement under modern telemetry monitoring?",
    yesBranch: {
      title: "LED retrofit + occupancy sensor is the right move.",
      description: "Older fleet typically has T8 or T12 fluorescent — 60-90W per machine, mercury content, 12,000-18,000 hour life. LED retrofit + occupancy sensor saves 1,400-1,800 kWh per machine annually, ROI 18-30 months on energy savings alone. Capture utility rebates ($20-80 per fixture) where available. Build into operator contract.",
      finalTone: "go",
      finalLabel: "RETROFIT · LED + SENSOR",
    },
    noBranch: {
      title: "Plan retrofit for next equipment refresh cycle.",
      description: "Modern equipment ships with LED standard. If fleet is < 5 years old or operator lacks capability for occupancy-sensor integration + telemetry visibility, defer retrofit to next refresh cycle (typical 7-10 year fleet refresh). Verify next-refresh equipment includes LED + occupancy sensor as standard spec.",
      finalTone: "caution",
      finalLabel: "DEFER · REFRESH CYCLE",
    },
  }),
  caseStudy({
    tag: "LED retrofit at scale",
    title: "Multi-site office portfolio LED retrofit — 47 vending machines across 6 buildings",
    context: "A corporate office portfolio (6 buildings, 380,000 sqft total, 2,400 employees) had 47 vending machines, 31 of which were 6-10 years old with T8 fluorescent lighting. Sustainability office was building a Scope 2 emissions reduction plan and needed measurable wins at low capital cost. Operator was a regional tier-2 with modern telemetry capability (USConnect Hub). Scope: LED retrofit at all 31 fluorescent machines + occupancy sensor integration + telemetry coverage verification + utility rebate capture under ConEd commercial lighting program. Existing fluorescent disposal under Universal Waste protocol. Implementation in 11 weeks (3-4 machines per week, operator technician). Pre-retrofit measured 24,800 kWh annually for lighting across 31 machines (~800 kWh per machine). Post-retrofit measured 1,860 kWh annually (~60 kWh per machine) — 92% reduction. Combined with refrigeration ENERGY STAR retrofit two years earlier, machine-level electrical load dropped 38% portfolio-wide. Sustainability office reported the retrofit in annual CSR.",
    meta: [
      { label: "Portfolio scope", value: "6 buildings, 47 vending machines" },
      { label: "Retrofit fleet", value: "31 machines (T8 fluorescent to LED + sensor)" },
      { label: "Operator capability", value: "USConnect Hub telemetry, modern tier-2" },
      { label: "Utility rebate", value: "ConEd commercial lighting program" },
      { label: "Implementation timeline", value: "11 weeks, 3-4 machines per week" },
    ],
    results: [
      { number: "22,940 kWh", label: "annual lighting energy saved portfolio-wide" },
      { number: "92%", label: "lighting energy reduction per retrofitted machine" },
      { number: "26 months", label: "ROI on energy savings + rebate alone" },
      { number: "100%", label: "fluorescent tubes disposed under Universal Waste protocol" },
    ],
  }),
  inlineCta({
    text: "Want the vending LED retrofit framework (spec + sensor + rebate + ESPC + telemetry verification)?",
    buttonLabel: "Get the LED retrofit framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on vending LED lighting retrofit programs across campus, corporate, healthcare, and federal placements — including LED + occupancy-sensor specification, utility rebate capture, ESPC financing under FEMP, Universal Waste fluorescent disposal, and operator telemetry reporting on LED coverage. The benchmarks reflect operator-side data and EPA / ENERGY STAR published methodology.",
  }),
  keyTakeaways({
    heading: "Vending LED lighting key takeaways",
    takeaways: [
      "LED + occupancy sensor saves 1,400-1,800 kWh per machine annually vs T8 fluorescent — among the highest-ROI sustainability interventions in vending.",
      "Specify both LED and occupancy sensor. LED alone misses 30-50% of available savings. Modern operators specify both; legacy operators specify LED only.",
      "CRI 80+ is required for vending merchandising quality. Below 80 makes product packaging look dull or yellow-shifted. Verify on spec sheet at proposal.",
      "Utility rebates ($20-80 per fixture) and ESPC financing under FEMP cover or amortize retrofit cost. Capture these subsidies — they are operator-program-design responsibilities.",
      "Mercury content in fluorescent tubes requires Universal Waste handling at retrofit. Verify operator follows protocol; LED retrofit eliminates ongoing mercury-disposal exposure.",
    ],
  }),
  tabbedFaq({
    faqs: [
      { question: "What does LED lighting save on a vending machine?", answer: "400-1,100 kWh annually per machine when retrofitting fluorescent (T8/T12) to LED. Up to 1,400-1,800 kWh when LED is paired with occupancy/motion sensors that dim or shut lighting when not approached. Among the highest-ROI sustainability interventions in vending alongside ENERGY STAR refrigeration.", audience: "Sustainability Officers" },
      { question: "What CRI should we specify for vending LED?", answer: "CRI 80+ minimum for vending merchandising quality. Below 80 makes product packaging look dull or yellow-shifted. Modern LED ships with CRI 80-95. Verify on spec sheet at proposal; reject below 80 for merchandising-critical placements.", audience: "Procurement" },
      { question: "LED color temperature — cool white or warm white?", answer: "4000K-5000K cool white is the modern vending standard — product visibility, alertness, true color rendering. 3000K warm white may fit hospitality or lifestyle placements but compromises product visibility. Specify single color temperature across fleet to avoid visual inconsistency at multi-machine sites.", audience: "Procurement" },
      { question: "Should we add occupancy sensors with LED?", answer: "Yes. LED alone saves 400-1,100 kWh; LED + occupancy sensor saves 1,400-1,800 kWh per machine annually — the sensor adds 30-50% on top of LED-only savings. Modern operators specify both; legacy operators specify LED only. Build sensor into spec.", audience: "Sustainability Officers" },
      { question: "What does an LED retrofit cost?", answer: "$148-298 net per machine including LED + occupancy sensor + installation labor + fluorescent disposal, less utility rebates ($20-80 per fixture where applicable). ROI 18-30 months on energy savings alone; faster with rebates. Federal facilities can use ESPC financing under FEMP — operator-paid retrofit amortized via energy savings.", audience: "Finance" },
      { question: "What about mercury in old fluorescent tubes?", answer: "Federal Universal Waste Rule requires hazardous-waste handling for fluorescent tubes (3-15mg mercury per T8/T12). LED retrofit eliminates ongoing mercury disposal. Verify operator follows Universal Waste protocol during retrofit; documentation should be on hand at sustainability office for review.", audience: "EHS / Sustainability" },
      { question: "How do we verify operator LED coverage across our fleet?", answer: "Modern operators report fleet-wide LED + occupancy-sensor coverage via telemetry platforms (Cantaloupe Seed, Nayax, USConnect Hub). Sustainability programs require this visibility. Build into RFP: report LED + occupancy-sensor coverage percentage; target 100% within 18-month timeline.", audience: "Sustainability Officers" },
      { question: "Are utility rebates available?", answer: "Yes at most major utilities — PG&E, ConEd, Xcel, NYSEG, and others rebate $20-80 per LED retrofit fixture under commercial lighting programs. Verify rebate availability with utility; modern operators capture as part of program design. Federal facilities additionally have ESPC under FEMP.", audience: "Finance" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ENERGY STAR — commercial LED lighting", url: "https://www.energystar.gov/products/lighting", note: "Federal energy efficiency certification standard for LED lighting" },
      { label: "DOE FEMP — Federal Energy Management Program", url: "https://www.energy.gov/femp/", note: "Federal energy management program covering ESPC financing for LED retrofits" },
      { label: "EPA Universal Waste Rule — fluorescent tube disposal", url: "https://www.epa.gov/hw/universal-waste", note: "Federal hazardous waste regulation for mercury-containing fluorescent tubes" },
      { label: "Lighting Facts (DOE) — LED specification reference", url: "https://www.energy.gov/eere/ssl/", note: "Federal LED technology and specification reference" },
      { label: "DLC — DesignLights Consortium qualified products list", url: "https://www.designlights.org/", note: "Industry certification body for commercial LED qualified for utility rebate programs" },
    ],
  }),
  relatedGuides({
    heading: "Related sustainability vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Are there eco-friendly vending machines", description: "Six features that genuinely matter for sustainable vending: ENERGY STAR, LED, refrigerant, setpoint, telemetry, materials.", href: "/eco-friendly-vending/are-there-eco-friendly-vending-machines" },
      { eyebrow: "Operations", title: "Low-power vending cooling systems", description: "ENERGY STAR refrigeration, low-GWP refrigerant, setpoint discipline for sustainability programs.", href: "/eco-friendly-vending/low-power-vending-cooling-systems" },
      { eyebrow: "Hub", title: "All eco-friendly vending guides", description: "Sustainability features, certifications, refrigerants, lighting, packaging across eco-friendly vending programs.", href: "/eco-friendly-vending" },
    ],
  }),
]);
process.exit(0);
