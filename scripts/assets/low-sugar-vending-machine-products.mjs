import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "low-sugar-vending-machine-products",
  assetType: "pack",
  title: "Low-Sugar Vending Pack",
  subtitle: "Threshold framework, SKU catalog, planogram templates, and measurement framework",
  intro:
    "This pack is a working procurement framework for wellness leaders, benefits managers, and food-service directors operationalizing a low-sugar vending program. It covers the AHA / WHO / FDA threshold stack, a SKU catalog by category, three planogram archetypes, and the velocity + biometric measurement model that keeps the program credible past year one.",
  sections: [
    {
      heading: "1. Threshold framework — what counts as 'low-sugar'",
      paragraph:
        "Four operative thresholds are in common use. Pick one as your floor and apply consistently.",
      headers: ["Threshold source", "Definition", "Where used"],
      rows: [
        ["AHA Added Sugar Recommendation", "Women ≤ 25 g/day, men ≤ 36 g/day added sugar; children 2-18 ≤ 25 g/day", "Health-system + ACO wellness programs"],
        ["WHO Free Sugar Guideline", "≤ 10% energy from free sugars; conditional ≤ 5%", "Government dining + public-sector"],
        ["FDA 'Healthy' Final Rule (2024)", "≤ 5% DV added sugar per RACC for snacks (≤ 2.5 g per typical serving)", "Federal facilities"],
        ["Smart Snacks (K-12)", "≤ 35% sugar by weight, ≤ 10 g per portion", "K-12 schools mandatory"],
        ["NAMA Fit Pick", "≤ 35% sugar by weight; Select ≤ 10 g per portion", "Corporate wellness floor"],
      ],
    },
    {
      heading: "2. SKU catalog — beverages by sugar tier",
      paragraph:
        "Default to ≤ 5 g sugar per 12 oz for the low-sugar archetype.",
      headers: ["Tier", "g sugar / 12 oz", "Example SKUs"],
      rows: [
        ["Zero", "0 g", "Water (Aquafina, LIFEWTR), sparkling water (LaCroix, Bubly, Spindrift unflavored, Aha), Coke Zero, Diet Coke, Diet Pepsi, Diet Dr Pepper"],
        ["Ultra-low (≤ 5g)", "1-5 g", "Spindrift (5g), Olipop (2-5g added; uses prebiotic fiber), Poppi (5g), Hint (0g + flavor), Recess (4g)"],
        ["Low (5-12g)", "5-12 g", "G2 Gatorade Zero alt., Powerade Zero, Vitaminwater Zero, Coca-Cola Life-style alternatives"],
        ["Moderate (12-25g)", "12-25 g", "100% juice in small portions (Apple & Eve 6.75 oz = 18 g natural sugar, no added)"],
        ["High (> 25g) — avoid", "26-39+ g", "Conventional Coca-Cola (39g), Pepsi (41g), Mountain Dew (46g), Snapple (40g)"],
      ],
    },
    {
      heading: "3. SKU catalog — snacks by sugar tier",
      paragraph:
        "Default to ≤ 8 g added sugar per portion for the low-sugar snack archetype.",
      headers: ["Tier", "g added sugar / portion", "Example SKUs"],
      rows: [
        ["Zero / negligible", "0-2 g", "Skinny Pop, Popcorners Sea Salt, SunChips Original (no added sugar), Sargento String Cheese, Chomps Jerky Original, Wonderful Pistachios, Justin's Almond Butter (peanut)"],
        ["Low (2-8 g)", "2-8 g", "RXBAR (no added sugar; dates supply natural), KIND Nuts & Spices, Quaker Chewy 25% Less Sugar, Built Puffs, GoMacro Mini"],
        ["Moderate (8-15 g)", "8-15 g", "Nature Valley Crunchy (12g), KIND Healthy Grains (5-9g), Special K Protein (8g), Larabar"],
        ["High (> 15 g) — concentrate", "15-30 g", "M&M's, Snickers, Twix, Reese's, Kit Kat, Pop-Tarts — concentrate in 2-3 slots only"],
      ],
    },
    {
      heading: "4. Sweetener substitution science",
      paragraph:
        "Low-sugar SKUs use alternative sweeteners. Wellness + benefits teams should know which substitutes the program endorses.",
      items: [
        { label: "Sucralose (Splenda)", value: "FDA-approved 1998; 600× sweeter than sucrose. Widely used in diet sodas, protein bars. Stable in heat. ADI 5 mg/kg body weight." },
        { label: "Aspartame (Equal)", value: "FDA-approved 1981. IARC classified 2B 'possibly carcinogenic' 2023 with intake ≤ 40 mg/kg/day still considered safe per JECFA. Most diet sodas. Avoid for phenylketonuria (PKU) populations." },
        { label: "Stevia (Truvia, PureVia, SweetLeaf)", value: "Plant-derived rebaudioside A. FDA GRAS. No glycemic impact. Bitter aftertaste at high concentration." },
        { label: "Monk fruit (Lakanto)", value: "Plant-derived mogroside. FDA GRAS. No glycemic impact. Often blended with erythritol." },
        { label: "Erythritol", value: "Sugar alcohol; ~70% sweetness of sucrose. FDA GRAS. NEJM 2023 cardiovascular-risk study prompted review; ADI not formally set but typical intake well below study levels. Many wellness programs prefer monk fruit + stevia." },
        { label: "Allulose", value: "Rare sugar; FDA permits exclusion from 'added sugar' label since 2019. No glycemic impact. Premium price point." },
        { label: "Acesulfame potassium (Ace-K)", value: "FDA-approved 1988. Often blended with sucralose or aspartame for taste profile. ADI 15 mg/kg." },
      ],
    },
    {
      heading: "5. Planogram archetypes (low-sugar)",
      headers: ["Archetype", "% facings low-sugar", "Use case", "Velocity expectation"],
      rows: [
        ["Conventional + 30% low-sugar", "30%", "Year-1 introduction", "10-20% uplift on low-sugar SKUs over 90 days"],
        ["Balanced 50%", "50%", "Most corporate wellness", "Low-sugar matches conventional velocity within 6 months"],
        ["Low-sugar-default 70%", "70%", "Healthcare + ESG-mandated workplaces", "Conventional concentrated in 2-3 slots; opt-in for high-sugar"],
        ["100% low-sugar", "100%", "Cardiology + diabetes-clinic settings, federal HHS", "Requires hydration + variety to sustain velocity"],
      ],
    },
    {
      heading: "6. Planogram template (50% low-sugar, glass-front 40-slot)",
      items: [
        { label: "Row 1 (top-of-eye)", value: "RXBAR (2), Built Puffs, Skinny Pop, Chomps Jerky, Wonderful Pistachios, KIND Nuts & Spices, GoMacro Mini, Sargento String Cheese, Justin's Almond Butter pack" },
        { label: "Row 2", value: "Quaker Chewy 25% Less Sugar, KIND Healthy Grains, Larabar, Popcorners, SunChips, Bare Apple Chips, Stretch Island, Annie's Organic, Babybel Light, fairlife Core Power" },
        { label: "Row 3 (conventional)", value: "Nature Valley Crunchy, Special K Protein, Lay's Baked, Cheez-It Original, Welch's Fruit Snacks, Pretzel Crisps, Goldfish, Animal Crackers, Snyder's Mini Pretzels, Mini Oreos" },
        { label: "Row 4 (treat)", value: "M&M's, Snickers, Twix, Reese's, Kit Kat, Doritos, Cheetos, Famous Amos, Pop-Tart, Skittles" },
        { label: "Beverages (adjacent CRBV)", value: "Water, sparkling water, Spindrift, Olipop, Poppi, Recess, diet sodas (Coke Zero, Diet Coke), G2/Powerade Zero. Conventional sodas concentrated in 2 slots." },
      ],
    },
    {
      heading: "7. Measurement framework",
      items: [
        { label: "Velocity by SKU + tier", value: "Per-SKU vends/day. Trend low-sugar share of total vends monthly. Target: archetype % within 30% band." },
        { label: "Sugar-per-vend metric", value: "Calculate average grams added sugar per vend across the program. Target trajectory: -20% year-1, -35% year-3 vs. baseline." },
        { label: "Stockout rate", value: "Top-3 low-sugar SKUs stockout ≤ 5% of days." },
        { label: "Biometric linkage (optional, with HR collaboration)", value: "Annual biometric screening — fasting glucose, HbA1c, BMI. Correlate trend with vending data over 2-3 years." },
        { label: "Satisfaction", value: "Quarterly 5-point smile-rating or NPS. Target NPS ≥ 30 year-1, ≥ 50 year-3." },
        { label: "Subsidy ROI", value: "Health-plan claims data — diabetes + cardiovascular trend. ACSM + AHA studies suggest 8-15% lower diabetes claims in mature low-sugar workplace programs." },
      ],
    },
    {
      heading: "8. Subsidy + pricing",
      items: [
        { label: "Subsidy options", value: "Free-vend water + sparkling water; flat-rate $1 for any low-sugar SKU; price-match (low-sugar same price as conventional); wellness-app reward credit." },
        { label: "Price elasticity", value: "Low-sugar SKUs at 10-20% premium see 30-50% velocity reduction. Subsidize to parity or below for first 6 months." },
        { label: "Budget guideline", value: "$8-25/employee/month for 50% archetype; $20-45 for 70-100%." },
      ],
    },
    {
      heading: "9. Operator selection checklist",
      items: [
        { check: "Catalog of ≥ 40 low-sugar SKUs across 8+ categories" },
        { check: "Telemetry-verified per-SKU velocity reporting" },
        { check: "Nutrition + ingredient data file refreshed quarterly" },
        { check: "Allergen + dietary inclusivity disclosure per SKU" },
        { check: "Subsidy-flexible billing (line-item per SKU)" },
        { check: "Wellness-app integration capability (Virgin Pulse, Wellable, Limeade, Castlight)" },
        { check: "References from 3+ comparable wellness-program hosts with ≥ 24 months tenure" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps wellness, benefits, and facilities teams scope low-sugar vending programs with qualified operators.",
});

console.log("wrote " + "low-sugar-vending-machine-products");
