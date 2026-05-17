import { seedPost, tldr, statStrip, comparisonTable, specList, decisionTree, costBreakdown, tipCards, caseStudy, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("24-7-micro-market-vending", [
  tldr({
    heading: "How does a 24/7 micro-market vending program actually work — operations, access control, fresh-food, and shrinkage management round the clock?",
    paragraph:
      "A 24/7 micro-market vending program is an unmanned retail format that operates continuously through self-checkout kiosks, badge or card access, and operator-managed restock — the format that replaces a closed cafeteria at off-hours and replaces a closed vending corner during third-shift, weekend, and holiday coverage. Five operational pillars define a viable 24/7 micro-market: (1) self-checkout kiosk on a 24/7-monitored cashless platform (365 Retail Markets, Avanti Markets, Three Square Market, Smart Vending) — EMV chip, contactless tap, mobile wallet (Apple Pay, Google Pay), employee badge integration for subsidy programs, PCI DSS attestation, and remote diagnostics so payment hardware faults dispatch within 4 hours regardless of clock; (2) refrigerated case bank with daily-fresh assortment (salads, sandwiches, yogurts, prepared meals, fresh fruit) restocked once-daily during operator service window plus secondary mid-shift refresh at high-volume placements — HACCP-aligned cold-chain (under 41 degrees F per FDA Food Code) with temperature telemetry that alerts operator before product is unsafe; (3) access control matched to placement model — open-access (lobby placements with badge gating optional), employee-badge access for facility-controlled placements (manufacturing breakrooms, hospital staff areas), or 24/7-open with camera coverage for high-confidence sites; (4) shrinkage management combining CCTV at micro-market footprint (covering kiosk and high-value SKUs), printed signage (recorded by camera, payment required), tamper-evident packaging on high-value SKUs, scheduled inventory audits every 30 days reconciling sales to depleted stock, and shrinkage budget of 1.5-3.5 percent of revenue (vs 0.5-1 percent at staffed cafeteria); (5) telemetry-driven operations — cellular telemetry surfaces stockout alerts, refrigeration temperature drift, kiosk faults, door-ajar events, and tilt/impact alerts; operator dispatches within 4 hours on critical alerts (refrigeration, payment), within 24 hours on inventory. The 24/7 model works at workforces with continuous operations — manufacturing (24/7 shifts), hospitals (clinical staff), data centers, hotels (guest amenity), apartment complexes (resident amenity), university residence halls, and transit hubs. Revenue at well-utilized 24/7 micro-markets runs $5-25K monthly with assortment depth (200-500 SKUs) and fresh-food access driving 2-3x higher per-transaction value vs vending-corner equivalents. Operator capital $25-55K, operator-funded; employer/property typically pays $0 capital, possibly subsidizes employees ($15-30 per employee monthly typical), or earns commission (5-12 percent) at concession placements.",
    bullets: [
      { emphasis: "Five 24/7 pillars — kiosk + fresh-food + access control + shrinkage + telemetry:",
        text: "Self-checkout cashless kiosk on 24/7-monitored platform, refrigerated case bank with HACCP cold-chain, access control matched to placement, CCTV + signage + audits for shrinkage at 1.5-3.5 percent budget, and cellular telemetry with 4-hour critical-alert response." },
      { emphasis: "Fits continuous-operations workforces — manufacturing, healthcare, hospitality, residential:",
        text: "Workforce profile matters. 100+ on-site headcount across multiple shifts, OR resident/guest amenity at multi-family, hotel, residence hall, OR public concession at transit hub. Verify continuous-operations need before committing." },
      { emphasis: "Operator capital $25-55K; employer pays $0 typical:",
        text: "Operator funds equipment, kiosk, refrigerated cases, signage. Employer/property optionally subsidizes employees ($15-30 monthly typical) or earns commission (5-12 percent at concession). Workforce-experience investment with measurable utilization." },
    ],
  }),
  statStrip({
    heading: "24/7 micro-market vending benchmarks",
    stats: [
      { number: "$5-25K", label: "monthly revenue", sub: "at well-utilized 24/7 placements", accent: "green" },
      { number: "200-500", label: "SKUs across categories", sub: "vs 25-50 vending machine", accent: "blue" },
      { number: "1.5-3.5%", label: "shrinkage budget", sub: "vs 0.5-1% staffed cafeteria", accent: "orange" },
      { number: "4 hr", label: "critical-alert response", sub: "refrigeration + payment + tilt", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "24/7 micro-market vending vs alternatives — continuous-operations workforce coverage",
    sub: "Service-model comparison for off-hours, third-shift, weekend, and holiday coverage at continuous-operations workforces. Match scope to placement traffic and operational capability.",
    headers: ["Dimension", "Vending corner only", "Cafeteria (limited hours)", "24/7 micro-market"],
    rows: [
      ["Coverage window", "24/7 (constrained assortment)", "6am-7pm typical", "24/7 with fresh-food"],
      ["SKU assortment", "25-50 per machine", "Hot meals + grab-and-go", "200-500 SKUs across categories"],
      ["Fresh-food access", "Limited (AI cooler specialty)", "Hot meals during service", "Refrigerated case bank, daily restock"],
      ["Off-hours staffing", "None required", "Closed", "None required (unmanned)"],
      ["Capital model", "Operator capital $4-10K per machine", "Employer capital $200K+", "Operator capital $25-55K"],
      ["Shrinkage exposure", "Low (anti-theft enclosure)", "Low (staffed)", "1.5-3.5 percent budget"],
      ["Payment", "EMV + contactless + mobile wallet", "POS at register", "Self-checkout EMV + contactless + mobile wallet + badge"],
      ["Best fit workforce", "Under 100 employees, single-shift", "Large workforce, day-shift weighted", "100+ with continuous operations"],
      ["Monthly revenue range", "$600-2K per machine", "Service-revenue model", "$5-25K per 24/7 micro-market"],
    ],
  }),
  keyTakeaways({
    heading: "Key takeaways for HR, facilities, and operations leads",
    takeaways: [
      "24/7 micro-markets fit continuous-operations workforces — manufacturing third-shift, hospital clinical staff, hospitality guests, residence halls, transit concessions. Verify on-site headcount and shift pattern before committing.",
      "Operator capital $25-55K typical; employer/property pays $0 capital. Subsidy programs ($15-30 per employee monthly) or commission (5-12 percent at concession) are optional levers.",
      "Shrinkage budget 1.5-3.5 percent of revenue is workable with CCTV + signage + tamper-evident packaging + 30-day audits; exceeding 3.5 percent signals process gap (camera coverage, signage placement, audit cadence).",
      "Refrigeration telemetry with 4-hour critical-alert response is non-negotiable for fresh-food assortment — temperature drift over 5F for over 30 minutes risks FDA Food Code violation and customer health exposure.",
      "Coordinate with HR, facilities, IT (badge integration), and security (CCTV) at install scope. 24/7 operations require cross-functional ownership, not a single-stakeholder decision.",
    ],
  }),
  costBreakdown({
    heading: "24/7 micro-market vending program economics (300-employee continuous-operations facility)",
    sub: "Typical operator-funded 24/7 micro-market deployment economics for a 300-employee continuous-operations facility (manufacturing or healthcare) with employer subsidy. Operator carries equipment capital and operations.",
    items: [
      { label: "Operator equipment capital (operator-funded; employer pays $0)", amount: "$0", range: "Operator capital $30-50K for 400 sq ft 24/7 micro-market" },
      { label: "Operator monthly service (restock + telemetry + maintenance + cold-chain)", amount: "$0", range: "Bundled into commission/subsidy structure" },
      { label: "Employer subsidy at $18/employee × 300 employees", amount: "$5,400", range: "$15-30 per employee monthly typical range" },
      { label: "Operator commission revenue to employer (5-12%)", amount: "+$900-2,200", range: "Offsets subsidy partially at well-utilized deployment" },
      { label: "Net employer subsidy cost (post-commission)", amount: "$3,200-4,500", range: "$11-15 per employee monthly net" },
      { label: "Shrinkage cost (1.5-3.5 percent of revenue, operator-absorbed)", amount: "$150-700", range: "Operator carries shrinkage in commission model" },
      { label: "Equipment uptime SLA (operator-committed)", amount: "99%+", range: "Critical-alert response under 4 hours" },
    ],
    totalLabel: "Net employer cost per employee monthly (subsidy minus commission)",
    totalAmount: "$11-15 typical",
  }),
  specList({
    heading: "24/7 micro-market vending operational specifications",
    items: [
      { label: "Self-checkout cashless kiosk platform with 24/7 remote monitoring", value: "Operator platforms include 365 Retail Markets, Avanti Markets, Three Square Market, Smart Vending. EMV chip + contactless tap + mobile wallet (Apple Pay, Google Pay) + employee badge integration. PCI DSS attestation required. 24/7 remote diagnostics — payment hardware faults dispatch within 4 hours regardless of clock. Receipt printer or email option. Kiosk software updates pushed remotely; downtime under 30 minutes per update window." },
      { label: "Refrigerated case bank with HACCP-aligned cold-chain", value: "3-5 refrigerated cases typical (single-deck open-front for fresh-food merchandising + multi-deck beverage + undercounter prepared meals). Holding temperature under 41F per FDA Food Code 3-501.16. Temperature telemetry with 5-minute polling interval; operator alert at over 5F drift for over 30 minutes. Daily restock with FIFO rotation during operator service window. HACCP-aligned receiving and stocking protocols." },
      { label: "Daily-fresh assortment with date-code management", value: "Salads, sandwiches, yogurts, prepared meals, fresh fruit, breakfast options. Date-code labels per FDA Food Code 3-501.17 (24-hour or use-by). Operator pulls expired SKUs at daily restock; date-code audit at quarterly review. Specialty fresh-food providers (regional commissaries) preferred; operator-managed cold-chain integrates with delivery." },
      { label: "Assortment depth (200-500 SKUs across categories)", value: "Snacks (chips, crackers, nuts, energy bars, healthy options), beverages (cold drinks, sparkling water, energy drinks, premium juices, kombucha), fresh-prepared (salads, sandwiches, yogurts, prepared meals, fresh fruit), pantry basics (granola bars, oatmeal, peanut butter), breakfast options (overnight oats, yogurt parfaits, breakfast sandwiches), late-night snacks for third-shift. Healthy-share planogram aligned with HHS 50 percent / FITPICK 35 percent targets." },
      { label: "Access control matched to placement model", value: "Three patterns: open-access (lobby placements with self-service checkout, badge optional for subsidy), employee-badge access (facility-controlled placements; badge tap unlocks entry door or kiosk), 24/7-open with camera coverage (high-confidence sites with established trust). Coordinate with facility security and HR/IT on badge integration scope." },
      { label: "Shrinkage management — CCTV + signage + tamper-evident + audits", value: "CCTV at micro-market footprint covering kiosk and high-value SKUs (refrigerated cases, premium beverages). Printed signage at kiosk (recorded by camera, payment required). Tamper-evident packaging on high-value SKUs. Scheduled 30-day inventory audits reconciling sales to depleted stock. Shrinkage budget 1.5-3.5 percent of revenue; exceeding 3.5 percent triggers process review." },
      { label: "Cellular telemetry with critical-alert response", value: "Cellular telemetry (independent of facility Wi-Fi). Alerts: stockout, refrigeration drift, kiosk fault, door-ajar, tilt/impact, payment hardware reboot. Critical-alert response within 4 hours (refrigeration, payment, tilt). Inventory-alert response within 24 hours. Operator SOC monitors 24/7." },
      { label: "Daily restock cadence with mid-shift refresh option", value: "Daily restock during operator service window (typically morning, 5-9am or 7-11am). High-volume placements (over 500 daily transactions) add mid-shift refresh of refrigerated case top-up. Restock routes optimized via predicted-depletion software. Operator restocker is dedicated micro-market specialist, not general vending route." },
      { label: "Healthy-share planogram aligned with HHS 50 / FITPICK 35 targets", value: "Dietitian-validated planogram (where wellness commitment fits). End-cap visibility at entry sightline drives discovery. Quarterly planogram review with on-site dietitian and wellness committee. FDA Top 9 allergens labeled per FALCPA + FASTER Act. Gluten-free, vegan, kosher (OU/Star-K), halal (IFANCA), nut-free, dairy-free, diabetic-friendly options across SKU mix." },
      { label: "Subsidy program integration with HR/IT badge stack", value: "Employee badge integration with self-checkout kiosk enables subsidized payment programs. Employees tap badge at checkout; operator applies subsidy discount; employer is billed monthly for net subsidy amount. Coordinate with HR + IT + operator at install scope. Subsidy structure typically $15-30 per employee monthly." },
      { label: "Quarterly business review with utilization and amenity reporting", value: "Quarterly business review covering monthly utilization rate (badge transactions / employee population), assortment performance (top-selling SKUs, dead-stock candidates), healthy-share execution (HHS/FITPICK compliance), refrigeration telemetry health (drift events, response times), shrinkage performance, and employee feedback themes. Coordinates with HR + benefits + wellness committee on workforce-experience reporting." },
    ],
  }),
  decisionTree({
    heading: "Is a 24/7 micro-market vending program right for this workforce?",
    question: "Does this workforce have 100+ on-site headcount across multiple shifts OR resident/guest amenity scope at multi-family or hotel or residence hall OR public concession need at transit hub, with floor space (300-500 sq ft), facility willingness to host CCTV + cold-chain, and operator-side modern micro-market capability available in the region?",
    yesBranch: {
      title: "24/7 micro-market — continuous-operations coverage with fresh-food and amenity signaling",
      description: "Workforce/property profile supports 24/7 micro-market with refrigerated case bank, self-checkout kiosk, and assortment depth. Coordinate with operator on layout, refrigerated case selection, healthy-share planogram, employee badge subsidy integration with HR + IT, CCTV with facility security. Quarterly business review tracks utilization, healthy-share execution, refrigeration telemetry health, shrinkage performance.",
      finalTone: "go",
      finalLabel: "24/7 micro-market",
    },
    noBranch: {
      title: "Vending corner or alternative — match scope to workforce profile",
      description: "Smaller workforce (<100), single-shift pattern, no resident/guest amenity scope, or floor space under 200 sq ft — vending corner or AI cooler may fit appropriately. Combo vending machine at $4-10K operator capital with 25-50 SKU assortment covers 24/7 access at constrained but functional scope. Re-evaluate as workforce/property profile grows.",
      finalTone: "stop",
      finalLabel: "Vending alternative",
    },
  }),
  caseStudy({
    tag: "Capability scenario · 300-employee continuous-operations manufacturing facility",
    title: "24/7 micro-market vending serving third-shift at a 300-employee manufacturing facility",
    context: "Capability description for a 300-employee continuous-operations manufacturing facility with three shifts (day, swing, third). 24/7 micro-market deployment 400 sq ft, 280 SKUs across snacks/beverages/fresh/pantry/breakfast/late-night, refrigerated case bank with daily restock and HACCP-aligned cold-chain, dietitian-validated healthy-share planogram at 50 percent HHS target, employee badge integration with $18 monthly subsidy. CCTV at micro-market footprint coordinated with facility security; cellular telemetry on 100 percent of kiosk and case bank.",
    meta: [
      { label: "Headcount", value: "300 employees across 3 shifts" },
      { label: "Floor space", value: "400 sq ft micro-market" },
      { label: "Subsidy", value: "$18 per employee monthly via badge" },
      { label: "Healthy-share", value: "50 percent HHS target, dietitian validated" },
      { label: "Telemetry", value: "Cellular 100 percent + 4hr critical-alert SLA" },
    ],
    results: [
      { number: "60-90%", label: "monthly utilization target" },
      { number: "1.5-3.5%", label: "shrinkage budget envelope" },
      { number: "$5-15K", label: "monthly revenue target" },
      { number: "99%+", label: "kiosk + refrigeration uptime SLA" },
    ],
  }),
  tipCards({
    heading: "Six 24/7 micro-market vending mistakes",
    sub: "Documented in 24/7 micro-market post-implementation reviews. All preventable with operations, HR, facilities, and security coordination.",
    items: [
      { title: "Treating shrinkage as operator-only problem", body: "Shrinkage budget 1.5-3.5 percent is workable but requires CCTV coverage from facility security, signage placement coordinated with facility, audit cadence aligned with operator, and HR communication on payment expectation. Exceeding 3.5 percent signals process gap — review camera coverage, signage prominence, audit frequency, and badge-integration penetration. Don't escalate without root-cause review." },
      { title: "Underspecifying refrigerated case bank capacity", body: "Single small refrigerated case cannot rotate fresh-food assortment at 24/7 volume. Continuous-operations workforces eat across shifts — fresh-food refrigerated case bank with daily rotation requires 3-5 cases (single-deck open-front + multi-deck beverage + undercounter prepared meal). HACCP-aligned cold-chain integrates with daily restock route." },
      { title: "Skipping cellular telemetry on kiosk and refrigerated cases", body: "Cellular telemetry (independent of facility Wi-Fi) is the highest-ROI 24/7 investment. Refrigeration drift over 5F for over 30 minutes risks FDA Food Code violation and product loss. Payment hardware faults at 3am are invisible without telemetry until first-shift employee complains. Specify cellular telemetry on 100 percent of kiosk and case bank at proposal." },
      { title: "No mid-shift refresh at high-volume placements", body: "High-volume placements (over 500 daily transactions) deplete refrigerated cases by mid-shift; missing mid-shift refresh produces stockout on premium fresh-food SKUs at swing-shift traffic peak. Build mid-shift refresh into operator service contract at high-volume placements; verify on quarterly business review." },
      { title: "Missing third-shift late-night assortment", body: "Third-shift workers want different SKUs than day-shift — heavier comfort snacks, hot beverages with milk options, energy drinks, hearty breakfast at end-of-shift. Default day-shift planogram misses third-shift utilization. Coordinate planogram with operator on shift-pattern assortment; review quarterly with shift-supervisor input." },
      { title: "Skipping facility-security coordination on CCTV", body: "CCTV at micro-market footprint requires camera coverage of kiosk (signature recording) and high-value SKUs (refrigerated cases, premium beverages). Coordinate with facility security at install scope; some facilities require new camera installation, others extend existing coverage. Without CCTV, shrinkage budget exceeds 3.5 percent typical and operator escalates pricing or threatens contract." },
    ],
  }),
  inlineCta({
    text: "Want the 24/7 micro-market vending playbook — kiosk, refrigerated case bank, healthy-share, shrinkage, telemetry, and subsidy integration?",
    buttonLabel: "Get the 24/7 micro-market playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help continuous-operations workforces and multi-family/hospitality properties design 24/7 micro-market vending programs — including self-checkout cashless kiosks with EMV and contactless and mobile wallet and employee badge integration; refrigerated case banks with HACCP-aligned cold-chain and daily-fresh assortment; assortment depth across snacks and beverages and fresh-prepared and pantry and breakfast and late-night categories; dietitian-validated healthy-share planograms aligned with HHS and FITPICK targets; CCTV plus signage plus tamper-evident packaging plus 30-day audits for shrinkage management; cellular telemetry with 4-hour critical-alert response; and coordination with HR plus facilities plus IT plus security stakeholders. The benchmarks reflect operator-side data and continuous-operations workforce input.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What is a 24/7 micro-market vending program?", answer: "Unmanned retail format that operates continuously through self-checkout cashless kiosks, badge or card access, and operator-managed restock. Replaces a closed cafeteria at off-hours and replaces a closed vending corner during third-shift, weekend, and holiday coverage. Five operational pillars: self-checkout kiosk on 24/7-monitored platform, refrigerated case bank with HACCP cold-chain, access control matched to placement, shrinkage management with CCTV plus signage plus audits, and cellular telemetry with 4-hour critical-alert response.", audience: "Facilities" },
      { question: "What workforces does 24/7 micro-market vending fit?", answer: "Continuous-operations workforces with 100+ on-site headcount across multiple shifts — manufacturing third-shift, hospital clinical staff, data centers, hospitality guests, residence halls, transit concessions, apartment complexes. Verify on-site headcount, shift pattern, and floor space (300-500 sq ft) before committing. Smaller workforces or single-shift patterns fit combo vending at constrained but functional scope.", audience: "HR / Facilities" },
      { question: "How does shrinkage management work at 24/7 micro-markets?", answer: "Shrinkage budget 1.5-3.5 percent of revenue. Combines CCTV at micro-market footprint covering kiosk and high-value SKUs, printed signage (recorded by camera, payment required), tamper-evident packaging on high-value SKUs, scheduled 30-day inventory audits reconciling sales to depleted stock. Coordinate with facility security and operator. Exceeding 3.5 percent signals process gap.", audience: "Security" },
      { question: "What does it cost — employer capital and subsidy?", answer: "Operator capital $25-55K typical; employer pays $0 capital. Optional employer subsidy $15-30 per employee monthly via employee badge integration. Operator commission revenue (5-12 percent) partially offsets subsidy. Net employer cost $11-17 per employee monthly at well-utilized deployment. Workforce-experience investment with measurable utilization and engagement lift.", audience: "CFOs" },
      { question: "How does fresh-food work safely at 24/7 operations?", answer: "Refrigerated case bank with HACCP-aligned cold-chain — holding temperature under 41F per FDA Food Code 3-501.16. Temperature telemetry with 5-minute polling and alert at over 5F drift for over 30 minutes. Daily restock with FIFO rotation during operator service window. Date-code labels per FDA Food Code 3-501.17. Specialty fresh-food providers preferred; operator-managed cold-chain integrates with delivery.", audience: "Compliance" },
      { question: "Can third-shift get the same assortment as day-shift?", answer: "Yes, with planogram coordination. Third-shift workers want different SKUs than day-shift — heavier comfort snacks, hot beverages with milk options, energy drinks, hearty breakfast at end-of-shift. Coordinate planogram with operator on shift-pattern assortment; review quarterly with shift-supervisor input. Self-checkout kiosk and refrigerated case bank operate 24/7 without operator staffing.", audience: "Operations" },
      { question: "What about cleaning and maintenance at 24/7 placements?", answer: "Operator service window includes daily kiosk cleaning, refrigerated case cleaning, floor sweep, signage refresh. Quarterly preventive maintenance covers kiosk hardware, refrigeration compressor inspection, sensor calibration, payment hardware diagnostics. Operator dispatches under 4 hours on critical alerts (refrigeration, payment, tilt). Facility supports trash removal coordination.", audience: "Facilities" },
      { question: "How does badge integration enable subsidy?", answer: "Employee badge integration with self-checkout kiosk enables subsidized payment programs. Employees tap badge at checkout; operator applies subsidy discount; employer is billed monthly for net subsidy amount. Coordinate with HR + IT + operator at install scope. Operator platforms include 365 Retail Markets, Avanti Markets, Three Square Market with badge integration capability.", audience: "HR / IT" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FDA — Food Code 2022 (3-501.16 cold holding + 3-501.17 date marking)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code", note: "Federal food-safety guidance for fresh-food cold-chain and date-coding at micro-markets" },
      { label: "HHS — Health and Sustainability Guidelines for Federal Concessions and Vending", url: "https://www.gsa.gov/cdnstatic/Health_and_Sustainability_Guidelines_for_Federal_Concessions_and_Vending_Operations.pdf", note: "Federal healthy-share targets applied at 24/7 micro-market planograms" },
      { label: "FDA — Food Allergen Labeling and Consumer Protection Act (FALCPA) and FASTER Act", url: "https://www.fda.gov/food/food-allergensgluten-free-guidance-documents-regulatory-information/food-allergies", note: "Federal allergen labeling for packaged micro-market SKUs" },
      { label: "PCI Security Standards Council — PCI DSS", url: "https://www.pcisecuritystandards.org/", note: "Payment-card industry standard applied at self-checkout cashless kiosks" },
      { label: "NAMA — National Automatic Merchandising Association — micro-markets", url: "https://www.namanow.org/", note: "Industry association guidance on micro-market deployment and 24/7 operations" },
    ],
  }),
  relatedGuides({
    heading: "Related micro-market and 24/7 guides",
    items: [
      { eyebrow: "Sister guide", title: "Benefits of micro-markets for employees", description: "Six employee-benefit dimensions, engagement-score lift, healthy-share execution, and subsidy economics.", href: "/micro-market-services/benefits-of-micro-markets-for-employees" },
      { eyebrow: "Operations", title: "Inventory management in micro-markets", description: "Predicted-depletion software, FIFO rotation, date-code audits, and restock route optimization.", href: "/micro-market-services/inventory-management-in-micro-markets" },
      { eyebrow: "Hub", title: "All micro-market service guides", description: "Design, operations, healthy-share, employee experience, and program economics for micro-markets.", href: "/micro-market-services" },
    ],
  }),
]);
process.exit(0);
