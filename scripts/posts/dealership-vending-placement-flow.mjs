import { seedPost, tldr, statStrip, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("dealership-vending-placement-flow", [
  tldr({
    heading: "What's the end-to-end placement flow for vending at an auto dealership?",
    paragraph:
      "Dealership vending placement follows a six-stage flow over 60-90 days: (1) initial scope assessment — traffic count (40-120 daily service customers typical), waiting area square footage, existing amenity inventory, dealership brand positioning; (2) operator shortlist — same-segment references (other dealerships, ideally same OEM or franchise group), telemetry / ENERGY STAR / cashless capability, sustainability reporting if OEM-aligned program is in play; (3) proposal review — sample commission statement, draft service-level agreement, hardware specification, equipment ownership at term-end, planogram proposal, sustainability data; (4) site survey — power (120V / 20A standard), data (4G / Wi-Fi), floor load, doorway clearance (typically 32-34 inches), placement footprint that doesn't conflict with showroom / waiting area flow; (5) contract finalization — master service agreement with SLA, performance-failure exit, equipment ownership, commission settlement frequency (30 days post-period-end modern standard), PCI-DSS attestation, OEM sustainability reporting if applicable; (6) install + first-90-day review — install with signage / customer education at cashless / brand alignment, weekly check-in for first 30 days, formal review at 90 days against benchmarks (uptime, restock fill rate, ticket count, commission). Single-location dealership flow runs lighter (30-45 days); multi-store franchise group flow runs longer (90-120 days with master agreement plus store rollout).",
    bullets: [
      { emphasis: "Six-stage flow over 60-90 days:", text: "Scope assessment, operator shortlist, proposal review, site survey, contract finalization, install + 90-day review. Single-location lighter (30-45 days); multi-store franchise group longer (90-120 days)." },
      { emphasis: "Brand alignment matters more than at generic placements:", text: "Dealership waiting area is customer-facing brand amenity. Operator selection must match dealership positioning (EV-focused, luxury, family, fleet) — and sustainability capability must match OEM program if applicable." },
      { emphasis: "First-90-day review against measurable benchmarks:", text: "Uptime (95%+), restock fill rate (95%+), ticket count vs traffic, commission settlement transparency, customer feedback. Formal review surfaces issues before they harden into year-2 disputes." },
    ],
  }),
  statStrip({
    heading: "Dealership vending placement flow benchmarks",
    stats: [
      { number: "60-90 days", label: "single-location flow", sub: "scope to install + review", accent: "blue" },
      { number: "90-120 days", label: "franchise group flow", sub: "master + store rollout", accent: "blue" },
      { number: "40-120", label: "daily service customers", sub: "typical dealership traffic", accent: "blue" },
      { number: "95%+", label: "uptime + fill rate target", sub: "at 90-day review", accent: "blue" },
    ],
  }),
  timeline({
    heading: "Dealership vending placement — six-stage flow",
    sub: "End-to-end workflow from initial scope to first-90-day review. Single-location runs lighter; multi-store franchise group runs longer.",
    howToName: "Place vending at an auto dealership",
    totalTime: "60-90 days (single-location); 90-120 days (franchise group)",
    steps: [
      { title: "Stage 1 — Scope assessment", description: "Document service customer traffic count (40-120 daily typical), waiting area square footage, existing amenity inventory (coffee, water, snack basket), dealership brand positioning (EV-focused, luxury, family, fleet), OEM sustainability program if applicable. Engage dealership GM + facilities at start.", label: "Days 1-7" },
      { title: "Stage 2 — Operator shortlist", description: "3-5 operators with same-segment references (other dealerships, ideally same OEM or franchise group). Verify telemetry / ENERGY STAR / cashless capability. Verify sustainability reporting capability if OEM-aligned program is in play. Demand references at peer dealerships, not generic.", label: "Days 8-21" },
      { title: "Stage 3 — Proposal review", description: "Sample commission statement (redacted from comparable dealership), draft SLA, hardware specification (Cantaloupe, Nayax, Parlevel platforms), equipment ownership at term-end (host buyout option), planogram proposal (brand-aligned + healthier mix), sustainability data. Engage commercial counsel at master contract.", label: "Days 22-35" },
      { title: "Stage 4 — Site survey", description: "Power (120V / 20A standard; 240V at larger machines), data (4G / Wi-Fi reliability), floor load (modern beverage machine ~700 lbs empty, ~1,200 lbs loaded), doorway clearance (32-34 inches typical), placement footprint that doesn't conflict with showroom / waiting area flow. Coordinate with facilities + GM.", label: "Days 36-49" },
      { title: "Stage 5 — Contract finalization", description: "Master service agreement: SLA (24-48 hour restock response, 2-business-day service call), performance-failure exit at 24-36 months, equipment ownership (host buyout option), commission settlement (30 days post-period-end modern), PCI-DSS attestation requirement, OEM sustainability reporting if applicable. Counsel-reviewed at enterprise scale.", label: "Days 50-70" },
      { title: "Stage 6 — Install + first-90-day review", description: "Install with signage (cashless education, brand alignment, sustainability messaging if applicable). Weekly check-in for first 30 days. Formal review at 90 days against benchmarks: uptime (95%+), restock fill rate (95%+), ticket count vs traffic, commission settlement transparency, customer feedback. Surface issues early.", label: "Days 71-90" },
    ],
  }),
  specList({
    heading: "Dealership vending placement specifications",
    items: [
      { label: "Scope assessment data points", value: "Daily service customer traffic (40-120 typical), peak-hour traffic distribution (typically Tuesday-Saturday 9am-2pm), waiting area square footage and layout, existing amenity inventory (coffee bar, water dispenser, snack basket), OEM brand positioning, OEM sustainability program (Toyota 2050, Ford Roadmap, GM Zero, Nissan Green, Hyundai 2025, Honda Green Dealer)." },
      { label: "Operator shortlist criteria", value: "Same-segment references (3+ at other dealerships ideally same OEM / franchise group), 95%+ telemetry coverage, 95%+ ENERGY STAR fleet, cashless capability (EMV + NFC + Apple Pay + Google Pay), PCI-DSS attestation within 12 months, sustainability reporting if OEM program applicable, BBB and Secretary of State clear." },
      { label: "Sample commission statement requirements", value: "Redacted sample from comparable dealership showing line-item gross sales, refunds, net sales, commission rate, commission amount, deductions if any. Refusal to provide sample is a hard walk-away signal. Use sample to verify commission calculation transparency before contract." },
      { label: "Hardware specification", value: "Modern beverage / snack / combo machines with Cantaloupe / Nayax / Parlevel / USA Technologies cashless platform. EMV-contactless reader, NFC mobile wallet support, 4G / Wi-Fi telemetry, ENERGY STAR refrigeration (~$150-300 premium), LED with occupancy sensor (~$120-200), R-290 low-GWP refrigerant on new equipment." },
      { label: "Site survey checklist", value: "120V / 20A circuit (240V at larger machines), 4G or Wi-Fi connectivity (test signal strength at machine placement), floor load (modern beverage ~700 lbs empty / ~1,200 loaded), doorway clearance (32-34 inches typical), placement footprint clear of showroom / waiting area customer flow, signage / branding visibility, lighting." },
      { label: "Master service agreement components", value: "SLA (24-48 hour restock response, 2-business-day service call, 95%+ uptime target, 95%+ fill rate target, corrective action protocol after sustained miss), performance-failure exit at 24-36 months, equipment ownership with host buyout option at term-end, commission settlement frequency (30 days post-period-end modern), PCI-DSS attestation requirement (annual)." },
      { label: "Sustainability reporting (OEM-aligned dealerships)", value: "Quarterly reports on kWh per machine, ENERGY STAR coverage %, low-GWP refrigerant share, recycling capture rate, truck-mile reduction. Pre-formatted for OEM sustainability program submission (Toyota 2050, Ford Roadmap, GM Zero, Nissan Green, Hyundai 2025, Honda Green Dealer). Build into operator contract." },
      { label: "First-30-day install support", value: "Install with signage / customer education (cashless workflow, brand alignment, sustainability messaging where applicable). Weekly check-in for first 30 days with operator account manager. Restock cadence calibration based on actual ticket count. Customer feedback channel via dealership service advisor." },
      { label: "First-90-day formal review", value: "Documented review against benchmarks: uptime (target 95%+, actual %), restock fill rate (target 95%+, actual %), ticket count vs traffic (actual transactions / actual service customers = capture rate), commission settlement transparency (first month statement reconciliation), customer feedback (informal at minimum). Surface issues before they harden." },
    ],
  }),
  tipCards({
    heading: "Five dealership vending placement flow mistakes",
    sub: "Each is documented in dealership post-placement reviews. All preventable with disciplined six-stage flow.",
    items: [
      { title: "Skipping same-OEM peer references", body: "Generic operator references are nearly worthless. Same-OEM peer references (other Toyota dealerships, other Ford EV-focused stores, other Honda Green Dealer franchises) reveal whether the operator's brand alignment and sustainability reporting actually match your needs. Demand 3+ at peer dealerships; call at least 3." },
      { title: "Site survey after contract signature", body: "Doing the site survey after contract signature lets surprises (power / data / clearance / floor load) drive contract renegotiation or placement compromise. Run site survey at Stage 4 — before contract finalization — so all hardware specs and placement decisions are confirmed pre-signature." },
      { title: "No formal first-90-day review", body: "Without a documented 90-day review against measurable benchmarks (uptime, fill rate, ticket count, commission transparency), early service issues harden into year-2 disputes. Schedule formal review at day 90; demand operator account manager presence; document outcomes in writing." },
      { title: "Mismatched operator for OEM-aligned dealership", body: "OEM-aligned dealerships (EV-focused franchises, sustainability-program-certified stores) need operators with matching sustainability capability (kWh data, ENERGY STAR coverage, low-GWP refrigerant share, telemetry routing, OEM-formatted reporting). Generic operators lack capability; mismatched selection produces brand inconsistency in customer waiting area." },
      { title: "Verbal commission terms without sample statement", body: "Without a sample statement (redacted from comparable dealership), the dealership can't verify line-item gross, refunds, deductions, and commission calculation. Operators that refuse to share a sample are signaling opacity. Demand sample at Stage 3 proposal review; treat refusal as hard walk-away signal." },
    ],
  }),
  inlineCta({
    text: "Want the dealership vending placement framework (scope + shortlist + proposal + site survey + contract + 90-day review)?",
    buttonLabel: "Get the placement framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support auto dealerships and franchise groups through the full placement flow — scope assessment, operator shortlist, proposal review, site survey, master contract finalization, and first-90-day review. The benchmarks reflect operator-side placement data and dealership-side post-install feedback across single-location and multi-store franchise group placements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does the full placement flow take?", answer: "Single-location dealership: 60-90 days from initial scope assessment to first-90-day review. Multi-store franchise group: 90-120 days with master agreement plus per-store rollout. Plan for full quarter from kickoff; rushing the proposal and site-survey stages produces year-2 surprises.", audience: "Dealership Management" },
      { question: "Who should be involved on the dealership side?", answer: "General manager (scope + final approval), facilities manager (site survey + install coordination), fixed operations director (service customer experience), sustainability coordinator if OEM program is in play, commercial counsel at master contract review at enterprise scale. Engage all at Stage 1; don't bring counsel only at signature.", audience: "Dealership Management" },
      { question: "What scope questions matter most at Stage 1?", answer: "Daily service customer traffic (40-120 typical), waiting area layout, existing amenity inventory, dealership brand positioning (EV-focused, luxury, family, fleet), OEM sustainability program if applicable, planned changes to service area in next 24 months. Scope errors at Stage 1 compound through later stages.", audience: "Dealership Management" },
      { question: "How many operators should we shortlist?", answer: "3-5 operators at Stage 2. Fewer than 3 limits negotiation leverage. More than 5 dilutes evaluation depth. Each shortlist operator should have 3+ same-segment dealership references and verifiable telemetry / ENERGY STAR / cashless / PCI capability. Drop operators that can't provide same-segment references.", audience: "Procurement" },
      { question: "What's the sample commission statement question?", answer: "At Stage 3 proposal review, request a redacted sample monthly commission statement from a comparable dealership. Statement should show line-item gross sales, refunds, net sales, commission rate, commission amount, and any deductions. Refusal to share any sample is a hard walk-away signal — indicates opaque settlement.", audience: "Procurement" },
      { question: "What does the site survey cover?", answer: "Power (120V / 20A standard; 240V at larger machines), data (4G or Wi-Fi connectivity test), floor load (modern beverage ~700 lbs empty / ~1,200 loaded), doorway clearance (32-34 inches typical), placement footprint that doesn't conflict with showroom / waiting area customer flow, lighting, signage visibility.", audience: "Facilities" },
      { question: "What goes into the master contract?", answer: "SLA (24-48 hour restock, 2-business-day service call, 95%+ uptime, 95%+ fill rate), performance-failure exit at 24-36 months, equipment ownership with host buyout option at term-end, commission settlement frequency (30 days post-period-end modern), PCI-DSS annual attestation requirement, OEM sustainability reporting where applicable. Counsel-reviewed at enterprise scale.", audience: "Procurement" },
      { question: "What does the first-90-day review measure?", answer: "Uptime (target 95%+), restock fill rate (target 95%+), ticket count vs traffic (capture rate = transactions / service customers), commission settlement transparency (first-month statement reconciliation), customer feedback (informal at minimum, formal via dealership service advisor). Document outcomes; trigger corrective action protocol if benchmarks missed.", audience: "Dealership Management" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NADA — National Automobile Dealers Association", url: "https://www.nada.org/", note: "Industry trade association reference for dealership operations and amenity standards" },
      { label: "PCI Security Standards Council — DSS attestation framework", url: "https://www.pcisecuritystandards.org/", note: "Standard governing cashless payment attestation at dealership placements" },
      { label: "ENERGY STAR — refrigerated beverage vending machines", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Federal energy efficiency standard referenced in dealership eco-stack" },
      { label: "NAMA — vending operator standards and references", url: "https://www.namanow.org/", note: "Industry trade association reference for operator capability standards" },
      { label: "Toyota Environmental Challenge 2050", url: "https://global.toyota/en/sustainability/esg/challenge2050/", note: "Representative OEM sustainability program referenced for dealership reporting" },
    ],
  }),
  relatedGuides({
    heading: "Related dealership vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Beverage vending in dealership waiting areas", description: "Hot / cold beverage program design for service customer waiting amenity.", href: "/vending-for-dealerships/beverage-vending-in-dealership-waiting-areas" },
      { eyebrow: "Operations", title: "Eco-friendly dealership vending", description: "ENERGY STAR + low-GWP refrigerant + recycling co-location for OEM-aligned dealerships.", href: "/vending-for-dealerships/eco-friendly-dealership-vending" },
      { eyebrow: "Hub", title: "All dealership vending guides", description: "Service-area vending design, sustainability, operator selection, and OEM brand alignment.", href: "/vending-for-dealerships" },
    ],
  }),
]);
process.exit(0);
