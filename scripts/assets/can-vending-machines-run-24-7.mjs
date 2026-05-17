import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-vending-machines-run-24-7",
  assetType: "checklist",
  title: "24/7 Vending Operations Checklist",
  subtitle: "Telemetry spec, on-call SLA template, and shift-aware planogram guidance",
  intro:
    "Use this checklist when scoping a 24/7 vending program — manufacturing plants, hospitals, data centers, airports, or any site with continuous overnight presence. 24/7 operations differ from standard placements primarily in telemetry, after-hours SLA, and shift-aware merchandising. Mark each item as Verified, Acceptable with mitigation, or Reject before contract execution.",
  sections: [
    {
      heading: "1. Telemetry baseline — required for 24/7 operations",
      items: [
        { check: "Cellular-modem-enabled machines on every unit; LTE or LTE-M preferred for indoor commercial sites." },
        { check: "Heartbeat interval ≤ 15 minutes; offline alert SLA ≤ 30 minutes to operator on-call." },
        { check: "Per-SKU velocity reporting available daily; cash/cashless mix and payment-failure rate reported per machine." },
        { check: "Refrigerated units report internal cabinet temperature continuously; excursion outside 35-40°F (FDA Food Code 3-501.16) triggers an immediate alert." },
        { check: "Telemetry platform compatibility verified (Cantaloupe, Nayax, 365 Retail Markets, AWM, Crane Streamware, or comparable)." },
      ],
    },
    {
      heading: "2. On-call SLA template — operator-side",
      headers: ["Tier", "Examples", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — critical", "Machine offline, payment system down, temperature excursion", "≤ 1 hour, 24/7", "≤ 24 hours"],
        ["Tier 2 — operational", "Single-SKU stockout, jammed coil, planogram update request", "≤ 24-48 hours", "≤ 5-7 days"],
        ["Tier 3 — cosmetic", "Signage replacement, cabinet cleaning, label refresh", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "3. Shift-aware planogram",
      paragraph:
        "Shift-1 (day) and shift-3 (overnight) workers buy different products. Telemetry tracks per-shift velocity so the planogram can be tuned at each quarterly review.",
      items: [
        { check: "Shift-1 (6 AM – 2 PM): breakfast bars, fresh fruit, yogurt, coffee, water, balanced lunch combos." },
        { check: "Shift-2 (2 PM – 10 PM): snacks, sodas, energy drinks, lunch leftovers." },
        { check: "Shift-3 (10 PM – 6 AM): caffeinated beverages, hot drinks, comfort snacks, calorie-dense meal replacements." },
        { check: "Quarterly per-shift velocity report from operator with SKU adds/swaps recommended for the next quarter." },
        { check: "Stockout reattribution: stockouts on the overnight shift count against the operator's SLA the same as daytime stockouts." },
      ],
    },
    {
      heading: "4. Restock cadence by shift volume",
      headers: ["Shift volume", "Visits per week", "Pre-shift restock window"],
      rows: [
        ["High (200+ workers/shift)", "3-4", "Before shift-1 start (5-6 AM); telemetry-driven mid-shift top-off"],
        ["Medium (100-200 workers/shift)", "2-3", "Before shift-1 start; mid-week telemetry-triggered visit"],
        ["Low (under 100 workers/shift)", "1-2", "Off-peak window, telemetry-driven only"],
      ],
    },
    {
      heading: "5. Refund and member-experience flow",
      items: [
        { check: "Self-service refund accessible via operator app, SMS-to-refund number, or on-machine touchpad — accessible at any hour." },
        { check: "Cashless refunds auto-credited within 24 hours; cash refunds processed at the next visit (≤ 7 days)." },
        { check: "Refund volume report delivered quarterly; refund rate > 2% of transactions triggers planogram + machine quality review." },
        { check: "Customer support phone or chat answered 24/7 (operator or platform vendor)." },
      ],
    },
    {
      heading: "6. Quarterly business review evidence pack",
      items: [
        { check: "Per-machine, per-month uptime report covering the quarter." },
        { check: "Per-shift velocity report (shift-1 / shift-2 / shift-3) with stockout count and resolution time." },
        { check: "Refund volume and reason codes; service ticket SLA adherence summary." },
        { check: "Energy use estimate if the host reimburses metered electricity (typical 24/7 refrigerated unit: 8-12 kWh/day)." },
        { check: "Planogram refresh recommendations and action items with named owners and due dates." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. SLA terms and energy benchmarks vary by site type, machine mix, and operator. LetUsVending can connect you with operators equipped to attest to each item in writing — request the 24/7 capability matrix to compare candidates side by side.",
});

console.log("wrote " + "can-vending-machines-run-24-7");
