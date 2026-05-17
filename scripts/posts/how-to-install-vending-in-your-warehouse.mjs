import { seedPost, tldr, statStrip, timeline, specList, dimensionDiagram, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-install-vending-in-your-warehouse", [
  tldr({
    heading: "How do you actually install vending equipment in a warehouse?",
    paragraph:
      "Warehouse vending installs differ from office installs in five ways that change the install playbook: (1) the physical environment (dust, particulate, ambient temperature swings, vibration from forklifts and conveyors), (2) the electrical environment (long conduit runs from distribution panels, 277V building service, 3-shift load profile that never quiets down), (3) the placement logic (front-of-line breakrooms, shipping/receiving alcoves, mezzanine landings — not corridor placements), (4) the access logic (OSHA-restricted areas, forklift traffic, lockout/tagout-adjacent work), and (5) the cellular environment (steel-deck roofs, conductive racking, RF dead zones interior of the building). A modern warehouse install is a 2-4 hour per machine procedure including site survey + freight-elevator or grade-level placement + dedicated 120V/20A circuit pull where existing outlets aren't suitable + cellular signal verification with external antenna option + dust-mitigation positioning + planogram tuned for 3-shift industrial workforce. Two-machine snack/beverage pair at a 200K-sq-ft DC: 4-6 hours including planogram load and walkthrough. Multi-machine fleet across multi-facility operator: phased rollout over 30-60 days. Most install failures are pre-install (wrong outlet, dust path under HVAC return, RF dead zone in mezzanine corner) — site survey discipline matters more than install-day execution.",
    bullets: [
      { emphasis: "Warehouse installs differ from office in five ways:",
        text: "Environment (dust, vibration, ambient swings) + electrical (long conduit, 277V service, 3-shift load) + placement (front-of-line, shipping/receiving) + access (OSHA, forklift) + cellular (steel deck, RF dead zones)." },
      { emphasis: "2-4 hours per machine install:",
        text: "Site survey + grade-level placement + dedicated circuit + cellular verification + dust-mitigation positioning + 3-shift planogram. Two-machine pair: 4-6 hours." },
      { emphasis: "Pre-install survey beats install-day fixes:",
        text: "Wrong outlet + dust path + RF dead zone are the three documented failure modes. Survey them before delivery; don't discover them on install day." },
    ],
  }),
  statStrip({
    heading: "Warehouse install benchmarks",
    stats: [
      { number: "2-4 hr", label: "per machine install", sub: "longer than office (1-3 hr)", accent: "orange" },
      { number: "3 shift", label: "duty cycle planning", sub: "vending never gets a rest period", accent: "blue" },
      { number: "≥36 in", label: "front clearance + forklift buffer", sub: "5 ft preferred from drive lanes", accent: "blue" },
      { number: "30-60 day", label: "fleet rollout cadence", sub: "multi-facility distribution operator", accent: "orange" },
    ],
  }),
  timeline({
    heading: "The warehouse install playbook",
    sub: "What happens from contract signature through install-day walkthrough. Total elapsed: 2-4 weeks lead time, 2-4 hours per machine on install day.",
    howToName: "How to install warehouse vending",
    totalTime: "PT4H",
    steps: [
      { label: "STEP 1", title: "Pre-install site survey", description: "Operator account manager + facilities walk the planned install location. Verify breakroom location vs forklift traffic, confirm dedicated 120V/20A circuit availability (or scope for electrical pull), measure delivery path through warehouse (overhead door + receiving aisle width), measure cellular signal at exact install location (not loading dock — interior signal differs), document dust path from HVAC returns. 45-60 minutes. Most warehouse install failures are surfaced here, not later." },
      { label: "STEP 2", title: "Electrical scope confirmation", description: "If suitable dedicated outlet doesn't exist within 6 feet of planned placement, schedule electrical contractor pull from nearest distribution panel. Standard warehouse service is 277V/480V with 120V step-down at panels; outlet pulls may be 50-150 ft of conduit. Building electrician or licensed contractor; $400-1,200 typical for clean run. Schedule completion 5-10 business days before machine delivery." },
      { label: "STEP 3", title: "Delivery + receiving coordination", description: "Operator coordinates with warehouse receiving (overhead door, dock plate, forklift if needed for 600-900 lb units across long aisles). Delivery window matched to warehouse low-activity period (between shift changes or weekend) to avoid forklift conflicts. Operator brings hand truck + pallet jack; warehouse provides forklift assist only if pre-arranged. 30-45 minutes from truck to install location." },
      { label: "STEP 4", title: "Position + level + dust-mitigation orientation", description: "Machine placed in confirmed spot with ≥36\" front clearance + ≥6\" rear clearance + ≥5 ft buffer from forklift drive lane. Cabinet oriented to avoid HVAC return air sweeping dust into compressor intake (rotate 90° if needed). Leveling feet adjusted using torpedo level on cabinet top. 15-20 minutes." },
      { label: "STEP 5", title: "Electrical hookup + circuit verification", description: "Plug into dedicated 120V/15A or 20A NEMA 5-15R outlet. Verify with multimeter: 118-122V hot-to-neutral, <2V neutral-to-ground, breaker confirmed not shared with conveyor controls, dock equipment, or compressor banks. Warehouse shared circuits trip; dedicated is mandatory. 15-25 minutes including documentation." },
      { label: "STEP 6", title: "Cellular + telemetry configuration", description: "Cellular modem connected to telemetry platform (Cantaloupe, Nayax, 365 ADM). First handshake verifies signal at install location ≥-90 dBm. Steel-deck roof + conductive racking attenuate signal; if marginal, add external antenna on cabinet top or run thin coax to nearest exterior wall. External antenna kit $200-400 + 20-30 min added install time. 20-40 minutes including signal optimization." },
      { label: "STEP 7", title: "3-shift planogram load + price set", description: "Initial planogram loaded for 3-shift industrial workforce — heavier emphasis on cold beverages (hot day-shift), high-energy snacks (night shift sustenance), portable hot meals + microwaveable items (limited cafeteria hours), water + electrolytes (hydration). Price set from operator back-office. 30-45 minutes for 60-80 SKU snack + 40-60 SKU beverage pair." },
      { label: "STEP 8", title: "Test vend + walkthrough handoff", description: "Run test vend on every coil + card/cash/mobile payment cycle. Verify each vend rings through telemetry. Walkthrough with facilities + HR + EHS on service contact info, refund procedure, OSHA placement compliance, restock cadence. Photos for operator location record. 20-30 minutes." },
    ],
  }),
  specList({
    heading: "Warehouse install pre-survey checklist",
    items: [
      { label: "Placement vs forklift traffic", value: "≥5 ft buffer from designated forklift drive lanes. Breakroom alcoves, shipping/receiving offices, mezzanine landings preferred. Avoid corridor placements where forklifts pass — vibration damages cabinet over time + safety risk." },
      { label: "Dedicated 120V/15A or 20A circuit", value: "Within 6 ft of planned placement; dedicated breaker confirmed not shared with conveyor controls, dock leveler hydraulics, compressor banks, lighting circuits. Shared warehouse circuits trip breakers within days; dedicated is mandatory. Scope electrical pull if no suitable existing outlet." },
      { label: "Cellular signal at install location", value: "≥-90 dBm at exact placement. Steel-deck roofs + conductive racking attenuate signal interior of building; measure at install location with operator signal meter, not at loading dock or exterior wall. External antenna kit available if marginal." },
      { label: "Ambient temperature range", value: "Verify install location stays 50-95°F year-round. Warehouses without climate control swing 35-105°F seasonally; refrigerated units lose compressor life rapidly above 95°F ambient. Choose breakroom placement (HVAC-served) over open warehouse floor where possible." },
      { label: "Dust path from HVAC + dock", value: "Avoid placement directly downstream of HVAC return air sweeping warehouse dust into compressor intake. Document dust accumulation on adjacent surfaces; rotate cabinet 90° if needed to position intake away from dust path. Quarterly coil-cleaning still required regardless." },
      { label: "Delivery path width + door clearance", value: "≥36\" continuous width from receiving overhead door to install location. ≥80\" door height through path. Dock plate or grade-level entry for 600-900 lb hand-truck delivery. Forklift assist scheduled only if dock plate gap or long-aisle haul." },
      { label: "Floor surface + load rating", value: "Concrete or sealed flooring acceptable. Mezzanine installs require ≥150 lb/sq ft point-load rating verified with structural engineer or building plans. Most multi-story warehouse mezzanines are rated; verify before placement." },
      { label: "OSHA-adjacent considerations", value: "Avoid placement in OSHA-restricted areas (chemical storage, lockout/tagout zones, forklift charging bays). Confirm with EHS officer. Standard breakroom + shipping/receiving placements are unaffected; production-floor placements require EHS review." },
      { label: "3-shift access + restock window", value: "Confirm operator route driver access during planned restock cadence (typically 1-2× per week at active warehouse). After-hours access requires coordination with security or shift supervisor; document access procedure at install handoff." },
      { label: "Service contact + refund procedure", value: "Document operator service contact + 24h refund procedure for 3-shift workforce. Night-shift workers can't reach office-hours support; operator should offer mobile-app refund or text-based service request. Verify at proposal." },
    ],
  }),
  dimensionDiagram({
    heading: "Standard warehouse install dimensions",
    sub: "Reference dimensions for snack + beverage pair at warehouse breakroom or shipping/receiving alcove. Forklift buffer adds to standard footprint requirements.",
    machineName: "Snack + beverage pair (warehouse install)",
    width: "80 in (40\" each, paired)",
    depth: "35 in",
    height: "72 in",
    footprint: "19.4 sq ft",
    weightEmpty: "1,200-1,400 lb (pair)",
    weightLoaded: "1,700-1,900 lb (pair)",
    doorwayClearance: "36 in",
    note: "Allow ≥6\" rear clearance + ≥36\" front clearance + ≥5 ft buffer from forklift drive lane. Path width through warehouse ≥36\" continuous, ≥52\" diagonal at right-angle turns. Dedicated 120V/20A circuit within 6 ft of each cabinet.",
  }),
  tipCards({
    heading: "Five warehouse install mistakes",
    sub: "Each documented in operator post-install service tickets. All preventable with pre-install site survey discipline.",
    items: [
      { title: "Outlet shared with conveyor or dock equipment", body: "Existing outlet looks fine; turns out it's on the same circuit as conveyor controls or dock leveler hydraulics. Compressor cycling + dock-equipment surges trip the breaker within days. Confirm dedicated circuit with maintenance team during site survey — not on install day." },
      { title: "Placement in forklift traffic path", body: "Corridor placement looks convenient; turns out forklifts pass within 2-3 feet during shift changes. Vibration damages cabinet over time + creates safety risk + machine gets bumped. Move to breakroom alcove, shipping/receiving office, or mezzanine landing with ≥5 ft buffer from drive lanes." },
      { title: "Cellular dead zone in mezzanine corner", body: "Signal looks adequate at loading dock; drops below threshold at mezzanine breakroom corner due to steel deck + conductive racking attenuation. Measure signal at exact install location during survey; add external antenna kit ($200-400) if marginal. Discovering this post-install costs return visit + delayed telemetry." },
      { title: "Refrigerated unit downstream of HVAC return", body: "Refrigerated cabinet positioned downstream of HVAC return air sweeping warehouse dust into compressor intake. Coils foul within 30-60 days; energy draw increases 15-25%; compressor life shortens. Rotate cabinet or relocate; verify dust path during survey." },
      { title: "No 3-shift planogram tuning", body: "Operator loads standard office planogram; night-shift workers get day-shift product mix. Stockouts on energy snacks + portable hot meals + electrolytes; surplus on traditional candy + chips. Specify 3-shift planogram requirement at proposal; verify operator capability to tune across shifts." },
    ],
  }),
  inlineCta({
    text: "Want the warehouse vending install checklist (site survey + electrical scope + cellular + 3-shift planogram)?",
    buttonLabel: "Get the warehouse install checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support warehouse and distribution-center vending installs — including pre-install site survey discipline, electrical scope coordination, cellular signal verification at interior placements, dust-mitigation positioning, OSHA-adjacent placement review, and 3-shift planogram tuning for industrial workforces. The benchmarks reflect operator-side data from current warehouse and DC accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does a warehouse vending install take?", answer: "2-4 hours per machine including site verification + placement + electrical hookup + cellular setup + planogram load + walkthrough. Two-machine snack/beverage pair: 4-6 hours. Multi-machine fleet across multi-facility distribution operator: phased rollout over 30-60 days.", audience: "Facilities" },
      { question: "What's different about installing in a warehouse vs an office?", answer: "Five differences: physical environment (dust, vibration, ambient swings), electrical (long conduit, 277V service, 3-shift load), placement (front-of-line, shipping/receiving — not corridors), access (OSHA, forklift), cellular (steel deck, RF dead zones). Each adds to install procedure vs standard office install.", audience: "Facilities" },
      { question: "Do we need a dedicated electrical circuit?", answer: "Yes. Dedicated 120V/15A or 20A circuit within 6 ft of placement, confirmed not shared with conveyor controls, dock equipment, compressor banks, or lighting. Warehouse shared circuits trip breakers within days. If no suitable outlet exists, scope electrical pull from nearest distribution panel before delivery.", audience: "Facilities" },
      { question: "What about cellular signal for telemetry?", answer: "Measure at exact install location during site survey, not at loading dock. Steel-deck roofs + conductive racking attenuate signal interior of building. Target ≥-90 dBm; if marginal, add external antenna kit ($200-400 + 20-30 min added install time). Modern operators standard.", audience: "Facilities" },
      { question: "Where should the machine go relative to forklift traffic?", answer: "≥5 ft buffer from designated forklift drive lanes. Breakroom alcoves, shipping/receiving offices, mezzanine landings preferred. Avoid corridor placements where forklifts pass — vibration damages cabinet over time + creates safety risk. Confirm with EHS officer during survey.", audience: "EHS" },
      { question: "Are there OSHA considerations for placement?", answer: "Avoid OSHA-restricted areas (chemical storage, lockout/tagout zones, forklift charging bays). Standard breakroom + shipping/receiving placements are unaffected. Production-floor placements require EHS review for clearance + restock-route safety. Document EHS sign-off at install handoff.", audience: "EHS" },
      { question: "How does the operator handle 3-shift workforces?", answer: "Initial planogram loaded for 3-shift mix (cold beverages, high-energy snacks, portable hot meals, water + electrolytes). Operator service contact + 24h refund procedure documented for night-shift access — mobile-app refund or text-based service request. Verify operator capability at proposal.", audience: "HR" },
      { question: "What if our warehouse isn't climate-controlled?", answer: "Verify install location stays 50-95°F year-round. Refrigerated units lose compressor life above 95°F ambient. Choose breakroom placement (HVAC-served) over open warehouse floor where possible. If no HVAC-served option, specify ambient-rated equipment + accept shorter service life.", audience: "Facilities" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "OSHA — warehouse safety standards", url: "https://www.osha.gov/warehousing", note: "Federal standards for placement near forklift traffic + chemical zones" },
      { label: "NAMA — operator install best practices", url: "https://www.namanow.org/", note: "Industry-standard install procedures and route-tech certification" },
      { label: "ASHRAE — refrigeration setpoint and ambient standards", url: "https://www.ashrae.org/", note: "Industry standard for refrigeration system operation at warehouse ambient ranges" },
      { label: "ENERGY STAR — commercial refrigeration", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Certification standard for refrigerated vending at industrial sites" },
      { label: "Cantaloupe / Nayax / 365 Retail Markets — telemetry pairing documentation", url: "https://www.cantaloupe.com/", note: "Cellular modem activation and signal verification procedures" },
    ],
  }),
  relatedGuides({
    heading: "Related warehouse and logistics guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending energy consumption at warehouses", description: "Why warehouse vending uses 30-50% more energy than office placements — and how to specify it down.", href: "/vending-for-logistics-hubs/vending-energy-consumption-warehouses" },
      { eyebrow: "Operations", title: "Vending machine security at industrial sites", description: "Theft, vandalism, and access-control considerations for warehouse and DC vending.", href: "/vending-for-logistics-hubs/vending-machine-security-industrial-sites" },
      { eyebrow: "Hub", title: "All warehouse and logistics vending guides", description: "Placement, energy, security, planogram, and operations guidance across warehouses, DCs, and logistics hubs.", href: "/vending-for-logistics-hubs" },
    ],
  }),
]);
process.exit(0);
