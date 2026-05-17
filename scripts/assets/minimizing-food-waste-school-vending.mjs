import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "minimizing-food-waste-school-vending",
  assetType: "pack",
  title: "School Vending Food-Waste Reduction Framework",
  subtitle: "Telemetry, shelf-life management, donation, packaging, and a measurement dashboard",
  intro:
    "USDA estimates 30-40% of the US food supply is wasted (USDA ERS food-loss reports), with school food service contributing significantly. Vending-specific waste comes from expired perishables, slow-moving SKUs, and oversized packaging. This framework codifies five levers — telemetry, shelf-life management, donation, packaging, and dashboard reporting — so a district is equipped to drive vending waste below 5% of perishable SKU volume.",
  sections: [
    {
      heading: "1. Telemetry foundation",
      paragraph:
        "Without per-SKU telemetry, waste reduction is guesswork. Telemetry baselines waste rates and signals when shelf-life or planogram changes are needed. Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable systems support the metrics below.",
      items: [
        { label: "Per-SKU velocity", value: "Daily velocity by SKU; bottom-20% velocity SKUs are candidates for planogram swap." },
        { label: "Shelf-life remaining", value: "Per-SKU days-to-expiration tracked at restock; alerts when stock-on-hand exceeds expected sell-through." },
        { label: "Temperature excursion", value: "Refrigerated units: 4-hour SLA alarm at any deviation outside 35-40°F (FDA Food Code Section 3-501.16)." },
        { label: "Stockout vs. expiration ratio", value: "Target stockouts and expirations at parity; expired-volume > 2x stockouts indicates over-stocking." },
      ],
    },
    {
      heading: "2. Shelf-life management",
      paragraph:
        "Shelf-life management has three rules: first-in-first-out at every restock, planogram depth right-sized to sell-through, and removal of any item within 2 days of expiration.",
      items: [
        { number: 1, title: "FIFO at every restock", description: "Restock crew rotates older stock forward; new stock loaded behind. Operator attests to FIFO compliance at each visit." },
        { number: 2, title: "Right-sized planogram depth", description: "Depth = (telemetry-derived weekly velocity / restock cadence) × 1.3 safety factor. Excess depth drives expirations." },
        { number: 3, title: "2-day pull rule", description: "Any SKU within 2 days of best-by date is pulled and either donated (where permitted) or discarded; documented in the operator log." },
        { number: 4, title: "Slow-mover demotion", description: "SKUs with < 25% sell-through over 4 weeks are demoted to lower-traffic slots or pulled from planogram." },
      ],
    },
    {
      heading: "3. Donation pathway (Bill Emerson Good Samaritan Act)",
      paragraph:
        "The Bill Emerson Good Samaritan Food Donation Act (42 U.S.C. § 1791) protects donors of apparently wholesome food from civil and criminal liability. Vending operators can donate near-expiration SKUs to local pantries or backpack programs through Feeding America's partner network.",
      items: [
        { check: "Operator has a signed donation MOU with a local Feeding America partner or pantry." },
        { check: "Donation log maintained at the operator warehouse; weight + date + recipient." },
        { check: "Refrigerated donations maintain cold chain per FDA Food Code 3-501.16 (≤ 41°F)." },
        { check: "District wellness committee informed of donation pathway." },
        { check: "Annual review of donation volume + recipient relationships." },
      ],
    },
    {
      heading: "4. Packaging strategy",
      paragraph:
        "Packaging contributes both to waste volume and to spoilage risk. Single-serve packaging with proper barrier properties extends shelf life and reduces overpurchasing.",
      items: [
        { label: "Barrier packaging", value: "Multi-layer film for fresh-food extends shelf life 30-50% vs single-layer (per FDA Food Code-aligned packaging guidance)." },
        { label: "Single-serve sizing", value: "Smart Snacks-compliant single-serve packs reduce both calorie exposure and over-purchasing waste." },
        { label: "Date labeling clarity", value: "FDA + USDA endorse 'Best If Used By' as the standard quality date; reduces premature discard." },
        { label: "Recyclable / compostable", value: "Where commercial composting is available, switch hot-food packaging to certified compostable per BPI standards." },
      ],
    },
    {
      heading: "5. Measurement dashboard",
      paragraph:
        "Dashboard combines telemetry and operator-log data into five KPIs reported quarterly.",
      headers: ["KPI", "Definition", "Target", "Alert threshold"],
      rows: [
        ["Expired-unit rate", "Expired units / total restocked units", "< 3%", "> 5%"],
        ["Donation rate", "Donated units / total restocked units", "1-3%", "< 0.5% indicates donation pathway is underused"],
        ["Stockout rate", "Stockout hours / total operating hours", "< 3%", "> 5%"],
        ["Sell-through (bottom 25%)", "Sell-through rate of bottom-quartile SKUs", "≥ 20%", "< 15% triggers planogram swap"],
        ["Temperature excursion count", "Excursions outside 35-40°F per machine per month", "0-1", "≥ 3 triggers hardware review"],
      ],
    },
    {
      heading: "6. Quarterly review checklist",
      items: [
        { check: "Expired-unit rate report by machine and by SKU category." },
        { check: "Donation log review with operator + wellness committee." },
        { check: "Planogram refresh list (bottom-quartile SKU swap)." },
        { check: "Temperature excursion log with root-cause for each event." },
        { check: "Packaging review — any SKUs to migrate to extended-shelf-life packaging?" },
        { check: "Annual food-waste reduction target set for next quarter." },
      ],
    },
    {
      heading: "7. Operator capability checklist",
      items: [
        { check: "Operator has 24+ months of K-12 fresh-food experience." },
        { check: "Operator's telemetry reports per-SKU velocity, shelf-life days, and temperature alarms." },
        { check: "Operator carries a signed donation MOU with a Feeding America partner." },
        { check: "Operator attests to FIFO at every restock visit." },
        { check: "Operator's 2-day pull rule is documented in the SLA." },
        { check: "Operator delivers quarterly food-waste KPI report." },
      ],
    },
  ],
  footer:
    "This framework is a working operational reference. Confirm the donation pathway with local public health authorities and ensure cold-chain compliance per FDA Food Code 3-501.16 for any refrigerated donations.",
});

console.log("wrote "+"minimizing-food-waste-school-vending");
