import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-for-yoga-studios",
  assetType: "playbook",
  title: "Yoga Studio Vending Playbook",
  subtitle: "Quiet equipment, wellness planogram, and retail-counter coordination",
  intro:
    "Yoga studio vending is not gym vending in a smaller box. The studio environment is deliberately quiet, the member demographic is wellness-oriented, and most studios already operate a retail counter selling apparel and supplements. Vending must complement the retail counter, fit the acoustic and aesthetic environment, and serve a planogram that aligns with wellness practice. This playbook codifies the equipment, planogram, retail coordination, and operator structure that keep studio vending consistent with the brand.",
  sections: [
    {
      heading: "1. Acoustic and aesthetic specifications",
      paragraph:
        "Studio environments are quiet by design. Compressor noise that's invisible in a gym dominates a yoga lobby. Equipment selection optimizes for low decibel rating and aesthetic alignment.",
      items: [
        { label: "Sound rating", value: "≤ 45 dBA per ANSI S12.10 acoustic standard. Equivalent to library or quiet office. Standard vending machine runs 55-65 dBA; quiet-rated machines use variable-speed compressors and acoustic-damped cabinets." },
        { label: "Quiet equipment options", value: "True T-49 glass-door cooler with quiet-rated compressor; Sanden Vendo whisper-quiet outdoor; or RTD-only cooler with no compressor (passive cooled where feasible)." },
        { label: "Cabinet finish", value: "Matte black, brushed stainless, or wood-grain wrap to align with studio interior design. Standard white vending-machine cabinet is rarely appropriate." },
        { label: "Lighting", value: "Internal LED at 3000K warm color temperature (not the standard 5000K bright-white). Dimmable where the machine OEM supports it." },
        { label: "Placement", value: "In the lobby or hallway but acoustically isolated from practice studios. Coordinate with studio acoustic plan; 15+ feet from any practice-studio door is typical." },
      ],
    },
    {
      heading: "2. Wellness-aligned planogram",
      paragraph:
        "Yoga-studio members weight purchase decisions toward low-sugar, plant-protein, hydration, and electrolyte categories. The classic chocolate-bar and soda planogram is misaligned.",
      headers: ["Category", "Share of facings", "Top SKUs", "Notes"],
      rows: [
        ["Hydration + electrolyte", "30%", "Smartwater, Liquid IV, Pedialyte, coconut water (Vita Coco, Harmless Harvest), Topo Chico", "Top category; members hydrate during and after practice"],
        ["Plant protein and recovery", "20%", "Owyn Pro Elite, Iconic Protein, OWYN, RXBAR, KIND Protein, Pure Protein", "Plant-forward weighting; dairy-free options expected"],
        ["Wellness beverages", "15%", "Kombucha (GTs, Health-Ade, Brew Dr.), cold-pressed juice (Suja, Naked Pressed)", "Refrigerated; high-margin"],
        ["Healthy snacks", "15%", "Mary's Gone Crackers, Bare Snacks, Made In Nature, KIND, RXBAR, dried fruit", "Low-sugar, low-sodium, recognizable ingredients"],
        ["Tea and adaptogens", "8%", "Yogi Tea (RTD), Owl's Brew, Recess, Kin Euphorics", "Adaptogen and functional beverage category growing"],
        ["Conventional snacks", "8%", "Chips, popcorn, crackers — limited share for variety", "Reserve facings for member-requested items"],
        ["Conventional beverages", "4%", "Coke Zero, sparkling water variety", "Limited share; preserve wellness brand alignment"],
      ],
    },
    {
      heading: "3. Retail-counter coordination",
      paragraph:
        "Most yoga studios run a retail counter selling premium supplements, apparel, and accessories. Vending and retail must complement, not compete.",
      items: [
        { number: 1, title: "Category separation", description: "Retail counter holds premium supplements (Vital Proteins, Athletic Greens, Beam, OWYN protein powders), high-margin apparel, mats, props, and gift cards. Vending holds grab-and-go beverages, single-serve snacks, and impulse items." },
        { number: 2, title: "Price-tier alignment", description: "Single-serve protein RTD at $5-$8 in vending; powder tubs at $30-$60 at retail counter. Pricing tiers communicate clearly what's on which channel." },
        { number: 3, title: "Cross-sell signage", description: "Vending machine signage references retail-counter availability for full-size product. Retail counter signage references vending for after-hours convenience." },
        { number: 4, title: "Inventory and POS integration", description: "Vending operator and studio retail POS share a quarterly category review. Studio's retail buyer sees vending velocity data to inform retail buying decisions." },
        { number: 5, title: "Brand alignment", description: "Vending planogram and retail brand portfolio align: if the studio sells Vital Proteins at retail, vending stocks Vital Proteins single-serve RTD where available." },
      ],
    },
    {
      heading: "4. Member-experience integration",
      items: [
        { label: "Front-desk acknowledgement", value: "Front-desk team explicitly mentions vending and retail counter during member orientation. New members receive a $5 vending credit on first practice." },
        { label: "Practice-time exclusivity", value: "Vending machine accessible only outside practice times to maintain studio acoustic environment. Machine on dimmable lighting that goes dim during practice classes." },
        { label: "Member feedback channel", value: "QR code on machine links to operator suggestion form. Quarterly member-experience review with studio owner and operator." },
        { label: "Refund process", value: "Cashless refund via operator app within 24 hours. Cash refunds processed at retail counter (front-desk verifies refund slip and credits the member's account)." },
        { label: "Workshop and event tie-in", value: "During workshops and longer events, studio coordinates with operator to stock targeted SKUs (hydration during heat-yoga; recovery during longer workshops)." },
      ],
    },
    {
      heading: "5. Studio chain and franchise considerations",
      headers: ["Chain type", "Decision authority", "Brand-standards approach"],
      rows: [
        ["Independent single-studio", "Studio owner", "Operator-designed planogram with owner approval; max flexibility"],
        ["Boutique chain (3-15 studios, single market)", "Owner + operations lead", "Standard planogram across studios; minor local variation"],
        ["Multi-market chain (CorePower Yoga, YogaWorks, Pure Yoga)", "Corporate brand + regional ops", "Group-level operator agreement, brand-standards review, group commission"],
        ["Franchise model (CorePower franchise, YogaSix, Y7)", "Franchise corporate + franchisee", "Franchise brand standards govern; franchisee may select within approved operator list"],
      ],
    },
    {
      heading: "6. Equipment and service SLA",
      items: [
        { check: "Quiet-rated equipment (≤ 45 dBA) with brand-aligned cabinet finish." },
        { check: "Cellular telemetry with ≤ 15-minute heartbeat; alerts routed to operator and studio owner." },
        { check: "Refrigerated equipment maintains 35-40°F per FDA Food Code 3-501.16." },
        { check: "Service SLA: Tier 1 (offline, payment failure) < 8 hours operating, < 24 hours overnight; Tier 2 (stockout) < 24 hours; Tier 3 (cosmetic) < 7 days." },
        { check: "Quarterly PM: refrigeration cycle check, payment terminal firmware, ADA reach-range inspection, signage refresh, allergen-signage verification per FALCPA." },
        { check: "Monthly cleaning of cabinet exterior and signage; weekly route-clean during product restock." },
      ],
    },
    {
      heading: "7. Commercial model",
      headers: ["Studio size (active members)", "Monthly revenue range", "Commission to studio", "Notes"],
      rows: [
        ["Under 200", "$200-$600", "8-12%", "Low-volume; may not support standalone vending — RTD cooler often best"],
        ["200-500", "$500-$1,200", "10-15%", "Standard vending viable; quiet-rated single beverage machine common"],
        ["500-1,000", "$1,200-$2,500", "12-18%", "Beverage + snack combo viable; consider RTD cooler as supplement"],
        ["1,000+", "$2,500-$5,000+", "15-22%", "Full vending + retail integration; quarterly business review with operator"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate equipment, planogram, and retail integration to your studio's member demographic, retail-counter product mix, and brand position.",
});

console.log("wrote "+"vending-for-yoga-studios");
