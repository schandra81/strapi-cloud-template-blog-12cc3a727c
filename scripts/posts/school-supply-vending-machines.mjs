import { seedPost, tldr, statStrip, specList, costBreakdown, tipCards, dimensionDiagram, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("school-supply-vending-machines", [
  tldr({
    heading: "What are school supply vending machines and where do they go in a building?",
    paragraph:
      "School supply vending machines are coil-based merchandisers configured for pencils, pens, erasers, notebooks, folders, highlighters, glue sticks, scissors, rulers, index cards, sticky notes, calculators (TI-30 / TI-84 at high school), hygiene products (deodorant, feminine hygiene, sanitizer, tissues), and increasingly chromebook chargers + USB cables — typically deployed at K-12 schools (cafeteria adjacency, library, main office hallway), university student unions + libraries + 24/7 computer labs, community college study halls, and military / DoD school placements. Common hardware: 39-inch glass-front coil merchandiser (AMS / Crane / National Vendors-style chassis) holding 40-60 SKUs across 30-45 selections, with EMV / NFC / mobile-wallet payment and increasingly student-ID badge integration (closed-loop integration with district student account or campus card system). 2025 spec includes hygiene-product compartment (feminine hygiene + deodorant + sanitizer; ADA-compliant + privacy-screened), cellular telemetry for stockout alerts + monthly per-SKU rotation, ENERGY STAR for non-refrigerated dispensing (low standby draw), and equity-stocked compliance for Title I + IDEA + 504-accommodation populations (free hygiene + base supplies at qualifying schools). Capital: $5,500-$9,500 per unit; lease $145-265/month; revenue model: commission-share (10-25% to school) OR district-funded cost-recovery (no commission; supplies subsidized by Title I / district budget / PTA grant). Best results: cafeteria + library + main hallway placement, telemetry-driven monthly SKU rotation, hygiene compartment with ADA + privacy compliance, student-ID badge integration with cost-recovery model at Title I schools.",
    bullets: [
      { emphasis: "$5.5-9.5K capital / $145-265 lease / month:", text: "39-inch coil merchandiser, 40-60 SKUs, EMV / NFC / mobile-wallet + student-ID badge, ENERGY STAR low-standby, cellular telemetry, hygiene compartment with privacy screen." },
      { emphasis: "Two revenue models:", text: "Commission-share 10-25% to school at general placement; district-funded cost-recovery (no commission; supplies subsidized) at Title I + IDEA-served schools where equity is priority over revenue." },
      { emphasis: "Best practice deployment:", text: "Cafeteria + library + main hallway, telemetry-driven monthly SKU rotation, hygiene compartment ADA-compliant + privacy-screened, student-ID badge cost-recovery at Title I, quarterly planogram review with school nurse + facilities." },
    ],
  }),
  statStrip({
    heading: "School supply vending machine benchmarks",
    stats: [
      { number: "$5.5-9.5K", label: "capital per unit", sub: "39-inch coil merchandiser", accent: "blue" },
      { number: "40-60", label: "SKUs per machine", sub: "30-45 selections across writing + paper + hygiene", accent: "blue" },
      { number: "10-25%", label: "commission to school", sub: "general placement", accent: "blue" },
      { number: "$1.5-3K", label: "annual revenue per machine", sub: "mid-traffic K-12 placement", accent: "blue" },
    ],
  }),
  specList({
    heading: "School supply vending machine specifications",
    items: [
      { label: "Chassis + merchandising format", value: "39-inch glass-front coil merchandiser (AMS / Crane / National Vendors-style chassis). 40-60 SKU capacity across 30-45 selections. Coil-based dispensing for pencils, notebooks, erasers, calculators. Specialty compartment for hygiene products (feminine hygiene, deodorant, sanitizer) with privacy screen — modern operators include; legacy operators don't." },
      { label: "Product SKU mix — writing + paper", value: "Pencils (#2 yellow + mechanical), pens (BIC + Pilot), erasers, highlighters (yellow + multi-color), glue sticks, scissors (kid-safe + adult), rulers (6-inch + 12-inch), index cards, sticky notes, folders, single-subject notebooks, composition books, spiral notebooks. Wholesale via SchoolMart, S&S Worldwide, Discount School Supply, or local distributor." },
      { label: "Product SKU mix — hygiene + health", value: "Feminine hygiene (pads + tampons + liners), deodorant, hand sanitizer, tissues, bandages, dental floss. ADA-compliant + privacy-screened compartment per ASHA / OSHA / state-DOE guidance. Modern operators stock; legacy operators don't. Equity-stocked at Title I + IDEA-served schools (free / subsidized via district + Title I budget)." },
      { label: "Product SKU mix — tech + chargers", value: "Chromebook chargers (USB-C + barrel-jack), USB cables (USB-A to USB-C / Lightning / Micro-USB), small earbuds (3.5mm + USB-C), 9V batteries (TI-84 graphing calculator), AAA / AA batteries. Higher-margin tier; offsets thin margin on writing + paper. Common at high school + university + community college placements." },
      { label: "Calculator availability", value: "TI-30 (basic scientific, $12-15 wholesale) at middle school; TI-30 + TI-84 (graphing, $90-110 wholesale) at high school + community college + university. Replacement battery (9V) at all calculator-stocked locations. AP / college-board approved models verified at high school placement; specify at planogram." },
      { label: "Payment stack", value: "EMV chip + contactless NFC + mobile-wallet (Apple Pay, Google Pay) for general placement. Student-ID badge integration (closed-loop with district student account or campus card system) for cost-recovery model at Title I + IDEA-served schools — student picks supplies; cost charged to district / Title I budget, not student. Modern operators support; legacy operators don't." },
      { label: "Telemetry + reporting", value: "Cellular telemetry for stockout alerts + monthly per-SKU rotation data + dispense logs. Modern operators provide; legacy operators run blind and routinely run out of high-frequency items (pencils, hygiene). Anomaly detection on dispense pattern outside school-day hours flags potential after-hours misuse." },
      { label: "ADA + privacy compliance", value: "Reach zones 15-48 inches per ADA standards. Touchscreen accessible at standing + seated height; tactile / audio prompts for low-vision users. Hygiene compartment with privacy screen (visual obscuring) for feminine hygiene + deodorant dispense — important at middle school + high school. Compliant at federal + state placements." },
      { label: "Equity-stocked compliance", value: "Title I + IDEA + 504-accommodation populations: free / subsidized base supplies + hygiene via district + Title I budget. Cost-recovery model (no commission; supplies subsidized) replaces commission model. Aligns with state DOE equity guidance + ASHA + OSHA period-poverty / supply-equity standards." },
      { label: "Operator + restocking cadence", value: "Modern operators provide bi-weekly to monthly restock cadence with telemetry-driven planogram refresh. Restock prioritized at peak demand (back-to-school August / September, mid-quarter October / February). Hygiene products restocked weekly minimum. Operator-coordinated at K-12; district-coordinated at fully district-owned." },
    ],
  }),
  costBreakdown({
    heading: "School supply vending machine 12-month economics",
    sub: "Mid-traffic K-12 placement (cafeteria adjacency) on commission-share model. Illustrative; varies by district + traffic.",
    items: [
      { label: "Annual lease / amortized capital ($7K @ 36-month lease)", amount: "$2,400", note: "Operator-owned + leased; school avoids capital outlay" },
      { label: "Estimated annual gross revenue at mid-traffic K-12", amount: "$2,500", note: "Pencil + paper + hygiene + occasional calculator mix" },
      { label: "Commission to school (18% on net sales)", amount: "$405", note: "Net of refunds + processing fees; varies 10-25%" },
      { label: "Cost-recovery hygiene subsidy (Title I budget)", amount: "$300-600", note: "If equity-stocked model; offset by district / Title I budget" },
      { label: "Custom wrap (school mascot, 2-year cycle)", amount: "$150-400", note: "Optional; amortized" },
    ],
    totalLabel: "Net to school (commission-share, mid-traffic)",
    totalAmount: "~$405 commission + equity stock value",
  }),
  dimensionDiagram({
    heading: "School supply vending machine footprint",
    sub: "Standard 39-inch coil merchandiser chassis. Verify electrical + ADA reach zones at install survey.",
    machineName: "School supply coil merchandiser (39-inch chassis)",
    width: "39 in",
    depth: "36 in",
    height: "72 in",
    footprint: "9.75 sq ft",
    weightEmpty: "580-680 lb",
    weightLoaded: "780-920 lb (loaded with full SKU mix)",
    doorwayClearance: "36-in standard doorway clearance",
    note: "Confirm NEMA 5-15 / 5-20 electrical, floor levelness, and ADA reach zone (15-48 inches). Hygiene compartment with privacy screen adds 2-4 inches to right-side housing.",
  }),
  decisionTree({
    heading: "Should you deploy a school supply vending machine?",
    question: "Does your school have at least 400 students AND a high-traffic placement zone (cafeteria adjacency / library / main hallway) AND administrative support for hygiene + equity compliance?",
    yesBranch: {
      title: "Yes — proceed with school supply deployment",
      description: "Choose revenue model: commission-share at general placement, cost-recovery at Title I / IDEA-served schools. Specify ADA + privacy-screened hygiene compartment + cellular telemetry + student-ID badge integration. Plan monthly SKU rotation + quarterly planogram review with school nurse + facilities.",
      finalTone: "go",
      finalLabel: "Proceed",
    },
    noBranch: {
      title: "No — defer or use alternative format",
      description: "Sub-400 students or non-supportive admin produces low utilization + stale-supply issues. Consider centralized supply closet, classroom-bin model, or PTA-funded supply drive instead. Re-evaluate vending at higher enrollment + admin alignment.",
      finalTone: "stop",
      finalLabel: "Defer",
    },
  }),
  tipCards({
    heading: "Five school supply vending machine success patterns",
    sub: "Each reflects modern K-12 + community college + university best practice.",
    items: [
      { title: "Equity-stocked at Title I + IDEA-served schools", body: "Cost-recovery model (no commission; supplies subsidized by district / Title I / PTA budget) replaces commission model at schools serving Title I + IDEA + 504-accommodation populations. Free hygiene + base supplies via student-ID badge. Aligns with state DOE equity guidance + ASHA / OSHA period-poverty standards." },
      { title: "Hygiene compartment ADA-compliant + privacy-screened", body: "Feminine hygiene + deodorant + sanitizer + tissues in privacy-screened compartment. Important at middle school + high school for student dignity. ADA-compliant reach zones (15-48 inches). Modern operators include; legacy operators don't. Specify at proposal." },
      { title: "Telemetry-driven monthly SKU rotation", body: "Cellular telemetry surfaces per-SKU dispense data + stockout alerts + slow-rotation flags. Monthly SKU rotation based on data — pull slow-rotators (rulers, scissors) and reorder fast-movers (pencils, hygiene). Quarterly planogram review with school nurse + facilities. Modern operators provide; legacy operators run blind." },
      { title: "Calculator + tech tier offsets thin paper margin", body: "TI-30 + TI-84 graphing calculator at high school + university. Chromebook chargers + USB cables. Higher-margin tier ($90-110 calculator wholesale, $30-50 retail markup) offsets thin margin on pencils + paper. Common at high school + community college + university." },
      { title: "Cafeteria + library + main hallway placement", body: "Cafeteria adjacency (peak traffic, lunch period). Library (homework period, after-school). Main hallway (between-class). Avoid back-of-building (low traffic) + isolated classroom corridor (limited utilization). Modern operators provide install survey; coordinate with school facilities + administration." },
    ],
  }),
  inlineCta({
    text: "Want the school supply vending framework (hardware + planogram + equity model + telemetry)?",
    buttonLabel: "Get the school supply framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on school supply vending machine deployment across K-12 schools, community colleges, universities, and DoD school placements — including hardware specification (39-inch coil merchandiser + EMV / NFC + student-ID badge integration), ADA + privacy-screened hygiene compartment, equity-stocked cost-recovery model at Title I + IDEA-served schools, telemetry-driven monthly SKU rotation, calculator + tech tier planogram, ENERGY STAR low-standby, and operator coordination. Benchmarks reflect operator-side data + school nurse + facilities feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What are school supply vending machines and where do they go?", answer: "Coil-based merchandisers dispensing pencils, pens, notebooks, calculators, hygiene products, and tech accessories. Deployed at K-12 cafeteria + library + main hallway, university student unions + libraries + 24/7 labs, community college study halls, and DoD school placements. 39-inch glass-front chassis with 40-60 SKUs + 30-45 selections.", audience: "School Administrators" },
      { question: "How much do they cost and who pays?", answer: "$5.5-9.5K capital; $145-265/month lease. Commission-share model: operator owns + installs, school receives 10-25% of net sales. Cost-recovery model (Title I / IDEA-served schools): supplies subsidized by district / Title I / PTA budget, no commission, free dispensing via student-ID badge. Match model to school equity profile.", audience: "Procurement" },
      { question: "What SKUs do they stock?", answer: "Writing + paper (pencils, pens, erasers, highlighters, glue sticks, scissors, rulers, index cards, sticky notes, folders, notebooks). Hygiene + health (feminine hygiene, deodorant, sanitizer, tissues, bandages). Tech + chargers (Chromebook chargers, USB cables, earbuds, batteries). Calculators (TI-30 + TI-84 at high school + university). 40-60 SKUs typical.", audience: "School Nurses" },
      { question: "How does the hygiene compartment work?", answer: "Privacy-screened compartment (visual obscuring) for feminine hygiene + deodorant + sanitizer + tissues. ADA-compliant reach zones (15-48 inches). Important at middle school + high school for student dignity. Modern operators include; legacy operators don't. Title I + IDEA-served schools subsidize via district budget for free dispensing.", audience: "School Nurses" },
      { question: "What's the equity-stocked model?", answer: "Title I + IDEA + 504-accommodation populations: free / subsidized base supplies + hygiene via district + Title I + PTA budget. Cost-recovery model replaces commission model. Student-ID badge dispenses without student payment; cost charged to district / Title I budget. Aligns with state DOE equity guidance + ASHA + OSHA period-poverty standards.", audience: "Equity Coordinators" },
      { question: "Are these machines ADA-compliant?", answer: "Modern units yes — reach zones 15-48 inches per ADA standards; touchscreen accessible at standing + seated height; tactile / audio prompts for low-vision users. Hygiene compartment privacy screen for student dignity. Verify at install survey. Required at federal + state placements; best practice at all placements.", audience: "ADA Coordinators" },
      { question: "How often is the machine restocked?", answer: "Bi-weekly to monthly cadence with telemetry-driven planogram refresh. Restock prioritized at peak demand (back-to-school August / September, mid-quarter October / February, exam-period). Hygiene products restocked weekly minimum. Modern operators coordinate; district facilities oversight at fully district-owned model.", audience: "Facilities" },
      { question: "Which operators support school supply vending?", answer: "Specialty operators with 39-inch coil merchandiser fleet + hygiene compartment + student-ID badge integration + ADA compliance + cellular telemetry + ENERGY STAR + custom wrap coordination. National operators (Five Star Food Service, Canteen specialty) + regional specialty providers. Verify at proposal demo + reference checks.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "U.S. Department of Education — Title I + IDEA funding", url: "https://www.ed.gov/", note: "Federal funding sources supporting equity-stocked school supply programs" },
      { label: "ASHA — period poverty + hygiene equity in schools", url: "https://www.ashaweb.org/", note: "American School Health Association coverage of hygiene equity in K-12" },
      { label: "ADA — Americans with Disabilities Act accessibility standards", url: "https://www.ada.gov/", note: "Federal accessibility standards governing reach zones + UI requirements" },
      { label: "NAMA — school + campus vending operator standards", url: "https://www.namanow.org/", note: "Industry trade association covering K-12 + university specialty vending standards" },
      { label: "Texas Instruments — TI-30 / TI-84 calculator specifications", url: "https://education.ti.com/", note: "Calculator manufacturer with AP / college-board approved model coverage" },
    ],
  }),
  relatedGuides({
    heading: "Related specialty vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Book vending machines", description: "Paperback + manga + reading-incentive token at K-12 + library + airport.", href: "/specialty-vending-machines/book-vending-machines" },
      { eyebrow: "Operations", title: "Toy vending machines", description: "Capsule + bouncy ball + licensed blind-bag at family-entertainment + restaurant.", href: "/specialty-vending-machines/toy-vending-machines" },
      { eyebrow: "Hub", title: "All specialty vending guides", description: "Equipment, planogram, payment, distributor sourcing, revenue model patterns.", href: "/specialty-vending-machines" },
    ],
  }),
]);
process.exit(0);
