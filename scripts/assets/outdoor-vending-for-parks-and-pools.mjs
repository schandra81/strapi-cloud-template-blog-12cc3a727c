import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "outdoor-vending-for-parks-and-pools",
  assetType: "pack",
  title: "Outdoor Park and Pool Vending Pack",
  subtitle: "Outdoor-rated equipment spec, winterization protocol, seasonal planogram",
  intro:
    "Outdoor vending — parks, pools, splash pads, dog parks, trailheads — operates in conditions that destroy indoor equipment in a season. Outdoor-rated cabinets, weather hoods, dedicated cellular telemetry, and a defined winterization protocol are non-negotiable. This pack codifies the spec, the year-round operating cycle, and the parks-and-rec coordination scope.",
  sections: [
    {
      heading: "1. Outdoor placement — why it's a different equipment class",
      paragraph:
        "Indoor vending machines fail outdoors regardless of cover. UV exposure breaks down plastics + electronics, condensation pools in non-sealed cabinets, temperature swings stress refrigerant cycles, and insects + small mammals colonize warm machinery. Outdoor-rated cabinets are purpose-built — sealed enclosures, UV-rated finishes, higher-temperature-tolerant refrigeration, and reinforced anchoring.",
    },
    {
      heading: "2. Outdoor-rated equipment specification",
      headers: ["Spec area", "Requirement", "Reference"],
      rows: [
        ["Cabinet rating", "Manufacturer-listed outdoor-rated", "Manufacturer cut sheet"],
        ["Operating range", "-20°F to 115°F (US-temperate); adjust for local extremes", "NEMA / NEC environmental specs"],
        ["Enclosure", "NEMA 3R minimum; NEMA 4 for pool / splash-zone proximity", "NEC 110.28 / NEMA 250"],
        ["Refrigeration", "High-ambient-rated condenser; R-290 or R-744 refrigerant", "EPA SNAP Rule 26 (2023)"],
        ["Lighting", "LED; UV-rated lens; daylight-sensor or timer to reduce daytime draw", "ENERGY STAR LED spec"],
        ["Anchoring", "Bolted to concrete slab; tamper-resistant fasteners; min 4-bolt anchor pattern", "Manufacturer install manual"],
        ["Electrical", "Dedicated 20A GFCI-protected circuit per NEC 210.8(B); surge protection", "NEC 210.8 / 285"],
        ["Cellular telemetry", "External antenna; 4G LTE Cat-M1 or CAT-1", "Carrier signal ≥ -100 dBm RSSI"],
        ["Coin / bill handling", "Recommend cashless-only or cashless-primary; reduces vandalism + theft target", "PCI DSS v4.0 for cashless"],
        ["Lightning protection", "Surge suppressor on power + data; bonded to grounding electrode system", "NEC 250 / 285"],
      ],
    },
    {
      heading: "3. Pool / splash-zone proximity — additional requirements",
      paragraph:
        "Pools, splash pads, and wet-deck areas have specific NEC + local-code requirements for equipment placement.",
      items: [
        { check: "Vending placement outside the 'splash zone' as defined by NEC 680 (pool electrical) — typically ≥ 10 ft from water edge; verify with AHJ." },
        { check: "If placement is within the equipotential bonding area of a pool, equipment must be bonded per NEC 680." },
        { check: "GFCI-protected dedicated 20A circuit; NEC 210.8(B) for outdoor + wet locations." },
        { check: "Cabinet rated NEMA 4 (watertight) for direct splash exposure, NEMA 3R minimum otherwise." },
        { check: "Coin / bill handling avoided in splash zone — water ingress is the leading failure mode." },
        { check: "Chlorinated-air environment shortens equipment life — adjust replacement cycle to ~5-7 years vs. 10+ indoor." },
      ],
    },
    {
      heading: "4. Seasonal planogram — outdoor / seasonal-use facilities",
      paragraph:
        "Outdoor pool + park placements typically operate seasonally (Memorial Day-Labor Day for pools in most US climates). Trailhead + dog-park placements operate year-round. Match planogram to actual operation.",
      headers: ["Season", "Hydration share", "Featured SKUs"],
      rows: [
        ["Pool season (Jun-Aug)", "55-65%", "Water (16 oz, 1 L), sports drinks, electrolyte, juice boxes, ice pops if frozen-capable"],
        ["Year-round park (spring)", "40-45%", "Water, lighter snacks, granola, trail mix"],
        ["Year-round park (summer)", "50-55%", "Water, electrolyte, salty snacks, energy"],
        ["Year-round park (fall)", "35-40%", "Water, hot beverages if cabinet supports, calorie-dense snacks"],
        ["Year-round park (winter — if open)", "25-30%", "Hot coffee, hot chocolate, calorie-dense bars, trail mix"],
      ],
    },
    {
      heading: "5. Winterization protocol",
      paragraph:
        "Seasonal pool placements require formal winterization. Year-round outdoor placements require cold-weather kit installation.",
      items: [
        { number: 1, title: "Pre-shutdown inventory (early September for pool seasonal)", description: "Operator pulls remaining inventory; documents in portal. Avoid perishable / fresh inventory in final 2 weeks of season." },
        { number: 2, title: "Power shutdown + drain", description: "Refrigeration powered down; manufacturer winterization steps followed (defrost interior, prop door open ¼ in to prevent mold, drain hot-beverage water lines if applicable)." },
        { number: 3, title: "Cabinet sealing + cover (if removable to storage, prefer)", description: "Outdoor cabinet that stays in place is sealed (selection apertures taped; cash slot blocked; weather cover installed)." },
        { number: 4, title: "Modem hibernation", description: "Cellular modem switched to power-save or off; documented in operator portal. Resume on spring power-up." },
        { number: 5, title: "Spring start-up", description: "Operator visits 2-3 weeks before pool open. Power up, defrost cycle, refrigeration test, modem reconnect, full restock + planogram refresh." },
        { number: 6, title: "Year-round cold-weather kit", description: "For year-round outdoor placements in zones below 32°F, install manufacturer cold-weather kit (heated dispense, condenser-fan delay). Document install on equipment record." },
      ],
    },
    {
      heading: "6. Security + vandalism considerations",
      paragraph:
        "Outdoor placements are exposed to vandalism, theft, and weather damage that indoor placements rarely see. Plan accordingly.",
      items: [
        { check: "Cashless-primary or cashless-only configuration — removes cash as a theft target." },
        { check: "Tamper-resistant locks (high-security cylinder, e-lock with audit log preferred)." },
        { check: "Anchor bolts inaccessible from outside cabinet." },
        { check: "Cabinet exterior monitored on facility CCTV where available." },
        { check: "Operator's insurance covers vandalism + weather damage; deductible documented." },
        { check: "Replacement-glass policy and lead time documented in contract." },
        { check: "Lighting at placement after dark (deterrent + ADA visibility)." },
      ],
    },
    {
      heading: "7. ADA + accessibility (Title II, outdoor)",
      paragraph:
        "Outdoor public-park placements meet ADA Title II. The 2010 ADA Standards and the Architectural Barriers Act apply.",
      items: [
        { check: "Accessible route from the accessible parking + accessible path-of-travel to the machine (Section 206 / 402)." },
        { check: "Reach range 15-48 in AFF; clear floor space 30 in × 48 in (firm + stable surface — not loose sand / gravel)." },
        { check: "Operating force ≤ 5 lbf; no tight grasping (Section 309.4)." },
        { check: "Cashless option for users without coin/bill handling capability." },
        { check: "High-contrast pricing display; characters readable in outdoor light." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate operator selection, RFP language, equipment spec, and winterization scheduling for outdoor parks-and-pool placements. We do not own or service the equipment — the operator selected via this framework executes the program. Coordinate with your parks-and-rec department, AHJ, and pool / aquatic engineer for final electrical and code clearances.",
    },
  ],
  footer:
    "Informational reference. NEC, NEMA, ADA, and local-jurisdiction requirements vary; coordinate the final design with your electrical engineer and AHJ.",
});

console.log("wrote "+"outdoor-vending-for-parks-and-pools");
