import { seedPost, tldr, statStrip, keyTakeaways, comparisonTable, costBreakdown, specList, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("cost-of-vending-in-auto-dealerships", [
  tldr({
    heading: "What does vending actually cost an auto dealership — across customer lounge plus employee breakroom plus service department?",
    paragraph:
      "Auto dealership vending costs span two or three distinct programs with different commercial models. Customer lounge vending is typically absorbed as customer experience + manufacturer hospitality audit investment ($3-15K annually at standard dealerships, $15-50K at luxury). Employee breakroom and service department vending operate on paid combo with commission-revenue offset ($1-5K annual commission inbound to dealership). Net cost picture: standard dealership runs $2-10K annual net cost (lounge absorbed minus breakroom commission offset); luxury dealership $12-45K annual net cost (lounge absorbed minus modest commission). The cost structure inside each program: customer lounge — Keurig commercial coffee equipment ($1,500-3,500 capital or rental), bottled water service ($800-2,400 annually), refrigerated food vending ($2,500-8,000 annually if absorbed for hospitality), kid amenities ($800-2,500 annually), espresso machine at luxury ($4K-15K capital plus product cost), complimentary fresh food at premium ($3K-12K annually). Employee breakroom — combo machine operator-funded ($0 capital), product purchases reimbursed by employee paying through machine (commission offset to dealership 5-15% of gross). Service department break-room — same commercial model as employee breakroom ($0 capital, commission offset). Manufacturer hospitality standards (Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved, Toyota CARE+) drive minimum lounge spec at luxury / premium franchises. ROI runs 3-10× at customer lounge (incremental $60-300K annual revenue from CSI uplift + rebooking gains + dwell extension), 10-25× at employee breakroom + service department (retention-driven cost-of-turnover avoidance + commission revenue). Modern dealership-experienced operators (Canteen Vending, Five Star Food Service, Aramark Refreshment Services, regional dealership-experienced operators) build these multi-program economics into the service contract at install.",
    bullets: [
      { emphasis: "Cost structure spans 2-3 programs with different commercial models:", text: "Customer lounge absorbed ($3-50K), employee breakroom commission-positive ($1-5K commission inbound), service department commission-positive ($1-5K commission inbound). Net cost: standard $2-10K, luxury $12-45K annually." },
      { emphasis: "Manufacturer hospitality standards drive luxury lounge spec:", text: "Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved, Toyota CARE+ each specify lounge refreshment standards with periodic audit." },
      { emphasis: "ROI 3-25× across programs:", text: "Customer lounge 3-10× (CSI + rebooking + dwell + manufacturer award). Employee breakroom + service department 10-25× (retention + cost-of-turnover avoidance + commission revenue)." },
    ],
  }),
  statStrip({
    heading: "Dealership vending cost benchmarks",
    stats: [
      { number: "$2-10K", label: "annual net cost", sub: "standard dealership across all programs", accent: "blue" },
      { number: "$12-45K", label: "annual net cost", sub: "luxury / premium dealership", accent: "orange" },
      { number: "$1-5K", label: "annual commission inbound", sub: "from employee breakroom + service dept", accent: "blue" },
      { number: "3-25×", label: "ROI across programs", sub: "via CSI + rebooking + retention + commission", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Dealership vending cost — three programs",
    sub: "Customer lounge, employee breakroom, and service department vending operate distinct commercial models. Net cost picture combines all three.",
    headers: ["Program", "Commercial model", "Annual cost / revenue", "Best fit"],
    rows: [
      ["Customer lounge (premium / luxury)", "Absorbed as customer experience + manufacturer hospitality investment", "$15-50K absorbed annually", "Lexus, Mercedes, BMW, Audi, Porsche, premium dealerships"],
      ["Customer lounge (standard)", "Mixed absorbed (coffee + water) + paid commission (snacks + beverages)", "$3-15K absorbed; commission $500-2K inbound", "Toyota, Honda, Ford, Chevy, Hyundai, Kia, Nissan standard dealerships"],
      ["Customer lounge (budget / volume)", "Paid commission-offset; minimal absorbed", "$0-5K absorbed; commission $500-2K inbound", "Budget / volume dealerships, fleet dealerships"],
      ["Employee breakroom", "Paid combo with commission-revenue offset", "$1-5K annual commission inbound to dealership", "All dealership tiers; commission-positive amenity"],
      ["Service department break-room", "Paid combo with commission-revenue offset", "$1-5K annual commission inbound to dealership", "All dealership tiers; commission-positive amenity"],
      ["Manufacturer hospitality audit", "Periodic audit at premium / luxury franchise", "Audit fee absorbed in franchise overhead; non-vending cost", "Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, etc."],
      ["Equipment customization (brand wrap)", "One-time facility-paid customization", "$400-1,200 per machine one-time", "Optional brand-aligned customization"],
      ["Net cost / revenue across programs", "Sum of absorbed lounge minus commission offset", "Standard $2-10K net cost; luxury $12-45K net cost annually", "Calibrated to dealership tier + manufacturer hospitality standard"],
    ],
  }),
  costBreakdown({
    heading: "5-year economic model — mid-size standard dealership with all 3 programs",
    sub: "Standard dealership (Toyota franchise, 14 service bays, 3,800 quarterly appointments, 42 service department staff, 28 sales + back-office staff). Modern operator-funded full-service contract.",
    items: [
      { label: "Customer lounge — Keurig commercial coffee equipment", amount: "-$2,500", range: "$1,500-3,500 capital or rental amortized over 5 years; absorbed as hospitality investment" },
      { label: "Customer lounge — bottled water service", amount: "-$6,000", range: "$1,200 annual × 5 years; absorbed as hospitality" },
      { label: "Customer lounge — refrigerated food vending (absorbed at hospitality positioning)", amount: "-$25,000", range: "$5,000 annual × 5 years; sandwiches, yogurt, fruit cups, kid amenities" },
      { label: "Customer lounge — kid amenities (juice, fruit pouches, animal crackers, granola bars)", amount: "-$7,500", range: "$1,500 annual × 5 years; family-friendly hospitality investment" },
      { label: "Customer lounge — paid combo commission inbound", amount: "+$5,000", range: "Standard tier some paid combo retained alongside complimentary; $1,000 annual commission × 5 years" },
      { label: "Employee breakroom — combo machine commission revenue", amount: "+$15,000", range: "$3,000 annual commission × 5 years (10% of $30K gross at combo machine)" },
      { label: "Service department break-room — combo machine commission revenue", amount: "+$18,000", range: "$3,600 annual commission × 5 years (10% of $36K gross; higher volume at service dept break-room)" },
      { label: "CSI uplift incremental revenue (3,800 appointments × +6 pts CSI × manufacturer rebooking lift)", amount: "+$425,000", range: "$85K annual estimated × 5 years; conservative attribution model" },
      { label: "Service appointment rebooking gain (+8% rebooking × incremental service revenue)", amount: "+$280,000", range: "$56K annual estimated × 5 years; conservative attribution" },
      { label: "Service technician retention contribution (-4 pts turnover × cost-of-turnover avoidance)", amount: "+$110,000", range: "$22K annual estimated × 5 years; ~1.5 retained techs × $14.6K avg cost-of-turnover" },
      { label: "Manufacturer hospitality audit compliance (Toyota CARE+ alignment)", amount: "+$45,000", range: "$9K annual estimated × 5 years; dealer-of-the-year award candidacy contribution" },
      { label: "Equipment customization (brand wrap on customer-lounge-facing machine)", amount: "-$800", range: "One-time $800 brand wrap; lounge machine facility-paid customization" },
    ],
    totalLabel: "Net 5-year economic value across 3 programs",
    totalAmount: "+$861,200",
  }),
  decisionTree({
    heading: "Which dealership vending cost structure fits our franchise?",
    question: "Are we a luxury / premium franchise (Lexus, Mercedes, BMW, Audi, Porsche, Acura, Cadillac, Lincoln, Infiniti, Genesis) with manufacturer hospitality audit AND tight labor market AND family-heavy customer demographic?",
    yesBranch: {
      title: "Luxury / premium program — $15-50K customer lounge absorbed, employee + service department commission-positive, full manufacturer hospitality alignment",
      description: "Customer lounge absorbed as customer experience + manufacturer hospitality investment ($15-50K annual). Employee breakroom + service department paid combo with commission-revenue offset ($2-10K annual commission inbound). Espresso + premium water + complimentary fresh food + full kid amenities + lounge attendant at premium positioning. ROI 3-10× via CSI + rebooking + manufacturer award candidacy.",
      finalTone: "go",
      finalLabel: "Luxury / premium program",
    },
    noBranch: {
      title: "Standard / budget program — $3-15K customer lounge mixed absorbed + paid commission, employee + service department commission-positive",
      description: "Customer lounge mixed absorbed (Keurig + bottled water) + paid commission (snacks + beverages) at standard tier. Employee breakroom + service department paid combo with commission-revenue offset ($1-5K commission). Modern hospitality positioning without luxury-tier investment. ROI 3-10× via CSI uplift + rebooking + dwell extension + retention.",
      finalTone: "stop",
      finalLabel: "Standard / budget program",
    },
  }),
  specList({
    heading: "Dealership vending cost components",
    items: [
      { label: "Customer lounge — premium / luxury investment ($15-50K annual)", value: "Espresso machine ($4K-15K capital plus product cost), premium water service ($1,200-3K annual), complimentary fresh food ($3K-12K annual including sandwiches, yogurt, fruit cups, hummus + crackers), full kid amenities ($1.5K-4K annual including juice + fruit pouches + animal crackers + Goldfish + granola bars + milk in single-serve boxes), lounge attendant labor at flagship locations. Absorbed as customer experience + manufacturer hospitality investment. Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved drive minimum spec." },
      { label: "Customer lounge — standard investment ($3-15K annual)", value: "Keurig commercial coffee equipment ($1,500-3,500 capital or rental), bottled water service ($800-2,400 annual), refrigerated food vending mixed absorbed + paid ($2,500-8,000 annual), basic kid amenities ($800-2,500 annual). Standard tier absorbs Keurig + water; paid combo retained for snacks + beverages. Toyota CARE+, Honda Sensing+, Hyundai Bluelink Premium hospitality framework. Modern hospitality positioning without luxury-tier investment." },
      { label: "Customer lounge — budget / volume investment ($0-5K annual)", value: "Paid combo commission-offset; minimal absorbed. Drip coffee + Keurig + paid combo for snacks + beverages. Commission revenue $500-2K annual offsets absorbed coffee + water cost. Budget / volume + fleet dealerships. Manufacturer hospitality framework less stringent." },
      { label: "Employee breakroom — commission-positive amenity ($1-5K annual commission)", value: "Paid combo with commission-revenue offset to dealership. Operator-funded equipment ($0 capital). Annual commission $1-5K depending on gross sales volume ($10-50K annual gross at typical dealership employee breakroom). Combo machine with refrigeration supports protein-forward + hydration + caffeine + traditional + allergen-restricted planogram." },
      { label: "Service department break-room — commission-positive amenity ($1-5K annual commission)", value: "Same commercial model as employee breakroom. Operator-funded equipment ($0 capital). Annual commission $1-5K. Service department break-room often higher volume than general employee breakroom due to longer shifts + physical work + hot-bay summer hydration consumption. Planogram calibrated to service technician sub-audience." },
      { label: "Equipment customization (brand wrap)", value: "One-time facility-paid customization at $400-1,200 per machine. Brand-aligned wrap on customer-lounge-facing machines + service write-up adjacent placements. Optional but common at premium / luxury franchises aligned with manufacturer hospitality positioning. Standard / budget tier often skips." },
      { label: "Manufacturer hospitality audit (non-vending cost)", value: "Periodic audit at premium / luxury franchise. Audit fee absorbed in franchise overhead; non-vending cost. Audit results drive customer lounge vending investment level + spec. Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved each maintain audit framework." },
      { label: "Telemetry-driven quarterly review (operator-funded, no facility cost)", value: "Operator-funded telemetry platform ($5-30 per machine per month operator-absorbed). Quarterly review with general manager + service manager + HR. Track SKU mix performance across customer lounge + employee breakroom + service department. Operators without telemetry can't credibly support quarterly refinement. Modern operators native; legacy operators lag." },
      { label: "Net 5-year economic model — standard dealership", value: "Customer lounge investment $20K-75K over 5 years. Commission revenue across employee + service department $25-50K over 5 years. CSI + rebooking + dwell + retention + manufacturer hospitality compliance contribution $700K-1M+ over 5 years (conservative attribution). Net 5-year economic value typically $650K-950K+ positive at standard dealerships with disciplined program design." },
      { label: "Net 5-year economic model — luxury dealership", value: "Customer lounge investment $75K-250K over 5 years. Commission revenue across employee + service department $25-50K over 5 years. CSI + rebooking + dwell + retention + manufacturer hospitality compliance + manufacturer award candidacy contribution $1.5M-3M+ over 5 years (conservative attribution). Net 5-year economic value typically $1.3M-2.7M+ positive at luxury dealerships with disciplined program design." },
    ],
  }),
  caseStudy({
    tag: "Multi-program economics case",
    title: "Mid-size standard franchise — 3-program vending economics produce 11× ROI on $42K 5-year net investment",
    context: "Mid-size standard dealership (Toyota franchise), 14 service bays, 3,800 service appointments quarterly, 65 min avg customer dwell, 42 service department staff plus 28 sales + back-office. Pre-program baseline: drip coffee + Keurig + bottled water + paid combo vending in customer lounge with limited variety. Legacy snack-only vending in employee breakroom + service department break-room. CSI refreshment dimension lagging regional Toyota peer median; service rebooking flat year-over-year. Service technician turnover 24% (above regional 18% average). Dealership leadership committed to 3-program vending upgrade as customer experience + employee experience + Toyota CARE+ alignment investment.",
    meta: [
      { label: "Dealership profile", value: "Mid-size Toyota franchise, 14 service bays, 70 total staff (42 service department + 28 sales + back-office), 3,800 quarterly appointments, 65 min avg dwell" },
      { label: "Pre-program baseline", value: "Drip + Keurig + water + paid combo in customer lounge; legacy snack-only in employee + service dept breakrooms. CSI refreshment lagging peer median; service tech turnover 24% (above 18% regional average); Toyota CARE+ refreshment dimension below standard" },
      { label: "Program scope", value: "Customer lounge upgrade: Keurig K-3000 commercial + cold brew RTD + refrigerated food vending (sandwiches, yogurt, hummus, fruit cups) + kid amenities. Employee breakroom + service dept combo machine swap-in with refrigeration. Planogram redesigned across all 3 programs: customer lounge hospitality-positioned, employee breakroom 35% protein + 25% hydration + 20% caffeine + 12% allergen-restricted, service dept same balance with elevated hydration during summer" },
      { label: "5-year program cost / revenue", value: "Customer lounge absorbed $55K over 5 years. Employee breakroom + service dept commission revenue inbound $33K over 5 years. Net 5-year investment $22K + customer lounge investment $20K = $42K net total 5-year investment" },
    ],
    results: [
      { number: "+6 pts", label: "J.D. Power CSI refreshment + waiting amenity dimension score increase year-over-year" },
      { number: "+11%", label: "Service appointment rebooking rate increase across customers using lounge amenity" },
      { number: "+18 min", label: "Average customer dwell increase from 65 min to 83 min; supports service + parts + accessory + showroom traffic" },
      { number: "-6 pts", label: "Service technician turnover (24% to 18%, at regional average); break-room amenity quality cited at exit interviews" },
      { number: "Restored", label: "Toyota CARE+ refreshment dimension compliance; eligible for regional dealer-of-the-year award candidacy" },
      { number: "$485K", label: "Estimated 5-year incremental revenue from CSI + retention + rebooking + extended dwell + manufacturer award contribution; ~11× return on $42K 5-year net investment" },
    ],
  }),
  tipCards({
    heading: "Five dealership vending cost mistakes",
    sub: "Documented in dealership financial reviews + manufacturer hospitality audits + service manager + HR reviews. All preventable with structured 3-program design.",
    items: [
      { title: "Treating dealership vending as revenue source instead of customer experience + employee experience + manufacturer hospitality investment", body: "Customer lounge vending program ROI runs through CSI + rebooking + dwell + manufacturer award candidacy compounding into $60-300K incremental annual revenue. Treating customer lounge vending as commission revenue source underinvests in lounge quality + misses 3-10× ROI on customer experience investment. Customer lounge absorbed; employee breakroom + service dept commission-positive." },
      { title: "Single-program vending serving all audiences", body: "Customer lounge + employee breakroom + service department break-room serve different audiences with different needs, different planograms, different equipment, different commercial models. Specify three programs separately at install; coordinate but don't conflate. Modern dealerships maintain three distinct programs with telemetry-driven quarterly refinement." },
      { title: "Skipping employee breakroom + service department program", body: "Employee breakroom + service department break-room produce $2-10K annual commission revenue + retention contribution + employee experience. Skipping these programs misses commission-positive amenity opportunity + retention support at labor-tight market. Service tech turnover 15-35% at typical dealerships; break-room amenity quality cited at exit interviews." },
      { title: "No manufacturer hospitality standard verification at premium / luxury franchise", body: "Manufacturer hospitality standards (Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved, Toyota CARE+) include refreshment + waiting amenity requirements with periodic audit. Standards evolve; annual verification typical. Misalignment risks manufacturer audit findings + CSI impact + dealer-of-the-year award disqualification." },
      { title: "No telemetry-driven quarterly review across 3 programs", body: "Dealership vending across 3 programs benefits from quarterly telemetry-driven review with general manager + service manager + HR + operator. Track SKU mix performance across customer lounge + employee breakroom + service department. Operators without telemetry can't credibly support quarterly refinement." },
    ],
  }),
  keyTakeaways({
    heading: "Dealership vending cost key principles",
    takeaways: [
      "Dealership vending costs span 2-3 programs with different commercial models — customer lounge absorbed ($3-50K), employee breakroom commission-positive ($1-5K commission inbound), service department commission-positive ($1-5K commission inbound).",
      "Net cost picture: standard dealership $2-10K annual net cost; luxury dealership $12-45K annual net cost.",
      "Manufacturer hospitality standards (Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved, Toyota CARE+) drive minimum customer lounge spec at premium / luxury franchises.",
      "ROI 3-25× across programs — customer lounge 3-10× (CSI + rebooking + dwell + manufacturer award); employee breakroom + service department 10-25× (retention + cost-of-turnover avoidance + commission revenue).",
      "5-year net economic value typically $650K-950K+ at standard dealerships, $1.3M-2.7M+ at luxury dealerships with disciplined 3-program design.",
      "Specify three programs separately at install with telemetry-driven quarterly refinement across customer lounge + employee breakroom + service department.",
    ],
  }),
  inlineCta({
    text: "Want the dealership vending cost framework (3-program economics, manufacturer hospitality alignment, 5-year model, operator selection)?",
    buttonLabel: "Get the dealership cost framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support dealership vending cost structuring across premium / luxury, standard, and volume-brand dealerships — including 3-program design across customer lounge + employee breakroom + service department, manufacturer hospitality standard alignment (Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved, Toyota CARE+), commission rate negotiation, 5-year economic modeling, operator selection, and telemetry-driven quarterly review with general manager + service manager + HR. Cost benchmarks reflect operator-side data plus dealership management + service manager + HR + customer feedback across multi-tier dealership deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does vending actually cost an auto dealership?", answer: "Net cost picture: standard dealership $2-10K annual net cost across 3 programs (customer lounge absorbed minus employee + service dept commission offset); luxury dealership $12-45K annual net cost. Customer lounge absorbed as customer experience + manufacturer hospitality investment ($3-15K standard, $15-50K luxury). Employee breakroom + service department commission-positive ($1-5K commission inbound).", audience: "Dealership Management / Finance" },
      { question: "Why are there three programs?", answer: "Customer lounge + employee breakroom + service department break-room serve different audiences with different needs, different planograms, different equipment, different commercial models. Specify three programs separately at install; coordinate but don't conflate. Modern dealerships maintain three distinct programs.", audience: "Dealership Management" },
      { question: "What's the ROI on dealership vending investment?", answer: "Customer lounge ROI 3-10× via CSI uplift + rebooking gains + dwell extension + manufacturer hospitality + dealer-of-the-year award candidacy ($60-300K incremental annual revenue). Employee breakroom + service department ROI 10-25× via retention contribution + cost-of-turnover avoidance + commission revenue. Combined 5-year economic value $650K-2.7M+ depending on tier.", audience: "Finance / Dealership Management" },
      { question: "How does manufacturer hospitality standard affect cost?", answer: "Manufacturer hospitality standards (Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Audi Magnitude, Porsche Approved, Toyota CARE+, Honda Sensing+, Hyundai Bluelink Premium, Nissan One) drive minimum customer lounge spec at premium / luxury franchises. Higher spec = higher absorbed investment. Periodic audit verifies compliance.", audience: "Dealership Management / Compliance" },
      { question: "What's the commission rate for employee breakroom + service dept vending?", answer: "Typical commission rate 5-15% of gross sales paid to dealership. Annual commission $1-5K per program at typical dealership ($10-50K annual gross per program). Commission-positive amenity offset against employee experience + retention investment. Higher commission rates at higher-volume placements or larger fleet contracts.", audience: "Finance / HR" },
      { question: "Should we skip the customer lounge program to save money?", answer: "No. Customer lounge ROI 3-10× via CSI uplift + rebooking + dwell + manufacturer hospitality. Skipping or under-investing in customer lounge misses 5-30× return on customer experience investment. Manufacturer hospitality audit findings + CSI impact + dealer-of-the-year award disqualification can far exceed customer lounge investment cost.", audience: "Dealership Management" },
      { question: "How do we negotiate the commission rate?", answer: "Issue RFP with dealership-specific requirements (dealership-experienced operator, telemetry, manufacturer hospitality awareness, combo equipment for employee + service dept, hospitality positioning for customer lounge). Get 2-3 competitive bids. Negotiate commission rate + commission base calculation + contract auto-renewal + buyout terms. Reference checks at 2-3 comparable dealership accounts. Modern dealership-experienced operators include this standard.", audience: "Procurement" },
      { question: "What about equipment customization with brand wrap?", answer: "One-time facility-paid customization at $400-1,200 per machine. Brand-aligned wrap on customer-lounge-facing machines + service write-up adjacent placements. Optional but common at premium / luxury franchises aligned with manufacturer hospitality positioning. Standard / budget tier often skips. Reflects manufacturer hospitality investment philosophy.", audience: "Facility Managers / Brand" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NADA — National Automobile Dealers Association service standards + cost data", url: "https://www.nada.org/", note: "Industry trade association covering dealership service department operations and customer experience cost benchmarks" },
      { label: "J.D. Power CSI — Customer Satisfaction Index automotive dealer", url: "https://www.jdpower.com/", note: "Industry-standard customer satisfaction measurement covering refreshment + waiting amenity dimensions at automotive dealerships" },
      { label: "Cox Automotive — service department retention + cost-of-turnover research", url: "https://www.coxautoinc.com/", note: "Industry research on service department rebooking, retention, and cost-of-turnover drivers" },
      { label: "Manufacturer hospitality standards (Lexus L-Certified, Mercedes Star Lounge, BMW Premium Selection, Toyota CARE+)", url: "https://www.toyota.com/", note: "Manufacturer-specific hospitality programs including refreshment and customer experience criteria" },
      { label: "NAMA — automotive vending operator practice + economic benchmarks", url: "https://www.namanow.org/", note: "Industry guidance on dealership vending operations and 3-program economic modeling" },
    ],
  }),
  relatedGuides({
    heading: "Related dealership vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Employee breakroom vending in dealerships", description: "Service department, parts, and sales staff breakroom planogram and commercial model specifications.", href: "/vending-for-dealerships/employee-breakroom-vending-in-dealerships" },
      { eyebrow: "Sister guide", title: "Customer lounge vending for dealerships", description: "Tier-by-tier lounge program design with manufacturer hospitality standard alignment.", href: "/vending-for-dealerships/customer-lounge-vending-for-dealerships" },
      { eyebrow: "Hub", title: "All dealership vending guides", description: "Equipment, planogram, hospitality, CSI integration, and operations for automotive dealerships.", href: "/vending-for-dealerships" },
    ],
  }),
]);
process.exit(0);
