import { seedPost, tldr, statStrip, comparisonTable, specList, dimensionDiagram, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-much-space-does-a-vending-machine-need", [
  tldr({
    heading: "How much space does a vending machine need — and what clearance is required around it?",
    paragraph:
      "A standard full-size vending machine needs a footprint of approximately 39 inches wide by 36 inches deep (9.75 square feet / 0.91 square meter) plus 3-6 inches rear clearance for ventilation + 30-36 inches front clearance for ADA accessibility + 18-24 inches side clearance for service access. Full installation envelope is approximately 45 inches wide x 60 inches deep x 78 inches tall — roughly 18.75 square feet (1.74 square meter) of floor space when accounting for all clearances. Machine height is 72-76 inches (183-193 cm) standard. Weight is 650-850 pounds (295-385 kg) empty + 1,000-1,400 pounds (454-635 kg) fully loaded — floor load 60-170 psf depending on machine size + load — most commercial floors handle this, but older buildings, mezzanines, or upper floors above unsupported spans may need structural verification. Doorway clearance during installation is 36-42 inches (91-107 cm) minimum; some larger combo machines need 48 inches (122 cm). Specialty equipment scales differently: snack-only single-cabinet machines are slightly smaller (33 inches wide x 36 inches deep), beverage-only cabinets similar to combo, AI cooler walls are wider (48-60 inches) but shallower, ice cream / freezer units may be wider + heavier, espresso machines need water + drainage. Verify all dimensions + clearances + floor load at install survey before machine delivery.",
    bullets: [
      { emphasis: "Footprint 9.75 sq ft (0.91 sq m); full install envelope 18.75 sq ft (1.74 sq m):",
        text: "39 in W x 36 in D footprint + 3-6 in rear + 30-36 in front + 18-24 in side clearance. Plan envelope, not just footprint." },
      { emphasis: "Height 72-76 in; weight 650-850 lb empty + 1,000-1,400 lb loaded:",
        text: "Floor load 60-170 psf. Most commercial floors handle this; older buildings + mezzanines + upper floors may need structural verification." },
      { emphasis: "Doorway clearance 36-42 in minimum during install; larger combos need 48 in:",
        text: "Verify doorway path from delivery dock to placement room at install survey. Older buildings may have narrow doorways." },
    ],
  }),
  statStrip({
    heading: "Vending machine space + clearance benchmarks",
    stats: [
      { number: "9.75 sq ft", label: "machine footprint", sub: "39 in W x 36 in D", accent: "blue" },
      { number: "18.75 sq ft", label: "full install envelope", sub: "including all clearances", accent: "blue" },
      { number: "30-36 in", label: "front clearance for ADA", sub: "approach + selection + dispense", accent: "blue" },
      { number: "650-1,400 lb", label: "weight range", sub: "empty to fully loaded", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending machine space requirements by equipment type",
    sub: "Different equipment types scale differently. Match space envelope to equipment specification.",
    headers: ["Equipment type", "Footprint (W x D)", "Height", "Full envelope w/ clearance"],
    rows: [
      ["Snack/beverage combo (standard)", "39 in x 36 in (99 x 91 cm)", "72-76 in (183-193 cm)", "45 in x 60 in (114 x 152 cm)"],
      ["Snack-only single cabinet", "33 in x 36 in (84 x 91 cm)", "72 in (183 cm)", "39 in x 60 in (99 x 152 cm)"],
      ["Beverage-only single cabinet", "39 in x 32 in (99 x 81 cm)", "72-78 in (183-198 cm)", "45 in x 56 in (114 x 142 cm)"],
      ["Glass-front combo (modern)", "42 in x 36 in (107 x 91 cm)", "72-76 in (183-193 cm)", "48 in x 60 in (122 x 152 cm)"],
      ["AI cooler wall (single bay)", "30 in x 30 in (76 x 76 cm)", "78 in (198 cm)", "36 in x 54 in (91 x 137 cm)"],
      ["AI cooler wall (3-bay)", "90 in x 30 in (229 x 76 cm)", "78 in (198 cm)", "96 in x 54 in (244 x 137 cm)"],
      ["Ice cream / freezer", "39 in x 36 in (99 x 91 cm)", "72 in (183 cm)", "45 in x 60 in (114 x 152 cm)"],
      ["Espresso / coffee machine", "30 in x 30 in (76 x 76 cm)", "72 in (183 cm)", "36 in x 54 in (91 x 137 cm) + water/drain"],
      ["Outdoor-rated combo", "39 in x 36 in (99 x 91 cm)", "72 in (183 cm)", "48 in x 60 in (122 x 152 cm) on concrete pad"],
      ["Compact micro-market", "Variable; 8-12 linear ft", "78-84 in (198-213 cm)", "Variable; 60-100 sq ft typical"],
    ],
  }),
  specList({
    heading: "Vending machine space + clearance specifications",
    items: [
      { label: "Machine footprint — 39 in W x 36 in D standard", value: "Standard full-size snack/beverage combo machine is approximately 39 inches wide x 36 inches deep (99 cm x 91 cm) = 9.75 square feet (0.91 sq m) footprint. Snack-only single cabinet slightly smaller (33 in x 36 in). Beverage-only similar to combo. Glass-front combo (modern equipment with merchandise window) slightly wider (42 in x 36 in). Verify exact dimensions against operator's specific equipment at install survey." },
      { label: "Rear clearance — 3-6 in for ventilation", value: "Refrigerated machines need 3-6 inches (8-15 cm) rear clearance for compressor + condenser ventilation. Inadequate rear clearance causes compressor overheating + early failure + higher electricity consumption. Standard at modern installs; verify at install survey. Some older placements pushed machine against wall — corrected at modern operator install." },
      { label: "Front clearance — 30-36 in for ADA accessibility", value: "ADA Accessibility Standards (2010 Standards Section 309) require 30 inches x 48 inches clear floor space for forward approach to vending machine. Modern operator install standard 36 inches front clearance with smooth transition to selection panel + dispense bin at ADA-compliant height (15-48 inches reach range). Verify ADA compliance at install survey; required at all commercial placements + healthcare + government + retail." },
      { label: "Side clearance — 18-24 in for service access", value: "Operator restock + service crew needs 18-24 inches side clearance to open machine door for restock + access internal mechanism for service. Inadequate side clearance forces machine pull-out for restock — adds 15-30 minutes per restock visit + increases damage risk during repositioning. Standard at modern installs; verify at install survey." },
      { label: "Height clearance — 78-84 in to ceiling", value: "Machine height 72-76 inches (183-193 cm) standard. Recommend 78-84 inches (198-213 cm) ceiling clearance for ventilation + machine pull-out at restock + service. Lower ceilings (under 78 inches) constrain machine size + may eliminate larger equipment options. Verify ceiling height + structural beam clearance at install survey." },
      { label: "Weight + floor load — 650-1,400 lb / 60-170 psf", value: "Machine weight 650-850 pounds empty + 1,000-1,400 pounds fully loaded. Floor load 60-170 psf depending on machine size + load. Most commercial floors handle this (residential 40 psf live load; commercial 50-100 psf live load typical). Older buildings, wood-frame mezzanines, upper floors above unsupported spans may need structural verification by engineer. Standard at modern install survey." },
      { label: "Doorway clearance — 36-42 in minimum during install", value: "Doorway clearance 36-42 inches (91-107 cm) minimum during machine delivery + installation. Larger combo machines + AI cooler wall units need 48 inches (122 cm). Verify path from delivery dock / loading bay through corridors + elevators + doorways to final placement room at install survey. Older buildings with narrow doorways may need temporary door removal or alternative path. Don't deliver machine without confirming doorway clearance." },
      { label: "Specialty equipment scaling", value: "AI cooler walls wider but shallower — 30-90 inches wide (single to 3-bay) x 30 inches deep. Espresso / coffee machines smaller but need water + drainage. Ice cream / freezer units similar footprint to combo but heavier. Outdoor-rated machines need concrete pad 48 in x 48 in + 24-36 in overhead protection. Specialty equipment dimensions vary; verify at install survey." },
      { label: "Electrical + connectivity envelope", value: "120V/20A dedicated outlet within 6 feet of machine standard (operator's machine cord 6-8 feet typical). GFCI in required occupancies (kitchens, bathrooms, outdoor). Cellular signal at machine location verified at install survey — operator deploys signal booster if weak. No facility Wi-Fi typically required (cellular is default)." },
    ],
  }),
  dimensionDiagram({
    heading: "Standard vending machine — typical dimensions + clearance envelope",
    sub: "Reference dimensions for standard snack/beverage combo. Verify against operator's specific equipment at install survey.",
    machineName: "Standard snack/beverage combo",
    width: "39 in (99 cm)",
    depth: "36 in (91 cm)",
    height: "72-76 in (183-193 cm)",
    footprint: "9.75 sq ft (0.91 sq m) — full envelope 18.75 sq ft (1.74 sq m) with clearance",
    weightEmpty: "650-850 lb (295-385 kg)",
    weightLoaded: "1,000-1,400 lb (454-635 kg)",
    doorwayClearance: "36-42 in (91-107 cm) doorway minimum during install",
    note: "Clearance envelope: 3-6 in rear (compressor ventilation), 30-36 in front (ADA forward approach), 18-24 in side (operator restock + service access), 78-84 in ceiling. Floor load 60-170 psf. Most commercial floors handle this; older buildings + mezzanines may need structural verification.",
  }),
  decisionTree({
    heading: "Does our proposed placement have enough space?",
    question: "Does the proposed location have at least 18.75 sq ft (1.74 sq m) of floor space AND 78 in (198 cm) ceiling height AND 36-42 in (91-107 cm) doorway clearance from delivery path AND floor load capacity for 1,000-1,400 lb?",
    yesBranch: {
      title: "Space sufficient — verify electrical + clearance details at install survey",
      description: "Space envelope meets standard requirements. Verify at install survey: ADA front clearance (30-36 in) without obstruction, side clearance (18-24 in) for operator restock + service, rear clearance (3-6 in) for ventilation, ceiling clearance (78-84 in) for ventilation + restock pull-out, electrical (120V/20A dedicated outlet within 6 ft), GFCI in required occupancies, cellular signal verification. Standard at modern operator install survey.",
      finalTone: "go",
      finalLabel: "SPACE · SUFFICIENT",
    },
    noBranch: {
      title: "Address space constraints or consider alternative equipment",
      description: "If floor space limited, consider smaller equipment (snack-only single cabinet 33 in x 36 in vs combo 39 in x 36 in; AI cooler single bay 30 in x 30 in). If ceiling height limited, look at compact equipment options. If doorway clearance limited, look at delivery path alternatives (temporary door removal, alternative entrance, smaller machine that fits doorway). If floor load constrained (mezzanine, upper floor), engineer verification or alternative location (lower floor, slab-on-grade).",
      finalTone: "warn",
      finalLabel: "ADDRESS CONSTRAINTS",
    },
  }),
  tipCards({
    heading: "Five vending space + clearance mistakes",
    sub: "All preventable with install survey verification before machine delivery.",
    items: [
      { title: "Planning footprint without clearance envelope", body: "Machine footprint 9.75 sq ft; full install envelope 18.75 sq ft including all clearances. Planning footprint only misses ADA front clearance + operator side clearance + ventilation rear clearance + ceiling clearance. Plan full envelope at install survey." },
      { title: "Not verifying doorway path from delivery to placement", body: "Doorway clearance 36-42 in minimum; larger combos 48 in. Older buildings may have narrow doorways, low elevator clearance, or tight corridor turns. Verify full delivery path at install survey before delivery; don't discover constraint at delivery." },
      { title: "Skipping floor load verification at mezzanines + upper floors", body: "Machine loaded weight 1,000-1,400 lb. Floor load 60-170 psf. Most commercial floors handle this; older buildings, wood-frame mezzanines, upper floors above unsupported spans may need structural verification by engineer. Verify at install survey." },
      { title: "Inadequate rear clearance for ventilation", body: "Refrigerated machines need 3-6 in rear clearance for compressor + condenser ventilation. Inadequate clearance causes compressor overheating + early failure + higher electricity. Standard at modern installs; verify against installer at install survey." },
      { title: "Missing ADA front clearance at commercial placements", body: "ADA Accessibility Standards require 30 in x 48 in clear floor space for forward approach + ADA-compliant reach range (15-48 in) for selection + dispense. Required at all commercial placements + healthcare + government + retail. Verify ADA compliance at install survey." },
    ],
  }),
  inlineCta({
    text: "Want the vending space + clearance install survey checklist (footprint + clearance + ceiling + doorway + load + ADA)?",
    buttonLabel: "Get the install survey checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support vending space + clearance planning across offices, hospitals, schools, universities, airports, retail, and industrial placements — including footprint specification, full clearance envelope design (front ADA, side service, rear ventilation, ceiling), doorway path verification at install survey, floor load verification at mezzanine + upper-floor placements, specialty equipment scaling (AI cooler walls, espresso, ice cream, outdoor-rated), and ADA compliance at commercial placements. The benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much space does a vending machine need?", answer: "Standard full-size combo machine footprint approximately 39 in wide x 36 in deep (9.75 sq ft / 0.91 sq m) plus 3-6 in rear clearance for ventilation + 30-36 in front clearance for ADA + 18-24 in side clearance for service access. Full installation envelope approximately 45 in wide x 60 in deep x 78 in tall = 18.75 sq ft (1.74 sq m) of floor space when accounting for all clearances.", audience: "Property Managers / Facilities" },
      { question: "What's the height of a vending machine?", answer: "Machine height 72-76 in (183-193 cm) standard. Recommend 78-84 in (198-213 cm) ceiling clearance for ventilation + machine pull-out at restock + service. Lower ceilings (under 78 in) constrain machine size + may eliminate larger equipment options. Verify ceiling height + structural beam clearance at install survey.", audience: "Facilities" },
      { question: "How much does a vending machine weigh?", answer: "650-850 pounds (295-385 kg) empty + 1,000-1,400 pounds (454-635 kg) fully loaded. Floor load 60-170 psf depending on machine size + load. Most commercial floors handle this; older buildings, wood-frame mezzanines, upper floors above unsupported spans may need structural verification by engineer.", audience: "Facilities" },
      { question: "What doorway clearance do we need?", answer: "36-42 in (91-107 cm) minimum during installation. Larger combo machines + AI cooler wall units need 48 in (122 cm). Verify path from delivery dock / loading bay through corridors + elevators + doorways to final placement room at install survey. Older buildings with narrow doorways may need temporary door removal or alternative delivery path.", audience: "Facilities / Operators" },
      { question: "Do we need to worry about ADA clearance?", answer: "Yes at commercial placements. ADA Accessibility Standards (2010 Section 309) require 30 in x 48 in clear floor space for forward approach + ADA-compliant reach range (15-48 in) for selection + dispense. Required at commercial, healthcare, government, retail placements. Modern operator install standard 36 in front clearance.", audience: "Compliance / ADA" },
      { question: "How much side clearance is needed?", answer: "18-24 in side clearance for operator restock + service crew to open machine door + access internal mechanism. Inadequate side clearance forces machine pull-out for restock — adds 15-30 minutes per restock visit + increases damage risk during repositioning. Standard at modern installs.", audience: "Operators / Facilities" },
      { question: "Can we put a vending machine on a mezzanine?", answer: "Verify floor load with engineer. Machine loaded weight 1,000-1,400 lb; floor load 60-170 psf. Wood-frame mezzanines or upper floors above unsupported spans may not support; engineer verification before delivery. If floor load constrained, consider smaller equipment, lower floor, slab-on-grade placement.", audience: "Facilities" },
      { question: "How big are AI coolers and specialty machines?", answer: "AI cooler walls — single bay 30 in x 30 in to 3-bay 90 in x 30 in (wider but shallower than combo). Espresso / coffee machines smaller but need water + drainage. Ice cream / freezer similar footprint to combo but heavier. Outdoor-rated machines need concrete pad 48 in x 48 in + 24-36 in overhead protection. Specialty equipment dimensions vary; verify at install survey.", audience: "Operators / Facilities" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ADA Accessibility Standards (2010) — Section 309 Operable Parts", url: "https://www.access-board.gov/ada/", note: "Federal ADA standards governing reach range + clear floor space at vending placements" },
      { label: "IBC — International Building Code, live load tables", url: "https://www.iccsafe.org/", note: "Building code live-load standards applicable to vending floor-load verification" },
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing outlet placement + clearance at commercial equipment" },
      { label: "NAMA — vending equipment installation standards", url: "https://www.namanow.org/", note: "Industry guidance on vending installation, dimensions, and clearance" },
      { label: "Royal Vendors / Crane Merchandising — equipment specifications", url: "https://www.cranems.com/", note: "Major vending equipment manufacturer specifications for footprint, weight, clearance" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and installation guides",
    items: [
      { eyebrow: "Sister guide", title: "How are vending machines installed?", description: "End-to-end installation process — site survey, electrical, delivery, setup, verification.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Operations", title: "Do vending machines need Wi-Fi or power?", description: "Full infrastructure walkthrough — power, GFCI, cellular, water, drainage.", href: "/vending-faq/do-vending-machines-need-wifi-or-power" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, contracts, and ongoing operations for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
