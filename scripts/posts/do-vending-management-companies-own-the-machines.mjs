import { seedPost, tldr, comparisonTable, specList, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-vending-management-companies-own-the-machines", [
  tldr({
    heading: "Do vending management companies own the machines they place?",
    paragraph:
      "Usually yes. Under the standard full-service vending management arrangement, the vending management company (operator) owns the equipment, places it at the host site at no upfront capital cost to the host, and recovers cost through sales over a multi-year contract. The host provides electrical + floor space + roof access and receives commission on net sales (typically 10-25% depending on volume + format + program quality). Three secondary models exist: lease-to-own (host eventually owns equipment, less common in commercial vending), self-operated (host purchases equipment outright + handles its own restocking, common at very small offices and unattended retail pilots), and micro-market / AI cooler wall arrangements where capital contribution from the host is sometimes required because operator economics don't fully subsidize the higher equipment cost. The ownership question matters because it drives liability allocation, insurance responsibility, refresh-cycle decisions, service obligations, contract structure, and exit / removal provisions. Modern full-service operator contracts include 100% equipment ownership + insurance + service SLA + planogram refresh + telemetry coverage + monthly reporting + quarterly business review, with the host carrying responsibility only for power + space + reasonable cooperation. Legacy operator contracts sometimes blur ownership boundaries — confirm at signature.",
    bullets: [
      { emphasis: "Default model: operator owns the equipment.",
        text: "Standard full-service commission model. Host provides power + space, receives 10-25% commission, has zero capital outlay. Operator carries equipment, insurance, service, refresh." },
      { emphasis: "Lease-to-own + self-operated + capital-contribution arrangements exist.",
        text: "Lease-to-own less common in commercial vending. Self-operated common at very small offices. AI cooler walls + micro-markets sometimes require host capital contribution." },
      { emphasis: "Ownership drives liability, insurance, refresh, and exit provisions.",
        text: "Confirm equipment-ownership clause at signature. Modern contracts state ownership + insurance + service responsibility + refresh cycle + removal cost clearly.", },
    ],
  }),
  comparisonTable({
    heading: "Vending management ownership models — comparison",
    sub: "Pick the model that matches your capital tolerance, control preference, and operational involvement.",
    headers: ["Dimension", "Operator-owned (default)", "Lease-to-own", "Self-operated", "Capital-contribution"],
    rows: [
      ["Equipment owner", "Vending management company", "Host (after lease term)", "Host (from day 1)", "Shared / negotiated"],
      ["Host upfront cost", "$0", "$0 upfront; lease payments over 24-60 mo", "$5K-15K per combo machine", "Partial ($3K-25K typical)"],
      ["Insurance responsibility", "Operator", "Shifts to host at title transfer", "Host", "Negotiated; operator usually carries"],
      ["Service + repairs", "Operator (included)", "Operator (per lease terms)", "Host (or third-party)", "Operator (included)"],
      ["Restocking", "Operator route drivers", "Operator (per lease terms)", "Host staff or contracted route driver", "Operator route drivers"],
      ["Refresh cycle", "Operator-managed (5-7 yr typical)", "Host decides after title transfer", "Host decides", "Operator-managed"],
      ["Host commission", "10-25% of net sales", "Variable; reduced during lease", "100% gross minus COGS + service", "10-20% typical"],
      ["Removal at exit", "Operator removes at no cost", "Host owns (must dispose)", "Host owns (must dispose)", "Negotiated"],
      ["Best fit", "Most commercial placements", "Capital-rich hosts wanting eventual control", "Very small offices, unattended retail pilots", "AI cooler walls, micro-markets, fresh-food"],
    ],
  }),
  specList({
    heading: "Equipment ownership — what each model covers",
    items: [
      { label: "Operator-owned full-service (default)", value: "Vending management company owns the equipment outright. Pays for purchase, installation, insurance, service, planogram, refresh, eventual removal. Host pays nothing upfront and receives commission on net sales. 80-90% of commercial vending placements use this model. Contract specifies operator ownership + insurance carrier + service SLA + refresh cycle." },
      { label: "Lease-to-own arrangements", value: "Operator finances equipment; host makes monthly lease payments over 24-60 months. Title transfers to host at end of lease. Less common in commercial vending; sometimes used by capital-rich hosts wanting eventual equipment control. Insurance + service responsibility shifts at title transfer." },
      { label: "Self-operated by host", value: "Host purchases equipment outright ($5K-15K per combo machine, $8K-20K cold beverage, $20K-40K micro-market kit). Host handles its own restocking or contracts a route driver. Most common at very small offices (under 25 employees) and unattended retail pilots where standard commission economics don't work." },
      { label: "Capital-contribution arrangements", value: "AI cooler walls + micro-markets + fresh-food lockers + premium specialty equipment. Operator economics don't support full subsidization at higher capital cost ($25K-75K typical). Host contributes partial capital ($3K-25K) in exchange for higher commission or program enhancements." },
      { label: "Insurance responsibility under operator-owned", value: "Operator carries general liability ($1-2M typical), product liability, equipment-damage coverage. Host should request certificate of insurance naming host as additional insured. Confirms operator owns equipment + carries appropriate coverage." },
      { label: "Service + repair responsibility under operator-owned", value: "Operator handles all service, repairs, parts, planogram refresh. Standard service SLA: 24-48 hour response time, on-site within 4-8 hours for critical failures. Refunds processed within 1-5 business days. Modern contracts include 100% telemetry coverage for proactive service." },
      { label: "Refresh cycle under operator-owned", value: "Operator manages 5-7 year refresh cycle. Equipment retired + replaced based on age, performance, host preference. No host capital required for refresh. Modern operators provide refresh roadmap during annual business review." },
      { label: "Exit + removal provisions", value: "Under operator-owned model, operator removes equipment at no cost to host at contract end. Standard 30-90 day removal notice. Confirm removal clause at signature; legacy contracts sometimes obligate host to pay disposal fee." },
      { label: "Ownership transfer scenarios", value: "Acquisitions: operator acquires another operator; equipment ownership transfers per acquisition agreement. Contract assignments: ownership stays with operator entity; assignment requires host consent at most contracts. Host acquisitions: equipment ownership unchanged at host-side acquisitions." },
    ],
  }),
  decisionTree({
    heading: "Which ownership model should your site choose?",
    question: "Does your site have sufficient traffic (50+ daily users) for standard commercial economics AND do you prefer zero capital outlay?",
    yesBranch: {
      title: "Choose operator-owned full-service model.",
      description: "Standard arrangement covers 80-90% of commercial placements. Host pays zero upfront, receives 10-25% commission, operator carries equipment + insurance + service + refresh. Lowest host effort + lowest host risk + standard operator capability stack.",
      finalTone: "go",
      finalLabel: "DEFAULT MODEL · NO CAPITAL REQUIRED",
    },
    noBranch: {
      title: "Evaluate self-operated or capital-contribution alternatives.",
      description: "Very small offices may need self-operated (host buys + restocks). AI cooler walls + micro-markets often need capital-contribution. Capital-rich hosts wanting eventual control may consider lease-to-own. Engage 2-3 operators on each model to compare economics + service obligations.",
      finalTone: "stop",
      finalLabel: "EVALUATE ALTERNATIVE MODELS",
    },
  }),
  tipCards({
    heading: "Five ownership-model mistakes hosts make",
    sub: "Each is preventable by confirming equipment-ownership clause + insurance + service + refresh at signature.",
    items: [
      { title: "Assuming all operators use the same model", body: "Some operators default to lease-to-own or capital-contribution; some default to full-service operator-owned. Ask the question explicitly during proposal: 'Who owns the equipment, who carries insurance, who pays for service, and who pays for removal at exit?' Document the answer in the contract." },
      { title: "Not requesting certificate of insurance", body: "Under operator-owned model, operator carries general liability + equipment-damage coverage. Host should request certificate of insurance naming host as additional insured. Confirms ownership + appropriate coverage. Legacy operators sometimes carry inadequate insurance; certificate reveals." },
      { title: "Missing removal-cost clause", body: "Standard operator-owned contracts include free removal at exit. Legacy contracts sometimes obligate host to pay disposal fee ($200-800 per machine). Confirm removal clause at signature; modern operators state removal cost = $0 in writing." },
      { title: "Confusing lease-to-own with operator-owned", body: "Lease-to-own gradually transfers ownership to host; insurance + service obligations shift at title transfer. Operator-owned never transfers. Confirm at signature which model applies. Some operators offer both; the contract language determines which applies to your site." },
      { title: "Not negotiating capital-contribution allocation for specialty equipment", body: "AI cooler walls + micro-markets + fresh-food lockers often require host capital contribution. Confirm: how much, paid when, what does it buy (higher commission, longer contract, refresh provisions). Engage 2-3 operators to benchmark capital contribution; legacy operators sometimes ask for too much.", },
    ],
  }),
  inlineCta({
    text: "Want the vending management ownership framework (operator-owned + lease + self-operated + capital-contribution comparison)?",
    buttonLabel: "Get the ownership-model framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise hosts and prospective operators on vending management ownership models — including operator-owned full-service, lease-to-own structures, self-operated arrangements at small sites, and capital-contribution allocation for AI cooler walls + micro-markets. The benchmarks reflect operator-side data and host-side contract review experience.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do vending management companies own the machines?", answer: "Usually yes, under the standard full-service commission model. Operator owns the equipment, places it at no upfront cost to the host, recovers cost through sales over multi-year contract, and removes it at no cost at exit. The host provides electrical + floor space and receives 10-25% commission on net sales.", audience: "Property Managers" },
      { question: "Are there other ownership models?", answer: "Yes. Lease-to-own (host gradually owns equipment over 24-60 months, less common in commercial vending). Self-operated (host purchases equipment outright + handles restocking, common at very small offices). Capital-contribution (host contributes partial capital for AI cooler walls + micro-markets + fresh-food lockers where operator economics don't fully subsidize).", audience: "Property Managers" },
      { question: "Why does the ownership question matter?", answer: "It drives liability allocation, insurance responsibility, refresh-cycle decisions, service obligations, contract structure, and exit / removal provisions. Confirm equipment-ownership clause at signature so each party's responsibilities are documented; legacy contracts sometimes blur ownership boundaries.", audience: "Compliance" },
      { question: "Who carries insurance on the equipment?", answer: "Under operator-owned model, the operator carries general liability ($1-2M typical), product liability, and equipment-damage coverage. Host should request a certificate of insurance naming host as additional insured. Under self-operated or lease-to-own post-transfer, insurance responsibility shifts to the host.", audience: "Risk Management" },
      { question: "Who pays for repairs and refresh?", answer: "Operator under operator-owned model — all service, repairs, parts, planogram refresh, and equipment refresh on a 5-7 year cycle at no host cost. Host under self-operated model. Lease-to-own splits service responsibility per lease terms; capital-contribution typically retains operator service responsibility.", audience: "Facilities" },
      { question: "Who removes the equipment at contract end?", answer: "Operator under operator-owned model, at no cost to the host. Standard 30-90 day removal notice. Confirm removal clause at signature; legacy contracts sometimes obligate the host to pay a disposal fee ($200-800 per machine). Modern operator contracts state removal cost = $0 in writing.", audience: "Property Managers" },
      { question: "What about AI cooler walls and micro-markets?", answer: "These often require host capital contribution ($3K-25K typical) because operator economics don't fully subsidize the higher capital cost. Capital contribution buys higher commission, longer contract, or program enhancements. Engage 2-3 operators to benchmark; legacy operators sometimes request excessive capital contribution.", audience: "Property Managers" },
      { question: "Can ownership transfer during the contract?", answer: "Rarely under operator-owned. Operator acquisitions transfer ownership to the acquiring operator per acquisition agreement. Lease-to-own transfers ownership at end of lease term. Operator-owned contracts typically retain ownership through full contract term; host buyout provisions are rare and require negotiation at signature.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending management contract standards" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering vending equipment placement + insurance" },
      { label: "IFMA — facility management standards", url: "https://www.ifma.org/", note: "Facility management industry standards covering vending equipment ownership clauses" },
      { label: "FTC — commercial contract guidance", url: "https://www.ftc.gov/", note: "Federal commercial contract guidance applicable to vending equipment ownership" },
      { label: "Vending Times — operator contract coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator-host contract structures and ownership models" },
    ],
  }),
  relatedGuides({
    heading: "Related vending management guides",
    items: [
      { eyebrow: "Sister guide", title: "Benefits of using a vending management company", description: "Full-service operator value, commission model, and service obligations.", href: "/vending-management-companies/benefits-of-using-a-vending-management-company" },
      { eyebrow: "Operations", title: "Why corporate offices use vending management companies", description: "Office amenity, employee retention, zero-capital model, and managed service value.", href: "/vending-management-companies/why-corporate-offices-use-vending-management-companies" },
      { eyebrow: "Hub", title: "All vending management company guides", description: "Contracts, ownership, commissions, service SLAs, and operator-host coordination.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
