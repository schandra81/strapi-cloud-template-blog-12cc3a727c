import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "eco-friendly-vending-in-offices",
  assetType: "pack",
  title: "Eco-Friendly Office Vending Pack",
  subtitle: "ENERGY STAR + low-GWP + telemetry + packaging + recycling + ESG reporting framework",
  intro:
    "This pack gives facilities, workplace-experience, and sustainability teams a six-layer framework for an office vending program that survives a CDP or SBTi audit. Each layer can be implemented independently, but together they deliver a 50-70% reduction in vending-attributable Scope 1+2 emissions vs. a 2018-era baseline.",
  sections: [
    {
      heading: "1. ENERGY STAR equipment specification",
      paragraph:
        "ENERGY STAR 4.0 for refrigerated beverage vending machines became effective in 2024. The certified product list is published by EPA; every bid should reference a current-year cert.",
      items: [
        { label: "Refrigerated beverage (CRBV)", value: "ENERGY STAR 4.0 certified. Target 800-1,400 kWh/yr (vs. 2,500-4,500 kWh/yr for pre-2014 legacy). LED lighting + sleep mode standard." },
        { label: "Glass-front refrigerated snack/food", value: "ENERGY STAR-certified models from AMS, Crane, Royal Vendors. Target 1,100-1,700 kWh/yr." },
        { label: "Combo machines", value: "Snack ambient half + beverage refrigerated half — verify only refrigerated section against ENERGY STAR. Target combined 900-1,600 kWh/yr." },
        { label: "Ambient snack", value: "Not refrigerated; LED + sleep mode still meaningful. Target ≤ 450 kWh/yr." },
        { label: "Coffee (bean-to-cup)", value: "No ENERGY STAR category yet. Spec: standby ≤ 50 W, idle ≤ 100 W, programmable nightly off-cycle." },
      ],
    },
    {
      heading: "2. Low-GWP refrigerant requirement",
      paragraph:
        "EPA SNAP-approved refrigerants for stand-alone vending: R-290 (propane, GWP 3), R-600a (isobutane, GWP 3), R-744 (CO2, GWP 1). Avoid HFCs (R-404A GWP 3,922; R-134a GWP 1,430).",
      headers: ["Refrigerant", "GWP (AR5)", "EPA SNAP status", "OEM availability"],
      rows: [
        ["R-290 (propane)", "3", "Approved 2011, expanded 2016", "AMS, Crane, Royal Vendors, Vendo, Sanden — all current models"],
        ["R-600a (isobutane)", "3", "Approved", "Mostly imported equipment; growing US availability"],
        ["R-744 (CO2)", "1", "Approved", "Niche, primarily for fresh-food + frozen vending"],
        ["R-134a", "1,430", "Phase-down per AIM Act", "Legacy + transitional only; avoid new bids"],
        ["R-404A", "3,922", "Phase-down per AIM Act, banned in new equipment 2024", "Replace at end-of-life or sooner"],
      ],
    },
    {
      heading: "3. Telemetry + dynamic restock",
      paragraph:
        "Telemetry cuts service-vehicle miles 30-50% by skipping low-velocity stops. Required for any sustainability program above a single machine.",
      items: [
        { label: "Platform options", value: "Cantaloupe Seed Pro, Nayax Onyx, Vagabond, 365 Retail Markets ADM, Crane Streamware. Cellular preferred over Wi-Fi for operator-owned connectivity." },
        { label: "Required telemetry data", value: "Per-SKU velocity, online/offline status, temperature (refrigerated), payment-failure rate, last-restock timestamp. Heartbeat ≤ 15 minutes." },
        { label: "Route optimization", value: "Dynamic routing (Routific, Onfleet, OptimoRoute) replaces fixed weekly visits. Cuts unnecessary stops + miles." },
        { label: "Restock SLA", value: "≤ 8% machines stocked-out at any time, ≤ 24 hour resolution on top-3-velocity SKU stockouts." },
        { label: "ESG-grade data", value: "Operator provides monthly mileage + machine-uptime + per-vend kg CO2e for host Scope 3 Category 1 reporting." },
      ],
    },
    {
      heading: "4. Packaging shift",
      items: [
        { label: "Beverage cans", value: "Aluminum is infinitely recyclable. Specify ≥ 70% recycled content (Aluminum Association data: industry avg ~73%, leaders ≥ 90%)." },
        { label: "PET bottles", value: "≥ 50% rPET; full-rPET available from Niagara, BlueTriton, PepsiCo's Aquafina. Avoid PVC + opaque PET (degrades recycling stream)." },
        { label: "Snack films", value: "Multilayer films (BOPP / PET / metallized) are currently non-recyclable in municipal streams. Push for How2Recycle 'Store Drop-Off' labeling or recyclable mono-material PE alternatives where available (PepsiCo Frito-Lay pilots, Mars Snickers transition)." },
        { label: "Paperboard", value: "FSC- or SFI-certified, ≥ 70% recycled content, recyclable curbside. Preferred over films where SKU format allows (e.g., bar-format vs. pouch)." },
        { label: "Cups + lids (coffee)", value: "BPI-certified compostable (PLA-lined fiber) + paper sleeves. PFAS-free as of 2024 per FDA voluntary agreement." },
      ],
    },
    {
      heading: "5. Bin + diversion infrastructure",
      paragraph:
        "Eco-friendly equipment + packaging is meaningless without diversion infrastructure at the point of disposal. Install bins adjacent to every machine.",
      items: [
        { check: "Three-stream sorting at every machine: landfill / recycle (aluminum + PET + paper) / compost (fiber cup + food waste)" },
        { check: "Bin signage with photo-realistic SKU images, not generic icons (cut contamination by 30-50%)" },
        { check: "Recycling vendor with verified MRF destination — not landfill diversion in name only. Request annual destination report." },
        { check: "Compost vendor for fiber cups + food waste where municipal stream accepts (e.g., Seattle Public Utilities, Cedar Grove, NYC Organics)" },
        { check: "Cup-diversion rate target ≥ 60% in mature programs; quarterly waste-audit verification" },
        { check: "Cigarette + battery + e-waste secondary bins where the workplace policy includes them" },
      ],
    },
    {
      heading: "6. Healthier + lower-impact SKU mix",
      paragraph:
        "Eco-friendly vending is increasingly bundled with the host's wellness program. Plant-based protein, low-sugar, and Fair Trade SKUs reduce both health-attributable and Scope 3 emissions.",
      items: [
        { label: "Beverage shift", value: "≥ 30% sparkling + flat water (lowest packaging Scope 3); ≥ 20% diet / zero-sugar; reduce sugar-sweetened beverages to ≤ 40% of beverage facings." },
        { label: "Snack shift", value: "≥ 30% Fit Pick or FDA-aligned 'better-for-you' SKUs (≤ 230 cal, ≤ 35% calories from fat, ≤ 10% saturated fat, ≤ 200 mg sodium, ≤ 35% sugar by weight)." },
        { label: "Plant-based + Non-GMO", value: "≥ 20% plant-based protein SKUs; ≥ 15% Non-GMO Project Verified or USDA Organic." },
        { label: "Fair Trade + Rainforest Alliance", value: "Coffee 100% Fair Trade or Rainforest Alliance. Chocolate ≥ 50% Fair Trade." },
      ],
    },
    {
      heading: "7. ESG reporting + audit support",
      items: [
        { label: "GHG Protocol Scope 3 Category 1", value: "Operator supplies annual kg CO2e/vend with methodology. Reconciles into host's purchased-goods-and-services emissions." },
        { label: "CDP Climate Change", value: "Vending allocates into C6.3 (Scope 3); supplier data scored per CDP Supply Chain methodology." },
        { label: "TCFD / IFRS S2", value: "Quarterly trajectory toward host's published net-zero or science-based target." },
        { label: "ENERGY STAR Portfolio Manager", value: "Tenant + landlord can log machine kWh under plug-load if metered." },
        { label: "LEED O+M / WELL", value: "MR Credit (Purchasing — Ongoing): vending program contributes to facility-purchased products with environmental attributes. WELL Nourishment N02 + N03 align with healthier SKU mix." },
        { label: "SBTi", value: "Operator should be on a 1.5°C pathway (4.2% absolute Scope 1+2 reduction per year)." },
      ],
    },
    {
      heading: "8. Procurement clause checklist",
      items: [
        { check: "100% ENERGY STAR refrigerated equipment at install + replacement" },
        { check: "100% low-GWP refrigerant (R-290 or R-600a) on refrigerated equipment" },
        { check: "Telemetry on every machine with annual emission factor per vend supplied" },
        { check: "Packaging mix: ≥ 50% rPET, ≥ 70% recycled aluminum, How2Recycle labeling on every SKU where available" },
        { check: "Three-bin diversion infrastructure adjacent to every machine; verified MRF + compost destination" },
        { check: "Healthier SKU mix: ≥ 30% Fit Pick / FDA better-for-you; ≥ 20% plant-based" },
        { check: "Annual ESG data package: kWh per machine, refrigerant inventory, vehicle miles, packaging mix, diversion rate" },
        { check: "Operator commits to a verified emissions-reduction trajectory (SBTi or equivalent)" },
      ],
    },
  ],
  footer:
    "This pack is operator-neutral and informational. LetUsVending helps host sustainability + facilities teams scope eco-aligned vending programs with operators positioned to support CDP / SBTi-grade reporting.",
});

console.log("wrote " + "eco-friendly-vending-in-offices");
