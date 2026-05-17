import { seedPost, tldr, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("questions-to-ask-a-vending-management-company", [
  tldr({
    heading: "What questions should we ask a vending management company at proposal?",
    paragraph:
      "Twenty questions cover the operator capability + commercial dimensions hosts should verify at proposal. Operations + technology: telemetry coverage %, service SLA, on-truck parts inventory, CMMS / ERP integration, anomaly detection capability. Customer experience: cashless payment systems, refund workflow, customer service contact visibility, complaint response time. Reporting: monthly per-machine, quarterly business review, sustainability data, audit log retention. Commercial: commission methodology + sample monthly statement, fee categories (relocation, termination, specialty equipment, processing), contract term, performance-failure exit clauses. Compliance: ServSafe training, insurance (general liability $1-5M+ + product liability + auto + workers' comp), ADA + Section 508 documentation, industry-specific compliance (TJC for hospital, Randolph-Sheppard at federal). References: 3-5 in your placement type with would-you-renew question. Engage operator account manager + reference customers in evaluation. Don't sign without structured proposal review.",
    bullets: [
      { emphasis: "20 questions across operations + customer experience + reporting + commercial + compliance + references:",
        text: "Structured proposal review. Verify each dimension; reject operators that deflect or lack documentation." },
      { emphasis: "Most critical: telemetry coverage + reference checks + sample monthly statement:",
        text: "Telemetry signals modern operator capability. References tell year 2-3 reality. Sample statement reveals commission transparency." },
      { emphasis: "Don't accept marketing claims:",
        text: "Verify with documentation, demos, reference verification. Modern operators welcome verification; legacy operators deflect.", },
    ],
  }),
  specList({
    heading: "20 questions to ask a vending management company",
    items: [
      { label: "1. What's your telemetry coverage percentage?", value: "100% target. Verify with operator dashboard demo + reference verification. Operators with partial coverage can't credibly support modern operations. Hard RFP requirement at meaningful placements." },
      { label: "2. What's your service SLA?", value: "24-48 hour acknowledgement + 5-7 day resolution standard. Performance bonus / penalty structure tied to metrics. Build into contract. Operators with no SLA or 'we respond quickly' claims aren't enforceable." },
      { label: "3. What parts do you carry on-truck?", value: "Common parts (helical coils, motors, payment hardware components, refrigeration sensors). Reduces resolution time from 5-7 days to same-day or next-day. Modern operator standard; verify at proposal." },
      { label: "4. What's your refund workflow?", value: "Auto-refund on telemetry-detected failure (within 1 hour) at best-in-class. Customer-initiated refund 24-48 hour. Visible service contact on machine (phone + QR + email). Modern best practice." },
      { label: "5. How do you handle customer complaints?", value: "Operator portal / app + machine QR feedback + visible service contact. Acknowledge within 24-48 hours. Respond within 7-14 days. Operator account manager coordinates with host on patterns. Modern operator standard." },
      { label: "6. What's your commission methodology?", value: "Request sample monthly statement at proposal. Verify gross sales vs net sales (after-refunds, after processing fees, after freight). Commission percentage 10-25% typical. Modern operators transparent; legacy operators less so." },
      { label: "7. What fees apply beyond commission?", value: "Relocation ($0-300 per move), termination ($500-2K per machine), specialty equipment capital ($5-50K), processing pass-through ($0-0.45 per transaction). Verify each in contract; some operators absorb processing." },
      { label: "8. What's your contract term + termination?", value: "3-year initial + 1-2 renewal options standard. Performance-failure exit clauses (SLA breaches, multi-quarter underperformance) override termination fees. Build into negotiation." },
      { label: "9. What references can you provide in our placement type?", value: "3-5 current accounts in your exact placement type (not just generic). Pre-call references; brief them on prospect call. 'Would you renew?' most telling question. Generic references nearly worthless." },
      { label: "10. What insurance do you carry?", value: "General liability $1M minimum ($2-5M+ at institutional / airport / federal). Product liability. Workers' compensation. Auto liability if route trucks. Additional-insured endorsement listing host. Annual COI renewal." },
      { label: "11. What ServSafe training do your drivers have?", value: "ServSafe or equivalent food handler certification for all food-handling personnel. Recertify per program standard (typically 3-5 years). Maintain training records. Critical for hospital + school + diverse audience placements." },
      { label: "12. Do you have VPAT documentation?", value: "Voluntary Product Accessibility Template for Section 508 compliance. Required at federal civilian placements + increasingly at other public-building placements. ADA reach range + audio output + screen-reader-compatible payment + tactile cues + maneuvering space." },
      { label: "13. What sustainability data do you provide?", value: "kWh per machine, ENERGY STAR coverage, low-GWP refrigerant share, packaging mix, recycling capture, truck-mile reduction. Pre-formatted quarterly reports for STARS / FEMP / ESG submissions. Modern operator standard." },
      { label: "14. What payment systems do you support?", value: "EMV + contactless + mobile wallets (Apple Pay, Google Pay, Samsung Pay) standard. Campus card / employee badge / CAC / PIV where applicable. PCI-DSS compliant. P2PE preferred at federal sites. Verify at proposal demo." },
      { label: "15. How often do you refine planogram?", value: "Monthly telemetry-driven refinement modern minimum. Top SKUs maintained; slow movers rotated after 8-12 weeks; new pilot SKUs introduced. Operators on quarterly or annual cycles lag. Per-placement customization." },
      { label: "16. How does your CMMS / ERP integration work?", value: "Modern operators integrate vending inventory + sales + service with ERP (Cantaloupe Seed, Nayax, USConnect Hub). Single source of truth. Spreadsheet-based operations break down at 30+ machines per territory." },
      { label: "17. How do you handle peak periods?", value: "Pre-position stock + surge crews before predictable peaks (finals, holiday, summer). Telemetry-driven prioritization during events. Post-event reporting. Coordinate with host calendar; build into operator playbook." },
      { label: "18. What's your equipment refresh cycle?", value: "Oldest 10% of fleet annually identified for refresh. ENERGY STAR-current specification. Coordinate with host capital plan + sustainability commitments. Aging equipment drags fleet performance + footprint." },
      { label: "19. How do you handle multi-language at diverse placements?", value: "Touchscreen multi-language (English + Spanish + Mandarin + Hindi at international / diverse audiences). Allergen labeling multi-language. Audio prompts multi-language. Match supported languages to placement demographic." },
      { label: "20. What's your dispute resolution methodology?", value: "Mediation first, then arbitration / litigation. Some contracts mandatory arbitration. Verify at signature. Modern best practice: mediation + reasonable cure period before termination.", },
    ],
  }),
  tipCards({
    heading: "Five proposal review mistakes",
    sub: "Each is documented in post-contract host regret data. All preventable with structured 20-question review.",
    items: [
      { title: "Accepting marketing claims without verification", body: "Operators claim modern capabilities (telemetry, SLA, reporting) in proposals; actual capability varies. Verify with operator dashboard demo + reference verification + sample documentation. Modern operators welcome verification; legacy operators deflect." },
      { title: "Skipping reference checks", body: "References tell you year 2-3 reality. Operators put best foot forward in proposals. Call 3-5 in your placement type; ask 'would you renew?' Generic references nearly worthless. Don't sign without reference verification." },
      { title: "No sample monthly statement review", body: "Sample monthly statement at proposal reveals commission methodology + fee transparency. Operators willing to show sample are transparent; operators who deflect aren't. Always request before signature. Reveals total host cost picture.", },
      { title: "Skipping insurance + compliance verification", body: "General liability $1-5M+ + product liability + workers' comp + ADA + VPAT. Verify current certificates + documentation at signature. Modern best practice; legacy operators may have lapsed coverage. Don't sign without verification." },
      { title: "Not engaging attorney at major contracts", body: "Generic attorneys miss vending-specific contract provisions. Engage attorney at major contracts (institutional / federal / airport). $3-8K legal fee is cheap insurance against long-term contract regret.", },
    ],
  }),
  inlineCta({
    text: "Want the 20-question vending management company evaluation framework?",
    buttonLabel: "Get the evaluation framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending management company evaluation across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — including RFP design, proposal review, 20-question evaluation framework, and reference check workflow. The benchmarks reflect operator-side data + host-side feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What questions should we ask a vending management company?", answer: "20 questions across operations + customer experience + reporting + commercial + compliance + references. Most critical: telemetry coverage percentage, service SLA, sample monthly statement, peer customer references in your placement type, insurance + compliance documentation. Verify each dimension; reject operators that deflect.", audience: "Procurement" },
      { question: "What's the most important question?", answer: "Multiple critical. (1) Telemetry coverage percentage — modern operators 100%; legacy partial or none. (2) Reference checks in your placement type — 'would you renew?' tells year 2-3 reality. (3) Sample monthly statement — reveals commission methodology + fee transparency. Verify all three.", audience: "Procurement" },
      { question: "How do we verify operator capability?", answer: "Operator dashboard demo at proposal + reference verification with peer customers in your placement type + sample documentation (monthly statement, VPAT, insurance COI, ServSafe records). Modern operators welcome verification; legacy operators deflect. Don't accept claims at face value.", audience: "Procurement" },
      { question: "What insurance should the operator carry?", answer: "General liability $1M minimum ($2-5M+ at institutional / airport / federal placements). Product liability. Workers' compensation. Auto liability if route trucks. Additional-insured endorsement listing host. Annual COI renewal. Verify at signature.", audience: "Risk Management" },
      { question: "What about ADA + Section 508 compliance?", answer: "ADA reach range (15-48 inches) + audio output + screen-reader-compatible payment + tactile cues + maneuvering space (30-48 inches) + accessible signage placement. VPAT (Voluntary Product Accessibility Template) at federal placements. Required at federal + public-building + increasingly other.", audience: "Accessibility Officers" },
      { question: "Should we ask about sustainability data?", answer: "Yes at sustainability-leading hosts. kWh per machine, ENERGY STAR coverage, low-GWP refrigerant share, packaging mix, recycling capture, truck-mile reduction. Pre-formatted quarterly reports for STARS / FEMP / ESG submissions. Build into operator contract.", audience: "Sustainability Officers" },
      { question: "What references should we verify?", answer: "3-5 current accounts in your exact placement type (not just generic). Call references; ask average service response time, refund handling, planogram customization, account management quality, would-you-renew. 'Would you renew?' most telling question.", audience: "Procurement" },
      { question: "What if the operator deflects on questions?", answer: "Yellow flag. Modern operators welcome verification + transparency. Operators that deflect on commission methodology, telemetry coverage, reference customers, sample statements are less transparent. Consider eliminating from RFP; modern operators exist in every market.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending management company standards", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator capability + standards" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering vendor evaluation" },
      { label: "IFMA — facility management standards", url: "https://www.ifma.org/", note: "Facility management industry standards covering vendor selection" },
      { label: "Vending Times — operator evaluation coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending operator evaluation criteria" },
      { label: "PCI Security Standards Council — payment compliance", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards underlying operator evaluation" },
    ],
  }),
  relatedGuides({
    heading: "Related vendor selection guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending vendor selection criteria", description: "10 criteria for vendor selection — telemetry, SLA, references, transparency.", href: "/vending-Info-for-businesses/vending-vendor-selection-criteria" },
      { eyebrow: "Operations", title: "What to look for in a vending company", description: "Vendor evaluation framework — telemetry, SLA, references, transparency.", href: "/vending-faq/what-to-look-for-in-a-vending-company" },
      { eyebrow: "Hub", title: "All vending management resources", description: "Vendor evaluation, service models, performance measurement, operations.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
