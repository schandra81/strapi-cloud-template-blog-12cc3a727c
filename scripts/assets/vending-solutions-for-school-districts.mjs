import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-solutions-for-school-districts",
  assetType: "template",
  title: "Multi-School District Vending RFP Framework",
  subtitle: "Operator capability profile, evaluation criteria, and contract template aligned to Smart Snacks in School + USDA + state procurement rules",
  intro:
    "K-12 district vending RFPs are governed by USDA Smart Snacks in School standards (7 CFR Part 210 + 220), state procurement rules (typically aligned to Uniform Guidance 2 CFR 200), local wellness policy requirements under the Healthy Hunger-Free Kids Act of 2010, and the district's school board procurement policy. This framework gives the district business manager + Director of Food Services a defensible operator capability profile, an evaluation rubric the procurement committee can score, and a contract template the school board attorney can adopt.",
  sections: [
    {
      heading: "1. Operator capability profile — minimum gating requirements",
      paragraph:
        "All gating requirements are pass/fail. An operator missing any one of these is disqualified before the scoring evaluation begins.",
      items: [
        { check: "Smart Snacks in School certification — operator attests every SKU sold during the school day meets USDA Smart Snacks calorie + sodium + sugar + fat standards (7 CFR 210.11)" },
        { check: "Compliance with the district's Local Wellness Policy (required under HHFKA 2010)" },
        { check: "Cellular telemetry — Cantaloupe, Nayax, 365 Retail Markets, AWM, or comparable; heartbeat ≤ 15 minutes" },
        { check: "Cashless payment with student-account integration where the district uses MealMagic, Nutrikids, MySchoolBucks, LINQ, or comparable" },
        { check: "Allergen labeling per FALCPA on every SKU; allergen summary signage on the machine face" },
        { check: "Background checks on all employees with school-access privileges (per state code; e.g., Texas Education Code §22.0834, California Education Code §45125)" },
        { check: "ADA Title II + Section 308 reach range compliance" },
        { check: "Insurance — CGL $2M minimum aggregate, workers' comp, district + school board as additional insured" },
        { check: "Three K-12 district references with named contacts" },
        { check: "OFAC + W-9 + state debarment screening clean" },
      ],
    },
    {
      heading: "2. Evaluation rubric — scoring",
      paragraph:
        "After gating, score each qualifying response on the rubric below. Weights are illustrative; adjust per district procurement policy. School board approves the rubric before RFP issuance.",
      headers: ["Dimension", "Weight", "Scoring detail"],
      rows: [
        ["Smart Snacks + wellness alignment", "25%", "SKU list reviewed against USDA Smart Snacks calculator; planogram weighting verified"],
        ["Telemetry + reporting capability", "20%", "Heartbeat + export + audit-right + uptime SLA"],
        ["Service-level agreement", "15%", "Tier-1 < 24 hr resolve; uptime ≥ 97%; refund mechanism"],
        ["Revenue share + commission economics", "15%", "Commission rate + calculation method + payment cadence"],
        ["Compliance + safety (background checks, ADA, insurance)", "15%", "Documentation completeness + reference verification"],
        ["Sustainability + community impact", "10%", "ENERGY STAR fleet share, recyclable packaging, local-supplier inclusion"],
      ],
    },
    {
      heading: "3. Smart Snacks in School — SKU compliance detail",
      paragraph:
        "USDA Smart Snacks standards apply to competitive food sold during the school day (midnight before through 30 min after the last bell). High school after-school hours have different rules. The operator must demonstrate per-SKU compliance, not generic claims.",
      items: [
        { label: "Calorie limit", value: "Snacks ≤ 200 calories per package; entrée items ≤ 350 calories per portion." },
        { label: "Sodium limit", value: "Snacks ≤ 200 mg sodium per package; entrée items ≤ 480 mg per portion." },
        { label: "Total fat", value: "≤ 35% of total calories from fat (exceptions for nuts/seeds, reduced-fat cheese, nut butters)." },
        { label: "Saturated fat", value: "< 10% of total calories from saturated fat (same exceptions)." },
        { label: "Trans fat", value: "Zero grams trans fat per portion." },
        { label: "Total sugar", value: "≤ 35% of total weight from sugar (exceptions for dried fruit + dried-fruit-and-nut combinations)." },
        { label: "Beverage rules", value: "K-5: plain water + low-fat milk + 100% juice ≤ 8 oz. Middle: same + ≤ 12 oz. High: plus calorie-free flavored water ≤ 20 oz + low-calorie ≤ 12 oz. No carbonated beverages with caffeine in K-5; high school after-school different rule." },
      ],
    },
    {
      heading: "4. Contract template — twelve clauses required",
      paragraph:
        "District counsel should adapt this template to state code and board policy. Twelve clauses below are the minimum required set.",
      items: [
        { number: 1, title: "Parties + term", description: "Legal names, district tax ID, term (commonly 3-5 years), renewal mechanism (board approval required for renewal)." },
        { number: 2, title: "Scope of service", description: "List every school + every machine; vending vs. fundraising sales; school-day vs. after-school product mix." },
        { number: 3, title: "Smart Snacks attestation", description: "Operator attests every SKU sold during the school day complies with Smart Snacks; planogram changes require district nutrition lead approval." },
        { number: 4, title: "SLA + uptime", description: "97% per-machine uptime; tier-1 < 24 hr; refund mechanism; cold-chain SLA where applicable." },
        { number: 5, title: "Commission + payment", description: "Commission rate, calculation method, monthly payment, settlement by 15th of following month, audit right." },
        { number: 6, title: "Telemetry + reporting", description: "Monthly per-machine + per-SKU report; access to live telemetry dashboard for district nutrition lead." },
        { number: 7, title: "Compliance + background checks", description: "Background-check attestation per state code; criminal-history monitoring; immediate notification on disqualifying event." },
        { number: 8, title: "ADA + accessibility", description: "Section 308 reach range; 305 clear floor space; 309.4 operating force; allergen labeling per FALCPA." },
        { number: 9, title: "Insurance + indemnification", description: "CGL $2M minimum; workers' comp; additional-insured endorsement; waiver of subrogation." },
        { number: 10, title: "Termination", description: "Termination for cause (30-day cure for material breach); termination for convenience (90-day notice mutual); equipment removal at operator cost." },
        { number: 11, title: "Data + student privacy", description: "FERPA compliance on any student-account integration; no PII sold or shared; data-breach notification per state code." },
        { number: 12, title: "Revenue use + transparency", description: "If revenue is allocated to specific student programs (athletics, library, classroom enhancement), document allocation; annual public report aligned to board policy." },
      ],
    },
    {
      heading: "5. Student-account integration — pre-contract verification",
      items: [
        { check: "Operator payment vendor supports the district's POS provider (MealMagic, Nutrikids, MySchoolBucks, LINQ, etc.)" },
        { check: "PCI-DSS attestation through the payment vendor" },
        { check: "FERPA compliance — no student data shared with operator beyond transaction ID" },
        { check: "Free + reduced-price meal eligibility data NEVER shared with the vending operator (federal requirement)" },
        { check: "Refund mechanism credits the student account, not the vending operator" },
      ],
    },
    {
      heading: "6. Common district RFP gaps to close",
      items: [
        { label: "Generic Smart Snacks claim without SKU detail", value: "Many operators say 'we comply with Smart Snacks' without per-SKU evidence. Require an SKU list run through the USDA Smart Snacks calculator (the Alliance for a Healthier Generation Product Calculator is the standard tool)." },
        { label: "Background-check policy without state alignment", value: "Each state has specific background-check code (Texas Education Code §22.0834; California Education Code §45125; New York Education Law §1125). Reference the applicable code by section." },
        { label: "No live telemetry access for district nutrition lead", value: "Without live telemetry, the district cannot verify SKU + sales for the wellness-policy reporting required under HHFKA 2010 § 9A." },
        { label: "Revenue allocation undocumented", value: "Where vending revenue funds athletics or classroom programs, the allocation policy belongs in the contract or in a board-adopted policy referenced in the contract." },
        { label: "No coordination with cafeteria USDA reimbursement", value: "USDA-reimbursable meal program (NSLP) has product-overlap rules with competitive foods. Coordinate with the Director of Food Services before signing." },
      ],
    },
  ],
  footer:
    "This framework is a working procurement reference, not legal advice. Final RFP + contract should be reviewed by district counsel and aligned to state procurement code, USDA Smart Snacks standards, and the district's local wellness policy. Smart Snacks + background-check + FERPA clauses are most commonly gapped in vending RFPs; close those before issuance.",
});

console.log("wrote "+"vending-solutions-for-school-districts");
