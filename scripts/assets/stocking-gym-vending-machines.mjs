import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "stocking-gym-vending-machines",
  assetType: "worksheet",
  title: "Gym Vending Planogram Worksheet",
  subtitle: "Category share by gym format, top SKUs, and rotation cadence",
  intro:
    "Use this worksheet to design and refresh the planogram for a gym vending machine. References to FALCPA allergen labeling, FDA Food Code 3-501.16 for cold-chain (≤ 40°F), FDA menu labeling (21 CFR 101.11), and ENERGY STAR for refrigerated equipment. Pricing ranges are starting points; calibrate to local market after 60-90 days of telemetry.",
  sections: [
    {
      heading: "1. Category share — by gym format",
      paragraph:
        "Gym member purchase patterns vary by format. Boutique HIIT skews beverage + recovery; pilates/yoga skews sparkling + plant-based; 24-hr skews convenience + late-night snack. Use the table below as a starting frame.",
      headers: ["Category", "Boutique HIIT", "Pilates / yoga", "Mid-box functional", "24-hr", "Big-box"],
      rows: [
        ["Water + sparkling", "20%", "30%", "18%", "20%", "18%"],
        ["Sports / electrolyte", "20%", "10%", "22%", "15%", "16%"],
        ["Protein RTD + dairy", "15%", "8%", "18%", "10%", "12%"],
        ["Bars (protein / energy)", "15%", "20%", "15%", "10%", "12%"],
        ["Jerky + savory protein", "8%", "4%", "12%", "8%", "8%"],
        ["Better-for-you snack", "10%", "20%", "8%", "10%", "12%"],
        ["Conventional snack / candy", "5%", "3%", "3%", "15%", "12%"],
        ["Soda / energy drink", "7%", "5%", "4%", "12%", "10%"],
      ],
    },
    {
      heading: "2. Top SKU candidates — sports-nutrition focused",
      paragraph:
        "Recommend ≥ 12 sports-nutrition SKUs in active rotation. The list below is a starting frame from category-leading brands; substitute by region and operator availability.",
      items: [
        { label: "Electrolyte / hydration", value: "Gatorade (G1/G2/Zero), BodyArmor, LMNT, Liquid IV, Nuun, Powerade, Pedialyte, Roar." },
        { label: "Protein RTD", value: "Premier Protein, Fairlife Core Power, OWYN, Orgain, Muscle Milk, Quest." },
        { label: "Sports / recovery bars", value: "Quest, RX Bar, Built Bar, Clif Builders, Pure Protein, ONE, GoMacro, Kind Protein." },
        { label: "Jerky + savory protein", value: "Chomps, Country Archer, Krave, Lorissa's, Stryve biltong, Wilde chicken chips." },
        { label: "BFY snack", value: "Skinny Pop, Boom Chicka Pop, Trail Mix Crew, Bare Snacks, Hippeas, Bada Bean Bada Boom." },
        { label: "Water + sparkling", value: "Dasani, Aquafina, Smartwater, Fiji, LaCroix, Bubly, Spindrift, Topo Chico." },
      ],
    },
    {
      heading: "3. Pricing framework",
      headers: ["Category", "Price range", "Pricing strategy"],
      rows: [
        ["Bottled water", "$1.50-$2.50", "Low to encourage hydration; loss leader in some placements"],
        ["Sparkling water", "$2.25-$3.50", "Premium positioning"],
        ["Electrolyte (8-20 oz)", "$2.75-$4.50", "Standard"],
        ["Sports drink (Gatorade / Powerade)", "$2.25-$3.50", "Standard; volume driver"],
        ["Protein RTD", "$3.50-$5.50", "Premium positioning; high margin"],
        ["Protein / sports bar", "$2.50-$4.50", "Standard"],
        ["Jerky / savory protein", "$3.50-$6.00", "Premium"],
        ["BFY snack", "$1.75-$3.50", "Mid"],
        ["Conventional snack", "$1.50-$2.75", "Volume driver"],
        ["Soda / energy", "$1.75-$3.50", "Standard"],
      ],
    },
    {
      heading: "4. Rotation cadence",
      items: [
        { number: 1, title: "Daily — restock + clean", description: "High-volume placements (mid-box / big-box) get 5-7 visits/wk. Lower-volume boutique gets 2-3 visits/wk. Telemetry triggers top-off where SKU velocity exceeds restock cycle." },
        { number: 2, title: "Weekly — planogram pulse", description: "Operator reviews top-3 / bottom-3 SKUs and notes anything trending. No SKU change at this cadence — observation only." },
        { number: 3, title: "Monthly — minor planogram refresh", description: "Operator drops bottom-3 SKUs (velocity < 0.3 units/day) and substitutes 3 new candidates. Pricing adjustments only if refund rate > 5% on a specific SKU." },
        { number: 4, title: "Quarterly — major planogram refresh", description: "Per QBR: top-20 / bottom-20 review; category share adjustment; seasonal SKU rotation (winter: hot drinks if equipped; summer: hydration emphasis)." },
        { number: 5, title: "Annual — full refresh", description: "Operator presents annual planogram review at year-end QBR; rebases category share to telemetry; identifies new sports-nutrition launches to consider for next year." },
      ],
    },
    {
      heading: "5. Compliance + cold-chain checklist",
      items: [
        { check: "FALCPA allergen labeling visible on each SKU + allergen summary signage at machine face" },
        { check: "FDA menu labeling (calorie display) per 21 CFR 101.11 if operator has ≥ 20 placements" },
        { check: "Refrigerated unit holds ≤ 40°F per FDA Food Code 3-501.16; internal-temp telemetry log retained ≥ 12 months" },
        { check: "Expired-product check at every restock; SKU pull procedure documented" },
        { check: "Allergen cross-contact: jerky / nut-containing SKUs labeled per FALCPA" },
        { check: "Energy: ENERGY STAR refrigerated unit where commercially available; LED interior lighting" },
        { check: "ADA Section 308: operable parts 15-48 in AFF; ≤ 5 lbf operating force" },
      ],
    },
    {
      heading: "6. Planogram worksheet template",
      headers: ["Position", "SKU", "Category", "Brand / variant", "Price", "Velocity (units/day)", "Refund rate"],
      rows: [
        ["A1", "____", "____", "____", "____", "____", "____"],
        ["A2", "____", "____", "____", "____", "____", "____"],
        ["A3", "____", "____", "____", "____", "____", "____"],
        ["A4", "____", "____", "____", "____", "____", "____"],
        ["B1", "____", "____", "____", "____", "____", "____"],
        ["B2", "____", "____", "____", "____", "____", "____"],
        ["B3", "____", "____", "____", "____", "____", "____"],
        ["B4", "____", "____", "____", "____", "____", "____"],
        ["(continue for each row)", "", "", "", "", "", ""],
      ],
    },
  ],
  footer:
    "This worksheet is informational and not legal advice. Gym owners should verify FALCPA, FDA Food Code, and FDA menu labeling adherence in writing with the operator. LetUsVending can connect gym owners with operators equipped to serve sports-nutrition-focused placements.",
});

console.log("wrote "+"stocking-gym-vending-machines");
