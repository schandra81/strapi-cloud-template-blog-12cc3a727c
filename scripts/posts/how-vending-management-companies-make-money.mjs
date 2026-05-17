import { seedPost, tldr, statStrip, costBreakdown, comparisonTable, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-vending-management-companies-make-money", [
  tldr({
    heading: "How do vending management companies actually make money?",
    paragraph:
      "Vending management companies (VMCs) earn revenue through three primary streams: (1) override on operator commission (5-15% of net sales paid by host on top of operator's commission, OR a slice of the operator's commission negotiated as a marketing / management allowance), (2) fixed monthly management fee ($2-25K depending on portfolio size and complexity), (3) implementation + transition fees (one-time charges for RFP management, operator onboarding, ESG report build-out, dashboard configuration — typically $10-100K at enterprise programs). Some VMCs operate hybrid models combining a smaller override (3-7%) with a smaller monthly fee ($1-5K). VMC margin structure: revenue minus operator network management cost (account team salaries, dashboard platform license, ESG reporting tools, compliance audit), minus G&A. Net margin: 8-18% at well-run VMCs; lower at undersized VMCs or those competing on fee alone. Larger VMCs (national footprint, 5,000+ locations under management) achieve scale economics via shared platform + centralized account management. Some VMCs are owned by operators (vertical integration) and earn additional margin via operator-side equipment + route economics. Verify VMC ownership structure at RFP — operator-owned VMCs may have channel conflicts.",
    bullets: [
      { emphasis: "Three primary revenue streams:",
        text: "Override on operator commission (5-15%), fixed monthly management fee ($2-25K), implementation + transition fees ($10-100K one-time). Hybrid models combine smaller override + monthly fee." },
      { emphasis: "8-18% net margin at well-run VMCs:",
        text: "Revenue minus operator network management cost (account team, dashboard platform, ESG tools, compliance audit), minus G&A. Scale economics at national VMCs." },
      { emphasis: "Verify ownership structure at RFP:",
        text: "Some VMCs operator-owned (vertical integration); may have channel conflicts favoring parent operator. Independent VMCs cleaner accountability layer." },
    ],
  }),
  statStrip({
    heading: "VMC revenue model benchmarks",
    stats: [
      { number: "5-15%", label: "override on operator commission", sub: "primary revenue stream", accent: "blue" },
      { number: "$2-25K", label: "monthly management fee", sub: "depending on portfolio size", accent: "blue" },
      { number: "$10-100K", label: "implementation / transition fee", sub: "one-time at enterprise programs", accent: "blue" },
      { number: "8-18%", label: "net margin", sub: "at well-run VMCs", accent: "blue" },
    ],
  }),
  costBreakdown({
    heading: "Example VMC revenue + cost structure",
    sub: "Illustrative VMC at mid-size enterprise portfolio (50 locations, $5M annual gross sales, mixed full-service vending + AI cooler wall + micro-market). Net margin: 8-18% at well-run VMCs.",
    items: [
      { label: "Revenue: override on operator commission (8% of $5M net sales)", amount: "$400,000 annual", note: "Primary revenue stream; varies 5-15%" },
      { label: "Revenue: fixed monthly management fee ($8K × 12)", amount: "$96,000 annual", note: "Some VMCs use hybrid model" },
      { label: "Revenue: implementation + transition fees (amortized)", amount: "$10,000 annual", note: "One-time $50K amortized over 5-year contract" },
      { label: "Total revenue (illustrative)", amount: "$506,000 annual", note: "Per 50-location mid-size enterprise portfolio" },
      { label: "Cost: account team (1 director + 1 ops mgr + 1 analyst)", amount: "$300,000 annual", note: "Dedicated team at enterprise account" },
      { label: "Cost: dashboard platform license + telemetry integration", amount: "$50,000 annual", note: "Modern VMC platform; integrates operator telemetry" },
      { label: "Cost: ESG reporting + compliance audit tools", amount: "$30,000 annual", note: "STARS / FEMP / ESG reporting + ADA / Section 508 audit" },
      { label: "Cost: G&A allocation (sales, finance, legal, marketing)", amount: "$45,000 annual", note: "Corporate allocation" },
      { label: "Total cost (illustrative)", amount: "$425,000 annual", note: "Direct + allocated cost at this account" },
    ],
    totalLabel: "Net margin (illustrative)",
    totalAmount: "$81,000 (~16%) at well-run VMC",
  }),
  comparisonTable({
    heading: "VMC revenue models — three primary structures",
    sub: "Most VMCs use one of three structures. Some use hybrid combining elements. Verify model at RFP; understand total host cost.",
    headers: ["Revenue model", "Structure", "Best fit", "Host total cost impact"],
    rows: [
      ["Override on operator commission", "5-15% of net sales paid by host on top of operator commission", "Variable revenue portfolios; host wants VMC interest aligned with portfolio performance", "Higher at high-revenue portfolios"],
      ["Fixed monthly management fee", "$2-25K monthly depending on portfolio size", "Stable portfolios; host wants predictable cost regardless of revenue", "Predictable; underweights portfolio scale upside"],
      ["Hybrid (smaller override + smaller fee)", "3-7% override + $1-5K monthly", "Mid-size portfolios; balanced incentive structure", "Moderate; balances variable and fixed"],
      ["Slice of operator commission (no host charge)", "VMC takes negotiated slice of operator's commission as management allowance", "Smaller portfolios; cost-sensitive hosts", "Lower transparent host cost; lower operator commission"],
      ["Implementation + transition fees", "$10-100K one-time per program build / transition", "All structures; charged in addition to ongoing revenue", "One-time cost at signature + transitions"],
    ],
  }),
  tipCards({
    heading: "Five VMC revenue model misconceptions",
    sub: "Common misunderstandings by prospective enterprise hosts evaluating VMC proposals. All clarifiable with structured fee schedule review.",
    items: [
      { title: "Thinking VMC fee is the total host cost impact", body: "VMC fee (override + monthly + implementation) is only part of the picture. VMC quality affects operator performance + commission lift. Cheap VMC with weak operator enforcement produces lower portfolio revenue than premium VMC. Evaluate portfolio-level revenue × commission %, not VMC fee alone." },
      { title: "Thinking all VMCs use the same fee structure", body: "Three primary structures: override on operator commission (5-15%), fixed monthly fee ($2-25K), hybrid (3-7% + $1-5K monthly). Some VMCs take slice of operator commission (no host charge). Verify model at RFP; understand total host cost; comparable across structures." },
      { title: "Skipping implementation fee discussion", body: "$10-100K one-time implementation + transition fees at enterprise programs. Charged for RFP management, operator onboarding, ESG report build-out, dashboard configuration. Verify at RFP; build into total cost; understand what's included vs add-on. Surprises here are common." },
      { title: "Not verifying VMC ownership structure", body: "Some VMCs operator-owned (vertical integration); earn additional margin via parent operator equipment + route economics. May have channel conflicts favoring parent operator at operator selection. Independent VMCs cleaner accountability layer. Verify ownership structure at RFP." },
      { title: "Optimizing for VMC fee alone", body: "Lowest VMC fee ≠ best portfolio outcome. VMC quality drives operator performance + commission lift through enforcement, ESG consolidation, compliance enforcement. Evaluate as portfolio-level revenue × commission %, not VMC fee percentage." },
    ],
  }),
  inlineCta({
    text: "Want the VMC revenue model framework (three structures + ownership + total host cost)?",
    buttonLabel: "Get the VMC revenue framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise enterprise hosts on vending management company revenue model evaluation — including override vs fixed fee vs hybrid structures, implementation fee transparency, ownership structure verification, and total host cost analysis. The benchmarks reflect VMC and operator industry data plus enterprise host post-contract feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do vending management companies make money?", answer: "Three primary revenue streams: override on operator commission (5-15% of net sales paid by host on top of operator commission), fixed monthly management fee ($2-25K depending on portfolio size), implementation + transition fees ($10-100K one-time at enterprise programs). Some VMCs use hybrid models combining smaller override + smaller monthly fee.", audience: "Procurement" },
      { question: "What's a typical VMC margin?", answer: "8-18% net margin at well-run VMCs. Lower at undersized VMCs or those competing on fee alone. Larger VMCs (national footprint, 5,000+ locations under management) achieve scale economics via shared platform + centralized account management. Some VMCs operator-owned, earning additional margin via parent operator economics.", audience: "Procurement" },
      { question: "Is override or monthly fee better?", answer: "Depends on portfolio characteristics. Override on operator commission: aligns VMC interest with portfolio performance; variable cost. Fixed monthly fee: predictable cost regardless of revenue; underweights portfolio scale upside. Hybrid: balanced incentive structure. Verify model at RFP; evaluate total host cost.", audience: "Procurement" },
      { question: "What are implementation fees for?", answer: "RFP management (operator selection, capability verification, reference checks), operator onboarding (contract sub-execution, telemetry integration, dashboard configuration), ESG report build-out (STARS / FEMP / ESG submission framework), dashboard configuration. $10-100K one-time at enterprise programs. Verify at RFP; build into total cost.", audience: "Procurement" },
      { question: "Do operator-owned VMCs have conflicts?", answer: "Sometimes. Operator-owned VMCs (vertical integration with parent operator) earn additional margin via parent operator equipment + route economics. May have channel conflicts at operator selection (favor parent operator at RFP). Independent VMCs cleaner accountability layer. Verify ownership structure at RFP.", audience: "Procurement" },
      { question: "Are there hidden VMC fees?", answer: "Common surprises: transition fees ($10-50K per operator change), dashboard upgrade fees, ESG reporting tier fees, compliance audit fees, transaction processing pass-through. Modern VMCs transparent in fee schedule; legacy / undersized VMCs less so. Request comprehensive fee schedule at RFP; engage commercial contract counsel.", audience: "Procurement" },
      { question: "Does VMC fee reduce operator commission?", answer: "Two structures. (1) Override paid by host on top of operator commission: host pays VMC + operator separately. (2) Slice of operator commission: VMC takes negotiated slice of operator's commission as management allowance; operator commission to host is reduced. Verify structure; understand who bears VMC cost.", audience: "Procurement" },
      { question: "How do we compare VMC proposals?", answer: "Normalize all proposals to total host cost on identical portfolio assumptions. Override × revenue + monthly fee × 12 + amortized implementation. Compare against VMC capability (dashboard, network, SLA enforcement, ESG, compliance). Evaluate portfolio-level revenue × commission %, not VMC fee alone.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator and management company commercial models" },
      { label: "IFMA — International Facility Management Association", url: "https://www.ifma.org/", note: "Facility management industry standards covering enterprise service contracts" },
      { label: "FTC — Franchise Disclosure Document guidance", url: "https://www.ftc.gov/business-guidance/industry/franchises", note: "FTC reference for franchise / management disclosure standards" },
      { label: "GSA — U.S. General Services Administration vending program guidance", url: "https://www.gsa.gov/", note: "Federal procurement guidance covering VMC contracting" },
      { label: "Vending Times — operator + management company commercial model coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending commercial model trends" },
    ],
  }),
  relatedGuides({
    heading: "Related vending management guides",
    items: [
      { eyebrow: "Sister guide", title: "What is a vending management company?", description: "VMC versus operator distinction, capabilities, fee structure, enterprise program rationale.", href: "/vending-management-companies/what-is-a-vending-management-company" },
      { eyebrow: "Sister guide", title: "Cost of vending management services", description: "Total host cost analysis — fee structures, implementation, ongoing, transition costs.", href: "/vending-management-companies/cost-of-vending-management-services" },
      { eyebrow: "Hub", title: "All vending management company guides", description: "VMC capabilities, selection, contracts, fee structure, and enterprise program design.", href: "/vending-management-companies" },
    ],
  }),
]);
process.exit(0);
