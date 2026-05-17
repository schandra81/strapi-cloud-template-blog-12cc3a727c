import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "merchandising-strategies-venue-vending",
  assetType: "rfp template",
  title: "Venue Vending Merchandising Strategy RFP Template",
  subtitle: "Eight-strategy specification, planogram by zone, anchor pricing structure, and operator response framework",
  intro:
    "Use this RFP template to solicit venue-vending bids that go beyond ‘stock the machine.’ It specifies eight merchandising strategies, planogram requirements per zone, anchor pricing structure, and the reporting cadence procurement should expect. Each operator must respond to all eight strategies with their proposed execution.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue type + capacity", value: "(stadium / arena / theater / convention center — specify capacity, event mix, average dwell time)" },
        { label: "Zones in scope", value: "Main concourse, club level, VIP / suite, BOH staff, exterior plaza, event-specific pop-up zones. Operator scopes each zone separately." },
        { label: "Contract term", value: "3-5 year initial with quarterly merchandising review." },
        { label: "KPIs", value: "Revenue per machine per event, units per transaction, attach rate, dwell-zone capture rate." },
      ],
    },
    {
      heading: "2. Eight merchandising strategies (operator must respond to each)",
      paragraph:
        "Operator must describe how they execute each of the eight strategies. Scoring rewards specific execution detail over generic claims. Capability framing throughout — operators describe what they are equipped to deliver rather than claim past placements.",
      headers: ["#", "Strategy", "Operator response required"],
      rows: [
        ["1", "Zone-specific planogram", "How operator builds and maintains a different planogram per zone (concourse / club / VIP / BOH). Include sample planograms."],
        ["2", "Anchor-price architecture", "How operator structures price points to create perceived value (typically a $3 / $5 / $8 / $12 / $18 ladder for general; $8 / $15 / $25 ladder for premium)."],
        ["3", "Bundling + multi-buy", "How operator structures combo pricing (e.g., drink + snack bundle at 10-15% discount) and whether equipment supports promotional pricing rules."],
        ["4", "Event-themed activations", "How operator refreshes SKU mix and signage for specific event types (concerts, family shows, sports, conventions)."],
        ["5", "Sponsor SKU integration", "How operator merchandises sponsor SKUs (logo placement on machine, dedicated row, digital sidekick callout)."],
        ["6", "Velocity-driven rotation", "How operator uses telemetry to rotate underperformers — typically remove SKUs in bottom-quartile velocity at quarterly review."],
        ["7", "Dwell + capture optimization", "How operator positions machines relative to natural dwell points (queue lines, restroom egress, transition concourse) and measures capture rate."],
        ["8", "Cashless + payment friction reduction", "How operator drives cashless adoption (Apple Pay / Google Pay / NFC, venue member-charge integration). Industry data shows cashless adoption correlates with 15-25% higher average ticket."],
      ],
    },
    {
      heading: "3. Planogram by zone — minimum requirements",
      headers: ["Zone", "SKU breadth", "Anchor categories", "Price range"],
      rows: [
        ["Main concourse", "30-45 selections", "Soda, water, snack, candy, light grab-and-go", "$3-$8"],
        ["Club level", "25-35 selections", "Premium water, craft beverage, premium snack, healthier options", "$5-$12"],
        ["VIP / suite hallway", "20-30 selections", "Premium water, craft beverage, premium snack, gift / impulse", "$8-$25"],
        ["BOH / staff", "20-30 selections", "Caffeine, energy, balanced meal replacement, fresh fruit, shift-appropriate", "$2-$6"],
        ["Exterior plaza", "25-35 selections", "Water, soda, weather-appropriate (warm: cold drinks; cold: hot drinks); outdoor-rated equipment required (NEMA 3R minimum)", "$3-$8"],
      ],
    },
    {
      heading: "4. Anchor pricing structure",
      paragraph:
        "Anchor pricing creates perceived value by giving the buyer multiple reference points. Operator's proposed price ladder must include at least 4 price tiers per zone, with the highest tier acting as an anchor that drives mid-tier selection.",
      items: [
        { label: "General concourse ladder", value: "$3 (anchor low) / $5 (everyday) / $7 (premium snack) / $9 (anchor high). Mid-tier $5 should represent 50-60% of unit velocity." },
        { label: "Club level ladder", value: "$5 / $8 / $12 / $15. Mid-tier $8-$12 should capture 60-70% of units." },
        { label: "VIP ladder", value: "$8 / $15 / $20 / $25. Mid-tier $15-$20 captures 50-60%; the $25 anchor sells 10-15% and frames perceived value." },
      ],
    },
    {
      heading: "5. Reporting cadence",
      items: [
        { number: 1, title: "Per-event flash report (24 hours)", description: "Revenue, units, top-10 + bottom-10 SKUs, stockout incidents, uptime, refund volume — delivered within 24 hours of event close." },
        { number: 2, title: "Monthly merchandising review", description: "Zone-level performance, planogram adjustment recommendations, sponsor SKU performance, cashless mix trend." },
        { number: 3, title: "Quarterly business review", description: "QBR with venue F&B, marketing, and procurement. SKU rotation, anchor-price test results, dwell-capture analysis, capital plan." },
        { number: 4, title: "Annual scorecard", description: "Year-over-year revenue per machine per event, attach rate, cashless mix, sponsor activation effectiveness." },
      ],
    },
    {
      heading: "6. Required attachments",
      items: [
        { check: "Sample planograms for each in-scope zone (Section 3)." },
        { check: "Sample anchor-pricing ladder per zone with velocity assumption." },
        { check: "Sample monthly + quarterly report templates." },
        { check: "Sample sponsor SKU integration deck (capability framing — anonymized comparables)." },
        { check: "Telemetry platform demo (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable)." },
        { check: "Insurance certificate per venue standard." },
        { check: "References: 3 comparable venue F&B or procurement contacts (last 24 months)." },
      ],
    },
    {
      heading: "7. Scoring matrix",
      headers: ["Criterion", "Weight"],
      rows: [
        ["Eight-strategy response quality (Section 2)", "30%"],
        ["Planogram-by-zone detail (Section 3)", "15%"],
        ["Anchor-pricing rigor (Section 4)", "10%"],
        ["Reporting + analytics (Section 5)", "15%"],
        ["Telemetry + tech stack", "10%"],
        ["Pricing transparency (revenue share or fixed fee, line-item)", "15%"],
        ["Insurance + bonding", "5%"],
      ],
    },
    {
      heading: "8. Submission instructions",
      items: [
        { label: "Format", value: "PDF response, single document, with appendices for planograms and sample reports." },
        { label: "Due date", value: "(specify — typically 30 days from RFP issue)" },
        { label: "Q&A window", value: "10 business days; all Q&A distributed in writing to all bidders." },
        { label: "Award notification", value: "(specify — typically 45-60 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage venue procurement counsel before issue. Anchor-pricing structures should be validated against your venue's audience demographics and historical concession spend.",
});

console.log("wrote "+"merchandising-strategies-venue-vending");
