import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-choose-a-vending-management-company", [
  tldr({
    heading: "How should we evaluate and choose a vending management company?",
    paragraph:
      "Vending management company (VMC) selection is the most consequential decision in any enterprise vending program — VMC quality determines whether portfolio governance becomes amenity infrastructure or a layer of overhead. The ten criteria that matter: (1) portfolio dashboard depth (real-time across all operators + locations), (2) operator network breadth (national coverage + specialty formats — AI cooler wall, fresh food locker, micro-market), (3) master contract sophistication (operator transition rights, performance-failure exit, fee escalation caps), (4) SLA enforcement track record (operator scorecard data + corrective action history), (5) ESG / sustainability reporting consolidation (pre-formatted for STARS / FEMP / ESG submissions), (6) compliance enforcement breadth (ADA, Section 508, PCI-DSS, food safety, industry-specific — TJC, FERPA, Randolph-Sheppard, Smart Snacks), (7) reference checks at peer enterprise hosts (Fortune 500, federal, hospital systems, universities), (8) commission settlement transparency (sample consolidated statement at proposal), (9) account management depth (dedicated account team + quarterly business review structure), (10) fee structure transparency (5-15% override vs $2-25K monthly fixed). Verify all at proposal review; demo portfolio dashboard live. Engage commercial contract counsel at master contract signature. Don't optimize for VMC fee alone — portfolio-level revenue × commission % matters more than VMC fee percentage.",
    bullets: [
      { emphasis: "Ten criteria for VMC selection:",
        text: "Portfolio dashboard, operator network, master contract sophistication, SLA enforcement, ESG, compliance, references, commission settlement, account team, fee transparency." },
      { emphasis: "Reference checks at peer enterprise hosts:",
        text: "Fortune 500, federal, hospital systems, universities. Generic references nearly worthless; same-segment references reveal year 2-3 reality." },
      { emphasis: "Don't optimize for VMC fee alone:",
        text: "Portfolio-level revenue × commission % matters more. VMC quality drives operator performance + commission lift; fee is one input." },
    ],
  }),
  statStrip({
    heading: "VMC selection benchmarks",
    stats: [
      { number: "10 criteria", label: "selection framework", sub: "verify each at proposal review", accent: "blue" },
      { number: "3-5", label: "peer enterprise references", sub: "same segment (F500, federal, etc.)", accent: "blue" },
      { number: "60-120 days", label: "VMC RFP cycle", sub: "vs 60-90 day operator RFP", accent: "blue" },
      { number: "Dedicated account team", label: "modern requirement", sub: "with quarterly business review", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "VMC selection — ten criteria",
    sub: "All ten matter; verify each at proposal review. Modern VMCs meet all; legacy / undersized VMCs meet few.",
    headers: ["Criterion", "Modern standard", "Verification method"],
    rows: [
      ["Portfolio dashboard depth", "Real-time across operators + locations", "Live dashboard demo + reference verification"],
      ["Operator network breadth", "National coverage + specialty formats", "Operator list + same-segment reference"],
      ["Master contract sophistication", "Operator transition rights + exit clauses + fee caps", "Sample master contract review + legal counsel"],
      ["SLA enforcement track record", "Operator scorecards + corrective action history", "Sample scorecard + reference verification"],
      ["ESG / sustainability consolidation", "Pre-formatted STARS / FEMP / ESG output", "Sample portfolio ESG report"],
      ["Compliance enforcement breadth", "ADA + Section 508 + PCI-DSS + food safety + industry", "VPAT + compliance audit history"],
      ["Reference checks at peer hosts", "3-5 in same segment + would-you-renew", "Reference calls; structured script"],
      ["Commission settlement transparency", "Sample consolidated statement at proposal", "Review statement methodology"],
      ["Account management depth", "Dedicated team + quarterly business review", "Account team meeting + sample QBR deck"],
      ["Fee structure transparency", "5-15% override or $2-25K monthly fixed, no escalators", "Fee schedule review + contract counsel"],
    ],
  }),
  specList({
    heading: "VMC selection specifications",
    items: [
      { label: "Portfolio dashboard verification", value: "Real-time view across all operators + locations. Revenue, transactions, top SKUs, stockouts, service tickets, customer satisfaction. Live demo at proposal review; not screenshots. Reference verification — call 3-5 peer enterprise hosts; verify dashboard real-time + completeness. VMCs with batch / monthly dashboards can't credibly support enterprise governance." },
      { label: "Operator network breadth", value: "National geographic coverage + specialty format breadth (full-service vending, AI cooler wall, micro-market, fresh food locker, refreshment program). Verify operator list at proposal; verify specialty operator relationships. VMCs with narrow operator network can't cover mixed-format enterprise portfolios; verify before signature." },
      { label: "Master contract sophistication", value: "Operator transition rights (replace underperforming operators without master contract disruption), performance-failure exit clauses (SLA breaches), fee escalation caps (annual increases bounded), ESG / compliance enforcement language, indemnification provisions. Engage commercial contract counsel at signature; sample master contract review at proposal." },
      { label: "SLA enforcement track record", value: "Operator scorecards with performance rankings. Corrective action history (operators put on performance improvement plans, replaced). Performance bonus / penalty applied at operator level. Reference verification — peer hosts confirm SLA enforcement in practice. VMCs that report 'all green' across operators are not enforcing SLA." },
      { label: "ESG / sustainability consolidation", value: "Pre-formatted quarterly reports for host STARS / FEMP / ESG submissions. ENERGY STAR fleet share, low-GWP refrigerant share, packaging mix, recycling capture rate, truck-mile reduction. Sample portfolio ESG report at proposal. Critical at federal + university + Fortune 500 hosts with reporting requirements." },
      { label: "Compliance enforcement breadth", value: "ADA accessibility (reach ranges, payment accessibility), Section 508 / VPAT (federal), PCI-DSS (payment), food safety (ServSafe), Smart Snacks (K-12), Randolph-Sheppard (federal Blind Vendor priority), TJC (hospitals), FERPA (campuses), HIPAA-adjacent considerations. VMC enforces uniform standard across operators; periodic audit." },
      { label: "Reference checks at peer enterprise hosts", value: "3-5 in same segment (Fortune 500 corporate real estate, federal GSA / DoD, hospital systems, university systems). Call references; ask portfolio dashboard usefulness, SLA enforcement, ESG reporting quality, operator transition handling, would-you-renew. Same-segment references reveal year 2-3 reality." },
      { label: "Commission settlement transparency", value: "Sample consolidated monthly statement at proposal showing per-operator + per-location commission calculation. Verify VMC fee structure (override percentage or fixed monthly). Verify methodology — gross vs net, after-refunds, after processing fees. VMCs willing to share statement transparency are VMCs worth signing with." },
      { label: "Account management depth", value: "Dedicated account team (account director, operations manager, analyst) at meaningful portfolio size. Quarterly business review with VMC + host stakeholders. Performance trends, gap analysis, operator scorecard review, planogram refinement, corrective action plans. Account team meeting at proposal; sample QBR deck." },
      { label: "Fee structure transparency", value: "5-15% override on operator commission, or $2-25K monthly fixed depending on portfolio size. Annual escalation caps (typically 2-3% or CPI). No surprise fees (transition fees, reporting fees, dashboard fees). Verify fee schedule at master contract signature; engage commercial contract counsel." },
    ],
  }),
  tipCards({
    heading: "Five VMC selection mistakes",
    sub: "Each is documented in enterprise host post-contract regret data. All preventable with structured selection process.",
    items: [
      { title: "Optimizing for VMC fee alone", body: "Lowest VMC fee ≠ best portfolio outcome. VMC quality drives operator performance + commission lift. Evaluate as portfolio-level revenue × commission %, not VMC fee percentage. Cheap VMC with weak operator enforcement underperforms premium VMC with strong enforcement." },
      { title: "Skipping peer-segment reference checks", body: "VMCs put best foot forward in proposals. Same-segment references (Fortune 500, federal, hospital, university — match your segment) reveal year 2-3 reality. Generic references are nearly worthless. Ask 'would you renew?' as most telling question; ask about operator transitions, ESG reporting, dashboard usefulness." },
      { title: "Accepting screenshots instead of live dashboard demo", body: "Modern VMCs run real-time portfolio dashboards across operators + locations. Demo live at proposal review; not screenshots, not 'we'll show you after contract.' VMCs that defer dashboard demos are VMCs whose dashboards aren't as advertised. Hard requirement." },
      { title: "Not engaging commercial contract counsel", body: "Enterprise VMC master contracts span multiple operators + geographies + 3-5 year terms. Generic procurement attorneys miss VMC-specific provisions (operator transition rights, performance-failure exit, ESG reporting, fee escalation caps). Engage commercial contract counsel at master contract signature." },
      { title: "Skipping operator network verification", body: "VMCs with narrow operator network can't cover mixed-format enterprise portfolios (AI cooler wall + micro-market + traditional vending + fresh food locker across multiple metros). Verify operator list + specialty operator relationships at proposal; verify before signature." },
    ],
  }),
  decisionTree({
    heading: "Should we use a VMC, or contract operators directly?",
    question: "Does your portfolio span 25+ locations across multiple metros AND include mixed service formats (AI cooler wall + micro-market + traditional vending + fresh food locker)?",
    yesBranch: {
      title: "VMC is the right governance layer.",
      description: "Portfolio scale + format breadth justifies VMC fee through portfolio aggregation, single accountability, ESG consolidation, compliance enforcement. Direct operator contracting across this scale produces administrative overhead that typically exceeds the VMC fee. Standard for Fortune 500 corporate real estate, federal GSA / DoD, hospital systems, university systems.",
      finalTone: "go",
      finalLabel: "VMC · ENTERPRISE",
    },
    noBranch: {
      title: "Contract operators directly.",
      description: "Single-location and small multi-location hosts (under 25 locations in one metro) typically contract operator directly. VMC fee doesn't justify itself at this scale. Use vendor selection framework for operator evaluation; build master service agreement directly between host and operator.",
      finalTone: "stop",
      finalLabel: "DIRECT OPERATOR",
    },
  }),
  inlineCta({
    text: "Want the VMC selection framework (10 criteria + reference check script + master contract review)?",
    buttonLabel: "Get the VMC selection framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on vending management company evaluation and selection for multi-location enterprises, federal agencies, hospital systems, and university systems — including RFP design, master contract review, operator network verification, and ESG / compliance consolidation assessment. The selection criteria reflect operator-side data and enterprise host post-contract feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should we choose a vending management company?", answer: "Ten criteria: portfolio dashboard depth, operator network breadth, master contract sophistication, SLA enforcement track record, ESG / sustainability consolidation, compliance enforcement breadth, reference checks at peer enterprise hosts, commission settlement transparency, account management depth, fee structure transparency. Verify all at proposal review.", audience: "Procurement" },
      { question: "What's the single most important criterion?", answer: "Portfolio dashboard depth + operator network breadth. The dashboard determines whether you can govern the portfolio; the operator network determines whether the VMC can cover your geographies + formats. Verify both at proposal — live dashboard demo + operator list with specialty format coverage.", audience: "Procurement" },
      { question: "How many references should we check?", answer: "3-5 in same segment (Fortune 500 corporate real estate, federal GSA / DoD, hospital systems, university systems — match your segment). Call references; ask portfolio dashboard usefulness, SLA enforcement, ESG reporting quality, operator transition handling, would-you-renew. Same-segment references reveal year 2-3 reality.", audience: "Procurement" },
      { question: "How important is VMC fee?", answer: "Less than most hosts think. VMC quality drives operator performance + commission lift. Evaluate as portfolio-level revenue × commission %, not VMC fee percentage. Cheap VMC with weak operator enforcement underperforms premium VMC. Optimize for VMC capability first; fee is secondary.", audience: "Procurement" },
      { question: "Should we engage legal counsel?", answer: "Yes at master contract signature. Enterprise VMC master contracts span multiple operators + geographies + 3-5 year terms with complex provisions (operator transition rights, performance-failure exit, ESG reporting, fee escalation caps). Generic procurement attorneys miss VMC-specific provisions; engage commercial contract counsel.", audience: "Procurement" },
      { question: "How long should the RFP take?", answer: "60-120 day VMC RFP cycle standard (vs 60-90 day operator RFP). VMC RFP includes operator network verification, dashboard demos, ESG / compliance documentation review, peer reference checks, master contract negotiation. Build RFP timeline into procurement plan; rushed VMC RFPs produce worse selection.", audience: "Procurement" },
      { question: "What should the dashboard demo show?", answer: "Real-time across all operators + locations. Revenue, transactions, top SKUs, stockouts, service tickets, customer satisfaction. Live demo at proposal review with actual operator data (anonymized OK). Not screenshots, not 'we'll show you after contract.' Hard requirement.", audience: "Procurement" },
      { question: "What about specialty format coverage?", answer: "Verify VMC operator network includes specialty formats relevant to your portfolio: AI cooler wall (hotels, hospitals, premium offices), micro-market (high-volume offices, hospitals, university unions), fresh food locker (universities, hospitals), refreshment program (premium offices). VMCs with narrow operator networks can't cover mixed-format portfolios.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator and management company practice" },
      { label: "GSA — U.S. General Services Administration vending program guidance", url: "https://www.gsa.gov/", note: "Federal procurement guidance covering vending management at federal installations" },
      { label: "IFMA — International Facility Management Association", url: "https://www.ifma.org/", note: "Facility management industry standards covering enterprise vending program governance" },
      { label: "AASHE — STARS sustainability reporting framework", url: "https://stars.aashe.org/", note: "Sustainability reporting framework relevant to university VMC ESG consolidation" },
      { label: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards underlying VMC compliance enforcement" },
    ],
  }),
  relatedGuides({
    heading: "Related vending management guides",
    items: [
      { eyebrow: "Sister guide", title: "What is a vending management company?", description: "VMC versus operator distinction, capabilities, fee structure, enterprise program rationale.", href: "/vending-management-companies/what-is-a-vending-management-company" },
      { eyebrow: "Sister guide", title: "Contract terms with vending management companies", description: "Master contract structure — operator transition, performance-failure exit, fee escalation caps.", href: "/vending-management-companies/contract-terms-with-vending-management-companies" },
      { eyebrow: "Hub", title: "All vending management company guides", description: "VMC capabilities, selection, contracts, fee structure, and enterprise program design.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
