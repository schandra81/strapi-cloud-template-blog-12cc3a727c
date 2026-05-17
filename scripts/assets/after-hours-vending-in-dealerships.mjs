import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "after-hours-vending-in-dealerships",
  assetType: "playbook",
  title: "Dealership After-Hours Vending Playbook",
  subtitle: "Staff planogram, telemetry SLA, power resilience, and security for evening and weekend operation",
  intro:
    "Dealership service operations frequently extend to 9 PM weeknights and run 7 days a week, while sales floor coverage shifts through evening. After-hours vending must keep service technicians, late-shift sales staff, and customers waiting on extended-hours service supplied without daytime restock support. This playbook codifies the after-hours planogram, telemetry SLA, security plan, and power-resilience configuration.",
  sections: [
    {
      heading: "1. After-hours operational profile",
      paragraph:
        "Most dealership groups run service to 8-9 PM weeknights and 5 PM Saturday; sales floors typically run to 9 PM weeknights and 7 PM Saturday. Sunday hours vary by state blue-laws and group policy. The after-hours profile drives a different planogram and restock cadence than the daytime customer-lounge program.",
      headers: ["Time window", "Primary user", "Typical traffic", "Planogram emphasis"],
      rows: [
        ["6 AM - 8 AM (pre-shift)", "Service techs and porters", "30-60 transactions/day", "Coffee, breakfast, protein, water"],
        ["8 AM - 5 PM (daytime)", "Customers + staff", "200-400/day", "Standard customer-lounge planogram"],
        ["5 PM - 9 PM (evening)", "Service techs + late sales", "60-120/day", "Hearty snacks, hot beverages, energy drinks, water"],
        ["9 PM - 6 AM (overnight)", "Lot porters + security", "5-15/day", "Long-shelf-life items; telemetry-driven low-volume planogram"],
        ["Saturday", "Service + sales + customer", "150-250/day", "Standard planogram, restocked Friday PM"],
        ["Sunday (where open)", "Limited staff", "20-40/day", "Long-shelf-life, no restock until Monday"],
      ],
    },
    {
      heading: "2. Telemetry and remote operations",
      items: [
        { label: "Telemetry stack", value: "Cellular-modem heartbeat ≤ 15 minutes. Cantaloupe Seed Pro, Nayax VPOS Touch, USA Technologies eSuds, 365 Retail Markets PicoStation, or comparable. Independent of dealership Wi-Fi to remain online during after-hours network maintenance windows." },
        { label: "Alert routing", value: "Tier-1 alerts (offline > 30 min, temp excursion, payment failure) routed to operator on-call rotation 24/7. Tier-2 alerts (single-SKU stockout) batched to next-business-day route." },
        { label: "Remote refund", value: "Customer triggers refund via on-machine touchpad, operator app, or SMS-to-refund number. Cashless refunds auto-credit within 24 hours; cash refunds processed at next restock visit." },
        { label: "Real-time dashboard for dealership", value: "Service manager and customer-experience lead receive read-only telemetry dashboard: uptime, top-10 SKU stock status, refund volume, daily revenue. Quarterly business review includes per-time-window velocity analysis." },
      ],
    },
    {
      heading: "3. Service SLA — after-hours-aware",
      paragraph:
        "Standard dealership operator contracts include a 4-hour daytime SLA but a relaxed overnight SLA. The after-hours playbook tightens overnight response for high-volume groups.",
      items: [
        { number: 1, title: "Tier 1 — payment down or cold-chain failure", description: "On-site < 4 hours during operating hours (6 AM - 9 PM weekdays, 7 AM - 5 PM Saturday). < 12 hours overnight and Sunday. Cold-chain failure triggers immediate operator response any time of day per FDA Food Code 3-501.16." },
        { number: 2, title: "Tier 2 — stockout or planogram issue", description: "< 24 hours during operating days. Stockouts identified Friday evening replenished by Saturday morning where the operator has weekend route capacity." },
        { number: 3, title: "Tier 3 — cosmetic, signage, or label", description: "< 7 days. Coordinated with normal weekly route." },
        { number: 4, title: "Escalation path", description: "Dealership general-manager and operator owner each have direct cell-phone contact for emergencies (payment-system breach, vandalism, structural damage). Documented in placement agreement." },
      ],
    },
    {
      heading: "4. Power resilience",
      paragraph:
        "Dealerships frequently experience generator-test events, breaker work, and after-hours circuit maintenance. Equipment must survive without product loss, and telemetry must reconnect cleanly after power events.",
      items: [
        { label: "Dedicated circuit", value: "120V/20A dedicated circuit per machine. Surge protection at panel (UL 1449 Type 2 SPD) and at machine plug (Tripp Lite ISOBAR4ULTRA or equivalent)." },
        { label: "Generator-supplied lounge", value: "If the customer lounge is on emergency-generator power, vending machine is on the same circuit so it survives utility outages. Confirm dealership facility-management plan." },
        { label: "Cold-chain protection", value: "Refrigerated machines maintain 35-40°F per FDA Food Code 3-501.16. Internal-temp alarm triggers operator response within 4 hours, regardless of time of day. Product disposal log required if temp > 41°F for more than 4 hours." },
        { label: "Compressor delay", value: "Equipment configured with 5-minute compressor delay on power-restore to prevent short-cycling on momentary outages." },
        { label: "Cellular telemetry battery backup", value: "Telemetry modem with battery backup (4-8 hours) so the operator is notified of power loss even when the machine is fully de-energized." },
      ],
    },
    {
      heading: "5. Security and after-hours access",
      items: [
        { check: "Machine placed within CCTV coverage of dealership security system; operator has 48-hour footage-request right." },
        { check: "Anti-pry hood, reinforced cabinet, internal cage on cash vault separate from product compartment." },
        { check: "After-hours alarm integration: door-open sensor and tilt sensor report to operator route-management and dealership security panel." },
        { check: "Service-technician access badge: technicians can refund or pay via dealership-issued NFC fob through operator app integration where the group has a staff-meal program." },
        { check: "Cash vault collection on dealership-secure schedule, not in the customer-visible lounge during sales hours." },
        { check: "Vandalism response: operator on-site < 8 hours, machine secured or replaced < 72 hours." },
      ],
    },
    {
      heading: "6. After-hours staff planogram",
      paragraph:
        "Evening and overnight users have different needs than daytime customer-lounge users. The same machine often serves both; the planogram weights both populations and uses telemetry to confirm category share matches actual time-of-day velocity.",
      headers: ["Category", "Daytime share", "After-hours share", "Notes"],
      rows: [
        ["Coffee + hot beverages", "8-10%", "15-20%", "RTD coffee, hot cocoa packets; staff want caffeine for late shifts"],
        ["Energy drinks", "8-10%", "15-20%", "Red Bull, Monster, Celsius, Bang"],
        ["Hearty snacks", "15-20%", "25-30%", "Jerky, peanut-butter crackers, microwave meals where break room has microwave"],
        ["Hydration", "20-25%", "15-20%", "Water steady; sports-drinks lower at night"],
        ["Carbonated soft drinks", "15-20%", "10-12%", "Lower at night; caffeine preference shifts to energy/coffee"],
        ["Candy + sweet", "12-15%", "8-10%", "Reduced overnight"],
        ["Healthy options", "10-12%", "5-8%", "Daytime customer-driven; lower at night when staff prefer comfort and caffeine"],
      ],
    },
    {
      heading: "7. Manufacturer + CSI alignment",
      items: [
        { label: "Manufacturer brand standards", value: "Most OEMs (Toyota, Honda, Ford, GM, Stellantis, BMW, Mercedes, Lexus) publish customer-experience standards that include lounge amenities. Vending equipment skinning, signage, and category mix must align with manufacturer brand-experience guidelines. Confirm OEM brand-standards documentation before equipment selection." },
        { label: "Customer Satisfaction Index (CSI)", value: "After-hours service experience is rated in J.D. Power Customer Service Index Long-Term study. Lounge amenities including vending appear in the customer-comfort sub-score. A well-stocked, working machine at 9 PM contributes; an empty or broken machine penalizes the dealership CSI score." },
        { label: "Co-marketing with OEM", value: "Some OEMs co-fund branded vending or beverage programs (Mercedes-Benz Coffee Bar, BMW iHubs). Confirm with the dealership regional manufacturer rep before signing a third-party operator agreement that may conflict with OEM sponsorship." },
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the planogram, SLA, and security plan to your group's operating hours, OEM brand standards, and facility-management capabilities.",
});

console.log("wrote "+"after-hours-vending-in-dealerships");
