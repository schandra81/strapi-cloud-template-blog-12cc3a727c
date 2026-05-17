import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-vending-machine-programs-for-gyms",
  assetType: "template",
  title: "Healthy Gym Vending Program Framework",
  subtitle: "Defined nutrition criteria, planogram template, recovery SKU list, and monthly reporting",
  intro:
    "Use this framework to specify and operate a healthy vending program inside a gym, fitness center, recreation center, or athletic facility. Criteria reference USDA Smart Snacks in Schools, NEMS-V (Nutrition Environment Measures Survey — Vending), FDA Food Code 2022, FALCPA, and the FTC Endorsement Guides where 'healthy' claims are made. Operator capability should be confirmed in writing.",
  sections: [
    {
      heading: "1. Defined 'healthy' criteria",
      paragraph:
        "Federal regulation does not provide a single binding 'healthy vending' definition. The criteria below combine USDA Smart Snacks (national school standard) and NEMS-V scoring (peer-reviewed) so claims are defensible under FTC Endorsement Guides.",
      headers: ["Category", "Calories", "Sodium", "Sat fat", "Sugar", "Other"],
      rows: [
        ["Snack — primary", "≤ 200 cal", "≤ 230 mg", "≤ 10% cal", "≤ 35% wt", "Whole grain first ingredient OR ≥ 50% fruit/veg/dairy/protein"],
        ["Beverage — water", "0 cal", "—", "—", "—", "Plain or carbonated, unflavored or unsweetened"],
        ["Beverage — milk", "≤ 150 cal", "—", "—", "—", "Fat-free or low-fat, ≤ 22 g sugar / 12 oz"],
        ["Beverage — juice", "≤ 120 cal", "—", "—", "—", "100% juice or 100% juice + water, ≤ 12 oz"],
        ["Beverage — diet/sport", "≤ 60 cal / 12 oz", "—", "—", "—", "No added caloric sweeteners > threshold"],
        ["Protein recovery", "150-300 cal", "≤ 400 mg", "≤ 15% cal", "≤ 15 g", "≥ 15 g protein per serving; whey, casein, plant, or RTD"],
      ],
    },
    {
      heading: "2. Operator capability checks",
      items: [
        { check: "Operator should attest to nutrition-criteria SKU vetting (≥ 80% of facings meet the defined criteria) and provide a quarterly SKU compliance audit." },
        { check: "Operator should attest to FALCPA allergen labeling on every SKU plus an allergen summary on the machine face." },
        { check: "Operator should attest to refrigeration at ≤ 40°F (FDA Food Code 3-501.16) with temperature telemetry and 30-minute excursion alerting." },
        { check: "Operator should attest to FTC-compliant signage when 'healthy' claims appear on the machine (define criteria, source standards, no implied superiority not substantiated)." },
        { check: "Operator should provide $2M general liability, $1M umbrella, food product liability ≥ $1M, additional-insured endorsement to facility." },
        { check: "Operator should attest to NSF/ANSI 7 refrigerated vending and NSF/ANSI 25 mechanical refrigeration certifications on file." },
      ],
    },
    {
      heading: "3. Planogram template — 40-column gym snack + beverage combo",
      paragraph:
        "Use this planogram as a starting point. Adjust quarterly using velocity report. Refrigerated section is required for any RTD protein, dairy, or perishable produce SKUs.",
      items: [
        { label: "Recovery + protein (25% of facings)", value: "RTD protein shakes (Fairlife Core Power, Premier Protein, Muscle Milk), whey protein single-serve, plant protein single-serve, chicken-breast jerky, hard-boiled-egg cup." },
        { label: "Hydration (25%)", value: "Bottled water (16-20 oz), sparkling water (LaCroix, Bubly), electrolyte (Liquid IV, LMNT, Gatorade Zero, BodyArmor LYTE), coconut water." },
        { label: "Energy + caffeine (15%)", value: "Cold brew RTD, RTD espresso (La Colombe, Chameleon), zero-sugar energy (Celsius, Alani Nu, Ghost), pre-workout single-serve." },
        { label: "Fuel snack — whole-grain + nut (15%)", value: "RXBAR, KIND Protein, Larabar, Clif Builder, ONE bar, Quest bar (where it meets criteria), trail mix, raw nut packs." },
        { label: "Fresh + perishable (10%)", value: "Fruit cups, hummus + veg cups, hard-boiled-egg cups, single-serve Greek yogurt, cheese sticks. Refrigerated; daily stock check." },
        { label: "Indulgent + treat (10%)", value: "Better-for-you cookies (Lenny + Larry's, Munk Pack), protein chips, popcorn, dark chocolate single-serve." },
      ],
    },
    {
      heading: "4. Recovery SKU list — 20-SKU starting frame",
      headers: ["SKU", "Protein (g)", "Calories", "Best-fit window"],
      rows: [
        ["Fairlife Core Power 26g", "26", "170", "Post-workout, strength"],
        ["Premier Protein 30g RTD", "30", "160", "Post-workout, general"],
        ["Muscle Milk Pro Series 32g", "32", "170", "Post-workout, strength"],
        ["Orgain Plant Protein 21g", "21", "150", "Post-workout, plant-based"],
        ["Iconic 20g Protein Drink", "20", "100", "Post-workout, lower-calorie"],
        ["Greek yogurt single-serve (Chobani)", "12-17", "120-150", "Post-workout, breakfast"],
        ["Hard-boiled egg 2-pack", "12", "140", "Post-workout, low-carb"],
        ["Chicken-breast jerky (Chomps, EPIC)", "11-14", "100-120", "Mid-day, low-carb"],
        ["RXBAR (12 g)", "12", "210", "Pre + post, whole-food"],
        ["KIND Protein bar (12 g)", "12", "250", "Pre + post"],
        ["Quest bar (20 g)", "20", "190", "Post-workout"],
        ["Clif Builder 20g", "20", "270", "Post-workout, strength"],
        ["ONE bar 20g", "20", "220", "Post-workout, lower-sugar"],
        ["Cottage cheese single-serve (Good Culture)", "12-19", "90-140", "Post-workout"],
        ["Cheese stick 2-pack", "12", "160", "Mid-day, low-carb"],
        ["Liquid IV electrolyte", "0", "45", "Hydration"],
        ["LMNT electrolyte", "0", "10", "Hydration, low-sugar"],
        ["BodyArmor LYTE", "0", "20", "Hydration, after intense session"],
        ["Coconut water (Vita Coco)", "0", "60-90", "Hydration, natural"],
        ["Tart cherry juice (4 oz, anti-inflammatory)", "0", "60-80", "Post-workout recovery"],
      ],
    },
    {
      heading: "5. Equipment specification",
      items: [
        { label: "Refrigerated snack + beverage combo", value: "AMS, Crane Merchant, Royal Vendors, USI 5000, or comparable. NSF/ANSI 7 refrigerated vending certified. Temperature telemetry with 30-min alert threshold for excursion above 40°F." },
        { label: "Glass-front beverage merchandiser", value: "Royal RVCC-768 or comparable; LED lit, 768-bottle capacity. NSF/ANSI 7." },
        { label: "Smart cooler option (AI vision)", value: "AiFi, Trigo, Standard AI, Grabango cooler retrofit for facilities with member-app integration." },
        { label: "Payment", value: "Apple Pay, Google Pay, contactless EMV, member-app QR. Operator AOC + SAQ-B-IP on file (PCI-DSS 4.0)." },
        { label: "Lighting + signage", value: "LED, 10+ year life, dimmable. Facility-branded wrap; allergen + nutrition criteria signage on machine face." },
      ],
    },
    {
      heading: "6. Monthly reporting framework",
      paragraph:
        "Operator should deliver these reports by the 10th of each month for the prior month. Reports retained in the facility's vendor management file.",
      items: [
        { check: "Uptime per machine, per day, over the month (target ≥ 98%)." },
        { check: "Transactions per machine per day; revenue per machine; basket size." },
        { check: "Stockout incidents + resolution time vs SLA." },
        { check: "Per-SKU velocity (top-20 and bottom-10); planogram refresh proposal." },
        { check: "Nutrition compliance: % of facings meeting defined criteria (target ≥ 80%)." },
        { check: "Refund volume + reason codes (target < 2% of transactions)." },
        { check: "Temperature excursion log (instances + duration)." },
        { check: "Member feedback summary (in-app ratings, on-machine QR survey)." },
      ],
    },
    {
      heading: "7. Quarterly + annual review",
      items: [
        { check: "Quarterly planogram refresh based on velocity + member survey." },
        { check: "Quarterly SKU compliance audit signed by operator." },
        { check: "Annual contract review: commission tier, SLA performance, member NPS." },
        { check: "Annual nutrition-criteria refresh to reflect updated USDA Smart Snacks or NEMS-V scoring." },
        { check: "Annual recertification: NSF certification, insurance, food safety, payment compliance." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, nutrition, or medical advice. Define and substantiate any 'healthy' claim per FTC Endorsement Guides. Confirm operator capabilities in writing through reference checks and attestations.",
});

console.log("wrote " + "healthy-vending-machine-programs-for-gyms");
