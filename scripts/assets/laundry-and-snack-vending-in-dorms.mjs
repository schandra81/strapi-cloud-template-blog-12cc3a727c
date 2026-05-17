import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "laundry-and-snack-vending-in-dorms",
  assetType: "pack",
  title: "Dorm Vending Program Design Pack",
  subtitle: "Per-placement planograms, sizing model, and campus-card integration checklist for laundry + snack vending in residence halls",
  intro:
    "Dorm vending pairs two adjacent placements: a laundry-room cooler (detergent, fabric softener, sheets, small household) and a snack/beverage cooler (grab-and-go meal, late-night comfort, hydration). This pack bundles the planograms for each placement, a sizing model for a residence-hall portfolio, and the campus-card integration checklist.",
  sections: [
    {
      heading: "1. Laundry-room vending planogram (40 SKUs)",
      paragraph:
        "Laundry rooms are high-frequency, low-basket placements. Residents arrive every 7-10 days, need quick detergent + softener + minor household. Cooler can be a hybrid AI cooler + small-format vending mix.",
      items: [
        { label: "Detergent + softener — 35%", value: "Tide single-pods, Gain pods, All Free + Clear pods, Persil pods, fabric softener sheets (Bounce, Snuggle), dryer balls. $2.50-$6.00." },
        { label: "Specialty laundry — 18%", value: "Stain stick (Tide-to-Go), color catcher, delicates wash bag, lint roller, mesh wash bag. $3.50-$8.00." },
        { label: "Household + dorm supply — 18%", value: "Single-roll toilet paper, paper towel, dish soap (single-serve), sponges, trash bag 5-pack, all-purpose wipes. $2.00-$6.50." },
        { label: "Personal care — 15%", value: "Single-use shampoo, conditioner, body wash, deodorant, razor 2-pack, toothbrush + paste travel pack. $2.50-$5.50." },
        { label: "OTC + emergency — 7%", value: "Pain reliever 2-pack, allergy 2-pack, antacid, anti-itch, band-aid 5-pack. $2.50-$5.00." },
        { label: "Snack + beverage (small share) — 7%", value: "Bottled water, snack bar, gum — bridge SKUs for laundry-day visits. $1.50-$3.00." },
      ],
    },
    {
      heading: "2. Dorm snack/beverage cooler planogram (70 SKUs)",
      paragraph:
        "Dorm snack/beverage cooler peaks 9-11 PM (study + late-night) and 7-9 AM (breakfast on-the-go). Planogram weights meal substitute + comfort food + hydration. ≥ 50% HHS-aligned where dining-services standard requires.",
      items: [
        { label: "Beverage — 25%", value: "Bottled water, sparkling water, electrolyte, RTD coffee, kombucha, sparkling juice. $1.50-$4.50." },
        { label: "Grab-and-go meal — 22%", value: "Sandwich, salad bowl, sushi, hummus + veg, breakfast burrito, overnight oats, hard-boiled egg cup. $4.50-$9.50." },
        { label: "Late-night comfort — 14%", value: "Mac-and-cheese cup, ramen, microwaveable bowl, instant noodles, mac-and-cheese cup. $2.50-$5.00." },
        { label: "Snack + chip — 12%", value: "Chips, popcorn, pretzels, crackers, jerky, trail mix. $1.50-$4.00." },
        { label: "Dairy + fresh — 8%", value: "Greek yogurt, cottage cheese, cheese stick, whole fruit. $1.50-$3.50." },
        { label: "Bar + protein — 8%", value: "Quest, RXBAR, KIND, Clif Bar, Built. $2.00-$4.00." },
        { label: "Sweets — 6%", value: "Cookies, chocolate, candy bars, single-serve cake. $2.00-$4.00." },
        { label: "Convenience + emergency — 5%", value: "Phone-charge cable, pain reliever 2-pack, allergy 2-pack, condom 2-pack. $3.00-$8.00." },
      ],
    },
    {
      heading: "3. Sizing model — residence hall portfolio",
      headers: ["Hall size (beds)", "Snack/beverage coolers", "Laundry vending units", "Total weekly transactions", "Annual gross"],
      rows: [
        ["Small (100-200 beds)", "1 AI cooler", "1 laundry unit", "300-500", "$60K-$95K"],
        ["Mid (200-400 beds)", "1-2 AI coolers", "1-2 laundry units", "550-950", "$110K-$180K"],
        ["Large (400-800 beds)", "2-3 AI coolers", "2-3 laundry units", "1,000-1,800", "$200K-$320K"],
        ["Mega (800+ beds)", "3-4 AI coolers + 1 hub anchor", "3-4 laundry units", "1,900+", "$340K+"],
      ],
    },
    {
      heading: "4. Campus-card integration checklist",
      paragraph:
        "Dorm vending should accept campus card (dining dollars, declining balance, flex), payroll deduction (RA + staff), and Apple Pay/Google Pay. Confirm each item below.",
      items: [
        { check: "Campus card vendor (Atrium / Blackboard / CBORD / TouchNet) SDK certified" },
        { check: "Tender mapping: dining dollars, declining balance, flex, meal exchange" },
        { check: "Settlement: daily file to campus card vendor; reconciliation to auxiliary services finance" },
        { check: "FERPA DPA signed by operator; SOC 2 Type II on file" },
        { check: "Apple Pay + Google Pay alongside campus card tap target" },
        { check: "Refund flow: QR + SMS refund flow to original tender; ≤ 24 hr credit-back" },
        { check: "Loyalty / gamification (optional): healthy-share double-points, low-volume incentive" },
      ],
    },
    {
      heading: "5. Restock + operations cadence",
      items: [
        { label: "Snack/beverage cooler — high-traffic hall", value: "3x/week visits; telemetry-triggered top-off; refresh peak Sunday/Wednesday evening; fresh/perishable rotation per SKU shelf life." },
        { label: "Snack/beverage cooler — mid-traffic hall", value: "2x/week visits; telemetry-triggered top-off." },
        { label: "Laundry vending unit", value: "1-2x/week visits; restock by day-of-week traffic pattern (Sunday + Wednesday typical peak); slower SKUs trimmed quarterly." },
        { label: "Cabinet cleaning + signage check", value: "Weekly per restock visit; deep-clean monthly; signage check at every visit." },
        { label: "Refund + service tickets", value: "Tier-1 (offline, cold-chain): ≤ 24 hr. Tier-2 (single SKU stockout): ≤ 48 hr. Tier-3 (cosmetic): ≤ 7 days." },
      ],
    },
    {
      heading: "6. Late-night safety + access considerations",
      items: [
        { check: "Cooler placement in residence-hall main lounge or amenity room with 24/7 lighting + camera coverage" },
        { check: "Cooler does not narrow corridor below 44 in clear width per egress code" },
        { check: "Resident-staff (RA + desk) trained on refund + escalation tree" },
        { check: "Laundry-room placement near laundry-card reload (or campus card auto-replenish) to bundle traffic" },
        { check: "Cooler tilt + door-open sensors tied to building safety desk + operator dispatch" },
        { check: "After-hours service-call number visible on cooler face for residents" },
        { check: "Refund flow accessible without app login (QR + SMS works) for late-night usability" },
      ],
    },
    {
      heading: "7. Communications + onboarding kit for residence life",
      items: [
        { label: "Move-in welcome packet", value: "Includes free-first-purchase QR card for snack/beverage cooler + laundry vending; 'how it works' graphic." },
        { label: "Floor signage", value: "11x17 lounge panel: payment options, refund QR, allergen summary, late-night support number." },
        { label: "RA training packet", value: "30-min training: payment, refund, allergen, escalation, refund-dispute flow." },
        { label: "Newsletter copy", value: "150-word piece for residence-life newsletter at start of each semester; planogram refresh announcement." },
        { label: "Refund + dispute resolution", value: "Resident → RA or desk → operator dispatch → auxiliary services if unresolved within 7 days." },
        { label: "Accessibility note", value: "Plain-language note on residence-life site explaining ADA features, alternative refund flow, and accommodation-request channel." },
      ],
    },
    {
      heading: "8. Operator selection criteria — dorm placements",
      items: [
        { check: "Higher-ed residence-hall reference accounts ≥ 2 active ≥ 12 months" },
        { check: "Campus card SDK + FERPA DPA in place" },
        { check: "Laundry-vending experience (some operators do snack only; confirm laundry-SKU experience)" },
        { check: "Late-night service SLA (24/7 dispatch; on-call route)" },
        { check: "Planogram capability for HHS-aligned share + allergen labeling" },
        { check: "Refund automation + dashboard accessible to residence-life staff" },
        { check: "Insurance: $2M GL, additional-insured to university; food product liability $1M" },
      ],
    },
  ],
  footer:
    "This pack is informational. Residence life + auxiliary services + facilities + campus IT should jointly review operator capability claims and attestations before contract execution. Late-night placements should confirm service SLAs and resident-safety coordination with campus police.",
});

console.log("wrote " + "laundry-and-snack-vending-in-dorms");
