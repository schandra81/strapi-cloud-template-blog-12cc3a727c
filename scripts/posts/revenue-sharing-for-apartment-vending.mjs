import { seedPost, tldr, statStrip, costBreakdown, comparisonTable, specList, tipCards, sampleStatement, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("revenue-sharing-for-apartment-vending", [
  tldr({
    heading: "How does revenue-sharing work for apartment vending — and what's the right structure?",
    paragraph:
      "Apartment vending revenue-sharing structures pay property the agreed commission percentage of net sales (gross minus refunds + sales tax + payment processing fees) on a monthly or quarterly cadence. Three structures dominate apartment vending: (1) flat-rate commission (8-18% of net sales typical at apartment placements; simpler reporting + accounting; modern operator standard at small-to-mid properties; most common); (2) tiered commission (8-12% on first $X gross + 12-18% on next $Y gross + 14-22% on incremental gross above threshold; rewards property for driving traffic + supports operator economics at scale; modern operator capability at larger properties); (3) hybrid commission + service fee (lower commission rate 6-10% + monthly service fee $50-$200 per machine paid by operator; predictable income for property + variable operator margin; less common at apartment vending). Apartment vending commission rates lean lower than commercial (office, retail-center) because resident user base is smaller + more predictable + service overhead lower. Sub-100 unit apartments: 8-12% net sales typical. 100-300 unit: 10-15%. 300-500 unit: 12-18%. 500+ unit (luxury / high-amenity): 14-22% with AI cooler walls at 500+ daily users supported. Revenue-sharing statement structure: monthly statement showing gross sales by machine + refunds + sales tax + payment processing fees + commission calculation + payment method + cumulative-period totals. Modern operators provide pre-formatted statements at monthly cadence via electronic delivery; legacy operators provide paper statements at quarterly cadence + spreadsheet calculation prone to error. Verify statement structure + calculation transparency at proposal; engage attorney for contract review. AI cooler walls at qualifying apartment placements (luxury 500+ unit with high-amenity positioning) support higher commission rates + amenity differentiator for resident retention.",
    bullets: [
      { emphasis: "Three structures — flat rate dominant at apartment vending:",
        text: "Flat 8-18% most common. Tiered at larger properties. Hybrid + service fee less common. Match structure to property size + amenity positioning + operator capability." },
      { emphasis: "Commission rate scales with property size:",
        text: "Sub-100 units 8-12%. 100-300 units 10-15%. 300-500 units 12-18%. 500+ units (luxury / high-amenity) 14-22% with AI cooler walls supported." },
      { emphasis: "Statement structure + transparency matters:",
        text: "Monthly statement with gross + refunds + sales tax + payment processing + commission calculation. Modern operators provide pre-formatted electronic; legacy operators paper + quarterly + error-prone.", },
    ],
  }),
  statStrip({
    heading: "Apartment vending revenue-sharing benchmarks",
    stats: [
      { number: "8-22%", label: "commission rate range", sub: "scales with property size + amenity", accent: "blue" },
      { number: "Monthly", label: "statement cadence", sub: "modern operator standard", accent: "blue" },
      { number: "10-18%", label: "typical mid-property", sub: "100-300 unit apartment commission", accent: "blue" },
      { number: "$200-2K", label: "monthly property income", sub: "per machine at qualifying placement", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Apartment vending revenue-sharing structures",
    sub: "Three structures fit different property profiles. Modern operators offer all three; legacy operators sometimes offer only flat rate.",
    headers: ["Structure", "Property profile", "Commission rate", "Best fit"],
    rows: [
      ["Flat-rate commission", "Sub-300 unit apartments + simple", "8-15% net sales", "Most common; simpler reporting"],
      ["Tiered commission", "300+ unit + larger amenity", "8-12% / 12-18% / 14-22% tiers", "Rewards traffic + supports operator scale"],
      ["Hybrid commission + service fee", "Specialty placements + predictable income", "6-10% + $50-$200/mo per machine", "Less common; predictable income"],
      ["AI cooler wall qualifying placement", "500+ unit luxury + high-amenity", "14-22% with operator-funded $20-80K", "Amenity differentiator + resident retention"],
      ["Specialty operator placement", "Premium tech / hospitality apartment", "Specialty contract", "Farmer's Fridge / Bistro Locker partnerships"],
    ],
  }),
  specList({
    heading: "Apartment vending revenue-sharing specifications",
    items: [
      { label: "Structure 1 — flat-rate commission", value: "8-18% of net sales (gross minus refunds + sales tax + payment processing fees). Sub-100 unit apartments: 8-12%. 100-300 unit: 10-15%. 300-500 unit: 12-18%. Simpler reporting + accounting + statement structure. Modern operator standard at small-to-mid properties; most common structure at apartment vending." },
      { label: "Structure 2 — tiered commission", value: "Tiered structure with commission rate increasing at gross sales thresholds. Example: 8-12% on first $2,000/month gross + 12-18% on next $2,000 gross + 14-22% on incremental gross above $4,000/month. Rewards property for driving traffic; supports operator economics at scale. Modern operator capability at larger properties (300+ unit) + high-traffic placements." },
      { label: "Structure 3 — hybrid commission + service fee", value: "Lower commission rate (6-10% net sales) + monthly service fee $50-$200 per machine paid by operator to property. Predictable income for property + variable operator margin. Less common at apartment vending; sometimes used at specialty placements where property prefers predictable revenue over variable. Verify structure terms at proposal." },
      { label: "AI cooler wall qualifying placement commission", value: "500+ unit luxury apartment + high-amenity positioning supports AI cooler wall ($20-80K operator-funded capital) at 500+ daily users. Commission 14-22% net sales + amenity differentiator for resident retention + RTO-style positioning. Modern operator capability at qualifying luxury properties; verify capital flexibility + amenity positioning at proposal." },
      { label: "Statement structure + transparency", value: "Monthly statement showing per-machine gross sales + refunds + sales tax + payment processing fees + commission calculation + payment method (ACH + check) + cumulative-period totals + YTD totals + planogram refinement notes + service incident summary. Modern operators provide pre-formatted electronic statement via portal + email; legacy operators provide paper statements at quarterly cadence + spreadsheet calculation prone to error." },
      { label: "Commission rate by property size", value: "Sub-100 unit: 8-12% (smaller user base + lower service overhead). 100-300 unit: 10-15% (mid-property typical). 300-500 unit: 12-18% (larger amenity positioning supports). 500+ unit (luxury / high-amenity): 14-22% with AI cooler walls + specialty operators supported. Match rate to property size + amenity + operator capability." },
      { label: "Net sales calculation methodology", value: "Gross sales (all transaction revenue) minus refunds (failed-vend + customer-initiated) minus sales tax (collected on behalf of state / local) minus payment processing fees (2-3% of cashless transactions typical, depending on provider). Net sales × commission rate = property commission. Modern operators provide transparent calculation; legacy operators sometimes obscure methodology." },
      { label: "Payment method + cadence", value: "ACH direct deposit at modern operators (electronic + traceable + tax-reportable on 1099-MISC or 1099-NEC); check at legacy operators (paper + slower + reconciliation overhead). Monthly cadence at modern operators (close + statement + payment 10-30 days after period end); quarterly cadence at legacy operators. Verify payment method + cadence at contract." },
      { label: "Tax + 1099 reporting", value: "Operator issues 1099-MISC or 1099-NEC at property for annual commission income above $600. Property responsible for income tax reporting on commission income. Operator collects + remits sales tax on transactions. Build tax + 1099 reporting into operator contract; engage CPA at signature for tax planning." },
    ],
  }),
  tipCards({
    heading: "Six apartment vending revenue-sharing mistakes",
    sub: "All preventable with proposal-stage structure transparency + monthly statement requirement + attorney + CPA review.",
    items: [
      { title: "Verbal commission terms without contract transparency", body: "Modern operators provide transparent commission terms in writing: structure + rate + calculation methodology + statement cadence + payment method + 1099 reporting. Verbal terms at signature produce post-contract regret + dispute. Build commission transparency into contract; engage attorney for review at signature." },
      { title: "Wrong structure for property size", body: "Flat-rate commission at small-to-mid properties (sub-300 unit); tiered at larger properties (300+ unit); hybrid + service fee at specialty placements. Match structure to property profile + amenity positioning + operator capability. Modern operators offer all three; legacy operators sometimes offer only flat rate + miss opportunity at scale." },
      { title: "Quarterly statement cadence at legacy operator", body: "Monthly statement cadence at modern operators; quarterly at legacy. Quarterly cadence produces delayed visibility + reconciliation overhead + dispute resolution lag. Build monthly statement into contract; modern operators provide pre-formatted electronic; legacy operators provide paper + spreadsheet + error-prone." },
      { title: "Net sales calculation methodology obscured", body: "Net sales = gross - refunds - sales tax - payment processing fees. Modern operators provide transparent calculation in statement; legacy operators sometimes obscure methodology or apply non-standard deductions. Verify calculation methodology at proposal; specify methodology in contract." },
      { title: "Missing 1099 reporting from operator", body: "Operator issues 1099-MISC or 1099-NEC at property for annual commission income above $600. Operators that miss 1099 issuance produce tax filing gap + IRS reconciliation issue. Build 1099 reporting into operator contract; verify operator capability at proposal (modern operators provide; some legacy operators don't)." },
      { title: "No amenity positioning at luxury apartment", body: "Luxury 500+ unit properties support AI cooler walls at qualifying placements + specialty operators (Farmer's Fridge, Bistro Locker) at high-amenity positioning. Higher commission rate + resident retention differentiator + RTO-style amenity. Modern operators deploy at qualifying luxury; legacy operators leave opportunity.", },
    ],
  }),
  costBreakdown({
    heading: "Apartment vending revenue-sharing — sample property income calculation",
    sub: "300-unit apartment with combo vending + AI cooler wall hybrid deployment. Modern operator with monthly statement + 14% flat-rate commission. Per-month property income.",
    items: [
      { label: "Combo vending gross sales (3 machines × $1,200/mo)", amount: "$3,600", range: "$1,000-$1,500 per machine typical" },
      { label: "AI cooler wall gross sales (1 unit × $7,500/mo)", amount: "$7,500", range: "$5K-$25K per unit qualifying" },
      { label: "Total gross sales", amount: "$11,100", range: "Combo + AI cooler aggregate" },
      { label: "Less refunds (1.5% of gross)", amount: "-$167", range: "Failed-vend + customer-initiated" },
      { label: "Less sales tax (8% of net pre-tax sales)", amount: "-$821", range: "Collected on behalf of state / local" },
      { label: "Less payment processing fees (2.5% of cashless)", amount: "-$252", range: "Cashless 85% of gross typical" },
      { label: "Net sales (commission base)", amount: "$9,860", range: "Gross minus refunds + tax + payment fees" },
      { label: "Property commission (14% of net sales)", amount: "$1,380", range: "Flat-rate structure at 300-unit property" },
      { label: "Approximate monthly property income", amount: "$1,380", range: "Before 1099 income tax reporting" },
    ],
    totalLabel: "Monthly property commission income",
    totalAmount: "$1,380",
  }),
  sampleStatement({
    heading: "Sample monthly revenue-sharing statement (modern operator format)",
    sub: "Modern operator electronic statement format. Per-machine gross + deductions + commission + cumulative + YTD. Provided monthly via portal + email.",
    accountName: "Sample 300-Unit Apartment Property",
    period: "Period: Month-end statement (most recent close)",
    issuedDate: "Issued: 10-15 days after period close standard at modern operators",
    paymentMethod: "ACH direct deposit standard at modern operators",
    calculationBasis: "Calculation basis: Net sales (gross minus refunds + sales tax + payment processing fees) × commission rate. Flat-rate 14% commission at 300-unit property.",
    lines: [
      { description: "Combo vending machine #1 (lobby)", amount: "$1,250 gross / $185 commission" },
      { description: "Combo vending machine #2 (laundry)", amount: "$1,180 gross / $175 commission" },
      { description: "Combo vending machine #3 (fitness)", amount: "$1,170 gross / $173 commission" },
      { description: "AI cooler wall #1 (lobby central)", amount: "$7,500 gross / $1,109 commission" },
      { description: "Total period gross sales", amount: "$11,100" },
      { description: "Less period refunds", amount: "-$167" },
      { description: "Less period sales tax", amount: "-$821" },
      { description: "Less period payment processing", amount: "-$252" },
    ],
    totalGross: "$11,100",
    totalRefunds: "-$167",
    totalNet: "$9,860",
    totalCommission: "$1,380",
    footnote: "Payment via ACH 15 business days after period close. 1099-MISC or 1099-NEC issued annually for commission income above $600. Verify statement structure + payment cadence + tax reporting in operator contract at signature.",
  }),
  inlineCta({
    text: "Want the apartment vending revenue-sharing framework (structure + rate + statement + tax + attorney review)?",
    buttonLabel: "Get the revenue-sharing framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on apartment vending revenue-sharing across small (sub-100 unit), mid (100-300), large (300-500), and luxury (500+ unit) apartment properties — including structure selection (flat-rate / tiered / hybrid), commission rate negotiation, statement structure + transparency design, payment method + cadence, 1099 + tax reporting coordination, and AI cooler wall qualifying placement structuring at luxury properties. The benchmarks reflect operator-side data + property management feedback across apartment formats.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does revenue-sharing work for apartment vending?", answer: "Operator pays property a commission percentage of net sales (gross minus refunds + sales tax + payment processing fees) on monthly or quarterly cadence. Three structures: (1) flat-rate 8-18% most common, (2) tiered with rate increasing at gross sales thresholds, (3) hybrid lower rate + monthly service fee. Match structure to property size + amenity positioning + operator capability.", audience: "Property Managers" },
      { question: "What commission rate should we expect?", answer: "Scales with property size. Sub-100 unit: 8-12%. 100-300 unit: 10-15%. 300-500 unit: 12-18%. 500+ unit (luxury / high-amenity): 14-22% with AI cooler walls at qualifying placements + specialty operators supported. Verify rate methodology + structure in contract; modern operators provide transparent terms.", audience: "Property Managers" },
      { question: "Which structure is best for our apartment property?", answer: "Flat-rate 8-15% at sub-300 unit properties (simpler reporting + most common). Tiered at 300+ unit properties (rewards traffic + supports operator scale). Hybrid lower rate + service fee at specialty placements (predictable income). Modern operators offer all three; legacy operators sometimes offer only flat rate.", audience: "Property Managers" },
      { question: "What's net sales vs gross sales?", answer: "Net sales = gross sales (all transaction revenue) minus refunds (failed-vend + customer-initiated) minus sales tax (collected on behalf of state / local) minus payment processing fees (2-3% of cashless transactions). Commission calculated on net sales. Modern operators provide transparent calculation in statement; legacy operators sometimes obscure methodology.", audience: "Property Managers" },
      { question: "How often will we receive statements?", answer: "Monthly cadence at modern operators (electronic statement via portal + email 10-15 days after period close). Quarterly cadence at legacy operators (paper statement + spreadsheet calculation + error-prone). Build monthly statement into contract; modern operators provide pre-formatted electronic at standard.", audience: "Property Managers" },
      { question: "How is payment made?", answer: "ACH direct deposit at modern operators (electronic + traceable + tax-reportable). Check at legacy operators (paper + slower + reconciliation overhead). Monthly cadence at modern operators; quarterly at legacy. Verify payment method + cadence at contract signature.", audience: "Property Managers" },
      { question: "What about tax reporting?", answer: "Operator issues 1099-MISC or 1099-NEC at property for annual commission income above $600. Property responsible for income tax reporting on commission income. Operator collects + remits sales tax on transactions. Build tax + 1099 reporting into operator contract; engage CPA at signature for tax planning.", audience: "Property Owners" },
      { question: "Can we negotiate a higher commission rate?", answer: "Yes at qualifying placements. Higher traffic + amenity positioning + AI cooler wall qualifying placements support higher commission rates. 500+ unit luxury properties with AI cooler walls at 500+ daily users support 14-22% commission + amenity differentiator + resident retention. Run RFP across 2-3 modern operators; compare commission + capability.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAA — National Apartment Association", url: "https://www.naahq.org/", note: "Industry trade association covering apartment amenity vending + revenue-sharing standards" },
      { label: "NAMA — vending revenue-sharing + commission methodology standards", url: "https://www.namanow.org/", note: "Industry guidance on vending revenue-sharing structures + statement methodology" },
      { label: "365 Retail Markets — AI cooler wall at apartment placements", url: "https://www.365retailmarkets.com/", note: "AI cooler wall platform deployed at luxury + high-amenity apartment properties" },
      { label: "IRS 1099-MISC / 1099-NEC — commission income reporting", url: "https://www.irs.gov/forms-pubs/about-form-1099-misc", note: "Federal tax reporting framework for vending commission income at property" },
      { label: "Cantaloupe Seed — modern operator electronic statement platform", url: "https://www.cantaloupe.com/", note: "Modern operator telemetry + ERP platform supporting pre-formatted electronic statements" },
    ],
  }),
  relatedGuides({
    heading: "Related apartment vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Apartment complex vending solutions", description: "Equipment + planogram + placement + amenity positioning at apartment properties.", href: "/vending-for-apartments/apartment-complex-vending-solutions" },
      { eyebrow: "Operations", title: "Psychology of vending resident habits", description: "Resident user behavior + planogram refinement + amenity positioning.", href: "/vending-for-apartments/psychology-vending-resident-habits" },
      { eyebrow: "Hub", title: "All apartment vending guides", description: "Placement, planogram, payment, equipment, operations across apartment formats.", href: "/vending-for-apartments" },
    ],
  }),
]);
process.exit(0);
