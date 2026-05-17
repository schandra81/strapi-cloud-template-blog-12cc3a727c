import { seedPost, tldr, statStrip, comparisonTable, specList, dimensionDiagram, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-machine-size-apartment-layout", [
  tldr({
    heading: "How do vending machine dimensions affect apartment layout decisions?",
    paragraph:
      "Vending machine size is the most under-discussed apartment vending decision — and the one that produces the most retrofit pain when it's gotten wrong. Modern combo machines run 39-50 inches wide, 33-36 inches deep, and 72-78 inches tall, weighing 600-900 pounds empty and 1,000-1,500 pounds loaded. AI vending coolers add 8-12 inches of width and 200-400 pounds. These dimensions interact with apartment floorplans in ways operators and property managers often discover only at delivery day: doorway clearances that don't accommodate a 36-inch-deep cabinet, mailroom alcoves too shallow for the front-door swing, clubhouse zones with floor loading limits that vending exceeds, elevator dimensions that won't fit a 78-inch-tall cabinet, hallway turning radius too tight for delivery dolly maneuvering. The right approach is to make machine sizing decisions during placement planning — measure the placement zone before equipment is specified, verify delivery path (doorway widths, hallway widths, elevator interior, turning radii) end-to-end, confirm floor loading capacity with property structural drawings, and design the placement to accommodate front-door swing (typically 30-36 inches clear in front of machine). Modern operators with multifamily experience handle this well; operators new to apartments often skip the survey and produce delivery-day disappointments.",
    bullets: [
      { emphasis: "Combo machines are bigger than people assume:", text: "39-50 in wide × 33-36 in deep × 72-78 in tall. 600-900 lbs empty, 1,000-1,500 lbs loaded. AI coolers add 8-12 in width + 200-400 lbs." },
      { emphasis: "Layout pitfalls happen at delivery day:", text: "Doorway clearance, alcove depth, floor loading, elevator dimensions, hallway turning radius. Skip the survey and you discover problems on delivery day." },
      { emphasis: "Survey before spec:", text: "Operator should survey the placement zone and full delivery path before specifying equipment. Modern multifamily operators do this; new-to-apartments operators often don't." },
    ],
  }),
  statStrip({
    heading: "Apartment vending dimensional benchmarks",
    stats: [
      { number: "39-50 in", label: "combo machine width", sub: "varies by capacity", accent: "blue" },
      { number: "33-36 in", label: "combo machine depth", sub: "front-door swing not included", accent: "blue" },
      { number: "72-78 in", label: "combo machine height", sub: "elevator clearance matters", accent: "orange" },
      { number: "1,000-1,500 lbs", label: "loaded machine weight", sub: "floor loading consideration", accent: "orange" },
    ],
  }),
  dimensionDiagram({
    heading: "Reference combo vending machine dimensions",
    sub: "Mid-capacity combo machine commonly deployed at multifamily properties. Specific dimensions vary by manufacturer and model — confirm with operator at spec stage.",
    machineName: "Mid-capacity combo vending machine (reference)",
    width: "39-50 in (99-127 cm)",
    depth: "33-36 in (84-91 cm)",
    height: "72-78 in (183-198 cm)",
    footprint: "9-13 sq ft (machine + 30-36 in front swing zone)",
    weightEmpty: "600-900 lbs (272-408 kg)",
    weightLoaded: "1,000-1,500 lbs (454-680 kg)",
    doorwayClearance: "36 in min recommended (42 in preferred for delivery dolly)",
    note: "Add 30-36 in clearance in front for door swing + service access. Add 8-12 in width for AI vending cooler variant. Confirm exact dimensions with operator at spec stage; specific manufacturer/model dimensions vary.",
  }),
  comparisonTable({
    heading: "Apartment placement zones — dimensional fit analysis",
    sub: "Common multifamily placement zones and the dimensional gotchas that affect equipment selection.",
    headers: ["Placement zone", "Typical zone dimensions", "Combo machine fit", "AI cooler fit", "Common issues"],
    rows: [
      ["Mailroom alcove", "60-96 in wide, 30-48 in deep", "Tight — alcove depth often insufficient", "Often no", "Front-door swing exceeds alcove depth"],
      ["Leasing office adjacent", "Open area, 8+ ft clearance", { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }, "Foot traffic patterns + ADA path"],
      ["Clubhouse main floor", "Open area, 10+ ft clearance", { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }, "Floor loading at upper levels"],
      ["Fitness center entrance", "Variable, often tight", "Tight — verify dimensions", "Often no", "Doorway clearance + elevator path"],
      ["Pool area / outdoor", "Variable, weatherproof required", "Specialty NEMA 4 unit only", "Limited (cold-chain in heat)", "Weather rating + power infrastructure"],
      ["Per-floor placement (student)", "Lobby alcove, 4-6 ft wide", "Compact combo OK", "Often no (too wide)", "Hallway turning radius for delivery"],
      ["Laundry room", "Variable, often narrow", "Compact combo OK", "No (cold-chain in humidity)", "Humidity exposure + footprint"],
      ["Lobby (luxury)", "Large open, 12+ ft clearance", { icon: "check", text: "Yes" }, { icon: "check", text: "Yes" }, "Aesthetic + brand integration"],
    ],
  }),
  specList({
    heading: "Pre-installation dimensional survey checklist",
    items: [
      { label: "Placement zone dimensions", value: "Measure width × depth × height of available placement zone. Include any obstructions (columns, HVAC vents, electrical panels). Note any sloped floor or transitions. Photograph zone from multiple angles for operator review. Verify zone fits machine + 30-36 in front swing zone + service access." },
      { label: "Delivery path end-to-end", value: "Trace path from delivery truck access point to placement zone. Measure doorway widths (36 in min recommended; 42 in preferred), hallway widths, turning radii at corners, elevator interior dimensions (if applicable), threshold heights. Document any tight transitions that may require temporary door removal." },
      { label: "Floor loading capacity", value: "Loaded vending machine weighs 1,000-1,500 lbs concentrated on 4-6 sq ft footprint. Floor must support point load. Ground floor on concrete typically fine; upper floors may need structural verification. Check property drawings or engage structural engineer for older buildings or upper-floor placements." },
      { label: "Power infrastructure", value: "Dedicated 120V/15A or 20A circuit within 6 ft of placement (AI coolers may require 208V). Verify outlet placement and any required electrical work. Older buildings may need panel upgrade or new circuit run. Coordinate with property electrician before delivery." },
      { label: "Connectivity (cellular / WiFi)", value: "Telemetry and cashless payment require connectivity. Verify cellular signal strength at placement zone (some lower-floor or interior placements have weak signal); WiFi alternative if cellular insufficient. Operator handles in most cases; confirm at spec stage." },
      { label: "ADA accessibility path", value: "Accessible approach path to machine (36 in min clear width). Operable parts between 15-48 in from floor. Max 5 lbs force to operate. Cashless payment terminal at ADA-compliant height with tactile features. Verify at placement design, not after install." },
      { label: "Front-door swing zone", value: "Machine front door swings open 30-36 in for service access. This zone must remain clear at all times. Common issue: alcove depth fits machine but not door swing, causing service difficulties. Operator service techs need consistent access to front door swing zone." },
      { label: "Aesthetic integration", value: "At luxury and amenity-positioned properties, machine appearance affects amenity perception. Vinyl-wrap options matching property branding ($400-800 per machine). Cabinet finish (stainless, painted) coordinated with adjacent finishes. Confirm with property designer at spec stage." },
    ],
  }),
  tipCards({
    heading: "Six apartment vending sizing mistakes",
    sub: "Each is preventable with structured pre-installation survey. All have produced delivery-day disappointments at real properties.",
    items: [
      { title: "Specifying equipment before measuring the placement zone", body: "Operators that quote equipment before surveying the placement zone produce delivery-day disappointments. The placement zone (including delivery path, floor loading, power, and connectivity) must be measured first, then equipment specified to fit. Modern multifamily operators do this; new-to-apartments operators often skip it." },
      { title: "Underestimating front-door swing zone", body: "Machine fits the alcove, but the front door doesn't have room to swing open for service. Service techs struggle to access the machine; restock becomes slower and less thorough. Always design placement to accommodate 30-36 in clear in front of machine for door swing." },
      { title: "Forgetting elevator dimensions on upper-floor placements", body: "Elevator interior height too short for 78-in machine, or interior width too narrow for 50-in machine. Upper-floor placement becomes impossible without crane-and-window delivery (very expensive) or different equipment. Verify elevator dimensions at survey stage." },
      { title: "Floor loading on upper-floor or mezzanine placements", body: "Loaded vending machine concentrates 1,000-1,500 lbs on 4-6 sq ft footprint. Older buildings with wood-frame construction or unreinforced upper floors may not support this. Check property structural drawings or engage structural engineer before upper-floor placements." },
      { title: "Hallway turning radius too tight for delivery dolly", body: "36-in machine on a 48-in delivery dolly can't navigate a 90-degree turn in a 40-in hallway. Trace delivery path end-to-end with measured dolly+machine dimensions before delivery day. Some narrow-hallway placements require disassembly + on-site reassembly, adding hours and cost." },
      { title: "Ignoring aesthetic integration at luxury properties", body: "Standard-finish vending machine at a luxury property degrades amenity perception. Vinyl-wrap matching property branding ($400-800 per machine) is well worth the cost. Coordinate with property designer at spec stage; operator should support this routinely at multifamily accounts." },
    ],
  }),
  decisionTree({
    heading: "Can we fit a vending machine in this placement zone?",
    question: "Does the placement zone provide enough width + depth + ceiling height + front-door swing clearance for the chosen machine, AND is the full delivery path verified?",
    yesBranch: {
      title: "Proceed with equipment specification.",
      description: "With confirmed zone dimensions, delivery path, floor loading, power, and connectivity, equipment can be specified to fit. Operator finalizes machine selection, coordinates installation timeline, and confirms ADA + aesthetic integration. Standard installation workflow; modern multifamily operator handles this routinely.",
      finalTone: "go",
      finalLabel: "SPEC EQUIPMENT · SCHEDULE INSTALL",
    },
    noBranch: {
      title: "Adjust placement zone or equipment selection.",
      description: "If zone dimensions or delivery path don't fit standard equipment, options are: (a) modify placement zone (remove obstacles, widen doorway, etc.), (b) select smaller-footprint equipment (compact combo machine, narrow-format AI cooler), or (c) choose a different placement zone. Don't force equipment into an undersized zone — delivery-day problems and ongoing service difficulties result.",
      finalTone: "stop",
      finalLabel: "ADJUST · DON'T FORCE FIT",
    },
  }),
  inlineCta({
    text: "Want the apartment vending pre-installation survey checklist (dimensions, delivery path, floor loading, power, ADA)?",
    buttonLabel: "Get the survey checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported apartment vending installations across garden, mid-rise, luxury, student-housing, and senior-living properties for twelve years. The dimensional survey framework, delivery-path verification, and equipment-fit decision guidance reflect installation data from 80+ multifamily properties where pre-survey discipline prevented delivery-day problems.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How big is a typical apartment vending machine?", audience: "Property Managers", answer: "Combo machines run 39-50 inches wide, 33-36 inches deep, and 72-78 inches tall, weighing 600-900 pounds empty and 1,000-1,500 pounds loaded. AI vending coolers add 8-12 inches of width and 200-400 pounds. Always confirm exact dimensions with operator at spec stage — specific manufacturer/model dimensions vary." },
      { question: "What clearance do we need in front of a vending machine?", audience: "Property Managers", answer: "30-36 inches clear in front of machine for front-door swing during service. This zone must remain clear at all times. Common installation mistake: machine fits the alcove but front door can't swing for service access. Always design placement to accommodate door swing + service tech reach." },
      { question: "Can we put a vending machine in our mailroom alcove?", audience: "Property Managers", answer: "Often tight — mailroom alcoves are typically 30-48 inches deep, while combo machines are 33-36 inches deep plus 30-36 inches for front-door swing. Most mailroom alcoves can't accommodate full service access. Verify dimensions at survey stage; consider compact combo machine or alternative placement if alcove is too shallow." },
      { question: "What about upper-floor placements and floor loading?", audience: "Property Engineers", answer: "Loaded vending machine concentrates 1,000-1,500 lbs on 4-6 sq ft footprint. Ground floor on concrete typically fine; upper floors may need structural verification. Check property structural drawings or engage structural engineer for older buildings (pre-1980 wood-frame construction in particular) or upper-floor placements above mezzanines." },
      { question: "Do AI vending coolers have different dimensional requirements?", audience: "Property Managers", answer: "AI coolers run 8-12 inches wider than equivalent combo machines and weigh 200-400 pounds more. Power requirements may be different (some need 208V vs combo machine's 120V). Same front-door swing zone applies. Delivery path verification similar but tighter — wider cabinet means tighter clearances at delivery." },
      { question: "How do we handle elevator dimensions for upper-floor placements?", audience: "Property Managers", answer: "Verify elevator interior dimensions (width, depth, height, max load) against machine dimensions before scheduling delivery. Elevator interior height of 78+ inches required for full-height machines. Some properties require crane-and-window delivery for upper floors when elevators don't fit — expensive and disruptive. Survey at spec stage." },
      { question: "What aesthetic options do we have for apartment vending?", audience: "Property Owners", answer: "Vinyl-wrap matching property branding ($400-800 per machine) is standard at luxury and amenity-positioned properties. Cabinet finish options (stainless, painted, custom colors) coordinate with adjacent finishes. Coordinate with property designer at spec stage; operator should support routinely at multifamily accounts. Modest cost, significant amenity perception lift." },
      { question: "Who handles the dimensional survey?", audience: "Property Procurement", answer: "Operator should survey the placement zone and full delivery path before equipment is specified. Modern multifamily operators handle this routinely; new-to-apartments operators often skip it and produce delivery-day disappointments. Verify operator includes pre-installation survey in their proposal; require photographs and measurements documented." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ADA Standards for Accessible Design — Section 309 Operable Parts", url: "https://www.access-board.gov/ada/", note: "Federal standard for reach + force requirements applicable to vending machine placement" },
      { label: "NAMA — vending equipment specifications and installation best practices", url: "https://www.namanow.org/", note: "Trade association guidance on vending equipment dimensions and installation" },
      { label: "International Building Code — floor loading and structural requirements", url: "https://www.iccsafe.org/", note: "Building code standards for floor loading applicable to vending machine placements" },
      { label: "National Apartment Association — apartment amenity space planning", url: "https://www.naahq.org/", note: "Industry guidance on multifamily amenity space planning and dimensional considerations" },
      { label: "Multifamily Executive — installation and operations coverage", url: "https://www.multifamilyexecutive.com/", note: "Trade publication coverage of multifamily installation operations and amenity infrastructure" },
    ],
  }),
  relatedGuides({
    heading: "Related apartment vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Apartment complex vending solutions", description: "Sizing, equipment, and placement guidance for the full multifamily vending program design.", href: "/vending-for-apartments/apartment-complex-vending-solutions" },
      { eyebrow: "Equipment", title: "AI vending coolers in apartments", description: "Open-door fresh-food cooler format and the dimensional considerations specific to coolers vs combo machines.", href: "/ai-vending-coolers/ai-vending-coolers-in-apartments" },
      { eyebrow: "Hub", title: "All apartment vending guides", description: "Sizing, equipment, operators, contracts, and installation guidance across multifamily portfolios.", href: "/vending-for-apartments" },
    ],
  }),
]);
process.exit(0);
