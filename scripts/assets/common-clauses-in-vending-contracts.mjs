import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "common-clauses-in-vending-contracts",
  assetType: "checklist",
  title: "Vending Contract Clause Checklist",
  subtitle: "Term, exclusivity, commission, termination, insurance, indemnification, and compliance",
  intro:
    "Use this checklist before signing or counter-signing a vending Master Service Agreement (MSA). Each clause below appears in most operator-drafted MSAs; the checklist flags the version host counsel should request. Standards cite ADA 2010, PCI-DSS v4.0, FDA Food Code 2022, FTC 16 CFR Part 437.",
  sections: [
    {
      heading: "Clause 1 — Term + renewal",
      items: [
        { check: "Initial term 1-3 years (3 years is industry-standard for micro-markets; 1-2 years for single machines)." },
        { check: "Renewal default — month-to-month after initial term, OR explicit re-up requiring host signature. Avoid auto-renewal for multi-year periods." },
        { check: "Notice for non-renewal — 60-90 days before term expiry; mutual." },
        { check: "Term should not exceed equipment useful life (typically 7 years for vending; 5 for kiosk systems)." },
      ],
    },
    {
      heading: "Clause 2 — Exclusivity scope",
      items: [
        { check: "Exclusivity limited to vending + micro-market service. Carve-outs: pantry service, catering, executive dining, branded coffee bar, BYO from home, employee-funded gift snacks." },
        { check: "Geographic scope — specific building(s) named; not 'company premises generally.'" },
        { check: "Exclusivity loss conditions — operator's repeated SLA failures, refund-rate excess, or compliance lapse should void exclusivity, not just trigger commission cuts." },
      ],
    },
    {
      heading: "Clause 3 — Commission structure",
      paragraph:
        "Commission norms reflect Automatic Merchandiser 2024 State of the Industry data. Higher commission isn't always better — a 25% commission on a high-volume stop nets the host more than 35% on a low-volume stop.",
      items: [
        { check: "Commission stated as a % of net sales (after sales tax, refunds, and credit-card processing fees) — not gross." },
        { check: "Commission tier structure based on machine type (snack / beverage / micro-market) and audience size." },
        { check: "Monthly commission reporting; payment within 30 days of month-end." },
        { check: "Host audit right — host can audit operator records on 30 days notice annually." },
        { check: "Commission floor for stops that fail to meet velocity targets due to operator service failures." },
        { check: "Price-increase cap — typically CPI + 2% annually; operator notifies host 30 days before any price change." },
      ],
    },
    {
      heading: "Clause 4 — Termination",
      items: [
        { check: "Termination for convenience — 30-90 day mutual notice. (Operators may push for cause-only termination; resist.)" },
        { check: "Termination for cause — material breach of SLA, refund-rate, compliance attestation (PCI-DSS / ADA / FDA / state sales tax)." },
        { check: "Cure period — 30 days from written notice; second notice = termination." },
        { check: "Termination-for-cause carve-outs — foodborne illness, PCI breach, ADA violation: immediate termination without cure period." },
        { check: "Exit fees — not industry-standard; resist any clause imposing fees > 3 months commission." },
        { check: "Equipment removal — operator removes equipment within 30 days at no cost to host; host has right to charge storage if not removed." },
      ],
    },
    {
      heading: "Clause 5 — Service SLA + credits",
      items: [
        { check: "Tier-1 (machine down, payment failure, temperature excursion) — acknowledge < 4 hours, resolve < 24 hours." },
        { check: "Tier-2 (stockout, planogram refresh) — acknowledge < 24 hours, resolve < 7 days." },
        { check: "Tier-3 (cosmetic, signage) — acknowledge < 5 days, resolve < 14 days." },
        { check: "SLA credits for missed targets — e.g., 5% commission credit per missed Tier-1 SLA in a month." },
        { check: "SLA reporting — operator delivers monthly SLA-adherence report to host." },
      ],
    },
    {
      heading: "Clause 6 — Compliance attestations",
      items: [
        { check: "PCI-DSS v4.0 — operator delivers current SAQ-C-VT or ROC annually." },
        { check: "ADA Section 308 — annual recertification with photos + measurements." },
        { check: "FDA Food Code 2022 — cold-chain attestation; HACCP-style temperature log per restock." },
        { check: "FALCPA allergen labels on every SKU; allergen summary on machine / kiosk face." },
        { check: "State + local licensing — operator attests to current sales-tax permit, food-service license (if applicable), and city business license." },
        { check: "Smart Snacks attestation if K-12 — SKU-level compliance log per USDA 7 CFR 210.11." },
        { check: "Privacy / data-processing addendum if a loyalty app collects PII (CCPA / CPRA / VCDPA / CPA / CTDPA)." },
      ],
    },
    {
      heading: "Clause 7 — Insurance + COI",
      items: [
        { check: "General liability ≥ $1M per occurrence / $2M aggregate." },
        { check: "Product liability ≥ $2M per occurrence with foodborne-illness coverage explicit." },
        { check: "Commercial auto ≥ $1M combined single limit." },
        { check: "Workers compensation per state statute." },
        { check: "Cyber liability ≥ $1M (PCI breach response, notification, credit monitoring)." },
        { check: "Host named as additional insured + certificate-holder; 30-day notice of cancellation." },
        { check: "COI re-issued annually; if operator fails to provide, host may withhold commission until cured." },
      ],
    },
    {
      heading: "Clause 8 — Indemnification",
      items: [
        { check: "Operator indemnifies host for foodborne illness traceable to operator product." },
        { check: "Operator indemnifies host for PCI-DSS breach of operator systems." },
        { check: "Operator indemnifies host for ADA non-conformance penalties." },
        { check: "Operator indemnifies host for sales-tax assessment arising from operator collection error." },
        { check: "Operator indemnifies host for product-liability claims by employees / visitors." },
        { check: "Mutual indemnification for IP and trademark; operator indemnifies for any third-party IP claim related to kiosk software." },
      ],
    },
    {
      heading: "Clause 9 — Refund + customer-service",
      items: [
        { check: "Refund flow: app + on-machine touchpad + SMS-to-refund number." },
        { check: "Cashless refund within 24 hours; cash refund at next restock visit (max 7 days)." },
        { check: "Refund-rate KPI < 2% of transactions; rates above trigger root-cause review." },
      ],
    },
    {
      heading: "Clause 10 — Miscellaneous",
      items: [
        { check: "Governing law + venue — host's state preferred (operator MSAs default to operator's state)." },
        { check: "Assignment — operator can't assign without host consent; mergers / acquisitions handled separately." },
        { check: "Force majeure — explicit carve-out for foodborne illness, PCI breach (operator-caused events are NOT force majeure)." },
        { check: "Confidentiality — mutual NDA for host-specific sales data + employee PII." },
        { check: "Entire agreement + amendment — written amendments only; no oral modifications." },
        { check: "Severability + survival — indemnification + confidentiality survive termination." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. Have a state-licensed attorney review every MSA before signature; state-specific clauses (sales tax, breach notification, privacy law) require local counsel.",
});

console.log("wrote "+"common-clauses-in-vending-contracts");
