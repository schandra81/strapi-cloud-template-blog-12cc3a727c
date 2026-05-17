import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "large-scale-logistics-vending",
  assetType: "playbook",
  title: "Large-Scale Logistics Vending Operations Playbook",
  subtitle: "Master agreement, account team model, fleet management cadence",
  intro:
    "A 3,000-worker fulfillment center or a multi-site logistics network is a different operator-management problem than a single break room. This playbook codifies the master-agreement structure, account-team model, and fleet-management cadence a national-scale operator should be equipped to deliver.",
  sections: [
    {
      heading: "1. Master agreement architecture",
      paragraph:
        "At national or multi-site scale, the contract sits in three layers: master agreement at the corporate level, site addendum at each property, and quarterly SLA review.",
      items: [
        { number: 1, title: "Master agreement (corporate level)", description: "Pricing framework (commission or fixed-fee schedule), SLA tiers, insurance + indemnity, data + privacy posture, ESG attestations, change-management process. Term 3-5 years with 90-day renegotiation window." },
        { number: 2, title: "Site addendum (per facility)", description: "Headcount + shift mix, equipment list, planogram baseline, restock cadence, on-site coordinator, EHS PPE requirements, badging/access procedure, local sales-tax permit number." },
        { number: 3, title: "Quarterly review", description: "Per-site KPI report rolled up to corporate. Issues escalated to the operator account team within 5 business days; resolution tracked against master-agreement SLA." },
        { number: 4, title: "Termination + transition", description: "180-day notice typical at multi-site scale. Transition plan includes asset removal, equipment-buyout option (where the host elects), planogram + SKU handoff, and final-month reconciliation." },
      ],
    },
    {
      heading: "2. Account team model",
      paragraph:
        "An operator serving a multi-site logistics network typically structures the account team in four roles. The host should know which person owns each escalation.",
      headers: ["Role", "Span", "Cadence with host", "Authority"],
      rows: [
        ["National Account Director", "Master agreement, executive sponsor", "Quarterly + ad-hoc", "Commercial + commercial dispute"],
        ["Regional Operations Manager", "5-15 sites in a region", "Monthly site visit + weekly call", "Operational SLA + planogram"],
        ["Site Lead (route supervisor)", "Single facility (or 2-3 small sites)", "Weekly walk + daily restock visits", "Day-to-day restock + minor service"],
        ["Customer-Success Analyst", "Telemetry, reporting, dashboard", "Monthly report + dashboard support", "Data accuracy + reporting"],
      ],
    },
    {
      heading: "3. Fleet management cadence",
      paragraph:
        "Equipment fleets at large scale rotate on a documented capital cycle. Operator should be able to attest to fleet age, maintenance status, and refresh roadmap.",
      items: [
        { label: "Asset register", value: "Per-machine: model, serial, install date, refrigerant type, last PM service, current uptime, planogram capacity. Updated at every PM visit." },
        { label: "Capital cycle", value: "Refrigerated equipment 7-10 year useful life; non-refrigerated 10-15 years; payment readers + telemetry modules 5-7 years. Operator funds replacement under master agreement at no incremental charge to host." },
        { label: "PM schedule — weekly", value: "Route supervisor visual inspection: cleanliness, signage, payment reader function, dispense mechanism." },
        { label: "PM schedule — monthly", value: "Technician PM: refrigerant pressure check, fan/condenser cleaning, payment reader firmware, telemetry heartbeat verification." },
        { label: "PM schedule — quarterly", value: "Comprehensive: door gaskets, coil cleaning, electrical inspection, deep clean of dispense mechanism, payment terminal recertification." },
        { label: "PM schedule — annual", value: "Compressor + refrigerant cycle inspection (EPA Section 608 certified technician); ENERGY STAR verification; ADA recertification site visit; insurance + license verification." },
      ],
    },
    {
      heading: "4. Telemetry + dashboard",
      items: [
        { number: 1, title: "Real-time visibility", description: "Cellular sub-15-minute heartbeat from every machine. Dashboard rolls up to facility, region, and corporate views. Host receives access for facility, regional, and corporate users." },
        { number: 2, title: "Alert routing", description: "Tier 1 alerts (offline > 30 min, temperature excursion, payment down) route to operator Regional Operations Manager + Site Lead; host on-site coordinator copied where the contract elects." },
        { number: 3, title: "Reporting suite", description: "Monthly: uptime, velocity, refund volume, scope 2 kWh. Quarterly: SLA adherence, planogram refresh recommendations, ESG roll-up. Annual: total cost of program + benchmark vs prior year." },
        { number: 4, title: "Data export", description: "API or SFTP export to host data lake / BI environment. Supports the host's procurement + sustainability reporting needs." },
      ],
    },
    {
      heading: "5. Insurance + indemnity at scale",
      items: [
        { check: "General liability $5M per occurrence / $10M aggregate" },
        { check: "Umbrella / excess liability $25M" },
        { check: "Product liability (food-borne illness coverage) $5M minimum" },
        { check: "Auto liability $2M for route vehicles" },
        { check: "Workers' compensation per state statute" },
        { check: "Cyber liability $5M (covering payment data + telemetry breach)" },
        { check: "Host listed as additional insured + waiver of subrogation" },
        { check: "Mutual indemnity with carve-outs reviewed by host General Counsel" },
        { check: "Annual certificate-of-insurance refresh + 30-day cancellation notice" },
      ],
    },
    {
      heading: "6. ESG + reporting framework",
      items: [
        { label: "Scope 2 emissions report", value: "Quarterly per-machine kWh × eGRID subregion factor = tCO2e. Aggregated to facility, region, corporate." },
        { label: "Refrigerant inventory + transition", value: "Per-machine refrigerant type + charge weight; replacement path to R-290 within 36 months of contract effective date." },
        { label: "Equipment end-of-life", value: "EPA Section 608 refrigerant reclaim attestation; scrap metal recycling; e-waste handling for payment + telemetry modules." },
        { label: "Workforce health metrics", value: "Healthy-SKU share of facings + velocity. Reported to host wellness or sustainability team for inclusion in CDP / GRI / SASB disclosures." },
        { label: "Operator scope 3 contribution", value: "Operator route emissions reported where the host's scope 3 disclosure includes vendor transport." },
      ],
    },
    {
      heading: "7. SLA matrix",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain", "Offline > 30 min, payment down, temperature excursion", "30 minutes", "4 hours on-site"],
        ["Tier 2 — stockout / planogram", "Single-SKU stockout, planogram refresh", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
        ["Escalation — multi-site", "Recurring issue at ≥ 2 sites in 30 days", "Same-day to Regional Operations Manager", "Joint root-cause review within 14 days"],
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Uptime + SLA breach rate by site + region + total" },
        { check: "Per-site velocity vs planogram-target ratio" },
        { check: "Scope 2 emissions report" },
        { check: "Fleet age + refresh roadmap status" },
        { check: "Refund + dispute volume" },
        { check: "Worker feedback summary by site" },
        { check: "Open Tier 1/Tier 2 escalations" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal advice. Coordinate with corporate procurement, General Counsel, sustainability, and site EHS leads before contracting at multi-site scale. LetUsVending is equipped to arrange operators with documented national-network capability.",
});

console.log("wrote "+"large-scale-logistics-vending");
