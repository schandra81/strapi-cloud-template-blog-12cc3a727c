import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "eco-friendly-vending-for-retail",
  assetType: "pack",
  title: "Eco-Friendly Retail Vending Spec",
  subtitle: "ENERGY STAR, low-GWP refrigerant, sustainable planogram, ESG reporting",
  intro:
    "Retail vending is one of the easier places to wire sustainability into procurement — equipment is standardized, energy data is readily metered, and SKU choice is flexible. This pack codifies the equipment specification (ENERGY STAR, low-GWP refrigerant, LED, EMS), the sustainable planogram, and the ESG reporting structure that lets your retail brand land vending in the corporate sustainability narrative.",
  sections: [
    {
      heading: "1. Why retail vending is a leverage point",
      paragraph:
        "A retail-store refrigerated vending machine that runs 24/7 draws 6-10 kWh/day on legacy equipment vs. 2-3 kWh/day on ENERGY STAR Tier 2 with EMS. Across a 50-store chain with 2 machines per store, the gap is 110,000-180,000 kWh/year — a measurable line item in Scope 2, plus direct OPEX savings of $9,000-30,000/year depending on grid rate.",
    },
    {
      heading: "2. Equipment specification — eco-spec checklist",
      headers: ["Spec area", "Requirement", "Reference"],
      rows: [
        ["Refrigerated cabinet certification", "ENERGY STAR-qualified (Refrigerated Beverage Vending Machines)", "energystar.gov"],
        ["Refrigerant", "R-290 (propane) or R-744 (CO2); ≤ 150 GWP", "EPA SNAP Rule 26 (2023)"],
        ["Cabinet lighting", "LED, 4000-5000K color temp", "ENERGY STAR LED spec"],
        ["Energy management controller", "Occupancy + scheduled set-back EMS (USA Tech, Cantaloupe EMS, VendingMiser or comparable)", "Operator equipment spec"],
        ["Variable-speed compressor", "Preferred — modulates with load", "Manufacturer cut sheet"],
        ["Refrigeration door insulation", "Insulated glass-door or solid-door variant; verify U-factor", "Manufacturer cut sheet"],
        ["End-of-life / recycle program", "Operator commits to certified recycling at decommission", "Operator contract clause"],
        ["Refrigerant recovery at decommission", "Recovery per Clean Air Act 608 — operator's EPA 608-certified technician", "EPA Clean Air Act 608"],
      ],
    },
    {
      heading: "3. Sustainable planogram",
      paragraph:
        "Eco-conscious SKU mix complements equipment-side savings. Three dimensions matter — packaging, supply chain, and product category.",
      items: [
        { label: "Packaging", value: "Aluminum + paperboard preferred (higher recycling rate vs. PET in most jurisdictions). Where PET is used, prioritize ≥ 25% recycled content (rPET). Avoid mixed-material packaging that cannot be recycled curbside." },
        { label: "Supply chain", value: "Prioritize SKUs from suppliers with documented Scope 3 / sustainability reporting (PepsiCo, Coca-Cola, Mondelez, Hershey all publish annual sustainability reports with packaging + emissions data)." },
        { label: "Better-for-you share", value: "≥ 30% of slots meet better-for-you criteria (USDA dietary guideline aligned)." },
        { label: "Plant-based / lower-footprint", value: "Plant-based protein bars, oat / almond / soy milk-based drinks, plant-based snack lines (Beyond, KIND, RXBAR, Clif). 2-4 slots." },
        { label: "Local / regional", value: "Where retail brand supports local-sourcing narrative, 1-2 slots for regional snack brands." },
      ],
    },
    {
      heading: "4. Recycling + waste coordination",
      paragraph:
        "Vending generates predictable waste streams. Coordinate with retail waste-management contractor.",
      items: [
        { check: "Recycling bin co-located with each vending placement (aluminum + paperboard + PET stream)." },
        { check: "Bin signage matches local recycling stream rules (single-stream vs. dual-stream varies by municipality)." },
        { check: "Operator restocks remove all packaging waste from machine area at each visit." },
        { check: "Refrigeration condensate captured + drained to floor drain per manufacturer." },
        { check: "End-of-life equipment routed to certified e-waste / refrigerant-recovery vendor; certificate retained." },
        { check: "Annual waste-stream audit — recycling capture rate (target ≥ 60% by weight)." },
      ],
    },
    {
      heading: "5. ESG reporting — Scope 1 / 2 / 3 framework",
      paragraph:
        "Vending program metrics land in different scopes. Track separately + roll up appropriately.",
      headers: ["Metric", "GHG scope", "Source"],
      rows: [
        ["Electricity (machine kWh)", "Scope 2 — location-based", "Sub-meter or operator portal"],
        ["Refrigerant leakage (operating)", "Scope 1", "Operator service records"],
        ["Refrigerant recovery (decommission)", "Scope 1 (avoided emission)", "EPA 608 recovery certificate"],
        ["Product packaging waste", "Scope 3, Cat 12 (end-of-life)", "SKU + packaging mass data"],
        ["Supply-chain emissions (SKU production)", "Scope 3, Cat 1 (purchased goods)", "Supplier sustainability reports"],
        ["Operator vehicle emissions (restock route)", "Scope 3, Cat 4 (upstream transport)", "Operator fleet data"],
      ],
    },
    {
      heading: "6. ENERGY STAR + utility rebate path",
      paragraph:
        "Many utilities offer prescriptive rebates on ENERGY STAR vending refresh + EMS retrofits. Coordinate with operator and utility account rep.",
      items: [
        { label: "ENERGY STAR prescriptive rebate", value: "$100-300 per qualifying machine in many utility programs (varies by territory). Operator submits rebate paperwork at install." },
        { label: "EMS controller rebate", value: "Some utilities (e.g., PG&E, ConEd, Xcel) offer separate rebate on EMS retrofit (~$50-150 per unit)." },
        { label: "Custom / measured-savings rebate", value: "For large multi-store deployments (50+ machines), utility may offer measured-savings rebate per metered kWh reduction." },
        { label: "Carbon offset / sustainability fund", value: "Some corporate sustainability programs internally allocate carbon-equivalent credits to projects like vending refresh. Document for internal ESG attribution." },
      ],
    },
    {
      heading: "7. RFP language — eco-spec requirements",
      items: [
        { check: "All refrigerated equipment ENERGY STAR-qualified at install." },
        { check: "Refrigerant ≤ 150 GWP (R-290, R-744, or comparable)." },
        { check: "Cabinet lighting LED, 4000-5000K." },
        { check: "EMS / occupancy controller on every refrigerated unit." },
        { check: "Variable-speed compressor preferred where available." },
        { check: "Operator provides monthly per-machine kWh data via portal or sub-meter integration." },
        { check: "Refrigerant leak / service records available for Scope 1 reporting." },
        { check: "Packaging-waste audit data shared annually." },
        { check: "End-of-life recovery via certified e-waste + EPA 608 refrigerant-recovery technician; certificate provided." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to translate retail sustainability goals into operator specifications, RFP language, and the ESG reporting + utility-rebate coordination framework. The operator selected via this framework executes the equipment refresh, planogram, and operating reports.",
    },
  ],
  footer:
    "Informational reference. ENERGY STAR specifications, EPA SNAP rules, and utility rebate programs evolve; confirm current eligibility at install + each refresh cycle.",
});

console.log("wrote "+"eco-friendly-vending-for-retail");
