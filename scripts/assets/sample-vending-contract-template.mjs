import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "sample-vending-contract-template",
  assetType: "template",
  title: "Sample Vending Contract Template",
  subtitle: "Twelve core clauses, placement-type provisions, attorney review thresholds",
  intro:
    "Use this template as a working starting point when drafting or reviewing a vending services agreement. Each section is capability-framed and references typical industry practice plus the underlying federal and state legal touchpoints. This is not a contract and not legal advice — every executed agreement must be reviewed by counsel before signature.",
  sections: [
    {
      heading: "1. Twelve core clauses (always present)",
      paragraph:
        "Every vending agreement should at minimum address these twelve clauses. Missing any one is a material drafting gap.",
      headers: ["#", "Clause", "What it does"],
      rows: [
        ["1", "Parties + recitals", "Identifies operator + host with full legal names, addresses, EIN/state-ID; recites placement intent"],
        ["2", "Premises + placement", "Defines unit(s), addresses, machine count, machine types, placement specifications"],
        ["3", "Term + renewal", "Initial term (typically 24-60 months); renewal terms (auto-renew language requires careful drafting per state)"],
        ["4", "Exclusivity + scope", "Whether operator has exclusive right to vending at the location; carve-outs (catering, coffee, micro-market)"],
        ["5", "Commission + pricing", "Commission tier, payment cadence, retail price-setting authority, pricing reset clauses"],
        ["6", "Equipment + maintenance", "Ownership, install, removal, maintenance SLA, replacement standards"],
        ["7", "Stocking + service", "Restock cadence, planogram authority, allergen + nutrition criteria, fresh-food handling"],
        ["8", "Compliance + insurance", "Required certifications + permits + insurance limits + additional-insured"],
        ["9", "Indemnification", "Operator indemnifies host for product liability + property damage + IP; mutual indemnity for negligence"],
        ["10", "Termination", "For-cause + convenience triggers; notice periods; equipment removal timelines"],
        ["11", "Confidentiality + data", "Sales data, employee data (if applicable), use limitations; GDPR/CCPA where applicable"],
        ["12", "General + miscellaneous", "Governing law, venue, dispute resolution, assignment, force majeure, notice procedures"],
      ],
    },
    {
      heading: "2. Provisions by placement type",
      paragraph:
        "Beyond the 12 core clauses, certain provisions are essentially mandatory at specific placement types. Review the table for your placement and add the listed provisions.",
      headers: ["Placement type", "Required additional provisions"],
      rows: [
        ["Federal / military", "Randolph-Sheppard Act priority for blind vendors; FAR clauses; FedRAMP-aligned data handling; background-check certifications"],
        ["K-12 schools", "USDA Smart Snacks compliance; Hughes Act commission requirements (where state participates); BG-eligibility background checks for staff with student contact"],
        ["Hospitals / healthcare", "HIPAA business-associate review (typically not BAA-triggering but documented); Joint Commission food safety + ADA; vendor credentialing program"],
        ["Multifamily / apartments", "Lease-amendment language; fire-egress + 44-in corridor compliance; resident-data privacy (CCPA/state)"],
        ["Entertainment + theme parks", "Surge pricing rules + weather-hardening + venue-app integration; concession-agreement carve-outs"],
        ["Gyms + fitness", "Member-app integration; product-claim substantiation (FTC); RTD-protein refrigeration handling"],
        ["Public / municipal buildings", "Public-bid + small-business / DBE / WBE requirements; ADA Title II"],
        ["Corporate offices", "Building-rules + lease-amendment; vendor security access; data-handling for telemetry"],
      ],
    },
    {
      heading: "3. Insurance + indemnification — typical limits",
      headers: ["Coverage", "Typical minimum limit", "Notes"],
      rows: [
        ["General liability", "$2M per occurrence / $4M aggregate", "ISO CG 00 01 form or equivalent"],
        ["Umbrella / excess", "$1M minimum, $5-10M for large sites", "Follow form to underlying GL"],
        ["Product liability", "$1M per occurrence / $2M aggregate", "Carve-out from GL acceptable if specifically endorsed"],
        ["Workers compensation", "Statutory + $1M employers liability", "Required in every state with employees"],
        ["Commercial auto", "$1M combined single limit", "If operator delivers to site"],
        ["Cyber / data breach", "$1M-$5M", "Required where operator handles host employee data or PII"],
        ["Additional insured", "Host + property owner + management co.", "On a primary, non-contributory basis"],
      ],
    },
    {
      heading: "4. Commission + pricing language",
      items: [
        { label: "Commission structure", value: "Tiered (e.g., 5% to $X gross, 10% from $X-$Y, 15% above $Y) or flat. Tier breaks tied to monthly or quarterly gross." },
        { label: "Gross vs net", value: "Define basis: gross sales (most common), gross minus sales tax (acceptable), net (rarely acceptable; avoid)." },
        { label: "Payment cadence", value: "Monthly within 30 days of month-end with sales report; quarterly acceptable for low-volume sites." },
        { label: "Pricing reset", value: "Operator may reset retail pricing once per 12-month period with 30-day notice; emergency reset for input-cost spike subject to mutual agreement." },
        { label: "Minimum guarantee", value: "Optional. Annual minimum commission floor; operator pays the higher of actual commission or minimum. Common at premium sites." },
        { label: "Audit rights", value: "Host may audit operator's sales records once per 12-month period with 30-day notice; discrepancy > 3% triggers operator-paid third-party audit." },
      ],
    },
    {
      heading: "5. Termination + transition",
      items: [
        { number: 1, title: "Termination for cause", description: "Material breach with 30-day cure period (e.g., uptime below SLA, missed commission payments, food-safety incident, loss of required insurance or licenses)." },
        { number: 2, title: "Termination for convenience", description: "Either party 60-90 day notice; operator may charge unamortized equipment investment if termination occurs before equipment is depreciated." },
        { number: 3, title: "Termination for change of control", description: "Either party may terminate within 90 days of the other's change of control with 30-day notice." },
        { number: 4, title: "Equipment removal", description: "Operator removes equipment within 14 days of termination effective date; host responsible for any damage caused by hosting; operator responsible for any damage caused by removal." },
        { number: 5, title: "Sales data + final report", description: "Operator delivers final sales report and commission reconciliation within 30 days of effective termination." },
        { number: 6, title: "Survival clauses", description: "Indemnification, confidentiality, audit rights, insurance (where claims-made), data handling survive termination per their own time limits." },
      ],
    },
    {
      heading: "6. Compliance certifications by reference",
      items: [
        { label: "PCI-DSS 4.0", value: "Operator provides AOC + applicable SAQ (SAQ-B-IP common for cashless vending with networked card readers); attests to no PAN storage at the machine." },
        { label: "FDA Food Code 2022", value: "Refrigerated foods ≤ 40°F per 3-501.16; FALCPA allergen labeling; date marking per 3-501.17 for ready-to-eat / time-controlled foods." },
        { label: "ADA Title III / Section 308", value: "Operable parts 15-48 in above finished floor; 30x48 in clear floor space; ≤ 5 lbf operating force." },
        { label: "NSF/ANSI 7 + 25", value: "Refrigerated vending machine + mechanical refrigeration certifications on file for all refrigerated units." },
        { label: "FTC Endorsement Guides", value: "Substantiation required for any 'healthy', 'organic', 'low-fat', or comparable product claim on the machine face." },
        { label: "State + local permits", value: "Vending machine permits where required by state (e.g., MA, CT, MD); local health department food-vending license." },
      ],
    },
    {
      heading: "7. Attorney review thresholds",
      paragraph:
        "Use these thresholds to decide when in-house or outside counsel review is non-negotiable. Below all thresholds, paralegal or procurement review may suffice, subject to your organization's contract-review policy.",
      items: [
        { check: "Total contract value (commission floor + equipment value over term) > $50,000 — counsel review required." },
        { check: "Term > 36 months or auto-renewal language — counsel review required." },
        { check: "Exclusivity granted for vending or any adjacent service — counsel review required." },
        { check: "Indemnification beyond operator-side product liability — counsel review required." },
        { check: "Limitation of liability or waiver of subrogation provisions — counsel review required." },
        { check: "Federal, public-school, or public-building placement — counsel + procurement review required (additional federal/state regimes apply)." },
        { check: "Data-handling provisions involve employee or resident PII — privacy counsel review required (GDPR, CCPA, state privacy law)." },
        { check: "Multistate placement under one master agreement — counsel review required (variant state law)." },
      ],
    },
    {
      heading: "8. Optional / negotiated provisions",
      items: [
        { label: "Right of first refusal", value: "Host's right to match a competing offer if operator chooses not to renew." },
        { label: "Performance benchmarks", value: "Quantitative KPIs (uptime, NPS, refund rate) tied to commission tier or termination triggers." },
        { label: "Most-favored-customer", value: "Operator attests pricing and commission terms are no less favorable than peers in the same channel + geography." },
        { label: "ESG + sustainability commitments", value: "Operator attests to recycling cadence, % compostable packaging, energy efficiency, or supplier diversity targets." },
        { label: "DEI + supplier diversity", value: "Operator attests to MBE/WBE/DBE status or subcontracting commitments." },
      ],
    },
  ],
  footer:
    "This template is informational and not legal advice. No contract should be executed without review by qualified legal counsel familiar with your jurisdiction and placement type. Insurance limits, indemnification language, and termination triggers should be calibrated to your organization's specific risk profile.",
});

console.log("wrote " + "sample-vending-contract-template");
