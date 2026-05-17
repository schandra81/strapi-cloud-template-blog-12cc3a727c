import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "case-study-micro-markets-logistics",
  assetType: "playbook",
  title: "Logistics Hub Micro-Market Playbook",
  subtitle: "Space design, planogram template, shrink management framework, SLA matrix, worker-communication kit",
  intro:
    "A micro-market replaces 4-8 vending machines with an open-shelf retail format where workers self-checkout via kiosk or app. The format unlocks 3-5x SKU breadth and 20-40% velocity uplift vs equivalent vending square footage — but introduces shrink, ADA, and PCI exposure your operator must be equipped to manage. This playbook codifies the operational framework.",
  sections: [
    {
      heading: "1. Space design — when a micro-market fits",
      paragraph:
        "Not every break room is a micro-market candidate. Three baseline thresholds must be met.",
      items: [
        { label: "Headcount per access window", value: "≥ 75 workers passing through the space per shift, or ≥ 200 per day. Below this, four vending machines outperform on velocity-per-square-foot." },
        { label: "Footprint", value: "180-400 ft² typical: 60-90 linear feet of shelving + 1-2 cold cases + 1-2 freezers + 1-2 self-checkout kiosks. Below 150 ft², a 'micro-pantry' (cooler + open snack tower) is the right format." },
        { label: "Security posture", value: "Camera coverage + badge access + worker accountability culture. Hubs with badge-controlled entry to the break room run 1-3% shrink; uncontrolled access runs 5-15%." },
      ],
    },
    {
      heading: "2. Planogram template",
      headers: ["Category", "Facings / linear ft", "Cold-case allocation", "Notes"],
      rows: [
        ["Bottled beverage", "20-25 facings + 1 cold case", "35-40% of cold space", "Water 30%, soda 25%, energy 20%, juice/tea 15%, premium 10%"],
        ["Grab-and-go meal", "0 facings (cooler only) + 1 cold case", "30-35% of cold space", "Salads, sandwiches, wraps; FDA Food Code TCS at 41°F or below"],
        ["Snacks (chips, candy, crackers)", "30-40 facings", "0% cold", "Operator manages dated rotation; FALCPA labels visible"],
        ["Healthy + protein", "15-20 facings + cooler space", "10-15% of cold space", "Protein bars, yogurt, hard-boiled eggs, jerky"],
        ["Frozen", "0 facings + 1 freezer", "100% of freezer space", "Frozen entrées, ice cream novelties; freezer at 0°F or below"],
        ["Sundry + non-food", "10-15 facings", "0% cold", "OTC pain relief, gum, mints, hand sanitizer, phone chargers"],
      ],
    },
    {
      heading: "3. Shrink management framework",
      paragraph:
        "Micro-markets run 1-5% shrink at well-managed hubs; 10-15% if controls are weak. The host and operator share responsibility.",
      items: [
        { number: 1, title: "Camera coverage", description: "≥ 2 cameras covering all shelves + kiosk station, 30-day retention minimum. Cameras owned and managed by the host (avoids operator privacy posture conflict)." },
        { number: 2, title: "Kiosk + app account binding", description: "Worker checkout requires payroll-deduct enrollment or pre-funded account tied to badge or email. Anonymous cash transactions accepted but tracked separately." },
        { number: 3, title: "Inventory audit cadence", description: "Operator audits inventory weekly at restock; monthly variance report shared with host. Variance > 3% triggers root-cause review." },
        { number: 4, title: "Shrink-share contract", description: "Above a documented shrink threshold (typically 3%), host and operator share the excess at a contracted ratio (commonly 50/50). Below threshold, operator absorbs." },
        { number: 5, title: "High-shrink SKU rotation", description: "SKUs with persistent shrink > 5% pulled from open shelf to cold case (locked door) or removed. Premium meat snacks, energy drinks, and razor blades most commonly affected." },
      ],
    },
    {
      heading: "4. ADA + accessibility",
      items: [
        { label: "Reach range — Section 308.2.1", value: "Highest operable part of kiosk + cold-case door ≤ 48 inches above finished floor; lowest ≥ 15 inches. Top shelves ≤ 48 inches for reachable SKUs (lower shelves required for short-stature + wheelchair-user access)." },
        { label: "Operating force — Section 309.4", value: "Cold-case + freezer doors ≤ 5 lbf. Kiosk touchscreen + payment reader operable with one hand without tight grasping." },
        { label: "Aisle clearance — Section 403", value: "Aisles ≥ 36 inches; passing space ≥ 60 inches at one point in each aisle." },
        { label: "Signage — Section 703", value: "Pricing characters ≥ 5/8 inch; contrast ratio ≥ 70%; tactile characters at kiosk if host elects (not strictly required for self-service retail)." },
        { label: "Kiosk software", value: "VPAT provided by kiosk vendor. Screen-reader audio output, large-character mode, high-contrast mode." },
      ],
    },
    {
      heading: "5. PCI DSS + payment posture",
      items: [
        { number: 1, title: "Kiosk PCI DSS attestation", description: "Kiosk vendor provides current PCI DSS attestation (Level 1 or 2). Card data tokenized at the reader; never stored on operator systems." },
        { number: 2, title: "Network segmentation", description: "Kiosk on dedicated VLAN; isolated from host operational and corporate networks." },
        { number: 3, title: "Payroll-deduct integration", description: "Where the host elects payroll deduction, the integration runs through the host's HRIS (Workday, UKG, ADP, Ceridian) via SFTP file or API. Operator never holds employee SSN or DOB." },
        { number: 4, title: "Refund flow", description: "Worker initiates refund via kiosk, app, or QR code. Cashless refunds processed within 24 hours; payroll-deduct refunds back out of next pay period." },
      ],
    },
    {
      heading: "6. SLA matrix",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — kiosk down / cold-chain", "Kiosk offline, cooler temperature excursion, payment failure", "30 minutes", "4 hours on-site"],
        ["Tier 2 — stockout / inventory", "Open-shelf stockout, planogram refresh request, dated-SKU pull", "24 hours", "Next restock visit"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, shelf cleaning, cabinet wipe-down", "5 days", "14 days"],
        ["Shrink-event escalation", "Suspected theft or organized shrink", "Same-day operator + host security joint review", "Camera review + planogram adjustment within 7 days"],
      ],
    },
    {
      heading: "7. Worker-communication kit",
      items: [
        { check: "Multi-language welcome signage (English + Spanish minimum; additional by hub demographic)" },
        { check: "Pictographic shelf-tag labels for low-literacy SKU recognition" },
        { check: "Refund-flow card at kiosk (QR-to-app + phone fallback)" },
        { check: "Payroll-deduct enrollment instructions (where host elects)" },
        { check: "ADA + reach-range complaint channel" },
        { check: "Shift-huddle launch deck for HR + EHS at go-live" },
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Uptime report by kiosk + cold-case + freezer" },
        { check: "Per-category velocity vs planogram-target ratio" },
        { check: "Shrink variance report + root-cause review (if > 3%)" },
        { check: "Refund volume + reason codes" },
        { check: "ADA recertification status (annual)" },
        { check: "PCI DSS attestation refresh status (annual)" },
        { check: "Worker feedback summary" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal advice. Coordinate with hub EHS, HR, IT (for PCI + HRIS), security (for camera + access control), and procurement before contracting. LetUsVending is equipped to arrange operators with documented logistics-hub micro-market capability.",
});

console.log("wrote "+"case-study-micro-markets-logistics");
