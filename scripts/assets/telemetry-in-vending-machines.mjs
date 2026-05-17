import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "telemetry-in-vending-machines",
  assetType: "checklist",
  title: "Vending Telemetry Verification Checklist",
  subtitle: "Operator coverage + signal + dashboard read-access + PCI DSS v4.0.1 + SLA",
  intro:
    "Telemetry is the single capability that separates a modern operator from a legacy route. Without it, an operator can't credibly commit to uptime SLA, planogram refresh, or revenue transparency. This checklist gives the facility manager + procurement officer a verifiable telemetry baseline against the established platforms (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, AWM Smart Shelf, Parlevel, USA Technologies / Cantaloupe ePort) and against PCI DSS v4.0.1 segmentation requirements.",
  sections: [
    {
      heading: "1. Operator capability + platform",
      items: [
        { check: "Platform named in MSA (Cantaloupe Seed / Nayax MoMa / 365 ADM / AWM / Parlevel / equivalent)." },
        { check: "Per-machine cellular modem (preferred) OR facility Wi-Fi on isolated VLAN per PCI DSS v4.0.1 Req 1.2.6." },
        { check: "Heartbeat cadence ≤ 15 minutes; offline > 30 minutes triggers operator alert with 24-hour resolution SLA." },
        { check: "Operator's NOC monitors 24/7 (or has documented escalation procedure for after-hours alerts)." },
        { check: "Operator commits in writing to telemetry coverage on ≥ 95% of fleet at the placement." },
      ],
    },
    {
      heading: "2. Cellular signal verification",
      items: [
        { check: "RSRP ≥ -100 dBm at placement (LTE Cat-1 / Cat-M typical); measured with cellular meter, not phone bars." },
        { check: "Carrier diversity available where placement is at fringe (Verizon + AT&T failover on same SIM where supported)." },
        { check: "Cellular booster engineered + installed where placement signal fails baseline (operator-funded per MSA)." },
        { check: "APN + SIM under operator control (private APN preferred at government / healthcare placements)." },
      ],
    },
    {
      heading: "3. Dashboard read-access",
      paragraph:
        "Facility read-access to the operator's telemetry dashboard is the highest-leverage transparency mechanism in a vending MSA. It eliminates 80% of dispute scenarios at QBR.",
      items: [
        { check: "Facility manager + procurement + (where applicable) SFA director have named-user dashboard access." },
        { check: "Dashboard surfaces: per-machine uptime, per-SKU velocity, refund volume, payment failure rate, cash/cashless mix." },
        { check: "Dashboard exportable to CSV / XLSX for facility-side analytics + audit." },
        { check: "Refund + service-ticket history visible to facility for the contract term." },
        { check: "SSO / SAML federation supported at enterprise placements." },
      ],
    },
    {
      heading: "4. PCI DSS v4.0.1 segmentation + payment data",
      paragraph:
        "Telemetry traffic and payment traffic should be logically (or physically) segmented. PCI DSS v4.0.1 mandatory as of 31 March 2025 — verify operator AOC dated accordingly.",
      items: [
        { check: "Operator PCI DSS v4.0.1 Attestation of Compliance (AOC) dated within 12 months — v3.2.1 (retired) NOT acceptable." },
        { check: "Payment terminal on PCI PTS v6+ approved devices list." },
        { check: "P2PE v3.1 or strong tokenization; PAN never on operator host or facility network." },
        { check: "Telemetry payload limited to SKU velocity + machine state + non-PCI metadata; no PAN, no track data." },
        { check: "TLS 1.2 minimum (TLS 1.3 preferred); SSL / TLS 1.0/1.1 disabled per NIST SP 800-52 Rev. 2." },
        { check: "Network segmentation testing per PCI DSS v4.0.1 Req 11.4.5 (annual)." },
      ],
    },
    {
      heading: "5. Alerts + SLA tiers",
      headers: ["Alert tier", "Trigger", "Operator SLA"],
      rows: [
        ["Tier 1 — revenue-critical", "Machine offline > 30 min, payment terminal down, refrigerated unit out-of-spec", "<24 hr acknowledgement, <24 hr resolution"],
        ["Tier 2 — stockout", "Per-SKU stockout, planogram refresh request", "24-48 hr acknowledgement, 5-7 day resolution"],
        ["Tier 3 — cosmetic / signage", "Signage replacement, label refresh, cabinet cleaning", "5-day acknowledgement, 14-day resolution"],
      ],
    },
    {
      heading: "6. Data retention + audit rights",
      items: [
        { check: "Telemetry data retained ≥ 24 months by operator." },
        { check: "Facility has audit right with 10-business-day notice; data export available in CSV / XLSX." },
        { check: "Per-machine commission reconciliation tied to telemetry-counted vends; discrepancies > 1% trigger root-cause review." },
        { check: "Refund + chargeback log retained ≥ 18 months (Visa Dispute Monitoring Program window)." },
        { check: "Annual revenue audit available at operator expense above defined gross-sales threshold." },
      ],
    },
    {
      heading: "7. Quarterly Business Review (QBR)",
      items: [
        { check: "Uptime report per machine over the quarter; trend vs SLA." },
        { check: "Per-SKU velocity report; planogram refresh recommendations." },
        { check: "Refund volume + reason codes; refund rate > 2% triggers planogram + hardware review." },
        { check: "Payment failure rate trend; mix shift cash ↔ cashless." },
        { check: "Service ticket SLA adherence (Tier 1/2/3 from §5)." },
        { check: "Action items with named owners + due dates; carried to next QBR." },
      ],
    },
    {
      heading: "8. Privacy + data handling",
      items: [
        { check: "Telemetry data not used for individual identification at the placement (transactions de-identified)." },
        { check: "Where loyalty / app integration captures personal data, CCPA / VCDPA / CPA / CTDPA / UCPA notice + opt-out honored." },
        { check: "Vendor Data Processing Agreement (DPA) in place; sub-processor list maintained." },
        { check: "Data deletion on contract termination per retention schedule." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or security advice. Confirm PCI DSS, NIST, and state privacy law applicability with counsel and the facility IT / security lead. LetUsVending is equipped to coordinate operators with telemetry-verified fleets, dashboard read-access, and contractual SLA backing.",
});

console.log("wrote "+"telemetry-in-vending-machines");
