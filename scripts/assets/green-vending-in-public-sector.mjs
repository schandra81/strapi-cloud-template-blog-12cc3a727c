import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "green-vending-in-public-sector",
  assetType: "playbook",
  title: "Public-Sector Green Vending Playbook",
  subtitle: "Eight dimensions, FAR Part 23 / EO 14057 framework, small-business credentialing, annual reporting template",
  intro:
    "Federal, state, and municipal vending procurement increasingly incorporates sustainability and small-business criteria as scoring factors. This playbook codifies the eight dimensions of green vending, the FAR Part 23 and Executive Order 14057 framework, the credentialing path for small-business vendors, and the annual reporting template that procurement reviewers expect.",
  sections: [
    {
      heading: "1. Regulatory framework",
      paragraph:
        "Public-sector green vending sits on top of three overlapping authorities. Solicitation language typically references one or more of these directly.",
      items: [
        { label: "FAR Part 23 — Environment, Energy, Water Efficiency, Renewable Energy, Sustainable Acquisition", value: "Federal Acquisition Regulation Part 23 directs agencies to purchase products that are energy-efficient, water-efficient, biobased, and made with recovered materials. Subparts 23.1-23.10 codify ENERGY STAR, EPEAT, USDA BioPreferred, and CPG (Comprehensive Procurement Guidelines) requirements." },
        { label: "Executive Order 14057 (Catalyzing Clean Energy Industries)", value: "December 2021. Federal agencies pursue 100% carbon-pollution-free electricity by 2030, net-zero procurement by 2050, and a 65% reduction in scope-1+2 emissions by 2030. Vending contracts increasingly require energy-efficient equipment + electronic reporting." },
        { label: "GSA Sustainable Facilities Tool / state procurement codes", value: "GSA SFTool aligns federal placements. States (CA, NY, MA, WA, OR) have parallel codes — CA PCC §12200-12217 + Buy Clean California Act AB-262 are most common scoring references." },
      ],
    },
    {
      heading: "2. The eight dimensions of green vending",
      headers: ["Dimension", "What it covers", "Operator-attestable proof"],
      rows: [
        ["Energy efficiency", "ENERGY STAR refrigerated equipment, LED lighting, low-power modes", "ENERGY STAR product list ID per machine + nameplate kWh"],
        ["Refrigerant transition", "HFC → HFO or CO2 refrigerants per AIM Act", "EPA SNAP-approved refrigerant per unit"],
        ["Sustainable products", "USDA BioPreferred, organic, fair-trade SKUs", "Per-SKU certification + % of facings"],
        ["Packaging", "Recyclable / compostable / reduced packaging", "Vendor SKU data + recycling stream"],
        ["Waste + recycling", "Recycling bins co-located with machines; closed-loop bottle return", "Photo + ops plan"],
        ["Local + small-business sourcing", "% of SKUs from local + DBE/MBE/WBE suppliers", "Vendor list + certification IDs"],
        ["Transportation", "Route optimization, EV/CNG fleet share", "Operator fleet roster + telematics"],
        ["Reporting", "Annual energy + waste + sourcing report", "Annual report template (see §7)"],
      ],
    },
    {
      heading: "3. Equipment specification",
      items: [
        { number: 1, title: "ENERGY STAR refrigerated equipment", description: "All refrigerated machines on the ENERGY STAR Refrigerated Beverage Vending Machine product list. Tier 2 spec saves 30-50% vs non-rated equivalents per ENERGY STAR program data." },
        { number: 2, title: "LED lighting + low-power mode", description: "LED interior + signage lighting; idle-state low-power mode reducing kWh by 15-25% during off-hours; occupancy-sensor-triggered display where placement permits." },
        { number: 3, title: "Refrigerant compliance", description: "AIM Act compliance — HFO-1234yf, HFO-1234ze, R-290 propane, or R-744 CO2 per EPA SNAP. Phase-out of R-134a and R-404A on the published schedule." },
        { number: 4, title: "Telemetry-driven routing", description: "Cantaloupe / Nayax / 365 Retail Markets telemetry feeds route optimization software (Vendsoft, VendingMetrics, VendMAX) to reduce truck rolls 20-40%." },
      ],
    },
    {
      heading: "4. Sustainable product mix",
      paragraph:
        "Solicitations frequently score the % of product facings that meet one or more sustainability criteria. Target 30-50% green facings to score competitively in federal evaluations.",
      items: [
        { check: "USDA Organic-certified SKUs ≥ 15% of facings" },
        { check: "Fair Trade USA or Fair Trade International certified coffee + chocolate" },
        { check: "Non-GMO Project verified ≥ 20% of facings" },
        { check: "USDA BioPreferred-certified packaging where applicable (FAR 23.404)" },
        { check: "Local-sourced (within 250 miles per CA-style code) ≥ 20% of facings" },
        { check: "DBE / MBE / WBE / SDB-supplied SKUs ≥ 10% of facings; SBA Mentor-Protégé alignment where prime is large" },
      ],
    },
    {
      heading: "5. Small-business credentialing path",
      items: [
        { number: 1, title: "SBA size standard", description: "NAICS 311991 (food brokers) and 454210 (vending machine operators) — SBA size standard $15-$33M annual revenue depending on category." },
        { number: 2, title: "SAM.gov registration", description: "Active System for Award Management registration with current SBA representations + certifications, NAICS codes selected, and small-business set-aside indicator." },
        { number: 3, title: "8(a) + HUBZone + WOSB + SDVOSB", description: "Specific socioeconomic certifications expand set-aside eligibility. 8(a) is 9-year program for socially + economically disadvantaged firms; HUBZone covers placement in Historically Underutilized Business Zones." },
        { number: 4, title: "DBE / MBE / WBE state-level", description: "State + transit-agency DBE certifications (per 49 CFR Part 26 for FTA-funded placements). NMSDC for MBE, WBENC for WBE — multi-state recognition." },
        { number: 5, title: "Randolph-Sheppard set-aside", description: "Federal cafeteria + vending placements have priority for blind vendors under Randolph-Sheppard Act (20 USC §107). State licensing agency partnership often required for federal placements." },
      ],
    },
    {
      heading: "6. Operational support structure",
      items: [
        { label: "Restock cadence", value: "Telemetry-driven, route-optimized. EV/CNG fleet preferred for federal placements per EO 14057. Restock visits logged with kWh + miles driven for annual report." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain excursion, payment failure — <24 hr ack + <24 hr resolution." },
        { label: "Recycling + bottle return", value: "Operator coordinates recycling bin co-location with facility. Bottle deposit return (CA, CT, HI, IA, ME, MA, MI, NY, OR, VT) handled per state CRV program." },
        { label: "Sustainability roadmap", value: "Annual sustainability roadmap presented to procurement — equipment replacement schedule, % facing targets, fleet transition milestones." },
      ],
    },
    {
      heading: "7. Annual sustainability report — template",
      paragraph:
        "Procurement reviewers expect a single annual report covering energy, waste, sourcing, and small-business performance against the contract baseline. Use this section structure verbatim.",
      items: [
        { check: "Energy: total kWh per machine, ENERGY STAR product list IDs, low-power-mode runtime %, kWh/transaction ratio vs prior year" },
        { check: "Refrigerant: per-machine refrigerant type, AIM Act compliance status, retirement schedule for any R-134a / R-404A units" },
        { check: "Product mix: % facings by sustainability tier (organic, fair-trade, BioPreferred, local, DBE-supplied)" },
        { check: "Packaging + waste: recyclable %, compostable %, weight of bottle return diverted from landfill" },
        { check: "Transportation: total fleet miles, % miles on EV/CNG, route-optimization savings vs baseline" },
        { check: "Small-business: % of operator spend with certified small business, DBE/MBE/WBE/HUBZone/8(a) breakdown" },
        { check: "Forward-year roadmap: equipment retirements, fleet transition milestones, sustainability target updates" },
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, ENERGY STAR + EO 14057 compliance attestation, and annual sustainability reporting for federal, state, and municipal placements.",
});

console.log("wrote "+"green-vending-in-public-sector");
