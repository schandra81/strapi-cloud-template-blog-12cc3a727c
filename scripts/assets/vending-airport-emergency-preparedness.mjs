import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-airport-emergency-preparedness",
  assetType: "rfp template",
  title: "Airport Emergency Vending RFP Template",
  subtitle: "Power, telemetry, free-vend mode, and planogram requirements for IROPS, ground-stop, and shelter-in-place scenarios",
  intro:
    "Airport vending becomes operationally critical during irregular operations (IROPS), ground stops, weather closures, and shelter-in-place events when concourse F&B closes early and passengers shelter overnight. FAA Advisory Circular 150/5200-31C (airport emergency planning), TSA security directives at SIDA + AOA areas, and ACI-NA emergency-operations best practices all touch the equipment, telemetry, and planogram spec for emergency-ready vending. This RFP template gives the airport operations duty officer + concessions program manager an explicit emergency-vending RFP with power, telemetry, free-vend, and planogram requirements.",
  sections: [
    {
      heading: "1. Power + electrical resilience",
      paragraph:
        "Airport emergency events frequently coincide with power-quality issues. Equipment must remain operational on emergency power circuits where the airport supports them, and must fail safely otherwise.",
      items: [
        { check: "Refrigerated devices on emergency-power circuit where airport facility supports it (typical at TSA checkpoint + hold-room concentrations)" },
        { check: "UPS battery backup on telemetry + payment terminal so transactions can complete during brief power events" },
        { check: "Equipment power consumption documented per device — refrigerated combo ~ 400-650 W; snack ~ 100-200 W; AI cooler ~ 350-500 W" },
        { check: "GFCI on 120V circuits; dedicated 208V on refrigerated combo + IM where higher draw justifies" },
        { check: "Cold-chain telemetry continues during temporary power loss — battery-backed sensor where the device circuit fails" },
        { check: "ENERGY STAR certification on refrigerated devices reduces draw on emergency-power circuit" },
        { check: "Surge protection per UL 1449 on dedicated circuits" },
      ],
    },
    {
      heading: "2. Telemetry — emergency-operations integration",
      paragraph:
        "Airport operations duty officers need live visibility into vending status during IROPS. Telemetry integration with the airport operations center (AOC) is increasingly required in modern airport vending contracts.",
      items: [
        { label: "Cellular telemetry baseline", value: "All placed devices on cellular telemetry (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets, AWM Smart Shelf, or comparable) with heartbeat ≤ 15 minutes." },
        { label: "AOC dashboard integration", value: "Read-only view shared with the airport operations duty officer — per-machine status, per-SKU velocity, cold-chain status, refund volume." },
        { label: "Pre-event positioning data", value: "Operator delivers a pre-event status report when the airport invokes IROPS protocol (typically 4-12 hours before forecast disruption)." },
        { label: "During-event reporting", value: "Hourly status update from operator to AOC during the IROPS event — uptime, stockout, refund, free-vend activation." },
        { label: "Post-event after-action report", value: "Within 5 business days, operator delivers a full after-action report — sales, stockouts, equipment incidents, lessons-learned." },
      ],
    },
    {
      heading: "3. Free-vend mode — activation + governance",
      paragraph:
        "Free-vend (setting selected machines or selected SKUs to $0.00) is used during ground stops, shelter-in-place, and humanitarian-relief events. The contract needs explicit activation governance.",
      items: [
        { number: 1, title: "Activation authority", description: "Free-vend activation requires written or recorded-call authorization from the airport operations duty officer (or named delegate). Operator does not activate unilaterally; airport does not activate without operator coordination." },
        { number: 2, title: "Scope of free-vend", description: "Specifies which machines (typically concourse hold-rooms + post-security + landside curbside-shelter), which SKUs (typically water + healthy snack baseline; full planogram in extended events), and the duration." },
        { number: 3, title: "Cost-recovery mechanism", description: "Airport reimburses operator at agreed unit cost (typically wholesale + 20-30% margin) for free-vended product. Reimbursement reconciled monthly against the standard commission settlement." },
        { number: 4, title: "Documentation", description: "Telemetry logs every free-vend transaction. Post-event reconciliation memo includes free-vend unit count + cost + duration + authorizing officer." },
        { number: 5, title: "FAA + TSA notification", description: "Airport operations notifies FAA tower + TSA of any operational change that affects concession status during IROPS; vending free-vend is included in the IROPS communication template." },
      ],
    },
    {
      heading: "4. Planogram — emergency tilt",
      paragraph:
        "During IROPS + shelter-in-place, passenger demand tilts heavily toward hydration + low-stimulus calories. Operator stocks a baseline emergency-ready SKU mix in addition to the standard concourse planogram.",
      items: [
        { label: "Hydration baseline", value: "Bottled water 16-20 oz (50% of beverage slots minimum during emergency activation); electrolyte drinks; juice." },
        { label: "Quiet-meal options", value: "Trail mix, granola bars, crackers + cheese, peanut-butter cracker packs, jerky — calorie-dense + shelf-stable + low-stimulus." },
        { label: "Family-friendly + child-appropriate", value: "Fruit snacks, animal crackers, applesauce pouches — required for terminal locations where families with young children shelter." },
        { label: "Allergen-aware", value: "Nut-free + dairy-free + gluten-free selections clearly labeled per FALCPA; allergen summary signage on the machine face." },
        { label: "Special-needs awareness", value: "ADA-compliant reach range so passengers with mobility devices can self-serve; cashless required so passengers without cash can transact." },
        { label: "Diabetic-safe options", value: "Low-sugar snack options stocked at baseline; clearly labeled." },
        { label: "Surge inventory pre-positioning", value: "When the airport invokes IROPS, operator pre-positions surge inventory at the concourse warehouse within 4 hours of activation." },
      ],
    },
    {
      heading: "5. SLA matrix — airport emergency",
      headers: ["SLA dimension", "Steady-state target", "IROPS-activated target", "Remedy"],
      rows: [
        ["Per-machine uptime", "98% monthly", "99% during IROPS event", "Commission credit + AOC notification"],
        ["Tier-1 ticket resolve", "< 24 hrs", "< 4 hrs during IROPS", "Per-ticket commission credit"],
        ["Cold-chain excursion resolve", "< 4 hrs", "< 2 hrs during IROPS", "Spoilage replacement + root-cause"],
        ["Refund response", "< 24 hrs cashless", "< 2 hrs cashless during IROPS", "Refund-credit accuracy 100%"],
        ["Pre-event positioning report", "n/a", "Within 4 hrs of IROPS invocation", "Notification SLA"],
        ["Hourly status update during event", "n/a", "Hourly to AOC", "Notification SLA"],
        ["Post-event after-action report", "n/a", "Within 5 business days", "Reporting SLA"],
        ["Free-vend activation response", "n/a", "Within 60 minutes of authorized request", "Activation SLA"],
      ],
    },
    {
      heading: "6. Compliance + security",
      items: [
        { check: "TSA badging — all service personnel SIDA + AOA badged where required; recurring background check per 49 CFR 1542" },
        { check: "Vehicle access permit for ramp + SIDA per airport security plan" },
        { check: "FAA Advisory Circular 150/5200-31C airport emergency plan reviewed; operator's role documented in the AEP" },
        { check: "ACI-NA emergency-operations best-practice alignment where the airport participates in the ACI-NA emergency operations community" },
        { check: "ADA Title II + Section 308 reach range on every device (federal accessibility floor)" },
        { check: "FALCPA allergen labeling + allergen summary signage" },
        { check: "PCI-DSS v4.0 attestation through payment vendor" },
        { check: "Cybersecurity — operator network + telemetry vendor attest to NIST CSF or comparable framework alignment given the airport's CISA-recommended posture" },
      ],
    },
    {
      heading: "7. RFP response sections",
      items: [
        { number: 1, title: "Section A — Bidder profile + airport experience", description: "Years operating airport vending, comparable concourse footprint, TSA-badge program experience, AOC integration experience." },
        { number: 2, title: "Section B — Power + electrical resilience", description: "Equipment power consumption, UPS configuration, emergency-circuit compatibility, ENERGY STAR commitment." },
        { number: 3, title: "Section C — Telemetry + AOC integration", description: "Telemetry vendor + heartbeat, AOC dashboard integration, pre-event + during-event + post-event reporting." },
        { number: 4, title: "Section D — Free-vend governance", description: "Activation protocol, cost-recovery mechanism, documentation + reconciliation." },
        { number: 5, title: "Section E — Planogram + emergency tilt", description: "Steady-state planogram + emergency-tilt SKU list + allergen + special-needs accommodation." },
        { number: 6, title: "Section F — SLA matrix response", description: "Match the matrix in Section 5; propose deviations with rationale." },
        { number: 7, title: "Section G — Security + compliance", description: "TSA badging program, ADA attestation, FALCPA, PCI v4.0, cybersecurity posture." },
        { number: 8, title: "Section H — References + commercial terms", description: "Three airport references + commission + investment + refresh cycle." },
      ],
    },
  ],
  footer:
    "This RFP template is a working procurement reference. Final RFP + contract should be reviewed by airport counsel, airport operations, the AEP coordinator, TSA liaison, and the concessions program manager. Power resilience + AOC integration + free-vend governance + emergency planogram together are the four most-gapped items in airport vending RFPs; close all four before issuance.",
});

console.log("wrote "+"vending-airport-emergency-preparedness");
