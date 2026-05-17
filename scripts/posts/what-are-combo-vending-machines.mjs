import { seedPost, tldr, statStrip, dimensionDiagram, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-are-combo-vending-machines", [
  tldr({
    heading: "What is a combo vending machine and when does it make sense?",
    paragraph:
      "A combo vending machine packages a refrigerated beverage section (6-8 selections, 60-80 bottles/cans) and an ambient snack section (20-30 selections, 100-150 items) into one cabinet the size of a standard snack machine — 40\" × 35\" × 72\". One footprint, one power outlet, one card reader, two product categories. The trade-off is capacity: a combo holds roughly 60% of what a dedicated snack machine plus a dedicated beverage cooler hold together. That makes combos the right pick for 25-75 employee offices, secondary locations in larger buildings, and any site where floor space costs more than the capacity hit. Above 75 employees, the math flips and dedicated equipment usually wins.",
    bullets: [
      { emphasis: "Same external footprint as snack:", text: "40\" W × 35\" D × 72\" H. Combo is a 9.7 sq ft single-machine install vs 19.4 sq ft for snack + beverage." },
      { emphasis: "60% of the combined capacity:", text: "≈230 items vs ≈380 items in dedicated snack + cooler. Sufficient for ≤75 daily users, undersized above." },
      { emphasis: "One service stop, one outlet, one card reader:", text: "Operator-side economics favor combos at smaller accounts where two-machine restock visits don't pencil." },
    ],
  }),
  dimensionDiagram({
    heading: "Combo machine — reference dimensions",
    sub: "Same external footprint as a full-size snack machine. The cold/ambient split is internal — typically refrigerated lower section for beverages (gravity-feed favors cold at the bottom) and ambient coil section above for snacks.",
    machineName: "Full-size combo vending machine (e.g., AMS 39 Visi-Combo, Crane National 168 Combo, USI 3536 Combo)",
    width: "40 in",
    depth: "35 in",
    height: "72 in",
    footprint: "9.7 sq ft",
    weightEmpty: "600-700 lb",
    weightLoaded: "800-950 lb",
    doorwayClearance: "36 in",
    note: "Allow 6\" rear clearance for the compressor (combos run a single refrigeration zone serving the lower beverage section) and 36\" front clearance for the service door. The refrigerated zone draws ~12 A vs ~7 A for a snack-only machine — verify the circuit before install.",
  }),
  statStrip({
    heading: "Capacity and sweet-spot numbers",
    stats: [
      { number: "25-75", label: "ideal employee headcount", sub: "below = no machine; above = dedicated", accent: "blue" },
      { number: "230", label: "items at full capacity", sub: "≈150 snack + ≈80 beverage", accent: "orange" },
      { number: "60%", label: "of dedicated-pair capacity", sub: "trade-off vs snack + cooler", accent: "orange" },
      { number: "9.7 sq ft", label: "floor footprint", sub: "vs 19.4 sq ft for dedicated pair", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Combo vs dedicated snack + beverage — the trade-off matrix",
    sub: "For a small office with limited floor space and ≤75 daily users, the combo wins on every line that matters. The dedicated pair wins above that threshold.",
    headers: ["Aspect", "Combo (1 machine)", "Dedicated snack + beverage (2 machines)"],
    rows: [
      ["Floor footprint", { icon: "check", text: "9.7 sq ft" }, "19.4 sq ft"],
      ["Snack selections", "20-30", { icon: "check", text: "30-40" }],
      ["Snack capacity (items)", "100-150", { icon: "check", text: "200-300" }],
      ["Beverage selections", "6-8", { icon: "check", text: "8-10" }],
      ["Beverage capacity (bottles/cans)", "60-80", { icon: "check", text: "100-150" }],
      ["Install cost (used 2018-2020)", { icon: "check", text: "$1,800-3,000" }, "$3,500-6,000"],
      ["Power circuits required", { icon: "check", text: "1 dedicated 120V/15A" }, "2 dedicated 120V/15A"],
      ["Operator route time per stop", { icon: "check", text: "~25-35 min" }, "~45-60 min (two stops)"],
      ["Stockout risk at 100+ users/day", "High", { icon: "check", text: "Low" }],
      ["Sweet-spot headcount", "25-75", "75-300+"],
    ],
  }),
  specList({
    heading: "What's inside a combo — the section anatomy",
    items: [
      { label: "Beverage section (lower)", value: "Refrigerated zone (38-41°F), typically 6-8 columns of bottles/cans. Some models offer 10-column configurations with narrower spirals; reduces capacity per column but increases SKU variety." },
      { label: "Snack section (upper)", value: "Ambient zone, 4-6 shelves of helical-coil dispensers. Pitch is configurable per shelf — wider coils for chip bags, narrower for candy bars. Most models support glass-front product display so the buyer sees product before paying." },
      { label: "Refrigeration zone seal", value: "Insulated divider between the cold lower zone and the ambient upper zone. Door gasket integrity matters more on a combo than on a beverage-only cooler because the snack section's open volume creates a larger temperature differential." },
      { label: "Bill validator + coin mech", value: "Single unit serves both sections. Modern units accept $1-$20 bills and provide $5 max change. Coin mech often optional for card-only deployments." },
      { label: "Card reader / contactless", value: "Standard NEMA-mount cellular reader. Apple/Google Wallet, EMV chip, magstripe. Connects to operator's telemetry platform (Cantaloupe, Nayax, 365)." },
      { label: "Compressor + condenser", value: "Single compressor for the refrigerated section, ~1/4 to 1/3 HP. Rear-mounted with ≥6\" clearance required for airflow. Daily power draw ~3-4 kWh vs ~5-6 kWh for a full beverage cooler." },
      { label: "Telemetry modem", value: "4G LTE cellular modem mounted in the upper service area. Reports vend events, temperature, and inventory level. Service plan ~$25-40/month included in operator's contract." },
      { label: "Delivery bin + anti-theft chute", value: "Lower-front delivery area, ~14\" wide. Anti-theft chute baffle prevents reach-up theft. Lockable bin door is standard on units made after 2018." },
    ],
  }),
  tipCards({
    heading: "Four combo machine mistakes to avoid",
    sub: "Each shows up routinely on operator service tickets — all preventable with a 10-minute site review.",
    items: [
      { title: "Sizing for peak instead of average traffic", body: "If your headcount is 110 but only 30-40 people use the machine on a given day, a combo works. Don't pick dedicated equipment based on building census; pick based on observed vend frequency. Operator should run a 2-week traffic study before recommending." },
      { title: "Putting the combo in a high-traffic location", body: "Combos in busy lobbies, gym foyers, or transit-adjacent spots run out fast because the smaller capacity can't service spike traffic. Move them to break rooms and offices; reserve dedicated equipment for high-traffic placements." },
      { title: "Ignoring the refrigeration airflow requirement", body: "Combos pushed flush against the wall cause condenser overheating in 4-8 months. Refrigeration recovery time triples; compressor lifespan drops by ~30%. Always maintain ≥6\" rear clearance, even if it means losing a sq ft of usable floor." },
      { title: "Mixing slow movers into the small snack section", body: "Combo snack sections have 20-30 slots vs 30-40 in a dedicated snack — every slot must earn its keep. A 20% reduction in slow-moving SKUs lifts combo overall sales 8-15%. Operator should review the planogram monthly during the first 3 months." },
    ],
  }),
  decisionTree({
    heading: "Combo or dedicated snack + beverage — which fits your site?",
    question: "Will the location serve more than 75 daily users OR sit in a high-traffic placement (lobby, gym, transit)?",
    yesBranch: {
      title: "Go dedicated.",
      description: "Above 75 users or in high-traffic placements, the combo's capacity hit shows up as visible stockouts. Dedicated snack + beverage costs ~2× more upfront but pays back in higher uptime, larger variety, and lower restock frequency.",
      finalTone: "stop",
      finalLabel: "DEDICATED · SNACK + BEVERAGE",
    },
    noBranch: {
      title: "Combo is the right call.",
      description: "Under 75 users in a break room or office, combo wins on every meaningful axis — floor space, install cost, single power circuit, single service stop. The capacity is plenty; variety covers the most-requested SKU categories.",
      finalTone: "go",
      finalLabel: "COMBO · 40 × 35 × 72",
    },
  }),
  inlineCta({
    text: "Want the 2-week vending traffic study template (Google Sheet) the operator should run before recommending equipment?",
    buttonLabel: "Get the traffic study template",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has specified combo vs dedicated configurations for 200+ small-to-mid-office accounts. The 25-75 employee sweet spot, the 60% combined-capacity figure, and the operator route-time deltas all come from his standing post-install service data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Can a combo machine refrigerate the snack section too?", answer: "No — the snack section is ambient by design. A fully-refrigerated cabinet exists (typically called a 'cold combo' or 'refrigerated combo' depending on the manufacturer) but cost is 30-40% higher and the use case is narrow (fresh-food deployments, vegan/dairy snack programs). For standard snack mixes — chips, candy, crackers, granola bars — ambient is correct.", audience: "Hosts" },
      { question: "How often do combo machines need to be serviced?", answer: "Restock visits run every 1-2 weeks at typical office traffic (25-75 users). High-utilization combos may need weekly visits. Maintenance and preventive service (refrigeration check, validator clean, firmware updates) happens quarterly. Operator schedules vary by route economics; ask for the SLA explicitly in the service agreement.", audience: "Hosts" },
      { question: "What does a combo machine cost to install?", answer: "Used 2018-2020 combo machine: $1,800-3,000. New combo from major manufacturers: $5,500-7,500. Delivery and tune-up: $400-700 combined. For most first-time sites, used equipment is the right call — combo machines wear gracefully and the depreciation curve on new equipment is steep.", audience: "Hosts" },
      { question: "Will the cold and warm sides affect each other?", answer: "Modern combos handle this well — the insulated divider between zones keeps the snack section within 2-3°F of ambient. Older units (pre-2015) sometimes have condensation issues at the seal that can dampen the lowest snack shelf. If you see condensation, it's a gasket replacement (~$80) and a half-hour service visit.", audience: "Hosts" },
      { question: "Can I configure the combo to be all snack or all beverage?", answer: "Most combos allow some reconfiguration — you can shift the cold/ambient ratio slightly by reassigning columns, but the refrigeration zone is structural so you can't go fully one-or-the-other. If you need all-snack or all-beverage, buy that dedicated equipment instead — the resale value of a reconfigured combo is poor.", audience: "Operators" },
      { question: "Are combo machines harder to maintain than dedicated equipment?", answer: "Slightly. The dual-section design means one service visit touches both refrigeration and ambient mechanics — refrigeration knowledge is required for every service tech who visits combo accounts. For operators with strong refrigeration service capability, this is no extra burden; for operators who outsource refrigeration, combos add a coordination layer.", audience: "Operators" },
      { question: "What's the typical revenue per combo vs dedicated pair?", answer: "Combo at sweet-spot headcount: $400-900/month in gross sales. Dedicated snack + cooler at 100-200 person account: $1,200-2,500/month combined. Per-machine revenue is lower on combos by design — they serve smaller audiences. Per-square-foot revenue is similar or slightly better for combos because of the single-footprint efficiency.", audience: "Operators" },
      { question: "Should I lease or buy a combo machine?", answer: "Most first-time hosts get the machine through an operator's commission-based service (machine is operator-owned, host pays nothing for placement, operator pays commission on sales). Buying outright makes sense only if you want to self-operate — typical entry path for a side-hustle vending business; not the right path for a host that just wants service.", audience: "Hosts" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AMS — Visi-Combo product line specifications", url: "https://www.amsvendors.com/", note: "Combo machine dimensions and capacity benchmarks" },
      { label: "Crane National Vendors — Combo 168 spec sheet", url: "https://www.cranepi.com/en/brands/national-vendors", note: "Refrigerated section design and zone separation" },
      { label: "USI (Universal Selecta) — 3536 Combo documentation", url: "https://www.usivending.com/", note: "Column configuration and capacity ranges" },
      { label: "NAMA — operator equipment selection guidance", url: "https://www.namanow.org/", note: "Headcount thresholds and combo-vs-dedicated decision framework" },
    ],
  }),
  relatedGuides({
    heading: "Related equipment guides",
    items: [
      { eyebrow: "Sister guide", title: "What are the dimensions of a vending machine?", description: "Standard footprints, install clearances, and the pre-install site checks every facilities team should verify before delivery.", href: "/vending-faq/what-are-the-dimensions-of-a-vending-machine" },
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "Bobby Mac's 30-day buyer guide — sourcing, inspection, delivery, and the post-install tune-up that protects year-one margin.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Hub", title: "Vending FAQ — every common equipment question", description: "Refunds, security features, special outlets, weight, dimensions, and the operator-side answers to questions hosts ask.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
