import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "best-vending-machine-types-for-schools",
  assetType: "pack",
  title: "K-12 Vending Equipment Selection Pack",
  subtitle: "Combo, beverage cooler, fresh-food, AI cooler, and after-school equipment matrix with Smart Snacks overlay",
  intro:
    "K-12 vending equipment selection is governed by USDA Smart Snacks in School (7 CFR 210.11), state competitive-food rules, and bell-schedule windows. This pack maps the five equipment categories most commonly deployed at K-12 sites against placement, audience, and compliance constraints so a district is equipped to specify the right machine for each location rather than defaulting to a single type.",
  sections: [
    {
      heading: "1. Equipment category overview",
      paragraph:
        "Five equipment categories cover 95%+ of K-12 deployments. The right choice depends on audience (elementary vs middle vs high), placement (cafeteria vs hallway vs gym), and the Smart Snacks window (during school day vs after the last bell).",
      headers: ["Equipment type", "Best placement", "Audience", "Smart Snacks scope"],
      rows: [
        ["Combo (snack + beverage)", "High-school hallway, athletics", "Grades 9-12 + staff", "All SKUs comply during school day"],
        ["Beverage cooler", "Cafeteria adjacency, athletics", "Grades 6-12 + staff", "Water + flavored water + ≤ 12oz milk/juice"],
        ["Fresh-food / grab-and-go", "Cafeteria, near reimbursable meal line", "All grades + staff", "≤ 200 cal entrée, ≤ 35% calories from fat, etc."],
        ["AI smart-cooler", "Staff lounge, faculty workroom", "Staff-only typical", "Smart Snacks if student-accessible during day"],
        ["After-school / event vending", "Gymnasium, theater lobby", "Students + community", "Exempt outside school day per 7 CFR 210.11(b)"],
      ],
    },
    {
      heading: "2. Combo machine specification",
      paragraph:
        "Combo machines are the workhorse for high-school hallways. Equipment should meet ADA Section 308 reach range, support cashless payment, and accept planogram updates via telemetry.",
      items: [
        { label: "Capacity", value: "30-45 snack selections + 6-10 beverage rows; AMS, USI/Wittern, Crane, or Royal Vendors are common manufacturer specs." },
        { label: "Refrigeration", value: "Combo refrigeration zone for milk + cold beverages at 35-40°F; energy-efficient ENERGY STAR-rated where required." },
        { label: "Payment", value: "EMV chip, contactless NFC, mobile wallet (Apple Pay / Google Pay), and student-ID integration where the district uses MySchoolBucks, Titan, or LINQ Connect." },
        { label: "Telemetry", value: "Cellular modem with sub-15-minute heartbeat; per-SKU velocity reporting; planogram remote-push capability." },
        { label: "Compliance", value: "All SKUs filtered through Smart Snacks Product Calculator before planogram commit; allergen labeling per FALCPA." },
      ],
    },
    {
      heading: "3. Beverage cooler specification",
      paragraph:
        "Beverage coolers are the most flexible Smart Snacks compliant option for grades 6-12. They support water, flavored water, and ≤ 12oz milk/juice that meet the federal beverage standards.",
      items: [
        { label: "Allowed beverages (HS)", value: "Plain water (any size), flavored water with ≤ 5 cal/8oz, ≤ 12oz low-fat milk, ≤ 12oz 100% juice, ≤ 20oz calorie-free or low-calorie beverages." },
        { label: "Allowed beverages (MS/ES)", value: "Plain water, ≤ 8oz low-fat milk, ≤ 8oz 100% juice — calorie-free and low-calorie beverages are NOT permitted at MS/ES during the school day." },
        { label: "Cooler models", value: "Royal Vendors GIII / GIV, Dixie-Narco, AMS Sensit; energy management is required where ENERGY STAR applies." },
        { label: "Telemetry", value: "Per-row velocity reporting + temperature alarm at 4-hour SLA for excursions outside 35-40°F." },
      ],
    },
    {
      heading: "4. Fresh-food / grab-and-go specification",
      paragraph:
        "Fresh-food machines support reimbursable-meal extension under USDA NSLP rules and Smart Snacks for à-la-carte items.",
      items: [
        { label: "Smart Snacks entrée limit", value: "≤ 350 cal, ≤ 35% calories from fat, ≤ 10% saturated fat, ≤ 480 mg sodium per entrée (per 7 CFR 210.11)." },
        { label: "Smart Snacks snack limit", value: "≤ 200 cal, ≤ 35% calories from fat, ≤ 10% saturated fat, ≤ 200 mg sodium per snack." },
        { label: "Refrigeration", value: "35-40°F per FDA Food Code; HACCP-style monitoring with temperature log + alarm; per-SKU shelf-life tracking via telemetry." },
        { label: "Restock cadence", value: "Daily or every-other-day depending on velocity; expired-product removal is documented in the operator log." },
        { label: "Allergen handling", value: "Allergen labeling per FALCPA; allergen segregation in cooler if peanut/tree-nut SKUs are deployed." },
      ],
    },
    {
      heading: "5. AI smart-cooler specification",
      paragraph:
        "AI smart-coolers (AWM Smart Shelf, Selecta, Aramark Avenue C, 365 Retail Markets PicoCooler) use computer vision and weight sensors to allow open-door, frictionless purchasing. They are most appropriate in staff lounges; if student-accessible during the school day, all SKUs must pass Smart Snacks.",
      items: [
        { label: "Equipment", value: "AWM Smart Shelf, 365 Retail Markets PicoCooler, Selecta, Aramark Avenue C, or comparable computer-vision cooler." },
        { label: "Payment", value: "Credit/contactless tap, mobile wallet, app-based payment with auto-charge after door close." },
        { label: "Theft protection", value: "Camera + weight sensor reconciliation; loss rate target < 2% (industry benchmark per AWM operator reports)." },
        { label: "Compliance scope", value: "If student-accessible during the school day, all SKUs filtered through Smart Snacks; if staff-only and locked outside staff hours, Smart Snacks is not required." },
      ],
    },
    {
      heading: "6. After-school / event vending specification",
      paragraph:
        "Per 7 CFR 210.11(b), Smart Snacks applies during the school day (midnight to 30 minutes after the last bell). After that window — athletic events, theater, evening community events — vending is governed by district wellness policy + state law, but not federal Smart Snacks.",
      items: [
        { check: "Operator can timestamp planogram swap from compliant to event-mode after the last bell." },
        { check: "After-school SKU set documented in the contract addendum." },
        { check: "Wellness committee has approved the after-school SKU set." },
        { check: "After-school revenue is reported separately in the QBR." },
      ],
    },
    {
      heading: "7. Selection decision matrix",
      paragraph:
        "Use this matrix to map a placement to an equipment category. Operator should attest in writing to each line item before commit.",
      headers: ["Placement", "Audience", "Recommended primary", "Recommended secondary"],
      rows: [
        ["HS hallway", "Students grades 9-12", "Combo (snack + beverage)", "Beverage cooler if Smart Snacks audit risk is high"],
        ["MS hallway", "Students grades 6-8", "Beverage cooler (water + ≤ 8oz milk)", "No snack vending typical during school day"],
        ["ES hallway / classroom corridor", "Students K-5", "Water-only cooler", "No snack vending during school day"],
        ["Cafeteria adjacency", "All grades", "Fresh-food grab-and-go", "Beverage cooler"],
        ["Faculty / staff lounge", "Staff only", "AI smart-cooler", "Combo machine"],
        ["Gymnasium / athletics", "Mixed students + community", "Beverage cooler", "After-school event-mode planogram"],
      ],
    },
    {
      heading: "8. Operator attestation checklist",
      items: [
        { check: "Operator has 24+ months of K-12 placement experience." },
        { check: "Operator runs every SKU through the Smart Snacks Product Calculator before commit." },
        { check: "Operator provides written attestation that Smart Snacks SKUs are filtered." },
        { check: "Equipment is ADA-compliant per Section 308 (operable parts ≤ 48 inches, ≥ 15 inches; ≤ 5 lbf operating force)." },
        { check: "Telemetry reports per-SKU velocity, cashless mix, and temperature for refrigerated units." },
        { check: "Operator carries the standard insurance (general liability + auto + workers' comp + cyber)." },
        { check: "Operator has executed a wellness-policy review with the host district." },
      ],
    },
  ],
  footer:
    "This pack is a working selection reference. Confirm state competitive-food rules with the district school nutrition director and the state agency before commit; some states (CA, MS, NY) layer state requirements above the federal Smart Snacks floor.",
});

console.log("wrote "+"best-vending-machine-types-for-schools");
