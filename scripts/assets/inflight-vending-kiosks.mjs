import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "inflight-vending-kiosks",
  assetType: "playbook",
  title: "Airport Vending Playbook — Gate-Area, Lounge, and Emergency Capability",
  subtitle: "Gate-area, lounge, and emergency vending coverage for airport programs",
  intro:
    "The term 'in-flight vending' is often used by airport-adjacent buyers, but actual in-cabin vending is governed by the airline's onboard catering program — not by an airport concession. This playbook clarifies the boundary and then codifies the three airport-side capabilities that fill the same need: gate-area vending, airline-lounge amenity vending, and emergency / irregular-operations (IROPS) vending. Referenced against FAA Part 139 (airport operations), TSA 49 CFR 1542 / 1544, FDA Food Code 2022 cold-chain, FAA AC 120-103A (fatigue management — crew-lounge relevance), and ACI-NA passenger-experience benchmarking.",
  sections: [
    {
      heading: "1. Boundary — what's airport vs. airline",
      headers: ["Scope", "Governance", "Operator role"],
      rows: [
        ["In-cabin / inflight", "Airline catering contract (LSG Sky Chefs, Gate Gourmet, Do & Co)", "Not an airport-side vending placement"],
        ["Gate-area / hold-room", "Airport concession program + TSA 1542 airside", "Vending operator (via master or direct)"],
        ["Airline lounge", "Airline brand + lounge operator", "Vending / micro-market sub-amenity"],
        ["Crew lounge / rest area", "Airport + airline + FAA Part 117 (rest rules)", "Vending operator (24/7 service)"],
        ["Emergency / IROPS (delays, diversions)", "Airline + airport ops", "Surge capacity from existing vending operator"],
      ],
    },
    {
      heading: "2. Gate-area capability",
      items: [
        { number: 1, title: "Sizing", description: "1 snack + 1 drink (or one combo) per 1-3 gates at hub airports; 1 per 4-6 gates at small airports. Sized per ACI-NA enplanement throughput at the gate cluster, not square footage." },
        { number: 2, title: "Planogram", description: "Heavy on bottled water (≥35% of facings), travel-friendly snacks, energy drinks, and protein bars. Healthy-share ≥35% of facings — airside travelers buy healthier than retail benchmark." },
        { number: 3, title: "Refrigeration", description: "Drink machines + cold-food machines maintain ≤41°F continuous (FDA Food Code 2022 §3-501.16) with telemetry alert on excursion." },
        { number: 4, title: "Telemetry + restock", description: "Cellular telemetry only (gate Wi-Fi often over-subscribed). Restock 1-3x/day at hubs, telemetry-driven. SIDA-badged personnel only (49 CFR 1542)." },
        { number: 5, title: "Customer service", description: "Refund flow via kiosk app + SMS + on-machine button. Tier-1 SLA <12 hr at hubs; many airports require <4 hr." },
      ],
    },
    {
      heading: "3. Airline-lounge amenity vending",
      items: [
        { label: "Lounge brand context", value: "Delta Sky Club, United Club, American Admirals Club, Priority Pass partners, Amex Centurion. Each lounge has a brand-experience manual that governs visible amenities." },
        { label: "Vending placement", value: "Typically a quiet snack rack + refrigerated case + coffee station — not a free-standing machine. Operator supplies SKUs at COGS + service fee; lounge offers free to members." },
        { label: "Healthy-share + dietary coverage", value: "Lounge customers expect ≥50% better-for-you facings + ≥1 gluten-free / dairy-free / vegan in every category. RDN-reviewed planogram quarterly." },
        { label: "Brand visibility", value: "Operator-side branding limited or absent; lounge-brand signage governs. Skin file + signage delivered per lounge brand standards." },
        { label: "Service cadence", value: "Daily restock + daily fresh-food rotation; airline rep coordinates with operator weekly." },
      ],
    },
    {
      heading: "4. Crew + employee lounge capability",
      paragraph:
        "Airline crew (pilots + flight attendants) and ground crew operate under FAA Part 117 (flight crew) and FAA fatigue-management guidance — rest-area food + hydration is operationally important, not just a perk.",
      items: [
        { check: "24/7 telemetry-driven multi-machine bank: snack + drink + cold-food + coffee" },
        { check: "Hot-food capability — microwaveable entrées + frozen options + commissary-prepared meals" },
        { check: "Healthy-share ≥40% — coverage for crews on early / red-eye / international rotations" },
        { check: "Caffeine + hydration prominence — 24/7 access to bottled water + coffee + iced coffee + energy" },
        { check: "Allergen + dietary coverage — FALCPA + FASTER Act labeling on every SKU; ≥1 gluten-free / dairy-free / vegan per category" },
        { check: "Cashless + employee-badge integration where the airport / airline supports it" },
        { check: "Restock cadence aligned to shift-change peaks (telemetry-driven)" },
      ],
    },
    {
      heading: "5. Emergency / IROPS surge capability",
      items: [
        { number: 1, title: "Triggering events", description: "Major weather diversion, ground stop, airport closure, or sustained delay (>4 hours). Airline operations contacts master concessionaire / vending operator." },
        { number: 2, title: "Surge restock", description: "Operator pre-positions surge inventory at landside warehouse; SIDA-badged surge crew dispatches to airside banks. Telemetry confirms below-threshold SKUs in advance." },
        { number: 3, title: "Voucher / free-vend events", description: "Airline issues free-vend codes for affected passengers; operator bills the airline at COGS + service fee. Kiosk software toggles free-vend by location for a defined window." },
        { number: 4, title: "Hydration priority", description: "Bottled water + non-caffeinated beverages prioritized; healthy-share + protein bars next; indulgent SKUs deprioritized during IROPS." },
        { number: 5, title: "Reporting + reimbursement", description: "Operator delivers IROPS event report — SKUs dispensed, free-vend transactions, total cost — to airport / airline within 5 business days." },
      ],
    },
    {
      heading: "6. Compliance overlay",
      items: [
        { check: "49 CFR 1542 / 1544 — SIDA badging + STA for all airside service personnel" },
        { check: "49 CFR Part 23 ACDBE — utilization tracked at concession level" },
        { check: "FDA Food Code 2022 — cold-chain ≤41°F continuous, 7-day discard on RTE items (§3-501.16, §3-501.17)" },
        { check: "21 CFR 101.8 — calorie disclosure on vending machine front for 20+ machine operators" },
        { check: "FALCPA + FASTER Act — top-9 allergen labels on every SKU" },
        { check: "Airport sustainability program (ACI-ACA where applicable)" },
        { check: "Customer-experience program metrics (e.g., refund SLA, machine cleanliness) reported monthly to concessions office" },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an airport or airline with operator partners equipped to deliver gate-area vending, airline-lounge amenity vending, crew + employee lounge 24/7 capability, and IROPS surge capability — all within the SIDA badging + ACDBE utilization + FDA Food Code-compliant framework summarized above. In-cabin / onboard catering is outside vending scope and managed via the airline's catering program. Engagement scope is set per opportunity after a discovery call.",
    },
  ],
  footer:
    "Informational reference. Confirm SIDA badging, ACDBE utilization, and food-safety requirements with the airport concessions office and AHJ. Citations current at publication.",
});

console.log("wrote "+"inflight-vending-kiosks");
