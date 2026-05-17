import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-ventilation-factories",
  assetType: "pack",
  title: "Factory Vending Ventilation Pack",
  subtitle: "Outdoor-rated equipment specs, clearance + service access, HVAC engineering coordination",
  intro:
    "Factory vending often lands in spaces that office vending never sees — high-ambient zones near process heat, particulate-heavy assembly bays, outdoor smoke shelters, and breakrooms with marginal HVAC. Without the right equipment spec and clearance plan, the machine fails its refrigeration cycle and the operator burns through service calls. This pack codifies the ventilation, clearance, and HVAC coordination decisions.",
  sections: [
    {
      heading: "1. Why ventilation matters for vending refrigeration",
      paragraph:
        "Vending refrigeration is a closed vapor-compression cycle that rejects heat through a condenser coil at the rear or bottom of the cabinet. The condenser must exhaust to ambient air below ~95°F to maintain cabinet temp 35-40°F. If ambient runs hot (process heat, sun load, poor circulation) or air is restricted (clearance, particulate buildup), the compressor cycles longer, internal temp drifts, and product loss + service calls follow.",
    },
    {
      heading: "2. Ambient temperature spec — by machine class",
      headers: ["Machine class", "Max ambient (manufacturer typical)", "Typical placement risk"],
      rows: [
        ["Indoor standard (refrigerated)", "85-90°F", "Process-heat-adjacent zones, summer breakrooms without dedicated AC"],
        ["Indoor commercial / heavy-duty", "95°F", "Most factory breakrooms; acceptable with verified HVAC"],
        ["Outdoor-rated / weatherized", "115-125°F", "Smoke shelters, outdoor receiving docks, park-and-pool placements"],
        ["Indoor frozen", "85°F", "Frozen units are most sensitive to ambient; place in conditioned space"],
        ["Hot-beverage", "100°F+ acceptable on cabinet side; check water-system spec separately", "Less ambient-sensitive than refrigerated"],
      ],
    },
    {
      heading: "3. Clearance + service access",
      paragraph:
        "Clearance specs come from the manufacturer install manual and are condition of warranty. Failure to meet clearance is the most common reason for refrigeration warranty denial.",
      items: [
        { label: "Rear clearance", value: "4-6 inches minimum (manufacturer typical). Allows condenser airflow + service access. Some manufacturers require 8 inches for top-discharge designs." },
        { label: "Side clearance", value: "2 inches minimum each side. Tighter side spacing is acceptable for side-by-side installs only when manufacturer-specified." },
        { label: "Top clearance", value: "12 inches minimum (manufacturer typical). Allows top-vented condenser exhaust and service access." },
        { label: "Front access", value: "30 inches minimum free space in front for door swing + ADA clear floor space (per ADA Section 305, 30 in × 48 in for parallel approach)." },
        { label: "Floor surface", value: "Level within ¼ inch over machine footprint. Sealed concrete or commercial tile. Carpet pile ≤ ½ in per ADA 302.2 if access route." },
      ],
    },
    {
      heading: "4. HVAC engineering coordination",
      paragraph:
        "For new placements or refreshes, loop facility engineering or your HVAC consultant. The heat-load and air-distribution sign-off below is standard.",
      items: [
        { number: 1, title: "Compute heat rejection load", description: "Each refrigerated machine rejects 1,500-3,000 BTU/hr to the room. Add total machine count to the room's heat-load calculation. A 5-machine breakroom adds 7,500-15,000 BTU/hr — meaningful for a sub-1-ton AC zone." },
        { number: 2, title: "Verify supply-air capacity", description: "ASHRAE 62.1 ventilation rate for break rooms is 5 CFM/person + 0.06 CFM/sf. Confirm room meets minimum supply CFM at design occupancy. If marginal, add a dedicated mini-split or ceiling fan." },
        { number: 3, title: "Air distribution", description: "Avoid placing machine directly under a supply diffuser (short-cycles condenser) or directly above a return grille (recirculates hot exhaust). Plan supply / return offset from machine footprint." },
        { number: 4, title: "Process-heat barrier", description: "If breakroom is adjacent to a process-heat zone (oven, furnace, melt operation), specify an insulated wall or vestibule. Direct radiant load on cabinet exterior can push the unit out of spec even with adequate room temp." },
        { number: 5, title: "Outdoor placements", description: "Outdoor-rated cabinets, weather hood, GFCI dedicated circuit, lightning protection. Coordinate with electrical for dedicated 20A circuit (typical), cellular modem antenna placement, and grounding." },
      ],
    },
    {
      heading: "5. Outdoor-rated equipment specification",
      paragraph:
        "Outdoor placements (park-and-pool, smoke shelter, outdoor dock) require purpose-built outdoor cabinets. Indoor units fail rapidly outdoors regardless of cover.",
      items: [
        { check: "Outdoor-rated cabinet — manufacturer-listed for outdoor use." },
        { check: "Operating range covers local climate extremes (typical -20°F to 115°F for US-temperate; specify per location)." },
        { check: "NEMA 3R or 4 enclosure for electrical / control compartment." },
        { check: "Weather hood or canopy installed per manufacturer spec." },
        { check: "Cellular modem with external antenna (signal degrades in metal cabinet + outdoor enclosure)." },
        { check: "GFCI-protected dedicated 20A circuit on dedicated breaker." },
        { check: "Lightning / surge protection on power + data." },
        { check: "Anchored to slab; tamper-resistant fasteners per facility security." },
      ],
    },
    {
      heading: "6. Particulate + air-quality coordination",
      paragraph:
        "Assembly bays with welding, grinding, or wood-shop particulate require additional consideration. Particulate clogs condenser coils, accelerates compressor failure, and contaminates dispense bins.",
      items: [
        { check: "Vending placement is outside the active particulate zone (e.g., behind a wall, in a positively-pressured breakroom)." },
        { check: "If placement is in a zone with measurable particulate (visible at filter), coil-cleaning cadence escalates to monthly." },
        { check: "Filter accessory installed where manufacturer offers a coil pre-filter option." },
        { check: "HEPA / negative-pressure containment per facility EHS for adjacent welding / grinding zones — vending sits outside containment." },
      ],
    },
    {
      heading: "7. RFP language",
      items: [
        { check: "Operator verifies clearance + ambient temperature at site survey before contract sign." },
        { check: "Equipment rating matches placement environment (indoor standard / commercial / outdoor / particulate-zone)." },
        { check: "Operator coordinates with facility HVAC / engineering before equipment install." },
        { check: "Cellular modem signal verified at install (≥ -100 dBm RSSI typical minimum)." },
        { check: "Operator commits to coil-cleaning cadence appropriate to placement (quarterly minimum; monthly for particulate / outdoor / high-ambient)." },
        { check: "Warranty terms documented; operator confirms placement environment does not void manufacturer warranty." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to translate placement environment into an equipment specification and coordinate HVAC sign-off before operator selection. We are not an HVAC design firm — coordinate final supply-air sizing and equipment derate with your mechanical engineer.",
    },
  ],
  footer:
    "Informational reference. Equipment specs vary by manufacturer; confirm clearance, ambient range, and warranty terms with the specific equipment line your operator proposes.",
});

console.log("wrote "+"vending-ventilation-factories");
