import { seedPost, tldr, statStrip, timeline, specList, dimensionDiagram, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-install-vending-machines-in-hotels", [
  tldr({
    heading: "How do you actually install vending machines in a hotel?",
    paragraph:
      "Hotel vending installs differ from office and warehouse installs in five ways: (1) the placement logic is guided by floor-by-floor guest convenience rather than a single breakroom (typical full-service hotel has 4-8 placements across vending alcoves on guest floors, the lobby, the fitness center, the pool deck, and the back-of-house associate breakroom); (2) the brand-finish requirement is real (luxury and upscale tiers require cabinet wraps, signage, and LED accents that match brand standards — $400-1,200 per unit on top of equipment), (3) electrical is per-alcove not per-property (every floor's alcove needs verified dedicated 120V/15A or 20A within 6 feet — older properties often have shared circuits that trip when a refrigerated unit cycles next to ice machines), (4) PMS integration is increasingly expected at full-service and luxury tiers (guests want folio-charging via Opera, Onity, Maestro or similar, not a separate card swipe), and (5) the install sequencing has to work around occupancy — most hotels can't take a guest floor offline, so installs run between 9 AM and 3 PM during low-traffic windows with operator route techs in uniform that matches hotel decorum standards. A standard install of a snack + beverage pair in a guest-floor vending alcove takes 2-3 hours; a lobby AI cooler install with PMS integration takes 4-6 hours; a multi-machine property rollout across 4-8 placements typically spans 5-10 business days with phased delivery to avoid loading-dock congestion. Most install failures are pre-install: wrong alcove circuit, brand-finish not specified at order, PMS integration not scoped, ice-machine adjacency causing temperature swings, narrow back-of-house corridor blocking 600 lb pallet delivery. Site survey discipline matters more than install-day execution at hotels.",
    bullets: [
      { emphasis: "Hotel installs differ from office in five ways:",
        text: "Floor-by-floor placement logic + brand-finish requirement + per-alcove electrical verification + PMS integration scoping + occupancy-aware install sequencing. Each adds to install procedure and lead time vs standard office install." },
      { emphasis: "2-3 hours per guest-floor alcove install:",
        text: "Snack + beverage pair in a vending alcove takes 2-3 hours including circuit verification + placement + telemetry + planogram. Lobby AI cooler with PMS integration: 4-6 hours. Multi-machine property rollout: 5-10 business days phased." },
      { emphasis: "Pre-install survey beats install-day fixes:",
        text: "Wrong alcove circuit + brand-finish gap + PMS scoping miss + ice-machine adjacency are the four documented failure modes. Survey them before delivery; don't discover them on install day with a guest watching." },
    ],
  }),
  statStrip({
    heading: "Hotel install benchmarks",
    stats: [
      { number: "2-3 hr", label: "per guest-floor install", sub: "snack + beverage pair in alcove", accent: "blue" },
      { number: "4-6 hr", label: "lobby AI cooler install", sub: "includes PMS integration", accent: "blue" },
      { number: "4-8", label: "placements per full-service hotel", sub: "guest floors + lobby + fitness + pool + BOH", accent: "orange" },
      { number: "5-10 day", label: "multi-placement property rollout", sub: "phased to avoid loading-dock congestion", accent: "orange" },
    ],
  }),
  timeline({
    heading: "The hotel install playbook",
    sub: "What happens from contract signature through install-day walkthrough. Total elapsed: 3-5 weeks lead time, 2-6 hours per machine on install day depending on format.",
    howToName: "How to install hotel vending machines",
    totalTime: "PT5H",
    steps: [
      { label: "STEP 1", title: "Property walkthrough + placement scoping", description: "Operator account manager + hotel GM + facilities + brand-standards rep walk every planned placement. Confirm guest-floor alcoves (typically 1 per 30-50 rooms), lobby placement near front desk, fitness center, pool deck (seasonal), back-of-house associate breakroom. Document brand-finish requirements per placement. Measure cellular signal at each alcove (steel-frame buildings attenuate signal). 90-120 minutes for full-service property." },
      { label: "STEP 2", title: "Electrical + circuit verification per alcove", description: "Verify dedicated 120V/15A or 20A circuit within 6 ft of each placement. Older hotels often share circuits between vending alcoves and ice machines on the same floor — ice machine compressor cycling trips breaker. Scope electrical pulls where needed; coordinate with facilities engineer + brand-approved electrician. 5-10 business days for any electrical work." },
      { label: "STEP 3", title: "Brand-finish + signage approval", description: "Submit cabinet wrap design, signage, and LED accent specs to brand-standards rep for approval. Upscale and luxury tiers typically require custom wraps matching property design; mid-tier hotels often use operator standard. $400-1,200 per cabinet for custom finish. Approval typically 5-10 business days; do this in parallel with electrical work." },
      { label: "STEP 4", title: "PMS integration scoping (lobby AI cooler placements)", description: "If lobby placement includes AI cooler with folio-charging, scope integration with property management system (Opera, Onity, Maestro). Coordinate with hotel IT + PMS vendor. Setup typically $2K-5K per property; integration timeline 4-8 weeks. Start early; this drives the overall property rollout schedule." },
      { label: "STEP 5", title: "Delivery + back-of-house coordination", description: "Operator coordinates with hotel loading dock + bell-stand. Delivery via service elevator (most hotels restrict freight to non-guest hours). Route through back-of-house corridors with 600-900 lb pallet jack; verify corridor width ≥36\" continuous. Route techs in uniform matching hotel decorum standards. 30-60 minutes per machine from truck to placement." },
      { label: "STEP 6", title: "Position + level + electrical hookup per placement", description: "Machine placed in confirmed spot with ≥36\" front clearance + ≥6\" rear clearance. Cabinet leveled with torpedo level. Plug into dedicated 120V outlet. Verify with multimeter: 118-122V hot-to-neutral, <2V neutral-to-ground, breaker confirmed not shared with ice machine or housekeeping cart chargers. 15-25 minutes per machine including circuit documentation." },
      { label: "STEP 7", title: "Telemetry + PMS handshake verification", description: "Cellular modem + ethernet (lobby AI cooler) connected to telemetry platform. First handshake verifies signal ≥-90 dBm at exact placement. PMS integration tested with sample folio charge + reversal — confirms guest charge posts correctly + dispute flow works. 30-60 minutes including signal verification + PMS test." },
      { label: "STEP 8", title: "Brand-aligned planogram load + test vend", description: "Initial planogram loaded per placement: guest-floor alcoves get convenience mix (water, soda, snacks, basic toiletries), lobby gets hotel-pantry mix (fresh meals, premium beverages, branded snacks, phone chargers), fitness gets hydration-heavy mix, BOH associate breakroom gets industrial-style mix. Test vend every coil + payment cycle. 30-45 minutes per machine including planogram + walkthrough handoff to hotel team." },
    ],
  }),
  specList({
    heading: "Hotel install pre-survey checklist",
    items: [
      { label: "Placement count + zones", value: "Full-service hotel typically requires 4-8 placements: guest-floor vending alcoves (1 per 30-50 rooms), lobby (near front desk), fitness center, pool deck (seasonal), back-of-house associate breakroom. Map placements during property walkthrough; confirm each with GM + facilities." },
      { label: "Per-alcove dedicated circuit", value: "Verify dedicated 120V/15A or 20A circuit within 6 ft of each placement. Confirm not shared with ice machine, housekeeping cart chargers, or floor housekeeping closet outlets. Ice machine cycling adjacent to refrigerated vending is the #1 documented circuit failure mode at hotels." },
      { label: "Brand-finish + signage requirements", value: "Confirm brand-standards rep involvement at proposal. Upscale and luxury tiers require custom cabinet wraps, signage, LED accents matching property design — $400-1,200 per cabinet. Mid-tier hotels often accept operator standard finish. Approval typically 5-10 business days." },
      { label: "PMS integration scoping (lobby AI cooler)", value: "Lobby AI cooler placements at full-service and luxury hotels typically include PMS folio-charging. Coordinate with hotel IT + PMS vendor (Opera, Onity, Maestro, or similar). Setup cost $2K-5K per property; ongoing per-transaction fee small. Integration timeline 4-8 weeks; start early." },
      { label: "Ice-machine + housekeeping closet adjacency", value: "Vending alcoves often share floor real estate with ice machines and housekeeping closets. Confirm refrigerated vending unit is not directly adjacent to ice machine (temperature swing + circuit sharing). Confirm not blocking housekeeping cart staging path. Re-position alcove if needed." },
      { label: "Cellular signal per placement", value: "≥-90 dBm at exact placement. Steel-frame buildings + interior alcoves attenuate signal materially. Measure at each placement during walkthrough; lobby and fitness typically fine, guest-floor alcoves and BOH breakrooms often marginal. External antenna kit available ($200-400) if needed." },
      { label: "Back-of-house corridor + service elevator", value: "≥36\" continuous corridor width from loading dock through BOH to each placement. Service elevator weight rating ≥1,000 lb (most hotel service elevators are 2,000-2,500 lb rated). Confirm freight-elevator hours; most hotels restrict freight to non-guest windows (9 AM-3 PM typical)." },
      { label: "Brand-decorum staff coordination", value: "Operator route techs in uniform matching hotel decorum standards during install + ongoing service. Coordinate with bell-stand + front desk on guest-visible install hours. Schedule installs during low-traffic windows (typically 9 AM-3 PM)." },
      { label: "Pool-deck NEMA rating (if applicable)", value: "Pool-deck placements require NEMA 4 outdoor-rated cabinet with shaded canopy. Power: GFCI outlet near pool deck. Seasonal pull/shutdown in temperate climates. Confirm pool deck has dedicated GFCI within 6 ft of planned placement." },
      { label: "Service + restock cadence post-install", value: "Document operator restock cadence (typically 1-2× per week at busy hotels, 1× per 2 weeks at quieter properties). Confirm access procedure for after-hours service. Front desk briefed on dispute portal + refund procedure. Operator service contact documented for hotel team." },
    ],
  }),
  dimensionDiagram({
    heading: "Standard hotel install dimensions",
    sub: "Reference dimensions for snack + beverage pair in guest-floor vending alcove. Add lobby AI cooler and fitness/pool placements separately per zone.",
    machineName: "Snack + beverage pair (guest-floor alcove)",
    width: "80 in (40\" each, paired)",
    depth: "35 in",
    height: "72 in",
    footprint: "19.4 sq ft",
    weightEmpty: "1,200-1,400 lb (pair)",
    weightLoaded: "1,700-1,900 lb (pair)",
    doorwayClearance: "36 in",
    note: "Vending alcove typically 6-8 ft wide × 4 ft deep on guest floors. Allow ≥6\" rear clearance + ≥36\" front clearance. Service elevator path ≥36\" continuous width. Avoid direct adjacency to ice machine (temperature swing + circuit sharing).",
  }),
  decisionTree({
    heading: "Should we install vending in-house or through a managed operator?",
    question: "Does the hotel have dedicated facilities staff with route-tech training, brand-decorum SOPs for guest-visible service, and capital budget for equipment + brand-finish + PMS integration?",
    yesBranch: {
      title: "In-house program — possible at multi-property brands",
      description: "Large hotel brands with central procurement + facilities operations sometimes run in-house vending. Requires capital outlay, route-tech training, planogram management, dispute handling, PMS integration ownership. Sensible at multi-property scale; rarely sensible at single-property scale.",
      finalTone: "go",
      finalLabel: "In-house",
    },
    noBranch: {
      title: "Managed operator — standard for single-property + most multi-property",
      description: "Most hotels run managed-operator programs. Operator funds equipment + brand-finish + PMS integration; hotel takes commission (8-15% typical). Operator handles restock, dispute portal, service SLA. Lower hotel risk + faster deployment. Confirm operator has hotel-specific experience.",
      finalTone: "stop",
      finalLabel: "Managed operator",
    },
  }),
  tipCards({
    heading: "Five hotel install mistakes",
    sub: "Each documented in operator post-install service tickets at hotel properties. All preventable with brand-aware site survey discipline.",
    items: [
      { title: "Outlet shared with ice machine on same floor", body: "Older hotels often share circuits between vending alcoves and adjacent ice machines. Ice machine compressor cycling trips the vending breaker within days. Confirm dedicated circuit with facilities engineer during site survey — not on install day. Scope new circuit pull if needed; budget $400-1,200." },
      { title: "Brand-finish not specified at order", body: "Operator delivers standard-finish cabinet to a luxury hotel lobby; brand-standards rep rejects on install day. Cabinet wraps require 3-5 week lead time once ordered. Specify brand finish at proposal + get brand-standards approval in writing before equipment manufacture. Don't surface this on install day." },
      { title: "PMS integration scoped after equipment arrives", body: "Operator delivers AI cooler; folio-charging not configured because PMS integration wasn't scoped at proposal. Integration takes 4-8 weeks; cooler sits with card-only payment in the interim. Convert rate runs 15-25% lower without PMS. Scope PMS integration at proposal; start work in parallel with equipment manufacture." },
      { title: "Refrigerated unit adjacent to ice machine", body: "Vending alcove placement puts refrigerated cabinet directly adjacent to ice machine. Ice machine surface frost + ambient temperature swings degrade refrigerated unit compressor; coils foul faster; energy draw rises. Maintain ≥18\" separation or re-zone the alcove during survey." },
      { title: "Install scheduled during peak occupancy hours", body: "Operator schedules guest-floor install at 2 PM Friday; freight elevator backed up with luggage carts, guests in alcove. Coordinate install windows with hotel operations — most full-service hotels prefer 9 AM-3 PM weekdays, no installs during weekend peak check-in. Route techs in hotel-appropriate uniform regardless." },
    ],
  }),
  inlineCta({
    text: "Want the hotel vending install checklist (placement zones + brand-finish + PMS integration + per-alcove electrical + scheduling)?",
    buttonLabel: "Get the hotel install checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support hotel vending installs across limited-service, full-service, upscale, and luxury tiers — including property walkthroughs with brand-standards reps, per-alcove electrical verification, brand-finish specification, PMS integration scoping (Opera, Onity, Maestro), occupancy-aware install sequencing, and post-install dispute handling. The benchmarks reflect operator-side data and hotel-side feedback from current accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does a hotel vending install take?", answer: "2-3 hours per snack + beverage pair in a guest-floor alcove. 4-6 hours for a lobby AI cooler with PMS integration. Multi-placement property rollout (4-8 placements) typically spans 5-10 business days with phased delivery to avoid loading-dock congestion and guest disruption.", audience: "Hotel Operators" },
      { question: "What's different about installing in a hotel vs an office?", answer: "Five differences: floor-by-floor placement logic (4-8 placements vs single breakroom), brand-finish requirement (custom wraps at upscale/luxury), per-alcove electrical verification, PMS integration scoping, and occupancy-aware install sequencing. Each adds to install procedure and lead time vs standard office install.", audience: "Hotel Operators" },
      { question: "Do guest-floor vending alcoves need dedicated circuits?", answer: "Yes. Dedicated 120V/15A or 20A circuit within 6 ft of each placement, confirmed not shared with ice machine on the same floor or housekeeping cart chargers. Ice machine cycling adjacent to refrigerated vending is the #1 documented circuit failure mode at hotels. Scope new circuit pull if needed.", audience: "Facilities" },
      { question: "How does the brand-finish process work?", answer: "Operator submits cabinet wrap design, signage, and LED accent specs to brand-standards rep for approval. Upscale and luxury tiers typically require custom wraps matching property design ($400-1,200 per cabinet). Mid-tier hotels often accept operator standard. Approval typically 5-10 business days; do in parallel with equipment manufacture.", audience: "Brand-Standards Reps" },
      { question: "When is PMS integration scoped?", answer: "At proposal, not after equipment arrives. Integration with property management system (Opera, Onity, Maestro) for folio-charging takes 4-8 weeks; setup cost $2K-5K per property. Lobby AI cooler conversion rate runs 15-25% lower without PMS integration. Scope at proposal; start work in parallel with equipment.", audience: "Hotel IT" },
      { question: "Can we install during peak hotel hours?", answer: "Generally no for guest-visible placements. Most hotels prefer 9 AM-3 PM weekdays for install windows; no installs during weekend peak check-in. Route techs wear hotel-appropriate uniform. Back-of-house placements have more flexible windows; coordinate with facilities and bell-stand.", audience: "Hotel Operators" },
      { question: "What about pool-deck outdoor placements?", answer: "NEMA 4 outdoor-rated cabinet with shaded canopy required. Power via GFCI outlet within 6 ft of placement. Seasonal pull or shutdown in temperate climates; verify with operator at proposal. Pool-deck planogram beverage-heavy; coordinate with pool operations on access and signage.", audience: "Facilities" },
      { question: "Who handles dispute resolution after install?", answer: "Operator dispute portal on receipt for guest charge disputes; refunds within 1-3 business days. Front desk also empowered to process immediate refunds at check-out if guest flags an issue. Operator service contact documented; 24-48 hour service SLA typical. Confirm at install handoff.", audience: "Hotel Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AHLA (American Hotel & Lodging Association) — hotel amenity standards", url: "https://www.ahla.com/", note: "Industry data on hotel retail and vending placement standards" },
      { label: "NAMA — operator install best practices", url: "https://www.namanow.org/", note: "Industry-standard install procedures and route-tech certification" },
      { label: "Opera PMS / Maestro PMS — hotel property management integration docs", url: "https://www.oracle.com/industries/hospitality/", note: "PMS integration reference for cooler folio-charging at hotels" },
      { label: "ENERGY STAR — commercial refrigeration", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Certification standard for refrigerated vending at hospitality placements" },
      { label: "ASHRAE — refrigeration setpoint and alcove ventilation standards", url: "https://www.ashrae.org/", note: "Industry standard for refrigeration system operation at hotel alcove placements" },
    ],
  }),
  relatedGuides({
    heading: "Related hotel vending guides",
    items: [
      { eyebrow: "Sister guide", title: "24/7 vending services for hotel guests", description: "Vending program structure across hotel formats — limited-service, full-service, upscale, luxury, and the equipment fit for each.", href: "/vending-for-hotels/24-7-vending-services-for-hotel-guests" },
      { eyebrow: "Format", title: "AI vending coolers for hotels", description: "Why hotels are replacing minibars and staffed grab-and-go with AI coolers — placement, PMS integration, and revenue.", href: "/ai-vending-coolers/ai-vending-coolers-for-hotels" },
      { eyebrow: "Hub", title: "All hotel vending guides", description: "Placement, brand-finish, PMS integration, planogram, and operations across hotel tiers.", href: "/vending-for-hotels" },
    ],
  }),
]);
process.exit(0);
