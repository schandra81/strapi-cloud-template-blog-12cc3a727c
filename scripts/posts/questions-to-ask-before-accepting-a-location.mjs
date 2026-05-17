import { seedPost, tldr, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("questions-to-ask-before-accepting-a-location", [
  tldr({
    heading: "What questions should a vending operator ask before accepting a new location?",
    paragraph:
      "Accepting an underperforming location erodes operator economics for the contract term. Critical pre-acceptance diligence: (1) traffic and audience — daily foot traffic, employee count, demographic fit; (2) current vending — incumbent operator? performance history? reason for transition?; (3) electrical capacity — 15A or 20A circuits, dedicated where required, NEC compliance; (4) placement zones — high-traffic, ADA-compliant, weather-protected if outdoor; (5) compliance constraints — FDA labeling requirements, ADA accessibility, state-specific food safety, allergen-restricted requirements; (6) commission expectations and structure (flat vs tiered vs minimum guarantee); (7) service access — gate codes, after-hours protocol, CCTV coordination; (8) contract structure — length, exit provisions, exclusivity, sustainability requirements; (9) decision-maker authority — confirm signing authority; (10) reference checks — current operator's experience, other vendors' experience at site. Walk away from placements with: hidden site fees, exclusivity already taken, no electrical capacity, decision-maker without authority, unrealistic commission expectations, or compliance gaps. Saying 'no' to a bad placement protects 1-3 year contract economics.",
    bullets: [
      { emphasis: "Traffic + audience + electrical + compliance:", text: "Pre-acceptance diligence covers traffic, audience demographics, electrical capacity, ADA / FDA / state compliance. Skipping diligence produces under-performing contracts." },
      { emphasis: "Walk away from bad placements:", text: "Hidden site fees, exclusivity already taken, no electrical capacity, decision-maker without authority — all walk-away signals. Saying 'no' protects 1-3 year contract economics." },
      { emphasis: "Reference check the location:", text: "Current operator's experience, other vendors' experience at site. Locations with consistent vendor turnover signal underlying problems (low traffic, payment delays, access issues, security)." },
    ],
  }),
  specList({
    heading: "Pre-acceptance question checklist",
    items: [
      { label: "Traffic and audience verification", value: "How many employees / residents / daily visitors? What's the demographic mix? What's the audience purchasing pattern (snack-heavy / beverage-heavy / fresh-food-friendly)? Verify counts against published placement-type benchmarks — office $600-1.8K monthly per machine, apartment $2-6K per placement, hospital $400-1.5K, etc." },
      { label: "Current vending status", value: "Is there an incumbent operator? What's their performance history? Why is the placement transitioning? Common reasons: legacy operator underperformance (typical), commission renegotiation failure, service quality issues, equipment age, sustainability requirements added. Reason matters for operator approach." },
      { label: "Electrical capacity assessment", value: "What's the available circuit (15A / 20A)? Dedicated or shared? Distance to placement zone (extension cords prohibited per NEC)? Refrigerated equipment may require dedicated 20A. AI cooler walls require dedicated 20A + Ethernet. Verify electrical at site walk; don't rely on prospect description." },
      { label: "Placement zone evaluation", value: "Is the proposed zone high-traffic or back-of-site? ADA-compliant (40\" or 48\" forward reach, 54\" side reach)? Weather-protected if outdoor? Accessible for service routes (forklift / hand truck access)? Avoid: stairwells, dead-space corners, areas requiring stair climbing for service." },
      { label: "Compliance constraints", value: "FDA front-of-pack labeling required (vending machine operators 20+ machines). ADA accessibility required. State-specific food safety (sandwich / fresh food regulations vary). Allergen-restricted requirements if applicable (school / hospital / dietary-restricted population). Verify operator capability matches compliance constraints." },
      { label: "Commission structure expectations", value: "What commission rate does prospect expect? Flat % vs tiered vs minimum guarantee + tiered upside. Office / apartment / campus 10-15% typical. Retail / airport 15-25%. Institutional 20-35%. Unrealistic expectations (40%+ at office) signal misaligned prospect or unprofitable placement." },
      { label: "Service access protocol", value: "Gate codes, after-hours protocol, CCTV coordination, security escort requirements. Construction sites + secure facilities have restricted access; verify access workflow at install. Build into operator service contract. Inaccessible placements produce service SLA failures and contract penalties." },
      { label: "Contract structure preferences", value: "Length (1-3 years typical), exit provisions (60-90 day notice typical), exclusivity (does operator have exclusive vending rights? what about adjacent micro-markets or AI cooler walls?), sustainability requirements (ENERGY STAR, recycling co-location), reporting cadence. Specify before signing." },
      { label: "Decision-maker authority verification", value: "Confirm signing authority. Office: facility manager often needs HR / finance approval. Apartment: property manager may need owner approval. Hospital: auxiliary services may need procurement approval. Pitching to non-decision-makers produces wasted time + lost bids. Verify authority before proposal." },
      { label: "Reference checks on the location", value: "Talk to current operator (if transitioning) and other vendors at site. Locations with consistent vendor turnover signal underlying problems — low traffic, payment delays from prospect, access issues, security. Skip turnover-prone placements. Stable placements with single long-term vendor signal quality." },
    ],
  }),
  tipCards({
    heading: "Five pre-acceptance walk-away signals",
    sub: "Each is documented in operator contract post-mortems. Walking away from these placements protects contract economics.",
    items: [
      { title: "Hidden site fees beyond commission", body: "Site fee paid by operator (annual lump sum or per-machine monthly) on top of commission is typically a red flag. Common at retail / mall / airport but should be in published RFP. Hidden site fees discovered at contract negotiation signal opaque prospect; walk away or restructure deal." },
      { title: "Exclusivity already taken or not granted", body: "Prospect indicates incumbent operator retains exclusive rights to vending while new operator handles micro-market or AI cooler wall. Splits compete; operator earns less; service complexity increases. Either get full exclusivity or walk away." },
      { title: "No electrical capacity at proposed placement zone", body: "Without dedicated 15A / 20A circuit, modern vending operations impossible. Refrigerated equipment requires dedicated 20A. AI cooler walls require dedicated 20A + Ethernet. Prospect indication of 'we'll get electrical installed eventually' is a walk-away signal — verify electrical at site walk or skip the placement." },
      { title: "Decision-maker without signing authority", body: "Pitching to facility manager who needs HR + finance approval, property manager who needs owner approval, or auxiliary services who needs procurement approval — and prospect won't escalate. Verify authority before proposal development. Pitching to non-decision-makers produces wasted time + lost bids." },
      { title: "Unrealistic commission expectations", body: "40%+ commission at office, 30%+ at small apartment, 50%+ at small construction — these are unprofitable for operator at typical placement economics. Reset expectations or walk away. Aggressive commission combined with placement-specific revenue verification produces compliance check on prospect expectations." },
    ],
  }),
  decisionTree({
    heading: "Should you accept this vending location?",
    question: "Does the placement clear all critical diligence — traffic verified, electrical adequate, decision-maker authorized, commission realistic, no hidden site fees, exclusivity full, compliance achievable?",
    yesBranch: {
      title: "Yes — accept the placement",
      description: "Placement clears critical diligence. Develop proposal with telemetry-driven revenue projection, commission structure matching expectations, service SLA, sustainability spec, contract length, exit provisions. Reference checks at prospect option. Signed contract → install → first business review at 30-60 days.",
      finalTone: "go",
      finalLabel: "Accept and propose",
    },
    noBranch: {
      title: "No — walk away or restructure",
      description: "Placement has critical diligence failure. Walk away to protect contract economics, or restructure deal to address failure (e.g., split exclusivity, site fee waiver, electrical install before signing, commission reset). Don't accept placements with unaddressed diligence failures; 1-3 year contract economics at stake.",
      finalTone: "stop",
      finalLabel: "Walk away or restructure",
    },
  }),
  inlineCta({
    text: "Want the pre-acceptance diligence framework (traffic + electrical + compliance + commission + walk-away signals)?",
    buttonLabel: "Get the diligence framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator pre-acceptance diligence across office, apartment, hospital, campus, construction, retail, and airport placements — including traffic verification, electrical assessment, compliance review, commission structure analysis, and walk-away signal identification. The diligence frameworks reflect operator-side data on contract performance by diligence quality.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What questions should we ask before accepting a vending location?", answer: "Traffic + audience, current vending status, electrical capacity, placement zones, compliance constraints, commission expectations, service access protocol, contract structure, decision-maker authority, location reference checks. Pre-acceptance diligence protects 1-3 year contract economics. Skipping diligence produces underperforming contracts.", audience: "Operators" },
      { question: "What are walk-away signals?", answer: "Hidden site fees beyond commission, exclusivity already taken, no electrical capacity at proposed zone, decision-maker without signing authority, unrealistic commission expectations (40%+ at office, 30%+ at small apartment). Locations with consistent vendor turnover also signal underlying problems. Walk away to protect contract economics.", audience: "Operators" },
      { question: "How do we verify traffic?", answer: "Ask employee count / resident count / daily visitor count. Compare to published placement-type revenue benchmarks — office $600-1.8K per machine, apartment $2-6K per placement, hospital $400-1.5K, retail $1-5K, airport $3-12K per machine. Verify counts against multiple sources — HR, property management, public filings.", audience: "Operators" },
      { question: "What electrical capacity do we need?", answer: "15A circuits for standard machines, 20A for refrigerated, dedicated 20A + Ethernet for AI cooler walls. NEC governs (extension cords prohibited). Verify electrical at site walk; don't rely on prospect description. Inadequate electrical produces installation failures or operational issues. Walk away if electrical can't be confirmed.", audience: "Operators" },
      { question: "How do we evaluate commission expectations?", answer: "Office / apartment / campus 10-15% typical. Retail / airport 15-25%. Institutional 20-35%. Unrealistic expectations (40%+ at office, 30%+ at small apartment) signal misaligned prospect or unprofitable placement. Reset expectations or walk away. Aggressive commission combined with low traffic produces operator-loss contracts.", audience: "Operators" },
      { question: "Should we accept exclusive vs non-exclusive contracts?", answer: "Full exclusivity preferred — operator has exclusive vending + micro-market + AI cooler wall rights at site. Split exclusivity (e.g., vending to operator A, micro-market to operator B) produces competing operators, lower per-operator revenue, increased service complexity. Get full exclusivity or walk away.", audience: "Operators" },
      { question: "How do we verify decision-maker authority?", answer: "Office: facility manager often needs HR / finance approval. Apartment: property manager may need owner approval. Hospital: auxiliary services may need procurement approval. Confirm signing authority before proposal development. Ask 'who else needs to sign?' Pitching to non-authorized decision-makers produces wasted time + lost bids.", audience: "Operators" },
      { question: "Should we reference-check the location itself?", answer: "Yes. Talk to current operator (if transitioning) and other vendors at site (cleaning, food service, etc.). Locations with consistent vendor turnover signal underlying problems — low traffic, payment delays from prospect, access issues, security. Skip turnover-prone placements. Stable placements with single long-term vendor signal quality.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator contract practice", url: "https://www.namanow.org/", note: "Industry trade association covering operator contract standards" },
      { label: "FDA — vending machine labeling requirements", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/vending-machine-labeling-requirements", note: "Federal labeling compliance for vending operators 20+ machines" },
      { label: "ADA — vending machine accessibility standards", url: "https://www.ada.gov/", note: "Federal accessibility requirements for vending placements" },
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing vending placements" },
      { label: "FTC — Business Opportunity Rule", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing locator-supplied placements" },
    ],
  }),
  relatedGuides({
    heading: "Related operator diligence and contract guides",
    items: [
      { eyebrow: "Sister guide", title: "How to approach businesses for vending", description: "Pre-qualification, decision-maker targeting, meeting scripts, and follow-up cadence.", href: "/vending-machine-locators/how-to-approach-businesses-for-vending" },
      { eyebrow: "Operations", title: "How to write a vending machine proposal", description: "Proposal structure, revenue projection, commission, service SLA, and exit provisions.", href: "/vending-machine-locators/how-to-write-a-vending-machine-proposal" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Lead generation, pre-acceptance diligence, proposal, negotiation, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
