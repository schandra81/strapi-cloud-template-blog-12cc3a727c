import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("airport-vending-security-and-monitoring", [
  tldr({
    heading: "How is airport vending secured and monitored?",
    paragraph:
      "Airport vending security is layered across physical, payment, operational, and personnel dimensions. Physical: machine chassis designed for high-traffic environments (reinforced glass, anti-pry construction, anti-tipping bolts on flooring), placement in monitored zones, integration with airport CCTV. Payment: PCI-DSS certified hardware, end-to-end encryption (P2PE preferred at major airports), tokenization, secure key management. Operational: tamper-evident packaging on stock, GPS-tracked service routes, two-person rule for cash collection at high-security sites. Personnel: airport-badged service crews (typically SIDA badge for post-security access), background checks, periodic re-vetting per TSA requirements. Monitoring: real-time telemetry with anomaly detection (failed-vend patterns, stock-out spikes, unexpected access events), CCTV at machine location, network monitoring of telemetry traffic. Airports increasingly require operators to maintain ISO 27001 or SOC 2 attestation. The combined security posture matters because airport vending sits within FAA Part 139 / TSA security perimeter; a single security incident can compromise the operator's badging access across the airport.",
    bullets: [
      { emphasis: "Security is layered, not single-point:", text: "Physical, payment, operational, personnel, and monitoring controls layered together. No single control is sufficient; the combination protects the operator's badging access and the airport's compliance posture." },
      { emphasis: "SIDA badging is the operational gatekeeper:", text: "Post-security service routes require SIDA-badged crews with background checks. Operator's airport badging access is the single most valuable thing they have at a major-airport contract; protect it." },
      { emphasis: "Real-time telemetry + anomaly detection:", text: "Modern airport operators run anomaly detection on telemetry — unusual failed-vend patterns, stock-out spikes, unexpected access events. Catches both fraud and operational failures before customer impact." },
    ],
  }),
  statStrip({
    heading: "Airport vending security benchmarks",
    stats: [
      { number: "SIDA badge", label: "post-security access", sub: "TSA-cleared service crews", accent: "blue" },
      { number: "PCI-DSS + P2PE", label: "payment baseline", sub: "major airports", accent: "blue" },
      { number: "Real-time", label: "telemetry standard", sub: "with anomaly detection", accent: "blue" },
      { number: "<0.05%", label: "expected theft rate", sub: "post-security airport vending", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Airport vending security layers compared",
    sub: "Five security dimensions with specific controls and operator obligations. All required for major-airport contracts.",
    headers: ["Layer", "Controls", "Operator obligation", "Failure consequence"],
    rows: [
      ["Physical", "Reinforced chassis, anti-pry, CCTV integration, monitored placement zones", "Equipment specification + placement coordination", "Vandalism, theft, machine damage"],
      ["Payment", "PCI-DSS, EMV, contactless, P2PE, tokenization", "Operator + processor compliance", "Card fraud, processor termination"],
      ["Operational", "Tamper-evident packaging, GPS routes, two-person cash rule", "Operator SOPs + verification", "Stock theft, internal fraud"],
      ["Personnel", "SIDA badge, background checks, periodic re-vetting", "Operator HR + TSA compliance", "Loss of airport badging access"],
      ["Monitoring", "Real-time telemetry, anomaly detection, CCTV, network monitoring", "Operator SOC + airport coordination", "Undetected incidents, slow response"],
    ],
  }),
  specList({
    heading: "Airport vending security specifications",
    items: [
      { label: "Machine chassis specification", value: "Reinforced glass (laminated or polycarbonate), anti-pry construction, anti-tipping bolts to flooring where placement permits, tamper-evident door seals. Designed for high-traffic environments; standard office machines fail security review at airports." },
      { label: "Payment security", value: "PCI-PTS 5.x certified readers. EMV chip + contactless. End-to-end encryption (P2PE preferred at federal/major airports). Tokenization. Annual SAQ/AOC. Quarterly ASV scans. Operator + processor must maintain attestation." },
      { label: "Operational security", value: "Tamper-evident packaging on all stock. GPS-tracked service routes (some airports require this). Two-person rule for cash collection at high-security sites; cash-handling SOPs. Inventory reconciliation per route." },
      { label: "Personnel security", value: "Post-security service crews must hold SIDA badge (TSA-cleared, background-checked). Pre-employment background checks per operator policy + airport requirements. Periodic re-vetting (typically annual). Operator-side HR controls protect badging access." },
      { label: "Telemetry & anomaly detection", value: "Real-time per-transaction telemetry. Anomaly detection rules: failed-vend pattern spikes (potential mechanical or fraud event), unusual stock depletion (theft signal), unexpected access events (door open without service ticket). Operator SOC investigates anomalies." },
      { label: "CCTV integration", value: "Vending machine locations covered by airport CCTV. Operator coordinates with airport ops on camera coverage and incident review process. Some airports require operator access to CCTV footage for incident investigation; others retain control through airport ops." },
      { label: "Network security for telemetry", value: "Telemetry traffic encrypted in transit (TLS 1.2+). Cellular preferred (independent of airport Wi-Fi). Network monitoring for anomalous traffic patterns. Some airports require operator to maintain ISO 27001 or SOC 2 Type II attestation." },
      { label: "Incident response & coordination", value: "Operator and airport ops have defined incident response coordination. Designated 24/7 operator contact for airport security. Incident reporting within 4-24 hours depending on severity. Post-incident review with airport stakeholders." },
      { label: "Compliance with FAA Part 139 + TSA requirements", value: "Operator awareness of airport AEP, TSA security perimeter, and incident reporting requirements. Compliance posture verified at contract signing and during periodic airport security audits." },
    ],
  }),
  tipCards({
    heading: "Five airport vending security mistakes",
    sub: "Each is documented in airport security post-incident reviews. All preventable with proper specification and operator selection.",
    items: [
      { title: "Standard office machines deployed at airport", body: "Office-grade chassis fail security review at airports — insufficient anti-pry construction, unreinforced glass, easy-tip footprint. Specify airport-grade equipment at contract; verify at install. Office machines at airport are non-compliant in most major-airport security frameworks." },
      { title: "Skipping the SIDA badge process", body: "Service crews without SIDA badge can't access post-security placements. Operators that try to use non-SIDA crews lose airport access and contract. SIDA process takes 30-90 days for new crews; plan ahead. Operator's HR process must keep badging current." },
      { title: "Cellular telemetry treated as optional", body: "Telemetry on airport Wi-Fi alone goes dark when Wi-Fi fails. Cellular telemetry independent of airport network is the security baseline. Operators using airport Wi-Fi exclusively miss anomalies and lose monitoring during outages." },
      { title: "No anomaly detection on telemetry", body: "Telemetry that just logs transactions without anomaly detection misses fraud signals (unusual depletion patterns) and operational failures (cluster of failed vends). Modern operators run SOC monitoring on telemetry; legacy operators don't." },
      { title: "Skipping incident response coordination at signature", body: "When an incident occurs, defined coordination (operator contact, response time, reporting workflow) prevents finger-pointing and slow response. Build into contract at signature; test annually with tabletop exercise." },
    ],
  }),
  inlineCta({
    text: "Want the airport vending security framework (physical, payment, personnel, telemetry, incident response)?",
    buttonLabel: "Get the airport security framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported airport vending operator selection and security spec design at major-airport contracts — including SIDA badge coordination, telemetry anomaly detection, and incident response coordination. The security layer benchmarks reflect operator-side data and airport security feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What badges do airport vending crews need?", answer: "SIDA (Security Identification Display Area) badge for post-security service routes — TSA-cleared with background check. Some airports also require AOA (Air Operations Area) badge for airside access. Pre-security service can be done with standard airport-issued non-SIDA badge. Badging process: 30-90 days typical.", audience: "Operators" },
      { question: "How is vending machine security different at airports?", answer: "Higher equipment specification (reinforced chassis, anti-pry, anti-tipping), badged service crews, real-time telemetry with anomaly detection, CCTV integration, and coordinated incident response with airport ops. Office-grade machines fail airport security review.", audience: "Airport Operations" },
      { question: "Is theft a problem at airport vending?", answer: "Less than commonly assumed. Post-security vending theft rate is typically under 0.05% — the airport security perimeter and CCTV deter most attempts. Pre-security and curbside placements see higher rates (still low, 0.1-0.3%). Equipment specification + monitoring keeps it low.", audience: "Airport Operations" },
      { question: "What payment security do we need?", answer: "PCI-DSS current with P2PE preferred at major airports. EMV chip + contactless + mobile wallets. Tokenization. Annual SAQ/AOC. Quarterly ASV scans. Operator and processor must maintain attestation. PCI is baseline, not ceiling — major airports may require additional cryptographic standards.", audience: "Procurement" },
      { question: "How does anomaly detection work?", answer: "Operator SOC runs rules on telemetry: failed-vend pattern spikes, unusual stock depletion, unexpected access events, transaction-volume anomalies. Alerts route to operator security team for investigation. Catches both fraud and operational failures before customer impact.", audience: "Operators" },
      { question: "What about CCTV?", answer: "Vending machine locations covered by airport CCTV. Operator coordinates with airport ops on camera coverage and incident review process. Some airports give operator access to footage for incident investigation; others retain control. Build coordination into the contract.", audience: "Airport Security" },
      { question: "What if a security incident happens?", answer: "Operator has 24/7 contact for airport security. Incident reporting within 4-24 hours (severity-dependent). Post-incident review with airport stakeholders, telemetry evidence, CCTV review. Build incident response coordination into contract; test annually with tabletop exercise.", audience: "Airport Security" },
      { question: "Do airport vending operators need ISO 27001 or SOC 2?", answer: "Increasingly required at major airports. Demonstrates the operator has formal information security program. Annual recertification standard. Smaller operators sometimes can't meet these; large operators have them in place. Verify at contract signing.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "TSA — Transportation Security Administration", url: "https://www.tsa.gov/", note: "Federal security framework governing airport badging and security perimeter" },
      { label: "FAA Part 139 — Certification of Airports", url: "https://www.faa.gov/airports/airport_safety/part139_cert/", note: "Federal certification standard underlying airport security program" },
      { label: "PCI Security Standards Council — PCI-DSS, P2PE, PTS", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards governing all card-accepting vending" },
      { label: "ACI-NA — airport security operations standards", url: "https://airportscouncil.org/", note: "Industry trade association covering airport security and operator badging" },
      { label: "ISO 27001 / SOC 2 — information security frameworks", url: "https://www.iso.org/isoiec-27001-information-security.html", note: "Information security management frameworks increasingly required at major airports" },
    ],
  }),
  relatedGuides({
    heading: "Related airport vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Managing airport vending logistics", description: "Restocking, route timing, badge access, and security workflows at airport vending placements.", href: "/vending-for-airports/managing-airport-vending-logistics" },
      { eyebrow: "Operations", title: "Airport vending design evolution", description: "Equipment evolution, telemetry capability, emergency programming, and modern security stack.", href: "/vending-for-airports/airport-vending-design-evolution" },
      { eyebrow: "Hub", title: "All airport vending guides", description: "Placement, payment, equipment, and operations guidance across concourses, lounges, and landside areas.", href: "/vending-for-airports" },
    ],
  }),
]);
process.exit(0);
