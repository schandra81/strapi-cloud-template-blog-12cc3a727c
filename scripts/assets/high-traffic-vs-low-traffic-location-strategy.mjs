import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "high-traffic-vs-low-traffic-location-strategy",
  assetType: "playbook",
  title: "High-Traffic vs Low-Traffic Vending Playbook",
  subtitle: "Equipment, telemetry, service cadence, commission structure, portfolio discipline",
  intro:
    "Vending portfolios that treat every placement identically underperform on both ends — they over-spec low-traffic placements and under-serve high-traffic ones. This playbook codifies the two operating envelopes (high-traffic / low-traffic) across equipment, telemetry, service cadence, commission, and the portfolio-mix discipline that keeps the route profitable.",
  sections: [
    {
      heading: "1. Traffic classification",
      headers: ["Tier", "Transactions/week", "Examples", "Operating envelope"],
      rows: [
        ["T1 — High-traffic", "500+ / week", "Hospital, airport, transit, large factory, university student union", "Daily restock + premium equipment + full telemetry"],
        ["T2 — Medium-traffic", "150-500 / week", "Mid-size office, mid-size manufacturing, mid-size school", "2-3 visits/week + standard equipment + telemetry"],
        ["T3 — Low-traffic", "30-150 / week", "Small office, small clinic, remote satellite, low-density placement", "Weekly visit + standard equipment + telemetry"],
        ["T4 — Marginal", "≤ 30 / week", "Underperforming placement — review for removal or relocation", "Quarterly review for removal"],
      ],
    },
    {
      heading: "2. Equipment specification by tier",
      paragraph:
        "Over-spec on T3-T4 placements destroys the route economics; under-spec on T1 placements destroys the customer experience. Equipment selection follows traffic.",
      items: [
        { label: "T1 — High-traffic", value: "Premium glass-front (USelect VM850, Crane Merchant Media), wide selection 40-60 SKUs, 21-32 in. screen, contactless + app pay, dispense camera. Or micro-market (365 Retail Markets, Avanti)." },
        { label: "T2 — Medium-traffic", value: "Standard glass-front (Crane Merchant Combo, AMS 39, Royal 660). Branded wrap. Cellular telemetry." },
        { label: "T3 — Low-traffic", value: "Standard glass-front, possibly used + refurbished cabinet. Reliable cellular telemetry mandatory to avoid wasted truck rolls." },
        { label: "T4 — Marginal", value: "Retain only if strategic (account relationship, future growth, brand obligation). Otherwise relocate to higher-traffic site." },
      ],
    },
    {
      heading: "3. Telemetry baseline — all tiers",
      paragraph:
        "Cellular-modem-enabled telemetry (Cantaloupe Seed, Nayax, 365 Retail Markets, Crane Streamware) is mandatory across all tiers — the low-traffic placements need it most to avoid wasted truck rolls.",
      items: [
        { check: "Online status + heartbeat sub-15-min on T1-T2; sub-30-min on T3-T4" },
        { check: "Per-SKU sell-through + cash/cashless mix + payment-failure rate" },
        { check: "Refrigeration temperature monitoring on every refrigerated unit (33-41°F / 0°F frozen)" },
        { check: "Route-optimization software (Vendsoft, VendingMetrics, VendMAX) consumes telemetry to schedule restock by actual depletion, not fixed days" },
        { check: "Alert routing — Tier 1 alerts to dispatch within 5 min; Tier 2-3 batched into route morning briefing" },
      ],
    },
    {
      heading: "4. Service cadence by tier",
      headers: ["Tier", "Restock cadence", "Tier 1 SLA", "Tier 2 SLA", "Tier 3 SLA"],
      rows: [
        ["T1", "Daily / 5x week", "< 8 hr", "< 24 hr / 3 day", "< 5 day"],
        ["T2", "2-3x week", "< 24 hr", "< 48 hr / 5-7 day", "< 14 day"],
        ["T3", "1x week", "< 24-48 hr", "< 72 hr / 7 day", "< 14 day"],
        ["T4", "Per-need (telemetry trigger)", "< 48 hr", "< 7 day", "< 21 day"],
      ],
    },
    {
      heading: "5. Commission structure by tier",
      paragraph:
        "Commission rates flex with placement economics. T1 high-traffic placements can support higher host commission while still generating route margin; T3-T4 cannot.",
      items: [
        { number: 1, title: "T1 commission", description: "10-25% of gross sales typical; 30%+ for marquee placements (university student union, airport food court). Some T1 placements bid as flat monthly rent + commission floor." },
        { number: 2, title: "T2 commission", description: "10-15% of gross sales typical. Tiered escalators per revenue band reward host for growing the placement." },
        { number: 3, title: "T3 commission", description: "0-10% of gross sales typical. Many T3 placements run zero-commission to fund the logistics premium." },
        { number: 4, title: "T4 commission", description: "Zero commission + relocation consideration. Or operator subsidy reversed (host pays a per-employee subsidy to retain access)." },
        { number: 5, title: "Equipment investment recovery", description: "Premium equipment on T1 placements amortizes over 5-7 years against transaction volume; T3-T4 placements use existing or refurbished equipment to avoid capex sink." },
      ],
    },
    {
      heading: "6. Portfolio mix discipline",
      paragraph:
        "Healthy vending routes carry a portfolio mix — not all T1, not all T3. The mix balances revenue (T1-T2 carries), profitability (T3-T4 fills route windows), and relationship (T3-T4 doors open T1-T2 referrals).",
      items: [
        { check: "Target mix — 20-30% T1, 40-50% T2, 20-30% T3, < 10% T4 by placement count" },
        { check: "Revenue contribution — T1 should carry 50-70% of route revenue; T2 30-40%; T3 5-15%; T4 < 5%" },
        { check: "Route windows — T3-T4 stops fill the geography between T1-T2 anchors; net incremental drive-time minimized" },
        { check: "Annual portfolio review — every placement reviewed for retention, repositioning, or removal based on 12-month trailing economics" },
        { check: "T4 removal threshold — placements that miss revenue floor 2 quarters in a row + show no growth trajectory removed unless strategic" },
        { check: "T1 prospect pipeline — 3-5 active T1 prospects in pipeline at any time to backfill churn or replace T4 capacity" },
      ],
    },
    {
      heading: "7. KPI scorecard — by tier",
      headers: ["Metric", "T1", "T2", "T3"],
      rows: [
        ["Uptime", "≥ 99%", "≥ 98%", "≥ 96%"],
        ["Stockout SKU-hours", "≤ 1%", "≤ 2%", "≤ 4%"],
        ["Average transaction value", "$3-$8", "$2-$4", "$2-$3"],
        ["Tier 1 resolution time", "< 8 hr", "< 24 hr", "< 48 hr"],
        ["Refund rate", "< 1%", "< 2%", "< 3%"],
        ["Route-density (placements per route-hour)", "Lower (1-2)", "Higher (3-4)", "Higher (4-6)"],
        ["Annual revenue per placement", "$30K-$100K+", "$10K-$30K", "$3K-$10K"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, traffic-tier classification, equipment + commission structuring, and portfolio mix review for vending placements at every traffic level.",
});

console.log("wrote "+"high-traffic-vs-low-traffic-location-strategy");
