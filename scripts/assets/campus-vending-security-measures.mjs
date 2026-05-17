import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "campus-vending-security-measures",
  assetType: "pack",
  title: "Campus Vending Security Pack",
  subtitle: "Physical + AI cooler + cyber framework, operator + campus police MoU template, cybersecurity baseline checklist, student communications kit",
  intro:
    "Campus vending security spans three layers: physical (theft, vandalism, tampering), AI cooler operational (vision-system integrity, payment fraud), and cyber (PCI scope, FERPA exposure, network segmentation). This pack bundles the four working documents an auxiliary services + campus IT team needs to evaluate and govern a campus vending program.",
  sections: [
    {
      heading: "1. Physical security framework",
      paragraph:
        "Physical security applies to traditional vending and AI coolers. Most loss is opportunistic; the controls below are inexpensive and high-leverage.",
      items: [
        { check: "Bolt-to-floor or wall anchoring per OEM spec for any unit > 400 lbs gross weight; tamper-evident hardware." },
        { check: "Camera coverage: ≥ 1 PTZ or fixed camera with 1080p+, 24/7 recording, 30+ days retention, FOV covers the cooler face + clear floor space." },
        { check: "After-hours lighting: ≥ 10 fc at cooler face during all open hours; minimum 5 fc when building access-controlled." },
        { check: "Access-control logging: card-swipe or fob log at the building/zone level; data retained ≥ 90 days for incident reconstruction." },
        { check: "Cash management: cashless-preferred mode; if cash-accepting, max bill capacity $200, daily armored-car-or-operator pickup, GPS bag tracking." },
        { check: "Tamper sensors: door-open sensor, tilt sensor, internal cooling fault sensor; alerts sent to operator NOC within 60 seconds." },
        { check: "Glass + cabinet rating: tempered low-iron glass; cabinet steel gauge ≥ 18 ga; lock cylinder UL 437 or higher." },
      ],
    },
    {
      heading: "2. AI cooler operational security",
      items: [
        { label: "Vision-system integrity", value: "Operator should attest to per-SKU recognition accuracy ≥ 99%, with weekly model-drift report and quarterly recalibration. Mis-charge dispute window 24-48 hr." },
        { label: "Identity + authentication", value: "Apple Pay/Google Pay tokenized, EMV contactless, optional campus-card SDK. No PAN at cooler. Failed-auth lockout after 3 attempts in 60 seconds." },
        { label: "Loss detection", value: "Shrink alert if a tray loses > $X per session without a transaction; reconciliation between vision events + payment events at session close." },
        { label: "Anti-tailgate", value: "Door closes within 4 seconds of last entry; cooler will not begin new session for 2 seconds after close to prevent piggyback theft." },
        { label: "Refund integrity", value: "Refund requires student attestation + operator review; refund-rate threshold > 2% triggers automatic operator escalation + planogram audit." },
        { label: "Vision-data retention", value: "Operator should attest to ≤ 30-day retention of un-anonymized clip data, with hash-only retention thereafter for shrink models." },
      ],
    },
    {
      heading: "3. Cybersecurity baseline checklist",
      paragraph:
        "Map operator controls to NIST CSF 2.0 and PCI-DSS 4.0. Campus IT should require attestation and evidence on contract execution and annually.",
      items: [
        { check: "PCI-DSS 4.0 AOC and SAQ on file (typically SAQ-B-IP for tokenized cashless). PAN never traverses campus network." },
        { check: "Network segmentation: cooler on isolated VLAN with no lateral path to campus admin networks; egress whitelist to operator API + payment processor." },
        { check: "Cooler firmware: signed firmware updates, vendor SBOM available, CVE-tracking process with operator commitment to ≤ 30-day patch window for High/Critical." },
        { check: "Operator workforce: SOC 2 Type II or ISO 27001 in good standing; annual pen test report shareable under NDA." },
        { check: "MFA on all operator portal accounts that touch campus telemetry or payment data; SCIM or SAML SSO to campus IdP preferred." },
        { check: "Data classification: cooler emits transaction events only (timestamp, SKU, price, anonymized session ID); no student-ID or name fields traverse operator systems unless covered by signed DPA." },
        { check: "FERPA exposure assessment: where campus-card SDK integrates student ID, processed by FERPA-attesting operator with signed DPA; no profile re-identification." },
        { check: "Incident-response plan: operator notifies campus IT + auxiliary services within 24 hr of any security event affecting cooler data or PII." },
      ],
    },
    {
      heading: "4. Operator + campus police MoU — template clauses",
      paragraph:
        "MoU sets the protocols for incident response, evidence-handling, and recurring coordination. Campus police should sign before placement go-live.",
      items: [
        { label: "Incident notification", value: "Operator notifies campus police dispatch within 15 minutes of any tilt, forced-open, or vandalism alert. Police notifies operator dispatch within 15 minutes of any incident report involving cooler." },
        { label: "Evidence preservation", value: "Operator preserves cooler-side video + transaction log ≥ 90 days for incidents under investigation; chain-of-custody form attached." },
        { label: "Camera access", value: "Campus police can request relevant clips via written request to operator; turnaround ≤ 24 hr for active investigations." },
        { label: "Routine coordination", value: "Quarterly meeting between operator account manager + campus police community liaison; review incidents, near-misses, recommended controls." },
        { label: "Restock + cash transport", value: "Operator route schedules shared with campus police on a rolling 30-day basis; route changes notified ≥ 24 hr in advance." },
        { label: "Emergency lockout", value: "Campus police can request remote-lock of a cooler during active incident; operator response time ≤ 15 min, 24/7." },
      ],
    },
    {
      heading: "5. Student communications kit",
      items: [
        { label: "Cooler-face signage", value: "11x17 inside-glass panel: 'How it works,' allergen note, refund QR, 24/7 support number, campus-police non-emergency line." },
        { label: "Refund flow card", value: "4x6 lobby card at every cooler with QR to refund portal + SMS short-code." },
        { label: "Newsletter / orientation copy", value: "150-word piece for residence-life newsletter explaining payment, refunds, allergen info, and what students should do if a cooler malfunctions." },
        { label: "Incident reporting card", value: "Step-by-step: photo of cooler + slot, text to operator + non-emergency campus police if vandalism or unsafe condition." },
        { label: "Accessibility note", value: "Students with mobility, visual, or hearing accommodations contact accessibility-services number printed on cooler face; alternative-format refund flow available." },
        { label: "Privacy note", value: "Plain-language 200-word note explaining what data the cooler collects, retention, and the campus DPA terms; published on auxiliary-services site + QR-linked from cooler." },
      ],
    },
    {
      heading: "6. Quarterly security review checklist",
      items: [
        { check: "Physical incident log (theft, vandalism, tampering) — count + dollar exposure + resolution" },
        { check: "Cyber incident log (operator-side or cooler-side) — count + remediation" },
        { check: "Refund rate by cooler; flags for > 2% threshold" },
        { check: "Vision-system accuracy report + recalibration log" },
        { check: "Firmware patch level + CVE coverage report" },
        { check: "Camera + lighting + signage audit photos per placement" },
        { check: "MoU action items + open items from campus-police meeting" },
      ],
    },
    {
      heading: "7. Procurement attestation summary",
      items: [
        { check: "Operator-signed PCI-DSS 4.0 AOC + SAQ" },
        { check: "Operator-signed FERPA DPA + GLBA acknowledgment (financial-aid placements)" },
        { check: "Operator SOC 2 Type II report under NDA" },
        { check: "ADA Section 308 attestation per cooler" },
        { check: "Insurance certificate: $2M GL, $1M umbrella, cyber-liability $5M, additional-insured to campus + auxiliary-services LLC" },
        { check: "MoU executed by operator + campus police chief or designee" },
        { check: "Quarterly review calendar booked for the contract term" },
      ],
    },
  ],
  footer:
    "This pack is informational. Campus IT, campus police, auxiliary services, and the institutional privacy office should jointly review operator attestations before contract execution. Operator capability claims should be verified through reference calls and through SOC 2/PCI evidence on file.",
});

console.log("wrote " + "campus-vending-security-measures");
