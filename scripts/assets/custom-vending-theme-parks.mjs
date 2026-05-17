import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-vending-theme-parks",
  assetType: "template",
  title: "Theme Park Custom Vending Framework",
  subtitle: "Themed equipment spec, weather-hardened hardware, park-app integration, surge calendar",
  intro:
    "Use this framework to specify, install, and operate a custom-themed vending program inside a regional or destination theme park. Each section is capability-framed and references NSF/ANSI 7 + 25, ASTM F2291 (amusement-ride safety adjacencies), NEC + NEMA enclosure ratings, FDA Food Code 2022, ADA Section 308, and FTC Endorsement Guides where any product claim is made. Operator capability should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Themed equipment specification",
      paragraph:
        "Themed vending is not a standard combo unit with a sticker. Themed cabinetry, themed product trays, and themed lighting are part of the experience. The specification below covers a typical attraction-adjacent placement.",
      items: [
        { label: "Cabinet construction", value: "Custom-fabricated FRP or rotomolded shell over standard NSF/ANSI 7 vending chassis; rated to NEMA 4 outdoor or NEMA 3R covered-outdoor. Cabinet must not interfere with vending tray, refrigeration vent, or service door access." },
        { label: "Themed graphics", value: "Park-IP-approved graphic wrap (3M IJ180 or comparable, 7-year outdoor warranty); UV-stable inks; replaceable per IP rotation cadence." },
        { label: "Lighting", value: "LED interior + cabinet wash, controllable via park's lighting bus where feasible (DMX 512 or 0-10V); 10+ year LED life rating." },
        { label: "Themed audio (optional)", value: "Compressor-isolated low-volume audio cue on transaction completion; aligned with park audio policy + ADA accessibility (no audio-only required interaction)." },
        { label: "ADA compliance", value: "Themed shell must not violate ADA Section 308 reach range (15-48 in) or 305 clear floor space (30x48 in); operating force ≤ 5 lbf per 309.4." },
      ],
    },
    {
      heading: "2. Weather-hardened hardware matrix",
      paragraph:
        "Park placements are outdoor, partially sheltered, or seasonal. Hardware must match the placement environment.",
      headers: ["Placement type", "Enclosure rating", "Refrigeration design", "Connectivity"],
      rows: [
        ["Outdoor exposed (sun + rain)", "NEMA 4X stainless or coated steel", "Hot-climate condenser (ambient 95-110°F rated)", "Cellular + ruggedized antenna"],
        ["Outdoor covered (canopy)", "NEMA 3R", "Standard high-ambient (95°F rated)", "Cellular or hardwired Ethernet"],
        ["Indoor air-conditioned", "Standard NEMA 1", "Standard ambient (60-80°F)", "Hardwired Ethernet or WiFi"],
        ["Backstage / cast-only", "NEMA 1", "Standard ambient", "Hardwired Ethernet"],
        ["Seasonal outdoor (water park)", "NEMA 4X + IP65 readers", "Hot-climate, dehumidifier-equipped", "Cellular"],
      ],
    },
    {
      heading: "3. Park-app + payment integration",
      items: [
        { label: "Payment methods", value: "Apple Pay, Google Pay, contactless EMV, park-app QR + wallet, park-RFID wristband (where the park uses a Disney MagicBand-style wearable)." },
        { label: "Park-app SDK", value: "Operator integrates with park-app SDK or REST API; supports wallet credit, season-pass perks, dining-plan deduction where applicable." },
        { label: "PCI-DSS 4.0", value: "Operator AOC + applicable SAQ (SAQ-B-IP for cashless networked); no PAN storage at the vending machine; tokenization through P2PE-validated solution where required." },
        { label: "Loss prevention", value: "Vision + analytics integration (operator-side); transaction-log mirrored to park's loss-prevention system; alert thresholds for refund spikes or unusual cash patterns." },
        { label: "Data exchange", value: "Operator delivers per-guest spend (anonymized or guest-ID-linked per park privacy policy) to park's data platform; COPPA + state-privacy compliance for any minor guest data." },
      ],
    },
    {
      heading: "4. Surge calendar template",
      paragraph:
        "Theme parks experience attendance peaks tied to holidays, school calendars, and event programming. Operator should pre-position inventory and labor against the surge calendar.",
      items: [
        { label: "Tier-1 surges (highest)", value: "Memorial Day weekend, Independence Day, Labor Day weekend, week between Christmas + New Year, spring break peak weeks." },
        { label: "Tier-2 surges (high)", value: "Easter weekend, Mother's Day, Father's Day, Halloween / fall event weekends, Thanksgiving weekend." },
        { label: "Tier-3 surges (medium)", value: "Summer weekends, school-out weeks (region-specific), event nights (concerts, fireworks)." },
        { label: "Pre-position", value: "T-7 inventory build (1.5-2.0x normal); T-1 staffing build (additional restock + service tech on standby); T+0 telemetry-driven mid-day top-off." },
        { label: "Post-surge analysis", value: "T+3 surge review: per-SKU sell-through, refund rate, downtime, customer-feedback themes. Drives next-year surge planning." },
      ],
    },
    {
      heading: "5. Operator capability checks",
      items: [
        { check: "Operator should attest to custom themed cabinet fabrication or partnership with a themed-fabrication vendor (Mycotoo, Garner Holt, or comparable)." },
        { check: "Operator should attest to NSF/ANSI 7 + 25 certifications on all refrigerated equipment under the themed cabinet." },
        { check: "Operator should attest to NEMA-rated electrical enclosure matching the placement environment + UL-listed assembly." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless payment, park-app SDK integration capability, and PCI-DSS audit on file." },
        { check: "Operator should provide $5M general liability (higher than baseline for theme-park venue), $5M umbrella, food product liability ≥ $2M, additional-insured endorsement to park + IP owner." },
        { check: "Operator should attest to cast / employee background check, badging, and onboarding consistent with park policy." },
      ],
    },
    {
      heading: "6. Service SLA + cadence",
      items: [
        { label: "Tier-1 (revenue-critical, cold-chain, payment)", value: "≤ 2 hour on-site response during operating hours; ≤ 4 hour resolution. Examples: machine offline, payment system down, temperature excursion, refrigeration failure." },
        { label: "Tier-2 (stockout, planogram)", value: "≤ 4 hour acknowledgement; restock during next park-down window (typically overnight)." },
        { label: "Tier-3 (cosmetic, graphic, signage)", value: "≤ 24 hour acknowledgement; resolution during scheduled park maintenance window." },
        { label: "Park-down window operations", value: "Operator service crew operates during park-down (typically 1-6 AM); coordinate with park security + maintenance for access." },
        { label: "Cast-only placements", value: "Service during cast-shift change windows; coordinate with HR + operations." },
      ],
    },
    {
      heading: "7. Planogram + product specification",
      items: [
        { label: "Beverage (50% of facings, hot weather; 35% cool weather)", value: "Bottled water (16-20 oz), sparkling water, electrolyte, soda + diet (per park beverage rights), juice, RTD coffee. Park beverage-rights partner (Coca-Cola or PepsiCo) defines available SKUs." },
        { label: "Snack (35%)", value: "Themed snack assortment aligned with park IP where licensed; baseline chips, popcorn, candy, novelty. Allergen labeling per FALCPA + FASTER Act." },
        { label: "Themed / IP novelty (10%)", value: "Souvenir cup, themed candy, character-branded snack where IP licensing permits. Margin typically 2-3x baseline SKU." },
        { label: "Healthier option facing (5%)", value: "Fruit cup, nut pack, lower-sugar bar — required at family-park placements per park guest-services policy." },
        { label: "Cold-chain", value: "Refrigerated section maintained ≤ 40°F per FDA Food Code 3-501.16; telemetry alert at 30 minutes of excursion." },
      ],
    },
    {
      heading: "8. Reporting + quarterly review",
      items: [
        { check: "Daily during peak season: uptime, transactions, refund rate, cold-chain compliance." },
        { check: "Weekly during peak season: per-SKU velocity + stockout incidents + service ticket SLA adherence." },
        { check: "Monthly: full uptime + revenue + commission + planogram velocity + customer-feedback summary." },
        { check: "Quarterly: surge debrief, themed-graphic refresh proposal, IP-licensing renewal status, planogram refresh." },
        { check: "Annual: themed cabinet refresh cycle (typically 3-5 years per IP cycle), insurance + PCI recertification, contract renewal review." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal or engineering advice. Themed-cabinet fabrication, IP licensing, and park-app integration each carry distinct legal, technical, and operational risk; confirm with park procurement, IT, food safety, and IP counsel. Local building, fire, and food codes may impose requirements above the federal floor.",
});

console.log("wrote " + "custom-vending-theme-parks");
