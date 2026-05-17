import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-vip-suites-premium",
  assetType: "rfp template",
  title: "VIP Suite Vending RFP Template",
  subtitle: "Suite-billing integration playbook, premium SKU catalog, operator capability matrix, and SLA framework",
  intro:
    "Use this RFP template to solicit vending bids for VIP / suite environments where the audience expects concierge-grade discretion, premium SKUs, and seamless billing to the suite folio. The template covers suite-billing integration, the premium SKU catalog, the capability matrix, and the SLA posture appropriate to ultra-VIP placements.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue + suite count", value: "(specify — e.g., 60-suite tier at 18,000-seat arena; 40-suite tier at 50,000-seat stadium). Capability framing — describe environment, not anchor venue names." },
        { label: "Suite types", value: "Single-event lease, season lease, corporate-host, owner. Each may bill differently; operator scopes per type." },
        { label: "Per-suite-event premium spend benchmark", value: "Typical $250-$2,500 in vending + concession adjacent; operator's SKU mix must support full range." },
        { label: "Contract term", value: "3-5 year initial with quarterly premium-tier refresh." },
      ],
    },
    {
      heading: "2. Suite-billing integration playbook",
      paragraph:
        "Suite billing is the differentiator vs. general vending. Operator must integrate to the venue's POS / suite-billing platform so vending charges roll to the suite folio. Specify integration with Appetize, Bypass, Tapin2, Oracle Simphony, or comparable.",
      items: [
        { number: 1, title: "Suite-credential read", description: "Suite-holder taps a venue-issued NFC card, mobile-wallet pass, or Apple Wallet event ticket at machine; charges roll to suite folio." },
        { number: 2, title: "POS integration", description: "Operator's payment platform exchanges transaction data with venue POS (Appetize, Bypass, Tapin2, Oracle Simphony, or comparable) via REST or X12 EDI; latency < 5 seconds for charge confirmation." },
        { number: 3, title: "Concierge override", description: "Suite host can authorize a non-credentialed guest purchase via suite-attendant app; operator provides attendant interface." },
        { number: 4, title: "Real-time folio visibility", description: "Suite-holder can see running vending tab on suite tablet or mobile app; itemized statement at event close." },
        { number: 5, title: "Reconciliation", description: "Daily settlement file from operator to venue accounting; discrepancies investigated within 48 hours." },
        { number: 6, title: "PCI compliance", description: "Operator + venue POS path are PCI DSS Level 1; tokenization end-to-end; cardholder data never touches venue infrastructure." },
      ],
    },
    {
      heading: "3. Premium SKU catalog",
      headers: ["Category", "SKU count target", "Sample anchor items", "Per-unit price band"],
      rows: [
        ["Premium still + sparkling water", "4-6", "Saratoga, Acqua Panna, San Pellegrino, Topo Chico", "$5-$9"],
        ["Craft + functional beverage", "4-6", "Cold-brew nitro, kombucha, functional adaptogens", "$6-$12"],
        ["Premium savory snack", "4-6", "Truffle popcorn, single-origin charcuterie packs, premium nuts", "$8-$18"],
        ["Premium sweet snack", "3-5", "Single-origin chocolate (Valrhona / Amedei), artisan cookies", "$6-$14"],
        ["Health + dietary specialty", "3-5", "Allergen-free protein, keto / paleo bars, plant-based jerky", "$5-$10"],
        ["Gift + impulse premium", "3-5", "Branded merchandise, premium gum/mints, travel kits", "$8-$25"],
        ["Cold-chain prepared", "4-6", "Sushi, bento, premium salads — HACCP + FDA Food Code 2022 §3-501 compliance required", "$12-$28"],
      ],
    },
    {
      heading: "4. Operator capability matrix",
      headers: ["Criterion", "Weight", "Evidence required"],
      rows: [
        ["Suite-billing integration (Section 2)", "25%", "POS platform integration evidence; sample transaction flow; tokenization architecture"],
        ["Premium SKU sourcing", "15%", "Vendor list + distributor relationships for premium categories"],
        ["Cold-chain + food safety", "10%", "HACCP plan; FDA Food Code 2022 §3-501; temperature-monitoring telemetry"],
        ["Staff discretion + access protocol", "10%", "Background check, NDA, VIP-floor access protocol, dress code"],
        ["Aesthetic + finish quality", "10%", "Wood / metal / leather-trim cabinet options; ADA Section 308 maintained"],
        ["Restock + curation cadence", "10%", "Quarterly rotation; per-event pre-stock with 24-hour advance suite-holder allergy / preference accommodation"],
        ["Insurance + bonding", "5%", "$5M GL + $5M product liability + $500K crime + $2M cyber"],
        ["Reporting + analytics", "10%", "Per-event flash, monthly velocity, quarterly suite-holder satisfaction"],
        ["Pricing transparency", "5%", "Revenue share or fixed fee, line-itemized; per-suite folio reporting cadence"],
      ],
    },
    {
      heading: "5. SLA framework",
      items: [
        { label: "Uptime SLA", value: "99.5% (industry typical for general vending is 95-97%; VIP tier requires 99.5%)." },
        { label: "Stockout SLA", value: "Zero stockouts during event hours for suite-machines; operator pre-event stock to plan, mid-event surge crew." },
        { label: "Cold-chain SLA", value: "2-hour on-site response on temperature excursion; all TCS in excursion window discarded + replaced at operator cost." },
        { label: "Refund SLA", value: "Concierge phone + app channel; member-initiated refund auto-credited within 4 hours; charged-to-folio reversal within 1 business day." },
        { label: "Aesthetic SLA", value: "Cabinet wiped to luxury-finish standard per visit; finish-defect repair within 7 days; photo log uploaded to operator portal." },
        { label: "Reporting SLA", value: "Per-event flash within 24 hours; monthly suite-folio reconciliation within 5 business days of month-end." },
      ],
    },
    {
      heading: "6. Required attachments",
      items: [
        { check: "Portfolio: 3+ comparable VIP / suite placements (capability framing — environment scale, not anchor venue names)." },
        { check: "POS integration evidence (Section 2) with at least one of Appetize / Bypass / Tapin2 / Oracle Simphony." },
        { check: "Sample premium SKU catalog with vendor list." },
        { check: "HACCP plan + FDA Food Code 2022 §3-501 attestation." },
        { check: "Insurance certificates per Section 4." },
        { check: "Sample per-event + monthly + quarterly reports." },
        { check: "References: 3 venue F&B / suite-sales / hospitality contacts (last 24 months)." },
      ],
    },
    {
      heading: "7. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal." },
        { label: "Due date", value: "(specify — typically 30-45 days)" },
        { label: "Mandatory site walk", value: "Suite-tier walk-through with venue F&B + suite-sales; capability framing in scoring." },
        { label: "Award", value: "(specify — typically 45-60 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage venue procurement, F&B, and risk counsel before issue. Suite-billing integration cost should be confirmed against the venue's current POS contract.",
});

console.log("wrote "+"vending-vip-suites-premium");
