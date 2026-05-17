import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hospital-vending-revenue-use",
  assetType: "template",
  title: "Hospital Vending Revenue Framework",
  subtitle: "Allocation model, board policy template, monthly reporting cadence, and IRS Section 501(r) community-benefit alignment",
  intro:
    "Hospital vending revenue is small in absolute dollars (typically 0.05-0.15% of operating revenue) but carries disproportionate governance weight because of community-benefit reporting (IRS Form 990 Schedule H), patient-experience scoring (HCAHPS), and Joint Commission accreditation. This framework gives the finance office a defensible allocation model, a board policy template the audit committee can adopt, a monthly reporting cadence the operator can support, and the community-benefit alignment language the 990 preparer needs.",
  sections: [
    {
      heading: "1. Revenue allocation model — six target categories",
      paragraph:
        "Most nonprofit and public-district hospitals allocate vending net revenue across six categories. Weights below are illustrative; the board policy should set the actual weights and the CFO should reconcile annually.",
      headers: ["Allocation category", "Suggested weight", "Reporting line"],
      rows: [
        ["Patient + family hardship fund (meal vouchers, transportation, lodging)", "30-40%", "Form 990 Schedule H Part I Line 7a — Financial Assistance"],
        ["Employee wellness program (subsidies, screenings, fitness)", "20-25%", "Schedule H Part I Line 7e — Community Health Improvement"],
        ["Volunteer + auxiliary recognition + supplies", "10-15%", "Schedule H Part III — Community Building"],
        ["Cafeteria + nutrition program subsidy (healthy-food pricing offsets)", "10-15%", "Schedule H Part I Line 7e"],
        ["Capital reserve (refrigeration, micro-market expansion)", "10-15%", "Operating budget — capital"],
        ["Administrative + audit reserve", "5%", "Operating budget — G&A"],
      ],
    },
    {
      heading: "2. Board policy template — adopt by audit committee",
      paragraph:
        "Insert the hospital legal name and effective date. Audit committee adopts; CFO and Compliance Officer co-own. Review annually with the Form 990 preparation cycle.",
      items: [
        { label: "Section 1 — Purpose", value: "Govern the use of net revenue derived from vending and micro-market services on hospital-controlled premises, ensure alignment with IRS Section 501(r) community-benefit standards, and document fiduciary accountability." },
        { label: "Section 2 — Scope", value: "All vending machines, micro-markets, kiosks, and unattended retail devices on hospital-owned, hospital-leased, or hospital-managed property, including off-site clinics and medical office buildings under the hospital's tax ID." },
        { label: "Section 3 — Definitions", value: "'Net revenue' = gross commissions paid by operator minus direct hospital costs (electricity sub-meter where available, A/V signage, hospital-side admin). 'Community benefit' as defined in IRS Form 990 Schedule H instructions." },
        { label: "Section 4 — Allocation", value: "Net revenue allocated quarterly per the model above. Allocation weights reviewed annually; deviations > 5 percentage points from policy require audit committee resolution." },
        { label: "Section 5 — Reporting", value: "CFO submits a quarterly vending revenue + allocation report to the audit committee. Annual report consolidated into the Schedule H community-benefit narrative." },
        { label: "Section 6 — Conflicts of interest", value: "Operator contract bid + award follows hospital procurement policy. Trustees and senior leadership recuse from operator selection where a financial interest exists, per the hospital conflict-of-interest policy." },
        { label: "Section 7 — Vendor obligations", value: "Operator submits monthly revenue statement, per-machine sales detail (telemetry export), and an annual reconciliation aligned with the hospital fiscal year. Operator commission audit rights retained by hospital." },
        { label: "Section 8 — Review + amendment", value: "Audit committee reviews this policy annually. Amendments require audit committee resolution and board notification." },
      ],
    },
    {
      heading: "3. Monthly reporting cadence",
      paragraph:
        "The operator delivers monthly; the finance office consolidates quarterly; the audit committee reviews semi-annually. Cadence below assumes calendar-year fiscal close; adjust dates for a June 30 fiscal year.",
      headers: ["Cadence", "Owner", "Output", "Due"],
      rows: [
        ["Monthly statement", "Operator", "Gross sales, commission, refund volume, per-machine detail, telemetry uptime", "By 15th of following month"],
        ["Monthly reconciliation", "Hospital AR", "Commission tie-out against operator statement; variance flag > 2%", "By 25th of following month"],
        ["Quarterly allocation memo", "CFO", "Allocation across 6 categories per policy weights", "Within 30 days of quarter end"],
        ["Quarterly audit-committee report", "CFO", "Variance analysis + telemetry uptime + community-benefit-tagged spend", "Audit committee meeting"],
        ["Annual Schedule H narrative", "Compliance + CFO", "Community benefit attribution per IRS Form 990 instructions", "Aligned with Form 990 filing"],
      ],
    },
    {
      heading: "4. IRS Section 501(r) + Schedule H alignment",
      paragraph:
        "Allocations that map to Schedule H Part I categories should be tagged in the GL with a community-benefit identifier so the 990 preparer can extract spend without manual reclassification. Coordinate the GL tag list with your external auditor.",
      items: [
        { number: 1, title: "Tag GL accounts", description: "Add a community-benefit dimension to allocation accounts so Schedule H Part I lines 7a, 7e, and 7f can be populated directly." },
        { number: 2, title: "Document the methodology", description: "Schedule H Part I Line 7 instructions require a description of methodology. Reference this framework in the methodology narrative." },
        { number: 3, title: "Preserve documentation", description: "Retain monthly statements, reconciliation memos, and allocation resolutions for 7 years (IRS recommendation for Form 990 supporting documents)." },
        { number: 4, title: "Coordinate with 340B + DSH", description: "Vending allocation does not affect 340B or DSH reporting directly, but if hardship vouchers are funded by vending net revenue and used at the 340B pharmacy, coordinate with the 340B compliance officer." },
      ],
    },
    {
      heading: "5. Operator capability — what to require in the RFP",
      paragraph:
        "Hospital procurement should require these capabilities from any operator bidding on the vending contract. They map directly to the monthly reporting cadence above.",
      items: [
        { check: "Cellular-modem telemetry on every machine with sub-15-minute heartbeat (Cantaloupe, Nayax, 365 Retail Markets, or comparable). Required for per-machine sales detail." },
        { check: "Monthly commission statement with per-machine + per-SKU sales export (CSV or API). Required for AR reconciliation." },
        { check: "Quarterly business review with operations leadership + the finance office. Required for allocation memo support." },
        { check: "Audit-right clause permitting hospital review of operator commission calculations against telemetry data." },
        { check: "Refrigeration + cold-chain monitoring for any device dispensing perishables, with 4-hour SLA on temperature excursion." },
        { check: "ADA Title III + Section 308 attestation; reach range, clear floor space, operating force per the federal standard." },
        { check: "Healthy-options compliance with the hospital's nutrition policy (typically aligned with American Heart Association or institution-specific standards)." },
      ],
    },
    {
      heading: "6. Reporting template — quarterly allocation memo",
      paragraph:
        "Use this as the standing quarterly memo from CFO to audit committee. One page; consistent format quarter over quarter so trends are obvious.",
      items: [
        { label: "Header", value: "Hospital name, fiscal quarter, period dates, memo author (CFO), distribution list (audit committee, compliance officer)." },
        { label: "Section A — Gross + net revenue", value: "Gross commission received, hospital-side direct costs deducted, net revenue available for allocation. Compare quarter-over-quarter and year-over-year." },
        { label: "Section B — Allocation summary", value: "Dollar amount and % allocated to each of the 6 policy categories. Variance to policy weight flagged where > 5 percentage points." },
        { label: "Section C — Telemetry + uptime", value: "Aggregate uptime % across the fleet, machines below 95% threshold, operator action items." },
        { label: "Section D — Refund + service tickets", value: "Refund volume, refund rate as % of gross transactions, service-ticket SLA adherence." },
        { label: "Section E — Community benefit roll-forward", value: "Year-to-date spend tagged for Schedule H, by category. Used to support the 990 narrative." },
        { label: "Section F — Action items", value: "Open items from prior quarter; new items from this quarter; owner; due date." },
      ],
    },
  ],
  footer:
    "This framework is a working operational reference, not legal or tax advice. Coordinate the GL tagging methodology with your external auditor and the Schedule H attribution with your Form 990 preparer. Operator capability requirements should be incorporated by reference into the procurement contract.",
});

console.log("wrote "+"hospital-vending-revenue-use");
