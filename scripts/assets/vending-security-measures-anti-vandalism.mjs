import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-security-measures-anti-vandalism",
  assetType: "playbook",
  title: "Entertainment Venue Vending Security Playbook",
  subtitle: "Chassis hardening, payment, telemetry, CCTV, personnel, and incident response",
  intro:
    "Entertainment venues see incidents at 5-10× the rate of office or campus placements: vandalism, payment fraud, theft, and tampering. The security plan is a stack of physical, payment, telemetry, surveillance, personnel, and procedural controls. This playbook codifies each layer, the audit cadence, and the incident-response runbook that contains an event before it impacts revenue or fan experience.",
  sections: [
    {
      heading: "1. Chassis hardening",
      paragraph:
        "Physical-security baseline is set by ANSI/UL 1283 burglary-resistance standards and supplemented by venue-specific risk assessment. Outdoor and high-traffic placements step up to NEMA 4X and full reinforced cabinet construction.",
      items: [
        { label: "Cabinet construction", value: "Welded 14-gauge steel cabinet, anti-pry hood on top and sides, reinforced internal flanges, anti-tip bolted-floor anchoring on outdoor and exposed placements. NEMA 4 / IP55 rated for outdoor and event-plaza placements." },
        { label: "Front glass", value: "Laminated polycarbonate ≥ 3/8 inch (blade-resistant) on high-vandalism placements; tempered glass on indoor concourse. Anti-graffiti coating for outdoor placements." },
        { label: "Locks", value: "Medeco high-security lock or comparable with dual-key control. Vault lock physically separate from product compartment, with combination or biometric override for the operator's cash crew." },
        { label: "Anti-pry and anti-fishing", value: "Anti-pry hood on coin return and bill validator; anti-fishing flap on bill validator (Crane Currenza c2 or MEI VN2500 anti-fishing standard). Dispense flap with hood and anti-grab gates." },
        { label: "Floor anchoring", value: "Outdoor and concourse machines bolted to floor through anchor plate (Hilti HSL-3 or comparable; minimum 4 anchors at 5/8 inch). Concourse machines on movable base only when explicitly approved by venue security." },
      ],
    },
    {
      heading: "2. Payment security",
      paragraph:
        "Payment systems are the most-targeted attack surface. PCI DSS 4.0 compliance is mandatory; venue-specific contracts often add additional controls.",
      items: [
        { label: "PCI DSS 4.0 compliance", value: "Payment processor and operator both maintain PCI DSS 4.0 attestation. Annual ROC (Report on Compliance) or SAQ available to venue on request." },
        { label: "EMV contactless required", value: "All payment terminals support EMV contactless (chip-and-PIN where applicable). Magstripe-only is below PCI DSS 4.0 floor and not deployable in venue environments after the 2025 EMV mandate cycle." },
        { label: "P2PE point-to-point encryption", value: "Payment terminals tokenize at swipe / tap; no clear PAN inside the machine or operator telemetry. Approved P2PE solution from PCI SSC validated solutions list." },
        { label: "Anti-skimming", value: "Tamper-evident card reader seals (visible from machine face). Operator visual-inspection during each route visit; quarterly third-party audit. PCI PTS 6.x card-reader devices only." },
        { label: "Cellular network isolation", value: "Payment telemetry on cellular carrier-grade network, not venue Wi-Fi. Eliminates entire venue-network compromise as a payment-attack vector." },
      ],
    },
    {
      heading: "3. Telemetry and tamper detection",
      items: [
        { number: 1, title: "Door-open sensor", description: "Cellular alert when cabinet door opens outside authorized restock window. Operator route schedule synced to telemetry; unscheduled open triggers immediate alert to venue security and operator on-call." },
        { number: 2, title: "Tilt and movement sensor", description: "Three-axis accelerometer detects machine tilting > 15 degrees or sustained vibration consistent with attack. Cellular alert routed to venue security and operator on-call." },
        { number: 3, title: "Internal temperature anomaly", description: "Temperature outside FDA Food Code 3-501.16 envelope for > 30 minutes triggers alert. Sustained anomaly may indicate power tamper or compressor sabotage." },
        { number: 4, title: "Payment-failure-rate anomaly", description: "Spike in payment failures or unusual transaction pattern (rapid retries, multiple cards on one transaction window) triggers fraud-investigation alert to payment processor and venue concessions." },
        { number: 5, title: "Cash-out velocity anomaly", description: "Unusual cash-out velocity (high bill-validator throughput with low product dispense) triggers anti-fraud alert; may indicate bill-validator fishing or vault manipulation." },
      ],
    },
    {
      heading: "4. CCTV coverage and surveillance",
      paragraph:
        "Each placement must be within view of a venue security camera with sufficient resolution to document an incident. Operator has documented right to request footage within 48 hours.",
      items: [
        { check: "Camera covering machine face at ≥ 1080p resolution, with sufficient framing to capture face/identification of users." },
        { check: "Recording retained per venue policy and applicable state law; typical 30-90 day retention." },
        { check: "Operator footage-request right within 48 hours documented in placement agreement." },
        { check: "Joint walkthrough with venue security at install confirms each placement is within camera coverage." },
        { check: "Annual review of camera positioning vs. machine placement; relocation if coverage degrades." },
        { check: "Compliance with applicable state biometric / surveillance laws (Illinois BIPA, Texas CUBI, Washington HIPAA-adjacent, California CCPA)." },
      ],
    },
    {
      heading: "5. Personnel and access control",
      headers: ["Role", "Access level", "Vetting", "Audit"],
      rows: [
        ["Route driver", "Cabinet access (product compartment)", "Background check + drug screen + DOT-equivalent driving record", "Monthly route audit"],
        ["Vault crew", "Cash vault access", "Enhanced background check + bond per state requirement (typically $10K-$25K)", "Weekly cash-reconciliation audit"],
        ["Technician", "Full equipment access including payment terminal", "Background check + PCI security awareness training annual", "Quarterly technician audit"],
        ["Operator manager", "Telemetry dashboard + payment processor portal", "Background check + PCI training", "Quarterly access-review audit"],
        ["Venue concessions liaison", "Read-only telemetry dashboard", "Venue HR vetting", "Annual"],
      ],
    },
    {
      heading: "6. Incident-response runbook",
      items: [
        { number: 1, title: "Vandalism (cabinet damage, graffiti, glass damage)", description: "Operator on-site < 8 hours, machine secured or removed < 24 hours, repair or replacement < 72 hours. Police report filed if damage > $500 or willful destruction. Insurance claim filed per operator E&O policy." },
        { number: 2, title: "Payment fraud or skimming", description: "Machine taken offline immediately upon detection. Payment processor and PCI forensic investigator notified within 24 hours. Affected card-holders notified via processor within applicable state breach-notification window (typically 30-90 days). Venue concessions, security, and legal notified." },
        { number: 3, title: "Cash theft", description: "Operator + venue security review CCTV footage. Police report filed. Vault re-keyed within 24 hours. Operator's bond covers loss per state requirement." },
        { number: 4, title: "Product tampering", description: "Machine taken offline immediately. Affected product disposed per FDA Food Code; product lot logged. Local public-health authority notified if tampering suspected to affect public safety. Investigation by venue security + operator quality lead." },
        { number: 5, title: "Severe weather or facility emergency", description: "Refrigerated equipment temperature monitored; product disposal triggered if > 4 hours above 41°F per FDA Food Code 3-501.16. Equipment relocated if facility damage threatens operation. Insurance claim filed for product loss and equipment damage." },
      ],
    },
    {
      heading: "7. Audit cadence and reporting",
      headers: ["Cadence", "Audit scope", "Owner", "Report"],
      rows: [
        ["Weekly", "Cash reconciliation, refund log, route incident log", "Operator", "Internal"],
        ["Monthly", "PCI DSS controls check, payment-failure rate, fraud alerts", "Operator + payment processor", "Internal + shared with venue on request"],
        ["Quarterly", "Camera-coverage walkthrough, anti-skimming inspection, personnel access review", "Operator + venue security", "Shared with venue concessions director"],
        ["Annually", "Full PCI DSS attestation, SOC 2 Type II, insurance certificate, bond renewal", "Operator", "Provided to venue legal and concessions"],
      ],
    },
  ],
  footer:
    "This playbook is a working security reference. Calibrate physical hardening, personnel vetting, and incident response to your venue's risk assessment, applicable state regulations, and concession-agreement security requirements.",
});

console.log("wrote "+"vending-security-measures-anti-vandalism");
