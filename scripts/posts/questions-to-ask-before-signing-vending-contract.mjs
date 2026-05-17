import { seedPost, tldr, statStrip, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("questions-to-ask-before-signing-vending-contract", [
  tldr({
    heading: "What questions should you ask the operator before signing a vending contract?",
    paragraph:
      "Before signing a vending contract, ask 30+ specific questions across nine categories: (1) commission methodology — net-sales vs gross-sales, sample monthly statement, processing pass-through treatment; (2) service SLA — service-response acknowledgement window, resolution timeline, uptime target, reporting cadence + format; (3) fee categories — relocation, termination, specialty equipment capital, card-processing pass-through, technology / platform fees; (4) telemetry + reporting — cellular coverage, dashboard access, anomaly detection scope, per-machine dispense data; (5) specialty format capability — allergen-restricted at NICU / cancer-center / pediatric, healthy-fresh micro-market hybrid, employee badge integration, custom wrap coordination; (6) sustainability — ENERGY STAR, low-GWP refrigerant (R-290 / R-744), ISO 14001-aligned LCA reporting, ESG disclosure support; (7) insurance + indemnification — general liability minimum, product liability, additional-insured endorsement, COI renewal cadence; (8) termination + exit provisions — performance-failure exit clause, termination fees, mutual termination, force majeure, transfer / sale provisions; (9) references — 3-5 placements of similar scope + audience + duration. Modern operators answer all 30+ clearly with documentation; legacy operators evade or pivot to commission rate alone. Engage healthcare facility attorney or commercial contract attorney for review at major contracts (institutional / federal / airport / hospital). $5-10K legal fee is cheap insurance.",
    bullets: [
      { emphasis: "30+ questions across nine categories:", text: "Commission, SLA, fees, telemetry, specialty format, sustainability, insurance, termination / exit, references. Modern operators answer all 30+ clearly; legacy operators evade." },
      { emphasis: "Net-sales methodology + sample statement:", text: "Don't accept gross-sales commission methodology. Net-sales (after refunds + processing pass-through) clearly defined; sample monthly statement attached as exhibit. Verify before signature." },
      { emphasis: "Performance-failure exit clause is the highest-leverage provision:", text: "Multi-quarter SLA breach triggers exit right overriding termination fees. Most important contract provision. Engage attorney to draft. Without it, host has no leverage at operator quality failure." },
    ],
  }),
  statStrip({
    heading: "Vending contract review benchmarks",
    stats: [
      { number: "30+", label: "questions to ask", sub: "across nine categories", accent: "blue" },
      { number: "9", label: "review categories", sub: "commission, SLA, fees, telemetry, specialty, sustainability, insurance, exit, references", accent: "blue" },
      { number: "$5-10K", label: "attorney engagement", sub: "at major contracts (hospital / institutional / airport)", accent: "blue" },
      { number: "3-5", label: "reference checks", sub: "similar scope + audience + duration", accent: "blue" },
    ],
  }),
  specList({
    heading: "30+ contract questions across nine categories",
    items: [
      { label: "Category 1 — Commission methodology", value: "(1) Is commission calculated on net-sales or gross-sales? (2) What does 'net-sales' specifically deduct (refunds, processing fees, taxes)? (3) Can we see a sample monthly statement attached as contract exhibit? (4) How are processing pass-through fees treated? (5) Is commission calculated per-machine or aggregated across portfolio? (6) When is commission paid (monthly / quarterly) + by what method (ACH / check)?" },
      { label: "Category 2 — Service SLA + uptime + reporting", value: "(7) What is the service-request acknowledgement SLA (24 / 48 / 72 hours)? (8) What is the service-resolution SLA (5 / 7 / 10 days)? (9) What uptime target is specified (90 / 95 / 96 / 98 percent)? (10) Is there a performance bonus / penalty tied to uptime? (11) What reporting cadence + format will we receive (monthly per-machine, quarterly business review)? (12) Is there a customer-portal dashboard?" },
      { label: "Category 3 — Fee categories", value: "(13) What relocation fee applies per machine move ($0-300)? (14) What termination fee applies per machine at early host-initiated exit ($500-2K)? (15) Is there a specialty equipment capital fee ($5-50K for PPE tower, micro-market, crane)? (16) Is card-processing pass-through absorbed by operator or charged to host? (17) Are there technology / platform / telemetry fees?" },
      { label: "Category 4 — Telemetry + reporting", value: "(18) Is cellular telemetry installed on 100% of machines or only some? (19) What anomaly detection scope is included (stockouts, refrigeration drift, payment hardware tampering)? (20) Do we receive dashboard access with per-machine dispense data? (21) Is data accessible via API for our facility-management system?" },
      { label: "Category 5 — Specialty format capability", value: "(22) Do you support allergen-restricted format (latex-free, peanut-free, gluten-free) at NICU / cancer-center / pediatric adjacency? (23) Do you support healthy-fresh micro-market hybrid at staff break rooms? (24) Do you support employee badge integration with HR badge system? (25) Do you coordinate custom wraps with our facility brand standards?" },
      { label: "Category 6 — Sustainability", value: "(26) Is all equipment ENERGY STAR-certified? (27) What refrigerant is used (R-290 / R-744 low-GWP, or legacy R-134a / R-404A)? (28) Do you provide ISO 14001-aligned per-machine LCA reporting (embodied carbon, operational kWh, refurbishment rate)? (29) Does reporting feed our ESG / sustainability disclosure?" },
      { label: "Category 7 — Insurance + indemnification", value: "(30) What general liability minimum coverage do you carry ($1M / $2M / $5M+)? (31) Do you carry product liability, auto, workers' comp? (32) Will you provide additional-insured endorsement listing our entity? (33) What is COI renewal cadence (annual standard)?" },
      { label: "Category 8 — Termination + exit provisions", value: "(34) Is there a performance-failure exit clause overriding termination fees at multi-quarter SLA breach? (35) What termination fees apply at host-initiated early exit? (36) Is mutual termination supported with reasonable cure period? (37) What force majeure provisions apply? (38) What transfer / sale provisions allow continuation at host property sale or operator acquisition?" },
      { label: "Category 9 — References + reputation", value: "(39) Can you provide 3-5 references at similar scope + audience + duration (hospital / university / corporate / institutional)? (40) Are there any disputes / regulatory actions / lawsuits in the last 5 years we should know about? (41) What is the typical contract renewal rate at your accounts (% renewing past initial term)?" },
    ],
  }),
  tipCards({
    heading: "Five highest-leverage questions",
    sub: "Of 30+ questions, these five drive the most risk reduction. Don't sign without clear answers.",
    items: [
      { title: "Is commission net-sales or gross-sales methodology?", body: "Net-sales (after refunds + processing pass-through) clearly defined in contract; sample monthly statement attached as exhibit. Legacy gross-sales methodology overstates by 3-7%. Modern operators transparent; legacy operators evade. Don't accept verbal description — require contract definition + sample statement." },
      { title: "Is there a performance-failure exit clause?", body: "Multi-quarter SLA breach (uptime below 90% for 2+ quarters, repeated service-response failure, allergen incident at restricted format) triggers exit right overriding termination fees. Highest-leverage provision. Without it, host has no leverage at operator quality failure. Engage attorney to draft." },
      { title: "Do you carry $1M+ general liability AND name us as additional insured?", body: "General liability minimum $1M general commercial, $2-5M hospital / institutional / airport. Additional-insured endorsement listing host entity. Annual COI renewal. Verify at signature. Healthcare placements require higher coverage than general commercial. Engage attorney + risk management to verify." },
      { title: "Can you provide 3-5 references at similar scope?", body: "Similar scope + audience + duration. Hospital placement seeks hospital references; university seeks university; corporate seeks corporate. Call references — ask about service-response performance, planogram-refresh discipline, dispute resolution, contract-renewal decision factors. Don't skip; reveals operator reality vs sales pitch." },
      { title: "What anomaly detection + reporting do we receive?", body: "100% cellular telemetry coverage; per-machine dispense data; anomaly detection on stockouts, refrigeration drift, payment hardware tampering; dashboard access; monthly per-machine reporting + quarterly business review. Modern operators provide; legacy operators run blind. Specify in contract; require dashboard demo at proposal." },
    ],
  }),
  decisionTree({
    heading: "Should you engage an attorney before signing?",
    question: "Is this a major contract (institutional, federal, hospital, university, airport, multi-site, $100K+ annual revenue) AND is the contract term 3+ years?",
    yesBranch: {
      title: "Yes — engage commercial contract or healthcare facility attorney",
      description: "$5-10K legal fee per engagement. Verify net-sales methodology + performance-failure exit clause + insurance scope + termination provisions + transfer provisions. Cheap insurance against long-term contract issues. Don't skip at major contracts.",
      finalTone: "go",
      finalLabel: "Engage attorney",
    },
    noBranch: {
      title: "No — review internally with procurement + facilities",
      description: "Use this 30-question framework for internal review. Verify net-sales methodology + sample statement, performance SLA, fee categories, telemetry, insurance, exit provisions. Consider attorney still for first-time contracts to learn structure.",
      finalTone: "stop",
      finalLabel: "Internal review",
    },
  }),
  keyTakeaways({
    heading: "Key takeaways — vending contract pre-signature review",
    takeaways: [
      "Ask 30+ specific questions across nine categories — commission, SLA, fees, telemetry, specialty format, sustainability, insurance, termination, references.",
      "Verify net-sales methodology with sample monthly statement attached as contract exhibit; don't accept gross-sales methodology or verbal description.",
      "Performance-failure exit clause is the highest-leverage provision; engage attorney to draft. Without it, host has no leverage at operator quality failure.",
      "Insurance: $1M general liability minimum at commercial, $2-5M at hospital / institutional / airport / federal; additional-insured endorsement; annual COI renewal.",
      "Call 3-5 references at similar scope + audience + duration. Ask about service-response, planogram refresh, dispute resolution, renewal decision. Don't skip.",
      "Engage attorney at major contracts (institutional / federal / hospital / airport / $100K+ annual / 3+ year term). $5-10K legal fee is cheap insurance against long-term issues.",
    ],
  }),
  inlineCta({
    text: "Want the full 30+ question contract review framework as a printable checklist?",
    buttonLabel: "Get the contract review checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on vending contract pre-signature review across hospital, university, K-12 district, corporate, government, airport, and multi-site accounts — including net-sales commission methodology verification, performance SLA design (24-hour service ack + 96% uptime + monthly reporting + QBR), fee category review (relocation + termination + specialty capital + processing pass-through), specialty format capability (allergen-restricted, healthy-fresh hybrid, employee badge integration), sustainability scope (ENERGY STAR + R-290 + ISO 14001-aligned LCA), insurance + indemnification verification, performance-failure exit clause drafting, and reference-check methodology. The 30+ question framework reflects healthcare facility attorney + commercial contract attorney + procurement consultant best practice.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What questions should we ask before signing a vending contract?", answer: "30+ questions across nine categories: commission methodology (net-sales vs gross-sales + sample statement), service SLA + uptime + reporting, fee categories (relocation + termination + specialty capital + processing), telemetry + reporting, specialty format (allergen + healthy-fresh + badge integration), sustainability (ENERGY STAR + R-290 + LCA), insurance, termination + exit provisions, and references.", audience: "Procurement" },
      { question: "Which question is most important?", answer: "Performance-failure exit clause. Multi-quarter SLA breach triggers exit right overriding termination fees. Without it, host has no leverage at operator quality failure. Engage attorney to draft. Second most important: net-sales methodology with sample monthly statement attached as contract exhibit.", audience: "Procurement" },
      { question: "Should we engage an attorney?", answer: "Yes at major contracts (institutional, federal, hospital, university, airport, multi-site, $100K+ annual revenue, 3+ year term). $5-10K legal fee per engagement. Cheap insurance against long-term contract issues. Engage healthcare facility attorney for hospital placements; commercial contract attorney for general.", audience: "Legal" },
      { question: "What's the difference between net-sales and gross-sales methodology?", answer: "Net-sales = gross sales minus refunds + processing fees (sometimes minus taxes). Gross-sales = total revenue before deductions. Legacy gross-sales methodology overstates by 3-7%. Modern operators transparent (net-sales clearly defined + sample statement attached as exhibit). Verify at proposal; build into contract.", audience: "Procurement" },
      { question: "What insurance should the operator carry?", answer: "$1M general liability minimum at commercial; $2-5M at hospital / institutional / airport / federal. Product liability, auto liability if route trucks, workers' comp. Additional-insured endorsement listing host entity. Annual COI renewal. Verify at signature; engage attorney + risk management to verify.", audience: "Risk Management" },
      { question: "How many references should we call?", answer: "3-5 references at similar scope + audience + duration. Hospital placement seeks hospital references; university seeks university; corporate seeks corporate. Ask about service-response performance, planogram-refresh discipline, dispute resolution, contract-renewal decision factors. Don't skip; reveals operator reality vs sales pitch.", audience: "Procurement" },
      { question: "What termination fees should we accept?", answer: "$500-2K per machine standard at host-initiated early exit. Always negotiate performance-failure exit clause overriding termination fees at multi-quarter SLA breach. Mutual termination supported with reasonable cure period (30-60 days). Force majeure provisions for natural disasters + pandemic-style disruption.", audience: "Legal" },
      { question: "What sustainability reporting can we require?", answer: "ENERGY STAR certification across all equipment. R-290 / R-744 low-GWP refrigerant. ISO 14001-aligned per-machine LCA — embodied carbon, operational kWh, refurbishment rate, end-of-life recycling pathway. Feeds corporate / hospital ESG / sustainability disclosure. Modern operators provide; legacy operators unable. Specify in contract.", audience: "Sustainability" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending contract structure + modern operator standards" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering amenity service contract review" },
      { label: "IFMA — facility management contract guidance", url: "https://www.ifma.org/", note: "Facility management industry standards covering service contract review" },
      { label: "ABA — American Bar Association commercial contract guidance", url: "https://www.americanbar.org/", note: "Professional association for commercial contract law" },
      { label: "ISO 14001 — environmental management standard", url: "https://www.iso.org/iso-14001-environmental-management.html", note: "International standard governing operator LCA reporting for ESG / sustainability disclosure" },
    ],
  }),
  relatedGuides({
    heading: "Related vending contract guides",
    items: [
      { eyebrow: "Sister guide", title: "Case study — vending contract success", description: "Hospital case study showing 2× revenue + 2.9× commission via structured RFP.", href: "/vending-contracts/case-study-vending-contract-success" },
      { eyebrow: "Operations", title: "How vending contracts work", description: "Contract structure, term, commission, SLA, fees, termination provisions.", href: "/vending-contracts/how-vending-contracts-work" },
      { eyebrow: "Hub", title: "All vending contract guides", description: "Contracts, RFP design, commission methodology, SLA, fees, termination, transfer provisions.", href: "/vending-contracts" },
    ],
  }),
]);
process.exit(0);
