import { seedPost, tldr, timeline, specList, comparisonTable, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-vending-locator-services-work", [
  tldr({
    heading: "How do vending locator services actually work?",
    paragraph:
      "Vending locator services act as a placement broker between operators (vending machine owners) and hosts (businesses, properties, facilities seeking vending). The standard process: (1) operator engages locator + pays placement fee ($300-$1,500 per placement secured); (2) locator runs cold outreach to qualifying hosts in operator's geography and machine type; (3) locator pitches host + secures verbal interest; (4) locator brokers introduction to operator; (5) operator conducts site walk + revenue projection + proposal; (6) host signs contract with operator (not locator); (7) operator installs machine + begins operations; (8) locator earns full fee at contract signing (typical) or split structure (fee at intro + balance at signing). Quality locators run transparent process with written satisfaction guarantee (30-90 day window), client references in operator's machine type, documented placement criteria, churn data shared, FTC Business Opportunity Rule compliance. Bad locator signals: vague guarantees, no references, opaque process, churn not disclosed, boiler-room cold calling that burns operator brand. Industry-typical paid placement churn 20-40% within 12 months. Hybrid pattern most common at scaling operators: paid locator for hard-to-reach segments + DIY cold calling for accessible segments.",
    bullets: [
      { emphasis: "Placement broker between operators and hosts — fee $300-$1,500 per placement:",
        text: "30-90 day satisfaction guarantee typical. Operator pays; host doesn't. Contract signed between operator and host, not locator." },
      { emphasis: "Process: outreach + pitch + intro + site walk + proposal + contract + install:",
        text: "Locator does outreach + pitch + intro. Operator does site walk + proposal + contract + install + ongoing operations. Locator earns fee at signing." },
      { emphasis: "Quality locators run transparent process; industry-typical 20-40% 12-month churn:",
        text: "Written guarantee + references + documented criteria + FTC compliance + churn data shared. Vet carefully; opaque process is a warning sign.", },
    ],
  }),
  timeline({
    heading: "Vending locator service process — step-by-step",
    sub: "Eight-step locator-operator-host process. Operator engages locator; locator brokers placement; operator runs site walk through contract.",
    howToName: "Engage and work with a vending locator service",
    totalTime: "30-90 days from operator engagement to signed contract typical",
    steps: [
      { title: "Operator engages locator", description: "Operator selects locator + signs locator agreement. Define geography (city / metro / state radius), machine type (snack + beverage, AI cooler wall, fresh food), placement-type targets (office, apartment, hospital, gym, etc.), placement fee structure, satisfaction guarantee terms. Pay setup fee where applicable.", duration: "1-2 weeks engagement + agreement signing" },
      { title: "Locator runs cold outreach to qualifying hosts", description: "Locator team runs cold calling + email + LinkedIn outreach to qualifying hosts in operator geography. Pitch script tuned to placement type. Operator brand represented in outreach; quality of pitch reflects on operator. 200-500 calls per placement secured industry typical at qualifying segments.", duration: "1-4 weeks depending on placement type" },
      { title: "Locator pitches host + secures verbal interest", description: "Locator pitches vending placement to qualifying host decision-maker (facility manager, property manager, GC, store manager, etc.). Brief introduction + value framing + 15-minute meeting request. Conversion at this stage 5-10% typical. Pitched but uninterested hosts skipped.", duration: "Variable; concurrent with outreach" },
      { title: "Locator brokers introduction to operator", description: "Host verbal interest → locator brokers introduction to operator. Locator provides host context: decision-maker, headcount / traffic, placement zone, current vending status, expected commission, expected contract length. Operator scheduling site walk within 5-7 days.", duration: "1-2 days from verbal interest" },
      { title: "Operator conducts site walk + evaluation", description: "Operator conducts site walk: confirm documented headcount / traffic, inspect proposed placement zone (electrical, accessibility, floor space), interview decision-maker, assess current vending status. Standard 9-step evaluation. Operator decides proposal / pass within 5-7 days.", duration: "2-5 hours site walk + evaluation" },
      { title: "Operator delivers proposal + negotiates contract", description: "Tailored proposal: telemetry-driven revenue projection, commission structure, service SLA, planogram approach, sustainability spec, contract length, exit provisions. Host reviews + may request changes. Negotiation 2-4 weeks. Conversion at this stage 40-60% typical.", duration: "2-4 weeks proposal review + negotiation" },
      { title: "Host signs contract with operator", description: "Contract signed between operator and host (not locator). Contract terms: commission, service SLA, length, exit. Locator earns fee at signing (or split structure with portion at intro + balance at signing). Operator initiates install scheduling.", duration: "1-2 weeks signing + locator fee payment" },
      { title: "Operator installs + begins operations", description: "Operator install crew handles delivery, setup, telemetry verification, planogram load. Modern operators set up telemetry + payment + initial planogram + accessibility check at install. First business review 30-60 days post-install. Locator role concludes at signing; operator owns ongoing relationship.", duration: "2-4 weeks install scheduling + execution" },
    ],
  }),
  specList({
    heading: "Vending locator service specifications",
    items: [
      { label: "Placement fee structure — $300-$1,500 per placement", value: "Standard fee per placement secured + signed. Mid-tier locators $300-$700 (accessible segments: apartments, small offices, gyms). Premium locators $1,000-$1,500 (hard-to-reach segments: corporate HQ, hospital systems, manufacturing, federal). Some locators offer split structure (fee at intro + balance at signing) or guarantee replacement at no fee within 30-90 days." },
      { label: "Satisfaction guarantee — 30-90 day window", value: "Written guarantee tied to placement quality criteria: foot traffic + decision-maker access + electrical / floor space confirmed + signed contract within window. Bad guarantees: 'placement' defined as introduction only, 30-day window excludes machine install delay, replacement clock starts immediately, guarantee voided if operator declines on any grounds. Negotiate clear definitions." },
      { label: "Geography + machine-type targeting", value: "Locator agreement defines geography (city / metro / state radius) + machine type (snack + beverage, AI cooler wall, fresh food, coffee, micro-market) + placement-type targets (office, apartment, hospital, gym, school, federal, etc.). Locator concentrates outreach on agreed targets; operator pays only for matched placements." },
      { label: "Documented placement criteria", value: "Quality locators publish placement criteria: minimum headcount / traffic + decision-maker access + electrical capacity + accessibility feasibility + commission range + contract length. Operator-host fit pre-filtered. Locators without documented criteria send unmatched leads; waste operator site-walk time + erode trust." },
      { label: "Client references — same machine type + geography", value: "Quality locators provide references from operators in your machine type + geography. 3-5 references typical. Pre-call references; verify lead quality + churn rate + locator process. Locators refusing to share references are red flag; walk away regardless of marketing." },
      { label: "Churn data disclosure", value: "Industry-typical paid placement 12-month churn 20-40%. Quality locators disclose their churn data + segment / placement-type breakdown. Operator builds churn into ROI calculation: $500 fee at 35% 12-month churn = effective fee $770 per surviving placement. Locators not disclosing churn are signal." },
      { label: "FTC Business Opportunity Rule compliance", value: "Federal FTC Business Opportunity Rule (16 CFR 437) covers business opportunities including vending locator services. Required disclosures + 7-day cooling-off + standard documentation. Quality locators comply; non-compliant locators expose operator to regulatory risk. Verify compliance at engagement." },
      { label: "Cold calling script + pitch transparency", value: "Operator brand represented in locator cold calling. Locator pitch quality + tone + truthfulness reflects on operator. Quality locators share cold calling script + pitch framework with operator; operator can refine. Locators refusing to share script burn operator brand through bad pitches." },
      { label: "Quarterly performance reporting", value: "Quality locators provide quarterly reports: placements secured, conversion rate at each stage, churn rate within window, segment / placement-type breakdown, geography breakdown. Operator can evaluate locator ROI + decide renewal. Modern locators report; legacy locators don't.", },
    ],
  }),
  comparisonTable({
    heading: "Vending locator service — quality signals comparison",
    sub: "Good locator vs bad locator signals. Vet at engagement; the cost of a bad locator is wasted fees + burned brand.",
    headers: ["Dimension", "Quality locator signals", "Bad locator signals"],
    rows: [
      ["Placement fee structure", "Documented $300-$1,500 per placement signed", "Vague, upfront-only, no signing condition"],
      ["Satisfaction guarantee", "Written 30-90 day with placement-quality criteria", "Vague guarantee with gotcha definitions"],
      ["Client references", "3-5 references in operator machine type + geography", "No references or generic / out-of-segment"],
      ["Placement criteria", "Documented minimum headcount + access + electrical", "No documented criteria — sends unmatched leads"],
      ["Cold calling script", "Shared with operator + refinement collaborative", "Refuses to share — operator brand at risk"],
      ["Churn data", "Disclosed with segment breakdown", "Not disclosed — red flag"],
      ["FTC Bus Opp Rule compliance", "Verified compliance with disclosures", "Non-compliant — regulatory exposure"],
      ["Quarterly reporting", "Provides quarterly performance reports", "No reporting; operator can't evaluate ROI"],
      ["Contract execution model", "Operator-host direct; locator role concludes at signing", "Locator stays in contract loop; ongoing fee structure"],
    ],
  }),
  tipCards({
    heading: "Six locator-engagement mistakes operators make",
    sub: "All preventable with vetting + transparent process + tracked economics + portfolio discipline.",
    items: [
      { title: "Engaging without vetting", body: "Bad signals: vague satisfaction guarantee, no client references in your geography or machine type, refusal to share cold-calling script, churn rate not disclosed, no documented placement criteria. Walk away. Good locators are transparent + share references + document process + share churn data." },
      { title: "Not tracking placement-level economics", body: "Track per-placement: locator fee + 12-month net revenue + churn date if applicable + segment / type. Required to evaluate locator ROI + decide renewal. Operators without per-placement tracking can't tell whether paid locating is working." },
      { title: "Ignoring 12-month churn rate", body: "Industry-typical paid placement churn 20-40% within 12 months — locator-secured placements often weaker fit than self-secured. Build churn into ROI calculation. A $500 placement fee with 35% 12-month churn means effective fee per surviving placement $770." },
      { title: "Outsourcing all sales effort to paid locating", body: "Operators that outsource all sales effort lose direct relationship muscle that converts at renewal, expansion, referral. Hybrid pattern — paid locator for hard segments + DIY for accessible — maintains operator sales capability while leveraging locator reach." },
      { title: "Not reading the satisfaction guarantee fine print", body: "Common gotchas: 'placement' defined as introduction only (not signed contract), 30-day window excludes install delay, replacement clock starts immediately, guarantee voided if operator declines. Negotiate clear definitions tied to signed contract + machine install + 30-day grace before signing." },
      { title: "No exit criteria for the locator engagement", body: "Define quarterly performance threshold: placement secured count, churn rate, conversion rate, segment fit. Below threshold = exit at next contract window. Operators without exit criteria run unproductive locator engagements indefinitely. Modern operators define + track; legacy operators drift.", },
    ],
  }),
  inlineCta({
    text: "Want the locator engagement framework (vetting + economics + hybrid pattern + exit criteria)?",
    buttonLabel: "Get the locator framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operators engaging and evaluating locator services — including locator vetting, per-placement economics tracking, 12-month churn analysis, FTC Business Opportunity Rule compliance verification, and hybrid pattern design (paid locator + DIY cold calling). The benchmarks reflect operator-side data and NAMA + FTC guidance.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do vending locator services work?", answer: "Locator acts as placement broker between operators and hosts. Operator pays $300-$1,500 per placement secured. Locator runs cold outreach + pitch + intro; operator runs site walk + proposal + contract + install. Contract signed between operator and host (not locator). Locator earns fee at signing.", audience: "Operators" },
      { question: "How much do locator services cost?", answer: "$300-$1,500 per placement signed typically, with 30-90 day satisfaction guarantee. Mid-tier locators $300-$700 (accessible segments: apartments, small offices, gyms). Premium locators $1,000-$1,500 (hard-to-reach segments: corporate HQ, hospital systems, manufacturing, federal).", audience: "Operators" },
      { question: "Are locator services worth it?", answer: "Worth it when locator reaches accounts you couldn't with your own cold calling + placement volume justifies fee within 6-12 months + locator process is transparent and verifiable. Not worth it for accessible segments where DIY cold calling outperforms. Hybrid pattern most common at scaling operators.", audience: "Operators" },
      { question: "How do I vet a locator?", answer: "Good signals: written satisfaction guarantee tied to placement quality criteria, references from operators in your machine type + geography, transparent cold-calling script + process documentation, 12-month churn data shared, documented placement criteria, FTC Business Opportunity Rule compliance. Bad signals: vague guarantees, no references, opaque process.", audience: "Operators" },
      { question: "What's the industry-typical placement churn?", answer: "20-40% of paid placements fail within 12 months — locator-secured placements often weaker fit than self-secured. Build churn into ROI calculation. A $500 placement fee with 35% 12-month churn means effective fee per surviving placement $770. Compare against DIY alternative.", audience: "Operators" },
      { question: "What's the FTC Business Opportunity Rule?", answer: "Federal regulation (16 CFR 437) covering business opportunities including vending locator services. Required disclosures + 7-day cooling-off + standard documentation. Quality locators comply; non-compliant locators expose operator to regulatory risk. Verify compliance at engagement.", audience: "Operators" },
      { question: "Should we use a locator or do our own cold calling?", answer: "Depends on target segments. Paid locator for hard-to-reach segments (corporate HQ, hospital systems, manufacturing). DIY cold calling for accessible segments (apartments, small offices, gyms, fitness studios). Hybrid pattern most common at scaling operators. Balance hard cost + operator time.", audience: "Operators" },
      { question: "Does the locator stay involved after signing?", answer: "No (standard model). Locator role concludes at contract signing + fee payment. Operator owns ongoing host relationship, service, planogram, payment, telemetry, accessibility, sustainability reporting. Some locators offer ongoing relationship-management services for additional fee; typically not needed.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FTC — Business Opportunity Rule 16 CFR 437", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing business opportunity sales including locator services" },
      { label: "NAMA — vending location services + operator practice", url: "https://www.namanow.org/", note: "Industry trade association covering location services and operator sales practice" },
      { label: "Vending Times — locator industry coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering paid locating practices and operator economics" },
      { label: "Vending Market Watch — operator practice coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering operator sales economics and locator industry" },
      { label: "IFA — International Franchise Association", url: "https://www.franchise.org/", note: "Industry guidance covering franchise + locator engagement standards" },
    ],
  }),
  relatedGuides({
    heading: "Related vending locator guides",
    items: [
      { eyebrow: "Sister guide", title: "Should you pay for vending locations", description: "Paid locator vs DIY cold calling economics and hybrid pattern design.", href: "/vending-machine-locators/should-you-pay-for-vending-locations" },
      { eyebrow: "Operations", title: "How we match vendors to locations", description: "Vendor-host matching methodology, criteria, and process at modern locator services.", href: "/vending-machine-locators/how-we-match-vendors-to-locations" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Locator services, contracts, commissions, agreements, and business-type fit.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
