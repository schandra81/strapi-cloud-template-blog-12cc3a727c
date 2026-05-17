import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-department-stores",
  assetType: "playbook",
  title: "Department Store Vending Playbook",
  subtitle: "Brand standards, adjacency strategy, planogram fit, and AI cooler option",
  intro:
    "Department store vending is not the airport-style snack box. The placement reads as part of the store experience and must align with brand standards, store layout discipline, and the customer dwell pattern. This playbook codifies the four levers — brand, adjacency, planogram, and equipment class (including AI coolers) — that determine whether a placement performs.",
  sections: [
    {
      heading: "1. Four equipment classes",
      paragraph:
        "Department store placements use one of four classes depending on the floor program, target shopper, and brand standard. Mixing classes within a single store is normal.",
      items: [
        { label: "Class S — Standard glass-front snack/beverage", value: "Crane Merchant Combo, AMS 39, Royal 660. Customer-facing standard equipment with branded wrap matching store palette. Used in back-of-house associate lounges and shopper-traffic placements where standard mix performs." },
        { label: "Class P — Premium glass-front", value: "USelect VM850, Crane Merchant Media, Selectivend ST5000. Wide selection (40-60 SKUs), 21-32 in. screen, branded UI, contactless payment, dispense-camera. For Tier-1 customer-facing placements on the main floor." },
        { label: "Class M — Micro-market / open-shelf", value: "365 Retail Markets Pico/Stockwell or Avanti Markets MicroMarket. Self-checkout open-shelf format with cooler + freezer + ambient. For larger placements in associate lounges or service-floor adjacent." },
        { label: "Class A — AI cooler", value: "AiFi Oasis, Imbera Smart, Standard AI, Trigo Vision. Computer-vision + weight-sensor frictionless cooler. For Tier-1 high-end placements where 'just walk out' aligns with brand experience." },
      ],
    },
    {
      heading: "2. Adjacency strategy — five anchor patterns",
      headers: ["Anchor", "Equipment class", "Planogram weight", "Performance signal"],
      rows: [
        ["Fitting room corridor", "Class P or Class A", "Water, electrolyte, low-sugar snack, mints", "Convert pause-time into hydration sale"],
        ["Customer service / pickup desk", "Class S or P", "Convenience snacks + beverages for wait time", "Cross-traffic dwell pattern"],
        ["Café / restaurant queue line", "Class M or A", "Grab-and-go bottled + snacks for queue", "Reduce queue abandonment"],
        ["Associate breakroom (back-of-house)", "Class S or M", "Mainstream snack + beverage + meal-replacement", "Standard workforce mix"],
        ["Loading dock + receiving lounge", "Class S", "24/7 access, mainstream", "Inbound driver + overnight associate"],
      ],
    },
    {
      heading: "3. Brand standards compliance",
      items: [
        { number: 1, title: "Equipment finish + wrap", description: "Cabinet finish and wrap match store palette (e.g., Nordstrom muted neutral, Macy's red-accent, Bloomingdale's black-and-white). Pantone match + finish gloss-level specified in the wrap RFP." },
        { number: 2, title: "Lighting + screen brightness", description: "Interior LED color temperature matches store sales-floor lighting (typically 3500K-4000K). Screen brightness on Class P/A equipment dimmable to match ambient." },
        { number: 3, title: "Sound + signage", description: "On-machine sound disabled or set to discrete confirmation tones only. Signage typography on the planogram + equipment header matches store sign manual." },
        { number: 4, title: "Branded UI on Class P/A", description: "Touchscreen UI customized with store branding (logo, color, font). Some department stores extend their loyalty app + payment integration into the vending touchpoint (see §5)." },
      ],
    },
    {
      heading: "4. Planogram fit by store tier",
      paragraph:
        "Department store tiering drives the planogram. Luxury and aspirational department stores under-perform with mainstream candy + chips; they over-perform with premium snack + functional beverage.",
      items: [
        { check: "Luxury tier (Nordstrom, Saks, Neiman Marcus, Bloomingdale's): premium snack (RXBAR, KIND, Lärabar, Health Warrior); functional beverage (Liquid Death, Recess, Olipop); 70-80% facings premium" },
        { check: "Mid-tier (Macy's, Dillard's, Belk): balanced mainstream + premium; 50-60% facings premium" },
        { check: "Value tier (Kohl's, JCPenney, Burlington): mainstream salty/sweet weighted; 30-40% facings premium" },
        { check: "Café-adjacent (across all tiers): bottled water + cold brew + RTD coffee + electrolyte weight in beverage facings" },
        { check: "Associate breakroom (back-of-house): mainstream + protein + meal-replacement — wellness program-aligned mix" },
      ],
    },
    {
      heading: "5. AI cooler option — when and how",
      paragraph:
        "AI coolers (computer-vision + weight-sensor frictionless) read as a premium experience and convert higher per-customer ticket. They cost 3-5x a standard glass-front and require specific placement conditions to perform.",
      items: [
        { number: 1, title: "Best-fit placement", description: "High-traffic main-floor positions with sustained dwell (cafe queue, fitting room corridor, customer service waiting area). 1,000-3,000 transactions/week target." },
        { number: 2, title: "Equipment + integration", description: "AiFi Oasis, Imbera Smart, Trigo Vision, or Standard AI. Integrates with store payment + loyalty system via API. Typical install $25-$60K capex." },
        { number: 3, title: "SKU + planogram", description: "30-60 SKU capacity weighted to grab-and-go (cold brew, sandwiches, hummus, premium snack). Higher ASP than glass-front equivalent." },
        { number: 4, title: "Operational requirements", description: "Daily restock; 99%+ uptime expectation; on-call service SLA <4 hr for AI system; standard refrigeration SLA <24 hr." },
      ],
    },
    {
      heading: "6. Operational support structure",
      items: [
        { label: "Restock cadence", value: "Class S: 2-3 visits/week. Class P: 3-4 visits/week. Class M: 4-5 visits/week. Class A: 5-7 visits/week (daily for fresh)." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain excursion, payment failure — <24 hr ack + <24 hr resolution. Class A AI system <4 hr ack + <24 hr resolution." },
        { label: "Service SLA — Tier 2", value: "SKU stockout, planogram refresh — 24-48 hr ack, 5-7 day resolution." },
        { label: "Refund flow", value: "Refunds integrated with store customer service desk. Operator pays customer service desk via end-of-month reconciliation. Cashless refund auto-credited within 24 hr." },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Class S/P target", "Class M target", "Class A target"],
      rows: [
        ["Uptime", "≥ 98%", "≥ 99%", "≥ 99%"],
        ["Stockout SKU-hours", "≤ 2%", "≤ 1%", "≤ 1%"],
        ["Transactions/week", "200-1,000", "500-2,000", "1,000-3,000"],
        ["Average transaction value", "$2.50-$4", "$4-$7", "$6-$12"],
        ["Refund rate", "< 2%", "< 1%", "< 1%"],
        ["Brand-standard audit pass rate", "100%", "100%", "100%"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, equipment class specification, brand-standard wrap design, and AI cooler integration for department store placements.",
});

console.log("wrote "+"vending-in-department-stores");
