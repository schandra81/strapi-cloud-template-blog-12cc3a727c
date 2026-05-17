import { seedPost, tldr, statStrip, timeline, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("dealership-vending-staff-training", [
  tldr({
    heading: "What does dealership staff training look like for a modern vending program?",
    paragraph:
      "Dealership vending programs only deliver the CSI uplift, customer-hospitality narrative, and 0.4% theft rates documented at case studies when service-advisors, sales staff, BDC representatives, and porter / lot teams are oriented to the program at install + at quarterly refresh. The training scope is narrow but specific: (1) complimentary-tag SKU dispensing — service-advisor desk activation via service-ticket bar code or operator portal, dispense protocol when customer asks for an item, cost-recovery line item on service ticket; (2) customer-facing premium beverage merchandiser usage — what's in it, what's complimentary vs paid, how to point customers to it without being pushy; (3) coffee + specialty beverage station coordination — keep cups + lids + creamers stocked between operator visits, basic clean-up at spills; (4) refund + jam handling — when to issue a goodwill paper-receipt refund vs route to operator, how to use the operator portal or call-center; (5) branded wrap stewardship — note scratches / damage to coordinator for refresh; (6) telemetry alert response — service-advisor desk gets stockout / refrigeration alerts on a coordinator account, route to operator if not auto-routed; (7) allergen + dietary callout — point customers to allergen-restricted lane (15% of planogram), FDA top-9 labeling; (8) brand + CSI narrative — the program is part of customer hospitality, not background. 45-60 minute onboarding session at install + 20-minute quarterly refresh at planogram refresh cycle. Modern dealership operators provide training material + run on-site session; legacy operators don't. Coordinate with service manager + sales manager + GM. Document training in dealership operations binder so new hires get the same orientation.",
    bullets: [
      { emphasis: "Eight topics for 45-60 minute onboarding:",
        text: "Complimentary-tag dispensing, premium merchandiser usage, coffee station coordination, refund / jam handling, branded wrap stewardship, telemetry alert response, allergen callout, brand + CSI narrative. Each maps to a customer-facing or staff-facing moment." },
      { emphasis: "Service-advisor desk is the operational hub:",
        text: "Service-ticket bar code activates complimentary vend; stockout + refrigeration alerts route to a coordinator account; goodwill paper-receipt refund pad lives at desk. Pre-coordinate at install with service manager." },
      { emphasis: "Modern operators run the session; legacy operators don't:",
        text: "Verify training material + on-site session at proposal. Refresh every quarter at planogram refresh; document orientation in dealership operations binder for new hires." },
    ],
  }),
  statStrip({
    heading: "Dealership vending training benchmarks",
    stats: [
      { number: "45-60 min", label: "initial onboarding session", sub: "at install + new-staff orientation", accent: "blue" },
      { number: "20 min", label: "quarterly refresh", sub: "at planogram refresh cycle", accent: "blue" },
      { number: "8 topics", label: "covered in onboarding", sub: "complimentary-tag through CSI narrative", accent: "blue" },
      { number: "3 teams", label: "service-advisor + sales + BDC", sub: "in scope; porter / lot optional", accent: "blue" },
    ],
  }),
  timeline({
    heading: "Dealership vending training rollout",
    sub: "From install survey to quarterly refresh. Each step coordinates with service manager + sales manager + GM.",
    howToName: "Run dealership vending staff training",
    totalTime: "Initial 2 weeks + ongoing quarterly",
    steps: [
      { duration: "Week -2 to -1", title: "Pre-install coordination", description: "Operator account manager meets with service manager + sales manager + GM. Reviews program scope, complimentary-tag protocol, telemetry alert routing, branded wrap, allergen lane. Agrees on dealership-side coordinator (typically service manager or service-advisor lead). Schedules onboarding session in dealership manager-meeting cadence." },
      { duration: "Install week", title: "On-site training session", description: "45-60 minute session at dealership manager meeting or service-department huddle. Operator account manager runs through 8 topics (complimentary-tag, merchandiser, coffee, refund, wraps, telemetry, allergen, CSI). Live demo at customer-facing premium beverage merchandiser + service-advisor desk portal. Q&A. Training binder left at service-advisor desk + sales manager desk." },
      { duration: "Week 1 post-install", title: "Shadow + correction", description: "Operator account manager visits dealership in week 1 post-install. Shadows service-advisor desk on complimentary-tag dispense. Observes coffee station + waiting-area merchandiser interaction. Corrects mismatches with protocol. Updates training binder if dealership-specific patterns emerge." },
      { duration: "Month 1 — quarterly", title: "Quarterly refresh", description: "20-minute refresh at quarterly planogram refresh cycle. Covers planogram changes, new SKUs at allergen lane, telemetry dashboard updates, complimentary-tag protocol updates. Re-orients new-hire service-advisors + sales staff added since last refresh. Documented in operations binder." },
      { duration: "Annual", title: "Annual program review", description: "Joint review with GM + service manager + sales manager + operator account manager. Covers CSI score correlation, revenue + commission summary, theft + refund trends, training effectiveness. Adjusts program scope + training material if needed. Coordinates with dealership annual planning cycle." },
    ],
  }),
  specList({
    heading: "Dealership vending training topic specifications",
    items: [
      { label: "Complimentary-tag SKU dispensing protocol", value: "Service-advisor desk activation via service-ticket bar code or operator portal. Customer asks for item; advisor activates dispense; cost-recovery line item appears on service ticket (typically $1-3 absorbed under customer-amenity line). Coordinate dispense protocol at install. Modern operator portal supports per-ticket dispense logging; legacy operator may not." },
      { label: "Customer-facing premium beverage merchandiser usage", value: "What's stocked (premium juice, premium soda, energy drinks, premium iced coffee, water), what's complimentary vs paid, how to point customers without being pushy. Standard script: 'There's a beverage merchandiser in the waiting area — bottled water is complimentary, the rest is available for purchase or part of your service amenity if applicable.' Service-advisor + BDC team aligned at install." },
      { label: "Coffee + specialty beverage station coordination", value: "Single-cup or commercial brewer + specialty beverage (cappuccino, latte, hot chocolate). Service-advisor or porter / lot team keeps cups + lids + creamers + stirrers + sweeteners stocked between operator visits. Basic clean-up at spills + cup-disposal. Operator covers deep-clean + descaling at service visit. Coordinate stocking responsibility at install." },
      { label: "Refund + jam handling protocol", value: "Goodwill paper-receipt refund pad at service-advisor desk (operator provides). Up to $5 goodwill refund issued on-the-spot without operator involvement. Jams + machine failure: route to operator via call-center number printed on machine; service ticket auto-opened from telemetry on most modern operators. Document refund + jam in dealership operations log." },
      { label: "Branded wrap stewardship", value: "Service-advisor + porter / lot teams note scratches / damage to dealership coordinator. Coordinator routes to operator for wrap refresh (production + install at planogram refresh cycle ~2 years or earlier if damaged). Wraps additionally reduce anonymous-machine targeting; damaged wraps reduce CSI + customer-experience perception." },
      { label: "Telemetry alert response", value: "Service-advisor desk gets stockout / refrigeration alerts on a coordinator account (operator portal access). Stockout alerts route auto to operator service queue; service-advisor needs to know alerts exist + escalation path if not auto-resolved within 24-48 hours. Refrigeration alerts route same. Modern operator dashboard standard; legacy operator may not provide." },
      { label: "Allergen + dietary callout protocol", value: "15% of planogram is allergen-restricted (gluten-free, nut-free, vegan, lactose-free). Service-advisor + BDC team aware of allergen lane location at customer-facing merchandiser. Standard callout: 'There's an allergen-friendly section on the right side of the beverage merchandiser if you need gluten-free or nut-free options.' FDA top-9 labeling visible at each SKU." },
      { label: "Brand + CSI narrative training", value: "The program is part of customer hospitality, not background. Service-customer survey reflects waiting-area amenity improvement. Service-advisor + sales staff should refer to the program in customer-experience moments (customer waiting for service, family member waiting during sales conversation). Avoid treating machines as background equipment; treat as customer-hospitality investment." },
    ],
  }),
  tipCards({
    heading: "Five dealership vending training patterns that work",
    sub: "Documented at modern dealership programs with measurable CSI uplift.",
    items: [
      { title: "Coordinate training session in dealership manager-meeting cadence", body: "45-60 minute session at install fits inside existing dealership manager-meeting or service-department huddle. Avoids overhead of standalone training event. Operator account manager runs session; service manager + sales manager + GM in attendance. New hires get refresh in onboarding orientation." },
      { title: "Document training in dealership operations binder", body: "8-topic training material lives in dealership operations binder at service-advisor desk + sales manager desk. New hires get same orientation at onboarding. Refresh material at quarterly planogram refresh. Modern operator provides material; legacy operator may not." },
      { title: "Designate dealership-side coordinator (service manager or lead advisor)", body: "Single coordinator owns telemetry alert account, complimentary-tag protocol, branded wrap stewardship, operator account-manager liaison. Avoids diffuse responsibility. Coordinator typically service manager or service-advisor lead at mid-size dealerships." },
      { title: "Train on complimentary-tag dispense at install with live demo", body: "Live demo at customer-facing premium beverage merchandiser + service-advisor desk portal during install training. Service-advisor practices service-ticket bar code activation. Shadow + correction in week 1 post-install ensures protocol holds." },
      { title: "Refresh quarterly at planogram refresh cycle", body: "20-minute refresh at quarterly planogram refresh. Covers planogram changes, allergen lane updates, telemetry dashboard, complimentary-tag protocol. Re-orients new hires added since last refresh. Documented in operations binder." },
    ],
  }),
  decisionTree({
    heading: "Does the dealership need a formal vending staff training session?",
    question: "Does the dealership run a structured vending program with complimentary-tag SKUs + premium customer-facing equipment + branded wraps + CSI scoring exposure?",
    yesBranch: {
      title: "Yes — run the 8-topic training session at install + quarterly refresh",
      description: "Structured dealership programs with complimentary-tag + premium merchandiser + branded wraps + CSI exposure require staff orientation to deliver. Run 45-60 minute session at install with service manager + sales manager + GM. Document in operations binder. Refresh 20-minute quarterly at planogram cycle. Modern operator provides material; verify at proposal.",
      finalTone: "go",
      finalLabel: "Run training session",
    },
    noBranch: {
      title: "No — basic operator hand-off is sufficient at ad-hoc placements",
      description: "Ad-hoc dealership vending (basic snack-and-soda, no complimentary-tag, no CSI scoring exposure) does not require formal staff training. Operator hand-off at install covers refund handling + call-center number. Revisit if program upgrades to structured customer-facing scope.",
      finalTone: "stop",
      finalLabel: "Skip formal session",
    },
  }),
  keyTakeaways({
    takeaways: [
      "Dealership vending staff training covers 8 topics in a 45-60 minute session — complimentary-tag dispensing, premium merchandiser usage, coffee station, refund / jam handling, branded wraps, telemetry alerts, allergen callout, and CSI narrative.",
      "Service-advisor desk is the operational hub — service-ticket bar code complimentary-tag activation, telemetry alert coordinator account, goodwill refund pad. Designate single dealership-side coordinator.",
      "Modern dealership operators provide training material + run on-site session at install + quarterly refresh; legacy operators don't. Verify at proposal demo + reference checks.",
      "Document training in dealership operations binder at service-advisor desk + sales manager desk so new hires get same orientation. Refresh at quarterly planogram cycle.",
      "Coordinate training session in existing dealership manager-meeting or service-department huddle — avoids overhead of standalone event.",
    ],
  }),
  inlineCta({
    text: "Want the dealership vending staff training framework (8-topic onboarding + quarterly refresh + operations binder)?",
    buttonLabel: "Get the training framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on dealership vending staff training program design — including 8-topic onboarding scope, complimentary-tag dispense protocol training at service-advisor desk, customer-facing premium beverage merchandiser usage orientation, coffee + specialty station coordination with porter / lot teams, refund + jam handling protocols, branded wrap stewardship, telemetry alert response with dealership coordinator account, and quarterly refresh at planogram refresh cycle. The patterns reflect modern dealership-specialty operator practice.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who needs to attend the dealership vending training session?", answer: "Service manager, sales manager, GM, service-advisor lead, BDC representative lead, porter / lot lead. Typically attends in dealership manager-meeting or service-department huddle cadence. Front-line staff get same content via operations binder + new-hire orientation.", audience: "Dealership GMs" },
      { question: "How long is the initial onboarding session?", answer: "45-60 minutes at install. Covers 8 topics — complimentary-tag dispensing, premium merchandiser usage, coffee station, refund / jam handling, branded wrap stewardship, telemetry alert response, allergen callout, CSI narrative. Modern operator account manager runs the session.", audience: "Service Managers" },
      { question: "How does the complimentary-tag training work?", answer: "Live demo at customer-facing premium beverage merchandiser + service-advisor desk portal. Service-advisor practices service-ticket bar code activation, dispense protocol, cost-recovery line item on service ticket. Shadow + correction in week 1 post-install ensures protocol holds.", audience: "Service Advisors" },
      { question: "Who coordinates telemetry alerts at the dealership?", answer: "Designate single dealership-side coordinator — typically service manager or service-advisor lead. Coordinator owns operator portal access for telemetry alerts (stockout, refrigeration, payment hardware). Stockout alerts auto-route to operator service queue; coordinator escalates if not resolved within 24-48 hours.", audience: "Service Managers" },
      { question: "Should we train porter / lot teams too?", answer: "Optional but recommended at programs with coffee + specialty beverage station. Porter / lot keeps cups + lids + creamers stocked between operator visits + handles basic spill clean-up. Brief 15-minute orientation at install + coverage in operations binder. Modern operators cover at install training session.", audience: "Service Managers" },
      { question: "How often should we refresh training?", answer: "20-minute refresh at quarterly planogram refresh cycle. Covers planogram changes, allergen lane updates, telemetry dashboard updates, complimentary-tag protocol. Re-orients new hires added since last refresh. Annual program review covers CSI correlation + revenue + commission summary.", audience: "Service Managers" },
      { question: "What goes in the dealership operations binder?", answer: "8-topic training material, complimentary-tag dispense protocol, refund + jam call-center number, telemetry alert coordinator account credentials, allergen lane planogram diagram, branded wrap refresh contact, CSI narrative talking points. Lives at service-advisor desk + sales manager desk. New hires get orientation from binder.", audience: "Operations Managers" },
      { question: "Do modern operators provide training material?", answer: "Yes. Modern dealership-experienced operators provide 8-topic training material + run 45-60 minute on-site session at install + 20-minute quarterly refresh. Legacy operators don't — basic hand-off only. Verify training capability at proposal demo + reference checks at dealership-specialty operators.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NADA — National Automobile Dealers Association", url: "https://www.nada.org/", note: "Industry trade association covering dealership operations + staff training" },
      { label: "J.D. Power — Customer Satisfaction Index (CSI)", url: "https://www.jdpower.com/business/automotive/customer-satisfaction-index-csi", note: "Customer satisfaction measurement at dealerships; waiting-area amenity is a covered dimension" },
      { label: "FDA — vending machine labeling requirements", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/vending-machine-labeling-requirements", note: "Federal allergen + nutrition labeling applicable to dealership vending" },
      { label: "ATD — Association for Talent Development", url: "https://www.td.org/", note: "Industry standards for workplace training including service-staff orientation programs" },
      { label: "NAMA — dealership vending operator practice", url: "https://www.namanow.org/", note: "Industry guidance on dealership vending operations and staff handoff" },
    ],
  }),
  relatedGuides({
    heading: "Related dealership vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Customer experience vending in dealerships", description: "Customer-facing patterns, complimentary-tag SKUs, and CSI scoring uplift.", href: "/vending-for-dealerships/customer-experience-vending-in-dealerships" },
      { eyebrow: "Operations", title: "Dealership vending placement flow", description: "Customer-facing vs staff-facing zoning, service-advisor coordination, and brand-wrap patterns.", href: "/vending-for-dealerships/dealership-vending-placement-flow" },
      { eyebrow: "Hub", title: "All dealership vending guides", description: "Equipment, customer experience, branded wraps, complimentary-tag protocols, training, and operations.", href: "/vending-for-dealerships" },
    ],
  }),
]);
process.exit(0);
