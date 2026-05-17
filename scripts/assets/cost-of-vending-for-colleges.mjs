import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cost-of-vending-for-colleges",
  assetType: "pack",
  title: "College + University Vending Cost Pack",
  subtitle: "Contract structures, commission negotiation, AI cooler vs combo evaluation, campus card SDK framework, operator selection checklist",
  intro:
    "Vending program economics on a college campus depend on contract structure (commission vs revenue-share vs full-line), placement mix (traditional combo vs AI cooler), and integration depth (campus card SDK, payroll deduction for staff). This pack bundles the five working documents a procurement + auxiliary services team needs to negotiate and operate a financially sound vending program.",
  sections: [
    {
      heading: "1. Contract structure comparison",
      paragraph:
        "Universities typically choose one of four contract structures. Each has different risk + revenue characteristics for the campus.",
      headers: ["Structure", "How it works", "Campus revenue", "Campus risk", "Best fit"],
      rows: [
        ["Commission % of gross", "Operator pays campus a % of gross sales (typically 5-25%)", "Variable; scales with volume", "Low; operator carries capital + ops", "Most placements"],
        ["Commission tiered + minimum", "% scales with volume thresholds; minimum guarantee", "Higher floor + ceiling", "Low", "High-volume placements"],
        ["Revenue-share with capital share", "Campus funds capital; operator runs; split typically 50-70% to campus", "Higher % but capital required", "Moderate; campus owns hardware", "High-volume, brand-controlled placements"],
        ["Full-line / self-op", "Campus dining ops the program directly", "Highest gross margin if scale supports", "High; staffing, capital, operations", "Large campuses with existing dining-ops capacity"],
      ],
    },
    {
      heading: "2. Commission negotiation framework",
      paragraph:
        "Commission tiers are negotiable. Operators expect higher commissions at higher volumes and at premium placements. Use the framework below to anchor your ask.",
      items: [
        { label: "Volume tier 1 — < $25K gross/year per placement", value: "Commission 5-10% of gross. Typical for residence-hall floors with lower traffic." },
        { label: "Volume tier 2 — $25K-$75K gross/year per placement", value: "Commission 10-18% of gross. Mid-density residence + academic-building placements." },
        { label: "Volume tier 3 — $75K-$150K gross/year per placement", value: "Commission 15-22% of gross. High-traffic union + library + athletics placements." },
        { label: "Volume tier 4 — > $150K gross/year per placement", value: "Commission 18-28% of gross. Hub-anchor placements at union, recreation center, or 24/7 library." },
        { label: "Minimum guarantee", value: "Operator commits to a per-placement floor (e.g., $1,500/year); shields campus from underperforming placements during ramp." },
        { label: "Cabinet + signage capital", value: "If operator funds custom-wrap + brand-aligned cabinet, expect commission tier to drop 2-3%. If campus funds, commission tier improves." },
      ],
    },
    {
      heading: "3. AI cooler vs combo evaluation",
      headers: ["Factor", "AI cooler", "Traditional combo / glass-front"],
      rows: [
        ["Capital ($/unit)", "$15K-$45K", "$5K-$10K"],
        ["Footprint", "Larger; full grab-and-go cabinet 36-72 in wide", "Smaller; 36-42 in wide"],
        ["SKU breadth", "30-80 SKUs incl fresh + cold", "20-45 SKUs; limited fresh"],
        ["Avg basket", "$6.50-$11.00", "$2.50-$3.50"],
        ["Velocity per placement (high-traffic)", "$8K-$25K/month gross", "$1.5K-$4K/month gross"],
        ["Operator commission tier (typical)", "10-18%", "8-15%"],
        ["Best fit", "High-traffic union, library, athletics, residence anchor", "Distributed lower-traffic floors, hallway placements"],
      ],
    },
    {
      heading: "4. Campus card SDK + payment-integration framework",
      paragraph:
        "Most universities require operator support for the campus card (one-card) tender. Confirm each item below in the operator's response.",
      items: [
        { label: "Campus card vendor support", value: "Operator supports Atrium, Blackboard Transact, CBORD, TouchNet OneCard, Heartland Campus Solutions, or comparable." },
        { label: "Tender types", value: "Dining dollars, declining balance, flex dollars, meal exchange (where applicable). Operator should attest to each tender's transaction-mapping." },
        { label: "Integration method", value: "SDK or direct API; certified by the campus card vendor; tested in dev environment before production." },
        { label: "Tap + dip flow", value: "Card-side ≤ 3 seconds end-to-end; declines surface a clear reason code; no PII leakage to operator beyond signed-DPA scope." },
        { label: "Settlement + reconciliation", value: "Daily settlement file from operator to campus card vendor; reconciliation to auxiliary-services finance within 7 days." },
        { label: "FERPA DPA", value: "Operator-signed FERPA DPA covering student-ID data traversal; SOC 2 Type II in good standing." },
        { label: "Cashless + mobile", value: "Apple Pay, Google Pay, contactless EMV at cooler face alongside campus card tap-target." },
      ],
    },
    {
      heading: "5. Operator selection checklist",
      items: [
        { check: "Higher-ed reference accounts ≥ 3 active placements at peer institutions ≥ 12 months in service" },
        { check: "Campus card SDK integration certified and demonstrated in pilot environment" },
        { check: "FERPA DPA + GLBA acknowledgment + SOC 2 Type II on file" },
        { check: "PCI-DSS 4.0 AOC + SAQ-B-IP on file" },
        { check: "Insurance: $2M GL, $1M umbrella, cyber-liability $5M, food product liability $1M, additional-insured to university" },
        { check: "Refund automation: QR + SMS refund flow ≤ 24 hr credit-back" },
        { check: "Reporting: per-placement, per-SKU, per-shift velocity dashboards accessible to auxiliary services" },
        { check: "Sustainability + STARS-aligned reporting capability" },
        { check: "Smart-Snacks / HHS / FITPICK planogram capability attested" },
        { check: "Insurance + workforce: route-staff living-wage attestation if campus policy requires" },
      ],
    },
    {
      heading: "6. Total-cost-of-ownership model — typical 30-placement program",
      paragraph:
        "Model assumes mid-density campus, 30 placements split 20 combo + 10 AI cooler, mixed traffic.",
      items: [
        { label: "Operator capital (typical)", value: "Operator funds equipment; campus capital = $0 for hardware. Optional: campus funds cabinet wrap + signage refresh, $500-$2,500/placement." },
        { label: "Campus operating cost", value: "Auxiliary services PM time ~ 0.25 FTE for vendor management; finance reconciliation ~ 0.10 FTE." },
        { label: "Campus revenue (gross commission)", value: "Combo placements: 20 x $30K/yr x 12% commission = $72K/yr. AI cooler placements: 10 x $90K/yr x 15% commission = $135K/yr. Total ~ $207K/yr." },
        { label: "Campus revenue (net)", value: "Less PM + finance staffing allocation ~ $40K-$60K (campus salary + benefits); net $145K-$165K/yr." },
        { label: "Subsidy / equity programs", value: "If campus underwrites SKU subsidies (recovery protein, healthy-share floor), expect $5K-$20K/yr offset to gross commission." },
        { label: "Sustainability capex (optional)", value: "If campus brand requires custom wraps + ENERGY STAR refresh on capital cycle: $50K-$100K every 5-7 years." },
      ],
    },
    {
      heading: "7. Contract clauses to require",
      items: [
        { check: "Commission tier table specifying per-volume tier and quarterly true-up" },
        { check: "Minimum guarantee per placement" },
        { check: "Termination for cause: uptime SLA breach, security incident, brand-standard breach" },
        { check: "Termination for convenience: 90 days written notice from campus, 180 days from operator" },
        { check: "Uptime SLA: 98%+ per machine per month; service credit for breach" },
        { check: "Refund SLA: ≤ 24 hr credit-back to original tender" },
        { check: "Sustainability + STARS reporting: quarterly report obligation" },
        { check: "Brand-standard compliance: cabinet wrap + signage approval cycle" },
        { check: "Insurance + indemnity language" },
        { check: "Data + privacy: FERPA DPA + GLBA exhibit + PCI AOC schedule" },
      ],
    },
    {
      heading: "8. Annual review framework",
      items: [
        { check: "Q1: prior-year revenue + commission true-up; planogram annual refresh" },
        { check: "Q2: mid-year operations review; refund + uptime audit" },
        { check: "Q3: contract-anniversary commission-tier review + scope-change negotiation" },
        { check: "Q4: STARS / sustainability annual report from operator" },
        { check: "Annually: SOC 2 + PCI + FERPA DPA refresh" },
      ],
    },
  ],
  footer:
    "This pack is informational. Procurement + auxiliary services + finance + IT + the privacy office should jointly review operator capability claims and attestations before contract execution. Commission tiers, minimums, and capital-share arrangements are negotiable and depend on campus volume + scope.",
});

console.log("wrote " + "cost-of-vending-for-colleges");
