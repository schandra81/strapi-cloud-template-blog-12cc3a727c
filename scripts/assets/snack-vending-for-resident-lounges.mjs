import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "snack-vending-for-resident-lounges",
  assetType: "pack",
  title: "Resident Lounge Snack Vending Design Template",
  subtitle: "Cabinet selection, planogram per lounge type, operator RFP",
  intro:
    "Resident lounge vending is a different animal from corridor vending — long dwell-time, repeat visits, member-app pricing tier, and a planogram that flexes with co-work vs social-lounge use. This template covers cabinet selection, planogram per lounge type, and the operator RFP framework.",
  sections: [
    {
      heading: "1. Lounge-type taxonomy",
      paragraph:
        "Resident lounges fall into four functional types. Cabinet + planogram should match the type, not a single default.",
      headers: ["Lounge type", "Primary use", "Dwell range", "Format fit"],
      rows: [
        ["Co-work / business center", "Daytime work, video calls", "30 min - 4 hr", "Premium micro-market or smart cooler + glass-front cabinet"],
        ["Social lounge / clubroom", "Evening / weekend social, events", "1-3 hr", "Beverage cooler + snack combo + occasional specialty"],
        ["Game room / media lounge", "Group leisure, mixed-age", "1-2 hr", "Combo snack/beverage + kid SKU emphasis"],
        ["Hybrid (co-work + lounge)", "All-day mixed-use", "30 min - 4 hr", "Micro-market or smart cooler with broad SKU + member-pricing tier"],
      ],
    },
    {
      heading: "2. Cabinet selection per lounge type",
      items: [
        { label: "Co-work / business center", value: "Open-shelf micro-market (Avanti, 365 Retail Markets) or AI-vision smart cooler (AWM Smart Shelf); 60-100 SKU capacity; self-checkout kiosk; ENERGY STAR commercial refrigerator base." },
        { label: "Social lounge / clubroom", value: "Glass-front beverage cooler (Royal Vendors RVCC ENERGY STAR V3.0) + snack combo (USI 3014A); 30 + 45 SKUs; high-traffic capacity." },
        { label: "Game room / media lounge", value: "Combo snack/beverage cabinet with kid-friendly SKU mix; lower-reach-height visibility for younger residents; cashless + member-app tap." },
        { label: "Hybrid", value: "Smart cooler (Nayax Onyx RFID, AWM AI vision) + glass-front beverage; member-app SDK for pricing tier; broadest SKU breadth." },
      ],
    },
    {
      heading: "3. Per-lounge planogram",
      paragraph:
        "SKU mix differs by lounge use. The percentages below are starting-point weights; telemetry tunes them quarterly.",
      headers: ["Category", "Co-work", "Social", "Game room", "Hybrid"],
      rows: [
        ["Premium coffee RTD", "20%", "10%", "5%", "15%"],
        ["Cold beverages (premium)", "15%", "20%", "10%", "18%"],
        ["Sparkling water + kombucha", "15%", "10%", "5%", "12%"],
        ["Healthy snacks (bars, nuts)", "20%", "10%", "10%", "15%"],
        ["Premium snacks (chips, chocolate)", "15%", "25%", "20%", "20%"],
        ["Kid SKUs (juice, kid snack)", "0%", "5%", "30%", "5%"],
        ["Fresh (salad, sandwich, sushi)", "10%", "10%", "5%", "10%"],
        ["Specialty (ice cream, frozen)", "5%", "10%", "15%", "5%"],
      ],
    },
    {
      heading: "4. Member-app pricing tier",
      items: [
        { label: "Member tier (resident)", value: "Base × 0.85-0.95. Auth via member-app SDK, RFID badge, or building-app QR." },
        { label: "Guest tier (visitor)", value: "Base × 1.0. Cashless tap or cash; subject to event-rental override pricing." },
        { label: "Event-mode pricing", value: "Lounge in private-event mode (host-paid) — resident sees $0; host invoiced. Toggle via property-manager admin in operator dashboard." },
        { label: "Time-windowed promo", value: "Co-work hours (07:00-19:00) discount on coffee + healthy snacks; uplift typically 15-25%." },
      ],
    },
    {
      heading: "5. Operator RFP requirements",
      items: [
        { number: 1, title: "Background", description: "Multifamily portfolio depth; references from properties with comparable lounge programming." },
        { number: 2, title: "Equipment", description: "Cabinet make/model per lounge type; ENERGY STAR certification; ADA reach-range attestation; brand-finish capability." },
        { number: 3, title: "Service spec", description: "Restock cadence per lounge type; telemetry; four-tier SLA; refund SLA." },
        { number: 4, title: "Planogram", description: "Per-lounge-type planogram document; allergen labeling; healthy-vending share; seasonal cadence." },
        { number: 5, title: "Member-app integration", description: "Payment platform + building-app SDK compatibility; UAT plan; auth model; refund flow." },
        { number: 6, title: "Reporting", description: "Monthly scorecard with per-cabinet uptime, top SKU, refund rate, member-mix; BI export channel." },
        { number: 7, title: "Commission framework", description: "Tiered commission per gross-revenue range; event-mode billing model; settlement cadence." },
        { number: 8, title: "Insurance + compliance", description: "GL $2M, product + auto, ADA, food permit if fresh." },
      ],
    },
    {
      heading: "6. Service + refresh cadence",
      headers: ["Lounge type", "Restock", "Planogram review"],
      rows: [
        ["Co-work / business center", "Weekly base + telemetry top-off", "Quarterly + seasonal"],
        ["Social lounge", "Weekly + 2x weekly during high-event seasons", "Quarterly + seasonal"],
        ["Game room", "Bi-weekly with kid-SKU emphasis check", "Quarterly"],
        ["Hybrid", "Weekly + telemetry-driven top-off", "Quarterly + monthly endcap test"],
      ],
    },
    {
      heading: "7. Lounge-specific operational considerations",
      items: [
        { check: "Co-work — quiet-restock window (early-morning or after-hours) to avoid disrupting calls." },
        { check: "Social lounge — restock before peak event nights (Thursday-Sunday); fresh SKU restock + waste disposal." },
        { check: "Game room — kid-safe SKU positioning; clear allergen labeling; no choke-hazard items." },
        { check: "Hybrid — sensor-light cabinets that don't pulse during quiet co-work hours; ambient-aware UI." },
        { check: "Event-mode toggle accessible to property manager (no operator-side ticket required for simple toggle)." },
        { check: "Trash + recycling within 25 ft of every cabinet." },
        { check: "Cellular signal verified > -95 dBm; Wi-Fi credentialed fallback." },
      ],
    },
    {
      heading: "8. Capex + commission expectations",
      headers: ["Lounge type", "Monthly gross / cabinet", "Commission tier"],
      rows: [
        ["Co-work / business center", "$1,500-$3,000", "12-18%"],
        ["Social lounge", "$1,000-$2,500", "8-15%"],
        ["Game room", "$400-$900", "3-8%"],
        ["Hybrid", "$2,000-$5,000+", "15-22%"],
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to match qualifying multifamily lounge programs with operators that hold member-app SDK, lounge-format equipment, and event-mode billing capability. Specific cabinet capex and commission tier depend on lounge volume — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Restock cadence and commission tiers are reference values; confirm against operator proposals and lounge-specific traffic data.",
});

console.log("wrote " + "snack-vending-for-resident-lounges");
