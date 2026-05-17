import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-3pl-facilities",
  assetType: "pack",
  title: "3PL Vending Program Design Pack",
  subtitle: "Layered equipment stack, peak-season plan, and contract SLA framework",
  intro:
    "3PL facilities run with workforce headcount that flexes 2–4x between baseline and peak season (Q4 retail, project surges, customer-specific peaks). Vending program design that works year-round needs a layered equipment stack and a peak-aware service model. This pack consolidates a layered stack, a 90-day peak-season plan, and a contract SLA framework for 3PL facility services + customer success teams.",
  sections: [
    {
      heading: "1. The layered stack",
      paragraph:
        "A 3PL workforce that flexes 2–4x cannot be served with a single equipment class. Layer three tiers so peak demand doesn't break the baseline program.",
      headers: ["Layer", "Equipment", "Capacity role", "When deployed"],
      rows: [
        ["Layer 1 — baseline", "2–4 traditional cabinets in break room", "Year-round day-to-day coverage", "Always-on"],
        ["Layer 2 — break-room core", "Smart cooler / micro-market + coffee station", "Real-meal + planogram depth", "Always-on; peak weeks add SKU rotation"],
        ["Layer 3 — peak surge", "1–3 portable / temporary cabinets + extended-hour restock", "Q4 / project-surge overflow", "Deployed for 8–14 week peak window"],
      ],
    },
    {
      heading: "2. Peak-season plan — Q4 / surge template",
      paragraph:
        "Q4 retail 3PLs commonly run shift counts 200–400% above baseline October–January. Plan the surge formally — not as an afterthought — and contract for it.",
      items: [
        { number: 1, title: "T-90 days — capacity review", description: "Operator + facility joint review of peak-window forecast: headcount projection, shift pattern (e.g., adding 12-hour weekend shifts), heat / cold exposure plan. Confirm Layer 3 surge equipment availability + temporary install plan." },
        { number: 2, title: "T-60 days — planogram tilt", description: "Shift planogram: higher hydration (heat) or hot-drink (cold) share, more protein snack, more real-meal, larger pack sizes. Telemetry validates against historic prior-peak data." },
        { number: 3, title: "T-30 days — install + onboarding", description: "Layer 3 equipment installed; signage + onboarding comms; subsidy mechanic tested with seasonal/temp workforce badge IDs." },
        { number: 4, title: "Peak weeks — daily-cadence restock", description: "High-volume zones move to daily restock; cold-chain mid-window top-off; service tickets monitored on 4-hour acknowledge clock for Tier 1." },
        { number: 5, title: "T+30 days post-peak — reconcile + retract", description: "Reconcile subsidy, refunds, waste; pull Layer 3 equipment; capture lessons for next peak cycle." },
      ],
    },
    {
      heading: "3. Contract SLA framework",
      items: [
        { label: "Telemetry baseline", value: "Cellular LTE; sub-15-minute heartbeat; per-shift velocity report; cold-chain alert > 41°F for > 30 min." },
        { label: "Uptime target", value: "98% machine-level monthly. Peak-season uptime target raised to 98.5% with daily reporting cadence." },
        { label: "Tier 1 (revenue/cold/payment) acknowledge + resolve", value: "Baseline: < 4 hour ack, < 24 hour resolve. Peak: < 2 hour ack, < 12 hour resolve. After-hours phone line." },
        { label: "Tier 2 (stockout / planogram) acknowledge + resolve", value: "Baseline: 24–48 hr ack, 5–7 day resolve. Peak: 12–24 hr ack, 3–5 day resolve." },
        { label: "Tier 3 (cosmetic / signage)", value: "5-day acknowledge, 14-day resolve year-round." },
        { label: "Refund SLA", value: "App / SMS / phone refund. Cashless auto-credit < 24 hr. Refund rate > 2% triggers planogram + machine quality review." },
        { label: "Customer-specific SKU support", value: "If 3PL client requires customer-branded or restricted SKUs, operator confirms commissary capacity at T-90." },
        { label: "Termination + transition", value: "30-day termination for material SLA breach (≥ 2 consecutive months < 95% uptime or > 2 Tier 1 breaches in 90 days)." },
      ],
    },
    {
      heading: "4. Customer-specific service model",
      paragraph:
        "3PLs often serve multiple end customers with different worker programs (Customer A subsidizes vending; Customer B does not; Customer C has its own branded wellness program). Below: how to structure operator delivery without cross-charging.",
      items: [
        { number: 1, title: "Segregated subsidy", description: "Subsidy per shift loaded against badge ID tied to customer assignment in WMS / HR. Customer A workers get $5/shift; Customer B workers get $0 — same equipment, segregated mechanic." },
        { number: 2, title: "Customer-branded SKU corner", description: "Optional dedicated micro-market shelf with customer-branded SKUs (e.g., 3PL serving a beverage brand may stock that brand at slight discount). Operator commissary confirms supply path." },
        { number: 3, title: "Customer reporting roll-up", description: "Operator dashboard supports per-customer view: spend, subsidy utilization, velocity by SKU category, refund rate. Used in QBR with 3PL client." },
        { number: 4, title: "DEI + worker dignity overlay", description: "Customer-specified planogram inclusivity (halal, kosher, vegan share) honored across customer footprint." },
      ],
    },
    {
      heading: "5. Pricing + commission framework",
      headers: ["Site profile", "Revenue/month", "Commission to host", "Service fee"],
      rows: [
        ["Baseline 3PL DC, 150 FTE", "$1,200 – $3,800", "0–5% revenue", "$0–$120/month/machine"],
        ["Peak surge added 200 FTE", "+$1,600 – $4,200 (8–14 weeks)", "5–10% revenue if program > $4k/mo", "$0 typical with peak revenue"],
        ["Multi-customer site, 350+ FTE", "$5,000 – $14,000", "10–15% revenue + subsidy admin", "$0; sometimes operator pays setup credit"],
        ["Remote 3PL spur, < 80 FTE", "< $800", "0%", "$140–$280/month/machine (below-threshold)"],
      ],
    },
    {
      heading: "6. Integration with 3PL operations stack",
      items: [
        { check: "WMS handoff — shift assignment + customer-allocation file (CSV/SFTP) for subsidy segregation" },
        { check: "Payroll-deduct integration — Workday / Kronos / UKG bi-weekly file format" },
        { check: "Badge access — HID iCLASS / Prox / Seos; opaque employee ID only" },
        { check: "Network — cellular LTE primary; facility VLAN secondary with PCI segmentation" },
        { check: "EHS coordination — peak surge equipment placement reviewed for egress, sprinkler, forklift path" },
        { check: "HR — onboarding comms in worker first-day packet; FAQ + refund flow QR-coded" },
        { check: "Customer success — QBR cadence shared with 3PL client where customer subsidizes vending" },
      ],
    },
    {
      heading: "7. Indicative annual budget — 250-FTE 3PL with Q4 surge to 500",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Hardware (operator-funded)", "$0", "Layer 1 + 2 capital is operator-funded in full-service"],
        ["Peak surge equipment + install", "$0 – $4,800", "Sometimes operator-funded; sometimes line-item if temporary"],
        ["Subsidy budget (year)", "$30,000 – $120,000", "$5/shift × ~240 shifts × ~50% participation × 250 baseline + peak uplift"],
        ["Below-threshold service fee", "$0 if revenue > $250/wk/machine", "Applies to slow zones or remote spurs"],
        ["Quarterly reviews + customer reporting", "$1,200 – $3,200", "Account manager + customer dashboard build"],
        ["Total program", "$31,200 – $128,000/year", "Driven primarily by subsidy"],
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate 3PL vending through operators that can attest to layered-stack capability, peak-season scaling, customer-segregated subsidy, and per-customer reporting. Capability documentation provided on request during scoping. We do not claim engagements at any specific named 3PL; capability is operator-attestable capacity.",
    },
  ],
  footer:
    "Working reference for 3PL facility services, HR, and customer-success teams. Customer-specific contract terms should be reviewed against operator's master services agreement.",
});

console.log("wrote "+"vending-in-3pl-facilities");
