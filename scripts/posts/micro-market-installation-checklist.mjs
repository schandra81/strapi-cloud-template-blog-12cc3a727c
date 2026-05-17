import { seedPost, tldr, statStrip, specList, tipCards, timeline, comparisonTable, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("micro-market-installation-checklist", [
  tldr({
    heading: "What's the actual install checklist for a modern micro-market — from site survey through operator handoff and go-live?",
    paragraph:
      "The micro-market install checklist is the operational discipline that converts an operator proposal into a working, code-compliant, telemetry-instrumented, ADA-accessible, PCI-DSS-compliant, ServSafe-ready installation. There are 12 sequential install phases: (1) site survey with operator + facilities + IT verifying floor space, ceiling height, electrical capacity, data connectivity, lighting, and ADA approach paths; (2) electrical work — dedicated 20A 110V circuits per refrigerated cooler, dedicated 20A 208V circuit for frozen unit, dedicated circuit for kiosk + payment processor, GFCI protection per NEC, neutral / ground audit; (3) data + network — Cat6 hardwire to kiosk + payment processor with dedicated IP for PCI-DSS scope, or cellular telemetry with redundant 4G / 5G fallback; (4) flooring + leveling — industrial sheet vinyl or polished concrete rated for cooler weight (350-500 lb per cooler) + spill containment, leveling within OEM tolerance for cooler operation; (5) lighting upgrade — 3000-4000K LED for grab-and-go shelving readability at 750-1000 lumen / sq ft, dimmable controls, emergency lighting compliance; (6) equipment delivery + placement — coolers + open shelving + frozen unit + kiosk staged per planogram, doorway clearance verified, freight elevator coordination at multi-floor; (7) kiosk + payment hardware install — touchscreen kiosk, barcode scanner, payment surface, employee badge reader where applicable, PCI-DSS sandbox + production cutover; (8) cold-chain commissioning — refrigerated case pre-cooled to 35-40F over 24-48 hours, frozen unit to -10F, telemetry-driven deviation alert testing; (9) planogram load + initial stocking — operator loads initial 200-800 SKU planogram per format, allergen + nutrition labels affixed per FDA scope, FIFO date-stamp applied; (10) HR badge integration + employee onboarding — closed-loop integration tested in sandbox, payroll-deduction sandbox validated, employee onboarding communication scheduled; (11) soft launch + transaction testing — limited employee population access for 5-7 days, transaction + payment + cold-chain + shrink baseline validated; (12) full launch + kickoff event — full employee population access, launch event with operator + facilities + HR + wellness team, freebie + sample-product strategy, first-30-day operator on-site support. Modern operators run all 12 phases as standard scope; legacy operators may skip cold-chain commissioning, PCI-DSS sandbox, or HR badge integration. Hosts running a micro-market install should require all 12 phases at MSA scope, document each phase with photo + sign-off, and plan a 90-day calibration phase post-launch.",
    bullets: [
      { emphasis: "12 sequential install phases from site survey through full launch:",
        text: "Site survey, electrical, data + network, flooring + leveling, lighting upgrade, equipment delivery + placement, kiosk + payment hardware, cold-chain commissioning, planogram load, HR badge integration, soft launch, full launch + kickoff." },
      { emphasis: "Each phase has compliance + documentation scope:",
        text: "NEC electrical, PCI-DSS payment, FDA fresh-food labeling, ADA accessibility, ServSafe food handling, ENERGY STAR refrigeration, OSHA workplace safety. Document each phase with photo + sign-off." },
      { emphasis: "Modern operators run all 12 phases as standard scope:",
        text: "Legacy operators may skip cold-chain commissioning, PCI-DSS sandbox, or HR badge integration. Require all 12 phases at MSA scope + verify at proposal demo." },
    ],
  }),
  statStrip({
    heading: "Micro-market installation benchmarks",
    stats: [
      { number: "12", label: "sequential install phases", sub: "from site survey through full launch", accent: "blue" },
      { number: "2-4 weeks", label: "install phase duration", sub: "from equipment delivery to full launch", accent: "blue" },
      { number: "20A", label: "dedicated circuit per cooler", sub: "110V refrigerated, 208V frozen", accent: "blue" },
      { number: "35-40F", label: "refrigerated case target", sub: "pre-cooled over 24-48 hours at commissioning", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Modern vs legacy micro-market install scope",
    sub: "Modern operators run all 12 phases as standard scope; legacy operators may skip critical phases.",
    headers: ["Phase", "Modern operator", "Legacy operator", "Risk if skipped"],
    rows: [
      ["Site survey with operator + facilities + IT", "Full multi-team scope", "Operator-only walk-through", "Missed electrical / data / accessibility gaps"],
      ["Electrical work — dedicated circuits + NEC", "Licensed electrician + NEC sign-off", "Plug-in to existing circuit", "Refrigeration failure + breaker trips"],
      ["Data + network — dedicated IP + PCI-DSS scope", "Cat6 hardwire + cellular fallback + PCI-DSS scope", "Shared Wi-Fi", "PCI-DSS exposure + payment failure"],
      ["Flooring + leveling rated for cooler weight", "Industrial-rated flooring + leveling verify", "Existing flooring + level check", "Cooler tilt + spill containment failure"],
      ["Lighting upgrade for grab-and-go readability", "3000-4000K LED + dimmable + lumen verify", "Existing lighting", "Reduced sell-through + employee dissatisfaction"],
      ["Cold-chain commissioning over 24-48 hours", "Pre-cool + telemetry-driven deviation alert test", "Power-on + first restock", "Fresh-food spoilage + FDA reporting risk"],
      ["PCI-DSS sandbox + production cutover", "Sandbox test + production validation", "Direct production install", "Payment failure + PCI-DSS audit exposure"],
      ["HR badge integration sandbox testing", "Sandbox test + payroll-deduction validation", "Skipped or post-launch", "Closed-loop payment failure + payroll dispute"],
      ["Soft launch + transaction testing", "Limited population access 5-7 days", "Skipped", "Hidden defect surfaces at full launch"],
      ["Full launch + kickoff event + first-30-day support", "Full team kickoff + on-site support", "Equipment handoff only", "Employee adoption gap + early-program churn"],
    ],
  }),
  timeline({
    heading: "Micro-market 12-phase install project",
    sub: "Sequential install phases running 2-4 weeks from equipment delivery to full launch + kickoff event.",
    howToName: "Micro-market 12-phase install project",
    totalTime: "2-4 weeks",
    steps: [
      { label: "Day 1-3", title: "Site survey with operator + facilities + IT", description: "Operator + facilities + IT joint site survey. Verify floor space (60-300 sq ft per format), ceiling height (8 ft minimum), electrical capacity, data connectivity, lighting, ADA approach paths. Document gaps + remediation plan with photo + sign-off." },
      { label: "Day 3-7", title: "Electrical work — NEC-compliant dedicated circuits", description: "Licensed electrician installs dedicated 20A 110V circuits per refrigerated cooler, dedicated 20A 208V circuit for frozen unit, dedicated circuit for kiosk + payment processor. GFCI protection per NEC. Neutral / ground audit. Inspector sign-off where required." },
      { label: "Day 5-8", title: "Data + network — PCI-DSS scope", description: "Cat6 hardwire run to kiosk + payment processor with dedicated IP for PCI-DSS scope. Cellular telemetry with 4G / 5G fallback for redundancy. Firewall rules + VLAN segmentation aligned with corporate IT. PCI-DSS scope documented." },
      { label: "Day 7-10", title: "Flooring + leveling + lighting upgrade", description: "Industrial sheet vinyl or polished concrete rated for cooler weight (350-500 lb per cooler) + spill containment. Leveling within OEM tolerance. Lighting upgrade to 3000-4000K LED at 750-1000 lumen / sq ft for grab-and-go shelving readability. Dimmable controls + emergency lighting verification." },
      { label: "Day 10-12", title: "Equipment delivery + placement", description: "Coolers + open shelving + frozen unit + kiosk staged per planogram. Doorway clearance (36 inch minimum) verified. Freight elevator coordination at multi-floor placements. Anti-tip + anchor where required by OSHA + facility seismic code." },
      { label: "Day 12-14", title: "Kiosk + payment hardware install + PCI-DSS sandbox", description: "Touchscreen kiosk, barcode scanner, payment surface, employee badge reader where applicable. PCI-DSS sandbox testing. Production cutover after sandbox validation. Tokenization + encryption verified end-to-end." },
      { label: "Day 14-16", title: "Cold-chain commissioning over 24-48 hours", description: "Refrigerated case pre-cooled to 35-40F over 24-48 hours. Frozen unit to -10F. Telemetry-driven 15-minute deviation alert testing. Door-open + power-loss scenario testing. ServSafe operator handling staff briefed on cold-chain protocol." },
      { label: "Day 16-18", title: "Planogram load + initial stocking", description: "Operator loads initial planogram (200-800 SKUs depending on format). Allergen + nutrition labels affixed per FDA scope. FIFO date-stamp applied to fresh-food SKUs. Per-SKU inventory entered into operator dashboard. Camera placement verified." },
      { label: "Day 18-20", title: "HR badge integration + employee onboarding", description: "Closed-loop integration with HR badge system tested in sandbox. Payroll-deduction sandbox validated with HR + payroll team. Employee onboarding communication scheduled (email + intranet + signage + kickoff event invitation). PCI-DSS scope confirmed end-to-end." },
      { label: "Day 20-25", title: "Soft launch + transaction testing 5-7 days", description: "Limited employee population (10-20% of full headcount) access for 5-7 days. Transaction + payment + cold-chain + shrink baseline validated. Hidden defects surfaced + remediated before full launch. Employee feedback collection from day-1 of soft launch." },
      { label: "Day 25-28", title: "Full launch + kickoff event + freebie strategy", description: "Full employee population access. Kickoff event with operator + facilities + HR + wellness team. Freebie + sample-product strategy. First-30-day operator on-site support. Employee feedback collection from day-1 of full launch." },
      { label: "Day 28+", title: "Transition to 90-day calibration phase", description: "Transition from install phase to 90-day calibration phase. Telemetry-driven planogram refresh, employee survey at 30 / 60 / 90 day mark, shrink-rate monitoring, commission reconciliation, ESG report production. QBR cadence established for steady-state operations." },
    ],
  }),
  specList({
    heading: "Micro-market install checklist specifications",
    items: [
      { label: "Site survey scope (Phase 1)", value: "Operator + facilities + IT joint site survey. Verify floor space (60-300 sq ft per format), ceiling height (8 ft minimum), electrical capacity (panel + breaker headroom), data connectivity (Cat6 / cellular), lighting (3000-4000K, 750-1000 lumen / sq ft), ADA approach paths (36 inch clear path + 48 inch reach), freight elevator capacity at multi-floor, ServSafe + FDA + PCI-DSS + OSHA compliance scope. Document gaps + remediation plan with photo + sign-off." },
      { label: "Electrical work scope (Phase 2)", value: "Licensed electrician installs dedicated 20A 110V circuits per refrigerated cooler, dedicated 20A 208V circuit for frozen unit, dedicated circuit for kiosk + payment processor. GFCI protection per NEC 210.8. Neutral / ground audit per NEC 250. Inspector sign-off where required by AHJ. Document panel schedule + circuit labeling + photo." },
      { label: "Data + network scope (Phase 3)", value: "Cat6 hardwire run to kiosk + payment processor with dedicated IP for PCI-DSS scope. Cellular telemetry with 4G / 5G fallback for redundancy. Firewall rules + VLAN segmentation aligned with corporate IT. PCI-DSS scope documented (in-scope vs out-of-scope segments). Modern operators provide cellular telemetry independent of corporate Wi-Fi." },
      { label: "Flooring + leveling scope (Phase 4)", value: "Industrial sheet vinyl, polished concrete, or epoxy-coated concrete rated for cooler weight (350-500 lb per cooler) + spill containment. Leveling within OEM tolerance (typically 1/4 inch over 4 ft span). Coved base or spill threshold at refrigerated case perimeter. Anti-slip rating per OSHA standard. Document with photo + sign-off." },
      { label: "Lighting upgrade scope (Phase 5)", value: "3000-4000K LED for grab-and-go shelving readability at 750-1000 lumen / sq ft. Dimmable controls for energy management + circadian alignment. Emergency lighting compliance per NFPA 101. Color rendering index (CRI) 80+ for accurate fresh-food color presentation. Document fixture schedule + sign-off." },
      { label: "Equipment delivery + placement scope (Phase 6)", value: "Coolers + open shelving + frozen unit + kiosk staged per planogram. Doorway clearance (36 inch minimum + 90 degree pivot capacity) verified. Freight elevator coordination at multi-floor placements. Anti-tip + anchor where required by OSHA + facility seismic code. Document placement with photo + planogram overlay + sign-off." },
      { label: "Kiosk + payment hardware install (Phase 7)", value: "Touchscreen kiosk (10-22 inch), barcode scanner, payment surface, employee badge reader where applicable. PCI-DSS sandbox testing prior to production cutover. Tokenization + encryption verified end-to-end. ADA accessibility verified (4.5:1 contrast, 48 inch reach, Braille at payment, audio cue). Document with photo + transaction test log." },
      { label: "Cold-chain commissioning (Phase 8)", value: "Refrigerated case pre-cooled to 35-40F over 24-48 hours. Frozen unit to -10F. Telemetry-driven 15-minute deviation alert testing. Door-open + power-loss scenario testing. ServSafe operator handling staff briefed on cold-chain protocol. Document temperature curve + alert test log + sign-off." },
      { label: "Planogram load + HR badge + soft launch + full launch (Phases 9-12)", value: "Phase 9: Initial planogram (200-800 SKUs) loaded, allergen + nutrition labels affixed per FDA, FIFO date-stamp applied. Phase 10: HR badge integration sandbox tested, payroll-deduction validated, employee onboarding communication scheduled. Phase 11: Soft launch 5-7 days with limited employee population. Phase 12: Full launch + kickoff event + first-30-day operator on-site support + transition to 90-day calibration." },
    ],
  }),
  tipCards({
    heading: "Seven micro-market install mistakes to avoid",
    sub: "Documented across micro-market install projects where one or more phases fell short.",
    items: [
      { title: "Skipping the joint operator + facilities + IT site survey", body: "Operator-only walk-through misses electrical capacity gaps, IT / PCI-DSS scope, ADA accessibility gaps, freight elevator coordination. Joint multi-team site survey at Phase 1 surfaces gaps early + remediation plan with photo + sign-off." },
      { title: "Plugging into existing circuit instead of dedicated", body: "Refrigerated cooler + frozen unit + kiosk each require dedicated circuits per NEC 210. Plug-in to existing shared circuit produces breaker trips, refrigeration failure, and fresh-food spoilage. Specify licensed electrician + NEC sign-off at Phase 2." },
      { title: "Using shared Wi-Fi instead of dedicated payment IP", body: "PCI-DSS scope requires dedicated IP for payment processor with VLAN segmentation. Shared Wi-Fi exposes payment hardware to broader network + PCI-DSS audit risk. Specify Cat6 hardwire + cellular fallback + PCI-DSS scope documentation at Phase 3." },
      { title: "Skipping cold-chain commissioning over 24-48 hours", body: "Refrigerated case requires 24-48 hours pre-cool to 35-40F + telemetry deviation alert testing. Power-on and first-restock without commissioning produces fresh-food spoilage + FDA reporting risk + employee dissatisfaction. Specify cold-chain commissioning at Phase 8." },
      { title: "Direct production PCI-DSS install without sandbox", body: "PCI-DSS sandbox testing prior to production cutover validates tokenization + encryption + transaction flow end-to-end. Direct production install produces payment failure + PCI-DSS audit exposure + employee transaction frustration. Specify PCI-DSS sandbox at Phase 7." },
      { title: "Skipping HR badge integration sandbox testing", body: "HR badge integration sandbox tests closed-loop payment + payroll-deduction + employee discount flow end-to-end. Skipping sandbox produces closed-loop payment failure at launch + payroll-deduction disputes. Specify HR badge integration sandbox at Phase 10." },
      { title: "Skipping soft launch + going straight to full launch", body: "Soft launch (5-7 days, 10-20% of full headcount) surfaces hidden defects before full launch. Skipping soft launch produces full-launch defects that affect all employees + erode early-program adoption. Specify soft launch at Phase 11." },
    ],
  }),
  keyTakeaways({
    heading: "Micro-market install checklist key takeaways",
    takeaways: [
      "12 sequential install phases run 2-4 weeks from equipment delivery to full launch + kickoff event: site survey, electrical, data + network, flooring + leveling, lighting upgrade, equipment delivery + placement, kiosk + payment hardware, cold-chain commissioning, planogram load, HR badge integration, soft launch, full launch.",
      "Each phase has compliance + documentation scope — NEC electrical, PCI-DSS payment, FDA fresh-food labeling, ADA accessibility, ServSafe food handling, ENERGY STAR refrigeration, OSHA workplace safety. Document each phase with photo + sign-off.",
      "Modern operators run all 12 phases as standard scope. Legacy operators may skip cold-chain commissioning, PCI-DSS sandbox, or HR badge integration — require all 12 at MSA scope + verify at proposal demo.",
      "Cold-chain commissioning over 24-48 hours is non-negotiable for fresh-food micro-market. Pre-cool to 35-40F + telemetry deviation alert testing before planogram load.",
      "Soft launch (5-7 days, 10-20% of full headcount) surfaces hidden defects before full launch. Skipping soft launch produces full-launch defects affecting all employees.",
    ],
  }),
  inlineCta({
    text: "Want the 12-phase micro-market install checklist (site survey + electrical + data + cold-chain + PCI-DSS + HR badge + soft launch)?",
    buttonLabel: "Get the install checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on micro-market installation across compact, mid-format, full-format, and enterprise scope — including 12-phase install discipline (site survey, NEC-compliant electrical, PCI-DSS-scoped data + network, industrial-rated flooring + leveling, lighting upgrade, equipment delivery + placement, kiosk + payment hardware install, cold-chain commissioning over 24-48 hours, planogram load + FDA labeling, HR badge integration sandbox testing, soft launch + transaction testing, full launch + kickoff event), compliance scope alignment (NEC, PCI-DSS, FDA, ADA, ServSafe, ENERGY STAR, OSHA), and transition to 90-day calibration phase. The install benchmarks reflect operator-side data across modern micro-market install projects.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What are the 12 micro-market install phases?", answer: "Site survey, electrical, data + network, flooring + leveling, lighting upgrade, equipment delivery + placement, kiosk + payment hardware, cold-chain commissioning, planogram load, HR badge integration, soft launch, full launch + kickoff event. Each phase has compliance + documentation scope. Modern operators run all 12 as standard.", audience: "Project Management" },
      { question: "How long does install take?", answer: "Install phase runs 2-4 weeks from equipment delivery to full launch + kickoff event. Sequential phasing — site survey (day 1-3), electrical (day 3-7), data + network (day 5-8), flooring + leveling + lighting (day 7-10), equipment delivery (day 10-12), kiosk + payment (day 12-14), cold-chain commissioning (day 14-16), planogram (day 16-18), HR badge (day 18-20), soft launch (day 20-25), full launch (day 25-28).", audience: "Scheduling" },
      { question: "What electrical work is required?", answer: "Licensed electrician installs dedicated 20A 110V circuits per refrigerated cooler, dedicated 20A 208V circuit for frozen unit, dedicated circuit for kiosk + payment processor. GFCI protection per NEC 210.8. Neutral / ground audit per NEC 250. Inspector sign-off where required by AHJ. Document panel schedule + photo.", audience: "Electrical" },
      { question: "What's the cold-chain commissioning protocol?", answer: "Refrigerated case pre-cooled to 35-40F over 24-48 hours. Frozen unit to -10F. Telemetry-driven 15-minute deviation alert testing. Door-open + power-loss scenario testing. ServSafe operator handling staff briefed on cold-chain protocol. Document temperature curve + alert test log + sign-off.", audience: "Food Safety" },
      { question: "What PCI-DSS scope applies at install?", answer: "Cat6 hardwire to payment processor with dedicated IP. VLAN segmentation. PCI-DSS sandbox testing prior to production cutover. Tokenization + encryption verified end-to-end. Specify at Phase 3 (data + network) + Phase 7 (kiosk + payment hardware install). Modern operators provide; legacy may use shared Wi-Fi (PCI-DSS exposure).", audience: "Payment Compliance" },
      { question: "Why does soft launch matter?", answer: "Soft launch (5-7 days, 10-20% of full headcount) surfaces hidden defects before full launch. Transaction + payment + cold-chain + shrink baseline validated. Hidden defects surfaced + remediated before full launch. Skipping soft launch produces full-launch defects affecting all employees + erodes early-program adoption.", audience: "Quality Assurance" },
      { question: "What documentation is required per phase?", answer: "Each phase requires photo + sign-off documentation. Site survey: gaps + remediation plan. Electrical: panel schedule + inspector sign-off. Data + network: PCI-DSS scope. Cold-chain: temperature curve + alert test log. Planogram: SKU load + label verification. Soft + full launch: transaction test log + employee feedback. Modern operators provide; specify at MSA scope.", audience: "Compliance" },
      { question: "How does install connect to the 90-day calibration phase?", answer: "Full launch (Phase 12) transitions to 90-day calibration phase. Telemetry-driven planogram refresh, employee survey at 30 / 60 / 90 day mark, shrink-rate monitoring, commission reconciliation, ESG report production. QBR cadence established for steady-state operations. Plan calibration + QBR cadence at MSA prior to install kickoff.", audience: "Operations" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code electrical install standards", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing dedicated circuit specification + GFCI + neutral / ground audit at micro-market install" },
      { label: "PCI Security Standards Council — PCI-DSS install scope", url: "https://www.pcisecuritystandards.org/", note: "Payment industry security standard governing PCI-DSS sandbox + production cutover scope at micro-market kiosk install" },
      { label: "FDA — fresh food labeling and refrigeration standards", url: "https://www.fda.gov/food/", note: "Federal food safety standard governing cold-chain commissioning and planogram FDA labeling at micro-market install" },
      { label: "ADA — accessibility install standards", url: "https://www.ada.gov/", note: "Federal accessibility standards covering ADA approach paths, 48 inch reach, Braille, audio cue at kiosk install" },
      { label: "ServSafe — food handler certification standards", url: "https://www.servsafe.com/", note: "Industry food-safety certification underlying ServSafe operator handling competency at cold-chain commissioning" },
    ],
  }),
  relatedGuides({
    heading: "Related micro-market guides",
    items: [
      { eyebrow: "Sister guide", title: "How to set up a micro-market in your office", description: "End-to-end setup project from RFP to 90-day calibration phase.", href: "/micro-market-services/how-to-set-up-a-micro-market-in-your-office" },
      { eyebrow: "Operations", title: "Inventory management in micro-markets", description: "Telemetry-driven restock, cold-chain integrity, FIFO rotation, shrink prevention, planogram refresh.", href: "/micro-market-services/inventory-management-in-micro-markets" },
      { eyebrow: "Hub", title: "All micro-market services guides", description: "Equipment, planogram, kiosk, HR badge integration, and operator capability for micro-markets.", href: "/micro-market-services" },
    ],
  }),
]);
process.exit(0);
