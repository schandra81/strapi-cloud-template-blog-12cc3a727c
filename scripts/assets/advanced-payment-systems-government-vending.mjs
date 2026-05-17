import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "advanced-payment-systems-government-vending",
  assetType: "checklist",
  title: "Government Vending Payment Configuration Checklist",
  subtitle: "CAC/PIV, PCI DSS v4.0.1, FIPS 140-3, P2PE, and tokenization verification",
  intro:
    "Government vending placements (federal, state, county, municipal) carry payment requirements that go well beyond a standard PCI DSS posture. Federal placements may require Common Access Card (CAC) or Personal Identity Verification (PIV) per HSPD-12 / FIPS 201-3, FIPS 140-3 validated cryptographic modules, and TIC 3.0 boundary controls. This checklist gives procurement and the contracting officer a verifiable baseline for each payment surface (card reader, mobile wallet, kiosk, app, refund portal) before contract award and at annual review.",
  sections: [
    {
      heading: "1. PCI DSS v4.0.1 (effective March 2025)",
      paragraph:
        "PCI DSS v4.0 mandatory date was 31 March 2025; v4.0.1 (June 2024) is the current operative version. Operators must attest to v4.0.1 — not v3.2.1 (retired) — at contract execution.",
      items: [
        { check: "Operator-issued PCI DSS v4.0.1 Attestation of Compliance (AOC) dated within 12 months." },
        { check: "Self-Assessment Questionnaire (SAQ) type matches deployment: SAQ B-IP for IP-connected PTS-validated terminals; SAQ C for integrated POS; SAQ D for service provider." },
        { check: "All terminals on PCI PTS v6 or higher approved devices list (PCI SSC Approved PTS Devices)." },
        { check: "End-to-end (P2PE v3.1) or strong tokenization in place; cardholder data never transits operator host network in clear text." },
        { check: "Quarterly external ASV scan and annual internal vulnerability scan results on file." },
      ],
    },
    {
      heading: "2. CAC / PIV + FIPS 201-3 (federal placements only)",
      paragraph:
        "Federal placements at DoD, VA, GSA, DOE, NIH, Smithsonian, or any HSPD-12 covered facility may require contactless CAC/PIV acceptance for facility access cards and for stored-value programs that integrate with agency credentialing.",
      items: [
        { check: "Card reader supports ISO/IEC 14443 contactless and NIST SP 800-73-4 PIV applet read for facility access integration." },
        { check: "Reader firmware FIPS 140-3 (or transitional FIPS 140-2) validated cryptographic module; certificate # on file." },
        { check: "PIV authentication via PKI-AUTH or PKI-CAK per NIST SP 800-116 Rev. 1 where stored-value or restricted-access vending is required." },
        { check: "CAC/PIV PIN entry, if used, on a FIPS 201 approved PIN pad; never captured by operator host." },
      ],
    },
    {
      heading: "3. Cryptography + key management",
      items: [
        { check: "TLS 1.2 minimum (TLS 1.3 preferred) between terminal, gateway, and operator host; SSL/TLS 1.0/1.1 disabled per NIST SP 800-52 Rev. 2." },
        { check: "P2PE keys managed under TR-39 / ASC X9 TR 31 key-block format; injected only at PCI-listed Key Injection Facility." },
        { check: "Symmetric keys rotated at minimum 12-month cadence; compromised-key rotation procedure documented." },
        { check: "Tokens use format-preserving tokenization (NIST SP 800-38G FF1 or FF3-1) or random tokens with vault; PAN never reversible by host." },
      ],
    },
    {
      heading: "4. Accepted payment methods + accessibility",
      items: [
        { check: "Accepted: EMV chip, EMV contactless, mobile wallet (Apple Pay, Google Pay, Samsung Pay), and operator stored-value app." },
        { check: "Cashless option available so users without bill/coin handling can transact (ADA Section 309)." },
        { check: "Reader supports audio output via 3.5 mm jack for blind/low-vision users (Section 508 / WCAG 2.1 AA)." },
        { check: "Where SNAP/EBT is required (rare in vending), terminal certified under FNS 7 CFR 274.12 EBT rules." },
      ],
    },
    {
      heading: "5. Network + boundary controls",
      items: [
        { check: "Terminal connects via cellular LTE/5G or segmented VLAN — never the agency production network unless TIC 3.0 boundary controls applied." },
        { check: "If cellular: carrier private APN with operator-only static IP egress; no public-internet routing." },
        { check: "Firewall ruleset reviewed semi-annually per PCI DSS 1.2.7; documented." },
        { check: "Log aggregation to operator SOC with 12-month retention; logs available to agency on 5-business-day request." },
      ],
    },
    {
      heading: "6. Refund, dispute, audit",
      items: [
        { check: "Refund initiable via mobile app, SMS-to-refund, or operator service line; refund SLA ≤ 5 business days." },
        { check: "Chargeback rate < 0.9% (Visa Dispute Monitoring Program threshold)." },
        { check: "Operator provides per-quarter transaction + refund + chargeback report to contracting officer." },
        { check: "Agency audit rights (per FAR 52.215-2 or state equivalent) explicit in contract; minimum 10-business-day notice." },
        { check: "Incident response: cardholder data exposure reported to agency CISO and acquirer within 24 hours of detection." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or compliance advice. Confirm specific FIPS, PIV, TIC, and FedRAMP requirements with the cognizant security officer and contracting officer. LetUsVending is equipped to source operators with the validated payment stack required for federal, state, and municipal placements.",
});

console.log("wrote "+"advanced-payment-systems-government-vending");
