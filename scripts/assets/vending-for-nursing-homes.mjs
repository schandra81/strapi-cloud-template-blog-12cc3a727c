import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-for-nursing-homes",
  assetType: "playbook",
  title: "Nursing Home Vending Operational Playbook",
  subtitle: "Three populations + accessibility + dietary + HIPAA + state regulation alignment",
  intro:
    "This playbook codifies the operating practices a vending program needs to serve a skilled-nursing or long-term-care facility. Each section maps to a measurable SLA, a federal or state standard, or a documented design decision your operator should be equipped to attest to in writing.",
  sections: [
    {
      heading: "1. Three populations served",
      paragraph:
        "Nursing-home vending programs serve three distinct user populations with different reach, dietary, and labeling needs. Planogram and placement decisions must account for all three.",
      items: [
        { label: "Resident population", value: "Average age 78-82, mobility-impaired (60-70% use wheelchairs or walkers per CMS Minimum Data Set 3.0 data), dietary restrictions for ~40% (diabetes, dysphagia, renal, sodium-restricted). Reach range governs placement." },
        { label: "Family + visitor population", value: "Average 2-4 daily visits per resident across day/evening windows; peaks Sat-Sun 1-4 PM. Cashless preferred; high allergen-label scrutiny for pediatric visitors." },
        { label: "Staff population", value: "Three-shift workforce (CNAs, nurses, dietary, housekeeping, maintenance). Shift-1 6 AM-2 PM, shift-2 2-10 PM, shift-3 10 PM-6 AM. Each shift weights different SKUs (breakfast / lunch-replacement / overnight caffeine + comfort)." },
      ],
    },
    {
      heading: "2. Accessibility design — ADA + Section 308",
      paragraph:
        "All resident-accessible and visitor-accessible machines must meet ADA Title III reach range. Verification at install and annual recertification.",
      items: [
        { label: "Reach range — Section 308.2.1", value: "Highest operable part ≤ 48 inches above finished floor for unobstructed forward reach; lowest ≥ 15 inches." },
        { label: "Clear floor space — Section 305", value: "30 in × 48 in clear floor space for parallel or forward approach to operable parts." },
        { label: "Operating force — Section 309.4", value: "Operable parts function with one hand and require ≤ 5 lbf to operate. No tight grasping, pinching, or wrist-twisting." },
        { label: "Tactile + contrast — Section 703", value: "Pricing characters ≥ 5/8 inch with contrast ratio ≥ 70%. Tactile braille pricing labels recommended at long-term-care placements." },
      ],
    },
    {
      heading: "3. Dietary + allergen framework",
      paragraph:
        "Roughly 40% of skilled-nursing residents are on a therapeutic diet per CMS data. Vending planograms in resident-accessible areas must be coordinated with the facility Registered Dietitian Nutritionist (RDN).",
      headers: ["Therapeutic diet", "Vending SKU rule", "Verification"],
      rows: [
        ["Diabetic / carb-controlled", "≥ 30% of resident-area facings ≤ 15 g added sugar; carb-count labels visible", "RDN sign-off at planogram refresh (quarterly)"],
        ["Renal (low-K, low-P, low-Na)", "Dedicated low-sodium and low-potassium facings with FDA Nutrition Facts panel visible", "RDN sign-off; renal-restricted SKUs flagged on machine signage"],
        ["Dysphagia (mechanical soft, pureed)", "Resident-area machines exclude hard candies, nuts, chips per IDDSI framework", "Dietary Manager review at install"],
        ["FALCPA allergen disclosure", "Major 9 allergens labeled on each SKU; allergen summary on machine face", "Operator FALCPA attestation; semi-annual audit"],
      ],
    },
    {
      heading: "4. HIPAA + privacy framework",
      paragraph:
        "Cashless vending generates transaction data. Operators serving healthcare facilities must align with the host's HIPAA posture for any system that could be construed as containing or linking to PHI.",
      items: [
        { number: 1, title: "Data minimization", description: "Operator retains transaction metadata (machine ID, SKU, timestamp, payment method) — never resident identity, room number, or chart-linked identifier. Loyalty IDs (where used) issued by host, not operator." },
        { number: 2, title: "Business Associate Agreement (BAA)", description: "Where any operator-managed system touches potential PHI (e.g., resident-funded room-charging integration), a BAA is executed with the operator covering HIPAA Privacy + Security Rules." },
        { number: 3, title: "Network segmentation", description: "Vending telemetry on a segregated VLAN, isolated from clinical and EMR networks. Operator attests in writing." },
        { number: 4, title: "Incident notification", description: "Operator notifies facility privacy officer within 24 hours of any suspected data exposure involving facility-issued credentials or facility-network-attached devices." },
      ],
    },
    {
      heading: "5. State + federal regulation map",
      paragraph:
        "Skilled nursing operates under federal 42 CFR Part 483 (CMS Requirements of Participation) and state long-term-care regulations. Vending operations are touched by sanitation, dietary, and fire-life-safety provisions.",
      items: [
        { label: "42 CFR 483.60", value: "Food and nutrition services. Vending in resident areas is coordinated with the facility food service program; cannot undermine therapeutic diet orders." },
        { label: "FDA Food Code (state-adopted)", value: "Time/temperature control for safety (TCS) foods in refrigerated vending: 41°F or below; hot vending 135°F or above. Operator provides temperature logs on request." },
        { label: "NFPA 101 Life Safety Code", value: "Machine placement preserves 44 in egress corridor width and does not obstruct fire-rated assemblies. State Fire Marshal review where the building is a healthcare occupancy (I-2)." },
        { label: "State LTC vending licensure", value: "Several states (CA, NY, TX, FL among others) require vending operator registration and state sales-tax permit at the placement address. Operator should be equipped to provide license numbers on request." },
      ],
    },
    {
      heading: "6. Equipment + telemetry specs",
      items: [
        { label: "Refrigeration", value: "ENERGY STAR-qualified glass-front coolers, R-290 hydrocarbon refrigerant (GWP 3 vs R-404A's 3,922), LED interior lighting." },
        { label: "Payment", value: "Cashless reader (EMV chip, contactless tap, mobile wallet, QR). Coin/bill mech available as backup for visitor convenience." },
        { label: "Telemetry", value: "Cellular-modem heartbeat sub-15-minute; temperature log retained 12 months for FDA Food Code compliance review." },
        { label: "Accessibility hardware", value: "Selection buttons ≤ 5 lbf; dispense flap ≤ 5 lbf; tactile/braille pricing where state code requires." },
      ],
    },
    {
      heading: "7. Service SLA",
      items: [
        { number: 1, title: "Tier 1 — clinical-adjacent or cold-chain", description: "Offline > 30 minutes or temperature excursion outside 35-40°F refrigerated triggers 4-hour on-site response. Director of Nursing copied on all Tier 1 tickets." },
        { number: 2, title: "Tier 2 — stockout / planogram", description: "Single-SKU stockout: 24-48 hour acknowledgement, 5-7 day resolution. RDN sign-off required for therapeutic-diet SKU substitutions." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "5-day acknowledgement, 14-day resolution. Includes signage refresh, cabinet cleaning per facility infection-control protocol." },
      ],
    },
    {
      heading: "8. Quarterly business review checklist",
      items: [
        { check: "Uptime report (per-machine, per-month over the quarter)" },
        { check: "Temperature-log audit summary (refrigerated machines)" },
        { check: "Per-shift velocity report (resident vs visitor vs staff machines, where separable)" },
        { check: "RDN planogram review + therapeutic-diet sign-off renewal" },
        { check: "ADA recertification status (if quarter contains annual review)" },
        { check: "HIPAA / BAA attestation refresh (annual)" },
        { check: "Stockout incidents + resolution time" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or clinical advice. Coordinate with your facility Director of Nursing, Registered Dietitian Nutritionist, Privacy Officer, and State Fire Marshal liaison before contracting. LetUsVending can arrange operators equipped to attest to each item above.",
});

console.log("wrote "+"vending-for-nursing-homes");
