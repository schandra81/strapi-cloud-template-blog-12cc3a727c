import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "robotics-automation-factory-vending",
  assetType: "playbook",
  title: "Factory Vending Robotics + Automation Playbook",
  subtitle: "Phased deployment roadmap + capital framework + ROI structure",
  intro:
    "Factory vending is in transition from coin-and-coil mechanical fleets to AI computer-vision coolers, automated micro-markets, and robotic-restock route operations. This playbook codifies the three-phase deployment roadmap, capital framework, and ROI structure an operator should be equipped to deliver — with vendor-class references and standards alignment.",
  sections: [
    {
      heading: "1. Three-phase deployment roadmap",
      paragraph:
        "A robotics + automation transition runs in three phases over 12-24 months. Skipping phases produces predictable failure modes: under-spec'd network, untrained workforce, missed integration with HRIS.",
      items: [
        { number: 1, title: "Phase 1 — Baseline + AI cooler pilot (months 1-6)", description: "Single AI computer-vision cooler at the highest-velocity break room. Vendor selection (AWM Smart Shelf, Boxie, Foxbox, AiFi, or comparable). Network + power + lighting site survey. Worker training. 8-week accuracy stabilization window." },
        { number: 2, title: "Phase 2 — Micro-market + automation expansion (months 7-12)", description: "Convert 2-4 additional break rooms to micro-market with AI coolers + automated kiosks + cashless-payroll-deduct integration. HRIS integration via host's API (Workday, UKG, ADP, Ceridian). Telemetry dashboard rolled out to facility + corporate." },
        { number: 3, title: "Phase 3 — Robotic restock + predictive operations (months 13-24)", description: "Where supported by operator scale + facility geography: robotic restock platform pilots (e.g., autonomous mobile robots ferrying restock pallets between dock and break room), AI-driven planogram + restock cadence optimization, predictive maintenance via telemetry + ML." },
      ],
    },
    {
      heading: "2. AI computer-vision cooler — vendor class + specs",
      paragraph:
        "AI coolers replace coil-and-spiral vending with a refrigerated case where workers tap a card, open the door, take items, and the system charges automatically. Velocity uplift commonly reported at 25-50% vs equivalent vending sq ft.",
      headers: ["Vendor / class", "Computer-vision approach", "Typical accuracy", "Footprint"],
      rows: [
        ["AWM Smart Shelf", "Weight + RFID + camera fusion", "98-99% transaction accuracy at scale", "Single-door reach-in cooler"],
        ["Boxie + Foxbox class", "Multi-camera computer vision", "97-99% with vendor-managed model recalibration", "Single or multi-door"],
        ["AiFi class (broader cashierless)", "Multi-camera + ceiling-mounted CV", "97-99% with proper site lighting", "Open-shelf store layout"],
        ["365 Retail Markets + Cantaloupe with vision overlay", "Vendor-specific implementations", "Vendor-attested specs", "Varies by configuration"],
      ],
    },
    {
      heading: "3. Site readiness specification",
      items: [
        { label: "Network", value: "1 dedicated Ethernet drop (1 Gbps) per AI cooler, or 5G/LTE-M with ≥ 10 Mbps sustained. Dedicated VLAN isolated from facility OT/IT networks. PCI DSS attestation if the cooler processes card data." },
        { label: "Power", value: "Dedicated 20A circuit per AI cooler; no shared loads with other equipment. Surge protection." },
        { label: "Lighting", value: "Ambient 50-200 lux at the cooler face; computer-vision performance degrades below 30 lux and above 500 lux. Diffuse lighting; no direct line-of-sight glare." },
        { label: "Camera positioning", value: "Vendor-specified; typically 18-24 in field of view per shelf. Camera firmware accessible to vendor for remote model updates." },
        { label: "Refrigeration", value: "R-290 hydrocarbon refrigerant (GWP 3 vs R-404A's 3,922); ENERGY STAR-qualified; LED interior; sleep-mode programming for low-activity windows." },
      ],
    },
    {
      heading: "4. Capital framework",
      paragraph:
        "Capital model depends on operator agreement structure. At scale, a managed-service contract has operator absorbing equipment capex; smaller deployments may require host capital for site readiness.",
      headers: ["Cost bucket", "Typical owner", "Range per AI cooler"],
      rows: [
        ["AI cooler equipment", "Operator (managed-service)", "$0 to host (typical) or $8-25k host-funded (one-time)"],
        ["Network rough-in (Ethernet drop)", "Host", "$1-3k per location"],
        ["Power rough-in (dedicated circuit)", "Host", "$1-3k per location"],
        ["Lighting upgrade (if needed)", "Host", "$0.5-2k per location"],
        ["HRIS integration (one-time)", "Operator + host shared", "$5-25k facility-level"],
        ["Worker training + communication kit", "Operator", "Included in service"],
        ["Accuracy stabilization labor (8 weeks)", "Operator", "Included in service"],
        ["Ongoing service + telemetry + SLA", "Operator (under commission or fixed-fee)", "Recurring; included"],
      ],
    },
    {
      heading: "5. ROI structure",
      items: [
        { number: 1, title: "Velocity uplift", description: "AI coolers + micro-markets typically deliver 25-50% velocity uplift vs equivalent vending sq ft (vendor case studies + Cantaloupe / 365 Retail Markets benchmarks). Capture in commission or per-transaction revenue depending on contract structure." },
        { number: 2, title: "Service-route efficiency", description: "Telemetry + predictive restock reduces wasted visits. Operator route productivity improves 15-30%; some operators pass this back as commission uplift or service-fee reduction." },
        { number: 3, title: "Shrink + mis-vend reduction", description: "AI coolers reduce coil-jam mis-vends to near zero. Reduces refund volume + worker frustration." },
        { number: 4, title: "Energy + scope 2 reduction", description: "R-290 + ENERGY STAR fleet reduces facility scope 2 by 5-15% of vending-attributable kWh." },
        { number: 5, title: "Workforce experience + retention", description: "Modern amenity contributes to break-room satisfaction (top-5 retention factor per Gallup Q12 + MIT Sloan workforce research). 2-5 pp reduction in voluntary separation at 50%+ baseline = $200-600k avoided cost per 500-worker facility." },
      ],
    },
    {
      heading: "6. Standards + regulatory references",
      items: [
        { label: "PCI DSS", value: "Kiosk + AI cooler PCI DSS Level 1 or 2 attestation. Card data tokenized at reader; not stored on operator systems." },
        { label: "ADA Title III + Sections 308 / 309 / 703", value: "Reach range, operating force, contrast verified for cooler door + kiosk + signage. VPAT for digital interface from vendor." },
        { label: "FDA Food Code (state-adopted)", value: "TCS food at 41°F or below; logs retained 12 months. Cold chain monitored via telemetry." },
        { label: "FALCPA + FASTER Act", value: "FDA Top 9 allergen labels on every SKU. AI cooler interface displays allergen tags." },
        { label: "EPA Section 608 + SNAP + AIM Act", value: "R-290 hydrocarbon-certified technicians; charge limit ≤ 150 g per UL 60335-2-89." },
        { label: "ENERGY STAR Refrigerated Beverage Vending Machines V4.0", value: "Refrigerated equipment specification." },
        { label: "NFPA 101 Life Safety Code", value: "Equipment placement preserves egress + AED/eye-wash access." },
        { label: "ANSI/RIA R15.08 mobile robots (where deployed)", value: "Safety standard for autonomous mobile robots in industrial settings." },
      ],
    },
    {
      heading: "7. Service SLA",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — AI cooler / kiosk / cold-chain", "AI cooler offline, kiosk down, payment failure, temperature excursion", "15 minutes (real-time alert)", "4 hours on-site"],
        ["Tier 1 — accuracy drift", "Mis-charge rate > 1%", "Same-day vendor recalibration ticket", "48 hours"],
        ["Tier 2 — stockout / planogram", "Single-SKU stockout, planogram refresh, HRIS feed issue", "12-24 hours", "Next visit or 48 hours"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "AI cooler accuracy + mis-charge rate (target ≥ 98%)" },
        { check: "Uptime by AI cooler + kiosk + traditional vending" },
        { check: "Velocity uplift vs pre-deployment baseline" },
        { check: "HRIS integration health (payroll-deduct + subsidy feed success rate)" },
        { check: "Scope 2 emissions trend" },
        { check: "Refund volume + reason codes" },
        { check: "Worker feedback summary" },
        { check: "Phase-3 readiness (predictive maintenance, robotic restock pilot)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or technical advice. Coordinate with Facilities, EHS, IT (for network + PCI), HR (for HRIS integration), Sustainability, and Procurement before contracting. LetUsVending is equipped to arrange operators with documented AI cooler + automation deployment capability.",
});

console.log("wrote "+"robotics-automation-factory-vending");
