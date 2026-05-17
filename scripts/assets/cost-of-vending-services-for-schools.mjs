import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cost-of-vending-services-for-schools",
  assetType: "checklist",
  title: "K-12 / Higher-Ed Vending Economic Model + RFP Framework",
  subtitle: "Commission tiers, revenue projection, USDA Smart Snacks alignment, and transparency checklist",
  intro:
    "School vending operates inside USDA 7 CFR 210.11 (Smart Snacks in School) and applicable state nutrition overlays. This framework gives school business officials, SFA directors, and procurement officers a verifiable cost model: commission tier benchmarks, revenue projection inputs, transparency requirements, and an RFP scoring rubric. Use at RFP issuance and at each annual contract renewal.",
  sections: [
    {
      heading: "1. Commission tier benchmarks (K-12 + higher-ed)",
      headers: ["Annual gross sales (per machine)", "Typical commission %", "Common floor", "Notes"],
      rows: [
        ["< $4,000", "0-10%", "$0", "Below-threshold revenue; operator often subsidizes service."],
        ["$4,000-$8,000", "10-20%", "$0-$200/yr", "Standard K-12 cafeteria adjacent placement."],
        ["$8,000-$15,000", "20-30%", "$200-$500/yr", "Higher-ed common areas, athletic complexes."],
        ["$15,000-$30,000", "25-35%", "$500-$1,500/yr", "Large higher-ed residence halls, student unions."],
        ["> $30,000", "30-40%+", "Negotiated", "Pouring-rights tier; bundle with naming + signage rights."],
      ],
    },
    {
      heading: "2. Revenue projection inputs",
      paragraph:
        "Project gross sales from three inputs: average daily population at the placement, capture rate (% who transact in a typical week), and average ticket. Apply Smart Snacks SKU mix to each input.",
      items: [
        { label: "Average daily population (ADP)", value: "Student enrollment at the building × attendance rate (typical 92-96%) + staff headcount + visitor estimate." },
        { label: "Capture rate", value: "K-5: 5-10%. 6-8: 15-25%. 9-12: 20-35%. Higher-ed common area: 30-50%. Athletic / event: variable; model separately." },
        { label: "Average ticket", value: "$1.50-$2.25 (snack), $1.75-$2.75 (beverage), $4-$8 (fresh food / meal kit)." },
        { label: "Operating days", value: "K-12: 175-180 instructional days plus summer/program days. Higher-ed: 200-260 days depending on residence hall vs academic-only placement." },
        { label: "Sample projection", value: "ADP 600 × capture 20% × $2.00 × 180 days = $43,200/yr across all machines at the site." },
      ],
    },
    {
      heading: "3. USDA Smart Snacks compliance — 7 CFR 210.11",
      paragraph:
        "All SKUs sold to students during the school day (midnight to 30 minutes after the last bell) at K-12 schools participating in NSLP must meet Smart Snacks nutrition standards. SFA Administrative Review verifies vending compliance.",
      items: [
        { check: "Calories: snack/side ≤ 200 cal; entrée ≤ 350 cal." },
        { check: "Sodium: snack ≤ 200 mg; entrée ≤ 480 mg (effective SY 2022-23 onward)." },
        { check: "Total fat ≤ 35% calories; saturated fat < 10% calories; trans fat 0 g." },
        { check: "Total sugar ≤ 35% by weight." },
        { check: "Beverages elementary: water (no size limit), 8 oz milk (low-fat/fat-free), 8 oz 100% juice." },
        { check: "Beverages middle: same as elementary + 12 oz portions." },
        { check: "Beverages high school: water, 12 oz milk, 12 oz 100% juice, 20 oz calorie-free flavored water, 12 oz ≤ 60 cal/12 oz." },
      ],
    },
    {
      heading: "4. Cost transparency checklist",
      items: [
        { check: "Operator provides itemized SKU cost (wholesale) + retail price + commission calculation per machine per month." },
        { check: "Telemetry dashboard read-access for SFA director and business office (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, or equivalent)." },
        { check: "Quarterly reconciled commission payment with audit-grade detail (per-machine, per-SKU velocity, refunds, voids)." },
        { check: "Annual independent revenue audit available on request; cost borne by operator above defined threshold." },
        { check: "Pricing changes notified 30 days in advance; SFA approval required to maintain Smart Snacks margin parity." },
      ],
    },
    {
      heading: "5. RFP scoring rubric (100-point baseline)",
      headers: ["Criterion", "Points", "Verification"],
      rows: [
        ["Smart Snacks attestation + SKU list", "20", "Smart Snacks Product Calculator screenshots + signed attestation."],
        ["Commission structure + revenue model", "20", "Tiered % with floor; sample projection using ADP."],
        ["Telemetry + transparency", "15", "Read-access demo + SLA documentation."],
        ["Service SLA + refund procedure", "15", "<24 hr response for outage; refund within 5 business days."],
        ["ADA + accessibility", "10", "Written attestation + VPAT 2.5."],
        ["References from comparable districts", "10", "Three references with similar enrollment band."],
        ["Insurance + bonding + W-9 + background", "10", "$2M GL minimum + criminal background per state statute."],
      ],
    },
    {
      heading: "6. Annual review cadence",
      items: [
        { number: 1, title: "Pre-school-year (July-August)", description: "Refresh planogram, verify Smart Snacks SKU list, reconcile prior-year commission, set current-year revenue target." },
        { number: 2, title: "Mid-year (December-January)", description: "Telemetry review, capture-rate vs target, refund volume, planogram refresh for spring." },
        { number: 3, title: "End-of-year (May-June)", description: "Full annual reconciliation, audit-grade report, SFA Administrative Review prep, contract renewal decision." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or fiscal advice. Verify Smart Snacks status with the SFA director; confirm commission treatment per district fiscal code and state procurement rules. LetUsVending is equipped to coordinate Smart-Snacks-aligned operators for K-12 and higher-ed placements.",
});

console.log("wrote "+"cost-of-vending-services-for-schools");
