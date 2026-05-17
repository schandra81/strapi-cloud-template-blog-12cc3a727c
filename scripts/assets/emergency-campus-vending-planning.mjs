import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "emergency-campus-vending-planning",
  assetType: "template",
  title: "Emergency Campus Vending Plan Template",
  subtitle: "EOP appendix + operator SOW + no-go matrix + ICS integration",
  intro:
    "Higher-ed campuses operating an Emergency Operations Plan (EOP) under DHS / FEMA Higher Education Emergency Management Guide (FEMA CPG 101 v3.0, 2021) often omit vending continuity as a documented appendix. This fillable template provides an EOP appendix, an operator Statement of Work (SOW), a no-go decision matrix, and ICS-style activation triggers. Adopt and customize to the campus EOP and to the operator MSA.",
  sections: [
    {
      heading: "1. Plan identification + governance",
      items: [
        { label: "Institution", value: "[INSTITUTION NAME]" },
        { label: "Plan owner", value: "[NAME, TITLE] — Emergency Management or Auxiliary Services lead" },
        { label: "Plan version", value: "[VERSION NUMBER] / [EFFECTIVE DATE]" },
        { label: "Review cadence", value: "Annual — coordinated with campus EOP review (FEMA CPG 101 v3.0, 2021)" },
        { label: "Authority", value: "Campus EOP §[NUMBER]; aligns with FEMA CPG 101, NIMS, and applicable state higher-ed emergency-management statute." },
        { label: "Approver signatures", value: "Emergency manager / Auxiliary services director / Vending operator authorized signer" },
      ],
    },
    {
      heading: "2. Scope + objectives",
      paragraph:
        "This appendix defines vending continuity expectations during campus emergencies: shelter-in-place, weather closure, utility outage, mass casualty, public health emergency, civil disturbance, and active assailant. Vending complements — does not replace — campus mass-care nutrition under ICS Logistics Section.",
      items: [
        { check: "Maintain hydration + shelf-stable nutrition at sheltered occupants at primary shelter sites." },
        { check: "Suspend or relocate machines from compromised buildings within 24 hours of authorization." },
        { check: "Coordinate operator service entry with campus access-control during lock-down conditions." },
        { check: "Preserve telemetry + payment continuity where utility / network compromised." },
        { check: "Document operations + decisions for ICS Documentation Unit + after-action review." },
      ],
    },
    {
      heading: "3. Activation triggers (ICS-aligned)",
      headers: ["Trigger", "Activation level", "Vending action"],
      rows: [
        ["Severe weather warning / shelter-in-place", "Level 3 (monitoring)", "Pre-stock primary shelter sites; verify telemetry; standby"],
        ["Campus closure ≥ 24 hr", "Level 2 (partial)", "Operator-side fleet sweep; planogram refresh at shelter sites; coordinate access"],
        ["Multi-building outage / mass care", "Level 2 (partial)", "Mobile cooler deployment if MSA includes; coordinate with Logistics Section"],
        ["Public health emergency / pandemic", "Level 2 (partial)", "Cashless mode enforced; planogram shifts to shelf-stable + immune-support SKUs; cleaning cadence escalated"],
        ["Full EOC activation", "Level 1 (full)", "Operator on-call rotation; ICS Logistics liaison; daily ops brief"],
      ],
    },
    {
      heading: "4. Operator Statement of Work (SOW) — paste into MSA",
      items: [
        { label: "Activation channel", value: "Campus emergency manager OR EOC Logistics Section Chief notifies operator at [PHONE / EMAIL]; acknowledgement within 1 hour 24/7." },
        { label: "Pre-stocking", value: "On Level 3 trigger: operator pre-stocks [LIST OF SHELTER MACHINES] to ≥ 90% par-stock with shelf-stable SKUs within 12 hours." },
        { label: "Service access", value: "Operator service tech maintains current campus background screening + ID badge + lock-down access protocol briefing." },
        { label: "Telemetry continuity", value: "Cellular-modem machines (Cantaloupe Seed / Nayax MoMa / 365 ADM / AWM / equivalent) prioritized at shelter sites; Wi-Fi-only machines flagged for cellular fallback." },
        { label: "Payment mode", value: "Cashless mode enforceable remotely where Level 2+ activated; operator confirms within 2 hours." },
        { label: "Reporting", value: "Daily status report to ICS Logistics during Level 1; per-shift status during Level 2; daily during Level 3." },
        { label: "Cost recovery", value: "Operator may invoice emergency service hours above MSA baseline at $[RATE] / hr with timecard documentation; coordinated with [TITLE]." },
      ],
    },
    {
      heading: "5. No-go decision matrix",
      paragraph:
        "Documents which placements are pulled offline at each activation level. Place X in the action column.",
      headers: ["Placement", "Building hazard class", "Action at Level 3", "Action at Level 2", "Action at Level 1"],
      rows: [
        ["[BUILDING / FLOOR]", "[Shelter / Critical / Non-critical]", "[Standby / Pre-stock / Pull]", "[Standby / Pre-stock / Pull]", "[Operate / Pull]"],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
    },
    {
      heading: "6. Shelter planogram — shelf-stable baseline",
      paragraph:
        "Shelf-stable + extended-shelf-life SKUs replace fresh / refrigerated facings at Level 2+. Beverage facings weight toward water + electrolyte.",
      items: [
        { label: "Water + hydration", value: "Bottled water 50-60% of beverage facings; electrolyte SKUs (Liquid IV, Gatorade, Pedialyte) 10-20%." },
        { label: "Caffeine + comfort", value: "Cold brew, RTD coffee, hot beverage (where machine supports) 10-20%." },
        { label: "Shelf-stable food", value: "Protein bars, trail mix, nut packs, jerky, fruit cups (heat-stable), crackers — minimum 60% of food facings." },
        { label: "Special diets", value: "Gluten-free, vegan, dairy-free SKUs flagged on machine face for sheltered occupants with documented allergens." },
        { label: "Allergen disclosure", value: "FALCPA-compliant labeling on every facing; allergen summary on machine face." },
      ],
    },
    {
      heading: "7. Integration with ICS sections",
      items: [
        { number: 1, title: "Logistics Section — Supply Unit", description: "Vending operator is a documented Logistics resource. Liaison contact + auxiliary services rep coordinate daily during Level 1 / 2." },
        { number: 2, title: "Operations Section — Mass Care Branch", description: "Where mass care opens, vending supplements (does not replace) prepared meal service. Coordinate planogram with mass-care nutrition lead." },
        { number: 3, title: "Planning Section — Documentation Unit", description: "Activation timestamps, decisions, and after-action notes logged in ICS-214 Activity Log style." },
        { number: 4, title: "Finance / Admin Section", description: "Emergency service-hour invoicing routed per MSA; expedited PO available." },
      ],
    },
    {
      heading: "8. Annual exercise + after-action",
      items: [
        { check: "Tabletop exercise annually covers vending continuity scenario; operator liaison participates." },
        { check: "After-action review (AAR) per FEMA HSEEP after every activation; vending-specific findings logged." },
        { check: "Plan revised within 90 days post-AAR; signature page re-executed." },
        { check: "MSA renewal references most current EOP appendix version." },
      ],
    },
  ],
  footer:
    "Template only — not legal or emergency-management advice. Coordinate adoption with campus emergency manager + auxiliary services + vending operator + risk management. LetUsVending is equipped to source operators with documented emergency-continuity SOW for higher-ed campuses.",
});

console.log("wrote "+"emergency-campus-vending-planning");
