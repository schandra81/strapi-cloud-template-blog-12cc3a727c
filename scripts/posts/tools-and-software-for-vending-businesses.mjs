import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("tools-and-software-for-vending-businesses", [
  tldr({
    heading: "What tools and software do vending operators actually need to run a modern business?",
    paragraph:
      "Modern vending operators run on a layered software and tools stack across seven categories: (1) Telemetry platform (Cantaloupe Seed, Nayax Management Suite, 365 Retail Markets, Parlevel, VendSoft) — provides per-coil sell-through monitoring, restock prioritization, stockout alerts, dispute portal, and dashboard analytics. Platform fee $7-$15/month per machine plus cellular modem ($200-$450 per machine). (2) Cashless payment hardware (Cantaloupe ePort, Nayax Onyx, 365 ADM, USAT) — card reader $400-$700 per machine, processes credit, debit, mobile wallet (Apple Pay, Google Pay), corporate badge tap-to-pay where applicable. (3) Route management software (Cantaloupe Seed Pro, Nayax VendSys, Parlevel route module, OptimoRoute) — drives restock route planning, fuel optimization, driver dispatch, parts inventory tracking. (4) Accounting and tax software (QuickBooks, Wave, Xero) — books revenue, expense, sales-tax remittance, monthly reconciliation, year-end filing. Sales-tax-collection software (Avalara, TaxJar) for multi-state operators. (5) Dispute and refund portal — handles customer-disputed transactions with refund within 1-3 business days. Bundled with telemetry platform at modern operators. (6) Reporting and dashboard for account communication — monthly account report on healthy-share trend, dietary-tagged transaction share, top SKUs, stockout incidence, service SLA performance. (7) Physical tools and parts inventory — hand truck, dolly, tool kit, multi-meter, service spares (motor brushes, coin mech parts, bill validator parts, T-handle cylinders, fuses, LEDs, payment hardware cables) — $500-$1,500 service van inventory. Total software stack first year $3K-$8K at small operator; scales with fleet size. Tools and parts $500-$1,500 startup. Critical: modern operators differentiate on capability — telemetry + dashboard + cashless + monthly reporting are non-negotiable for structured-account access.",
    bullets: [
      { emphasis: "Seven stack categories — telemetry / cashless / route / accounting / dispute / reporting / tools:", text: "Each layer required for modern operator capability. Skipping telemetry or cashless limits operator to legacy small-account positioning." },
      { emphasis: "Telemetry + cashless non-negotiable for structured accounts:", text: "Cantaloupe / Nayax / 365 ADM are the major platforms. Card reader $400-$700 per machine + cellular modem $200-$450 + platform fee $7-$15/month per machine." },
      { emphasis: "Total software stack first year $3K-$8K plus $500-$1,500 tools and parts:", text: "Scales with fleet size. Multi-state operators add sales-tax-collection software (Avalara, TaxJar). Route management software at multi-account scale." },
    ],
  }),
  statStrip({
    heading: "Operator tools and software benchmarks",
    stats: [
      { number: "$7-15", label: "monthly platform fee per machine", sub: "telemetry + dashboard", accent: "blue" },
      { number: "$400-700", label: "card reader hardware", sub: "per machine", accent: "blue" },
      { number: "$3-8K", label: "first-year software stack", sub: "small operator scale", accent: "orange" },
      { number: "30-50%", label: "downtime reduction", sub: "telemetry-driven preventive", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Telemetry and payment platforms compared",
    sub: "Major US vending telemetry and cashless payment platforms. Most operators standardize on one platform across fleet for dashboard consistency.",
    headers: ["Platform", "Strengths", "Hardware", "Monthly fee", "Typical fit"],
    rows: [
      ["Cantaloupe Seed (formerly USA Technologies)", "Largest US installed base, mature dashboard, broad payment partner network", "ePort card reader + cellular modem", "$7-$12/machine + transaction fees", "Most operator scales"],
      ["Nayax Management Suite", "Strong international + US presence, integrated payment + telemetry", "Onyx card reader + cellular modem", "$8-$15/machine + transaction fees", "Modern operator launches"],
      ["365 Retail Markets", "Strength in micro-markets, AI cooler, breakroom; integrated software ecosystem", "365 ADM hardware + modem", "$10-$15/machine + transaction fees", "Micro-market + AI cooler focus"],
      ["Parlevel", "Strong route management + DEX integration; legacy operator favorite", "Cellular modem; payment via partner", "$5-$10/machine + transaction fees", "Multi-account regional operators"],
      ["VendSoft", "Lower-cost telemetry without proprietary payment lock-in", "Cellular modem; payment via 3rd party", "$5-$8/machine + transaction fees", "Cost-conscious smaller operators"],
      ["USA Technologies (legacy)", "Now Cantaloupe Seed (rebrand)", "ePort card reader + cellular modem", "$7-$12/machine + transaction fees", "Legacy installs migrating to Cantaloupe"],
    ],
  }),
  specList({
    heading: "Operator tool stack by category",
    items: [
      { label: "Telemetry platform", value: "Cantaloupe Seed (largest US installed base, mature dashboard), Nayax Management Suite (strong international + US), 365 Retail Markets (micro-market and AI cooler focus), Parlevel (multi-account regional operator favorite), VendSoft (lower-cost telemetry without proprietary payment lock-in). Drives per-coil sell-through, restock prioritization, stockout alerts, dispute portal, dashboard analytics. Platform fee $7-$15/month per machine plus cellular modem $200-$450 per machine. Most operators standardize on one platform across fleet." },
      { label: "Cashless payment hardware", value: "Card reader $400-$700 per machine: Cantaloupe ePort, Nayax Onyx, 365 ADM, USAT, ICT. Processes credit, debit, Apple Pay, Google Pay, corporate badge tap-to-pay where applicable. Transaction fees 2-3% typical (some operators pass through at high-volume placements; most absorb). EMV-chip + NFC + magstripe support standard. PCI-DSS compliance handled at platform; operator inherits compliance from platform certification." },
      { label: "Route management software", value: "Cantaloupe Seed Pro, Nayax VendSys, Parlevel route module, OptimoRoute. Drives restock route planning (telemetry-based prioritization vs fixed schedule), fuel optimization, driver dispatch, parts inventory tracking, service ticket assignment. Required at multi-account scale (5+ machines + 3+ accounts); manual route planning viable at hobby scale. Cost bundled with telemetry platform at most vendors; standalone $20-$80/month at OptimoRoute." },
      { label: "Accounting and tax software", value: "QuickBooks (most common at small operator), Wave (free tier viable for hobby), Xero (alternative cloud accounting), FreshBooks. Tracks revenue, expense, sales-tax remittance, monthly reconciliation, year-end filing. Cost $15-$80/month at small operator. Sales-tax-collection software (Avalara, TaxJar) for multi-state operators ($50-$200/month) automates sales-tax remittance across multiple state Departments of Revenue." },
      { label: "Dispute and refund portal", value: "Customer-disputed transactions (product not delivered, double charge, wrong product, expired) handled through dispute portal — refund within 1-3 business days. Bundled with telemetry platform at modern operators (Cantaloupe ePort Connect, Nayax dispute module). Reduces account-relationship friction; differentiates at proposal. Standalone dispute portal viable but adds operational complexity." },
      { label: "Reporting and dashboard for accounts", value: "Monthly account report on healthy-share trend, dietary-tagged transaction share, top SKUs by sell-through, stockout incidence, service SLA performance, dispute resolution time. Generated from telemetry dashboard at modern operators. Built into operator service contract; required at structured accounts. Quarterly review with placement contact. Annual planogram refresh." },
      { label: "Physical tools and service van inventory", value: "Hand truck or dolly $150-$400. Tool kit (sockets + screwdrivers + multi-meter + label maker + flashlight) $200-$500. Service spares (motor brushes, spiral coils, bill validator pickup rollers, coin mech parts, T-handle cylinders, fuses, LEDs, payment hardware cables) $200-$500. Cleaning supplies $50-$100. Branded apparel + business cards $100-$300. Total $500-$1,500 startup; replenished from manufacturer catalogs or 3rd-party parts distributors (Allied Vending, Vending World Parts)." },
      { label: "Sourcing and procurement tools", value: "Vistar / Eby-Brown / Core-Mark online ordering portals for wholesaler procurement. DSD vendor portals (Pepsi Field Solutions, Coca-Cola FoodService, Frito-Lay Snacks to You) for direct store delivery. Specialty sourcing platforms (NAMA marketplace, specialty distributor sites) for healthy and dietary SKU breadth. Used at planning and reorder cadence; integrated with telemetry sell-through data at advanced operators." },
      { label: "Sales pipeline and CRM", value: "HubSpot CRM (free tier), Pipedrive, Salesforce (overkill at small operator scale), Excel/Google Sheets at hobby scale. Tracks anchor account targets, LOI status, proposal sent, contract pipeline, account stage. Used for sales pipeline development during months 1-3 of formation and ongoing account expansion. Cost $0 (free tier) to $50/month at small operator." },
      { label: "Communication and customer service tools", value: "Google Workspace or Microsoft 365 for email, calendar, document collaboration ($6-$25/user/month). Phone routing (Google Voice, RingCentral, Grasshopper) for separating business and personal calls. Account contact log integrated with CRM. Service ticket tracking via telemetry dashboard. Modern operator capability; legacy operators often use ad-hoc communication producing service backlog." },
    ],
  }),
  tipCards({
    heading: "Five tool stack mistakes",
    sub: "Each documented in operator post-launch reviews. All preventable with disciplined capability planning.",
    items: [
      { title: "Skipping telemetry at startup", body: "Telemetry platform (Cantaloupe, Nayax, 365 ADM) drives per-coil sell-through + restock prioritization + dashboard + dispute portal. Without telemetry, operator limited to manual restock cadence + spreadsheet reporting + no dashboard for accounts. Forecloses structured-account opportunity; differentiates operator at proposal. Non-negotiable for credible operator entry." },
      { title: "Skipping cashless payment hardware", body: "Cashless transactions run 65-85% of vending revenue at modern accounts. Cash-only machines lose access to mid-office, corporate campus, healthcare, and most commercial sites entirely. Budget card readers ($400-$700 per machine) into capital scope; non-negotiable for commercial positioning. Apple Pay + Google Pay + corporate badge tap-to-pay accelerate transaction speed." },
      { title: "Choosing telemetry on price alone", body: "Lowest-cost telemetry without proprietary payment lock-in (VendSoft) viable for cost-conscious operators but lacks integrated payment + dispute portal of major platforms. Major platforms (Cantaloupe, Nayax, 365) bundle payment + telemetry + dispute + dashboard at $7-$15/month per machine — modest premium that includes capability differentiation. Choose platform on capability fit, not price alone." },
      { title: "Multi-platform telemetry across fleet", body: "Operators that mix telemetry platforms across fleet (Cantaloupe at some machines, Nayax at others) face dashboard fragmentation + reporting complexity + service training overhead. Standardize on one primary platform across fleet for dashboard consistency. Migration cost at scale modest; benefits compound across reporting + dispute + service." },
      { title: "No CRM for sales pipeline", body: "Operators without CRM track anchor account pipeline in spreadsheets or memory — pipeline gaps + missed follow-ups + lost opportunity. HubSpot CRM (free tier) or Pipedrive ($15-$50/month) covers small operator needs. Integrate with email and calendar for follow-up reminders. Sales pipeline development is highest-leverage pre-launch activity; treat CRM as required tool." },
    ],
  }),
  inlineCta({
    text: "Want the tool stack specification with telemetry + cashless + accounting + dispute portal selection?",
    buttonLabel: "Get the tool stack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending operators on tool and software stack selection — telemetry platform comparison (Cantaloupe, Nayax, 365 Retail Markets, Parlevel, VendSoft), cashless payment hardware specification, route management software, accounting and tax software, dispute portal, account reporting dashboard, sourcing portals, and physical service van inventory. The framework reflects operator-side data from current vending placements and modern operator capability requirements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What tools and software do I need for vending business?", answer: "Seven categories: (1) telemetry platform — Cantaloupe / Nayax / 365 Retail Markets / Parlevel / VendSoft; (2) cashless payment hardware — Cantaloupe ePort / Nayax Onyx / 365 ADM; (3) route management software — bundled with telemetry or OptimoRoute; (4) accounting — QuickBooks / Wave / Xero; (5) dispute portal — bundled with telemetry; (6) reporting dashboard — bundled with telemetry; (7) physical tools and service van inventory $500-$1,500. Total software stack first year $3K-$8K at small operator.", audience: "Founders" },
      { question: "Which telemetry platform is best?", answer: "Cantaloupe Seed has largest US installed base and mature dashboard; standard for most operator scales. Nayax Management Suite strong for modern operator launches with integrated payment + telemetry. 365 Retail Markets strongest for micro-markets and AI coolers. Parlevel favorite among multi-account regional operators. VendSoft lower-cost option without proprietary payment lock-in. Choose on capability fit and operator scale.", audience: "Founders" },
      { question: "How much does the software stack cost?", answer: "$3K-$8K first year at small operator (5-12 machine fleet). Telemetry platform + cellular modem $7-$15/month per machine + $200-$450 per machine one-time modem. Card readers $400-$700 per machine. Accounting software $15-$80/month. Sales-tax software $50-$200/month at multi-state. CRM $0-$50/month. Scales with fleet size; cost per machine drops at scale.", audience: "Founders" },
      { question: "Do I really need cashless payment?", answer: "Yes for any commercial positioning. Cashless transactions run 65-85% of vending revenue at modern accounts. Cash-only machines lose access to mid-office, corporate campus, healthcare, and most commercial sites entirely. Card readers $400-$700 per machine — non-negotiable for credible operator entry. Apple Pay + Google Pay + corporate badge tap-to-pay accelerate transaction speed.", audience: "Founders" },
      { question: "Can I run vending without telemetry?", answer: "Yes at hobby scale (1-3 machines) — manual restock schedule + spreadsheet reporting + cash + simple card reader. Telemetry-free operation viable for small placements (small office, gym, salon, apartment building). Limits: forecloses structured-account opportunity; doesn't support monthly account reporting; manual restock without sell-through data inefficient at scale. Non-negotiable for credible operator entry.", audience: "Founders" },
      { question: "What accounting software should I use?", answer: "QuickBooks most common at small operator ($30-$80/month). Wave free tier viable for hobby scale. Xero alternative cloud accounting at similar cost to QuickBooks. FreshBooks for solo operators with simple invoicing. Tracks revenue, expense, sales-tax remittance, monthly reconciliation, year-end filing. Sales-tax software (Avalara, TaxJar) for multi-state operators automates multi-state remittance.", audience: "Founders" },
      { question: "What about a CRM for sales pipeline?", audience: "Founders", answer: "HubSpot CRM (free tier) or Pipedrive ($15-$50/month) covers small operator needs. Tracks anchor account targets, LOI status, proposal sent, contract pipeline, account stage. Integrate with email and calendar for follow-up reminders. Salesforce overkill at small operator scale. Spreadsheets viable at hobby scale but create pipeline gaps at scale. CRM is highest-leverage pre-launch tool investment." },
      { question: "What tools do I keep in the service van?", answer: "Hand truck or dolly $150-$400. Tool kit (sockets + screwdrivers + multi-meter + label maker + flashlight) $200-$500. Service spares (motor brushes, spiral coils, bill validator pickup rollers, coin mech parts, T-handle cylinders, fuses, LEDs, payment hardware cables) $200-$500. Cleaning supplies $50-$100. Total $500-$1,500. Replenish from manufacturer catalogs or 3rd-party parts distributors. Reduces second-visit incidence 60-80%.", audience: "Founders" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "Cantaloupe — telemetry + cashless payment platform", url: "https://www.cantaloupe.com/", note: "Largest US vending telemetry and cashless payment platform" },
      { label: "Nayax — telemetry + payment + management suite", url: "https://www.nayax.com/", note: "Modern operator telemetry and cashless payment platform" },
      { label: "365 Retail Markets — micro-market and AI cooler platform", url: "https://www.365retailmarkets.com/", note: "Telemetry and payment platform with micro-market and AI cooler focus" },
      { label: "Parlevel — vending route management software", url: "https://www.parlevelsystems.com/", note: "Multi-account vending route management and telemetry platform" },
      { label: "NAMA — operator tools and software resources", url: "https://www.namanow.org/", note: "Industry trade association covering operator tools and modern operator capability" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending machine repair basics", description: "Common repairs by category, preventive maintenance, service van inventory, and telemetry-driven failure prediction.", href: "/vending-business-startup/vending-machine-repair-basics" },
      { eyebrow: "Operations", title: "How to start a vending machine business", description: "Step-by-step launch sequence including tool stack selection and operator capability development.", href: "/vending-business-startup/how-to-start-a-vending-machine-business" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Formation, capital, licensing, equipment, sourcing, operations, and tools across vending startup topics.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
