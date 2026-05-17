import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-market-solutions-for-schools",
  assetType: "checklist",
  title: "K-12 Micro-Market Evaluation Framework",
  subtitle: "Smart Snacks compliance, capability matrix, RFP scope, and USDA audit support",
  intro:
    "Use this framework to evaluate operators for a K-12 micro-market on school grounds. All competitive food sales during the school day must comply with USDA 7 CFR 210.11 (Smart Snacks in School). State-level standards (e.g., California SB 1413, Texas Public School Nutrition Policy) may exceed the federal floor.",
  sections: [
    {
      heading: "USDA Smart Snacks compliance — non-negotiable",
      paragraph:
        "Smart Snacks rules apply to all food + beverage sales on school campuses from midnight before to 30 minutes after the school day. Non-compliance is a federal audit finding under the National School Lunch Program.",
      items: [
        { check: "Operator commits to 100% Smart Snacks-compliant SKUs on all SKUs available during the school day." },
        { check: "Operator uses USDA Smart Snacks Product Calculator (or Alliance for a Healthier Generation tool) for every SKU." },
        { check: "Snack standards — ≤ 200 calories, ≤ 230 mg sodium, ≤ 35% calories from total fat (with documented exemptions for nuts/seeds), ≤ 10% calories from saturated fat, 0 g trans fat, ≤ 35% sugar by weight." },
        { check: "Beverage standards — water (unflavored or unsweetened); milk (low-fat or fat-free, ≤ 12 oz); 100% juice (≤ 8 oz elementary, ≤ 12 oz middle/high); other beverages per grade-level caps." },
        { check: "SKU-level compliance log retained for 3 years (USDA recordkeeping)." },
      ],
    },
    {
      heading: "Capability matrix — must-haves",
      headers: ["Capability", "Required", "Notes"],
      rows: [
        ["Smart Snacks SKU sourcing + verification", "Yes", "Operator maintains a documented compliance log."],
        ["State-specific addendum (e.g., CA SB 1413, TX TDA Public School Nutrition Policy)", "Yes (where applicable)", "Some states impose stricter caps."],
        ["Cashless-only payment", "Preferred", "Reduces cash handling on campus; supports student-meal-account integration."],
        ["Student-meal-account integration (PowerSchool, MealViewer, MySchoolBucks, etc.)", "Preferred", "Allows USDA-eligible students to use Free/Reduced funds where state law permits."],
        ["FDA Food Code 2022 cold-chain attestation", "Yes", "Grab-and-go cold-chain required."],
        ["PCI-DSS v4.0 attestation", "Yes", "Required for any card or mobile-wallet acceptance."],
        ["Allergen labeling per FALCPA + state addendums (e.g., NJ AB-2032)", "Yes", "Particular focus on tree-nut + peanut where state law requires."],
        ["Background-checked on-site personnel per state school-employee statutes", "Yes", "Verify per state DOE requirements."],
      ],
    },
    {
      heading: "RFP scope — required attestations",
      items: [
        { check: "Smart Snacks compliance attestation, signed by operator officer." },
        { check: "SKU-level compliance log delivered monthly to district FNS director." },
        { check: "Quarterly audit support — operator participates in USDA / state audit walkthroughs and provides documentation." },
        { check: "Annual cold-chain attestation per FDA Food Code 2022." },
        { check: "Annual PCI-DSS v4.0 attestation." },
        { check: "Annual ADA recertification per 2010 ADA Standards Section 308." },
        { check: "COI with district as additional insured ($2M product liability with foodborne-illness coverage)." },
      ],
    },
    {
      heading: "Site selection criteria — middle + high schools",
      items: [
        { check: "Captive student population ≥ 400 for a single kiosk to be revenue-viable." },
        { check: "Placement outside the cafeteria service area (Smart Snacks scope) but within bell-schedule reach." },
        { check: "ADA Section 305 clear floor space and 308 reach range for all operable parts." },
        { check: "Adequate adult supervision during open hours (cafeteria staff, hall monitors)." },
        { check: "Separable from elementary student traffic if district policy restricts elementary access." },
      ],
    },
    {
      heading: "Operational SLA — school-calendar aware",
      items: [
        { number: 1, title: "Restock cadence aligned to bell schedule", description: "Pre-school-day stock typically 6-7 AM; restock during open-period or after dismissal. Restocks during instructional time disrupt learning and are typically prohibited." },
        { number: 2, title: "Summer-break planning", description: "Operator clears perishables 7-10 days before last school day; cold units depowered + cleaned + propped open per district facilities policy." },
        { number: 3, title: "Service SLA — Tier 1 within 24 hours", description: "Refrigeration failure, kiosk down, payment failure — operator on-site within 24 hours. Cold-chain excursion triggers immediate pull of TCS food per FDA Food Code." },
        { number: 4, title: "FNS reporting", description: "Monthly per-SKU sales + compliance log to district Food Service Director by the 5th of the following month." },
      ],
    },
    {
      heading: "Reference questions for districts already served",
      items: [
        { check: "How did the operator handle the last USDA / state audit?" },
        { check: "Has there ever been a Smart Snacks compliance finding? How was it remediated?" },
        { check: "How quickly does Tier-1 service get resolved during a school day?" },
        { check: "Does the operator pull perishables reliably before summer break?" },
        { check: "Would you renew with this operator on the same terms?" },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. District-level legal review is required for state-specific addenda; Smart Snacks compliance is the district's obligation under the National School Lunch Program.",
});

console.log("wrote "+"micro-market-solutions-for-schools");
