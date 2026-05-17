import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "supplier-selection-industrial-vending",
  assetType: "pack",
  title: "Industrial Vending Supplier-Selection RFP Framework",
  subtitle: "Six-dimension scorecard, reference-check template, contract review checklist",
  intro:
    "Industrial vending supplier selection has different priorities than retail or office. ANSI/ASSE Z244.1 lockout-aware service, ANSI Z535 signage, OSHA 1910.176 + 1910.95 alignment, FDA Food Code 3-501.16 cold-chain, and ADA Section 308 reach range all matter. This RFP framework codifies three artifacts — six-dimension scorecard, reference-check template, contract review checklist — so a warehouse procurement leader is equipped to select a compliant, financially stable operator rather than the lowest commission bid.",
  sections: [
    {
      heading: "1. Six-dimension scorecard",
      paragraph:
        "Each bidder scored 1-5 across six dimensions. Minimum 24/30 for award; minimum 4/5 on Compliance + Service SLA dimensions (no exceptions).",
      headers: ["Dimension", "What to verify", "Weight", "Minimum score"],
      rows: [
        ["Industrial experience", "≥ 24 months at facilities ≥ 250 workers; 3 references", "20%", "4/5"],
        ["Compliance capability", "ADA + ANSI + FDA + FALCPA attestation history", "25%", "4/5"],
        ["Service SLA + cadence", "Tier-1 < 24-hour resolution; 3-shift coverage", "20%", "4/5"],
        ["Telemetry + technology", "Cellular telemetry + EMV/NFC + cashless mix track record", "15%", "3/5"],
        ["Financial stability", "5-year financials, D&B, no bankruptcy", "10%", "3/5"],
        ["Commission economics", "Itemized cost build + commission band; not lowest-bid-wins", "10%", "3/5"],
      ],
    },
    {
      heading: "2. Reference-check template",
      paragraph:
        "Speak with 3 references at facilities comparable in size, shift coverage, and equipment mix. Each reference covers eight questions.",
      items: [
        { number: 1, title: "Length of relationship + comparable scope", description: "How long has the reference used this operator? What's the equipment mix and shift coverage?" },
        { number: 2, title: "SLA adherence", description: "Tier-1 response time on actual incidents (machine offline, payment failure, cold-chain excursion). Documented adherence rate?" },
        { number: 3, title: "Telemetry visibility", description: "Does the reference have read access to per-SKU velocity + uptime + cashless mix? Is the data current?" },
        { number: 4, title: "Compliance attestation", description: "Has operator provided written attestation on Section 308, FDA Food Code, FALCPA, and (if K-12) Smart Snacks?" },
        { number: 5, title: "Refund + dispute handling", description: "Refund processing time? Dispute resolution experience?" },
        { number: 6, title: "Surge / temporary capacity", description: "Has operator mobilized temporary machines or surge labor during peak windows? Lead time?" },
        { number: 7, title: "Billing transparency", description: "Are invoices itemized and reconcilable to telemetry? Any disputes?" },
        { number: 8, title: "Would they re-select", description: "If RFP'ing today, would the reference re-select this operator? Why or why not?" },
      ],
    },
    {
      heading: "3. Compliance attestation requirements",
      paragraph:
        "Operator must attest in writing to each compliance area before commit. Attestation refreshes annually.",
      items: [
        { check: "ADA Title III + Section 308 — operable parts ≤ 48 inches, ≥ 15 inches; ≤ 5 lbf operating force; clear floor space 30×48 inches." },
        { check: "ADA Section 707 (where kiosk applies) — VPAT for digital interface." },
        { check: "ANSI Z535 signage — machine-mounted safety placards + wayfinding compliant." },
        { check: "ANSI/ASSE Z244.1 — lockout-aware service interface; service door interlock." },
        { check: "OSHA 1910.176 — aisle clearance preserved at placement." },
        { check: "OSHA 1910.95 — audio confirmation level appropriate where hearing protection used." },
        { check: "FDA Food Code 3-501.16 — refrigerated 35-40°F, hot-hold ≥ 135°F." },
        { check: "FALCPA — allergen labels on every SKU; allergen summary on machine face." },
        { check: "PCI DSS — cashless payment hardware compliance." },
        { check: "State weights + measures — calibration documented for any SKU sold by weight." },
      ],
    },
    {
      heading: "4. Contract review checklist",
      paragraph:
        "Procurement and legal counsel review the contract against this checklist before signature.",
      items: [
        { check: "Scope — number + type of machines, placement, restock cadence, shift coverage." },
        { check: "Commission structure — clear rate, payment frequency, any escalator capped at indexed CPI." },
        { check: "SLA tiers — Tier-1/2/3 with quantified resolution times and remedies." },
        { check: "Compliance attestation refresh cadence — annual minimum." },
        { check: "Insurance — GL ≥ $5M, auto, workers' comp, cyber, umbrella where required." },
        { check: "Indemnification — product liability per state cap; cross-indemnification." },
        { check: "Term — initial 36-60 months; renewal terms; termination for cause + convenience." },
        { check: "Data ownership — telemetry data accessible by host with retention ≥ 24 months." },
        { check: "Audit rights — annual open-book audit of per-machine revenue + commission." },
        { check: "Cost pass-through cap — indexed to CPI-Food-Away-From-Home; no unilateral increases." },
        { check: "Force majeure + business continuity — operator's BC plan documented." },
      ],
    },
    {
      heading: "5. Financial stability check",
      paragraph:
        "Operator financial stability matters because mid-contract operator failure stranded inventory and forces re-bid under duress.",
      items: [
        { label: "5-year financials", value: "Audited or reviewed financial statements for past 5 years (or as available)." },
        { label: "D&B / business credit", value: "D&B Paydex ≥ 80 or equivalent third-party credit signal." },
        { label: "Bankruptcy / litigation history", value: "No bankruptcy in past 7 years; no pending litigation that threatens going concern." },
        { label: "Revenue concentration", value: "No single host > 30% of operator revenue (concentration risk)." },
        { label: "Insurance current", value: "All insurance certificates current and meet contract requirements." },
        { label: "Bonding capacity", value: "Operator can provide performance bond if RFP requires (typical for large public sector)." },
      ],
    },
    {
      heading: "6. RFP timeline",
      headers: ["Week", "Milestone", "Output"],
      rows: [
        ["Week 0", "RFP scope lock", "Scope document + requirements traceability matrix"],
        ["Week 1", "RFP issued", "Pre-bid conference scheduled"],
        ["Week 3", "Pre-bid conference + Q&A", "Q&A addendum issued"],
        ["Week 5", "Bid due date", "Bids received + receipt log"],
        ["Week 6", "Scorecard scoring", "Initial ranking + shortlist of 2-3"],
        ["Week 7-8", "Reference checks + finalist presentations", "Reference summary + presentation notes"],
        ["Week 9", "Award recommendation", "Recommendation + board agenda packet"],
        ["Week 10-12", "Contract negotiation + signature", "Executed contract"],
        ["Week 13-16", "Installation + UAT", "Live machines + Section 308 attestation"],
      ],
    },
    {
      heading: "7. Common selection pitfalls",
      items: [
        { label: "Lowest-commission bid wins", value: "Commission below 8-10% often signals operator can't fund compliance + telemetry. Mitigation: minimum compliance attestation floor." },
        { label: "Lacks K-12 / industrial / cold-chain segment experience", value: "Operator with retail experience but no industrial track record fails on Z244.1 + Z535 + cold-chain. Mitigation: segment-specific reference requirement." },
        { label: "Telemetry afterthought", value: "Operator quotes telemetry as 'available' but not deployed. Mitigation: contract clause requires sub-15-min heartbeat on every machine at install." },
        { label: "No surge / temporary capacity capability", value: "Operator can't mobilize for peak windows. Mitigation: explicit SLA addendum on surge labor + temp capacity." },
        { label: "Refund opacity", value: "Operator doesn't report refund rate. Mitigation: monthly KPI report contractual." },
      ],
    },
  ],
  footer:
    "This RFP framework is a working procurement reference. Confirm state procurement code with district / facility counsel and localize the scorecard weights to the facility's priority dimensions.",
});

console.log("wrote "+"supplier-selection-industrial-vending");
