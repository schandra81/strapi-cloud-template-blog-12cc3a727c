import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-services-for-manufacturing-plants",
  assetType: "template",
  title: "Manufacturing Plant Vending Service Contract Template",
  subtitle: "SLA, restock cadence, planogram tuning, and preventive maintenance for three-shift industrial operations",
  intro:
    "Manufacturing plants run vending differently from white-collar offices: three shifts, OSHA-regulated walking surfaces (29 CFR 1910 Subpart D), forklift traffic, dust and humidity tolerances on equipment, and PPE-vending coexistence in many facilities. This contract template gives the plant manager + HR partner a defensible service-contract framework with shift-aware SLA, telemetry-driven restock cadence, planogram tuning by shift cohort, and preventive-maintenance scope.",
  sections: [
    {
      heading: "1. Scope of service",
      paragraph:
        "Define service scope explicitly. Most plant vending disputes trace to scope gaps between the snack/beverage operator, the PPE-vending operator, and the EHS team.",
      items: [
        { label: "Equipment in scope", value: "List each device by location, make/model, telemetry SKU, and shift coverage. Snack + cold beverage + hot beverage in scope; PPE-vending separately if applicable." },
        { label: "Services in scope", value: "Restock, planogram management, telemetry monitoring, preventive maintenance, refund processing, quarterly business review, monthly revenue reporting." },
        { label: "Services explicitly excluded", value: "Building electrical (plant maintenance), floor cleaning of vending area (plant janitorial), structural anchoring of equipment (plant maintenance), PPE planogram for the safety-vending operator if separate." },
        { label: "Geographic + shift coverage", value: "Every plant location, every shift (1, 2, 3, weekend), every break room. Specify whether the contract covers the security gatehouse, transportation dispatch, and shipping/receiving as separate vending zones." },
      ],
    },
    {
      heading: "2. Service-level agreement",
      paragraph:
        "Plant SLAs are tighter than office SLAs because a stockout during shift-3 lunch break disproportionately impacts retention and morale. Aim for 97-98% uptime and tier-1 < 24 hours.",
      headers: ["SLA dimension", "Target", "Measurement", "Remedy"],
      rows: [
        ["Per-machine uptime", "97% monthly", "Telemetry — minutes online / minutes in month", "Service-improvement plan at 2 consecutive months < 95%; termination right at 90%"],
        ["Tier-1 ticket (offline, payment failure, cold-chain excursion)", "Acknowledge < 4 hours; resolve < 24 hours", "Operator CRM + telemetry", "Commission credit at SLA miss"],
        ["Tier-2 ticket (single SKU stockout, planogram update)", "Acknowledge < 24 hours; resolve < 5 business days", "Operator CRM", "Documented in QBR"],
        ["Refund response", "< 24 hours via app/SMS; cash refund < 7 days", "Refund log", "Refund rate > 2% triggers planogram review"],
        ["Cold-chain", "Temperature in 35-40°F continuous; excursion < 4 hour resolution", "Telemetry temperature feed", "Spoiled product replaced; root-cause memo"],
      ],
    },
    {
      heading: "3. Restock cadence — telemetry-driven",
      paragraph:
        "Industry-best practice has moved from fixed weekly routes to telemetry-driven dynamic routing. The contract should require telemetry-based decisioning, not a fixed weekly visit.",
      headers: ["Plant headcount per shift", "Visits per week (minimum)", "Pre-shift restock", "Surge protocol"],
      rows: [
        ["200+ workers per shift (3 shifts active)", "3-4", "Before shift-1 start (5-6 AM)", "Dedicated surge crew during summer + production peak"],
        ["100-200 workers per shift", "2-3", "Before shift-1 start", "Telemetry-driven mid-week top-off"],
        ["Under 100 workers per shift", "1-2", "Off-peak window", "On-demand based on telemetry"],
      ],
    },
    {
      heading: "4. Planogram tuning by shift cohort",
      paragraph:
        "Shift-1 (day) and shift-3 (overnight) cohorts purchase differently. Telemetry tracks per-shift velocity so the planogram refreshes each quarterly review. Set baseline weighting in the contract; tune at QBR.",
      items: [
        { label: "Shift-1 (6 AM – 2 PM)", value: "Breakfast bars, fresh fruit, yogurt, coffee, water, balanced lunch combo, electrolyte drinks (hot-environment plants)." },
        { label: "Shift-2 (2 PM – 10 PM)", value: "Snack + soda + energy drink + lunch leftovers + salty snacks for hot lines." },
        { label: "Shift-3 (10 PM – 6 AM)", value: "Caffeinated beverages, hot drinks, comfort snacks, calorie-dense meal replacements." },
        { label: "Weekend / production-overtime", value: "Adjusted planogram for reduced shift density; expect higher per-capita velocity." },
        { label: "Seasonal", value: "Increased electrolyte + hydration SKUs May-September; increased hot beverage November-March in unheated areas." },
        { label: "Plant-specific", value: "Foundry / forge / glass / mill — heavy hydration + electrolyte planogram with sodium-supplement-style options. Cold-storage / freezer plants — heavy hot beverage." },
      ],
    },
    {
      heading: "5. Preventive maintenance scope",
      paragraph:
        "Industrial environments degrade equipment faster than office. PM scope should be explicit; without it, equipment goes from 98% uptime to 88% within 18 months.",
      items: [
        { number: 1, title: "Monthly PM", description: "Coil cleaning on refrigerated devices, gasket inspection, payment-reader function test, telemetry heartbeat verification, dispense-flap operating force check (ADA Section 309.4)." },
        { number: 2, title: "Quarterly PM", description: "Full cabinet wipe-down, deep clean of refrigerated condensate pan, recalibration of cold-chain sensors, firmware update on telemetry + payment reader, ADA reach-range verification." },
        { number: 3, title: "Annual PM", description: "Compressor service on refrigerated units, structural anchor verification, electrical-cord and GFCI test, comprehensive ADA + safety attestation refresh, equipment refresh decision for any unit > 7 years." },
        { number: 4, title: "Reactive maintenance", description: "Service-ticket SLA per section 2. Root-cause memo on any tier-1 ticket; trend analysis at QBR." },
      ],
    },
    {
      heading: "6. Equipment specification for industrial environments",
      paragraph:
        "Plant equipment differs from office equipment in IP rating, cabinet construction, and dust tolerance. Specify these in the contract or in an SOW addendum.",
      items: [
        { check: "Refrigerated combo with sealed condensate management (no exposed pan in dusty environment)" },
        { check: "Stainless steel or powder-coat steel cabinet exterior (not vinyl wrap — degrades in industrial UV + chemical environments)" },
        { check: "Forklift-safe placement — bollards or wall recess if within forklift traffic zone (29 CFR 1910.176)" },
        { check: "GFCI on 120V circuits; dedicated 208V for high-draw refrigerated units" },
        { check: "Cellular telemetry — Wi-Fi unreliable in steel-structure plants" },
        { check: "Payment reader rated for industrial dust + humidity (consult Nayax / Cantaloupe environmental spec sheet)" },
        { check: "ADA Section 308 reach range + 305 clear floor space verified at each placement" },
      ],
    },
    {
      heading: "7. Reporting cadence",
      paragraph:
        "Plant HR + operations leadership need monthly + quarterly reporting that maps to employee-experience metrics (retention, morale survey, OSHA-recordable trends in some EHS dashboards).",
      headers: ["Cadence", "Owner", "Output", "Distribution"],
      rows: [
        ["Monthly statement", "Operator", "Sales + commission + refund + telemetry uptime per machine + per shift", "HR partner + plant controller"],
        ["Monthly health check", "Operator account manager", "Top + bottom SKUs by velocity, stockout incidents, service tickets", "Plant manager + HR"],
        ["Quarterly business review", "Joint", "Planogram tuning + SLA scorecard + action items + capital recommendations", "Plant leadership team"],
        ["Annual reconciliation", "Operator + plant controller", "Full-year commission + capex + refresh schedule", "Plant GM + corporate operations"],
      ],
    },
    {
      heading: "8. Term, termination, and equipment removal",
      items: [
        { label: "Initial term", value: "36-60 months typical; longer terms acceptable for operator-owned equipment with capex investment." },
        { label: "Termination for cause", value: "30-day cure period after written notice of material breach (uptime < 90% two consecutive months, repeated payment-handling errors, safety incident attributable to operator)." },
        { label: "Termination for convenience", value: "90-180 day notice mutual; operator removes equipment at own cost within 30 days of termination effective date." },
        { label: "Equipment removal", value: "Operator restores wall/floor surfaces to original condition; electrical disconnect by plant maintenance; operator covers reasonable wall-patch + paint." },
        { label: "Transition cooperation", value: "Outgoing operator provides telemetry data export + final reconciliation within 30 days of termination, supports incoming operator in changeover period of up to 60 days." },
      ],
    },
  ],
  footer:
    "This template is a working contractual reference, not legal advice. Final contract should be reviewed by plant counsel, the EHS team, and corporate procurement. Telemetry + SLA + cold-chain clauses are the most commonly contested in industrial vending; close those gaps explicitly before signing.",
});

console.log("wrote "+"vending-services-for-manufacturing-plants");
