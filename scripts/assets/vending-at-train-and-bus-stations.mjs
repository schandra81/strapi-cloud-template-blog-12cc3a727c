import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-at-train-and-bus-stations",
  assetType: "playbook",
  title: "Transit Station Vending Operational Playbook",
  subtitle: "Outdoor spec, transit-card integration, quick-grab planogram, and revenue-share for rail and bus terminals",
  intro:
    "Transit stations are 16-20 hour dwell environments where 80%+ of purchase decisions happen in under 30 seconds. This playbook codifies the equipment specification, payment integration, planogram, and operator SLA that keep a station vending program at 97%+ uptime and concession-revenue accountable to the transit authority.",
  sections: [
    {
      heading: "1. Site classification and equipment specification",
      paragraph:
        "Outdoor and semi-conditioned platforms require equipment rated above APTA SS-PS-002 indoor baseline. Cabinet rating drives equipment cost more than any other variable.",
      headers: ["Site type", "Cabinet rating", "Temperature range", "Vandalism rating", "Equipment class"],
      rows: [
        ["Enclosed concourse (climate-controlled)", "Indoor NEMA 1", "65-78°F", "Standard glass front", "AMS Sensit 3, USI 3535, Crane Merchant Media"],
        ["Open platform (covered)", "NEMA 3R / IP44", "20-110°F operational", "Polycarbonate front, reinforced cabinet", "Crane Genesis B2B, Royal Vendors RVRDV outdoor, Fuji Electric outdoor"],
        ["Open platform (exposed)", "NEMA 4 / IP55", "-10 to 120°F", "Anti-pry hood, security mesh, internal cage", "Custom outdoor configurations, Sanden Vendo outdoor, IDX outdoor"],
        ["High-vandalism platform", "NEMA 4X / IP66", "-10 to 120°F", "Anti-graffiti coating, anti-pry, blade-resistant glass", "Outdoor-hardened with custom security package"],
      ],
    },
    {
      heading: "2. Transit-card and open-loop payment integration",
      paragraph:
        "Riders expect to tap the same fare card or device they used to enter the station. Closed-loop fare-media integration is the differentiator versus a generic vending placement.",
      items: [
        { label: "Closed-loop fare media", value: "Integrate with the transit authority's payment processor (e.g., Cubic Transportation Systems, INIT, Conduent). Cantaloupe Seed Network and Nayax both support customer-managed loyalty IDs that can be cross-referenced with fare-card IDs where the agency permits. Confirm PCI scope and PII handling in the data-sharing addendum." },
        { label: "Open-loop EMV contactless", value: "Apple Pay, Google Wallet, Samsung Pay, contactless EMV cards. Mandatory under PCI DSS 4.0 for any unattended payment terminal at a public-facing site. Telemetry providers (Cantaloupe ePort Connect, Nayax VPOS, USA Technologies G9) include EMV-certified readers." },
        { label: "Mobile wallet QR fallback", value: "QR-pay option for users without contactless cards. Particularly relevant in cash-displacing markets and where contactless penetration is below 70%." },
        { label: "Cash acceptance", value: "Bill validator MEI VN2500 or Crane Currenza c2 with anti-stringing and anti-fishing. Coin mech CashCode CC2403 or Coinco Quantum. Cash drop accessible only to vault crew, not route driver." },
      ],
    },
    {
      heading: "3. Quick-grab planogram (sub-30-second decision)",
      paragraph:
        "Transit shoppers select fast, so the planogram weights top-velocity SKUs and reduces selection friction. Rotation cadence is shorter than office or campus because impulse demand swings with weather and event schedules.",
      headers: ["Category", "Share of facings", "Top SKUs", "Restock trigger"],
      rows: [
        ["Water + hydration", "20-25%", "Aquafina, Dasani, Smartwater, electrolyte bottles", "Below 30% on hot-weather days, below 50% baseline"],
        ["Carbonated soft drinks", "15-20%", "Coke, Diet Coke, Pepsi, Mountain Dew, Sprite", "Below 40% baseline"],
        ["Energy drinks", "10-15%", "Red Bull, Monster, Celsius, Bang", "Below 30% baseline"],
        ["Coffee + RTD coffee", "5-10%", "Starbucks Frappuccino, Dunkin', Stok", "Higher facings on commuter routes during AM peak"],
        ["Salty snacks", "15-20%", "Lay's, Doritos, Cheez-It, peanuts", "Below 40% baseline"],
        ["Candy + sweets", "10-12%", "Snickers, M&Ms, Reese's, Skittles", "Below 40% baseline"],
        ["Healthy options", "8-12%", "KIND, RXBAR, protein cookies, nuts", "Below 50% baseline; FALCPA allergen signage mandatory"],
      ],
    },
    {
      heading: "4. Telemetry SLA and uptime",
      paragraph:
        "FTA Circular 4220.1F concession contracts and most transit-authority vending RFPs require minimum 95% uptime with documented telemetry. Operators below 95% face liquidated damages.",
      items: [
        { label: "Uptime SLA", value: "≥ 97% network uptime measured monthly per machine. ≥ 95% per-SKU availability for top-20 SKUs. Penalty: 1% commission abatement per percentage-point below SLA." },
        { label: "Telemetry stack", value: "Cellular-modem heartbeat ≤ 15 minutes. Cantaloupe Seed Pro, Nayax VPOS Touch, USA Technologies eSuds, or comparable. Real-time stockout alerts to operator route management system." },
        { label: "Service response", value: "Tier-1 (offline / payment down): on-site < 4 hours peak, < 8 hours off-peak. Tier-2 (single-SKU stockout): < 24 hours. Tier-3 (cosmetic): < 7 days." },
        { label: "Reporting cadence", value: "Monthly operator report to transit authority concession office: uptime per machine, gross revenue per machine, commission calculation, refund volume, service incidents. Quarterly business review." },
      ],
    },
    {
      heading: "5. Power resilience and standby operation",
      items: [
        { number: 1, title: "Standard service feed", description: "Dedicated 120V/20A circuit per machine on station-house panel. Surge protection at panel and at machine plug (Tripp Lite ISOBAR4ULTRA or comparable). Most transit authorities require UL 1449 Type 2 SPD at the branch panel." },
        { number: 2, title: "Brownout and dirty power", description: "Outdoor platforms often see voltage sag during peak heating/cooling load. Equipment selected with wide input range (90-130V tolerance) and built-in compressor delay to prevent short-cycling on power-flicker events." },
        { number: 3, title: "Event-day load shedding", description: "Coordinate with station electrical operations when temporary stage power, vendor concessions, or maintenance shuts circuits. Telemetry alerts operator within 5 minutes of power loss so the route adjusts." },
        { number: 4, title: "Cold-chain protection", description: "Refrigerated units maintain product temp 35-40°F per FDA Food Code 3-501.16. Internal-temp alarm triggers operator response within 4 hours; product disposal log required if temp exceeds 41°F for more than 4 hours." },
      ],
    },
    {
      heading: "6. Vandalism, theft, and incident response",
      items: [
        { check: "Anti-pry hood and recessed coin/bill returns per APTA SS-SIS-RP-013 station design guidance." },
        { check: "Blade-resistant front glass (laminated polycarbonate ≥ 3/8 inch) on exposed platforms." },
        { check: "Internal cage and locked cash vault separate from product compartment." },
        { check: "CCTV coverage of machine face from station camera network; operator receives footage on request within 48 hours." },
        { check: "Vandalism response: operator on-site within 8 hours, machine secured or removed within 24 hours, repair or replacement within 72 hours." },
        { check: "Incident log filed quarterly with transit authority police liaison." },
      ],
    },
    {
      heading: "7. Revenue share and concession compliance",
      headers: ["Volume tier (gross revenue/machine/month)", "Operator share", "Authority share", "Notes"],
      rows: [
        ["Under $400", "85%", "15%", "Standard low-volume rate; covers route economics on platforms below break-even"],
        ["$400-$800", "82%", "18%", "Mid-tier; typical for covered platforms in mid-size metros"],
        ["$800-$1500", "78%", "22%", "High-volume; major-system terminals and high-ridership stations"],
        ["Over $1500", "75%", "25%", "Premium concourse placements; competitive bid scenarios"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate equipment class, planogram, and SLA to your transit authority's procurement specification and concession contract terms.",
});

console.log("wrote "+"vending-at-train-and-bus-stations");
