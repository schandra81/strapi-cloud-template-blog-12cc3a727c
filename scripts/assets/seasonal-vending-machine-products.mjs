import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-vending-machine-products",
  assetType: "playbook",
  title: "Seasonal Vending Rotation Playbook",
  subtitle: "Four rotations, holiday overlays, telemetry-driven iteration",
  intro:
    "Operators that hold a static planogram for 12 months leave 8-15% of potential revenue on the table. This playbook codifies the four-rotation calendar, the holiday overlays that sit on top, and the telemetry-driven iteration discipline that keeps every rotation tuning toward sell-through, not preference.",
  sections: [
    {
      heading: "1. Four rotations — calendar framework",
      headers: ["Rotation", "Window", "Demand drivers", "Planogram tilt"],
      rows: [
        ["R1 — Winter (Dec-Feb)", "Dec 1 – Feb 28", "Cold weather, comfort, hot beverages, holiday baking flavors", "Hot beverage, comfort snack, holiday flavor (peppermint, gingerbread, eggnog)"],
        ["R2 — Spring (Mar-May)", "Mar 1 – May 31", "Renewal, lighter eating, allergy + cold-and-flu tailing off", "Lighter snack, fresh produce, electrolyte (warmer days), wellness messaging"],
        ["R3 — Summer (Jun-Aug)", "Jun 1 – Aug 31", "Heat, hydration, outdoor + travel, ice cream / frozen", "Water + electrolyte share elevated, frozen + ice cream where equipment supports, light snack"],
        ["R4 — Fall (Sep-Nov)", "Sep 1 – Nov 30", "Back-to-school + back-to-office, pumpkin/spice flavors, heartier snacks", "Pumpkin + spice flavor, meal-replacement, heartier snack + warm-beverage start"],
      ],
    },
    {
      heading: "2. Holiday + event overlays",
      paragraph:
        "On top of the four rotations, holiday + event overlays drive 2-6 week sub-cycles. Operator pre-positions for each overlay 4-6 weeks before the window opens.",
      items: [
        { check: "Valentine's Day (Feb 7-14) — heart-themed chocolate + premium confection facings expanded" },
        { check: "St. Patrick's Day (Mar 14-17) — green-themed + Irish-themed limited SKUs in 1-2 facings" },
        { check: "Easter (week before through Easter Sunday) — Reese's egg, Cadbury egg, Peeps + spring confection" },
        { check: "Cinco de Mayo (May 1-5) — Takis + spicy snack + Mexican-brand bump where regional fit" },
        { check: "Memorial Day → July 4 → Labor Day — summer outdoor + hydration + meal-replacement" },
        { check: "Back-to-school (mid-Aug through Sep 15) — lunchbox-format snack + breakfast bars" },
        { check: "Halloween (Oct 25-31) — Halloween candy + spooky-flavor LTOs in 2-3 facings" },
        { check: "Thanksgiving week + Christmas + New Year — comfort + holiday-baking flavor expansion" },
      ],
    },
    {
      heading: "3. Planogram lever — flavor + format LTOs",
      paragraph:
        "Limited-time offers (LTOs) from the major snack + beverage brands (Frito-Lay, Mondelez, Hershey, Coca-Cola, Pepsi) drive seasonal velocity. Operator plans LTO allocation 8-12 weeks in advance against published manufacturer LTO calendars.",
      items: [
        { number: 1, title: "LTO calendar import", description: "Operator pulls Frito-Lay + Mondelez + Hershey + Coca-Cola + Pepsi LTO calendars from distributor at start of each quarter; allocates LTO SKUs to 10-15% of facings during launch windows." },
        { number: 2, title: "LTO velocity test", description: "Each LTO tested on 20-30% of machines first 2-3 weeks; sell-through > 60% of facings/week earns expansion network-wide; under 30% returns to standard." },
        { number: 3, title: "LTO carry-over decision", description: "Top-performing LTOs from prior year (e.g., Pumpkin Spice variants from major brands) re-planned for matching window the following year; pattern repeats." },
        { number: 4, title: "Regional + local LTOs", description: "Regional brands' LTOs (Goldfish flavor, Takis flavor, regional beverage) added in 1-2 facings where local familiarity is established." },
      ],
    },
    {
      heading: "4. Telemetry-driven iteration",
      paragraph:
        "Telemetry (Cantaloupe Seed, Nayax, 365 Retail Markets, Crane Streamware) replaces planogram intuition with weekly sell-through data. Bottom-decile SKU rotation each quarter is the core discipline.",
      items: [
        { label: "Weekly sell-through report", value: "Per-machine + per-SKU sell-through report on Monday; bottom-10% SKUs flagged for action. Operator reviews + decides retain / swap / remove." },
        { label: "Stockout root-cause", value: "Stockouts > 4 hr broken into (a) under-faced (planogram fix), (b) restock cadence (route fix), (c) supply (procurement fix). Telemetry differentiates." },
        { label: "Seasonality detection", value: "Year-over-year velocity comparison detects emerging seasonality patterns; operator updates rotation plan for next year's matching window." },
        { label: "A/B planogram test", value: "Where placement count permits, test rotation hypotheses on subset of machines (15-20%) before network rollout; statistically meaningful with 4+ weeks data." },
      ],
    },
    {
      heading: "5. Operational support structure",
      items: [
        { label: "Restock cadence", value: "Telemetry-driven, no fixed days. Pre-rotation restock window 1-2 weeks before each rotation launch to ensure new SKUs in place." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain, payment — <24 hr ack + <24 hr resolution." },
        { label: "Service SLA — Tier 2", value: "Stockout + planogram refresh — 24-48 hr ack, 5-7 day resolution. Tightens to 24-72 hr during rotation launch windows." },
        { label: "Rotation roadmap", value: "Annual rotation roadmap presented to host at start of fiscal year; quarterly business review covers prior rotation performance + upcoming rotation prep." },
      ],
    },
    {
      heading: "6. Compliance + labeling overlay",
      items: [
        { check: "FDA 21 CFR §101.8 — calorie disclosure updated for every new SKU within 30 days of rotation launch" },
        { check: "FALCPA — allergen disclosure updated for every new SKU; pre-launch QA on allergen labels before rotation goes live" },
        { check: "USDA Smart Snacks (K-12 placements) — every seasonal SKU verified against 7 CFR §210.11 + Smart Snacks Product Calculator before launch" },
        { check: "ADA + ANSI/NAMA — rotation planogram does not change reach-range or service-clearance compliance" },
        { check: "NAMA FitPick — better-for-you marking applied consistently across seasonal SKUs where category fits" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Sell-through per SKU (top tier)", "≥ 60% facings/week", "Weekly"],
        ["LTO sell-through (launch window)", "≥ 50% facings/week", "Weekly"],
        ["Stockout SKU-hours", "≤ 2%", "Weekly"],
        ["Rotation launch on-time", "100% within 7 days of scheduled date", "Per rotation"],
        ["Calorie + allergen label compliance", "100%", "Per rotation launch"],
        ["Year-over-year same-window revenue", "+5-15% per rotation", "Quarterly"],
        ["Bottom-decile rotation cadence", "Quarterly", "Per machine"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, seasonal rotation planning, LTO + holiday overlay coordination, and telemetry-driven iteration discipline.",
});

console.log("wrote "+"seasonal-vending-machine-products");
