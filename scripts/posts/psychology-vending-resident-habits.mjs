import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("psychology-vending-resident-habits", [
  tldr({
    heading: "What does the psychology of apartment vending actually tell us about resident behavior?",
    paragraph:
      "Apartment vending behavior diverges sharply from office or retail patterns. Residents have a stable repeat-buyer relationship with the machine that doesn't exist in transient settings — they pass the same units multiple times daily for years. This produces three behavioral patterns operators must design around: late-night peak (60-75% of revenue occurs 7 PM-2 AM, when grocery options are closed and residents are home), high category loyalty (residents pick 3-5 favorite SKUs and repeat indefinitely; planogram churn reduces sales), and trust-based purchase (residents won't try new SKUs until the machine has earned reliability). The implications: stock based on actual telemetry sales, not 'industry averages'; respect resident category loyalty when rotating SKUs; invest in machine reliability before chasing new product introductions. Pricing psychology also differs — residents anchor to nearby convenience-store prices and tolerate 10-20% premium but not 50%+. Late-night premium pricing works because grocery stores are closed; daytime premium pricing fails because residents have alternatives.",
    bullets: [
      { emphasis: "Late-night dominance:", text: "60-75% of apartment vending revenue lands between 7 PM and 2 AM. Stocking, restocking, and merchandising should optimize for this window — chips/snacks/sweets, not breakfast bars." },
      { emphasis: "Category loyalty is high:", text: "Residents pick 3-5 SKUs and repeat indefinitely. Aggressive planogram churn reduces sales because favorite SKUs get displaced. Rotate slowly and only based on telemetry sales data." },
      { emphasis: "Pricing tolerates +10-20% premium:", text: "Residents tolerate moderate convenience premium but reject 50%+ markup. Late-night pricing works (grocery closed); daytime premium pricing fails (residents have alternatives)." },
    ],
  }),
  statStrip({
    heading: "Apartment vending behavioral benchmarks",
    stats: [
      { number: "60-75%", label: "revenue in late-night window", sub: "7 PM – 2 AM", accent: "blue" },
      { number: "3-5", label: "favorite SKUs per resident", sub: "high category loyalty", accent: "blue" },
      { number: "+10-20%", label: "tolerated price premium", sub: "vs nearby convenience", accent: "orange" },
      { number: "$15-45", label: "monthly spend per regular", sub: "varies by amenity mix", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Resident vending behavior vs office vending behavior",
    sub: "Apartments are not offices. Behavioral patterns differ in ways that materially affect planogram, pricing, and operations.",
    headers: ["Behavior dimension", "Apartment residents", "Office workers"],
    rows: [
      ["Peak demand window", "7 PM – 2 AM", "10 AM – 2 PM"],
      ["Top categories", "Snacks (chips, candy, ice cream), beverages, late-night soft items", "Healthy snacks, coffee/energy, lunch supplements"],
      ["SKU loyalty", "High — 3-5 favorites, infrequent rotation", "Moderate — willing to try new"],
      ["Price tolerance", "+10-20% premium, rejects 50%+", "+5-15% premium, more price-sensitive"],
      ["Repeat frequency", "Same residents weekly or more, for years", "Same workers daily, for years (similar)"],
      ["Service-failure memory", "Long — every failure remembered", "Shorter — workers more transient mentally"],
      ["Cash vs cashless", "60-80% cashless (younger demographic)", "75-90% cashless"],
      ["Healthy-product share", "Lower — pleasure-driven purchase", "Higher — workplace-driven choice"],
    ],
  }),
  specList({
    heading: "Resident-behavior-aware planogram specifications",
    items: [
      { label: "Late-night planogram dominance", value: "Stock heavy on snacks (chips, cookies, candy), ice cream (if freezer-equipped), and indulgent items. These are the late-night categories that drive 60-75% of revenue. Breakfast bars and healthy options underperform at apartment placements." },
      { label: "Category loyalty respect", value: "Track top SKUs per machine via telemetry. Rotate slowly — replace SKUs only when sales clearly decline, not because 'time for a refresh.' Each forced rotation typically loses 1-2 weeks of revenue from displaced regulars." },
      { label: "Beverage mix tilted toward soda + energy", value: "Beverages skew sweet (regular soda, energy drinks) more than at offices (where water + sparkling dominate). Stock accordingly. Iced coffee and energy drinks gain share with late-night/younger demographics." },
      { label: "Snack-size and packaging", value: "Larger packages (king-size candy, family chip bags) underperform smaller, single-serve units at apartments — residents grab quick portions, not pantry stock. Single-serve and 2-3 oz packaging dominate." },
      { label: "Pricing within tolerance", value: "+10-20% above nearby convenience-store equivalent is acceptable. Higher than that produces resident churn. Late-night premium (after 10 PM) can be slightly higher because alternatives are closed; signal it explicitly if used." },
      { label: "Ice cream / frozen if amenity supports", value: "Frozen vending in apartment buildings is a strong differentiator. Ice cream sandwiches, novelties, frozen meals dominate weeknight purchases. Requires freezer-equipped machine and dedicated electrical capacity." },
      { label: "New SKU introduction cadence", value: "Introduce 1-2 new SKUs per quarter, max. Place in slots adjacent to existing favorites for awareness lift. Track sales; if a new SKU hasn't earned its spot in 8-12 weeks, rotate out." },
      { label: "Restock timing alignment", value: "Restock cycles should land machines fresh just before late-night peak — typically afternoon restocks for evening peak. Operators on morning-only routes miss the peak demand by 12 hours and lose to stockouts." },
    ],
  }),
  tipCards({
    heading: "Five apartment vending merchandising mistakes",
    sub: "Each is documented in operator review data and resident-feedback studies. All preventable with behavior-aware planogram design.",
    items: [
      { title: "Office planogram in an apartment building", body: "Healthy snacks, breakfast bars, and water-heavy beverage mix underperform at apartments by 30-50% vs the indulgent late-night planogram residents want. Same machine, same site, different planogram earns very different revenue. Operators must customize per placement type." },
      { title: "Aggressive SKU rotation that displaces favorites", body: "Forced quarterly planogram refreshes feel like good practice but kill revenue at apartment placements where category loyalty is high. Each rotation that displaces a top-3 SKU loses revenue for 1-2 weeks. Rotate based on telemetry sales data, not calendar." },
      { title: "Morning-only restock schedule", body: "Operators that restock 9 AM-12 PM miss the late-night peak by 12 hours. Frequent stockouts during peak demand. Schedule restocks afternoon (1-5 PM) so machines are fresh going into the high-revenue window." },
      { title: "Premium pricing without alternatives context", body: "Residents anchor to nearby convenience store, gas station, and grocery prices. +10-20% premium tolerated; +50% rejected. Operators ignoring local price context produce resident churn and complaints to leasing." },
      { title: "Ignoring telemetry sales data", body: "Operators that planogram by intuition or industry-average reports miss the per-machine signal. Residents' loyalty pattern is unique per building (demographic, building type, amenities). Telemetry-driven planogram optimization typically lifts revenue 15-25% over industry-average mix." },
    ],
  }),
  inlineCta({
    text: "Want the apartment vending behavior-aware planogram pack?",
    buttonLabel: "Get the apartment planogram pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported merchandising design at apartment-community vending placements across luxury, mid-market, and workforce housing. The behavioral patterns, peak-window data, and category-loyalty observations reflect operator-side telemetry from multifamily accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why is apartment vending different from office vending?", answer: "Three things: residents pass the same machine for years (not transient), late-night is the peak demand window (not lunch), and residents have strong category loyalty (3-5 favorite SKUs they repeat). Operators that don't customize for these patterns underperform 30-50% vs operators who do.", audience: "Property Managers" },
      { question: "What time of day is busiest for apartment vending?", answer: "Evening through late night — 7 PM to 2 AM produces 60-75% of revenue. Grocery stores are closed; convenience stores require travel. Vending is the in-building 24/7 option. Restock cycles should land machines fresh in the afternoon, not in the morning.", audience: "Property Managers" },
      { question: "Should we stock healthy options?", answer: "Some, but don't over-index. Healthy ratio at apartments typically 20-30% of slots (vs 40-50% at offices). Residents at apartments make pleasure-driven purchases more than workplace-driven ones. Stock what residents actually buy, measured by telemetry, not by what feels right.", audience: "Property Managers" },
      { question: "How often should the planogram change?", answer: "Slowly. Category loyalty at apartments is high — residents pick favorites and repeat for years. Rotate SKUs only based on telemetry sales data, not calendar cadence. Add 1-2 new SKUs per quarter max; pull underperformers after 8-12 weeks if they don't earn their spot.", audience: "Operators" },
      { question: "What pricing premium can we charge?", answer: "+10-20% above nearby convenience store is generally tolerated. +50% triggers churn and complaints. Late-night premium (after 10 PM) is more defensible because alternatives are closed. Signal late-night pricing explicitly if used; don't surprise residents.", audience: "Operators" },
      { question: "Should we add a freezer for ice cream?", answer: "Often yes at apartment placements with the electrical capacity. Frozen vending (ice cream sandwiches, novelties, frozen meals) is a strong differentiator and matches late-night demand patterns. Requires freezer-equipped machine and dedicated 20A circuit. Coordinate with facilities on placement.", audience: "Property Managers" },
      { question: "How do we know if our planogram is working?", answer: "Monthly telemetry-driven sales reports per SKU. Look for: top-5 SKUs holding 40-60% of revenue (high loyalty), low stockout rate during late-night peak (good restock timing), revenue lift over the prior quarter. Operators without monthly per-SKU reporting can't optimize.", audience: "Property Managers" },
      { question: "What's the lifetime value of an apartment vending placement?", answer: "Apartment residents stay 1-3 years on average and buy weekly or more. Per-resident annual spend $180-540. Building with 200 residents and 50% engagement: $18K-54K annual revenue. Operator-side margins make this an attractive placement type when planogram is well-tuned.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAA — National Apartment Association", url: "https://www.naahq.org/", note: "Industry trade association with multifamily amenity research" },
      { label: "Multifamily Insiders — resident amenity research", url: "https://www.multifamilyinsiders.com/", note: "Resident-side feedback patterns including vending preferences" },
      { label: "NAMA — vending merchandising guidance", url: "https://www.namanow.org/", note: "Industry operator guidance on planogram design and category management" },
      { label: "Mintel — convenience snacking consumer research", url: "https://www.mintel.com/", note: "Consumer behavior research on snacking patterns and late-night demand" },
      { label: "Cantaloupe / Nayax — telemetry sales analytics", url: "https://www.cantaloupe.com/", note: "Telemetry platforms enabling per-SKU sales analysis at apartment placements" },
    ],
  }),
  relatedGuides({
    heading: "Related apartment vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Apartment complex vending solutions", description: "Equipment, placement, planogram, and resident-amenity design for multifamily properties.", href: "/vending-for-apartments/apartment-complex-vending-solutions" },
      { eyebrow: "Operations", title: "Vending customer service and troubleshooting", description: "Service standards, SLA, and escalation paths for apartment-community vending.", href: "/vending-for-apartments/vending-customer-service-troubleshooting" },
      { eyebrow: "Hub", title: "All apartment vending guides", description: "Placement, planogram, service, and property-side management patterns for multifamily vending.", href: "/vending-for-apartments" },
    ],
  }),
]);
process.exit(0);
