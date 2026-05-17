import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "case-study-logistics-hub-vending",
  assetType: "playbook",
  title: "Logistics Hub Vending Refresh Playbook",
  subtitle: "RFP framework, planogram template, SLA matrix, ESG checklist, worker-communication kit",
  intro:
    "Logistics hubs run 24/7 with multi-shift workforces measured in hundreds to thousands per building. A vending refresh is not a snack-merchandising swap — it's an operational change that touches EHS, HR retention, and ESG reporting. This playbook codifies the refresh framework an operator should be equipped to deliver, with measurable SLAs and standards references.",
  sections: [
    {
      heading: "1. Workforce baseline framework",
      paragraph:
        "A logistics hub's vending design is driven by workforce composition, shift configuration, and break-policy structure.",
      items: [
        { label: "Headcount + shift mix", value: "Typical regional fulfillment center: 800-3,000 workers across 3-4 shifts. Last-mile delivery station: 200-600 across 4 waves. Sortation: 400-1,200 across 3 shifts." },
        { label: "Break policy", value: "Federal FLSA does not mandate breaks; state laws (CA, NY, IL, WA, OR, CO among others) require 30-min meal break for shifts ≥ 5 hours + 10-min rest for every 4 hours. OSHA recommends but does not mandate." },
        { label: "Demographic mix", value: "BLS warehouse workforce data: ~35% female, ~55% under age 40, language diversity ~25-40% non-English-primary at major hubs. Planogram + signage must reflect this." },
        { label: "Turnover baseline", value: "BLS JOLTS warehouse separation rate ~50-65% annual; high-turnover hubs run 100%+. Vending experience contributes to break-room satisfaction, a top-5 retention factor in Gallup Q12 data." },
      ],
    },
    {
      heading: "2. RFP framework",
      paragraph:
        "Operator selection must compare on six capability areas, weighted by your hub's specific operational pressure.",
      items: [
        { number: 1, title: "24/7 SLA capability", description: "Sub-4-hour on-site for Tier 1; sub-24-hour for Tier 2. Operator attests in writing to current sub-4-hour fleet capability in your metro." },
        { number: 2, title: "Telemetry + transparency", description: "Cellular sub-15-minute heartbeat; property-dashboard access for EHS + HR; per-shift velocity reporting." },
        { number: 3, title: "Planogram flexibility", description: "Operator supports planogram refresh at 4-week cadence or faster; supports per-shift planogram variation across multiple machines." },
        { number: 4, title: "ESG + energy compliance", description: "ENERGY STAR equipment, R-290 refrigerant, scope 2 reporting capability for the host's CDP / GRI / SASB disclosure." },
        { number: 5, title: "Workforce language + literacy", description: "Multi-language signage capability (English + Spanish minimum; additional languages by hub demographic); pictographic SKU labels for low-literacy workers." },
        { number: 6, title: "EHS + safety coordination", description: "Operator routes coordinate with hub EHS for hi-vis PPE on the floor; restock windows aligned with low-activity periods." },
      ],
    },
    {
      heading: "3. Planogram template — 3-shift hub",
      headers: ["Category", "Shift-1 weight", "Shift-2 weight", "Shift-3 weight"],
      rows: [
        ["Bottled water + electrolyte", "25%", "25%", "20%"],
        ["Caffeine (coffee RTD + energy)", "15%", "15%", "30%"],
        ["Snacks (chips, candy, crackers)", "20%", "25%", "20%"],
        ["Healthy + protein", "20%", "15%", "10%"],
        ["Meal replacement / grab-and-go", "15%", "15%", "15%"],
        ["Sundry (gum, OTC pain relief)", "5%", "5%", "5%"],
      ],
    },
    {
      heading: "4. SLA matrix",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical", "Machine offline, payment down, cold-chain excursion", "30 minutes", "4 hours on-site"],
        ["Tier 2 — stockout / planogram", "Single-SKU stockout, planogram refresh request", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage replacement, cabinet cleaning", "5 days", "14 days"],
        ["Shift-change escalation", "EHS or HR escalates during shift handoff", "Same-shift response", "Issue resolved or escalated within 4 hours"],
      ],
    },
    {
      heading: "5. ESG + reporting checklist",
      items: [
        { check: "ENERGY STAR-certified refrigerated equipment (≥ 95% of fleet at the hub)" },
        { check: "R-290 hydrocarbon refrigerant attestation (GWP 3 vs R-404A's 3,922)" },
        { check: "LED interior + exterior lighting attestation" },
        { check: "Sleep-mode programming during low-activity windows (typically 2-5 AM gate)" },
        { check: "Scope 2 reporting: kWh per machine × emission factor, reported quarterly" },
        { check: "FALCPA + FASTER Act allergen labels on all SKUs" },
        { check: "Operator route emissions reporting (where the host's CDP / GRI scope includes vendor scope 3)" },
        { check: "Equipment end-of-life recycling attestation (refrigerant reclaim, scrap metal, e-waste)" },
      ],
    },
    {
      heading: "6. Worker-communication kit",
      items: [
        { number: 1, title: "Multi-language signage", description: "English + Spanish at minimum; additional languages set by hub demographic data. Pictographic SKU labels for low-literacy support. ADA Section 703 contrast + character height." },
        { number: 2, title: "Break-room display", description: "Static or digital board showing machine locations, refund flow, and current LTO. Updated at planogram refresh." },
        { number: 3, title: "App + SMS refund flow", description: "Refund accessible via QR code on the machine — guest scans, enters transaction ID, refund credited within 24 hours for cashless." },
        { number: 4, title: "Town-hall briefing template", description: "Slide deck for HR + EHS to brief workers at shift huddles when a refresh launches or a new SKU rotation goes live." },
        { number: 5, title: "Feedback channel", description: "QR-code-to-feedback form on each machine; operator + host review monthly." },
      ],
    },
    {
      heading: "7. Quarterly business review",
      items: [
        { check: "Uptime report by machine, by shift" },
        { check: "Per-shift velocity vs planogram-target ratio" },
        { check: "Tier 1 SLA breach rate (target zero)" },
        { check: "Refund volume + reason codes" },
        { check: "Scope 2 kWh + emissions report" },
        { check: "Worker feedback summary (operator + host)" },
        { check: "Planogram refresh + LTO proposal for next quarter" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal advice. Coordinate with your hub EHS, HR, sustainability, and procurement teams before contracting. LetUsVending is equipped to arrange operators with documented logistics-hub 24/7 capability.",
});

console.log("wrote "+"case-study-logistics-hub-vending");
