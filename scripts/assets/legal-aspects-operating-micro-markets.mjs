import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "legal-aspects-operating-micro-markets",
  assetType: "checklist",
  title: "Micro-Market Legal Framework Checklist",
  subtitle: "Eight regulatory frameworks, MSA scope, audit cadence, and state addendum",
  intro:
    "Use this checklist when scoping a micro-market MSA. Each framework below maps to a specific federal regulation, industry standard, or state-level enforcement risk. Have your operator attest to each line in writing before contract signature.",
  sections: [
    {
      heading: "Framework 1 — FDA Food Code 2022 (cold-chain + food safety)",
      paragraph:
        "FDA Food Code 2022 is adopted by all 50 states with state-specific modifications. It governs grab-and-go fresh-food handling, temperature control, and date-marking.",
      items: [
        { check: "Refrigerated TCS food held at ≤ 41°F (Section 3-501.16); operator logs temperatures at each restock." },
        { check: "Hot-held TCS food at ≥ 135°F (Section 3-501.16) — applies to hot-food micro-markets." },
        { check: "Date marking on every commissary-prepared item (Section 3-501.17); discard date ≤ 7 days from preparation." },
        { check: "Operator's commissary kitchen has a current health-department permit; copy retained in MSA file." },
        { check: "Operator carries product-liability insurance ≥ $2M per occurrence with foodborne-illness coverage." },
      ],
    },
    {
      heading: "Framework 2 — PCI-DSS v4.0 (March 2024 effective)",
      items: [
        { check: "Operator's kiosk + back-office attested to PCI-DSS v4.0 SAQ-C-VT (or higher) — obtain attestation date." },
        { check: "Cardholder data is never stored on the kiosk; tokenization handled by 365 Retail Markets / Cantaloupe / Nayax." },
        { check: "Annual PCI ROC or SAQ refresh; operator provides updated attestation to host annually." },
        { check: "Breach notification within 72 hours of operator discovery, per state breach-notification laws (all 50 states + DC)." },
      ],
    },
    {
      heading: "Framework 3 — ADA Title III + 2010 ADA Standards",
      items: [
        { check: "Kiosk reach range ≤ 48 inches per Section 308; clear floor space 30 inch × 48 inch per Section 305." },
        { check: "Kiosk touchscreen has audio-output mode or paired mobile app for blind / low-vision users (WCAG 2.1 AA)." },
        { check: "Annual ADA recertification with photographs and measurements." },
        { check: "Operator carries an active VPAT for the kiosk software, revised within the last 12 months." },
      ],
    },
    {
      heading: "Framework 4 — State sales tax + prepared-food tax",
      paragraph:
        "Sales tax treatment of micro-market food varies by state. Some states tax prepared food at a higher rate than grocery; others exempt vending-style sales entirely. Operator should remit tax and provide a quarterly report to the host.",
      items: [
        { check: "Operator registered for sales tax in your state and any local jurisdictions (city, county)." },
        { check: "Prepared-food vs grocery-rate distinction handled by the kiosk SKU mapping." },
        { check: "Quarterly tax-remittance report from operator to host, separately stating tax collected." },
        { check: "Sales-tax indemnity in MSA — operator indemnifies host for any tax assessment arising from operator's collection error." },
      ],
    },
    {
      heading: "Framework 5 — Worker classification + on-site labor",
      items: [
        { check: "Operator's restock + service technicians are W-2 employees (not 1099) if they work exclusively on operator's route — reduces joint-employer risk under FLSA." },
        { check: "If host requires badged on-site access, operator provides a list of cleared personnel with background-check attestation." },
        { check: "Operator's E-Verify status confirmed where required by state law (AZ, AL, GA, MS, NC, SC, TN, UT, etc.)." },
      ],
    },
    {
      heading: "Framework 6 — Insurance + COI",
      items: [
        { check: "General liability ≥ $1M per occurrence / $2M aggregate." },
        { check: "Product liability ≥ $2M per occurrence with foodborne-illness coverage explicit." },
        { check: "Auto liability ≥ $1M combined single limit (delivery vehicles)." },
        { check: "Workers compensation per state statutory requirement." },
        { check: "Cyber liability ≥ $1M (PCI-DSS breach response, notification, credit monitoring)." },
        { check: "Host named as additional insured + certificate-holder; 30-day notice of cancellation." },
      ],
    },
    {
      heading: "Framework 7 — Data privacy (CCPA / CPRA / state equivalents)",
      paragraph:
        "Micro-market loyalty apps collect personal information subject to state privacy laws. California (CCPA/CPRA), Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and other states impose disclosure + opt-out obligations.",
      items: [
        { check: "Operator's loyalty / app privacy notice complies with applicable state privacy law." },
        { check: "Opt-out / delete request flow operational; operator response SLA documented in MSA." },
        { check: "No sharing of host-employee data with third parties except as required for transaction processing." },
        { check: "Data Processing Addendum (DPA) signed where the host has CCPA/CPRA / GDPR obligations." },
      ],
    },
    {
      heading: "Framework 8 — Smart Snacks / wellness compliance (where applicable)",
      items: [
        { check: "If on K-12 property — Smart Snacks in School compliance per USDA 7 CFR 210.11." },
        { check: "If host has a corporate wellness program — operator commits to SKU-mix targets (e.g., 30% better-for-you per FITS or NAMA FitPick guidance)." },
        { check: "Allergen labeling on every SKU per FALCPA; allergen summary on the kiosk." },
      ],
    },
    {
      heading: "MSA scope checklist",
      items: [
        { check: "Term + termination — 1-3 year initial; 30-90 day notice without cause." },
        { check: "Exclusivity scope (food/beverage service only; not pantry, catering, or events)." },
        { check: "Commission structure + cap on price increases." },
        { check: "Service SLA tiers with credits for missed SLA." },
        { check: "Audit rights — host can audit operator records on 30 days notice annually." },
        { check: "Indemnification — operator indemnifies for foodborne illness, PCI breach, ADA non-conformance, tax error." },
        { check: "Insurance attached as Exhibit; COI re-issued annually." },
        { check: "State-specific addendum (sales tax, breach notification, privacy law) attached as Exhibit." },
      ],
    },
    {
      heading: "Annual audit cadence",
      items: [
        { label: "Q1", value: "PCI-DSS attestation refresh; insurance COI refresh." },
        { label: "Q2", value: "ADA recertification site visit; cold-chain log review." },
        { label: "Q3", value: "Sales-tax remittance audit; commission reconciliation." },
        { label: "Q4", value: "QBR-driven planogram refresh; renewal posture review." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Consult counsel licensed in your jurisdiction; state-specific addenda should be drafted by counsel familiar with state sales-tax, food-code, and privacy law.",
});

console.log("wrote "+"legal-aspects-operating-micro-markets");
