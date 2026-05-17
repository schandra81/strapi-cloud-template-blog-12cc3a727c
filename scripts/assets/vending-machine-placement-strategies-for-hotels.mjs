import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-placement-strategies-for-hotels",
  assetType: "template",
  title: "Hotel Vending Placement Planning Template",
  subtitle: "Zone matrix, traffic study, and brand-tier playbook for select-service, full-service, and resort properties",
  intro:
    "Hotel vending placement drives both revenue (per-machine sales vary 4-7x between high-traffic and low-traffic zones) and brand-standard compliance (Marriott BSA, Hilton OS&E, IHG, Hyatt, Four-Diamond inspection). This template codifies a defensible placement approach: a zone matrix that maps device type to floor type, a one-day traffic study the night auditor can execute, and a brand-tier playbook for select-service, full-service, and resort property types.",
  sections: [
    {
      heading: "1. Zone matrix — device by floor type",
      paragraph:
        "Most full-service and select-service hotels have 4-7 candidate zones for vending placement. Match device type to traffic profile + guest behavior, not to convenience for the operator's restocking route.",
      headers: ["Zone", "Traffic profile", "Recommended device", "Avoid"],
      rows: [
        ["Guest-floor ice + vending alcove (each floor or every other floor)", "Repeat guest visits 11 PM – 7 AM; small ticket; impulse", "Snack + cold beverage combo, single AI cooler if upscale", "Hot-beverage equipment (sanitation + spill risk)"],
        ["Lobby-adjacent (off-pantry)", "Daytime check-in/check-out; family + group guests", "Healthy-snack glass-front + cold beverage; AI cooler for upscale", "Older spiral-deck snack machines"],
        ["Pool deck / amenity floor", "Seasonal; high in summer or resort year-round; impulse + family", "Frozen-treat / IM-style + cold beverage; waterproof cabinet", "Refrigerated combo with low ingress protection rating"],
        ["Fitness center", "Early morning + evening; recovery + hydration purchases", "Cold beverage + healthy snack glass-front + AI cooler", "Sugary-snack-heavy planogram"],
        ["Conference / pre-function", "Event-driven spikes; group block guests", "Cold beverage + snack combo + coffee bar adjacent", "Underprovisioned single combo for 200+ attendee events"],
        ["Back-of-house / employee", "Three-shift workers; revenue secondary to retention", "Subsidized snack + beverage combo + hot-beverage", "Public-facing equipment in BOH"],
        ["Business center / 24-hour pantry", "Mixed guest + employee; small ticket impulse", "Micro-market panel or full glass-front AI cooler", "Underpowered single snack-only machine"],
      ],
    },
    {
      heading: "2. Traffic study — one-day count, night-auditor executable",
      paragraph:
        "Run a 24-hour traffic count at each candidate zone before final placement. The night auditor logs counts hourly during the overnight; a duty manager covers the day shift. Output is a heat-map the F&B director uses to confirm placement priority and shift weighting.",
      items: [
        { number: 1, title: "Identify candidate zones", description: "Walk the property with the GM, F&B director, engineering, and the operator account manager. List every zone with electrical access + clear floor space ≥ 30\" × 48\"." },
        { number: 2, title: "Set count schedule", description: "Hourly tally at each zone for 24 hours on a representative midweek day (typically Tuesday or Wednesday outside peak season). Use a single-sheet tally form per zone." },
        { number: 3, title: "Capture guest type", description: "Mark each guest as leisure, business, group, family, or staff. Used later to align planogram by zone." },
        { number: 4, title: "Plot heat map", description: "Sum hourly counts per zone. Top-3 zones receive primary devices; mid-tier zones receive secondary; bottom-tier zones may not justify placement." },
        { number: 5, title: "Confirm electrical + ADA", description: "Each finalist zone is verified for 120V (or 208V for refrigerated combo + IM), GFCI, and ADA Section 305 + 308 clearance before equipment install." },
        { number: 6, title: "Coordinate with brand-standard inspection", description: "Confirm the placement meets brand-standard sightline + cleanliness inspection items (Marriott BSA, Hilton OS&E, IHG, AAA Diamond)." },
      ],
    },
    {
      heading: "3. Brand-tier playbook",
      paragraph:
        "Placement strategy varies by brand tier. Use the playbook below to align placement to brand expectation; do not reuse a select-service playbook on a resort property or vice versa.",
      items: [
        { label: "Limited-service (Hampton, Holiday Inn Express, Fairfield, Comfort)", value: "Single combo machine per guest floor (or every other floor on 6+ story properties), one lobby-adjacent device, one BOH employee device. Cashless required; telemetry required. Healthy options 35-40% per brand standard." },
        { label: "Select-service (Courtyard, Hilton Garden Inn, Hyatt Place, Aloft)", value: "Combo per guest floor; lobby-adjacent healthy snack + cold beverage pair; fitness-center beverage cooler; BOH employee device. Telemetry + cashless required. Healthy options 40-50%. AI cooler increasingly common at this tier." },
        { label: "Full-service (Marriott, Hilton, Westin, Hyatt Regency)", value: "Combo + AI cooler on key guest floors; lobby pantry with micro-market panel; fitness-center cooler; pool-deck cooler in season; BOH employee program; pre-function support. Telemetry mandatory; brand-standard façade required on guest-visible devices." },
        { label: "Luxury + resort (Four Seasons, Ritz-Carlton, Edition, Park Hyatt, Auberge, Rosewood)", value: "Many properties avoid traditional vending in guest-visible zones; replace with in-room mini-bar + 24-hour room-service. Vending acceptable on BOH employee floors + fitness center + pool deck with concealment-cabinet treatment. AAA Five-Diamond + Forbes Five-Star inspections evaluate vending discreetly." },
        { label: "Extended-stay (Residence Inn, Homewood, Element, Staybridge)", value: "Longer-stay guests purchase more vending than overnight transients. Add larger pantry-style market + AI cooler on lobby level; larger combos on each floor; coffee + breakfast self-serve in lobby. Telemetry + planogram refresh quarterly." },
        { label: "All-inclusive resort", value: "Vending used primarily for BOH employee program + back-of-pool ice/water support, not for guest revenue. Focus on hydration + heat-tolerant equipment with IP-rated cabinets." },
      ],
    },
    {
      heading: "4. Placement matrix — final decision worksheet",
      paragraph:
        "Use this single-page worksheet to record final placement decisions. Retained with the operator contract for the term.",
      headers: ["Zone", "Device", "Floor count installed", "Telemetry SKU", "ADA + electrical verified", "Brand-standard sightline confirmed"],
      rows: [
        ["Guest-floor alcove", "Refrigerated combo", "Floors 2-N", "Cantaloupe / Nayax / 365 / AWM", "Y / N", "Y / N"],
        ["Lobby pantry", "Glass-front AI cooler", "Lobby (1)", "Same", "Y / N", "Y / N"],
        ["Fitness center", "Cold beverage + healthy snack", "Fitness (1)", "Same", "Y / N", "Y / N"],
        ["Pool deck (in season)", "Cold beverage + frozen treat", "Pool (1)", "Same", "Y / N", "Y / N"],
        ["BOH employee", "Subsidized combo + hot beverage", "BOH (1-2)", "Same", "Y / N", "n/a"],
      ],
    },
    {
      heading: "5. Common placement mistakes",
      items: [
        { label: "Putting vending in the lobby sightline at a four-diamond property", value: "Even with brand-approved façade, lobby-visible vending downgrades the AAA Four-Diamond + Forbes Travel Guide inspection. Move to off-pantry or behind a millwork screen." },
        { label: "Skipping the traffic study", value: "Operators routinely recommend placement based on their restocking convenience. Run the one-day count; revenue varies 4-7x by zone." },
        { label: "Underprovisioning conference / pre-function zones during group business", value: "200+ attendee meeting groups exhaust a single combo machine before the first break. Either add a second device or run a temporary deployment from the operator during the group block." },
        { label: "Missing GFCI + ADA verification", value: "Both are legally required and routinely missed in older properties. Verify before install; not after a guest complaint or BSA finding." },
        { label: "No pouring-rights coordination", value: "If your property has a Coca-Cola or PepsiCo pouring-rights contract, the vending planogram must align (typically by reference). Misalignment is the most common operator dispute in the first 12 months." },
      ],
    },
  ],
  footer:
    "This template is a working planning reference. Final placement decisions should be reviewed against the brand-standard document that applies to your flag, the AAA Diamond / Forbes Star inspection criteria where applicable, and the property beverage pouring-rights contract.",
});

console.log("wrote "+"vending-machine-placement-strategies-for-hotels");
