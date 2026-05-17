import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, sampleStatement, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-businesses-earn-commission-from-vending", [
  tldr({
    heading: "Do businesses earn commission from vending machines — and how much should they expect?",
    paragraph:
      "Yes, businesses (hosts) that allow a vending operator to place machines on their property typically earn commission — a percentage of net sales paid back to the host. The industry-typical rate range is 10-25% of net sales, with premium placements (high foot-traffic, exclusivity, longer term, host capital contribution) reaching 30-40% and below-10% rates signaling operator margin pressure that should be revisited at proposal. Five variables drive the rate at any specific placement: (1) foot-traffic volume — placements with 200+ daily transactions support higher rates than placements with 20 daily transactions, (2) exclusivity — granting operator sole vending rights at the property supports premium rates (operator amortizes equipment + service overhead across guaranteed volume), (3) term length — 5-7 year terms support premium rates over 1-3 year terms, (4) host capital contribution — host providing electrical work, build-out, or other infrastructure supports premium rate, (5) calculation basis — 'net sales' alone is ambiguous; specify exactly which deductions apply (sales tax, refunds, card processing, profit share). Same gross sales produce 20-40% different commission dollars depending on basis. Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds' at 10-25% rate, monthly cadence, per-machine itemized statement with telemetry-backed dispense data. Modern operators support all five variables transparently with audit-ready statements; legacy operators provide opaque summaries. Verify rate + basis + cadence + statement format at proposal demo + write all four into contract Section 4 before signing.",
    bullets: [
      { emphasis: "Yes — 10-25% of net sales typical commission range:",
        text: "Premium placements (high foot-traffic, exclusivity, longer term, host capital) reach 30-40%. Below 10% signals operator margin pressure; revisit at proposal." },
      { emphasis: "Five variables drive rate at any placement:",
        text: "Foot-traffic volume, exclusivity, term length, host capital contribution, calculation basis. All five compose into final commission rate at signature." },
      { emphasis: "Calculation basis produces 20-40% commission delta:",
        text: "Same gross sales — different basis (gross vs net vs profit share) produces different commission dollars. Verify exactly which deductions apply." },
    ],
  }),
  statStrip({
    heading: "Vending commission benchmarks",
    stats: [
      { number: "10-25%", label: "industry-typical rate", sub: "of net sales", accent: "blue" },
      { number: "30-40%", label: "premium placement rate", sub: "high foot-traffic + exclusivity + longer term", accent: "blue" },
      { number: "20-40%", label: "basis-driven commission delta", sub: "gross vs net vs profit share", accent: "orange" },
      { number: "Monthly", label: "payment cadence standard", sub: "per-machine itemized + telemetry-backed", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending commission rate ranges — by placement profile",
    sub: "Five variables drive rate at any placement. Match expected rate to placement profile.",
    headers: ["Placement profile", "Typical rate", "Drivers"],
    rows: [
      ["High-traffic office (300+ daily transactions)", "20-30% of net sales", "Volume, exclusivity, often 5-year term"],
      ["Standard office / business park", "15-22% of net sales", "Moderate volume, often non-exclusive"],
      ["School district / college campus", "15-25% of net sales", "Volume, exclusivity, host capital contribution"],
      ["Hospital — employee-facing", "12-20% of net sales", "Often directed to wellness fund, not general fund"],
      ["Hospital — patient family + visitor", "10-15% of net sales", "Lower-cost pricing tier reduces commission base"],
      ["Airport concourse — premium", "30-40% of net sales", "Premium foot-traffic + exclusivity + 10-year term"],
      ["Manufacturing / industrial — 24/7", "15-22% of net sales", "24/7 demand, often exclusivity"],
      ["Construction / job site (temp placement)", "8-15% of net sales", "Lower volume, lower term, restock complexity"],
      ["Government / federal facility", "12-22% of net sales", "Compliance overhead, security clearance, fed-only menu"],
      ["Retail / consumer-facing", "15-25% of net sales", "Volume, exclusivity, often co-branded"],
    ],
  }),
  costBreakdown({
    heading: "Sample monthly commission flow at standard commercial office",
    sub: "Standard commercial office, 4 machines, modern operator, monthly cadence, per-machine itemized statement. 18% rate on net sales.",
    items: [
      { label: "Gross sales — Machine M-1101 (snack/beverage combo, lobby)", amount: "$2,612.50", note: "1,247 dispenses at average ticket $2.10" },
      { label: "Less: sales tax + customer refunds", amount: "($28.50)", note: "8% sales tax + $22 customer refunds" },
      { label: "Net sales (M-1101)", amount: "$2,584.00", note: "Per contract Section 4.1 basis" },
      { label: "Commission on M-1101 at 18%", amount: "$465.12", note: "Monthly cadence per Section 4.2" },
      { label: "Net sales (M-1102, M-1103, M-1104 — combined)", amount: "$3,981.00", note: "Per-machine itemized in attachment" },
      { label: "Commission on M-1102 + M-1103 + M-1104 at 18%", amount: "$716.58", note: "Telemetry-backed dispense data" },
    ],
    totalLabel: "Total monthly commission to host",
    totalAmount: "$1,181.70",
  }),
  specList({
    heading: "Vending commission specifications",
    items: [
      { label: "Rate range — 10-25% industry-typical", value: "10-25% of net sales is industry-typical. Range driven by foot-traffic volume, exclusivity, term length, host capital contribution. Premium placements (airport concourse, major event venue, exclusive multi-year terms) can reach 30-40%. Below 10% — operator margin pressure; revisit if rate proposed is below 10%. Modern operators benchmark rate transparently at proposal with comparable-placement data." },
      { label: "Calculation basis — specify exactly which deductions", value: "'Net sales' alone is ambiguous; specify exactly. Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds'. Card processing deduction is operator-favorable; resist if proposed. Profit share is operator-favorable; opaque COGS structure. Write basis into Section 4.1. Different bases produce 20-40% different commission dollars at same gross sales." },
      { label: "Payment cadence — monthly standard", value: "Monthly cadence at modern operators standard. Quarterly at smaller operators (acceptable but creates cashflow friction). Annual lump sum at some legacy operators — avoid; bad for host cashflow + budget planning. Write monthly cadence + ACH payment method into Section 4.2." },
      { label: "Statement format — per-machine itemized + telemetry", value: "Per-machine itemized monthly statement with gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method. Telemetry-backed dispense count + price per SKU verifiable. Per-SKU detail attached as CSV preferred. Modern operator standard; legacy operators provide opaque summary statements (avoid)." },
      { label: "Tiered commission structures", value: "Escalating rate at revenue thresholds (e.g., 15% on first $50K, 18% on $50K-$100K, 22% above $100K) align operator + host incentives toward placement performance. Modern operators support; legacy operators resist. Build into contract at signature; produces higher host commission at successful placements." },
      { label: "Premium placement rate drivers", value: "Premium rates (30-40%) supported at: airport concourse, major event venue, large corporate campus (1000+ employees), large hospital (500+ beds), large university (15K+ students), premium retail. Drivers: foot-traffic volume, exclusivity, term length (5-10 years), host capital contribution, brand fit. Modern operators offer transparent premium-rate benchmarking." },
      { label: "Below-10% rates — investigate operator margin", value: "Rates below 10% signal operator margin pressure — operator may be cutting service, deferring equipment refresh, deploying older machines, running lower restock cadence. Revisit at proposal; ask operator to explain rate; consider alternative operators. Healthy operator margin supports better service to host." },
      { label: "Revenue direction — where commission goes", value: "Standard: facility general fund. Healthcare: often directed to employee wellness program / patient family fund / hospital foundation. Schools: often directed to student activity fund / athletic program / scholarship fund. Specify recipient account, payment method, reporting cadence in Section 4.3." },
      { label: "Audit rights — annual host audit", value: "Modern contracts include annual host audit right at host expense, 30-day notice. Audit verifies telemetry-backed dispense data matches statement commission amounts. Modern operators support; legacy operators resist. Build into Section 9." },
    ],
  }),
  sampleStatement({
    heading: "Sample monthly commission statement (modern operator)",
    sub: "Per-machine itemized + telemetry-backed dispense data. Verify your operator provides this format.",
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
    footnote: "Per-SKU detail (47 line items across 3 machines) attached as CSV. Telemetry dispense count verifiable in operator portal at any time. Statement issued by 5th of following month per contract Section 4.3. Disputes must be raised within 30 days per Section 7.2.",
  }),
  decisionTree({
    heading: "Should we expect a commission for our vending placement?",
    question: "Will the operator place equipment at our property AND stock + service the machines AND we provide power + space + access?",
    yesBranch: {
      title: "Yes — expect commission at 10-25% range",
      description: "Standard commercial vending placement carries 10-25% commission of net sales. Verify rate + basis + cadence + statement format at proposal. Premium placements (high foot-traffic, exclusivity, longer term, host capital contribution) reach 30-40%. Below 10% signals operator margin pressure; revisit. Modern operators benchmark rate transparently with comparable-placement data.",
      finalTone: "go",
      finalLabel: "COMMISSION · EXPECTED",
    },
    noBranch: {
      title: "Free-vend or operator-owned placement — no commission",
      description: "Some placements run on free-vend model (operator absorbs cost; products free to consumers — common at corporate-funded employee snack programs, healthcare-funded patient family snack programs, employer-funded wellness programs) or operator-owned business model (operator owns location; no commission flow). At these placements, no commission flows to host because operator + host are the same entity or host has chosen to subsidize consumption.",
      finalTone: "warn",
      finalLabel: "ALTERNATIVE MODEL",
    },
  }),
  tipCards({
    heading: "Five vending commission mistakes",
    sub: "All preventable with proposal review + reference checks at similar host placements.",
    items: [
      { title: "Accepting 'net sales' without basis specification", body: "'Net sales' alone is ambiguous; specify exactly which deductions apply (sales tax, refunds, card processing, profit share). Different bases produce 20-40% different commission dollars. Verify at proposal + write into contract Section 4.1." },
      { title: "Accepting below-10% rate without investigation", body: "Rates below 10% signal operator margin pressure — operator may be cutting service, deferring equipment refresh, deploying older machines. Revisit at proposal; ask operator to explain rate; consider alternative operators. Healthy operator margin supports better service." },
      { title: "Annual lump-sum payment cadence", body: "Bad for host cashflow + budget planning. Monthly cadence at modern operators standard. Quarterly acceptable at smaller operators. Write monthly cadence + ACH payment method into Section 4.2." },
      { title: "Opaque summary statement format", body: "Legacy operators provide single-page summary statement with operator-claimed numbers + no audit trail. Modern operators provide per-machine itemized + telemetry-backed + per-SKU CSV. Write itemized statement requirement into contract. Verify at proposal demo." },
      { title: "No tiered commission structure at high-volume placements", body: "Flat-rate commission misses upside at successful placements. Tiered structures (escalating rate at revenue thresholds) align operator + host incentives. Build into contract; modern operators support, legacy operators resist." },
    ],
  }),
  inlineCta({
    text: "Want the vending commission benchmarking guide (rate + basis + cadence + statement format)?",
    buttonLabel: "Get the commission guide",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support vending commission benchmarking + contract negotiation across property management, school districts, office buildings, hospitals, retail, and industrial host accounts — including commission rate benchmarking against comparable-placement data, calculation basis specification, statement format coordination, tiered structure design, audit right negotiation, and revenue direction (general fund vs wellness vs student activity). The benchmarks reflect operator-side data + host account feedback at contract signature.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do businesses earn commission from vending machines?", answer: "Yes, businesses (hosts) that allow a vending operator to place machines on their property typically earn commission — a percentage of net sales paid back to the host. Industry-typical rate is 10-25% of net sales, with premium placements reaching 30-40%. Standard at virtually all commercial vending placements except free-vend and operator-owned models.", audience: "Hosts / Property Managers" },
      { question: "What's a typical commission rate?", answer: "10-25% of net sales industry-typical. Range driven by foot-traffic volume, exclusivity, term length, host capital contribution. Premium placements (airport concourse, major event venue, exclusive multi-year terms) can reach 30-40%. Below 10% signals operator margin pressure; revisit if proposed below 10%.", audience: "Hosts" },
      { question: "What variables drive the commission rate?", answer: "Five variables: (1) foot-traffic volume (200+ daily transactions vs 20 daily), (2) exclusivity (sole vending rights at property), (3) term length (5-7 year terms support premium), (4) host capital contribution (electrical, build-out, infrastructure), (5) calculation basis (gross vs net vs profit share). All five compose into final commission rate at signature.", audience: "Procurement" },
      { question: "What calculation basis should we use?", answer: "Industry standard: 'Net sales = gross sales minus sales tax minus customer refunds'. Specify exactly in contract Section 4.1. 'Net sales' alone is ambiguous. Profit share and net profit share are operator-favorable; opaque COGS structures. Resist card processing deduction; operator-favorable.", audience: "Finance / Procurement" },
      { question: "How often should commission be paid?", answer: "Monthly cadence at modern operators standard. Quarterly at smaller operators (acceptable but creates cashflow friction). Annual lump sum at some legacy operators — avoid; bad for host cashflow + budget planning. Write monthly cadence + ACH payment method into contract Section 4.2.", audience: "Finance" },
      { question: "What should the statement include?", answer: "Per-machine itemized monthly statement with gross sales, refunds, sales tax, net sales, commission rate, commission amount, payment method. Telemetry-backed dispense count + price per SKU verifiable. Per-SKU detail attached as CSV. Modern operator standard; legacy operators provide opaque summary statements.", audience: "Business Manager" },
      { question: "Can we earn more than 25%?", answer: "Yes at premium placements — high foot-traffic + exclusivity + longer term + host capital contribution. Airport concourse, major event venue, large corporate campus, large hospital, large university, premium retail can reach 30-40%. Modern operators benchmark rate transparently with comparable-placement data.", audience: "Hosts" },
      { question: "Where does our commission go — general fund or somewhere else?", answer: "Specify in contract Section 4.3. Standard: facility general fund. Healthcare: often directed to employee wellness program / patient family fund / hospital foundation. Schools: often directed to student activity fund / athletic program / scholarship fund. Write recipient account + payment method + reporting cadence.", audience: "Finance / Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — Vending and Refreshment Services Industry", url: "https://www.namanow.org/", note: "Industry trade association — commission structure benchmarks + contract standards" },
      { label: "IRS — vending machine sales tax + 1099 reporting", url: "https://www.irs.gov/businesses/small-businesses-self-employed/vending-machines", note: "Federal tax guidance covering vending revenue + commission reporting" },
      { label: "ASBO — Association of School Business Officials", url: "https://asbointl.org/", note: "Industry trade association covering host-side contract management" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering vending contracts + commission" },
      { label: "U.S. Small Business Administration — vending business resources", url: "https://www.sba.gov/business-guide/", note: "Federal small-business guidance covering vending revenue, commission, and contracts" },
    ],
  }),
  relatedGuides({
    heading: "Related vending contract guides",
    items: [
      { eyebrow: "Sister guide", title: "Commissions in vending contracts", description: "Five negotiable dimensions in commission structure — rate, basis, cadence, statement, tiered.", href: "/vending-contracts/commissions-in-vending-contracts" },
      { eyebrow: "Operations", title: "Vending location commission explained", description: "Calculation basis detail, statement format examples, telemetry-backed verification patterns.", href: "/vending-contracts/vending-location-commission-explained" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, contracts, and ongoing operations for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
