import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machines-for-industrial-facilities",
  assetType: "playbook",
  title: "Industrial Facility Vending Equipment & Operations Playbook",
  subtitle: "Equipment specification, environmental ratings, and operations discipline for industrial sites",
  intro:
    "Industrial sites — heavy manufacturing, foundries, distribution centers, refineries, mining services — punish consumer-grade vending equipment. This playbook specifies the equipment, placement discipline, and service operations that survive the environment and serve the workforce.",
  sections: [
    {
      heading: "1. Environmental classification",
      paragraph:
        "Before specifying equipment, classify each placement against the actual exposure. The same plant can have three different classes within 500 ft of each other.",
      items: [
        { label: "Class A — Climate-controlled office / control room", value: "60-78°F, 30-60% RH, low dust. Standard glass-front equipment acceptable." },
        { label: "Class B — Conditioned breakroom on production floor", value: "65-85°F, dust intrusion possible, vibration low. Standard equipment plus dust filters and sealed bezels." },
        { label: "Class C — Production floor, semi-conditioned", value: "55-95°F, high dust, vibration moderate. Industrial-spec cabinet (gauge-thicker steel, sealed gaskets), filtered intake, NEMA 12-rated electronics enclosure." },
        { label: "Class D — Outdoor / loading dock / weather-exposed", value: "Outdoor temperature range, weather, UV. Outdoor-rated cabinet (NEMA 4 enclosure, weather hood, freeze-protected condensate). Crane 167 Outdoor or AMS Outdoor-spec." },
      ],
    },
    {
      heading: "2. Equipment specification by class",
      headers: ["Class", "Snack", "Cold beverage", "Refrigerated food", "Notes"],
      rows: [
        ["A", "Crane 187 / AMS 39", "Royal 660 / Vendo 721", "Crane Merchant Media food", "Standard install"],
        ["B", "AMS 39 with dust filters", "Royal 660 with filtered intake", "Crane food + glass cleaning kit", "Quarterly filter change"],
        ["C", "AMS Sensit 3 industrial / Crane Merchant Combo", "Royal RVCC outdoor-spec", "Outdoor-rated only", "NEMA 12 electronics, sealed bezels, weekly cabinet wipe-down"],
        ["D", "Outdoor cabinet (custom or AMS Outdoor)", "Royal Outdoor or Cantaloupe-equipped outdoor", "Not recommended unless heated enclosure", "Weather hood, condensate freeze protection, GFCI"],
      ],
    },
    {
      heading: "3. Placement discipline",
      items: [
        { number: 1, title: "Worker-time math", description: "Workers should not lose more than 5 min of a 15-min break walking to/from a machine. Place clusters within 200 ft of any work station; satellites within 100 ft of high-density work cells." },
        { number: 2, title: "Travel-path safety", description: "Placements off forklift lanes per OSHA 1910.176(a); 36 in. service clearance per ANSI/NAMA 2-2011 §4; ADA 30 in. x 48 in. approach per 2010 ADA Standards §305." },
        { number: 3, title: "Power + cooling load", description: "Aggregate cluster load < 80% of dedicated 20A 120V branch per NEC 210.23. Refrigerated units on dedicated circuits. Heat rejection routed away from break seating." },
        { number: 4, title: "Sanitation perimeter", description: "Food consumption areas separated from production per OSHA 1910.141(g)(2). Vending placement aligns with this perimeter, not inside production zone." },
        { number: 5, title: "Lockout coordination", description: "Vending power circuits documented in the site electrical drawings so they remain energized during equipment lockout/tagout (LOTO) per OSHA 1910.147." },
      ],
    },
    {
      heading: "4. Operational support structure",
      items: [
        { label: "Restock cadence", value: "2-5 visits/week depending on size. Pre-shift-1 restock window 5-6 AM; mid-shift telemetry-driven top-off for high-velocity machines." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain excursion, payment system down — <24 hr acknowledgement, <24 hr resolution." },
        { label: "Service SLA — Tier 2", value: "SKU stockout, planogram refresh — 24-48 hr ack, 5-7 day resolution." },
        { label: "Service SLA — Tier 3", value: "Cosmetic, signage, cleaning — 5 day ack, 14 day resolution." },
        { label: "Preventive maintenance", value: "Quarterly PM visit: filter change, gasket inspection, refrigeration coil clean, payment reader firmware check, telemetry battery check." },
      ],
    },
    {
      heading: "5. Telemetry baseline",
      paragraph:
        "Industrial sites cannot rely on visual restock checks — the breakroom is often unstaffed for shifts at a time. Telemetry is the operational nervous system.",
      items: [
        { label: "Required telemetry", value: "Cantaloupe Seed, Nayax, 365 Retail Markets, or Crane Streamware — cellular-modem-enabled with sub-15-min heartbeat. No host LAN dependency." },
        { label: "Monitored metrics", value: "Online/offline, last-restock timestamp, per-SKU velocity, cash/cashless mix, payment-failure rate, refrigeration temperature, door-open events." },
        { label: "Alert thresholds", value: "Offline >30 min triggers operator alert. Temperature excursion outside 33-41°F (refrigerated) or above 0°F (frozen) triggers immediate alert with 4-hour SLA." },
      ],
    },
    {
      heading: "6. Planogram for industrial workforce",
      paragraph:
        "Industrial workforces show higher calorie demand, higher hydration demand, and stronger preference for familiar mainstream brands. Per ACOEM industrial-workforce guidance, hydration share should be elevated.",
      items: [
        { check: "Snack: 60-70% mainstream salty/sweet (Frito-Lay, Mondelez, Hershey); 20-30% protein/meal-replacement; 10-20% better-for-you SKUs per NAMA FitPick" },
        { check: "Beverage: 30%+ water + electrolyte + unsweetened (ACOEM hydration guidance); 40% carbonated; 20% energy; 10% other" },
        { check: "Food/fresh: meal-replacement weight (sandwiches, wraps, protein bowls) over snack-only mix" },
        { check: "Shift-3 surge: caffeine + hot-snack + comfort food weighting per shift-3 velocity data" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Uptime per machine", "≥ 98%", "Monthly"],
        ["Stockout SKU-hours", "≤ 2%", "Weekly"],
        ["Tier 1 resolution time", "< 24 hr", "Monthly"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Preventive maintenance compliance", "100% on-schedule", "Quarterly"],
        ["Per-shift velocity adherence", "Within 10% of forecast", "Quarterly"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to source industrial-spec operators and coordinate the equipment specification + SLA terms in this playbook.",
});

console.log("wrote "+"vending-machines-for-industrial-facilities");
