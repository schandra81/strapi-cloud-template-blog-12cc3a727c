import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hospital-vending-maintenance-schedules",
  assetType: "pack",
  title: "Hospital Vending Maintenance Pack",
  subtitle: "Cadence framework, SLA targets, Joint Commission EOC documentation, telemetry platform comparison",
  intro:
    "Hospital vending sits inside the Joint Commission Environment of Care (EOC) chapter. Equipment must be clean, safe, properly maintained, and documented. This pack covers the maintenance cadence framework, SLA targets aligned with hospital operations, EOC documentation requirements, and a comparison of leading telemetry platforms.",
  sections: [
    {
      heading: "1. Maintenance cadence framework",
      paragraph:
        "Every hospital vending unit needs a layered cadence: continuous (telemetry), daily (visual + cleaning), weekly (operational), monthly (preventive), and quarterly (full audit). Each layer documents back to EOC.02.06.01 (effective work environment) + EOC.02.06.05 (safety).",
      headers: ["Cadence", "Owner", "Tasks", "Documentation"],
      rows: [
        ["Continuous", "Telemetry / operator", "Online / offline / temp / payment health", "Telemetry log retained ≥ 24 months"],
        ["Daily", "EVS + operator-app", "Wipe-down (EPA List N disinfectant), trash, spill check", "EVS cleaning log signed"],
        ["Weekly", "Operator", "Restock visit, planogram check, signage + label refresh", "Operator service log"],
        ["Monthly", "Operator", "Condenser coil cleaning, door gasket inspection, level + anchor check", "PM (preventive maintenance) report"],
        ["Quarterly", "Operator + materials mgmt", "Full QBR: SLA, planogram, telemetry, compliance audit", "QBR report archived"],
        ["Annual", "Operator + facilities", "Refrigerant + electrical safety; cabinet re-anchor; ADA re-verify", "EOC documentation package"],
      ],
    },
    {
      heading: "2. SLA targets — Joint Commission-aligned",
      paragraph:
        "SLA tiers should reflect patient-safety + patient-experience implications. ED + ICU adjacencies carry tighter tiers than back-of-house break rooms.",
      headers: ["Tier", "Issue type", "Ack", "Resolution (clinical area)", "Resolution (back-of-house)"],
      rows: [
        ["1", "Refrigeration excursion, machine offline, payment outage", "≤ 1 hour", "≤ 12 hours", "≤ 24 hours"],
        ["2", "Top-SKU stockout, planogram refresh", "4-12 hours", "≤ 48 hours", "≤ 72 hours"],
        ["3", "Tail-SKU stockout / signage", "24-48 hours", "5 days", "7 days"],
        ["4", "Cosmetic / minor cabinet repair", "5 days", "14 days", "21 days"],
      ],
    },
    {
      heading: "3. Joint Commission EOC documentation",
      paragraph:
        "Vending falls under EOC.02.06.01 (maintained environment), EOC.02.06.05 (interior + exterior safety), and EOC.02.03.01 (fire safety). Documentation is the audit trail when surveyors arrive.",
      items: [
        { check: "Equipment inventory list — make, model, serial, install date, location, manufacturer warranty status." },
        { check: "Cleaning log — daily EVS sign-off per machine; quaternary ammonium or hydrogen peroxide per CDC EPA List N (effective 2024)." },
        { check: "Refrigeration temperature log — telemetry-pulled or manual; FDA Food Code §3-501.16 requires ≤ 41°F for TCS food." },
        { check: "Preventive maintenance records — monthly PM signed by operator technician; condenser cleaning, gasket inspection, anchor inspection." },
        { check: "Electrical safety — annual NFPA 99 §6.3 receptacle test; UL listing per UL 541 + UL 751 maintained." },
        { check: "Fire safety — egress path clearance per IBC §1018.2 (min 44 in corridor) verified annually." },
        { check: "ADA compliance — annual reach + clear-floor-space audit per ADA Sections 305 + 308." },
        { check: "Recall log — manufacturer + FDA + USDA recall notifications received and acted on within 24 hours." },
        { check: "Refrigerant tracking — EPA Section 608 Form 7180-7 for any > 50 lb fixed system; vending stand-alones typically < 50 lb but log charge weight + type." },
        { check: "Incident reports — any vending-related slip, trip, fall, or injury logged in hospital incident system per OSHA 1904 + Joint Commission PI.01.01.01." },
      ],
    },
    {
      heading: "4. Telemetry platform comparison",
      paragraph:
        "Telemetry is the spine of hospital vending maintenance. Four platforms dominate; each has trade-offs.",
      headers: ["Platform", "Strengths", "Notable limitations"],
      rows: [
        ["Cantaloupe (Seed)", "Largest deployed base, mature reporting, robust commission tools", "UI legacy; integration roadmap behind newer entrants"],
        ["Nayax (VPOS Touch + Management Suite)", "Strong cashless, open API, growing healthcare presence", "Healthcare-specific reporting still maturing"],
        ["365 Retail Markets (PicoMarket)", "Best-in-class micro-market + smart cooler, RFID + biometric auth", "Pricing premium; less suited to single-machine deployments"],
        ["AWM Smart Shelf + Vendekin / Parlevel hybrids", "Modern API + computer vision options", "Smaller install base in healthcare; verify regional support"],
      ],
    },
    {
      heading: "5. Refrigeration-specific maintenance",
      paragraph:
        "Refrigerated cabinets carry the highest failure risk + food-safety stakes. Build the cadence to FDA Food Code + manufacturer specs.",
      items: [
        { label: "Daily", value: "Telemetry verifies cabinet temperature ≤ 41°F (per FDA Food Code §3-501.16). Manual visual check by EVS." },
        { label: "Weekly", value: "Operator confirms compressor cycle within manufacturer spec; door gasket seal check." },
        { label: "Monthly", value: "Condenser coil cleaning (vacuum + brush, manufacturer-approved); evaporator drain pan inspection." },
        { label: "Quarterly", value: "Door gasket replacement evaluation; defrost timer verification." },
        { label: "Annual", value: "Refrigerant charge verification per EPA Section 608; coil inspection; thermostat calibration." },
        { label: "Excursion response", value: "Cabinet exceeds 41°F for > 30 min: auto vend lockout per FDA Food Code §3-501.16(A)(2). Operator technician dispatched within 4 hours; affected TCS product discarded per §3-501.18." },
      ],
    },
    {
      heading: "6. Cleaning + disinfection protocol",
      paragraph:
        "Hospital placements require disinfectant-compatible surfaces and a documented cleaning protocol. Equipment manufacturers publish a list of approved disinfectants — verify per make + model.",
      items: [
        { check: "Disinfectant compatibility verified per manufacturer (typically quaternary ammonium, bleach 1:10, hydrogen peroxide 0.5%, isopropyl 70%)." },
        { check: "EVS daily wipe-down: high-touch surfaces (card reader, dispense door, selection pad) with EPA List N product per CDC guidance (current as of 2024)." },
        { check: "Weekly: EVS full exterior wipe-down, base of machine, surrounding floor." },
        { check: "Monthly: Operator interior cleaning during restock — shelves, dispense mechanism, drip pan." },
        { check: "Quarterly: Deep clean — full evaporator + drain pan, exterior detail." },
        { check: "Outbreak protocol: cabinet + 6-foot perimeter terminal clean per hospital IP protocol during norovirus, C. diff, or other communicable-disease event." },
      ],
    },
    {
      heading: "7. Documentation retention",
      headers: ["Document", "Retention period", "Source / standard"],
      rows: [
        ["Telemetry log", "≥ 24 months", "Operator practice"],
        ["Cleaning + EVS log", "≥ 36 months", "Joint Commission EOC.02.06.05"],
        ["Preventive maintenance records", "Equipment life + 5 years", "Joint Commission EC.02.04.03"],
        ["Refrigeration temperature log", "≥ 24 months", "FDA Food Code §3-501.16 + state code"],
        ["Refrigerant tracking", "≥ 5 years", "EPA 40 CFR §82.166"],
        ["Incident reports", "Per hospital RM policy (typically 7-10 years)", "OSHA 1904 + state retention rules"],
        ["Recall log", "Equipment life + 5 years", "FDA recall + product liability"],
      ],
    },
    {
      heading: "8. Operator capabilities required",
      items: [
        { check: "Cellular telemetry on every machine with sub-15-min heartbeat + cabinet temperature alerting." },
        { check: "24/7 dispatch capability with named on-call technician(s) per market." },
        { check: "EPA Section 608-certified refrigeration technicians available within the local market." },
        { check: "Documented PM cadence with photo + signature attestation submitted monthly." },
        { check: "Cleaning log integration with hospital EVS workflow (paper or digital)." },
        { check: "Quarterly business review (QBR) reporting tied to SLA performance + EOC documentation." },
        { check: "Insurance: GL $2M/$4M, product liability $2M, professional liability where contract specifies." },
        { check: "References from at least 2 prior hospital deployments with active EOC / Joint Commission survey history." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver hospital vending maintenance programs that meet Joint Commission EOC documentation requirements.",
});

console.log("wrote "+"hospital-vending-maintenance-schedules");
