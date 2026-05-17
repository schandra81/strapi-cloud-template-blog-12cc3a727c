import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-retail-vending-strategies",
  assetType: "pack",
  title: "Seasonal Retail Vending Pack",
  subtitle: "Quarterly pivot calendar, capacity expansion playbook, and measurement framework for retail placements",
  intro:
    "Retail vending demand is non-stationary. Mall traffic, big-box footfall, and outlet conversion swing 30-60% across the year (ICSC retail-traffic indices). This pack codifies a quarterly pivot calendar, a capacity-expansion playbook, and a measurement framework so a retail vending program is equipped to shift assortment, planogram, and capacity ahead of each seasonal inflection rather than reacting to stockouts.",
  sections: [
    {
      heading: "1. Quarterly pivot calendar",
      paragraph:
        "Each retail vertical has a different seasonal curve. The calendar below maps four pivot windows. Operator should be able to attest in writing to executing each pivot 2-3 weeks ahead of the demand inflection.",
      headers: ["Quarter", "Demand inflection", "Planogram pivot", "Capacity pivot"],
      rows: [
        ["Q1 (Jan-Mar)", "Post-holiday traffic dip; tax-refund recovery in March", "Lower-calorie/wellness skew; smaller pack sizes", "Reduce restock cadence 20-30% in Jan-Feb; rebuild in Mar"],
        ["Q2 (Apr-Jun)", "Mother's Day, graduation, Memorial Day weekends", "Beverages weight up; cold/hydration skew", "Pre-stage cold beverage capacity 2 weeks ahead"],
        ["Q3 (Jul-Sep)", "Back-to-school surge in Aug; tax-free weekends", "Add school-supply adjacency, breakfast bars, hydration", "Add temporary capacity in Aug; restock 3-4x/week in BTS windows"],
        ["Q4 (Oct-Dec)", "Holiday traffic peak Nov-Dec; ICSC reports +40-60% vs Q1", "Seasonal SKUs, gift-card cross-merchandise, indulgent skew", "Surge crew + secondary machines for peak weeks"],
      ],
    },
    {
      heading: "2. Capacity-expansion playbook",
      paragraph:
        "Capacity expansion has three levers: machine count, planogram depth, and restock frequency. Telemetry-driven decisions outperform calendar-only decisions by 15-25% in stockout reduction (NAMA operator benchmarks).",
      items: [
        { number: 1, title: "Telemetry baseline (4-6 weeks before peak)", description: "Pull 12 months of per-SKU velocity. Identify the top-10 SKUs that drove >50% of revenue in last year's peak window. Confirm cellular telemetry is reporting sub-15-minute heartbeat per Cantaloupe/Nayax/365 Retail Markets standards." },
        { number: 2, title: "Planogram depth pivot (2-3 weeks before)", description: "Convert low-velocity slots to peak-window SKUs. Double-face top sellers. Add a secondary cold-beverage row if telemetry shows >70% sell-through at midweek." },
        { number: 3, title: "Restock cadence pivot (1-2 weeks before)", description: "Move from 2x/week to 3-4x/week for peak windows. Pre-stage stock at the operator warehouse so restock crews can execute same-day SKU swaps." },
        { number: 4, title: "Temporary capacity (peak window)", description: "Place a secondary machine (combo or beverage cooler) near checkout queues or food court adjacency. Operator should be able to mobilize a temporary machine in 5-7 business days." },
        { number: 5, title: "Surge labor (peak weekends)", description: "Operator commits to a surge restock crew for Black Friday weekend, BTS weekend, and the week before Christmas. Surge crew is documented in the SLA addendum." },
        { number: 6, title: "Post-peak decommission (2 weeks after peak)", description: "Pull temporary capacity. Reset planogram to baseline. Capture lessons-learned for next year's pivot." },
        { number: 7, title: "Annual review", description: "QBR in January reviews stockout rate, peak-week revenue lift, and surge-cost recovery. Output feeds next year's pivot calendar." },
      ],
    },
    {
      heading: "3. Measurement framework",
      paragraph:
        "Each seasonal pivot is measured against three KPIs. Operator reports these in the quarterly business review.",
      items: [
        { label: "Stockout rate", value: "Target < 3% of SKU-hours across the peak window. Above 5% indicates restock cadence or planogram depth is undersized." },
        { label: "Peak-week revenue lift", value: "Year-over-year lift on the peak week vs prior year. Target > 15% lift on planned pivots." },
        { label: "Cashless mix", value: "Target > 70% cashless at retail placements (NACS payment-mix data). Below 60% indicates payment hardware or signage gap." },
        { label: "Refund rate", value: "Refund rate > 2% of transactions triggers planogram or hardware quality review." },
        { label: "Sell-through by SKU tier", value: "Top-10 SKUs > 55% sell-through, bottom-25 SKUs < 20% — anything outside triggers planogram review." },
      ],
    },
    {
      heading: "4. Retail-vertical pivot variants",
      paragraph:
        "Different retail formats need different pivot timing. Use this table to confirm operator understands the format's seasonal curve before executing the calendar.",
      headers: ["Retail format", "Primary peak", "Secondary peak", "Pivot lead time"],
      rows: [
        ["Enclosed mall", "Nov-Dec holiday", "Aug back-to-school", "3-4 weeks ahead"],
        ["Outlet center", "Nov-Dec holiday + Memorial Day", "Labor Day weekend", "2-3 weeks ahead"],
        ["Big-box adjacency", "Nov-Dec + Aug BTS + tax-free weekend", "Mother's Day, Father's Day", "2 weeks ahead"],
        ["Strip center / convenience", "Summer hydration + Q4 holiday", "Localized event-driven peaks", "1-2 weeks ahead"],
      ],
    },
    {
      heading: "5. Operator selection checklist",
      paragraph:
        "Use this when scoping or rebidding the retail vending contract. Operator should attest to each capability before the seasonal pivot calendar is committed.",
      items: [
        { check: "Operator has 24+ months of telemetry on comparable retail placements." },
        { check: "Operator can document a prior-year quarterly pivot with planogram + capacity records." },
        { check: "Operator has surge labor capacity for at least 3 peak weekends." },
        { check: "Operator can mobilize a temporary machine in ≤ 7 business days." },
        { check: "Operator reports quarterly KPIs (stockout, lift, cashless mix, refund rate) in writing." },
        { check: "Operator's restock cadence is contractually flexible (e.g., 2-4x/week range, not locked)." },
        { check: "Cashless hardware is current (EMV, NFC, mobile wallet) per PCI DSS and tap-to-pay standards." },
        { check: "Equipment is ADA-compliant per Section 308 reach range (operable parts ≤ 48 inches, ≥ 15 inches)." },
      ],
    },
    {
      heading: "6. Contract addendum language",
      paragraph:
        "Add the following clauses to a seasonal retail vending contract. Each closes a common gap that surfaces in peak windows.",
      items: [
        { label: "Restock cadence flexibility", value: "Operator commits to scaling restock cadence between 2-4x/week based on telemetry, at no additional fee, during defined peak windows (Aug 1 – Sep 5; Nov 15 – Dec 31)." },
        { label: "Temporary capacity option", value: "Host may request up to two temporary machines per calendar year with ≤ 7 business-day mobilization; operator absorbs setup at no fee with min 90-day deployment." },
        { label: "Planogram refresh cadence", value: "Operator executes a planogram refresh each quarter based on prior-quarter velocity report; refresh documented in QBR." },
        { label: "SLA tier definitions", value: "Tier-1 (offline / payment / cold-chain): < 24-hour resolution. Tier-2 (stockout / planogram): 24-48-hour ack, 5-7-day resolution. Tier-3 (cosmetic): 14-day resolution." },
        { label: "KPI reporting", value: "Operator provides monthly KPI report (stockout, cashless mix, refund rate, sell-through) and quarterly business review with planogram + capacity recommendations." },
      ],
    },
  ],
  footer:
    "This pack is a working operational reference. Localize the calendar to the host's retail format and confirm operator attestation in writing before executing the next quarterly pivot.",
});

console.log("wrote "+"seasonal-retail-vending-strategies");
