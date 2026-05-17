import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "managing-vending-in-school-campuses",
  assetType: "playbook",
  title: "Multi-Campus District Vending Management Playbook",
  subtitle: "Master agreement, per-campus addenda, scorecard, audit calendar",
  intro:
    "A multi-campus K-12 district or multi-campus higher-ed system runs vending most efficiently under a single master agreement with per-campus addenda — not 12 separate contracts. This playbook codifies the master/addendum structure, the district-wide scorecard, and the audit calendar that keeps compliance and program performance visible at the district office.",
  sections: [
    {
      heading: "1. Master agreement structure",
      paragraph:
        "The master agreement holds the terms that don't vary by campus — operator entity, insurance, ADA + nutrition compliance, telemetry, audit rights, commission framework. The per-campus addenda hold what varies — machine count, placement, planogram, school-specific access rules.",
      items: [
        { label: "Parties + term", value: "District (or system) as principal; operator entity (named legal entity, not 'doing-business-as'). 3-5 year primary term with 1-2 year renewals." },
        { label: "Compliance obligations", value: "USDA Smart Snacks (7 CFR §210.11) for K-12; campus-specific dietary requirements for higher-ed; ADA Title III (2010 Standards §305 + §308 reach range); FDA 21 CFR §101.8 calorie labeling; FALCPA allergen labeling." },
        { label: "Insurance", value: "$2M general liability + $1M auto + $1M product liability + statutory workers' comp. District named as additional insured. Certificate filed annually." },
        { label: "Audit rights", value: "District may audit operator books + telemetry + restock logs annually with 30-day notice; semi-annual unannounced site audits on 10% of placements." },
        { label: "Termination", value: "30-day for convenience (district); 90-day for material breach (either party with cure period); immediate for repeated compliance failure." },
      ],
    },
    {
      heading: "2. Per-campus addendum — required fields",
      headers: ["Field", "Example", "Notes"],
      rows: [
        ["Campus name + address", "Lincoln High School, 123 Main St", "Single campus per addendum"],
        ["Site contact + escalation chain", "Principal + AP + facilities", "Names + phone + email"],
        ["Machine count + placement", "3 placements: cafeteria, gym lobby, faculty lounge", "Photo + ADA approach diagram"],
        ["Hours of operation", "M-F 7:00 AM - 4:00 PM (vended); 24/7 (faculty lounge)", "K-12 typically restricted; higher-ed often 24/7"],
        ["Planogram baseline", "Smart Snacks 100% for student-access; faculty lounge unrestricted", "Per 7 CFR §210.11"],
        ["Commission rate", "15% of gross sales", "Or per-machine flat; tiered by volume"],
        ["Local POC for service requests", "Facilities supervisor (name + phone)", "Operator dispatch contact"],
      ],
    },
    {
      heading: "3. District-wide scorecard",
      paragraph:
        "Roll up per-campus metrics into a district scorecard reviewed quarterly by procurement + nutrition services + facilities. Same scorecard structure across all campuses.",
      items: [
        { check: "Uptime per machine, per campus, monthly. District target ≥ 98%" },
        { check: "Smart Snacks compliance pass rate (K-12) — annual + spot audit results; target 100% per campus" },
        { check: "ADA compliance pass rate — annual verification + spot; target 100%" },
        { check: "Stockout SKU-hours per campus, weekly. Target ≤ 2%" },
        { check: "Service SLA adherence (Tier 1 < 24 hr, Tier 2 < 7 day, Tier 3 < 14 day); target 100%" },
        { check: "Revenue + commission per campus, monthly; aggregated to district P&L" },
        { check: "Refund rate per campus, quarterly; target < 2%" },
        { check: "Allergen + calorie labeling audit; target 100% per FALCPA + FDA 21 CFR §101.8" },
      ],
    },
    {
      heading: "4. Audit calendar",
      headers: ["Audit", "Frequency", "Owner", "Scope"],
      rows: [
        ["Smart Snacks compliance", "Annual + 10% spot quarterly", "District nutrition services", "Every SKU on K-12 student-access machines"],
        ["ADA reach range + approach", "Annual + on change", "District facilities + accessibility coordinator", "Every placement"],
        ["Insurance + business license", "Annual", "Procurement", "Operator certificate + state filings"],
        ["Telemetry + sales reconciliation", "Quarterly", "Procurement + finance", "Telemetry export vs operator invoice"],
        ["Service SLA review", "Quarterly business review", "Procurement", "Tier 1-3 SLA adherence per campus"],
        ["Refund + complaint log", "Quarterly", "District student services + procurement", "All refund + complaint records by reason code"],
      ],
    },
    {
      heading: "5. Operational support structure",
      items: [
        { number: 1, title: "Restock cadence", description: "Per-campus telemetry-driven. K-12 cafeteria machines typically 2-3 visits/week during school year, 0-1/week during summer. Higher-ed 3-5 visits/week year-round." },
        { number: 2, title: "Service SLA — Tier 1", description: "Offline, cold-chain excursion, payment failure — <24 hr ack + <24 hr resolution. SLA windows respect school hours where security access requires escort." },
        { number: 3, title: "Service SLA — Tier 2", description: "Single-SKU stockout, planogram refresh — 24-48 hr ack, 5-7 day resolution." },
        { number: 4, title: "Service SLA — Tier 3", description: "Cosmetic, signage, cabinet cleaning — 5 day ack, 14 day resolution." },
        { number: 5, title: "Refund flow", description: "Refund via app, on-machine touchpad, or campus front-office hand-off. Quarterly refund report to district nutrition services." },
        { number: 6, title: "Academic calendar coordination", description: "Restock cadence flexes around academic calendar — pre-position for back-to-school, scale down for breaks, surge for testing weeks per campus addendum." },
      ],
    },
    {
      heading: "6. Quarterly business review — district structure",
      items: [
        { check: "District-level scorecard rollup (uptime, compliance, SLA, revenue, refunds)" },
        { check: "Per-campus deep-dive — bottom 20% campuses by performance, action plan" },
        { check: "Smart Snacks + ADA compliance audit results since prior QBR" },
        { check: "Planogram + nutrition recommendations from district nutrition services" },
        { check: "Equipment refresh + retirement roadmap (typically 7-10 year cycle per machine)" },
        { check: "Forward-quarter calendar — events, testing, breaks, summer staffing changes" },
        { check: "Action items + owners + due dates, carried in QBR tracker" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["District uptime average", "≥ 98%", "Monthly rollup"],
        ["Smart Snacks compliance", "100%", "Annual + quarterly spot"],
        ["ADA compliance", "100%", "Annual + on-change"],
        ["Stockout SKU-hours", "≤ 2%", "Weekly per campus"],
        ["Tier 1 resolution time", "< 24 hr", "Monthly"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Revenue per machine (district median)", "Trended", "Quarterly"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, master + addendum drafting, and district-wide scorecard + audit calendar implementation for K-12 districts and higher-ed systems.",
});

console.log("wrote "+"managing-vending-in-school-campuses");
