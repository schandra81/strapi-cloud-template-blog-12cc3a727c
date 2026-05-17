import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "amusement-park-vending-machines",
  assetType: "rfp template",
  title: "Amusement Park Vending Framework",
  subtitle: "Zone-by-zone SKU planograms, weather-sealing specification, hurricane protocol, and operator RFP template",
  intro:
    "Amusement-park vending operates at high seasonal intensity, in weather-exposed zones, under IAAPA safety + accessibility expectations, and inside a guest-experience scoring framework that affects season-pass renewal + brand loyalty. Major park operators (Six Flags Entertainment, Cedar Fair, SeaWorld Parks, Disney Parks, Universal Parks, Herschend Family Entertainment) issue vending RFPs with explicit zone-by-zone planogram, weather-sealing, and hurricane-protocol requirements. This framework gives the park operations director + concessions program manager the zone-by-zone planogram, equipment weather-sealing spec, hurricane preparedness protocol, and operator RFP template.",
  sections: [
    {
      heading: "1. Zone-by-zone planogram — seven typical zones",
      paragraph:
        "Park guest behavior varies dramatically by zone. Park-wide single planograms underperform zone-tuned planograms by 30-50% in per-machine revenue and miss accessibility + family-friendly accommodation in specific zones.",
      headers: ["Zone", "Guest profile", "Top planogram tilt", "Equipment type"],
      rows: [
        ["Entry plaza / front gate", "All-guest arrival; hydration + sunscreen + souvenirs", "Bottled water 60-70%; electrolyte drinks; healthy snacks", "Refrigerated combo + AI cooler, weather-sealed"],
        ["Coaster + thrill zone", "Adult + teen; high adrenaline; meal-light", "Sports drinks + caffeinated soda + handheld snacks (no full-meal SKUs)", "Cold beverage + snack combo"],
        ["Family zone / kiddie area", "Family with young children; meals + comfort foods", "Juice boxes + animal crackers + fruit snacks + applesauce pouches; allergen-clear labeling", "Snack-heavy + cold beverage; lower reach height"],
        ["Water park / splash zone", "All guests in swimwear; cash often absent; impulse", "Bottled water + sports drinks + ice cream + frozen treats", "Refrigerated + IM-style + waterproof IP-rated cabinet"],
        ["Show + venue zone", "Seated guests in queue; impulse during pre-show wait", "Bottled water + soda + popcorn + candy", "Standard combo; consider AI cooler for premium SKU"],
        ["Back-of-house / employee", "Three-shift park employees; subsidized program", "Subsidized snack + beverage + hot beverage option", "Standard combo with operator subsidy mechanism"],
        ["Hotel + lodging on-park (where applicable)", "Overnight guests; 24/7 access", "Combo + AI cooler with breakfast + late-night options", "Standard hotel-style combo"],
      ],
    },
    {
      heading: "2. Weather-sealing specification",
      paragraph:
        "Park environments expose equipment to direct sun, summer humidity, winter cold, water-park spray, salt air (coastal parks), and seasonal winterization. Standard indoor equipment fails within 18-24 months. Specify weather-sealing explicitly.",
      items: [
        { check: "NEMA 4 or NEMA 4X enclosure rating for outdoor equipment (NEMA 4X required for water-park + coastal zones)" },
        { check: "Stainless steel exterior (not laminate or vinyl wrap); UV-stable powder coat acceptable for inland non-water zones" },
        { check: "Refrigerated devices with sealed condensate; ENERGY STAR certified; AIM Act-compliant refrigerant; ambient operating range -10°F to 110°F documented" },
        { check: "Shade canopy or pergola for direct-sun placements; reduces compressor cycling 30-40% in peak summer" },
        { check: "Cellular telemetry — Wi-Fi unreliable in steel + concrete park structures (Cantaloupe / Nayax / 365 Retail Markets / AWM)" },
        { check: "IP-rated payment terminal (IP54 minimum; IP65 for water-park zones)" },
        { check: "Anchoring per IAAPA + ASTM F2291 (Standard Practice for Design of Amusement Rides and Devices) for any equipment near attraction queues" },
        { check: "GFCI on 120V; weather-rated electrical disconnect per NEC" },
        { check: "ADA Section 308 reach range verified at install + after each phase-relocation; Section 305 clear floor space on level surface" },
        { check: "FALCPA allergen labeling + allergen summary signage at every device" },
      ],
    },
    {
      heading: "3. Hurricane + severe-weather protocol",
      paragraph:
        "Coastal + Gulf Coast + Southeast parks (FL, GA, AL, MS, LA, TX, NC, SC, VA) need a hurricane protocol; Midwest + Plains parks need a tornado protocol; Pacific NW + California parks need a wildfire smoke + earthquake protocol. The framework below uses hurricane as the worked example; adapt for regional hazards.",
      items: [
        { number: 1, title: "Pre-season preparation", description: "By June 1, operator confirms all coastal-zone equipment is anchored per ASCE 7 wind-loading; refrigerated equipment temperature alarms tested; surge protection on every device." },
        { number: 2, title: "Watch issuance (72 hours pre-landfall)", description: "Park operations notifies operator; operator pre-positions surge inventory at park warehouse; reviews evacuation-zone equipment list with park operations." },
        { number: 3, title: "Warning issuance (36 hours pre-landfall)", description: "Operator de-energizes evacuation-zone equipment per park operations direction; relocates perishable product to park cold storage or operator warehouse; covers + tarps exposed equipment where structural anchoring allows it to stay in place." },
        { number: 4, title: "Park closure + lockdown (24 hours pre-landfall)", description: "All operator personnel evacuate per park emergency plan; equipment locked + telemetry powered via UPS where battery backup is in place." },
        { number: 5, title: "Post-landfall reentry", description: "Operator reenters per park operations clearance; inspects equipment for damage + water ingress; documents losses with photo evidence + telemetry log; works with insurance adjuster on covered losses." },
        { number: 6, title: "Reopening planogram tilt", description: "First 72 hours post-reopening, planogram tilts heavily to hydration (60-70% water) + comfort snack; full planogram resumes within 7-14 days as supply chain recovers." },
        { number: 7, title: "After-action report", description: "Within 14 business days of park reopening, operator delivers an after-action report — equipment status, losses, lessons-learned, planogram adjustments." },
      ],
    },
    {
      heading: "4. SLA matrix",
      headers: ["SLA dimension", "Target", "Measurement", "Remedy"],
      rows: [
        ["Per-machine uptime (peak season)", "97% monthly Memorial Day-Labor Day", "Telemetry — minutes online / minutes in month", "Commission credit < 95%; SIP < 92%"],
        ["Per-machine uptime (off-season)", "95% monthly", "Same", "SIP < 92%"],
        ["Tier-1 ticket resolve (peak season cold-chain / payment)", "< 12 hrs", "Operator CRM + telemetry", "Per-ticket commission credit"],
        ["Tier-1 ticket resolve (off-season)", "< 24 hrs", "Same", "Per-ticket commission credit"],
        ["Refund response", "Cashless < 24 hrs; cash < 7 days", "Refund log", "Refund rate > 2% triggers planogram review"],
        ["Cold-chain excursion", "< 4 hrs resolve", "Telemetry temperature feed", "Spoiled product replaced + root-cause"],
        ["Restock cadence (peak season)", "Twice daily on high-volume zones; daily on standard zones", "Operator restock log", "Stockout rate > 3% triggers cadence review"],
        ["Hurricane / severe-weather protocol activation", "Within 4 hrs of park notification", "Park operations log", "Notification SLA"],
      ],
    },
    {
      heading: "5. Compliance + safety",
      items: [
        { check: "IAAPA Global Safety Day participation + IAAPA Safety Standards alignment where applicable" },
        { check: "ASTM F2291 + ASTM F1193 alignment for any equipment near ride queues" },
        { check: "ADA Title III + Section 308 reach range + 305 clear floor space at every device" },
        { check: "FALCPA allergen labeling + allergen summary signage" },
        { check: "FDA Menu Labeling Final Rule (21 CFR 101.8) for operators with 20+ vending machines" },
        { check: "PCI-DSS v4.0 attestation through payment vendor" },
        { check: "Background-check program on all park-credentialed personnel; cleared per park security plan" },
        { check: "Insurance — CGL $5M aggregate (higher than typical due to park exposure); additional-insured naming park + property owner" },
        { check: "AIM Act refrigerant compliance + ENERGY STAR refrigerated equipment" },
        { check: "Spanish + primary regional language signage where the park guest demographic warrants" },
      ],
    },
    {
      heading: "6. RFP response sections",
      items: [
        { number: 1, title: "Section A — Bidder profile + amusement-park experience", description: "Years operating amusement-park or large-venue vending, fleet count, IAAPA membership, three comparable references with named park operations contact." },
        { number: 2, title: "Section B — Weather-sealing + outdoor equipment spec", description: "NEMA rating per zone, anchoring methodology, hurricane / severe-weather equipment list." },
        { number: 3, title: "Section C — Zone-by-zone planogram", description: "Seven-zone planogram per Section 1 with seasonal adjustment; allergen + dietary + language accommodation." },
        { number: 4, title: "Section D — SLA + telemetry", description: "Match the SLA matrix in Section 4; propose peak vs off-season targets; telemetry vendor + heartbeat + export." },
        { number: 5, title: "Section E — Hurricane / severe-weather protocol", description: "Pre-season + watch + warning + post-event protocol; after-action reporting timeline." },
        { number: 6, title: "Section F — Compliance + safety", description: "IAAPA + ASTM + ADA + FALCPA + PCI + insurance; background check + park credentialing." },
        { number: 7, title: "Section G — Commercial terms", description: "Commission rate + calculation method + payment cadence + audit right + equipment investment + refresh cycle." },
        { number: 8, title: "Section H — References + sustainability + community", description: "Three references with named park operations contact; ENERGY STAR commitment; local-supplier inclusion." },
      ],
    },
  ],
  footer:
    "This framework is a working procurement reference. Final RFP + contract should be reviewed by park counsel, park operations, the safety officer, and IAAPA-aligned compliance lead where applicable. Zone-by-zone planogram + weather-sealing + hurricane protocol + peak-season SLA together define a defensible amusement-park vending program; gaps in any of them surface within the first peak season.",
});

console.log("wrote "+"amusement-park-vending-machines");
