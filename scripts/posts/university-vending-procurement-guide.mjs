import { seedPost, tldr, statStrip, comparisonTable, timeline, specList, tipCards, decisionTree, keyTakeaways, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("university-vending-procurement-guide", [
  tldr({
    heading: "How should a university actually run a vending and AI cooler procurement — RFP, evaluation, and contract?",
    paragraph:
      "University vending procurement is a structured RFP exercise governed by state procurement code (public universities) or institutional purchasing policy (private universities). The modern playbook differs sharply from generic snack vending bids: AI vending cooler walls (365 Retail Markets, Avanti, Accel Robotics, AiFi) now sit alongside traditional snack and beverage vending and micro-markets in a single auxiliary services bid. Procurement spans seven phases. (1) Needs assessment — inventory existing placements across residence halls, student centers, libraries, recreation facilities, academic buildings, athletic facilities, and campus stores; document daily user counts; classify each placement as high-volume (200-500+ users), medium (50-200), or low (<50). (2) Stakeholder alignment — auxiliary services, dining services, residence life, sustainability office (STARS reporting), accessibility coordinator (ADA compliance), campus card office (Blackboard Transact, CBORD, Atrium, Transact Campus integration), procurement, legal, risk management. (3) RFP development — scope, technical requirements, commission structure, sustainability requirements (STARS-aligned reporting), accessibility (ADA + Section 508 for digital interfaces), campus card integration, data privacy (FERPA-adjacent, biometric where applicable), supplier diversity goals, term length (typically 3-5 years with renewal options), exclusivity scope. (4) Bidder qualification — campus references (same-segment higher-ed), capacity (machine count + service hours), insurance ($2M+ general liability typical), supplier diversity certification where institution prioritizes. (5) Proposal evaluation — weighted scoring across commission rate (15-25%), service capability (15-20%), AI cooler capability (10-15%), sustainability commitments (10-15%), accessibility (5-10%), supplier diversity (5-15%), references (10-15%). (6) Award + contract — negotiated terms, performance metrics (uptime, restock cadence, complaint resolution), quarterly business review cadence, sustainability reporting requirements, exit clauses. (7) Implementation + governance — phased rollout (residence halls first typically), STARS reporting integration, campus card integration testing, QBR cadence at 90/180/365 days. Total RFP-to-implementation timeline 6-12 months at large research universities. Don't shortcut stakeholder alignment or skip sustainability/accessibility/campus-card integration requirements in the RFP — these drive 50%+ of award value at sustainability-leading and accessibility-leading universities.",
    bullets: [
      { emphasis: "Seven-phase RFP procurement structure:", text: "Needs assessment + stakeholder alignment + RFP development + bidder qualification + proposal evaluation + award/contract + implementation. 6-12 month timeline at large universities." },
      { emphasis: "Modern bids span snack + beverage + AI cooler + micro-market:", text: "Single auxiliary services bid covers traditional and AI vending platforms. Bidder must demonstrate capability across the platform spectrum." },
      { emphasis: "Sustainability + accessibility + campus card drive award value:", text: "STARS-aligned reporting + ADA compliance + Blackboard/CBORD/Atrium/Transact integration are 30-50% of evaluation score at modern universities." },
    ],
  }),
  statStrip({
    heading: "University vending procurement benchmarks",
    stats: [
      { number: "6-12 mo", label: "RFP-to-implementation", sub: "large research universities", accent: "blue" },
      { number: "3-5 yr", label: "typical contract term", sub: "with renewal options", accent: "blue" },
      { number: "10-25%", label: "commission to university", sub: "weighted by placement mix", accent: "orange" },
      { number: "$2M+", label: "general liability insurance", sub: "standard bidder requirement", accent: "blue" },
    ],
  }),
  timeline({
    heading: "University vending RFP — phased procurement timeline",
    sub: "Six-to-twelve-month engagement at large research universities. Compress to four-to-six months at smaller institutions.",
    howToName: "Run a university vending RFP",
    totalTime: "P9M",
    steps: [
      { label: "Weeks 1-4", title: "Needs assessment + placement inventory", description: "Auxiliary services + dining + residence life inventory all placements; classify high/medium/low volume by daily user count; document existing operator performance gaps; identify expansion candidates including AI cooler placements." },
      { label: "Weeks 5-8", title: "Stakeholder alignment", description: "Convene auxiliary services, dining, residence life, sustainability office, accessibility coordinator, campus card office, procurement, legal, risk management. Align on scope, evaluation criteria weighting, sustainability and accessibility requirements, campus card integration scope." },
      { label: "Weeks 9-14", title: "RFP development + legal review", description: "Draft technical requirements, commission structure, sustainability requirements (STARS-aligned), accessibility (ADA + Section 508), campus card integration, data privacy, supplier diversity goals, term length, exclusivity scope. Legal + procurement review. Public bid notification at public universities." },
      { label: "Weeks 15-22", title: "Bidder questions + proposal submission", description: "Public Q&A period; pre-bid conference at large RFPs; site visits for shortlisted bidders. Proposals submitted with technical, commercial, sustainability, accessibility, supplier diversity sections." },
      { label: "Weeks 23-28", title: "Evaluation + interviews + reference checks", description: "Weighted scoring across criteria. Interview shortlisted bidders. Reference checks at same-segment higher-ed institutions. Best-and-final-offer round if applicable." },
      { label: "Weeks 29-34", title: "Award + contract negotiation", description: "Award notification. Contract negotiation on performance metrics, QBR cadence, sustainability reporting, exit clauses. Signing + insurance + supplier diversity verification." },
      { label: "Weeks 35-52", title: "Phased implementation + governance", description: "Phased rollout (residence halls first typically). Campus card integration testing. ADA accessibility verification. STARS reporting integration. QBR at 90/180/365 days." },
    ],
  }),
  comparisonTable({
    heading: "University vending RFP evaluation criteria — typical weighting",
    sub: "Weight distribution varies by institutional priorities. Sustainability-leading and accessibility-leading universities push weight toward those criteria.",
    headers: ["Criterion", "Typical weight", "Sustainability-leading weight", "What evidence to demand"],
    rows: [
      ["Commission structure + revenue model", "15-25%", "10-15%", "Detailed commission schedule by placement category; minimum guarantees"],
      ["Service capability + uptime", "15-20%", "10-15%", "Service-hour commitments; uptime SLAs; complaint resolution timelines"],
      ["AI cooler + smart platform capability", "10-15%", "10-15%", "Platform tier + deployment count; same-segment higher-ed references"],
      ["Sustainability + STARS reporting", "10-15%", "20-25%", "ENERGY STAR coverage %; low-GWP refrigerant share; STARS-aligned quarterly reporting"],
      ["Accessibility (ADA + Section 508)", "5-10%", "10-15%", "ADA reach-range compliance; tactile + audio interface; Section 508 digital accessibility"],
      ["Campus card integration", "5-10%", "5-10%", "Blackboard Transact / CBORD / Atrium / Transact Campus deployment evidence"],
      ["Supplier diversity", "5-15%", "10-15%", "MBE/WBE/DBE certification; sub-tier diversity at supplier and product levels"],
      ["References + past performance", "10-15%", "10-15%", "Same-segment higher-ed references; reference letters; case studies"],
      ["Healthy + dietary inclusive options", "5-10%", "10-15%", "FDA-labeled SKUs; allergen-friendly; Smart Snacks-aligned where applicable"],
    ],
  }),
  decisionTree({
    heading: "Should our university run a competitive RFP or extend the incumbent?",
    question: "Has the incumbent operator delivered against commission + service + sustainability + accessibility + campus card integration commitments — verified through QBRs and stakeholder feedback?",
    yesBranch: {
      title: "Yes — extend the incumbent (with refreshed terms)",
      description: "If incumbent has documented performance against commission + service + sustainability + accessibility + campus card commitments, contract extension with refreshed terms (updated sustainability reporting, AI cooler addition, supplier diversity targets) is often the lower-risk path. Build refresh into renewal negotiation; verify market commission rates via informal benchmarking with peer institutions before signing.",
      finalTone: "go",
      finalLabel: "Negotiate renewal with refreshed terms",
    },
    noBranch: {
      title: "No — run a competitive RFP",
      description: "Gaps in commission, service, sustainability, accessibility, or campus card integration justify competitive RFP. Modern operators (Canteen, Five Star, Aramark Refreshment Services, regional specialty operators with AI cooler capability) bid aggressively for higher-ed accounts. RFP refreshes commission economics, modernizes platform mix, and aligns sustainability + accessibility to current institutional priorities. 6-12 month process at large universities.",
      finalTone: "stop",
      finalLabel: "Launch competitive RFP",
    },
  }),
  specList({
    heading: "University vending procurement specifications",
    items: [
      { label: "Public-university procurement code compliance", value: "State procurement codes govern public-university bids (e.g., Texas Government Code Chapter 2155, California Public Contract Code, New York General Municipal Law Section 103). Requirements typically include public notification (often 30+ days), open Q&A, sealed bid or competitive proposal, bid bond at large procurements, public award notification. Private universities follow institutional purchasing policy — typically less prescriptive but still structured." },
      { label: "Stakeholder roster + alignment cadence", value: "Auxiliary services (lead), dining services (food coordination), residence life (residence hall placement), sustainability office (STARS reporting requirements), accessibility coordinator (ADA + Section 508), campus card office (integration requirements), procurement (process owner), legal (contract review), risk management (insurance + liability), supplier diversity office where applicable. Cadence: kickoff + biweekly during RFP development + weekly during evaluation." },
      { label: "Scope definition — exclusivity and carve-outs", value: "Most university vending contracts are exclusive across machines and AI coolers in covered facilities. Carve-outs: campus dining halls (separate dining contract), retail stores (separate retail contract), athletics concessions (separate athletics contract), branded coffee (e.g., Starbucks license — separate). Specify carve-outs explicitly in RFP scope to avoid post-contract disputes." },
      { label: "Term length + renewal structure", value: "Typical primary term 3-5 years with two 1-2 year renewal options at university discretion. Operator capital investment economics support 5+ year terms; institutional risk management often prefers 3 years with renewals. Build performance triggers for non-renewal: uptime below threshold, complaint resolution failure, sustainability reporting gap, campus card integration failure." },
      { label: "Performance metrics + SLA structure", value: "Uptime: 95-98% machine availability typical SLA. Restock cadence: appropriate to placement velocity (high-volume daily, medium 2-3x weekly, low weekly). Complaint resolution: 24-48 hour first response, 7-day full resolution typical. Refund: same-day or next-day at campus card placements. QBR cadence: quarterly minimum at large universities. Penalty structure for SLA misses (typically commission deduction; rarely contract termination)." },
      { label: "Sustainability + STARS reporting requirements", value: "AASHE STARS (Sustainability Tracking, Assessment & Rating System) data feeds: kWh per machine, ENERGY STAR coverage %, low-GWP refrigerant share (R-290 propane, R-744 CO2 vs legacy R-134a), recycling capture rate, packaging mix (aluminum + glass + certified compostable share), supplier sustainability certifications (Fair Trade USA, Rainforest Alliance, USDA Organic %). Quarterly reporting required; integrate with STARS submission cycle." },
      { label: "Accessibility — ADA + Section 508 requirements", value: "ADA 2010 Standards Section 309 reach ranges: 15-48 inch reach for forward approach, 15-54 inch for side approach. Operable parts compliance for controls. Section 508 digital accessibility for touchscreen interfaces (audio output, screen-reader compatibility, contrast). Audit existing fleet for ADA compliance at RFP stage; require new equipment compliance + retrofit schedule for non-compliant placements." },
      { label: "Campus card integration scope", value: "Major higher-ed platforms: Blackboard Transact, CBORD, Atrium, Transact Campus. Integration requirements: closed-loop debit (student campus card balance), declining balance plans, meal-plan equivalency at applicable placements, encryption + data privacy per platform spec. Operator must demonstrate same-platform deployment evidence at peer institutions; specify integration testing in implementation phase." },
      { label: "Data privacy + FERPA-adjacent considerations", value: "Campus card transaction data is FERPA-adjacent at student-identified transactions. Biometric data (rare in vending; some AI cooler authentication) carries Illinois BIPA, Texas, Washington biometric law exposure where students from those states are present. Build data handling, retention, third-party sharing prohibitions, and breach notification into contract. Coordinate with institutional data privacy office." },
      { label: "Supplier diversity goals", value: "Many universities set MBE/WBE/DBE goals (5-20% of vendor spend typical). Operator can meet at multiple levels: certified-diverse operator entity, certified-diverse subcontractor share, certified-diverse product manufacturer share. Specify level + measurement in RFP; require quarterly reporting on supplier diversity spend." },
      { label: "Insurance + liability requirements", value: "General liability $2M per occurrence / $4M aggregate typical at large universities. Product liability coverage required. Auto coverage for service vehicles. Workers' compensation per state statute. Cyber/data privacy coverage at AI cooler placements with campus card integration. Indemnification clause covering product liability, intellectual property, data breach." },
    ],
  }),
  caseStudy({
    tag: "RFP scenario",
    title: "Large research university vending + AI cooler RFP — capability illustration",
    context: "Illustrative scenario for a 30,000-student research university running a multi-platform auxiliary services RFP covering snack, beverage, AI cooler, and micro-market placements across 60+ buildings. Bobby Mac is equipped to support similar engagements; this is not a claim of work performed at any named institution.",
    meta: [
      { label: "Population", value: "30,000 students + 8,000 staff" },
      { label: "Placement count", value: "140 vending machines + 12 AI cooler walls + 3 micro-markets" },
      { label: "RFP timeline", value: "9 months end-to-end" },
      { label: "Stakeholder count", value: "11 across procurement + auxiliary + sustainability + accessibility + campus card" },
    ],
    results: [
      { number: "9 mo", label: "RFP-to-implementation timeline" },
      { number: "18%", label: "weighted commission rate" },
      { number: "100%", label: "ADA + Section 508 compliance at new equipment" },
      { number: "Quarterly", label: "STARS-aligned sustainability reporting" },
    ],
  }),
  tipCards({
    heading: "Seven university vending procurement mistakes",
    sub: "All preventable with disciplined stakeholder alignment, evaluation criteria weighting, and contract scope.",
    items: [
      { title: "Treating it as a generic vending bid", body: "Modern university bids span snack + beverage + AI cooler + micro-market. Generic vending-only scope misses AI cooler capability and produces post-award scope creep. Build platform spectrum into RFP scope at outset." },
      { title: "Skipping stakeholder alignment", body: "Sustainability office, accessibility coordinator, campus card office, and supplier diversity office each have requirements affecting evaluation criteria. Skipping alignment produces evaluation criteria that miss institutional priorities. Convene stakeholders before RFP draft." },
      { title: "Weighting commission too heavily", body: "Commission rate is one criterion; modern universities weight it at 15-25% with sustainability + accessibility + service + AI capability collectively at 50-70%. Over-weighting commission rewards aggressive bidders who can't deliver on sustainability + accessibility + service." },
      { title: "Skipping reference checks at same-segment higher-ed", body: "Bidder claims of higher-ed capability without same-segment references (large research, medium liberal arts, large public, etc.) produce capability gaps post-award. Demand three same-segment references; conduct structured reference interviews." },
      { title: "Ambiguous exclusivity scope", body: "Vending exclusivity covering campus dining, retail stores, athletics concessions, or branded coffee produces post-contract disputes. Define carve-outs explicitly: dining halls, retail, athletics, branded coffee licenses are typically separate." },
      { title: "Lax SLA structure", body: "Uptime, restock cadence, complaint resolution, refund, and QBR commitments without measurement produce drift. Build SLAs with penalty structure (commission deduction for misses) and reporting cadence. Modern operators welcome SLA structure; legacy operators sometimes resist." },
      { title: "Ignoring contract exit + transition clauses", body: "End-of-contract transition (equipment removal, data export, campus card integration handoff) takes 60-120 days. Bake transition obligations into contract: timeline, data handoff, equipment removal at no cost, transition cooperation with successor operator." },
    ],
  }),
  keyTakeaways({
    takeaways: [
      "Seven-phase RFP procurement: needs assessment, stakeholder alignment, RFP development, bidder qualification, evaluation, award, implementation.",
      "Modern bids span snack, beverage, AI cooler, and micro-market platforms in a single auxiliary services contract.",
      "Sustainability, accessibility, and campus card integration drive 30-50% of evaluation weight at modern universities.",
      "Term length typically 3-5 years with renewal options; build performance triggers for non-renewal.",
      "Build SLAs with measurement and penalty structure; modern operators welcome accountability.",
    ],
  }),
  inlineCta({
    text: "Want the university vending procurement framework (RFP template + evaluation rubric + contract terms)?",
    buttonLabel: "Get the procurement framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support university vending procurement across needs assessment, stakeholder alignment, RFP development, evaluation rubric design, contract negotiation, and implementation governance — including AI cooler scope, STARS-aligned sustainability requirements, ADA + Section 508 accessibility, Blackboard / CBORD / Atrium / Transact campus card integration, supplier diversity, and FERPA-adjacent data privacy. The framework reflects operator-side bid experience plus higher-education procurement office feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does a university vending RFP take?", answer: "6-12 months end-to-end at large research universities (needs assessment through phased implementation). Compress to 4-6 months at smaller institutions. State procurement code at public universities adds public notification timing requirements (often 30+ day notice).", audience: "Procurement" },
      { question: "What term length should we negotiate?", answer: "Primary term 3-5 years with two 1-2 year renewal options at university discretion. Operator capital investment economics support 5+ year terms; institutional risk management often prefers 3 years with renewals. Build performance triggers for non-renewal.", audience: "Procurement" },
      { question: "Should AI vending coolers be in our RFP?", answer: "Yes if you have any 200-500+ daily user placements (residence halls, student centers, libraries, athletic facilities). Modern bids span snack + beverage + AI cooler + micro-market. Demand same-segment higher-ed deployment evidence; require Blackboard Transact / CBORD / Atrium / Transact Campus integration capability.", audience: "Auxiliary Services" },
      { question: "How do we weight evaluation criteria?", audience: "Procurement", answer: "Typical: commission 15-25%, service 15-20%, AI cooler capability 10-15%, sustainability 10-15%, accessibility 5-10%, campus card integration 5-10%, supplier diversity 5-15%, references 10-15%. Sustainability-leading and accessibility-leading universities push more weight to those criteria." },
      { question: "What sustainability reporting should we require?", answer: "AASHE STARS-aligned quarterly reporting: kWh per machine, ENERGY STAR coverage %, low-GWP refrigerant share, recycling capture, packaging mix, supplier sustainability certifications (Fair Trade USA, Rainforest Alliance, USDA Organic %). Integrate with your STARS submission cycle.", audience: "Sustainability Office" },
      { question: "What about ADA + Section 508 compliance?", answer: "ADA 2010 Standards Section 309 reach ranges (15-48 inch forward, 15-54 inch side). Operable parts compliance. Section 508 digital accessibility for touchscreens (audio, screen-reader, contrast). Audit existing fleet at RFP stage; require new equipment compliance + retrofit schedule for non-compliant placements.", audience: "Accessibility Coordinator" },
      { question: "Should we negotiate exclusivity?", answer: "Most contracts are exclusive across machines and AI coolers in covered facilities. Carve-outs (dining halls, retail stores, athletics concessions, branded coffee licenses) are typically separate. Define carve-outs explicitly in RFP scope to avoid post-contract disputes.", audience: "Legal" },
      { question: "How do we measure supplier diversity?", answer: "Operator can meet diversity goals at multiple levels: certified-diverse operator entity, certified-diverse subcontractor share, certified-diverse product manufacturer share. Specify level + measurement in RFP; require quarterly reporting on supplier diversity spend.", audience: "Supplier Diversity" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AASHE STARS — higher-education sustainability framework", url: "https://stars.aashe.org/", note: "Sustainability Tracking, Assessment & Rating System for higher education" },
      { label: "ADA 2010 Standards Section 309 — operable parts", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Federal accessibility standards governing vending operable parts and reach ranges" },
      { label: "Section 508 — digital accessibility for touchscreen interfaces", url: "https://www.section508.gov/", note: "Federal digital accessibility standards applicable to vending touchscreens" },
      { label: "Transact Campus — major higher-ed campus card platform", url: "https://www.transactcampus.com/", note: "Closed-loop campus card platform with vending integration" },
      { label: "FERPA — Family Educational Rights and Privacy Act", url: "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html", note: "Federal student-data privacy law applicable to campus card transaction data" },
    ],
  }),
  relatedGuides({
    heading: "Related university vending and procurement guides",
    items: [
      { eyebrow: "Sister guide", title: "AI vending coolers in schools", description: "Higher-education and K-12 AI cooler fit, Smart Snacks rule, campus card integration.", href: "/ai-vending-coolers/ai-vending-coolers-in-schools" },
      { eyebrow: "Hub", title: "All AI vending cooler guides", description: "Smart coolers, sensor fusion, sustainability, and operator patterns.", href: "/ai-vending-coolers" },
      { eyebrow: "Operations", title: "University vending maintenance guide", description: "Service cadence, uptime SLAs, and post-implementation governance.", href: "/vending-for-schools/university-vending-maintenance-guide" },
    ],
  }),
]);
process.exit(0);
