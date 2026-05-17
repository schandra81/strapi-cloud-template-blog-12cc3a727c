import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-breakroom-solutions",
  assetType: "playbook",
  title: "Manufacturing Breakroom Vending Solution Playbook",
  subtitle: "Equipment ensemble, site survey, layout, and operational support structure",
  intro:
    "This playbook codifies the breakroom vending design decisions that keep a manufacturing plant of 200-1,500 hourly workers fed across three shifts at 98%+ uptime. Each section is operator-attestable and maps to a measurable SLA or specification.",
  sections: [
    {
      heading: "1. Pre-install site survey",
      paragraph:
        "Run the site survey 30-45 days before equipment delivery. Survey output drives the equipment ensemble, electrical scope, and the planogram baseline.",
      items: [
        { label: "Headcount + shift map", value: "Hourly headcount per shift, break/lunch windows, peak transition timing. Manufacturing plants typically run 3 shifts (6-2, 2-10, 10-6) with 200-600 workers per shift." },
        { label: "Floor space + clearance", value: "Minimum 36 in. service clearance per ANSI/NAMA 2-2011 §4. Verify 6 ft x 8 ft slab footprint per cluster, level within 1/4 in., 30 in. x 48 in. ADA-compliant approach per 2010 ADA Standards §305." },
        { label: "Electrical scope", value: "Dedicated 20A 120V circuit per refrigerated unit (NEC 210.23). GFCI within 6 ft of any sink per NEC 210.8(B). Snack units share circuits within 1.8 A nameplate load." },
        { label: "Network + telemetry", value: "Cellular-modem-enabled telemetry (Cantaloupe, Nayax, 365 Retail Markets, or Crane Streamware) with sub-15-min heartbeat. No host LAN dependency." },
        { label: "Water + drain", value: "Cold-water tap with backflow preventer (ASSE 1022) for coffee/water lines. Floor drain or condensate pump for refrigerated equipment." },
      ],
    },
    {
      heading: "2. Equipment ensemble by plant size",
      headers: ["Plant headcount", "Snack units", "Cold beverage", "Food / fresh", "Coffee / micro-market"],
      rows: [
        ["200-400 workers (1-2 shifts)", "1-2 (Crane 187 / AMS 39)", "1-2 (Royal 660)", "1 Crane Merchant Media food", "Coffee tower or 1 micro-market cooler"],
        ["400-800 workers (2-3 shifts)", "2-3", "2 (Royal + Vendo)", "1-2 food + 1 frozen", "Micro-market with 2 coolers + 1 freezer + bean-to-cup"],
        ["800-1,500 workers (3 shifts)", "3-5 distributed", "3-4 distributed", "2-3 food + 2 frozen", "Two micro-markets or 1 market + satellite vending"],
        ["1,500+ workers", "Cluster per breakroom (5-8 plant-wide)", "Cluster per breakroom", "Market in main + satellites", "Multi-zone market network with kiosks"],
      ],
    },
    {
      heading: "3. Breakroom layout — six placement zones",
      items: [
        { number: 1, title: "Primary breakroom cluster", description: "Snack + cold beverage + food in one bank; coffee tower or micro-market at end. Sized for 60-70% of headcount visiting during peak 30-min window." },
        { number: 2, title: "Floor-side satellite", description: "1-2 machines (snack + beverage) within 200 ft of every work station so workers don't lose break time walking. OSHA 1910.141 sets sanitation distance for food consumption areas." },
        { number: 3, title: "Shift-3 / overnight bank", description: "Higher caffeine + hot-snack mix; locked access via shift badge if main cafeteria closes." },
        { number: 4, title: "Loading dock / drivers' lounge", description: "1 snack + 1 beverage + small coffee unit, 24/7 access for inbound drivers." },
        { number: 5, title: "Office annex", description: "Higher-end planogram (premium snacks, RTD coffee, kombucha) for admin/engineering staff." },
        { number: 6, title: "Wellness option", description: "Optional fresh-food cooler or NAMA FitPick-aligned mini-market within 50 ft of the primary cluster." },
      ],
    },
    {
      heading: "4. Operational support structure",
      paragraph:
        "Operators capable of multi-shift manufacturing service typically commit to the following in writing. Verify each in the contract.",
      items: [
        { label: "Restock cadence", value: "2-4 visits/week depending on plant size, with pre-shift-1 restock window 5-6 AM. Per-machine velocity drives schedule, not fixed days." },
        { label: "Service SLA — Tier 1", value: "Machine offline, cold-chain excursion, or payment failure — <24 hr acknowledgement, <24 hr resolution." },
        { label: "Service SLA — Tier 2", value: "Single-SKU stockout, planogram refresh — 24-48 hr ack, 5-7 day resolution." },
        { label: "Service SLA — Tier 3", value: "Cosmetic / signage / cabinet cleaning — 5 day ack, 14 day resolution." },
        { label: "Refund flow", value: "App, SMS-to-refund, or on-machine touchpad; auto-credit within 24 hr for cashless. Quarterly refund report to facility." },
      ],
    },
    {
      heading: "5. Wellness + labeling overlay",
      paragraph:
        "Manufacturing plants increasingly align breakroom vending to wellness program incentives. FDA 21 CFR §101.8 already mandates calorie labeling on glass-front machines; NAMA FitPick provides an optional better-for-you mark.",
      items: [
        { check: "Calorie disclosure visible on machine face for every front-of-pack SKU (FDA 21 CFR §101.8, effective 2018)." },
        { check: "Allergen statement per FALCPA visible at the planogram or via app/QR." },
        { check: "30-40% better-for-you SKUs (NAMA FitPick / FitPick Select criteria) where wellness program participation is incentivized." },
        { check: "Hydration emphasis — water, electrolyte, and unsweetened beverage SKUs ≥ 30% of beverage facings (per ACOEM guidance for industrial workforce)." },
      ],
    },
    {
      heading: "6. Telemetry + KPI dashboard",
      headers: ["Metric", "Target", "Reporting cadence"],
      rows: [
        ["Uptime per machine", "≥ 98%", "Monthly per-machine report"],
        ["Stockout SKU-hours", "≤ 2% of weekly facing-hours", "Weekly with per-SKU detail"],
        ["Average resolution time (Tier 1)", "< 24 hr", "Monthly"],
        ["Refund rate", "< 2% of transactions", "Quarterly with reason codes"],
        ["Per-shift velocity ratio", "Within 10% of headcount-weighted forecast", "Quarterly business review"],
      ],
    },
    {
      heading: "7. Quarterly business review checklist",
      items: [
        { check: "Per-machine uptime + service SLA adherence" },
        { check: "Per-shift velocity report (shift-1 vs shift-2 vs shift-3)" },
        { check: "Top-20 and bottom-20 SKUs with planogram action items" },
        { check: "Refund volume + reason codes" },
        { check: "Wellness mix (FitPick %, calorie labeling audit, hydration share)" },
        { check: "Equipment health + scheduled preventive maintenance plan" },
        { check: "Roadmap items: micro-market expansion, satellite placements, shift-3 surge coverage" },
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, contract terms, and ongoing KPI review against the SLAs in this playbook.",
});

console.log("wrote "+"vending-machine-breakroom-solutions");
