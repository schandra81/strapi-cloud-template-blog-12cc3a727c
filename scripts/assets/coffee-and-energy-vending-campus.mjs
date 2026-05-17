import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "coffee-and-energy-vending-campus",
  assetType: "playbook",
  title: "Campus Caffeine Planogram Playbook",
  subtitle: "Sub-categories, placement weighting, and finals-week pivots",
  intro:
    "Caffeinated beverages are the highest-velocity sub-category in university residence + study placements. This playbook codifies how to structure the planogram across coffee, energy drinks, and tea, how to weight placement to building type, and how to pivot for finals and quarter-system midterms. It maps to FDA caffeine labeling guidance (21 CFR 101.36 supplement-facts where applicable), USDA Smart Snacks where the campus operates K-12 affiliate schools, ADA Section 309.4, and standard FALCPA allergen labeling.",
  sections: [
    {
      heading: "1. Sub-category structure",
      paragraph:
        "Caffeinated beverages split into five sub-categories with distinct velocity curves, margin profiles, and student-segment fit. Planogram allocation should reflect placement type, not a flat split.",
      items: [
        { label: "Ready-to-drink coffee (RTD)", value: "Cold-brew, bottled latte, oat-milk RTD. Highest weekday-morning velocity at academic buildings; appeals to grad students and faculty alongside undergrads." },
        { label: "Energy drinks (mainstream)", value: "Red Bull, Monster, Bang. Highest velocity at residence halls evening + late-night and at study libraries 8 PM – 2 AM." },
        { label: "Energy drinks (functional / nootropic)", value: "Celsius, GHOST, Alani Nu, C4. Growing share in 18-24 segment; healthy-positioning halo on sugar-free SKUs." },
        { label: "Tea + matcha", value: "RTD tea, matcha cans. Lower velocity than coffee/energy but high margin; appeals to wellness segment." },
        { label: "Hot brewed (where bean-to-cup equipment present)", value: "Espresso, drip, hot chocolate. Higher velocity in winter; equipment-dependent; supports planogram cross-sell with snacks." },
      ],
    },
    {
      heading: "2. Placement weighting by building type",
      headers: ["Building type", "Coffee RTD %", "Mainstream energy %", "Functional energy %", "Tea %", "Hot brewed %"],
      rows: [
        ["Residence hall — first-year", "20", "30", "20", "10", "20"],
        ["Residence hall — upperclassmen / grad", "30", "20", "25", "15", "10"],
        ["Library / study lounge", "25", "25", "30", "15", "5"],
        ["Academic building (lecture + lab)", "35", "15", "20", "15", "15"],
        ["Student union / dining-adjacent", "20", "25", "20", "15", "20"],
        ["Athletic facility", "15", "30", "30", "10", "15"],
      ],
    },
    {
      heading: "3. Finals + midterm pivots",
      items: [
        { number: 1, title: "T-minus 21 days to finals", description: "Increase total caffeinated allocation 20% across study libraries and 24/7 study lounges. Pull lowest-velocity tea SKUs to free slots." },
        { number: 2, title: "T-minus 14 days", description: "Restock cadence doubles at library + study placements. Telemetry-driven mid-day refill triggered by sub-30% inventory threshold." },
        { number: 3, title: "T-minus 7 days (finals week)", description: "Add large-format (16-20 oz) energy and RTD coffee SKUs where slot depth allows. Stock hot brew machine to 2x normal supply schedule. Refund flow on stale hot brew documented + communicated." },
        { number: 4, title: "Post-finals (T+3 days)", description: "Revert to baseline planogram. Pull large-format SKUs to avoid shrink during break. Document velocity lift + return to baseline in the QBR." },
      ],
    },
    {
      heading: "4. Labeling + safety",
      items: [
        { check: "Caffeine content disclosed on each SKU (mg per serving). Voluntary but standard practice; aligns with American Beverage Association guidance." },
        { check: "Energy drinks 200+ mg caffeine — visible safety advisory signage (not recommended for individuals under 18, pregnant, or caffeine-sensitive). Per ABA voluntary guidance." },
        { check: "Allergen labeling per FALCPA on each SKU (dairy in lattes, soy in some RTD, tree nuts in some functional energy)." },
        { check: "Sugar-free / low-sugar SKUs flagged separately for diabetic and weight-management audiences." },
        { check: "Healthy-share floor — at university placements where wellness program is in scope, ≥ 30% of caffeinated allocation meets sugar-free or low-sugar criteria." },
      ],
    },
    {
      heading: "5. Route + restock cadence",
      items: [
        { label: "Academic buildings (M-F school session)", value: "Restock Sunday evening or Monday pre-6 AM. Mid-week top-off Wednesday on telemetry threshold." },
        { label: "Residence halls", value: "Restock 2x/week (Sun + Wed) school session. Telemetry triggers same-day refill on > 70% sell-through SKUs." },
        { label: "Library / 24-7 study", value: "Daily top-off during school session; finals window doubles to 2x/day." },
        { label: "Breaks (winter, spring, summer)", value: "Reduce cadence to 1x/week; pull large-format and short-shelf-life SKUs." },
      ],
    },
    {
      heading: "6. Pricing posture",
      items: [
        { check: "RTD coffee priced 0.25-0.50 USD below adjacent retail (campus cafe, convenience store) at residence-hall placements." },
        { check: "Energy drinks priced at adjacent retail parity; price competition rarely drives velocity in this sub-category." },
        { check: "Tea + functional energy priced 0.50 USD above mainstream energy; margin offsets lower velocity." },
        { check: "Hot brew priced 0.75-1.50 USD below adjacent cafe; supports cafe-closed late-night window." },
        { check: "Annual price review aligned to operator price-list date; CPI or 5% escalator cap, whichever lower." },
      ],
    },
    {
      heading: "7. Telemetry-driven planogram refresh (quarterly)",
      items: [
        { number: 1, title: "Pull velocity per SKU per machine", description: "Trailing 90 days, segmented by building type. Identify top-decile and bottom-decile SKUs per placement." },
        { number: 2, title: "Swap bottom-decile for member-requested", description: "In-app survey + on-machine feedback intercepts surface candidate SKUs. Maintain sub-category allocation per section 2." },
        { number: 3, title: "A/B test new SKUs", description: "Add to 30-50% of comparable machines for 60 days; measure velocity vs. control. Roll out or pull based on data." },
        { number: 4, title: "Seasonal rotation", description: "Add iced/RTD weight in spring/summer; hot-brew + dark-roast weight in fall/winter. Document at QBR." },
      ],
    },
    {
      heading: "8. KPI dashboard",
      headers: ["KPI", "Target", "Notes"],
      rows: [
        ["Uptime", "≥ 98% per machine, 90-day rolling", "Standard NAMA-aligned target"],
        ["Stockout incidents", "≤ 4 per machine per quarter", "Telemetry-flagged"],
        ["Velocity per slot", "Top 25% of operator fleet, comparable placements", "Operator benchmark"],
        ["Refund rate", "≤ 2%", "Operator-reported"],
        ["Healthy-share consumption", "Tracks planogram allocation ± 5%", "QBR metric"],
        ["NPS", "+30 at university placements", "Annual in-app survey"],
      ],
    },
  ],
  footer:
    "This playbook is informational. University placements may be subject to additional state, system, or institutional beverage agreements; planogram updates should be coordinated with the campus beverage agreement holder where one is in effect.",
});

console.log("wrote "+"coffee-and-energy-vending-campus");
