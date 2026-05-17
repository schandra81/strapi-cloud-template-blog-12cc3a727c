import { seedPost, tldr, statStrip, comparisonTable, specList, costBreakdown, tipCards, decisionTree, dimensionDiagram, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("breakroom-coffee-station-ideas", [
  tldr({
    heading: "How do you design a breakroom coffee station — equipment, layout, and program tiers that actually serve a modern workforce?",
    paragraph:
      "A modern breakroom coffee station goes well beyond a pot of drip coffee on a folding table. Across the modern workforce, coffee is the most-used breakroom amenity, with 65-75% of employees consuming workplace coffee daily and 40-50% consuming multiple cups; quality and variety meaningfully affect engagement and retention. The design spans five layers: (1) brewing equipment selection across drip pot, single-cup pod, bean-to-cup, and espresso depending on workforce size and culture; (2) accompaniments including milk and dairy alternatives (oat, almond, soy, coconut), sweeteners (raw sugar, stevia, monk fruit, classic options), creamer flavoring, and tea selection for non-coffee drinkers; (3) water source with filtered cold + hot water tap (bottle-fill station or under-counter filtration), supporting tea, oatmeal, and hydration; (4) station layout with 6-12 linear feet of counter, sink with garbage disposal, electrical service for brewers, storage for supplies, and clear traffic flow; (5) cleaning and operational discipline with daily brewer cleaning, weekly deep-clean, monthly preventive maintenance, and operator service tier matching workforce demand. Equipment selection scales with workforce: a 25-person office runs effectively on a single-cup pod brewer (Keurig K3500, Bunn MyCafe) or a quality drip brewer (Bunn AXIOM, Curtis ThermoPro) at $400-1,500 capital; a 100-person office benefits from a bean-to-cup brewer (Bravilor Bonamat, Franke A300, Schaerer Coffee Club) at $4-12K capital delivering 60-120 cups/day with espresso, lungo, americano, latte options; a 500-person office runs multiple bean-to-cup brewers plus a dedicated espresso station and pod backup at $15-40K capital. Monthly operating cost runs $200-2,500+ depending on tier — coffee bean or pod supply, milk and alternatives, sweeteners, cups and lids, paper goods, maintenance, and quarterly deep-clean service. Subsidized fully-free programs are standard at modern workplaces; per-cup payment programs exist at large-headcount or budget-constrained sites. Equipment specification, supply quality, and operational discipline together drive coffee program perception that materially affects engagement.",
    bullets: [
      { emphasis: "Five layers of coffee station design:",
        text: "Brewing equipment, accompaniments, water source, station layout, and cleaning/operational discipline. Each layer affects perception; coordinate across all five for a modern coffee station." },
      { emphasis: "Equipment tier scales with workforce size:",
        text: "25-person office: single-cup pod or drip brewer $400-1,500. 100-person office: bean-to-cup brewer $4-12K. 500-person office: multiple bean-to-cup + espresso $15-40K. Monthly operating $200-2,500+." },
      { emphasis: "65-75% of employees consume workplace coffee daily:",
        text: "Coffee is the most-used breakroom amenity. Quality and variety affect engagement and retention. Modern workplaces run subsidized fully-free programs as workforce-experience investment." },
    ],
  }),
  statStrip({
    heading: "Modern breakroom coffee station benchmarks",
    stats: [
      { number: "65-75%", label: "daily workplace coffee consumption", sub: "of employee population", accent: "blue" },
      { number: "40-50%", label: "consume multiple cups daily", sub: "drives quality and variety expectations", accent: "blue" },
      { number: "$400-40K", label: "equipment capital range", sub: "scales with workforce size and tier", accent: "orange" },
      { number: "$200-2,500+", label: "monthly operating cost", sub: "supply + maintenance + service", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Coffee station equipment tiers by workforce size",
    sub: "Five equipment tiers from compact drip pot to multi-brewer + espresso program. Match equipment tier to workforce size, culture, and budget.",
    headers: ["Tier", "Equipment", "Workforce fit", "Capital range", "Cups/day"],
    rows: [
      ["Tier 1 — Drip pot", "Bunn AXIOM, Curtis ThermoPro, Wilbur Curtis", "10-30 person office", "$400-900", "20-60 cups/day"],
      ["Tier 2 — Single-cup pod", "Keurig K3500, Bunn MyCafe, Flavia C600", "20-75 person office", "$500-1,500", "30-80 cups/day"],
      ["Tier 3 — Bean-to-cup standard", "Bravilor Bonamat, Franke A300, Schaerer Coffee Club", "75-200 person office", "$4,000-9,000", "60-120 cups/day"],
      ["Tier 4 — Bean-to-cup premium", "Franke A600, Schaerer Coffee Soul, WMF 1500S", "150-400 person office", "$9,000-18,000", "120-200 cups/day"],
      ["Tier 5 — Multi-brewer + espresso", "Multiple bean-to-cup + La Marzocco / Slayer espresso", "400+ person campus", "$18,000-40,000+", "300-600+ cups/day"],
      ["Tea selection (all tiers)", "Selection of hot teas via filtered hot water", "All workforces", "$80-200/mo supply", "10-30% consume tea"],
      ["Cold brew / nitro (premium)", "Cold brew kegerator or nitro tap", "Tech / creative offices", "$1,500-4,000", "Cultural signal at premium sites"],
    ],
  }),
  dimensionDiagram({
    heading: "Typical breakroom coffee station footprint",
    sub: "Standard 200 sq ft breakroom coffee station for 100-person office. Verify electrical service capacity, filtered water plumbing, and ADA accessibility at install survey.",
    machineName: "Breakroom coffee station (100-person office)",
    width: "10 ft counter (120 in)",
    depth: "3 ft counter depth + 5 ft customer aisle",
    height: "8 ft ceiling clearance",
    footprint: "200 sq ft",
    weightEmpty: "—",
    weightLoaded: "—",
    doorwayClearance: "36-44 in aisle widths (ADA compliant)",
    note: "Counter accommodates bean-to-cup brewer (24-30 in width), accompaniments station (milk fridge + sweeteners + creamer), filtered water tap with hot/cold, sink with garbage disposal, supply storage above and below counter. Electrical service 208V for bean-to-cup brewer plus 120V for accessories. Filtered water plumbing tied to building cold water supply. Sink drain. HVAC for brewer heat load.",
  }),
  costBreakdown({
    heading: "Monthly operating cost — 100-person office bean-to-cup station",
    sub: "Typical monthly operating cost for a 100-person office running a bean-to-cup brewer with full accompaniments and tea selection. Real numbers vary by metro and supply provider.",
    items: [
      { label: "Coffee bean supply (whole bean, specialty roast)", amount: "$420", range: "Quality roaster; 12-15 lb/month at 100-person office" },
      { label: "Milk and dairy alternatives (oat, almond, soy, coconut + dairy)", amount: "$280", range: "Mixed alternatives drive cost; oat milk premium" },
      { label: "Sweeteners (raw sugar, stevia, monk fruit, classic)", amount: "$45", range: "Variety drives cost modestly" },
      { label: "Creamer flavoring (vanilla, hazelnut, seasonal rotation)", amount: "$60", range: "Optional; cultural signal" },
      { label: "Tea selection (8-12 SKU hot teas)", amount: "$120", range: "10-30% of workforce consumes tea" },
      { label: "Cups, lids, sleeves, stirrers, napkins", amount: "$180", range: "Compostable / recyclable specification adds 20-30%" },
      { label: "Brewer maintenance and supply delivery", amount: "$220", range: "Monthly service visit; descale + filter change" },
      { label: "Quarterly deep-clean service (allocated monthly)", amount: "$80", range: "Operator quarterly deep-clean visit" },
    ],
    totalLabel: "Total monthly operating cost (100-person office bean-to-cup tier)",
    totalAmount: "~$1,405 / month (~$14 per employee monthly)",
  }),
  specList({
    heading: "Breakroom coffee station design specifications",
    items: [
      { label: "Brewing equipment tier matched to workforce", value: "Tier 1 drip pot (Bunn AXIOM, Curtis ThermoPro) for 10-30 person office at $400-900 capital. Tier 2 single-cup pod (Keurig K3500, Bunn MyCafe) for 20-75 person office at $500-1,500. Tier 3 bean-to-cup standard (Bravilor Bonamat, Franke A300, Schaerer Coffee Club) for 75-200 person office at $4-9K. Tier 4 bean-to-cup premium (Franke A600, Schaerer Coffee Soul) for 150-400 person office at $9-18K. Tier 5 multi-brewer + espresso for 400+ campus at $18-40K." },
      { label: "Milk and dairy-alternative accompaniments", value: "Whole milk + 2% milk standard. Dairy alternatives oat, almond, soy, coconut for lactose-free / vegan / dietary-restriction accommodation. Refrigerated milk fridge (under-counter or counter-top) sized for daily consumption + 1.5x buffer. Daily restock. Some bean-to-cup brewers include integrated milk system with refrigerated tank and frothing." },
      { label: "Sweetener and flavoring variety", value: "Raw sugar, white sugar, brown sugar packets. Stevia (Truvia, SweetLeaf), monk fruit (Lakanto), classic artificial sweeteners (Sweet'N Low, Equal, Splenda). Honey packets. Creamer flavoring optional (vanilla, hazelnut, seasonal rotation) at premium tier. Variety accommodates dietary preferences and matches modern coffee shop expectation." },
      { label: "Filtered water source with hot and cold tap", value: "Filtered water tap with hot (185-205°F) and cold + sparkling option (Elkay EZH2O, Brita Hub, FreshWater filtration). Supports tea preparation, oatmeal, hydration. Bottle-fill station drives sustainability and eliminates bottled water spend. Under-counter filtration with sediment + carbon + UV filtration. Quarterly filter change service." },
      { label: "Tea selection for non-coffee drinkers", value: "Selection of 8-12 hot tea SKUs (black, green, herbal, decaf, rooibos, chai, matcha). 10-30% of workforce consumes tea regularly. Filtered hot water at 185°F preferred temperature. Premium tea brands (Mighty Leaf, Numi, Harney & Sons, Tazo). Sometimes loose-leaf tea infusers at premium sites. Tea selection signals inclusivity beyond coffee drinkers." },
      { label: "Station layout with counter, sink, storage, traffic flow", value: "6-12 linear feet of counter for 100-person office; longer for larger workforce. Counter depth 25-30 inches. Sink with garbage disposal for grounds and rinse water. Storage for supplies above and below counter. Electrical service 208V for bean-to-cup brewer plus 120V for accessories. Filtered water plumbing. ADA-accessible counter heights and approach clearances." },
      { label: "Daily cleaning and operational discipline", value: "Daily brewer cleaning (grouphead wipe, drip tray, milk system flush at bean-to-cup units). Weekly deep-clean (descale brewer, sanitize milk system, clean condiment containers). Monthly preventive maintenance (water filter change, brewer service inspection, kettle descale). Quarterly operator deep-clean service. Cleaning discipline directly affects coffee quality perception." },
      { label: "Operator service tier matching workforce demand", value: "Service tier scales with workforce size and equipment tier. Monthly delivery + maintenance at 25-person office. Bi-weekly at 100-person. Weekly at 250+ person office. Service tickets responsive within 24-48 hours at most placements. Operator carries equipment capital and operations under typical full-service contract. Verify operator coffee program capability at proposal." },
      { label: "Sustainability and disposable considerations", value: "Compostable or recyclable cups (paper with PLA lining), lids, sleeves, stirrers. Reusable mug encouragement signage. Recycling and compost streams coordinated with facility waste management. Coffee grounds compost. Some operators specify Rainforest Alliance, Fair Trade, or Organic certified bean supply. Sustainability program signal at modern workplaces." },
      { label: "Free-vend or subsidy structure", value: "Subsidized fully-free programs standard at modern workplaces (employer pays per-cup or monthly flat fee). Per-cup payment programs exist at large-headcount or budget-constrained sites ($0.50-$2 per cup typical). Some hybrid programs free for basic coffee, paid for espresso drinks. Coordinate with HR + benefits + finance on program economics." },
    ],
  }),
  decisionTree({
    heading: "What coffee station tier fits this workforce?",
    question: "Does this workforce exceed 75 employees with on-site or hybrid work pattern, budget for bean-to-cup specialty coffee capital, and culture or recruiting context that benefits from quality coffee program?",
    yesBranch: {
      title: "Bean-to-cup tier or premium — quality coffee program as workforce-experience investment",
      description: "75-200 person office runs bean-to-cup standard tier (Bravilor Bonamat, Franke A300, Schaerer Coffee Club) at $4-9K capital. 150-400 person office runs bean-to-cup premium (Franke A600, Schaerer Coffee Soul) at $9-18K. 400+ person campus runs multi-brewer + espresso at $18-40K. Coordinate with operator on equipment selection, supply quality (Rainforest Alliance / Fair Trade / specialty roaster), milk alternatives, tea selection, sustainability specification, and subsidized program economics.",
      finalTone: "go",
      finalLabel: "Bean-to-cup tier",
    },
    noBranch: {
      title: "Drip or single-cup pod tier — appropriate for smaller workforces",
      description: "10-30 person office runs drip pot tier (Bunn AXIOM, Curtis ThermoPro) at $400-900. 20-75 person office runs single-cup pod (Keurig K3500, Bunn MyCafe) at $500-1,500. Lower capital matched to workforce size. Coordinate with operator on supply quality, dairy alternatives, sweetener variety, tea selection, and monthly delivery cadence.",
      finalTone: "go",
      finalLabel: "Drip / pod tier",
    },
  }),
  tipCards({
    heading: "Five breakroom coffee station mistakes",
    sub: "Documented in employee surveys and operator post-implementation reviews. All preventable with appropriate equipment specification and operational discipline.",
    items: [
      { title: "Tier 1 drip pot at 100+ person office", body: "Single drip pot serving 100+ employees produces queue, stale coffee, and quality complaints. Specify Tier 3 bean-to-cup brewer (Bravilor Bonamat, Franke A300, Schaerer Coffee Club) at $4-9K capital delivering 60-120 cups/day with espresso, lungo, americano, latte options. Equipment tier matched to workforce size matters substantially for quality perception." },
      { title: "Single milk option without dairy alternatives", body: "Whole milk only excludes lactose-free, vegan, and dietary-restriction employees. Specify dairy alternatives oat, almond, soy, coconut alongside whole milk and 2%. Oat milk particularly popular at modern workplaces. Inclusivity signal beyond coffee quality." },
      { title: "Skipping tea selection for non-coffee drinkers", body: "10-30% of workforce consumes tea regularly. Skipping tea selection excludes substantial workforce share. Specify 8-12 hot tea SKUs (black, green, herbal, decaf, rooibos, chai, matcha) with filtered hot water at 185°F. Premium tea brands (Mighty Leaf, Numi, Harney & Sons). Tea selection signals inclusivity." },
      { title: "No daily cleaning discipline; quality perception drops", body: "Daily brewer cleaning (grouphead wipe, drip tray, milk system flush) directly affects coffee quality. Without daily cleaning, milk-system buildup produces off-flavor; grouphead buildup affects extraction. Weekly deep-clean (descale, sanitize milk, clean condiment containers) maintains baseline. Operational discipline matters as much as equipment specification." },
      { title: "Bottled water alongside filtered water tap", body: "Filtered water tap with hot and cold + sparkling supports tea, oatmeal, hydration. Bottled water purchases alongside represent unnecessary cost and sustainability friction. Eliminate bottled water spend; specify filtered tap (Elkay EZH2O, Brita Hub) with bottle-fill station for refill. Sustainability and cost signal." },
    ],
  }),
  inlineCta({
    text: "Want the breakroom coffee station playbook — equipment tier, accompaniments, water source, layout, cleaning discipline, and subsidy structure?",
    buttonLabel: "Get the coffee station playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help offices design breakroom coffee stations across equipment tiers from drip pot to bean-to-cup to multi-brewer plus espresso, accompaniments including milk and dairy alternatives and sweetener variety, filtered water source with hot and cold tap and sparkling option, station layout coordinated with counter and sink and storage and ADA accessibility, daily cleaning and operational discipline, operator service tier matching workforce demand, sustainability specification including compostable cups and Rainforest Alliance bean supply, and subsidy or per-cup payment structure. The benchmarks reflect operator-side data and HR / facilities team input.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What coffee equipment fits a 100-person office?", answer: "Bean-to-cup standard tier (Bravilor Bonamat, Franke A300, Schaerer Coffee Club) at $4-9K capital delivering 60-120 cups/day with espresso, lungo, americano, and latte options. Equipment matched to daily volume avoids queue and quality drop from undersized drip pot. Monthly operating cost typically $1,200-1,800 covering coffee, milk and alternatives, sweeteners, cups, maintenance.", audience: "Facilities" },
      { question: "What milk alternatives should we offer?", answer: "Oat, almond, soy, coconut alongside whole milk and 2%. Oat milk particularly popular at modern workplaces — premium pricing offset by inclusivity signal. Refrigerated milk fridge under-counter or counter-top sized for daily consumption + 1.5x buffer. Daily restock. Inclusivity signal for lactose-free, vegan, and dietary-restriction employees.", audience: "HR / Benefits" },
      { question: "Do we need a filtered water tap?", answer: "Yes. Filtered water tap with hot (185-205°F) and cold + sparkling option supports tea, oatmeal, hydration. Bottle-fill station eliminates bottled water spend and drives sustainability. Brands include Elkay EZH2O, Brita Hub, FreshWater. Under-counter filtration with sediment + carbon + UV. Quarterly filter change service. Material sustainability and cost signal.", audience: "Facilities" },
      { question: "What does monthly operating cost run?", answer: "$200-2,500+ depending on tier and workforce size. 100-person office bean-to-cup runs ~$1,400/month (~$14 per employee). 25-person office drip or pod runs ~$300/month. 500-person campus multi-brewer + espresso runs $5,000+/month. Covers coffee, milk and alternatives, sweeteners, cups, maintenance, quarterly deep-clean. Subsidized fully-free programs standard at modern workplaces.", audience: "CFOs" },
      { question: "How often should the brewer be cleaned?", answer: "Daily brewer cleaning (grouphead wipe, drip tray, milk system flush at bean-to-cup units). Weekly deep-clean (descale brewer, sanitize milk system, clean condiment containers). Monthly preventive maintenance (water filter change, brewer service inspection, kettle descale). Quarterly operator deep-clean service. Cleaning discipline directly affects coffee quality perception.", audience: "Operations" },
      { question: "Should we run free or paid coffee?", answer: "Subsidized fully-free programs standard at modern workplaces (employer pays per-cup or monthly flat fee). Per-cup payment programs exist at large-headcount or budget-constrained sites ($0.50-$2 per cup typical). Some hybrid programs free for basic coffee, paid for espresso drinks. Coordinate with HR + benefits + finance on program economics matched to workforce-experience commitment.", audience: "HR / Benefits" },
      { question: "What sustainability specifications matter?", answer: "Compostable or recyclable cups (paper with PLA lining), lids, sleeves, stirrers. Reusable mug encouragement signage. Recycling and compost streams coordinated with facility waste management. Coffee grounds compost. Some operators specify Rainforest Alliance, Fair Trade, or Organic certified bean supply. Modern workplace sustainability program signal.", audience: "Sustainability" },
      { question: "What about espresso drinks?", answer: "Bean-to-cup standard tier delivers espresso, lungo, americano, latte at automated quality. Premium tier (Franke A600, Schaerer Coffee Soul) adds higher-volume capacity and broader recipe range. 400+ campus may add dedicated espresso station (La Marzocco, Slayer) with barista at peak periods. Coordinate equipment tier with workforce culture and budget.", audience: "Facilities" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NCA — National Coffee Association — workplace coffee consumption trends", url: "https://www.ncausa.org/", note: "Industry data on workplace coffee consumption rates and trends" },
      { label: "FDA — Food code and food-safety guidelines for self-service stations", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code", note: "Federal food-safety guidance applied at self-service coffee and accompaniments" },
      { label: "EPA — WaterSense and water-efficiency standards for filtered taps", url: "https://www.epa.gov/watersense", note: "Federal water-efficiency standards informing filtered water tap specification" },
      { label: "Rainforest Alliance — Sustainable Agriculture Standard (coffee)", url: "https://www.rainforest-alliance.org/", note: "Sustainability certification informing bean supply specification at modern workplaces" },
      { label: "NAMA — National Automatic Merchandising Association — office coffee service", url: "https://www.namanow.org/", note: "Industry association guidance on office coffee service operations and program design" },
    ],
  }),
  relatedGuides({
    heading: "Related breakroom and amenity guides",
    items: [
      { eyebrow: "Sister guide", title: "Breakroom refreshment solutions", description: "Layered breakroom program combining coffee, water, snacks, beverages, and fresh food.", href: "/blog/breakroom-refreshment-solutions" },
      { eyebrow: "Sister guide", title: "Breakroom snack and beverage packages", description: "Snack and beverage assortment and program tiers for breakroom amenity.", href: "/blog/breakroom-snack-and-beverage-packages" },
      { eyebrow: "Hub", title: "All breakroom and amenity guides", description: "Coffee, water, snacks, beverages, fresh food, and program economics for modern workplace breakrooms.", href: "/blog" },
    ],
  }),
]);
process.exit(0);
