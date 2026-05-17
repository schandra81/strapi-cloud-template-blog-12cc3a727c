import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-are-vending-prices-determined",
  assetType: "playbook",
  title: "Vending Pricing Playbook",
  subtitle: "Cost-plus structure, placement multipliers, commission obligations, category margins, and market benchmarks",
  intro:
    "Vending pricing is not 'whatever feels right.' It's a cost-plus structure shaped by category margin targets, placement-class multipliers, commission obligations, and a defensible market benchmark. This playbook codifies the structure LetUsVending operator partners use — referenced against NAMA operator-survey margin norms (Automatic Merchandiser Industry Census), BLS CPI Food-Away-From-Home, FDA 21 CFR 101.8 vending calorie disclosure, and IRS Pub 583 sales-tax handling.",
  sections: [
    {
      heading: "1. Cost-plus pricing equation",
      paragraph:
        "Every shelf price decomposes to four layers. Mature operators carry this math per-SKU in a pricing model.",
      items: [
        { number: 1, title: "Layer 1 — landed product cost", description: "Wholesale unit cost + freight + receiving labor. Snack landed cost $0.30-$0.95; soda $0.40-$0.55 / 12 oz can; energy $1.50-$2.00 / 8.4 oz can; KIND/RXBAR-class $1.00-$1.55." },
        { number: 2, title: "Layer 2 — operating cost", description: "Route labor, fuel, telemetry SIM, payment processing, depreciation. Industry benchmark $0.30-$0.65 per dispensed item." },
        { number: 3, title: "Layer 3 — margin target", description: "Snack 55-65%; soda 35-45%; energy 40-50%; healthy-share 45-55%; cold-food 40-50%. Blended ~50%." },
        { number: 4, title: "Layer 4 — placement adjustment", description: "Placement-class multiplier (next section) +/- before rounding to a customer-facing price tier ($0.25 increments)." },
      ],
    },
    {
      heading: "2. Placement-class multipliers",
      headers: ["Placement class", "Pricing index (baseline = 1.00)", "Examples"],
      rows: [
        ["Class A — captive premium", "1.30-1.60", "Airports, stadiums, hotels, hospitals (visitor zones), tollway plazas"],
        ["Class B — captive standard", "1.10-1.25", "Workplaces, healthcare staff areas, large multifamily, college dorms"],
        ["Class C — convenience baseline", "1.00", "Workplaces with nearby retail, suburban office parks"],
        ["Class D — competitive", "0.85-1.00", "Industrial sites with on-site canteen, schools, military commissaries"],
        ["Class E — subsidized", "0.50-0.80 (employer buy-down)", "Employer-subsidized snacks, free-vend programs, recognition events"],
      ],
    },
    {
      heading: "3. Commission obligations + how they roll up",
      items: [
        { label: "Why commissions exist", value: "Site grants exclusive space + utilities; operator pays a percentage of gross or net as compensation. NAMA operator surveys put median commission at 5-8% of gross at workplace placements." },
        { label: "Commission structure types", value: "Flat % of gross (simplest), tiered % (graduates with volume), $/case, $/vend (rare), or category-tiered (commodity vs. healthy-share split)." },
        { label: "Commission cap protection", value: "Operator typically caps commission at a level that preserves a minimum operating margin — sometimes phrased as 'commission paid on gross above $X/month'." },
        { label: "Public-sector + concession contracts", value: "Airport / federal-building / school commissions often higher (10-25%+) and routed through a master concessionaire — see the airport playbooks." },
        { label: "Pricing-uplift to fund commission", value: "Class B+ pricing implicitly funds the commission; commission % must be modeled into Layer 4 of the cost-plus equation, not bolted on after the fact." },
      ],
    },
    {
      heading: "4. Category margin targets",
      headers: ["Category", "Wholesale band", "Shelf price band", "Margin target"],
      rows: [
        ["Salty snacks (1.5-2 oz pack)", "$0.40-$0.55", "$1.50-$2.25", "55-65%"],
        ["Sweet baked + candy", "$0.40-$1.00", "$1.50-$2.75", "55-65%"],
        ["Protein bar / healthy-share", "$1.00-$1.55", "$2.50-$3.50", "45-55%"],
        ["Soda (12 oz can)", "$0.40-$0.55", "$1.50-$2.25", "35-45%"],
        ["Water (16.9 oz)", "$0.15-$0.30", "$1.50-$2.50", "60-75%"],
        ["Energy drink (8.4-16 oz)", "$1.50-$2.30", "$3.50-$4.50", "40-50%"],
        ["Cold food entrée", "$3.00-$4.50", "$6.50-$9.50", "40-50%"],
      ],
    },
    {
      heading: "5. Market benchmark references",
      items: [
        { check: "BLS CPI Food-Away-From-Home — track annual % change to time pricing reviews" },
        { check: "NAMA Industry Census — annual margin + commission norms by placement class" },
        { check: "Automatic Merchandiser annual State-of-the-Industry — pricing-tier distribution" },
        { check: "Local convenience-store / c-store retail audit (Circle K, 7-Eleven, Wawa, Sheetz) — primary in-market reference" },
        { check: "Airport / stadium pricing audit when bidding Class A" },
        { check: "Costco / Sam's bulk-equivalent pricing as the floor on price defensibility for staff who 'know what it costs at Costco'" },
      ],
    },
    {
      heading: "6. Pricing review cadence",
      items: [
        { number: 1, title: "Monthly — telemetry review", description: "Velocity by SKU at current price. Outliers (top 5 fastest, top 5 slowest) flagged for review." },
        { number: 2, title: "Quarterly — pricing tier review", description: "Round-to-$0.25 tier review against current wholesale + freight; document the rationale for any change in the operator's pricing log." },
        { number: 3, title: "Annually — pricing-class confirmation", description: "Re-classify placement at contract anniversary if foot traffic, headcount, or competitive context has shifted." },
        { number: 4, title: "Event-driven — commodity shock", description: "Sustained >10% wholesale move on a category triggers an interim pricing review; communicate change to host site in advance." },
      ],
    },
    {
      heading: "7. Sales tax + receipt detail",
      items: [
        { check: "State + local sales tax applied per jurisdiction — many states exempt 'food for home consumption' but tax 'food sold through vending'" },
        { check: "Itemized receipt available via the kiosk app for cashless transactions (PCI-DSS 4.0 tokenization)" },
        { check: "Calorie disclosure per 21 CFR 101.8 (vending calorie rule) — required where operator has 20+ machines, regardless of price" },
        { check: "FALCPA + FASTER Act allergen labels on every SKU regardless of pricing" },
        { check: "Sales-tax reporting cadence per state (monthly / quarterly); operator retains records 4-7 years per IRS Pub 583" },
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can model the cost-plus pricing equation against your placement class, commission structure, and category mix — and match you with operator partners equipped to publish defensible per-SKU pricing, BLS-indexed pricing reviews, and quarterly margin transparency for the host site. Pricing models are scoped per site after a discovery call.",
    },
  ],
  footer:
    "Informational reference, not pricing advice. Confirm sales-tax application and any local pricing-disclosure rules with counsel. Citations current at publication.",
});

console.log("wrote "+"how-are-vending-prices-determined");
