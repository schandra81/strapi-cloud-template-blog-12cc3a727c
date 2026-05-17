import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-solutions-for-healthcare-staff-lounges",
  assetType: "pack",
  title: "Healthcare Staff Lounge Vending Program Pack",
  subtitle: "Badge access, shift-worker wellness, HACCP fresh food, dietary inclusivity, infection control, and HIPAA-adjacent framework",
  intro:
    "Healthcare staff lounges run 24/7 across rotating shifts in environments with strict infection-prevention and dietary-inclusivity expectations. This pack consolidates the six working documents a facility services team typically needs to scope a staff-lounge vending program: badge-access integration spec, shift-worker wellness planogram, HACCP fresh-food framework, dietary inclusivity matrix, infection-control protocol, and HIPAA-adjacency check.",
  sections: [
    {
      heading: "1. Badge access + payroll-deduct integration",
      paragraph:
        "Many health systems prefer HID iCLASS or HID Prox badge swipe as the primary identification at staff lounges, with optional payroll deduction. The framework below is what an operator must be able to attest to.",
      items: [
        { label: "Reader standards", value: "HID iCLASS SE / Seos, HID Prox 125 kHz, or LEGIC — operator-side reader compatible with facility credentials." },
        { label: "Identity flow", value: "Badge tap returns an opaque employee identifier; operator's micro-market or smart cooler associates with a stored payment profile (credit card on file, payroll deduct, or wellness subsidy account)." },
        { label: "Payroll deduct cadence", value: "Bi-weekly file export to payroll vendor (Workday, Kronos, UKG) in fixed CSV or SFTP-pickup format. Reconciliation report monthly." },
        { label: "Subsidy mechanics", value: "Employer-funded credit (e.g., $5/shift or $25/pay-period) loaded against badge ID; balance visible at kiosk; expires per facility policy." },
        { label: "Data minimization", value: "Only opaque employee ID + transaction line items stored on operator side. No name, no DOB, no clinical role, no patient identifiers." },
      ],
    },
    {
      heading: "2. Shift-worker wellness planogram",
      paragraph:
        "Day, evening, and night shifts have different purchase patterns. Planogram below is a starting framework — final SKUs co-designed with the health system's RD or wellness committee.",
      headers: ["Category", "Share of slots", "Examples", "Rationale"],
      rows: [
        ["Real-meal / refrigerated entrée", "20–25%", "Salads, grain bowls, sandwiches, yogurt parfaits", "Replaces missed meals during 12-hour shifts"],
        ["Protein snack", "15–20%", "Greek yogurt, hard-boiled eggs, jerky, protein bars (≤ 12 g sugar)", "Satiety + recovery on long shifts"],
        ["Fruit + vegetable", "10–15%", "Whole fruit, cut fruit cups, hummus + vegetable packs", "Aligned to AHA / dietary guidelines"],
        ["Hydration", "20–25%", "Water (still, sparkling), electrolyte, low-sugar sports drinks", "PPE + heat + long shifts drive hydration need"],
        ["Caffeine / hot beverages", "10–15%", "Coffee, cold brew, tea, single-serve espresso", "Critical for night shift"],
        ["Indulgent / comfort", "10–15%", "Snacks, chocolate, ice cream", "Realistic balance — research shows restrictive-only programs underperform"],
      ],
    },
    {
      heading: "3. HACCP fresh-food framework",
      paragraph:
        "Fresh / refrigerated SKUs in healthcare staff lounges fall under FDA Food Code §3-501 (TCS holding) and require an operator HACCP plan if commissary-prepared. The operator should attest to the framework below.",
      items: [
        { number: 1, title: "Commissary certification", description: "Operator commissary is FDA-registered (21 CFR 1.225) and inspected by state/local health authority within the past 12 months. Inspection report provided on request." },
        { number: 2, title: "Cold-chain logging", description: "Continuous temperature logging from commissary to cooler with sub-15-minute resolution. Records retained 90 days minimum per FDA Food Code §8-201.14." },
        { number: 3, title: "Holding temperature", description: "TCS foods held at ≤ 41°F (FDA Food Code §3-501.16). Cooler alarms on excursion > 30 minutes; affected product pulled and logged." },
        { number: 4, title: "Date marking + rotation", description: "All TCS foods date-marked with use-by date ≤ 7 days from prep (FDA Food Code §3-501.17). FIFO rotation; pulled on date-of, not after." },
        { number: 5, title: "Allergen control", description: "Top-9 allergens declared on each package per FALCPA; gluten-free SKUs comply with FDA 21 CFR 101.91 (< 20 ppm)." },
        { number: 6, title: "Recall procedure", description: "Operator participates in FDA recall notifications; SKUs pulled within 24 hours of Class I recall notice; reconciled with facility within 48 hours." },
      ],
    },
    {
      heading: "4. Dietary inclusivity matrix",
      headers: ["Population", "Slots required", "Example SKU types"],
      rows: [
        ["Vegetarian / vegan", "≥ 15% of refrigerated slots", "Hummus packs, plant-based entrees, soy/almond/oat milk, plant protein bars"],
        ["Gluten-free", "≥ 10% of total slots", "GF-certified bars, GF crackers, GF wraps in fresh case"],
        ["Halal / Kosher", "≥ 5% each in facilities serving diverse staff", "Halal/Kosher-certified bars, snacks, frozen entrees"],
        ["Low-sodium / DASH-friendly", "≥ 15% of snack slots", "Unsalted nuts, low-sodium broth, low-sodium meal kits"],
        ["Diabetes-friendly", "≥ 15% of slots", "Low-glycemic snacks, sugar-free beverages, protein-forward items"],
        ["Lactation-supportive", "≥ 5% in maternity-adjacent lounges", "Hydration, protein-dense snacks, calorie-dense bars"],
      ],
    },
    {
      heading: "5. Infection-control protocol",
      items: [
        { check: "EPA List-N hospital disinfectant for all touch points; manufacturer contact time observed (typically 1–10 minutes)." },
        { check: "Touch-point cleaning schedule: kiosk screens, card readers, dispense doors, beverage tap handles cleaned at minimum each service visit and per facility EOC policy." },
        { check: "Cashless-preferred to minimize cash handling; cash mechanism (if installed) sanitized at each service visit." },
        { check: "Hand-hygiene station within 10 ft of the lounge entry per CDC guidance for staff break areas." },
        { check: "Refrigeration condensate drains routed per ASHRAE 188 (Legionella risk management) — no standing water in catch trays." },
        { check: "Operator route staff complete annual training: hand hygiene, glove use, illness-reporting, no-symptomatic-service rule." },
      ],
    },
    {
      heading: "6. HIPAA-adjacency check",
      paragraph:
        "Vending operators in healthcare are not typically Business Associates under 45 CFR §160.103 because they do not handle PHI. The check below documents that posture and contains the data the operator may handle.",
      items: [
        { number: 1, title: "PHI handling — none", description: "Operator does not receive patient names, MRNs, diagnoses, room assignments, or any patient-identifying information. Confirmed in writing in the master services agreement." },
        { number: 2, title: "Employee data — minimum necessary", description: "Operator receives opaque employee ID via badge tap and transaction line items. No name, role, DOB, or department unless required for payroll-deduct reconciliation (in which case BAA-equivalent data terms apply)." },
        { number: 3, title: "Network segmentation", description: "Vending telemetry runs on facility guest VLAN or operator-provided cellular LTE — not the EMR / clinical network. Confirmed in writing by facility IT." },
        { number: 4, title: "Camera + telemetry", description: "If kiosk camera is used (AI cooler vision), images stay on-device or in operator cloud; no facial recognition; retention ≤ 30 days unless dispute investigation requires." },
      ],
    },
    {
      heading: "7. Indicative pricing + subsidy framework",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Smart cooler / micro-market install", "$12,000 – $35,000", "Hardware + integration + first-year telemetry"],
        ["Per-machine traditional vendor", "$5,500 – $10,500", "Refrigerated, ADA-compliant, EMV cashless"],
        ["Subsidy budget per FTE/year", "$120 – $480", "$5/shift × ~240 shifts or $25/pay-period × ~26 periods"],
        ["Service fee / commission", "Operator-funded if revenue > $250/machine/wk", "Below threshold — service fee $80–$220/mo/machine"],
        ["Quarterly RD review", "$400 – $900", "Planogram refresh + dietary inclusivity audit"],
      ],
    },
    {
      heading: "8. Quarterly review template",
      items: [
        { check: "Per-shift velocity report (day / evening / night) reviewed against planogram" },
        { check: "Refrigerated waste percentage (target < 8% by units)" },
        { check: "Cold-chain temperature excursion log — count, duration, action taken" },
        { check: "Dietary inclusivity slot audit (vegetarian, GF, halal/kosher, low-sodium, diabetes-friendly)" },
        { check: "Subsidy utilization rate by department / shift" },
        { check: "Refund rate (target < 2%) + reason codes" },
        { check: "Uptime per machine (target ≥ 98% monthly)" },
        { check: "Incident log — infection control, allergen, ADA — all closed with root cause" },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate healthcare staff-lounge vending through operator partners that can attest to NSF-7 refrigeration, FDA-registered commissary, HACCP plan, badge integration, dietary inclusivity slots, and the HIPAA-adjacency data posture above. We describe what programs of this type require and what operators in our network can provide — we do not claim work performed at any specific named health system.",
    },
  ],
  footer:
    "Informational reference. Final planogram, subsidy mechanics, and integration approach are facility-specific and should be co-designed with the health system's clinical nutrition, infection prevention, IT, and HR teams.",
});

console.log("wrote "+"vending-solutions-for-healthcare-staff-lounges");
