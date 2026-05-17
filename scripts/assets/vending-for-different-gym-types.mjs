import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-for-different-gym-types",
  assetType: "rfp template",
  title: "Gym Vending RFP Template",
  subtitle: "Format-specific planogram, equipment, and SLA requirements for big-box, boutique, 24/7, and university recreation",
  intro:
    "Use this RFP template to solicit gym + recreation-center vending bids. Member behavior, planogram weighting, and SLA expectations vary sharply between big-box, boutique, 24/7-access, and university recreation. This template specifies the format-by-format requirements so procurement can score apples-to-apples.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Format mix in scope", value: "Specify: big-box (24 Hour Fitness / LA Fitness / Planet Fitness scale), boutique (CrossFit / SoulCycle / barre studio scale), 24/7 (Anytime Fitness / Snap Fitness scale), university recreation, multi-site portfolio. Capability framing — describe scale, not specific anchor brand names." },
        { label: "Member count + visit frequency", value: "(specify — drives velocity assumptions: typical visit-per-member per week 2-4 big-box, 3-5 boutique, 4-6 24/7, 3-5 university)" },
        { label: "Contract term", value: "3 years initial with quarterly planogram review." },
        { label: "KPIs", value: "Revenue per member per month, attach rate, cashless mix, post-workout SKU velocity." },
      ],
    },
    {
      heading: "2. Format-specific planogram requirements",
      paragraph:
        "Operator must respond with a planogram for each in-scope format. Generic ‘one planogram fits all’ responses score lower.",
      headers: ["Format", "Top categories", "SKU count", "Avg ticket"],
      rows: [
        ["Big-box", "Protein + recovery drinks, electrolyte, water, balanced snack, light meal-replacement", "30-45", "$3-$7"],
        ["Boutique", "Functional / clean-label, electrolyte, single-origin coffee, premium protein, allergen-aware", "20-30", "$5-$12"],
        ["24/7 access (unstaffed nights)", "Caffeine, energy, hot drinks (overnight), protein + recovery, secure-cashless-only", "25-35", "$3-$8"],
        ["University recreation", "Hydration, balanced snack, allergen-aware, value-tier mix; meal-plan + Apple Pay default", "30-45", "$2-$5"],
      ],
    },
    {
      heading: "3. Equipment requirements",
      headers: ["Format", "Recommended equipment", "Compliance"],
      rows: [
        ["Big-box", "Glass-front combo (snack + beverage); refrigerated cooler for protein drinks; cashless reader (NFC + chip)", "UL 751; ADA Section 308 reach range; PCI DSS Level 1 reader"],
        ["Boutique", "Smaller-footprint combo + dedicated refrigerated cooler; aesthetic-grade cabinet finish", "UL 751; ADA Section 308; cabinet finish per club brand standard"],
        ["24/7 access (unstaffed)", "Tamper-resistant cabinet, cashless-only or cash-secure, sub-15-min telemetry heartbeat for offline alerts, security-camera coverage in field of view", "UL 751; UL 60950; cabinet rated for unsupervised retail; PCI DSS Level 1"],
        ["University recreation", "Larger combo (high SKU breadth); meal-plan + campus-card reader integration (Blackboard / CBORD / TouchNet); ADA Section 305 + 308", "UL 751; FERPA-aware data handling on campus-card transactions; ADA Title III"],
      ],
    },
    {
      heading: "4. SLA framework (format-specific variance)",
      items: [
        { label: "Uptime SLA", value: "97% big-box + boutique + university; 98% 24/7 access (members rely on machines when staff is absent)." },
        { label: "Restock cadence", value: "Big-box: 2-3 visits/week. Boutique: 1-2/week. 24/7: 2-3/week with telemetry-driven mid-week top-off. University: 2-3/week, plus pre-finals surge." },
        { label: "Stockout SLA", value: "Per-SKU stockout > 12 hours = SKU-line credit; 24/7 stockout > 8 hours = SKU-line credit (unstaffed environments are stricter)." },
        { label: "Refund SLA", value: "Member-initiated refund via app or SMS; auto-credit within 24 hours for cashless." },
        { label: "Cold-chain SLA", value: "Temperature excursion outside 35-40°F triggers alert; 4-hour on-site response for refrigerated beverages." },
      ],
    },
    {
      heading: "5. Operator capability matrix",
      headers: ["Criterion", "Weight"],
      rows: [
        ["Format-specific planogram quality (Section 2)", "20%"],
        ["Equipment fit + cashless capability (Section 3)", "15%"],
        ["Telemetry + uptime track record (Section 4)", "15%"],
        ["Restock cadence + SLA commitment", "10%"],
        ["Member-app / loyalty integration", "10%"],
        ["Reporting + per-format analytics", "10%"],
        ["Insurance + bonding ($2M GL minimum)", "5%"],
        ["Pricing transparency (revenue share or fixed fee, line-item)", "15%"],
      ],
    },
    {
      heading: "6. Required attachments",
      items: [
        { check: "Per-format planogram (Section 2) for each in-scope format." },
        { check: "Equipment spec sheets with UL + ADA documentation." },
        { check: "Sample monthly velocity + uptime report." },
        { check: "Telemetry platform demo (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable)." },
        { check: "Cashless payment + loyalty integration evidence." },
        { check: "Insurance certificate listing host as additional insured." },
        { check: "References: 3 gym / recreation contacts (last 24 months) covering at least 2 of the in-scope formats — capability framing acceptable." },
      ],
    },
    {
      heading: "7. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal." },
        { label: "Due date", value: "(specify — typically 30 days)" },
        { label: "Q&A window", value: "10 business days; written distribution to all bidders." },
        { label: "Award", value: "(specify — typically 45 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage gym / recreation procurement and risk counsel before issue. Member-data integration (loyalty, campus card) requires privacy review.",
});

console.log("wrote "+"vending-for-different-gym-types");
