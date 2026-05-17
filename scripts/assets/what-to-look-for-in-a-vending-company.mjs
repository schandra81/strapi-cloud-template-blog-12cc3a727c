import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "what-to-look-for-in-a-vending-company",
  assetType: "rfp template",
  title: "Vending Operator RFP Template",
  subtitle: "Telemetry, SLA, reporting, and reference-check script",
  intro:
    "Selecting a vending operator is a decision that locks in service quality for 3-5 years and creates 24+ months of switching cost. The four dimensions that predict operator performance are telemetry capability, SLA architecture, reporting cadence, and reference health. This RFP template gives any host — office, hotel, hospital, school, plant, retail — a defensible operator-selection process built on those four dimensions, including a reference-check script that surfaces the issues references won't volunteer.",
  sections: [
    {
      heading: "1. Telemetry — capability check",
      paragraph:
        "Telemetry is the single biggest predictor of operator performance. Operators without modern telemetry cannot deliver 97%+ uptime, cannot tune planograms quarterly, and cannot support audit-right transparency. This section is pass/fail.",
      items: [
        { check: "Cellular-modem telemetry on every placed device — vendor (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets, AWM Smart Shelf, USAT Yoke, or comparable) + heartbeat interval (≤ 15 minutes)" },
        { check: "Per-machine + per-SKU sales export available daily as CSV or API" },
        { check: "Per-machine uptime measurable + reportable to the host" },
        { check: "Cold-chain temperature monitoring on refrigerated devices with alert + 4-hour SLA on excursion" },
        { check: "Payment ecosystem — EMV chip + contactless (NFC) + mobile wallet (Apple Pay, Google Pay), PCI-DSS v4.0 attested through payment vendor" },
        { check: "Audit-right clause permitting host to reconcile reported commission against telemetry data" },
        { check: "Live telemetry dashboard accessible to the host's operating-line owner" },
      ],
    },
    {
      heading: "2. SLA — capability check",
      paragraph:
        "Aspirational SLA without measurement methodology + monetary remedies is unenforceable. Verify all three components.",
      items: [
        { number: 1, title: "SLA targets stated as numbers", description: "Per-machine uptime ≥ 97% (98% in healthcare + hotel), tier-1 ticket resolve < 24 hours, refund response < 24 hours cashless." },
        { number: 2, title: "Measurement methodology documented", description: "Telemetry export + CRM ticket export + refund log + cold-chain temperature feed. Self-reported SLA without telemetry support fails verification." },
        { number: 3, title: "Monetary remedies at threshold breach", description: "Commission credit at uptime < 95%; service-improvement plan at 2 consecutive months below threshold; termination right at < 90% × 2 months. Operator commits to remedies in writing." },
        { number: 4, title: "Tier-1 vs tier-2 distinction", description: "Tier-1 (offline, payment failure, cold-chain) has 4-hour acknowledgement + 24-hour resolve. Tier-2 (single SKU stockout, planogram refresh) has 24-hour acknowledgement + 5-business-day resolve." },
        { number: 5, title: "Cold-chain SLA where applicable", description: "Continuous 35-40°F monitoring; 4-hour excursion resolution; spoiled product replaced at operator cost; root-cause memo." },
      ],
    },
    {
      heading: "3. Reporting — capability check",
      paragraph:
        "Reporting cadence is the forum where SLA performance becomes actionable. Operators that don't deliver consistent reporting cannot be held accountable to SLA.",
      headers: ["Cadence", "Required output", "Operator commits"],
      rows: [
        ["Monthly statement", "Sales + commission + refund + telemetry uptime per machine", "By 15th of following month"],
        ["Monthly health check", "Top + bottom SKUs, stockout incidents, service-ticket log, refund volume", "By 25th of following month"],
        ["Quarterly business review", "Joint review with operations leadership; planogram tuning; SLA scorecard; action items", "Per calendar quarter, in person or video"],
        ["Annual reconciliation", "Full-year commission tie-out + capital + refresh planning", "Within 60 days of fiscal year end"],
        ["Ad-hoc on demand", "Telemetry data export, refund detail, root-cause memo on tier-1 incidents", "Within 3 business days of host request"],
      ],
    },
    {
      heading: "4. Reference-check script — the questions references won't volunteer",
      paragraph:
        "Operators submit polished references. The script below surfaces the issues references will discuss when asked directly. Allot 20-30 minutes per reference call.",
      items: [
        { number: 1, title: "How long has this operator served your site, and what was the last contract renewal experience?", description: "Surfaces auto-renewal traps, market-rate review experience, and whether the reference would re-sign." },
        { number: 2, title: "What's the current per-machine uptime you measure, and how does the operator report it?", description: "Confirms telemetry capability + uptime in practice, not in operator-reported claims." },
        { number: 3, title: "Walk me through the last tier-1 service ticket you opened — incident, response time, resolution.", description: "Surfaces actual SLA performance versus stated SLA." },
        { number: 4, title: "How does the refund flow work in practice, and what's your refund rate?", description: "Refund rate above 2% indicates planogram or equipment issues; refund rate below 0.5% may indicate users can't access refunds." },
        { number: 5, title: "Have you had a cold-chain incident, and how did the operator handle it?", description: "Tests food-safety SLA in practice." },
        { number: 6, title: "Does your QBR actually happen, and are the action items closed?", description: "Most-broken operator commitment in industry; surface it directly." },
        { number: 7, title: "What's the biggest gap in the operator's service today, and how have they responded when you raised it?", description: "Open-ended question that surfaces the issues the reference won't volunteer in a polished introduction." },
        { number: 8, title: "If you were starting the relationship today, what would you do differently in the contract?", description: "Captures the procurement lessons-learned the reference internalized." },
      ],
    },
    {
      heading: "5. Capability + compliance attestation",
      items: [
        { check: "ADA Title III + Section 308 reach-range attestation per device" },
        { check: "FALCPA allergen labeling on every SKU + allergen summary signage" },
        { check: "FDA Menu Labeling Final Rule (21 CFR 101.8) compliance for any operator with 20+ vending machines" },
        { check: "PCI-DSS v4.0 attestation through payment vendor" },
        { check: "Insurance — CGL $2M minimum aggregate, workers' comp, additional-insured endorsement" },
        { check: "OFAC + W-9 + state debarment screen clean" },
        { check: "Background-check program for service personnel per state code (especially K-12, healthcare, government)" },
        { check: "Sector-specific compliance — Smart Snacks for K-12, Schedule H for hospital, brand standards for hotel, FAR for federal" },
        { check: "Sustainability — ENERGY STAR fleet share, AIM Act refrigerant compliance, recyclable packaging share" },
      ],
    },
    {
      heading: "6. Scoring rubric",
      headers: ["Dimension", "Weight", "Notes"],
      rows: [
        ["Telemetry capability", "25%", "Heartbeat, export, audit right, payment ecosystem"],
        ["SLA architecture + remedies", "20%", "Targets + measurement + monetary remedies"],
        ["Reporting + transparency", "15%", "Monthly + QBR + annual + ad-hoc"],
        ["Compliance + accessibility", "15%", "ADA + FALCPA + PCI + insurance + sector-specific"],
        ["References + capability", "10%", "Reachable + endorsed + lessons-learned"],
        ["Commission + financial terms", "10%", "Rate + method + term + audit"],
        ["Sustainability + community", "5%", "ENERGY STAR + refrigerants + packaging + local"],
      ],
    },
    {
      heading: "7. Common operator-selection mistakes",
      items: [
        { label: "Selecting on commission rate", value: "Commission rate varies 5-10 points between operators; service quality varies 30-50%. Telemetry + SLA + reporting matter more than commission rate for the first 36 months." },
        { label: "Skipping the reference call", value: "Polished references don't volunteer issues. The script above surfaces actual performance — invest the 90 minutes for 3 references." },
        { label: "Accepting aspirational SLA", value: "'We aim for 98%' without a commission-credit remedy is operator marketing, not contract. Insist on monetary remedies." },
        { label: "Not verifying telemetry vendor", value: "Operators sometimes claim telemetry that isn't deployed across the fleet, or that lacks the heartbeat or export capability the host needs. Verify vendor + version + sample export before signing." },
        { label: "Ignoring PCI v4.0", value: "PCI-DSS v3.2.1 retired March 2024. Operators still attesting to v3.2.1 are non-compliant." },
        { label: "No annual reattestation", value: "Compliance attestations decay. Require annual reattestation in the contract for ADA + FALCPA + PCI + insurance." },
      ],
    },
  ],
  footer:
    "This RFP template is a working procurement reference, not legal advice. Final RFP + contract should be reviewed by host counsel and aligned to sector + state requirements. Telemetry + SLA remedies + reporting + reference health together predict 80%+ of operator performance in the first 24 months; pricing predicts the remaining 20%.",
});

console.log("wrote "+"what-to-look-for-in-a-vending-company");
