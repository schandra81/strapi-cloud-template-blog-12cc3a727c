import { seedPost, tldr, statStrip, comparisonTable, specList, costBreakdown, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-businesses-pay-for-vending-electricity", [
  tldr({
    heading: "Do businesses pay for the electricity their vending machines use — and how does that get handled in contracts?",
    paragraph:
      "Yes — under nearly all standard third-party vending contracts in the United States, the host business pays for electricity its vending machines consume. The vending operator owns and services the equipment, stocks product, and shares revenue with the host through a commission; the host provides the placement, the electrical outlet, and pays the resulting energy bill as part of normal facility utility costs. The pass-through is not itemized on the operator invoice (there is no operator invoice in a third-party arrangement — the operator pays the host commission, not the reverse). It shows up on the host's normal commercial electric bill rolled into total facility consumption. Annual electricity cost varies substantially by equipment type: refrigerated beverage machines at federal-baseline draw 4,000-5,000 kWh per year ($480-$600 annually at $0.12/kWh typical commercial rate); ENERGY STAR refrigerated beverage at 2,400-3,200 kWh ($288-$384 annually); snack-only machines draw 350-750 kWh ($42-$90 annually). At high commercial electricity rates ($0.18-$0.30/kWh — California, Northeast, Hawaii, parts of CA), refrigerated machine annual cost rises to $700-$1,500. Some contract structures shift the cost: full-service or 'turnkey' contracts at high-volume corporate placements occasionally include operator-paid electricity (priced into commission rate); franchise vending contracts (host purchases equipment and operates it) shift all electricity to the host with no offset. The decisions that matter for the host: specify ENERGY STAR equipment at proposal (cuts cost 30-45%), specify variable-speed compressor and occupancy-sensor LED, ensure climate-controlled placement with adequate rear clearance, and verify the contract is explicit about electricity responsibility. At LEED-certified buildings, federal procurement contracts, and ESG-led tenant accounts, ENERGY STAR equipment is non-negotiable; some federal facility standards mandate it.",
    bullets: [
      { emphasis: "Standard third-party vending = host pays electricity:",
        text: "Operator owns equipment + stocks product + pays commission to host. Host provides placement + outlet + pays electric bill. Pass-through not itemized — shows up on normal commercial electric bill." },
      { emphasis: "Annual electricity cost varies 4-10x by equipment type:",
        text: "$42-$90 snack-only, $288-$384 ENERGY STAR refrigerated beverage, $480-$600 federal-baseline beverage, $700-$1,500 at high-rate states (CA, Northeast, HI)." },
      { emphasis: "ENERGY STAR + variable-speed compressor + occupancy-sensor LED cut cost 30-45%:",
        text: "Specify at proposal. Mandatory at LEED-certified buildings, federal procurement contracts, and ESG-led tenant accounts. Cross-check ENERGY STAR certification against EPA list." },
    ],
  }),
  statStrip({
    heading: "Vending electricity cost benchmarks",
    stats: [
      { number: "$42-$1,500", label: "annual host cost range", sub: "snack to refrigerated, rate range", accent: "blue" },
      { number: "30-45%", label: "ENERGY STAR operating cost cut", sub: "vs federal baseline", accent: "green" },
      { number: "$0.06-$0.36", label: "commercial rate range per kWh", sub: "TX low to HI high", accent: "blue" },
      { number: "$0", label: "operator-paid electricity", sub: "in standard contracts (host pays)", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Who pays for vending electricity under different contract structures",
    sub: "Contract structure determines electricity-cost responsibility. Standard third-party vending puts the cost on the host. Some specialty structures shift it.",
    headers: ["Contract structure", "Equipment owner", "Electricity pays", "Notes"],
    rows: [
      ["Standard third-party vending (host commission)", "Operator", "Host (built into facility utility bill)", "Standard arrangement at most commercial placements"],
      ["Full-service / 'turnkey' high-volume corporate", "Operator", "Operator (priced into commission rate)", "Occasional at large corporate accounts"],
      ["Branded bottler-supplied cooler (Coke / Pepsi)", "Bottler", "Host (electricity is host obligation)", "Bottler provides branded equipment in exchange for branding rights"],
      ["Franchise vending (host purchases equipment)", "Host", "Host", "Host owns equipment and operates; full electricity responsibility"],
      ["Operator-leased equipment to host", "Operator (until purchase option)", "Host", "Lease-to-own structures; host pays electricity throughout"],
      ["Government / institutional placement", "Operator", "Host (institution)", "Federal procurement standard; ENERGY STAR mandatory"],
      ["Micro-market or AI cooler wall (operator-funded)", "Operator", "Host", "Same as standard third-party — host pays electricity"],
    ],
  }),
  costBreakdown({
    heading: "Annual electricity cost: typical vending machine equipment types",
    sub: "Annual operating cost the host pays at common commercial electricity rates. ENERGY STAR equipment cuts the cost 30-45% versus federal baseline.",
    items: [
      { label: "Snack-only LED lighting (400 kWh/yr) at $0.12/kWh", amount: "$48/yr" },
      { label: "Snack-only LED lighting (400 kWh/yr) at $0.25/kWh (CA / NE)", amount: "$100/yr" },
      { label: "Federal-baseline refrigerated beverage (4,500 kWh) at $0.08/kWh (TX / ID)", amount: "$360/yr" },
      { label: "Federal-baseline refrigerated beverage (4,500 kWh) at $0.12/kWh (typical)", amount: "$540/yr" },
      { label: "Federal-baseline refrigerated beverage (4,500 kWh) at $0.25/kWh (CA / NE)", amount: "$1,125/yr" },
      { label: "ENERGY STAR refrigerated beverage (2,800 kWh) at $0.08/kWh", amount: "$224/yr" },
      { label: "ENERGY STAR refrigerated beverage (2,800 kWh) at $0.12/kWh", amount: "$336/yr" },
      { label: "ENERGY STAR refrigerated beverage (2,800 kWh) at $0.25/kWh (CA / NE)", amount: "$700/yr" },
      { label: "Federal-baseline frozen / ice cream (6,500 kWh) at $0.12/kWh", amount: "$780/yr" },
      { label: "ENERGY STAR refrigerated combo (3,500 kWh) at $0.12/kWh", amount: "$420/yr" },
    ],
    totalLabel: "Annual host electricity cost ranges across equipment + rate combinations",
    totalAmount: "$48-$1,125",
  }),
  specList({
    heading: "Vending electricity contract and equipment specifications",
    items: [
      { label: "Standard contract structure (host pays)", value: "Under nearly all standard third-party vending contracts, the host business pays electricity its vending equipment consumes. The vending operator owns equipment + services + stocks product + pays commission to host. The host provides placement + electrical outlet + pays facility electric bill. Electricity is not itemized — it's part of normal commercial utility consumption, with vending equipment as one of many plug loads." },
      { label: "ENERGY STAR equipment (the biggest cost lever)", value: "ENERGY STAR certified refrigerated beverage machines draw 40%+ less energy than federal baseline (10 CFR Part 431 Subpart Q minimum standard). Annual operating cost $200-$400 lower per refrigerated machine at typical commercial rates ($0.10-$0.14/kWh); $400-$900 lower at high commercial rates ($0.18-$0.30/kWh). Verify ENERGY STAR certification at proposal — cross-check model numbers against EPA certified product list at energystar.gov." },
      { label: "Variable-speed compressor specification", value: "Variable-speed compressors (standard on ENERGY STAR equipment) cycle to match thermal load and draw substantially less than fixed-speed compressors at typical commercial duty. Modern refrigeration uses low-GWP refrigerants (R-290 propane, R-744 CO2) — EPA AIM Act phasedown of HFCs makes R-290/R-744 transition increasingly standard regardless of immediate energy benefit." },
      { label: "Occupancy-sensor LED on snack machines", value: "Snack-only machine energy is dominated by display lighting. LED display lighting (350-500 kWh/yr) replaces fluorescent (600-750 kWh/yr) in modern equipment. Occupancy-sensor LED (250-400 kWh/yr) turns off lighting when no customer is present — meaningful savings at low-traffic placements. Specify LED at minimum; occupancy-sensor LED at sustainability-led placements." },
      { label: "Climate-controlled placement", value: "Climate-controlled placement (50-85°F ambient) supports compressor efficiency. Compressor work scales with inlet temperature — every 10°F higher ambient adds 8-15% to refrigeration energy draw. Non-climate-controlled industrial placements (95-105°F summer ambient) substantially increase energy draw. Adequate ventilation (≥6 in rear clearance, no HVAC dust path) preserves efficiency." },
      { label: "Local commercial electricity rates", value: "Commercial electricity rates vary 3-4x across US: low-cost rate states (TX, ID, NV, KY) at $0.06-$0.09/kWh; typical commercial ($0.10-$0.14/kWh) across most states; high-cost (CA, MA, NY, RI, NH) at $0.18-$0.27/kWh; HI and parts of CA at $0.28-$0.36/kWh. Same equipment costs 4-5x more annually to operate in HI vs TX. Rate matters substantially in equipment-selection economics." },
      { label: "Full-service contract option (operator-paid electricity)", value: "At occasional high-volume corporate placements with operator-paid electricity arrangements, the cost is priced into a lower commission rate (effectively shifting host commission from 15% to 8-10% to cover operator-borne electricity). Less common but available at large corporate accounts where utility-meter access is impractical. Verify availability at proposal." },
      { label: "LEED / ESG / federal procurement requirements", value: "LEED-certified buildings often require ENERGY STAR vending equipment for plug-load energy credit documentation. Federal procurement contracts mandate ENERGY STAR per Federal Acquisition Regulation (FAR) Part 23. Corporate ESG accounts increasingly require ENERGY STAR for CDP reporting and TCFD disclosures. Verify ENERGY STAR + AIM Act-compliant refrigerant at proposal." },
      { label: "Measuring actual electricity consumption", value: "Most hosts don't sub-meter vending equipment — it's rolled into facility utility consumption. For sustainability reporting or cost allocation, facility manager can install plug-load monitor ($75-$200, Kill A Watt or similar) for 30-day measurement; multiply 12x for annual estimate. EPA EnergyGuide labels on ENERGY STAR equipment provide annual kWh estimate at purchase. Modern operators with telemetry can report equipment-specific energy estimates." },
      { label: "Outlet and electrical infrastructure responsibility", value: "Host provides electrical outlet (typically dedicated 20A circuit for refrigerated equipment; standard 15A for snack-only). Surge protection mandatory. Host responsibility for electrical infrastructure to outlet; operator responsibility for equipment plug-in and operation. Documented in contract; coordinated at install survey." },
    ],
  }),
  decisionTree({
    heading: "Should you specify ENERGY STAR equipment in your vending contract?",
    question: "Are you a LEED-certified building, federal procurement contract holder, ESG-led tenant, high-commercial-rate state placement ($0.18+/kWh — California, Northeast, Hawaii), or simply seeking to minimize facility utility cost?",
    yesBranch: {
      title: "Specify ENERGY STAR + AIM Act-compliant refrigerant at proposal",
      description: "Annual electricity savings $200-$900 per refrigerated machine depending on rate. Operating cost differential pays back ENERGY STAR equipment premium in 2-3 years at high-rate placements. Plus LEED documentation alignment, federal procurement eligibility, and AIM Act refrigerant phasedown alignment. Specify in RFP; verify against EPA certified product list at energystar.gov.",
      finalTone: "go",
      finalLabel: "ENERGY STAR specified",
    },
    noBranch: {
      title: "Standard equipment at next replacement cycle",
      description: "At typical commercial rates ($0.10-$0.14/kWh) and standard commercial placements without LEED / federal / ESG requirements, operating cost differential is $200-$300 annually per refrigerated machine. Specify ENERGY STAR at next equipment replacement cycle; don't necessarily replace working equipment ahead of lifecycle. Verify operator capability to deploy ENERGY STAR at routine refresh.",
      finalTone: "stop",
      finalLabel: "Next refresh cycle",
    },
  }),
  tipCards({
    heading: "Five vending electricity-cost mistakes hosts make",
    sub: "Each documented in facility-manager post-implementation reviews and energy-audit findings. All preventable with equipment specification and contract discipline.",
    items: [
      { title: "Not specifying ENERGY STAR at proposal", body: "Operators sometimes default to federal-baseline equipment because it's lower-cost on the operator side. ENERGY STAR equipment cuts host electricity cost 30-45%. Specify ENERGY STAR in RFP; verify model numbers against EPA certified product list. Don't accept operator assertion without verification." },
      { title: "Accepting legacy pre-2009 equipment at older placements", body: "Legacy pre-2009 equipment draws 30-50% more energy than ENERGY STAR equivalent. Some operators run legacy equipment at placements willing to accept it; equipment is depreciated on operator side. Specify ENERGY STAR at proposal; refuse legacy equipment unless replacement is on a near-term schedule." },
      { title: "Placing refrigerated equipment in hot ambient environment", body: "Non-climate-controlled industrial and outdoor placements (95-105°F summer ambient) raise refrigeration energy draw 25-40% vs climate-controlled placements. Climate-controlled breakroom or hallway placement (50-85°F) preserves efficiency. Outdoor / yard placements warrant industrial-rated equipment with high-ambient compressor specification." },
      { title: "Inadequate ventilation clearance behind equipment", body: "Minimum ≥6 in rear clearance for condenser airflow. Equipment pushed against walls or wedged into alcoves loses airflow and forces longer refrigeration cycles; energy draw rises 10-20%. Verify clearance at install; relocate or rotate equipment if cramped. Coordinated at install survey." },
      { title: "Not specifying contract language on electricity responsibility", body: "Standard third-party contracts assume host pays electricity, but some contracts are ambiguous or shift the assumption. Verify contract explicitly addresses electricity responsibility, surge protection responsibility, and dedicated-circuit specification. Document electrical infrastructure scope at install survey." },
    ],
  }),
  inlineCta({
    text: "Want the vending electricity-cost framework — contract language, ENERGY STAR specifications, and rate-state cost estimates?",
    buttonLabel: "Get the electricity framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help facility managers, procurement teams, and property managers structure vending contracts with appropriate electricity-responsibility language — including contract structure selection (third-party standard, full-service turnkey, branded bottler-supplied, franchise), ENERGY STAR equipment specification verification, variable-speed compressor and occupancy-sensor LED requirements, climate-controlled placement coordination, electrical infrastructure scoping, and LEED / federal procurement / ESG compliance. The benchmarks reflect operator-side data, EPA ENERGY STAR certified product list, and federal energy conservation standards.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do businesses pay for vending electricity?", answer: "Yes — under nearly all standard third-party vending contracts, the host business pays electricity its vending equipment consumes. The vending operator owns equipment + services + stocks product + pays commission to host. Host provides placement + outlet + pays electric bill as part of normal facility utility costs. Electricity not itemized on operator side.", audience: "Procurement" },
      { question: "How much does it cost?", answer: "Annual electricity cost varies by equipment type. Snack-only: $42-$100. ENERGY STAR refrigerated beverage: $224-$700 across rates. Federal-baseline refrigerated beverage: $360-$1,125. Frozen / ice cream: $520-$1,500. Higher at high commercial rate states (California, Northeast, Hawaii).", audience: "Facility Managers" },
      { question: "Are there contract structures where the operator pays?", answer: "Occasionally. Full-service or 'turnkey' contracts at high-volume corporate placements sometimes include operator-paid electricity (priced into a lower commission rate). Less common but available at large corporate accounts where utility-meter access is impractical. Verify at proposal.", audience: "Procurement" },
      { question: "What about branded bottler-supplied coolers (Coke / Pepsi)?", answer: "Host still pays electricity. The bottler provides branded equipment in exchange for branding rights and beverage exclusivity, but electricity is host obligation just like any other vending equipment. Verify in branded supplier agreement.", audience: "Procurement" },
      { question: "How do we minimize electricity cost?", answer: "Specify ENERGY STAR equipment at proposal (cuts cost 30-45%). Specify variable-speed compressor + occupancy-sensor LED. Ensure climate-controlled placement (50-85°F ambient). Adequate rear clearance (≥6 in) for condenser airflow. Coordinate at install survey.", audience: "Facility Managers" },
      { question: "Is ENERGY STAR required at LEED buildings?", answer: "Often required. LEED-certified buildings often require ENERGY STAR vending equipment for plug-load energy credit documentation. Federal procurement contracts mandate ENERGY STAR per FAR Part 23. Corporate ESG accounts increasingly require ENERGY STAR for CDP reporting and TCFD disclosures.", audience: "HR / Facilities" },
      { question: "Can we measure actual consumption?", answer: "Most hosts don't sub-meter — it's rolled into facility consumption. For reporting, install a plug-load monitor ($75-$200) for 30-day measurement; multiply 12x for annual estimate. ENERGY STAR labels on equipment provide annual kWh estimate at purchase. Modern operators with telemetry can report equipment-specific estimates.", audience: "Facility Managers" },
      { question: "What about electrical infrastructure?", answer: "Host provides outlet (dedicated 20A circuit for refrigerated; standard 15A for snack-only). Surge protection mandatory. Host responsibility for electrical infrastructure to outlet; operator responsibility for equipment operation. Coordinated at install survey.", audience: "IT" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ENERGY STAR — Refrigerated Beverage Vending Machines", url: "https://www.energystar.gov/products/refrigerated_beverage_vending_machines", note: "Federal certified product list and consumer/business guidance" },
      { label: "DOE — 10 CFR Part 431 Subpart Q Refrigerated Beverage Vending Machines", url: "https://www.energy.gov/eere/buildings/refrigerated-beverage-vending-machines", note: "Federal energy conservation standards for vending equipment" },
      { label: "U.S. Energy Information Administration — Electric Power Monthly", url: "https://www.eia.gov/electricity/monthly/", note: "Authoritative source for state-by-state commercial electricity rate data" },
      { label: "EPA AIM Act — HFC Phasedown", url: "https://www.epa.gov/climate-hfcs-reduction", note: "American Innovation and Manufacturing Act of 2020 HFC phasedown rules" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry guidance on vending contract structures and host-operator responsibility" },
    ],
  }),
  relatedGuides({
    heading: "Related vending FAQ guides",
    items: [
      { eyebrow: "Sister guide", title: "How much electricity does a vending machine use", description: "Annual kWh consumption by equipment type and operating environment.", href: "/vending-faq/how-much-electricity-does-a-vending-machine-use" },
      { eyebrow: "Operations", title: "What if a vending machine is rarely used", description: "Underperforming placement options including relocation and removal.", href: "/vending-faq/what-if-a-vending-machine-is-rarely-used" },
      { eyebrow: "Hub", title: "All vending FAQ guides", description: "Common questions across contracts, equipment, payments, and operations.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
