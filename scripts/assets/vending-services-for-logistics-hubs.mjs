import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-services-for-logistics-hubs",
  assetType: "playbook",
  title: "Logistics Hub Vending Playbook",
  subtitle: "Workforce mix, equipment specs, energy-drink safety overlay, micro-market vs vending decision",
  intro:
    "Logistics-hub vending is a 24/7 operation supporting a multi-shift, high-turnover workforce. This playbook codifies the workforce, equipment, safety, and format decisions an operator should be equipped to deliver — with measurable SLAs and standards references.",
  sections: [
    {
      heading: "1. Workforce mix baseline",
      items: [
        { label: "Headcount", value: "Regional fulfillment center 800-3,000; last-mile delivery station 200-600; sortation 400-1,200; cross-dock 100-400. Vending design scales with peak-shift headcount, not total." },
        { label: "Shift configuration", value: "Most hubs run 3 shifts (6 AM-2 PM, 2-10 PM, 10 PM-6 AM); some run 4 waves (10 hr shifts). Peak-shift restock window targets the 60-90 min before shift start." },
        { label: "Demographic mix", value: "BLS warehouse data: ~35% female, ~55% under 40, ~25-40% non-English-primary at major hubs. Planogram + signage must reflect this." },
        { label: "Break culture", value: "Federal FLSA does not mandate breaks. State laws (CA, NY, IL, WA, OR, CO, etc.) require 30-min meal + 10-min rest. Hub-specific HR policy supplements." },
      ],
    },
    {
      heading: "2. Equipment specifications",
      headers: ["Equipment", "Specification", "Standards reference"],
      rows: [
        ["Refrigerated machine", "ENERGY STAR-qualified, R-290 hydrocarbon refrigerant, LED interior", "ENERGY STAR Refrigerated Beverage Vending Machines V4.0; EPA SNAP for R-290"],
        ["Snack machine", "LED interior, vacuum sensors for low-stock detection, glass-front", "ADA Section 308/309/703 reach + operating force + contrast"],
        ["Coffee machine (where deployed)", "NSF/ANSI 18 food-zone certification; descaling cycle every 4-6 weeks", "FDA Food Code 4-202; NSF/ANSI 18"],
        ["Telemetry module", "Cellular LTE-M or 5G, sub-15-minute heartbeat, encrypted payload", "PCI DSS for payment-linked telemetry"],
        ["Payment reader", "EMV chip, contactless tap, mobile wallet, QR fallback", "PCI DSS Level 1 or 2 attestation"],
      ],
    },
    {
      heading: "3. Energy-drink safety overlay",
      paragraph:
        "High-caffeine SKUs (Monster, Red Bull, Bang, Celsius) are velocity drivers at logistics hubs — and a documented EHS concern. The operator must be equipped to coordinate an overlay policy with the host.",
      items: [
        { number: 1, title: "FDA + caffeine baseline", description: "FDA: 400 mg/day caffeine is the generally-safe adult ceiling for most healthy adults. A single 16 oz energy drink contains 150-300 mg." },
        { number: 2, title: "Planogram cap", description: "Limit energy-drink facings to ≤ 25% of beverage facings on overnight machines, ≤ 15% on day-shift machines. Industry-association guidance (American Beverage Association responsible-marketing principles)." },
        { number: 3, title: "Signage + worker communication", description: "Caffeine-content disclosure on machine-face signage; hub-specific 'no more than X cans per shift' guidance where EHS policy adopts one." },
        { number: 4, title: "Heat-stress overlay", description: "OSHA heat-illness prevention guidance discourages high-caffeine + low-water consumption in hot environments. In facilities running heat-illness protocols, water + electrolyte facings get planogram priority over energy drinks during the heat-season window." },
        { number: 5, title: "Adolescent worker policy", description: "Where the hub employs 16-17 year-old workers (some sortation centers, retail-fulfillment partners), the AAP recommends against energy drinks for adolescents. Coordinate with HR on age-gated access where applicable." },
      ],
    },
    {
      heading: "4. Micro-market vs vending decision",
      paragraph:
        "Two formats serve the same role; the decision is driven by headcount, footprint, security posture, and operational maturity.",
      headers: ["Factor", "Vending (4-8 machines)", "Micro-market"],
      rows: [
        ["Headcount per access window", "Any scale", "≥ 75 workers/shift, ≥ 200/day"],
        ["Footprint", "20-40 ft² per machine row", "180-400 ft² total"],
        ["Capex / install", "Operator-funded; 1-2 day install", "Operator-funded; 1-2 week install"],
        ["SKU breadth", "200-400 SKUs across 4-8 machines", "400-1,000+ SKUs"],
        ["Velocity uplift", "Baseline", "+20-40% vs equivalent vending sq ft"],
        ["Shrink exposure", "≤ 1% (mechanical lock)", "1-5% (open shelf, camera-managed)"],
        ["Best for", "Smaller break rooms, lower-trust environments, lower headcount", "Higher-headcount hubs with badge-controlled break room"],
      ],
    },
    {
      heading: "5. Planogram template — 3-shift hub",
      headers: ["Category", "Shift-1", "Shift-2", "Shift-3"],
      rows: [
        ["Water + electrolyte", "25%", "25%", "20%"],
        ["Caffeine (RTD coffee + energy)", "15%", "15%", "30%"],
        ["Snacks (chips, candy, crackers)", "20%", "25%", "20%"],
        ["Healthy + protein", "20%", "15%", "10%"],
        ["Meal replacement / grab-and-go", "15%", "15%", "15%"],
        ["Sundry (gum, OTC pain relief)", "5%", "5%", "5%"],
      ],
    },
    {
      heading: "6. EHS + safety coordination",
      items: [
        { check: "Operator route staff wear hi-vis PPE per hub EHS policy at every visit" },
        { check: "Restock windows aligned with low-activity periods (typically 1-2 hours before shift start, 30-60 min during shift change)" },
        { check: "Equipment placement preserves NFPA 101 egress (44 in corridor minimum); does not obstruct AED, eye wash, fire pull, or fire-rated assemblies" },
        { check: "Refrigerant + electrical work performed by EPA Section 608 certified technicians; logged in the host CMMS" },
        { check: "Spill response: operator handles cooler/freezer condensation cleanup; host EHS owns floor-slip prevention" },
        { check: "OSHA recordable-event reporting: operator notifies host EHS within 24 hours of any incident involving a vending machine on host premises" },
      ],
    },
    {
      heading: "7. SLA matrix",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain", "Offline > 30 min, payment down, temperature excursion", "30 minutes", "4 hours on-site"],
        ["Tier 2 — stockout / planogram", "Single-SKU stockout, planogram refresh", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
        ["Shift-change escalation", "Issue raised by HR/EHS at shift huddle", "Same-shift response", "Resolved or escalated within 4 hours"],
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Uptime + SLA breach rate by machine" },
        { check: "Per-shift velocity vs planogram-target ratio" },
        { check: "Energy-drink share of beverage velocity (overlay-policy adherence)" },
        { check: "Healthy-SKU share + velocity (wellness reporting)" },
        { check: "Refund + dispute volume" },
        { check: "Scope 2 emissions report" },
        { check: "Worker feedback summary" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal advice. Coordinate with hub EHS, HR, sustainability, and procurement before contracting. LetUsVending is equipped to arrange operators with documented logistics-hub 24/7 capability.",
});

console.log("wrote "+"vending-services-for-logistics-hubs");
