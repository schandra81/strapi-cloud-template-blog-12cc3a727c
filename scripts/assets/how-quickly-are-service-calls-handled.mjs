import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-quickly-are-service-calls-handled",
  assetType: "pack",
  title: "Vending Service-Call SLA Pack",
  subtitle: "Four-tier SLA, refund standards, telemetry spec, credit mechanism, monthly scorecard",
  intro:
    "Service responsiveness is the single most-cited host complaint in NAMA's annual customer survey. This pack codifies a four-tier SLA framework, with telemetry, refunds, and a monthly scorecard a capable operator can attest to in writing.",
  sections: [
    {
      heading: "1. Four-tier SLA framework",
      paragraph:
        "Not every service event is the same urgency. The four-tier framework matches response time to business impact, keeping operator service cost sustainable while protecting host experience.",
      headers: ["Tier", "Examples", "Acknowledge SLA", "Resolve SLA"],
      rows: [
        ["Tier 1 — Critical", "Machine offline, cold-chain excursion, payment system down, security incident", "< 1 hour", "< 24 hours"],
        ["Tier 2 — Stockout / Hot SKU", "Top-10 SKU sold out, planogram outage", "< 4 hours", "< 48 hours"],
        ["Tier 3 — Standard", "Single SKU stockout, slot jam, planogram refresh request", "< 24 hours", "< 5 business days"],
        ["Tier 4 — Cosmetic", "Signage refresh, wrap touch-up, cabinet cleaning", "< 5 business days", "< 14 business days"],
      ],
    },
    {
      heading: "2. Telemetry spec — what enables the SLA",
      paragraph:
        "Without telemetry, an operator cannot meet a < 1-hour acknowledge SLA. The telemetry baseline below is non-negotiable for a Tier 1 program.",
      items: [
        { label: "Hardware", value: "Cellular modem (LTE Cat-M1 or NB-IoT) on every machine. Cantaloupe Seed, Nayax VPOS Touch, 365 Retail Markets ePort, AWM Smart Shelf." },
        { label: "Heartbeat interval", value: "≤ 15 minutes. Sub-5-minute for cold-chain placements." },
        { label: "Monitored events", value: "Online/offline, payment-system status, internal temperature (refrigerated), door-open, compressor short-cycle, bill-validator jam, motor stall." },
        { label: "Alert routing", value: "Tier 1 events → operator on-call SMS + email + dashboard. Tier 2-4 events → ticketing queue with auto-priority." },
        { label: "Host visibility", value: "Read-only dashboard or weekly digest with per-machine uptime, last-restock, ticket status." },
      ],
    },
    {
      heading: "3. Refund standards",
      paragraph:
        "Consumer refund flow is part of the SLA. Slow refunds undermine member trust and generate disproportionate complaints to host facilities team.",
      items: [
        { number: 1, title: "Cashless refund", description: "Self-service via on-machine touchpad, operator app, or QR-code-to-refund. Auto-credit to original payment method within 24 hours of trigger." },
        { number: 2, title: "Cash refund", description: "Member submits refund slip with name + transaction time. Credit on next route visit (≤ 7 days) or check / Venmo dispatch (≤ 14 days)." },
        { number: 3, title: "Refund audit", description: "Monthly refund report to host with reason codes (no-vend, stockout, jam, cold-chain, expired). Refund rate > 2% of transactions triggers planogram + machine quality review." },
        { number: 4, title: "Member transparency", description: "Refund-flow instructions on machine face, in member app, and in host onboarding email — three touchpoints minimum." },
      ],
    },
    {
      heading: "4. Credit mechanism — SLA non-compliance",
      paragraph:
        "Capable operators include service-credit clauses in the contract. The framework below sets credit at a level meaningful to host but sustainable to operator.",
      headers: ["Breach", "Credit to host"],
      rows: [
        ["Tier 1 acknowledge SLA missed", "$50 per occurrence"],
        ["Tier 1 resolve SLA missed (>24h)", "$100 per occurrence + waive month's commission floor"],
        ["Tier 2 acknowledge or resolve SLA missed", "$25 per occurrence"],
        ["Cold-chain product-loss event", "Full SKU replacement + month commission credit"],
        ["Refund SLA missed (>24h cashless)", "$10 per occurrence to host, full refund to member"],
        ["Uptime < 95% for the month", "Pro-rata commission credit (e.g., 92% uptime = 8% commission credit)"],
      ],
    },
    {
      heading: "5. Monthly service scorecard template",
      paragraph:
        "Operator delivers this scorecard by 10th business day of the following month. Each metric is telemetry-backed.",
      items: [
        { label: "Uptime %", value: "Per machine, per month. Target ≥ 98% for snack/beverage; ≥ 99% for fresh/cold-chain." },
        { label: "Ticket counts by tier", value: "Total tickets, with mean and 90th-percentile resolve time per tier." },
        { label: "SLA adherence %", value: "% of tickets that met acknowledge SLA + % that met resolve SLA, separately." },
        { label: "Refund volume + reason codes", value: "Total refunds, % of transactions, top reason." },
        { label: "Stockout incidents", value: "Per machine, per SKU. Time-to-restock from telemetry alert." },
        { label: "Cold-chain excursions", value: "Count, duration, root-cause, product-loss disposition." },
        { label: "Service-credit summary", value: "Credits earned by host under section 4 clauses." },
      ],
    },
    {
      heading: "6. Site-side preparation that improves SLA outcomes",
      items: [
        { check: "Service-access clearance documented at install (36 in front, 6 in sides + rear)." },
        { check: "Cellular signal verified > -95 dBm at install; fallback Wi-Fi credentialed if signal marginal." },
        { check: "Single point of contact (POC) at host for after-hours access — name, mobile, badge access procedure." },
        { check: "Power circuit dedicated, surge-protected, with breaker labeled." },
        { check: "Site listed in operator dispatch system with directions, parking, loading-dock notes." },
        { check: "Spare key or access code stored with operator dispatch (with host facilities approval)." },
      ],
    },
    {
      heading: "7. Contract clauses to require",
      items: [
        { check: "Four-tier SLA defined as Section 1 above, with telemetry-backed evidence." },
        { check: "Monthly service scorecard delivered by 10th business day, signed." },
        { check: "Service-credit schedule per Section 4, with cap at 25% of month's net revenue." },
        { check: "Refund SLA — 24-hour cashless / 7-day cash — with audit log." },
        { check: "30-day cure period before termination-for-cause on SLA breach pattern (3+ months below 90% adherence)." },
        { check: "Audit rights — host can pull dispatch records and reconcile against scorecard quarterly." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface operators that can attest to telemetry, four-tier SLA, refund SLA, and monthly scorecard delivery. Specific service-call resolve time depends on route density and after-hours coverage in your service area — described honestly at intake.",
    },
  ],
  footer:
    "SLA tier definitions and credit amounts are reference values. Negotiate to the operating reality of your portfolio.",
});

console.log("wrote " + "how-quickly-are-service-calls-handled");
