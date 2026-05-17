import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "employee-vending-feedback",
  assetType: "checklist",
  title: "Employee Vending Feedback Framework",
  subtitle: "Five-mechanism infrastructure, operator MSA capability matrix, and QBR agenda",
  intro:
    "Use this framework to build a feedback infrastructure that drives planogram fit and operator accountability — not a one-time survey that goes nowhere. Each mechanism below is contractually attestable; the QBR agenda turns feedback into action items with owners + due dates.",
  sections: [
    {
      heading: "Five feedback mechanisms",
      paragraph:
        "Best-in-class office vending programs run all five mechanisms simultaneously. Single-channel feedback (e.g., once-a-year survey) reliably underrepresents stockout pain and overrepresents pricing complaints.",
      items: [
        { number: 1, title: "Per-SKU velocity telemetry", description: "Cantaloupe, Nayax, 365 Retail Markets, AWM — sub-15-minute heartbeat. The single most reliable signal of what employees actually want is what they actually buy." },
        { number: 2, title: "Stockout-incident log", description: "Operator logs every sold-out SKU at restock with reason code (over-velocity, missed restock, supplier shortage). Stockouts of top-quartile SKUs > 3x per month means planogram is mis-sized." },
        { number: 3, title: "Refund-volume + reason-code report", description: "Refunds > 2% of transactions signals product-quality or machine-quality issue. Refund reason codes (didn't drop, expired, wrong product) tell you which." },
        { number: 4, title: "In-app / on-machine request channel", description: "Modern card readers + apps include a 'request a product' button. Operator triages requests monthly; top-3 requested SKUs added to planogram for 60-day trial." },
        { number: 5, title: "Quarterly employee survey", description: "Short (3-5 questions): satisfaction, top complaint, top wished-for item. Run as a host-branded survey; share results with operator in the QBR." },
      ],
    },
    {
      heading: "Operator MSA capability matrix",
      headers: ["Capability", "Required in MSA", "Notes"],
      rows: [
        ["Per-SKU velocity reporting (weekly)", "Yes", "Delivered as a CSV or dashboard."],
        ["Stockout-incident log (monthly)", "Yes", "With reason codes."],
        ["Refund-volume + reason-code report (monthly)", "Yes", "Refund rate KPI in MSA."],
        ["In-app / on-machine request capture", "Preferred", "Many telemetry platforms support this natively."],
        ["Planogram refresh based on feedback (45-60 day cadence)", "Yes", "Operator commits to refresh cadence."],
        ["QBR with feedback action-item review", "Yes", "Quarterly cadence; written minutes."],
        ["Survey distribution support", "Preferred", "Operator can sponsor survey hosting + analysis."],
      ],
    },
    {
      heading: "QBR agenda template (60 minutes)",
      items: [
        { number: 1, title: "Last quarter scorecard (10 min)", description: "Uptime, stockout incidents, refund rate, service SLA adherence vs MSA targets." },
        { number: 2, title: "Per-SKU velocity review (15 min)", description: "Top 10 + bottom 10 SKUs by velocity. Decision: drop bottom 5, expand top 3 facings." },
        { number: 3, title: "Stockout + refund deep-dive (10 min)", description: "Root cause for top 3 stockout incidents and any reason-code spike in refunds." },
        { number: 4, title: "Employee request review (10 min)", description: "Top 3 in-app / survey requests; commit to 60-day trial on top 2." },
        { number: 5, title: "Planogram refresh decision (10 min)", description: "Net change to SKU list; effective date; communication to employees." },
        { number: 6, title: "Action items (5 min)", description: "Owner + due date for each item; carry forward to next QBR." },
      ],
    },
    {
      heading: "Sample monthly metrics summary",
      headers: ["Metric", "MSA target", "Last month", "Trend"],
      rows: [
        ["Uptime", "≥ 98%", "—", "—"],
        ["Stockout incidents per machine", "< 3", "—", "—"],
        ["Refund rate (% of transactions)", "< 2%", "—", "—"],
        ["Tier-1 service SLA adherence", "≥ 95% < 24 hours", "—", "—"],
        ["Top-10 SKU coverage at audit", "≥ 95%", "—", "—"],
        ["Velocity-driven planogram refresh", "Every 60 days", "—", "—"],
      ],
    },
    {
      heading: "Common pitfalls (and how to avoid them)",
      items: [
        { check: "Survey-only feedback — runs annual, ignores stockout pain. Pair with telemetry from day 1." },
        { check: "No reason codes on refunds — operator can't fix what isn't categorized." },
        { check: "Planogram changes without comms — employees don't know new SKUs exist. Use signage + email/Slack." },
        { check: "QBR without action items — meeting becomes social. Owner + due date on every line." },
        { check: "Operator pushes back on velocity sharing — non-starter. Velocity transparency is industry-standard in 2025." },
      ],
    },
  ],
  footer:
    "This framework is operational guidance for host-side facility + HR teams. Adapt cadence and KPIs to your headcount and breakroom footprint.",
});

console.log("wrote "+"employee-vending-feedback");
