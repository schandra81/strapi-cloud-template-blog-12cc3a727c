import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-design-aesthetics",
  assetType: "pack",
  title: "Apartment Vending Aesthetic Design Pack",
  subtitle: "Vinyl-wrap design brief, cabinet finish specs, surrounding zone integration",
  intro:
    "Vending cabinets are visible amenity hardware. Aesthetics carry brand weight equal to lobby furniture and signage. This pack covers the design brief for vinyl wraps, alternative cabinet finishes, and the surrounding-zone integration that keeps the cabinet feeling intentional, not bolted-on.",
  sections: [
    {
      heading: "1. Why aesthetics matter (and what they affect)",
      items: [
        { label: "Resident perception", value: "NMHC + Kingsley resident-satisfaction research consistently shows visible amenity quality as a top driver of renewal intent. Cabinet finish reads as 'host attention' or 'host neglect.'" },
        { label: "Tour conversion", value: "Leasing tours encounter the lobby cabinet first. A wrapped + branded cabinet reads premium; a sticker-laden cabinet reads workforce-tier." },
        { label: "Operator commission", value: "Premium-finish cabinets unlock higher commission tiers because they sustain premium pricing and higher dwell." },
        { label: "Vandalism + tamper", value: "Branded cabinets — particularly those integrated into the lobby design language — see lower vandalism than commodity cabinets in the same neighborhood." },
      ],
    },
    {
      heading: "2. Finish options matrix",
      headers: ["Finish", "Lead time", "Per-cabinet cost", "Durability", "Refresh interval"],
      rows: [
        ["Cast vinyl wrap", "3-4 weeks", "$400-$900", "7-10 year indoor", "5-7 years"],
        ["Calendered vinyl wrap (budget)", "2-3 weeks", "$250-$450", "3-5 year indoor", "3 years"],
        ["Powder coat (off-site refurb)", "4-6 weeks", "$600-$1,400", "10+ years", "10 years"],
        ["Custom panel insert (acrylic / ACM)", "3-5 weeks", "$200-$500", "7-10 years", "5-7 years"],
        ["Illuminated marquee (LED)", "4-6 weeks", "$1,200-$3,500", "7-10 years", "5-7 years"],
        ["Wood / laminate cabinet skin", "5-7 weeks", "$800-$1,800", "10+ years", "Lifecycle"],
      ],
    },
    {
      heading: "3. Vinyl wrap design brief template",
      paragraph:
        "Issue to operator and wrap fabricator together. Each line should yield a delivered artifact.",
      items: [
        { number: 1, title: "Brand standards", description: "Logo (vector EPS / AI), color palette (CMYK + Pantone), typography (font files), photography style." },
        { number: 2, title: "Cabinet template", description: "OEM cabinet door CAD drawing at 1:1 scale (Royal Vendors / Dixie-Narco / Crane Merchant / Vendo / USI) — required to template the wrap." },
        { number: 3, title: "Design concepts", description: "2-3 design concepts at concept-board stage; 1 selected for production proof." },
        { number: 4, title: "Production-ready artwork", description: "Vector EPS / AI / PDF at 1:1 scale, CMYK + Pantone, 0.25 in bleed; photography ≥ 300 dpi at final size." },
        { number: 5, title: "Wrap material spec", description: "3M IJ180Cv3 or Avery MPI 1105 cast vinyl; 3M 8520 / Avery DOL 1480 laminate; matte / gloss / satin finish call." },
        { number: 6, title: "Install + warranty", description: "Certified 3M Preferred or Avery Certified installer; 7-year indoor warranty registered." },
        { number: 7, title: "Removal spec", description: "Heat-and-pull removal at end-of-term; no residue; cabinet door condition preserved per operator-return spec." },
      ],
    },
    {
      heading: "4. Cabinet finish specs (alternative to wrap)",
      items: [
        { label: "Powder coat", value: "TGIC polyester powder coat, 2-3 mil thickness, RAL or Pantone match. Furniture-grade. Off-site refurb at coater; 4-6 week downtime per cabinet (rotate spare in)." },
        { label: "Custom panel insert", value: "Printed acrylic or aluminum composite panel sized to OEM cabinet door (typical 60-80 in × 24-32 in); replaces front-door appearance; OEM CAD drawing required." },
        { label: "Illuminated marquee", value: "LED edge-lit marquee 8-12 in tall, custom artwork, controllable via vending controller for time-of-day messaging (e.g., 'good morning' window, 'after-hours' window)." },
        { label: "Wood / laminate skin", value: "Furniture-grade laminate or veneer applied to cabinet sides + front; reads as integrated lobby furniture; longest lifecycle but highest install complexity." },
      ],
    },
    {
      heading: "5. Surrounding-zone integration",
      paragraph:
        "Cabinet finish alone is half the work — the surrounding zone determines whether it reads intentional.",
      items: [
        { label: "Lighting", value: "Cabinet face lighting from above (2700-3000K warm white), 50-100 lux at cabinet face; supplements internal cabinet lighting for product visibility." },
        { label: "Wall treatment", value: "Accent wall behind cabinet (paint, tile, wood-slat, acoustic-panel) — visual anchor that the cabinet sits against, not in front of." },
        { label: "Adjacent furniture", value: "Bench or shelf within 6 ft of cabinet — gives residents a place to consume / open packaging; reduces lobby litter." },
        { label: "Trash + recycling", value: "Within 15-25 ft of cabinet face; container finish matches cabinet brand palette." },
        { label: "Signage", value: "Wayfinding signage upstream (lobby map, elevator-area board) lists vending as an amenity; lobby signage near cabinet lists payment methods + member-app QR + refund flow." },
        { label: "Flooring + base", value: "Floor base or kick-plate that visually integrates cabinet base with surrounding floor; avoid exposed leveling feet." },
      ],
    },
    {
      heading: "6. Outdoor + pool deck aesthetic",
      items: [
        { check: "Hardened outdoor cabinet (NEMA 3R or IP54) with neutral powder coat that matches deck furniture palette." },
        { check: "Shade structure or awning over cabinet face — reduces glare on display, extends vinyl wrap life by 2-3 years." },
        { check: "Cabinet placement away from direct chlorinated spray (chlorine accelerates UV degradation on vinyl)." },
        { check: "Anchor pad / paver base that integrates with deck materials." },
        { check: "Seasonal cover for off-season months (Q4-Q1 in temperate climates) — branded cover or simple cabinet wrap." },
      ],
    },
    {
      heading: "7. Premium / lifestyle aesthetic moves",
      items: [
        { label: "Recessed cabinet niche", value: "At new-construction or major-renovation phase, build a niche into the lobby wall sized for the cabinet — flush face, no visible sides; reads as built-in." },
        { label: "Brand-immersive cabinet", value: "Vending Design Works / custom-fabricated cabinet with brand-immersive front; $40-$80K capex, reserved for flagship lobby." },
        { label: "Multi-cabinet wall composition", value: "2-3 cabinets in a row (snack + beverage + specialty) with shared marquee, unified base + crown molding — reads as a designed bank." },
        { label: "Member-app QR integration", value: "Etched or printed QR on cabinet face, branded, that deep-links to member-app for pricing tier + refund + stock-visibility." },
        { label: "Hidden refresh schedule", value: "Operator restock during quiet hours (early-morning) so residents rarely see the cabinet 'in service' state." },
      ],
    },
    {
      heading: "8. Maintenance + refresh cadence",
      items: [
        { check: "Daily — operator visual inspection during restock; flag scratches / scuffs / fade." },
        { check: "Monthly — property facilities check on cabinet exterior + surrounding lighting + signage." },
        { check: "Quarterly — wrap touch-up on minor scuffs (4 in × 4 in or smaller); full panel replacement on larger damage." },
        { check: "Annual — full wrap inspection; UV-fade index check; lighting/lux re-measurement." },
        { check: "5-year — full wrap refresh planned + budgeted; surrounding-zone refresh aligned with property amenity-refresh cycle." },
        { check: "Brand-change event — wrap refresh within 60 days of brand-identity update." },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to match qualifying multifamily owners with operators that hold cast-vinyl-wrap, powder-coat, custom-panel, illuminated-marquee, and brand-immersive cabinet capability. Specific finish lead times and capex depend on cabinet model and fabricator capacity — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Finish costs and refresh intervals are reference values from wrap fabricators and operator capex disclosures; confirm against your operator's tooling.",
});

console.log("wrote " + "vending-machine-design-aesthetics");
