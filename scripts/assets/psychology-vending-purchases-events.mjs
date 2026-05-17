import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "psychology-vending-purchases-events",
  assetType: "rfp template",
  title: "Event-Audience Vending Psychology RFP Template",
  subtitle: "Seven-driver framework, zone-specific design, pricing structure, and operator scoring",
  intro:
    "Use this RFP template to solicit vending bids that apply purchase-psychology research to event audiences. The seven-driver framework below is grounded in established behavioral-economics research (anchoring, scarcity, hedonic adaptation, social proof, mental accounting, default bias, loss aversion). Operator must demonstrate how each driver is operationalized in their merchandising plan.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue + event mix", value: "(stadium / arena / theater / festival — specify event types, attendance, dwell time, demographic mix)" },
        { label: "Audience archetype", value: "Specify primary archetype(s): family, premium, hardcore-fan, convention-business, brand-experience. Audience archetype drives driver weighting." },
        { label: "Contract term", value: "3 years initial with quarterly merchandising-psychology review." },
        { label: "KPI focus", value: "Revenue per visitor (RPV), units per transaction (UPT), attach rate, cashless conversion." },
      ],
    },
    {
      heading: "2. Seven-driver framework",
      paragraph:
        "Operator describes how each driver is executed. Operators with shallow execution (\"we have signage\") score lower than operators with measurable execution detail. Capability framing throughout.",
      headers: ["#", "Driver", "Operator response required"],
      rows: [
        ["1", "Anchoring (Tversky & Kahneman, 1974)", "Price-ladder structure with high-anchor SKU (typically the $25 luxury item at a VIP machine; the $12 premium snack at a club-level machine). Mid-tier capture rate target."],
        ["2", "Scarcity / limited-time", "Event-themed limited-edition SKUs, sponsor exclusives, or playoff-only items. Signage callout language. Frequency of rotation."],
        ["3", "Hedonic adaptation", "Why audiences pay more in-venue: separation from baseline ‘home’ context. Operator's framing language on signage (event-themed copy, sponsor tie-ins)."],
        ["4", "Social proof", "‘Best seller’ or ‘top pick’ shelf-talker; digital sidekick rotation of trending SKUs. Equipment must support dynamic shelf labels."],
        ["5", "Mental accounting (Thaler, 1985)", "Bundling architecture so the buyer perceives a single ‘event experience’ purchase rather than itemized cost. Combo pricing typically 10-15% below sum-of-parts."],
        ["6", "Default bias", "Cashless as default — touch-first UI, Apple Pay / Google Pay surfaced before cash slot. Industry data shows default cashless drives 15-25% higher avg ticket."],
        ["7", "Loss aversion", "Membership / loyalty cashback at machine; sponsor co-branded points that expire at event end. Equipment + payment integration to support."],
      ],
    },
    {
      heading: "3. Zone-specific design",
      paragraph:
        "Driver weighting shifts by zone because audience mindset shifts. Operator must describe driver weighting per zone.",
      headers: ["Zone", "Dominant audience state", "Top 3 drivers"],
      rows: [
        ["Entry concourse (pre-event)", "Anticipation, time pressure", "Default bias, social proof, scarcity"],
        ["Main concourse (mid-event)", "Hedonic peak, hunger, queue tolerance high", "Hedonic adaptation, anchoring, mental accounting (bundles)"],
        ["Club / premium", "Status signaling, lower price elasticity", "Anchoring (high-end SKU), social proof, scarcity (exclusives)"],
        ["VIP / suite", "Concierge expectation, very low price elasticity", "Anchoring, scarcity (limited edition), loss aversion (loyalty)"],
        ["Exit + post-event", "Re-rationalization, tiredness, family-care", "Default bias, mental accounting (combo for the road), loss aversion (use points before expiry)"],
      ],
    },
    {
      heading: "4. Pricing structure",
      items: [
        { number: 1, title: "Anchor SKU per zone", description: "Operator selects 1-2 anchor SKUs per zone priced at the top of the ladder. Anchor target velocity 5-15% of total units; it does not need to sell heavily — it must frame perception of mid-tier." },
        { number: 2, title: "Mid-tier dominance", description: "Mid-tier SKUs target 50-65% of unit velocity. These are the operator's margin engine." },
        { number: 3, title: "Bundle architecture", description: "At least 3 bundles per zone (drink + snack, premium pair, family pack). Equipment must support combo-discount logic." },
        { number: 4, title: "Dynamic pricing rules", description: "Operator describes whether telemetry-driven dynamic pricing is used (e.g., last-30-minutes-of-event light discount on cold-chain TCS to reduce waste). Compliance with venue pricing approval required." },
      ],
    },
    {
      heading: "5. Scoring matrix",
      headers: ["Criterion", "Weight"],
      rows: [
        ["Seven-driver response quality (Section 2)", "35%"],
        ["Zone-specific weighting (Section 3)", "15%"],
        ["Pricing structure rigor (Section 4)", "15%"],
        ["Equipment + telemetry support", "10%"],
        ["Reporting + measurement", "10%"],
        ["Pricing transparency", "10%"],
        ["Insurance + bonding", "5%"],
      ],
    },
    {
      heading: "6. Reporting + measurement",
      items: [
        { label: "Per-event flash report", value: "RPV, UPT, attach rate, anchor SKU velocity, bundle attach, cashless mix — within 24 hours of event." },
        { label: "Monthly", value: "Driver-by-driver effectiveness (e.g., did the high anchor frame mid-tier sales? did social-proof shelf-talker drive trending SKU?)." },
        { label: "Quarterly", value: "QBR with venue marketing + F&B; A/B test results on signage and price-ladder variants." },
        { label: "Annual", value: "Year-over-year RPV, audience-archetype effectiveness, recommendation for next-year merchandising-psychology plan." },
      ],
    },
    {
      heading: "7. Required attachments",
      items: [
        { check: "Sample seven-driver response (Section 2) for a comparable venue (capability framing — describe execution, not anchor venues)." },
        { check: "Sample zone-by-driver weighting matrix (Section 3)." },
        { check: "Sample price-ladder per zone with anchor + mid-tier + bundle structure." },
        { check: "Sample A/B test result deck." },
        { check: "Insurance certificate per venue standard." },
        { check: "References: 3 venue marketing / F&B contacts (last 24 months)." },
      ],
    },
    {
      heading: "8. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal." },
        { label: "Due date", value: "(specify — typically 30 days)" },
        { label: "Q&A window", value: "10 business days; written distribution to all bidders." },
        { label: "Award", value: "(specify — typically 45-60 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage venue procurement counsel before issue. Behavioral-economics references (Tversky & Kahneman 1974; Thaler 1985) are cited for framework grounding; specific application to your venue requires audience-segment validation.",
});

console.log("wrote "+"psychology-vending-purchases-events");
