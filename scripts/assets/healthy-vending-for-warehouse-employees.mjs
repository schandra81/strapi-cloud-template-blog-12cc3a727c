import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-vending-for-warehouse-employees",
  assetType: "pack",
  title: "Warehouse Healthy Vending Pack",
  subtitle: "Heat-illness planogram, protein-forward catalog, hot-meal vending playbook, safety + HR coordination",
  intro:
    "Healthy vending for warehouse employees is governed less by trend than by physiology: heat exposure (OSHA NEP 2022, ACGIH WBGT > 80°F), shift-3 metabolic demand, single-hand operability in PPE, and the FDA Food Code 35-40°F cold-chain. This pack codifies four artifacts — heat-illness planogram, protein-forward catalog, hot-meal playbook, safety + HR coordination — so a warehouse is equipped to run a wellness-aligned program rather than a generic snack lineup.",
  sections: [
    {
      heading: "1. Heat-illness planogram",
      paragraph:
        "OSHA's 2022 National Emphasis Program on Heat Hazards focuses on indoor and outdoor facilities ≥ 80°F. ACGIH TLVs for WBGT trigger work-rest cycles. Vending supports hydration + electrolytes as part of the heat-illness prevention plan.",
      items: [
        { label: "Hydration baseline", value: "Plain water in multiple sizes; rotate at least 3 SKU types (still water + sparkling + flavored)." },
        { label: "Electrolyte mix", value: "Sports drink (Gatorade, Powerade, BodyArmor) + zero-sugar electrolyte (Liquid IV, Pedialyte, Nuun); per ACGIH guidance for ≥ 4-hour heat exposure." },
        { label: "Sodium-replenishment snacks", value: "Pretzels, salted nuts, trail mix; OSHA NEP-aligned with sodium loss during sustained heat exposure." },
        { label: "Cold-only zone", value: "All hydration SKUs in refrigerated unit at 35-40°F; not in ambient cabinet." },
        { label: "Free-vend integration", value: "Where employer subsidizes during heat-advisory days, free-vend hydration SKUs via badge auth." },
      ],
    },
    {
      heading: "2. Protein-forward catalog",
      paragraph:
        "Shift workers — especially shift-3 — need calorie-dense, protein-forward SKUs that replace a missed cafeteria meal. Catalog targets ≥ 15g protein per snack SKU and ≥ 25g protein per meal SKU.",
      headers: ["Category", "Example SKUs", "Protein target", "Cold chain"],
      rows: [
        ["Protein bar", "Quest, Built, Pure Protein, Power Crunch", "≥ 15g protein, ≤ 220 cal", "Ambient OK"],
        ["Beef / turkey jerky", "Chomps, Jack Link's, Country Archer", "≥ 10g protein, low sodium variants", "Ambient OK"],
        ["Hard-boiled egg / cheese pack", "Sargento balanced break, hard-boiled egg packs", "≥ 12g protein", "35-40°F required"],
        ["Greek yogurt", "Chobani, Two Good, Oikos triple zero", "≥ 15g protein, low sugar", "35-40°F required"],
        ["Hot-meal entrée", "Microwaveable bowl, hot soup, grain bowl", "≥ 25g protein", "Hot-food vending"],
        ["Protein shake / ready-to-drink", "Premier Protein, Fairlife, Owyn", "≥ 30g protein, < 200 cal", "35-40°F preferred"],
      ],
    },
    {
      heading: "3. Hot-meal vending playbook",
      paragraph:
        "Hot-meal vending replaces a cafeteria meal at shift-3 and weekend shifts when food service is offline. Hot-meal equipment must meet FDA Food Code 3-501.16 (hot-hold ≥ 135°F) and ANSI/ASSE Z244.1 lockout-aware service.",
      items: [
        { number: 1, title: "Equipment selection", description: "Smart-fridge with built-in microwave (e.g., Yo-Kai Express ramen, Aramark Avenue C hot-meal, Selecta hot kiosk); separate hot-hold compartment if used." },
        { number: 2, title: "FDA Food Code temperature", description: "Cold-hold 35-40°F (3-501.16); hot-hold ≥ 135°F. Temperature log with 4-hour SLA alarm." },
        { number: 3, title: "HACCP-style monitoring", description: "Per-SKU shelf-life tracked via telemetry; expired-SKU auto-flag." },
        { number: 4, title: "Restock cadence", description: "Daily restock for fresh-food SKUs; pull-and-discard at 2 days from best-by." },
        { number: 5, title: "Allergen handling", description: "FALCPA labels on every SKU; allergen segregation if peanut/tree-nut SKUs deployed." },
        { number: 6, title: "Cashless payment", description: "EMV + NFC + mobile wallet; meal subsidy via badge auth where employer covers." },
      ],
    },
    {
      heading: "4. Safety + HR coordination",
      paragraph:
        "Healthy vending program coordinates across safety, HR, and benefits. Each function owns a piece of the program.",
      items: [
        { label: "EHS coordinator", value: "Owns heat-illness planogram, hot-food cold-chain attestation, ANSI Z535 signage, lockout-aware placement." },
        { label: "HR / benefits", value: "Owns wellness subsidy structure, free-vend on heat-advisory days, NPS survey, refund flow." },
        { label: "Operations manager", value: "Owns shift-aware restock cadence, machine uptime, SLA enforcement." },
        { label: "Operator (external)", value: "Owns planogram refresh, telemetry, compliance attestation, refund processing." },
        { label: "Wellness committee", value: "Reviews program annually; aligns with broader corporate wellness goals." },
      ],
    },
    {
      heading: "5. Shift-aware planogram",
      paragraph:
        "Shift workers have different metabolic patterns. Shift-1 (day) skews breakfast + hydration; shift-3 (overnight) skews protein + caffeine + comfort food.",
      headers: ["Shift", "Top categories", "Telemetry pivot trigger"],
      rows: [
        ["Shift-1 (6 AM – 2 PM)", "Breakfast bars, yogurt, fruit, coffee, water", "Stockout > 5% on breakfast SKUs"],
        ["Shift-2 (2 PM – 10 PM)", "Snacks, sodas, electrolyte, hot lunch", "Stockout on electrolyte during heat advisory"],
        ["Shift-3 (10 PM – 6 AM)", "Caffeine, hot drinks, protein bars, hot meals", "Caffeine stockout > 5%"],
      ],
    },
    {
      heading: "6. KPI dashboard",
      items: [
        { label: "Hydration SKU sell-through", value: "Target ≥ 60% during summer months; ≥ 40% baseline." },
        { label: "Protein SKU sell-through", value: "Target ≥ 40% across all shifts." },
        { label: "Hot-meal uptake", value: "Target ≥ 20% of shift-3 transactions." },
        { label: "Stockout rate", value: "< 3% across all SKUs." },
        { label: "Refund rate", value: "< 2% of transactions." },
        { label: "Worker NPS (annual)", value: "≥ +30 on vending quality + selection." },
      ],
    },
    {
      heading: "7. Annual wellness review",
      items: [
        { check: "Heat-illness planogram review with EHS coordinator." },
        { check: "Protein-forward catalog review with HR + wellness committee." },
        { check: "Hot-meal equipment FDA Food Code attestation refreshed." },
        { check: "Allergen labeling refreshed; cross-contact attestation reviewed." },
        { check: "Worker NPS survey distributed; results shared with operator." },
        { check: "QBR with operator covers KPI dashboard + planogram refresh recommendations." },
      ],
    },
  ],
  footer:
    "This pack is a working wellness reference. Confirm OSHA NEP heat-hazard alignment with EHS and ACGIH WBGT thresholds with industrial hygiene; cold-chain attestation from operator before commit.",
});

console.log("wrote "+"healthy-vending-for-warehouse-employees");
