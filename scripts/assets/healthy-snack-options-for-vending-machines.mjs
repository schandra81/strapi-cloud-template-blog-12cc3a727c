import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-snack-options-for-vending-machines",
  assetType: "pack",
  title: "Healthy Snack Vending Pack",
  subtitle: "Threshold framework, SKU catalog by category, planogram templates, and measurement framework",
  intro:
    "This pack consolidates the working framework that wellness directors, food-service managers, and benefits leaders use to operationalize healthy vending. It covers the Fit Pick / FDA / Smart Snacks threshold stack, a SKU catalog by category, three planogram archetypes (30/50/70/100%), and the velocity + satisfaction measurement model that keeps the program from quietly reverting.",
  sections: [
    {
      heading: "1. Threshold framework (Fit Pick / FDA / Smart Snacks)",
      paragraph:
        "Three operative thresholds map most US healthy-vending programs. Pick one as your floor and operate against it.",
      headers: ["Threshold", "Calories", "Total fat", "Saturated fat", "Sodium", "Sugar", "Where used"],
      rows: [
        ["NAMA Fit Pick Select", "≤ 230", "≤ 35% cal", "≤ 10% cal", "≤ 230 mg", "≤ 35% by weight (≤ 10g for snacks)", "Corporate wellness baseline"],
        ["NAMA Fit Pick (basic)", "≤ 250", "≤ 35% cal", "≤ 10% cal", "≤ 250 mg", "≤ 35% by weight", "Corporate floor"],
        ["FDA 'Healthy' (Final Rule 2024)", "Food-group-based + added-sugar limits", "Saturated fat limits by category", "Saturated fat-specific", "≤ 230 mg/RACC (snacks)", "≤ 5% DV added sugar", "Federal facilities + government dining"],
        ["USDA Smart Snacks (K-12)", "≤ 200", "≤ 35% cal", "≤ 10% cal", "≤ 200 mg", "≤ 35% by weight", "K-12 schools (mandatory)"],
        ["Partnership for a Healthier America", "≤ 250", "≤ 35% cal", "≤ 10% cal", "≤ 230 mg", "≤ 10g added sugar", "Healthcare + university programs"],
      ],
    },
    {
      heading: "2. SKU catalog by category",
      paragraph:
        "All SKUs below were Fit Pick Select or Smart Snacks-aligned at publication; re-verify against current operator catalog before contract.",
      headers: ["Category", "Example SKUs", "Threshold met"],
      rows: [
        ["Whole-grain bars", "KIND Healthy Grains, Nature Valley Crunchy, Quaker Chewy 25% Less Sugar, Special K Protein", "Fit Pick + Smart Snacks"],
        ["Nut + seed bars", "RXBAR, Larabar, KIND Nuts & Spices, Perfect Bar Mini", "Fit Pick (verify portion)"],
        ["Protein bars", "Built Puffs, Power Crunch Original, GoMacro Mini, ONE Bar Mini", "Fit Pick Select"],
        ["Dried fruit + trail", "Sun-Maid raisins, Stretch Island fruit strips, Sahale Snacks (small bag), Bare Crunchy Apple Chips", "Fit Pick + Smart Snacks"],
        ["Baked + popped chips", "Skinny Pop (single-serve), Popcorners, SunChips Reduced Sodium, Baked Lay's", "Fit Pick"],
        ["Nut + seed packs", "Wonderful Pistachios (1.5 oz), Justin's Almond Butter pack, Sahale Glazed Cashews", "Fit Pick Select"],
        ["Jerky + meat snacks", "Chomps Original, EPIC Performance Bar, KRAVE Mini, Country Archer", "Fit Pick (verify sodium)"],
        ["Cheese + dairy", "Sargento String Cheese, fairlife Core Power 14 oz, Frigo Snack Bites", "Fit Pick (refrigerated required)"],
        ["Yogurt + parfait", "Chobani Less Sugar, Siggi's, Stonyfield Organic", "Fit Pick Select (refrigerated)"],
        ["Fresh fruit + veg", "Banana, apple, orange, baby carrots, hummus + veg cup", "Fit Pick Select (refrigerated for cut)"],
      ],
    },
    {
      heading: "3. Planogram archetypes (30 / 50 / 70 / 100%)",
      paragraph:
        "Choose the archetype that matches your wellness program maturity. Move up one tier per 6-12 months as employee behavior shifts.",
      headers: ["Archetype", "% facings healthier", "Use case", "Velocity expectation"],
      rows: [
        ["Conventional + 30% healthier", "30%", "Year-1 introduction; opt-out mindset", "10-20% velocity uplift on healthier SKUs over 90 days"],
        ["Balanced (Fit Pick Select 50%)", "50%", "Most corporate + healthcare + university programs", "Healthier SKUs match conventional velocity within 6 months"],
        ["Healthier-default 70%", "70%", "ESG-mandated workplaces, hospital systems", "Conventional SKUs concentrated in 2-3 slots; opt-in for less-healthy"],
        ["100% Fit Pick / Smart Snacks", "100%", "K-12, hospital children's wings, federal HHS facilities", "Requires hydration + fresh-fruit + variety to sustain velocity"],
      ],
    },
    {
      heading: "4. Planogram template (50/50 example, glass-front 40-slot)",
      paragraph:
        "Rows 1-2 = top-of-eye (premium slots, healthiest). Rows 3-4 = conventional + treat. Bottom row = water + larger-format healthier.",
      items: [
        { label: "Row 1 (slots 1-10)", value: "RXBAR x2, KIND Healthy Grains x2, Quaker Chewy 25% Less Sugar, Sun-Maid, Skinny Pop, Justin's Almond Butter, Built Puffs, Chomps Jerky" },
        { label: "Row 2 (slots 11-20)", value: "Nature Valley Crunchy, KIND Nuts & Spices, Sargento String Cheese, fairlife Core Power, Larabar, Wonderful Pistachios, Bare Apple Chips, GoMacro Mini, Perfect Bar, Stretch Island" },
        { label: "Row 3 (slots 21-30)", value: "Lay's Baked, Popcorners, SunChips Reduced Sodium, Welch's Fruit Snacks, Cheez-It Original, Pretzel Crisps, Goldfish, Mini Oreos, Snyder's Mini Pretzels, Animal Crackers" },
        { label: "Row 4 (slots 31-40)", value: "M&M's, Snickers, Twix, Reese's, Kit Kat, Doritos, Cheetos, Cheez-It, Famous Amos, Pop-Tart" },
        { label: "Beverages (adjacent CRBV)", value: "Water, sparkling water, low-sugar functional, low-fat milk + alt, 100% juice ≤ 12 oz, conventional sodas concentrated in 2 slots" },
      ],
    },
    {
      heading: "5. Hydration + fresh-fruit integration",
      items: [
        { check: "Bottle-fill station adjacent to vending (Elkay LZSTL8WSLK, Halsey Taylor) — cuts beverage SKU stockouts + supports healthier defaults" },
        { check: "Free fresh-fruit basket (banana, apple, orange) at start of week; 3-5 lb basket per 100 employees" },
        { check: "Refrigerated fresh-cut (apple slices, baby carrots, hummus cups) where the unit is glass-front refrigerated; restock 2-3×/week" },
        { check: "Plant-based milk + alt options (Oatly, Califia, fairlife Core Power) refrigerated section" },
        { check: "Caffeine alternatives: green tea, sparkling water with caffeine, kombucha for healthcare + university hosts" },
      ],
    },
    {
      heading: "6. Allergen + dietary inclusivity",
      items: [
        { label: "Allergen labeling", value: "FALCPA-compliant allergen statement on every SKU. Top-9 disclosure (milk, egg, fish, shellfish, tree nut, peanut, wheat, soy, sesame)." },
        { label: "Gluten-free", value: "≥ 15% of healthier SKUs gluten-free (KIND Healthy Grains certain SKUs, RXBAR, Larabar, Chomps)." },
        { label: "Vegan + plant-based", value: "≥ 20% vegan SKUs (Sun-Maid, Skinny Pop, Larabar, GoMacro, Bare Apple Chips)." },
        { label: "Nut-free section", value: "Required in K-5 schools; recommended in healthcare. Concentrated in dedicated row with clear signage." },
        { label: "Religious + cultural", value: "Kosher (OU + OK + Star-K) and Halal options where employee population requires." },
      ],
    },
    {
      heading: "7. Measurement + course-correction framework",
      paragraph:
        "Healthy vending fails when measurement stops. Operator supplies this dashboard monthly; wellness committee reviews quarterly.",
      items: [
        { label: "Velocity by SKU", value: "Per-SKU vends/day. Healthier SKUs should reach 70-90% of conventional velocity within 6 months." },
        { label: "Healthier share of total vends", value: "Trend monthly. Target: archetype % within 30% (i.e., 50% archetype = 35-65% actual share of vends)." },
        { label: "Stockout incidents", value: "Top-3 healthier SKUs stockout ≤ 5% of days. Stockouts kill program credibility faster than any other failure." },
        { label: "NPS / satisfaction", value: "Quarterly 5-point smile-rating or NPS survey. Target NPS ≥ 30 in year 1, ≥ 50 by year 3." },
        { label: "Wellness biometric link", value: "Optional: correlate vending vs. annual biometric screening trends (BMI, A1C). Requires HR + benefits collaboration." },
        { label: "Quarterly course-correction", value: "Bottom-10% velocity healthier SKUs swap out for new SKUs; top performers held for the year." },
      ],
    },
    {
      heading: "8. Subsidy + price strategy",
      items: [
        { label: "Subsidy options", value: "Free-vend on healthier SKUs; flat-rate ($1 for any healthier SKU); price-match (healthier same price as conventional); wellness-app reward credit." },
        { label: "Price elasticity", value: "Healthier SKUs at 10-20% premium over conventional usually see 30-50% velocity reduction. Subsidize to parity or below for first 6 months." },
        { label: "Cost-per-employee", value: "$8-25/employee/month typical subsidy budget for 50% Fit Pick archetype; $20-45 for 70-100% archetype." },
        { label: "Benefits + ROI linkage", value: "Healthcare claims data + biometric screening data show 8-15% lower diabetes + CVD claims in mature healthier-vending programs (ACSM + AHA studies; LetUsVending blog references)." },
      ],
    },
    {
      heading: "9. Operator selection checklist",
      items: [
        { check: "Catalog of ≥ 60 Fit Pick Select-aligned SKUs across 8+ categories" },
        { check: "Telemetry-verified per-SKU velocity reporting" },
        { check: "Quarterly planogram refresh based on velocity + employee feedback" },
        { check: "Allergen + dietary inclusivity attestation per SKU" },
        { check: "Nutrition + ingredient data file refreshed quarterly" },
        { check: "Subsidy-flexible billing (line-item per SKU, not single flat rate)" },
        { check: "Wellness-app integration capability (Virgin Pulse, Wellable, Limeade)" },
        { check: "References from comparable-headcount hosts with ≥ 24 months tenure" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps benefits, wellness, and facilities teams scope healthier vending programs with qualified operators.",
});

console.log("wrote " + "healthy-snack-options-for-vending-machines");
