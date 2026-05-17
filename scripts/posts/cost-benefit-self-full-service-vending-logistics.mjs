import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("cost-benefit-self-full-service-vending-logistics", [
  tldr({
    heading: "Self-service vs full-service vending at logistics hubs — what's the cost-benefit comparison and which fits which scenario?",
    paragraph:
      "The self-service vs full-service vending decision at logistics hubs is fundamentally a make-vs-buy decision dressed up as a procurement decision. Full-service (operator-funded equipment + install + telemetry + ongoing restocking + maintenance + commission to facility) is the dominant model at modern logistics hubs because facility leadership prefers $0 capital + $0 operational overhead + commission revenue inbound. Self-service (facility-owned equipment + facility-managed restocking via internal labor + operator-provided maintenance OR pure facility-owned end-to-end) appears at large captive operations where internal labor capacity is available, where unit economics support facility absorbing margin (skipping operator commission), or where specific operational integration (badge-payroll-deduct, integrated facility software, custom planogram) drives ownership. Hybrid models (operator equipment + facility-managed restocking, or facility equipment + operator service) bridge the two. The cost-benefit framework: full-service trades commission share + slightly higher product cost for $0 capital + $0 operational overhead + operator expertise; self-service trades $8K-25K capital per machine + internal labor cost for higher margin capture + operational control. At a typical 500-worker logistics hub with a 4-machine fleet, the 5-year economic difference is often within ±$30K — meaning the decision is usually driven by strategic considerations (operational control, labor capacity, integration requirements) rather than absolute economics. This guide covers the full cost-benefit comparison, the hybrid model variations, the operational considerations, and the decision framework for facility managers + procurement + operations + finance teams at logistics-hub vending programs.",
    bullets: [
      { emphasis: "Full-service dominates modern logistics hubs:", text: "$0 capital + $0 operational overhead + commission revenue inbound. Operator funds equipment + install + telemetry + restocking + maintenance. Default at most 250+ worker hubs." },
      { emphasis: "Self-service fits specific scenarios:", text: "Large captive operations with internal labor capacity, integrated facility software, custom planogram requirements, or unit economics that support absorbing margin (skipping commission)." },
      { emphasis: "5-year economic difference often within ±$30K at typical hub:", text: "Decision usually driven by strategic considerations (operational control, labor capacity, integration) not absolute economics. Hybrid models bridge the two." },
    ],
  }),
  statStrip({
    heading: "Logistics hub vending cost-benefit benchmarks",
    stats: [
      { number: "$0", label: "capital under full-service", sub: "operator-funded model", accent: "blue" },
      { number: "$8-25K", label: "capital per machine self-service", sub: "facility-owned equipment", accent: "orange" },
      { number: "5-15%", label: "commission to facility", sub: "full-service typical range", accent: "blue" },
      { number: "±$30K", label: "5-year difference", sub: "typical 4-machine hub fleet", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Self-service vs full-service vs hybrid — logistics hub vending models",
    sub: "Five models commonly seen at logistics hubs. Each has different capital, operational, margin, and control profile.",
    headers: ["Model", "Facility capital", "Facility ops cost", "Margin capture", "Operational control"],
    rows: [
      ["Full-service (operator-funded)", { icon: "check", text: "$0" }, "$0 (operator absorbs power)", "5-15% commission of gross", "Lower (operator-managed)"],
      ["Self-service (facility-owned end-to-end)", "$8K-25K per machine", "$200-600/machine/year power + internal labor", { icon: "check", text: "100% gross (less COGS)" }, { icon: "check", text: "High (facility-managed)" }],
      ["Hybrid — operator equipment + facility restock", "$0", "Internal restocking labor (~10-20 hr/mo per machine)", "15-25% commission of gross", "Medium (facility-managed restock + operator service)"],
      ["Hybrid — facility equipment + operator service", "$8K-25K per machine", "Service fee to operator + power", "100% gross minus service fee", "Medium (facility-owned + operator service)"],
      ["Micro-market full-service", "$0-25K (sometimes contributory)", "$0 (operator absorbs)", "5-12% commission of gross", "Lower (operator-managed)"],
      ["Micro-market self-service", "$150K-400K build-out + equipment", "Internal labor + power + COGS", { icon: "check", text: "100% gross (less COGS)" }, { icon: "check", text: "High (facility-managed)" }],
    ],
  }),
  costBreakdown({
    heading: "5-year economic comparison — 4-machine vending fleet at 500-worker logistics hub",
    sub: "Side-by-side full-service vs self-service economic model. Operator-funded vs facility-owned end-to-end. Assumes $120K annual gross revenue across 4-machine fleet.",
    items: [
      { label: "Full-service: Operator-funded equipment + install (4 machines)", amount: "$0", range: "Capital paid by operator (~$60-100K equipment + install + telemetry)" },
      { label: "Full-service: Facility commission (10% of gross)", amount: "+$60,000", range: "$120K annual gross × 10% commission × 5 years" },
      { label: "Self-service: Facility-owned equipment + install (4 machines)", amount: "-$80,000", range: "$8K-25K per machine + install + telemetry hardware × 4 machines, average $20K/machine" },
      { label: "Self-service: Facility margin capture (gross - COGS - service)", amount: "+$240,000", range: "$120K annual gross × (100% - 55% COGS - 5% service fee) × 5 years = $240K" },
      { label: "Self-service: Internal labor cost (restocking)", amount: "-$96,000", range: "4 machines × 16 hr/mo × $25/hr loaded labor × 60 months" },
      { label: "Self-service: Equipment depreciation + maintenance", amount: "-$32,000", range: "$80K equipment × 40% over 5 years (depreciation + maintenance + repair)" },
      { label: "Self-service: Power + utilities", amount: "-$8,000", range: "$200-600/machine/year × 4 machines × 5 years average" },
      { label: "Full-service: Facility staff time (operator coordination)", amount: "-$3,000", range: "Facility manager ~1 hr/month × $40/hr × 60 months" },
    ],
    totalLabel: "Net 5-year economic difference",
    totalAmount: "+$21,000 self-service over full-service",
  }),
  specList({
    heading: "Self-service vs full-service decision factors",
    items: [
      { label: "Capital availability and accounting preference", value: "Full-service: $0 capital; commission revenue is operating income. Self-service: $8K-25K capital per machine; depreciation over 5-7 years on facility books; margin capture is operating income (less COGS + maintenance). Facilities preferring $0 capital + commission income choose full-service; facilities preferring asset ownership + higher margin capture choose self-service." },
      { label: "Internal labor capacity for restocking + maintenance", value: "Self-service requires 12-20 hours per machine per month for restocking + cold-chain management + payment hardware monitoring + dispute resolution + telemetry review. 4-machine fleet = 60-80 hours per month internal labor at $25-40 loaded labor rate. Without dedicated labor capacity, self-service operationally drags; full-service is typically cleaner." },
      { label: "Operational control and integration requirements", value: "Self-service offers full operational control: custom planogram, badge-payroll-deduct payment integration, facility-software integration, custom branding, specific SKU sourcing. Full-service operates within operator's standard planogram + payment + branding framework. Facilities with specific integration requirements (Fortune 500 captive operations, government facilities, specific supply-chain integration) may favor self-service." },
      { label: "Operator availability + service area coverage", value: "Some logistics-hub markets have multiple competitive industrial-experienced operators (top 25 metros + major distribution corridors); other markets have limited operator coverage. At limited-coverage markets, self-service may be the only viable option. At competitive-coverage markets, full-service is typically more economic + lower-overhead." },
      { label: "Margin capture vs operational simplicity tradeoff", value: "Self-service captures 100% gross margin (less COGS, less internal labor, less equipment depreciation, less maintenance + power). Full-service captures 5-15% commission of gross. At $120K annual gross, self-service captures ~$60K annual margin after internal labor + depreciation + power; full-service captures $12K annual commission. Margin difference offset partially by operator expertise + operational simplicity at full-service." },
      { label: "Equipment + telemetry + payment hardware ownership", value: "Self-service: facility owns equipment + telemetry + payment hardware; manages refresh + upgrade + obsolescence; chooses telemetry platform + payment processor. Full-service: operator owns; facility benefits from operator-managed refresh + upgrade. Self-service facilities can choose Cantaloupe / Nayax / Parlevel telemetry per preference; full-service inherits operator's platform." },
      { label: "Hybrid model: operator equipment + facility-managed restock", value: "Operator funds equipment + telemetry + payment hardware + maintenance; facility absorbs restocking labor. Higher commission to facility (15-25% of gross) due to facility-absorbed labor cost. Fits mid-size facilities with internal labor capacity but without capital for equipment ownership. Common at logistics hubs with on-site cafeteria operations that can absorb vending restocking." },
      { label: "Hybrid model: facility equipment + operator service", value: "Facility funds equipment ($8K-25K per machine); operator services + restocks under per-machine service fee + product COGS billing. Facility captures 100% gross less service fee + COGS; operator handles operational complexity. Fits facilities with capital availability but without internal labor for restocking + service. Less common than operator-funded hybrid." },
      { label: "Risk profile + contract flexibility", value: "Full-service: lower facility risk (operator absorbs equipment + service risk); contract typically 3-5 years; operator-buyout fees if switching mid-contract. Self-service: higher facility risk (facility absorbs equipment obsolescence + service risk); no contract lock-in; full flexibility to change operators or models. Risk preference drives some procurement decisions independent of pure economics." },
    ],
  }),
  decisionTree({
    heading: "Self-service or full-service vending at our logistics hub?",
    question: "Do we have $8K-25K capital per machine AND 12-20 hours per machine per month internal labor capacity AND specific operational integration requirements (badge-payroll-deduct, custom planogram, facility-software) AND viable margin economics at facility-managed restocking?",
    yesBranch: {
      title: "Pursue self-service or hybrid (facility equipment + operator service) vending",
      description: "Self-service captures 100% gross margin (less COGS + internal labor + depreciation + power). Higher operational complexity but full control. Hybrid (facility equipment + operator service) bridges the two. Fits large captive operations with capital + labor + integration requirements.",
      finalTone: "go",
      finalLabel: "Self-service or facility-equipment hybrid",
    },
    noBranch: {
      title: "Full-service (operator-funded) is the modern default",
      description: "$0 capital + $0 operational overhead + commission revenue inbound. Operator absorbs equipment + service + restocking + maintenance. 5-15% commission to facility. Default at most logistics hubs without specific operational integration or labor capacity requirements.",
      finalTone: "stop",
      finalLabel: "Full-service operator-funded",
    },
  }),
  tipCards({
    heading: "Six self-service vs full-service decision lessons",
    sub: "Each emerged from logistics-hub procurement post-mortems + facility-management reviews. All preventable with structured cost-benefit analysis.",
    items: [
      { title: "Don't underestimate internal labor cost at self-service", body: "Self-service restocking + cold-chain + payment + telemetry takes 12-20 hours per machine per month at $25-40 loaded labor rate. 4-machine fleet = $19K-32K annual internal labor cost. Procurement analyses that skip internal labor cost overstate self-service margin capture. Account for fully-loaded labor at decision." },
      { title: "Verify operator service area before defaulting to full-service", body: "Full-service depends on competitive industrial-experienced operator availability. At limited-coverage markets, only one operator may be available (limited negotiation leverage) or no operator may be available (self-service forced). Verify 2-3 operator availability at procurement before defaulting." },
      { title: "Account for equipment depreciation + maintenance + refresh", body: "Self-service equipment depreciates over 5-7 years; maintenance + repair add 8-15% annual operating cost; refresh cycle 7-10 years. 4-machine fleet 5-year cost: $80K-120K acquisition + $32K depreciation/maintenance. Full-service operator absorbs this entire cycle." },
      { title: "Evaluate hybrid models alongside pure self-service vs full-service", body: "Hybrid models (operator equipment + facility restock OR facility equipment + operator service) bridge the extremes. Operator equipment + facility restock fits mid-size facilities with labor capacity but no capital; facility equipment + operator service fits facilities with capital but no labor. Don't force pure choice; consider hybrids." },
      { title: "Specific integration requirements may force self-service", body: "Badge-payroll-deduct payment, facility-software integration, custom planogram, specific SKU sourcing, custom branding — these can force self-service or facility-equipment hybrid even when pure economics favor full-service. Map integration requirements at procurement; verify operator capability before committing." },
      { title: "Decision is usually strategic, not pure economic", body: "5-year economic difference often within ±$30K at typical 500-worker 4-machine logistics hub fleet — meaning $6K annual difference, well within range of strategic considerations (operational control, labor capacity, integration, risk profile, accounting preference). Don't over-engineer pure economic analysis." },
    ],
  }),
  keyTakeaways({
    heading: "Self-service vs full-service key takeaways",
    takeaways: [
      "Full-service (operator-funded) is the modern default at logistics hubs — $0 capital + $0 operational overhead + commission revenue. Fits most 250+ worker hubs.",
      "Self-service fits specific scenarios: large captive operations with internal labor capacity, integrated facility software, custom planogram requirements, or unit economics supporting margin absorption.",
      "5-year economic difference often within ±$30K at typical 500-worker 4-machine hub. Decision usually driven by strategic considerations, not absolute economics.",
      "Hybrid models (operator equipment + facility restock OR facility equipment + operator service) bridge the extremes. Don't force pure choice.",
      "Account for full internal labor cost at self-service: 12-20 hours per machine per month at $25-40 loaded labor rate. 4-machine fleet = $19K-32K annual labor.",
    ],
  }),
  inlineCta({
    text: "Want the logistics hub vending cost-benefit pack (5-year economic comparison template, hybrid model analysis, operator selection framework, integration checklist)?",
    buttonLabel: "Get the cost-benefit pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support self-service vs full-service vending decisions at logistics hubs — covering 5-year economic comparison, internal labor cost modeling, hybrid model evaluation, integration requirements analysis, operator availability mapping, and procurement decision framework. Recommendations reflect operator-side cost-benefit modeling across distribution center, sortation hub, cross-dock, and last-mile delivery station accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the difference between self-service and full-service vending?", audience: "Procurement", answer: "Full-service: operator-funded equipment + install + telemetry + restocking + maintenance + commission to facility; $0 facility capital. Self-service: facility-owned equipment + facility-managed restocking + facility-absorbed margin capture; $8K-25K per machine capital + 12-20 hours per machine per month internal labor. Hybrid models (operator equipment + facility restock OR facility equipment + operator service) bridge the two." },
      { question: "Which model dominates at modern logistics hubs?", audience: "Facility Managers", answer: "Full-service dominates at modern logistics hubs because facility leadership prefers $0 capital + $0 operational overhead + commission revenue inbound. Self-service appears at large captive operations with internal labor capacity, specific operational integration requirements, or unit economics supporting margin absorption. Default at 250+ worker hubs is full-service unless specific factors override." },
      { question: "What's the 5-year economic difference at a typical 500-worker 4-machine hub?", audience: "Finance", answer: "Often within ±$30K. Full-service: $0 capital + $60K cumulative commission - $3K coordination time = +$57K net. Self-service: -$80K capital + $240K margin capture - $96K internal labor - $32K depreciation - $8K power = +$24K net. Net difference: ~$33K favoring full-service at this scenario. Difference small relative to strategic considerations." },
      { question: "When does self-service actually make sense?", audience: "Procurement", answer: "Large captive operations (Fortune 500 distribution centers, government facilities) with internal labor capacity AND specific integration requirements (badge-payroll-deduct, facility-software integration, custom planogram). OR markets without competitive operator coverage. OR unit economics supporting margin absorption (high-volume single-facility deployments). Less common than full-service at logistics hubs." },
      { question: "What about hybrid models?", audience: "Procurement", answer: "Two common hybrids. Operator equipment + facility-managed restocking: operator funds equipment + telemetry + payment hardware + maintenance; facility absorbs restocking labor; higher commission (15-25%); fits mid-size facilities with labor capacity but no capital. Facility equipment + operator service: facility funds equipment; operator services + restocks under fee + COGS billing; fits facilities with capital but no labor. Less common than pure full-service." },
      { question: "How much internal labor does self-service actually require?", audience: "Operations", answer: "12-20 hours per machine per month: restocking (4-8 hours per cycle, weekly cadence at logistics hubs), cold-chain monitoring + alarm response, payment hardware monitoring + dispute resolution, telemetry review, equipment maintenance coordination. 4-machine fleet = 60-80 hours per month internal labor at $25-40 loaded labor rate. $19K-32K annual internal labor cost." },
      { question: "What about operator availability in our market?", audience: "Procurement", answer: "Verify 2-3 competitive industrial-experienced operators before defaulting to full-service. Top 25 metros + major distribution corridors typically have competitive coverage. Smaller markets + remote facilities may have limited coverage. At limited-coverage markets: lower negotiation leverage on commission rate, longer service response times, or no operator availability forcing self-service." },
      { question: "How do integration requirements affect the decision?", audience: "Operations", answer: "Badge-payroll-deduct payment integration, facility-software integration (HRIS, payroll, time-and-attendance), custom planogram, specific SKU sourcing, custom branding — these can force self-service or facility-equipment hybrid. Full-service operators have standard integration capability but may not support facility-specific custom integration. Map integration requirements at procurement; verify operator capability before committing to full-service." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association industry economics", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator practice + operator-funded vs facility-owned model economics" },
      { label: "Vending Times — operator economics + contract structure benchmarks", url: "https://www.vendingtimes.com/", note: "Industry publication covering vending operator economics including self-service vs full-service comparison" },
      { label: "Material Handling & Logistics — distribution center amenity economics", url: "https://www.mhlnews.com/", note: "Industry coverage of warehouse + DC + cross-dock amenity economics including vending program structure" },
      { label: "Council of Supply Chain Management Professionals (CSCMP) — operator economics research", url: "https://cscmp.org/", note: "Industry research on distribution-center + logistics-hub operator economics + facility-side cost-benefit analysis" },
      { label: "BLS — Bureau of Labor Statistics warehouse worker loaded labor rates", url: "https://www.bls.gov/iag/tgs/iag493.htm", note: "Federal labor statistics supporting internal labor cost modeling at self-service vs full-service decisions" },
    ],
  }),
  relatedGuides({
    heading: "Related logistics hub vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending for logistics hubs — capability overview", description: "Layered program design, shift coverage planning, planogram for shift workers, and SLA frameworks for logistics-hub placements.", href: "/vending-for-logistics-hubs" },
      { eyebrow: "Sister guide", title: "Case study — micro-markets at logistics hubs", description: "1,150-worker regional cross-dock facility micro-market deployment with supplemental beverage vending at remote zones.", href: "/vending-for-logistics-hubs/case-study-micro-markets-logistics" },
      { eyebrow: "Hub", title: "All logistics hub vending resources", description: "Sortation hubs, distribution centers, cross-dock, intermodal, and the operator patterns that work at every logistics placement.", href: "/vending-for-logistics-hubs" },
    ],
  }),
]);
process.exit(0);
