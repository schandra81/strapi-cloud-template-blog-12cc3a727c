import { seedPost, tldr, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-write-a-vending-machine-proposal", [
  tldr({
    heading: "How should a vending operator structure a proposal to win the contract?",
    paragraph:
      "A vending proposal is a structured 6-12 page document that converts site-walk insights into a contract-ready offer. Required sections: (1) executive summary — 1-page placement positioning + value proposition; (2) operator capability — telemetry coverage, service SLA, payment stack, allergen-restricted formats, sustainability spec, certifications, insurance; (3) placement-specific revenue projection — telemetry-driven monthly revenue range, transaction mix, peak / off-peak patterns; (4) commission structure — flat % vs tiered vs minimum guarantee + tiered upside, with worked example at projected revenue; (5) service SLA — response time, restocking cadence, planogram refresh cadence, reporting; (6) planogram design — placement-type-matched SKU mix, allergen-restricted share, sustainability product preference; (7) sustainability + ESG — ENERGY STAR fleet spec, low-GWP refrigerant, recycling co-location, quarterly sustainability reporting; (8) implementation timeline — install, telemetry verification, first business review; (9) references — 3-5 placement-type-matched current accounts; (10) contract terms — length, exit provisions, exclusivity, insurance, dispute resolution. Generic proposals lose to placement-specific proposals 4-to-1. Tailor every section to the placement.",
    bullets: [
      { emphasis: "10 required sections in a winning proposal:", text: "Executive summary, operator capability, revenue projection, commission, service SLA, planogram, sustainability, timeline, references, contract terms. Each tailored to placement; generic proposals lose to placement-specific 4-to-1." },
      { emphasis: "Telemetry-driven revenue projection — not generic ranges:", text: "Projection based on telemetry data from similar placements in your portfolio. Specific to placement type + audience + traffic. Generic 'we'll do great' ranges erode credibility." },
      { emphasis: "Placement-type-matched references:", text: "3-5 current accounts in target prospect's placement type. References drive 30-50% of conversion at proposal stage. Generic references nearly worthless; placement-type-matched references convert." },
    ],
  }),
  timeline({
    heading: "Proposal development — step by step",
    sub: "Eight-step process from site walk to delivered proposal. Each step has time investment and deliverable.",
    howToName: "Write a winning vending machine proposal",
    totalTime: "8-15 hours from site walk to delivered proposal",
    steps: [
      { title: "Site walk + data capture", description: "On-site walk: placement zones, electrical, traffic patterns, current vending (if any), ADA constraints, weather exposure. Document with photos + measurements. Notes feed proposal development.", duration: "1-2 hours" },
      { title: "Revenue projection development", description: "Telemetry-driven projection based on similar placements in your portfolio. Industry-specific revenue ranges adjusted for placement-specific variables — traffic, audience, current vending, demographic mix. Concrete projection with assumptions.", duration: "1-2 hours" },
      { title: "Commission structure modeling", description: "Flat % vs tiered vs minimum guarantee + tiered upside. Worked example at projected revenue showing prospect commission revenue. Tiered structures align incentives; flat % can produce under-investment at lower-traffic placements.", duration: "1 hour" },
      { title: "Planogram design", description: "Placement-type-matched SKU mix — office, apartment, hospital, campus, construction, retail, airport each have distinct planogram. Allergen-restricted share (12-20% typical). Sustainability product preference where applicable.", duration: "1-2 hours" },
      { title: "Operator capability + references", description: "Document operator capability: telemetry coverage, service SLA, payment stack, allergen-restricted formats, sustainability spec, certifications, insurance. Pre-call 3-5 placement-type-matched references; brief them on prospect call. Compile reference contact information.", duration: "1-2 hours" },
      { title: "Implementation timeline + sustainability spec", description: "Install timeline (typically 1-4 weeks from contract signing), telemetry verification, planogram load, first business review at 30-60 days. Sustainability spec: ENERGY STAR fleet, low-GWP refrigerant, recycling co-location, quarterly reporting.", duration: "0.5-1 hour" },
      { title: "Contract terms drafting", description: "Length (1-3 years typical), exit provisions (60-90 day notice typical), exclusivity, insurance (general liability + product liability + cyber on payment), dispute resolution. Engage attorneys at high-stakes contracts. Standard template + placement-specific customizations.", duration: "1-2 hours" },
      { title: "Document assembly + delivery", description: "6-12 page proposal document with executive summary, all sections, references appendix, contract terms. Branded template. PDF delivery with cover email summarizing key points. Follow-up 3-5 days post-delivery to confirm receipt and questions.", duration: "1-2 hours" },
    ],
  }),
  specList({
    heading: "Vending machine proposal section specifications",
    items: [
      { label: "Executive summary — 1 page maximum", value: "Placement positioning (e.g., '200-employee office with high traffic during break periods and peak demand for allergen-restricted formats'), value proposition (modern operator capability + projected revenue + sustainability), key terms (commission structure summary, service SLA, contract length). Decision-makers read the executive summary first; clarity here drives engagement." },
      { label: "Operator capability — substantive, not marketing", value: "Telemetry coverage (100% standard), service SLA (24-48 hour typical), payment stack (EMV + contactless + mobile-wallet), allergen-restricted formats (15-20% of planogram), sustainability spec (ENERGY STAR fleet, low-GWP refrigerant), certifications (PCI-DSS for payment, FDA compliance, OSHA), insurance (general liability + product liability $1M minimum). Specific; not marketing-speak." },
      { label: "Revenue projection — telemetry-driven", value: "Projection based on telemetry data from similar placements in your portfolio. Industry-specific revenue ranges adjusted for placement-specific variables — traffic, audience, current vending, demographic mix. Monthly revenue range, transaction mix, peak / off-peak patterns. Assumptions documented. Generic 'we'll do great' ranges erode credibility." },
      { label: "Commission structure — worked example", value: "Flat % vs tiered vs minimum guarantee + tiered upside. Worked example at projected revenue showing prospect commission revenue. Tiered structures align incentives — operator earns more at higher revenue, prospect earns more at higher revenue. Flat % can produce operator under-investment at lower-traffic placements." },
      { label: "Service SLA — specific numbers", value: "Response time (24-48 hour standard, 4-hour rush available at premium placements), restocking cadence (weekly or telemetry-driven), planogram refresh (quarterly), reporting cadence (monthly per-machine + quarterly business review), emergency contact protocol. Specific SLAs; not vague 'prompt service' language." },
      { label: "Planogram design — placement-type-matched", value: "Office: snack-balanced, beverage emphasis at break areas, allergen-restricted 15-20%. Apartment: family-friendly, broader breadth, premium beverages. Hospital: nutrition-policy-aligned, allergen-restricted prominent. Campus: meal-plan-friendly, sustainability product preference. Construction: hydration emphasis, energy-dense. Retail: hospitality positioning. Airport: traveler-friendly, allergen-prominent." },
      { label: "Sustainability + ESG section", value: "ENERGY STAR fleet spec (all units ENERGY STAR-certified), low-GWP refrigerant (R-290 or similar on refrigerated), recycling bin co-location (within 10 feet of every machine), packaging procurement preference (recyclable / compostable / reduced packaging), quarterly sustainability reporting (energy consumption per machine, refrigerant inventory, recycling diversion). Important for ESG-reporting prospects." },
      { label: "References — 3-5 placement-type-matched", value: "Current accounts in target prospect's placement type. Office prospect → office references; construction prospect → construction references; etc. Generic references nearly worthless; placement-type-matched references drive 30-50% of conversion. Pre-call references; brief them on prospect call. Reference contact information in appendix." },
      { label: "Contract terms — standard + customizations", value: "Length (1-3 years typical), exit provisions (60-90 day notice typical), exclusivity (vending + micro-market + AI cooler wall scope), insurance (general liability + product liability $1M minimum + cyber on payment), dispute resolution (arbitration vs litigation), force majeure, assignment restrictions. Standard template + placement-specific customizations. Engage attorneys at high-stakes contracts." },
    ],
  }),
  tipCards({
    heading: "Six proposal-writing mistakes",
    sub: "Each is documented in operator lost-bid post-mortems. All preventable with structured proposal development.",
    items: [
      { title: "Generic proposal without placement-specific customization", body: "Generic proposals lose to placement-specific 4-to-1. Tailor executive summary, revenue projection, planogram, references, commission structure to placement. Site walk insights feed proposal customization. Boilerplate proposals signal operator under-investment + erode prospect trust." },
      { title: "Revenue projection without telemetry backing", body: "Generic 'we'll do $1,500-2,000 monthly' ranges erode credibility. Telemetry-driven projection based on similar placements in your portfolio. Specific to placement type + audience + traffic. Document assumptions. Prospects calibrate operator credibility on projection specificity." },
      { title: "Generic references not placement-type-matched", body: "Generic references nearly worthless. Placement-type-matched references drive 30-50% of conversion at proposal stage. Office prospect → office references; construction → construction; etc. Pre-call references; brief them on prospect call. Reference quality differential is meaningful." },
      { title: "Marketing-speak in operator capability section", body: "'Industry-leading service' / 'best-in-class technology' / 'unmatched expertise' — all reduce credibility. Specific capability statements: '100% telemetry coverage', '24-48 hour service SLA', '15-20% allergen-restricted planogram share', 'ENERGY STAR fleet'. Substantive content > marketing claims." },
      { title: "No sustainability section for ESG-reporting prospects", body: "Modern offices, campuses, hospitals, large institutional prospects often have ESG reporting requirements. Proposals without sustainability section under-perform vs proposals with. ENERGY STAR fleet, low-GWP refrigerant, recycling co-location, quarterly sustainability reporting. Modern operators have natively." },
      { title: "Skipping post-delivery follow-up", body: "Proposal delivered without follow-up under-performs vs followed-up. 3-5 day post-delivery follow-up to confirm receipt + answer questions. Additional follow-up at 1-2 weeks if no response. Systematic; CRM-tracked. Drop after no-response cycle." },
    ],
  }),
  inlineCta({
    text: "Want the proposal-writing framework (10 sections + telemetry-driven projections + placement-type references)?",
    buttonLabel: "Get the proposal framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator proposal development across office, apartment, hospital, campus, construction, retail, and airport placements — including telemetry-driven revenue projection, commission structure modeling, placement-type-matched reference compilation, and sustainability section development. The proposal frameworks reflect operator-side data on win-rate by proposal quality.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's in a winning vending proposal?", answer: "10 sections: executive summary, operator capability, revenue projection, commission structure, service SLA, planogram, sustainability + ESG, implementation timeline, references, contract terms. Each tailored to placement. Generic proposals lose to placement-specific 4-to-1. Site walk insights feed customization.", audience: "Operators" },
      { question: "How long should a proposal be?", answer: "6-12 pages typical. Executive summary 1 page. Operator capability 1-2 pages. Revenue projection 1-2 pages. Commission + service SLA 1-2 pages. Planogram + sustainability 1-2 pages. Timeline + references 1 page. Contract terms appendix 2-3 pages. Concise; substantive content over volume.", audience: "Operators" },
      { question: "How do we develop a revenue projection?", answer: "Telemetry-driven projection based on similar placements in your portfolio. Industry-specific revenue ranges adjusted for placement-specific variables — traffic, audience, current vending, demographic mix. Monthly revenue range, transaction mix, peak / off-peak patterns. Document assumptions. Generic ranges erode credibility.", audience: "Operators" },
      { question: "What references should we include?", answer: "3-5 placement-type-matched current accounts. Office prospect → office references; construction → construction; campus → campus. Generic references nearly worthless; placement-type-matched references drive 30-50% of conversion at proposal stage. Pre-call references; brief them on prospect call.", audience: "Operators" },
      { question: "Should we include sustainability content?", answer: "Yes, especially for ESG-reporting prospects (modern offices, campuses, hospitals, large institutional). ENERGY STAR fleet spec, low-GWP refrigerant, recycling co-location, packaging procurement preference, quarterly sustainability reporting. Modern operators have natively; legacy operators don't. Differentiator at qualifying prospects.", audience: "Operators" },
      { question: "What commission structure should we propose?", answer: "Tiered structure preferred — operator earns more at higher revenue, prospect earns more at higher revenue. Flat % can produce operator under-investment at lower-traffic placements. Office / apartment / campus 10-15%. Retail / airport 15-25%. Institutional 20-35%. Worked example at projected revenue.", audience: "Operators" },
      { question: "How long does proposal development take?", answer: "8-15 hours typical: site walk 1-2 hours, revenue projection 1-2 hours, commission modeling 1 hour, planogram design 1-2 hours, capability + references 1-2 hours, timeline + sustainability 0.5-1 hour, contract terms 1-2 hours, document assembly + delivery 1-2 hours. Concentrate effort; deliver within 1-2 weeks of site walk.", audience: "Operators" },
      { question: "What about post-delivery follow-up?", answer: "Systematic. 3-5 day post-delivery follow-up to confirm receipt + answer questions. Additional follow-up at 1-2 weeks if no response. CRM-tracked. Drop after no-response cycle (typically 4-6 weeks). Proposal delivered without follow-up under-performs vs followed-up. Conversion benchmark 40-60% proposal to contract at well-developed proposals.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator proposal practice", url: "https://www.namanow.org/", note: "Industry trade association covering operator proposal standards" },
      { label: "FDA — vending machine labeling requirements", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/vending-machine-labeling-requirements", note: "Federal labeling compliance referenced in proposal capability sections" },
      { label: "ADA — vending machine accessibility standards", url: "https://www.ada.gov/", note: "Federal accessibility requirements referenced in proposal compliance" },
      { label: "ENERGY STAR — vending machine certification", url: "https://www.energystar.gov/products/vending_machines", note: "Federal certification referenced in proposal sustainability sections" },
      { label: "PCI Security Standards Council — PCI-DSS", url: "https://www.pcisecuritystandards.org/", note: "Payment-card compliance referenced in proposal capability sections" },
    ],
  }),
  relatedGuides({
    heading: "Related vending sales and proposal guides",
    items: [
      { eyebrow: "Sister guide", title: "How to approach businesses for vending", description: "Pre-qualification, decision-maker targeting, meeting scripts, and follow-up cadence.", href: "/vending-machine-locators/how-to-approach-businesses-for-vending" },
      { eyebrow: "Operations", title: "Questions to ask before accepting a location", description: "Pre-acceptance diligence, walk-away signals, and contract structure.", href: "/vending-machine-locators/questions-to-ask-before-accepting-a-location" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Lead generation, approach, proposal, negotiation, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
