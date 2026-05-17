import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-services-for-apartment-buildings",
  assetType: "matrix",
  title: "Apartment Building Vending Placement Framework",
  subtitle: "Program tier, zone matrix, and operator capability rubric for multifamily placements",
  intro:
    "This framework gives multifamily property managers, owner-operators, and asset managers a structured way to design a vending or AI cooler placement for resident-amenity programs. References to ADA Section 308 + 309, NFPA 70 (NEC) for electrical, NFPA 13 for sprinkler clearance, FDA Food Code 3-501.16 for cold-chain, PCI-DSS 4.0 for cashless transaction handling, and FALCPA + FDA menu labeling. Capability-framed throughout — operator should attest in writing.",
  sections: [
    {
      heading: "1. Program-tier matrix",
      paragraph:
        "Match tier to building size, resident demographics, and amenity ambition. Building tier drives equipment selection and operator service model.",
      headers: ["Tier", "Building / community size", "Best format", "SKU depth", "Typical monthly gross", "Typical commission tier"],
      rows: [
        ["Tier 1 — small (single building)", "75-149 doors", "Combo vending + bottled-water cooler", "30-50 SKU", "$800-$1,800", "0-5%"],
        ["Tier 2 — mid (single building)", "150-299 doors", "Snack + beverage + small AI cooler or micro-market", "60-80 SKU", "$2,400-$5,000", "5-8%"],
        ["Tier 3 — large (single building)", "300-499 doors", "AI cooler + snack/beverage combo + coffee unit", "80-110 SKU", "$5,000-$10,000", "8-12%"],
        ["Tier 4 — extra-large / community cluster", "500-999 doors (or multi-building cluster)", "Multi-format: AI cooler + snack/beverage + coffee + grab-and-go", "110-150 SKU", "$10K-$20K", "10-15%"],
        ["Tier 5 — premium / luxury", "Any size with premium amenity ambition", "AI cooler with curated mix; barista-style coffee; sundries cabinet", "60-90 curated SKU", "Varies — premium pricing", "Often 0% or revenue-share"],
      ],
    },
    {
      heading: "2. Zone matrix — placement within building",
      paragraph:
        "Placement zone drives foot traffic, security, and ADA compliance. Document the zone choice in the placement letter.",
      headers: ["Zone", "Foot traffic", "Security / surveillance", "Best format", "Notes"],
      rows: [
        ["Lobby / entry", "High; visitors + residents", "24/7 camera + concierge", "AI cooler + snack/beverage combo", "Premium placement; cashless preferred; visible to leasing tours"],
        ["Mail room / package room", "High; daily resident visits", "24/7 camera + access-controlled", "Snack/beverage combo + small AI cooler", "Strong dwell time; cashless preferred"],
        ["Fitness / amenity floor", "Moderate; resident-only", "Camera + key fob", "AI cooler with sports-nutrition mix + bottled water", "Healthier SKU mix; aligns with fitness brand"],
        ["Resident lounge / co-working", "Moderate; resident-only", "Camera + key fob", "AI cooler + premium coffee + snack", "Late-night skew; food-grade mix"],
        ["Pool / outdoor amenity", "Seasonal; resident + guest", "Camera + key fob", "Bottled-water + sports drink combo (NEMA-rated unit)", "Weatherproofed equipment required; seasonal stocking"],
        ["Parking garage", "Low; transient", "Camera only", "Snack/beverage combo", "Limited fit; security skew toward cashless only"],
      ],
    },
    {
      heading: "3. Operator capability rubric",
      items: [
        { label: "Multifamily reference accounts", value: "Operator should provide 3+ active multifamily placements ≥ 12 months in service; reference call with on-site property manager required." },
        { label: "Telemetry + uptime SLA", value: "≥ 98% uptime, cellular or VLAN telemetry, ≤ 30 min offline alert, ≤ 24 hr Tier-1 service response." },
        { label: "Payment + PCI-DSS 4.0", value: "Apple Pay, Google Pay, contactless EMV, optional app/account. AOC + SAQ-B-IP on file; no PAN storage at the cooler." },
        { label: "Refund SLA", value: "Cashless auto-credit ≤ 24 hr; cash refund mailed ≤ 7 business days; self-serve QR/NFC + SMS + phone channels." },
        { label: "Restock cadence", value: "2x/wk for snack/beverage; 3-5x/wk for AI cooler / micro-market; telemetry-triggered top-offs." },
        { label: "Planogram framework", value: "Quarterly refresh; bottom-5 drop + top-5 add; FALCPA allergen labeling; FDA menu labeling per 21 CFR 101.11 where operator has ≥ 20 placements." },
        { label: "Cold-chain compliance", value: "Internal-temp telemetry alert ≤ 4 hr excursion; FDA Food Code 3-501.16 attestation; cold-chain log retained ≥ 12 months." },
        { label: "ADA Section 308 + 309 compliance", value: "Written attestation + annual verification + 30x48 in clear floor space + 15-48 in operable parts + ≤ 5 lbf operating force." },
        { label: "Resident communications kit", value: "Lobby launch poster, newsletter copy, door-hanger card, email template, refund + support copy." },
        { label: "Insurance + liability", value: "$2M GL + $1M umbrella + additional-insured endorsement to owner + management company; food product liability ≥ $1M." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Property managers should confirm placement complies with local building code, fire marshal requirements, and lease-amendment language. Operator capability claims should be verified through written attestation and reference calls. LetUsVending can connect multifamily teams with operators equipped to serve resident-amenity placements.",
});

console.log("wrote "+"vending-services-for-apartment-buildings");
