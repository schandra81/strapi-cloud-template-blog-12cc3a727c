import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("should-you-use-a-vending-locator-service", [
  tldr({
    heading: "Should you use a vending locator service?",
    paragraph:
      "Vending locator services are third-party firms that prospect, qualify, and contract vending placements on behalf of independent vending operators — typically charging $500-3,000 per qualified placement (paid by operator, not host). For independent operators just starting out, locator services seem attractive: hand off the cold-calling, get placements faster. The reality is mixed. Industry-track-record data: 30-60% of locator-sourced placements churn within 12 months (vs ~10-20% for operator-sourced placements). Common locator failure patterns: pad-the-numbers placements (low-traffic sites that look good on paper but don't generate revenue), insufficient host qualification (sites that resist restocking access, slow to pay commission, or have unstable management), one-and-done contracts (no ongoing relationship management; operator stuck with low-performers). The format makes sense for specific scenarios: experienced operators with strong route economics willing to absorb 30-40% locator churn for fast expansion; established operators in capital-light expansion mode (locator finds; operator places own machines; locator earns finder fee). The format does not make sense for: new operators with thin route economics, hosts evaluating whether to engage vending (locators don't represent hosts; they represent operators), single-machine independent operators (locator fee usually exceeds per-machine net margin over 2-3 years).",
    bullets: [
      { emphasis: "30-60% locator placement churn within 12 months:",
        text: "Vs 10-20% for operator-sourced placements. Pad-the-numbers placements, insufficient qualification, no ongoing relationship management." },
      { emphasis: "$500-3,000 per qualified placement:",
        text: "Paid by operator. For new operators with thin route economics, locator fee often exceeds per-machine net margin over 2-3 years." },
      { emphasis: "Format makes sense for experienced operators only:",
        text: "Strong route economics + willing to absorb 30-40% churn for fast expansion. Not for new operators or hosts; hosts don't engage locators." },
    ],
  }),
  statStrip({
    heading: "Vending locator service benchmarks",
    stats: [
      { number: "$500-3,000", label: "per qualified placement", sub: "paid by operator, not host", accent: "blue" },
      { number: "30-60%", label: "locator placement churn", sub: "within 12 months", accent: "orange" },
      { number: "10-20%", label: "operator-sourced churn", sub: "for comparison", accent: "blue" },
      { number: "2-3 years", label: "payback period (locator fee)", sub: "if placement survives", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending locator service vs operator self-prospecting",
    sub: "Trade-offs across the dimensions that drive the choice. Most successful operators do their own prospecting at scale; locator services are situational.",
    headers: ["Dimension", "Vending locator service", "Operator self-prospecting"],
    rows: [
      ["Speed to placement", "Fast (locator pipeline established)", "Slow (operator builds pipeline)"],
      ["Cost per placement", "$500-3,000 fee paid by operator", "Operator labor cost (salary + commission)"],
      ["12-month churn rate", "30-60%", "10-20%"],
      ["Host qualification depth", "Variable; many locators light on qualification", "Operator-driven; tied to operator's own success"],
      ["Ongoing relationship", "Typically none post-placement", "Operator owns relationship long-term"],
      ["Placement quality", "Variable; pad-the-numbers placements common", "Higher (operator selects own targets)"],
      ["Best fit for", "Experienced operators expanding fast", "Operators building durable book of business"],
      ["Worst fit for", "New operators with thin route economics", "Operators with no sales capability at all"],
      ["Geographic flexibility", "Locator footprint may be narrow", "Operator covers own service area"],
      ["Compliance + reference verification", "Variable; many locators skip", "Operator-driven; tied to own track record"],
    ],
  }),
  specList({
    heading: "How vending locator services actually work",
    items: [
      { label: "Locator prospecting + qualification", value: "Locator team prospects potential vending sites via cold-calling, walking neighborhoods, online lead generation. Qualification depth varies: some locators verify host decision-maker, traffic level, electrical access, and willingness to sign; others skip much of this and pad numbers. Operator should request locator's qualification process in writing." },
      { label: "Host contracting + signature", value: "Locator presents standard vending contract (often provided by operator) to host. Host signs; locator delivers signed contract to operator. Operator places machine. Some locators add their own terms (e.g., locator owns relationship for 12 months); operator should verify contract language doesn't bind operator to locator beyond fee." },
      { label: "Locator fee structure", value: "$500-3,000 per qualified placement typically. Sometimes tiered (more for larger placements). Paid by operator on placement (sometimes 50% at signature, 50% after first 30 / 60 / 90 days of revenue). Some locators charge monthly retainer + per-placement fee at higher-volume operator clients." },
      { label: "Post-placement responsibility", value: "Typically none. Locator earns fee on signature; doesn't manage ongoing relationship. Operator owns ongoing relationship (restocking, service, planogram, commission settlement). Locator failure mode: operator stuck with low-performing placement; no leverage to recover locator fee at early churn." },
      { label: "Locator quality variability", value: "Wide range. Top-tier locators verify host qualification (traffic, electrical, decision-maker, financial stability), deliver high-conversion placements, sometimes guarantee placements (refund or replace at early failure). Bottom-tier locators cold-call indiscriminately, deliver pad-the-numbers placements, no guarantees. Verify locator track record at engagement." },
      { label: "Locator contract terms (operator-locator)", value: "Engagement agreement between operator + locator. Terms: per-placement fee, qualification standards, replacement guarantee (if any), exclusivity (locator may demand exclusivity in geography; usually negotiable), termination provisions. Operator should engage attorney at agreement signature; locator terms vary widely." },
      { label: "Industry track record", value: "Locator-sourced placements: 30-60% churn within 12 months across industry track-record data. Operator-sourced placements: 10-20% churn within 12 months. Differential driven by qualification depth + ongoing relationship. Operators with locator-heavy expansion strategy should plan for higher churn + higher cost per durable placement." },
      { label: "Host perspective", value: "Hosts don't engage locator services directly. Locators represent operators (or themselves), not hosts. Hosts evaluating vending should engage operators directly via RFP or referral; engage VMC if multi-location enterprise. Locators are operator-side commercial infrastructure; not host-side advisors." },
    ],
  }),
  tipCards({
    heading: "Five vending locator service mistakes",
    sub: "Documented across operator post-engagement reviews. All preventable with structured locator evaluation + qualification standards.",
    items: [
      { title: "New operators using locators with thin route economics", body: "For new operators with thin per-machine net margin, locator fee ($500-3,000 per placement) often exceeds per-machine net margin over 2-3 years. Combined with 30-60% locator churn, ROI on locator engagement is negative. New operators should self-prospect; locators are for experienced operators with strong route economics." },
      { title: "Skipping locator track-record verification", body: "Locator quality varies widely. Top-tier locators verify host qualification (traffic, electrical, decision-maker, financial stability) and deliver high-conversion placements. Bottom-tier locators cold-call indiscriminately and deliver pad-the-numbers placements. Verify locator track record at engagement; ask for placement durability data." },
      { title: "No replacement guarantee in locator agreement", body: "Modern locator agreements should include replacement guarantee (refund or replace at early failure — typically under 90 days). Without guarantee, operator absorbs full cost of locator failure. Build replacement guarantee into locator engagement agreement; engage attorney at signature." },
      { title: "Hosts confusing locators with VMCs", body: "Locators represent operators, not hosts. They prospect placements on behalf of operators; charge operators for delivery. VMCs represent hosts; manage operator portfolio on behalf of host. Hosts evaluating vending should engage operators directly via RFP or VMC for multi-location; not locators." },
      { title: "No ongoing relationship management plan", body: "Locators deliver placement; ongoing relationship is operator responsibility. Locator-sourced placements without ongoing relationship management churn at 30-60% within 12 months. Operators relying on locator-heavy expansion should plan for active account management to reduce churn." },
    ],
  }),
  decisionTree({
    heading: "Should we use a vending locator service?",
    question: "Are you an experienced vending operator with strong route economics, expanding fast in a known service area, willing to absorb 30-40% locator churn for speed?",
    yesBranch: {
      title: "Locator service may make sense — with careful vetting.",
      description: "Experienced operators with strong route economics can absorb locator churn rate while gaining expansion speed. Vet locator track record (placement durability data, replacement guarantee, qualification process documented). Engage attorney at locator agreement signature. Build active account management plan to reduce post-placement churn.",
      finalTone: "go",
      finalLabel: "LOCATOR · CAUTIOUS DEPLOYMENT",
    },
    noBranch: {
      title: "Self-prospect or engage a VMC instead.",
      description: "New operators with thin route economics: locator fee often exceeds per-machine net margin; self-prospect. Hosts evaluating vending: locators represent operators, not hosts — engage operators directly via RFP, or VMC for multi-location enterprise. Operators with limited geography: locator footprint may not match. Locators are situational; self-prospecting fits most cases.",
      finalTone: "stop",
      finalLabel: "SELF-PROSPECT · VMC",
    },
  }),
  inlineCta({
    text: "Want the vending locator service evaluation framework (vetting + agreement terms + replacement guarantee + churn management)?",
    buttonLabel: "Get the locator framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending operators on locator service engagement — including locator vetting, agreement structure, replacement guarantees, and placement churn management. The benchmarks reflect operator-side and locator industry track-record data plus operator post-engagement feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Should I use a vending locator service?", answer: "Depends. Experienced operators with strong route economics expanding fast in known service areas can use locators with careful vetting. New operators with thin route economics: locator fee often exceeds per-machine net margin over 2-3 years; self-prospect. Hosts: locators represent operators, not hosts; engage operators directly via RFP.", audience: "Operators" },
      { question: "What do locator services cost?", answer: "$500-3,000 per qualified placement typically. Sometimes tiered (more for larger placements). Paid by operator on placement (sometimes 50% at signature, 50% after first 30 / 60 / 90 days of revenue). Some locators charge monthly retainer + per-placement fee at higher-volume operator clients.", audience: "Operators" },
      { question: "What's the locator placement churn rate?", answer: "30-60% within 12 months across industry track-record data. Operator-sourced placements: 10-20% churn within 12 months. Differential driven by qualification depth + ongoing relationship. Operators with locator-heavy expansion should plan for higher churn + higher cost per durable placement.", audience: "Operators" },
      { question: "Do locators represent hosts or operators?", answer: "Operators. Locators prospect placements on behalf of operators; charge operators for delivery. Hosts don't engage locator services directly. Hosts evaluating vending should engage operators directly via RFP or referral; engage VMC if multi-location enterprise. Locators are operator-side commercial infrastructure.", audience: "Property Managers" },
      { question: "Should new operators use locator services?", answer: "Usually not. For new operators with thin per-machine net margin, locator fee often exceeds per-machine net margin over 2-3 years. Combined with 30-60% locator churn, ROI on locator engagement is often negative for new operators. Self-prospect; build sales capability internally; consider locators after route economics improve.", audience: "Operators" },
      { question: "How do I vet a vending locator?", answer: "Request placement durability data (12-month churn rate at peer operators), qualification process documentation (traffic, electrical, decision-maker, financial stability verification), replacement guarantee terms (refund or replace at early failure), references at peer operators. Engage attorney at locator agreement signature.", audience: "Operators" },
      { question: "What's a replacement guarantee?", answer: "Modern locator agreements include replacement guarantee — refund or replace placement at early failure (typically under 90 days). Without guarantee, operator absorbs full cost of locator failure. Build replacement guarantee into locator engagement agreement; verify trigger conditions and refund / replacement terms.", audience: "Operators" },
      { question: "Are locators different from vending management companies?", answer: "Yes, fundamentally. Locators represent operators; prospect placements; charge operators per placement. VMCs represent enterprise hosts; manage operator portfolio on behalf of host; charge hosts override or monthly fee. Different sides of the market; not substitutes. Hosts engage VMCs; operators sometimes engage locators.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator commercial models and locator practice" },
      { label: "FTC — Business opportunity rule guidance", url: "https://www.ftc.gov/business-guidance/resources/business-opportunity-rule-revised", note: "FTC reference for business opportunity disclosure standards applicable to some locator engagements" },
      { label: "IFA — International Franchise Association", url: "https://www.franchise.org/", note: "Industry trade association covering franchise and business opportunity standards relevant to locators" },
      { label: "SBA — Small Business Administration vending business guidance", url: "https://www.sba.gov/", note: "Federal small business resources covering vending business commercial models" },
      { label: "Vending Times — operator commercial model and locator coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator expansion and locator practice" },
    ],
  }),
  relatedGuides({
    heading: "Related vending locator and operator guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending vendor selection criteria", description: "Operator evaluation framework for hosts — telemetry, SLA, references, transparency.", href: "/vending-Info-for-businesses/vending-vendor-selection-criteria" },
      { eyebrow: "Operations", title: "What is a vending management company?", description: "VMCs versus locators — host-side governance versus operator-side prospecting.", href: "/vending-management-companies/what-is-a-vending-management-company" },
      { eyebrow: "Hub", title: "All vending machine locator guides", description: "Locator services, operator prospecting, placement durability, and operator-side commercial models.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
