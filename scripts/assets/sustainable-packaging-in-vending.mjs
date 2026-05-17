import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "sustainable-packaging-in-vending",
  assetType: "pack",
  title: "Sustainable Vending Packaging Pack",
  subtitle: "Seven shifts, supplier procurement criteria, and corporate sustainability mandate alignment",
  intro:
    "Packaging often equals or exceeds machine electricity in a vending program's Scope 3 emissions, and it is the most visible touchpoint employees see. This pack lays out the seven highest-impact packaging shifts, the supplier criteria that hold them in place, and how each shift aligns with corporate ESG mandates (CDP, SBTi, EPR-readiness, SASB FB-NB-410a).",
  sections: [
    {
      heading: "1. Seven sustainable packaging shifts",
      paragraph:
        "Apply in priority order. Each shift typically delivers measurable Scope 3 reduction without dependency on the next, but combining all seven cuts packaging emissions 50-70% per vend.",
      items: [
        { number: 1, title: "Aluminum-first beverage strategy", description: "Aluminum is infinitely recyclable with a market value of $1,200-1,800/ton. Specify aluminum cans over PET wherever the SKU exists (LaCroix, Spindrift, Liquid Death, Olipop, Recess). Industry-average recycled content ~73%; leaders ≥ 90%." },
        { number: 2, title: "rPET on remaining bottled SKUs", description: "Specify ≥ 50% rPET; leaders (Niagara, BlueTriton, PepsiCo Aquafina) ship 100% rPET. Avoids virgin PET production (1.9-2.3 kg CO2e/kg vs. rPET 0.45-0.6 kg CO2e/kg)." },
        { number: 3, title: "Mono-material recyclable snack films", description: "Push for PE-mono films + How2Recycle Store Drop-Off labeling. PepsiCo Frito-Lay 'Tasty Tomorrow,' Mars Snickers and KIND wrappers in transition. Avoid PVC + PVdC + chlorinated barriers." },
        { number: 4, title: "FSC/SFI paperboard with high recycled content", description: "≥ 70% recycled content, recyclable curbside. Preferred over films where bar format works (KIND Bars in paperboard cartons, RXBAR, Larabar)." },
        { number: 5, title: "Compostable hot-beverage cups + fiber lids", description: "BPI-certified compostable cup + PLA lid OR fiber lid. PFAS-free per FDA voluntary phase-out (2024). Cup-diversion rate ≥ 60% target in mature programs." },
        { number: 6, title: "Eliminate plastic stirrers + cutlery", description: "Birchwood stirrers, FSC-paperboard stirrers, no-cutlery defaults. Many jurisdictions (CA SB 1276, NYC, Seattle) require by-request-only." },
        { number: 7, title: "Refillable + reusable systems where infrastructure exists", description: "Bottle-fill stations adjacent to vending. Reusable cup deposit programs (TURN Systems, r.Cup) at higher-ed + corporate campuses. Cuts single-use beverage volume 30-50%." },
      ],
    },
    {
      heading: "2. Material comparison + emission factors",
      headers: ["Material", "kg CO2e/kg (LCA-typical)", "Recyclability", "Notes"],
      rows: [
        ["Aluminum (virgin)", "8.1-12.0", "Infinite", "Most reduced when high-recycled-content"],
        ["Aluminum (95% recycled)", "0.5-0.9", "Infinite", "Best-in-class beverage packaging"],
        ["Glass (virgin)", "0.6-0.8", "Infinite", "Heavy → freight emissions offset benefit"],
        ["PET (virgin)", "1.9-2.3", "Curbside in most US", "Avoid; switch to rPET"],
        ["PET (100% rPET)", "0.45-0.6", "Curbside", "Specify; verify resin source"],
        ["PE film (mono)", "1.7-2.1", "Store Drop-Off (How2Recycle)", "Mono preferred over multilayer"],
        ["BOPP / multilayer film", "1.8-2.5", "Not curbside; landfill-bound", "Avoid; pressure suppliers"],
        ["Paperboard (recycled)", "0.8-1.1", "Curbside", "FSC/SFI preferred"],
        ["PLA bioplastic", "1.5-2.0", "Industrial compost only", "Verify local infrastructure exists"],
        ["Fiber pulp molded", "0.8-1.2", "Compost", "Strong for trays + lids"],
      ],
    },
    {
      heading: "3. Supplier procurement criteria",
      paragraph:
        "Eco-aligned vending operators apply these criteria when adding SKUs to the catalog. Host procurement should hold them to it.",
      items: [
        { check: "Aluminum suppliers attest to ≥ 70% recycled content (Aluminum Association data)" },
        { check: "PET bottlers attest to ≥ 50% rPET; ≥ 25% rPET as 2024-2026 EPR-state floor (CA SB 54, OR SB 582, ME LD 1541, CO HB 22-1355)" },
        { check: "Snack-film suppliers on a published mono-material transition roadmap with date-certain milestones" },
        { check: "Paperboard suppliers FSC- or SFI-certified with ≥ 70% recycled content" },
        { check: "Compostable cup + lid suppliers BPI-certified with PFAS-free attestation" },
        { check: "All suppliers disclose How2Recycle labeling status on every SKU" },
        { check: "All suppliers disclose annual kg CO2e/unit of packaging for Scope 3 Category 1 reporting" },
        { check: "Supplier code of conduct: no PVC, PVdC, polystyrene foam (EPS), or expanded polypropylene (EPP) in primary packaging" },
      ],
    },
    {
      heading: "4. Corporate sustainability mandate alignment",
      headers: ["Mandate / framework", "Packaging-relevant disclosure", "How this pack aligns"],
      rows: [
        ["CDP Climate Change", "Scope 3 Category 1; supplier engagement (C12.1)", "Annual emission factor per SKU + diversion rate"],
        ["SBTi", "1.5°C-aligned absolute reduction (4.2%/yr Scope 1+2; trajectory Scope 3)", "Supplier transition roadmap + measurable cuts"],
        ["SASB FB-NB-410a + CG-EC-410a", "Packaging recyclability + material recovery", "Material mix + diversion rate disclosure"],
        ["EU CSRD + ESRS E5", "Resource use + circular economy", "Diversion + material recovery metrics"],
        ["EPR / extended producer responsibility (CA SB 54, OR SB 582, ME LD 1541, CO HB 22-1355)", "Recyclable + reusable packaging mandates by 2030", "Aluminum-first + rPET + mono-PE strategy"],
        ["Ellen MacArthur Foundation Global Commitment", "100% reusable / recyclable / compostable by 2025", "Aligns by design when all 7 shifts applied"],
      ],
    },
    {
      heading: "5. Diversion infrastructure (point of disposal)",
      paragraph:
        "Sustainable packaging is meaningless without diversion infrastructure. Install bins adjacent to every machine; signage drives 80% of contamination prevention.",
      items: [
        { check: "Three-stream sorting at every machine: landfill / recycle (aluminum + PET + paper) / compost (fiber cup + food waste)" },
        { check: "Signage with photo-realistic SKU images at user eye-level — generic icons cut contamination 30% less effectively" },
        { check: "Bin colors per Recycle Across America standardized labels OR municipal-required colors (Seattle, San Francisco, NYC each differ)" },
        { check: "Verified MRF + compost destination — request annual destination report (avoid landfill-in-name-only)" },
        { check: "Quarterly waste audit with diversion rate + contamination rate; target ≥ 60% diversion, ≤ 10% contamination" },
        { check: "Battery + e-waste secondary collection where workplace policy includes" },
      ],
    },
    {
      heading: "6. Cost reality + payback",
      paragraph:
        "Sustainable packaging is no longer a premium category — most shifts are cost-neutral or favorable at current commodity prices.",
      items: [
        { label: "Aluminum vs. PET", value: "Aluminum can SKU cost typically $0.02-0.05/unit higher than PET; recyclability + retail-price premium recover within 6-18 months in eco-aligned hosts." },
        { label: "rPET vs. virgin PET", value: "rPET resin trades $0.05-0.15/lb premium over virgin; transferred to bottler cost, often neutralized by EPR-state credit." },
        { label: "Mono-material films", value: "Cost-neutral when supplier has converted production line; transition typically takes 18-36 months supplier-side." },
        { label: "Compostable cups", value: "$0.04-0.08 premium over standard paper-poly cups; eliminated if host purchases at scale + uses local compost partner." },
        { label: "Diversion infrastructure", value: "Three-bin setup: $200-600 capex per machine site; recovered via reduced landfill tip fees over 12-24 months." },
      ],
    },
    {
      heading: "7. Operator reporting package",
      paragraph:
        "Operator supplies this package monthly or quarterly to support host ESG disclosure.",
      items: [
        { check: "SKU catalog with packaging material + recycled content + How2Recycle status per SKU" },
        { check: "Supplier transition roadmap for non-recyclable films, with date-certain milestones" },
        { check: "Annual kg CO2e per vend, split by electricity + refrigerant + freight + packaging" },
        { check: "Quarterly waste-audit report with diversion + contamination rate" },
        { check: "EPR compliance status for states where the host operates" },
        { check: "End-of-life-machine recycling certificate at any equipment replacement" },
      ],
    },
    {
      heading: "8. Procurement clause checklist",
      items: [
        { check: "Catalog: ≥ 30% aluminum-can beverages; ≥ 50% rPET on bottled SKUs" },
        { check: "Roadmap: 100% recyclable/reusable/compostable packaging by 2027 (Ellen MacArthur-aligned)" },
        { check: "Diversion bins + signage included in operator scope" },
        { check: "Quarterly waste-audit + annual diversion-rate report to host sustainability" },
        { check: "Supplier code of conduct disclosed; PVC + PVdC + EPS prohibited in primary packaging" },
        { check: "Operator EPR-compliance attestation for applicable states (CA, OR, ME, CO; WA + NY pending)" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps procurement + sustainability teams scope packaging-aligned vending programs and qualify operators against CDP / SBTi / EPR-ready criteria.",
});

console.log("wrote " + "sustainable-packaging-in-vending");
