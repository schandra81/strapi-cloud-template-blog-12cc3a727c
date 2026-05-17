import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "eco-friendly-vending-in-schools",
  assetType: "pack",
  title: "Eco-Friendly School Vending Pack",
  subtitle: "ENERGY STAR + low-GWP + telemetry + packaging + recycling + hydration framework for K-12 and higher-ed",
  intro:
    "This pack gives school food-service directors, district sustainability coordinators, and PTO procurement teams a six-layer framework for vending that meets USDA Smart Snacks in School, ENERGY STAR equipment, low-GWP refrigerant, and the diversion infrastructure most district sustainability plans now require.",
  sections: [
    {
      heading: "1. ENERGY STAR equipment + low-GWP refrigerant",
      paragraph:
        "Most district capital budgets fund equipment refresh on a 7-10 year cycle. Specify ENERGY STAR + R-290 at every refresh; the kWh + refrigerant savings typically pay back the premium within 24-36 months.",
      headers: ["Machine type", "Legacy annual kWh", "ENERGY STAR annual kWh", "Annual kWh savings per machine"],
      rows: [
        ["Refrigerated beverage (CRBV)", "2,500-4,500", "800-1,400", "1,500-3,100"],
        ["Glass-front refrigerated snack/food", "1,500-2,500", "1,100-1,700", "300-800"],
        ["Combo (refrigerated half)", "1,200-2,200", "900-1,600", "200-600"],
        ["Ambient snack (LED + sleep)", "350-600", "≤ 450", "100-150"],
      ],
    },
    {
      heading: "2. USDA Smart Snacks compliance + healthier hydration",
      paragraph:
        "Smart Snacks in School (USDA Final Rule) sets nutrition standards for snacks + beverages sold to students during the school day. Eco-aligned programs typically exceed the floor.",
      items: [
        { label: "Beverage limits (high school)", value: "Water (any size), low-fat milk (≤ 12 oz), 100% juice (≤ 12 oz), other beverages ≤ 60 cal/12 oz or ≤ 40 cal/8 oz. No caffeine in elementary + middle." },
        { label: "Beverage limits (elementary + middle)", value: "Water, low-fat milk, 100% juice only. No flavored milks above 8 oz, no caffeinated beverages." },
        { label: "Snack standards", value: "≤ 200 cal/portion, ≤ 35% calories from fat, ≤ 10% saturated fat, 0 g trans fat, ≤ 200 mg sodium, ≤ 35% sugar by weight. Whole-grain-rich first ingredient OR ≥ ½ cup fruit/veg." },
        { label: "Hydration emphasis", value: "Free filtered-water bottle-fill stations adjacent to vending — Elkay LZSTL8WSLK, Halsey Taylor HTHB-HVRGRN8K, similar. Cut beverage Scope 3 30-50% by shifting consumption to refillable bottles." },
      ],
    },
    {
      heading: "3. Telemetry + dynamic restock",
      items: [
        { label: "Platform", value: "Cantaloupe Seed Pro, Nayax Onyx, Vagabond. Cellular telemetry preferred; school Wi-Fi often blocks vending IoT VLANs." },
        { label: "Restock cadence", value: "Telemetry-driven 1-3 visits/week per machine vs. fixed weekly. Cuts vehicle miles 30-50%." },
        { label: "Stockout SLA", value: "≤ 8% machines stocked-out at any time. Hydration + Smart Snacks SKU stockouts trigger 24-hour resolution." },
        { label: "Reporting", value: "Monthly utilization + emission factor per vend to district sustainability + nutrition services. Quarterly nutrition-compliance audit support." },
      ],
    },
    {
      heading: "4. Packaging + diversion",
      paragraph:
        "Schools are high-visibility laboratories for diversion. A clear three-stream sort adjacent to vending teaches lifelong recycling habits and supports STEAM curriculum integration.",
      items: [
        { label: "Beverage packaging", value: "≥ 70% recycled aluminum (cans), ≥ 50% rPET (bottles). Cartons (FSC-certified, recyclable curbside in most US districts)." },
        { label: "Snack packaging", value: "Push suppliers toward mono-material PE films + How2Recycle labeling. FSC paperboard for bar-format SKUs." },
        { label: "Bin infrastructure", value: "Three-stream sorting at every machine: landfill / commingled recycle / compost. ClearStream + Toter + Rubbermaid in school-grade sizing. Photo-realistic signage at student eye-level." },
        { label: "Diversion target", value: "≥ 60% diversion rate in mature programs; ≥ 80% on aluminum cans (least contamination)." },
        { label: "Student stewardship", value: "Optional sustainability-ambassador program — middle + high school students audit bins monthly. Integrates with NGSS HS-ESS3 curriculum." },
      ],
    },
    {
      heading: "5. SKU catalog by category",
      paragraph:
        "Use this catalog as a starting point. All SKUs below were Smart Snacks-aligned at publication; re-verify against current USDA database before contract.",
      headers: ["Category", "SKU examples", "Compliance + eco notes"],
      rows: [
        ["Water + sparkling", "Aquafina (100% rPET pilot), LIFEWTR, La Croix (aluminum), Spindrift (aluminum)", "Aluminum preferred over PET on Scope 3"],
        ["Low-fat milk + alt", "fairlife 2% (8 oz), Horizon Organic (8 oz), Oatly Barista (8 oz)", "Organic + grass-fed available; verify added-sugar threshold"],
        ["100% juice", "Apple & Eve 6.75 oz, Mott's for Tots 6.75 oz", "≤ 12 oz portion mandatory"],
        ["Whole-grain snacks", "Nature Valley Crunchy, KIND Healthy Grains, Quaker Chewy", "≤ 200 cal; verify whole-grain first-ingredient"],
        ["Fruit + veg", "Sun-Maid raisins, Stretch Island fruit strips, Annie's organic graham", "Plus fresh-fruit option through cafeteria partnership"],
        ["Protein + dairy", "fairlife Core Power 14 oz (HS only), Sargento String Cheese, Justin's Almond Butter packs", "Verify portion + added-sugar"],
      ],
    },
    {
      heading: "6. Operator selection — school-specific criteria",
      items: [
        { check: "Operator demonstrates current Smart Snacks compliance database with audit support" },
        { check: "100% ENERGY STAR equipment + 100% low-GWP refrigerant on all refrigerated machines on the school's account" },
        { check: "Background-checked + fingerprinted restock staff per state code (CA: AB 1610, FL: 1012.32, TX: 22.083, NY varies by district)" },
        { check: "Allergen labeling + cross-contact disclosure on every SKU; nut-aware planogram in K-5" },
        { check: "Three-stream bin infrastructure included in operator scope" },
        { check: "Telemetry + emission-factor data supplied to district sustainability + nutrition services" },
        { check: "Local + district-of-attendance preference where applicable (e.g., Buy California, Buy Florida-Grown produce-based snacks)" },
      ],
    },
    {
      heading: "7. Reporting + ESG alignment",
      items: [
        { label: "USDA reporting", value: "Smart Snacks compliance audit support; per-SKU nutrition data file refreshed quarterly." },
        { label: "District sustainability plan", value: "Operator supplies annual report: kWh per machine, refrigerant inventory, vehicle miles, packaging mix, diversion rate." },
        { label: "ENERGY STAR Portfolio Manager", value: "If district benchmarks, vending plug-load is documented." },
        { label: "Curriculum integration", value: "Bin-audit + carbon-footprint datasets shareable with science + STEAM teachers. NGSS alignment HS-ESS3 + MS-ESS3." },
        { label: "Grant + funding", value: "USDA Farm to School + DOE Renew America's Schools grants both reference cafeteria + vending sustainability measures." },
      ],
    },
    {
      heading: "8. Contract clause checklist",
      items: [
        { check: "ENERGY STAR + R-290 attestation on every refrigerated machine" },
        { check: "Smart Snacks compliance attestation with quarterly database refresh" },
        { check: "Cellular telemetry standard; operator absorbs connectivity cost" },
        { check: "Diversion infrastructure (bins + signage + collection) included in monthly fee" },
        { check: "Annual ESG + nutrition compliance report to district" },
        { check: "Background check + safety training on every employee accessing school grounds" },
        { check: "Termination for convenience with 90-day notice in case of district policy change" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps districts and individual schools scope Smart Snacks + eco-aligned vending programs with operators positioned to serve K-12 and higher-ed.",
});

console.log("wrote " + "eco-friendly-vending-in-schools");
