import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "refunds-for-vending-machine-errors",
  assetType: "playbook",
  title: "Vending Refund Operations Playbook",
  subtitle: "Operator RFP language, SLA matrix, customer dispute flow, escalation paths",
  intro:
    "A defensible refund program is the difference between a 1-star Google review and a 1-second tap on the kiosk app. This playbook codifies the operator-side RFP language, SLA matrix, customer dispute flow, and escalation paths the LetUsVending operator network typically delivers — referenced against the FTC Mail, Internet, or Telephone Order Merchandise Rule (16 CFR 435), Visa / Mastercard chargeback rules (Reason Code 13.1 / 13.5), PCI-DSS 4.0 dispute handling, and the Visa No-Receipt-Required Refund standard for small-ticket transactions.",
  sections: [
    {
      heading: "1. Refund-rate benchmark + diagnostic ladder",
      headers: ["Refund rate (% of transactions)", "Status", "Action"],
      rows: [
        ["< 0.5%", "Best-in-class", "Maintain. Monitor monthly."],
        ["0.5 – 1.5%", "Healthy", "Watch for SKU outliers; planogram refresh if a single SKU drives volume."],
        ["1.5 – 2.5%", "Watchlist", "Investigate machine reliability + SKU spirals + payment-reader firmware."],
        ["2.5 – 5%", "Action required", "Machine PM + reader RMA + SKU drop/replace. Notify host."],
        ["> 5%", "Critical", "Machine swap; full SKU + reader root-cause; host-side incident report."],
      ],
    },
    {
      heading: "2. RFP language to include",
      paragraph:
        "Insert language equivalent to the items below into Section X (Customer Service) of the operator RFP. The operator's reply becomes the SLA matrix.",
      items: [
        { check: "Refund channels — kiosk app + SMS-to-refund + on-machine button + phone line — operator must offer at least three" },
        { check: "Refund SLA — cashless refunds within 24 hours of member request; cash refunds within 7 days" },
        { check: "Refund tracking — every refund logged with timestamp + SKU + machine ID + member ID + reason code" },
        { check: "Quarterly refund report — refund rate + reason-code distribution per machine, delivered with the QBR" },
        { check: "Escalation path — host facility manager named as escalation point for any refund > $25 or member dissatisfaction" },
        { check: "Refund-rate trigger — any machine > 2.5% refund-rate for two consecutive months auto-triggers PM + assortment review" },
        { check: "Chargeback handling — operator absorbs chargeback fees + cooperates on representment per Visa/Mastercard rules" },
        { check: "PCI-DSS 4.0 attestation — operator confirms SAQ-B-IP or higher; member PAN never exposed in refund flow" },
      ],
    },
    {
      heading: "3. Refund SLA matrix",
      headers: ["Trigger", "Channel", "Acknowledge", "Resolve"],
      rows: [
        ["Cashless refund — kiosk / app / SMS", "Automatic via tokenized reversal", "Immediate", "<24 hr to card"],
        ["Cash refund — refund slip", "Member submits via on-cabinet form or QR-to-email", "<24 hr ack", "<7 days at next visit"],
        ["High-value or contested refund (>$25)", "Phone or web form, member identity confirmed", "<24 hr ack", "<5 business days"],
        ["Card dispute / chargeback", "Operator handles per Visa Reason Code 13.1 / 13.5", "Within issuer timeline (typically 60-120 days)", "Per representment cycle"],
        ["Allergen-related refund + incident", "Phone or app, flagged for QA + FALCPA review", "<2 hr ack", "<24 hr + incident report"],
      ],
    },
    {
      heading: "4. Customer dispute flow (member-facing)",
      items: [
        { number: 1, title: "Step 1 — channel selection", description: "Member opens the kiosk app, sends SMS to the refund number, taps the on-machine refund button, or scans the QR code on the machine for a refund web form." },
        { number: 2, title: "Step 2 — capture", description: "App / SMS captures machine ID, SKU, transaction time, and reason code (no vend / wrong product / damaged / expired / overcharge / other). Member contact handled via the existing kiosk credential — no PAN re-entry." },
        { number: 3, title: "Step 3 — automated approval", description: "Below threshold (typically $10), refund auto-approves and credits the original tender within 24 hours (cashless) or queues for next visit (cash)." },
        { number: 4, title: "Step 4 — manual review", description: "Above threshold or for repeat refunds within 7 days, operator-side CSR reviews telemetry + camera log if available, approves or escalates." },
        { number: 5, title: "Step 5 — communication", description: "Member receives notification of refund + estimated arrival time. Status check available in the kiosk app at any time." },
      ],
    },
    {
      heading: "5. Operator-side internal flow",
      items: [
        { label: "Telemetry pull", value: "Refund request triggers a telemetry pull — was the SKU dispensed? did the temperature stay in range? did the payment authorize?" },
        { label: "Reason-code routing", value: "'Damaged' + 'expired' routes to SKU sourcing + FIFO audit. 'No vend' routes to maintenance ticket. 'Wrong product' routes to planogram QA." },
        { label: "Refund logging", value: "Every refund logged to the operator system + reconciled monthly to host. Per-machine refund rate exposed on the QBR dashboard." },
        { label: "FALCPA + allergen incidents", value: "Allergen-related refund triggers immediate QA — SKU pulled, supplier label re-verified, incident report retained 5 years per FDA recordkeeping norms (21 CFR 117.330)." },
        { label: "Pattern detection", value: "Same member > 3 refunds in 14 days flags for CSR + supervisor review. Same machine > 5 refunds in 14 days triggers field service." },
      ],
    },
    {
      heading: "6. Escalation paths",
      items: [
        { number: 1, title: "Tier 1 — automated kiosk refund", description: "Below threshold, single SKU, valid telemetry. ~85-95% of refund requests close here." },
        { number: 2, title: "Tier 2 — CSR review", description: "Above threshold, contested, or repeat. CSR resolves with member directly. ~5-10% of refunds." },
        { number: 3, title: "Tier 3 — host facility manager", description: "Member dissatisfied with Tier 2 outcome, or refund > $25, or pattern of refunds at one machine. Host named in the RFP." },
        { number: 4, title: "Tier 4 — credit-card chargeback", description: "Member files dispute with card issuer (Reason Code 13.1 / 13.5). Operator represents with telemetry + refund-log evidence per Visa/Mastercard timelines." },
        { number: 5, title: "Tier 5 — regulatory / safety incident", description: "Allergen reaction, foreign object, or injury. Operator-side incident commander, host facility manager, insurer, and (if applicable) FDA / local health department." },
      ],
    },
    {
      heading: "7. Quarterly refund-report template",
      paragraph:
        "Deliver to the host facility manager at every QBR. Format below is the minimum.",
      headers: ["Metric", "This quarter", "Prior quarter", "Trend"],
      rows: [
        ["Total transactions", "—", "—", "—"],
        ["Total refunds", "—", "—", "—"],
        ["Refund rate %", "—", "—", "—"],
        ["Top-3 reason codes", "—", "—", "—"],
        ["Highest-refund machine", "—", "—", "—"],
        ["Avg time to refund (cashless)", "—", "—", "—"],
        ["Allergen-related incidents", "—", "—", "—"],
        ["Action items + owners + due dates", "—", "—", "—"],
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an account with operator partners equipped to publish refund SLA tiers, three-channel refund flow, PCI-DSS 4.0-compliant dispute handling, FALCPA-grade allergen incident response, and quarterly refund reporting summarized above. RFP language and SLA matrix are provided alongside the operator response.",
    },
  ],
  footer:
    "Informational reference. Confirm specific chargeback timelines and refund disclosure requirements with counsel for your jurisdiction. Citations current at publication.",
});

console.log("wrote "+"refunds-for-vending-machine-errors");
