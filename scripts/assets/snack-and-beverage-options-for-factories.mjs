import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "snack-and-beverage-options-for-factories",
  assetType: "pack",
  title: "Manufacturing Planogram Pack",
  subtitle: "Meal-format coverage, hydration share, shift-tuned SKU velocity, healthy share alignment",
  intro:
    "A factory planogram is different from an office planogram. Long shifts, heavy physical work, limited break windows, and three-shift coverage push the SKU mix toward meal-format options, real hydration share, and shift-tuned velocity. This pack codifies the planogram dimensions that matter, with benchmark splits and an RFP-ready specification.",
  sections: [
    {
      heading: "1. Planogram dimensions that matter on a factory floor",
      paragraph:
        "Five dimensions determine whether a factory planogram performs. Operators are evaluated on all five at quarterly review.",
      headers: ["Dimension", "Target", "Why it matters"],
      rows: [
        ["Meal-format coverage", "≥ 15% of slots", "30-minute lunch windows leave no time to cross the parking lot for fast food"],
        ["Hydration share", "30-45% of slots (seasonal)", "OSHA heat-illness guidance — water + electrolyte access in heat ≥ 90°F"],
        ["Better-for-you share", "≥ 30% of slots", "Aligns with corporate wellness goals; supports recruiting / retention messaging"],
        ["Shift-3 SKU coverage", "≥ 20% of slots tuned for overnight", "Caffeine + comfort + calorie-dense; different velocity from shift-1"],
        ["Allergen + dietary labeling", "100% of SKUs", "FALCPA federal allergen disclosure; supports DEI / accessibility"],
      ],
    },
    {
      heading: "2. Recommended slot allocation — 40-slot machine baseline",
      paragraph:
        "Baseline for a single 40-selection combo machine. Adjust per shift volume and floor demographics.",
      headers: ["Category", "Slots", "Examples"],
      rows: [
        ["Meal-format (sandwiches, wraps, microwaveable bowls)", "6-8", "Turkey sandwich, hummus wrap, chicken-rice bowl, mac-and-cheese cup"],
        ["Protein-forward snacks", "5-7", "Jerky, hard-boiled eggs, protein bars, mixed nuts, cheese sticks"],
        ["Fresh / refrigerated", "4-6", "Fruit cups, yogurt, hummus + pretzel, fresh salad"],
        ["Salty snacks", "5-7", "Chips, pretzels, popcorn, crackers"],
        ["Sweet snacks", "4-6", "Cookies, candy, granola bars (sweet)"],
        ["Hydration (water, sports drinks, juice)", "6-8", "Water bottle (16 oz / 1 L), electrolyte drink, 100% juice"],
        ["Coffee / energy", "3-5", "Cold-brew can, energy drink, iced coffee"],
      ],
    },
    {
      heading: "3. Shift-tuned SKU velocity",
      paragraph:
        "Each shift weights different categories. Telemetry should drive shift-specific top-10 every quarter.",
      items: [
        { label: "Shift-1 (6 AM – 2 PM)", value: "Breakfast bars (granola, oat), fresh fruit, yogurt, coffee, water, balanced lunch combo. ~20% breakfast SKUs early in shift; transitions to lunch by 11 AM." },
        { label: "Shift-2 (2 PM – 10 PM)", value: "Lunch + snack mix. Higher salty-snack share; sports drinks for evening hydration; coffee push 2-4 PM and 7-9 PM." },
        { label: "Shift-3 (10 PM – 6 AM)", value: "Caffeine-heavy (energy drink, coffee, cold brew); comfort + calorie-dense snacks; hot-beverage demand in cold months; minimal fresh-meal velocity (consider longer-shelf alternatives)." },
      ],
    },
    {
      heading: "4. Hydration share — OSHA-aligned",
      paragraph:
        "Hydration share isn't just a wellness number — it's an EHS coordination point. OSHA Heat Illness Prevention guidance recommends 1 cup of water every 15-20 minutes for workers in heat ≥ 90°F.",
      items: [
        { check: "Water (16 oz / 1 L bottle) present in ≥ 4 slots." },
        { check: "Electrolyte beverage (sports drink or electrolyte powder) present in ≥ 2 slots." },
        { check: "Total hydration share ≥ 40% during heat-advisory months (May-September in most US climates)." },
        { check: "Water priced at or below cost where corporate policy supports. Subsidy model documented in operator contract." },
        { check: "Telemetry alerts on water stockout — same Tier-1 SLA as payment failure." },
      ],
    },
    {
      heading: "5. Healthy share — corporate wellness alignment",
      paragraph:
        "Frame healthy share against an external standard. Most large employers use a traffic-light system or a published nutrition framework.",
      items: [
        { label: "FDA / USDA dietary guidelines reference", value: "Better-for-you criteria: ≤ 200 mg sodium per serving (snacks), ≤ 10 g added sugar, ≥ 3 g fiber or ≥ 5 g protein. Document the specific criteria your program uses." },
        { label: "Traffic-light labeling (UK FSA model, adapted)", value: "Green / amber / red shelf tags. Green ≥ 30% of slots." },
        { label: "Partnership for a Healthier America (PHA) framework", value: "Public framework many large employers adopt. Operator should be able to certify per-SKU PHA alignment." },
      ],
    },
    {
      heading: "6. Allergen + dietary labeling — FALCPA / FASTER Act",
      items: [
        { check: "All 9 major allergens labeled per FALCPA (1985 / 2004) and FASTER Act (2021 — sesame): milk, egg, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame." },
        { check: "Allergen summary card on the machine face listing SKUs with each major allergen." },
        { check: "Gluten-free, vegan, kosher, and halal SKU indicators where applicable." },
        { check: "Calorie display on machine face for SKUs with packaging (most US large-employer machines now disclose calories at point of selection)." },
        { check: "Operator provides quarterly nutrition report (sodium, sugar, fiber, protein per SKU)." },
      ],
    },
    {
      heading: "7. RFP-ready planogram specification",
      paragraph:
        "Lift directly into your RFP. Operator must commit to meet or exceed.",
      items: [
        { number: 1, title: "SKU count + rotation cadence", description: "Minimum 36 SKUs (combo machine). Quarterly planogram refresh based on telemetry. New SKUs trialed every 6 months." },
        { number: 2, title: "Meal-format coverage", description: "≥ 15% of slots meal-format (sandwich, wrap, microwaveable bowl)." },
        { number: 3, title: "Hydration share", description: "≥ 30% baseline; ≥ 40% during heat-advisory months." },
        { number: 4, title: "Better-for-you share", description: "≥ 30% of slots meet documented better-for-you criteria." },
        { number: 5, title: "Shift coverage", description: "Per-shift top-10 reviewed quarterly. ≥ 20% of slots tuned for shift-3 demand at sites with overnight shifts." },
        { number: 6, title: "Allergen + nutrition disclosure", description: "100% FALCPA labeling; calorie display on machine face; quarterly nutrition report." },
        { number: 7, title: "Special-diet certification", description: "Operator certifies which SKUs are gluten-free, vegan, kosher, halal." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to translate your facility profile into a planogram specification and coordinate operator response. The operator selected via this framework executes the planogram and owns the SKU-level merchandising relationship.",
    },
  ],
  footer:
    "This pack is informational. Nutrition criteria, dietary labels, and corporate wellness alignment should be reviewed with your HR / EHS / wellness team before publication.",
});

console.log("wrote "+"snack-and-beverage-options-for-factories");
