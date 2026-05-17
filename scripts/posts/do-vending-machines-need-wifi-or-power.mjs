import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-vending-machines-need-wifi-or-power", [
  tldr({
    heading: "Do vending machines need Wi-Fi or power — what are the actual infrastructure requirements?",
    paragraph:
      "Vending machines need power but typically don't need Wi-Fi (most modern machines use cellular for telemetry). Power requirements: standard 120V/20A dedicated outlet for refrigerated machines, GFCI in kitchens / bathrooms / outdoor placements, surge protection recommended. Connectivity: modern cashless and telemetry-enabled machines need cellular signal (cellular SIM in the cashless board) or Wi-Fi as fallback. Cellular is preferred — independent of facility network, doesn't go down with building Wi-Fi failures, easier to deploy. Wi-Fi works at offices, campuses, hospitals but fails at airports during outages, construction sites without Wi-Fi infrastructure, remote sites with weak coverage. Operators usually handle cellular SIM and data plan as part of standard service; host provides power outlet. Some specialty machines need additional infrastructure (water supply for coffee / espresso, drainage for refrigerated AI cooler walls). Verify all infrastructure at install survey, not after delivery.",
    bullets: [
      { emphasis: "Power yes, Wi-Fi typically no:", text: "120V/20A dedicated power required. Cellular telemetry standard at modern machines; Wi-Fi as fallback. Operators handle cellular SIM and data plan." },
      { emphasis: "Cellular preferred over Wi-Fi:", text: "Independent of facility network. Doesn't go down with building Wi-Fi failures. Easier to deploy at outdoor / remote sites." },
      { emphasis: "Specialty machines need more:", text: "Coffee / espresso machines need water supply. Refrigerated AI cooler walls need drainage. Verify all infrastructure at install survey." },
    ],
  }),
  statStrip({
    heading: "Vending machine infrastructure benchmarks",
    stats: [
      { number: "120V / 20A", label: "standard power", sub: "dedicated outlet", accent: "blue" },
      { number: "Cellular", label: "telemetry preferred", sub: "over Wi-Fi", accent: "blue" },
      { number: "GFCI", label: "required occupancies", sub: "kitchens, bathrooms, outdoor", accent: "blue" },
      { number: "Water + drainage", label: "specialty equipment", sub: "coffee, AI cooler walls", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending machine infrastructure requirements",
    sub: "Standard vs specialty requirements. Verify all at install survey.",
    headers: ["Component", "Standard requirement", "Specialty / extended"],
    rows: [
      ["Power", "120V/20A dedicated outlet", "240V/30A for ice cream / AI cooler walls"],
      ["GFCI", "Where required by NEC (kitchens, baths, outdoor)", "Standard at outdoor placements"],
      ["Surge protection", "Recommended; standard at modern install", "Whole-circuit surge at high-volume placements"],
      ["Telemetry connectivity", "Cellular preferred; Wi-Fi fallback", "Satellite at remote sites without cellular"],
      ["Water supply", "Not needed for standard vending", "Required for coffee / espresso / some AI cooler walls"],
      ["Drainage", "Not needed standard", "Required for fresh food, coffee, some specialty refrigeration"],
      ["Wi-Fi capacity", "Not required", "Useful for some integrations (BMS, FMS)"],
      ["Generator backup", "Optional UPS", "Required at hospitals, airports, federal facilities"],
    ],
  }),
  specList({
    heading: "Vending machine infrastructure specifications",
    items: [
      { label: "Power — 120V/20A dedicated outlet", value: "Standard for refrigerated machines. Compressor inrush exceeds 15A circuits; dedicated 20A prevents breaker trips. Sharing 20A circuit between refrigerated machine and other appliances (microwave, coffee) reliably trips. Specify dedicated at install." },
      { label: "GFCI in required occupancies", value: "NEC requires GFCI in kitchens, bathrooms, outdoor placements, basements (some jurisdictions). Operators should specify GFCI-compatible electronics; some compressor inrush can nuisance-trip GFCI. Coordinate with electrician at install." },
      { label: "Surge protection", value: "Surge protector at outlet ($30-60) or whole-circuit surge ($150-300) recommended. Cashless payment hardware is surge-sensitive; replacement cost $300-800. Cheap insurance; standard at modern operator install." },
      { label: "Cellular telemetry", value: "Modern cashless boards include cellular SIM for telemetry. Operator manages SIM and data plan as part of standard service. Cellular preferred over Wi-Fi — independent of facility network, doesn't go down with building Wi-Fi failures, easier to deploy at outdoor / remote sites." },
      { label: "Wi-Fi fallback (where needed)", value: "Some installations use Wi-Fi as fallback (operator's cellular fails). Coordinate with facility IT on guest Wi-Fi access or dedicated network. Some integrations (building management systems, facility management systems) require Wi-Fi for additional data flows." },
      { label: "Water supply (specialty)", value: "Coffee / espresso machines need 1/4 inch RO water line. Some AI cooler walls with fresh food need water for cleaning. Coordinate with plumber at install. Often requires plumber visit before machine delivery." },
      { label: "Drainage (specialty)", value: "Coffee machines need drain. Fresh food AI cooler walls need drainage and refrigeration condensate drain. Coordinate at install survey. Don't deploy specialty equipment without verifying drainage path." },
      { label: "Generator backup (where required)", value: "Hospitals, airports, federal facilities, designated emergency shelters require generator backup for continuous operation. UPS minimum at standard commercial placements; generator integration at emergency-capable sites. Verify with facilities at install." },
      { label: "Doorway clearance + floor load", value: "Doorway clearance 36-42 inches typical (48+ for specialty equipment). Floor load 80-170 psf when stocked. Verify at install survey; some older buildings or mezzanines may need structural verification." },
    ],
  }),
  tipCards({
    heading: "Five vending infrastructure mistakes",
    sub: "Each is documented in operator install-survey reviews. All preventable with proper site assessment.",
    items: [
      { title: "15A circuit for refrigerated machine", body: "Most common installation mistake. Compressor inrush exceeds 15A breaker; trips intermittently. Machine appears 'broken' when it's actually the circuit. Specify dedicated 20A at install; budget for electrician where current circuit insufficient." },
      { title: "Two-prong or ungrounded outlets", body: "Older buildings sometimes have three-prong outlets that aren't actually grounded (lost when building was rewired). Test with $5 outlet tester before install. Ungrounded outlet voids warranty and can cause cashless hardware faults." },
      { title: "Wi-Fi-only telemetry at airports / outdoor sites", body: "Wi-Fi alone fails when facility network goes down. Cellular telemetry independent of facility network is the baseline at modern operators. Operators using Wi-Fi exclusively miss anomalies and lose monitoring during outages." },
      { title: "Skipping water supply for coffee / espresso", body: "Coffee / espresso machines need 1/4 inch RO water line. Operators that try to deliver without verifying water supply face install reschedules. Coordinate with plumber at install survey; budget for plumber visit before machine delivery." },
      { title: "Doorway / floor load not verified", body: "Most full-size machines need 36-42 inch doorway clearance. Stocked weight 1,000-1,400 lb. Older buildings or mezzanines may not support. Verify at install survey; don't deliver machine without confirming clearance and floor load.", },
    ],
  }),
  inlineCta({
    text: "Want the vending machine install survey checklist (power, GFCI, cellular, water, drainage)?",
    buttonLabel: "Get the install survey checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine installations across offices, schools, campuses, hospitals, airports, and federal sites — coordinating with facilities, electricians, plumbers, and AHJs on power, telemetry, and specialty infrastructure. The benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do vending machines need Wi-Fi?", answer: "Typically no. Modern machines use cellular telemetry (cellular SIM in cashless board). Operator manages SIM and data plan as part of standard service. Wi-Fi works as fallback at offices, campuses, hospitals; fails at outdoor / remote / airport-outage scenarios. Cellular preferred.", audience: "Property Managers" },
      { question: "What power do vending machines need?", answer: "120V/20A dedicated outlet for refrigerated machines. GFCI in required occupancies (kitchens, bathrooms, outdoor). Surge protection recommended. Specialty machines (ice cream, AI cooler walls) may need 240V/30A. Verify spec at install survey.", audience: "Facilities" },
      { question: "Can I plug a vending machine into a regular outlet?", answer: "Snack-only machines: usually yes, on a 20A circuit. Refrigerated machines: no — need dedicated 20A grounded outlet. 15A circuits trip the breaker on compressor startup. Most common installation mistake.", audience: "Property Managers" },
      { question: "Does the operator provide cellular service?", answer: "Yes. Modern operators include cellular SIM and data plan as part of standard service. No additional cost to host. Operator's cashless board includes cellular connectivity. Verify telemetry coverage at install.", audience: "Operators" },
      { question: "Do coffee / espresso machines need water?", answer: "Yes. 1/4 inch RO water line. Coordinate with plumber at install survey. Some AI cooler walls with fresh food also need water for cleaning. Don't deploy specialty equipment without verifying water supply and drainage.", audience: "Operators" },
      { question: "What about specialty equipment?", answer: "Ice cream / freezer units may need 240V/30A. AI cooler walls with multi-zone refrigeration may need 240V/30A + drainage. Coffee / espresso need water + drainage. Verify with operator spec sheet at install survey.", audience: "Facilities" },
      { question: "Do we need generator backup?", answer: "Required at hospitals, airports, federal facilities, designated emergency shelters. UPS minimum at standard commercial placements. Verify with facilities at install — emergency-capable sites coordinate vending into facility's broader backup power infrastructure.", audience: "Facility Managers" },
      { question: "What if my outlet doesn't meet spec?", answer: "Schedule electrician before machine delivery. $150-500 typical for short circuit run from panel. Operator install crew won't proceed with non-spec circuit on refrigerated machine because warranty and reliability depend on proper circuit.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing commercial outlet, GFCI, and circuit requirements" },
      { label: "FCC — cellular coverage and standards", url: "https://www.fcc.gov/", note: "Federal coverage of cellular standards relevant to telemetry connectivity" },
      { label: "NEMA — outlet standards", url: "https://www.nema.org/", note: "Outlet and plug standard reference" },
      { label: "ENERGY STAR — vending machine certification", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Federal energy efficiency program; consumption baseline data" },
      { label: "NAMA — vending equipment installation standards", url: "https://www.namanow.org/", note: "Industry guidance on vending installation and infrastructure" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and installation guides",
    items: [
      { eyebrow: "Sister guide", title: "Do vending machines require special outlets?", description: "Electrical specifications, GFCI, surge protection, and circuit dedication for vending placements.", href: "/vending-faq/do-vending-machines-require-special-outlets" },
      { eyebrow: "Operations", title: "How are vending machines installed?", description: "End-to-end installation process — site survey, electrical, delivery, setup, and verification.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, and ongoing operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
