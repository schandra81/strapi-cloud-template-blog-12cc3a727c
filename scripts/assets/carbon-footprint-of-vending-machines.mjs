import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "carbon-footprint-of-vending-machines",
  assetType: "pack",
  title: "Vending Machine Carbon Footprint Analysis Pack",
  subtitle: "Electricity + refrigerant + vehicle + packaging emissions framework with a reduction stack",
  intro:
    "This pack is a working carbon-accounting framework for a single vending machine, a fleet, or a corporate program. It separates Scope 1 (refrigerant + service vehicle), Scope 2 (machine electricity), and Scope 3 (packaging + product upstream), gives reasonable emission factors, and lays out a stacked reduction roadmap that targets 40-70% reduction vs. a 2018-era baseline.",
  sections: [
    {
      heading: "1. Boundary + scope",
      paragraph:
        "Use the GHG Protocol Corporate Standard for the boundary. Most vending carbon analyses cover the operator's Scope 1 + 2 + a partial Scope 3 (packaging, freight). The host's Category 1 (purchased goods + services) covers the vending operator's full footprint.",
      items: [
        { label: "Scope 1 (operator)", value: "Refrigerant leakage from refrigerated machines + delivery vehicle tailpipe emissions." },
        { label: "Scope 2 (host)", value: "Grid electricity drawn by machines at the host site. Reported under the host's Scope 2 unless operator pays utility directly." },
        { label: "Scope 3 (both)", value: "Packaging (cans, bottles, films, cartons), product upstream emissions, end-of-life of containers, employee commute to operate (negligible)." },
        { label: "Functional unit", value: "kg CO2e per machine per year and per vend (gram CO2e/vend). Per-vend lets you compare machines of different size + utilization." },
      ],
    },
    {
      heading: "2. Electricity emissions (Scope 2)",
      paragraph:
        "Machine electricity dominates Scope 1+2 for refrigerated equipment. ENERGY STAR refrigerated beverage vendors use 800-1,800 kWh/year; non-rated legacy can run 2,500-4,500 kWh/year.",
      headers: ["Machine type", "Annual kWh (typical)", "Annual kWh (ENERGY STAR)", "Annual kg CO2e (US avg grid 0.371 kg/kWh)"],
      rows: [
        ["Refrigerated beverage (CRBV) — legacy", "2,500-4,500", "—", "925-1,670"],
        ["Refrigerated beverage — ENERGY STAR 3.0", "—", "900-1,400", "335-520"],
        ["Glass-front refrigerated snack/food", "1,500-2,500", "1,100-1,700", "410-630"],
        ["Ambient snack (non-refrigerated)", "200-450", "—", "75-170"],
        ["Bean-to-cup coffee", "350-650", "—", "130-240"],
        ["Combo (snack + bev refrigerated half)", "1,200-2,200", "900-1,600", "335-595"],
      ],
    },
    {
      heading: "3. Refrigerant emissions (Scope 1)",
      paragraph:
        "Refrigerant leakage is small in mass but high in GWP. Legacy HFC R-404A has GWP 3,922; modern hydrocarbon R-290 has GWP 3. Switching a fleet from R-404A to R-290 cuts refrigerant-leak emissions ~99.9%.",
      headers: ["Refrigerant", "GWP (AR5)", "Typical charge (g/machine)", "Annual leak rate (%)", "Annual kg CO2e/machine"],
      rows: [
        ["R-404A (HFC, legacy)", "3,922", "150-250", "5-10%", "29-98"],
        ["R-134a (HFC, transitional)", "1,430", "120-200", "5-10%", "9-29"],
        ["R-744 (CO2)", "1", "100-180", "5-10%", "0.005-0.018"],
        ["R-290 (propane, ENERGY STAR + EPA SNAP)", "3", "100-150", "5-10%", "0.015-0.045"],
        ["R-600a (isobutane)", "3", "60-90", "5-10%", "0.009-0.027"],
      ],
    },
    {
      heading: "4. Vehicle + service emissions (Scope 1 operator)",
      paragraph:
        "Telemetry-driven restock cuts route miles 30-50% by skipping low-velocity stops. Electrification of the route van drives Scope 1 to ~zero (allocated against host's Scope 3 grid factor).",
      items: [
        { label: "Diesel route van baseline", value: "12-16 mpg, 15,000-25,000 mi/yr, 10.21 kg CO2e/gallon → 9,600-21,300 kg CO2e/yr per van. Divide across ~40-80 machines served per van = 120-530 kg CO2e/machine/yr." },
        { label: "Telemetry-optimized routing", value: "Cantaloupe Seed Pro, Vagabond, Nayax dynamic routing cut visits by 30-50%. Direct kg CO2e/machine cut: 35-260 kg/yr." },
        { label: "Electric step-van", value: "Ford E-Transit, Workhorse, Lightning eMotors — 0.6-1.0 kWh/mi. At 0.371 kg/kWh = 0.22-0.37 kg CO2e/mi. 15,000 mi × 0.37 = 5,550 kg CO2e/yr per van. Cut vs. diesel: 50-75%." },
      ],
    },
    {
      heading: "5. Packaging + product upstream (Scope 3)",
      paragraph:
        "Packaging often equals or exceeds machine electricity once refrigerant + telemetry routing are addressed.",
      headers: ["Packaging", "kg CO2e per unit (LCA-typical)", "Per-vend contribution"],
      rows: [
        ["12 oz aluminum can (50% recycled)", "0.17-0.20", "Dominant for beverage SKUs"],
        ["12 oz aluminum can (95% recycled)", "0.06-0.09", "Best-in-class"],
        ["12 oz PET bottle (virgin)", "0.10-0.13", "Plus end-of-life if not rPET"],
        ["12 oz PET bottle (100% rPET)", "0.04-0.06", "Best-in-class"],
        ["Snack film (BOPP / multilayer)", "0.02-0.05", "Per package; non-recyclable in most municipal streams"],
        ["Paperboard carton (bar / chocolate)", "0.03-0.06", "FSC-certified preferred"],
      ],
    },
    {
      heading: "6. Reduction stack (highest-impact first)",
      paragraph:
        "Apply in order. Each layer typically delivers measurable reduction without dependency on the next.",
      items: [
        { number: 1, title: "ENERGY STAR replacement at end-of-life", description: "Replace any pre-2014 refrigerated machine with ENERGY STAR 3.0 / 4.0 at end-of-life. Cut: 40-70% of machine electricity, 60-80% reduction in refrigerant CO2e if paired with R-290." },
        { number: 2, title: "Low-GWP refrigerant retrofit or replacement", description: "Specify R-290 or R-600a on every refrigerated machine bid. Cut: 95-99% of refrigerant emissions per machine." },
        { number: 3, title: "Telemetry-driven dynamic restock", description: "Cantaloupe / Nayax / Vagabond + route optimizer. Cut: 30-50% of service-vehicle miles." },
        { number: 4, title: "LED lighting + smart sleep mode", description: "Most modern refrigerated machines ship with LED + sleep mode that cuts overnight energy 30-50%. Verify enablement at install + each QBR." },
        { number: 5, title: "Packaging shift to rPET + 95% recycled aluminum + paper/fiber where category allows", description: "Cut packaging Scope 3 by 40-60% per SKU on rPET + 70-80% on high-recycled aluminum." },
        { number: 6, title: "Electric route vehicles + dispatch consolidation", description: "Cut Scope 1 service emissions 50-100% (offset by grid factor on EV)." },
        { number: 7, title: "On-site renewable electricity / RECs", description: "Host-side green-power purchase or operator commitment to renewable PPAs covers residual Scope 2. Cut: up to 100% of Scope 2 with verified RECs." },
        { number: 8, title: "End-of-life machine recycling", description: "Refrigerant reclamation per EPA Section 608 + scrap-metal recycling. Avoid landfill disposal." },
      ],
    },
    {
      heading: "7. Worked example — single machine baseline vs. optimized",
      headers: ["Source", "Baseline kg CO2e/yr", "Optimized kg CO2e/yr", "Reduction %"],
      rows: [
        ["Electricity (refrigerated beverage)", "1,300", "420", "68%"],
        ["Refrigerant (R-404A → R-290)", "60", "0.03", "99.9%"],
        ["Service vehicle allocation", "320", "120 (EV + telemetry)", "63%"],
        ["Packaging (Scope 3, 8,000 vends/yr at 0.17 → 0.07)", "1,360", "560", "59%"],
        ["Total", "3,040", "1,100", "64%"],
      ],
    },
    {
      heading: "8. ESG reporting + standards alignment",
      items: [
        { label: "GHG Protocol", value: "Corporate Accounting + Reporting Standard for Scope 1+2+3. Scope 3 Category 1 (purchased goods + services) covers vending Scope 3 from the host side." },
        { label: "ENERGY STAR for vending", value: "ENERGY STAR 4.0 for refrigerated beverage vending machines (effective 2024). Verify yellow EnergyGuide label on every machine bid." },
        { label: "EPA SNAP", value: "Significant New Alternatives Policy lists approved low-GWP refrigerants. R-290 + R-600a approved for stand-alone retail refrigeration." },
        { label: "CDP", value: "Climate Change disclosure C6.3 (Scope 3 emissions). Vending vendors should provide annual emission factor per vend." },
        { label: "SBTi", value: "Science-Based Targets initiative — vending operator should be on a 1.5°C pathway (4.2% absolute reduction per year)." },
        { label: "SASB", value: "Food + Beverage standards for packaging + food-waste disclosure." },
      ],
    },
    {
      heading: "9. Operator selection — questions to ask",
      items: [
        { check: "What is your published emission factor per vend? Last calculated date + methodology?" },
        { check: "What percentage of your fleet is ENERGY STAR + low-GWP refrigerant? Year-by-year trajectory?" },
        { check: "Can you provide telemetry-verified route mileage to support host Scope 3 Category 1?" },
        { check: "What is your packaging mix by recycled content and recyclability?" },
        { check: "Do you have a published net-zero or SBTi commitment? Verified by what body?" },
        { check: "Can you supply a CDP response or equivalent third-party-verified disclosure annually?" },
      ],
    },
  ],
  footer:
    "Emission factors here are reasonable industry references for scoping; replace with your operator's verified data before formal disclosure. LetUsVending helps host sustainability + procurement teams scope low-carbon vending programs.",
});

console.log("wrote " + "carbon-footprint-of-vending-machines");
