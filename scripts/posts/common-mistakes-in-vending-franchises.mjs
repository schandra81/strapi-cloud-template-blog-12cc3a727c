import { seedPost, tldr, statStrip, costBreakdown, specList, tipCards, decisionTree, inlineCta, caseStudy, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("common-mistakes-in-vending-franchises", [
  tldr({
    heading: "What are the most expensive mistakes new vending franchisees make?",
    paragraph:
      "Four mistakes account for the majority of vending-franchise failures, and all are avoidable with disciplined diligence. (1) Treating the franchise fee as the total cost — the fee is only 20-40% of the FDD Item 7 investment range; equipment, inventory, training travel, and working capital make up the rest. (2) Skipping current-franchisee calls — the FDD's marketing language tells you nothing; talking to 5+ franchisees across multiple tenure years tells you everything. (3) Skipping franchise attorney review — a $500-1,500 specialist review catches the territory, transfer, and termination clauses that determine whether you can exit profitably. (4) Treating account development as a startup activity instead of continuous work — franchisees who stop prospecting after the initial placement stagnate at small-route economics. None of this guarantees success; all of it prevents the predictable failures.",
    bullets: [
      { emphasis: "Plan against FDD Item 7 high-end + 20%:", text: "Franchise fee is 20-40% of total investment. Cash starvation kills more franchisees than poor performance does." },
      { emphasis: "Talk to 5+ current franchisees:", text: "Top performers, middle performers, and exited franchisees if findable. Item 20 of the FDD lists current franchisees by name." },
      { emphasis: "Pay the $500-1,500 for franchise attorney review:", text: "Highest-ROI diligence dollar in the entire purchase process. Catches the clauses that determine your exit value." },
    ],
  }),
  statStrip({
    heading: "The cost of skipping diligence",
    stats: [
      { number: "20-40%", label: "of total investment", sub: "is the franchise fee alone", accent: "blue" },
      { number: "+20%", label: "buffer to plan around", sub: "on top of FDD high-end estimate", accent: "orange" },
      { number: "5+", label: "current-franchisee calls", sub: "minimum diligence threshold", accent: "orange" },
      { number: "$500-1,500", label: "franchise attorney review", sub: "highest-ROI diligence dollar", accent: "blue" },
    ],
  }),
  costBreakdown({
    heading: "FDD Item 7 — what's actually in the investment range",
    sub: "Most prospective franchisees see the franchise-fee headline and miss the other 60-80% of the total cost. Representative breakdown for a mid-tier vending franchise.",
    items: [
      { label: "Franchise fee (one-time)", range: "$15,000–35,000", amount: "$25,000" },
      { label: "Initial equipment (10-15 machines, used or new)", range: "$25,000–90,000", amount: "$55,000" },
      { label: "Initial inventory (first 3 months)", range: "$5,000–12,000", amount: "$8,500" },
      { label: "Training travel + lodging (mandatory franchisor-led)", range: "$2,500–6,000", amount: "$4,000" },
      { label: "Service vehicle (used cargo van or box truck)", range: "$12,000–35,000", amount: "$22,000" },
      { label: "Insurance + permits + LLC setup (year 1)", range: "$2,500–6,000", amount: "$4,000" },
      { label: "Working capital reserve (3-6 months opex)", range: "$15,000–35,000", amount: "$25,000" },
      { label: "Marketing + technology fees (year 1)", range: "$3,000–8,000", amount: "$5,500" },
    ],
    totalLabel: "Year-one all-in (mid-tier franchise)",
    totalAmount: "$149,000",
  }),
  specList({
    heading: "Current-franchisee diligence — questions that surface real performance",
    items: [
      { label: "How long did it take to reach break-even?", value: "FDD Item 19 doesn't break this down by tenure. Ask directly. Months 1-12 vs months 12-24 matters — most franchises break even in months 18-30; faster is unusual and worth understanding." },
      { label: "What was your real first-year revenue vs the FDD Item 19 projection?", value: "Item 19 reflects mature operations. First-year revenue is usually 30-60% of mature-account revenue. Validate the ramp-up curve, not the steady-state number." },
      { label: "How much of your time is spent prospecting new accounts?", value: "Franchisees who stop prospecting stagnate. Active franchisees spend 8-15 hours/week on account acquisition. If a peer says they don't prospect anymore, ask what their route revenue looks like over the last 3 years." },
      { label: "Have you had issues with the franchisor on territory disputes?", value: "Territory rights are loosely defined in many FDDs. Ask whether the franchisor has placed competitors near them, allowed transfers that affected their accounts, or pushed boundary interpretations. Pattern data here matters a lot." },
      { label: "What surprised you most about the financials?", value: "Open-ended. Common surprises: commission rate caps, manufacturer-required minimum equipment purchases, telemetry fees, mandatory marketing-fund contributions, royalty payment quirks. Each franchisee surfaces one or two." },
      { label: "If you sold today, what would you get?", value: "Reveals the franchise's exit math. Multiple of EBITDA? Discount because of franchise restrictions? Difficulty finding buyers? Strong franchises have liquid secondary markets; weak ones don't." },
      { label: "Have you used the franchisor's support team in the last 6 months?", value: "Support quality at month 36 reveals more than support quality at month 3. Franchisors front-load support during onboarding; mature franchisees know whether that continues." },
      { label: "If you could go back, would you buy this franchise again?", value: "The single most informative question. Phrasing should be neutral. Strong franchises get a majority 'yes'; weak ones don't. Probe disagreements." },
    ],
  }),
  tipCards({
    heading: "Four mistakes that compound across the franchise term",
    sub: "Each one looks minor at purchase. Each one matters more at year 3, 5, and at exit.",
    items: [
      { title: "Picking a territory size based on optimism", body: "Bigger territory = more potential but also more required investment and management complexity. Picking too small caps your upside; picking too large strands capital and creates servicing gaps. Match territory size to your honest 18-month operational capacity, not your 5-year ambition." },
      { title: "Treating Item 19 as a forecast", body: "Item 19 (financial performance representations) reflects franchisor-curated data — usually averages or medians of mature franchisees, with selection bias toward success. Treat it as a ceiling, not a forecast. Build your business plan around 50-70% of Item 19 mature-account revenue for years 1-2." },
      { title: "Not planning for the operator-to-manager transition", body: "Up to ~100 machines, you can run the route yourself. Past 100, you need to hire service techs, and the management challenge changes entirely. Most franchisees who plan to scale past 100 don't plan the transition — they hit the constraint and stall for 6-18 months while figuring it out." },
      { title: "Stopping account acquisition after initial placement", body: "Account development is continuous work. Successful franchisees spend 8-15 hours/week prospecting through the entire term. Franchisees who treat it as a startup activity stagnate. Lost accounts (typical 5-10% annual churn) are replaced only by ongoing prospecting." },
    ],
  }),
  decisionTree({
    heading: "Should you buy a vending franchise or start independently?",
    question: "Do you have prior business-operations experience AND access to the capital you'd need either way?",
    yesBranch: {
      title: "Strongly consider going independent.",
      description: "Vending is not a complex industry. With operations experience and capital, you can replicate what a franchise provides (training, supplier relationships, systems) at lower cost — and keep the equity value of the business you build. Franchise royalties (4-8% of gross) compound to material money over a 10-year horizon.",
      finalTone: "go",
      finalLabel: "INDEPENDENT · KEEP ROYALTY DOLLARS",
    },
    noBranch: {
      title: "Franchise can make sense — diligence carefully.",
      description: "If you're new to operations and want a proven playbook, training, and ongoing support, the franchise structure has real value. The trade-off (royalties) buys risk reduction. Choose a franchise with strong current-franchisee satisfaction and clear-territory protections; avoid franchisors with high turnover or weak FDD Item 19 data.",
      finalTone: "stop",
      finalLabel: "FRANCHISE · DILIGENCE FIRST",
    },
  }),
  caseStudy({
    tag: "Real story · Atlanta franchisee, year 4",
    title: "Capital starvation at month 9 → recovered through SBA bridge → on track at year 4",
    context: "An Atlanta franchisee bought a mid-tier vending franchise on $95K of personal capital, planning to invest the franchise fee + first-machine purchases and grow into the working capital later. Ran out of operating cash at month 9 (insurance renewal + a route-van repair landed in the same month) and nearly defaulted. SBA bridge loan ($45K, 7-year term) covered the gap; route stabilized at month 14 and now operates 4 service techs across 180 machines.",
    meta: [
      { label: "Personal capital at start", value: "$95,000" },
      { label: "Actual year-one all-in", value: "$148,000 (Item 7 high end)" },
      { label: "Capital starvation point", value: "Month 9" },
      { label: "Bridge needed", value: "$45,000 SBA loan" },
    ],
    results: [
      { number: "$95K → $148K", label: "actual investment vs initial plan" },
      { number: "180", label: "machines at year 4" },
      { number: "+20%", label: "buffer rule learned the hard way" },
    ],
  }),
  inlineCta({
    text: "Want the vending franchise diligence packet (Item 19 audit template + current-franchisee call script + attorney-review checklist)?",
    buttonLabel: "Get the franchise diligence packet",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has advised independent and franchise vending operators for twelve years and reviewed FDD documents across major and mid-tier vending franchise systems. The diligence framework here is the one he uses with prospective franchisee clients before they sign.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Are vending franchises profitable?", answer: "They can be. Mature franchisees in healthy systems clear $80K-220K in owner-comp at 100-200 machines. The variance is large — bottom-quartile franchisees clear <$40K or operate at a loss. Profitability depends primarily on territory quality and continuous account-acquisition discipline, not on the franchise brand itself.", audience: "Prospective Franchisees" },
      { question: "What's a fair royalty rate for vending?", answer: "4-8% of gross sales is the industry range. Above 8% is hard to make pencil at small-route economics. Below 4% suggests the franchisor is providing limited ongoing value (which may be fine if you have operations experience). Always compare royalty rates against what services the franchisor actually provides — supplier discounts, lead generation, ongoing training all have measurable value.", audience: "Prospective Franchisees" },
      { question: "How do I find current franchisees to talk to?", answer: "Item 20 of the FDD lists all current franchisees by name, location, and contact info (in most cases). The franchisor must provide this. Cold-call them or email — most are willing to talk for 20-30 minutes. Aim for 5+ conversations spanning tenure (1 year, 3 year, 5+ year franchisees) and performance (top, middle, bottom). Avoid only talking to franchisees the franchisor introduces.", audience: "Prospective Franchisees" },
      { question: "What's an FDD and where do I get it?", answer: "Franchise Disclosure Document — a federally-required document the franchisor must provide before you sign. 23 Items covering everything from franchise history (Item 1) to financial performance representations (Item 19) to the franchise agreement itself. Read every Item. Pay particular attention to Items 6 (fees), 7 (initial investment), 19 (financial performance), and 20 (franchisee list). The franchisor must provide it on request.", audience: "Prospective Franchisees" },
      { question: "How long should I take before signing?", answer: "Federal law requires a 14-day disclosure period before signing. Use the full period and beyond. Most prospective franchisees rush; the best take 4-12 weeks for full diligence including attorney review, financial review, and current-franchisee calls. Franchisors that pressure you to sign faster are signaling something.", audience: "Prospective Franchisees" },
      { question: "Can I exit a franchise if it isn't working?", answer: "Yes but it's expensive. Termination by you typically forfeits the franchise fee and triggers post-term non-compete clauses. Transfer to another buyer requires franchisor approval and often a transfer fee (5-15% of sale price). Read the transfer and termination provisions before signing — the cost of exit determines your real downside risk.", audience: "Prospective Franchisees" },
      { question: "How big is the territory typically?", answer: "Varies widely by franchisor and franchise tier. Common structures: defined geographic territory (zip codes, counties), defined machine cap (e.g., 200 machines), or exclusive industry vertical (e.g., schools only in this county). Verify whether the territory is exclusive (no other franchisees) or non-exclusive (franchisor can place others nearby). Exclusive territories carry premium franchise fees but protect long-term value.", audience: "Prospective Franchisees" },
      { question: "What happens if the franchisor goes bankrupt?", answer: "Mixed outcomes. Franchise agreements typically convert to direct contracts with the bankruptcy estate or are sold as a group to a new franchisor. You may lose access to supplier discounts, technology platform, and brand marketing. Your territory rights may or may not survive — depends on the bankruptcy court. This is part of why current-franchisee calls matter: ask about the franchisor's financial health.", audience: "Prospective Franchisees" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FTC — Franchise Rule (16 CFR Part 436)", url: "https://www.ftc.gov/business-guidance/resources/franchise-rule-compliance-guide", note: "Federal disclosure requirements for FDD content and pre-sale process" },
      { label: "International Franchise Association — franchisee resources", url: "https://www.franchise.org/", note: "Industry guidance on franchise evaluation and Item 19 interpretation" },
      { label: "SBA — Small Business Administration franchise financing", url: "https://www.sba.gov/funding-programs/loans/types-7a-loans", note: "Reference for franchise-compatible financing structures including SBA 7(a)" },
      { label: "NAMA — vending industry economic data", url: "https://www.namanow.org/", note: "Industry benchmarks for revenue per machine and operator economics" },
      { label: "Franchise Times / Entrepreneur — vending franchise rankings", url: "https://www.entrepreneur.com/franchises/categories/vending-franchises", note: "Comparative data across major vending franchise systems" },
    ],
  }),
  relatedGuides({
    heading: "Related franchise and startup guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending franchise royalty fees", description: "How royalty math actually works — percent of gross vs flat fee, tier escalators, and the per-machine ROI implications over a 10-year hold.", href: "/vending-franchises/vending-franchise-royalty-fees" },
      { eyebrow: "Independent path", title: "How to buy your first vending machine", description: "The 30-day buyer playbook for going independent — sourcing, inspection, delivery, and the post-install tune-up.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Hub", title: "All vending franchise guides", description: "Royalty structures, training, support, common mistakes, and the diligence framework that separates working franchises from cash drains.", href: "/vending-franchises" },
    ],
  }),
]);
process.exit(0);
