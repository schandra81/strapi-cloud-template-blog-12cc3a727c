import { seedPost, tldr, statStrip, costBreakdown, timeline, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-to-know-before-starting-a-vending-business", [
  tldr({
    heading: "What to know before starting a vending business — capital, capability, sales pipeline, and operator differentiation",
    paragraph:
      "Before starting a vending business, prospective operators need honest understanding of six dimensions: (1) realistic starter capital scope — $50-180K for a credible 5-12 machine starter fleet including equipment, telemetry, initial inventory, truck or van, back-office software, LLC formation, insurance, and 3 months working capital; (2) operator capability differentiation — modern fleets differentiate on telemetry platform, EMV/NFC payment, restock prioritization, customer dispute portal, and service responsiveness vs legacy operators without these capabilities; (3) sales pipeline development — anchor account (300+ employee office, healthcare campus, school, corporate campus) enables first install + reference customers; LOI to commission sales cycle 60-180 days at structured accounts; (4) realistic income expectations — $400-2,000 monthly gross per combo machine; 15-30% operating margin; $60-600 monthly net per machine; full-time income at 25-40 machine portfolio; 18-36 month timeline to scale; (5) regulatory + tax compliance — LLC formation + state sales tax registration + general liability + auto insurance + state vending operator license (where required) + USDA Smart Snacks (K-12) + state-property frameworks where applicable; (6) format choice + scale path — combo machines vs micro-markets vs AI coolers; capital + capability + revenue profile differs materially across formats. Get-rich-quick course claims are not aligned with industry economics; verify projections against NAMA + State of the Industry data + operator-side benchmarks before committing capital. Don't start without (a) capital for 5+ machine credible fleet, (b) anchor account pipeline, (c) operator capability development plan, (d) regulatory compliance scope, (e) 6-9 month cash-flow runway during placement acquisition.",
    bullets: [
      { emphasis: "Six dimensions to understand before launching — capital, capability, sales, income, compliance, format:",
        text: "Each dimension matters independently. Under-capitalized fleet or missing operator capability or weak sales pipeline or unrealistic income expectations or skipped compliance creates startup failure risk. Develop all six before launch." },
      { emphasis: "Capital + capability + anchor account + 6-9 month runway required:",
        text: "$50-180K for credible 5-12 machine starter. Modern operator differentiation on telemetry + EMV/NFC + dispute portal + service responsiveness. Anchor account enables first install + reference customers. Cash-flow runway during 5-7 month placement acquisition + first install phase." },
      { emphasis: "Realistic income expectations beat course-marketing claims:",
        text: "$400-2,000 monthly gross per combo machine; $60-600 monthly net; 15-30% operating margin; 18-36 months to 25+ machine portfolio at $15-50K monthly net. Verify projections against NAMA + industry benchmarks; don't chase course-marketing claims." },
    ],
  }),
  statStrip({
    heading: "Pre-launch vending operator benchmarks",
    stats: [
      { number: "$50-180K", label: "starter capital scope", sub: "credible 5-12 machine fleet", accent: "orange" },
      { number: "6", label: "operator dimensions", sub: "capital, capability, sales, income, compliance, format", accent: "blue" },
      { number: "60-180 day", label: "structured sales cycle", sub: "LOI to first commission at qualifying accounts", accent: "blue" },
      { number: "18-36 mo", label: "timeline to scale", sub: "to 25+ machine portfolio + full-time income", accent: "orange" },
    ],
  }),
  costBreakdown({
    heading: "Starter capital scope — realistic 5-12 machine fleet",
    sub: "Realistic capital breakdown for credible 5-12 machine starter fleet with modern operator capability. 2026 pricing; verify with vendors.",
    items: [
      { label: "5-12 vending machines (mix of snack + beverage + combo)", amount: "$25-90K", note: "$4-15K per machine; mix of new and quality refurbished" },
      { label: "Telemetry platform + cellular modems", amount: "$2-6K", note: "Cantaloupe / Nayax / 365 ADM modems + first-year platform" },
      { label: "Initial inventory (snack + beverage + healthy + premium)", amount: "$3-10K", note: "5-12 machines × $400-1,000 per machine first stock" },
      { label: "Truck or cargo van (used or new)", amount: "$15-45K", note: "Used cargo van $15-30K; new $35-45K" },
      { label: "Back-office software + dashboard tagging", amount: "$1-4K", note: "First-year operator dashboard + accounting + invoicing" },
      { label: "LLC formation + licensing + insurance", amount: "$1-4K", note: "State LLC + vending operator license + general liability + auto" },
      { label: "Sales + marketing + LOI development", amount: "$1-6K", note: "Website + sales collateral + LOI pipeline development" },
      { label: "Working capital (3 months operating)", amount: "$5-15K", note: "Fuel + restock + operator pay + dispute refunds + contingency" },
    ],
    totalLabel: "Total starter capital scope",
    totalAmount: "$50-180K",
  }),
  timeline({
    heading: "Realistic vending business startup playbook",
    sub: "Realistic timeline from formation through 5-12 machine starter fleet operation and first months of cash-flow-positive operation. Total elapsed: 9-15 months to cash-flow positive.",
    howToName: "How to start a vending business",
    totalTime: "P15M",
    steps: [
      { label: "MONTH 1-2", title: "Business formation + capability development + capital readiness", description: "Form LLC in state of operation; register for sales tax in target states; obtain state vending operator license where required; obtain general liability + auto + product liability insurance; open business bank account + accept business credit card. Open wholesaler accounts (Vistar, Eby-Brown, Core-Mark) + DSD relationships (Pepsi, Coca-Cola, Frito-Lay) where market access supports. Engage vending-experienced CPA. Document capital readiness ($50-180K) + cash-flow runway." },
      { label: "MONTH 2-3", title: "Equipment procurement + telemetry + dashboard + sales materials", description: "Procure 5-12 starter machines (mix of snack + beverage + combo). New machines $8-15K from Crane, USI/Wittern, AMS; quality refurbished $4-8K from regional refurbishers. Install cellular modems (Cantaloupe, Nayax, 365 ADM) + telemetry platform subscription. Configure operator dashboard for SKU tagging + tax-rule per machine. Procure cargo van + initial inventory. Develop sales collateral + LOI templates." },
      { label: "MONTH 3-5", title: "Anchor account acquisition + LOI to commission cycle", description: "Develop sales pipeline including 1-2 anchor accounts (300+ employee office, healthcare campus, school, corporate campus). LOI to commission cycle 60-180 days at structured accounts. Differentiate on operator capability: telemetry + EMV/NFC + dispute portal + service responsiveness + monthly reporting. Anchor account enables 3-5 placement install + reference for future sales. Cash-flow runway sustained during sales cycle." },
      { label: "MONTH 5-7", title: "First installs + planogram tuning + initial restock cadence", description: "Install starter fleet across anchor account + 1-2 additional smaller accounts. 2-3 hour install per machine including site verification + electrical hookup + cellular telemetry + planogram load + customer-facing dispute portal setup. Initial planogram tuning at each account based on workforce demographic + sales pattern. Restock cadence 1-2× per week initially; telemetry-driven adjustment after 4-6 weeks of sell-through data." },
      { label: "MONTH 7-10", title: "Telemetry-driven optimization + sales pipeline expansion", description: "Telemetry platform drives per-coil sell-through monitoring + stockout incidence + restock route optimization. Operator dashboard supports monthly reporting on revenue + transaction patterns to accounts. Sales pipeline expansion: 2-4 additional accounts in pipeline; LOI to commission cycle continues. Operator differentiation on sourcing + reporting + customer experience matures. Cash-flow positive at this phase." },
      { label: "MONTH 10-15", title: "Cash-flow-positive operation + capability expansion", description: "Cash-flow positive at 6-9 months from first install (assuming structured location acquisition + anchor account stability). Capability expansion: format diversification (consider micro-market or AI cooler at qualifying placements); subsidization pricing rules; integration with workplace wellness platforms where accounts use. Path to overall business profitability 12-18 months from formation; full-time owner-operator scale (25+ machines) at 18-36 months." },
    ],
  }),
  specList({
    heading: "Operator capability differentiation requirements",
    items: [
      { label: "Telemetry platform + restock prioritization", value: "Modern operator with telemetry platform (Cantaloupe, Nayax, 365 ADM, Parlevel) surfaces per-coil sell-through, stockout incidence, restock prioritization, refrigeration alerts. Reduces stockout by 40-70% vs legacy operator without telemetry. Differentiates operator at structured account proposal." },
      { label: "EMV + NFC + mobile wallet payment", value: "Modern fleet ships with EMV chip + NFC contactless + mobile wallet (Apple Pay, Google Pay, Samsung Pay) + employee badge tap. Required at corporate accounts with cashless campus initiatives. Modern payment device $300-700 per machine retrofit if not standard. Verify capability at operator launch." },
      { label: "Customer dispute portal + 1-3 day refund cadence", value: "Customer-facing dispute portal (kiosk receipt + operator app) for refund submission; operator dashboard surfaces; refund pushed to original payment method within 1-3 business days. Modern operator capability; required at structured corporate accounts. Differentiates customer experience." },
      { label: "Service responsiveness SLA + dispatch protocol", value: "Modern operator SLA: 24-48 hours standard; 12-24 hours critical (revenue-blocking outage). Service dispatch protocol with route tech + technician coverage. Legacy operator SLA often unspecified or 5-7 day response. At critical placements (healthcare, dock office, executive floor), SLA matters materially." },
      { label: "Sourcing breadth across wholesalers + DSD + specialty", value: "Wholesaler accounts (Vistar, Eby-Brown, Core-Mark) + DSD relationships (Pepsi, Coca-Cola, Frito-Lay) + specialty brand sourcing (RXBar, KIND, Quest, Hu Kitchen, Skinny Pop) where market access supports. Sourcing breadth differentiates operator at proposal." },
      { label: "Operator dashboard + monthly reporting", value: "Operator dashboard tagging for SKU attributes (healthy, dietary, allergen, premium); monthly reporting to accounts on revenue + transaction patterns + stockout + dispute. Required at structured accounts; differentiates operator at proposal." },
      { label: "Modern pricing discipline + price refresh cadence", value: "Pricing updated quarterly or semi-annually; tracks competitor pricing; refreshes premium SKU pricing as cost-of-goods shifts. Pricing not updated for years on legacy fleets; cost-of-goods has risen substantially since 2020. Pricing discipline directly drives gross margin." },
      { label: "Modern customer experience (touch screen, dietary filtering, loyalty)", value: "Modern machines with touch screen support dietary filtering (vegan, gluten-free, dairy-free, nut-free), loyalty + rewards integration, dynamic pricing rules. Differentiates customer experience at corporate accounts. Capital premium $500-2,000 over LED-numeric base; differentiates at proposal." },
    ],
  }),
  tipCards({
    heading: "Five pre-launch realities prospective operators commonly miss",
    sub: "Each documented in industry post-launch reviews. All preventable with structured pre-launch discipline.",
    items: [
      { title: "Under-capitalized fleet fails structured account positioning", body: "1-3 machine starter doesn't support credible operator positioning at structured accounts (300+ employee office, healthcare, education, government). Customers expect 5+ machine capability + telemetry + dashboard + monthly reporting. Scale capital scope to $50-180K credible 5-12 machine starter; smaller scope fails competitive positioning." },
      { title: "Missing anchor account creates 12-18 month cash-flow gap", body: "Anchor account (300+ employee office, healthcare campus, school, corporate campus) enables 3-5 placement install + reference customers + cash-flow stability. Starting without anchor account creates 12-18 month cash-flow gap + stalls capability development. Develop anchor account pipeline during months 1-2 alongside business formation." },
      { title: "Skipping state sales tax registration creates back-tax exposure", body: "State sales tax registration required before first sale at placements within state. Operators who skip registration face back-tax + penalty + interest exposure when discovered. Register before placing first machine in each state of operation; engage vending-experienced CPA or registered agent during business formation." },
      { title: "Legacy operator positioning fails competitive accounts", body: "Operator without telemetry + EMV/NFC + dispute portal + service responsiveness loses competitive proposals to modern operators. Capability development before launch matters more than equipment brand choice. Build modern capability stack into starter fleet; don't default to legacy equipment + capabilities." },
      { title: "Course-marketing claims set unrealistic expectations", body: "Vending course claims of $5,000 monthly per machine or $200,000 first-year revenue from 5 machines are not aligned with industry economics. Realistic per-machine gross $400-2,000 monthly; net $60-600. Verify projections against NAMA + State of the Industry + operator-side benchmarks before committing capital. Honest expectations align with industry reality." },
    ],
  }),
  decisionTree({
    heading: "Are we ready to start a vending business?",
    question: "Do we have $50-180K starter capital, defined operator capability development plan (telemetry, EMV/NFC, dispute portal, service responsiveness), anchor account pipeline, vending-experienced CPA engagement, and 6-9 month cash-flow runway?",
    yesBranch: {
      title: "Ready to start — capability + capital + pipeline + compliance aligned.",
      description: "Capital, capability, pipeline, and compliance alignment supports credible 5-12 machine starter fleet launch. Operator differentiation on telemetry + EMV/NFC + dispute portal + service responsiveness + monthly reporting + sourcing breadth. Path to profitability 12-18 months from formation; cash-flow positive at 6-9 months from first install.",
      finalTone: "go",
      finalLabel: "START BUSINESS",
    },
    noBranch: {
      title: "Develop missing capabilities before starting.",
      description: "Capital gap or capability gap or pipeline gap or compliance gap creates startup failure risk. Develop missing pieces before launch: capital reserve via investor partner or operator-funded model; capability development via vendor selection + platform trial; anchor account via target-account development; compliance via vending-experienced CPA + registered agent. Revisit launch decision at readiness.",
      finalTone: "stop",
      finalLabel: "DEVELOP CAPABILITIES",
    },
  }),
  keyTakeaways({
    heading: "Pre-launch vending business takeaways",
    takeaways: [
      "Six dimensions to understand before launching — capital ($50-180K), capability (modern operator stack), sales pipeline (anchor account), income expectations (realistic), compliance (LLC + sales tax + insurance + licensing), format choice (combo vs micro-market vs AI cooler).",
      "Capital scope $50-180K for credible 5-12 machine starter fleet; smaller scope fails competitive positioning at structured accounts.",
      "Operator capability (telemetry, EMV/NFC, dispute portal, service responsiveness, monthly reporting) matters more than equipment brand choice; modern operator differentiation drives 30-70% revenue differential vs legacy operator.",
      "Anchor account development during months 1-2 alongside business formation enables 3-5 placement install + reference customers + cash-flow stability; starting without anchor account creates 12-18 month cash-flow gap.",
      "Realistic income $400-2,000 monthly gross per combo machine; $60-600 monthly net; full-time income at 25-40 machine portfolio; 18-36 month timeline to scale. Verify projections against industry benchmarks; don't chase course-marketing claims.",
    ],
  }),
  inlineCta({
    text: "Want the pre-launch vending business framework (capital + capability + sales pipeline + income expectations + compliance + format choice)?",
    buttonLabel: "Get the pre-launch framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise prospective vending operators on pre-launch decisions — capital scope sizing for credible 5-12 machine starter fleet, operator capability development across telemetry + EMV/NFC + dispute portal + service responsiveness, anchor account acquisition strategy, regulatory + tax compliance scope, realistic income expectations vs course-marketing claims, and format choice between combo machines, micro-markets, and AI coolers. The benchmarks reflect operator-side data and industry post-launch reviews.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What capital do I need to start a vending business?", answer: "$50-180K for credible 5-12 machine starter fleet including equipment ($25-90K), telemetry + cellular ($2-6K), initial inventory ($3-10K), truck or van ($15-45K), back-office software ($1-4K), LLC + licensing + insurance ($1-4K), sales + marketing ($1-6K), and 3 months working capital ($5-15K). Smaller capital scope fails competitive operator positioning at structured accounts.", audience: "Founders" },
      { question: "What operator capabilities do I need?", answer: "Telemetry platform (Cantaloupe, Nayax, 365 ADM, Parlevel), EMV + NFC + mobile wallet payment, customer dispute portal with 1-3 day refund cadence, 24-48 hour service SLA, sourcing breadth across wholesalers + DSD + specialty brands, operator dashboard + monthly reporting to accounts, modern pricing discipline. Modern operator differentiation drives 30-70% revenue differential vs legacy operator without these capabilities.", audience: "Founders" },
      { question: "How important is an anchor account?", answer: "Critical. Anchor account (300+ employee office, healthcare campus, school, corporate campus) enables 3-5 placement install + reference customers + cash-flow stability. Starting without anchor account creates 12-18 month cash-flow gap + stalls capability development. Develop anchor account pipeline during months 1-2 alongside business formation; first install at anchor at month 5-7.", audience: "Founders" },
      { question: "What's the realistic timeline?", answer: "Months 1-2: business formation + capability development. Months 2-3: equipment procurement + telemetry + sales materials. Months 3-5: anchor account acquisition (60-180 day sales cycle). Months 5-7: first installs + planogram tuning. Months 7-10: telemetry-driven optimization + pipeline expansion. Months 10-15: cash-flow positive. Path to overall profitability 12-18 months; full-time owner-operator scale at 18-36 months.", audience: "Founders" },
      { question: "What licenses and registrations do I need?", answer: "State LLC formation, state sales tax registration (in each state of operation), state vending operator license where required, general liability insurance, auto insurance, product liability insurance, business bank account, business credit card. K-12 placements require USDA Smart Snacks compliance; state-property placements may require state-framework compliance. Engage vending-experienced CPA + registered agent during business formation.", audience: "Founders" },
      { question: "Should I start with combo machines or micro-markets?", answer: "Combo machines fit most starter operators ($4-15K equipment, 20-200 daily users per placement). Micro-markets require $20-100K capital scope + 75-500+ daily traffic + 100-400 sq ft footprint; better at scaled operator level (year 2+). AI coolers at $8-25K per cooler fit premium placements (lobby corners, hotel front desks). Most operators start combo and add formats at scale.", audience: "Founders" },
      { question: "Can I do vending as a side hustle?", answer: "Yes at part-time scale (5-12 machines). $500-2,500 monthly net realistic; $3,000-10,000 monthly gross. Requires evening + weekend route + maintenance time. Operator capability gap vs full-time operator: telemetry-driven restock, sales pipeline development, customer experience capability all harder at part-time scale. Sustainable side hustle; not path to substantial income without scaling to full-time.", audience: "Founders" },
      { question: "What's the biggest pre-launch mistake?", answer: "Under-capitalizing the starter fleet. 1-3 machine starter doesn't support credible operator positioning at structured accounts. Customers expect 5+ machine capability + telemetry + dashboard + monthly reporting. Scale capital scope to $50-180K credible 5-12 machine starter; smaller scope fails competitive positioning. Second most common: missing anchor account pipeline.", audience: "Founders" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering operator startup, capability development, and pre-launch resources for prospective vending operators" },
      { label: "SBA — small business administration startup guidance", url: "https://www.sba.gov/business-guide", note: "Federal small business administration guidance on LLC formation, licensing, financing, and pre-launch business planning" },
      { label: "Cantaloupe — vending operator telemetry platform", url: "https://www.cantaloupe.com/", note: "Modern operator telemetry platform documentation for prospective vending operators evaluating capability stack" },
      { label: "Vistar Vending — wholesaler reference", url: "https://www.vistarcorp.com/", note: "Major vending-industry wholesaler covering snack + beverage + healthy SKU sourcing for new operators" },
      { label: "Automatic Merchandiser — VendingMarketWatch industry data", url: "https://www.vendingmarketwatch.com/", note: "Trade publication industry benchmarks including operator startup data, capital scope, and timeline expectations" },
    ],
  }),
  relatedGuides({
    heading: "Related vending business startup guides",
    items: [
      { eyebrow: "Sister guide", title: "How much money can you make in vending", description: "Realistic per-machine, full-time, and route-team operator income at different scale levels.", href: "/vending-business-startup/how-much-money-can-you-make-in-vending" },
      { eyebrow: "Locations", title: "How to find your first vending location", description: "Anchor account + small-account sales pipeline development, LOI process, and operator capability differentiation at proposal.", href: "/vending-business-startup/how-to-find-your-first-vending-location" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Technology, capital, locations, taxes, and operator capability across vending business startup.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
