import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-management-service-level-agreements-explained",
  assetType: "template",
  title: "Vending Management SLA Template",
  subtitle: "Seven dimensions, financial remedies, and termination workflow",
  intro:
    "A vending management SLA defines the operator's measurable service commitments and the host's remedies when those commitments are missed. Without an enforceable SLA, the vending relationship runs on goodwill, which fails predictably at uptime degradation, cold-chain incidents, or refund-volume spikes. This template gives the host's procurement + operating-line owner a defensible seven-dimension SLA with monetary remedies and a clean termination workflow.",
  sections: [
    {
      heading: "1. The seven SLA dimensions",
      paragraph:
        "Modern vending SLAs cover seven measurable dimensions. Each dimension needs a target, a measurement methodology, and a remedy at threshold breach.",
      headers: ["Dimension", "Target (industry default)", "Measurement", "Remedy at breach"],
      rows: [
        ["Per-machine uptime", "97-98% monthly", "Telemetry — minutes online / minutes in month", "Commission credit < 95%; SIP < 92%; termination right < 90% two consecutive months"],
        ["Tier-1 service ticket (offline, payment failure, cold-chain)", "Acknowledge < 4 hrs; resolve < 24 hrs", "Operator CRM + telemetry", "Per-ticket commission credit at SLA miss"],
        ["Tier-2 service ticket (stockout, planogram refresh)", "Acknowledge < 24 hrs; resolve < 5 business days", "Operator CRM", "QBR-documented; pattern triggers SIP"],
        ["Refund response", "Cashless < 24 hrs via app/SMS; cash < 7 days", "Refund log + audit", "Refund rate > 2% triggers planogram review"],
        ["Cold-chain", "35-40°F continuous; excursion resolve < 4 hrs", "Telemetry temperature feed", "Spoiled product replaced + root-cause memo"],
        ["Restock cadence", "Telemetry-driven; minimum weekly", "Operator restock log", "Stockout rate > 3% triggers cadence review"],
        ["Reporting + transparency", "Monthly statement by 15th of following month; QBR per quarter", "Statement + telemetry export + QBR attendance", "Missed QBR triggers escalation; missed statement delays commission"],
      ],
    },
    {
      heading: "2. Financial remedy structure",
      paragraph:
        "Remedies need to be specific, calculable, and applied automatically — not at host discretion. The structure below is industry-standard for medium-to-large hosts.",
      items: [
        { number: 1, title: "Commission credit", description: "Per-ticket or per-machine commission credit applied to the next monthly settlement when SLA target is missed. Calculation example: a tier-1 ticket exceeding the 24-hour resolve target by 12 hours triggers a credit of 1 day of average daily commission for that machine." },
        { number: 2, title: "Service-improvement plan (SIP)", description: "Triggered when uptime or ticket SLA is missed for two consecutive months. Operator submits a written plan within 15 days; performance reviewed monthly until cured." },
        { number: 3, title: "Termination right", description: "Triggered when uptime falls below 90% for two consecutive months, or when a SIP fails to cure within 90 days. Host invokes termination-for-cause with 30-day cure window." },
        { number: 4, title: "Refund-volume backstop", description: "Refund rate exceeding 2% of transactions for a calendar month triggers a joint planogram + equipment-quality review. Operator covers refunded amounts in all cases; refunded volume does not count against commission." },
        { number: 5, title: "Cold-chain spoilage replacement", description: "Operator replaces spoiled product at operator cost; root-cause memo submitted within 5 business days." },
      ],
    },
    {
      heading: "3. Measurement methodology — non-negotiable",
      paragraph:
        "SLA measurement must come from the operator's telemetry + CRM, exported to the host on a defined cadence. Self-reported metrics without telemetry support are unenforceable.",
      items: [
        { label: "Telemetry data export", value: "Daily or weekly CSV / API export from operator telemetry platform (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable). Required field list documented in Exhibit B of the master agreement." },
        { label: "CRM ticket export", value: "Monthly export of every service ticket — open time, acknowledgement time, resolution time, root cause, tier classification. Host reviews quarterly at the QBR." },
        { label: "Refund log", value: "Monthly refund log — transaction ID, amount, refund channel (app, SMS, cash), reason code." },
        { label: "Cold-chain log", value: "Continuous temperature log per refrigerated device; excursion events flagged with root cause + resolution time." },
        { label: "Reconciliation", value: "Quarterly reconciliation of operator-reported metrics against host-side spot checks (random ticket validation, random refund validation)." },
      ],
    },
    {
      heading: "4. Termination workflow",
      paragraph:
        "Termination is the most consequential SLA action; the workflow must be unambiguous, documented in writing at every step, and reviewable by counsel.",
      items: [
        { number: 1, title: "SLA breach notification", description: "Host issues written notice to operator within 5 business days of identifying the SLA breach. Notice cites the specific SLA dimension, the measurement, and the threshold." },
        { number: 2, title: "Cure period", description: "Operator has 30 days from notice (15 days for cold-chain or payment-handling breaches) to cure. Cure means demonstrated return to SLA target measured across the cure period." },
        { number: 3, title: "Cure verification", description: "Host verifies cure via telemetry + CRM + refund log. Joint verification meeting at day 30. Decision documented in writing." },
        { number: 4, title: "Termination decision", description: "If breach is not cured, host invokes termination-for-cause. Termination effective 30 days from termination notice unless an interim service-continuation arrangement is negotiated." },
        { number: 5, title: "Transition cooperation", description: "Outgoing operator provides final telemetry export, reconciled commission settlement, and 60-day transition support to the incoming operator." },
        { number: 6, title: "Equipment removal", description: "Operator removes equipment within 30 days of termination effective date; restores wall/floor/electrical to original condition; covers reasonable wall-patch + paint." },
      ],
    },
    {
      heading: "5. Common SLA gaps that fail in practice",
      items: [
        { label: "Aspirational targets without remedies", value: "'We aim for 98% uptime' without a commission-credit remedy is unenforceable. Specify the remedy at every threshold." },
        { label: "Operator-only measurement", value: "Self-reported SLA without telemetry export gives the operator full control of the numerator and denominator. Always require telemetry data export." },
        { label: "No tier-1 versus tier-2 distinction", value: "Treating all tickets equally lets operators prioritize Tier-2 visits (stockout) over Tier-1 (cold-chain). Tier the SLA explicitly." },
        { label: "Cold-chain SLA missing", value: "Hosts with refrigerated devices need a cold-chain SLA with 4-hour excursion resolution and spoilage replacement. Without it, food-safety risk shifts to the host." },
        { label: "QBR not in the SLA", value: "Quarterly business review is the forum where SLA performance is reviewed + actioned. Missing QBR is itself an SLA breach in modern agreements." },
      ],
    },
    {
      heading: "6. Variants by host type",
      headers: ["Host type", "Adjusted uptime target", "Adjusted ticket SLA", "Special requirements"],
      rows: [
        ["Office tenant building (Class A)", "97%", "Standard", "Brand-consistent appearance package; coordination with property management"],
        ["Hotel (full-service / resort)", "98%", "Tier-1 < 12 hrs in peak season", "Brand-standard alignment (Marriott BSA / Hilton OS&E / IHG); pouring-rights coordination"],
        ["Hospital", "98%", "Tier-1 < 12 hrs; cold-chain < 2 hrs", "Schedule H community-benefit reporting; ADA + Section 308 + Joint Commission alignment"],
        ["K-12 school district", "97%", "Tier-1 < 24 hrs", "Smart Snacks attestation; FERPA on student-account integration; background-check compliance"],
        ["Manufacturing plant (24/7)", "97%", "Tier-1 < 24 hrs; pre-shift restock", "Shift-aware planogram; OSHA-compliant placement; industrial-rated equipment"],
        ["Federal / military installation", "98%", "Tier-1 < 24 hrs", "FAR + DFARS compliance; security clearance for service personnel; Section 508 for any digital interface"],
      ],
    },
  ],
  footer:
    "This template is a working contractual reference, not legal advice. Final SLA should be reviewed by counsel and tailored to the host type and operator capability. The seven dimensions + financial remedies + termination workflow together create an enforceable SLA; missing any one of the three leaves a gap that fails predictably under operational stress.",
});

console.log("wrote "+"vending-management-service-level-agreements-explained");
