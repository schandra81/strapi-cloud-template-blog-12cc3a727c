import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-grow-your-vending-business",
  assetType: "checklist",
  title: "Vending Business Growth Framework",
  subtitle: "Six-dimension shift checklist, structured-account RFP capability matrix, eight-phase growth playbook",
  intro:
    "Use this framework when moving from a 10-25 machine route to a structured 75-300 machine operation. Six operational dimensions must shift simultaneously; the eight-phase playbook below sequences that shift over 18-24 months.",
  sections: [
    {
      heading: "Six-dimension shift checklist",
      paragraph:
        "Single-operator routes that try to grow without shifting all six dimensions stall around 30-40 machines, where the founder's manual restock + service capacity is saturated.",
      headers: ["Dimension", "Owner-operator (10-25 machines)", "Structured operator (75-300 machines)"],
      rows: [
        ["Restock model", "Founder restocks manually", "Telemetry-driven; W-2 driver/merchandiser per route"],
        ["Service model", "Founder services + repairs", "Field service technician + parts inventory + SLA tiers"],
        ["Payment systems", "Mix of legacy + retrofit cashless", "100% PCI-DSS v4.0 cashless on every machine"],
        ["Reporting", "Spreadsheet-tracked sales", "BI dashboard (Cantaloupe / Nayax / Lightspeed) per machine + per route"],
        ["Account management", "Founder relationships", "Dedicated account manager per 30-50 accounts with QBR cadence"],
        ["Insurance + compliance", "Basic liability", "$2M product liability + cyber + state-specific compliance attestations"],
      ],
    },
    {
      heading: "Structured-account RFP capability matrix",
      paragraph:
        "Above 50 employees, most prospects issue RFPs scored on capability — not price. Use this matrix to self-score your own operation before responding.",
      items: [
        { check: "Telemetry on 100% of machines — sub-15-minute heartbeat with per-SKU velocity." },
        { check: "PCI-DSS v4.0 attestation (SAQ-C-VT or ROC) with current date." },
        { check: "ADA Section 308 annual recertification process documented." },
        { check: "FDA Food Code 2022 cold-chain attestation for refrigerated SKUs." },
        { check: "Service SLA tiers (Tier-1 < 24 hr, Tier-2 < 7 day) with credits documented." },
        { check: "Refund flow: app + on-machine + SMS; refund-rate KPI < 2%." },
        { check: "Planogram refresh cadence 45-60 days based on velocity." },
        { check: "QBR cadence quarterly with stockout-rate, refund-rate, action items." },
        { check: "Sample monthly + quarterly reports (anonymized) ready to share." },
        { check: "Three same-metro client references ready." },
      ],
    },
    {
      heading: "Eight-phase growth playbook (months 1-24)",
      items: [
        { number: 1, title: "Months 1-3 — Telemetry retrofit + baseline", description: "Retrofit Cantaloupe / Nayax / equivalent on every active machine. Establish per-machine baseline (uptime, stockout incidents, revenue, refund rate)." },
        { number: 2, title: "Months 2-4 — PCI-DSS attestation + cashless 100%", description: "Complete SAQ-C-VT for v4.0. Retrofit cashless on any legacy machine; retire machines that can't be retrofitted economically." },
        { number: 3, title: "Months 3-6 — First W-2 driver/merchandiser", description: "Hire first full-time driver covering 25-40 stops. Document SOP for restock + service + refund handling." },
        { number: 4, title: "Months 5-9 — Account management role", description: "First account manager (initially founder, eventually dedicated hire) running QBR cadence on top 10 accounts. Documented planogram refresh cycle." },
        { number: 5, title: "Months 6-12 — Compliance kit + insurance upgrade", description: "Product liability to $2M; cyber liability ≥ $1M; ADA + cold-chain attestation processes documented; state-specific addenda template ready." },
        { number: 6, title: "Months 9-15 — RFP capability rolled into sales motion", description: "Capability matrix becomes the sales pitch (replaces price-anchored sales). Win rate on RFPs > 50K-employee prospects climbs from 5-10% to 25-35%." },
        { number: 7, title: "Months 12-18 — Field service tech + parts inventory", description: "Second technical hire (field service) carries parts inventory; Tier-1 SLA improves to ≥ 95% < 24 hours." },
        { number: 8, title: "Months 18-24 — Scaled BI + multi-region planning", description: "BI dashboard rolled out to every account manager; second region or warehouse hub launched once core route exceeds 100 machines within drive-time radius." },
      ],
    },
    {
      heading: "Common stall points + corrective actions",
      items: [
        { number: 1, title: "Stall at 30-40 machines (founder service saturation)", description: "Action: Hire driver/merchandiser before adding more stops. Add a service tech once driver covers 35+ stops." },
        { number: 2, title: "Stall at 50-75 machines (capability gap on RFPs)", description: "Action: Complete the structured RFP capability matrix; PCI-DSS, ADA, cold-chain attestations are required for accounts above 75 employees." },
        { number: 3, title: "Stall at 100 machines (drive-time + warehouse capacity)", description: "Action: Second regional warehouse OR consolidate to higher-velocity stops. Drive-time > 45 minutes per stop kills route economics." },
        { number: 4, title: "Stall at 150-200 machines (account-management bandwidth)", description: "Action: Second account manager; QBR rotation; structured renewal pipeline ≥ 90 days before MSA term ends." },
      ],
    },
    {
      heading: "KPIs to track quarterly",
      items: [
        { label: "Route economics", value: "Revenue per machine per month; revenue per drive-time hour; gross margin per route." },
        { label: "Service health", value: "Uptime %, Tier-1 SLA adherence %, stockout incidents per machine, refund rate %." },
        { label: "Account health", value: "Account retention rate (target ≥ 90% annual); NPS or CSAT (target ≥ 50); renewal rate at MSA expiry (target ≥ 80%)." },
        { label: "Sales pipeline", value: "RFPs in flight; win rate by audience size; new-account pipeline 90 / 180 / 360 days." },
        { label: "Compliance", value: "PCI-DSS attestation current; ADA recertification current; cold-chain attestation current; COI current." },
      ],
    },
  ],
  footer:
    "This framework is operational guidance for owner-operators planning a structured growth path. Adapt KPIs and milestones to your route economics and regional drive-time realities.",
});

console.log("wrote "+"how-to-grow-your-vending-business");
