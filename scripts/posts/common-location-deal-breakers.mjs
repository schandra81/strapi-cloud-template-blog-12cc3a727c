import { seedPost, tldr, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("common-location-deal-breakers", [
  tldr({
    heading: "What are common deal breakers when evaluating a vending location?",
    paragraph:
      "Deal breakers are placement characteristics that make a vending contract unprofitable, unsafe, or operationally infeasible — saying no protects 1-3 year contract economics. Twelve common deal breakers: (1) traffic under threshold (< 50 daily users for combo vending; <200 for micro-markets) producing under $300 monthly revenue; (2) no electrical capacity (15A shared circuit only, no 20A available, no dedicated outlet within 6 feet of placement zone); (3) split exclusivity already granted to incumbent operator on vending + micro-market or AI cooler wall; (4) commission expectations 40%+ at office or 30%+ at small apartment (unprofitable at typical placement economics); (5) hidden site fees beyond commission (annual lump sum, per-machine monthly, processing pass-through not in RFP); (6) decision-maker without signing authority + prospect won't escalate; (7) inadequate cellular signal for telemetry with no booster solution (remote / outdoor / basement); (8) safety hazards at proposed placement zone (egress path obstruction, ADA route blockage, fire-code clearance violation); (9) prospect history of vendor turnover (3+ operators in 5 years signals underlying problem); (10) prospect payment delinquency on prior services (commission delay risk); (11) compliance gaps the operator can't meet (school SB / state nutrition standards beyond operator capability, Randolph-Sheppard preference at federal sites, TJC at hospital); (12) contract terms with no performance-failure exit (3-year lock with no SLA-breach escape). Walking away from deal breakers preserves operator economics + reputation; restructuring to address the deal breaker is the alternative.",
    bullets: [
      { emphasis: "Twelve deal-breaker categories: traffic + electrical + exclusivity + commission + fees + authority + signal + safety + history + payment + compliance + contract:",
        text: "Walk-away signals at pre-acceptance diligence. Saying no protects 1-3 year contract economics." },
      { emphasis: "Most common: traffic + electrical + hidden fees + commission expectations:",
        text: "Account for 65-70% of pre-acceptance walk-aways in operator post-mortems. Verify each at site walk before proposal." },
      { emphasis: "Restructure is the alternative:",
        text: "Some deal breakers (electrical install, commission reset, exclusivity grant, fee removal) can be restructured at negotiation. Either restructure or walk away — don't sign through a deal breaker.", },
    ],
  }),
  specList({
    heading: "Twelve vending location deal breakers",
    items: [
      { label: "1. Traffic under threshold", value: "<50 daily users for standard combo vending. <200 for micro-markets / AI cooler walls. Below threshold, operator economics don't work — under $300 monthly revenue per machine, 18-30 month payback exceeds standard 1-3 year contract. Verify employee count, resident count, daily visitor count against published benchmarks before accepting." },
      { label: "2. No electrical capacity", value: "15A shared circuit only with no dedicated 20A available, no outlet within 6 feet of placement zone, NEC violation requirements (extension cords prohibited, GFCI absent where required). Refrigerated vending requires dedicated 20A. AI cooler walls require dedicated 20A + Ethernet. Electrical install $150-2K depending on scope; verify prospect will fund or walk away." },
      { label: "3. Split exclusivity already granted", value: "Incumbent operator retains exclusive vending rights while new operator handles micro-market or AI cooler wall (or vice versa). Splits compete for same audience; operator earns less; service complexity increases. Get full exclusivity (vending + micro-market + AI cooler wall) or walk away — split-exclusivity contracts produce poor economics 80%+ of the time." },
      { label: "4. Unrealistic commission expectations", value: "40%+ at office, 30%+ at small apartment, 50%+ at small construction trailer cluster — unprofitable at typical placement economics (operator margin 12-20% net). Reset expectations with revenue projection + cost transparency, or walk away. Aggressive commission combined with low traffic produces operator-loss contracts." },
      { label: "5. Hidden site fees beyond commission", value: "Annual lump-sum site fee ($1-5K), per-machine monthly fee ($25-150), processing pass-through ($0-0.45 per transaction) not disclosed in RFP. Common at retail / mall / airport but should be transparent. Hidden fees discovered at negotiation signal opaque prospect — restructure to remove or walk away." },
      { label: "6. Decision-maker without signing authority", value: "Facility manager needs HR + finance approval, property manager needs owner approval, auxiliary services needs procurement approval — and prospect won't escalate. Pitching to non-authorized stakeholders produces wasted 4-12 week sales cycle + lost bids. Verify authority before proposal development." },
      { label: "7. Inadequate cellular signal for telemetry", value: "Remote / outdoor / basement / underground placements may have weak cellular signal (RSSI < -100 dBm). Telemetry requires connectivity for sales reporting, refund auto-trigger, payment auth. Cellular booster $200-1,500 solves most cases; if prospect won't fund + booster doesn't work, telemetry-blind placement isn't viable. Walk away." },
      { label: "8. Safety hazards at proposed zone", value: "Egress path obstruction (fire-code 36-44 inch clearance violation), ADA route blockage (36-inch minimum corridor), fire-code clearance from sprinkler / exit / panel violation, structural floor load inadequate for 600-800 lb loaded machine. Reposition or walk away — safety hazards produce liability + occupancy permit risk." },
      { label: "9. Prospect vendor turnover history", value: "3+ vending operators in 5 years signals underlying problem — low traffic actual vs claimed, payment delays from prospect, access issues, security incidents, planogram interference. Reference-check current and prior operators; if turnover is prospect-driven (not operator-driven), walk away. Stable placements with single long-term vendor signal quality." },
      { label: "10. Prospect payment delinquency", value: "Prior services (cleaning, food, landscaping) report payment delays 60+ days. Commission flows host → operator at host-paid models, or operator → host at commission models. Commission-due-from-host structures particularly exposed to host delinquency. Credit-check or walk away. D&B / Experian commercial credit pull $50-150." },
      { label: "11. Compliance gaps operator can't meet", value: "School SB / state nutrition standards beyond operator planogram capability (USDA Smart Snacks, state-specific calorie / fat / sugar limits). Randolph-Sheppard preference at federal sites (blind vendor priority). TJC at hospital (allergen, calorie disclosure, fresh-food handling). VPAT requirement at federal civilian. Walk away if operator can't meet — compliance breach produces contract termination + fines." },
      { label: "12. Contract with no performance-failure exit", value: "3-year lock with no SLA-breach escape clause, no underperformance termination, no relocation rights, automatic renewal absent 90-day notice. Insist on performance-failure exit clauses; contracts with no escape lock operator into unprofitable placements for 3+ years. Restructure at negotiation or walk away." },
    ],
  }),
  tipCards({
    heading: "Five deal-breaker handling patterns",
    sub: "Restructuring beats walking away when possible; walking away beats signing through a deal breaker.",
    items: [
      { title: "Restructure before walking away", body: "Several deal breakers — electrical install funding, commission reset, exclusivity grant, fee removal, performance-failure exit clause — can be restructured at negotiation. Propose specific changes; let prospect choose between restructure and losing the operator. Restructured deals often produce better long-term economics than original terms." },
      { title: "Document the walk-away rationale", body: "Maintain deal-breaker log per prospect — traffic verification, electrical assessment, exclusivity check, commission discussion, fee disclosure, authority verification. Documentation supports future re-engagement if prospect addresses issues. Also informs sales team filtering — don't re-pursue prospects with unaddressed deal breakers." },
      { title: "Reference-check current and prior operators", body: "Talk to current operator (if transitioning) and prior operators (if accessible). Why did they leave? Was it operator-driven (capability gap, contract dispute) or prospect-driven (payment delay, traffic shortfall, access issues, security)? Prospect-driven turnover is a deal breaker; operator-driven turnover may be opportunity." },
      { title: "Verify electrical at site walk, not over phone", body: "Most electrical deal breakers surface only at physical site walk. Prospect description ('we have plenty of outlets') often optimistic. Walk the placement zone with multimeter or check panel — circuit type, dedicated vs shared, distance to placement, GFCI presence. Don't sign without verifying electrical." },
      { title: "Use deal-breaker discipline to qualify prospects", body: "Pre-qualification questions screen out 60-75% of deal-breaker prospects before site walk: traffic, electrical, exclusivity, commission expectations, decision authority. Saves 4-12 weeks per disqualified prospect. Modern operators run structured pre-qualification; legacy operators pursue every lead." },
    ],
  }),
  decisionTree({
    heading: "Should you accept this location given the deal breakers identified?",
    question: "Does the placement carry any unaddressed deal breaker across the 12 categories (traffic, electrical, exclusivity, commission, fees, authority, signal, safety, turnover, payment, compliance, exit clause)?",
    yesBranch: {
      title: "Yes — deal breakers identified, walk away or restructure",
      description: "Don't sign through deal breakers; 1-3 year contract economics at stake. Either restructure to address each deal breaker (electrical install funding, commission reset, exclusivity grant, fee removal, performance-failure exit) or walk away. Document deal breakers per prospect; informs future re-engagement.",
      finalTone: "stop",
      finalLabel: "Walk away or restructure",
    },
    noBranch: {
      title: "No — placement clears diligence, proceed to proposal",
      description: "Placement clears critical diligence — traffic verified, electrical adequate, exclusivity full, commission realistic, fees transparent, authority verified, signal adequate, no safety hazards, stable vendor history, payment current, compliance achievable, contract has performance-failure exit. Develop proposal with revenue projection, commission structure, service SLA, sustainability spec.",
      finalTone: "go",
      finalLabel: "Proceed to proposal",
    },
  }),
  inlineCta({
    text: "Want the deal-breaker checklist (12 walk-away signals + restructuring patterns)?",
    buttonLabel: "Get the deal-breaker checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported operator pre-acceptance diligence across office, apartment, hospital, campus, construction, retail, airport, and government placements — including deal-breaker identification, restructuring patterns, and walk-away decisions. The 12-category framework reflects operator-side data on contracts that produced sub-economic outcomes when deal breakers were signed through.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What are common vending location deal breakers?", answer: "Twelve categories: traffic under threshold, no electrical capacity, split exclusivity, unrealistic commission expectations, hidden site fees, decision-maker without authority, inadequate cellular signal, safety hazards, vendor turnover history, payment delinquency, compliance gaps, and contracts with no performance-failure exit. Saying no protects 1-3 year contract economics.", audience: "Operators" },
      { question: "Should we always walk away from deal breakers?", answer: "Restructure first when possible. Electrical install funding, commission reset, exclusivity grant, fee removal, and performance-failure exit clauses can often be restructured at negotiation. Restructured deals frequently produce better long-term economics than original terms. Walk away only when prospect won't restructure.", audience: "Operators" },
      { question: "What's the most common deal breaker?", answer: "Traffic shortfall, electrical inadequacy, hidden fees, and unrealistic commission expectations together account for 65-70% of pre-acceptance walk-aways in operator post-mortems. Verify each at site walk — prospect descriptions over phone are often optimistic. Don't sign without physical verification.", audience: "Operators" },
      { question: "How do we verify electrical capacity?", answer: "Site walk with prospect's facilities lead. Circuit type (15A vs 20A), dedicated vs shared, distance to placement zone, GFCI presence, panel capacity for upgrade. Multimeter or panel inspection. Don't rely on 'we have plenty of outlets' — most placements have shared 15A; refrigerated vending requires dedicated 20A.", audience: "Operators" },
      { question: "What if exclusivity is already split?", answer: "Walk away or get full exclusivity. Split-exclusivity contracts (incumbent operator on vending + new operator on micro-market or AI cooler wall) produce poor economics 80%+ of the time. Operators compete for same audience; per-operator revenue drops; service complexity increases. Insist on full exclusivity.", audience: "Operators" },
      { question: "How do we handle unrealistic commission expectations?", answer: "Present revenue projection + operator cost transparency. Office / apartment / campus 10-15% typical commission. Retail / airport 15-25%. Institutional 20-35%. 40%+ at office or 30%+ at small apartment is unprofitable at standard placement economics. Reset expectations with data or walk away.", audience: "Operators" },
      { question: "Should we credit-check prospects?", answer: "Yes at high-revenue placements or commission-due-from-host structures. D&B or Experian commercial credit pull $50-150. Prospect payment delinquency on prior services is a deal breaker. Commission-flow exposure should match prospect credit profile — small commission flow at marginal credit; large commission flow only at strong credit.", audience: "Operators" },
      { question: "What about contracts with no performance-failure exit?", answer: "Restructure at negotiation. Insist on SLA-breach termination, multi-quarter underperformance exit, relocation rights, automatic-renewal opt-out. 3-year lock with no escape is a deal breaker — operators get stuck in unprofitable placements. Walk away if prospect won't grant performance-failure exit.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — operator contract practice", url: "https://www.namanow.org/", note: "Industry trade association covering operator pre-acceptance diligence standards" },
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing commercial vending outlet + circuit requirements" },
      { label: "ADA — accessibility deal-breaker standards", url: "https://www.ada.gov/", note: "Federal accessibility requirements affecting vending placement deal breakers" },
      { label: "FTC — Business Opportunity Rule", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing locator-supplied placement disclosure" },
      { label: "Vending Times — pre-acceptance diligence coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator walk-away signals and restructuring patterns" },
    ],
  }),
  relatedGuides({
    heading: "Related operator diligence and contract guides",
    items: [
      { eyebrow: "Sister guide", title: "Questions to ask before accepting a location", description: "Pre-acceptance diligence — traffic + electrical + compliance + commission + walk-away signals.", href: "/vending-machine-locators/questions-to-ask-before-accepting-a-location" },
      { eyebrow: "Operations", title: "How to get locations if you're new to vending", description: "Lead generation, qualification, and operator scaling for new operators.", href: "/vending-machine-locators/how-to-get-locations-if-youre-new-to-vending" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Lead generation, pre-acceptance diligence, proposal, negotiation, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
