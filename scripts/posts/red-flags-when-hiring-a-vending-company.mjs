import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("red-flags-when-hiring-a-vending-company", [
  tldr({
    heading: "What are the red flags when hiring a vending company?",
    paragraph:
      "A vending company that produces year-2 service degradation, opaque commission settlement, or stranded equipment at exit is identifiable in proposal review and reference checks. Twelve red flags reliably predict trouble: (1) refusal to share sample monthly commission statement with line-item gross / refunds / net / commission, (2) no telemetry on more than ~70% of fleet, (3) ENERGY STAR coverage below 75% with no refresh schedule, (4) PCI-DSS attestation older than 12 months or absent, (5) no documented SLA with response-time benchmarks, (6) contract auto-renewal beyond 24 months with no performance-failure exit, (7) ownership clause that keeps equipment as operator property at term-end (vs host buyout option), (8) refusal to provide 3+ same-segment references (Fortune 500, hospital, university, federal), (9) Better Business Bureau unresolved complaint pattern (3+ unresolved within 12 months), (10) state Secretary of State filings show frequent name / entity changes, (11) commission settlement frequency over 60 days post-period-end, (12) failure to disclose subcontractor / route-jobber arrangements that affect service accountability. Most are verifiable in 4-6 hours of due diligence pre-contract. Engage commercial counsel for master contract review at enterprise scale.",
    bullets: [
      { emphasis: "Twelve red flags reliably predict year-2 trouble:", text: "Opaque commission, low telemetry, weak compliance, no SLA, equipment ownership at exit, weak references, BBB / SoS history, slow settlement, subcontractor opacity." },
      { emphasis: "All verifiable in 4-6 hours pre-contract:", text: "Sample statement request, telemetry / ENERGY STAR / PCI questions, SLA documentation review, BBB and Secretary of State searches, same-segment reference calls." },
      { emphasis: "Engage counsel for master contracts at enterprise scale:", text: "Multi-site agreements with auto-renewal, equipment ownership, indemnification, and termination clauses warrant commercial counsel review before signature." },
    ],
  }),
  statStrip({
    heading: "Vending company red flag benchmarks",
    stats: [
      { number: "12 red flags", label: "screening checklist", sub: "verifiable pre-contract", accent: "red" },
      { number: "4-6 hours", label: "due diligence time", sub: "for full screen", accent: "blue" },
      { number: "3+", label: "same-segment references", sub: "minimum at enterprise scale", accent: "blue" },
      { number: "30 days", label: "max commission settlement", sub: "post-period-end", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Twelve red flags — what to look for and how to verify",
    sub: "Verify each in pre-contract due diligence. Pattern of three or more flags indicates walk-away.",
    headers: ["Red flag", "Why it matters", "Verification method"],
    rows: [
      ["No sample commission statement", "Indicates opaque settlement", "Request sample at proposal review"],
      ["Telemetry under 70% of fleet", "Predicts stockouts + service decline", "Ask for fleet telemetry coverage %"],
      ["ENERGY STAR coverage under 75%", "Higher utility cost + sustainability shortfall", "Request fleet age + ENERGY STAR list"],
      ["PCI-DSS attestation absent / stale", "Cashless payment compliance gap", "Request current SAQ or AOC"],
      ["No documented SLA", "Service expectations unenforceable", "Request SLA document at proposal"],
      ["Auto-renewal > 24 months no exit", "Locks host into degrading service", "Review draft contract clauses"],
      ["Equipment-ownership-at-exit only", "Stranded asset risk; host can't transition", "Review equipment ownership clause"],
      ["No 3+ same-segment references", "Marketing claims unverified", "Demand and call references same segment"],
      ["BBB unresolved complaints pattern", "Service accountability gaps", "Search BBB by company name"],
      ["Secretary of State name changes", "Possible litigation or judgment evasion", "Search state SoS business filings"],
      ["Settlement frequency over 60 days", "Working capital strain for host", "Request settlement frequency from references"],
      ["Subcontractor / jobber opacity", "Service accountability dilution", "Ask for subcontractor disclosure list"],
    ],
  }),
  specList({
    heading: "Red flag verification specifications",
    items: [
      { label: "Sample commission statement", value: "Request a redacted sample statement from a comparable customer. Statement should show line-item gross sales, refunds, net sales, commission rate, commission amount, and any deductions. Refusal to provide any sample is a hard walk-away signal." },
      { label: "Fleet telemetry coverage", value: "Modern operators run 95-100% telemetry coverage with platforms like Cantaloupe, Nayax, Parlevel, or VendSys. Below 70% coverage indicates legacy fleet and predicts stockouts, slow restock prioritization, and weak cashless device monitoring." },
      { label: "ENERGY STAR fleet share", value: "Modern best-in-class is 95-100% ENERGY STAR-certified refrigeration. Below 75% indicates aging fleet and substantially higher utility cost (3,000-4,500 kWh extra per machine annually) plus weaker positioning at sustainability-leading hosts." },
      { label: "PCI-DSS attestation currency", value: "Request current Self-Assessment Questionnaire (SAQ) or Attestation of Compliance (AOC) — dated within 12 months. Cashless payment without current PCI attestation creates breach-notification and indemnification exposure for the host facility." },
      { label: "SLA documentation review", value: "Documented SLA with restock response-time (typically 24-48 hours), service-call response-time (typically 2 business days), and uptime target (typically 95%+). Without documented SLA, service expectations are operator goodwill, not contract-enforced." },
      { label: "Contract auto-renewal terms", value: "Review draft master contract for renewal length, performance-failure exit, fee escalation caps, and termination notice. Multi-year auto-renewal with no performance-failure exit locks the host into degrading service. Modern contracts include performance-based exit at 24-36 months." },
      { label: "Equipment ownership at term-end", value: "Modern contracts include host buyout option at fair-market-value at term-end. Operator-ownership-only contracts strand the host at transition and let the incumbent extract a fee for equipment removal. Negotiate buyout option pre-signature." },
      { label: "Reference check protocol", value: "Demand 3-5 references in the same vertical at the same scale (Fortune 500 corporate, hospital system, university, federal, etc.). Generic references are nearly worthless. Same-segment references reveal year-2-3 reality and commission settlement integrity." },
      { label: "BBB + Secretary of State searches", value: "Better Business Bureau profile (search by company name) — look for unresolved complaint pattern (3+ unresolved within 12 months is concerning). Secretary of State business filings — look for frequent name changes or entity restructuring that may indicate litigation or judgment evasion." },
    ],
  }),
  tipCards({
    heading: "Five red-flag screening mistakes",
    sub: "Each is documented in vending company post-contract reviews. All preventable with disciplined pre-contract due diligence.",
    items: [
      { title: "Skipping reference calls with same-segment hosts", body: "Generic references are nearly worthless. Same-segment references (Fortune 500, hospital, university, federal) reveal year-2-3 reality, commission settlement integrity, and SLA enforcement track record. Demand 3-5; call at least 3." },
      { title: "Accepting verbal commission terms without sample statement", body: "Without a sample statement, the host can't verify line-item gross, refunds, deductions, and commission calculation. Operators that refuse to share a sample statement are signaling opacity. Hard walk-away signal." },
      { title: "Not running BBB + Secretary of State searches", body: "Better Business Bureau and state Secretary of State searches take 30 minutes combined and surface unresolved complaint patterns, judgment history, and entity restructuring. Both are publicly available and routine in commercial due diligence." },
      { title: "Signing multi-year contracts without performance-failure exit", body: "Multi-year auto-renewal without performance-failure exit locks the host into degrading service. Modern contracts include uptime SLA + corrective action + termination right at 24-36 months. Negotiate performance-failure exit pre-signature." },
      { title: "Ignoring equipment ownership clause at term-end", body: "Operator-ownership-only contracts strand the host at transition; incumbent extracts removal fee or holds equipment hostage. Negotiate fair-market-value buyout option at term-end. Standard modern contract clause; non-negotiation signals operator concern about transition." },
    ],
  }),
  inlineCta({
    text: "Want the vending company due diligence framework (12-point red flag screen + reference protocol)?",
    buttonLabel: "Get the due diligence framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported enterprise vending company evaluations — including pre-contract due diligence, sample commission statement review, BBB + Secretary of State investigation, telemetry + ENERGY STAR + PCI verification, and master contract clause negotiation. The benchmarks reflect operator-side audit data and host-side post-contract reviews.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the single biggest red flag?", answer: "Refusal to share a sample monthly commission statement with line-item gross / refunds / net / commission. Operators that won't show a redacted sample are signaling opaque settlement — and opaque settlement reliably produces year-2 commission disputes. Hard walk-away signal at proposal stage.", audience: "Procurement" },
      { question: "How long should due diligence take?", answer: "4-6 hours of focused work pre-contract: 1 hour for proposal review + sample statement, 1 hour for telemetry / ENERGY STAR / PCI verification, 30 minutes for BBB + Secretary of State searches, 2-3 hours for 3-5 reference calls. Engage counsel separately for master contract review at enterprise scale.", audience: "Procurement" },
      { question: "Why are same-segment references so important?", answer: "Generic references (anyone willing to praise the operator) reveal little. Same-segment references — Fortune 500 corporate, hospital system, university, federal site — reveal year-2-3 reality at scale matching your placement. Same-segment hosts share the same compliance, SLA, and commission expectations you have.", audience: "Procurement" },
      { question: "What does a healthy SLA look like?", answer: "Documented restock response-time (24-48 hours), service-call response-time (2 business days), uptime target (95%+), restock fill rate (95%+), corrective action protocol after consecutive misses, and termination right after sustained underperformance. Modern operators provide; legacy operators rely on verbal commitments.", audience: "Operators" },
      { question: "Should we require ENERGY STAR coverage in the RFP?", answer: "Yes — at sustainability-leading hosts (campuses with STARS, federal with FEMP, ESG-focused corporate). Modern operators run 95-100% ENERGY STAR fleet. Below 75% indicates aging fleet and substantially higher utility cost. Build into RFP as hard requirement.", audience: "Sustainability Officers" },
      { question: "What's the PCI-DSS exposure?", answer: "Cashless vending payments must comply with PCI-DSS. Operator carries primary attestation responsibility, but the host facility carries breach-notification and reputational exposure if the operator's compliance lapses. Request current SAQ or AOC dated within 12 months; require ongoing attestation in master contract.", audience: "Risk Management" },
      { question: "What about subcontractors and route jobbers?", answer: "Larger operators often subcontract specific routes to local jobbers. Not inherently problematic, but undisclosed subcontracting dilutes service accountability. Demand subcontractor disclosure at proposal review; require notice and consent for future subcontracting in master contract.", audience: "Procurement" },
      { question: "What if we discover red flags after signing?", answer: "Document each instance and trigger the corrective action protocol in your master contract (if present). Sustained underperformance triggers SLA-based termination right. If no performance-failure exit exists in current contract, engage counsel to evaluate options; build performance-failure exit into the next contract at all costs.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "Better Business Bureau — company search and complaint history", url: "https://www.bbb.org/", note: "Industry-standard public-record source for unresolved complaint pattern" },
      { label: "PCI Security Standards Council — DSS attestation framework", url: "https://www.pcisecuritystandards.org/", note: "Standard governing cashless payment attestation and host exposure" },
      { label: "ENERGY STAR — commercial refrigeration certification", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Federal energy efficiency certification standard for vending refrigeration" },
      { label: "NAMA — Industry standards and member directory", url: "https://www.namanow.org/", note: "Industry trade association referenced for operator standards and complaints" },
      { label: "FTC — business opportunity and unfair practice rules", url: "https://www.ftc.gov/business-guidance/resources", note: "Federal framework underlying operator disclosure and refund obligations" },
    ],
  }),
  relatedGuides({
    heading: "Related vending management guides",
    items: [
      { eyebrow: "Sister guide", title: "How to choose a vending management company", description: "Ten-criterion framework for VMC selection at enterprise scale.", href: "/vending-management-companies/how-to-choose-a-vending-management-company" },
      { eyebrow: "Operations", title: "Questions to ask a vending management company", description: "Pre-proposal question list for procurement and facilities.", href: "/vending-management-companies/questions-to-ask-a-vending-management-company" },
      { eyebrow: "Hub", title: "All vending management company guides", description: "VMC evaluation, contract terms, SLA, commission settlement, and red flags.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
