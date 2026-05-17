import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "renewable-energy-campus-vending",
  assetType: "guide",
  title: "Campus Renewable-Vending Strategy Guide",
  subtitle: "Equipment efficiency, supply-side matching, solar-pilot scoping, and reporting",
  intro:
    "Use this guide to align campus vending with institutional sustainability commitments (AASHE STARS, ACUPCC / Second Nature, EPA ENERGY STAR Portfolio Manager). Three levers move the needle: equipment efficiency, supply-side energy matching, and a solar-vending pilot. Each lever has a measurement and reporting standard you can submit into institutional sustainability filings.",
  sections: [
    {
      heading: "1. Equipment efficiency",
      paragraph:
        "ENERGY STAR-certified refrigerated vending machines use 35-40% less energy than non-certified peers (EPA ENERGY STAR Program Requirements for Refrigerated Beverage Vending Machines, Version 4.0). LED-lit machines cut lighting load 65-75% vs. fluorescent.",
      headers: ["Component", "Baseline", "Efficient option", "Energy reduction"],
      rows: [
        ["Refrigerated vending machine", "Non-certified", "ENERGY STAR Version 4.0 certified", "35-40%"],
        ["Snack vending machine lighting", "T8 fluorescent", "LED retrofit / LED-equipped new", "65-75%"],
        ["Compressor / refrigerant", "Older HCFC", "HFC-free (CO2 or hydrocarbon) per EPA SNAP", "10-15% + GWP improvement"],
        ["Vending machine controller", "Always-on", "Vending Miser / occupancy-controlled", "15-25% additional"],
        ["Telemetry standby", "Modem always on", "Low-power modem (cellular sub-1W standby)", "Marginal but cumulative"],
      ],
    },
    {
      heading: "2. Supply-side matching",
      paragraph:
        "After efficiency, match remaining load to renewable supply. Four common approaches.",
      items: [
        { number: 1, title: "Campus solar / on-site PPA", description: "If campus has on-site solar or a behind-the-meter PPA, vending is part of the broader campus load and counts toward institutional renewable share. No vending-specific action required beyond reporting." },
        { number: 2, title: "Off-site PPA / VPPA", description: "Many institutions hold a VPPA covering a portion of campus load. Vending share calculated proportionally; report via STARS OP-6." },
        { number: 3, title: "Renewable Energy Certificates (RECs)", description: "Green-e Energy certified RECs purchased to cover vending kWh. Lowest-cost approach for ‘100% renewable’ vending claim; verify Green-e certification and additionality stance." },
        { number: 4, title: "Solar-vending direct pilot", description: "Section 4 below — direct on-machine or canopy solar pilot." },
      ],
    },
    {
      heading: "3. Carbon + reporting standards",
      items: [
        { label: "AASHE STARS OP-5 (Building Energy Efficiency)", value: "Vending efficiency contributes; report kWh per square foot trend." },
        { label: "AASHE STARS OP-6 (Clean and Renewable Energy)", value: "Vending kWh covered by clean energy contributes; report MWh by source." },
        { label: "EPA ENERGY STAR Portfolio Manager", value: "If institution benchmarks in ENERGY STAR Portfolio Manager, vending is part of building electric meter; efficient machines move score directly." },
        { label: "GHG Protocol Scope 2", value: "Use location-based + market-based methods; market-based reflects RECs / PPAs." },
        { label: "Second Nature Climate Reporting", value: "Institutions party to ACUPCC / Climate Commitment report vending under building energy; efficiency + renewable share both count." },
      ],
    },
    {
      heading: "4. Solar-vending pilot scoping",
      paragraph:
        "Solar-vending pilots can demonstrate institutional commitment and generate communications value beyond raw kWh. Two architectures.",
      items: [
        { label: "On-machine solar", value: "150-300W PV laminated onto machine top or canopy; offsets lighting + telemetry load entirely on sunny days. Best for outdoor / covered-outdoor placements; not appropriate for refrigerated machines (compressor load exceeds PV output)." },
        { label: "Canopy solar (cluster)", value: "2-5 kW PV canopy over a vending cluster (typically a plaza or rec-center plaza); offsets full cluster + provides shade. Often integrated with EV charging or USB-charge bench for visibility." },
      ],
    },
    {
      heading: "5. Operator scoping checklist",
      items: [
        { check: "Operator commits to ENERGY STAR Version 4.0 refrigerated machines for any new placement." },
        { check: "Operator commits to LED-equipped snack machines for any new placement." },
        { check: "Operator confirms HFC-free / low-GWP refrigerant per EPA SNAP for any new refrigerated unit." },
        { check: "Operator supports Vending Miser or comparable occupancy-controlled standby." },
        { check: "Operator provides per-machine energy reporting (kWh / month) for institutional sustainability filings." },
        { check: "Operator supports cooperative scoping of a solar-vending pilot (canopy or on-machine)." },
        { check: "Operator's restock crew uses fuel-efficient or EV vehicles where practical; reports vehicle-miles for institutional Scope 3 disclosure." },
      ],
    },
    {
      heading: "6. Measurement + iteration",
      items: [
        { number: 1, title: "Baseline (Year 1)", description: "Inventory all vending machines; capture make / model / refrigerated y/n / ENERGY STAR y/n / LED y/n / occupancy-controlled y/n. Estimate baseline kWh from manufacturer data + telemetry." },
        { number: 2, title: "Targets (Year 2-3)", description: "Set targets: % machines ENERGY STAR, % machines LED, % machines occupancy-controlled. Tie to operator contract renewals." },
        { number: 3, title: "Solar pilot (Year 2-3)", description: "Scope 1-2 cluster solar canopies in highest-visibility locations; partner with campus sustainability office + facilities." },
        { number: 4, title: "Annual reporting", description: "Report vending kWh + emissions in STARS + Portfolio Manager + Second Nature; communicate progress in sustainability annual report." },
      ],
    },
  ],
  footer:
    "Informational guide — confirm with campus sustainability, facilities, and operator before issue. Energy + emissions numbers should be validated against your institution's specific equipment + utility data.",
});

console.log("wrote "+"renewable-energy-campus-vending");
