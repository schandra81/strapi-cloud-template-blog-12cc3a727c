import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "24-7-vending-services-for-hotel-guests",
  assetType: "playbook",
  title: "24/7 Hotel Vending + Amenity Playbook",
  subtitle: "Placement portfolio, RFP framework, SLA matrix, planogram by placement type, guest-communication kit",
  intro:
    "Hotel vending is a guest-amenity decision, not a snack-merchandising decision. This playbook codifies how to design a 24/7 amenity program against the property's brand standard, AAA Diamond / Forbes inspection criteria, and ADA Title III. Each section maps to a measurable SLA or a brand-standard reference your operator should be equipped to attest to.",
  sections: [
    {
      heading: "1. Placement portfolio",
      paragraph:
        "A 24/7 program covers four placement types. Each has distinct planogram, equipment, and SLA implications.",
      headers: ["Placement", "Equipment", "Hours of expected demand", "Planogram weight"],
      rows: [
        ["Pantry market (lobby / select-service flag)", "Open-shelf + 1 cooler + 1 snack tower, RFID self-checkout", "24/7, peak 5-9 PM + 11 PM-2 AM", "Grab-and-go meals 35%, beverages 30%, sundries 20%, snacks 15%"],
        ["Floor vending alcoves (3-6 alcoves per tower)", "1 beverage + 1 snack + 1 sundry per alcove", "24/7, peak 10 PM-2 AM", "Beverages 50%, snacks 30%, sundries 20%"],
        ["Pool / fitness adjacency", "1 beverage cooler (water + sports drink weighted)", "6 AM-11 PM (pool deck), 24/7 (fitness)", "Water 50%, sports drinks 25%, protein 25%"],
        ["Meeting-floor amenity", "Hosted day-of-event; vending fallback overnight", "Event windows + 11 PM-6 AM fallback", "Beverages 60%, light snacks 40%"],
      ],
    },
    {
      heading: "2. RFP framework — operator selection",
      paragraph:
        "The RFP must let you compare operators on brand-standard alignment, not just commission. Anchor to these eight capability areas.",
      items: [
        { number: 1, title: "Brand-standard attestation", description: "Operator can attest in writing to the property's brand standard (Marriott BSA, Hilton OS&E, IHG Brand Hallmarks, Hyatt Brand Standards, Choice Brand Standards). Photo proof of equipment + signage at comparable properties." },
        { number: 2, title: "Cashless + folio integration", description: "Operator supports EMV chip, contactless tap, mobile wallet, and PMS folio post (where the brand supports it — Opera, OnQ, Marsha, FOSSE). Demo environment available for testing." },
        { number: 3, title: "SLA matrix", description: "Tier 1 ≤ 4-hour on-site; Tier 2 24-48 hour acknowledgement; Tier 3 5-day. Penalty structure for SLA breach written into the agreement." },
        { number: 4, title: "Telemetry + reporting", description: "Cellular sub-15-minute heartbeat. Monthly uptime and per-SKU velocity report. Property-level dashboard access." },
        { number: 5, title: "ADA + accessibility", description: "ADA Title III + Section 308/309/703 attestation; VPAT for digital interfaces." },
        { number: 6, title: "Insurance + indemnity", description: "$2M general liability + $5M umbrella minimum; property listed as additional insured; mutual indemnity with carve-outs reviewed by property GM." },
        { number: 7, title: "Energy compliance", description: "ENERGY STAR equipment + R-290 refrigerant attestation. Scope 2 reporting where the property tracks emissions for brand sustainability program." },
        { number: 8, title: "Guest-communication kit", description: "Signage, in-room TV channel slide, in-room compendium copy, app-deeplink to vending locations." },
      ],
    },
    {
      heading: "3. SLA matrix",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical", "Machine offline, payment failure, cold-chain temperature excursion", "≤ 30 minutes", "≤ 4 hours on-site"],
        ["Tier 2 — stockout / SKU issue", "Single-SKU stockout, mis-vend, planogram update", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage replacement, cabinet cleaning, label refresh", "5 days", "14 days"],
        ["Brand-inspection emergency", "Inspector on-property request", "Same-day", "Same-day where physically possible"],
      ],
    },
    {
      heading: "4. Planogram by placement type",
      items: [
        { label: "Pantry market", value: "Grab-and-go meals (salads, wraps, parfaits) refreshed daily; beverages weighted 50/50 still vs sparkling; sundries (toothpaste, deodorant, charger cables) 12-15 SKUs; alcohol category if state law + brand standard permit." },
        { label: "Floor vending alcove", value: "Beverage tower: water 30%, soda 25%, energy/sports 20%, juice/tea 15%, premium 10%. Snack tower: chips 25%, candy 25%, healthy 20%, salty 15%, sweet 15%. Sundry: contraceptives, OTC pain reliever, toothpaste, deodorant, phone charger." },
        { label: "Pool / fitness", value: "Water dominant (50%); protein bars + recovery beverages; no carbonated sodas at brand-standard wellness properties." },
        { label: "Meeting-floor fallback", value: "Bottled beverages + sealed snack-pack format; aligned with banquet F&B standards." },
      ],
    },
    {
      heading: "5. Guest-communication kit",
      paragraph:
        "Guests cannot use what they cannot find. The communication kit is a brand-standard amenity in itself.",
      items: [
        { number: 1, title: "Wayfinding signage", description: "Elevator-lobby map showing alcove locations. Lobby pantry signage at check-in line of sight. ADA Section 703 visual character + raised character + braille." },
        { number: 2, title: "In-room compendium", description: "Vending + pantry section in the in-room compendium (digital or print) listing locations, hours, payment methods, and the property phone extension for refunds." },
        { number: 3, title: "In-room TV slide", description: "Brand-template TV welcome channel slide pointing to amenity locations." },
        { number: 4, title: "App + WiFi splash", description: "Brand app deep-link or property captive-portal mention of the amenity. Refund flow accessible from the app." },
        { number: 5, title: "Front-desk script", description: "Trained answer to 'where can I get water at 2 AM?' that points the guest to the nearest alcove or pantry." },
      ],
    },
    {
      heading: "6. Brand-standard + regulatory references",
      items: [
        { label: "AAA Diamond Inspection Guidelines", value: "Amenity availability + cleanliness scoring affects Diamond tier (One-Five). 24-hour beverage availability is a Four-Diamond expectation at most flag properties." },
        { label: "Forbes Travel Guide standards", value: "Five-Star properties typically substitute curated mini-bar + 24-hour in-room dining; Four-Star tier permits well-designed 24/7 amenity programs." },
        { label: "ADA Title III + Section 308/309/703", value: "Reach range, operating force, contrast/character requirements for all guest-accessible machines." },
        { label: "FDA Food Code (state-adopted)", value: "TCS foods at 41°F or below refrigerated, 135°F or above hot. Temperature logs retained 12 months." },
        { label: "Brand alcohol policy + state ABC", value: "Alcohol-vending placements (where permitted) operate under state Alcoholic Beverage Control licensure; age-verification at point of sale; brand-specific approval letter." },
      ],
    },
    {
      heading: "7. Quarterly business review",
      items: [
        { check: "Uptime report by machine and floor" },
        { check: "Per-SKU velocity vs planogram-target ratio" },
        { check: "Refund volume + reason codes + folio-charge dispute summary" },
        { check: "Brand-inspection readiness checklist (AAA / Forbes / brand BSA)" },
        { check: "ADA recertification status" },
        { check: "Temperature-log audit summary (refrigerated)" },
        { check: "Guest-feedback review (front-desk log + brand survey verbatims)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not brand-standard advice. Coordinate with your franchise representative, brand-standards liaison, and state ABC counsel before contracting. LetUsVending is equipped to arrange operators familiar with major-flag brand standards.",
});

console.log("wrote "+"24-7-vending-services-for-hotel-guests");
