import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "automated-retail-hospital-gift-shops",
  assetType: "pack",
  title: "Hospital Gift Shop Automated Retail Pack",
  subtitle: "Deployment model menu, planogram framework, commission allocation, SLA spec",
  intro:
    "Hospital gift shops increasingly add automated retail to extend hours, free volunteer hours for high-touch interactions, and capture late-night and shift-change demand. This pack covers the four deployment models, planogram framework, commission allocation between gift shop and hospital, and the SLA that makes 24/7 work.",
  sections: [
    {
      heading: "1. Four deployment models",
      paragraph:
        "Hospital gift shops choose among four deployment models depending on volunteer staffing, capital budget, hours-of-operation goal, and which charitable foundation receives the proceeds.",
      headers: ["Model", "Equipment", "Hours coverage", "Capex / opex"],
      rows: [
        ["A. After-hours kiosk", "Single combo unit at gift shop entrance", "After-hours only (8PM-7AM)", "$8K-$15K capex or operator-owned"],
        ["B. Hybrid 24/7", "Gift shop staffed daytime; smart cooler + ambient unit run 24/7", "24/7", "$15K-$35K capex"],
        ["C. Full automated micro-market", "Cantaloupe Go, AWM Smart Shelf, 365 PicoMarket, Avanti Markets", "24/7 (replaces staffed retail)", "$25K-$75K capex"],
        ["D. Satellite kiosks (ED, lobbies, units)", "1-4 satellite cabinets in addition to main gift shop", "24/7 satellite + staffed main", "$5K-$15K per satellite"],
      ],
    },
    {
      heading: "2. Site selection within the hospital",
      paragraph:
        "Gift shop satellite placements have to clear infection control, fire egress, and revenue / dwell-time fit. Each unit needs a written facility-side review.",
      items: [
        { label: "Main lobby (visitor entry)", value: "High dwell time, high visitor traffic, day + evening visiting hours. Ideal for satellite gift kiosk." },
        { label: "ED waiting area", value: "Captive audience, but Joint Commission EOC.02.06.05 expects clear egress + infection-control compliant placement. Avoid blocking sight lines." },
        { label: "Surgery / OR family waiting", value: "Long dwell time (2-6 hours per procedure). Excellent fit for hybrid model with comfort SKUs." },
        { label: "Patient unit family rooms", value: "Quieter traffic; check with infection prevention before placing units near patient rooms (HFM-Healthcare Facility Mgmt 2022 study on noise + isolation zones)." },
        { label: "Cafeteria adjacencies", value: "May overlap with food service; coordinate with F&B contract holder (Aramark, Sodexo, Compass / Morrison Healthcare, Crothall Healthcare)." },
        { label: "Staff-only corridors", value: "Staff-targeted assortment differs; consider a separate badge-restricted unit." },
      ],
    },
    {
      heading: "3. Planogram framework — gift-shop SKU mix",
      paragraph:
        "Gift shop automated retail differs from break-room vending: higher AUR, broader category mix, and seasonal / holiday rotations.",
      headers: ["Category", "Typical share of facings", "Example SKUs"],
      rows: [
        ["Get-well / new-baby cards + gifts", "15-25%", "Hallmark, Papyrus, locally-curated cards"],
        ["Flowers / stems (where cold-chain available)", "5-10%", "Pre-wrapped bouquets, plants"],
        ["Comfort items", "15-20%", "Plush, blankets, slippers, lip balm"],
        ["Snacks + beverages", "20-30%", "Family-friendly snack mix, healthy beverage tier"],
        ["Personal care + travel size", "10-15%", "Toothbrush, deodorant, dry shampoo, phone charger"],
        ["Books / magazines / puzzles", "5-10%", "Mass paperback, crosswords, kids activity"],
        ["Hospital / unit-specific", "5-10%", "Branded mugs, pediatric unit plush, NICU keepsakes"],
      ],
    },
    {
      heading: "4. Commission allocation — gift shop vs. hospital vs. operator",
      paragraph:
        "Gift shop revenue typically funds the hospital's auxiliary / volunteer foundation. Automated retail revenue allocation needs explicit definition.",
      headers: ["Stakeholder", "Typical share", "Use of funds"],
      rows: [
        ["Operator (after wholesale + service)", "65-75% of gross", "Operator margin"],
        ["Hospital auxiliary / volunteer foundation", "15-25% of gross", "Foundation programs"],
        ["Hospital facilities (electricity + space)", "5-10% (often netted as facility credit)", "Facility opex"],
        ["Cashless interchange (pass-through)", "2-4% of gross", "Card networks"],
      ],
    },
    {
      heading: "5. Hours-of-operation framework",
      paragraph:
        "Most hospital gift shops are staffed 8-12 hours per day with volunteers. Automated retail extends coverage to 24/7 — but only if SLA and stocking match.",
      items: [
        { label: "After-hours mode (8PM-7AM)", value: "Telemetry-driven restock; minimum stock day-1 covers expected 12-hour after-hours window." },
        { label: "Visitor-hours peak (10AM-8PM)", value: "Pairs with staffed shop; satellite covers overflow + corridor / lobby placements." },
        { label: "Shift-change windows", value: "6-7AM and 6-7PM peaks for staff purchases. Planogram should rotate to comfort + meal-replacement options during these windows." },
        { label: "Major events / visiting hour spikes", value: "Pediatric units, ICU step-down — coordinate with hospital event calendar (cancer walks, foundation galas)." },
      ],
    },
    {
      heading: "6. SLA spec — gift shop adjacency",
      paragraph:
        "Gift shop automated retail SLA mirrors the staffed shop's service expectations — speed of restock, refund handling, equipment uptime.",
      items: [
        { number: 1, title: "Tier 1 — payment outage / refrigeration failure / offline machine", description: "≤ 4 hour acknowledgement, ≤ 24 hour resolution. Telemetry alert triggers operator dispatch." },
        { number: 2, title: "Tier 2 — single-SKU stockout / planogram refresh", description: "24-48 hour acknowledgement, next service visit resolution (≤ 5 days)." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "5-day acknowledgement, 14-day resolution." },
        { number: 4, title: "Refund SLA", description: "Cashless refunds auto-credit ≤ 48 hours. Cash refunds via gift shop volunteer or app-based refund flow." },
      ],
    },
    {
      heading: "7. Infection control + cleanability",
      paragraph:
        "Hospital placements pass through infection prevention review. Equipment surfaces must withstand approved disinfectant exposure without damage.",
      items: [
        { check: "Cabinet exterior compatible with quaternary ammonium (e.g., Cavicide), bleach 1:10, and hydrogen peroxide wipes per CDC EPA List N (effective 2024)." },
        { check: "Card reader + touchscreen disinfection: silicone keyboard cover or oleophobic / antimicrobial glass per manufacturer spec." },
        { check: "Floor cleanability: cabinet base ≥ 4 inches off the floor or fully sealed to allow mopping per AIA / FGI Guidelines for Design of Hospitals (2022)." },
        { check: "Daily wipe-down by gift shop volunteer (touchpoints) + weekly EVS deep clean per hospital cleaning matrix." },
        { check: "Joint Commission EOC documentation: maintain cleaning log signed off by EVS or volunteer." },
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["Foundation board approval", "30-60 days", "Auxiliary board"],
        ["Operator selection + contract", "30-45 days", "Materials management"],
        ["Site review (IP, fire, ADA)", "30-45 days", "Facilities + IP"],
        ["Equipment install + commissioning", "5-10 days", "Operator + facilities"],
        ["Volunteer training", "1-2 weeks", "Volunteer services"],
        ["Soft launch + planogram tune", "30 days", "Operator + auxiliary"],
        ["First commission cycle to foundation", "Day 30-45 post-launch", "Foundation finance"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver hospital gift shop automated retail programs aligned with auxiliary / foundation requirements.",
});

console.log("wrote "+"automated-retail-hospital-gift-shops");
