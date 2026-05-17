import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "ai-coolers-loyalty-programs",
  assetType: "playbook",
  title: "AI Cooler Loyalty Integration Playbook",
  subtitle: "SSO, accrual, tier-based pricing, and behavior triggers",
  intro:
    "AI coolers (camera-vision smart fridges with frictionless checkout) create the cleanest place to run a loyalty program inside vending. Identity is already established at the door tap, transactions are per-SKU, and the member experience supports tier-aware pricing without slowing throughput. This playbook codifies the operational practices that keep loyalty programs at adoption parity with the operator app and at SSO-friction parity with corporate single-sign-on. It maps to PCI DSS v4.0, ADA Section 309.4, NIST IR 8259 (IoT baseline), and standard FTC unfair/deceptive-practice guidance.",
  sections: [
    {
      heading: "1. Identity + SSO baseline",
      paragraph:
        "Loyalty value compounds with identity persistence. Every transaction must resolve to a stable member ID without member action.",
      items: [
        { label: "Identity source", value: "Corporate IdP (Okta, Azure AD, Ping) or host badge system (HID iCLASS, Lenel, Brivo). Operator integrates via SAML 2.0, OIDC, or badge tap (MIFARE, iCLASS)." },
        { label: "SSO friction target", value: "Door-tap to identity-resolved state in ≤ 2 seconds. Manual login fallback retained for app-only members." },
        { label: "Joiner/leaver", value: "IdP joiner provisions member account within 24 hours; leaver de-provisions within 24 hours of HR ticket. Service-account credentials rotated annually." },
        { label: "MFA", value: "Phishing-resistant MFA (FIDO2 / WebAuthn) on operator admin console; member identity inherits from corporate SSO MFA, not duplicated at the cooler." },
      ],
    },
    {
      heading: "2. Accrual mechanics",
      items: [
        { number: 1, title: "Base accrual", description: "1 point per 1 USD spent (or per host-defined unit). Posted to member balance within 24 hours of transaction settlement. Refunded transactions reverse points within 48 hours." },
        { number: 2, title: "Healthy-share bonus", description: "1.5x or 2x accrual on healthy-flagged SKUs (NANA threshold: ≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from fat). Drives wellness committee KPI without changing planogram." },
        { number: 3, title: "Streak bonus", description: "Bonus on 5+ consecutive weekdays of activity. Capped at one bonus per member per month to prevent gaming." },
        { number: 4, title: "Referral / activation bonus", description: "One-time bonus on first transaction (activation) and on referred member's first transaction (referral). 90-day expiry to avoid drift." },
        { number: 5, title: "Negative signals", description: "Refund flag reverses accrual. Excessive refund pattern (> 5% of transactions for a single member over 30 days) triggers review, not auto-block." },
      ],
    },
    {
      heading: "3. Tier-based pricing",
      paragraph:
        "Tier-based pricing is the lever most affected by privacy and labor-law analysis. Confirm with HR + legal before launch where tier eligibility intersects with protected-class factors.",
      headers: ["Tier", "Pricing posture", "Eligibility example"],
      rows: [
        ["L1 — Member (default)", "Catalog price", "All identity-resolved members"],
        ["L2 — Active (4+ visits/month)", "5-10% discount on selected SKUs", "Behavioral; reset monthly"],
        ["L3 — Healthy-streak", "10% on healthy SKUs", "Behavioral, opt-in"],
        ["L4 — Wellness program", "20% on healthy SKUs (host-subsidized)", "Voluntary enrollment in host wellness program"],
        ["L5 — Tenure / role (host-defined)", "Set by host", "Reviewed by HR/legal for protected-class neutrality"],
      ],
    },
    {
      heading: "4. Behavior triggers + notifications",
      items: [
        { label: "Re-engagement", value: "Member inactive 14 days → push notification with a single-use bonus. Send rate-limited to 1 per 30 days." },
        { label: "Healthy-share nudge", value: "Member viewed healthy SKU but selected non-healthy → next-visit prompt suggests a comparable healthy alternative (opt-in)." },
        { label: "Stock alert", value: "Member's frequently-purchased SKU back in stock after stockout → notification with SKU." },
        { label: "Birthday / anniversary", value: "Optional, opt-in, single-use bonus. No demographic collection beyond what member voluntarily provides." },
        { label: "Notification cadence cap", value: "Maximum 3 marketing notifications per member per week; transactional (refund, receipt) unlimited." },
      ],
    },
    {
      heading: "5. Privacy + data architecture",
      items: [
        { check: "Member identity + balance + transaction history stored; no compensation, no benefits-eligibility, no protected-class data." },
        { check: "Camera-vision raw frames not retained — feature vectors only; deletion within 24 hours of cart finalization." },
        { check: "Member dashboard exposes data collected, purpose, retention, and 'delete my data' button. Deletion within 30 days." },
        { check: "Consent log retained for the duration of the relationship plus 3 years." },
        { check: "Sub-processor list disclosed; DPA signed; data residency stated (US-based for US placements)." },
        { check: "Camera-vision model card available under NDA; bias-testing methodology documented." },
      ],
    },
    {
      heading: "6. Accessibility + safety guardrails",
      items: [
        { check: "ADA Section 309.4 — door, screen, and any input within reach range and ≤ 5 lbf operating force." },
        { check: "Allergen labeling per FALCPA on every SKU; member allergen list (opt-in) surfaced at door tap." },
        { check: "Healthy-share floor enforced — loyalty mechanics cannot displace healthy planogram allocation." },
        { check: "No exclusionary pricing on essentials (water, basic snacks) — must remain at base tier for all members." },
        { check: "Tier-eligibility rules reviewed for protected-class neutrality with HR + legal before launch." },
      ],
    },
    {
      heading: "7. Pilot KPIs (90 days)",
      headers: ["Metric", "Definition", "Target"],
      rows: [
        ["Activation", "% of eligible members with first transaction in 30 days", "60% at corporate, 40% at residential"],
        ["Repeat", "% of activated with 2nd in 30 days", "70%"],
        ["Loyalty-enrollment opt-in", "% of activated who enroll in loyalty (where opt-in)", "50%+"],
        ["Per-member monthly transactions", "Median", "8+ at corporate"],
        ["Healthy-share consumption", "% of transactions on healthy SKUs", "Tracks at or above planogram allocation"],
        ["NPS — loyalty members", "In-app survey at days 30/60/90", "+30 minimum"],
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Tier eligibility tied to demographic / protected-class factors." },
        { check: "Raw camera frames retained past 24 hours by default." },
        { check: "Notification cadence uncapped — risk of member fatigue + spam reports." },
        { check: "Operator declines to publish model card or DPA." },
        { check: "Refund flow does not reverse loyalty accrual — accounting drift risk." },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal, privacy, or HR advice. Tier-pricing programs that intersect with employee benefits or compensation should be reviewed by HR, payroll, and counsel before launch.",
});

console.log("wrote "+"ai-coolers-loyalty-programs");
