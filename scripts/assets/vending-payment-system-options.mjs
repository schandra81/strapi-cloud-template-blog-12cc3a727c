import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-payment-system-options",
  assetType: "pack",
  title: "Vending Payment System Specification Pack",
  subtitle: "EMV, contactless, mobile wallet, closed-loop, and PCI DSS spec for operator RFPs",
  intro:
    "Use this pack when specifying or evaluating cashless payment systems on vending equipment. Spec aligns to PCI DSS v4.0 (mandatory March 31, 2025), EMV contact + contactless (EMVCo specifications), NFC Forum Type 4, and ADA Section 309.4 operating force. Operator should be able to attest to each line and provide certification artifacts on request.",
  sections: [
    {
      heading: "1. Payment-rail coverage requirements",
      paragraph:
        "Modern placements expect at least four parallel rails. Cash-only or single-rail cashless deployments lose 25-40% of potential transactions per published industry telemetry studies.",
      items: [
        { label: "EMV chip (contact)", value: "Required for U.S. liability shift since October 2015. Reader must be EMVCo Level 1 + Level 2 certified." },
        { label: "EMV contactless", value: "ISO/IEC 14443 Type A + B, EMV Contactless Specifications v2.x. Supports tap-to-pay cards and tokenized mobile wallets." },
        { label: "Mobile wallet (Apple Pay, Google Pay, Samsung Pay)", value: "NFC Forum Type 4. Verify reader handles Visa, Mastercard, Amex, Discover tokens." },
        { label: "Closed-loop / stored-value", value: "Required for campus card, badge tap, payroll deduct, or member-app credit. Operator publishes integration guide for the host identity provider." },
        { label: "QR / app-initiated payment", value: "Operator app QR scan or member app QR generates transaction; useful where NFC hardware is constrained." },
      ],
    },
    {
      heading: "2. PCI DSS v4.0 compliance attestations",
      paragraph:
        "PCI DSS v4.0 became the only required version on March 31, 2025. Operators must produce a current AOC (Attestation of Compliance) covering the merchant environment. SAQ scope depends on architecture.",
      items: [
        { check: "Current AOC dated within the last 12 months." },
        { check: "Self-Assessment Questionnaire (SAQ) type specified — typically SAQ-B-IP or SAQ-P2PE for telemetry-connected payment terminals." },
        { check: "Card data flow diagram showing reader, gateway, processor, and no card-data persistence on operator infrastructure." },
        { check: "P2PE solution listed on the PCI SSC validated list, or SPoC/CPoC validation where applicable." },
        { check: "Annual penetration test attestation for any operator-hosted payment infrastructure." },
        { check: "Documented incident-response plan with member-data breach notification SLA." },
      ],
    },
    {
      heading: "3. Processor + interchange economics",
      paragraph:
        "Interchange is set by the card networks; processor markup is negotiable. Vending typically falls in the small-ticket interchange tier (sub-15-dollar transactions). Quantify effective rate, not just headline rate.",
      headers: ["Tier", "Typical ticket size", "Effective rate target", "Notes"],
      rows: [
        ["Small-ticket interchange (Visa, Mastercard)", "Under 15 dollars", "2.4% – 3.2%", "Higher rate than retail; networks charge a higher percentage on small tickets."],
        ["Standard credit", "15 – 50 dollars", "1.9% – 2.6%", "Standard retail interchange tier."],
        ["Closed-loop / payroll deduct", "Any", "0.5% – 1.5% or flat fee", "No card-network interchange; operator and host negotiate."],
        ["Mobile wallet (tokenized)", "Same as underlying card", "Same as underlying card", "Tokenization does not change interchange; reduces fraud cost."],
      ],
    },
    {
      heading: "4. Closed-loop + payroll-deduct architecture",
      items: [
        { number: 1, title: "Identity source", description: "Host identity provider (Okta, Azure AD, campus SSO, badge-management system). Operator integrates via SSO or magnetic-stripe/MIFARE badge read." },
        { number: 2, title: "Funding model", description: "Pre-paid (member loads funds via web/app), payroll deduct (operator settles weekly/monthly to host AP), or hybrid." },
        { number: 3, title: "Settlement cadence", description: "Daily reconciliation file to host; monthly settlement to host AP. SOC 2 Type II attestation from operator for the settlement environment." },
        { number: 4, title: "Member data minimization", description: "Operator stores employee ID + balance only; no SSN, no government ID, no compensation data. Documented in DPA." },
      ],
    },
    {
      heading: "5. ADA + accessibility requirements (Section 309.4)",
      items: [
        { check: "Card reader, contactless tap zone, and PIN pad each operable with one hand and ≤ 5 lbf operating force." },
        { check: "No tight grasping, pinching, or twisting required to operate any payment surface." },
        { check: "Reader height within forward-reach range: 15 to 48 inches above finished floor (Section 308.2.1)." },
        { check: "Audio output available for screen-rendered payment interfaces, or operator provides accessible alternative (phone, app)." },
        { check: "Refund flow accessible via app, SMS, or phone — not solely through an inaccessible on-machine touchpoint." },
      ],
    },
    {
      heading: "6. Telemetry + reconciliation",
      items: [
        { label: "Transaction logging", value: "Every transaction logged with timestamp, machine ID, SKU, amount, payment rail, auth code, and (where applicable) tokenized PAN reference. Retained per operator data-retention policy." },
        { label: "Reconciliation cadence", value: "Daily settlement file delivered by 09:00 next business day. Discrepancies resolved within 5 business days." },
        { label: "Refund workflow", value: "Member-initiated via app/SMS, auto-credited within 24 hours for cashless; cash refunds via slip + next-visit credit (max 7 days)." },
        { label: "Audit-log access", value: "Host can request transaction-level audit logs for any machine within 5 business days." },
      ],
    },
    {
      heading: "7. Total cost of ownership over 5 years",
      headers: ["Cost line", "Typical range", "Notes"],
      rows: [
        ["Telemetry hardware (per machine)", "300 – 600 USD", "One-time; some operators absorb in margin."],
        ["Telemetry SaaS (per machine, monthly)", "8 – 18 USD", "Cantaloupe, Nayax, 365 Retail Markets typical."],
        ["Processing (% of cashless revenue)", "2.4% – 3.2% effective", "Small-ticket interchange tier."],
        ["PCI compliance (operator-borne)", "Embedded in fee", "Operator AOC covers their environment."],
        ["Cash-handling avoided (per machine, monthly)", "20 – 60 USD", "Cash collection + bank deposit labor reduction."],
      ],
    },
    {
      heading: "8. RFP scoring rubric (100 points)",
      items: [
        { check: "Rail coverage — all 4 rails supported (EMV contact, contactless, wallet, closed-loop) — 20 points." },
        { check: "PCI DSS v4.0 AOC current and complete — 15 points." },
        { check: "Effective processing rate disclosed and competitive — 15 points." },
        { check: "ADA Section 309.4 attestation in writing — 10 points." },
        { check: "Closed-loop integration capability with host IdP — 10 points." },
        { check: "Refund SLA in writing — 10 points." },
        { check: "Telemetry reconciliation cadence + audit-log access — 10 points." },
        { check: "References (3+ comparable placements) — 10 points." },
      ],
    },
  ],
  footer:
    "This pack is informational. Final processor selection and PCI scoping should be reviewed with your operator and, where required, with QSA counsel. Network interchange rates are set by Visa, Mastercard, Amex, and Discover and change annually — confirm current rates at the time of contracting.",
});

console.log("wrote "+"vending-payment-system-options");
