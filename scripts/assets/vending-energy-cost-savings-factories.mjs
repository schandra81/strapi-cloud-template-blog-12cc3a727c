import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-energy-cost-savings-factories",
  assetType: "pack",
  title: "Manufacturing Vending Energy Pack",
  subtitle: "Refresh ROI calculator, ENERGY STAR equipment list, Scope 2 reporting templates, telemetry dashboard framework",
  intro:
    "A pre-2016 refrigerated vending machine draws roughly 7-10 kWh per day. An ENERGY STAR Tier 2 unit with LED lighting and an EMS (energy management system) controller draws 2-3 kWh per day. Across a 10-machine plant deployment, the gap is 18,000-25,000 kWh per year — direct OPEX savings plus Scope 2 reduction. This pack gives you the calculator, equipment list, reporting templates, and dashboard framework to capture it.",
  sections: [
    {
      heading: "1. Baseline energy consumption — what to measure",
      paragraph:
        "Before refreshing equipment, baseline the current fleet. A simple sub-meter or smart plug for one week per machine produces a defensible baseline.",
      headers: ["Machine type", "Typical legacy kWh/day", "ENERGY STAR Tier 2 kWh/day", "Annual gap (kWh)"],
      rows: [
        ["Refrigerated combo (snack + beverage)", "7-10", "2-3", "1,500-2,500"],
        ["Glass-front cold drink", "8-12", "3-4", "1,800-3,000"],
        ["Ambient snack only", "1.5-2.5", "0.8-1.2", "250-475"],
        ["Frozen vending", "12-18", "5-7", "2,500-4,000"],
        ["Hot-beverage / coffee", "3-6", "1.5-3", "550-1,100"],
      ],
    },
    {
      heading: "2. Refresh ROI — how to calculate",
      paragraph:
        "ROI on a refresh is mostly OPEX (energy) plus avoided service / refrigerant cost on aging equipment. Capital comes from the operator (in a placement-fee model) or from a co-investment program.",
      items: [
        { number: 1, title: "Calculate annual kWh delta", description: "(Legacy kWh/day − ENERGY STAR kWh/day) × 365 × machine count." },
        { number: 2, title: "Multiply by blended kWh rate", description: "US industrial blended rate (2025 EIA data) averages $0.085/kWh; varies $0.06 (TVA / Pacific Northwest) to $0.18 (CA / NE). Use plant's actual rate from utility bill." },
        { number: 3, title: "Add avoided service / refrigerant cost", description: "Aging units (15+ years) require more refrigerant top-offs (R-22 phased out under EPA SNAP; replacement cost climbs each year). Estimate $300-600/machine/year avoided." },
        { number: 4, title: "Subtract net capital", description: "If operator funds equipment refresh, capital is zero. If co-invested, capital amortizes over 5-7 year contract. Most plants land at 18-36 month payback." },
        { number: 5, title: "Add Scope 2 value (if tracked)", description: "Multiply kWh saved by grid emissions factor (eGRID region) for tCO2e reduction. Adds to ESG narrative even when not monetized directly." },
      ],
    },
    {
      heading: "3. ENERGY STAR equipment specification",
      paragraph:
        "ENERGY STAR vending machines (refrigerated bottled / canned) are a recognized federal-program category. Specify ENERGY STAR-qualified at RFP — do not accept 'energy-efficient' as a substitute.",
      items: [
        { label: "ENERGY STAR Refrigerated Beverage Vending Machines", value: "Federal program (DOE / EPA). Qualified models listed on energystar.gov. Tier 2 is the current most-efficient tier. Specify ENERGY STAR-qualified in RFP." },
        { label: "LED lighting", value: "All cabinet lighting LED. Specify color temperature 4000-5000K for product visibility." },
        { label: "EMS / occupancy sensor", value: "Energy Management System controller (USA Technologies / Cantaloupe EMS, VendingMiser, comparable). Reduces lighting + compressor cycling during low-traffic hours. Typical 25-40% kWh reduction vs. always-on." },
        { label: "Low-GWP refrigerant", value: "R-290 (propane) or R-744 (CO2) instead of R-134a / R-404A. EPA SNAP Rule 26 (2023) restricts higher-GWP refrigerants in new commercial refrigeration." },
        { label: "Variable-speed compressor", value: "Modulates with load. Adds capital but yields 10-20% kWh reduction vs. fixed-speed." },
      ],
    },
    {
      heading: "4. Telemetry dashboard framework",
      paragraph:
        "An energy program without telemetry is anecdote. Stand up a dashboard from operator telemetry plus facility sub-meters.",
      items: [
        { check: "Per-machine kWh/day from sub-meter or smart plug (Shelly / Sense / utility-grade)." },
        { check: "Refrigeration internal temperature (35-40°F target; alert on excursion)." },
        { check: "Compressor duty cycle (% of hour compressor runs)." },
        { check: "EMS state log — verify occupancy sensor + scheduled set-back firing correctly." },
        { check: "Door-open events (per day) — high door-open is a sign of EMS misconfiguration or worker behavior." },
        { check: "Monthly kWh trend chart vs. baseline." },
      ],
    },
    {
      heading: "5. Scope 2 reporting template (GHG Protocol)",
      paragraph:
        "If your facility reports under GHG Protocol (Scope 2) or CDP, vending energy savings can land in the corporate disclosure. Most plants treat vending as part of 'plug load' and report at the facility envelope level — but separate tracking gives you the line-item story.",
      headers: ["Field", "Source", "Example"],
      rows: [
        ["Baseline year kWh", "Sub-meter or vendor data", "23,500 kWh (10 machines × ~6.5 kWh/day legacy avg)"],
        ["Reporting year kWh", "Sub-meter post-refresh", "10,200 kWh (10 machines × ~2.8 kWh/day Tier 2 avg)"],
        ["kWh saved", "Baseline − reporting", "13,300 kWh"],
        ["Grid factor (eGRID region)", "EPA eGRID 2024", "varies (e.g., RFCW = ~0.42 kg CO2e/kWh)"],
        ["Scope 2 tCO2e reduction", "kWh saved × grid factor / 1000", "~5.6 tCO2e (using RFCW example)"],
        ["Reporting framework", "Internal / CDP / GHG Protocol", "GHG Protocol Scope 2 — location-based"],
      ],
    },
    {
      heading: "6. RFP language for energy program",
      items: [
        { check: "All refrigerated equipment placed under this contract is ENERGY STAR-qualified at time of install." },
        { check: "All cabinet lighting LED." },
        { check: "EMS / occupancy controller installed on every refrigerated machine." },
        { check: "Refrigerant is R-290 or R-744 (or other refrigerant ≤ 150 GWP) on all new equipment." },
        { check: "Operator provides monthly kWh per machine via portal or sub-meter integration." },
        { check: "Operator commits to refresh any equipment that exceeds [baseline kWh threshold] within 90 days." },
        { check: "Operator supports the facility's Scope 2 / ESG reporting cadence with annualized energy export." },
      ],
    },
    {
      heading: "7. Co-investment + utility rebate framing",
      paragraph:
        "Utility energy-efficiency programs (DSM / IRP) in many jurisdictions provide rebates on commercial refrigeration refresh. Coordinate with utility account rep before equipment refresh.",
      items: [
        { label: "Utility prescriptive rebate", value: "Many investor-owned utilities offer $100-300 per qualifying machine on ENERGY STAR refrigerated vending. Check via utility's commercial-program portal or account rep." },
        { label: "Custom / measured savings program", value: "For larger deployments (20+ machines), utility may offer a measured-savings rebate based on metered kWh reduction." },
        { label: "Operator-funded refresh", value: "Standard placement model — operator owns equipment, funds refresh, recovers through SKU margin. Plant captures kWh savings on the meter without capital." },
        { label: "Co-investment", value: "Plant + operator share equipment capital. Plant captures faster refresh + better refrigerant + better warranty terms." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to translate energy goals into operator RFP specifications and coordinate selection. We do not own or service the equipment. The operator selected via this framework executes the refresh and reports kWh under the contract.",
    },
  ],
  footer:
    "Energy figures are typical ranges from manufacturer + ENERGY STAR program data. Validate against your specific equipment, climate, and utility rate before committing to a refresh business case.",
});

console.log("wrote "+"vending-energy-cost-savings-factories");
