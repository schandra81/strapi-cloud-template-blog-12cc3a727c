import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-gaming-arcades",
  assetType: "template",
  title: "Arcade + FEC Vending Framework",
  subtitle: "Day-part planogram, arcade-card integration, redemption co-placement, surge calendar",
  intro:
    "Use this framework to specify and operate vending inside a gaming arcade or family entertainment center (FEC). Each section is capability-framed and references NSF/ANSI 7 + 25, FDA Food Code 2022, FALCPA + FASTER Act allergen labeling, ADA Section 308, and PCI-DSS 4.0. Confirm operator capability in writing before contract execution.",
  sections: [
    {
      heading: "1. Day-part planogram template",
      paragraph:
        "Arcade + FEC traffic patterns shift sharply across the day. Day-part the planogram so the assortment matches who is in the building at each hour.",
      headers: ["Day-part", "Hours", "Audience", "Emphasis"],
      rows: [
        ["Morning party + open play", "10 AM - 1 PM", "Birthday parties, school groups, families with young kids", "Kid-friendly snack, juice box, water, lighter beverages"],
        ["Afternoon family", "1 PM - 5 PM", "Mixed-age families, after-school groups", "Snack + beverage balanced; soda + chips weight"],
        ["After-school + teen", "3 PM - 7 PM", "Teens, pre-teens, family dinner crowd", "Energy drinks (where allowed), chips, candy, soda"],
        ["Evening + 21+", "7 PM - close", "Adults, date-night, league nights, 21+ programming", "Premium snack, RTD coffee, sparkling water, energy"],
        ["Late-night (where applicable)", "After 10 PM", "Adults, late-night programming", "Caffeine, comfort snacks, water"],
      ],
    },
    {
      heading: "2. Arcade-card + payment integration",
      items: [
        { label: "Arcade-card systems", value: "Operator integrates with arcade-card system (Embed, Sacoa, CenterEdge, Intercard) via API or stored-value passthrough. Vending sales drawn from card balance or paid separately." },
        { label: "Cashless payment", value: "Apple Pay, Google Pay, contactless EMV, plus arcade-card reader. PCI-DSS 4.0 attestation; no PAN storage at the machine; AOC + SAQ-B-IP on file." },
        { label: "Family wallet", value: "Where arcade card system supports family-wallet, parent can pre-set vending spend cap per child card per day." },
        { label: "Loyalty integration", value: "Loyalty points earned on vending purchases mirrored into arcade loyalty program; redeemable for game tokens or redemption tickets." },
        { label: "Refund flow", value: "In-app or kiosk-driven refund; auto-credit to arcade card or cashless payment method within 24 hours; cash refund via on-site host." },
      ],
    },
    {
      heading: "3. Redemption co-placement map",
      paragraph:
        "Vending placed within sight-line of redemption counter (ticket-redemption / prize counter) lifts impulse beverage + snack purchase 15-30% during the redemption queue.",
      items: [
        { label: "Primary placement — redemption counter line", value: "Beverage merchandiser visible from the redemption queue; snack vendor within 3-5 ft of redemption window." },
        { label: "Secondary placement — game floor anchor", value: "Combo vendor on the gaming floor at a major intersection or anchor attraction (redemption-game cluster, racing game cluster)." },
        { label: "Tertiary — party-room amenity", value: "Beverage merchandiser inside or adjacent to each party room for self-serve add-on beverages." },
        { label: "Sight-line + lighting", value: "≥ 30 fc on machine face; clear sight-line from redemption queue position; no obstruction by signage or merchandise displays." },
        { label: "ADA compliance", value: "30x48 in clear floor space, operable parts 15-48 in above finished floor, ≤ 5 lbf operating force per ADA Section 308 + 309.4." },
      ],
    },
    {
      heading: "4. Surge calendar template",
      paragraph:
        "FEC + arcade traffic spikes on specific dates. Pre-position inventory + service capacity against the surge calendar.",
      headers: ["Surge type", "Typical dates / windows", "Demand multiplier", "Pre-position action"],
      rows: [
        ["Spring break", "Late Feb - early Apr by region", "1.5-2.0x", "T-7 inventory build, additional service tech on call"],
        ["Summer school-out", "Memorial Day - mid Aug", "1.3-1.8x daily; 2.0x rainy days", "Sustained inventory build; rainy-day surge plan"],
        ["Holiday breaks", "Thanksgiving, Christmas - New Year", "1.5-2.0x", "T-7 inventory; staffing surge"],
        ["Bad-weather drives", "Heavy rain / snow days year-round", "1.4-1.7x", "Telemetry-triggered mid-day top-off"],
        ["Birthday-party Saturdays", "Saturday 11 AM - 4 PM year-round", "1.3-1.5x", "Saturday-morning restock; party-room beverage build"],
        ["Tournament + league nights", "Weekly per league schedule", "1.2-1.4x", "Pre-event top-off"],
      ],
    },
    {
      heading: "5. Operator capability checks",
      items: [
        { check: "Operator should attest to arcade-card system integration capability (Embed, Sacoa, CenterEdge, Intercard, or comparable) with documentation of prior FEC placements." },
        { check: "Operator should attest to PCI-DSS 4.0 cashless acceptance + arcade-card passthrough; AOC + SAQ-B-IP on file; no PAN storage at the machine." },
        { check: "Operator should attest to NSF/ANSI 7 + 25 certifications on refrigerated equipment, FDA Food Code 3-501.16 cold-chain compliance, and FALCPA + FASTER Act allergen labeling on every SKU." },
        { check: "Operator should attest to 98% uptime SLA with day-part-aware restock cadence (Saturday-morning restock for party-day inventory)." },
        { check: "Operator should attest to a kid-safe SKU sub-list (no high-caffeine SKUs visible from kid-zone redemption counters; allergen-tagged signage in family-area placements)." },
        { check: "Operator should provide $2M general liability, $1M umbrella, food product liability ≥ $1M, additional-insured endorsement to venue." },
      ],
    },
    {
      heading: "6. Service SLA + cadence",
      items: [
        { label: "Tier-1 (revenue-critical)", value: "≤ 4 hour onsite during operating hours; ≤ 12 hour overnight. Examples: machine offline at peak, payment failure, cold-chain excursion." },
        { label: "Tier-2 (stockout)", value: "≤ 24 hour onsite; restock during next operating-hour gap or overnight window." },
        { label: "Tier-3 (cosmetic, signage)", value: "≤ 72 hour; scheduled with next planned restock." },
        { label: "Service-window operations", value: "Operator service crew operates during venue-down (typically late evening or early morning); coordinate with venue security + management." },
        { label: "Refund SLA", value: "Cashless auto-refund within 24 hours; arcade-card refund within 4 hours via in-app or kiosk; cash refund via on-site host." },
      ],
    },
    {
      heading: "7. Reporting + quarterly review",
      items: [
        { check: "Daily during surge windows: uptime, transactions, cold-chain status, service tickets." },
        { check: "Weekly: per-machine revenue + basket; per-SKU velocity by day-part; refund volume + reason codes." },
        { check: "Monthly: full uptime, revenue, commission, planogram velocity, surge-day vs baseline-day performance." },
        { check: "Quarterly: day-part planogram refresh proposal + redemption-counter sight-line audit." },
        { check: "Annual: contract review; PCI + insurance + food safety recertification; arcade-card integration health-check." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal or food-safety advice. Confirm operator capabilities through reference checks and written attestation. Local building, fire, food, and amusement-device codes may impose additional requirements above the federal floor.",
});

console.log("wrote " + "vending-in-gaming-arcades");
