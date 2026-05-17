import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-vendor-selection-criteria", [
  tldr({
    heading: "What criteria should we use to select a vending vendor?",
    paragraph:
      "Vending vendor selection is the most consequential decision in the program lifecycle — operator quality determines whether vending becomes amenity infrastructure or complaint source. The ten criteria that matter: (1) telemetry coverage (100% target), (2) service SLA (24-48 hour response), (3) industry references (3-5 in your placement type), (4) commission transparency (sample monthly statement), (5) planogram customization capability (per-placement, monthly refinement), (6) food safety + insurance documentation (ServSafe + GL + product liability), (7) payment systems breadth (EMV + contactless + mobile + applicable cards), (8) modern reporting (monthly per-machine + quarterly business review), (9) sustainability data (kWh + ENERGY STAR + ESG-formatted reports), (10) ADA + compliance posture (Section 508 + VPAT + industry compliance). Verify all at proposal review; demo capabilities where possible. Engage operator account manager + reference checks at peer customers. Don't select on commission rate alone — operator quality drives revenue more than commission percentage.",
    bullets: [
      { emphasis: "Ten criteria for vendor selection:", text: "Telemetry, SLA, references, commission transparency, planogram customization, food safety + insurance, payment systems, modern reporting, sustainability data, compliance. Verify all at proposal." },
      { emphasis: "Don't select on commission rate alone:", text: "Operator quality drives revenue more than commission percentage. 30% on poorly-operated machines produces less than 22% on premium operations." },
      { emphasis: "Reference checks at peer customers are critical:", text: "Operators put best foot forward in proposals. References tell you year 2-3 reality. Call 3-5 in your placement type; 'would you renew?' is most telling question." },
    ],
  }),
  statStrip({
    heading: "Vending vendor selection benchmarks",
    stats: [
      { number: "10 criteria", label: "selection framework", sub: "verify all at proposal review", accent: "blue" },
      { number: "3-5", label: "reference checks", sub: "in your placement type", accent: "blue" },
      { number: "100% telemetry", label: "modern requirement", sub: "hard RFP criterion", accent: "blue" },
      { number: "Quarterly business review", label: "modern operator practice", sub: "monthly per-machine reporting baseline", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending vendor selection — ten criteria",
    sub: "All ten matter; verify each at proposal review. Modern operators meet all; legacy operators meet few.",
    headers: ["Criterion", "Modern standard", "Verification method"],
    rows: [
      ["Telemetry coverage", "100% of machines", "Dashboard demo + reference check"],
      ["Service SLA", "24-48 hour response, contractual", "Contract clause + reference verification"],
      ["Industry references", "3-5 current accounts in your placement type", "Reference calls; 'would you renew?'"],
      ["Commission transparency", "Sample monthly statement at proposal", "Review statement methodology"],
      ["Planogram customization", "Per-placement monthly refinement", "Demo + reference verification"],
      ["Food safety + insurance", "ServSafe + GL ($1-5M) + product liability", "Current COI + training records"],
      ["Payment systems breadth", "EMV + contactless + mobile + applicable cards", "Dashboard demo + capability spec"],
      ["Modern reporting", "Monthly per-machine + quarterly business review", "Sample report + meeting structure"],
      ["Sustainability data", "kWh + ENERGY STAR + ESG-formatted reports", "Pre-formatted report sample"],
      ["ADA + compliance posture", "Section 508 + VPAT + industry-specific", "VPAT documentation + compliance audit"],
    ],
  }),
  specList({
    heading: "Vending vendor selection specifications",
    items: [
      { label: "Telemetry coverage verification", value: "100% of machines on real-time telemetry. Demo operator dashboard at proposal review. Reference verification — call 3-5 peer customers; verify telemetry coverage. Operators with partial coverage can't credibly support modern operations." },
      { label: "Service SLA contractual", value: "24-48 hour acknowledgement, 5-7 day resolution. Performance bonus / penalty structure. Build into operator contract; verify reference customers experience SLA. Modern standard at meaningful placements; legacy operators have no SLA." },
      { label: "Industry references", value: "3-5 current accounts in your exact placement type (not just generic references). Call references; ask average service response time, refund handling, planogram customization, would-you-renew. 'Would you renew?' is most telling question.", },
      { label: "Commission transparency", value: "Request sample monthly statement at proposal. Verify commission methodology — gross vs net, after-refunds, after processing fees. Operators willing to share statement transparency are operators worth signing with; operators who deflect aren't." },
      { label: "Planogram customization capability", value: "Operator can customize per-placement planogram. Monthly telemetry-driven refinement. Demo customization examples at proposal. Reference verification on customization quality. Operators with rigid generic-fleet models can't credibly customize." },
      { label: "Food safety + insurance documentation", value: "ServSafe or equivalent food handler certification for all food-handling personnel. General liability $1-5M+ depending on placement (institutional / airport / federal higher). Product liability. Current certificate of insurance + training records. Verify at contract signing; annual renewal." },
      { label: "Payment systems breadth", value: "EMV + contactless + mobile wallets (Apple Pay, Google Pay, Samsung Pay) standard. Campus card / employee badge / CAC / PIV where applicable. PCI-DSS compliant. P2PE preferred at federal sites. Verify capability at proposal demo." },
      { label: "Modern reporting capability", value: "Monthly per-machine reporting (revenue, top SKUs, stockouts, waste, service tickets). Quarterly business review with operator account manager. Pre-formatted reports for host review. Build into operator contract; modern best practice." },
      { label: "Sustainability data + ESG reporting", value: "kWh per machine, ENERGY STAR coverage, low-GWP refrigerant share, packaging mix, recycling capture rate, truck-mile reduction. Pre-formatted quarterly reports for STARS / FEMP / ESG submissions. Modern operators provide; legacy don't." },
      { label: "ADA + compliance posture", value: "Section 508 + VPAT documentation for federal sites. Industry-specific compliance (TJC for hospitals, FERPA for campuses, Randolph-Sheppard for federal, Smart Snacks for K-12). Verify operator compliance posture at proposal. Build into contract; periodic audit." },
    ],
  }),
  tipCards({
    heading: "Five vendor selection mistakes",
    sub: "Each is documented in post-contract host regret data. All preventable with structured selection process.",
    items: [
      { title: "Selecting on commission rate alone", body: "Highest commission ≠ best deal. 30% on poorly-operated machines produces less revenue than 22% on premium operations. Optimize for operator quality first; commission is a percentage of what operator can produce. Total revenue = revenue × commission %." },
      { title: "Skipping reference checks", body: "Operators put best foot forward in proposals. References tell you year 2-3 reality. Call 3-5 in your placement type; ask 'would you renew?' as most telling question. Generic references are nearly worthless." },
      { title: "Accepting partial telemetry coverage", body: "100% telemetry coverage is modern minimum at meaningful placements. Operators with partial coverage can't credibly support modern operations — planogram refinement, route optimization, anomaly detection, stockout prevention. Hard RFP requirement." },
      { title: "No service SLA in contract", body: "'We respond quickly' isn't enforceable. Require 24-48 hour acknowledgement, 5-7 day resolution, performance bonus / penalty structure. Build into contract; modern operators welcome SLA; legacy operators resist." },
      { title: "Skipping food safety + insurance verification", body: "Some operators carry inadequate insurance or have lapsed certifications. When incident happens, host is exposed. Verify documents at signature; require annual recertification. Non-negotiable basics; don't sign without verification.", },
    ],
  }),
  inlineCta({
    text: "Want the vending vendor selection framework (10 criteria + verification + reference check script)?",
    buttonLabel: "Get the vendor selection framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending vendor selection across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — including RFP design, reference check workflows, FDD analysis, and operator capability verification. The benchmarks reflect operator-side data and host-side post-contract feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should we select a vending vendor?", answer: "Ten criteria: telemetry coverage (100%), service SLA (24-48 hour), industry references (3-5 in placement type), commission transparency, planogram customization, food safety + insurance, payment systems, modern reporting, sustainability data, ADA + compliance. Verify all at proposal review.", audience: "Procurement" },
      { question: "What's the single most important criterion?", answer: "Telemetry coverage. Modern vending requires 100% telemetry — enables planogram refinement, route optimization, anomaly detection, stockout prevention. Operators without can't credibly support modern operations. Hard RFP requirement at meaningful placements.", audience: "Procurement" },
      { question: "How important is commission rate?", answer: "Less than most hosts think. Commission is percentage of net sales — what matters is the dollar amount. 30% on poorly-operated machines produces less revenue than 22% on premium operations. Optimize for operator quality first; commission is secondary.", audience: "Procurement" },
      { question: "How many references should we check?", answer: "3-5 in your exact placement type (not just generic references). Call references; ask average service response time, refund handling, planogram customization, would-you-renew. 'Would you renew?' is most telling question.", audience: "Procurement" },
      { question: "What food safety documentation do we need?", answer: "ServSafe or equivalent food handler certification for all food-handling personnel. Current insurance certificates: general liability ($1-5M+ depending on placement), product liability, workers' compensation. Verify at contract signing; require annual recertification.", audience: "Risk Management" },
      { question: "What about payment systems?", answer: "EMV + contactless + mobile wallets (Apple Pay, Google Pay, Samsung Pay) standard. Campus card / employee badge / CAC / PIV where applicable. PCI-DSS compliant. P2PE preferred at federal sites. Modern operators support all; verify at proposal demo.", audience: "Procurement" },
      { question: "Should we ask for sustainability data?", answer: "Yes if you report through STARS / FEMP / ESG. Modern operators provide kWh per machine, ENERGY STAR coverage, low-GWP refrigerant share, packaging mix, recycling capture, truck-mile reduction. Pre-formatted quarterly reports. Build into operator contract.", audience: "Sustainability Officers" },
      { question: "How long should an RFP take?", answer: "60-90 day RFP cycle standard. Proposal preparation 30-45 days; proposal review + reference checks + demos 15-30 days; contract negotiation 15-30 days. Build RFP timeline into procurement plan; rushed RFPs produce worse operator selection.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending vendor selection standards", url: "https://www.namanow.org/", note: "Industry trade association covering vendor selection criteria" },
      { label: "BOMA / NRF / NAA — host-side vendor evaluation", url: "https://www.boma.org/", note: "Host-side associations covering vendor selection" },
      { label: "Cantaloupe / Nayax / USConnect — modern operator platforms", url: "https://www.cantaloupe.com/", note: "Telemetry platforms underlying modern operator capability" },
      { label: "ServSafe — food handler certification", url: "https://www.servsafe.com/", note: "Standard food safety certification framework" },
      { label: "PCI Security Standards Council — payment compliance", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards underlying operator evaluation" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "What to look for in a vending company", description: "Vendor evaluation framework — telemetry, SLA, references, transparency.", href: "/vending-faq/what-to-look-for-in-a-vending-company" },
      { eyebrow: "Operations", title: "Measure vending machine performance", description: "Five performance dimensions + monthly reporting + quarterly review.", href: "/vending-Info-for-businesses/measure-vending-machine-performance" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Vendor selection, service models, performance measurement, operator scaling.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
