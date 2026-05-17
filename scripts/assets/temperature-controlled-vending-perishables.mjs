import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "temperature-controlled-vending-perishables",
  assetType: "pack",
  title: "Perishable Vending Program Design Template",
  subtitle: "Cold-chain SOP, equipment specification, restock cadence for refrigerated and hot-hold vending",
  intro:
    "Temperature-controlled vending for perishable SKUs is governed by FDA Food Code 3-501.16 (cold-hold ≤ 41°F, hot-hold ≥ 135°F), HACCP-style temperature logging, FALCPA allergen labeling, ASHRAE Standard 24 refrigerated transport, and operator SLA on excursion response. This template codifies three artifacts — cold-chain SOP, equipment specification, restock cadence — so a facility is equipped to commit a compliant perishable program rather than fail at the first temperature excursion.",
  sections: [
    {
      heading: "1. Cold-chain SOP",
      paragraph:
        "The SOP defines temperature targets, monitoring cadence, excursion response, and recordkeeping. Operator attests to each at install and at quarterly review.",
      items: [
        { number: 1, title: "Temperature targets", description: "Cold-hold ≤ 41°F (FDA Food Code 3-501.16); target operating range 35-40°F to provide margin. Hot-hold ≥ 135°F." },
        { number: 2, title: "Monitoring cadence", description: "Telemetry reports internal temp every 15 minutes; daily summary to operator dashboard. Calibrated thermometer onsite for spot verification." },
        { number: 3, title: "Excursion alarm", description: "4-hour SLA alarm at any deviation outside 35-40°F (cold) or below 135°F (hot). Auto-alert to operator + host EHS." },
        { number: 4, title: "Excursion response", description: "If excursion > 4 hours: discard all temperature-sensitive SKUs per FDA Food Code 3-501.19 time-as-public-health-control rules; log discard volume." },
        { number: 5, title: "Recordkeeping", description: "Temperature log retained 12 months minimum; HACCP-style critical control point records per FDA Food Code 8-203.13." },
        { number: 6, title: "Maintenance cadence", description: "Quarterly compressor + coil inspection; annual refrigerant + door-seal inspection; documented in operator service log." },
      ],
    },
    {
      heading: "2. Equipment specification",
      paragraph:
        "Cold-chain equipment specs that matter for perishable programs.",
      headers: ["Spec area", "Cold-hold requirement", "Hot-hold requirement"],
      rows: [
        ["Temperature range", "35-40°F operating; ≤ 41°F max", "≥ 135°F hot-hold"],
        ["Door seal", "Magnetic gasket, IP54 or better", "Insulated, sealed door"],
        ["Internal lighting", "LED, low heat emission", "Not required"],
        ["Refrigerant", "GWP ≤ 700 (R-290 / R-744 / HFO)", "Not applicable"],
        ["Temperature sensor", "NIST-traceable; ± 1°F accuracy", "NIST-traceable; ± 2°F"],
        ["Telemetry", "15-min heartbeat; 4-hour SLA alarm", "15-min heartbeat; 4-hour SLA alarm"],
        ["Power backup", "Sufficient battery for telemetry continuity during outage", "Not required for hot-hold"],
        ["ENERGY STAR certification", "Yes (where applicable)", "N/A"],
      ],
    },
    {
      heading: "3. Restock cadence framework",
      paragraph:
        "Restock cadence is tighter for perishables than for ambient SKUs. Cadence is driven by per-SKU shelf life and per-SKU velocity.",
      items: [
        { label: "Fresh-food entrée / salad / sandwich", value: "Daily restock; pull at 2 days from best-by date." },
        { label: "Yogurt / cheese / cold dairy", value: "2-3x/week; pull at 3 days from best-by." },
        { label: "Refrigerated beverages (milk, juice)", value: "1-2x/week; pull at 7 days from best-by." },
        { label: "Hot-meal entrée", value: "Daily restock; pull at end of each shift cycle." },
        { label: "Hot-drink (coffee, soup)", value: "1-2x/week; refresh hot-hold daily." },
      ],
    },
    {
      heading: "4. FALCPA allergen labeling",
      items: [
        { check: "Big-9 allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) declared in plain language on each SKU." },
        { check: "Allergen summary on machine face visible from clear floor space (ADA Section 305)." },
        { check: "Operator attests to manufacturing-site cross-contact disclosures." },
        { check: "Allergen UI flag in machine selection per ADA Section 707." },
        { check: "Allergen incident protocol documented; school nurse / EHS coordinator on incident escalation list." },
      ],
    },
    {
      heading: "5. HACCP-style record template",
      paragraph:
        "Records retained 12 months minimum per FDA Food Code 8-203.13. Operator delivers per-machine record monthly to host EHS.",
      headers: ["Record type", "Frequency", "Owner"],
      rows: [
        ["Internal temperature log", "Continuous (telemetry)", "Operator"],
        ["Spot-check thermometer verification", "Weekly", "Operator restock crew"],
        ["Excursion incident report", "Per event", "Operator + host EHS notification"],
        ["Discard log (volume + SKU)", "Per discard event", "Operator"],
        ["Maintenance log (compressor, seal, refrigerant)", "Quarterly + annual", "Operator"],
        ["Allergen cross-contact attestation", "Annually", "Operator + SKU manufacturer"],
      ],
    },
    {
      heading: "6. Operator capability checklist",
      items: [
        { check: "Operator has 24+ months of cold-chain placements with documented FDA Food Code attestation." },
        { check: "Operator's telemetry reports 15-min internal temperature on every refrigerated unit." },
        { check: "Operator's 4-hour SLA alarm tested and documented." },
        { check: "Operator's restock crew trained on FIFO + 2-day pull rule." },
        { check: "Operator attests to FALCPA allergen labeling + cross-contact disclosures." },
        { check: "Operator's equipment uses AIM Act compliant refrigerant (GWP ≤ 700)." },
        { check: "Operator's HACCP-style records retained 12 months minimum." },
        { check: "Operator carries insurance covering product liability + cold-chain failure." },
      ],
    },
    {
      heading: "7. QBR review framework",
      items: [
        { check: "Temperature excursion log review — count + duration + corrective action." },
        { check: "Discard volume report — per-SKU volume + root cause." },
        { check: "Restock cadence adherence — actual vs SLA cadence." },
        { check: "Per-SKU velocity report — Tier-1/2/3 movements." },
        { check: "FALCPA allergen attestation refresh." },
        { check: "Refrigerant inventory + AIM Act compliance refresh." },
        { check: "Action items + owner + due date." },
      ],
    },
    {
      heading: "8. Annual recertification",
      items: [
        { check: "FDA Food Code 3-501.16 attestation refreshed." },
        { check: "Telemetry firmware updated to current stable version." },
        { check: "Calibrated thermometer NIST-traceable verification onsite." },
        { check: "Refrigerant inventory + leak-check per EPA Section 608 (applicable units)." },
        { check: "Door-seal inspection + replacement where needed." },
        { check: "HACCP-style record audit — 12-month log reviewed for completeness." },
        { check: "Allergen + FALCPA attestation refreshed for full SKU list." },
      ],
    },
  ],
  footer:
    "This template is a working cold-chain reference. Confirm FDA Food Code state adoption (most states adopt with minor amendments) with the facility EHS coordinator and operator before commit.",
});

console.log("wrote "+"temperature-controlled-vending-perishables");
