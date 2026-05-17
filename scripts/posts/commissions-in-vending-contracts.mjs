import { seedPost, tldr, statStrip, comparisonTable, sampleStatement, specList, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("commissions-in-vending-contracts", [
  tldr({
    heading: "How should commissions be structured in vending contracts?",
    paragraph:
      "Commissions in vending contracts have five negotiable dimensions that materially affect host revenue: (1) commission rate — industry-typical 10-25% of net sales, with premium placements (high foot-traffic, exclusivity, longer terms) reaching 30-40%, (2) calculation basis — 'gross sales' vs 'net sales (sales tax excluded)' vs 'net sales (sales tax + refunds + card processing excluded)' vs 'profit share' produces 20-40% different commission dollars at the same machine, (3) payment cadence — monthly standard at modern operators, quarterly at smaller operators, annual lump sum at some legacy operators (avoid — bad for host cashflow), (4) statement format — per-machine itemized monthly with telemetry-backed dispense data is modern standard; opaque summary statements (operator-claimed numbers, no audit trail) are legacy practice and should be avoided, (5) tiered commission structures — escalating rate at revenue thresholds (e.g., 15% on first $50K, 18% on $50K-$100K, 22% above $100K) align operator + host incentives toward placement performance. Build all five dimensions into operator contract at signature; renegotiation after install is hard. Modern operators support all five; legacy operators resist itemized statements + tiered structures. Verify at proposal demo + reference checks before signing.",
    bullets: [
      { emphasis: "Five negotiable dimensions in commission structure:",
        text: "Rate, calculation basis, payment cadence, statement format, tiered structure. All five build into contract at signature." },
      { emphasis: "Calculation basis produces 20-40% commission delta:",
        text: "Same gross sales produce different commission dollars depending on basis. Verify basis + write into contract before signing." },
      { emphasis: "Itemized monthly statement with telemetry data modern standard:",
        text: "Per-machine gross, refunds, sales tax, net, rate, commission. Opaque summary statements legacy practice — avoid." },
    ],
  }),
  statStrip({
    heading: "Vending commission contract benchmarks",
    stats: [
      { number: "10-25%", label: "industry-typical rate", sub: "of net sales", accent: "blue" },
      { number: "30-40%", label: "premium placement rate", sub: "high foot-traffic, exclusivity, longer term", accent: "blue" },
      { number: "20-40%", label: "basis-driven commission delta", sub: "gross vs net vs profit share", accent: "orange" },
      { number: "Monthly", label: "statement cadence standard", sub: "per-machine itemized + telemetry-backed", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Commission calculation basis comparison",
    sub: "Same gross sales ($5,000 monthly) — different calculation basis produces different commission dollars to host. Verify basis at proposal.",
    headers: ["Calculation basis", "What it deducts", "Example commission ($5K gross, 20% rate)", "Verifiability"],
    rows: [
      ["Gross sales", "Nothing", "$1,000", "Highest — direct from telemetry"],
      ["Net sales (sales tax excluded)", "Sales tax (6-9% typical)", "$925-$940", "High — tax rate verifiable"],
      ["Net sales (sales tax + refunds excluded)", "Sales tax + customer refunds", "$905-$925", "High — refund log verifiable"],
      ["Net sales (sales tax + refunds + card processing)", "Tax + refunds + 2-4% card processing", "$815-$890", "Medium — processing rate verifiable"],
      ["Profit share", "Net sales minus COGS (cost of goods)", "$300-$500 (varies by mix)", "Low — operator-claimed COGS"],
      ["Net profit share", "After all operator costs", "$100-$300 (varies)", "Lowest — opaque cost structure"],
    ],
  }),
  sampleStatement({
    heading: "Sample monthly commission statement (modern operator)",
    sub: "Per-machine itemized + telemetry-backed dispense data. Verify your operator provides this format. Legacy operators provide opaque summary statements — avoid.",
    accountName: "Sample property — multi-tenant office building",
    period: "October 2025",
    issuedDate: "November 5, 2025",
    paymentMethod: "ACH to host account ending in 4271",
    calculationBasis: "Net sales (gross minus sales tax + customer refunds); commission tiered 15% / 18% / 22% per signed contract",
    lines: [
      { machine_label: "MX-1102 · Snack/Beverage combo", location: "Lobby vending bank", units: 1247, gross: "$2,612.50", refunds: "$22.00", net: "$2,590.50", rate: "18%", commission: "$466.29" },
      { machine_label: "MX-1103 · Cold beverage", location: "2nd floor cafeteria", units: 824, gross: "$1,498.75", refunds: "$11.25", net: "$1,487.50", rate: "18%", commission: "$267.75" },
      { machine_label: "MX-1104 · Snack/Beverage combo", location: "7th floor break room", units: 612, gross: "$911.50", refunds: "$8.50", net: "$903.00", rate: "15%", commission: "$135.45" },
    ],
    totalGross: "$5,022.75",
    totalRefunds: "$41.75",
    totalNet: "$4,981.00",
    totalCommission: "$869.49",
    footnote: "Per-SKU detail (47 line items across 3 machines) attached as CSV. Telemetry dispense count verifiable in operator portal at any time. Statement issued by 5th of following month per contract Section 4.3. Disputes must be raised within 30 days per Section 7.2 of the master service agreement.",
  }),
  specList({
    heading: "Commission contract specifications",
    items: [
      { label: "Commission rate range", value: "Industry-typical 10-25% of net sales. Range driven by foot-traffic volume, exclusivity, term length, host capital contribution (electrical, build-out). Premium placements (airport concourse, major event venue, exclusive multi-year terms) can reach 30-40%. Below 10% — operator margin pressure; revisit if rate proposed is below 10%." },
      { label: "Calculation basis — write into contract", value: "Verify basis + write into contract Section 2.1 (or equivalent). 'Net sales' alone is ambiguous — specify exactly which deductions. Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds'. Card processing deduction is operator-favorable; resist if proposed. Profit share is operator-favorable; opaque COGS structure." },
      { label: "Payment cadence — monthly standard", value: "Monthly cadence at modern operators. Quarterly at smaller operators (acceptable but creates cashflow friction). Annual lump sum at some legacy operators — avoid; bad for host cashflow + budget planning. Write payment cadence into contract Section 4.1 + payment method (ACH preferred over check)." },
      { label: "Statement format — per-machine itemized + telemetry", value: "Per-machine itemized monthly statement with gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method. Telemetry-backed dispense count + price per SKU verifiable. Per-SKU detail attached as CSV preferred. Modern operator standard; legacy operators provide opaque summary statements (avoid)." },
      { label: "Tiered commission structures", value: "Escalating rate at revenue thresholds (e.g., 15% on first $50K, 18% on $50K-$100K, 22% above $100K) align operator + host incentives toward placement performance. Modern operators support; legacy operators resist. Build into contract at signature; produces higher host commission at successful placements." },
      { label: "Dispute resolution + audit rights", value: "Section 7.2 (or equivalent) standard — 30-day dispute window from statement issue. Audit rights — host may audit operator records once annually, with 30-day notice, at host expense. Modern operators support; legacy operators resist. Critical for accountability. Build into contract." },
      { label: "Equipment + service obligations tied to commission", value: "Operator obligations — machine count, equipment age (typically under 5 years preferred), service-SLA (typically 24-48 hour response), planogram refresh cadence (quarterly), stockout rate target (under 5%), refund response window. Tie to commission rate — premium rates require premium service." },
      { label: "Term length + exit rights", value: "Term length 3-5 years typical; longer terms (5-10) support premium rates but reduce flexibility. Exit rights — termination for cause (service-SLA failure, statement non-compliance) at 30-60 day notice. Termination for convenience at 90-180 day notice. Build into contract; modern operators support exit rights, legacy operators resist." },
      { label: "Exclusivity clauses", value: "Exclusivity grants operator sole right to vend at property. Supports premium commission rates (operator amortizes equipment + service overhead across guaranteed volume). Some hosts resist; reduces flexibility. Write into contract Section 3.1 with carve-outs for cafeteria / break-room third-party (coffee service, etc.) where applicable." },
    ],
  }),
  decisionTree({
    heading: "Should you accept a profit-share commission structure?",
    question: "Is the operator proposing 'profit share' (operator-claimed COGS deducted) or 'net profit share' (after all operator costs) instead of a percentage-of-sales structure?",
    yesBranch: {
      title: "Push back — request percentage-of-sales (net sales basis)",
      description: "Profit share and net profit share are operator-favorable structures with opaque COGS / cost structures. Host cannot verify; commission dollars 20-40% lower than equivalent percentage-of-net-sales at most placements. Standard industry practice is percentage-of-net-sales (sales tax + refunds excluded). Request this structure or look at alternative operators.",
      finalTone: "stop",
      finalLabel: "Reject profit-share structure",
    },
    noBranch: {
      title: "Proceed — verify net sales calculation basis",
      description: "Percentage-of-sales structure is standard. Verify exactly which deductions apply: 'gross sales' (highest commission to host), 'net sales (sales tax excluded)', 'net sales (sales tax + refunds excluded)' (industry standard), 'net sales (sales tax + refunds + card processing)' (operator-favorable). Write basis into contract Section 2.1.",
      finalTone: "go",
      finalLabel: "Verify basis + commission rate",
    },
  }),
  tipCards({
    heading: "Five commission contract mistakes",
    sub: "All preventable with proposal review + reference checks at similar host accounts.",
    items: [
      { title: "Accepting 'net sales' without basis specification", body: "'Net sales' alone is ambiguous — specify exactly which deductions apply (sales tax, refunds, card processing, profit share). Different bases produce 20-40% different commission dollars. Verify at proposal + write into contract Section 2.1." },
      { title: "Annual lump-sum payment cadence", body: "Bad for host cashflow + budget planning. Monthly cadence at modern operators standard. Quarterly acceptable at smaller operators. Write monthly cadence + ACH payment method into contract Section 4.1." },
      { title: "Opaque summary statement format", body: "Legacy operators provide single-page summary statement with operator-claimed numbers + no audit trail. Modern operators provide per-machine itemized + telemetry-backed + per-SKU CSV. Write itemized statement requirement into contract. Verify at proposal demo." },
      { title: "No tiered commission structure", body: "Flat-rate commission misses upside at successful placements. Tiered structures (escalating rate at revenue thresholds) align operator + host incentives. Build into contract; modern operators support, legacy operators resist." },
      { title: "No dispute resolution + audit rights", body: "Section 7.2 standard — 30-day dispute window + annual audit right with 30-day notice. Modern operators support; legacy operators resist. Critical for accountability. Build into contract at signature." },
    ],
  }),
  inlineCta({
    text: "Want the commission contract framework (rate + basis + cadence + statement + tiered + audit)?",
    buttonLabel: "Get the commission framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported commission contract negotiation across property management, school districts, office buildings, and industrial host accounts — including commission rate benchmarking, calculation basis specification, statement format coordination, tiered structure design, and dispute resolution + audit right negotiation. The benchmarks reflect operator-side data + host account feedback at contract signature.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's a typical commission rate?", answer: "10-25% of net sales is industry-typical. Range driven by foot-traffic volume, exclusivity, term length, host capital contribution. Premium placements (airport concourse, major event venue, exclusive multi-year terms) can reach 30-40%. Below 10% — operator margin pressure; revisit if proposed below 10%.", audience: "Hosts" },
      { question: "What calculation basis should we use?", answer: "Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds'. Specify exactly in contract Section 2.1. 'Net sales' alone is ambiguous. Profit share and net profit share are operator-favorable; opaque COGS structures. Resist card processing deduction; operator-favorable.", audience: "Hosts" },
      { question: "How often should commission be paid?", answer: "Monthly cadence at modern operators standard. Quarterly at smaller operators (acceptable but creates cashflow friction). Annual lump sum at some legacy operators — avoid; bad for host cashflow + budget planning. Write monthly cadence + ACH payment method into contract.", audience: "Hosts / Business Managers" },
      { question: "What should the statement include?", answer: "Per-machine itemized monthly statement with gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method. Telemetry-backed dispense count + price per SKU verifiable. Per-SKU detail attached as CSV. Modern operator standard; legacy operators provide opaque summary statements (avoid).", audience: "Business Managers" },
      { question: "What is a tiered commission structure?", answer: "Escalating rate at revenue thresholds (e.g., 15% on first $50K, 18% on $50K-$100K, 22% above $100K). Aligns operator + host incentives toward placement performance. Modern operators support; legacy operators resist. Build into contract at signature; produces higher commission at successful placements.", audience: "Hosts" },
      { question: "Can we audit operator records?", answer: "Yes — write annual audit right into contract Section 7.2 (or equivalent). Host may audit operator records once annually, with 30-day notice, at host expense. Modern operators support; legacy operators resist. Critical for accountability. Dispute window 30 days from statement issue standard.", audience: "Hosts" },
      { question: "Should we accept exclusivity?", answer: "Exclusivity supports premium commission rates (operator amortizes overhead across guaranteed volume). Trade-off: reduces flexibility. Write into Section 3.1 with carve-outs for cafeteria / break-room third-party (coffee service, etc.) where applicable. Match decision to host preferences.", audience: "Procurement" },
      { question: "What's a fair term length?", answer: "3-5 years typical. Longer terms (5-10) support premium rates but reduce flexibility. Exit rights — termination for cause (service-SLA failure, statement non-compliance) at 30-60 day notice. Termination for convenience at 90-180 day notice. Build into contract; modern operators support exit rights.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — Vending and Refreshment Services Industry", url: "https://www.namanow.org/", note: "Industry trade association — commission structure benchmarks + contract standards" },
      { label: "IRS — vending machine sales tax + 1099 reporting", url: "https://www.irs.gov/businesses/small-businesses-self-employed/vending-machines", note: "Federal tax guidance covering vending revenue + commission reporting" },
      { label: "ASBO — Association of School Business Officials", url: "https://asbointl.org/", note: "Industry trade association covering host-side contract management" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering vending contracts + commission" },
      { label: "FTC — Franchise Rule + contract guidance", url: "https://www.ftc.gov/business-guidance/industry/franchises", note: "Federal contract guidance applicable to vending operator agreements" },
    ],
  }),
  relatedGuides({
    heading: "Related vending contract guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending location commission explained", description: "Calculation basis detail, statement format examples, telemetry-backed verification patterns.", href: "/vending-contracts/vending-location-commission-explained" },
      { eyebrow: "Operations", title: "Hidden fees in vending services", description: "Operator-side fees beyond commission — install fees, equipment fees, service fees, exit fees.", href: "/vending-contracts/are-there-hidden-fees-in-vending-services" },
      { eyebrow: "Hub", title: "All vending contract guides", description: "Commission, statements, term length, exit rights, dispute resolution at host placements.", href: "/vending-contracts" },
    ],
  }),
]);
process.exit(0);
