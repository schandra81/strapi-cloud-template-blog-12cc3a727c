import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "breakroom-coffee-and-snack-bundles",
  assetType: "playbook",
  title: "Breakroom Coffee + Snack Bundle Playbook",
  subtitle: "Tier design, operator selection, and per-employee economics",
  intro:
    "Bundling coffee, snacks, and cold beverages into a single managed program lets a 50-300 employee office hit volume thresholds individual programs miss, simplifies AP, and gives a single operator accountability across the breakroom. This playbook codifies bundle tier design, operator-selection criteria, and per-employee economics — so the bundle's headline price reflects what the program actually delivers. It maps to standard NAMA service KPIs, FALCPA allergen labeling, ADA Section 309.4, and PCI DSS v4.0 on the cashless rails.",
  sections: [
    {
      heading: "1. Bundle tier design",
      paragraph:
        "Three bundle tiers cover most 50-300 employee offices. Tier is set by what's actually consumed, not what's available. Right-sizing matters more than feature count.",
      headers: ["Tier", "Coffee", "Snacks", "Cold beverage", "Typical per-employee monthly cost"],
      rows: [
        ["Essentials", "Pod machine (Keurig K-3500 or comparable) + 8-12 pod varieties", "Pantry shelf: 6-10 snack SKUs, restocked weekly", "Bottled water + soda + iced tea machine OR small cooler", "12 – 22 USD"],
        ["Standard", "Bean-to-cup (semi-commercial; Franke A300 / Jura X-line)", "Pantry: 15-25 SKUs incl. fresh fruit + healthy share", "Refrigerated grab-and-go case + bottled beverages", "22 – 38 USD"],
        ["Premium", "Bean-to-cup (commercial; Franke A600+ / WMF 1500) + alt-milk + flavored syrup options", "Pantry: 30-50 SKUs incl. fresh + breakfast", "Micro-market kiosk + cooler bank + healthy-share share", "35 – 65 USD"],
      ],
    },
    {
      heading: "2. Operator selection — bundle-specific criteria",
      items: [
        { number: 1, title: "Single-route capability", description: "Operator can serve coffee + snack + cold-beverage from one route, one invoice, one SLA. Avoids the three-vendor coordination problem at 50-300 employee sites." },
        { number: 2, title: "Equipment portfolio across all 3 categories", description: "Operator stocks (not orders on demand) machines across the bundle. Verify with named OEM partnerships." },
        { number: 3, title: "Telemetry on coffee + cold-beverage", description: "Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable. Sub-15-minute heartbeat; per-SKU velocity; temperature for refrigerated." },
        { number: 4, title: "Pantry / shelf-stable restock workflow", description: "Operator handles pantry shelf alongside vending route; product receipt + put-away documented; pantry shrink tracked." },
        { number: 5, title: "Fresh / grab-and-go cold chain", description: "Refrigerated case temperature logged 35-40°F; route-truck refrigeration; shelf-life compliance documented." },
        { number: 6, title: "Cashless capability", description: "PCI DSS v4.0 AOC current; EMV + contactless + mobile wallet supported on the cold-beverage and micro-market kiosk components." },
      ],
    },
    {
      heading: "3. Per-employee economics — what to verify",
      items: [
        { check: "Bundle priced by tier + per-employee + per-month, not per-machine. Aligns operator forecast to actual workforce." },
        { check: "What's included: equipment, supply (coffee, milk, sugar, cups, lids, stir sticks, snacks at the agreed tier, cold beverages at the agreed catalog), maintenance, restock labor, route truck." },
        { check: "What's excluded: paper goods beyond cups (napkins, plates, utensils typically host-provided), water filtration ongoing replacement (sometimes bundled, sometimes pass-through), kitchen appliances (microwaves, dishwashers — host)." },
        { check: "Quarterly true-up — if headcount changes ± 15%, monthly fee adjusts. Annual full review." },
        { check: "Consumption-overage clause — if drink-count or snack-velocity exceeds bundle threshold by > 20%, operator can either upgrade tier or charge a per-unit overage. Negotiate cap (e.g., 15% premium maximum)." },
        { check: "Annual escalator capped at CPI or 5%, whichever lower." },
      ],
    },
    {
      heading: "4. Healthy-share + dietary requirements",
      items: [
        { check: "Healthy-share floor — at minimum 30% of snack + cold-beverage SKUs meet NANA thresholds (≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from fat); at wellness-focused offices 50%+." },
        { check: "Allergen labeling per FALCPA on every SKU; allergen summary signage in breakroom." },
        { check: "Plant-based / alt-milk on coffee at Standard tier and above; allergen flags visible." },
        { check: "Dietary-preference SKUs (vegetarian, vegan, halal, kosher, gluten-free) included at Standard tier and above." },
        { check: "Sugar-free / low-sugar SKUs at every tier." },
      ],
    },
    {
      heading: "5. Service SLA",
      headers: ["Tier", "Definition", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain", "Coffee machine down, refrigeration excursion, micro-market kiosk down", "≤ 4 hr", "≤ 24 hr"],
        ["Tier 2 — single-SKU stockout / planogram", "Pantry SKU stockout, snack restock request", "≤ 24 hr", "5 days"],
        ["Tier 3 — cosmetic / signage", "Signage replacement, breakroom signage refresh", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "6. Member experience",
      items: [
        { check: "Single point of contact (operator account manager) for all breakroom service requests." },
        { check: "Refund / feedback channel — operator app, SMS, on-machine touchpad; member-initiated refund auto-credited within 24 hours for cashless." },
        { check: "Breakroom signage clean + branded; planogram labels current; allergen labels visible at counter and on coffee machine." },
        { check: "Pantry shelf — front-faced, labeled, FIFO-rotated by operator field rep." },
        { check: "Visitor / contractor option — cashless rails on cold-beverage + micro-market kiosk so non-employee visitors can purchase outside the host-subsidy program." },
      ],
    },
    {
      heading: "7. Quarterly business review template",
      items: [
        { check: "Drink-count per coffee machine per month over the quarter." },
        { check: "Snack pantry consumption per SKU; top-decile and bottom-decile flagged." },
        { check: "Cold-beverage / micro-market velocity per SKU per machine." },
        { check: "Stockout count by component (coffee, pantry, cold)." },
        { check: "Service-ticket SLA adherence by tier (%)." },
        { check: "Headcount vs. bundle-tier alignment; overage status." },
        { check: "Healthy-share consumption (% of transactions on healthy-flagged SKUs)." },
        { check: "Member feedback themes + refund-reason codes." },
        { check: "Planogram refresh proposal for next quarter." },
        { check: "Action items, owner, due date." },
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Bundle priced per-machine, not per-employee — operator's incentive misaligned with workforce size." },
        { check: "Operator declines telemetry on coffee or cold-beverage components." },
        { check: "No headcount-driven true-up — host overpays during hybrid-occupancy drops." },
        { check: "Overage clause uncapped — single high-velocity month triggers tier upgrade." },
        { check: "No quarterly business review — program drifts within 2 quarters." },
        { check: "Single-vendor 'bundle' that subcontracts cold-beverage to a sub-operator without SLA flowdown." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Final contract terms should be reviewed by your counsel. Bundle tier and per-employee economics benefit from a written 90-day pilot before full-term commitment.",
});

console.log("wrote "+"breakroom-coffee-and-snack-bundles");
