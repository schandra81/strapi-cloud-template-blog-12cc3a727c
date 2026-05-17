import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "touchless-office-vending-machines",
  assetType: "rfp template",
  title: "Touchless Office Vending RFP Template",
  subtitle: "Operator capability checks, mobile-app + contactless requirements, and SLA scope",
  intro:
    "Touchless office vending — cashless, contactless, mobile-app activated, refund-by-app — became the standard office vending spec following CDC + NIOSH guidance on surface transmission and the rapid adoption of EMV contactless + mobile-wallet payment. PCI-DSS v4.0 (effective March 2024) tightened the security requirements on the payment ecosystem. This RFP template gives the workplace experience or facilities leader the operator capability checks, the mobile-app + contactless requirements, and the SLA scope needed to issue a defensible RFP.",
  sections: [
    {
      heading: "1. Operator capability checks — gating",
      paragraph:
        "All gating items are pass/fail. An operator missing any of these is disqualified before scoring.",
      items: [
        { check: "Cellular telemetry on every placed device (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets, AWM Smart Shelf, or comparable) with heartbeat ≤ 15 minutes" },
        { check: "EMV chip + contactless (NFC) payment on every device — PCI-DSS v4.0 attested through the payment vendor" },
        { check: "Mobile wallet support — Apple Pay, Google Pay, Samsung Pay" },
        { check: "Operator-branded mobile app with refund + reorder capability (or integration with telemetry vendor's app)" },
        { check: "Refund flow accessible without front-desk involvement — app, SMS-to-refund number, or web form" },
        { check: "ADA Section 308 reach range; Section 305 clear floor space; Section 309.4 operating force ≤ 5 lbf" },
        { check: "FALCPA allergen labeling on every SKU + allergen summary signage on the machine face" },
        { check: "Insurance — CGL $2M minimum aggregate, workers' comp, additional-insured endorsement" },
        { check: "Three office references at comparable scale with named workplace experience or facilities contact" },
        { check: "Sustainability — ENERGY STAR vending machine certification on refrigerated devices, AIM Act refrigerant compliance" },
      ],
    },
    {
      heading: "2. Mobile-app + contactless functional requirements",
      paragraph:
        "Beyond the gating capability checks, the office RFP should specify functional requirements on the user experience. Each requirement is verifiable through an operator demo before contract signing.",
      items: [
        { label: "Tap-to-pay flow", value: "User taps phone or contactless card to reader; transaction completes in < 3 seconds; receipt issued via SMS or in-app." },
        { label: "App-initiated purchase", value: "User scans QR or selects machine in app; reserves a transaction window; pays via stored card or wallet; dispenses on confirmation." },
        { label: "Refund flow", value: "User submits refund request in app within 24 hours of failed transaction; credit issued to original payment method within 24 hours; cash refund where applicable within 7 days via host HR or building manager." },
        { label: "Reorder + favorites", value: "User saves favorite SKUs; receives alert when restocked; supports recurring purchases for OCS-style coffee adjacency." },
        { label: "Loyalty + corporate subsidy", value: "App supports employer-issued subsidy code; subsidies billed to host monthly with transaction-level reconciliation." },
        { label: "Allergen + nutrition transparency", value: "App displays allergen + nutrition + ingredient list per SKU; FALCPA-compliant; supports FDA Menu Labeling Final Rule disclosure where applicable." },
        { label: "Privacy + data", value: "PCI-DSS v4.0 attested; user data not shared with third parties beyond payment processor; opt-out from marketing communications." },
      ],
    },
    {
      heading: "3. SLA scope",
      headers: ["SLA dimension", "Target", "Measurement", "Remedy"],
      rows: [
        ["Per-machine uptime", "98% monthly", "Telemetry — minutes online / minutes in month", "Commission credit < 95%; SIP < 92%; termination right < 90% × 2 mo"],
        ["Tier-1 ticket (offline, payment, cold-chain)", "Acknowledge < 4 hrs; resolve < 24 hrs", "Operator CRM + telemetry", "Per-ticket commission credit"],
        ["Tier-2 ticket (stockout, planogram refresh)", "Acknowledge < 24 hrs; resolve < 5 business days", "Operator CRM", "QBR-documented"],
        ["Refund response", "Cashless < 24 hrs via app/SMS; cash < 7 days", "Refund log", "Refund rate > 2% triggers planogram review"],
        ["Cold-chain", "Continuous 35-40°F; excursion resolve < 4 hrs", "Telemetry temperature feed", "Spoiled product replaced"],
        ["Restock cadence", "Telemetry-driven; minimum weekly", "Operator restock log", "Stockout rate > 3% triggers cadence review"],
      ],
    },
    {
      heading: "4. PCI-DSS v4.0 attestation — what to require",
      paragraph:
        "PCI-DSS v4.0 became effective March 31, 2024 with phased compliance requirements. Vending operators rely on their payment vendor for the bulk of compliance; the host should require attestation evidence in the RFP.",
      items: [
        { check: "Payment-vendor PCI-DSS v4.0 attestation letter (Cantaloupe, Nayax, 365 Retail Markets, USAT, or comparable)" },
        { check: "Operator-side SAQ (Self-Assessment Questionnaire) confirming P2PE-validated payment device on the vending fleet" },
        { check: "PA-DSS / P2PE program documentation for the payment-terminal hardware" },
        { check: "Quarterly vulnerability scan attestation through an Approved Scanning Vendor where applicable to operator network" },
        { check: "Incident-response plan with notification timeline aligned to state breach-notification statutes (e.g., California Civil Code §1798.82)" },
        { check: "Data-flow diagram showing where transaction data lives + how long it persists" },
      ],
    },
    {
      heading: "5. RFP response sections",
      items: [
        { number: 1, title: "Section A — Bidder profile + capability summary", description: "Years in office vending, fleet count, technician geography, telemetry vendor, payment vendor + PCI attestation." },
        { number: 2, title: "Section B — Touchless technology stack", description: "Telemetry vendor + heartbeat, payment vendor + EMV/NFC/mobile-wallet support, app capability + refund flow." },
        { number: 3, title: "Section C — Equipment specification", description: "Per-machine make/model, ENERGY STAR confirmation, refrigerant type, LED + low-power standby, ADA + Section 308 attestation." },
        { number: 4, title: "Section D — SLA + remedies", description: "Match the SLA matrix in Section 3 above; propose deviations with rationale." },
        { number: 5, title: "Section E — Planogram + healthy options", description: "Sample planogram with healthy-options share (typically 35-50% for modern offices), FALCPA allergen labeling, seasonal refresh cadence." },
        { number: 6, title: "Section F — Commercial terms", description: "Commission rate, calculation method, payment cadence, audit right, equipment investment, refresh cycle, term + renewal." },
        { number: 7, title: "Section G — Implementation + change management", description: "Equipment-install schedule, app onboarding, telemetry activation, refund-flow training, communications to building tenants." },
        { number: 8, title: "Section H — References + sustainability", description: "Three office references with workplace experience or facilities contact; ENERGY STAR commitment + AIM Act refrigerant compliance." },
      ],
    },
    {
      heading: "6. Common gaps in touchless office RFPs",
      items: [
        { label: "No mobile-app refund flow", value: "Cash-refund-only refund mechanisms drive tenant frustration. Specify app + SMS refund as required." },
        { label: "Telemetry self-reported, not exportable", value: "Without telemetry export, host cannot verify SLA. Require daily CSV / API export." },
        { label: "PCI-DSS v3.2.1 (sunset)", value: "PCI-DSS v3.2.1 retired March 31, 2024. Require v4.0 attestation; do not accept legacy attestation letters." },
        { label: "No ADA Section 308 attestation", value: "Office vending placements often miss reach range on deck-style machines. Require per-device attestation at install + annual reattestation." },
        { label: "Healthy options unmeasured", value: "Most modern offices target 35-50% healthy-options share. Without an SKU-level commitment, the planogram regresses to soda + chip dominance within 6 months." },
      ],
    },
  ],
  footer:
    "This RFP template is a working procurement reference. Final RFP + contract should be reviewed by workplace experience leadership, facilities, IT (for telemetry + payment ecosystem integration), and counsel. PCI-DSS v4.0 attestation + ADA Section 308 + telemetry export + mobile-app refund flow are the four most-gapped items in modern office vending RFPs.",
});

console.log("wrote "+"touchless-office-vending-machines");
