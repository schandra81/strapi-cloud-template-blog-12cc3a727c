import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-place-vending-machine-in-airport", [
  tldr({
    heading: "How do you actually place a vending machine in an airport — and what permitting, security, and concessions framework applies?",
    paragraph:
      "Placing a vending machine in an airport is not like placing one in an office. Airports are federally regulated facilities under FAA airport operating certification (14 CFR Part 139), with security overlay under TSA airport security (49 CFR Part 1542), concessions framework under FAA AIP grant assurances (Order 5190.6B and Order 8000.94 covering airport concessions), and DBE participation under 49 CFR Part 23 for primary airport concessions. Most airports operate concessions under a master concessionaire model (HMSHost, Paradies Lagardère, OTG, Areas) or a direct-to-airport concession agreement with revenue share to the airport sponsor. Vending placements are typically subordinate to the master concession framework — either operated by the master concessionaire directly, by a vending operator under sub-concession agreement, or by direct concession with the airport sponsor at smaller airports or non-revenue placements (employee break areas, TSA crew rooms, airline operations). The placement playbook runs across nine fronts: (1) determine concession model (master concession sub-agreement vs direct concession vs airport-operated employee placement); (2) identify zone (pre-security/landside, post-security/airside, employee/operations, hold rooms, terminal common areas); (3) navigate TSA security (TSA-cleared route staff with SIDA badge or escort, restock during specific windows, food and beverage screened where required); (4) navigate DBE participation under 49 CFR Part 23 at primary airports; (5) coordinate with airport operations, terminal management, and concessions office; (6) coordinate with TSA Federal Security Director (FSD) and Airport Security Coordinator (ASC); (7) specify equipment — TSA-cleared cabinet design, anti-tamper features, security-cleared restock procedures, post-security supply chain via known shipper or screened freight; (8) specify telemetry and payment surface with airport-grade redundancy (cellular plus airport wifi backup), PCI-DSS v4.0 compliance, mobile wallet, multi-currency at international gateways; (9) negotiate revenue share, term, and reporting with the airport sponsor or master concessionaire. Timeline from concept to install runs 6-18 months at primary airports (longer than office or industrial placements due to concessions framework, TSA security, and operations coordination); 3-9 months at non-revenue employee placements. Written for airport concessions managers, vending operators evaluating airport placements, terminal management, airport sponsor staff, and master concessionaires.",
    bullets: [
      { emphasis: "Airports operate under FAA + TSA + concessions + DBE regulatory framework:",
        text: "14 CFR Part 139 airport operating certification, 49 CFR Part 1542 TSA airport security, FAA Order 5190.6B and 8000.94 concessions framework, 49 CFR Part 23 DBE participation at primary airports. Vending placements subordinate to master concession framework typically." },
      { emphasis: "Three concession models — master sub-agreement, direct concession, employee placement:",
        text: "Master concessionaire (HMSHost, Paradies Lagardère, OTG, Areas) operates most public placements; sub-concession agreement with vending operator common. Direct concession with airport sponsor at smaller airports or non-revenue placements (employee break areas, TSA crew rooms, airline operations)." },
      { emphasis: "Timeline 6-18 months at primary airports — TSA security plus concessions coordination drives it:",
        text: "TSA security coordination (SIDA badge or escort, restock windows, known shipper or screened freight), concessions framework (master concessionaire sub-agreement, DBE participation, revenue share), and operations coordination (terminal management, FSD/ASC, airport ops) extend timeline vs office placements." },
    ],
  }),
  statStrip({
    heading: "Airport vending placement benchmarks",
    stats: [
      { number: "6-18 mo", label: "concept-to-install timeline at primary airports", sub: "TSA security plus concessions coordination", accent: "orange" },
      { number: "3", label: "concession models", sub: "master sub-agreement, direct concession, employee placement", accent: "blue" },
      { number: "DBE", label: "participation under 49 CFR Part 23", sub: "applies at primary airports for concessions", accent: "orange" },
      { number: "Airside +", label: "landside + employee zones", sub: "each has distinct security and supply chain procedures", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Three airport concession models compared",
    sub: "Choose by airport size, placement zone, and revenue profile. Master concession sub-agreement is most common at primary airports for public placements.",
    headers: ["Model", "Structure", "Best fit", "Revenue share"],
    rows: [
      ["Master concession sub-agreement", "Vending operator subcontracts under master concessionaire (HMSHost, Paradies Lagardère, OTG, Areas)", "Primary airport airside and landside public placements", "Sub-concession share 70-85% to master, 15-30% to vending operator after airport-sponsor share"],
      ["Direct concession with airport sponsor", "Vending operator contracts directly with airport sponsor (city, port authority, special district)", "Smaller airports or specific zones outside master concession scope", "Direct revenue share 5-25% to airport sponsor depending on placement type and volume"],
      ["Employee placement (non-revenue)", "Vending operator places at employee break areas, TSA crew rooms, airline operations, ground service equipment shops", "Non-public placements serving airport workforce", "No airport-sponsor share typically; placement is amenity for airport workforce"],
      ["Hybrid (mixed public + employee)", "Combination of master sub-agreement (public) and direct/employee placement (workforce)", "Mid-size airports with mixed public and workforce demand", "Mixed revenue share by placement type"],
    ],
  }),
  specList({
    heading: "Nine airport vending placement specifications",
    items: [
      { label: "Concession model determination", value: "Identify whether placement falls under master concession sub-agreement (HMSHost, Paradies Lagardère, OTG, Areas at most primary airports for public placements), direct concession with airport sponsor (city, port authority, special district), or employee placement (non-revenue placement at break areas, TSA crew rooms, airline operations). Most primary airport public placements are master concession sub-agreements; smaller airports and employee placements are direct or airport-operated." },
      { label: "Zone identification", value: "Pre-security/landside (ticketing, baggage claim, terminal entrance — public access, lower TSA constraint), post-security/airside (gate areas, concourses, hold rooms — TSA-controlled access, screened supply chain), employee/operations (TSA crew rooms, airline operations, ground service equipment shops, fuel farms — workforce-only access), and terminal common areas (food courts, observation decks). Each zone has distinct security and supply chain procedures." },
      { label: "TSA security coordination", value: "TSA-cleared route staff with SIDA badge (Security Identification Display Area) for unescorted access to airside placements, or escort by SIDA-badged airport staff. Restock during specific windows (typically overnight or low-traffic periods). Food and beverage screened where required for airside delivery. Coordinate with TSA Federal Security Director (FSD) and Airport Security Coordinator (ASC) at concept stage. SIDA badging process 30-90 days typical including TSA Security Threat Assessment (STA) under 49 CFR Part 1542.203." },
      { label: "DBE participation under 49 CFR Part 23", value: "Disadvantaged Business Enterprise participation requirements apply to primary airports under 49 CFR Part 23. Airport sponsor sets DBE goal for concessions (typically 5-25% of concession revenue or specific concession categories). Vending placements subject to DBE goal where applicable. DBE-certified operators or DBE joint venture structures common at primary airport placements. Verify DBE requirement with airport concessions office at concept stage." },
      { label: "Equipment and anti-tamper specification", value: "TSA-cleared cabinet design with anti-tamper features (tamper-evident seals at restock access, hardened chassis, anti-tipping anchoring in high-traffic zones). Post-security supply chain via known shipper or screened freight where required. Cellular telemetry with redundancy (cellular plus airport wifi backup at supported placements). Cellular signal coordination with airport IT for in-terminal RF environment. IP54-rated payment terminal at zones with humidity exposure (gates near jet bridges, baggage claim with weather exposure)." },
      { label: "Payment surface and traveler accessibility", value: "EMV/NFC card reader plus mobile wallet (Apple Pay, Google Pay) plus contactless EMV for international travelers. Multi-currency support at international gateways with USD plus CAD/EUR/GBP/JPY support depending on route mix. PCI-DSS v4.0 tokenized payment. ADA accessibility (reach range 15-48 inches, payment surface accessibility, audio output where supported). Allergen labeling at every SKU position with multi-language labeling at international gateways." },
      { label: "Telemetry and operations", value: "Cellular telemetry with anomaly detection (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM). Telemetry-driven restock cadence aligned to TSA-coordinated windows. Anomaly response 24-48h modern standard with coordination via airport operations dispatch and master concessionaire dispatch where applicable. Refund and dispute portal via QR or NFC at the cabinet with 24h response SLA — critical at traveler-facing placements where one-time interaction means missed-flight stakes." },
      { label: "Revenue share, term, and reporting", value: "Revenue share structure varies by concession model — master sub-agreement at 15-30% to vending operator after master and airport shares; direct concession at 5-25% to airport sponsor; employee placement typically no airport share. Initial term 3-5 years typical with explicit notice periods at renewal. Monthly statement format with revenue-share methodology transparent. Quarterly QBR with master concessionaire or airport sponsor. Annual contract health check." },
      { label: "DOT and FAA compliance reporting", value: "Reporting to airport sponsor on revenue, SKU mix, allergen labeling, ESG metrics where required. ACDBE (Airport Concession Disadvantaged Business Enterprise) reporting at primary airports under 49 CFR Part 23. FAA grant assurance compliance reporting where AIP-funded improvements affect placement. Sustainability reporting at airports with carbon-neutrality plans or LEED-certified terminals (ENERGY STAR fleet share, low-GWP refrigerant share, packaging mix, recycling capture)." },
      { label: "Operator capability and reference verification", value: "Airport vending requires operators with airport experience (TSA security coordination, master concession sub-agreement experience, DBE structure or partnership where applicable, multi-currency payment, multi-language allergen labeling, 24/7 service responsiveness at traveler-facing placements). Verify references at 2-3 comparable airport placements at proposal. Generic vending operators routinely fail TSA security coordination and produce 30-60% lower utilization at airport placements due to capability gaps." },
    ],
  }),
  timeline({
    heading: "Airport vending placement playbook",
    sub: "What happens from concept through install at a primary airport. Total elapsed 6-18 months; shorter at non-revenue employee placements (3-9 months).",
    howToName: "How to place a vending machine in an airport",
    totalTime: "P540D",
    steps: [
      { label: "STEP 1", title: "Concept and concession model determination", description: "Identify placement zone (landside, airside, employee, terminal common) and concession model (master sub-agreement, direct concession, employee placement). Coordinate with airport concessions office at concept stage to confirm model and any DBE goal under 49 CFR Part 23. 30-60 days." },
      { label: "STEP 2", title: "RFP issuance or master sub-agreement engagement", description: "Structured RFP at direct concession placements (smaller airports, employee placements). Master sub-agreement engagement at primary airport public placements — engage master concessionaire (HMSHost, Paradies Lagardère, OTG, Areas) for sub-concession opportunity. 60-90 days at primary airports including DBE goal alignment." },
      { label: "STEP 3", title: "Operator selection and capability verification", description: "Score proposals against capability matrix (TSA security coordination, master concession sub-agreement experience, DBE structure, multi-currency payment, allergen labeling, 24/7 service responsiveness). Verify references at 2-3 comparable airport placements. Shortlist 2-3 operators for site walks. 30-60 days." },
      { label: "STEP 4", title: "Site walk with TSA + concessions + airport ops coordination", description: "On-site walk with airport operations, master concessionaire (where applicable), TSA FSD/ASC, and concessions office. Cover placement zone, electrical, cellular signal in airport RF environment, ADA accessibility, anti-tamper specification, supply chain access (known shipper vs screened freight), and restock window coordination. 30-45 days." },
      { label: "STEP 5", title: "SIDA badging and TSA STA for route staff", description: "TSA Security Threat Assessment (STA) under 49 CFR Part 1542.203 for route staff requiring unescorted SIDA access. Process 30-90 days typical including fingerprinting, criminal history records check, and TSA approval. Alternative — escort by SIDA-badged airport staff at non-revenue placements where badging is impractical." },
      { label: "STEP 6", title: "Equipment procurement and TSA-cleared cabinet specification", description: "Equipment procurement with TSA-cleared cabinet design, anti-tamper features (tamper-evident seals, hardened chassis, anti-tipping anchoring), cellular telemetry with airport wifi backup, IP54-rated payment terminal where humidity exposure applies, multi-currency payment surface at international gateways. 30-60 days." },
      { label: "STEP 7", title: "Sub-concession agreement or direct concession contract", description: "Sub-concession agreement with master concessionaire at primary airport public placements; direct concession contract with airport sponsor at smaller airports or non-revenue placements. Cover revenue share, term, reporting, DBE participation, compliance and audit support, insurance and indemnification, force majeure, and renegotiation triggers. 60-120 days drafting and legal review." },
      { label: "STEP 8", title: "Install with TSA + operations coordination", description: "Install during agreed window with TSA + operations + master concessionaire coordination. SIDA-badged staff or escort. Equipment delivery via approved supply chain. Telemetry activation with airport IT coordination. Test vend and walkthrough with concessions office and operations. 1-3 days for single placement; longer for multi-placement deployment." },
      { label: "STEP 9", title: "Operations launch and quarterly QBR cadence", description: "Operations launch with restock cadence aligned to TSA-coordinated windows, refund and dispute portal active, 24/7 service responsiveness. Calendar quarterly QBR with master concessionaire or airport sponsor covering revenue, SKU mix, allergen labeling, ESG reporting where required, ACDBE reporting at primary airports, and SLA performance. Annual contract health check." },
    ],
  }),
  tipCards({
    heading: "Five airport vending placement mistakes",
    sub: "Each documented in airport concessions post-mortems and operator-side airport program reviews. All preventable with structured concession model and operator capability vetting.",
    items: [
      { title: "Skipping concession model determination — bypassing master concessionaire framework", body: "Vending operator approaches airport sponsor directly for public placement that falls under existing master concessionaire scope (HMSHost, Paradies Lagardère, OTG, Areas). Airport refers operator back to master concessionaire; timeline restarts. Determine concession model at concept stage; engage master concessionaire for sub-concession opportunity at primary airport public placements." },
      { title: "Missing DBE participation at primary airports", body: "Primary airports subject to 49 CFR Part 23 DBE participation goals. Non-DBE operators without DBE structure or partnership often disqualified at primary airport concession opportunities. Verify DBE requirement with airport concessions office at concept stage; partner with DBE-certified operator or restructure where required." },
      { title: "Inadequate TSA security coordination — restock blocked at airside", body: "Vending operator deploys without TSA-cleared route staff (SIDA badge or escort) for airside placement. Restock blocked at TSA checkpoint; placement runs to stockout; service tickets multiply. Plan SIDA badging or escort coordination at concept stage; 30-90 day TSA STA process under 49 CFR Part 1542.203 is critical path." },
      { title: "No multi-currency or multi-language at international gateways", body: "International gateway placements without multi-currency payment (USD plus CAD/EUR/GBP/JPY support depending on route mix) and multi-language allergen labeling produce 25-40% utilization gap vs international-traveler-equipped placements. Specify multi-currency and multi-language at proposal at international gateways." },
      { title: "Cellular signal not coordinated with airport IT — telemetry blind in terminal", body: "Vending operator deploys with cellular telemetry assuming standard coverage. Airport in-terminal RF environment differs from typical commercial (Faraday-like terminal structure, jet bridge attenuation). Coordinate cellular signal with airport IT at concept stage; cellular plus airport wifi backup at supported placements. Verify signal at exact install location during site walk." },
    ],
  }),
  decisionTree({
    heading: "Is our airport vending placement structured for the right concession model?",
    question: "Have we determined concession model (master sub-agreement vs direct concession vs employee placement) AND coordinated TSA security plus DBE participation plus operations plus master concessionaire (where applicable) at concept stage AND verified operator capability for airport environment?",
    yesBranch: {
      title: "Placement is structured — proceed to RFP or master sub-agreement engagement.",
      description: "Concession model determined (master sub-agreement at primary airport public placement, direct concession at smaller airport or non-revenue, employee placement at workforce). TSA security coordination underway (SIDA badging or escort plan). DBE participation aligned under 49 CFR Part 23 where applicable. Master concessionaire engaged where applicable (HMSHost, Paradies Lagardère, OTG, Areas). Operator capability verified at 2-3 comparable airport references. Proceed to RFP or master sub-agreement engagement with structured operator capability matrix.",
      finalTone: "go",
      finalLabel: "STRUCTURED PLACEMENT",
    },
    noBranch: {
      title: "Coordination gaps — schedule airport concessions office engagement at concept stage.",
      description: "One or more coordination elements (concession model, TSA security, DBE participation, master concessionaire engagement, operator capability) is missing or unclear. Schedule airport concessions office engagement at concept stage; coordinate TSA FSD/ASC; engage master concessionaire where applicable; verify DBE requirement; vet operator capability against airport references. Skipping coordination at concept costs 3-9 months in timeline rework at primary airports.",
      finalTone: "stop",
      finalLabel: "CONCEPT COORDINATION NEEDED",
    },
  }),
  caseStudy({
    tag: "REPRESENTATIVE PROGRAM SHAPE",
    title: "What an airside primary airport sub-concession placement looks like",
    context:
      "Representative shape for an airside gate-area placement at a primary airport with master concessionaire sub-agreement, DBE participation under 49 CFR Part 23, TSA security coordination with SIDA-badged route staff, multi-currency payment surface, multi-language allergen labeling, and 24/7 service responsiveness aligned to TSA-coordinated restock windows.",
    meta: [
      { label: "Airport profile", value: "Primary airport with master concessionaire framework (HMSHost or equivalent)" },
      { label: "Placement zone", value: "Airside gate area with TSA-controlled access" },
      { label: "Concession model", value: "Master concession sub-agreement with DBE participation under 49 CFR Part 23" },
      { label: "Service window", value: "TSA-coordinated overnight restock with SIDA-badged route staff" },
    ],
    results: [
      { number: "SIDA-badged", label: "route staff via TSA STA under 49 CFR Part 1542.203 for unescorted airside access" },
      { number: "Multi-currency", label: "USD plus CAD/EUR/GBP/JPY at international gateway sub-concession" },
      { number: "24/7", label: "service responsiveness with refund and dispute portal via QR at the cabinet" },
      { number: "Quarterly", label: "ESG and ACDBE reporting to master concessionaire and airport sponsor" },
    ],
  }),
  inlineCta({
    text: "Want the airport vending placement framework (concession model determination, TSA security checklist, operator capability matrix, master sub-agreement template)?",
    buttonLabel: "Get the airport framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support airport vending placement evaluation — including concession model determination (master sub-agreement, direct concession, employee placement), TSA security coordination under 49 CFR Part 1542 (SIDA badging via TSA STA, restock window coordination, food and beverage screened where required), DBE participation under 49 CFR Part 23 at primary airports, master concessionaire engagement (HMSHost, Paradies Lagardère, OTG, Areas), FAA grant assurance and concessions framework alignment (Order 5190.6B and 8000.94), multi-currency payment surface and multi-language allergen labeling at international gateways, cellular telemetry with airport-grade redundancy, and operator capability vetting against 2-3 comparable airport references. Recommendations reflect operator-side data and airport-sector outcomes across primary and non-primary airport placements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does vending placement work at an airport?", answer: "Airports operate concessions under FAA + TSA + concessions + DBE regulatory framework. Three concession models — master concession sub-agreement (HMSHost, Paradies Lagardère, OTG, Areas at most primary airports for public placements), direct concession with airport sponsor (smaller airports or specific zones), or employee placement (non-revenue at break areas, TSA crew rooms, airline operations). Timeline 6-18 months at primary airports.", audience: "Concessions Manager" },
      { question: "What's the TSA security coordination process?", answer: "TSA-cleared route staff with SIDA badge for unescorted airside access (TSA Security Threat Assessment under 49 CFR Part 1542.203 — 30-90 day process) or escort by SIDA-badged airport staff. Restock during TSA-coordinated windows (typically overnight or low-traffic periods). Food and beverage screened where required. Coordinate with TSA Federal Security Director (FSD) and Airport Security Coordinator (ASC) at concept stage.", audience: "TSA Liaison" },
      { question: "Does DBE participation apply at airport vending placements?", answer: "Yes at primary airports under 49 CFR Part 23. Airport sponsor sets DBE goal for concessions (typically 5-25% of concession revenue or specific concession categories). Vending placements subject to DBE goal where applicable. DBE-certified operators or DBE joint venture structures common at primary airport placements. Verify DBE requirement with airport concessions office at concept stage.", audience: "Procurement" },
      { question: "What equipment specifications apply at airport placements?", answer: "TSA-cleared cabinet design with anti-tamper features (tamper-evident seals, hardened chassis, anti-tipping anchoring), cellular telemetry with airport wifi backup, IP54-rated payment terminal where humidity exposure applies, multi-currency payment surface at international gateways, multi-language allergen labeling, ADA accessibility, ENERGY STAR certification at airports with carbon-neutrality plans.", audience: "Operations" },
      { question: "How long does the timeline run?", answer: "6-18 months at primary airports concept to install — TSA security coordination, concessions framework (master concessionaire sub-agreement, DBE participation, revenue share), and operations coordination (terminal management, FSD/ASC, airport ops) drive timeline. 3-9 months at non-revenue employee placements where TSA and concessions framework constraints are reduced.", audience: "Operations" },
      { question: "What revenue share applies?", answer: "Master sub-agreement at 15-30% to vending operator after master concessionaire and airport-sponsor shares. Direct concession at 5-25% to airport sponsor depending on placement type and volume. Employee placement typically no airport share — placement is amenity for airport workforce. Monthly statement with revenue-share methodology transparent at all models.", audience: "Finance" },
      { question: "What about international travelers?", answer: "Multi-currency payment surface at international gateways with USD plus CAD/EUR/GBP/JPY support depending on route mix. Multi-language allergen labeling. ADA accessibility plus international accessibility (audio output, large-text option, reach range). PCI-DSS v4.0 with international card scheme support (Visa, Mastercard, Amex, JCB, UnionPay, Discover).", audience: "Operations" },
      { question: "Which operators do airport vending well?", answer: "Operators with airport experience (TSA security coordination, master concession sub-agreement experience, DBE structure or partnership where applicable, multi-currency payment, multi-language allergen labeling, 24/7 service responsiveness at traveler-facing placements). Verify references at 2-3 comparable airport placements at proposal. Generic vending operators routinely fail TSA coordination at airport placements.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FAA — 14 CFR Part 139 Airport Operating Certification", url: "https://www.faa.gov/airports/airport_safety/part139_cert", note: "Federal FAA standard for airport operating certification including concessions framework and airport sponsor obligations" },
      { label: "TSA — 49 CFR Part 1542 Airport Security", url: "https://www.tsa.gov/about/laws-regulations", note: "Federal TSA standard for airport security including SIDA access, Security Threat Assessment, and supply chain coordination" },
      { label: "49 CFR Part 23 — Airport Concession Disadvantaged Business Enterprise (ACDBE)", url: "https://www.transportation.gov/civil-rights/disadvantaged-business-enterprise/airport-concession-disadvantaged", note: "Federal DOT/FAA standard for DBE participation at primary airport concessions including vending placements" },
      { label: "FAA Order 5190.6B and 8000.94 — Airport Compliance and Concessions Framework", url: "https://www.faa.gov/airports/resources/publications/orders/", note: "FAA grant assurance and concessions framework guidance for airport sponsors" },
      { label: "PCI Security Standards Council — PCI DSS v4.0", url: "https://www.pcisecuritystandards.org/", note: "Payment Card Industry Data Security Standard governing card payment at airport vending placements including international card scheme support" },
    ],
  }),
  relatedGuides({
    heading: "Related airport vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Airport vending contracts and permits", description: "Concession agreement structure, permit and badge requirements, and operator capability for airport placements.", href: "/vending-for-airports/airport-vending-contracts-and-permits" },
      { eyebrow: "Operations", title: "Best places for airport vending", description: "Placement zone strategy across landside, airside, employee, and terminal common areas.", href: "/vending-for-airports/best-places-for-airport-vending" },
      { eyebrow: "Hub", title: "All airport vending guides", description: "Concessions framework, TSA security, equipment, multi-currency, and operator capability for airport placements.", href: "/vending-for-airports" },
    ],
  }),
]);
process.exit(0);
