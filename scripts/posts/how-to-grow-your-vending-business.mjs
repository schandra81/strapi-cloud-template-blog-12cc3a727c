import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, costBreakdown, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-grow-your-vending-business", [
  tldr({
    heading: "How do you actually grow a vending business — past the starter fleet and into structured-account capability, multi-location, and operator economics that compound?",
    paragraph:
      "Growing a vending business past the starter fleet phase (5-12 machines, mostly small-account placements, 12-24 months in operation) requires a structured shift across six dimensions that compound — most operators stall here because they keep doing what worked at starter scale instead of transitioning to scale capability. The six dimensions: (1) capability upgrade — move from legacy stack (no telemetry, cash-only, no dispute portal, ad-hoc service) to modern stack (cellular telemetry via Cantaloupe Seed, Nayax MoMa, or 365 Retail Markets ADM; EMV/NFC plus mobile wallet; PCI-DSS v4.0; dispute portal accessible via QR or NFC; ENERGY STAR equipment; allergen labeling; monthly statement with revenue-share methodology transparent; ESG reporting where applicable; SLA with liquidated damages); (2) account mix shift — move from small accounts (under 50 employees, no anchor positioning) toward structured commercial accounts (300+ employees, healthcare, education, government, multi-location corporate); (3) sales pipeline structure — move from word-of-mouth and Craigslist-style placement acquisition to structured RFP response, anchor account positioning, reference customer development, proposal collateral including sample monthly statement and SLA performance reports; (4) operations scale — move from manual route to telemetry-driven prioritization, service responsiveness SLA, dispute portal handling at scale, quarterly QBR with placement leads, fresh-tier capability where AI cooler or micro-market deployments enter the fleet; (5) financial discipline — move from operator-financed equipment and manual bookkeeping to working capital reserve, equipment refresh cadence financing, S-corp or LLC tax structure at $75K+ profit threshold, monthly financials and quarterly contribution-margin analysis by placement; (6) team and capability scale — move from owner-operator to dispatched route staff with route-tech certification, account-management capability separate from route, dispute-portal handling capability, telemetry-data analysis capability, and structured QBR delivery capability. Operators who execute the six-dimension shift typically grow from 5-12 machines starter through 15-50 machines structured-account capability over 18-36 months and 50-200 machines multi-location operator over 3-7 years. Operators who skip the shift stall at 8-20 machines with sub-modern capability and lose accounts to modern operators with capability advantage. Written for vending operators 12-36 months into business evaluating growth structure, multi-location operators evaluating fleet scale, and small-fleet operators considering acquisition or merger.",
    bullets: [
      { emphasis: "Six dimensions compound — capability, account mix, sales pipeline, operations, financial discipline, team and capability scale:",
        text: "Each dimension drives growth independently; combined they compound. Operators who execute the six-dimension shift typically grow from 5-12 starter through 15-50 structured-account through 50-200 multi-location over 3-7 years." },
      { emphasis: "Capability upgrade is the foundational shift — modern stack drives 25-40% utilization differential:",
        text: "Cellular telemetry, EMV/NFC plus mobile wallet, PCI-DSS v4.0, dispute portal, ENERGY STAR equipment, allergen labeling, monthly statement transparency, ESG reporting, SLA with liquidated damages. Without modern stack, operators lose accounts to modern operators with capability advantage." },
      { emphasis: "Account mix shift unlocks scale economics — structured accounts have predictable economics:",
        text: "Move from small accounts (under 50 employees, no anchor positioning) toward structured commercial accounts (300+ employees, healthcare, education, government, multi-location corporate). Anchor account positioning supports peer reference acquisition; reference customer pipeline drives new structured-account placement at 12-24 month cycle." },
    ],
  }),
  statStrip({
    heading: "Vending business growth benchmarks",
    stats: [
      { number: "6", label: "dimensions of growth", sub: "capability + account mix + sales pipeline + operations + financial discipline + team", accent: "blue" },
      { number: "5-12", label: "starter fleet machines", sub: "first 12-24 months in business", accent: "blue" },
      { number: "15-50", label: "structured-account capability", sub: "18-36 month transition phase", accent: "blue" },
      { number: "50-200", label: "multi-location operator fleet", sub: "3-7 year growth trajectory", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Starter fleet vs structured-account vs multi-location operator",
    sub: "Each phase has distinct capability, account mix, and operations profile. Phase transition requires structured shift across six dimensions.",
    headers: ["Phase", "Fleet size", "Account mix", "Capability stack"],
    rows: [
      ["Starter (12-24 months)", "5-12 machines", "Mostly small accounts (under 50 employees)", "Legacy or hybrid — often cash-only, no telemetry, manual route"],
      ["Structured-account capability (18-36 month transition)", "15-50 machines", "Mix of small + structured (300+ employee office, healthcare, education)", "Modern stack — telemetry, EMV/NFC, dispute portal, ENERGY STAR, allergen labeling, SLA"],
      ["Multi-location operator (3-7 year growth)", "50-200 machines", "Predominantly structured commercial + multi-location corporate accounts", "Full modern stack + ESG reporting + AI cooler or micro-market capability + dispatched route team"],
      ["Regional or national operator (7+ years)", "200+ machines", "Multi-state structured accounts + master concession capability at airports", "Modern stack + multi-state compliance + DBE structure where applicable + enterprise capability"],
    ],
  }),
  specList({
    heading: "Six dimensions of vending business growth",
    items: [
      { label: "Capability upgrade — from legacy to modern stack", value: "Move from legacy stack (no telemetry, cash-only, no dispute portal, ad-hoc service) to modern stack — cellular telemetry (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM), EMV/NFC plus mobile wallet, PCI-DSS v4.0 tokenized payment, dispute portal accessible via QR or NFC with 24h SLA, ENERGY STAR equipment, allergen labeling at every SKU position, monthly statement with revenue-share methodology transparent, ESG reporting where applicable, SLA with liquidated damages. Modern stack drives 25-40% utilization differential and unlocks structured-account positioning." },
      { label: "Account mix shift — from small to structured commercial", value: "Move from small accounts (under 50 employees, no anchor positioning, no peer reference acquisition) toward structured commercial accounts (300+ employee office, healthcare, education, government, multi-location corporate). Structured accounts have predictable economics, longer contract terms (3-5 years), monthly statement and QBR cadence, and reference customer value for peer acquisition. Anchor account at structured scale drives 3-7 peer accounts over 18-36 months." },
      { label: "Sales pipeline structure — from word-of-mouth to structured RFP response", value: "Move from word-of-mouth and Craigslist-style placement acquisition to structured RFP response with capability matrix, anchor account positioning, reference customer development, proposal collateral including sample monthly statement and SLA performance reports, telemetry data samples, and quarterly QBR delivery samples. Structured pipeline pulls 3-5× the conversion rate of unstructured pipeline at structured commercial accounts." },
      { label: "Operations scale — from manual route to telemetry-driven and dispatched", value: "Move from manual route (owner-operator drives all restocks, ad-hoc service) to telemetry-driven prioritization (route prioritized by sell-through threshold, anomaly response triggered by telemetry), dispatched route staff with route-tech certification, account-management capability separate from route, dispute-portal handling at scale, quarterly QBR delivery capability with placement leads, and fresh-tier capability where AI cooler or micro-market deployments enter the fleet (ServSafe-certified restock, FIFO rotation, cold-chain integrity verification)." },
      { label: "Financial discipline — working capital, tax structure, monthly financials, contribution margin", value: "Move from operator-financed equipment and manual bookkeeping to structured financial discipline — working capital reserve (3-6 months operating expense reserve), equipment refresh cadence financing (5-7 year refresh aligned to operator MSAs), S-corp or LLC tax structure at $75K+ profit threshold (saves $5-25K annually at the threshold), monthly financials with revenue-share methodology aligned to placement MSAs, and quarterly contribution-margin analysis by placement (identify underperforming placements early for renegotiation or termination)." },
      { label: "Team and capability scale — from owner-operator to dispatched team", value: "Move from owner-operator (one person doing route, account management, sales, financial discipline, capability development) to dispatched team — route staff with NAMA route-tech certification, account-management capability separate from route (one account manager per 30-50 placements), dispute-portal handling capability, telemetry-data analysis capability, structured QBR delivery capability, and fresh-tier capability (ServSafe-certified, micro-market kiosk operations). Team scale enables operator to handle structured accounts at scale and unlock multi-location capability." },
      { label: "Reference customer development — peer acquisition leverage", value: "Anchor accounts at structured commercial scale (300+ employee office, healthcare, education, government, multi-location corporate) become reference customers for peer acquisition. Each structured anchor account typically drives 3-7 peer accounts over 18-36 months via reference, RFP response with reference samples, and trade-association visibility (NAMA, IHRSA where fitness, AAAE where airport). Build reference customer development into account-management process explicitly." },
      { label: "Trade association and industry engagement", value: "Engage NAMA (National Automatic Merchandising Association), industry-vertical associations (IHRSA at fitness, AAAE at airport, ASBO at K-12 education, AHA at healthcare), and state-level operator associations. Industry engagement drives peer reference acquisition, RFP visibility, capability benchmarking against operator-side peers, and trade-show pipeline. Modern operators engage industry consistently; legacy operators do not." },
      { label: "Compliance and reporting capability — multi-state, ESG, DBE where applicable", value: "Build compliance and reporting capability for multi-state operation (sales tax in each state of operation, state operator license where required, local business license, ServSafe-certified restock staff at fresh-tier placements), ESG reporting (ENERGY STAR fleet share, low-GWP refrigerant share, packaging mix, recycling capture, truck-mile reduction at corporate accounts), and DBE structure where applicable at airport or government placements (49 CFR Part 23 ACDBE at primary airports; state and local DBE at government placements). Compliance capability unlocks high-margin structured-account placements." },
      { label: "Acquisition or merger pathway — accelerator at the 50-200 fleet threshold", value: "At the 50-200 fleet threshold, acquisition or merger pathway accelerates growth — acquire smaller operator (5-25 fleet) at 3-5× contribution margin multiple, integrate into modern stack and structured-account capability, retain anchor accounts and reference customer leverage. Alternatively merge with peer operator at comparable scale for combined regional capability. Modern operator stack and structured-account capability make acquired fleets more valuable through capability uplift; legacy stack acquisitions produce capability erosion risk." },
    ],
  }),
  timeline({
    heading: "Vending business growth playbook",
    sub: "What happens from starter fleet through structured-account capability through multi-location operator. Total elapsed 3-7 years at structured execution.",
    howToName: "How to grow a vending business",
    totalTime: "P2555D",
    steps: [
      { label: "PHASE 1", title: "Starter fleet stabilization (months 0-12)", description: "Stabilize starter fleet (5-12 machines, mostly small accounts) with modern capability stack — cellular telemetry, EMV/NFC plus mobile wallet, PCI-DSS v4.0, dispute portal, ENERGY STAR equipment, allergen labeling, monthly statement. Build working capital reserve (3-6 months operating expense). Establish accounting software, S-corp or LLC tax structure where threshold met, COI scope (commercial general liability, product liability, auto, workers comp)." },
      { label: "PHASE 2", title: "First structured anchor account (months 6-18)", description: "Identify and pursue first structured commercial anchor account (300+ employee office, healthcare, education, or government). Structured RFP response with capability matrix. Reference customer development from existing starter fleet placements. LOI to commission cycle 60-180 days. Anchor account placement establishes peer reference acquisition foundation." },
      { label: "PHASE 3", title: "Structured-account capability scale (months 12-36)", description: "Scale to 15-50 machines with structured-account capability — mix of small + structured (300+ employee office, healthcare, education). Account-management capability separate from route. Quarterly QBR delivery with placement leads. ESG reporting where applicable. Reference customer pipeline driving 3-7 peer accounts per anchor. Working capital reserve maintained at 3-6 months operating expense." },
      { label: "PHASE 4", title: "Fresh-tier capability addition (months 24-48)", description: "Add fresh-tier capability — AI smart cooler at structured commercial placements with fresh demand, micro-market capability at education or corporate scale. ServSafe-certified restock staff. FIFO rotation discipline. Cold-chain integrity verification via telemetry. Specialty vending capability where airport or hospitality placements enter the fleet. Fresh-tier capability unlocks 20-40% higher per-placement revenue at structured accounts with fresh demand." },
      { label: "PHASE 5", title: "Team and dispatched route scale (months 30-60)", description: "Move from owner-operator to dispatched team — route staff with NAMA route-tech certification (one route staff per 25-40 placements), account management capability (one account manager per 30-50 placements), dispute-portal handling at scale, telemetry-data analysis capability, structured QBR delivery capability. Team scale enables operator to handle structured accounts at multi-location scale." },
      { label: "PHASE 6", title: "Multi-location operator capability (months 36-84)", description: "Scale to 50-200 machines with multi-location operator capability — predominantly structured commercial + multi-location corporate accounts. Modern stack full deployment. ESG reporting standard. AI cooler or micro-market capability at supported placements. Dispatched route team. Account-management capability separate from route. Multi-location corporate accounts drive 3-5 placements per anchor with shared QBR and reporting cadence." },
      { label: "PHASE 7", title: "Acquisition or merger pathway (months 48-84)", description: "Evaluate acquisition or merger pathway — acquire smaller operator (5-25 fleet) at 3-5× contribution margin multiple, integrate into modern stack and structured-account capability. Alternatively merge with peer operator at comparable scale for combined regional capability. Acquisition or merger accelerates growth at the 50-200 fleet threshold; modern stack and structured-account capability make acquired fleets more valuable through capability uplift." },
      { label: "PHASE 8", title: "Regional or national operator (months 60+)", description: "Scale to 200+ machines with regional or national operator capability — multi-state structured accounts, master concession capability at airports where DBE structure or partnership exists, enterprise capability with multi-state compliance and reporting. Trade association engagement at NAMA national level. Industry-vertical engagement at IHRSA, AAAE, ASBO, AHA where applicable." },
    ],
  }),
  costBreakdown({
    heading: "Vending business growth phase cost components",
    sub: "Cost components across growth phases. Working capital reserve maintained at 3-6 months operating expense throughout.",
    items: [
      { label: "Capability upgrade — telemetry, EMV/NFC, dispute portal, ENERGY STAR refresh", amount: "$8K-$25K", range: "One-time + $30-80 per machine per year telemetry" },
      { label: "Structured-account positioning — proposal collateral, reference customer development", amount: "$3K-$10K", range: "One-time + ongoing reference development" },
      { label: "Fresh-tier capability addition — ServSafe certification, refrigeration, AI cooler or micro-market", amount: "$15K-$80K", range: "Per fresh-tier placement deployment" },
      { label: "Team scale — route staff with NAMA route-tech certification, account management", amount: "$60K-$180K", range: "Per route staff or account manager annually plus burden" },
      { label: "Compliance capability — multi-state sales tax, ESG, DBE structure where applicable", amount: "$5K-$20K", range: "Annual compliance maintenance plus DBE structure setup where applicable" },
      { label: "Trade association engagement — NAMA + industry-vertical associations", amount: "$2K-$8K", range: "Annual membership plus trade-show attendance" },
      { label: "Acquisition or merger — at the 50-200 fleet threshold", amount: "$50K-$400K", range: "Acquisition multiple 3-5× contribution margin at acquired fleet" },
    ],
    totalLabel: "Growth phase cost range (12-36 months structured-account capability scale)",
    totalAmount: "$93K-$323K",
  }),
  tipCards({
    heading: "Five vending business growth mistakes",
    sub: "Each documented in operator-side growth post-mortems and trade association industry benchmarks. All preventable with structured six-dimension shift discipline.",
    items: [
      { title: "Scaling fleet ahead of capability upgrade — losing accounts to modern operators", body: "Operator scales fleet from 5-12 starter to 15-30 machines without capability upgrade (no telemetry, cash-only, no dispute portal). Modern operators with capability advantage win RFPs at structured commercial accounts; growth stalls or reverses. Capability upgrade is the foundational shift — execute before scaling fleet. Modern stack drives 25-40% utilization differential and unlocks structured-account positioning." },
      { title: "Skipping anchor account development — no peer reference pipeline", body: "Operator stays in small-account placement acquisition mode without developing structured commercial anchor account (300+ employee office, healthcare, education, government). No reference customer pipeline; growth stalls at 8-20 machines. Identify and pursue first structured anchor account at months 6-18; anchor establishes peer reference acquisition foundation driving 3-7 peer accounts over 18-36 months." },
      { title: "Owner-operator capacity ceiling — no team scale", body: "Operator stays owner-operator (one person doing route, account management, sales, financial discipline, capability development) past the 15-25 fleet threshold. Capacity ceiling produces service decay, missed quarterly QBRs, and account churn. Move to dispatched team (route staff with NAMA route-tech certification, account management separate from route) at the 15-25 fleet threshold." },
      { title: "Skipping ESG and sustainability reporting at corporate accounts", body: "Operator skips ESG reporting capability (ENERGY STAR fleet share, low-GWP refrigerant share, packaging mix, recycling capture, truck-mile reduction) at structured commercial accounts. Corporate accounts increasingly require ESG data for Scope 3 emissions reporting, supplier-sustainability scorecards, and corporate carbon-neutrality plans. Build ESG reporting capability into modern stack." },
      { title: "Acquisition at the 50-200 threshold without integration capability", body: "Operator acquires smaller operator (5-25 fleet) at the 50-200 fleet threshold without integration capability for modern stack and structured-account positioning. Acquired fleet retains legacy stack and small-account mix; capability erosion risk; acquisition multiple doesn't earn back. Build integration capability before acquisition — acquired fleets become more valuable through capability uplift only at operators with modern stack and structured-account capability." },
    ],
  }),
  decisionTree({
    heading: "Are we positioned to execute the six-dimension growth shift?",
    question: "Have we upgraded to modern capability stack AND identified or acquired first structured anchor account AND moved toward dispatched team AND built financial discipline (working capital + tax structure + monthly financials + contribution margin) AND positioned reference customer development?",
    yesBranch: {
      title: "Growth shift underway — calendar phase transitions and execute the six-dimension shift.",
      description: "Modern capability stack deployed (cellular telemetry, EMV/NFC plus mobile wallet, PCI-DSS v4.0, dispute portal, ENERGY STAR, allergen labeling, monthly statement transparency, ESG reporting where applicable, SLA with liquidated damages). First structured anchor account placed. Dispatched team scaling underway. Working capital reserve at 3-6 months operating expense. S-corp or LLC tax structure where threshold met. Reference customer pipeline developing. Calendar phase transitions across the eight-phase playbook with industry-association engagement and trade-show pipeline.",
      finalTone: "go",
      finalLabel: "GROWTH SHIFT UNDERWAY",
    },
    noBranch: {
      title: "Growth shift gaps — schedule capability upgrade and structured account development.",
      description: "One or more of the six growth dimensions is missing or stuck at starter-fleet posture. Schedule capability upgrade (modern stack deployment), structured anchor account development (RFP response capability, reference customer development), dispatched team transition (route staff with NAMA certification, account management separate from route), and financial discipline (working capital reserve, tax structure, monthly financials, contribution margin). Without the six-dimension shift, growth stalls at 8-20 machines with sub-modern capability.",
      finalTone: "stop",
      finalLabel: "GROWTH SHIFT NEEDED",
    },
  }),
  caseStudy({
    tag: "REPRESENTATIVE GROWTH SHAPE",
    title: "What 36-month growth from 8-machine starter to 40-machine structured-account capability looks like",
    context:
      "Representative shape for a 36-month growth trajectory from 8-machine starter fleet (mostly small accounts, hybrid capability stack) to 40-machine structured-account capability operator (mix of small + structured commercial accounts, full modern stack, dispatched team transition underway, first multi-location corporate account placement).",
    meta: [
      { label: "Starting profile", value: "8 machines, mostly small accounts (under 50 employees), hybrid stack (some telemetry, EMV/NFC at half the fleet)" },
      { label: "36-month profile", value: "40 machines, mix of small + 4-6 structured anchor accounts, full modern stack, dispatched team transition underway" },
      { label: "Capability shift", value: "Full modern stack deployed across fleet; ENERGY STAR equipment at refresh cycle; ESG reporting at corporate anchor accounts" },
      { label: "Team shift", value: "Owner-operator to dispatched team — 1 route staff plus owner-operator at month 18, 2 route staff plus account-management capability at month 30" },
    ],
    results: [
      { number: "5×", label: "fleet growth (8 → 40 machines) over 36-month structured shift" },
      { number: "4-6", label: "structured anchor accounts placed (300+ employee office, healthcare, education) driving peer reference pipeline" },
      { number: "25-40%", label: "utilization differential from modern stack vs legacy stack baseline" },
      { number: "3-6 mo", label: "working capital reserve maintained throughout growth phase" },
    ],
  }),
  inlineCta({
    text: "Want the vending business growth framework (six-dimension shift checklist, structured-account RFP capability matrix, eight-phase growth playbook)?",
    buttonLabel: "Get the growth framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support vending business growth evaluation — including capability upgrade from legacy to modern stack (cellular telemetry via Cantaloupe Seed, Nayax MoMa, or 365 Retail Markets ADM; EMV/NFC plus mobile wallet; PCI-DSS v4.0; dispute portal; ENERGY STAR equipment; allergen labeling; monthly statement transparency; ESG reporting; SLA with liquidated damages), structured-account positioning (anchor account development, reference customer pipeline, structured RFP response capability), dispatched team transition (NAMA route-tech certification, account management separate from route), financial discipline (working capital reserve, S-corp or LLC tax structure, monthly financials, contribution-margin analysis), trade association engagement (NAMA national plus industry-vertical IHRSA/AAAE/ASBO/AHA), compliance and reporting capability (multi-state sales tax, ESG, DBE structure where applicable), and acquisition or merger pathway evaluation at the 50-200 fleet threshold. Recommendations reflect operator-side data and growth-trajectory outcomes across comparable starter-through-multi-location operator phases.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does it take to grow past the starter fleet?", answer: "Structured shift across six dimensions — capability upgrade (modern stack), account mix shift (small to structured commercial), sales pipeline structure (structured RFP response), operations scale (telemetry-driven and dispatched), financial discipline (working capital, tax structure, monthly financials, contribution margin), and team and capability scale (dispatched route, account management separate from route). Each dimension compounds.", audience: "Operator" },
      { question: "What capability stack do structured accounts expect?", audience: "Operator", answer: "Cellular telemetry (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM), EMV/NFC plus mobile wallet, PCI-DSS v4.0 tokenized payment, dispute portal accessible via QR or NFC with 24h SLA, ENERGY STAR equipment, allergen labeling at every SKU position, monthly statement with revenue-share methodology transparent, ESG reporting where applicable, SLA with liquidated damages. Modern stack drives 25-40% utilization differential." },
      { question: "When should we pursue our first structured anchor account?", answer: "Months 6-18 typically — after starter fleet stabilization and capability upgrade to modern stack. Identify 300+ employee office, healthcare, education, or government anchor. Structured RFP response with capability matrix. Reference customer development from existing starter fleet placements. LOI to commission cycle 60-180 days. Anchor establishes peer reference acquisition foundation.", audience: "Operator" },
      { question: "When do we add dispatched route team?", answer: "At the 15-25 fleet threshold typically. Owner-operator capacity ceiling produces service decay, missed quarterly QBRs, and account churn past 15-25 machines. Move to dispatched team — route staff with NAMA route-tech certification (one staff per 25-40 placements), account management capability separate from route (one account manager per 30-50 placements).", audience: "Operator" },
      { question: "What working capital reserve should we maintain?", answer: "3-6 months operating expense reserve throughout growth phase. Reserve supports equipment refresh cadence, service responsiveness during anomaly events, multi-state compliance and tax obligations, and acquisition or merger pathway evaluation at the 50-200 fleet threshold.", audience: "Finance" },
      { question: "When should we set up S-corp or LLC tax structure?", answer: "At the $75K+ profit threshold typically. S-corp structure saves $5-25K annually at the threshold through self-employment tax optimization on reasonable salary plus distribution split. LLC structure simpler at lower thresholds; S-corp election available at higher thresholds. Consult tax advisor for specific structure decision.", audience: "Finance" },
      { question: "How do we develop reference customer pipeline?", answer: "Each structured anchor account at 300+ employee scale typically drives 3-7 peer accounts over 18-36 months via reference, RFP response with reference samples, and trade-association visibility. Build reference customer development into account-management process explicitly — quarterly QBR delivery, monthly statement transparency, SLA performance reports, and ESG reporting where applicable produce reference-quality account documentation.", audience: "Sales" },
      { question: "When should we consider acquisition or merger?", answer: "At the 50-200 fleet threshold typically. Acquisition of smaller operator (5-25 fleet) at 3-5× contribution margin multiple, integrate into modern stack and structured-account capability. Alternatively merge with peer operator at comparable scale for combined regional capability. Acquisition or merger accelerates growth at the threshold; modern stack and structured-account capability make acquired fleets more valuable through capability uplift.", audience: "Operator" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade body covering operator capability standards, route-tech certification, and growth benchmarks" },
      { label: "SBA — Small Business Administration growth resources", url: "https://www.sba.gov/business-guide/grow-your-business", note: "Federal Small Business Administration guidance on business growth including working capital, team scale, and acquisition pathway" },
      { label: "IRS — S-Corporation election and tax structure", url: "https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations", note: "Federal IRS guidance on S-corporation election available to vending operators at higher profit thresholds" },
      { label: "Cantaloupe / Nayax / 365 Retail Markets — modern operator telemetry platforms", url: "https://www.cantaloupe.com/", note: "Modern telemetry platforms underlying capability upgrade for growing vending operators" },
      { label: "Vending Times and Automatic Merchandiser — industry trade publications", url: "https://www.vendingtimes.com/", note: "Industry trade publications covering operator growth, capability trends, and industry benchmarks" },
    ],
  }),
  relatedGuides({
    heading: "Related vending business startup guides",
    items: [
      { eyebrow: "Sister guide", title: "How to start a vending machine business", description: "Eight operational fronts for launching a vending business including capital, equipment, sales pipeline, and first installs.", href: "/vending-business-startup/how-to-start-a-vending-machine-business" },
      { eyebrow: "Operations", title: "Common mistakes new vending operators make", description: "Six mistake categories during the first 12-24 months — capital, capability, sales, operations, compliance, mindset.", href: "/vending-business-startup/common-mistakes-new-vending-operators-make" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Launch, growth, capability, sales, operations, and compliance for vending operators across phases.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
