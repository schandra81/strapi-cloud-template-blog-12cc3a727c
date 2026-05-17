import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("measure-vending-machine-performance", [
  tldr({
    heading: "How should we measure vending machine performance?",
    paragraph:
      "Vending performance measurement runs across five dimensions: (1) revenue performance (gross sales, net sales after refunds, sales per machine, sales per SKU), (2) operational performance (uptime percentage, stockout incidents, service response time, refund rate, waste rate), (3) customer satisfaction (amenity survey scores, complaint volume, product request volume), (4) sustainability metrics (kWh per machine, ENERGY STAR coverage, recycling capture rate, truck-mile reduction), (5) financial performance (commission revenue, total operator cost, ROI per machine). Modern telemetry-enabled operators provide per-machine per-metric monthly reports; legacy operators provide aggregate-only quarterly summaries. Best-in-class hosts run quarterly business reviews with operators on performance dimensions. Performance gaps (uptime below 95%, waste above 5%, complaints rising) trigger corrective action. Without measurement, performance drifts unchecked.",
    bullets: [
      { emphasis: "Five performance dimensions:", text: "Revenue, operational, customer satisfaction, sustainability, financial. Each independently measurable; combined produces full performance picture." },
      { emphasis: "Monthly per-machine reporting:", text: "Modern operators provide per-machine per-metric monthly reports. Legacy operators provide aggregate-only quarterly summaries. Build into operator contract." },
      { emphasis: "Quarterly business review with operator:", text: "Performance review with operator account manager. Identifies gaps, drives corrective action. Best-in-class hosts; legacy hosts don't review systematically." },
    ],
  }),
  statStrip({
    heading: "Vending performance measurement benchmarks",
    stats: [
      { number: "5 dimensions", label: "performance measurement areas", sub: "revenue, operational, satisfaction, sustainability, financial", accent: "blue" },
      { number: "Monthly", label: "per-machine reporting", sub: "modern operator standard", accent: "blue" },
      { number: "98%+", label: "uptime target", sub: "best-in-class", accent: "blue" },
      { number: "<5%", label: "waste rate target", sub: "best-in-class operations", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending performance measurement dimensions",
    sub: "Five dimensions with distinct metrics and benchmarks. Modern operators report on each; legacy operators report on few.",
    headers: ["Dimension", "Key metrics", "Best-in-class benchmark"],
    rows: [
      ["Revenue", "Gross sales, net sales, sales per machine, sales per SKU", "Industry-relevant range varies by placement"],
      ["Operational", "Uptime %, stockout incidents, service response time, refund rate, waste rate", "98%+ uptime, <5% waste, 24-48 hr resolution"],
      ["Customer satisfaction", "Amenity survey scores, complaint volume, product request volume", "Year-over-year improvement"],
      ["Sustainability", "kWh per machine, ENERGY STAR coverage, recycling capture rate", "Per FEMP / STARS targets"],
      ["Financial", "Commission revenue, total operator cost, ROI per machine", "Industry-relevant range varies"],
      ["Telemetry data quality", "Coverage, accuracy, alert workflow", "100% coverage"],
      ["Per-SKU performance", "Top sellers, slow movers, seasonal trends", "Monthly review"],
      ["Per-placement performance", "Revenue ranking, satisfaction ranking, optimization opportunities", "Quarterly review"],
    ],
  }),
  specList({
    heading: "Vending performance measurement specifications",
    items: [
      { label: "Revenue performance", value: "Gross sales, net sales after refunds, sales per machine per month, sales per SKU. Per-placement comparison reveals optimization opportunities. Modern operators provide via dashboard; legacy operators send monthly PDF summary." },
      { label: "Operational performance", value: "Uptime percentage (98%+ target), stockout incidents (telemetry-tracked), service response time (24-48 hr resolution target), refund rate (<2% typical), waste rate (sub-5% target). Performance bonus / penalty tied to metrics in modern contracts." },
      { label: "Customer satisfaction", value: "Annual amenity survey scores including vending. Complaint volume to host (escalations to property manager, HR, facility services). Product request volume (positive engagement signal). Year-over-year improvement target." },
      { label: "Sustainability metrics", value: "kWh per machine, ENERGY STAR coverage percentage, recycling capture rate, truck-mile reduction calculation, low-GWP refrigerant share. Feeds STARS / FEMP / ESG submissions. Pre-formatted quarterly reports." },
      { label: "Financial performance", value: "Commission revenue (host's share of net sales), total operator cost (operator's expenses including supplier, labor, truck, telemetry, equipment), ROI per machine. Some operators share financials transparently; some don't. Build into contract." },
      { label: "Monthly per-machine reporting", value: "Modern operators provide per-machine per-metric monthly reports — revenue, top SKUs, stockouts, refunds, waste, service tickets, telemetry uptime. Pre-formatted for host review. Legacy operators provide aggregate quarterly only." },
      { label: "Quarterly business review", value: "Auxiliary services / facility manager + operator account manager review quarterly. Performance trends, gap analysis, corrective action planning, planogram refinement opportunities. Modern best practice; build into operator contract." },
      { label: "Telemetry data quality verification", value: "Verify telemetry coverage (100% target), data accuracy, alert workflow functioning. Periodic audit (annual) to ensure data integrity. Without quality telemetry, performance measurement degrades to operator self-report." },
      { label: "Corrective action triggers", value: "Performance gaps (uptime below 95%, waste above 5%, complaints rising) trigger corrective action. Operator account manager develops plan; quarterly review tracks progress. Documented gaps with no improvement signal operator quality issue.", },
    ],
  }),
  tipCards({
    heading: "Five vending performance measurement mistakes",
    sub: "Each is documented in placement post-implementation reviews. All preventable with structured measurement program.",
    items: [
      { title: "No measurement program at all", body: "Hosts that don't measure can't manage. Performance drifts unchecked. Build measurement into operator contract; monthly per-machine reporting + quarterly business review. Without measurement, you can't tell if operator is delivering value." },
      { title: "Aggregate-only reporting accepted", body: "Aggregate reports (total airport sales, total refunds) hide per-placement and per-SKU patterns. Modern operators provide per-machine per-metric monthly reporting. Reject aggregate-only as insufficient; build into contract." },
      { title: "Self-reported uptime without telemetry validation", body: "Operators that self-report uptime without telemetry-driven measurement can inflate numbers. Modern airport / corporate / institutional contracts require telemetry-driven uptime measurement. Verify operator's measurement methodology at contract." },
      { title: "No corrective action workflow for gaps", body: "Performance gaps without corrective action workflow drift unchecked. Build corrective action workflow into contract: gap identified → operator develops plan → quarterly review tracks progress → documented gaps with no improvement trigger escalation." },
      { title: "Skipping sustainability metrics", body: "Modern hosts increasingly require sustainability data for STARS / FEMP / ESG submissions. Operators without measurement capability hurt host's sustainability posture. Build sustainability reporting into contract; modern operators provide pre-formatted reports.", },
    ],
  }),
  inlineCta({
    text: "Want the vending performance measurement framework (five dimensions + monthly reporting + quarterly review)?",
    buttonLabel: "Get the performance framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending performance measurement programs across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — including monthly per-machine reporting design, quarterly business review structure, and corrective action workflow. The benchmarks reflect operator-side data and host-side feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should we measure vending machine performance?", answer: "Five dimensions: revenue (gross / net / per-machine / per-SKU), operational (uptime, stockouts, service response, refunds, waste), customer satisfaction (survey scores, complaints, requests), sustainability (kWh, ENERGY STAR, recycling, truck miles), financial (commission, total cost, ROI). Modern operators report per-machine per-metric monthly.", audience: "Property Managers" },
      { question: "What's a good uptime target?", answer: "98%+ at best-in-class operators. 95% acceptable at standard placements. Below 95% indicates operator quality issue. Build uptime SLA into operator contract; performance bonus / penalty tied to measurement. Telemetry-driven measurement, not self-reported.", audience: "Procurement" },
      { question: "What's the waste rate target?", answer: "Sub-5% target standard; 2-3% best-in-class. Best-in-class operators target 2-3% waste through telemetry-driven planogram refinement + FIFO discipline + telemetry-driven service routing. Worst-in-class waste 8-12%. Build sub-5% target into operator contract.", audience: "Procurement" },
      { question: "How often should the operator report?", answer: "Monthly per-machine per-metric reporting. Quarterly business review with operator account manager. Annual comprehensive performance review. Modern operators provide pre-formatted reports; legacy operators provide aggregate quarterly summaries. Build into contract.", audience: "Procurement" },
      { question: "What about customer satisfaction?", answer: "Annual amenity survey scores including vending. Complaint volume to host (escalations to property manager, HR). Product request volume (positive engagement signal). Year-over-year improvement target. Coordinate with operator on response to feedback patterns.", audience: "Property Managers" },
      { question: "Should we track sustainability metrics?", answer: "Yes if you report through STARS / FEMP / ESG. Operator provides kWh per machine, ENERGY STAR coverage, recycling capture, truck-mile reduction calculations. Pre-formatted quarterly reports feed agency submissions. Modern operators provide; legacy don't.", audience: "Sustainability Officers" },
      { question: "What if our operator can't provide all this?", answer: "Build into operator contract at next renewal. Modern hosts require per-machine monthly reporting + quarterly review + sustainability metrics + corrective action workflow. Operators without modern reporting can't credibly serve sophisticated host contracts. Switch operators at renewal if needed.", audience: "Procurement" },
      { question: "How should we structure the quarterly business review?", answer: "Auxiliary services / facility manager + operator account manager. Performance trends across five dimensions. Gap analysis. Corrective action planning. Planogram refinement opportunities. Strategic discussion. 60-90 minute meeting; pre-shared report.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending performance measurement standards", url: "https://www.namanow.org/", note: "Industry guidance on vending performance measurement" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry analytics", url: "https://www.cantaloupe.com/", note: "Telemetry platforms enabling per-machine per-metric measurement" },
      { label: "AASHE STARS — sustainability metric framework", url: "https://stars.aashe.org/", note: "Campus sustainability framework underlying vending metrics" },
      { label: "FEMP — Federal Energy Management Program", url: "https://www.energy.gov/femp/", note: "Federal energy reporting framework for government placements" },
      { label: "BOMA / NAA / NRF — host-side performance standards", url: "https://www.boma.org/", note: "Host-side associations covering vending performance expectations" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending vendor selection criteria", description: "Operator evaluation framework — telemetry, SLA, references, performance.", href: "/vending-Info-for-businesses/vending-vendor-selection-criteria" },
      { eyebrow: "Operations", title: "What to look for in a vending company", description: "Vendor evaluation framework — telemetry, SLA, references, transparency.", href: "/vending-faq/what-to-look-for-in-a-vending-company" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Multi-location operations, performance measurement, operator scaling, and decision frameworks.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
