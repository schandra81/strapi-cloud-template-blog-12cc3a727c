import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "psychology-snack-choices-industrial",
  assetType: "playbook",
  title: "Industrial Vending Planogram Playbook",
  subtitle: "High-calorie, familiar-brand, shift-aligned planogram design",
  intro:
    "Industrial workforces — warehouse, manufacturing, distribution, oilfield service, logistics — show measurable preferences that diverge from office or retail mixes. Higher calorie demand, stronger preference for familiar mainstream brands, higher hydration share, sharp shift-3 caffeine + hot-snack tilt. This playbook codifies the planogram patterns + ACOEM hydration framing + measurement structure to converge on a high-performing mix.",
  sections: [
    {
      heading: "1. Four behavioral observations from industrial telemetry",
      paragraph:
        "Operator-side telemetry (Cantaloupe Seed Pro, Nayax, 365 Retail Markets) aggregated across industrial placements shows four consistent patterns. Each maps to a planogram lever.",
      items: [
        { label: "Calorie-density preference", value: "Industrial workforce sell-through skews toward 200-400 cal SKUs (meal-replacement, calorie-dense salty/sweet) vs office sell-through at 100-250 cal." },
        { label: "Familiar-brand preference", value: "Top-10 SKUs in industrial placements are typically Frito-Lay + Mondelez + Hershey + Coca-Cola + Pepsi mainstream. Premium + specialty brands underperform vs office." },
        { label: "Hydration peak", value: "Hot-environment + heavy-labor placements show beverage facings 35-50% water + electrolyte (ACOEM industrial workforce + ACGIH heat-stress framing)." },
        { label: "Shift-3 caffeine + hot-snack tilt", value: "Shift-3 placements show 40-50% beverage facings caffeinated (coffee + energy + caffeinated soft drink) and meal-replacement + comfort snack weighting." },
      ],
    },
    {
      heading: "2. Planogram lever — calorie density",
      headers: ["Slot tier", "Calorie range", "% of facings (industrial)", "Example SKUs"],
      rows: [
        ["A — Calorie-dense meal-replacement", "300-500 cal", "20-30%", "Snickers king-size, Clif Bar, Cheez-It big, jerky 3-oz, mixed nuts 3-oz"],
        ["B — Standard snack", "150-300 cal", "40-50%", "Doritos, Lay's, Cheetos, Hershey, Reese's, Twix, M&M peanut"],
        ["C — Smaller snack + better-for-you", "75-200 cal", "20-30%", "Belvita, KIND, Quaker, Sun Chips, baked + reduced"],
        ["D — Mints + gum + small", "≤ 75 cal", "5-10%", "Trident, Mentos, Tic Tac, mini Oreos"],
      ],
    },
    {
      heading: "3. Planogram lever — familiar-brand preference",
      items: [
        { number: 1, title: "Top-10 anchor SKUs", description: "10 SKUs in every industrial machine are mainstream anchors — Doritos Nacho Cheese, Lay's Classic, Cheez-It, Snickers, Reese's, M&M Peanut, Hershey Milk Chocolate, Cheetos Crunchy, Pringles Original, Honey Bun. These earn their facing through velocity, not novelty." },
        { number: 2, title: "Premium + specialty share", description: "10-15% of facings can carry premium + specialty (KIND, RXBAR, Lärabar, premium jerky) for the workforce subset that wants it. Beyond 15%, sell-through drops sharply on industrial placements." },
        { number: 3, title: "Local + regional brands", description: "Where a regional brand has strong familiarity (e.g., Goldfish in northeast, Takis in southwest, BBQ Lays in southeast), 2-3 facings for the regional tilt." },
        { number: 4, title: "Wellness-program signaled", description: "NAMA FitPick mark on better-for-you SKUs serves the worker who's looking; doesn't substitute for mainstream tonnage." },
      ],
    },
    {
      heading: "4. Planogram lever — hydration share",
      paragraph:
        "ACOEM industrial-workforce guidance + ACGIH 2024 TLV for heat stress frame hydration as a safety control. Industrial beverage planograms reflect that by elevating water + electrolyte share.",
      items: [
        { check: "Water — bottled water (Aquafina, Dasani, generic) 15-20% of facings" },
        { check: "Electrolyte — Gatorade, Body Armor, Liquid IV, Sqwincher 15-20% of facings" },
        { check: "Carbonated soft drink — Coke, Pepsi, Dr Pepper, Mountain Dew 30-40% of facings" },
        { check: "Energy drink — Red Bull, Monster, Bang, Celsius 10-15% of facings (higher on shift-3)" },
        { check: "Coffee / RTD coffee — Starbucks Doubleshot, Java Monster, cold brew 5-10% of facings" },
        { check: "Other — tea, juice, milk-based 5-10% of facings" },
        { check: "Hot-environment placement — water + electrolyte share elevated to 50%+ during summer + in foundry/forge/hot-work breakrooms" },
      ],
    },
    {
      heading: "5. Shift-aligned planogram",
      headers: ["Shift", "Beverage tilt", "Snack tilt", "Refrigerated tilt"],
      rows: [
        ["Shift-1 (6 AM – 2 PM)", "Coffee + water + breakfast RTD", "Breakfast bars, fruit, yogurt, balanced", "Yogurt, fruit cup, breakfast sandwich"],
        ["Shift-2 (2 PM – 10 PM)", "Carbonated + energy + electrolyte", "Mainstream salty/sweet + meal-replacement", "Sandwich, wrap, salad, frozen meal"],
        ["Shift-3 (10 PM – 6 AM)", "Coffee + energy 40-50% + hot drink", "Comfort + calorie-dense + hot snack option", "Hot sandwich, frozen meal, comfort food"],
      ],
    },
    {
      heading: "6. Compliance + labeling overlay",
      items: [
        { check: "FDA 21 CFR §101.8 — calorie disclosure visible on machine face per SKU; updated on planogram change" },
        { check: "FALCPA — allergen disclosure visible at planogram or via QR; updated on SKU change" },
        { check: "ACOEM industrial workforce guidance — hydration share ≥ 30% as baseline; ≥ 50% in heat-stress placements" },
        { check: "NAMA FitPick / FitPick Select — better-for-you marking optional but consistent across the network" },
        { check: "ADA 2010 §305 + §308 — reach range + clear-floor-space preserved (not a planogram issue per se but verified on every install)" },
        { check: "ANSI/NAMA 2-2011 — equipment service clearance + hot-surface labels preserved" },
      ],
    },
    {
      heading: "7. KPI scorecard + planogram refresh discipline",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Sell-through per SKU", "≥ 60% of facings/week (top tier); ≥ 30% (mid); ≥ 15% (long tail)", "Weekly per machine"],
        ["Stockout SKU-hours", "≤ 2%", "Weekly"],
        ["Hydration share (beverage facings)", "≥ 30% baseline / ≥ 50% heat-stress", "Quarterly"],
        ["Shift-3 caffeine share (shift-3 placements)", "≥ 40%", "Quarterly"],
        ["Calorie disclosure compliance", "100%", "Per planogram change + quarterly"],
        ["Planogram refresh cadence", "Quarterly", "Per machine"],
        ["Bottom-decile SKU rotation", "Every quarter", "Per planogram review"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, planogram baseline construction, and quarterly velocity-driven refresh discipline for industrial vending placements.",
});

console.log("wrote "+"psychology-snack-choices-industrial");
