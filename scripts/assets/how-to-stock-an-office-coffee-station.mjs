import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-stock-an-office-coffee-station",
  assetType: "template",
  title: "Office Coffee Station Stocking Framework",
  subtitle: "Par-stock template + supplier shortlist + multi-roast planogram + accessory inventory",
  intro:
    "An office coffee station serving 50-300 employees consumes roughly 1.5-2.5 cups per head per day on a hybrid schedule (Tue/Wed/Thu 60-75% of in-office, Mon/Fri 30-45%). This fillable template gives a facility manager + office host a par-stock template, supplier shortlist, multi-roast planogram, and accessory inventory — all tied to telemetry-driven replenishment by the operator. Calibrate at install + refresh quarterly.",
  sections: [
    {
      heading: "1. Sizing inputs — fill in",
      items: [
        { label: "Average daily population (ADP)", value: "[NUMBER] — in-office headcount averaged across the week, not badge roster" },
        { label: "Hybrid pattern", value: "[%] Mon, [%] Tue, [%] Wed, [%] Thu, [%] Fri" },
        { label: "Cups per head per day", value: "1.5-2.5 (low: 1.5 / moderate: 1.9 / high: 2.5)" },
        { label: "Coffee form ratio", value: "[%] traditional drip / [%] single-serve pod / [%] bean-to-cup / [%] espresso / [%] cold brew / [%] specialty" },
        { label: "Service days per week", value: "[NUMBER] — operator replenishment cadence (typical 1-3 visits/week telemetry-driven)" },
      ],
    },
    {
      heading: "2. Par-stock template — weekly baseline",
      paragraph:
        "Par-stock = weekly consumption × safety stock factor (1.3-1.5 for telemetry-driven sites; 1.7-2.0 for paper-route sites). Refresh quarterly via telemetry from operator (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, AWM Smart Shelf, or equivalent).",
      headers: ["Item", "Unit", "Weekly consumption (sample 100 ADP)", "Par stock"],
      rows: [
        ["Whole bean blend — house roast", "lb", "12-15", "20"],
        ["Whole bean — single origin", "lb", "4-6", "8"],
        ["Whole bean — decaf", "lb", "1.5-2.5", "4"],
        ["Single-serve pods — house roast", "ct", "300-450", "600"],
        ["Single-serve pods — decaf", "ct", "30-50", "75"],
        ["Single-serve pods — flavored", "ct", "75-150", "200"],
        ["Single-serve pods — tea", "ct", "60-100", "150"],
        ["Single-serve pods — hot cocoa", "ct", "20-40", "60"],
        ["Espresso beans", "lb", "3-5", "8"],
        ["Milk — dairy whole / 2%", "gal", "4-6", "8"],
        ["Milk — oat / almond / soy", "qt", "6-10 each", "12"],
        ["Sugar / sweetener packets", "pkt", "300-500 total", "800"],
        ["Stir sticks", "ea", "300-500", "800"],
        ["12 oz cups + lids", "ea", "300-500", "800"],
        ["16 oz cups + lids", "ea", "150-300", "500"],
      ],
    },
    {
      heading: "3. Supplier shortlist — by category",
      paragraph:
        "Operator sources from one or more of these distributors / roasters. Confirm regional availability + certification (Fair Trade, Rainforest Alliance, USDA Organic) per program standards.",
      items: [
        { label: "National roasters (whole bean / pod)", value: "Peet's Coffee, Starbucks Office, Lavazza, illy, Caribou, Dunkin' (Smucker), Counter Culture, Stumptown, Intelligentsia, La Colombe, Allegro, Green Mountain (Keurig Dr Pepper)." },
        { label: "Single-serve pod brands", value: "Keurig K-Cup (KDP), Flavia by Mars (Lavazza, Bright Tea Co, Marley), Nespresso Professional, Tassimo, Bunn MyCafe pod." },
        { label: "Tea brands", value: "Twinings, Bigelow, Harney & Sons, Tazo, Numi (organic), Mighty Leaf, Republic of Tea, Yogi." },
        { label: "Hot cocoa", value: "Ghirardelli Premium, Swiss Miss, Land O'Lakes, Starbucks Hot Cocoa." },
        { label: "Plant-based milk", value: "Califia Farms, Oatly Pro, Pacific Foods Barista, Silk, Chobani Oat, Minor Figures." },
        { label: "Sweeteners", value: "Sugar in the Raw, Domino, Splenda, Equal, Stevia in the Raw, Truvia, monk-fruit blends." },
        { label: "Distributors (foodservice)", value: "Sysco, US Foods, Performance Food Group, Restaurant Depot — typical for office coffee bundled supply." },
      ],
    },
    {
      heading: "4. Multi-roast planogram — diverse-palate baseline",
      paragraph:
        "A 6-8 SKU coffee planogram serves more diverse palates than a single house blend. Telemetry tunes the mix at 30 + 90 days.",
      items: [
        { label: "Position 1 — House blend (medium)", value: "Default; broadest appeal; 35-45% of volume." },
        { label: "Position 2 — Dark roast / espresso", value: "10-15% of volume; espresso bar where machine supports." },
        { label: "Position 3 — Light roast / single origin", value: "10-15% of volume; rotate origin quarterly (Ethiopian, Colombian, Kenyan, Sumatran)." },
        { label: "Position 4 — Decaf", value: "5-8% of volume; medium roast preferred." },
        { label: "Position 5 — Flavored (vanilla, hazelnut, caramel)", value: "10-15% of volume; rotate seasonal (pumpkin spice Q4, peppermint mocha Q4-Q1)." },
        { label: "Position 6 — Tea (black, green, herbal)", value: "8-12% of volume; minimum 3 SKUs." },
        { label: "Position 7 — Hot cocoa / specialty", value: "3-5% of volume." },
        { label: "Position 8 — Cold brew / nitro / iced (seasonal)", value: "Variable; 5-15% in Q2-Q3 at temp-sensitive sites." },
      ],
    },
    {
      heading: "5. Accessory + condiment inventory",
      items: [
        { check: "Cups: 12 oz hot, 16 oz hot, 8 oz cold; recyclable / compostable per facility sustainability standard." },
        { check: "Lids: matched to cup size; sip-through preferred for office use." },
        { check: "Sleeves: corrugated; printed-brand optional." },
        { check: "Stir sticks: wood (compostable) preferred over plastic for ESG-aligned programs." },
        { check: "Napkins: 1-ply standard or 2-ply for premium; recycled content per facility sustainability standard." },
        { check: "Sweeteners: white sugar, raw sugar, no-calorie sweetener (sucralose, stevia, aspartame, monk fruit) — 4 minimum SKUs." },
        { check: "Creamers: liquid dairy (whole, 2%), plant-based (oat, almond, soy), powdered non-dairy (for low-refrigeration sites)." },
        { check: "Flavored syrups (where station includes self-serve): vanilla, caramel, hazelnut — Torani, Monin, or DaVinci." },
        { check: "Cleaning supplies: per the Coffee Equipment Cleaning Protocol Template (separate asset)." },
        { check: "PPE for cleaning chemicals: nitrile gloves + eye protection per 29 CFR 1910.1200." },
      ],
    },
    {
      heading: "6. Replenishment cadence",
      headers: ["Service tier", "Trigger", "Operator action"],
      rows: [
        ["Telemetry-driven (smart equipment)", "Par-stock < 40% for any SKU OR consumable < 25%", "Restock within 5 business days; auto-PO where ERP-integrated"],
        ["Scheduled (paper route)", "Calendar-based 1-2x/week", "Service tech tops off per planogram; documents on ticket"],
        ["On-demand", "Office host ticket via operator app / portal", "Restock within 5 business days"],
        ["Outage / equipment fault", "Telemetry alert OR office host report", "<24 hr response, <24 hr resolution"],
      ],
    },
    {
      heading: "7. Quarterly review checklist",
      items: [
        { check: "Telemetry per-SKU velocity report from operator (last 90 days)." },
        { check: "Par-stock recalibrated; SKUs at < 50% velocity flagged for substitution." },
        { check: "Planogram refresh: rotate single-origin + flavored + seasonal SKUs." },
        { check: "Supplier shortlist refreshed for certification + price + lead time." },
        { check: "Office host feedback survey (3-5 questions) at quarterly cadence." },
        { check: "ESG / sustainability attribute review (Fair Trade, Rainforest Alliance, USDA Organic %) where program scope requires." },
      ],
    },
  ],
  footer:
    "Template only — not nutrition or operational advice. Calibrate consumption + supplier choices at install + refresh quarterly via operator telemetry. LetUsVending is equipped to coordinate office-coffee operators with telemetry-driven par-stock, multi-roast planograms, and ESG-aligned sourcing.",
});

console.log("wrote "+"how-to-stock-an-office-coffee-station");
