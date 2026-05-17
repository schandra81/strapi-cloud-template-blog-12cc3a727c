import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-retail-loyalty-programs",
  assetType: "playbook",
  title: "Retail Vending Loyalty Integration Playbook",
  subtitle: "Eight integration patterns, API requirements, data-sharing agreement template",
  intro:
    "Retail vending placements that integrate with the host's loyalty program convert 15-30% higher ticket and 2-5x higher member share than unconnected machines. This playbook covers the eight integration patterns, the API requirements they each impose, the data-sharing agreement structure, and the operator-side technical baseline.",
  sections: [
    {
      heading: "1. Eight integration patterns",
      headers: ["Pattern", "What it does", "API surface", "Effort"],
      rows: [
        ["P1 — Identity-only", "Scan loyalty number / app QR at the machine; transaction logged to member profile", "Read: member lookup", "Low (2-4 weeks)"],
        ["P2 — Point earn", "Earn loyalty points per transaction", "Read + Write: member + points API", "Low-medium (4-6 weeks)"],
        ["P3 — Point redeem", "Redeem points for free / discounted item", "Read + Write + Auth: member, points, transaction-auth", "Medium (6-10 weeks)"],
        ["P4 — Member pricing", "Member sees different price at the machine", "Read + pricing API", "Medium (6-10 weeks)"],
        ["P5 — Wallet / stored value", "Pay from loyalty wallet stored value", "Full payment + balance API", "Medium-high (10-14 weeks)"],
        ["P6 — Coupon redeem", "Apply targeted coupon at checkout", "Coupon API + targeting platform", "Medium (6-10 weeks)"],
        ["P7 — Personalized recommendation", "On-screen recommendation based on member history", "Recommendation API + on-machine UI", "High (12-20 weeks)"],
        ["P8 — Subscription / unlimited", "Member's subscription product available unmetered", "Subscription API + entitlement check", "High (12-20 weeks)"],
      ],
    },
    {
      heading: "2. API requirements by pattern",
      paragraph:
        "Each pattern imposes specific API endpoints, authentication, rate-limit, and latency expectations on the loyalty platform. Operator-side telemetry (Cantaloupe, Nayax, 365 Retail Markets) supplies the machine side.",
      items: [
        { number: 1, title: "Member lookup endpoint", description: "GET /members/{id} returning member tier, status, opt-in flags. <500ms p95 latency. Used by P1-P8." },
        { number: 2, title: "Points read/write", description: "GET + POST /members/{id}/points with idempotency-key header to prevent double-credit on retry. <1s p95 latency. Used by P2, P3." },
        { number: 3, title: "Transaction authorization", description: "POST /transactions with member + amount + item-set; returns approval token + adjusted price. <2s p95 latency. Used by P3-P5." },
        { number: 4, title: "Pricing API", description: "GET /pricing/{sku}?member={id} returning effective price. Cached on-machine for offline operation with periodic refresh. Used by P4." },
        { number: 5, title: "Wallet balance + debit", description: "GET /wallet/{id}/balance and POST /wallet/{id}/debit with two-phase commit (authorize + capture). Used by P5." },
        { number: 6, title: "Coupon redeem", description: "POST /coupons/{code}/redeem with member-id, sku, amount. Idempotency required. Used by P6." },
        { number: 7, title: "Recommendation feed", description: "GET /recommendations/{id}?context=vending returning ranked SKU list. Cached on-machine; refresh hourly. Used by P7." },
        { number: 8, title: "Entitlement check", description: "GET /entitlements/{id}?sku= returning allowed / not-allowed + remaining-balance. <1s p95 latency. Used by P8." },
      ],
    },
    {
      heading: "3. Operator-side technical baseline",
      items: [
        { label: "Telemetry platform", value: "Cantaloupe Seed Pro, Nayax VPOS Touch, 365 Retail Markets ConnectedFresh, or Crane Streamware. All offer REST + webhook integration for transaction events." },
        { label: "Payment processor", value: "Stripe, USAePay, or operator-bundled (USA Technologies, Cantaloupe Connect). Tokenization must comply with PCI DSS v4 SAQ B-IP." },
        { label: "On-machine UI", value: "Class P/A equipment (USelect VM850, Crane Media, AiFi) supports custom UI overlay for loyalty branding. Class S equipment limited to peripheral QR reader for P1." },
        { label: "Offline behavior", value: "On-machine cache (pricing, member status, recommendation feed) refreshes hourly; transactions queue when offline and reconcile on reconnect." },
      ],
    },
    {
      heading: "4. Data-sharing agreement — template structure",
      paragraph:
        "Loyalty integration requires a written data-sharing agreement between the host (loyalty owner) and the operator (transaction collector). Use the structure below as the baseline. Add CCPA / CPRA + state-specific privacy provisions per the operating jurisdictions.",
      items: [
        { check: "Parties + purpose — Host as data controller; operator as data processor under GDPR / CCPA terminology" },
        { check: "Data fields shared — member ID, transaction amount, SKU, timestamp, location. NOT PII beyond member ID unless explicitly authorized" },
        { check: "Permitted use — solely for loyalty program operation + reporting back to host; no operator-side resale or secondary use" },
        { check: "Security — TLS 1.2+ in transit; AES-256 at rest; PCI DSS v4 attestation; SOC 2 Type II report annually" },
        { check: "Retention — operator retains 18 months for reconciliation; deletes on contract end + 90 days" },
        { check: "Breach notification — operator notifies host within 24 hr of suspected breach; coordinates with host on regulator + customer notice" },
        { check: "Audit rights — host may audit operator security + data-handling annually; 30-day notice" },
        { check: "CCPA / CPRA + state privacy law compliance — operator acknowledges service-provider obligations; host retains controller obligations" },
        { check: "Termination + return — on contract end, operator returns or destroys all member data; certifies in writing" },
      ],
    },
    {
      heading: "5. Implementation roadmap",
      items: [
        { number: 1, title: "Phase 1 — P1 identity-only pilot", description: "Weeks 1-4. QR scan + transaction logging on 5-10 machines. Validate API latency, error rate, and reconciliation pipeline. Decision gate before broader rollout." },
        { number: 2, title: "Phase 2 — P2/P3 points earn + redeem", description: "Weeks 5-12. Add points earn on all transactions; add redeem on subset of SKUs. Iterate on UI + edge-case handling (refund, partial dispense)." },
        { number: 3, title: "Phase 3 — P4 member pricing or P5 wallet", description: "Weeks 13-26. One of pricing or wallet, not both — choose based on member behavior data from Phase 2." },
        { number: 4, title: "Phase 4 — P6-P8 advanced", description: "Months 7-12. Coupon, recommendation, or subscription based on roadmap priority. Each is its own 8-12 week project." },
      ],
    },
    {
      heading: "6. KPI scorecard for loyalty integration",
      headers: ["Metric", "Baseline", "Target after integration"],
      rows: [
        ["Member transaction share", "0%", "30-50% within 6 months"],
        ["Average ticket — member", "Baseline", "+15-30%"],
        ["Repeat-purchase rate — member", "Baseline", "+25-50%"],
        ["Member-only SKU sell-through", "n/a", "≥ 80%"],
        ["API uptime", "n/a", "≥ 99.9% on host side"],
        ["Transaction reconciliation accuracy", "n/a", "≥ 99.95%"],
      ],
    },
    {
      heading: "7. Operational support structure",
      items: [
        { label: "Restock cadence", value: "Telemetry-driven, no change from baseline. Member-only SKU sell-through monitored weekly to avoid stockout on promotion days." },
        { label: "Service SLA — Tier 1", value: "Offline, payment failure, cold-chain — <24 hr ack + <24 hr resolution. API integration failure (operator side) — <4 hr ack + <8 hr resolution." },
        { label: "API SLA — Host side", value: "≥ 99.9% uptime; <2s p95 latency; <0.1% error rate. Operator falls back to cached pricing + transaction queue on API failure." },
        { label: "Quarterly business review", value: "Member share, ticket lift, redemption rate, API health, reconciliation accuracy, planogram action items." },
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, telemetry + API integration scoping, and data-sharing agreement structuring for retail loyalty programs.",
});

console.log("wrote "+"vending-retail-loyalty-programs");
