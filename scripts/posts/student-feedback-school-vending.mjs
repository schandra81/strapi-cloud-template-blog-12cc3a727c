import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("student-feedback-school-vending", [
  tldr({
    heading: "How should schools collect student feedback on vending — and what should the cadence look like?",
    paragraph:
      "Student feedback on school vending intersects six structured collection channels that drive both planogram tuning and student-government engagement: (1) student council / SGA partnership — semester student-government planogram review (typical 2x annually, fall + spring) with operator + food service director + student council president + treasurer provides governance + accountability + student-government leadership development, (2) suggestion-card / digital QR code feedback at machine signage — passive collection with QR code linking to short survey (5-7 question), produces 50-150 responses per machine per semester at active student bodies, (3) student lunch focus groups — quarterly facilitated focus group with 8-12 students across grade levels, school counselor / health teacher facilitates, surfaces qualitative feedback on product preferences + allergen + religious dietary + cultural diversity, (4) telemetry-driven product preference analysis — modern school-specialty operators surface buy-rate patterns by item + time + grade level (where badge-authenticated AI cooler) + day-of-week, drives data-backed planogram tuning beyond stated preferences, (5) parent + staff approval coordination — Smart Snacks compliance + state-mandated healthy-share thresholds + parent committee review ensures student feedback runs within compliance scope, (6) student wellness committee + nutrition class integration — high school nutrition class + health class projects can include vending planogram review as curriculum component (USDA Team Nutrition + state health education standards support). Modern school-specialty operators (Compass Group, Sodexo, Aramark, Canteen, regional school-specialty providers) support all six channels with semester cadence + telemetry-backed quarterly dashboards; legacy operators rely on opaque annual planogram review with no student input. Specify all six in operator master service agreement + memorandum of understanding with district student wellness council.",
    bullets: [
      { emphasis: "Six structured channels for student vending feedback:",
        text: "Student council / SGA partnership, suggestion-card / QR code, lunch focus groups, telemetry-driven preference analysis, parent + staff approval coordination, student wellness committee + nutrition class integration." },
      { emphasis: "Student council / SGA semester partnership drives governance + accountability:",
        text: "Semester (2x annually, fall + spring) planogram review with operator + food service director + student council president + treasurer. Provides student-government leadership development + planogram tuning." },
      { emphasis: "Telemetry-driven preference analysis surfaces patterns beyond stated feedback:",
        text: "Modern school-specialty operators surface buy-rate patterns by item + time + grade level (where badge-authenticated AI cooler) + day-of-week. Drives data-backed planogram tuning." },
    ],
  }),
  statStrip({
    heading: "Student vending feedback cadence benchmarks",
    stats: [
      { number: "2x", label: "semester student council review", sub: "fall + spring planogram cadence", accent: "blue" },
      { number: "50-150", label: "QR code responses per machine", sub: "per semester at active student bodies", accent: "blue" },
      { number: "8-12", label: "focus group student panel", sub: "quarterly with grade-level distribution", accent: "blue" },
      { number: "6", label: "structured feedback channels", sub: "modern school-specialty operator scope", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Legacy school vending feedback vs modern student feedback cadence",
    sub: "Side-by-side across the six structured feedback channels. Modern school-specialty operators support all six; legacy operators rely on opaque annual planogram review.",
    headers: ["Channel", "Legacy school vending", "Modern student feedback cadence"],
    rows: [
      ["Student council / SGA planogram review", "None or operator-led with no student input", "Semester (2x annually) with student-government participation"],
      ["Suggestion-card / QR code signage", "Generic operator signage", "QR code linking to short survey, 50-150 responses per machine"],
      ["Lunch focus groups", "None", "Quarterly facilitated focus group, 8-12 students across grades"],
      ["Telemetry-driven preference analysis", "Operator-only access", "Dashboard with buy-rate patterns by item + time + grade level"],
      ["Parent + staff approval coordination", "Not addressed", "Smart Snacks compliance + parent committee review integration"],
      ["Nutrition class + curriculum integration", "Not addressed", "High school nutrition + health class projects with vending planogram review"],
      ["Planogram refresh cadence", "Annual operator-driven", "Semester student-driven + quarterly stock review"],
      ["Healthy-share dashboard access", "None or annual operator summary", "Telemetry-backed quarterly dashboard for food service director + wellness committee"],
      ["Cultural diversity + religious dietary feedback", "Operator-driven generic mix", "Focus group surfaces + planogram tunes 15-30% diverse share"],
      ["Allergen + dietary restriction labeling", "Generic operator labels", "Top-9 allergen + gluten-free + religious dietary at SKU level"],
    ],
  }),
  specList({
    heading: "Student vending feedback specifications",
    items: [
      { label: "Student council / SGA partnership — semester planogram review", value: "Semester (2x annually, fall + spring) student-government planogram review with operator account manager + food service director + student council president + treasurer. Agenda — prior-semester planogram performance, upcoming-semester preferences (student council survey input), Smart Snacks compliance verification, healthy-share dashboard review, cultural diversity + religious dietary feedback, allergen + dietary restriction coordination. Drives governance + accountability + student-government leadership development. Build into operator master service agreement Section 6.3 (or equivalent)." },
      { label: "Suggestion-card / digital QR code feedback at machine signage", value: "QR code on machine signage links to short survey (5-7 questions) — favorite items, items they wish were stocked, healthy options preference, beverage preference, pricing feedback. Produces 50-150 responses per machine per semester at active student bodies. Modern operators provide aggregated dashboard to food service director + student council; legacy operators don't offer QR feedback capability. Coordinate survey content with student council + nutrition educator." },
      { label: "Student lunch focus groups — quarterly facilitated", value: "Quarterly facilitated focus group with 8-12 students across grade levels (typically 2-3 per grade at high school, 2-3 per grade at middle school). School counselor / health teacher facilitates. Discussion topics — product preferences, allergen + religious dietary + cultural diversity, pricing perception, machine reliability + uptime experience, healthy-share planogram acceptance. Drives qualitative feedback complementing telemetry-driven preference analysis." },
      { label: "Telemetry-driven product preference analysis", value: "Modern school-specialty operators surface buy-rate patterns by item + time + grade level (where badge-authenticated AI cooler in use) + day-of-week. Dashboard surfaces — top-selling items, slow-moving items, stockout patterns, time-of-day demand peaks, grade-level preference variations (where data available). Quarterly review with food service director + student council. Drives data-backed planogram tuning beyond stated preferences. Legacy operators run operator-only access; specify dashboard access in contract Section 6.4." },
      { label: "Parent + staff approval coordination", value: "Smart Snacks compliance (USDA Smart Snacks in Schools rule) + state-mandated healthy-share thresholds + parent committee review ensures student feedback runs within compliance scope. Food service director + wellness committee + parent representative review student feedback before planogram changes. Operator must verify Smart Snacks compliance + state nutrition standards at every planogram refresh. Modern school-specialty operators support compliance verification; legacy operators run compliance review at annual cadence only." },
      { label: "Student wellness committee + nutrition class curriculum integration", value: "High school nutrition class + health class projects can include vending planogram review as curriculum component. USDA Team Nutrition + state health education standards support curriculum-driven student engagement. Examples — nutrition class project analyzing vending planogram for caloric density + macronutrient distribution + Smart Snacks compliance, health class project surveying student peer preferences. Coordinate with health educator + curriculum coordinator." },
      { label: "Cultural diversity + religious dietary feedback collection", value: "Diverse student bodies often include students maintaining cultural diets, immigrant-community food preferences, halal / kosher needs, allergen sensitivity. Focus group + survey channels surface preferences. Modern operators run cultural-diversity planogram refresh quarterly with food service director + wellness committee input. 15-30% culturally diverse + religious-dietary share at diverse student bodies; legacy operators run generic 5-10% share." },
      { label: "Healthy-share dashboard access for food service + wellness committee", value: "Modern school-specialty operators provide quarterly telemetry-backed dashboard — healthy-share % per machine + Smart Snacks compliance verification + state-mandated threshold achievement, allergen + dietary share, cultural diversity share, transaction count + average ticket, beverage water + reduced-sugar share. Read-only portal access for food service director + wellness committee + student council president. Drives transparency + planogram tuning." },
      { label: "Memorandum of understanding with district student wellness council", value: "District-level student wellness council often coordinates planogram review across multiple schools in district. Memorandum of understanding (MOU) between operator + district + student wellness council formalizes — planogram review cadence (semester at each school + annual district-wide), reporting cadence + format, escalation path for student feedback that crosses school lines, district-wide healthy-share + cultural diversity + allergen labeling targets. Modern operators support MOU; legacy operators resist district-level coordination." },
    ],
  }),
  timeline({
    heading: "Semester student feedback cadence — planogram refresh cycle",
    sub: "Modern school-specialty operator semester cadence — fall + spring planogram review with student council + telemetry-driven analysis + parent + staff approval coordination.",
    howToName: "Run semester student feedback cycle",
    totalTime: "P180D",
    steps: [
      { label: "Week 1-2", title: "Prior-semester telemetry analysis", description: "Operator analyzes prior-semester transaction data per machine + per SKU — top performers, underperformers, stockout patterns, time-of-day demand peaks, grade-level preference variations. Healthy-share compliance verification + Smart Snacks + state-mandated threshold achievement. Cultural diversity share + allergen + religious dietary share. Dashboard ready for food service director + student council review." },
      { label: "Week 3-4", title: "QR code survey distribution + student council input collection", description: "QR code survey active at machine signage throughout semester. Student council distributes additional survey to student body (homeroom announcement, school newsletter, social media). Targeted survey on upcoming-semester preferences — items they wish were stocked, healthy options preference, beverage preference, pricing feedback, cultural diversity + religious dietary needs." },
      { label: "Week 5-7", title: "Quarterly student lunch focus group", description: "Quarterly facilitated focus group with 8-12 students across grade levels. School counselor / health teacher facilitates. Discussion topics — product preferences, allergen + religious dietary + cultural diversity, pricing perception, machine reliability + uptime experience, healthy-share planogram acceptance. Capture qualitative feedback." },
      { label: "Week 8-10", title: "Student council planogram review meeting", description: "Semester student-government planogram review with operator account manager + food service director + student council president + treasurer + parent representative + nutrition educator. Agenda — prior-semester planogram performance, upcoming-semester preferences (student council survey input + focus group feedback + QR code aggregated data), Smart Snacks compliance verification, healthy-share dashboard review, cultural diversity + religious dietary feedback." },
      { label: "Week 11-13", title: "Planogram draft + parent + staff approval coordination", description: "Operator drafts upcoming-semester planogram per machine. Smart Snacks compliance verification at each SKU. Food service director + wellness committee + parent representative review planogram before approval. State-mandated healthy-share threshold verification. Cultural diversity + religious dietary + allergen labeling depth verification." },
      { label: "Week 14-18", title: "Planogram execution + first-month observation", description: "Operator executes planogram refresh + observes first-month telemetry. Adjust at SKU level for early demand signals — slow performers swapped, fast performers stock-increased. QR code feedback collection continues. Mid-semester student council check-in to verify planogram acceptance. Build institutional knowledge for next-semester cycle." },
    ],
  }),
  tipCards({
    heading: "Five student feedback collection mistakes",
    sub: "Documented across school district debriefs and operator post-deployment reviews. All preventable with structured cadence + student council partnership.",
    items: [
      { title: "Operator-driven planogram with no student input", body: "Legacy operator runs operator-driven annual planogram refresh with no student council / SGA / focus group / QR code input. Misses student preferences + accountability + student-government engagement. Specify semester student council review + quarterly focus group + QR code feedback in operator master service agreement Section 6.3." },
      { title: "No QR code feedback signage at machines", body: "Modern operators provide QR code on machine signage linking to short survey. Produces 50-150 responses per machine per semester at active student bodies. Legacy operators don't offer QR feedback capability. Specify signage + survey aggregation dashboard at signature." },
      { title: "No quarterly student lunch focus group", body: "Quarterly facilitated focus group surfaces qualitative feedback — product preferences, allergen + religious dietary + cultural diversity, pricing perception, machine reliability. School counselor / health teacher facilitates. Modern operators coordinate focus group; legacy operators don't engage qualitative feedback. Build into operator memorandum of understanding." },
      { title: "No telemetry-driven preference analysis dashboard", body: "Modern school-specialty operators surface buy-rate patterns by item + time + grade level + day-of-week. Dashboard surfaces patterns + drives data-backed planogram tuning. Legacy operators run operator-only telemetry access. Specify dashboard access in contract Section 6.4 at signature." },
      { title: "No cultural diversity + religious dietary feedback channel", body: "Diverse student bodies include students maintaining cultural diets, immigrant-community food preferences, halal / kosher needs, allergen sensitivity. Focus group + survey channels surface preferences. Modern operators run cultural-diversity planogram refresh quarterly; legacy operators run generic mix. 15-30% culturally diverse + religious-dietary share at diverse student bodies." },
    ],
  }),
  keyTakeaways({
    takeaways: [
      "Student feedback on school vending intersects six structured collection channels — student council / SGA partnership (semester planogram review), suggestion-card / QR code at machine signage, lunch focus groups (quarterly), telemetry-driven preference analysis, parent + staff approval coordination, student wellness committee + nutrition class integration.",
      "Student council / SGA partnership drives governance + accountability + student-government leadership development. Semester (2x annually, fall + spring) planogram review with operator + food service director + student council president + treasurer.",
      "QR code feedback at machine signage produces 50-150 responses per machine per semester at active student bodies. Modern school-specialty operators provide aggregated dashboard; legacy operators don't offer QR feedback capability.",
      "Telemetry-driven preference analysis surfaces buy-rate patterns by item + time + grade level + day-of-week, drives data-backed planogram tuning beyond stated preferences. Modern school-specialty operators provide dashboard access; legacy operators run operator-only access.",
      "Modern school-specialty operators support all six channels with semester cadence + telemetry-backed quarterly dashboards; legacy operators rely on opaque annual planogram review with no student input. Specify all six in operator master service agreement + memorandum of understanding with district student wellness council.",
    ],
  }),
  inlineCta({
    text: "Want the school vending student feedback framework (semester + QR + focus group + telemetry + MOU)?",
    buttonLabel: "Get the school feedback framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on school vending student feedback program design across middle school, high school, and district-level placements — including student council / SGA semester planogram partnership, QR code feedback at machine signage, quarterly student lunch focus group coordination, telemetry-driven preference analysis dashboard access, Smart Snacks compliance verification, cultural diversity + religious dietary feedback collection, parent + staff approval coordination, and memorandum of understanding with district student wellness council. The benchmarks reflect operator-side data + food service director + student council feedback at semester planogram reviews.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should schools collect student feedback on vending?", answer: "Six structured channels — student council / SGA partnership (semester planogram review), suggestion-card / QR code at machine signage, lunch focus groups (quarterly), telemetry-driven preference analysis, parent + staff approval coordination, student wellness committee + nutrition class integration. Modern school-specialty operators support all six; legacy operators rely on opaque annual review.", audience: "Food Service / Wellness" },
      { question: "What's the student council / SGA role in vending?", answer: "Semester (2x annually, fall + spring) planogram review with operator account manager + food service director + student council president + treasurer. Agenda — prior-semester planogram performance, upcoming-semester preferences, Smart Snacks compliance verification, healthy-share dashboard review, cultural diversity + religious dietary feedback. Drives governance + accountability + student-government leadership development.", audience: "Student Council / SGA" },
      { question: "How does QR code feedback work?", answer: "QR code on machine signage links to short survey (5-7 questions) — favorite items, items they wish were stocked, healthy options preference, beverage preference, pricing feedback. Produces 50-150 responses per machine per semester at active student bodies. Modern operators provide aggregated dashboard to food service director + student council; legacy operators don't offer QR feedback capability.", audience: "Food Service / Students" },
      { question: "Who facilitates the student lunch focus group?", answer: "School counselor or health teacher facilitates quarterly student lunch focus group with 8-12 students across grade levels. Discussion topics — product preferences, allergen + religious dietary + cultural diversity, pricing perception, machine reliability + uptime experience, healthy-share planogram acceptance. Drives qualitative feedback complementing telemetry-driven preference analysis.", audience: "School Counselors / Health Teachers" },
      { question: "Can we see telemetry data from the vending machines?", answer: "Yes at modern school-specialty operators. Quarterly telemetry-backed dashboard surfaces buy-rate patterns by item + time + grade level (where badge-authenticated AI cooler in use) + day-of-week — top-selling items, slow-moving items, stockout patterns, time-of-day demand peaks. Dashboard access for food service director + wellness committee + student council president. Read-only portal.", audience: "Food Service / Wellness" },
      { question: "Does parent + staff approval slow down feedback implementation?", answer: "No when structured correctly. Modern school-specialty operators verify Smart Snacks compliance + state-mandated healthy-share thresholds at every planogram refresh. Food service director + wellness committee + parent representative review student feedback before planogram changes. Cadence — student input collected throughout semester, planogram review at semester end, approval + execution at next semester start.", audience: "Wellness Committee / Parents" },
      { question: "Can vending be part of nutrition class curriculum?", answer: "Yes — high school nutrition class + health class projects can include vending planogram review as curriculum component. USDA Team Nutrition + state health education standards support curriculum-driven student engagement. Examples — nutrition class project analyzing vending planogram for caloric density + macronutrient distribution + Smart Snacks compliance, health class project surveying student peer preferences.", audience: "Health Teachers / Curriculum" },
      { question: "How do we handle cultural diversity in student feedback?", answer: "Diverse student bodies include students maintaining cultural diets, immigrant-community food preferences, halal / kosher needs, allergen sensitivity. Focus group + survey channels surface preferences. Modern operators run cultural-diversity planogram refresh quarterly with food service director + wellness committee input. 15-30% culturally diverse + religious-dietary share at diverse student bodies; legacy operators run generic 5-10%.", audience: "Food Service / Wellness" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "USDA Smart Snacks in Schools — Food and Nutrition Service", url: "https://www.fns.usda.gov/cn/tools-schools-focusing-smart-snacks", note: "Federal USDA Smart Snacks in Schools rule covering vending nutrition standards in K-12 schools" },
      { label: "USDA Team Nutrition — curriculum + wellness program resources", url: "https://www.fns.usda.gov/tn/team-nutrition", note: "Federal USDA Team Nutrition program covering curriculum + wellness program integration with school food service" },
      { label: "CDC — Whole School, Whole Community, Whole Child framework", url: "https://www.cdc.gov/healthyschools/wscc/", note: "Federal CDC framework covering whole-child approach to school health including nutrition + vending" },
      { label: "ASBO — Association of School Business Officials food service contract standards", url: "https://asbointl.org/", note: "Industry trade association covering school district food service contract management" },
      { label: "School Nutrition Association — student engagement + feedback research", url: "https://schoolnutrition.org/", note: "Industry trade association covering school nutrition program standards + student engagement research" },
    ],
  }),
  relatedGuides({
    heading: "Related school vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Parent and staff approval for school vending", description: "Wellness committee + parent representative + nutrition educator coordination, Smart Snacks compliance verification, state-mandated healthy-share thresholds.", href: "/vending-for-schools/parent-and-staff-approval-for-school-vending" },
      { eyebrow: "Operations", title: "Leveraging vending data for school operations", description: "Telemetry platform stack, per-machine + per-grade-level transaction analysis, healthy-share dashboard, semester planogram refresh patterns.", href: "/vending-for-schools/leveraging-vending-data-school-operations" },
      { eyebrow: "Hub", title: "All school vending guides", description: "Equipment, planogram, Smart Snacks compliance, student engagement, and parent + staff coordination at school placements.", href: "/vending-for-schools" },
    ],
  }),
]);
process.exit(0);
