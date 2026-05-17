import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-does-cashless-vending-work", [
  tldr({
    heading: "How does cashless vending actually work, end to end?",
    paragraph:
      "Cashless vending is now 75-95% of transactions at modern placements. The architecture: customer presents payment (chip card, contactless, mobile wallet, campus card, badge); the machine's cashless board (Cantaloupe, Nayax, USConnect, 365 Retail Markets, etc.) reads the payment via EMV reader + NFC antenna; the board encrypts the transaction data and sends to the operator's payment processor over cellular or Wi-Fi; the processor authorizes the transaction with the issuing bank; on approval, the machine dispenses the product. The cashless board logs the transaction to telemetry for operator visibility. End-to-end: 3-8 seconds typical. Behind the scenes: PCI-DSS compliance on every component, P2PE (point-to-point encryption) preferred at high-security sites, tokenization for repeat transactions, real-time fraud monitoring. Most operators absorb the card processing fee ($0.20-0.45 per transaction); some pass it through to host commission deduction. The modernization gap between cashless-fluent operators and legacy cash-only or partial-cashless operators is dramatic — cashless operators report 15-30% higher transaction volume and substantially lower operational overhead.",
    bullets: [
      { emphasis: "75-95% cashless transactions today:", text: "Modern placements have largely moved past cash. Cards, contactless, mobile wallets, campus cards, and badges dominate. Cash-only machines are increasingly excluded from competitive RFPs." },
      { emphasis: "End-to-end 3-8 seconds:", text: "Customer-card-tap to product-dispensed typical 3-8 seconds. Faster than cash transactions. Customer experience advantage drives the adoption trend." },
      { emphasis: "PCI-DSS underpins everything:", text: "Every component (reader, board, processor) must be PCI-DSS compliant. Operator + processor maintain attestation. P2PE preferred at high-security sites. Operators without PCI compliance shouldn't accept cards." },
    ],
  }),
  statStrip({
    heading: "Cashless vending benchmarks",
    stats: [
      { number: "75-95%", label: "cashless transactions", sub: "modern placements", accent: "blue" },
      { number: "3-8 seconds", label: "end-to-end transaction", sub: "tap to dispense", accent: "blue" },
      { number: "$0.20-0.45", label: "processing fee per transaction", sub: "operator absorbed typically", accent: "blue" },
      { number: "+15-30%", label: "transaction volume lift", sub: "cashless vs cash-only", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Cashless payment methods compared",
    sub: "Five common cashless payment paths with different mechanics and use cases. Modern operators support all five.",
    headers: ["Payment method", "Mechanics", "Best use case", "Customer experience"],
    rows: [
      ["EMV chip card", "Customer inserts card; reader authenticates via chip", "Customers with traditional cards", "5-8 seconds"],
      ["Contactless / NFC", "Customer taps card to reader; NFC handshake", "Customers with contactless-enabled cards", "3-5 seconds"],
      ["Mobile wallet (Apple Pay, Google Pay, Samsung Pay)", "Customer taps phone; mobile wallet authenticates via biometrics", "Mobile-wallet-equipped customers", "3-5 seconds"],
      ["Campus card / employee badge", "Customer taps badge; reads cardholder identity from access system", "Campus, government, large enterprise", "3-5 seconds"],
      ["QR code / app-based payment", "Customer scans QR; app authenticates and processes", "Some markets (China, emerging US)", "5-10 seconds"],
    ],
  }),
  specList({
    heading: "Cashless vending specifications",
    items: [
      { label: "EMV reader (PCI-PTS 5.x certified)", value: "Reader hardware certified per current PCI-PTS standard. Supports EMV chip + contactless NFC. Modern boards include both. Annual recertification per PCI-DSS." },
      { label: "Mobile wallet support", value: "Apple Pay, Google Pay, Samsung Pay standard. Reads tokenized credentials from phone NFC. No additional hardware needed beyond contactless EMV reader. Mobile wallet now 50-70% of contactless transactions at offices and campuses." },
      { label: "Cashless board (Cantaloupe, Nayax, USConnect, etc.)", value: "Board handles transaction encryption, telemetry, and connectivity. Cellular (4G/5G) connectivity standard; Wi-Fi as fallback. Board firmware updateable remotely. PCI-DSS attestation maintained." },
      { label: "Payment processing path", value: "Transaction data encrypted on board → sent via cellular/Wi-Fi → payment processor (Stripe, USAePay, Cardpointe, etc.) → issuing bank → authorization or decline → return path → product dispensed. End-to-end 3-8 seconds typical." },
      { label: "P2PE (point-to-point encryption)", value: "Encryption from reader through processor. Higher security than tokenization alone. Preferred at federal, hospital, and other high-security placements. Operator + processor must both be P2PE-certified." },
      { label: "Tokenization", value: "Repeat-customer card details tokenized for faster subsequent transactions. Token replaces card number; reduces fraud exposure. Standard at modern cashless platforms." },
      { label: "Telemetry integration", value: "Every transaction logged to operator dashboard with SKU, payment method, timestamp, payment last 4 digits. Enables auto-refund on failed vends, fraud detection, operational analytics." },
      { label: "Failed-vend auto-refund", value: "When telemetry confirms a failed-vend event, operator can auto-issue refund without customer action. Best-in-class operators implement this; reduces support load and improves customer experience." },
      { label: "Card processing fees", value: "$0.20-0.45 per transaction typical, varies by processor and card mix. Most operators absorb as cost of business; some pass through to host commission deduction. Pass-through processing affects commission revenue meaningfully on high-volume placements." },
    ],
  }),
  tipCards({
    heading: "Five cashless vending mistakes",
    sub: "Each is documented in operator-host post-implementation reviews. All preventable with cashless-fluent operator selection.",
    items: [
      { title: "Accepting cash-only or partial-cashless operators", body: "Operators stuck on cash-only or cash-dominant models can't credibly support modern placements. 75-95% of transactions at offices, schools, and campuses are now cashless. Verify operator supports full cashless stack at RFP; demo at proposal." },
      { title: "Mobile wallet support as 'optional'", body: "Mobile wallets are now 50-70% of contactless transactions. Operators without Apple Pay / Google Pay / Samsung Pay support produce friction and lose transactions. Verify at install; ensure operator firmware current." },
      { title: "Skipping P2PE at high-security sites", body: "Federal, hospital, and other high-security placements increasingly require P2PE encryption beyond standard PCI-DSS. Operators without P2PE certification can't serve these sites. Verify at proposal; P2PE adds 30-45 days to setup but is the high-security standard." },
      { title: "Letting processing fees pass through silently", body: "Card processing fees ($0.20-0.45 per transaction) reduce host commission meaningfully on high-volume placements. Best operators absorb; some pass through. Verify at contract signature; renegotiate if pass-through wasn't disclosed clearly." },
      { title: "No telemetry-integrated auto-refund", body: "When telemetry confirms failed vend, operator should auto-refund without customer action. Operators with manual-only refund workflow create customer-experience friction. Auto-refund is modern table-stakes; verify at proposal." },
    ],
  }),
  inlineCta({
    text: "Want the cashless vending operator selection framework (EMV, contactless, mobile wallet, P2PE)?",
    buttonLabel: "Get the cashless framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported cashless vending implementations across office, school, campus, hospital, airport, and government placements — including EMV / contactless / mobile wallet / campus card / federal CAC integrations and P2PE compliance. The benchmarks reflect operator-side data from current cashless deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does cashless vending work?", answer: "Customer presents payment (chip card, contactless, mobile wallet, campus card); machine's cashless board reads via EMV reader + NFC antenna; encrypts and sends to payment processor over cellular; processor authorizes; machine dispenses product. End-to-end 3-8 seconds. PCI-DSS compliance underpins every component.", audience: "Property Managers" },
      { question: "What payment methods should we accept?", answer: "EMV chip + contactless + Apple Pay + Google Pay + Samsung Pay standard. Campus card / employee badge at campuses and large enterprises. CAC/PIV at federal sites where applicable. Modern operators support all of these natively.", audience: "Procurement" },
      { question: "Should we accept cash too?", answer: "Most modern placements are phasing cash out. Cashless-only simplifies audit, reduces collection logistics, lowers fraud exposure. Retain cash only where visitor mix specifically requires (visitor centers, transit, some retail). 75-95% of transactions are now cashless at most placements.", audience: "Property Managers" },
      { question: "How do mobile wallets work in vending?", answer: "Customer taps phone to contactless reader. Mobile wallet (Apple Pay, Google Pay, Samsung Pay) authenticates via biometric (Face ID, Touch ID, fingerprint). Tokenized credential transmitted; processed like contactless card. 3-5 seconds typical.", audience: "Customers" },
      { question: "What about processing fees?", answer: "$0.20-0.45 per transaction typical. Most operators absorb as cost of business; some pass through to host commission deduction. Pass-through processing affects commission meaningfully on high-volume placements. Verify at contract signature.", audience: "Procurement" },
      { question: "Is cashless secure?", answer: "Yes when properly implemented. PCI-DSS compliance on every component (reader, board, processor). P2PE encryption at high-security sites. Tokenization reduces card-data exposure. Fraud rate at modern cashless vending is under 0.05% of transactions.", audience: "Risk Management" },
      { question: "What if the payment fails?", answer: "Transaction declined; machine returns to ready state without dispensing. Customer can retry with different payment. If product dispensed but payment failed (rare), operator's telemetry detects mismatch and reconciles. Auto-refund standard at modern operators.", audience: "Customers" },
      { question: "Do we still need cellular telemetry?", answer: "Yes — cellular is the primary connection for cashless boards (with Wi-Fi fallback). Wi-Fi alone is fragile (network outages, range issues). Cellular telemetry is the modern standard; operators using Wi-Fi exclusively miss anomalies and lose monitoring during outages.", audience: "IT" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "PCI Security Standards Council — PCI-DSS, PTS, P2PE", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards governing all card-accepting vending" },
      { label: "EMVCo — EMV chip specifications", url: "https://www.emvco.com/", note: "Standards body for EMV chip and contactless payment" },
      { label: "Apple Pay / Google Pay / Samsung Pay — mobile wallet documentation", url: "https://www.apple.com/apple-pay/", note: "Mobile wallet platforms underlying modern cashless vending" },
      { label: "Cantaloupe / Nayax / USConnect / 365 Retail Markets — vending cashless platforms", url: "https://www.cantaloupe.com/", note: "Major cashless platform vendors" },
      { label: "NAMA — cashless vending operator practice", url: "https://www.namanow.org/", note: "Industry guidance on cashless vending operations" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "How do vending machine refunds work?", description: "End-to-end refund mechanics across cashless, cash, and telemetry-driven scenarios.", href: "/vending-faq/how-do-vending-machine-refunds-work" },
      { eyebrow: "Operations", title: "Advanced payment systems in government vending", description: "CAC, PIV, EMV, PCI-DSS, and FIPS compliance for government vending placements.", href: "/vending-for-public-buildings/advanced-payment-systems-government-vending" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, contracts, installation, and operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
