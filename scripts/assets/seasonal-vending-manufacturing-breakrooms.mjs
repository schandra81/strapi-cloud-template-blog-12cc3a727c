import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-vending-manufacturing-breakrooms",
  assetType: "pack",
  title: "Seasonal Manufacturing Vending Program Pack",
  subtitle: "Rotation framework, overlay checklists, pre-season equipment verification, promotional calendar",
  intro:
    "Manufacturing breakrooms run on a different seasonal rhythm than office or retail vending. Summer hydration shifts on factory floors above 85°F, winter comfort foods, and shift-specific overlays through every season. This pack gives you a 4-season rotation framework, equipment readiness checklist, and a 12-month promotional calendar template.",
  sections: [
    {
      heading: "1. Why seasonality matters more in manufacturing",
      paragraph:
        "Factory environments amplify seasonal demand. OSHA recommends water intake of ~1 cup every 15-20 minutes for workers in heat above 90°F (OSHA Heat Illness Prevention). Conversely, cold-floor and outdoor-receiving roles in winter shift demand toward hot beverages and calorie-dense snacks. A static planogram leaves 15-25% of velocity on the table across the year.",
    },
    {
      heading: "2. 4-season rotation framework",
      paragraph:
        "Adjust SKU mix by season at the planogram review cadence (typically quarterly). Each season has a baseline mix plus 5-10 rotating overlay SKUs.",
      headers: ["Season", "Mix focus", "Hydration share", "Featured overlays"],
      rows: [
        ["Spring (Mar-May)", "Balanced — return-to-normal velocity", "30-35%", "Allergy-friendly snacks, fresh fruit cups, lighter energy drinks"],
        ["Summer (Jun-Aug)", "Hydration + electrolyte + lighter snacks", "40-50%", "Electrolyte beverages, frozen treats, low-sodium snacks, fresh fruit"],
        ["Fall (Sep-Nov)", "Transition + ramp-up for shift hiring", "30-35%", "Soups (if hot-food capable), pumpkin/cinnamon-flavor snacks, hot coffee push"],
        ["Winter (Dec-Feb)", "Comfort + calorie + hot beverage", "25-30%", "Hot chocolate, soups, calorie-dense bars, comfort snack overlays"],
      ],
    },
    {
      heading: "3. Pre-season equipment verification (run 30 days before each season)",
      paragraph:
        "Each season has equipment-specific risks. Verify before the season hits.",
      items: [
        { label: "Pre-summer (May)", value: "Refrigeration condenser coil cleaning; verify 35-40°F set point; confirm internal temperature sensor calibrated; verify cellular modem coverage for outdoor-rated units; replace door gaskets if compromised. ENERGY STAR Tier 2 units should hold target temp in 90°F ambient." },
        { label: "Pre-fall (Aug)", value: "Hot-beverage equipment service (if applicable); confirm heating coil and dispense mechanism; test hot-cup dispenser; restock hot-beverage SKU base." },
        { label: "Pre-winter (Nov)", value: "Verify breakroom ambient ≥ 50°F for refrigerated units (below this, condensate can freeze); inspect outdoor units for cold-weather kit installation; verify card readers operate in cold (manufacturer typical range 32-122°F)." },
        { label: "Pre-spring (Feb)", value: "Annual deep clean; replace water filters on hot-beverage units; recalibrate scale on micro-market dispense bins; review allergen labels for spring SKU rotation." },
      ],
    },
    {
      heading: "4. Shift × season overlay matrix",
      paragraph:
        "Shift demand interacts with season. Shift-3 (overnight) and shift-1 (early morning) have different needs than shift-2.",
      headers: ["Shift × season", "Top weighted SKU types"],
      rows: [
        ["Shift-1 × summer", "Cold-brew coffee, fresh fruit, breakfast bars, electrolyte water"],
        ["Shift-1 × winter", "Hot coffee, oatmeal cups, breakfast sandwich (if hot-food capable), warming bars"],
        ["Shift-2 × summer", "Frozen treats, sports drinks, lighter snacks, fresh sandwich (refrigerated)"],
        ["Shift-2 × winter", "Soup cups, hot beverages, calorie-dense snacks"],
        ["Shift-3 × summer", "Energy drinks, cold-brew coffee, salty / electrolyte-replenishing snacks"],
        ["Shift-3 × winter", "Hot beverages, comfort snacks, calorie-dense meal replacements, energy drinks"],
      ],
    },
    {
      heading: "5. Promotional calendar template — 12 months",
      paragraph:
        "Pair each season with 2-3 promotional anchors. Operator's merchandising tool should support time-bound price tags or BOGO without manual planogram changes.",
      items: [
        { label: "January", value: "New-year wellness push — protein bars, water, fruit cups. 10% feature pricing on better-for-you SKUs." },
        { label: "February", value: "Heart-health overlay (American Heart Month) — low-sodium / heart-healthy SKU shelf." },
        { label: "March-April", value: "Spring rotation kickoff — refresh planogram; clear out winter overlays." },
        { label: "May-September", value: "Summer hydration + heat-illness-prevention overlay — coordinate with EHS." },
        { label: "October", value: "Fall rotation; flu-season vitamins / immunity overlay (where allowed)." },
        { label: "November", value: "Pre-holiday comfort overlay; thank-you BOGO event coordinated with HR for production milestones." },
        { label: "December", value: "Winter rotation; gift-the-shift small holiday SKU rotation." },
      ],
    },
    {
      heading: "6. EHS coordination — summer heat illness program",
      paragraph:
        "Vending program should coordinate with EHS heat illness prevention plan. OSHA recommends water + electrolyte access in workplaces above 90°F and during heat advisories.",
      items: [
        { check: "Vending operator confirms ≥ 40% hydration share by end of May." },
        { check: "Electrolyte SKU (sports drink or electrolyte powder) included in planogram." },
        { check: "Water (16 oz minimum) priced at or below cost where corporate policy supports." },
        { check: "EHS posted reminder near machine: 1 cup water per 15-20 minutes in heat ≥ 90°F." },
        { check: "Telemetry confirms water + electrolyte SKUs maintain ≥ 95% in-stock during heat advisory days." },
      ],
    },
    {
      heading: "7. Measurement — what to track each quarter",
      items: [
        { check: "Per-season velocity vs. prior year (same season)." },
        { check: "Stockout rate on seasonal overlay SKUs (target ≤ 2%)." },
        { check: "Hydration share % by month during summer." },
        { check: "Featured-SKU sell-through rate (target ≥ 70% of forecast)." },
        { check: "Refund rate during seasonal transitions (target ≤ 2% — spikes indicate SKU mismatch)." },
        { check: "Worker satisfaction snapshot (3-question intercept survey twice per year)." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate seasonal program design, RFP language, and operator review with our partner operators. We do not run seasonal merchandising directly — the operator selected via this framework executes the program on the floor.",
    },
  ],
  footer:
    "Informational reference. EHS, HR, and the operator each own a piece of seasonal program execution; this pack is the coordination scaffold.",
});

console.log("wrote "+"seasonal-vending-manufacturing-breakrooms");
