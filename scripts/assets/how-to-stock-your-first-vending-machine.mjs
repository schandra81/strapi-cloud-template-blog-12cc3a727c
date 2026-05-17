import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-stock-your-first-vending-machine",
  assetType: "playbook",
  title: "First Vending Machine Stocking Playbook",
  subtitle: "Planogram templates and sourcing reference for new operators",
  intro:
    "The first 30 days of stocking a machine sets margin, refund rate, and shrink for the next 12 months. This playbook codifies the planogram templates and sourcing reference LetUsVending operator-network onboarding uses — referenced against NAMA operator-survey planogram norms, FDA FALCPA + FASTER Act allergen labeling, FDA Food Code 2022 cold-chain, and the 2020-2025 Dietary Guidelines healthy-share framework.",
  sections: [
    {
      heading: "1. Planogram templates by machine type",
      paragraph:
        "Each template is a starting baseline. Tune week-by-week with telemetry velocity data; planogram v2 ships at the 4-week mark.",
      items: [
        { label: "Snack machine (Crane National 187 / AMS 39 / USI 3145 — ~40 selections)", value: "Salty (Chex Mix, Cheez-It, Doritos, Cheetos, Lays, Pretzels) — 12 slots; Sweet baked (Pop-Tarts, Cookies, Brownies) — 6; Candy (Snickers, M&M, KitKat, Reese's, Twix) — 6; Protein/healthy-share (KIND, RXBAR, Quest, almonds, jerky, fruit) — 8; Pastry (Pop-Tart, Honey Bun, Danishes) — 4; Gum/mint — 2; Reserve — 2." },
        { label: "Drink machine (Royal Vendors RVCC / Dixie Narco — ~9-12 selections)", value: "Water + sparkling — 2; Coke + Diet Coke — 2; Pepsi + Diet Pepsi — 2; Mountain Dew or Dr Pepper — 1; Sprite — 1; Gatorade — 1; Red Bull or Monster — 1; Iced coffee or tea — 1." },
        { label: "Combo machine (snack + drink, ~30-38 selections)", value: "Snacks 60% / drinks 30% / healthy-share endcap 10%. Reserve at least one column for water and one for protein bar." },
        { label: "Fresh-food machine (Crane Merchant / AMS Sensit / Avanti)", value: "Salads, wraps, sandwiches, parfaits, fruit cups, hummus + veg, hard-boiled eggs, yogurt. ≤41°F continuous per FDA Food Code 2022 §3-501.16. Date-marked discard ≤7 days §3-501.17." },
        { label: "Coffee machine (single-cup bean-to-cup)", value: "Drip + decaf + espresso + flavored option + non-dairy + sweetener; cup/lid/stir/napkin par stations on countertop adjacent." },
      ],
    },
    {
      heading: "2. Sourcing reference — distributor + product",
      headers: ["Source", "Strength", "Account minimum", "Typical lead time"],
      rows: [
        ["Vistar (PFG)", "National vending wholesale, ~25k SKUs", "Sole-prop friendly", "2-5 days"],
        ["McLane", "Broadline c-store + foodservice", "Higher minimum", "3-7 days"],
        ["Eby-Brown", "Convenience wholesale (Midwest strong)", "Mid-sized minimum", "2-5 days"],
        ["Core-Mark", "Convenience wholesale (West/South strong)", "Mid-sized minimum", "2-5 days"],
        ["Costco Business / Sam's Club Business", "Cash-and-carry for top-velocity SKUs", "Membership only", "Same-day pickup"],
        ["Restaurant Depot", "Bulk pricing on bottled water + soda + coffee", "Membership only", "Same-day pickup"],
      ],
    },
    {
      heading: "3. First-stock order list (combo machine, 50-employee site)",
      headers: ["SKU", "Case pack", "Cases ordered", "Per-pack cost", "Wholesale outlay"],
      rows: [
        ["Cheez-It 1.5 oz", "60 ct", "1", "$0.45", "$27"],
        ["Doritos Nacho 1.75 oz", "64 ct", "1", "$0.45", "$29"],
        ["Snickers king", "24 ct", "1", "$0.90", "$22"],
        ["KIND Dark Choc Almond Sea Salt", "12 ct", "2", "$1.05", "$25"],
        ["RXBAR Chocolate Sea Salt", "12 ct", "1", "$1.40", "$17"],
        ["Pop-Tart Frosted Strawberry 2-pack", "72 ct", "1", "$0.40", "$29"],
        ["Bottled water 16.9 oz", "40 ct", "2", "$0.18", "$15"],
        ["Coke 12 oz can", "24 ct", "2", "$0.45", "$22"],
        ["Diet Coke 12 oz can", "24 ct", "1", "$0.45", "$11"],
        ["Red Bull 8.4 oz can", "24 ct", "1", "$1.70", "$41"],
        ["Mtn Dew 12 oz can", "24 ct", "1", "$0.45", "$11"],
        ["Total starter outlay", "—", "—", "—", "~$250-$350"],
      ],
    },
    {
      heading: "4. Healthy-share design",
      items: [
        { number: 1, title: "Definition", description: "Better-for-you = ≤200 cal/pack, ≤10g added sugar, ≤480mg sodium, OR ≥5g protein/whole-grain. Aligns with FDA 21 CFR 101.65(d)(2) framework where 'healthy' is claimed." },
        { number: 2, title: "Share target", description: "Start at 25% facings; expand to 35-40% once velocity tells you the workforce will buy it. Forced healthy-share without telemetry signal increases shrink." },
        { number: 3, title: "Placement", description: "Eye-level + reach-zone, top two rows for an adult workforce. Thorndike et al. (Harvard 2014/2020) — 10-30% velocity lift from prominent placement alone." },
        { number: 4, title: "Signage", description: "Green-leaf or 'better-for-you' sticker on selection card. FALCPA allergen statement visible on every package." },
      ],
    },
    {
      heading: "5. Pricing + margin math",
      items: [
        { label: "Margin target", value: "Aim for 50-55% gross margin blended across snacks + drinks + healthy-share. Snacks typically 55-65%; sodas 35-45%; energy 40-50%; healthy-share 45-55%." },
        { label: "Pricing reference", value: "Match local convenience-store pricing for branded SKUs (Cheez-It $1.75-$2.25, Snickers $2-$2.50, 12 oz Coke $1.50-$2, Red Bull $3.50-$4.50, KIND $2.50-$3)." },
        { label: "Round to $0.25", value: "$1.50, $1.75, $2.00, $2.25 — fewer pricing tiers reduces refund disputes and matches kiosk/credit-card displays." },
        { label: "Premium-placement uplift", value: "Airports, hotels, and 24-hour facilities support 25-50% pricing uplift over office baseline; reflect in your contract." },
      ],
    },
    {
      heading: "6. Labeling + compliance",
      items: [
        { check: "FALCPA + FASTER Act top-9 allergen labels on every SKU (milk, egg, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, sesame)" },
        { check: "FDA Nutrition Facts panel (21 CFR 101.9) including added-sugars line on every packaged SKU" },
        { check: "Calorie disclosure on machine front per 21 CFR 101.8 (vending machine calorie rule) for operators with 20+ machines" },
        { check: "Selection-card health/nutrient claims limited to those in 21 CFR 101.13 + 101.65" },
        { check: "Allergen summary card on the machine or in the alongside-signage" },
        { check: "Refrigerated machines temperature-monitored continuously per FDA Food Code 2022 §3-501.16" },
      ],
    },
    {
      heading: "7. Quality + refund controls",
      items: [
        { number: 1, title: "Refund flow", description: "Cashless: refund within 24 hours via app, SMS, or kiosk. Cash: refund slip honored at the next visit (max 7 days). Refund rate >2% triggers planogram + machine quality review." },
        { number: 2, title: "FIFO rotation", description: "Each restock pulls expiring product forward. Visible 'best by' check on every SKU placed." },
        { number: 3, title: "Pre-stock checks", description: "Inspect machine cleanliness, dispense flap, cooler temperature, payment reader operation. Photograph planogram for QBR documentation." },
        { number: 4, title: "Telemetry feedback loop", description: "Weekly velocity report drives the next restock. Top 20% of SKUs gets 60% of refacing budget; bottom 10% rotates out at the 4-week mark." },
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can route an operator to vetted distributor accounts, planogram baselines tuned by machine type and workforce, FALCPA-compliant labeling supply, and telemetry-driven planogram refresh — so the first stock-up converts to recurring uptime + margin, not a shelf of slow movers.",
    },
  ],
  footer:
    "Informational reference. Confirm allergen labeling, calorie disclosure scope, and tax/sales tax with counsel for your jurisdiction. Citations current at publication.",
});

console.log("wrote "+"how-to-stock-your-first-vending-machine");
