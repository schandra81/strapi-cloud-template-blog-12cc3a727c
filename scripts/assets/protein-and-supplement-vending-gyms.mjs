import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "protein-and-supplement-vending-gyms",
  assetType: "pack",
  title: "Tiered Protein + Supplement Vending Framework",
  subtitle: "Tier 1-3 SKU catalog, refrigeration spec, Tier 4 compliance review, Tier 5 channel design",
  intro:
    "Protein and supplement vending is the highest-revenue gym category but carries the highest regulatory and safety surface. This pack defines a five-tier framework: the products that always belong (1), the conditional (2-3), the watch-list (4), and the keep-out (5).",
  sections: [
    {
      heading: "1. Tier 1 — Always-stock SKU catalog",
      paragraph:
        "Tier 1 SKUs are unambiguously food (not 'supplement') under 21 CFR 101 and 21 CFR 105. They face standard FALCPA allergen labeling and FDA Food Code §3-201 sourcing requirements — nothing exotic.",
      headers: ["Category", "Example SKUs", "Average price", "Shelf life"],
      rows: [
        ["Protein bar (food)", "Quest, RXBAR, Built, Barebells, ONE, KIND Protein, Pure Protein, ThinkThin", "$3.00-$4.50", "9-12 months"],
        ["Ready-to-drink shake (food)", "Premier Protein, Fairlife Core Power, Muscle Milk, Orgain, OWYN", "$3.50-$5.00", "9-12 months ambient / 30-90 days refrigerated"],
        ["Greek yogurt / cottage cheese", "Chobani Pro, Two Good, Good Culture", "$2.50-$4.00", "30-60 days refrigerated"],
        ["Hard-boiled eggs / protein box", "Eggland's Best, Sargento Balanced Breaks", "$2.00-$5.00", "21-45 days refrigerated"],
        ["Jerky / meat snacks", "Chomps, Country Archer, Old Trapper, Wagyu Jerky Co", "$2.50-$5.00", "9-12 months"],
        ["Nuts + trail mix", "Wonderful Pistachios, Sahale, Sahale Snacks Glazed", "$1.50-$4.00", "9-12 months"],
      ],
    },
    {
      heading: "2. Tier 2 — Conditional (verify per state)",
      paragraph:
        "Tier 2 includes electrolyte and hydration SKUs that are mostly food (not supplements) but include vitamin or amino-acid claims that vary in state acceptance.",
      items: [
        { label: "Electrolyte powders + stick packs", value: "Liquid IV (DOLE), LMNT, Nuun, Skratch Labs. Generally regulated as food (DSHEA §3, 1994). Confirm caffeine content where caffeine + electrolyte combo exists." },
        { label: "Sports drinks", value: "BodyArmor, Gatorade Fit, Powerade Power Water, Skratch Labs Hydration. Food classification. Refrigerated or ambient depending on SKU." },
        { label: "Coconut water / functional water", value: "Vita Coco, Harmless Harvest, Liquid Death Sparkling. Food classification." },
        { label: "Caffeine-containing", value: "FDA caffeine guidance: 400 mg/day safe for most adults (FDA 2018 advisory). Avoid SKUs > 200 mg per serving in vending; consider age-restriction signage where state code requires." },
      ],
    },
    {
      heading: "3. Tier 3 — Refrigerated fresh + cold-chain SKUs",
      paragraph:
        "Refrigerated SKUs raise revenue per square foot 30-60% but require FDA Food Code §3-501.16 temperature management. Specify a glass-front merchandiser with telemetry temperature alerting.",
      items: [
        { label: "Cold-hold temp", value: "≤ 41°F (5°C) per FDA Food Code §3-501.16. Most modern merchandisers hold 33-38°F with sub-15-min telemetry heartbeat." },
        { label: "Date marking", value: "FDA Food Code §3-501.17: 7-day max from open/prep. Operator-prepared SKUs need date label visible to consumer." },
        { label: "Auto-shutoff", value: "FDA Food Code §3-501.16(A)(2) requires automatic vend lockout if cold-hold exceeds 41°F > 30 minutes. Verify equipment carries NAMA Certified Refrigerated Vending status." },
        { label: "Sample SKUs", value: "Fairlife Core Power Elite (42g protein refrigerated), Owyn refrigerated, fresh hard-boiled eggs, Chobani Pro 20g, protein meal-prep boxes." },
      ],
    },
    {
      heading: "4. Tier 4 — Watch-list (verify per state + facility)",
      paragraph:
        "Tier 4 SKUs are typically regulated as dietary supplements (DSHEA §3 — 21 USC §321(ff)) rather than food. Vending them is legal under federal law with proper labeling (21 CFR 101.36) but introduces state-by-state and facility-policy considerations.",
      items: [
        { label: "Protein powder single-serve", value: "Generally classified as dietary supplement. Requires 21 CFR 101.36 Supplement Facts panel, not Nutrition Facts. Verify state vending classification (most states accept; a few require pharmacy-style placement)." },
        { label: "BCAA / EAA / creatine single-serve", value: "Dietary supplement classification. Per FDA / DSHEA: must show Supplement Facts, ingredient list, manufacturer info. Creatine is GRAS but verify member-facing signage." },
        { label: "Pre-workout (non-stimulant)", value: "Dietary supplement classification. Specify caffeine ≤ 200 mg or non-stimulant variants only for vending." },
        { label: "Protein cookie + supplement bar (claim-heavy)", value: "Some 'high protein' bars meet food classification, others (with creatine, BCAA, etc.) become supplements. Read the panel: Nutrition Facts (food) vs Supplement Facts (supplement)." },
        { label: "Compliance review", value: "Have your operator's nutrition/quality team review each Tier 4 SKU label per 21 CFR 101.36 (supplement facts), 21 CFR 111 (cGMP for dietary supplements), and state law (e.g., NY Education Law §6802 considerations) before listing." },
      ],
    },
    {
      heading: "5. Tier 5 — Keep-out (do not vend)",
      paragraph:
        "Tier 5 items create disproportionate liability or regulatory risk in unstaffed vending. Keep them out — refer members to staffed retail.",
      items: [
        { check: "High-stimulant pre-workout (> 200 mg caffeine per serving): age + cardiovascular risk, FDA advisory level for adolescents." },
        { check: "Thermogenic / weight-loss supplements containing yohimbe, synephrine, ephedra-substitute compounds: FDA enforcement history (FDA 2004 ephedra ban; ongoing yohimbe + DMAA enforcement)." },
        { check: "Anabolic-marketed 'prohormones': DSHEA + Anabolic Steroid Control Act 2004 enforcement; many products contain Schedule III substances." },
        { check: "Anything labeled 'investigational' or carrying 21 CFR 312 disclosure (clinical trial only)." },
        { check: "SARMs (selective androgen receptor modulators): FDA has not approved for human consumption; FDA Warning Letters 2017-2024." },
        { check: "Any SKU on the FDA Tainted Products list (https://www.fda.gov/drugs/medication-health-fraud)." },
      ],
    },
    {
      heading: "6. Refrigeration + equipment spec",
      paragraph:
        "Tier 1-3 mixes require either a single combo machine (snack + chilled) or a glass-front beverage merchandiser + ambient snack pair.",
      headers: ["Equipment", "ENERGY STAR class", "Typical capacity", "Use case"],
      rows: [
        ["Ambient snack (35 select)", "ENERGY STAR 4.0 snack", "200-450 SKUs", "Bars + jerky + nuts"],
        ["Glass-front beverage merchandiser", "ENERGY STAR 4.0 Class A", "120-360 bottles/cans", "Shakes + electrolyte + hydration"],
        ["Combo (snack + chilled)", "ENERGY STAR 4.0 Class B", "60-90 snack + 60-90 chilled", "Smaller footprint, fewer SKUs"],
        ["Micro-market / smart cooler", "AWM Smart Shelf, 365 PicoCooler", "200-600 SKUs across temps", "Premium / boutique gyms"],
      ],
    },
    {
      heading: "7. Pricing strategy + margin targets",
      paragraph:
        "Protein + recovery SKUs carry higher cost-of-goods than ambient snacks but command higher retail. Target gross margin 35-45% on Tier 1-3, accepting lower commission % to keep wholesale price viable for the operator.",
      headers: ["Tier", "COGS range", "Retail range", "Gross margin"],
      rows: [
        ["Tier 1 — protein bar", "$1.30-$1.80", "$3.00-$4.50", "55-65%"],
        ["Tier 1 — RTD shake", "$1.80-$2.40", "$3.50-$5.00", "45-55%"],
        ["Tier 2 — electrolyte", "$0.50-$0.90", "$1.75-$3.00", "60-70%"],
        ["Tier 3 — refrigerated fresh", "$1.50-$3.00", "$3.50-$6.00", "40-50%"],
        ["Tier 4 — supplement", "$1.50-$3.00", "$3.50-$6.00", "40-55%"],
      ],
    },
    {
      heading: "8. Operator capabilities required",
      items: [
        { check: "Refrigerated fleet ≥ 30% of total fleet; telemetry with temperature alerting." },
        { check: "Cold-chain logistics: refrigerated route truck, refrigerated warehouse capacity per FDA Food Code §3-202." },
        { check: "FALCPA-compliant per-SKU allergen labels (21 USC §343) on every SKU." },
        { check: "Tier 4 supplement review process: in-house or contracted nutritionist / QA reviews each SKU against 21 CFR 101.36 and 21 CFR 111 before listing." },
        { check: "Insurance: product liability ≥ $2M/$4M aggregate; product recall coverage where Tier 3 fresh is sold." },
        { check: "References from at least 2 gym deployments with active recovery cooler programs." },
      ],
    },
  ],
  footer:
    "This pack is informational and not nutrition or legal advice. Operator and gym should retain qualified counsel and a registered dietitian or QA professional for tier 4 review. LetUsVending can introduce operators equipped to deliver tiered protein + supplement vending.",
});

console.log("wrote "+"protein-and-supplement-vending-gyms");
