import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "preventative-maintenance-manufacturing-vending",
  assetType: "playbook",
  title: "Manufacturing Vending Preventive Maintenance Playbook",
  subtitle: "Weekly inspection + monthly preventive + quarterly comprehensive + annual major + telemetry-driven proactive PM",
  intro:
    "A documented PM program is the difference between 95% uptime and 99.5% uptime. At a 200-machine manufacturing facility, that 4.5 pp uptime gap is 30+ machine-days of lost availability per month. This playbook codifies the five-tier PM cadence, telemetry-driven proactive PM, and EPA-regulated refrigerant + electrical work an operator should be equipped to deliver.",
  sections: [
    {
      heading: "1. Five-tier PM cadence",
      paragraph:
        "PM operates on five overlapping cycles. Each tier has a defined scope, expected duration, and documentation requirement.",
      headers: ["Tier", "Cadence", "Duration / machine", "Owner"],
      rows: [
        ["Tier 1 — Visual inspection", "Weekly (with restock)", "3-5 minutes", "Route supervisor"],
        ["Tier 2 — Preventive service", "Monthly", "15-30 minutes", "Route technician"],
        ["Tier 3 — Comprehensive service", "Quarterly", "45-90 minutes", "Senior route technician"],
        ["Tier 4 — Annual major service", "Annually", "2-4 hours", "EPA Section 608 certified technician"],
        ["Tier 5 — Proactive / telemetry-driven", "Event-driven", "Variable", "Regional Operations Manager"],
      ],
    },
    {
      heading: "2. Tier 1 — Weekly visual inspection",
      paragraph:
        "Performed with every restock visit. Documented in the operator dashboard.",
      items: [
        { check: "Cleanliness: exterior wipe-down, dispense bin emptied, no spills around machine" },
        { check: "Signage: machine-face graphics intact, ADA pricing readable, allergen summary current" },
        { check: "Payment reader: card reader + contactless tap zone + mobile wallet target functional (test transaction at every visit)" },
        { check: "Coin/bill mech (if installed): no jams, change available" },
        { check: "Dispense mechanism: no stuck SKUs, dispense flap operates with ≤ 5 lbf (ADA 309.4)" },
        { check: "Lighting: interior + signage LED functional" },
        { check: "Temperature (refrigerated): door seal intact, temperature display reads 35-40°F" },
        { check: "Surrounding environment: NFPA 101 egress preserved, no obstructions to AED/eye wash/fire pull" },
      ],
    },
    {
      heading: "3. Tier 2 — Monthly preventive service",
      items: [
        { label: "Refrigeration (refrigerated machines)", value: "Refrigerant pressure check, condenser coil + fan cleaning, door gasket visual inspection, evaporator drain check, temperature calibration." },
        { label: "Electrical", value: "Cabinet ground check, payment reader cable integrity, telemetry module heartbeat verification, sleep-mode programming confirmation." },
        { label: "Payment system", value: "Card reader firmware check, contactless antenna check, PIN pad function (where deployed), test transactions on all payment methods." },
        { label: "Dispense mechanism", value: "Coil + auger cleaning, motor function test, dispense flap force test, spring tension on selected lanes." },
        { label: "Telemetry", value: "Sub-15-minute heartbeat verification, sensor calibration (door, temperature, optic-bin), firmware update if available." },
        { label: "Documentation", value: "PM log retained in operator dashboard; accessible to host facility CMMS via API or CSV export." },
      ],
    },
    {
      heading: "4. Tier 3 — Quarterly comprehensive service",
      items: [
        { number: 1, title: "Full electrical inspection", description: "Cabinet ground continuity, all internal wiring inspected for wear, payment + telemetry module reseated, ground-fault verification." },
        { number: 2, title: "Refrigeration deep service", description: "Condenser coil deep cleaning, evaporator coil inspection, refrigerant charge verification (R-290 charge limit confirmed per UL 60335-2-89), defrost cycle test." },
        { number: 3, title: "Door + gasket service", description: "Door gasket replacement if compressed > 30%; door alignment check; door switch (interior light + temperature sensor activation) verified." },
        { number: 4, title: "Dispense mechanism deep clean", description: "All coils + augers removed, cleaned, reinstalled; spring tension verified on every lane; selection-button force tested (ADA 309.4 ≤ 5 lbf)." },
        { number: 5, title: "Cabinet interior deep clean", description: "Interior wiped down with food-safe cleaner; FDA Food Code 4-602 sanitary surface maintenance for cabinets that contact food packages." },
        { number: 6, title: "Payment terminal recertification", description: "EMV chip reader + contactless antenna recertification; firmware updated; PCI DSS compliance reaffirmed in operator records." },
      ],
    },
    {
      heading: "5. Tier 4 — Annual major service",
      items: [
        { label: "Compressor + refrigerant cycle", value: "EPA Section 608 certified technician inspects compressor, refrigerant charge, condenser + evaporator coils, fan motors. R-290 hydrocarbon-certified technician required for R-290 machines." },
        { label: "ENERGY STAR verification", value: "Machine model + serial verified against ENERGY STAR Product Finder. kWh draw measured at the outlet (sub-meter if available) and compared to V4.0 MDEC. Out-of-spec machines flagged for replacement." },
        { label: "ADA recertification site walk", value: "Reach range (Section 308), operating force (309.4), contrast + character (703), clear floor space (305) verified. Photos retained in procurement file." },
        { label: "Insurance + license verification", value: "Certificate of insurance refresh; state vending operator license; state sales-tax permit." },
        { label: "Equipment age + replacement plan", value: "Machines past 7-year useful life flagged for replacement under operator capital cycle (refrigerated) or 10-year (non-refrigerated)." },
      ],
    },
    {
      heading: "6. Tier 5 — Telemetry-driven proactive PM",
      paragraph:
        "Telemetry transforms PM from time-based to condition-based. The right operator catches failures before they become outages.",
      items: [
        { number: 1, title: "Temperature trend monitoring", description: "Refrigerated machines: if internal temperature trends above 38°F over a 7-day window (still within FDA 41°F threshold), proactive condenser cleaning scheduled before the temperature excursion alert." },
        { number: 2, title: "Compressor cycle frequency", description: "Compressor cycling > 6 times/hour suggests gasket degradation or refrigerant low-charge. Proactive door gasket inspection + refrigerant pressure check." },
        { number: 3, title: "Payment failure rate", description: "Card-read failure rate > 1% of transactions triggers payment reader inspection + firmware refresh." },
        { number: 4, title: "Velocity vs planogram mismatch", description: "Repeated single-SKU stockouts at non-restock intervals suggest dispense motor degradation; proactive motor inspection on the affected lane." },
        { number: 5, title: "Telemetry heartbeat gaps", description: "> 30-min heartbeat gap in 7-day window suggests cellular or modem degradation; proactive module reseating or replacement." },
      ],
    },
    {
      heading: "7. Standards + regulatory references",
      items: [
        { label: "EPA Section 608", value: "Certified technicians required for all refrigerant work; types I-IV by equipment class." },
        { label: "EPA SNAP + AIM Act", value: "Refrigerant choice governs (R-290 preferred; R-404A phasedown under AIM Act). UL 60335-2-89 charge limit ≤ 150 g for R-290 in stand-alone refrigerated cabinets." },
        { label: "FDA Food Code (state-adopted)", value: "Section 4-602 sanitary surface maintenance for food-contact-adjacent machines; TCS food at 41°F or below; logs retained 12 months." },
        { label: "ADA Title III Sections 308 / 309 / 703", value: "Reach range, operating force, contrast verified at annual major service." },
        { label: "NFPA 101 Life Safety Code", value: "Equipment placement does not obstruct egress, AED, eye wash, fire pull, fire-rated assemblies." },
        { label: "PCI DSS", value: "Payment terminal recertification at quarterly + annual cadences; current attestation in operator file." },
        { label: "ENERGY STAR Refrigerated Beverage Vending Machines V4.0", value: "Verified at annual major service." },
      ],
    },
    {
      heading: "8. Quarterly business review — PM metrics",
      items: [
        { check: "Uptime by machine + facility average (target ≥ 99.5%)" },
        { check: "PM cadence adherence (Tier 1 weekly, Tier 2 monthly, Tier 3 quarterly)" },
        { check: "Open PM findings + resolution time" },
        { check: "Temperature excursion incidents (refrigerated)" },
        { check: "Refrigerant inventory + R-290 transition status" },
        { check: "Equipment age + replacement roadmap" },
        { check: "ADA recertification status (if quarter includes annual major service)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or technical advice. Coordinate with Facilities, EHS, Sustainability, Procurement, and General Counsel before contracting. LetUsVending is equipped to arrange operators with documented PM program rigor and telemetry-driven proactive capability.",
});

console.log("wrote "+"preventative-maintenance-manufacturing-vending");
