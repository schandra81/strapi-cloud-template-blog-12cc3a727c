import { seedPost, tldr, statStrip, timeline, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-vending-management-companies-select-vendors", [
  tldr({
    heading: "How do vending management companies select the operator vendors in their network?",
    paragraph:
      "Vending management companies (VMCs) — Compass / Canteen, Aramark Refreshments, Sodexo Vending, ARAMARK Refreshment Services, USConnect's network — select operator vendors through a structured eight-stage process: (1) coverage assessment (geographic gap analysis across portfolio), (2) RFI / RFP issuance with capability questionnaire (telemetry coverage %, ENERGY STAR fleet %, PCI-DSS attestation currency, sustainability reporting), (3) capability scoring against published rubric (typically 40 points operator capability + 30 points commercial terms + 20 points compliance + 10 points references), (4) financial review (Dun & Bradstreet rating, Secretary of State entity verification, sample financial statements, insurance certificates with general liability $2-5M / auto $1-2M / workers comp / cyber where applicable), (5) reference checks at same-segment hosts and at other VMC networks, (6) on-site operational audit (warehouse, route fleet, telemetry platform demo, restock workflow), (7) commercial negotiation (commission settlement frequency, performance escalation, master agreement signature), (8) onboarding (system integration, scorecard baseline, ramp plan). Cycle runs 90-180 days from RFP issuance to first placement. VMC operator-vendor selection is substantially more rigorous than direct host operator selection — VMC reputation depends on every vendor in network performing to portfolio SLA. Hosts working through a VMC inherit the VMC's vendor vetting + ongoing scorecard oversight.",
    bullets: [
      { emphasis: "Structured eight-stage selection process:", text: "Coverage assessment, RFI / RFP, capability scoring, financial review, references, on-site audit, commercial negotiation, onboarding. 90-180 day cycle from RFP to first placement." },
      { emphasis: "Capability + commercial + compliance + references scored:", text: "Typical rubric 40 points capability (telemetry, ENERGY STAR, PCI, sustainability), 30 points commercial terms, 20 points compliance, 10 points references. Documented scoring drives vendor selection." },
      { emphasis: "Hosts working through VMC inherit VMC vendor vetting:", text: "VMC reputation depends on every vendor in network. Selection rigor is substantially higher than direct host operator selection. VMC ongoing scorecard oversight adds accountability layer." },
    ],
  }),
  statStrip({
    heading: "VMC operator-vendor selection benchmarks",
    stats: [
      { number: "8 stages", label: "selection process", sub: "RFP to first placement", accent: "blue" },
      { number: "90-180 days", label: "selection cycle", sub: "RFP issuance to onboarding", accent: "blue" },
      { number: "40/30/20/10", label: "typical scoring rubric", sub: "capability / commercial / compliance / references", accent: "blue" },
      { number: "$2-5M", label: "GL insurance requirement", sub: "VMC vendor minimum", accent: "blue" },
    ],
  }),
  timeline({
    heading: "VMC operator-vendor selection — eight-stage process",
    sub: "End-to-end workflow from coverage gap to first placement. Major VMCs follow variants of this process.",
    howToName: "Select an operator vendor in a VMC network",
    totalTime: "90-180 days",
    steps: [
      { title: "Stage 1 — Coverage gap assessment", description: "VMC analyzes geographic and segment gaps across portfolio. Identifies markets where new vendor capacity needed (geographic, segment-specific — AI cooler / fresh food / micro-market). Sets capability + capacity targets for RFP.", label: "Days 1-14" },
      { title: "Stage 2 — RFI / RFP issuance with capability questionnaire", description: "VMC issues RFP with capability questionnaire: telemetry coverage %, ENERGY STAR fleet share, low-GWP refrigerant share, PCI-DSS attestation currency, sustainability reporting capability, fleet size, route count, customer base, same-segment references, financial statements, insurance certificates.", label: "Days 15-35" },
      { title: "Stage 3 — Capability scoring", description: "Submitted responses scored against published rubric. Typical: 40 points operator capability (telemetry, ENERGY STAR, PCI, fleet age, sustainability), 30 points commercial terms (commission settlement, fee structure, performance escalation), 20 points compliance (PCI, ADA, food safety), 10 points references. Cutoff threshold typically 70/100.", label: "Days 36-50" },
      { title: "Stage 4 — Financial review", description: "Dun & Bradstreet rating, Secretary of State entity verification (no frequent name changes or judgment history), sample financial statements (revenue, EBITDA, cash position), insurance certificates (general liability $2-5M, auto $1-2M, workers comp, cyber where applicable). Below-threshold financials disqualify.", label: "Days 51-65" },
      { title: "Stage 5 — Reference checks", description: "3-5 same-segment host references (Fortune 500, hospital, university, federal sites comparable to VMC portfolio). 2-3 references at other VMC networks if applicable. Generic references discounted. Reference calls cover service consistency, commission settlement integrity, SLA enforcement track record, exit cooperation.", label: "Days 66-80" },
      { title: "Stage 6 — On-site operational audit", description: "VMC audit team visits operator warehouse, route fleet depot, telemetry platform (live demo), restock workflow. Verifies claimed telemetry coverage, fleet ENERGY STAR coverage, PCI-DSS practice, sustainability data infrastructure. Discrepancies vs RFP responses trigger disqualification or remediation.", label: "Days 81-110" },
      { title: "Stage 7 — Commercial negotiation", description: "Master service agreement: commission settlement frequency (30 days post-period-end modern), performance escalation (corrective action protocol after sustained SLA miss), fee escalation caps (typically CPI + 1-2%), equipment ownership terms, indemnification, termination rights, exclusivity (rare and narrow). Counsel-reviewed at scale.", label: "Days 111-145" },
      { title: "Stage 8 — Onboarding + first placement", description: "System integration (telemetry data feed to VMC dashboard, commission settlement file format, sustainability reporting format), scorecard baseline (initial SLA expectations and review cadence), ramp plan (first 1-3 placements piloted, then portfolio rollout). VMC monitors scorecard ongoing; sustained underperformance triggers corrective action or termination.", label: "Days 146-180" },
    ],
  }),
  comparisonTable({
    heading: "VMC vendor selection vs direct host operator selection",
    sub: "VMC selection is substantially more rigorous than direct host selection. Hosts working through VMC inherit vetting.",
    headers: ["Dimension", "Direct host operator selection", "VMC operator-vendor selection"],
    rows: [
      ["Typical cycle", "30-90 days", "90-180 days"],
      ["Capability scoring rubric", "Often informal", "Published rubric, documented scores"],
      ["Financial review depth", "Variable; often skipped", "D&B + SoS + financials + insurance certs"],
      ["Reference depth", "2-3 references; often generic", "3-5 same-segment + 2-3 other VMC networks"],
      ["On-site operational audit", "Rare", "Standard — warehouse, fleet, telemetry, workflow"],
      ["Insurance requirements", "Variable", "Standardized — GL $2-5M, Auto $1-2M, WC, Cyber"],
      ["Ongoing scorecard oversight", "Host-managed", "VMC-managed across portfolio"],
      ["Performance escalation", "Per-contract", "Network-wide corrective action protocols"],
      ["Vendor exit cooperation", "Per-contract", "VMC-managed transition + warm handoff"],
    ],
  }),
  specList({
    heading: "VMC operator-vendor selection specifications",
    items: [
      { label: "RFP capability questionnaire", value: "Telemetry coverage % of fleet (modern requirement 95%+), ENERGY STAR fleet share % (95%+ modern), low-GWP refrigerant share %, PCI-DSS attestation dated within 12 months, sustainability reporting capability (STARS / FEMP / ESG / Airport Carbon Accreditation), fleet size, route count, customer base, same-segment references, financial statements, insurance certificates." },
      { label: "Capability scoring rubric", value: "Typical published rubric: 40 points operator capability (telemetry, ENERGY STAR, PCI, fleet age, sustainability reporting), 30 points commercial terms (commission settlement frequency, fee structure transparency, performance escalation), 20 points compliance (PCI, ADA / Section 508, food safety, industry-specific), 10 points references. Cutoff typically 70/100 for further review." },
      { label: "Financial review components", value: "Dun & Bradstreet rating (Paydex 70+ modern preferred), Secretary of State entity verification (no frequent name changes or judgment history), sample financial statements (revenue, EBITDA, cash position, debt service coverage), insurance certificates with VMC named as additional insured (general liability $2-5M, auto $1-2M, workers comp per state, cyber liability where data integration applicable)." },
      { label: "Reference protocol", value: "3-5 same-segment host references (matched to VMC portfolio composition — Fortune 500, hospital, university, federal sites), 2-3 other VMC network references if vendor is in other networks. Reference calls cover: service consistency, commission settlement integrity, SLA enforcement track record, exit cooperation at prior contracts. Generic references discounted." },
      { label: "On-site operational audit", value: "VMC audit team visits operator warehouse (inventory practice, FIFO discipline, food safety where applicable), route fleet depot (vehicle condition, telemetry hardware verification), telemetry platform (live demo of dashboard, restock workflow, fault triage), commission settlement workflow (sample statement generation, accuracy verification). Discrepancies vs RFP responses trigger disqualification or remediation." },
      { label: "Master service agreement components", value: "Commission settlement frequency (30 days post-period-end modern), performance escalation (corrective action protocol after sustained SLA miss), fee escalation caps (typically CPI + 1-2%), equipment ownership terms, indemnification, termination rights (performance-based + convenience), exclusivity terms (rare and narrow), data integration requirements (telemetry feed, commission settlement file format), reporting cadence." },
      { label: "Onboarding system integration", value: "Telemetry data feed to VMC dashboard (typically API integration with Cantaloupe, Nayax, Parlevel, VendSys platforms), commission settlement file format (often standardized CSV or NACS PDI format), sustainability reporting format (STARS / FEMP / ESG / ACA pre-formatted), scorecard baseline (initial SLA expectations, review cadence, escalation triggers)." },
      { label: "Ongoing scorecard oversight", value: "Quarterly business reviews against published SLA: uptime, restock fill rate, ticket count, commission settlement integrity, customer feedback, sustainability data integrity. Sustained underperformance triggers corrective action protocol. Network-wide visibility — VMC sees patterns across portfolio that individual hosts can't." },
      { label: "Exit + transition protocol", value: "Vendor exit at term-end or performance-failure exit: equipment buyout at fair-market-value (host or VMC option), warm handoff to incoming vendor, commission reconciliation through transition period, customer communication coordination. VMC manages transition across portfolio; individual hosts benefit from VMC-coordinated exit." },
    ],
  }),
  tipCards({
    heading: "Five VMC vendor selection patterns hosts should understand",
    sub: "Hosts working through VMC inherit VMC vendor vetting. Understanding the process helps hosts evaluate VMC quality.",
    items: [
      { title: "Selection rigor varies substantially across VMCs", body: "Modern VMCs (Compass / Canteen, Aramark, Sodexo, USConnect at scale) run rigorous structured selection. Smaller / less-capable VMCs run informal selection that inherits weaker vendors. Ask VMC for documented selection rubric at host RFP; weak documentation signals weak vetting." },
      { title: "Same-segment references matter more than generic references", body: "VMC reference checks at same-segment hosts (matched to VMC portfolio — Fortune 500, hospital, university, federal) reveal year-2-3 vendor reality. Generic references reveal little. VMCs that don't demand same-segment references at vendor selection inherit operational risk." },
      { title: "On-site operational audit is the most-skipped stage", body: "Smaller VMCs skip on-site audit due to cost. Skipping means VMC can't verify claimed telemetry coverage, fleet ENERGY STAR coverage, PCI-DSS practice. Ask VMC whether on-site audit is standard in vendor selection; verify with VMC's process documentation." },
      { title: "Insurance requirements set vendor floor", body: "Standardized GL $2-5M, Auto $1-2M, WC per state, Cyber where applicable. Vendors below threshold disqualified at financial review. Hosts benefit from VMC insurance floor — individual host RFPs often have weaker insurance requirements that admit under-insured operators." },
      { title: "Ongoing scorecard oversight is the durable benefit", body: "VMC vendor selection produces the entry point; ongoing scorecard oversight produces the durable benefit. Quarterly business reviews against SLA, network-wide pattern detection, corrective action protocols. Hosts benefit from VMC-managed oversight across portfolio that individual hosts can't replicate." },
    ],
  }),
  inlineCta({
    text: "Want the VMC vendor selection framework (8-stage process + scoring rubric + reference protocol)?",
    buttonLabel: "Get the VMC selection framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported enterprise hosts on VMC evaluation and operator-vendor selection — including capability scoring rubric review, reference protocol design, on-site operational audit observation, master service agreement negotiation, and ongoing scorecard oversight setup. The benchmarks reflect VMC-side selection process documentation and host-side vendor performance data across major VMC networks.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do VMCs select operator vendors?", answer: "Structured eight-stage process: coverage gap assessment, RFI / RFP issuance with capability questionnaire, capability scoring against published rubric, financial review (D&B + SoS + statements + insurance), reference checks at same-segment hosts, on-site operational audit, commercial negotiation, onboarding with system integration and scorecard baseline. 90-180 day cycle.", audience: "Procurement" },
      { question: "Why is VMC selection more rigorous than direct host selection?", answer: "VMC reputation depends on every vendor in network performing to portfolio SLA. Each underperforming vendor produces host complaints, lost contracts, brand damage. VMCs invest in rigorous selection because the cost of vendor failure is multiplied across the portfolio. Direct host selection has lower stakes — single placement.", audience: "Procurement" },
      { question: "What capability scoring rubric do VMCs use?", answer: "Typical: 40 points operator capability (telemetry coverage %, ENERGY STAR fleet %, PCI-DSS attestation, low-GWP refrigerant share, sustainability reporting), 30 points commercial terms (commission settlement frequency, fee structure transparency, performance escalation), 20 points compliance (PCI, ADA / Section 508, food safety, industry-specific), 10 points references. Cutoff typically 70/100.", audience: "Procurement" },
      { question: "How do reference checks work in VMC selection?", answer: "3-5 same-segment host references matched to VMC portfolio composition (Fortune 500, hospital, university, federal). 2-3 other VMC network references if applicable. Reference calls cover service consistency, commission settlement integrity, SLA enforcement, exit cooperation. Generic references discounted.", audience: "Procurement" },
      { question: "What does the on-site operational audit cover?", answer: "VMC audit team visits operator warehouse (inventory practice, FIFO discipline), route fleet depot (vehicle condition, telemetry hardware verification), telemetry platform (live dashboard demo, restock workflow, fault triage), commission settlement workflow (sample statement, accuracy verification). Verifies claimed RFP responses; discrepancies trigger remediation or disqualification.", audience: "Procurement" },
      { question: "What insurance does the VMC require?", answer: "Standardized minimum: general liability $2-5M per occurrence, auto liability $1-2M, workers compensation per state requirements, cyber liability where data integration applicable (typically $1-5M). VMC named as additional insured on certificates. Vendors below threshold disqualified at financial review.", audience: "Risk Management" },
      { question: "What ongoing oversight does the VMC provide?", answer: "Quarterly business reviews against published SLA (uptime, restock fill rate, ticket count, commission settlement, customer feedback, sustainability data integrity). Network-wide pattern detection (issues seen across portfolio that individual hosts miss). Corrective action protocol triggers for sustained underperformance. Termination right after sustained miss.", audience: "Procurement" },
      { question: "What happens when a VMC vendor exits?", answer: "Equipment buyout at fair-market-value (host or VMC option), warm handoff to incoming vendor, commission reconciliation through transition period, customer communication coordination. VMC manages transition across portfolio — hosts benefit from coordinated exit that individual hosts couldn't replicate without VMC infrastructure.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending industry operator standards", url: "https://www.namanow.org/", note: "Industry trade association reference for operator capability standards" },
      { label: "Dun & Bradstreet — business credit and Paydex rating", url: "https://www.dnb.com/", note: "Standard business financial review reference at VMC vendor selection" },
      { label: "PCI Security Standards Council — DSS attestation framework", url: "https://www.pcisecuritystandards.org/", note: "Standard governing cashless payment attestation required at VMC vendors" },
      { label: "Compass Group / Canteen — major VMC network", url: "https://www.canteen.com/", note: "Major US VMC network referenced for vendor selection practice" },
      { label: "Aramark Refreshment Services — major VMC network", url: "https://www.aramark.com/services/refreshment-services", note: "Major US VMC network referenced for vendor selection practice" },
    ],
  }),
  relatedGuides({
    heading: "Related vending management guides",
    items: [
      { eyebrow: "Sister guide", title: "How to choose a vending management company", description: "Ten-criterion framework for VMC selection at enterprise scale.", href: "/vending-management-companies/how-to-choose-a-vending-management-company" },
      { eyebrow: "Operations", title: "Top vending management companies in the US", description: "Major US VMC networks compared by capability, scale, and segment focus.", href: "/vending-management-companies/top-vending-management-companies-in-the-us" },
      { eyebrow: "Hub", title: "All vending management company guides", description: "VMC evaluation, contract terms, SLA, commission settlement, and vendor selection.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
