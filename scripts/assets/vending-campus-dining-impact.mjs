import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-campus-dining-impact",
  assetType: "playbook",
  title: "Campus Dining-Vending Alignment Playbook",
  subtitle: "Placement, pricing, and meal-plan integration",
  intro:
    "Campus vending and campus dining are often run by different teams with different KPIs, sometimes by different operators entirely. Misalignment shows up as parallel-pricing that undercuts dining wellness goals, vending placement that cannibalizes dining traffic, or meal-plan members paying twice. This playbook codifies how to align placement, pricing, and meal-plan integration so vending complements dining instead of competing with it. It maps to standard campus dining agreements, USDA Smart Snacks where the campus operates K-12 affiliate schools, FALCPA allergen labeling, and ADA Section 309.4.",
  sections: [
    {
      heading: "1. Map the existing dining footprint",
      paragraph:
        "Before placing or repricing a vending machine, document where dining operates, what hours, and what meal-plan rails it accepts. Vending should fill the gaps in time, location, and rail coverage — not duplicate them.",
      items: [
        { label: "Time coverage", value: "Dining hall hours per day-of-week, retail-dining-outlet hours, late-night operation window, weekend coverage." },
        { label: "Location coverage", value: "Dining-hall floor map, retail outlets (cafes, c-stores, food courts), residential vs. academic geography." },
        { label: "Meal-plan rails", value: "Board swipes, declining-balance / flex dollars, off-campus / venue-anywhere card, departmental charge." },
        { label: "Wellness policy", value: "Campus wellness or beverage agreement targets (sugar-free %, calorie thresholds, sodium thresholds)." },
      ],
    },
    {
      heading: "2. Placement decisions — fill the gaps",
      headers: ["Gap type", "Where vending wins", "Where vending should not place"],
      rows: [
        ["Late-night (10 PM – 6 AM)", "Library, residence-hall floors, 24/7 study lounges", "Adjacent to dining hall during dinner hours"],
        ["Weekend (especially Sunday)", "Athletic + residence-hall + academic buildings open weekends", "Dining-hall lobby when dining open"],
        ["Hyper-quick (under 2 minutes)", "Between-class corridors, library quiet zones", "Inside the food court (parallel-pricing risk)"],
        ["Specialty (allergen, dietary, athletic)", "Athletic facility, residence-hall floors with specific dietary demographics", "Replacing dining's allergen-safe offerings"],
        ["Geographic gap", "Remote academic buildings 10+ minute walk from nearest dining", "Within 50 feet of an active dining outlet"],
      ],
    },
    {
      heading: "3. Pricing alignment",
      items: [
        { check: "Vending price points reviewed against retail-dining (campus c-store, kiosk) prices semesterly. Vending should not undercut retail-dining on equivalent SKUs by more than 15-20%." },
        { check: "Healthy SKU pricing — vending healthy SKUs priced at or below adjacent retail-dining healthy options; vending non-healthy not priced lower than vending healthy (drives wellness floor)." },
        { check: "Bottled water and basic snacks — priced at retail-dining parity; these are 'utility' goods where parallel pricing is acceptable." },
        { check: "Energy drinks + premium beverages — priced at retail-dining parity or slightly above; vending margin supports route cost in remote placements." },
        { check: "Annual price review aligned to dining services + operator price-list dates; CPI or 5% escalator cap, whichever lower." },
      ],
    },
    {
      heading: "4. Meal-plan integration",
      items: [
        { number: 1, title: "Declining-balance / flex dollars at vending", description: "Members pay vending transactions with the same campus card balance used at retail-dining. Reduces friction; increases vending velocity 20-40% per published case studies. Operator integrates with campus card system (Blackboard, CBORD, Atrium, Heartland)." },
        { number: 2, title: "Healthy-meal swap credit (optional)", description: "Member redeems one board swipe at vending for a curated meal-replacement bundle (sandwich + beverage + side). Coordinated with dining; bundle priced at dining-equivalent meal cost." },
        { number: 3, title: "Wellness-program subsidy", description: "Members enrolled in campus wellness program receive subsidized pricing on healthy-flagged vending SKUs, paid by dining or wellness budget. Tier-based pricing in operator app." },
        { number: 4, title: "Off-hours coverage", description: "Late-night meal-plan members access vending at residence halls and libraries during dining-closed hours. Standard declining-balance rail covers." },
        { number: 5, title: "Settlement + accounting", description: "Operator settles meal-plan transactions to dining services weekly. SOC 2 Type II from operator for the settlement environment. Reconciliation discrepancies resolved within 5 business days." },
      ],
    },
    {
      heading: "5. Wellness-program alignment",
      items: [
        { check: "Healthy-share floor — at minimum 30% of SKUs meet NANA thresholds (≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from fat). At wellness-aligned placements (athletic, health-science school) 50%+." },
        { check: "Beverage policy alignment — if campus has a sugar-free-share floor in its beverage agreement, vending planogram matches it." },
        { check: "Allergen labeling per FALCPA on every SKU; allergen summary signage; member allergen list (opt-in) honored at app + on-machine." },
        { check: "Dietary-preference SKUs (vegetarian, vegan, halal, kosher, gluten-free) identified where placement demographics warrant; restock cadence dedicated." },
        { check: "Wellness comms — vending healthy options promoted alongside dining wellness messaging; not as separate campaign." },
      ],
    },
    {
      heading: "6. Operational coordination cadence",
      items: [
        { label: "Joint kickoff", value: "Dining + vending + facilities meet pre-academic-year. Calendar, placement map, pricing review, wellness floor agreed." },
        { label: "Monthly check-in", value: "Velocity (by placement, by SKU class), stockout, refund, meal-plan rail usage. Issues resolved before they compound." },
        { label: "Quarterly business review", value: "Joint dining + vending QBR. Planogram refresh, pricing review, placement adjustments, wellness floor consumption." },
        { label: "Annual program review", value: "Renew or amend pricing, placement, and meal-plan rails for the next academic year. Coordinated with budget cycle." },
      ],
    },
    {
      heading: "7. KPIs — alignment-specific",
      headers: ["KPI", "Target", "Notes"],
      rows: [
        ["Meal-plan rail share at vending", "30-50%", "Member adoption of declining-balance at vending"],
        ["Wellness floor consumption", "Tracks planogram allocation ± 5%", "Healthy-share floor honored in practice"],
        ["Refund rate", "≤ 2%", "Operator-reported"],
        ["Member NPS — combined dining + vending", "+30 minimum", "Joint annual survey"],
        ["Late-night / weekend coverage uptime", "≥ 98%", "Placements covering dining-closed hours"],
        ["Reconciliation discrepancies", "< 0.5% of transaction count", "Meal-plan settlement cleanliness"],
      ],
    },
    {
      heading: "8. Pre-signing red flags (operator + dining contracts)",
      items: [
        { check: "Operator declines to integrate with campus card / declining-balance system." },
        { check: "Pricing 'subject to operator price list with no cap' — wellness floor at risk." },
        { check: "Wellness floor not in writing — depends on operator goodwill quarter-to-quarter." },
        { check: "Operator places machine within 50 feet of an active dining outlet without dining-services sign-off — parallel-pricing risk." },
        { check: "No joint QBR cadence — programs drift apart within 2 quarters." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Campus beverage exclusives and dining-services contracts may constrain planogram or pricing changes; coordinate with the agreement holder where one is in effect.",
});

console.log("wrote "+"vending-campus-dining-impact");
