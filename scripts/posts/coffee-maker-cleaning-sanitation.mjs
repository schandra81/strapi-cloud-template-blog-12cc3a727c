import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("coffee-maker-cleaning-sanitation", [
  tldr({
    heading: "How is office coffee equipment actually cleaned — daily, weekly, monthly, and operator-quarterly cycles?",
    paragraph:
      "Office coffee equipment cleaning is structured across four cadences with distinct duty ownership: (1) daily — milk system clean at bean-to-cup (5-10 min, office staff or hospitality, mandatory at end of shift), brew group rinse (automatic at most modern bean-to-cup), drip tray empty + clean, surface wipe, airpot or thermal carafe clean at batch brewer; (2) weekly — internal water-line rinse at bean-to-cup, deep airpot / carafe clean at batch brewer, milk cooler interior wipe + sanitize, exterior cabinet clean; (3) monthly — descaling cycle (acid-based descaler at bean-to-cup + batch brewer to remove limescale, 30-45 min), brew group removal + clean at bean-to-cup (where removable), grinder burr clean, milk system deep clean with caustic + acid cycles; (4) quarterly — operator service visit covering full disassembly clean, parts replacement (gaskets, seals, brew unit components), water filter replacement, calibration check, food-safety verification. Food-safety risk is real — milk residue at bean-to-cup milk system can harbor listeria + bacterial growth within 24-48 hours of last clean; limescale at heating element reduces extraction quality + accelerates equipment failure. Modern operators ship documented cleaning protocols + monthly cleaning supplies (descaler tablets, milk system cleaner like Cafiza, brew group cleaner) + staff training at install. Legacy operators may rely on customer-provided cleaning supplies + ad-hoc training. Verify cleaning protocol scope + supplies provision at proposal — documented protocol is the program quality lever.",
    bullets: [
      { emphasis: "Four cleaning cadences — daily, weekly, monthly, quarterly:", text: "Daily clean by office staff or hospitality (5-15 min). Weekly + monthly by trained staff. Quarterly by operator (1-3 hours). Each cadence covers different equipment components." },
      { emphasis: "Milk system + limescale are the food-safety + reliability risks:", text: "Milk residue harbors bacterial growth within 24-48 hours; daily clean is mandatory. Limescale at heating element reduces extraction + accelerates equipment failure; monthly descaling is mandatory." },
      { emphasis: "Modern operators ship documented protocols + supplies:", text: "Cleaning supplies (descaler, milk system cleaner, brew group cleaner), documented protocol, staff training at install. Legacy operators may rely on customer-provided supplies + ad-hoc training. Verify at proposal." },
    ],
  }),
  statStrip({
    heading: "Coffee equipment cleaning benchmarks",
    stats: [
      { number: "5-10 min", label: "daily milk system clean", sub: "mandatory at bean-to-cup end of shift", accent: "blue" },
      { number: "Monthly", label: "descaling cycle", sub: "limescale removal at heating element", accent: "blue" },
      { number: "Quarterly", label: "operator service visit", sub: "full disassembly + parts + filter", accent: "blue" },
      { number: "24-48 hr", label: "bacterial growth risk", sub: "milk residue without daily clean", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Cleaning cadence by equipment type",
    sub: "Each equipment type has different cleaning requirements. Bean-to-cup is the most cleaning-intensive; pod systems the least.",
    headers: ["Equipment type", "Daily", "Weekly", "Monthly", "Quarterly"],
    rows: [
      ["Bean-to-cup with milk system (Jura, Franke, Eversys, Schaerer, WMF)", "Milk clean + brew rinse + drip tray + surface (10-15 min)", "Water-line rinse + cooler wipe (15-30 min)", "Descale + brew group + grinder + milk deep clean (45-90 min)", "Operator full service (2-3 hr)"],
      ["Batch brewer (Newco, Curtis, Bunn, Fetco)", "Airpot / carafe clean + brewer wipe (5-10 min)", "Deep airpot clean + cooler wipe (15-30 min)", "Descale + sprayhead clean (30-60 min)", "Operator service (1-2 hr)"],
      ["Thermal carafe brewer", "Carafe clean + brewer wipe (5 min)", "Deep carafe clean (15 min)", "Descale (30 min)", "Operator service (1 hr)"],
      ["French press / pour-over station", "Manual clean + dry (5 min)", "Deep clean (10 min)", "N/A — no descale", "Replacement filters / equipment refresh as needed"],
      ["Single-serve pod (Keurig, Nespresso, Flavia)", "Drip tray empty + surface wipe (2-3 min)", "Pod chute clean (5 min)", "Descale (30 min) + needle clean", "Operator service (30-60 min)"],
      ["Cold brew tap system", "Drip tray + tap surface wipe (3 min)", "Line clean if specified (10-15 min)", "Monthly line + kegerator clean (30-60 min)", "Operator service + keg swap"],
    ],
  }),
  timeline({
    heading: "Coffee equipment cleaning workflow — daily through quarterly",
    sub: "Representative cleaning workflow across cadences. Specific equipment + operator scope adjust the durations; structure is consistent.",
    howToName: "Clean an office bean-to-cup coffee maker on the standard cadence",
    totalTime: "Ongoing daily + weekly + monthly + quarterly",
    steps: [
      { title: "Daily end-of-shift — milk system clean + surface (10-15 min)", description: "Bean-to-cup — initiate milk system clean cycle (Cafiza or proprietary cleaner), 5-10 min cycle. Empty drip tray, rinse. Wipe brew area + dispense surface + machine exterior. Empty + clean milk cooler if milk container removed. Office staff or hospitality owns; train at install.", duration: "10-15 min daily" },
      { title: "Weekly — internal rinse + cooler interior + cabinet clean (15-30 min)", description: "Bean-to-cup — initiate water-line rinse cycle. Wipe milk cooler interior surfaces + sanitize. Wipe machine exterior cabinet + remove smudge. Wipe brewer station counter. Confirm no leak / drip. Office staff or hospitality owns.", duration: "15-30 min weekly" },
      { title: "Monthly — descaling + deep clean (45-90 min)", description: "Descaling cycle — acid-based descaler (operator-provided, machine-specific). Run cycle per manufacturer protocol (30-45 min total). Brew group removal + clean at bean-to-cup (where removable). Grinder burr clean (vacuum grounds, brush burrs). Milk system deep clean (caustic + acid cycle). Trained office staff or operator visit.", duration: "45-90 min monthly" },
      { title: "Quarterly — operator service visit (1-3 hours)", description: "Operator service technician — full disassembly clean, parts replacement (gaskets, seals, brew unit components, milk frother), water filter replacement (BWT, Everpure, 3M cartridge), grinder calibration, extraction verification, food-safety verification. Quarterly cadence at standard tier; bi-monthly at premium tier.", duration: "1-3 hr quarterly per machine" },
      { title: "Annually — full preventive maintenance + parts refresh", description: "Operator annual PM — boiler inspection + descale (heavy duty), pump + valve replacement (where reaching service interval), software / firmware update, full calibration, food-safety verification, water filter housing inspection. 3-5 hour service visit. Bundled at premium operator tier; supplemental cost at standard tier.", duration: "3-5 hr annually" },
    ],
  }),
  specList({
    heading: "Coffee equipment cleaning specifications",
    items: [
      { label: "Daily milk system clean (bean-to-cup)", value: "Cafiza milk system cleaner (Urnex), Puly Milk (Puly Caff), or proprietary cleaner (Franke MilkPure, Jura claro milk). Cycle initiated from touchscreen at end of shift. 5-10 min cycle. Mandatory — milk residue harbors listeria + bacterial growth within 24-48 hours of last clean. Office staff or hospitality owns; train at install." },
      { label: "Daily drip tray + surface clean", value: "Empty drip tray, rinse, return. Wipe brew area + dispense surface + machine exterior with food-safe sanitizer (quaternary ammonium or comparable). Microfiber cloth. 3-5 min per machine. Daily mandatory; office staff or hospitality owns." },
      { label: "Weekly internal rinse + cooler interior", value: "Bean-to-cup — initiate water-line rinse cycle (automatic). Wipe milk cooler interior surfaces + sanitize. Wipe machine exterior cabinet + remove smudge. Confirm no leak / drip. 15-30 min per machine. Trained office staff or operator visit." },
      { label: "Monthly descaling cycle", value: "Acid-based descaler (Urnex Dezcal, Durgol Swiss Espresso, proprietary like Jura two-phase). Removes limescale from heating element + water lines. Cycle initiated from touchscreen; manufacturer-specific protocol. 30-45 min total. Frequency varies by water hardness (monthly at standard hardness; bi-weekly at very hard water). Operator typically provides supplies + cadence guidance." },
      { label: "Monthly brew group + grinder clean", value: "Bean-to-cup — remove brew group (where removable, typical Jura + many Eversys + Schaerer models), rinse + scrub with brew group cleaner (Urnex Cafiza). Grinder — vacuum residual grounds + brush burrs with grinder cleaning tablets (Urnex Grindz or Cafiza Beans). Trained office staff or operator visit." },
      { label: "Monthly milk system deep clean", value: "Caustic + acid cycle on milk system to remove protein + mineral buildup beyond daily clean. Mfr-specific protocol (Franke MilkPure intensive cycle, Schaerer milk system program). 30-45 min total. Mandatory monthly; food-safety risk if skipped." },
      { label: "Quarterly operator service visit", value: "Full disassembly clean. Parts replacement — gaskets, seals, brew unit components, milk frother components. Water filter replacement (BWT, Everpure, 3M cartridge — life ~3-6 months depending on water hardness). Grinder calibration. Extraction verification. Food-safety verification. 1-3 hours per machine at standard tier; bi-monthly at premium tier." },
      { label: "Cleaning supplies + replenishment", value: "Modern operators ship cleaning supplies — descaler tablets, milk system cleaner, brew group cleaner, grinder cleaning tablets, water filter cartridges. Monthly replenishment at standard tier. Legacy operators may rely on customer-provided supplies. Verify at proposal — included in service contract or supplemental cost." },
      { label: "Documented cleaning protocol + staff training", value: "Posted protocol at brewer station — daily / weekly / monthly cadence, specific products, cycle initiation steps, safety notes (no caustic + acid mix). Initial staff training at install (1-2 hours). Refresher training annually. Documented protocol is the program quality lever; ad-hoc cleaning produces variation + food-safety risk." },
    ],
  }),
  tipCards({
    heading: "Five coffee equipment cleaning mistakes",
    sub: "Each is documented in office coffee program post-implementation reviews and food-safety audits. All preventable with disciplined cleaning protocol.",
    items: [
      { title: "Skipping daily milk system clean", body: "Milk residue at bean-to-cup milk system harbors listeria + bacterial growth within 24-48 hours of last clean. Skipping daily clean creates food-safety risk and off-flavor extraction. Mandatory at end of shift; takes 5-10 minutes; office staff or hospitality owns. No exceptions — train at install, refresh annually, audit periodically." },
      { title: "Monthly descaling skipped or postponed", body: "Limescale at heating element reduces extraction temperature + accelerates equipment failure (boiler scale failure $800-3K repair). Monthly cadence at standard water hardness; bi-weekly at very hard water. Operator provides supplies + cadence guidance. Skipping descaling produces premature equipment failure and degraded cup quality." },
      { title: "Mixing caustic + acid cleaners", body: "Caustic cleaners (sodium hydroxide-based) + acid cleaners (citric / phosphoric / hydrochloric) react if mixed — toxic chlorine gas at chlorine-containing cleaners, exothermic reaction at others. Run cycles sequentially with water rinse between; never simultaneously. Documented protocol + training prevents accidents." },
      { title: "No water filter replacement schedule", body: "Water filter cartridge life ~3-6 months depending on water hardness + cup volume. Expired filter passes hardness + chlorine to equipment, scaling boiler + degrading cup quality. Operator typically tracks filter replacement at quarterly service visit; verify scope. Document filter replacement in equipment service log." },
      { title: "Ad-hoc cleaning supplies + protocol", body: "Customer-provided supplies (random off-shelf cleaners) + ad-hoc cleaning protocol produces inconsistent cleaning quality + potential equipment damage. Modern operators ship documented protocol + supplies + staff training at install. Legacy operators may rely on customer; verify at proposal — included in service contract or supplemental cost." },
    ],
  }),
  keyTakeaways({
    heading: "What to take to the next coffee equipment review",
    takeaways: [
      "Four cleaning cadences — daily (10-15 min office staff), weekly (15-30 min), monthly (45-90 min), quarterly (1-3 hr operator).",
      "Milk system clean is daily mandatory; bacterial growth risk within 24-48 hours of last clean.",
      "Limescale at heating element reduces extraction + accelerates equipment failure; monthly descaling is mandatory.",
      "Modern operators ship cleaning supplies + documented protocol + staff training at install; verify at proposal.",
      "Quarterly operator service visit covers full disassembly + parts + water filter + food-safety verification.",
    ],
  }),
  inlineCta({
    text: "Want the coffee equipment cleaning protocol template (cadence, supplies, staff training, operator scope)?",
    buttonLabel: "Get the cleaning protocol template",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support office coffee equipment cleaning program design — cadence structure, supplies provisioning, staff training, and operator service scope across bean-to-cup, batch brewer, pod, and pour-over equipment. The benchmarks reflect operator-side service data and office coffee program post-implementation reviews.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How often does office coffee equipment need to be cleaned?", answer: "Four cadences — daily (milk system clean + surface, 10-15 min), weekly (internal rinse + cooler interior, 15-30 min), monthly (descale + brew group + milk deep clean, 45-90 min), quarterly (operator service visit, 1-3 hr). Each cadence covers different components.", audience: "Office Managers" },
      { question: "Why is daily milk system cleaning mandatory?", answer: "Milk residue at bean-to-cup milk system harbors listeria + bacterial growth within 24-48 hours of last clean. Skipping daily clean creates food-safety risk + off-flavor extraction. Mandatory at end of shift; 5-10 min cycle; office staff or hospitality owns. No exceptions.", audience: "Food Safety" },
      { question: "What does descaling do?", answer: "Descaling removes limescale buildup at heating element + water lines using acid-based descaler (Urnex Dezcal, Durgol Swiss Espresso, proprietary). Limescale reduces extraction temperature + accelerates equipment failure (boiler scale failure $800-3K repair). Monthly cadence at standard water hardness.", audience: "Facilities" },
      { question: "Who owns daily vs operator cleaning?", answer: "Daily + weekly cleaning owned by office staff or hospitality (typically 30-60 min daily across breakroom). Monthly cleaning split — trained office staff handles descale + brew group; operator handles milk system deep clean. Quarterly operator service visit covers full disassembly + parts + filter.", audience: "Office Managers" },
      { question: "What cleaning supplies are needed?", answer: "Descaler (Urnex Dezcal, Durgol Swiss Espresso, proprietary). Milk system cleaner (Cafiza Milk, Puly Milk). Brew group cleaner (Urnex Cafiza). Grinder cleaning tablets (Urnex Grindz). Food-safe surface sanitizer (quaternary ammonium). Modern operators ship monthly replenishment.", audience: "Facilities" },
      { question: "How often does the water filter need to be replaced?", answer: "Cartridge life ~3-6 months depending on water hardness + cup volume. Operator typically tracks filter replacement at quarterly service visit. Expired filter passes hardness + chlorine to equipment, scaling boiler + degrading cup quality. Document filter replacement in equipment service log.", audience: "Facilities" },
      { question: "What about pod systems — do they need similar cleaning?", answer: "Less. Daily drip tray empty + surface wipe (2-3 min). Weekly pod chute clean (5 min). Monthly descale (30 min) + needle clean. Quarterly operator service (30-60 min). Pod systems are less cleaning-intensive than bean-to-cup; no milk system to maintain.", audience: "Office Managers" },
      { question: "How do we verify operator cleaning scope?", answer: "Ask at proposal — included cleaning supplies (descaler, milk system cleaner, brew group cleaner)? Documented cleaning protocol provided at install? Staff training at install? Quarterly service visit scope + duration? Filter replacement included? Modern operators ship complete scope; legacy operators may rely on customer-provided.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FDA — food contact surface cleaning + sanitation standards", url: "https://www.fda.gov/food", note: "Federal food safety standards covering food contact surface cleaning and milk handling" },
      { label: "Urnex — coffee equipment cleaning products documentation", url: "https://urnex.com/", note: "Cleaning supply manufacturer documentation for descaler + milk system cleaner + brew group cleaner protocols" },
      { label: "SCA — Specialty Coffee Association equipment maintenance standards", url: "https://sca.coffee/", note: "Industry standards covering coffee equipment cleaning + descaling + food-safety verification" },
      { label: "NSF International — food equipment certification standards", url: "https://www.nsf.org/", note: "Equipment certification body covering food-safe coffee equipment + cleaning supplies" },
      { label: "NAMA — coffee service operator best practices and cleaning protocols", url: "https://www.namanow.org/", note: "Industry guidance covering office coffee service operator cleaning scope and supplies provision" },
    ],
  }),
  relatedGuides({
    heading: "Related office coffee guides",
    items: [
      { eyebrow: "Sister guide", title: "Water filtration for office coffee", description: "Filter selection, cartridge life, scaling prevention, and operator service scope.", href: "/blog/water-filtration-office-coffee" },
      { eyebrow: "Operations", title: "Pod-free office coffee solutions", description: "Bean-to-cup, batch brewer, French press, and pour-over options + cleaning requirements.", href: "/blog/pod-free-office-coffee-solutions" },
      { eyebrow: "Hub", title: "All office coffee blog posts", description: "Equipment, sourcing, sustainability, and program-design guidance for office coffee.", href: "/blog" },
    ],
  }),
]);
process.exit(0);
