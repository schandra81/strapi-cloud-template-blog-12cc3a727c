import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "ergonomic-vending-industrial-workflows",
  assetType: "pack",
  title: "Ergonomic Industrial Vending Pack",
  subtitle: "Placement framework, equipment spec, PPE-aware product mix, ANSI Z535 signage, quarterly review",
  intro:
    "Ergonomic industrial vending integrates with the workflow — not in spite of it. ANSI/ASSE Z244.1 lockout-aware service, ADA Section 308 reach range, OSHA 1910.176 aisle clearance, ANSI Z535 signage, and OSHA 1910.95 hearing-conservation context all shape placement. This pack codifies five artifacts so an industrial program is equipped to operate without becoming an ergonomic hazard or workflow blocker.",
  sections: [
    {
      heading: "1. Placement framework",
      paragraph:
        "Placement decisions answer five questions: where is the worker's high-flow window, what's the dwell time, what's the aisle clearance, what's the lockout boundary, and what's the lighting?",
      items: [
        { number: 1, title: "High-flow window mapping", description: "Walk each shift transition and locate the 2-3 corridors with highest pedestrian volume; vending placed within 30 feet captures 60-70% more revenue (NAMA placement-velocity benchmarks)." },
        { number: 2, title: "Dwell-time zones", description: "Break rooms, locker rooms, and shift-meeting rooms drive 2-3x snack vending vs corridors." },
        { number: 3, title: "Aisle clearance", description: "OSHA 1910.176(a) requires sufficient safe clearance for aisles; vending placement preserves min 36-inch clear path." },
        { number: 4, title: "Lockout boundary", description: "ANSI/ASSE Z244.1 lockout zones (high-voltage panels, pinch points, energy-isolating devices) preclude vending within 5 feet." },
        { number: 5, title: "Lighting", description: "Min 30 foot-candles at the machine face per IES recommended practice for industrial task lighting." },
      ],
    },
    {
      heading: "2. Equipment specification",
      paragraph:
        "Equipment specs that matter for industrial environments — beyond generic retail spec.",
      headers: ["Spec area", "Requirement", "Reference"],
      rows: [
        ["Cabinet ingress protection", "IP54 minimum for warehouse + dock", "IEC 60529"],
        ["Operating force", "≤ 5 lbf on all operable parts", "ADA Section 309.4"],
        ["Glove operability", "Touchscreen + buttons operate with ANSI/ISEA 105 A3+", "Industry practice"],
        ["Reach range", "≤ 48 inches; ≥ 15 inches", "ADA Section 308.2.1"],
        ["Audio confirmation", "≥ 85 dB tone (above hearing-protected baseline)", "OSHA 1910.95 context"],
        ["Refrigeration", "35-40°F for cold; 140°F+ for hot-food", "FDA Food Code 3-501.16"],
        ["Cellular telemetry", "Sub-15-min heartbeat; per-shift velocity", "Cantaloupe / Nayax standard"],
      ],
    },
    {
      heading: "3. PPE-aware product mix",
      paragraph:
        "Product mix accounts for workers in gloves, ear protection, and time-pressed breaks. Packaging, single-hand operability, and electrolyte/hydration alignment matter.",
      items: [
        { label: "Single-hand packaging", value: "Tear-open, pull-tab, screw-cap; no two-hand wrappers." },
        { label: "Glove-compatible cans/bottles", value: "Wider grip diameter or knurled finish where available." },
        { label: "Hydration-forward (heat exposure)", value: "Water + electrolyte solutions per OSHA NEP on heat (2022); aligns with ACGIH WBGT > 80°F." },
        { label: "Protein density (shift workers)", value: "Protein bars, jerky, hard-boiled eggs in cold-chain for shift workers without time for cafeteria visit." },
        { label: "Hot-food (overnight + cold-storage)", value: "Hot drinks + microwaveable entrées for cold-storage and overnight shifts." },
        { label: "Allergen labels (FALCPA)", value: "Big-9 allergens declared in plain language; allergen summary card on machine face." },
      ],
    },
    {
      heading: "4. ANSI Z535 signage template",
      paragraph:
        "Signage at the machine combines wayfinding, safety information, and refund + allergen disclosure. ANSI Z535 governs format.",
      items: [
        { label: "Z535.1 — color", value: "Red (danger), orange (warning), yellow (caution), green (safety / first aid)." },
        { label: "Z535.2 — environmental + facility signs", value: "Wayfinding signage to vending area; arrows + pictograms." },
        { label: "Z535.4 — product safety signs", value: "Machine-mounted safety placard — service door warning, electrical disconnect location." },
        { label: "Z535.5 — safety tags", value: "Service tags for technician work; OSHA lockout/tagout aligned." },
        { label: "Z535.6 — safety information in documentation", value: "Operator manual + worker quick-reference card." },
        { label: "Refund + allergen disclosure", value: "Refund channel + FALCPA allergen summary on a dedicated placard ≤ 60 inches above floor." },
      ],
    },
    {
      heading: "5. Quarterly review framework",
      paragraph:
        "QBR with operator + EHS coordinator + ops manager. Six metrics reported.",
      headers: ["Metric", "Target", "Alert"],
      rows: [
        ["Uptime per machine", "≥ 98%", "< 95% triggers service review"],
        ["Stockout rate (per-SKU)", "< 3%", "> 5% triggers planogram + cadence review"],
        ["Cashless mix", "≥ 70%", "< 60% triggers payment hardware review"],
        ["Refund rate", "< 2%", "> 2% triggers planogram or hardware review"],
        ["Worker satisfaction (annual survey)", "NPS ≥ +30", "< +10 triggers SKU + UI review"],
        ["Safety incident count near machine", "0", "Any incident triggers placement review"],
      ],
    },
    {
      heading: "6. Ergonomic placement checklist",
      items: [
        { check: "Machine within 30 feet of high-flow corridor." },
        { check: "36-inch aisle clearance per OSHA 1910.176(a)." },
        { check: "5-foot clearance from any lockout/tagout zone per ANSI Z244.1." },
        { check: "Min 30 foot-candle lighting at machine face." },
        { check: "ADA Section 308 reach range and ≤ 5 lbf operating force verified." },
        { check: "Card reader and contactless tap zone weatherproof if in dock area." },
        { check: "Telemetry reports sub-15-min heartbeat + per-shift velocity." },
        { check: "ANSI Z535 signage installed (wayfinding + safety + refund + allergen)." },
      ],
    },
    {
      heading: "7. Operator selection scorecard",
      headers: ["Dimension", "Verify", "Weight"],
      rows: [
        ["Industrial experience", "≥ 24 months + 3 references", "25%"],
        ["ANSI / ADA attestation", "VPAT + Section 308 + Z535 attestation", "20%"],
        ["PPE-aware UI capability", "Glove-mode demonstration video", "15%"],
        ["Cold-chain + hot-food capability", "FDA Food Code attestation + 4-hour SLA alarm", "15%"],
        ["Telemetry + cashless", "Cellular telemetry + EMV/NFC", "10%"],
        ["Service SLA + cadence", "Tier-1 < 24-hour resolution", "10%"],
        ["Insurance + financial", "GL ≥ $5M + auto + WC + cyber", "5%"],
      ],
    },
  ],
  footer:
    "This pack is a working ergonomic reference. Confirm OSHA + ANSI + ADA requirements with the host EHS coordinator and operator before commit; localize to facility-specific lockout boundaries and aisle clearance rules.",
});

console.log("wrote "+"ergonomic-vending-industrial-workflows");
