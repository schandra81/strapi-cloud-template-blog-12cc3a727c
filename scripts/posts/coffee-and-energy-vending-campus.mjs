import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("coffee-and-energy-vending-campus", [
  tldr({
    heading: "How should campus vending handle coffee and energy drinks?",
    paragraph:
      "Coffee and energy drinks together represent 25-45% of campus vending revenue, with the share rising during finals and exam periods. The right approach varies by placement type: residence halls and libraries lean heavy on energy drinks and cold brew (late-night study fuel), academic buildings lean on coffee (morning consumption), gyms lean on pre-workout caffeine (Celsius, Bang, Ghost Energy), career centers favor moderate coffee/tea (professional context). The category itself splits into sub-categories that operators sometimes conflate: hot coffee (drip, fresh-brew specialty machines), cold coffee (cold brew, RTD bottles), traditional energy drinks (Monster, Red Bull, Rockstar), healthier energy (Celsius, C4, Ghost, Reign), and energy water / functional drinks (Liquid IV with caffeine, AHA energy). Modern campus planograms include all five categories, weighted by placement. Pricing tolerance is high for caffeine — students will pay a premium versus convenience stores when the alternative is leaving campus during a study session.",
    bullets: [
      { emphasis: "Caffeine share is large and concentrated:", text: "25-45% of campus vending revenue from coffee + energy. Higher at finals (40-55%). Operators that under-stock caffeine miss the largest single category opportunity." },
      { emphasis: "Five sub-categories matter:", text: "Hot coffee, cold coffee, traditional energy drinks, healthier energy, and energy water/functional. Modern planograms include all five; weight by placement type." },
      { emphasis: "Placement tunes the mix:", text: "Residence halls + libraries: heavy energy + cold brew. Academic buildings: coffee-heavy. Gyms: pre-workout caffeine. Career centers: moderate coffee/tea. Customize per placement." },
    ],
  }),
  statStrip({
    heading: "Campus coffee + energy vending benchmarks",
    stats: [
      { number: "25-45%", label: "of campus vending revenue", sub: "from caffeine category", accent: "blue" },
      { number: "+40-55%", label: "share during finals", sub: "caffeine demand spike", accent: "blue" },
      { number: "5", label: "sub-categories", sub: "hot, cold, traditional, healthy, functional", accent: "blue" },
      { number: "+15-25%", label: "premium pricing tolerance", sub: "for caffeine on campus", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Caffeine sub-categories — share and audience by placement",
    sub: "Five sub-categories with distinct audience and placement fit. Modern campus planograms include all five, weighted by location.",
    headers: ["Sub-category", "Best placement", "Peak window", "Top SKU examples"],
    rows: [
      ["Hot coffee (fresh brew)", "Academic buildings, career center", "Morning + 2-4 PM dip", "Starbucks pods, House Blend, cold brew kits"],
      ["Cold coffee / cold brew RTD", "Residence halls, library, gym", "Afternoon + late night", "Starbucks Cold Brew, La Colombe, Stok"],
      ["Traditional energy drinks", "Residence halls, gym, library", "Late afternoon + late night", "Monster, Red Bull, Rockstar, NOS"],
      ["Healthier energy (low-cal, functional)", "Gym, library, residence halls", "Throughout day", "Celsius, Bang, Ghost, C4, Reign"],
      ["Energy water / functional drinks", "Gym, residence halls", "Throughout day", "Liquid IV w/caffeine, AHA Energy, sparkling caffeinated water"],
    ],
  }),
  specList({
    heading: "Campus caffeine planogram specifications",
    items: [
      { label: "Residence hall placement", value: "Heavy energy + cold brew. 30-45% of beverage slots: energy drinks (mix traditional Monster/Red Bull and healthier Celsius/Bang). 15-25% cold coffee / cold brew. Late-night peak; restock cycles should land machines fresh before evening." },
      { label: "Library placement", value: "Similar to residence hall but slightly higher cold-brew share. Library demand is sustained throughout day with strong evening peak. Stock multiple SKUs across price/calorie/caffeine spectrum to serve diverse student preferences." },
      { label: "Academic building placement", value: "Coffee-heavy. 25-35% of beverage slots: hot coffee (specialty machine if available), cold brew, RTD bottled coffee. Morning peak (8-10 AM) + afternoon dip (2-4 PM). Less energy drink share than residence halls." },
      { label: "Gym / rec center placement", value: "Pre-workout caffeine heavy. Celsius, Bang, Ghost Energy, C4 standard. Cold brew alongside. Lower traditional-energy-drink share (members prefer fitness-oriented caffeine). Stock multiple SKUs by caffeine level." },
      { label: "Career center placement", value: "Moderate coffee/tea. Skip energy drinks entirely (professional context). Stock hot coffee, espresso pods if specialty machine available, tea, sparkling water. Coffee/tea is 30-40% of beverages; remainder is water + light items." },
      { label: "Specialty espresso / coffee machines", value: "Higher revenue per transaction but operationally complex (water hookup, drainage, daily cleaning). Suit academic-building lobbies, large libraries, and lounge spaces. Coordinate with operator on infrastructure and service cadence." },
      { label: "Pricing tier consideration", value: "Caffeine tolerance to premium pricing is high. Traditional Monster/Red Bull at $3-4 acceptable; healthier energy at $3.50-5 acceptable; specialty coffee at $4-6 acceptable. Don't anchor pricing to grocery store — student demand pool is different." },
      { label: "Finals week pre-planogram pivot", value: "Two weeks before finals: shift planogram heavier toward caffeine. Boost slot allocation for top 5 caffeine SKUs by 30-50%. Increase restock frequency 2-3×. Finals is the year's biggest caffeine peak; under-stock during finals = lost revenue." },
    ],
  }),
  tipCards({
    heading: "Five caffeine planogram mistakes",
    sub: "Each is documented in campus vending revenue analysis. All preventable with placement-aware planogram design.",
    items: [
      { title: "Single-sub-category coverage", body: "Stocking only traditional energy drinks (Monster, Red Bull) misses the healthier-energy demand (Celsius, Bang) and the cold-brew demand. Modern campus planograms cover all five sub-categories, weighted by placement. Single-sub-category planograms underperform 25-35%." },
      { title: "Energy drinks at the career center", body: "Career center demographics and context (interview prep, professional events) make energy drinks contextually inappropriate. Stock coffee, tea, sparkling water instead. Skip energy entirely at career centers; planogram should match placement context." },
      { title: "No specialty coffee at the academic-building lobby", body: "Academic buildings with high foot traffic support specialty coffee machines (Starbucks-style fresh brew). Higher revenue per transaction; reasonable operational complexity. Skipping leaves significant revenue unrealized at large academic buildings." },
      { title: "Static planogram through finals", body: "Finals demand spike for caffeine is 40-60% above baseline. Operators that don't pre-pivot planograms (heavier caffeine slot allocation, more SKUs, more restock) miss the peak. Pre-pivot 2 weeks before finals; restore baseline after." },
      { title: "Premium pricing applied uniformly", body: "Caffeine pricing tolerance varies by sub-category and placement. Career center coffee tolerates higher premium than gym energy drink. Stock with placement-specific pricing rather than uniform markup. Telemetry sales data validates pricing per SKU per placement." },
    ],
  }),
  inlineCta({
    text: "Want the campus caffeine planogram playbook (sub-categories, placement weighting, finals pivots)?",
    buttonLabel: "Get the campus caffeine playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported campus vending caffeine planogram design across residence halls, libraries, academic buildings, gyms, and career centers. The sub-category split, placement weighting, and finals-pivot benchmarks reflect operator-side telemetry from campus accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much of campus vending revenue comes from coffee and energy?", answer: "25-45% across most campuses, with the share rising to 40-55% during finals weeks. Caffeine is the largest single category at campus placements. Operators that under-stock caffeine miss the largest revenue opportunity.", audience: "Auxiliary Services" },
      { question: "What energy drinks should we stock?", answer: "Mix of traditional (Monster, Red Bull, Rockstar, NOS) and healthier energy (Celsius, Bang, Ghost, C4). Modern campus students prefer healthier energy at growing rates — some campuses now run 50%+ healthy-energy share. Stock both; let telemetry sales data tune the mix.", audience: "Auxiliary Services" },
      { question: "Should we add a fresh-brew coffee machine?", answer: "At high-traffic academic buildings, yes. Specialty coffee machines (Starbucks-style fresh brew) drive higher revenue per transaction. Higher operational complexity (water hookup, drainage, daily cleaning). Coordinate with operator on infrastructure and service cadence.", audience: "Auxiliary Services" },
      { question: "Why are energy drinks inappropriate at the career center?", answer: "Career center demographics and context (interview prep, professional events) make energy drinks contextually awkward. Coffee, tea, sparkling water more appropriate. Career center planogram should match professional context, not standard residence-hall mix.", audience: "Career Center Directors" },
      { question: "What should gym vending stock for caffeine?", answer: "Pre-workout caffeine: Celsius, Bang, Ghost Energy, C4 standard. Cold brew alongside. Lower traditional-energy-drink share (members prefer fitness-oriented caffeine). Stock multiple SKUs by caffeine level (200mg, 300mg, etc.) — students self-select.", audience: "Recreation Directors" },
      { question: "How do we plan for finals demand?", answer: "Two weeks before finals: pivot planogram heavier toward caffeine. Boost slot allocation for top 5 caffeine SKUs by 30-50%. Increase restock frequency 2-3×. Operators that pre-pivot capture the peak; operators that don't lose revenue.", audience: "Operators" },
      { question: "What's the right caffeine pricing?", answer: "+15-25% premium over convenience-store pricing is generally tolerated. Traditional Monster/Red Bull at $3-4; healthier energy at $3.50-5; specialty coffee at $4-6. Don't anchor to grocery prices — student demand pool tolerates more premium when the alternative is leaving campus during study.", audience: "Operators" },
      { question: "Should we worry about caffeine consumption from a wellness perspective?", answer: "Caffeine is a legitimate component of student diet at moderate consumption. Healthier-energy SKUs (Celsius, Ghost) tend toward lower-calorie / functional formulations. Skip aggressive single-SKU stockpiling (one machine should not have 6 slots of Monster); diverse stocking offers choice.", audience: "Wellness Officers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NACAS — National Association of College Auxiliary Services", url: "https://www.nacas.org/", note: "Industry trade association covering campus amenity standards" },
      { label: "Mintel — caffeine and beverage consumer research", url: "https://www.mintel.com/", note: "Consumer research on caffeine consumption patterns across demographics" },
      { label: "American Beverage Association", url: "https://www.americanbeverage.org/", note: "Industry data on beverage category trends" },
      { label: "NAMA — campus vending operator practice", url: "https://www.namanow.org/", note: "Operator-side guidance on campus planogram and caffeine category management" },
      { label: "Cantaloupe / Nayax — telemetry sales analytics", url: "https://www.cantaloupe.com/", note: "Telemetry platforms enabling per-SKU caffeine category analysis" },
    ],
  }),
  relatedGuides({
    heading: "Related campus vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Optimize campus vending placement", description: "Full-campus placement strategy across academic, residential, athletic, dining-adjacent zones.", href: "/ai-vending-coolers/optimize-campus-vending-placement" },
      { eyebrow: "Operations", title: "Vending product trends for college", description: "Student-preference trends, category evolution, and product mix evolution at campus placements.", href: "/ai-vending-coolers/vending-product-trends-college" },
      { eyebrow: "Hub", title: "All AI vending and campus guides", description: "Planogram, sustainability, accessibility, and operator-side patterns at the campus tier.", href: "/ai-vending-coolers" },
    ],
  }),
]);
process.exit(0);
