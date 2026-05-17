import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-vending-compliance-for-schools",
  assetType: "playbook",
  title: "Smart Snacks Vending Compliance Playbook",
  subtitle: "SKU verification workflow, grade-level planogram templates, and state-overlay alignment",
  intro:
    "USDA Smart Snacks in School (the federally regulated nutrition standards for competitive foods and beverages sold on the school campus during the school day) apply to every school participating in the National School Lunch Program. This playbook codifies the SKU verification workflow, grade-level planogram templates, and state-overlay alignment process that keep a school vending program compliant — and that produce the documentation auditors will request. It maps to 7 CFR 210.11 (competitive food regulations), USDA FNS guidance, FALCPA allergen labeling, ADA Section 309.4, and Section 504 / Title II accessibility.",
  sections: [
    {
      heading: "1. Smart Snacks nutrition standards (the federal floor)",
      paragraph:
        "Each SKU sold during the school day at NSLP-participating schools must meet the Smart Snacks general standards plus the nutrient standards or qualify under a specific exemption (entree, side, food-of-the-day exemption per state).",
      items: [
        { label: "General standards", value: "Must be a grain product with ≥ 50% whole grains by weight, OR have a fruit / vegetable / dairy / protein food as the first ingredient, OR be a combination food with ≥ 1/4 cup fruit and/or vegetable." },
        { label: "Calorie limits — snack", value: "Snack item ≤ 200 calories per serving. Entree ≤ 350 calories per serving." },
        { label: "Sodium — snack", value: "≤ 200 mg sodium per serving as packaged. Entree ≤ 480 mg per serving as packaged." },
        { label: "Total fat", value: "≤ 35% of calories from total fat. Exemptions: nuts/seeds (no added fat/sugar), reduced-fat cheese, dried/dehydrated fruit/vegetable." },
        { label: "Saturated fat", value: "< 10% of calories from saturated fat. Exemptions: reduced-fat cheese, part-skim mozzarella, nuts/seeds, dried fruit with nuts/seeds (no added sugar/fat)." },
        { label: "Trans fat", value: "Zero grams trans fat per serving as packaged (< 0.5 g allowed for labeling rounding)." },
        { label: "Total sugar", value: "≤ 35% of weight from total sugar. Exemptions: dried/dehydrated fruit/vegetable, dried fruit + nuts/seeds (no added sugar), some dairy products." },
        { label: "Beverages (grades K-5)", value: "Plain water (any size), plain low-fat milk ≤ 8 oz, plain or flavored fat-free milk ≤ 8 oz, 100% fruit/vegetable juice ≤ 8 oz." },
        { label: "Beverages (grades 6-8)", value: "Plain water (any size), plain low-fat or fat-free milk ≤ 12 oz, 100% fruit/vegetable juice ≤ 12 oz." },
        { label: "Beverages (grades 9-12)", value: "All grade 6-8 allowable beverages (with up to 12 oz portions). Plus: no-calorie / low-calorie (≤ 5 cal/8 oz or ≤ 10 cal/20 oz) beverages ≤ 20 oz. Calorie-restricted beverages (≤ 40 cal/8 oz or ≤ 60 cal/12 oz) ≤ 12 oz." },
      ],
    },
    {
      heading: "2. State + local overlays",
      paragraph:
        "Many states impose stricter requirements above the federal floor (lower calorie limits, narrower beverage allowances, mandatory minimum healthy-share percentages, water access requirements). Verify state department of education guidance before publishing the planogram.",
      items: [
        { check: "State-specific calorie or sodium ceilings (e.g., California, Connecticut, New York have published stricter overlays in various forms)." },
        { check: "State beverage rules (some states prohibit any caffeinated beverage K-12, others prohibit at K-8 only)." },
        { check: "State competitive-food time-of-day extensions (some states extend Smart Snacks rules to before-school + after-school, beyond the federal 'school day' window)." },
        { check: "State whole-grain or sugar-content thresholds (some states require lower thresholds than the federal floor)." },
        { check: "Local school-board policy — Wellness Policy may impose additional restrictions; verify district policy alongside state code." },
      ],
    },
    {
      heading: "3. SKU verification workflow",
      items: [
        { number: 1, title: "Operator pre-submission", description: "Operator submits proposed SKU list with full Nutrition Facts panel + ingredient statement + portion-as-served + serving-size verification. For mixed-format SKUs (e.g., snack bar), per-package nutrition (not per-serving) verified." },
        { number: 2, title: "Smart Snacks Product Calculator", description: "Each SKU run through the Alliance for a Healthier Generation Product Calculator (or equivalent state-approved tool). Output PDF retained in compliance file." },
        { number: 3, title: "State-overlay check", description: "Each SKU verified against state DOE guidance + district Wellness Policy. Some SKUs that pass federal floor may fail state overlay." },
        { number: 4, title: "Allergen review", description: "Allergen labeling per FALCPA verified on each package. SKU-by-SKU allergen list documented for school nurse + 504 plan accommodation." },
        { number: 5, title: "Approval + lock", description: "School foodservice director + operator both sign approved SKU list. Substitutions require re-verification + sign-off; no field-substitutions by route driver." },
        { number: 6, title: "Annual recertification", description: "Full SKU list re-verified annually (reformulations happen; passing today is not passing forever). Recertification documented." },
      ],
    },
    {
      heading: "4. Grade-level planogram templates",
      headers: ["Grade band", "Beverage allocation", "Snack allocation", "Caffeine"],
      rows: [
        ["K-5", "100% water + plain milk + 100% juice ≤ 8 oz", "100% Smart Snacks compliant; ≤ 200 cal/serving", "None"],
        ["6-8 (middle school)", "Water + milk ≤ 12 oz + juice ≤ 12 oz", "100% Smart Snacks compliant", "None (some states prohibit; verify)"],
        ["9-12 (high school)", "All 6-8 + low-cal ≤ 20 oz + calorie-restricted ≤ 12 oz", "100% Smart Snacks compliant", "Allowed by federal rule (verify state)"],
      ],
    },
    {
      heading: "5. After-school + exempt time windows",
      items: [
        { check: "Federal Smart Snacks applies during the 'school day' — midnight through 30 minutes after the official end of the school day. Outside this window, federal rule does not apply." },
        { check: "Some states extend Smart Snacks to before-school + after-school. Verify state DOE guidance." },
        { check: "Exempt fundraiser windows vary by state. Some states allow a fixed number of fundraiser days per year exempt from Smart Snacks; others apply Smart Snacks year-round on campus." },
        { check: "After-school programs in district facilities — verify whether the program qualifies for the 30-minute exemption or is treated separately." },
        { check: "Faculty-only break rooms — Smart Snacks generally does not apply to staff-only areas not accessible to students; document access restriction." },
      ],
    },
    {
      heading: "6. Allergen + accessibility",
      items: [
        { check: "FALCPA labeling on every SKU; allergen summary signage on machine face." },
        { check: "Coordinate with school nurse on student-specific allergen accommodations (504 plans, peanut-free zones, etc.)." },
        { check: "ADA Section 309.4 — selection buttons, payment readers, dispense doors operable with one hand and ≤ 5 lbf operating force." },
        { check: "Section 308 reach range — highest operable part ≤ 48 inches AFF; lowest ≥ 15 inches." },
        { check: "Closed-loop payment (student ID / lunch-account rail) where district provides; reduces cash-handling and supports free / reduced-price eligible students with seamless access where district subsidizes." },
      ],
    },
    {
      heading: "7. Auditor-ready documentation file",
      items: [
        { check: "Current approved SKU list signed by foodservice director + operator." },
        { check: "Smart Snacks Product Calculator output for each SKU (PDF)." },
        { check: "State-overlay verification notes for each SKU." },
        { check: "Allergen labeling photos / scans of package faces for each SKU." },
        { check: "ADA Section 309.4 + Section 308 attestation from operator." },
        { check: "Annual recertification log; substitutions log with re-verification documentation." },
        { check: "Wellness Policy alignment statement from district." },
        { check: "Operator service-SLA + quarterly review notes." },
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Operator proposes SKUs without Product Calculator output." },
        { check: "Operator wants 'field-substitution discretion' on stockouts — risks non-compliant SKU in machine." },
        { check: "Beverage ladder by grade not enumerated in contract — drift risk." },
        { check: "No annual recertification clause." },
        { check: "Allergen labeling 'on request' rather than on every package face." },
        { check: "After-school exemption window not in writing — Smart Snacks application unclear." },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or nutrition-compliance advice. Smart Snacks application and state overlays should be confirmed with your state department of education and district Wellness Policy. Allergen accommodations should be coordinated with the school nurse and Section 504 / IEP teams.",
});

console.log("wrote "+"healthy-vending-compliance-for-schools");
