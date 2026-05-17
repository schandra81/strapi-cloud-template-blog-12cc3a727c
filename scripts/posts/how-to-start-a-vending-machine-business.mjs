import { seedPost, tldr, statStrip, timeline, costBreakdown, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-start-a-vending-machine-business", [
  tldr({
    heading: "How do you actually start a vending machine business — what's the realistic launch sequence?",
    paragraph:
      "Starting a vending machine business runs across eight operational fronts executed in parallel during months 1-6: (1) business formation (LLC + EIN + sales-tax registration in each state of operation + business bank account + accounting software), (2) licensing and compliance (state vending operator license where required, local business license, health permit for perishable food, commercial general liability + product liability + auto + workers comp insurance), (3) capital deployment ($50K-$180K for credible 5-12 machine starter fleet covering equipment + telemetry + cashless payment + van + initial inventory + working capital), (4) equipment procurement (5-12 starter machines from Crane, USI/Wittern, AMS, Royal new or Betson, Vending.com, Selectivend refurbished, with cellular telemetry modems and card readers), (5) sourcing relationships (wholesaler accounts at Vistar, Eby-Brown, Core-Mark plus DSD relationships with Pepsi, Coca-Cola, Frito-Lay where market access supports, specialty SKU sourcing for healthy and dietary variants), (6) sales pipeline development (anchor account identification during months 1-3, LOI to commission cycle 60-180 days at structured accounts, proposal collateral including sample monthly statement and equipment specification), (7) first installs (2-3 hour install per machine including site verification + electrical hookup + cellular telemetry activation + planogram load + card reader activation + dispute portal setup), (8) operating rhythm (restock cadence 1-2× per week telemetry-driven, service SLA 24-48 hours at structured accounts, monthly account reporting). Path to first install runs 4-7 months from formation; cash-flow positive 6-12 months from first install; profitability 12-24 months from formation. Don't start without anchor account pipeline, credible starter fleet capital, and modern operator capability (telemetry, dashboard, cashless, monthly reporting).",
    bullets: [
      { emphasis: "Eight operational fronts executed in parallel during months 1-6:", text: "Formation + licensing + capital + equipment + sourcing + sales pipeline + first installs + operating rhythm. Sequential execution extends launch timeline by 3-6 months." },
      { emphasis: "Capital scope $50K-$180K for credible 5-12 machine starter:", text: "Hobby tier $4K-$35K viable for small placements but limits ceiling. Credible operator threshold supports commission account positioning at structured accounts." },
      { emphasis: "Anchor account during months 1-3 enables first install at months 5-7:", text: "Highest-leverage pre-launch activity. Without anchor account, 12-18 month cash-flow gap develops and capital deployment stalls." },
    ],
  }),
  statStrip({
    heading: "Vending business launch benchmarks",
    stats: [
      { number: "$50-180K", label: "credible starter capital", sub: "5-12 machine fleet", accent: "orange" },
      { number: "4-7 mo", label: "to first install", sub: "from formation", accent: "blue" },
      { number: "6-12 mo", label: "to cash-flow positive", sub: "from first install", accent: "blue" },
      { number: "12-24 mo", label: "to profitability", sub: "from formation", accent: "blue" },
    ],
  }),
  costBreakdown({
    heading: "Starter capital scope (5-12 machine fleet)",
    sub: "Realistic capital scope for credible operator entry. Numbers reflect 2026 pricing; verify with vendors at proposal.",
    items: [
      { label: "5-12 vending machines (snack + beverage + combo mix)", amount: "$25K-$90K", note: "$4K-$15K per machine; new and quality refurbished mix" },
      { label: "Cashless payment hardware + cellular telemetry", amount: "$3K-$10K", note: "$400-$700 card reader + $200-$450 modem per machine" },
      { label: "Initial inventory (snacks + beverages + specialty)", amount: "$3K-$10K", note: "5-12 machines × $400-$1,000 first stock" },
      { label: "Cargo van or truck", amount: "$15K-$45K", note: "Used cargo van $15K-$30K; new $35K-$45K" },
      { label: "Back-office software + dashboard", amount: "$1K-$4K", note: "Cantaloupe Seed / Nayax / Parlevel; first-year platform fee" },
      { label: "LLC + licensing + insurance", amount: "$1K-$3K", note: "LLC formation + state vending license + commercial insurance first year" },
      { label: "Sales pipeline + marketing", amount: "$1K-$6K", note: "Website + LOI template + proposal collateral + outreach" },
      { label: "Working capital (3 months operating)", amount: "$5K-$15K", note: "Fuel + restock + payroll + dispute refunds + contingency" },
      { label: "Tools + parts inventory + spares", amount: "$500-$1,500", note: "Hand truck + tool kit + service spares + cleaning supplies" },
    ],
    totalLabel: "Total credible operator entry capital scope",
    totalAmount: "$50K-$180K",
  }),
  timeline({
    heading: "6-month launch sequence",
    sub: "Realistic launch sequence with parallel track execution. Total elapsed: ~6 months from formation to first install + operating rhythm.",
    howToName: "How to start a vending machine business",
    totalTime: "P6M",
    steps: [
      { label: "MONTH 1", title: "Business formation + EIN + bank + accounting + sales-tax", description: "File LLC with state Secretary of State ($50-$500 filing fee). Apply for EIN through IRS online (free, 5-10 minutes). Open business bank account; route all vending revenue and expense through business account. Apply for business credit card. Set up accounting software (QuickBooks, Wave, Xero). Begin sales-tax registration in each state of operation through state Department of Revenue (free). Verify state annual report requirement." },
      { label: "MONTH 1-2", title: "Licensing + insurance + anchor account identification", description: "Apply for state vending operator license where required (CA, FL, IL, NY, OH, PA, MD, NJ, MA among states with explicit licensing). Apply for local business license. Apply for health department permit if vending perishable food. Bind commercial general liability + product liability + auto + workers comp insurance ($1K-$3K first year). In parallel: identify 5-10 anchor account targets and begin outreach. Anchor account development is highest-leverage parallel activity." },
      { label: "MONTH 2-3", title: "Equipment + telemetry + payment hardware + sourcing", description: "Procure 5-12 starter machines from Crane / USI/Wittern / AMS / Royal (new $8K-$15K, full warranty) or Betson / Vending.com / Selectivend (refurbished $4K-$8K, 6-12 month warranty). Install card readers (Cantaloupe ePort, Nayax Onyx, 365 ADM). Install cellular telemetry modems. Open wholesaler accounts at Vistar / Eby-Brown / Core-Mark. Establish DSD relationships with Pepsi, Coca-Cola, Frito-Lay where market access supports. Procure cargo van." },
      { label: "MONTH 3-5", title: "Sales pipeline conversion + first install preparation", description: "Convert anchor account from LOI to commission agreement. Sample monthly statement + equipment specification + certificate of insurance at proposal. LOI to commission cycle 60-180 days at structured accounts. Prepare first install: site walkthrough, electrical verification, cellular signal verification, planogram design based on workforce demographic. Schedule first install at month 5-7." },
      { label: "MONTH 5-7", title: "First install + planogram + payment + telemetry activation", description: "First install: 2-3 hour per machine including site verification + electrical hookup + cellular telemetry activation + planogram load + card reader activation + dispute portal setup. Initial planogram based on audience profile and dietary preferences. Activate cashless payment in advance of first sale. Verify telemetry data flow + dashboard reporting + first transaction reconciliation. Document for account file." },
      { label: "MONTH 6-9", title: "Operating rhythm + telemetry-driven planogram refinement", description: "Establish operating rhythm: restock cadence (1-2× per week telemetry-driven), service SLA (24-48 hr at structured accounts), monthly account reporting on healthy-share + dietary-tagged transaction share + stockout incidence. Telemetry-driven planogram refinement after 4-6 weeks of sell-through data. Sales pipeline expansion: 2-4 additional accounts in development. Cash-flow positive trajectory begins at months 6-9." },
    ],
  }),
  specList({
    heading: "Operational front detail",
    items: [
      { label: "Front 1 — Business formation", value: "LLC or S-Corp filed with state Secretary of State. EIN from IRS (free). Sales-tax registration in each state of operation. Business bank account at formation. Business credit card. Accounting software (QuickBooks, Wave, Xero). Annual report filing where required. Foundation for all other fronts." },
      { label: "Front 2 — Licensing and compliance", value: "State vending operator license where required (CA, FL, IL, NY, OH, PA, MD, NJ, MA among states with explicit licensing). Local business license at city or county. Health department permit for perishable food. Commercial general liability + product liability + commercial auto + workers comp insurance. K-12 / federal / healthcare specialty layers where applicable." },
      { label: "Front 3 — Capital deployment", value: "$50K-$180K credible operator entry covering equipment ($25K-$90K), cashless payment hardware + cellular telemetry ($3K-$10K), initial inventory ($3K-$10K), cargo van ($15K-$45K), back-office software ($1K-$4K), LLC + licensing + insurance ($1K-$3K), sales pipeline ($1K-$6K), working capital ($5K-$15K), tools + parts ($500-$1,500). Hobby tier ($4K-$35K) viable for small placements; doesn't support credible operator positioning." },
      { label: "Front 4 — Equipment procurement", value: "5-12 starter machines: new $8K-$15K from Crane / USI/Wittern / AMS / Royal (full warranty, latest payment tech, longest lifespan); quality refurbished $4K-$8K from Betson / Vending.com / Selectivend (6-12 month warranty, payment retrofit). Cellular telemetry modems and card readers per machine ($400-$700 card reader + $200-$450 modem). Hand truck + tool kit + service spares + cleaning supplies." },
      { label: "Front 5 — Sourcing relationships", value: "Wholesaler accounts at Vistar (largest, national), Eby-Brown (national), Core-Mark (national). Account opening 3-7 business days; credit application required. DSD relationships with Pepsi, Coca-Cola, Frito-Lay where market access supports. Specialty SKU sourcing for healthy / dietary / allergen variants (RXBar, KIND, Skinny Pop, Bare, Hippeas, Chomps). Refrigerated tier if fresh food line." },
      { label: "Front 6 — Sales pipeline development", value: "Identify 5-10 anchor account targets during months 1-3. Outreach to property managers, HR teams, facility offices, healthcare administrators. LOI to commission cycle 60-180 days at structured accounts. Proposal collateral: LOI template, sample monthly statement, planogram visual, equipment specification, certificate of insurance. Differentiate on telemetry + dashboard + cashless + dietary tagging + monthly reporting." },
      { label: "Front 7 — First install execution", value: "2-3 hour install per machine: site verification (placement space + electrical + cellular signal + maneuvering area), electrical hookup, cellular telemetry activation, planogram load (40-60 selections per snack machine), card reader activation + dispute portal setup, test transaction verification. Initial planogram based on audience profile. Verify telemetry data flow and first transaction reconciliation before leaving site." },
      { label: "Front 8 — Operating rhythm", value: "Restock cadence 1-2× per week telemetry-driven (after 4-6 weeks of sell-through data settles cadence). Service SLA 24-48 hr at structured accounts; 12-24 hr at critical placements. Monthly account reporting on healthy-share trend + dietary-tagged transaction share + top SKUs by sell-through + stockout incidence + service SLA performance. Quarterly review with placement contact. Annual planogram refresh." },
      { label: "K-12 / federal / healthcare specialty layers", value: "K-12 placements require state vendor registration + background check on operator and route tech + USDA Smart Snacks compliance. Federal sites require GSA Schedule or alternative federal contracting registration. Healthcare placements may require facility-level vendor credentialing through Symplr / Vendormate / ReadyOn. Specialized operator positioning; specialty layers extend launch timeline 4-12 weeks." },
      { label: "Financial controls + reporting", value: "Monthly reconciliation between telemetry sales data + bank deposits + sales-tax remittance. Quarterly review with CPA. Document operator margins per account; build refresh budget per machine (10-15% of revenue typical). Sales-tax remittance per state schedule. Annual report filing where required. Year-end tax filing with separate business return." },
    ],
  }),
  decisionTree({
    heading: "Ready to start a vending business?",
    question: "Do you have $50K-$180K capital + comfort with physical operating work + plan to develop modern operator capability (telemetry, dashboard, cashless, monthly reporting) + anchor account pipeline during months 1-3 of formation?",
    yesBranch: {
      title: "Ready for credible operator entry",
      description: "Capital, operating comfort, capability development plan, and anchor account pipeline align for credible operator entry. 5-12 machine starter fleet with telemetry + dashboard + cashless payment + monthly reporting. Path to first install 4-7 months from formation; cash-flow positive 6-12 months from first install; profitability 12-24 months from formation. Differentiate at structured accounts on operator capability.",
      finalTone: "go",
      finalLabel: "Launch credible entry",
    },
    noBranch: {
      title: "Develop missing pieces before credible launch",
      description: "Capital gap or capability gap or pipeline gap creates launch failure risk. Develop missing pieces before launch: capital reserve via savings or investor partner; capability via vendor selection (telemetry platform, payment hardware); pipeline via anchor account development during pre-formation period; physical capacity via owner-operator assessment or route tech hire. Consider hobby tier ($4K-$35K, 1-3 machines) as testbed before credible entry.",
      finalTone: "stop",
      finalLabel: "Develop capabilities first",
    },
  }),
  tipCards({
    heading: "Five startup mistakes",
    sub: "Each documented in operator post-launch reviews. All preventable with disciplined parallel execution.",
    items: [
      { title: "Sequential rather than parallel track execution", body: "Operators who complete tracks sequentially (formation, then equipment, then sourcing, then sales) extend launch timeline by 3-6 months. Eight fronts must run in parallel during months 1-6. Highest-leverage parallel activity: sales pipeline development during formation (months 1-3) enables first install at months 5-7." },
      { title: "Deferring sales pipeline to post-formation", body: "Most common cause of stalled launches. Founders complete equipment procurement and licensing then begin sales — first install runs to months 9-12, cash-flow gap extends to months 15-18, capital deployment stalls. Begin anchor account development at month 1 alongside formation; identify 5-10 targets; build proposal collateral by month 2." },
      { title: "Under-capitalized starter fleet", body: "1-3 machine fleet doesn't support credible operator positioning at structured accounts. Customers expect 5+ machine fleet + telemetry + dashboard + monthly reporting + insurance. Plan capital scope for credible operator entry ($50K-$180K, 5-12 machines) before pursuing commission accounts. Hobby tier viable for small placements but limits ceiling." },
      { title: "Skipping telemetry and cashless at startup", body: "Cashless transactions run 65-85% of vending revenue at modern accounts. Telemetry drives restock prioritization and dashboard reporting. Skipping either limits operator to legacy small-account positioning and forecloses structured-account opportunity. Budget card readers + cellular modems + platform fee into capital scope from formation." },
      { title: "No working capital reserve", body: "3 months operating reserve ($5K-$15K) is the most understated startup line. First 6-9 months pre-cash-flow at new fleet; without reserve operators stall capability development and miss anchor-account opportunity. Build into capital scope at formation; don't deploy all capital to equipment + van." },
    ],
  }),
  inlineCta({
    text: "Want the launch playbook with parallel track execution and anchor account development?",
    buttonLabel: "Get the launch playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending startup founders on launch sequence — eight operational fronts in parallel execution, capital scope sizing across hobby and credible operator tiers, equipment and telemetry specification, sourcing relationship development, anchor account acquisition strategy, and operating rhythm setup. The framework reflects 2026 vendor pricing and operator-side data from current vending business launches.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do I start a vending machine business?", answer: "Eight operational fronts in parallel during months 1-6: (1) business formation — LLC, EIN, bank, accounting; (2) licensing — state vending license, local business license, health permit, insurance; (3) capital deployment — $50K-$180K credible operator entry; (4) equipment — 5-12 starter machines with telemetry and cashless; (5) sourcing — Vistar / Eby-Brown / Core-Mark wholesaler accounts plus DSD; (6) sales pipeline — anchor account during months 1-3; (7) first install — months 5-7; (8) operating rhythm — restock cadence, service SLA, monthly reporting.", audience: "Founders" },
      { question: "How long does it take to start a vending business?", answer: "6 months from formation to first install with parallel execution of all eight fronts. Cash-flow positive 6-12 months from first install. Profitability 12-24 months from formation. Sequential execution extends timeline by 3-6 months. Anchor account development during months 1-3 of formation is highest-leverage activity; enables first install at months 5-7.", audience: "Founders" },
      { question: "What's the most important thing to do first?", answer: "Three things in parallel during month 1: (1) file LLC and apply for EIN to enable business banking and tax filing; (2) begin anchor account identification — list 5-10 target accounts and start outreach; (3) bind commercial insurance and apply for sales-tax registration in each state of operation. Don't defer sales pipeline until post-formation; it's the longest-lead activity.", audience: "Founders" },
      { question: "Do I need an anchor account?", answer: "Yes for credible operator entry. Anchor account (300+ employee office, healthcare campus, school district, corporate campus) enables 3-5 placement install + reference for future sales + cash-flow stability. Development during months 1-3 of formation; LOI to commission cycle 60-180 days; first install at months 5-7. Without anchor account, 12-18 month cash-flow gap develops.", audience: "Founders" },
      { question: "How much capital do I need?", answer: "$50K-$180K for credible 5-12 machine starter fleet with telemetry, dashboard, cashless payment, insurance, and 3 months working capital. Hobby entry $4K-$10K for single refurbished machine — viable for small placements but doesn't support commission account positioning. Most successful startups target credible operator tier from formation.", audience: "Founders" },
      { question: "Can I start with one machine?", answer: "Yes at hobby tier — single refurbished snack or beverage machine at $4K-$10K plus payment hardware and initial inventory. Viable for small office, gym, salon, or apartment building placement. Limits: doesn't support credible operator positioning at structured accounts. Consider hobby tier as testbed before scaling to credible operator (5-12 machines, $50K-$180K).", audience: "Founders" },
      { question: "How do I find customers / placements?", answer: "Anchor account identification during months 1-3 of formation. Outreach to property managers, HR teams, facility offices, healthcare administrators. LOI to commission cycle 60-180 days at structured accounts. Proposal collateral: LOI template, sample monthly statement, planogram visual, equipment specification, certificate of insurance. Differentiate on operator capability — telemetry + dashboard + cashless + dietary tagging + monthly reporting.", audience: "Founders" },
      { question: "What capability differentiates at proposal?", audience: "Founders", answer: "Modern operator capability: (1) telemetry platform with per-coil sell-through monitoring + dashboard, (2) cashless payment hardware + dispute portal, (3) defined dietary criteria framework + tagging across SKUs, (4) monthly account reporting on healthy-share + dietary-tagged transaction share + service SLA performance, (5) wellness program integration where accounts use. Each differentiates operator at proposal; combined capability matters at structured accounts." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SBA — small business launch resources", url: "https://www.sba.gov/business-guide/launch-your-business/launch-your-business", note: "Federal small business administration launch guidance and checklist" },
      { label: "NAMA — vending operator startup resources", url: "https://www.namanow.org/", note: "Industry trade association covering operator startup + capability development + state-framework compliance" },
      { label: "IRS — small business and self-employed tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed", note: "Federal small business tax filing and EIN application resources" },
      { label: "Vistar Vending — wholesaler reference", url: "https://www.vistarcorp.com/", note: "Major vending-industry wholesaler covering snack + beverage SKU breadth + first-stock sourcing" },
      { label: "Cantaloupe — telemetry + payment platform", url: "https://www.cantaloupe.com/", note: "Telemetry platform + cashless payment hardware vendor for vending operators" },
    ],
  }),
  relatedGuides({
    heading: "Related startup guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending business checklist", description: "Pre-launch and post-launch checklist covering formation, licensing, equipment, sourcing, insurance, and account development.", href: "/vending-business-startup/vending-business-checklist" },
      { eyebrow: "Capital", title: "Cost to start a vending business", description: "Realistic capital scope across hobby and credible operator tiers, equipment, telemetry, and working capital.", href: "/vending-business-startup/cost-to-start-a-vending-business" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Formation, capital, licensing, equipment, sourcing, locations, and operations across vending startup topics.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
