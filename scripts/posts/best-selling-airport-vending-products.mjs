import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("best-selling-airport-vending-products", [
  tldr({
    heading: "Which SKUs are the best-selling products at airport vending — and how do gate area, restroom-adjacent, pre-security, and arrivals zones each drive distinct planogram velocity at modern airport-specialty operator scope?",
    paragraph:
      "Best-selling airport vending products cluster by concourse zone — each zone serves a distinct traveler demand profile and drives distinct planogram velocity. At post-security gate area + concourse (transit-delay + business-traveler demand): bottled water (still + sparkling at premium share), single-serve premium snack (Skinny Pop, KIND bar, RXBAR, Larabar, jerky), caffeinated beverage (energy drink Monster + Red Bull + Bang + Celsius, ready-to-drink coffee Starbucks + La Colombe + Stumptown, ready-to-drink tea), phone charger cable USB-C / Lightning, portable power bank, wired earbuds + Bluetooth earbuds, mask + hand sanitizer (post-COVID continued share). At restroom-adjacent: travel toothbrush + travel toothpaste, deodorant, contact lens solution, feminine hygiene (where not provided free), face mask, hand sanitizer (post-security size). At pre-security checkpoint: 3-1-1 quart bag, travel-size shampoo / conditioner / lotion (under 3.4 oz), TSA-approved toiletry kit. At arrivals + departure concourse: neck pillow, sleep mask, ear plugs, compression socks, small souvenir + branded merchandise, book + magazine. The top 20 SKUs typically generate 60-80 percent of revenue at airport vending; per-SKU velocity drives quarterly planogram refinement at modern operator scope. Pricing reflects airport markup framework (typically 30-80 percent over street pricing depending on concession framework + airport authority pricing rules + brand-partnership scope). Modern airport-specialty operators (HMSHost, Paradies Lagardère, OTG Management, SSP America) surface per-SKU velocity data on operator dashboard for quarterly refinement with concessions team + airport authority.",
    bullets: [
      { emphasis: "Best-sellers cluster by concourse zone:",
        text: "Gate / concourse: bottled water + premium snack + caffeinated beverage + phone charger + earbuds + mask. Restroom-adjacent: travel toothbrush + deodorant + contact solution + feminine hygiene. Pre-security: 3-1-1 bag + travel-size toiletries. Arrivals + departure: neck pillow + sleep mask + ear plugs + compression socks + souvenir." },
      { emphasis: "Top 20 SKUs generate 60-80 percent of revenue:",
        text: "Per-SKU velocity drives quarterly planogram refinement at modern operator scope. Underperforming SKUs swapped; over-performing SKUs replicated to similar zone placements. Modern operator dashboards surface per-SKU per-placement velocity for refinement." },
      { emphasis: "Pricing reflects airport markup framework:",
        text: "Typically 30-80 percent markup over street pricing depending on concession framework + airport authority pricing rules + brand-partnership scope. Modern operators support Honest-Pricing-style transparency where appropriate. Coordinate pricing with airport authority concession office at install + annual rate review." },
    ],
  }),
  statStrip({
    heading: "Airport vending best-seller benchmarks",
    stats: [
      { number: "60-80%", label: "revenue from top 20 SKUs", sub: "across modern airport vending", accent: "blue" },
      { number: "30-80%", label: "markup over street pricing", sub: "per airport concession framework", accent: "blue" },
      { number: "Quarterly", label: "planogram refinement cadence", sub: "with concessions + airport authority", accent: "blue" },
      { number: "24/7", label: "traveler demand profile", sub: "red-eye + early-morning departures", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Best-selling airport vending SKUs by concourse zone",
    sub: "Each concourse zone drives distinct best-seller profile. Modern airport-specialty operators surface per-SKU per-placement velocity data for quarterly refinement.",
    headers: ["Concourse zone", "Top 5 SKUs", "Typical traveler demand", "Planogram emphasis"],
    rows: [
      ["Post-security gate area + concourse", "Bottled water, energy drink, phone charger, premium snack, mask", "Transit-delay + business-traveler", "Hydration + caffeine + connectivity"],
      ["Restroom-adjacent + concourse", "Travel toothbrush, deodorant, contact solution, feminine hygiene, hand sanitizer", "Hygiene + freshen-up", "Personal care + hygiene"],
      ["Pre-security checkpoint", "3-1-1 bag, travel-size toothpaste, travel-size lotion, TSA-approved kit, travel-size hand sanitizer", "TSA-compliance + last-minute prep", "TSA-compliant + travel-size only"],
      ["Arrivals + departure concourse", "Neck pillow, sleep mask, ear plugs, compression socks, branded souvenir", "Comfort + sleep + souvenir", "Comfort + gift + late-night"],
      ["Airline crew break + ready room", "Coffee RTD, energy drink, healthy snack, water, granola bar", "Quick-turn sustenance + caffeine", "Quick-meal + healthy + caffeine"],
    ],
  }),
  specList({
    heading: "Airport vending best-seller SKU specifications by zone",
    items: [
      { label: "Post-security gate area + concourse — beverage SKUs", value: "Bottled water (Dasani + Aquafina + Smartwater + Fiji premium share at 18-25 percent), sparkling water (Bubly + LaCroix + Spindrift), ready-to-drink coffee (Starbucks Frappuccino + Doubleshot + La Colombe + Stumptown), energy drink (Monster + Red Bull + Bang + Celsius + Reign + 5-Hour Energy), ready-to-drink tea (Pure Leaf + Gold Peak + Honest), sports drink (Gatorade + Powerade + BodyArmor). Per-SKU velocity drives refinement; modern operator dashboards surface." },
      { label: "Post-security gate area + concourse — snack SKUs", value: "Single-serve premium snack (Skinny Pop + KIND bar + RXBAR + Larabar + jerky like Krave + Country Archer + Chomps), traditional snack at premium pricing (Lay's + Doritos + Cheetos), chocolate bar (Snickers + Kit Kat + Twix + Reese's), nuts (Planters mixed nuts + almonds + cashews), trail mix (Sahale + Sahale Glazed + Nature's Path). Higher-protein + healthy-positioning SKUs perform well at modern airport scope." },
      { label: "Post-security gate area + concourse — electronics + connectivity SKUs", value: "Phone charger cable (USB-C + Lightning + USB-A + multi-tip), portable power bank (5,000-20,000 mAh capacity), wired earbuds (Apple + Samsung + JBL), Bluetooth earbuds (Jabra + JBL + Sony + Anker), AA + AAA + 9V batteries, USB-C charging brick + travel adapter. Secure rotary or robotic-arm dispense mechanism for high-value SKUs. PCI-DSS Level 1 + camera coverage + anti-theft framework." },
      { label: "Restroom-adjacent — personal care + hygiene SKUs", value: "Travel toothbrush + travel toothpaste (Colgate + Crest), deodorant (Old Spice + Dove + Secret), contact lens solution + case, lip balm + sunscreen, hand sanitizer (post-security size), face mask (KN95 + N95 + surgical), eye drops + lubricant. Helix coil or hybrid mechanism. ADA + multi-language signage at modern accessibility scope." },
      { label: "Restroom-adjacent — feminine hygiene SKUs (where not provided free)", value: "Tampon (regular + super + Tampax + Playtex + organic), pad (regular + super + overnight + Always + Stayfree), panty liner, menstrual cup (where supported). Modern airport authority programs run free or low-cost dispensing at airport restrooms under public-restroom dignity laws (CA AB 367, NY equivalents). Coordinate with airport authority at design phase." },
      { label: "Pre-security checkpoint — TSA-compliant SKUs", value: "3-1-1 quart bag (TSA-approved size), travel-size shampoo / conditioner / lotion / face wash / sunscreen / hand sanitizer (under 3.4 oz per TSA), TSA-approved toiletry kit (pre-packaged). Don't deploy 3-1-1 bag SKUs post-security (wrong demand). Pre-security checkpoint + outbound concourse + boarding pass scan area placement only." },
      { label: "Arrivals + departure concourse — comfort SKUs", value: "Neck pillow (memory foam + inflatable), sleep mask, ear plugs (foam + silicone), compression socks (medical-grade + travel-grade), blanket (travel-size), slipper sock. Bulk-item dispense mechanism (some items oversized for standard helix coil). Seasonal demand uplift on red-eye + international long-haul concourses. Pricing reflects airport markup framework." },
      { label: "Arrivals + departure concourse — gift + souvenir SKUs", value: "Destination-themed item (city or state-themed magnet + postcard + keychain + mini-souvenir), book + magazine (current-stock paperback + magazine), last-minute gift (jewelry + small electronics gift + travel jewelry), branded merchandise (airport-themed + destination-themed). Branded concession partnership at branded airport concession scope. Verify with airport authority + brand-partnership team." },
      { label: "Airline crew + airport worker break SKUs", value: "Coffee RTD (Starbucks + La Colombe + Stumptown), energy drink (Monster + Red Bull + Celsius), healthy snack (KIND bar + RXBAR + jerky), bottled water (Dasani + Aquafina + Smartwater), granola bar (Quaker + Nature Valley + KIND), protein bar (Quest + Pure Protein + RXBAR), single-serve nuts (Planters). Quick-turn sustenance focus; coordinate with airline operations + airport worker representatives at design." },
      { label: "Pricing + per-SKU velocity refinement", value: "Pricing reflects airport markup framework (typically 30-80 percent over street pricing depending on concession framework + airport authority pricing rules + brand-partnership scope). Per-SKU velocity drives quarterly refinement with concessions team + airport authority. Underperforming SKUs swapped; over-performing SKUs replicated. Modern operators surface velocity data on operator dashboard." },
    ],
  }),
  tipCards({
    heading: "Seven airport vending best-seller deployment practices",
    sub: "All implementable with airport-specialty operator + airport authority concession office + brand-partnership team coordination at install + quarterly refinement.",
    items: [
      { title: "Match SKU mix to concourse zone demand profile", body: "Gate / concourse: hydration + caffeine + connectivity + premium snack. Restroom-adjacent: personal care + hygiene + feminine hygiene. Pre-security: TSA-compliant only. Arrivals + departure: comfort + gift + souvenir. Airline crew + airport worker break: quick-meal + healthy + caffeine. Don't mix zone profiles." },
      { title: "Surface per-SKU velocity data for quarterly refinement", body: "Modern operator dashboards surface per-SKU per-placement velocity data for quarterly refinement with concessions team + airport authority. Underperforming SKUs swapped; over-performing SKUs replicated to similar zone placements. Build refinement cadence into operator service contract." },
      { title: "Premium-position bottled water + sparkling water at gate area", body: "Bottled water at premium share (Dasani + Aquafina + Smartwater + Fiji at 18-25 percent revenue share). Sparkling water (Bubly + LaCroix + Spindrift) at growing share. Hydration is highest-velocity beverage category at gate / concourse. Modern operators maintain at least 4-6 SKUs across water category." },
      { title: "Plan caffeinated beverage scope for transit-delay demand", body: "Energy drink (Monster + Red Bull + Bang + Celsius + Reign) + ready-to-drink coffee (Starbucks Frappuccino + Doubleshot + La Colombe + Stumptown) at gate / concourse capture transit-delay + business-traveler demand. Multiple SKUs across caffeine spectrum (low + medium + high caffeine + sugar-free variants)." },
      { title: "Coordinate electronics SKU with anti-theft framework", body: "Phone charger + power bank + earbuds are high-value SKUs requiring secure rotary or robotic-arm dispense mechanism + camera coverage + anti-theft framework. PCI-DSS Level 1 payment compliance + theft-prevention scope at modern operator standard. Verify at RFP." },
      { title: "Don't deploy 3-1-1 SKUs post-security", body: "TSA-compliant travel-size SKUs (3-1-1 quart bag + travel-size toiletries under 3.4 oz + TSA-approved kit) are pre-security demand only. Post-security travelers have cleared TSA and don't need 3-1-1 compliance. Don't deploy at gate / concourse — wrong demand profile + dead inventory." },
      { title: "Coordinate gift + souvenir SKUs with brand-partnership team", body: "Destination-themed item + branded merchandise at arrivals + departure concourse benefits from brand-partnership coordination at branded airport concession scope. Coordinate with airport authority + brand-partnership team at design phase. Standalone gift / souvenir without brand alignment loses revenue lift." },
    ],
  }),
  decisionTree({
    heading: "Which SKU mix should we deploy at this airport vending placement?",
    question: "Is the placement at post-security gate / concourse OR restroom-adjacent OR pre-security OR arrivals + departure OR airline crew + airport worker break?",
    yesBranch: {
      title: "Match SKU mix to concourse zone.",
      description: "Gate / concourse: bottled water + sparkling water + caffeinated beverage + premium snack + phone charger + earbuds + mask + hand sanitizer. Restroom-adjacent: travel toothbrush + deodorant + contact solution + feminine hygiene where not free. Pre-security: 3-1-1 bag + travel-size toiletries + TSA kit only. Arrivals + departure: neck pillow + sleep mask + ear plugs + compression socks + souvenir. Crew / worker: coffee RTD + energy drink + healthy snack + water + protein bar.",
      finalTone: "go",
      finalLabel: "MATCH SKU MIX TO ZONE",
    },
    noBranch: {
      title: "Coordinate placement with airport authority concession office.",
      description: "Unclear concourse zone or non-standard placement — coordinate with airport authority concession office at design phase. Modern operators surface per-SKU per-placement velocity data for refinement. Build refinement cadence into operator service contract; quarterly refinement with concessions team + airport authority.",
      finalTone: "stop",
      finalLabel: "COORDINATE WITH AUTHORITY",
    },
  }),
  keyTakeaways({
    heading: "Best-selling airport vending products key takeaways",
    takeaways: [
      "Best-selling airport vending products cluster by concourse zone — gate / concourse (hydration + caffeine + connectivity + premium snack), restroom-adjacent (personal care + hygiene + feminine hygiene), pre-security (TSA-compliant travel-size only), arrivals + departure (comfort + gift + souvenir), airline crew + airport worker break (quick-meal + healthy + caffeine).",
      "Top 20 SKUs typically generate 60-80 percent of revenue at airport vending. Per-SKU velocity drives quarterly planogram refinement with concessions team + airport authority. Modern operator dashboards surface velocity data.",
      "Bottled water + sparkling water lead beverage velocity at gate / concourse (18-25 percent revenue share). Caffeinated beverages (energy drink + RTD coffee + RTD tea) capture transit-delay + business-traveler demand at meaningful share.",
      "Electronics SKUs (phone charger + power bank + earbuds) at gate area drive high-margin revenue but require secure rotary or robotic-arm dispense mechanism + camera coverage + anti-theft framework + PCI-DSS Level 1 payment compliance.",
      "Pricing reflects airport markup framework (typically 30-80 percent over street pricing). Modern operators support Honest-Pricing-style transparency where appropriate. Coordinate pricing with airport authority concession office at install + annual rate review.",
    ],
  }),
  inlineCta({
    text: "Want the airport vending best-seller framework (SKU mix by zone + velocity refinement + pricing)?",
    buttonLabel: "Get the best-seller framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help airport authority concession teams, airport-specialty operators, and brand-partnership teams design SKU mix and best-seller refinement at hub + secondary airport vending placements — including gate area beverage + snack + electronics + mask velocity, restroom-adjacent personal care + feminine hygiene scope, pre-security TSA-compliant travel-size SKU specification, arrivals + departure comfort + gift + souvenir mix, airline crew + airport worker break quick-meal + healthy + caffeine planogram, top 20 SKU revenue concentration analysis, pricing alignment with airport markup framework, and quarterly per-SKU per-placement velocity refinement with concessions team + airport authority.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What sells best at airport vending machines?", answer: "Best-sellers cluster by concourse zone. Gate / concourse: bottled water, energy drink (Monster + Red Bull), phone charger cable, premium snack (KIND bar + Skinny Pop), mask + hand sanitizer. Restroom-adjacent: travel toothbrush, deodorant, contact solution, feminine hygiene. Pre-security: 3-1-1 bag + travel-size toiletries. Arrivals + departure: neck pillow, sleep mask, ear plugs, compression socks, souvenir.", audience: "Concessions" },
      { question: "What share of revenue do top SKUs generate?", answer: "Top 20 SKUs typically generate 60-80 percent of revenue at airport vending. Per-SKU velocity drives quarterly planogram refinement with concessions team + airport authority. Modern operator dashboards surface velocity data. Underperforming SKUs swapped; over-performing SKUs replicated to similar zone placements.", audience: "Operations" },
      { question: "Why is bottled water so dominant?", answer: "Post-security travelers can't bring outside water through TSA checkpoint — vending captures hydration demand at gate / concourse. Bottled water (Dasani + Aquafina + Smartwater + Fiji) at premium share (18-25 percent revenue share at gate area). Sparkling water (Bubly + LaCroix + Spindrift) at growing share. Modern operators maintain 4-6 SKUs across water category.", audience: "Planogram" },
      { question: "What about electronics at gate area?", answer: "Phone charger cable + portable power bank + wired earbuds + Bluetooth earbuds are high-velocity at gate / concourse capturing transit-delay + business-traveler demand. High-value SKUs require secure rotary or robotic-arm dispense mechanism + camera coverage + anti-theft framework + PCI-DSS Level 1 payment compliance. Verify at RFP.", audience: "Operations" },
      { question: "How is airport markup framework set?", answer: "Airport markup typically 30-80 percent over street pricing depending on concession framework + airport authority pricing rules + brand-partnership scope. Modern operators support Honest-Pricing-style transparency where appropriate. Coordinate pricing with airport authority concession office at install + annual rate review.", audience: "Pricing / Finance" },
      { question: "What should we deploy pre-security?", answer: "TSA-compliant travel-size SKUs only — 3-1-1 quart bag, travel-size shampoo / conditioner / lotion / face wash / sunscreen / hand sanitizer (under 3.4 oz per TSA), TSA-approved toiletry kit. Don't deploy 3-1-1 SKUs post-security (wrong demand profile). Coordinate placement with airport authority at design phase.", audience: "Planogram" },
      { question: "What's the velocity at arrivals + departure concourse?", answer: "Lower velocity than gate area but distinct comfort + gift + souvenir demand. Neck pillow + sleep mask + ear plugs + compression socks at red-eye + international long-haul concourses. Destination-themed souvenir + branded merchandise at branded concession scope. Coordinate with airport authority + brand-partnership team at design.", audience: "Operations" },
      { question: "How often is the planogram refined?", answer: "Quarterly refinement with concessions team + airport authority is modern operator standard. Per-SKU per-placement velocity drives refinement; underperforming SKUs swapped, over-performing SKUs replicated to similar zone placements. Build refinement cadence into operator service contract; modern operator dashboards surface velocity data.", audience: "Operations" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ACI-NA — Airports Council International North America concession framework", url: "https://airportscouncil.org/", note: "Industry body governing airport concession-revenue framework, pricing rules, and SKU programming at airport vending" },
      { label: "TSA — 3-1-1 liquids rule and travel-size compliance", url: "https://www.tsa.gov/travel/security-screening/whatcanibring/all", note: "Federal aviation security framework governing TSA-compliant travel-size SKU specifications at pre-security placements" },
      { label: "NAMA — National Automatic Merchandising Association airport vending guidance", url: "https://www.namanow.org/", note: "Industry association covering vending operations including airport SKU programming and best-seller refinement" },
      { label: "FAA — airport concession and operational regulations", url: "https://www.faa.gov/airports/", note: "Federal aviation administration framework governing airport concession placement and SKU compliance" },
      { label: "FDA — OTC drug labeling and packaging requirements", url: "https://www.fda.gov/drugs/special-features/medicines-your-home", note: "Federal OTC drug labeling standards governing airport OTC vending SKU compliance" },
    ],
  }),
  relatedGuides({
    heading: "Related airport vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Travel essentials vending machines", description: "Seven SKU categories — personal care, electronics, OTC, TSA-compliant, comfort, feminine hygiene, gifts — at airport scope.", href: "/vending-for-airports/travel-essentials-vending-machines" },
      { eyebrow: "Operations", title: "Best places for airport vending", description: "Placement strategy across post-security gate, concourse, restroom-adjacent, pre-security checkpoint, and arrivals.", href: "/vending-for-airports/best-places-for-airport-vending" },
      { eyebrow: "Hub", title: "All airport vending guides", description: "Equipment, placement, compliance, payment, and branding for airport terminal vending.", href: "/vending-for-airports" },
    ],
  }),
]);
process.exit(0);
