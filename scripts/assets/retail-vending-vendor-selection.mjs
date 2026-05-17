import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "retail-vending-vendor-selection",
  assetType: "pack",
  title: "Retail Vending Vendor Selection Framework",
  subtitle: "7-dimension RFP scoring, reference check protocol, contract template",
  intro:
    "Retail vending vendor selection is a procurement exercise with merchandising, IT, finance, and operations stakeholders. Without a structured scoring framework, the cheapest bid wins and the program underperforms within 12 months. This pack codifies a 7-dimension RFP rubric, a reference check protocol that surfaces real performance, and a contract template anchored on measurable SLAs.",
  sections: [
    {
      heading: "1. 7-dimension RFP scoring rubric",
      paragraph:
        "Score 1-5 per dimension; weight by retailer priority. Operators below 3.5 weighted average rarely deliver on stated commitments.",
      headers: ["Dimension", "What to evaluate", "Typical weight"],
      rows: [
        ["Equipment + telemetry", "Equipment age, ENERGY STAR + low-GWP refrigerant, telemetry platform, EMS, refresh schedule", "15%"],
        ["Payment + PCI posture", "EMVCo + PCI DSS v4.0 AOC, contactless + mobile wallet, loyalty SDK, transparent fee schedule", "20%"],
        ["Merchandising + planogram", "SKU breadth, supplier relationships, campaign capability, planogram refresh cadence, healthy share", "15%"],
        ["Service + SLA", "Restock cadence, uptime %, MTTR, refund process, on-call coverage", "15%"],
        ["Reporting + integration", "Portal access, API exposure, daily settlement, monthly reports, loyalty integration", "10%"],
        ["Financial terms", "Commission %, fee schedule transparency, subsidy basket flexibility, term + termination terms", "15%"],
        ["Account team + references", "Account manager continuity, route-driver retention, retailer references at comparable scale", "10%"],
      ],
    },
    {
      heading: "2. RFP scoring template — per dimension detail",
      items: [
        { number: 1, title: "Equipment + telemetry", description: "Score 5 = ENERGY STAR Tier 2 on 100% of placements + LTE Cat-M1 telemetry + EMS standard + ≤ 5 year equipment age. Score 1 = legacy mixed-age fleet, partial telemetry, no EMS." },
        { number: 2, title: "Payment + PCI posture", description: "Score 5 = current PCI DSS v4.0 AOC + EMVCo + Apple Pay/Google Pay on every machine + cellular-isolated CHD path + transparent interchange-plus pricing. Score 1 = magstripe-primary, dated AOC, opaque fee schedule." },
        { number: 3, title: "Merchandising + planogram", description: "Score 5 = direct supplier relationships at 3+ major manufacturers, ≥ 30% healthy share, quarterly planogram refresh from telemetry, supports promotional + sampling campaigns. Score 1 = single-distributor SKU mix, static planogram, no campaign support." },
        { number: 4, title: "Service + SLA", description: "Score 5 = ≥ 98% uptime SLA + telemetry-driven cadence + Tier-1 SLA <24 hr + dedicated route driver per region + auditable performance reports. Score 1 = no SLA, scheduled-only restock, no telemetry-driven service." },
        { number: 5, title: "Reporting + integration", description: "Score 5 = REST API documented + daily settlement + monthly per-SKU reports + loyalty SDK integration + 24-month online history. Score 1 = portal-only access, manual exports, no API." },
        { number: 6, title: "Financial terms", description: "Score 5 = transparent commission + fee schedule + flexible subsidy basket + reasonable termination terms (90-day for cause / 180-day for convenience). Score 1 = opaque pricing, multi-year lock-in, expensive termination." },
        { number: 7, title: "Account team + references", description: "Score 5 = dedicated account manager + ≥ 3 retailer references at comparable scale + named route-driver continuity + escalation path to operator executive. Score 1 = shared account team, junior references, no named escalation path." },
      ],
    },
    {
      heading: "3. Reference check protocol",
      paragraph:
        "References supplied by the operator self-select for positive feedback. Use the protocol below to get past the boilerplate.",
      items: [
        { number: 1, title: "Ask for 5 references; call 4", description: "Including 1 retailer at similar scale, 1 retailer in a similar geography, 1 customer who switched away (operator may not provide; ask), 1 multi-year customer." },
        { number: 2, title: "Specific service questions", description: "What is the actual MTTR on Tier-1 incidents? When did the operator last miss a restock? What was the root cause? What change did they make?" },
        { number: 3, title: "Account-team continuity", description: "How many account managers have you had in the past 3 years? Has the route driver changed? How was the transition handled?" },
        { number: 4, title: "Reporting quality", description: "Do you trust the operator's data? Have you found discrepancies between portal data and your own observations?" },
        { number: 5, title: "Contract experience", description: "Has the operator ever invoked a price-change or fee-change clause? How was it communicated? What about contract renewal — were original terms honored?" },
        { number: 6, title: "Real value-add", description: "What does the operator do that you wouldn't get from a commodity vendor? Anything specific?" },
      ],
    },
    {
      heading: "4. Operator background + due diligence",
      items: [
        { check: "Years in business (≥ 5 years typical minimum; younger operators acceptable with strong recent references)." },
        { check: "Geographic coverage — operator's own routes vs. subcontracted routes. Subcontracted is acceptable but adds an SLA pass-through risk." },
        { check: "Insurance — commercial GL ≥ $1M each occurrence / $2M aggregate; auto; workers' comp per state. Certificates of insurance current." },
        { check: "PCI DSS v4.0 AOC current within 12 months." },
        { check: "SOC 2 Type II or ISO 27001 for portal / API." },
        { check: "Litigation search — any active or recent litigation involving the operator (PACER, state court records). Disclose findings to legal." },
        { check: "Bankruptcy / financial stability — operator's audited financials or D&B report (private operators) or recent investor disclosures (PE-backed operators)." },
        { check: "Workforce — operator's route-driver retention rate (high turnover is a service-quality red flag); E-Verify participation." },
        { check: "DBE / MBE / WBE certifications where retailer's program supports diverse-supplier goals." },
      ],
    },
    {
      heading: "5. Contract template — anchor clauses",
      paragraph:
        "Standard contract structure. Build from these anchor clauses; legal owns final language.",
      items: [
        { label: "Term", value: "3-year initial; up to two 1-year renewals at retailer's option. Termination for cause: 30-day cure + 60-day exit. Termination for convenience: 180-day notice (retailer); 90-day notice (operator, with equipment-removal coordination)." },
        { label: "Commission / fee schedule", value: "Commission % of gross revenue or fixed-fee placement model. Interchange + processor + operator markup transparently separated. Annual price-adjustment formula (CPI-indexed typical)." },
        { label: "SLA + performance", value: "Uptime ≥ 98% (rolling 3 months); Tier-1 SLA <24 hr; restock cadence per placement plan; refund process documented. Performance below threshold triggers operator action plan; sustained underperformance is grounds for termination for cause." },
        { label: "Equipment + refresh", value: "All refrigerated equipment ENERGY STAR + low-GWP refrigerant; refresh trigger 5-7 years or earlier on energy / reliability flags. Refresh capital from operator." },
        { label: "Data + reporting", value: "Portal access for retailer; REST API documented; daily settlement; monthly per-SKU report; quarterly QBR." },
        { label: "Insurance + indemnity", value: "Operator names retailer as additional insured; indemnity for operator-caused incidents." },
        { label: "Confidentiality + data", value: "Loyalty / member data is retailer's property; operator processes per documented DPA. Cardholder data per PCI DSS." },
        { label: "Compliance", value: "Operator complies with ADA, FALCPA, PCI DSS, applicable cashless-discrimination law, applicable open-records / consumer-disclosure law." },
      ],
    },
    {
      heading: "6. RFP timeline — typical 60-90 day path",
      items: [
        { number: 1, title: "Days 0-14 — pre-RFP scoping", description: "Stakeholders (procurement, IT, merchandising, finance, ops) align on scope. Draft RFP + scoring rubric." },
        { number: 2, title: "Days 14-21 — RFP issued", description: "RFP to 4-6 operators. Mandatory pre-bid call. Site walk-through at representative stores." },
        { number: 3, title: "Days 21-45 — responses + scoring", description: "Operators respond. Internal scoring against rubric. Shortlist 2-3 for interviews." },
        { number: 4, title: "Days 45-60 — interviews + references", description: "Operator presentations to full committee. Reference calls. Contract negotiation begins." },
        { number: 5, title: "Days 60-75 — contract sign", description: "Final scoring + selection memo. Contract finalized. Transition plan with incumbent operator (if applicable)." },
        { number: 6, title: "Days 75-90 — install / cutover", description: "Equipment install at pilot stores; cutover from incumbent; full rollout per agreed schedule." },
      ],
    },
    {
      heading: "7. Post-selection — first 90 days",
      items: [
        { check: "Pilot stores live and reporting via portal within 30 days of contract sign." },
        { check: "Telemetry dashboard available to retailer team." },
        { check: "First monthly settlement reconciles cleanly to operator's portal data." },
        { check: "Day-60 operational review — uptime, SLA adherence, refund rate, planogram velocity." },
        { check: "Day-90 first QBR — full performance review + adjustments for full-rollout." },
        { check: "Any incumbent transition completed; no service gaps." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate the full vendor-selection lifecycle — RFP design, scoring rubric, reference protocol, contract anchor clauses, and the first-90-days transition cadence. The operator selected via this framework executes the program; retailer's procurement, legal, and operations teams own the contract instrument and operational governance.",
    },
  ],
  footer:
    "Informational reference. Contract language is legal-team territory; this pack covers commercial and operational structure, not final legal drafting.",
});

console.log("wrote "+"retail-vending-vendor-selection");
