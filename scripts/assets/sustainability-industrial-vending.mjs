import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "sustainability-industrial-vending",
  assetType: "pack",
  title: "Sustainable Industrial Vending Framework",
  subtitle: "Energy, refrigerant, packaging, e-waste, and ESG reporting",
  intro:
    "Sustainable industrial vending touches five regulated and reportable areas: energy (ENERGY STAR, ASHRAE 90.1), refrigerant (EPA SNAP + AIM Act 2020), packaging (state EPR laws + BPI compostable standards), e-waste (state e-waste statutes + R2/RIOS), and ESG reporting (SASB FB-FR, GRI 305 + 306). This framework codifies all five so a facility is equipped to embed vending into its sustainability program rather than treat it as an exempt category.",
  sections: [
    {
      heading: "1. Energy",
      paragraph:
        "Vending equipment energy use is dominated by refrigerated units running 24/7. ENERGY STAR-certified vending machines use 30-50% less energy than non-certified peers per EPA Energy Star program data.",
      items: [
        { label: "ENERGY STAR certification", value: "Refrigerated beverage coolers + glass-front vendors carry ENERGY STAR certification; verify with EPA Energy Star Product Finder." },
        { label: "LED lighting", value: "Internal display lighting LED-only; reduces energy 50-70% vs fluorescent." },
        { label: "Adaptive lighting / sleep mode", value: "Motion-sensor lighting + low-power sleep mode after configurable idle (typical 5-15 min)." },
        { label: "ASHRAE 90.1 alignment", value: "Equipment meets state energy code where ASHRAE 90.1 adopted; California Title 24 alignment in CA." },
        { label: "Annual kWh reporting", value: "Operator provides per-machine annual kWh via telemetry; included in ESG report." },
      ],
    },
    {
      heading: "2. Refrigerant",
      paragraph:
        "EPA AIM Act of 2020 + SNAP (Significant New Alternatives Policy) rules drive HFC phasedown. Refrigerated vending equipment moves to lower-GWP refrigerants — R-290 (propane), R-744 (CO₂), or HFO blends.",
      headers: ["Refrigerant", "GWP", "Status", "Notes"],
      rows: [
        ["R-134a", "1430", "Phasing out under AIM Act", "Avoid in new equipment purchases"],
        ["R-404A", "3922", "Phasing out", "Avoid"],
        ["R-290 (propane)", "3", "Allowed under SNAP for self-contained units", "Charge ≤ 150g per unit; UL 60335-2-89"],
        ["R-744 (CO₂)", "1", "Allowed", "Higher-pressure system; complex servicing"],
        ["HFO blends (R-454B, R-1234yf)", "< 700", "Allowed", "Transition refrigerants"],
      ],
    },
    {
      heading: "3. Packaging",
      paragraph:
        "Packaging EPR laws now active in CA (SB 54), OR, ME, CO, MN. Operators must report packaging material and may pay fees. Compostable certification follows BPI / ASTM D6400 / D6868 standards.",
      items: [
        { label: "Recyclable single-stream", value: "PET bottles, aluminum cans, paperboard cartons — recyclable in most municipal streams." },
        { label: "Compostable hot-food packaging", value: "BPI-certified compostable per ASTM D6400 (compostable in industrial facility) where the facility has commercial composting." },
        { label: "Reusable / return-deposit", value: "In CA, MI, NY, OR, VT (and others) — bottle return on covered SKUs; operator participates in deposit program." },
        { label: "EPR reporting", value: "Operator reports packaging material weight to PRO (Producer Responsibility Organization) per state EPR law." },
        { label: "Lightweighting", value: "Single-serve packaging gauge minimization where it doesn't compromise barrier properties." },
      ],
    },
    {
      heading: "4. E-waste",
      paragraph:
        "End-of-life vending equipment is regulated under state e-waste statutes. R2 (Responsible Recycling) or RIOS (Recycling Industry Operating Standard) certified recyclers handle electronic components, refrigeration compressors, and refrigerant recovery.",
      items: [
        { check: "End-of-life machine handled by R2-certified or RIOS-certified recycler." },
        { check: "Refrigerant recovered per EPA Section 608 by certified technician." },
        { check: "Compressor handled per RCRA (universal waste rules in most states)." },
        { check: "Cellular modems + payment hardware data-wiped per NIST SP 800-88 before recycling." },
        { check: "Documentation of disposition — recycler manifest + e-Stewards or R2 certificate." },
        { check: "State e-waste statutes (CA, NY, MA, IL, others) require manifest retention 3-5 years." },
      ],
    },
    {
      heading: "5. ESG reporting alignment",
      paragraph:
        "Vending fits into facility ESG reporting under SASB FB-FR (Food Retailers) and GRI 305 (Emissions) + 306 (Waste). Five metrics are reportable.",
      headers: ["Metric", "Framework", "Frequency"],
      rows: [
        ["kWh / machine / year", "SASB FB-FR-130a; GRI 302-1", "Annual"],
        ["Refrigerant type + charge", "SASB FB-FR-110a.1; EPA AIM Act report", "Annual"],
        ["Packaging weight by material", "GRI 306-3; state EPR PRO report", "Annual"],
        ["E-waste disposition", "GRI 306-4; state e-waste annual report", "Annual"],
        ["Donation volume", "GRI 413-1; align with Feeding America impact report", "Annual"],
      ],
    },
    {
      heading: "6. Operator capability checklist",
      items: [
        { check: "Operator's standard equipment is ENERGY STAR certified for refrigerated units." },
        { check: "Operator's new-equipment purchases use AIM Act compliant refrigerants (R-290 / R-744 / HFO blend)." },
        { check: "Operator reports per-machine annual kWh + refrigerant charge to host." },
        { check: "Operator participates in state bottle-return + EPR PRO programs where applicable." },
        { check: "Operator's end-of-life equipment handled by R2 or RIOS certified recycler with manifest." },
        { check: "Operator's donation program documented with Feeding America partner MOU." },
        { check: "Operator delivers annual ESG metric pack aligned to SASB + GRI." },
      ],
    },
    {
      heading: "7. RFP language",
      items: [
        { label: "ENERGY STAR clause", value: "All refrigerated vending equipment placed at host facilities is ENERGY STAR certified; operator provides certification confirmation in proposal." },
        { label: "Refrigerant clause", value: "New equipment placements use refrigerant with GWP ≤ 700 per AIM Act; operator provides refrigerant data sheet for each machine." },
        { label: "Packaging EPR clause", value: "Operator reports packaging material weight by SKU to host annually; operator pays applicable state EPR fees." },
        { label: "E-waste clause", value: "Operator handles end-of-life equipment via R2 or RIOS certified recycler; provides manifest within 30 days of decommission." },
        { label: "ESG reporting clause", value: "Operator delivers annual ESG metric pack covering energy, refrigerant, packaging, e-waste, and donation volume aligned to SASB FB-FR + GRI 305/306." },
      ],
    },
    {
      heading: "8. Annual sustainability review",
      items: [
        { check: "ENERGY STAR certification refresh on all refrigerated equipment." },
        { check: "Refrigerant inventory by machine; phase-out plan for any GWP > 700 units." },
        { check: "Packaging material report submitted to state EPR PRO (where applicable)." },
        { check: "E-waste manifests filed for any equipment decommissioned in the year." },
        { check: "Donation volume report from operator with Feeding America partner attestation." },
        { check: "ESG metric pack delivered to host sustainability lead." },
      ],
    },
  ],
  footer:
    "This framework is a working sustainability reference. Confirm state EPR + e-waste statutes with the facility sustainability lead and EPA AIM Act compliance with the operator before commit.",
});

console.log("wrote "+"sustainability-industrial-vending");
