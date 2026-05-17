import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-vending-options-for-multifamily",
  assetType: "pack",
  title: "Multifamily Custom Vending RFP Template",
  subtitle: "Five-dimension spec, operator scoring matrix, contract addendum",
  intro:
    "Custom multifamily vending requests fall into five discrete dimensions — branding, planogram, pricing tier, member-app integration, and reporting. This RFP template gives each dimension a defensible spec and a contract addendum a capable operator can attest to.",
  sections: [
    {
      heading: "1. Five-dimension customization framework",
      headers: ["Dimension", "Scope", "Lead time"],
      rows: [
        ["1. Brand finish", "Vinyl wrap, powder coat, panel insert, illuminated marquee per cabinet", "3-6 weeks"],
        ["2. Per-zone planogram", "Lobby vs fitness vs lounge vs pool — separate SKU mix per cabinet", "1-2 weeks"],
        ["3. Member pricing tier", "Resident-app or RFID badge auth, member vs guest price", "1-3 weeks setup; 6-12 weeks if SDK integration required"],
        ["4. Member-app SDK", "Cantaloupe Engage / Nayax Onyx / 365 Pay deep-link from building app (RealPage / Yardi / Entrata)", "6-12 weeks"],
        ["5. BI reporting", "Monthly scorecard + scheduled CSV/SFTP or REST API to property BI", "2-4 weeks"],
      ],
    },
    {
      heading: "2. Brand finish spec",
      items: [
        { label: "Vinyl wrap", value: "3M IJ180Cv3 or Avery MPI 1105 cast vinyl with 3M 8520 / Avery DOL 1480 laminate; 7-year indoor durability. Per-cabinet $400-$900 install-included." },
        { label: "Powder coat", value: "TGIC polyester powder coat, 2-3 mil, RAL or Pantone match; furniture-grade. $600-$1,400 per cabinet (off-site refurb)." },
        { label: "Custom panel insert", value: "Printed acrylic or aluminum composite, sized to OEM cabinet door; CAD drawing supplied by operator. $200-$500." },
        { label: "Illuminated marquee", value: "LED edge-lit, 8-12 in tall, custom artwork, controllable for time-of-day messaging. $1,200-$3,500." },
        { label: "Artwork", value: "Vector EPS / AI / PDF, 1:1, CMYK + Pantone, 0.25 in bleed; photography ≥ 300 dpi at final size." },
        { label: "Brand standards", value: "Property logo, building-brand color palette, optional resident-portal QR or member-app deep-link printed on cabinet face." },
      ],
    },
    {
      heading: "3. Per-zone planogram requirements",
      items: [
        { label: "Lobby / package room", value: "Premium beverages + name-brand snacks + convenience essentials (umbrella, batteries, OTC). 35-45 SKUs." },
        { label: "Fitness center", value: "Sports drinks, electrolyte, water, protein bars, recovery snacks; no candy / sugary-soda saturation. 20-25 SKUs." },
        { label: "Resident lounge / co-work", value: "Cold brew RTD, sparkling water, kombucha, premium snacks, allergen-friendly options. 25-30 SKUs." },
        { label: "Pool deck (seasonal)", value: "Bottled water, sports drink, kid snack, sunscreen, sunglasses (small SKU set). 15-20 SKUs." },
        { label: "Specialty placements", value: "Ice cream cabinet, pet-treat dispenser, coffee bean-to-cup — case-by-case per property amenity stack." },
      ],
    },
    {
      heading: "4. Member-pricing tier framework",
      headers: ["Tier", "Price relationship", "Auth method"],
      rows: [
        ["Member (resident)", "Base × 0.85-0.95", "Member-app SDK, RFID resident badge, building-app QR"],
        ["Guest", "Base × 1.00", "Open cashless / cash"],
        ["Subsidized (host-paid)", "Resident pays $0; owner invoiced", "Member-app token; monthly host invoice"],
        ["Time-of-day promo", "Base × 0.75-0.85", "All users, restricted hours (e.g., post-fitness window)"],
      ],
    },
    {
      heading: "5. Member-app SDK integration scope",
      paragraph:
        "Use this scope statement in the contract. Each line should be answered Yes/No with target date.",
      items: [
        { number: 1, title: "Auth model", description: "Confirm whether auth is NFC RFID badge, QR code, member-app token, or app-pay deep link. Confirm fallback for failed-tap." },
        { number: 2, title: "Building-app integration", description: "Identify building-app vendor (RealPage Resident, Yardi RentCafe, Entrata ResidentPortal, Pynwheel, Livly) and confirm SDK interop." },
        { number: 3, title: "Credit funding source", description: "Resident card-on-file, payroll-deduction equivalent (not common in multifamily), host monthly stipend, or pay-as-you-go." },
        { number: 4, title: "Refund flow", description: "In-app refund button, SMS-to-refund, on-machine touchpad; auto-credit < 24 hours; cash refund < 7 days." },
        { number: 5, title: "User onboarding", description: "Pre-rollout resident-portal announcement, lobby signage, onboarding email, in-app first-use FAQ." },
        { number: 6, title: "UAT", description: "2-machine pilot with 25-50 residents over 2 weeks; capture decline-rate, double-charge edge cases, refund-flow friction." },
      ],
    },
    {
      heading: "6. Reporting + BI export",
      items: [
        { label: "Monthly scorecard", value: "Per-cabinet uptime, ticket SLA adherence, top-SKU velocity, refund volume, member-tier mix, cashless mix, gross revenue, commission settlement." },
        { label: "Data fields", value: "Transaction-level: transaction_id, timestamp, machine_id, sku, qty, unit_price, payment_type, member_tier, refund_flag." },
        { label: "Delivery channel", value: "Scheduled CSV/SFTP daily, REST API on-demand, or BI connector (Power BI / Tableau). One channel minimum, two preferred." },
        { label: "Access control", value: "Property-level role-based access; portfolio rollup for owner / asset manager." },
      ],
    },
    {
      heading: "7. Operator scoring matrix",
      headers: ["Criterion", "Weight", "Max score"],
      rows: [
        ["Multifamily portfolio depth", "1.5x", "4.5"],
        ["Brand-finish capability + references", "1.0x", "3"],
        ["Per-zone planogram experience", "1.0x", "3"],
        ["Member-pricing-tier track record", "1.5x", "4.5"],
        ["Member-app SDK integration capability", "1.5x", "4.5"],
        ["BI reporting + audit rights", "1.0x", "3"],
        ["Telemetry coverage + service SLA", "1.5x", "4.5"],
        ["Insurance + ADA compliance", "1.0x", "3"],
      ],
    },
    {
      heading: "8. Contract addendum clauses",
      items: [
        { check: "Brand-finish spec attached with vendor + warranty terms." },
        { check: "Per-zone planogram document attached; quarterly refresh cadence." },
        { check: "Member-tier pricing schedule with notice period for price changes (≥ 30 days)." },
        { check: "SDK integration scope statement signed by operator + property + app vendor." },
        { check: "BI reporting schema + delivery channel + SLA." },
        { check: "Equipment-return condition — wrap removal / cabinet refurbishment responsibility at contract end." },
        { check: "Audit rights — property can pull telemetry + reconcile against settlement quarterly." },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to match qualifying multifamily owners with operators that can deliver each dimension of customization above. Specific lead times and capex depend on operator tooling, integrator capacity, and property volume — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Lead times and capex ranges are reference values. Confirm against operator and payment-platform vendor at scoping.",
});

console.log("wrote " + "custom-vending-options-for-multifamily");
