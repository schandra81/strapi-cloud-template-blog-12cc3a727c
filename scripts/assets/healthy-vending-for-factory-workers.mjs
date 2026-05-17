import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-vending-for-factory-workers",
  assetType: "playbook",
  title: "Factory-Floor Healthy Vending Planogram Playbook",
  subtitle: "Protein-forward SKU mix + portable meals + subsidy structure + EHS coordination",
  intro:
    "A factory-floor healthy-vending planogram is a workforce-nutrition decision, not a category-merchandising decision. This playbook codifies the protein-forward SKU framework, portable-meal options, subsidy structure, and EHS coordination an operator should be equipped to deliver — anchored to Partnership for a Healthier America standards and FDA labeling.",
  sections: [
    {
      heading: "1. Workforce nutrition baseline",
      paragraph:
        "Frontline manufacturing workers face documented nutritional pressure: shift-disrupted meal patterns, limited break time, high physical demand, and food-environment options often skewed to indulgent SKUs. CDC + NIOSH research highlights shift-worker metabolic risk.",
      items: [
        { label: "Energy demand", value: "Active manufacturing labor: 250-450 kcal/hr (USDA/NIOSH activity-energy data). An 8-hour shift demands 2,000-3,600 kcal for the work portion alone; with rest metabolism, total daily need 2,800-4,500 kcal." },
        { label: "Macronutrient priority", value: "Protein 1.2-2.0 g/kg body weight (Academy of Nutrition and Dietetics for active workers); carbohydrates for sustained-energy work; fluids 0.5-1.0 L/hr in hot environments (ACOEM heat-stress guidance)." },
        { label: "Shift-disrupted patterns", value: "Overnight shift workers report 30-60% reduced fresh-meal access at home. Vending becomes the primary mid-shift nutrition channel." },
        { label: "Food-insecurity overlay", value: "BLS + USDA data suggests 10-15% of frontline manufacturing workers experience household food insecurity. Subsidy programs partially offset this." },
      ],
    },
    {
      heading: "2. Protein-forward SKU framework",
      paragraph:
        "Anchor the planogram around protein-forward SKUs that fit a 15-30 min break. Each SKU labeled with FDA Nutrition Facts and FALCPA allergen disclosure.",
      headers: ["Category", "Example SKUs", "Protein g/serving", "Planogram facings"],
      rows: [
        ["Jerky + meat snacks", "Beef jerky, turkey jerky, biltong", "9-14 g", "8-12 facings"],
        ["Nuts + seed mixes", "Almonds, mixed nuts, trail mix, sunflower seeds", "6-8 g", "8-10 facings"],
        ["Protein bars", "Quest, RXBAR, ONE, Pure Protein, Builders", "15-22 g", "10-14 facings"],
        ["Greek yogurt + cottage cheese", "Chobani, Oikos, Fage, Good Culture", "12-20 g", "6-8 facings (refrigerated)"],
        ["Hard-boiled eggs + cheese", "Pre-packaged eggs, string cheese, Babybel", "6-12 g", "6-8 facings (refrigerated)"],
        ["Tuna + chicken pouches", "StarKist, Bumble Bee, Wild Planet", "13-22 g", "4-6 facings"],
      ],
    },
    {
      heading: "3. Portable-meal framework",
      paragraph:
        "Mid-shift meals must fit a 30-min break window — including warm-up, eat, and return to floor. Three meal archetypes work for vending or micro-market.",
      items: [
        { number: 1, title: "Grab-and-go assembled meal", description: "Salads with protein, wraps, sandwiches, grain bowls. 350-600 kcal, 20-35 g protein, refrigerated at 41°F or below (FDA Food Code 4-203). Dated SKU pulled at expiration. Operator rotates daily or every other day." },
        { number: 2, title: "Heat-and-eat entrée", description: "Frozen or shelf-stable entrées (e.g., Amy's, Healthy Choice, Good & Gather) microwaved in the break room. 350-500 kcal, 15-25 g protein. Operator stocks; break room provides microwave." },
        { number: 3, title: "Build-it bowl from pantry", description: "Where a micro-market is deployed: yogurt + granola + fresh fruit + protein topper, or jerky + nuts + cheese + crackers. Worker assembles on-floor. 400-700 kcal, 25-40 g protein." },
      ],
    },
    {
      heading: "4. Hydration + electrolyte framework",
      items: [
        { label: "Hot environments — ACOEM + OSHA heat-illness guidance", value: "Provide cool (50-60°F) drinking water; encourage 0.5-1.0 L/hr during heat-stress conditions. Vending water + electrolyte facings 35-40% of beverage in foundry, steel, food production, summer-season warehouses." },
        { label: "Standard environments", value: "Water + electrolyte 20-25% of beverage; low-calorie sports drinks (Gatorade Zero, Powerade Zero, BodyArmor LYTE) for taste variety without added sugar." },
        { label: "Cold environments", value: "Hot beverages weighted (coffee RTD, hot tea, hot chocolate); 15-20% water + electrolyte." },
      ],
    },
    {
      heading: "5. Subsidy structure",
      paragraph:
        "Healthy-SKU pricing is a documented barrier. A protein bar at $2.75 + a bottle of water at $2.00 prices out workers near end-of-pay-cycle. Subsidies remove the friction.",
      items: [
        { number: 1, title: "Flat-discount subsidy", description: "Healthy-tagged SKUs priced at 25-40% below retail across the planogram. Operator absorbs at lower commission; host absorbs the gap via fixed-fee adjustment." },
        { number: 2, title: "Monthly stipend", description: "Each worker receives a $15-25/month healthy-food stipend redeemable at any touchpoint, with eligible SKUs tagged. Worker uses or loses by month-end. Funded by host via HRIS payroll integration." },
        { number: 3, title: "Wellness program tie-in", description: "Healthy-SKU purchases credited toward wellness program points (Virgin Pulse, Limeade, WellRight). Worker accrues points; redeemable for benefits enrollment incentives, gift cards, or PTO." },
        { number: 4, title: "Match-and-mirror subsidy", description: "Host matches every $1 worker spends on healthy SKUs (e.g., up to $20/month). Doubles purchasing power on the healthy tier." },
      ],
    },
    {
      heading: "6. Standards + labeling references",
      items: [
        { label: "Partnership for a Healthier America Hospital + Workplace Healthy Food + Beverage Standards", value: "Calorie, added-sugar, sodium thresholds per category. Many large employers adopt PHA standards for vending planograms." },
        { label: "American Heart Association Healthy Workplace Food + Beverage Toolkit (2017+)", value: "Beverage: ≥ 50% water, unsweetened tea/coffee, ≤ 40-cal options. Snack: thresholds for added sugar, saturated fat, sodium." },
        { label: "FDA Nutrition Facts labeling", value: "Each SKU label readable from clear floor space (ADA Section 703 contrast)." },
        { label: "FALCPA + FASTER Act", value: "FDA Top 9 allergen labels on every SKU; allergen summary on machine face." },
        { label: "Bill Emerson Good Samaritan Food Donation Act", value: "Federal liability protection for donation of fit, dated-out food. Operator should be equipped to donate dated SKUs to local food banks rather than waste." },
      ],
    },
    {
      heading: "7. EHS coordination",
      items: [
        { check: "Operator coordinates with EHS for hi-vis PPE on the floor during restock visits" },
        { check: "Restock windows aligned with shift change (30-60 min before shift start) to maximize availability at peak demand" },
        { check: "Cold-chain integrity verified at each restock visit; temperature log retained 12 months per FDA Food Code" },
        { check: "Equipment placement preserves NFPA 101 egress; does not obstruct AED, eye wash, fire pull, or fire-rated assemblies" },
        { check: "Allergen-control attestation: operator restock handlers follow FDA cGMP allergen-handling practices" },
        { check: "OSHA recordable-event reporting: 24-hour notification to host EHS for any incident involving a vending machine" },
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Healthy-SKU share of facings (target ≥ 50% PHA-aligned)" },
        { check: "Healthy-SKU velocity vs total velocity" },
        { check: "Subsidy redemption rate" },
        { check: "Per-shift planogram performance" },
        { check: "Refund volume + reason codes" },
        { check: "Worker feedback summary (multi-language verbatim review)" },
        { check: "PHA / AHA standards adherence audit" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not nutrition or medical advice. Coordinate with HR, wellness program, EHS, and a Registered Dietitian Nutritionist for facility-specific planogram approval. LetUsVending is equipped to arrange operators with documented PHA/AHA-aligned planogram capability.",
});

console.log("wrote "+"healthy-vending-for-factory-workers");
