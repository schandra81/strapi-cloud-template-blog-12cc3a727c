import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-uptime-venues",
  assetType: "playbook",
  title: "Entertainment Venue Vending Uptime Playbook",
  subtitle: "Telemetry, modern OEM, quarterly preventive maintenance, and event-day operations",
  intro:
    "Entertainment venue vending uptime is graded against the concession agreement, not the operator's internal standard. A 95% network uptime is typical concession-contract floor; top-quartile venues hold 98%+. This playbook codifies the telemetry stack, OEM equipment standard, preventive-maintenance cadence, and event-day operations that keep a venue program above contracted SLA without surprise penalty.",
  sections: [
    {
      heading: "1. Telemetry and observability",
      paragraph:
        "Real-time telemetry is the foundation of uptime. Without it, machines fail silently and the operator only discovers issues at the next route visit. With it, the operator dispatches before the customer notices.",
      items: [
        { label: "Heartbeat", value: "≤ 5 minute heartbeat during events, ≤ 15 minute baseline. Cellular modem with battery backup so the operator is notified of power loss even when the machine is fully de-energized." },
        { label: "Telemetry provider", value: "Cantaloupe Seed Pro, Nayax VPOS Touch, USA Technologies eSuds, or comparable. All integrate with venue BI through REST API or scheduled SFTP." },
        { label: "Alerts", value: "Tier 1 (offline > 30 min, temp excursion, payment failure) — routed to operator on-call rotation 24/7 with 4-hour event-day SLA. Tier 2 (single-SKU stockout) — batched to next route." },
        { label: "Per-machine dashboard", value: "Online state, last restock, last service ticket, current product availability percentage, internal temperature for refrigerated, payment success rate. Read-only access for venue concessions director." },
        { label: "Metrics retention", value: "24 months online, 5 years archived. Aligns with most concession-agreement audit-rights periods." },
      ],
    },
    {
      heading: "2. Modern-OEM equipment standard",
      paragraph:
        "Equipment age and OEM choice are the single largest drivers of venue uptime. Pre-2015 hardware lacks IoT, runs on obsolete refrigeration components, and frequently exceeds the FDA Food Code 3-501.16 cold-chain envelope when condenser performance degrades.",
      headers: ["Equipment class", "Notable OEM models", "Typical uptime band", "Refrigeration"],
      rows: [
        ["Modern combo (snack + cold)", "Crane Merchant Media, AMS Sensit 3, USI 3535", "98-99%", "R290 hydrocarbon (low GWP), EC fan motors"],
        ["Beverage-only", "Royal Vendors RVCD, Vendo V21, Fuji Electric FV-5", "98-99%", "R290, EC fan motors, anti-frost evaporator"],
        ["Outdoor / event plaza", "Crane Genesis B2B outdoor, Royal Vendors RVRDV", "96-98%", "Wider operating temp envelope -10 to 120°F"],
        ["Pre-2015 carry-over", "AMS Sensit 2, AP 122, Crane National 167", "85-92%", "R134a (high GWP), aging condensers, no IoT"],
      ],
    },
    {
      heading: "3. Quarterly preventive maintenance",
      items: [
        { number: 1, title: "Quarterly PM visit checklist", description: "Refrigeration cycle inspection (compressor amp draw, condenser fan operation, evaporator coil cleaning, refrigerant charge verification per OEM service manual). Bill validator and coin mech calibration. Payment terminal firmware update. Cellular modem signal-strength check. ADA reach-range and signage inspection." },
        { number: 2, title: "Filter and gasket replacement", description: "Condenser air filter quarterly; door gasket inspection quarterly, replacement annually or on damage; bill validator anti-fishing flap inspection." },
        { number: 3, title: "Calibration and firmware", description: "Payment terminal firmware aligned with current EMV certification (PCI PTS 6.x current). Bill validator firmware aligned with current US currency (USD note series 2017+)." },
        { number: 4, title: "Cleaning protocol", description: "Daily wipe-down by route crew; weekly interior deep-clean; quarterly refrigeration deep-clean. EPA-registered sanitizer (FDA Food Code 4-501.114 sanitizer concentration verified with test strip)." },
        { number: 5, title: "Documentation", description: "PM log retained per machine, available to venue on request. Aligns with ASHRAE Standard 23 and ANSI/AHRI Standard 540 refrigeration documentation." },
      ],
    },
    {
      heading: "4. Event-day operations",
      paragraph:
        "Event-day demand spikes 5-15× baseline. Standard route service cannot keep up. Operators with venue programs run event-day surge crews dedicated to high-traffic placements.",
      items: [
        { label: "Pre-event restock", value: "Surge crew restocks all machines 2-3 hours before doors open. Telemetry-driven priority list (machines below 70% stock get full restock; machines above 70% get top-up). Refrigerated temp verified < 40°F per FDA Food Code 3-501.16." },
        { label: "Mid-event monitoring", value: "Telemetry dashboard staffed continuously during event. Stockout alerts route to on-site or near-site crew for immediate top-off. Payment-failure alerts trigger technician dispatch." },
        { label: "Post-event restock", value: "Within 24 hours of event end, all machines refilled, cash-vault collected, refunds processed, planogram adherence verified." },
        { label: "Surge crew composition", value: "Per 10-15 machines: 1 route driver, 1 refresher, 1 technician on-call. Larger venues (50+ machines) scale to dedicated event-night operations team of 5-10." },
      ],
    },
    {
      heading: "5. Service SLA (event-day-aware)",
      headers: ["Issue", "Non-event-day SLA", "Event-day SLA", "Penalty"],
      rows: [
        ["Machine offline", "< 8 hours", "< 1 hour", "1% commission abatement per percentage point below 95% monthly uptime"],
        ["Payment system down", "< 4 hours", "< 30 minutes", "Same"],
        ["Temperature excursion (refrigerated)", "< 4 hours (FDA Food Code disposal trigger)", "< 1 hour", "Product disposal cost to operator if > 4 hour excursion"],
        ["Single-SKU stockout (top-20)", "< 24 hours", "< 1 hour during event", "Same commission abatement"],
        ["Cosmetic / signage", "< 7 days", "< 24 hours", "Reputation only"],
      ],
    },
    {
      heading: "6. Refund and reliability",
      items: [
        { check: "Refund flow via on-machine touchpad, operator app, or SMS-to-refund. Cashless auto-credit within 24 hours; cash refund at next event or by mail check within 7 days." },
        { check: "Refund rate < 1% transactions tracked monthly; > 2% triggers planogram + equipment quality review." },
        { check: "Refund log shared quarterly with venue concessions director." },
        { check: "Pre-event walkthrough by operator route lead and venue concessions checker verifies machines stocked, working, signage current — within 90 minutes of doors opening." },
        { check: "Post-event service report to venue concessions: per-machine uptime during event, transactions, gross, refunds, incidents." },
      ],
    },
    {
      heading: "7. Capex and equipment-replacement plan",
      paragraph:
        "Sustained uptime requires equipment lifecycle planning. Pre-2015 machines drag the network uptime average down 3-7 percentage points. Replacement schedule should be part of the concession agreement.",
      headers: ["Equipment age", "Recommended action", "Typical capex"],
      rows: [
        ["0-5 years", "Standard PM only", "$0 incremental"],
        ["5-8 years", "PM + refrigeration overhaul mid-life", "$300-$600 per machine"],
        ["8-10 years", "PM + payment terminal refresh + IoT upgrade", "$800-$1,500 per machine"],
        ["10+ years", "Replace with modern OEM", "$4,500-$7,500 per machine (full snack+cold)"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the telemetry, PM cadence, and event-day operations to your venue type, event mix, and concession-agreement SLA.",
});

console.log("wrote "+"vending-machine-uptime-venues");
