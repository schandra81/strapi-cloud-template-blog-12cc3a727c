import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-do-vending-machine-refunds-work",
  assetType: "guide",
  title: "Operator-Side Vending Refund Workflow Guide",
  subtitle: "Telemetry triggers, SLA examples, and host-site reporting",
  intro:
    "Vending refunds work three ways: cashless auto-credit (most common, fastest), member-initiated app/SMS refund (operator-mediated), and on-site cash refund (operator visit). Modern operators run all three. This guide covers the telemetry triggers that detect failed dispenses automatically, typical SLA examples by transaction type, the steps a buyer takes if a transaction fails, and what the host site should expect to see in monthly reports.",
  sections: [
    {
      heading: "1. Refund channels",
      paragraph:
        "Modern operator platforms support three refund channels. Specify which channels are in scope in your host-site contract.",
      headers: ["Channel", "Trigger", "Typical resolution time"],
      rows: [
        ["Auto-credit (telemetry-detected)", "Operator's machine telemetry detects failed dispense (helix didn't turn, item didn't drop, sensor mismatch). Triggers auto-reversal on cashless transactions.", "Within 1-24 hours; many operators within minutes"],
        ["Buyer-initiated (app / SMS / web)", "Buyer reports a failed transaction through operator wallet app, SMS-to-refund short code, or operator support web form.", "Cashless: 4-24 hours; Cash: at next operator visit (max 7-14 days)"],
        ["On-site (operator visit)", "Buyer fills out refund slip at machine; operator processes at next restock visit. Less common in modern operations but still used for cash transactions where buyer has no email/phone registered.", "5-14 days"],
      ],
    },
    {
      heading: "2. Telemetry triggers — how auto-refunds work",
      paragraph:
        "Modern vending machines have sensors that detect dispense failures. Operator platforms (Cantaloupe, Nayax, 365 Retail Markets, USA Technologies, AWM Smart Shelf) auto-trigger refunds on detected failure.",
      items: [
        { number: 1, title: "Helix motor sensor", description: "Detects whether the helix turned the full revolution. If motor stalled or didn't complete, auto-refund triggers." },
        { number: 2, title: "Product-drop sensor (optical)", description: "Optical beam at dispense bin. If item didn't break the beam during expected window, auto-refund triggers." },
        { number: 3, title: "Weight sensor (smart cooler / smart shelf)", description: "RFID + weight-confirmed: if removed item weight doesn't match expected SKU, transaction reconciles or refunds." },
        { number: 4, title: "Door-cycle log (smart cooler)", description: "Cooler-style machines log open/close cycles + item removal; failed pulls reconcile + auto-refund." },
        { number: 5, title: "Payment-side reconciliation", description: "Payment platform compares auth + dispense; auth without dispense triggers reversal." },
      ],
    },
    {
      heading: "3. SLA examples by transaction type",
      headers: ["Transaction type", "SLA — auto-credit", "SLA — buyer-initiated", "SLA — cash"],
      rows: [
        ["General workplace cashless", "Within 1-24 hours", "Within 24 hours", "At next visit (up to 7 days)"],
        ["Stadium / venue cashless (event hours)", "Within 4 hours", "Within 4 hours (concierge desk)", "On-site at event refund desk"],
        ["VIP / suite (folio-charged)", "Within 4 hours; folio reversal within 1 business day", "Within 4 hours; concierge channel", "Folio-only; not applicable"],
        ["Campus card", "Within 24 hours; cross-platform with campus card system", "Within 24 hours via campus card office", "Cash if any, at next visit"],
        ["Public building / federal", "Within 24 hours", "Within 24-48 hours", "Operator visit within 7-14 days"],
        ["Healthcare / 24/7", "Within 4-24 hours", "Within 24 hours", "Operator visit within 7 days"],
      ],
    },
    {
      heading: "4. Buyer-side process — what to tell employees / members",
      items: [
        { number: 1, title: "If your card was charged but you didn't get your item", description: "Most cases auto-resolve within 24 hours — check your card statement. If not, contact the operator via the phone number or QR code on the machine, or use the operator's app or SMS short code." },
        { number: 2, title: "What info to have ready", description: "Machine ID (printed on machine face), date + time of transaction, item attempted, last 4 of card used, your contact email." },
        { number: 3, title: "If you paid cash", description: "Fill out the refund slip on the machine (or photograph the machine face + a note with your contact info if no slip available); operator credits at next visit or mails / drops off at host office." },
        { number: 4, title: "If the refund didn't come through", description: "Escalate to host facilities or HR contact; they have direct operator contact and SLA enforcement leverage." },
        { number: 5, title: "Chargeback as last resort", description: "Card-issuer chargeback is available but slow and damages operator relationship; use only after operator + host channels exhausted." },
      ],
    },
    {
      heading: "5. Host-side reporting",
      paragraph:
        "Host's monthly report from operator should include refund data so host can monitor program health.",
      items: [
        { check: "Refund volume (count + dollar amount) for the period." },
        { check: "Refund rate as % of transactions (industry typical 1-3%; > 3% suggests equipment or planogram problem)." },
        { check: "Refund reason codes (failed dispense, wrong item, cold-chain issue, buyer error, other)." },
        { check: "Refund SLA adherence (% within SLA)." },
        { check: "Per-machine refund pattern (single machine with high refund rate triggers service ticket)." },
        { check: "Year-over-year trend." },
        { check: "Operator action items (planogram adjustment, equipment service, signage update)." },
      ],
    },
    {
      heading: "6. When refund rate signals a deeper problem",
      items: [
        { label: "Single-machine high refund rate", value: "Likely equipment issue — helix wear, optical-sensor drift, refrigeration problem. Operator service ticket + repair within SLA." },
        { label: "Single-SKU high refund rate", value: "Likely planogram issue — packaging hangs on helix, item too tall for slot, expired stock. Operator removes SKU or adjusts planogram." },
        { label: "Cold-chain refund spike", value: "Likely refrigeration excursion or restock timing. Operator audit + corrective action; cold-chain SLA invoked." },
        { label: "Concentrated time-of-day pattern", value: "May indicate cash-acceptor jamming during peak; operator services bill validator and/or shifts to cashless-default UX." },
        { label: "Cross-machine pattern", value: "Likely operator-platform issue or payment-processor delay; escalate to operator account manager + payment processor." },
      ],
    },
    {
      heading: "7. Host-site contract requirements",
      items: [
        { check: "Operator commits to auto-credit on telemetry-detected failed dispenses." },
        { check: "Operator publishes refund SLA per Section 3 for the host type." },
        { check: "Operator commits to monthly refund reporting per Section 5." },
        { check: "Operator publishes refund contact (phone, app, SMS, web) on every machine face." },
        { check: "Operator's refund process is accessible per ADA Section 308 (e.g., refund flow available via phone / SMS / app, not solely via wall-mounted touchscreen out of reach range)." },
        { check: "Refund rate > 3% of transactions triggers operator + host root-cause review." },
        { check: "Buyer-initiated refund acknowledged within 1 business day; resolved within SLA." },
      ],
    },
  ],
  footer:
    "Informational guide — confirm operator capability + SLA before contract issue. Refund processes are operator-platform-specific and should be validated in the operator bid response.",
});

console.log("wrote "+"how-do-vending-machine-refunds-work");
