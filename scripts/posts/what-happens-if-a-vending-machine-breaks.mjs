import { seedPost, tldr, statStrip, timeline, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-happens-if-a-vending-machine-breaks", [
  tldr({
    heading: "What happens if a vending machine breaks down?",
    paragraph:
      "When a modern, well-operated vending machine breaks, the operator owns the response — not the host site. The sequence in 2025-2026: cellular telemetry detects the fault within minutes (failed-vend pattern spike, refrigeration temperature excursion, payment hardware error, connectivity drop, door-open without service ticket). The operator's Security Operations Center auto-creates a service ticket, dispatches a route technician under a tiered SLA — typically 24 hours for stockouts, 48 hours for non-critical equipment faults, and 4-8 hours for refrigeration in fresh-food machines (because spoilage risk is on the operator's books, not the host's). The host site sees a dashboard update or short notice from the account manager and nothing more; residents and employees see an out-of-service screen or a 'machine being serviced' magnet on the door. Refunds run through the operator's payment platform — Apple Pay / Google Pay disputes auto-process, cash refunds via the support line printed on the cabinet. The host pays nothing; the operator carries equipment and parts cost under standard full-service agreements. Modern operators run 95-99% machine uptime against an industry baseline of 85-92%. Hard RFP requirement: SLA in writing, telemetry coverage, dispatch process, refund workflow. Operators that scope around 'we'll send someone out next time we're in the area' are running 2010-era operations.",
    bullets: [
      { emphasis: "Operator owns the response — host pays nothing under full-service agreements:", text: "Equipment, parts, labor, refund processing all on operator side. Hard contract requirement; verify at RFP." },
      { emphasis: "Cellular telemetry detects most faults within minutes:", text: "Refrigeration excursions, failed-vend patterns, payment hardware errors, connectivity drops. SOC auto-creates service ticket; dispatch under SLA." },
      { emphasis: "Modern uptime 95-99% vs industry baseline 85-92%:", text: "Telemetry-driven operations + tiered SLA + refund workflow are the difference. Verify operator's uptime data at proposal." },
    ],
  }),
  statStrip({
    heading: "Vending machine breakdown response benchmarks",
    stats: [
      { number: "95-99%", label: "modern machine uptime", sub: "vs 85-92% legacy operator baseline", accent: "blue" },
      { number: "24h / 48h / 4-8h", label: "tiered SLA targets", sub: "stockout / equipment / refrigeration", accent: "orange" },
      { number: "5-15 min", label: "telemetry detection time", sub: "from fault to service ticket creation", accent: "blue" },
      { number: "0.5-2.0%", label: "refund rate", sub: "of transactions, processed by operator", accent: "orange" },
    ],
  }),
  timeline({
    heading: "What happens when a modern vending machine breaks",
    sub: "Telemetry-driven detection through resolution. Host site involvement minimal under full-service agreement.",
    howToName: "Handle a vending machine breakdown",
    totalTime: "4-48 hours typical",
    steps: [
      { label: "Step 1 (T+0-15 min)", title: "Telemetry detects fault", description: "Cellular cashless board transmits anomaly to operator SOC — failed-vend pattern, refrigeration excursion, payment error, connectivity drop, unexpected door-open. SOC algorithms classify severity (stockout / non-critical / critical refrigeration / payment hardware / connectivity)." },
      { label: "Step 2 (T+15-30 min)", title: "Service ticket auto-created", description: "Service ticket created in operator CMMS (Cantaloupe Seed, Nayax, USConnect Hub or similar). Severity tier drives dispatch priority. Out-of-service screen on cabinet display if customer-facing. Host dashboard updates with status." },
      { label: "Step 3 (T+30 min - 8 hr)", title: "Route technician dispatched", description: "Dispatch under SLA tier — 24 hour for stockouts, 48 hour for non-critical equipment, 4-8 hour for refrigeration faults in fresh-food cabinets (spoilage risk). Account manager notifies host if visible disruption expected." },
      { label: "Step 4 (on-site)", title: "Diagnose and repair", description: "Technician arrives with parts inventory and diagnostic tools. Most faults resolved on first visit — coil cleaning, payment hardware swap, motor replacement, spiral or auger reset. Complex faults (compressor, control board) may require second visit with ordered parts." },
      { label: "Step 5 (post-repair)", title: "Telemetry verifies resolution", description: "Cabinet brought back online. Telemetry validates fault cleared (refrigeration temperature in range, payment hardware reading, connectivity restored). Service ticket closed. Host dashboard updates." },
      { label: "Step 6 (within 24-72 hr)", title: "Refunds processed", description: "Customer refunds processed via operator payment platform. Apple Pay / Google Pay disputes auto-process. Cash refunds via operator support line printed on cabinet. Refund rate at modern operators typically 0.5-2.0% of transactions." },
    ],
  }),
  specList({
    heading: "Vending operator breakdown response specifications",
    items: [
      { label: "Cellular telemetry — 100% coverage at modern operators", value: "Cellular cashless board on every cabinet. Per-transaction logging, per-SKU sales velocity, fill-level tracking, anomaly detection. Independent of facility Wi-Fi. SOC monitors anomalies and auto-creates service tickets. Hard RFP requirement at meaningful placements." },
      { label: "Tiered service SLA in writing", value: "Stockouts 24 hour. Non-critical equipment faults (payment hardware, single motor, control issue) 48 hour. Refrigeration faults in fresh-food cabinets 4-8 hour (spoilage risk). Critical food safety incidents (refrigeration excursion above FDA threshold) immediate response and product disposition. SLA in contract; performance reviewed at quarterly business review." },
      { label: "Service ticket workflow — operator CMMS", value: "Computerized maintenance management system (CMMS) integration with telemetry. Auto-ticket creation, severity classification, dispatch routing, parts inventory check, technician notes, resolution validation. Modern operator standard." },
      { label: "Parts inventory on route trucks", value: "Route technicians carry common-fault parts on truck — payment hardware (EMV readers, mobile-wallet boards), spiral and auger motors, control boards, cooling fans, common spiral or auger components. First-visit fix rate at modern operators 75-85%." },
      { label: "Refund processing", value: "Operator payment platform handles refunds. Apple Pay / Google Pay disputes auto-process within 1-3 business days. Cash refunds via operator support line printed on cabinet — typical processing within 5-7 business days via mailed check or digital payment. Refund rate target under 2.0% of transactions." },
      { label: "Communication to host site", value: "Account manager notifies host of visible disruption (cabinet out of service for more than 4 hours, refrigeration fault affecting product safety, repeat fault at same cabinet). Dashboard real-time status. Quarterly business review covers uptime, service tickets, refund counts, planogram performance." },
      { label: "Host site involvement under full-service agreement", value: "Minimal. Operator owns equipment, parts, labor, refund processing, planogram, restocking, payment platform. Host provides power and floor space. Host responsibilities limited to access coordination (after-hours service entry, security clearance, etc.) and quarterly business review participation." },
      { label: "Loss-of-business carve-out at fresh-food cabinets", value: "Some operators offer service-credit or revenue-share adjustment if fresh-food cabinet is down for more than the SLA threshold. Negotiated at contract. Not standard at all operators but ask at RFP — useful where the cabinet is a meaningful amenity (clubhouse, fitness center, hospital, airport)." },
    ],
  }),
  tipCards({
    heading: "Five things to verify on operator breakdown response before signing",
    sub: "All concrete and verifiable. Generic operator claims (we provide great service) are not contract language.",
    items: [
      { title: "Tiered SLA in writing", body: "Stockout / equipment / refrigeration response targets in writing with measured baseline. Generic 'next service day' clauses are 2010-era; modern operators commit to 24 / 48 / 4-8 hour tiers depending on fault type. Ask for the SLA table and historical uptime data on comparable accounts." },
      { title: "Telemetry coverage at 100%", body: "Cellular cashless board on every cabinet. Verified at proposal demo (show dashboard with live data). Operators with partial coverage cannot honor SLA on the untelemetered units. Hard requirement at meaningful placements." },
      { title: "Refund workflow that doesn't dump on the host", body: "Operator payment platform processes refunds. Operator support line printed on cabinet for cash refunds. Host should not be processing refunds at front-desk or property-management office. Verify the workflow at proposal." },
      { title: "Account manager named at contract signing", body: "Named account manager with direct phone and email. Quarterly business review calendared at contract signing. Not just a general '1-800 service line.' Property-side relationship matters when issues escalate." },
      { title: "Repeat-fault escalation process", body: "Same cabinet faulting 3+ times in 30 days should escalate to equipment swap or root-cause analysis. Modern operator has formal repeat-fault process. Ask how they handle. Operators without an escalation process let cabinets degrade." },
    ],
  }),
  decisionTree({
    heading: "Is this operator equipped to respond to breakdowns at modern standard?",
    question: "Does the operator have 100% cellular telemetry coverage, tiered SLA in writing, and a refund workflow that doesn't dump on the host?",
    yesBranch: {
      title: "Operator is at modern standard.",
      description: "Telemetry-driven detection, tiered SLA, refund workflow on operator-side. Expected uptime 95-99%, host-side burden minimal. Standard at modern operators serving meaningful accounts. Verify with reference checks at 2-3 current accounts.",
      finalTone: "go",
      finalLabel: "MODERN OPERATOR",
    },
    noBranch: {
      title: "Operator is below modern standard.",
      description: "Partial or no telemetry, generic SLA, refund process that involves host. Expected uptime 85-92%, host-side burden material. Resident or employee complaints flow to property management. Not suitable for meaningful accounts. Look elsewhere or require capability upgrade.",
      finalTone: "stop",
      finalLabel: "LEGACY OPERATOR",
    },
  }),
  inlineCta({
    text: "Want the operator breakdown-response RFP scorecard (SLA, telemetry, refund workflow, escalation)?",
    buttonLabel: "Get the breakdown response RFP",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported operator-selection and breakdown-response framework design across office, multifamily, school, hospital, airport, and warehouse placements. Familiar with telemetry-driven service workflows, tiered SLA structures, CMMS integration, parts-inventory route truck specification, and refund processing through modern operator payment platforms. The benchmarks reflect operator-side data across current accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What happens if a vending machine breaks down?", answer: "Modern operator detects the fault via cellular telemetry within minutes, auto-creates a service ticket, and dispatches a route technician under a tiered SLA — typically 24 hours for stockouts, 48 hours for non-critical equipment faults, 4-8 hours for refrigeration in fresh-food machines. Host site sees a dashboard update and minimal disruption; operator owns equipment, parts, labor, and refund processing under full-service agreement.", audience: "Property Managers" },
      { question: "Who pays for repairs?", answer: "Operator pays under standard full-service agreement. Equipment, parts, labor all on operator side. Host site pays nothing. Verify in contract — some thin-margin operators try to charge for parts; modern operators include in service fee or commission structure.", audience: "Property Managers" },
      { question: "What's the typical response time?", answer: "Stockouts 24 hour. Non-critical equipment faults (payment hardware, single motor) 48 hour. Refrigeration faults in fresh-food cabinets 4-8 hour (spoilage risk on operator). Critical food safety incidents immediate response. Modern operator SLA in writing; legacy operator generic 'next service day' clauses do not honor these targets.", audience: "Property Managers" },
      { question: "How do customer refunds work?", answer: "Operator payment platform handles refunds. Apple Pay / Google Pay disputes auto-process within 1-3 business days. Cash refunds via operator support line printed on cabinet — processing within 5-7 business days via mailed check or digital payment. Host site not involved in refund processing under modern operator workflow.", audience: "Property Managers" },
      { question: "What happens to the products if refrigeration breaks down?", answer: "Operator dispatches refrigeration technician within 4-8 hour SLA at fresh-food cabinets (spoilage risk on operator). Products above FDA safe-holding temperature threshold disposed and replaced. Operator owns spoilage cost; host site pays nothing. Telemetry catches refrigeration excursions in minutes, before spoilage at most modern systems.", audience: "Property Managers" },
      { question: "What if the same machine keeps breaking?", answer: "Modern operator has formal repeat-fault escalation — cabinet faulting 3+ times in 30 days triggers equipment swap or root-cause analysis. Worth asking at proposal how operator handles. Operators without formal escalation let cabinets degrade and produce slow but persistent host-site dissatisfaction.", audience: "Property Managers" },
      { question: "Do we need to keep spare parts on site?", answer: "No. Operator's route technicians carry common-fault parts on truck. First-visit fix rate at modern operators 75-85%. Complex faults (compressor, control board) may require second visit with ordered parts — operator handles ordering and logistics. Host site does not stock parts.", audience: "Property Managers" },
      { question: "How do we tell if our operator's breakdown response is at modern standard?", answer: "Three quick checks — does the operator have 100% cellular telemetry coverage (verified at proposal demo)? Is the SLA in writing with tiered targets (24 / 48 / 4-8 hour)? Does refund workflow run through operator's payment platform without host-site involvement? Yes to all three indicates modern operator; otherwise legacy operator. Hard RFP requirement at meaningful accounts.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — operator service standards and SLA practice", url: "https://www.namanow.org/", note: "Industry guidance on tiered SLA structures, telemetry coverage requirements, and refund processing workflows" },
      { label: "FDA — vending machine refrigeration and food safety", url: "https://www.fda.gov/food/", note: "Federal food safety standards governing refrigerated vending cabinets and spoilage response" },
      { label: "Cantaloupe Seed — operator CMMS and telemetry platform", url: "https://www.cantaloupe.com/", note: "Vendor documentation for operator CMMS, telemetry, anomaly detection, and service ticket workflow" },
      { label: "Nayax — cashless payment and telemetry platform", url: "https://www.nayax.com/", note: "Vendor documentation for operator payment platform, refund processing, and telemetry-driven service" },
      { label: "Federal Trade Commission (FTC) — consumer refund rules", url: "https://www.ftc.gov/", note: "Federal consumer protection guidance applicable to vending refund disputes" },
    ],
  }),
  relatedGuides({
    heading: "Related vending FAQ guides",
    items: [
      { eyebrow: "Sister FAQ", title: "Are vending machines noisy?", description: "Operating sound levels, low-noise placement choices, and what residents and tenants actually hear.", href: "/vending-faq/are-vending-machines-noisy" },
      { eyebrow: "Operations", title: "Remote vending machine monitoring", description: "How telemetry and SOC monitoring underpin modern breakdown detection and service workflows.", href: "/vending-technology/remote-vending-machine-monitoring" },
      { eyebrow: "Hub", title: "All vending FAQ", description: "Common questions about vending operations, contracts, equipment, payment, and service.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
