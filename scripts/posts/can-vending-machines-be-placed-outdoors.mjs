import { seedPost, tldr, statStrip, comparisonTable, specList, dimensionDiagram, decisionTree, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("can-vending-machines-be-placed-outdoors", [
  tldr({
    heading: "Can vending machines be placed outdoors — and what does it take to do it correctly?",
    paragraph:
      "Yes, vending machines can be placed outdoors, but only with outdoor-rated equipment (NEMA 3R or NEMA 4-rated cabinets, weather-sealed payment systems, UV-resistant exterior finishes, temperature-tolerant compressors) plus seven specific installation considerations that don't apply to indoor placements: (1) GFCI-protected dedicated 120V/20A outlet required by NEC at all outdoor placements — coordinate with electrician before delivery, (2) overhead protection (canopy, soffit, awning, structural overhang minimum 24-36 inches deep) protects from direct rain + snow + UV — extends equipment life from 5-7 years to 10-12 years, (3) ambient temperature tolerance — outdoor-rated machines operate at -10F to 110F (-23C to 43C); below or above these limits require either heated cabinet (cold-climate) or shaded placement + condenser sizing for hot-climate (Phoenix, Las Vegas, Tucson summer ambients can exceed 110F), (4) high-wind anchoring at hurricane / tornado / heavy-wind zones — bolt-down anchoring to concrete pad or building structure per local building code; gulf coast + tornado alley placements need additional anchoring, (5) vandalism + theft hardening — reinforced glass (or polycarbonate over glass), reinforced cabinet locks, security cameras coordinated with facility surveillance, lighting at night, (6) cellular signal verification — outdoor placements at edge of building cellular footprint may have weak signal; install survey verifies coverage + deploys signal booster if needed, (7) drainage at concrete pad — water shouldn't pool at machine base. Modern outdoor-rated machines (Royal Vendors, Crane Merchandising, USI Wittern outdoor lines) support all seven; indoor-only machines deployed outdoors fail within 18-36 months. Outdoor commission rates 5-10% lower than indoor (lower foot-traffic, lower transaction value, higher equipment cost). Specify outdoor-rated equipment at proposal demo.",
    bullets: [
      { emphasis: "Yes — but only with outdoor-rated equipment + 7 specific install considerations:",
        text: "NEMA 3R or NEMA 4 cabinet, weather-sealed payments, UV-resistant exterior, temperature-tolerant compressor. Indoor-only machines fail outdoors within 18-36 months." },
      { emphasis: "Overhead protection extends equipment life 2x:",
        text: "Canopy / soffit / awning / structural overhang 24-36 inches deep protects from rain + snow + UV. 5-7 years bare exposure vs 10-12 years protected." },
      { emphasis: "GFCI + bolt-down anchoring + cellular verification non-negotiable:",
        text: "NEC requires GFCI at outdoor placements. Hurricane / tornado zones need additional anchoring. Edge-of-footprint cellular may need signal booster." },
    ],
  }),
  statStrip({
    heading: "Outdoor vending placement benchmarks",
    stats: [
      { number: "NEMA 3R / NEMA 4", label: "outdoor-rated cabinet", sub: "weather-sealed exterior", accent: "blue" },
      { number: "-10F to 110F", label: "outdoor ambient range", sub: "outdoor-rated machine spec", accent: "blue" },
      { number: "24-36 in", label: "overhead protection depth", sub: "canopy / soffit / awning", accent: "blue" },
      { number: "5-10%", label: "commission delta", sub: "outdoor vs indoor typical", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Outdoor-rated vs indoor-only vending machines",
    sub: "Eight dimensions where outdoor-rated equipment differs from indoor-only. Indoor-only machines deployed outdoors fail within 18-36 months.",
    headers: ["Dimension", "Outdoor-rated (NEMA 3R / 4)", "Indoor-only"],
    rows: [
      ["Cabinet rating", "NEMA 3R (rain) or NEMA 4 (rain + hose-down)", "NEMA 1 / 12 — indoor-only"],
      ["Exterior finish", "UV-resistant powder coat + galvanized substrate", "Standard powder coat — UV degrades 18-24 months"],
      ["Payment system seal", "IP54+ weather-sealed card reader + bill validator", "Standard IP20 — moisture failure"],
      ["Compressor", "Temperature-tolerant (-10F to 110F operating)", "Indoor-rated (40F to 90F operating)"],
      ["Glass / merchandise window", "Reinforced + UV-tinted", "Standard tempered glass"],
      ["Cabinet locks", "Heavy-duty reinforced + tamper-resistant", "Standard locks"],
      ["Anchoring", "Bolt-down to concrete pad standard", "Floor-rest only"],
      ["Equipment life (exposed)", "10-12 years with overhead protection", "18-36 months before failure"],
      ["Cost premium", "20-40% over indoor-only equipment", "Baseline cost"],
      ["Typical placements", "Outdoor cafe, gas station, transit station, park", "Indoor office, school, hospital, mall"],
    ],
  }),
  specList({
    heading: "Outdoor vending placement specifications",
    items: [
      { label: "Outdoor-rated equipment — NEMA 3R or NEMA 4", value: "NEMA 3R (rain-rated) standard for covered outdoor placements; NEMA 4 (rain + hose-down rated) for exposed placements + frequent cleaning. Weather-sealed payment system (IP54+ card reader + bill validator), UV-resistant exterior finish (UV-resistant powder coat over galvanized substrate), temperature-tolerant compressor (-10F to 110F operating range), reinforced glass / polycarbonate merchandise window, heavy-duty reinforced cabinet locks. Modern outdoor-rated machines: Royal Vendors RV-650, Crane Merchandising, USI Wittern outdoor lines." },
      { label: "GFCI-protected dedicated 120V/20A outlet", value: "NEC requires GFCI at all outdoor placements (Article 210.8). Dedicated 120V/20A outlet for refrigerated machines (compressor inrush exceeds 15A circuits). Some compressor inrush can nuisance-trip GFCI; coordinate with electrician at install — GFCI-compatible refrigerated machine electronics or class-A GFCI with 6mA threshold. Specialty 240V/30A at high-capacity outdoor placements." },
      { label: "Overhead protection — canopy / soffit / awning / structural overhang", value: "Overhead protection 24-36 inches deep extends equipment life from 5-7 years bare exposure to 10-12 years protected. Canopy at gas station + transit station + park placements. Soffit at building-adjacent placements. Awning at outdoor cafe + restaurant patio placements. Structural overhang at modern building exteriors. Modern outdoor-rated machines tolerate bare exposure but life shortens significantly without overhead protection." },
      { label: "Ambient temperature tolerance — climate-specific specification", value: "Outdoor-rated machines operate -10F to 110F (-23C to 43C). Cold-climate placements (Minnesota, North Dakota, Maine winters) need heated cabinet option (heating element maintains beverage above freezing) or seasonal pull-in. Hot-climate placements (Phoenix, Las Vegas, Tucson summers) need shaded placement + condenser sizing for high-ambient operation — compressor + condenser sized for 115F+ ambient. Coordinate with operator on climate-specific equipment specification." },
      { label: "High-wind anchoring at hurricane / tornado / heavy-wind zones", value: "Gulf coast (Florida, Texas, Louisiana, Mississippi, Alabama) hurricane zones, tornado alley (Oklahoma, Kansas, Texas, Nebraska) tornado zones, coastal storm zones require bolt-down anchoring to concrete pad or building structure per local building code. Local AHJ may require additional anchoring spec; coordinate with engineer at install survey. Standard anchoring at all outdoor placements; enhanced anchoring at storm zones." },
      { label: "Vandalism + theft hardening", value: "Outdoor placements expose machines to vandalism + theft. Reinforced glass (polycarbonate over glass at higher-risk placements), reinforced cabinet locks with tamper-resistant hardware, security cameras coordinated with facility surveillance (CCTV integration or independent operator camera), lighting at night (machine-mounted LED or facility lighting), audible alarm at unauthorized tampering. Verify at install survey based on placement risk profile." },
      { label: "Cellular signal verification + signal booster at weak-signal sites", value: "Outdoor placements at edge of building cellular footprint may have weak signal. Operator install crew verifies cellular signal at proposed location — typically using signal meter or test phone on operator's carrier. Minimum signal threshold for reliable telemetry. If signal weak, operator deploys cellular signal booster (40-60 dB amplifier with external antenna — rooftop or wall-mounted feeding internal antenna at machine location). $200-600 hardware + install." },
      { label: "Drainage at concrete pad — water shouldn't pool", value: "Concrete pad at outdoor placement should slope away from machine (1-2% slope minimum) so water doesn't pool at machine base. Pooling water causes corrosion at cabinet bottom + intrusion at electrical connections + vermin attraction. Coordinate with concrete contractor at install. Verify drainage path at install survey." },
      { label: "Commission rate adjustment — outdoor 5-10% lower than indoor", value: "Outdoor placements typically command 5-10% lower commission than equivalent indoor placement — lower foot-traffic (transient vs captive consumer base), lower average ticket (price-sensitive consumer), higher equipment cost (20-40% premium for outdoor-rated), higher service cost (weather-related maintenance). Set expectations at proposal; outdoor placements still viable but commission base smaller than indoor." },
    ],
  }),
  dimensionDiagram({
    heading: "Outdoor vending machine — typical dimensions + clearance",
    sub: "Royal Vendors RV-650 outdoor-rated combo as reference. Verify dimensions against operator's specific equipment at install survey.",
    machineName: "Outdoor-rated combo (snack/beverage)",
    width: "39 in (99 cm)",
    depth: "36 in (91 cm)",
    height: "72 in (183 cm)",
    footprint: "9.75 sq ft (0.91 sq m)",
    weightEmpty: "650 lb (295 kg)",
    weightLoaded: "1,250 lb (567 kg)",
    doorwayClearance: "42 in (107 cm) doorway minimum during install",
    note: "Concrete pad recommended 48 in x 48 in (122 cm x 122 cm) with 1-2% drainage slope. Overhead protection 24-36 in (61-91 cm) deep extends equipment life from 5-7 yr bare exposure to 10-12 yr protected. Bolt-down anchoring required at high-wind zones (gulf coast, tornado alley) per local building code.",
  }),
  decisionTree({
    heading: "Should we place a vending machine outdoors?",
    question: "Does the proposed placement have overhead protection (canopy / soffit / awning / 24-36 in structural overhang) AND GFCI-compatible 120V/20A power AND reliable cellular signal AND moderate climate (-10F to 110F ambient range)?",
    yesBranch: {
      title: "Outdoor placement viable — specify outdoor-rated equipment",
      description: "All four prerequisites met. Specify outdoor-rated machine (NEMA 3R or NEMA 4 cabinet, weather-sealed payment system, UV-resistant exterior, temperature-tolerant compressor) at proposal demo. Modern outdoor-rated lines: Royal Vendors RV-650, Crane Merchandising, USI Wittern outdoor. Set commission rate expectation 5-10% lower than indoor equivalent due to lower foot-traffic + higher equipment cost. Build outdoor equipment specification + installation requirements into contract at signature.",
      finalTone: "go",
      finalLabel: "OUTDOOR · VIABLE",
    },
    noBranch: {
      title: "Address prerequisites before outdoor placement",
      description: "If overhead protection missing, install canopy / awning / structural overhang before machine delivery — extends equipment life from 5-7 years bare exposure to 10-12 years protected. If GFCI / power missing, coordinate with electrician. If cellular signal weak, deploy signal booster ($200-600). If climate extreme, specify heated cabinet (cold) or shaded placement + high-ambient condenser (hot). At persistent constraints, consider indoor placement adjacent to outdoor area (lobby, entrance vestibule) instead.",
      finalTone: "warn",
      finalLabel: "ADDRESS PREREQUISITES",
    },
  }),
  tipCards({
    heading: "Five outdoor vending placement mistakes",
    sub: "All preventable with install survey verification before machine delivery.",
    items: [
      { title: "Deploying indoor-only machine outdoors", body: "Indoor-only machines (NEMA 1 / 12 cabinet, IP20 payment system, standard powder coat, indoor-rated compressor) deployed outdoors fail within 18-36 months — UV degrades exterior, moisture intrudes payment system, compressor overheats. Specify NEMA 3R or NEMA 4 outdoor-rated equipment at proposal demo." },
      { title: "No overhead protection at exposed placement", body: "Bare exposure shortens equipment life from 5-7 years bare to 10-12 years with overhead protection (canopy / soffit / awning / 24-36 in structural overhang). Install overhead protection before machine delivery — coordinate with facility construction." },
      { title: "Missing GFCI at outdoor placement", body: "NEC requires GFCI at all outdoor placements (Article 210.8). Some compressor inrush nuisance-trips GFCI; coordinate with electrician — GFCI-compatible refrigerated machine electronics or class-A GFCI with 6mA threshold. Verify before machine delivery." },
      { title: "No bolt-down anchoring at hurricane / tornado zone", body: "Gulf coast + tornado alley + coastal storm zones require bolt-down anchoring to concrete pad or building structure per local building code. Standard anchoring at all outdoor placements; enhanced anchoring at storm zones. Coordinate with engineer at install survey." },
      { title: "Not verifying cellular signal at outdoor placement", body: "Outdoor placements at edge of building cellular footprint may have weak signal. Verify at install survey — minimum signal threshold for reliable telemetry. If signal weak, deploy cellular signal booster (40-60 dB amplifier with external antenna; $200-600 hardware + install). Machines at weak-signal outdoor sites have intermittent cashless + telemetry." },
    ],
  }),
  inlineCta({
    text: "Want the outdoor vending placement checklist (equipment + power + overhead + climate + anchoring + cellular)?",
    buttonLabel: "Get the outdoor placement checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support outdoor vending placement across gas stations, transit stations, parks, outdoor cafes, restaurant patios, construction job sites, military base outdoor placements, and university campus outdoor placements — including outdoor-rated equipment specification (NEMA 3R / NEMA 4), GFCI + dedicated power coordination, overhead protection design, climate-specific compressor + cabinet specification, hurricane / tornado zone anchoring, vandalism + theft hardening, cellular signal verification + signal booster, and commission rate setting at outdoor placements. The benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Can vending machines be placed outdoors?", answer: "Yes, with outdoor-rated equipment (NEMA 3R or NEMA 4 cabinet, weather-sealed payment system, UV-resistant exterior, temperature-tolerant compressor) plus seven installation considerations: GFCI-protected 120V/20A power, overhead protection 24-36 in deep, ambient temperature tolerance, hurricane / tornado zone anchoring, vandalism hardening, cellular signal verification, drainage at concrete pad.", audience: "Property Managers / Operators" },
      { question: "Can I just put a regular vending machine outside?", answer: "No — indoor-only machines deployed outdoors fail within 18-36 months. UV degrades exterior 18-24 months, moisture intrudes payment system, compressor overheats at high-ambient. Specify NEMA 3R or NEMA 4 outdoor-rated equipment at proposal demo. 20-40% cost premium over indoor-only equipment.", audience: "Property Managers" },
      { question: "What temperature range can outdoor machines handle?", answer: "Outdoor-rated machines operate -10F to 110F (-23C to 43C). Cold-climate placements (Minnesota, North Dakota, Maine winters) need heated cabinet option or seasonal pull-in. Hot-climate placements (Phoenix, Las Vegas, Tucson summers) need shaded placement + condenser sizing for 115F+ ambient operation.", audience: "Facilities" },
      { question: "Do we need overhead protection?", answer: "Strongly recommended. Overhead protection 24-36 in deep (canopy / soffit / awning / structural overhang) extends equipment life from 5-7 years bare exposure to 10-12 years protected. Modern outdoor-rated machines tolerate bare exposure but life shortens significantly without overhead protection.", audience: "Facilities" },
      { question: "What about hurricane and tornado zones?", answer: "Gulf coast (Florida, Texas, Louisiana, Mississippi, Alabama) hurricane zones, tornado alley (Oklahoma, Kansas, Texas, Nebraska) tornado zones require bolt-down anchoring to concrete pad or building structure per local building code. Local AHJ may require additional anchoring spec; coordinate with engineer at install survey.", audience: "Facilities" },
      { question: "How do we prevent vandalism?", answer: "Reinforced glass (polycarbonate over glass at higher-risk placements), reinforced cabinet locks with tamper-resistant hardware, security cameras coordinated with facility surveillance, lighting at night (machine-mounted LED or facility lighting), audible alarm at unauthorized tampering. Verify at install survey based on placement risk profile.", audience: "Security / Facilities" },
      { question: "What's the commission impact of outdoor placement?", answer: "Outdoor placements typically command 5-10% lower commission than equivalent indoor placement — lower foot-traffic (transient vs captive consumer base), lower average ticket, higher equipment cost (20-40% premium), higher service cost (weather-related maintenance). Set expectations at proposal; outdoor placements still viable but commission base smaller.", audience: "Procurement" },
      { question: "Will cellular work at outdoor placements?", answer: "Usually yes, but verify at install survey — outdoor placements at edge of building cellular footprint may have weak signal. Operator install crew verifies cellular signal with signal meter or test phone. If weak, deploy cellular signal booster (40-60 dB amplifier with external antenna; $200-600). Machines at weak-signal outdoor sites have intermittent cashless + telemetry without booster.", audience: "Operators / IT" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code (NFPA 70) Article 210.8", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing GFCI requirements at outdoor placements" },
      { label: "NEMA — enclosure rating standards (NEMA 250)", url: "https://www.nema.org/", note: "Enclosure rating standards for NEMA 3R and NEMA 4 outdoor-rated cabinets" },
      { label: "NAMA — vending equipment installation standards", url: "https://www.namanow.org/", note: "Industry guidance on vending installation, including outdoor placements" },
      { label: "ASCE 7 — Minimum Design Loads for Buildings", url: "https://www.asce.org/", note: "Wind load standards applicable to outdoor equipment anchoring at hurricane / tornado zones" },
      { label: "FEMA — hurricane + tornado building code resources", url: "https://www.fema.gov/", note: "Federal guidance on building code at hurricane + tornado zones" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and outdoor placement guides",
    items: [
      { eyebrow: "Sister guide", title: "Outdoor vending machines for job sites", description: "Construction + job-site outdoor placement — temporary install, ruggedized equipment, restock cadence.", href: "/vending-faq/outdoor-vending-machines-for-job-sites" },
      { eyebrow: "Operations", title: "Do vending machines need Wi-Fi or power?", description: "Full infrastructure walkthrough — power, GFCI, cellular, water, drainage, generator backup.", href: "/vending-faq/do-vending-machines-need-wifi-or-power" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, contracts, and ongoing operations for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
