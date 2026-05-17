import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-to-look-for-in-a-vending-company", [
  tldr({
    heading: "What should I look for when hiring a vending company?",
    paragraph:
      "Most vending procurement decisions get made on three visible factors — price, machine appearance, and a sales pitch — when the variables that actually matter are operational. The shortlist of what to evaluate, in priority order: telemetry coverage on every machine (not just newer ones), service response time SLA with measurable target (24-48 hours typical, 4-8 hours best), refund policy and visibility on machine, current customer references in your exact placement type (office, school, gym, etc.), commission and pricing transparency, food safety + insurance documentation, payment system breadth (EMV, contactless, mobile wallets, plus campus card / agency card if applicable), and planogram customization capability. Telemetry is the strongest single predictor of operator quality — operators investing in real-time machine data also tend to invest in service responsiveness, low waste, and reporting. References in your exact placement type matter more than total years in business; a 30-year operator who's never run a school account will underperform a 7-year operator with 50 school accounts.",
    bullets: [
      { emphasis: "Telemetry is the single best signal:", text: "Operators with telemetry on every machine tend to also have fast service, low waste, and structured reporting. Operators without telemetry are running 1990s economics. Use it as your screening filter." },
      { emphasis: "References in your exact placement type:", text: "Office references don't validate a school vendor. Gym references don't validate a courthouse vendor. Ask for 3-5 current accounts in your specific category and call at least two." },
      { emphasis: "Service SLA with measurable target:", text: "'We respond quickly' is not an SLA. Require a written response time (24-48 hours typical, 4-8 hours best-in-class) and a refund processing target. Build it into the contract." },
    ],
  }),
  statStrip({
    heading: "Vending operator evaluation benchmarks",
    stats: [
      { number: "100%", label: "telemetry coverage target", sub: "best-in-class operators", accent: "blue" },
      { number: "24-48 hr", label: "service response SLA", sub: "industry standard", accent: "blue" },
      { number: "3-5", label: "references to request", sub: "in your placement type", accent: "orange" },
      { number: "10-50%", label: "commission range", sub: "depends on volume + placement", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Vending operator quality tiers — what to look for",
    sub: "Three operator tiers along observable quality metrics. Most procurement decisions hide tier 3 operators behind a strong sales pitch.",
    headers: ["Quality signal", "Tier 1 (best-in-class)", "Tier 2 (acceptable)", "Tier 3 (avoid)"],
    rows: [
      ["Telemetry coverage", "100% of machines", "Most newer machines", "None / 'planned'"],
      ["Service response SLA", "4-8 hours, contractual", "24-48 hours, contractual", "'We're responsive' (no SLA)"],
      ["Refund processing", "Auto-refund within 1 hr via telemetry", "Customer-initiated, 3-7 days", "Manual, often unresponsive"],
      ["Visible service contact on machine", "Phone + email + QR code", "Phone + email", "Hidden or missing"],
      ["Planogram reporting", "Monthly per-machine breakdown", "Quarterly summary", "None"],
      ["References in placement type", "3-5+ current accounts", "1-2 current accounts", "None or unrelated"],
      ["Payment systems", "EMV + contactless + mobile + applicable cards", "EMV + contactless", "Cash + EMV only"],
      ["Food safety / insurance", "Current docs, proactive sharing", "Provides on request", "Slow / can't provide"],
    ],
  }),
  specList({
    heading: "Vending operator due-diligence checklist",
    items: [
      { label: "Telemetry coverage verification", value: "Ask: 'What percentage of your machines have telemetry today, and what platform?' Confirm against operator dashboard demo. Operators bluffing on telemetry get caught here." },
      { label: "Service response SLA, contractual", value: "Written response time for service tickets — 24-48 hours typical, 4-8 hours best-in-class. Include resolution time (often 5-7 days for parts). Tie to performance bonus or penalty structure." },
      { label: "Refund policy + processing visibility", value: "Visible service contact on every machine (phone, email, QR). Customer refund SLA (24-48 hours typical). Operator should describe their auto-refund / detection workflow if telemetry-equipped." },
      { label: "Reference accounts in your placement type", value: "3-5 current accounts in your category (office, school, gym, courthouse, etc.). Call at least two. Ask the references: response time, refund handling, planogram customization, would-you-renew (most telling question)." },
      { label: "Commission structure & calculation transparency", value: "Commission as percentage of net sales (typical 10-25% offices, 20-40% schools, 15-35% institutional). Verify calculation: gross or net? After refunds? After freight? Sample monthly statement included in proposal." },
      { label: "Pricing flexibility and transparency", value: "Operator should provide proposed pricing per category (snacks, beverages, healthy SKUs). Price-change policy (frequency, notification cadence). Avoid operators who treat pricing as opaque." },
      { label: "Food safety + insurance documentation", value: "Current ServSafe / equivalent food safety certifications for handlers. Commercial general liability ($1M minimum, $2M-5M for institutional sites). Product liability. W-9 + business license. Provide proactively, not on request." },
      { label: "Payment system breadth", value: "EMV chip + contactless + Apple/Google/Samsung Pay standard. Campus card (CBORD, Heartland) for campuses. CAC/PIV for federal. Agency-card integration where applicable. PCI-DSS attestation current." },
      { label: "Planogram customization capability", value: "Can the operator customize per-machine planogram based on your site's needs (healthy ratio, brand preferences, allergen avoidance)? Ask for an example. Cookie-cutter operators struggle here." },
      { label: "Account management & reporting", value: "Dedicated account manager named at proposal. Monthly performance report (revenue, top sellers, waste rate, refund rate, service tickets). Quarterly business review meeting offered." },
    ],
  }),
  decisionTree({
    heading: "Should we re-evaluate our current vending operator?",
    question: "Has your current operator delivered: telemetry on all machines + service SLA met + monthly reporting + low waste, all for the last 12 months?",
    yesBranch: {
      title: "Stay — re-evaluation has high opportunity cost",
      description: "Switching operators is disruptive (machine swap-out, customer relearning, transition friction). If current operator is hitting benchmarks, switching for marginal price difference is usually a poor trade. Run an annual business review instead.",
      finalTone: "stop",
      finalLabel: "Keep current operator",
    },
    noBranch: {
      title: "Re-RFP — bring 3-5 operators through structured evaluation",
      description: "If telemetry, SLA, or reporting are missing, the operator can't credibly improve in-place. Run a proper RFP with the spec above. Evaluate 3-5 operators; check references in your exact placement type. Typical RFP cycle 60-90 days.",
      finalTone: "go",
      finalLabel: "Run a structured RFP",
    },
  }),
  tipCards({
    heading: "Five vending operator hiring mistakes",
    sub: "Each is a common procurement error that produces predictable post-contract regret. All preventable with structured evaluation.",
    items: [
      { title: "Picking on commission rate alone", body: "Highest commission ≠ best deal. A 30% commission on a poorly-stocked, frequently-broken machine generates less revenue than 20% on a well-run machine. Commission is a percentage — what matters is the dollar amount, which depends on operations." },
      { title: "Skipping reference calls", body: "Operators put their best foot forward in the sales process. References tell you what year 2-3 looks like. Always call at least two; ask 'would you renew?' as the most telling question. References in your exact placement type — generic references are nearly worthless." },
      { title: "Not requiring telemetry coverage", body: "Operators without telemetry can't optimize routes, can't detect failures, can't report reliably, can't reduce waste. They're running an obsolete operations model. Make telemetry coverage a hard RFP requirement, not a preference." },
      { title: "Accepting vague service language", body: "'We respond quickly' is not actionable. Require: response SLA in hours, resolution target in days, refund processing target, escalation path, monthly reporting. Build it into the contract; without contractual language you have no leverage." },
      { title: "Skipping food safety + insurance verification", body: "Some operators carry inadequate insurance or have lapsed food-safety certs. When an incident happens, the host site is exposed. Verify documents up front; require annual recertification. Non-negotiable basics." },
    ],
  }),
  inlineCta({
    text: "Want the vending operator RFP template (telemetry + SLA + reporting + reference-check script)?",
    buttonLabel: "Get the operator RFP template",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator selection at offices, schools, campuses, courthouses, and institutional sites — RFP design, reference-check workflow, and contract scope. The evaluation framework and quality-tier benchmarks reflect operator-side data and procurement post-mortems.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the single most important question to ask a vending operator?", answer: "'What percentage of your machines have real-time telemetry today, and can I see your dashboard?' Telemetry coverage correlates strongly with every other quality metric (service speed, waste rate, reporting quality, refund speed). Operators without telemetry are running 1990s economics.", audience: "Facility Managers" },
      { question: "How important is commission rate vs other factors?", answer: "Less than most buyers think. Commission is a percentage of net sales — what matters is the dollar amount. A 20% commission on a well-run machine often beats 35% on a poorly-run one. Prioritize operations quality first; commission second.", audience: "Procurement" },
      { question: "How many vending operators should we evaluate in an RFP?", answer: "3-5 is typical. Fewer than 3 reduces competitive pressure; more than 5 dilutes evaluation depth. Pre-qualify operators based on placement-type references before issuing RFP. Final selection is usually 2-3 finalists.", audience: "Procurement" },
      { question: "What insurance should the operator carry?", answer: "Commercial general liability ($1M minimum, $2M-5M for institutional sites). Product liability. Workers' compensation (state-mandated). Auto liability if route trucks. Some sites require additional-insured endorsement listing the host site. Verify current certificate at contract.", audience: "Risk Managers" },
      { question: "How should I check operator references?", answer: "Call at least 2-3 references in your exact placement type. Ask: average service response time, refund handling, planogram customization, account management quality, would-you-renew. The 'would you renew' question is the most telling — it captures everything in one answer.", audience: "Procurement" },
      { question: "Should I include local vs national operators?", answer: "Both. Local operators often have better service responsiveness; national operators have better technology platforms and reporting. Compare them on equal terms. Some sites split the fleet — national for high-volume, local for niche placements.", audience: "Facility Managers" },
      { question: "How long should the contract be?", answer: "3-year initial term with 1-2 annual renewals is standard. Shorter (1-year) gives flexibility but reduces operator investment; longer (5+ year) locks in pricing/operations and may be hard to exit. Build in performance-based termination clauses.", audience: "Procurement" },
      { question: "What if the operator we want doesn't have telemetry?", answer: "Decline. Modern vending economics require telemetry. Operators promising 'we'll add it later' rarely follow through. Hold the spec; switch operators if needed. Telemetry-equipped operators exist in every market segment.", audience: "Facility Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association with vendor directories and operator standards" },
      { label: "Vending Times — operator quality coverage", url: "https://www.vendingtimes.com/", note: "Trade publication with operator profiles, technology coverage, and benchmark data" },
      { label: "ServSafe — food handler certification", url: "https://www.servsafe.com/", note: "Standard food safety certification framework underlying operator due-diligence checks" },
      { label: "PCI Security Standards Council — payment compliance", url: "https://www.pcisecuritystandards.org/", note: "Payment card compliance standard referenced in operator evaluation" },
      { label: "Cantaloupe / Nayax / USConnect — vending telemetry platforms", url: "https://www.cantaloupe.com/", note: "Major telemetry platform vendors underlying modern operator capability" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Are there hidden fees in vending services?", description: "Common fee structures, ambiguous scope items, and contract language to verify before signature.", href: "/vending-faq/are-there-hidden-fees-in-vending-services" },
      { eyebrow: "Operations", title: "Managing vending contracts at agencies", description: "RFP-to-contract lifecycle, commission structures, and compliance review at public agencies.", href: "/vending-for-public-buildings/managing-vending-contracts-agencies" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, contracts, installation, and operator-selection questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
