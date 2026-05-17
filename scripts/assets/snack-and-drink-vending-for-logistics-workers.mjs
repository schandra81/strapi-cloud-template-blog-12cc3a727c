import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "snack-and-drink-vending-for-logistics-workers",
  assetType: "pack",
  title: "Logistics Vending Program Pack",
  subtitle: "Planogram framework, service model, AI cooler decision tree, and subsidy mechanics",
  intro:
    "Logistics-hub workforces (DC, sort, cross-dock, 3PL) have specific dietary, hydration, and shift-pattern needs that off-the-shelf retail planograms don't serve well. This pack consolidates four working references: a logistics-tuned planogram framework, a service model with SLA tiers, an AI-cooler / micro-market decision tree, and subsidy mechanics aligned to payroll systems.",
  sections: [
    {
      heading: "1. Logistics-tuned planogram framework",
      headers: ["Category", "Share of slots", "Examples", "Rationale"],
      rows: [
        ["Hydration", "25–30%", "Water (still, sparkling), electrolyte (Liquid IV, Gatorade, Pedialyte), low-sugar sports drinks", "Heat illness program alignment (OSHA NEP 2022-04)"],
        ["Real-meal / refrigerated entrée", "15–20%", "Sandwiches, wraps, grain bowls, yogurt parfaits", "Replaces missed meals during 10–12 hour shifts"],
        ["Protein snack", "15–20%", "Jerky, hard-boiled eggs, Greek yogurt, protein bars (Quest, RXBar, Built)", "Satiety + recovery"],
        ["Caffeine / hot beverages", "10–15%", "Coffee (Starbucks, Death Wish, local cold brew), tea, single-serve espresso", "Critical for night shift + early-AM dock starts"],
        ["Sodium-replenishment snacks", "5–10%", "Pretzels, salted nuts, pickle chips", "Heat illness; aligned to OSHA hydration + electrolyte guidance"],
        ["Indulgent / comfort", "10–15%", "Chocolate, chips, ice cream", "Realistic balance; restrictive-only programs underperform"],
        ["Energy drinks (high caffeine)", "5–8%", "Celsius, Monster, Red Bull, C4", "Worker demand; flag caffeine on packaging"],
      ],
    },
    {
      heading: "2. Service model + SLA tiers",
      items: [
        { number: 1, title: "Telemetry baseline", description: "Cellular LTE with sub-15-minute heartbeat. Per-shift velocity reporting. Cold-chain alerts on > 41°F for > 30 minutes (FDA Food Code §3-501.16)." },
        { number: 2, title: "Restock cadence", description: "High-volume (200+ FTE/shift) 3–4x/week. Medium (100–200 FTE) 2–3x/week. Low (< 100 FTE) 1–2x/week. Telemetry-driven mid-window top-off for cold-chain SKUs." },
        { number: 3, title: "Tier 1 — revenue/cold/payment", description: "< 4 hour acknowledge, < 24 hour resolve. After-hours phone line for 24/7 sites." },
        { number: 4, title: "Tier 2 — stockout / planogram", description: "24–48 hour acknowledge, 5–7 day resolve." },
        { number: 5, title: "Tier 3 — cosmetic / signage", description: "5-day acknowledge, 14-day resolve." },
        { number: 6, title: "Uptime target", description: "98% monthly per-machine. Below 95% triggers operator root-cause + corrective action plan." },
        { number: 7, title: "Refund SLA", description: "App / SMS / phone refund; auto-credit within 24 hours for cashless. Refund > 2% triggers planogram + machine quality review." },
      ],
    },
    {
      heading: "3. AI cooler / micro-market decision tree",
      paragraph:
        "AI-cooler / open-shelf micro-markets (AWM Smart Shelf, 365 Retail Markets, Nayax VPOS Touch, Cantaloupe Yoke) raise basket size 30–60% and accommodate fresh real-meal SKUs that traditional cabinets can't. Below: when to deploy.",
      headers: ["If site has", "Recommended class"],
      rows: [
        ["< 100 FTE/shift, predominantly < 4 hour dwell zones", "Traditional cabinets only; fresh case if break room dwell > 10 min"],
        ["100–250 FTE/shift, dedicated break room with > 10 min dwell", "Hybrid — micro-market in break room + 2–3 traditional cabinets floor-adjacent"],
        ["250+ FTE/shift, multi-shift 24/7 ops", "Full micro-market + traditional fallback for overnight + outdoor-rated for yard"],
        ["Substantial cold-chain (real-meal) demand", "Smart cooler with computer-vision or RFID scan-out; 30-day vision-image retention max"],
        ["Workforce mostly < 30 min dwell, no break room", "Traditional cabinets only; skip the micro-market"],
      ],
    },
    {
      heading: "4. Subsidy mechanics",
      paragraph:
        "Employer-funded subsidy is the single biggest driver of program uptake. Below: four mechanics commonly used, with payroll-system integration notes.",
      items: [
        { label: "$/shift credit", value: "Typical $3–$8/shift loaded against badge ID. Activated on shift clock-in via Workday/Kronos/UKG integration; expires at end-of-shift." },
        { label: "$/pay-period credit", value: "Typical $20–$40 per bi-weekly period loaded against badge. Unused balance expires at end-of-period or rolls over per policy." },
        { label: "Category subsidy", value: "Subsidy applied only to selected categories (hydration, real meals, fresh fruit) — indulgent SKUs at full retail. Drives wellness without paying for soda." },
        { label: "Discount-at-PoS", value: "Operator applies fixed % discount (e.g., 15–25%) on all SKUs; employer reimburses operator monthly. Simplest mechanic; least targeting." },
        { label: "Payroll-deduct integration", value: "Bi-weekly SFTP file or API push to Workday / Kronos / UKG. Reconciliation report monthly. Operator carries BAA-equivalent data terms for employee identifier." },
      ],
    },
    {
      heading: "5. Heat-illness program tie-in (OSHA NEP-CPL 03-00-024)",
      paragraph:
        "Heat illness is a 2022 OSHA National Emphasis Program priority. Vending program can align as a documented water-and-rest support.",
      items: [
        { check: "Free water available at all times during heat index > 80°F (OSHA recommendation)" },
        { check: "Electrolyte SKUs available in placement-zone cabinets (Liquid IV, Pedialyte, sugar-light Gatorade)" },
        { check: "Sodium-replenishment snacks available (pretzels, salted nuts, pickle chips)" },
        { check: "Cooling-zone placements documented; placements within 200 ft of indoor work areas where heat index > 85°F regularly" },
        { check: "Worker training material — recognize heat illness signs — posted in break rooms" },
        { check: "Quarterly review of hydration SKU velocity correlates with shift heat index data" },
      ],
    },
    {
      heading: "6. Indicative budget",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Hardware (full-service: operator-funded)", "$0", "Operator capital; recovered through retail + commission or service fee"],
        ["Below-threshold service fee", "$80 – $260/machine/month", "Applies if site doesn't hit operator's revenue threshold (typical $200–300/week/machine)"],
        ["Subsidy budget per FTE/year", "$120 – $720", "$5/shift × ~240 shifts × ~50% participation = ~$600/FTE/year typical at upper end"],
        ["Telemetry / data dashboard", "$0", "Bundled in full-service"],
        ["Quarterly review cadence", "$300 – $700/qtr", "Account manager + planogram refresh"],
        ["Total program (200-FTE site)", "$28,000 – $120,000/year", "Range driven by subsidy + service fee"],
      ],
    },
    {
      heading: "7. Pilot rollout — 90-day plan",
      items: [
        { number: 1, title: "Days 0–30 — site survey + planogram design", description: "Site survey, pedometer mapping, worker pulse survey, planogram drafted with EHS + wellness committee input." },
        { number: 2, title: "Days 30–60 — install + onboarding", description: "Equipment install on dedicated 20A circuits; signage + onboarding comms ≥ 2 weeks before go-live; payroll-deduct integration tested." },
        { number: 3, title: "Days 60–90 — first telemetry cycle", description: "Per-shift velocity baseline; first planogram refresh based on real data; first refund-rate review; first uptime report." },
        { number: 4, title: "Day 90 — QBR + go/no-go", description: "Quarterly business review with operator. Decide expansion, contraction, or hold. Document lessons learned." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate logistics-vending programs through operators that can attest to telemetry depth, SLA tiers, fresh / refrigerated capability, payroll-deduct integration, and heat-illness-aligned planograms. Capability documentation provided on request during scoping.",
    },
  ],
  footer:
    "Working reference for logistics operations, HR, EHS, and wellness teams. Specific subsidy levels and planogram weights are site-specific and should be co-designed with operator + wellness committee.",
});

console.log("wrote "+"snack-and-drink-vending-for-logistics-workers");
