import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, costBreakdown, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("preventative-maintenance-manufacturing-vending", [
  tldr({
    heading: "How does preventative maintenance work for manufacturing vending — and what cadence sustains 24/7 industrial duty cycle?",
    paragraph:
      "Preventative maintenance for manufacturing vending is fundamentally different from office vending maintenance because manufacturing facilities run 24/7/365 industrial duty cycles with dust, vibration, temperature swing, and continuous demand that fatigue consumer-grade equipment within 18-24 months. Preventative maintenance discipline at manufacturing placements spans four cadences: (1) weekly inspections during restock visits — visual check of coil mechanisms, payment terminal cleaning, dust filter check on refrigeration units, signage and lighting inspection, telemetry-data sanity check; (2) monthly preventive service — refrigeration coil cleaning, condenser fan inspection, door seal inspection, payment terminal deep-clean, coil mechanism lubrication, software/firmware patch check; (3) quarterly comprehensive PM — refrigeration system pressure check, compressor amperage measurement, coil mechanism teardown and rebuild of high-wear components, payment terminal calibration, telemetry signal verification with antenna check, ENERGY STAR specification compliance audit; (4) annual major service — full refrigeration system inspection by certified HVAC tech, compressor replacement scheduling at 7-year mark for heavy-duty industrial equipment, complete coil mechanism rebuild, payment terminal upgrade where firmware obsolescence applies, telemetry hardware refresh, equipment lifecycle review. Manufacturing facilities specify heavy-duty industrial-rated equipment (Crane National 187/188, AMS 39 Sensit, Royal Vendors 660/804) with 7-10 year lifecycle vs consumer-grade office equipment that fatigues at 24/7 duty within 18-24 months. PM cadence runs 30-50% higher cost than office baseline but extends equipment lifecycle 3-5x, reducing replacement capital and downtime substantially. Telemetry-driven PM (anomaly detection, refrigeration drift, coil-mechanism fault prediction) shifts maintenance from reactive to proactive, reducing mean-time-between-failure 40-60% at well-instrumented placements. Service contract specifies 24-hour ticket response (vs office 48-72h) and emergency response within 4-8 hours for refrigeration failure or complete equipment failure.",
    bullets: [
      { emphasis: "Four PM cadences at manufacturing placements:",
        text: "Weekly inspection during restock, monthly preventive service, quarterly comprehensive PM, annual major service. Each cadence sustains heavy-duty industrial equipment at 24/7 duty cycle." },
      { emphasis: "Heavy-duty industrial equipment lifecycle 7-10 years:",
        text: "vs consumer-grade office equipment 18-24 months at 24/7 duty. PM cadence 30-50% higher cost than office baseline but extends lifecycle 3-5x. Replacement capital and downtime reduction substantial." },
      { emphasis: "Telemetry-driven PM shifts reactive to proactive:",
        text: "Anomaly detection, refrigeration drift, coil-mechanism fault prediction reduce mean-time-between-failure 40-60% at well-instrumented placements. 24-hour service ticket response vs office 48-72h." },
    ],
  }),
  statStrip({
    heading: "Manufacturing vending preventative maintenance benchmarks",
    stats: [
      { number: "7-10 yr", label: "industrial equipment lifecycle", sub: "vs office 18-24 mo consumer-grade", accent: "blue" },
      { number: "24 hr", label: "service ticket response SLA", sub: "vs office 48-72h", accent: "blue" },
      { number: "40-60%", label: "MTBF reduction with telemetry PM", sub: "anomaly detection + drift alerts", accent: "green" },
      { number: "30-50%", label: "higher PM cost vs office", sub: "but 3-5x lifecycle extension", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Office vending PM vs manufacturing vending PM",
    sub: "Four PM cadences scaled for 24/7 industrial duty cycle. Manufacturing PM cost 30-50% higher than office but lifecycle 3-5x longer.",
    headers: ["PM dimension", "Office vending", "Manufacturing vending", "Why it matters"],
    rows: [
      ["Duty cycle", "40 hours/week active", "24/7/365 industrial duty", "Higher fatigue rate at manufacturing"],
      ["Equipment lifecycle", "5-7 years consumer-grade", "7-10 years industrial-rated", "Different equipment specification"],
      ["Service ticket response SLA", "48-72 hours", "24 hours", "Night-shift cannot wait for office support"],
      ["Emergency response (refrigeration / total failure)", "Next business day", "4-8 hours", "24/7 shift-work demands proactive recovery"],
      ["Weekly inspection during restock", "Visual check basic", "Coil + payment + dust filter + telemetry sanity", "Industrial environment requires more inspection"],
      ["Monthly preventive service", "Quarterly typical", "Monthly mandatory", "Continuous duty fatigues components faster"],
      ["Quarterly comprehensive PM", "Annual typical", "Quarterly mandatory", "Industrial environment + 24/7 duty cycle"],
      ["Annual major service", "Optional", "Mandatory with HVAC tech", "Refrigeration system maintenance critical"],
      ["Telemetry-driven PM", "Optional", "Mandatory for proactive maintenance", "40-60% MTBF reduction at well-instrumented sites"],
      ["Compressor replacement schedule", "Not typical", "7-year mark for heavy-duty industrial", "Refrigeration system lifecycle planning"],
    ],
  }),
  timeline({
    heading: "Manufacturing vending PM cadence playbook",
    sub: "Four PM cadences across weekly, monthly, quarterly, and annual schedule. Each cadence sustains heavy-duty industrial equipment at 24/7 duty cycle.",
    howToName: "How to run preventative maintenance for manufacturing vending",
    totalTime: "P365D",
    steps: [
      { label: "WEEKLY", title: "Inspection during restock visit", description: "Route driver inspection during 2-3x/week restock visit. Visual check of coil mechanisms for binding or wear, payment terminal cleaning, dust filter check on refrigeration units (industrial environment loads filters fast), signage and lighting inspection, telemetry-data sanity check (transactions, refrigeration temperature, anomaly flags). Weekly inspection catches developing issues before they trigger service tickets." },
      { label: "MONTHLY", title: "Preventive service visit", description: "Monthly preventive service by route tech. Refrigeration coil cleaning (industrial dust accumulation on condenser coils reduces efficiency 15-30% at unmaintained units), condenser fan inspection and bearing check, door seal inspection (worn seals increase refrigeration load), payment terminal deep-clean with isopropyl, coil mechanism lubrication at high-wear points, software/firmware patch check on telemetry and payment systems. Monthly cadence mandatory at 24/7 manufacturing duty." },
      { label: "QUARTERLY", title: "Comprehensive PM visit", description: "Quarterly comprehensive PM by senior tech. Refrigeration system pressure check with manifold gauge, compressor amperage measurement (rising amperage flags developing failure), coil mechanism teardown and rebuild of high-wear components (motor brushes, drop bars, helix springs), payment terminal calibration and EMV certification verification, telemetry signal verification with antenna check and signal strength measurement, ENERGY STAR specification compliance audit at refrigerated units." },
      { label: "ANNUALLY", title: "Major service by certified HVAC tech", description: "Annual major service with certified HVAC technician on refrigerated units. Full refrigeration system inspection (pressure, temperature, superheat, subcooling), compressor replacement scheduling at 7-year mark for heavy-duty industrial equipment, complete coil mechanism rebuild on high-utilization machines, payment terminal upgrade where firmware obsolescence applies (EMV certification expiration, OS end-of-life), telemetry hardware refresh on aging units, equipment lifecycle review with facility manager." },
      { label: "EVENT-DRIVEN", title: "Telemetry-driven proactive maintenance", description: "Telemetry anomaly detection triggers proactive maintenance dispatch. Refrigeration drift >5°F triggers service ticket within 2 hours. Compressor amperage anomaly flags scheduled inspection within 24 hours. Coil mechanism fault prediction (based on cycle counts and torque signature) triggers preventive rebuild before failure. Payment terminal communication failure triggers immediate dispatch. Anomaly-driven PM reduces MTBF 40-60% at well-instrumented placements." },
      { label: "EMERGENCY", title: "Emergency response within 4-8 hours", description: "Refrigeration failure (compressor failure, leak, complete cooling loss), complete equipment failure, or payment system failure trigger emergency response within 4-8 hours at manufacturing placements. Operator dispatches senior tech with parts inventory. Temporary spare-equipment swap at extended-repair situations. Emergency response performance tracked monthly against SLA." },
      { label: "LIFECYCLE", title: "Equipment refresh and replacement", description: "Industrial-rated heavy-duty equipment 7-10 year lifecycle planning. Compressor replacement at 7-year mark on refrigerated units. Complete equipment replacement at 10-year mark or earlier where utilization or environment justify. Lifecycle refresh coordinated with ENERGY STAR specification update (DOE successive rulemaking efficiency tightening). Facility manager + operator + EHS coordinate refresh schedule." },
    ],
  }),
  costBreakdown({
    heading: "Annual PM cost across 10-machine manufacturing deployment",
    sub: "Annual preventative maintenance cost across a 10-machine refrigerated and snack vending deployment at a manufacturing facility running 24/7 three-shift operation. Cost typically bundled into operator service contract.",
    items: [
      { label: "Weekly inspection during restock (52 visits × 10 machines)", amount: "$0", range: "Bundled into restock visit; no incremental cost" },
      { label: "Monthly preventive service (12 visits × 10 machines)", amount: "$3,600", range: "$30 per machine per month at industrial duty" },
      { label: "Quarterly comprehensive PM (4 visits × 10 machines)", amount: "$2,800", range: "$70 per machine per quarter; senior tech" },
      { label: "Annual major service with HVAC tech (1 visit × 10 machines)", amount: "$2,200", range: "$220 per machine; HVAC + EMV + lifecycle review" },
      { label: "Telemetry-driven proactive PM (event-driven dispatches)", amount: "$1,800", range: "Dispatches reduce reactive emergency cost" },
      { label: "Emergency response capacity (4-8 hour SLA at 10 machines)", amount: "$1,200", range: "Operator service contract capacity allocation" },
      { label: "Compressor replacement reserve (7-year mark amortized annually)", amount: "$2,400", range: "Lifecycle planning reserve" },
    ],
    totalLabel: "Total annual PM cost across 10-machine manufacturing deployment",
    totalAmount: "~$14,000 ($1,400 per machine annually)",
  }),
  specList({
    heading: "Manufacturing vending PM program specifications",
    items: [
      { label: "Heavy-duty industrial-rated equipment specification", value: "Industrial-rated equipment (Crane National 187/188, AMS 39 Sensit, Royal Vendors 660/804) with reinforced delivery mechanisms, industrial-rated refrigeration, IP-rated payment terminals (industrial dust/humidity tolerance), 7-10 year lifecycle. Consumer-grade office equipment fatigues at 24/7 duty within 18-24 months. Specification mandatory at manufacturing placements; legacy consumer equipment fails preventive maintenance economics." },
      { label: "Weekly inspection during restock visit", value: "Route driver visual check of coil mechanisms for binding or wear, payment terminal cleaning, dust filter check on refrigeration units, signage and lighting inspection, telemetry-data sanity check. Catches developing issues before service tickets. Weekly cadence aligned with 2-3x/week restock cadence at 24/7 manufacturing placements." },
      { label: "Monthly preventive service visit", value: "Route tech monthly visit. Refrigeration coil cleaning (industrial dust accumulation), condenser fan inspection, door seal inspection, payment terminal deep-clean, coil mechanism lubrication, software/firmware patch check on telemetry and payment systems. Monthly cadence mandatory at 24/7 manufacturing duty. Service log filed in operator CMMS." },
      { label: "Quarterly comprehensive PM visit", value: "Senior tech quarterly visit. Refrigeration system pressure check, compressor amperage measurement, coil mechanism teardown and rebuild, payment terminal calibration, telemetry signal verification, ENERGY STAR specification compliance audit. Service log feeds equipment health database for lifecycle planning. Quarterly cadence required at manufacturing duty." },
      { label: "Annual major service with certified HVAC tech", value: "Certified HVAC technician annual service on refrigerated units. Full refrigeration system inspection (pressure, temperature, superheat, subcooling), compressor replacement scheduling at 7-year mark, complete coil mechanism rebuild on high-utilization machines, payment terminal upgrade where firmware obsolescence applies, telemetry hardware refresh, equipment lifecycle review with facility manager. EPA Section 608 certified tech mandatory for refrigerant handling." },
      { label: "Telemetry-driven proactive PM", value: "Cellular telemetry (Cantaloupe, Nayax, 365 ADM) with anomaly detection. Refrigeration drift >5°F triggers service ticket within 2 hours. Compressor amperage anomaly flags scheduled inspection within 24 hours. Coil mechanism fault prediction triggers preventive rebuild before failure. Payment terminal communication failure triggers immediate dispatch. 40-60% MTBF reduction at well-instrumented placements." },
      { label: "24-hour service ticket response SLA", value: "Service contract specifies 24-hour ticket response at manufacturing placements (vs office 48-72h). Night-shift workers reporting equipment failures at 2am cannot wait for next-business-day office support. Operator dispatches route tech or service tech within 24 hours. Service ticket response performance tracked monthly against SLA." },
      { label: "Emergency response within 4-8 hours", value: "Refrigeration failure, complete equipment failure, or payment system failure trigger emergency response within 4-8 hours at manufacturing placements. Operator dispatches senior tech with parts inventory. Temporary spare-equipment swap at extended-repair situations. Emergency response performance tracked monthly against SLA. Operator must staff service routes for 24/7 emergency dispatch capability." },
      { label: "Compressor and lifecycle replacement schedule", value: "Compressor replacement at 7-year mark on heavy-duty industrial refrigerated equipment. Complete equipment replacement at 10-year mark or earlier where utilization or environment justify. Lifecycle refresh coordinated with ENERGY STAR specification update (DOE successive rulemaking efficiency tightening). Capital reserve typically $2,400/machine annually amortized across 10-year cycle." },
      { label: "Monthly PM reporting to facility manager", value: "Operator monthly PM report to facility manager covers per-machine PM completion status, refrigeration temperature compliance, service ticket response performance against SLA, emergency response performance, telemetry-driven proactive PM actions, equipment health trends, compressor amperage trends, coil mechanism wear status. Quarterly review with facility manager + EHS + operator." },
    ],
  }),
  decisionTree({
    heading: "Is your manufacturing vending PM cadence sustaining 24/7 industrial duty?",
    question: "Does your vending program run weekly inspection during restock, monthly preventive service, quarterly comprehensive PM, annual major service with certified HVAC tech, telemetry-driven proactive maintenance, 24-hour service ticket response SLA, and 4-8 hour emergency response capability?",
    yesBranch: {
      title: "Manufacturing PM structured for 24/7 duty cycle",
      description: "PM cadence sustains heavy-duty industrial equipment lifecycle 7-10 years. Verify telemetry-driven proactive PM is generating action (refrigeration drift alerts, compressor amperage anomalies, coil-mechanism fault prediction). Compressor replacement reserve in lifecycle planning. Monthly PM reporting to facility manager. Quarterly review with facility manager + EHS + operator. Equipment refresh coordinated with ENERGY STAR specification update.",
      finalTone: "go",
      finalLabel: "Structured PM",
    },
    noBranch: {
      title: "Office-grade PM cadence — restructure for manufacturing duty",
      description: "Office-grade PM cadence (quarterly typical, 48-72h response, no telemetry-driven PM) fails at 24/7 manufacturing duty. Equipment fatigues at consumer-grade lifecycle 18-24 months. Restructure: weekly inspection during restock, monthly preventive service, quarterly comprehensive PM, annual major service with HVAC tech, telemetry-driven proactive PM, 24-hour service ticket response SLA, 4-8 hour emergency response. Heavy-duty industrial equipment specification mandatory.",
      finalTone: "stop",
      finalLabel: "Restructure",
    },
  }),
  caseStudy({
    tag: "Capability scenario · 500-employee 24/7 manufacturing facility",
    title: "Telemetry-driven proactive PM at a 500-employee 24/7 manufacturing facility",
    context: "Capability description for a 500-employee precision manufacturing facility operating 24/7 three-shift schedule with 12 heavy-duty industrial-rated vending machines (8 refrigerated beverage + 2 snack + 2 fresh-food refrigerated) across 3 breakrooms. PM cadence runs weekly inspection during 2-3x/week restock, monthly preventive service, quarterly comprehensive PM, annual major service with EPA Section 608 certified HVAC tech. Cellular telemetry with anomaly detection drives proactive dispatch reducing MTBF substantially.",
    meta: [
      { label: "Headcount", value: "500 across three shifts, 24/7 operation" },
      { label: "Equipment", value: "12 industrial-rated machines, 7-10 year lifecycle" },
      { label: "Service SLA", value: "24-hour ticket response, 4-8 hour emergency" },
      { label: "PM cadence", value: "Weekly + monthly + quarterly + annual" },
      { label: "Telemetry", value: "100% cellular with anomaly detection" },
    ],
    results: [
      { number: "≥97%", label: "equipment uptime SLA target" },
      { number: "40-60%", label: "MTBF reduction with telemetry PM" },
      { number: "7-10 yr", label: "industrial equipment lifecycle" },
      { number: "$1,400", label: "annual PM cost per machine" },
    ],
  }),
  tipCards({
    heading: "Five manufacturing vending PM mistakes",
    sub: "Documented in facility post-implementation reviews and equipment failure analyses. All preventable with appropriate PM cadence and operator capability verification.",
    items: [
      { title: "Consumer-grade equipment at 24/7 manufacturing duty", body: "Consumer-grade office equipment (Crane Merchant 4, AMS 35) and consumer payment terminals fatigue at 24/7/365 industrial duty cycle within 18-24 months. Specify heavy-duty industrial-rated equipment (Crane 187/188, AMS 39 Sensit, Royal Vendors 660/804, IP-rated payment terminals) with 7-10 year lifecycle. Equipment specification matters as much as PM cadence." },
      { title: "Office-grade quarterly PM cadence at manufacturing", body: "Quarterly PM cadence typical at office placements fails at 24/7 manufacturing duty. Continuous demand and industrial environment fatigue components faster. Monthly preventive service mandatory at manufacturing placements. Quarterly comprehensive PM with senior tech. Annual major service with certified HVAC tech. PM cost 30-50% higher than office baseline but extends lifecycle 3-5x." },
      { title: "Skipping telemetry-driven proactive PM", body: "Reactive PM (responding to failures) costs 3-5x more than proactive PM (responding to anomaly alerts). Cellular telemetry with anomaly detection — refrigeration drift, compressor amperage anomaly, coil-mechanism fault prediction — drives proactive dispatch reducing MTBF 40-60% at well-instrumented placements. Operators without telemetry-driven PM capability struggle at manufacturing duty cycle." },
      { title: "No EPA Section 608 certified tech for refrigerant work", body: "Refrigerant handling at refrigerated vending units requires EPA Section 608 certified technician (federal regulation). Annual major service inspection, compressor replacement, leak repair require certified tech. Operators relying on uncertified techs for refrigerant work expose facility to regulatory compliance risk. Verify Section 608 certification at operator capability check." },
      { title: "No compressor lifecycle replacement reserve", body: "Compressor replacement at 7-year mark on heavy-duty industrial refrigerated equipment. Without lifecycle reserve in capital planning, compressor failure at year 7-8 produces capital shock and downtime. Capital reserve typically $2,400/machine annually amortized across 10-year cycle. Coordinate lifecycle refresh with ENERGY STAR specification update at successive DOE rulemaking." },
    ],
  }),
  inlineCta({
    text: "Want the manufacturing vending PM playbook — weekly inspection, monthly preventive, quarterly comprehensive, annual major service, telemetry-driven proactive PM, and lifecycle planning?",
    buttonLabel: "Get the manufacturing PM playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help manufacturing facilities specify preventative maintenance programs across four cadences from weekly inspection to monthly preventive service to quarterly comprehensive PM to annual major service with EPA Section 608 certified HVAC technician, telemetry-driven proactive PM with anomaly detection and compressor amperage trending and coil-mechanism fault prediction, heavy-duty industrial-rated equipment specification with 7-10 year lifecycle, 24-hour service ticket response SLA and 4-8 hour emergency response capability, compressor lifecycle replacement reserve planning, and monthly PM reporting to facility manager. The benchmarks reflect operator-side data and EHS / facility management input.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How often should manufacturing vending be serviced?", answer: "Four PM cadences: weekly inspection during 2-3x/week restock visit, monthly preventive service by route tech, quarterly comprehensive PM by senior tech, annual major service with EPA Section 608 certified HVAC tech. PM cadence 30-50% higher than office baseline but extends heavy-duty industrial equipment lifecycle 3-5x to 7-10 years.", audience: "Operations" },
      { question: "What equipment should manufacturing facilities specify?", answer: "Heavy-duty industrial-rated equipment (Crane National 187/188, AMS 39 Sensit, Royal Vendors 660/804) with reinforced delivery mechanisms, industrial-rated refrigeration, IP-rated payment terminals (industrial dust/humidity tolerance), 7-10 year lifecycle. Consumer-grade office equipment fatigues at 24/7 duty within 18-24 months. Specification mandatory at manufacturing placements.", audience: "Procurement" },
      { question: "What's the service ticket response SLA?", answer: "24-hour ticket response at manufacturing placements (vs office 48-72h). Emergency response within 4-8 hours for refrigeration failure, complete equipment failure, or payment system failure. Operator must staff service routes for 24/7 emergency dispatch capability. Service ticket response performance tracked monthly against SLA.", audience: "Operations" },
      { question: "How does telemetry-driven PM work?", answer: "Cellular telemetry (Cantaloupe, Nayax, 365 ADM) with anomaly detection. Refrigeration drift >5°F triggers service ticket within 2 hours. Compressor amperage anomaly flags scheduled inspection within 24 hours. Coil mechanism fault prediction triggers preventive rebuild before failure. Payment terminal communication failure triggers immediate dispatch. 40-60% MTBF reduction at well-instrumented placements.", audience: "Facility Managers" },
      { question: "Do we need EPA-certified techs?", answer: "Yes. Refrigerant handling at refrigerated vending units requires EPA Section 608 certified technician (federal regulation). Annual major service inspection, compressor replacement, leak repair require certified tech. Verify Section 608 certification at operator capability check. Operators relying on uncertified techs for refrigerant work expose facility to regulatory compliance risk.", audience: "Compliance" },
      { question: "When does compressor replacement happen?", answer: "Compressor replacement at 7-year mark on heavy-duty industrial refrigerated equipment. Lifecycle replacement reserve typically $2,400/machine annually amortized across 10-year cycle. Coordinate lifecycle refresh with ENERGY STAR specification update at successive DOE rulemaking efficiency tightening. Capital planning reserve avoids capital shock and downtime at year 7-8.", audience: "CFOs" },
      { question: "What does manufacturing PM cost?", answer: "Annual PM cost across 10-machine deployment ~$14,000 ($1,400 per machine annually) covering monthly preventive service, quarterly comprehensive PM, annual major service with HVAC tech, telemetry-driven proactive PM, emergency response capacity, compressor replacement reserve. 30-50% higher than office baseline but extends lifecycle 3-5x. PM economics favor heavy-duty industrial equipment substantially.", audience: "CFOs" },
      { question: "How do we evaluate operator PM capability?", answer: "Verify operator service route structured for 24-hour response SLA and 4-8 hour emergency response. EPA Section 608 certified HVAC technician on staff or under contract. Cellular telemetry with anomaly detection capability. Monthly PM reporting cadence to facility manager. Heavy-duty industrial-rated equipment specification capability. Reference customer with manufacturing experience. Operators staffed for office-style PM cannot serve manufacturing duty cycle.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "EPA Section 608 — Refrigerant Recovery and Recycling Certification", url: "https://www.epa.gov/section608", note: "Federal certification required for refrigerant handling at refrigerated vending units" },
      { label: "DOE — Refrigerated Beverage Vending Machine Energy Conservation Standards", url: "https://www.energy.gov/eere/buildings/refrigerated-beverage-vending-machines", note: "Federal efficiency standards informing equipment lifecycle and ENERGY STAR refresh" },
      { label: "OSHA — Manufacturing Workplace Safety Guidelines", url: "https://www.osha.gov/manufacturing", note: "Federal workplace safety guidance for manufacturing facilities and vending operations" },
      { label: "ASHRAE — Refrigeration Standards and Best Practices", url: "https://www.ashrae.org/", note: "Industry refrigeration standards informing PM cadence and HVAC technician training" },
      { label: "NAMA — National Automatic Merchandising Association — manufacturing vending operations", url: "https://www.namanow.org/", note: "Industry association guidance on manufacturing vending PM and operator practice" },
    ],
  }),
  relatedGuides({
    heading: "Related manufacturing vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Energy-efficient vending for manufacturing", description: "ENERGY STAR specification, R-290 refrigerant, LED retrofit, sleep-mode programming, and scope 2 reporting.", href: "/vending-for-manufacturing-companies/energy-efficient-vending-manufacturing" },
      { eyebrow: "Operations", title: "Vending solutions for remote manufacturing", description: "Service contract design for remote and rural manufacturing facilities with limited operator access.", href: "/vending-for-manufacturing-companies/vending-solutions-remote-manufacturing" },
      { eyebrow: "Hub", title: "All manufacturing vending guides", description: "Equipment, planogram, energy efficiency, preventative maintenance, and operational discipline.", href: "/vending-for-manufacturing-companies" },
    ],
  }),
]);
process.exit(0);
