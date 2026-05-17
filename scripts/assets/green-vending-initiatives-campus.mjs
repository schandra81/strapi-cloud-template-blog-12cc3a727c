import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "green-vending-initiatives-campus",
  assetType: "rfp template",
  title: "Campus Green-Vending RFP Template",
  subtitle: "Sustainability specification, AASHE STARS reporting alignment, and bonus structures for university procurement",
  intro:
    "University green-vending RFPs are increasingly scored on AASHE STARS (Sustainability Tracking, Assessment & Rating System) credit alignment, Scope 3 emissions reduction commitments under the Second Nature Carbon Commitment, and packaging-waste reduction tied to the institution's zero-waste goals. This RFP template gives the sustainability office, procurement, and auxiliary services a defensible green-vending RFP with explicit sustainability spec, STARS reporting alignment, and a bonus structure that rewards operators who exceed minimum sustainability targets.",
  sections: [
    {
      heading: "1. RFP scope + AASHE STARS alignment",
      paragraph:
        "Vending sustainability touches multiple AASHE STARS credit areas. The RFP scope should reference each credit explicitly so the operator response can be scored against STARS reporting requirements.",
      headers: ["AASHE STARS credit", "Vending contribution", "Operator response required"],
      rows: [
        ["OP-5: Building Energy Use", "ENERGY STAR machines reduce per-device energy 30-50%", "ENERGY STAR fleet % + kWh per device baseline"],
        ["OP-6: Clean and Renewable Energy", "Renewable-energy-powered route fleet or operations facility", "Renewable energy % of operator operations"],
        ["OP-7: Food + Beverage Purchasing", "Local + organic + fair-trade SKUs in planogram", "Local/organic/fair-trade SKU share, by category"],
        ["OP-18: Waste Minimization + Diversion", "Recyclable packaging share + machine-side recycling", "Packaging recyclability % + on-route diversion %"],
        ["OP-22: Outdoor Air Quality (Refrigerants)", "AIM Act compliant refrigerants, HFC phase-down", "Refrigerant type per refrigerated device + transition plan"],
        ["AC-9: Research (Living Lab)", "Telemetry data shared for student research", "Data-sharing arrangement for sustainability research"],
      ],
    },
    {
      heading: "2. Equipment sustainability specification",
      paragraph:
        "Specify the equipment sustainability requirement at the SKU level. Operators that cannot meet these gating items are disqualified before scoring begins.",
      items: [
        { number: 1, title: "ENERGY STAR certification", description: "100% of refrigerated vending machines installed under this contract must be ENERGY STAR certified per the ENERGY STAR Refrigerated Beverage Vending Machines specification (current version). New deployments only; existing machines covered by refresh schedule." },
        { number: 2, title: "Refrigerant compliance", description: "All refrigerated devices use AIM Act-compliant refrigerants (R-290 propane, R-454C, or R-513A as of 2026 phase-down schedule). Disclose refrigerant type per device with the response." },
        { number: 3, title: "LED illumination", description: "100% LED lighting on all installed devices. No CFL or halogen interior or exterior illumination." },
        { number: 4, title: "Low-power standby", description: "Refrigerated devices support low-power standby mode during overnight hours where occupancy data supports it; verified per ENERGY STAR spec." },
        { number: 5, title: "Telemetry-driven route optimization", description: "Cellular telemetry on 100% of devices; restock routes optimized weekly using telemetry-driven demand signals (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable platform)." },
      ],
    },
    {
      heading: "3. Planogram sustainability requirement",
      paragraph:
        "Campus dining sustainability programs typically commit to local, organic, fair-trade, and recyclable-packaging targets. Vending planogram must align.",
      items: [
        { label: "Local SKU share", value: "≥ 15% of SKU units sold sourced within the state (or within 250 miles where the institution defines 'local' differently). Tracked quarterly." },
        { label: "Organic + certified-sustainable SKU share", value: "≥ 10% of SKU units USDA Organic, Rainforest Alliance, Fair Trade USA, or Marine Stewardship Council certified. Tracked quarterly." },
        { label: "Recyclable packaging share", value: "≥ 80% of SKU primary packaging is recyclable or compostable per the institution's hauler-accepted materials list. Tracked quarterly." },
        { label: "Beverage container alignment", value: "Aluminum + PET preferred; tetra-pak only where institution recycling stream accepts; no polystyrene or non-recyclable laminates." },
        { label: "Allergen + ingredient transparency", value: "FALCPA-compliant allergen labeling on every SKU; allergen summary signage on the machine face; ingredient list available via QR code where supported." },
      ],
    },
    {
      heading: "4. Bonus structure — performance-based incentives",
      paragraph:
        "Universities increasingly use bonus structures that reward operators who exceed minimum targets. Bonuses are funded from the operator's commission rate or from a separate sustainability fund.",
      headers: ["Bonus tier", "Metric", "Threshold for bonus", "Bonus amount (illustrative)"],
      rows: [
        ["Tier 1 — Energy", "kWh per device per year", "≥ 20% below ENERGY STAR baseline", "1% commission rate increase"],
        ["Tier 2 — Packaging", "Recyclable packaging share", "≥ 90% (above the 80% floor)", "0.5% commission rate increase"],
        ["Tier 3 — Local + organic", "Local + organic SKU share", "≥ 25% (above the 15%/10% floor)", "0.5% commission rate increase"],
        ["Tier 4 — Fleet", "EV / hybrid % of restock route fleet", "≥ 50%", "Recognition + STARS narrative credit"],
        ["Tier 5 — Data sharing", "Sustainability dataset for student research", "Annual dataset + faculty engagement", "Recognition + AC-9 STARS credit"],
      ],
    },
    {
      heading: "5. Reporting + verification",
      paragraph:
        "Sustainability metrics need to be reported in a format the sustainability office can submit to AASHE STARS without manual reclassification. Operator commits to the reporting schedule at signing.",
      items: [
        { check: "Quarterly sustainability scorecard — energy, packaging, local/organic, fleet emissions, on-route diversion" },
        { check: "Annual STARS-aligned narrative — submitted by January 15 each year to support institution STARS reporting cycle" },
        { check: "Telemetry data export — daily or weekly CSV / API, including kWh per device where instrumented" },
        { check: "Third-party verification on packaging share + local sourcing (independent random audit of SKU master)" },
        { check: "Scope 3 emissions estimate — operator restocking + warehousing emissions allocated to the institution's account" },
        { check: "Annual sustainability report aligned to Second Nature Carbon Commitment where the institution is a signatory" },
        { check: "Living-lab data sharing arrangement for student capstone, research, or sustainability office projects" },
      ],
    },
    {
      heading: "6. RFP response sections — what operators submit",
      items: [
        { number: 1, title: "Section A — Bidder profile + sustainability credentials", description: "Legal entity, years in market, sustainability certifications (B Corp, ISO 14001, etc.), corporate sustainability report link." },
        { number: 2, title: "Section B — Equipment sustainability spec", description: "Per-device ENERGY STAR confirmation, refrigerant type, LED + low-power standby, telemetry vendor + heartbeat." },
        { number: 3, title: "Section C — Planogram sustainability spec", description: "Local + organic + fair-trade SKU share with supplier list; recyclable packaging share with packaging-vendor verification; allergen labeling sample." },
        { number: 4, title: "Section D — Operations sustainability", description: "Route optimization methodology, fleet composition + EV transition plan, warehouse renewable energy, Scope 1 + 2 + 3 emissions baseline." },
        { number: 5, title: "Section E — Reporting + verification commitment", description: "Sample quarterly scorecard, STARS-aligned narrative format, third-party verification arrangement, living-lab data-sharing terms." },
        { number: 6, title: "Section F — Bonus structure response", description: "Per-tier commitment with threshold + measurement method." },
        { number: 7, title: "Section G — References + capability", description: "Three university references with named sustainability office contact + procurement contact." },
      ],
    },
    {
      heading: "7. Scoring rubric",
      headers: ["Dimension", "Weight", "Scoring detail"],
      rows: [
        ["Equipment sustainability spec", "20%", "ENERGY STAR % + refrigerant compliance + LED + standby"],
        ["Planogram sustainability", "20%", "Local + organic + fair-trade + packaging recyclability"],
        ["Operations + fleet sustainability", "15%", "Route optimization + fleet emissions + warehouse renewables"],
        ["Reporting + verification", "15%", "STARS alignment + third-party verification + data sharing"],
        ["Bonus structure commitment", "10%", "Number of tiers committed + threshold strength"],
        ["SLA + telemetry capability", "10%", "Uptime + ticket SLA + telemetry export"],
        ["Pricing + commission economics", "10%", "Commission rate + investment + refresh schedule"],
      ],
    },
  ],
  footer:
    "This RFP template is a working procurement reference. Final RFP should be reviewed by university counsel, procurement, the sustainability office, and auxiliary services. AASHE STARS reporting alignment + Second Nature Carbon Commitment alignment + zero-waste goals should each be confirmed against the institution's current published commitments before issuance.",
});

console.log("wrote "+"green-vending-initiatives-campus");
