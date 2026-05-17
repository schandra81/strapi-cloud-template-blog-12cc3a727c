import { seedPost, tldr, comparisonTable, costBreakdown, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-management-vs-self-managed", [
  tldr({
    heading: "Should we use a vending management company or run vending in-house (self-managed)?",
    paragraph:
      "Vending management companies (full-service operators) absorb equipment + restocking + service + payment processing + commission to host, requiring zero host capital + zero operating effort. Self-managed vending (host buys equipment + restocks + services + processes payments + keeps 100% revenue) requires $5-80K capital per machine + ongoing operational effort + retail + service capability. Choice depends on host operational scale + capital availability + revenue priority + risk tolerance. Vending management appropriate for: 95% of commercial placements (office, apartment, hospital, campus, retail, government, etc.); typical scenario where amenity / employee benefit is the goal rather than direct profit; hosts without retail / service operational capability; risk-averse hosts (operator absorbs operational + financial risk). Self-managed appropriate for: large institutional hosts with retail capability already (campus dining, hospital food service, military exchange, transit authority); high-volume placements with strong margin economics; hosts pursuing direct profit rather than commission; hosts with existing CMMS / inventory / payment infrastructure that supports vending integration. Hybrid models exist: micro-market with self-serve (host capital + operator service), branded vending (host capital + operator service + co-branded commission share), revenue-share with capital contribution. Most commercial hosts choose vending management (95%+ of market) due to zero-capital + zero-effort + operational risk transfer. Institutional hosts with existing retail capability sometimes choose self-managed at high-volume placements.",
    bullets: [
      { emphasis: "Vending management: $0 capital + $0 effort + commission to host:",
        text: "95%+ of commercial placements. Operator absorbs equipment + restocking + service + payment + risk. Commission 10-25% of net sales to host." },
      { emphasis: "Self-managed: $5-80K capital + retail / service capability required + 100% revenue:",
        text: "Institutional hosts with existing capability. Campus dining, hospital food service, military exchange, transit authority. High-volume placements with strong margins." },
      { emphasis: "Hybrid models exist:",
        text: "Micro-market with self-serve, branded vending with co-branded commission share, revenue-share with capital contribution. Negotiate per placement.", },
    ],
  }),
  comparisonTable({
    heading: "Vending management vs self-managed comparison",
    sub: "Most commercial hosts choose vending management (95%+ of market). Institutional hosts with retail capability sometimes choose self-managed.",
    headers: ["Dimension", "Vending management (full-service operator)", "Self-managed (host runs vending)"],
    rows: [
      ["Host capital required", "$0 (operator-funded)", "$5-80K per machine (combo $5-12K; AI cooler $20-80K)"],
      ["Host operational effort", "Minimal (planogram input, quarterly review, escalation contact)", "Substantial (restocking, payment, service, inventory, vendor management)"],
      ["Revenue split", "Host receives commission 10-25% of net sales", "Host keeps 100% of net sales (after wholesale + payment + service costs)"],
      ["Risk allocation", "Operator absorbs operational + financial risk", "Host absorbs all risk (theft, spoilage, payment failure, equipment failure)"],
      ["Required host capability", "None — operator provides all", "Retail + inventory + payment + service capability needed"],
      ["Telemetry + reporting", "Provided by operator (monthly per-machine, quarterly business review)", "Host builds + maintains; integrates with host ERP"],
      ["Equipment refresh", "Operator-managed (typically 5-7 year fleet rotation)", "Host capital expense (depreciation cycle, replacement planning)"],
      ["Speed to deployment", "2-6 weeks from contract to operational machine", "8-16 weeks from decision to operational machine (procurement + install + ops setup)"],
      ["Typical placement fit", "95%+ of commercial sites (office, apartment, hospital, campus, retail, etc.)", "Institutional with existing retail capability (campus dining, hospital food service, military exchange, transit authority)"],
    ],
  }),
  costBreakdown({
    heading: "Self-managed vending — host cost breakdown per machine",
    sub: "Year 1 capital + operating cost for self-managed combo vending machine. Compare to $0 capital + commission revenue under vending management.",
    items: [
      { label: "Combo vending machine purchase", amount: "$5,000-12,000", range: "Capital, varies by model + payment system" },
      { label: "Payment system upgrade (EMV + contactless + mobile-wallet)", amount: "$800-2,000", range: "If not included in machine" },
      { label: "Electrical install (dedicated 20A circuit + outlet)", amount: "$150-500", range: "Most placements require upgrade" },
      { label: "Initial product fill", amount: "$300-800", range: "30-50 SKUs at wholesale" },
      { label: "Inventory management software (if not existing)", amount: "$50-300", range: "Per month, ongoing" },
      { label: "Payment processing fees", amount: "$0.05-0.45", range: "Per transaction, 2-4% of revenue typical" },
      { label: "Restocking labor (host employee or contractor)", amount: "$50-200", range: "Per restock, weekly typical" },
      { label: "Service / repair (parts + labor)", amount: "$200-800", range: "Annual budget per machine" },
      { label: "Refrigeration energy cost", amount: "$15-40", range: "Per month, ENERGY STAR machines lower end" },
    ],
    totalLabel: "Year 1 total per machine (self-managed)",
    totalAmount: "$8K-18K capital + $2-6K annual operating",
  }),
  specList({
    heading: "Vending management vs self-managed decision criteria",
    items: [
      { label: "Operational scale", value: "Hosts with single placement or 2-5 placements rarely justify self-managed infrastructure. Hosts with 20+ placements + existing retail capability may justify self-managed. Operational scale needs to support inventory + payment + service + compliance infrastructure. Most commercial hosts lack this scale." },
      { label: "Capital availability", value: "Self-managed requires $5-80K per machine capital. Vending management is $0 host capital (operator-funded). Capital-constrained hosts choose vending management. Capital-flush institutional hosts with retail operations may choose self-managed at high-volume placements where margins justify capital." },
      { label: "Revenue priority", value: "Self-managed produces 100% of net revenue but requires absorption of all operational costs. Vending management produces 10-25% commission with no operational costs. Net to host varies — at low-revenue placements self-managed may produce less net than commission; at high-revenue placements self-managed may produce more net than commission." },
      { label: "Risk tolerance", value: "Vending management: operator absorbs operational + financial risk (theft, spoilage, payment failure, equipment failure, regulatory non-compliance). Self-managed: host absorbs all risk. Risk-averse hosts choose vending management. Risk-tolerant hosts with operational capability may choose self-managed at strong-margin placements." },
      { label: "Required host capability", value: "Self-managed requires: inventory management, payment processing (PCI-DSS), service + repair capability (mechanical, refrigeration, electronic), regulatory compliance (FDA labeling, ADA, food safety), telemetry + reporting, vendor management. Most commercial hosts lack this capability. Institutional hosts with retail operations have most of it." },
      { label: "Speed to deployment", value: "Vending management: 2-6 weeks from contract to operational machine. Self-managed: 8-16 weeks from decision to operational machine (procurement 2-6 weeks + install 1-2 weeks + ops setup 4-8 weeks). Vending management is faster; self-managed requires substantial setup time." },
      { label: "Equipment refresh + technology evolution", value: "Vending management: operator-managed refresh (5-7 year fleet rotation typical), operator absorbs technology evolution (new payment systems, AI vending, telemetry upgrades). Self-managed: host capital expense for refresh, host evaluates + procures technology upgrades. Technology drift risk higher under self-managed for non-retail hosts." },
      { label: "Hybrid model possibilities", value: "Micro-market with self-serve (host capital + operator service). Branded vending (host-branded equipment + operator service + co-branded commission share). Revenue-share with capital contribution. Negotiate per placement based on host capability + capital availability + revenue priority." },
      { label: "Compliance burden", value: "Vending management: operator handles FDA labeling, ADA, food safety, payment compliance. Self-managed: host responsible for all compliance. Compliance complexity (especially at federal, hospital, school, multi-state) often tips decision to vending management even at large institutional hosts." },
    ],
  }),
  tipCards({
    heading: "Five vending management vs self-managed decision patterns",
    sub: "Most commercial hosts choose vending management (95%+); institutional hosts with retail capability sometimes choose self-managed at high-volume placements.",
    items: [
      { title: "Default to vending management for commercial placements", body: "Office, apartment, hospital (non-self-managed food service), campus (non-dining operations), retail, government, clinic, library. 95%+ of commercial placements. Operator-funded equipment + zero host operational effort + commission revenue. Risk transferred. Commercial hosts rarely justify self-managed." },
      { title: "Self-managed where retail capability exists at scale", body: "Campus dining, hospital food service, military exchange, transit authority, prison commissary. Institutional hosts with existing retail + inventory + payment + service capability + 20+ placement scale. Self-managed at high-volume placements where margins justify capital + operational effort." },
      { title: "Hybrid models for specialized situations", body: "Micro-market with self-serve at college student union (host capital + operator service). Branded vending at corporate campus with brand priority (host-branded chassis + operator service + co-branded commission share). Revenue-share with capital contribution at high-revenue specialty placements. Negotiate per situation." },
      { title: "Compliance complexity tips to vending management", body: "FDA labeling, ADA accessibility, food safety, payment compliance, multi-state regulatory complexity. Vending management operators handle as core competency. Self-managed hosts must build + maintain compliance infrastructure. At federal + hospital + multi-state placements, compliance burden often tips to vending management even for capable institutional hosts." },
      { title: "Calculate net revenue, not gross", body: "Self-managed produces 100% gross revenue but requires absorption of wholesale + payment + service + compliance + capital depreciation costs. Net to host varies. At low-revenue placements ($400-1.5K monthly), self-managed may produce less net than commission. At high-revenue placements ($3-15K monthly), self-managed may produce more net than commission. Run net calculation before deciding." },
    ],
  }),
  decisionTree({
    heading: "Should you choose vending management or self-managed?",
    question: "Do you have existing retail, inventory, payment, and service capability at 20+ placements, capital for $5-80K per machine, and high-revenue locations (>$3K/month) where self-managed margins justify the effort?",
    yesBranch: {
      title: "Yes — self-managed may be appropriate at high-revenue placements",
      description: "Institutional host (campus dining, hospital food service, military exchange, transit authority) with retail capability + capital + high-revenue placements. Self-managed at qualifying placements. Combination with vending management at lower-revenue placements where commission economics work better.",
      finalTone: "go",
      finalLabel: "Consider self-managed at high-revenue placements",
    },
    noBranch: {
      title: "No — choose vending management (full-service operator)",
      description: "95%+ of commercial hosts. Operator-funded equipment + zero host operational effort + commission revenue + risk transferred. 2-6 week deployment. Modern operators with telemetry + ENERGY STAR + monthly reporting + sustainability data. Don't take on operational complexity unless retail capability + capital + revenue economics support it.",
      finalTone: "stop",
      finalLabel: "Choose vending management",
    },
  }),
  inlineCta({
    text: "Want the vending management vs self-managed framework (capital + capability + revenue + risk)?",
    buttonLabel: "Get the decision framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending management vs self-managed decision-making across commercial and institutional hosts — including office, apartment, hospital, campus, military, transit, federal, and retail placements. The decision criteria reflect operator-side data on vending management economics and institutional-side data on self-managed retail operations.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Should we use a vending management company or run vending in-house?", answer: "95%+ of commercial hosts choose vending management (operator-funded equipment + zero host effort + commission revenue + risk transferred). Self-managed appropriate for institutional hosts with existing retail capability at 20+ placement scale + high-revenue placements (>$3K monthly) where margins justify capital. Hybrid models exist.", audience: "Property Managers" },
      { question: "What's the capital difference?", answer: "Vending management: $0 host capital (operator-funded). Self-managed: $5-12K per combo vending machine, $20-80K per AI cooler wall, plus payment system, electrical install, initial fill, software. $8-18K Year 1 capital + $2-6K annual operating per machine self-managed. Vending management is zero capital.", audience: "Procurement" },
      { question: "What's the revenue difference?", answer: "Vending management: host receives 10-25% commission on net sales. Self-managed: host keeps 100% net revenue after wholesale + payment + service + compliance + capital depreciation. Net comparison depends on placement revenue level. Low-revenue placements: commission often wins. High-revenue placements: self-managed may produce more net.", audience: "Finance" },
      { question: "When does self-managed make sense?", answer: "Institutional hosts with existing retail capability (campus dining, hospital food service, military exchange, transit authority, prison commissary) at 20+ placement scale + high-revenue placements (>$3K monthly). Existing inventory + payment + service + compliance infrastructure already in place. Capital available for equipment + operational effort budget.", audience: "Property Managers" },
      { question: "What capability does self-managed require?", answer: "Inventory management, payment processing (PCI-DSS), service + repair capability (mechanical, refrigeration, electronic), regulatory compliance (FDA labeling, ADA, food safety), telemetry + reporting, vendor management. Most commercial hosts lack this capability. Institutional hosts with retail operations have most of it.", audience: "Operations" },
      { question: "What are hybrid models?", answer: "Micro-market with self-serve (host capital + operator service). Branded vending (host-branded equipment + operator service + co-branded commission share). Revenue-share with capital contribution at high-revenue specialty placements. Negotiate per situation based on host capability + capital availability + revenue priority.", audience: "Procurement" },
      { question: "What about risk allocation?", answer: "Vending management: operator absorbs operational + financial risk (theft, spoilage, payment failure, equipment failure, regulatory non-compliance). Self-managed: host absorbs all risk. Risk-averse hosts choose vending management. Risk-tolerant hosts with operational capability + insurance may choose self-managed.", audience: "Risk Management" },
      { question: "How does compliance burden affect the decision?", answer: "FDA labeling, ADA accessibility, food safety, payment compliance, multi-state regulatory complexity. Vending management operators handle as core competency. Self-managed hosts must build + maintain compliance infrastructure. Compliance burden often tips decision to vending management even for capable institutional hosts at federal + hospital + multi-state placements.", audience: "Compliance" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending management vs self-operated standards", url: "https://www.namanow.org/", note: "Industry trade association covering vending management and self-operated vending standards" },
      { label: "NACUFS — campus dining and self-operated retail", url: "https://www.nacufs.org/", note: "Campus dining trade association covering institutional self-managed retail operations" },
      { label: "AHA — hospital food service operations", url: "https://www.aha.org/", note: "American Hospital Association covering hospital food service and self-managed retail" },
      { label: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards underlying self-managed vending payment infrastructure" },
      { label: "Vending Times — management vs self-managed coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending management economics and self-managed operations" },
    ],
  }),
  relatedGuides({
    heading: "Related management and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Benefits of using a vending management company", description: "Why most commercial hosts choose full-service vending management.", href: "/vending-management-companies/benefits-of-using-a-vending-management-company" },
      { eyebrow: "Operations", title: "What is a vending management company", description: "Full-service operator capability, scope, and contract structure.", href: "/vending-management-companies/what-is-a-vending-management-company" },
      { eyebrow: "Hub", title: "All vending management resources", description: "Vendor evaluation, service models, performance measurement, operations.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
