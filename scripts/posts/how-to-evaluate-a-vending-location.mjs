import { seedPost, tldr, timeline, specList, comparisonTable, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-evaluate-a-vending-location", [
  tldr({
    heading: "How should an operator evaluate a vending location before signing?",
    paragraph:
      "Evaluating a vending location is a structured 9-step process, not a vibes check. Effective evaluation: (1) confirm headcount or daily traffic from documented sources (HR roster, gate counts, building management traffic data — not the host's verbal claim); (2) walk the site at peak hour and off-peak to verify traffic patterns; (3) inspect the proposed placement zone for electrical (15A / 20A circuit availability, GFCI per NEC 210.8), floor space (36 inch front clearance per ADA 305), accessibility (reach range 15-48 inches per ADA 308); (4) assess current vending status (legacy operator + uptime + planogram fit); (5) interview the decision-maker on commission expectations, contract length, exit provisions; (6) check building / facility constraints (after-hours access, badge / SIDA requirements, dock access, freight elevator, doorway clearance); (7) run telemetry-driven revenue projection from comparable placements in your fleet; (8) calculate payback period and 24-month NPV at projected revenue + commission; (9) document findings + decision recommendation. Conversion benchmarks: 40-60% of evaluated locations qualify for proposal; remaining fail revenue projection, decision-maker access, or operator-capability fit. Skipping evaluation produces $200-$800 monthly underperformers that drag fleet economics.",
    bullets: [
      { emphasis: "Documented headcount or traffic data, not verbal claims:",
        text: "Host's verbal claim consistently overstates. HR roster, gate counts, building management traffic data, peak-hour site walk. Documented data drives projection accuracy." },
      { emphasis: "Electrical + floor space + accessibility check at site walk:",
        text: "15A / 20A circuit per NEC 210.8 GFCI + 36 inch front clearance per ADA 305 + reach range 15-48 inches per ADA 308. Skip if not feasible." },
      { emphasis: "40-60% of evaluated locations qualify for proposal:",
        text: "Disqualifying 40-60% is healthy. Operators that proposal-everything fill fleet with $200-$800 monthly underperformers; operators that evaluate concentrate on qualifying placements.", },
    ],
  }),
  timeline({
    heading: "How to evaluate a vending location — step-by-step",
    sub: "Nine-step structured evaluation from initial inquiry to documented decision. Each step has acceptance criteria.",
    howToName: "Evaluate a vending location",
    totalTime: "2-5 hours per location across 1-2 site visits",
    steps: [
      { title: "Confirm documented headcount or traffic", description: "Request HR roster (office), property roster (apartment), patient census (hospital), enrollment (campus), passenger count (airport), gate counts (retail). Verify from documented source — not verbal claim. Verbal claim consistently overstates by 20-50%. Documented data drives projection accuracy.", duration: "15-30 minutes" },
      { title: "Walk the site at peak and off-peak", description: "On-site walk during peak hour (lunch, shift change, passing period, boarding window) and off-peak. Verify traffic patterns + congestion + dwell time near proposed placement. Photographs of placement zone. Peak / off-peak ratio informs planogram + service cadence.", duration: "60-90 minutes across 2 visits" },
      { title: "Inspect electrical and floor space", description: "15A / 20A circuit availability + GFCI protection per NEC 210.8. 36 inch front clearance per ADA 305. Floor leveling. Doorway clearance for delivery (typically 32-36 inches minimum). Outlet height + receptacle type. Document deficiencies; skip if not feasible or remediation infeasible.", duration: "20-30 minutes" },
      { title: "Assess accessibility — ADA + ACAA if airport", description: "Reach range 15-48 inches per ADA 308. Tactile labeling + Braille + audio output where applicable. Path of travel from accessible route. Compliance posture critical at federal placements, airports, public buildings, schools. Modern operators audit; document findings.", duration: "15-30 minutes" },
      { title: "Assess current vending status", description: "Legacy operator? Uptime + stockout history + telemetry coverage + reporting cadence + commission rate + contract status. Coordinate with current operator at exit if replacing. Current vending data informs revenue projection + operator transition planning.", duration: "30-60 minutes interview + records review" },
      { title: "Interview decision-maker on commission + contract", description: "Commission expectations (10-30% range typical; placement-type dependent), contract length (1-3 years standard), exit provisions, service SLA expectations, sustainability spec, planogram constraints, RFP / sole-source procurement context. Document.", duration: "30-45 minutes" },
      { title: "Check building / facility constraints", description: "After-hours access protocol (apartment + construction + hospital). SIDA badging (airport). Dock access + freight elevator + doorway clearance for delivery. Insurance + COI requirements. Vendor onboarding process. Building rules + facility coordination.", duration: "30-45 minutes" },
      { title: "Run telemetry-driven revenue projection", description: "Comparable placements in your fleet — same placement type + headcount / traffic bracket + audience demographic. 12-month average + range. Combine with commission structure + service cost + planogram cost-of-goods to project net. NPV at 24 months. Skip if projected NPV below threshold.", duration: "60-90 minutes" },
      { title: "Document findings and decision", description: "Evaluation report: headcount / traffic, site walk findings, electrical + accessibility status, current vending, decision-maker interview, revenue projection + NPV, recommendation (proposal / pass / re-engage). Archive in CRM. Drives future evaluation calibration.", duration: "30-60 minutes" },
    ],
  }),
  specList({
    heading: "Evaluation acceptance criteria by placement type",
    items: [
      { label: "Office — headcount 75+ and footfall density", value: "Headcount 75+ employees at the placement (not company-wide). Confirm from HR roster. Lunch peak density. Decision-maker at facility manager or HR. Modern payment access. Commission 10-15%. Service SLA 24-48 hours. Allergen-restricted formats expected." },
      { label: "Apartment — 75+ units and amenity-grade placement", value: "75+ units at the community (not portfolio). Confirm from property roster. Resident-app integration where available. Decision-maker at property manager. After-hours access. Commission 10-20%. NAA quality scoring + amenity-grade equipment. 24-48 hour service." },
      { label: "Hospital — staff + visitor traffic and HIPAA-aware operator", value: "Staff headcount + daily visitor traffic. Auxiliary services or facility manager decision-maker. Sometimes dietitian for nutrition compliance. HIPAA-aware route crews. Allergen-restricted formats critical. Commission 12-20%. 24-hour service SLA at large hospital systems." },
      { label: "Campus — student enrollment + dining services coordination", value: "Student enrollment + dining services coordination. Decision-maker at dining services or auxiliary services. Allergen-restricted, meal-plan integration, sustainability. Commission 15-25% at major-campus contracts. 24-48 hour service. Section 504 + ADA audit." },
      { label: "Construction — crew size + active phase length", value: "30+ crew at active phase. GC or superintendent decision-maker. Outdoor-rated equipment, anti-tipping, cellular telemetry. After-hours access protocol. Crew-rotation planogram. Commission 8-12% (lower; mobile placement). 6-24 month contract typical." },
      { label: "Retail / mall — footfall density + customer + staff differentiation", value: "Center management or store manager decision-maker. Footfall density at proposed placement (food court entrance, mall entrance, anchor adjacency). Customer-facing vs staff differentiation. Commission 15-20%. AI cooler wall at qualifying central seating. Modern payment + sustainability spec." },
      { label: "Airport — gate-area headcount + concession office", value: "Concession office or procurement decision-maker (typically RFP). Gate-area passenger flow. SIDA badging + ACAA + ADA + Section 504. Modern payment + dietary-restricted 25-35% + ENERGY STAR + low-GWP refrigerant + ACA reporting. Commission 15-20%. 24-hour service SLA." },
      { label: "Federal building — GSA Schedule + Section 508 + AbilityOne", value: "GSA Schedule contract or local agreement. Section 508 accessibility + AbilityOne participation where applicable. ICS-aware operator. Decision-maker at GSA building manager or agency facility. Commission per GSA schedule. Federal vendor onboarding + COI requirements." },
      { label: "Disqualifying criteria — skip placements with these", value: "Headcount / traffic below threshold for placement type. No electrical capacity + remediation infeasible. Accessibility non-feasible (Schedule + cost prohibitive). Decision-maker unreachable + no procurement path. Current operator with iron-clad contract + no renewal window for 12+ months.", },
    ],
  }),
  comparisonTable({
    heading: "Headcount thresholds by placement type",
    sub: "Below threshold typically produces sub-$400 monthly underperformer. Above threshold produces fleet-grade revenue.",
    headers: ["Placement type", "Minimum headcount / traffic", "Sub-threshold revenue", "Above-threshold revenue"],
    rows: [
      ["Office", "75+ employees on-site", "<$400 monthly", "$600-$1.8K monthly"],
      ["Apartment", "75+ units", "<$400 monthly", "$2-6K monthly"],
      ["Hospital", "200+ staff + visitor traffic", "<$500 monthly", "$1-3K monthly"],
      ["Campus dining-adjacent", "1,500+ students", "<$600 monthly", "$1-8K monthly"],
      ["Construction active phase", "30+ crew", "<$600 monthly", "$1-4K monthly"],
      ["Retail / mall high-traffic", "Footfall 8,000+ daily", "<$500 monthly", "$1-5K monthly"],
      ["Airport gate area", "Boarding flow 1,500+ daily", "<$2K monthly", "$3-12K monthly"],
    ],
  }),
  tipCards({
    heading: "Six location-evaluation mistakes",
    sub: "All preventable with documented data + site walk + revenue projection + decision-maker interview.",
    items: [
      { title: "Accepting verbal headcount claims", body: "Host's verbal headcount or traffic claim consistently overstates by 20-50%. Verbal '500 employees' becomes documented 280 on HR roster. Request documented source: HR roster, property roster, patient census, enrollment, gate count. Documented data drives projection accuracy." },
      { title: "Skipping the peak-hour site walk", body: "Off-peak walk misses traffic + congestion + dwell time at proposed placement. Walk at peak (lunch, shift change, passing period, boarding window) and off-peak. Peak / off-peak ratio informs planogram + service cadence. 30 minutes; significant projection improvement." },
      { title: "No electrical or accessibility check", body: "15A / 20A circuit + GFCI per NEC 210.8 + 36 inch front clearance per ADA 305 + reach range 15-48 inches per ADA 308. Skipping the check produces install failures + accessibility complaints + remediation cost after contract signing. 20 minutes; critical." },
      { title: "Generic revenue projection — not placement-comparable", body: "Generic 'average vending machine produces X' projections inaccurate. Use comparable placements in your fleet — same placement type + headcount / traffic bracket + audience demographic. 12-month average + range. Operators without comparable data borrow against bad numbers." },
      { title: "No 24-month NPV calculation", body: "Revenue projection alone insufficient. NPV at 24 months including commission, service cost, planogram cost-of-goods, install + removal cost, expected churn. Skip placements with NPV below threshold. Operators without NPV discipline fill fleet with underperformers." },
      { title: "Not documenting evaluation findings", body: "Verbal + memory-based evaluation degrades quality over time + can't be calibrated. Evaluation report with placement data + findings + projection + decision archived in CRM. Drives future evaluation calibration + post-mortem when placements underperform vs projection.", },
    ],
  }),
  inlineCta({
    text: "Want the location evaluation framework (headcount + site walk + accessibility + projection + NPV)?",
    buttonLabel: "Get the evaluation framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending location evaluation across office, apartment, hospital, campus, construction, retail, airport, and federal placements — including documented-data verification, site-walk methodology, electrical + accessibility inspection, telemetry-driven revenue projection, and NPV-based go / no-go decisions. The benchmarks reflect operator-side evaluation outcomes.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do we evaluate a vending location?", answer: "Nine-step structured process: confirm documented headcount / traffic + peak-hour site walk + electrical + accessibility inspection + current vending status + decision-maker interview + facility constraints + telemetry-driven revenue projection + 24-month NPV + documented findings. 2-5 hours per location across 1-2 site visits.", audience: "Operators" },
      { question: "What headcount is needed?", answer: "Varies by placement type. Office 75+ employees on-site. Apartment 75+ units. Hospital 200+ staff + visitor traffic. Campus 1,500+ students dining-adjacent. Construction 30+ crew active phase. Retail 8,000+ daily footfall. Airport 1,500+ boarding-flow daily. Below threshold produces sub-$400 monthly underperformer.", audience: "Operators" },
      { question: "Why not accept the host's headcount claim?", answer: "Verbal headcount claims consistently overstate by 20-50%. Verbal '500 employees' becomes documented 280 on HR roster. Request documented source: HR roster, property roster, patient census, enrollment, gate count. Documented data drives projection accuracy.", audience: "Operators" },
      { question: "What does the site walk check?", answer: "Traffic patterns at peak + off-peak, congestion, dwell time near proposed placement. Electrical (15A / 20A circuit + GFCI per NEC 210.8). Floor space (36 inch front clearance per ADA 305). Accessibility (reach range 15-48 inches per ADA 308). Doorway clearance for delivery. After-hours access protocol.", audience: "Operators" },
      { question: "How do we project revenue?", answer: "Comparable placements in your fleet — same placement type + headcount / traffic bracket + audience demographic. 12-month average + range. Combine with commission + service cost + planogram cost-of-goods to project net. NPV at 24 months. Generic 'industry average' projections inaccurate.", audience: "Operators" },
      { question: "What's the rejection rate?", answer: "40-60% of evaluated locations should fail evaluation and not advance to proposal. Disqualifying 40-60% is healthy. Operators that proposal-everything fill fleet with $200-$800 monthly underperformers. Operators that evaluate concentrate on qualifying placements.", audience: "Operators" },
      { question: "Should we evaluate federal placements differently?", answer: "Yes — GSA Schedule contract or local agreement, Section 508 accessibility, AbilityOne participation where applicable, ICS-aware operator, federal vendor onboarding + COI requirements. Commission per GSA schedule. Longer evaluation timeline (3-6 months from inquiry to contract typical).", audience: "Federal Operators" },
      { question: "How long does evaluation take?", answer: "2-5 hours per location across 1-2 site visits. 4-12 weeks from initial inquiry to documented decision (faster at small office placements; longer at major-airport / federal / large institutional contracts). Don't compress; evaluation quality drives fleet economics.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator practice", url: "https://www.namanow.org/", note: "Industry trade association covering location evaluation and operator standards" },
      { label: "NEC 210.8 — GFCI protection requirements", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "National Electrical Code GFCI requirements for vending placements" },
      { label: "ADA Accessibility Guidelines 305 / 308", url: "https://www.access-board.gov/ada/", note: "Federal accessibility standards for reach range and front clearance" },
      { label: "FTC — Business Opportunity Rule", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation covering vending placement and operator sales practice" },
      { label: "Vending Times — operator evaluation practice", url: "https://www.vendingtimes.com/", note: "Trade publication covering location evaluation and revenue projection benchmarks" },
    ],
  }),
  relatedGuides({
    heading: "Related vending location evaluation guides",
    items: [
      { eyebrow: "Sister guide", title: "Questions to ask before accepting a location", description: "Decision-maker interview, contract terms, exit provisions, and operator-host alignment.", href: "/vending-machine-locators/questions-to-ask-before-accepting-a-location" },
      { eyebrow: "Operations", title: "Best locations for vending machines", description: "Placement type guidance, headcount thresholds, and revenue benchmarks across vending placements.", href: "/vending-machine-locators/best-locations-for-vending-machines" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Lead generation, evaluation, approach, proposal, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
