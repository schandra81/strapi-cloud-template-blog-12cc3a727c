import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-hospital-volunteer-lounges",
  assetType: "template",
  title: "Hospital Volunteer-Lounge Vending Framework",
  subtitle: "Equipment pairing, subsidy mechanism options, planogram by cohort, and quarterly review template",
  intro:
    "Hospital volunteer lounges serve a unique cohort: unpaid auxiliary members, gift-shop staff, chaplaincy, junior volunteers, and patient-family caregivers in some facilities. They are not employees, so they cannot use the employee cafeteria subsidy directly, and they are not patients, so meal vouchers do not apply. Vending is often the only on-site food access during a 4-6 hour shift. This framework codifies equipment selection, the subsidy mechanism the hospital can stand up without violating the IRS volunteer-recognition rules, planogram by cohort, and the quarterly review document the volunteer services director shares with the auxiliary president.",
  sections: [
    {
      heading: "1. Equipment pairing — typical lounge configuration",
      paragraph:
        "A lounge serving 40-80 active volunteers per week typically supports the three-device pairing below. Adjust footprint for available square footage; minimum clear floor space per ADA Section 305 is 30\" × 48\" per device.",
      headers: ["Device", "Footprint", "Stocking role", "Telemetry"],
      rows: [
        ["Refrigerated combo (snack + cold beverage)", "~ 39\" W × 35\" D × 72\" H", "Primary — sandwiches, yogurt, fruit, water, juice", "Required (cold-chain alert)"],
        ["Hot-beverage / OCS countertop brewer", "~ 12\" W × 18\" D × 18\" H", "Coffee, tea, hot chocolate; subsidized or free-vend", "Optional"],
        ["Healthy-snack glass-front (AI cooler optional)", "~ 30\" W × 30\" D × 72\" H", "Granola bars, nuts, dried fruit, single-serve produce", "Required"],
      ],
    },
    {
      heading: "2. Subsidy mechanism options",
      paragraph:
        "Hospitals use one of four mechanisms to subsidize volunteer purchases. Each has trade-offs. Coordinate with the Compliance Officer and the auxiliary treasurer before adopting.",
      items: [
        { number: 1, title: "Free-vend during shift", description: "Operator turns selected machines or selected SKUs to $0.00 during scheduled volunteer hours. Simple to implement; requires telemetry-enabled pricing. IRS volunteer-recognition de minimis safe harbor applies if cumulative value stays modest (typically under $25/event guideline, coordinate with tax counsel)." },
        { number: 2, title: "Volunteer-ID discount", description: "Volunteers swipe an issued credential at a contactless reader; operator applies a flat % off (commonly 50-100%). Requires a credentialed reader (Nayax + Salto, or a similar payment + access integration) and a volunteer roster maintained by Volunteer Services." },
        { number: 3, title: "Pre-loaded volunteer wallet", description: "Each volunteer receives a monthly stipend (e.g., $20) loaded onto a card or app account funded from auxiliary dues or the vending revenue allocation. Track spend per volunteer for audit." },
        { number: 4, title: "Reimbursement model", description: "Volunteer pays at machine; submits a monthly form for reimbursement up to a cap. Highest administrative overhead; lowest equipment requirement. Generally not recommended above 25 active volunteers." },
      ],
    },
    {
      heading: "3. Planogram by volunteer cohort",
      paragraph:
        "Volunteer cohort composition drives planogram. Auxiliary leadership and Volunteer Services run a brief survey annually to confirm the cohort mix; the operator updates the planogram quarterly.",
      headers: ["Cohort", "Typical share", "Planogram weighting"],
      rows: [
        ["Adult auxiliary (60+, retiree)", "40-55%", "Low-sodium snacks, fresh fruit, water, decaf coffee, fiber bars"],
        ["Junior volunteer (high school / pre-health)", "15-25%", "Sports drinks, protein bars, fresh sandwiches, caffeinated beverages"],
        ["Gift-shop + clerical (mixed age)", "15-20%", "Balanced — coffee, tea, salty + sweet, water, single-serve nuts"],
        ["Chaplaincy + clinical support", "5-15%", "Quiet-meal items (yogurt, fruit, oatmeal), hot beverages, water"],
      ],
    },
    {
      heading: "4. Quarterly review template",
      paragraph:
        "Volunteer Services director runs this 30-minute review with the auxiliary president, the operator account manager, and one representative volunteer per cohort. Output is a one-page memo retained for 3 years.",
      items: [
        { check: "Volunteer count + active-shift count this quarter (from Volunteer Services roster)" },
        { check: "Operator telemetry summary: uptime %, stockout incidents, refund volume, subsidy spend" },
        { check: "Top 10 + bottom 10 SKUs by velocity; planogram recommendations from operator" },
        { check: "Subsidy spend reconciliation against auxiliary budget or vending revenue allocation line" },
        { check: "Volunteer satisfaction feedback (3-question survey to 10 random volunteers)" },
        { check: "Equipment service-ticket log; SLA adherence vs. contract" },
        { check: "Action items: owner + due date + next-review check-in" },
      ],
    },
    {
      heading: "5. Operator capability requirements",
      paragraph:
        "Include these in the vending contract or in an SOW addendum that covers the volunteer lounge specifically.",
      items: [
        { check: "Cellular telemetry with per-SKU velocity reporting (Cantaloupe, Nayax, 365 Retail Markets, or comparable). Required to support quarterly planogram updates." },
        { check: "Free-vend or discount-by-credential programming at the SKU level. Required to support subsidy mechanisms 1 and 2." },
        { check: "Cold-chain temperature monitoring with 4-hour SLA on excursions outside 35-40°F." },
        { check: "ADA Title III compliance attestation (Section 308 reach range, Section 305 clear floor space)." },
        { check: "Refund flow accessible via app + SMS — not solely via on-machine touchscreen, because some senior volunteers prefer phone-based refund." },
        { check: "Quarterly business review attendance by operator account manager." },
        { check: "Healthy-options compliance with hospital nutrition policy (typically AHA-aligned)." },
      ],
    },
    {
      heading: "6. Common pitfalls + how to avoid them",
      items: [
        { label: "Treating volunteers as employees in the planogram", value: "Volunteers skew toward fresh + low-sodium + caffeine-light versus the broader hospital staff cohort. Use the cohort table above; do not reuse the cafeteria planogram." },
        { label: "Subsidy that violates IRS de minimis guidance", value: "If cumulative per-volunteer subsidy approaches taxable-income thresholds, document and coordinate with tax counsel. The IRS volunteer-recognition guidance is fact-specific; do not assume safe harbor." },
        { label: "Equipment that fails ADA reach range", value: "Older deck-style machines often place selection buttons above 48\". Specify reach-range compliance in the operator RFP." },
        { label: "No telemetry — manual stocking", value: "Volunteer lounges have lumpy demand; without telemetry, stockouts are frequent. Telemetry is non-negotiable for any lounge above 20 active volunteers." },
      ],
    },
  ],
  footer:
    "This framework is a working operational reference. Subsidy mechanism selection requires coordination with the hospital Compliance Officer and tax counsel. Equipment + planogram + telemetry requirements should be incorporated into the operator contract by reference.",
});

console.log("wrote "+"vending-hospital-volunteer-lounges");
