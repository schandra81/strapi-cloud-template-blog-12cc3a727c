import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-coffee-blends-office",
  assetType: "template",
  title: "Seasonal Coffee Rotation — Office Program Template",
  subtitle: "Annual calendar, operator capability checks, communications scope, and tasting program",
  intro:
    "Use this template to plan a four-season rotation of single-origin and seasonal blend coffees for an office program. Each section is capability-framed and references SCA (Specialty Coffee Association) cupping standards. Confirm operator capabilities in writing before contract execution.",
  sections: [
    {
      heading: "1. Annual rotation calendar",
      paragraph:
        "Seasonal rotations align with coffee-origin harvest cycles. The calendar below blends Northern Hemisphere and Southern Hemisphere harvests to keep fresh-crop on the menu year-round.",
      headers: ["Window", "Origin emphasis", "Profile direction", "Featured SKU count"],
      rows: [
        ["Q1 (Jan-Mar): late-Central America", "Guatemala, Honduras, Nicaragua, Mexico", "Chocolate, nutty, balanced; medium roast", "1 single-origin + 1 winter blend"],
        ["Q2 (Apr-Jun): East Africa", "Ethiopia (Yirgacheffe, Sidamo), Kenya AA", "Bright, floral, fruit-forward; light-medium roast", "2 single-origin + 1 spring blend"],
        ["Q3 (Jul-Sep): South America", "Colombia, Peru, Bolivia", "Caramel, citrus, full-bodied; medium roast", "1 single-origin + 1 summer cold-brew SKU"],
        ["Q4 (Oct-Dec): Indonesia + holiday", "Sumatra, Sulawesi, Papua New Guinea + holiday blend", "Earthy, full-bodied, spice; medium-dark", "1 single-origin + 1 holiday blend + 1 decaf feature"],
      ],
    },
    {
      heading: "2. Operator capability checks",
      items: [
        { check: "Operator should attest to specialty-grade sourcing (SCA cupping score ≥ 84 for single-origin features; ≥ 82 for blends) with origin + farm/co-op traceability." },
        { check: "Operator should attest to roast-to-delivery window ≤ 14 days and full bag rotation within 21 days of roast." },
        { check: "Operator should attest to in-house QC cupping at each delivery (SCA Cupping Protocol; score sheets retained on file)." },
        { check: "Operator should attest to direct-trade or Fair Trade / Rainforest Alliance / Organic certifications where featured; provide chain-of-custody documentation." },
        { check: "Operator should attest to recipe-card publication and barista training before each rotation switch." },
        { check: "Operator should attest to no-cost rotation swap (no inventory penalty for unused beans within reasonable thresholds)." },
      ],
    },
    {
      heading: "3. Bean specification per rotation",
      headers: ["Spec", "Single-origin feature", "Seasonal blend", "Decaf"],
      rows: [
        ["SCA cupping score", "≥ 84", "≥ 82", "≥ 82"],
        ["Roast level", "Light-medium to medium", "Medium", "Medium"],
        ["Roast date", "≤ 14 days from delivery", "≤ 14 days", "≤ 21 days"],
        ["Bag size", "5 lb whole bean", "5 lb whole bean", "5 lb whole bean"],
        ["Quarterly volume forecast", "Operator forecasts in lbs based on prior quarter velocity ±20%", "—", "—"],
      ],
    },
    {
      heading: "4. Communications scope",
      paragraph:
        "A seasonal rotation only lands with employees if the story shows up where they get coffee. Use this communications scope for each rotation.",
      items: [
        { label: "Origin card at the bar", value: "Letter-size or A4 card on or beside each brewer with origin, producer / co-op, altitude, varietal, processing method, tasting notes, brewing recipe. Updated at each rotation." },
        { label: "Digital signage", value: "Slack channel post, intranet feature, lobby digital signage (if present). 1-2 paragraphs + photo from operator's source partner." },
        { label: "Tasting event", value: "Quarterly 30-minute tasting at rotation launch. Operator-led cupping at office; SCA cupping protocol; 4-5 attendees per cupping board." },
        { label: "Recipe-card kit", value: "Printed and laminated recipe card at each brewing station with the seasonal recipe (dose, yield, time, temperature)." },
        { label: "Survey", value: "End-of-quarter 3-question survey: rotation enjoyed (yes/no), preferred coffee in the rotation, suggestions for next quarter." },
      ],
    },
    {
      heading: "5. Tasting + cupping program",
      paragraph:
        "Cuppings build coffee literacy across the workforce and create a feedback loop that drives next quarter's selection. Use the SCA cupping protocol below.",
      items: [
        { number: 1, title: "Setup", description: "5 cups per coffee, 8.25 g coffee in 150 ml water (5:8.25 ratio per SCA protocol). Coarsely ground, no filter. Brew water 200°F, 4-minute steep." },
        { number: 2, title: "Break the crust", description: "Push crust to far side of cup at 4:00, inhale aromatics, score Fragrance/Aroma." },
        { number: 3, title: "Skim + slurp", description: "Skim foam at 8-10 minutes. When 160°F, slurp from spoon; score Flavor, Aftertaste, Acidity, Body, Balance." },
        { number: 4, title: "Final scoring", description: "Score Uniformity, Clean Cup, Sweetness, Overall, Defects. Total SCA score on 100-point scale." },
        { number: 5, title: "Discussion + survey", description: "Open discussion of tasting notes vs producer's notes; collect survey data on which lots to prioritize in the next rotation." },
      ],
    },
    {
      heading: "6. Decaf + alternative offerings",
      items: [
        { label: "Decaf feature", value: "Swiss Water Process or CO2-process decaf, specialty grade ≥ 82. Quarterly rotation alongside main feature. Separate hopper labeled DECAF." },
        { label: "Cold brew SKU (Q3 default)", value: "Operator may swap one quarter's hot-coffee feature for a cold-brew or nitro feature; concentrate or batch brewed cold ≤ 70°F, 12-18 hr extraction." },
        { label: "Holiday blend (Q4)", value: "Seasonal blend with origin mix (e.g., Ethiopia + Sumatra + Costa Rica) and limited-edition packaging. Pricing aligned with standard blend SKU; no resident premium." },
      ],
    },
    {
      heading: "7. Quarterly review + planning",
      items: [
        { check: "Lbs of each rotation SKU consumed vs forecast." },
        { check: "Stockout incidents + operator response time." },
        { check: "Cupping attendance + scoring results from in-house tasting." },
        { check: "Employee survey results (favorite + least-favorite SKU)." },
        { check: "Next rotation selection (operator presents 2-3 origin options 4 weeks before rotation date)." },
        { check: "Cost per cup trend vs prior quarter; budget reconciliation." },
      ],
    },
  ],
  footer:
    "This template is informational. Operator should confirm sourcing, certification, and rotation schedule in writing. Origin availability is harvest-dependent; rotations may shift by ±2-4 weeks based on producer logistics.",
});

console.log("wrote " + "seasonal-coffee-blends-office");
