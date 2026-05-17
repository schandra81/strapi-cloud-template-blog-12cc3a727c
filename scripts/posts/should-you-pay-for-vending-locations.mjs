import { seedPost, tldr, statStrip, decisionTree, comparisonTable, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("should-you-pay-for-vending-locations", [
  tldr({
    heading: "Should you pay for vending locations — when does paid locating make sense?",
    paragraph:
      "Paid vending locating services charge $300-$1,500 per location secured, typically with a 30-90 day satisfaction guarantee. The economics work only when (a) the locator delivers placements you couldn't reach with your own cold calling, (b) the placement volume justifies the fee within 6-12 months of operation, and (c) the locator's process is transparent and verifiable (not boiler-room cold calling that burns your brand). Bad paid-locating signals: vague guarantees, no client references in your geography, refusal to share their cold-calling script, churn rate not disclosed, no documented placement criteria. Good locator signals: written satisfaction guarantee tied to placement quality criteria (foot traffic + decision-maker access + electrical / floor space confirmed), references from operators in your machine type, transparent process documentation, churn data shared (industry typical: 20-40% of paid placements fail within 12 months). DIY cold calling alternative: 300+ calls per month at 1-3% cold-call-to-contract conversion produces 3-9 placements monthly — often outperforms paid locators at $0 hard cost but 60-100 hours of operator time. Hybrid pattern most common at scaling franchises: paid locator for hard-to-reach segments (corporate HQ, hospital systems, manufacturing), DIY cold calling for accessible segments (apartments, small offices, gyms, fitness studios).",
    bullets: [
      { emphasis: "Paid locating $300-$1,500 per placement:",
        text: "30-90 day satisfaction guarantee typical. Economics work when locator reaches accounts you couldn't, placement volume justifies fee within 6-12 months." },
      { emphasis: "DIY cold calling alternative: 300+ calls/month → 3-9 placements:",
        text: "$0 hard cost but 60-100 hours operator time. Often outperforms paid locators at accessible segments (apartments, small offices, gyms)." },
      { emphasis: "Hybrid pattern most common at scaling operators:",
        text: "Paid locator for hard-to-reach (corporate HQ, hospitals, manufacturing) + DIY for accessible (apartments, small offices, gyms). Balance hard cost + operator time." },
    ],
  }),
  statStrip({
    heading: "Paid vending locating benchmarks",
    stats: [
      { number: "$300-$1,500", label: "per placement fee range", sub: "depends on locator quality + segment", accent: "blue" },
      { number: "20-40%", label: "12-month placement churn", sub: "industry-typical paid placement failure rate", accent: "orange" },
      { number: "6-12 months", label: "payback target", sub: "fee recovery vs placement net revenue", accent: "blue" },
      { number: "1-3%", label: "DIY cold-call-to-contract", sub: "300+ calls/month → 3-9 placements", accent: "blue" },
    ],
  }),
  decisionTree({
    heading: "Should we pay for vending locations or do our own cold calling?",
    question: "Do we need placements in hard-to-reach segments (corporate HQ, hospital systems, manufacturing) where decision-maker access is gated by procurement / facilities / EHS?",
    yesBranch: {
      title: "Paid locator (vetted) for hard-to-reach segments + DIY for accessible segments",
      description: "Vetted paid locator with written satisfaction guarantee + references in your machine type + transparent process can open hard-to-reach segments (corporate HQ, hospital systems, manufacturing) where cold calling is blocked by procurement / facilities / EHS gatekeepers. Hybrid pattern: paid locator for hard segments + DIY cold calling for accessible (apartments, small offices, gyms, fitness studios). Balance hard cost + operator time.",
      finalTone: "go",
      finalLabel: "Hybrid (paid + DIY)",
    },
    noBranch: {
      title: "DIY cold calling — 300+ calls/month with CRM-tracked funnel",
      description: "If your target segments are accessible (apartments, small offices, gyms, fitness studios, community centers), DIY cold calling outperforms paid locating at $0 hard cost. 300+ calls/month with CRM-tracked funnel produces 3-9 placements monthly at 1-3% cold-call-to-contract conversion. Operator time investment 60-100 hours/month; high-discipline operators sustain. Build cold calling SOP + CRM workflow.",
      finalTone: "go",
      finalLabel: "DIY route",
    },
  }),
  comparisonTable({
    heading: "Paid locating vs DIY cold calling — economics comparison",
    sub: "Same placement count (say 6 placements monthly); different cost structure + segment access + time commitment.",
    headers: ["Dimension", "Paid locator", "DIY cold calling", "Hybrid"],
    rows: [
      ["Hard cost per placement", "$300-$1,500", "$0 (operator time only)", "Mix — $300-$1,500 hard segments"],
      ["Operator time per placement", "1-3 hours (intake + handoff)", "8-15 hours (calling + meetings + proposal)", "Mix — 2-8 hours per placement"],
      ["Segment access — accessible (apartments, gyms)", "Available; not differentiated", "Strong; cold calling reaches", "DIY route"],
      ["Segment access — hard (corporate, hospital, manufacturing)", "Strong differentiation; locator relationships", "Weak; gatekeepers block cold calls", "Paid locator route"],
      ["12-month placement churn", "20-40% industry-typical", "10-25% (your sales relationship)", "Mix per segment"],
      ["Brand risk", "Locator brand reflects on you", "Direct relationship; you control", "Vet locator carefully"],
      ["Scaling pattern", "Per-placement fee scales linearly", "Operator time bottleneck at scale", "Operator hires sales rep + paid locator hybrid"],
    ],
  }),
  tipCards({
    heading: "Five paid locating mistakes operators make",
    sub: "All preventable with vetting + transparent process + tracked economics + hybrid pattern.",
    items: [
      { title: "Paying a locator without vetting their process", body: "Bad signals: vague satisfaction guarantee, no client references in your geography or machine type, refusal to share cold-calling script, churn rate not disclosed, no documented placement criteria. Walk away. Good locators are transparent + share references + document process + share churn data. $300-$1,500 per placement is too much to spend on opaque process." },
      { title: "Not tracking placement-level economics", body: "Track per-placement: locator fee + 12-month net revenue + churn date if applicable + segment / type. Required to evaluate locator ROI + decide renewal. Operators without per-placement tracking can't tell whether paid locating is working; can't optimize. Modern CRM + Excel tracker minimum." },
      { title: "Ignoring 12-month churn rate", body: "Industry-typical paid placement churn 20-40% within 12 months — locator-secured placements often weaker fit than self-secured. Build 12-month churn data into ROI calculation. A $500 placement fee with 35% 12-month churn means effective fee per surviving placement $770. Compare against DIY alternative." },
      { title: "Outsourcing all sales effort to paid locating", body: "Operators that outsource all sales effort lose the direct relationship muscle that converts at renewal, expansion, referral. Hybrid pattern — paid locator for hard segments + DIY for accessible — maintains operator sales capability while leveraging locator reach. Don't atrophy sales muscle." },
      { title: "Skipping the satisfaction guarantee fine print", body: "Read the guarantee carefully. Common gotchas: 'placement' defined as introduction only (not signed contract), 30-day window excludes machine install delay, replacement placement clock starts immediately (no grace), guarantee voided if you decline a placement on any grounds. Negotiate clear definitions before signing.", },
    ],
  }),
  inlineCta({
    text: "Want the paid-locating vs DIY decision framework (vetting + economics + hybrid pattern)?",
    buttonLabel: "Get the locator decision framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operators evaluating paid locating vs DIY cold calling — including locator vetting, per-placement economics tracking, 12-month churn analysis, hybrid pattern design, and direct cold-calling sales operations setup. The benchmarks reflect operator-side data + NAMA industry surveys.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much do vending location services charge?", answer: "$300-$1,500 per placement secured typically, with 30-90 day satisfaction guarantee. Premium locators charging $1,000-$1,500 typically target hard-to-reach segments (corporate HQ, hospitals, manufacturing). Mid-tier locators charging $300-$700 typically target accessible segments (apartments, gyms, small offices).", audience: "Operators" },
      { question: "Is paid locating worth it?", answer: "Worth it when locator reaches accounts you couldn't with your own cold calling + placement volume justifies fee within 6-12 months + locator process is transparent and verifiable. Not worth it for accessible segments where DIY cold calling outperforms. Hybrid pattern most common at scaling operators.", audience: "Operators" },
      { question: "How do I vet a locator?", answer: "Good signals: written satisfaction guarantee tied to placement quality criteria, references from operators in your machine type + geography, transparent cold-calling script + process documentation, 12-month churn data shared, documented placement criteria. Bad signals: vague guarantees, no references, opaque process, churn not disclosed.", audience: "Operators" },
      { question: "What's the industry-typical placement churn?", answer: "20-40% of paid placements fail within 12 months — locator-secured placements often weaker fit than self-secured. Build churn into ROI calculation. A $500 placement fee with 35% 12-month churn means effective fee per surviving placement $770. Compare against DIY alternative.", audience: "Operators" },
      { question: "Can I do cold calling myself?", answer: "Yes — 300+ cold calls per month with CRM-tracked funnel produces 3-9 placements monthly at 1-3% cold-call-to-contract conversion. Operator time investment 60-100 hours / month. Outperforms paid locating at accessible segments (apartments, small offices, gyms, fitness studios, community centers). High-discipline operators sustain.", audience: "Operators" },
      { question: "What's the hybrid pattern?", answer: "Paid locator for hard-to-reach segments (corporate HQ, hospital systems, manufacturing) where decision-maker access is gated by procurement / facilities / EHS. DIY cold calling for accessible segments (apartments, small offices, gyms, fitness studios). Balance hard cost + operator time. Most common at scaling franchises.", audience: "Multi-Unit Operators" },
      { question: "What about the satisfaction guarantee fine print?", answer: "Read carefully. Common gotchas: 'placement' defined as introduction only (not signed contract), 30-day window excludes machine install delay, replacement clock starts immediately, guarantee voided if you decline. Negotiate clear definitions tied to signed contract + machine install + 30-day grace before signing.", audience: "Operators" },
      { question: "When should I stop using a paid locator?", answer: "Track per-placement economics monthly. Stop if 12-month net revenue per placement is below 2× the fee, churn rate exceeds 40%, locator process becomes opaque, or your DIY cold calling capability has scaled to cover the segments. Most scaling operators reduce reliance on paid locators by year 3-5.", audience: "Multi-Unit Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending location services + operator practice", url: "https://www.namanow.org/", note: "Industry trade association covering location services and operator sales practice" },
      { label: "Vending Times — locator industry coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering paid locating practices and operator economics" },
      { label: "FTC — Business Opportunity Rule", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing business opportunity sales including locator services" },
      { label: "Salesforce / HubSpot / Pipedrive — CRM platforms", url: "https://www.hubspot.com/", note: "CRM platforms supporting DIY cold-calling funnel tracking" },
      { label: "Vending Market Watch — operator practice coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering operator sales economics and locator industry" },
    ],
  }),
  relatedGuides({
    heading: "Related vending locator guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending location commission explained", description: "Commission structures, payment cadence, and host-operator economics at vending placements.", href: "/vending-machine-locators/vending-location-commission-explained" },
      { eyebrow: "Operations", title: "Cold calling tips for vending operators", description: "Sales funnel design, conversion rates, and CRM-tracked workflow for DIY operator sales.", href: "/vending-machine-locators/cold-calling-tips-for-vending-operators" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Locator services, contracts, commissions, agreements, and business-type fit across vending placement strategies.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
