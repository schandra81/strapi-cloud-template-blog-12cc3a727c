import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-contracts-for-universities",
  assetType: "pack",
  title: "University Vending Contract Pack",
  subtitle: "Master agreement, per-placement addenda, governance framework, and AI cooler scope language",
  intro:
    "A university vending contract spans 5-10 years, multiple buildings, multiple campus card vendors, and an evolving technology mix (combo to AI cooler). This pack bundles the master agreement clause structure, per-placement addenda template, governance + change-management framework, and AI cooler scope language.",
  sections: [
    {
      heading: "1. Master agreement — required clauses",
      paragraph:
        "Use the clauses below as the spine of the master services agreement (MSA). Each requires written operator commitment.",
      items: [
        { label: "Term + renewal", value: "Initial 5-year term with two 2-year renewal options at university election; price + commission re-opener at each renewal." },
        { label: "Termination for cause", value: "Material breach of uptime SLA (≥ 3 months below 95%), security incident, brand-standard breach, audit failure (HHS share, ADA, dietitian audit). 30-day cure period for non-emergency; immediate for security." },
        { label: "Termination for convenience", value: "90 days written notice from university; 180 days from operator. Transition obligations apply." },
        { label: "Commission structure", value: "Tiered commission per placement volume (see addendum); quarterly true-up; minimum guarantee per placement." },
        { label: "Pricing + escalation", value: "Operator publishes price list; annual escalation capped at CPI + 2%; university approves any item > 10% YoY increase." },
        { label: "Insurance + indemnity", value: "$2M GL, $1M umbrella, cyber-liability $5M, food product liability $1M, additional-insured to university + system; mutual indemnity language." },
        { label: "Data + privacy", value: "FERPA DPA exhibit; GLBA acknowledgment exhibit; PCI-DSS 4.0 AOC + SAQ schedule; SOC 2 Type II annually." },
        { label: "Sustainability + STARS", value: "Operator commits to quarterly sustainability report aligned to AASHE STARS OP-8 + OP-9." },
        { label: "Accessibility + ADA", value: "Operator commits to ADA Section 308 compliance per cooler; VPAT for digital interfaces; annual accessibility audit." },
        { label: "Transition out", value: "On termination, operator continues service for 180 days; data export to university within 30 days; equipment removal within 60 days of final termination." },
      ],
    },
    {
      heading: "2. Per-placement addendum template",
      paragraph:
        "Each placement gets an addendum specifying scope, pricing, planogram, and operational details. Template covers the core fields below.",
      items: [
        { label: "Placement ID + location", value: "Building, room, floor, GPS, photo at install. Date of placement effective." },
        { label: "Equipment type + serial", value: "AI cooler model + serial, vision-system version, payment-terminal version. Cabinet wrap version + brand-approval date." },
        { label: "Commission tier", value: "Per-volume tier table; minimum guarantee floor; quarterly true-up methodology." },
        { label: "Planogram", value: "Initial 60-80 SKU planogram attached; HHS-aligned share %; dietary attestation summary; refresh cadence." },
        { label: "Service SLAs", value: "Tier-1/2/3 response + resolution times per placement risk class (e.g., athletics + library = high; back-office = medium)." },
        { label: "Telemetry + reporting", value: "Cellular or VLAN; data flow to campus reporting dashboard; per-placement velocity report cadence." },
        { label: "Payment + identity stack", value: "Tender types accepted (campus card, Apple Pay, Google Pay, EMV); SDK version; refund flow." },
        { label: "Accessibility attestation", value: "Operator ADA Section 308 attestation signed at placement install + annually." },
        { label: "Termination + transition (per placement)", value: "30-day notice for placement-level termination; 60-day equipment removal." },
      ],
    },
    {
      heading: "3. Governance framework",
      items: [
        { label: "Executive sponsor (university)", value: "VP Auxiliary Services or VP Student Affairs; quarterly executive review; annual contract review." },
        { label: "Day-to-day owner (university)", value: "Auxiliary services contract manager; routes change-requests, refund escalations, contract amendments." },
        { label: "Executive sponsor (operator)", value: "Operator VP / Director of Higher Ed; quarterly executive review; annual contract review." },
        { label: "Day-to-day owner (operator)", value: "Operator account manager; on-call for refund escalations + service tickets." },
        { label: "Joint operating committee", value: "Monthly meeting: auxiliary services + dietitian + IT + facilities + sustainability + operator account manager. Reviews ticket queue + planogram + escalations." },
        { label: "Quarterly business review", value: "Executive sponsors + JOC; reviews KPIs, uptime, refund, dietitian audit, STARS metrics, scope changes." },
        { label: "Annual strategic review", value: "Renewal-readiness review; commission tier re-anchor; capital + technology refresh plan." },
      ],
    },
    {
      heading: "4. AI cooler scope language",
      paragraph:
        "AI cooler placements have additional contract scope beyond combo vending. Use the language below in master agreement + per-placement addendum.",
      items: [
        { label: "Vision-system attestation", value: "Operator attests to per-SKU vision-system accuracy ≥ 99%; weekly model-drift report; quarterly recalibration; mis-charge dispute window 24-48 hr." },
        { label: "Fresh + perishable handling", value: "Cold-chain monitoring 35-40°F (refrigerated); temperature excursion alert ≤ 30 min; FALCPA labeling on every SKU; food product liability $1M." },
        { label: "Identity + privacy at cooler", value: "Vision-data retention ≤ 30 days un-anonymized; hash-only thereafter; no facial-recognition profile; FERPA DPA covers campus-card SDK." },
        { label: "PCI scope", value: "PAN never traverses university network; operator AOC + SAQ-B-IP; cooler on isolated VLAN with egress whitelist." },
        { label: "Refund automation", value: "QR + SMS refund flow ≤ 24 hr credit-back to original tender; refund dashboard accessible to auxiliary services." },
        { label: "Brand-wrap + signage", value: "Cabinet wrap submitted to campus brand standards; 14-21 day approval cycle; refresh on 24-month cycle or sooner if damaged." },
        { label: "Capital + refresh", value: "Operator-funded equipment; 5-7 year capital refresh cycle; university option to fund cabinet wrap for higher commission tier." },
      ],
    },
    {
      heading: "5. Performance + SLA exhibits",
      headers: ["KPI", "Target", "Measurement", "Service credit on breach"],
      rows: [
        ["Per-cooler uptime", "≥ 98% monthly", "Telemetry, third-party-verifiable", "$X per breach hour > 2% downtime"],
        ["Tier-1 service response", "< 30 min ack, < 24 hr resolve", "Ticketing system timestamp", "$X per breach incident"],
        ["Tier-2 service response", "< 24 hr ack, < 48 hr resolve", "Ticketing system timestamp", "$X per breach incident"],
        ["Refund credit-back", "≤ 24 hr to original tender", "Operator refund dashboard", "Refund + $5 goodwill per breach"],
        ["HHS-aligned share", "≥ [50/65/75]%", "Quarterly dietitian audit", "Cure plan within 30 days"],
        ["Vision-system accuracy", "≥ 99% per SKU", "Operator weekly drift report", "Recalibration within 14 days"],
        ["Dietitian audit pass", "Pass each semester", "Semi-annual audit", "Cure plan within 45 days"],
        ["STARS sustainability report", "Quarterly + annual", "Operator-delivered report", "Cure within 30 days"],
      ],
    },
    {
      heading: "6. Change-management process",
      items: [
        { number: 1, title: "Change request submitted", description: "University or operator submits change request via shared change-management log; categorizes as new placement, planogram update, integration enhancement, or contract amendment." },
        { number: 2, title: "Joint operating committee review", description: "Reviewed at next monthly JOC; categorized as in-scope (no contract change), addendum-required (per-placement addendum), or amendment-required (master agreement amendment)." },
        { number: 3, title: "Scoping + pricing", description: "Operator submits scope + pricing within 14 days; commission impact + capital impact clearly documented." },
        { number: 4, title: "Executive approval", description: "Executive sponsors approve amendment; auxiliary services contract manager + operator account manager execute." },
        { number: 5, title: "Implementation", description: "Per agreed scope + timeline; results reviewed at next QBR." },
      ],
    },
    {
      heading: "7. Compliance + audit schedule",
      items: [
        { check: "Annual: SOC 2 Type II report refresh" },
        { check: "Annual: PCI-DSS AOC + SAQ refresh" },
        { check: "Annual: insurance certificate refresh" },
        { check: "Annual: FERPA DPA + GLBA acknowledgment review" },
        { check: "Semi-annual: campus dietitian audit (HHS alignment + allergen labeling)" },
        { check: "Annual: ADA Section 308 accessibility audit per cooler" },
        { check: "Quarterly: vision-system accuracy report" },
        { check: "Quarterly: sustainability + STARS-aligned report" },
        { check: "Annual: cybersecurity + pen-test report shareable under NDA" },
        { check: "Annual: contract review meeting + scope reset" },
      ],
    },
    {
      heading: "8. Termination + transition playbook",
      items: [
        { check: "T-180 days: termination notice issued; transition plan kicks off" },
        { check: "T-150 days: data export plan finalized; replacement operator selection workflow initiated" },
        { check: "T-120 days: brand-wrap + signage transition planned" },
        { check: "T-90 days: planogram + signage handoff to replacement operator; campus card SDK integration retest" },
        { check: "T-60 days: equipment removal schedule confirmed" },
        { check: "T-30 days: final data export + reconciliation + final commission true-up" },
        { check: "T-0: termination effective; replacement operator live; final operator equipment removed" },
        { check: "T+30 days: final invoice + commission reconciliation + service-credit settlement" },
        { check: "T+60 days: contract close-out + records archived per university records-retention schedule" },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal advice. University general counsel + procurement + auxiliary services + IT + privacy office should jointly review contract language and operator attestations before contract execution. Contract structure, commission tiers, and SLA service-credit amounts are negotiable and depend on campus scope and volume.",
});

console.log("wrote " + "vending-contracts-for-universities");
