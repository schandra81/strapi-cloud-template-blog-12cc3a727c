import { seedPost, tldr, statStrip, comparisonTable, specList, costBreakdown, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-do-vending-companies-make-money", [
  tldr({
    heading: "How do vending companies actually make money?",
    paragraph:
      "Vending economics are surprisingly tight at the unit level — operators earn $0.20-0.60 gross margin per typical transaction after product cost, with substantial overhead from labor (route service is the largest single cost), equipment depreciation, payment processing, insurance, telemetry/software, and commission payments to location partners. Most operators run on 8-15% net margin at the company level, with successful operators hitting 12-18% through route-density optimization, premium-product mix, and modern format additions (AI vending coolers, micro-markets, specialty refrigerated). Single-machine revenue ranges from $4-25K annually depending on placement traffic + product mix + transaction value. Multi-machine accounts at office buildings, schools, hospitals, and apartments produce 60-75% of typical operator revenue; standalone single-machine placements contribute 15-25%; specialty formats (AI cooler, micro-market) contribute 5-20% but growing rapidly. Revenue streams: product sales (85-95% of revenue), service contracts (3-8%), specialty fees (1-5%), and equipment leasing or sales (1-3%). Operators face structural pressure: labor inflation, payment-processing fee compression, equipment cost increases, commission rate pressure from sophisticated location partners. Modern technology-forward operators outperform legacy operators by 40-80% on margin through route optimization, telemetry, dynamic pricing, and specialty format expansion.",
    bullets: [
      { emphasis: "Tight unit-level economics:", text: "$0.20-0.60 gross margin per transaction. Operators run 8-15% company net margin; successful modern operators 12-18%." },
      { emphasis: "Labor is the largest cost:", text: "Route service is single biggest cost line. Route-density optimization + telemetry drive operator margin." },
      { emphasis: "Modern operators outperform legacy 40-80%:", text: "Route optimization + telemetry + dynamic pricing + specialty formats (AI cooler, micro-market) drive margin difference." },
    ],
  }),
  statStrip({
    heading: "Vending operator economics",
    stats: [
      { number: "$0.20-0.60", label: "gross margin per transaction", sub: "after product cost, before overhead", accent: "blue" },
      { number: "8-15%", label: "company net margin typical", sub: "modern operators 12-18%", accent: "orange" },
      { number: "$4-25K", label: "annual revenue per machine", sub: "varies with placement + transaction value", accent: "orange" },
      { number: "85-95%", label: "operator revenue from product sales", sub: "vs service / specialty / equipment", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending operator revenue + cost structure",
    sub: "How the unit economics break down for typical vending operators. Revenue mostly product sales; costs dominated by labor and product procurement.",
    headers: ["Line item", "% of revenue", "Notes"],
    rows: [
      ["Product sales (vending)", "85-95%", "Core revenue; per-machine $4-25K annually"],
      ["Service contracts (commercial accounts)", "3-8%", "Maintenance + repairs on operator-funded equipment"],
      ["Specialty fees (custom programs, integrations)", "1-5%", "Custom branding, payment integration, customization"],
      ["Equipment leasing or sales", "1-3%", "Limited; most equipment operator-owned"],
      ["Product cost (COGS)", "55-68%", "Largest single cost; bulk procurement reduces"],
      ["Labor (route + service)", "15-22%", "Second-largest cost; route density matters"],
      ["Commission to location partners", "8-15%", "Paid to property owners; varies by account"],
      ["Equipment depreciation", "3-6%", "Standard 7-10 year depreciation schedule"],
      ["Payment processing", "2-4%", "Credit card fees + interchange"],
      ["Insurance + admin + telemetry", "3-5%", "Overhead; modern operators have higher telemetry investment"],
      ["Net margin", { icon: "check", text: "8-18%" }, "Range from legacy to modern operators"],
    ],
  }),
  specList({
    heading: "Vending revenue + cost specifications",
    items: [
      { label: "Product sales revenue streams", value: "Snacks (chips, candy, granola bars, protein bars): 30-40% of product revenue. Beverages (soda, water, sports drinks, juice, coffee): 35-45%. Fresh items (sandwiches, salads, hot meals): 5-15% at traditional vending, 30-50% at AI coolers + micro-markets. Premium / specialty items (craft beverages, allergen-aware SKUs, local brands): 5-15%. Mix varies by placement type — office vs apartment vs school vs hospital vs warehouse all show distinct patterns." },
      { label: "Service contract revenue", value: "Modern operators offer service contracts on operator-funded equipment at commercial accounts. Includes: equipment maintenance, payment hardware service, telemetry monitoring, planogram refresh cadence, quarterly business reviews. Typical contract structure: included in standard contract for most accounts, separate fee for specialty accounts (hospitals, federal, specialty industrial). Revenue contribution: 3-8% of total operator revenue." },
      { label: "Specialty + customization fees", value: "Custom brand finish setup ($300-1,500 per machine), custom planogram design ($1-3K per account), payment integration setup ($500-3,500 per integration), sustainability reporting + ESG ($500-2K per year per account), specialty equipment customization ($1-5K). Operator amortizes through 3-5 year contract; revenue recognized over contract term. Contribution: 1-5% of total operator revenue but growing as customization demand grows." },
      { label: "Product cost (COGS) breakdown", value: "55-68% of operator revenue. Procurement: bulk through wholesale food + beverage distributors (Vistar, McLane, Core-Mark, regional). Operators negotiate volume pricing — larger operators 8-15% lower cost basis than smaller. Product mix matters: snacks + candy 40-50% gross margin, beverages 35-45%, fresh items 25-40% (lower margin but higher transaction value). Bulk-purchasing operators 15-25% lower COGS percentage than small operators." },
      { label: "Labor cost structure", value: "15-22% of operator revenue; largest single cost line. Route service technicians: $40-65K fully loaded (wages + benefits + truck + fuel + tools). Route density: typical route 15-25 machines per technician per day; high-density urban routes 30-40 machines per day. Route optimization through telemetry-driven service produces 25-40% labor efficiency vs fixed-route legacy operators. Critical operator differentiator." },
      { label: "Commission payments to location partners", value: "8-15% of operator revenue. Paid to property owners (offices, apartments, schools, hospitals, etc.) under standard VMS contracts. Commission rates vary 5-25% to location depending on traffic + product mix + contract structure: lower at small accounts, higher at high-traffic commercial accounts. Modern operators with route optimization can afford higher commission rates than legacy operators." },
      { label: "Equipment depreciation + capital", value: "3-6% of operator revenue. Operator-funded equipment: combo machines ($5-12K), beverage coolers ($3-8K), AI vending coolers ($15-30K), micro-markets ($15-40K), specialty refrigerated ($10-20K). Depreciation: 7-10 year typical schedule. Operators finance through equipment lines + cash flow; capital intensity is significant barrier to entry for new operators." },
      { label: "Payment processing fees", value: "2-4% of operator revenue. Credit card processing: 2.5-3.5% per transaction on average. EMV + contactless adds 0.1-0.3%. Mobile wallet adds 0.2-0.4%. Compression pressure from card networks but offset by higher transaction value through modern payment hardware. Cash transactions: minimal fees but declining share (now <30% at most operators, <15% at modern operators)." },
      { label: "Operator margin levers", value: "Route density optimization (25-40% labor efficiency vs fixed-route): #1 margin lever. Premium-product mix (higher transaction value at similar COGS percentage): #2 margin lever. Specialty format additions (AI cooler, micro-market) with higher transaction value + better margin: #3 lever. Telemetry investment (eliminates wasted service visits): #4 lever. Sustainability spec (ENERGY STAR fleet, low-GWP refrigerant) reduces utility costs: #5 lever." },
    ],
  }),
  costBreakdown({
    heading: "Annual unit economics — single machine at $15K revenue",
    sub: "Per-machine economics at a typical traditional vending machine producing $15,000 annual gross revenue. Modern operator with route optimization.",
    items: [
      { label: "Gross revenue (annual product sales)", amount: "$15,000", range: "~4,000 transactions × $3.75 avg" },
      { label: "Product cost (COGS at 62%)", amount: "-$9,300", range: "Bulk procurement; typical product mix" },
      { label: "Labor (route service + restocking)", amount: "-$3,000", range: "Route allocation; ~52 visits/year × $58 fully-loaded labor" },
      { label: "Commission to location partner (10%)", amount: "-$1,500", range: "Property owner commission; varies by account" },
      { label: "Equipment depreciation", amount: "-$600", range: "$6K machine / 10-year schedule" },
      { label: "Payment processing (3%)", amount: "-$450", range: "Credit card + mobile wallet fees" },
      { label: "Telemetry + insurance + admin", amount: "-$400", range: "Modern operator overhead allocation" },
    ],
    totalLabel: "Net operator margin per machine",
    totalAmount: "-$250 (slight loss at this revenue level)",
  }),
  tipCards({
    heading: "Five vending operator economics realities the industry doesn't lead with",
    sub: "Each reflects operator-side reality often misunderstood by property owners + new operators evaluating the business.",
    items: [
      { title: "Single-machine economics break at low revenue", body: "Machines producing <$10K annual revenue typically lose money for operators after all costs. Route service labor is the biggest constraint — a $58 service visit on a machine producing $200/week revenue uses 15% of weekly revenue just on labor. This is why operators decline some small accounts; the economics genuinely don't work. Telemetry-driven supplemental restocks help; route density helps; consolidating sub-scale accounts at routing level helps." },
      { title: "Route density matters more than any other operational factor", body: "Operator running 15 machines/day per technician at $58/visit loses money on smaller accounts. Operator running 35 machines/day on optimized urban routes makes substantial margin even at low-revenue placements. Route density is the single biggest operator-side margin lever. Modern technology-forward operators with route-optimization software 40-80% more efficient than legacy operators on fixed routes." },
      { title: "Modern formats (AI cooler, micro-market) shift margin structure", body: "AI vending coolers + micro-markets produce $7-15 average transaction value vs $2-4 traditional vending. At similar COGS percentage, transaction value drives both gross dollar margin AND % margin. Modern format additions are why technology-forward operators outperform on margin. Capital intensity higher ($15-40K vs $5-12K) but ROI within 18-36 months at viable placements." },
      { title: "Commission rate negotiation has limits", body: "Operators can pay 5-25% commission at viable placements; can't pay 35-40% sustained. Property owners pushing commission above operator-sustainable level produce operator under-investment (less restocking, slower service response, declining program quality). Sustainable commission rates align with operator route density + product mix + transaction value at the specific account. Modern operators with better cost basis can afford higher commission rates." },
      { title: "Operator consolidation has been substantial", body: "Vending operator landscape has consolidated meaningfully over the past 15-20 years. Major national operators (Canteen / Compass, Aramark, Five Star Food Service) and large regional operators have acquired smaller operators. Drivers: route-density economics favor larger operators, technology investment requires scale, commission rate pressure favors operators with cost-basis advantages. Trend continues but plateauing." },
    ],
  }),
  decisionTree({
    heading: "Is the vending business attractive to enter as a new operator?",
    question: "Do you have access to substantial capital ($500K+ for fleet + working capital), route density potential (5+ machines within 25-mile radius), and operator-grade technology investment capacity (telemetry, route optimization, modern payment)?",
    yesBranch: {
      title: "Vending business entry is viable.",
      description: "With capital + route density potential + technology investment, new operator entry can succeed. Modern formats (AI cooler, micro-market, specialty refrigerated) are the strongest growth segments. Niche specialization (specific industries — schools, hospitals, federal, hospitality, premium multifamily) reduces direct competition with major national operators. Plan 3-5 years to viable margin; 7-10 years to scale economics.",
      finalTone: "go",
      finalLabel: "OPERATOR ENTRY · VIABLE",
    },
    noBranch: {
      title: "Vending operator entry is high-risk.",
      description: "Without capital, route density, or technology investment capacity, new operator entry typically fails within 2-3 years. Labor and equipment costs require scale to absorb; legacy operators with high cost basis are being acquired or exiting. Better paths: become a route partner with an existing operator (lower capital, faster ramp), or invest in specialty equipment lease-back (operate at limited number of placements with operator partnership). Don't enter vending as standalone single-operator without substantial advantages.",
      finalTone: "stop",
      finalLabel: "PARTNERSHIP · LIMITED ENTRY",
    },
  }),
  inlineCta({
    text: "Want the vending economics analysis pack (unit economics model, operator selection framework, commission negotiation template)?",
    buttonLabel: "Get the vending economics pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator engagement across property-owner contracting, operator selection, commission negotiation, and post-implementation governance for twelve years — covering both operator-side economics (route density, product mix, technology investment) and property-side economics (commission, service quality, amenity outcomes). The economic frameworks reflect both perspectives across hundreds of operator engagements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much do vending operators actually make per machine?", answer: "Highly variable. Per-machine annual revenue $4-25K depending on placement traffic + product mix + transaction value. Gross margin after COGS: 32-45% ($1,500-9,000 per machine). After labor + commission + depreciation + overhead: net margin $200-3,000 per machine at high-revenue placements, slight loss to breakeven at low-revenue placements ($10K and below). Multi-machine accounts spread overhead and produce better operator margin than standalone machines.", audience: "Property Owners" },
      { question: "What's the typical operator net margin at the company level?", answer: "8-15% net margin typical. Legacy operators with fixed routes + older equipment + minimal technology investment: 8-12%. Modern operators with route optimization + telemetry + premium product mix + specialty format additions: 12-18%. Top-tier modern operators with substantial scale + specialty format dominance: 16-22%. Operator margin tighter than most property owners assume; not a high-margin business.", audience: "Property Owners" },
      { question: "Why do operators decline some small accounts?", audience: "Property Owners", answer: "Unit economics break at low revenue + isolated location. Route service labor at $58 per visit consumes substantial portion of weekly revenue on small accounts. A machine producing $200/week + 52 weekly visits = $3,000 labor on $10,400 revenue (29% — leaves no room for COGS + commission + overhead). Operators decline single-machine small accounts outside route density unless commission low + premium product mix possible. Telemetry-driven supplemental visits help marginal accounts." },
      { question: "What's the largest single cost for vending operators?", answer: "Labor (route service + restocking) is the largest single cost at 15-22% of revenue. Product cost (COGS) is larger at 55-68% but procurement scale + product mix matter. Labor is the operator-side margin lever — route density optimization + telemetry-driven service produce 25-40% labor efficiency vs fixed-route legacy operators. Operator quality differentiation largely comes from labor efficiency.", audience: "Operations" },
      { question: "How do modern operators outperform legacy operators?", answer: "Five levers: (1) Route density optimization through telemetry-driven service — 25-40% labor efficiency. (2) Premium product mix — higher transaction value + better COGS percentage. (3) Specialty format additions (AI cooler, micro-market) with higher per-transaction value. (4) Modern payment hardware (EMV + contactless + mobile wallet) reducing cash handling + improving conversion. (5) Sustainability spec (ENERGY STAR fleet, low-GWP refrigerant) reducing utility costs. Combined effect: 40-80% margin advantage over legacy operators.", audience: "Operations" },
      { question: "What about commission to property owners?", answer: "Commission to property owners runs 5-25% of gross sales depending on placement. Office / apartment / campus 10-15% typical. High-traffic retail / airport 15-25%. Major-airport / institutional sometimes 20-35%. Commission rate negotiable but constrained by operator route density + product mix + transaction value at the specific account. Operators sustaining higher commission rates typically have lower cost basis through scale or modern operations.", audience: "Property Owners" },
      { question: "Are AI vending coolers more profitable than traditional vending?", answer: "Yes — at viable placements. AI coolers produce $7-15 average transaction value vs $2-4 traditional vending. Higher gross dollar per transaction even with similar COGS percentage. Modern operators amortize equipment cost ($15-30K per cooler) through 3-5 year contract and earn substantially better margins than traditional vending. Capital intensity is higher but ROI within 18-36 months at viable placements. AI cooler segment growing fastest in vending industry.", audience: "Operations" },
      { question: "Should we consider buying a vending business?", answer: "Vending business acquisition is viable at scale + with technology investment capability. Existing book-of-business + route density + equipment fleet are attractive acquisition targets. Watch for: legacy fleet requiring substantial CapEx for modernization, declining contracts, commission rate pressure from sophisticated property owners, labor cost inflation. Modern operator acquisitions at $2-4M revenue typical; major regional operators $10-50M. Industry consolidation continues; entry by acquisition more feasible than entry by ground-up.", audience: "Investors" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending industry economic data + operator benchmarks", url: "https://www.namanow.org/", note: "Industry economic data including operator margins, route economics, and category data" },
      { label: "Automatic Merchandiser — annual State of the Industry report", url: "https://www.vendingmarketwatch.com/", note: "Trade publication annual report on vending industry economics and operator performance" },
      { label: "Vending Times — industry coverage + operator economics", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending operator economics and industry trends" },
      { label: "Vistar / McLane / Core-Mark — wholesale food + beverage distributors", url: "https://www.vistarcorp.com/", note: "Wholesale distributor pricing data underlying operator COGS economics" },
      { label: "IBISWorld — vending services industry market research", url: "https://www.ibisworld.com/", note: "Industry research firm covering vending services market size + operator economics" },
    ],
  }),
  relatedGuides({
    heading: "Related vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Benefits of using a vending management company", description: "Operator-vs-self-operate comparison across capital, operations, and revenue capture.", href: "/vending-management-companies/benefits-of-using-a-vending-management-company" },
      { eyebrow: "Hidden costs", title: "Are there hidden fees in vending services?", description: "Honest accounting of operator fee structures, commission rates, and contract terms.", href: "/vending-faq/are-there-hidden-fees-in-vending-services" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Costs, commissions, equipment, operators, and the property-side patterns that work across vending categories.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
