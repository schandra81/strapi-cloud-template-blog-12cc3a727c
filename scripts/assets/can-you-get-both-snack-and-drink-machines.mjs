import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-you-get-both-snack-and-drink-machines",
  assetType: "playbook",
  title: "Snack-and-Drink Vending Configuration Playbook",
  subtitle: "Combo, paired, and multi-machine bank scoping",
  intro:
    "The decision is not 'can we have both' — every operator partner equipped through the LetUsVending network can. The decision is what configuration: a single combo machine, a snack-and-drink pair, or a multi-machine bank with fresh food. This playbook codifies the sizing, electrical, and assortment logic referenced against NAMA operator-survey velocity norms, NEC 210.8/210.52 receptacle rules, FDA Food Code 2022 §3-501.16 cold-chain, ADA 308 reach range, and FALCPA + FASTER Act labeling.",
  sections: [
    {
      heading: "1. Configuration decision matrix",
      headers: ["Configuration", "Selections", "Headcount band", "Footprint (LxD)", "Power (120V circuits)"],
      rows: [
        ["Combo machine (snack + drink in one cabinet)", "24-36 combined", "10-50 employees / shift", "39 in × 36 in", "1 × 15-20A"],
        ["Snack + drink pair (two cabinets side-by-side)", "40 snack + 9-12 drink", "50-150 employees / shift", "78 in × 36 in", "2 × 20A"],
        ["Snack + drink + cold-food (three-machine bank)", "40 + 9 + 24 cold-food", "150-300 employees / shift", "117-156 in × 36 in", "3-4 × 20A"],
        ["Multi-machine bank + coffee", "40 + 12 + 24 + coffee + water", "300-600 employees / shift", "200+ in run, dedicated alcove", "4-6 × 20A"],
        ["Full micro-market (replaces machine-only)", "200-1,000+ SKUs", "150+ employees / shift", "150-500 sq ft room", "Dedicated panel"],
      ],
    },
    {
      heading: "2. Combo machine — when it's the right call",
      items: [
        { label: "Strengths", value: "Single footprint, single power circuit, single MDB / telemetry SIM, single delivery + service visit. Lower install cost. Cleanest fit for small offices and remote satellite locations." },
        { label: "Limits", value: "Snack column count is 60-70% of a dedicated snack machine; drink count is 6-12. SKU breadth + healthy-share + dietary coverage all constrained." },
        { label: "Best fit", value: "10-50 employees per shift, single-purpose breakroom, single-shift schedule, no cold-food need." },
        { label: "Models", value: "Crane National 187 Combo, AMS Sensit Combo, USI 3014A, Federal Machine FSI / FMR. New $5,500-$9,500; refurb $3,500-$6,500." },
      ],
    },
    {
      heading: "3. Snack + drink pair — the standard workplace configuration",
      paragraph:
        "Two cabinets, two telemetry SIMs, two card readers — but a full 40 snack selections and 9-12 drink selections. This is the configuration ~60% of mid-market workplaces land on.",
      items: [
        { label: "Snack cabinet", value: "Crane National 187 / AMS 39 / USI 3145 — 40 selections. ~1.5-2 cu ft per selection volume." },
        { label: "Drink cabinet", value: "Dixie Narco 5800 / Royal Vendors RVCC / Vendo V21 — 9-12 selections. 200-380 can capacity." },
        { label: "Coordination", value: "Telemetry on both machines on the same dashboard. Single restock run; planogram coordinated so duplicate beverages don't appear in the snack cabinet's beverage slots." },
        { label: "Refund flow", value: "Member can refund either machine through the same app / SMS / on-cabinet button." },
      ],
    },
    {
      heading: "4. Multi-machine bank + cold food",
      items: [
        { number: 1, title: "When to step up", description: "150+ employees per shift, or any shift that doesn't have access to other food (24/7 ops, healthcare, industrial). The cold-food machine is the multiplier on member NPS." },
        { number: 2, title: "Cold-food specifics", description: "Crane Merchant / AMS Sensit Cold Food / Avanti Cold Food. ≤41°F continuous per FDA Food Code 2022 §3-501.16. 7-day discard per §3-501.17. Cellular telemetry alerts on temp excursion." },
        { number: 3, title: "Fresh-food sourcing", description: "Operator-prepared (commissary kitchen) or branded supply (Hand-Pasta, Smartmeals, FarmerFocus, Tovala-style refrigerated). Daily or 2x/week delivery." },
        { number: 4, title: "Coffee tie-in", description: "Most banks of this scale add a single-cup bean-to-cup or commercial pod station adjacent — see the coffee-vending playbook." },
      ],
    },
    {
      heading: "5. Site readiness checklist",
      items: [
        { check: "NEC 210.8 GFCI 20A 120V receptacle per machine, within 6 feet of each cabinet" },
        { check: "Single, level floor surface — combo and drink machines weigh 700-1,000 lb empty" },
        { check: "ADA 308 reach range — selection buttons + card reader 15-48 in above finished floor; 30 in × 48 in clear floor space" },
        { check: "Cellular signal verified for each machine's telemetry SIM (or in-building cellular boost)" },
        { check: "Door clearance + delivery path — 36 in min through every doorway + corner along the install route" },
        { check: "Room temperature 60-85°F ambient for refrigerated cabinets (per OEM spec)" },
        { check: "Trash + recycling bin within 10-15 feet" },
        { check: "Water + drain access if a coffee or water-dispense unit joins the bank" },
      ],
    },
    {
      heading: "6. Assortment + healthy-share share",
      headers: ["Configuration", "Snack healthy-share", "Drink healthy-share (water + unsweet)", "Cold-food healthy-share"],
      rows: [
        ["Combo", "25-30% facings", "≥30% slots = water + unsweet", "n/a"],
        ["Snack + drink pair", "30-40%", "≥40%", "n/a"],
        ["Multi-machine + cold food", "35-45%", "≥40%", "≥60% of cold-food SKUs meet better-for-you definition"],
        ["Full micro-market", "35-50%", "≥40%", "≥60%"],
      ],
    },
    {
      heading: "7. Operating SLA across the bank",
      items: [
        { check: "Tier 1 (offline / payment down / temp excursion) <24 hr ack + resolve" },
        { check: "Tier 2 (single SKU stockout) 24-48 hr ack, 5-7 day resolve" },
        { check: "Telemetry-driven restock cadence: 1-3x/week base, daily during cold-food onboarding" },
        { check: "Quarterly business review with the host site: uptime, healthy-share velocity, refund rate, NPS" },
        { check: "FALCPA + FASTER Act allergen labels on every packaged SKU + cold-food entrée" },
        { check: "Calorie disclosure on machine front per 21 CFR 101.8 (vending machine calorie rule) for operators with 20+ machines" },
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an employer or property with operator partners equipped to deliver any of the five configurations above — combo, snack+drink pair, multi-machine bank with cold food, full coffee tie-in, or a full micro-market. Configuration is selected per site after a discovery call covering headcount, shift mix, power infrastructure, and dietary-coverage requirements.",
    },
  ],
  footer:
    "Informational reference. Confirm electrical + ADA + food-code requirements with a licensed AHJ inspector for your jurisdiction. Citations current at publication; verify the latest version before contracting.",
});

console.log("wrote "+"can-you-get-both-snack-and-drink-machines");
