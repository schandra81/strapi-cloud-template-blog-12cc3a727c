import { seedPost, tldr, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("mistakes-to-avoid-when-landing-new-locations", [
  tldr({
    heading: "What mistakes should vending operators avoid when landing new locations?",
    paragraph:
      "Common operator mistakes that erode location-acquisition success: (1) pitching to gatekeepers instead of decision-makers (receptionists, assistants don't sign contracts); (2) generic 'we do vending great' opening without placement-specific value; (3) competing on commission rate alone instead of service + capability (commission war erodes margin without winning); (4) skipping pre-acceptance diligence (electrical, traffic, decision-maker authority, hidden fees, exclusivity); (5) generic proposals without telemetry-driven revenue projection (lose to placement-specific 4-to-1); (6) generic references not placement-type-matched (drives 30-50% of conversion at proposal stage); (7) no systematic follow-up cadence (5-7 contacts typical before conversion; one-and-done rarely converts); (8) targeting placements you can't credibly serve (new operators pitching majors / airports / federal produce lost bids); (9) skipping FTC business opportunity verification on paid locators; (10) no CRM-tracked sales funnel (spreadsheet-based operations produce inconsistent results). Each mistake is preventable with structured approach + CRM-tracked discipline. Conversion benchmarks for operators avoiding these mistakes: 5-15% lead-to-contract, 65-80% 3-year contract retention.",
    bullets: [
      { emphasis: "10 common operator mistakes — all preventable:", text: "Gatekeeper pitching, generic openings, commission-only competition, skipping diligence, generic proposals + references, no follow-up, mis-targeted majors, no FTC verification, no CRM. Each preventable with structured approach." },
      { emphasis: "Mistake-avoidance produces 5-15% lead-to-contract conversion:", text: "Operators avoiding common mistakes hit experienced-operator conversion benchmarks. Operators making these mistakes hit 1-3% conversion. Discipline differential is meaningful." },
      { emphasis: "65-80% 3-year contract retention at well-acquired contracts:", text: "Pre-acceptance diligence + placement-type-matched references + structured proposal + service + capability drive long retention. Poorly-acquired contracts retain at 40-60%." },
    ],
  }),
  specList({
    heading: "Top 10 location-acquisition mistakes",
    items: [
      { label: "Mistake 1 — Pitching to gatekeepers instead of decision-makers", value: "Receptionists, assistants, front-desk staff are gatekeepers, not decision-makers. Office vending decisions at facility manager / HR / admin. Apartment at property manager. Hospital at auxiliary services. Campus at dining services. Construction at GC or superintendent. Pitching to gatekeepers wastes outreach + erodes credibility. Identify and target decision-makers via LinkedIn + company website + targeted phone calls." },
      { label: "Mistake 2 — Generic 'we do vending great' opening", value: "Generic pitches get rejected. Lead with placement-specific value — 'I noticed your office has [X] employees and your current vending [observation].' Specific value-based openings convert 5-10× generic. Specific to placement type + audience + visible vending status. Demonstrates operator pre-qualification + value framing." },
      { label: "Mistake 3 — Competing on commission rate alone", value: "Commission rate war erodes margin without winning consistently. Compete on service + capability — telemetry coverage (100% standard), service SLA (24-48 hour), modern payment, allergen-restricted formats, sustainability spec. New operators with modest commission + flawless service win bids vs aggressive-commission competitors with weaker capability." },
      { label: "Mistake 4 — Skipping pre-acceptance diligence", value: "Traffic verification, electrical capacity, decision-maker authority, hidden site fees, exclusivity status, compliance constraints. Skipping diligence produces underperforming contracts for 1-3 year contract term. Pre-acceptance diligence is operator economic protection; not optional. Walk away from placements with critical diligence failures." },
      { label: "Mistake 5 — Generic proposals without telemetry-driven projection", value: "Generic proposals lose to placement-specific 4-to-1. Telemetry-driven revenue projection based on similar placements in your portfolio. Specific to placement type + audience + traffic. Generic 'we'll do $1,500-2,000 monthly' ranges erode credibility. Document assumptions. Site walk insights feed customization." },
      { label: "Mistake 6 — Generic references not placement-type-matched", value: "Placement-type-matched references drive 30-50% of conversion at proposal stage. Office prospect → office references; construction → construction; campus → campus. Generic references nearly worthless. Pre-call references; brief them on prospect call. Reference quality differential is meaningful." },
      { label: "Mistake 7 — No systematic follow-up cadence", value: "5-7 contacts typical before conversion. One-and-done approaches rarely convert. Systematic CRM-tracked cadence: initial → 3-day email → 1-week phone → 2-week case study → 1-month phone → final outreach. Drop after no-response cycle. Operators without systematic follow-up under-perform vs operators with." },
      { label: "Mistake 8 — Targeting placements you can't credibly serve", value: "New / early-stage operators targeting major airports / federal / large institutional produce lost bids + credibility damage. Match operator maturity to placement scale. New operators target offices, small apartments, small construction. Re-target majors at 18-36 months operator history + multi-year references in similar placement types." },
      { label: "Mistake 9 — Skipping FTC business opportunity verification on paid locators", value: "Paid locator services governed by FTC Business Opportunity Rule (16 CFR Part 437). Required disclosures: written disclosure document, prior buyer list, lawsuit history, refund terms. Always request + verify before contracting. Locators refusing disclosures are red flags. Major source of operator complaints." },
      { label: "Mistake 10 — No CRM-tracked sales funnel", value: "Spreadsheet-based sales operations produce inconsistent results. Modern operators run CRM-tracked funnels (Salesforce, HubSpot, Pipedrive). Tracks call volume, conversion rates, follow-up cadence, time-to-close, lead source, contract value, retention. Identifies funnel bottlenecks; drives sales discipline. Without CRM, operations can't scale." },
    ],
  }),
  tipCards({
    heading: "Six recovery patterns when you've made the mistakes",
    sub: "Each addresses a specific common mistake and provides recovery path for operators currently making the mistake.",
    items: [
      { title: "Re-route from gatekeepers to decision-makers", body: "If you're stuck at receptionists / assistants, escalate. Ask for the facility manager / property manager / auxiliary services / GC by name. LinkedIn research identifies the right person; company website often lists. Bypass gatekeepers via direct outreach (email + LinkedIn) to identified decision-makers." },
      { title: "Replace generic openings with placement-specific value", body: "Audit your last 20 cold call openings. If most are 'we provide vending services' or similar generic, rewrite. Lead with placement-specific value: '[observation about specific placement] — would a 15-minute call about [specific value] be useful?' Test new opening against 50 outreaches; measure conversion lift." },
      { title: "Build placement-type-matched reference network", body: "Audit your reference list. If you're using the same 2-3 references for office, apartment, construction, hospital pitches, you're losing conversion. Build placement-type-matched references — 3-5 per placement type you serve. Pre-call references; brief them on prospect calls. Conversion at proposal stage improves substantially." },
      { title: "Implement CRM-tracked follow-up cadence", body: "If you're tracking follow-ups in spreadsheets or memory, implement CRM. Salesforce / HubSpot / Pipedrive at $20-150/user/month. Configure follow-up cadence: initial → 3-day email → 1-week phone → 2-week case study → 1-month phone → final. Track conversion + retention by source. Discipline differential is meaningful." },
      { title: "Right-size placement targeting to operator maturity", body: "If you're a new operator losing bids on major airports / federal / large institutional, re-target. Match operator maturity to placement scale. Offices, single-site apartments, small construction at startup. Re-target majors at 18-36 months operator history + multi-year references. Stop targeting beyond your credible capability." },
      { title: "Verify FTC disclosures on every paid locator", body: "If you've contracted paid locators without FTC business opportunity disclosure verification, document interactions and request disclosures retroactively. Locators subject to FTC rule must provide disclosure document, prior buyer list, lawsuit history, refund terms. Verify before next renewal; consider exiting if non-compliant." },
    ],
  }),
  decisionTree({
    heading: "Are you making the common location-acquisition mistakes?",
    question: "Do you have CRM-tracked sales funnel, placement-type-matched references, telemetry-driven revenue projections, systematic follow-up cadence, and pre-acceptance diligence on every contract?",
    yesBranch: {
      title: "Yes — operator practice on benchmark",
      description: "Operator practice aligns with experienced-operator conversion benchmarks (5-15% lead-to-contract, 65-80% 3-year retention). Continue current practice. Focus on optimization at margin — A/B test openings, refine reference network, expand placement types served, scale via paid leads if free pipeline saturating.",
      finalTone: "go",
      finalLabel: "Optimize at margin",
    },
    noBranch: {
      title: "No — implement structured approach",
      description: "Operator practice has gaps; conversion likely 1-3% lead-to-contract vs 5-15% benchmark, retention 40-60% vs 65-80%. Implement CRM-tracked funnel, build placement-type-matched references, develop telemetry-driven projection capability, install systematic follow-up cadence, run pre-acceptance diligence on every contract. Discipline differential is meaningful.",
      finalTone: "stop",
      finalLabel: "Restructure operator practice",
    },
  }),
  inlineCta({
    text: "Want the location-acquisition mistake-avoidance framework (decision-maker targeting + references + proposal + follow-up + CRM)?",
    buttonLabel: "Get the mistake-avoidance framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator location-acquisition practice across new-operator startup, expansion-phase scaling, and multi-territory operations — including decision-maker targeting, placement-type-matched reference network building, telemetry-driven proposal development, CRM-tracked follow-up cadence, and pre-acceptance diligence frameworks. The conversion + retention benchmarks reflect operator-side data on practice quality.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the biggest mistake new vending operators make when landing locations?", answer: "Targeting placements they can't credibly serve. Major airports, hospitals, federal, large institutional require operator scale + specialty capability + multi-year references. Targeting at new-operator stage produces lost bids + credibility damage. Target offices, small apartments, small construction at startup. Re-target majors at 18-36 months maturity.", audience: "New Operators" },
      { question: "Why is competing on commission rate alone a mistake?", answer: "Commission rate war erodes margin without winning consistently. Modern prospects evaluate operator on service + capability — telemetry coverage, service SLA, modern payment, allergen-restricted formats, sustainability spec. Aggressive commission combined with weaker capability loses to modest commission + flawless service. Compete on capability.", audience: "Operators" },
      { question: "How do we move from gatekeepers to decision-makers?", answer: "LinkedIn + company website research identifies decision-makers. Office: facility manager or HR / admin. Apartment: property manager. Hospital: auxiliary services. Campus: dining services. Construction: GC or superintendent. Bypass gatekeepers via direct outreach (email + LinkedIn) to identified decision-makers. Don't accept gatekeeper deflections.", audience: "Operators" },
      { question: "How do we develop placement-specific revenue projections?", answer: "Telemetry-driven projection based on similar placements in your portfolio. Industry-specific revenue ranges adjusted for placement-specific variables — traffic, audience, current vending, demographic mix. Monthly revenue range, transaction mix, peak / off-peak patterns. Document assumptions. Generic 'we'll do great' ranges erode credibility.", audience: "Operators" },
      { question: "What's the follow-up cadence?", answer: "5-7 contacts typical before conversion. Systematic CRM-tracked cadence: initial call → 3-day email → 1-week phone → 2-week case study → 1-month phone → final outreach. Drop after no-response cycle. Operators without systematic follow-up under-perform vs operators with. CRM tracking essential.", audience: "Operators" },
      { question: "Should we always run pre-acceptance diligence?", answer: "Yes. Pre-acceptance diligence — traffic verification, electrical capacity, decision-maker authority, hidden site fees, exclusivity status, compliance constraints — protects 1-3 year contract economics. Walk away from placements with critical diligence failures. Skipping diligence produces underperforming contracts; not optional.", audience: "Operators" },
      { question: "What CRM should operators use?", answer: "Salesforce ($25-300+/user/month), HubSpot (free to $1,500+/user/month), Pipedrive ($14-99/user/month) all viable. Choose based on operator scale + integration needs. Track lead source, conversion stages, follow-up cadence, contract value, retention. Spreadsheet-based operations produce inconsistent results; CRM modern standard.", audience: "Operators" },
      { question: "How do we verify FTC business opportunity disclosures on paid locators?", answer: "Request disclosure document, prior buyer list, lawsuit history, refund terms before contracting. Locators subject to FTC Business Opportunity Rule (16 CFR Part 437) must provide. Verify against published FTC guidance. Locators refusing disclosures are red flags. Document interactions; engage attorney for high-stakes disputes.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator sales practice", url: "https://www.namanow.org/", note: "Industry trade association covering operator location-acquisition standards" },
      { label: "FTC — Business Opportunity Rule (16 CFR Part 437)", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing paid locator disclosures" },
      { label: "Salesforce / HubSpot / Pipedrive — CRM platforms", url: "https://www.salesforce.com/", note: "Major CRM platforms underlying modern operator sales operations" },
      { label: "SBA — small business sales resources", url: "https://www.sba.gov/", note: "Federal resources for small business sales operations" },
      { label: "Vending Times — operator location-acquisition coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator sales operations and growth" },
    ],
  }),
  relatedGuides({
    heading: "Related operator practice and locations guides",
    items: [
      { eyebrow: "Sister guide", title: "How to get locations if you're new to vending", description: "New operator startup, personal-network placements, and pipeline scaling.", href: "/vending-machine-locators/how-to-get-locations-if-youre-new-to-vending" },
      { eyebrow: "Operations", title: "Questions to ask before accepting a location", description: "Pre-acceptance diligence, walk-away signals, and contract economics protection.", href: "/vending-machine-locators/questions-to-ask-before-accepting-a-location" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Lead generation, approach, proposal, diligence, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
