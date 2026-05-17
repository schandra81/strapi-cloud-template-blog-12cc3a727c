import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("hotel-vending-seasonal-products", [
  tldr({
    heading: "How should hotels plan seasonal product rotation in vending — and what drives the quarterly planogram?",
    paragraph:
      "Hotel vending seasonal product rotation has matured from static year-round planograms to dynamic seasonal + holiday + group-booking-driven SKU refinement. Modern hotel-experienced operators (Canteen Vending, Five Star Food Service, Aramark Refreshment Services, regional hotel-experienced operators) run seasonal rotation across four temporal layers: (1) quarterly seasonal — summer (May-Sep) cold beverage + electrolyte hydration + lighter snack + fresh fruit + grab-and-go salad mix shifts; fall (Sep-Nov) hot beverage + soup + comfort-snack + harvest fresh; winter (Nov-Feb) hot beverage + soup + warm-meal + cold/flu wellness; spring (Mar-May) lighter fresh + fitness-focused + transition mix; (2) holiday + event rotation — Thanksgiving/Christmas/Hanukkah/Eid/Diwali/Lunar New Year culturally-aligned SKU expansion at properties with diverse guest demographic; Valentine's Day + Mother's Day premium SKU expansion at upscale properties; Super Bowl + March Madness + Olympics + Fourth of July event-driven planogram refresh; (3) group-booking-driven — wedding + conference + sports team + tour group + extended-stay guest demographic alignment with operator account team 1-2 weeks advance notice; (4) guest demographic + season cross-overlay — summer business traveler vs leisure family vs extended-stay vs group-booking SKU mix at same property differs substantially. Premium urban + luxury / upscale hotels coordinate all four temporal layers with operator account team at quarterly planogram review + monthly tactical review + event-driven advance-notice protocol. Limited-service + smaller properties typically rely on operator-default seasonal rotation without active hotel coordination. Modern operators support all four layers; legacy operators may default to static year-round planogram with minor seasonal tweaks. This guide walks through each temporal layer with the SKU strategy, operator coordination cadence, brand-tier-specific implementation depth, and the contract clauses that lock in dynamic seasonal practice.",
    bullets: [
      { emphasis: "Four temporal layers:", text: "Quarterly seasonal + holiday/event rotation + group-booking-driven + guest demographic cross-overlay. Modern hotel-experienced operators coordinate all four with operator account team at quarterly + monthly + event-driven cadence." },
      { emphasis: "Quarterly seasonal SKU strategy:", text: "Summer cold beverage + electrolyte + lighter snack + fresh; fall hot beverage + soup + comfort + harvest fresh; winter hot + warm-meal + wellness; spring lighter + fitness + transition mix." },
      { emphasis: "Group-booking-driven planogram refinement:", text: "Wedding + conference + sports team + tour group + extended-stay guest demographic alignment. Operator account team 1-2 weeks advance notice. Advance-restocks affected machines with event-aligned SKU mix." },
    ],
  }),
  statStrip({
    heading: "Hotel vending seasonal rotation benchmarks",
    stats: [
      { number: "4 temporal layers", label: "rotation framework", sub: "quarterly + holiday + group-booking + demographic", accent: "blue" },
      { number: "+18-30%", label: "revenue lift", sub: "active seasonal rotation vs static", accent: "orange" },
      { number: "20-30%", label: "SKU turnover per quarter", sub: "at active hotel-experienced operators", accent: "blue" },
      { number: "1-2 wk", label: "event advance notice", sub: "for group-booking SKU refresh", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Quarterly seasonal SKU strategy at hotels",
    sub: "Quarterly seasonal SKU strategy across four seasons. Active rotation produces +18-30% revenue lift vs static year-round planogram.",
    headers: ["Category", "Summer (May-Sep)", "Fall (Sep-Nov)", "Winter (Nov-Feb)", "Spring (Mar-May)"],
    rows: [
      ["Beverage focus", "Cold beverage + electrolyte hydration + iced tea + cold brew", "Hot beverage + apple cider + pumpkin spice + warm comfort", "Hot beverage + cocoa + warm comfort + cold/flu wellness", "Mixed + lighter beverage + spring water + fitness hydration"],
      ["Snack focus", "Lighter snack + fresh fruit + trail mix + nuts + granola bar", "Comfort snack + harvest fresh + apples + pears + nuts + jerky", "Warm comfort snack + soup + cocoa + protein bar + nuts", "Lighter snack + fitness-focused + protein bar + granola"],
      ["Fresh / grab-and-go", "Salad mix + fresh fruit + yogurt + grab-and-go fresh + cold sandwich", "Harvest fresh + apple + pumpkin + pear + warm + grab-and-go", "Warm meal + soup + warm sandwich + comfort fresh", "Lighter fresh + spring vegetable + transition fresh + grab-and-go"],
      ["Premium SKU expansion", "Cold-brew coffee + premium electrolyte + organic snack", "Pumpkin spice + premium harvest + organic comfort", "Premium hot cocoa + organic cold/flu + premium comfort", "Premium spring fresh + organic fitness + transition premium"],
      ["Healthy SKU emphasis", "Higher (summer wellness positioning)", "Mid (harvest comfort)", "Lower (winter comfort)", "Higher (spring fitness)"],
      ["Pricing premium opportunity", "Mid (cold-brew + electrolyte premium)", "High (pumpkin spice + harvest premium)", "High (warm-meal + comfort premium)", "Mid (fitness + spring premium)"],
    ],
  }),
  specList({
    heading: "Temporal layer detail",
    items: [
      { label: "Quarterly seasonal rotation — summer (May-Sep)", value: "Cold beverage focus: iced tea, cold brew coffee, iced lattes, sparkling water, electrolyte hydration (Gatorade, Liquid IV, Body Armor, Powerade). Lighter snack: fresh fruit (apple, banana, orange), trail mix, nuts, granola bar, yogurt, single-serve hummus. Fresh / grab-and-go: salad mix, fresh fruit cup, yogurt parfait, cold sandwich, grab-and-go fresh. Premium SKU expansion: cold-brew coffee, premium electrolyte, organic snack. Healthy SKU emphasis higher (summer wellness positioning). Pricing premium opportunity mid." },
      { label: "Quarterly seasonal rotation — fall (Sep-Nov)", value: "Hot beverage focus: hot coffee, espresso, apple cider, pumpkin spice latte, warm comfort. Comfort snack: harvest fresh (apple, pear, plum), nuts, jerky, dried fruit, pumpkin-spice bar. Fresh / grab-and-go: harvest fresh, apple, pumpkin, pear, warm + grab-and-go. Premium SKU expansion: pumpkin spice, premium harvest, organic comfort. Healthy SKU emphasis mid. Pricing premium opportunity high (pumpkin spice + harvest premium). Operator account team coordinates pumpkin spice + apple cider + harvest comfort SKU expansion." },
      { label: "Quarterly seasonal rotation — winter (Nov-Feb)", value: "Hot beverage focus: hot coffee, cocoa, espresso, warm comfort, herbal tea. Warm comfort snack: soup, cocoa, protein bar, nuts, warm comfort. Fresh / grab-and-go: warm meal, soup, warm sandwich, comfort fresh. Premium SKU expansion: premium hot cocoa, organic cold/flu wellness, premium comfort. Cold/flu wellness SKUs (vitamin C, zinc lozenge, throat soothing) at flu season properties (Nov-Mar). Healthy SKU emphasis lower (winter comfort). Pricing premium opportunity high (warm-meal + comfort premium)." },
      { label: "Quarterly seasonal rotation — spring (Mar-May)", value: "Mixed + lighter beverage: spring water, lighter coffee, fitness hydration, electrolyte starter. Lighter snack: fitness-focused, protein bar, granola, nuts, lighter snack. Fresh / grab-and-go: lighter fresh, spring vegetable, transition fresh, grab-and-go. Premium SKU expansion: premium spring fresh, organic fitness, transition premium. Healthy SKU emphasis higher (spring fitness positioning, post-winter wellness). Pricing premium opportunity mid (fitness + spring premium)." },
      { label: "Holiday + event rotation", value: "Thanksgiving / Christmas / Hanukkah / Eid / Diwali / Lunar New Year culturally-aligned SKU expansion at properties with diverse guest demographic. Valentine's Day + Mother's Day premium SKU expansion at upscale properties (premium chocolate, gourmet snack, premium beverage). Super Bowl + March Madness + Olympics + Fourth of July event-driven planogram refresh (gameday snack mix, themed premium SKU). Modern hotel-experienced operators coordinate; legacy operators may default to static planogram with minor holiday tweaks only." },
      { label: "Group-booking-driven planogram refinement", value: "Wedding + conference + sports team + tour group + extended-stay guest demographic alignment. Operator account team 1-2 weeks advance notice on upcoming group bookings. Advance-restocks affected machines (lobby, conference center, fitness center near event space) with event-aligned SKU mix. Wedding: premium fresh + grab-and-go + chocolate + champagne-adjacent. Conference: business traveler + healthy + grab-and-go + variety. Sports team: athletic + protein + hydration + recovery. Tour group: variety + grab-and-go + multicultural alignment. Extended-stay: variety + warm-meal + fresh + grocery-adjacent." },
      { label: "Guest demographic + season cross-overlay", value: "Summer business traveler (lighter + grab-and-go + healthy + cold) vs leisure family (variety + comfort + kid-friendly + cold) vs extended-stay (grocery-adjacent + warm-meal + variety) vs group-booking (event-aligned) at same property differs substantially. Modern hotel-experienced operators support guest demographic cross-overlay at planogram refinement; legacy operators may default to single-mix planogram. Brand-tier alignment (limited-service vs full-service vs luxury / upscale) further differentiates." },
      { label: "Brand-tier-specific implementation depth", value: "Limited-service: operator-default seasonal rotation with minor quarterly adjustment. Mid-size full-service: quarterly planogram review with operator account team + minor holiday + group-booking tweaks. Luxury / upscale: monthly tactical review + quarterly strategic review + holiday + group-booking + guest demographic cross-overlay + premium SKU expansion + custom event-driven refresh. Match implementation depth to brand-tier positioning + amenity-program investment." },
      { label: "Revenue lift from active seasonal rotation", value: "Active seasonal rotation produces +18-30% revenue lift vs static year-round planogram at modern hotel-experienced operator. Driven by: seasonal SKU velocity capture (summer cold beverage + fall pumpkin spice + winter warm-meal + spring fitness), premium SKU pricing opportunity (seasonal premium SKUs carry $0.50-2.50 retail premium vs commodity), guest demographic alignment (matched SKU mix lifts conversion), event-driven advance-restocking (group bookings + holidays + sports events). Legacy operators with static planogram leave revenue on table." },
    ],
  }),
  timeline({
    heading: "Hotel seasonal rotation cycle — annual cadence",
    sub: "Annual cycle of quarterly planogram review + monthly tactical + event-driven advance-notice coordination with operator account team.",
    howToName: "Annual seasonal rotation",
    totalTime: "Annual continuous cycle",
    steps: [
      { label: "January", title: "Winter planogram + year-ahead planning", description: "Operator account team reviews winter planogram performance (Nov-Feb): warm-meal + cocoa + cold/flu wellness SKU velocity, premium SKU pricing capture, group-booking event success patterns. Year-ahead seasonal rotation plan documented. Hotel front office + general manager input on guest demographic patterns + brand-tier positioning for upcoming year." },
      { label: "February-March", title: "Spring transition planogram", description: "Quarterly planogram review with operator account team transitions winter → spring planogram (Mar-May). Lighter beverage + fitness hydration + transition fresh + lighter snack + spring fitness positioning. Premium SKU expansion at upscale properties. Healthy SKU emphasis higher (post-winter wellness). Pricing premium opportunity mid." },
      { label: "April-May", title: "Summer transition + Mother's Day event", description: "Quarterly planogram review transitions spring → summer planogram (May-Sep). Cold beverage + electrolyte + lighter snack + fresh + grab-and-go + cold-brew coffee + premium electrolyte + organic snack. Mother's Day event-driven advance-restock at upscale properties. Healthy SKU emphasis higher (summer wellness positioning)." },
      { label: "August-September", title: "Fall transition + back-to-school event", description: "Quarterly planogram review transitions summer → fall planogram (Sep-Nov). Hot beverage + apple cider + pumpkin spice + comfort snack + harvest fresh + warm + grab-and-go + pumpkin spice premium + harvest premium. Back-to-school + Labor Day event-driven advance-restock. Pricing premium opportunity high (pumpkin spice + harvest premium)." },
      { label: "October-November", title: "Holiday + winter transition", description: "Quarterly planogram review transitions fall → winter planogram (Nov-Feb). Hot beverage + cocoa + warm-meal + comfort + cold/flu wellness. Holiday event-driven (Thanksgiving + Christmas + Hanukkah + Eid + Diwali) culturally-aligned SKU expansion at properties with diverse demographic. Pricing premium opportunity high (warm-meal + comfort premium)." },
      { label: "Continuous", title: "Monthly tactical + event-driven advance-restocking", description: "Monthly tactical review of per-coil sell-through + telemetry summary. Event-driven advance-restocking: operator account team 1-2 weeks advance notice on group bookings + conferences + sports teams + tour groups. Advance-restocks affected machines with event-aligned SKU mix. Modern operators support; legacy operators may miss." },
    ],
  }),
  tipCards({
    heading: "Eight seasonal rotation patterns to lock in",
    sub: "Each pattern appears at modern hotel-experienced operator practice. Build into operator service contract + planogram review cadence.",
    items: [
      { title: "Quarterly planogram review with operator account team", body: "Quarterly 60-min planogram review with operator account team coordinated with quarterly seasonal transition (Jan/Apr/Jul/Oct timing typical). Review prior quarter performance, plan next quarter SKU mix + premium expansion + pricing strategy. Modern hotel-experienced operators bring data; legacy operators may not have telemetry-driven sell-through data. Build into operator service contract." },
      { title: "Monthly tactical review on per-coil sell-through", body: "Monthly tactical review of per-coil sell-through telemetry, stockout incidence, SKU expansion + pruning candidates within current quarter planogram. Operator account team initiated; hotel front office reviews. Cadence supports dynamic SKU expansion + pruning within quarter; modern hotel-experienced operators support natively; legacy operators may not have process." },
      { title: "Holiday + event-driven advance-restock protocol", body: "Holiday + event-driven advance-restock protocol with operator account team: Thanksgiving + Christmas + Hanukkah + Eid + Diwali + Lunar New Year + Valentine's Day + Mother's Day + Super Bowl + March Madness + Olympics + Fourth of July. 1-2 weeks advance notice typical. Operator advance-restocks affected machines with event-aligned SKU mix. Modern operators support; legacy operators may miss." },
      { title: "Group-booking advance-notice channel", body: "Establish communication channel with operator account team for upcoming wedding + conference + sports team + tour group + extended-stay group bookings. 1-2 weeks advance notice. Operator advance-restocks affected machines (lobby, conference center, fitness near event space) with event-aligned SKU mix. Modern operators support; legacy operators may miss entirely. Build into operator account management process." },
      { title: "Premium SKU expansion at peak season + holiday + events", body: "Premium SKU expansion at peak season (summer cold-brew, fall pumpkin spice, winter premium hot cocoa, spring premium fitness) + holiday (Valentine's premium chocolate, Christmas premium variety) + events (wedding premium fresh + chocolate + champagne-adjacent, conference business + healthy + grab-and-go). Premium SKUs carry $0.50-2.50 retail premium vs commodity. Modern operators support; legacy operators may default to commodity SKU mix." },
      { title: "Cold/flu wellness SKU at flu season (Nov-Mar)", body: "Cold/flu wellness SKU expansion at flu season properties (Nov-Mar): vitamin C, zinc lozenge, throat soothing, herbal tea, comfort. Appeals to business traveler + family + extended-stay guest demographic with wellness positioning. Modern hotel-experienced operators support; legacy operators may not stock. Coordinate with HR / wellness office on subsidization where applicable." },
      { title: "Multicultural + holiday demographic alignment", body: "Hotels with diverse guest demographic (international urban + airport + convention center properties) benefit from multicultural + holiday SKU expansion: Eid + Diwali + Lunar New Year + Hanukkah + Ramadan culturally-aligned SKU expansion + halal/kosher/vegetarian/gluten-free dietary accommodation. Modern hotel-experienced operators support; legacy operators may default to single-culture SKU mix." },
      { title: "Brand-tier-specific implementation depth", body: "Match implementation depth to brand-tier positioning: limited-service (operator-default + minor quarterly adjustment), mid-size full-service (quarterly review + minor holiday/group-booking tweaks), luxury / upscale (monthly tactical + quarterly strategic + holiday + group-booking + guest demographic + premium SKU + custom event-driven). Build tier-specific cadence into operator service contract." },
    ],
  }),
  decisionTree({
    heading: "Should we coordinate active seasonal rotation or rely on operator-default?",
    question: "Is your hotel full-service or luxury / upscale tier (200+ rooms), with meaningful per-machine volume ($1,000+ monthly), diverse guest demographic, and willingness to coordinate quarterly + monthly + event-driven review with operator account team?",
    yesBranch: {
      title: "Coordinate active four-layer seasonal rotation.",
      description: "Full-service + luxury / upscale properties with meaningful per-machine volume + diverse guest demographic benefit from active four-layer seasonal rotation. Quarterly planogram review + monthly tactical + holiday + event-driven advance-restocking + group-booking-driven refinement + guest demographic cross-overlay + premium SKU expansion + brand-tier-matched depth. Modern hotel-experienced operator only; +18-30% revenue lift vs static.",
      finalTone: "go",
      finalLabel: "ACTIVE · FOUR-LAYER",
    },
    noBranch: {
      title: "Operator-default seasonal rotation acceptable at limited-service.",
      description: "Limited-service + smaller properties can rely on operator-default seasonal rotation with minor quarterly adjustment. Quarterly transition to summer/fall/winter/spring SKU mix at operator discretion; modest holiday tweaks. Modern hotel-experienced operator still preferred; legacy operator gap on seasonal practice meaningful but absolute dollar impact modest at low-volume placements. Revisit active rotation at facility expansion or volume growth.",
      finalTone: "stop",
      finalLabel: "OPERATOR-DEFAULT · LIMITED",
    },
  }),
  keyTakeaways({
    heading: "Hotel vending seasonal rotation — what to plan for",
    takeaways: [
      { text: "Four temporal layers: quarterly seasonal + holiday/event rotation + group-booking-driven + guest demographic cross-overlay." },
      { text: "Quarterly SKU strategy: summer cold/electrolyte/light; fall hot/harvest/comfort; winter hot/warm/wellness; spring lighter/fitness/transition." },
      { text: "Holiday + event rotation: Thanksgiving/Christmas/Hanukkah/Eid/Diwali/Lunar New Year + Valentine's/Mother's Day + Super Bowl/March Madness/Olympics/Fourth of July." },
      { text: "Group-booking-driven planogram refinement: wedding + conference + sports team + tour group + extended-stay demographic alignment with 1-2 week advance notice." },
      { text: "Active seasonal rotation produces +18-30% revenue lift vs static year-round planogram." },
      { text: "Quarterly planogram review with operator account team + monthly tactical review + event-driven advance-restock protocol." },
      { text: "Premium SKU expansion at peak season + holiday + events: $0.50-2.50 retail premium vs commodity." },
      { text: "Brand-tier-specific implementation depth: limited-service (minor) to luxury / upscale (full four-layer + monthly + premium + custom)." },
    ],
  }),
  inlineCta({
    text: "Want the hotel seasonal rotation framework (4-layer model + quarterly + monthly + event-driven cadence + premium SKU strategy)?",
    buttonLabel: "Get the seasonal framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac advises hotel clients on vending seasonal product rotation — quarterly seasonal SKU strategy (summer cold/electrolyte, fall hot/harvest, winter warm/wellness, spring lighter/fitness), holiday + event-driven planogram refresh (Thanksgiving/Christmas/Hanukkah/Eid/Diwali/Valentine's/Mother's Day/Super Bowl/etc.), group-booking-driven SKU refinement (wedding/conference/sports team/tour group/extended-stay), guest demographic cross-overlay, premium SKU expansion at peak season + holiday + events, brand-tier-matched implementation depth. The seasonal benchmarks reflect modern hotel-experienced operator practice and hotel general manager + front office feedback patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does seasonal rotation work in hotel vending?", answer: "Four temporal layers: quarterly seasonal (summer cold/electrolyte/light, fall hot/harvest/comfort, winter warm/wellness, spring lighter/fitness/transition), holiday + event rotation (Thanksgiving/Christmas/Hanukkah/Eid/Diwali/Lunar New Year/Valentine's/Mother's Day/Super Bowl/March Madness/Olympics/Fourth of July), group-booking-driven (wedding/conference/sports team/tour group/extended-stay), guest demographic cross-overlay. Modern hotel-experienced operators coordinate all four layers at quarterly + monthly + event-driven cadence.", audience: "Hotel Operators" },
      { question: "What summer SKUs should hotels stock?", answer: "Summer (May-Sep): cold beverage focus (iced tea, cold brew coffee, iced latte, sparkling water, electrolyte hydration like Gatorade/Liquid IV/BodyArmor/Powerade), lighter snack (fresh fruit, trail mix, nuts, granola bar, yogurt, hummus), fresh / grab-and-go (salad mix, fresh fruit cup, yogurt parfait, cold sandwich), premium SKU expansion (cold-brew coffee, premium electrolyte, organic snack). Healthy SKU emphasis higher (summer wellness positioning).", audience: "Front Office" },
      { question: "What fall + holiday SKUs should hotels stock?", answer: "Fall (Sep-Nov): hot beverage focus (hot coffee, espresso, apple cider, pumpkin spice latte), comfort snack (harvest fresh — apple/pear/plum, nuts, jerky, pumpkin-spice bar), harvest fresh + warm grab-and-go, premium SKU expansion (pumpkin spice premium, organic harvest comfort). Holiday: Thanksgiving + Christmas + Hanukkah + Eid + Diwali + Lunar New Year culturally-aligned SKU expansion at diverse demographic properties.", audience: "Front Office" },
      { question: "What winter + cold/flu SKUs are recommended?", answer: "Winter (Nov-Feb): hot beverage focus (hot coffee, cocoa, espresso, herbal tea), warm comfort snack (soup, cocoa, protein bar, nuts), fresh / grab-and-go (warm meal, soup, warm sandwich), premium SKU expansion (premium hot cocoa, organic cold/flu, premium comfort). Cold/flu wellness SKUs (vitamin C, zinc lozenge, throat soothing, herbal tea) at flu season properties (Nov-Mar). Healthy SKU emphasis lower (winter comfort positioning).", audience: "Wellness" },
      { question: "What spring SKUs work best?", answer: "Spring (Mar-May): mixed + lighter beverage (spring water, lighter coffee, fitness hydration, electrolyte starter), lighter snack (fitness-focused, protein bar, granola, nuts), lighter fresh (spring vegetable, transition fresh, grab-and-go), premium SKU expansion (premium spring fresh, organic fitness, transition premium). Healthy SKU emphasis higher (spring fitness positioning, post-winter wellness).", audience: "Wellness" },
      { question: "How do group bookings affect seasonal planning?", answer: "Group-booking-driven planogram refinement: wedding (premium fresh + grab-and-go + chocolate + champagne-adjacent), conference (business traveler + healthy + grab-and-go + variety), sports team (athletic + protein + hydration + recovery), tour group (variety + grab-and-go + multicultural alignment), extended-stay (grocery-adjacent + warm-meal + variety). Operator account team 1-2 weeks advance notice; advance-restocks affected machines (lobby, conference center, fitness near event space).", audience: "Events Coordinator" },
      { question: "What revenue lift does active seasonal rotation produce?", answer: "Active seasonal rotation produces +18-30% revenue lift vs static year-round planogram at modern hotel-experienced operator. Driven by seasonal SKU velocity capture, premium SKU pricing opportunity ($0.50-2.50 retail premium vs commodity), guest demographic alignment, event-driven advance-restocking. Legacy operators with static planogram leave revenue on table. Material differentiator at mid-size + larger properties with meaningful per-machine volume.", audience: "Finance" },
      { question: "Does brand-tier affect seasonal depth?", answer: "Limited-service: operator-default + minor quarterly adjustment. Mid-size full-service: quarterly planogram review + minor holiday + group-booking tweaks. Luxury / upscale: monthly tactical + quarterly strategic + holiday + group-booking + guest demographic cross-overlay + premium SKU expansion + custom event-driven refresh. Match implementation depth to brand-tier positioning + amenity-program investment + per-machine volume.", audience: "Brand Standards" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — seasonal vending category trends", url: "https://www.namanow.org/", note: "Industry trade association covering vending category seasonality + SKU rotation practices" },
      { label: "AHLA — American Hotel & Lodging Association amenity programs", url: "https://www.ahla.com/", note: "Industry guidance on hotel amenity program seasonal planning + guest demographic alignment" },
      { label: "Hotel Management Magazine — amenity ROI + seasonal case studies", url: "https://www.hotelmanagement.net/", note: "Property-side guidance on amenity program seasonal planning + premium SKU strategy" },
      { label: "STR — hotel revenue + occupancy seasonality benchmarks", url: "https://str.com/", note: "Hospitality data on hotel revenue seasonality + group-booking patterns + demographic trends" },
      { label: "Automatic Merchandiser — vending category sales by season", url: "https://www.vendingmarketwatch.com/", note: "Industry publication covering vending category sales trends by season + holiday + event" },
    ],
  }),
  relatedGuides({
    heading: "Related hotel vending guides",
    items: [
      { eyebrow: "Hub", title: "All hotel vending guides", description: "Equipment, placement, planogram, cold-chain, payment, brand-finish, and operator capability at hotels.", href: "/vending-for-hotels" },
      { eyebrow: "Sister guide", title: "Hotel vending inventory management", description: "Telemetry-driven restocking, planogram refinement, cold-chain SLA, and reporting cadence.", href: "/vending-for-hotels/hotel-vending-inventory-management" },
      { eyebrow: "Operations", title: "Hotel vending marketing to guests", description: "Six-touchpoint marketing framework, PMS integration with folio-charging, brand-tier-matched depth.", href: "/vending-for-hotels/hotel-vending-marketing-guests" },
    ],
  }),
]);
process.exit(0);
