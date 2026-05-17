import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "ice-cream-vending-machines",
  assetType: "pack",
  title: "Ice Cream Vending Placement Pack",
  subtitle: "Equipment match, cold-chain SLA, seasonal demand plan, and commission framework",
  intro:
    "Ice cream vending is a cold-chain program with hard-failure modes (a temperature excursion above 10°F for >2 hours is product loss). This pack codifies the equipment match, telemetry SLA, seasonal restock cadence, and commission framework that capable operators can attest to in writing.",
  sections: [
    {
      heading: "1. Equipment match — cabinet selection",
      paragraph:
        "Ice cream cabinets are not snack cabinets with a freezer kit. Hold temperatures of -10°F to 0°F per FDA Food Code 3-501.16 require dedicated freezer-rated equipment with active defrost cycles.",
      items: [
        { label: "Fastcorp 632 / U-Select-It Vendors", value: "Robotic-arm freezer vendor, 21-22 SKU capacity, -10°F to 0°F hold, ENERGY STAR Tier 2 in current models. Best for >100 transactions/week." },
        { label: "Fuji Electric FFV / GPL ice cream", value: "Spiral or shelf-based freezer, 6-12 SKU capacity, 0°F to 10°F hold. Best for 30-80 transactions/week pilots." },
        { label: "Hardened outdoor models", value: "NEMA 3R or IP54-rated cabinet for covered patios, pool decks, marinas. Auto-shutdown above 100°F ambient. Required for non-conditioned spaces." },
        { label: "Power requirement", value: "208V/20A or 115V/15A circuit dedicated, with surge protection. Compressor inrush current 30A momentary." },
      ],
    },
    {
      heading: "2. Cold-chain SLA template (operator-side)",
      paragraph:
        "Cold-chain failure is the dominant risk for ice cream programs. The SLA below should be in the operator contract addendum, with telemetry attestation.",
      items: [
        { label: "Temperature monitoring", value: "Cellular telemetry probe (Cantaloupe Seed, Nayax VPOS Touch, 365 Retail) with 5-minute sampling. Probe placed in product zone, not return air." },
        { label: "Alert threshold — Tier 1", value: "Internal temperature > 10°F sustained 30+ minutes. Operator pager + on-call dispatch. 4-hour on-site response SLA." },
        { label: "Alert threshold — Tier 2", value: "Compressor short-cycling, defrost overrun, door-ajar > 5 minutes. 24-hour response SLA." },
        { label: "Product loss policy", value: "Excursion > 2 hours at >10°F: full SKU pull and credit to host. Operator-borne loss; not passed to host." },
        { label: "Power-loss procedure", value: "Battery-backed telemetry survives 4-hour outage. SMS alert to host facilities + operator at minute 15. Restock-and-credit on resumption." },
      ],
    },
    {
      heading: "3. Seasonal demand plan",
      paragraph:
        "Ice cream sell-through swings 4-6x between Q1 and Q3 in temperate climates. The cadence and planogram must flex with it.",
      headers: ["Season", "Demand index", "Restock cadence", "Planogram weight"],
      rows: [
        ["Q1 (Jan-Mar)", "0.4-0.6x baseline", "Bi-weekly", "60% novelty / 40% pint; remove melt-prone premium"],
        ["Q2 (Apr-Jun)", "1.0-1.5x baseline", "Weekly", "70% novelty / 30% pint; add seasonal SKUs"],
        ["Q3 (Jul-Sep)", "1.8-2.4x baseline", "2x weekly + telemetry top-off", "75% novelty / 15% pint / 10% premium; full planogram"],
        ["Q4 (Oct-Dec)", "0.5-0.8x baseline", "Bi-weekly", "Shift to indulgent / holiday SKUs; reduce diet/light"],
      ],
    },
    {
      heading: "4. SKU mix framework",
      items: [
        { label: "Core novelty (40-50%)", value: "Drumstick, Klondike, Magnum, Häagen-Dazs Stickbar, Snickers Ice Cream — $2.50-$4.00 price points." },
        { label: "Premium pint (15-20%)", value: "Ben & Jerry's, Häagen-Dazs pints — $5.50-$7.50 price points; only at premium sites (Class-A office, luxury multifamily, hospital concourse)." },
        { label: "Better-for-you (10-15%)", value: "Halo Top, Yasso Greek yogurt bars, Outshine fruit bars — $3.00-$4.50; mandatory at fitness, healthcare, school placements." },
        { label: "Kids / family (10-15%)", value: "Push pops, fudgesicles, Bomb Pops, character licensed — $1.50-$3.00; required at multifamily and family-rec placements." },
        { label: "Allergen-aware (5-10%)", value: "Dairy-free Oatly, So Delicious coconut bars; clearly labeled per FALCPA. Allergen summary card on machine face." },
      ],
    },
    {
      heading: "5. Site qualification checklist",
      items: [
        { check: "Indoor or weather-protected covered location with ambient < 95°F sustained." },
        { check: "Dedicated 208V/20A or 115V/15A circuit available within 6 feet of placement." },
        { check: "Cellular signal > -95 dBm (LTE Cat-M1) for telemetry; or Wi-Fi credentials provided." },
        { check: "Floor load > 600 lb concentrated (freezer + compressor weight)." },
        { check: "Foot-traffic estimate > 200 unique visitors/week for break-even." },
        { check: "Drainage or evaporator pan accessible (defrost condensate management)." },
        { check: "Service access clearance — 36 inches in front, 6 inches sides + rear." },
      ],
    },
    {
      heading: "6. Commission framework",
      paragraph:
        "Ice cream commission structures differ from snack/beverage due to higher COGS (35-45% vs 22-30%) and seasonal volatility. Capable operators offer tiered structures keyed to gross revenue.",
      headers: ["Monthly gross revenue", "Typical host commission", "Notes"],
      rows: [
        ["< $500", "0-3%", "Below operator break-even on service cost; commission often waived in exchange for placement"],
        ["$500 - $1,500", "5-8%", "Standard tier; quarterly settlement"],
        ["$1,500 - $3,000", "8-12%", "Mid tier; monthly settlement with telemetry-backed reporting"],
        ["> $3,000", "12-18%", "Premium tier; monthly settlement, audit-rights clause, planogram co-design"],
      ],
    },
    {
      heading: "7. Quarterly business review checklist",
      items: [
        { check: "Per-machine uptime report (compressor + payment + telemetry separately)." },
        { check: "Temperature-excursion log + root-cause notes." },
        { check: "Per-SKU velocity report and planogram refresh recommendations." },
        { check: "Seasonal cadence adjustment for upcoming quarter." },
        { check: "Commission settlement with telemetry-export evidence." },
        { check: "Energy consumption (kWh) report — ENERGY STAR units run 40-50% below legacy baselines." },
        { check: "Action items + owner + due date." },
      ],
    },
    {
      heading: "8. Capability — what to expect from a placement partner",
      paragraph:
        "We are equipped to match qualifying hosts with operators that hold cold-chain SLA contracts and run ENERGY STAR Tier 2 freezer vendors with cellular telemetry. Capability framing only — placement timing depends on operator capacity in your service area.",
    },
  ],
  footer:
    "This pack is an operational reference. Update temperature thresholds, commission tiers, and SKU mix to match your operator contract and jurisdiction.",
});

console.log("wrote " + "ice-cream-vending-machines");
