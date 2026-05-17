import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-specialized-manufacturing-zones",
  assetType: "playbook",
  title: "Specialized-Zone Manufacturing Vending Playbook",
  subtitle: "Cleanroom, hazmat, foundry, food-processing, and pharma placement design and operational discipline",
  intro:
    "Manufacturing zones with regulatory or contamination controls cannot host standard vending. This playbook specifies placement design, equipment, restock procedure, and the regulatory framework — ISO 14644 cleanroom classes, OSHA HAZWOPER 1910.120, FDA 21 CFR 117, and 21 CFR 211 — that govern vending in each zone.",
  sections: [
    {
      heading: "1. Five zone classes — what's in/out",
      headers: ["Zone", "Vending placement", "Restriction"],
      rows: [
        ["Cleanroom (ISO 14644 Class 5-8)", "Outside controlled boundary, in gowning anteroom or breakroom", "Particulate-generating equipment cannot enter classified space; food/beverage prohibited in Class 5-7 per ISO 14644 + FDA cGMP"],
        ["Hazmat / chemical handling (HAZWOPER zone)", "Outside the exclusion + contamination-reduction zones per OSHA 1910.120(j)", "Food/beverage consumption prohibited in exclusion zone; vending sited in support zone only"],
        ["Foundry / hot-work", "Conditioned breakroom adjacent to but separated from production by physical barrier", "ACGIH TLV heat-stress mitigation — hydration prioritized; equipment heat-rated"],
        ["Food processing (FDA 21 CFR 117 + USDA-regulated)", "Separated GMP-compliant breakroom; not in production zone", "21 CFR 117.10(b)(8) prohibits eating/drinking/storage of personal items in food production areas"],
        ["Pharma cGMP (FDA 21 CFR 211)", "Outside controlled manufacturing areas, in dedicated breakroom", "21 CFR 211.28(b) prohibits food/beverage/tobacco in manufacturing/storage areas of drug products"],
      ],
    },
    {
      heading: "2. Cleanroom placement design",
      paragraph:
        "Cleanrooms classified ISO 14644 Class 5-7 (FDA Grade A-B equivalents) cannot host vending inside the controlled boundary. Placement is in the gowning anteroom or the adjacent breakroom.",
      items: [
        { number: 1, title: "Gowning anteroom siting", description: "Vending placed past the de-gowning station, before workers return to a controlled zone. ISO 14644-4 §A.4 governs the anteroom airflow + pressure cascade." },
        { number: 2, title: "Particulate hygiene", description: "Sealed-bezel equipment, glass-front to reduce hand contact, HEPA-filtered cabinet intake if anteroom has positive-pressure cascade." },
        { number: 3, title: "Gowning compatibility", description: "Touchless or cashless-only payment (Nayax VPOS Touch + tap or app pay) — gloved hands cannot manipulate cash or PIN pads cleanly." },
        { number: 4, title: "Spill containment", description: "Equipment positioned over impermeable flooring with curbed edge if anteroom shares pressure cascade with classified space." },
      ],
    },
    {
      heading: "3. Hazmat zone (HAZWOPER 1910.120) placement design",
      items: [
        { number: 1, title: "Zone mapping", description: "Site Health & Safety Plan (HASP) per 1910.120(b)(4) defines exclusion zone (EZ), contamination-reduction zone (CRZ), and support zone (SZ). Vending is in SZ only." },
        { number: 2, title: "Decon flow", description: "Workers exit through CRZ decon line before reaching vending in SZ. Vending sited past the decon final-rinse station, not before." },
        { number: 3, title: "Equipment spec", description: "Standard sealed-bezel equipment is acceptable in SZ; no special hazmat rating needed once outside the EZ/CRZ boundary." },
        { number: 4, title: "Restock procedure", description: "Operator restock vehicle does not enter EZ/CRZ — confined to SZ. Restock driver does not require HAZWOPER training when access is restricted to SZ." },
      ],
    },
    {
      heading: "4. Foundry + hot-work zone placement design",
      paragraph:
        "ACGIH TLV and NIOSH heat-stress guidance frame the vending mix for foundry, forge, and hot-work operations. Hydration becomes a safety control, not a convenience.",
      items: [
        { check: "Hydration share — 50%+ of beverage facings are water + electrolyte + unsweetened (ACOEM industrial workforce guidance; ACGIH 2024 TLV for heat stress)" },
        { check: "Electrolyte SKUs (Liquid IV, Sqwincher, Gatorade Endurance) on dedicated facings, restocked daily during peak summer" },
        { check: "Cold-only beverage equipment — Royal RVCC 800 or Vendo 721 with reinforced refrigeration condenser rated for breakroom ambient of 85-95°F" },
        { check: "Calorie-dense meal-replacement SKUs (protein bars, jerky, mixed nuts) for sustained heat-work shifts" },
        { check: "Breakroom siting per OSHA 1910.141(g)(2) — physically separated from production by barrier; not adjacent to open hot-work" },
      ],
    },
    {
      heading: "5. Food processing + pharma cGMP placement design",
      paragraph:
        "21 CFR 117.10(b)(8) (food) and 21 CFR 211.28(b) (drug) prohibit eating/drinking in production + storage areas. Vending placement is in a dedicated GMP-compliant breakroom that workers transit through de-gowning.",
      items: [
        { label: "Breakroom separation", value: "Physical wall + door + de-gowning station between production and breakroom. Foot traffic flow is one-directional — production → de-gown → breakroom → re-gown → production." },
        { label: "Equipment finish", value: "Sealed-bezel equipment with smooth, cleanable surfaces. NSF/ANSI 51 (food equipment materials) compliance for any surface that workers contact with food residue." },
        { label: "Allergen labeling", value: "FALCPA-compliant SKU labels visible at planogram. Allergens introduced via vending must be tracked if the production line has allergen-control programs." },
        { label: "Restock vehicle", value: "Operator restock vehicle remains outside the production zone. Restock driver wears facility-provided breakroom-only PPE (smock + hairnet) during the visit." },
      ],
    },
    {
      heading: "6. Operational support structure",
      items: [
        { label: "Restock cadence", value: "2-4 visits/week. Cleanroom + pharma cGMP zones may require operator to coordinate with facility QA before each visit; some require restock during specific shift-change windows." },
        { label: "Service SLA — Tier 1", value: "Cold-chain excursion, payment failure, offline — <24 hr ack + <24 hr resolution. Cleanroom + cGMP zones add 4-8 hr facility QA escort lead time to truck-roll." },
        { label: "Preventive maintenance", value: "Quarterly PM — filter change, gasket inspection, refrigeration coil clean, payment reader firmware. PM windows scheduled with facility EH&S + QA." },
        { label: "Audit trail", value: "Operator provides written restock log + cleaning log per visit; retained 3 years for FDA cGMP placements per 21 CFR 211.180." },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Uptime per machine", "≥ 98%", "Monthly"],
        ["Tier 1 resolution time", "< 24 hr (plus escort lead time)", "Monthly"],
        ["Restock log + cleaning log compliance", "100%", "Per-visit, retained 3 yrs (cGMP)"],
        ["Audit non-conformance", "0 per year", "Annual"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Heat-stress hydration share (foundry)", "≥ 50% facings", "Quarterly"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection and SLA structuring against ISO 14644, HAZWOPER, FDA 21 CFR 117, and 21 CFR 211 requirements for specialized manufacturing zones.",
});

console.log("wrote "+"vending-specialized-manufacturing-zones");
