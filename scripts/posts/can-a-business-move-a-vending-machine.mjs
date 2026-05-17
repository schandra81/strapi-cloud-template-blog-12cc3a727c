import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("can-a-business-move-a-vending-machine", [
  tldr({
    heading: "Can a business move a vending machine on its own?",
    paragraph:
      "Short answer: physically yes, but in almost every scenario the answer should be 'call the operator, not your maintenance team.' Vending machines are heavier, more delicate, and more expensive to repair than they look — full-sized snack machines weigh 600-900 lb empty (1,000-1,500 lb stocked), beverage machines run 700-1,100 lb, and combo machines split the difference. Moving them improperly damages the chassis, the refrigeration system (compressor tilt damage is a $500-2,000 repair), and the cashless payment hardware. Operator contracts almost always include a clause requiring operator-managed moves. Doing it yourself voids most service warranties, can void the operator contract, and creates liability if the move causes injury or property damage. The legitimate scenarios for businesses to move a machine themselves are narrow: a brief reposition within the same room (with the operator notified), or moving a permanently-disconnected unit after the operator has removed it from service. Anything beyond that is operator scope.",
    bullets: [
      { emphasis: "Weight is the first issue:", text: "Full-size machines are 600-1,500 lb depending on type and stock. Standard furniture dollies aren't rated for this. Improper lift causes back injury (most common), property damage (floor scratches, doorway impact), and machine damage." },
      { emphasis: "Compressor tilt damage is real:", text: "Refrigerated machines tilted beyond 45° for more than 5-10 minutes can damage the compressor (oil migration). Repair $500-2,000. This is the silent damage from improper moves." },
      { emphasis: "Operator contract usually requires operator-managed moves:", text: "Read your contract before considering a DIY move. Self-managed moves often void service warranties and may violate the contract. Calling the operator is faster than the repair bill." },
    ],
  }),
  statStrip({
    heading: "Vending machine moving benchmarks",
    stats: [
      { number: "600-1,500 lb", label: "machine weight range", sub: "empty to stocked", accent: "orange" },
      { number: "45°", label: "max tilt angle", sub: "before compressor damage risk", accent: "orange" },
      { number: "$500-2,000", label: "compressor repair cost", sub: "from improper move", accent: "orange" },
      { number: "1-3 days", label: "operator move lead time", sub: "typical scheduling", accent: "blue" },
    ],
  }),
  decisionTree({
    heading: "Should I move this vending machine myself?",
    question: "Is the machine being repositioned briefly within the same room, with the operator notified, AND is it completely empty of product and unplugged?",
    yesBranch: {
      title: "Maybe — with caveats and operator notification",
      description: "Brief in-room reposition is the only scenario that's reasonably DIY. Even then: notify the operator in advance, use proper equipment (appliance dolly rated for 1,500+ lb), keep tilt under 45°, move slowly, get help (2+ people). Document the move with photos before/after.",
      finalTone: "go",
      finalLabel: "Proceed with caution",
    },
    noBranch: {
      title: "Call the operator — DIY isn't worth the risk",
      description: "Any move beyond a brief in-room reposition (different room, different floor, different building) should be operator-managed. The risk of damage, injury, contract violation, or warranty loss exceeds the cost of an operator-scheduled move (often included or low-cost). Call the operator first.",
      finalTone: "stop",
      finalLabel: "Operator-managed move",
    },
  }),
  timeline({
    heading: "Operator-managed vending machine move",
    sub: "How a vending machine move actually works when done properly. Most operators schedule moves within 1-3 business days of request.",
    howToName: "Move a vending machine via the operator",
    totalTime: "1-3 business days lead time, 1-2 hours on-site",
    steps: [
      { title: "Notify operator + propose new location", description: "Contact account manager. Provide: current location, desired new location, reason for move, timing flexibility. Operator may suggest alternative locations based on power, floor load, traffic.", duration: "Day 1" },
      { title: "Operator schedules + plans logistics", description: "Operator schedules service crew. Plans: power requirements at new spot, doorway clearance, floor protection, dolly equipment, helper crew (2-3 people typical). Confirms with site contact.", duration: "1-3 business days" },
      { title: "Pre-move prep on-site", description: "Crew arrives, empties stock (returns to truck), unplugs machine, secures door, attaches dolly. Some operators photo-document machine condition before move. Site contact signs off on pre-move state.", duration: "20-40 minutes" },
      { title: "Physical move", description: "Slow, controlled move using rated equipment. Floor protection (cardboard, blankets) over hardwood/tile. Helper crew guides through doorways and around obstacles. Tilt kept under 45° throughout.", duration: "15-45 minutes" },
      { title: "Setup at new location", description: "Position, level (use shims if floor is uneven), plug in, allow refrigeration to settle for 30 minutes before stocking. Restock product, verify payment system, test transaction.", duration: "30-60 minutes" },
      { title: "Post-move documentation", description: "Crew documents new location (photo), confirms operations, site contact signs off. Operator's CRM updates machine location. Telemetry confirms ongoing operation; service team monitors for fault patterns for first week.", duration: "Same-day completion" },
    ],
  }),
  comparisonTable({
    heading: "DIY move vs operator-managed move",
    sub: "Same physical task; very different risk and cost profiles. The visible cost of an operator move is usually less than the hidden cost of a botched DIY.",
    headers: ["Dimension", "DIY business move", "Operator-managed move"],
    rows: [
      ["Direct cost", "$0 (your time + dollies)", "$0-300 (often free)"],
      ["Risk of compressor damage", { icon: "warn", text: "High if tilted incorrectly" }, { icon: "check", text: "Trained crew, low" }],
      ["Risk of cashless hardware damage", { icon: "warn", text: "Moderate-high" }, { icon: "check", text: "Low" }],
      ["Risk of property damage (floors, walls)", { icon: "warn", text: "Moderate-high" }, { icon: "check", text: "Low — floor protection standard" }],
      ["Risk of personal injury (back, hands)", { icon: "warn", text: "Moderate-high" }, { icon: "check", text: "Operator workers' comp covers" }],
      ["Contract / warranty implications", { icon: "warn", text: "May void warranty + contract" }, { icon: "check", text: "Operator-sanctioned" }],
      ["Lead time", "Immediate", "1-3 business days"],
      ["Total cost when accounting for risk", { icon: "warn", text: "Often $500-2,000 hidden" }, { icon: "check", text: "Predictable" }],
    ],
  }),
  specList({
    heading: "Vending machine moving specifications",
    items: [
      { label: "Equipment required", value: "Appliance dolly rated for 1,500+ lb (not standard furniture dolly). Tie-down straps. Floor protection (cardboard, blankets, plywood sheets). Doorway protection (corner guards). Optional: stair-climbing dolly for multi-floor moves." },
      { label: "Crew size", value: "2-3 people minimum. One on the dolly handle, one or two guides for direction and obstacles. Solo moves of full-size machines are unsafe regardless of operator experience." },
      { label: "Pre-move preparation", value: "Empty all stock and return to operator inventory. Unplug 30+ minutes before move (allow refrigerant to settle). Lock or secure door. Disable cashless hardware to prevent power-on damage during move." },
      { label: "Tilt management", value: "Keep tilt under 45° at all times. Beyond 45° for more than 5-10 minutes risks compressor oil migration. If using a stair-climbing dolly, brief tilts above 45° are acceptable but should be minimized." },
      { label: "Doorway clearance", value: "Most full-size machines require 36-42 inch doorway clearance. Measure both source and destination doorways before moving. Some doorways require door removal for clearance — plan accordingly." },
      { label: "Floor load consideration", value: "Stocked full-size machine on a small footprint (~9 sq ft) generates 80-170 psf floor load. Most modern floors handle this; older buildings, mezzanines, raised floors may not. Verify before moving to upper floors." },
      { label: "Power & data at new location", value: "Verify 120V 20A circuit at new location (or 240V/30A for larger machines). Cashless models need cellular or Wi-Fi connectivity — verify signal strength. Telemetry confirms operation post-move." },
      { label: "Post-move settling time", value: "Allow refrigeration system to settle for 30 minutes after plug-in before stocking refrigerated product. Temperature stabilizes in 2-4 hours; faults caught by telemetry in first 24-48 hours." },
    ],
  }),
  tipCards({
    heading: "Five common moving mistakes",
    sub: "Each is documented in operator post-incident data. All preventable with operator-managed move or proper DIY discipline.",
    items: [
      { title: "Tipping the machine on its side for the move", body: "Tilting beyond 45° risks compressor oil migration → compressor failure → $500-2,000 repair. The damage may not appear until days later, complicating the diagnosis. Even brief over-tilts can cause it. Use a proper appliance dolly that keeps tilt under 45° throughout the move." },
      { title: "Standard furniture dolly under a full-size machine", body: "Most furniture dollies are rated for 500-800 lb. A stocked full-size machine is 1,000-1,500 lb. The dolly fails (wheel collapse, frame bend), the machine falls, and you have a catastrophe. Use an appliance dolly rated for 1,500+ lb minimum." },
      { title: "Moving with product still in the machine", body: "Stocked machine is heavier, more unbalanced, and shifts during the move. Empty all stock first; return to operator inventory. The 20-30 minutes saved by skipping this step often costs hours in damage cleanup or compressor repair." },
      { title: "Skipping the operator notification", body: "Most operator contracts require notification for any move. Self-managed moves without notification can void service warranty and may violate the contract entirely. Calling the operator is faster than recovering from a contract dispute or warranty loss." },
      { title: "Plugging in immediately at the new location", body: "Refrigerant needs to settle after a move (especially if any tilt was involved). Plugging in immediately can cause compressor damage from running on misdistributed refrigerant. Wait 30 minutes minimum; 1-2 hours preferred. Telemetry will catch fault patterns in the first 24 hours." },
    ],
  }),
  inlineCta({
    text: "Need to move a vending machine? Talk to your operator (or us) before scheduling.",
    buttonLabel: "Schedule a move",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine moves across offices, schools, campuses, and institutional sites — both planned relocations and emergency repositions. The weight, tilt, and equipment guidance reflects operator-side incident data and OSHA safe-lifting practice.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Can my business move our vending machine ourselves?", answer: "Technically yes, but in most cases you shouldn't. Operator contracts usually require operator-managed moves. Self-managed moves risk compressor damage ($500-2,000), warranty loss, and contract violation. The exception: brief in-room reposition with operator notification and proper equipment.", audience: "Property Managers" },
      { question: "How much does an operator-managed move cost?", answer: "Often $0 (included in contract) to $300. Operators include planned moves in standard contract scope. Emergency or unplanned moves may add a fee, but it's usually less than the cost of fixing damage from a DIY move.", audience: "Property Managers" },
      { question: "How long does it take to schedule an operator move?", answer: "1-3 business days typical for routine moves. Same-day or next-day possible for emergency situations (water damage, fire, safety). Coordinate with account manager; they handle crew scheduling, equipment, and post-move setup.", audience: "Property Managers" },
      { question: "What if my operator won't move the machine?", answer: "Unusual — most operators welcome moves because it often signals upgrading the placement. If you encounter resistance, ask for the reason in writing. Most legitimate concerns (no electrical at new spot, floor load, doorway clearance) have engineering solutions. Persistent refusal may signal operator dysfunction.", audience: "Property Managers" },
      { question: "Can we move a machine to a different floor?", answer: "Yes, with proper equipment (stair-climbing dolly or freight elevator) and the operator's involvement. Most operators have multi-floor experience. Verify the destination floor's load capacity before moving — older buildings sometimes have surprising limits.", audience: "Operators" },
      { question: "What about moving the machine outdoors?", answer: "Standard indoor machines aren't rated for outdoor use. Outdoor placements need outdoor-rated machines (sealed enclosures, weather-protected payment hardware, ventilation, temperature range). Moving an indoor machine outside accelerates failure and voids warranty.", audience: "Property Managers" },
      { question: "Do we need permits to move a vending machine?", answer: "Usually no — it's owned property being moved. Exception: federal sites, historic buildings, or sites with security clearance protocols may require coordination with facilities or security. State the move plan in advance; permits are rarely needed but coordination is.", audience: "Property Managers" },
      { question: "What if the machine is damaged in the move?", answer: "Operator-managed move: operator's responsibility, repaired at operator cost. DIY move: business is liable, often without warranty coverage. Document machine condition before any move (photos) to support resolution if damage is contested.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending equipment moving best practices", url: "https://www.namanow.org/", note: "Industry guidance on equipment handling, moving, and damage prevention" },
      { label: "OSHA — manual lifting and material handling guidance", url: "https://www.osha.gov/", note: "Safe lifting and equipment handling standards relevant to vending moves" },
      { label: "AHRI — refrigeration handling standards", url: "https://www.ahrinet.org/", note: "Air-Conditioning, Heating, and Refrigeration Institute standards covering compressor handling and tilt limits" },
      { label: "Heavy Duty Air Movers / appliance dolly equipment specs", url: "https://www.gleason-industrial.com/", note: "Equipment specifications for appliance-rated dollies used in machine moves" },
      { label: "Vending Times — equipment installation and move coverage", url: "https://www.vendingtimes.com/", note: "Trade publication coverage of equipment moves and installation patterns" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "How are vending machines installed?", description: "Installation specifications, electrical needs, and site prep for new vending placements.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Operations", title: "How much weight does a vending machine hold?", description: "Floor load, stocked weight, and structural considerations for vending placements.", href: "/vending-faq/how-much-weight-does-a-vending-machine-hold" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, and ongoing operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
