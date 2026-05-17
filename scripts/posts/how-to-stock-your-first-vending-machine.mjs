import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-stock-your-first-vending-machine", [
  tldr({
    heading: "How do you stock your first vending machine — what's the playbook from sourcing to planogram to first restock?",
    paragraph:
      "Stocking your first vending machine runs across five operational steps: (1) Audience profiling — identify workforce or guest demographic, dietary preferences, allergen requirements, and typical purchase patterns at the placement; (2) Planogram design — 40-60% snack/treat category, 25-35% beverage category, 10-20% healthy/better-for-you, 5-10% specialty/dietary (vegan, gluten-free, nut-free) at most placements, with adjustment based on workforce profile; (3) Sourcing — open accounts with a major vending wholesaler (Vistar, Eby-Brown, Core-Mark) for snack and beverage SKU breadth, supplement with DSD relationships (Pepsi, Coca-Cola, Frito-Lay) where market access supports, source specialty healthy or dietary SKUs from specialty distributors; (4) Initial stock load — 40-60 selections per snack machine, 8-10 per beverage machine, with 2-4 facings per selection to enable balanced sell-through and reduce restock frequency at startup scale; (5) First-week monitoring — track sell-through by SKU via telemetry dashboard, identify fast-movers and slow-movers within 7-14 days, adjust planogram by week 3 based on actual purchase data. Initial stock investment $400-$1,000 per machine. First restock typically at 7-14 days; cadence settles to 1-2× per week at most placements. Critical mistakes: overstocking slow-moving specialty SKUs, ignoring expiration dates on perishables (snack 3-9 month shelf life, beverages 6-18 month, refrigerated 5-14 days), placing high-margin items in low-eye-level rows, skipping point-of-purchase labeling for dietary tags. Don't over-engineer the initial planogram — load broad coverage, observe actual sell-through, refine within 2-3 weeks.",
    bullets: [
      { emphasis: "Five operational steps — audience + planogram + sourcing + load + monitoring:", text: "Sequential workflow from audience profiling through first-week monitoring. Most first-time operators skip audience profiling; produces planogram-mismatch and slow sell-through." },
      { emphasis: "Initial planogram 40-60% snack / 25-35% beverage / 10-20% healthy / 5-10% specialty:", text: "Default starting mix at most placements. Adjust based on workforce demographic. Healthcare and wellness-led accounts shift toward healthy/dietary share." },
      { emphasis: "Initial stock $400-$1,000 per machine; first restock at 7-14 days:", text: "40-60 selections per snack machine + 8-10 per beverage. First restock cadence reveals sell-through; planogram refinement by week 3." },
    ],
  }),
  statStrip({
    heading: "First machine stocking benchmarks",
    stats: [
      { number: "$400-$1K", label: "initial stock cost", sub: "per machine", accent: "orange" },
      { number: "40-60", label: "selections per snack machine", sub: "typical capacity", accent: "blue" },
      { number: "7-14 days", label: "first restock window", sub: "settles to 1-2× per week", accent: "blue" },
      { number: "2-3 weeks", label: "to planogram refinement", sub: "telemetry-driven", accent: "blue" },
    ],
  }),
  timeline({
    heading: "First-machine stocking playbook",
    sub: "Realistic sequence from sourcing through first-week monitoring. Total elapsed: ~3 weeks from sourcing to refined planogram.",
    howToName: "How to stock your first vending machine",
    totalTime: "P3W",
    steps: [
      { label: "STEP 1", title: "Audience profiling at placement", description: "Identify workforce or guest demographic at placement: age range, gender mix, dietary preferences (vegetarian, vegan, kosher, halal, gluten-free), allergen requirements, typical purchase patterns (breakfast snack, lunch beverage, afternoon caffeine, end-of-shift). Walk site with placement contact; observe traffic patterns and current snack consumption. 30-60 minute site visit produces audience profile for planogram." },
      { label: "STEP 2", title: "Planogram design + SKU selection", description: "Design initial planogram: 40-60% snack/treat category, 25-35% beverage category, 10-20% healthy/better-for-you, 5-10% specialty/dietary. Select specific SKUs based on audience profile: top-selling snacks (Lay's, Doritos, M&Ms, Snickers, Cheez-It), top-selling beverages (Coke, Pepsi, Diet Coke, water, Gatorade), healthy options (KIND, RXBar, Skinny Pop, Quest, Greek yogurt where refrigerated), allergen-friendly variants (Enjoy Life, MadeGood, Skinny Pop) for nut-free / dairy-free coverage." },
      { label: "STEP 3", title: "Sourcing + wholesaler order", description: "Open account with major vending wholesaler: Vistar (largest, national), Eby-Brown, or Core-Mark. Account opening 3-7 business days. Place initial stock order: 40-60 selections × 2-4 facings = 80-240 units per snack machine. Supplement with DSD if Pepsi/Coca-Cola/Frito-Lay relationships available (DSD delivers branded beverages and chips direct to operator). Specialty SKUs from specialty distributors (Vistar carries breadth)." },
      { label: "STEP 4", title: "Initial stock load + planogram setup", description: "Load machine to planogram: 40-60 selections per snack machine, 8-10 per beverage machine, 2-4 facings per selection. Place high-margin items at eye level (rows 2-4 of 6-row machine); place high-volume staples at lower-eye-level rows for visibility; place dietary/specialty in dedicated section with point-of-purchase labeling. Verify pricing tags + dietary tags + allergen icons. Test each selection through dispense + payment + telemetry data flow." },
      { label: "STEP 5", title: "First-week monitoring + telemetry data", description: "Monitor telemetry dashboard daily for first 7-14 days. Identify fast-movers (sell-through > 60% by day 7) and slow-movers (sell-through < 20% by day 14). Note any SKUs producing dispute or refund (mechanical jam, expiration, label issue). Document data for planogram refinement at week 3. First restock typically at day 7-14 depending on placement traffic; replace fast-movers proportionally + introduce trial SKUs in slow-mover slots." },
      { label: "STEP 6", title: "Planogram refinement at week 3", description: "Refine planogram based on telemetry data. Replace consistent slow-movers (< 20% sell-through over 2-3 restock cycles) with trial SKUs. Increase facings on consistent fast-movers (> 60% sell-through). Adjust healthy-share + dietary-tagged share based on actual purchase pattern. Settle restock cadence to 1-2× per week typical; some high-traffic placements settle to 3-4× per week. Document refined planogram for operator account file." },
    ],
  }),
  comparisonTable({
    heading: "Initial planogram by placement type",
    sub: "Starting mix at common placement types. Adjust within 2-3 weeks based on telemetry sell-through data.",
    headers: ["Placement type", "Snack share", "Beverage share", "Healthy share", "Specialty/dietary"],
    rows: [
      ["Standard office (mixed demographic)", "45-55%", "25-30%", "10-15%", "5-10%"],
      ["Tech / engineering office", "35-45%", "30-35%", "15-20%", "5-10%"],
      ["Healthcare clinic / hospital", "30-40%", "25-30%", "20-30%", "10-15%"],
      ["K-12 school", "40-50%", "25-30%", "20-30%", "5-10%"],
      ["Industrial / warehouse", "55-65%", "25-30%", "5-10%", "5%"],
      ["Gym / fitness center", "25-35%", "30-40%", "25-30%", "10-15%"],
      ["Apartment building", "45-55%", "25-30%", "10-15%", "5-10%"],
      ["Corporate campus (wellness-led)", "30-40%", "25-30%", "20-25%", "10-15%"],
    ],
  }),
  specList({
    heading: "Sourcing and SKU selection detail",
    items: [
      { label: "Wholesaler account opening", value: "Vistar (largest, national vending wholesaler) — covers snack + beverage + healthy + specialty SKUs. Eby-Brown (national, similar breadth). Core-Mark (national, broader convenience). Account opening 3-7 business days; credit application required. Minimum order $300-$500 typical at Vistar. Most operators standardize on one primary wholesaler + DSD relationships for branded beverage/chip." },
      { label: "DSD (Direct Store Delivery) relationships", value: "Pepsi, Coca-Cola, Frito-Lay deliver branded SKUs direct to operator with route service. Frito-Lay covers Lay's, Doritos, Cheetos, Sun Chips, Smartfood. Pepsi/Coke cover branded beverages. Market access varies — some markets don't support DSD at small operator scale. DSD typically produces better margin on branded staples vs wholesaler; supplement with wholesaler for breadth." },
      { label: "Snack SKU breadth", value: "Top-selling vending snacks: salty (Lay's, Doritos, Cheez-It, Cheetos, Pretzels, Goldfish), sweet (M&Ms, Snickers, Twix, Reese's, KitKat, Skittles), savory (jerky, trail mix, mixed nuts), better-for-you (KIND, RXBar, Skinny Pop, Quest, Clif, Quaker rice cakes). Top 20-30 SKUs by sell-through cover 60-70% of revenue; remaining 30-40% from rotating breadth." },
      { label: "Beverage SKU breadth", value: "Top-selling vending beverages: cola (Coke, Pepsi, Dr Pepper), diet (Diet Coke, Diet Pepsi, Coke Zero), water (Dasani, Aquafina, Smart Water, sparkling), sports (Gatorade, Powerade), energy (Red Bull, Monster, Celsius, C4), coffee/tea (cold brew, Snapple, Pure Leaf), juice (apple, orange, Naked, Bolthouse). Beverage machine 8-10 selections typical; some markets prefer beverage in combo machine slots." },
      { label: "Healthy / better-for-you SKUs", value: "Defined healthy criteria (≤200 cal, ≥5g protein, ≤250mg sodium, ≤10g added sugar) drives selection. KIND, RXBar, Quest, Skinny Pop, Bare crisps, Hippeas, Chomps, Pan's Mushroom Jerky, Hu Kitchen. Refrigerated tier: Greek yogurt, hummus packs, plant-protein shakes. 10-20% planogram share at most placements; 20-30% at wellness-led accounts." },
      { label: "Dietary / allergen-friendly SKUs", value: "Vegan (Enjoy Life cookies, Hippeas, Bare crisps, Skinny Pop), gluten-free (Smartfood, Skinny Pop, Snyder's GF pretzels, Quest), nut-free (MadeGood, Enjoy Life, Skinny Pop), dairy-free (most vegan also dairy-free), kosher (verify hechsher), halal (verify certification). Allergen-tagged SKUs lift dietary-tagged transaction share +15-30% with point-of-purchase labeling." },
      { label: "Expiration date management", value: "Snack shelf life 3-9 months typical (verify per SKU). Beverage 6-18 months. Refrigerated 5-14 days (yogurt, hummus, salads, sandwiches). Operator rotates stock first-in-first-out at each restock. Telemetry dashboard flags slow-movers approaching expiration; planogram pulls SKU before expiry. Expired-product disputes damage account relationship — discipline matters from first restock." },
      { label: "Point-of-purchase labeling", value: "Color-coded planogram tags (green = healthy under criteria, yellow = moderate, orange = treat) lift healthy SKU selection +15-25%. Dietary icons (vegan, gluten-free, nut-free, kosher, halal) increase dietary-tagged transaction share +15-30%. Allergen warnings (contains nuts, dairy, soy, wheat) required for compliance. Modern operator standard; legacy operators often skip — differentiates at proposal." },
      { label: "Pricing and margin", value: "Snack typical retail $1.50-$3.00, cost $0.40-$1.25, margin 50-65%. Beverage retail $1.75-$3.50, cost $0.50-$1.50, margin 55-70%. Healthy SKU often retail $2.50-$4.00, cost $1.00-$2.50, margin 45-55% (lower margin offset by lift in healthy-share at wellness-led accounts). Combo machine planogram balances category-level margin for overall placement profitability." },
    ],
  }),
  tipCards({
    heading: "Five first-stocking mistakes",
    sub: "Each documented in operator post-launch reviews. All preventable with structured first-machine playbook.",
    items: [
      { title: "Skipping audience profiling", body: "Most common mistake at first machines. Operator loads generic 'best-seller' planogram without observing workforce profile at placement. Produces planogram-mismatch: tech offices want better-for-you and energy; warehouse wants high-volume snacks and beverages; healthcare wants dietary breadth. 30-60 minute site visit before sourcing produces audience profile; structures planogram." },
      { title: "Overstocking slow-moving specialty", body: "Operators load 20-30% specialty/dietary on assumption that audiences want breadth. Most placements move 60-70% of revenue through top 20-30 SKUs (staples + branded snacks/beverages). Specialty share 5-15% typical at most placements; 20-30% at wellness-led accounts only. Don't overload specialty; reserve slots for telemetry-driven trials." },
      { title: "Ignoring expiration dates", body: "Operators that don't rotate first-in-first-out produce expired-product disputes. Snack 3-9 month shelf life; beverage 6-18 month; refrigerated 5-14 days. Telemetry dashboard flags slow-movers approaching expiry. Pull SKU before expiry; replace with trial. Expired-product disputes are most damaging quality-of-service incident at structured accounts." },
      { title: "Eye-level placement of low-margin staples", body: "Eye-level rows (rows 2-4 of 6-row machine) drive 60-70% of selections through visibility. Operators place high-volume staples at eye level; misses margin optimization. Place high-margin items (specialty, branded snacks, healthier SKUs at premium pricing) at eye level; place low-margin staples at low-eye-level rows for visibility but margin discipline." },
      { title: "Skipping point-of-purchase labeling", body: "Color-coded healthy tags + dietary icons + allergen warnings lift healthy and dietary-tagged sell-through +15-30%. Operators that don't label leave revenue on the table. Modern operator standard; legacy operators skip. Add at first install; document framework for account file; matter at wellness-led + state-property + healthcare-accreditation placements." },
    ],
  }),
  inlineCta({
    text: "Want the first-machine stocking playbook with planogram templates and sourcing reference?",
    buttonLabel: "Get the stocking playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending operators on first-machine stocking — audience profiling, planogram design across snack/beverage/healthy/specialty categories, wholesaler and DSD sourcing, initial stock load, and first-week telemetry monitoring. The framework reflects operator-side data from current vending placements across office, healthcare, school, industrial, gym, apartment, and corporate campus accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do I stock my first vending machine?", answer: "Five steps: (1) profile audience at placement — workforce demographic, dietary preferences, allergen requirements; (2) design planogram — 40-60% snack, 25-35% beverage, 10-20% healthy, 5-10% specialty; (3) source through Vistar / Eby-Brown / Core-Mark plus DSD if available; (4) load 40-60 selections per snack machine, 8-10 per beverage with 2-4 facings each; (5) monitor telemetry sell-through and refine planogram at week 3.", audience: "Founders" },
      { question: "How much does it cost to stock a vending machine first time?", answer: "$400-$1,000 per machine for initial stock. 40-60 selections × 2-4 facings = 80-240 units per snack machine. Beverage machine 8-10 selections × 8-16 facings. Specialty / healthy SKUs higher unit cost than staples. Stock cost recovered through first 4-6 weeks of sales at typical placement; restock cost runs $100-$400 per visit thereafter.", audience: "Founders" },
      { question: "Where do I buy vending machine inventory?", answer: "Major vending wholesalers: Vistar (largest, national), Eby-Brown (national), Core-Mark (national). Account opening 3-7 business days; credit application required. Supplement with DSD relationships (Pepsi, Coca-Cola, Frito-Lay) for branded staples where market access supports. Specialty SKUs through Vistar or specialty distributors. Sam's Club / Costco viable for hobby scale only; margin and selection don't support commercial scale.", audience: "Founders" },
      { question: "What's the best mix of snacks and drinks?", answer: "40-60% snack / 25-35% beverage at most placements. Tech offices and wellness accounts shift toward better-for-you. Industrial / warehouse heavier on snack share. Healthcare / wellness-led shift toward healthy and dietary share. Adjust within 2-3 weeks based on telemetry sell-through. Don't over-engineer initial planogram — observe actual purchase pattern and refine.", audience: "Founders" },
      { question: "How often should I restock?", answer: "First restock typically at 7-14 days at new placement. Cadence settles to 1-2× per week at most placements after first month. High-traffic placements (300+ employee office, healthcare campus, 24/7 industrial) may settle to 3-4× per week. Telemetry-driven prioritization replaces fixed schedule at scale; route tech receives prioritized restock list per visit.", audience: "Founders" },
      { question: "Which SKUs sell best?", answer: "Top-selling snacks: Lay's, Doritos, M&Ms, Snickers, Cheez-It, Kit Kat, Reese's, Skittles, Pretzels, Goldfish. Top-selling beverages: Coke, Pepsi, Diet Coke, water (Dasani / Aquafina), Gatorade, Red Bull, Monster. Top healthy: KIND, RXBar, Skinny Pop, Quest, Clif. Top 20-30 SKUs cover 60-70% of revenue at most placements; rotating breadth covers remainder.", audience: "Founders" },
      { question: "What about expiration dates?", audience: "Founders", answer: "Snack shelf life 3-9 months typical; beverage 6-18 months; refrigerated 5-14 days. Operator rotates first-in-first-out at each restock. Telemetry dashboard flags slow-movers approaching expiration; pull SKU before expiry. Expired-product disputes damage account relationship — discipline matters from first restock. Don't overstock slow-movers on assumption they'll move; replace with trial SKUs." },
      { question: "Should I include healthy and dietary SKUs at the start?", answer: "Yes. 10-20% planogram share at most placements; 20-30% at wellness-led / healthcare / corporate campus. Specialty dietary (vegan, gluten-free, nut-free) 5-10% with point-of-purchase labeling. Lifts dietary-tagged transaction share +15-30% with labeling. Differentiates operator at proposal; required at wellness-led + state-property + healthcare-accreditation placements.", audience: "Founders" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "Vistar Vending — wholesaler reference", url: "https://www.vistarcorp.com/", note: "Major vending-industry wholesaler covering snack + beverage + healthy SKU breadth" },
      { label: "NAMA — planogram and operator capability resources", url: "https://www.namanow.org/", note: "Industry trade association covering operator stocking + planogram + sourcing standards" },
      { label: "Frito-Lay DSD program", url: "https://www.fritolay.com/", note: "Direct store delivery relationships for branded snack distribution" },
      { label: "Vending Times — operator sourcing and SKU coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending SKU trends + operator sourcing relationships" },
      { label: "Cantaloupe — telemetry dashboard and sell-through reporting", url: "https://www.cantaloupe.com/", note: "Telemetry platform for SKU-level sell-through monitoring + planogram refinement" },
    ],
  }),
  relatedGuides({
    heading: "Related stocking and sourcing guides",
    items: [
      { eyebrow: "Sister guide", title: "Tools and software for vending businesses", description: "Telemetry platforms, dashboard tagging, dispute portal, route management software, and accounting tools.", href: "/vending-business-startup/tools-and-software-for-vending-businesses" },
      { eyebrow: "Operations", title: "How to start a vending machine business", description: "Step-by-step launch sequence including sourcing and planogram setup at first install.", href: "/vending-business-startup/how-to-start-a-vending-machine-business" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Formation, capital, licensing, equipment, sourcing, and operations across vending startup topics.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
