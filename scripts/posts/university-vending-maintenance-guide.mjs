import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("university-vending-maintenance-guide", [
  tldr({
    heading: "How should university vending be maintained — and what does the operator owe the campus?",
    paragraph:
      "University vending maintenance is the operator's responsibility under standard commission contracts, but the practice quality varies dramatically and directly affects the student experience. Best-in-class operators run preventive maintenance on documented schedules (monthly mechanical inspection, quarterly refrigeration service, annual deep clean) plus responsive service (24-48 hour response to faults). The maintenance dimensions: mechanical (coils, springs, motors, dispensers), refrigeration (compressors, evaporators, condensate drains), payment hardware (EMV readers, cashless boards, NFC antennas), telemetry/connectivity (cellular boards, antennas), and cosmetic (chassis, glass, signage, lighting). Operators with telemetry-driven fault detection catch issues before student complaints; operators without telemetry react after the fact. Campuses should require: documented preventive maintenance schedule per machine, service SLA in contract (24-48 hour response), telemetry-driven fault detection, monthly maintenance reporting to auxiliary services, and quarterly machine condition audit. Operators that resist these requirements are tier-3 quality and unsuitable for campus contracts.",
    bullets: [
      { emphasis: "Preventive maintenance schedule documented per machine:", text: "Monthly mechanical inspection, quarterly refrigeration service, annual deep clean. Best-in-class operators track in CMMS; worst-in-class clean on memory." },
      { emphasis: "Service SLA 24-48 hour response:", text: "Built into contract with performance bonus/penalty. Telemetry-driven fault detection enables faster response. Verify operator capability at RFP." },
      { emphasis: "Monthly reporting + quarterly audit:", text: "Operator provides maintenance reports monthly; auxiliary services audits machine condition quarterly. Catches drift from quality standards before student complaints." },
    ],
  }),
  statStrip({
    heading: "University vending maintenance benchmarks",
    stats: [
      { number: "Monthly", label: "mechanical inspection", sub: "preventive maintenance baseline", accent: "blue" },
      { number: "24-48 hr", label: "service SLA target", sub: "best-in-class", accent: "blue" },
      { number: "Quarterly", label: "refrigeration service", sub: "coil cleaning, drain check", accent: "blue" },
      { number: "Annual", label: "deep clean + calibration", sub: "complete machine maintenance", accent: "blue" },
    ],
  }),
  timeline({
    heading: "University vending maintenance cycle — full annual",
    sub: "Maintenance cadence across mechanical, refrigeration, payment hardware, telemetry, and cosmetic dimensions. Best-in-class operators document each cycle.",
    howToName: "Maintain a campus vending machine annually",
    totalTime: "Ongoing throughout academic year",
    steps: [
      { title: "Per route stop (weekly)", description: "Exterior cleaning, payment hardware inspection, telemetry status check, light cosmetic touch-up. Driver handles at restock. 5-10 min per machine.", duration: "5-10 min" },
      { title: "Monthly mechanical inspection", description: "Helical coil inspection, motor and dispenser function check, jam clearing, interior cleaning, payment hardware deeper inspection. Operator route handles. 15-25 min per machine.", duration: "15-25 min" },
      { title: "Quarterly refrigeration service", description: "Compressor coil cleaning, condensate drain check, evaporator inspection, setpoint verification, refrigerant level check (HVAC-certified). 30-45 min per machine.", duration: "30-45 min" },
      { title: "Quarterly cosmetic refresh", description: "Glass cleaning (interior + exterior deep), signage refresh, lighting check, chassis touch-up. 15-30 min per machine.", duration: "15-30 min" },
      { title: "Annual deep clean", description: "Complete machine breakdown. Coil chemical cleaning. Payment hardware firmware update. Mechanical lubrication. Calibration. Some operators schedule overnight or during break periods. 2-4 hr per machine.", duration: "2-4 hr" },
      { title: "Telemetry-driven service response", description: "Fault detection via telemetry triggers service ticket. Response within 24-48 hours for non-parts issues; 5-7 days with parts. Telemetry-driven prioritization essential.", duration: "As needed" },
    ],
  }),
  comparisonTable({
    heading: "University vending maintenance — best vs worst operators",
    sub: "Practice quality varies dramatically between operators. Best-in-class meets all dimensions; worst-in-class meets few.",
    headers: ["Dimension", "Best-in-class operators", "Worst-in-class operators"],
    rows: [
      ["Preventive maintenance schedule", "Documented per machine in CMMS", "On operator memory; missed cycles"],
      ["Service SLA", "24-48 hour response, contractual", "No SLA; days or weeks to respond"],
      ["Telemetry-driven fault detection", "Proactive — catches issues before complaints", "Reactive — responds after student complaints"],
      ["Cleaning cadence", "Weekly exterior + monthly interior + quarterly coil", "Inconsistent / irregular"],
      ["Refrigeration service", "Quarterly with documentation", "Annual or as-needed (often after failure)"],
      ["Payment hardware maintenance", "Monthly inspection + firmware updates", "Reactive (after failure)"],
      ["Monthly reporting to auxiliary services", "Detailed per-machine reports", "None or aggregate-only"],
      ["Quarterly machine audit", "Coordinated with auxiliary services", "Doesn't happen"],
    ],
  }),
  specList({
    heading: "University vending maintenance specifications",
    items: [
      { label: "Preventive maintenance schedule per machine", value: "Operator documents preventive maintenance per machine in CMMS: monthly mechanical inspection, quarterly refrigeration service, quarterly cosmetic refresh, annual deep clean. Each cycle logged with date, technician, findings. Audit trail for auxiliary services review." },
      { label: "Service SLA (24-48 hour response)", value: "Built into contract with measurable target. 24-48 hour acknowledgement; 5-7 days resolution with parts back-order communicated. Tied to performance bonus/penalty structure. Verify operator capability at RFP." },
      { label: "Telemetry-driven fault detection", value: "Real-time telemetry alerts on: failed-vend patterns, refrigeration faults, payment hardware errors, telemetry connectivity drops, unexpected access events. Operator SOC investigates anomalies. Proactive — catches issues before student complaints." },
      { label: "Monthly maintenance reporting", value: "Operator provides monthly per-machine maintenance summary: cycles completed, faults detected, faults resolved, parts replaced, telemetry uptime. Pre-formatted for auxiliary services review. Identifies machines drifting from schedule." },
      { label: "Quarterly machine condition audit", value: "Auxiliary services + operator quarterly walk-through of campus machines. Visual inspection: exterior cleanliness, payment hardware condition, signage currency, refrigeration performance. Identifies cosmetic and operational drift before student complaints." },
      { label: "Parts inventory + lead times", value: "Operator maintains parts inventory aligned with campus fleet model mix. Common parts (coils, motors, payment hardware components) on truck or 24-hour delivery. Specialty parts (refrigeration components) 5-7 day lead time. Document in contract." },
      { label: "Equipment refresh cycle", value: "10-15 year equipment lifecycle. Operator identifies oldest 10% of fleet annually; prioritizes for refresh. Coordinate with auxiliary services on capital plan. ENERGY STAR-current specification at refresh." },
      { label: "Cleaning protocols (CDC + FDA aligned)", value: "Food-safe sanitizer (EPA-registered). Daily cleaning of high-touch surfaces at high-traffic placements. Documented cleaning per machine in CMMS. Aligns with broader campus health and safety protocols." },
      { label: "Accessibility verification", value: "Annual ADA compliance verification — reach standards, audio output, screen-reader compatibility, tactile cues. Section 504 alignment. Document compliance for accessibility office review." },
    ],
  }),
  tipCards({
    heading: "Five university vending maintenance mistakes",
    sub: "Each is documented in campus auxiliary services post-contract reviews. All preventable with structured maintenance program.",
    items: [
      { title: "No preventive maintenance schedule documented", body: "Operators that clean on memory miss cycles, drift from quality standards, and produce student complaints. Documented preventive maintenance per machine in CMMS is modern best practice. Build into operator contract; verify CMMS capability at RFP." },
      { title: "No service SLA in contract", body: "'We respond quickly' isn't enforceable. Require 24-48 hour acknowledgment, 5-7 day resolution, with parts back-order communication. Tie to performance bonus or penalty structure. Operators welcome SLA clauses; legacy operators resist." },
      { title: "No telemetry-driven fault detection", body: "Operators without telemetry react to student complaints; operators with telemetry catch issues before complaints. Operators without telemetry can't credibly serve modern campus contracts. Hard RFP requirement." },
      { title: "No monthly reporting", body: "Without operator reporting, auxiliary services can't verify maintenance performance or identify machines drifting from quality standards. Monthly per-machine maintenance summary is modern practice. Build into operator contract." },
      { title: "Skipping quarterly audit", body: "Quarterly auxiliary services + operator walk-through catches cosmetic and operational drift before student complaints. Without audit, machines drift from quality standards over time. Quarterly cadence is the modern standard." },
    ],
  }),
  inlineCta({
    text: "Want the university vending maintenance framework (preventive, SLA, telemetry, reporting, audit)?",
    buttonLabel: "Get the maintenance framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported university vending maintenance programs across small, mid-size, and large campuses — including preventive maintenance scheduling, service SLA design, telemetry-driven fault detection, and quarterly machine condition audits. The maintenance benchmarks reflect operator-side data and auxiliary services feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who maintains the vending machines on our campus?", answer: "The operator, under standard commission contracts. Operator handles preventive maintenance (monthly mechanical inspection, quarterly refrigeration service, annual deep clean) plus responsive service (24-48 hour response to faults). Campus provides electrical and space.", audience: "Auxiliary Services" },
      { question: "How often should vending machines be cleaned and serviced?", answer: "Weekly exterior cleaning (per route stop), monthly mechanical inspection, quarterly refrigeration service + cosmetic refresh, annual deep clean. Operator documents per machine in CMMS. Best-in-class operators provide monthly reporting; worst-in-class clean on memory.", audience: "Auxiliary Services" },
      { question: "What service SLA should we require?", answer: "24-48 hour acknowledgement of service tickets; 5-7 day resolution (with parts back-order communicated). Tied to performance bonus/penalty in contract. Verify operator capability at RFP — 'we respond quickly' isn't enforceable.", audience: "Procurement" },
      { question: "What's telemetry-driven fault detection?", answer: "Real-time telemetry alerts on failed-vend patterns, refrigeration faults, payment hardware errors. Operator catches issues before student complaints. Operators without telemetry react after the fact; operators with telemetry are proactive. Modern campus standard.", audience: "Auxiliary Services" },
      { question: "What maintenance reporting should we expect?", answer: "Monthly per-machine maintenance summary: cycles completed, faults detected, faults resolved, parts replaced, telemetry uptime. Pre-formatted for auxiliary services review. Identifies machines drifting from schedule. Build into operator contract.", audience: "Procurement" },
      { question: "Should we audit operator maintenance practice?", answer: "Quarterly walk-through with operator at sample of campus machines. Visual inspection: exterior cleanliness, payment hardware condition, signage currency, refrigeration performance. Identifies drift before student complaints. Best-in-class operators welcome audit.", audience: "Auxiliary Services" },
      { question: "What happens when a machine breaks down?", answer: "Best-in-class operators detect via telemetry, dispatch service within 24-48 hours, resolve within 5-7 days (with parts back-order communicated). Worst-in-class operators react to student complaints, take days or weeks to respond. Service SLA in contract drives accountability.", audience: "Auxiliary Services" },
      { question: "When should equipment be refreshed?", answer: "10-15 year equipment lifecycle. Operator identifies oldest 10% annually; prioritizes for refresh. Coordinate with auxiliary services on capital plan. ENERGY STAR-current specification at refresh. Build refresh cycle into contract.", audience: "Auxiliary Services" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NACAS — campus auxiliary services maintenance standards", url: "https://www.nacas.org/", note: "Industry trade association covering campus amenity maintenance practices" },
      { label: "NAMA — vending equipment maintenance best practices", url: "https://www.namanow.org/", note: "Industry guidance on vending maintenance schedules and operator practice" },
      { label: "ASHRAE — refrigeration system maintenance standards", url: "https://www.ashrae.org/", note: "Industry standard for refrigeration system maintenance and cleaning" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry-driven fault detection platforms", url: "https://www.cantaloupe.com/", note: "Telemetry platforms enabling proactive fault detection" },
      { label: "ADA — accessibility verification", url: "https://www.ada.gov/", note: "Federal accessibility standards relevant to ongoing maintenance" },
    ],
  }),
  relatedGuides({
    heading: "Related campus vending guides",
    items: [
      { eyebrow: "Sister guide", title: "How are vending machines cleaned?", description: "Cleaning protocols, food safety, and operator maintenance standards.", href: "/vending-faq/how-are-vending-machines-cleaned" },
      { eyebrow: "Operations", title: "Optimize campus vending placement", description: "Full-campus placement strategy across academic, residential, athletic, and dining-adjacent zones.", href: "/ai-vending-coolers/optimize-campus-vending-placement" },
      { eyebrow: "Hub", title: "All AI vending and campus guides", description: "Maintenance, placement, planogram, and operator-side patterns at the campus tier.", href: "/ai-vending-coolers" },
    ],
  }),
]);
process.exit(0);
