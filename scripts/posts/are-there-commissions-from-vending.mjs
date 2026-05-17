import { seedPost, tldr, statStrip, comparisonTable, sampleStatement, specList, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("are-there-commissions-from-vending", [
  tldr({
    heading: "Are commissions paid from vending — and how do they actually work?",
    paragraph:
      "Yes, commissions are a standard part of most full-service vending contracts in the United States. A vending commission is a recurring payment the operator makes to the host (the business, school, hospital, factory, gym, or property owner whose location houses the vending equipment) in exchange for the right to place machines and earn revenue from them. Five things shape whether commission applies and what it's worth: (1) the contract type — full-service / operator-owned arrangements pay commission, lease-to-own and host-owned setups do not (host keeps gross instead), (2) the commission rate — typically 5-25% of net sales at standard placements, with premium placements (high foot traffic, exclusivity, longer terms) reaching 30-40% and some marginal placements receiving 0% commission because volume can't support it, (3) the calculation basis — gross sales vs net sales (sales tax excluded) vs net sales (sales tax + refunds excluded) vs profit share, with up to 20-40% commission delta from basis selection alone, (4) the payment cadence — monthly is modern standard, quarterly is acceptable, annual lump sum is legacy practice (avoid), (5) the statement format — per-machine itemized + telemetry-backed dispense data is modern standard; opaque summary statements are legacy and should be rejected. Hosts at low-volume placements (under 50 employees, low foot traffic) may receive 0% commission because operator cannot economically support both the equipment and a commission stream — in those cases, the host receives free equipment, free service, and free planogram management without commission. Modern operators publish commission structures transparently; legacy operators may obscure structure. Verify at proposal and reference-check before signing.",
    bullets: [
      { emphasis: "Yes — commissions are standard at full-service vending contracts:",
        text: "5-25% of net sales typical at standard placements. Premium placements (high traffic, exclusivity, longer terms) reach 30-40%. Marginal placements may be 0% — operator cannot economically support equipment + commission at low volume." },
      { emphasis: "Five things shape commission value:",
        text: "Contract type, commission rate, calculation basis, payment cadence, statement format. Each negotiable; modern operators publish transparently; legacy operators may obscure." },
      { emphasis: "Hosts at low-volume placements may receive 0% commission:",
        text: "Operator cannot economically support equipment + service + commission at low volume. Host receives free equipment, free service, free planogram management — but no commission. Common at sub-50-employee placements." },
    ],
  }),
  statStrip({
    heading: "Vending commission benchmarks",
    stats: [
      { number: "5-25%", label: "standard placement rate", sub: "of net sales", accent: "blue" },
      { number: "30-40%", label: "premium placement rate", sub: "high traffic, exclusivity, longer term", accent: "blue" },
      { number: "0%", label: "marginal placement rate", sub: "low volume cannot support commission", accent: "orange" },
      { number: "Monthly", label: "modern payment cadence", sub: "per-machine itemized standard", accent: "green" },
    ],
  }),
  comparisonTable({
    heading: "Contract types and commission applicability",
    sub: "Commission applies at full-service / operator-owned contracts. Lease-to-own and host-owned setups have host keep gross instead.",
    headers: ["Contract type", "Equipment owner", "Operator role", "Commission paid to host"],
    rows: [
      ["Full-service operator-owned", "Operator", "Equipment + service + restocking + planogram", "Yes — 5-25% typical"],
      ["Full-service revenue share", "Operator", "Same as above + pricing flexibility", "Yes — revenue share %"],
      ["Lease-to-own (managed service)", "Host (purchasing over term)", "Service + restocking only", "No — host keeps gross"],
      ["Host-owned + operator service", "Host", "Service + restocking only", "No — host keeps gross minus fees"],
      ["Host-owned + host-managed", "Host", "None — host manages directly", "No — host keeps full gross"],
      ["Marginal low-volume placement", "Operator", "Equipment + service", "0% — volume cannot support"],
      ["Sponsored / branded placement", "Brand / operator", "Brand-funded + operator service", "Variable — brand-funded fees"],
    ],
  }),
  sampleStatement({
    heading: "Sample monthly commission statement (modern operator)",
    sub: "Per-machine itemized + telemetry-backed dispense data. Legacy operators provide opaque summary statements — avoid.",
    accountName: "Sample host — 320-employee mid-size office building",
    period: "October 2025",
    issuedDate: "November 5, 2025",
    paymentMethod: "ACH to host account ending in 7842",
    calculationBasis: "Net sales = gross sales minus sales tax minus customer refunds; commission rate 15% flat per signed contract Section 2.1",
    lines: [
      { machine_label: "MX-2841 · Snack tower", location: "1st floor main break room", units: 1432, gross: "$2,148.00", refunds: "$18.50", net: "$2,129.50", rate: "15%", commission: "$319.43" },
      { machine_label: "MX-2842 · Refrigerated beverage cooler", location: "1st floor main break room", units: 1087, gross: "$1,956.60", refunds: "$12.00", net: "$1,944.60", rate: "15%", commission: "$291.69" },
      { machine_label: "MX-2843 · Combo snack-and-beverage", location: "3rd floor satellite break room", units: 612, gross: "$886.40", refunds: "$6.50", net: "$879.90", rate: "15%", commission: "$131.99" },
    ],
    totalGross: "$4,991.00",
    totalRefunds: "$37.00",
    totalNet: "$4,954.00",
    totalCommission: "$743.11",
    footnote: "Per-SKU detail (38 line items across 3 machines) attached as CSV. Telemetry dispense count verifiable in operator portal at any time. Statement issued by 5th of following month per contract Section 4.3. Disputes must be raised within 30 days per Section 7.2 of the master service agreement. ACH payment processed within 10 business days of statement issuance.",
  }),
  specList({
    heading: "Vending commission specifications",
    items: [
      { label: "Contract type determines commission applicability", value: "Full-service / operator-owned contracts pay commission to host. Lease-to-own (host purchasing equipment over term) and host-owned (host owns equipment outright) setups have host keep gross instead of receiving commission. Verify contract type at proposal — operator-favorable language sometimes conflates contract types. Operator-owned + full-service is the default at most US vending contracts." },
      { label: "Commission rate range", value: "5-25% of net sales typical at standard placements. Range driven by foot-traffic volume, exclusivity, term length, host capital contribution (electrical, build-out), and operator margin pressure. Premium placements (airport concourse, major event venue, exclusive multi-year terms, 1,000+ employee corporate offices) can reach 30-40%. Marginal low-volume placements may be 0% because operator cannot economically support equipment + commission at low volume." },
      { label: "Calculation basis — specify exactly", value: "Verify basis + write into contract Section 2.1 (or equivalent). 'Net sales' alone is ambiguous — specify exactly which deductions. Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds'. Card processing deduction is operator-favorable; resist if proposed. Profit share is operator-favorable; opaque COGS structure. Different bases produce 20-40% different commission dollars at same gross sales." },
      { label: "Payment cadence — monthly standard", value: "Monthly cadence at modern operators. Quarterly at smaller operators (acceptable but creates cashflow friction). Annual lump sum at some legacy operators — avoid; bad for host cashflow + budget planning. Write payment cadence into contract Section 4.1 + payment method (ACH preferred over check)." },
      { label: "Statement format — itemized + telemetry", value: "Per-machine itemized monthly statement with gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method. Telemetry-backed dispense count + price per SKU verifiable. Per-SKU detail attached as CSV preferred. Modern operator standard; legacy operators provide opaque summary statements (avoid)." },
      { label: "Tiered commission structures", value: "Escalating rate at revenue thresholds (e.g., 15% on first $50K, 18% on $50K-$100K, 22% above $100K) align operator + host incentives toward placement performance. Modern operators support; legacy operators resist. Build into contract at signature; produces higher host commission at successful placements." },
      { label: "Marginal placement 0% commission rationale", value: "Sub-50-employee offices, low-traffic facilities, and some specialty placements may receive 0% commission because operator cannot economically support equipment ($8K-$25K capital), service routes ($300-$800 monthly cost), and a commission stream at low volume. Host receives free equipment, free service, free planogram management without commission. Common and economically rational; not operator manipulation." },
      { label: "Dispute resolution + audit rights", value: "Section 7.2 standard — 30-day dispute window from statement issue. Audit rights — host may audit operator records once annually, with 30-day notice, at host expense. Modern operators support; legacy operators resist. Critical for accountability. Build into contract." },
      { label: "Term length + exit rights", value: "3-5 years typical at standard commission contracts. Longer terms (5-10) support premium rates but reduce flexibility. Exit rights — termination for cause (service-SLA failure, statement non-compliance) at 30-60 day notice. Termination for convenience at 90-180 day notice. Build into contract; modern operators support exit rights, legacy operators resist." },
      { label: "Tax + 1099 reporting implications", value: "Vending commissions paid to hosts are taxable income; operator issues 1099-MISC or 1099-NEC where annual commission exceeds IRS reporting threshold ($600 typical). Hosts coordinate with tax advisor on commission accounting. Operator's commission expense is deductible operating cost. Specify reporting expectations in contract." },
    ],
  }),
  decisionTree({
    heading: "Should you expect commission at your placement?",
    question: "Is your placement above 50 employees / above 200 daily foot-traffic count, with multi-machine equipment placement and 2+ year contract term offered?",
    yesBranch: {
      title: "Expect commission — negotiate rate + basis + cadence + statement format",
      description: "Standard placement supports 5-25% commission on net sales. Verify calculation basis (write 'Net sales = gross minus sales tax minus refunds' into Section 2.1). Specify monthly cadence + ACH payment + per-machine itemized statement + telemetry-backed dispense data + 30-day dispute window + annual audit right. Tiered commission structure (escalating rate at thresholds) supports premium upside.",
      finalTone: "go",
      finalLabel: "Negotiate commission terms",
    },
    noBranch: {
      title: "Expect 0% commission — focus on free equipment + service + planogram value",
      description: "Sub-50-employee / low-traffic placement cannot economically support both operator equipment investment and a commission stream. Operator typically provides equipment, service routes, and planogram management at no cost to host; host receives free amenity. Confirm operator commitment to service SLA + planogram refresh + dietary coverage + healthy share. Reassess commission at headcount / volume growth.",
      finalTone: "stop",
      finalLabel: "Free service, no commission",
    },
  }),
  tipCards({
    heading: "Five commission contract mistakes",
    sub: "All preventable with proposal review + reference checks at similar host accounts.",
    items: [
      { title: "Assuming all contracts pay commission", body: "Only full-service / operator-owned contracts pay commission. Lease-to-own and host-owned setups have host keep gross instead. Verify contract type at proposal; operator-favorable language sometimes conflates contract types. Marginal low-volume placements may pay 0% commission economically." },
      { title: "Accepting 'net sales' without basis specification", body: "'Net sales' alone is ambiguous — specify exactly which deductions apply (sales tax, refunds, card processing, profit share). Different bases produce 20-40% different commission dollars. Verify at proposal + write into contract Section 2.1." },
      { title: "Annual lump-sum payment cadence", body: "Bad for host cashflow + budget planning. Monthly cadence at modern operators standard. Quarterly acceptable at smaller operators. Write monthly cadence + ACH payment method into contract Section 4.1." },
      { title: "Opaque summary statement format", body: "Legacy operators provide single-page summary statement with operator-claimed numbers + no audit trail. Modern operators provide per-machine itemized + telemetry-backed + per-SKU CSV. Write itemized statement requirement into contract. Verify at proposal demo." },
      { title: "No tax / 1099 reporting coordination", body: "Vending commissions are taxable income; operator issues 1099 where annual commission exceeds IRS reporting threshold ($600 typical). Coordinate with tax advisor on commission accounting. Specify reporting expectations in contract; avoid surprise tax-time reconciliation issues." },
    ],
  }),
  inlineCta({
    text: "Want the commission contract framework (rate + basis + cadence + statement + audit + tax reporting)?",
    buttonLabel: "Get the commission framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support commission contract negotiation across small office, mid-size enterprise, school district, hospital, factory, gym, and property management host accounts — including commission rate benchmarking, calculation basis specification, statement format coordination, tiered structure design, dispute resolution + audit right negotiation, marginal-placement 0% commission rationale, and 1099 tax reporting coordination. The benchmarks reflect operator-side data and host account feedback at contract signature.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Are commissions paid from vending?", answer: "Yes — commissions are standard at full-service vending contracts in the United States. A vending commission is a recurring payment the operator makes to the host in exchange for the right to place machines and earn revenue from them. 5-25% of net sales typical at standard placements. Lease-to-own and host-owned contracts do not pay commission; host keeps gross instead.", audience: "Hosts" },
      { question: "What's a typical commission rate?", answer: "5-25% of net sales is industry-typical at standard placements. Range driven by foot-traffic volume, exclusivity, term length, host capital contribution. Premium placements (airport concourse, major event venue, exclusive multi-year terms, 1,000+ employee offices) can reach 30-40%. Marginal low-volume placements may be 0% — operator cannot economically support equipment + commission at low volume.", audience: "Hosts" },
      { question: "Why would my placement receive 0% commission?", answer: "Sub-50-employee offices, low-traffic facilities, and some specialty placements may receive 0% commission because operator cannot economically support equipment ($8K-$25K capital), service routes ($300-$800 monthly cost), and a commission stream at low volume. Host receives free equipment, free service, free planogram management. Common and economically rational; not operator manipulation.", audience: "Small Business Owners" },
      { question: "What calculation basis should we use?", answer: "Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds'. Specify exactly in contract Section 2.1. 'Net sales' alone is ambiguous. Profit share and net profit share are operator-favorable; opaque COGS structures. Resist card processing deduction; operator-favorable.", audience: "Hosts" },
      { question: "How often should commission be paid?", answer: "Monthly cadence at modern operators standard. Quarterly at smaller operators (acceptable but creates cashflow friction). Annual lump sum at some legacy operators — avoid; bad for host cashflow + budget planning. Write monthly cadence + ACH payment method into contract.", audience: "Business Managers" },
      { question: "What should the statement include?", answer: "Per-machine itemized monthly statement with gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method. Telemetry-backed dispense count + price per SKU verifiable. Per-SKU detail attached as CSV. Modern operator standard; legacy operators provide opaque summary statements (avoid).", audience: "Business Managers" },
      { question: "Are commissions taxable?", answer: "Yes — vending commissions paid to hosts are taxable income. Operator issues 1099-MISC or 1099-NEC where annual commission exceeds IRS reporting threshold ($600 typical). Hosts coordinate with tax advisor on commission accounting. Operator's commission expense is deductible operating cost. Specify reporting expectations in contract.", audience: "Finance / Accounting" },
      { question: "Can we audit operator records?", answer: "Yes — write annual audit right into contract Section 7.2 (or equivalent). Host may audit operator records once annually, with 30-day notice, at host expense. Modern operators support; legacy operators resist. Critical for accountability. Dispute window 30 days from statement issue standard.", audience: "Hosts" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association — vending contract standards", url: "https://www.namanow.org/", note: "Industry trade association — commission structure benchmarks + contract standards" },
      { label: "IRS — vending machine sales tax + 1099 reporting", url: "https://www.irs.gov/businesses/small-businesses-self-employed/vending-machines", note: "Federal tax guidance covering vending revenue + commission reporting" },
      { label: "BOMA — Building Owners and Managers Association — vending contract guidance", url: "https://www.boma.org/", note: "Property owner standards covering vending contracts + commission" },
      { label: "ASBO — Association of School Business Officials — vending contract management", url: "https://asbointl.org/", note: "Industry trade association covering school district host-side contract management" },
      { label: "FTC — contract guidance for service agreements", url: "https://www.ftc.gov/business-guidance/industry/franchises", note: "Federal contract guidance applicable to vending operator agreements" },
    ],
  }),
  relatedGuides({
    heading: "Related vending commission guides",
    items: [
      { eyebrow: "Sister guide", title: "Commissions in vending contracts", description: "Commission rate, calculation basis, payment cadence, statement format, tiered structures, and audit rights.", href: "/vending-faq/commissions-in-vending-contracts" },
      { eyebrow: "Operations", title: "Do businesses earn commission from vending", description: "Host-side commission economics, threshold for commission applicability, and marginal placement scenarios.", href: "/vending-faq/do-businesses-earn-commission-from-vending" },
      { eyebrow: "Hub", title: "All vending FAQ guides", description: "Common questions covering commissions, contracts, equipment, healthy share, dietary coverage, and operator selection.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
