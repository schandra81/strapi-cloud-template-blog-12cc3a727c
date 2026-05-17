import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "coffee-machines-with-milk-frothers-for-offices",
  assetType: "pack",
  title: "Office Milk-Frother Machine Pack",
  subtitle: "Category match by office size, equipment shortlist, OCS contract scope, water filtration spec, alternative milk support",
  intro:
    "Office coffee with milk frothing (cappuccino, latte, flat white) raises the bar on equipment, plumbing, water, and supply complexity — and on the OCS contract that supports it. This pack bundles the five working documents (category match by office size, equipment shortlist, OCS contract scope, water filtration spec, alternative milk support) a workplace manager needs to procure and operate a barista-style office coffee program.",
  sections: [
    {
      heading: "1. Category match by office size",
      paragraph:
        "Milk-frothing equipment options span pump-based commercial superautomatic to traditional barista-style two-group espresso. Match equipment to team size + service expectation.",
      headers: ["Office size", "Daily milk drinks", "Equipment category", "Typical capex"],
      rows: [
        ["5-15", "5-25", "Single-serve w/ milk module (Nespresso Aguila, Lavazza Firma)", "$2.5K-$5K"],
        ["15-50", "20-100", "Superautomatic w/ milk system (Jura X8/X10, Saeco PerfectBrew, Necta Krea Touch)", "$5K-$10K"],
        ["50-150", "75-300", "Premium superautomatic (Schaerer Coffee Soul, Eversys Cameo, Franke A300)", "$10K-$22K"],
        ["150-400", "200-800", "Commercial superautomatic + barista support (Franke A600, Eversys Cameo X, Thermoplan B-MOOR)", "$22K-$50K"],
        ["400+", "500+", "Multi-machine barista-style espresso bar (La Marzocco Linea + grinder + milk-station)", "$30K-$80K + staffing"],
      ],
    },
    {
      heading: "2. Equipment shortlist — superautomatic with milk frother",
      items: [
        { label: "Jura X8 / X10 — Professional", value: "$5,500-$9,000. Bean-to-cup; built-in milk frother + cleaning; HACCP-aligned milk module. Supports 50-150 drinks/day. Pros: simple UI, premium experience, hot + cold milk. Cons: $600-$1,000/year maintenance." },
        { label: "Schaerer Coffee Soul / Skye", value: "$10K-$15K. Bean-to-cup w/ Best Foam milk system; supports oat/almond/soy. 100-300 drinks/day capacity. Pros: hospitality-grade build, excellent milk texture. Cons: higher capex." },
        { label: "Eversys Cameo / Cameo X", value: "$12K-$22K. Bean-to-cup + e'Foam milk system; supports alt-milks. 150-400 drinks/day. Pros: cafe-quality espresso + texture; remote monitoring. Cons: premium tier capex; service network not as broad as Jura/Schaerer." },
        { label: "Franke A300 / A400 / A600", value: "$10K-$30K. Bean-to-cup w/ FoamMaster; broad service network. 100-400 drinks/day. Pros: cafe-quality, robust service. Cons: footprint." },
        { label: "Thermoplan B-MOOR / Black & White CTM RS", value: "$22K-$45K. Bean-to-cup; supports 300-800 drinks/day; Starbucks-grade reliability. Pros: hospitality-grade build, high throughput. Cons: capex + footprint." },
        { label: "Nespresso Aguila 220 / 240 / 440", value: "$3,500-$8,000. Capsule + milk module; 30-100 drinks/day. Pros: simple, low maintenance. Cons: capsule waste + ongoing capsule cost; less customizable." },
        { label: "Lavazza Firma LF400", value: "$2,500-$4,000. Capsule + milk frother; 20-60 drinks/day. Pros: low capex, plug-and-play. Cons: capsule waste; smaller drink variety." },
      ],
    },
    {
      heading: "3. OCS contract scope — milk-frother-specific clauses",
      paragraph:
        "Beyond standard OCS clauses, milk-frother programs require specific scope around milk supply, alternative-milk support, milk-system cleaning, and dairy-handling SLA.",
      items: [
        { label: "Equipment lease + capex model", value: "Provider proposes lease ($X/month, no capex), capital-buy + service contract, or capital-included-in-supply pricing." },
        { label: "Milk supply scope", value: "Fresh dairy delivery cadence (daily / 2x/week); refrigerated storage included; cold-chain maintained at 35-40°F." },
        { label: "Alternative milk support", value: "Oat (Oatly Barista, Minor Figures), almond (Califia, Pacific Foods Barista), soy (Silk Original Soy), coconut. Machine compatibility attested." },
        { label: "Milk-system cleaning cadence", value: "Daily auto-clean cycle by user; weekly deep-clean by provider; quarterly milk-system replacement (gaskets, tubing) per HACCP." },
        { label: "Dairy-handling SLA", value: "Provider attests to milk-supply temperature monitoring + delivery within 24 hr of order; back-up dairy on-site for surge." },
        { label: "Service SLA", value: "Tier-1 (machine down): < 12 hr response, < 24 hr resolve. Tier-2 (milk-system fault): < 6 hr response, < 24 hr resolve (critical for office service)." },
        { label: "Preventive maintenance", value: "Monthly site visit; quarterly major PM; annual full refurb; milk-system replacement on cycle." },
        { label: "Water filtration", value: "Provider supplies + maintains water filter (Everpure, 3M H2 Series); replacement every 6-12 months or per gallon spec." },
        { label: "Reporting + sustainability", value: "Monthly drink consumption report; quarterly business review; sustainability metrics (Fair Trade %, recycled cup share, milk waste reduction)." },
        { label: "Insurance + indemnity", value: "$1M GL, $1M food product liability, additional-insured to office; equipment insurance provider-side." },
      ],
    },
    {
      heading: "4. Water filtration spec — milk-frother machines",
      paragraph:
        "Milk-frother + espresso machines are far more sensitive to water quality than drip brewers. Specify each parameter below.",
      items: [
        { label: "Total hardness (CaCO3)", value: "≤ 50 ppm (3 grains/gal) preferred; ≤ 100 ppm acceptable with regular descaling." },
        { label: "TDS (total dissolved solids)", value: "75-250 ppm for optimal extraction; below 75 ppm produces flat-tasting espresso, above 250 ppm risks scale." },
        { label: "pH", value: "6.5-7.5 neutral; soft + acidic water (< 6.0) corrodes brass boiler components." },
        { label: "Chlorine + chloramine", value: "≤ 0.1 ppm; activated-carbon filter removes; protects gaskets + machine internals." },
        { label: "Filter system", value: "Everpure 4FC-S + 7CB-5 (combo carbon + softening) or 3M HF Series; replacement every 6 months or 9,000 gal whichever first." },
        { label: "Backflow prevention", value: "Required per local plumbing code (typically RPZ or AVB)." },
        { label: "Drain", value: "1/2 in indirect drain within 5 ft; drip-tray drain hose for full-plumbed install." },
        { label: "Monitoring", value: "Annual water test by provider; replace filters based on actual gallons (smart-meter recommended for high-volume sites)." },
      ],
    },
    {
      heading: "5. Alternative milk support guide",
      paragraph:
        "Modern office coffee programs need to support oat, almond, soy, coconut, and sometimes pea milk. Each has different frothing behavior, supply considerations, and machine compatibility.",
      headers: ["Milk type", "Brand recommendations", "Frothing behavior", "Storage + waste"],
      rows: [
        ["Oat", "Oatly Barista, Minor Figures, Pacific Foods Barista, Chobani Oat Barista", "Excellent (designed for frothing)", "Shelf-stable + refrigerated open 7-10 days"],
        ["Almond", "Califia Farms Barista Blend, Pacific Foods Barista, Silk Original Almond", "Fair (lower protein, less micro-foam)", "Shelf-stable + refrigerated open 5-7 days"],
        ["Soy", "Silk Original Soy, Pacific Foods Soy, Vita Soy", "Good (similar to dairy)", "Shelf-stable + refrigerated open 7-10 days"],
        ["Coconut", "So Delicious Coconut Barista, Califia Coconut", "Fair (creamy but thin foam)", "Shelf-stable + refrigerated open 5-7 days"],
        ["Pea", "Ripple Plant Based Half-and-Half, Bolthouse Plant Protein", "Fair-good", "Refrigerated 7-10 days"],
        ["Whole dairy", "Local dairy or Horizon Organic", "Best (4% fat + casein creates microfoam)", "Refrigerated 3-5 days from delivery"],
      ],
    },
    {
      heading: "6. Operations + maintenance cadence",
      items: [
        { label: "Daily (office manager)", value: "Run auto-milk-system clean cycle; empty drip tray; replenish bean hopper; check refrigerated milk supply." },
        { label: "Weekly (provider or trained staff)", value: "Manual milk-system deep-clean (gasket, tubing); descale (if water hard); wipe down brew group; restock alternative-milk cartons." },
        { label: "Monthly (provider)", value: "Site visit: full milk-system inspection, descaling, water-filter check, bean hopper inspection, software update if applicable." },
        { label: "Quarterly (provider PM)", value: "Milk-system gasket/tubing replacement, full clean cycle, brew-group inspection, water filter replacement." },
        { label: "Annual (provider)", value: "Full refurb; heating-element + capacitor inspection; OCS contract review; sustainability + consumption report." },
        { label: "Service ticket SLA", value: "Tier-1 (machine down): < 12 hr response, < 24 hr resolve. Tier-2 (milk-system fault): < 6 hr response, < 24 hr resolve. Tier-3 (cosmetic): < 5 days." },
      ],
    },
    {
      heading: "7. Cost model — TCO with milk frothing (3-year)",
      headers: ["Office size", "Equipment + service (annual)", "Coffee + dairy + alt-milk (annual)", "Cups + supplies (annual)", "Total annual TCO", "Per-cup TCO"],
      rows: [
        ["15-25", "$3K-$5K", "$3K-$5K", "$1K", "$7K-$11K", "$0.95-$1.40"],
        ["25-50", "$5K-$8K", "$5K-$10K", "$1.5K-$2.5K", "$11.5K-$20.5K", "$0.75-$1.20"],
        ["50-100", "$8K-$14K", "$10K-$20K", "$2.5K-$5K", "$20.5K-$39K", "$0.65-$1.05"],
        ["100-200", "$14K-$22K", "$20K-$40K", "$5K-$10K", "$39K-$72K", "$0.55-$0.95"],
        ["200+", "$22K+", "$40K+", "$10K+", "$72K+", "$0.50-$0.85"],
      ],
    },
    {
      heading: "8. Provider selection scorecard",
      headers: ["Criterion", "Weight", "Sub-criteria"],
      rows: [
        ["Equipment fit + milk-system quality", "20%", "Milk texture; alt-milk support; volume capacity"],
        ["Service SLA + response time", "20%", "Tier-1 response; milk-system SLA; on-call coverage"],
        ["Coffee + dairy + alt-milk supply", "15%", "Roast variety; alt-milk brands; supply reliability"],
        ["Cost / TCO", "15%", "Equipment lease/purchase; supply pricing; total 3-year cost"],
        ["Sustainability + certifications", "10%", "Fair Trade %; alt-milk sustainability claims; cup recyclability"],
        ["Water filtration + maintenance", "5%", "Filter spec; replacement cadence; descaling discipline"],
        ["Reporting + transparency", "5%", "Consumption + sustainability reporting; QBR cadence"],
        ["Reference accounts", "5%", "Comparable-size office reference calls"],
        ["Insurance + business terms", "5%", "GL + food product liability; contract flexibility"],
      ],
    },
  ],
  footer:
    "This pack is informational. Office manager + facilities + procurement + sustainability lead should jointly review provider equipment + supply + service + alt-milk scope before contract execution. Water-quality spec is critical for milk-frother machine longevity; insist on provider-supplied + maintained filtration as part of the contract.",
});

console.log("wrote " + "coffee-machines-with-milk-frothers-for-offices");
