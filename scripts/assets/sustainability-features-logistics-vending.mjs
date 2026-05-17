import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "sustainability-features-logistics-vending",
  assetType: "pack",
  title: "Logistics Hub ESG-Aligned Vending Pack",
  subtitle: "Equipment specification matrix, ESG dimension mapping, operator selection criteria, and quarterly ESG reporting template",
  intro:
    "Logistics operators reporting under CDP, SBTi, ISSB / IFRS S2, or SEC climate disclosure need vending programs that produce auditable ESG data. This pack consolidates the four working documents a sustainability + procurement team typically needs: equipment matrix, ESG dimension mapping, operator selection criteria, and quarterly reporting template.",
  sections: [
    {
      heading: "1. ESG dimension mapping",
      paragraph:
        "Vending touches all three ESG pillars. Below: how each operator-attestable feature maps to a common reporting framework line.",
      headers: ["Feature", "GHG Protocol Scope", "SBTi alignment", "CDP question"],
      rows: [
        ["ENERGY STAR cabinet", "Scope 2 (purchased electricity)", "Operations target", "C4.5 — energy efficiency"],
        ["Low-GWP refrigerant (R-290, R-744)", "Scope 1 (fugitive emissions)", "Operations target", "C7.3 — fluorinated gases"],
        ["Plant-based + local SKU mix", "Scope 3 Cat 1 (purchased goods)", "FLAG target", "C6.5 — Scope 3 emissions"],
        ["Telemetry-driven route", "Scope 3 Cat 4 (upstream transport)", "Operations + value chain", "C6.5"],
        ["Recyclable / compostable packaging", "Scope 3 Cat 5 (waste)", "Value chain", "C6.5; CDP forests if paper-based"],
        ["Refurbished cabinet lifecycle", "Scope 3 Cat 2 (capital goods)", "Operations target", "C6.5"],
        ["Living-wage operator route staff", "S (social)", "WBA Social Benchmark alignment", "N/A (CDP focuses E)"],
        ["DBE / minority-owned operator", "S (social)", "N/A direct", "N/A"],
      ],
    },
    {
      heading: "2. Equipment specification matrix",
      headers: ["Tier", "Cabinet", "Lighting", "Refrigerant", "Telemetry"],
      rows: [
        ["Baseline (must-have)", "ENERGY STAR Refrigerated Beverage Vending — current spec", "Full LED", "GWP < 2500 (R-134a acceptable transitional)", "Cellular sub-15-min heartbeat"],
        ["Preferred (target)", "ENERGY STAR + variable-speed compressor", "Full LED + sleep-mode dim", "GWP < 1500 (R-513A, R-450A)", "Sub-15-min + cold-chain alerts"],
        ["Stretch (best-in-class)", "Refurbished / vacuum-insulated + heat-recovery", "Full LED + motion-activated", "Natural — R-290 propane or R-744 CO₂ (GWP < 5)", "Sub-15-min + on-device AI for waste"],
      ],
    },
    {
      heading: "3. Energy footprint baseline",
      paragraph:
        "Use these figures as a starting point for Scope 2 calculations. Replace with manufacturer datasheet values at install.",
      items: [
        { label: "Non-ENERGY STAR refrigerated vending", value: "~3,500–4,500 kWh/year per unit (typical pre-2010 fleet)" },
        { label: "ENERGY STAR refrigerated vending (Class A)", value: "~1,500–2,500 kWh/year per unit" },
        { label: "Snack-only (non-refrigerated)", value: "~600–1,200 kWh/year per unit" },
        { label: "Smart cooler / micro-market reach-in", value: "~2,000–3,000 kWh/year per unit; AI vision adds ~150 kWh/year" },
        { label: "Coffee station (single-serve)", value: "~400–900 kWh/year per unit; standby mode critical" },
        { label: "Typical 4-cabinet logistics hub deployment", value: "~7,000–13,000 kWh/year baseline; ~$840–$1,820/year at $0.12–$0.14/kWh" },
      ],
    },
    {
      heading: "4. Operator selection — ESG scorecard",
      headers: ["Criterion", "Weight", "Verification"],
      rows: [
        ["Fleet ENERGY STAR %", "15%", "Cabinet registry with EPA model+version"],
        ["Refrigerant GWP weighted mean", "15%", "Cabinet registry with refrigerant disclosure"],
        ["Local + certified supplier slot %", "15%", "Supplier list with certifications + addresses"],
        ["Recyclable / compostable packaging slot %", "10%", "How2Recycle labeling audit"],
        ["Telemetry-driven route + miles report", "10%", "Quarterly miles-per-restock dashboard"],
        ["End-of-life recovery program", "10%", "EPA RAD recognition; steel recycle ≥ 80% by weight"],
        ["DBE / MBE / WBE status (where applicable)", "10%", "Tier 1 or Tier 2 spend reporting"],
        ["Living-wage attestation for route staff", "10%", "Operator wage attestation; turnover rate"],
        ["Audit cooperation (CDP, SBTi data requests)", "5%", "Operator participates in supply-chain CDP if asked"],
      ],
    },
    {
      heading: "5. Quarterly ESG reporting template",
      paragraph:
        "Pull these eight metrics into a single dashboard. Each is operator-attestable and traces to a defined source.",
      items: [
        { check: "Total kWh consumed (per-cabinet sub-meter where available; else manufacturer datasheet × cabinet count × hours)" },
        { check: "Refrigerant GWP weighted across fleet (Σ (cabinet count × refrigerant GWP) / total cabinets)" },
        { check: "Plant-based slot % (count + share of total)" },
        { check: "Local + certified supplier slot % (≤ 250 mi or certified per #4 above)" },
        { check: "Recyclable / compostable packaging slot %" },
        { check: "Route miles per restock visit (telemetry-driven dispatch baseline)" },
        { check: "Food waste % by units (expired SKUs pulled / total stocked)" },
        { check: "Refurbished cabinet count + share of fleet at this site" },
      ],
    },
    {
      heading: "6. Cost-of-greening framework",
      headers: ["Lever", "Capital impact", "Annual operating impact"],
      rows: [
        ["ENERGY STAR vs baseline cabinet", "Operator-funded; sometimes +$200–$700 per unit one-time", "−$80 to −$160/year per cabinet (kWh savings at $0.12/kWh)"],
        ["R-290 / R-744 refrigerant vs R-134a", "+$300–$900 per unit one-time", "Lower regulatory risk under AIM Act 40 CFR Part 84"],
        ["Certified-supplier slot mix", "$0", "+5–12% wholesale; partial subsidy or retail price-through"],
        ["Recyclable-packaging slot mix", "$0", "Neutral to mildly favorable"],
        ["Refurbished cabinets at mid-life", "−$2,000 to −$4,500 per unit vs new", "Comparable operating; some maintenance uplift"],
        ["Telemetry-driven dispatch", "$0 (already included)", "−10–25% route miles vs static schedule"],
        ["Quarterly ESG dashboard", "$0 if standard operator offering", "$0–$3,000/year facility-side admin"],
      ],
    },
    {
      heading: "7. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate ESG-aligned logistics-hub vending through operators that can attest to ENERGY STAR cabinets, low-GWP refrigerants, telemetry-driven routes, recyclable-packaging slot mix, and quarterly ESG dashboards aligned to CDP / SBTi / ISSB reporting. We describe operator-attestable capability and do not claim engagement at any specific named ESG-reporting logistics network. Capability documentation provided on request during scoping.",
    },
  ],
  footer:
    "Reference for sustainability and procurement teams. Final ESG accounting and reporting should be coordinated with parent-company sustainability function and external assurance provider where applicable.",
});

console.log("wrote "+"sustainability-features-logistics-vending");
