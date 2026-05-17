import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-franchise-royalty-fees", [
  tldr({
    heading: "How do vending franchise royalty fees actually work?",
    paragraph:
      "Most vending franchisors charge 5-12% of gross revenue as a recurring royalty, paid monthly or quarterly. Some use net revenue (gross minus refunds and certain costs) as the base, which reduces the headline figure but adds definitional complexity. A few use fixed monthly fees ($500-2,500/mo) — which reward growth but burden cash flow in slow months. Hybrid structures (base fee + reduced percentage) exist in some brands. The exact structure is in FDD Item 6. The 10-year cumulative cost is where the math gets serious: 7% royalty on $300K annual revenue = $21K/yr × 10 yr = $210K. That's the question every prospective franchisee should answer: does the franchisor's ongoing value delivery — training, marketing, supplier discounts, brand equity — actually justify $210K over the term, or am I licensing a brand I could replicate?",
    bullets: [
      { emphasis: "Most common structure:", text: "5-12% of gross revenue, monthly or quarterly. Net-of-refunds basis is the variant; fixed fees rarer." },
      { emphasis: "10-year cumulative cost is the real number:", text: "7% × $300K × 10 yr = $210K. Plus marketing fund (1-3%) and tech fees. Model the full term, not year 1." },
      { emphasis: "Royalty on revenue, not profit:", text: "Thin-margin years still owe the full royalty percentage. Margin pressure compounds with poor location selection or rising COGS." },
    ],
  }),
  statStrip({
    heading: "Royalty cost benchmarks",
    stats: [
      { number: "5-12%", label: "typical royalty rate", sub: "of gross revenue", accent: "blue" },
      { number: "1-3%", label: "marketing fund", sub: "on top of royalty", accent: "orange" },
      { number: "$210K", label: "10-year cost example", sub: "7% × $300K × 10 yr", accent: "orange" },
      { number: "Monthly", label: "most common cadence", sub: "vs quarterly or annual", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Four royalty structures — the trade-offs",
    sub: "Most franchisors use one of four structures. Each rewards different operating profiles.",
    headers: ["Structure", "How it works", "Rewards", "Risk"],
    rows: [
      ["Percent of gross revenue", "Royalty = gross sales × rate (5-12%)", "Aligns franchisor + franchisee on growth", "Owed on revenue regardless of profit"],
      ["Percent of net revenue", "Royalty = (gross − refunds − defined deductions) × rate", "Lower effective rate on standard revenue", "Definitional complexity; dispute risk"],
      ["Fixed monthly fee", "$500-2,500/mo flat", "Predictable; rewards above-average growth", "Cash burden in slow months; full fee even at low revenue"],
      ["Hybrid (base + reduced %)", "Low monthly base + 2-4% on revenue", "Smooths cash flow vs pure-% model", "Higher absolute cost at modest scale"],
    ],
  }),
  costBreakdown({
    heading: "10-year cumulative royalty cost — three franchise sizes modeled",
    sub: "What 7% of gross compounds to over the full franchise term. Add 1-3% marketing fund + technology fees ($800-2,400/yr) for true all-in.",
    items: [
      { label: "Small franchise (60-80 machines, $200K/yr revenue)", range: "$14,000/yr", amount: "$140,000" },
      { label: "Mid franchise (150-180 machines, $450K/yr revenue)", range: "$31,500/yr", amount: "$315,000" },
      { label: "Large franchise (300+ machines, $900K/yr revenue)", range: "$63,000/yr", amount: "$630,000" },
      { label: "Add: marketing fund (typical 2%)", range: "+ $4-18K/yr", amount: "$40K-180K" },
      { label: "Add: technology + telemetry fees", range: "+ $800-2,400/yr", amount: "$8K-24K" },
    ],
    totalLabel: "Mid-franchise 10-year all-in",
    totalAmount: "$363,000",
  }),
  specList({
    heading: "What the royalty should be buying — service deliverables to verify",
    items: [
      { label: "Initial training program", value: "Multi-week structured training (in-person + online), territory analysis, account-acquisition coaching. Weak franchisors offer 1-2 days of orientation and call it complete." },
      { label: "Ongoing operational support", value: "Active assigned account manager who's reachable, regional ops support, structured problem-escalation. Verify with current franchisees: 'when did you last use support, and what happened?'" },
      { label: "Supplier discount program", value: "Negotiated rates with major distributors (Cantaloupe, Nayax, McLane, Vistar). Verify rates are actually below what an independent operator gets — sometimes they're not." },
      { label: "Marketing programs", value: "Lead generation, national marketing campaigns, brand-equity activities. Marketing fund (1-3% additional fee) typically funds this. Verify whether you actually get leads from it." },
      { label: "Technology platform", value: "Operator software (route management, planogram, commission reporting). Modern franchises include this; older ones charge separately ($200-600/mo). Confirm what's included." },
      { label: "Brand recognition + B2B credibility", value: "Some brands open doors with national accounts. Most vending franchises don't have meaningful brand recognition at the host level — verify in your specific markets before factoring this in." },
      { label: "Continuing education + best practices", value: "Annual conventions, regional meetings, structured continuing-ed programs. Strong franchisors invest heavily here; weak ones do little." },
      { label: "Exit-support + secondary market", value: "Help selling the franchise when you exit. Active secondary markets in mature franchises; thin or non-existent in weak ones. Affects exit value materially." },
    ],
  }),
  tipCards({
    heading: "Four royalty mistakes to avoid",
    sub: "Each one is recoverable if you catch it pre-signing. Painfully expensive if you discover it after.",
    items: [
      { title: "Ignoring the marketing fund and tech fees", body: "Headline 7% royalty becomes 10-11% all-in when you add marketing fund (2%) and tech fees (1%). Model the all-in number, not the headline. 10% on $300K = $30K/yr — that's a meaningful difference from $21K." },
      { title: "Not verifying current franchisees actually receive promised services", body: "The FDD describes the services the franchisor will provide. Current franchisees tell you whether they actually do. Major delivery gaps (promised marketing programs that don't run, lead generation that doesn't produce leads, training that's superficial) are the leading cause of franchisee dissatisfaction." },
      { title: "Underestimating the cumulative 10-year cost", body: "A 7% royalty feels modest. $210K over 10 years feels huge. Same number, different framing. Buyers who model the 10-year cost upfront make better franchise-vs-independent decisions than buyers who only see the monthly check." },
      { title: "Accepting net-revenue basis without defining the deductions", body: "Net-revenue royalty bases vary widely — some franchisors deduct only refunds, others deduct cost of goods, others deduct local marketing spend. The deduction definitions matter as much as the percentage. Pin them down in writing before signing." },
    ],
  }),
  decisionTree({
    heading: "Is this franchisor's royalty justified by what they deliver?",
    question: "After 5+ current-franchisee calls, do most franchisees say they actively use franchisor-provided services that they couldn't easily replicate independently?",
    yesBranch: {
      title: "Royalty appears justified — proceed with diligence.",
      description: "If franchisees actively use the supplier discounts, training, technology platform, lead generation, and ongoing support, the royalty is buying real value. Verify the specific services match what's promised in the FDD and that the franchisor's financial health is stable.",
      finalTone: "go",
      finalLabel: "ROYALTY · JUSTIFIED",
    },
    noBranch: {
      title: "Royalty looks like a brand tax — go independent.",
      description: "If franchisees describe the franchisor as 'collects checks but doesn't show up,' you're paying for a brand and minimal services. Vending is simple enough that an experienced operator can replicate the supplier relationships, technology, and operations independently. Skip the royalty.",
      finalTone: "stop",
      finalLabel: "BRAND TAX · GO INDEPENDENT",
    },
  }),
  inlineCta({
    text: "Want the 10-year royalty projection spreadsheet (gross/net/hybrid, with marketing fund and tech fees built in)?",
    buttonLabel: "Get the royalty projection sheet",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has reviewed FDD documents from major and mid-tier vending franchisors and modeled 10-year royalty math for over 30 prospective franchisee clients. The structure breakdowns and service-deliverable checklist here are the ones he uses during pre-signing diligence.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Are vending franchise royalties negotiable?", answer: "Rarely. Royalty rates are core to the franchisor's business model and are set system-wide for fairness across franchisees. What is sometimes negotiable: first-year reduced rates during ramp-up, multi-territory discount stacking, and waived fees on adjacent products. Don't expect to negotiate the base percentage unless you're acquiring multiple territories or buying out an exiting franchisee.", audience: "Prospective Franchisees" },
      { question: "How are royalties typically reported and paid?", answer: "Monthly: franchisor pulls revenue data from telemetry (Cantaloupe/Nayax/365) and invoices the franchisee for the royalty due. Payment via ACH within 10-15 days of invoice. Some franchisors auto-debit. Quarterly cadences exist but are less common with modern telemetry — the data supports monthly tracking trivially.", audience: "Prospective Franchisees" },
      { question: "What happens to royalties during the first year ramp-up?", answer: "Some franchisors offer reduced or deferred royalty rates during months 1-12 to ease cash flow during the slow ramp. Check FDD Item 6 — if the franchisor doesn't offer this, you should ask about it during negotiation. First-year cash flow is the most stressful period of franchise ownership; reduced royalties help materially.", audience: "Prospective Franchisees" },
      { question: "Are royalties tax-deductible?", answer: "Yes — royalties are an ordinary business expense, fully deductible against gross income. Same treatment as rent or contractor payments. Speak to your CPA on the specifics for your entity structure; vending franchise income is typically pass-through (LLC or S-corp).", audience: "Prospective Franchisees" },
      { question: "Can royalties increase over the term?", answer: "Most FDDs include a CPI-adjustment clause that lets the franchisor increase royalty rates annually with inflation. Read the clause carefully — some are capped at low single-digit annual increases, others have no cap. Uncapped CPI adjustments can compound to material cost increases over a 10-year term.", audience: "Prospective Franchisees" },
      { question: "What's a marketing fund and is it required?", answer: "An additional fee (typically 1-3% of gross revenue) the franchisor collects to fund national marketing programs. Almost always required as part of the franchise agreement. The fund is supposed to be spent on marketing that benefits franchisees collectively; legally most franchisors must report how it's spent. Verify the spend reports are real and benefit franchisees, not just franchisor-side advertising.", audience: "Prospective Franchisees" },
      { question: "What's the difference between royalty fees and franchise fees?", answer: "Franchise fee: one-time payment at signing ($15K-50K typically). Buys you the right to operate under the franchise system. Royalty fee: recurring payment (monthly or quarterly) for the life of the franchise. Pays for ongoing services. Don't confuse the two — the recurring royalty is by far the larger cumulative cost over a 10-year term.", audience: "Prospective Franchisees" },
      { question: "How do I know if I'm getting value for the royalty?", answer: "Calculate the all-in cost (royalty + marketing fund + tech fees). Itemize what the franchisor delivers. Honest self-test: would you pay separately for each delivered service at market rates? If yes (training, marketing, supplier discounts, technology total to more than the royalty cost), it's good value. If no, you're paying a brand tax.", audience: "Active Franchisees" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FTC — Franchise Rule and FDD requirements", url: "https://www.ftc.gov/business-guidance/resources/franchise-rule-compliance-guide", note: "Federal requirements for fee disclosure in Item 6" },
      { label: "International Franchise Association — royalty structure analysis", url: "https://www.franchise.org/", note: "Industry data on royalty rate distributions" },
      { label: "NAMA — vending operator economics benchmarks", url: "https://www.namanow.org/", note: "Revenue per machine + operator margin data used in royalty modeling" },
      { label: "Franchise Times — vending franchise rankings (annual)", url: "https://www.franchisetimes.com/", note: "Comparative data across vending franchise systems including royalty rates" },
      { label: "Entrepreneur Magazine — Franchise 500 rankings", url: "https://www.entrepreneur.com/franchise500/", note: "Cross-industry royalty benchmarks for context" },
    ],
  }),
  relatedGuides({
    heading: "Related franchise and economics guides",
    items: [
      { eyebrow: "Sister guide", title: "Common mistakes in vending franchises", description: "The four diligence failures that produce most franchisee dissatisfaction — and how to avoid each with disciplined pre-signing work.", href: "/vending-franchises/common-mistakes-in-vending-franchises" },
      { eyebrow: "Independent path", title: "Vending business startup costs in 2026", description: "Full P&L from machine #1 to a four-machine route — the cost benchmark for going independent instead of franchising.", href: "/vending-business-startup/vending-startup-costs-2026" },
      { eyebrow: "Hub", title: "All vending franchise guides", description: "Royalty structures, training, support, common mistakes, and the diligence framework that separates working franchises from cash drains.", href: "/vending-franchises" },
    ],
  }),
]);
process.exit(0);
