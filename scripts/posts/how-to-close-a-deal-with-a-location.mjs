import { seedPost, tldr, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-close-a-deal-with-a-location", [
  tldr({
    heading: "How do operators close a vending deal with a qualified location?",
    paragraph:
      "Closing a vending deal with a qualified location follows a seven-step sequence from proposal acceptance to signed contract + install kickoff. (1) Acceptance signal recognition — explicit ('we want to move forward') or implicit (multiple-stakeholder meeting requested, contract redlines circulating, install schedule discussion); confirm before proceeding. (2) Final terms negotiation — commission rate adjustments, fee categories, exclusivity scope, performance-failure exit clauses, sustainability spec, equipment refresh cycle, reporting cadence; bring legal review for institutional / federal / airport contracts. (3) Contract preparation — populate operator template with negotiated terms, attach site map exhibit, insurance COI, VPAT documentation, ServSafe records, sample monthly statement; review with operator counsel. (4) Stakeholder alignment — sign-off from all required decision-makers (facility manager + HR + finance at office; property manager + owner at apartment; auxiliary services + procurement + risk at hospital; CFO + procurement at federal); verify authority before signature meeting. (5) Signature meeting — review final terms, address any final concerns, exchange signed contracts, confirm install kickoff date; modern operators close 70-85% of qualified prospects at signature meeting (compared to 30-40% legacy close rate). (6) Install kickoff — site survey scheduled within 7-14 days, electrical work coordinated, equipment procurement initiated, planogram finalized, payment systems provisioned, telemetry activated. (7) Post-signature relationship management — first business review at 30-60 days post-install, quarterly business reviews thereafter. Modern operators close faster + cleaner via structured process; legacy operators drift on informal handshake commitments that produce disputes.",
    bullets: [
      { emphasis: "Seven-step close sequence from acceptance signal to install kickoff:",
        text: "Structured close process. Modern operators close 70-85% of qualified prospects; legacy 30-40%." },
      { emphasis: "Final terms negotiation is the leverage point:",
        text: "Commission + fees + exclusivity + performance-failure exit + sustainability spec. Don't sign without each addressed. Legal review at institutional / federal / airport." },
      { emphasis: "Stakeholder alignment prevents post-signature disputes:",
        text: "All required decision-makers signed off before signature meeting. Office + HR + finance, property manager + owner, auxiliary + procurement + risk. Verify authority.", },
    ],
  }),
  timeline({
    heading: "How to close a vending deal — seven-step process",
    sub: "From acceptance signal to install kickoff. 2-6 week typical close timeline depending on stakeholder complexity.",
    howToName: "Close a vending deal with a qualified location",
    totalTime: "2-6 weeks typical",
    steps: [
      { title: "Step 1: Recognize the acceptance signal", description: "Explicit acceptance ('we want to move forward') or implicit (multi-stakeholder meeting requested, contract redlines circulating, install schedule discussion). Confirm before proceeding — premature close attempts produce stalled deals.", duration: "Week 1" },
      { title: "Step 2: Negotiate final terms", description: "Commission rate adjustments, fee categories (relocation, termination, specialty equipment, processing), exclusivity scope, performance-failure exit clauses, sustainability spec, equipment refresh cycle, reporting cadence. Bring legal review for institutional / federal / airport contracts. Don't sign without each addressed.", duration: "Week 1-2" },
      { title: "Step 3: Prepare the contract", description: "Populate operator template with negotiated terms. Attach exhibits — site map, insurance COI, VPAT documentation, ServSafe records, sample monthly statement, sustainability data spec. Review with operator counsel + prospect counsel where applicable.", duration: "Week 2-3" },
      { title: "Step 4: Align all stakeholders", description: "Sign-off from required decision-makers — facility manager + HR + finance at office; property manager + owner at apartment; auxiliary services + procurement + risk at hospital; CFO + procurement at federal. Verify authority before signature meeting. Missing stakeholder = post-signature dispute.", duration: "Week 3-4" },
      { title: "Step 5: Conduct the signature meeting", description: "Review final terms with all signatories present, address any final concerns, exchange signed contracts, confirm install kickoff date, schedule first business review. Modern operators close 70-85% of qualified prospects at signature meeting via structured process; legacy operators close 30-40%.", duration: "Week 4-5" },
      { title: "Step 6: Kick off the install", description: "Site survey scheduled within 7-14 days of signature, electrical work coordinated with prospect facilities, equipment procurement initiated, planogram finalized with prospect input, payment systems provisioned (EMV + contactless + mobile-wallet + applicable cards), telemetry activated for monitoring.", duration: "Week 5-6" },
      { title: "Step 7: Set up post-signature relationship management", description: "First business review scheduled at 30-60 days post-install. Quarterly business reviews thereafter. Performance trends, feedback themes, planogram refinement, customer experience improvements. Modern operators build relationship management into contract; legacy operators don't structure.", duration: "Ongoing" },
    ],
  }),
  specList({
    heading: "Vending deal close specifications",
    items: [
      { label: "Acceptance signal types", value: "Explicit verbal or written ('we want to move forward', 'send the contract'), implicit via meeting requests (multi-stakeholder review meeting, install schedule discussion, equipment placement walk-through), contract redlines circulating. Recognize before close attempt; premature close attempts produce stalled deals. Don't push closure before signal." },
      { label: "Final terms scope", value: "Commission rate, fee categories (relocation, termination, specialty equipment capital, processing pass-through), exclusivity scope (full / channel / zone), performance-failure exit clauses (SLA breach, multi-quarter underperformance, relocation rights), sustainability spec (ENERGY STAR, low-GWP, recycling, packaging), equipment refresh cycle, reporting cadence, contract term + renewal options." },
      { label: "Legal review threshold", value: "Engage operator counsel for material contracts ($50K+ annual revenue, multi-year, multi-site). Engage prospect counsel where prospect requires. Specialty review (Randolph-Sheppard at federal, TJC at hospital, FERPA at education) at applicable placements. $3-8K legal fee per engagement is cheap insurance against contract regret." },
      { label: "Contract exhibits", value: "Site map defining exclusive territory + exception zones. Insurance COI with additional-insured endorsement. VPAT documentation at federal / public placements. ServSafe records for food-handling personnel. Sample monthly statement showing commission methodology. Sustainability data reporting spec. Equipment refresh schedule." },
      { label: "Stakeholder identification", value: "Office: facility manager + HR + finance approval typical. Apartment: property manager + owner. Hospital: auxiliary services + procurement + risk. Campus: housing director + business office + sustainability office. Federal: contracting officer + ADA / accessibility officer + sustainability officer. Construction: GC project manager + safety. Identify all stakeholders before signature meeting." },
      { label: "Signature meeting structure", value: "All signatories present (in-person or remote). Review final terms section by section. Address final concerns; small adjustments OK, material renegotiation triggers separate meeting. Exchange signed contracts (DocuSign or wet-signature). Confirm install kickoff date + first business review schedule. Avoid signature meeting without final terms locked." },
      { label: "Install kickoff timeline", value: "Site survey within 7-14 days of signature. Electrical work coordination (1-4 weeks depending on scope; verify at site survey). Equipment procurement (2-6 weeks; specialty equipment 4-12 weeks). Planogram finalization with prospect input. Payment systems provisioning. Telemetry activation. Total: 2-6 weeks signature to operational machine at standard placements." },
      { label: "Post-signature relationship cadence", value: "First business review at 30-60 days post-install with prospect facilities + operator account manager. Performance trends, feedback themes, planogram refinement, customer experience improvements. Quarterly business reviews thereafter. Annual contract review at year-end. Modern operators build into contract; legacy operators don't structure." },
      { label: "Close rate benchmarks", value: "Modern operators with structured close process: 70-85% close rate at signature meeting. Legacy operators with informal close: 30-40% close rate. Difference: stakeholder alignment, final terms transparency, contract preparation quality, legal review thresholding, signature meeting discipline. Track close rate per operator; benchmark against industry." },
    ],
  }),
  tipCards({
    heading: "Five vending deal close patterns",
    sub: "Modern operators with structured close achieve 70-85% close rate at signature meeting; legacy operators with informal process achieve 30-40%.",
    items: [
      { title: "Recognize the acceptance signal before pushing closure", body: "Premature close attempts produce stalled deals — prospect feels pressured, postpones decision, sometimes walks away. Recognize explicit signals (verbal / written acceptance) or implicit (multi-stakeholder review meeting, install schedule discussion). Wait for signal; structured close has cleaner conversion." },
      { title: "Lock final terms before signature meeting", body: "Material renegotiation at signature meeting derails close — extends timeline, signals operator unpreparedness, may surface stakeholder misalignment. Lock final terms before scheduling signature meeting. Small adjustments OK; material renegotiation requires separate meeting + restart of stakeholder alignment." },
      { title: "Verify all stakeholders before signature meeting", body: "Office: facility manager + HR + finance; apartment: property manager + owner; hospital: auxiliary services + procurement + risk. Missing stakeholder produces post-signature dispute when omitted party objects to terms. Ask 'who else needs to sign?' explicitly at terms finalization. Verify authority." },
      { title: "Engage legal review at material contracts", body: "Generic counsel misses vending-specific provisions (commission methodology, fee categories, SLA, exclusivity, termination, transfer). Engage operator counsel for material contracts ($50K+ annual, multi-year, multi-site). Engage specialty counsel for institutional / federal / airport. $3-8K legal fee is cheap insurance against long-term regret." },
      { title: "Set up post-signature relationship management at signature", body: "Build first business review (30-60 days post-install) + quarterly business review cadence into contract at signature. Modern operators structure; legacy operators don't. Without structured cadence, performance issues drift, planogram refinement lags, sustainability reporting goes unbuilt, customer feedback unaddressed." },
    ],
  }),
  inlineCta({
    text: "Want the close framework (signal + terms + contract + stakeholder + signature + install + relationship)?",
    buttonLabel: "Get the close framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending deal closes across office, apartment, hospital, campus, airport, warehouse, construction, retail, library, government, and clinic placements — including acceptance signal recognition, final terms negotiation, stakeholder alignment, signature meeting structure, install kickoff coordination, and post-signature relationship management. The close-rate benchmarks reflect operator-side data on structured vs informal close patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do operators close a vending deal with a qualified location?", answer: "Seven-step process: recognize acceptance signal, negotiate final terms (commission + fees + exclusivity + performance-failure exit + sustainability), prepare contract with exhibits, align all stakeholders, conduct signature meeting, kick off install, set up post-signature relationship management. Modern operators close 70-85% at signature meeting; legacy 30-40%.", audience: "Operators" },
      { question: "How long does the close process take?", answer: "2-6 weeks typical from acceptance signal to install kickoff. Final terms negotiation 1-2 weeks. Contract preparation + legal review 1-2 weeks. Stakeholder alignment 1-2 weeks. Signature meeting + install kickoff 1 week. Federal / institutional placements 4-12 weeks due to compliance review + procurement process.", audience: "Operators" },
      { question: "What's an acceptance signal?", answer: "Explicit verbal or written ('we want to move forward', 'send the contract'). Implicit via meeting requests (multi-stakeholder review meeting, install schedule discussion, equipment placement walk-through). Contract redlines circulating. Recognize before close attempt; premature close attempts produce stalled deals.", audience: "Operators" },
      { question: "What final terms do we negotiate?", answer: "Commission rate, fee categories (relocation, termination, specialty equipment, processing), exclusivity scope (full / channel / zone), performance-failure exit clauses, sustainability spec (ENERGY STAR, low-GWP, recycling, packaging), equipment refresh cycle, reporting cadence, contract term + renewal options. Don't sign without each addressed.", audience: "Operators" },
      { question: "When should we engage legal counsel?", answer: "Material contracts ($50K+ annual revenue, multi-year, multi-site). Operator counsel reviews operator template + prospect redlines. Prospect counsel reviews where prospect requires. Specialty counsel for Randolph-Sheppard at federal, TJC at hospital, FERPA at education. $3-8K legal fee per engagement.", audience: "Operators" },
      { question: "How do we identify all stakeholders?", answer: "Office: facility manager + HR + finance approval typical. Apartment: property manager + owner. Hospital: auxiliary services + procurement + risk. Campus: housing director + business office + sustainability office. Federal: contracting officer + ADA officer + sustainability officer. Ask 'who else needs to sign?' explicitly at terms finalization.", audience: "Operators" },
      { question: "What goes wrong in a signature meeting?", answer: "Material renegotiation at signature meeting derails close. Missing stakeholder produces post-signature dispute. Final terms not locked produces decision postponement. Authority not verified produces signature without binding effect. Avoid signature meeting until final terms locked + all stakeholders aligned + authority verified.", audience: "Operators" },
      { question: "What's the install kickoff timeline?", answer: "Site survey within 7-14 days of signature. Electrical work coordination 1-4 weeks. Equipment procurement 2-6 weeks (specialty equipment 4-12 weeks). Planogram finalization + payment systems provisioning + telemetry activation. Total 2-6 weeks signature to operational machine at standard placements; longer at federal / specialty.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending contract and close practice", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator contract and close standards" },
      { label: "IFMA — facility management contract standards", url: "https://www.ifma.org/", note: "Facility management industry standards covering vendor signature and onboarding" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering amenity service contract close and signature" },
      { label: "ABA — American Bar Association contract resources", url: "https://www.americanbar.org/", note: "Legal counsel resources for vendor contract review and signature" },
      { label: "Vending Times — close rate and process coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending operator close patterns and benchmarks" },
    ],
  }),
  relatedGuides({
    heading: "Related close and contract guides",
    items: [
      { eyebrow: "Sister guide", title: "How to write a vending machine proposal", description: "Proposal structure, revenue projection, commission, service SLA, exit provisions.", href: "/vending-machine-locators/how-to-write-a-vending-machine-proposal" },
      { eyebrow: "Operations", title: "Questions to ask before accepting a location", description: "Pre-acceptance diligence — traffic + electrical + compliance + commission + walk-away signals.", href: "/vending-machine-locators/questions-to-ask-before-accepting-a-location" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Lead generation, diligence, proposal, negotiation, close, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
