import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-vending-machines-offer-healthy-options",
  assetType: "template",
  title: "Healthy Vending Program Framework",
  subtitle: "Defined nutrition criteria, planogram template, refrigeration spec, allergen tagging, monthly reporting",
  intro:
    "Use this framework to specify and operate a healthy vending program at any placement type. Criteria reference USDA Smart Snacks in Schools, NEMS-V (Nutrition Environment Measures Survey — Vending), FDA Food Code 2022 § 3-501.16, FALCPA allergen labeling, and the FTC Endorsement Guides where any 'healthy' claim is made on the machine face. Operator capability should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Defined 'healthy' criteria",
      paragraph:
        "Federal regulation does not provide a single binding 'healthy vending' definition outside K-12 settings. The criteria below combine USDA Smart Snacks (national K-12 standard) and NEMS-V scoring (peer-reviewed) so that any claim made under FTC Endorsement Guides is substantiable.",
      headers: ["Category", "Calories", "Sodium", "Sat fat", "Sugar", "Other"],
      rows: [
        ["Snack — primary", "≤ 200 cal", "≤ 230 mg", "≤ 10% of cal", "≤ 35% by wt", "Whole grain first ingredient OR ≥ 50% fruit/veg/dairy/protein"],
        ["Snack — entrée", "≤ 350 cal", "≤ 480 mg", "≤ 10% of cal", "≤ 35% by wt", "Whole grain or protein anchor"],
        ["Beverage — water", "0 cal", "—", "—", "—", "Plain or carbonated, unflavored or unsweetened"],
        ["Beverage — milk + alternative", "≤ 150 cal", "—", "—", "≤ 22 g / 12 oz", "Fat-free or low-fat dairy, unsweetened plant milk"],
        ["Beverage — juice", "≤ 120 cal", "—", "—", "—", "100% juice or 100% juice + water, ≤ 12 oz"],
        ["Beverage — diet / sport", "≤ 60 cal / 12 oz", "—", "—", "—", "No caloric sweeteners above threshold"],
      ],
    },
    {
      heading: "2. Planogram template — 40-column combo machine",
      paragraph:
        "Use this planogram as a starting frame. Aim for ≥ 80% of facings meeting the defined criteria. Adjust quarterly using velocity report. Refrigerated section required for perishables.",
      items: [
        { label: "Beverage — water + sparkling (20%)", value: "Bottled water (16-20 oz), sparkling water (LaCroix, Bubly), flavored unsweetened sparkling, mineral water." },
        { label: "Beverage — diet + low-cal (10%)", value: "Diet soda, sugar-free flavored sparkling, low-cal RTD tea (Pure Leaf, Honest)." },
        { label: "Beverage — dairy + alt (5%)", value: "Fat-free or low-fat milk, unsweetened plant milk, RTD protein (within criteria)." },
        { label: "Snack — whole-grain + nut bar (20%)", value: "RXBAR, KIND, Larabar, Clif (within criteria), ONE bar (within criteria), Quest (within criteria)." },
        { label: "Snack — nut + jerky (15%)", value: "Almonds, cashews, peanuts (unsalted or lightly salted), beef + turkey jerky." },
        { label: "Snack — popcorn + chips + cracker (10%)", value: "Air-popped popcorn, baked chips (Beanitos, Quinn), whole-grain crackers." },
        { label: "Snack — produce + dried fruit (5%)", value: "Apple slices, fresh fruit (perishable, refrigerated), unsweetened dried fruit (mango, apricot)." },
        { label: "Fresh + dairy — refrigerated (10%)", value: "Greek yogurt (Chobani, Fage), cheese stick, hummus + veg cup, hard-boiled egg, cottage cheese." },
        { label: "Treat (5%)", value: "Dark chocolate single-serve, protein cookie (within criteria), better-for-you treat." },
      ],
    },
    {
      heading: "3. Refrigeration + food safety spec",
      items: [
        { label: "Temperature target", value: "≤ 40°F per FDA Food Code 3-501.16 throughout the cold-chain. Temperature telemetry with 30-minute alert threshold for excursion above 40°F." },
        { label: "Date marking", value: "FDA Food Code 3-501.17 — ready-to-eat / time-temperature-controlled foods labeled with 7-day discard date from preparation or opening." },
        { label: "Rotation cadence", value: "Daily stock check for perishables; FIFO rotation; discard at posted use-by date." },
        { label: "Equipment certification", value: "NSF/ANSI 7 refrigerated vending and NSF/ANSI 25 mechanical refrigeration certifications on file. Operator attests in writing." },
        { label: "Power continuity", value: "Operator's restock SOP includes power-outage check; cold-chain failure triggers full discard per FDA Food Code 3-501.16 + 3-501.19." },
        { label: "HACCP plan", value: "Operator should maintain a HACCP-aligned food safety plan covering receiving, holding, restock, and disposal." },
      ],
    },
    {
      heading: "4. FALCPA allergen tagging",
      paragraph:
        "Federal allergen disclosure under the Food Allergen Labeling and Consumer Protection Act (FALCPA) + FASTER Act (2023) covers nine major allergens. Operator should attest to a tagging program at the SKU level and a summary on the machine face.",
      items: [
        { check: "Per-SKU label: contains [milk / egg / fish / shellfish / tree nut / peanut / wheat / soy / sesame] as applicable, per FALCPA + FASTER Act." },
        { check: "Machine-face allergen summary: 'Allergen information is on each product label. Contact [operator] for additional information.' Per FTC + state-law disclosure standards." },
        { check: "Cross-contact disclosure where applicable: 'Manufactured in a facility that also processes [X].'" },
        { check: "Cold-chain handling: pre-packaged products do not require cross-contact procedures beyond standard restock; fresh-food programs require dedicated cutting boards + utensils by allergen." },
        { check: "Refund / exchange policy for mislabeled product: 100% refund + incident report + supplier follow-up within 24 hours." },
      ],
    },
    {
      heading: "5. Operator capability checks",
      items: [
        { check: "Operator should attest to nutrition-criteria SKU vetting (≥ 80% of facings meet the defined criteria) and provide a quarterly SKU compliance audit." },
        { check: "Operator should attest to NSF/ANSI 7 + 25 certifications on refrigerated equipment and ≤ 30-minute telemetry alert threshold for cold-chain excursion." },
        { check: "Operator should attest to FALCPA + FASTER Act allergen labeling on every SKU plus machine-face allergen summary." },
        { check: "Operator should attest to FTC Endorsement Guides compliance for any 'healthy', 'organic', 'low-fat', or comparable claim made on the machine face or app." },
        { check: "Operator should provide $2M general liability, $1M umbrella, food product liability ≥ $1M, additional-insured endorsement to host." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless payment acceptance with AOC and SAQ-B-IP on file." },
      ],
    },
    {
      heading: "6. Monthly reporting framework",
      items: [
        { check: "Uptime per machine, per day, over the month (target ≥ 98%)." },
        { check: "Transactions per machine per day; revenue per machine; basket size." },
        { check: "Stockout incidents + resolution time vs SLA." },
        { check: "Per-SKU velocity (top-20 + bottom-10); planogram refresh proposal." },
        { check: "Nutrition compliance: % of facings meeting defined criteria (target ≥ 80%); reasons for any sub-80% periods." },
        { check: "Refund volume + reason codes (target < 2% of transactions); allergen-related complaints flagged." },
        { check: "Temperature excursion log (instances + duration + product discard volume)." },
        { check: "Employee / member / resident feedback summary (in-app ratings, QR survey)." },
      ],
    },
    {
      heading: "7. Quarterly + annual review",
      items: [
        { check: "Quarterly planogram refresh based on velocity + customer survey." },
        { check: "Quarterly SKU compliance audit signed by operator with documentation of any substitutions." },
        { check: "Annual nutrition-criteria refresh to reflect updated USDA Smart Snacks, NEMS-V scoring, or FDA labeling rule changes." },
        { check: "Annual recertification: NSF + insurance + food safety + payment compliance attestations on file." },
        { check: "Annual contract review: commission tier, SLA performance, customer NPS, renewal vs RFP." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, nutrition, or medical advice. Define and substantiate any 'healthy' claim per FTC Endorsement Guides. Confirm operator capabilities in writing through reference checks and attestations.",
});

console.log("wrote " + "can-vending-machines-offer-healthy-options");
