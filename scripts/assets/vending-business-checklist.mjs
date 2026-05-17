import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-business-checklist",
  assetType: "checklist",
  title: "Vending Business Pre-Launch Checklist",
  subtitle: "State-by-state filings, equipment readiness, account-acquisition prep, and operating templates",
  intro:
    "Use this checklist to launch a vending operation that meets federal, state, and local compliance from day 1. Each section maps to a real filing, contract, or operational deliverable. Standards cited reference IRS, FDA Food Code 2022, PCI-DSS v4.0, ADA 2010 Standards, FTC 16 CFR Part 437, and state-specific examples.",
  sections: [
    {
      heading: "Section 1 — Business formation + federal filings",
      items: [
        { check: "Business entity formed (LLC, S-corp, sole prop); operating agreement / bylaws executed." },
        { check: "EIN obtained from IRS (free, online)." },
        { check: "Federal tax election filed if applicable (Form 8832 / Form 2553 for S-corp election)." },
        { check: "USDOT number obtained if operating commercial vehicles ≥ 10,001 lbs GVWR." },
        { check: "FTC Business Opportunity Rule reviewed (16 CFR Part 437) — relevant if buying from a biz-op seller." },
        { check: "FDA registration if commissary-prepping TCS food (21 CFR Part 1.225)." },
      ],
    },
    {
      heading: "Section 2 — State filings (varies by state)",
      items: [
        { check: "Sales-tax permit obtained from state department of revenue." },
        { check: "State vending or merchant license where required (CA, FL, NY, PA, OH, NC, MI, others — verify with your state DOR)." },
        { check: "State food-service license if vending TCS food (PA PDA, NC NCDA, MI LARA, etc.)." },
        { check: "Workers compensation registration per state statute (if hiring employees)." },
        { check: "Unemployment insurance registration per state statute (if hiring employees)." },
        { check: "E-Verify enrollment if your state requires (AZ, AL, GA, MS, NC, SC, TN, UT, others)." },
        { check: "State annual report scheduled (most states require annual or biennial)." },
      ],
    },
    {
      heading: "Section 3 — Local (city / county) filings",
      items: [
        { check: "City business / operating license obtained." },
        { check: "County health-department permit if vending TCS food." },
        { check: "Local zoning verification — placements typically commercial-by-right." },
        { check: "Fire-marshal sign-off for micro-market footprints > 1,000 sq ft." },
        { check: "Local sales-tax add-on registration (TX, IL, MO, AZ, AL, others with city / county add-on)." },
      ],
    },
    {
      heading: "Section 4 — Insurance + bonding",
      items: [
        { check: "General liability ≥ $1M per occurrence / $2M aggregate." },
        { check: "Product liability ≥ $2M with foodborne-illness coverage explicit." },
        { check: "Commercial auto ≥ $1M combined single limit." },
        { check: "Workers comp per state statute." },
        { check: "Cyber liability ≥ $1M (PCI-DSS breach response)." },
        { check: "Surety bond if state requires (some food + OH vendor's bond)." },
        { check: "COI template ready with host-as-additional-insured + 30-day cancellation notice." },
      ],
    },
    {
      heading: "Section 5 — Equipment readiness",
      items: [
        { check: "Each machine has current-generation MDB controller (Crane / AMS / Royal / Seaga / USI/Wittern / Federal current models)." },
        { check: "PCI-DSS v4.0 compliant card reader on every machine (Nayax / Cantaloupe / 365 Retail Markets / USA Technologies)." },
        { check: "Telemetry on every machine — sub-15-minute heartbeat." },
        { check: "UL 541 (refrigerated) or UL 751 (non-refrigerated) labels intact." },
        { check: "Cabinet ADA conformance — Section 308 reach range; Section 305 clear floor space." },
        { check: "Refrigerated units holding ≤ 38°F per FDA Food Code 2022 §3-501.16." },
        { check: "Pre-purchase inspection (28-point) completed and scored on every used machine." },
      ],
    },
    {
      heading: "Section 6 — Compliance attestations",
      items: [
        { check: "PCI-DSS v4.0 SAQ-C-VT or ROC completed; attestation date documented." },
        { check: "ADA Section 308 baseline measurements documented per machine." },
        { check: "FDA Food Code 2022 cold-chain attestation per refrigerated unit." },
        { check: "FALCPA allergen labeling on every TCS / packaged SKU." },
        { check: "Smart Snacks compliance log for any K-12 placements (USDA 7 CFR 210.11)." },
        { check: "Privacy notice + opt-out flow if using a loyalty app (CCPA / CPRA / VCDPA / CPA / CTDPA)." },
      ],
    },
    {
      heading: "Section 7 — Account acquisition prep",
      items: [
        { check: "Capability one-pager ready (telemetry, SLA tiers, refund flow, planogram cadence, compliance attestations)." },
        { check: "MSA template reviewed by counsel licensed in your state." },
        { check: "Proposal template with commission structure, SLA tiers, sample QBR." },
        { check: "Three reference accounts ready to share contact info with prospects." },
        { check: "Location criteria scorecard adopted (audience, infrastructure, drive-time, demographics)." },
        { check: "Locator-scam awareness brief reviewed (16 CFR Part 437 red flags)." },
      ],
    },
    {
      heading: "Section 8 — Operating templates ready",
      items: [
        { check: "Master Service Agreement (MSA) template — term, termination, SLA, refund, commission, indemnification." },
        { check: "Pilot agreement template — 60-90 day terms before MSA commitment." },
        { check: "Site survey form — measurements, photos, electrical, signal strength, ADA baseline." },
        { check: "Restock SOP — telemetry-driven cadence, per-SKU pull list, refund-process step." },
        { check: "Service-ticket SOP — Tier 1/2/3 routing + parts inventory + SLA clock." },
        { check: "Cold-chain log template — per-unit, per-restock temperature + sign-off." },
        { check: "Refund-procedure template — app + on-machine touchpad + SMS + audit cadence." },
        { check: "QBR template — uptime, stockouts, refunds, SLA adherence, action items." },
        { check: "Sales-tax remittance schedule by state + city / county." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal or tax advice. State + local licensing is highly variable; consult counsel + CPA licensed in your jurisdiction before launch.",
});

console.log("wrote "+"vending-business-checklist");
