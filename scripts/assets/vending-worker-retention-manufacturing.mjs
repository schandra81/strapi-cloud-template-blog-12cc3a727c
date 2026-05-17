import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-worker-retention-manufacturing",
  assetType: "pack",
  title: "Manufacturing Retention-Vending Pack",
  subtitle: "Meal-format planogram, shift-specific SKU coverage, retention-impact reporting framework",
  intro:
    "Manufacturing turnover sits at 35-45% annual in many sectors (BLS JOLTS, transportation equipment + food manufacturing). Replacement cost averages 16-21% of annual salary (SHRM). A well-designed vending program is not a retention silver bullet, but it is a measurable, low-cost contributor to the benefits-and-amenities bundle that hourly workers cite in stay interviews. This pack codifies the planogram, SKU coverage, and reporting framework that links vending to the retention story.",
  sections: [
    {
      heading: "1. Where vending sits in the retention picture",
      paragraph:
        "BLS data for 2024-2025 shows monthly hourly-manufacturing turnover at 2.5-3.5%. Top exit reasons in BLS / SHRM data: pay (40-50%), schedule / hours (15-20%), respect / treatment (10-15%), and benefits & amenities (10-15%). Vending falls within benefits & amenities — not a primary driver, but a credible signal of how the employer treats hourly workers.",
      items: [
        { label: "Replacement cost (SHRM 2024)", value: "16-21% of annual salary for hourly roles; higher in skilled trades." },
        { label: "Stay-interview citation rate", value: "Vending / on-site food typically cited by 12-25% of hourly workers in stay interviews (varies by employer survey design)." },
        { label: "Effect size", value: "Vending alone does not move retention by double digits. As one signal in a coordinated amenities + benefits + supervisor-quality program, it contributes 1-3 percentage points in measurement studies." },
      ],
    },
    {
      heading: "2. Meal-format planogram — the retention pivot",
      paragraph:
        "The biggest retention-relevant change to a factory vending program is meal-format coverage. Workers with 30-minute lunch windows and no on-site cafeteria cite 'nothing real to eat' as a quality-of-life pain point.",
      headers: ["Meal format", "Slot share", "Example SKUs"],
      rows: [
        ["Refrigerated sandwich / wrap", "3-4 slots", "Turkey + cheese, hummus + veg wrap, chicken Caesar wrap"],
        ["Microwaveable bowl / cup", "3-4 slots", "Chicken-rice bowl, mac-and-cheese cup, soup cup, oatmeal"],
        ["Fresh salad / grain bowl", "2-3 slots", "Cobb salad, quinoa-veg bowl"],
        ["Protein-forward snack as meal supplement", "2-3 slots", "Jerky + cheese + crackers; protein-bar + fruit cup"],
        ["Frozen meal (if frozen capable)", "2-4 slots", "Frozen burrito, frozen entrée, breakfast sandwich"],
      ],
    },
    {
      heading: "3. Shift-specific SKU coverage",
      paragraph:
        "Shift-3 workers report the highest dissatisfaction with on-site food access in BLS-adjacent studies (because cafeteria + nearby fast food are closed). Shift-3 SKU coverage is the highest-leverage retention move within a vending program.",
      items: [
        { label: "Shift-3 (overnight) priority", value: "Hot beverages, caffeinated drinks (coffee, energy, cold brew), comfort + calorie-dense snacks, meal-format options (frozen entrée, microwaveable bowl). Operator should certify ≥ 20% of slots are shift-3-tuned with quarterly velocity review." },
        { label: "Shift-1 (early morning) priority", value: "Breakfast bars, fresh fruit, yogurt, breakfast sandwich (refrigerated or hot), coffee. Workers arriving 5-6 AM rarely eat breakfast before shift." },
        { label: "Shift-2 (mid-day to evening) priority", value: "Lunch + snack mix; the most flexible shift. Telemetry usually shows highest single-day velocity here." },
      ],
    },
    {
      heading: "4. Worker-voice mechanism — what to wire in",
      paragraph:
        "Workers who request a SKU and see it appear in 30 days are 2-3× more likely to use the machine vs. workers who request and get silence (operator pilot data). Wire in the request channel.",
      items: [
        { check: "QR code on machine face links to a 30-second 'request a SKU' form (operator portal or facility intranet)." },
        { check: "Operator commits to review SKU requests monthly; new SKU trialed within 30 days where supplier carries it." },
        { check: "Decline rationale shared back (e.g., 'not carried by primary supplier — alternative SKU added')." },
        { check: "Stay-interview script includes a vending question: 'Is there anything missing from the vending program that would matter to you?'" },
        { check: "Quarterly worker survey — 3 questions: stocked, quality, requests honored." },
      ],
    },
    {
      heading: "5. Retention-impact reporting framework",
      paragraph:
        "Vending should not over-claim retention impact. Report what is measurable. The framework below isolates vending's contribution without conflating it with other amenities or pay changes.",
      headers: ["Metric", "Cadence", "Source"],
      rows: [
        ["Vending program NPS or 3-question CSAT", "Quarterly", "Worker intercept survey"],
        ["SKU-request honor rate", "Quarterly", "Operator portal"],
        ["Stay-interview vending citation rate", "Per stay-interview", "HR stay-interview log"],
        ["Exit-interview vending citation rate", "Per exit-interview", "HR exit-interview log"],
        ["Hourly turnover trend (annual)", "Annual", "HR / BLS-comparable internal metric"],
        ["Amenities-bundle satisfaction (vending + cafeteria + breakroom)", "Annual", "Engagement survey"],
      ],
    },
    {
      heading: "6. Coordination with HR + recruiting",
      paragraph:
        "Vending is part of the amenities story HR + recruiting tells candidates. Wire it into the recruiting pitch.",
      items: [
        { check: "Recruiting career-site copy references on-site food access (vending + cafeteria + micro-market) without overclaiming." },
        { check: "Onboarding tour includes the vending area; new hires shown the request channel." },
        { check: "Manager / supervisor onboarding mentions the labor-management committee feedback loop." },
        { check: "Stay-interview script question (above) added to standard template." },
        { check: "HR pulse survey includes vending-program question annually." },
      ],
    },
    {
      heading: "7. Investment range + payback",
      paragraph:
        "Most plants do not capitalize a retention-vending program directly. The operator funds equipment in exchange for placement and SKU margin. Plant investment is typically program-design time + a modest subsidy basket (water priced near cost, occasional thank-you BOGO).",
      items: [
        { label: "Operator equipment funding", value: "Standard placement model — zero capital from plant. Operator amortizes equipment over 5-7 year contract." },
        { label: "Subsidy basket (optional)", value: "$0-3K per machine per year. Common scope: water priced at cost, fresh-fruit subsidy, quarterly thank-you event. Funded by plant; passed through at cost." },
        { label: "Program-design time (one-time)", value: "20-40 hours HR + facility + EHS coordination for the joint RFP + planogram. Recurring 4-6 hours per quarter for QBR." },
        { label: "Retention math sketch", value: "Replacing one $50K hourly worker costs ~$8K-10K (SHRM). If retention-vending plus other amenities improvements retain 5 additional workers per year at a 200-worker plant, the savings dwarf any subsidy basket." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to design the planogram, RFP, and reporting cadence that links vending to retention measurement. The operator selected via this framework executes the program; HR owns the retention metrics and the stay-interview process.",
    },
  ],
  footer:
    "Informational reference. Retention is multi-causal; vending is one contributor. Avoid overstating attribution in internal or external communications.",
});

console.log("wrote "+"vending-worker-retention-manufacturing");
