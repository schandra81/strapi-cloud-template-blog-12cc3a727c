import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "beverage-vending-machines-in-apartments",
  assetType: "pack",
  title: "Apartment Beverage Cabinet Design Template",
  subtitle: "Cabinet selection, planogram per zone, operator RFP scorecard",
  intro:
    "Apartment beverage placements need cabinet selection that matches zone temperature, foot-traffic, and SKU breadth — not a default 'glass-front-cooler' answer. This template walks the format decision, per-zone planogram, and operator scorecard.",
  sections: [
    {
      heading: "1. Cabinet selection framework",
      headers: ["Cabinet type", "SKU capacity", "Best zone", "ENERGY STAR notes"],
      rows: [
        ["Glass-front bottle cooler (Royal Vendors RVCC, Dixie-Narco BevMax)", "30-45 SKUs, 240-500 bottles", "Lobby, fitness, lounge", "ENERGY STAR V3.0 certified models available"],
        ["Stack cooler (USI 3014A, AMS Visi-Vendor)", "8-12 SKUs, 200-400 cans", "High-volume corridor, garage", "ENERGY STAR V3.0 available; legacy models 30% more kWh"],
        ["Open-shelf reach-in cooler (True / TRUE T-Series)", "60-120 SKUs", "Micro-market, premium lounge", "ENERGY STAR V4.1 commercial refrigerator"],
        ["Smart cooler RFID (Nayax Onyx + cabinet)", "20-40 SKUs", "Lifestyle / luxury lounge", "Cabinet-dependent; choose ES-cert host cabinet"],
        ["AI vision cooler (AWM Smart Shelf)", "40-80 SKUs", "Luxury lobby, co-work", "Cabinet-dependent"],
        ["Outdoor hardened (Vendo Outdoor, Royal Outdoor)", "20-30 SKUs", "Pool deck, patio", "NEMA 3R / IP54; ENERGY STAR limited"],
      ],
    },
    {
      heading: "2. Planogram per zone",
      paragraph:
        "Per-zone SKU mix should reflect time-of-day pattern and resident behavior, not a single default planogram.",
      items: [
        { label: "Lobby / mail-package", value: "Bottled water (multiple sizes), still + sparkling, premium soda, kombucha, cold brew, iced tea, kids juice pouch. ~35-40 SKUs." },
        { label: "Fitness center", value: "Sports drinks (Gatorade, BodyArmor), electrolyte (LMNT, Liquid IV), water, protein shakes (Premier, OWYN), coconut water, low-cal energy. ~20-25 SKUs." },
        { label: "Pool deck", value: "Bottled water + sports drink + kid juice + canned wine seltzer (where age-gated). Compact 15-20 SKU outdoor cabinet." },
        { label: "Resident lounge / co-work", value: "Premium coffee RTD (La Colombe, Stumptown), cold brew, sparkling water, kombucha, kids juice. ~25-30 SKUs." },
        { label: "Dog wash / pet area", value: "Out of scope for beverage; place compact pet-treat / waste-bag machine instead." },
        { label: "Bike room / parking", value: "Cold water + sports drink + canned-coffee compact stack cooler." },
      ],
    },
    {
      heading: "3. SKU framework — pricing tiers",
      headers: ["Tier", "Price point", "Examples"],
      rows: [
        ["Value", "$1.50-$2.25", "Bottled water 16oz, generic sports drink, store-brand juice"],
        ["Mid", "$2.50-$3.50", "Gatorade, Coca-Cola, Pepsi, name-brand iced tea, Vitamin Water"],
        ["Premium", "$3.75-$5.50", "BodyArmor, Liquid Death, Spindrift, Olipop, La Colombe RTD, kombucha"],
        ["Specialty", "$5.75-$8.00", "Cold brew premium, Athletic Brewing NA beer, canned wine, kombucha premium"],
      ],
    },
    {
      heading: "4. Member-app pricing tier",
      paragraph:
        "Residents using the building member-app see preferred pricing; visitors / guests see standard pricing. Standard on Nayax Onyx, Cantaloupe Engage, 365 Retail Markets.",
      items: [
        { label: "Member tier", value: "Base × 0.85-0.95 (10-15% resident discount funded by operator margin); cashless via member-app SDK or RFID badge." },
        { label: "Guest tier", value: "Base × 1.0; cashless or cash via standard payment terminal." },
        { label: "Subsidized (host-paid)", value: "Optional — owner credits per-month stipend per resident; residents see further-reduced or $0 price." },
        { label: "Authentication", value: "Member-app credential, building-app SDK token, or RFID resident badge integrated with PMS (RealPage, Yardi, Entrata)." },
      ],
    },
    {
      heading: "5. Operator RFP scorecard",
      headers: ["Criterion", "Weight", "Max score"],
      rows: [
        ["Multifamily references — comparable tier", "1.5x", "4.5"],
        ["ENERGY STAR-certified cabinet inventory", "1.5x", "4.5"],
        ["Low-GWP refrigerant (R-290 / R-600a)", "1.0x", "3"],
        ["Telemetry + monthly scorecard", "1.5x", "4.5"],
        ["Healthy-vending SKU share + allergen labeling", "1.0x", "3"],
        ["Closed-loop member-app SDK integration", "1.0x", "3"],
        ["Four-tier service SLA + credits", "1.5x", "4.5"],
        ["Insurance + ADA attestation", "1.0x", "3"],
      ],
    },
    {
      heading: "6. Service + restock framework",
      items: [
        { label: "Restock cadence", value: "Lobby + lounge — weekly; fitness + pool seasonal — 2x weekly Q2-Q3; corridor + bike — bi-weekly." },
        { label: "Telemetry SLA", value: "Sub-15-minute heartbeat, alerts on offline + temperature excursion + payment failure." },
        { label: "Cold-chain SLA", value: "Beverage cabinets internal temp 35-40°F; excursion > 30 min triggers 4-hour response." },
        { label: "Refund SLA", value: "Cashless 24-hour auto-refund via member-app or QR; cash within 7 days on next restock." },
        { label: "Planogram refresh", value: "Quarterly review — telemetry velocity report drives 15-25% SKU rotation per quarter." },
      ],
    },
    {
      heading: "7. Capex + commission expectations",
      headers: ["Monthly gross / cabinet", "Commission tier", "Notes"],
      rows: [
        ["< $300", "0-2%", "Placement-fee model; not viable for premium cabinet capex"],
        ["$300-$700", "3-6%", "Standard glass-front cabinet, weekly restock"],
        ["$700-$1,500", "6-12%", "Mid-tier; eligible for member-app integration"],
        ["$1,500-$3,000", "12-18%", "Lifestyle tier; smart cooler or AI vision cabinet"],
        ["> $3,000", "18-25%", "Anchor lobby placement; premium cabinet, full reporting"],
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface beverage-experienced multifamily operators against the cabinet, planogram, and SLA framework above. Capex tier and commission depend on property volume — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Cabinet capex, commission tiers, and SKU pricing are reference ranges. Confirm against operator proposals and your specific resident demographic.",
});

console.log("wrote " + "beverage-vending-machines-in-apartments");
