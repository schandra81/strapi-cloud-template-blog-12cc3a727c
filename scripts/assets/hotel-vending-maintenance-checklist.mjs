import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hotel-vending-maintenance-checklist",
  assetType: "pack",
  title: "Hotel Vending Maintenance Pack",
  subtitle: "Daily housekeeping, weekly operator, monthly preventive maintenance, and quarterly deep-service checklists",
  intro:
    "Hotel vending alcoves live in a high-visibility, guest-facing environment with brand-standard cleanliness expectations layered on top of operator obligations. This pack consolidates four working checklists (daily housekeeping, weekly operator visit, monthly PM, quarterly deep service) that an engineering director, GM, or operator can adopt as the operational baseline.",
  sections: [
    {
      heading: "1. Daily housekeeping checklist (front-of-house team)",
      paragraph:
        "Housekeeping or night audit completes during a fixed lobby/corridor sweep. Time-on-task ≤ 5 minutes per alcove.",
      items: [
        { check: "Front glass + machine face wiped with neutral cleaner; no smudges or fingerprints" },
        { check: "Dispense bin emptied of trash, wrappers, or product debris" },
        { check: "Floor mopped or vacuumed in alcove footprint; no spills, sticky residue, or trip hazards" },
        { check: "Ice machine drip pan emptied (if co-located); no standing water (ASHRAE 188 Legionella consideration)" },
        { check: "Card reader / contactless tap zone visibly free of damage, tape residue, or skimmer overlays" },
        { check: "'Out-of-order' or service tag noted and reported to engineering before 11:00 AM" },
        { check: "Lighting in alcove operational; no flickering or burned-out bulbs" },
      ],
    },
    {
      heading: "2. Weekly operator visit checklist",
      items: [
        { check: "Restock against telemetry-driven planogram; FIFO rotation; pull any expired SKUs" },
        { check: "All TCS / refrigerated SKUs at ≤ 41°F per FDA Food Code §3-501.16; cooler thermometer verified" },
        { check: "Date marking on TCS SKUs ≤ 7 days from prep (FDA Food Code §3-501.17)" },
        { check: "Coin/bill mechanism cleaned, jam tested with calibration coins and bills" },
        { check: "Card reader EMV chip + contactless tap test transaction; receipt confirms PCI-DSS v4.0 reader online" },
        { check: "Telemetry heartbeat confirmed at < 15-minute interval; offline status cleared" },
        { check: "Allergen labeling card on machine face current; Top-9 declared per FALCPA" },
        { check: "Service log signed + dated; left with engineering or at front desk for retention" },
      ],
    },
    {
      heading: "3. Monthly preventive-maintenance checklist (operator technician)",
      items: [
        { number: 1, title: "Refrigeration system", description: "Condenser coil cleaned of dust + lint (manufacturer-recommended interval typically 30–90 days). Compressor amp-draw measured against nameplate. Defrost cycle observed and timed against spec." },
        { number: 2, title: "Door seals + gaskets", description: "Visual inspection for cracks; dollar-bill test on gasket seal. Replace if bill slides out without resistance. Common life: 24–36 months under hotel duty cycle." },
        { number: 3, title: "Electrical + grounding", description: "Cord, plug, and dedicated 20A receptacle inspected; no scorching or wear. Ground continuity verified per NFPA 70 §250 with handheld tester." },
        { number: 4, title: "Lighting", description: "Cabinet LED panel inspected; replace any LED with < 80% rated lumens or visible discoloration." },
        { number: 5, title: "Coin + bill mechanism", description: "Vacuum debris from acceptor path; lubricate per OEM spec (typically dry PTFE, never WD-40)." },
        { number: 6, title: "Card reader + telemetry", description: "Firmware updates applied to OEM minor version. EMV terminal certificate validity > 90 days. Cellular signal strength logged." },
        { number: 7, title: "Cabinet interior sanitization", description: "EPA-registered food-contact-safe sanitizer; contact time observed; rinsed where required. Log entry retained 12 months." },
      ],
    },
    {
      heading: "4. Quarterly deep-service checklist",
      paragraph:
        "Deeper service window typically 60–90 minutes per machine. Coordinate with engineering for any temporary alcove signage.",
      items: [
        { check: "Compressor + condenser full clean + capacitor health test" },
        { check: "Evaporator coil inspection; defrost drain line flushed (microbial / Legionella consideration per ASHRAE 188 §7)" },
        { check: "Door alignment + hinge torque to OEM spec" },
        { check: "ADA recertification — reach range (§308), operating force (§309.4), clear floor space (§305) re-measured" },
        { check: "Cabinet finish inspected for chip, scratch, or rust; touch-up where applicable" },
        { check: "Card reader replaced if EMV cert nearing expiry or PCI-DSS v4.0 reader generation lifecycle indicates" },
        { check: "Telemetry battery / backup tested; sub-15-minute heartbeat verified after pull-the-plug test" },
        { check: "Operator + facility joint review of planogram, refund rate, uptime, and complaint log" },
      ],
    },
    {
      heading: "5. Annual + lifecycle items",
      headers: ["Item", "Interval", "Reference"],
      rows: [
        ["Refrigeration P-trap / drain line", "Annually", "ASHRAE 188 §7 microbial risk management"],
        ["Compressor capacitor replacement", "5–7 years typical", "OEM service manual"],
        ["Card reader generation refresh", "5–7 years", "PCI-DSS v4.0 device lifecycle"],
        ["Full cabinet repaint or replacement", "10–15 years", "Brand-standard alignment; hotel renovation cycles"],
        ["Energy-efficiency review", "Annually", "ENERGY STAR refrigerated vending program — typical 1,500–2,500 kWh/year per unit"],
      ],
    },
    {
      heading: "6. SLA + escalation",
      items: [
        { number: 1, title: "Tier 1 — guest-facing failure", description: "Machine offline, payment system down, refrigeration failure with TCS product loss. < 24 hour acknowledge, < 24 hour resolve. After-hours escalation phone line provided." },
        { number: 2, title: "Tier 2 — stockout / planogram", description: "Single SKU stockout, planogram refresh request. 24–48 hour acknowledge, 5–7 day resolve." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "Wrap refresh, light bulb, label refresh. 5-day acknowledge, 14-day resolve." },
        { number: 4, title: "Guest refund SLA", description: "App, SMS, or phone refund — auto-credit within 24 hours for cashless. Cash refund issued by front desk on operator's behalf and reconciled next visit (≤ 7 days)." },
      ],
    },
    {
      heading: "7. Indicative cost",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Operator weekly visit (per machine)", "$80 – $180/month", "Bundled in commission for revenue > $250/wk; line-item below that"],
        ["Monthly PM visit (per machine)", "$60 – $140", "Technician + parts + travel"],
        ["Quarterly deep service (per machine)", "$150 – $380", "Longer service window; ADA recertification included"],
        ["Annual major service / capacitor", "$220 – $700", "Parts + labor"],
        ["Telemetry / connectivity (per machine)", "$15 – $35/month", "Cellular LTE, sub-15-minute heartbeat"],
        ["Energy (typical)", "$180 – $310/year", "1,500–2,500 kWh × $0.12–$0.16/kWh"],
      ],
    },
    {
      heading: "8. Logging + records",
      items: [
        { check: "Daily housekeeping log retained 90 days minimum" },
        { check: "Operator service log retained 12 months minimum" },
        { check: "Refrigeration temperature log retained 90 days (FDA Food Code §8-201.14 alignment)" },
        { check: "ADA attestation + measurements retained for contract duration + 5 years" },
        { check: "PCI-DSS reader certificates + firmware update log retained 24 months" },
        { check: "Energy audit / lifecycle replacement records retained for asset life" },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate hotel vending placements through operators that can attest to the maintenance cadence and SLA framework above. We describe operator-attestable capability — daily housekeeping is hotel staff scope, weekly+ is operator scope. Capability documentation provided on request during scoping. This pack is operational reference, not a contract.",
    },
  ],
  footer:
    "Adopt this pack as the operational baseline; specific SLA and cadence figures should be confirmed with your operator and incorporated by reference into the master services agreement.",
});

console.log("wrote "+"hotel-vending-maintenance-checklist");
