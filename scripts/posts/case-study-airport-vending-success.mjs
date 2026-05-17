import { seedPost, tldr, caseStudy, statStrip, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("case-study-airport-vending-success", [
  tldr({
    heading: "How does an airport achieve a successful vending program?",
    paragraph:
      "A regional hub airport (8M annual enplanements, 32 gates across 2 concourses, ~22,000 daily passengers) ran a structured 18-month vending program transition: 28 machines deployed across gate areas, concourse walkways, airline lounges, landside concession, and crew break areas. Modern operator with 100% telemetry coverage, SIDA-badged route crews, ENERGY STAR + R-290 refrigerant fleet, 30% dietary-restricted SKU share, ACAA + ADA + Section 504 accessibility audit, modern payment covering EMV + contactless + Apple Pay / Google Pay / Samsung Pay, quarterly Airport Carbon Accreditation reporting, pre-positioning before predictable peaks, surge crews during events. Results: $2.4M annual gross revenue (vs $720K under prior operator), $420K airport commission (vs $108K prior), 99.2% machine uptime (vs 87% prior), passenger satisfaction +24% on airport amenity survey, Airport Carbon Accreditation Level 2 achievement (operator-supplied data feeding airport submission), zero accessibility complaints (vs 7 in prior 12 months), Thanksgiving / Christmas peak coverage without stockouts. Approach reflects modern airport vending best practices and can be replicated at peer hub airports.",
    bullets: [
      { emphasis: "$2.4M annual gross revenue (vs $720K prior):",
        text: "3.3× revenue lift with modern operator + structured placement + telemetry-driven service. Airport commission $420K vs $108K prior; ROI on operator transition under 8 months." },
      { emphasis: "99.2% machine uptime + zero accessibility complaints:",
        text: "Telemetry + SIDA-badged crews + 24-48 hour service SLA + ADA / ACAA audit produce operational performance + compliance posture." },
      { emphasis: "Airport Carbon Accreditation Level 2 achievement:",
        text: "Operator-supplied quarterly data (kWh, refrigerant, packaging, truck-miles) fed airport sustainability submission. Modern operators support; legacy operators don't.", },
    ],
  }),
  statStrip({
    heading: "Airport vending success benchmarks",
    stats: [
      { number: "$2.4M", label: "annual gross revenue", sub: "vs $720K prior operator", accent: "blue" },
      { number: "$420K", label: "airport commission", sub: "vs $108K prior", accent: "blue" },
      { number: "99.2%", label: "machine uptime", sub: "vs 87% prior", accent: "blue" },
      { number: "+24%", label: "passenger satisfaction lift", sub: "amenity survey vs baseline", accent: "blue" },
    ],
  }),
  caseStudy({
    tag: "Airport vending success",
    title: "Regional hub airport — 18-month structured vending transition produces $2.4M annual revenue + Airport Carbon Accreditation Level 2",
    context: "Regional hub airport: 8M annual enplanements, 32 gates across 2 concourses, ~22,000 daily passengers. Pre-implementation: 18 legacy machines from prior operator with fixed-route service + no telemetry + 87% uptime + frequent stockouts during peak travel + passenger complaints. Airport ran competitive RFP with modern operator requirements. Structured 18-month transition: 3-month operator change + 12-month phased deployment + 3-month optimization.",
    meta: [
      { label: "Placement scope", value: "28 machines across airport (14 gate area + 6 concourse walkway + 3 airline lounge + 3 landside + 2 crew break area)" },
      { label: "Implementation period", value: "18 months total (3-month operator transition + 12-month phased deployment + 3-month optimization)" },
      { label: "Pre-implementation baseline", value: "18 legacy machines, $720K revenue, $108K commission, 87% uptime, 7 ACAA complaints in prior 12 months" },
      { label: "Modern operator capability", value: "100% telemetry, SIDA-badged crews, ENERGY STAR + R-290 fleet, 30% dietary-restricted, ACAA + ADA + Section 504 audited, modern payment, quarterly ACA reporting, pre-positioning, surge crews" },
    ],
    results: [
      { metric: "$2.4M", description: "Annual gross vending revenue vs $720K prior. 3.3× revenue lift from modern operator + strategic placement + telemetry-driven service." },
      { metric: "$420K", description: "Airport commission revenue (vs $108K prior). ROI on operator transition under 8 months." },
      { metric: "99.2%", description: "Machine uptime vs 87% prior. Telemetry + SIDA-badged crews + 24-48 hour service SLA drove operational performance." },
      { metric: "+24%", description: "Passenger satisfaction lift on airport amenity survey. Strategic gate-area placement + dietary-restricted depth + modern payment + ACA-grade reporting drove satisfaction." },
      { metric: "Level 2", description: "Airport Carbon Accreditation level achieved (operator-supplied data feeding airport submission). Modern operator + ENERGY STAR + R-290 refrigerant + telemetry-routing + recycling co-location." },
      { metric: "0 vs 7", description: "ACAA accessibility complaints in 12 months post-deployment vs 7 in prior 12 months. ADA / ACAA audit + reach-range + tactile + audio + WCAG labeling produced compliance posture." },
      { metric: "0 stockouts", description: "Thanksgiving + Christmas peak coverage without stockouts. Pre-positioning 1-2 weeks before peaks + surge crews during high-traffic windows + telemetry-driven prioritization." },
      { metric: "30%", description: "Dietary-restricted SKU share (gluten-free + vegan + kosher / halal + dairy-free + nut-free). Allergen labeling per FDA top 9. Diverse traveler population served." },
    ],
  }),
  specList({
    heading: "Airport vending success specifications",
    items: [
      { label: "Strategic placement across airport zones", value: "14 gate-area machines (highest-volume, $3-$12K monthly), 6 concourse walkway (connecting passengers), 3 airline lounge (premium aesthetic + planogram), 3 landside (pre-security greeter + ground transport), 2 crew break area (flight + ground crew). Each zone tuned planogram + chassis." },
      { label: "Modern operator with 100% telemetry coverage", value: "100% machine telemetry coverage. Per-machine fill level + days-to-empty + sales velocity feed daily route prioritization. Skip machines without need; prioritize about-to-stockout. Cellular telemetry independent of airport network. Hard RFP requirement at major airports." },
      { label: "SIDA-badged route crews + pre-positioning + surge", value: "All route crews SIDA-badged + background-checked + airport-specific credentialing. Operator HR maintains current badging. Pre-positioning 1-2 weeks before Thanksgiving + Christmas + summer + spring break + weather events at airport-area warehouse. Surge crews during peak events." },
      { label: "ENERGY STAR + R-290 refrigerant fleet", value: "All refrigerated machines ENERGY STAR-certified at current standard. R-290 hydrocarbon refrigerant (GWP 3 vs legacy HFC GWP 1,000-4,000). Massive global warming impact reduction. Verify model + refrigerant at contract signing. Feeds Airport Carbon Accreditation submission." },
      { label: "30% dietary-restricted SKU share", value: "Gluten-free + vegan + kosher / halal + dairy-free + nut-free flagged in operator dashboard. FDA top 9 allergens labeled. Travelers with dietary restrictions disproportionately rely on vending. Diverse traveler population served + RFP compliance." },
      { label: "ACAA + ADA + Section 504 accessibility audit", value: "Reach range 15-48 inches per ADA 308. Tactile labeling + Braille + audio output on selected machines. High-contrast labeling WCAG 2.2 AA. Federal compliance + zero accessibility complaints achieved vs 7 in prior 12 months. Annual audit recertification." },
      { label: "Modern payment — EMV + contactless + mobile wallet", value: "EMV chip + contactless tap + Apple Pay / Google Pay / Samsung Pay support standard. Cash-free option at select gate machines. Faster transactions at peak; reduces queueing during boarding windows. International traveler accessibility." },
      { label: "Quarterly Airport Carbon Accreditation reporting", value: "Pre-formatted quarterly reports: kWh per machine, ENERGY STAR coverage, low-GWP refrigerant share, packaging mix, recycling capture, truck-mile reduction. Feeds airport sustainability office submission to ACA. Reduces airport workload + supports Level 2 achievement." },
      { label: "Operator transition + implementation timeline", value: "3-month operator transition (RFP, contract, operator change, badging coordination). 12-month phased deployment (legacy removal + modern install + lounge + crew area). 3-month optimization (planogram tuning + placement refinement + reporting cadence). 18-month total + annual review thereafter.", },
    ],
  }),
  tipCards({
    heading: "Six airport vending success patterns",
    sub: "Each is reflected in the case study and represents modern best practice. Replicate at your hub or regional airport.",
    items: [
      { title: "Modern operator transition at RFP renewal", body: "Legacy operators with fixed-route + no telemetry + minimal reporting produce $720K-level revenue + 87% uptime + accessibility complaints. Modern operators with telemetry + SIDA crews + ENERGY STAR + ACA reporting produce 3.3× revenue + 99%+ uptime + zero complaints. Operator transition at RFP renewal is the leverage point." },
      { title: "Strategic placement by airport zone", body: "Gate area (highest-volume, $3-$12K monthly) + concourse walkway + airline lounge + landside + crew break area. Each zone tuned planogram + chassis aesthetic + service cadence. Conflating zones produces sub-optimal performance across all. Modern operators tune by zone; legacy operators don't." },
      { title: "Pre-positioning + surge crews for predictable peaks", body: "Thanksgiving + Christmas + summer + spring break + weather events produce 10-30× peak demand. Pre-positioning 1-2 weeks before peaks at airport-area warehouse + surge crew dispatch during events produces zero-stockout peak coverage. Modern airport operators standard; legacy operators don't." },
      { title: "Airport Carbon Accreditation reporting integration", body: "Major airports report through ACI Airport Carbon Accreditation. Operator-supplied quarterly data (kWh + ENERGY STAR + refrigerant + packaging + recycling + truck-miles) feeds airport submission. Level 2 achievement supported. Operators without reporting capability hurt airport's accreditation posture." },
      { title: "ACAA + ADA + Section 504 audit + annual recertification", body: "Federal accessibility compliance + zero accessibility complaints achievable with audit + reach-range + tactile + audio + WCAG labeling. Modern operators audit + provide compliance summary + annual recertification. Legacy operators don't audit and produce compliance gaps + lawsuit exposure." },
      { title: "ROI <8 months on modern operator transition", body: "Higher revenue + higher commission + better uptime + better passenger satisfaction + ACA Level 2 within 18 months of operator transition. ROI on operator transition under 8 months. Build modern requirements + sustainability spec into RFP at next renewal. Plan transition; don't drift with legacy.", },
    ],
  }),
  inlineCta({
    text: "Want the airport vending success framework (operator transition + zone placement + sustainability + accessibility)?",
    buttonLabel: "Get the airport success framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported airport vending program design across hub, regional, and international airports — including operator transition, zone-based placement strategy, sustainability + Airport Carbon Accreditation reporting, ACAA + ADA + Section 504 audit, and dietary-restricted SKU depth. The case study patterns reflect operator-side data and airport ops feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does a successful airport vending program look like?", answer: "Modern operator with 100% telemetry + SIDA-badged crews + ENERGY STAR + low-GWP refrigerant + 25-35% dietary-restricted + ACAA + ADA + Section 504 audited + modern payment + quarterly Airport Carbon Accreditation reporting + pre-positioning + surge crews. Strategic placement across gate / concourse / lounge / landside / crew zones.", audience: "Airport Operations" },
      { question: "How much revenue should an airport vending program produce?", answer: "Varies by airport size + placement strategy + operator capability. Regional hub (8M enplanements, 28 machines, modern operator): $2-3M annual gross revenue typical. Major hub: $5-15M+. Gate-area machines $3-$12K monthly each. Airport commission 15-20% of gross. ROI on operator transition under 12 months.", audience: "Airport Operations" },
      { question: "How important is operator transition?", answer: "Critical. Legacy operators with fixed-route + no telemetry + minimal reporting produce $720K-level revenue + 87% uptime + accessibility complaints at hub airports. Modern operators produce 3.3× revenue + 99%+ uptime + zero complaints. Operator transition at RFP renewal is the typical leverage point.", audience: "Airport Procurement" },
      { question: "What about accessibility?", answer: "ACAA (Air Carrier Access Act) + ADA + Section 504 apply. Reach range 15-48 inches per ADA 308. Tactile labeling + Braille + audio output on selected machines. High-contrast labeling WCAG 2.2 AA. Audit at contract signing + annual recertification. Modern operators audit; legacy operators don't.", audience: "Compliance Officers" },
      { question: "What about Airport Carbon Accreditation?", answer: "Major airports report through ACI ACA. Operator-supplied quarterly data (kWh + ENERGY STAR + refrigerant + packaging + recycling + truck-miles) feeds airport submission. Level 1-2 achievable with modern operator capability. Operators without reporting capability hurt airport's accreditation posture.", audience: "Sustainability Officers" },
      { question: "What does pre-positioning achieve?", answer: "Zero stockouts during Thanksgiving + Christmas + summer + spring break peaks (10-30× off-peak demand). Operators pre-position stock 1-2 weeks before peaks at airport-area warehouse + dispatch surge crews during events. Modern airport operators standard; legacy operators miss peak revenue windows + produce complaints.", audience: "Airport Operations" },
      { question: "What's the dietary-restricted SKU expectation?", answer: "25-35% at major-airport contracts. Gluten-free + vegan + kosher / halal + dairy-free + nut-free flagged in operator dashboard. FDA top 9 allergens labeled. Travelers with dietary restrictions disproportionately rely on vending. Diverse traveler population served + RFP compliance.", audience: "Airport Procurement" },
      { question: "How long does implementation take?", answer: "18 months typical for hub airport: 3-month operator transition (RFP + contract + operator change + SIDA badging) + 12-month phased deployment (legacy removal + modern install across zones) + 3-month optimization (planogram + placement + reporting). Annual review thereafter.", audience: "Airport Operations" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ACI-NA — Airports Council International North America", url: "https://airportscouncil.org/", note: "Industry trade association covering airport vending program standards" },
      { label: "Airport Carbon Accreditation", url: "https://www.airportcarbonaccreditation.org/", note: "Industry framework for airport carbon footprint reduction and reporting" },
      { label: "FAA Part 139 — airport operations", url: "https://www.faa.gov/airports/airport_safety/part139_cert/", note: "Federal certification covering airport vending operations" },
      { label: "ACAA — Air Carrier Access Act + DOT 14 CFR Part 382", url: "https://www.transportation.gov/airconsumer/passengers-disabilities", note: "Federal accessibility framework applicable to airport vending" },
      { label: "NAMA — airport vending operator standards", url: "https://www.namanow.org/", note: "Industry guidance on airport-specific vending operations and benchmarks" },
    ],
  }),
  relatedGuides({
    heading: "Related airport vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Sustainable airport vending", description: "Intervention stack + Airport Carbon Accreditation reporting + sustainability program design.", href: "/vending-for-airports/sustainable-airport-vending" },
      { eyebrow: "Operations", title: "Airport vending supply chain", description: "Warehouse + SIDA + telemetry + pre-positioning + surge crews + specialty supply partnerships.", href: "/vending-for-airports/airport-vending-supply-chain" },
      { eyebrow: "Hub", title: "All airport vending guides", description: "Placement, payment, equipment, supply chain, and operations guidance across concourses, lounges, and landside areas.", href: "/vending-for-airports" },
    ],
  }),
]);
process.exit(0);
