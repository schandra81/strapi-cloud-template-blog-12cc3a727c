import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-maintenance-event-season",
  assetType: "template",
  title: "Event-Season Vending Maintenance Framework",
  subtitle: "Cadence, dark-window calendar, surge kit, validator service schedule",
  intro:
    "Use this framework to operate a vending program at venues with concentrated event seasons (stadiums, arenas, festival sites, fairgrounds, ski resorts, water parks). Each section is capability-framed and references NSF/ANSI 7 + 25, AHRI 1410, FDA Food Code 2022 § 3-501.16, MDB (Multi-Drop Bus) refrigeration + payment interfaces, EVA-DTS telemetry, and ADA Section 308. Operator capability should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Maintenance cadence template",
      paragraph:
        "Event-season placements wear faster than steady-state placements. The cadence below assumes high event-day load + dark periods between seasons.",
      headers: ["Task", "Pre-season", "In-season", "Post-season"],
      rows: [
        ["Coil + condenser clean", "Yes (T-30)", "Every 60 days or per telemetry alert", "Yes (T+14)"],
        ["Refrigerant + pressure check", "Yes (T-30)", "If telemetry flag", "Yes (T+14)"],
        ["Bill validator + coin mech service", "Yes (T-30)", "Every 30 days", "Inspect"],
        ["Payment reader (contactless / EMV)", "Yes (T-30)", "Firmware audit every 30 days", "Yes (T+14)"],
        ["Telemetry + connectivity test", "Yes (T-30)", "Daily heartbeat monitored", "Yes (T+14)"],
        ["LED + signage inspection", "Yes (T-30)", "Pre-each event", "Yes"],
        ["Gasket + door alignment", "Yes (T-30)", "Every 60 days", "Yes (T+14)"],
        ["ADA + accessibility audit", "Yes (T-30)", "Annual", "—"],
        ["Pest control inspection", "Yes (T-30)", "Every 30 days", "Yes"],
      ],
    },
    {
      heading: "2. Dark-window calendar",
      paragraph:
        "Schedule major preventive maintenance in dark windows (no events) to avoid event-day disruption. Sample calendars below — replace with venue-specific schedule.",
      headers: ["Venue type", "Dark windows", "Major-PM target window", "Refresh / refurb window"],
      rows: [
        ["NFL stadium", "Feb - Aug (training-camp aside)", "Mar - May", "Apr - May"],
        ["MLB stadium", "Nov - Mar", "Dec - Feb", "Jan - Feb"],
        ["College football stadium", "Dec - Aug", "Apr - Jul", "May - Jul"],
        ["Concert arena (general)", "Limited; typically 2-3 wk windows", "Per-week scheduled overnight", "Annual 1-2 wk shutdown"],
        ["Festival site / fairgrounds", "Off-season month per venue", "Off-season", "Off-season"],
        ["Ski resort", "Apr - Oct", "May - Aug", "Jun - Aug"],
        ["Water park", "Nov - Mar (northern)", "Dec - Feb", "Jan - Feb"],
      ],
    },
    {
      heading: "3. Surge kit list — event-day go-kit",
      paragraph:
        "Operator service crew carries a surge kit on event days. Goal: ≤ 30-min mean-time-to-restore for common failures.",
      items: [
        { label: "Bill validator + coin mech spares", value: "Pre-tested validator (MEI VN 2300, Coinco BV5500, MARS AE2832) + coin mech (Coinco 9302L, MEI CF7000); MDB harness." },
        { label: "Payment reader spares", value: "Contactless / EMV reader (Cantaloupe ePort, Nayax VPOS Touch, USA Tech ePort) pre-paired with cellular SIM." },
        { label: "Refrigeration parts", value: "Common condenser fans, compressor relays, evaporator fans, gaskets; charged refrigerant cylinder (R-290, R-744 per OEM)." },
        { label: "Tools + diagnostics", value: "MDB harness tester, EVA-DTS reader, multimeter, manifold gauges, leak detector, clamp meter, label printer." },
        { label: "Restock SKUs", value: "Top-20 SKUs in surge quantity (2x normal day); cold-chain ice + insulated transport." },
        { label: "Comms", value: "2-way radio paired with venue ops, cellphone with venue's incident-management app, printed SLA + contact tree." },
      ],
    },
    {
      heading: "4. Validator + payment service schedule",
      paragraph:
        "Bill validators and payment readers are the highest-failure-rate components in event-day venues. Schedule below targets ≥ 99% transaction-acceptance rate.",
      items: [
        { label: "Bill validator", value: "Clean lens + belt every 30 days; full firmware update every 90 days; full bench test pre-season + mid-season." },
        { label: "Coin mech (where present)", value: "Clean every 30 days; jam check pre-event; coin tube inventory pre-event." },
        { label: "Contactless / EMV reader", value: "Firmware audit every 30 days; antenna + battery check every 60 days; full PCI-aligned attestation annual." },
        { label: "MDB cabling + harness", value: "Inspect for chafing + corrosion every 60 days; replace at any signs of intermittent drop." },
        { label: "Cellular modem + SIM", value: "RSSI test pre-event; SIM swap every 24 months or per carrier sunset notice; failover to dual-SIM where possible." },
      ],
    },
    {
      heading: "5. Operator capability checks",
      items: [
        { check: "Operator should attest to dedicated event-season service crew with ≤ 30-min mean-time-to-restore for Tier-1 failures during event hours." },
        { check: "Operator should attest to NSF/ANSI 7 + 25 + AHRI 1410 certifications on refrigerated equipment and FDA Food Code 3-501.16 cold-chain compliance." },
        { check: "Operator should attest to EVA-DTS-compliant telemetry on every event-placement unit with ≤ 15-minute heartbeat and 30-minute alert threshold for offline status." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless payment + bill validator service per OEM cadence + ≥ 99% transaction-acceptance rate." },
        { check: "Operator should attest to dark-window major-PM scheduling + event-day surge kit on site for every event-day shift." },
        { check: "Operator should provide $5M general liability + $5M umbrella + product liability ≥ $2M + additional-insured endorsement to venue (event-venue baseline)." },
      ],
    },
    {
      heading: "6. Event-day operations workflow",
      items: [
        { number: 1, title: "T-72: telemetry + inventory check", description: "Operator pulls telemetry for all event-placement units; confirms no offline status; pre-positions restock load." },
        { number: 2, title: "T-24: pre-event restock + readiness check", description: "Full restock of all event-day units; validator + reader test; cold-chain check; surge kit verified on site." },
        { number: 3, title: "T-4: final walk-through", description: "Service crew on-site walk-through; final inventory build; comms check with venue ops." },
        { number: 4, title: "T-0 to event-end: event monitoring", description: "Live telemetry monitored; ≤ 30-min mean-time-to-restore for any Tier-1 failure; mid-event top-off as needed." },
        { number: 5, title: "T+0 to T+4: post-event restock + reconciliation", description: "Mid-night restock; reconciliation of cash, cashless, refunds; cold-chain end-of-event report." },
        { number: 6, title: "T+24: post-event review", description: "Uptime, transactions, refund volume, service tickets, kit replenishment. Drives next-event prep." },
      ],
    },
    {
      heading: "7. Reporting + quarterly review",
      items: [
        { check: "Per-event: uptime, transactions, basket, refund volume, validator + reader acceptance rate, service tickets." },
        { check: "Monthly: PM completion, telemetry health, refrigeration performance, planogram refresh." },
        { check: "Quarterly: dark-window PM schedule update + capital refresh planning for any units approaching end-of-life." },
        { check: "Annual: full lifecycle review — PCI + insurance + food safety recertification; equipment refresh proposals." },
      ],
    },
  ],
  footer:
    "This framework is informational and not engineering, legal, or food-safety advice. Maintenance scope, refrigerant handling, and PCI scope each require qualified technicians and current OEM documentation. Confirm operator capability through reference checks and written attestation.",
});

console.log("wrote " + "vending-maintenance-event-season");
