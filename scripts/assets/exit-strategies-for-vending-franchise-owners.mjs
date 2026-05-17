import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "exit-strategies-for-vending-franchise-owners",
  assetType: "playbook",
  title: "Vending Franchise Exit Playbook",
  subtitle: "Preparation timeline, valuation methodology, broker engagement",
  intro:
    "Selling a vending franchise — single-unit or multi-unit — works best when the operator starts the preparation cycle 18-36 months before listing. This playbook codifies the preparation timeline, the four valuation methodologies buyers apply, broker engagement structure, and the FDD + franchise-transfer-approval mechanics that govern most franchise exits.",
  sections: [
    {
      heading: "1. Preparation timeline",
      headers: ["Window", "Owner action", "Goal"],
      rows: [
        ["T-36 to T-18 months", "Clean financials, normalize add-backs, formalize SOPs, reduce owner-dependent revenue", "Establish 2-3 years of clean financials for valuation"],
        ["T-18 to T-12 months", "Telemetry + reporting baseline, contract assignability audit, lease renewal posture", "Make the business operationally legible to a buyer"],
        ["T-12 to T-6 months", "Engage broker / M&A advisor + tax/legal counsel; CIM (confidential information memorandum) prep", "List-ready package"],
        ["T-6 to T-0 months", "Active marketing, LOI review, due diligence, franchisor transfer approval", "Close"],
        ["T-0 to T+12 months", "Transition support, holdback / earn-out resolution, non-compete window", "Clean exit"],
      ],
    },
    {
      heading: "2. Financial preparation",
      paragraph:
        "Buyers value vending businesses on adjusted EBITDA over 2-3 trailing years. Clean financials + reasonable add-backs add significant multiple uplift. Aggressive or unsupportable add-backs do the opposite.",
      items: [
        { number: 1, title: "Three years of clean P&L", description: "GAAP-leaning P&L, separated by location + machine + product category. Cash + cashless mix split. Commission paid to host visible per location." },
        { number: 2, title: "Normalized add-backs", description: "Owner compensation above market, personal vehicle / phone / travel, one-time legal + advisor fees, family-payroll above market. Each add-back documented with supporting paperwork." },
        { number: 3, title: "Owner-dependent revenue reduction", description: "Owner-only relationships migrated to staff or operations manager 12+ months before exit. Buyer discounts revenue tied solely to seller relationship." },
        { number: 4, title: "Quality of earnings (QoE) — buyer side", description: "Buyer typically commissions QoE from accounting firm during due diligence; seller-side QoE 6-12 months before list smooths the buyer's review." },
        { number: 5, title: "Tax structure", description: "Asset sale vs equity sale carries materially different tax outcomes; consult tax counsel 18+ months before listing." },
      ],
    },
    {
      heading: "3. Four valuation methodologies",
      headers: ["Method", "Typical multiple / formula", "When applied"],
      rows: [
        ["Adjusted EBITDA multiple", "2.5x-4.5x adjusted EBITDA", "Primary for established multi-unit franchises with $500K+ EBITDA"],
        ["Revenue multiple", "0.6x-1.0x trailing 12-month revenue", "Smaller routes; less common"],
        ["Per-machine valuation", "$2,500-$8,000 per machine net of equipment age", "Single-unit or route-by-route sale"],
        ["Discounted cash flow (DCF)", "Sum of forecasted free cash flow at WACC discount", "Larger franchises with stable contracts + visible runway"],
      ],
    },
    {
      heading: "4. Value drivers — what moves the multiple",
      items: [
        { check: "Long-term host contracts with assignability — multi-year contracts surviving sale add 0.5-1.0x to the multiple" },
        { check: "Telemetry + KPI transparency — operator dashboards demonstrating uptime + sell-through reduce buyer uncertainty premium" },
        { check: "Diversified host portfolio — no single host > 15% of revenue reduces concentration discount" },
        { check: "Younger equipment fleet — avg age < 7 years; ENERGY STAR-aligned reduces near-term capex needed" },
        { check: "Trained operations team independent of owner — reduces owner-dependence discount" },
        { check: "Clean financials + minimal add-backs requiring explanation — reduces buyer / lender friction" },
        { check: "Growing trend line (revenue + EBITDA) over trailing 24-36 months — multiple uplift" },
        { check: "Established franchisor relationship + good standing — reduces transfer-approval risk" },
      ],
    },
    {
      heading: "5. Broker engagement",
      items: [
        { number: 1, title: "Broker vs M&A advisor", description: "Single-unit or sub-$1M revenue: business broker (BizBuySell + IBBA-affiliated). Multi-unit or $1M+: lower-middle-market M&A advisor (boutique firm with vending + route-based experience)." },
        { number: 2, title: "Engagement letter terms", description: "Success fee 8-12% (broker) or 4-7% (M&A advisor) on transaction value. Minimum fee + retainer typical. Tail period 12-24 months on introduced buyers." },
        { number: 3, title: "CIM (confidential information memorandum)", description: "8-15 page CIM covering business overview, financials, host portfolio, equipment fleet, growth runway. NDA-gated; teaser distributed broadly first." },
        { number: 4, title: "Buyer outreach", description: "Strategic buyers (national + regional vending operators), private equity (vending + route-based platforms), individual buyers (SBA-financed). Broker manages parallel processes for competitive tension." },
        { number: 5, title: "LOI review + selection", description: "Multiple non-binding letters of intent (LOIs) evaluated on price, structure (asset vs equity), holdback / earn-out terms, transition support, financing certainty. Best price ≠ best LOI." },
      ],
    },
    {
      heading: "6. Franchisor transfer approval",
      paragraph:
        "Most vending franchises (Healthier4U, NaturalsToYou, Reis & Irvy's, Naturals2Go) include franchise-transfer-approval clauses in the FDD (Franchise Disclosure Document) Item 17. Approval is required for sale; seller cannot close without it.",
      items: [
        { check: "FDD Item 17 — transfer conditions, transfer fee (typically $5K-$25K), buyer qualifications, training requirements" },
        { check: "Right of first refusal (ROFR) — many franchisors have ROFR; seller must offer the deal to the franchisor at the LOI terms before closing with the third-party buyer" },
        { check: "Buyer financial qualification — franchisor reviews buyer net worth + credit; typical thresholds match initial franchisee requirements" },
        { check: "Buyer training — buyer + key staff complete franchisor training program before close or within 90 days after" },
        { check: "Transfer fee + lease consents — transfer fee paid to franchisor; equipment leases + financing assigned with consent of lender + lessor" },
        { check: "Seller release + non-compete — seller signs general release of franchisor + agrees to franchise-area non-compete (typically 2-5 yr radius)" },
        { check: "Timing — franchisor approval cycle typically 30-90 days; build into closing schedule" },
      ],
    },
    {
      heading: "7. Closing + transition",
      headers: ["Element", "Typical structure", "Notes"],
      rows: [
        ["Purchase agreement", "APA (asset purchase) or SPA (stock/equity purchase)", "APA more common; tax-favorable to buyer"],
        ["Earn-out / holdback", "10-25% of price; 12-24 month earn-out tied to retention + revenue", "Aligns seller incentives through transition"],
        ["Transition support", "Seller available 60-180 days post-close, paid consulting rate", "Hand-off of host relationships + operational know-how"],
        ["Non-compete + non-solicit", "2-5 year, geographic radius + host carve-out", "Standard in vending exits"],
        ["Working capital adjustment", "Closing-date NWC peg vs target; true-up 60-90 days post-close", "Standard"],
        ["Reps + warranties + indemnity", "Capped at 10-15% of purchase price; survival 12-24 months", "R&W insurance for deals > $5M"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate broker selection, valuation methodology, franchisor transfer approval, and exit-readiness preparation for vending franchise owners.",
});

console.log("wrote "+"exit-strategies-for-vending-franchise-owners");
