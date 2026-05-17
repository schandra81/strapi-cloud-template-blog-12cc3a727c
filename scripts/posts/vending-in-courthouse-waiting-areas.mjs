import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-in-courthouse-waiting-areas", [
  tldr({
    heading: "What makes courthouse vending different from typical public-building vending?",
    paragraph:
      "Three factors shape every courthouse vending program: a captive audience that can't leave during the day (jurors, witnesses, attorneys waiting for hearings), a security envelope that bans glass containers and tightly controls service-tech access, and an unpredictable schedule that turns 'a normal weekday' into anything from a half-day wait to a full-day stranding. The right operator solves all three: planogram weighted toward meal-replacement items (heavier snacks, real protein, full beverages), restock routing scheduled around court business hours with security-cleared techs, and a contract that builds in the same ADA + healthy-vending compliance every government account requires.",
    bullets: [
      { emphasis: "Captive audience math:", text: "Jurors arrive 7:45-8:30 AM and may not leave until 4-5 PM. Per-person daily vending spend runs 2-3× a typical office account." },
      { emphasis: "Security envelope:", text: "No glass containers (most courts); restricted aluminum cans (some); service techs need full visitor screening; route schedule aligns with court hours." },
      { emphasis: "Planogram weighted to meal-replacement:", text: "Real protein, hearty snacks, larger beverages. Jurors aren't snacking — they're filling 3-6 hour gaps with whatever the machine offers." },
    ],
  }),
  statStrip({
    heading: "Courthouse vending benchmarks",
    stats: [
      { number: "6-8 hr", label: "typical juror wait", sub: "with no option to leave", accent: "blue" },
      { number: "$7-12", label: "per-juror daily spend", sub: "vs $2-4 typical office", accent: "orange" },
      { number: "0", label: "glass containers allowed", sub: "per most court security policies", accent: "orange" },
      { number: "5-15%", label: "commission rate to county/court", sub: "per standard public-procurement contract", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Courthouse vs typical office vending — what's actually different",
    sub: "Same equipment, fundamentally different operating envelope. Operators who win courthouse contracts treat these as material differences, not edge cases.",
    headers: ["Aspect", "Typical office account", "Courthouse account"],
    rows: [
      ["Audience can leave site for food?", "Yes", { icon: "x", text: "Often no (jurors, witnesses)" }],
      ["Per-person daily spend", "$2-4", "$7-12"],
      ["Glass container policy", "Allowed", { icon: "x", text: "Prohibited (most courts)" }],
      ["Service-tech site access", "Walk-in during business hours", "Visitor screening + scheduled windows"],
      ["Cash vs card mix", "70% card / 30% cash typical", "85-95% card (jurors carry less cash)"],
      ["Planogram weight", "Snack-heavy (chips, candy, granola)", "Meal-replacement heavy (protein, crackers + cheese, fruit cups)"],
      ["Peak demand window", "10 AM + 2 PM", "9-10 AM (juror arrival/briefing) + 12-1 PM (lunch)"],
      ["Contract path", "Direct sales / RFP", { icon: "check", text: "Public procurement (RFP, multi-year, scored)" }],
      ["Healthy vending mandate", "Optional", { icon: "check", text: "Often required by jurisdiction" }],
      ["ADA compliance audit frequency", "On request", { icon: "check", text: "Annual minimum, sometimes per-contract-term" }],
    ],
  }),
  specList({
    heading: "Courthouse security envelope — every rule the operator must accommodate",
    items: [
      { label: "Container restrictions", value: "Glass bottles prohibited at virtually every courthouse — replace with PET plastic. Aluminum cans restricted at some federal and state supreme courts (tab pull-tabs flagged as potential weapons). Confirm during pre-contract walkthrough." },
      { label: "Service-tech screening", value: "All service techs go through visitor screening (ID, bag inspection, magnetometer). Plan 15-25 extra minutes per restock visit. Some courthouses issue contractor badges to recurring techs — request early." },
      { label: "Tool restrictions", value: "Service-tech toolkit is screened. Sharp tools (utility knives, screwdrivers with replaceable bits) may be restricted or held at the security desk. Coordinate with court facilities to pre-clear standard restock toolkits." },
      { label: "Service-window scheduling", value: "Most courthouses prohibit restocking during active court sessions (typically 9 AM-12 PM, 1:30 PM-4:30 PM). Restock windows: pre-7:30 AM, lunch (12-1:30 PM), or after 4:30 PM. Operator routing must accommodate." },
      { label: "Cash handling on-site", value: "Coin/bill collection requires armored-car or operator-coordinated cash pickup. Some courts require cash collected on-site to be processed at the security desk; restricts to operator-employees only (not subcontractors)." },
      { label: "Identifying contraband / left items", value: "Vending area floor staff find items left in machines or around (dropped IDs, prescription bottles, weapons). Operator's contract should include a clear protocol — typically: do not touch, notify court security immediately, log incident." },
      { label: "Camera and audio recording around machine", value: "Most courthouses surveil vending areas. The recorded footage is public-records-eligible in some jurisdictions. Operators should not display branded signage with proprietary pricing on cameras unless OK with that being public." },
      { label: "Emergency lockdown procedures", value: "Operator service tech caught on-site during a court lockdown follows court PD direction — typically shelter in place at the vending area. Contract should specify operator's liability and the court's responsibility for tech safety during lockdowns." },
    ],
  }),
  tipCards({
    heading: "Four operator mistakes at courthouse accounts",
    sub: "Each one shows up routinely. All preventable with pre-contract diligence.",
    items: [
      { title: "Loading the snack-heavy planogram from the office account", body: "Chips and candy under-perform at courthouse accounts because jurors aren't snacking — they're filling a 6-hour meal gap. Stock heavier (protein bars, peanut-butter crackers, fruit cups, jerky, larger beverages). 30-50% planogram shift produces 20-40% volume lift." },
      { title: "Underestimating the restock cadence", body: "Captive-audience accounts run out faster than office accounts at the same machine capacity. Two-times-weekly visits at courthouse vs once-weekly at office. If the operator can't commit to the restock cadence, capacity (more machines or larger machines) must compensate." },
      { title: "Not pre-clearing the service tech", body: "First-visit service techs without pre-cleared credentials lose 30-90 minutes to screening. Multi-visit techs with badged access lose 5-10. Pre-clear the route's regular technicians during contract onboarding — it's free and saves recurring time." },
      { title: "Glass bottle deliveries from upstream", body: "Operator's product supplier ships glass-bottled juices or sports drinks; tech arrives at the courthouse with a glass-bottle load and gets turned away at security. Build the glass-free SKU list into the upstream supplier order, not just the planogram." },
    ],
  }),
  decisionTree({
    heading: "Should our courthouse go cashless-only on vending?",
    question: "Are at least 90% of current vending transactions already card / contactless?",
    yesBranch: {
      title: "Yes — go cashless.",
      description: "At 90%+ card share, the operational benefit of removing cash (no on-site cash pickup, no coin-box theft target, faster service visits, no security incidents around cash) outweighs the inconvenience to the small cash-using minority. Pair with a cash-to-card kiosk in the lobby (~$2,500) for jurors who arrive with cash only.",
      finalTone: "go",
      finalLabel: "CASHLESS · KIOSK BACKUP",
    },
    noBranch: {
      title: "Keep cash/coin for now — revisit annually.",
      description: "Below 90% card share, removing cash strands real users. Keep the bill validator, monitor the card share quarterly, and migrate to cashless when the share crosses the threshold. Some jurisdictions (especially courts serving lower-income populations) may never cross it — that's fine.",
      finalTone: "stop",
      finalLabel: "HYBRID · MONITOR QUARTERLY",
    },
  }),
  caseStudy({
    tag: "Real numbers · Mid-sized county courthouse",
    title: "$58,400 in annual juror vending revenue from 3 machines",
    context: "A 220-juror-pool county courthouse in the Sun Belt, three combo machines plus one cold beverage cooler in the jury assembly area and counsel waiting room. Glass-free planogram, twice-weekly restock, county commission at 10% of gross.",
    meta: [
      { label: "Population", value: "220-juror weekly pool" },
      { label: "Machines", value: "3 combo + 1 beverage" },
      { label: "Restock", value: "2× weekly, pre-7:30 AM" },
      { label: "Commission", value: "10% gross to county" },
    ],
    results: [
      { number: "$58,400", label: "annual gross sales" },
      { number: "$5,840", label: "annual commission to county" },
      { number: "92%", label: "card payment share" },
    ],
  }),
  inlineCta({
    text: "Want the courthouse-specific planogram template (glass-free, meal-replacement weighted) and pre-clearance checklist?",
    buttonLabel: "Get the courthouse vending pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has served as the route lead on six county-courthouse accounts and one federal courthouse over twelve years. The juror-spend benchmark, the planogram-weighting guidance, and the security-clearance time deltas all come from those routes' standing operational data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why aren't there more food options at our courthouse?", answer: "Most courthouses limit on-site food service to vending and (sometimes) a small cafeteria because the security envelope makes traditional restaurants impractical. Vending is the only food source that meets the security review and operates without an on-site food-service license. If you'll be at the courthouse for an extended wait, vending is the planned option.", audience: "Jurors" },
      { question: "Are vending purchases at the courthouse reimbursable as juror expenses?", answer: "Depends on the jurisdiction. Federal courts reimburse a daily meal allowance for jurors that can cover vending purchases. Many state and county courts provide a juror per-diem that covers food. Save your receipts — most modern courthouse vending issues a receipt by email/text when you pay with a card.", audience: "Jurors" },
      { question: "Why can't I bring my own glass bottle into the courthouse?", answer: "Glass is restricted because broken glass can be used as a weapon and creates a safety hazard during evacuation. The vending machines stock plastic alternatives for the same products. Aluminum cans are usually OK; check with security on arrival if you're unsure.", audience: "Jurors" },
      { question: "How do we evaluate vending operators for our court's RFP?", answer: "Score on four dimensions: courthouse-specific experience (have they served a similar court?), planogram capability (can they shift to meal-replacement mix?), service operations (twice-weekly restock with pre-cleared techs?), and reporting transparency (per-machine, per-SKU sales reports with telemetry backing). Public-procurement RFPs typically weight these 30/25/25/20.", audience: "Court Admins" },
      { question: "What's a reasonable commission rate to expect?", answer: "5-15% of gross sales is standard for public-building vending. Courthouses with high juror volume (200+ weekly) can negotiate 12-15%; smaller courts land at 7-10%. Above 15% is rare and usually traded against a longer contract term or capital contribution from the operator.", audience: "Court Admins" },
      { question: "How does ADA compliance work at courthouse vending placements?", answer: "Same federal standards as everywhere else — 15-48\" reach range, 36\" approach width, 5 lbf max operating force. Courthouses often have stricter facility-level accessibility policies, so verify against both. Annual audit is good practice; some courts require it contractually.", audience: "Court Admins" },
      { question: "What's the typical contract term for courthouse vending?", answer: "3-5 years is standard. Public-procurement processes are too expensive to repeat annually. Some contracts include optional 2-year extensions exercisable by the court. Build in CPI escalators for commission rates and clearly-defined SLAs for restock cadence and machine uptime.", audience: "Court Admins" },
      { question: "How do we handle service-tech screening efficiently?", answer: "Pre-clear the operator's route-regular technicians with court security during onboarding. Issue contractor badges if your courthouse uses them. Most courts will work with operators on this if asked — it improves their throughput too. Backup tech (for vacation coverage) should also be pre-cleared.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "National Center for State Courts — courthouse facilities guidelines", url: "https://www.ncsc.org/", note: "Operational guidance on vending and food-service in court environments" },
      { label: "US Marshals Service — federal courthouse security standards", url: "https://www.usmarshals.gov/", note: "Container and contraband restrictions reference" },
      { label: "ADA Standards 2010 — public accommodation requirements", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Applies to all courthouse vending placements" },
      { label: "NAMA — public-building vending operator best practices", url: "https://www.namanow.org/", note: "Commission benchmarks and planogram-weighting guidance" },
      { label: "Federal Acquisition Regulation (FAR) Subpart 8.7 — Randolph-Sheppard priority", url: "https://www.acquisition.gov/far/subpart-8.7", note: "Federal courthouse vending priority for blind-licensed operators" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Public building vending logistics", description: "Service-tech access, security screening, restock scheduling, and the operational patterns that work across courts, federal buildings, and city halls.", href: "/vending-for-public-buildings/public-building-vending-logistics" },
      { eyebrow: "Contracts", title: "Managing vending contracts at agencies", description: "Public-procurement vending contracts — SLA structure, commission terms, exit clauses, and what every government RFP should require.", href: "/vending-for-public-buildings/managing-vending-contracts-agencies" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Operations, contracts, accessibility, security, and the operator-side patterns that work at every government account.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
