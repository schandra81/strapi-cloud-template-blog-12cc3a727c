import { seedPost, tldr, statStrip, costBreakdown, comparisonTable, decisionTree, tipCards, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-many-machines-do-you-need-to-be-profitable", [
  tldr({
    heading: "How many vending machines do you need to be profitable as an operator?",
    paragraph:
      "Operator profitability is a margin-per-machine question multiplied by a portfolio-count question, not a raw machine-count question. Solo owner-operator hits sustainable profitability at 8-15 machines if the portfolio averages $700-$900 monthly gross per machine — typical of mid-traffic placements served by a modern operator with telemetry, ENERGY STAR equipment, and structured planogram. The same solo owner needs 20-30 machines at $400-$600 averages (low-traffic-heavy mix). Owner + 1 route driver crosses break-even at 25-40 machines; owner + 2 drivers + 1 sales rep needs 60-100 machines to cover labor + admin overhead; multi-route franchise / multi-unit operators reach comfortable margin at 150-300 machines. The economic model: gross monthly revenue minus host commission (10-20% typical) minus planogram cost-of-goods (50-55% of gross with cash-and-carry discipline) minus service / route cost ($35-$80 per machine per visit + truck miles + driver labor allocation) minus telemetry / payment processing ($25-$50 per machine monthly) minus equipment depreciation ($150-$400 per machine per year amortized). Net contribution per machine at a $800/month mid-traffic placement lands around $150-$180 before owner labor and admin overhead. Modern operators (telemetry across fleet, ENERGY STAR equipment, route optimization, quarterly portfolio review) reach profitability at lower machine count than legacy operators (fixed routes, no per-machine cost allocation, no portfolio discipline). Operators that conflate fleet size with profitability — chasing low-traffic placements to grow machine count — push profitability further out, not closer. Portfolio mix discipline beats fleet-size aspiration every time.",
    bullets: [
      { emphasis: "Solo owner-operator profitability at 8-15 machines if $700-$900 monthly average:",
        text: "Mid-traffic portfolio with modern operator capability reaches sustainable profitability sooner. Low-traffic-heavy portfolio extends timeline to 20-30 machines." },
      { emphasis: "Owner + 1 route driver crosses break-even at 25-40 machines:",
        text: "First hire raises break-even threshold significantly. Time the hire when route hours bottleneck owner capacity and revenue supports added labor cost." },
      { emphasis: "Multi-route operator comfortable margin at 150-300 machines:",
        text: "Sales + service + admin overhead scales nonlinearly. Telemetry + structured route + quarterly portfolio discipline preserve margin at scale.", },
    ],
  }),
  statStrip({
    heading: "Vending profitability benchmarks by operator configuration",
    stats: [
      { number: "8-15", label: "machines — solo profitability", sub: "at $700-$900 mid-traffic avg", accent: "blue" },
      { number: "25-40", label: "machines — owner + 1 driver", sub: "first hire break-even", accent: "blue" },
      { number: "150-300", label: "machines — multi-route", sub: "sales + service + admin overhead", accent: "blue" },
      { number: "50-55%", label: "planogram cost-of-goods", sub: "% of gross with discipline", accent: "orange" },
    ],
  }),
  costBreakdown({
    heading: "Per-machine monthly operator P&L (mid-traffic placement)",
    sub: "Modern operator with telemetry + ENERGY STAR + structured route at a placement producing $800 monthly gross revenue.",
    items: [
      { label: "Gross revenue per machine monthly", amount: "$800", range: "Mid-traffic baseline placement" },
      { label: "Less host commission (12%)", amount: "-$96", range: "10-20% range depending on host type" },
      { label: "Less planogram cost-of-goods (52%)", amount: "-$416", range: "50-55% typical with cash-and-carry" },
      { label: "Less service / route cost", amount: "-$65", range: "$35-$80 per visit + truck + labor" },
      { label: "Less telemetry + payment processing", amount: "-$35", range: "$25-$50 monthly per machine" },
      { label: "Less equipment depreciation", amount: "-$25", range: "$150-$400 annually amortized monthly" },
      { label: "Net contribution per machine", amount: "$163", range: "Before owner labor + admin overhead" },
    ],
    totalLabel: "Approximate net contribution per machine monthly",
    totalAmount: "$163",
  }),
  comparisonTable({
    heading: "Profitability arrival by fleet size + operator configuration",
    sub: "Same per-machine economics applied across fleet sizes and labor configurations. Portfolio mix shifts the arrival point earlier or later.",
    headers: ["Fleet size", "Solo owner-operator", "Owner + 1 driver", "Owner + 2 + sales rep", "Multi-route"],
    rows: [
      ["8-15 machines", "Profitable at $800+ avg", "Net negative", "Net negative", "Not applicable"],
      ["16-25 machines", "Comfortable margin", "Approaching break-even", "Net negative", "Not applicable"],
      ["25-40 machines", "Owner-time stretch", "Break-even to profitable", "Net negative", "Not applicable"],
      ["40-60 machines", "Owner-time bottleneck", "Profitable", "Approaching break-even", "Not applicable"],
      ["60-100 machines", "Not feasible solo", "Comfortable margin", "Break-even to profitable", "Approaching break-even"],
      ["100-150 machines", "Not feasible solo", "Stretched capacity", "Profitable", "Break-even"],
      ["150-300 machines", "Not feasible solo", "Not feasible", "Comfortable", "Profitable"],
      ["300+ machines", "Not feasible solo", "Not feasible", "Stretched", "Comfortable margin"],
    ],
  }),
  decisionTree({
    heading: "Should I hire the first route driver yet?",
    question: "Am I at 25-40 machines AND running 35+ route hours per week AND averaging $700+ per machine monthly?",
    yesBranch: {
      title: "Time the hire — within next 60-90 days",
      description: "Owner-time bottleneck is now a growth ceiling. Revenue supports added labor (typically $80K-$120K loaded compensation including taxes + benefits + service vehicle). Hire a route driver, restructure owner time to sales + portfolio review.",
      finalTone: "go",
      finalLabel: "Hire route driver",
    },
    noBranch: {
      title: "Hold and grow portfolio quality first",
      description: "Too early hire produces negative net contribution + owner pulled into managing instead of growing. Below 25 machines or below $700 averages, focus on portfolio quality, higher-traffic prospects, and per-machine margin discipline before adding labor.",
      finalTone: "stop",
      finalLabel: "Defer hire",
    },
  }),
  tipCards({
    heading: "Six profitability-pathway mistakes operators make",
    sub: "All preventable with portfolio discipline + tier-matched economics + structured hiring + modern operator capability.",
    items: [
      { title: "Chasing machine count over portfolio quality", body: "Operators that conflate machine count with profitability accept any placement to grow fleet. Low-traffic-heavy portfolios extend profitability timeline. 15 machines at $800 average outperforms 30 machines at $400 average — fewer machines, lower service load, higher margin, lower capex. Portfolio quality drives profitability." },
      { title: "Hiring the first driver too early or too late", body: "First route driver hire at 25-40 machines is the typical window. Too early: revenue doesn't cover labor, owner pulled to manage. Too late: owner-time bottleneck caps growth, service quality degrades, churn rises. Track weekly route hours + revenue per machine to time the hire." },
      { title: "Skipping telemetry to save monthly cost", body: "Telemetry $25-$40 monthly per machine pays back in route efficiency, stockout prevention, planogram refinement, and customer-complaint reduction. Operators skipping telemetry extend profitability timeline through service inefficiency + revenue loss. Modern operator standard." },
      { title: "Cost-of-goods drift", body: "Planogram cost-of-goods 50-55% of gross is the discipline target. Drift to 58-65% from buying convenience-store retail or distributor partial-pallet shows up directly in margin. Cash-and-carry warehouse pricing + structured planogram + supplier negotiation produces 50-55%." },
      { title: "Service cost not allocated per machine", body: "Operators that don't allocate truck miles + driver labor + service supplies + tools per machine can't tell which placements are profitable. Track per-machine service cost monthly. High-service low-revenue placements drag the fleet; cut or renegotiate them. Modern operators track; legacy operators average." },
      { title: "No quarterly portfolio review", body: "Profitability emerges from portfolio mix + per-machine economics + service efficiency. Quarterly review tracks net contribution per machine, churn rate, service cost, commission rate, planogram cost-of-goods. Modern operators run quarterly; legacy operators run annual and miss drift.", },
    ],
  }),
  keyTakeaways({
    heading: "Vending profitability essentials",
    takeaways: [
      "Solo owner-operator profitability at 8-15 machines if portfolio averages $700-$900 monthly per machine; 20-30 machines needed at $400-$600 low-traffic averages.",
      "Owner + 1 driver breaks even at 25-40 machines; owner + 2 + sales at 60-100; multi-route operator comfortable at 150-300.",
      "Per-machine net contribution at $800 mid-traffic placement lands ~$150-$180 monthly before owner labor and admin overhead.",
      "Planogram cost-of-goods 50-55% of gross with cash-and-carry discipline; drift to 58-65% destroys margin.",
      "Telemetry ($25-$40/month) pays back in route efficiency + stockout prevention; modern operator standard.",
      "Portfolio quality (mid-to-high-traffic placements) beats fleet-size aspiration every time on profitability timeline.",
      "Quarterly portfolio review on net contribution per machine + churn + service cost catches drift before it compounds.",
    ],
  }),
  inlineCta({
    text: "Want the operator profitability framework (per-machine P&L + portfolio mix + hiring cadence + cost-of-goods discipline)?",
    buttonLabel: "Get the profitability framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support vending operator profitability planning across solo owner-operator, owner-plus-driver, and multi-route configurations — including per-machine economic modeling, portfolio mix analysis, hiring cadence, cost-of-goods discipline, and quarterly portfolio review. The benchmarks here reflect operator-side P&L data ranges across fleet sizes and placement tiers.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How many vending machines do I need to be profitable?", answer: "Depends on portfolio mix and operator configuration. Solo owner-operator at 8-15 machines if portfolio averages $700-$900 monthly per machine. 20-30 machines needed at $400-$600 averages. Owner + 1 route driver at 25-40 machines. Multi-route operator at 150-300 machines.", audience: "New Operators" },
      { question: "What are typical per-machine monthly costs?", audience: "New Operators", answer: "Commission 10-20% of gross (placement-dependent). Planogram cost-of-goods 50-55% of gross. Service / route cost $35-$80 per visit plus truck miles plus driver labor allocation. Telemetry + payment processing $25-$50 monthly. Equipment depreciation $150-$400 annually amortized. Net contribution depends on placement velocity." },
      { question: "When should I hire the first route driver?", audience: "Growing Operators", answer: "Typically at 25-40 machines depending on route geography and service cadence. Track route hours weekly and revenue per machine. Hire when owner-time bottleneck caps growth and revenue supports added labor (~$80K-$120K loaded compensation for first driver including taxes, benefits, and service vehicle)." },
      { question: "What's the right portfolio mix?", audience: "Growing Operators", answer: "Target 60-75% high-to-mid-traffic + 25-30% low-traffic + 5-10% mixed / experimental. Operators that drift low-traffic-heavy ($200-$600 monthly per machine) extend profitability timeline. Portfolio discipline at sales: prioritize high-traffic prospects; accept low-traffic only with portfolio rebalancing in view." },
      { question: "How does telemetry affect profitability?", audience: "New Operators", answer: "Telemetry $25-$40 monthly per machine saves substantially more in route efficiency, stockout prevention, planogram refinement, and customer-complaint reduction. Modern operators with telemetry reach profitability at lower machine count than legacy operators without it." },
      { question: "How does cost-of-goods discipline work?", audience: "Growing Operators", answer: "Planogram cost-of-goods 50-55% of gross with discipline. Drift to 58-65% from buying convenience-store retail or distributor partial-pallet shows up in margin. Cash-and-carry warehouse pricing (Sam's Club Business, Costco Business, Restaurant Depot) + structured planogram + supplier negotiation produces 50-55%." },
      { question: "How long does it take to reach profitability?", audience: "New Operators", answer: "Varies by capital + sales velocity + portfolio mix. Solo owner-operator typically 12-24 months at 8-15 machines with mid-traffic placements. Owner + 1 driver 24-36 months at 25-40 machines. Multi-route operator 5-10 years to 150-300 machines. Modern operator capability shortens timeline." },
      { question: "Should I focus on fleet size or per-machine margin?", audience: "Multi-Unit Operators", answer: "Per-machine margin. Operators chasing fleet size fill the portfolio with low-traffic underperformers and extend the profitability timeline. 15 machines at $800 average outperforms 30 machines at $400 average. Quarterly portfolio review tracks net contribution per machine and churn. Margin discipline drives profitability." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator economics benchmarks", url: "https://www.namanow.org/", note: "National Automatic Merchandising Association covers operator economics and profitability benchmarks across fleet sizes." },
      { label: "Vending Market Watch — operator P&L coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering operator profitability and fleet economics across configurations." },
      { label: "Vending Times — operator practice + profitability benchmarks", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator economics and best practices across fleet sizes." },
      { label: "Cantaloupe — telemetry economics and ROI data", url: "https://www.cantaloupe.com/", note: "Modern vending telemetry platform with per-machine subscription economics and operator ROI case studies." },
      { label: "SBA — small business profitability fundamentals", url: "https://www.sba.gov/", note: "U.S. Small Business Administration guidance on small business P&L and profitability planning applicable to vending operators." },
    ],
  }),
  relatedGuides({
    heading: "Related vending startup guides",
    items: [
      { eyebrow: "Sister guide", title: "How many locations do you need to be profitable", description: "Portfolio mix and per-machine economics that drive operator profitability arrival.", href: "/vending-machine-locators/how-many-locations-do-you-need-to-be-profitable" },
      { eyebrow: "Operations", title: "Cost of vending franchise", description: "Vending franchise startup cost, fee structure, and per-machine economics.", href: "/vending-business-startup/cost-of-vending-franchise" },
      { eyebrow: "Hub", title: "All vending startup guides", description: "Capital planning, business structure, equipment selection, and operator scaling guidance for new vending operators.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
