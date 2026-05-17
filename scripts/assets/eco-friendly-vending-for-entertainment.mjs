import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "eco-friendly-vending-for-entertainment",
  assetType: "template",
  title: "Venue Eco-Vending Framework",
  subtitle: "Six-dimension spec, certified-SKU curation, ESG data feed integration, operator MSA template",
  intro:
    "Use this framework to specify and operate an eco-vending program at an entertainment venue (theater, arena, stadium, theme park, convention center). Each section is capability-framed and references EPA ENERGY STAR, AHRI 1410 (vending machine efficiency), Green Seal + USDA BioPreferred + BPI compostability certifications, FTC Green Guides for environmental claims, and FDA Food Code 2022 + FALCPA for the food-safety baseline. Operator capabilities should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Six-dimension eco specification",
      paragraph:
        "Eco-vending is not a single attribute. The six dimensions below cover the lifecycle of a vending unit and the products inside.",
      headers: ["Dimension", "Spec target", "Reference standard"],
      rows: [
        ["1. Energy efficiency", "ENERGY STAR certified vending equipment; ≤ 1,800 kWh/year per unit at standard test conditions", "EPA ENERGY STAR + AHRI 1410"],
        ["2. Refrigerant + cold-chain", "HFC-free refrigerant (R-290, R-744 / CO2); GWP < 150", "SNAP-approved per EPA SNAP + EU F-Gas"],
        ["3. Packaging", "≥ 80% of facings in recyclable, compostable (BPI), or refillable packaging", "BPI + USDA BioPreferred + How2Recycle labels"],
        ["4. Product certifications", "Defined certified-SKU floor (Fair Trade, Rainforest Alliance, USDA Organic, Non-GMO, B Corp)", "Per-certification body + FTC Green Guides"],
        ["5. Waste + recycling", "Co-located 3-bin waste sort (landfill / recycle / compost); operator removes its own packaging waste", "EPA WasteWise + venue policy"],
        ["6. ESG reporting", "Quarterly data feed: kWh, refrigerant inventory, packaging mix, certified-SKU %, waste tonnage diverted", "GRI 305 + SASB Food Retailers"],
      ],
    },
    {
      heading: "2. Certified-SKU curation",
      paragraph:
        "Define a certified-SKU floor in the contract — for example, ≥ 60% of facings carry at least one third-party sustainability certification. Operator should attest in writing and provide quarterly chain-of-custody documentation.",
      items: [
        { label: "Fair Trade USA / Fairtrade International", value: "Coffee, tea, cocoa, sugar, banana. Operator provides FLO-CERT or Fair Trade USA chain-of-custody certificate." },
        { label: "Rainforest Alliance", value: "Coffee, tea, cocoa, banana. Operator provides RA certificate + traceability ID." },
        { label: "USDA Organic", value: "Snack, beverage, dairy. Operator provides NOP (National Organic Program) certificate." },
        { label: "Non-GMO Project Verified", value: "Snack, beverage, dairy. Operator provides Non-GMO Project verification ID." },
        { label: "B Corp", value: "Brand-level certification. Operator provides current B Corp certification of supplier." },
        { label: "BPI compostable + How2Recycle", value: "Packaging certifications applied to disposables, cups, lids, utensils, snack film." },
      ],
    },
    {
      heading: "3. Equipment specification — ENERGY STAR + refrigerant",
      items: [
        { label: "ENERGY STAR refrigerated beverage vending", value: "AMS, Crane, Royal, Vendo, USI with ENERGY STAR certification; ≤ 1,800 kWh/year for full-size beverage vending per ENERGY STAR v3.1 spec." },
        { label: "ENERGY STAR refrigerated combo + snack", value: "Combo + snack vending ENERGY STAR-certified or labeled where category is covered." },
        { label: "Refrigerant", value: "R-290 (propane) or R-744 (CO2) preferred (GWP < 5); R-513A or R-454B acceptable transitional refrigerants (GWP < 600). Avoid R-404A or R-134a." },
        { label: "LED lighting", value: "10+ year life LED interior + face lighting; dimmable + occupancy-sensor-equipped where feasible." },
        { label: "Vending Misers / occupancy controls", value: "USA Technologies VendingMiser, Cantaloupe SmartPower, or comparable PIR + thermostat sensors; typical 30-40% energy reduction at low-traffic placements." },
      ],
    },
    {
      heading: "4. Operator capability checks",
      items: [
        { check: "Operator should attest to ENERGY STAR-certified equipment for all refrigerated units and provide AHRI 1410 + ENERGY STAR documentation on file." },
        { check: "Operator should attest to HFC-free or low-GWP refrigerant on all new placements; transition plan for legacy units." },
        { check: "Operator should attest to ≥ X% certified-SKU floor (define in contract) with quarterly chain-of-custody documentation." },
        { check: "Operator should attest to FTC Green Guides compliance for any environmental claim made on the machine face, packaging, or marketing material." },
        { check: "Operator should attest to packaging-waste removal cadence + diversion-rate reporting (target ≥ 60% diversion)." },
        { check: "Operator should attest to ESG data feed delivery (kWh, refrigerant inventory, packaging mix, certified %, tonnage diverted) on a quarterly cadence." },
        { check: "Operator should attest to NSF/ANSI 7 + 25 + FDA Food Code + FALCPA baselines unchanged by the eco overlay." },
      ],
    },
    {
      heading: "5. ESG data feed integration",
      paragraph:
        "Where the venue publishes a sustainability report (GRI, SASB, CDP, TCFD-aligned), operator-side vending data should plug in. Define the data feed below.",
      items: [
        { label: "Energy", value: "Per-machine kWh per month from operator's telemetry; aggregated and reported quarterly. Maps to GRI 302-1." },
        { label: "Refrigerant", value: "Refrigerant inventory + leak-report log; tied to Scope 1 emissions calculation. Maps to GRI 305-1." },
        { label: "Scope 3 — purchased goods", value: "Per-SKU embodied carbon estimate where supplier provides it; aggregated quarterly. Maps to GRI 305-3 + SASB FB-FR-110a.1." },
        { label: "Waste", value: "Operator-removed packaging tonnage + diversion-rate %. Maps to GRI 306-2 + SASB FB-FR-150a.1." },
        { label: "Certified-product %", value: "Per-quarter % of facings with each certification body. Maps to SASB FB-FR-430a.2." },
        { label: "Format", value: "Operator delivers CSV or API feed monthly to venue ESG team; integration option with Workiva, Sphera, Persefoni, or comparable ESG platform." },
      ],
    },
    {
      heading: "6. Operator MSA — eco-overlay provisions",
      paragraph:
        "Layer the eco-overlay onto a standard vending Master Services Agreement. Specific provisions below.",
      items: [
        { label: "Sustainability rep + warranty", value: "Operator reps + warrants ENERGY STAR + refrigerant + certified-SKU compliance; periodic re-attestation required (annual)." },
        { label: "Audit rights", value: "Venue may audit operator's ESG data feed accuracy annually; discrepancy > 5% triggers operator-paid third-party audit." },
        { label: "Certified-SKU floor", value: "Operator attests to maintaining ≥ X% certified-SKU facings; quarterly compliance audit; sustained drop > 5 pts below floor triggers cure period." },
        { label: "FTC Green Guides compliance", value: "Operator reps + warrants no false or unsubstantiated environmental claims; indemnifies venue for any FTC enforcement action arising from operator claims." },
        { label: "Equipment refresh + lifecycle", value: "Operator commits to equipment refresh schedule (typically 7-10 years) with each refresh meeting or exceeding the ENERGY STAR + refrigerant standard at time of refresh." },
        { label: "Termination + transition", value: "Standard termination clauses apply; eco-overlay obligations survive termination for past performance periods + ongoing reporting obligations." },
      ],
    },
    {
      heading: "7. Reporting + quarterly review",
      items: [
        { check: "Monthly: per-machine kWh, transactions, basket, refund + downtime, ESG-flag SKU velocity." },
        { check: "Quarterly: certified-SKU % audit + chain-of-custody documentation review." },
        { check: "Quarterly: ESG data feed delivery + reconciliation with venue's ESG platform." },
        { check: "Quarterly: packaging-waste tonnage + diversion rate + audit photos." },
        { check: "Annual: full ENERGY STAR + refrigerant + certification recertification; equipment refresh planning." },
        { check: "Annual: contract review — certified-SKU floor reset, sustainability target update aligned with venue's net-zero or 1.5°C-aligned trajectory." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, environmental-compliance, or ESG-reporting advice. Environmental claims must comply with the FTC Green Guides (16 CFR Part 260) and applicable state false-advertising laws. ESG reporting frameworks evolve (GRI, SASB → ISSB, CDP, CSRD); confirm current standards with the venue's sustainability team.",
});

console.log("wrote " + "eco-friendly-vending-for-entertainment");
