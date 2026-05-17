import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-are-vending-machines-cleaned", [
  tldr({
    heading: "How are vending machines actually cleaned — interior, exterior, refrigeration?",
    paragraph:
      "Vending machine cleaning has three layers operators handle on different schedules: (1) exterior surface cleaning (glass, payment hardware, exterior panels) — weekly minimum, often per route stop, with food-safe sanitizer; (2) interior compartment cleaning (snack tray, beverage cooler, helical coils) — monthly for snack machines, quarterly for beverage coolers, with deeper cleans annually; (3) refrigeration system cleaning (compressor coils, condensate drain, evaporator) — quarterly at standard placements, more often at dust-heavy environments (warehouses, kitchens, outdoor). Best-in-class operators document cleaning per machine in their CMMS (computerized maintenance management system); worst-in-class operators clean on operator memory. The customer-visible cleanliness signal (exterior glass, payment hardware, signage) drives most of the customer-perception impact; refrigeration and coil cleaning drives most of the operational reliability. Both matter.",
    bullets: [
      { emphasis: "Three cleaning layers, different cadences:", text: "Exterior weekly; interior monthly-quarterly; refrigeration quarterly. Each addresses different concerns (customer perception, food safety, operational reliability)." },
      { emphasis: "Customer-visible cleanliness drives perception:", text: "Glass, payment hardware, exterior panels visible to customers daily. Cleanliness here drives most of perception impact. Operators that skip exterior cleaning lose to operators that don't." },
      { emphasis: "Coil cleaning drives reliability:", text: "Compressor coils foul with dust/particulate. Dirty coils add 15-25% energy and shorten compressor life. Quarterly coil cleaning standard; warehouses need more frequent." },
    ],
  }),
  statStrip({
    heading: "Vending machine cleaning benchmarks",
    stats: [
      { number: "Weekly", label: "exterior cleaning", sub: "per route stop standard", accent: "blue" },
      { number: "Monthly", label: "interior snack tray", sub: "deeper clean quarterly", accent: "blue" },
      { number: "Quarterly", label: "refrigeration coils", sub: "more often at warehouses", accent: "blue" },
      { number: "15-25%", label: "energy increase", sub: "from dirty compressor coils", accent: "orange" },
    ],
  }),
  timeline({
    heading: "Vending machine cleaning cadence — full annual cycle",
    sub: "Cleaning cycles across exterior, interior, and refrigeration components. Best-in-class operators document each cycle per machine in CMMS.",
    howToName: "Maintain a vending machine annually",
    totalTime: "Ongoing throughout year",
    steps: [
      { title: "Per route stop (weekly)", description: "Exterior cleaning — glass, payment hardware, exterior panels. Food-safe sanitizer. Signage check. Cleanliness visible to customer drives perception. Service driver handles at restock.", duration: "5-10 min per machine" },
      { title: "Monthly maintenance pass (snack)", description: "Interior snack tray cleaning. Crumb removal from coils. Helical coil inspection (for sticking issues). Light interior dusting. Operator route schedules this monthly per machine.", duration: "15-25 min per machine" },
      { title: "Quarterly refrigeration service", description: "Compressor coil cleaning (dust/particulate removal). Condensate drain check. Evaporator coil inspection. Setpoint verification. Tightens energy use; prevents compressor failure.", duration: "30-45 min per machine" },
      { title: "Quarterly beverage cooler deeper clean", description: "Beverage cooler interior cleaning. Glass-front cleaning (interior). Door seal inspection. Temperature controller verification. Replenish refrigerant if needed (HVAC-certified).", duration: "30-45 min per machine" },
      { title: "Annual deep clean", description: "Complete machine breakdown. Coil chemical cleaning. Payment hardware inspection and update. Mechanical lubrication. Calibration. Some operators schedule annual deep clean overnight or during slow periods.", duration: "2-4 hr per machine" },
      { title: "Outdoor / warehouse adjustments", description: "Outdoor and warehouse placements need more frequent cleaning (dust, weather exposure). Coil cleaning monthly at warehouses; exterior cleaning weekly at outdoor placements minimum.", duration: "Adjust cadence per placement" },
    ],
  }),
  comparisonTable({
    heading: "Cleaning cadence by placement environment",
    sub: "Different environments produce different fouling rates. Operators adjust cadence per placement; placements that need more often shouldn't be on standard schedule.",
    headers: ["Environment", "Exterior cadence", "Interior cadence", "Refrigeration coil cadence"],
    rows: [
      ["Standard office", "Weekly", "Monthly", "Quarterly"],
      ["Library / academic building", "Weekly", "Monthly", "Quarterly"],
      ["Residence hall", "Weekly", "Monthly", "Quarterly"],
      ["Gym / rec center", "Weekly", "Monthly", "Quarterly"],
      ["Hospital / healthcare", "Weekly+ (visible cleanliness)", "Monthly", "Quarterly + TJC inspection"],
      ["Warehouse / industrial", "Weekly", "Monthly", { icon: "warn", text: "Quarterly (with attention to dust)" }],
      ["Outdoor / job site", "2-3× weekly", "Monthly", "Monthly (dust/weather)"],
      ["Airport / transit", "Daily where possible", "Monthly", "Quarterly"],
    ],
  }),
  specList({
    heading: "Vending machine cleaning specifications",
    items: [
      { label: "Exterior cleaning standard", value: "Food-safe sanitizer (quaternary ammonium or comparable). Soft cloths or microfiber. Don't use abrasive cleaners that damage glass or payment hardware. Cleanliness check at every route stop." },
      { label: "Interior snack tray cleaning", value: "Crumb removal from helical coils and tray. Inspect for sticky residue (broken candy, melted chocolate, etc.). Food-safe sanitizer for tray surfaces. Don't disturb stock during cleaning; clean during restock cycle." },
      { label: "Refrigeration compressor coil cleaning", value: "Vacuum and brush to remove dust from coil fins. Heavy fouling may require chemical coil cleaner (HVAC-rated). Don't use water spray directly on coils. Verify compressor draws normal current after cleaning." },
      { label: "Beverage cooler interior cleaning", value: "Empty cooler; sanitize interior surfaces with food-safe sanitizer. Glass-front interior cleaning. Door seal inspection (gaskets degrade; replace 2-3 years). Verify temperature setpoint after re-stock." },
      { label: "Payment hardware cleaning", value: "Microfiber cloth + isopropyl alcohol (70%) for touchscreens. Don't use harsh chemicals on EMV readers (damage coatings). Inspect for damage / wear; replace as needed. Critical for customer perception." },
      { label: "Outdoor / warehouse adjustments", value: "Outdoor placements need more frequent exterior cleaning (weather residue, bird droppings, dust). Warehouse placements need more frequent coil cleaning (industrial dust). Adjust cadence per placement environment." },
      { label: "Hospital / healthcare cleanliness standards", value: "Hospital placements require visible cleanliness at all times — daily exterior cleaning may be needed at high-traffic family/lobby placements. Coordinate with hospital infection control on protocols. Document cleaning for TJC inspection." },
      { label: "CMMS documentation", value: "Best-in-class operators document each cleaning cycle per machine in their CMMS (computerized maintenance management system). Provides audit trail; identifies machines drifting from schedule. Worst-in-class operators clean on memory and miss cycles." },
      { label: "Pest control coordination", value: "Standard pest control at vending placements coordinates with operator cleaning schedule. Identify any pest signs at cleaning; coordinate with facility pest-control if found. Common issue at warehouses and outdoor placements." },
    ],
  }),
  tipCards({
    heading: "Five vending cleaning mistakes",
    sub: "Each is documented in operator service-quality and customer-perception reviews. All preventable with documented cleaning protocols.",
    items: [
      { title: "Skipping exterior cleaning between restocks", body: "Glass, payment hardware, exterior panels visible to customers daily. Operators that skip exterior cleaning between restocks (relying only on quarterly deep clean) lose customer perception immediately. Exterior cleaning should happen at every route stop." },
      { title: "Annual-only refrigeration coil cleaning", body: "Dirty coils add 15-25% energy and shorten compressor life. Annual cleaning isn't sufficient at most placements. Quarterly is the standard; warehouses and outdoor placements need more frequent. Operator should track coil cleaning per machine in CMMS." },
      { title: "Harsh chemicals on payment hardware", body: "EMV readers and touchscreens have coatings that degrade from harsh chemicals (bleach, acetone, abrasive cleaners). Use microfiber + 70% isopropyl alcohol. Damaged payment hardware costs $300-800 to replace; cheap to prevent." },
      { title: "No CMMS documentation of cleaning", body: "Without documentation, operator can't audit cleaning schedule, identify machines drifting from cadence, or demonstrate compliance to hosts. Best-in-class operators document each cleaning per machine; worst-in-class clean on memory and miss cycles." },
      { title: "Same cadence at warehouse and office", body: "Warehouse environments produce 2-3× the dust/particulate of offices. Coil fouling rate is correspondingly higher. Same quarterly cleaning cadence underserves warehouses. Adjust cadence per placement environment; monthly coil cleaning at warehouses is the standard." },
    ],
  }),
  inlineCta({
    text: "Want the vending cleaning protocol framework (exterior, interior, refrigeration, documentation)?",
    buttonLabel: "Get the cleaning protocol framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine cleaning protocols across office, school, campus, hospital, warehouse, and airport placements — including exterior, interior, refrigeration, and CMMS documentation standards. The cleaning cadence benchmarks reflect operator-side service data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How often are vending machines cleaned?", answer: "Three cleaning layers on different cadences: exterior (weekly minimum, often per route stop), interior (monthly snack tray; quarterly beverage cooler), refrigeration (quarterly coil cleaning at standard placements; more often at warehouses and outdoor sites). Annual deep clean for complete maintenance.", audience: "Property Managers" },
      { question: "Who does the cleaning?", answer: "The operator. Service drivers handle exterior cleaning per route stop (weekly minimum). Operator service technicians handle interior monthly cleaning, refrigeration quarterly cleaning, and annual deep cleans. Cleaning is included in standard operator service contract.", audience: "Property Managers" },
      { question: "How important is refrigeration coil cleaning?", answer: "Critical for energy and reliability. Dirty coils add 15-25% energy and shorten compressor life. Quarterly cleaning at standard placements; monthly at warehouses and outdoor sites. Operator should track coil cleaning per machine in CMMS.", audience: "Facility Managers" },
      { question: "What about hospital placements?", answer: "Higher visibility cleanliness standard. Daily exterior cleaning may be needed at high-traffic family/lobby placements. Coordinate with hospital infection control on protocols. Document cleaning for TJC inspection. Operator should provide cleaning logs proactively.", audience: "Hospital Operations" },
      { question: "Are outdoor and warehouse vending machines cleaned differently?", answer: "Yes — more frequently. Outdoor placements need more frequent exterior cleaning (weather residue, bird droppings, dust). Warehouse placements need more frequent coil cleaning (industrial dust). Adjust cadence per placement environment; standard quarterly cadence underserves these environments.", audience: "Operators" },
      { question: "What if my vending machine looks dirty?", answer: "Contact the operator. Cleanliness is operator's responsibility under standard service contracts. Persistent dirtiness signals weak operator quality. Escalate to operator account manager; document with photo if needed. If recurring, consider exit at next contract review.", audience: "Property Managers" },
      { question: "What products are used for cleaning?", answer: "Food-safe sanitizer (quaternary ammonium or comparable) for surfaces in contact with food. Microfiber cloths + 70% isopropyl alcohol for payment hardware. Soft cloths for glass. Avoid abrasive cleaners that damage glass or hardware coatings.", audience: "Operators" },
      { question: "Should we audit operator cleaning practices?", answer: "Periodically yes. Walk machines with operator account manager quarterly. Verify exterior cleanliness, payment hardware condition, interior cleanliness during a service stop. Request CMMS cleaning logs for documentation review. Best-in-class operators welcome the verification.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FDA — food contact surface cleaning standards", url: "https://www.fda.gov/", note: "Federal food safety standards covering food contact surface cleaning" },
      { label: "AHAM — Association of Home Appliance Manufacturers refrigeration standards", url: "https://www.aham.org/", note: "Industry standards covering refrigeration equipment maintenance" },
      { label: "ASHRAE — refrigeration system maintenance standards", url: "https://www.ashrae.org/", note: "Industry standard for refrigeration system maintenance and cleaning" },
      { label: "NAMA — vending equipment maintenance best practices", url: "https://www.namanow.org/", note: "Industry guidance on vending cleaning and maintenance schedules" },
      { label: "TJC — The Joint Commission accreditation standards", url: "https://www.jointcommission.org/", note: "Hospital accreditation standards covering vending cleanliness" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Are there eco-friendly vending machines?", description: "Sustainable equipment, energy efficiency, and operational eco-design.", href: "/vending-faq/are-there-eco-friendly-vending-machines" },
      { eyebrow: "Operations", title: "Sanitation and compliance for hospital vending", description: "Food safety, infection control, and TJC alignment at hospital placements.", href: "/vending-for-healthcare/sanitation-and-compliance-for-hospital-vending" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, contracts, installation, and operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
