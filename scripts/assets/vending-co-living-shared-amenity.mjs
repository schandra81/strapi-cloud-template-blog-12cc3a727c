import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-co-living-shared-amenity",
  assetType: "pack",
  title: "Co-Living Vending Pack",
  subtitle: "Format framework, equipment spec, planogram, member-app SDK, brand finish",
  intro:
    "Co-living properties (Common, Outpost, Tripalink, Quarters, Bungalow) operate as shared-amenity hospitality at scale. Vending is a member-experience touchpoint — not a corridor afterthought. This pack codifies format selection, planogram, member-app SDK, and brand-finish requirements.",
  sections: [
    {
      heading: "1. Co-living vending format framework",
      paragraph:
        "Co-living shared kitchens + lounges concentrate resident foot traffic. Format choice should match property scale, member-demographic, and operating-brand standards.",
      headers: ["Property scale", "Format fit", "SKU breadth", "Capex range"],
      rows: [
        ["Small (50-150 beds, single location)", "Smart cooler + snack combo", "30-50 SKUs total", "$15K-$25K"],
        ["Mid (150-400 beds, single building)", "Micro-market + beverage cooler + specialty", "60-120 SKUs", "$30K-$70K"],
        ["Large (400-1000+ beds, multi-floor / multi-bldg)", "Full micro-market + AI-vision cooler + per-floor specialty", "120-250 SKUs", "$80K-$180K"],
        ["Distributed network (small + multi-city)", "Standardized smart-cooler kit per location, branded finish", "30-50 SKUs per location", "$15-$25K per location"],
      ],
    },
    {
      heading: "2. Equipment specification",
      items: [
        { label: "Micro-market (small shared kitchen)", value: "Open-shelf grab-and-go (Avanti Markets / 365 Retail Markets) + glass-front refrigerated cabinet (True T-Series ENERGY STAR V4.1) + self-checkout kiosk (365 PicoMarket / Avanti Eagle)." },
        { label: "Smart cooler (RFID / AI vision)", value: "Nayax Onyx RFID cabinet or AWM Smart Shelf AI cooler; 40-80 SKUs; tap-and-go via member-app or NFC badge; ENERGY STAR-cert host cabinet." },
        { label: "Snack combo (corridor / quiet zone)", value: "USI 3014A / AMS Visi-Vendor with cashless + member-app integration; ADA reach-range compliant." },
        { label: "Specialty (ice cream / coffee / pet)", value: "Per category — Fastcorp 632 freezer for ice cream; bean-to-cup coffee machine (Necta Korinto, Crane Coti) for premium coffee; compact pet-treat dispenser for pet-friendly locations." },
        { label: "Telemetry", value: "Cellular sub-15-min heartbeat on every cabinet; payment platform integration with Cantaloupe Engage / Nayax Onyx / 365 Pay." },
      ],
    },
    {
      heading: "3. Planogram template (co-living mid-scale)",
      paragraph:
        "Co-living planogram tilts wellness + convenience + late-night. Member-mix is typically 22-35 year-old single occupant, mobile, urban.",
      headers: ["Category", "% of capacity"],
      rows: [
        ["Premium beverages (cold brew RTD, sparkling, kombucha, Liquid Death, Olipop)", "20%"],
        ["Healthy snacks (RxBar, KIND, Perfect Bar, Sweet Earth)", "15%"],
        ["Fresh grab-and-go (salad, wrap, sushi, sandwich)", "15%"],
        ["Allergen-friendly + plant-based (Hippeas, Halo Top, So Delicious)", "10%"],
        ["Late-night essentials (caffeinated, comfort snack, instant ramen-equivalent)", "10%"],
        ["Wellness (electrolyte, melatonin, vitamin shot)", "8%"],
        ["Convenience (phone charger, batteries, OTC pain, condoms, hygiene)", "10%"],
        ["Frozen (ice cream, frozen meal)", "5%"],
        ["Indulgence (premium chocolate, salty snack)", "7%"],
      ],
    },
    {
      heading: "4. Member-app SDK integration checklist",
      items: [
        { number: 1, title: "Authentication", description: "Member-app token (Common Living app, Outpost app, Tripalink app, Bungalow app) or NFC RFID member-badge integrated with PMS / building-app." },
        { number: 2, title: "Payment-platform compatibility", description: "Cantaloupe Engage / Nayax Onyx / 365 Pay SDK; confirm building-app vendor has SDK interop." },
        { number: 3, title: "Pricing tier", description: "Member tier (resident) — base × 0.85-0.95. Guest tier — base × 1.0. New-member welcome credit ($10-25)." },
        { number: 4, title: "Credit funding source", description: "Member card-on-file (most common at co-living scale), payroll-deduction equivalent (rare), or host-stipend (small budgets only)." },
        { number: 5, title: "Refund flow", description: "In-app refund button, SMS-to-refund, on-machine touchpad; auto-credit within 24 hours for cashless." },
        { number: 6, title: "Stock visibility", description: "Member-app shows live stock per cabinet — reduces wasted-trip frustration in shared amenity context." },
        { number: 7, title: "UAT", description: "2-cabinet pilot with 30-50 members over 2-3 weeks; decline-rate, double-charge, stock-update latency, refund-flow friction." },
      ],
    },
    {
      heading: "5. Brand finish framework",
      paragraph:
        "Co-living brands (Common, Outpost, Quarters, Tripalink, Bungalow) operate with strong visual identity. Cabinet finish should match brand standards, not generic operator wraps.",
      items: [
        { label: "Vinyl wrap", value: "3M IJ180Cv3 / Avery MPI 1105 cast vinyl with 3M 8520 / Avery DOL 1480 laminate; brand-palette CMYK + Pantone match; $400-$900 per cabinet." },
        { label: "Powder coat (front door)", value: "TGIC polyester powder coat in brand color; furniture-grade; $600-$1,400 per cabinet refurb cycle." },
        { label: "Custom panel insert", value: "Brand-logo + member-app QR + community-events deep-link printed on aluminum composite; sized to OEM cabinet door." },
        { label: "Illuminated marquee", value: "LED edge-lit marquee with brand wordmark + community welcome message; time-of-day messaging (e.g., 'good morning' / 'after-hours snack')." },
        { label: "Artwork deliverables", value: "Vector EPS / AI / PDF at 1:1 scale, CMYK + Pantone, 0.25 in bleed; photography ≥ 300 dpi." },
      ],
    },
    {
      heading: "6. Service + restock framework",
      headers: ["Cabinet type", "Restock cadence", "Service SLA"],
      rows: [
        ["Micro-market", "2x weekly + telemetry top-off", "Tier 1 < 1 hr ack / < 24 hr resolve"],
        ["Smart cooler", "Weekly + telemetry top-off", "Tier 1 < 1 hr ack / < 24 hr resolve"],
        ["Snack combo / corridor", "Weekly", "Tier 1 < 4 hr ack / < 24 hr resolve"],
        ["Specialty (ice cream / coffee)", "Bi-weekly Q1/Q4, weekly Q2/Q3", "Cold-chain SLA (< 4 hr excursion response)"],
      ],
    },
    {
      heading: "7. Reporting + governance",
      items: [
        { check: "Monthly per-cabinet scorecard — uptime, top SKU, refund rate, member-mix, cashless mix." },
        { check: "Member-tier conversion report — % residents on member tier, avg member transactions/month." },
        { check: "Per-floor / per-zone velocity report — drives planogram refresh." },
        { check: "Refund-rate audit; > 2% triggers quality review." },
        { check: "Quarterly business review with brand-finish refresh check + member-survey results." },
        { check: "Annual portfolio review for multi-location co-living brands — standardized planogram refresh." },
      ],
    },
    {
      heading: "8. Commission + capex framework",
      headers: ["Property scale", "Monthly gross / location", "Commission tier"],
      rows: [
        ["Small", "$700-$1,800", "6-12%"],
        ["Mid", "$2,000-$5,000", "12-20%"],
        ["Large", "$5,000-$15,000+", "18-25%"],
        ["Distributed network", "Aggregated across locations", "Negotiated portfolio-rate"],
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to match co-living operators (single property or multi-location brand) with vending operators that hold member-app SDK, brand-finish, and micro-market / smart-cooler capability. Specific portfolio rollout depends on operator route density in each city — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Capex and commission ranges are reference values. Confirm against operator proposals and your brand's specific member demographic.",
});

console.log("wrote " + "vending-co-living-shared-amenity");
