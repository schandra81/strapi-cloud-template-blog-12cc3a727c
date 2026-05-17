import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-management-hybrid-work",
  assetType: "pack",
  title: "Hybrid-Work Vending Restructure Pack",
  subtitle: "Occupancy analysis, equipment rightsizing, and commission renegotiation framework",
  intro:
    "Hybrid-work occupancy patterns have shifted post-2020 office demand by 30-50% in many markets per published JLL and CBRE occupancy studies. This pack helps facilities + procurement leaders restructure the vending program around actual badge-tap occupancy, rightsize equipment, and renegotiate commission with telemetry-derived velocity data — not 2019 assumptions.",
  sections: [
    {
      heading: "1. Occupancy baseline (the input to everything else)",
      paragraph:
        "Before any equipment or commission discussion, document actual occupancy by day-of-week for the trailing 90 days. Most large-floorplate offices show a Tuesday-Wednesday-Thursday peak with Monday/Friday troughs.",
      items: [
        { label: "Data source", value: "Badge-tap system (Lenel, HID, Brivo, Kastle, etc.) export of unique badges per day for trailing 90 days. Alternative: WiFi association data from network team." },
        { label: "Metrics to compute", value: "Average daily occupancy by day-of-week, peak-day occupancy, peak-hour occupancy, trough-day occupancy. Compare to 2019 baseline if available." },
        { label: "Reported pattern", value: "Kastle Systems' Back to Work Barometer reports peak-day occupancy frequently 50-65% of pre-pandemic; trough-day (Friday) often 25-40%." },
      ],
    },
    {
      heading: "2. Velocity reality check from operator telemetry",
      paragraph:
        "Pull 90-day per-machine, per-day-of-week transaction data from the operator. Compare to occupancy. Velocity-per-occupant should be roughly flat across days; if it isn't, planogram is the issue, not occupancy.",
      headers: ["Indicator", "What it suggests", "Action"],
      rows: [
        ["Overall velocity down 30-50%, velocity-per-occupant flat", "Occupancy decline is the dominant driver", "Rightsize equipment + renegotiate commission"],
        ["Velocity down more than occupancy", "Planogram or pricing has drifted", "Refresh planogram before equipment decisions"],
        ["Velocity down less than occupancy", "Per-occupant consumption up (in-office incentive)", "Maintain equipment; consider subsidy review"],
        ["Friday velocity collapse", "Friday is in-office-optional", "Pull a machine, or consolidate to one floor"],
      ],
    },
    {
      heading: "3. Equipment rightsizing options",
      items: [
        { number: 1, title: "Reduce machine count per floor", description: "Pull underutilized machines (sub-2,000 USD trailing-12-month gross). Consolidate to floors with peak occupancy. Operator typically waives removal fee on commission-bearing accounts." },
        { number: 2, title: "Swap full-line to compact / smart-cooler", description: "Compact smart-coolers (24-36 inch footprint) carry 50-80 SKUs with telemetry; appropriate for floors averaging under 40 occupants/day." },
        { number: 3, title: "Convert to micro-market on the highest-occupancy floor", description: "Where one floor concentrates 60%+ of in-office occupants on peak days, a micro-market (kiosk + open shelving + cooler bank) outperforms multi-floor vending. Telemetry, planogram breadth, and 24/7 access improve velocity per occupant 30-60% per published case studies." },
        { number: 4, title: "Shift to scheduled-service / fill-only", description: "For sub-30-occupant-day floors, replace operator route with scheduled-service (operator visits 1x/week) and a smaller equipment footprint." },
        { number: 5, title: "Consolidate to a single anchor + delivery", description: "One main breakroom (food + coffee + cold) plus operator-fulfilled office-coffee delivery to satellite floors. Eliminates underutilized machines entirely." },
      ],
    },
    {
      heading: "4. Commission renegotiation framework",
      paragraph:
        "Commission was originally set at 2019 volume assumptions. Lower volume changes operator unit economics: route labor, telemetry SaaS, and cost-of-goods are partly fixed. Operator margin compresses faster than revenue declines.",
      items: [
        { label: "Open the conversation with telemetry data", value: "Share the occupancy + velocity analysis. Acknowledge operator margin compression. Aim for a structure both sides sustain." },
        { label: "Tiered commission by gross threshold", value: "Below 15,000 USD/year: 0% commission; 15,000-30,000: 5%; 30,000-60,000: 10%; 60,000+: 15-20%. Aligns operator economics to volume reality." },
        { label: "Flat-fee service alternative", value: "Where annual gross < 12,000 USD per machine, a flat monthly service fee (e.g., 75-200 USD/machine/month) can keep service intact." },
        { label: "Equipment-removal pricing", value: "Negotiate zero or capped removal fee on each machine pulled as part of rightsize. Most operators accept on commission-bearing accounts." },
        { label: "Subsidy lever", value: "If maintaining current footprint is a retention/recruiting priority, host subsidy (price-down on selected SKUs) preserves member perception without raising commission." },
      ],
    },
    {
      heading: "5. Planogram updates for hybrid patterns",
      items: [
        { check: "Reduce shelf-stable SKU breadth (less stockpiling); increase fresh + grab-and-go for peak days." },
        { check: "Add coffee-companion SKUs (creamer cups, sweetener, snack bars) — coffee velocity holds even when full-meal velocity drops." },
        { check: "Add same-day-fresh on Tue/Wed/Thu peak; pull fresh from Friday route to avoid shrink." },
        { check: "Healthy-share floor maintained; wellness expectations have not dropped with hybrid." },
        { check: "Allergen labeling per FALCPA on each SKU; allergen summary signage on machine face." },
      ],
    },
    {
      heading: "6. Service-cadence rebalance",
      headers: ["Day", "Service action", "Rationale"],
      rows: [
        ["Monday", "Top-off only", "Lower in-office; avoid pre-stocking that wastes Friday-aged inventory"],
        ["Tuesday", "Full restock pre-shift", "Peak-day-1; full breadth available at start"],
        ["Wednesday", "Mid-day top-off (telemetry-triggered)", "Peak-day-2; multiple machines at fill threshold"],
        ["Thursday", "Top-off + planogram refresh", "Velocity-driven SKU swaps based on prior 3 days"],
        ["Friday", "Skip or fresh-pull only", "Lowest occupancy; pull fresh items to avoid shrink"],
      ],
    },
    {
      heading: "7. Member-communication template",
      items: [
        { check: "Send program-update note 14 days before any equipment change." },
        { check: "Explain rationale: 'We've reviewed actual usage and made changes to keep the program sustainable.'" },
        { check: "Direct to feedback channel (Slack, intranet form, in-app survey)." },
        { check: "Specify what's not changing (price points, healthy-share, refund process)." },
        { check: "Re-survey at 60 days post-change; document member NPS." },
      ],
    },
    {
      heading: "8. Pre-signing red flags on the new contract",
      items: [
        { check: "Operator refuses to share telemetry-derived per-day-of-week velocity." },
        { check: "Operator proposes longer term in exchange for equipment swap — exit terms must remain symmetric." },
        { check: "Removal fee on pulled machines exceeds 250 USD/machine on commission-bearing accounts." },
        { check: "Planogram changes locked to operator price list with no escalator cap." },
        { check: "Commission tiers ratcheted only one direction (up on volume increase, no symmetric step-down)." },
      ],
    },
  ],
  footer:
    "This pack is informational. Final contract amendments should be reviewed by your counsel. Occupancy data analysis benefits from coordination with your security/badge system administrator and IT/network team.",
});

console.log("wrote "+"vending-management-hybrid-work");
