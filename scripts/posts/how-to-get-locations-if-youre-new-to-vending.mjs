import { seedPost, tldr, timeline, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-get-locations-if-youre-new-to-vending", [
  tldr({
    heading: "How does a new vending operator get their first locations?",
    paragraph:
      "New vending operators face a chicken-and-egg problem: contracts require references but you have none. The path: (1) start with personal-network placements (1-3 contracts from existing relationships — friends-in-business, employer, family) to build initial reference base; (2) target placement types you can credibly serve — usually smaller offices, single-site apartment communities, small construction sites, not airports or major institutions; (3) saturate free lead channels first — drive-bys, LinkedIn, NAMA / NAA / BOMA / AGC directories; (4) compete on service + capability, not commission rate (price war erodes margin); (5) deliver flawlessly at first contracts to build references; (6) document case studies (revenue lift, satisfaction, sustainability) for use in later sales; (7) expand via referrals from satisfied first customers; (8) add paid leads only after free pipeline saturates. New operators typically reach 10 contracts in 6-12 months, 30 contracts in 18-24 months. First-contract conversion is hardest; after 3-5 quality contracts, references compound and conversion accelerates.",
    bullets: [
      { emphasis: "Start with personal-network placements:", text: "1-3 contracts from existing relationships to build initial reference base. Offers credibility for subsequent outreach. Deliver flawlessly to convert into named references." },
      { emphasis: "Target placement types you can credibly serve:", text: "Smaller offices, single-site apartments, small construction sites — not airports / major institutions / federal at new-operator stage. Match capability to placement; over-reaching loses bids and damages credibility." },
      { emphasis: "References compound after 3-5 quality contracts:", text: "First-contract conversion is hardest. Build reference network with first contracts. After 3-5, references compound and conversion accelerates. Most new operators reach 10 contracts in 6-12 months." },
    ],
  }),
  timeline({
    heading: "New operator first-location path — month-by-month",
    sub: "Six-stage progression from operator startup to first 10 contracts. Each stage has activities and conversion benchmarks.",
    howToName: "Get vending locations as a new operator",
    totalTime: "6-12 months to 10 contracts typical",
    steps: [
      { title: "Month 1 — Operator setup", description: "Form LLC, secure business insurance (general liability + product liability $1M minimum), open business banking, register with state tax authorities, set up basic accounting. Establish telemetry / payment processing accounts (Cantaloupe, Nayax, USConnect, or similar). Acquire 1-3 initial machines.", duration: "Month 1" },
      { title: "Month 1-2 — Personal-network placements", description: "Approach 5-10 prospects in your personal network (friends-in-business, employer, family-owned companies, local employers). Aim for 1-3 initial contracts. Offer modest commission (10-15%) + flawless service. These are reference-building placements; deliver perfectly.", duration: "Month 1-2" },
      { title: "Month 2-4 — Free lead pipeline saturation", description: "Saturate free lead channels: drive-bys at target placement types, LinkedIn outreach to facility managers / property managers, NAMA member directory cross-referencing, NAA / BOMA / AGC industry directories. Build CRM with 50-100 qualified prospects. Outreach 10-20 contacts weekly.", duration: "Month 2-4" },
      { title: "Month 3-6 — First proposals + contracts", description: "First proposals on placements identified through free channels. Lead with placement-specific value. Bring personal-network references. Conversion benchmarks lower than experienced operators (3-7% lead-to-contract typical at this stage). Target 3-5 contracts in this period.", duration: "Month 3-6" },
      { title: "Month 6-9 — Case study + reference building", description: "Document case studies at first 3-5 contracts — revenue lift, satisfaction, planogram approach, sustainability spec. Pre-call references for upcoming proposals. References compound now; conversion accelerates to 5-10% lead-to-contract. Target 5-7 additional contracts.", duration: "Month 6-9" },
      { title: "Month 9-12 — Pipeline scaling", description: "Expand placement types you serve. Add paid lead channels if free pipeline saturating. Consider locator services with verified FTC disclosures. Continue free pipeline development. Target 10 contracts total by month 12. Conversion approaches experienced-operator benchmarks (5-15% lead-to-contract).", duration: "Month 9-12" },
    ],
  }),
  specList({
    heading: "New operator first-location specifications",
    items: [
      { label: "Operator setup requirements", value: "LLC formation ($50-500 state-dependent), business insurance ($1-3K annually for general liability + product liability $1M minimum + commercial auto), business banking, state tax registration, telemetry / payment processing account (Cantaloupe, Nayax, USConnect or similar). Total setup cost $2-5K typical." },
      { label: "Initial equipment investment", value: "1-3 machines at $3-15K each (new) or $1-5K each (refurbished). Modern combo machines preferred — accept telemetry + mobile-wallet + EMV + planogram flexibility. Refurbished acceptable but verify telemetry + payment hardware modern. Total initial equipment $3-45K depending on new / refurb + count." },
      { label: "Personal-network placement targeting", value: "Friends-in-business (small business owners in your network), employer (where you work or recently worked), family-owned companies, local small employers (under 200 employees), local apartment communities (single-site under 200 units), small construction sites. Match capability to placement scale." },
      { label: "Placement types to avoid at new-operator stage", value: "Major airports (RFP-driven, multi-year capability requirements), major hospitals (HIPAA + dietitian-coordinated, specialty capability), federal / GSA (sub-contractor only at new-operator stage), large institutional / multi-site (operational scale required). Re-target these at 18-36 months operator maturity." },
      { label: "Commission structure for first contracts", value: "10-15% standard for office / apartment / small construction. Don't compete on commission rate at new-operator stage; compete on service + capability. Aggressive commission undercuts margin and signals desperation. Modest commission + flawless service builds references." },
      { label: "Free lead pipeline development", value: "Drive-bys at target placements (2-4 hours weekly), LinkedIn outreach to facility / property managers (5-10 messages daily), NAMA member directory cross-referencing (1-2 hours weekly), industry directory mining (NAA, BOMA, AGC). Build CRM with 50-100 qualified prospects within 2-3 months." },
      { label: "First-contract conversion benchmarks", value: "3-7% lead-to-contract at new-operator stage (vs 5-15% for experienced operators). Lower conversion reflects absent reference network + operator-credibility gap. Conversion improves rapidly as reference base builds — 5-10% by month 6, 5-15% by month 12." },
      { label: "Reference building protocol", value: "Document case studies at first 3-5 contracts: pre-implementation baseline (revenue, satisfaction, gaps) → modern operator approach (telemetry, planogram, sustainability) → post-implementation results (revenue lift, satisfaction). Pre-call references for upcoming proposals. Brief references on prospect call." },
      { label: "When to add paid leads", value: "Free pipeline saturated (sales bandwidth fully consumed at free channels). Typically month 6-12 at growing new operator. Verify FTC business opportunity disclosures (16 CFR Part 437). Run paid in parallel with continued free. Track separately in CRM. Measure conversion + retention by channel." },
    ],
  }),
  tipCards({
    heading: "Six new operator first-location mistakes",
    sub: "Each is documented in new-operator post-mortems. All preventable with structured approach.",
    items: [
      { title: "Targeting placements you can't credibly serve", body: "Major airports, hospitals, federal, large institutional require operator scale + specialty capability + multi-year references. Targeting at new-operator stage produces lost bids + credibility damage. Target offices, small apartments, small construction at startup. Re-target majors at 18-36 months maturity." },
      { title: "Competing on commission rate", body: "Aggressive commission rate undercuts margin and signals desperation. Compete on service + capability — telemetry coverage, service SLA, modern payment, allergen-restricted formats, sustainability spec. New operators that match experienced-operator commission with better service win bids." },
      { title: "Skipping case study documentation", body: "References compound after 3-5 quality contracts. Without documented case studies (revenue lift, satisfaction, planogram approach, sustainability), references underperform. Document baseline + approach + results at each early contract. Pre-call references for upcoming proposals." },
      { title: "Generic outreach without placement-specific value", body: "New operators leading with 'I provide vending services' get rejected. Lead with placement-specific value — 'I noticed your office has [X] employees and your current vending [observation].' Specific openings convert 5-10× generic. Doubly important at new-operator stage where reference credibility is absent." },
      { title: "Over-relying on paid leads at startup", body: "Paid leads scale operator growth when free pipeline saturated. Early-stage operators with un-exhausted free pipeline shouldn't spend on paid leads; spending erodes margin. Saturate free channels first; add paid only when free pipeline saturating (typically month 6-12)." },
      { title: "Skipping operator setup compliance", body: "LLC formation, business insurance, state tax registration, telemetry / payment processing accounts. Operating without proper setup creates liability exposure and erodes prospect credibility. Total setup cost $2-5K typical; complete in month 1 before first outreach." },
    ],
  }),
  decisionTree({
    heading: "Are you ready to target major / institutional contracts as a new operator?",
    question: "Do you have 10+ documented contracts, 18-36 months operator history, 3+ multi-year references in similar placement types, and operations scale to support 24-48 hour service SLA across multiple sites?",
    yesBranch: {
      title: "Yes — major / institutional contracts reasonable next stage",
      description: "Operator maturity supports major / institutional targeting. Engage specialty consultants for major-airport / federal / large institutional RFPs (typically 2-4 weeks engagement, $10-50K consultant fee, but typical 5-10× ROI on won contracts). Develop institutional capability — multi-year references, sustainability reporting, compliance documentation.",
      finalTone: "go",
      finalLabel: "Target majors",
    },
    noBranch: {
      title: "No — stay focused on offices, small apartments, small construction",
      description: "New / early-stage operators that target majors produce lost bids + credibility damage. Build reference base at scale-appropriate placements first — offices, single-site apartments, small construction. Document case studies. Re-target majors at 18-36 months operator maturity.",
      finalTone: "stop",
      finalLabel: "Stay scale-appropriate",
    },
  }),
  inlineCta({
    text: "Want the new operator first-location framework (setup + personal network + free pipeline + reference building + scaling)?",
    buttonLabel: "Get the new operator framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported new vending operator startups across office, apartment, construction, and small retail placements — including operator setup, personal-network placement strategy, free lead pipeline development, case study documentation, and reference network building. The conversion benchmarks reflect new-operator-side data tracked across the startup phase.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do new operators get their first vending contracts?", answer: "Start with personal-network placements (1-3 contracts from existing relationships) to build initial reference base. Target placement types you can credibly serve — offices, small apartments, small construction. Saturate free lead channels. Compete on service + capability, not commission rate. References compound after 3-5 quality contracts.", audience: "New Operators" },
      { question: "What's the operator setup cost?", answer: "$2-5K typical: LLC formation ($50-500 state-dependent), business insurance ($1-3K annually for general liability + product liability $1M minimum + commercial auto), business banking, state tax registration, telemetry / payment processing account setup. Equipment additional ($3-45K for 1-3 machines).", audience: "New Operators" },
      { question: "Should we buy new or refurbished equipment?", answer: "Refurbished acceptable at startup for capital conservation. Verify telemetry + payment hardware modern (cellular telemetry, EMV + contactless + mobile-wallet payment). $1-5K refurbished vs $3-15K new per machine. Modern combo machines preferred — accept telemetry + payment + planogram flexibility.", audience: "New Operators" },
      { question: "What placement types should new operators target?", answer: "Offices (under 200 employees), single-site apartment communities (under 200 units), small construction sites, family-owned local businesses. Match capability to placement scale. Avoid major airports, major hospitals, federal / GSA, large institutional at new-operator stage. Re-target these at 18-36 months maturity.", audience: "New Operators" },
      { question: "What commission rate should new operators offer?", answer: "10-15% standard for office / apartment / small construction. Don't compete on commission rate at new-operator stage; compete on service + capability. Aggressive commission undercuts margin and signals desperation. Modest commission + flawless service builds references and references compound.", audience: "New Operators" },
      { question: "How long to first 10 contracts?", answer: "6-12 months typical at structured new operator. Month 1 setup → month 1-2 personal-network → month 2-4 free pipeline saturation → month 3-6 first proposals → month 6-9 case study + reference building → month 9-12 pipeline scaling. Conversion improves from 3-7% to 5-15% lead-to-contract over this period.", audience: "New Operators" },
      { question: "Should new operators use paid leads?", answer: "Not initially. Paid leads scale operator growth when free pipeline saturated. Early-stage operators with un-exhausted free pipeline don't need paid leads; spending erodes margin. Saturate free channels first (drive-bys, LinkedIn, directories). Add paid leads at month 6-12 when free pipeline saturating.", audience: "New Operators" },
      { question: "When can new operators target major / institutional contracts?", answer: "After 10+ documented contracts + 18-36 months operator history + 3+ multi-year references in similar placement types + operations scale supporting 24-48 hour service SLA across multiple sites. Engage specialty consultants for major-airport / federal / large institutional RFPs. Earlier targeting produces lost bids and credibility damage.", audience: "New Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator startup practice", url: "https://www.namanow.org/", note: "Industry trade association covering new-operator startup standards" },
      { label: "SBA — small business startup resources", url: "https://www.sba.gov/", note: "Federal resources for new operator setup and financing" },
      { label: "FTC — Business Opportunity Rule (16 CFR Part 437)", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing paid locator disclosures" },
      { label: "IRS — small business tax requirements", url: "https://www.irs.gov/businesses/small-businesses-self-employed", note: "Federal tax registration for new operator setup" },
      { label: "Vending Times — new operator coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering new-operator startup and growth" },
    ],
  }),
  relatedGuides({
    heading: "Related new operator and locations guides",
    items: [
      { eyebrow: "Sister guide", title: "How to approach businesses for vending", description: "Pre-qualification, decision-maker targeting, meeting scripts, and follow-up cadence.", href: "/vending-machine-locators/how-to-approach-businesses-for-vending" },
      { eyebrow: "Operations", title: "Free vending location leads vs paid leads", description: "Channel comparison, conversion benchmarks, and FTC disclosure compliance.", href: "/vending-machine-locators/free-vending-location-leads-vs-paid-leads" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Operator setup, lead generation, approach, proposal, and scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
