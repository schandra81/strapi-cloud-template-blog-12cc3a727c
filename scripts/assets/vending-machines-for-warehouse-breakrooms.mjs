import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machines-for-warehouse-breakrooms",
  assetType: "pack",
  title: "Warehouse Breakroom Vending Implementation Pack",
  subtitle: "Equipment lineup, footprint plan, SLA framework, planogram template",
  intro:
    "Warehouse breakroom vending sits inside a regulated workspace — ADA Section 308, ANSI/ASSE Z244.1, ANSI Z535 signage, OSHA 1910.176 aisle clearance, FDA Food Code 3-501.16, and FALCPA allergen labeling all apply. This pack codifies four artifacts — equipment lineup, footprint plan, SLA framework, planogram template — so a breakroom is equipped to operate a compliant, multi-shift vending program rather than retrofit retail equipment.",
  sections: [
    {
      heading: "1. Equipment lineup",
      paragraph:
        "A typical 250-worker, 3-shift breakroom supports a 4-6 machine lineup. Equipment is selected by metabolic demand (hydration + protein + meal replacement) and shift coverage.",
      headers: ["Equipment", "Purpose", "Capacity (typical)"],
      rows: [
        ["Combo (snack + beverage)", "Core snack + beverage workhorse", "30-45 snacks + 6-10 bev rows"],
        ["Beverage cooler", "Hydration + cold beverages", "8-10 facings × 5-6 rows"],
        ["Fresh-food / grab-and-go", "Meal replacement", "20-30 perishable SKUs"],
        ["Hot-food / smart-fridge", "Shift-3 meal replacement", "10-15 hot-hold SKUs"],
        ["AI smart-cooler", "Open-door frictionless purchase", "30-50 SKUs"],
        ["Coffee + hot-beverage", "Caffeine + comfort", "4-6 beverage selections"],
      ],
    },
    {
      heading: "2. Footprint plan",
      paragraph:
        "Footprint plan accounts for ADA Section 308 reach range, OSHA 1910.176 aisle clearance, ANSI Z244.1 lockout-aware placement, and traffic flow during shift transitions.",
      items: [
        { number: 1, title: "Clear floor space", description: "30-inch × 48-inch clear floor space in front of each machine per ADA Section 305; free of permanent obstruction." },
        { number: 2, title: "Aisle clearance", description: "36-inch minimum aisle behind any queue zone per OSHA 1910.176(a)." },
        { number: 3, title: "Lockout boundary", description: "5-foot clearance from electrical panels, energy-isolating devices, pinch-point machinery per ANSI/ASSE Z244.1." },
        { number: 4, title: "Power + data", description: "20-amp outlet within 6 feet of each machine; cellular signal verified at install for telemetry continuity." },
        { number: 5, title: "Lighting", description: "Min 30 foot-candles at machine face per IES industrial task lighting guidance." },
        { number: 6, title: "Spacing between machines", description: "6-12 inches between adjacent machines for service access; full-height side panels for stability." },
      ],
    },
    {
      heading: "3. SLA framework",
      paragraph:
        "SLA tiers for breakroom vending with 24/7 shift coverage.",
      items: [
        { number: 1, title: "Tier 1 — revenue-critical / cold-chain / payment failure", description: "Acknowledgement < 4 hours; resolution < 24 hours. Examples: machine offline, payment system down, temperature excursion." },
        { number: 2, title: "Tier 2 — stockout / planogram refresh", description: "Acknowledgement 24-48 hours; resolution 5-7 days." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "Acknowledgement 5 days; resolution 14 days." },
        { number: 4, title: "Restock cadence", description: "Combo + beverage cooler: 3x/week; fresh-food: daily; hot-food: daily; coffee: 2x/week; surge labor for month-end + high-volume weeks." },
        { number: 5, title: "Cashless uptime", description: "≥ 99% per month; cash-and-cashless split reported monthly." },
        { number: 6, title: "Refund processing", description: "Cashless refunds < 24 hours via app/SMS; cash refunds at next visit (max 7 days)." },
        { number: 7, title: "Quarterly business review", description: "Standing QBR with operator + ops manager + EHS coordinator; KPI dashboard + planogram refresh recommendations." },
      ],
    },
    {
      heading: "4. Planogram template",
      paragraph:
        "Shift-aware planogram with three tiers. Refresh quarterly based on per-shift telemetry.",
      headers: ["Tier", "Category mix (typical)", "Shift skew"],
      rows: [
        ["Tier 1 — top 20% velocity", "Hydration + caffeine + top protein SKUs", "All shifts core"],
        ["Tier 2 — anchors (60%)", "Snacks, salty + sweet, branded SKUs", "Rotates with seasonal"],
        ["Tier 3 — discovery (20%)", "Wellness adds, lower-velocity premium", "Quarterly refresh"],
        ["Shift-1 weighting", "Breakfast bars, yogurt, fruit, coffee", "Peak 5-7 AM restock"],
        ["Shift-2 weighting", "Snacks, sodas, electrolyte, lunch", "Peak 1-3 PM restock"],
        ["Shift-3 weighting", "Caffeine, hot drinks, protein, hot meal", "Peak 9-11 PM restock"],
      ],
    },
    {
      heading: "5. Compliance attestation",
      items: [
        { check: "ADA Section 308 reach range verified; site-visit measurement logged at install + annually." },
        { check: "ADA Section 309.4 ≤ 5 lbf operating force verified with calibrated gauge." },
        { check: "ANSI Z535 signage — wayfinding + safety + refund + allergen — installed and verified." },
        { check: "ANSI/ASSE Z244.1 lockout-aware placement verified; 5-foot clearance from lockout zones." },
        { check: "OSHA 1910.176 aisle clearance preserved; 36-inch minimum." },
        { check: "FDA Food Code 3-501.16 attestation for refrigerated + hot-hold units." },
        { check: "FALCPA allergen labeling on every SKU; allergen summary on machine face." },
        { check: "PCI DSS attestation for cashless payment hardware." },
      ],
    },
    {
      heading: "6. Telemetry + KPI dashboard",
      items: [
        { label: "Uptime per machine", value: "Target ≥ 98% per month." },
        { label: "Stockout rate", value: "Target < 3% of SKU-hours." },
        { label: "Cashless mix", value: "Target ≥ 70% at warehouse breakroom." },
        { label: "Refund rate", value: "Target < 2%." },
        { label: "Per-shift velocity", value: "Reported shift-1 vs shift-2 vs shift-3 each month." },
        { label: "Temperature excursion count", value: "Target 0-1 per machine per month." },
        { label: "Worker NPS (annual)", value: "Target ≥ +30." },
      ],
    },
    {
      heading: "7. Operator selection checklist",
      items: [
        { check: "Operator has 24+ months of warehouse / industrial placements with 3 references." },
        { check: "Operator can support 3-shift coverage including 3rd-shift restock window." },
        { check: "Operator's telemetry reports per-machine + per-shift velocity." },
        { check: "Operator can attest to ADA + ANSI + FDA + FALCPA compliance." },
        { check: "Operator carries insurance (GL ≥ $5M / auto / WC / cyber)." },
        { check: "Operator's restock cadence is contractually flexible by season + event." },
        { check: "Operator delivers monthly KPI report + quarterly QBR." },
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Week", "Milestone", "Output"],
      rows: [
        ["Week 0", "Scope lock + footprint plan", "Footprint drawing with ADA + ANSI + OSHA references"],
        ["Week 1-4", "Equipment procurement + planogram design", "Equipment list + planogram template"],
        ["Week 5-6", "Site prep — electrical + data + signage", "Power + cellular + ANSI Z535 signage installed"],
        ["Week 7-8", "Installation + Section 308 attestation + UAT", "Live machines + measurement log"],
        ["Week 9-10", "Employee comms + soft launch", "Worker briefing + refund channel posted"],
        ["Week 11-12", "Live + first-month KPI review", "Telemetry confirms KPI baseline + planogram adjustments"],
      ],
    },
  ],
  footer:
    "This pack is a working breakroom implementation reference. Confirm ADA + ANSI + FDA + OSHA requirements with the host EHS coordinator and operator before commit; localize footprint to facility-specific lockout boundaries and aisle clearance.",
});

console.log("wrote "+"vending-machines-for-warehouse-breakrooms");
