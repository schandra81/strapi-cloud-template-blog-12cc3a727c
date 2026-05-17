import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "retail-vending-payment-trends",
  assetType: "pack",
  title: "Retail Vending Payment Pack",
  subtitle: "2026 method-mix benchmarks, RFP language, SDK integration checklist, PCI DSS verification template",
  intro:
    "Retail vending payment is a 2026 inflection point — contactless and mobile-wallet now outpace card-swipe at most retail placements, cash is below 25% of transactions in most US markets, and PCI DSS v4.0 became fully required March 2025. This pack codifies the current method-mix benchmark, RFP language, SDK integration checklist for loyalty-app pairing, and PCI DSS verification template.",
  sections: [
    {
      heading: "1. Payment method mix — 2026 retail vending benchmarks",
      paragraph:
        "Method mix data from operator industry surveys (NAMA, CMA), payment-network research (Visa, Mastercard, NFC Forum), and retail vending operators. Use as benchmarks for new placements; tune to local demographics.",
      headers: ["Method", "Share of transactions (US retail 2026)", "Trend"],
      rows: [
        ["Contactless tap (card)", "30-40%", "↑ from 20-25% in 2022"],
        ["Mobile wallet (Apple Pay / Google Pay / Samsung Pay)", "25-35%", "↑ from 12-18% in 2022"],
        ["EMV chip / insert", "10-15%", "↓ from 25% in 2022 (contactless replacing)"],
        ["Magstripe swipe", "5-8%", "↓ steadily — phasing out in most regions"],
        ["Cash", "10-20%", "↓ from 30-35% in 2022; lower in metro areas, higher in rural"],
        ["Stored-value / loyalty app", "3-10%", "↑ in retailers with strong loyalty programs"],
      ],
    },
    {
      heading: "2. Hardware spec — payment reader",
      paragraph:
        "Payment reader is the single most important hardware on a modern retail vending machine.",
      items: [
        { label: "Reader certification", value: "EMVCo Level 1 + Level 2; PCI PTS POI v6.x or current. PCI DSS v4.0 compliant for cardholder-data path." },
        { label: "Contactless support", value: "ISO/IEC 14443 Type A + B. NFC Forum-compliant. EMV Contactless Kernel v2.x." },
        { label: "Mobile wallet support", value: "Apple Pay (VAS), Google Pay (SPDP), Samsung Pay, plus regional wallets (Cash App Pay, Venmo where supported)." },
        { label: "Mag stripe", value: "Retain for legacy support; PIN-encrypting where required. Mag stripe-only readers are below industry baseline as of 2026." },
        { label: "Connectivity", value: "Cellular 4G LTE Cat-M1 or CAT-1 standard. Heartbeat ≤ 15 min. PCI scope kept on operator path; not on retailer Wi-Fi." },
        { label: "Loyalty / stored-value SDK", value: "Reader supports SDK integration with retailer loyalty wallet (see Section 4). REST API for transaction-level loyalty event." },
      ],
    },
    {
      heading: "3. PCI DSS v4.0 verification template",
      paragraph:
        "PCI DSS v4.0 became fully required March 31, 2025. Verify operator's posture against the items below before contract sign.",
      items: [
        { check: "Operator provides current PCI DSS v4.0 Attestation of Compliance (AOC) — Service Provider (SAQ-D for Service Providers typical for vending operators)." },
        { check: "AOC dated within 12 months." },
        { check: "Reader / processor certifications (P2PE certificate if Point-to-Point Encryption claimed)." },
        { check: "Cardholder data flow diagram — operator confirms no cardholder data lands on retailer network or facility Wi-Fi (cellular-isolated path)." },
        { check: "Tokenization in place — card-on-file or stored payment uses tokens, not PANs." },
        { check: "Quarterly external vulnerability scan (ASV) — last scan report date confirmed." },
        { check: "Annual penetration test report (PCI DSS Req 11.4) — date confirmed." },
        { check: "Operator's responsible-disclosure / incident-response plan documented; retailer-notification SLA ≤ 72 hours on suspected incident." },
        { check: "Operator's third-party service providers (gateway, processor) listed; each one has PCI DSS AOC on file." },
      ],
    },
    {
      heading: "4. SDK integration checklist — loyalty wallet pairing",
      paragraph:
        "For retailers with a strong loyalty program, pairing vending transactions to the loyalty wallet is high-leverage. The SDK checklist:",
      items: [
        { number: 1, title: "Reader API exposure", description: "Operator's reader exposes a documented REST API (or webhook) for transaction events. Authentication via OAuth2 or API-key; rate limits documented." },
        { number: 2, title: "Loyalty identifier", description: "QR code on machine face links to loyalty-app authentication. Member scans → app authenticates → returns short-lived token → reader validates → applies points / discount." },
        { number: 3, title: "Stored value / closed-loop wallet", description: "Optional — retailer's closed-loop wallet (gift cards, employee accounts) accepted via reader's stored-value SDK." },
        { number: 4, title: "Transaction event posting", description: "Reader posts transaction event (timestamp, SKU, amount, member ID hash) to retailer's loyalty platform via webhook or batch SFTP. PII / cardholder data NOT included." },
        { number: 5, title: "Reconciliation", description: "Daily reconciliation file from operator → retailer. Member ID hash matched against retailer's loyalty database." },
        { number: 6, title: "Refund pathway", description: "Refund initiated via app or operator portal posts a reversal event to loyalty platform; points debit confirmed." },
        { number: 7, title: "Outage handling", description: "Loyalty integration failure does not block transaction — machine falls back to standard payment; loyalty event queued for retry." },
      ],
    },
    {
      heading: "5. Cashless-only vs. cashless-primary decision",
      paragraph:
        "Many retail placements now go cashless-only. Decision framework:",
      items: [
        { label: "Cashless-only — when it works", value: "Suburban / urban retail with high contactless penetration; reduces cash-handling labor + theft target; simplifies operator service routes; PCI scope clean." },
        { label: "Cashless-primary (cash accepted) — when it works", value: "Rural / lower-income demographics; placements serving older demographics; jurisdictions with cashless-discrimination laws (NJ, MA, NYC, San Francisco, Philadelphia) that require cash acceptance for in-person retail." },
        { label: "Cashless-discrimination laws to check", value: "New Jersey (2019), Massachusetts (decades-standing), NYC (2020), San Francisco (2019), Philadelphia (2019), Oakland (2020). Some apply to physical retail generally; unattended vending exemptions vary. Coordinate with legal." },
      ],
    },
    {
      heading: "6. RFP language — payment requirements",
      items: [
        { check: "Reader is EMVCo Level 1 + Level 2 certified; PCI PTS POI v6.x or current." },
        { check: "Contactless (NFC) + mobile wallet (Apple Pay / Google Pay / Samsung Pay) supported on every machine." },
        { check: "PCI DSS v4.0 AOC on file; current within 12 months." },
        { check: "Cellular-only cardholder data path; no retailer Wi-Fi dependency for payment." },
        { check: "Quarterly ASV scan + annual penetration test on file." },
        { check: "Tokenization in place for any stored-value / card-on-file feature." },
        { check: "Loyalty / stored-value SDK integration available; documented API." },
        { check: "Cashless-only or cash-included configuration documented per placement; complies with applicable cashless-discrimination law." },
        { check: "Transaction fee schedule transparent (interchange + processor + operator markup)." },
        { check: "Incident-response: retailer-notification SLA ≤ 72 hr on suspected cardholder-data incident." },
      ],
    },
    {
      heading: "7. Reporting + reconciliation",
      items: [
        { check: "Daily settlement file from operator → retailer accounting (transactions, gross revenue, fees, net commission)." },
        { check: "Monthly per-machine method-mix report (contactless / mobile-wallet / EMV / magstripe / cash / loyalty share)." },
        { check: "Refund + chargeback monthly summary." },
        { check: "Loyalty event reconciliation report (matched / unmatched transactions; resolution path for unmatched)." },
        { check: "PCI DSS AOC + ASV + pentest reports refreshed annually." },
        { check: "Incident log + notification audit trail (zero-incident report if applicable)." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to translate retail payment strategy into operator specifications, RFP language, and the PCI DSS + SDK integration verification framework. The operator selected via this framework executes the payment infrastructure; the retailer's finance, security, and loyalty teams own the retailer-side reconciliation and member-data governance.",
    },
  ],
  footer:
    "Informational reference. Payment method-mix shares evolve quickly; PCI DSS, EMVCo, and NFC Forum specifications are updated periodically. Verify current AOC and certification dates with the operator at contract sign and at annual renewal.",
});

console.log("wrote "+"retail-vending-payment-trends");
