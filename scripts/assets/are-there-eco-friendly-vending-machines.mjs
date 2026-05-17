import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "are-there-eco-friendly-vending-machines",
  assetType: "pack",
  title: "Eco-Friendly Vending RFP Framework",
  subtitle: "ENERGY STAR, refrigerant compliance, telemetry, and packaging standards",
  intro:
    "Eco-friendly vending is a procurement-spec exercise, not a marketing label. This RFP framework gives qualifying hosts the technical criteria to require from operators — and the evidence types each criterion should be backed by.",
  sections: [
    {
      heading: "1. ENERGY STAR equipment spec",
      paragraph:
        "ENERGY STAR-certified refrigerated vending machines (RVMs) use 30-50% less energy than legacy units, per EPA. Snack vendors are unregulated by ENERGY STAR but can be specified for LED lighting and high-efficiency power supplies.",
      items: [
        { label: "Refrigerated beverage", value: "ENERGY STAR Version 3.0 certification mandatory. Annual kWh < 1,500 for Class A (8 ft³+) units." },
        { label: "Glass-front coolers", value: "ENERGY STAR Version 4.1 commercial refrigerator with ECM evaporator fans, LED case lighting, anti-condensate controls." },
        { label: "Snack vendors", value: "LED interior lighting (not fluorescent); motion-activated lighting that dims to 20% when idle; ≥ 80 PLUS power supply." },
        { label: "Documentation", value: "ENERGY STAR product certification listing URL; CEC Modernized Appliance Efficiency Database (MAEDbS) record number." },
      ],
    },
    {
      heading: "2. Refrigerant compliance — AIM Act + EPA SNAP",
      paragraph:
        "The American Innovation and Manufacturing Act (AIM Act) and EPA SNAP rule restrict HFC refrigerants in new vending equipment. Operators procuring 2025+ inventory should be using low-GWP refrigerants.",
      items: [
        { label: "Approved low-GWP", value: "R-290 (propane, GWP 3), R-600a (isobutane, GWP 3), R-744 (CO2, GWP 1). Permitted under EPA SNAP Rule 23 for self-contained refrigeration." },
        { label: "Phased out / restricted", value: "R-134a (GWP 1430), R-404A (GWP 3922) — restricted in new equipment manufactured after Jan 1, 2025 per AIM Act Subsection (i)." },
        { label: "Charge limits", value: "R-290 charge limit 150 g per circuit (UL 60335-2-89 / IEC 60335-2-89)." },
        { label: "Documentation", value: "Refrigerant type + charge weight on equipment nameplate; manufacturer compliance attestation." },
      ],
    },
    {
      heading: "3. Telemetry — waste-avoidance metric",
      paragraph:
        "Cellular telemetry reduces operational waste: fewer truck rolls, less expired product, smaller carbon footprint per transaction.",
      items: [
        { label: "Truck-roll reduction", value: "Telemetry-driven restocking cuts visits by 30-50% vs fixed schedules. EPA SmartWay program documents the fuel-and-emissions delta." },
        { label: "Expiry waste", value: "Per-SKU velocity tracking targets < 2% expiry waste vs ~8% industry baseline." },
        { label: "Required data fields", value: "Online/offline status, per-SKU velocity, last-restock timestamp, internal temperature, compressor runtime, door-open events." },
        { label: "Audit interface", value: "Web dashboard + monthly CSV export. Host has read-only access to their site portfolio." },
      ],
    },
    {
      heading: "4. Packaging + product spec",
      headers: ["Category", "Eco-preferred specs", "Notes"],
      rows: [
        ["Bottled water", "Aluminum cans (Open Water, PathWater) or rPET 100% bottles", "Aluminum is infinitely recyclable; rPET reduces virgin PET demand"],
        ["Snacks", "Compostable wrappers (TerraCycle/BPI-certified) where feasible", "Limited SKU availability; supplement with How2Recycle-labeled SKUs"],
        ["Hot beverages", "PLA-lined or PHA-lined cups; reusable mug discount $0.25", "BPI commercial compost certification required for compostable cups"],
        ["Coffee pods", "Compostable pods (Cometeer, Pact Coffee) where machine compatible", "Avoid #7 polypropylene pods unless reclamation program in place"],
      ],
    },
    {
      heading: "5. Operator commitments to require in RFP",
      items: [
        { check: "ENERGY STAR-certified refrigerated inventory ≥ 80% of fleet by year 1; 100% by year 3." },
        { check: "Low-GWP refrigerants (R-290 / R-600a / R-744) in all post-2025 procurement." },
        { check: "Cellular telemetry on 100% of host placements." },
        { check: "Expiry waste < 3% reported monthly; sustainability report annual." },
        { check: "Route optimization software (e.g., VendSys Optix, Cantaloupe Seed) in use; SmartWay-registered fleet." },
        { check: "Take-back program for retired equipment — refrigerant reclamation per Clean Air Act Section 608 + EPA-certified scrap recycler." },
      ],
    },
    {
      heading: "6. Scorecard for evaluating operator responses",
      paragraph:
        "Score each criterion 0-3 (0 = does not meet; 1 = partial; 2 = meets; 3 = exceeds with evidence). Minimum qualifying score: 18 of 24.",
      headers: ["Criterion", "Weight", "Max score"],
      rows: [
        ["ENERGY STAR fleet share", "1.5x", "4.5"],
        ["Refrigerant compliance evidence", "1.5x", "4.5"],
        ["Telemetry coverage + data access", "1.0x", "3"],
        ["Expiry waste metric + reporting", "1.0x", "3"],
        ["Packaging eco-preferred SKU share", "1.0x", "3"],
        ["Take-back + reclamation program", "1.0x", "3"],
        ["SmartWay or comparable fleet cert", "1.0x", "3"],
      ],
    },
    {
      heading: "7. Reporting cadence + KPIs",
      items: [
        { number: 1, title: "Monthly", description: "kWh per machine, expiry waste %, truck-roll count, eco-SKU sell-through %." },
        { number: 2, title: "Quarterly", description: "Carbon footprint per transaction (kg CO2e), refrigerant inventory by GWP class, take-back tonnage." },
        { number: 3, title: "Annual", description: "Sustainability report aligned to GRI 305 (Emissions) and GRI 306 (Waste); third-party verification optional but preferred." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface operators that can attest to ENERGY STAR, low-GWP refrigerant, and telemetry commitments at RFP. Operator availability varies by region; capability framing only.",
    },
  ],
  footer:
    "This framework is informational. Reference EPA SNAP rule, AIM Act subsections, and ENERGY STAR product specifications for current authoritative requirements.",
});

console.log("wrote " + "are-there-eco-friendly-vending-machines");
