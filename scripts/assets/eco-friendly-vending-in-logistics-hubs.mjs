import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "eco-friendly-vending-in-logistics-hubs",
  assetType: "pack",
  title: "Eco-Friendly Logistics Hub Vending Pack",
  subtitle: "RFP language, equipment specification, supplier verification framework, and ESG metrics template",
  intro:
    "This pack consolidates the working documents a logistics operator's facility, ESG, and procurement teams need to scope a vending program aligned to corporate sustainability targets (SBTi, CDP, ENERGY STAR). It includes RFP language, an equipment specification, a supplier verification framework, and an ESG metrics reporting template. Built around operator-attestable capability.",
  sections: [
    {
      heading: "1. Equipment specification — sustainability layer",
      items: [
        { label: "ENERGY STAR refrigerated vending", value: "Per current ENERGY STAR Refrigerated Beverage Vending Machine spec — typical Class A baseline 1,500–2,500 kWh/year vs ~3,500–4,500 kWh/year for non-ENERGY STAR comparable. Operator confirms model + version on EPA list." },
        { label: "LED lighting", value: "Full LED interior + exterior; no fluorescent retrofits. ~70–80% reduction in lighting load vs T8 fluorescent." },
        { label: "Refrigerant", value: "Natural refrigerant (R-290 propane or R-744 CO₂) preferred; HFC R-134a only if LED + ENERGY STAR otherwise. GWP < 1500 target consistent with AIM Act (40 CFR Part 84) HFC phase-down." },
        { label: "Sleep / setback modes", value: "Cabinet enters low-power state during measured low-traffic windows. Telemetry verifies state engagement; sleep mode saves ~15–25% kWh." },
        { label: "Compressor + cabinet insulation", value: "Variable-speed or ECM motor; cabinet U-value per manufacturer spec; vacuum-insulated panels where rated." },
        { label: "Lifecycle", value: "Cabinet life 10–15 years; refurbishment program preferred at mid-life over replacement. End-of-life disposal via EPA RAD or certified refrigerant-recovery." },
      ],
    },
    {
      heading: "2. Planogram — sustainability slot rules",
      headers: ["Slot rule", "Threshold", "Rationale"],
      rows: [
        ["Plant-based / vegetarian SKUs", "≥ 25% of slots", "Aligned to SBTi FLAG guidance + Scope 3 Category 1 reduction"],
        ["Local / regional SKUs (≤ 250 mi)", "≥ 30% of slots", "Lower upstream transport emissions"],
        ["Certified suppliers (B Corp, Rainforest Alliance, Fair Trade, USDA Organic, RSPO)", "≥ 25% of slots", "Demonstrable supply-chain ESG posture"],
        ["Recyclable / compostable packaging", "≥ 60% of slots", "Aligned to How2Recycle labeling; reduces landfill"],
        ["Reusable / refillable containers", "≥ 10% of slots (bulk/refillery models)", "Where micro-market layout permits"],
        ["Single-use plastic bottles", "≤ 25% of beverage slots", "Aluminum + glass + carton + on-site filtered water preferred"],
      ],
    },
    {
      heading: "3. RFP language — drop-in clauses",
      paragraph:
        "Use these clauses verbatim or adapt into your operator RFP. Each clause is operator-attestable.",
      items: [
        { number: 1, title: "ENERGY STAR attestation", description: "All refrigerated cabinets installed at Site shall meet the current ENERGY STAR Refrigerated Beverage Vending Machines specification at install date. Operator shall provide model + version per EPA list at install and any material change." },
        { number: 2, title: "Refrigerant disclosure", description: "Operator shall disclose refrigerant type + GWP per cabinet at install. Operator shall maintain a transition plan to GWP < 1500 refrigerants consistent with AIM Act 40 CFR Part 84 timelines and provide annual progress." },
        { number: 3, title: "Packaging waste reduction", description: "Operator shall maintain ≥ 60% of planogram slots in recyclable/compostable packaging (How2Recycle or equivalent) and report quarterly on slot composition." },
        { number: 4, title: "Local sourcing", description: "Operator shall maintain ≥ 30% of slots from suppliers located within 250 miles of Site, measured by SKU count, reported quarterly." },
        { number: 5, title: "Telemetry-driven route", description: "Operator shall use telemetry-driven dispatch to reduce route miles; report quarterly on miles-per-restock against prior-year baseline." },
        { number: 6, title: "End-of-life", description: "Operator shall remove cabinets at end-of-life via EPA RAD-recognized refrigerant recovery and shall recycle steel cabinet ≥ 80% by weight. Documentation provided to Site within 60 days." },
        { number: 7, title: "ESG reporting", description: "Operator shall provide quarterly ESG dashboard: kWh consumed, refrigerant GWP, plant-based slot %, local-supplier slot %, recyclable-packaging slot %, route miles, food waste % by units." },
      ],
    },
    {
      heading: "4. Supplier verification framework",
      items: [
        { check: "Operator submits supplier list with certification copies (B Corp, USDA Organic, Fair Trade USA, Rainforest Alliance, MSC, RSPO, Fairtrade International)" },
        { check: "Certifications dated within last 12 months; renewals tracked" },
        { check: "Supplier code of conduct on file aligned to ETI Base Code or SA8000" },
        { check: "Conflict-mineral attestation if any electronic component SKUs (cosmetics, OTC excluded categories)" },
        { check: "FSMA Sec. 204 traceability data available for high-risk foods if applicable" },
        { check: "Carbon disclosure — Scope 1 + 2 reported by major suppliers (CDP or equivalent)" },
      ],
    },
    {
      heading: "5. ESG metrics reporting template",
      headers: ["Metric", "Unit", "Cadence", "Source"],
      rows: [
        ["Energy consumption per cabinet", "kWh/year", "Annual + quarterly trend", "ENERGY STAR datasheet + facility meter where sub-metered"],
        ["Refrigerant GWP weighted by cabinet", "GWP-weighted index", "Annual", "Operator cabinet registry"],
        ["Plant-based slot %", "Count + %", "Quarterly", "Operator planogram report"],
        ["Local supplier slot % (≤ 250 mi)", "Count + %", "Quarterly", "Operator supplier list + supplier address"],
        ["Recyclable / compostable slot %", "Count + %", "Quarterly", "How2Recycle labeling check"],
        ["Route miles per restock", "Miles", "Quarterly", "Operator telemetry dispatch log"],
        ["Food waste %", "Units expired / units stocked", "Quarterly", "Operator waste log"],
        ["Refurbished / second-life cabinet count", "Count", "Annual", "Operator asset registry"],
      ],
    },
    {
      heading: "6. Indicative cost-of-greening framework",
      headers: ["Lever", "Capital", "Annual opex impact"],
      rows: [
        ["ENERGY STAR cabinet vs baseline", "Operator-funded in full-service", "−$80 to −$160/year per cabinet (kWh saved)"],
        ["R-290 / R-744 cabinet vs R-134a", "Operator-funded; sometimes +$300–$900 per unit", "Comparable opex; lower regulatory risk under AIM Act"],
        ["Local / certified-supplier slots", "$0", "+5–12% wholesale cost; usually price-pass to retail or partial subsidy"],
        ["Recyclable packaging slot mix", "$0", "Often neutral to mildly favorable as SKU mix shifts"],
        ["Quarterly ESG dashboard / reporting", "Operator-funded if standard offering", "$0–$3,000/year facility-side admin"],
        ["End-of-life recovery program", "Operator-funded", "$0; documentation only"],
      ],
    },
    {
      heading: "7. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate eco-aligned logistics-hub vending through operators that can attest in writing to ENERGY STAR specs, low-GWP refrigerants, certified-supplier slot percentages, telemetry-driven routes, and quarterly ESG dashboards. Capability documentation provided on request during scoping. We describe operator-attestable capability and do not claim placements at any specific named logistics network.",
    },
  ],
  footer:
    "Reference document for facility, ESG, and procurement teams. Specific SBTi targets, CDP reporting, and corporate carbon accounting should be coordinated with the parent company's sustainability function.",
});

console.log("wrote "+"eco-friendly-vending-in-logistics-hubs");
