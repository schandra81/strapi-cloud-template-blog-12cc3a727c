import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "specialty-vending-campus-needs",
  assetType: "guide",
  title: "Campus Specialty Vending Placement Guide",
  subtitle: "Categories, costs, compliance, and vendor selection",
  intro:
    "Use this guide to scope specialty vending placements that go beyond snack + beverage — harm-reduction, hygiene, OTC medicine, study supplies, PPE, allergen-aware, exam-supplies, and laundry. Each category has distinct compliance overlays, equipment requirements, and vendor-selection criteria. Capability framing throughout — describe what operators are equipped to provide rather than claim work at named campuses.",
  sections: [
    {
      heading: "1. Specialty categories overview",
      headers: ["Category", "Typical placement", "Compliance overlay"],
      rows: [
        ["Harm reduction (Narcan, fentanyl test strips, hygiene)", "Residence halls, student health, late-night quad zones", "Campus public-health + local health authority approval; FDA Narcan OTC compliance (2023 reclassification); training for restock staff; signage in 2+ languages"],
        ["Hygiene + personal care", "Residence halls, rec center, library 24/7 zones", "FDA 21 CFR 211.132 tamper-evident packaging; ADA Section 308 reach range"],
        ["OTC medicine", "Student health, residence halls (with health-services approval)", "FDA OTC Monograph compliance per 21 CFR 330; expiration-date tracking; tamper-evident; SNAP-WIC not applicable"],
        ["Study supplies (USB, calculators, blue books, scantrons)", "Library, study lounges, academic buildings", "Sales-tax registration; ADA Section 308; library / dean approval"],
        ["PPE (masks, gloves, sanitizer)", "Health-services entry, dining-hall entry, residence halls", "ASTM F2100 mask spec; alcohol-based sanitizer per FDA monograph"],
        ["Allergen-aware food", "Dining hub, library, residence hall", "FALCPA labeling per 21 USC §343(w); allergen-free SKU sourcing"],
        ["Exam-supplies (scantron, blue book, pencils)", "Testing centers, exam-period kiosks", "Registrar / testing-center approval; pricing controlled to prevent gouging"],
        ["Laundry (detergent pods, dryer sheets)", "Residence-hall laundry rooms", "EPA Safer Choice or comparable certification preferred; ADA Section 308"],
      ],
    },
    {
      heading: "2. Cost framework (typical ranges)",
      paragraph:
        "Costs vary widely by category, machine size, and institutional subsidy level. Numbers below are typical industry ranges (capability framing, not anchor-specific).",
      headers: ["Cost component", "Typical range"],
      rows: [
        ["Machine + cabinet (specialty)", "$3,500 - $8,500 per unit"],
        ["Refrigerated unit (where required, e.g., OTC liquid)", "$5,500 - $12,000 per unit"],
        ["Branding wrap", "$400 - $1,500 per unit"],
        ["Telemetry + payment integration (one-time)", "$200 - $500 per unit"],
        ["Monthly service fee (restock + telemetry)", "$50 - $150 per unit per month"],
        ["SKU cost (margin for specialty)", "20-40% (vs. 35-50% snack + beverage)"],
        ["Harm-reduction SKU cost (Narcan, test strips)", "Often subsidized by public-health grant; institutional pass-through"],
      ],
    },
    {
      heading: "3. Compliance overlay checklist",
      items: [
        { check: "FDA + state-board approval where category warrants (OTC, harm-reduction, refrigerated cold-chain)." },
        { check: "Expiration-date tracking + restock-time first-in-first-out verification for any consumable with expiry." },
        { check: "Tamper-evident packaging per FDA 21 CFR 211.132 for any health-category SKU." },
        { check: "Allergen labeling per FALCPA (21 USC §343(w)) on any food SKU; allergen-aware planogram for explicit allergen-aware machines." },
        { check: "ADA Section 308 reach range maintained for all selection buttons + payment readers." },
        { check: "Section 305 clear floor space (30\" x 48\") at every machine." },
        { check: "FERPA-aligned data handling on any campus-card payment integration." },
        { check: "Local health department permit where TCS food sold from refrigerated unit." },
      ],
    },
    {
      heading: "4. Vendor + operator selection criteria",
      items: [
        { number: 1, title: "Specialty SKU sourcing", description: "Operator demonstrates vendor relationships for the specific categories in scope. Generic vendors lack relationships with harm-reduction, OTC, or allergen-aware distributors." },
        { number: 2, title: "Compliance track record", description: "Operator has documented FDA / health-department compliance history; sample audit-response runbook." },
        { number: 3, title: "Telemetry + expiration tracking", description: "Operator's telemetry platform supports SKU-level expiration tracking (where consumables have expiry). Generic snack-vending telemetry often lacks this." },
        { number: 4, title: "Restock cadence", description: "Specialty categories often have higher peak demand windows (PPE pre-class, exam supplies mid-finals, Narcan after public-health events). Operator commits to surge-restock protocol." },
        { number: 5, title: "Pricing transparency", description: "Specialty SKUs are scrutinized by student government + dean of students. Operator's pricing model published; cap on margin during exam periods for exam supplies." },
        { number: 6, title: "Subsidy model support", description: "Operator supports zero-cost or subsidized-cost transactions where category warrants (harm-reduction, hygiene, food-security)." },
      ],
    },
    {
      heading: "5. Implementation roadmap",
      items: [
        { label: "Stage 1 — needs assessment (Month 1)", value: "Survey student government, dean of students, student health, residence life; identify top 3 specialty categories by need." },
        { label: "Stage 2 — compliance scope (Month 2)", value: "Engage campus FDA / health-service contact, sustainability office, accessibility office; document compliance requirements per category." },
        { label: "Stage 3 — operator selection (Month 3)", value: "Issue specialty-vending RFP; score per Section 4 criteria." },
        { label: "Stage 4 — pilot (Months 4-6)", value: "1-2 unit pilot per category in highest-need location; gather student + staff feedback; refine planogram." },
        { label: "Stage 5 — scale (Months 6-12)", value: "Roll out to full footprint; integrate with institutional reporting (food-security, harm-reduction outcomes)." },
        { label: "Stage 6 — annual review (Year 2+)", value: "QBR with operator; refresh category mix; sunset under-utilized categories; expand demonstrated-need categories." },
      ],
    },
    {
      heading: "6. Reporting + measurement",
      items: [
        { label: "Utilization", value: "Per-machine velocity by SKU; surge-window capture; uptime + stockout incidents." },
        { label: "Outcomes (institutional aggregate)", value: "Cross-tab with retention, persistence, wellness-services utilization where appropriate. Always aggregate; never individual-level." },
        { label: "Equity", value: "Access by college / residence hall / time-of-day; identify under-served populations." },
        { label: "Compliance audit", value: "Annual expiration + tamper-evident audit; documented in operator's audit-response runbook." },
      ],
    },
  ],
  footer:
    "Informational guide — confirm category-specific compliance with institutional counsel, campus health, and operator before issue. Costs are industry-typical ranges and should be validated for your specific institution.",
});

console.log("wrote "+"specialty-vending-campus-needs");
