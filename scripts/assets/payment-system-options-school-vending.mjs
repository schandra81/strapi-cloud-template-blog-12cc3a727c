import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "payment-system-options-school-vending",
  assetType: "playbook",
  title: "School Vending Payment Playbook",
  subtitle: "K-12 prepaid integration, higher-ed campus badge, compliance framework, DPA structure",
  intro:
    "School vending payment splits into K-12 (parent-funded prepaid accounts + cashless cards) and higher-ed (campus badge + meal plan + dining dollars). Both add a privacy + compliance layer — FERPA, COPPA, PCI DSS v4, state child-data laws — that consumer vending does not face. This playbook codifies the patterns, the compliance framework, and the data-processing-agreement structure that procurement reviewers expect.",
  sections: [
    {
      heading: "1. Five payment patterns",
      headers: ["Pattern", "K-12 / Higher-ed", "Integrations", "Compliance load"],
      rows: [
        ["P1 — Cashless only (no integration)", "Both", "Stripe / Nayax / Cantaloupe", "PCI DSS v4 SAQ B-IP"],
        ["P2 — Parent-funded prepaid account", "K-12 primary", "MySchoolBucks / SchoolCafé / LINQ Connect / TITAN", "PCI DSS + FERPA + COPPA + DPA"],
        ["P3 — Student lunch-account integration", "K-12 primary", "PrimeroEdge / Heartland / Nutrikids", "PCI DSS + FERPA + USDA child-nutrition + DPA"],
        ["P4 — Campus card + meal plan", "Higher-ed primary", "Blackboard Transact / CBORD Odyssey / Atrium / TouchNet", "PCI DSS + FERPA + GLBA where loan-funded"],
        ["P5 — Hybrid (P1 + P2/P3 or P1 + P4)", "Both", "Multiple", "Aggregate of integrated patterns"],
      ],
    },
    {
      heading: "2. K-12 prepaid integration",
      paragraph:
        "Parent-funded prepaid platforms (MySchoolBucks, SchoolCafé, LINQ Connect, TITAN) integrate with the cafeteria POS first and extend to vending second. Operator-side telemetry (Cantaloupe, Nayax) reads a student PIN or card swipe and authorizes against the prepaid balance via API.",
      items: [
        { number: 1, title: "Identification mechanism", description: "Student PIN at on-machine keypad, mag-stripe student ID swipe, or barcoded student ID scan. Some districts use proximity card or app-based QR." },
        { number: 2, title: "Authorization flow", description: "Operator POS → prepaid platform API → balance check → debit + transaction record. <2s p95 latency target. Idempotency-key required to prevent double-debit on retry." },
        { number: 3, title: "Reconciliation", description: "Daily settlement from prepaid platform to operator via ACH; per-transaction record retained by both for audit. Variance investigation if daily settlement differs > 0.05% from operator telemetry." },
        { number: 4, title: "Refund flow", description: "Refund credits prepaid balance within 24 hr; refund report to district nutrition services + parent visibility through prepaid app." },
      ],
    },
    {
      heading: "3. Higher-ed campus badge + meal plan",
      items: [
        { number: 1, title: "Campus card platforms", description: "Blackboard Transact (formerly Blackboard), CBORD Odyssey + Get, Atrium, TouchNet OneCard. Each integrates with operator POS via REST or proprietary card-network protocol." },
        { number: 2, title: "Tender types", description: "(a) Dining dollars / flex dollars — closed-loop currency. (b) Meal-plan equivalency — meal swipe → $5-$10 vending equivalent. (c) Bonus bucks — sponsor/wellness-funded. (d) Direct campus-card debit." },
        { number: 3, title: "Late-night + dorm placement", description: "Campus card-only access after dining hall closure; common pattern in dorm + library 24/7 placements. Operator POS recognizes card status (active / hold / inactive)." },
        { number: 4, title: "Cross-campus portability", description: "Multi-campus systems may allow campus card to spend at any system campus; operator POS validates against the system-wide card network." },
      ],
    },
    {
      heading: "4. Compliance framework",
      paragraph:
        "School vending payment crosses four federal regimes plus state child-data laws. Operator + district share responsibility and that division must be in writing.",
      items: [
        { label: "FERPA — Family Educational Rights and Privacy Act (20 USC §1232g)", value: "Student records (including transaction records tied to a student) are protected. Operator acts as 'school official' with legitimate educational interest under 34 CFR §99.31(a)(1)(i)(B). Written agreement required defining permitted use + retention + deletion." },
        { label: "COPPA — Children's Online Privacy Protection Act (15 USC §6501-§6506)", value: "Applies to data collection from children under 13. K-12 payment platforms generally fall under COPPA; operator must avoid collecting any data beyond what's needed for the transaction." },
        { label: "PCI DSS v4 — Payment Card Industry Data Security Standard", value: "Operator merchant level (typically Level 3 or 4 for vending). SAQ B-IP attestation for tokenized cashless; SAQ D for stored cardholder data. Annual attestation required." },
        { label: "State child-data laws", value: "CA AB-1584, CT Public Act 16-189, NY Ed Law §2-d, IL SOPPA, CO HB-1135, TN HB-1931 — vendor + DPA requirements. Operator must comply with each state where district operates." },
        { label: "USDA child-nutrition + Smart Snacks", value: "7 CFR §210.11 + §220.12. Where vending integrates with cafeteria lunch program, USDA audit reach extends to vending transaction records during school day." },
      ],
    },
    {
      heading: "5. Data Processing Agreement — required structure",
      items: [
        { check: "Parties + purpose — district as controller; operator + prepaid platform as processors. Define data flow." },
        { check: "Data fields — student identifier (district-assigned ID, not SSN), grade, transaction amount, SKU, timestamp, location. NO direct PII beyond ID unless explicitly authorized." },
        { check: "FERPA designation — operator as 'school official' with legitimate educational interest; written designation per 34 CFR §99.31(a)(1)(i)(B)" },
        { check: "COPPA representations — operator confirms no direct collection from children under 13; relies on district as COPPA-authorized agent" },
        { check: "Security — TLS 1.2+ in transit; AES-256 at rest; PCI DSS v4 attestation; SOC 2 Type II annual report; encryption-key management" },
        { check: "Retention — operator retains 18 months for reconciliation; deletes within 90 days of contract end + provides certificate of destruction" },
        { check: "Breach notification — operator notifies district within 24 hr of suspected breach; coordinates with district on parent + regulator + AG notice per state law" },
        { check: "Audit rights — district may audit operator annually; right to require third-party penetration test results" },
        { check: "Subcontractor flow-down — operator binds all subprocessors (telemetry, payment processor, host) to equivalent terms" },
        { check: "State-specific addenda — append CA AB-1584, NY Ed Law 2-d, IL SOPPA, CO HB-1135 riders per operating jurisdictions" },
      ],
    },
    {
      heading: "6. Operational support structure",
      items: [
        { label: "Restock cadence", value: "Telemetry-driven; no change from base. Reconciliation pipeline runs daily; variance > 0.05% triggers investigation." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain excursion, payment failure — <24 hr ack + <24 hr resolution. Payment integration failure (operator side) — <4 hr ack + <8 hr resolution." },
        { label: "Prepaid platform SLA", value: "≥ 99.9% uptime; <2s p95 latency; <0.1% error rate. Operator falls back to cashless on prepaid API failure; FERPA-compliant transaction queue on operator side." },
        { label: "Refund flow", value: "Refund credits prepaid balance or campus card within 24 hr. Cash refund handled by school front office per district policy." },
        { label: "Annual review", value: "DPA + PCI DSS attestation + SOC 2 + insurance certificate reviewed at contract anniversary; renewed with current documents on file." },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Payment system uptime", "≥ 99.9%", "Monthly"],
        ["Daily reconciliation variance", "≤ 0.05%", "Daily"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Prepaid / campus-card transaction share", "Trended", "Quarterly"],
        ["PCI DSS + SOC 2 attestation status", "Current", "Annual"],
        ["DPA + state addenda compliance", "Current per operating jurisdiction", "Annual"],
        ["Breach incidents", "0", "Real-time + annual"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, prepaid + campus-card integration scoping, and FERPA + COPPA + PCI DSS + state-law DPA drafting for K-12 districts and higher-ed systems.",
});

console.log("wrote "+"payment-system-options-school-vending");
