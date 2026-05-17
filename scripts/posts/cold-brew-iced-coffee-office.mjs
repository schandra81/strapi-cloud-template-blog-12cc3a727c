import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, costBreakdown, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("cold-brew-iced-coffee-office", [
  tldr({
    heading: "How should modern offices approach cold brew and iced coffee as part of office coffee service?",
    paragraph:
      "Cold brew and iced coffee have moved from niche to mainstream office coffee amenity over the last five years. The drivers: younger workforce preference (millennial + Gen Z consumption tilts cold over hot 2:1 in surveys), summer-season demand pull (May-September consumption doubles), specialty-coffee culture diffusion from third-wave coffee shops into office hospitality, and remote-return programs using premium amenity to draw employees back in-office. Three implementation paths: (1) RTD bottled cold brew and iced coffee in office fridge or refrigerated vending (Stok, La Colombe, Chameleon, Califia Farms, Riff, Stumptown, High Brew — $2.50-5.00 retail, no infrastructure beyond fridge); (2) on-tap cold brew kegerator systems for mid-to-large offices (50+ employees, $1,500-4,500 capital, $0.60-1.20 per cup, requires CO2 + nitro infrastructure and weekly keg swap); (3) in-house cold brew brewing (Toddy, OXO, Filtron commercial — $300-2,500 capital, $0.20-0.50 per cup, requires 12-24 hour cold-brew cycle and counter footprint). Modern hybrid offices increasingly combine RTD variety with on-tap cold brew or in-house brewing as flagship summer amenity. Iced coffee is the gateway — most offices start with iced coffee via Keurig over ice or RTD bottles, then expand to cold brew as employee demand validates. Per-cup cost ranges $0.20-5.00 depending on path; office demand pattern varies enormously by region, season, and workforce demographics.",
    bullets: [
      { emphasis: "Cold brew and iced coffee moved mainstream in last 5 years:", text: "Millennial + Gen Z consumption tilts cold over hot 2:1. Summer demand doubles. Specialty-coffee culture diffused into office hospitality. Remote-return programs use premium amenity to draw employees back in-office." },
      { emphasis: "Three implementation paths by office scale:", text: "RTD bottles in fridge (under 50 employees), on-tap kegerator (50-300, mid-volume premium), in-house brewing (Toddy + commercial, 50-500, premium amenity). Per-cup $0.20-5.00 depending on path." },
      { emphasis: "Iced coffee is the gateway:", text: "Most offices start with iced coffee via Keurig over ice or RTD bottles, then expand to cold brew as employee demand validates. Hybrid programs combine variety with flagship." },
    ],
  }),
  statStrip({
    heading: "Office cold brew and iced coffee benchmarks",
    stats: [
      { number: "2:1", label: "millennial + Gen Z cold vs hot", sub: "consumption preference surveys", accent: "blue" },
      { number: "2×", label: "summer demand increase", sub: "May-September peak", accent: "blue" },
      { number: "$0.20-5.00", label: "per-cup cost range", sub: "RTD bottle to in-house brew", accent: "blue" },
      { number: "50+ employees", label: "kegerator threshold", sub: "below this, RTD bottles dominant", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Cold brew and iced coffee implementation paths",
    sub: "Three paths with different capital, per-cup economics, and operational complexity. Match path to office scale, budget, and amenity positioning.",
    headers: ["Path", "Office scale fit", "Capital", "Per-cup cost", "Operational complexity"],
    rows: [
      ["RTD bottled (fridge or refrigerated vending)", "Any scale", "$0-500 (fridge only)", "$2.50-5.00", "Low — restock weekly"],
      ["RTD bottled (refrigerated vending paid)", "Any scale", "$3-7K vending machine", "$2.50-5.00 retail / $1.50-3.00 cost", "Low — operator-managed"],
      ["Keurig over ice (existing Keurig)", "5-100 employees", "Existing", "$0.45-0.75", "Very low — same supply chain"],
      ["On-tap cold brew kegerator (nitro + flat)", "50-300 employees", "$1,500-4,500", "$0.60-1.20", "Medium — weekly keg swap + CO2"],
      ["In-house cold brew brewing (Toddy commercial)", "50-500 employees", "$300-2,500", "$0.20-0.50", "Medium — 12-24 hr cycle + cold storage"],
      ["Premium coffee bar with cold brew offering", "200+ employees", "$15-50K", "$0.30-0.80", "High — barista + supply chain"],
    ],
  }),
  costBreakdown({
    heading: "Cold brew kegerator system — capital and operating cost (100-employee office, summer peak)",
    sub: "Typical mid-tier kegerator deployment at a 100-employee office consuming 60-90 cups per day during summer peak. Capital amortized over 5 years; operating includes keg supply, CO2, maintenance.",
    items: [
      { label: "Kegerator (nitro + flat tap, dual-zone)", amount: "$2,400", range: "$1,500-4,500 range depending on capacity + tap config" },
      { label: "Nitro + CO2 cylinder rental (annual)", amount: "$480", range: "$30-50/month combined nitro + CO2 cylinder rental + refills" },
      { label: "Cold brew keg supply (annual at 70 cups/day summer + 30 cups/day shoulder)", amount: "$8,400", range: "$0.65 per cup × ~13,000 cups annual = ~$8,400" },
      { label: "Cup + lid supply (annual)", amount: "$520", range: "$0.04 per cup × 13,000 = ~$520" },
      { label: "Maintenance + cleaning (quarterly system flush)", amount: "$600", range: "$150 per quarter × 4 = $600" },
      { label: "Capital amortization (5-year, $2,400)", amount: "$480", range: "$2,400 / 5 = $480 annual" },
    ],
    totalLabel: "Annual all-in cost (year 1)",
    totalAmount: "$10,880",
  }),
  specList({
    heading: "Office cold brew and iced coffee specifications",
    items: [
      { label: "RTD bottled cold brew supply mix", value: "Stok (nitro + flat variants), La Colombe (draft + ready-to-drink), Chameleon Cold-Brew, Califia Farms, Riff, Stumptown, High Brew, Starbucks Cold Brew. Stock 6-10 SKUs for variety. Mix supplier (operator + direct + Costco / Amazon). Track popular vs slow-moving; quarterly SKU refresh. $2.50-5.00 retail typical; bulk-cost $1.50-3.00." },
      { label: "Iced coffee gateway (Keurig over ice)", value: "Existing office Keurig + supply of K-Cups labeled for iced coffee (Green Mountain Brew Over Ice, Starbucks Iced Coffee, Dunkin' Iced Coffee K-Cups). Brew over ice into 16 oz cup. $0.45-0.75 per cup. Gateway approach for offices testing cold-coffee demand before larger investment." },
      { label: "On-tap cold brew kegerator (nitro + flat)", value: "Dual-zone or single-zone kegerator (Edgestar, Kegco commercial, KOMOS). Dual-tap (nitro + flat) supports variety. CO2 + nitro cylinder infrastructure required. Weekly keg swap (5-gallon Sankey-D coupler typical). $1,500-4,500 capital depending on capacity + finish. Premium amenity positioning at 50-300 employee offices." },
      { label: "Keg supply chain coordination", value: "Local roaster + cold brew specialist preferred (Stumptown, Counter Culture, La Colombe regional, independent roasters). Supplier delivers fresh kegs weekly; pickup empties. 5-gallon keg yields 50-60 cups at 12 oz. Coordinate with office manager on delivery + storage. Some operators offer integrated kegerator + supply contracts." },
      { label: "In-house cold brew brewing (Toddy commercial)", value: "Toddy Commercial Cold Brew System, OXO Compact Cold Brew, Filtron — commercial cold-brew steeping equipment. 12-24 hour cold steep cycle; produces concentrate diluted 1:1 or 1:2 with water + ice. Per-cup cost $0.20-0.50 (own coffee + filter consumables). Counter footprint + cold storage required. $300-2,500 capital." },
      { label: "Summer-season planogram pivot", value: "May-September: cold brew + iced coffee front-and-center, increase shelf share 50-100%. October-April: rebalance to hot coffee dominance + maintain limited cold brew presence. Modern office coffee programs telemetry-track summer demand swing; supplier coordination on summer keg + bottle volume." },
      { label: "Sustainability considerations", value: "RTD bottles produce single-use packaging waste. Aluminum cans (Stok, High Brew) more recyclable than PET bottles. Glass bottles (Stumptown, La Colombe) recyclable but heavier shipping carbon. Kegerator + in-house brewing reduces packaging waste; aligns with office sustainability goals. Coordinate with office sustainability office." },
      { label: "Pricing + free-amenity positioning", value: "Subsidized or free at premium offices (tech, finance, professional services). Paid at standard offices via refreshment service or refrigerated vending. RTD bottle $2.50-5.00 retail typical; kegerator pour $0.60-1.20 cost subsidized to free or $1-2 paid. Position matches office overall amenity positioning." },
      { label: "Refrigerated vending placement (paid model)", value: "RTD cold brew + iced coffee in refrigerated vending machine. Operator-managed supply + payment + replenishment. $2.50-5.00 retail typical. Modern offices increasingly combine free coffee + paid vending for variety; cold brew + iced coffee fit paid vending mix well." },
    ],
  }),
  tipCards({
    heading: "Five office cold brew and iced coffee mistakes",
    sub: "Each is documented in office coffee program reviews. All preventable with demand-aware planning.",
    items: [
      { title: "Deploying kegerator at 20-employee office", body: "Kegerator capital + per-cup cost doesn't pencil at sub-50 employee scale. 5-gallon keg yields 50-60 cups; daily consumption at small office produces stale keg + waste. Stick with RTD bottles or Keurig over ice at under 50 employees. Kegerator threshold typically 50+ employees with sustained cold-coffee demand." },
      { title: "Single cold brew SKU coverage", body: "One cold brew variety isn't variety. Stock 6-10 SKUs across nitro + flat + iced coffee + flavored. Multiple suppliers reach broader preferences. Quarterly SKU refresh based on consumption data. Modern office coffee programs use refreshment service for managed variety." },
      { title: "No summer-season planogram pivot", body: "May-September consumption doubles. Static planogram produces stockouts at peak + waste at shoulder. Pivot shelf share 50-100% toward cold brew + iced coffee during summer; rebalance October-April. Telemetry-driven seasonal coordination." },
      { title: "Ignoring sustainability of RTD packaging", body: "RTD bottles produce single-use packaging waste. PET bottles particularly criticized. Aluminum cans (Stok, High Brew) more recyclable; kegerator + in-house brewing reduce packaging waste. Coordinate with office sustainability office; build into office coffee plan." },
      { title: "Failing to capture iced-coffee gateway demand", body: "Most offices have iced-coffee demand before recognizing it. Add Keurig over ice + K-Cup iced coffee labels as low-friction test; track consumption; expand to cold brew RTD or kegerator when demand validates. Skipping gateway misreads demand and produces over- or under-investment." },
    ],
  }),
  inlineCta({
    text: "Want the office cold brew + iced coffee framework (RTD vs kegerator vs in-house brewing)?",
    buttonLabel: "Get the cold brew framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported office coffee program evolution from hot-coffee-only to hybrid hot + cold-brew + iced-coffee programs at small office, mid-size enterprise, and large enterprise accounts. Implementation reviews include RTD bottle supply mix coordination, kegerator capital evaluation, in-house brewing equipment selection, and summer-season planogram pivots based on telemetry data and office manager feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How big does an office need to be for a cold brew kegerator?", answer: "50+ employees with sustained cold-coffee demand. Below 50, RTD bottles or Keurig over ice. 5-gallon keg yields 50-60 cups at 12 oz; small offices produce stale keg + waste. Premium amenity positioning at 50-300 employee offices; in-house brewing or premium coffee bar at 200+.", audience: "Office Managers" },
      { question: "What cold brew brands should we stock?", answer: "Stok, La Colombe, Chameleon Cold-Brew, Califia Farms, Riff, Stumptown, High Brew, Starbucks Cold Brew. Stock 6-10 SKUs across nitro + flat + iced coffee + flavored variants. Mix supplier (operator + direct + Costco / Amazon). Local roasters preferred for kegerator supply.", audience: "Office Managers" },
      { question: "What's the per-cup cost difference between options?", answer: "RTD bottles $2.50-5.00 retail / $1.50-3.00 cost. Keurig over ice $0.45-0.75. Kegerator pour $0.60-1.20 cost. In-house brewing (Toddy commercial) $0.20-0.50 cost. Premium coffee bar $0.30-0.80 cost. Match to budget + amenity positioning.", audience: "Office Managers" },
      { question: "Should we use refrigerated vending or open fridge?", answer: "Open fridge for free-amenity positioning at premium offices. Refrigerated vending for paid model at standard offices. Modern offices increasingly combine both — free coffee + paid vending for variety. Cold brew + iced coffee fit paid vending mix well; RTD bottles typical SKUs.", audience: "Operators" },
      { question: "How does summer-season demand affect planning?", answer: "May-September consumption doubles. Pivot shelf share 50-100% toward cold brew + iced coffee during summer; rebalance October-April. Static planogram produces stockouts at peak + waste at shoulder. Telemetry-driven seasonal coordination with operator + supplier on summer keg + bottle volume.", audience: "Operators" },
      { question: "What does kegerator infrastructure need?", answer: "Dual-zone or single-zone kegerator + CO2 + nitro cylinder + weekly keg supply chain. CO2 + nitro cylinder rental $30-50/month. Local roaster + cold brew specialist preferred for keg supply. Coordinate with office manager on delivery + storage. Some operators offer integrated kegerator + supply contracts.", audience: "Facilities" },
      { question: "Is iced coffee the same as cold brew?", answer: "No. Iced coffee = hot-brewed coffee poured over ice (faster, more acidic, traditional flavor). Cold brew = coffee grounds steeped in cold water 12-24 hours (smoother, less acidic, higher caffeine concentration). Most offices offer both; cold brew the premium positioning, iced coffee the broader accessibility.", audience: "Office Managers" },
      { question: "What about sustainability?", answer: "RTD bottles produce single-use packaging waste. Aluminum cans (Stok, High Brew) more recyclable than PET. Kegerator + in-house brewing reduce packaging. Coordinate with office sustainability office on packaging mix; build into office coffee plan. Sustainability-leading offices favor kegerator + in-house over RTD.", audience: "Sustainability Officers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SCA — Specialty Coffee Association", url: "https://sca.coffee/", note: "Industry trade association covering specialty coffee + cold brew standards" },
      { label: "NCA — National Coffee Association coffee consumption trends", url: "https://www.ncausa.org/Industry-Resources/Market-Research", note: "Industry trade association covering coffee consumption data + cold brew growth" },
      { label: "Keurig — commercial coffee solutions + iced K-Cup", url: "https://www.keurig.com/commercial", note: "Keurig commercial coffee maker line + iced coffee K-Cup variants" },
      { label: "BOMA — Building Owners and Managers Association office amenity", url: "https://www.boma.org/", note: "Property owner standards covering office amenity coffee positioning" },
      { label: "NAMA — refreshment service + cold brew operator practice", url: "https://www.namanow.org/", note: "Industry guidance on office refreshment service including cold brew + iced coffee" },
    ],
  }),
  relatedGuides({
    heading: "Related office coffee and refreshment guides",
    items: [
      { eyebrow: "Sister guide", title: "Keurig office coffee solutions", description: "Keurig commercial tiers, K-Cup variety, and sustainable alternatives across office sizes.", href: "/blog-category/keurig-office-coffee-solutions" },
      { eyebrow: "Operations", title: "Office coffee services", description: "Coffee infrastructure for offices, dealerships, and waiting areas.", href: "/office-coffee-services" },
      { eyebrow: "Hub", title: "All blog category resources", description: "Coffee solutions, office amenity, vending integration patterns.", href: "/blog-category" },
    ],
  }),
]);
process.exit(0);
