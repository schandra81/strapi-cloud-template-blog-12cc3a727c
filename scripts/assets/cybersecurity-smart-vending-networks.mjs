import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cybersecurity-smart-vending-networks",
  assetType: "pack",
  title: "Smart Vending Cybersecurity RFP Scorecard",
  subtitle: "Compliance attestations, MFA, breach SLA, audit log, pentest, and disclosure program",
  intro:
    "Smart vending equipment is a connected IoT endpoint inside the host's facility. Treat it like any other IoT endpoint. This pack codifies the cybersecurity attestations, controls, and disclosures the host should require from any operator running cellular-connected or campus-connected vending equipment. It maps to PCI DSS v4.0, NIST SP 800-53 / 800-171 control families, ISO/IEC 27001, NIST IR 8259 (IoT baseline), and the FTC Safeguards Rule where personal data is in scope.",
  sections: [
    {
      heading: "1. Compliance attestations the operator must produce",
      items: [
        { label: "PCI DSS v4.0 AOC", value: "Current Attestation of Compliance dated within the last 12 months. SAQ type appropriate to architecture (commonly SAQ-B-IP or SAQ-P2PE)." },
        { label: "SOC 2 Type II", value: "From operator's cloud / settlement environment, scope including Security + Availability + Confidentiality. Report dated within last 12 months." },
        { label: "ISO/IEC 27001 (where applicable)", value: "For operators serving regulated industries (healthcare, finance, government), current ISO/IEC 27001 certification preferred." },
        { label: "NIST SP 800-171 (federal placements)", value: "For DoD / federal placements, CMMC Level 2 or equivalent NIST 800-171 self-assessment." },
        { label: "FTC Safeguards Rule (16 CFR 314)", value: "Where operator collects + stores non-public personal information (NPI), documented information security program with designated qualified individual." },
      ],
    },
    {
      heading: "2. Identity, access, and MFA",
      paragraph:
        "Account compromise on the operator's back-office is the most common path to fleet-wide tampering. MFA + least-privilege are the controls that block it.",
      items: [
        { check: "All operator administrative access to the back-office (planogram, pricing, telemetry) requires phishing-resistant MFA (FIDO2 / WebAuthn preferred; TOTP minimum). SMS OTP alone is insufficient." },
        { check: "Role-based access control with documented role catalog. Least-privilege enforced; route drivers cannot reach pricing or telemetry config." },
        { check: "Joiner/mover/leaver process — terminated personnel access revoked within 24 hours." },
        { check: "Service-account credentials rotated annually or on personnel change; no shared accounts." },
        { check: "Privileged-access management (PAM) for production access; session recording on admin actions." },
      ],
    },
    {
      heading: "3. Device + network controls (IoT baseline per NIST IR 8259)",
      items: [
        { check: "Each machine has a unique device identity (no shared default credentials). Default credentials changed at provisioning." },
        { check: "Mutual TLS or device-certificate authentication between machine and back-office. Plaintext HTTP prohibited." },
        { check: "Cellular-modem firmware tracked; security updates applied within 30 days of vendor release for high-severity advisories." },
        { check: "Tamper detection — door-open events and physical-tamper alerts forwarded to operator SOC and host on request." },
        { check: "Network segmentation — campus-WiFi-connected machines on a dedicated VLAN with east-west restriction to back-office endpoints only." },
        { check: "No inbound public internet exposure on the machine; all traffic egress-initiated to operator back-office over TLS." },
      ],
    },
    {
      heading: "4. Payment-data architecture (PCI DSS v4.0)",
      items: [
        { label: "P2PE or PCI-listed payment terminal", value: "Card-present data encrypted at the reader; operator infrastructure outside the cardholder data environment (CDE) where feasible. Solution listed on PCI SSC website." },
        { label: "No card-data persistence", value: "PAN, CVV, full magnetic stripe data, and PIN block must not persist on operator infrastructure. Tokenization for any rebill / loyalty linkage." },
        { label: "Network segmentation of CDE", value: "If CDE present, segmented + scoped per PCI DSS requirement 1.x; segmentation testing annual." },
        { label: "Annual penetration test", value: "External + internal pentest annual and after material change. Findings tracked to remediation." },
      ],
    },
    {
      heading: "5. Breach + incident response SLA",
      headers: ["Severity", "Definition", "Notify host within", "Containment SLA"],
      rows: [
        ["Sev-1", "Confirmed compromise touching host data, payment data, or host network", "4 hours of confirmation", "24 hours"],
        ["Sev-2", "Suspected compromise under investigation; potential host impact", "24 hours", "5 days"],
        ["Sev-3", "Compromise on operator infrastructure with no host data impact", "Quarterly summary", "Per operator IR plan"],
      ],
    },
    {
      heading: "6. Logging, monitoring, and audit-log access",
      items: [
        { check: "Authentication, authorization, and administrative-action logs retained ≥ 12 months. Payment-system logs per PCI DSS 10.x (≥ 1 year, ≥ 90 days online)." },
        { check: "Security event monitoring 24/7 — operator SOC or contracted MSSP. SIEM coverage on back-office + payment environment." },
        { check: "Host has right to request audit-log extracts for any machine within 5 business days, subject to PII/PCI redaction." },
        { check: "Annual third-party audit (SOC 2 Type II) findings shared with host on request under NDA." },
      ],
    },
    {
      heading: "7. Coordinated vulnerability disclosure program",
      items: [
        { label: "Public disclosure channel", value: "Operator publishes a security.txt / responsible-disclosure page with contact email, PGP key, and safe-harbor scope." },
        { label: "Triage SLA", value: "Acknowledge within 5 business days; severity assignment within 10. CVSS v3.1 scoring stated." },
        { label: "Remediation SLA", value: "Critical: ≤ 30 days. High: ≤ 60 days. Medium: ≤ 90 days." },
        { label: "Bounty / safe harbor", value: "Documented safe-harbor language for good-faith researchers; bounty program optional but preferred." },
      ],
    },
    {
      heading: "8. Data-protection + privacy alignment",
      items: [
        { check: "Data Processing Agreement (DPA) signed; sub-processor list disclosed and update notice required." },
        { check: "Data residency stated (typically US-based for US placements); international transfer mechanism documented if applicable." },
        { check: "Member-data minimization — operator stores employee ID + balance only on closed-loop; no SSN, no government ID, no compensation." },
        { check: "FTC Safeguards Rule alignment where NPI is in scope; qualified individual designated; risk assessment performed." },
        { check: "Right to audit — host (or representative) may audit operator security program annually with reasonable notice; on incident, immediately." },
      ],
    },
    {
      heading: "9. RFP scoring rubric (100 points)",
      headers: ["Section", "Points", "Pass threshold"],
      rows: [
        ["Compliance attestations (PCI, SOC 2, ISO)", "20", "PCI AOC + SOC 2 Type II required"],
        ["Identity + MFA + PAM", "15", "Phishing-resistant MFA on admin"],
        ["Device + network controls (NIST IR 8259)", "15", "Per-device identity + mTLS"],
        ["Payment-data architecture", "15", "P2PE or PCI-listed; no PAN persistence"],
        ["Breach + IR SLA", "10", "Sev-1 4-hour notify"],
        ["Logging + audit-log access", "10", "12-month retention; host audit right"],
        ["Disclosure program", "5", "security.txt + triage SLA"],
        ["DPA + data-protection terms", "10", "Sub-processor disclosure + audit right"],
      ],
    },
    {
      heading: "10. Pre-signing red flags",
      items: [
        { check: "Operator cannot produce a current PCI AOC or SOC 2 Type II report." },
        { check: "Operator admins log in with SMS-only MFA or password-only." },
        { check: "Telemetry traffic uses HTTP or shared default credentials." },
        { check: "Operator refuses incident-notification SLA in writing." },
        { check: "No documented coordinated vulnerability disclosure program." },
        { check: "DPA does not include sub-processor disclosure or audit right." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal, security, or compliance advice. Cybersecurity scoping for connected vending should be reviewed by your CISO / security team and, where required, by a QSA or external auditor.",
});

console.log("wrote "+"cybersecurity-smart-vending-networks");
