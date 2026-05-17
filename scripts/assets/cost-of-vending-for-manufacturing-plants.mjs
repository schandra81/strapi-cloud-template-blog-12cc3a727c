import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cost-of-vending-for-manufacturing-plants",
  assetType: "pack",
  title: "Manufacturing Vending Cost Pack",
  subtitle: "Contract structures, commission negotiation, scenario pricing, and operator selection checklist",
  intro:
    "This pack consolidates the working documents a manufacturing facility's procurement, finance, and HR teams need to understand the real cost of a vending program: the four contract structures, commission negotiation framework, scenario pricing for representative plant sizes, and an operator selection checklist. Built around operator-attestable terms.",
  sections: [
    {
      heading: "1. The four contract structures",
      paragraph:
        "All vending arrangements collapse to one of four structures. Understand which one fits before negotiating commission percentages.",
      headers: ["Structure", "Capital", "Who owns inventory", "Employer pays", "Best fit"],
      rows: [
        ["Full-service commission", "$0 employer", "Operator", "Optional commission to host + optional subsidy", "200+ FTE; $200+/wk/machine revenue"],
        ["Full-service subsidized", "$0 employer", "Operator", "Subsidy mechanic against badge; small/no commission", "Employer wants wellness-tilt + retention messaging"],
        ["Hybrid managed", "Operator + employer", "Mixed (smart cooler operator; some employer-replenish)", "Service fee + subsidy + commission on operator slots", "Mid-large plants with food-service org"],
        ["Self-service / employer-operated", "Employer-funded $20–40k initial", "Employer", "All operating costs", "Very high volume + existing food-service team"],
      ],
    },
    {
      heading: "2. Commission negotiation framework",
      paragraph:
        "Commission to the host is most commonly a % of gross revenue, sometimes tiered. Below: realistic ranges by revenue tier — used as a benchmarking anchor in operator RFP.",
      headers: ["Site monthly revenue (per machine)", "Typical commission to host", "Operator service fee"],
      rows: [
        ["< $250/wk (under threshold)", "0%", "$140–$280/machine/month"],
        ["$250–$500/wk", "0–5%", "$0–$80/machine/month"],
        ["$500–$1,000/wk", "5–10%", "$0"],
        ["$1,000–$2,000/wk", "10–18%", "$0"],
        ["$2,000+/wk", "15–25% (tiered)", "$0 + operator may offer setup credit"],
      ],
    },
    {
      heading: "3. Subsidy economics — three mechanics",
      items: [
        { label: "$/shift credit", value: "Typical $3–$8/shift loaded against badge. 250-FTE × 240 shifts × 50% participation × $5/shift = $150,000/year." },
        { label: "$/pay-period credit", value: "Typical $20–$40 per bi-weekly period. 250-FTE × 26 periods × 50% participation × $25 = $81,250/year." },
        { label: "Category subsidy", value: "Subsidy applied only to wellness or hydration categories. Drives wellness without paying for soda; typical reduction ~30–50% vs blanket subsidy." },
        { label: "Discount-at-PoS", value: "Operator applies fixed % discount (15–25%); employer reimburses operator monthly. Simplest mechanic; least targeting." },
      ],
    },
    {
      heading: "4. Scenario pricing — 3 representative plant sizes",
      paragraph:
        "Below: annual cost framework for representative deployments. Replace with operator quotes during RFP.",
      headers: ["Line item", "100-FTE plant", "250-FTE plant", "500-FTE plant"],
      rows: [
        ["Hardware (operator-funded)", "$0", "$0", "$0"],
        ["Below-threshold service fee", "$1,800 – $3,400", "$0", "$0"],
        ["Subsidy budget ($5/shift, 50% participation)", "$30,000 – $48,000", "$120,000 – $150,000", "$240,000 – $300,000"],
        ["Wellness committee / RD consult", "$1,200 – $2,400", "$1,800 – $4,200", "$2,800 – $6,400"],
        ["Quarterly reviews + dashboards", "$800 – $2,000", "$1,200 – $3,200", "$2,000 – $4,800"],
        ["Total program (year)", "$33,800 – $55,800", "$123,000 – $157,400", "$244,800 – $311,200"],
        ["Per-FTE cost (year)", "$338 – $558", "$492 – $630", "$490 – $622"],
      ],
    },
    {
      heading: "5. Hidden + overlooked costs",
      items: [
        { label: "Electrical install (one-time)", value: "$400–$1,500 per dedicated 20A circuit if not already in place." },
        { label: "Network / cellular signal kit", value: "$0–$800 per cabinet if facility cellular weak; usually included in operator quote." },
        { label: "ADA recertification (annual)", value: "$200–$500/machine; sometimes line-item, sometimes bundled." },
        { label: "PCI-DSS reader lifecycle refresh", value: "$0 in-contract typical; $350–$650/reader at end of 5–7 year lifecycle." },
        { label: "Workforce comms + signage", value: "$400–$1,800 at launch; refresh at major planogram changes." },
        { label: "Payroll-deduct integration consulting", value: "$0–$3,500 one-time if integrating with Workday/Kronos/UKG for first time." },
        { label: "Operator turnover transition", value: "$2,000–$8,000 one-time if recompete or operator change mid-contract." },
        { label: "End-of-life equipment removal", value: "$0 in full-service typical; verify in contract." },
      ],
    },
    {
      heading: "6. Operator selection checklist — cost transparency",
      items: [
        { check: "Quote breaks down commission %, service fee, and subsidy admin transparently" },
        { check: "All hidden / overlooked costs (above) explicitly listed in quote or marked 'included'" },
        { check: "PCI-DSS v4.0 AoC on file; AoC term + cost included" },
        { check: "Insurance certificates: $1M/$2M GL + product liability + cyber if cashless" },
        { check: "Reference checks (3 minimum) from manufacturing sites of comparable size + complexity" },
        { check: "Termination / transition cost capped in contract" },
        { check: "Service credit remedy for SLA breach defined in dollars or % of fee" },
        { check: "Audit rights — operator opens commission books to host on 30-day notice" },
        { check: "Per-shift telemetry dashboard accessible to facility services + HR" },
      ],
    },
    {
      heading: "7. 5-year TCO framework",
      paragraph:
        "Year 1 typically includes one-time costs (install, signage, comms). Steady-state years 2–5 lower. Below: framework for the 250-FTE plant scenario.",
      headers: ["Cost class", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      rows: [
        ["Subsidy (escalated 3%/yr)", "$135,000", "$139,050", "$143,222", "$147,518", "$151,944"],
        ["Reviews + RD consult", "$3,800", "$3,914", "$4,031", "$4,152", "$4,277"],
        ["One-time install + comms", "$3,200", "$0", "$0", "$0", "$0"],
        ["ADA recertification", "$1,600", "$1,648", "$1,697", "$1,748", "$1,801"],
        ["PCI reader refresh", "$0", "$0", "$0", "$0", "$2,800"],
        ["Total", "$143,600", "$144,612", "$148,950", "$153,418", "$160,822"],
        ["5-year total", "—", "—", "—", "—", "$751,402"],
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate manufacturing-plant vending procurement through operators that can attest in writing to transparent commission structures, PCI-DSS v4.0 AoC, payroll-deduct integration, and quarterly business reviews. Capability documentation provided on request during scoping. Numbers shown are framework ranges — replace with operator quotes before any procurement decision.",
    },
  ],
  footer:
    "Working reference for manufacturing procurement, finance, and HR. Subsidy structures should be reviewed against parent-company wellness budget framework; commission audit rights and termination clauses should be reviewed by counsel.",
});

console.log("wrote "+"cost-of-vending-for-manufacturing-plants");
