import { seedPost, tldr, statStrip, timeline, specList, dimensionDiagram, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-are-vending-machines-installed", [
  tldr({
    heading: "How is a vending machine actually installed?",
    paragraph:
      "Vending installation is an operator-run 1-3 hour process per machine that follows a defined checklist: site survey → delivery → physical placement and leveling → electrical hookup → payment + telemetry configuration → planogram load → first vend test → walkthrough with host. The host provides three things only: building access, the confirmed install location, and a dedicated 120V outlet within 6 feet. The operator brings everything else (machine, hand truck, products, payment hardware, signage). Multi-machine installs (a corporate facility getting 8-12 machines) scale to 1-2 full days with a 2-3 person crew. Most installs are uneventful — the failure modes are all pre-install (missed clearance check, wrong outlet, narrow doorway), which is why the site survey matters more than the install itself.",
    bullets: [
      { emphasis: "1-3 hours per machine:", text: "Single snack/combo: 1.5 hr. Snack + beverage pair: 2-4 hr. Corporate fleet of 8-12: 1-2 full days." },
      { emphasis: "Host does three things:", text: "Access, location confirmation, dedicated outlet. Everything else is operator." },
      { emphasis: "First restock within 7 days:", text: "Initial planogram is loaded at install. First scheduled restock visit closes the loop and starts the recurring service cycle." },
    ],
  }),
  statStrip({
    heading: "Vending install benchmarks",
    stats: [
      { number: "2-4 wk", label: "delivery lead time", sub: "from contract sign to install", accent: "blue" },
      { number: "1-3 hr", label: "per machine install", sub: "site-prep dependent", accent: "orange" },
      { number: "600-800 lb", label: "empty machine weight", sub: "moved by hand truck", accent: "orange" },
      { number: "≥3 ft", label: "rear ventilation clearance", sub: "for refrigerated units", accent: "blue" },
    ],
  }),
  timeline({
    heading: "The 8-step install playbook",
    sub: "What happens from the moment the delivery truck arrives until the operator's tech leaves the building. Total elapsed time: 1-3 hours per machine.",
    howToName: "How to install a vending machine",
    totalTime: "PT3H",
    steps: [
      { label: "STEP 1", title: "Arrival + path verification", description: "Install crew arrives, confirms the delivery path with facilities (corridor widths, elevator access, threshold heights). Pre-survey notes are validated in person. 15 minutes." },
      { label: "STEP 2", title: "Unload + transport to install location", description: "Machine offloaded with lift-gate. Moved on hand truck (≥36\" path) or pallet jack (for long hauls or freight elevators). Most installs use hand truck; pallet jacks add 15-30 minutes for setup. 20-40 minutes." },
      { label: "STEP 3", title: "Position + level", description: "Machine placed in confirmed spot with ≥6\" rear clearance and ≥36\" front clearance. Leveling feet adjusted using a torpedo level on the cabinet top. Out-of-level machines mis-dispense (coil jam, drink misfeed). 15-20 minutes." },
      { label: "STEP 4", title: "Electrical connection", description: "Plug into dedicated 120V / 15A or 20A NEMA 5-15R outlet within 6 ft. Verify outlet is dedicated (not shared with microwave or copier) and on a known breaker. Refrigerated units pull 10-12 A; insufficient circuit means breaker trips within the first day. 10 minutes." },
      { label: "STEP 5", title: "Payment + telemetry configuration", description: "Card reader paired to operator's processor account; cellular modem connected to telemetry platform (Cantaloupe Seed, Nayax MoMa, 365 ADM). First handshake verifies signal strength; weak cellular = relocate or add external antenna. 15-25 minutes." },
      { label: "STEP 6", title: "Pricing + planogram load", description: "SKU prices set from operator's back-office system. Initial planogram loaded — typically 60-80 SKUs for a snack machine, 40-60 for a combo. Bottle / can / candy / chip SKUs sorted by coil number. 20-40 minutes depending on machine size." },
      { label: "STEP 7", title: "Test vend + payment cycle", description: "Run a test vend on every coil. Run a card payment, a bill payment, and a coin payment (if cash-enabled). Verify the vend rings through to telemetry. Any failed coil gets re-loaded or flagged for the next service visit. 10-20 minutes." },
      { label: "STEP 8", title: "Host walkthrough + handoff", description: "Account manager walks the primary facility contact through the machine — service contact info, troubleshooting basics, how to request restock or report issues. Photos taken for the operator's location record. 10-15 minutes." },
    ],
  }),
  specList({
    heading: "Pre-install site survey checklist — confirm before delivery day",
    items: [
      { label: "Delivery path", value: "Continuous ≥36\" wide from loading dock / entry to install location. Hand-truck navigability verified for any right-angle turns ≥52\" of diagonal swing." },
      { label: "Doorway height", value: "≥80\" through the entire delivery path. Low-clearance basement doors are the most common surprise." },
      { label: "Elevator (if needed)", value: "Inside-cab dimensions ≥40\" × 35\" with the door allowing tilt. Freight elevator strongly preferred for >700 lb machines." },
      { label: "Dedicated outlet", value: "120V / 15A or 20A NEMA 5-15R within 6 ft of the planned position. Confirmed not shared with high-draw appliances (microwave, copier, coffee maker)." },
      { label: "Rear clearance", value: "≥6\" behind the cabinet for compressor airflow. Refrigerated units lose compressor life ~30% with inadequate ventilation." },
      { label: "Front clearance", value: "≥36\" in front for service-door swing. <30\" forces partial-door service and slows route times significantly." },
      { label: "Floor surface + load", value: "Concrete, vinyl, sealed wood acceptable. Carpet under glides causes slow tilting. Suspended floors above 1st story need ≥150 lb/sq ft point-load rating." },
      { label: "Cellular signal", value: "≥-90 dBm at the install location for reliable telemetry. Operator can do a signal check during the site survey using a signal-strength meter or test modem." },
      { label: "Access hours", value: "Confirm install-day arrival window. After-hours installs (evenings, weekends) require facility coordination and may add a delivery surcharge." },
      { label: "Parking + loading", value: "Designated parking for the delivery vehicle. Loading-dock access preferred; street-level requires lift-gate and adds 15-25 minutes per machine." },
    ],
  }),
  dimensionDiagram({
    heading: "Standard install dimensions to plan around",
    sub: "Reference dimensions for a full-size snack/combo machine — the format used in ~80% of standard installs. Beverage coolers add 2-8\" of width; coffee machines are smaller.",
    machineName: "Full-size snack / combo (install reference)",
    width: "40 in",
    depth: "35 in",
    height: "72 in",
    footprint: "9.7 sq ft",
    weightEmpty: "600-700 lb",
    weightLoaded: "800-900 lb",
    doorwayClearance: "36 in",
    note: "Allow ≥6\" rear clearance and ≥36\" front clearance. Path width through the building should be ≥36\" continuous; ≥52\" diagonal at any right-angle turn. Outlet within 6 ft, dedicated 120V/15A circuit.",
  }),
  tipCards({
    heading: "Four install-day failure modes (all preventable)",
    sub: "Each shows up on operator service tickets every week. All catchable in a 15-minute pre-install walkthrough.",
    items: [
      { title: "The outlet is on the wrong circuit", body: "Outlet exists, looks fine, but it's on the same 15A circuit as a microwave. Compressor cycling trips the breaker within days. Confirm dedicated circuit with the facilities team before install day — not on install day." },
      { title: "Drop-ceiling tile lower than the floor plan suggests", body: "Architectural drawings show 8'6\" ceiling; drop-tile is set to 7'10\". Machine doesn't tilt through. Measure floor-to-tile (not floor-to-deck) in the actual install corridor before delivery." },
      { title: "Carpet under leveling feet", body: "Carpet looks fine at install, but the glides sink unevenly over weeks. Machine tilts, coils start mis-dispensing 30-60 days in. Either pull the carpet at the install footprint or use a rigid pad (operator brings a 1/4\" plywood square as standard practice)." },
      { title: "Cellular dead zone", body: "Signal looks adequate at the loading dock but drops below threshold at the install location (steel mesh in walls, basement, interior corner). Confirm with the operator's signal meter during site survey — adding an external antenna after install costs $200-400 and a return visit." },
    ],
  }),
  inlineCta({
    text: "Want the 28-point pre-install site survey checklist (PDF) you can hand to facilities before the operator arrives?",
    buttonLabel: "Get the site survey PDF",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has led or supported 400+ vending installs across office, healthcare, education, and government accounts over twelve years. The site-survey checklist and install-day timing benchmarks here are drawn directly from his standing install playbook.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does the host need to be involved during install?", answer: "Roughly 30-45 minutes total: 10 minutes at arrival to confirm location and unlock access, ~10 minutes mid-install if the team has questions, and 10-15 minutes at the end for the walkthrough and contact info handoff. Most of the install hour happens while the host is doing other work.", audience: "Hosts" },
      { question: "Who pays for the install?", answer: "Standard operator-commission service: operator pays. The cost is rolled into the operator's economics and offset by commission paid to the host. Self-purchased equipment (host buys the machine outright): host pays for delivery and install, typically $400-700 combined for a single machine.", audience: "Hosts" },
      { question: "What if the install location turns out to be unsuitable on install day?", answer: "Defer to the operator's recommendation. They'll either work the issue (relocate within the room, use a different outlet) or reschedule for a better location. Trying to force an install into a problematic spot costs everyone money in the form of early failures and rework. A 2-week reschedule is far cheaper than 6 months of intermittent problems.", audience: "Hosts" },
      { question: "Can I move the machine after install?", answer: "Yes but coordinate with the operator. Self-moves risk damage and void warranty on new equipment. Operator move-and-relevel is typically $200-400 if within the same building. Cross-building moves require full delivery treatment.", audience: "Hosts" },
      { question: "Do you need a permit to install a vending machine?", answer: "No general permit required for standard indoor installs. Some jurisdictions require business permits for the operator (state vending license, sales-tax registration). Outdoor installs may need building/zoning permits depending on locality. Operator handles the permitting on their side.", audience: "Hosts" },
      { question: "What's the lead time on getting a machine installed?", answer: "2-4 weeks from contract signing is standard. Faster (1-2 weeks) for established operator routes with inventory on hand; slower (4-6 weeks) for new operator-host relationships, custom equipment, or multi-machine deployments requiring coordination.", audience: "Hosts" },
      { question: "What tools should the install crew bring?", answer: "Heavy-duty hand truck (4-wheel for heavier units), torpedo level, basic multimeter for outlet verification, signal-strength meter for telemetry, lockable tool roll for screwdrivers and Allen keys, vendor-specific keys for the cabinet, rigid foam squares for floor leveling, anti-tip brackets, and basic cleaning supplies for the install location. Most operators carry a standard install kit per route.", audience: "Operators" },
      { question: "How do we handle install when the elevator is too small?", answer: "Three options: (1) freight elevator if the building has one (always preferred), (2) tilt-and-stair-walk for short flights with two trained techs (limited to ground-to-2nd-floor max), (3) crane lift for higher floors when freight elevator isn't available — adds $1,500-4,000 and 2-4 hours of coordination. Confirm during site survey, not on install day.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — install best practices and operator certification", url: "https://www.namanow.org/", note: "Industry-standard install checklist and route-tech training reference" },
      { label: "AMS — install guide for full-line combo and beverage equipment", url: "https://www.amsvendors.com/", note: "Manufacturer-specific install procedures and clearance requirements" },
      { label: "Crane National Vendors — site preparation guidelines", url: "https://www.cranepi.com/en/brands/national-vendors", note: "Outlet, ventilation, and floor-load specifications" },
      { label: "ADA Standards 2010 — accessibility checks for install placement", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Reach range and approach clearance verified during install" },
      { label: "Cantaloupe / Nayax / 365 Retail Markets — telemetry pairing documentation", url: "https://www.cantaloupe.com/", note: "Modem activation and first-handshake procedures" },
    ],
  }),
  relatedGuides({
    heading: "Related equipment and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "What are the dimensions of a vending machine?", description: "Full equipment-spec reference for snack, combo, beverage, fresh-food, and coffee machines — and the install clearances each one needs.", href: "/vending-faq/what-are-the-dimensions-of-a-vending-machine" },
      { eyebrow: "Operator guide", title: "How to buy your first vending machine", description: "Bobby Mac's 30-day buyer guide — sourcing, inspection, delivery scheduling, and the post-install tune-up.", href: "/vending-business-startup/how-to-buy-your-first-vending-machine" },
      { eyebrow: "Hub", title: "Vending FAQ — every common equipment question", description: "Refunds, security features, dimensions, weight, special outlets, and the operator-side answers hosts ask most often.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
