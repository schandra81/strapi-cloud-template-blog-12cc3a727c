import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("are-there-hidden-fees-in-vending-services", [
  tldr({
    heading: "Are there hidden fees in vending services contracts?",
    paragraph:
      "'Hidden fees' is the wrong framing — most vending fee surprises come from contract scope ambiguity, not from operators sneaking charges in. The contract usually says exactly what's charged; the host site usually didn't ask enough questions at signature. The fees that produce post-signature surprise: relocation fees (when site changes the location of a machine after install), specialty equipment fees (when host adds a fresh food locker or micro-market beyond standard scope), termination fees (when host exits early), product-removal fees (when host requests SKU removal), and surcharge / processing fees (passed through from payment processor to host). Less commonly: pickup/disposal fees at contract end, machine-damage fees, and after-hours service fees. Best practice for hosts: ask the operator to walk through every fee category in their standard contract before signature, request sample monthly statement showing fee structure, and verify commission calculation methodology (gross vs net, after-refunds, after-processing-fees). Operators willing to walk through their fee structure transparently are the operators worth signing with.",
    bullets: [
      { emphasis: "Contract scope ambiguity, not sneaky charges:", text: "Most 'hidden fees' surprise sites that didn't read the contract carefully or didn't ask. The fees are usually in the contract; the host didn't know what they meant." },
      { emphasis: "Relocation, termination, specialty fees are the common surprises:", text: "Standard scope changes — moving a machine, exiting early, adding specialty equipment — produce fees the host didn't anticipate at signature. Ask about each at contract review." },
      { emphasis: "Transparent operators welcome the questions:", text: "Operators willing to walk through their fee structure in detail are the operators worth signing with. Operators who deflect or rush through the fee discussion are the ones to avoid." },
    ],
  }),
  statStrip({
    heading: "Vending service fee benchmarks",
    stats: [
      { number: "$0-300", label: "machine relocation fee", sub: "after install", accent: "orange" },
      { number: "$500-2K", label: "early termination fee", sub: "varies by contract term", accent: "orange" },
      { number: "$0.20-0.45", label: "card processing fee", sub: "per transaction (operator absorbs typically)", accent: "blue" },
      { number: "10-25%", label: "commission to host", sub: "of net sales", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending service fees — what's standard vs what's a red flag",
    sub: "Most fees are legitimate operational costs; some indicate operator practice problems. Know the difference at contract review.",
    headers: ["Fee", "Standard amount", "Operator absorbs vs passes through", "Red flag?"],
    rows: [
      ["Card processing fee", "$0.20-0.45 / transaction", "Operator typically absorbs", "Red flag if passed through"],
      ["Machine relocation fee", "$0-300 / event", "Operator-absorbed standard; sometimes charged", "Red flag if hourly-billed"],
      ["Early termination fee", "$500-2K / machine", "Host pays at early exit", "Red flag if disproportionate"],
      ["Specialty equipment fee", "$2-15K up-front", "Host pays if beyond standard scope", { icon: "check", text: "Standard" }],
      ["After-hours service fee", "$100-300 / call", "Host pays for non-emergency after-hours", "Standard"],
      ["Machine damage fee", "Actual repair cost", "Host pays if caused damage", "Standard"],
      ["Pickup / disposal fee", "$0-500", "Operator-absorbed standard; sometimes charged", "Red flag if always charged"],
      ["Product-removal fee", "$0-200 / SKU", "Operator-absorbed standard; rarely charged", { icon: "warn", text: "Red flag" }],
    ],
  }),
  specList({
    heading: "Vending contract fee review specifications",
    items: [
      { label: "Commission calculation methodology", value: "Verify: gross vs net sales? After-refunds? After processing fees? After freight? Sample monthly statement should show calculation. Most contracts use 'net sales after refunds'; some operators include freight or processing fees in the deduction, which materially affects commission." },
      { label: "Relocation provision", value: "Standard operator practice: 1-2 relocations per machine per year at no charge; additional relocations may have a fee ($100-300). Aggressive relocation fees ($500+) are a red flag. Verify scope at signature." },
      { label: "Specialty equipment provisions", value: "Standard fleet (snack, beverage, combo) is operator-funded. Specialty equipment (fresh food lockers, micro-markets, AI coolers) may require host capital contribution. Verify which categories are standard at the operator and which trigger up-front fees." },
      { label: "Termination provisions", value: "Termination fees: standard amount ($500-2K per machine), what triggers them (host-initiated exit), and what doesn't (operator-side performance failures, mutual termination, force majeure). Performance-failure exit clauses are critical leverage." },
      { label: "After-hours service provision", value: "Standard service hours (typically 7 AM-7 PM weekdays). After-hours/weekend service fees ($100-300 per call) for non-emergency calls. Emergency calls (food safety, security) usually no fee. Verify what counts as emergency." },
      { label: "Damage liability provisions", value: "Host pays for machine damage caused by host or guests (vandalism, accident, water/fire damage). Operator covers normal wear and tear. Verify the line; most contracts have a damage threshold definition." },
      { label: "Pickup / disposal at contract end", value: "Most operators absorb pickup cost at contract end; some charge $0-500. Verify at signature. Aggressive pickup fees can lock-in host beyond contract intent." },
      { label: "Card processing pass-through", value: "Best practice: operator absorbs card processing as cost of business. Some operators pass through ($0.20-0.45 per transaction) — verify at contract review. Pass-through processing fees reduce host commission meaningfully on high-volume placements." },
      { label: "Annual price-adjustment clause", value: "Some contracts allow annual price adjustments (CPI-tied or fixed percentage). Verify the adjustment mechanism; aggressive escalators can materially change economics over a 3-5 year contract." },
      { label: "Sample monthly statement requirement", value: "Operator should provide a sample monthly statement during proposal phase showing gross sales, refunds, processing fees, commission calculation, and any applied fees. Reveals fee transparency before signature." },
    ],
  }),
  tipCards({
    heading: "Five vending fee review mistakes",
    sub: "Each is a common pattern in post-signature contract disputes. All preventable with thorough review at signature.",
    items: [
      { title: "Not asking for a sample monthly statement", body: "Sample statement reveals the operator's commission calculation methodology — gross vs net, what's deducted, how processing fees appear. Operators willing to show this are transparent; operators who deflect are not. Always request before signature." },
      { title: "Skipping the relocation fee discussion", body: "Site needs evolve; machines often need to move 1-2 times per year. Operators with aggressive relocation fees ($500+) trap hosts; operators with reasonable provisions (1-2 free, then modest fee) are partners. Discuss at signature." },
      { title: "Ignoring termination provisions", body: "Termination fees can lock hosts into bad contracts. Performance-failure exit clauses are critical: if operator fails service SLA, refund SLA, or telemetry coverage, host should be able to exit without termination fee. Build it in at signature." },
      { title: "Letting processing fees pass through silently", body: "Card processing fees ($0.20-0.45 per transaction) materially affect commission on high-volume placements. Best operators absorb; some pass through. Verify at signature; renegotiate if pass-through wasn't disclosed clearly." },
      { title: "Accepting vague price-adjustment clauses", body: "Annual price-adjustment clauses tied to vague indices can produce surprising escalation. Verify: what's the index, what's the cap, how is it applied? Cap aggressive escalators or insist on fixed-percentage caps to avoid surprises." },
    ],
  }),
  inlineCta({
    text: "Want the vending contract fee review checklist (commission, relocation, termination, processing)?",
    buttonLabel: "Get the contract fee checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has worked with hosts on vending contract review and negotiation across office, residential, school, and institutional placements — including fee structure analysis, commission methodology audits, and termination provision negotiation. The benchmarks reflect operator-side data and host-side post-signature feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Are there really hidden fees in vending contracts?", answer: "Rarely 'hidden' in the sneaky sense — most fee surprises come from contract scope ambiguity or hosts not asking enough questions at signature. The fees are usually in the contract; the host didn't know what they meant. Read carefully and ask about each fee category.", audience: "Property Managers" },
      { question: "What fees should I ask about at signature?", answer: "Commission calculation methodology, relocation fee, termination fee, specialty equipment fee, after-hours service fee, machine damage liability, pickup/disposal at contract end, card processing pass-through, and annual price-adjustment clause. Operators who walk through these transparently are the ones worth signing with.", audience: "Procurement" },
      { question: "How do I know if my commission calculation is fair?", answer: "Request a sample monthly statement during the proposal phase. The statement should show gross sales, refunds, processing fees, commission calculation, and any applied fees. Operators willing to provide this are transparent; operators who deflect aren't. Most legitimate contracts use 'net sales after refunds' as the commission base.", audience: "Property Managers" },
      { question: "What if my operator charges more than I expected?", answer: "Compare invoice to contract. If charges aren't in the contract, dispute them; if they are, you missed at signature. Most operators welcome the dialogue when raised promptly. If recurring overcharges happen, escalate to operator's leadership or consider exit at next contract review.", audience: "Property Managers" },
      { question: "Is it normal to pay relocation fees?", answer: "Some operators absorb 1-2 relocations per machine per year and charge $100-300 for additional moves. Aggressive relocation fees ($500+) are a red flag. Verify at signature; negotiate if you expect site changes.", audience: "Property Managers" },
      { question: "What's a reasonable termination fee?", answer: "$500-2K per machine, depending on remaining contract term. Disproportionate fees (e.g., remaining contract value as a lump sum) are red flags. Performance-failure exit clauses should override termination fees — if operator fails service SLA, host should exit without penalty.", audience: "Procurement" },
      { question: "Who pays for damaged machines?", answer: "Host pays for damage caused by host or guests (vandalism, accident, water/fire damage); operator covers normal wear and tear. Most contracts have a damage threshold definition. Verify at signature; document machine condition at install and at contract end.", audience: "Property Managers" },
      { question: "What about processing fees?", answer: "Card processing fees ($0.20-0.45 per transaction) are operator-absorbed at most modern operators. Some pass through to host commission deduction — material on high-volume placements. Verify at contract review; pass-through processing is a yellow flag.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending contract standards and operator practice", url: "https://www.namanow.org/", note: "Industry trade association covering vending contract structure and fee transparency" },
      { label: "IFMA — facility management contract guidance", url: "https://www.ifma.org/", note: "Facility management industry standards covering service contract review" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering amenity service contracts" },
      { label: "PCI Security Standards Council — payment processing", url: "https://www.pcisecuritystandards.org/", note: "Card processing standards relevant to processing fee discussion" },
      { label: "Vending Times — contract and operator practice coverage", url: "https://www.vendingtimes.com/", note: "Trade publication coverage of contract trends and fee structures" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "What to look for in a vending company", description: "Vendor evaluation framework — telemetry, SLA, references, fee transparency.", href: "/vending-faq/what-to-look-for-in-a-vending-company" },
      { eyebrow: "Operations", title: "Managing vending contracts at agencies", description: "RFP-to-contract lifecycle, commission structures, and compliance at public agencies.", href: "/vending-for-public-buildings/managing-vending-contracts-agencies" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, contracts, installation, and operator-selection questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
