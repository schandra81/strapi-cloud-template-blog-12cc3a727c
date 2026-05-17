import { seedPost, tldr, statStrip, comparisonTable, sampleStatement, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-location-commission-explained", [
  tldr({
    heading: "How does vending location commission actually work?",
    paragraph:
      "Vending location commission is the share of sales paid by the operator to the host (property owner, employer, school, building manager) in exchange for floor space and electrical service. Industry typical: 10-25% of net sales (gross sales minus refunds, sales tax, and sometimes card processing). Calculation basis matters: 'gross sales' vs 'net sales' vs 'profit share' produce 20-40% different commission dollars at the same machine. Payment cadence: monthly standard (modern operators), quarterly at smaller operators, annual lump sum at some legacy operators (avoid — bad for host cashflow). Statement standard: monthly per-machine itemized statement showing gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method (check, ACH, vendor portal). Modern operators provide telemetry-backed statements (gross sales tied to dispense count + price per SKU verifiable). Legacy operators provide opaque summary statements (operator-claimed numbers, no audit trail) — avoid. Build commission rate + calculation basis + payment cadence + statement format into operator contract at signature; renegotiation after install is hard.",
    bullets: [
      { emphasis: "Industry typical 10-25% of net sales:",
        text: "Range driven by foot traffic volume, exclusivity, term length, host capital contribution. Premium placements (concourse airport, major event venue) can reach 30-40%." },
      { emphasis: "Calculation basis matters: gross vs net vs profit share:",
        text: "Different bases produce 20-40% different commission dollars at the same machine. Verify basis + write into contract before signing." },
      { emphasis: "Monthly per-machine itemized statements modern standard:",
        text: "Telemetry-backed (dispense count + price per SKU verifiable). Legacy operators provide opaque summary statements — avoid for accountability." },
    ],
  }),
  statStrip({
    heading: "Vending location commission benchmarks",
    stats: [
      { number: "10-25%", label: "industry-typical commission rate", sub: "of net sales", accent: "blue" },
      { number: "30-40%", label: "premium placement rate", sub: "airport concourse, major venue, exclusivity", accent: "blue" },
      { number: "20-40%", label: "calculation basis delta", sub: "gross vs net vs profit share", accent: "orange" },
      { number: "Monthly", label: "statement cadence standard", sub: "per-machine itemized + telemetry-backed", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Commission calculation basis comparison",
    sub: "Same gross sales ($5,000 monthly) — different calculation basis produces different commission dollars to host.",
    headers: ["Calculation basis", "What it means", "Example commission ($5K gross, 20% rate)", "Verifiability"],
    rows: [
      ["Gross sales", "Total sales before any deductions", "$1,000", "Highest — direct from telemetry"],
      ["Net sales (sales tax excluded)", "Gross minus sales tax (6-9% typical)", "$925-$940", "High — tax rate verifiable"],
      ["Net sales (sales tax + refunds excluded)", "Gross minus sales tax + customer refunds", "$905-$925", "High — refund log verifiable"],
      ["Net sales (sales tax + refunds + card processing excluded)", "Gross minus tax + refunds + 2-4% card processing", "$815-$890", "Medium — processing rate verifiable"],
      ["Profit share", "Net sales minus COGS (cost of goods)", "$300-$500 (varies by mix)", "Low — operator-claimed COGS"],
      ["Net profit share", "After all operator costs", "$100-$300 (varies)", "Lowest — opaque cost structure"],
    ],
  }),
  sampleStatement({
    heading: "Sample vending commission statement (modern operator)",
    sub: "Monthly per-machine itemized statement with telemetry-backed dispense data. Verify your operator provides this format.",
    accountName: "Acme Corp HQ — Atlanta",
    period: "October 2025",
    issuedDate: "November 5, 2025",
    paymentMethod: "ACH to host account ending in 4271",
    calculationBasis: "Net sales (gross minus sales tax + customer refunds); commission 18% per signed contract",
    lines: [
      { machine_label: "AV-4471 · Snack/Beverage combo", location: "2nd floor break room", units: 1188, gross: "$2,461.50", refunds: "$18.00", net: "$2,443.50", rate: "18%", commission: "$439.83" },
      { machine_label: "AV-4472 · Cold beverage", location: "Cafeteria entry", units: 711, gross: "$1,326.25", refunds: "$8.50", net: "$1,317.75", rate: "18%", commission: "$237.20" },
      { machine_label: "AV-4473 · Snack/Beverage combo", location: "7th floor break room", units: 536, gross: "$736.50", refunds: "$6.00", net: "$730.50", rate: "18%", commission: "$131.49" },
    ],
    totalGross: "$4,524.25",
    totalRefunds: "$32.50",
    totalNet: "$4,491.75",
    totalCommission: "$808.52",
    footnote: "Per-SKU detail (51 line items across 3 machines) attached as CSV. Telemetry dispense count verifiable in operator portal. Statement issued by 5th of following month per contract. Disputes must be raised within 30 days per Section 7.2 of the master service agreement.",
  }),
  specList({
    heading: "Vending commission contract specifications",
    items: [
      { label: "Commission rate", value: "Industry-typical 10-25% of net sales. Premium placements (airport concourse, major event venue, hospital systems) reach 30-40% with exclusivity + foot traffic justification. Below 10% = check exclusivity + competing offers. Above 30% standard placement = verify operator economics (may produce service quality compromise)." },
      { label: "Calculation basis", value: "'Net sales' typical (gross minus sales tax + customer refunds). Avoid 'profit share' / 'net profit share' bases at standard placements — operator-claimed COGS opaque + produces 30-50% lower commission than net sales basis. Verify basis writes into contract clearly before signing." },
      { label: "Payment cadence", value: "Monthly standard (modern operators). Quarterly acceptable at smaller operators. Annual lump-sum bad for host cashflow + bad audit trail — avoid. Modern operator portals provide on-demand statement access; legacy operators mail paper checks + delay 30-60 days." },
      { label: "Payment method", value: "ACH to host account modern standard (3-5 business day clearance). Check at smaller operators (10-14 day clearance + paper handling). Some operators offer vendor portal credits at corporate / franchise host accounts. Modern operators support ACH natively." },
      { label: "Statement format", value: "Per-machine itemized statement showing: gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method, payment date, machine ID, period. Telemetry-backed (dispense count verifiable). Modern operators provide pre-formatted PDF + portal access; legacy operators provide opaque summary spreadsheet." },
      { label: "Audit + verification rights", value: "Host audit rights written into contract: monthly statement review, quarterly business review with operator account manager, annual full audit by host or third party at host expense. Operator provides telemetry data + dispense logs + refund logs for verification. Modern operators welcome audits; legacy operators resist — bad sign." },
      { label: "Commission rate escalation", value: "Annual escalation clause typical: rate increase tied to placement volume (above threshold = higher rate) or CPI escalator (1-3% annual). Write into contract at signature; renegotiation after install hard. Multi-year contracts (3-5 year) benefit from escalation; spot contracts (1 year) typically flat rate." },
      { label: "Refund + chargeback treatment", value: "Standard contract: customer refunds (telemetry-detected failed vends + customer-requested refunds) deducted from gross before commission calculation. Chargebacks (credit card disputes) deducted similarly. Verify refund + chargeback policy in contract; some legacy operators charge host for refunds — avoid." },
      { label: "Statement dispute window", value: "Standard 30-day dispute window from statement issue date. Host reviews telemetry data + dispense logs in operator portal + raises disputes via operator account manager. Modern operators resolve disputes within 10 business days; legacy operators slower. Write dispute resolution path into contract.", },
    ],
  }),
  tipCards({
    heading: "Five commission contract mistakes",
    sub: "All preventable at contract signature. Renegotiation after install much harder.",
    items: [
      { title: "Accepting 'profit share' or 'net profit share' basis", body: "Operator-claimed COGS opaque + produces 30-50% lower commission than net sales basis at same gross sales. Standard placements: insist on net sales basis (gross minus sales tax + customer refunds). Reserve profit-share for genuine joint-venture structures with audit rights + cost-disclosure obligations." },
      { title: "Not specifying calculation basis in contract", body: "Vague 'commission X% of sales' without basis definition produces dispute at first statement. Operator defaults to most-favorable-to-operator basis. Write basis explicitly: 'X% of net sales, defined as gross sales minus state and local sales tax and customer refunds'. Cheap insurance against year-long dispute." },
      { title: "Accepting annual lump-sum payment", body: "Bad for host cashflow + bad audit trail (single annual reconciliation hard). Monthly payment modern standard. Worth giving up 1-2 percentage points commission rate to get monthly cadence + telemetry-backed statements." },
      { title: "No audit rights in contract", body: "Without audit rights, host has no recourse if operator under-reports sales. Write host audit rights: monthly statement review, quarterly business review, annual full audit at host expense, telemetry data + dispense logs + refund logs accessible. Modern operators welcome; legacy operators resist — choose modern." },
      { title: "Skipping refund + chargeback policy review", body: "Some legacy operator contracts charge host for customer refunds + credit card chargebacks (deducted from commission). Standard modern contract: operator absorbs. Verify in contract; if host-charged, reduce commission rate to compensate or walk to modern operator.", },
    ],
  }),
  inlineCta({
    text: "Want the commission contract framework (rate + basis + cadence + statement + audit)?",
    buttonLabel: "Get the commission framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending commission contract negotiation across office, healthcare, hospitality, education, and government placements — including rate benchmarking, calculation basis selection, statement format standards, audit rights, and dispute resolution. The benchmarks reflect operator-side data + host facilities team feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's a typical vending location commission?", answer: "10-25% of net sales (gross minus sales tax + customer refunds) typical. Premium placements — airport concourses, major event venues, hospital systems with exclusivity — reach 30-40%. Below 10% standard placement: verify exclusivity + competing offers. Above 30% standard: verify operator economics.", audience: "Property Owners" },
      { question: "What's the difference between gross sales and net sales basis?", answer: "Same $5,000 gross monthly sales at 20% rate. Gross basis = $1,000. Net basis (sales tax + refunds excluded) = $905-$925. Net basis after card processing = $815-$890. Calculation basis matters as much as rate — write explicitly into contract.", audience: "Property Owners" },
      { question: "Should we accept profit-share commission?", answer: "Generally no at standard placements. Operator-claimed COGS opaque + produces 30-50% lower commission than net sales basis. Reserve profit-share for genuine joint-venture structures with audit rights + cost-disclosure obligations. Insist on net sales basis at standard placements.", audience: "Property Owners" },
      { question: "How often should commission be paid?", answer: "Monthly standard (modern operators). Quarterly acceptable at smaller operators. Annual lump-sum bad for host cashflow + bad audit trail — avoid. Modern operator portals provide on-demand statement access; ACH payment standard with 3-5 day clearance.", audience: "Property Owners" },
      { question: "What should a commission statement look like?", answer: "Per-machine itemized statement showing: gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method, payment date, machine ID, period. Telemetry-backed (dispense count verifiable). Modern operators provide PDF + portal access; legacy operators provide opaque summary spreadsheet.", audience: "Procurement" },
      { question: "Can we audit the operator's sales numbers?", answer: "Yes if contract includes audit rights. Write host audit rights: monthly statement review, quarterly business review, annual full audit at host expense, telemetry data + dispense logs + refund logs accessible. Modern operators welcome audits; legacy operators resist — bad sign.", audience: "Procurement" },
      { question: "What about customer refunds?", answer: "Standard modern contract: customer refunds (telemetry-detected failed vends + customer-requested refunds) deducted from gross before commission calculation. Operator absorbs refund cost. Some legacy operators charge host for refunds — avoid or reduce commission rate to compensate.", audience: "Property Owners" },
      { question: "How do we get a higher commission rate?", answer: "Levers: higher foot traffic / placement volume, exclusivity (single operator on site), term length (3-5 year contract), host capital contribution (specialty equipment), competitive RFP with multiple operator bids. Premium placements (airport concourse, major venue, hospital system) reach 30-40% with right combination.", audience: "Property Owners" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending commission industry standards", url: "https://www.namanow.org/", note: "Industry trade association covering commission rates and statement standards" },
      { label: "Vending Times — commission practice coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering commission rates and contract structures" },
      { label: "AICPA — commission accounting standards", url: "https://www.aicpa-cima.com/", note: "Federal-recognized accounting standards for commission reporting and audit" },
      { label: "Vending Market Watch — operator economics coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering operator economics and commission structures" },
      { label: "FTC — Business Opportunity Rule (commission disclosures)", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing commission disclosures in business opportunity sales" },
    ],
  }),
  relatedGuides({
    heading: "Related vending locator guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending location agreements and contracts", description: "Contract structure, term length, exclusivity, and termination provisions at vending placements.", href: "/vending-machine-locators/vending-location-agreements-and-contracts" },
      { eyebrow: "Decision", title: "Should you pay for vending locations?", description: "Paid locator vs DIY cold calling economics and hybrid pattern for scaling operators.", href: "/vending-machine-locators/should-you-pay-for-vending-locations" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Locator services, contracts, commissions, agreements, and business-type fit across vending placement strategies.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
