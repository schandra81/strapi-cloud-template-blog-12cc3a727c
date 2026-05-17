import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("exit-strategies-for-vending-franchise-owners", [
  tldr({
    heading: "What exit strategies work for vending franchise owners?",
    paragraph:
      "Vending franchise exits typically follow four patterns: (1) sale to a larger operator (most common — 2-4× annual revenue for mature operations, varies by EBITDA, route quality, telemetry coverage); (2) sale to family member or key employee (owner-financing common; valuation typically 1.5-3× annual revenue); (3) gradual wind-down (selling routes / placements piecemeal, keeping cash flow during transition); (4) conversion to passive ownership (hire operations team, retain ownership, distribute earnings). Each path has different timing, valuation, and tax implications. Preparation matters — operators planning exit 18-36 months ahead typically achieve 30-50% higher valuations than rushed exits. Optimization levers: telemetry coverage (buyers pay premium), placement quality (premium placements > generic), route density (concentrated routes > scattered), documented operations (CMMS, planograms, account management), and customer retention. Exit valuation calculators (3-5× EBITDA typical; 2-4× revenue rough proxy) provide starting point; actual transactions vary substantially.",
    bullets: [
      { emphasis: "Four exit patterns:", text: "Sale to larger operator (most common), sale to family/employee, gradual wind-down, conversion to passive ownership. Each has different timing, valuation, and tax implications." },
      { emphasis: "Preparation drives valuation:", text: "Operators planning exit 18-36 months ahead achieve 30-50% higher valuations than rushed exits. Time for optimization (telemetry, documentation, route density)." },
      { emphasis: "Valuation 2-4× annual revenue typical:", text: "Or 3-5× EBITDA. Varies by EBITDA, route quality, telemetry coverage, customer retention. Documented operations drive premium." },
    ],
  }),
  statStrip({
    heading: "Vending franchise exit benchmarks",
    stats: [
      { number: "2-4×", label: "annual revenue valuation", sub: "typical sale multiple", accent: "blue" },
      { number: "3-5×", label: "EBITDA multiple", sub: "alternative valuation method", accent: "blue" },
      { number: "18-36 mo", label: "optimal preparation lead time", sub: "for premium valuation", accent: "blue" },
      { number: "+30-50%", label: "valuation lift", sub: "with proper preparation", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending franchise exit strategies compared",
    sub: "Four primary exit patterns. Each has different timing, valuation, and operational implications.",
    headers: ["Exit pattern", "Typical valuation", "Timing", "Best fit"],
    rows: [
      ["Sale to larger operator", "2-4× annual revenue", "6-18 months from listing", "Mature operations (5+ years), strong telemetry, premium placements"],
      ["Sale to family / key employee", "1.5-3× annual revenue", "Owner-financing typical", "Multi-generational vending, succession planning"],
      ["Gradual wind-down (piecemeal sales)", "Varies by piece", "12-36 months", "Smaller operations, geographic concentration"],
      ["Passive ownership conversion", "N/A (retain ownership)", "Operations team takes over", "Operators wanting income without operations"],
      ["Acquisition by private equity", "3-6× EBITDA (higher)", "12-24 months due diligence", "Large mature operations ($5M+ revenue)"],
    ],
  }),
  timeline({
    heading: "Vending franchise exit preparation — 18-36 months",
    sub: "Preparation drives valuation. Operators with 18-36 month lead time achieve 30-50% higher valuations than rushed exits.",
    howToName: "Prepare a vending franchise for exit",
    totalTime: "18-36 months",
    steps: [
      { title: "Month -36 to -18: Operations optimization", description: "Maximize telemetry coverage (100% target). Tighten planogram per placement. Improve route density. Document operations (CMMS, planograms, customer files). Reduce account churn. Build EBITDA.", duration: "12-18 months" },
      { title: "Month -18 to -12: Documentation + valuation", description: "Engage business broker or M&A advisor. Prepare financials, operations documentation, customer contracts. Get preliminary valuation. Identify target buyer profile (larger operator, PE firm, family). Begin tax planning.", duration: "6 months" },
      { title: "Month -12 to -6: Buyer outreach", description: "List with broker or direct outreach to target buyers. Initial conversations, NDAs, preliminary financials shared. Multiple buyer interest desirable to drive competitive pricing.", duration: "6 months" },
      { title: "Month -6 to -3: Due diligence + LOI", description: "Letter of Intent (LOI) signed with preferred buyer. Due diligence begins — buyer reviews financials, operations, contracts, customers. May involve site visits, customer interviews, telemetry data review.", duration: "3-4 months" },
      { title: "Month -3 to 0: Negotiation + close", description: "Purchase agreement negotiated. Customary closing items (financing, escrow, transition assistance). Transition plan for customer accounts and operations team. Close transaction.", duration: "2-3 months" },
      { title: "Post-close transition", description: "Owner typically provides transition assistance (30-180 days) — customer introductions, operations training, key relationships handover. Compensation for transition typically in purchase price.", duration: "30-180 days" },
    ],
  }),
  specList({
    heading: "Vending franchise exit specifications",
    items: [
      { label: "Valuation methodology", value: "Two approaches: (1) revenue multiple (2-4× annual revenue typical, varies by EBITDA), (2) EBITDA multiple (3-5× EBITDA typical, 6× for high-EBITDA, telemetry-rich, premium-placement operations). Larger PE-targeted operations sometimes 6-8× EBITDA. Engage broker for accurate valuation." },
      { label: "Premium valuation drivers", value: "Telemetry coverage (100% target). Placement quality (institutional, campus, airport > generic offices). Route density (concentrated > scattered). Documented operations (CMMS, planograms, account management workflow). Customer retention (low churn). EBITDA growth trajectory." },
      { label: "Discount valuation drivers", value: "Operator-dependent operations (no documented procedures), poor route density (high driving time), aging fleet (no ENERGY STAR), customer churn (high turnover), unclear financials, lapsed insurance, contract issues. Buyers discount substantially for each." },
      { label: "Tax planning", value: "Sale structure (asset sale vs stock sale), depreciation recapture, capital gains treatment, installment sale election. Engage tax advisor 12-18 months before exit; structure can shift effective tax 10-25%. Some structures use Section 1031 exchange or seller-financed installment for tax optimization." },
      { label: "Earnout structures", value: "Some buyers structure purchase price as base + earnout (additional payment based on post-close performance). Common for high-EBITDA-growth operations. Negotiate carefully — earnout structures can produce surprises if growth slows post-close." },
      { label: "Transition assistance", value: "30-180 day transition assistance typical. Owner introduces customer accounts, trains operations team, supports operations during transition. Compensation in purchase price; sometimes additional consulting agreement post-transition." },
      { label: "Buyer types", value: "Larger vending operators (strategic acquirers — most common), private equity firms (large operations $5M+ revenue), family members or key employees (succession), independent buyers, vending consolidators (regional roll-ups). Different buyers value different things." },
      { label: "Franchise considerations", value: "Franchise agreement may require franchisor approval of sale, right of first refusal, or other restrictions. Engage franchisor early; review franchise agreement before listing. Most franchisors support succession but require approval." },
      { label: "Broker / M&A advisor selection", value: "Engage broker or M&A advisor experienced in vending industry. Industry-specific brokers understand valuation nuances and have buyer networks. Modern best practice; saves 6-12 months and produces 20-40% higher valuations than generic brokers." },
    ],
  }),
  tipCards({
    heading: "Five vending franchise exit mistakes",
    sub: "Each is documented in M&A advisor post-transaction reviews. All preventable with proper preparation and advisor engagement.",
    items: [
      { title: "Rushing the exit without preparation", body: "Operators planning exit 18-36 months ahead achieve 30-50% higher valuations than rushed exits. Time for optimization (telemetry, documentation, route density), buyer outreach, competitive negotiation. Rushed exits accept first offer at discount." },
      { title: "No telemetry coverage at exit", body: "Buyers pay premium for telemetry-rich operations because they can validate the business via data. Operators without telemetry sell at substantial discount. Build telemetry coverage 18-24 months before exit; demonstrates operations discipline." },
      { title: "Owner-dependent operations", body: "Buyers discount substantially for operator-dependent operations (no documented procedures, owner-handled everything). Document operations 18-24 months ahead — CMMS, planograms, account management workflow, route procedures. Buyer can take over without owner gap." },
      { title: "Single-buyer negotiation", body: "Multiple buyer interest drives competitive pricing. Operators that engage with only one buyer accept disclosure of price. Engage broker to drive 3-5 buyer interest; competitive process typically lifts price 15-30%." },
      { title: "Skipping franchisor coordination", body: "Franchise agreement may require franchisor approval, right of first refusal, or transfer-related fees. Engage franchisor early; review franchise agreement before listing. Surprises at close can derail transactions or reduce valuation." },
    ],
  }),
  inlineCta({
    text: "Want the vending franchise exit playbook (preparation timeline, valuation, broker engagement)?",
    buttonLabel: "Get the franchise exit playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operators across the exit lifecycle — pre-sale operations optimization, broker engagement, valuation analysis, and transition planning. The exit benchmarks reflect M&A advisor data and industry transaction comparables.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's a vending franchise typically worth at exit?", answer: "2-4× annual revenue or 3-5× EBITDA typical. Varies by EBITDA, route quality, telemetry coverage, customer retention. High-EBITDA, telemetry-rich operations with premium placements achieve upper end. PE-targeted large operations sometimes 6-8× EBITDA.", audience: "Franchise Owners" },
      { question: "How long does it take to sell?", answer: "6-18 months from listing to close, typical. Total preparation + sale cycle 18-36 months for optimal valuation. Operators rushing the exit (3-6 months total) accept substantial discount. Preparation drives valuation more than any other lever.", audience: "Franchise Owners" },
      { question: "Who buys vending franchises?", answer: "Four buyer types: larger vending operators (strategic acquirers — most common), private equity firms (large operations $5M+ revenue), family members or key employees (succession), and vending consolidators (regional roll-ups). Different buyers value different things; broker matches your operation to buyer type.", audience: "Franchise Owners" },
      { question: "What drives premium valuation?", answer: "Telemetry coverage (100% target), placement quality (institutional > generic offices), route density (concentrated > scattered), documented operations (CMMS, planograms, workflow), customer retention (low churn), EBITDA growth trajectory. Each lever drives 5-15% premium; cumulative impact 30-50%.", audience: "Franchise Owners" },
      { question: "Do I need a broker?", answer: "For most operations yes. Industry-specific brokers understand valuation nuances and have buyer networks. Drives 15-30% higher valuations than direct outreach. For small operations (<$500K revenue), broker may not be worth the fee; for larger operations, almost always pays for itself.", audience: "Franchise Owners" },
      { question: "What about taxes?", answer: "Sale structure (asset vs stock), depreciation recapture, capital gains, installment sale election. Engage tax advisor 12-18 months before exit. Structure can shift effective tax 10-25%. Some operators use Section 1031 exchange or seller-financed installment for tax optimization.", audience: "Tax Advisors" },
      { question: "How long do I need to stay after sale?", answer: "30-180 day transition assistance typical. Owner introduces customer accounts, trains operations team, supports operations during transition. Compensation in purchase price; sometimes additional consulting agreement post-transition.", audience: "Franchise Owners" },
      { question: "Should I sell to a family member or external buyer?", answer: "Depends on family interest, valuation, tax situation. Family / employee sales typically 1.5-3× annual revenue (lower than external 2-4×) but enable succession. External sale maximizes valuation; succession preserves the operation and family employment. Weigh based on priorities.", audience: "Franchise Owners" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "IBBA — International Business Brokers Association", url: "https://www.ibba.org/", note: "Industry trade association covering business broker standards" },
      { label: "AICPA — American Institute of CPAs", url: "https://www.aicpa.org/", note: "Professional standards for valuation and tax planning" },
      { label: "IFA — International Franchise Association", url: "https://www.franchise.org/", note: "Industry trade association covering franchise sale and succession" },
      { label: "NAMA — vending franchise transaction benchmarks", url: "https://www.namanow.org/", note: "Industry guidance on vending operator transactions" },
      { label: "Vending Times — franchise M&A coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending industry M&A activity" },
    ],
  }),
  relatedGuides({
    heading: "Related vending franchise guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending franchise growth potential", description: "Realistic growth arc, revenue trajectory, and plateau planning for franchise operators.", href: "/vending-franchises/vending-franchise-growth-potential" },
      { eyebrow: "Operations", title: "Vending franchise royalty fees", description: "Franchise fee structure, royalty calculation, and economics of franchise vs independent.", href: "/vending-franchises/vending-franchise-royalty-fees" },
      { eyebrow: "Hub", title: "All vending franchise guides", description: "Franchise economics, training, growth, exit strategies, and operations patterns.", href: "/vending-franchises" },
    ],
  }),
]);
process.exit(0);
