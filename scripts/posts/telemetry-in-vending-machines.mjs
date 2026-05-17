import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("telemetry-in-vending-machines", [
  tldr({
    heading: "What does telemetry actually do in a modern vending machine?",
    paragraph:
      "Telemetry in vending is the cellular-modem + sensor stack that turns a vending machine from a passive cabinet into a real-time operational node. The modern stack reports six core data streams from every machine to the operator's back-office platform (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, USA Technologies): (1) per-vend transaction data (SKU, price, payment method, timestamp), (2) per-shelf inventory levels (coil-count or weight-derived), (3) machine health (compressor cycle, door state, temperature, error codes), (4) payment hardware status (card reader, bill validator, coin mech), (5) network connectivity (signal strength, last handshake), (6) customer experience signals (refund requests, satisfaction surveys, jam reports). The data drives operator route optimization (skip machines without restock need, prioritize about-to-stockout), planogram refinement (slow-movers replaced quarterly), preventive maintenance (compressor approaching failure flagged before it dies), commission settlement (gross-to-net visible to host), and SLA reporting (stockout rate + uptime + response time). Modern operator standard at ~85% telemetry coverage across fleet; legacy operators still run blind on fixed-route schedules. Cellular modem cost $50-150 per machine + $10-25/month per-machine data plan; payback typically 3-6 months via labor savings + reduced stockouts.",
    bullets: [
      { emphasis: "Six core data streams per machine:",
        text: "Transactions + inventory + machine health + payment hardware + network + customer experience. Each drives a specific operator workflow." },
      { emphasis: "Drives route optimization + planogram + maintenance:",
        text: "Skip machines without restock need; replace slow-movers quarterly; flag compressor failure before it dies; settle commission with transparency." },
      { emphasis: "Modern operator standard ~85% coverage:",
        text: "Legacy operators still run fixed-route blind. Cellular modem $50-150 + $10-25/month data plan; payback 3-6 months." },
    ],
  }),
  statStrip({
    heading: "Telemetry benchmarks",
    stats: [
      { number: "6 streams", label: "core telemetry data", sub: "per machine in real-time", accent: "blue" },
      { number: "~85%", label: "modern operator coverage", sub: "fleet-wide telemetry adoption", accent: "orange" },
      { number: "3-6 mo", label: "payback period", sub: "via labor + stockout reduction", accent: "orange" },
      { number: "$10-25/mo", label: "per-machine data plan", sub: "after $50-150 modem capex", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Telemetry-enabled vs legacy vending operations",
    sub: "Modern operator standard runs telemetry; legacy operators don't. Operational gap widens at scale.",
    headers: ["Dimension", "Telemetry-enabled (modern)", "Legacy (fixed-route)"],
    rows: [
      ["Route optimization", "Skip machines without restock need; prioritize about-to-stockout", "Fixed weekly / bi-weekly route regardless of need"],
      ["Stockout response", "Hours (telemetry alert + dispatched restock)", "Days to weeks (next scheduled route visit)"],
      ["Planogram refinement", "Quarterly via telemetry data (slow-mover replacement)", "Annual or never (no per-SKU sales data)"],
      ["Preventive maintenance", "Compressor / payment hardware failure flagged early", "Reactive — wait for machine to fail + customer complaint"],
      ["Commission settlement", "Gross-to-net transparent to host (audit-ready)", "Reported gross only; per-machine breakdown limited"],
      ["SLA reporting", "Stockout rate + uptime + response time tracked", "Self-reported aspirational language"],
      ["Customer experience", "Real-time refund + jam report + satisfaction survey", "Phone-call refund process + 24-72 hour response"],
      ["Sustainability data", "Truck-mile reduction + per-machine energy + waste capture", "No data; ESG reporting impossible"],
    ],
  }),
  specList({
    heading: "Telemetry stack specifications",
    items: [
      { label: "Cellular modem + connectivity", value: "Modem ($50-150 capex) installed on machine main board. Connects via cellular network (4G LTE-M / NB-IoT increasingly standard; 3G being deprecated). Monthly data plan $10-25 per-machine. First handshake at install verifies signal ≥-90 dBm; external antenna kit available for marginal signal locations." },
      { label: "Per-vend transaction data", value: "Every vend reports SKU, price, payment method (card, cash, mobile, badge), timestamp, success/fail status to operator back-office. Data feeds commission settlement + planogram refinement + revenue forecasting + audit. Modern operator standard; legacy operators don't capture per-vend granularity." },
      { label: "Per-shelf inventory tracking", value: "Coil-count (snack vending) or weight-derived (AI cooler, micro-market) inventory updated per vend. Operator dashboard shows per-machine days-to-empty for restock prioritization. Modern stack accurate to ±1 unit per shelf; legacy stack accurate to ±5-10 units (manual restock check)." },
      { label: "Machine health telemetry", value: "Compressor cycle frequency + temperature setpoint compliance + door state + error codes (jam, payment hardware failure, sensor fault). Compressor approaching failure flagged via cycle-frequency anomaly 7-30 days before failure. Preventive maintenance window enables operator to swap compressor before customer impact." },
      { label: "Payment hardware status", value: "Card reader online/offline + bill validator jam + coin mech status + mobile payment connectivity. Payment hardware failures flagged within minutes; route driver dispatched for repair. Payment-down impacts revenue immediately; modern telemetry surfaces fast." },
      { label: "Network connectivity monitoring", value: "Signal strength + last handshake timestamp + connection-drop frequency. Marginal signal locations flagged for external antenna upgrade. Operators monitor fleet connectivity from back-office dashboard; route drivers diagnose during restock if disconnect repeated." },
      { label: "Customer experience signals", value: "Mobile-app refund requests + jam reports + per-vend satisfaction surveys (modern AI cooler + smart cooler standard). Customer feedback themes feed planogram refinement + service-ticket workflow. Modern operators capture this; legacy operators don't have channel for customer signal." },
      { label: "Telemetry platform integration", value: "Cantaloupe Seed (largest installed base) + Nayax MoMa (international + AI cooler heavy) + 365 Retail Markets ADM (micro-market + corporate) + USA Technologies. Operator chooses one platform for fleet; multi-platform operators run unified dashboard via API integration. Verify operator platform at proposal." },
      { label: "Data security + PCI-DSS compliance", value: "Telemetry data flows over encrypted cellular + TLS to operator back-office. PCI-DSS compliance for payment data (card numbers tokenized at card reader, never on machine main board). Modern operators run PCI-DSS Level 1 or 2; verify at proposal for payment-heavy placements." },
      { label: "Host-side dashboard access", value: "Modern operators provide host-side dashboard access (read-only) showing per-location revenue, transactions, top SKUs, stockouts, service tickets, customer satisfaction. Standard at multi-location enterprise placements; verify at proposal. Legacy operators don't share dashboard access." },
    ],
  }),
  timeline({
    heading: "How a single vend flows through telemetry",
    sub: "What happens from worker tap to operator back-office update. Total elapsed time: 2-5 seconds for transaction; 30-90 seconds for back-office propagation.",
    howToName: "How a vending transaction flows through telemetry",
    totalTime: "PT2M",
    steps: [
      { label: "STEP 1", title: "Worker tap + payment authorization", description: "Worker taps card / mobile / badge on payment surface. Card reader tokenizes + authorizes via processor (Worldpay, Heartland, Elavon) over cellular. 1-3 seconds for authorization response." },
      { label: "STEP 2", title: "Vend dispense + transaction log", description: "Main board commands coil rotation or door unlock + records transaction (SKU, price, payment method, timestamp, success status) in local memory. 1-2 seconds." },
      { label: "STEP 3", title: "Cellular upload to back-office", description: "Cellular modem packages transaction + inventory update + machine health data + uploads to operator back-office platform (Cantaloupe / Nayax / 365). 30-60 seconds typical; up to 5 minutes on marginal signal." },
      { label: "STEP 4", title: "Back-office processing + dashboard update", description: "Operator platform processes transaction data + updates per-machine inventory + recalculates days-to-empty + updates fleet dashboard. Operator dispatchers + account managers see real-time data. 5-15 seconds processing + dashboard refresh." },
      { label: "STEP 5", title: "Downstream workflow triggers", description: "Data triggers downstream workflows — restock prioritization (if inventory below threshold), preventive maintenance (if machine health anomaly), revenue forecasting (cumulative across fleet), commission accrual (per-location aggregation). 15-60 seconds depending on workflow." },
      { label: "STEP 6", title: "Host-side dashboard propagation", description: "Host-side read-only dashboard (modern operator standard at multi-location enterprise placements) reflects updated transaction + inventory + machine health within 1-5 minutes of vend. Host facilities + workplace experience + finance team see real-time portfolio status." },
    ],
  }),
  tipCards({
    heading: "Five telemetry mistakes",
    sub: "Documented in host + operator post-deployment regret data. All preventable with structured operator selection.",
    items: [
      { title: "Accepting an operator without fleet-wide telemetry", body: "Legacy operators still run fixed-route schedules without telemetry across fleet. Operational gap widens at scale — slower stockout response, no planogram refinement, no preventive maintenance, no SLA enforcement, no commission audit. Specify telemetry coverage ≥85% across operator fleet at proposal." },
      { title: "Skipping signal verification at install", body: "Install crew assumes signal adequate based on loading-dock measurement; signal drops below threshold at interior install location (steel deck roof, conductive racking, basement, interior corner). Modem disconnects + telemetry blind. Measure at exact install location with operator signal meter; add external antenna kit if marginal." },
      { title: "Not specifying host dashboard access", body: "Modern operators provide host-side read-only dashboard at multi-location enterprise placements; legacy operators don't share. Host without dashboard access can't verify SLA, audit commission, monitor satisfaction trends, or coordinate amenity strategy. Specify dashboard access at MSA signature." },
      { title: "No data security / PCI-DSS verification", body: "Payment data flows through telemetry stack. Payment data requires PCI-DSS compliance (tokenized at card reader, encrypted in transit, never on machine main board). Modern operators run PCI-DSS Level 1 or 2; verify compliance at proposal for payment-heavy placements." },
      { title: "Ignoring telemetry data on host side", body: "Host has dashboard access but no one reviews + acts on data. Workplace amenity decisions made on anecdote rather than data. Specify quarterly business review (QBR) cadence at MSA signature; review telemetry at QBR; act on planogram + service + format evolution signals." },
    ],
  }),
  inlineCta({
    text: "Want the telemetry verification checklist (operator coverage + signal + dashboard + PCI-DSS)?",
    buttonLabel: "Get the telemetry checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support telemetry-enabled vending deployments — including operator capability verification across telemetry platforms (Cantaloupe, Nayax, 365 Retail Markets), signal verification at install, host dashboard access setup, PCI-DSS compliance verification, and quarterly business review structure for telemetry data utilization. The benchmarks reflect operator-side data from current telemetry-enabled accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does telemetry actually do in a vending machine?", answer: "Six core data streams per machine in real-time: per-vend transactions, per-shelf inventory, machine health, payment hardware status, network connectivity, customer experience signals. Drives route optimization + planogram refinement + preventive maintenance + commission settlement + SLA reporting. Modern operator standard at ~85% fleet coverage.", audience: "Facilities" },
      { question: "What does telemetry cost?", answer: "Cellular modem $50-150 per-machine capex + monthly data plan $10-25 per-machine. Modern operators include in service contract economics (built into commission structure); host doesn't see line-item charge. Payback typically 3-6 months via labor savings + reduced stockouts. Don't accept telemetry as 'optional upgrade' at modern operator.", audience: "Procurement" },
      { question: "Which telemetry platforms do operators use?", answer: "Cantaloupe Seed (largest installed base), Nayax MoMa (international + AI cooler heavy), 365 Retail Markets ADM (micro-market + corporate), USA Technologies. Operator chooses one platform for fleet; multi-platform operators run unified dashboard via API integration. Platform choice is operator-side; verify operator platform + capability at proposal.", audience: "Procurement" },
      { question: "How fast does telemetry data flow?", answer: "Transaction-to-dashboard latency 30-90 seconds typical; up to 5 minutes on marginal cellular signal. Back-office processing + downstream workflow triggers (restock prioritization, preventive maintenance, commission accrual) happen within 15-60 seconds after data upload. Host-side dashboard propagation within 1-5 minutes of vend.", audience: "Facilities" },
      { question: "Can hosts see the telemetry data?", answer: "Yes at modern operators. Host-side read-only dashboard standard at multi-location enterprise placements showing per-location revenue, transactions, top SKUs, stockouts, service tickets, customer satisfaction. Legacy operators don't share dashboard access; specify at MSA signature.", audience: "Workplace Experience" },
      { question: "What about PCI-DSS compliance?", answer: "Payment data flows through telemetry stack and requires PCI-DSS compliance: tokenized at card reader, encrypted in transit, never on machine main board. Modern operators run PCI-DSS Level 1 or 2. Verify compliance certification at proposal for payment-heavy placements; refresh annually.", audience: "Compliance" },
      { question: "What happens when cellular signal drops?", answer: "Machine continues to vend on local payment authorization (offline mode buffer) for 24-72 hours typical. Transactions buffered locally + uploaded on reconnect. Extended outage (>72 hours) requires route driver diagnosis. External antenna kit ($200-400) available for marginal signal locations.", audience: "Operations" },
      { question: "How do we use telemetry data on the host side?", answer: "Quarterly business review (QBR) with operator account team. Agenda: performance trends, gap analysis, SLA review, planogram refinement, corrective action plans, format evolution, ESG metrics. Telemetry data drives every QBR discussion; modern operator standard. Specify QBR cadence at MSA signature.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "Cantaloupe Seed — telemetry platform", url: "https://www.cantaloupe.com/", note: "Largest installed base of vending telemetry across North America" },
      { label: "Nayax — payment + telemetry platform", url: "https://www.nayax.com/", note: "International + AI cooler heavy telemetry platform" },
      { label: "365 Retail Markets ADM — micro-market + corporate telemetry", url: "https://www.365retailmarkets.com/", note: "Micro-market + corporate vending telemetry platform" },
      { label: "PCI-DSS — Payment Card Industry Data Security Standard", url: "https://www.pcisecuritystandards.org/", note: "Payment compliance underlying telemetry transaction data" },
      { label: "NAMA — vending operator telemetry standards", url: "https://www.namanow.org/", note: "Industry guidance on telemetry adoption and operations integration" },
    ],
  }),
  relatedGuides({
    heading: "Related vending technology guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending machine inventory tracking", description: "How modern telemetry-driven inventory tracking changes restock cadence, stockout response, and commission settlement.", href: "/vending-technology/vending-machine-inventory-tracking" },
      { eyebrow: "Operations", title: "AI-powered vending machines", description: "Computer vision, weight sensors, and machine-learning planogram refinement in modern AI vending equipment.", href: "/vending-technology/ai-powered-vending-machines" },
      { eyebrow: "Hub", title: "All vending technology guides", description: "Telemetry, payment, AI, sustainability, and operations technology across modern vending placements.", href: "/vending-technology" },
    ],
  }),
]);
process.exit(0);
