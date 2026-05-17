import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-placement-student-flow",
  assetType: "pack",
  title: "Student-Flow Placement Pack",
  subtitle: "Flow analysis framework, K-12 + college placement matrix, Smart Snacks checklist, operator selection",
  intro:
    "Vending machine placement is governed less by aesthetics than by student flow, Smart Snacks scope, ADA Section 308 reach range, and bell-schedule windows. This pack codifies four artifacts — flow analysis framework, K-12 + college placement matrix, Smart Snacks checklist, and operator selection — so a school is equipped to place a machine where it serves students, complies with federal law, and produces the predicted revenue.",
  sections: [
    {
      heading: "1. Flow analysis framework",
      paragraph:
        "Flow analysis maps where students physically go in 5-minute windows. A placement that's 30 feet outside a high-flow corridor loses 60-70% of expected revenue (consistent with NAMA placement-velocity benchmarks).",
      items: [
        { number: 1, title: "Map bell-schedule corridors", description: "Identify the 2-3 corridors with highest 5-minute pedestrian volume during passing periods. Walk each corridor during 3 transition windows (morning, midday, afternoon)." },
        { number: 2, title: "Map dwell zones", description: "Identify dwell zones — cafeteria queue, study commons, athletics waiting area. Dwell zones convert at 2-3x corridor rates for snack vending." },
        { number: 3, title: "Map after-school zones", description: "Identify gym lobby, theater entrance, club spaces. These zones drive 15-25% of revenue in after-school event mode." },
        { number: 4, title: "Score each candidate", description: "Score 1-5 for: 5-min pedestrian volume, dwell time, ADA reach range, electrical access, custodial access, and after-school activity." },
        { number: 5, title: "Build the placement plan", description: "Top-3 scored locations become the placement plan. Map each to equipment type (combo / beverage / fresh-food / AI cooler)." },
      ],
    },
    {
      heading: "2. K-12 placement matrix",
      paragraph:
        "K-12 placement is constrained by Smart Snacks scope, the elementary/middle/high distinction, and the bell-schedule window.",
      headers: ["Location", "Best for grade", "Equipment", "Smart Snacks scope"],
      rows: [
        ["HS hallway near gym", "Grades 9-12", "Combo (snack + beverage)", "Full SS during school day"],
        ["HS cafeteria adjacency", "Grades 9-12", "Fresh-food + beverage cooler", "Full SS during school day"],
        ["MS hallway central corridor", "Grades 6-8", "Beverage cooler (water + ≤ 8oz milk)", "Full SS — beverage limits tighter at MS"],
        ["ES water station", "Grades K-5", "Water-only cooler", "Full SS — water only typically"],
        ["Staff lounge", "Staff only", "AI smart-cooler", "SS not required if locked to staff"],
        ["Gym lobby (after-school)", "Mixed", "Beverage cooler + event-mode planogram", "SS not required after last bell"],
        ["Theater lobby (after-school)", "Mixed", "Combo + event-mode planogram", "SS not required after last bell"],
      ],
    },
    {
      heading: "3. College placement matrix",
      paragraph:
        "College placement isn't governed by Smart Snacks. Flow, dwell, and 24/7 access are the constraints.",
      headers: ["Location", "Equipment", "Audience", "Restock cadence"],
      rows: [
        ["Library / 24-hour study commons", "Combo + beverage cooler + AI smart-cooler", "Students 24/7 + faculty", "Daily during midterm/finals; 3x/week baseline"],
        ["Residence hall lobby", "Combo + beverage cooler + fresh-food", "Residents 24/7", "3-4x/week"],
        ["Athletic facility / gym", "Beverage cooler + protein bars", "Athletes + members", "2-3x/week"],
        ["Engineering / STEM building", "Combo + beverage cooler + caffeine-forward", "Students during long study sessions", "2-3x/week"],
        ["Student union", "Fresh-food + combo + AI smart-cooler", "Mixed traffic peak 10am-4pm", "Daily fresh; 3x/week combo"],
        ["Faculty office building", "AI smart-cooler", "Staff only", "Weekly"],
      ],
    },
    {
      heading: "4. ADA Section 308 placement checklist",
      paragraph:
        "Every placement must meet ADA reach range and operating force per Section 308 of the 2010 Standards.",
      items: [
        { check: "Highest operable part ≤ 48 inches above finished floor (forward reach unobstructed)." },
        { check: "Lowest operable part ≥ 15 inches above finished floor." },
        { check: "If obstructed forward reach, depth ≤ 20 inches and highest point ≤ 48 inches." },
        { check: "Clear floor space 30 inches × 48 inches in front of operable parts." },
        { check: "Card reader, contactless tap zone, mobile-wallet target within reach range." },
        { check: "Operable parts ≤ 5 lbf operating force; no tight grasping or twisting." },
        { check: "Dispense bin opening within reach range; ≤ 5 lbf to open dispense flap." },
      ],
    },
    {
      heading: "5. Smart Snacks scope checklist (K-12 only)",
      paragraph:
        "Use this checklist before commit. Operator should be able to attest in writing to each item.",
      items: [
        { check: "Per-SKU attestation: every SKU passes the USDA Smart Snacks Product Calculator." },
        { check: "Snack standards: ≤ 200 cal, ≤ 35% fat-calories, ≤ 10% saturated fat, ≤ 200 mg sodium." },
        { check: "Entrée standards: ≤ 350 cal, ≤ 35% fat-calories, ≤ 480 mg sodium." },
        { check: "Beverage standards by grade: HS ≤ 20oz calorie-free / ≤ 12oz milk-juice; MS/ES water + ≤ 8oz milk-juice only." },
        { check: "School-day window: midnight to 30 minutes after last bell, per 7 CFR 210.11(b)." },
        { check: "After-school planogram swap timestamped." },
        { check: "Quarterly attestation refresh to wellness committee." },
      ],
    },
    {
      heading: "6. Equipment-to-placement mapping",
      items: [
        { label: "Combo machine — high-flow hallway", value: "AMS, USI/Wittern, Crane, Royal Vendors; 30-45 snack selections + 6-10 beverage rows; cellular telemetry standard." },
        { label: "Beverage cooler — cafeteria adjacency", value: "Royal Vendors GIII/GIV, Dixie-Narco, AMS Sensit; cellular telemetry + temp alarm." },
        { label: "Fresh-food — cafeteria", value: "Reach-in cooler; 35-40°F; HACCP-style temp monitoring; per-SKU shelf-life telemetry." },
        { label: "AI smart-cooler — staff lounge", value: "AWM Smart Shelf, 365 PicoCooler, Selecta, Aramark Avenue C; loss rate target < 2%." },
        { label: "Water station — elementary", value: "Filtered water + bottle-filler combo per ASHRAE/plumbing code; bottle vending where wellness policy permits." },
      ],
    },
    {
      heading: "7. Operator selection scorecard",
      headers: ["Dimension", "What to verify", "Weight"],
      rows: [
        ["K-12 placement experience", "≥ 24 months + 3 references", "25%"],
        ["Smart Snacks compliance", "Attestation history + per-SKU calculator workflow", "20%"],
        ["Telemetry + cashless", "Cellular telemetry + EMV/NFC/mobile-wallet", "15%"],
        ["ADA + accessibility", "Section 308 attestation + VPAT for digital interface", "10%"],
        ["After-school flexibility", "Event-mode planogram + restock cadence flex", "10%"],
        ["Insurance + financial", "GL/auto/WC/cyber + 5-year financial stability", "10%"],
        ["Commission economics", "Competitive rate + transparent reporting", "10%"],
      ],
    },
    {
      heading: "8. Annual placement review",
      items: [
        { check: "Walk each placement during 3 transition windows; confirm flow assumptions still hold." },
        { check: "Pull telemetry: top + bottom velocity by location; flag placements at < 50% of expected revenue." },
        { check: "ADA Section 308 measurements re-verified; logged with photo." },
        { check: "Smart Snacks attestation refreshed for full SKU list." },
        { check: "After-school SKU set reviewed with athletics + activities coordinator." },
        { check: "Wellness committee review of placement plan." },
        { check: "Decision: maintain / relocate / pull each placement." },
      ],
    },
  ],
  footer:
    "This pack is a working placement reference. Confirm state competitive-food rules with the school nutrition director and ADA placement attestation with the operator before commit.",
});

console.log("wrote "+"vending-machine-placement-student-flow");
