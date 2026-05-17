import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-temporary-furnished-apartments",
  assetType: "pack",
  title: "Corporate Housing Vending Design Pack",
  subtitle: "Planogram template, AI cooler decision tree, operator SLA",
  intro:
    "Corporate housing (Oakwood, Synergy, Furnished Quarters, Blueground, Sonder, Mint House) operates as branded short-term hospitality. Vending is a 24/7 amenity for travelers without retail access. This pack covers planogram for a transient guest, the AI-cooler-vs-traditional decision, and the operator SLA template.",
  sections: [
    {
      heading: "1. Corporate-housing context",
      items: [
        { label: "Guest profile", value: "Business travelers, project teams (consulting, engineering, healthcare locums), relocating employees, insurance-housing displacement. Average stay 30-90 days." },
        { label: "Operating brands", value: "Oakwood Worldwide, Synergy Global Housing, Furnished Quarters, Blueground, Sonder, Mint House, Common Living (extended-stay), Stay Alfred (historical)." },
        { label: "Property formats", value: "Dedicated corporate-housing buildings (full inventory), corporate-rented apartments inside traditional multifamily, hotel-style branded extended-stay (Sonder, Mint House)." },
        { label: "Amenity expectations", value: "24/7 access, no on-site retail, no on-site staff after hours (typically). Vending fills the gap between hotel-grade mini-bar and full multifamily amenity stack." },
      ],
    },
    {
      heading: "2. Planogram for corporate-housing guest",
      paragraph:
        "Guests on 30-90 day stays buy differently than residents — more late-arrival essentials, more breakfast/light-meal SKUs, more travel-essentials.",
      headers: ["Category", "% of capacity", "Examples"],
      rows: [
        ["Premium beverages", "20%", "Spindrift, Liquid Death, Olipop, La Colombe RTD, sparkling water"],
        ["Light-meal / breakfast", "18%", "Yogurt, fresh fruit cup, hard-boiled egg, oatmeal cup, breakfast bar"],
        ["Healthy snacks", "15%", "RxBar, KIND, Sahale, almonds, jerky"],
        ["Fresh grab-and-go", "10%", "Salad, wrap, sandwich, sushi (capable cabinet only)"],
        ["Comfort / indulgence", "10%", "Premium chocolate, ice cream, packaged baked goods"],
        ["Convenience essentials", "12%", "Phone-charger, batteries, OTC pain, hand sanitizer, laundry pod"],
        ["Allergen-aware + dietary", "8%", "Gluten-free, dairy-free, plant-based SKUs"],
        ["Late-arrival essentials", "5%", "Toothbrush, toothpaste, deodorant, shampoo, razor"],
        ["Frozen", "2%", "Frozen entree, ice cream — capable cabinet only"],
      ],
    },
    {
      heading: "3. AI-cooler vs traditional decision tree",
      paragraph:
        "Corporate-housing operators face a real cabinet-choice question. The decision tree below routes the answer.",
      items: [
        { number: 1, title: "Property scale", description: "< 50 units / cabinet → traditional combo (lower capex). 50-200 units → smart cooler RFID. > 200 units → AI vision cooler (AWM Smart Shelf) for broadest SKU + lowest friction." },
        { number: 2, title: "Guest density per cabinet", description: "< 100 transactions/week → traditional. 100-300 → smart cooler. > 300 → AI vision." },
        { number: 3, title: "SKU breadth target", description: "20-40 SKUs → traditional combo. 40-80 SKUs → smart cooler. 80+ SKUs → AI vision + micro-market hybrid." },
        { number: 4, title: "Brand identity", description: "Hospitality-brand-driven (Sonder, Mint House) → AI vision + brand-immersive cabinet. Workforce-tier corporate housing → traditional combo with branded vinyl." },
        { number: 5, title: "Capex tolerance", description: "$3.5-7K → traditional. $12-22K → smart cooler RFID. $18-30K → AI vision." },
        { number: 6, title: "Guest demographic", description: "Tech-forward business travelers favor AI vision + tap-and-go. Insurance-displacement guests favor straightforward traditional UI." },
      ],
    },
    {
      heading: "4. Equipment specifications",
      items: [
        { label: "Traditional combo", value: "USI 3014A / AMS Visi-Vendor with cashless + member-app integration, ENERGY STAR-cert refrigerated section, ADA reach-range compliant. $3.5-6.5K capex." },
        { label: "Smart cooler RFID", value: "Nayax Onyx RFID cabinet, 40-80 SKUs, tap-and-go via app or NFC; ENERGY STAR commercial refrigerator base. $12-22K capex." },
        { label: "AI vision cooler", value: "AWM Smart Shelf, open-take-go, charged on exit; 40-80 SKUs; auto-restock alerting via telemetry. $18-30K capex." },
        { label: "Micro-market hybrid", value: "Open-shelf grab-and-go + glass-front refrigerated + AI vision frozen + self-checkout kiosk; 80-150 SKUs total; lifestyle-tier corporate housing. $35-70K capex." },
        { label: "Specialty (premium coffee)", value: "Bean-to-cup machine (Necta Korinto, Crane Coti) for premium-brand corporate housing — $8-15K capex; daily clean SLA." },
      ],
    },
    {
      heading: "5. Operator SLA template",
      headers: ["Tier", "Examples", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — critical", "Cabinet offline, payment system down, cold-chain excursion", "< 1 hr", "< 24 hr"],
        ["Tier 2 — stockout", "Top-SKU stockout, planogram outage", "< 4 hr", "< 48 hr"],
        ["Tier 3 — standard", "Single SKU stockout, slot jam, refresh request", "< 24 hr", "< 5 business days"],
        ["Tier 4 — cosmetic", "Wrap touch-up, signage refresh", "< 5 business days", "< 14 business days"],
      ],
    },
    {
      heading: "6. Service + restock framework",
      items: [
        { label: "Restock cadence", value: "Daily fresh-SKU restock (yogurt, salad, sandwich, sushi) at high-volume corporate housing; weekly base restock; telemetry top-off for high-velocity SKUs." },
        { label: "After-hours access", value: "Operator dispatch has 24/7 lobby + cabinet access with property-manager approval; spare-key or PIN-code logged." },
        { label: "Telemetry SLA", value: "Sub-15-min heartbeat; alert on offline + cold-chain excursion + payment failure." },
        { label: "Refund SLA", value: "Cashless auto-refund within 24 hr; cash refund (rare in this format) within 7 days." },
        { label: "Cold-chain SLA", value: "Excursion > 41°F for >30 min → 4-hr response; SKU pull + full credit; no resale." },
      ],
    },
    {
      heading: "7. Member-app / guest-app integration",
      items: [
        { check: "Guest-app deep-link to operator app — pricing tier + refund + stock visibility." },
        { check: "Pay-on-room option — charge to room folio at checkout (advanced; requires PMS integration with Oakwood / Synergy / Blueground PMS)." },
        { check: "Tap-and-go via guest mobile wallet (Apple Pay / Google Pay) as fallback when guest-app not used." },
        { check: "First-night welcome credit ($10-25) for guests on stays > 14 nights." },
        { check: "Refund-flow visible in guest welcome packet + lobby signage + on-machine UI." },
        { check: "Multi-language UI for international assignment guests (Spanish, Mandarin, Japanese, German, Portuguese)." },
      ],
    },
    {
      heading: "8. Reporting + commission framework",
      items: [
        { label: "Monthly scorecard", value: "Per-cabinet uptime, top SKU, refund rate, guest-mix, cashless mix, gross revenue, commission settlement." },
        { label: "Guest-stay segmentation", value: "Operator reports velocity by stay-length cohort (30 / 60 / 90 day) — informs planogram tuning." },
        { label: "Commission tier", value: "$700-$1,500/month → 6-12%; $1,500-$3,000 → 12-18%; > $3,000 → 18-25%. Cold-chain reduces commission room by 3-5 percentage points." },
        { label: "Settlement", value: "Monthly within 15 business days; ACH; per-cabinet detail attached." },
        { label: "Audit rights", value: "Property can pull telemetry-export quarterly and reconcile against settlement." },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "We are equipped to match qualifying corporate-housing operators with vending operators that hold AI-vision-cooler, smart-cooler, micro-market, and 24/7-SLA capability. Specific cabinet capex and PMS-integration capability depend on operator tooling and property brand standards — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Cabinet capex, commission tiers, and SLA timelines are reference values. Confirm against operator proposals and your specific corporate-housing brand standards.",
});

console.log("wrote " + "vending-temporary-furnished-apartments");
