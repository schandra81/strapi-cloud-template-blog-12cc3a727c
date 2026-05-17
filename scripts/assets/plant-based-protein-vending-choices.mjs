import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "plant-based-protein-vending-choices",
  assetType: "pack",
  title: "Plant-Based Protein Vending Pack",
  subtitle: "Planogram framework — six categories, demographic matching, and velocity tracking",
  intro:
    "Plant-based protein is no longer a niche category; the global plant-based food market is projected to reach $77B by 2025 (GFI + Bloomberg Intelligence). This pack gives wellness leaders, food-service managers, and benefits teams a six-category planogram framework, demographic matching guidance, and a velocity-tracking model to grow the program from 15% to 30%+ of vends over 18-24 months.",
  sections: [
    {
      heading: "1. Six plant-based protein categories",
      paragraph:
        "A balanced plant-based planogram covers all six categories. Most failed programs over-index on bars and under-stock the other five.",
      items: [
        { label: "1. Plant-based protein bars", value: "GoMacro (10-12g pea + brown rice + sprouted), No Cow (20g pea), MacroBar Mini, Aloha (14g pea + pumpkin), Vega Sport (20g pea + sunflower + alfalfa)" },
        { label: "2. Nuts, seeds, butters", value: "Wonderful Pistachios (6g per oz), Justin's Almond Butter pack (7g), Sahale Glazed Cashews (5g), pumpkin seeds 1.5 oz pouch (10g), KIND Nuts & Spices (5-6g)" },
        { label: "3. Plant-based jerky + chickpea snacks", value: "Louisville Vegan Jerky (10g per oz), Pan's Mushroom Jerky (3-5g + umami), Biena Roasted Chickpeas (6g per oz), Saffron Road Crunchy Chickpeas (5g)" },
        { label: "4. Plant-based RTD shakes", value: "Orgain Organic Protein (21g pea + brown rice + chia), OWYN (20g pea + flax + pumpkin), Vega Protein+ (20g pea + hemp), Koia Protein (18g pea + brown rice + chickpea)" },
        { label: "5. Plant-based yogurt + dairy alt (refrigerated)", value: "Kite Hill Almond Yogurt (4g), Forager Project Cashew (6g), Silk Almond Protein (10g), Califia Farms Plant Protein, Oatly Barista (3g but high-volume use)" },
        { label: "6. Plant-forward snacks (lower-protein but plant-based)", value: "Bare Apple Chips, Stretch Island Fruit Strips, Skinny Pop, Late July Tortilla, Popcorners, edamame snack packs (Seapoint Farms 8g)" },
      ],
    },
    {
      heading: "2. Demographic matching",
      paragraph:
        "Plant-based velocity correlates strongly with workplace demographics. Match planogram weight to the host's headcount profile.",
      headers: ["Demographic profile", "Plant-based facings target", "Tier emphasis"],
      rows: [
        ["Tech / startup / coworking — 25-45 age skew, high vegan + flexitarian rate", "30-40%", "Heavy bars + jerky alt + RTD shakes"],
        ["Healthcare + hospital — diverse age, dietary-restriction-aware", "25-35%", "Balanced; refrigerated yogurt + RTD shake emphasis"],
        ["Manufacturing / shift work — calorie-dense need, less vegan adoption", "15-25%", "Bars + nuts + chickpea (calorie-dense, shelf-stable)"],
        ["University / higher-ed — high vegan + multi-cultural", "30-50%", "All six categories; halal + kosher overlap"],
        ["K-12 (high school)", "20-30%", "Nuts (where peanut-aware), seeds, bars; verify Smart Snacks"],
        ["Manufacturing / mostly omnivore", "15-20% (entry)", "Bars + nuts only year-1; expand year-2"],
      ],
    },
    {
      heading: "3. Protein quality + complete-protein labeling",
      paragraph:
        "A complete protein contains all nine essential amino acids in proportions matching human need. Most single-source plant proteins are incomplete; well-formulated blends are complete.",
      items: [
        { label: "Complete plant proteins", value: "Soy (edamame, soy isolate), quinoa, buckwheat, hemp seed, chia, amaranth. Pea-protein-plus-brown-rice blends used by Vega, Orgain, OWYN are complete." },
        { label: "PDCAAS scores", value: "Soy isolate 1.00 (matches casein + whey); pea isolate 0.93; whey 1.00 (animal reference). Use as quality proxy on plant-based RTD shake spec." },
        { label: "Branding language for the program", value: "'Complete plant protein' OK on bars + RTDs with verified blend. 'Plant-based protein source' for single-source." },
        { label: "Iron + B12 + vitamin D", value: "Vegan-leaning planogram should include fortified RTD shakes + plant milks to mitigate B12 + iron + vitamin D gaps." },
      ],
    },
    {
      heading: "4. Planogram template — 30% plant-based (40-slot glass-front + adjacent CRBV)",
      items: [
        { label: "Row 1 (top-of-eye)", value: "GoMacro Mini, No Cow Bar, Aloha Bar, Justin's Almond Butter pack, Sahale Glazed Cashews, Wonderful Pistachios, Biena Roasted Chickpeas, Louisville Vegan Jerky, Kite Hill Yogurt, Forager Cashew Yogurt" },
        { label: "Row 2", value: "RXBAR (some flavors plant-based), KIND Nuts & Spices, Larabar (mostly plant-based), Bare Apple Chips, Late July chips, Skinny Pop, Stretch Island, Seapoint Edamame, Vega Protein+ RTD, Orgain Protein RTD" },
        { label: "Row 3 (conventional)", value: "Nature Valley Crunchy, Quaker Chewy, Cheez-It, Goldfish, Pretzel Crisps, Welch's, Mini Oreos, Sargento String Cheese, fairlife Core Power, Babybel" },
        { label: "Row 4 (treat)", value: "M&M's, Snickers, Twix, Reese's, Kit Kat, Doritos, Cheetos, Famous Amos, Pop-Tart, Skittles" },
        { label: "Adjacent CRBV — beverages", value: "Water, Spindrift, LaCroix, Olipop, Poppi, Califia Farms Almond Latte, Oatly Barista (refrigerated single-serve), GT's Kombucha, Koia RTD" },
      ],
    },
    {
      heading: "5. Dietary inclusivity overlap",
      items: [
        { check: "Vegan-certified SKUs marked (Vegan Action 'Certified Vegan' or PETA-approved)" },
        { check: "Gluten-free options ≥ 50% of plant-based facings (GoMacro, RXBAR, Larabar, Bare, Skinny Pop)" },
        { check: "Kosher (OU, OK, Star-K) where employee population requires" },
        { check: "Halal-certified options where employee population requires (IFANCA, HMA)" },
        { check: "Nut-free section adjacent for K-5 + nut-allergy-aware workplaces" },
        { check: "Top-9 allergen labeling per FALCPA on every SKU" },
      ],
    },
    {
      heading: "6. Velocity tracking + course-correction",
      items: [
        { label: "Per-SKU velocity by category", value: "Track all six categories monthly. Plant-based bars usually lead; chickpea + jerky alt lag in year-1." },
        { label: "Plant-based share of total vends", value: "Target trajectory: 15% baseline → 20% by month 6 → 25-30% by month 18 → 30-40% by month 36." },
        { label: "Stockout rate", value: "Top-3 plant-based SKUs stockout ≤ 5% of days. Plant-based stockouts kill program credibility — flexitarian customers do not return." },
        { label: "New-SKU introduction cadence", value: "Quarterly: introduce 2-4 new SKUs in lagging categories; retire bottom-10% velocity SKUs." },
        { label: "Employee survey", value: "Annual survey: dietary preference (vegan / vegetarian / flexitarian / omnivore), satisfaction with plant-based selection, requested SKUs." },
      ],
    },
    {
      heading: "7. Subsidy + pricing",
      items: [
        { label: "Price premium", value: "Plant-based SKUs typically 10-30% premium over conventional. Pea isolate + soy isolate + chickpea are now cost-competitive; almond + cashew yogurt + RTD shakes remain premium." },
        { label: "Subsidy strategy", value: "Price-match to conventional within category (bar to bar, RTD to RTD) for first 6 months." },
        { label: "Budget guideline", value: "$5-15/employee/month incremental for 30% archetype." },
        { label: "Wellness app reward credit", value: "Steps-to-protein-bar or hydration-to-RTD-shake reward via Virgin Pulse, Wellable, Limeade." },
      ],
    },
    {
      heading: "8. Operator selection checklist",
      items: [
        { check: "Catalog of ≥ 30 plant-based protein SKUs across all six categories" },
        { check: "Telemetry per-SKU velocity reporting" },
        { check: "Allergen + dietary inclusivity disclosure (vegan, GF, kosher, halal) per SKU" },
        { check: "Refrigerated equipment for category 5 (yogurt, RTD shake) — glass-front + temperature telemetry" },
        { check: "Quarterly new-SKU introduction process demonstrated" },
        { check: "References from 3+ comparable hosts (tech, healthcare, university) with ≥ 24 months tenure" },
        { check: "Subsidy-flexible billing" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps wellness, benefits, and food-service teams scope plant-based protein vending programs with qualified operators.",
});

console.log("wrote " + "plant-based-protein-vending-choices");
