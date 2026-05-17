import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-do-vending-companies-make-money",
  assetType: "pack",
  title: "Vending Economics Analysis Pack",
  subtitle: "Unit economics model, operator selection framework, commission negotiation template",
  intro:
    "Understanding vending unit economics on the operator side gives hosts realistic commission expectations and a sharper RFP. This pack codifies the cost structure, the operator selection criteria, and a negotiation template grounded in operator P&L mechanics.",
  sections: [
    {
      heading: "1. Operator unit economics — per machine, per month",
      paragraph:
        "Industry benchmarks from Automatic Merchandiser State of the Industry, NAMA, and operator P&L disclosures.",
      headers: ["Line item", "% of gross revenue", "Notes"],
      rows: [
        ["Cost of goods sold (COGS)", "48-58%", "Snack 50-55%, beverage 45-52%, fresh 55-65%"],
        ["Route labor + truck", "12-18%", "Driver wage + fuel + vehicle depreciation per stop"],
        ["Equipment depreciation", "5-8%", "$3,500-$8,500 capex per machine, 7-10 year useful life"],
        ["Payment processing", "3-5%", "1.9-2.9% per cashless transaction + telemetry data fees"],
        ["Telemetry + software", "1-2%", "$25-$60 per machine per month subscription"],
        ["Commissions paid to host", "0-15%", "Tiered by revenue — see Section 4"],
        ["Insurance / overhead", "3-5%", "GL, auto, product liability, back office"],
        ["Operator margin", "8-15%", "Industry median ~10-12%"],
      ],
    },
    {
      heading: "2. Why commissions vary so widely",
      items: [
        { label: "Revenue volume", value: "A $300/month machine cannot support a 10% commission because service cost is fixed (~$60-$90/visit). Commission scales with revenue, not flat-rate." },
        { label: "Service intensity", value: "Daily-restock sites get less commission room than weekly-restock sites; COGS + labor consume more of the revenue." },
        { label: "Customization", value: "Brand wraps, member-app SDK integration, BI exports add operator cost. Commission tier reflects them." },
        { label: "Contract term", value: "5-year contracts unlock equipment refresh + commission upside; 1-year contracts reflect amortization risk." },
        { label: "Exclusivity", value: "Site-wide exclusivity is worth 2-4 percentage points to the operator's underwriting; reflected in commission tier." },
      ],
    },
    {
      heading: "3. Operator revenue model variants",
      headers: ["Model", "Revenue flow", "Host commission room"],
      rows: [
        ["Traditional retail vending", "Operator sells to consumer, owns inventory + risk", "0-15% of gross"],
        ["Free vending (host-paid)", "Host pays per-unit invoice; consumer pays $0", "N/A — host pays cost + margin"],
        ["Subsidized vending", "Host pays delta between sell price and consumer pay", "N/A — host pays delta"],
        ["Micro-market", "Operator owns inventory; self-checkout kiosk", "5-12% of gross typical"],
        ["Smart cooler (RFID / AI vision)", "Operator owns inventory; tap-and-go", "5-12% of gross typical"],
        ["Member-app closed loop", "Member pays via badge or app; pricing tiered", "5-15% of gross or service-fee model"],
      ],
    },
    {
      heading: "4. Commission tier framework (realistic ranges)",
      headers: ["Monthly gross / machine", "Snack / beverage commission", "Fresh / specialty commission"],
      rows: [
        ["< $300", "0-2%", "0% (often a placement-fee model instead)"],
        ["$300-$700", "3-6%", "0-3%"],
        ["$700-$1,500", "6-12%", "3-8%"],
        ["$1,500-$3,000", "12-18%", "8-12%"],
        ["$3,000-$6,000", "18-25%", "12-18%"],
        ["> $6,000", "25-35%", "18-25%"],
      ],
    },
    {
      heading: "5. Operator selection framework",
      items: [
        { number: 1, title: "Telemetry-equipped fleet", description: "100% telemetry coverage (Cantaloupe / Nayax / 365). No 'we'll add it later' — that is a capability gap." },
        { number: 2, title: "Cashless 80%+", description: "Mix of cashless transactions ≥ 80% indicates modern payment platform + member confidence." },
        { number: 3, title: "Route density", description: "Operator has 5+ accounts within 10 miles of the placement; service cost is amortized." },
        { number: 4, title: "Insurance + permits", description: "$2M general liability + $1M auto + product liability; state retail food permit if fresh." },
        { number: 5, title: "Reporting", description: "Monthly host reporting standard, telemetry-backed; not handwritten 'sell sheets.'" },
        { number: 6, title: "References", description: "3+ comparable hosts (same vertical, similar size) reachable for reference call." },
        { number: 7, title: "Capital + equipment age", description: "Average fleet age < 7 years; capex plan for refresh." },
      ],
    },
    {
      heading: "6. Commission negotiation template",
      paragraph:
        "Use during operator selection. Each clause should be in the executed contract addendum.",
      items: [
        { label: "Tier definition", value: "Commission tiers defined per Section 4 above, settled monthly, with telemetry-export evidence." },
        { label: "Settlement cadence", value: "Monthly within 15 days of month-end; ACH preferred; commission statement includes per-machine breakdown." },
        { label: "Audit rights", value: "Host can pull telemetry data and reconcile against settlement statement quarterly; 30-day cure period for discrepancy." },
        { label: "Price-change notice", value: "Operator gives host 30-day written notice of consumer price changes; host can decline." },
        { label: "Below-threshold remedy", value: "If gross < $300/machine/month for 3 consecutive months, parties review planogram + placement; option to remove + relocate." },
        { label: "Termination", value: "30-day or 60-day notice without cause after Year 1; material breach 30-day cure; equipment removal at operator cost." },
      ],
    },
    {
      heading: "7. Red flags in operator economics",
      items: [
        { check: "Promised commission > 30% on a sub-$1,500/month machine — economically implausible." },
        { check: "Refusal to provide telemetry-backed settlement statements." },
        { check: "No reference accounts in the host's vertical." },
        { check: "Equipment average age > 10 years; no capex refresh plan." },
        { check: "Cashless mix < 50%; signals payment-platform gap." },
        { check: "Insurance certificate not provided at intake." },
        { check: "Sub-contracted route labor with no service SLA pass-through." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface operators that can attest to telemetry coverage, cashless mix, and route density consistent with the commission framework above. Where economics do not support a host's desired commission tier, we describe the gap honestly — capability framing only.",
    },
  ],
  footer:
    "Commission ranges and cost-line shares are industry references. Specific operator P&L will vary by vertical, region, and equipment mix.",
});

console.log("wrote " + "how-do-vending-companies-make-money");
