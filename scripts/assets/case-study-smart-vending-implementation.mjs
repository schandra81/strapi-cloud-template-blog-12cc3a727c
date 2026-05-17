import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "case-study-smart-vending-implementation",
  assetType: "pack",
  title: "Smart Vending Implementation Pack",
  subtitle: "RFP template, SLA framework, QBR template, and hyper-care plan",
  intro:
    "Smart-vending implementations (telemetry + cashless + planogram analytics) succeed or fail on four documents: the RFP, the SLA, the QBR cadence, and the hyper-care plan. This pack codifies each. It maps to PCI DSS v4.0 (effective March 31, 2025), EMV + NFC, ADA Section 309.4, and NAMA-published service KPIs.",
  sections: [
    {
      heading: "1. RFP scope statement",
      paragraph:
        "The scope statement is the single most-disputed RFP element. Specify hardware, telemetry, payment rails, integration, planogram method, and reporting in one paragraph each.",
      items: [
        { label: "Hardware", value: "Number of machines, form factor (glass-front, smart-cooler, micro-market kiosk, locker-pickup), age (≤ 5 years), ADA reach-range compliance attestation (Section 308)." },
        { label: "Telemetry", value: "Cellular-modem heartbeat ≤ 15 min, per-SKU velocity, online/offline status, payment-failure rate, temperature monitoring for refrigerated units." },
        { label: "Payment", value: "EMV contact + contactless + mobile wallet + closed-loop. PCI DSS v4.0 AOC current within 12 months." },
        { label: "Integration", value: "Identity (Okta / Azure AD / campus SSO), payroll deduct or pre-paid funding, HR/AP settlement cadence." },
        { label: "Planogram method", value: "Data-driven quarterly refresh based on per-SKU velocity, healthy-share floor (NANA thresholds), allergen labeling per FALCPA." },
        { label: "Reporting", value: "Operator dashboard + scheduled export to host BI (Tableau, Power BI, Looker). Schema published. Weekly delivery cadence." },
      ],
    },
    {
      heading: "2. SLA framework — three-tier severity",
      headers: ["Tier", "Definition", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain / payment failure", "Machine offline, payment system down, refrigeration temperature excursion", "≤ 4 hours", "≤ 24 hours"],
        ["Tier 2 — stockout / planogram refresh", "Single-SKU stockout, planogram update request", "≤ 24 hours", "5 – 7 days"],
        ["Tier 3 — cosmetic / signage", "Signage replacement, cabinet cleaning, label refresh", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "3. SLA — measurable KPIs",
      items: [
        { check: "Uptime ≥ 98% per machine, rolling 90-day window. Penalty: per-machine credit at 95-98%, equipment swap right below 95%." },
        { check: "Stockout incidents per machine per quarter — target ≤ 4. Measured by telemetry-flagged 'empty' selections." },
        { check: "Service-ticket SLA adherence ≥ 95% per quarter, measured per tier." },
        { check: "Refund rate ≤ 2% of transactions. Refund volume above 2% triggers planogram + machine quality review." },
        { check: "Cashless-rail uptime ≥ 99% (PCI-mandated systems). Outages > 1 hour reported within 24 hours." },
      ],
    },
    {
      heading: "4. Hyper-care plan (first 90 days post-go-live)",
      items: [
        { number: 1, title: "Days 1-14 — daily on-site walkthrough", description: "Operator field rep on-site daily. Confirm telemetry connectivity, payment-rail function on every machine, signage placement, allergen labeling correctness. Member feedback intercepted in person at breakroom." },
        { number: 2, title: "Days 15-30 — telemetry baseline", description: "Per-SKU velocity baseline established. Stockout-pattern map drawn. First quarter-refresh candidates identified. Daily exception report to host PMO." },
        { number: 3, title: "Days 31-60 — first planogram refresh", description: "Bottom-10% velocity SKUs swapped for member-requested SKUs. Healthy-share floor maintained. A/B price-point test on 3-5 SKUs." },
        { number: 4, title: "Days 61-90 — QBR-1 + steady-state handoff", description: "First quarterly business review covers uptime, velocity, stockout, refund, SLA adherence. Hyper-care field rep transitions to regular route cadence." },
      ],
    },
    {
      heading: "5. Quarterly business review (QBR) template",
      items: [
        { check: "Uptime per machine, per month, over the quarter (heatmap)." },
        { check: "Velocity per SKU, per machine, with top-decile and bottom-decile flags." },
        { check: "Stockout incidents — count, machine, SKU, resolution time, root cause." },
        { check: "Refund volume — count, reason code, refund-rate by machine." },
        { check: "Service-ticket SLA adherence by tier (% met)." },
        { check: "Payment-rail mix — cash, EMV, contactless, wallet, closed-loop — and trend." },
        { check: "Healthy-share consumption — % of transactions on healthy-flagged SKUs vs. planogram allocation." },
        { check: "Member feedback — NPS, refund-reason themes, request queue." },
        { check: "Planogram-refresh proposal for next quarter, with expected velocity lift." },
        { check: "Action items — owner, due date, success criterion." },
      ],
    },
    {
      heading: "6. Data + reporting requirements",
      paragraph:
        "Smart-vending value depends on host access to the data, not just the operator's dashboard. Specify schema, cadence, and ownership.",
      items: [
        { label: "Schema", value: "Transaction-level export: timestamp, machine ID, SKU, amount, payment rail, auth code, healthy-flag, refund flag. Documented schema delivered with first export." },
        { label: "Cadence", value: "Weekly scheduled export to host SFTP or API endpoint by 09:00 Monday. Daily for high-volume sites." },
        { label: "Ownership", value: "Host owns transaction data; operator licensed for service + de-identified benchmarking only. Data-retention period stated in DPA." },
        { label: "Member-data minimization", value: "Operator stores employee ID + balance only on closed-loop; no SSN, no compensation, no benefit eligibility data." },
      ],
    },
    {
      heading: "7. Integration test plan (pre-go-live)",
      items: [
        { check: "Identity SSO — 5 test members, each role tier, complete first transaction in under 6 seconds." },
        { check: "Payroll deduct / settlement — 1 full weekly cycle reconciled before go-live; AP confirms file format + matching." },
        { check: "Refund — member-initiated via app, SMS, and on-machine; each returns within 24 hours for cashless." },
        { check: "ADA — physical reach, operating force ≤ 5 lbf, audio-output verification on each kiosk." },
        { check: "Allergen labeling — SKU-level allergen flags display correctly on app + on-machine; FALCPA compliance attested." },
        { check: "Telemetry — heartbeat under 15 min; temperature alert tested via deliberate excursion; payment-failure alert tested." },
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Operator declines to provide PCI DSS v4.0 AOC dated within 12 months." },
        { check: "SLA proposed without measurable KPIs or remedies." },
        { check: "QBR cadence informal / verbal, no template, no action-item tracking." },
        { check: "Telemetry export limited to summary dashboard with no transaction-level data." },
        { check: "Hyper-care plan not in scope or limited to phone support." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal, security, or procurement advice. Identity integration and payment scoping should be reviewed by your IT/security teams and, where required, by a QSA.",
});

console.log("wrote "+"case-study-smart-vending-implementation");
