import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "office-coffee-delivery-services",
  assetType: "playbook",
  title: "Office Coffee Delivery Playbook",
  subtitle: "Provider tier selection, equipment scoping, supply cadence, and service-SLA structure",
  intro:
    "Office coffee delivery services (OCS) operate on a four-decision frame: provider tier, equipment, supply cadence, and SLA. The wrong cut on any one of those drives stockouts, off-taste, or recurring over-spend within two quarters. This playbook codifies each. It maps to NSF 4 / NSF 169 sanitation standards, FDA food-contact equipment standards (21 CFR 175-178), ADA Section 309.4 operating force, and standard NAMA OCS service KPIs.",
  sections: [
    {
      heading: "1. Provider tier selection",
      paragraph:
        "Office coffee providers split into three operating models. Tier selection is set by office size + service expectation, not pricing alone.",
      headers: ["Tier", "Operating model", "Best fit (employees)", "Notes"],
      rows: [
        ["National OCS", "FedEx / UPS-style supply drop; equipment lease bundled", "Any size; standardized SKUs", "Predictable; lower SKU breadth; limited field service"],
        ["Regional OCS", "Route truck + dedicated field rep; SKU breadth + customization", "30+", "Most common; balances service + cost"],
        ["Specialty / boutique OCS", "Specialty-grade beans + barista-quality equipment + dedicated account manager", "50+ at coffee-priority offices", "Premium pricing; supports specialty bean program"],
      ],
    },
    {
      heading: "2. Equipment scoping",
      items: [
        { check: "Match equipment tier to peak-hour drink count: pod under 10/hr, office-prosumer 10-25/hr, semi-commercial 25-60/hr, commercial 60+/hr." },
        { check: "Plan for 1.2-1.6 drinks per employee per workday at full in-office occupancy. Hybrid offices: use actual badge-tap occupancy, not headcount." },
        { check: "Dual-rail option (pod + drip, or pod + bean-to-cup) at 30+ employee offices accommodates both fast-cup and meeting-pot use cases." },
        { check: "Plumbed-in water vs. jug — plumbed always preferred where feasible. Saves recurring jug labor + plastic waste; supports filter program." },
        { check: "Alt-milk capability — confirm at machine selection; expect secondary milk hopper or counter-side carafe at commercial-grade." },
        { check: "ADA Section 309.4 — cup-dispense, machine controls, sweetener station within 15-48 inches AFF and ≤ 5 lbf operating force." },
      ],
    },
    {
      heading: "3. Supply cadence",
      items: [
        { number: 1, title: "Auto-replenishment baseline", description: "Provider sets a baseline cadence based on first-90-day consumption data. Standard pattern: weekly route visit + restock of fast-mover SKUs, biweekly route for slower SKUs." },
        { number: 2, title: "Telemetry-driven adjustments", description: "Where the machine is telemetry-enabled (Cantaloupe, Nayax, AWM, OEM-native), per-SKU consumption triggers between-route top-offs. Reduces stockouts 40-60% per published case studies." },
        { number: 3, title: "Seasonal pivots", description: "Iced / cold-brew SKUs weighted up in spring/summer; hot-brew + dark-roast in fall/winter. Hot-chocolate added October-March." },
        { number: 4, title: "Special-request adds", description: "Member-requested SKUs evaluated quarterly; added with 30-day velocity check before locking into regular cadence." },
        { number: 5, title: "Bean freshness", description: "Roast date stamped on bean bag; opened within 30 days of roast; consumed within 14 days of opening. Operator field rep rotates hopper FIFO." },
        { number: 6, title: "Refrigerated supply", description: "Fresh milk delivered weekly; refrigerated case temperature logged 35-40°F; excursion triggers same-day swap." },
      ],
    },
    {
      heading: "4. Cleaning + maintenance schedule",
      items: [
        { label: "Daily (host or operator)", value: "Empty + rinse drip tray. Wipe counter, machine exterior, sweetener caddy. Refill cups + sweeteners. Empty trash." },
        { label: "Weekly (operator field rep)", value: "Deep clean machine exterior. Clean milk frother / steam wand. Descale check. Restock paper goods. Wipe inside cabinet doors." },
        { label: "Monthly (operator)", value: "Descale per machine schedule. Replace milk supply tubing per spec. Audit syrup / pump-bottle freshness." },
        { label: "Quarterly (operator)", value: "Disassemble + sanitize milk system, descale, inspect seals, calibrate dispense volumes. NSF 4 / NSF 169 alignment." },
        { label: "Annual (operator)", value: "Water filter replacement; preventive maintenance per OEM schedule. Equipment-condition audit." },
      ],
    },
    {
      heading: "5. Service-SLA structure",
      headers: ["Tier", "Definition", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — machine down / cold-chain", "Coffee machine offline, milk dispense failure, refrigeration excursion", "≤ 4 hr", "≤ 24 hr"],
        ["Tier 2 — drink quality / single component", "Foam quality drop, bean stockout, milk stockout, sweetener stockout", "≤ 24 hr", "5 days"],
        ["Tier 3 — cosmetic / signage", "Cup stockout, signage refresh, paper-good top-off", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "6. Pricing + invoicing",
      items: [
        { check: "Pricing structure: per-employee per-month (bundled), per-pound + per-cup (à la carte), or hybrid (base fee + consumption overage). Per-employee preferred at 50+ employee offices for predictability." },
        { check: "What's included: equipment, supply (beans / pods, milk, sugar, cups, lids, stir sticks), maintenance, restock labor, route truck." },
        { check: "What's excluded: paper goods beyond cups (host-supplied typically), kitchen appliances (microwave, dishwasher — host), water plumbing install (one-time, scoped separately)." },
        { check: "Quarterly true-up — if headcount changes ± 15%, monthly fee adjusts. Annual full review at QBR." },
        { check: "Consumption-overage clause — if drink-count exceeds bundle threshold by > 20%, operator can upgrade tier or charge per-unit overage. Negotiate cap (15% premium max)." },
        { check: "Annual escalator capped at CPI or 5%, whichever lower." },
      ],
    },
    {
      heading: "7. Quarterly business review",
      items: [
        { check: "Drink-count per machine per month over the quarter." },
        { check: "Drink-mix — espresso vs. drip vs. milk-based vs. specialty." },
        { check: "Stockout incidents by SKU + machine + week." },
        { check: "Service-ticket SLA adherence by tier (%)." },
        { check: "Milk-system cleaning compliance log review." },
        { check: "Bean freshness audit — sampled bags' roast date vs. consumption date." },
        { check: "Headcount vs. bundle-tier alignment; overage status." },
        { check: "Member feedback themes + refund-reason codes." },
        { check: "Planogram refresh — SKU swap proposals for next quarter." },
        { check: "Action items, owner, due date." },
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Provider declines telemetry on coffee machine — opaque consumption data." },
        { check: "No documented milk-system cleaning cadence or compliance log." },
        { check: "SLA proposed without per-tier acknowledgment + resolution targets." },
        { check: "Water filter program absent or 'as needed'." },
        { check: "Equipment tier mismatched to peak-hour drink count." },
        { check: "Per-pound + per-cup pricing without consumption cap — variable invoicing surprises." },
        { check: "No quarterly business review — program drifts within 2 quarters." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Final provider selection benefits from a written 90-day pilot at the proposed equipment tier matched to actual office drink-mix.",
});

console.log("wrote "+"office-coffee-delivery-services");
