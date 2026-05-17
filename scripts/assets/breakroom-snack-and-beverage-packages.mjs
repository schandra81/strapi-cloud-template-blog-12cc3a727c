import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "breakroom-snack-and-beverage-packages",
  assetType: "pack",
  title: "Office Snack and Beverage Package Toolkit",
  subtitle: "Survey template, archetype selector, planogram framework, ESG sourcing checklist, and quarterly review template",
  intro:
    "This toolkit helps workplace-experience, facilities, and HR teams scope a breakroom snack-and-beverage program rather than accept a generic operator bundle. It covers the employee survey, four package archetypes, planogram frameworks, ESG sourcing requirements, and the QBR template that keeps the program calibrated each quarter.",
  sections: [
    {
      heading: "1. Pre-launch employee survey template",
      paragraph:
        "Run before scoping the package. 10-question survey takes 3-5 minutes; distribute via email + Slack with a 2-week window. Target ≥ 30% response rate.",
      items: [
        { label: "Q1 — Frequency", value: "How often do you use the breakroom snack/beverage area? (Daily / 3-5×/week / 1-2×/week / Rarely)" },
        { label: "Q2 — Preference", value: "Which categories matter most? (Coffee + tea / Cold beverages / Healthy snacks / Indulgent snacks / Fresh food / Plant-based)" },
        { label: "Q3 — Dietary", value: "Do you follow a specific diet? (Vegan / Vegetarian / Gluten-free / Kosher / Halal / Low-sugar / Low-sodium / Allergen-aware / None)" },
        { label: "Q4 — Time of day", value: "When do you typically use the breakroom? (Morning 7-10 / Mid-morning 10-12 / Lunch 12-2 / Afternoon 2-5 / Late 5+)" },
        { label: "Q5 — Pricing", value: "What's a fair price for a snack? ($0.50 / $1.00 / $1.50 / $2.00+) — for beverage? Same scale." },
        { label: "Q6 — Subsidy", value: "Would you value a partially-subsidized program? (Yes — would use more / Same use / No preference)" },
        { label: "Q7 — Sustainability", value: "How important is recyclable/compostable packaging? (Very / Somewhat / Not important)" },
        { label: "Q8 — Hot drinks", value: "What hot drinks do you order most? (Drip coffee / Espresso-based / Tea / Hot chocolate / None)" },
        { label: "Q9 — Brand preferences", value: "Open text — which brands or SKUs you'd want available?" },
        { label: "Q10 — Pain points", value: "Open text — what's missing or frustrating today?" },
      ],
    },
    {
      heading: "2. Four package archetypes",
      paragraph:
        "Match the package to headcount, density, and program maturity. Most hosts cycle Essentials → Balanced → Premium over 18-36 months.",
      headers: ["Archetype", "Headcount + density", "Equipment", "Catalog depth", "Typical $/employee/month"],
      rows: [
        ["Essentials", "25-100 employees", "1 ambient snack + 1 CRBV + 1 bean-to-cup coffee + water tower", "40-60 SKUs", "$12-22"],
        ["Balanced (Fit Pick 50%)", "100-300 employees", "Above + 1 glass-front refrigerated snack + cold-brew tap + tea station", "80-120 SKUs", "$22-38"],
        ["Premium", "300+ employees", "Above + 2-3 bean-to-cup coffee + nitro cold brew + fresh-food micro-market + plant-based emphasis", "120-180 SKUs", "$35-55"],
        ["Hospitality / Pantry-style", "Headcount-flexible; high-density flagship", "Open shelving + cold cases + barista station + member-app POS + 100% free-vend", "150-200+ SKUs", "$45-85"],
      ],
    },
    {
      heading: "3. Planogram framework by archetype",
      paragraph:
        "Distribute facings across the seven planogram pillars below. Adjust weights per survey results.",
      headers: ["Pillar", "Essentials %", "Balanced %", "Premium %"],
      rows: [
        ["Hydration (water, sparkling)", "15", "20", "25"],
        ["Healthier snacks (Fit Pick, FDA, Non-GMO)", "25", "40", "55"],
        ["Plant-based protein", "5", "15", "25"],
        ["Indulgent snacks (candy, chips, cookies)", "30", "20", "10"],
        ["Conventional beverages (soda, juice)", "15", "10", "5"],
        ["Fresh / refrigerated (yogurt, fruit, parfait)", "5", "10", "20"],
        ["Coffee + tea ancillary (creamer, sweetener, cup, lid)", "5", "5", "10"],
      ],
    },
    {
      heading: "4. ESG sourcing checklist",
      paragraph:
        "Apply to every SKU bid + every supplier in the chain.",
      items: [
        { check: "Coffee: 100% Fair Trade or Rainforest Alliance; ≥ 50% USDA Organic" },
        { check: "Chocolate: ≥ 50% Fair Trade or Rainforest Alliance" },
        { check: "Aluminum cans: ≥ 70% recycled content" },
        { check: "PET bottles: ≥ 50% rPET" },
        { check: "Snack films: mono-material PE preferred; How2Recycle Store Drop-Off labeling" },
        { check: "Compostable cups: BPI-certified; PFAS-free" },
        { check: "Equipment: 100% ENERGY STAR + 100% R-290 / R-600a refrigerant" },
        { check: "Telemetry: cellular standard; emission factor per vend supplied annually" },
        { check: "Three-bin diversion adjacent to every machine" },
        { check: "Local + minority + women-owned supplier preference (USHCC, NMSDC, WBENC) per host policy" },
      ],
    },
    {
      heading: "5. Dietary inclusivity matrix",
      headers: ["Diet", "Target % of catalog facings", "Example SKUs"],
      rows: [
        ["Vegan", "20-30%", "GoMacro Mini, RXBAR, Skinny Pop, Bare Apple Chips, Olipop, Califia Farms"],
        ["Gluten-free", "20-30%", "RXBAR, Larabar, KIND Healthy Grains (select), Chomps Jerky, Bare"],
        ["Low-sugar (< 8g)", "30-50%", "RXBAR, Chomps, Skinny Pop, Wonderful Pistachios, Sparkling water"],
        ["Kosher (OU, OK, Star-K)", "60-80%", "Most national brands; verify per SKU"],
        ["Halal (IFANCA, HMA)", "30-50%", "Verify per SKU; refrigerated meat snacks require explicit certification"],
        ["Nut-free", "30-50% in K-5 / nut-aware workplaces", "Sun-Maid, Skinny Pop, Stretch Island, Sargento String Cheese, Welch's"],
      ],
    },
    {
      heading: "6. Subsidy + pricing model",
      items: [
        { label: "Free-vend (host covers 100%)", value: "Standard for hospitality + high-retention tech employers. Cost: $25-65/employee/month depending on catalog depth + utilization." },
        { label: "Subsidized partial (host covers 50-100% of base SKUs)", value: "Employees pay nominal $0.25-$0.75 for healthier; full retail for indulgent. Cost: $10-25/employee/month." },
        { label: "Pay-per-cup / per-snack (employees pay full)", value: "Operator-funded; host pays equipment + service only. Lower employee participation (40-60% activation vs. 80-95% free-vend)." },
        { label: "Hybrid wellness subsidy", value: "Free-vend on Fit Pick Select + plant-based; conventional at $1-2. Steers behavior without hard restriction." },
        { label: "Wellness-app integration", value: "Steps-to-snack credit via Virgin Pulse / Wellable / Limeade — 10-20% added engagement at minimal incremental cost." },
      ],
    },
    {
      heading: "7. Equipment + service specification",
      items: [
        { label: "Refrigerated equipment", value: "ENERGY STAR-certified, R-290 refrigerant, glass-front + temperature telemetry (33-40°F)." },
        { label: "Coffee equipment", value: "Bean-to-cup superautomatic (Franke A300/A600, Schaerer Coffee Club/Soul, WMF 1100 S). 1 brewer per 50-75 employees." },
        { label: "Hot water + tea", value: "Bunn dispenser or instant hot tap (Insinkerator HC2200). Filtered water mandatory." },
        { label: "Telemetry", value: "Cellular, sub-15-minute heartbeat. Cantaloupe / Nayax / 365 / Vagabond." },
        { label: "Service SLA tiers", value: "Tier 1 (offline + payment + temperature) <24 hr; Tier 2 (stockout + planogram) <48 hr; Tier 3 (cosmetic) <14 days." },
        { label: "Restock cadence", value: "Telemetry-driven 1-3×/week per machine; daily for hospitality archetype." },
      ],
    },
    {
      heading: "8. Quarterly business review (QBR) template",
      paragraph:
        "Operator brings this to every QBR. Workplace-experience + facilities + HR sign-off.",
      items: [
        { check: "Uptime per machine per month (telemetry-verified ≥ 98% target)" },
        { check: "Per-SKU velocity + top-10 + bottom-10 for the quarter" },
        { check: "Healthier-share-of-vends trend (target archetype % ± 30%)" },
        { check: "Plant-based-share-of-vends trend" },
        { check: "Stockout rate + top-3 stockout SKUs + resolution time" },
        { check: "Service ticket SLA adherence" },
        { check: "Cost-per-employee actuals vs. budget; commodity pass-through reconciliation" },
        { check: "NPS / smile-rating trend (target ≥ 40 year-1, ≥ 50 year-3)" },
        { check: "Sustainability metrics: kWh, refrigerant, route miles, packaging mix, diversion rate" },
        { check: "Quarterly SKU refresh: 8-12 new SKUs in / bottom-velocity SKUs out" },
        { check: "Action items + owner + due date for next quarter" },
      ],
    },
    {
      heading: "9. Operator selection checklist",
      items: [
        { check: "Catalog flexibility — line-item pricing, not single bundle" },
        { check: "ENERGY STAR + R-290 equipment standard" },
        { check: "Telemetry on every machine" },
        { check: "ESG sourcing alignment per checklist in section 4" },
        { check: "Wellness-app integration capability" },
        { check: "References from 3+ comparable-headcount hosts with ≥ 24 months tenure" },
        { check: "Insurance: $2M GL, $1M product, $1M cyber" },
        { check: "Termination for convenience with 60-90 day notice" },
      ],
    },
  ],
  footer:
    "This toolkit is operator-neutral and informational. LetUsVending helps workplace-experience + facilities teams scope, RFP, and qualify operators for office snack-and-beverage programs.",
});

console.log("wrote " + "breakroom-snack-and-beverage-packages");
