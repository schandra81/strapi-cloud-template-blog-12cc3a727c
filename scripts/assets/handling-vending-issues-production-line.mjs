import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "handling-vending-issues-production-line",
  assetType: "pack",
  title: "Production-Line Vending Issue-Handling Pack",
  subtitle: "Telemetry SLA, self-service refund, and escalation path",
  intro:
    "When a vending machine fails on a production-shift break, the productive-time penalty compounds quickly — 30 workers losing 5 minutes hunting for an alternate beverage equals 2.5 work-hours. This pack consolidates three working references that close the loop fast: telemetry SLA structure, self-service refund flow, and escalation path for facility services + HR.",
  sections: [
    {
      heading: "1. Telemetry SLA — what to require",
      paragraph:
        "Without sub-15-minute telemetry, operators can't detect failures faster than the next route visit (1–4 days away). Below: telemetry baselines that make a fast-resolution SLA enforceable.",
      items: [
        { label: "Heartbeat cadence", value: "Cellular LTE; ≤ 15-minute heartbeat; operator NOC monitoring 24/7." },
        { label: "Failure classes detected automatically", value: "Offline > 30 min, payment-system down, refrigeration excursion > 41°F × 30 min (FDA Food Code §3-501.16), stockout to threshold (typical ≤ 10% slots), cash mechanism jam, door tamper." },
        { label: "Operator-side alerting", value: "Tier 1 alerts to NOC + route supervisor + on-call tech via SMS + email. Acknowledge clock starts at alert timestamp, not at human review." },
        { label: "Site-side dashboard", value: "Facility services + HR have view access to dashboard; per-machine status, recent failures, open tickets, refund volume." },
        { label: "Daily ops report", value: "Auto-emailed each morning to designated facility contact: uptime previous 24 hr, any incidents, open tickets, planned visits." },
      ],
    },
    {
      heading: "2. SLA structure — three tiers",
      headers: ["Tier", "Trigger", "Acknowledge", "Resolve", "Remedy"],
      rows: [
        ["Tier 1 — revenue/cold/payment", "Machine offline > 30 min OR payment down OR cold-chain excursion", "< 4 hr", "< 24 hr", "Service credit if missed > 2x/90-day"],
        ["Tier 2 — stockout / planogram refresh", "Single SKU stockout OR planogram change request", "24–48 hr", "5–7 day", "Tracked at QBR"],
        ["Tier 3 — cosmetic / signage", "Label refresh, light bulb, wrap refresh, cabinet clean", "5 day", "14 day", "Tracked at QBR"],
        ["After-hours escalation", "Tier 1 outside business hours", "< 8 hr (overnight)", "Next morning", "Phone line + named on-call"],
      ],
    },
    {
      heading: "3. Self-service refund flow",
      paragraph:
        "Worker-initiated refund within 60 seconds is the single biggest driver of trust. Multi-channel flow with auto-credit removes friction.",
      items: [
        { number: 1, title: "App-based refund", value: "", description: "Worker scans QR code at machine; opens operator app or web flow; selects machine ID + SKU + reason; auto-credit to card or wallet within 24 hours for cashless transaction." },
        { number: 2, title: "SMS refund", description: "Worker texts machine ID + SKU + reason code to operator-supplied number; auto-credit within 24 hours. Useful when network or phone-data is poor." },
        { number: 3, title: "Phone refund", description: "Worker calls operator's 24/7 customer service; representative processes refund + opens service ticket if pattern emerging." },
        { number: 4, title: "Cash refund (rare)", description: "Worker fills out refund slip at front desk; operator credits at next visit (≤ 7 days). Site issues check via HR if operator delay > 14 days; reconciliation at next QBR." },
        { number: 5, title: "Refund audit at QBR", description: "Quarterly refund report from operator. Refund rate > 2% of transactions triggers planogram + machine quality review. Reason-code distribution reviewed for failure patterns (e.g., motor failure, payment timeout, hung product)." },
      ],
    },
    {
      heading: "4. Escalation path — when refund alone isn't enough",
      paragraph:
        "Refund handles individual transactions. Escalation handles patterns. Define the escalation path before the issues happen.",
      items: [
        { number: 1, title: "Level 1 — operator route + NOC", description: "Tier 1/2/3 ticket open in operator system. Route tech dispatched on standard SLA clock." },
        { number: 2, title: "Level 2 — account manager", description: "Named operator AM contacted by facility services if Tier 1 SLA missed OR ≥ 3 Tier 1 incidents in 30 days. AM owns root cause + corrective action plan." },
        { number: 3, title: "Level 3 — service credit", description: "If contract-defined breach threshold met (typically > 2 Tier 1 misses in 90 days OR uptime < 95% for ≥ 2 consecutive months), automatic service credit applied to next invoice — 50% of 90-day service fee typical." },
        { number: 4, title: "Level 4 — termination notice", description: "Material breach (uptime < 90% for 2 months OR systemic compliance failure) triggers 30-day cure period; if uncured, termination + transition to alternate operator." },
        { number: 5, title: "Level 5 — third-party arbitration / litigation", description: "Last resort. Most contracts specify mediation first (AAA, JAMS) before arbitration. Site-side counsel involvement typical." },
      ],
    },
    {
      heading: "5. Production-line-specific complications",
      paragraph:
        "Production line workers can't leave the line during a 10-minute break. Vending failures hit harder than they do in office settings. Below: production-specific complications + mitigation.",
      items: [
        { check: "Short break window (10 min): worker can't wait in line if machine slow — second cabinet redundancy in same break room mitigates" },
        { check: "PPE doffing time eats into break: place machines so PPE doff + transact + don is < 5 min round-trip" },
        { check: "Shift change crush: 50+ workers transacting in a 10-minute window stresses payment + dispense — provision for 1 cabinet per 30 workers in shift-change footprint" },
        { check: "Cold storage workers can't doff insulated gloves at machine: card reader must operate with glove (operator confirms spec)" },
        { check: "Noise (> 85 dBA on floor): refund flow via app rather than verbal call helps; visual + tactile interface critical" },
        { check: "Night shift (10 PM–6 AM): no on-site management — refund must be self-service via app/SMS, not front-desk-mediated" },
      ],
    },
    {
      heading: "6. Indicative cost of issue-handling overlay",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["After-hours phone line / on-call", "$0 (in full-service)", "Verify in contract; some operators charge if low-volume site"],
        ["NOC monitoring + Tier 1 alerting", "$0 (bundled)", "Telemetry seat fee included"],
        ["Site-side dashboard access", "$0 (bundled)", "Confirm 5–10 user seats included"],
        ["Service credit (when triggered)", "Negative — credit to facility", "Typically 50% of 90-day service fee per clause"],
        ["Quarterly review + reason-code analysis", "$300 – $700/qtr", "Account manager + dashboard build"],
        ["Operator transition (worst case)", "$2,000 – $8,000 one-time", "Recompete + reinstall"],
      ],
    },
    {
      heading: "7. Quarterly review template",
      items: [
        { check: "Tier 1 / Tier 2 / Tier 3 ticket counts + SLA adherence" },
        { check: "Uptime per machine, per month" },
        { check: "Refund rate + reason-code distribution" },
        { check: "Recurring failure patterns — same machine, same SKU, same time-of-day" },
        { check: "After-hours incident response review (if any)" },
        { check: "Escalation events + resolution (any Level 2+)" },
        { check: "Service credits issued (if any) reconciled against invoice" },
        { check: "Action items + owner + due date" },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate production-line vending issue-handling through operators that can attest to sub-15-minute telemetry, three-tier SLA structure, multi-channel self-service refund, and contract-defined escalation. Capability documentation provided on request during scoping. We do not claim engagements at any specific named production-line site; framing is operator-attestable capacity.",
    },
  ],
  footer:
    "Working reference for facility services, HR, and operator partners. SLA clauses and service-credit remedies should be reviewed by counsel and incorporated into the master services agreement.",
});

console.log("wrote "+"handling-vending-issues-production-line");
