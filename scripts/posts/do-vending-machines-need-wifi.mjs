import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-vending-machines-need-wifi", [
  tldr({
    heading: "Do vending machines need Wi-Fi to operate — and what about cellular?",
    paragraph:
      "No, vending machines do not need Wi-Fi to operate. Modern cashless vending machines connect through cellular telemetry by default — the cashless payment board includes an embedded cellular SIM (4G LTE typical, increasingly 5G + LTE-M) provisioned and managed by the operator, with the data plan bundled into the service contract at no separate cost to the host. Cellular is the preferred connectivity path because it is independent of the host facility's network (no IT ticket to onboard a new device, no VLAN configuration, no captive-portal authentication, no risk of facility Wi-Fi outage taking the machine offline), works at outdoor + remote placements where facility Wi-Fi isn't available, and provides operator-managed monitoring of dispense data, refunds, machine health, and cashless transactions. Wi-Fi is a fallback at placements where cellular coverage is weak (basements, interior rooms with thick concrete walls, rural sites without strong carrier coverage, certain hospital sublevels with intentional RF shielding) — in those cases the operator coordinates with facility IT on guest Wi-Fi access or a dedicated SSID. Pre-cashless cash-only machines technically don't need any connectivity at all to dispense product (mechanical coin mechanism + bill validator works standalone), but cash-only machines are rare in commercial deployments today — the operational benefits of telemetry-backed monitoring (stockout alerts, refund processing, sales reporting, compliance documentation) plus cashless payment acceptance have driven 95%+ of new commercial machine deployments to be connected. Host typically provides power; operator provides connectivity.",
    bullets: [
      { emphasis: "Cellular is the default — no Wi-Fi needed:",
        text: "Cashless boards ship with embedded SIM + LTE data plan managed by operator. Independent of facility network. No IT onboarding, no VLAN, no captive portal." },
      { emphasis: "Wi-Fi only as fallback at weak-cellular sites:",
        text: "Basements, thick-wall interior rooms, RF-shielded hospital sublevels, rural sites with weak carrier coverage. Operator coordinates with facility IT." },
      { emphasis: "Cash-only machines technically need zero connectivity:",
        text: "Mechanical coin mech + bill validator works standalone. Rare in modern commercial deployments — telemetry benefits drove 95%+ connected adoption." },
    ],
  }),
  statStrip({
    heading: "Vending machine connectivity benchmarks",
    stats: [
      { number: "Cellular", label: "default connectivity", sub: "operator-managed SIM + LTE data plan", accent: "blue" },
      { number: "0", label: "Wi-Fi required at most sites", sub: "facility network independent", accent: "blue" },
      { number: "95%+", label: "modern machines connected", sub: "telemetry-backed monitoring standard", accent: "blue" },
      { number: "Fallback", label: "Wi-Fi role", sub: "weak-cellular sites only", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Cellular vs Wi-Fi for vending machine connectivity",
    sub: "Cellular preferred at virtually all deployments. Wi-Fi is fallback at weak-cellular sites only.",
    headers: ["Dimension", "Cellular (default)", "Wi-Fi (fallback)"],
    rows: [
      ["Onboarding", "Plug in + power on — operator-provisioned SIM", "Facility IT ticket, VLAN, captive-portal auth"],
      ["Reliability", "Independent of facility network", "Goes down with building Wi-Fi"],
      ["Coverage", "Strong at most placements", "Limited to facility Wi-Fi footprint"],
      ["Outdoor / remote", "Works at most outdoor sites", "Usually unavailable outdoor / remote"],
      ["Cost to host", "$0 — bundled into operator service", "$0 — guest Wi-Fi access or dedicated SSID"],
      ["Security", "Operator-managed APN; no facility risk", "Facility-managed SSID; some risk profile"],
      ["Backhaul speed", "4G LTE typical (3-10 Mbps)", "Wi-Fi capacity (variable)"],
      ["Failure modes", "Carrier outage rare; per-carrier", "Building Wi-Fi outage; AP failure"],
    ],
  }),
  specList({
    heading: "Vending machine connectivity specifications",
    items: [
      { label: "Cellular telemetry — the modern default", value: "Modern cashless boards (Cantaloupe, Nayax, USConnect, Crane Streamware, Vagabond) include embedded cellular SIM with 4G LTE coverage as default (some platforms now offer 5G NSA + LTE-M for IoT-style placements). Operator provisions SIM + data plan at install + manages renewals + bundles into standard service contract. No additional cost or coordination required from host. Independent of facility network — no IT ticket, no VLAN, no captive-portal authentication required." },
      { label: "Wi-Fi as fallback at weak-cellular sites", value: "Some sites have weak cellular signal — basements, thick-concrete-wall interior rooms, RF-shielded hospital sublevels (radiology suites, MRI adjacencies), rural sites with weak carrier coverage. At these sites, Wi-Fi becomes the fallback. Operator coordinates with facility IT on guest Wi-Fi access or dedicated SSID. Verify cellular signal at install survey before committing to Wi-Fi fallback." },
      { label: "What telemetry data flows over connectivity", value: "Cashless transactions (card token, amount, timestamp, SKU), dispense logs (item, time, success / fail), refund logs (initiation, processing, payout), machine health (compressor temp, coin mech status, bill validator status, cooler door cycle count), planogram + price sync (operator pushes pricing + product changes), software updates (cashless board firmware, payment certificate refresh). Typical data volume: 50-200 MB per machine per month — comfortably within standard LTE data plans." },
      { label: "Data security + compliance", value: "Cashless transaction data PCI-DSS protected — card numbers tokenized; only token + last 4 digits stored. Cellular carriers use APN (Access Point Name) isolation; operator-managed APN with secure backhaul. At AI cooler badge-authenticated placements, employee identifier data may flow — coordinate with facility Privacy Officer on data handling + BAA if HIPAA covered." },
      { label: "Cellular coverage verification at install survey", value: "Operator install crew verifies cellular signal at proposed machine location before delivery — typically using a signal meter or test phone on the operator's carrier. Minimum signal threshold for reliable telemetry. If signal weak, operator selects alternate location, deploys cellular signal booster (40-60 dB amplifier with external antenna), or falls back to facility Wi-Fi. Verify at install survey, not after delivery." },
      { label: "Cash-only machines — zero connectivity option", value: "Pre-cashless cash-only machines (mechanical coin mechanism + bill validator) technically work standalone without any connectivity. Rare in modern commercial deployments — operator can't see stockouts, can't process refunds remotely, can't sync planogram, can't track sales centrally. Some legacy private-operator placements still run cash-only; not recommended for new commercial deployments." },
      { label: "Cellular signal boosters for weak-signal sites", value: "At sites with weak but present cellular signal, operator deploys cellular signal booster — 40-60 dB amplifier with external antenna (rooftop or wall-mounted) feeding internal antenna at machine location. $200-600 hardware + install. Resolves most weak-signal scenarios without falling back to Wi-Fi. Coordinate with facility on antenna placement + cable run at install survey." },
      { label: "5G + LTE-M emerging for IoT placements", value: "5G NSA + LTE-M (LTE Cat-M1 for IoT) emerging at some operator deployments for next-generation IoT-style placements with extended telemetry (cooler temp sensors, motion detection, demand-response signaling). LTE-M optimized for low-power, low-bandwidth IoT use cases — appropriate for vending. 5G NSA for placements anticipating higher bandwidth (AI cooler camera + video analytics). Both backward-compatible with 4G LTE during rollout." },
    ],
  }),
  decisionTree({
    heading: "Does the proposed machine location need Wi-Fi access?",
    question: "Does the proposed machine location have reliable cellular signal (operator's carrier coverage verified at install survey)?",
    yesBranch: {
      title: "Cellular only — no Wi-Fi needed",
      description: "Operator's cellular telemetry works out of the box. No facility IT ticket, no VLAN configuration, no captive-portal authentication, no SSID coordination required. Operator provisions SIM + data plan + bundles into standard service contract. Plug in + power on — machine connects automatically. This is the default at 90%+ of commercial vending placements.",
      finalTone: "go",
      finalLabel: "CELLULAR · NO WI-FI",
    },
    noBranch: {
      title: "Weak cellular — coordinate Wi-Fi fallback or signal booster",
      description: "If cellular signal weak at proposed location (basement, thick-concrete-wall interior, RF-shielded sublevel, rural weak-carrier site), operator has two options: (1) deploy cellular signal booster (40-60 dB amplifier with external antenna; $200-600 + install) — resolves most weak-signal scenarios while keeping cellular path, or (2) fall back to Wi-Fi — coordinate with facility IT on guest Wi-Fi access or dedicated SSID. Verify cellular signal at install survey before committing.",
      finalTone: "warn",
      finalLabel: "WEAK CELLULAR · COORDINATE",
    },
  }),
  tipCards({
    heading: "Five vending connectivity mistakes",
    sub: "All preventable with cellular signal verification at install survey.",
    items: [
      { title: "Assuming Wi-Fi onboarding is required", body: "Many hosts assume vending machines need facility Wi-Fi like any IoT device. They don't — cellular is the default. No IT ticket, no VLAN, no captive-portal authentication. Operator provisions SIM + bundles data plan into service contract. Saves facility IT coordination time at install." },
      { title: "Not verifying cellular signal at install survey", body: "Some interior locations have weak cellular signal — basements, thick-concrete-wall interior rooms, RF-shielded hospital sublevels. Verify cellular signal at install survey before delivery; coordinate signal booster or Wi-Fi fallback if weak. Machines deployed to weak-signal locations have intermittent telemetry + poor cashless reliability." },
      { title: "Skipping cellular signal booster at weak-signal sites", body: "Cellular signal booster ($200-600 hardware + install) resolves most weak-signal scenarios while keeping cellular path. Avoids Wi-Fi fallback coordination + facility IT dependency. Operator install crew should propose booster at install survey when weak-signal location is preferred." },
      { title: "Deploying cash-only machines for 'simplicity'", body: "Cash-only machines (no connectivity) seem simpler but eliminate telemetry-backed monitoring, refund processing, stockout alerts, planogram sync, sales reporting. Operator can't manage placement; host can't verify sales. Not recommended for new commercial deployments. Cellular adds zero host coordination cost." },
      { title: "Wi-Fi-only telemetry at single-point-of-failure sites", body: "Wi-Fi alone fails when facility network goes down. At hospitals, airports, federal facilities — single-point-of-failure on facility Wi-Fi affects telemetry + cashless during outage. Cellular telemetry independent of facility network is the resilient baseline. Use Wi-Fi as fallback only, not primary." },
    ],
  }),
  inlineCta({
    text: "Want the vending connectivity decision tree (cellular vs Wi-Fi, signal verification, booster sizing)?",
    buttonLabel: "Get the connectivity decision tree",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support vending connectivity planning across offices, hospitals, campuses, airports, government facilities, and outdoor placements — including cellular signal verification at install survey, signal booster sizing at weak-signal sites, Wi-Fi fallback coordination with facility IT, PCI-DSS + HIPAA data handling at cashless + AI cooler placements, and 4G LTE + 5G NSA + LTE-M evaluation at next-generation IoT deployments. The benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do vending machines need Wi-Fi?", answer: "No, vending machines do not need Wi-Fi to operate. Modern cashless vending machines connect through cellular telemetry by default — the cashless payment board includes an embedded cellular SIM (4G LTE typical) provisioned and managed by the operator. Cellular is independent of facility network — no IT ticket, no VLAN, no captive-portal authentication required. Wi-Fi is a fallback only at weak-cellular sites.", audience: "Property Managers / Facilities" },
      { question: "Does the operator pay for cellular service?", answer: "Yes. Modern operators bundle cellular SIM + data plan into standard service contract at no separate cost to host. Operator provisions SIM at install + manages renewals. Cashless board includes embedded cellular connectivity. Standard practice across major vending platforms (Cantaloupe, Nayax, USConnect, Crane Streamware, Vagabond).", audience: "Operators / Procurement" },
      { question: "What if cellular signal is weak at our site?", answer: "Two options: (1) cellular signal booster — 40-60 dB amplifier with external antenna feeding internal antenna at machine location; $200-600 hardware + install; resolves most weak-signal scenarios, or (2) Wi-Fi fallback — operator coordinates with facility IT on guest Wi-Fi access or dedicated SSID. Verify cellular signal at install survey before delivery.", audience: "Facilities / Operators" },
      { question: "What telemetry data does the machine send?", answer: "Cashless transactions (card token, amount, timestamp, SKU), dispense logs (item, time, success / fail), refund logs (initiation, processing, payout), machine health (compressor temp, coin mech status, bill validator status, cooler door cycle count), planogram + price sync, software updates. Typical data volume: 50-200 MB per machine per month.", audience: "IT / Operators" },
      { question: "Is the cellular connection secure?", answer: "Yes. Cashless transaction data PCI-DSS protected — card numbers tokenized; only token + last 4 digits stored. Cellular carriers use APN (Access Point Name) isolation; operator-managed APN with secure backhaul. Independent of facility network — no facility security exposure. At AI cooler badge-authenticated placements, coordinate with facility Privacy Officer on data handling + BAA if HIPAA covered.", audience: "IT / Security" },
      { question: "Can a vending machine work without any connectivity?", answer: "Yes for pre-cashless cash-only machines (mechanical coin mechanism + bill validator). Rare in modern commercial deployments — operator can't see stockouts, can't process refunds remotely, can't sync planogram, can't track sales centrally. Cellular adds zero host coordination cost and provides telemetry-backed monitoring; not recommended to deploy cash-only at new commercial placements.", audience: "Hosts / Operators" },
      { question: "Does our facility IT need to do anything?", answer: "Usually nothing if cellular signal is reliable. No VLAN configuration, no captive-portal authentication, no SSID coordination required. Operator-provisioned SIM handles connectivity end-to-end. Only at weak-cellular sites where Wi-Fi fallback is needed does facility IT coordinate — typically a guest Wi-Fi credential or dedicated SSID for the machine.", audience: "Facility IT" },
      { question: "What about 5G + LTE-M for next-generation machines?", answer: "5G NSA + LTE-M (LTE Cat-M1 for IoT) emerging at some operator deployments for IoT-style placements with extended telemetry (cooler temp sensors, motion detection, demand-response signaling). LTE-M optimized for low-power, low-bandwidth IoT — appropriate for vending. 5G NSA for higher-bandwidth placements (AI cooler camera + video analytics). Both backward-compatible with 4G LTE during rollout.", audience: "Operators / Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FCC — cellular coverage + carrier standards", url: "https://www.fcc.gov/", note: "Federal coverage of cellular standards relevant to telemetry connectivity" },
      { label: "PCI Security Standards Council — PCI-DSS for cashless payments", url: "https://www.pcisecuritystandards.org/", note: "Card payment security standards covering cellular cashless transaction protection" },
      { label: "NAMA — vending equipment installation + telemetry standards", url: "https://www.namanow.org/", note: "Industry guidance on vending installation, telemetry, and connectivity" },
      { label: "GSMA — IoT + LTE-M specifications", url: "https://www.gsma.com/iot/", note: "Industry association covering LTE-M + 5G NSA specifications for IoT-style placements" },
      { label: "NIST — cellular IoT security framework", url: "https://www.nist.gov/cyberframework", note: "Federal cybersecurity framework applicable to cellular-connected IoT devices" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and installation guides",
    items: [
      { eyebrow: "Sister guide", title: "Do vending machines need Wi-Fi or power?", description: "Full infrastructure walkthrough — power, GFCI, telemetry, water, drainage, generator backup.", href: "/vending-faq/do-vending-machines-need-wifi-or-power" },
      { eyebrow: "Operations", title: "How does cashless vending work?", description: "Card readers, tokenization, mobile wallet, NFC, expense integration, PCI-DSS.", href: "/vending-faq/how-does-cashless-vending-work" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, and ongoing operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
