import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "24-7-vending-solutions-for-shift-workers",
  assetType: "playbook",
  title: "24/7 Shift-Work Vending Operational Playbook",
  subtitle: "Restock cadence, service SLA, shift-aware planogram, and refund procedure",
  intro:
    "This playbook codifies the operating practices that keep a 24/7 vending program running at 98%+ uptime across three shifts. Each section maps to a measurable SLA your operator can attest to in writing.",
  sections: [
    {
      heading: "1. Telemetry baseline",
      items: [
        { label: "Required telemetry", value: "Cellular-modem-enabled machines with sub-15-minute heartbeat. Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable." },
        { label: "Metrics monitored", value: "Online/offline status, last-restock timestamp, per-SKU velocity, cash/cashless mix, payment-failure rate, internal temperature for refrigerated units." },
        { label: "Alert thresholds", value: "Offline > 30 minutes triggers operator alert. Temperature excursion outside 35-40°F (refrigerated) triggers immediate alert with 4-hour SLA." },
      ],
    },
    {
      heading: "2. Restock cadence by shift volume",
      headers: ["Shift volume", "Visits per week", "Pre-shift restock", "Peak coverage"],
      rows: [
        ["High (200+ workers/shift)", "3-4", "Before shift-1 start (5-6 AM)", "Dedicated surge crew during peak transitions"],
        ["Medium (100-200 workers/shift)", "2-3", "Before shift-1 start", "Telemetry-driven mid-shift top-off"],
        ["Low (under 100 workers/shift)", "1-2", "Off-peak window", "On-demand based on telemetry"],
      ],
    },
    {
      heading: "3. Service SLA (operator-side)",
      items: [
        { number: 1, title: "Tier 1 — revenue-critical / cold-chain / payment failure", description: "<24 hour acknowledgement, <24 hour resolution. Examples: machine offline, payment system down, temperature excursion." },
        { number: 2, title: "Tier 2 — stockout / planogram refresh", description: "24-48 hour acknowledgement, 5-7 day resolution. Examples: single SKU stockout, planogram update request." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "5-day acknowledgement, 14-day resolution. Examples: signage replacement, cabinet cleaning, label refresh." },
      ],
    },
    {
      heading: "4. Shift-aware planogram",
      paragraph:
        "Shift-1 (day) and shift-3 (overnight) workers have different purchase patterns. Shift-1 weights breakfast + lunch; shift-3 weights caffeine + hot snacks + comfort foods. Telemetry tracks per-shift velocity so the planogram adjusts each quarterly review.",
      items: [
        { label: "Shift-1 (6 AM – 2 PM)", value: "Breakfast bars, fresh fruit, yogurt, coffee, water, balanced lunch combo." },
        { label: "Shift-2 (2 PM – 10 PM)", value: "Snacks + sodas + energy drinks + lunch leftovers." },
        { label: "Shift-3 (10 PM – 6 AM)", value: "Caffeinated beverages, hot drinks, comfort snacks, calorie-dense meal replacements." },
      ],
    },
    {
      heading: "5. Refund procedure",
      items: [
        { number: 1, title: "Member-initiated refund", description: "Member triggers refund through operator app, on-machine touchpad, or SMS-to-refund number. Auto-credit within 24 hours for cashless transactions." },
        { number: 2, title: "Cash refund", description: "Member fills out refund slip; operator credits at next visit (max 7 days) or issues check via host HR/admin where applicable." },
        { number: 3, title: "Refund audit", description: "Quarterly refund report from operator to host. Refund rate > 2% of transactions triggers planogram + machine quality review." },
      ],
    },
    {
      heading: "6. Quarterly business review checklist",
      items: [
        { check: "Uptime report (per-machine, per-month over the quarter)" },
        { check: "Per-shift velocity report (shift-1 vs shift-2 vs shift-3)" },
        { check: "Stockout incidents + resolution time" },
        { check: "Refund volume + reason codes" },
        { check: "Service ticket SLA adherence" },
        { check: "Planogram refresh recommendations" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Update the SLA + cadence sections to match your specific operator contract.",
});

console.log("wrote sample playbook");
