import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-is-full-service-vending", [
  tldr({
    heading: "What is full-service vending — and what's included?",
    paragraph:
      "Full-service vending is the standard commercial vending model where the operator handles everything: equipment ownership, installation, stocking, restocking, telemetry monitoring, customer service, refunds, repairs and maintenance, cleaning, equipment refresh, planogram management, financial reporting. The host (property owner / facility manager) provides: electrical and floor space, host-side coordination (planogram input, complaints management, contract negotiation), and receives commission on net sales (10-25% typical). Alternative service models: self-service (host owns and operates machine) — rare, only at very small placements; managed-services (operator manages equipment for host fee) — niche; refreshment program (broader service including office coffee, hot drink service, fruit / snack delivery) — adjacent to vending. Modern full-service vending includes: 100% telemetry coverage, cashless payment, monthly per-machine reporting, quarterly business review, ESG / sustainability data, 24-48 hour service SLA. Verify modern standard at RFP; legacy operators may offer reduced scope.",
    bullets: [
      { emphasis: "Operator handles everything; host receives commission:", text: "Equipment + install + stocking + service + telemetry + reporting handled by operator. Host receives 10-25% commission on net sales." },
      { emphasis: "Modern standard includes 100% telemetry + reporting:", text: "Modern full-service includes telemetry coverage, cashless payment, monthly reporting, quarterly review, ESG data, 24-48 hr service SLA. Build into operator contract." },
      { emphasis: "Alternative service models exist but rare:", text: "Self-service, managed-services, refreshment programs — each fills specific niches but full-service is standard commercial model for most placements." },
    ],
  }),
  statStrip({
    heading: "Full-service vending benchmarks",
    stats: [
      { number: "10-25%", label: "commission to host", sub: "of net sales", accent: "blue" },
      { number: "Operator-owned", label: "equipment standard", sub: "full-service model", accent: "blue" },
      { number: "100% telemetry", label: "modern standard", sub: "in full-service contracts", accent: "blue" },
      { number: "$0", label: "host upfront cost", sub: "standard full-service", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Full-service vending vs alternative service models",
    sub: "Four service models with different responsibility allocation. Full-service is standard at most commercial placements.",
    headers: ["Service model", "Host responsibility", "Operator responsibility", "Best fit"],
    rows: [
      ["Full-service (standard)", "Electrical, space, coordination", "Equipment, install, stocking, service, telemetry, reporting", "Most commercial placements"],
      ["Self-service", "Equipment ownership + all operations", "None (or limited supplier)", "Very small or specialty placements"],
      ["Managed-services", "Equipment ownership (sometimes)", "Operations management for host fee", "Specialty / experimental"],
      ["Refreshment program (adjacent)", "Space, coordination", "Vending + coffee + hot drink + fruit + snack", "Premium offices, dealerships"],
      ["Micro-market", "Space, coordination, theft management coordination", "Equipment, install, stocking, service, telemetry, reporting", "High-volume placements (500+ daily)"],
      ["Specialty (fresh food, AI cooler walls, etc.)", "Coordination + sometimes capital contribution", "Equipment, install, stocking, service", "Specialty placements"],
    ],
  }),
  specList({
    heading: "Full-service vending specifications",
    items: [
      { label: "Operator equipment ownership + installation", value: "Operator owns vending machines, handles install at host site (deliver, position, plug-in, telemetry verify). Host provides 120V/20A dedicated outlet + adequate space + GFCI where required. Standard commercial model; no host upfront cost for equipment." },
      { label: "Operator stocking + restocking", value: "Operator handles initial stocking + ongoing restocking per telemetry-driven cadence. FIFO discipline. Monthly planogram refinement based on per-SKU sales. Operator manages supplier relationships, purchasing, inventory across machines." },
      { label: "Telemetry coverage + monitoring", value: "100% telemetry coverage modern standard. Per-transaction tracking. Real-time fill level + days-to-empty. Anomaly detection. Operator SOC investigates. Stockout alerts. Modern operators provide dashboard access to host." },
      { label: "Customer service + refunds", value: "Operator handles customer complaints, product requests, refund processing. Visible service contact on every machine. Auto-refund where telemetry confirms failed vend. 24-48 hr response SLA modern standard. Build into contract." },
      { label: "Repairs and maintenance", value: "Operator handles all repairs and maintenance — mechanical (motors, coils), refrigeration (compressor, evaporator), payment hardware (EMV, contactless, cellular), electrical, telemetry. On-truck parts inventory for common issues. Annual deep clean + cosmetic refresh." },
      { label: "Cleaning protocols", value: "Operator handles cleaning. Weekly exterior + monthly interior + quarterly coil cleaning + annual deep clean. EPA-registered food-safe sanitizer. Documented in CMMS. Pre-formatted reports for host review where applicable." },
      { label: "Equipment refresh cycle", value: "Operator identifies oldest 10% of fleet annually for refresh. ENERGY STAR-current specification. Coordinate with host on capital plan. Aging equipment contributes to lower performance; refresh maintains over multi-year contract." },
      { label: "Financial reporting + commission", value: "Operator calculates net sales, processes commission to host monthly. Per-machine financial reporting. Sample monthly statement at proposal. Build commission methodology + financial reporting into contract." },
      { label: "Host responsibilities", value: "Electrical and floor space provision. Host-side coordination (planogram input where appropriate, complaints management, contract negotiation, quarterly business review). Receive commission. Operator handles operations; host handles strategic coordination.", },
    ],
  }),
  tipCards({
    heading: "Five full-service vending misconceptions",
    sub: "Each is common misunderstanding by prospective hosts. All clarifiable with structured RFP review.",
    items: [
      { title: "Thinking we need to buy machines", body: "Full-service vending is operator-owned equipment standard. Host provides electrical and space; operator provides everything else and pays commission. Host upfront cost is typically $0 for equipment. Some specialty (fresh food, AI cooler walls) may require capital contribution." },
      { title: "Thinking we need to handle restocking", body: "Full-service vending is operator-stocked. Operator handles supplier relationships, purchasing, inventory, restocking cadence, planogram refinement. Host provides input on preferences; operator executes operations." },
      { title: "Thinking commission rate alone determines value", body: "Highest commission rate ≠ best deal. 30% on poorly-operated machines produces less revenue than 22% on premium operations. Optimize for operator quality first; commission is a percentage of what operator can produce. Total revenue = revenue × commission %.", },
      { title: "Thinking all operators provide modern reporting", body: "Modern operators provide telemetry-driven per-machine monthly reporting. Legacy operators provide aggregate quarterly summaries. Build reporting requirements into operator contract; verify at proposal review. Don't assume modern reporting capability." },
      { title: "Skipping quarterly business review", body: "Quarterly business review with operator account manager is modern best practice. Performance trends across five dimensions, gap analysis, corrective action, planogram refinement. Build into contract; hosts that skip review miss optimization opportunities.", },
    ],
  }),
  inlineCta({
    text: "Want the full-service vending framework (operator scope + host responsibility + commission + reporting)?",
    buttonLabel: "Get the full-service framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported full-service vending implementations across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — including operator scope definition, host responsibility coordination, commission structure design, and quarterly business review structure. The benchmarks reflect operator-side data and host-side feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What is full-service vending?", answer: "Standard commercial vending model where the operator handles everything — equipment ownership, installation, stocking, restocking, telemetry monitoring, customer service, refunds, repairs, maintenance, cleaning, equipment refresh, planogram management, financial reporting. Host provides electrical and floor space, receives commission on net sales (10-25% typical).", audience: "Property Managers" },
      { question: "Do we need to buy machines?", answer: "Almost never. Full-service vending is operator-owned equipment standard. Host provides electrical and space; operator provides everything else and pays commission. Host upfront cost typically $0 for equipment. Specialty placements (fresh food, AI cooler walls) may require capital contribution.", audience: "Property Managers" },
      { question: "What commission rate should we expect?", answer: "10-25% of net sales typical. Higher at high-volume placements with strong operations; lower at lower-volume placements with thinner margins. Optimize for operator quality first; commission is percentage of what operator can produce.", audience: "Procurement" },
      { question: "What does the operator do?", answer: "Equipment ownership, installation, stocking and restocking, telemetry monitoring with anomaly detection, customer service and refunds, repairs and maintenance, cleaning, equipment refresh, planogram management, financial reporting, commission payment. Comprehensive scope.", audience: "Property Managers" },
      { question: "What do we do as the host?", answer: "Provide electrical and floor space. Coordinate on planogram input, complaints management, contract negotiation, quarterly business review. Receive commission monthly. Operator handles operations; host handles strategic coordination.", audience: "Property Managers" },
      { question: "What's included in modern full-service vending?", answer: "100% telemetry coverage, cashless payment (EMV + contactless + mobile wallet), monthly per-machine reporting, quarterly business review, ESG / sustainability data, 24-48 hr service SLA, anomaly detection, auto-refund on detected failure. Build modern standard into RFP.", audience: "Procurement" },
      { question: "Are there alternative service models?", answer: "Self-service (host owns and operates) — rare, only at very small placements. Managed-services (operator manages for host fee) — niche. Refreshment programs (broader service including coffee, hot drink, fruit) — adjacent. Micro-markets — for high-volume placements. Most commercial placements use full-service standard.", audience: "Property Managers" },
      { question: "How long is a typical contract?", answer: "3-year initial term with 1-2 annual renewal options standard. Some major-airport / federal contracts longer (5-10 years). Build performance-based termination clauses; renewal options at host discretion. Match contract term to placement stability.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — full-service vending operator standards", url: "https://www.namanow.org/", note: "Industry guidance on full-service vending operations" },
      { label: "Cantaloupe / Nayax / USConnect — modern operator platforms", url: "https://www.cantaloupe.com/", note: "Telemetry platforms underlying modern full-service operations" },
      { label: "IFMA — facility management standards", url: "https://www.ifma.org/", note: "Facility management industry standards covering vending coordination" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering vending and amenity contracts" },
      { label: "Vending Times — modern operator practice coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering full-service vending evolution" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Who fills and restocks vending machines?", description: "Operator responsibility for restocking and inventory management.", href: "/vending-Info-for-businesses/who-fills-and-restocks-vending-machines" },
      { eyebrow: "Operations", title: "Vending vendor selection criteria", description: "Operator evaluation framework — telemetry, SLA, references, performance.", href: "/vending-Info-for-businesses/vending-vendor-selection-criteria" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Service models, placement, operations, and operator selection.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
