import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-security-vandalism",
  assetType: "checklist",
  title: "School Vending Security + Anti-Vandalism Checklist",
  subtitle: "Hardware hardening + placement + programming + telemetry SLA + incident response",
  intro:
    "K-12 and higher-ed placements face theft, vandalism, tampering, and tip-over risk distinct from office or industrial sites. This checklist gives the SFA director, school resource officer, and facilities team a defensible baseline — hardware, placement, programming, telemetry, and incident response. Map each item to the operator MSA so accountability is contractual, not informal.",
  sections: [
    {
      heading: "1. Hardware hardening",
      items: [
        { check: "Cabinet steel gauge ≥ 18 ga (preferably 16 ga) for front + sides; pry-resistant edges." },
        { check: "T-handle lock with rotating disc-detainer (Medeco, Abloy Protec2, or equivalent) — keyed unique to district." },
        { check: "Anti-tip-over kit (NFPA-aligned floor anchor or wall tether) installed on every machine — Consumer Product Safety Commission has documented fatal tip-over incidents in school vending." },
        { check: "Polycarbonate (not glass) selection window where impact risk elevated; minimum 1/4 in thickness." },
        { check: "Bill validator + coin mech with anti-stringing + anti-spoon mechanisms (Coinco, MEI / CashFlow models)." },
        { check: "Cashbox / stacker on separate lock from cabinet door (dual-lock cash zone)." },
        { check: "External LED illumination on machine face — passive deterrent, also serves placement-visibility audit." },
      ],
    },
    {
      heading: "2. Placement security audit",
      items: [
        { check: "Machine within CCTV camera field-of-view; camera resolution ≥ 1080p, retention ≥ 30 days." },
        { check: "Placement avoids dead-end alcoves and unmonitored exterior alcoves accessible after hours." },
        { check: "Placement on accessible route but not directly adjacent to exterior egress door (reduces grab-and-run exit)." },
        { check: "Adjacent walls + floor able to bear machine weight (typical 600-900 lbs loaded) + tip-over anchor load." },
        { check: "Egress / fire code clearances maintained (NFPA 101 / IBC 1004) — machine does not narrow corridor below code minimum." },
        { check: "After-hours access policy: building lock-down schedule covers machine placements; key control logged." },
      ],
    },
    {
      heading: "3. Programming + payment hardening",
      items: [
        { check: "Bill validator firmware updated to current revision; counterfeit detection enabled (UV + magnetic + IR)." },
        { check: "Card reader on PCI PTS v6+ approved devices list; PCI DSS v4.0.1 AOC dated within 12 months." },
        { check: "P2PE (PCI P2PE v3.1) or strong tokenization enabled — no clear-text PAN on operator host." },
        { check: "Cashless-only programming option for high-risk placements (eliminates cash incentive)." },
        { check: "Refund + service mode access requires operator credential (PIN + telemetry-logged)." },
        { check: "Maximum coin/bill payout per refund event capped — limits payout fraud exposure." },
      ],
    },
    {
      heading: "4. Telemetry + alerting SLA",
      paragraph:
        "Telemetry is the primary detection layer for tampering, door-open events, payment failure, and unusual velocity. Tie each alert to a contractual SLA in the operator MSA.",
      items: [
        { label: "Heartbeat", value: "Cellular modem heartbeat ≤ 15 minutes; offline > 30 minutes triggers operator alert + 24-hour resolution SLA." },
        { label: "Door-open alert", value: "Any unscheduled door-open event triggers SMS + email to operator + district facility manager within 5 minutes." },
        { label: "Tamper alert", value: "Tilt sensor + impact sensor (where supported) triggers tamper alert; review within 1 hour." },
        { label: "Payment failure rate", value: "Failure rate > 3% on rolling 24-hour window triggers operator investigation within 4 hours." },
        { label: "Velocity anomaly", value: "Out-of-pattern SKU velocity (refund spike, single-SKU drain) flagged within 24 hours." },
        { label: "Dashboard read-access", value: "SFA director + school resource officer have telemetry read-access (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, or equivalent)." },
      ],
    },
    {
      heading: "5. Incident response procedure",
      items: [
        { number: 1, title: "Detection", description: "Telemetry alert OR student / staff report OR scheduled walk-through finding. Time-stamp the report immediately." },
        { number: 2, title: "Containment", description: "Operator dispatches within service SLA. Take machine offline (cashless disabled, vend disabled) until inspected. CCTV footage from incident window preserved by district." },
        { number: 3, title: "Investigation", description: "Operator + facilities + (where appropriate) SRO conduct walk-through within 24 hours. Photo + measurement log; identify hardware, payment, or placement root cause." },
        { number: 4, title: "Remediation", description: "Hardware repair or replacement within 5 business days; programming + telemetry adjustments; placement change if root cause is placement." },
        { number: 5, title: "Reporting", description: "Incident report to SFA director + facilities + (where applicable) law enforcement. Quarterly incident-trend report at QBR." },
      ],
    },
    {
      heading: "6. Quarterly + annual review",
      items: [
        { check: "Quarterly incident-trend report from operator (per-machine, per-incident-type)." },
        { check: "Annual penetration walk-through with SRO + facilities + operator service tech." },
        { check: "Annual telemetry SLA adherence report (uptime, response time, resolution time)." },
        { check: "Annual cabinet key audit — keys reissued if compromise suspected or staff turnover." },
        { check: "Insurance + bonding: operator carries $2M GL minimum; theft / vandalism coverage rider verified." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or security advice. Coordinate placement decisions with district facilities, school resource officer, and risk management. LetUsVending is equipped to coordinate operators with hardened cabinets, telemetry SLAs, and per-quarter incident reporting for K-12 and higher-ed placements.",
});

console.log("wrote "+"vending-machine-security-vandalism");
