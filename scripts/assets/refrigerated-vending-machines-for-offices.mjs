import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "refrigerated-vending-machines-for-offices",
  assetType: "pack",
  title: "Refrigerated Office Vending Equipment Pack",
  subtitle: "Glass-front + combo + fresh-food + AI cooler specifications, ENERGY STAR + R-290, and HACCP framework",
  intro:
    "This pack consolidates the specifications, sourcing, and food-safety framework for refrigerated office vending — glass-front coolers, combo machines, fresh-food vending, and AI-camera coolers. It separates ENERGY STAR + low-GWP equipment requirements from the HACCP-equivalent food-safety practices that distinguish a credible operator from a commodity bid.",
  sections: [
    {
      heading: "1. Equipment categories + specifications",
      headers: ["Category", "Typical models", "Capacity (SKUs)", "Annual kWh (ENERGY STAR)", "Use case"],
      rows: [
        ["Glass-front beverage (CRBV)", "AMS Sensit III, Crane Merchant Media, Royal Vendors Vision RVV", "330-720 oz cans + 200-450 bottles", "800-1,400", "Cold beverages, single-product or multi-product"],
        ["Glass-front snack (refrigerated)", "AMS 39-Visi, Royal Vendors RVDV, Crane Merchant 4", "32-48 snack rows, refrigerated bottom half", "1,100-1,700", "Yogurt, parfait, fresh fruit, refrigerated bars"],
        ["Combo (snack + beverage)", "AMS Combi, Seaga INF5C, Crane Merchant 4 Combo", "20-30 snack + 8-12 beverage", "900-1,600", "Smaller workplaces (25-100 emp)"],
        ["Fresh-food vending", "AMS 39-Visi-Fresh, Royal Vendors RVFV, Fastcorp Z400 (frozen)", "30-48 wedge SKUs (salads, wraps, sandwiches)", "1,500-2,500", "Hospital + university + 24/7 shift work"],
        ["AI camera cooler (micro-market style)", "AWM Smart Shelf, 365 Pico Cooler, Cantaloupe Go Mini, Aramark Smart Pantry", "200-400 SKU capacity, computer-vision checkout", "1,200-2,000", "Modern offices replacing legacy vending"],
        ["Open-front grab-and-go cooler", "True GDM-23 + Cantaloupe ePort tap reader", "200-300 SKUs", "1,500-2,200", "Hospitality + premium pantry-style"],
      ],
    },
    {
      heading: "2. ENERGY STAR + low-GWP refrigerant specification",
      paragraph:
        "ENERGY STAR 4.0 for refrigerated beverage vending machines is effective 2024. Specify R-290 (propane, GWP 3) or R-600a (isobutane, GWP 3) per EPA SNAP. Avoid R-404A (GWP 3,922) and R-134a (GWP 1,430).",
      items: [
        { check: "ENERGY STAR 4.0 certified — verify on EPA certified-products list before contract" },
        { check: "R-290 or R-600a refrigerant; certificate from manufacturer on file" },
        { check: "LED interior + display lighting; auto-dim or off after 30 min idle" },
        { check: "Smart sleep mode — temperature setback overnight, weekend, holiday" },
        { check: "EnergyGuide yellow label on every machine bid (DOE 10 CFR 431)" },
        { check: "Door-heater controller adjusts based on dew point (Anti-Sweat Heater Control)" },
        { check: "Annual emission factor per machine supplied for Scope 2 reporting" },
      ],
    },
    {
      heading: "3. HACCP-equivalent food-safety framework",
      paragraph:
        "FDA Food Code + state retail food regulations apply to fresh-food + refrigerated vending. HACCP is not strictly mandatory for unattended sales below thresholds, but operators serving fresh + dairy + refrigerated meat should operate a HACCP-equivalent plan.",
      items: [
        { label: "Critical control points (CCPs)", value: "Temperature (33-40°F refrigerated, 0-32°F frozen), time-out-of-temperature, expiration date, allergen cross-contact." },
        { label: "Temperature monitoring", value: "Telemetry-monitored interior temperature with ≥ 15-minute sample rate. Excursion alert > 41°F triggers operator response within 4 hours per FDA Food Code." },
        { label: "Health Department interface", value: "Operator registers with state + local health department where required (CA, TX, NY, FL, IL, WA — registration thresholds vary). Annual inspection in most jurisdictions for fresh-food machines." },
        { label: "Time/Temperature Control for Safety (TCS) foods", value: "Fresh sandwiches, wraps, salads, dairy, cut fruit, refrigerated meats. Cumulative time > 41°F: ≤ 4 hours = destroy; > 4 hours = legal liability." },
        { label: "FSMA + supplier validation", value: "Operator validates supplier under Food Safety Modernization Act Preventive Controls Rule. Records on file for 2 years per 21 CFR 117." },
        { label: "Allergen + FALCPA compliance", value: "Top-9 allergen disclosure per SKU; cross-contact attestation; nut-aware planogram option." },
        { label: "Food handler certification", value: "Operator restock + service staff hold ANSI-accredited food handler certificate (ServSafe, Learn2Serve, StateFoodSafety) where state requires." },
      ],
    },
    {
      heading: "4. Glass-front beverage (CRBV) detail spec",
      items: [
        { label: "Capacity sizing", value: "Tall (72 in) holds 330-720 12-oz cans or 200-450 20-oz bottles. Half-height (53 in) holds half. Match to vends-per-day forecast (target restock cadence 1-3×/week)." },
        { label: "Door + glass", value: "Tempered safety glass per ANSI Z97.1. Optional anti-fog coating + heated glass for high-humidity environments." },
        { label: "Lighting", value: "LED interior 6500 K white (color-accurate for product). Brightness 800-1,200 lumens." },
        { label: "Payment + telemetry", value: "Card reader (Nayax Onyx, Cantaloupe ePort, Crane Pay) with NFC + mobile wallet. Cellular telemetry standard." },
        { label: "Footprint + clearance", value: "Typical 37 × 33 × 72 in (W × D × H). Clear floor space 30 × 48 in per ADA Section 305." },
        { label: "Electrical", value: "120V/15A dedicated circuit, GFCI per NEC 210.8(B). Inrush current up to 40A momentary on compressor start." },
      ],
    },
    {
      heading: "5. Fresh-food vending detail spec",
      items: [
        { label: "Equipment design", value: "Refrigerated carousel or wedge dispenser. Conveyor-style for sandwich + salad SKUs. Anti-tip + anti-vibration mounts." },
        { label: "Temperature zones", value: "Single-zone 33-40°F most common. Dual-zone (frozen + refrigerated) on Fastcorp Z400 + select AMS models." },
        { label: "Cold-chain integrity", value: "Pre-conditioned product loaded; never warm-loaded. Operator-side temperature log at load + restock." },
        { label: "Telemetry-monitored temperature", value: "≥ 15-minute heartbeat. Excursion > 41°F triggers automatic product purge + alert; cumulative > 4 hr triggers destroy-and-replace." },
        { label: "SKU shelf life", value: "Sandwich + wrap: 3-5 days from production. Salad: 3-5 days. Parfait + yogurt: 14-21 days. Cut fruit: 3-5 days. Operator's HACCP plan specifies." },
        { label: "Allergen + nutrition labeling", value: "FDA menu-labeling rule applies to operators with ≥ 20 vending machines selling foods with calorie disclosure. Front-of-pack calorie + allergen disclosure per SKU." },
      ],
    },
    {
      heading: "6. AI camera cooler detail spec",
      items: [
        { label: "Technology", value: "Computer-vision SKU recognition (AWM, 365 Pico, Cantaloupe Go Mini, Aifi) + weight sensors. Member taps badge or app to unlock; cameras detect SKU removed; automatic checkout." },
        { label: "Loss prevention", value: "Typical 1-3% shrinkage acceptable; > 5% triggers review. Operator's AI accuracy ≥ 97-99% for trained SKUs." },
        { label: "SKU training", value: "Each new SKU requires camera training (~30-60 sec per SKU). Operator handles at restock." },
        { label: "Member experience", value: "Open-front grab-and-go feel; no buttons, no waiting. Higher velocity vs. traditional vending (10-20% in measured deployments)." },
        { label: "Network", value: "Wi-Fi or cellular; bandwidth higher than traditional vending (200-500 MB/month per cooler) due to image upload." },
        { label: "Best for", value: "Mature workplaces transitioning from vending to micro-market without the staffing model." },
      ],
    },
    {
      heading: "7. Placement + ADA compliance",
      items: [
        { check: "ADA Section 308 reach range: 15-48 in operable parts" },
        { check: "ADA Section 305 clear floor space: 30 × 48 in for parallel or forward approach" },
        { check: "ADA Section 309.4: operating force ≤ 5 lbf, one-hand operation, no tight grasping" },
        { check: "Anti-tip bracket or wall-mount per UL 541" },
        { check: "GFCI-protected dedicated circuit per NEC 210.8(B)" },
        { check: "Floor weight rating: glass-front beverage ~800-1,200 lb full; concrete or properly-rated raised floor" },
        { check: "Ventilation clearance per manufacturer (typically 4-6 in rear + 2 in sides)" },
        { check: "Drainage where condensate management requires; floor drain or condensate evaporator" },
      ],
    },
    {
      heading: "8. Service SLA + uptime",
      items: [
        { number: 1, title: "Tier 1 — offline, payment failure, temperature excursion", description: "<4 hr acknowledgement, <24 hr resolution. Loaner machine within 24 hr for any TCS-food machine." },
        { number: 2, title: "Tier 2 — single-SKU stockout, planogram refresh", description: "<24 hr acknowledgement, <48 hr resolution." },
        { number: 3, title: "Tier 3 — cosmetic, signage, label refresh", description: "<5-day acknowledgement, <14-day resolution." },
        { number: 4, title: "Uptime SLA", description: "≥ 98% per machine per month telemetry-verified. Credit mechanism: 1% monthly fee credit per 1% below 98%." },
      ],
    },
    {
      heading: "9. Operator selection checklist",
      items: [
        { check: "100% ENERGY STAR + R-290 / R-600a equipment standard" },
        { check: "Telemetry with temperature monitoring on every refrigerated machine" },
        { check: "HACCP-equivalent food-safety plan for fresh-food machines" },
        { check: "State + local health department registration where required" },
        { check: "ANSI-accredited food handler certification for restock staff" },
        { check: "FALCPA + FDA menu-labeling compliance" },
        { check: "Insurance: $2M GL, $1M product, $1M cyber; certificate naming host as additional insured" },
        { check: "References from 3+ comparable hosts (workplace + fresh-food experience) with ≥ 24 months tenure" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps facilities + workplace-experience + food-service teams scope refrigerated vending programs with operators positioned to meet ESG + FDA + ADA requirements.",
});

console.log("wrote " + "refrigerated-vending-machines-for-offices");
