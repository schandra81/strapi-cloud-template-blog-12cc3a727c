import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "where-to-buy-vending-machines",
  assetType: "checklist",
  title: "Vending Equipment Buying Channel Framework",
  subtitle: "OEM vs dealer vs refurbisher vs auction, warranty checklist, and condition assessment",
  intro:
    "Use this framework to choose between four buying channels for your next vending machine purchase. Each channel has a distinct risk + price profile; an experienced operator typically uses 2-3 channels depending on machine type and route economics.",
  sections: [
    {
      heading: "Four buying channels — comparison",
      headers: ["Channel", "Price (typical)", "Warranty", "Risk profile", "Best for"],
      rows: [
        ["Factory-direct OEM", "$5,500-$10,000 new", "1-3 year parts + labor", "Lowest — current model, current parts, current support", "Flagship accounts; new-format programs"],
        ["Authorized dealer / distributor", "$5,000-$9,500 new; $3,500-$6,500 certified pre-owned", "OEM warranty pass-through + dealer install", "Low — dealer accountability + OEM support", "Most operators most of the time"],
        ["Refurbisher", "$2,800-$5,500 refurb", "30-90 day; sometimes 1 year", "Medium — depends on refurbisher reputation", "Cost-sensitive stops; replacement units"],
        ["Auction / liquidation / online marketplace", "$500-$3,000 as-is", "None", "Highest — sight-unseen risk; no recourse", "Experienced operators with in-house service capability"],
      ],
    },
    {
      heading: "OEMs serving the US market (current as of 2026)",
      items: [
        { label: "Crane Merchandising Systems", value: "Snack (167 / 168 series), beverage (501E series), Merchant series. Cantaloupe is sister-co; bundled telemetry common." },
        { label: "AMS (Automated Merchandising Systems)", value: "Sensit 3, Outsider, Combo. WV-based; long history with shelving + glass-front." },
        { label: "Royal Vendors", value: "Beverage specialist (G-III, Vision Vendor); GA-based; cold-drink stronghold." },
        { label: "USI / Wittern Group", value: "Snack, beverage, combo; IA-based; full-line including small footprint." },
        { label: "Seaga", value: "Combo, snack, specialty; IL-based; value-tier through full-feature." },
        { label: "Federal Industries (Standex)", value: "Glass-door refrigerated grab-and-go; cold-chain specialist." },
        { label: "365 Retail Markets / Avanti Markets / Three Square Market", value: "Micro-market kiosk + cooler systems (not traditional vending OEMs)." },
        { label: "PicoCool / AWM / VMC / Sandenvendo", value: "International OEMs distributed via US dealers; check parts-network availability." },
      ],
    },
    {
      heading: "Warranty checklist — what to verify before signing",
      paragraph:
        "Warranty terms vary widely. The headline 'one-year warranty' is meaningless if it excludes refrigeration, payment systems, or labor. Read the exclusions.",
      items: [
        { check: "Cabinet + structural — typically 1-3 years; verify exclusions on cosmetic damage." },
        { check: "Refrigeration system — typically 1-5 years compressor, 1 year evaporator + parts; verify R-290 vs R-134a refrigerant coverage." },
        { check: "Payment system (card reader) — typically 1 year hardware; subscription separate." },
        { check: "Telemetry hardware — typically 1 year; subscription separate." },
        { check: "Selection mechanism + motors — typically 1 year." },
        { check: "Labor coverage — most factory warranties parts-only; on-site labor is extra. Verify per-call rate ($75-$150/hr typical)." },
        { check: "Transferability — warranty often non-transferable to a second owner; verify before buying refurb." },
        { check: "Claim process — RMA + lead time for replacement parts; sub-5-day part shipping is the industry standard." },
      ],
    },
    {
      heading: "Condition assessment — refurb + auction machines",
      paragraph:
        "Refurb + auction purchases require hands-on inspection. Use the 28-point pre-purchase inspection (separate asset). The summary below highlights the highest-risk inspection items.",
      items: [
        { check: "Cabinet rust / structural damage — refurbishers often paint over rust. Inspect under floor + behind back panel." },
        { check: "Refrigeration system — measure internal temperature after a 4-hour run; ≤ 38°F is the floor for cold-drink + grab-and-go." },
        { check: "MDB controller generation — pre-2010 controllers won't support PCI-DSS v4.0 cashless retrofit." },
        { check: "Card reader generation — verify current PCI-compliant model; older readers reach end-of-life in 2025-2026." },
        { check: "Refrigerant type — R-22 (pre-2010) is EPA phased-out; R-290 propane requires charge ≤ 150 g per UL 60335-2-89." },
        { check: "Compressor age + manufacturer — Embraco / Tecumseh / Aspera units have known service life curves; verify hours of operation if known." },
        { check: "UL 541 or UL 751 label intact — missing label is a red flag." },
        { check: "Test vend on every row before purchase; document jams + double-drops." },
      ],
    },
    {
      heading: "Auction / online marketplace red flags",
      items: [
        { check: "'Working when removed' is not a warranty — typical auction disclaimer; machine may have failed in storage." },
        { check: "Seller can't power up the machine for inspection — high probability of compressor or electrical failure." },
        { check: "Photos only — no opportunity for hands-on inspection. Buy only if you can afford to write off the purchase." },
        { check: "Missing payment systems — typical at auction. Budget $300-$600 per machine to retrofit cashless." },
        { check: "Title-of-origin or bill-of-sale missing — possible stolen-equipment risk; verify with local PD before resale." },
        { check: "Refurbisher 'restored' for under $2,500 on a glass-front beverage unit — likely cosmetic restoration only; compressor original." },
      ],
    },
    {
      heading: "Total cost-of-ownership (TCO) framing",
      paragraph:
        "Sticker price is 50-70% of 5-year TCO. Below is a representative 5-year TCO for a single beverage machine on a 50-employee stop, comparing channels.",
      headers: ["Cost line", "OEM-new", "Dealer-CPO", "Refurbisher", "Auction"],
      rows: [
        ["Purchase + freight", "$7,500", "$5,500", "$3,800", "$1,500"],
        ["Cashless retrofit", "$0 (included)", "$0 (included)", "$400", "$500"],
        ["Telemetry retrofit", "$0 (included)", "$0 (included)", "$300", "$300"],
        ["Year-1 service (warranty)", "$0", "$0", "$0-$200", "$300-$800"],
        ["Years 2-5 service (avg $400/yr)", "$1,600", "$1,600", "$1,800", "$2,800"],
        ["Refrigerant top-off (1x in 5 yr)", "$150", "$150", "$300", "$500"],
        ["TCO 5-year", "$9,250", "$7,250", "$6,600-$6,800", "$5,900-$6,400"],
      ],
    },
  ],
  footer:
    "This framework is informational and not financial advice. Equipment cost, warranty terms, and refrigerant + telemetry costs vary by region and supplier; obtain 3 quotes before any single-channel commitment.",
});

console.log("wrote "+"where-to-buy-vending-machines");
