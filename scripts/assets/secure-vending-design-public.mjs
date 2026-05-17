import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "secure-vending-design-public",
  assetType: "rfp template",
  title: "Public-Building Vending Security RFP Template",
  subtitle: "Layer-by-layer security specification, operator credentialing checklist, and incident-response SLA",
  intro:
    "Use this RFP template to solicit vending bids for public buildings (federal, state, municipal, courthouse, transit, GSA facilities) where security posture is part of the procurement criteria. The template specifies layered physical + cyber + personnel security, operator credentialing, and the incident-response SLA appropriate to facilities subject to FPS, GSA, or local AHJ oversight.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Facility type", value: "(federal building / courthouse / state office / municipal / transit station / GSA facility — specify FPS Facility Security Level (FSL) I-V or local equivalent)" },
        { label: "Placements in scope", value: "Specify zones: public-access lobby, secured staff areas, secured-perimeter exterior, food court. Different zones often have different security postures. Capability framing — describe environment, not anchor facility names." },
        { label: "Contract term", value: "3-5 year initial with annual security review." },
        { label: "Oversight authority", value: "(specify — e.g., Federal Protective Service, GSA Public Buildings Service, local police, transit authority police)" },
      ],
    },
    {
      heading: "2. Layered physical security",
      paragraph:
        "Reference: ISC ‘Risk Management Process for Federal Facilities’ Standard, NIST SP 800-53 PE controls, and ANSI/UL 752 (ballistic) where applicable.",
      items: [
        { number: 1, title: "Cabinet construction", description: "16-gauge steel minimum; reinforced lock points; tamper-evident hinge pins; UL 437 (high-security cylinder) keyway. Where FSL III+ specifies, anchor cabinet to floor with concrete-anchor lag bolts per facility engineer." },
        { number: 2, title: "Glass / impact resistance", description: "UL 972 (burglary-resistant glazing) or laminated polycarbonate front; impact-rated for the threat assessment. Where ballistic threat assessment warrants, UL 752 Level 1+ glazing." },
        { number: 3, title: "Lock + key control", description: "Restricted keyway (Medeco / Mul-T-Lock / ASSA Abloy or equivalent UL 437 listed); key control register; operator returns keys at contract end; key duplication audited." },
        { number: 4, title: "Alarms + monitoring", description: "Door / cash-box / motion alarms wired to operator's monitoring center (UL Certificated Central Station per UL 827); 24/7 monitoring; signal to facility security on tamper." },
        { number: 5, title: "Camera field of view", description: "Each machine within field of view of facility CCTV; operator confirms placement with facility security. No operator-installed camera in secured areas without facility approval." },
        { number: 6, title: "Lighting", description: "Minimum 5 foot-candles (54 lux) at machine face per IES RP-33-14 for parking + IES recommended levels for interior egress." },
      ],
    },
    {
      heading: "3. Cyber security (payment + telemetry)",
      items: [
        { check: "PCI DSS Level 1 compliance for all card-present + tokenized transactions; attestation of compliance (AoC) on file with venue." },
        { check: "Telemetry data path uses TLS 1.2+ with operator-issued certificates; no plaintext data in transit." },
        { check: "Operator complies with applicable cyber framework — NIST SP 800-53 (federal), CIS Controls v8 (state/local), or facility-specific equivalent." },
        { check: "Vulnerability scanning + patching cadence documented; critical CVE patched within 14 days, high within 30 days." },
        { check: "Operator provides Software Bill of Materials (SBOM) per NTIA + Executive Order 14028 where federal facility." },
        { check: "Incident reporting to facility security within 1 hour of operator detection of cyber incident." },
      ],
    },
    {
      heading: "4. Operator credentialing checklist",
      items: [
        { check: "All on-site staff complete facility-specific background check + clearance per FSL (e.g., HSPD-12 PIV credentialing for FSL III+ federal facilities)." },
        { check: "Annual security awareness training documented." },
        { check: "Operator maintains personnel access log (badge in / badge out) per facility security policy." },
        { check: "No-photo / no-recording policy in secured areas; operator staff confirm in writing." },
        { check: "Operator staff escorted in secured areas above FSL II per facility policy." },
        { check: "Operator's subcontractors (vinyl installers, repair technicians) flow down same credentialing requirements." },
        { check: "Operator provides 30-day notice of staff change for credentialed personnel." },
      ],
    },
    {
      heading: "5. Incident-response SLA",
      headers: ["Incident type", "Acknowledgement", "On-site response", "Resolution"],
      rows: [
        ["Tamper / physical breach", "15 minutes from alarm", "2 hours from alarm", "Cabinet secured + repaired within 24 hours"],
        ["Cyber / payment compromise", "1 hour from detection", "Phone bridge with facility security within 2 hours", "Containment within 24 hours; full remediation per investigation"],
        ["Cash / inventory theft", "1 hour from detection", "Operator + facility security joint review within 24 hours", "Police report + insurance claim within 5 business days"],
        ["Vandalism / graffiti", "4 hours", "On-site within 24 hours", "Cabinet restored within 7 business days"],
        ["Suspicious package / facility-wide event", "Immediate (machine locked remotely)", "Per facility security command", "Machine inspected before re-opening per facility security clearance"],
      ],
    },
    {
      heading: "6. Operator capability matrix",
      headers: ["Criterion", "Weight"],
      rows: [
        ["Layered physical security (Section 2)", "20%"],
        ["Cyber security posture (Section 3)", "15%"],
        ["Credentialing + clearance track record (Section 4)", "15%"],
        ["Incident response SLA + 24/7 monitoring (Section 5)", "15%"],
        ["Insurance posture ($5M GL + $2M cyber + $500K crime bond minimum)", "10%"],
        ["Public-building experience (capability framing acceptable)", "10%"],
        ["Pricing transparency", "10%"],
        ["ADA + accessibility", "5%"],
      ],
    },
    {
      heading: "7. Required attachments",
      items: [
        { check: "Cabinet + glazing spec sheets (UL 752 / UL 972 / UL 437 documentation)." },
        { check: "PCI AoC; NIST SP 800-53 or CIS Controls v8 attestation; SBOM where federal." },
        { check: "Credentialing + background-check program documentation." },
        { check: "Sample incident-response runbook." },
        { check: "Insurance certificates per Section 6." },
        { check: "References: 3 public-building procurement or security contacts (last 24 months) — capability framing." },
        { check: "ADA + accessibility attestation (Section 308 / 305 / 309.4)." },
      ],
    },
    {
      heading: "8. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via secure procurement portal (FedConnect, SAM.gov, state portal, or facility-specific)." },
        { label: "Due date", value: "(specify — typically 30-45 days for public-building complexity)" },
        { label: "Mandatory site walk", value: "Cleared site walk; operator must hold or obtain clearances prior to walk." },
        { label: "Award", value: "(specify — typically 60-90 days for public-building procurement timelines)" },
      ],
    },
  ],
  footer:
    "Informational template — engage facility security, procurement, and counsel before issue. FSL determination and facility-specific overlays govern; this template provides the security floor.",
});

console.log("wrote "+"secure-vending-design-public");
