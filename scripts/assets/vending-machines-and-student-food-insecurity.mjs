import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machines-and-student-food-insecurity",
  assetType: "pack",
  title: "Campus Food-Security Vending Implementation Pack",
  subtitle: "Model selection guide, planogram, FERPA checklist, and operator coordination workflow for student food-security vending",
  intro:
    "Universities are deploying vending as a complement to food pantries — anonymous, 24/7 access for students experiencing food insecurity, funded via meal-plan swipes, emergency-aid funds, or institutional health-services budgets. This pack bundles the four working documents (model selection, planogram, FERPA checklist, operator workflow) a campus food-security task force needs.",
  sections: [
    {
      heading: "1. Funding-model selection guide",
      paragraph:
        "Four models are in common use at U.S. universities. Choose based on policy + funding source + privacy posture.",
      headers: ["Model", "How it works", "Privacy posture", "Funding source"],
      rows: [
        ["Anonymous free vending", "Cooler dispenses N free items per student per day; no ID required", "Highest (no identification)", "Institutional health, emergency aid, donor-restricted"],
        ["Voucher-based", "Eligible students receive QR/SMS voucher; cooler accepts voucher as tender", "Medium (student opts in to voucher program)", "Emergency aid, financial aid"],
        ["Meal-swipe convertible", "Eligible students convert unused meal swipes to cooler credit", "Medium (tied to meal plan)", "Auxiliary services + dining"],
        ["Hybrid pantry-cooler", "Cooler complements physical pantry; same eligibility process, 24/7 access", "Medium (pantry-eligible students)", "Mixed: donor, institutional, federal SNAP-where-applicable"],
      ],
    },
    {
      heading: "2. Eligibility + access workflow",
      items: [
        { number: 1, title: "Eligibility determination", description: "Existing campus food-security task force or dean-of-students office determines eligibility; standard intake process; no academic-record tie-in." },
        { number: 2, title: "Voucher / credit issuance", description: "Eligible student receives QR code or campus-card credit; voucher capped at $X/day or $XX/week; refreshed each term." },
        { number: 3, title: "Cooler access", description: "Cooler accepts voucher as tender; transaction is anonymous from operator + university perspective (only voucher ID logged, not student identity)." },
        { number: 4, title: "Privacy + dignity", description: "Cooler placement in low-stigma location (residence hall, library, student union — not inside food pantry only); SKU mix mirrors regular cooler to avoid 'free-food-only' stigma." },
        { number: 5, title: "Re-enrollment", description: "Eligibility refreshed each term; student case manager checks in on resource utilization; opt-in to additional supports (counseling, financial aid, basic-needs hub)." },
        { number: 6, title: "Audit + accountability", description: "Aggregated utilization reported quarterly to task force; no student-identifiable data in reports beyond opt-in case management." },
      ],
    },
    {
      heading: "3. Food-security planogram (60 SKUs)",
      paragraph:
        "Planogram weights nutrient-density + shelf-stable + minimal-prep + cultural relevance. Allergen labeling per FALCPA; HHS-aligned where applicable.",
      items: [
        { label: "Hydration — 18%", value: "Bottled water (multi-size), electrolyte (low-cal), unsweetened sparkling. $1.00-$3.00." },
        { label: "Grab-and-go meal — 22%", value: "Sandwich, sushi tray, salad bowl, hummus + veg cup, hard-boiled egg cup, charcuterie cup, lentil bowl. $4.50-$9.00." },
        { label: "Shelf-stable meal — 15%", value: "Mac-and-cheese cup, ramen (low-sodium options), instant noodles, microwaveable bowl, single-serve soup. $2.00-$5.00." },
        { label: "Fresh fruit + dairy — 13%", value: "Apple, banana, orange, Greek yogurt, cottage cheese, cheese stick, whole fruit. $1.00-$3.00." },
        { label: "Protein + bar — 12%", value: "RXBAR, Quest, KIND, peanut-butter cracker pack, jerky, single-serve protein packet. $2.00-$4.00." },
        { label: "Whole-grain snack — 10%", value: "Whole-grain crackers, popcorn, granola bar, rice cake, trail mix. $1.50-$3.50." },
        { label: "Culturally relevant — 10%", value: "Curated SKU mix matching campus demographics (halal, kosher, plant-based, regional flavors); refreshed quarterly with student-affairs input. $2.00-$5.00." },
      ],
    },
    {
      heading: "4. FERPA + GLBA + privacy checklist",
      paragraph:
        "Food-security vending touches sensitive student data. Privacy office must review before launch.",
      items: [
        { check: "Operator-signed FERPA DPA; covers any student-ID data that traverses operator systems via voucher SDK" },
        { check: "GLBA acknowledgment if voucher funding ties to financial-aid balance" },
        { check: "Data minimization: only voucher ID + transaction event traverses operator; no student name, ID, or eligibility status" },
        { check: "Retention: voucher-redemption data ≤ 90 days at operator; aggregated/anonymized longer per privacy office" },
        { check: "Re-identification ban: no joining cooler transaction data with financial-aid or academic records without IRB approval" },
        { check: "Disclosure log: any non-routine disclosure logged; FERPA-compliant audit trail" },
        { check: "Eligibility process: kept inside campus student-affairs (not visible to operator); operator sees only opaque voucher tender" },
        { check: "Reporting: aggregated utilization only; no student-identifiable reports leave campus privacy boundary" },
        { check: "Annual privacy-office review of voucher data flow" },
      ],
    },
    {
      heading: "5. Operator coordination workflow",
      items: [
        { label: "Operator role", value: "Provides cooler + planogram + voucher-redemption integration; emits anonymous transaction events; cannot tie transactions to student identity." },
        { label: "Voucher issuance system", value: "Owned by campus student-affairs / dean of students / financial-aid; operator integration is one-way (voucher → cooler), not bidirectional eligibility lookup." },
        { label: "Reconciliation", value: "Monthly: operator submits voucher-redemption file to campus food-security task force; campus reimburses operator per agreed rate (typically operator cost + small handling fee, e.g., 5%)." },
        { label: "Restock cadence", value: "Per cooler traffic; typically 2-3x/week + telemetry-triggered top-offs. Cold-chain rotation per SKU shelf life." },
        { label: "Stockout protocol", value: "Tier-1 SLA (≤ 24 hr resolve) for any stockout in food-security cooler; operator on-call route during high-demand weeks (move-in, finals, holidays)." },
        { label: "Dietitian audit", value: "Semi-annual planogram audit by campus dietitian; HHS-aligned share + cultural-relevance + allergen-labeling check; remediation within 30 days." },
        { label: "Joint review", value: "Monthly first 6 months, then quarterly: food-security task force + operator + dietitian + privacy office." },
      ],
    },
    {
      heading: "6. Communications + dignity framework",
      paragraph:
        "Food-security vending succeeds when it's low-stigma + dignified. Communications avoid 'free-food-for-needy-students' framing and instead position cooler as a campus basic-needs resource.",
      items: [
        { label: "Cooler placement", value: "Same locations as regular coolers (union, library, residence halls); cabinet wrap matches regular cooler aesthetic; no visible 'food-pantry' marking." },
        { label: "Eligibility comms", value: "Plain-language web page on basic-needs hub; reachable from dean of students + financial aid + student health; intake process designed for one-stop interaction." },
        { label: "On-cooler messaging", value: "Standard cooler-face signage; voucher acceptance noted alongside other tender options; no stigmatizing call-out." },
        { label: "RA + student-affairs staff training", value: "Confidentiality, dignity, referral process; how to mention the basic-needs hub without singling out a student." },
        { label: "Faculty + advisor talking points", value: "How to refer a student to basic-needs hub; what the hub offers (vending vouchers + pantry + counseling + financial aid)." },
        { label: "Annual reporting", value: "Aggregated utilization to task force + university board; case-study format with privacy-protected narrative." },
      ],
    },
    {
      heading: "7. Operator selection criteria — food-security context",
      items: [
        { check: "Higher-ed food-security reference accounts (or basic-needs vending placements)" },
        { check: "FERPA DPA + GLBA acknowledgment + SOC 2 Type II on file" },
        { check: "Voucher / tender integration capability (custom tender type beyond campus card)" },
        { check: "Smart-Snacks / HHS / culturally-relevant SKU sourcing capability" },
        { check: "Allergen labeling + cultural-attestation accuracy" },
        { check: "Refund automation: QR + SMS refund flow ≤ 24 hr credit-back" },
        { check: "Insurance + food product liability $1M + cyber $5M" },
        { check: "Commission structure: cost-plus or low-commission given subsidy economics" },
      ],
    },
    {
      heading: "8. Quarterly + annual review framework",
      items: [
        { check: "Quarterly: aggregated voucher-redemption utilization by cooler placement" },
        { check: "Quarterly: planogram refresh based on velocity + cultural-relevance input from student-affairs" },
        { check: "Quarterly: dietitian audit + HHS-alignment + allergen-labeling check" },
        { check: "Annually: privacy-office review of voucher data flow + DPA scope" },
        { check: "Annually: food-security task force report to board (aggregated only)" },
        { check: "Annually: operator contract review + cost-plus / commission re-anchor" },
        { check: "Annually: basic-needs hub program evaluation + integration with vending" },
      ],
    },
  ],
  footer:
    "This pack is informational. Food-security task force + dean of students + financial aid + privacy office + dietitian should jointly design and approve voucher + tender + planogram before launch. Eligibility determination should remain inside campus student-affairs scope; operators receive only opaque voucher tender data, never student identity.",
});

console.log("wrote " + "vending-machines-and-student-food-insecurity");
