import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-remote-logistics-locations",
  assetType: "pack",
  title: "Remote Logistics Vending Pack",
  subtitle: "Operator availability assessment, equipment hardening matrix, cellular telemetry verification, realistic-SLA framework, and longer-cycle planogram",
  intro:
    "Remote logistics sites (rural DCs, energy-corridor depots, ports of entry, agricultural processing nodes, mine-adjacent yards) sit outside the dense operator territories that drive standard vending economics. This pack consolidates five working documents for facility services teams scoping vending at sites where the nearest operator route is 90+ minutes away: operator-availability assessment, equipment hardening matrix, cellular-telemetry verification, realistic-SLA framework, and longer-cycle planogram.",
  sections: [
    {
      heading: "1. Operator availability assessment",
      paragraph:
        "Before drafting an RFP, confirm an operator can actually serve the site. Many full-service operators define a 60–90 minute drive-time radius from the nearest commissary; outside that radius, economics break.",
      items: [
        { check: "Identify operator's nearest commissary or distribution hub; record drive-time at typical commercial-vehicle speed" },
        { check: "Confirm operator route days that already pass within 30 miles (combining routes reduces fee structure)" },
        { check: "Verify operator commissary holds state food-establishment permit covering the destination state if state-line cross is required" },
        { check: "Confirm fresh / refrigerated SKU window — most operators cap fresh delivery at ≤ 90 minute drive from commissary" },
        { check: "Verify operator carries cellular telemetry across multiple carriers (Verizon, AT&T, T-Mobile) — single-carrier deals fail in dead zones" },
        { check: "If no full-service operator serves site, evaluate self-service + 3rd-party route (DSD) hybrid or unattended-retail micro-market with regional restock" },
      ],
    },
    {
      heading: "2. Equipment hardening matrix",
      headers: ["Stressor", "Hardening", "Standard reference"],
      rows: [
        ["Outdoor exposure / canopy", "IP44 + UL-471 outdoor-rated cabinet; sealed cabinet door; tamper-resistant fasteners", "UL-471 / IP rating system"],
        ["Temperature extreme (< 20°F / > 95°F)", "Cabinet rated for ambient 0–110°F; heater kit for sub-freezing; condenser shroud + airflow planning", "NSF-7 cabinet spec + OEM ambient rating"],
        ["Humidity / dust", "NEMA 12 enclosure for electronics; sealed touchscreen; cabinet-grade drain pan", "NEMA 250 enclosure standards"],
        ["Vibration (rail, mine-adjacent)", "Reinforced shelf hardware; vibration-isolated compressor mount", "OEM spec"],
        ["Vandalism / theft", "Tempered laminated glass; vandal-resistant keypad; tamper switch + cellular alarm", "UL-listed door hardware"],
        ["Power instability", "Brownout-tolerant power supply; UPS for telemetry + payment; surge protection NEMA-rated", "NFPA 70 §285 surge"],
        ["Cellular dead-zones", "Dual-SIM modem (multi-carrier failover); external antenna + signal-amplifier kit", "FCC Part 22/24/27 compliant amplifier"],
      ],
    },
    {
      heading: "3. Cellular telemetry verification protocol",
      paragraph:
        "Cellular is non-negotiable at remote sites — facility WiFi typically unavailable and PCI-segmentation impractical. Verify signal strength before equipment ships.",
      items: [
        { number: 1, title: "Pre-install site survey", description: "Operator dispatches multi-carrier signal scanner; record RSRP for Verizon / AT&T / T-Mobile at each candidate placement. Target ≥ −90 dBm; below −100 dBm requires amplifier or relocation." },
        { number: 2, title: "Dual-SIM verification", description: "Operator modem auto-fails over to secondary carrier on dropped packets. Test pull-the-plug from primary; secondary connects within 90 seconds." },
        { number: 3, title: "Antenna placement", description: "External antenna + low-loss coax run if needed; antenna gain typically 4–7 dBi for cabinet-top mount." },
        { number: 4, title: "Telemetry SLA at remote sites", description: "Acknowledge sub-15-minute heartbeat target may degrade to sub-30-minute at fringe-signal sites; operator attests in writing to the achievable cadence." },
        { number: 5, title: "Cold-chain redundancy", description: "If cellular telemetry is the only cold-chain alert path, on-cabinet audible alarm + local data-logger acts as fallback; logger downloaded at restock visit." },
      ],
    },
    {
      heading: "4. Realistic SLA framework — remote sites",
      paragraph:
        "Standard urban SLA (< 24 hour Tier 1 resolve) often impossible at sites 90+ minutes from operator base. Negotiate realistic tiers in writing rather than accept a paper SLA that will fail.",
      headers: ["Tier", "Urban SLA", "Remote-site SLA (typical)", "Mitigation"],
      rows: [
        ["Tier 1 (revenue/cold/payment)", "< 4 hr ack, < 24 hr resolve", "< 8 hr ack, < 48–72 hr resolve", "Cold-chain redundancy + spare-parts kit on site"],
        ["Tier 2 (stockout / planogram)", "24–48 hr ack, 5–7 day resolve", "48–72 hr ack, 7–14 day resolve", "Longer-cycle planogram + larger pack sizes"],
        ["Tier 3 (cosmetic / signage)", "5 day ack, 14 day resolve", "5 day ack, 21–30 day resolve", "Batched with restock visit"],
        ["Uptime target", "98% monthly", "95% monthly", "Restock visit cadence determines floor"],
        ["Refund SLA", "App/SMS auto-credit < 24 hr", "App/SMS auto-credit < 24 hr", "Same — cashless makes this remote-tolerant"],
      ],
    },
    {
      heading: "5. Longer-cycle planogram",
      paragraph:
        "Restock visits at remote sites are typically 1–2 per week vs 3–4 at urban hubs. Planogram tilts toward shelf-stable + longer-dated SKUs without sacrificing real-meal options.",
      items: [
        { label: "Hydration", value: "Bias to single-serve water + electrolyte; aluminum cans preferred over PET (no UV degradation at outdoor placements)" },
        { label: "Real-meal", value: "Frozen or shelf-stable real-meal options where commissary distance > 90 min; refrigerated only if dedicated cold-chain route" },
        { label: "Protein snack", value: "Larger pack sizes (jerky 3–4 oz, protein bars 60 g) — fewer transactions per restock" },
        { label: "Beverages", value: "Aluminum cans + glass over PET for shelf life; 12-pack restocks per bay" },
        { label: "Coffee / hot drinks", value: "Single-serve K-cup or bean-to-cup station with 90-day-rated whole bean; single-serve coffee canisters where bean-to-cup unavailable" },
        { label: "Sodium / shelf-stable snack", value: "Tilt to 50–60% shelf-stable SKUs (chips, pretzels, nuts, jerky) — refrigerated cap ~30% of slots at fringe sites" },
      ],
    },
    {
      heading: "6. Cost-of-remote framework",
      headers: ["Line item", "Urban range", "Remote range (50–150 mi)"],
      rows: [
        ["Operator service fee (per machine/month)", "$80 – $260", "$280 – $560"],
        ["Per-mile fuel surcharge (one-way)", "Included", "$0.65 – $1.20/mi over 30 mi from base"],
        ["Cellular telemetry + amplifier kit (one-time)", "$0", "$320 – $800"],
        ["Hardening uplift (outdoor + vibration)", "$0", "$600 – $2,400 per cabinet"],
        ["Annual spare-parts kit on site", "$0", "$280 – $620"],
        ["Below-threshold service fee", "Often $0", "Common — $200 – $480/month if site revenue < $250/wk/machine"],
      ],
    },
    {
      heading: "7. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate remote-logistics vending through operators that can attest to longer drive-time service, dual-SIM cellular telemetry, hardened equipment, realistic-SLA tiers, and longer-cycle planogram. Some remote postal codes will not have a full-service operator available; in those cases we describe self-service or hybrid options. Capability documentation provided on request during scoping; we do not claim engagements at any specific named remote site.",
    },
  ],
  footer:
    "Working reference for facility teams scoping remote-site vending. Confirm operator availability against actual zip code before drafting RFP; many remote sites require creative service models or hybrid stacks.",
});

console.log("wrote "+"vending-remote-logistics-locations");
