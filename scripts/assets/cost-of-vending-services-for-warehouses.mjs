import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cost-of-vending-services-for-warehouses",
  assetType: "pack",
  title: "Warehouse Vending Cost Pack",
  subtitle: "Contract structures, commission negotiation, scenario pricing, and operator selection checklist",
  intro:
    "Warehouse vending cost-of-service is shaped by 24/7 shift coverage, ANSI/ASSE Z244.1 lockout-aware service windows, cold-chain SLAs, and PPE-aware product mix. Pricing diverges 30-50% from a single-shift office program. This pack codifies four artifacts — contract structures, commission negotiation, scenario pricing, and operator selection — so a warehouse operations leader is equipped to spec the right economic model for the facility rather than default to retail commission rates.",
  sections: [
    {
      heading: "1. Contract structure options",
      paragraph:
        "Warehouse vending uses one of four contract structures. The right structure depends on revenue volume, equipment ownership, and whether the host wants subsidy capability.",
      headers: ["Structure", "Operator gets", "Host gets", "Best for"],
      rows: [
        ["Pure commission", "% of gross sales (10-25% to host)", "Commission revenue", "Large facilities; > $50K/year machine volume"],
        ["Fixed-fee subsidy", "Flat fee from host; operator keeps sales", "Subsidized pricing for workers", "Mid-size where worker pricing matters"],
        ["Hybrid (commission + subsidy)", "Sales revenue + partial subsidy", "Pricing control + commission flex", "Multi-shift programs needing shift-3 lift"],
        ["Free vend (employer-paid)", "Per-vend fee from employer", "Wellness benefit / heat program", "Heat-illness programs; safety-critical SKUs"],
      ],
    },
    {
      heading: "2. Cost drivers",
      paragraph:
        "Six factors drive warehouse vending costs above standard retail rates. Operator should be able to itemize each in a proposal.",
      items: [
        { label: "24/7 shift coverage", value: "Restock crew on multi-shift schedule; surge labor for shift transitions; adds 15-25% to standard service cost." },
        { label: "Cold-chain SLA", value: "Refrigerated units with 4-hour excursion alarm per FDA Food Code 3-501.16 + ASHRAE Standard 24; adds maintenance cost." },
        { label: "PPE-aware product mix", value: "Single-hand-open packaging, glove-friendly UI, ergonomic dispense; specialty SKU sourcing premium." },
        { label: "Ergonomic + ANSI compliance", value: "Equipment placement per ANSI Z244.1 lockout-aware service windows; ANSI Z535 signage; OSHA 1910.176 aisle clearance." },
        { label: "Telemetry investment", value: "Cellular telemetry with sub-15-min heartbeat + per-shift velocity reporting; Cantaloupe / Nayax / 365 standard." },
        { label: "Heat-illness alignment", value: "Per OSHA NEP on heat (2022), facilities ≥ 80°F WBGT benefit from hydration-forward planograms with electrolyte SKUs." },
      ],
    },
    {
      heading: "3. Scenario pricing — three sample facilities",
      paragraph:
        "Sample scenarios using market-rate operator inputs. Use these to validate operator quotes; significant deviation triggers a scope review.",
      headers: ["Scenario", "Equipment", "Shifts", "Indicative cost-of-service"],
      rows: [
        ["Distribution center — 250 workers, 3 shifts", "3 combo + 2 beverage cooler + 1 AI smart-cooler", "24/7", "Operator handles all; commission 10-15% of $80-120K/yr revenue"],
        ["Manufacturing plant — 600 workers, 2 shifts", "5 combo + 3 beverage cooler + 1 fresh-food + 1 hot-food", "24/7 high traffic", "Hybrid: $1500/mo subsidy + 8% commission to host"],
        ["Cold-storage warehouse — 80 workers, 2 shifts", "1 combo + 1 hot-food + 1 beverage cooler", "Two-shift", "Free-vend employer-paid; $0.75/transaction fee; budget-set"],
      ],
    },
    {
      heading: "4. Commission negotiation framework",
      paragraph:
        "Commission rate negotiation rests on five factors. Operator should be able to attest to each before commit.",
      items: [
        { number: 1, title: "Revenue baseline", description: "Pull 12 months of telemetry from the operator's comparable placements. Quote should reference your facility's projected volume not generic rates." },
        { number: 2, title: "Service-level expectation", description: "Higher SLA tiers reduce commission. Tier-1 < 24-hour resolution is standard; faster SLAs (4-hour) shift 3-5% of commission." },
        { number: 3, title: "Equipment investment", description: "If operator funds AI smart-cooler or hot-food vending, commission drops 5-8% to amortize. If host funds equipment, commission rises 5-10%." },
        { number: 4, title: "Cold-chain + safety attestation", description: "Operator's compliance machinery (FDA Food Code, ANSI Z535, OSHA 1910) is part of the cost. Don't negotiate below the cost of compliance." },
        { number: 5, title: "Term + renewal", description: "Longer term (48-60 months) shifts 2-3% commission upward. Annual auto-renewal trades commission for flexibility." },
      ],
    },
    {
      heading: "5. RFP language for cost transparency",
      items: [
        { label: "Itemized cost", value: "Operator provides itemized cost build: hardware amortization, telemetry, restock labor, surge labor, compliance, insurance, profit margin." },
        { label: "Commission floor + ceiling", value: "Operator commits to a commission rate band (e.g., 10-15% based on volume tier). No hidden volume-based escalator." },
        { label: "Cost pass-through cap", value: "Commodity cost pass-through capped at indexed CPI-Food-Away-From-Home, not unilateral operator increases." },
        { label: "Open-book audit", value: "Host has annual audit right to operator's per-machine revenue + cost ledger." },
        { label: "Termination economics", value: "No early-termination penalty after Month 12; pro-rated equipment buy-out if host wants ownership." },
      ],
    },
    {
      heading: "6. Total cost of ownership (5-year)",
      paragraph:
        "Five-year TCO captures equipment + service + compliance + replacement. Use this to compare commission vs free-vend models.",
      headers: ["Cost category", "Pure commission", "Free vend"],
      rows: [
        ["Equipment", "$0 (operator-funded)", "$15-30K per AI cooler / hot-food unit"],
        ["Service + restock", "$0 (operator absorbs)", "Per-vend fee × volume; budget item"],
        ["Compliance + insurance", "$0 (operator absorbs)", "Per-vend fee × volume"],
        ["Commission revenue to host", "+10-25% of gross", "$0"],
        ["Net 5-year for host", "+commission revenue", "-(per-vend × volume) for workforce benefit"],
      ],
    },
    {
      heading: "7. Operator selection checklist",
      items: [
        { check: "Operator has 24+ months of industrial / warehouse placements with references." },
        { check: "Operator can support 24/7 shift coverage including 3rd-shift restock." },
        { check: "Operator's telemetry reports per-shift velocity and temperature alarms." },
        { check: "Operator can attest to ANSI Z535 signage and OSHA 1910 aisle clearance compliance." },
        { check: "Operator carries industrial insurance (GL ≥ $5M, auto, workers' comp, cyber)." },
        { check: "Operator provides itemized cost build + commission band in proposal." },
        { check: "Operator commits to QBR with KPI report and cost transparency." },
      ],
    },
    {
      heading: "8. Annual cost review",
      items: [
        { check: "Pull 12-month revenue + commission report; reconcile to operator monthly statements." },
        { check: "Pull 12-month service ticket log; calculate SLA adherence rate." },
        { check: "Validate cost pass-through against indexed CPI-Food-Away-From-Home." },
        { check: "Review insurance certificates for renewal." },
        { check: "Decision: maintain rate / renegotiate / re-bid." },
      ],
    },
  ],
  footer:
    "This pack is a working cost reference. Validate operator quotes against published industry benchmarks (NAMA State of the Industry) and confirm cost pass-through terms with procurement counsel before commit.",
});

console.log("wrote "+"cost-of-vending-services-for-warehouses");
