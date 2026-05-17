import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-financing-options",
  assetType: "matrix",
  title: "Vending Machine Financing Decision Framework",
  subtitle: "Cash vs equipment financing vs SBA vs lease — credit-tier APR matrix + total cost of capital calculator",
  intro:
    "This framework helps prospective vending operators decide how to finance their first or expansion fleet. References reflect typical 2024-2026 SBA program terms, Section 179 + bonus depreciation under current IRS guidance, and standard equipment-finance industry tiering. Tax outcomes depend on individual circumstances — consult a CPA. Capability-framed — every financing option should be verified with the actual lender's current terms before commitment.",
  sections: [
    {
      heading: "1. Financing-option category matrix",
      headers: ["Option", "Typical credit tier", "Typical APR (2024-2026)", "Down payment", "Term", "Best fit"],
      rows: [
        ["Cash / owner equity", "Any", "0% (opportunity cost)", "100%", "N/A", "Operator with sufficient liquidity; preserves credit lines"],
        ["Equipment financing — A+ credit", "FICO ≥ 720", "7-11%", "0-10%", "36-60 mo", "Established operators expanding fleet"],
        ["Equipment financing — A credit", "FICO 680-719", "10-14%", "0-15%", "36-60 mo", "Mid-credit operators with cash flow"],
        ["Equipment financing — B credit", "FICO 640-679", "13-18%", "10-25%", "24-48 mo", "Newer operators; collateralized"],
        ["Equipment financing — C credit", "FICO 600-639", "17-24%", "20-35%", "24-36 mo", "Limited; collateral + personal guarantee"],
        ["SBA 7(a) general loan", "FICO ≥ 680 typical", "Prime + 2.25-4.75%", "10%", "Up to 10 yr for equipment", "Capital for equipment + working capital + initial inventory"],
        ["SBA 504 equipment loan", "FICO ≥ 680 typical", "Below-market fixed (CDC portion)", "10%", "10-25 yr", "Long-life equipment + commercial real estate"],
        ["SBA Microloan", "Lower credit thresholds OK", "8-13% typical", "Varies", "Up to 6 yr", "Up to $50K; first-time operators"],
        ["Operating lease (true lease)", "Various", "Embedded; no APR disclosed", "0-10% deposit", "24-60 mo", "Operators wanting equipment off balance sheet; ends with return or buyout"],
        ["Capital lease ($1 buyout)", "Various", "Effective APR similar to equip financing", "10% typical", "36-60 mo", "Operators wanting ownership at end of term"],
        ["Vendor financing (operator-direct)", "Varies by OEM", "0-9% promotional or market", "0-20%", "36-60 mo", "When OEM offers promo financing on specific models"],
        ["Personal credit card", "FICO ≥ 650 typical", "18-30%", "0%", "Revolving", "Bridge / urgent only — not for primary equipment finance"],
      ],
    },
    {
      heading: "2. Total cost of capital calculator (per-machine)",
      paragraph:
        "Estimate total cost of capital over the term. Compare options on apples-to-apples basis.",
      headers: ["Input", "Cash", "Equip finance A", "SBA 7(a)", "Operating lease", "Your option"],
      rows: [
        ["Machine + payment + telemetry cost", "$5,500", "$5,500", "$5,500", "Operator pays lease, not capex", "____"],
        ["Down payment", "$5,500", "$550 (10%)", "$550 (10%)", "$300 deposit", "____"],
        ["Amount financed", "$0", "$4,950", "$4,950", "Lease principal", "____"],
        ["APR or implicit cost", "Opportunity cost only", "9%", "Prime + 3.5% (~ 11.5%)", "Embedded ~ 12-14%", "____"],
        ["Term (months)", "—", "48", "84", "48", "____"],
        ["Monthly payment", "—", "$123", "$87", "$135", "____"],
        ["Total payments over term", "$5,500", "$5,904 + $550 = $6,454", "$7,308 + $550 = $7,858", "$6,480 + buyout", "____"],
        ["Cost of capital (vs cash)", "$0", "$954", "$2,358", "$980 + buyout", "____"],
        ["Section 179 deduction (year 1, current limits)", "Up to ~ $1.2M cap", "Same — equipment owned", "Same — equipment owned", "Lease deducts payments; no Section 179", "____"],
        ["Bonus depreciation (year 1)", "Phase-down per IRS schedule (~ 60% in 2024 / 40% in 2025 / 20% in 2026)", "Same", "Same", "N/A — operating lease", "____"],
      ],
    },
    {
      heading: "3. Decision rubric — how to choose",
      items: [
        { label: "If you have ≥ $20K liquid + plan to scale fast", value: "Use cash for first 2-3 machines to build operating history; then pivot to equipment financing or SBA 7(a) for accelerated fleet build. Cash deployment preserves equipment financing capacity for expansion." },
        { label: "If you have $5-20K liquid + want to start", value: "Equipment financing at A or A+ credit tier; 10% down; 48-month term. Reserve cash for working capital (initial inventory, fuel, payment processing, insurance)." },
        { label: "If you need working capital + equipment", value: "SBA 7(a) general loan covers equipment + working capital + initial inventory in a single facility; longer term lowers monthly burden in early operating period." },
        { label: "If you're acquiring an existing route + buying real estate / warehouse", value: "SBA 504 for the real estate + SBA 7(a) for the route acquisition + working capital; structure with SBA-approved lender." },
        { label: "If you want equipment off balance sheet", value: "Operating lease (true lease); end-of-term return option preserves flexibility; trade-off is no Section 179 benefit + you don't own at end of term." },
        { label: "If OEM offers a 0% / promotional rate", value: "Vendor financing on specific models can beat equipment financing for term length; confirm there's no markup on equipment price baked into the promo." },
        { label: "If credit is B-tier and machine is < $7K", value: "SBA Microloan covers up to $50K; lower credit threshold; longer underwriting cycle." },
      ],
    },
  ],
  footer:
    "This framework is informational and not financial or tax advice. Operators should validate current SBA program terms, lender rates, and IRS Section 179 + bonus depreciation limits with their lender and CPA before commitment. LetUsVending can connect prospective operators with the LetUsVending operator network and reference resources.",
});

console.log("wrote "+"vending-machine-financing-options");
