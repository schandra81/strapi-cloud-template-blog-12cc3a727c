import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("noise-reduction-vending-construction", [
  tldr({
    heading: "Does vending machine noise matter at a construction site, and what should you do about it?",
    paragraph:
      "Construction-site ambient noise typically runs 80-110 dBA at active phases (concrete pours, demolition, framing, MEP rough-in) — far above any vending machine's 45-65 dBA output. On the open site itself, vending noise is functionally inaudible against background and rarely the limiting factor. The actual noise-sensitive contexts are different from what offices and warehouses worry about: trailer-adjacent placements where site offices, GC superintendents, project engineers, safety officers, and inspector visitors hold meetings; permitted residential adjacencies governed by municipal construction-noise ordinances (typically 55-65 dBA at the property line during off-hours, 70-85 dBA during permitted work hours); shift-overlap break periods where 20-40 crew members congregate at a single vending placement and dispense mechanisms cycle in rapid succession; and overnight site-security periods when ambient drops 30-50 dBA and an unattended machine becomes the dominant noise source. Three mitigations matter on construction sites: trailer-adjacent acoustic separation (placement 15-25 feet from trailer door, not against the trailer wall), low-noise model selection (ENERGY STAR + variable-speed compressor for 3-5 dBA reduction), and defrost scheduling outside trailer business hours and after permitted-noise windows. Outdoor-rated equipment is already louder than indoor equivalents (sealed enclosures + larger condensers); explicitly spec low-noise outdoor SKUs at sensitive placements. Construction sites without noise-conscious deployment generate complaints from site supervisors, project engineers, and (worst case) neighboring residential — all of which produce removal requests and damage the GC's vending program reputation.",
    bullets: [
      { emphasis: "Construction ambient is loud — but the sensitive contexts are specific:", text: "80-110 dBA on the active site, but trailer offices, residential adjacencies, shift-overlap break clusters, and overnight security periods are where vending noise matters." },
      { emphasis: "Trailer-adjacent placement is the #1 issue:", text: "Site offices, superintendents, project engineers, safety officers hold meetings. Place 15-25 feet from trailer door; never against shared trailer wall." },
      { emphasis: "Municipal construction-noise ordinances apply:", text: "Residential-adjacent sites have 55-65 dBA property-line limits during off-hours. Verify with municipal noise ordinance at install survey; coordinate operator service windows." },
    ],
  }),
  statStrip({
    heading: "Construction site vending noise benchmarks",
    stats: [
      { number: "80-110 dBA", label: "active construction ambient", sub: "vending inaudible against background", accent: "orange" },
      { number: "55-65 dBA", label: "residential property line", sub: "off-hours municipal ordinance typical", accent: "blue" },
      { number: "15-25 ft", label: "trailer-adjacent separation", sub: "from trailer door / shared wall", accent: "blue" },
      { number: "3-5 dBA", label: "ENERGY STAR + variable-speed", sub: "vs legacy outdoor SKUs", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Construction site contexts and vending noise considerations",
    sub: "On-site contexts vary widely. Match placement strategy and equipment selection to noise profile of the specific context.",
    headers: ["Construction context", "Typical ambient", "Noise sensitivity", "Vending placement approach"],
    rows: [
      ["Active production phase (framing, MEP)", "85-105 dBA", "None — vending inaudible", "Place freely; security and weather drive placement"],
      ["Demolition / concrete pour", "95-115 dBA", "None during active work", "Place freely; service routes outside active periods"],
      ["Trailer-adjacent (site office)", "45-60 dBA inside trailer", "High — meetings, calls, GC oversight", "15-25 ft separation, low-noise model, defrost outside business hours"],
      ["Restroom-adjacent / break area", "55-75 dBA peak", "Medium — shift-overlap clusters", "Acoustic separation from seating, variable-speed compressor"],
      ["Gate-adjacent (security check-in)", "50-70 dBA", "Medium — radio communication", "Standard placement OK; verify guard-shack adjacency"],
      ["Residential property-line adjacency", "Varies (50-70 dBA evenings)", "High — municipal ordinance applies", "Verify ordinance, schedule service in permitted window, low-noise SKU"],
      ["Overnight security period", "40-55 dBA quiet", "Medium — machine becomes dominant source", "Defrost scheduling, variable-speed compressor, telemetry-driven anomaly"],
      ["Inspector visit / safety walk", "Same as ambient", "Low — short duration", "No additional measures needed"],
      ["Punch-list / finish phase", "60-80 dBA", "Medium — interior trades sensitive", "Coordinate with finish trades on placement"],
    ],
  }),
  specList({
    heading: "Construction site noise reduction specifications",
    items: [
      { label: "Trailer-adjacent acoustic separation", value: "Place machine 15-25 feet from trailer door. Never against shared trailer wall. Avoid placement under trailer-facing canopy where trailer wall acts as sound-board. Trailer interior runs 45-60 dBA; even modest vending noise audibly intrudes on superintendent meetings, project-engineer calls, and inspector visits. Verify orientation at install survey with GC superintendent." },
      { label: "Municipal construction-noise ordinance verification", value: "Most municipalities have construction-noise ordinances — typically 55-65 dBA at the property line during off-hours (often 7 PM-7 AM weekdays, all-day Sunday), 70-85 dBA during permitted work hours. Residential-adjacent sites particularly enforced. Verify ordinance at install survey; documented evidence supports operator service-window coordination + ordinance compliance posture." },
      { label: "Low-noise outdoor-rated model selection", value: "Outdoor-rated SKUs typically louder than indoor equivalents due to sealed enclosures + larger condensers + ruggedized fans. Explicitly spec low-noise outdoor models — Royal Vendors RVCC series, Vendo OutdoorPro, AMS Sensit weather-resistant low-noise variants, USCo outdoor low-noise. ENERGY STAR + variable-speed compressor produces 3-5 dBA reduction vs legacy outdoor SKUs. Spec into operator procurement." },
      { label: "Variable-speed compressor for overnight quiet", value: "Variable-speed compressors run continuously at lower RPM rather than on/off cycling. Net noise lower because no compressor-start transients. Particularly relevant overnight when ambient drops 30-50 dBA and machine becomes dominant noise source. Cellular telemetry-confirmed cycling pattern useful diagnostic. Modern outdoor SKUs increasingly variable-speed standard." },
      { label: "Defrost scheduling outside trailer hours + permitted windows", value: "Refrigerated outdoor units defrost 1-3 times per day; defrost cycle produces 60-70 dBA for 15-25 minutes. Schedule defrost outside trailer business hours (6 AM-6 PM avoid; defrost overnight or mid-day during active production-phase ambient) and after off-hours municipal noise window. Operator-side telemetry-driven scheduling." },
      { label: "Shift-overlap break cluster mitigation", value: "Shift change (typically 6-7 AM start, 2-3 PM end at single-shift sites; 3-shift overlap at industrial-pace sites) produces clusters of 20-40 crew at single vending placement. Dispense mechanisms cycle in rapid succession 60-70 dBA each. Distribute placement across 2-3 locations rather than concentrate at 1; reduces peak noise + reduces queue + spreads service load." },
      { label: "Service-route timing aligned with ambient", value: "Operator service routes (delivery truck, restock activity, hand-truck movement) produce 65-80 dBA loading noise. Schedule during active production-phase ambient (8 AM-3 PM typical) rather than early morning before crew arrival or evening after departure. Coordinates with construction-experienced operator routing." },
      { label: "Outdoor canopy acoustic considerations", value: "Canopy / weather-protection structure over outdoor machine can act as sound reflector toward sensitive context. Orient canopy opening away from trailer / residential / quiet adjacency. Acoustic absorber panels (outdoor-rated) on canopy interior add 3-6 dBA reduction at additional spec." },
      { label: "Complaint workflow + monitoring", value: "Document noise complaints from GC, trailer occupants, residential neighbors, inspector visits. Pattern complaints trigger placement review (relocate, low-noise model swap, defrost reschedule, acoustic barrier add). Without complaint workflow, noise issues drift to removal request — damages GC's vending program reputation at future projects." },
    ],
  }),
  decisionTree({
    heading: "Should this placement get low-noise vending equipment?",
    question: "Is the placement within 25 feet of a trailer / residential property line / quiet adjacency, OR active overnight?",
    yesBranch: {
      title: "Spec low-noise outdoor SKU with variable-speed compressor + defrost scheduling",
      description: "ENERGY STAR + variable-speed compressor + acoustic-separation placement + defrost scheduled outside sensitive windows. Capital premium 5-12% vs base outdoor SKU; operational savings + complaint reduction justify.",
      finalLabel: "Low-noise spec required",
    },
    noBranch: {
      title: "Standard outdoor-rated SKU acceptable",
      description: "Active-site ambient (80-110 dBA) renders vending noise inaudible. Standard outdoor-rated equipment meets functional requirements. Capture noise complaint workflow regardless; re-evaluate if context changes (residential adjacency emerges, overnight active period extends).",
      finalLabel: "Standard outdoor spec OK",
    },
  }),
  tipCards({
    heading: "Five construction site vending noise mistakes",
    sub: "Documented in operator + GC reviews. All preventable with construction-site noise-conscious deployment.",
    items: [
      { title: "Placing machine against shared trailer wall", body: "Trailer wall acts as sound-board into the site office where superintendents, project engineers, safety officers, and inspectors meet. Even modest compressor cycling intrudes. 15-25 ft separation from trailer door minimum; never against shared trailer wall. Verify orientation at install survey." },
      { title: "Skipping municipal noise-ordinance verification at residential-adjacent sites", body: "Most municipalities have 55-65 dBA off-hours property-line limits. Residential-adjacent construction sites particularly enforced. Ordinance violations produce citations + crew morale issues + GC reputation damage. Verify at install; document compliance posture." },
      { title: "Standard outdoor SKU at trailer-adjacent placement", body: "Outdoor-rated equipment runs louder than indoor equivalents. Standard outdoor SKU at trailer-adjacent placement produces audible compressor cycling during business meetings. Spec low-noise outdoor SKU (ENERGY STAR + variable-speed compressor) at sensitive placements. Capital premium 5-12%." },
      { title: "Defrost cycle during overnight security period", body: "Overnight ambient drops 30-50 dBA; machine becomes dominant noise source. Defrost cycle (60-70 dBA for 15-25 minutes) intrudes on residential neighbors + site security radio communication. Schedule defrost during active production-phase ambient (mid-day) instead. Telemetry-driven scheduling." },
      { title: "Single concentrated vending placement at shift-overlap break clusters", body: "20-40 crew at single placement produces dispense-mechanism cycling in rapid succession + queue noise. Distribute across 2-3 locations instead of concentrating. Reduces peak noise + reduces queue + spreads service load + improves crew satisfaction." },
    ],
  }),
  inlineCta({
    text: "Want the construction site vending noise spec checklist (trailer separation, ordinance verification, low-noise SKU)?",
    buttonLabel: "Get the construction noise spec",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported construction-site vending placement reviews where trailer-adjacent acoustic separation, municipal noise-ordinance verification, low-noise outdoor SKU selection, and defrost-scheduling coordination matter. The benchmarks reflect operator-side telemetry data and GC + site safety officer feedback across commercial and residential construction projects.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Does vending noise actually matter on a loud construction site?", answer: "On the active site itself, no — 80-110 dBA ambient renders vending inaudible. Where it matters: trailer-adjacent placements (site offices run 45-60 dBA inside), municipal residential-adjacent property lines (55-65 dBA off-hours typical), shift-overlap break clusters, overnight security periods (ambient drops 30-50 dBA). Match equipment selection to context.", audience: "GCs" },
      { question: "How far should the machine be from the site trailer?", answer: "15-25 feet from trailer door minimum. Never against shared trailer wall — wall acts as sound-board into site office where superintendents, project engineers, safety officers, and inspectors hold meetings. Verify orientation at install survey with GC superintendent.", audience: "Site Managers" },
      { question: "Do we need to worry about municipal noise ordinances?", answer: "At residential-adjacent sites yes. Most municipalities have construction-noise ordinances — 55-65 dBA at property line during off-hours (7 PM-7 AM weekdays typical, all-day Sunday), 70-85 dBA during permitted hours. Verify ordinance at install survey; documented compliance posture supports operator service-window coordination.", audience: "GCs" },
      { question: "What's a low-noise outdoor-rated model?", answer: "Royal Vendors RVCC series, Vendo OutdoorPro low-noise variant, AMS Sensit weather-resistant low-noise, USCo outdoor low-noise. ENERGY STAR + variable-speed compressor produces 3-5 dBA reduction vs legacy outdoor SKUs. Spec into operator procurement at trailer-adjacent + residential-adjacent placements.", audience: "Operators" },
      { question: "When should defrost cycles run?", answer: "Mid-day during active production-phase ambient (8 AM-3 PM typical). NOT overnight (machine becomes dominant noise source when ambient drops 30-50 dBA). NOT during permitted off-hours noise window at residential-adjacent sites. Operator-side telemetry-driven scheduling.", audience: "Operators" },
      { question: "How do shift-overlap clusters create noise issues?", answer: "Shift change clusters 20-40 crew at single vending placement. Dispense mechanisms cycle in rapid succession (each 65-70 dBA transient). Queue noise compounds. Distribute placement across 2-3 locations rather than concentrate at 1 — reduces peak noise, reduces queue, spreads service load.", audience: "Site Managers" },
      { question: "What about the overnight quiet period?", answer: "Ambient drops 30-50 dBA overnight; machine becomes dominant noise source. Variable-speed compressor runs continuously at lower RPM — eliminates compressor-start transients. Combined with defrost scheduling outside overnight window, minimizes overnight intrusion at residential-adjacent and on-site-security contexts.", audience: "Operators" },
      { question: "How do we capture noise complaints?", answer: "Document GC, trailer occupant, residential neighbor, and inspector visit complaints. Pattern complaints trigger placement review (relocate, low-noise model swap, defrost reschedule, acoustic barrier add). Without complaint workflow, noise issues drift to removal request and damage GC's vending program reputation at future projects.", audience: "GCs" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "OSHA — occupational noise exposure standards (29 CFR 1926.52)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.52", note: "Federal construction-industry occupational noise exposure standard" },
      { label: "EPA — Noise Pollution Clearinghouse + community noise guidance", url: "https://www.epa.gov/clean-air-act-overview/noise-pollution", note: "Federal community noise guidance underlying municipal construction ordinances" },
      { label: "AGC — Associated General Contractors of America", url: "https://www.agc.org/", note: "Industry trade association covering construction-site amenity and noise practice" },
      { label: "ENERGY STAR — commercial refrigeration certification", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Federal certification standard underlying low-noise variable-speed compressor specification" },
      { label: "NAMA — outdoor and construction vending operator practice", url: "https://www.namanow.org/", note: "Industry guidance on outdoor and construction-site vending operations" },
    ],
  }),
  relatedGuides({
    heading: "Related construction site vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Placement of vending on construction sites", description: "Gate, trailer, and restroom placement zones plus electrical and phase relocation.", href: "/vending-for-construction-sites/placement-of-vending-on-construction-sites" },
      { eyebrow: "Operations", title: "Security for construction site vending", description: "Reinforced chassis, anti-tipping, cellular telemetry, and CCTV coordination.", href: "/vending-for-construction-sites/security-for-construction-site-vending" },
      { eyebrow: "Hub", title: "All construction-site vending guides", description: "Equipment, planogram, security, placement, payment, and operations for construction placements.", href: "/vending-for-construction-sites" },
    ],
  }),
]);
process.exit(0);
