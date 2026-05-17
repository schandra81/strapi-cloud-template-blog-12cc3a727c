import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, caseStudy, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("transit-station-vending-services", [
  tldr({
    heading: "What does vending look like inside a real transit station — and how does the platform-level traffic, fare-paid envelope, and transit-agency procurement change the operating model?",
    paragraph:
      "Transit station vending serves an enormous and predictable audience — commuters waiting for trains, bus passengers between transfers, airport rail riders, and the transit-agency staff who keep the system moving. The operating envelope diverges sharply from typical retail or office vending: foot traffic at major stations runs 15-50x typical office volume, the fare-paid platform vs the free concourse changes who can reach the machine, transit-agency procurement runs through formal RFPs at FTA-funded systems with DBE participation requirements, and the operating constraints (anti-loitering signage, FRA / FTA safety zones, transit police protocols, station-cleaning crew schedules) shape every aspect of placement and service. Right-of-way vending also intersects with concession agreements that govern station retail under DOT, FAA (at airport-connected stations), and FTA frameworks. The right transit-station program addresses (1) placement — fare-paid platform vs free concourse vs station-agent area, each with different revenue and access profiles, (2) procurement — FTA Master Agreement compliance, DBE participation, prevailing wage at FTA-funded systems, (3) planogram — grab-and-go weighted for commuters (water + energy + portable snacks dominate; meal-replacement at transfer stations with longer dwell), (4) restock logistics — service-tech access through the fare-paid envelope coordinated with transit police, (5) safety and signage — anti-loitering signage, station-evacuation route compliance, ACA Section 4205 calorie disclosure. Modern transit operators (Compass-Vendis, HMSHost transit division, regional transit-concession specialists) bundle these requirements at proposal; legacy operators commonly underestimate the procurement scope and fall short on DBE or prevailing wage compliance.",
    bullets: [
      { emphasis: "Foot traffic runs 15-50x office volume:", text: "Major transit stations move 50,000-300,000 passengers daily. Per-machine vend volume scales accordingly; capacity and restock cadence must match." },
      { emphasis: "Fare-paid vs free concourse changes audience:", text: "Fare-paid platform machines serve commuters with dwell time; free concourse machines serve everyone, including non-passengers." },
      { emphasis: "FTA procurement layers on DBE + prevailing wage:", text: "FTA-funded transit systems require formal RFPs, DBE participation reporting, and Service Contract Act compliance. Federal procurement scope at every major US transit agency." },
    ],
  }),
  statStrip({
    heading: "Transit station vending benchmarks",
    stats: [
      { number: "15-50x", label: "foot traffic vs typical office", sub: "at major transit station placements", accent: "blue" },
      { number: "3-8 min", label: "typical commuter dwell time", sub: "drives grab-and-go planogram weight", accent: "orange" },
      { number: "60-80%", label: "card payment share", sub: "transit riders skew digital-native", accent: "blue" },
      { number: "5-10%", label: "DBE participation target", sub: "typical FTA-funded transit RFP", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Transit station placement options compared",
    sub: "Fare-paid platform vs free concourse vs station-agent area — each has distinct revenue, audience, and access profiles.",
    headers: ["Placement", "Audience", "Dwell time", "Vend volume", "Access for restock"],
    rows: [
      ["Fare-paid platform", "Boarding commuters", "3-8 min", "High (peak hours)", "Through fare gate with transit-police coordination"],
      ["Free concourse / mezzanine", "All passers-by + non-passengers", "1-3 min", "Medium-high", "Open access during station hours"],
      ["Station-agent / employee area", "Transit staff only", "Variable", "Steady moderate", "Standard contractor entry"],
      ["Bus bay / curbside", "Bus passengers", "1-5 min", "Medium (weather-sensitive)", "Curbside, weather-protected enclosure preferred"],
      ["Transfer mezzanine", "Cross-platform transferees", "5-15 min", "High (longer dwell)", "Through fare-paid envelope"],
    ],
  }),
  specList({
    heading: "Transit station vending specifications",
    items: [
      { label: "FTA procurement framework", value: "Federal Transit Administration (FTA) Master Agreement compliance for FTA-funded transit systems (most major US transit agencies). Formal RFP procurement with Disadvantaged Business Enterprise (DBE) participation reporting, Service Contract Act (SCA) prevailing wage compliance, and Buy America requirements where applicable. State-funded transit systems layer on state procurement. Verify FTA funding source at RFP scope; verify operator FTA Master Agreement registration." },
      { label: "Fare-paid platform placement", value: "Vending on the fare-paid platform serves commuters with 3-8 minute boarding dwell. Higher per-machine volume but more complex restock logistics — service tech must pass through fare gate with transit-agency coordination. Some systems issue contractor fare cards; others require transit-police escort during restock. Verify access protocol at operator onboarding." },
      { label: "Free concourse placement", value: "Vending on the free concourse or mezzanine serves all passers-by including non-passengers (often substantial at major stations). Lower per-machine commuter conversion but higher total volume. Open access for restock during station hours. Most transit agencies prefer this placement to avoid fare-gate restock complexity. Verify with station retail concession manager." },
      { label: "FRA / FTA safety zone compliance", value: "Federal Railroad Administration (FRA) safety zones at intercity rail stations restrict machine placement near platform edges (typically 6 feet from platform edge minimum). FTA guidance applies similar setbacks at light rail and heavy rail stations. Verify setback at design phase with transit-agency facilities; relocate before install if needed. Anti-loitering and clear evacuation path compliance non-negotiable." },
      { label: "Cellular telemetry independence", value: "Transit station Wi-Fi is often public-access and unreliable for telemetry. Cellular telemetry (LTE-M or 5G) preferred; carrier coverage at underground stations may require external antenna or DAS (Distributed Antenna System) integration. Verify cellular coverage at the planned vending location before contract signing. Some stations have signal-amplifier infrastructure available for tenants; coordinate with station facilities." },
      { label: "Cashless and transit-card integration", value: "Most transit vending operates on standard commercial card readers (Visa, Mastercard, Amex, Apple Pay, Google Pay). Some agencies integrate transit-fare-card payment (Clipper at SF Bay Area, OMNY at NYC MTA, Ventra at Chicago CTA, CharlieCard at MBTA Boston) at vending — convenient for commuters but requires transit-card-API integration. Verify integration capability at RFP if scope includes transit-card acceptance." },
      { label: "ACA Section 4205 calorie disclosure", value: "Federal calorie disclosure requirement at vending machines applies at transit stations for operators with 20+ machines (most transit-station operators trigger this). FDA Nutrition Facts updates at packaged food. Top-9 allergen labeling at machine signage. Multi-language signage at diverse-population transit systems (English + dominant secondary language per system demographic). Modern operators provide at install." },
      { label: "Transit-police coordination and station-cleaning crew alignment", value: "Service-tech restock at major stations coordinates with transit police schedules (avoid restock during high-incident or active-investigation windows) and station-cleaning crew rotation (post-cleaning windows are ideal for restock). Document approved restock windows in operator service contract; review quarterly with transit-agency operations." },
      { label: "Anti-loitering signage and crowd-control compliance", value: "Major transit stations enforce anti-loitering policies near retail and vending. Operator signage must support station crowd-control objectives — visible price + payment instructions + clear payment-failure recovery without inviting extended dwell at the machine. Verify signage at design phase with station-operations manager." },
      { label: "Emergency evacuation route compliance", value: "Vending machines at transit stations must not obstruct designated emergency evacuation routes, fire-egress paths, or ADA-accessible exit routes. Verify placement against station emergency plan with station-operations manager and station fire marshal at design phase. Relocate before install if any obstruction. Annual evacuation-plan audit at major transit accounts." },
    ],
  }),
  tipCards({
    heading: "Six transit-station vending operating practices",
    sub: "Each addresses a specific operating reality at transit-station accounts. All preventable problems if addressed at design and procurement phase.",
    items: [
      { title: "Match capacity to commuter peak demand", body: "Peak boarding hours (typically 7-9 AM and 4-7 PM at most US transit systems) drive 60-70% of daily vend volume. Capacity must support 90 minutes of peak demand without stockout. Underspec machines run dry during the morning rush and revenue is lost permanently — the commuter who hits a stockout doesn't come back later." },
      { title: "Bid against FTA + state procurement scope at federally-funded systems", body: "FTA Master Agreement + DBE + SCA prevailing wage + Buy America compliance scope shapes operator eligibility. Bidding against commercial procurement scope at an FTA-funded transit RFP is a fast path to rejection. Verify FTA funding source + state procurement layer at RFP; budget proposal time for federal scope." },
      { title: "Verify cellular coverage before committing to underground placement", value: "", body: "Underground stations may have weak cellular signal; telemetry breaks and machines run blind. Pre-install signal survey at the planned location resolves this. Some stations have DAS (Distributed Antenna System) infrastructure available for tenants; coordinate with station facilities. Don't sign the contract until cellular telemetry is verified at the placement." },
      { title: "Coordinate with transit police at proposal phase", body: "Transit police shape restock windows, escort requirements, and incident-response protocols. Engaging them at proposal phase (not first restock) avoids surprises and builds the relationship that compounds across the contract term. Document the agreed protocol in the operator service contract." },
      { title: "Weight planogram by station type", body: "Hub stations with cross-platform transfers (5-15 min dwell) sell meal-replacement items (sandwiches, larger snacks, full beverages). Single-platform commuter stations (3-5 min dwell) sell grab-and-go (water, energy bars, gum, mints). 20-30% planogram variation by station type lifts total system revenue 15-25%." },
      { title: "Build quarterly review into the operator service contract", body: "Transit station traffic, demographics, and operating conditions shift constantly (new bus routes, schedule changes, ridership trends). Quarterly review with transit-agency operations + station retail concession manager catches changes before they erode revenue. Build the cadence into the operator service contract." },
    ],
  }),
  decisionTree({
    heading: "Where should we place vending in this transit station?",
    question: "Does this station have a cross-platform transfer mezzanine with 5+ minute average dwell time?",
    yesBranch: {
      title: "Yes — primary placement on the transfer mezzanine.",
      description: "Transfer mezzanines are the highest-revenue placement at transit stations — longer dwell, captive cross-platform audience, often less competition from station-area retail. Secondary machine on the free concourse for non-transfer passengers. Verify fare-paid envelope restock protocol with transit police at onboarding. Plan meal-replacement-weighted planogram given the longer dwell.",
      finalTone: "go",
      finalLabel: "TRANSFER MEZZANINE PRIMARY",
    },
    noBranch: {
      title: "No — primary placement on the free concourse.",
      description: "Single-platform commuter stations work best with free-concourse placement — open access, no fare-gate restock complexity, audience includes all passers-by. Grab-and-go-weighted planogram (water, energy bars, gum, mints) given the shorter 3-8 minute commuter dwell. Verify cellular telemetry coverage at the placement before contract signing.",
      finalTone: "go",
      finalLabel: "FREE CONCOURSE PRIMARY",
    },
  }),
  caseStudy({
    tag: "Real numbers · Major urban rail hub",
    title: "$346,000 in annual vending revenue from 6 machines at a Northeast Corridor station",
    context: "A Northeast Corridor major rail hub with intercity rail + regional rail + light rail + bus connections. 220,000 daily passengers. Six machines across transfer mezzanine + free concourse + station-agent area. Grab-and-go-weighted planogram at concourse, meal-replacement at mezzanine, FTA-aligned operator with DBE partnership. Agency commission at 12% of gross.",
    meta: [
      { label: "Daily passengers", value: "220,000" },
      { label: "Machines", value: "6 (3 mezzanine, 2 concourse, 1 staff)" },
      { label: "Restock", value: "3x weekly mezzanine, 2x weekly concourse + staff" },
      { label: "Commission", value: "12% gross to transit agency" },
    ],
    results: [
      { number: "$346,000", label: "annual gross sales" },
      { number: "$41,520", label: "annual commission to agency" },
      { number: "73%", label: "card payment share" },
    ],
  }),
  keyTakeaways({
    heading: "Transit station vending key takeaways",
    takeaways: [
      "Major US transit stations move 15-50x typical office foot traffic, so per-machine capacity and restock cadence must match — peak boarding hours drive 60-70% of daily vend volume.",
      "FTA Master Agreement compliance + DBE participation + Service Contract Act prevailing wage shape operator eligibility at federally-funded transit systems. Verify operator registration at RFP.",
      "Placement choice (fare-paid platform vs free concourse vs station-agent area vs transfer mezzanine) shapes audience, dwell time, vend volume, and restock complexity. Match placement to station type.",
      "Cellular telemetry independence from station Wi-Fi is non-negotiable — verify cellular coverage at the planned placement before contract signing, especially at underground stations.",
      "Modern transit-station operators bundle FTA scope + DBE + prevailing wage + cellular telemetry + transit-police coordination + ACA Section 4205 calorie disclosure at proposal. Legacy operators commonly fall short.",
    ],
  }),
  inlineCta({
    text: "Want the transit-station vending framework (placement-type matrix + FTA procurement scope + planogram weighting by station type)?",
    buttonLabel: "Get the transit-station pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help transit-agency facility and concession managers design station vending programs — placement strategy by station type (fare-paid platform vs free concourse vs transfer mezzanine vs station-agent), FTA Master Agreement compliance, DBE participation coordination, Service Contract Act prevailing wage scope, cellular telemetry verification at underground stations, transit-card payment integration where applicable, transit-police restock coordination, anti-loitering and emergency-evacuation signage compliance, and ACA Section 4205 calorie disclosure. The framework reflects operator-side data across heavy rail, light rail, commuter rail, and bus transit station vending deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Does our transit agency need to RFP vending under FTA rules?", answer: "If the transit agency receives FTA funding (most major US systems do), then yes — vending procurement runs under FTA Master Agreement requirements including formal RFP, DBE participation reporting (typically 5-10% target), Service Contract Act prevailing wage compliance, and Buy America where applicable. Direct sales or informal procurement are not compliant. Verify FTA funding source with transit agency procurement office.", audience: "Transit Agency Procurement" },
      { question: "Should we place machines on the fare-paid platform or the free concourse?", answer: "Match placement to station type. Transfer mezzanines (cross-platform transfers, 5-15 min dwell) drive highest revenue — meal-replacement planogram. Free concourse serves all passers-by including non-passengers; open restock access; grab-and-go planogram. Fare-paid platform serves boarding commuters but adds restock complexity through fare gates. Station-agent placement serves transit staff steadily.", audience: "Station Operations" },
      { question: "How do we handle restock through the fare gate?", answer: "Coordinate with transit police at operator onboarding (not first restock). Some agencies issue contractor fare cards; others require transit-police escort during restock. Document approved restock windows in the operator service contract. Schedule restock outside peak commuter hours (avoid 7-9 AM and 4-7 PM) to minimize passenger impact.", audience: "Operators" },
      { question: "What about cellular coverage at underground stations?", answer: "Verify cellular telemetry coverage at the planned vending location before signing the contract. Underground stations often have weak cellular signal; telemetry breaks and machines run blind. Some stations have DAS (Distributed Antenna System) infrastructure available for tenants — coordinate with station facilities. External antenna installation is the alternative.", audience: "Operators" },
      { question: "Can we integrate transit-card payment at vending?", answer: "Some transit systems support this (Clipper at SF Bay Area, OMNY at NYC MTA, Ventra at Chicago CTA, CharlieCard at MBTA Boston, ORCA at Sound Transit Seattle, SmarTrip at DC WMATA). Convenient for commuters but requires transit-card-API integration. Verify operator capability at RFP if scope includes transit-card acceptance. Standard commercial card readers work universally as the fallback.", audience: "Riders and Procurement" },
      { question: "How does FRA / FTA safety zone compliance work?", answer: "Federal Railroad Administration (FRA) safety zones at intercity rail stations restrict machine placement near platform edges (typically 6 feet from platform edge minimum). FTA guidance applies similar setbacks at light rail and heavy rail. Verify setback at design phase; relocate before install if needed. Also verify clear emergency evacuation routes per station emergency plan with station fire marshal.", audience: "Safety" },
      { question: "What planogram works at transit stations?", answer: "Grab-and-go-weighted at single-platform commuter stations (3-8 min dwell) — water, energy bars, gum, mints, granola bars. Meal-replacement-weighted at transfer mezzanines (5-15 min dwell) — sandwiches, larger snacks, full beverages, protein bars. 20-30% planogram variation by station type lifts total system revenue 15-25%. Refresh quarterly based on per-station vend data.", audience: "Operators" },
      { question: "What's a reasonable commission rate at transit stations?", answer: "10-18% of gross sales is typical at FTA-funded transit systems, with higher rates at higher-traffic stations. Some agencies negotiate flat rent + percentage hybrid structures. Smaller bus-only systems may negotiate 5-10% flat commission. Build the rate against verified per-station traffic and dwell time; high-traffic transfer stations command the top of the range.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FTA Master Agreement and DBE Program Regulations (49 CFR Part 26)", url: "https://www.transit.dot.gov/regulations-and-guidance/civil-rights-ada/disadvantaged-business-enterprise", note: "Federal Transit Administration procurement framework and DBE participation requirements" },
      { label: "FRA — Federal Railroad Administration safety standards", url: "https://railroads.dot.gov/", note: "Platform-edge setback and station safety zone requirements applicable to intercity rail vending" },
      { label: "Service Contract Act — Department of Labor wage determinations", url: "https://www.dol.gov/agencies/whd/government-contracts", note: "Prevailing-wage requirements for service contractors on FTA-funded transit accounts" },
      { label: "FDA — ACA Section 4205 vending calorie disclosure", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/calorie-labeling-articles-food-vending-machines", note: "Federal vending machine calorie disclosure requirement for operators with 20+ machines" },
      { label: "APTA — American Public Transportation Association station retail guidance", url: "https://www.apta.com/", note: "Industry guidance on station retail, vending placement, and concession management at US transit agencies" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Accessible airport vending", description: "Airport-rail-station overlap, ADA + ABA compliance, terminal placement strategy, and airport-concession procurement scope.", href: "/vending-for-public-buildings/accessible-airport-vending" },
      { eyebrow: "Operations", title: "Public-building vending logistics", description: "Service-tech access, credentialing, route density, and the operational patterns that work across courts, federal buildings, and transit hubs.", href: "/vending-for-public-buildings/public-building-vending-logistics" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Operations, contracts, accessibility, security, and the operator-side patterns that work at every public-building account.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
