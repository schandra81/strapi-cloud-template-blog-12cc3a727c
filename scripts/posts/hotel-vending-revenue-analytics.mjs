import { seedPost, tldr, statStrip, comparisonTable, specList, sampleStatement, tipCards, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("hotel-vending-revenue-analytics", [
  tldr({
    heading: "What does serious hotel vending revenue analytics look like?",
    paragraph:
      "Hotel vending revenue analytics has moved well beyond the legacy monthly commission statement — modern programs track revenue at the machine + zone + SKU + day-part level, correlate it with hotel occupancy and event-calendar data, and feed it back into planogram and placement decisions on a quarterly cadence. Strong analytics programs run on four data layers: (1) telemetry capture at the machine (every dispense, every payment attempt, every door-open event); (2) revenue attribution by zone (lobby vs guestroom floor vs amenity vs BOH) so per-zone economics are visible; (3) correlation with hotel data (occupancy, ADR, RevPAR, event-calendar density, guest demographic mix); and (4) operator + property joint review on a quarterly cadence with planogram and placement adjustments coming out of each review. The KPIs that matter at the hotel program level: revenue per available machine per month (RevPAM), revenue per occupied room per month (RevPOR — vending equivalent), per-SKU velocity, stockout-hours per machine per month, payment-failure rate, refund rate, and shrinkage rate at lobby AI cooler walls. Properties without analytics discipline are operating blind — they don't know which machines are paying back capital, which placements are draggers, or which SKUs would generate more revenue with better planogram tuning. Modern operators bring the analytics stack as part of the service contract; legacy operators may still report on paper monthly commission statements only.",
    bullets: [
      { emphasis: "Four data layers — telemetry + zone attribution + hotel data correlation + quarterly review:", text: "Telemetry capture at the machine; per-zone revenue economics; correlate with occupancy + ADR + event-calendar; quarterly operator + property joint review." },
      { emphasis: "KPIs that matter — RevPAM, RevPOR (vending), velocity, stockout-hours, payment-failure rate, shrinkage:", text: "Per-available-machine revenue, per-occupied-room vending revenue, SKU-level velocity, stockout-hours per month, payment-failure %, shrinkage at lobby AI cooler walls." },
      { emphasis: "Modern operators bring the stack; legacy report monthly paper statements:", text: "Verify analytics capability at operator selection — telemetry dashboards, per-zone reporting, quarterly review cadence. Legacy paper commission statements are not adequate for serious program management.", },
    ],
  }),
  statStrip({
    heading: "Hotel vending revenue analytics benchmarks",
    stats: [
      { number: "$0.40-2.20", label: "RevPOR vending", sub: "per occupied room / month", accent: "blue" },
      { number: "$300-2,400", label: "RevPAM", sub: "per available machine / month", accent: "blue" },
      { number: "<2%", label: "stockout-hours target", sub: "of total machine-hours", accent: "orange" },
      { number: "Quarterly", label: "joint review cadence", sub: "operator + property", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Hotel vending KPIs and benchmark ranges",
    sub: "Modern hotel vending analytics tracks these KPIs at the machine + zone level. Benchmark ranges vary by brand tier and occupancy patterns.",
    headers: ["KPI", "Definition", "Target / benchmark", "Action if missed"],
    rows: [
      ["RevPAM", "Revenue per available machine per month", "$300-2,400 (tier-dependent)", "Audit placement + planogram + price-tier"],
      ["RevPOR vending", "Vending revenue per occupied room per month", "$0.40-2.20", "Cross-check planogram + lobby availability"],
      ["SKU velocity", "Units sold per SKU per week", "1.5-15 / SKU / week (tier-dependent)", "Rotate planogram quarterly; drop dead SKUs"],
      ["Stockout-hours", "% of machine-hours with stockouts", { icon: "check", text: "<2% target" }, "Telemetry-driven restock cadence"],
      ["Payment-failure rate", "% of transactions with payment failure", "<1.5%", "Audit payment hardware + connectivity"],
      ["Refund rate", "% of transactions refunded for dispense failure", "<0.8%", "Audit dispense mechanism + signal"],
      ["Lobby AI cooler shrinkage", "Inventory loss as % of revenue", "1.5-3%", "Audit camera coverage + line-of-sight"],
    ],
  }),
  specList({
    heading: "Hotel vending analytics program specifications",
    items: [
      { label: "Telemetry capture at the machine", value: "Every dispense event (SKU, time, price, payment type). Every payment attempt (success, decline, hardware fail). Every door-open event (service window vs anomaly). Refrigeration status + temperature (for refrigerated equipment). Network connectivity status. Modern operators run 100% telemetry; legacy may run partial (mechanical machines without telemetry can't be tracked at this level)." },
      { label: "Revenue attribution by zone", value: "Per-zone P&L visible to property: guestroom floors (per-floor and aggregate), lobby grab-and-go / AI cooler wall, fitness center beverage cooler, pool deck (seasonal), event-space corridor, BOH housekeeping break room, BOH corridor. Allows targeted placement and planogram decisions. Modern dashboard shows zone-level revenue, velocity, and stockout patterns." },
      { label: "Correlation with hotel data", value: "Vending revenue correlated with hotel occupancy (RevPAR + ADR), event-calendar density, guest demographic mix (corporate transient vs leisure vs group), seasonal patterns. Strong correlation insight: vending revenue moves with occupancy at most properties (0.6-0.8 correlation typical) but lobby grab-and-go moves more with guest demographic mix (leisure travelers spend more)." },
      { label: "Quarterly joint review", value: "Operator + property leadership review quarterly: per-zone revenue, KPI performance, planogram velocity, placement recommendations, contract performance vs SLA. Modern operators bring written report + recommendations; property reviews with F&B, front office, and procurement leads. Adjustments documented and applied within 30 days of review." },
      { label: "Dashboard + reporting access", value: "Property gets dashboard access to telemetry data — RevPAM by machine, RevPOR vending, per-zone revenue, stockout-hours, payment-failure rate, refund rate, shrinkage at lobby AI cooler. Read-only access typical; some operators provide configurable views by hotel role (operations, finance, F&B, GM)." },
      { label: "Per-SKU velocity tracking", value: "Velocity per SKU per machine per week — identifies high-velocity SKUs to keep and expand, low-velocity SKUs to rotate out, and SKUs that perform differently by zone (premium SKUs may velocity well at lobby AI cooler but poorly at BOH break room). Quarterly planogram refresh applies velocity data." },
      { label: "Stockout-hours measurement", value: "% of machine-operating-hours during which one or more SKUs were stocked out. Target <2% at modern programs. Telemetry-driven operators run dynamic restock cadence based on actual velocity + stockout patterns; legacy operators run fixed weekly / bi-weekly routes regardless of actual stockout." },
      { label: "Payment + refund analytics", value: "Payment-failure rate (target <1.5%) — payment hardware + network issues. Refund rate (target <0.8%) — dispense mechanism + signal issues. Refund auto-trigger on dispense failure (modern best practice — don't require guest to call to request refund). Track by machine + by payment method to identify hardware failures early." },
      { label: "Lobby AI cooler shrinkage measurement", value: "AI cooler inventory loss tracked as % of revenue. Target 1.5-3% at well-positioned placement. Higher shrinkage (5-10%+) flags camera coverage gaps, line-of-sight issues, or peak-hours staffing gaps. Modern AI cooler systems include vision + weight sensor anomaly detection at the door-event level." },
    ],
  }),
  sampleStatement({
    heading: "Sample quarterly hotel vending revenue statement",
    sub: "Modeled Q3 statement for a 280-room upscale select-service hotel with 5 vending placements + 1 lobby AI cooler wall. Figures illustrate the analytics depth a modern operator can provide.",
    accountName: "280-room Upscale Select-Service Hotel — Vending Program",
    period: "Q3 (Jul-Sep)",
    issuedDate: "Oct 12",
    paymentMethod: "ACH transfer to property AR",
    calculationBasis: "Net revenue × commission rate per placement (per executed agreement)",
    lines: [
      { machineLabel: "Floor 3 alcove — AI cooler", location: "Floor 3", units: 1, gross: "$4,820", refunds: "$28", net: "$4,792", rate: "18%", commission: "$863" },
      { machineLabel: "Floor 7 alcove — AI cooler", location: "Floor 7", units: 1, gross: "$5,140", refunds: "$31", net: "$5,109", rate: "18%", commission: "$920" },
      { machineLabel: "Floor 10 alcove — combo", location: "Floor 10", units: 1, gross: "$2,180", refunds: "$18", net: "$2,162", rate: "15%", commission: "$324" },
      { machineLabel: "Lobby AI cooler wall (6-door)", location: "Lobby — behind espresso bar", units: 1, gross: "$11,420", refunds: "$84", net: "$11,336", rate: "20%", commission: "$2,267" },
      { machineLabel: "Fitness beverage cooler", location: "Fitness center", units: 1, gross: "$1,640", refunds: "$12", net: "$1,628", rate: "15%", commission: "$244" },
    ],
    totalGross: "$25,200",
    totalRefunds: "$173",
    totalNet: "$25,027",
    totalCommission: "$4,618",
    footnote: "Modeled statement. Refunds auto-triggered on dispense failure. RevPAM by machine and per-zone P&L available in operator dashboard with read-only property access.",
  }),
  tipCards({
    heading: "Five hotel vending analytics practices that separate modern from legacy operators",
    sub: "Each one signals a serious operator. Verify at RFP and during the first quarterly review.",
    items: [
      { title: "Per-machine + per-zone P&L visibility", body: "Modern operators provide per-machine and per-zone revenue, velocity, and stockout data in a dashboard the property can access. Legacy operators report aggregate monthly numbers on paper commission statements. Per-zone P&L is what enables targeted placement and planogram decisions; aggregate numbers hide the dragging placements." },
      { title: "Correlation with hotel occupancy and event-calendar data", body: "Strong analytics correlate vending revenue with occupancy and event-calendar density. Pre-conference week vending revenue spikes 30-60% over baseline; understanding the correlation supports demand-driven restock and planogram pivots. Modern operators pull occupancy data from the property; legacy operators run fixed routes regardless of occupancy." },
      { title: "Stockout-hours measurement, not just stockout rate", body: "Stockout-hours captures the duration of stockouts, not just whether one occurred. A stockout that lasts 36 hours is far worse than one resolved in 4 hours. Target <2% stockout-hours / total machine-hours. Modern telemetry-driven operators run this metric; legacy operators may not measure it at all." },
      { title: "Refund auto-trigger on dispense failure", body: "Modern AI coolers + telemetry-equipped machines auto-trigger refund on detected dispense failure (no payment to operator if product didn't dispense). Legacy machines require guest to call the operator's customer service line — friction and lost goodwill follow. Verify auto-refund at RFP." },
      { title: "Quarterly joint review with documented adjustments", body: "Modern operators run a quarterly review with property leadership covering per-zone P&L, KPI performance, and recommended adjustments — documented and applied within 30 days. Legacy operators may not review at all between annual contract renewals. The quarterly cadence is what keeps the program tuned." },
    ],
  }),
  caseStudy({
    tag: "Capability scenario · 280-room upscale select-service",
    title: "Quarterly analytics-driven adjustment at 280-room upscale select-service hotel",
    context: "Capability scenario for a 280-room upscale select-service hotel one full quarter after placement redesign. Q3 quarterly review identified that the Floor 10 combo machine was the lowest RevPAM in the program ($2,180 quarter) while the lobby AI cooler wall was the highest ($11,420). Recommendation: replace Floor 10 combo with AI cooler at next refresh and rebalance commission rate, adjust lobby planogram to expand premium grab-and-go SKUs (which were driving most of the lobby revenue lift).",
    meta: [
      { label: "Rooms", value: "280 upscale select-service" },
      { label: "Placements", value: "5 + 1 lobby AI cooler wall" },
      { label: "Quarter gross", value: "$25,200" },
      { label: "Property commission", value: "$4,618" },
    ],
    results: [
      { number: "$11,420", label: "modeled lobby AI cooler Q3 gross" },
      { number: "$2,180", label: "modeled Floor 10 combo Q3 gross" },
      { number: "1.8%", label: "modeled stockout-hours" },
      { number: "1.1%", label: "modeled refund rate" },
    ],
  }),
  inlineCta({
    text: "Want the hotel vending analytics framework (KPIs + telemetry + per-zone P&L + quarterly review)?",
    buttonLabel: "Get the analytics framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help hotel operations + finance teams design vending revenue analytics programs across economy, mid-scale, upscale, luxury, and convention properties — including telemetry capture, per-zone revenue attribution, hotel-data correlation, KPI dashboard access, quarterly joint review cadence, and operator selection criteria around analytics capability. The benchmarks reflect operator-side data on hotel vending analytics maturity.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What KPIs should we track for hotel vending?", answer: "RevPAM (revenue per available machine per month), RevPOR vending (vending revenue per occupied room per month), per-SKU velocity, stockout-hours, payment-failure rate, refund rate, and shrinkage at lobby AI cooler walls. Modern operators track all of these via telemetry and provide dashboard access.", audience: "Operations + Finance" },
      { question: "What's a typical RevPAM for hotel vending?", answer: "$300-2,400 per machine per month depending on brand tier and placement. Per-floor combo machines at mid-scale hotels track $300-700; lobby AI cooler walls at upscale full-service can hit $1,500-2,400+. Use RevPAM by machine to identify draggers and high performers.", audience: "Finance" },
      { question: "How do we get access to vending revenue data?", answer: "Modern operators provide a property dashboard with read-only access to telemetry data — RevPAM by machine, per-zone P&L, KPI performance, and historical trend. Verify dashboard access at RFP. Legacy operators may provide only paper monthly commission statements; this is inadequate for serious program management.", audience: "Procurement" },
      { question: "How often should we review vending analytics?", answer: "Quarterly joint review is the modern standard. Operator brings per-zone P&L, KPI performance, planogram velocity, placement recommendations. Property leadership (F&B, front office, GM) reviews and documents adjustments. Adjustments applied within 30 days of review.", audience: "GM + Operations" },
      { question: "What's the relationship between vending revenue and hotel occupancy?", answer: "Strong correlation (0.6-0.8 typical) — vending revenue moves with occupancy. Pre-conference week vending revenue can spike 30-60% over baseline. Lobby grab-and-go revenue correlates more with guest demographic mix than overall occupancy (leisure travelers spend more in lobby).", audience: "Operations + Revenue Mgmt" },
      { question: "What stockout target is realistic?", answer: "<2% stockout-hours (% of machine-operating-hours with one or more SKUs stocked out). Modern telemetry-driven operators run dynamic restock cadence based on actual velocity and hit this target. Legacy operators on fixed weekly / bi-weekly routes typically run 5-10% stockout-hours.", audience: "Operations" },
      { question: "How does shrinkage at lobby AI cooler walls work?", answer: "AI cooler walls track inventory loss as % of revenue. Target 1.5-3% at well-positioned placement. Higher shrinkage (5-10%+) flags camera coverage gaps, line-of-sight issues, or peak-hours staffing gaps. Modern AI cooler systems include vision + weight sensor anomaly detection.", audience: "Risk + Operations" },
      { question: "What should we ask an operator about analytics during RFP?", answer: "What's their telemetry coverage (100% target)? Do they provide a property dashboard with read-only access? Do they correlate vending data with hotel occupancy + event calendar? Do they run a quarterly joint review with documented adjustments? Do they auto-trigger refunds on dispense failure? Verify with 2-3 reference properties.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AHLA — American Hotel & Lodging Association", url: "https://www.ahla.com/", note: "Industry trade association covering hotel operations and revenue management" },
      { label: "STR — Hotel performance benchmarking", url: "https://str.com/", note: "Industry data on hotel performance metrics including RevPAR and occupancy correlation" },
      { label: "HSMAI — Hospitality Sales and Marketing Association International", url: "https://www.hsmai.org/", note: "Industry guidance on hotel revenue analytics and ancillary revenue programs" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Operator-side guidance on vending KPIs and telemetry-driven program management" },
      { label: "Vending MarketWatch — Hotel vending coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering hotel vending program design and analytics maturity" },
    ],
  }),
  relatedGuides({
    heading: "Related hotel vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending machine placement strategies for hotels", description: "Brand-tier-matched placement design and 7-day traffic study methodology.", href: "/vending-for-hotels/vending-machine-placement-strategies-for-hotels" },
      { eyebrow: "Operations", title: "Hotel vending operator selection criteria", description: "Telemetry capability, analytics dashboard access, quarterly review cadence, and reference-check approach.", href: "/vending-for-hotels/hotel-vending-operator-selection" },
      { eyebrow: "Hub", title: "All hotel vending guides", description: "Placement, equipment, planogram, analytics, BOH programs, and operator selection patterns across hospitality.", href: "/vending-for-hotels" },
    ],
  }),
]);
process.exit(0);
