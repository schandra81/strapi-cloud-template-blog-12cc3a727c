import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "benefits-of-vending-in-gyms",
  assetType: "template",
  title: "Gym Vending Benefit Framework",
  subtitle: "Equipment specs, planogram template, commission model, and reporting cadence",
  intro:
    "Use this framework to specify a gym vending program — equipment, planogram, commission, and reporting — that delivers a measurable member-amenity and revenue benefit. Each section is capability-framed and references NSF/ANSI 7 + 25, AHRI 1410, FDA Food Code 2022, FALCPA + FASTER Act, USDA Smart Snacks / NEMS-V criteria where used, ADA Section 308, FTC Endorsement Guides, and PCI-DSS 4.0. Operator capabilities should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Equipment specification",
      paragraph:
        "Gym placements run hot, dusty, and high-traffic. Equipment selection should reflect the environment, not a generic office combo.",
      items: [
        { label: "Refrigerated combo + beverage merchandiser", value: "AMS Sensit, Crane Merchant 6, Royal Vendors RVCC-768, USI Mercato 5000, or comparable. NSF/ANSI 7 + 25 certified. ENERGY STAR-labeled where available. AHRI 1410 efficiency rating documented." },
        { label: "Cooling capacity", value: "High-ambient rated condenser (95°F or higher); dust-filter + accessible coil-cleaning panel; refrigerant R-290 or R-744 (low-GWP) preferred." },
        { label: "Smart cooler / AI cooler option", value: "AiFi, Trigo, Standard AI, Grabango cooler retrofit for gyms with member-app integration and 24/7 access." },
        { label: "Cashless payment", value: "Apple Pay, Google Pay, contactless EMV, member-app QR. PCI-DSS 4.0 AOC + SAQ-B-IP on file." },
        { label: "Lighting + signage", value: "LED 10+ year life; gym-branded wrap available; allergen + nutrition-criteria signage on machine face per FTC Endorsement Guides." },
        { label: "ADA compliance", value: "30x48 in clear floor space, operable parts 15-48 in above finished floor, ≤ 5 lbf operating force per ADA Section 308 + 309.4." },
      ],
    },
    {
      heading: "2. Planogram template — 40-column gym combo",
      paragraph:
        "Adjust quarterly using velocity report. Recovery + hydration are the top categories at most gyms; weight them accordingly.",
      items: [
        { label: "Recovery + protein (25% of facings)", value: "Fairlife Core Power 26g, Premier Protein 30g, Muscle Milk Pro 32g, Orgain Plant 21g, RXBAR, KIND Protein, Quest, Clif Builder 20g, ONE bar 20g." },
        { label: "Hydration (25%)", value: "Bottled water (16-20 oz), sparkling water (LaCroix, Bubly), electrolyte (Liquid IV, LMNT, Gatorade Zero, BodyArmor LYTE), coconut water." },
        { label: "Energy + caffeine (15%)", value: "Cold brew RTD (La Colombe, Chameleon), RTD coffee, zero-sugar energy (Celsius, Alani, Ghost, Red Bull Zero)." },
        { label: "Fuel snack — whole-grain + nut (15%)", value: "RXBAR, KIND, Larabar, Quest bar, trail mix, raw nut packs, jerky." },
        { label: "Fresh + perishable (10%)", value: "Greek yogurt, hard-boiled egg, hummus + veg cup, fruit cup, cheese stick. Refrigerated; daily stock check." },
        { label: "Indulgent + treat (10%)", value: "Better-for-you cookies (Lenny + Larry's, Munk Pack), protein chips, popcorn, dark chocolate single-serve." },
      ],
    },
    {
      heading: "3. Commission model template",
      paragraph:
        "Commission tiers benchmark below reflect typical 2024-2025 gym-vending agreements. Adjust to local market + foot-traffic.",
      headers: ["Monthly gross", "Commission tier", "Notes"],
      rows: [
        ["$0 - $1,000", "5%", "Entry tier"],
        ["$1,000 - $2,500", "10%", "Standard mid-tier"],
        ["$2,500 - $5,000", "15%", "High-traffic placement"],
        ["$5,000 - $10,000", "18%", "Anchor + premium-amenity gyms"],
        ["$10,000+", "20-22%", "Largest premium clubs + chains"],
      ],
    },
    {
      heading: "4. Operator capability checks",
      items: [
        { check: "Operator should attest to NSF/ANSI 7 + 25 certifications and AHRI 1410 refrigeration efficiency documentation on all units." },
        { check: "Operator should attest to FDA Food Code 3-501.16 cold-chain compliance (≤ 40°F) with telemetry alert ≤ 30 minutes for excursion." },
        { check: "Operator should attest to FALCPA + FASTER Act allergen labeling on every SKU plus machine-face allergen summary." },
        { check: "Operator should attest to FTC Endorsement Guides compliance for any 'healthy', 'protein', 'low-sugar', or comparable claim made on the machine face or app." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless payment + member-app integration (where applicable) + AOC and SAQ-B-IP on file." },
        { check: "Operator should provide $2M general liability, $1M umbrella, food product liability ≥ $1M, additional-insured endorsement to gym + management." },
        { check: "Operator should attest to 98% uptime SLA + ≤ 24 hour Tier-1 service response + 2-3x/week restock cadence with telemetry-driven mid-week top-off." },
      ],
    },
    {
      heading: "5. Reporting cadence",
      items: [
        { label: "Monthly report (by 10th of each month)", value: "Uptime per machine; transactions per day; revenue + basket; stockout incidents + resolution time vs SLA; per-SKU velocity (top-20 + bottom-10); refund volume + reason codes; temperature excursion log." },
        { label: "Quarterly business review", value: "On-site or video review with gym management. Cover SLA performance, planogram health, member feedback, commission reconciliation, planogram refresh proposal." },
        { label: "Annual review", value: "Contract review (commission tier, SLA, NPS); NSF + PCI + insurance + food safety recertification; equipment refresh planning; member-survey results." },
        { label: "Member-feedback loop", value: "On-machine QR code linking to operator app feedback form + monthly NPS pulse." },
      ],
    },
    {
      heading: "6. Member-amenity benefit framing",
      paragraph:
        "Gym vending only counts as an amenity when members notice it. The benefits below are the ones that show up in member-surveys + retention modeling.",
      items: [
        { label: "Convenience", value: "Hydration + protein within 30 ft of workout floor; no off-site trip required." },
        { label: "Cost-control", value: "RTD protein at $4-$6 vs $7-$10 at gym smoothie counter (where applicable)." },
        { label: "24/7 access", value: "Hydration + recovery available outside staffed hours, supporting 24/7 + early-AM + late-PM members." },
        { label: "Personalization", value: "Member-app integration with dietary tags + favorite SKU suggestion." },
        { label: "Brand reinforcement", value: "Gym-branded wrap + curated SKU set reinforce wellness positioning." },
        { label: "Revenue uplift", value: "Modest commission revenue (typical $200-$2,000/month per location) offsets amenity-program cost." },
      ],
    },
    {
      heading: "7. Operator service SLA",
      items: [
        { label: "Tier-1 (revenue-critical, cold-chain, payment)", value: "≤ 24 hour acknowledgement; ≤ 24 hour resolution. Examples: machine offline, payment failure, refrigeration excursion." },
        { label: "Tier-2 (stockout, planogram refresh)", value: "24-48 hour acknowledgement; 5-7 day resolution." },
        { label: "Tier-3 (cosmetic, signage)", value: "5-day acknowledgement; 14-day resolution." },
        { label: "Refund SLA", value: "Cashless auto-refund within 24 hours; member-app or QR-driven; cash refund via on-site host." },
        { label: "Restock cadence", value: "Baseline 2-3x/week; telemetry-driven mid-week top-off for high-velocity SKUs; pre-peak top-off before known surge windows." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, nutrition, or medical advice. Confirm operator capabilities in writing through reference calls and attestations. Local building, fire, food, and accessibility codes may impose requirements above the federal floor.",
});

console.log("wrote " + "benefits-of-vending-in-gyms");
