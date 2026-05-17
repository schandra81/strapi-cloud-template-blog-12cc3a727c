import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-management-post-implementation", [
  tldr({
    heading: "What happens after a vending management implementation goes live?",
    paragraph:
      "Post-implementation is where most vending programs either lock in their gains or quietly drift back toward operator defaults. The first 90 days set the operational baseline — service patterns, planogram fit, payment reliability, and reporting cadence are all in flux. Months 4-12 are about stabilization: planogram refinement based on actual sales data, service-SLA tracking against contract terms, and the first formal quarterly business review (QBR). Year 2+ is steady-state if you've done the work, or a slow degradation if you haven't. The biggest post-implementation risk is operator complacency — your account moves from the implementation team (proactive, attentive) to the operations team (reactive, route-driven). Mitigation: explicit governance cadence (monthly status, quarterly QBR, annual program review), named account manager with clear escalation path, written SLA tracking, and willingness to renegotiate or RFP at year 2 if performance drifts. Strong programs achieve 15-25% revenue growth year-over-year through planogram refinement, format additions (AI cooler, micro-market), and audience-engagement improvements. Weak programs flat-line or decline.",
    bullets: [
      { emphasis: "First 90 days = baseline-setting:", text: "Service patterns, planogram fit, payment reliability, reporting cadence all stabilize. Active management mandatory." },
      { emphasis: "Months 4-12 = refinement:", text: "Planogram tuning on actual data, SLA tracking, first formal quarterly business review. Lock in operator engagement." },
      { emphasis: "Year 2+ = governance matters:", text: "Monthly status + quarterly QBR + annual program review + willingness to RFP. Without this, operator default drift takes over." },
    ],
  }),
  statStrip({
    heading: "Post-implementation benchmarks",
    stats: [
      { number: "90 days", label: "baseline-setting window", sub: "service + planogram + reporting", accent: "blue" },
      { number: "Quarterly", label: "business review cadence", sub: "modern VMS standard", accent: "blue" },
      { number: "15-25%", label: "year-over-year growth potential", sub: "with active program management", accent: "orange" },
      { number: "30-50%", label: "performance gap legacy vs modern", sub: "at year 2 if not actively managed", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Post-implementation governance — active management vs reactive management",
    sub: "Two paths most programs take after go-live. Active management produces 2-3× revenue growth and lower service complaints; reactive management produces flat or declining results.",
    headers: ["Governance dimension", "Active management", "Reactive management"],
    rows: [
      ["Monthly status meetings", { icon: "check", text: "Standing 30-min cadence" }, "Ad hoc when issues arise"],
      ["Quarterly business review", { icon: "check", text: "Formal QBR with planogram + sustainability" }, "Skipped or operator-led summary"],
      ["Service SLA tracking", { icon: "check", text: "Written tracking + monthly summary" }, "Verbal complaints, no documentation"],
      ["Planogram refinement", { icon: "check", text: "Quarterly tuning on sales data" }, "Operator-default; no review"],
      ["Account-team continuity", { icon: "check", text: "Named account manager + escalation" }, "Generic operations contact"],
      ["Performance benchmarks", { icon: "check", text: "Vs RFP commitments + portfolio benchmarks" }, "None tracked"],
      ["Annual program review", { icon: "check", text: "Formal review + RFP threat at renewal" }, "Auto-renewal without review"],
      ["Revenue growth (year 2)", { icon: "check", text: "+15-25% typical" }, "Flat or -5 to -15%"],
      ["Service complaint volume", { icon: "check", text: "Low + declining" }, "Steady or increasing"],
    ],
  }),
  timeline({
    heading: "Post-implementation timeline — go-live to year 2",
    sub: "Phased operational cadence across the 24 months after implementation. Active program management requires structured cadence; without it, programs drift.",
    howToName: "Vending Post-Implementation",
    totalTime: "P24M",
    steps: [
      { label: "Week 1-2", title: "Hyper-care window", description: "Daily operator check-in. Verify all machines on telemetry, all payment hardware live, all signage installed, all planograms loaded correctly. Address punch-list items from implementation. Track first transactions and first service calls. Implementation team still actively engaged." },
      { label: "Week 3-4", title: "Service-pattern lock-in", description: "First full service cycle. Confirm operator route cadence matches contract (weekly or telemetry-driven). Verify stockout response time. Document any service gaps and escalate to operator account manager. Initial planogram sales pattern emerging." },
      { label: "Month 2", title: "Transition to operations team", description: "Implementation team hands off to operations team at operator. Named account manager assignment confirmed; escalation path documented. First monthly status meeting; review service-SLA performance, planogram velocity, payment-hardware reliability." },
      { label: "Month 3", title: "First planogram refinement", description: "60-90 days of sales data sufficient for first planogram tuning. Identify low-velocity SKUs for swap; identify stockout-prone fast-movers for higher facing count. 10-20% planogram refinement typical. Operator implements within 2-4 weeks." },
      { label: "Month 4", title: "First quarterly business review (QBR)", description: "Formal QBR with operator account manager. Cover: revenue, transactions, top/bottom SKUs, service tickets, payment-hardware uptime, sustainability metrics, planned changes. 60-90 minute structured agenda. Document outcomes and action items." },
      { label: "Month 6", title: "Mid-year program review", description: "Compare year-to-date performance against RFP commitments and contract SLA. Document gaps; escalate persistent gaps to operator senior leadership. Identify capability additions (AI cooler, micro-market, allergen format) for second-half deployment." },
      { label: "Month 9", title: "Third quarterly business review", description: "QBR cadence continues. By now, operator should be running smoothly on baseline; capability additions or refresh items in progress. Discuss year-2 RFP refresh decision (renew vs re-bid)." },
      { label: "Month 12", title: "Annual program review + renewal decision", description: "Formal annual review against RFP commitments. Decision: renew, re-bid, or restructure. If performance has been solid (SLA met, revenue trending up, low complaints), renew with negotiated improvements. If gaps persist, initiate RFP for year-2 transition." },
      { label: "Month 13-18", title: "Year-2 stabilization or transition", description: "Either continued operations under renewed contract OR transition to new operator (3-month transition window typical). New programs benefit from year-2 reset on planogram, payment integration, sustainability scope." },
      { label: "Month 19-24", title: "Steady-state operations", description: "Year-2 second half. Steady-state cadence: monthly status, quarterly QBR, ongoing planogram refinement, annual review. Revenue growth 15-25% YoY through compounding refinement. Capability roadmap (AI cooler additions, micro-market expansion, sustainability upgrades) executing." },
    ],
  }),
  specList({
    heading: "Post-implementation governance specifications",
    items: [
      { label: "Monthly status meeting structure", value: "30-minute standing cadence. Agenda: revenue + transactions month-over-month, service tickets + SLA performance, planogram velocity + stockouts, payment-hardware uptime, sustainability metrics, upcoming changes. Named attendees: client program owner, operator account manager. Documented in monthly status report; distributed to operator senior leadership monthly." },
      { label: "Quarterly business review structure", value: "60-90 minute formal review. Agenda: quarter-over-quarter performance, year-to-date vs RFP commitments, planogram refinement opportunities, capability additions (AI cooler, micro-market, payment integration), sustainability + ESG metrics, service SLA gaps, contract refresh items. Quarterly outcomes documented in QBR deck; reviewed at next month's status meeting." },
      { label: "Service SLA tracking + escalation", value: "Written tracking of all service tickets: open date, issue category (stockout, equipment, payment), time-to-resolution, resolution outcome. SLA compliance percentage tracked monthly. Persistent gaps (3+ consecutive months below SLA threshold) escalate to operator senior leadership; documented in quarterly QBR. Pattern of SLA gaps justifies contract renegotiation or RFP at renewal." },
      { label: "Planogram refinement cadence", value: "Quarterly review of sales data: top 20 SKUs, bottom 20 SKUs, velocity trends, stockout frequency. Refinement: swap 10-20% of SKUs each quarter (drop low-velocity, add candidates from operator's broader catalog or custom sourcing). Refinement implemented within 4-6 weeks of decision. Track velocity uplift of new SKUs over subsequent quarter." },
      { label: "Account-team continuity + escalation path", value: "Named account manager at operator. Documented escalation path: account manager → regional manager → VP operations → executive sponsor. Quarterly check-in with account manager continuity (verify no rotation or unannounced change). Annual escalation-path review at QBR. Account-team rotation without notice is a service-quality risk indicator." },
      { label: "Performance benchmarking framework", value: "Performance tracked against three benchmarks: (1) RFP commitments — operator's original proposal numbers; (2) operator's broader portfolio — comparable accounts at same operator; (3) industry benchmarks — NAMA category data. Multi-benchmark approach reveals whether gaps are account-specific, operator-wide, or industry-wide. Critical for renewal decision." },
      { label: "Capability roadmap + refresh planning", value: "Quarterly capability roadmap covering planogram refresh, equipment-finish refresh, payment-integration upgrades, sustainability additions, format additions (AI cooler, micro-market). 12-24 month rolling roadmap with named milestones. Operator co-owns roadmap execution; budget impacts modeled at QBR." },
      { label: "Annual program review + renewal decision", value: "Formal annual review 90 days before contract renewal. Review: full-year performance vs RFP commitments, full-year SLA tracking, account-team performance, capability delivery, sustainability + ESG progress. Decision: renew (if performance strong + price competitive), restructure (renew with new terms), or re-bid (RFP with current operator invited). Don't auto-renew without active decision." },
      { label: "Operator change / transition planning", value: "If post-implementation performance doesn't justify renewal, initiate RFP 6-9 months before contract end. 3-month operator transition window typical: new operator inventories existing placements, equipment turnover scheduled, payment hardware migration, planogram refresh under new operator. Customer continuity priority — coordinate transition timing with low-impact periods." },
    ],
  }),
  tipCards({
    heading: "Five post-implementation patterns that protect program value",
    sub: "Each pattern is the difference between a strong year-2 program and a quiet decline. All achievable with active governance.",
    items: [
      { title: "Hold the QBR cadence — don't let it slip", body: "Quarterly business reviews are the single most important governance event. Operators try to push to semi-annual (lower their effort). Don't accept it. Quarterly cadence keeps the operator engaged, surfaces issues early, and produces the data trail for renewal decisions. Block four hours each quarter; non-negotiable." },
      { title: "Track service SLAs in writing, not in memory", body: "Service complaints feel anecdotal until you track them. Spreadsheet or ticketing system with: date, machine, issue, resolution time. Monthly summary by category. Provides factual basis for SLA conversations with operator and supports renewal-decision evidence. Verbal complaints don't drive operator behavior." },
      { title: "Refine planograms on data, not opinions", body: "Most planogram refinement decisions happen on opinions ('we should have more healthy options') without sales data. Force the data conversation: top 20 SKUs by velocity, bottom 20 SKUs, requested-but-missing items from employee survey. Data-driven refinement produces 20-30% velocity uplift; opinion-driven refinement is random." },
      { title: "Threaten RFP at year 2 even if performance is fine", body: "Strong operators improve in year 2 when they know renewal is a competitive decision. Communicate at month 9: 'we're considering RFP at renewal regardless of current performance, please make your year-2 commitments compelling.' Even strong incumbents typically offer commission improvements or capability additions at this leverage point." },
      { title: "Document the program for transition resilience", body: "Account-team rotation, operator senior leadership changes, your own role changes — any of these can blow up institutional knowledge. Maintain a program runbook covering equipment list, planogram structure, payment integrations, customization, SLA history, contract terms, key contacts. Reviewed at each QBR; current at all times." },
    ],
  }),
  decisionTree({
    heading: "Should we renew our incumbent operator at year 2 contract end?",
    question: "Has the incumbent operator met or exceeded RFP commitments across service SLA, revenue growth, planogram refinement, and capability delivery for the past 12 months?",
    yesBranch: {
      title: "Renew with negotiated improvements.",
      description: "Strong incumbent performance justifies renewal. But never auto-renew — use renewal as negotiation leverage. Push for commission improvements (1-3 percentage points), capability additions (AI cooler or micro-market evaluation), sustainability upgrades (ENERGY STAR fleet refresh if not already), or pricing improvements (lower per-cup costs on bundled services). Strong operators concede these at renewal to retain accounts.",
      finalTone: "go",
      finalLabel: "RENEW · NEGOTIATED TERMS",
    },
    noBranch: {
      title: "Initiate RFP for year-2 transition.",
      description: "Documented gaps in service SLA, revenue performance, planogram refinement, or capability delivery justify RFP. Run structured RFP with 3-5 modern VMS providers + incumbent invited. Score on RFP commitments + references + capability. Plan 3-month transition window with low-impact timing. Communicate transition clearly to employees / residents / guests.",
      finalTone: "stop",
      finalLabel: "RFP · NEW OPERATOR",
    },
  }),
  inlineCta({
    text: "Want the post-implementation governance toolkit (QBR template, SLA tracker, annual review checklist)?",
    buttonLabel: "Get the governance toolkit",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported post-implementation governance across corporate, multifamily, hospitality, education, and federal vending programs for twelve years — covering QBR cadence, SLA tracking, planogram refinement, and renewal decisions. The governance framework reflects operational data from program continuity across hundreds of accounts past go-live.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long is the typical post-implementation hyper-care window?", answer: "1-2 weeks of daily operator engagement after go-live, then transition to standard monthly cadence. Hyper-care covers initial machine fault rates (sometimes elevated as new equipment settles), payment-hardware issues, signage corrections, planogram-loading errors, and first-week service-pattern setup. Most issues surface and resolve in this window; longer hyper-care indicates a troubled implementation.", audience: "Program Managers" },
      { question: "What should the first quarterly business review (QBR) cover?", answer: "Three months of operational data: revenue + transactions vs RFP commitments, service-ticket volume + SLA performance, top 10 + bottom 10 SKUs by velocity, payment-hardware uptime, planogram refinement candidates, sustainability metrics, and any open issues or capability requests. 60-90 minute structured agenda. Operator delivers analysis; you respond with priorities + decisions.", audience: "Program Managers" },
      { question: "How often should planograms be refined?", answer: "Quarterly is the typical cadence. 60-90 days of sales data is sufficient for refinement; longer intervals miss velocity changes. Each refinement swaps 10-20% of SKUs based on: drop low-velocity (bottom 20%), add candidates from employee survey + operator catalog, increase facing count on stockout-prone fast-movers. Heavier refinement (40%+) at major audience change or program direction change.", audience: "Program Managers" },
      { question: "What service SLAs are realistic post-implementation?", answer: "Modern operator SLAs: stockout response 1-3 business days, equipment failure 24-48 hours, payment refund same-day or next-day, planogram refresh within 4 weeks of decision. Achieve >90% SLA compliance month-over-month. Persistent gaps (3+ consecutive months below target) escalate to operator senior leadership and document as renewal-decision evidence.", audience: "Operations" },
      { question: "When should we consider switching operators?", answer: "Three triggers: (1) documented service SLA gaps for 3+ consecutive months without resolution, (2) revenue performance materially below RFP commitments (>15% gap) without operator-side acknowledgment, (3) account-team neglect — repeated rotation, missed QBRs, no capability development. Don't switch on isolated incidents; do switch on patterns. Plan RFP 6-9 months before contract end.", audience: "Program Managers" },
      { question: "What's the typical operator transition timeline?", answer: "3-month transition window typical: month 1 outgoing operator inventories existing placements + incoming operator surveys site, month 2 equipment turnover scheduled (some replaced, some retained) + payment hardware migration, month 3 planogram refresh under new operator + customer communication + go-live. Critical: coordinate transition timing with low-impact periods (avoid major events, exam periods, peak occupancy windows).", audience: "Procurement" },
      { question: "How do we keep the operator engaged past year 1?", answer: "Three patterns: (1) consistent QBR cadence — operators take seriously the accounts that take governance seriously, (2) communicated renewal optionality — make clear renewal is competitive, not auto, (3) capability roadmap engagement — give operator opportunity to propose capability additions (AI cooler, micro-market) for long-term program growth. Operators stay engaged when they see growth potential.", audience: "Program Managers" },
      { question: "What does revenue growth look like post-implementation?", answer: "Strong programs: 15-25% year-over-year growth through compounding planogram refinement, capability additions, and audience-engagement improvements. Average programs: 5-10% growth. Weak programs (reactive management): flat or -5 to -15% as planograms stale and service slips. Growth comes from active management; without it, programs drift to operator-default mediocrity.", audience: "Program Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending management program operations standards", url: "https://www.namanow.org/", note: "Industry guidance on post-implementation operations and governance cadence" },
      { label: "Vending Times — operator account management coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator-side account-team practices and customer success" },
      { label: "Automatic Merchandiser — QBR and renewal best practices", url: "https://www.vendingmarketwatch.com/", note: "Trade coverage of quarterly business review structures and renewal patterns" },
      { label: "ISM (Institute for Supply Management) — supplier relationship management", url: "https://www.ismworld.org/", note: "Procurement-side guidance on supplier governance and renewal decisions" },
      { label: "NAVA / ISSA — facility services supplier management", url: "https://www.issa.com/", note: "Facility services supplier relationship management applicable to vending operator governance" },
    ],
  }),
  relatedGuides({
    heading: "Related vending management guides",
    items: [
      { eyebrow: "Sister guide", title: "Benefits of using a vending management company", description: "Full operator-vs-self-operate comparison across capital, operations, and revenue capture.", href: "/vending-management-companies/benefits-of-using-a-vending-management-company" },
      { eyebrow: "Selection", title: "Choosing a vending management company", description: "Capability matching, RFP design, commission negotiation, and reference checks.", href: "/vending-management-companies/choosing-a-vending-management-company" },
      { eyebrow: "Hub", title: "All vending management resources", description: "VMS selection, RFP design, post-implementation governance, and ongoing performance management.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
