import { seedPost, tldr, statStrip, comparisonTable, specList, dimensionDiagram, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-much-weight-does-a-vending-machine-hold", [
  tldr({
    heading: "How much weight does a vending machine hold, empty and stocked?",
    paragraph:
      "Vending machine weight matters in three contexts: floor load calculations (is the floor rated for this?), moving and install logistics (what equipment is needed?), and structural concerns at older buildings or upper floors. Full-size snack-only machines run 600-750 lb empty, 800-1,000 lb fully stocked (250-350 lb of product). Beverage machines (refrigerated) weigh 700-1,100 lb empty, 1,000-1,400 lb fully stocked. Combo machines split the difference — 750-950 lb empty, 1,000-1,300 lb stocked. AI cooler walls and specialty machines (ice cream freezers, fresh food lockers) run 1,000-2,000+ lb. Footprint is typically 8-12 sq ft, producing floor loads of 80-170 psf (pounds per square foot) when fully stocked. Most modern commercial floors handle this. Older buildings, raised floors, mezzanines, and upper floors of historic buildings may not. Verify floor rating before install; structural engineers calculate point loads when in doubt.",
    bullets: [
      { emphasis: "Snack vs beverage weight differs:", text: "Snack 600-1,000 lb stocked; beverage (refrigerated) 1,000-1,400 lb stocked. Combo machines in between. Specialty machines (freezer, AI cooler walls) heavier still." },
      { emphasis: "Floor load 80-170 psf when stocked:", text: "Footprint 8-12 sq ft generates 80-170 psf when fully stocked. Most modern commercial floors handle this; older buildings and upper floors may not." },
      { emphasis: "Verify floor rating before install:", text: "Older buildings, raised floors, mezzanines, upper floors of historic buildings may not be rated. Structural engineer can calculate point loads when in doubt. Don't assume." },
    ],
  }),
  statStrip({
    heading: "Vending machine weight benchmarks",
    stats: [
      { number: "600-1,400 lb", label: "stocked weight range", sub: "depending on type", accent: "blue" },
      { number: "80-170 psf", label: "floor load when stocked", sub: "8-12 sq ft footprint", accent: "blue" },
      { number: "100 psf", label: "commercial floor rating", sub: "typical modern building", accent: "blue" },
      { number: "50-75 psf", label: "older/historic buildings", sub: "sometimes lower", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Vending machine weights by type",
    sub: "Empty and stocked weights for common machine types. Always verify with the operator's specific equipment spec sheet.",
    headers: ["Machine type", "Empty weight", "Stocked weight", "Footprint"],
    rows: [
      ["Snack-only (full-size)", "600-750 lb", "800-1,000 lb", "8-10 sq ft"],
      ["Snack-only (compact)", "400-500 lb", "550-700 lb", "5-7 sq ft"],
      ["Beverage (single-zone refrigerated)", "700-900 lb", "1,000-1,250 lb", "8-10 sq ft"],
      ["Beverage (large-format)", "900-1,100 lb", "1,200-1,400 lb", "10-12 sq ft"],
      ["Combo (snack + beverage)", "750-950 lb", "1,000-1,300 lb", "9-11 sq ft"],
      ["Frozen / ice cream", "800-1,100 lb", "1,100-1,500 lb", "8-10 sq ft"],
      ["AI cooler wall (multi-zone)", "1,200-1,800 lb", "1,800-2,500 lb", "15-25 sq ft"],
      ["Fresh food locker bank", "800-1,400 lb", "1,200-1,800 lb", "10-18 sq ft"],
    ],
  }),
  dimensionDiagram({
    heading: "Typical full-size combo vending machine dimensions",
    sub: "Representative dimensions for a full-size snack + beverage combo unit. Verify with operator spec sheet for the specific model.",
    machineName: "Combo Machine (Full-Size)",
    width: "39 inches",
    depth: "33 inches",
    height: "72 inches",
    footprint: "9 sq ft",
    weightEmpty: "850 lb",
    weightLoaded: "1,150 lb",
    doorwayClearance: "36 inches minimum",
    note: "Doorway clearance accommodates dolly + machine. Larger machines may need door removal or freight elevator.",
  }),
  specList({
    heading: "Vending machine weight & floor load specifications",
    items: [
      { label: "Empty machine weight", value: "Snack: 600-750 lb. Beverage: 700-1,100 lb. Combo: 750-950 lb. Frozen: 800-1,100 lb. AI cooler walls: 1,200-1,800 lb. Lighter compact models are 400-500 lb. Verify with operator spec sheet for specific model." },
      { label: "Stocked weight", value: "Add 200-400 lb to empty weight for fully stocked machine (product + beverages + ice if frozen). Most operators provide both empty and stocked weight in spec sheet. Plan for stocked weight (worst case) in floor-load calculations." },
      { label: "Footprint & floor load", value: "Footprint 8-12 sq ft typical. Floor load 80-170 psf when fully stocked. Modern commercial floors rated 100 psf typically handle full-size vending. Older buildings (50-75 psf) may not. Mezzanines and raised floors verify separately." },
      { label: "Point load consideration", value: "Vending machine weight isn't evenly distributed — concentrated near feet/legs. Point loads can exceed average floor rating in spots. Use leveling shims to distribute load; structural engineer calculates point load on questionable floors." },
      { label: "Doorway clearance", value: "36-42 inch doorway clearance typical. Some compact machines fit through 32-inch doors. AI cooler walls and fresh food lockers may need 48+ inch doorways or door removal for install. Measure source + destination doors at install survey." },
      { label: "Freight elevator capacity", value: "Most freight elevators rated 2,500+ lb handle vending. Smaller passenger elevators (often 1,500-2,500 lb) may not. Verify with building engineer. Upper-floor installs without freight elevator access require special planning." },
      { label: "Upper floor / mezzanine considerations", value: "Older buildings, mezzanines, raised floors, parking decks have variable floor ratings. Verify with building engineer before install. Structural engineer for questionable cases. Cost of consultation cheap vs cost of floor failure or building rework." },
      { label: "Outdoor / curbside placement weight", value: "Outdoor-rated machines often weigh more (heavier-gauge construction, weather sealing). Plus concrete pad rating consideration. Verify pad and surrounding surface rating with site engineer." },
    ],
  }),
  tipCards({
    heading: "Five vending machine weight / floor load mistakes",
    sub: "Each is documented in install-survey reviews. All preventable with proper site assessment.",
    items: [
      { title: "Skipping floor load verification at older buildings", body: "Older buildings, mezzanines, raised floors, parking decks have variable floor ratings. Installing vending on a 50 psf floor produces structural risk. Verify with building engineer; structural engineer for questionable cases. Cheap consultation; expensive floor failure." },
      { title: "Underestimating doorway clearance", body: "Most full-size machines need 36-42 inch doorway clearance. AI cooler walls and fresh food lockers may need 48+ inches. Some doors are narrower than they look; measure both source and destination at install survey. Plan for door removal if needed." },
      { title: "Loading the operator's weight assumption", body: "Operators sometimes quote 'typical' weight rather than spec-sheet weight for the specific model. Get the spec sheet for your specific model. AI cooler walls and specialty equipment vary substantially; don't generalize." },
      { title: "Ignoring point load on older floors", body: "Vending machine weight concentrates near feet/legs, producing point loads higher than average. Older floors with marginal rating can fail at points even when average is acceptable. Use leveling shims to distribute load; structural engineer for questionable cases." },
      { title: "Outdoor placement on unrated surface", body: "Outdoor-rated machines weigh more than indoor; need pad rated for the weight + weather considerations. Asphalt and unprepared surfaces may not support full-size outdoor vending. Coordinate with site engineer on pad design." },
    ],
  }),
  inlineCta({
    text: "Want the vending machine install survey checklist (weight, floor load, clearance, electrical)?",
    buttonLabel: "Get the install survey checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine installations across offices, schools, campuses, mezzanines, parking decks, and historic buildings — coordinating with facilities, building engineers, and structural engineers on weight and floor-load specifications. The weight benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much does a vending machine weigh?", answer: "Snack-only: 600-1,000 lb stocked. Beverage (refrigerated): 1,000-1,400 lb stocked. Combo: 1,000-1,300 lb stocked. Specialty (frozen, AI cooler walls, fresh food lockers): 1,200-2,500+ lb stocked. Verify with operator spec sheet for specific model.", audience: "Property Managers" },
      { question: "Can my floor support a vending machine?", answer: "Most modern commercial floors (rated 100 psf typically) handle full-size vending. Older buildings (50-75 psf), raised floors, mezzanines, and parking decks may not. Floor load when stocked is 80-170 psf. Verify with building engineer before install; structural engineer for questionable cases.", audience: "Facilities" },
      { question: "What's the doorway clearance needed?", answer: "36-42 inches for most full-size machines. Compact machines fit through 32-inch doors. AI cooler walls and fresh food lockers may need 48+ inches or door removal. Measure both source and destination at install survey; don't assume.", audience: "Facilities" },
      { question: "Can we install on the second floor?", answer: "Yes if floor is rated for the weight and there's freight elevator access or stair-climbing dolly capability. Verify freight elevator capacity (typical 2,500+ lb handle vending; smaller passenger elevators may not). Upper floors of older buildings need structural verification.", audience: "Facilities" },
      { question: "What about mezzanines or raised floors?", answer: "Variable. Mezzanines designed for office floor loads may not handle vending. Raised access floors (data centers, server rooms) often have lower per-tile ratings. Verify with building engineer. Structural engineer for questionable cases.", audience: "Facilities" },
      { question: "How heavy is an AI cooler wall?", answer: "1,200-1,800 lb empty, 1,800-2,500 lb stocked. Larger footprint (15-25 sq ft) so floor load is more distributed than full-size combo. Doorway clearance often requires 48+ inches; verify spec sheet and install path.", audience: "Operators" },
      { question: "Do outdoor machines weigh more?", answer: "Often yes — outdoor-rated machines use heavier-gauge construction and weather sealing. Verify weight on operator spec sheet for specific model. Concrete pad must be rated for the weight + drainage considerations.", audience: "Facilities" },
      { question: "What if we're not sure about the floor?", answer: "Hire a structural engineer to calculate point loads and verify floor capacity. Cost is typically $500-1,500 for a single-location assessment. Cheap vs the cost of floor failure or post-install structural rework.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "IBC — International Building Code", url: "https://www.iccsafe.org/", note: "Building code framework underlying floor load requirements" },
      { label: "ASCE 7 — Minimum Design Loads", url: "https://www.asce.org/", note: "Structural engineering standard for floor and live loads" },
      { label: "AHRI — refrigeration equipment standards", url: "https://www.ahrinet.org/", note: "Air-Conditioning, Heating, and Refrigeration Institute standards covering equipment weight" },
      { label: "NAMA — vending equipment installation standards", url: "https://www.namanow.org/", note: "Industry guidance on installation including weight and floor considerations" },
      { label: "OSHA — manual handling and equipment moving", url: "https://www.osha.gov/", note: "Workplace safety standards covering equipment handling" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and installation guides",
    items: [
      { eyebrow: "Sister guide", title: "How are vending machines installed?", description: "End-to-end installation process — site survey, electrical, delivery, setup, and verification.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Operations", title: "Can a business move a vending machine?", description: "Moving logistics, weight considerations, and operator coordination for relocations.", href: "/vending-faq/can-a-business-move-a-vending-machine" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, and ongoing operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
