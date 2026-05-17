import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "breakroom-vending-machine-ideas",
  assetType: "template",
  title: "Breakroom Vending Concept Framework",
  subtitle: "Six concept matchings, design ideas, capital model, and planogram template",
  intro:
    "Use this framework to design a breakroom vending program that matches your workforce's daily reality. Each section is capability-framed and references FDA Food Code 2022, NSF/ANSI 7 refrigerated vending, FALCPA allergen labeling, and typical equipment specs. Operator capabilities should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Six concept matchings",
      paragraph:
        "Match the breakroom concept to the workforce, not the building. Each concept has different equipment, planogram, and labor implications.",
      headers: ["Concept", "Best-fit workforce", "Core equipment", "Operator scope"],
      rows: [
        ["Snack + beverage classic", "10-150 employees, single-shift, light dwell", "Snack vendor + beverage vendor", "2x/week restock, 24-hr service"],
        ["Healthy-forward combo", "Wellness-led HQ, 50-300 employees", "Refrigerated snack + beverage combo with planogram criteria", "2-3x/week restock + quarterly nutrition audit"],
        ["AI micro-market (light)", "200-500 employees, mixed shifts", "AI cooler + ambient snack tower", "2-3x/week restock + remote vision QC"],
        ["Full unattended market", "300+ employees, 16+ hr coverage", "Multi-cooler + ambient + self-checkout kiosk", "3-5x/week restock + on-call merchandiser"],
        ["Fresh food + meal program", "150+ employees, lunch on-site", "Refrigerated grab-and-go + RTH oven (where allowed)", "Daily restock, fresh-food rotation"],
        ["24/7 shift-aware program", "Manufacturing, healthcare, logistics", "Combo + dedicated cold drink + hot beverage", "Telemetry-driven restock, 24-hr SLA"],
      ],
    },
    {
      heading: "2. Design ideas — placement + ambiance",
      items: [
        { label: "Placement", value: "Equipment within 6 ft of seating + 10 ft of dedicated 120V/20A circuit. Avoid major egress paths; do not narrow corridor below 44 in clear width (NFPA 101)." },
        { label: "Lighting", value: "≥ 30 fc on the machine face (IES recommended) + ambient seating area ≥ 20 fc. Dedicated branded LED light strip optional." },
        { label: "Acoustics", value: "Compressor noise ≤ 55 dBA at 3 ft. Place near hard surfaces buffered by panels or rugs to prevent echo." },
        { label: "Branding + signage", value: "Operator-supplied facility-branded wraps available; combine with allergen + nutrition signage required by program scope." },
        { label: "Seating + amenity adjacencies", value: "Counter + 2-4 stool seating, or 4-top tables. Adjacent water bottle filler, microwave, and trash + recycling + compost station." },
        { label: "Accessibility (ADA)", value: "30x48 in clear floor space at each unit, operable parts 15-48 in above finished floor, ≤ 5 lbf operating force (ADA Section 308, 309.4)." },
      ],
    },
    {
      heading: "3. Operator capability checks",
      items: [
        { check: "Operator should attest to NSF/ANSI 7 + 25 certifications on all refrigerated and ambient vending equipment." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless acceptance (Apple Pay, Google Pay, contactless EMV) with AOC and SAQ-B-IP on file." },
        { check: "Operator should attest to FALCPA allergen labeling and FDA Food Code refrigeration ≤ 40°F (3-501.16) with telemetry alerts." },
        { check: "Operator should attest to 98% uptime SLA, ≤ 24 hour Tier-1 service response, telemetry-driven restock cadence." },
        { check: "Operator should provide $2M general liability, $1M umbrella, food product liability ≥ $1M, additional-insured endorsement to host." },
        { check: "Operator should attest to RTH (ready-to-heat) ServSafe credentials for fresh food programs and HACCP plan on file." },
      ],
    },
    {
      heading: "4. Capital model — by concept",
      paragraph:
        "Capital cost shown is operator-side (typically borne by operator and amortized through revenue share or unattended-market fee). Host-side cost is electrical work, connectivity, and any millwork.",
      headers: ["Concept", "Operator equipment capital", "Host-side build cost", "Typical breakeven (months)"],
      rows: [
        ["Snack + beverage classic", "$8-$15K", "$200-$800", "9-15"],
        ["Healthy-forward combo", "$10-$18K", "$200-$800", "12-18"],
        ["AI micro-market (light)", "$25-$45K", "$1-$3K (millwork + electrical)", "18-30"],
        ["Full unattended market", "$50-$120K", "$5-$25K", "24-36"],
        ["Fresh food + meal program", "$20-$50K", "$2-$10K", "18-30"],
        ["24/7 shift-aware program", "$25-$60K", "$1-$5K", "12-24"],
      ],
    },
    {
      heading: "5. Planogram template — 40-column starter",
      paragraph:
        "Use this planogram as a starting frame. Adjust quarterly using velocity report. Refrigerated section required for perishables.",
      items: [
        { label: "Beverage — water + sparkling (15%)", value: "Bottled water (16-20 oz), sparkling water (LaCroix, Bubly), flavored sparkling, mineral water." },
        { label: "Beverage — soda + diet (15%)", value: "Coke, Diet Coke, Coke Zero, Sprite, Pepsi, Dr Pepper, Mountain Dew + diet variants. Optional craft soda single SKU." },
        { label: "Beverage — caffeine + energy (10%)", value: "Cold brew RTD (La Colombe), RTD coffee, zero-sugar energy (Celsius, Alani, Red Bull, Monster Zero)." },
        { label: "Snack — chips + crackers (15%)", value: "Chips (Lays, Doritos, SunChips), pretzels, popcorn, crackers + peanut butter." },
        { label: "Snack — bar (15%)", value: "Granola bar, protein bar (RXBAR, KIND Protein), Larabar, breakfast bar." },
        { label: "Snack — nut + jerky (10%)", value: "Trail mix, almond, cashew, beef jerky, turkey jerky." },
        { label: "Indulgent (10%)", value: "Chocolate, gum, candy, cookies, brownies." },
        { label: "Fresh + dairy — refrigerated (10%)", value: "Greek yogurt, cheese stick, fruit cup, hummus + veg cup, hard-boiled egg, single-serve cottage cheese." },
      ],
    },
    {
      heading: "6. Service SLA + cadence",
      items: [
        { label: "Restock cadence", value: "2x/week baseline; telemetry-driven mid-week top-off for high-velocity SKUs. Operator confirms cadence in writing." },
        { label: "Service tiers", value: "Tier-1 (no vend, payment failure, cold-chain) ≤ 24 hr resolution; Tier-2 (stockout, planogram refresh) 24-48 hr response, 5-7 day resolution; Tier-3 (cosmetic, signage) 5-14 day." },
        { label: "Refund procedure", value: "Cashless auto-refund within 24 hours via app or SMS; cash refund via on-site slip + credit at next visit (≤ 7 days)." },
        { label: "Monthly report", value: "Uptime, transactions, basket, stockout incidents, refund volume, planogram refresh recommendation. Delivered by 10th of each month." },
        { label: "Quarterly business review", value: "On-site or video review with facilities + HR; review SLA performance, planogram health, employee feedback, contract status." },
      ],
    },
    {
      heading: "7. Pricing + subsidy options",
      items: [
        { label: "Concession (operator-priced)", value: "Operator sets retail; host receives commission (typically 5-15% of gross). Most common model." },
        { label: "Subsidized pricing", value: "Host underwrites pricing below market (e.g., $0.50-$1.00 off retail per SKU). Operator credits at month-end." },
        { label: "Free-vend with reload", value: "Host fully subsidizes; employees badge for free items up to a daily cap. Used for healthy-only or recovery programs." },
        { label: "Hybrid", value: "Free water + coffee; paid snacks + meals. Common in healthcare + manufacturing." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, engineering, or food-safety advice. Confirm equipment, food safety, and accessibility compliance with the operator in writing. Local building, fire, plumbing, and electrical codes may impose requirements above the federal floor.",
});

console.log("wrote " + "breakroom-vending-machine-ideas");
