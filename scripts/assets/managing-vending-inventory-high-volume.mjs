import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "managing-vending-inventory-high-volume",
  assetType: "pack",
  title: "High-Volume Warehouse Vending Inventory Pack",
  subtitle: "Operator capability checklist, telemetry RFP language, planogram tiering, QBR template",
  intro:
    "High-volume warehouse vending — 600+ workers, 24/7 shifts, $80-150K/year revenue per site — fails on inventory before it fails on anything else. Stockouts above 5% drive cashless mix down 10-15 points and refund rate up 1-2 points. This pack codifies four artifacts — operator capability checklist, telemetry RFP language, planogram tiering, QBR template — so a high-volume program is equipped to keep stockouts under 3% across all SKUs and all shifts.",
  sections: [
    {
      heading: "1. Operator capability checklist",
      paragraph:
        "Validate operator capability before commit. Each item ties to a high-volume failure mode.",
      items: [
        { check: "Operator has 24+ months of placements at facilities ≥ 500 workers." },
        { check: "Operator's telemetry reports sub-15-minute heartbeat per machine." },
        { check: "Operator can demonstrate per-shift velocity tracking (shift-1 vs shift-2 vs shift-3)." },
        { check: "Operator has surge labor for high-velocity days (month-end, holiday weekends)." },
        { check: "Operator's restock crew supports 24/7 access including 3rd-shift restock." },
        { check: "Operator can mobilize a temporary machine in ≤ 5 business days for peak windows." },
        { check: "Operator carries insurance (GL ≥ $5M / auto / workers' comp / cyber)." },
        { check: "Operator attests to quarterly KPI report + per-SKU velocity report." },
      ],
    },
    {
      heading: "2. Telemetry RFP language",
      paragraph:
        "Insert these clauses into the high-volume RFP. Each addresses a common gap.",
      items: [
        { label: "Telemetry hardware", value: "Cellular modem on every machine; supported systems include Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable. Bidder attests to sub-15-minute heartbeat." },
        { label: "Velocity reporting", value: "Per-SKU velocity by machine + by shift; daily report available to host via operator dashboard." },
        { label: "Stockout alerting", value: "Auto-alert to operator restock crew when any SKU < 20% of capacity; triggered automatically by telemetry." },
        { label: "Temperature monitoring", value: "Refrigerated units report internal temp every 15 min; 4-hour SLA alarm at any excursion outside 35-40°F per FDA Food Code 3-501.16." },
        { label: "Payment failure alerting", value: "Auto-alert when payment-failure rate exceeds 1.5% in any 4-hour window." },
        { label: "Open-data API", value: "Host has read access to telemetry API for independent analysis; data retention ≥ 24 months." },
      ],
    },
    {
      heading: "3. Planogram tiering framework",
      paragraph:
        "High-volume programs use a three-tier planogram. Each tier has a defined sell-through target and a refresh cadence.",
      headers: ["Tier", "Definition", "Sell-through target", "Refresh cadence"],
      rows: [
        ["Tier 1 — core", "Top-20% velocity SKUs", "≥ 70%", "Quarterly refresh; double-face if velocity > 80%"],
        ["Tier 2 — anchors", "Middle 60% velocity", "40-60%", "Quarterly review; rotation within tier"],
        ["Tier 3 — discovery", "Bottom 20% velocity", "≥ 25%", "Replace at end of each quarter if below 20%"],
      ],
    },
    {
      heading: "4. Shift-aware capacity planning",
      paragraph:
        "Capacity = (per-shift velocity / restock cadence) × 1.3 safety factor. For high-volume, recompute monthly from telemetry.",
      items: [
        { number: 1, title: "Telemetry baseline (monthly)", description: "Pull 30-day per-SKU velocity by shift. Identify top-5 SKUs per shift; compute capacity required given restock cadence." },
        { number: 2, title: "Planogram depth", description: "Double-face Tier-1 SKUs; right-size Tier-2; reduce Tier-3 to free slots." },
        { number: 3, title: "Restock cadence", description: "3-4x/week baseline for high-volume; 5x/week during peak windows. Shift-aware timing — restock before shift-1 start and pre-shift-3." },
        { number: 4, title: "Surge labor", description: "Operator commits to surge restock crew for month-end + holiday weekends. Documented in SLA addendum." },
        { number: 5, title: "Temporary capacity", description: "Mobile combo machine pre-staged for peak windows; ≤ 5 business-day mobilization." },
      ],
    },
    {
      heading: "5. Inventory KPI dashboard",
      items: [
        { label: "Stockout rate (per-SKU)", value: "Target < 3% of SKU-hours; alert > 5%." },
        { label: "Stockout rate (per machine)", value: "Target < 1% of machine-hours; alert > 2%." },
        { label: "Sell-through by tier", value: "Tier-1 ≥ 70%; Tier-2 40-60%; Tier-3 ≥ 25%." },
        { label: "Cashless mix", value: "Target ≥ 75% at high-volume warehouse; alert < 65%." },
        { label: "Refund rate", value: "< 2% of transactions; alert > 2.5%." },
        { label: "Uptime per machine", value: "≥ 98% per month; alert < 95%." },
        { label: "Temperature excursion count", value: "0-1 per month per machine; alert ≥ 3." },
        { label: "Payment failure rate", value: "< 1.5% of attempts; alert > 2%." },
      ],
    },
    {
      heading: "6. QBR template",
      paragraph:
        "Quarterly business review with operator + ops manager + EHS coordinator. Standing agenda.",
      items: [
        { check: "Telemetry KPI report — 13 weeks of stockout, sell-through, cashless mix, refund rate, uptime." },
        { check: "Per-SKU velocity report by machine + by shift; Tier-1/2/3 movements." },
        { check: "Planogram refresh recommendations — additions, deletions, tier moves." },
        { check: "Service ticket log + SLA adherence; root-cause for any tier breach." },
        { check: "Temperature excursion log + corrective action for any event." },
        { check: "Surge labor + temporary capacity utilization in the past quarter." },
        { check: "Next-quarter pivot plan — seasonal SKU adds, capacity changes." },
        { check: "Action items + owner + due date." },
      ],
    },
    {
      heading: "7. Annual inventory recertification",
      items: [
        { check: "12-month KPI trend report (stockout, sell-through, cashless mix, refund rate)." },
        { check: "Planogram refresh — bottom-quartile SKU swap with telemetry-validated candidates." },
        { check: "Operator's surge labor + temporary capacity capability re-attested." },
        { check: "Telemetry firmware updated to current stable version." },
        { check: "Cold-chain temperature log reviewed; HACCP-style attestation refreshed." },
        { check: "Insurance certificates current." },
        { check: "Decision: maintain SLA / renegotiate / re-bid." },
      ],
    },
  ],
  footer:
    "This pack is a working inventory reference. Validate operator quotes and capability against published industry benchmarks (NAMA State of the Industry) and confirm temperature compliance attestation before commit.",
});

console.log("wrote "+"managing-vending-inventory-high-volume");
