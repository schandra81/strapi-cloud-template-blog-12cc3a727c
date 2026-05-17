import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-management-post-implementation",
  assetType: "toolkit",
  title: "Post-Implementation Vending Governance Toolkit",
  subtitle: "QBR template, SLA tracker, annual review checklist, and contract amendment framework",
  intro:
    "This toolkit gives facilities, procurement, and operations the working documents to govern a vending program after go-live. It covers the first 90 days of stabilization, recurring quarterly business reviews, the annual contract health check, and the contract amendment workflow. References to ITIL service management practices, ISO 10004 customer satisfaction guidance, PCI-DSS 4.0, ADA Section 308, FDA Food Code, and HHS/CDC Food Service Guidelines where applicable.",
  sections: [
    {
      heading: "1. First 90 days — stabilization plan",
      paragraph:
        "The 90-day post-implementation window is where planogram, pricing, and service cadence are calibrated against real telemetry. The host project owner should hold weekly stand-ups with the operator for the first 30 days, then bi-weekly to day 90.",
      items: [
        { number: 1, title: "Day 0-7 — go-live monitoring", description: "Daily uptime check, daily telemetry review, daily refund log review. Free-first-purchase promo running; QR / NFC and text-to-refund channels verified. Host facility coordinator on-site for first 3 business days." },
        { number: 2, title: "Day 7-30 — calibration", description: "Weekly stand-up. Top-20 / bottom-20 SKU review; drop bottom-5 not-moving SKUs by day 21; substitute 5 new candidates. Pricing review on any SKU with > 5% refund rate." },
        { number: 3, title: "Day 30-60 — first pulse", description: "Run 5-question end-user pulse survey (NPS + 4 sub-dimensions); operator delivers first uptime + velocity report. Bi-weekly stand-up." },
        { number: 4, title: "Day 60-90 — first QBR rehearsal", description: "Operator drafts QBR deck per Section 2; host reviews and refines. First formal QBR at day 90 with executive sponsors." },
      ],
    },
    {
      heading: "2. Quarterly business review template",
      paragraph:
        "Schedule 30 days in advance. Required attendees: host project owner, host procurement, host facility coordinator, operator account manager, operator route supervisor. Block 75 minutes.",
      items: [
        { number: 1, title: "Uptime + service SLA (15 min)", description: "Per-machine, per-month uptime over the quarter (target ≥ 98%). Tier-1 + Tier-2 ticket log with SLA adherence rate. Cold-chain attestation where applicable (≤ 40°F per FDA Food Code 3-501.16)." },
        { number: 2, title: "Velocity + planogram (15 min)", description: "Transaction trend, basket trend, top-20 + bottom-20 SKUs. Operator proposes drops + adds for next quarter. BFY share (where wellness program in effect)." },
        { number: 3, title: "Customer satisfaction (10 min)", description: "NPS results, refund rate (< 2% target), refund reason codes, end-user complaint log." },
        { number: 4, title: "Compliance attestations (10 min)", description: "ADA Section 308 attestation refresh, PCI-DSS 4.0 currency, FDA menu labeling adherence, insurance COI, state weights-and-measures registration." },
        { number: 5, title: "Commission / revenue reconciliation (10 min)", description: "Operator-reported gross vs telemetry-calculated gross; variance ≤ 1% expected; > 2% triggers reconciliation." },
        { number: 6, title: "Action items + accountabilities (15 min)", description: "Each open item gets an owner and a due date. Action items roll to next QBR agenda. Open items > 60 days escalate to executive sponsors." },
      ],
    },
    {
      heading: "3. SLA tracker — monthly metrics",
      headers: ["Metric", "Target", "Source", "Trigger threshold"],
      rows: [
        ["Uptime % (monthly avg)", "≥ 98%", "Operator telemetry", "< 98% in 2 consecutive months"],
        ["Tier-1 ack / resolve", "≤ 24 hr / ≤ 24 hr", "Operator ticketing", "Any > 72 hr"],
        ["Tier-2 ack / resolve", "24-48 hr / 5-7 days", "Operator ticketing", "Any > 10 days"],
        ["Stockout incidents/machine/month", "≤ 3", "Telemetry threshold report", "≥ 5 in any month"],
        ["Refund rate %", "< 2%", "Operator refund log", "≥ 2% in any month"],
        ["Cashless refund response", "≤ 24 hr auto-credit", "Operator refund log", "Any > 72 hr"],
        ["Cash refund response", "≤ 7 business days", "Operator refund log", "Any > 14 days"],
        ["Cold-chain compliance", "≤ 40°F (refrigerated)", "Telemetry internal-temp log", "Any > 4 hr excursion not flagged"],
        ["Payment failure rate (cashless)", "< 1%", "Operator payment processor report", "≥ 2% in any month"],
        ["Commission variance", "≤ 1%", "Operator monthly statement vs telemetry", "> 2% unresolved"],
      ],
    },
    {
      heading: "4. Annual contract review checklist",
      paragraph:
        "Conduct 60-90 days before the contract anniversary or renewal date. Use this to decide renew / amend / re-compete.",
      items: [
        { check: "Uptime SLA: ≥ 98% monthly average across all 12 months" },
        { check: "Tier-1 + Tier-2 SLA adherence: ≥ 95% of tickets within window" },
        { check: "Refund rate: < 2% across all months" },
        { check: "NPS: ≥ +30 across 4 quarterly surveys" },
        { check: "Commission variance: ≤ 1% average; no variance > 2% unresolved" },
        { check: "ADA Section 308 written attestation current" },
        { check: "PCI-DSS 4.0 AOC / SAQ-B-IP current" },
        { check: "FDA menu labeling attestation where applicable (≥ 20 placements operator-wide)" },
        { check: "FSG / wellness compliance where applicable (≥ 50% BFY facings)" },
        { check: "Insurance COI current ($2M GL, $1M umbrella, additional-insured endorsement)" },
        { check: "State weights-and-measures registration where required" },
        { check: "Planogram refresh history demonstrates responsiveness (≥ 2 refreshes per year)" },
        { check: "QBR records on file for all 4 quarters" },
        { check: "Open action items: 0 items > 90 days" },
      ],
    },
    {
      heading: "5. Contract amendment framework",
      paragraph:
        "Amendments may be needed mid-term to add machines, revise commission tiers, update SLAs, or reflect operator network changes. Use this workflow.",
      items: [
        { number: 1, title: "Initiation", description: "Either party submits written amendment request with rationale. Host project owner or operator account manager logs in the contract file." },
        { number: 2, title: "Impact review", description: "Host procurement, facilities, and where applicable wellness office review the proposed change. Operator confirms operational impact (equipment, service cadence, telemetry)." },
        { number: 3, title: "Pricing + commission impact", description: "If pricing or commission tier changes, operator submits revised Schedule B. Host procurement validates against benchmark." },
        { number: 4, title: "Compliance flow-down", description: "Confirm amendment doesn't break ADA Section 308, PCI-DSS 4.0, FDA Food Code, FSG (where applicable), or insurance requirements." },
        { number: 5, title: "Signature + filing", description: "Both parties sign; signed amendment filed in contract record; effective date documented; next QBR agenda notes the amendment." },
      ],
    },
    {
      heading: "6. Renewal decision matrix",
      headers: ["Outcome category", "Decision trigger", "Action"],
      rows: [
        ["Renew at current terms", "All annual review checklist items pass; no significant scope change", "Issue renewal notice per contract notice period (typical 60-90 days)"],
        ["Renew with amendment", "Most items pass; minor scope or commission adjustment needed", "Negotiate amendment in parallel with renewal notice"],
        ["Renew with corrective action plan", "1-2 items fail but operator submits credible CAP", "30-90 day CAP, then quarterly review of CAP adherence; renewal contingent on CAP completion"],
        ["Re-compete", "Multiple items fail; operator unable or unwilling to remediate", "Issue RFP 6-9 months before contract expiration; brief incumbent on the gap"],
        ["Terminate for cause", "Material breach + 30-day cure period exhausted", "Per contract termination clause; coordinate operator handoff with replacement"],
      ],
    },
    {
      heading: "7. Operator handoff playbook (where re-competed or terminated)",
      items: [
        { number: 1, title: "T-90: notification", description: "Incumbent operator notified in writing; replacement RFP issued (or new operator awarded if RFP complete)." },
        { number: 2, title: "T-60: transition plan", description: "Outgoing + incoming operators coordinate (telemetry data export, planogram knowledge transfer, refund pipeline closure, asset removal/installation schedule)." },
        { number: 3, title: "T-30: end-user communication", description: "Host announces transition; updates payment registrations; closes outgoing operator account app if applicable." },
        { number: 4, title: "T-7: equipment swap", description: "Outgoing operator removes machines; incoming operator installs; placement area restored per contract." },
        { number: 5, title: "T-0: launch with new operator", description: "Free-first-purchase promo; soft launch; host facility coordinator on-site for first 3 business days." },
      ],
    },
  ],
  footer:
    "This toolkit is informational and not legal advice. Host procurement and counsel should review any contract amendment, termination, or re-compete decision. Operator capability claims should be verified through written attestation and reference calls. LetUsVending can connect host teams with operators equipped to provide telemetry transparency, QBR cooperation, and SLA accountability.",
});

console.log("wrote "+"vending-management-post-implementation");
