import { seedPost, tldr, dimensionDiagram, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-machine-size-and-space-requirements", [
  tldr({
    heading: "What are vending machine size + space requirements?",
    paragraph:
      "Vending machine size + space requirements vary by machine type. Standard combo machine (snack + beverage): 39 inches wide × 33 inches deep × 72 inches tall, 9 sq ft footprint, 850 lb empty / 1,150 lb stocked. Full-size beverage machine: 39 inches × 33 inches × 78 inches, 9 sq ft, 950 lb empty / 1,250 lb stocked. Snack-only: 39 inches × 33 inches × 72 inches, 9 sq ft, 700 lb empty / 1,000 lb stocked. Specialty: AI cooler wall 60+ inches × 30 inches × 72 inches, 15-25 sq ft, 1,200-1,800 lb. Micro-market: 250-500 sq ft floor space (open shelves + refrigerated cases + checkout kiosk). Plus maneuvering space (30-48 inches clear floor space in front for ADA + customer access), doorway clearance (36-42 inches for combo + larger for AI cooler wall + micro-market), floor load (commercial floor 100 psf rating typical; verify at older buildings + mezzanines + raised floors). Verify space requirements at install survey; site survey identifies blockers (doorway too narrow, floor not rated, electrical access).",
    bullets: [
      { emphasis: "Standard combo machine 9 sq ft + 1,150 lb stocked:",
        text: "39 × 33 × 72 inches. Most placements need ~12 sq ft total (machine + maneuvering space + access)." },
      { emphasis: "Specialty equipment larger:",
        text: "AI cooler wall 15-25 sq ft + 1,800 lb stocked. Micro-market 250-500 sq ft total. Verify floor space + load at install survey." },
      { emphasis: "Maneuvering space + doorway clearance + floor load:",
        text: "30-48 inches clear floor space (ADA + customer access). 36-42 inch doorway. 100 psf commercial floor typical; verify at older buildings + mezzanines." },
    ],
  }),
  dimensionDiagram({
    heading: "Standard full-size combo vending machine dimensions",
    sub: "Representative dimensions for full-size snack + beverage combo unit. Verify with operator spec sheet for specific model.",
    machineName: "Combo Machine (Full-Size)",
    width: "39 inches",
    depth: "33 inches",
    height: "72 inches",
    footprint: "9 sq ft",
    weightEmpty: "850 lb",
    weightLoaded: "1,150 lb",
    doorwayClearance: "36 inches minimum",
    note: "Maneuvering space 30-48 inches clear floor space in front. Doorway clearance accommodates dolly + machine. Larger machines may need door removal or freight elevator.",
  }),
  comparisonTable({
    heading: "Vending machine size + space by type",
    sub: "Different machine types have distinct space requirements. Verify at install survey.",
    headers: ["Machine type", "Footprint", "Width / depth / height", "Stocked weight"],
    rows: [
      ["Snack-only (full-size)", "9 sq ft", "39 × 33 × 72 inches", "1,000 lb"],
      ["Snack-only (compact)", "5-7 sq ft", "28 × 30 × 72 inches", "550-700 lb"],
      ["Beverage (single-zone refrigerated)", "9 sq ft", "39 × 33 × 78 inches", "1,250 lb"],
      ["Beverage (large-format)", "10-12 sq ft", "48 × 34 × 78 inches", "1,400 lb"],
      ["Combo (snack + beverage)", "9 sq ft", "39 × 33 × 72 inches", "1,150 lb"],
      ["Frozen / ice cream", "8-10 sq ft", "36-40 × 33 × 75 inches", "1,100-1,500 lb"],
      ["AI cooler wall", "15-25 sq ft", "60-100 × 30 × 72 inches", "1,800-2,500 lb"],
      ["Micro-market", "250-500 sq ft", "Variable (open shelf + cases + kiosk)", "1,500-3,000 lb (multi-component)"],
    ],
  }),
  specList({
    heading: "Vending machine space requirement specifications",
    items: [
      { label: "Standard combo machine", value: "39 inches wide × 33 inches deep × 72 inches tall. 9 sq ft footprint. 850 lb empty / 1,150 lb stocked. Most common configuration at office + apartment + campus + hospital + airport gate-area placements." },
      { label: "Specialty equipment", value: "AI cooler wall: 60-100 inches × 30 inches × 72 inches; 15-25 sq ft; 1,800-2,500 lb. Micro-market: 250-500 sq ft total (open shelves + refrigerated cases + self-checkout kiosk + signage). Verify floor space at install survey." },
      { label: "Maneuvering space", value: "30-48 inches clear floor space in front of machine (ADA standard + customer access). Allows wheelchair user to position and operate. Periodic re-verification needed (facility changes can block). Don't place machine against wall without front clearance." },
      { label: "Doorway clearance for install", value: "36-42 inches for most full-size machines. Compact machines fit through 32-inch doors. AI cooler walls + fresh food lockers may need 48+ inches or door removal. Measure both source and destination at install survey." },
      { label: "Floor load + load rating", value: "Stocked combo machine 1,150 lb on 9 sq ft footprint = ~128 psf load. Standard commercial floors (100 psf rated) handle most placements. Older buildings, mezzanines, raised floors may not be rated. Verify with building engineer; structural engineer for questionable cases." },
      { label: "Anti-tipping anchoring (outdoor / exposed placements)", value: "Bolted to concrete pad or anchored to structure. Prevents tip-over from heavy equipment traffic + theft attempts. Standard at outdoor + construction site + parking deck placements. Coordinate with site engineer on pad design." },
      { label: "Cellular signal verification", value: "Telemetry requires cellular signal. Remote / outdoor / industrial placements may need cellular booster ($200-$1,500) or satellite. Verify at install survey; budget for boosters where needed. Don't deploy without verifying connectivity." },
      { label: "Power outlet positioning", value: "Dedicated 20A circuit within 6 feet of machine. GFCI in required occupancies (kitchens, baths, outdoor). Surge protection at outlet ($30-60) or whole-circuit ($150-300). Coordinate with electrician at install survey." },
      { label: "Outdoor / specialty placement considerations", value: "Outdoor-rated machines (sealed enclosure, weatherproof payment hardware, expanded temperature range). Concrete pad rated for weight + drainage. GFCI + weatherproof outlet. Coordinate with site engineer + electrician.", },
    ],
  }),
  tipCards({
    heading: "Five vending space requirement mistakes",
    sub: "Each is documented in install-survey reviews. All preventable with proper site assessment.",
    items: [
      { title: "Skipping site survey", body: "Site survey identifies space requirements + blockers. Doorway clearance + floor load + electrical access + cellular signal all verified at survey. Operators that deploy without survey discover blockers at install + reschedule. Site survey at proposal-design stage prevents rescheduling." },
      { title: "Underestimating maneuvering space", body: "30-48 inches clear floor space in front of machine required (ADA + customer access). Machine against wall without front clearance fails ADA + blocks customer access. Verify at install survey; periodic re-verification (facility changes can block)." },
      { title: "Doorway clearance not verified", body: "36-42 inches for most full-size machines. AI cooler walls + fresh food lockers may need 48+ inches. Measure both source and destination at install survey; don't assume. Some doorways require door removal for install access." },
      { title: "Floor load not verified at older buildings", body: "Older buildings, mezzanines, raised floors may not be rated for 128 psf vending load. Verify with building engineer; structural engineer for questionable cases. Cost of engineering verification $500-1,500; cost of floor failure or rework substantially more." },
      { title: "Outdoor / specialty placement without engineering coordination", body: "Outdoor-rated machines + concrete pad rated for weight + anti-tipping anchoring + GFCI + weatherproof electrical. Coordinate with site engineer + electrician at install survey. Don't deploy specialty equipment without proper engineering coordination.", },
    ],
  }),
  inlineCta({
    text: "Want the vending size + space requirement checklist (dimensions + maneuvering + doorway + floor load)?",
    buttonLabel: "Get the space requirement checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine installations across offices, schools, campuses, hospitals, airports, warehouses, construction sites, retail, libraries, government, and clinic placements — coordinating with facilities, building engineers, electricians, and operators on size + space + load + clearance requirements. The benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What size are vending machines?", answer: "Standard combo machine: 39 × 33 × 72 inches; 9 sq ft footprint; 1,150 lb stocked. AI cooler wall: 60-100 × 30 × 72 inches; 15-25 sq ft; 1,800-2,500 lb. Micro-market: 250-500 sq ft total. Plus maneuvering space (30-48 inches clear in front). Verify at install survey.", audience: "Property Managers" },
      { question: "What floor space do we need?", answer: "Standard combo machine: ~12 sq ft total (machine footprint 9 sq ft + maneuvering space + access). AI cooler wall: 20-30 sq ft total. Micro-market: 250-500 sq ft. Match space requirement to machine type; verify at install survey.", audience: "Facilities" },
      { question: "What's the doorway clearance?", answer: "36-42 inches for most full-size machines. Compact machines fit through 32 inches. AI cooler walls + fresh food lockers may need 48+ inches or door removal. Measure both source and destination at install survey.", audience: "Facilities" },
      { question: "What about floor load?", answer: "Standard commercial floors (100 psf rated) handle most placements. Stocked combo machine ~128 psf load. Older buildings, mezzanines, raised floors may not be rated. Verify with building engineer; structural engineer for questionable cases.", audience: "Facilities" },
      { question: "Do we need maneuvering space?", answer: "Yes. 30-48 inches clear floor space in front of machine for ADA + customer access. Machine against wall without front clearance fails ADA + blocks customer access. Verify at install survey; periodic re-verification (facility changes can block).", audience: "Accessibility Officers" },
      { question: "What about outdoor placements?", answer: "Outdoor-rated machines (sealed enclosure, weatherproof payment hardware, expanded temperature range). Concrete pad rated for weight + drainage. Anti-tipping anchoring. GFCI + weatherproof outlet. Coordinate with site engineer + electrician.", audience: "Facilities" },
      { question: "Are AI cooler walls bigger?", answer: "Yes. 60-100 × 30 × 72 inches; 15-25 sq ft footprint; 1,800-2,500 lb stocked. Larger doorway clearance (48+ inches). Specialty operator preferred. Verify floor load + doorway + electrical at install survey.", audience: "Property Managers" },
      { question: "What about micro-markets?", answer: "250-500 sq ft total floor space — open shelves + refrigerated cases + self-checkout kiosk + signage. Some larger up to 1,000 sq ft. Best at 500+ daily user placements. Higher operational complexity than combo vending; specialty operator preferred.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ADA — Americans with Disabilities Act maneuvering space standards", url: "https://www.ada.gov/", note: "Federal accessibility law underlying maneuvering space requirements" },
      { label: "IBC — International Building Code", url: "https://www.iccsafe.org/", note: "Building code framework underlying floor load requirements" },
      { label: "ASCE 7 — Minimum Design Loads", url: "https://www.asce.org/", note: "Structural engineering standard for floor + live loads" },
      { label: "NAMA — vending equipment installation + space standards", url: "https://www.namanow.org/", note: "Industry guidance on equipment size + space requirements" },
      { label: "NEMA — outlet standards", url: "https://www.nema.org/", note: "Outlet + plug standard reference" },
    ],
  }),
  relatedGuides({
    heading: "Related size + install guides",
    items: [
      { eyebrow: "Sister guide", title: "How much weight does a vending machine hold?", description: "Floor load, stocked weight, structural considerations.", href: "/vending-faq/how-much-weight-does-a-vending-machine-hold" },
      { eyebrow: "Operations", title: "How are vending machines installed?", description: "End-to-end installation process — site survey, electrical, delivery, setup, verification.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Size, space, install, infrastructure, performance measurement.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
