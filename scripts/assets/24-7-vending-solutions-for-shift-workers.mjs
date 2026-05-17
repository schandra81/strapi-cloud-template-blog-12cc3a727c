import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "24-7-vending-solutions-for-shift-workers",
  assetType: "playbook",
  title: "24/7 Shift-Work Vending Operational Playbook",
  subtitle: "Restock cadence, service SLA, shift-aware planogram, refund procedure",
  intro:
    "This playbook codifies the operating practices that keep a 24/7 vending program running at 98%+ uptime across three shifts. Each section maps to a measurable SLA the operator can attest to in writing.",
  sections: [
    {
      heading: "1. Telemetry baseline",
      items: [
        { label: "Required telemetry", value: "Cellular-modem-enabled machines with sub-15-minute heartbeat. Cantaloupe Seed, Nayax VPOS Touch, 365 Retail Markets ConnectedFresh, AWM Smart Shelf, or Crane Streamware." },
        { label: "Metrics monitored", value: "Online/offline status, last-restock timestamp, per-SKU velocity, cash/cashless mix, payment-failure rate, internal temperature for refrigerated units, door-open events." },
        { label: "Alert thresholds", value: "Offline > 30 minutes triggers operator alert. Temperature excursion outside 33-41°F (refrigerated) or above 0°F (frozen) triggers immediate alert with 4-hour SLA." },
        { label: "Dashboards", value: "Per-machine + per-shift dashboards exposed to host facilities + EHS lead; weekly digest emailed to operations." },
      ],
    },
    {
      heading: "2. Restock cadence by shift volume",
      headers: ["Shift volume", "Visits per week", "Pre-shift restock", "Peak coverage"],
      rows: [
        ["High (200+ workers/shift)", "3-4", "Before shift-1 start (5-6 AM)", "Dedicated surge crew during peak transitions"],
        ["Medium (100-200 workers/shift)", "2-3", "Before shift-1 start", "Telemetry-driven mid-shift top-off"],
        ["Low (under 100 workers/shift)", "1-2", "Off-peak window", "On-demand based on telemetry"],
      ],
    },
    {
      heading: "3. Service SLA — operator-side",
      items: [
        { number: 1, title: "Tier 1 — revenue-critical / cold-chain / payment failure", description: "<24 hour acknowledgement, <24 hour resolution. Examples: machine offline, payment system down, temperature excursion. Tier 1 includes any condition that prevents a worker on shift from completing a transaction." },
        { number: 2, title: "Tier 2 — stockout / planogram refresh", description: "24-48 hour acknowledgement, 5-7 day resolution. Examples: single SKU stockout, planogram update request, label refresh." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "5-day acknowledgement, 14-day resolution. Examples: signage replacement, cabinet cleaning, decal refresh, payment-reader screen scratch." },
        { number: 4, title: "Escalation path", description: "Tier 1 missed SLA escalates to operator account manager + host facilities lead within 4 hr; second miss escalates to operator VP + host procurement lead within 12 hr." },
      ],
    },
    {
      heading: "4. Shift-aware planogram",
      paragraph:
        "Shift-1 (day) and shift-3 (overnight) workers have different purchase patterns. Shift-1 weights breakfast + lunch; shift-3 weights caffeine + hot snacks + comfort foods. Telemetry tracks per-shift velocity so the planogram adjusts each quarterly review. ACOEM industrial-workforce guidance frames hydration as a safety control across all shifts.",
      items: [
        { label: "Shift-1 (6 AM – 2 PM)", value: "Breakfast bars, fresh fruit, yogurt, coffee, water, balanced lunch combo. Hydration share ≥ 30% of beverage facings." },
        { label: "Shift-2 (2 PM – 10 PM)", value: "Snacks + sodas + energy drinks + lunch leftovers + meal-replacement. Highest transaction volume on most plants." },
        { label: "Shift-3 (10 PM – 6 AM)", value: "Caffeinated beverages, hot drinks, comfort snacks, calorie-dense meal replacements. Hot coffee + RTD coffee + energy drinks weighted 40-50% of beverage facings." },
        { label: "Quarterly tuning", value: "Per-shift velocity report drives planogram refresh each quarter — top-3 add + bottom-3 remove per shift." },
      ],
    },
    {
      heading: "5. Refund procedure",
      items: [
        { number: 1, title: "Member-initiated refund", description: "Worker triggers refund through operator app, on-machine touchpad, or SMS-to-refund number. Auto-credit within 24 hours for cashless transactions." },
        { number: 2, title: "Cash refund", description: "Worker fills out refund slip; operator credits at next visit (max 7 days) or issues check via host HR/admin where applicable." },
        { number: 3, title: "Refund audit", description: "Quarterly refund report from operator to host. Refund rate > 2% of transactions triggers planogram + machine quality review." },
        { number: 4, title: "Refund SLA", description: "Cashless: <24 hr auto-credit. Cash: <7 days. Disputed: <14 days with operator manager + host EHS sign-off." },
      ],
    },
    {
      heading: "6. Quarterly business review checklist",
      items: [
        { check: "Uptime report (per-machine, per-month over the quarter)" },
        { check: "Per-shift velocity report (shift-1 vs shift-2 vs shift-3)" },
        { check: "Stockout incidents + resolution time" },
        { check: "Refund volume + reason codes" },
        { check: "Service ticket SLA adherence (Tier 1-3)" },
        { check: "Planogram refresh recommendations" },
        { check: "Hydration share + wellness alignment (ACOEM heat-stress + industrial workforce)" },
        { check: "Action items + owner + due date" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Uptime per machine", "≥ 98%", "Monthly"],
        ["Stockout SKU-hours", "≤ 2%", "Weekly"],
        ["Tier 1 resolution time", "< 24 hr", "Monthly"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Shift-3 transaction share", "Per-plant baseline", "Quarterly"],
        ["Per-shift velocity adherence", "Within 10% of forecast", "Quarterly"],
        ["Hydration share (beverage facings)", "≥ 30%", "Quarterly"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate 24/7 shift-aware operator selection and SLA structuring against the targets in this playbook.",
});

console.log("wrote "+"24-7-vending-solutions-for-shift-workers");
