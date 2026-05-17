import { seedPost, tldr, statStrip, comparisonTable, specList, costBreakdown, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("water-filtration-office-coffee", [
  tldr({
    heading: "Why does office coffee need water filtration — and how do you size and service it correctly?",
    paragraph:
      "Water filtration is mandatory at office bean-to-cup and batch brewer installations because office water carries hardness (calcium + magnesium), chlorine + chloramine (disinfection byproducts), and total dissolved solids (TDS) that all damage equipment + degrade cup quality. Three failure modes drive the requirement: (1) limescale at heating element from hardness — boiler scale failure costs $800-3K to repair; (2) chlorine + chloramine damages rubber seals + produces off-flavor extraction; (3) elevated TDS (above ~150 ppm) over-extracts soluble compounds and produces unbalanced cup. Three primary filtration technologies serve office coffee: (1) carbon block + scale inhibitor (BWT bestmax, Everpure Claris, 3M HF series) — removes chlorine + sediment + scale inhibition; the dominant office coffee filter, $300-800 initial + $200-500 annual cartridge; (2) reverse osmosis (RO) — full TDS reduction + remineralization; $1.5K-4K initial + ongoing membrane replacement; reserved for very hard water or specialty-coffee-driven programs requiring SCA water spec (75-150 ppm TDS, alkalinity 40-75 ppm); (3) softener + carbon — water softener loop + carbon filter; less common in office context. Sizing driven by daily cup volume + water hardness; SCA water spec is the target for specialty programs. Modern coffee operators specify + service filtration at install + quarterly service visit; legacy operators may treat filtration as customer-managed. Cartridge replacement schedule typically 3-6 months depending on water hardness + cup volume; operator tracks at quarterly service visit. Verify filtration scope + cartridge replacement schedule at proposal.",
    bullets: [
      { emphasis: "Three failure modes — limescale, chlorine, elevated TDS:", text: "Hardness scales boiler ($800-3K repair); chlorine damages seals + off-flavor; elevated TDS over-extracts. All three addressed by office coffee filtration." },
      { emphasis: "Three filtration technologies — carbon + scale inhibitor, RO, softener + carbon:", text: "Carbon + scale inhibitor (BWT, Everpure, 3M) dominant at offices. RO reserved for very hard water + specialty programs. Softener + carbon less common." },
      { emphasis: "Modern operators specify + service filtration at install + quarterly:", text: "Cartridge replacement 3-6 months depending on water + volume. Operator tracks at quarterly service visit. Legacy operators may treat as customer-managed; verify scope at proposal." },
    ],
  }),
  statStrip({
    heading: "Office coffee water filtration benchmarks",
    stats: [
      { number: "$300-800", label: "carbon + scale inhibitor install", sub: "BWT, Everpure, 3M cartridge system", accent: "blue" },
      { number: "$200-500", label: "annual cartridge cost", sub: "3-6 month replacement cycle", accent: "blue" },
      { number: "75-150 ppm", label: "SCA water spec TDS", sub: "target for specialty coffee programs", accent: "green" },
      { number: "$800-3K", label: "boiler scale failure repair", sub: "if filtration skipped + limescale builds", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Three filtration technologies compared",
    sub: "Carbon + scale inhibitor dominant at offices. RO reserved for very hard water + specialty programs. Softener + carbon less common in office context.",
    headers: ["Technology", "What it does", "Initial cost", "Annual cartridge cost", "Best fit"],
    rows: [
      ["Carbon block + scale inhibitor (BWT bestmax, Everpure Claris, 3M HF)", "Removes chlorine + sediment + scale inhibition (binds calcium/magnesium)", "$300-800", "$200-500", "Most office coffee installations"],
      ["Reverse osmosis (RO) + remineralization", "Full TDS reduction; remineralization to SCA water spec", "$1.5K-4K", "$300-800 (membrane + post-filter)", "Very hard water; specialty coffee programs requiring SCA spec"],
      ["Softener + carbon filter", "Softener loop (ion exchange) + carbon filter", "$1K-3K", "$300-700 + salt regenerant", "Multi-tenant buildings with central softener loop"],
      ["No filtration (raw water)", "None", "$0", "$0", "Not recommended — failure modes apply"],
    ],
  }),
  specList({
    heading: "Office coffee water filtration specifications",
    items: [
      { label: "Carbon block + scale inhibitor (dominant office filter)", value: "BWT bestmax (premium, V-Series + M-Series + Magnesium-enriched), Everpure Claris (entry + L + XL + Ultra), 3M HF series (HF60, HF90, HF95). Carbon block removes chlorine + chloramine + sediment + organics. Scale inhibitor (polyphosphate or magnesium-enriched cartridge) binds calcium + magnesium hardness. Installs on water inlet to brewer; quick-disconnect fitting. $300-800 initial install. Cartridge life 3-6 months depending on water hardness + cup volume." },
      { label: "Reverse osmosis (RO) + remineralization", value: "Pure Aqua, Optipure, AquaLogic systems with sediment pre-filter + carbon pre-filter + RO membrane + remineralization cartridge. Full TDS reduction (97-99% rejection) followed by controlled remineralization to SCA water spec (75-150 ppm TDS, alkalinity 40-75 ppm). $1.5K-4K initial install + plumbing. Reserved for very hard water (>300 ppm TDS) or specialty-coffee programs requiring SCA spec extraction. Annual cost $300-800 (membrane + post-filter). Plumbed install with drain line." },
      { label: "Softener + carbon filter", value: "Water softener loop (ion exchange replacing Ca+Mg with Na) + carbon block for chlorine removal. Less common at office coffee — soft water still requires carbon for chlorine + sediment, and softened water at espresso changes extraction characteristics (some specialty operators avoid). Common in multi-tenant buildings with central softener loop. $1K-3K install + ongoing salt regenerant." },
      { label: "Water testing + filtration sizing", value: "Test water at install — total hardness (Ca+Mg as ppm CaCO3), TDS (ppm), chlorine + chloramine (ppm), alkalinity. Filtration sized to daily cup volume + water characteristics. Operator typically conducts test at install + annually. SCA water spec (75-150 ppm TDS, alkalinity 40-75 ppm, pH 6.5-7.5) is the target for specialty programs." },
      { label: "Cartridge replacement schedule", value: "3-6 months at carbon + scale inhibitor depending on water hardness + cup volume. Manufacturer-rated cycle (e.g., 5,000-15,000 gallons throughput) translates to a calendar interval at office cup volume. Operator tracks at quarterly service visit; replaces at scheduled cadence + when pressure drops or off-flavor surfaces. Document replacement in equipment service log." },
      { label: "Quick-disconnect fitting + installation", value: "Modern office filtration installs at water inlet to brewer via quick-disconnect fitting. Fitting at filter head + filter cartridge twists out without tools. Installer (operator service tech) handles initial plumb-in; subsequent cartridge replacement takes 5-10 minutes. No special skill required after initial install." },
      { label: "Drain line + plumbing requirements", value: "Carbon + scale inhibitor — single inlet line; no drain. RO — inlet line + drain line for reject water (3-5x volume of permeate). Drain to building drain (gravity or pump where required). Softener — inlet + outlet + drain for regenerant. Coordinate with facility plumbing at install; RO + softener require more involved plumbing than carbon + scale inhibitor." },
      { label: "Operator service scope", value: "Modern operators include filtration in service contract — initial install, water testing, cartridge replacement at quarterly service visit, annual water testing refresh, cartridge supplies, troubleshooting (low pressure, off-flavor, equipment scaling). Legacy operators may treat filtration as customer-managed; verify scope at proposal." },
      { label: "Cost premium vs unfiltered (over equipment life)", value: "Annual filtration cost $200-500 at carbon + scale inhibitor; $300-800 at RO. Over 5-year equipment life, $1,000-4,000 total filtration cost. Equipment failure from skipped filtration (boiler scale repair $800-3K, seal damage from chlorine $200-600, premature equipment replacement) far exceeds filtration cost. Filtration is the highest-ROI maintenance line item." },
    ],
  }),
  costBreakdown({
    heading: "Office coffee water filtration cost stack — 5-year program at mid-size office",
    sub: "Where the dollars go on a representative 5-year filtration program. Shows initial install + ongoing cartridges + operator service.",
    items: [
      { label: "Initial install — BWT bestmax / Everpure Claris / 3M HF cartridge system", range: "$300-800", amount: "$550" },
      { label: "Annual cartridge replacement (3-6 month cycle × 5 years)", range: "$200-500/yr × 5", amount: "$1,750" },
      { label: "Initial water testing (operator)", range: "$50-200 one-time", amount: "$100" },
      { label: "Annual water testing refresh (operator)", range: "$50-150/yr × 5", amount: "$500" },
      { label: "Operator service labor (cartridge replacement + testing)", range: "Bundled at modern operator tier", amount: "$0 standard" },
      { label: "Equipment scale repair avoided (boiler + seal)", range: "$0-3K risk avoided", amount: "Risk avoidance, not line item" },
    ],
    totalLabel: "Total 5-year filtration program cost",
    totalAmount: "$2,500-4,500 over 5 years",
  }),
  tipCards({
    heading: "Five water filtration program mistakes",
    sub: "Each is documented in office coffee equipment failure analysis and operator service quality audits. All preventable with disciplined filtration program.",
    items: [
      { title: "Skipping filtration entirely", body: "Office water carries hardness + chlorine + chloramine + elevated TDS that damage equipment + degrade cup quality. Boiler scale repair $800-3K, seal damage from chlorine $200-600, premature equipment replacement at scaled boiler. Filtration is mandatory at bean-to-cup and batch brewer; reserved exclusion only for pod systems with sub-1-gallon daily volume." },
      { title: "Wrong filtration technology for the water", body: "Carbon + scale inhibitor dominates at offices but reaches limits at very hard water (>300 ppm TDS) — scale inhibition saturates and limescale still builds at equipment. Very hard water requires RO + remineralization. Specialty-coffee programs requiring SCA water spec require RO regardless of source water. Match technology to water characteristics + program tier." },
      { title: "Cartridge replacement on calendar vs throughput", body: "Cartridge life rated in throughput (gallons), not calendar months. High-volume offices exhaust cartridges before 3-month mark; low-volume offices stretch beyond 6 months without exceeding capacity. Operator should size cartridge replacement to actual throughput; calendar default is approximation only. Track cup volume + replacement cycle." },
      { title: "No initial water testing at install", body: "Without water test, filtration sizing is guesswork. Test hardness + TDS + chlorine + alkalinity at install; size filtration accordingly. Annual refresh test confirms water characteristics haven't changed (rare but possible — municipal source change, building plumbing change). Operator typically conducts; verify in scope at proposal." },
      { title: "Operator without filtration in service scope", body: "Legacy operators may treat filtration as customer-managed — customer buys cartridges off-shelf, customer schedules replacement, customer troubleshoots. Modern operators include filtration in service contract — initial install, water testing, cartridge replacement at quarterly service visit, supplies, troubleshooting. Verify scope at proposal; bundled service is the modern standard." },
    ],
  }),
  keyTakeaways({
    heading: "What to take to the next coffee program review",
    takeaways: [
      "Water filtration is mandatory at office bean-to-cup and batch brewer installations; three failure modes — limescale, chlorine, elevated TDS — all addressed by filtration.",
      "Carbon + scale inhibitor (BWT, Everpure, 3M) dominant at offices; $300-800 install + $200-500 annual cartridge.",
      "RO + remineralization reserved for very hard water (>300 ppm TDS) or specialty programs requiring SCA water spec (75-150 ppm TDS).",
      "Cartridge replacement 3-6 months depending on water hardness + cup volume; operator tracks at quarterly service visit.",
      "Modern operators include filtration in service contract; legacy operators may treat as customer-managed. Verify scope at proposal.",
    ],
  }),
  decisionTree({
    heading: "Should we install RO + remineralization or carbon + scale inhibitor?",
    question: "Is your office water above 300 ppm TDS (very hard) OR do you run a specialty-coffee program requiring SCA water spec (75-150 ppm TDS, alkalinity 40-75 ppm)?",
    yesBranch: {
      title: "Yes — specify RO + remineralization.",
      description: "Very hard water (>300 ppm TDS) saturates scale inhibition and still builds limescale at equipment. Specialty programs requiring SCA water spec need RO + controlled remineralization regardless of source water. $1.5K-4K initial install + plumbing + drain. Annual cost $300-800. Modern specialty operators handle install + service.",
      finalTone: "go",
      finalLabel: "SPECIFY · RO + REMINERALIZATION",
    },
    noBranch: {
      title: "Specify carbon + scale inhibitor (BWT, Everpure, 3M).",
      description: "Standard water hardness + commercial coffee program is well-served by carbon + scale inhibitor cartridge system. $300-800 initial + $200-500 annual cartridge. Quick-disconnect fitting; cartridge replacement 5-10 minutes at quarterly operator visit. Dominant technology at office coffee installations.",
      finalTone: "stop",
      finalLabel: "CARBON + SCALE INHIBITOR",
    },
  }),
  inlineCta({
    text: "Want the office coffee water filtration template (technology selection, sizing, operator scope, cartridge schedule)?",
    buttonLabel: "Get the filtration template",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support office coffee water filtration program design — technology selection across carbon + scale inhibitor and RO + remineralization, sizing against water characteristics + cup volume, operator service scope verification, and cartridge replacement scheduling. The benchmarks reflect operator-side install data and office coffee equipment failure analysis.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why does office coffee need water filtration?", answer: "Three failure modes — hardness scales the heating element (boiler scale repair $800-3K), chlorine + chloramine damages seals + off-flavor extraction, elevated TDS over-extracts. Filtration addresses all three. Mandatory at bean-to-cup and batch brewer installations.", audience: "Facilities" },
      { question: "What's the standard office filtration technology?", answer: "Carbon block + scale inhibitor (BWT bestmax, Everpure Claris, 3M HF series). Removes chlorine + sediment + scale inhibition (binds Ca + Mg hardness). Dominant at office installations. $300-800 initial install + $200-500 annual cartridge.", audience: "Procurement" },
      { question: "When do we need RO + remineralization instead?", answer: "Very hard water (>300 ppm TDS) where scale inhibition saturates, or specialty-coffee programs requiring SCA water spec (75-150 ppm TDS, alkalinity 40-75 ppm). $1.5K-4K install + plumbing + drain. Annual cost $300-800. Modern specialty operators handle install + service.", audience: "Specialty Coffee Programs" },
      { question: "How often do filter cartridges need to be replaced?", answer: "3-6 months at carbon + scale inhibitor depending on water hardness + cup volume. Cartridge life rated in throughput (gallons), not calendar; operator sizes cartridge replacement to actual throughput. Operator tracks at quarterly service visit; replaces at cadence + when pressure drops or off-flavor surfaces.", audience: "Facilities" },
      { question: "What's the SCA water spec?", answer: "Specialty Coffee Association water standard for specialty coffee extraction — TDS 75-150 ppm (target 150), alkalinity 40-75 ppm, pH 6.5-7.5, no chlorine or chloramine, minimal odor. RO + remineralization typically required to achieve SCA spec from municipal water. Target for specialty programs at premium offices.", audience: "Specialty Coffee Programs" },
      { question: "Who handles the filter install + service?", answer: "Modern operators include filtration in service contract — initial install, water testing, cartridge replacement at quarterly service visit, annual water testing refresh, supplies, troubleshooting. Legacy operators may treat as customer-managed. Verify scope at proposal; bundled service is the modern standard.", audience: "Procurement" },
      { question: "How do we know if our water needs filtration?", answer: "Test at install — total hardness (ppm CaCO3), TDS (ppm), chlorine + chloramine (ppm), alkalinity. Most US municipal water requires filtration for office coffee — hardness varies 60-400 ppm CaCO3, chlorine 0.5-4 ppm typical. Operator typically conducts test at install + annually.", audience: "Facilities" },
      { question: "What if we skip filtration?", answer: "Equipment failure within 1-3 years at typical office cup volume — boiler scale repair $800-3K, seal damage from chlorine $200-600, premature equipment replacement at scaled boiler. Cup quality degrades — limescale flavor, chlorine off-flavor, unbalanced extraction. Filtration is the highest-ROI maintenance line item; do not skip.", audience: "Office Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SCA — Specialty Coffee Association water standard for coffee", url: "https://sca.coffee/research/water-and-coffee", note: "Industry water standard for specialty coffee extraction including TDS, alkalinity, pH, and chlorine specifications" },
      { label: "BWT — bestmax water filtration documentation for office coffee", url: "https://www.bwt.com/", note: "Manufacturer documentation for carbon + scale inhibitor cartridge system at office coffee installations" },
      { label: "Everpure — Claris water filtration for office coffee equipment", url: "https://www.pentairfoodservice.com/everpure", note: "Manufacturer documentation for carbon + scale inhibitor cartridge system at office coffee installations" },
      { label: "3M Food Service — HF series water filtration documentation", url: "https://www.3m.com/3M/en_US/p/c/food-service/water-filtration/", note: "Manufacturer documentation for carbon + scale inhibitor cartridge system at office coffee installations" },
      { label: "NSF International — water filtration product certification", url: "https://www.nsf.org/consumer-resources/water-quality/water-filters", note: "Equipment certification body covering water filtration cartridge performance standards" },
    ],
  }),
  relatedGuides({
    heading: "Related office coffee guides",
    items: [
      { eyebrow: "Sister guide", title: "Coffee maker cleaning + sanitation", description: "Cleaning cadence across daily, weekly, monthly, and quarterly cycles + operator service scope.", href: "/blog/coffee-maker-cleaning-sanitation" },
      { eyebrow: "Operations", title: "Pod-free office coffee solutions", description: "Bean-to-cup, batch brewer, French press, and pour-over options + filtration requirements.", href: "/blog/pod-free-office-coffee-solutions" },
      { eyebrow: "Hub", title: "All office coffee blog posts", description: "Equipment, sourcing, sustainability, and program-design guidance for office coffee.", href: "/blog" },
    ],
  }),
]);
process.exit(0);
