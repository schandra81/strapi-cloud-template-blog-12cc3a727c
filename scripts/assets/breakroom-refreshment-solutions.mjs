import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "breakroom-refreshment-solutions",
  assetType: "toolkit",
  title: "Layered Breakroom Refreshment Program Toolkit",
  subtitle: "Employee survey template, RFP framework, planogram design, ESG checklist, and quarterly review template",
  intro:
    "This toolkit gives HR, facilities, and procurement the working documents to scope, RFP, launch, and govern a layered breakroom program (coffee + water + vending + micro-market or AI cooler). References pulled from ADA Section 308, FALCPA allergen labeling, FDA menu labeling, PCI-DSS 4.0, and ENERGY STAR. Capability-framed throughout — operator attestations belong in writing before contract execution.",
  sections: [
    {
      heading: "1. Employee survey template",
      paragraph:
        "Pulse the population before scoping. A 7-9 question instrument with ≥ 25% response rate is sufficient for planogram and tier-mix calibration. Run via SurveyMonkey, Microsoft Forms, or Qualtrics; keep open ≤ 7 business days.",
      items: [
        { label: "Q1 — Frequency", value: "How often do you use the breakroom for food or beverage? (Daily / 3-4x week / 1-2x week / Rarely / Never)" },
        { label: "Q2 — Current satisfaction", value: "Rate satisfaction with current breakroom offerings (1-5 scale + open comment)." },
        { label: "Q3 — Coffee preference", value: "What coffee format would you most use? (Bean-to-cup / Single-serve pod / Drip carafe / Cold brew on tap / I don't drink coffee)" },
        { label: "Q4 — Beverage preferences", value: "Rank top 3 beverages: bottled water, sparkling water, coffee, tea, kombucha, energy drink, soda, juice, dairy, plant milk." },
        { label: "Q5 — Food formats", value: "Rank top 3 formats: vending snacks, vending entrees, micro-market fresh, AI cooler grab-and-go, catered lunch days." },
        { label: "Q6 — Dietary needs", value: "Check all that apply: gluten-free, dairy-free, vegan, halal, kosher, nut-free, low-sugar, high-protein." },
        { label: "Q7 — Price sensitivity", value: "What is your acceptable price for a fresh sandwich? ($5-7 / $7-9 / $9-11 / I'd bring my own)" },
        { label: "Q8 — Payment", value: "Preferred payment: contactless card, Apple Pay/Google Pay, payroll deduction, account app, cash." },
        { label: "Q9 — Open suggestion", value: "What single change would make the breakroom better for you?" },
      ],
    },
    {
      heading: "2. RFP framework — section headings + key requirements",
      paragraph:
        "Issue to 3-5 operators. Allow 21-28 days for response. Capability-frame all requirements (operator should attest, not 'will deliver').",
      items: [
        { number: 1, title: "Facility profile + scope", description: "Headcount, shift schedule, sq ft of breakroom, target placements (coffee unit, vending machines, micro-market, AI cooler), survey results summary." },
        { number: 2, title: "Equipment specification", description: "ADA Section 308 compliance, ENERGY STAR where applicable, NSF/ANSI 51 food zone for any prep surfaces, NSF/ANSI 4 for refrigerated units. Operator marks comply / not-comply." },
        { number: 3, title: "Service + uptime SLA", description: "≥ 98% uptime, Tier-1 ≤ 24 hr ack/resolve, restock cadence by format (2-3x/wk vending; 3-5x/wk micro-market; daily-to-3x/wk AI cooler)." },
        { number: 4, title: "Planogram framework", description: "Per Section 3 of this toolkit; healthier-option mix; allergen labeling per FALCPA." },
        { number: 5, title: "Pricing + commission model", description: "Subsidy / pass-through / commission tier; total annual cost to host; refund SLA." },
        { number: 6, title: "Sustainability / ESG", description: "Per Section 4 of this toolkit; rainforest-alliance or fair-trade coffee, compostable cups, recycling capture." },
        { number: 7, title: "Implementation + go-live", description: "T-30 / T-21 / T-14 / T-7 / T-0 plan with owner accountability." },
        { number: 8, title: "References + capability evidence", description: "3+ comparable accounts ≥ 12 months in service; sample uptime + QBR." },
        { number: 9, title: "Compliance attestations", description: "PCI-DSS 4.0 AOC, ADA attestation, FDA Food Code adherence, insurance COI." },
      ],
    },
    {
      heading: "3. Planogram design framework",
      paragraph:
        "A layered breakroom program serves coffee, water, snack, fresh meal, and grab-and-go from purpose-fit equipment. Below is a starting share-of-facing framework; calibrate per survey + telemetry after 6-8 weeks.",
      headers: ["Format", "Facing share", "Categories", "Example SKUs", "Price range"],
      rows: [
        ["Coffee unit", "—", "Bean-to-cup / pods + condiments", "Drip carafe, decaf, hot tea selection, plant-milk options", "Subsidized or $0.50-$2.00"],
        ["Vending snack", "55%", "Better-for-you + traditional mix", "Protein bar, popcorn, jerky, classic chips, crackers", "$1.50-$4.50"],
        ["Vending beverage", "30% (snack machine) or 100% (beverage)", "Water / sparkling / soda / energy / cold coffee", "Bottled water, LaCroix, RTD coffee, electrolyte", "$1.25-$4.50"],
        ["Fresh / micro-market", "100%", "Sandwich, salad, wrap, fruit, yogurt", "Pre-made sandwich, salad bowl, parfait, fruit cup", "$5.50-$11.00"],
        ["AI cooler", "60 SKU rotating", "Grab-and-go meal + premium beverage + snack", "Sushi tray, charcuterie cup, kombucha, premium snack", "$2.50-$11.00"],
        ["Healthier mix target", "—", "Per CDC Choose to Move 1.0 or Partnership for a Healthier America guidance", "Whole-grain, ≤ 200 cal, ≤ 230 mg sodium, plant-forward", "—"],
      ],
    },
    {
      heading: "4. ESG / sustainability checklist",
      paragraph:
        "Procurement and sustainability teams increasingly require ESG attestations. Use this as the RFP appendix and the contract attestation.",
      items: [
        { check: "Coffee: ≥ 50% of bean volume rainforest-alliance, fair-trade, or USDA organic certified; documented at quarterly QBR." },
        { check: "Cups + lids: compostable or recyclable; operator provides BPI certification or recyclability documentation." },
        { check: "Refrigeration: ENERGY STAR certified machines where commercially available; R-290 (propane) or R-448A low-GWP refrigerant preferred." },
        { check: "Lighting: LED interior; nighttime low-power mode active." },
        { check: "Packaging: ≥ 30% of fresh-meal packaging post-consumer recycled or compostable by program year 2." },
        { check: "Food waste: micro-market / AI cooler operator donates near-expiration unsold product to local food bank where permitted by state Good Samaritan law." },
        { check: "Recycling capture: bottle/can recycling bin co-located with vending; operator reports diversion rate at QBR." },
        { check: "Healthier choices: ≥ 30% of snack and beverage facings meet better-for-you criteria (≤ 200 cal, ≤ 230 mg sodium, ≤ 10 g added sugar per CDC guidance)." },
        { check: "Allergen labeling: per FALCPA; allergen summary signage at machine face." },
        { check: "Supplier diversity: operator reports % of product sourced from diverse-owned suppliers (women, minority, veteran, LGBTQ+) where the host requires." },
      ],
    },
    {
      heading: "5. Quarterly business review template",
      items: [
        { check: "Uptime report (per-machine, per-month over the quarter) — target ≥ 98%" },
        { check: "Transaction trend + average basket trend" },
        { check: "Per-category velocity (snack / beverage / fresh / coffee)" },
        { check: "Top-20 SKUs + bottom-20 SKUs by velocity" },
        { check: "Stockout incidents + resolution time vs SLA" },
        { check: "Refund volume + reason codes (target < 2% of transactions)" },
        { check: "Coffee bean origin + certification mix" },
        { check: "ESG metrics report (recycling diversion, BFY share, near-expiration donation)" },
        { check: "Employee survey snapshot (re-run light-touch survey at quarter end)" },
        { check: "Planogram refresh proposal for next quarter" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This toolkit is informational and not legal advice. HR, facilities, and procurement should confirm program design complies with local food code, ADA, and any union or works-council requirements. Operator capability claims should be verified through reference calls and written attestation. LetUsVending can connect host teams with operators equipped to serve layered breakroom programs.",
});

console.log("wrote "+"breakroom-refreshment-solutions");
