import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "psychology-vending-resident-habits",
  assetType: "pack",
  title: "Apartment Vending Behavior-Aware Planogram Pack",
  subtitle: "Time-of-day patterns, dwell-zone heuristics, SKU positioning rules",
  intro:
    "Resident purchase behavior in apartment vending is shaped by zone, time-of-day, and weather — not by demographic alone. This pack codifies the behavior heuristics behind a planogram that drives 20-35% higher per-cabinet velocity than a default mix.",
  sections: [
    {
      heading: "1. Time-of-day pattern framework",
      paragraph:
        "Telemetry data from multifamily portfolios shows four dominant time-of-day pulses. The planogram should weight SKUs against the pulse-mix at each cabinet.",
      headers: ["Pulse", "Window", "Dominant SKUs"],
      rows: [
        ["Morning commute (06:00-09:00)", "Pre-leave", "Bottled water, RTD coffee, breakfast bar, fresh fruit cup, banana"],
        ["Midday peak (11:00-14:00)", "Work-from-home lunch + package pickup", "Snack combo, sparkling water, kombucha, salad / sandwich (fresh cabinet)"],
        ["Post-work / fitness (17:00-21:00)", "Return home, gym, social", "Sports drinks, recovery bars, premium beverages, kid snacks, ice cream"],
        ["Late-night (22:00-02:00)", "WFH late, weekend social", "Caffeinated beverages, snacks, comfort-food, frozen treats"],
      ],
    },
    {
      heading: "2. Dwell-zone heuristics",
      paragraph:
        "Resident dwell-time differs by zone — and dwell-time correlates with SKU breadth.",
      items: [
        { label: "Lobby / package room — 1.5-3 min dwell", value: "Highest SKU breadth justified (35-45 SKUs). Eye-level shelves get premium beverages + premium snacks; bottom shelves get value SKUs." },
        { label: "Fitness center — 0.5-1.5 min dwell, pre/post-workout", value: "Narrow SKU set (20-25); top shelves = pre-workout (electrolyte, water); bottom = post-workout (protein, recovery)." },
        { label: "Pool deck — 1-2 min dwell, sun + kids", value: "Compact 15-20 SKUs; eye-level kid snacks + sunscreen; bottom water." },
        { label: "Lounge / co-work — 30 sec to 5 min dwell, repeat visits", value: "Mid-breadth 25-30 SKUs with rotation; premium coffee RTD + healthy snacks; member-pricing tier activates here." },
        { label: "Corridor / bike room — < 30 sec dwell", value: "Narrow 8-12 SKUs grab-and-go; cold water + sports drink + canned coffee + snack." },
      ],
    },
    {
      heading: "3. SKU positioning rules",
      items: [
        { label: "Eye-level (rows 2-3)", value: "Highest-margin or strategically-promoted SKUs. ~50% of velocity. Premium beverages, member-app promo SKU." },
        { label: "Reach shelves (rows 1, 4)", value: "Mid-velocity SKUs; staples that residents seek directly (water, top-selling snacks)." },
        { label: "Bottom shelf (row 5)", value: "Value-tier or bulk SKUs; less-visible position. Generic water, multi-packs." },
        { label: "Endcap / featured slot", value: "Seasonal or new-SKU launch. Rotated monthly; tracked via telemetry uplift test." },
        { label: "Allergen-flag SKUs", value: "Visually grouped on a single shelf or columned slot. Shelf signage + allergen-summary card on cabinet face per FALCPA convention." },
      ],
    },
    {
      heading: "4. Weather + seasonal modifier",
      paragraph:
        "Multifamily telemetry shows 15-40% per-SKU shift in summer vs winter. Use NOAA temperature averages to modulate planogram by season.",
      headers: ["Season + condition", "SKU weight adjustment"],
      rows: [
        ["Q1 (Jan-Mar) cold", "Hot drinks +30%, comfort snacks +20%, frozen treats -40%"],
        ["Q2 (Apr-Jun) warming", "Sports drinks +20%, water +15%, frozen treats +30%, kid SKUs +25%"],
        ["Q3 (Jul-Sep) hot", "Cold beverages +30%, ice cream +50%, electrolyte +25%, sunscreen if stocked +40%"],
        ["Q4 (Oct-Dec) cooling + holiday", "Hot drinks +25%, premium snack baskets +20%, seasonal SKUs (peppermint / pumpkin spice) test"],
      ],
    },
    {
      heading: "5. Member-app behavior amplifiers",
      items: [
        { label: "First-purchase nudge", value: "New residents see 30% off first member purchase in welcome email; conversion to member-tier ~22-35% with this incentive." },
        { label: "Time-windowed promo", value: "Post-fitness 18:00-21:00 sports-drink discount; uplift typically 15-25%." },
        { label: "Reorder rewards", value: "Buy-5-get-1 on member-app tracked SKU; loyalty driver for high-margin SKUs." },
        { label: "Member exclusives", value: "Premium SKU (cold-brew, kombucha) available only at member tier; conversion accelerator." },
        { label: "Stockout transparency", value: "Member-app shows live stock per cabinet; reduces wasted-trip frustration; cited by NMHC surveys as top resident-amenity-app feature." },
      ],
    },
    {
      heading: "6. Demographic-aware planogram tilts",
      paragraph:
        "Tilts — not replacements. Default planogram still applies; weight is adjusted by resident-mix.",
      items: [
        { label: "Family / 3-bedroom-heavy property", value: "+20% kid-juice + kid-snack share; visible kid-friendly SKUs at lower-reach height." },
        { label: "Student / co-living", value: "+25% energy drinks + late-night caffeinated SKUs; comfort snacks; lower price tier (value SKU emphasis)." },
        { label: "Senior / 55+", value: "Hydration + electrolyte + low-sugar SKUs; large-print pricing labels; ADA reach-range strict compliance." },
        { label: "Lifestyle / luxury", value: "Premium-tier emphasis (Olipop, La Colombe, Spindrift, Liquid Death); allergen + clean-label labeling prominent." },
        { label: "Workforce / value-tier", value: "Value-tier emphasis (store-brand water, name-brand snacks at mid-price); avoid premium-only stocking." },
      ],
    },
    {
      heading: "7. Telemetry-driven planogram refresh",
      items: [
        { check: "Quarterly per-SKU velocity report from telemetry; flag bottom-quartile SKUs." },
        { check: "15-25% SKU rotation per quarter — replace bottom-quartile with operator-recommended SKUs or resident-survey requests." },
        { check: "A/B test endcap / featured slot monthly with 4-week measurement." },
        { check: "Member-app pricing-tier test — measure conversion uplift on new promos." },
        { check: "Seasonal swap at Q1/Q2/Q3/Q4 turn; weather-modifier table applied to baseline." },
        { check: "Refund-rate audit — any SKU with > 4% refund rate is a quality flag for review." },
      ],
    },
    {
      heading: "8. Operator scorecard for behavior-aware planogram",
      headers: ["Criterion", "Evidence", "Weight"],
      rows: [
        ["Per-zone planogram differentiation", "Documented separate plans per zone type", "1.5x"],
        ["Telemetry-driven refresh", "Quarterly velocity report + rotation log", "1.5x"],
        ["Member-app pricing-tier capability", "SDK integration + A/B test history", "1.0x"],
        ["Seasonal modifier discipline", "Quarterly planogram swap evidence", "1.0x"],
        ["Resident-feedback loop", "Annual resident survey results", "1.0x"],
        ["Refund-rate audit", "Monthly refund-rate report + remediation", "1.0x"],
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to surface operators that run behavior-aware, telemetry-driven planograms — not default-mix operators. Specific velocity uplift depends on starting baseline, resident demographic, and member-app adoption — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Velocity uplifts and weather modifiers are reference values from portfolio benchmarks; results in any single property will vary.",
});

console.log("wrote " + "psychology-vending-resident-habits");
