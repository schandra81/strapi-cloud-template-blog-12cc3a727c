import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-markets-in-warehouses",
  assetType: "rfp template",
  title: "Warehouse Micro-Market Framework",
  subtitle: "Industrial equipment specification, three-shift planogram, OSHA placement plan, and RFP template",
  intro:
    "Warehouse + distribution-center micro-markets serve a three-shift industrial cohort with OSHA-regulated walking-working surfaces (29 CFR 1910 Subpart D), forklift traffic management (29 CFR 1910.176), and a workforce that purchases differently across shift cohorts. This framework gives the DC operations leader + HR partner an industrial equipment spec the operator can quote, a three-shift planogram tuned to actual purchasing patterns, an OSHA-aligned placement plan, and an RFP template the procurement team can issue.",
  sections: [
    {
      heading: "1. Industrial equipment specification",
      paragraph:
        "Warehouse micro-markets differ from office micro-markets in three ways: cabinet construction must tolerate dust + humidity, payment kiosks need industrial-grade dust + temperature tolerance, and surveillance + theft-loss tooling needs to be operations-friendly.",
      items: [
        { check: "Stainless steel or powder-coat steel kiosk cabinet (not laminate or vinyl wrap — degrades in industrial environment)" },
        { check: "IP-rated payment terminal (Nayax VPOS Touch / Cantaloupe Yoke / 365 Pico — confirm environmental spec sheet supports warehouse conditions)" },
        { check: "Cellular telemetry — Wi-Fi unreliable in steel-structure DCs (confirm cellular signal strength at install with operator)" },
        { check: "Refrigerated open-coolers with sealed condensate management; LED lighting" },
        { check: "Ambient shelving — open-rack with anchoring per 29 CFR 1910.176; rounded edges to reduce forklift damage" },
        { check: "Surveillance camera (operator-supplied or integrated with DC CCTV) for theft-loss management" },
        { check: "ADA Section 308 reach-range compliance on payment kiosk; Section 305 clear floor space 30\" × 48\"" },
        { check: "Allergen labeling per FALCPA on every SKU; allergen summary signage on the kiosk" },
        { check: "GFCI on 120V circuits; dedicated 208V for refrigerated open-coolers" },
        { check: "Forklift-protection bollards or wall recess if within 10 ft of active forklift aisle" },
      ],
    },
    {
      heading: "2. Three-shift planogram",
      paragraph:
        "DC workforces typically run 3 shifts (sometimes 4 with weekend rotation). Each cohort purchases differently. Telemetry tracks per-shift velocity so the planogram refreshes quarterly.",
      headers: ["Shift", "Hours", "Top SKU categories", "Velocity weight"],
      rows: [
        ["Shift 1 (day)", "6 AM – 2 PM", "Breakfast bars, fresh fruit, yogurt, coffee, water, balanced lunch combo, electrolyte drink (hot-environment DCs)", "30-40%"],
        ["Shift 2 (swing)", "2 PM – 10 PM", "Snack + soda + energy drink + sandwich + salty snacks", "30-35%"],
        ["Shift 3 (overnight)", "10 PM – 6 AM", "Caffeinated beverages + hot drinks + comfort snacks + calorie-dense meal replacements", "20-30%"],
        ["Weekend / overtime", "Variable", "Adjusted for reduced shift density + higher per-capita velocity", "Tracked separately"],
      ],
    },
    {
      heading: "3. OSHA placement plan",
      paragraph:
        "Micro-market placement in a warehouse must meet OSHA standards for walking-working surfaces (29 CFR 1910.22), forklift traffic management (29 CFR 1910.176), emergency egress (29 CFR 1910.37), and where applicable, hazard communication (29 CFR 1910.1200). Coordinate with the DC safety officer before install.",
      items: [
        { number: 1, title: "Egress + traffic", description: "Placement must not obstruct any path of egress (29 CFR 1910.37). 36\" minimum aisle clearance maintained; placement out of forklift turning radii." },
        { number: 2, title: "Forklift traffic protection", description: "Per 29 CFR 1910.176, materials handling equipment must have safe clearance. Where micro-market is within 10 ft of an active forklift aisle, install bollards or recess into a wall." },
        { number: 3, title: "Floor + surface", description: "Floor under the market kept dry + free of slip hazard (29 CFR 1910.22); operator routes restock equipment carefully to avoid spills." },
        { number: 4, title: "Lighting", description: "Minimum illumination per OSHA Subpart F (29 CFR 1910.66) for warehouse areas — typically 10-20 foot-candles. Operator confirms at install." },
        { number: 5, title: "Ergonomics", description: "Heaviest SKUs placed at waist height (per ergonomics best practice + NIOSH lifting equation guidance). Avoid floor-level placement of bulky beverages where workers carry inventory." },
        { number: 6, title: "ADA", description: "Section 308 reach range on payment kiosk; Section 305 clear floor space; Section 309.4 operating force ≤ 5 lbf on kiosk + cooler doors." },
        { number: 7, title: "PPE coexistence", description: "If the DC also has a PPE-vending machine in the break area, coordinate placement; PPE vending requires badge integration and is typically separate from snack/beverage market." },
      ],
    },
    {
      heading: "4. RFP template — required sections",
      items: [
        { number: 1, title: "Section A — Bidder profile + DC experience", description: "Years in warehouse + DC micro-market operations, fleet count, technician geography, references with named DC operations contact." },
        { number: 2, title: "Section B — Industrial equipment spec response", description: "Per-cabinet IP rating, kiosk environmental rating, telemetry vendor + cellular signal verification protocol, surveillance integration capability." },
        { number: 3, title: "Section C — SLA + telemetry", description: "97% uptime, tier-1 < 24 hr (12 hr for cold-chain), telemetry vendor + heartbeat, refund + reorder mechanism." },
        { number: 4, title: "Section D — Three-shift planogram strategy", description: "Per-shift planogram recommendation with telemetry-driven quarterly tuning; allergen labeling; healthy-options share." },
        { number: 5, title: "Section E — OSHA + safety alignment", description: "Operator certifies OSHA-aware placement; forklift-clearance attestation; safety incident notification protocol." },
        { number: 6, title: "Section F — Commercial terms", description: "Commission rate, calculation method, payment cadence, audit right, equipment investment, refresh cycle." },
        { number: 7, title: "Section G — Implementation + training", description: "Install schedule, DC team training, telemetry activation, integration with DC CCTV + access control." },
        { number: 8, title: "Section H — Theft + shrinkage management", description: "Surveillance integration, kiosk-side fraud detection, monthly shrinkage report, response protocol." },
      ],
    },
    {
      heading: "5. SLA matrix",
      headers: ["SLA dimension", "Target", "Measurement", "Remedy"],
      rows: [
        ["Per-market uptime (kiosk + cooler)", "97% monthly", "Telemetry — minutes online / minutes in month", "SIP at < 95%; termination right at < 90% × 2 months"],
        ["Tier-1 ticket (kiosk offline, cold-chain, payment failure)", "Acknowledge < 4 hrs; resolve < 24 hrs (12 hrs cold-chain)", "Operator CRM + telemetry", "Per-ticket commission credit"],
        ["Tier-2 ticket (stockout, planogram refresh)", "Acknowledge < 24 hrs; resolve < 5 business days", "Operator CRM", "Documented at QBR"],
        ["Refund response", "Cashless < 24 hrs; cash < 7 days", "Refund log", "Refund rate > 2% triggers planogram review"],
        ["Restock cadence", "Telemetry-driven; minimum 3x weekly for high-volume DC", "Operator restock log", "Stockout rate > 3% triggers cadence review"],
        ["Cold-chain", "Continuous 35-40°F; excursion resolve < 4 hrs", "Telemetry temperature feed", "Spoiled product replaced + root-cause memo"],
        ["Theft + shrinkage", "Monthly shrinkage report < 2% of gross sales", "Operator + DC reconciliation", "Above 2% triggers surveillance + kiosk fraud review"],
      ],
    },
    {
      heading: "6. Common warehouse micro-market mistakes",
      items: [
        { label: "Office-grade equipment in industrial environment", value: "Laminate kiosks degrade within 18 months; standard payment terminals fail in dust. Specify industrial spec at RFP." },
        { label: "Single planogram across three shifts", value: "Operators routinely deploy one office-style planogram. Shift-3 (overnight) cohort needs different inventory; telemetry drives the refresh." },
        { label: "Forklift-clearance miss", value: "Markets placed in forklift turning radii get damaged routinely. Verify clearance against the DC traffic plan." },
        { label: "Wi-Fi-only telemetry", value: "Steel-structure DCs attenuate Wi-Fi. Cellular telemetry is non-negotiable; operator must verify signal at install." },
        { label: "Missing surveillance integration", value: "Shrinkage in warehouse micro-markets runs higher than office (typically 3-5% vs 1-2%). Surveillance integration + monthly reconciliation are required." },
        { label: "Cold-chain without 4-hour SLA", value: "Refrigerated open-coolers fail in industrial environments more frequently; food-safety risk shifts to the host without a 4-hour SLA." },
      ],
    },
  ],
  footer:
    "This framework is a working procurement reference. Final RFP + contract should be reviewed by DC operations leadership, HR, EHS, and procurement. OSHA placement + cold-chain SLA + telemetry + cellular signal verification are the four most-gapped areas in warehouse micro-market deployments; close all four before signing.",
});

console.log("wrote "+"micro-markets-in-warehouses");
