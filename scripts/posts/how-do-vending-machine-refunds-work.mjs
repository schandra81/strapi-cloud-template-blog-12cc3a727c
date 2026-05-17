import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-do-vending-machine-refunds-work", [
  tldr({
    heading: "How do vending machine refunds work, end to end?",
    paragraph:
      "Refund mechanics depend almost entirely on payment method and whether the machine has telemetry. Cashless refunds (the modern majority) are processed back to the original card via the operator's payment processor, typically within 3-7 business days; many cashless operators support instant refunds via QR code or contact form before route restock. Cash refunds historically required physical bill-return into the machine's escrow, but with most modern machines, a stuck product is logged into telemetry and the customer is reimbursed via mailed check or contact-form processed credit. The contact path matters: machines should have a clearly visible service phone number and email, or a QR refund link. Operators with telemetry can verify the failed-vend event remotely; operators without telemetry rely on customer report plus driver verification at the next restock. The customer-experience gap between best and worst operators is significant — best in class refund within 24 hours; worst in class never refund.",
    bullets: [
      { emphasis: "Refund method follows payment method:", text: "Cashless paid → cashless refund (3-7 days back to card). Cash paid → mailed check or store credit. The match matters because cash-to-card refunds aren't generally legal without complicated reconciliation." },
      { emphasis: "Telemetry shortens the loop:", text: "Modern machines log failed vends remotely. Customer reports the failure, operator verifies the event matches the log, refund issues without driver visit. Operators without telemetry verify on the next route stop." },
      { emphasis: "Service-contact visibility predicts customer satisfaction:", text: "Operators with prominent phone + email + QR refund link on the machine resolve refunds 3-5× faster than operators with no visible contact path. This is the single biggest variable in customer experience." },
    ],
  }),
  statStrip({
    heading: "Vending refund benchmarks",
    stats: [
      { number: "0.5-2%", label: "transaction refund rate", sub: "typical operator average", accent: "blue" },
      { number: "3-7 days", label: "cashless refund to card", sub: "via payment processor", accent: "blue" },
      { number: "24-48 hr", label: "best-in-class refund time", sub: "instant QR + telemetry", accent: "orange" },
      { number: "$50-150", label: "labor cost per cash refund", sub: "if route visit required", accent: "orange" },
    ],
  }),
  timeline({
    heading: "Refund timeline — cashless transaction (typical operator)",
    sub: "Step-by-step from failed vend through credit posted. Telemetry-enabled operators compress this; operators without telemetry add days.",
    howToName: "Process a cashless vending refund",
    totalTime: "3-7 business days",
    steps: [
      { title: "Failed vend event", description: "Customer pays, product fails to dispense (jam, empty coil, mechanical error). Machine logs error to telemetry stream if equipped.", duration: "Immediate" },
      { title: "Customer reports", description: "Customer scans the refund QR code, calls the posted phone number, or submits the operator's online form. The form captures: machine ID (printed on machine), failed product, payment last 4 digits, contact info.", duration: "1-5 minutes" },
      { title: "Operator verifies", description: "Service team cross-references the customer report against telemetry log. Telemetry confirms a failed-vend event at the reported time and product slot. If no telemetry, driver verifies on next route stop.", duration: "1-2 business days" },
      { title: "Refund issued via payment processor", description: "Operator issues refund through the cashless payment processor (Cantaloupe, Nayax, USConnect, etc.). The processor reverses the original transaction back to the customer's card.", duration: "0-1 business day" },
      { title: "Credit appears on customer statement", description: "Refund posts to the cardholder's account; timing depends on the issuing bank. Most appear in 3-5 business days; some take 7-10. The operator's responsibility ends at processor submission.", duration: "3-7 business days" },
    ],
  }),
  comparisonTable({
    heading: "Refund methods compared",
    sub: "Each payment method has its own refund mechanic. Customer experience varies widely; operator practice varies even more.",
    headers: ["Payment method", "Refund channel", "Typical timing", "Customer effort"],
    rows: [
      ["Credit/debit card (EMV)", "Reversed via payment processor to original card", "3-7 business days", "QR scan or phone call"],
      ["Contactless / mobile wallet", "Reversed to wallet → original card", "3-7 business days", "QR scan or phone call"],
      ["Campus card / employee badge", "Credited to campus / agency wallet", "1-3 business days", "Email or app submission"],
      ["Cash", "Mailed check or store credit", "1-3 weeks", "Phone call + mailing address"],
      ["Coin/bill stuck in escrow", "Machine returns physically (if mechanism intact)", { icon: "check", text: "Immediate" }, "Press coin-return"],
      ["Failed-vend without report", "No refund unless operator detects via telemetry", { icon: "warn", text: "Often never" }, "None"],
    ],
  }),
  specList({
    heading: "Refund system specifications operators should run",
    items: [
      { label: "Visible service contact on machine", value: "Phone number (toll-free preferred), email, and QR code linking to refund form. Sticker placement at eye level, not hidden behind machine. Visibility correlates strongly with refund-completion rate." },
      { label: "Telemetry-integrated failure logging", value: "Modern cashless boards (Cantaloupe, Nayax, USConnect, 365 Retail Markets) log failed-vend events to the operator dashboard automatically. Operator workflow auto-issues refund on confirmed failure without customer action." },
      { label: "Auto-refund on detected failure", value: "Best practice: telemetry triggers automatic refund the moment a failed-vend event is logged, without customer action. Card is refunded; customer gets email notification. Eliminates support friction entirely." },
      { label: "Refund SLA committed to clients", value: "Best-in-class operators commit to clients: refunds processed within 24-48 hours of report. Worst-in-class operators have no SLA. SLA is usually written into the client (host site) contract, not just policy." },
      { label: "Cash refund workflow", value: "Where cash is still accepted: customer call or form → mailed check (5-10 business days) or in-person credit at next route visit. Some operators offer Venmo/PayPal as a faster alternative — verify legality in your state." },
      { label: "Refund-rate monitoring", value: "Operators should track refund rate per machine. Refund rate > 2% indicates a machine-level problem (mis-spaced product, broken coil, persistent jam) — telemetry flags repeat offenders for service visit." },
      { label: "Dispute & escalation path", value: "When customers feel their refund was unfair, route to a manager-level resolution. Worst-case: chargeback via issuing bank. Operators with high chargeback rates lose their merchant processing — refund willingness is a cost-of-doing-business expense." },
      { label: "Client (host site) reporting", value: "Provide host site (office, campus, building) with monthly refund rate, top failure types, and resolution time. Transparency reduces host-site escalations and frames the operator as data-driven, not defensive." },
    ],
  }),
  tipCards({
    heading: "Four refund best-practice mistakes",
    sub: "Each is documented in customer-experience review of operator practices. All are operator-controllable.",
    items: [
      { title: "Hiding the service contact info", body: "Machines with no visible phone/QR/email signal to the customer 'don't bother contacting us.' Refund-rate completion drops 40-60% vs machines with visible contact. Even if you process refunds quickly, customers won't ask if they can't find how. Visible contact is a strict prerequisite." },
      { title: "Manual refund workflow with telemetry available", body: "If telemetry logs the failure, the operator already knows. Forcing the customer to call/email/QR-form is unnecessary friction. Best practice: auto-refund within 1 hour of detected failure, send notification email. Customer never has to ask." },
      { title: "Inconsistent refund timing by payment processor", body: "Different processors have different reversal speeds. Operators should benchmark their processor's average reversal time and communicate honestly. 'Refund in 3-7 days' is more credible than 'refund immediate' followed by 5-day delays." },
      { title: "No SLA in the host-site contract", body: "If the host site (office, campus, agency) doesn't have refund-SLA terms in the operator contract, the host can't hold the operator accountable. Build refund SLA into contracts at procurement — typical: 48-hour acknowledgment, 7-day processing." },
    ],
  }),
  inlineCta({
    text: "Want the operator-side refund workflow guide (telemetry triggers, SLA examples, host-site reporting)?",
    buttonLabel: "Get the refund workflow guide",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has worked on operator-side refund systems across cashless and hybrid placements — telemetry-driven auto-refund flows, host-site SLA design, and dispute escalation. The benchmarks and workflow recommendations reflect operator data and customer-experience research.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do I get a refund for a vending machine that took my money?", answer: "Look for the service phone number, email, or QR code on the machine — usually on a sticker at eye level. Call/email/scan with the machine ID (printed on the machine), the failed product, your card's last 4 digits, and contact info. Refund posts to your card in 3-7 business days for cashless, or mailed check in 1-3 weeks for cash.", audience: "Customers" },
      { question: "What if there's no service contact on the machine?", answer: "Look at the host site contact (front desk, office manager, building reception) — they typically have the operator's number. If still no path, contact your card issuer for a chargeback (usually a last resort because it forces resolution but can harm the operator). Reputable operators always post contact info.", audience: "Customers" },
      { question: "Can I get cash back if I paid by card?", answer: "No — the refund must return to the original payment method. Card-paid refunds go back to the card via the processor. Cash-paid refunds are either mailed check or store credit. This is partly a payment processor rule and partly an anti-fraud control.", audience: "Customers" },
      { question: "What if I paid in cash and the operator won't send a check?", answer: "First, ensure you have the machine ID, date, and time. Then escalate to the host site (office manager, building front desk). If no resolution, your state's consumer-protection office and the Better Business Bureau can help. Most legitimate operators resolve promptly to avoid these escalations.", audience: "Customers" },
      { question: "How often do refunds happen at a typical machine?", answer: "0.5-2% of transactions. Higher than 2% indicates a machine-level problem (mis-spaced product, broken coil, jam). Lower than 0.5% may indicate customers can't find how to ask. Operators should monitor refund rate per machine as a quality metric.", audience: "Operators" },
      { question: "How should we set up the refund workflow as an operator?", answer: "Visible service contact on every machine, telemetry-integrated auto-refund where supported, SLA committed to host sites (24-48 hour resolution), monthly refund-rate reporting to clients. Auto-refund on detected failure is the modern best practice.", audience: "Operators" },
      { question: "Do you need to refund a 'product didn't satisfy me' complaint?", answer: "No — refund policy is for failed-vend events (paid but no product, or wrong product). 'Didn't taste good' or 'didn't expect this brand' are not refund cases. Be clear with customers about which scenarios qualify.", audience: "Operators" },
      { question: "What about chargebacks?", answer: "Customer disputes via their issuing bank. If frequent, can lead to loss of merchant processing. Best response: refund willingly before customer escalates. Best-in-class operators run a chargeback rate under 0.05% of transactions.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending refund best practices", url: "https://www.namanow.org/", note: "Industry guidance on refund handling and customer service standards" },
      { label: "PCI-DSS — refund processing rules", url: "https://www.pcisecuritystandards.org/", note: "Card processing rules that apply to refund reversals" },
      { label: "Cantaloupe — vending telemetry platform", url: "https://www.cantaloupe.com/", note: "Telemetry-integrated failure detection and auto-refund mechanics" },
      { label: "Nayax — cashless payment platform", url: "https://www.nayax.com/", note: "Cashless payment processor with refund workflow tooling" },
      { label: "Better Business Bureau — consumer dispute resolution", url: "https://www.bbb.org/", note: "Escalation channel when operator resolution fails" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "How does cashless vending work?", description: "End-to-end cashless payment mechanics across card, mobile wallet, and campus-card integrations.", href: "/vending-faq/how-does-cashless-vending-work" },
      { eyebrow: "Operations", title: "Vending customer service and troubleshooting", description: "Service standards, escalation paths, and host-site reporting for apartment and office placements.", href: "/vending-for-apartments/vending-customer-service-troubleshooting" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, refunds, installation, and ongoing operations questions for prospective vending hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
