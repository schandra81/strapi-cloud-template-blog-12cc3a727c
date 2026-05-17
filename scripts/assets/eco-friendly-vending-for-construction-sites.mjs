import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "eco-friendly-vending-for-construction-sites",
  assetType: "pack",
  title: "Eco-Friendly Construction Site Vending Framework",
  subtitle: "ENERGY STAR + low-GWP refrigerant + telemetry + packaging + recycling stack",
  intro:
    "Use this pack to specify a low-impact vending program for active construction sites. Every section ties to a measurable standard (ENERGY STAR 4.0, AHRI 810-2016, EPA SNAP, ANSI/ASHRAE 90.1, ISO 14021) and is written so operators can attest to compliance in writing.",
  sections: [
    {
      heading: "1. Equipment energy spec — ENERGY STAR 4.0 refrigerated beverage merchandisers",
      paragraph:
        "ENERGY STAR Version 4.0 (effective Sep 2017, revised Jan 2023) sets maximum daily energy consumption (MDEC) limits roughly 30-40% below baseline AHRI 810-2016 units. Specify ENERGY STAR for every refrigerated cabinet — the premium is recovered in 14-26 months on $0.12/kWh utility.",
      items: [
        { label: "Closed-front beverage merchandiser (Class B)", value: "ENERGY STAR 4.0 MDEC ≤ 6.10 + 0.0167 × V kWh/day (V = adjusted volume, ft³). Typical 35 ft³ unit ≤ 6.68 kWh/day vs. baseline ~10.5 kWh/day." },
        { label: "Glass-front merchandiser (Class A)", value: "ENERGY STAR 4.0 MDEC ≤ 8.84 + 0.0252 × V kWh/day. LED interior + ECM evaporator fans + anti-sweat heater cycling required." },
        { label: "Snack (ambient) machine", value: "ENERGY STAR 4.0 snack tier: ≤ 1.20 kWh/day for cabinet ≤ 21 ft³. Verify LED-only lighting and motion-sensor sleep mode." },
        { label: "Combo (snack + chilled)", value: "Treat as Class B refrigerated for the cold zone. Confirm cold-zone separately metered or PSA-certified per AHRI 810-2016." },
      ],
    },
    {
      heading: "2. Refrigerant spec — EPA SNAP + low-GWP transition",
      paragraph:
        "EPA SNAP Rule 21 (2016, re-affirmed 2021) restricts HFC-134a and R-404A in new vending equipment. The AIM Act of 2020 phases down HFC production 85% by 2036. Specify natural or low-GWP synthetic refrigerants on every new placement.",
      items: [
        { label: "Acceptable", value: "R-290 (propane, GWP 3) — limited to ≤ 150 g charge per UL 60335-2-89 (effective 2021). R-744 (CO2, GWP 1). R-513A (GWP 631) acceptable transition fluid." },
        { label: "Prohibited (new placements)", value: "R-404A (GWP 3,922) and R-507A (GWP 3,985) prohibited under SNAP Rule 21. R-134a (GWP 1,430) prohibited in new stand-alone equipment under EPA 40 CFR §82.180." },
        { label: "Documentation", value: "Operator provides refrigerant type, charge weight (g), and AHRI certificate per unit. Replacement schedule for legacy R-134a fleet within 36 months." },
      ],
    },
    {
      heading: "3. Telemetry + remote energy management",
      paragraph:
        "Telemetry cuts driver miles 25-40% by replacing scheduled service with demand-driven service (NAMA Vending 2030 study). Specify cellular telemetry with cabinet-level energy reporting so the host can measure kWh/transaction and CO2e per service visit.",
      items: [
        { label: "Required telemetry", value: "Cellular modem with ≤ 15-minute heartbeat. Cantaloupe Seed Pro, Nayax VPOS Touch, 365 Retail Markets MicroMarket, AWM Smart Shelf, or equivalent." },
        { label: "Energy reporting", value: "Per-machine kWh/day, cabinet temperature, compressor cycle time. Quarterly energy report from operator to host." },
        { label: "Route optimization", value: "Operator routing software (e.g., LightSpeed, Parlevel, VendSys) consumes telemetry to suppress unnecessary visits. Target: ≥ 30% visit reduction vs. fixed cadence." },
      ],
    },
    {
      heading: "4. Packaging spec — recyclable + recycled content",
      paragraph:
        "Construction sites generate concentrated packaging waste. Specify SKUs aligned with the How2Recycle label program and FTC Green Guides (16 CFR Part 260) to qualify the program for the host's ISO 14001 / LEED O+M reporting.",
      items: [
        { label: "Beverages", value: "Aluminum cans (66% PCR average per Aluminum Association 2024) or rPET bottles with ≥ 25% post-consumer recycled content per ASTM D7611 labeling." },
        { label: "Snacks", value: "Prefer How2Recycle 'widely recyclable' or 'check locally' labels. Avoid multi-layer films without a TerraCycle or store-drop-off program." },
        { label: "Hot drinks", value: "If a coffee machine is included, specify BPI-certified compostable cups (ASTM D6400) where the site has commercial-compost service, otherwise 25% PCR recyclable cup." },
        { label: "Documentation", value: "Per-SKU spec sheet showing recycled content %, How2Recycle status, allergens (FALCPA), and supplier sustainability statement." },
      ],
    },
    {
      heading: "5. On-site recycling + take-back",
      paragraph:
        "A vending program without paired recycling shifts the disposal burden to the host. Specify co-located recycling that meets the construction site's waste-hauler stream definitions.",
      items: [
        { label: "Bin placement", value: "Aluminum + PET bin within 10 feet of every machine. Bin lid with 4-inch (aluminum) and 4-inch (PET) restrictor openings reduces contamination to ≤ 10% per The Recycling Partnership 2023 study." },
        { label: "Signage", value: "Color-coded per ASTM D7611 labeling (blue = recyclable). High-contrast pictograms readable at 6 feet." },
        { label: "Collection cadence", value: "Recycling pickup tied to restock visits (no separate visit needed). Operator logs weight collected per visit for the host's diversion reporting." },
        { label: "Battery + small-electronics", value: "If energy drinks or other lithium-cell devices are sold, provide a Call2Recycle drop slot or equivalent." },
      ],
    },
    {
      heading: "6. Cabinet siting — solar gain + condensation",
      paragraph:
        "Construction-site trailers, conex containers, and partially-open shelters often expose equipment to direct sun, dust, and humidity excursions. Cabinet placement drives 15-25% energy delta on otherwise identical equipment.",
      items: [
        { label: "Avoid direct sun", value: "Direct sun raises compressor duty cycle 20-30%. Specify shade structure or interior placement with ≥ 36 inches clearance per AHRI 810-2016 test condition." },
        { label: "Ambient envelope", value: "Most refrigerated merchandisers rated to 75°F / 55% RH per AHRI 810-2016. Above that, derate capacity 10% per +10°F and verify with operator that the site envelope is acceptable." },
        { label: "Dust + airflow", value: "Schedule condenser-coil cleaning every 60 days on dusty sites (vs. 180 days office). Telemetry temperature drift signals coil fouling." },
      ],
    },
    {
      heading: "7. Sustainability reporting framework",
      paragraph:
        "If the host construction firm reports under CDP, GRI, or ISSB IFRS S2, the vending program contributes Scope 3 Category 1 (purchased goods) and a small Scope 2 (purchased electricity if separately metered) line.",
      headers: ["Metric", "Unit", "Source / standard", "Reporting cadence"],
      rows: [
        ["Machine electricity", "kWh/year", "Telemetry energy register / ENERGY STAR label", "Quarterly"],
        ["CO2e emissions", "kg CO2e/year", "eGRID subregion factor × kWh (EPA eGRID 2023)", "Annual"],
        ["Packaging waste", "lb/year", "Operator restock data × per-SKU package weight", "Annual"],
        ["Diverted material", "lb/year", "On-site recycling bin scale or hauler manifest", "Quarterly"],
        ["Service-visit miles avoided", "miles/year", "Telemetry-based vs. baseline cadence delta", "Annual"],
      ],
    },
    {
      heading: "8. Operator selection criteria",
      items: [
        { check: "Provides ENERGY STAR 4.0 documentation per unit with adjusted-volume math shown." },
        { check: "Provides AHRI refrigerant certificate per unit with charge weight, GWP, and SNAP status." },
        { check: "Operates a fleet ≥ 80% telemetry-equipped; will dedicate telemetry-equipped units to this site." },
        { check: "Carries lines from at least 2 of: Coca-Cola, PepsiCo, Keurig Dr Pepper, KIND, Clif, RXBAR, or equivalent — to source recycled-content packaging at scale." },
        { check: "Provides quarterly sustainability report aligned with GRI 306 (waste) and GRI 302 (energy) at minimum." },
        { check: "Recycling pickup integrated into restock visits; weight or volume logged." },
        { check: "References from at least 2 prior construction or industrial sites of comparable scale." },
      ],
    },
  ],
  footer:
    "This framework is an informational reference. LetUsVending can introduce vetted operators equipped to deliver this spec across U.S. construction markets.",
});

console.log("wrote "+"eco-friendly-vending-for-construction-sites");
