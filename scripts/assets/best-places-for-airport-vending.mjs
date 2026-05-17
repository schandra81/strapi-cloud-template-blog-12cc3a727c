import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "best-places-for-airport-vending",
  assetType: "playbook",
  title: "Airport Vending Placement Playbook",
  subtitle: "Zones, telemetry-driven sizing, and concession coordination",
  intro:
    "Airport placement is the difference between a $40k/yr machine and a $250k/yr machine. The driver is zone classification + dwell-time + competitor concession adjacency — not square footage. This playbook codifies the zone framework, telemetry-driven sizing, and concession-coordination practices LetUsVending operator partners are equipped to apply, referenced against FAA AC 150/5360-13 (Airport Terminal Planning), ACI-NA terminal benchmarking, TSA 49 CFR 1542 zone definitions, FDA Food Code 2022 cold-chain, and FAA Part 139 (Certification of Airports).",
  sections: [
    {
      heading: "1. Airport zone framework",
      headers: ["Zone", "Definition", "Dwell time", "Pricing class", "Vending fit"],
      rows: [
        ["Pre-security landside", "Check-in lobby, ticketing, baggage claim", "20-45 min (departures), 5-20 min (arrivals)", "Class B-A", "High — bottled water + small snack + travel essentials"],
        ["Post-security airside concourse", "Between checkpoint and gate", "30-90 min", "Class A", "Highest revenue — gate-area sized banks"],
        ["Gate hold area (per-gate)", "Within ~50 ft of gate", "20-60 min", "Class A premium", "Highest velocity; pre-boarding peak"],
        ["Airline club / lounge", "Premium-access space", "60-180 min", "Subsidized / Class E", "Free-vend or operator-supplied amenity SKUs"],
        ["Crew + employee lounge", "Pilots, flight attendants, ground crew, TSA, concession workers", "Variable", "Class C-B", "Coffee + fresh-food + 24/7 hot-food"],
        ["Tollway / parking / rental car", "Garage, shuttle bus, rental return", "5-25 min", "Class B", "Bottled water + travel size snack"],
      ],
    },
    {
      heading: "2. Zone-by-zone sizing",
      items: [
        { number: 1, title: "Pre-security landside", description: "1 combo or 1 snack + 1 drink per 800-1,500 daily enplanements + deplanements through the touchpoint. Most volume on bottled water, light snack, charger/headphone essentials." },
        { number: 2, title: "Post-security concourse", description: "1 multi-machine bank (snack + drink + cold-food + coffee) per 1,500-2,500 enplanements / day passing the bank. Add a healthy-share endcap (≥40% facings) — TSA + ACI-NA benchmarking shows airside travelers buy higher healthy-share than retail averages." },
        { number: 3, title: "Gate hold area", description: "1 drink + 1 snack machine per 3-5 gates at hubs, 1 per 1-2 gates at peak overnight or red-eye gates. Telemetry must be cellular (Wi-Fi gates over-subscribed)." },
        { number: 4, title: "Airline club / lounge", description: "1 sub-machine bank — typically operator-supplied refrigerated case + coffee + snack rack as part of the lounge's amenity program. Lounge brand standards govern visuals." },
        { number: 5, title: "Crew + employee lounge", description: "1 multi-machine bank with hot-food / microwaveable entrée coverage + 24/7 telemetry-driven restock. Captive workforce — peak shift-change windows drive volume." },
        { number: 6, title: "Parking / shuttle / rental car", description: "1 combo machine per shuttle stop or 1 vending bank per garage level. Bottled water dominates; sizing follows passenger throughput, not square footage." },
      ],
    },
    {
      heading: "3. Telemetry-driven planogram by zone",
      paragraph:
        "Telemetry data over the first 60 days replaces the launch planogram. Each zone has a characteristic SKU pattern.",
      headers: ["Zone", "Top SKU pattern", "Healthy-share share", "Refill peak"],
      rows: [
        ["Pre-security landside", "Bottled water + protein bar + travel pack snack", "30-40%", "Morning + late afternoon"],
        ["Post-security concourse", "Bottled water + chips + candy + iced coffee + protein bar", "35-45%", "All-day, peaks at 6-9am / 11am-2pm / 5-8pm"],
        ["Gate hold area", "Water + soda + chip + chocolate", "25-35%", "30 min pre-boarding burst"],
        ["Lounge", "Branded snack + sparkling water + coffee", "≥50%", "Continuous slow"],
        ["Crew lounge", "Hot meal + coffee + energy drink + bottled water", "≥40%", "Shift-change peaks"],
        ["Parking / shuttle", "Bottled water + small snack", "≥40%", "Peak departure + arrival blocks"],
      ],
    },
    {
      heading: "4. Concession coordination",
      items: [
        { label: "Adjacent retail (cobranded vs. competitor)", value: "Avoid placing high-velocity SKUs adjacent to a Hudson / Paradies / Brookstone storefront unless concession agreement permits — most master agreements include category-exclusivity language." },
        { label: "Food and beverage exclusion zones", value: "Some agreements exclude vending within X feet of a Starbucks, restaurant, or grab-and-go. Identify exclusion in the RFP review." },
        { label: "Concession program coordination", value: "Concession office assigns a coordinator at signing — quarterly walk-down reviews placement, signage, and program alignment." },
        { label: "ACDBE utilization", value: "DOT 49 CFR Part 23 utilization tracked per concession; placement decisions filed in the utilization plan." },
        { label: "Sponsorship + signage", value: "Brand-system + signage must match the airport's environmental graphics manual — coordinate with airport experience / customer-experience office." },
      ],
    },
    {
      heading: "5. Operational SLA at airport placement",
      items: [
        { check: "Tier 1 SLA <12 hr resolution at hubs (large airports often demand <4 hr at airside)" },
        { check: "Telemetry-driven restock cadence: gate-area can hit 2-3 visits/day at peak" },
        { check: "Refund flow per airport customer-experience program — often money-back-guaranteed" },
        { check: "SIDA-badged service personnel only on airside (49 CFR 1542)" },
        { check: "Vehicle access permit (AVOP) if route requires apron driving" },
        { check: "Fresh-food cold-chain ≤41°F monitored continuously (FDA Food Code 2022 §3-501.16)" },
        { check: "Sustainability + waste reporting per airport's sustainability program (ACI-ACA accreditation often referenced)" },
      ],
    },
    {
      heading: "6. Capacity planning by airport size",
      headers: ["Airport hub class", "Annual enplanements", "Typical concourse bank count", "Crew lounge count"],
      rows: [
        ["Large hub (top 30)", ">8M passengers/yr", "20-60 banks", "8-25 lounges"],
        ["Medium hub", "1M-8M passengers/yr", "8-25 banks", "3-8 lounges"],
        ["Small hub", "0.25M-1M passengers/yr", "3-10 banks", "1-4 lounges"],
        ["Non-hub", "<0.25M passengers/yr", "1-5 banks", "1-2 lounges"],
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an airport opportunity with operator partners equipped to design zone-by-zone placement maps, telemetry-driven sizing, and concession-coordinated planograms across pre-security, airside, gate, lounge, crew, and parking placements. Engagement scope is set per opportunity after a discovery call with the airport concessions office and (where applicable) master concessionaire.",
    },
  ],
  footer:
    "Informational reference. Confirm placement, signage, and concession-program requirements with the airport concessions office and master concessionaire. Citations current at publication.",
});

console.log("wrote "+"best-places-for-airport-vending");
