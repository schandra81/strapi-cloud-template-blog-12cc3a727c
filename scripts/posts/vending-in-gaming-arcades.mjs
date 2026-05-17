import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-in-gaming-arcades", [
  tldr({
    heading: "What does a structured vending program look like at a gaming arcade or family entertainment center?",
    paragraph:
      "Vending at gaming arcades and family entertainment centers (FECs) — Dave & Buster's, Round1, Main Event, retro and bar-cades, location-based VR, mini-golf and bowling combos, and independent arcades — is fundamentally different from concourse or office vending. The customer dwell time is 90-180 minutes versus 8-15 minutes at office breakrooms, the demographic mix shifts dramatically across day-parts (school groups 3-6 PM, families 6-9 PM, adults 9 PM-close), the regulatory surface includes state youth-caffeine rules and arcade-prize laws that intersect with vending product mix, and the placement strategy has to coordinate with redemption counters, party rooms, and game-floor layouts. Real arcade vending programs operate against measurable structural rules: cashless-only payment with arcade-card integration where supported, day-part SKU rotation (energy drinks restricted before 9 PM at venues with under-18 traffic, family-friendly mix during evening prime), zero-glass-front fragility risk in active game-floor zones, redemption-counter co-placement for prize-eligible candy and toy SKUs, allergen-restricted formats covering 15-20% of slots (school groups), and operator capability for surge inventory during birthday-party weekends and school break windows. The economics: arcade vending generates $1,800-$6,000 per machine per month at well-placed FECs versus $400-$1,200 at standard office baseline, with average transaction values of $3-7 reflecting impulse purchase patterns and family group buys. The capability differential is meaningful — generic vending operators running office-style refresh models leave 30-50% of arcade-format revenue unrealized and produce day-part compliance failures. Tier-1 operators with arcade-format experience run day-part SKU rotation, arcade-card integration, redemption co-placement, and surge cadence keyed to school calendars and event weekends. This guide covers the placement strategy, equipment specifications, day-part planogram, operator capability profile, and regulatory considerations. Written for arcade and FEC general managers, operations leads, and procurement teams.",
    bullets: [
      { emphasis: "90-180 minute dwell time + day-part demographic shifts:", text: "Office-style refresh doesn't work. Day-part SKU rotation, family-friendly evening mix, adult-mix after 9 PM, school-group support at after-school windows." },
      { emphasis: "Cashless + arcade-card integration + redemption-counter co-placement:", text: "Payment surface integrated with arcade-card systems where supported. Candy and toy SKUs co-placed near redemption counters where applicable." },
      { emphasis: "$1,800-6,000 per machine per month at well-placed FECs:", text: "vs $400-1,200 office baseline. Average transaction $3-7 reflects impulse and family group buys. Tier-1 operator capability captures full revenue lift." },
    ],
  }),
  statStrip({
    heading: "Arcade and FEC vending benchmarks",
    stats: [
      { number: "$1.8-6K", label: "monthly revenue at well-placed FEC", sub: "vs $400-1,200 office baseline", accent: "blue" },
      { number: "90-180 min", label: "customer dwell time", sub: "vs 8-15 min office breakroom", accent: "blue" },
      { number: "$3-7", label: "average transaction value", sub: "impulse + family group buy", accent: "orange" },
      { number: "15-20%", label: "allergen-restricted slot allocation", sub: "school group support", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Arcade and FEC vending vs office and concourse baselines",
    sub: "Multiple dimensions distinguish arcade-format vending from office or concourse baselines. Day-part SKU rotation and redemption co-placement matter more than at any other vertical.",
    headers: ["Dimension", "Office baseline", "Concourse baseline", "Arcade and FEC"],
    rows: [
      ["Customer dwell time", "8-15 minutes", "2-4 hours peak event", "90-180 minutes"],
      ["Day-part demographic", "Stable workday mix", "Event-specific", "Shifts 3 times daily"],
      ["Payment surface", "EMV + cashless + cash", "Cashless + cash mix", "Cashless + arcade-card integration"],
      ["SKU rotation cadence", "Quarterly", "Per-event slate", "Day-part within single day"],
      ["Energy drink discipline", "Wellness program", "Adult mix", "Restricted pre-9 PM at youth-traffic venues"],
      ["Allergen-restricted coverage", "5-10% slot allocation", "10-15%", "15-20% (school groups)"],
      ["Redemption-counter co-placement", "n/a", "n/a", "Candy + toy SKUs near redemption"],
      ["Surge cadence", "Project rollouts", "Event calendar", "Birthday weekends + school break windows"],
      ["Glass-front fragility", "Standard glass", "Standard glass", "Reinforced or zero-glass at game-floor"],
      ["Monthly revenue per machine", "$400-1,200", "$500-3K standard / $8-25K premium", "$1,800-6,000"],
    ],
  }),
  specList({
    heading: "Arcade and FEC vending specifications",
    items: [
      { label: "Placement strategy across the venue", value: "Vending placements coordinated with arcade game floor, redemption counter, party rooms, lounge/seating areas, and entry/exit zones. Game-floor placements emphasize high-margin beverage and impulse snack. Redemption-counter co-placement supports candy and toy SKUs where prize-eligibility rules permit. Party rooms supported with party-mode planogram triggered by birthday-weekend surge orders." },
      { label: "Day-part SKU rotation", value: "Day-part planogram shifts across the operating day: after-school window (3-6 PM) emphasizes affordable snacks and lighter beverages for school groups; family prime (6-9 PM) emphasizes family-friendly mix with candy, popcorn, and beverage variety; adult window (9 PM-close) at 18+ venues opens to energy drinks, premium snacks, and adult beverage where licensed. Operator updates planogram through telemetry-driven schedule." },
      { label: "Cashless and arcade-card integration", value: "Cashless-only payment with EMV contactless, Apple Pay, Google Pay, Samsung Pay. Arcade-card integration where supported (Embed, Sacoa, Intercard, Semnox) enables vending purchase against arcade-card balance — drives card-balance utilization and reduces friction for groups. Premium FEC chains often run integrated payment surface as standard." },
      { label: "Equipment hardening for active game floor", value: "Glass-front machines positioned away from active game-floor zones to avoid breakage from claw machine rebound, redemption-game prize toss, or general game-floor traffic. Reinforced glass or zero-glass front equipment in high-traffic game-floor zones. Tip-resistant anchoring required at any placement accessible to school groups." },
      { label: "Energy drink discipline and youth-caffeine compliance", value: "Energy drinks restricted before 9 PM at venues with under-18 customer traffic. State youth-fitness and arcade caffeine rules apply — confirm state-specific rules. Operator builds time-of-day vend lockout into planogram where required. Adult-only late-night venues open to energy drink mix during adult window only." },
      { label: "Allergen-restricted slot allocation", value: "15-20% of slots allocated to allergen-restricted formats: gluten-free, dairy-free, vegan, nut-free, and kosher options. Heavier than office baseline (5-10%) because school groups and family bookings include dietary-restricted attendees at higher rates. Tag SKUs in operator dashboard; visible tags at point of purchase." },
      { label: "Redemption-counter co-placement for prize SKUs", value: "Candy bars, candy multipack, fun-size confection, and small-toy SKUs co-placed near redemption counters where prize-eligibility rules permit conversion of redemption tickets to vending purchase or branded promotional pricing. Coordinated with FEC redemption team and prize-counter operations at concept stage." },
      { label: "Surge inventory for birthday weekends and school breaks", value: "Birthday-party weekends drive 2-3x normal velocity at family-prime placements; school break windows (spring break, winter break, summer) drive sustained 1.5-2x velocity. Standing surge orders triggered by FEC event calendar and school-district calendar. Operator topoff inside 24 hours of high-velocity windows." },
      { label: "Telemetry-driven day-part performance", value: "Operator dashboard surfaces day-part velocity curve, per-SKU sales by hour, energy-drink compliance audit, and surge-week inventory consumption. Data feeds day-part planogram optimization, school-break forecasting, and party-package coordination. Modern operator standard; generic office operators lack day-part analytics." },
      { label: "Operator capability for arcade format", value: "Tier-1 operator capability profile: arcade-format experience at comparable FECs, day-part SKU rotation infrastructure, arcade-card payment integration, redemption-counter co-placement coordination, youth-caffeine compliance program, and surge cadence keyed to school and event calendars. Verify references at comparable arcade and FEC operations." },
    ],
  }),
  tipCards({
    heading: "Five arcade and FEC vending mistakes",
    sub: "Each documented in FEC post-deployment reviews. All preventable with structured operator capability vetting and program design.",
    items: [
      { title: "Treating arcade vending like office vending", body: "Office-style planogram with stable SKU mix and quarterly rotation cadence underperforms 30-50% at FEC velocity. Day-part SKU rotation, family-friendly evening mix, school-group after-school window, and adult-mix late-night rotation matter. Specify day-part planogram at proposal." },
      { title: "Energy drinks running pre-9 PM at youth-traffic venues", body: "Energy drinks accessible to under-18 customers create regulatory exposure under state youth-caffeine rules and parent complaint volume. Build time-of-day vend lockout into planogram. Adult window post-9 PM opens to energy drink mix at adult-only late-night venues only." },
      { title: "No arcade-card payment integration", body: "FEC chains running Embed, Sacoa, Intercard, or Semnox arcade-card systems expect vending integration. Cashless-only without arcade-card integration leaves card-balance utilization on the table and creates friction for family groups. Specify arcade-card integration at proposal where applicable." },
      { title: "Glass-front machines in active game-floor zones", body: "Standard glass-front machines fail at active game-floor placements due to claw-machine rebound, redemption-game prize toss, and general game-floor traffic. Reinforced glass or zero-glass equipment in high-traffic game-floor zones. Tip-resistant anchoring required." },
      { title: "No surge cadence for school breaks and birthday weekends", body: "Standard route schedule produces 30-50% stockout rates during birthday-party weekends and school break windows. Standing surge orders triggered by FEC event calendar and school-district calendar. Operator topoff inside 24 hours of high-velocity windows." },
    ],
  }),
  decisionTree({
    heading: "Does our arcade or FEC vending program have arcade-format capability?",
    question: "Does our operator run day-part SKU rotation, arcade-card payment integration where supported, redemption-counter co-placement, youth-caffeine compliance, surge cadence for school breaks and birthday weekends, and telemetry-driven day-part performance reporting?",
    yesBranch: {
      title: "Arcade-format program — verify day-part reporting and surge cadence.",
      description: "Program supports arcade and FEC velocity with day-part SKU rotation, payment integration, redemption co-placement, and surge inventory cadence. Confirm telemetry-driven day-part performance reporting, school and event calendar coordination, and youth-caffeine compliance audit cadence. Tie to FEC partnership program where applicable.",
      finalTone: "go",
      finalLabel: "ARCADE-FORMAT PROGRAM",
    },
    noBranch: {
      title: "Office-style refresh baseline — restructure for arcade format.",
      description: "Office-style refresh underperforms 30-50% at arcade and FEC velocity and creates youth-caffeine compliance exposure. Restructure with operator on arcade-format capability: day-part SKU rotation, arcade-card payment integration, redemption co-placement, surge cadence, and telemetry-driven day-part reporting. Verify operator references at comparable FECs before scaling.",
      finalTone: "stop",
      finalLabel: "RESTRUCTURE",
    },
  }),
  caseStudy({
    tag: "Capability scenario · Multi-attraction FEC",
    title: "Vending program at a 45,000 sq ft family entertainment center",
    context:
      "Capability description for a 45,000 sq ft FEC running arcade + bowling + mini-golf + party rooms + redemption counter. 12 vending placements (game-floor beverage, redemption-counter candy, party-room beverage, lounge snack, entry/exit beverage). Operator runs day-part SKU rotation, arcade-card integration (Embed system), redemption co-placement, and surge cadence keyed to school district calendar.",
    meta: [
      { label: "Venue scale", value: "45,000 sq ft FEC + 350 arcade games + bowling + mini-golf + 4 party rooms" },
      { label: "Vending footprint", value: "12 placements across game floor, redemption, party rooms, lounge, entry/exit" },
      { label: "Payment surface", value: "Cashless + Embed arcade-card integration" },
      { label: "Operator profile", value: "Tier-1 with arcade-format experience + day-part SKU rotation + surge cadence" },
    ],
    results: [
      { number: "$2.5-4K", label: "monthly revenue per machine target across mid-velocity placements" },
      { number: "$4-6", label: "average transaction value target with arcade-card integration" },
      { number: "2-3x", label: "surge inventory multiplier on birthday-party weekends" },
      { number: "3", label: "day-part planogram rotations (after-school, family prime, adult)" },
    ],
  }),
  inlineCta({
    text: "Want the arcade and FEC vending framework (day-part planogram template, arcade-card integration spec, redemption co-placement map, surge calendar)?",
    buttonLabel: "Get the arcade vending framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support arcade and family entertainment center vending program design — including day-part SKU rotation across after-school, family-prime, and adult windows, arcade-card payment integration with Embed, Sacoa, Intercard, and Semnox systems, redemption-counter co-placement coordination, youth-caffeine compliance, surge inventory cadence for birthday weekends and school break windows, equipment hardening for active game-floor zones, and telemetry-driven day-part performance reporting. Recommendations and benchmarks reflect operator-side data across comparable FEC and arcade operations.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does an arcade vending program look like?", answer: "Day-part SKU rotation across after-school (3-6 PM), family-prime (6-9 PM), and adult (9 PM-close at 18+ venues). Cashless-only with arcade-card integration where supported. Redemption-counter co-placement for candy and toy SKUs. Youth-caffeine compliance with energy drink restriction pre-9 PM at under-18 traffic venues. Surge cadence keyed to school district and event calendar.", audience: "FEC General Managers" },
      { question: "What revenue should we expect from arcade vending?", answer: "$1,800-$6,000 per machine per month at well-placed FECs versus $400-$1,200 at office baseline. Average transaction value $3-7 reflecting impulse purchase and family group buys. Highest revenue at game-floor beverage placements and redemption-counter co-placed candy machines.", audience: "FEC Owners" },
      { question: "How does arcade-card integration work?", answer: "Major arcade-card systems (Embed, Sacoa, Intercard, Semnox) support vending payment integration. Customer taps arcade card at vending machine; vending purchase deducted from card balance. Drives card-balance utilization, reduces friction for family groups, and consolidates payment surface across game floor and concessions.", audience: "Operations" },
      { question: "What about energy drinks at venues with under-18 customers?", answer: "Energy drinks restricted before 9 PM at venues with under-18 customer traffic. State youth-caffeine rules apply — confirm state-specific rules. Operator builds time-of-day vend lockout into planogram. Adult-only late-night venues (18+ bar-cades) open to energy drink mix during adult window only.", audience: "Compliance" },
      { question: "Should candy machines go near the redemption counter?", answer: "Yes — candy bars, candy multipack, fun-size confection, and small-toy SKUs co-placed near redemption counters where prize-eligibility rules permit. Supports conversion of redemption tickets to vending purchase or branded promotional pricing. Coordinated with FEC redemption team at concept stage.", audience: "Operations" },
      { question: "How do we handle birthday-party weekends?", answer: "Birthday-party weekends drive 2-3x normal velocity at family-prime placements. Standing surge orders triggered by FEC event calendar. Operator topoff inside 24 hours of high-velocity windows. Party-mode planogram with extra candy, beverage variety, and family-friendly snack mix during high-volume weekends.", audience: "Operations" },
      { question: "What allergen-restricted SKUs should we carry?", answer: "15-20% of slots allocated to allergen-restricted formats: gluten-free, dairy-free, vegan, nut-free, and kosher options. Heavier than office baseline because school groups and family bookings include dietary-restricted attendees at higher rates. Tag SKUs in operator dashboard; visible tags at point of purchase.", audience: "Operations" },
      { question: "Which operators can credibly run arcade-format vending?", answer: "Tier-1 operators with arcade-format experience at comparable FECs, day-part SKU rotation infrastructure, arcade-card payment integration capability, redemption-counter co-placement coordination, youth-caffeine compliance programs, and surge cadence keyed to school and event calendars. Verify references at comparable arcade and FEC operations.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "IAAPA — International Association of Amusement Parks and Attractions", url: "https://www.iaapa.org/", note: "Industry trade body covering family entertainment center operations, attraction safety, and concessions practice" },
      { label: "AAMA — American Amusement Machine Association", url: "https://coin-op.org/", note: "Trade body covering coin-op and arcade industry standards, prize-eligibility rules, and operator practice" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry body covering vending operator standards including day-part programming and arcade-format guidance" },
      { label: "Embed Card Systems — arcade payment integration documentation", url: "https://embedcard.com/", note: "Arcade-card system supporting integrated vending and game payment surfaces at FECs and arcades" },
      { label: "FDA Caffeine and Beverage Guidance", url: "https://www.fda.gov/food/food-additives-petitions/pure-and-highly-concentrated-caffeine", note: "Federal guidance on caffeine in beverages relevant to youth-caffeine compliance at family entertainment venues" },
    ],
  }),
  relatedGuides({
    heading: "Related entertainment venue guides",
    items: [
      { eyebrow: "Sister guide", title: "Custom vending at theme parks", description: "Custom-format vending equipment, theme integration, and operator capability for theme park and attraction operations.", href: "/vending-for-entertainment-venues/custom-vending-theme-parks" },
      { eyebrow: "Sister guide", title: "Stadium and arena vending services", description: "Service-line specifications, telemetry expectations, and operator capability vetting for stadium and arena programs.", href: "/vending-for-entertainment-venues/stadium-and-arena-vending-services" },
      { eyebrow: "Hub", title: "All entertainment venue vending guides", description: "Format selection, premium-zone placement, operator vetting, and brand integration across arenas, stadiums, and concert venues.", href: "/vending-for-entertainment-venues" },
    ],
  }),
]);
process.exit(0);
