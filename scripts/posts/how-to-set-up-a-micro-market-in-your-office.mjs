import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, timeline, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-set-up-a-micro-market-in-your-office", [
  tldr({
    heading: "How do you actually set up a micro-market in your office — from headcount threshold to kiosk install and operator launch?",
    paragraph:
      "Setting up a micro-market in your office is an end-to-end project with seven phases: (1) headcount + space qualification (50-75+ employees as economic floor; 150-300+ for full-format; 150-300 sq ft of contiguous floor space for full-format, 60-100 sq ft for compact-format); (2) operator selection (RFP scope covering planogram, payment stack, telemetry, kiosk technology, restock cadence, commission structure, ESG reporting); (3) site survey + electrical / data prep (dedicated 110V or 208V circuits for refrigerated cases, Cat6 or cellular telemetry for kiosk, dedicated IP for payment processor, lighting upgrade for grab-and-go shelving); (4) planogram design (400-800 SKU breadth across grab-and-go meals, fresh produce, healthy snacks, premium beverages, family pack-sizes, ice cream, frozen meals — calibrated to employee survey + demographic profile); (5) employee onboarding (badge integration with HR system, mobile app rollout, QR code signage, employee-survey kickoff); (6) launch event (kickoff with operator + facilities + HR + wellness team, freebie + sample-product strategy, first-30-day support); (7) 90-day calibration phase (telemetry-driven planogram refresh, employee feedback survey, shrink-rate monitoring, commission reconciliation, ESG report production). Modern operators integrate via HR badge system for employee-discount + payroll-deduction + closed-loop payment; legacy operators don't. Hosts setting up an office micro-market should run the RFP early (8-10 weeks before target launch), verify operator capability at proposal demo (touchscreen kiosk + mobile app + RFID-tagged checkout where applicable), specify ESG + ADA + ServSafe scope, and plan for a 90-day calibration phase before declaring program success.",
    bullets: [
      { emphasis: "Seven-phase setup project, 12-16 weeks end-to-end:",
        text: "Headcount + space qualification, operator selection, site prep, planogram, employee onboarding, launch, 90-day calibration. Run RFP 8-10 weeks before target launch." },
      { emphasis: "Economic floor is 50-75+ employees; full-format at 150-300+:",
        text: "Compact-format (60-100 sq ft) fits 50-150 employees with $30-50K capital. Full-format (150-300 sq ft) fits 150-300+ employees with $60-120K capital. Below floor, AI cooler outperforms per capital." },
      { emphasis: "Operator-capability gate is HR badge + kiosk + mobile app:",
        text: "Modern operators integrate via HR badge for employee-discount + payroll-deduction + closed-loop payment. Touchscreen kiosk + mobile app + RFID-tagged checkout. Legacy operators don't. Verify at proposal demo + RFP scope." },
    ],
  }),
  statStrip({
    heading: "Office micro-market setup benchmarks",
    stats: [
      { number: "50-75+", label: "headcount economic floor", sub: "for compact micro-market format", accent: "blue" },
      { number: "12-16 weeks", label: "end-to-end setup timeline", sub: "RFP through 90-day calibration", accent: "blue" },
      { number: "400-800", label: "SKU breadth at full-format", sub: "across grab-and-go + fresh + healthy + premium", accent: "blue" },
      { number: "1-3%", label: "shrink rate range", sub: "with camera + analytics + employee badge", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Compact vs full-format office micro-market",
    sub: "Match format to headcount + floor space + capital tier.",
    headers: ["Format", "Headcount fit", "Floor footprint", "SKU breadth", "Capital range"],
    rows: [
      ["Compact micro-market (1-2 coolers + kiosk)", "50-150 employees", "60-100 sq ft", "200-400 SKUs", "$30-50K"],
      ["Mid-format micro-market (2-3 coolers + open shelving + kiosk)", "150-300 employees", "100-180 sq ft", "300-600 SKUs", "$45-80K"],
      ["Full-format micro-market (3-4 coolers + open shelving + frozen + kiosk)", "300-500+ employees", "180-300 sq ft", "400-800 SKUs", "$60-120K"],
      ["Enterprise micro-market (multi-zone + multiple kiosks + commissary)", "500-1500+ employees", "300-600 sq ft", "600-1200+ SKUs", "$100-250K"],
      ["AI cooler alternative (1-2 units, sub-threshold)", "30-100 employees", "20-40 sq ft", "200-400 SKUs", "$15-35K"],
    ],
  }),
  costBreakdown({
    heading: "Office micro-market setup cost breakdown — mid-format at 200-employee office",
    sub: "Representative cost stack for a mid-format micro-market setup at a 200-employee office with HR badge integration and ESG reporting scope.",
    items: [
      { label: "Equipment capital (2-3 coolers + open shelving + kiosk)", amount: "$45,000-65,000", range: "Operator-funded under commission model, or owner-purchased" },
      { label: "Site prep — electrical, data, lighting, flooring", amount: "$3,500-8,500", range: "Dedicated circuits, Cat6 or cellular, lighting upgrade" },
      { label: "Operator setup fees — planogram design, kiosk config, badge integration", amount: "$2,500-6,000", range: "One-time professional services + HR badge sandbox testing" },
      { label: "Launch event + freebie / sample strategy", amount: "$800-2,500", range: "Sample product + signage + kickoff communication" },
      { label: "Monthly telemetry + portal subscription", amount: "$220-420", range: "Per-machine telemetry + operator dashboard + reporting" },
      { label: "Restock + service cadence (monthly)", amount: "$1,800-3,400", range: "2-3x / week restock + service tickets" },
      { label: "Commission to property / employer (% of net sales)", amount: "5-15%", range: "Typical commission range at office placement" },
    ],
    totalLabel: "Typical year-one all-in setup cost basis",
    totalAmount: "$55K-85K + ongoing operations",
  }),
  timeline({
    heading: "Office micro-market setup project timeline",
    sub: "Typical end-to-end project from RFP kickoff to 90-day calibration close at a 200-employee office.",
    howToName: "Office micro-market setup project",
    totalTime: "12-16 weeks",
    steps: [
      { label: "Week 1-2", title: "Headcount + space qualification + employee survey", description: "Confirm employee count, floor space availability, demographic profile (age, dietary preference, shift pattern). Kick off employee survey to capture SKU preference + format preference + budget tolerance. Verify HR willingness to integrate badge system." },
      { label: "Week 2-4", title: "RFP scope + operator selection", description: "Draft RFP covering format, planogram, payment stack, telemetry, kiosk, restock, commission, ESG, HR badge integration. Distribute to 3-5 operators. Evaluate proposals on capability + commission + reference + demo." },
      { label: "Week 4-6", title: "Operator contract + planogram design", description: "Award operator + sign MSA. Operator runs planogram design workshop with HR + wellness + facilities. SKU breadth aligned to employee survey + demographic profile + budget tolerance. Allergen + nutrition labeling scope captured." },
      { label: "Week 6-8", title: "Site survey + electrical / data / lighting prep", description: "Operator site survey for each cooler + kiosk placement. Dedicated 110V or 208V circuits for refrigerated cases, Cat6 or cellular for kiosk, dedicated IP for payment processor, lighting upgrade for grab-and-go shelving. Coordinate with facilities + IT." },
      { label: "Week 8-10", title: "Equipment install + HR badge integration", description: "Coolers + open shelving + kiosk + payment hardware install. HR badge integration with kiosk for employee-discount + payroll-deduction + closed-loop payment. Sandbox test before go-live. Verify ADA accessibility + PCI-DSS scope." },
      { label: "Week 10-12", title: "Initial planogram load + soft launch", description: "Operator loads initial planogram (200-600 SKUs depending on format). Soft launch with limited employee population for shake-out. Initial transaction testing + cold-chain verification + kiosk + mobile app usability check." },
      { label: "Week 12-13", title: "Full launch + kickoff event", description: "Full launch with kickoff event — operator + facilities + HR + wellness team. Freebie + sample-product strategy. First-30-day support from operator on-site. Employee feedback collection from day-1." },
      { label: "Week 13-16", title: "90-day calibration phase + planogram refresh", description: "Telemetry-driven planogram refresh based on actual dispense velocity. Employee feedback survey at 30-60-90 day mark. Shrink-rate monitoring + camera + analytics. Commission reconciliation + ESG report production. Close calibration phase + transition to steady-state operations." },
    ],
  }),
  specList({
    heading: "Office micro-market setup specifications",
    items: [
      { label: "Headcount + space qualification thresholds", value: "Economic floor at 50-75+ employees for compact-format (60-100 sq ft footprint, 200-400 SKU breadth, $30-50K capital). Full-format at 150-300+ employees (150-300 sq ft footprint, 400-800 SKU breadth, $60-120K capital). Below 50-employee floor, AI cooler outperforms per capital. Above 500+, multi-zone enterprise format with multiple kiosks." },
      { label: "Operator RFP scope", value: "Format (compact / mid / full / enterprise), planogram design (SKU breadth + allergen + healthy / wellness scope), payment stack (EMV / NFC / mobile / employee badge / payroll-deduction), telemetry (per-machine + per-cooler + per-SKU), kiosk technology (touchscreen + barcode + RFID where applicable), restock cadence (2-3x / week typical), commission structure (5-15% typical at office placement), ESG reporting (ENERGY STAR + low-GWP refrigerant + LCA), HR badge integration scope." },
      { label: "Site prep — electrical, data, lighting, flooring", value: "Dedicated 110V or 208V circuits for refrigerated cases (typically 20A circuit per cooler). Cat6 or cellular telemetry for kiosk + payment processor. Dedicated IP for payment processor (PCI-DSS scope). Lighting upgrade for grab-and-go shelving (3000-4000K, 750-1000 lumen / sq ft). Flooring rated for refrigerator weight + spill containment (industrial sheet vinyl or polished concrete typical)." },
      { label: "Planogram design at 400-800 SKU breadth", value: "Grab-and-go meals (sandwiches, salads, sushi, packaged meals, fruit cups, yogurt), fresh produce (whole fruit, pre-cut fruit, salad components), healthy snacks (protein bars, nut mixes, low-sugar options), premium beverages (cold-pressed juice, premium iced coffee + tea, sparkling water, energy drinks), family pack-sizes (multi-pack snacks, take-home meal kits), ice cream + frozen meals. Allergen + nutrition labeling per FDA scope. Calibrated to employee survey + demographic profile." },
      { label: "HR badge integration scope", value: "Closed-loop integration with HR badge system (ProCard, OneCard, vendor-specific badge). Supports employee discount (5-15% off typical), payroll-deduction (deducted from monthly pay), closed-loop payment (badge tapped at kiosk completes transaction). Modern operators integrate via API; legacy operators don't. Sandbox test before live cutover. PCI-DSS scope coordinated with HR badge system + payroll system." },
      { label: "Kiosk + mobile app + RFID-tagged checkout", value: "Touchscreen kiosk (10-22 inch) with barcode scanner + payment surface + ADA-compliant reach. Mobile app for employee scan-and-go (employee opens app, scans SKUs, completes purchase). RFID-tagged checkout at modern micro-markets (employee places basket on RFID pad, kiosk auto-detects + totals). Multiple checkout paths reduce queue + increase utilization." },
      { label: "Cold-chain telemetry + ServSafe + ADA + PCI-DSS scope", value: "Cold-chain telemetry with 15-minute deviation alert at refrigerated case (35-40F target). ServSafe-certified operator handling for fresh food. ADA accessibility (4.5:1 contrast, 48 inch max reach, Braille at payment, audio cue). PCI-DSS Level 1 / Level 2 payment compliance depending on transaction volume. Verify all four compliance dimensions at RFP." },
      { label: "90-day calibration phase planning", value: "Telemetry-driven planogram refresh based on actual dispense velocity per SKU + per day-of-week + per shift. Employee feedback survey at 30 / 60 / 90 day mark. Shrink-rate monitoring + camera + analytics. Commission reconciliation + telemetry-backed audit. ESG report production (ENERGY STAR + low-GWP + LCA). Close calibration phase + transition to steady-state with quarterly business review (QBR) cadence." },
      { label: "ESG / sustainability + wellness reporting scope", value: "ENERGY STAR refrigeration share, low-GWP refrigerant (R-290 hydrocarbon, GWP 3) share, packaging mix (recyclable / compostable share), truck-mile reduction via telemetry-driven routing, LCA reporting per machine. Wellness reporting: healthy SKU mix (calorie / sugar / sodium thresholds), employee participation rate, employee satisfaction survey trend. Feeds corporate ESG + wellness disclosure." },
    ],
  }),
  tipCards({
    heading: "Seven office micro-market setup mistakes to avoid",
    sub: "Documented across office micro-market deployments where setup phase fell short.",
    items: [
      { title: "Skipping headcount + space qualification", body: "Sub-threshold deployment (under 50 employees, under 60 sq ft) produces uneconomic operations + operator pull-out within 12-18 months. Confirm headcount + floor space + demographic profile before RFP. Below threshold, AI cooler outperforms per capital." },
      { title: "Running the RFP too late", body: "End-to-end setup runs 12-16 weeks. RFP must launch 8-10 weeks before target launch. Late RFP produces rushed proposal + operator selection compromise. Run RFP early; align with corporate budget cycle + facility renovation schedule." },
      { title: "Not specifying HR badge integration at RFP", body: "HR badge integration (employee discount + payroll-deduction + closed-loop payment) is the operator-capability gate. Modern operators integrate; legacy don't. If RFP doesn't specify, you get a stock operator without badge integration. Specify at RFP + verify at proposal demo." },
      { title: "Skipping the employee survey at planogram design", body: "Operator-generic planogram underperforms vs employee-survey-calibrated planogram by 20-35% on utilization. Run employee survey at week 1-2 (demographic, dietary preference, budget tolerance, SKU preference) and feed into planogram design at week 4-6." },
      { title: "Under-spec'ing site prep", body: "Dedicated circuits + Cat6 + dedicated payment IP + lighting upgrade are essential. Under-spec'ed site prep produces refrigeration failure, telemetry gap, PCI-DSS exposure, grab-and-go shelving readability gap. Site survey at week 6-8 must be thorough + facilities + IT coordinated." },
      { title: "Treating 90-day calibration as optional", body: "Initial planogram + commission structure + shrink rate are estimates. 90-day calibration phase surfaces actual dispense velocity, employee feedback, shrink rate, and commission reconciliation. Skipping calibration produces under-optimized program + operator-employer friction. Plan calibration + QBR cadence at MSA." },
      { title: "Not aligning with corporate ESG + wellness team", body: "Modern office micro-market feeds corporate ESG + wellness disclosure. Skipping ESG + wellness team alignment produces missed reporting scope (ENERGY STAR share, low-GWP refrigerant, healthy SKU mix, employee participation). Align at RFP scope + MSA + QBR cadence." },
    ],
  }),
  decisionTree({
    heading: "Should we set up a micro-market at this office?",
    question: "Does the office have 50+ employees AND 60+ sq ft of contiguous floor space AND HR willingness to integrate badge system AND a 12-16 week setup runway?",
    yesBranch: {
      title: "Office micro-market setup is a fit.",
      description: "Match format to headcount (compact at 50-150, mid at 150-300, full at 300-500+, enterprise at 500-1500+). Run RFP 8-10 weeks before target launch. Specify HR badge integration + ESG + ADA + ServSafe + PCI-DSS at RFP. Plan 90-day calibration phase + QBR cadence.",
      finalTone: "go",
      finalLabel: "SET UP MICRO-MARKET",
    },
    noBranch: {
      title: "Stay with AI cooler or revisit at scope expansion.",
      description: "Sub-threshold headcount, sub-threshold floor space, no HR badge integration capability, or sub-12-week runway — micro-market setup won't deploy successfully. Stay with AI cooler or smart cooler format + revisit at headcount or floor-space expansion.",
      finalTone: "stop",
      finalLabel: "AI COOLER FORMAT",
    },
  }),
  keyTakeaways({
    heading: "Office micro-market setup key takeaways",
    takeaways: [
      "Setup is a seven-phase project running 12-16 weeks end-to-end: headcount + space qualification, RFP + operator selection, site prep, planogram design, employee onboarding, launch event, and 90-day calibration.",
      "Economic floor is 50-75+ employees for compact-format, 150-300+ for full-format. Below 50, AI cooler outperforms per capital deployed.",
      "Operator capability gate is HR badge integration (employee discount + payroll-deduction + closed-loop payment) + touchscreen kiosk + mobile app + RFID-tagged checkout. Specify at RFP + verify at proposal demo.",
      "Site prep — dedicated electrical circuits, Cat6 or cellular telemetry, dedicated payment IP, lighting upgrade, rated flooring — is essential. Under-spec'ed prep produces refrigeration failure, telemetry gap, PCI-DSS exposure.",
      "90-day calibration phase is the difference between under-optimized program and steady-state success. Telemetry-driven planogram refresh, employee feedback, shrink-rate monitoring, ESG reporting all close in this phase.",
    ],
  }),
  inlineCta({
    text: "Want the office micro-market setup framework (headcount + RFP + site prep + HR badge + 90-day calibration)?",
    buttonLabel: "Get the setup framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on office micro-market setup across compact, mid-format, full-format, and enterprise scope — including headcount + space qualification, RFP scope (planogram, payment, telemetry, kiosk, commission, ESG, HR badge integration), site prep (electrical, data, lighting, flooring), planogram design at 400-800 SKU breadth, HR badge integration (employee discount + payroll-deduction + closed-loop payment), kiosk + mobile app + RFID-tagged checkout, cold-chain telemetry + ServSafe + ADA + PCI-DSS scope, launch event coordination, and 90-day calibration phase planning. The setup benchmarks reflect operator-side data across modern office micro-market deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the headcount floor for an office micro-market?", answer: "Economic floor is 50-75+ employees for compact-format (60-100 sq ft footprint, 200-400 SKU breadth, $30-50K capital). Full-format at 150-300+ employees. Below 50, AI cooler outperforms per capital deployed. Above 500+, multi-zone enterprise format with multiple kiosks. Verify headcount + space at week 1-2 of setup project.", audience: "HR / Facilities" },
      { question: "How long does setup take?", answer: "End-to-end setup runs 12-16 weeks across seven phases: headcount + space qualification (week 1-2), RFP + operator selection (week 2-4), planogram design (week 4-6), site prep (week 6-8), equipment install + HR badge integration (week 8-10), soft launch + full launch (week 10-13), 90-day calibration (week 13-16+).", audience: "Project Management" },
      { question: "What does an office micro-market cost?", answer: "Capital range $30-120K depending on format (compact $30-50K, mid $45-80K, full $60-120K). Site prep $3,500-8,500. Operator setup fees $2,500-6,000. Monthly operating cost (telemetry + restock + service) $2,000-4,000. Commission to property 5-15% of net sales typical at office placement. Operator-funded equipment under commission model is common.", audience: "Finance" },
      { question: "What HR badge integration scope is required?", answer: "Closed-loop integration with HR badge system (ProCard, OneCard, vendor-specific). Supports employee discount, payroll-deduction, closed-loop payment. Modern operators integrate via API; legacy operators don't. Sandbox test before live cutover. PCI-DSS scope coordinated with HR + payroll system. Specify at RFP + verify at proposal demo.", audience: "HR / Payroll" },
      { question: "What site prep is required?", answer: "Dedicated 110V or 208V circuits for refrigerated cases (20A per cooler typical). Cat6 or cellular telemetry for kiosk + payment processor. Dedicated IP for payment processor (PCI-DSS scope). Lighting upgrade for grab-and-go shelving (3000-4000K, 750-1000 lumen / sq ft). Flooring rated for refrigerator weight + spill containment. Site survey at week 6-8.", audience: "Facilities" },
      { question: "What planogram breadth fits an office micro-market?", answer: "200-400 SKUs at compact, 300-600 at mid, 400-800 at full, 600-1200+ at enterprise scope. Grab-and-go meals + fresh produce + healthy snacks + premium beverages + family pack-sizes + ice cream + frozen meals. Allergen + nutrition labeling per FDA scope. Calibrated to employee survey + demographic profile at planogram design phase.", audience: "Wellness / Marketing" },
      { question: "What's the 90-day calibration phase?", answer: "Post-launch phase running 90+ days to surface actual dispense velocity, employee feedback (at 30 / 60 / 90 day mark), shrink rate, commission reconciliation, ESG reporting. Telemetry-driven planogram refresh closes in this phase. Skipping calibration produces under-optimized program. Plan QBR cadence + transition to steady-state at week 16.", audience: "Operations" },
      { question: "How do we evaluate operator capability at RFP?", answer: "RFP scope: format (compact / mid / full / enterprise), planogram, payment stack (EMV / NFC / mobile / employee badge / payroll-deduction), telemetry, kiosk technology, restock cadence, commission structure, ESG reporting, HR badge integration. Demo of touchscreen kiosk + mobile app + RFID-tagged checkout where applicable. Reference checks at similar headcount + industry. PDAA / ServSafe / ENERGY STAR credentials.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association micro-market standards", url: "https://www.namanow.org/", note: "Industry trade association covering micro-market formats, planogram, telemetry, and operator standards" },
      { label: "FDA — fresh food labeling and refrigeration standards for micro-markets", url: "https://www.fda.gov/", note: "Federal food labeling and safety regulation underlying micro-market planogram and operations" },
      { label: "PCI Security Standards Council — PCI-DSS compliance for payment processing", url: "https://www.pcisecuritystandards.org/", note: "Payment industry security standard governing micro-market kiosk + mobile + HR badge payment integration" },
      { label: "ENERGY STAR — refrigeration efficiency standards", url: "https://www.energystar.gov/", note: "Federal energy efficiency standards underlying ENERGY STAR refrigerated case specification at micro-markets" },
      { label: "ServSafe — food handler certification standards", url: "https://www.servsafe.com/", note: "Industry food-safety certification underlying micro-market operator fresh-food handling competency" },
    ],
  }),
  relatedGuides({
    heading: "Related micro-market guides",
    items: [
      { eyebrow: "Sister guide", title: "Micro-market installation checklist", description: "Step-by-step install checklist covering site survey, electrical, data, and operator handoff.", href: "/micro-market-services/micro-market-installation-checklist" },
      { eyebrow: "Operations", title: "Inventory management in micro-markets", description: "SKU rotation, telemetry-driven restock, shrink prevention, and 90-day calibration phase.", href: "/micro-market-services/inventory-management-in-micro-markets" },
      { eyebrow: "Hub", title: "All micro-market services guides", description: "Equipment, planogram, kiosk, HR badge integration, and operator capability for micro-markets.", href: "/micro-market-services" },
    ],
  }),
]);
process.exit(0);
