import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, decisionTree, tipCards, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("24-7-vending-solutions-for-hospitals", [
  tldr({
    heading: "How should 24/7 vending be structured for hospitals — and what operational discipline does hospital 24/7 demand?",
    paragraph:
      "Hospital 24/7 vending operates under fundamentally different operational discipline than office vending, and even differs from manufacturing 24/7 vending in important ways. Hospitals serve three concurrent user populations with continuous 24/7 demand: (1) clinical staff (3rd-shift nursing, on-call residents, OR teams during overnight surgeries, security and housekeeping nights, ED staff during overnight surge) who often lack cafeteria support after 8-10pm; (2) patient family during long vigils at ICU family rooms, ED waiting (especially during peak ED hours), surgical waiting (overnight emergency surgeries), MRI/imaging waiting; (3) overnight ED visitors and arriving inpatient family for emergency admissions. Operational discipline shifts across seven areas relative to office vending: (1) telemetry-driven restock cadence 2-3x/week minimum at hospital placements with weekend service for 7-day operation; (2) 24-hour service ticket response (vs office 48-72 hours), with 4-8 hour emergency response for refrigeration failure, complete equipment failure, or payment system failure — overnight patient family at 2am cannot wait until Monday office support; (3) 24/7 mobile-app or text-based refund procedure accessible to both staff and patient family; (4) shift-aware planogram tuning with overnight shift consumption (energy drinks for staff cognitive recovery, electrolyte hydration, hot food access via fresh-food refrigerated machine plus microwave) plus patient-family adjacency planogram (diet-friendly options for family members with patient dietary alignment); (5) cashless payment with employee badge integration for staff discount programs at hospitals that subsidize staff vending; (6) Joint Commission food-safety standards including refrigeration temperature monitoring via cellular telemetry, FIFO rotation, FALCPA + FASTER Act allergen labeling, HACCP-aligned operator capability; (7) refrigerated and frozen equipment supporting hot food access where cafeteria is closed overnight. Hospitals deploying 24/7-structured vending programs report higher HCAHPS family/visitor satisfaction scoring, lower staff grievance volume related to off-hours food access, and stronger workforce retention in tight nursing labor markets. Service contract reflects 24/7 economics: 30-50% higher operator labor cost per machine annually but 60-90% higher revenue per machine vs office baseline (continuous demand and limited cafeteria alternative).",
    bullets: [
      { emphasis: "Three concurrent 24/7 user populations at hospitals:",
        text: "Clinical staff (3rd-shift, on-call, OR teams, security, housekeeping), patient family during long vigils, overnight ED visitors and arriving inpatient family. Different needs, all served 24/7 by vending program." },
      { emphasis: "Seven operational discipline shifts vs office vending:",
        text: "2-3x/week restock cadence, 24h service ticket response with 4-8h emergency, 24/7 mobile-app refund, shift-aware planogram, cashless with badge integration, Joint Commission food safety, refrigerated/frozen hot-food access." },
      { emphasis: "HCAHPS, grievance, and retention outcomes measurable:",
        text: "Higher HCAHPS family/visitor satisfaction, lower staff grievance volume on off-hours food access, stronger workforce retention in tight nursing labor markets. 24/7-structured programs deliver measurable workforce and patient-experience outcomes." },
    ],
  }),
  statStrip({
    heading: "Hospital 24/7 vending benchmarks",
    stats: [
      { number: "24/7/365", label: "duty cycle three populations", sub: "staff + family + visitors", accent: "orange" },
      { number: "2-3x", label: "weekly restock cadence", sub: "vs office 1x/week", accent: "blue" },
      { number: "24 hr", label: "service ticket response", sub: "4-8h emergency response", accent: "blue" },
      { number: "+60-90%", label: "revenue per machine vs office", sub: "continuous demand + limited cafeteria", accent: "green" },
    ],
  }),
  comparisonTable({
    heading: "Office vending vs hospital 24/7 vending",
    sub: "Seven operational dimensions where hospital 24/7 vending diverges from office vending. Underspec'd hospital programs fail at overnight hours when staff and patient family most depend on vending.",
    headers: ["Operational dimension", "Office vending (40-hour)", "Hospital 24/7 vending", "Why it matters"],
    rows: [
      ["Restock cadence", "1x/week", "2-3x/week minimum", "Continuous 24/7 demand drains slots faster"],
      ["Service ticket response", "48-72 hours", "24 hours, 4-8h emergency", "Overnight staff and patient family cannot wait"],
      ["Refund procedure", "Office-hours phone support", "24/7 mobile-app or text-based", "Overnight refunds need self-service"],
      ["Planogram tuning", "Standard 9-5 mix", "Shift-aware staff + patient-family adjacency", "Diverse user populations require different mix"],
      ["Cashless payment", "Standard EMV + contactless", "EMV + contactless + badge for staff discount", "Staff subsidy programs supported"],
      ["Hot food / fresh", "Optional", "Often required overnight (cafeteria closed)", "Cafeteria 6am-7pm coverage only"],
      ["Food safety", "Standard", "Joint Commission + HACCP + FALCPA + telemetry", "Hospital regulatory environment applies"],
      ["Equipment specification", "Standard office-grade", "Heavy-duty industrial-rated", "24/7 duty cycle fatigues consumer equipment"],
      ["Telemetry uptime SLA", "Best-effort", "≥99% with refrigeration drift alerts", "Joint Commission food-safety monitoring"],
      ["HCAHPS / patient experience impact", "Not applicable", "Drives family/visitor satisfaction scoring", "Patient experience measurement"],
    ],
  }),
  timeline({
    heading: "Hospital 24/7 vending operational cadence",
    sub: "Operational cadence across daily, weekly, monthly, and annual schedule for a 24/7-structured hospital vending program. Coordinated with facilities, food-service management, and clinical leads.",
    howToName: "How to operate hospital 24/7 vending",
    totalTime: "P365D",
    steps: [
      { label: "DAILY", title: "24/7 telemetry monitoring + mobile-app refund processing", description: "24/7 telemetry monitoring (Cantaloupe, Nayax, 365 ADM, Avanti) continuously tracks refrigeration temperature, payment processing, stockout status, anomaly flags. Refrigeration drift >5°F triggers service ticket within 2 hours. Mobile-app or text-based refund processing handles overnight refund requests from staff and patient family. Daily restock at fresh-food refrigerated machines with FIFO rotation." },
      { label: "WEEKLY", title: "2-3x restock cadence with shift-aware planogram tuning", description: "Route driver 2-3x/week restock at hospital placements (vs office 1x/week). Energy drinks, hot food, and high-velocity SKUs stockout 2-3x faster than office baseline. Weekend service for 7-day operations. Telemetry data identifies shift-specific consumption (overnight staff vs day-shift family/visitor) feeding shift-aware planogram tuning. Restock visits scheduled around shift-change windows to minimize disruption." },
      { label: "MONTHLY", title: "Operator monthly report + commission reconciliation", description: "Operator monthly report to food-service management covers per-placement consumption, shift-specific consumption patterns, healthy-share execution against HHS/FITPICK targets, refrigeration temperature compliance, service ticket response performance, emergency response performance, refund volume, telemetry uptime. Commission statement with telemetry-verified per-machine sales detail. ACH commission transfer to hospital designated fund." },
      { label: "QUARTERLY", title: "Senior tech PM + dietitian planogram review + multidisciplinary touchpoint", description: "Operator quarterly senior tech PM (refrigeration system check, compressor amperage, coil mechanism teardown and rebuild, payment terminal calibration, telemetry signal verification, ENERGY STAR compliance audit). Dietitian quarterly planogram review for HHS/FITPICK healthy-share targets and patient-family adjacency dietary-restriction coverage. Quarterly review with facility manager + food-service management + on-site dietitian + hospital security + EHS + operator." },
      { label: "ANNUALLY", title: "Annual program review + equipment lifecycle planning + Joint Commission audit", description: "Annual program review with facility leadership (facility manager, food-service management, CFO, clinical leads where applicable). Commission performance, service contract performance against 24h SLA, equipment health and lifecycle planning (7-10 year industrial-rated equipment, compressor replacement at 7-year mark), telemetry uptime, planogram performance, healthy-share execution, Joint Commission food-safety audit alignment. Contract renewal terms negotiated based on annual performance." },
      { label: "EVENT-DRIVEN", title: "Emergency response within 4-8 hours", description: "Refrigeration failure, complete equipment failure, or payment system failure trigger emergency response within 4-8 hours. Operator dispatches senior tech with parts inventory. Temporary spare-equipment swap at extended-repair situations. Joint Commission food-safety implications at refrigeration failure (food-safety risk if not addressed promptly). Emergency response performance tracked monthly against SLA." },
      { label: "PATIENT EXPERIENCE", title: "HCAHPS-aligned patient-family adjacency planogram", description: "Patient-family adjacency placements (ED waiting, ICU family rooms, surgical waiting, MRI/imaging waiting) carry HCAHPS family/visitor satisfaction implications. Planogram includes diet-friendly options (lactose-free, gluten-free, diabetic-friendly, low-sodium, kosher, halal) for family members with patient dietary alignment. Some hospitals subsidize patient-family adjacency vending as patient-experience investment. Coordinate with HCAHPS team." },
    ],
  }),
  specList({
    heading: "Hospital 24/7 vending program specifications",
    items: [
      { label: "24/7 cellular telemetry on 100% of equipment", value: "Cellular telemetry (Cantaloupe, Nayax, 365 ADM, Avanti) on every vending machine and every micro-market refrigerated case. Real-time refrigeration temperature monitoring (alert at >5°F drift, >2 hour deviation triggers service dispatch), payment-failure alerts, stockout prediction, anomaly detection. Joint Commission food-safety monitoring. Cellular signal verification at install required; external antenna kit at building structure attenuation. ≥99% telemetry uptime SLA." },
      { label: "2-3x/week restock cadence with weekend service", value: "Route driver 2-3x/week restock at hospital placements (vs office 1x/week). Continuous 24/7 demand drains slots 2-3x faster than office baseline. Weekend service for 7-day operations. Energy drinks, hot food, and high-velocity SKUs require frequent restock. Daily restock at fresh-food refrigerated machines with FIFO rotation. Telemetry-driven restock alerts trigger route adjustment in real time. Restock visits scheduled around shift-change windows." },
      { label: "24-hour service ticket response with 4-8 hour emergency", value: "Service contract specifies 24-hour ticket response (vs office 48-72h). Emergency response within 4-8 hours for refrigeration failure (food-safety risk), complete equipment failure, or payment system failure. Overnight staff and patient family at 2am cannot wait until next-business-day office support. Operator dispatches senior tech with parts inventory; temporary spare-equipment swap at extended-repair situations. Emergency response performance tracked monthly against SLA." },
      { label: "24/7 mobile-app or text-based refund procedure", value: "Mobile-app refund (operator app or telemetry-platform consumer app) supports 24/7 refund processing for failed vends. Text-based refund request system as alternative — customer texts machine ID + slot number + reason; operator processes refund credit to payment method. Office-hours phone support cannot serve overnight shifts or patient family. Refund procedure accessible to both staff and patient family. Refund volume tracked monthly." },
      { label: "Shift-aware planogram with patient-family adjacency", value: "Telemetry data identifies shift-specific consumption patterns. Overnight clinical staff consumes more energy drinks, hot food, portable microwaveable meals, electrolyte hydration, protein-forward snacks for fatigue management. Day shift staff broader category mix. Patient-family adjacency planogram (ED waiting, ICU family rooms, surgical waiting) includes diet-friendly options for family members with patient dietary alignment. On-site dietitian quarterly planogram validation against HHS/FITPICK targets." },
      { label: "Cashless payment with employee badge integration", value: "EMV chip + contactless tap + mobile wallet (Apple Pay, Google Pay) + employee badge integration for staff discount programs at hospitals that subsidize staff vending. Patient-family payment via standard card or mobile wallet. Self-checkout kiosk at micro-markets with same payment range plus receipt option. PCI DSS compliance verified at operator proposal. >85% cashless rate typical at hospital placements." },
      { label: "Joint Commission food-safety standards", value: "The Joint Commission food-safety standards apply at hospital vending. HACCP-aligned operator capability mandatory. Refrigeration temperature monitoring via cellular telemetry (alert at >5°F drift). Daily FIFO rotation on fresh items at refrigerated machines and micro-markets. FALCPA + FASTER Act allergen labeling on all packaged SKUs. Quarterly food-safety audit with hospital infection-prevention team. Operator demonstrates food-safety capability at proposal with reference customer." },
      { label: "Refrigerated and frozen equipment for overnight hot food", value: "Cafeteria typically closes 8-10pm at most hospitals. Refrigerated fresh-food machines (Crane Merchant Media, AMS Sensit Fresh) plus microwave installed adjacent support overnight hot-food access for clinical staff and patient family. Frozen-meal machines as alternative or supplement. ENERGY STAR refrigeration with cellular telemetry for temperature monitoring and food-safety logs. Daily restock with FIFO rotation mandatory." },
      { label: "Heavy-duty industrial-rated equipment specification", value: "Equipment rated for 24/7/365 duty cycle — reinforced delivery mechanisms (Crane National 187/188, AMS 39 Sensit, Royal Vendors 660/804), industrial-rated refrigeration, IP-rated payment terminals (humidity tolerance at refrigerated machines), 7-10 year lifecycle. Consumer-grade office equipment fatigues at 24/7 hospital duty within 18-24 months. Specification mandatory at hospital placements." },
      { label: "Monthly reporting and quarterly multidisciplinary review", value: "Operator monthly report covers per-placement consumption, shift-specific patterns, healthy-share execution, refrigeration temperature compliance, service ticket response performance, emergency response, refund volume, telemetry uptime, commission reconciliation. Quarterly multidisciplinary review with facility manager + food-service management + on-site dietitian + hospital security + EHS + operator. Feeds Joint Commission food-safety audit and HCAHPS patient experience reporting." },
    ],
  }),
  decisionTree({
    heading: "Is your hospital vending program structured for 24/7 operations?",
    question: "Does your hospital vending program operate 24/7 cellular telemetry on 100% of equipment, 2-3x/week restock with weekend service, 24-hour service ticket response with 4-8 hour emergency response, 24/7 mobile-app or text-based refund procedure, shift-aware planogram with patient-family adjacency tuning, cashless payment with employee badge integration, Joint Commission food-safety standards, and refrigerated/frozen equipment for overnight hot-food access?",
    yesBranch: {
      title: "24/7-structured hospital program — verify SLA performance",
      description: "Program structure supports continuous hospital operations across clinical staff, patient family, and visitor populations. Verify SLA targets are met (24h response, 2-3x restock, 99% telemetry uptime, equipment uptime, Joint Commission food-safety compliance). Shift-aware planogram remains tuned. Monthly reporting feeds food-service management visibility. Quarterly multidisciplinary review. HCAHPS family/visitor satisfaction tracked.",
      finalTone: "go",
      finalLabel: "Structured 24/7",
    },
    noBranch: {
      title: "Office-style arrangement — restructure for hospital 24/7 demands",
      description: "Office-style vending (1x/week restock, 48-72h response, office-hours refund) fails at overnight hours when clinical staff and patient family most depend on vending. Restructure: 24/7 cellular telemetry, 2-3x/week restock with weekend service, 24h service response with 4-8h emergency, 24/7 mobile-app refund, shift-aware planogram with patient-family adjacency, cashless with badge integration, Joint Commission food-safety standards, refrigerated/frozen for overnight hot food, heavy-duty industrial equipment.",
      finalTone: "stop",
      finalLabel: "Restructure",
    },
  }),
  caseStudy({
    tag: "Capability scenario · 300-bed hospital with 24/7-structured vending program",
    title: "24/7-structured vending program at a 300-bed regional hospital",
    context: "Capability description for a 300-bed regional hospital operating 24/7/365 with three concurrent user populations (clinical staff across three shifts, patient family during long vigils, overnight ED visitors). Vending program 14 heavy-duty industrial-rated machines distributed across ED waiting, ICU family rooms, surgical waiting, MRI/imaging waiting, residency call rooms, patient-floor corridors, parking-garage entry/exit plus 2 micro-markets at central staff lounge and main lobby. 24/7 cellular telemetry. 2-3x/week restock with weekend service. 24-hour service response with 4-8h emergency. Joint Commission food-safety compliance.",
    meta: [
      { label: "Beds", value: "300 inpatient" },
      { label: "User populations", value: "Clinical staff + patient family + visitors" },
      { label: "Equipment", value: "14 vending machines + 2 micro-markets" },
      { label: "Service SLA", value: "24h ticket response, 4-8h emergency" },
      { label: "Telemetry uptime", value: "≥99% with refrigeration drift alerts" },
    ],
    results: [
      { number: "24/7/365", label: "duty cycle with three populations" },
      { number: "≥97%", label: "equipment uptime SLA target" },
      { number: "+60-90%", label: "revenue per machine vs office" },
      { number: "HCAHPS", label: "family/visitor satisfaction impact" },
    ],
  }),
  tipCards({
    heading: "Five hospital 24/7 vending operational mistakes",
    sub: "Documented in operator post-implementation service tickets and hospital food-service management reviews. All preventable with hospital-appropriate 24/7 operational discipline.",
    items: [
      { title: "Office-style 1x/week restock at hospital 24/7 placement", body: "Continuous 24/7 demand from clinical staff + patient family + visitors drains slots 2-3x faster than office baseline. 1x/week restock cadence produces mid-week stockouts on energy drinks, hot food, high-velocity SKUs. 2-3x/week minimum at hospital placements with weekend service for 7-day operation. Telemetry-driven restock alerts trigger route adjustment in real time." },
      { title: "Office-hours service response for overnight hospital placements", body: "Overnight clinical staff and patient family at 2am cannot wait until next-business-day office support. Service contract specifies 24-hour ticket response; emergency response within 4-8 hours for refrigeration failure (Joint Commission food-safety implications), complete equipment failure, or payment failure. Operator must staff service routes for 24/7 coverage and on-call dispatch capability." },
      { title: "Office-hours refund procedure", body: "Office-hours phone refund support cannot serve overnight shifts or patient family during long vigils. Mobile-app refund (operator app or telemetry-platform consumer app) supports 24/7 refund processing. Text-based refund request system as alternative. Refund procedure accessible to both staff and patient family. Without 24/7 refund procedure, overnight failed-vend complaints accumulate into formal grievances and HCAHPS scoring impact." },
      { title: "Single planogram across staff and patient-family populations", body: "Telemetry data identifies population-specific consumption patterns. Overnight clinical staff consumes more energy drinks, hot food, protein-forward snacks. Patient family at ED/ICU/OR waiting consumes more diet-friendly options for family members with patient dietary alignment. Loading one planogram across all placements produces stockouts on population-specific SKUs and surplus on mismatched SKUs. Shift-aware and patient-family adjacency planogram tuning matters." },
      { title: "Standard office-grade vending equipment at hospital 24/7 duty", body: "Office-grade equipment fatigues at 24/7/365 hospital duty within 18-24 months. Specify heavy-duty industrial-rated equipment (Crane 187/188, AMS 39 Sensit, Royal Vendors 660/804, IP-rated payment terminals) with 7-10 year lifecycle. Lifecycle cost favors industrial-rated equipment substantially at hospital placements. Joint Commission food-safety implications at refrigeration equipment failure." },
    ],
  }),
  inlineCta({
    text: "Want the hospital 24/7 vending playbook — telemetry, restock cadence, service SLA, refund procedure, shift-aware planogram, Joint Commission food safety, and HCAHPS alignment?",
    buttonLabel: "Get the hospital 24/7 vending playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help hospitals structure 24/7 vending programs across clinical staff and patient family and visitor populations — 24/7 cellular telemetry with refrigeration temperature monitoring, 2-3x/week restock cadence with weekend service, 24-hour service ticket response SLA with 4-8 hour emergency response, 24/7 mobile-app or text-based refund procedure, shift-aware planogram tuning with patient-family adjacency dietary-restriction coverage, cashless payment with employee badge integration for staff discount programs, Joint Commission food-safety standards with HACCP-aligned operator capability and FALCPA allergen labeling, refrigerated and frozen equipment for overnight hot-food access, heavy-duty industrial-rated equipment specification, and monthly reporting with quarterly multidisciplinary review. The benchmarks reflect operator-side data from hospital deployments and food-service management input.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who uses hospital vending 24/7?", answer: "Three concurrent user populations: clinical staff (3rd-shift nursing, on-call residents, OR teams during overnight surgeries, security and housekeeping nights, ED staff during overnight surge), patient family during long vigils at ICU family rooms and ED waiting and surgical waiting and MRI/imaging waiting, overnight ED visitors and arriving inpatient family for emergency admissions. Each population has different needs served by the same 24/7 vending program.", audience: "Facility Managers" },
      { question: "How often should hospital vending be restocked?", answer: "2-3x/week minimum at hospital placements with weekend service for 7-day operation. Continuous 24/7 demand from three concurrent user populations drains slots 2-3x faster than office baseline. Daily restock at fresh-food refrigerated machines with FIFO rotation. Energy drinks, hot food, and high-velocity SKUs require frequent restock. Telemetry-driven restock alerts trigger route adjustment in real time.", audience: "Operations" },
      { question: "What's the service response SLA?", answer: "24-hour ticket response at hospital placements (vs office 48-72h). Emergency response within 4-8 hours for refrigeration failure (Joint Commission food-safety implications), complete equipment failure, or payment system failure. Overnight staff and patient family at 2am cannot wait until next-business-day office support. Operator must staff service routes for 24/7 coverage and on-call dispatch capability.", audience: "Operations" },
      { question: "How do refunds work overnight?", answer: "Mobile-app refund (operator app or telemetry-platform consumer app) supports 24/7 refund processing for failed vends. Text-based refund request system as alternative — customer texts machine ID + slot number + reason; operator processes refund credit to payment method. Office-hours phone support cannot serve overnight shifts or patient family. Refund procedure accessible to both staff and patient family.", audience: "HR / Patient Experience" },
      { question: "Do hospitals need hot food in vending?", answer: "Often yes — cafeteria typically closes 8-10pm at most hospitals. Refrigerated fresh-food machines plus microwave installed adjacent support overnight hot-food access for clinical staff and patient family. Frozen-meal machines as alternative or supplement. Daily restock with FIFO rotation mandatory. Joint Commission food-safety standards apply. Hot-food access matters substantially for overnight staff fatigue management and patient family during long vigils.", audience: "Food Service" },
      { question: "What food-safety standards apply?", answer: "Joint Commission food-safety standards apply at hospital vending. HACCP-aligned operator capability mandatory. Refrigeration temperature monitoring via cellular telemetry (alert at >5°F drift). Daily FIFO rotation on fresh items. FALCPA + FASTER Act allergen labeling on all packaged SKUs. Quarterly food-safety audit with hospital infection-prevention team. Operator demonstrates food-safety capability at proposal with reference customer.", audience: "Compliance" },
      { question: "Does hospital 24/7 vending cost more?", answer: "30-50% more operator labor per machine annually (more route visits, more service response, more refund processing) but generates 60-90% more vending revenue per machine vs office baseline (continuous demand and limited cafeteria alternative). Net machine economics favor 24/7 placements substantially when operator is staffed for the duty cycle. Operator funds equipment capital; hospital pays $0 direct capital cost under standard contract.", audience: "CFOs" },
      { question: "Does 24/7 vending affect HCAHPS scoring?", answer: "Yes. Patient-family adjacency placements (ED waiting, ICU family rooms, surgical waiting, MRI/imaging waiting) carry HCAHPS family/visitor satisfaction implications during long vigils. 24/7 access with diet-friendly options for family members drives satisfaction scoring. Office-style vending failing overnight produces patient/family complaints and HCAHPS scoring impact. 24/7-structured programs support patient experience measurement.", audience: "Patient Experience" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "The Joint Commission — hospital food service and safety standards", url: "https://www.jointcommission.org/", note: "Federal accreditation standards covering hospital food service, patient safety, and 24/7 operations" },
      { label: "CMS — HCAHPS patient experience survey", url: "https://www.hcahpsonline.org/", note: "Federal patient experience survey scoring family/visitor satisfaction informing 24/7 vending program design" },
      { label: "NIOSH — Plain Language About Shiftwork (healthcare worker fatigue)", url: "https://www.cdc.gov/niosh/docs/97-145/", note: "NIOSH shift-work research underlying healthcare worker overnight consumption patterns" },
      { label: "FDA — Food Allergen Labeling and Consumer Protection Act (FALCPA) and FASTER Act", url: "https://www.fda.gov/food/food-allergensgluten-free-guidance-documents-regulatory-information/food-allergies", note: "Federal allergen labeling requirements applied at packaged hospital vending SKUs" },
      { label: "NAMA — National Automatic Merchandising Association — hospital 24/7 vending operations", url: "https://www.namanow.org/", note: "Industry association guidance on hospital 24/7 vending operations and operator practice" },
    ],
  }),
  relatedGuides({
    heading: "Related hospital vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending vs cafeteria in hospitals", description: "How vending and cafeteria coordinate across hospital food-amenity programs.", href: "/vending-for-healthcare/vending-vs-cafeteria-in-hospitals" },
      { eyebrow: "Sister guide", title: "Hospital vending revenue", description: "Commission structures, revenue drivers, and program economics for hospital vending.", href: "/vending-for-healthcare/hospital-vending-revenue" },
      { eyebrow: "Hub", title: "All hospital vending guides", description: "Equipment, planogram, food safety, patient-family adjacency, micro-markets, 24/7 operations, and coordination with cafeteria food service.", href: "/vending-for-healthcare" },
    ],
  }),
]);
process.exit(0);
