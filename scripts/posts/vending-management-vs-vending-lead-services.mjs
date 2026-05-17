import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-management-vs-vending-lead-services", [
  tldr({
    heading: "What's the difference between a vending management company and a vending lead service?",
    paragraph:
      "Vending management companies (VMCs) and vending lead services do completely different things despite the surface-level overlap in name. A VMC is an enterprise governance layer between a multi-location host (Fortune 500 corporate real estate, federal agency, hospital system, university system) and the operators that actually service their vending placements — VMCs aggregate the operator portfolio, enforce SLA, consolidate ESG / compliance reporting, run a portfolio dashboard, manage commission settlement across operators, and own the master contract. A vending lead service is a lead-generation marketplace that connects vending machine operators (the supply side) with potential placement opportunities (host businesses willing to take a machine). Lead services don't operate placements, don't manage commissions, don't enforce SLA, and don't provide enterprise governance — they sell lead lists or qualified introductions to operators looking for new accounts. Hosts considering vending almost never need a lead service; lead services are an operator-side tool for route expansion. Hosts considering enterprise vending governance need a VMC. The confusion is so common that operators sometimes get RFPs from hosts who actually want VMC capability, and lead service marketing copy sometimes blurs the distinction. Knowing which side of the marketplace you're on (host vs operator) determines which service category applies.",
    bullets: [
      { emphasis: "Different sides of the marketplace:",
        text: "VMC serves hosts (enterprise governance); lead service serves operators (route expansion). Hosts never need lead services; operators don't need VMCs as a customer." },
      { emphasis: "VMC = governance, lead service = pipeline:",
        text: "VMC owns master contract + operator portfolio + SLA + ESG + commission. Lead service sells qualified introductions or lead lists to operators." },
      { emphasis: "Knowing which you are clears the confusion:",
        text: "If you're a host evaluating vending, you want a VMC or direct operator. If you're an operator growing your route, you may consider a lead service." },
    ],
  }),
  statStrip({
    heading: "VMC vs lead service benchmarks",
    stats: [
      { number: "Hosts", label: "VMC audience", sub: "multi-location enterprises", accent: "blue" },
      { number: "Operators", label: "lead service audience", sub: "route operators seeking expansion", accent: "blue" },
      { number: "Master contract", label: "VMC deliverable", sub: "3-5 year enterprise governance", accent: "orange" },
      { number: "$50-500", label: "lead service price range", sub: "per qualified lead or list", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "VMC vs vending lead service — comparison",
    sub: "Different audiences, different deliverables, different economics. Hosts and operators sometimes confuse the categories.",
    headers: ["Dimension", "Vending management company (VMC)", "Vending lead service"],
    rows: [
      ["Primary audience", "Multi-location host (enterprise)", "Vending machine operator"],
      ["Service category", "Enterprise governance + portfolio management", "Lead generation + pipeline development"],
      ["Deliverable", "Master contract + operator portfolio + dashboard + SLA + ESG", "Qualified lead list or single qualified intro"],
      ["Contract length", "3-5 year master agreement", "Pay-per-lead or monthly subscription"],
      ["Fee structure", "5-15% override on operator commission OR $2-25K/month fixed", "$50-500 per qualified lead or $200-1,500/month subscription"],
      ["Compliance / SLA enforcement", "Yes (across operator portfolio)", "No (lead service ends at introduction)"],
      ["ESG / sustainability reporting", "Yes (consolidated across operators)", "No (out of scope)"],
      ["Portfolio dashboard", "Yes (real-time across all placements)", "No (lead pipeline only)"],
      ["When to use", "Host with 25+ locations across multiple metros", "Operator looking to expand route footprint"],
    ],
  }),
  specList({
    heading: "VMC and vending lead service specifications",
    items: [
      { label: "VMC — enterprise governance layer", value: "Sits between multi-location host (Fortune 500, federal, hospital, university) and the operators that service placements. Aggregates portfolio under master contract; runs portfolio dashboard; enforces SLA + ESG + compliance + commission settlement across operators. Standard for hosts with 25+ locations across multiple metros + mixed service formats." },
      { label: "VMC — operator portfolio + master contract", value: "Master contract between host and VMC, with subordinate operator agreements per metro / segment / format. Operator transition rights (replace underperforming operators without master contract disruption), performance-failure exit clauses, fee escalation caps, ESG / compliance enforcement language. Engage commercial contract counsel at signature." },
      { label: "VMC — portfolio dashboard + telemetry", value: "Real-time view across operators + locations. Revenue, transactions, top SKUs, stockouts, service tickets, customer satisfaction, ESG metrics. Modern VMCs run live dashboard; legacy VMCs run batch / monthly reporting. Demo live at proposal; hard requirement." },
      { label: "VMC — fee structure", value: "5-15% override on operator commission paid to host, OR $2-25K/month fixed depending on portfolio size. Annual escalation caps (typically 2-3% or CPI). No surprise fees (transition fees, reporting fees, dashboard fees). Verify fee schedule at master contract signature." },
      { label: "Lead service — lead generation for operators", value: "Identifies host businesses (offices, hotels, gyms, healthcare, manufacturing) that might accept a vending placement. Qualifies via outbound calling, web scraping, lead-list compilation. Sells to operators looking to expand route footprint. Operator-side tool; hosts never need this service." },
      { label: "Lead service — lead types", value: "Cold leads (compiled business list with vending potential indicators), warm leads (operator outreach completed, host expressed interest), qualified leads (host confirmed willingness to host machine + operator setup-ready). Quality + price scale; $50-500 per qualified lead typical, $200-1,500/month subscription for ongoing pipeline." },
      { label: "Lead service — quality variability", value: "Lead quality varies widely across providers. Some lead services compile lists from public sources + sell without verification; others run outbound qualification + verify host interest. Operators should request sample leads + verify quality before committing to subscription or volume purchase." },
      { label: "Why hosts sometimes confuse the two", value: "Names overlap (vending management vs vending leads). Marketing copy sometimes blurs the distinction. Hosts searching for vending support land on lead service marketing pages. Result: host signs up for lead service expecting VMC governance + gets operator-side lead pipeline. Clear up at first vendor conversation." },
      { label: "Why operators sometimes confuse the two", value: "Operator searches 'vending management' looking for lead generation + lands on VMC marketing page. Result: operator pitches operator-side capability to enterprise host RFP expecting VMC capability + can't deliver. Read the RFP carefully — host language differs from operator language." },
      { label: "Modern operator capability — both kinds", value: "Modern vending operators often handle both ends: serve enterprise hosts under VMC contracts (or directly) AND grow their own route via internal lead-generation team + selective lead-service partnerships. Mature operators don't rely on lead services as primary pipeline; lead services supplement structured business development." },
    ],
  }),
  tipCards({
    heading: "Five VMC vs lead service mistakes",
    sub: "Common confusion documented in host + operator post-engagement regret data. All preventable with clear understanding of which service category you need.",
    items: [
      { title: "Host signing up for a lead service expecting VMC governance", body: "Host with 25+ locations across multiple metros signs up for vending lead service expecting portfolio dashboard + SLA + ESG + commission management. Lead service ends at operator introduction; doesn't deliver enterprise governance. Result: host has to rebuild governance + start RFP cycle with VMC. Verify service category at first conversation." },
      { title: "Operator pitching enterprise host RFP without VMC capability", body: "Single-region operator reads enterprise host RFP looking for VMC capability (portfolio dashboard, master contract, SLA across operators, ESG consolidation), pitches operator-side capability + can't deliver. Result: lost RFP + wasted bid time. Read RFP language carefully; if host wants VMC, partner with one or no-bid." },
      { title: "Confusing 'vending management' search results", body: "Host searches 'vending management' + lands on lead service pages with similar marketing copy. Lead services sell to operators, not hosts. Clear up at first vendor conversation — ask 'do you contract with hosts to manage their vending portfolio, or do you sell leads to operators?'" },
      { title: "Operator over-reliance on lead services for pipeline", body: "Newer operators sometimes rely on lead services as primary business-development channel. Lead quality varies + per-lead economics often don't work + structured business development produces higher-quality long-term placements. Use lead services to supplement, not replace, structured BD." },
      { title: "Lead service quality variability", body: "Lead quality varies widely across providers. Some compile lists from public sources + sell without verification; others run outbound qualification. Operators should request sample leads + verify quality + start with small-volume purchase before subscribing to ongoing pipeline." },
    ],
  }),
  decisionTree({
    heading: "Do you need a VMC or a lead service?",
    question: "Are you a host evaluating vending placements at your locations (you have buildings / facilities / employees who would consume vending)?",
    yesBranch: {
      title: "You need a VMC or direct operator — not a lead service.",
      description: "Hosts evaluating vending placements need a vending management company (if 25+ locations across multiple metros) or a direct operator (if single location or small multi-location in one metro). Lead services don't serve hosts. Use VMC selection framework or operator selection framework depending on portfolio scale.",
      finalTone: "go",
      finalLabel: "HOST · VMC OR DIRECT OPERATOR",
    },
    noBranch: {
      title: "If you're an operator, a lead service may supplement BD.",
      description: "Vending operators looking to expand route footprint sometimes use lead services to supplement structured business development. Lead services don't deliver enterprise governance + don't replace operator-side capability; they generate qualified introductions to host businesses. Use selectively + verify lead quality before subscribing.",
      finalTone: "stop",
      finalLabel: "OPERATOR · LEAD SERVICE OPTIONAL",
    },
  }),
  inlineCta({
    text: "Want the host framework for VMC selection (or the operator framework for BD vs lead services)?",
    buttonLabel: "Get the right framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise hosts on VMC vs direct-operator selection and operators on business-development structure vs lead-service supplementation. Both sides of the marketplace use the same vendor language; the right framework depends on whether you're a host evaluating placements or an operator growing a route. The benchmarks reflect operator-side and host-side data from current engagements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the difference between a VMC and a vending lead service?", answer: "Different sides of the marketplace. VMC = enterprise governance for multi-location hosts (master contract + portfolio dashboard + SLA + ESG + commission). Lead service = lead generation for operators (qualified intros to host businesses willing to host a placement). Hosts need VMCs or direct operators; operators sometimes use lead services to supplement BD.", audience: "Procurement" },
      { question: "I'm a host. Do I need a lead service?", answer: "No. Lead services serve operators looking to expand routes. Hosts evaluating vending placements need a VMC (if 25+ locations across multiple metros) or a direct operator (if single location or small multi-location in one metro). If you're searching 'vending management' as a host, you want VMC capability — verify at first vendor conversation.", audience: "Hosts" },
      { question: "I'm an operator. Should I use a lead service?", answer: "Selectively + to supplement structured BD. Lead quality varies widely; per-lead economics often don't work; mature operators don't rely on lead services as primary pipeline. Request sample leads + verify quality + start with small-volume purchase before subscribing to ongoing pipeline.", audience: "Operators" },
      { question: "What does a VMC actually do?", answer: "Sits between multi-location host and the operators that service placements. Aggregates portfolio under master contract; runs portfolio dashboard; enforces SLA + ESG + compliance + commission settlement across operators. Standard for Fortune 500 corporate real estate, federal GSA / DoD, hospital systems, university systems.", audience: "Procurement" },
      { question: "What does a lead service actually do?", answer: "Identifies host businesses (offices, hotels, gyms, healthcare, manufacturing) that might accept a vending placement. Qualifies via outbound calling or list compilation. Sells qualified leads to operators looking to expand route. Operator-side pipeline tool; hosts never need this service.", audience: "Operators" },
      { question: "Why do these names overlap?", answer: "Both contain 'vending' + business-services modifier ('management' vs 'lead'). Marketing copy sometimes blurs distinction. Hosts searching 'vending management' sometimes land on lead-service pages + vice versa. Clear up at first vendor conversation — ask 'do you contract with hosts to manage their vending portfolio, or do you sell leads to operators?'", audience: "Everyone" },
      { question: "What's the price difference?", answer: "VMC: 5-15% override on operator commission or $2-25K/month fixed depending on portfolio size. 3-5 year master contract. Lead service: $50-500 per qualified lead or $200-1,500/month subscription. Pay-per-lead or monthly. Completely different economic models reflecting different value delivered.", audience: "Procurement" },
      { question: "Can a vendor do both?", answer: "Sometimes. Modern vending operators often handle both ends: serve enterprise hosts under VMC contracts (or directly) AND grow their own route via internal BD + selective lead-service partnerships. But VMC-only vendors don't sell leads, and lead-service-only vendors don't manage host portfolios. Verify capability at first conversation.", audience: "Everyone" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator + VMC standards", url: "https://www.namanow.org/", note: "Industry guidance distinguishing operator, VMC, and lead-service categories" },
      { label: "IFMA — Workplace Services + Facility Vending Programs", url: "https://www.ifma.org/", note: "Facility management guidance on vending vendor selection at enterprise hosts" },
      { label: "FTC — Lead Generation Industry Guidance", url: "https://www.ftc.gov/business-guidance", note: "Federal guidance on lead-service marketplaces + advertising compliance" },
      { label: "ULI — Multi-Location Real Estate Amenity Programs", url: "https://uli.org/", note: "Urban Land Institute guidance on enterprise amenity vendor selection" },
      { label: "VendingTimes / Automatic Merchandiser — industry coverage", url: "https://www.vendingtimes.com/", note: "Industry trade publication covering VMC and operator-side BD practice" },
    ],
  }),
  relatedGuides({
    heading: "Related management company guides",
    items: [
      { eyebrow: "Sister guide", title: "What is a vending management company?", description: "Definition, scope, and economics of VMC governance for multi-location enterprise hosts.", href: "/vending-management-companies/what-is-a-vending-management-company" },
      { eyebrow: "Operations", title: "How to choose a vending management company", description: "Ten criteria for VMC selection — portfolio dashboard, operator network, master contract, SLA, ESG, references.", href: "/vending-management-companies/how-to-choose-a-vending-management-company" },
      { eyebrow: "Hub", title: "All vending management company guides", description: "VMC scope, selection, contracts, SLAs, and economics across enterprise vending programs.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
