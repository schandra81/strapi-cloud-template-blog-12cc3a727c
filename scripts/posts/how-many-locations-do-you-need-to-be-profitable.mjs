import { seedPost, tldr, statStrip, costBreakdown, comparisonTable, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-many-locations-do-you-need-to-be-profitable", [
  tldr({
    heading: "How many vending locations does an operator need to be profitable?",
    paragraph:
      "Operator profitability depends on placement mix, not raw machine count. Solo owner-operator hits profitability at 8-15 machines if portfolio averages $800+ monthly per machine (typical at mid-traffic placements with modern operator capability); 20-30 machines needed at $400-$600 averages (low-traffic-heavy portfolio). Owner + 1 route driver crosses profitability at 25-40 machines. Owner + 2 route drivers + 1 sales rep at 60-100 machines. Multi-route franchise / multi-unit operator profitability at 150-300 machines. The economic model: gross revenue minus commission (10-20%) minus planogram cost-of-goods (typically 50-55% of gross) minus service / route cost ($35-$80 per machine per visit + truck miles + driver labor) minus telemetry / payment processing ($25-$50 per machine monthly) minus equipment depreciation ($150-$400 per machine per year amortized). Modern operators with telemetry + ENERGY STAR + structured route + portfolio discipline reach profitability at lower machine count than legacy operators. Operators that conflate machine count with profitability — chasing low-traffic placements to grow fleet — push profitability further out, not closer.",
    bullets: [
      { emphasis: "Solo owner-operator profitability at 8-15 machines if $800+ average per machine:",
        text: "Mid-traffic portfolio with modern operator capability reaches profitability sooner. Low-traffic-heavy portfolio (400-$600 averages) needs 20-30 machines." },
      { emphasis: "Owner + 1 route driver crosses profitability at 25-40 machines:",
        text: "First hire raises break-even significantly. Plan hire when route load justifies + revenue supports added labor." },
      { emphasis: "Multi-route operator profitability at 150-300 machines:",
        text: "Sales + service + admin overhead increases nonlinearly. Telemetry + structured route + portfolio discipline maintain margin at scale.", },
    ],
  }),
  statStrip({
    heading: "Operator profitability benchmarks",
    stats: [
      { number: "8-15", label: "machines — solo profitability", sub: "at $800+ average monthly revenue", accent: "blue" },
      { number: "25-40", label: "machines — owner + 1 driver", sub: "first hire break-even", accent: "blue" },
      { number: "150-300", label: "machines — multi-route operator", sub: "structured sales + service + admin", accent: "blue" },
      { number: "50-55%", label: "planogram cost-of-goods", sub: "% of gross revenue typical", accent: "orange" },
    ],
  }),
  costBreakdown({
    heading: "Per-machine monthly operator economics (mid-traffic placement)",
    sub: "Mid-traffic placement producing $800 monthly gross revenue. Modern operator with telemetry + ENERGY STAR + structured route.",
    items: [
      { label: "Gross revenue per machine monthly", amount: "$800", range: "Mid-traffic baseline" },
      { label: "Less host commission (12%)", amount: "-$96", range: "10-20% range" },
      { label: "Less planogram cost-of-goods (52%)", amount: "-$416", range: "50-55% typical" },
      { label: "Less service / route cost", amount: "-$65", range: "$35-$80 per visit + truck + labor allocation" },
      { label: "Less telemetry + payment processing", amount: "-$35", range: "$25-$50 monthly typical" },
      { label: "Less equipment depreciation (amortized)", amount: "-$25", range: "$150-$400 annually amortized monthly" },
      { label: "Net contribution per machine monthly", amount: "$163", range: "Before owner labor + admin + overhead" },
    ],
    totalLabel: "Approximate net contribution per machine monthly",
    totalAmount: "$163",
  }),
  comparisonTable({
    heading: "Operator profitability by fleet size + portfolio mix",
    sub: "Same per-machine economics applied across fleet sizes. Portfolio mix drives whether profitability arrives at lower or higher machine count.",
    headers: ["Fleet size", "Solo owner-operator", "Owner + 1 driver", "Owner + 2 + sales", "Multi-route"],
    rows: [
      ["8-15 machines", "Profitability if $800+ avg", "Net negative", "Net negative", "Not applicable"],
      ["16-25 machines", "Profitable", "Approaching break-even", "Net negative", "Not applicable"],
      ["25-40 machines", "Comfortable margin", "Break-even to profitable", "Net negative", "Not applicable"],
      ["40-60 machines", "Owner-time bottleneck", "Profitable", "Approaching break-even", "Not applicable"],
      ["60-100 machines", "Not feasible solo", "Comfortable margin", "Break-even to profitable", "Approaching break-even"],
      ["100-150 machines", "Not feasible solo", "Stretched", "Profitable", "Break-even"],
      ["150-300 machines", "Not feasible solo", "Not feasible", "Comfortable", "Profitable"],
      ["300+ machines", "Not feasible solo", "Not feasible", "Stretched", "Comfortable"],
    ],
  }),
  tipCards({
    heading: "Six profitability-pathway mistakes",
    sub: "All preventable with portfolio discipline + tier-matched economics + structured hiring + modern operator capability.",
    items: [
      { title: "Chasing machine count over portfolio quality", body: "Operators that conflate machine count with profitability chase any placement to grow fleet. Low-traffic-heavy portfolio extends profitability timeline. 15 machines at $800 average outperforms 30 machines at $400 average — fewer machines, lower service load, higher margin. Portfolio quality drives profitability." },
      { title: "Hiring too early or too late", body: "First route driver hire at 25-40 machines typically. Too early: revenue doesn't support added labor + owner pulled to manage. Too late: owner-time bottleneck caps growth + service quality degrades + churn rises. Track route hours + revenue per machine to time hire." },
      { title: "Skipping telemetry to save monthly cost", body: "Telemetry $25-$40 monthly per machine. Saves substantially more in route efficiency, stockout prevention, planogram refinement, customer-complaint reduction. Operators skipping telemetry to save monthly cost extend profitability timeline through service inefficiency + revenue loss." },
      { title: "Bad cost-of-goods discipline", body: "Planogram cost-of-goods 50-55% of gross typical. Drift to 58-65% from buying convenience-store retail or distributor partial-pallet shows up in margin. Cash-and-carry warehouse pricing + structured planogram + supplier negotiation produces 50-55%. Track at monthly review." },
      { title: "Service cost not allocated properly", body: "Operators that don't allocate truck miles + driver labor + service supplies + tools per machine can't tell which placements are profitable. Track per-machine service cost monthly. High-service low-revenue placements drag fleet; cut or renegotiate. Modern operators track; legacy operators average." },
      { title: "No quarterly portfolio review", body: "Profitability emerges from portfolio mix + per-machine economics + service efficiency. Quarterly review: net contribution per machine, churn rate, service cost, commission rate, planogram cost-of-goods. Modern operators run quarterly review; legacy operators run annually + miss drift.", },
    ],
  }),
  inlineCta({
    text: "Want the operator profitability framework (per-machine economics + portfolio mix + hiring + cost-of-goods)?",
    buttonLabel: "Get the profitability framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator profitability planning across solo owner-operator, owner-plus-driver, and multi-route configurations — including per-machine economic modeling, portfolio mix analysis, hiring cadence, cost-of-goods discipline, and quarterly portfolio review. The benchmarks reflect operator-side P&L data across fleet sizes.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How many vending machines does an operator need to be profitable?", answer: "Depends on portfolio mix. Solo owner-operator at 8-15 machines if portfolio averages $800+ monthly per machine. 20-30 machines needed at $400-$600 averages (low-traffic-heavy portfolio). Owner + 1 route driver at 25-40 machines. Multi-route operator at 150-300 machines.", audience: "Operators" },
      { question: "What are the typical per-machine costs?", answer: "Commission 10-20% (placement-dependent). Planogram cost-of-goods 50-55% of gross. Service / route cost $35-$80 per visit + truck miles + driver labor. Telemetry + payment processing $25-$50 monthly. Equipment depreciation $150-$400 annually amortized. Net contribution depends on placement velocity.", audience: "Operators" },
      { question: "When should I hire the first route driver?", answer: "Typically at 25-40 machines depending on route geography + service cadence. Track route hours + revenue per machine. Hire when owner-time bottleneck caps growth + revenue supports added labor (typically $80K-$120K total compensation for first driver including taxes + benefits + vehicle).", audience: "Operators" },
      { question: "What's the right portfolio mix?", answer: "60-75% high-traffic + 25-30% low-traffic + 5-10% mixed / experimental. Operators that drift low-traffic-heavy ($200-$800 monthly per machine) extend profitability timeline. Portfolio discipline at sales: prioritize high-traffic prospects; accept low-traffic only with portfolio rebalancing in view.", audience: "Operators" },
      { question: "How does telemetry affect profitability?", answer: "Telemetry $25-$40 monthly per machine saves substantially more in route efficiency, stockout prevention, planogram refinement, customer-complaint reduction. Modern operators with telemetry reach profitability at lower machine count than legacy operators without.", audience: "Operators" },
      { question: "What about cost-of-goods?", answer: "Planogram cost-of-goods 50-55% of gross typical. Drift to 58-65% from buying convenience-store retail or distributor partial-pallet shows up in margin. Cash-and-carry warehouse pricing (Sam's Club, Costco Business, RestaurantDepot) + structured planogram + supplier negotiation produces 50-55%.", audience: "Operators" },
      { question: "How long does it take to reach profitability?", answer: "Varies by capital + sales velocity + portfolio mix. Solo owner-operator typically 12-24 months at 8-15 machines with mid-traffic placements. Owner + 1 driver 24-36 months at 25-40 machines. Multi-route operator 5-10 years to 150-300 machines. Modern operator capability shortens timeline.", audience: "Operators" },
      { question: "Should I focus on machine count or margin?", answer: "Margin. Operators that chase machine count fill fleet with low-traffic underperformers + extend profitability timeline. 15 machines at $800 average outperforms 30 machines at $400 average. Quarterly portfolio review tracks net contribution per machine + churn rate. Margin discipline drives profitability.", audience: "Multi-Unit Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator economics benchmarks", url: "https://www.namanow.org/", note: "Industry trade association covering operator economics and profitability benchmarks" },
      { label: "IFA — International Franchise Association", url: "https://www.franchise.org/", note: "Industry trade association covering vending franchise economics" },
      { label: "Vending Market Watch — operator P&L coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering operator profitability and fleet economics" },
      { label: "Vending Times — operator practice + profitability benchmarks", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator economics across fleet sizes" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry economics", url: "https://www.cantaloupe.com/", note: "Modern operator telemetry platforms with per-machine subscription economics" },
    ],
  }),
  relatedGuides({
    heading: "Related vending profitability guides",
    items: [
      { eyebrow: "Sister guide", title: "Cost of vending franchise", description: "Vending franchise startup cost, fee structure, and per-machine economics.", href: "/vending-business-startup/cost-of-vending-franchise" },
      { eyebrow: "Operations", title: "How to evaluate a vending location", description: "Nine-step location evaluation methodology with NPV-based decision criteria.", href: "/vending-machine-locators/how-to-evaluate-a-vending-location" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Lead generation, evaluation, approach, proposal, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
