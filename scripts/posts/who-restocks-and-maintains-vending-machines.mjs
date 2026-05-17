import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("who-restocks-and-maintains-vending-machines", [
  tldr({
    heading: "Who actually restocks and maintains vending machines?",
    paragraph:
      "The short answer: the vending operator runs the entire restock and maintenance program — not the property, not the machine manufacturer, not a third party. The operator is the single accountable party for stocking product, collecting cash, processing payments, refilling refrigerated equipment, cleaning machines, repairing equipment, responding to stockouts, and handling refunds. The operator's service team is structured into three roles at modern programs: (1) route drivers who run restock visits on a published cadence (weekly or bi-weekly typical; twice-weekly at high-volume sites), restock to planogram, pull expired product, collect cash, and verify payment hardware on each visit; (2) field service technicians who handle equipment repair (refrigeration, payment hardware, dispense mechanism, signage), respond to telemetry alerts, and run preventive maintenance on quarterly or semi-annual cadence; and (3) account managers who manage the operator-property relationship, run quarterly joint reviews, handle escalations, and coordinate planogram changes. Modern operators run 24/7 telemetry monitoring — every stockout, payment failure, refrigeration alarm, and door-open event outside service window generates an automatic alert; operator dashboard triages alerts and dispatches service. Property responsibilities are limited: providing facility access during service windows, providing power + connectivity at placement, coordinating brand-standard requirements (vinyl wraps, signage), and participating in quarterly reviews. Property does not stock product, repair equipment, or handle payments — that's all on the operator.",
    bullets: [
      { emphasis: "Vending operator runs the entire restock + maintenance program — single accountable party:", text: "Not property, not manufacturer, not third party. Operator stocks product, collects cash, processes payments, refills refrigerated equipment, cleans, repairs, responds to stockouts, handles refunds." },
      { emphasis: "Three operator roles — route drivers + field service techs + account managers:", text: "Route drivers run restock on cadence. Field service techs handle equipment repair + preventive maintenance. Account managers handle relationship + escalations + quarterly review." },
      { emphasis: "Property responsibilities are limited:", text: "Facility access during service windows + power + connectivity + brand-standard coordination + quarterly review participation. Property does NOT stock, repair, or handle payments.", },
    ],
  }),
  statStrip({
    heading: "Vending restock + maintenance benchmarks",
    stats: [
      { number: "Weekly", label: "typical restock cadence", sub: "office + retail standard", accent: "blue" },
      { number: "2× weekly", label: "high-volume cadence", sub: "DC + university + hotel", accent: "blue" },
      { number: "24-48 hr", label: "stockout response", sub: "modern operator SLA", accent: "orange" },
      { number: "Quarterly", label: "preventive maintenance", sub: "minimum cadence", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Operator service team roles + responsibilities",
    sub: "Modern operators run three distinct service roles. Match role to task. Property interacts primarily with account manager for relationship + service tech for on-site work.",
    headers: ["Role", "Primary responsibilities", "Visit cadence", "Property interaction"],
    rows: [
      ["Route driver", "Restock to planogram, pull expired, collect cash, verify payment hardware", "Weekly / bi-weekly / 2× weekly", "Service window access only"],
      ["Field service tech", "Equipment repair, refrigeration, payment hardware, dispense mechanism, signage", "On-demand + preventive (quarterly+)", "Access during repair visits"],
      ["Account manager", { icon: "check", text: "Relationship, quarterly review, escalations, planogram changes" }, "Quarterly + as needed", "Primary contact at property"],
      ["Telemetry / dispatch team", "Monitor alerts, triage, dispatch service tech, refund processing", "24/7 monitoring", "None typical (back-office)"],
      ["Inventory / procurement team", "Product sourcing, SKU rotation, vendor relationships, demand planning", "Continuous (back-office)", "None typical (back-office)"],
    ],
  }),
  specList({
    heading: "Operator restock + maintenance program specifications",
    items: [
      { label: "Route driver restock visits", value: "Visit cadence: weekly typical for office + retail + apartment; bi-weekly at smaller / lower-volume sites; twice-weekly at high-volume DC + university + hotel. Each visit: restock to planogram, pull expired product (FIFO discipline), collect cash, verify payment hardware (test transactions, check for failures), clean machine exterior, check refrigeration temperature on cooler placements. Driver service window typically 2-4 hours per visit at large sites." },
      { label: "Field service technician repair visits", value: "On-demand based on telemetry alerts + property reports + driver-flagged issues. Common repair categories: refrigeration (compressor, condenser, thermostat), payment hardware (card reader, bill validator, coin mech, NFC antenna), dispense mechanism (motor, belt, sensor), signage + LED lighting, telemetry hardware. Modern operators target 48-hour response SLA for non-safety repairs; 24-hour for refrigeration + safety issues." },
      { label: "Preventive maintenance", value: "Quarterly or semi-annual preventive maintenance — refrigeration condenser coil cleaning, dispense mechanism lubrication, payment hardware firmware updates, signage + LED inspection, telemetry hardware verification, security hardware check (locks, anti-tamper). Modern operators schedule PM proactively; legacy operators may run reactive maintenance only (PM skipped until breakdown)." },
      { label: "Account manager + quarterly review", value: "Account manager is primary property contact — handles relationship, runs quarterly joint review with property leadership (per-zone P&L + KPI performance + planogram velocity + placement recommendations), handles escalations (guest complaints, machine moves, contract renewals), coordinates planogram changes. Quarterly review documented + adjustments applied within 30 days." },
      { label: "Telemetry / dispatch team", value: "Modern operators run 24/7 telemetry monitoring with dispatch team. Every stockout, payment failure, refrigeration alarm, dispense failure, and door-open event outside service window generates automatic alert. Dispatch team triages alerts + dispatches service (route driver for stockout; field service tech for equipment issue). Auto-refund triggered on dispense failure detection." },
      { label: "Cash collection + reconciliation", value: "Route driver collects cash on each restock visit. Cash counted at operator depot + reconciled against telemetry transaction records. Discrepancies investigated. Cash deposit to operator bank account; commission paid to property per contract (monthly or quarterly). Modern programs run 60-80% cashless — cash collection load declining at modern programs." },
      { label: "Refund + customer service", value: "Auto-refund on dispense failure (modern best practice — no friction for customer to request refund). Customer service phone + QR code visible on machine face for guest-initiated refund or complaint. Refund processed within 1-3 business days via original payment method (card refund) or operator credit. Refund rate target <0.8% of transactions." },
      { label: "Planogram refresh + SKU rotation", value: "Quarterly planogram refresh based on velocity data + seasonal alignment + property feedback. New SKU additions tested at 1-2 sites before fleet-wide rollout. Low-velocity SKU rotation prevents stagnation. Modern operators coordinate quarterly refresh with property leadership via account manager." },
      { label: "Property responsibilities", value: "Facility access during service windows (vendor key, code, badge, escort). Power + connectivity at placement (120V/20A dedicated; cellular signal verified or ethernet uplink). Brand-standard coordination (vinyl wraps, signage). Quarterly review participation (operations, F&B, GM, finance as relevant). Property does NOT stock product, repair equipment, or handle payments." },
    ],
  }),
  timeline({
    heading: "Typical restock visit workflow",
    sub: "Modern route driver restock visit at a 4-machine office or retail placement. 90-120 min total visit time.",
    howToName: "Vending restock visit",
    totalTime: "90-120 min",
    steps: [
      { label: "Step 1", title: "Arrival + facility check-in", description: "Driver arrives at property during agreed service window. Check in with security / property contact (vendor badge or escort). Position service vehicle near placement for product transfer." },
      { label: "Step 2", title: "Machine inspection + payment hardware test", description: "Inspect each machine for exterior cleanliness, signage condition, payment hardware function (test transactions on EMV + contactless + mobile-wallet). Flag any issues for field service tech follow-up." },
      { label: "Step 3", title: "Cash collection + reconciliation", description: "Collect cash from each machine's cash box. Reconcile against telemetry transaction records on driver tablet. Investigate discrepancies on-site or flag for back-office investigation." },
      { label: "Step 4", title: "Expired product pull + FIFO restock", description: "Pull expired product from shelves (FIFO discipline). Restock to planogram with fresh product from service vehicle. Date-pull on refrigerated SKUs (3-4 week shelf life typical for fresh food + plant-based)." },
      { label: "Step 5", title: "Refrigeration temperature check + exterior cleaning", description: "Verify refrigeration temperature on cooler placements (34-38°F for beverage cooler; 36-40°F for AI cooler fresh food). Clean machine exterior (glass, payment hardware, signage). Document service visit on driver tablet — telemetry sync + photo capture." },
      { label: "Step 6", title: "Departure + checkout", description: "Depart facility, check out with security. Service visit data syncs to operator dashboard + property portal. Next visit scheduled per cadence." },
    ],
  }),
  tipCards({
    heading: "Five restock + maintenance practices that separate modern from legacy operators",
    sub: "Each one signals a serious operator. Verify at RFP and during the first quarter of service.",
    items: [
      { title: "100% telemetry coverage + 24/7 dispatch monitoring", body: "Modern operators run 100% telemetry with 24/7 dispatch monitoring. Every stockout, payment failure, refrigeration alarm, and dispense failure generates automatic alert. Dispatch triages + dispatches service. Legacy operators may not have telemetry at all — paper-only service routes on fixed cadence regardless of actual stockout. Verify at RFP — demand dashboard demonstration." },
      { title: "Auto-refund on dispense failure", body: "Modern best practice — refund auto-triggered on detected dispense failure (no friction for customer to request). Legacy machines require customer to call operator customer service line — friction + lost goodwill. Verify auto-refund capability at RFP — modern operators standard; legacy operators may not have it." },
      { title: "Quarterly preventive maintenance", body: "Quarterly or semi-annual PM (condenser coil cleaning, dispense lubrication, payment firmware updates, security hardware check). Modern operators schedule PM proactively; legacy operators may run reactive maintenance only (PM skipped until breakdown). PM extends equipment life + reduces unplanned downtime — verify in contract." },
      { title: "Account manager + quarterly joint review", body: "Account manager runs quarterly joint review with property leadership — per-zone P&L + KPI performance + planogram velocity + placement recommendations. Documented adjustments applied within 30 days. Legacy operators may not run quarterly review — annual contract renewal is too slow for modern program management." },
      { title: "Three-role service team — driver + tech + account manager", body: "Modern operators run three distinct roles. Single-person operators (one driver does everything) can't deliver equipment repair response or quarterly review cadence. Verify operator has dedicated field service tech + dedicated account manager separate from route driver — separation drives accountability." },
    ],
  }),
  decisionTree({
    heading: "Who handles a machine that's stuck or stocked out?",
    question: "Is the issue product stockout (no product to dispense) or equipment failure (machine won't dispense, payment broken, refrigeration alarm)?",
    yesBranch: {
      title: "Stockout → route driver dispatch.",
      description: "Stockout flagged by telemetry → operator dispatch triages → route driver visits to restock. Modern operators target 24-48 hour stockout response. Property does not handle stockout — operator runs entirely. Customer service phone visible on machine for guest-initiated stockout flag if telemetry misses.",
      finalTone: "go",
      finalLabel: "ROUTE DRIVER · 24-48 HR",
    },
    noBranch: {
      title: "Equipment failure → field service tech dispatch.",
      description: "Equipment failure flagged by telemetry or property report → operator dispatch triages → field service tech visits to repair. Modern operators target 48-hour equipment SLA for non-safety repairs; 24-hour for refrigeration + safety issues. Property does not repair — operator runs entirely.",
      finalTone: "stop",
      finalLabel: "FIELD SERVICE TECH · 24-48 HR",
    },
  }),
  inlineCta({
    text: "Want the vending restock + maintenance framework (operator role definitions + service cadence + telemetry + auto-refund)?",
    buttonLabel: "Get the operations framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help property managers + operations leadership understand vending restock + maintenance program structure across office, retail, apartment, hotel, school, healthcare, and industrial sites — including operator service role definitions (route driver + field service tech + account manager + telemetry dispatch), service cadence (weekly to twice-weekly), preventive maintenance (quarterly+), auto-refund on dispense failure, and quarterly joint review with documented adjustments. The benchmarks reflect operator-side data on vending service program structure.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who actually restocks vending machines?", answer: "The vending operator's route driver. Operators run dedicated route driver teams who visit machines on published cadence (weekly typical; twice-weekly at high-volume sites), restock to planogram, pull expired product, collect cash, and verify payment hardware. Property does not stock product — operator runs the entire restock program.", audience: "Property Operations" },
      { question: "Who maintains and repairs vending machines?", answer: "The vending operator's field service technician. Operators run dedicated field service tech teams who handle equipment repair (refrigeration, payment hardware, dispense mechanism, signage), respond to telemetry alerts, and run preventive maintenance on quarterly cadence. Property does not repair — operator runs the entire maintenance program.", audience: "Facilities + Operations" },
      { question: "What's the typical restock cadence?", answer: "Weekly typical for office + retail + apartment; bi-weekly at smaller / lower-volume sites; twice-weekly at high-volume DC + university + hotel. Modern telemetry-driven operators may run dynamic cadence based on actual velocity. Verify cadence at RFP and during reference check.", audience: "Operations" },
      { question: "How fast does the operator respond to a stockout?", answer: "Modern operator SLA: 24-48 hour stockout response. Stockout flagged by telemetry → operator dispatch triages → route driver visits to restock. Legacy operators on fixed weekly routes regardless of actual stockout may take 3-7 days to respond. Verify SLA at RFP and during reference check.", audience: "Operations" },
      { question: "How fast does the operator respond to equipment failure?", answer: "Modern operator SLA: 48-hour equipment response for non-safety repairs; 24-hour for refrigeration + safety issues. Equipment failure flagged by telemetry or property report → operator dispatch triages → field service tech visits to repair. Verify SLA at RFP and during reference check.", audience: "Operations + Facilities" },
      { question: "Who handles customer refunds when a machine fails to dispense?", answer: "Modern operators auto-trigger refund on detected dispense failure (no friction for customer to request). Refund processed within 1-3 business days via original payment method or operator credit. Customer service phone + QR code visible on machine face for guest-initiated refund or complaint.", audience: "Customer Service + Operations" },
      { question: "What does the property need to do?", answer: "Property responsibilities are limited: facility access during service windows (vendor key, code, badge, escort), power + connectivity at placement (120V/20A dedicated; cellular signal verified or ethernet uplink), brand-standard coordination (vinyl wraps, signage), and quarterly review participation. Property does NOT stock product, repair equipment, or handle payments.", audience: "Property Management" },
      { question: "How do quarterly reviews work?", answer: "Account manager (operator-side) runs quarterly joint review with property leadership — per-zone P&L + KPI performance + planogram velocity + placement recommendations. Documented adjustments applied within 30 days of review. Modern operators include quarterly review in service contract; legacy operators may not run quarterly review at all.", audience: "Operations + GM" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator service standards and route driver / field service tech role definitions" },
      { label: "Automatic Merchandiser — Operator service coverage", url: "https://www.vendingmarketwatch.com/automatic-merchandiser", note: "Trade publication covering vending operator service program design including route + maintenance cadence" },
      { label: "Vending MarketWatch — Operator service standards", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering vending operator service program structure and SLA benchmarks" },
      { label: "FDA Food Safety Modernization Act (FSMA)", url: "https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-safety-modernization-act-fsma", note: "Federal food safety standards governing fresh food vending including date-pull and temperature control" },
      { label: "FDA Food Code", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code", note: "Federal retail food code governing vending machine food safety including refrigeration and ServSafe-certified handler requirements" },
    ],
  }),
  relatedGuides({
    heading: "Related vending FAQ guides",
    items: [
      { eyebrow: "Sister guide", title: "Are vending machines noisy", description: "Common property + guest concern — operator-side noise mitigation patterns and acoustic isolation standards.", href: "/vending-faq/are-vending-machines-noisy" },
      { eyebrow: "Operations", title: "Are there hidden fees in vending services", description: "Contract transparency — commission structure, hidden fees, capital investment, and termination clauses.", href: "/vending-faq/are-there-hidden-fees-in-vending-services" },
      { eyebrow: "Hub", title: "All vending FAQ guides", description: "Service model, contracts, equipment, planogram, accessibility, and common property + customer questions.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
