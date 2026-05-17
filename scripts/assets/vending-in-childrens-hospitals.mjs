import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-childrens-hospitals",
  assetType: "playbook",
  title: "Children's Hospital Vending Operational Playbook",
  subtitle: "Pediatric nutrition + allergy-aware + sensory-friendly + Joint Commission alignment",
  intro:
    "Pediatric hospitals serve four user populations under a regulatory and clinical environment more conservative than adult acute-care. This playbook codifies the design, planogram, and SLA decisions an operator should be equipped to attest to in writing before placement.",
  sections: [
    {
      heading: "1. User populations served",
      items: [
        { label: "Patient families + caregivers", value: "Average length of stay 4.2 days (CHA Pediatric Health Information System benchmark); meal-replacement and overnight-vigil use cases dominate. Cashless preferred." },
        { label: "Visiting siblings + pediatric visitors", value: "Allergen-label scrutiny is high; FDA Top 9 (FALCPA + FASTER Act sesame) must be explicit. Choking-hazard SKUs excluded from machines accessible under 4-year-olds (per CPSC + AAP guidance)." },
        { label: "Clinical + non-clinical staff", value: "Three-shift workforce; nurses + residents weight overnight caffeine and meal-replacement; ancillary staff weights breakfast + lunch." },
        { label: "Adolescent patients on day-pass", value: "Where hospital policy permits, ambulatory adolescent patients use lobby and atrium machines. Planogram coordinated with clinical nutrition." },
      ],
    },
    {
      heading: "2. Pediatric nutrition framework",
      paragraph:
        "Children's hospitals typically adopt one of three nutrition frameworks for retail and vending. The operator's planogram must align with whichever the facility has chosen.",
      headers: ["Framework", "Reference", "Vending planogram rule"],
      rows: [
        ["Partnership for a Healthier America Hospital Healthy Food + Beverage", "PHA pledge text (2014+)", "≥ 50% of facings meet PHA standards (calories, added sugar, sodium thresholds by category)"],
        ["AHA Healthy Workplace Food + Beverage Toolkit", "American Heart Association (2017+)", "Beverages: ≥ 50% water, unsweetened tea/coffee, ≤ 40-cal options"],
        ["State-specific (CA, MA, MN among others)", "State healthcare facility nutrition regulation", "State-mandated thresholds for added sugar, saturated fat, sodium per category"],
      ],
    },
    {
      heading: "3. Allergen-aware planogram",
      paragraph:
        "FALCPA + FASTER Act require labeling of nine major allergens. Pediatric hospitals frequently elevate this baseline due to higher pediatric allergy prevalence (~8% of US children per CDC).",
      items: [
        { label: "FDA Top 9", value: "Milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, sesame. Each SKU label readable from clear floor space." },
        { label: "Allergen summary", value: "Machine-face summary panel: 'This machine contains products with [list of allergens]'. Updated at every planogram refresh." },
        { label: "Peanut-free zones", value: "Hematology/oncology floor machines and Child Life-managed areas typically peanut-free. Operator routes from a segregated planogram with documented allergen-control restocking." },
        { label: "Cross-contact attestation", value: "Operator provides written attestation that restocking handlers follow FDA cGMP allergen-control practices (separate gloves/handling for peanut-free routes)." },
      ],
    },
    {
      heading: "4. Sensory-friendly design",
      paragraph:
        "Children's hospitals increasingly designate sensory-friendly zones for patients with autism spectrum disorder, sensory processing disorder, or post-procedural sensory sensitivity. Vending placement in or near these zones requires specific specs.",
      items: [
        { number: 1, title: "Compressor + fan noise", description: "Refrigerated machines in or adjacent to sensory-friendly zones: ≤ 50 dBA measured at 3 feet. R-290 condensers with EC-fan motors typically achieve this; older R-404A units do not." },
        { number: 2, title: "Lighting + visual load", description: "Dimmable LED interior lighting; eliminate scrolling LED signage. Static, low-contrast machine-face graphics." },
        { number: 3, title: "Dispense sound", description: "Soft-drop dispense mechanism where available; avoid steel-coil clatter at SKUs likely to be selected by sensory-sensitive users." },
        { number: 4, title: "Placement away from PA + alarms", description: "Coordinate with facilities engineering: avoid placement directly beneath overhead paging horns or near fire-alarm chimes." },
      ],
    },
    {
      heading: "5. Joint Commission + CMS alignment",
      items: [
        { label: "Joint Commission EC + LS standards", value: "Environment of Care + Life Safety machine placement preserves NFPA 101 egress and does not obstruct medical gas shutoff, fire-rated assemblies, or AED locations. State Fire Marshal review for healthcare occupancy (I-2)." },
        { label: "Joint Commission IC.02.01.01", value: "Infection control. Operator follows facility cleaning protocols for high-touch surfaces (selection buttons, payment readers) at each restock visit." },
        { label: "CMS Conditions of Participation 42 CFR 482", value: "Hospitals participating in Medicare/Medicaid. Vending in clinical-adjacent areas does not interfere with patient care zones." },
        { label: "FDA Food Code (state-adopted)", value: "TCS foods at 41°F or below refrigerated, 135°F or above hot. Temperature logs retained 12 months minimum." },
      ],
    },
    {
      heading: "6. Equipment + telemetry specs",
      items: [
        { label: "Refrigeration", value: "ENERGY STAR-qualified, R-290 hydrocarbon refrigerant, ≤ 50 dBA noise where adjacent to sensory-friendly zones." },
        { label: "Payment", value: "Cashless (EMV chip, contactless, mobile wallet). Hospital-issued meal voucher integration where the facility runs a meal-card program for families." },
        { label: "Telemetry", value: "Cellular sub-15-minute heartbeat, temperature monitoring, allergen-control route audit log." },
        { label: "Accessibility", value: "ADA Section 308 reach range, 309.4 operating force ≤ 5 lbf, 703 contrast for pricing." },
      ],
    },
    {
      heading: "7. Service SLA",
      items: [
        { number: 1, title: "Tier 1 — clinical-adjacent or cold-chain", description: "4-hour on-site for offline > 30 minutes or refrigerated temperature excursion. Infection Preventionist copied where the machine is on a clinical floor." },
        { number: 2, title: "Tier 2 — stockout / allergen / planogram", description: "24-48 hour acknowledgement, 5-7 day resolution. Clinical nutrition sign-off required for allergen-zone SKU changes." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "5-day acknowledgement, 14-day resolution." },
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Uptime report by machine and floor" },
        { check: "Allergen-control route audit (peanut-free zones, attestation refresh)" },
        { check: "Clinical nutrition planogram sign-off (PHA / AHA / state framework adherence)" },
        { check: "Temperature-log audit summary" },
        { check: "Sensory-zone noise measurement (annual at minimum)" },
        { check: "Joint Commission EC/LS placement verification" },
        { check: "Stockout incidents + resolution time" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or clinical advice. Coordinate with Clinical Nutrition, Child Life, Infection Prevention, Patient Safety, and the State Fire Marshal liaison before contracting. LetUsVending is equipped to introduce operators with documented pediatric-facility experience.",
});

console.log("wrote "+"vending-in-childrens-hospitals");
