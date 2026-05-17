import { seedPost, tldr, statStrip, comparisonTable, specList, costBreakdown, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("who-pays-for-vending-machine-repairs", [
  tldr({
    heading: "Who pays for vending machine repairs — operator, host, manufacturer, or insurance?",
    paragraph:
      "The answer depends on the program structure, not on a universal industry rule. In a standard operator-owned placement program (the most common arrangement at offices, schools, hospitals, gyms, government buildings, hotels, and apartment communities), the vending operator owns the equipment and pays for all routine repairs, preventive maintenance, parts replacement, refrigeration service, payment system upgrades, and equipment replacement at end of useful life. The host pays nothing for the equipment, the placement, or the maintenance — the operator recovers cost through product sales margin. In an owner-operator program where the host buys the equipment outright ($4,000-$18,000 per machine), the host owns the machine and pays for all repairs, parts, and labor — service-contract pricing typically runs $400-$1,200 per machine per year, plus parts. In a lease-to-own program, lease payments include maintenance through the lease term, after which the lessee assumes responsibility. In a franchise program (Healthy You, USConnect, Naturals2Go, AVT), the franchisee owns and operates the equipment and pays for repairs; the franchisor covers software and platform updates but not hardware. Damage from vandalism, water intrusion, fire, theft, or earthquake follows the placement contract — operator-owned placements typically carry the operator's commercial property coverage; owner-operator equipment follows the host's commercial property policy. Damage caused by host negligence (forklift collision, flooded basement, contractor damage during construction) usually transfers to the host's general liability. Manufacturer warranty covers defects in materials and workmanship for 12-36 months depending on brand and component, but routine wear and consumables are excluded. The structure decision matters more than the repair-cost line item — host operator-owned programs externalize repair risk entirely, while owner-operator programs internalize repair cost in exchange for product-margin retention. This guide covers each program structure, the cost split, the insurance interaction, the manufacturer warranty scope, and the contract language that allocates repair responsibility cleanly. Written for office facility managers, school district business officers, hospital materials managers, gym owners, hotel general managers, and small-business operators evaluating vending placement.",
    bullets: [
      { emphasis: "Operator-owned placement (most common): operator pays everything:", text: "Equipment ownership, routine repairs, preventive maintenance, parts, refrigeration service, payment system upgrades, end-of-life replacement. Host pays $0. Operator recovers through product-sales margin." },
      { emphasis: "Owner-operator (host buys equipment): host pays everything:", text: "Equipment capital $4-18K, repairs, parts, labor, service contracts $400-1,200/machine/year. Host retains 100% of product-sales margin. Service contract economics vs DIY service drive the decision." },
      { emphasis: "Damage from vandalism, fire, theft, water follows insurance not the operations contract:", text: "Operator-owned: operator's commercial property. Owner-operator: host's commercial property. Damage from host negligence transfers to host general liability. Confirm coverage at placement signature." },
    ],
  }),
  statStrip({
    heading: "Vending machine repair cost benchmarks",
    stats: [
      { number: "$0", label: "host cost on operator-owned placements", sub: "operator covers everything", accent: "blue" },
      { number: "$400-1,200", label: "annual service contract per machine", sub: "owner-operator equipment", accent: "orange" },
      { number: "$4-18K", label: "equipment capital for owner-operator", sub: "snack or beverage machine", accent: "orange" },
      { number: "12-36 mo", label: "manufacturer warranty scope", sub: "defects only, not wear", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Who pays for repairs by program structure",
    sub: "Cost responsibility follows the program structure. Operator-owned placement is the most common arrangement and externalizes repair risk entirely from the host.",
    headers: ["Program structure", "Equipment ownership", "Routine repairs", "Damage from vandalism / fire / theft", "Damage from host negligence"],
    rows: [
      ["Operator-owned placement", "Operator", "Operator pays", "Operator commercial property", "Host general liability"],
      ["Owner-operator (host purchase)", "Host", "Host pays + service contract", "Host commercial property", "Host general liability"],
      ["Lease-to-own", "Lessor through lease term", "Included in lease payment", "Lease insurance schedule", "Host general liability"],
      ["Franchise (Healthy You, USConnect)", "Franchisee", "Franchisee pays", "Franchisee commercial property", "Franchisee general liability"],
      ["Cooperative (member-owned)", "Cooperative entity", "Cooperative pays", "Cooperative commercial property", "Member general liability"],
      ["Manufacturer warranty period", "n/a", "Defects only — operator or host pays wear and consumables", "Not covered", "Not covered"],
    ],
  }),
  specList({
    heading: "Repair cost responsibility specifications",
    items: [
      { label: "Operator-owned placement (most common)", value: "Vending operator owns the equipment outright and is responsible for all repair cost: routine repairs, preventive maintenance, parts replacement (refrigeration compressors, bill validators, coin mechs, spiral motors, payment terminals, lighting), equipment refresh at end of useful life (7-12 years typical), and end-of-life removal. Host pays $0 for the equipment, placement, or maintenance. Operator recovers cost through product-sales margin. Used at offices, schools, hospitals, gyms, government buildings, hotels, and apartment communities." },
      { label: "Owner-operator program (host purchase)", value: "Host buys equipment outright ($4,000-$18,000 per machine for snack or beverage). Host owns the equipment and is responsible for all repairs, parts, labor, refrigeration service, payment terminal maintenance, and end-of-life replacement. Service contract pricing typically $400-$1,200 per machine per year, plus parts. Host retains 100% of product-sales margin. Decision turns on whether internal staff or service contract is cheaper than the operator placement margin." },
      { label: "Lease-to-own program", value: "Equipment leased from a finance company or operator over 36-60 months with payments including maintenance through the lease term. At end of lease, lessee assumes ownership and full repair responsibility. Lease payments roll equipment, maintenance, and finance cost into a single monthly line. Common at small businesses building micro-market or single-machine programs without capital." },
      { label: "Franchise program structure", value: "Franchisee owns and operates equipment under franchisor brand (Healthy You, USConnect, AVT, Naturals2Go). Franchisee pays for all hardware repair, parts, labor, and refresh. Franchisor covers software and platform updates, telemetry dashboard, brand marketing, supplier negotiation, and ongoing operational support. Franchise royalty 4-8% of gross sales plus advertising fund 1-3%." },
      { label: "Vandalism, fire, theft, water damage coverage", value: "Damage from vandalism, fire, theft, water intrusion, earthquake, or natural disaster follows the property-insurance coverage on the equipment owner. Operator-owned placements typically carry $1-5M commercial property coverage. Owner-operator equipment follows the host's commercial property policy with the equipment scheduled at acquisition cost. Confirm coverage limits and deductibles at placement signature." },
      { label: "Damage from host negligence", value: "Damage caused by host negligence (forklift collision, flooded basement, contractor damage during construction, HVAC water leak, unauthorized employee tampering) typically transfers to the host's general liability under the placement contract. Operator files a claim against host policy for replacement cost. Standard placement contract specifies host responsibility for property damage caused by host operations." },
      { label: "Manufacturer warranty scope", value: "Manufacturer warranty covers defects in materials and workmanship for 12-36 months depending on brand and component. Refrigeration compressor warranties often 36-60 months. Bill validator and coin mech warranties typically 12-24 months. Warranty covers parts replacement only, not labor at most brands. Routine wear, consumables, and damage from misuse or vandalism are excluded." },
      { label: "Service contract pricing for owner-operator", value: "Service contract pricing for owner-operator equipment varies by region and machine count: $400-$700 per machine per year for basic preventive maintenance plus on-call repair labor; $700-$1,200 per machine per year for premium contracts with 24-hour response time, telemetry monitoring, and parts inclusion. Multi-machine accounts negotiate per-machine pricing 15-30% below single-machine rates." },
      { label: "DIY service economics", value: "DIY service for owner-operator equipment requires trained technician on staff or contracted ($35-95/hour technician labor depending on region) plus parts inventory. DIY makes sense at 4+ machine accounts where service-contract cost exceeds technician cost. Below 4 machines, service contract is typically cheaper than DIY. Operator placement remains cheapest at any scale by avoiding repair responsibility entirely." },
      { label: "End-of-life equipment replacement", value: "Vending equipment typical useful life is 7-12 years. Operator-owned placements: operator replaces at no cost to host. Owner-operator equipment: host capital expense $4-18K every 7-12 years per machine, plus 8-15% disposal and removal cost. Plan capital reserve at owner-operator programs. Modern operators offer trade-in credit on equipment refresh at 5-7 years." },
    ],
  }),
  costBreakdown({
    heading: "5-year repair cost comparison — 3-machine office vending program",
    sub: "Cost split across operator-owned placement, owner-operator with service contract, and owner-operator with DIY service. Numbers reflect typical 5-year repair and maintenance spend on a 3-machine snack + beverage program.",
    items: [
      { label: "Operator-owned placement", amount: "$0", range: "Operator pays all repair and maintenance. Host pays $0. Operator recovers through product-sales margin." },
      { label: "Owner-operator with service contract", amount: "$10,500", range: "$700/machine/year x 3 machines x 5 years. Plus $1,800 in parts above contract scope. Total $12,300." },
      { label: "Owner-operator with DIY service", amount: "$6,200", range: "$35-95/hr technician labor at 8-12 hours per machine per year, plus $2,400 in parts. Requires trained on-staff technician." },
      { label: "Equipment refresh at year 7-12", amount: "$15-54K", range: "$5-18K per machine x 3 machines. Operator-owned: $0 to host. Owner-operator: full host capital expense." },
      { label: "End-of-life disposal and removal", amount: "$600-1,800", range: "$200-600 per machine for owner-operator equipment. Operator-owned: $0 to host." },
    ],
    totalLabel: "5-year repair + refresh cost",
    totalAmount: "$0 - $69K",
  }),
  tipCards({
    heading: "Five vending repair-cost mistakes",
    sub: "Each documented in host and operator post-placement reviews. All preventable with structured contract review and program-structure analysis.",
    items: [
      { title: "Assuming the operator pays for everything in every program", body: "Operator-owned placement is the most common arrangement but not universal. Owner-operator, franchise, and lease-to-own programs put repair cost on the host or franchisee. Verify program structure at contract signature; do not assume operator-owned without explicit language." },
      { title: "Skipping the insurance interaction", body: "Damage from vandalism, fire, theft, water, and natural disaster follows the property-insurance schedule. Operator-owned: operator commercial property covers. Owner-operator: host commercial property covers — equipment must be scheduled at acquisition cost. Confirm scheduling at policy renewal." },
      { title: "Underestimating service contract cost", body: "Owner-operator equipment service contracts run $400-$1,200 per machine per year. Three-machine accounts pay $1,200-$3,600 per year for service contracts. Five-year total $6,000-$18,000 before parts above contract scope. Model 5-year cost at owner-operator decision; compare to operator placement margin." },
      { title: "Confusing manufacturer warranty with service contract", body: "Manufacturer warranty covers defects in materials and workmanship for 12-36 months on most components and parts only — not labor. Service contract covers preventive maintenance, on-call repair labor, and sometimes parts. Two different products. Owner-operator equipment needs both for the first 12-36 months and just the service contract after." },
      { title: "No host-negligence language in placement contract", body: "Damage from host negligence (forklift collision, flooded basement, contractor damage) transfers to host general liability in well-drafted placement contracts. Generic contracts leave this ambiguous and create dispute when damage occurs. Confirm host-negligence language at contract review with placement attorney." },
    ],
  }),
  decisionTree({
    heading: "Which vending program structure fits our repair-cost tolerance?",
    question: "Are we willing to absorb repair capital and operational cost ($400-1,200/machine/year service contract plus parts plus $4-18K per machine refresh every 7-12 years) in exchange for retaining 100% of product-sales margin?",
    yesBranch: {
      title: "Owner-operator program fits — verify service contract economics.",
      description: "Owner-operator program retains product-sales margin in exchange for absorbing repair capital and operational cost. Model 5-year cost: equipment capital + service contract + parts + refresh + disposal. Compare to operator placement margin foregone. Owner-operator generally makes sense at 4+ machine accounts with willingness to manage equipment.",
      finalTone: "go",
      finalLabel: "OWNER-OPERATOR PROGRAM",
    },
    noBranch: {
      title: "Operator-owned placement fits — host externalizes repair risk entirely.",
      description: "Operator-owned placement externalizes equipment ownership, routine repairs, preventive maintenance, parts replacement, refrigeration service, payment system upgrades, and end-of-life refresh entirely. Host pays $0 for the equipment, placement, or maintenance. Operator recovers cost through product-sales margin. Standard at offices, schools, hospitals, gyms, government buildings, hotels, and apartment communities.",
      finalTone: "stop",
      finalLabel: "OPERATOR-OWNED PLACEMENT",
    },
  }),
  caseStudy({
    tag: "Capability scenario · 5-machine office program comparison",
    title: "5-year repair cost across three program structures",
    context:
      "Capability description for a 250-person office evaluating a 5-machine snack + beverage program (3 snack + 2 beverage). Three program structures compared on 5-year total cost: operator-owned placement, owner-operator with service contract, owner-operator with DIY technician service.",
    meta: [
      { label: "Program scale", value: "5 machines — 3 snack + 2 beverage" },
      { label: "Site profile", value: "250-person single-floor office, standard placement contract" },
      { label: "Equipment refresh", value: "Year 7-12 typical useful life" },
      { label: "Comparison horizon", value: "5-year total repair and maintenance cost" },
    ],
    results: [
      { number: "$0", label: "5-year repair cost on operator-owned placement (host pays nothing)" },
      { number: "$17.5K", label: "5-year cost on owner-operator with service contract ($700/machine/year x 5)" },
      { number: "$10.5K", label: "5-year cost on owner-operator with DIY technician service (4+ machines)" },
      { number: "$25-90K", label: "year 7-12 refresh capital at owner-operator (vs $0 operator-owned)" },
    ],
  }),
  inlineCta({
    text: "Want the vending repair-cost framework (program-structure comparison, service contract pricing, insurance schedule, host-negligence contract language)?",
    buttonLabel: "Get the repair-cost framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help offices, schools, hospitals, gyms, hotels, and small-business operators evaluate vending program structure and repair-cost responsibility — including operator-owned placement program design, owner-operator equipment evaluation, service contract pricing analysis, insurance schedule alignment, manufacturer warranty interaction, host-negligence contract language review, and 5-year total-cost-of-ownership modeling. Recommendations and benchmarks reflect operator-side data and host placement contract patterns across multiple verticals.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who pays for vending machine repairs at a typical office?", answer: "At a typical office on an operator-owned placement program (the most common arrangement), the vending operator pays for all repairs, preventive maintenance, parts replacement, refrigeration service, payment system upgrades, and end-of-life equipment replacement. The host pays $0 for the equipment, placement, or maintenance. The operator recovers cost through product-sales margin.", audience: "Office Managers" },
      { question: "What if we buy the vending machine outright?", answer: "Owner-operator program — host buys equipment outright ($4,000-$18,000 per machine for snack or beverage). Host owns the machine and pays for all repairs, parts, labor, refrigeration service, and end-of-life replacement. Service contract pricing typically $400-$1,200 per machine per year, plus parts. Host retains 100% of product-sales margin in exchange for absorbing repair cost.", audience: "Small Business Owners" },
      { question: "Does the manufacturer warranty cover repairs?", answer: "Manufacturer warranty covers defects in materials and workmanship for 12-36 months depending on brand and component. Refrigeration compressors often 36-60 months. Bill validators and coin mechs typically 12-24 months. Warranty covers parts only at most brands, not labor. Routine wear, consumables, and damage from misuse or vandalism are excluded.", audience: "Procurement" },
      { question: "Who pays if the machine is vandalized or stolen?", answer: "Damage from vandalism, fire, theft, water intrusion, earthquake, or natural disaster follows the property-insurance coverage on the equipment owner. Operator-owned placements: operator commercial property. Owner-operator equipment: host commercial property — equipment must be scheduled at acquisition cost on the host policy.", audience: "Risk Management" },
      { question: "Who pays if our forklift damages the machine?", answer: "Damage caused by host negligence (forklift collision, flooded basement, contractor damage during construction, HVAC water leak, unauthorized employee tampering) typically transfers to the host's general liability under the placement contract. Operator files a claim against host policy for replacement cost. Confirm host-negligence language at contract review with placement attorney.", audience: "Risk Management" },
      { question: "How much does a service contract cost on owner-operator equipment?", answer: "$400-$700 per machine per year for basic preventive maintenance plus on-call repair labor. $700-$1,200 per machine per year for premium contracts with 24-hour response time, telemetry monitoring, and parts inclusion. Multi-machine accounts negotiate per-machine pricing 15-30% below single-machine rates.", audience: "Small Business Owners" },
      { question: "When does owner-operator make sense over operator-owned?", answer: "Owner-operator generally makes sense at 4+ machine accounts where retained product-sales margin exceeds equipment capital plus 5-year service contract cost plus year 7-12 refresh capital. Below 4 machines, operator-owned placement is typically the better economic structure. Model 5-year total cost before deciding.", audience: "Procurement" },
      { question: "What happens at end of equipment useful life?", answer: "Vending equipment typical useful life is 7-12 years. Operator-owned placements: operator replaces at no cost to host. Owner-operator equipment: host capital expense $4-18K every 7-12 years per machine, plus $200-600 disposal and removal cost. Plan capital reserve at owner-operator programs.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry body covering vending program structures, operator standards, and placement contract practice" },
      { label: "FTC — Franchise Disclosure Document (FDD) requirements", url: "https://www.ftc.gov/business-guidance/resources/franchise-rule-compliance-guide", note: "Federal franchise disclosure framework underlying vending franchise program structure and royalty disclosure" },
      { label: "ASHRAE — refrigeration equipment standards", url: "https://www.ashrae.org/", note: "Engineering society covering refrigeration equipment service life, maintenance practice, and warranty scope" },
      { label: "IRS Publication 946 — How to Depreciate Property", url: "https://www.irs.gov/publications/p946", note: "Depreciation schedule for vending equipment at owner-operator programs — 7-year MACRS class life typical" },
      { label: "ISO — equipment lifecycle and maintenance standards", url: "https://www.iso.org/", note: "Standards body covering equipment lifecycle management, maintenance practice, and end-of-life disposal" },
    ],
  }),
  relatedGuides({
    heading: "Related vending FAQ guides",
    items: [
      { eyebrow: "Sister FAQ", title: "How vending machine commissions work", description: "Commission structures, gross vs net calculation, statement audit rights, and host-revenue benchmarks.", href: "/vending-faq/how-vending-commissions-work" },
      { eyebrow: "Sister FAQ", title: "Vending machine placement contracts explained", description: "Standard contract terms, exclusivity scope, termination provisions, and renewal patterns across operator-owned placements.", href: "/vending-faq/vending-placement-contracts-explained" },
      { eyebrow: "Hub", title: "All vending FAQ guides", description: "Program structure, commission, contract, repair, insurance, and operator capability questions answered.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
