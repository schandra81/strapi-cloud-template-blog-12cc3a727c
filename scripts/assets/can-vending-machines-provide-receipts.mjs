import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-vending-machines-provide-receipts",
  assetType: "guide",
  title: "Vending Receipt Implementation Guide",
  subtitle: "Email, SMS, app, and expense-platform integration",
  intro:
    "Yes — modern vending machines can issue receipts. The format varies by operator's payment platform: most issue digital receipts (email or SMS) by default; some support in-app receipts and direct integration to corporate expense platforms (Concur, Expensify, Ramp, Brex, Navan). This guide covers what to require in a host-site contract, what operators can deliver today, and how to integrate with downstream expense workflows.",
  sections: [
    {
      heading: "1. Receipt formats supported by major platforms",
      paragraph:
        "Major payment + telemetry platforms support different receipt formats. Specify which formats you require in your operator contract.",
      headers: ["Platform", "Email", "SMS", "In-app", "Expense-platform feed"],
      rows: [
        ["Cantaloupe Seed", "Yes", "Yes", "Yes (Cantaloupe app)", "API available; partner integrations with Concur + Expensify"],
        ["Nayax", "Yes", "Yes", "Yes (Nayax Pay app)", "API available; export to CSV / XLS"],
        ["365 Retail Markets", "Yes", "Yes", "Yes (365Pay app)", "Direct Concur + Ramp integrations"],
        ["USA Technologies / Verifone", "Yes", "Limited", "Yes (USA Tech wallet)", "API available"],
        ["AWM Smart Shelf", "Yes", "Yes", "Yes (AWM app)", "Export to CSV; API for enterprise"],
      ],
    },
    {
      heading: "2. Receipt content requirements",
      paragraph:
        "Receipts must contain the minimum content set below to be usable for corporate expense + tax filings. Reference IRS Publication 463 for substantiation rules.",
      items: [
        { check: "Operator legal name + address (matches W-9 / 1099 records)." },
        { check: "Transaction date + time (timezone-disambiguated)." },
        { check: "Itemized SKU list with per-SKU price (where machine supports — most modern platforms do)." },
        { check: "Subtotal + sales tax (calculated per host jurisdiction) + total." },
        { check: "Payment method (last 4 of card, or wallet-token reference)." },
        { check: "Transaction ID for operator-side reconciliation." },
        { check: "Refund / dispute contact (phone + URL)." },
      ],
    },
    {
      heading: "3. Email + SMS workflow",
      paragraph:
        "Email + SMS are the simplest. Buyer associates email or phone with payment method (one-time, in operator's wallet app or via tap-to-pair card reader). All future transactions auto-send a receipt.",
      items: [
        { number: 1, title: "First-time setup", description: "Buyer registers email + phone with operator wallet app, OR taps a registered card at the reader (Apple Pay / Google Pay tokens often carry email; some readers prompt at first tap)." },
        { number: 2, title: "Per-transaction send", description: "Operator's payment platform sends receipt within 1-5 minutes of transaction." },
        { number: 3, title: "Opt-out option", description: "Buyer can opt out via unsubscribe link (email) or STOP keyword (SMS) per CAN-SPAM Act + TCPA." },
        { number: 4, title: "Multi-machine consolidation", description: "Some operators offer a weekly or monthly digest of all transactions across the operator network for a single payment method." },
      ],
    },
    {
      heading: "4. In-app receipt + history",
      items: [
        { label: "Wallet app (operator)", value: "Operator-branded wallet app (365Pay, Cantaloupe Seed, Nayax Pay) holds transaction history indefinitely; buyer downloads receipts as PDF on demand." },
        { label: "Employer / portal app", value: "Where host-site negotiates a co-branded wallet (corporate, university), receipt history can be embedded in the host portal." },
        { label: "Wallet pass (Apple Wallet / Google Wallet)", value: "Some operators support a wallet pass that holds transaction history; useful for frequent buyers." },
      ],
    },
    {
      heading: "5. Expense-platform integration",
      paragraph:
        "For corporate buyers, the goal is no-touch reconciliation — vending charges flow into Concur / Expensify / Ramp / Brex / Navan without manual receipt upload.",
      items: [
        { number: 1, title: "Direct integration (preferred)", description: "Operator's platform has a published Concur / Expensify / Ramp / Brex / Navan integration. Charges + receipts flow automatically; corporate-card transactions auto-match." },
        { number: 2, title: "Email-forward integration", description: "Operator-emailed receipt forwards to Concur receipt-store address; OCR matches to card transaction. Most expense platforms support this fallback." },
        { number: 3, title: "Export / API integration", description: "Operator provides CSV / API feed of transactions; corporate finance ingests via ETL. Useful for high-volume corporate hosts." },
        { number: 4, title: "Bulk receipt request", description: "Where above isn't available, buyer requests a bulk receipt PDF via operator portal monthly." },
      ],
    },
    {
      heading: "6. Host-site contract requirements",
      items: [
        { check: "Operator commits to providing email + SMS receipts at no additional cost to buyer or host." },
        { check: "Operator publishes receipt content per Section 2." },
        { check: "Operator commits to an integration with at least one major expense platform (Concur / Expensify / Ramp / Brex / Navan) — choose per host preference." },
        { check: "Operator commits to receipt-delivery SLA: 95% of receipts delivered within 5 minutes; 100% within 24 hours." },
        { check: "Operator provides refund + dispute workflow (per separate guide on refunds)." },
        { check: "Operator complies with CAN-SPAM Act + TCPA for email + SMS; honors unsubscribe / STOP within 10 business days per FTC guidance." },
        { check: "Operator's data handling per applicable privacy framework (GDPR / CCPA / CPRA where buyer-base warrants)." },
      ],
    },
    {
      heading: "7. Troubleshooting",
      items: [
        { label: "‘I tapped and paid but no receipt.’", value: "Buyer's payment method may not have email registered. Check wallet app; complete one-time pairing." },
        { label: "‘Receipt arrived but wrong amount.’", value: "Sometimes a card auth + later capture rounds differently; operator's transaction ID resolves dispute." },
        { label: "‘Need a printed receipt.’", value: "Most modern vending machines do not print; printed-receipt vending machines exist but are uncommon in new deployments due to paper + maintenance cost. Buyer requests PDF or screenshot." },
        { label: "‘Expense platform isn't matching.’", value: "Confirm operator's merchant name on credit-card statement matches the receipt vendor name; finance may need to add an alias." },
      ],
    },
  ],
  footer:
    "Informational guide — confirm operator capability before contract issue. Receipt content + integrations are operator-platform-specific and should be validated in the bid response.",
});

console.log("wrote "+"can-vending-machines-provide-receipts");
