import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("office-coffee-creative-agencies", [
  tldr({
    heading: "How should creative agencies and design studios approach office coffee service as part of culture + client experience?",
    paragraph:
      "Creative agencies (advertising, design, branding, film + production, architecture, software design) treat office coffee differently from professional services firms or corporate offices. Coffee is part of the agency culture and client experience, not just an employee amenity — visiting clients form impressions of agency quality partly from the coffee bar, agency culture is often built around coffee rituals (morning huddle, afternoon walk-and-talk, late-night project sessions), and creative workforce demographics tilt heavily toward specialty-coffee culture (espresso, cold brew, single-origin, third-wave). Three positioning models: (1) premium coffee bar with barista (occasional barista or self-serve specialty equipment — Slayer, La Marzocco, Synesso espresso machines + Mahlkonig grinders + pour-over stations; $25-60K capital + $5-15K monthly operating at large agencies); (2) prosumer espresso + specialty equipment self-serve (Saeco, Jura, Nespresso commercial + pour-over + cold brew kegerator; $5-15K capital + $1-3K monthly operating); (3) high-quality drip + Keurig + cold brew bottles (modest investment, broad accessibility; $1-3K capital + $300-800 monthly operating). Mid-tier agencies often combine prosumer espresso + cold brew kegerator + premium drip + Keurig variety. Tea + specialty drinks matter at creative agencies (chai, matcha, golden milk, kombucha) — broader specialty-beverage culture vs corporate. Agency client-visit days drive premium positioning; coffee bar quality directly supports client experience.",
    bullets: [
      { emphasis: "Coffee is part of agency culture + client experience:", text: "Not just an employee amenity. Visiting clients form impressions from coffee bar; agency culture built around coffee rituals; creative workforce tilts toward specialty-coffee culture." },
      { emphasis: "Three positioning models by agency scale + budget:", text: "Premium coffee bar with barista ($25-60K capital), prosumer espresso + specialty equipment self-serve ($5-15K), high-quality drip + Keurig + cold brew bottles ($1-3K)." },
      { emphasis: "Specialty drinks broader at creative agencies:", text: "Tea, chai, matcha, golden milk, kombucha alongside coffee. Specialty-beverage culture broader vs corporate. Coordinate with agency culture + client demographics." },
    ],
  }),
  statStrip({
    heading: "Creative agency office coffee benchmarks",
    stats: [
      { number: "$1-60K", label: "capital range", sub: "drip + Keurig to premium coffee bar", accent: "blue" },
      { number: "Client-visit driver", label: "premium positioning", sub: "coffee bar = client experience", accent: "blue" },
      { number: "Specialty-beverage", label: "broader culture", sub: "tea, matcha, kombucha alongside coffee", accent: "blue" },
      { number: "$0.25-0.80", label: "per-cup cost", sub: "espresso self-serve typical", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Creative agency coffee positioning models",
    sub: "Three positioning models with different capital, operating cost, and client experience impact. Match model to agency scale, budget, and client demographics.",
    headers: ["Model", "Agency scale fit", "Capital", "Monthly operating", "Client experience"],
    rows: [
      ["High-quality drip + Keurig + cold brew bottles", "5-25 person agency", "$1-3K", "$300-800", "Standard professional"],
      ["Prosumer espresso + specialty self-serve", "20-100 person agency", "$5-15K", "$1-3K", "Premium creative-professional"],
      ["Premium coffee bar with barista + specialty equipment", "75-300 person agency", "$25-60K", "$5-15K", "Best-in-class agency culture"],
      ["Hybrid (premium espresso + Keurig variety)", "30-150 person agency", "$8-20K", "$2-5K", "Premium creative + variety"],
      ["Cold brew kegerator + nitro tap (summer flagship)", "30+ person agency", "$2-5K incremental", "$500-1.5K incremental", "Specialty-coffee culture signal"],
      ["Specialty tea + matcha + kombucha program", "Any agency", "$500-2K", "$200-500", "Broader specialty-beverage culture"],
    ],
  }),
  caseStudy({
    tag: "Creative agency coffee transformation",
    title: "Mid-size brand agency — premium coffee bar transformation produces measurable client-experience impact",
    context: "85-person brand agency, mid-size client portfolio (mix of Fortune 500 + emerging brands), 4 client-visit days per week typical. Pre-transformation (year 0): standard drip coffee + Keurig + cold brew bottles in shared kitchen. Client visitor coffee experience uneven; agency culture survey reported coffee quality + variety as employee dissatisfaction theme. Agency leadership committed to coffee bar transformation as culture + client experience investment.",
    meta: [
      { label: "Agency profile", value: "85-person brand agency, mid-size client portfolio, 4 client-visit days per week" },
      { label: "Pre-transformation baseline", value: "Standard drip + Keurig + cold brew bottles; employee dissatisfaction + uneven client experience" },
      { label: "Transformation scope", value: "Premium coffee bar with prosumer espresso (Synesso S30) + cold brew kegerator (nitro + flat) + pour-over station + Keurig variety + specialty tea + matcha + kombucha" },
      { label: "Capital + operating", value: "$32K capital (espresso $18K + kegerator $4K + pour-over $3K + tea + matcha + kombucha $2K + cabinetry + plumbing $5K); $6.5K monthly operating" },
    ],
    results: [
      { metric: "+18%", description: "Employee satisfaction score increase on culture + amenity dimension (annual agency culture survey)" },
      { metric: "+12 NPS", description: "Client-visit Net Promoter Score increase (post-visit client survey; coffee + hospitality dimension)" },
      { metric: "85%", description: "Employee retention rate year-over-year (vs 78% prior); coffee + culture amenity cited in exit-interview feedback" },
      { metric: "$78K", description: "Cumulative annual cost (capital amortization + operating). Treated as culture + client experience investment, not productivity-ROI calculation" },
      { metric: "4 hr/week", description: "Agency culture sessions hosted at coffee bar (morning huddles, late-afternoon team check-ins). Coffee bar becomes culture space." },
      { metric: "+22%", description: "Client-visit duration increase (longer client visits with coffee + hospitality framing); supports relationship + business development" },
    ],
  }),
  specList({
    heading: "Creative agency coffee specifications",
    items: [
      { label: "Premium espresso equipment (prosumer + commercial)", value: "Saeco Royal, Jura Giga 6, Nespresso Momento 200 for self-serve prosumer ($5-15K range). Synesso S30, Slayer Steam, La Marzocco Linea Mini for premium coffee bar ($15-30K range). Mahlkonig E80 / E65S commercial grinders. Specialty espresso supports cappuccino, latte, flat white, macchiato. Coordinate with plumber on water + drainage at install." },
      { label: "Cold brew kegerator + nitro tap (summer flagship)", value: "Dual-zone kegerator (Edgestar, Kegco commercial, KOMOS) with nitro + flat tap. Local roaster + cold brew specialist preferred (Stumptown, Counter Culture, La Colombe, independent roasters). Weekly keg swap; 5-gallon keg yields 50-60 cups. Summer flagship amenity at creative agencies; signals specialty-coffee culture to clients + employees." },
      { label: "Pour-over station + single-origin program", value: "Pour-over station (Chemex, Hario V60, Kalita Wave) with kettle + grinder. Single-origin coffee rotation (monthly featured origin from local roaster). Specialty-coffee culture signal; supports occasional barista or guest-roaster events. Modest capital ($300-800); operating cost $50-200 monthly for single-origin supply." },
      { label: "Keurig commercial for variety + accessibility", value: "K-2500 / K-3000 / K-3500 commercial Keurig brewers for variety + accessibility alongside premium espresso. 100+ K-Cup flavor variety reaches employees who prefer drip / regular coffee. Variety supports inclusive amenity (not everyone wants espresso). Mix supplier: Keurig direct + third-party (Costco / Amazon)." },
      { label: "Specialty tea + matcha + kombucha program", value: "Premium tea selection (Harney & Sons, Rishi, Numi, David's Tea), matcha latte equipment (matcha + whisk + frothing pitcher; or matcha latte machine), kombucha tap (GT's, Health-Ade, Brew Dr) or kombucha bottles in fridge. Specialty-beverage culture broader at creative agencies vs corporate; supports tea drinkers + non-coffee specialty preferences." },
      { label: "Coffee bar physical space + cabinetry", value: "Coffee bar physical space supports culture + client experience. Counter space for espresso + pour-over + kegerator + accessories (cups, milk, sugar, spoons, napkins). Cabinetry for cup + lid + supply storage. Seating adjacent for morning huddles + client conversations. Plumbing + drainage + electrical coordinated at install ($5-15K cabinetry + plumbing budget typical)." },
      { label: "Client-visit positioning + hospitality", value: "Coffee bar visible from reception + client meeting rooms. Premium positioning supports client experience — visiting clients form impressions of agency quality. Train reception staff to offer coffee + specialty drinks at client arrival. Document coffee + specialty drink menu for client visibility; agency culture signal." },
      { label: "Sustainability considerations", value: "Specialty-coffee culture and creative agencies increasingly sustainability-conscious. Single-origin local roaster, compostable cups + lids, refillable / reusable mugs, K-Compostable pods, organic + fair-trade tea. Coordinate with office sustainability office; build into agency culture + client positioning. Sustainability narrative supports premium creative positioning." },
      { label: "Operator + supplier coordination", value: "Premium coffee bar may combine multiple suppliers — espresso equipment vendor, local roaster (espresso + drip + cold brew kegs), Keurig K-Cup supplier, tea + specialty beverage supplier. Refreshment service operator can coordinate managed supply across categories. Modern refreshment service operators native to creative agency requirements; legacy lag." },
    ],
  }),
  tipCards({
    heading: "Five creative agency coffee mistakes",
    sub: "Documented in agency culture survey + client-visit NPS feedback. All preventable with culture + client experience framing.",
    items: [
      { title: "Treating coffee as employee amenity only, not client experience", body: "Creative agencies have 4+ client-visit days per week typical. Visiting clients form impressions of agency quality partly from coffee bar. Coffee bar positioning + visibility + premium equipment + barista quality directly supports client experience. Frame coffee as client experience investment, not just employee amenity." },
      { title: "Premium espresso only without variety", body: "Specialty espresso supports premium positioning, but not everyone wants espresso. Variety (Keurig drip + cold brew + specialty tea + matcha + kombucha) supports inclusive amenity — employees + clients with different preferences. Premium + variety together at well-balanced agency coffee programs." },
      { title: "Skipping cold brew at summer-season creative culture", body: "Specialty-coffee culture and creative agency workforce tilt toward cold brew. May-September consumption doubles. Cold brew kegerator (nitro + flat) signals specialty-coffee culture + supports summer-season demand. Summer flagship amenity at creative agencies; modest incremental capital ($2-5K) + operating ($500-1.5K monthly)." },
      { title: "No tea + matcha + kombucha specialty-beverage coverage", body: "Specialty-beverage culture broader at creative agencies vs corporate. Tea drinkers + matcha + kombucha preferences underserved by coffee-only programs. Premium tea selection + matcha latte equipment + kombucha tap or bottles. Modest capital + operating; supports inclusive specialty-beverage culture." },
      { title: "Coffee bar isolated from culture space", body: "Coffee bar physical space supports culture + client experience. Coffee bar isolated from common space underutilizes culture amenity opportunity. Position coffee bar adjacent to seating + huddle space + client meeting areas; supports morning huddles + late-afternoon check-ins + client conversations." },
    ],
  }),
  inlineCta({
    text: "Want the creative agency coffee framework (premium espresso, cold brew kegerator, specialty tea, client experience)?",
    buttonLabel: "Get the agency coffee framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported creative agency coffee program design across advertising, design, branding, film + production, and software design agencies — including premium espresso equipment selection (prosumer + commercial), cold brew kegerator deployment, pour-over + single-origin programs, specialty tea + matcha + kombucha integration, and coffee bar physical space coordination aligned with agency culture + client experience positioning. Benchmarks reflect supplier + operator data + agency culture survey + client-visit NPS feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why is coffee different at creative agencies?", answer: "Three reasons: (1) coffee is part of agency culture + client experience (not just employee amenity), (2) visiting clients form impressions of agency quality from coffee bar, (3) creative workforce demographics tilt toward specialty-coffee culture (espresso, cold brew, single-origin, third-wave). Premium positioning supports culture + client experience.", audience: "Agency Leadership" },
      { question: "What's the right model for our agency size?", answer: "5-25 person agency: high-quality drip + Keurig + cold brew bottles ($1-3K capital). 20-100 person: prosumer espresso + specialty self-serve ($5-15K). 75-300 person: premium coffee bar with barista + specialty equipment ($25-60K). Hybrid model (premium espresso + Keurig variety) common at 30-150 person agencies.", audience: "Agency Leadership / Office Managers" },
      { question: "Do we need a barista?", answer: "At 75+ person agencies with frequent client visits — occasional barista (peak hours, client visit days) or self-serve prosumer espresso (smaller agency). Synesso, Slayer, La Marzocco for premium coffee bar with barista; Saeco, Jura, Nespresso commercial for self-serve. Match to client experience positioning + budget.", audience: "Agency Leadership" },
      { question: "What about cold brew?", answer: "Cold brew kegerator (nitro + flat) is summer flagship amenity at creative agencies — signals specialty-coffee culture to clients + employees. Local roaster preferred (Stumptown, Counter Culture, La Colombe). $2-5K capital + $500-1.5K monthly operating. May-September consumption doubles; consider as flagship amenity.", audience: "Office Managers" },
      { question: "Should we offer tea + matcha + kombucha?", answer: "Yes. Specialty-beverage culture broader at creative agencies vs corporate. Premium tea (Harney & Sons, Rishi, Numi), matcha latte equipment, kombucha tap or bottles. Supports inclusive specialty-beverage culture; tea drinkers + matcha + kombucha preferences. Modest capital + operating; meaningful culture signal.", audience: "Office Managers" },
      { question: "How does coffee bar support client experience?", answer: "Coffee bar visible from reception + client meeting rooms. Premium positioning supports client impression of agency quality. Train reception to offer coffee + specialty drinks at client arrival. Document menu for client visibility. Agency culture signal. Client-visit NPS uplift from coffee + hospitality dimension.", audience: "Agency Leadership / Reception" },
      { question: "What about sustainability?", answer: "Specialty-coffee culture + creative agency workforce sustainability-conscious. Single-origin local roaster, compostable cups + lids, refillable mugs, K-Compostable pods, organic + fair-trade tea + kombucha. Sustainability narrative supports premium creative positioning. Coordinate with office sustainability office.", audience: "Sustainability Officers / Office Managers" },
      { question: "How do we coordinate suppliers?", answer: "Premium coffee bar combines multiple suppliers (espresso equipment vendor, local roaster, Keurig K-Cup, tea + specialty beverage). Refreshment service operator can coordinate managed supply. Modern refreshment service operators native to creative agency requirements; legacy operators lag. Verify operator capability at proposal.", audience: "Office Managers / Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SCA — Specialty Coffee Association espresso + cold brew standards", url: "https://sca.coffee/", note: "Industry trade association covering specialty coffee + barista + espresso standards" },
      { label: "NCA — National Coffee Association consumption trends + specialty coffee", url: "https://www.ncausa.org/Industry-Resources/Market-Research", note: "Industry trade association covering coffee consumption data + specialty coffee growth" },
      { label: "AAF — American Advertising Federation + agency culture surveys", url: "https://www.aaf.org/", note: "Industry trade association covering advertising and creative agency culture practices" },
      { label: "Synesso / Slayer / La Marzocco — premium espresso equipment", url: "https://www.synesso.com/", note: "Major premium espresso machine manufacturers used at creative agency coffee bars" },
      { label: "NAMA — refreshment service operator practice for creative agencies", url: "https://www.namanow.org/", note: "Industry guidance on creative agency refreshment service including premium coffee bar" },
    ],
  }),
  relatedGuides({
    heading: "Related office coffee guides",
    items: [
      { eyebrow: "Sister guide", title: "Cold brew + iced coffee for offices", description: "Office cold brew implementation paths from RTD bottles to kegerator to in-house brewing.", href: "/blog-category/cold-brew-iced-coffee-office" },
      { eyebrow: "Operations", title: "Keurig office coffee solutions", description: "Keurig commercial tiers, K-Cup variety, and sustainable alternatives across office sizes.", href: "/blog-category/keurig-office-coffee-solutions" },
      { eyebrow: "Hub", title: "All blog category resources", description: "Coffee solutions, office amenity, vending integration patterns.", href: "/blog-category" },
    ],
  }),
]);
process.exit(0);
