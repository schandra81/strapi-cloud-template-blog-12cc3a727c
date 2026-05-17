import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "subscription-vending-gyms",
  assetType: "pack",
  title: "Subscription Vending Gym Pack",
  subtitle: "Tier-platform integration + three subscription structures + abuse-prevention + monthly reconciliation",
  intro:
    "Subscription vending bolts a recurring entitlement (e.g., 1 shake per day, 10 bars per month, unlimited hydration) onto the gym membership. It lifts vending velocity 25-50% but introduces abuse-prevention, reconciliation, and platform-integration requirements. This pack covers the three structures, the platform stack, and how to keep the economics honest.",
  sections: [
    {
      heading: "1. Three subscription structures — pick before signing",
      paragraph:
        "All subscription models share one challenge: gym pays the operator for product, gym charges member as subscription. The three structures differ in how that math runs.",
      headers: ["Structure", "Mechanics", "Gym risk", "Operator risk"],
      rows: [
        ["A. Add-on entitlement", "Member pays $X/month bolt-on; entitled to N items/month at machine", "Low (member-paid)", "Reconciliation only"],
        ["B. Bundled in tier", "Premium tier auto-includes vending allowance; gym absorbs cost", "Medium (margin compression)", "Low"],
        ["C. Pure pass-through", "Member subscribes via gym app; gym remits per-redemption to operator", "Low", "Medium (cash flow lag)"],
      ],
    },
    {
      heading: "2. Tier-platform integration stack",
      paragraph:
        "Subscriptions only work if the gym software, the member-app, and the operator's vending platform exchange entitlement + redemption events.",
      items: [
        { number: 1, title: "Gym software (entitlement source-of-truth)", description: "Mindbody Business, Glofox, ClubReady, GymMaster, MyZone, Wodify. Manages subscription billing + tier rules. API exposes 'member X has entitlement Y this month'." },
        { number: 2, title: "Member app (member-facing surface)", description: "App reads entitlement balance + shows remaining redemptions. Authenticates member at machine (fob, QR, deep-link)." },
        { number: 3, title: "Operator vending platform (machine + redemption)", description: "Nayax, Cantaloupe, 365 Retail Markets, AWM Smart Shelf. Receives entitlement lookup at vend time; deducts allowance; posts redemption event." },
        { number: 4, title: "Reconciliation system", description: "Monthly join of gym billing data + operator redemption data; identifies orphan redemptions, missed entitlements, suspected abuse." },
      ],
    },
    {
      heading: "3. Abuse-prevention controls",
      paragraph:
        "An entitlement bolt-on without abuse controls bleeds margin within 30 days. Build these into the contract + the integration.",
      items: [
        { check: "Daily cap: max N redemptions per member per 24-hour period; configurable per SKU (e.g., 1 shake/day, 2 bars/day)." },
        { check: "SKU eligibility list: not every machine SKU is in the entitlement (e.g., premium recovery + ambient bars in; cold-brew coffee out)." },
        { check: "Geofence: redemption only valid when member checks in (gym software check-in event within last 4 hours)." },
        { check: "Rolling-30-day cap: prevents stockpiling at month-end then double-dipping early next month." },
        { check: "Velocity flag: any member exceeding 95th percentile redemption rate -> auto-review email + temporary hold pending review." },
        { check: "Member-tier validation at vend: real-time check vs gym software; lapsed members blocked." },
        { check: "Audit log: every entitlement check + redemption event logged with timestamp, machine ID, member ID for 24 months." },
      ],
    },
    {
      heading: "4. Pricing math — what the gym actually clears",
      paragraph:
        "Subscription bolt-on price must cover (a) operator wholesale per redemption, (b) telemetry / interchange, (c) margin to the gym. Worked example for a 10-bar / month plan at $19.99/month.",
      headers: ["Line", "Calculation", "Value"],
      rows: [
        ["Member subscription", "Add-on", "$19.99"],
        ["Bars redeemed (target)", "10 × $1.65 wholesale", "$16.50"],
        ["Operator service fee", "Per-redemption $0.10 × 10", "$1.00"],
        ["Interchange (Stripe / Mindbody)", "2.9% + $0.30", "$0.88"],
        ["Net to gym (best case)", "subscription - cost", "$1.61"],
        ["Net to gym (worst case — 12 redemptions)", "Member over-uses cap allowance", "-$1.69"],
      ],
    },
    {
      heading: "5. Monthly reconciliation framework",
      paragraph:
        "Run reconciliation between days 5-10 of each month. Pull three data sources, join on member ID + month, identify variances.",
      items: [
        { number: 1, title: "Pull gym billing report", description: "All subscriptions billed in the month, by member ID + plan." },
        { number: 2, title: "Pull operator redemption report", description: "All entitlement-redemptions in the month, by member ID + machine + SKU + timestamp." },
        { number: 3, title: "Pull gym software check-in events", description: "Member check-in events; validates redemption-vs-check-in correlation." },
        { number: 4, title: "Join + identify variances", description: "Orphan redemptions (redemption without active subscription), missed entitlements (subscription paid but zero redemptions), abuse flags (cap exceeded)." },
        { number: 5, title: "Resolve + post adjustments", description: "Refund operator for redemptions out of scope; credit members for service outages; net commission line item updated." },
        { number: 6, title: "Quarterly trend review", description: "Plot redemption rate by member cohort, by month, by SKU; tune cap + SKU eligibility list." },
      ],
    },
    {
      heading: "6. Operator capabilities required",
      items: [
        { check: "Real-time entitlement-lookup API at vend time (sub-second response or graceful timeout)." },
        { check: "Daily + rolling-30-day cap engine — configurable per plan." },
        { check: "SKU eligibility list per plan — configurable." },
        { check: "Geofence / check-in window validation." },
        { check: "Member-ID authentication via fob, QR, or member-app deep-link." },
        { check: "Monthly redemption report in machine-readable format (CSV / Parquet) for the gym's reconciliation pipeline." },
        { check: "PCI-DSS attestation maintained; gym is not in PCI scope for the cashless portion that bypasses the subscription." },
      ],
    },
    {
      heading: "7. Common failure modes + how to prevent",
      headers: ["Failure mode", "Cause", "Prevention"],
      rows: [
        ["Stockouts on entitled SKUs", "Subscription drives concentrated demand", "Operator restocks 2-3× weekly on entitlement-eligible SKUs"],
        ["Member confusion 'I paid but it charged me'", "App doesn't show balance at machine", "Member-app shows balance + 'tap to redeem' flow"],
        ["Reconciliation lag > 30 days", "Manual joins, no automation", "Build data pipeline; close books by day 10 of next month"],
        ["Abuse via shared fobs", "Fob handed off between members", "Photo-verification at first-of-month redemption; velocity flagging"],
        ["Margin erosion", "Members redeem at 100% of cap", "Set cap 20-30% above target redemption (typical 60-70% redemption); price accordingly"],
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["Plan design + pricing model", "2-3 weeks", "Gym leadership"],
        ["Operator API discovery", "2-3 weeks", "Gym CTO + operator"],
        ["Gym software API discovery (entitlement source)", "2-3 weeks", "Gym CTO + gym software vendor"],
        ["Integration build", "8-12 weeks", "Gym app team"],
        ["Abuse-prevention controls + reconciliation pipeline", "4-6 weeks", "Gym data team"],
        ["Closed-beta with 200 members", "30-60 days", "Gym + operator"],
        ["Full rollout", "1-2 weeks", "Gym"],
        ["First reconciliation cycle", "Day 5-10 of month 1 post-launch", "Gym finance"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to support subscription gym vending with real-time entitlement APIs and reconciliation reporting.",
});

console.log("wrote "+"subscription-vending-gyms");
