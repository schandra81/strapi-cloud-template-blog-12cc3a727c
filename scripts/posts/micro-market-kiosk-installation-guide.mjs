import { seedPost, tldr, statStrip, timeline, specList, tipCards, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("micro-market-kiosk-installation-guide", [
  tldr({
    heading: "What's the actual installation sequence for a micro-market self-checkout kiosk — from site survey through go-live?",
    paragraph:
      "Micro-market kiosk installation is the structured discipline that converts an operator proposal into a working, code-compliant, PCI-DSS-scoped, ADA-accessible, ServSafe-ready installation. The sequence has 10 mandatory phases: (1) site survey with operator + facilities + IT covering floor space, ceiling height, electrical capacity, data connectivity, lighting, and ADA approach paths; (2) electrical work — dedicated 20A 110V circuit for kiosk + payment processor with GFCI per NEC; (3) data / network — Cat6 hardwire to kiosk + payment processor with dedicated VLAN for PCI-DSS scope, or cellular 5G fallback; (4) flooring + leveling — industrial sheet vinyl or polished concrete rated for cooler weight + spill containment; (5) lighting — 3000-4000K LED at 750-1000 lumen / sq ft, dimmable controls, emergency lighting compliance; (6) kiosk + payment hardware install — touchscreen, barcode scanner, payment surface, employee badge reader, PCI-DSS sandbox + production cutover; (7) coolers + open shelving + frozen unit staged per planogram with doorway clearance verified; (8) cold-chain commissioning — refrigerated cases pre-cooled to 35-40F over 24-48 hours, frozen unit to -10F, telemetry-driven deviation alert testing; (9) planogram load + initial stocking with allergen + FIFO date discipline; (10) HR badge integration + soft launch + full launch + kickoff event. Total elapsed time 2-4 weeks from equipment delivery to full launch. Modern operators run all 10 phases as standard MSA scope; legacy operators may skip PCI-DSS sandbox, cold-chain commissioning, or HR badge integration. Hosts running an install should require all 10 phases at MSA scope, document each with photo + sign-off, and plan a 60-90 day calibration phase post-launch.",
    bullets: [
      { emphasis: "10 sequential phases from site survey through full launch:",
        text: "Site survey, electrical, data/network, flooring/leveling, lighting, kiosk hardware, coolers + shelving, cold-chain commissioning, planogram load, HR badge + soft launch + full launch." },
      { emphasis: "Each phase has compliance + documentation scope:",
        text: "NEC electrical, PCI-DSS payment, FDA fresh-food labeling, ADA accessibility, ServSafe food handling. Document each phase with photo + sign-off; legacy operators sometimes skip PCI-DSS sandbox or cold-chain commissioning." },
      { emphasis: "Total elapsed time 2-4 weeks from delivery to launch:",
        text: "Plus 60-90 days calibration post-launch (planogram adjustments, theft / shrink baseline, employee onboarding feedback, telemetry alert tuning)." },
    ],
  }),
  statStrip({
    heading: "Micro-market kiosk installation benchmarks",
    stats: [
      { number: "10", label: "sequential install phases", sub: "site survey through full launch", accent: "blue" },
      { number: "2-4 weeks", label: "elapsed install time", sub: "equipment delivery to launch", accent: "blue" },
      { number: "20A", label: "dedicated circuit", sub: "kiosk + payment processor, GFCI per NEC", accent: "blue" },
      { number: "35-40F", label: "refrigerated case target", sub: "pre-cooled 24-48 hours at commissioning", accent: "blue" },
    ],
  }),
  timeline({
    heading: "10-phase micro-market kiosk installation timeline",
    sub: "Sequential install phases from site survey through full launch. Modern operators run all 10 phases as standard MSA scope; legacy operators may skip critical phases.",
    howToName: "Micro-market kiosk installation",
    totalTime: "2-4 weeks elapsed (plus 60-90 days post-launch calibration)",
    steps: [
      { label: "Week -2 to Week 0", title: "Phase 1 — Site survey", description: "Operator + facilities + IT walk the proposed location. Verify floor space (250-500 sq ft typical), ceiling height (8 ft minimum for open shelving), electrical capacity (20A 110V dedicated for kiosk + payment + each cooler), data connectivity (Cat6 hardwire or cellular 5G fallback), lighting baseline, ADA approach paths, accessible route from accessible entrance. Document with photo + sign-off." },
      { label: "Week 0 day 1-3", title: "Phase 2 — Electrical work", description: "Licensed electrician installs dedicated 20A 110V circuit for kiosk + payment processor, dedicated 20A 110V circuits per refrigerated cooler, dedicated 20A 208V circuit for frozen unit if applicable. GFCI protection per NEC. Neutral / ground audit. Permit pulled per local jurisdiction; AHJ inspection scheduled." },
      { label: "Week 0 day 3-5", title: "Phase 3 — Data + network", description: "Cat6 hardwire to kiosk + payment processor with dedicated VLAN for PCI-DSS scope, or cellular 4G/5G fallback at sites without reliable hardwire. Static IP allocated; firewall rules for payment processor traffic; PCI-DSS scope documented. Network tested with operator IT + host IT." },
      { label: "Week 1 day 1-2", title: "Phase 4 — Flooring + leveling", description: "Industrial sheet vinyl or polished concrete rated for cooler weight (350-500 lb per cooler) + spill containment surface. Leveling within OEM tolerance for cooler operation. Floor drain or spill containment per local jurisdiction food-handling rules where applicable." },
      { label: "Week 1 day 2-3", title: "Phase 5 — Lighting upgrade", description: "3000-4000K LED lighting at 750-1000 lumen / sq ft for grab-and-go shelving readability. Dimmable controls for staff opening / closing routines. Emergency lighting compliance per local building code. Replace fluorescent where applicable." },
      { label: "Week 1 day 3-5", title: "Phase 6 — Kiosk + payment hardware install", description: "Touchscreen kiosk mounted at accessible reach height (48 in max), barcode scanner integrated, payment surface for EMV contactless + mobile wallet, employee badge reader where applicable, PCI-DSS sandbox testing, production cutover after sandbox validation. Receipt printer + signage." },
      { label: "Week 1 day 5 to Week 2 day 2", title: "Phase 7 — Coolers + open shelving + frozen unit", description: "Equipment delivery + staging per planogram. Coolers leveled + plumbed for condensate. Frozen unit installed at coldest run with adequate ventilation clearance. Open shelving installed at planogram heights. Doorway clearance verified during delivery; freight elevator coordination at multi-floor sites." },
      { label: "Week 2 day 1-3", title: "Phase 8 — Cold-chain commissioning", description: "Refrigerated cases pre-cooled to 35-40F over 24-48 hours. Frozen unit pre-cooled to -10F. Telemetry-driven deviation alert testing — pull a cooler off temp; verify alert fires within set window. Operator commissioning log signed off by host facilities + operator service tech." },
      { label: "Week 2 day 3-5", title: "Phase 9 — Planogram load + initial stocking", description: "Operator loads initial 200-500 SKU planogram per format. Top 9 allergen + nutrition labels affixed per FDA. FIFO date-stamp applied. Pricing verified at kiosk vs operator dashboard. Refrigerated + frozen items loaded last after cold-chain confirmed stable." },
      { label: "Week 3 day 1-3", title: "Phase 10 — HR badge + soft launch + full launch", description: "Closed-loop HR badge integration tested in sandbox. Payroll-deduction sandbox validated where applicable. Soft launch with limited employee population for 3-5 days; transaction + payment + cold-chain + shrink baseline validated. Full launch with kickoff event, freebie / sample-product strategy, first-30-day operator on-site support." },
    ],
  }),
  specList({
    heading: "Installation specifications + compliance scope",
    items: [
      { label: "Electrical (NEC + AHJ)", value: "Dedicated 20A 110V circuit for kiosk + payment processor, dedicated 20A 110V circuits per refrigerated cooler, dedicated 20A 208V for frozen unit if applicable, GFCI protection per NEC. Licensed electrician + permit + AHJ inspection. Document panel schedule + circuit labels for facilities team." },
      { label: "Data / network (PCI-DSS scope)", value: "Cat6 hardwire to kiosk + payment processor with dedicated VLAN, static IP, firewall rules limiting traffic to payment processor whitelist. PCI-DSS scope documented; quarterly vulnerability scans (modern operator manages). Cellular 4G / 5G fallback at sites where hardwire unreliable. Tested with operator + host IT." },
      { label: "Flooring + leveling (cooler weight + spill containment)", value: "Industrial sheet vinyl or polished concrete rated for cooler weight (350-500 lb per cooler loaded). Spill containment surface, floor drain where local jurisdiction food-handling rules require. Leveling within OEM tolerance for cooler operation (typically 1/4 in over cooler footprint)." },
      { label: "Lighting (illumination + emergency compliance)", value: "3000-4000K LED at 750-1000 lumen / sq ft for shelving readability. Dimmable controls. Emergency lighting per local building code. Replace fluorescent where applicable. Lighting also impacts theft / shrink — well-lit micro-markets show lower shrink than dim ones." },
      { label: "Kiosk hardware + ADA", value: "Touchscreen at 48 in max reach height. 30x48 clear floor space at kiosk. Accessible route 36 in from accessible entrance. Barcode scanner + payment surface at accessible reach. Audio support for low-vision users. WCAG 2.1 AA touchscreen accessibility (high-contrast, audio readback)." },
      { label: "Payment + PCI-DSS", value: "EMV contactless + mobile wallet + EMV chip + magstripe fallback. Modern payment processor with sub-2-second authorization at peak. PCI-DSS scope managed by operator processor (host typically out-of-scope when configured correctly). Sandbox + production cutover with documented test plan." },
      { label: "Cold-chain commissioning (FDA + telemetry)", value: "Refrigerated cases pre-cooled to 35-40F over 24-48 hours. Frozen unit pre-cooled to -10F. Telemetry-driven deviation alert testing before launch. Operator commissioning log + facilities sign-off. FDA Food Code cold-chain discipline. Don't load fresh items until cold-chain confirmed stable." },
      { label: "Allergen + nutrition (FDA + planogram)", value: "Top 9 allergen labels affixed at point of sale per FDA. Nutrition info per packaged food labeling rule. Operator dashboard tags allergens for kiosk display. Some hosts add ServSafe-trained operator personnel for fresh-food handling. Multi-language at diverse-population sites." },
      { label: "HR badge integration + employee onboarding", value: "Closed-loop HR badge integration tested in sandbox before production. Payroll-deduction sandbox validated where applicable. Employee onboarding communication scheduled before launch — kiosk demo at staff meeting, signage, freebie / sample at launch event. First-30-day operator on-site support." },
    ],
  }),
  keyTakeaways({
    heading: "Installation guide key takeaways",
    takeaways: [
      "10 sequential install phases from site survey to full launch; modern operators run all as standard MSA scope.",
      "Each phase has compliance + documentation scope — NEC electrical, PCI-DSS payment, FDA cold-chain + labeling, ADA accessibility, ServSafe food handling.",
      "Total elapsed time 2-4 weeks from equipment delivery; plus 60-90 days calibration post-launch.",
      "Legacy operators may skip PCI-DSS sandbox, cold-chain commissioning, or HR badge integration; require all 10 phases at MSA scope.",
      "Soft launch + transaction testing before full launch surfaces issues at low risk and is non-negotiable for credible cutover.",
      "Document each phase with photo + sign-off; integrate into operator quarterly business review for ongoing reference.",
    ],
  }),
  tipCards({
    heading: "Five installation patterns that decide success",
    sub: "Each is documented from operator-side micro-market installs at office, hospital, logistics, and campus sites.",
    items: [
      { title: "Run site survey before signing the MSA, not after", body: "Floor space, electrical capacity, data connectivity, and ADA approach paths shape what equipment fits. Operators sometimes propose configurations that don't survive site survey. Site survey signoff before MSA commits prevents change-orders and timeline slippage." },
      { title: "Require all 10 phases at MSA scope; verify at proposal demo", body: "Legacy operators sometimes skip PCI-DSS sandbox, cold-chain commissioning, or HR badge integration. Require all 10 phases at MSA scope with documented sign-off. Verify at proposal demo by asking the operator to walk through a recent install with phase-by-phase photo evidence." },
      { title: "Cold-chain commissioning before fresh-food loading", body: "Pre-cool 24-48 hours; verify deviation alerts fire within set window; signed-off commissioning log. Don't load fresh items until cold-chain confirmed stable. Otherwise the first week is dominated by spoilage refunds and the program loses credibility with employees + facilities." },
      { title: "Soft launch with limited population for 3-5 days", body: "Surfaces transaction, payment, telemetry, and planogram issues at low risk. Adjust before full launch + kickoff event. Modern operators include soft launch in standard scope; legacy operators sometimes push for full-launch-on-day-one. Don't agree to that." },
      { title: "Plan 60-90 days post-launch calibration", body: "Planogram adjustments, theft / shrink baseline, employee onboarding feedback, telemetry alert tuning, refund cadence calibration. First-30-day operator on-site support is non-negotiable; first-60-90-day weekly review with operator catches the remaining issues." },
    ],
  }),
  inlineCta({
    text: "Want the full 10-phase micro-market installation checklist with photo / sign-off templates?",
    buttonLabel: "Get the install checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported micro-market installation program design at office, hospital, logistics, and campus sites — including site survey discipline, NEC electrical scope, PCI-DSS data path, cold-chain commissioning, ADA accessibility, HR badge integration, and soft-launch protocol. The benchmarks reflect operator-side data from multi-shift installs; this site is equipped to scope similar micro-market installs at qualifying sites in coordination with facilities + IT.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does a micro-market install take?", answer: "2-4 weeks elapsed from equipment delivery to full launch, plus 60-90 days post-launch calibration. The 10 phases run mostly sequentially with some parallel work (electrical + data while flooring cures). Site survey precedes equipment order by 2-4 weeks. Total project elapsed time including pre-order: 6-10 weeks.", audience: "Facilities" },
      { question: "What electrical capacity do we need?", answer: "Dedicated 20A 110V circuit for the kiosk + payment processor, dedicated 20A 110V circuits per refrigerated cooler (typically 2-3 coolers), dedicated 20A 208V for frozen unit if applicable. GFCI protection per NEC. Total electrical draw 30-60A across the installation. Licensed electrician + permit + AHJ inspection required.", audience: "Facilities" },
      { question: "Do we need hardwired internet, or is cellular enough?", answer: "Cat6 hardwire is preferred for kiosk + payment processor with a dedicated VLAN for PCI-DSS scope. Cellular 4G / 5G fallback works at sites without reliable hardwire. Modern operators support both. Verify network reliability at site survey; PCI-DSS scope should not depend on shared facility Wi-Fi.", audience: "IT" },
      { question: "Who handles PCI-DSS compliance?", answer: "Operator payment processor handles PCI-DSS scope when configured correctly with dedicated VLAN + firewall rules + sandbox + production cutover. Host typically out-of-scope. Operator provides quarterly vulnerability scan reports. Verify in MSA; legacy operators sometimes leave host exposed by not segmenting payment traffic correctly.", audience: "IT / Security" },
      { question: "What's cold-chain commissioning?", answer: "Pre-cool refrigerated cases to 35-40F over 24-48 hours, frozen unit to -10F. Test telemetry-driven deviation alerts (pull a cooler off temp; verify alert fires within set window). Operator commissioning log signed off by host facilities + operator service tech. Don't load fresh items until commissioning complete; FDA cold-chain discipline.", audience: "Facilities + Operations" },
      { question: "Why a soft launch?", answer: "Surfaces transaction, payment, telemetry, planogram, and employee-onboarding issues at low risk. 3-5 days with a limited employee population catches what test transactions don't. Adjust before full launch + kickoff event. Modern operators include soft launch in standard MSA scope.", audience: "Operations" },
      { question: "What about ADA compliance?", answer: "Touchscreen at 48-inch max reach height, 30x48 inch clear floor space at kiosk, accessible route 36-inch from accessible entrance, audio support, WCAG 2.1 AA touchscreen accessibility (high-contrast mode, audio readback), allergen + nutrition info accessible without reading dense rear labels. Verify at install with facilities + ADA coordinator.", audience: "Facilities + Compliance" },
      { question: "What happens in the 60-90 days after launch?", answer: "Planogram refinement based on actual SKU velocity, theft / shrink baseline establishment, employee onboarding feedback, telemetry alert tuning (avoid false-positive deviation alerts), refund cadence calibration. First-30-day operator on-site support is standard MSA scope; weekly operator review through day 90 catches remaining issues.", audience: "Operations" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code covering dedicated circuit + GFCI requirements at micro-market installs" },
      { label: "PCI Security Standards Council — PCI DSS", url: "https://www.pcisecuritystandards.org/", note: "Payment card industry data security standard scoping kiosk payment infrastructure" },
      { label: "FDA Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022", note: "Federal food-handling reference covering cold-chain + labeling at fresh-food micro-markets" },
      { label: "ADA Standards for Accessible Design (2010)", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Federal accessibility design standards including reach + clear floor space at kiosk installs" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering micro-market install + operations best practices" },
    ],
  }),
  relatedGuides({
    heading: "Related micro-market guides",
    items: [
      { eyebrow: "Sister guide", title: "Micro-market installation checklist", description: "Full 12-phase install checklist with photo / sign-off discipline.", href: "/micro-market-services/micro-market-installation-checklist" },
      { eyebrow: "Sister guide", title: "Difference between micro-market and mini-mart", description: "Service model comparison covering capital, operating complexity, and placement fit.", href: "/micro-market-services/difference-between-micro-market-and-mini-mart" },
      { eyebrow: "Hub", title: "All micro-market guides", description: "Service model, equipment, installation, operations, and operator selection across office / hospital / campus / logistics placements.", href: "/micro-market-services" },
    ],
  }),
]);
process.exit(0);
