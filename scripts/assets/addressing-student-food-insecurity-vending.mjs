import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "addressing-student-food-insecurity-vending",
  assetType: "guide",
  title: "Campus Food-Security Vending Implementation Guide",
  subtitle: "Eligibility models, planogram, FERPA + privacy checklist, and operator scoping",
  intro:
    "Use this guide to scope and procure a vending program designed to address student food insecurity. Research (GAO-21-105076; Hope Center #RealCollege 2021) shows 29-38% of US college students report food insecurity in a given term. Vending is one component of a broader food-security strategy — it provides 24/7 access where pantries close, removes social barriers, and integrates with case-management workflows.",
  sections: [
    {
      heading: "1. Eligibility models",
      paragraph:
        "Three eligibility models are used at campuses with student-food-security vending. Choice depends on institutional privacy posture, advancement / development support, and pantry capacity.",
      items: [
        { label: "Open access (no eligibility check)", value: "Free or nominal-cost vending available to any student. Simplest UX; highest cost; subsidized by institution, foundation, or sponsor. Used by some community colleges and Title IV-heavy campuses." },
        { label: "Self-attested eligibility", value: "Student attests to need via campus app or single-question intake; receives access credential. Lower cost than open access; respects student dignity; data must be FERPA-protected." },
        { label: "Case-managed eligibility", value: "Dean of students or case-management office issues access credential. Integrates with pantry referral + financial-aid workflows. Highest staff cost; richest data for institution to apply for emergency-grant programs." },
      ],
    },
    {
      heading: "2. Planogram for food-security vending",
      paragraph:
        "Planogram weights toward meal-replacement and protein density — not snack. Reference USDA MyPlate guidance and campus nutrition-services advisory.",
      headers: ["Category", "% of selections", "Sample SKUs"],
      rows: [
        ["Shelf-stable meal replacement", "30%", "Microwavable rice + bean cup, pasta cup, soup cup, oats"],
        ["Protein + dairy alt", "20%", "Shelf-stable milk, soy / oat / pea milk, jerky, protein bar, peanut-butter pack"],
        ["Fruit + vegetable", "15%", "Shelf-stable fruit cup, dried fruit, freeze-dried veg, applesauce"],
        ["Grain + carb base", "15%", "Whole-grain crackers, granola, oatmeal cup, rice cake"],
        ["Hygiene + personal care", "10%", "Toothbrush + paste, menstrual products, deodorant, soap, laundry pod"],
        ["Beverage", "10%", "Water, electrolyte, shelf-stable juice"],
      ],
    },
    {
      heading: "3. FERPA + privacy checklist",
      paragraph:
        "Eligibility models that record student-level usage create FERPA-protected records (20 USC §1232g + 34 CFR Part 99). Privacy posture is integral, not optional.",
      items: [
        { check: "FERPA-protected data lives only in institutional systems (Banner, Workday, PeopleSoft) — not on operator infrastructure. Operator sees a pseudonymous access token only." },
        { check: "Operator's privacy + security posture documented: PCI DSS Level 1 for any payment integration; SOC 2 Type II preferred for telemetry / token issuance." },
        { check: "Data-Sharing Agreement (DSA) executed; operator signs as a ‘school official’ per 34 CFR 99.31(a)(1) with legitimate educational interest, only where eligibility model warrants." },
        { check: "Data minimization: operator receives token + event timestamps only; no name, ID, demographic data." },
        { check: "Aggregate reporting: usage statistics reported in 10+ student bands; no individual identifiable in any report." },
        { check: "Annual privacy review with institutional FERPA + IT security officers." },
      ],
    },
    {
      heading: "4. Operator scoping checklist",
      items: [
        { check: "Operator supports access-token credentialing (Blackboard / CBORD / TouchNet / institutional SSO integration)." },
        { check: "Operator supports zero-cost or subsidized-cost transaction flows (case-managed eligibility model)." },
        { check: "Operator provides telemetry showing access events without PII (validates FERPA-aligned data minimization)." },
        { check: "Operator's planogram capability covers the 6 categories in Section 2; vendor relationships documented." },
        { check: "Cold-chain not required for shelf-stable planogram; cuts equipment + operating cost ~20% vs. refrigerated. Operator confirms cost differential." },
        { check: "Operator commits to refresh cadence ≥ 2x per week given low-margin SKUs and high velocity at semester start + finals." },
      ],
    },
    {
      heading: "5. Funding + sustainability",
      paragraph:
        "Most food-security vending programs blend funding sources rather than rely on a single line item.",
      items: [
        { label: "Institutional general fund", value: "Most common — student affairs or dean-of-students budget covers SKU cost + operator service fee. Pilot scope typically $25K-$100K Year 1." },
        { label: "Emergency-aid grants", value: "Federal HEERF (where remaining), state higher-education emergency funds, and institutional emergency-aid lines fund SKU stock." },
        { label: "Foundation + advancement", value: "Donor-naming opportunity for vending unit; alumni-association sponsorship. Captures advancement interest in food-security cause." },
        { label: "Sponsor + brand partnership", value: "Local food brand, grocery chain, or healthcare system co-sponsors in exchange for tasteful brand recognition." },
        { label: "Student-fee referendum", value: "Some campuses fund via student activity fee; requires referendum or governance vote." },
      ],
    },
    {
      heading: "6. Measurement + reporting",
      items: [
        { label: "Volume metrics", value: "Access events per week; unique tokens per week; SKU velocity; restock cost per access event." },
        { label: "Equity metrics (institutional only — aggregate)", value: "Access pattern by college / time-of-day / day-of-week. Helps identify under-served populations or hours; never reported at individual level." },
        { label: "Outcomes (institutional only)", value: "Cross-tab with retention, persistence, financial-aid file (institutional analytics; operator never sees). Hope Center methodology can be applied for benchmarking." },
        { label: "QBR", value: "Quarterly review with dean of students, food-security committee, and operator. SKU rotation, hours review, eligibility-model review." },
      ],
    },
  ],
  footer:
    "Informational guide — confirm FERPA + privacy posture with institutional counsel before issue. Eligibility-model choice is governance-level; operator selection follows.",
});

console.log("wrote "+"addressing-student-food-insecurity-vending");
