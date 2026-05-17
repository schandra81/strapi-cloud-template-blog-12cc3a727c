import { seedPost, tldr, statStrip, specList, costBreakdown, comparisonTable, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-business-taxes-and-deductions", [
  tldr({
    heading: "Vending business taxes and deductions — what operators actually file and write off",
    paragraph:
      "Vending business taxes operate on four fronts: (1) federal income tax on operator net profit (Schedule C for sole prop / LLC single-member; Form 1120-S for S-corp; Form 1065 for multi-member LLC partnership), (2) self-employment tax (15.3% on net earnings up to Social Security wage base, 2.9% Medicare above; reduced via S-corp election with reasonable salary), (3) state and local sales tax on product sold through machines (varies by state — some exempt all vending; most apply standard sales tax; some apply reduced food-tax rates; SOME exempt sales under threshold per machine), (4) payroll tax obligations if you employ route help or warehouse staff (federal withholding, FICA, FUTA, state unemployment). Deductible operator expenses fall into clear categories: cost of goods sold (45-55% of gross), commission to placement hosts (8-20%), payment processing fees (2.5-3.5%), mileage or actual vehicle costs, fuel, insurance (general liability + auto + product liability), telemetry platform subscription, mobile phone, home office (if qualifying), back-office software (QuickBooks, Xero, NetSuite), professional fees (accountant, attorney, registered agent), Section 179 or bonus depreciation on vending machines (current law supports immediate expensing of vending equipment under $1M annually). State sales tax registration is required before first sale at most placements; many operators miss this step and face back-tax + penalty exposure. S-corp election commonly saves $5,000-$25,000 annually for operators with $75K+ net profit by reducing self-employment tax exposure. Recommend CPA engagement during business formation; vending-experienced CPA differentiates value at $30-$300K+ revenue scale.",
    bullets: [
      { emphasis: "Four tax fronts — federal income, self-employment, state and local sales, payroll if employees:",
        text: "Each front requires structured compliance. State sales tax registration commonly missed during formation; back-tax + penalty exposure builds quickly. Engage vending-experienced CPA during business formation." },
      { emphasis: "Section 179 + bonus depreciation enables immediate machine expensing:",
        text: "Current federal law supports immediate full expensing of vending machines under $1M annually via Section 179. Bonus depreciation supports 40% (2026) for assets over Section 179 cap. Substantial first-year deduction; reduces taxable income materially." },
      { emphasis: "S-corp election saves $5-$25K annually for $75K+ profit operators:",
        text: "S-corp election with reasonable salary methodology reduces self-employment tax exposure. Wage portion subject to FICA; distribution portion exempt. Verify with CPA; not appropriate for under-$50K profit. Common operator structure at scale." },
    ],
  }),
  statStrip({
    heading: "Vending operator tax benchmarks",
    stats: [
      { number: "15.3%", label: "self-employment tax rate", sub: "on net earnings up to SS wage base", accent: "orange" },
      { number: "45-55%", label: "COGS deductible share", sub: "of gross revenue typical", accent: "blue" },
      { number: "$5-25K", label: "S-corp annual tax savings", sub: "for $75K+ profit operators", accent: "blue" },
      { number: "Section 179", label: "immediate machine expensing", sub: "up to $1M annually current law", accent: "blue" },
    ],
  }),
  specList({
    heading: "Federal income tax — entity structure choices",
    items: [
      { label: "Sole proprietorship + Schedule C", value: "Simplest structure for operators starting solo. Net business profit flows to personal Form 1040 via Schedule C; subject to federal income tax + 15.3% self-employment tax on net earnings up to Social Security wage base ($168,600 for 2024; indexed annually). No separate business return required. Best for first 1-2 years before income scale supports S-corp election." },
      { label: "Single-member LLC + Schedule C (disregarded entity)", value: "Provides liability protection without changing tax treatment vs sole prop. LLC formation $50-$500 state filing fee + annual maintenance. IRS treats single-member LLC as disregarded entity by default; net profit flows to personal Form 1040 via Schedule C with same SE tax exposure as sole prop. Recommended over sole prop for liability separation." },
      { label: "S-corporation election (Form 2553)", value: "Available to single-member or multi-member LLCs and to corporations. Owner pays reasonable salary subject to FICA (15.3%); residual profit distributed as non-wage distribution exempt from FICA. Saves $5-$25K annually for $75K+ profit operators. Requires reasonable compensation methodology (IRS scrutinizes if salary under industry norm). Payroll setup required." },
      { label: "Multi-member LLC + Form 1065 partnership return", value: "Two or more members + no S-corp election = partnership taxation. Files Form 1065 + issues K-1 to each partner; net profit flows to each partner's Form 1040 with SE tax exposure. Operating agreement governs profit/loss allocation. Common for operator + capital partner or operator + family-member co-investor structures." },
      { label: "C-corporation (Form 1120) — uncommon at vending scale", value: "Subject to corporate income tax (21% federal) plus dividend tax on distributions to shareholders (15-23.8% based on bracket + NIIT). Double-taxation typically inappropriate for closely-held vending operator unless raising outside investment or stockpiling earnings. Verify with CPA; uncommon at vending scale outside scaled multi-state operators." },
    ],
  }),
  costBreakdown({
    heading: "Typical vending operator deductible expenses — single-year example",
    sub: "Realistic deductible expense breakdown for a 25-machine owner-operator with $300K annual gross revenue. Numbers indicative; verify with CPA.",
    items: [
      { label: "Cost of goods sold (products purchased for resale)", amount: "$135-165K/yr", note: "45-55% of $300K gross typical; tracked per shipment + per machine" },
      { label: "Commission to placement hosts", amount: "$24-60K/yr", note: "8-20% of gross sales; paid per placement agreement methodology" },
      { label: "Payment processing fees", amount: "$7.5-10.5K/yr", note: "2.5-3.5% of gross; processor + platform fees" },
      { label: "Vehicle mileage or actual costs", amount: "$8-20K/yr", note: "IRS standard mileage rate 67¢/mi (2024) or actual fuel + maintenance + depreciation" },
      { label: "Telemetry platform subscription", amount: "$6-15K/yr", note: "$20-50/mo × 25 machines × 12 months" },
      { label: "Equipment depreciation (Section 179 immediate)", amount: "$25-90K first year", note: "Immediate expensing of new vending machines under $1M annually" },
      { label: "Insurance (general liability + auto + product liability)", amount: "$3-8K/yr", note: "Business insurance package; required at most accounts" },
      { label: "Home office (if qualifying)", amount: "$1-4K/yr", note: "Simplified $5/sq ft up to 300 sq ft = $1,500 max simplified" },
      { label: "Professional fees (CPA, attorney, registered agent)", amount: "$1.5-5K/yr", note: "CPA engagement + LLC maintenance + tax prep" },
      { label: "Back-office software + subscriptions", amount: "$0.6-3K/yr", note: "QuickBooks / Xero / NetSuite + supporting software" },
    ],
    totalLabel: "Total deductible expenses indicative",
    totalAmount: "$210-380K/yr",
  }),
  comparisonTable({
    heading: "Sole prop / single-member LLC vs S-corp election — tax comparison",
    sub: "$150K net business profit example. S-corp election commonly saves $8-$15K annually for operators at this scale. Verify with CPA for individual circumstances.",
    headers: ["Tax line", "Sole prop / SMLLC (Schedule C)", "S-corp election (W-2 + K-1)"],
    rows: [
      ["Net business profit", "$150,000", "$150,000"],
      ["Owner reasonable salary (W-2)", "N/A", "$70,000 (industry-norm)"],
      ["Owner distribution (K-1, non-wage)", "N/A", "$80,000"],
      ["Self-employment tax base", "$150,000 net profit", "$70,000 wages only"],
      ["SE tax / FICA tax (15.3%)", "$22,950", "$10,710"],
      ["Federal income tax (varies, ~22-24% bracket)", "~$28,000-32,000", "~$28,000-32,000"],
      ["Total federal tax (indicative)", "~$50,950-54,950", "~$38,710-42,710"],
      ["Annual S-corp savings (indicative)", "—", "~$12,000-12,500"],
      ["Setup + ongoing cost", "$0-200 LLC maint", "$1,000-3,000 payroll + extra tax prep"],
    ],
  }),
  specList({
    heading: "State and local sales tax considerations",
    items: [
      { label: "Sales tax applicability varies by state", value: "Most states apply standard sales tax to vending machine sales (4-9% range typical). Some states apply reduced food-tax rate (1-4%) on food vending. Some states exempt vending under threshold per machine (small-amount sale exemption). Some states exempt healthy vending or state-property vending. Verify each state you operate in." },
      { label: "Sales tax registration before first sale", value: "Most states require sales tax registration before first sale at placements within state. Registration via state Department of Revenue website. Commonly missed during business formation; back-tax + penalty + interest exposure builds quickly. Engage vending-experienced CPA or registered agent during formation." },
      { label: "Sales tax remittance — monthly or quarterly", value: "Most states require monthly or quarterly sales tax remittance with detailed reporting by jurisdiction. Operator dashboard (Cantaloupe, Nayax, 365 ADM) typically supports tax-rule per machine + remittance report generation. Modern operator capability; legacy operator handles manually with error risk." },
      { label: "Local jurisdiction taxes (city, county, special district)", value: "Many states allow local jurisdictions (city, county, special district) to add local sales tax above state base. Total combined rate can reach 9-10%+ in some jurisdictions. Operator must collect and remit per-jurisdiction in compliance with home rule. Tax-rule complexity scales with multi-jurisdiction operation." },
      { label: "Audit exposure + documentation", value: "State sales tax audit risk exists; modern operators maintain machine-level documentation (sales by SKU + tax rule + jurisdiction). Audit support includes telemetry data export, machine register receipts, tax-rule documentation. Engage CPA for audit support if state inspection initiates." },
      { label: "Exemptions — schools, government, healthcare", value: "Some jurisdictions exempt vending at schools, government property, healthcare facilities; some apply special rules to USDA Smart Snacks-compliant healthy vending. Verify per-placement exemption status; document basis in operator dashboard tax-rule per machine." },
    ],
  }),
  specList({
    heading: "Section 179, bonus depreciation, and vehicle deductions",
    items: [
      { label: "Section 179 — immediate equipment expensing", value: "Current federal law (2024-2026) supports immediate full expensing of vending machines + telemetry equipment + business vehicles under Section 179, up to $1.16M annually (2024; indexed annually). Substantial first-year deduction; reduces taxable income materially. Equipment must be placed in service during tax year." },
      { label: "Bonus depreciation — phase-down schedule", value: "Bonus depreciation supports immediate additional expensing of qualifying equipment beyond Section 179 cap. Phase-down: 80% (2023), 60% (2024), 40% (2025), 20% (2026), 0% (2027) unless extended by Congress. Combined with Section 179 enables substantial first-year expensing of fleet expansion." },
      { label: "Vehicle deductions — standard mileage vs actual", value: "Two methods: standard mileage rate (67¢/mi for 2024; indexed annually) — multiplied by business miles; OR actual costs (fuel + maintenance + insurance + depreciation) prorated by business use percentage. Operators typically choose standard mileage for simplicity; actual costs for high-fuel routes. Maintain mileage log for IRS compliance." },
      { label: "Vehicle qualifying for Section 179 — over 6,000 lb GVWR", value: "Cargo vans and trucks with GVWR over 6,000 lb qualify for full Section 179 expensing (not subject to luxury car depreciation caps). Common operator-vehicle category includes Ford Transit, Chevy Express, Ram ProMaster, Mercedes Sprinter. Substantial first-year deduction on truck or van purchase." },
      { label: "Home office deduction — simplified or actual", value: "Two methods: simplified ($5/sq ft up to 300 sq ft = $1,500 max) or actual (square footage % × home expenses including utilities, insurance, mortgage interest, depreciation). Office must be used regularly and exclusively for business. Operators with dedicated office space at home commonly qualify; verify with CPA." },
      { label: "Cellular phone + business communications", value: "Business-use percentage of cellular phone deductible. 100% business-use cellphones (dedicated business line) fully deductible. Mixed-use phones deductible at business-use percentage. Maintain documentation for IRS compliance." },
    ],
  }),
  tipCards({
    heading: "Five vending tax mistakes that cost operators money",
    sub: "Each documented in operator post-audit reviews. All preventable with structured tax discipline + vending-experienced CPA engagement.",
    items: [
      { title: "Missing state sales tax registration", body: "Sales tax registration required before first sale in most states. Operators who skip registration face back-tax + penalty + interest exposure when discovered. Register before placing first machine in each state of operation; engage vending-experienced CPA or registered agent during business formation. Modern operator dashboard supports tax-rule per machine; verify capability at operator platform selection." },
      { title: "Staying on sole prop / SMLLC past $75K profit", body: "S-corp election commonly saves $5-$25K annually for $75K+ profit operators by reducing self-employment tax exposure. Operators who stay on sole prop / SMLLC at higher profit scale leave material tax savings unrealized. Engage CPA at $75K+ profit threshold; verify S-corp readiness; file Form 2553 election." },
      { title: "Not capturing Section 179 + bonus depreciation", body: "Section 179 immediate expensing of vending machines + telemetry + vehicles under $1M annually substantially reduces taxable income. Bonus depreciation supports immediate expensing beyond Section 179 cap. Operators who depreciate equipment over 5-7 year MACRS schedule miss substantial first-year deduction. Coordinate with CPA at fleet expansion." },
      { title: "Inadequate mileage + vehicle documentation", body: "IRS requires contemporaneous mileage log for vehicle deduction (date, miles, business purpose). Operators who reconstruct from memory at tax prep risk audit adjustment + penalty. Use mileage tracking app (MileIQ, TripLog, Driversnote) or maintain spreadsheet log. Standard mileage rate vs actual cost determined at CPA review." },
      { title: "Skipping commission documentation at placements", body: "Commission to placement hosts deductible at 8-20% of gross sales. Operators who pay commission informally without documentation risk audit adjustment. Document via placement agreement + monthly commission statement + 1099-NEC issued to host if exceeding $600 annually (single-payee threshold). Verify with CPA at scale." },
    ],
  }),
  decisionTree({
    heading: "Should we form an LLC and elect S-corp, or start as sole prop?",
    question: "Do we expect net business profit above $75K within 24-36 months, with operating multiple machines or placements, and willingness to handle payroll setup for reasonable-salary methodology?",
    yesBranch: {
      title: "Form LLC + elect S-corp for tax efficiency.",
      description: "Profit scale + multi-placement operation + payroll setup willingness supports S-corp election. Annual tax savings $5-$25K from reduced self-employment tax exposure. Setup cost $1-3K for LLC formation + payroll provider setup + CPA engagement; ongoing $1-3K annually. Engage vending-experienced CPA during formation; file Form 2553 by S-corp election deadline.",
      finalTone: "go",
      finalLabel: "LLC + S-CORP",
    },
    noBranch: {
      title: "Start as sole prop or single-member LLC.",
      description: "Lower scale (under $75K profit) or part-time operator scope doesn't justify S-corp setup complexity. Sole prop or SMLLC with Schedule C handles tax reporting simply. Revisit S-corp election at $75K+ profit scale; engage CPA at that threshold. SMLLC adds liability protection without changing tax treatment vs sole prop.",
      finalTone: "stop",
      finalLabel: "SOLE PROP / SMLLC",
    },
  }),
  keyTakeaways({
    heading: "Vending business tax takeaways",
    takeaways: [
      "Four tax fronts — federal income, self-employment, state and local sales tax, payroll if employees. Each requires structured compliance.",
      "State sales tax registration required before first sale at placements in most states; commonly missed during formation; back-tax + penalty exposure builds quickly.",
      "Section 179 + bonus depreciation enables immediate expensing of vending machines + telemetry + vehicles; substantial first-year deduction at fleet expansion.",
      "S-corp election commonly saves $5-$25K annually for $75K+ profit operators via reduced self-employment tax exposure; verify with vending-experienced CPA.",
      "Engage vending-experienced CPA during business formation; differentiates value at $30-$300K+ revenue scale; covers entity structure, sales tax, depreciation, payroll setup.",
    ],
  }),
  inlineCta({
    text: "Want the vending operator tax framework (entity structure + Section 179 + S-corp election + sales tax compliance + deductible expenses)?",
    buttonLabel: "Get the operator tax framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending operators on tax structure, deductible expenses, Section 179 + bonus depreciation, S-corp election timing, and state sales tax compliance — at the framework level. Specific tax advice should come from a vending-experienced CPA engaged during business formation. The benchmarks reflect operator-side data, industry post-audit reviews, and current federal + state tax law as of 2026.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What taxes do vending operators pay?", answer: "Four fronts: (1) federal income tax on net profit (Schedule C for sole prop / SMLLC; Form 1120-S for S-corp; Form 1065 for multi-member LLC partnership), (2) self-employment tax 15.3% on net earnings up to Social Security wage base (reduced via S-corp election), (3) state and local sales tax on product sold through machines (varies by state, 4-9%+ typical), (4) payroll tax if employing route help or warehouse staff.", audience: "Founders" },
      { question: "What can I deduct as a vending operator?", answer: "Cost of goods sold (45-55% of gross), commission to hosts (8-20%), payment processing (2.5-3.5%), vehicle mileage or actual costs, fuel, insurance (general liability + auto + product liability), telemetry subscription, mobile phone, home office (if qualifying), back-office software, professional fees (CPA, attorney, registered agent), Section 179 / bonus depreciation on vending machines + telemetry + vehicles.", audience: "Founders" },
      { question: "Should I form an LLC?", answer: "Single-member LLC adds liability protection without changing tax treatment vs sole prop (disregarded entity by default; net profit flows to Schedule C with same SE tax exposure). Formation cost $50-$500 state filing fee + annual maintenance. Recommended over sole prop for liability separation. Multi-member LLC files Form 1065 partnership; verify operating agreement at formation.", audience: "Founders" },
      { question: "When should I elect S-corp?", answer: "S-corp election commonly saves $5-$25K annually for $75K+ profit operators by reducing self-employment tax exposure. Requires reasonable salary methodology (IRS scrutinizes if salary under industry norm); payroll setup required. Setup cost $1-3K + ongoing $1-3K annually. Engage vending-experienced CPA at $75K+ profit threshold; file Form 2553 election by deadline.", audience: "Founders" },
      { question: "Do I need to collect sales tax?", answer: "Yes in most states. Most states apply standard sales tax (4-9%+) to vending machine sales; some apply reduced food-tax rate; some exempt healthy vending or under-threshold sales. Sales tax registration required before first sale at placements within state. Modern operator dashboard (Cantaloupe, Nayax, 365 ADM) supports tax-rule per machine + remittance report. Verify each state.", audience: "Founders" },
      { question: "Can I use Section 179 to deduct vending machines?", answer: "Yes. Current federal law (2024-2026) supports immediate full expensing of vending machines + telemetry equipment + business vehicles under Section 179, up to $1.16M annually (2024; indexed annually). Equipment must be placed in service during tax year. Substantial first-year deduction; coordinate with CPA at fleet expansion.", audience: "Founders" },
      { question: "What vehicle deduction methods are available?", answer: "Two methods: standard mileage rate (67¢/mi for 2024; indexed annually) — multiplied by business miles; OR actual costs (fuel + maintenance + insurance + depreciation) prorated by business use percentage. Cargo vans with GVWR over 6,000 lb qualify for full Section 179 expensing (Ford Transit, Chevy Express, Ram ProMaster, Mercedes Sprinter). Maintain contemporaneous mileage log.", audience: "Founders" },
      { question: "Do I need a CPA?", audience: "Founders", answer: "Strongly recommended at $30-$300K+ revenue scale. Vending-experienced CPA differentiates value — covers entity structure, sales tax compliance, Section 179 + bonus depreciation timing, S-corp election readiness, multi-state operation, audit support. Engage during business formation; revisit annually. Specific tax advice should come from CPA, not general framework guidance." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "IRS — Schedule C, Form 1120-S, Form 1065 instructions", url: "https://www.irs.gov/forms-instructions", note: "Federal tax form documentation for sole prop, S-corp, and partnership tax filing applicable to vending operators" },
      { label: "IRS — Section 179 and bonus depreciation guidance", url: "https://www.irs.gov/publications/p946", note: "Publication 946 covering Section 179 expensing and bonus depreciation rules applicable to vending equipment and business vehicles" },
      { label: "SBA — small business tax guidance", url: "https://www.sba.gov/business-guide/manage-your-business/pay-taxes", note: "Federal small business administration guidance on business tax structure, payroll setup, and compliance" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association tax + regulatory guidance applicable to vending operators" },
      { label: "Federation of Tax Administrators — state sales tax resources", url: "https://www.taxadmin.org/", note: "State-by-state sales tax administration reference for multi-state vending operator compliance" },
    ],
  }),
  relatedGuides({
    heading: "Related vending business startup guides",
    items: [
      { eyebrow: "Sister guide", title: "What to know before starting a vending business", description: "Capital, capability, sales pipeline, and operator differentiation requirements before launch.", href: "/vending-business-startup/what-to-know-before-starting-a-vending-business" },
      { eyebrow: "Income", title: "How much money can you make in vending", description: "Realistic per-machine, full-time, and route-team operator income at different scale levels.", href: "/vending-business-startup/how-much-money-can-you-make-in-vending" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Technology, capital, locations, taxes, and operator capability across vending business startup.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
