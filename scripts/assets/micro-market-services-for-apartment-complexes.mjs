import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-market-services-for-apartment-complexes",
  assetType: "playbook",
  title: "Apartment Micro-Market Playbook",
  subtitle: "Placement, fob integration, late-night planogram, revenue-share, and amenity-ROI measurement",
  intro:
    "Multifamily micro-markets compete with DoorDash / Instacart / 7-Eleven at 11pm — and win on convenience, fob-only access, and resident-portal billing. This playbook codifies the placement, access-control, planogram, revenue-share, and amenity-ROI measurement practices LetUsVending operator partners are equipped to deliver against NMHC / NAA amenity benchmarks, NFPA 101 Life Safety Code egress rules, and the FDA Food Code 2022 cold-chain.",
  sections: [
    {
      heading: "1. Placement decision matrix",
      headers: ["Property size", "Unit count", "Suggested footprint", "Coolers", "Hours model"],
      rows: [
        ["Mid-rise", "100-250 units", "60-120 sq ft alcove near mail/package room", "1 × 30 cu ft glass door", "Fob-only 24/7"],
        ["Large mid-rise", "250-500 units", "150-220 sq ft in clubhouse/lobby", "2 × 30 cu ft", "Fob-only 24/7"],
        ["High-rise", "500-1000+ units", "250-400 sq ft purpose-built room", "3 cooler doors + freezer", "Fob-only 24/7 + concierge hours"],
        ["Student housing", "200-800 beds", "150-300 sq ft adjacent to common rooms", "2-3 cooler doors", "Fob-only 24/7; midnight peak"],
        ["Active-adult / 55+", "100-300 units", "100-150 sq ft near community room", "1-2 cooler doors", "Fob-only daytime; restricted overnight"],
      ],
    },
    {
      heading: "2. Fob and access-control integration",
      items: [
        { number: 1, title: "Access-control stack", description: "Tie the market door to the property's existing system — Brivo, Openpath/Avigilon Alta, LiftMaster myQ Community, ButterflyMX, Latch, Salto, Schlage Engage. Resident-only fob/mobile credential during designated hours." },
        { number: 2, title: "Door hardware", description: "Electric strike or magnetic lock with NFPA 101 free-egress hardware on the exit side. Coordinate with AHJ — magnetic locks require fire-alarm release and emergency push-to-exit." },
        { number: 3, title: "Camera + audit log", description: "Camera covers entry + kiosk; access log retained 60-90 days. Property management receives incident-mode replay link." },
        { number: 4, title: "Kiosk account", description: "Resident creates account in 365 Retail Markets / Avanti / Three Square via property-emailed welcome link. Payment by Apple/Google Pay, card, or property-portal billing (where supported)." },
      ],
    },
    {
      heading: "3. Late-night planogram (the peak)",
      paragraph:
        "Multifamily transaction telemetry routinely shows 30-50% of revenue between 9pm and 3am. The planogram weights for late-night consumption while keeping daytime fresh-food coverage.",
      items: [
        { label: "Snacks + indulgent", value: "Chips, pretzels, popcorn, cookies, candy bars, ice cream novelty — 30-40% of facings. Late-night purchase pattern." },
        { label: "Beverages", value: "Water, sodas, energy drinks, cold coffee, sports drinks — 25-30% of facings. Energy + cold coffee surge after 10pm." },
        { label: "Quick meals", value: "Mac & cheese cups, ramen, microwave entrées, frozen pizza singles — 10-15%. Microwave on-site is critical for redemption." },
        { label: "Fresh food (cooler)", value: "Salads, sandwiches, wraps, fruit, yogurt — 15-20%. Daytime + resident-event support; manage 7-day discard window per FDA Food Code 2022 §3-501.17." },
        { label: "Essentials", value: "OTC pain relief, condoms, toothbrush kits, single-use detergent pods, batteries, phone chargers — 5-10%. Highest margin and highest stickiness." },
        { label: "Pet treats", value: "Single-serve dog treats — 2-3% of facings. Disproportionate resident-NPS lift." },
      ],
    },
    {
      heading: "4. Revenue-share and pricing models",
      headers: ["Model", "Property economics", "Operator economics", "Best fit"],
      rows: [
        ["Operator-owned, no commission", "$0 cost, $0 share", "Operator keeps margin; sets pricing", "Most multifamily — amenity-only motivation"],
        ["Commission share", "5-12% of gross or category-tiered", "Operator nets gross less commission + COGS + labor", "500+ unit properties with high traffic"],
        ["Property-subsidized free items", "Property pays for water/coffee/fruit", "Operator bills at COGS + service fee", "Premium properties competing on amenity"],
        ["Resident-portal billing", "Property collects via Yardi/RealPage/Entrata charge codes", "Operator reconciles monthly", "Where property GL supports a charge code"],
      ],
    },
    {
      heading: "5. Operational SLA for unmanned 24/7",
      items: [
        { check: "Telemetry-driven restock 2-3x/week minimum; daily during onboarding and during resident-event weeks" },
        { check: "Tier 1 (offline / payment down / cold-chain) <24 hr acknowledgement, <24 hr resolution" },
        { check: "Tier 2 (single SKU stockout) 24-48 hr acknowledgement, 5-7 day resolution" },
        { check: "Refund flow via kiosk app / SMS — no on-site staff required for resident credits" },
        { check: "Quarterly business review with property GM: revenue, traffic, refund rate, resident-NPS pulse" },
        { check: "Cooler temperature alert (>41°F for >30 min) auto-pages on-call tech (FDA Food Code 2022 §3-501.16)" },
      ],
    },
    {
      heading: "6. Amenity-ROI measurement",
      items: [
        { number: 1, title: "Resident NPS lift", description: "Annual or quarterly resident survey carries a 'micro-market' line item. NMHC / Kingsley benchmarks let property compare amenity score vs. peer set." },
        { number: 2, title: "Lease-up impact", description: "Track the rate at which prospects mention the market on tour. Properties report 1-3% higher tour-to-lease conversion when the market is featured." },
        { number: 3, title: "Renewal lift", description: "Carry the market into the renewal package as a retained amenity. Even a 0.5-percentage-point renewal lift on a 300-unit property pays for the program many times over." },
        { number: 4, title: "Concierge / staff offload", description: "Resident requests for 'do you have...' decline measurably once the market opens. Track on-property task volume." },
        { number: 5, title: "Resident-event tie-in", description: "Free-vend stipends during property events (move-in week, holiday parties) at $X/resident — operator bills the property; resident receives the experience." },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match a multifamily property with operator partners equipped to deliver a fob-controlled 24/7 micro-market — including access-control integration with the property's PMS / smart-building stack, late-night planograms, FDA Food Code-compliant fresh-food, resident-portal or app payment, and quarterly amenity-ROI reporting to property management.",
    },
  ],
  footer:
    "Informational reference. Confirm life-safety, fire-egress, and access-control AHJ requirements with the local jurisdiction. Standards citations current at publication; verify the latest version before contracting.",
});

console.log("wrote "+"micro-market-services-for-apartment-complexes");
