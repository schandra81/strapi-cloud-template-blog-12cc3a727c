import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "school-compliant-vending-options",
  assetType: "checklist",
  title: "School Vending Compliance Verification Checklist",
  subtitle: "USDA Smart Snacks 7 CFR 210.11 + state overlays + Administrative Review audit prep",
  intro:
    "K-12 schools participating in the National School Lunch Program must verify that every SKU sold during the school day (midnight to 30 minutes after the last bell, 7 CFR 210.11(b)) meets Smart Snacks nutrition standards. State agencies frequently add overlays — California SB 12/19, Texas Public School Nutrition Policy, New York Part 135, Massachusetts 105 CMR 225. This checklist gives the SFA director and procurement officer a per-machine, per-semester audit trail.",
  sections: [
    {
      heading: "1. Smart Snacks nutrition verification — per SKU",
      paragraph:
        "Use the Alliance for a Healthier Generation Smart Snacks Product Calculator (or equivalent) to verify every facing in every machine. Print or screenshot results; retain for 3 years per 7 CFR 210.18(o).",
      items: [
        { check: "Calories: snack/side ≤ 200 cal; entrée ≤ 350 cal." },
        { check: "Sodium: snack ≤ 200 mg; entrée ≤ 480 mg." },
        { check: "Total fat ≤ 35% of calories." },
        { check: "Saturated fat < 10% of calories." },
        { check: "Trans fat 0 g (per Nutrition Facts label rounding rules)." },
        { check: "Total sugar ≤ 35% by weight." },
        { check: "First ingredient is fruit, vegetable, dairy, protein, or whole grain (or combination foods meeting standards)." },
        { check: "Product Calculator screenshot dated within 60 days on file for every SKU." },
      ],
    },
    {
      heading: "2. Beverage standards — by grade level",
      headers: ["Grade band", "Allowed beverages", "Max portion"],
      rows: [
        ["Elementary (K-5)", "Water (no calorie/portion limit), low-fat/fat-free milk, 100% juice (no added sweeteners)", "Milk 8 oz; juice 8 oz"],
        ["Middle (6-8)", "Same as elementary", "Milk 12 oz; juice 12 oz"],
        ["High (9-12)", "Water, milk, 100% juice, calorie-free flavored water, lower-calorie beverages (≤ 60 cal / 12 oz or ≤ 40 cal / 8 oz)", "Milk 12 oz; juice 12 oz; flavored water 20 oz; lower-cal 12 oz"],
      ],
    },
    {
      heading: "3. State overlay verification",
      paragraph:
        "Several states apply standards stricter than federal Smart Snacks. Verify state code at policy adoption and at each triennial assessment.",
      items: [
        { label: "California (SB 12 / SB 19 / EC 49431-49431.7)", value: "Beverage restrictions stricter than federal; competitive food caloric/fat limits stricter for elementary and middle; verify with CDE Nutrition Services." },
        { label: "Texas (Public School Nutrition Policy / 19 TAC §61.1015)", value: "FMNV (Foods of Minimal Nutritional Value) restrictions during school day; portion limits by grade." },
        { label: "New York (8 NYCRR §114; Part 135)", value: "No carbonated beverages at elementary; portion limits at middle/high." },
        { label: "Massachusetts (105 CMR 225)", value: "Competitive food standards stricter than federal; reviewed by MDPH." },
        { label: "Other states", value: "Check state department of education + state department of health; many states adopt federal floor with no overlay." },
      ],
    },
    {
      heading: "4. Marketing + signage compliance — 7 CFR 210.31",
      items: [
        { check: "Machine wraps, vinyls, and exterior branding feature only Smart-Snacks-compliant products." },
        { check: "Scoreboards, gymnasium signage, cups, school-sponsored posters compliant." },
        { check: "Coupons, point-of-sale promotional materials compliant during the school day." },
        { check: "Brand-only marketing (no specific non-compliant product) permitted but documented for SA review." },
        { check: "Quarterly marketing audit log retained; non-compliant items removed within 7 days of identification." },
      ],
    },
    {
      heading: "5. Allergen + nutrition labeling",
      items: [
        { check: "Allergen labeling per FALCPA (21 U.S.C. 343) on each facing — Big 9 allergens (incl. sesame, FASTER Act 2021)." },
        { check: "Calorie disclosure per FDA 21 CFR 101.8 (Menu Labeling Rule) for chains with 20+ machines under common ownership." },
        { check: "Nutrition Facts panel visible on the SKU or via on-machine QR / printed sheet." },
        { check: "Allergen summary signage on machine face for high-traffic placements." },
      ],
    },
    {
      heading: "6. Operating window + after-school programs",
      items: [
        { check: "School day defined: midnight before through 30 minutes after the official end of the school day — Smart Snacks applies through this window." },
        { check: "After-school programs participating in Afterschool Snack Service: snacks meet NSLP afterschool snack standards (7 CFR 210.10(o))." },
        { check: "After-school programs in CACFP: meals/snacks meet CACFP standards (7 CFR 226.20)." },
        { check: "Evening events (sports, fundraisers, PTA): Smart Snacks does not apply; state fundraiser exemption rules verified (often limited number per year)." },
      ],
    },
    {
      heading: "7. Audit + documentation retention",
      items: [
        { check: "Per-machine planogram with photos refreshed monthly; retained 3 years." },
        { check: "Operator Smart Snacks attestation signed each semester; SKU list dated." },
        { check: "Product Calculator output retained for every SKU; refreshed when SKU changes formulation." },
        { check: "Marketing inventory + audit log retained 3 years." },
        { check: "Triennial wellness policy assessment retained permanently in district records." },
        { check: "SFA director + designated wellness official named and reachable; copy in procurement file." },
      ],
    },
  ],
  footer:
    "Informational only — not legal advice. Confirm SKU compliance via the Smart Snacks Product Calculator and verify state overlays with the State Agency. LetUsVending is equipped to coordinate Smart-Snacks-aligned operators and per-semester audit packets for K-12 placements.",
});

console.log("wrote "+"school-compliant-vending-options");
