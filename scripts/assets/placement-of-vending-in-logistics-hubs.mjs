import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "placement-of-vending-in-logistics-hubs",
  assetType: "pack",
  title: "Logistics Hub Vending Placement Framework",
  subtitle: "5-zone placement map, survey methodology, safety walk-through, and equipment spec",
  intro:
    "Placement is the single biggest driver of utilization and uptime in logistics-hub vending. This pack consolidates a five-zone placement map, a worker-survey methodology, a safety walk-through, and an equipment spec — the working documents a facility services team typically needs before scoping an operator RFP or recompete.",
  sections: [
    {
      heading: "1. The five zones",
      paragraph:
        "Most hubs break down into five functional zones. Each has different worker flow, dwell time, ambient conditions, and security posture. Vending suitability differs accordingly.",
      headers: ["Zone", "Worker flow", "Dwell time", "Ambient", "Vending fit"],
      rows: [
        ["Front office / admin", "Light, business hours", "All day", "Conditioned 68–74°F", "Smaller cabinet or micro-market"],
        ["Break room / canteen", "Concentrated at break + meal", "10–30 min", "Conditioned 68–74°F", "Full micro-market + traditional + coffee"],
        ["Floor-adjacent break station", "Continuous, brief stops", "3–10 min", "Variable; sometimes 75–88°F", "Hardened traditional + hydration"],
        ["Dock + sortation floor", "Constant motion", "< 5 min", "Variable, sometimes < 50°F or > 88°F", "Hydration-only hardened machines"],
        ["Driver / yard area", "Intermittent, 24/7", "5–15 min", "Exterior or canopy", "Outdoor-rated hardened machines + cellular"],
      ],
    },
    {
      heading: "2. Worker-survey methodology",
      paragraph:
        "Run a 7-day survey before placement to ground placement decisions in observed flow, not guesswork. Combine pedometer-style observations with a one-question pulse survey.",
      items: [
        { number: 1, title: "Headcount + shift map", description: "Confirm FTE per shift; identify the 5 highest-traffic worker paths during shift start, mid-shift break, and shift end. Walk the path with stopwatch; record dwell points." },
        { number: 2, title: "Existing food / drink utilization", description: "Audit existing coolers, coffee stations, water fountains. Record peak queue times and stockout reports." },
        { number: 3, title: "One-question pulse survey", description: "'If we could place a vending machine on your shift, where would you use it most?' — 5 options matched to candidate zones. Capture department + shift. Target ≥ 30% response rate." },
        { number: 4, title: "Sightline + safety overlay", description: "Walk candidate placements with EHS lead; check egress, sprinkler coverage, forklift path, dock-leveler exclusion zones." },
        { number: 5, title: "Climate measurement", description: "Spot-check temperature + humidity at candidate placements across shifts; refrigerated cabinets need 50–90°F ambient per typical NSF-7 spec." },
      ],
    },
    {
      heading: "3. Safety walk-through checklist",
      items: [
        { check: "Egress corridor retains ≥ 44 in clear width per NFPA 101 §7.1 (or ≥ 36 in if occupant load < 50)" },
        { check: "No placement within 36 in of fire extinguisher, eyewash, or AED" },
        { check: "Sprinkler coverage not obstructed; clearance per NFPA 13 typically ≥ 18 in below deflector" },
        { check: "Outside forklift travel paths and marked aisle yellow-line offset" },
        { check: "≥ 25 ft from any dock leveler edge or fall hazard (OSHA 29 CFR 1910.28)" },
        { check: "Dedicated 20A circuit available; outlet GFCI where within 6 ft of water" },
        { check: "Lighting in placement zone ≥ 20 fc at machine face (recommended)" },
        { check: "No placement directly under overhead conveyor, sprinkler riser, or HVAC condensate line" },
        { check: "ADA reach + clear floor space verified (§308, §305)" },
        { check: "Network: cellular signal ≥ −90 dBm or facility VLAN drop available with PCI segmentation attestation" },
      ],
    },
    {
      heading: "4. Equipment spec by zone",
      items: [
        { label: "Front office / admin", value: "Standard refrigerated cabinet or compact micro-market kiosk; ENERGY STAR; ADA-compliant." },
        { label: "Break room / canteen", value: "Full micro-market (smart cooler + traditional pair) + coffee. AWM Smart Shelf, 365 Retail Markets, Cantaloupe Yoke, or Nayax VPOS Touch class." },
        { label: "Floor-adjacent break station", value: "Hardened traditional cabinet — reinforced glass, vandal-resistant keypad, tamper-resistant fasteners. Cellular telemetry preferred." },
        { label: "Dock + sortation", value: "Hydration-only cabinets; cabinets rated for 40–95°F ambient extreme; cellular telemetry; cashless-only." },
        { label: "Driver / yard area", value: "Outdoor-rated hardened cabinets (IP44 + UL-471 outdoor listed); canopy or vestibule preferred; cellular telemetry mandatory; sub-zero rated where winter lows < 20°F." },
      ],
    },
    {
      heading: "5. Density + sizing rules of thumb",
      headers: ["FTE per zone per shift", "Beverage cabinet", "Snack cabinet", "Smart cooler"],
      rows: [
        ["< 50", "1", "1", "Optional"],
        ["50 – 150", "1–2", "1", "1 in break room"],
        ["150 – 300", "2–3", "1–2", "1 in break room + 1 floor-adjacent if pedometer supports"],
        ["300 – 500", "3–4", "2–3", "1 micro-market + 2nd unit if pedometer supports"],
        ["500+", "4–6", "3–5", "Full micro-market + additional floor placements"],
      ],
    },
    {
      heading: "6. Integration with facility systems",
      items: [
        { number: 1, title: "Badge access (optional)", description: "HID iCLASS / Prox / Seos; integrates with payroll-deduct via Workday / Kronos / UKG bi-weekly file." },
        { number: 2, title: "Network", description: "Operator cellular LTE preferred (PCI segmentation). If facility WiFi, dedicated SSID + VLAN with attestation from facility IT." },
        { number: 3, title: "Power", description: "Dedicated 20A circuits; UL-listed equipment; not on shared circuit with shop tools or air handlers." },
        { number: 4, title: "Signage", description: "Worker onboarding signage in break rooms ≥ 2 weeks before go-live; QR-link to refund flow." },
        { number: 5, title: "Telemetry roll-up", description: "Operator dashboard accessible to facility services + EHS; per-shift velocity, uptime, refund rate, temperature excursions." },
      ],
    },
    {
      heading: "7. Indicative budget by zone",
      headers: ["Zone", "Capital (operator-funded in full-service)", "Service / month"],
      rows: [
        ["Front office", "$5,500 – $9,000", "$80 – $160"],
        ["Break room (micro-market + traditional pair)", "$18,000 – $42,000", "$180 – $420"],
        ["Floor-adjacent (hardened cabinet)", "$6,500 – $11,500", "$120 – $240"],
        ["Dock + sortation (hardened + hydration-only)", "$7,500 – $12,500", "$140 – $260"],
        ["Yard / outdoor-rated", "$11,000 – $19,000", "$200 – $380"],
      ],
    },
    {
      heading: "8. Placement decision tree",
      items: [
        { number: 1, title: "If pedometer shows < 30 workers/shift passing in 100 ft radius", description: "Skip the placement; consolidate into a nearby higher-traffic zone." },
        { number: 2, title: "If ambient temperature exceeds 90°F at peak", description: "Hydration-only cabinet; refrigerated condiment-snack cabinets fail rapidly outside NSF-7 spec." },
        { number: 3, title: "If shift workforce > 50% non-English-primary speakers", description: "Multilingual on-machine signage + multilingual operator app for refunds." },
        { number: 4, title: "If site is 24/7 with no on-site management overnight", description: "Cashless-only; cellular telemetry; remote refund (no on-site cash handling)." },
        { number: 5, title: "If site has > 5 candidate zones", description: "Phase deployment — 2 zones at pilot, expand based on first 90 days of telemetry." },
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate logistics-hub placement design through operators that can attest to hardened equipment, cellular telemetry, ADA + NFPA + OSHA placement compliance, and zone-tuned planograms. Capability is described in operator-attestable terms; documentation provided on request during scoping.",
    },
  ],
  footer:
    "Working reference for facility, EHS, and procurement teams. Final placement decisions are site-specific; verify NFPA + OSHA placement constraints with your AHJ and EHS lead.",
});

console.log("wrote "+"placement-of-vending-in-logistics-hubs");
