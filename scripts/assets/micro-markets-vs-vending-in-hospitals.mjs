import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-markets-vs-vending-in-hospitals",
  assetType: "playbook",
  title: "Hospital Micro-Market and Vending Coordination Playbook",
  subtitle: "Placement criteria, dietitian planogram, Joint Commission food safety, and telemetry SLA",
  intro:
    "Most hospitals run both vending and a self-checkout micro-market. The two are not redundant; they cover different employee and visitor populations, time windows, and product breadths. This playbook codifies where each fits, how the planogram is coordinated with hospital food-services and clinical dietitians, the Joint Commission and FDA Food Code documentation that supports an inspection-ready program, and the SLA framework that holds both formats accountable.",
  sections: [
    {
      heading: "1. Format selection — where each fits",
      paragraph:
        "Vending and micro-markets serve overlapping but distinct populations. The placement decision is driven by traffic, dwell time, refrigerated-product appetite, and oversight feasibility.",
      headers: ["Placement context", "Vending", "Micro-market", "Notes"],
      rows: [
        ["Nursing-unit adjacent", "Strong fit", "Strong fit where space and shrink risk acceptable", "Quick-grab vending often paired with cafeteria-supplemental"],
        ["Emergency-department adjacent", "Strong fit", "Marginal — high theft risk, low dwell", "Vending preferred"],
        ["Cafeteria-supplemental (off-hours)", "Strong fit", "Strong fit", "Both formats often present; coordinate planogram"],
        ["Family-waiting / lobby", "Strong fit", "Strong fit", "Micro-market preferred where dwell time is high"],
        ["Outpatient clinic break room", "Strong fit", "Marginal at small volume", "Vending preferred below 100 staff"],
        ["Surgical / OR break room", "Strong fit", "Strong fit", "Micro-market preferred for fresh-food access between cases"],
      ],
    },
    {
      heading: "2. Coordinated planogram with hospital dietitian",
      paragraph:
        "Hospital food and nutrition policy (Joint Commission FS.02.01.01) typically specifies healthy-options share for staff and visitor amenities. Clinical dietitian review aligns vending and micro-market planograms with hospital wellness program.",
      items: [
        { label: "Healthy-options share", value: "Most hospitals target 25-40% of facings meeting hospital wellness criteria (low-sodium ≤ 480 mg per serving, low-sugar ≤ 12 g added sugars, whole-grain primary ingredient, or NuVal score ≥ 70 where applicable)." },
        { label: "Allergen coverage", value: "Allergen-free, gluten-free, dairy-free, and plant-protein options on every machine and at every market kiosk. FALCPA labeling on each SKU; allergen-summary signage on machine face and market entry." },
        { label: "Dietitian quarterly review", value: "Clinical dietitian reviews planogram every 90 days. Recommends additions, replacements, and removals. Operator implements at next planogram refresh." },
        { label: "Fresh-food coordination", value: "Micro-market fresh-food (salads, sandwiches, wraps, cut fruit) supplied by hospital cafeteria commissary or approved vendor with full FDA Food Code 3-401 cooking and 3-501 cold-holding compliance. Daily date-rotation; expired product removed." },
        { label: "Patient-family hand-off", value: "Visitors caring for patients often eat at the vending or market between visiting hours. Comfort-food and dietary-restriction options expected; allergen-summary signage in lobby market." },
      ],
    },
    {
      heading: "3. Joint Commission food-safety framework",
      paragraph:
        "Joint Commission survey readiness requires documented food-safety compliance across vending and micro-market formats. Operator attestations and hospital food-services records are reviewed together.",
      items: [
        { number: 1, title: "Standard FS.02.01.01 — food and nutrition services", description: "Hospital food and nutrition policy documents the vending and micro-market programs, including provider, SLA, food-safety attestation, and dietitian-review cadence. Available for surveyor review." },
        { number: 2, title: "FDA Food Code 3-501.16 cold-holding", description: "Refrigerated potentially-hazardous foods at ≤ 41°F. Daily temperature log per FDA Food Code 4-203.12 with digital probe. Disposal log for any excursion > 4 hours above 41°F." },
        { number: 3, title: "FDA Food Code 3-501.11 frozen-holding", description: "Frozen items at ≤ 0°F where applicable. Telemetry alarm and log." },
        { number: 4, title: "Sanitizer and cleaning compliance", description: "FDA Food Code 4-501.114 sanitizer concentration verified with test strip at each route visit; EPA-registered sanitizer per hospital environmental-services standard. Cleaning log retained for each machine and each market kiosk." },
        { number: 5, title: "Recall and product-withdrawal procedure", description: "Operator removes affected lots within 24 hours of FDA, USDA, or supplier recall notice. Recall log maintained with timestamp, machine attribution, and disposition." },
        { number: 6, title: "FALCPA allergen labeling", description: "Every SKU labeled per FALCPA; allergen-summary signage on every machine and market entry. Severe-allergy guidance includes operator contact and dietitian referral." },
      ],
    },
    {
      heading: "4. Telemetry SLA — both formats",
      headers: ["Issue", "Vending SLA", "Micro-market SLA", "Notes"],
      rows: [
        ["Equipment offline / kiosk down", "< 4 hours operating, < 8 hours overnight", "< 4 hours operating, < 8 hours overnight", "Telemetry-driven dispatch"],
        ["Payment system down", "< 4 hours", "< 4 hours", "PCI DSS 4.0 stack required both formats"],
        ["Temperature excursion (refrigerated)", "< 4 hours (FDA Food Code disposal trigger)", "< 4 hours", "Mandatory disposal log"],
        ["Stockout (top-20 SKU)", "< 24 hours", "< 24 hours", "Telemetry-driven restock"],
        ["Fresh-food date-rotation (micro-market only)", "N/A", "Daily; expired removed within 24 hours of use-by", "FDA Food Code 3-401 compliance"],
        ["Cosmetic / signage / cleaning", "< 7 days", "< 3 days (market visibility higher)", "Higher cosmetic standard in markets"],
        ["Theft and shrink monitoring (market)", "N/A", "Weekly variance review; > 4% triggers control review", "Theft mitigation via cameras + kiosk authentication"],
      ],
    },
    {
      heading: "5. Theft mitigation and shrink controls (micro-market)",
      paragraph:
        "Hospital micro-markets typically run 2-5% shrink rate; higher than retail but lower than uncontrolled access points. Telemetry, video, and self-checkout authentication keep shrink in tolerable band.",
      items: [
        { label: "Self-checkout authentication", value: "Hospital badge tap or credit-card tap at kiosk; no purchase without authentication. 365 Retail Markets, AVI Solutions, Three Square Market, or comparable kiosk vendor. Audit log retained." },
        { label: "Camera coverage", value: "Kiosk-mounted camera plus area camera with sufficient resolution to identify users at transaction time. Recording per hospital security policy (typically 30-90 days); HIPAA-aware redaction if patient incidentally captured." },
        { label: "Weekly variance reconciliation", value: "Operator reconciles inventory delivered against transaction log weekly. Variance > 4% triggers root-cause analysis: kiosk error, restock miscount, theft, or product damage." },
        { label: "Honor-store backup option", value: "Some hospitals use honor-store credit-on-trust for small markets where staffed authentication is impractical. Shrink typically higher (6-12%) but appropriate for low-volume, trusted environments." },
        { label: "Police-reportable theft", value: "Significant theft (> $200 single event or repeated pattern) reported per hospital security policy. Operator review of camera footage with hospital security." },
      ],
    },
    {
      heading: "6. Format-coordination playbook",
      items: [
        { check: "Single operator contract covers both vending and micro-market where the same provider supports both formats; consolidated SLA, billing, and commission reporting." },
        { check: "Planogram coordination: micro-market emphasizes fresh, perishable, and meal-format SKUs; vending emphasizes single-serve, shelf-stable, and quick-grab. Avoid duplicating high-velocity SKUs across formats in the same location." },
        { check: "Pricing coordination: micro-market fresh-meal pricing 70-85% of cafeteria pricing; vending pricing 80-95% of convenience-store pricing. Pricing tiers communicated to staff via posted price list at each format." },
        { check: "Hours coordination: vending available 24/7; micro-market kiosk accepts payment 24/7 with fresh-food product available based on commissary delivery schedule." },
        { check: "Wellness-program coordination: healthy-options share targets set jointly by clinical dietitian; reviewed quarterly across both formats." },
        { check: "Inspection coordination: Joint Commission and local health department inspections include both formats; food-services director maintains unified documentation." },
      ],
    },
    {
      heading: "7. Commission structure across formats",
      headers: ["Format", "Typical hospital share", "Operator share", "Notes"],
      rows: [
        ["Vending percent-of-gross", "10-22%", "78-90%", "Standard structure; tier-able by volume"],
        ["Micro-market percent-of-gross", "8-15%", "85-92%", "Lower share than vending because operator has higher cost basis (fresh-food, shrink, kiosk)"],
        ["Combined contract", "Blended 10-18%", "82-90%", "Single operator covering both formats often blends to a single rate"],
        ["Honor-store small market", "Variable", "Variable", "Often hospital-operated rather than third-party"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate format selection, planogram coordination, food-safety documentation, and SLA to your hospital's Joint Commission cycle, food-services policy, and dietitian wellness program.",
});

console.log("wrote "+"micro-markets-vs-vending-in-hospitals");
