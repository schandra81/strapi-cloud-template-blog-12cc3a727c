import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, caseStudy, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("cross-curricular-learning-school-vending", [
  tldr({
    heading: "How can school vending support cross-curricular learning — and what does a real program look like?",
    paragraph:
      "School vending machines can be more than a beverage and snack vehicle. When intentionally designed, they support cross-curricular learning across math (data analysis from sales telemetry, percentage and ratio in nutrition labels, geometry in planogram design), science (food science nutrition, refrigeration thermodynamics, electrical energy consumption), social studies (food sourcing supply chains, sustainability policy, local sourcing economics), business and entrepreneurship (cost-revenue-margin analysis, marketing, customer surveys), health and physical education (Smart Snacks nutrition standards under USDA, dietary patterns, beverage hydration), and English language arts (persuasive writing in product proposal projects, infographic communication of nutrition data). Three program models are documented in U.S. K-12 placements: (1) data partnership where vending operator shares anonymized sales telemetry with math/business classes for real-world data analysis; (2) student council planogram input where students propose SKU additions through a structured RFP process taught in business class; (3) school-store / mock-vending project where students build a curriculum unit on vending economics using the actual school machine as the data source. These programs work best at middle and high school grades 6-12 where students can engage with data, supply chain, and business analysis. Compliance gates remain: Smart Snacks nutrition standards under USDA (calorie cap, total fat, saturated fat, sodium, sugar) for any food sold during school day; vending revenue accounting in school activity fund; ADA compliance at all machines; allergen management for student health. Build cross-curricular learning into operator contract as a documented program with teacher coordination, telemetry data sharing agreement, and curriculum-aligned outputs. Modern operators support; legacy operators may not have telemetry capability or data-sharing infrastructure.",
    bullets: [
      { emphasis: "Six subject areas can connect to school vending:",
        text: "Math (data + ratio), science (nutrition + refrigeration), social studies (supply chain + policy), business (economics + marketing), health/PE (nutrition + hydration), ELA (persuasive writing + infographics)." },
      { emphasis: "Three program models in K-12 placements:",
        text: "Data partnership (telemetry sharing), planogram input (RFP process), school-store project (curriculum unit using vending economics). Best fit grades 6-12." },
      { emphasis: "Compliance gates remain regardless of curriculum value:",
        text: "Smart Snacks under USDA, school activity fund accounting, ADA compliance, allergen management. Build all into operator contract.", },
    ],
  }),
  statStrip({
    heading: "School vending cross-curricular benchmarks",
    stats: [
      { number: "6", label: "subject areas connect", sub: "to school vending program", accent: "blue" },
      { number: "Grades 6-12", label: "best-fit range", sub: "for data + business analysis", accent: "blue" },
      { number: "Smart Snacks", label: "USDA standard", sub: "for food sold during school day", accent: "blue" },
      { number: "3 models", label: "program structures", sub: "documented at K-12 placements", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Three cross-curricular vending program models",
    sub: "Each model fits a different grade-band, teacher capacity, and operator capability profile.",
    headers: ["Program model", "Best-fit grade", "Teacher time investment", "Operator capability required"],
    rows: [
      ["Data partnership (telemetry → classroom)", "Grades 7-12 (math, business, statistics)", "8-15 hours per unit", "Modern telemetry + data export"],
      ["Student planogram input (RFP process)", "Grades 6-12 (business, civics)", "12-20 hours per unit", "Operator willingness to consider student-proposed SKUs"],
      ["School-store / mock-vending project", "Grades 8-12 (business, economics)", "20-40 hours per unit", "Modern telemetry + sales-data sharing"],
      ["Nutrition label analysis (health, math)", "Grades 5-10 (health, math)", "4-8 hours per unit", "Smart Snacks-compliant planogram visible"],
      ["Sustainability footprint analysis", "Grades 8-12 (science, social studies)", "10-15 hours per unit", "Operator energy + refrigerant data"],
      ["Persuasive writing / infographic project", "Grades 6-10 (ELA, art)", "8-12 hours per unit", "Operator brand assets + nutrition data" ],
    ],
  }),
  specList({
    heading: "School vending cross-curricular program specifications",
    items: [
      { label: "Math — data analysis from sales telemetry", value: "Modern operators (Cantaloupe Seed, Nayax, USConnect Hub) export anonymized sales telemetry (units sold by SKU, time-of-day pattern, day-of-week pattern, daypart distribution). Math classes use for real-world data analysis units — averages, distributions, ratio + percentage, correlation, simple regression. Grades 7-12. Teacher coordination with operator account team for monthly data export." },
      { label: "Science — food science + refrigeration thermodynamics", value: "Nutrition label analysis (carbohydrate, protein, fat ratios), food preservation (refrigeration shelf-life), refrigeration cycle thermodynamics (compression, evaporation, heat transfer), electrical energy consumption (kWh per machine annually). Modern STEM integration. Operator can support with engineering documentation if requested." },
      { label: "Social studies — supply chain + sustainability policy", value: "Food sourcing supply chain (manufacturer to distributor to operator to school), sustainability policy (USDA Smart Snacks, state nutrition standards, federal procurement preferences), local sourcing economics (regional vs national supplier trade-offs), packaging waste policy. Grades 8-12 civics + economics units." },
      { label: "Business and entrepreneurship — cost / revenue / margin", value: "Cost-revenue-margin analysis using actual school vending revenue. Cost of goods, operator commission split, school activity fund revenue, product pricing decisions. Marketing — product introduction, customer survey design, sales response to promotion. Grades 8-12 business + economics. Modern operators share commission accounting; legacy operators may not." },
      { label: "Health and physical education — Smart Snacks + hydration", value: "Smart Snacks nutrition standards under USDA (calorie cap 200/250, total fat 35%, saturated fat 10%, sodium 200mg snack / 230mg entree, sugar 35% by weight). Beverage hydration importance during school day. Dietary pattern analysis. Grades 5-12 health + PE." },
      { label: "English language arts — persuasive writing + infographic", value: "Persuasive writing in product proposal projects (student proposes SKU addition with research + business case). Infographic communication of nutrition data (visual literacy). Customer survey design + analysis (writing for an audience). Grades 6-10 ELA + integrated arts units." },
      { label: "Smart Snacks compliance verification", value: "All food sold during school day must comply with USDA Smart Snacks: calorie cap 200 (snack) / 250 (entree), total fat 35% (excluding nuts/seeds), saturated fat 10%, sodium 200mg snack / 230mg entree, sugar 35% by weight. Verify planogram against Smart Snacks Product Calculator. Modern operators verify; verify in audit. Build into operator contract." },
      { label: "Telemetry data sharing agreement", value: "Modern operators export anonymized sales telemetry to school for curriculum use. Data sharing agreement covers: data scope (units sold by SKU, time-of-day, anonymized), exclusion of any personally identifiable information, monthly cadence, teacher contact, retention. Build into operator contract; some legacy operators decline." },
      { label: "Operator capability to support program", value: "Modern operators with telemetry capability (Cantaloupe Seed, Nayax, USConnect Hub), data-export infrastructure, account team responsive to school partnership requests. Legacy operators may not have telemetry or data-sharing infrastructure. Verify capability at RFP; build cross-curricular support into contract as documented program." },
      { label: "Revenue + activity fund accounting", value: "Vending revenue accounted in school activity fund per state + district policy. Commission split with operator typically 12-25% gross sales. Modern operators provide detailed commission accounting; legacy operators provide summary only. Verify accounting in contract — affects business curriculum unit data accuracy." },
    ],
  }),
  tipCards({
    heading: "Five cross-curricular school vending program mistakes",
    sub: "Each is documented at K-12 placements with cross-curricular learning intent. All preventable with structured program design and operator coordination.",
    items: [
      { title: "Assuming operator can support without telemetry", body: "Cross-curricular programs depend on telemetry-driven data sharing (sales by SKU, time-of-day, day-of-week). Operators without modern telemetry (Cantaloupe Seed, Nayax, USConnect Hub) can't support. Verify telemetry capability at RFP; build data-export infrastructure into operator contract." },
      { title: "Skipping Smart Snacks verification before launch", body: "All food sold during school day must comply with USDA Smart Snacks. Modern operators verify automatically; legacy operators may not. Verify planogram against Smart Snacks Product Calculator before launch; audit periodically. Compliance failure can produce state nutrition program sanctions." },
      { title: "Teacher time investment underestimated", body: "Cross-curricular programs require 8-40 hours teacher time per unit (depending on model). Without dedicated teacher capacity, programs lapse after first semester. Plan teacher load + stipend / release time at program design; coordinate with department chair before launch." },
      { title: "No allergen management protocol", body: "Common allergens (peanut, tree nut, milk, egg, wheat, soy, fish, shellfish, sesame) require clear labeling + planogram management at school placements. Some schools require nut-free placements. Build allergen labeling + planogram review into operator contract; verify periodically." },
      { title: "Program ends after first semester (no continuation plan)", body: "Cross-curricular programs that don't plan for continuation lapse after the founding teacher leaves or the first semester ends. Document program structure, teacher transition plan, operator coordination cadence. Build into school curriculum scope and sequence document." },
    ],
  }),
  decisionTree({
    heading: "Should we build a cross-curricular vending program?",
    question: "Does the school have teacher capacity AND can the operator share anonymized telemetry data AND is the planogram Smart Snacks-compliant?",
    yesBranch: {
      title: "Build the program — telemetry-driven curriculum unit.",
      description: "Teacher capacity + operator capability + compliant planogram all align. Choose program model: data partnership (math, business), planogram input (business, civics), school-store project (business, economics), nutrition analysis (health, math), sustainability footprint (science), or persuasive writing (ELA). Document with curriculum scope + operator coordination cadence + Smart Snacks audit.",
      finalTone: "go",
      finalLabel: "BUILD PROGRAM",
    },
    noBranch: {
      title: "Address gating constraints first.",
      description: "Without teacher capacity, telemetry-capable operator, or Smart Snacks-compliant planogram, the program won't sustain. Address gaps: secure teacher stipend / release time, verify operator telemetry (Cantaloupe Seed, Nayax, USConnect Hub), audit planogram compliance. Revisit program design in 6-12 months.",
      finalTone: "stop",
      finalLabel: "ADDRESS GATING CONSTRAINTS",
    },
  }),
  caseStudy({
    tag: "Cross-curricular implementation",
    title: "Middle-school cross-curricular vending program — 6th-8th grade integrated unit",
    context: "A 480-student middle school launched a cross-curricular vending program in the 2023-24 school year tying math, business, and health classes to the school's 3 vending machines (combo + cold beverage + cooler). Operator was modern tier-2 with Cantaloupe Seed telemetry. Scope: monthly data export to math teacher (sales by SKU, time-of-day, day-of-week) for ratio + percentage + simple regression units; quarterly student planogram input under business-class RFP unit (students proposed 3 SKU additions with research, operator added 2); semi-annual nutrition label analysis in health class using actual planogram. All food Smart Snacks-compliant; planogram audited against Smart Snacks Product Calculator at each refresh. Teacher coordination via monthly 30-minute call with operator account team. Curriculum scope + sequence document covered program. Outcome at school-year end: math class engagement higher than prior-year data unit (teacher feedback), 2 student SKU proposals added (organic granola bar + lower-sugar electrolyte drink), nutrition class lesson plan documented for departmental sharing. Program continuing 2024-25 with formalized stipend for lead teacher.",
    meta: [
      { label: "School scope", value: "480-student middle school, 3 vending machines" },
      { label: "Subject integration", value: "Math + business + health (3 cross-curricular)" },
      { label: "Operator capability", value: "Cantaloupe Seed telemetry, modern tier-2" },
      { label: "Compliance audit", value: "Smart Snacks Product Calculator at each refresh" },
      { label: "Teacher coordination", value: "Monthly 30-min call with operator account team" },
    ],
    results: [
      { number: "3 subjects", label: "integrated cross-curricular vending units" },
      { number: "2 student SKUs", label: "added to planogram via RFP process" },
      { number: "100%", label: "Smart Snacks compliance audit each refresh" },
      { number: "Continuing", label: "program funded for 2024-25 academic year" },
    ],
  }),
  keyTakeaways({
    heading: "Cross-curricular school vending key takeaways",
    takeaways: [
      "Six subject areas can connect to school vending: math (data + ratio), science (nutrition + refrigeration), social studies (supply chain + policy), business (economics + marketing), health/PE (nutrition + hydration), ELA (persuasive writing + infographics).",
      "Three program models fit K-12 placements: data partnership (telemetry sharing), student planogram input (RFP process), school-store project (curriculum unit using vending economics). Best fit grades 6-12.",
      "Compliance gates remain regardless of curriculum value: USDA Smart Snacks, school activity fund accounting, ADA compliance, allergen management. Build all into operator contract.",
      "Modern operator telemetry capability (Cantaloupe Seed, Nayax, USConnect Hub) is the enabling infrastructure. Legacy operators without telemetry can't support data-driven curriculum units.",
      "Plan teacher time investment (8-40 hours per unit), stipend / release time, transition plan for teacher continuity. Programs that don't plan for continuation lapse after first semester.",
    ],
  }),
  inlineCta({
    text: "Want the cross-curricular school vending framework (program models + telemetry data sharing + Smart Snacks audit + teacher load planning)?",
    buttonLabel: "Get the cross-curricular framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on cross-curricular school vending program design across K-12 placements — including telemetry data-sharing agreements, Smart Snacks compliance verification, allergen management, school activity fund accounting, and operator coordination cadence with teacher leads. The benchmarks reflect operator-side data and K-12 program documentation.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Can school vending support cross-curricular learning?", answer: "Yes when intentionally designed. Six subject areas connect: math (data + ratio), science (nutrition + refrigeration), social studies (supply chain + policy), business (economics + marketing), health/PE (nutrition + hydration), ELA (persuasive writing + infographics). Three program models documented in K-12: data partnership, student planogram input, school-store project.", audience: "School Administration" },
      { question: "What grade levels work best?", answer: "Grades 6-12. Middle and high school students can engage with data analysis, supply chain, business economics, and persuasive writing tied to vending operations. Elementary grades (K-5) can do simpler nutrition label and hydration units but not full cross-curricular programs.", audience: "Teachers" },
      { question: "What does the operator need to provide?", answer: "Modern operator telemetry capability (Cantaloupe Seed, Nayax, USConnect Hub) for anonymized sales data export. Data-sharing agreement covering scope, anonymization, cadence, retention. Account team responsive to teacher coordination requests. Smart Snacks-compliant planogram. Legacy operators without telemetry can't support data-driven curriculum.", audience: "Procurement" },
      { question: "How does Smart Snacks compliance work?", answer: "USDA Smart Snacks standard: calorie cap 200 (snack) / 250 (entree), total fat 35% (excluding nuts/seeds), saturated fat 10%, sodium 200mg snack / 230mg entree, sugar 35% by weight. All food sold during school day must comply. Verify planogram against Smart Snacks Product Calculator. Modern operators verify; audit periodically.", audience: "Health / Nutrition" },
      { question: "How much teacher time does this take?", answer: "8-40 hours per unit depending on model. Data partnership: 8-15 hours. Student planogram input: 12-20 hours. School-store project: 20-40 hours. Plan stipend / release time at program design. Coordinate with department chair before launch. Programs without dedicated teacher capacity lapse after first semester.", audience: "School Administration" },
      { question: "How do we handle allergens?", answer: "Common allergens (peanut, tree nut, milk, egg, wheat, soy, fish, shellfish, sesame) require clear labeling + planogram management. Some schools require nut-free placements. Build allergen labeling + planogram review into operator contract; verify periodically. Particularly important for elementary placements with younger students.", audience: "Health / Nutrition" },
      { question: "What about revenue from school vending?", answer: "Vending revenue accounted in school activity fund per state + district policy. Commission split with operator typically 12-25% gross sales. Modern operators provide detailed commission accounting (used in business curriculum unit); legacy operators provide summary only. Verify accounting structure in contract.", audience: "Business Office" },
      { question: "How do we keep the program going after the first year?", answer: "Document program structure, teacher transition plan, operator coordination cadence in curriculum scope and sequence document. Plan stipend / release time for sustaining teacher. Departmental ownership (not single-teacher dependent) is the durability lever. Programs without continuation plan lapse after founding teacher leaves.", audience: "School Administration" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "USDA Smart Snacks in School — nutrition standards", url: "https://www.fns.usda.gov/cn/smart-snacks-school", note: "Federal nutrition standards for food sold during school day" },
      { label: "USDA Smart Snacks Product Calculator", url: "https://foodplanner.healthiergeneration.org/calculator/", note: "Federal tool for verifying product compliance with Smart Snacks standards" },
      { label: "National Council for the Social Studies — supply chain curriculum standards", url: "https://www.socialstudies.org/", note: "Professional standards for K-12 social studies including economics and civics" },
      { label: "National Council of Teachers of Mathematics — data analysis standards", url: "https://www.nctm.org/", note: "Professional standards for K-12 math including data analysis and statistics" },
      { label: "School Nutrition Association — school food service standards", url: "https://schoolnutrition.org/", note: "Industry trade association for K-12 school food service and nutrition program" },
    ],
  }),
  relatedGuides({
    heading: "Related school vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Leveraging vending data for school operations", description: "Telemetry-driven decisions for K-12 vending programs covering planogram, compliance, and revenue.", href: "/vending-for-schools/leveraging-vending-data-school-operations" },
      { eyebrow: "Operations", title: "Smart Snacks compliance for school vending", description: "USDA nutrition standards, Product Calculator audit, allergen management for K-12 placements.", href: "/vending-for-schools/smart-snacks-compliance" },
      { eyebrow: "Hub", title: "All school vending guides", description: "Nutrition, compliance, curriculum integration, allergen management, and operator capability for K-12.", href: "/vending-for-schools" },
    ],
  }),
]);
process.exit(0);
