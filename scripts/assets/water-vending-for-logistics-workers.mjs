import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "water-vending-for-logistics-workers",
  assetType: "pack",
  title: "Logistics Hub Water + Hydration Vending Pack",
  subtitle: "OSHA heat-illness program framework, placement matrix, subsidy model, and operator selection",
  intro:
    "Worker hydration at logistics hubs is regulated under OSHA's General Duty Clause and the 2022 Heat-Illness National Emphasis Program (CPL 03-00-024). This pack consolidates the four working documents an EHS, HR, or facility services team needs to scope a hydration-forward vending program: heat-illness program framework, placement matrix, subsidy model, and operator selection.",
  sections: [
    {
      heading: "1. OSHA heat-illness program framework",
      paragraph:
        "OSHA does not yet have a final indoor heat standard (proposed rule 89 FR 70698 published August 2024). Until finalized, enforcement runs via the General Duty Clause 29 USC §654(a)(1) and the NEP. Below: what an OSHA-aligned hydration program includes.",
      items: [
        { check: "Cool, potable water available at no cost during all shifts when heat index ≥ 80°F (OSHA NEP recommendation)" },
        { check: "Water access within reasonable distance of work areas — OSHA guidance ~400 ft or one minute walk from work positions" },
        { check: "≥ 1 quart (32 oz) of water per worker per hour of moderate work; ≥ 1.5 quarts/hour for heavy work in heat" },
        { check: "Electrolyte drinks available where workers sweat extensively (heat index > 95°F or > 2 hours strenuous activity)" },
        { check: "Acclimatization plan for new + returning workers — gradually increase exposure over 7–14 days" },
        { check: "Heat-illness training documented annually; signs of heat exhaustion + heat stroke posted in break rooms" },
        { check: "Emergency response plan: cool location + cold-water immersion / cooling within 5 minutes for heat-stroke signs" },
      ],
    },
    {
      heading: "2. Hydration placement matrix",
      paragraph:
        "Hydration placement is denser than snack placement at logistics hubs. The OSHA 400-ft / one-minute access guidance drives the density.",
      headers: ["Heat exposure zone", "Hydration density", "SKU mix"],
      rows: [
        ["Indoor conditioned (< 80°F)", "1 cabinet or fountain per 200–300 FTE", "Water 60–70%; electrolyte 20%; flavored 10–20%"],
        ["Indoor variable (80–90°F)", "1 cabinet per 100–200 FTE within 400 ft of all work positions", "Water 50%; electrolyte 30%; flavored 20%"],
        ["Indoor warm (> 90°F regularly)", "1 cabinet per 50–100 FTE within 200 ft of all work positions; refilled mid-shift", "Water 50%; electrolyte 40%; sodium-replenishment snacks 10%"],
        ["Outdoor / yard (variable)", "1 cabinet per gate or break area; outdoor-rated hardened", "Water 55%; electrolyte 35%; iced tea / sport drink 10%"],
        ["Cold-storage / freezer-adjacent", "Hot beverage station + hydration cabinet", "Hot drinks 40%; water 40%; electrolyte 20%"],
      ],
    },
    {
      heading: "3. Subsidy + free-water model",
      paragraph:
        "OSHA requires free water at no cost during heat-index trigger conditions. Subsidy mechanic distinguishes 'free' (OSHA-required hydration) from 'subsidized' (everything else).",
      items: [
        { number: 1, title: "Free-water mechanic", description: "Plain bottled water (or filtered fountain) dispensed at no cost during heat-index ≥ 80°F shift days. Mechanic: badge tap auto-issues free water; daily limit per worker (e.g., 6–10 bottles/shift)." },
        { number: 2, title: "Subsidized electrolyte", description: "Electrolyte SKUs (Liquid IV, sugar-light Gatorade, Pedialyte, Nuun) subsidized at 50–100% during heat-trigger conditions; full retail otherwise. Mechanic: badge ID + heat-index trigger from facility BMS or weather service." },
        { number: 3, title: "Subsidized hydration year-round", description: "Subsidy applied to entire hydration category year-round in heat-prone facilities; mechanic stays simple — no trigger needed." },
        { number: 4, title: "Payroll-deduct fallback", description: "For workers who exceed free-water limit, residual cost via payroll deduct (bi-weekly Workday / Kronos / UKG file)." },
        { number: 5, title: "Cold-weather equivalent", description: "Cold-storage and outdoor-yard workers get equivalent hot-beverage free mechanic during heat-index ≤ 32°F equivalents (frost / freeze advisories)." },
      ],
    },
    {
      heading: "4. Equipment specification",
      items: [
        { label: "Hydration cabinet", value: "Refrigerated reach-in cabinet, 25–40°F internal; cellular telemetry sub-15-min heartbeat; cold-chain alert > 41°F for > 30 min." },
        { label: "Filtered-water station", value: "NSF/ANSI 42 + 53 + 401 filter chain; flow rate ≥ 1.5 GPM; sanitary fill nozzle (no contact surface); annual filter change documented." },
        { label: "Outdoor hardened cabinet", value: "IP44 + UL-471 rated; ambient operating 0–110°F; condenser shroud; insulated cabinet door; tamper-resistant fasteners." },
        { label: "Bulk water dispenser", value: "Filtered fountain + bottle-fill station (e.g., Elkay EZH2O class) — 1.5 GPM bottle-fill; chiller capacity 8 GPH @ 50°F." },
        { label: "Telemetry + reporting", value: "Per-shift hydration volume report; correlated with heat-index data; flagged for OSHA-aligned access compliance." },
      ],
    },
    {
      heading: "5. Operator selection — hydration program",
      headers: ["Criterion", "Weight", "Verification"],
      rows: [
        ["Refrigerated capacity + cold-chain telemetry", "20%", "Cabinet spec + telemetry datasheet"],
        ["Free-water mechanic capability", "15%", "Badge integration + auto-issue rules"],
        ["Subsidy + trigger-based mechanic", "15%", "Workday/Kronos/UKG integration + BMS or weather service trigger"],
        ["Outdoor / yard hardened cabinet", "10%", "UL-471 listing"],
        ["Filtered-water station option", "10%", "NSF certification + annual filter SOP"],
        ["Per-shift hydration reporting", "10%", "Dashboard + heat-index correlation"],
        ["OSHA NEP awareness / cooperation in audit", "10%", "Operator willingness to document for inspection"],
        ["Refund / refill SLA", "10%", "Auto-credit < 24 hr; refill on bottle-fill failure < 8 hr"],
      ],
    },
    {
      heading: "6. Indicative budget — 250-FTE warm-environment hub",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Hardware (operator-funded full-service)", "$0", "Cabinet capital recovered through revenue + service fee"],
        ["Free-water program — bottled water cost", "$18,000 – $42,000/year", "$0.40–$0.65 × 6 bottles/shift × 240 shifts × 30% participation; varies"],
        ["Filtered-water station (capital + filter)", "$2,800 – $6,500", "One-time + $400–$900/yr filter changes"],
        ["Subsidized electrolyte budget", "$8,000 – $24,000/year", "50–100% subsidy on hot-day electrolyte SKUs"],
        ["Outdoor cabinet hardening uplift", "$600 – $2,400 per outdoor cabinet", "If yard placement included"],
        ["Per-shift hydration dashboard", "$0", "Bundled in full-service"],
        ["Total hydration program (year, 250 FTE)", "$30,000 – $75,000", "Driven by free-water + subsidy"],
      ],
    },
    {
      heading: "7. Quarterly review template",
      items: [
        { check: "Hydration volume per FTE per shift (water + electrolyte) — correlate with heat-index data" },
        { check: "Free-water utilization rate (% of FTE redeeming on hot days)" },
        { check: "Subsidized-electrolyte utilization rate" },
        { check: "Cold-chain excursion log" },
        { check: "Filtered-water station filter change history + microbial test if facility policy requires" },
        { check: "Heat-illness incident log + correlation with hydration access (if any incidents)" },
        { check: "Refill / refund SLA adherence" },
        { check: "OSHA-aligned access audit — every work area within 400 ft of hydration during heat trigger" },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate hydration-forward vending at logistics hubs through operators that can attest in writing to free-water mechanics, trigger-based subsidy, outdoor-rated cabinets, filtered-water stations (NSF/ANSI 42/53/401), and per-shift hydration reporting aligned to OSHA NEP CPL 03-00-024 expectations. Capability documentation provided on request during scoping; we do not claim engagements at any specific named site that operates a heat-illness program.",
    },
  ],
  footer:
    "Working reference for EHS, HR, and facility services. Final program design should be reviewed against the facility's documented heat-illness prevention plan and OSHA NEP-CPL 03-00-024 expectations; consult counsel for federal contract sites (Davis-Bacon, SCA) where additional clauses apply.",
});

console.log("wrote "+"water-vending-for-logistics-workers");
