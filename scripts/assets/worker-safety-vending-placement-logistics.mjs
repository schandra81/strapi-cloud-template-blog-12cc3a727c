import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "worker-safety-vending-placement-logistics",
  assetType: "pack",
  title: "Logistics Hub Safety-Integrated Placement Pack",
  subtitle: "Placement matrix, safety review framework, PPE overlay, and fire-code checklist",
  intro:
    "Vending placement in logistics hubs is a worker-safety design decision before it's a hospitality decision. Forklift paths, sprinkler coverage, NFPA 101 egress, and OSHA aisle marking all dictate where machines can and cannot sit. This pack consolidates four working references — placement matrix, safety review framework, PPE overlay, fire-code checklist — for EHS leads, facility services, and operators.",
  sections: [
    {
      heading: "1. Placement matrix — safety constraints",
      paragraph:
        "Below: standard placement constraints that govern logistics-hub vending alcoves. Most enforced by AHJ (fire marshal) or OSHA inspection.",
      headers: ["Constraint", "Standard", "Value", "Source"],
      rows: [
        ["Egress corridor clear width", "NFPA 101 §7.1", "≥ 44 in (or ≥ 36 in occupant load < 50)", "Local AHJ"],
        ["Sprinkler clearance below deflector", "NFPA 13 §8.6", "≥ 18 in", "Local AHJ"],
        ["Distance from dock-leveler edge or fall hazard", "OSHA 29 CFR 1910.28", "≥ 25 ft typical guarded edge", "OSHA"],
        ["Distance from fire extinguisher, eyewash, AED", "NFPA 10 + ANSI Z358.1 + AED", "No obstruction within 36 in", "OSHA + AHJ"],
        ["Forklift aisle offset", "OSHA 29 CFR 1910.176(a)", "Outside marked aisle yellow-line", "OSHA"],
        ["Hand-hygiene station proximity (food handling)", "CDC + FDA guidance", "Within 10 ft of break-area entry", "AHJ"],
        ["Dedicated 20A circuit", "NFPA 70 §210", "Dedicated; not shared with shop tools", "AHJ"],
        ["GFCI within 6 ft of water source", "NFPA 70 §210.8", "Required", "AHJ"],
      ],
    },
    {
      heading: "2. Safety review framework — walk-through",
      paragraph:
        "EHS lead + operator + facility services walk every candidate placement before install. Below: standard agenda + sign-off framework.",
      items: [
        { number: 1, title: "Egress audit", description: "Walk path with tape measure. Confirm corridor width retained ≥ 44 in (or ≥ 36 in occupant load < 50). Photograph at install + each year." },
        { number: 2, title: "Sprinkler audit", description: "Confirm ≥ 18 in below sprinkler deflector. Confirm no obstruction of coverage pattern (NFPA 13 §8.6.5). If micro-market shelving extends > 4 ft above floor, additional analysis." },
        { number: 3, title: "Forklift / MHE path audit", description: "Confirm placement outside marked aisle. Confirm no blind corner. Consider bollard or guard rail if forklift speed > 5 mph in proximity." },
        { number: 4, title: "Dock + fall-hazard audit", description: "Confirm ≥ 25 ft from any dock-leveler edge or unprotected fall ≥ 4 ft. Confirm placement not in dock-leveler swing arc." },
        { number: 5, title: "Emergency equipment audit", description: "Confirm placement does not obscure or restrict access to fire extinguisher, eyewash, AED, fire alarm pull, sprinkler control valve." },
        { number: 6, title: "Lighting + visibility audit", description: "Lighting ≥ 20 fc at machine face. No blind corner that could harbor a worker injury or theft incident." },
        { number: 7, title: "Sign-off", description: "EHS, facility services, and operator sign-off recorded with date and photographs. Retained in facility records." },
      ],
    },
    {
      heading: "3. PPE overlay — where vending intersects PPE policy",
      paragraph:
        "Workers in active PPE zones may need to remove PPE to transact. Plan the placement so transactions happen in PPE-doffing or hybrid zones, not active hazard zones.",
      items: [
        { label: "Hard hat zone (cold storage racking)", value: "Vending placement in adjacent break room only; not under racking. Worker doffs hat upon entry to break room, not at machine." },
        { label: "Hi-vis vest zone (forklift adjacency)", value: "Acceptable if placement is outside marked forklift aisle and worker dwell at machine ≤ 30 seconds." },
        { label: "Eye + face protection zone (sortation laser, induction)", value: "Vending in break room only; never at the work cell." },
        { label: "Hearing protection zone (> 85 dBA)", value: "Vending in adjacent quiet area (< 70 dBA at machine). Worker keeps protection on at machine; ensure tactile / visual interface (ADA §309) does not require speech." },
        { label: "Cold-storage gloves (freezer)", value: "Vending in pre-cool break room only; ensure card reader operable with insulated glove (some readers require glove-doffing — operator confirms spec)." },
        { label: "Cleanroom / food-safety zone", value: "Vending excluded entirely; designate hand-hygiene station + visible vending outside controlled zone." },
      ],
    },
    {
      heading: "4. Fire-code checklist",
      items: [
        { check: "Egress corridor width retained ≥ 44 in per NFPA 101 §7.1 (or ≥ 36 in if occupant load < 50)" },
        { check: "Sprinkler deflector clearance ≥ 18 in per NFPA 13 §8.6 — vertical clearance measured" },
        { check: "Equipment UL-listed; nameplate visible" },
        { check: "Dedicated 20A circuit per NFPA 70 §210; not shared with shop tools or air handlers" },
        { check: "GFCI protection where placement within 6 ft of water source (NFPA 70 §210.8)" },
        { check: "Combustible cardboard restock packaging not stored on top of cabinet" },
        { check: "No placement under sprinkler riser, FDC, or fire alarm pull station" },
        { check: "No placement obstructing alarm-bell sightline or strobe coverage" },
        { check: "Travel distance from any point in alcove to exit ≤ NFPA 101 occupancy max (typically 200–250 ft for industrial)" },
        { check: "Annual AHJ walk-through coordinated; vending alcove included in facility fire-safety plan" },
      ],
    },
    {
      heading: "5. OSHA 300 + incident-log integration",
      paragraph:
        "Vending placements interact with OSHA 300 incident logs in two ways: (1) injuries at the vending alcove (slip/trip, ergonomic, struck-by MHE), and (2) hydration-related incidents (heat illness). Plan the integration formally.",
      items: [
        { check: "Vending alcove included in facility slip/trip incident review" },
        { check: "Ergonomic review — reach range, weight of dispense, repetitive-motion exposure for restock route staff (operator-side)" },
        { check: "Hydration access mapped against any OSHA 300 heat-illness entries — closes loop between vending design + heat-illness prevention" },
        { check: "Struck-by MHE near-miss reports reviewed for vending-alcove location pattern" },
        { check: "Operator route-staff incidents reported to facility EHS within 24 hours; mutual-aid + reporting flow documented" },
      ],
    },
    {
      heading: "6. Indicative cost — safety overlay",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Safety walk-through at install", "$200 – $500/site", "EHS + operator + facility services; documented"],
        ["Annual re-walk + AHJ coordination", "$200 – $400/site/year", "Photo + measurement log"],
        ["Bollard / guard rail install (if needed)", "$400 – $1,800 per placement", "If forklift speed > 5 mph in proximity"],
        ["Dedicated 20A circuit run", "$400 – $1,500", "Electrician + permit"],
        ["GFCI receptacle install (where required)", "$80 – $260", "Electrician + part"],
        ["Lighting upgrade (if < 20 fc at machine face)", "$220 – $720", "LED retrofit"],
        ["Cabinet upgrade to hardened / outdoor-rated", "$600 – $2,400 per cabinet uplift", "Where placement zone warrants"],
      ],
    },
    {
      heading: "7. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate safety-integrated logistics-hub vending placement through operators that can attest to UL-listed equipment, OSHA + NFPA placement walk-throughs, and ADA compliance overlays. We can support the safety walk-through framework and connect EHS leads to operators able to attest in writing. Capability documentation provided on request during scoping; we do not claim engagements at any specific named hub.",
    },
  ],
  footer:
    "Working reference for EHS, facility services, and operator partners. Final placement decisions are AHJ-dependent; confirm local fire marshal sign-off where required.",
});

console.log("wrote "+"worker-safety-vending-placement-logistics");
