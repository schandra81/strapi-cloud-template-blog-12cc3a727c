import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "customer-satisfaction-vending-management",
  assetType: "toolkit",
  title: "Vending Customer Satisfaction Measurement Toolkit",
  subtitle: "NPS survey instrument, SLA tracker, end-user feedback templates, and quarterly satisfaction scorecard",
  intro:
    "This toolkit gives facilities, HR, and procurement the working documents to measure and govern vending customer satisfaction at the end-user level. References to ACSI methodology, NPS (Bain & Co. framework), ISO 10004 customer satisfaction monitoring guidance, and PCI-DSS 4.0 for cashless transaction handling. Capability-framed throughout — operator should attest to telemetry export, refund SLA, and survey cooperation in writing.",
  sections: [
    {
      heading: "1. End-user NPS survey instrument",
      paragraph:
        "Run NPS quarterly via QR code on machine face, kiosk pop-up after transaction, or email blast to host population. Keep open ≤ 5 business days; target ≥ 15% response.",
      items: [
        { label: "Q1 — NPS", value: "On a scale of 0-10, how likely are you to recommend the breakroom vending experience to a coworker? (0-6 = detractor, 7-8 = passive, 9-10 = promoter; NPS = %promoter − %detractor)" },
        { label: "Q2 — Reason for score", value: "Open-ended: 'What is the primary reason for your score?' (free text)" },
        { label: "Q3 — Equipment reliability", value: "Rate machine reliability over the past 30 days (1-5). Did you experience: machine offline, payment failure, stockout, product issue? (checkbox)" },
        { label: "Q4 — Product selection", value: "Rate selection (1-5) + open: 'What 2 products would you most like added?'" },
        { label: "Q5 — Pricing", value: "Rate pricing fairness (1-5)" },
        { label: "Q6 — Refund experience", value: "If you sought a refund in the past 90 days, rate the experience (1-5, or N/A)" },
        { label: "Q7 — Open suggestion", value: "What single change would most improve your experience?" },
      ],
    },
    {
      heading: "2. SLA tracker",
      paragraph:
        "Track these metrics monthly. Operator should provide telemetry-sourced data; host facility coordinator should be able to verify via portal access.",
      headers: ["Metric", "Source", "Target", "Trigger threshold"],
      rows: [
        ["Uptime % (monthly avg)", "Operator telemetry (Cantaloupe/Nayax/365/AWM)", "≥ 98%", "< 98% for 2 consecutive months"],
        ["Tier-1 ticket ack time", "Operator ticketing log", "≤ 24 hr", "Any ticket > 48 hr"],
        ["Tier-1 ticket resolution", "Operator ticketing log", "≤ 24 hr", "Any ticket > 72 hr"],
        ["Tier-2 ticket ack time", "Operator ticketing log", "24-48 hr", "Any ticket > 72 hr"],
        ["Tier-2 ticket resolution", "Operator ticketing log", "5-7 days", "Any ticket > 10 days"],
        ["Stockout incidents/machine/month", "Telemetry threshold report", "≤ 3", "≥ 5 in any month"],
        ["Refund rate (% of transactions)", "Operator refund log", "< 2%", "≥ 2% in any month"],
        ["Refund response time (cashless)", "Operator refund log", "≤ 24 hr auto-credit", "Any > 72 hr"],
        ["Refund response time (cash)", "Operator refund log", "≤ 7 business days", "Any > 14 days"],
        ["NPS score (quarterly)", "Section 1 survey", "≥ +30", "< +20 or 10-point quarter-over-quarter drop"],
        ["Cold-chain attestation (refrigerated)", "Telemetry internal-temp log", "≤ 40°F per FDA Food Code", "Any > 4 hr excursion not flagged + remediated"],
        ["Payment failure rate (cashless)", "Operator payment processor report", "< 1%", "≥ 2% in any month"],
      ],
    },
    {
      heading: "3. End-user feedback channel templates",
      paragraph:
        "End users need accessible feedback paths. Operator should support all four channels in the contract.",
      items: [
        { label: "Channel 1 — On-machine QR/NFC", value: "QR or NFC tap on machine face links to operator refund + feedback form. Auto-credit cashless refund ≤ 24 hr. Form should ask: machine ID, transaction time, issue (stockout, mis-dispense, mis-charge, quality, other), preferred resolution." },
        { label: "Channel 2 — Text-to-refund", value: "SMS short code or 10-digit toll-free number printed on machine. Auto-credit cashless within 24 hr; cash refund mailed within 7 business days." },
        { label: "Channel 3 — Phone", value: "Toll-free number; staffed business hours; voicemail with same-business-day callback. Required at federal and public placements." },
        { label: "Channel 4 — Email / web form", value: "Operator support email + branded web form. Tickets categorized by reason code; ticketing system retains 12 months of history." },
        { label: "Channel 5 — Host facility coordinator", value: "Local point-of-contact accepts feedback in person; forwards to operator with end-user contact for closure." },
      ],
    },
    {
      heading: "4. Quarterly satisfaction scorecard",
      paragraph:
        "Roll up the SLA tracker + NPS into a single one-page scorecard each quarter. Use this for QBR governance.",
      headers: ["Dimension", "Q1", "Q2", "Q3", "Q4", "Target", "Trend"],
      rows: [
        ["Uptime (avg %)", "—", "—", "—", "—", "≥ 98%", "—"],
        ["Stockout incidents", "—", "—", "—", "—", "≤ 3/machine/mo", "—"],
        ["Refund rate (%)", "—", "—", "—", "—", "< 2%", "—"],
        ["NPS", "—", "—", "—", "—", "≥ +30", "—"],
        ["Tier-1 SLA adherence", "—", "—", "—", "—", "≥ 95%", "—"],
        ["Tier-2 SLA adherence", "—", "—", "—", "—", "≥ 95%", "—"],
        ["Open action items", "—", "—", "—", "—", "0 > 60 days", "—"],
      ],
    },
    {
      heading: "5. Service-recovery playbook",
      items: [
        { number: 1, title: "Stockout (single SKU)", description: "Telemetry triggers route-driver notification; operator restocks at next scheduled visit (within 48 hr) or sooner if velocity warrants. End-user form acknowledgment: 'Sorry — restock coming within 48 hr; here's a $X promo code.'" },
        { number: 2, title: "Machine offline", description: "Tier-1 ticket opens; technician dispatched within 24 hr; cold-chain placements get 4-hr ack. End-user signage on machine face: 'Out of service — back online by [date]; refund: [number].' Host facility coordinator notified." },
        { number: 3, title: "Mis-dispense / mis-charge", description: "Auto-refund triggered by self-service form; if AI cooler with vision-system error, operator reviews video and recalibrates SKU." },
        { number: 4, title: "Product quality (expired / damaged)", description: "Operator pulls SKU from all machines on the route; investigates supplier lot; documents in QBR. End-user gets refund + apology + $X promo code." },
        { number: 5, title: "Persistent dissatisfaction", description: "End-user complaint volume ≥ 3 from same individual or ≥ 10 from population in any month triggers planogram + machine quality review + executive call between operator account manager and host." },
      ],
    },
    {
      heading: "6. Annual customer satisfaction report",
      items: [
        { check: "NPS trend (Q1 → Q4) with verbatim themes" },
        { check: "SLA adherence rate by tier (annual average)" },
        { check: "Refund rate trend + top reason codes" },
        { check: "Stockout trend by machine + SKU" },
        { check: "Planogram refresh history + velocity outcome" },
        { check: "Service-recovery cases (count + resolution time)" },
        { check: "Renewal recommendation (renew / re-compete) with rationale" },
      ],
    },
  ],
  footer:
    "This toolkit is informational and not legal advice. Operator capability claims should be verified through written attestation, on-site audit, and reference calls. LetUsVending can connect host teams with operators equipped to provide telemetry export, ticketing transparency, and survey cooperation.",
});

console.log("wrote "+"customer-satisfaction-vending-management");
