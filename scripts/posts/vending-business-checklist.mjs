import { seedPost, tldr, statStrip, timeline, specList, tipCards, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-business-checklist", [
  tldr({
    heading: "What's the complete checklist to launch a vending business?",
    paragraph:
      "A credible vending business launch runs across eight checklist tracks executed in parallel during months 1-6: (1) Business formation — LLC or S-Corp registered with state, EIN from IRS, sales-tax registration in each state of operation, business bank account, business credit card, accounting software (QuickBooks or equivalent). (2) Licensing and compliance — state vending operator license where required (CA, FL, IL, NY, OH, PA, MD, NJ, MA among the states with explicit licensing), local business license at city or county, health department permit for perishable food, commercial general liability + product liability + auto + workers comp insurance, USDA Smart Snacks documentation if pursuing K-12. (3) Equipment procurement — 5-12 starter machines (mix of new and refurbished, snack + beverage + combo), card readers and cashless payment hardware, cellular telemetry modems, hand truck and tool kit. (4) Telemetry and software — telemetry platform (Cantaloupe, Nayax, 365 ADM), operator dashboard configuration, dispute portal setup, route-management software. (5) Sourcing — wholesaler accounts (Vistar, Eby-Brown, Core-Mark), DSD relationships (Pepsi, Coca-Cola, Frito-Lay where market access supports), specialty SKU sourcing for healthy / dietary / allergen variants. (6) Vehicle and route — cargo van or truck, route logistics planning, fuel and maintenance budget. (7) Sales pipeline — anchor account identification, LOI template, sample monthly statement, proposal collateral, 1-2 anchor accounts targeted during months 1-3. (8) Operating rhythm — restock cadence (1-2× per week typical), service SLA (24-48 hr standard), monthly account reporting cadence. The checklist below covers all eight tracks with timing and verification steps. Path to first install runs 4-7 months from formation; cash-flow positive 6-12 months from first install.",
    bullets: [
      { emphasis: "Eight parallel tracks during months 1-6:", text: "Formation + licensing + equipment + telemetry + sourcing + vehicle + sales pipeline + operating rhythm. All executed in parallel; sequential approach extends launch timeline by 3-6 months." },
      { emphasis: "Anchor account identification during months 1-3:", text: "Sales pipeline development during business formation enables first install at months 5-7. Anchor account is highest-leverage pre-launch activity. Don't defer to post-formation." },
      { emphasis: "Compliance and insurance non-negotiable:", text: "Sales-tax registration, state vending license where required, commercial insurance required for structured-account access. Penalty exposure and contract disqualification at non-compliant operators." },
    ],
  }),
  statStrip({
    heading: "Pre-launch checklist benchmarks",
    stats: [
      { number: "8 tracks", label: "executed in parallel", sub: "months 1-6", accent: "blue" },
      { number: "4-7 mo", label: "to first install", sub: "from formation", accent: "blue" },
      { number: "5-12", label: "starter fleet target", sub: "credible operator threshold", accent: "orange" },
      { number: "1-2", label: "anchor accounts at launch", sub: "developed during months 1-3", accent: "orange" },
    ],
  }),
  timeline({
    heading: "6-month pre-launch checklist timeline",
    sub: "Realistic sequence from formation through first install. Tracks executed in parallel; calendar shows when each track reaches completion. Total elapsed: 6 months.",
    howToName: "Vending business pre-launch checklist",
    totalTime: "P6M",
    steps: [
      { label: "MONTH 1", title: "Business formation + EIN + bank account", description: "File LLC or S-Corp with state Secretary of State. Apply for EIN through IRS online (5-10 minutes). Open business bank account at LLC formation; route all vending revenue and expense through business account. Apply for business credit card. Set up QuickBooks or equivalent accounting software. Begin sales-tax registration in each state of operation (free through state Department of Revenue)." },
      { label: "MONTH 1-2", title: "Licensing + insurance + compliance baseline", description: "Apply for state vending operator license where required (CA, FL, IL, NY, OH, PA, MD, NJ, MA among states with explicit licensing). Apply for local business license at city or county clerk. Apply for health department permit if vending perishable food. Bind commercial general liability + product liability + auto + workers comp insurance through commercial broker. Obtain certificate of insurance for use at proposal." },
      { label: "MONTH 2-3", title: "Equipment procurement + telemetry + sourcing", description: "Procure 5-12 starter machines from Crane, USI/Wittern, AMS, Royal (new) or Betson, Vending.com, Selectivend (refurbished). Install card readers (Cantaloupe ePort, Nayax Onyx, 365 ADM). Install cellular telemetry modems. Configure operator dashboard. Open wholesaler accounts (Vistar, Eby-Brown, Core-Mark) and DSD relationships (Pepsi, Coca-Cola, Frito-Lay where market access supports). Procure cargo van or truck." },
      { label: "MONTH 1-3", title: "Sales pipeline + anchor account development", description: "Highest-leverage parallel track. Identify 5-10 anchor account targets (300+ employee office, healthcare campus, school district, corporate campus). Develop LOI template and proposal collateral. Build sample monthly statement showing commission methodology + fee structure. Target 1-2 anchor accounts during months 1-3; LOI to commission cycle 60-180 days. Anchor account enables first install at months 5-7 and cash-flow stability." },
      { label: "MONTH 3-5", title: "First install + initial planogram + payment activation", description: "First install at anchor account: 2-3 hour per machine including site verification + electrical hookup + cellular telemetry activation + planogram load + card reader activation + dispute portal setup. Initial planogram based on workforce demographic + dietary preferences + allergen prominence. Activate cashless payment in advance of first sale; verify telemetry data flow + dashboard reporting + first transaction reconciliation." },
      { label: "MONTH 4-6", title: "Operating rhythm + reporting cadence + scale", description: "Establish operating rhythm: restock cadence (1-2× per week typical based on telemetry sell-through), service SLA (24-48 hr standard at structured accounts), monthly account reporting on healthy-share + dietary-tagged transaction share + stockout incidence. Telemetry-driven planogram tuning after 4-6 weeks of sell-through data. Expand sales pipeline: 2-4 additional accounts in development. Cash-flow positive trajectory begins at months 6-9." },
    ],
  }),
  specList({
    heading: "Complete pre-launch checklist by track",
    items: [
      { label: "Track 1 — Business formation", value: "File LLC or S-Corp with state Secretary of State ($50-$500 filing fee). Apply for EIN through IRS online (free, 5-10 minutes). Open business bank account at formation. Apply for business credit card. Set up accounting software (QuickBooks, Wave, Xero). Register for sales tax in each state of operation through state Department of Revenue (free). Verify state annual report requirement ($25-$150). Foundation for all other tracks." },
      { label: "Track 2 — Licensing and compliance", value: "Apply for state vending operator license where required ($25-$500). Apply for local business license at city or county clerk ($25-$300). Apply for health department permit if vending perishable food ($50-$500). Bind commercial general liability + product liability + auto + workers comp insurance ($1K-$3K first year). Obtain certificate of insurance at LLC name for use at proposal. Allow 4-12 weeks for state vending license processing." },
      { label: "Track 3 — Equipment procurement", value: "Procure 5-12 starter machines: snack + beverage + combo mix from Crane / USI/Wittern / AMS / Royal (new $8K-$15K per machine, full warranty) or Betson / Vending.com / Selectivend (refurbished $4K-$8K, 6-12 month warranty). Install card readers ($400-$700 per machine — Cantaloupe ePort, Nayax Onyx, 365 ADM). Install cellular telemetry modems ($200-$450 per machine). Procure hand truck, dolly, tool kit, service spares, cleaning supplies." },
      { label: "Track 4 — Telemetry and software", value: "Select telemetry platform: Cantaloupe Seed, Nayax Management Suite, 365 Retail Markets, Parlevel. First-year platform fee $7-$15/month per machine. Configure operator dashboard for SKU-level tagging across healthy + dietary + allergen attributes. Set up dispute portal (refunds within 1-3 business days). Configure route-management software. Verify data flow from machine to dashboard before first install." },
      { label: "Track 5 — Sourcing", value: "Open accounts at major vending wholesalers: Vistar (largest, national), Eby-Brown (national), Core-Mark (national). Establish DSD relationships with Pepsi, Coca-Cola, Frito-Lay where market access supports. Specialty SKU sourcing for healthy / dietary / allergen variants (RXBar, KIND, Quest, Hu Kitchen, Skinny Pop, Bare, Hippeas, Chomps). Refrigerated tier sourcing (Greek yogurt, hummus, plant-protein shakes) if pursuing fresh food line." },
      { label: "Track 6 — Vehicle and route", value: "Procure cargo van or truck — Ford Transit, Chevrolet Express, Ram ProMaster typical ($15K-$45K used or new). Outfit with shelving for product organization. Plan route logistics around starter fleet placements; minimize fuel cost and drive time. Budget fuel ($300-$800/month at startup scale), maintenance ($100-$300/month), DOT compliance where applicable. Vehicle insurance bundled with commercial auto policy." },
      { label: "Track 7 — Sales pipeline + anchor account", value: "Identify 5-10 anchor account targets early. Build proposal collateral: LOI template, sample monthly statement, planogram visual, equipment specification sheet, certificate of insurance. Target 1-2 anchor accounts during months 1-3 of formation. LOI to commission cycle 60-180 days at structured accounts. Anchor account enables first install at months 5-7 and 3-5 placement install. Differentiate on telemetry + reporting + dietary tagging + dispute portal." },
      { label: "Track 8 — Operating rhythm setup", value: "Define restock cadence (1-2× per week typical, telemetry-driven adjustment after 4-6 weeks of data). Define service SLA (24-48 hr at structured accounts, 12-24 hr at critical placements). Define monthly account reporting cadence (healthy-share + dietary-tagged transaction share + stockout incidence). Set up dispute portal with refund within 1-3 business days. Document operator playbook for route tech." },
      { label: "Track 9 — K-12 / federal / healthcare specialty layers", value: "If pursuing K-12 placements: state vendor registration through state Department of Education ($50-$300 + background check). USDA Smart Snacks compliance documentation. If pursuing federal sites: GSA Schedule registration or alternative federal contracting registration (multi-month process). If pursuing healthcare: facility vendor credentialing through Symplr / Vendormate / ReadyOn ($100-$500 per facility annual). Specialty layers extend launch timeline; plan accordingly." },
      { label: "Track 10 — Financial controls + reporting", value: "Monthly reconciliation between telemetry sales data + bank deposits + sales-tax remittance. Quarterly review with CPA for tax filing and entity health. Document operator margins per account; build refresh budget per machine (10-15% of revenue typical). Sales-tax remittance per state schedule (monthly or quarterly). Annual report filing where required. Year-end tax filing with separate business return (LLC pass-through or S-Corp 1120-S)." },
    ],
  }),
  tipCards({
    heading: "Five pre-launch checklist mistakes",
    sub: "Each documented in operator post-launch reviews. All preventable with disciplined parallel execution.",
    items: [
      { title: "Sequential rather than parallel track execution", body: "Operators who complete tracks sequentially (formation, then equipment, then sourcing, then sales) extend launch timeline by 3-6 months. Tracks must run in parallel during months 1-6. Highest-leverage parallel activity: sales pipeline development during formation (months 1-3) enables first install at months 5-7." },
      { title: "Deferring sales pipeline to post-formation", body: "Most common cause of stalled launches. Founders complete equipment procurement and licensing then begin sales — first install runs to months 9-12, cash-flow gap extends to months 15-18, capital deployment stalls. Begin anchor account development at month 1 alongside formation; identify 5-10 targets; build proposal collateral by month 2." },
      { title: "Under-capitalized starter fleet", body: "1-3 machine fleet doesn't support credible operator positioning at structured accounts. Customers expect 5+ machine capability + telemetry + dashboard + monthly reporting + insurance. Plan capital scope for credible operator tier ($50K-$180K, 5-12 machines) before pursuing commission accounts. Hobby tier (1-2 machines) viable for small placements but limits ceiling." },
      { title: "Skipping telemetry and cashless at startup", body: "Cashless transactions run 65-85% of vending revenue at modern accounts. Telemetry drives restock prioritization and dashboard reporting. Skipping either limits operator to legacy small-account positioning and forecloses structured-account opportunity. Budget card readers + cellular modems + platform fee into capital scope from formation." },
      { title: "Mixing personal and business finances", body: "Operating vending business through personal bank account voids LLC liability protection and creates tax and audit problems. Open business bank account at LLC formation. Route all vending revenue and expense through business account. Separate business credit card. Quarterly accounting review by CPA. Mixing finances during first months is hardest to unwind later." },
    ],
  }),
  keyTakeaways({
    heading: "Pre-launch checklist key takeaways",
    takeaways: [
      "Eight tracks executed in parallel during months 1-6: formation, licensing, equipment, telemetry, sourcing, vehicle, sales pipeline, operating rhythm.",
      "Anchor account development during months 1-3 is highest-leverage pre-launch activity; enables first install at months 5-7.",
      "Credible operator threshold is 5-12 machine starter fleet at $50K-$180K capital scope; supports commission account positioning.",
      "Sales-tax registration in every state of operation; state vending operator license in select states (CA, FL, IL, NY, OH, PA, MD, NJ, MA among them).",
      "Commercial general liability + product liability + auto + workers comp insurance required for structured-account access.",
      "Cashless payment and telemetry required at modern accounts; non-negotiable for commission positioning.",
    ],
  }),
  inlineCta({
    text: "Want the full pre-launch checklist with state-by-state filings and proposal templates?",
    buttonLabel: "Get the checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending startup founders on pre-launch checklist execution — eight parallel tracks across formation, licensing, equipment, telemetry, sourcing, vehicle, sales pipeline, and operating rhythm. The framework reflects operator-side data from current vending business launches and structured-account proposal requirements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's on the vending business checklist?", answer: "Eight parallel tracks: (1) business formation — LLC, EIN, bank account, accounting software; (2) licensing — state vending license, local business license, health permit, insurance; (3) equipment — 5-12 starter machines, card readers, telemetry modems; (4) software — telemetry platform, dashboard, dispute portal; (5) sourcing — wholesaler accounts, DSD relationships, specialty SKUs; (6) vehicle — cargo van, route logistics; (7) sales pipeline — anchor account, LOI template, proposal collateral; (8) operating rhythm — restock cadence, service SLA, reporting cadence.", audience: "Founders" },
      { question: "How long does pre-launch take?", answer: "6 months from formation to first install with parallel execution of all eight tracks. Sequential execution extends timeline by 3-6 months. Anchor account development during months 1-3 is highest-leverage parallel activity; enables first install at months 5-7. Cash-flow positive 6-12 months from first install; profitability 12-24 months from formation.", audience: "Founders" },
      { question: "What's the first thing I should do?", answer: "Three things in parallel during month 1: (1) file LLC with state Secretary of State and apply for EIN, (2) begin anchor account identification — list 5-10 target accounts and start outreach, (3) bind commercial insurance and apply for sales-tax registration. Don't defer sales pipeline until post-formation; it's the longest-lead activity.", audience: "Founders" },
      { question: "How many machines should I start with?", answer: "5-12 machines for credible operator positioning at commission accounts. 1-3 machine hobby tier viable for small placements (small office, gym, salon, apartment building) but doesn't support structured-account access. Capital scope $50K-$180K for credible operator entry; $4K-$35K for hobby tier. Choose tier based on target account profile.", audience: "Founders" },
      { question: "Do I need insurance from day one?", answer: "Yes. Most commission accounts require certificate of insurance at signature. Commercial general liability + product liability + auto required. Workers comp if hiring route tech. Bind during month 1-2 of formation; obtain certificate of insurance at LLC name. Without insurance, structured-account access is forecast. Cost $1K-$3K first year for small operator.", audience: "Founders" },
      { question: "What sourcing relationships do I need?", answer: "Open accounts at Vistar, Eby-Brown, Core-Mark (major vending wholesalers). DSD relationships with Pepsi, Coca-Cola, Frito-Lay where market access supports. Specialty SKU sourcing for healthy / dietary / allergen variants if pursuing healthy vending positioning. Refrigerated tier sourcing if pursuing fresh food. Sam's Club / Costco viable for hobby scale only; margin and selection don't support commercial scale.", audience: "Founders" },
      { question: "What about the anchor account?", audience: "Founders", answer: "Anchor account (300+ employee office, healthcare campus, school district, corporate campus) enables 3-5 placement install + reference for future sales + cash-flow stability. Development during months 1-3 of formation; LOI to commission cycle 60-180 days; first install at months 5-7. Without anchor account, 12-18 month cash-flow gap develops. Highest-leverage pre-launch activity." },
      { question: "What do I report to accounts monthly?", answer: "Monthly account report covers healthy-share trend (% of revenue from healthy SKUs), dietary-tagged transaction share, top SKUs by sell-through, stockout incidence, dispute resolution time, service SLA performance. Quarterly review with HR + wellness office at structured accounts. Annual review of planogram framework. Built into operator service contract; required at structured accounts.", audience: "Founders" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SBA — small business startup checklist", url: "https://www.sba.gov/business-guide/launch-your-business/launch-your-business", note: "Federal small business administration startup checklist and resources" },
      { label: "NAMA — vending operator startup resources", url: "https://www.namanow.org/", note: "Industry trade association covering operator startup + capability development + state-framework compliance" },
      { label: "IRS — small business and self-employed tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed", note: "Federal small business tax filing and EIN application resources" },
      { label: "Vistar Vending — wholesaler reference", url: "https://www.vistarcorp.com/", note: "Major vending-industry wholesaler covering snack + beverage SKU breadth + first-stock sourcing" },
      { label: "Cantaloupe — telemetry + payment platform", url: "https://www.cantaloupe.com/", note: "Telemetry platform + cashless payment hardware vendor for vending operators" },
    ],
  }),
  relatedGuides({
    heading: "Related startup guides",
    items: [
      { eyebrow: "Sister guide", title: "How to start a vending machine business", description: "Step-by-step launch sequence from LLC formation through first installs and operating rhythm.", href: "/vending-business-startup/how-to-start-a-vending-machine-business" },
      { eyebrow: "Capital", title: "Cost to start a vending business", description: "Realistic capital scope from hobby tier through credible operator entry across equipment, telemetry, vehicle, and working capital.", href: "/vending-business-startup/cost-to-start-a-vending-business" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Formation, capital, licensing, equipment, sourcing, locations, and operations across vending startup topics.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
