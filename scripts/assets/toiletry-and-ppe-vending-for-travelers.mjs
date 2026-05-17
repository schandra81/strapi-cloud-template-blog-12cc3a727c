import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "toiletry-and-ppe-vending-for-travelers",
  assetType: "checklist",
  title: "Traveler Specialty Vending Framework",
  subtitle: "Nine-category SKU mix, FDA labeling checklist, multi-currency / multi-language spec, and operator capability matrix",
  intro:
    "Use this checklist when scoping a traveler-focused specialty vending placement — airports, train stations, bus terminals, hotels, and large transit hubs. Traveler vending differs from standard placements primarily in product mix, regulatory category, payment flexibility, and language coverage. Mark each item Verified, Acceptable with mitigation, or Not addressed before contract execution.",
  sections: [
    {
      heading: "1. Nine SKU categories for traveler vending",
      paragraph:
        "Specialty traveler vending typically spans nine product categories. Each category has its own regulatory and compliance overlay. Confirm operator capability against each.",
      items: [
        { check: "Travel-size toiletries: TSA 3-1-1 compliant (≤ 3.4 oz / 100 mL per item) for sterile-area placement." },
        { check: "PPE: surgical masks, KN95, hand sanitizer (FDA OTC monograph), disinfecting wipes." },
        { check: "Electronics: phone chargers, USB-C / Lightning cables, earbuds, charging banks (FCC Part 15 compliant)." },
        { check: "Comfort and rest: neck pillows, eye masks, earplugs, blankets, compression socks." },
        { check: "OTC pharmacy: ibuprofen, acetaminophen, antacids, motion-sickness pills — state-level licensing applies (see Section 3)." },
        { check: "Hydration and snack: water, electrolyte beverages, low-allergen snack bars, gluten-free options." },
        { check: "Convenience: toothbrush + toothpaste kits, deodorant, sewing kit, lint roller." },
        { check: "Gifting: small souvenirs, local-flavor items where the host site permits." },
        { check: "Emergency: phone adapter for international travelers, travel-document holder, micro-flashlight." },
      ],
    },
    {
      heading: "2. FDA labeling and OTC compliance",
      items: [
        { check: "All toiletry, cosmetic, and personal-care SKUs labeled per FDA 21 CFR 701 (cosmetic labeling) including ingredients in INCI order." },
        { check: "Hand sanitizer SKUs comply with FDA OTC monograph for topical antiseptics — Drug Facts panel on the label." },
        { check: "OTC pharmacy SKUs (analgesics, antacids) labeled per FDA OTC monograph; Drug Facts panel visible to the consumer pre-purchase." },
        { check: "Food and snack SKUs labeled per FDA 21 CFR 101 including allergen disclosure per FALCPA." },
        { check: "Tamper-evident packaging on all OTC, food, and personal-care SKUs per FDA 21 CFR 211.132 (where applicable)." },
      ],
    },
    {
      heading: "3. State licensing — OTC pharmacy in vending",
      items: [
        { check: "State permits OTC pharmacy vending (allowed in most states, restricted or prohibited in several — verify with state board of pharmacy)." },
        { check: "Operator holds applicable state vending or retail license, plus pharmacy / nonresident-distributor registration where required." },
        { check: "Lot tracking enabled for OTC SKUs so recall response can pull stock across the fleet within 24 hours." },
        { check: "Expiration date display on the machine face or via app for OTC and food SKUs." },
        { check: "First-in / first-out rotation attested by operator at each restock visit." },
      ],
    },
    {
      heading: "4. Multi-currency and multi-language interface",
      items: [
        { check: "Tap-to-pay and mobile wallet accepted on Visa, Mastercard, AmEx, Discover, JCB, UnionPay, and Discover Diners where international travelers are expected." },
        { check: "Currency conversion handled by the payment processor; no operator-level currency markup beyond network rates." },
        { check: "User interface translated into at least English plus the two most common non-English languages at the site (e.g., Spanish + Mandarin at LAX, French at YUL)." },
        { check: "Allergen icons displayed using internationally recognized symbols (not text-only)." },
        { check: "Receipt available via SMS, QR-code email, or printed slip — accommodating travelers without a local phone number." },
      ],
    },
    {
      heading: "5. Site, ADA, and operator capability matrix",
      items: [
        { check: "ADA Section 308 reach range (≤ 48 in / ≥ 15 in AFF), Section 305 clear floor space (30 × 48 in), Section 309.4 operating force (≤ 5 lbf) verified." },
        { check: "Operator carries CGL $1M/$2M, products/completed ops $2M, umbrella ≥ $5M (raise to $10M for airports), cyber, workers' comp." },
        { check: "Operator attests to 24/7 service SLA: Tier 1 ≤ 4 hour, Tier 2 ≤ 24-48 hour, Tier 3 ≤ 14 day; telemetry heartbeat ≤ 15 minutes." },
        { check: "Operator provides a sample planogram for the specific site type (airport sterile area, hotel lobby, transit hub) with shift-aware velocity assumptions." },
        { check: "Operator can supply specialty SKUs at scale (FDA-licensed supply chain partners, lot tracking, expiration management)." },
        { check: "Operator references at comparable traveler-vending placements provided on request (capability framing — not a guarantee of named work)." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, regulatory, or pharmacy-licensing advice. State pharmacy boards, FDA OTC monographs, and TSA Part 1542 rules govern aspects of specialty traveler vending. Coordinate the final review with counsel and the host site's compliance office. LetUsVending can connect you with operators equipped to handle traveler specialty vending — request the specialty capability matrix to compare candidates.",
});

console.log("wrote " + "toiletry-and-ppe-vending-for-travelers");
