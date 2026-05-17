import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gym-vending-security",
  assetType: "matrix",
  title: "Gym Vending Security Framework",
  subtitle: "Facility-type capability matrix, member-access integration checklist, and environmental positioning guide",
  intro:
    "Gyms run vending in environments most operators are not equipped for — high humidity (sometimes 70%+ RH at peak class hours), 24/7 staffed and unstaffed access models, salt-corrosion from athletic-tape and chalk dust, and member-only access via keycard, fob, mobile credential, or biometric. This framework provides the capability matrix by facility type, the member-access integration checklist, and the environmental positioning guide capable operators reference for IHRSA-compliant placements. Capability framing only.",
  sections: [
    {
      heading: "1. Facility-type capability matrix",
      paragraph:
        "Different gym formats require different security postures. A 24/7 staffless box-gym depends on member-access integration and camera coverage; a Class-A health club depends on attended-floor protocols and premium SKU theft prevention; a hospital-system wellness facility requires HIPAA-aware payment integration with the host wellness platform. Match the operator capability to the facility format.",
      headers: [
        "Facility type",
        "Access model",
        "Required security features",
        "Anti-theft cabinet build",
        "Member-credential integration",
      ],
      rows: [
        [
          "Class-A health club (Equinox / Life Time / Lifestyle)",
          "Staffed 5am-11pm, fob / biometric",
          "Tempered laminated glass front, sensor-based theft alert, on-camera placement",
          "Heavy steel chassis, T-handle lock, motion-alert telemetry",
          "Optional — member account / app charge to membership",
        ],
        [
          "Big-box mid-tier (LA Fitness / 24 Hour / Crunch)",
          "Staffed limited hours, fob 24/7",
          "Polycarbonate front, position in camera arc, after-hours payment-only",
          "Standard steel chassis, dual lock, telemetry alert",
          "Optional — cashless preferred (95%+ of transactions)",
        ],
        [
          "24/7 staffless box (Anytime Fitness / Snap / Planet)",
          "Fob / mobile credential 24/7, no staff overnight",
          "Hardened cabinet, dual-lock, motion + tilt sensor, lobby camera",
          "Reinforced chassis, anti-pry door, GPS tag",
          "Required — fob/credential integration recommended",
        ],
        [
          "Boutique (CrossFit / F45 / Orangetheory)",
          "Class-only, coach-attended",
          "Standard cabinet, behind-counter optional",
          "Standard chassis",
          "Optional — app / studio-system charge",
        ],
        [
          "Corporate / on-site wellness",
          "Badge-only, attended limited",
          "Standard cabinet, host-controlled access zone",
          "Standard chassis",
          "Required — payroll-deduct or wellness-platform charge",
        ],
        [
          "Hospital-system wellness",
          "Badge / patient-credential, attended",
          "Standard cabinet, ADA-priority positioning",
          "Standard chassis",
          "Required — HIPAA-aware payment, no PHI capture",
        ],
        [
          "University / collegiate rec",
          "Student-ID, attended desk",
          "Standard cabinet, high-velocity, anti-vandal",
          "Reinforced chassis, anti-tamper",
          "Required — campus card / one-card integration",
        ],
      ],
    },
    {
      heading: "2. Member-access + payment integration checklist",
      paragraph:
        "Member-access integration is where most operators fall short. Capable operators integrate with the gym's membership management system (MMS) so members can charge to their account, redeem credits, or get amenity-tier pricing. Score each candidate operator against the checklist below.",
      items: [
        { check: "Operator supports cashless payment baseline: Apple Pay, Google Pay, contactless EMV, mag-stripe fallback. PCI-DSS 4.0 attestation (AOC + SAQ-B-IP on file)." },
        { check: "Operator integrates with at least one major MMS — ABC Fitness Solutions, Mariana Tek, MINDBODY, Glofox, Club Automation, Daxko, or Motionsoft." },
        { check: "Operator supports fob / RFID / credential authentication at the cabinet (HID iCLASS, MIFARE DESFire, BLE, NFC) with attestation of credential read-only access (no credential cloning or write-back)." },
        { check: "Operator supports app-based amenity charge with token / OAuth handshake to the MMS, not credential storage." },
        { check: "Operator supports payroll-deduct or wellness-platform charge for corporate / hospital placements (e.g., Virgin Pulse, WellSteps, host benefits platform)." },
        { check: "Operator supports campus-card / one-card integration for university rec centers (CBORD, Blackboard Transact, Atrium)." },
        { check: "Operator provides reconciliation report to gym monthly with audit-rights clause, telemetry-export evidence, and dispute resolution SLA (≤ 5 business days)." },
        { check: "Operator supports refund flow via app / SMS / on-machine without requiring on-site staff intervention (target ≤ 24 hr refund settlement for cashless transactions)." },
        { check: "Operator supports member-account opt-in with clear disclosure of what is logged at the cabinet (transaction time + SKU + amount; no biometric or behavioral PII)." },
        { check: "Operator written attestation that no PHI is captured or transmitted at hospital-system placements (HIPAA-aware data flow)." },
      ],
    },
    {
      heading: "3. Environmental positioning + corrosion-prevention guide",
      paragraph:
        "Gym environments shorten cabinet service life if positioning is wrong. Sweat aerosol, chalk dust, high humidity, and chlorine gas at pool-adjacent placements drive compressor failure, payment-reader corrosion, and condensation issues. The guide below sets the environmental envelope capable operators design for.",
      items: [
        {
          label: "Ambient envelope",
          value:
            "Indoor cabinet ambient 60-80°F, < 65% RH sustained. Pool-deck or sauna-adjacent placements require IP54-rated cabinet with anti-corrosion coating on payment reader and selection buttons (operator confirms with manufacturer spec sheet).",
        },
        {
          label: "Placement distance",
          value:
            "Cabinet placed ≥ 25 ft from group-fitness floor, ≥ 30 ft from spin / cycling studio (sweat-aerosol zone), ≥ 40 ft from pool deck or sauna entry. Lobby / juice-bar adjacent is the preferred zone for transaction volume and environmental control.",
        },
        {
          label: "Ventilation + service clearance",
          value:
            "36 in front clearance for ADA Section 305, 6 in side + rear clearance for compressor airflow. Cabinet rear-vented; rear placement against gym mirror or shared HVAC return creates compressor short-cycling.",
        },
        {
          label: "Cleaning + maintenance",
          value:
            "Weekly external wipe-down with non-corrosive cleaner (operator-supplied). Quarterly compressor coil cleaning. Annual payment-reader gasket inspection. Operator schedules align with the gym's cleaning crew, not member peak hours.",
        },
        {
          label: "Lighting + visibility",
          value:
            "Cabinet face illuminated to ≥ 10 fc for after-hours access (operator-supplied or facility-supplied). Cabinet camera-arc coverage confirmed at site walk; blind-spot positioning is a security failure mode.",
        },
        {
          label: "Anti-theft positioning",
          value:
            "Cabinet placed within sight-line of front desk (staffed hours) or primary lobby camera (24/7). Reinforced anchor to wall or floor for unattended placements. Anti-tilt and anti-pry sensors connected to telemetry; alert SLA < 5 minutes to operator + facility manager.",
        },
        {
          label: "Service SLA",
          value:
            "Tier 1 (security-event, payment-failure, cold-chain) < 24 hours. Tier 2 (stockout, planogram) 24-48 hours. Tier 3 (cosmetic) 5-day. 98% uptime SLA. Cabinet-down at staffless facility triggers same-business-day on-site within 24/7 facility coverage.",
        },
      ],
    },
  ],
  footer:
    "This framework is informational. Operator capability claims should be verified through reference calls (3+ active gym placements ≥ 12 months in service) and written attestation. IHRSA member facilities should confirm operator alignment with the facility's health-safety + member-data standards before contract execution. Capability framing only — placement timing depends on operator capacity in your service area.",
});

console.log("wrote " + "gym-vending-security");
