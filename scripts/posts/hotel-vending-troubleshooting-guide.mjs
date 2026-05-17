import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, timeline, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("hotel-vending-troubleshooting-guide", [
  tldr({
    heading: "How does troubleshooting work on hotel vending machines — and what stays in front-desk hands vs operator hands?",
    paragraph:
      "Hotel vending troubleshooting is a tiered escalation pattern: front-desk staff handle four resolvable issues (guest refund + receipt, basic jam clearing on snack machines with operator-trained tier-1 procedure, cellular payment-reader reboot, restocking of high-velocity SKUs from on-site backup), while the operator handles the rest — compressor + refrigeration failures, bill validator + coin mech faults, spiral motor + vend mechanism repair, telemetry connectivity outages, planogram changes, and POS / PMS integration faults. The escalation framework is straightforward: tier 1 (guest-facing) front-desk resolves in under 5 minutes (refund + simple reboot + basic restock); tier 2 (operator dispatch within 4 hours) for non-vending faults, payment reader failures, refrigeration warnings; tier 3 (operator dispatch within 24 hours) for full equipment swap-outs. SLA contract benchmark at modern hotel-experienced operators: 96-98% uptime tracked by cellular telemetry, 4-hour mean response time for tier 2, 24-hour mean response time for tier 3. Common front-desk issues + their resolution: (1) guest paid but didn't receive product — refund via PMS folio credit or operator app refund; (2) machine displays 'sold out' but visibly stocked — operator app force-restock command or wait for next route-tech visit; (3) cellular payment reader unresponsive — power cycle via service-key reboot (1-2 minute fix); (4) snack machine spiral jam — front-desk staff with operator-trained tier-1 procedure clears (most hotels DO NOT train front desk on this; defer to operator). Document a guest-recovery protocol — written front-desk script for guest refunds + service-recovery gestures (room credit, F&B voucher) — at concept. Modern hotel-experienced operators provide ServiceNow / Zendesk dispatch portal at front-desk + cellular telemetry dashboard at GM laptop. Legacy operators don't.",
    bullets: [
      { emphasis: "Tier 1 front-desk + tier 2/3 operator dispatch framework:",
        text: "Front-desk resolves refunds + simple reboots + basic restock. Operator handles compressor / payment reader / vend mechanism / telemetry / POS-PMS integration. SLA 96-98% uptime + 4-hour tier 2 + 24-hour tier 3 response." },
      { emphasis: "Document a guest-recovery protocol at concept:",
        text: "Written front-desk script for guest refunds + service-recovery gestures (room credit, F&B voucher). Avoids ad-hoc resolution + reduces guest complaint escalation." },
      { emphasis: "Modern operators provide dispatch portal + telemetry dashboard:",
        text: "ServiceNow / Zendesk dispatch portal at front-desk + cellular telemetry dashboard at GM laptop. Tier-1 hotel operators support natively; legacy operators don't — vet at RFP.", },
    ],
  }),
  statStrip({
    heading: "Hotel vending troubleshooting SLA benchmarks",
    stats: [
      { number: "96-98%", label: "uptime SLA", sub: "tracked by cellular telemetry", accent: "blue" },
      { number: "4 hr", label: "tier 2 response", sub: "operator dispatch SLA", accent: "blue" },
      { number: "24 hr", label: "tier 3 response", sub: "full equipment swap-out SLA", accent: "orange" },
      { number: "<5 min", label: "front-desk tier 1", sub: "refund + reboot + basic restock", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Common hotel vending issues and resolution paths",
    sub: "Issue type drives the resolution path — front-desk tier 1, operator tier 2 dispatch, or operator tier 3 swap-out. Specify tier mapping in operator contract at concept.",
    headers: ["Issue", "Resolution tier", "Typical fix time", "Guest-recovery action"],
    rows: [
      ["Guest paid but didn't receive product", "Tier 1 front-desk", "<5 min refund", "Refund via PMS folio + service-recovery gesture"],
      ["Machine displays 'sold out' but stocked", "Tier 1 + operator app", "5-10 min force-restock", "Apologize + offer alternative SKU"],
      ["Cellular payment reader unresponsive", "Tier 1 reboot", "1-2 min service-key reboot", "Apologize + use room charge if PMS integrated"],
      ["Compressor / refrigeration warning", "Tier 2 operator dispatch", "Within 4 hours", "Pull machine from service + signage"],
      ["Bill validator / coin mech fault", "Tier 2 operator dispatch", "Within 4 hours", "Cash payment unavailable; card-only signage"],
      ["Spiral motor / vend mechanism failure", "Tier 2 operator dispatch", "Within 4 hours", "Pull affected SKU + manual stock"],
      ["Telemetry connectivity outage", "Tier 2 operator dispatch", "Within 4 hours", "Operator switches to local fallback"],
      ["Full equipment failure / replacement required", "Tier 3 operator swap-out", "Within 24 hours", "Backup machine + signage"],
    ],
  }),
  specList({
    heading: "Hotel vending troubleshooting protocol specifications",
    items: [
      { label: "Front-desk training scope (tier 1)", value: "Operator-provided 30-60 minute training at hotel onboarding + 15-30 minute quarterly refresher. Topics: guest refund procedure + operator app refund command, force-restock command on operator app, cellular payment reader reboot (service-key location + reboot procedure), basic snack-machine spiral jam clearing (most hotels DO NOT train front desk on this; defer to operator). Document procedure in front-desk SOP + post laminated quick-reference at vending placement." },
      { label: "Operator dispatch portal", value: "ServiceNow / Zendesk dispatch portal at front-desk. Front-desk creates ticket with issue type + photo + guest folio reference. Operator receives ticket + dispatches route tech within SLA. Ticket tracked through resolution + customer-facing closure. Tier-1 hotel operators provide natively; legacy operators rely on phone call + email." },
      { label: "Cellular telemetry dashboard", value: "Cellular telemetry dashboard at GM laptop + DOR / housekeeping shift summary. Shows uptime, stock levels, revenue, last service date, open tickets. GM tracks operator SLA compliance + reviews monthly. Tier-1 hotel operators provide dashboard (Cantaloupe Seed, Nayax MoMa, USA Technologies Streamware). Legacy operators don't." },
      { label: "Guest refund procedure", value: "Standard procedure — front desk processes refund via PMS folio credit (if PMS integrated with vending operator) or operator app refund command (if not PMS-integrated). Front desk records guest folio + machine ID + amount + issue type. Operator reconciles weekly. Guest receives immediate refund + service-recovery gesture (room credit, F&B voucher, complimentary breakfast at extended-stay)." },
      { label: "Compressor + refrigeration troubleshooting", value: "Front desk DOES NOT troubleshoot compressor / refrigeration faults. Telemetry alerts operator automatically when refrigeration warning triggers (typically temperature above 41°F for 30+ minutes per FDA cold-chain compliance). Operator dispatches tier 2 response within 4 hours. Machine pulled from service + signage applied. Stocked product may need to be discarded if temperature breach exceeds 4-hour rule." },
      { label: "Bill validator + coin mech troubleshooting", value: "Front desk DOES NOT troubleshoot bill validator / coin mech. Operator dispatches tier 2 response within 4 hours. Card-only signage applied during downtime. PMS room-charge integration provides fallback at hotels with integrated payment. Modern hotel vending operators specify card-only equipment increasingly — eliminates cash-handling complexity." },
      { label: "Telemetry connectivity outage", value: "Cellular telemetry outage causes operator dashboard blind spot but doesn't stop vending. Operator may switch to local fallback (DEX file pickup at route-tech visit) during extended outage. Tier 2 dispatch within 4 hours to diagnose cellular modem / SIM / cellular signal issue. Modern hotel operators run dual-carrier failover (AT&T + Verizon) at critical placements." },
      { label: "POS / PMS integration faults", value: "Room-charge integration with hotel PMS (Opera, Maestro, OnQ, FOSSE) requires API connection + folio mapping. Faults — folio mismatch, charge timing, refund processing — handled by operator + hotel IT joint dispatch. Tier 2 response within 4 hours; resolution may require operator + hotel IT sprint 1-3 days. Document integration in operator contract at concept." },
      { label: "Service-recovery framework", value: "Documented front-desk script for guest refunds + service-recovery gestures. Standard gestures — room credit ($5-25), F&B voucher (breakfast, drink, snack from F&B outlet), complimentary breakfast at extended-stay properties. GM authorization for gestures above $25. Builds guest-recovery confidence + reduces complaint escalation to TripAdvisor / Google reviews + chain corporate." },
    ],
  }),
  timeline({
    heading: "Front-desk guest-recovery procedure when vending fails",
    sub: "Six-step procedure documented in front-desk SOP. Tier-1 hotel operators provide written script + laminated quick-reference at vending placement.",
    howToName: "Resolve guest vending complaint",
    totalTime: "Under 5 minutes for tier 1 issues; tier 2/3 escalation triggered on documented faults.",
    steps: [
      { label: "Step 1", title: "Acknowledge + apologize", description: "Acknowledge guest issue + apologize for inconvenience. Set tone for service recovery. Document guest name + room number + machine ID + issue type in dispatch portal." },
      { label: "Step 2", title: "Identify issue type", description: "Identify issue — paid-but-no-product, machine error, payment reader failure, refrigeration warning, jam. Reference quick-reference chart at front desk. Tier 1 issues resolve at front desk; tier 2/3 escalate to operator." },
      { label: "Step 3", title: "Execute tier 1 resolution", description: "Refund via PMS folio credit or operator app refund command. Force-restock via operator app if SKU shows sold-out but visibly stocked. Service-key reboot of cellular payment reader if unresponsive. Document resolution in dispatch portal." },
      { label: "Step 4", title: "Escalate tier 2/3 if not resolved", description: "Create operator dispatch ticket with issue type + photo + guest folio reference. Apply 'out of service' signage if equipment failure. Communicate ETA to guest based on operator SLA (4-hour tier 2 / 24-hour tier 3)." },
      { label: "Step 5", title: "Service-recovery gesture", description: "Offer service-recovery gesture — room credit ($5-25), F&B voucher (breakfast, drink, snack from F&B outlet), complimentary breakfast at extended-stay. GM authorization for gestures above $25. Builds guest-recovery confidence + reduces complaint escalation." },
      { label: "Step 6", title: "Follow-up + close", description: "Follow up with guest at check-out + confirm resolution. Close ticket in dispatch portal. Operator reconciles weekly. GM reviews monthly via telemetry dashboard. Documented closure builds operator SLA accountability." },
    ],
  }),
  tipCards({
    heading: "Five hotel vending troubleshooting patterns",
    sub: "Each appears at modern hotel-experienced operator programs. Specify in operator RFP + GM onboarding at concept.",
    items: [
      { title: "Document tier 1 / 2 / 3 mapping in operator contract", body: "Write tier mapping into operator contract at concept — tier 1 front-desk resolution scope, tier 2 operator dispatch within 4 hours, tier 3 operator swap-out within 24 hours. SLA 96-98% uptime tracked by cellular telemetry. Without documented tier mapping, ad-hoc resolution produces guest-complaint escalation + chain corporate intervention." },
      { title: "Train front-desk on tier 1 resolution at hotel onboarding", body: "Operator-provided 30-60 minute training at hotel onboarding + 15-30 minute quarterly refresher. Topics: guest refund procedure, force-restock command, cellular payment reader reboot. Document in front-desk SOP + post laminated quick-reference at vending placement. Most hotels DO NOT train front desk on snack-machine spiral jam clearing; defer to operator." },
      { title: "Document a service-recovery framework with authorized gestures", body: "Standard gestures — room credit ($5-25), F&B voucher (breakfast, drink, snack), complimentary breakfast at extended-stay. GM authorization for gestures above $25. Builds guest-recovery confidence + reduces complaint escalation to TripAdvisor / Google reviews + chain corporate. Without documented framework, ad-hoc resolution produces inconsistent guest experience." },
      { title: "Run cellular telemetry dashboard at GM laptop", body: "Cellular telemetry dashboard shows uptime, stock levels, revenue, last service date, open tickets. GM tracks operator SLA compliance + reviews monthly. Tier-1 hotel operators provide dashboard (Cantaloupe Seed, Nayax MoMa, USA Technologies Streamware). Legacy operators don't — vet at RFP. Without dashboard, GM can't enforce SLA accountability." },
      { title: "Integrate room-charge via PMS for fallback payment", body: "Room-charge integration with hotel PMS (Opera, Maestro, OnQ, FOSSE) provides fallback at hotels with integrated payment. API connection + folio mapping. Provides resilience when cellular payment reader fails. Modern hotel-experienced operators specify integrated payment increasingly — eliminates cash-handling complexity + builds guest convenience." },
    ],
  }),
  decisionTree({
    heading: "Should the front desk attempt to clear a snack machine spiral jam?",
    question: "Has the operator trained your front-desk staff on tier-1 spiral jam clearing procedure with documented SOP + access key + safety briefing?",
    yesBranch: {
      title: "Front-desk may clear the jam.",
      description: "Operator-trained front-desk staff with documented SOP + access key + safety briefing may clear simple spiral jams. Procedure: open service door with operator key, identify jammed spiral, manually rotate spiral to release product, close service door, test machine. Most hotels DO NOT train front desk on this — defer to operator tier 2 dispatch. If trained, document in front-desk SOP + post quick-reference at vending placement.",
      finalTone: "go",
      finalLabel: "TIER 1 JAM CLEARING (if trained)",
    },
    noBranch: {
      title: "Defer to operator tier 2 dispatch.",
      description: "Most hotels DO NOT train front desk on spiral jam clearing. Defer to operator tier 2 dispatch within 4 hours SLA. Create dispatch ticket with photo + machine ID + jam location. Apply 'out of service' signage if multiple SKU jams. Refund guest + offer service-recovery gesture. Operator route tech clears jam + tests machine + closes ticket.",
      finalTone: "stop",
      finalLabel: "TIER 2 OPERATOR DISPATCH",
    },
  }),
  keyTakeaways({
    heading: "Hotel vending troubleshooting — what to specify and what to expect",
    takeaways: [
      { text: "Three-tier escalation framework — tier 1 front-desk resolution under 5 min, tier 2 operator dispatch within 4 hours, tier 3 swap-out within 24 hours." },
      { text: "SLA contract benchmark 96-98% uptime tracked by cellular telemetry; specify in operator contract at concept." },
      { text: "Front-desk tier 1 scope — guest refund, force-restock, payment reader reboot, basic restocking. Most hotels defer spiral jam to operator." },
      { text: "Operator dispatch portal (ServiceNow / Zendesk) at front-desk + cellular telemetry dashboard at GM laptop — tier-1 hotel operators provide natively." },
      { text: "Document guest-recovery framework with authorized service-recovery gestures (room credit, F&B voucher, complimentary breakfast at extended-stay)." },
      { text: "Operator-provided 30-60 minute training at hotel onboarding + 15-30 minute quarterly refresher; document in front-desk SOP + laminated quick-reference." },
      { text: "PMS room-charge integration (Opera, Maestro, OnQ, FOSSE) provides fallback payment + builds guest convenience." },
      { text: "Vet operator at RFP — dispatch portal + telemetry dashboard + 4/24-hour SLA + training program; legacy operators don't provide." },
    ],
  }),
  inlineCta({
    text: "Want the hotel vending troubleshooting framework (tier mapping + guest-recovery script + operator SLA + training program)?",
    buttonLabel: "Get the troubleshooting framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise hotel clients on vending troubleshooting program design — three-tier escalation framework (front-desk tier 1, operator dispatch tier 2/3), front-desk training scope, operator dispatch portal (ServiceNow / Zendesk) + cellular telemetry dashboard (Cantaloupe Seed, Nayax MoMa, USA Technologies Streamware), guest-recovery framework, and PMS integration (Opera, Maestro, OnQ, FOSSE). The benchmarks reflect operator-side data and GM + front-office + chief engineer feedback patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does troubleshooting work on hotel vending machines?", answer: "Three-tier escalation framework — tier 1 front-desk resolution under 5 min (refund, force-restock, payment reader reboot, basic restock), tier 2 operator dispatch within 4 hours (compressor, bill validator, vend mechanism, telemetry, payment fault), tier 3 operator swap-out within 24 hours (full equipment replacement). SLA 96-98% uptime tracked by cellular telemetry.", audience: "Hotel Operations" },
      { question: "What can front desk resolve directly?", answer: "Four tier-1 issues — guest refund via PMS folio credit or operator app refund command, force-restock via operator app if SKU shows sold-out but stocked, cellular payment reader service-key reboot (1-2 min), basic restocking of high-velocity SKUs from on-site backup. Most hotels DO NOT train front desk on spiral jam clearing; defer to operator tier 2 dispatch.", audience: "Front Office" },
      { question: "What's the operator SLA we should specify?", answer: "Modern hotel-experienced operator SLA — 96-98% uptime tracked by cellular telemetry, 4-hour mean response time for tier 2 (refrigeration, payment, vend mechanism, telemetry), 24-hour mean response time for tier 3 (full equipment swap-out). Write into operator contract at concept. Legacy operators don't track uptime + don't provide guaranteed SLA.", audience: "Procurement" },
      { question: "How should we handle guest refunds?", answer: "Standard procedure — front desk processes refund via PMS folio credit (if PMS integrated with vending operator) or operator app refund command (if not PMS-integrated). Front desk records guest folio + machine ID + amount + issue type. Operator reconciles weekly. Guest receives immediate refund + service-recovery gesture (room credit, F&B voucher, complimentary breakfast at extended-stay).", audience: "Front Office" },
      { question: "What service-recovery gestures should we authorize?", answer: "Standard authorized gestures — room credit ($5-25), F&B voucher (breakfast, drink, snack from F&B outlet), complimentary breakfast at extended-stay. GM authorization required for gestures above $25. Documents in front-desk SOP. Builds guest-recovery confidence + reduces complaint escalation to TripAdvisor / Google reviews + chain corporate.", audience: "GM + Front Office" },
      { question: "What dispatch tools should the operator provide?", answer: "ServiceNow / Zendesk dispatch portal at front desk — creates ticket with issue type + photo + guest folio reference. Cellular telemetry dashboard at GM laptop — uptime, stock levels, revenue, last service date, open tickets. Tier-1 hotel operators provide natively (Cantaloupe Seed, Nayax MoMa, USA Technologies Streamware). Legacy operators rely on phone + email.", audience: "Hotel Operations" },
      { question: "Should front desk clear snack machine spiral jams?", answer: "Most hotels DO NOT train front desk on spiral jam clearing — defer to operator tier 2 dispatch within 4 hours SLA. If operator-trained front-desk staff with documented SOP + access key + safety briefing, simple jams may be cleared. Document in front-desk SOP + post quick-reference at vending placement. Otherwise, create dispatch ticket + apply 'out of service' signage.", audience: "Front Office" },
      { question: "What about PMS room-charge integration?", answer: "Room-charge integration with hotel PMS (Opera, Maestro, OnQ, FOSSE) requires API connection + folio mapping. Provides fallback payment when cellular reader fails + builds guest convenience. Faults (folio mismatch, charge timing, refund processing) handled by operator + hotel IT joint dispatch within 4 hours. Document integration in operator contract at concept.", audience: "Hotel IT + Operations" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AHLA — American Hotel & Lodging Association amenity standards", url: "https://www.ahla.com/", note: "Industry trade association covering hotel amenity programs and guest-experience benchmarks" },
      { label: "NAMA — vending operator SLA and dispatch standards", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator service levels and dispatch capability" },
      { label: "Cantaloupe + Nayax — cellular telemetry and dispatch platforms", url: "https://www.cantaloupe.com/", note: "Operator-side telemetry and dispatch platform reference for hotel vending programs" },
      { label: "Oracle Hospitality (Opera PMS) — room-charge integration", url: "https://www.oracle.com/hospitality/", note: "PMS platform reference for vending room-charge integration at hotel programs" },
      { label: "Hotel Management Magazine — guest-experience and service-recovery research", url: "https://www.hotelmanagement.net/", note: "Trade publication covering hotel guest-experience and service-recovery framework case studies" },
    ],
  }),
  relatedGuides({
    heading: "Related hotel vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Hotel vending POS integration", description: "PMS room-charge integration with Opera, Maestro, OnQ, FOSSE.", href: "/vending-for-hotels/hotel-vending-pos-integration" },
      { eyebrow: "Sister guide", title: "Hotel vending staff training", description: "Front-desk training scope, quarterly refresher, and SOP documentation.", href: "/vending-for-hotels/hotel-vending-staff-training" },
      { eyebrow: "Hub", title: "All hotel vending guides", description: "Equipment, placement, planogram, troubleshooting, payment, brand-finish, and operator capability at hotels.", href: "/vending-for-hotels" },
    ],
  }),
]);
process.exit(0);
