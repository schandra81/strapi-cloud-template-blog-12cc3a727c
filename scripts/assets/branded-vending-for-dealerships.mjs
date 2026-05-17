import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "branded-vending-for-dealerships",
  assetType: "playbook",
  title: "Dealership Branded Vending Playbook",
  subtitle: "Four tiers, manufacturer alignment, co-marketed partnerships, and CSI integration",
  intro:
    "Branded vending in a dealership is a marketing surface as much as a refreshment program. The branding decision sits at the intersection of OEM brand standards, dealership-group identity, and beverage-brand co-marketing. This playbook frames the four common branding tiers, manufacturer alignment requirements, and the operator agreement structures that keep branded programs CSI-aligned and brand-compliant.",
  sections: [
    {
      heading: "1. Four branding tiers",
      paragraph:
        "Dealership branded-vending programs fall into one of four tiers. Each tier has different cost, brand-control, and CSI impact characteristics.",
      headers: ["Tier", "Branding source", "Brand control", "Typical cost", "Best fit"],
      rows: [
        ["Tier 1 — Unbranded", "Operator standard machine", "Operator brand visible; no dealership or OEM brand", "Lowest", "Small independents, used-car lots, budget-tier groups"],
        ["Tier 2 — Dealership-branded", "Wrap with dealership group logo and colors", "Dealership controls; operator paints/wraps", "$400-$1,200 wrap one-time", "Mass-market and premium groups wanting brand consistency"],
        ["Tier 3 — OEM co-branded", "Wrap with OEM brand standards (Toyota T-mark, Ford blue oval, Honda H)", "OEM brand standards govern; OEM may co-fund", "$800-$2,500 wrap + brand-standards review", "Single-OEM dealerships with strong OEM brand alignment"],
        ["Tier 4 — Beverage-brand sponsored", "Coca-Cola, Pepsi, or Red Bull full machine wrap + product exclusivity", "Beverage company controls equipment and SKU mix", "Often free equipment + 60-90 day exclusivity", "High-traffic groups where the customer base aligns with the beverage brand's target"],
      ],
    },
    {
      heading: "2. OEM brand-standards alignment",
      paragraph:
        "OEMs publish customer-experience and brand-standards documentation that constrains how dealerships present third-party amenities. Confirm before signing a multi-year branded equipment agreement.",
      items: [
        { label: "Brand guideline review", value: "OEM brand center (e.g., Toyota Brand Site, Ford Brand Hub, BMW Group Brand Portal) publishes color palette, logo placement, allowed third-party brand co-presence, and signage requirements. Equipment skin design reviewed before fabrication." },
        { label: "OEM-sponsored programs", value: "Some OEMs run vending or beverage programs (Mercedes-Benz Coffee Bar, Lexus Plus amenities) that pre-empt third-party operators. Confirm dealership is not already enrolled before contracting." },
        { label: "Multi-franchise groups", value: "Group with multiple OEMs (e.g., Honda + Toyota + Ford) typically picks a neutral dealership-group brand rather than co-branding each location to its OEM. Avoids brand-conflict at the group level." },
        { label: "Annual brand-audit", value: "OEM regional reps conduct annual brand-audit visits. Operator provides branded-machine photos and brand-standards attestation on request." },
      ],
    },
    {
      heading: "3. Co-marketed beverage-brand partnerships",
      items: [
        { number: 1, title: "Coca-Cola Bottling Investments", description: "Local Coca-Cola bottler offers branded equipment, exclusive Coke-portfolio placement, and dedicated route service. Typical structure: free equipment + free install + dealership receives Coke-portfolio products at preferential pricing + 60-90 day product exclusivity. Confirm bottler territory and contract terms with local rep." },
        { number: 2, title: "PepsiCo Foodservice", description: "Similar structure to Coca-Cola, with Pepsi-portfolio brands (Pepsi, Mountain Dew, Gatorade, Aquafina, Starbucks RTD). Foodservice rep negotiates equipment + product + marketing co-funding." },
        { number: 3, title: "Red Bull or Monster", description: "Specialty energy-drink coolers branded by the energy company. Often paired with a vending machine for breadth. Branded coolers free but product mix locked to the sponsoring brand." },
        { number: 4, title: "OEM co-funding", description: "Some OEM regional offices co-fund branded amenities under brand-experience grants. Document offered grants and any matching dealer-spend requirement before signing." },
      ],
    },
    {
      heading: "4. Wrap design and fabrication",
      items: [
        { label: "Wrap material", value: "3M IJ180Cv3 cast-vinyl wrap with 3M 8520 overlaminate, rated 7+ year outdoor durability. UV-stable inks (Mimaki UJV or HP Latex) for color longevity. ANSI/CTA-2034 fabrication standards." },
        { label: "Color matching", value: "Pantone-matched to OEM or dealership-group brand color. Operator provides color-proof for OEM/dealership sign-off before production." },
        { label: "Surface preparation", value: "Cabinet surface cleaned with isopropyl alcohol and degreaser. Wrap applied by certified installer (3M Preferred Graphics Installer or equivalent)." },
        { label: "Compliance markings", value: "FCC, UL, and FDA Food Code compliance labels remain visible after wrap. ADA reach-range labels and accessibility markings preserved per ADA Section 308 and 309." },
      ],
    },
    {
      heading: "5. Operator agreement structure for branded programs",
      paragraph:
        "Branded equipment changes the operator agreement in three ways: equipment ownership, exclusivity, and brand-standards enforcement.",
      headers: ["Provision", "Unbranded baseline", "Branded variation"],
      rows: [
        ["Equipment ownership", "Operator owns equipment", "Tier 4 (beverage-brand) — beverage company owns equipment; operator services"],
        ["Product exclusivity", "Operator selects planogram", "Tier 4 — exclusivity period (60-90 days) on sponsored brand portfolio"],
        ["Brand-standards enforcement", "Operator standard branding", "Tier 2-4 — OEM or dealership brand-standards approval before any signage or planogram change"],
        ["Renewal", "12-month rolling", "Tier 4 — 36-60 month sponsorship typical; matches equipment depreciation schedule"],
        ["Removal cost", "Operator at expiration", "Tier 4 — sponsor recovers branded equipment; dealership not charged removal"],
      ],
    },
    {
      heading: "6. CSI and customer-experience integration",
      items: [
        { check: "Branded machine signage matches OEM or dealership brand-experience standards and does not conflict with showroom signage." },
        { check: "Operator-contact information and refund process clearly visible on machine face per state vending regulation (most states require operator name, address, and phone number on each machine)." },
        { check: "FALCPA allergen signage and FDA Food Code 3-501.16 cold-chain compliance markings remain visible after wrap." },
        { check: "ADA Section 308 reach-range markings preserved; ADA Section 703 high-contrast pricing display maintained." },
        { check: "Brand-standards photo-documentation submitted to OEM regional or dealership group during annual brand-audit cycle." },
        { check: "CSI verbatim feedback related to branded machine reviewed quarterly with operator; planogram or branding refresh triggered if recurring negative comments emerge." },
      ],
    },
    {
      heading: "7. Multi-rooftop group economics",
      paragraph:
        "Auto groups with 10+ rooftops can negotiate consolidated branded-vending programs that reduce per-location cost and produce a consistent customer experience.",
      items: [
        { label: "Master service agreement", value: "Single agreement covering all rooftops. Standardized SLA, branded equipment specification, and consolidated billing. Operator typically discounts 2-4% on commission share for master agreements." },
        { label: "Brand consistency across rooftops", value: "Single wrap design and planogram refresh schedule across all locations. Reduces per-location design cost and ensures CSI auditors find consistent presentation." },
        { label: "Quarterly group business review", value: "Operator presents to group VP-of-Operations quarterly: per-rooftop revenue, uptime, CSI verbatims, planogram refresh recommendations. Group benchmarks rooftops against each other." },
        { label: "OEM co-funding at scale", value: "Group-level OEM co-funding typically larger than per-rooftop. Group brand-experience grants of $10K-$50K/year fund equipment, signage, and brand-standards refreshes." },
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the branding tier, OEM alignment, and operator agreement to your group's brand position, OEM portfolio, and CSI program targets.",
});

console.log("wrote "+"branded-vending-for-dealerships");
