import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("after-hours-public-building-vending", [
  tldr({
    heading: "How does after-hours vending work inside public buildings when the front doors are locked?",
    paragraph:
      "After-hours vending in public buildings serves a narrow but real population — night-shift custodial and security staff, evening court calendars and council sessions, after-hours public-safety dispatch, weekend permit windows, and the maintenance and IT crews who actually keep the lights on. The operational envelope is fundamentally different from 9-to-5 vending: machines must run on building emergency or after-hours circuits that don't get shut down with the main panel, payment systems need to keep working when network closets get patched at 2 AM, restock has to happen in narrow pre-dawn windows that align with security shift changes, and the planogram has to feed people who haven't eaten since 6 PM and won't see another meal until 6 AM. The right after-hours program addresses (1) electrical — emergency or 24/7 dedicated circuit confirmed in the building electrical drawings, (2) network — cellular telemetry independent of the building IT network so machines stay online during maintenance windows, (3) access — after-hours service-tech credentialing aligned with security shift change windows (typically 5:30-6:30 AM and 5:30-6:30 PM), (4) planogram — meal-replacement weighted (real protein, hearty snacks, hot-beverage options where available) because the captive overnight audience can't leave for food, (5) accessibility — same ADA, ABA, Section 508 standards apply 24/7 (audio cue support matters more at night when the area is empty and a struggling user has nobody to ask). Modern operators bundle the after-hours operating envelope into the proposal; legacy operators commonly treat it as an afterthought and the program degrades within a year.",
    bullets: [
      { emphasis: "Emergency or 24/7 circuit is non-negotiable:", text: "Machines on the main panel go dark when the building goes into night setback. Confirm the circuit drawing during walk-through; relocate the machine before signing if needed." },
      { emphasis: "Captive overnight audience runs 2-3x typical office spend:", text: "Night-shift staff fill a 10-hour meal gap from the machine. Planogram must be meal-replacement weighted, not snack-weighted." },
      { emphasis: "Service window aligns with security shift change:", text: "Restock in the pre-dawn 5:30-6:30 AM hand-off window — security staff are alert, machine traffic is zero, and the tech is out before the building opens." },
    ],
  }),
  statStrip({
    heading: "After-hours public-building vending benchmarks",
    stats: [
      { number: "10 hr", label: "typical overnight meal gap", sub: "for night-shift custodial + security", accent: "blue" },
      { number: "$6-10", label: "per-person nightly spend", sub: "vs $2-4 typical office day spend", accent: "orange" },
      { number: "5:30-6:30 AM", label: "ideal restock window", sub: "aligned with security shift change", accent: "blue" },
      { number: "24/7", label: "circuit required", sub: "not main panel, not lighting circuit", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Day-hours vs after-hours public-building vending",
    sub: "Same machine, same building, fundamentally different operating envelope. Each row drives real revenue and service deltas.",
    headers: ["Operations axis", "Day-hours account", "After-hours account"],
    rows: [
      ["Audience can leave for food?", "Yes", { icon: "x", text: "Often no (locked building)" }],
      ["Per-person spend", "$2-4 daily", "$6-10 nightly"],
      ["Circuit dependency", "Main panel OK", "24/7 or emergency circuit required"],
      ["Network dependency", "Building Wi-Fi OK", "Cellular telemetry required"],
      ["Service window", "Any business hour", "Shift-change hand-off (5:30-6:30 AM)"],
      ["Tech onboarding", "Standard credential", "After-hours badge + escort protocol"],
      ["Planogram weight", "Snack-heavy", "Meal-replacement heavy + hot beverage where possible"],
      ["Cash vs card share", "70% card", "90%+ card (less cash at night)"],
      ["Lighting around machine", "Building general lighting", { icon: "check", text: "Dedicated dim 24/7 fixture recommended" }],
      ["Accessibility audit cadence", "Annual minimum", { icon: "check", text: "Annual + audio cue verified for unattended use" }],
    ],
  }),
  specList({
    heading: "After-hours operating envelope at public buildings",
    items: [
      { label: "Electrical circuit type", value: "Machines on a 24/7 circuit or building emergency circuit that does not power down with the main panel during night setback. Confirm during pre-install walk-through with facilities electrician; review building electrical drawing. Many public buildings have a designated after-hours panel for service equipment — request placement there." },
      { label: "Network telemetry independence", value: "Cellular telemetry (LTE-M or 5G) preferred over building Wi-Fi or wired Ethernet. Building IT often patches the network at 2-4 AM, taking Wi-Fi-dependent machines offline overnight. Cellular runs through carrier-managed connectivity that does not depend on local IT. Modern operators provide cellular by default at federal and state accounts." },
      { label: "After-hours service-tech credential scope", value: "Service-tech badge with after-hours validity (some federal credentials are day-only by default — request 24/7 endorsement during issuance). Some facilities require armed escort for night service; budget for the escort time. Coordinate with facility security at onboarding; document approved restock windows in the operator service contract." },
      { label: "Restock window scheduling", value: "Ideal window: 5:30-6:30 AM during security shift change — overnight security team is still on duty, day team is arriving, building is still locked to the public, machine traffic is zero. Alternative windows: 10-11 PM (evening team handover) or post-event windows after council sessions or court calendars. Avoid 1-4 AM (lowest security staffing)." },
      { label: "Lighting around the machine", value: "Dedicated low-level 24/7 lighting at the vending location supports safe use by night-shift staff and accessibility compliance for low-vision users. 10-15 foot-candles minimum at the user position. LED dimmed-down fixtures cost minimal energy and dramatically improve user experience at 2 AM. Coordinate with facilities lighting." },
      { label: "Camera coverage at the vending location", value: "Most public buildings surveil vending areas 24/7. Recorded footage is public-records-eligible in some jurisdictions. Verify camera position covers the machine face and approach but not the user's payment card or keypad input. Operators should not display proprietary pricing or commission rates on signage captured by camera unless OK with that being public." },
      { label: "Cash-handling and bill-validator policy", value: "Many after-hours programs go cashless to eliminate the night-shift theft target. If cash is retained, coin and bill collection happens during the same shift-change service window with armored-car pickup or operator-employee-only handling. Some facilities require cash collected at after-hours machines to be logged with security at pickup." },
      { label: "Emergency lockdown and shelter protocol", value: "Service tech caught on-site during an after-hours lockdown follows building security direction — typically shelter in place at the vending area. Operator service contract should specify operator liability and the building's responsibility for tech safety during lockdowns. Brief every after-hours tech on the protocol at onboarding." },
      { label: "Accessibility for unattended after-hours use", value: "ADA, ABA, and Section 508 apply 24/7 — but audio cue support, Braille labeling, and 4.5:1 contrast signage matter more after-hours because a struggling user has no facility staff to ask. Verify audio cue functions at the vending location; verify approach lighting supports low-vision use; verify reach controls work for the wheelchair user who arrives at 3 AM." },
      { label: "Telemetry alerting and overnight response SLA", value: "Modern operators support overnight stockout and machine-down alerting with documented response SLAs. Critical-location SLA is typically 24 hours for after-hours machines, with some federal accounts negotiating 12-hour response for jury staging or dispatch corridors. Verify operator's overnight on-call rota at RFP; legacy operators commonly have no overnight response." },
    ],
  }),
  timeline({
    heading: "A realistic after-hours service visit at a federal regional office",
    sub: "Single tech servicing two machines on a dedicated after-hours route. Notice the role of the shift-change window.",
    howToName: "After-hours public-building vending service visit",
    totalTime: "PT2H",
    steps: [
      { label: "4:45 AM", title: "Warehouse load + route prep", description: "Tech loads van for the dedicated overnight route. Per-machine totes pre-organized the prior afternoon. Pre-arrival call to building security desk to confirm dock access. 30 min." },
      { label: "5:15-5:30 AM", title: "Travel to building", description: "Drive to federal regional office. Park at designated contractor dock. Wait outside until 5:30 AM shift-change window opens. 15 min." },
      { label: "5:30-5:45 AM", title: "Loading-dock screening at shift change", description: "Overnight security desk processes the tech in. Vehicle and cargo screening (5 min), tech screening (3 min), badge verification (2 min). Security team logs the after-hours visit. 15 min." },
      { label: "5:45-6:15 AM", title: "Restock at two machines on two floors", description: "Escort to first machine (3 min), restock (10 min), travel to second floor (3 min), restock (10 min), escort back to dock (4 min). 30 min total." },
      { label: "6:15-6:25 AM", title: "Debrief at security desk + close-out", description: "Brief the morning security team on any anomalies (machine error codes, low SKUs flagged, refunds processed). Sign out at the desk. 10 min." },
      { label: "6:25-6:45 AM", title: "Travel to second after-hours account", description: "Cross-town travel to second after-hours account on the same overnight route. 20 min — completes the dedicated overnight route before 8 AM." },
    ],
  }),
  tipCards({
    heading: "Five after-hours operator mistakes",
    sub: "Each shows up routinely. All preventable with pre-contract diligence and the right operating disciplines.",
    items: [
      { title: "Putting the machine on the main panel circuit", body: "Building night setback shuts down the machine every weekday at 6 PM and weekends entirely. Tech arrives Monday morning to spoiled refrigerated SKUs and a refund queue. Confirm circuit type at pre-install walk-through; relocate or rewire before install if needed." },
      { title: "Relying on building Wi-Fi for telemetry", body: "Building IT patches at 2-4 AM, taking the machine offline. Overnight stockouts go undetected. Cellular telemetry costs $10-15/month per machine and eliminates the failure mode. Modern operators provide by default; request explicitly if the proposal doesn't." },
      { title: "Loading the day-shift snack planogram", body: "Night-shift staff fill a 10-hour meal gap. Chips and candy under-perform; protein bars, hearty snacks, hot-beverage-compatible items (coffee, hot chocolate) over-perform. 30-50% planogram shift produces 25-40% volume lift on after-hours machines." },
      { title: "Scheduling restock for the convenience of the day route", body: "Restocking at 10 AM on the day route puts the tech through full daytime screening for an after-hours machine. Wastes 30-60 minutes per visit. Dedicate an overnight route or a pre-dawn shift-change run for after-hours machines; the time saved compounds across the contract term." },
      { title: "Ignoring the after-hours accessibility scope", body: "Audio cue, Braille, and 4.5:1 contrast signage matter more at 3 AM than at 10 AM because the struggling user has nobody to ask. Verify accessibility at the vending location with the audio cue switched on; verify approach lighting. Annual audit minimum, documented in the operator service file." },
    ],
  }),
  decisionTree({
    heading: "Does this public building actually need after-hours vending?",
    question: "Is there a measurable overnight or after-hours occupied population — night-shift custodial, security, dispatch, evening court or council, or weekend permit-window staff?",
    yesBranch: {
      title: "Yes — deploy after-hours scope.",
      description: "Build the after-hours operating envelope into the program: 24/7 or emergency circuit, cellular telemetry, dedicated overnight route or shift-change service window, meal-replacement-weighted planogram, after-hours accessibility verification, and overnight response SLA. Track per-machine after-hours velocity quarterly; refine planogram and restock cadence based on overnight vend data.",
      finalTone: "go",
      finalLabel: "DEPLOY AFTER-HOURS SCOPE",
    },
    noBranch: {
      title: "No — standard day-hours scope is sufficient.",
      description: "If the building goes empty after 6 PM and stays empty until 7 AM, after-hours scope adds cost without benefit. Standard day-hours operating envelope works. Revisit annually — if the occupied population shifts (new dispatch tenant, expanded evening court calendar, weekend permit office), upgrade to after-hours scope.",
      finalTone: "stop",
      finalLabel: "STANDARD DAY-HOURS SCOPE",
    },
  }),
  caseStudy({
    tag: "Real numbers · State emergency management building",
    title: "$71,200 in annual after-hours vending revenue from 2 machines",
    context: "A state emergency management building with 24/7 dispatch + overnight custodial + emergency duty officers. Two combo machines on a dedicated 24/7 circuit with cellular telemetry, meal-replacement-weighted planogram, twice-weekly pre-dawn shift-change restock. State commission at 8% of gross.",
    meta: [
      { label: "Overnight population", value: "18-22 staff continuous-duty" },
      { label: "Machines", value: "2 combo, 24/7 circuit" },
      { label: "Restock", value: "2x weekly, 5:30-6:30 AM window" },
      { label: "Commission", value: "8% gross to state" },
    ],
    results: [
      { number: "$71,200", label: "annual gross sales" },
      { number: "$5,696", label: "annual commission to state" },
      { number: "94%", label: "card payment share" },
    ],
  }),
  inlineCta({
    text: "Want the after-hours public-building vending pack (circuit checklist + cellular telemetry spec + shift-change service protocol)?",
    buttonLabel: "Get the after-hours pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help public-building facility managers design after-hours vending programs — 24/7 or emergency circuit specification, cellular telemetry independence from building IT, after-hours service-tech credentialing aligned with security shift change, meal-replacement-weighted planogram for the overnight captive audience, accessibility verification for unattended use, overnight stockout and machine-down response SLA, and cash-handling protocols at after-hours machines. The framework reflects operator-side data across federal regional office, state emergency management, county dispatch, and municipal public-safety after-hours deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why is our after-hours machine dark on Monday mornings?", answer: "Almost always the circuit. Public buildings shut down main-panel circuits during night setback (Friday 6 PM through Monday 6 AM at many facilities). Refrigerated SKUs spoil over the weekend and the machine has to be re-cooled, re-stocked, and refunds processed. Have facilities confirm the machine is on a 24/7 or emergency circuit, not the main panel.", audience: "Facility Managers" },
      { question: "Should we just put a vending machine in the night-shift breakroom?", answer: "Yes — that's the right placement pattern for after-hours service. Co-locating with the existing night-shift breakroom puts the machine where staff already are, reduces lighting and security camera infrastructure cost, and improves user satisfaction. Verify the breakroom is on a 24/7 circuit before machine selection.", audience: "Facility Managers" },
      { question: "How does telemetry work when the building network is down for maintenance?", answer: "Modern operators use cellular telemetry (LTE-M or 5G) that runs through carrier-managed connectivity independent of the building IT network. Costs $10-15/month per machine. Eliminates the failure mode where building IT patching takes the machine offline overnight. Verify cellular telemetry at RFP; reject Wi-Fi-only operators at after-hours scope.", audience: "Operators" },
      { question: "What's the right service-tech credential for after-hours work?", answer: "Building-issued contractor badge with after-hours endorsement. Some federal PIV credentials are day-only by default — request 24/7 endorsement during issuance. Some facilities require armed escort for night service; budget the escort time. Coordinate the after-hours scope with facility security at operator onboarding, not at first visit.", audience: "Operators" },
      { question: "Is cash worth keeping at after-hours machines?", answer: "Usually not at modern after-hours deployments. Card share at after-hours machines runs 90%+ (vs 70% at day-hours machines) because the night-shift population skews younger and more digital-native. Going cashless eliminates the night-shift theft target and simplifies the shift-change service window. Keep a cash-to-card kiosk in the building lobby for the occasional cash-only user.", audience: "Facility Managers" },
      { question: "What planogram works for night-shift staff?", answer: "Meal-replacement weighted, not snack weighted. Real protein (jerky, protein bars, nuts), hearty snacks (peanut butter crackers, hard-boiled eggs where refrigeration supports), hot-beverage options (instant coffee packets, hot chocolate). 30-50% planogram shift from a day-shift mix produces 25-40% volume lift. Refresh quarterly based on overnight vend data.", audience: "Operators" },
      { question: "What's the right overnight response SLA?", answer: "24 hours for after-hours machines at typical accounts; 12 hours for critical-location after-hours machines (dispatch corridors, jury staging, emergency operations centers). Verify operator's overnight on-call rota at RFP. Legacy operators commonly have no overnight response; reject at after-hours scope.", audience: "Facility Managers" },
      { question: "How do we accommodate after-hours accessibility?", answer: "Same ADA, ABA, Section 508 standards apply 24/7 — but audio cue, Braille, 4.5:1 contrast signage, and approach lighting matter more at 3 AM because the struggling user has no facility staff to ask. Verify all four at the vending location with the lights at overnight settings; document in the operator service file. Annual minimum audit cadence.", audience: "Accessibility" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "GSA — Facilities Standards for the Public Buildings Service (P100)", url: "https://www.gsa.gov/real-estate/design-and-construction/engineering-and-architecture/facilities-standards-p100", note: "Federal facility electrical, lighting, and after-hours operating requirements" },
      { label: "NFPA 70 — National Electrical Code", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Emergency and 24/7 circuit classifications applicable to public-building vending" },
      { label: "ADA Standards 2010 — public accommodation requirements", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Accessibility requirements applicable 24/7 at public-building vending" },
      { label: "Federal Acquisition Regulation (FAR) Part 52 — contractor personnel security clauses", url: "https://www.acquisition.gov/far/part-52", note: "After-hours contractor credentialing and access requirements" },
      { label: "NIOSH — Health and safety guidance for shift workers", url: "https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod3/05.html", note: "Reference for overnight-shift nutrition and meal-pattern guidance" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Public-building vending logistics", description: "Service-tech access, credentialing, route density, and the operational patterns that work across courts, federal buildings, and city halls.", href: "/vending-for-public-buildings/public-building-vending-logistics" },
      { eyebrow: "Operations", title: "Vending at remote government offices", description: "Telemetry, restock cadence, and the operating envelope that works at low-density government sites.", href: "/vending-for-public-buildings/vending-remote-government-offices" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Operations, contracts, accessibility, security, and the operator-side patterns that work at every government account.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
