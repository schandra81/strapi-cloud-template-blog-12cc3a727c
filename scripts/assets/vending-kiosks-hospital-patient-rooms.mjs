import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-kiosks-hospital-patient-rooms",
  assetType: "pack",
  title: "Patient-Room Vending Implementation Pack",
  subtitle: "Clinical coordination memo, restricted planogram framework, hospital-grade equipment spec, and quarterly review template",
  intro:
    "This pack supports hospitals evaluating in-room or floor-adjacent vending kiosks for patients and visitors. It bundles the four working documents a facility services team typically needs: a clinical coordination memo, a restricted planogram framework aligned to dietary services, a hospital-grade equipment specification, and a quarterly clinical-review template. Use as a capability reference when scoping a pilot with an operator that can serve hospital environments.",
  sections: [
    {
      heading: "1. Regulatory + accreditation backdrop",
      paragraph:
        "Patient-facing vending in inpatient areas sits at the intersection of Joint Commission environment-of-care standards (EC.02.06.01, EC.02.04.01), CMS Conditions of Participation §482.28 (dietary services), FDA Food Code adopted by state, and facility infection-prevention policy. Operator must be willing to attest to the framework in writing.",
      items: [
        { label: "Joint Commission EC.02.06.01", value: "Environment supports care, treatment, and services — vending placement cannot impede egress, hand-hygiene stations, or staff sightlines." },
        { label: "CMS §482.28(b)(1)", value: "Therapeutic diets must be prescribed by the practitioner. Vending offerings available to patients must not contradict the prescribed diet without nursing oversight." },
        { label: "FDA Food Code §3-501.16", value: "TCS (time/temperature control for safety) foods held at 41°F or below. Refrigerated kiosk units must alarm on excursion." },
        { label: "FALCPA labeling", value: "Top-9 allergens declared on every SKU package; supplemental allergen card on machine face." },
      ],
    },
    {
      heading: "2. Clinical coordination memo — template structure",
      paragraph:
        "Use this template to circulate the vending program design across nursing leadership, clinical nutrition, infection prevention, pharmacy, and risk management for written sign-off prior to installation.",
      items: [
        { number: 1, title: "Scope statement", description: "Identify which patient units are in scope (e.g., med-surg only; exclude oncology, transplant, NICU, behavioral health) and which visitor areas are in scope. State explicitly whether patients can transact directly or only family/visitors." },
        { number: 2, title: "Clinical nutrition sign-off", description: "Registered dietitian reviews the planogram against hospital therapeutic diet manual (e.g., cardiac, renal, diabetic, dysphagia, low-microbial). Sign-off recorded with date and credential." },
        { number: 3, title: "Infection-prevention review", description: "Surface materials, touch-point cleaning frequency, and any food-handling protocol reviewed against facility cleaning standard (typically EPA-registered hospital-grade disinfectant, contact time documented)." },
        { number: 4, title: "Risk + compliance review", description: "HIPAA-adjacency check (no patient-identifying data captured), Stark/AKS check if any vendor co-marketing, ADA Title III audit per Section 308 reach range." },
      ],
    },
    {
      heading: "3. Restricted planogram framework",
      paragraph:
        "Patient-area planograms differ from staff-area planograms. The framework below establishes content rules; specific SKUs are agreed at install with clinical nutrition.",
      headers: ["Category", "Patient-facing rule", "Visitor-facing rule"],
      rows: [
        ["Sodium per serving", "≤ 480 mg (FDA 'healthy' claim threshold)", "No restriction beyond standard labeling"],
        ["Added sugar per serving", "≤ 10 g preferred; ≤ 12 g cap", "No restriction beyond standard labeling"],
        ["Saturated fat per serving", "≤ 10% DV (≤ 2 g)", "No restriction beyond standard labeling"],
        ["Allergen labeling", "Top-9 allergen card on machine + per-SKU package", "Top-9 allergen card on machine + per-SKU package"],
        ["TCS / refrigerated SKUs", "Permitted with continuous temperature telemetry", "Permitted with continuous temperature telemetry"],
        ["Energy drinks / high-caffeine (>150 mg)", "Excluded", "Permitted with caffeine call-out"],
        ["Alcohol / supplements / OTC meds", "Excluded", "Excluded"],
      ],
    },
    {
      heading: "4. Hospital-grade equipment specification",
      items: [
        { label: "Cabinet finish", value: "Smooth, non-porous, antimicrobial powder-coat or stainless. Cleanable with EPA List-N hospital disinfectant without finish degradation." },
        { label: "Refrigeration", value: "NSF-7 listed for commercial food service. Continuous internal temperature logging with 15-minute resolution; alert on > 41°F for > 30 minutes." },
        { label: "Payment", value: "Cashless-only preferred for infection control. EMV chip, contactless tap (Apple Pay / Google Pay), and mobile-wallet QR. PCI-DSS v4.0 compliant card reader." },
        { label: "Accessibility", value: "ADA Section 308 reach range — operable parts 15–48 inches above finished floor. ≤ 5 lbf operating force. Card reader within reach range." },
        { label: "Telemetry", value: "Cellular modem (LTE) with sub-15-minute heartbeat. Reports: online/offline, last restock, per-SKU velocity, internal temp, payment-failure rate." },
        { label: "Power + fire", value: "Dedicated 20A circuit. UL-listed. Within fire-code corridor clearance (≥ 44 inch egress retained per NFPA 101)." },
        { label: "Noise", value: "≤ 55 dBA at 1 meter for placements within 25 ft of patient rooms — quiet-cycle refrigeration preferred." },
      ],
    },
    {
      heading: "5. Service model + SLA framework",
      items: [
        { number: 1, title: "Restock cadence", description: "Minimum 2x/week visits for active patient units; daily refrigerated check for short shelf-life SKUs. Telemetry-driven top-off between scheduled visits." },
        { number: 2, title: "Service tiers", description: "Tier 1 (revenue-critical, cold-chain, payment failure): <4 hour acknowledge, <24 hour resolve. Tier 2 (stockout/planogram): 24–48 hour acknowledge, 5–7 day resolve. Tier 3 (cosmetic): 5-day acknowledge, 14-day resolve." },
        { number: 3, title: "Uptime target", description: "98% machine-level uptime measured monthly. Below 95% in any month triggers root-cause and corrective-action plan from operator." },
        { number: 4, title: "Refund flow", description: "App, SMS, or phone refund — auto-credit within 24 hours for cashless. Refund rate >2% triggers planogram + machine quality review." },
      ],
    },
    {
      heading: "6. Quarterly clinical-review template",
      items: [
        { check: "Temperature excursion log reviewed — count, duration, resolution time" },
        { check: "Planogram compliance audit — sample 20% of SKUs against approved list" },
        { check: "Allergen labeling spot-check — every SKU has Top-9 declaration visible" },
        { check: "Cleaning log reviewed — EPA List-N disinfectant, contact time, frequency" },
        { check: "Uptime report (per-machine, per-month over the quarter)" },
        { check: "Refund volume + reason codes" },
        { check: "Service ticket SLA adherence (Tier 1/2/3 break-down)" },
        { check: "Clinical-nutrition re-sign-off on planogram with date and credential" },
      ],
    },
    {
      heading: "7. Indicative budget — capital + operating",
      headers: ["Line item", "Range (one machine)", "Notes"],
      rows: [
        ["Hospital-grade refrigerated machine", "$8,500 – $14,000", "NSF-7, continuous telemetry, ADA-compliant interface"],
        ["Cellular telemetry / first-year service", "$240 – $480", "Sub-15-minute heartbeat, cold-chain alerts"],
        ["Cashless reader (EMV + contactless)", "$350 – $650", "PCI-DSS v4.0 compliant"],
        ["Install + electrical (per site)", "$400 – $1,500", "Dedicated 20A circuit if needed"],
        ["Monthly service (per machine)", "$120 – $260", "Restock visits, route fuel, telemetry seat"],
        ["Clinical-review consult (quarterly)", "$300 – $700", "RD time + IP review documentation"],
      ],
    },
    {
      heading: "8. Capability statement (capacity framing)",
      paragraph:
        "LetUsVending is equipped to arrange hospital-grade vending placements through operators with NSF-7 refrigeration, continuous telemetry, PCI-DSS v4.0 cashless, ADA-compliant interfaces, and willingness to attest in writing to the clinical-coordination framework above. We do not claim prior installations at any specific named hospital; capability is described in operator-attested terms, with documentation provided on request during scoping.",
    },
  ],
  footer:
    "This pack is informational and not clinical, legal, or accreditation advice. Final planogram, equipment, and SLA decisions are made by the host hospital in coordination with clinical nutrition, infection prevention, and risk management.",
});

console.log("wrote "+"vending-kiosks-hospital-patient-rooms");
