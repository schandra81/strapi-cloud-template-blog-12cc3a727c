import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-student-mental-wellness", [
  tldr({
    heading: "How can campus vending support student mental wellness?",
    paragraph:
      "Student mental health is one of the most-discussed campus issues of the past decade — the Healthy Minds Study and ACHA-NCHA surveys consistently show 40-60% of college students screening positive for at least one mental health concern in a given year, with anxiety and depression dominant. Vending will not solve any of this. What vending can do, on the margin, is reduce three small friction points that compound under stress: late-night nourishment access when dining halls close, low-stigma availability of basic items (snacks, hydration, OTC pain relief, menstrual products), and round-the-clock visibility of wellness messaging in spaces students already visit. AI vending coolers and modern smart machines have expanded the practical SKU range to include items historically reserved for the campus health center — naloxone in some states, condoms, pregnancy tests, sleep aids, electrolyte mixes. The operator's role is technical (planogram, payment, signage) and coordination (working with counseling, health services, basic needs offices to ensure messaging is consistent). The funding and clinical authority sit with the institution. Vending is a placement channel for wellness resources; the wellness program itself sits with student affairs and health services.",
    bullets: [
      { emphasis: "Vending is a low-stigma access channel:", text: "Round-the-clock, no human interaction, and located in spaces students already visit for unrelated reasons. That makes it useful for items where stigma reduces uptake — menstrual products, contraception, naloxone, sleep aids." },
      { emphasis: "Late-night nourishment matters more than people admit:", text: "Stressed students under-eat. Dining halls close. A working machine at 11 PM in a residence-hall lobby is a real intervention, not a luxury. Plan stock and reliability for the overnight hour, not the lunch hour." },
      { emphasis: "Operator's role is plumbing, not clinical:", text: "Coordinate with health services on what to stock, signage, and crisis-line messaging. The clinical authority and funding sits with the institution. Don't overstate what vending can do — frame as one channel, not a solution." },
    ],
  }),
  statStrip({
    heading: "Campus mental wellness benchmarks",
    stats: [
      { number: "40-60%", label: "students screening positive", sub: "Healthy Minds Study, anxiety + depression", accent: "blue" },
      { number: "24/7", label: "vending access window", sub: "vs ~12 hr/day staffed health services", accent: "blue" },
      { number: "3-5×", label: "uplift on stigma-sensitive SKUs", sub: "menstrual / contraception / naloxone vs counter sale", accent: "orange" },
      { number: "11 PM - 2 AM", label: "peak overnight vending demand", sub: "campus residence-hall placements", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Vending-channel wellness items vs other distribution channels",
    sub: "How vending compares to health center counter, residential life staff, and peer-distribution channels for the small set of items where access friction matters.",
    headers: ["Wellness item", "Vending channel fit", "Other channels", "When vending wins"],
    rows: [
      ["Menstrual products", { icon: "check", text: "Excellent — 24/7, low stigma" }, "Health center, RA closets", "Off-hours and high-traffic residential placements"],
      ["Condoms / safer-sex kits", { icon: "check", text: "Excellent — privacy + 24/7" }, "Health center counter", "Always; vending strongly outperforms counter distribution"],
      ["Pregnancy tests", { icon: "check", text: "Good — privacy critical" }, "Health center, pharmacy", "Off-hours and stigma-sensitive moments"],
      ["Naloxone (where legal)", { icon: "check", text: "Good — saves overdose lives" }, "Health center, pharmacies", "Round-the-clock placement near residence halls"],
      ["OTC pain / cold meds", { icon: "check", text: "Good — 24/7 access" }, "Pharmacy, health center", "Off-hours; pharmacies closed overnight"],
      ["Sleep aids (melatonin, ear plugs)", { icon: "check", text: "Good — 24/7 + low stigma" }, "Pharmacy, health center", "Off-hours; chronic study-stress placements"],
      ["Electrolytes / hydration mixes", { icon: "check", text: "Good — pairs with hydration" }, "Dining hall, retail", "Athletic and high-stress placements"],
      ["Mental health crisis support", { icon: "warn", text: "Limited — signage only" }, "Crisis line, counseling", "Never — vending is signage placement, not clinical care"],
      ["Counseling appointments", { icon: "warn", text: "Limited — QR code signage" }, "Counseling center direct", "Never — vending cannot replace clinical intake"],
    ],
  }),
  specList({
    heading: "Wellness vending specifications",
    items: [
      { label: "Equipment", value: "Standard smart vending machine or AI cooler with ADA-compliant interface, contactless payment, telemetry, and clear signage panel for wellness messaging. Refrigeration optional but useful for some SKUs (electrolyte drinks, certain medications). Tamper-evident at all placements." },
      { label: "Planogram — wellness SKUs", value: "Menstrual products (pads, tampons, cups), safer-sex kits (condoms, dental dams), pregnancy tests, sleep aids (melatonin, ear plugs, eye masks), OTC pain meds (ibuprofen, acetaminophen — single-use packaging), electrolyte mixes, allergy meds (where state law permits), naloxone (where state law permits and partner present)." },
      { label: "Pricing model", value: "Three patterns: (1) subsidized — institution pays the per-vend cost, item dispenses at $0 with student ID; (2) reduced — items priced at cost or below ($0.25-$1.50); (3) standard — items priced at retail, accessible to all without ID. Most campuses use (2) for high-friction SKUs and (3) for low-friction SKUs." },
      { label: "Signage + messaging", value: "QR code on machine front directing to wellness portal, counseling intake, and 24/7 crisis line. Crisis line number visible at all hours (988 in U.S.). Avoid 'mental health vending' branding — stigma-reducing language: 'wellness access,' 'campus essentials,' 'late-night basics.'" },
      { label: "Placement strategy", value: "Residence hall lobbies (24/7 lighted, monitored by RA staff), 24-hour library zones, student union late-night spaces, recreation center entries. Avoid placements that require an ID swipe to enter the building during off-hours unless universal access is verified." },
      { label: "Restock cadence", value: "Standard weekly + telemetry-driven supplemental during finals, exam weeks, and after major campus events. Wellness SKUs have lumpy demand — exam week menstrual product demand can run 3-4× baseline. Don't run out during peak stress windows." },
      { label: "Coordination with health services", value: "Health services or counseling center selects clinical SKUs (naloxone, contraception, pregnancy tests). Joint quarterly review of usage data (anonymized) and student feedback. Crisis-line signage approved by counseling. Naloxone restocking partnership with local pharmacy or harm-reduction org." },
      { label: "Privacy + receipt design", value: "Receipts show generic labels ('wellness item' or 'campus essentials' rather than specific product name) where reasonably possible. Card transactions show generic merchant name. Privacy preserved — important for stigma-sensitive purchases." },
      { label: "Reporting", value: "Monthly anonymized usage report to health services and student affairs. Category-level data only (menstrual, contraception, naloxone, sleep aids); never individual purchase data. Grant funders and accreditation bodies want category-level program data." },
    ],
  }),
  keyTakeaways({
    heading: "Key takeaways before you plan a wellness vending program",
    takeaways: [
      "Vending is a placement channel for wellness SKUs, not a wellness program. Clinical authority and funding sit with health services and student affairs.",
      "Stigma reduction is the single biggest argument. Items students avoid asking for in person (contraception, menstrual products, naloxone, pregnancy tests) see 3-5× uptake when vended privately.",
      "Plan for late-night and exam-week demand spikes. The 24/7 reliability advantage only matters if the machine is actually stocked at 2 AM during finals week.",
      "Coordinate with counseling and health services before launch. Signage, crisis-line numbers, and clinical SKUs must align with institutional messaging.",
      "Avoid 'mental health vending' branding. Use neutral language ('wellness access', 'late-night essentials'). Stigma reduces use of stigmatized resources.",
    ],
  }),
  decisionTree({
    heading: "Should our campus add a wellness vending placement?",
    question: "Do we have a campus health services partner willing to co-design SKUs and signage, plus 12+ months of funding identified for clinical-SKU costs (naloxone, contraception, menstrual)?",
    yesBranch: {
      title: "Pilot one wellness placement at a high-traffic residence hall or 24-hour library",
      description: "Start with a single placement co-designed with health services. Six SKU categories (menstrual, contraception, pregnancy tests, OTC pain, sleep aids, electrolytes). Measure usage for one semester before expanding to additional buildings.",
      finalTone: "go",
      finalLabel: "Pilot 1 placement, 1 semester",
    },
    noBranch: {
      title: "Build the partnership first; don't add machines without clinical co-design",
      description: "Vending without health services coordination produces conflict on item selection, signage problems, and missed referral opportunities. Start by establishing the partnership and the funding mechanism. Add the machine once both are in place.",
      finalTone: "stop",
      finalLabel: "Build partnership first",
    },
  }),
  tipCards({
    heading: "Five wellness vending implementation pitfalls",
    sub: "Each is documented in campus wellness program reviews and operator feedback. All preventable with disciplined planning.",
    items: [
      { title: "Branding the machine as 'mental health vending'", body: "Stigma reduces use by 30-50%. Students avoid spaces and machines that signal they need help. Use neutral language ('wellness access,' 'late-night essentials,' 'campus basics') and let the SKU mix do the work. The point is access, not flag-planting." },
      { title: "Stocking only mainstream snacks at the wellness machine", body: "If the wellness machine looks like every other vending machine, the wellness rationale is lost. Wellness SKUs (menstrual, contraception, sleep aids, OTC) should dominate the planogram. Snacks can occupy 20-30% but not more. The differentiation is the wellness SKUs, not the snacks." },
      { title: "Skipping the health services co-design", body: "Clinical SKUs (naloxone, contraception, pregnancy tests) require health services involvement — for SKU selection, signage, and ongoing clinical authority. Vending without health services often picks wrong items, uses problematic signage, or creates clinical-care expectations vending can't meet." },
      { title: "No restock plan for finals or peak weeks", body: "Wellness SKU demand spikes 3-4× during finals and major campus events. A standard weekly restock leaves shelves empty during the exact window when access matters most. Plan telemetry-driven supplemental restocks during peak stress windows; over-stock heading into finals week." },
      { title: "Treating vending as a substitute for clinical care", body: "Vending dispenses items; it does not provide care. Crisis line signage matters — 988 (U.S. Suicide & Crisis Lifeline) visible on every wellness machine. But vending is one channel, not a replacement for counseling, intake, or clinical services. Position accordingly in any campus messaging." },
    ],
  }),
  inlineCta({
    text: "Want the campus wellness vending implementation pack (planogram, signage, health services partnership template)?",
    buttonLabel: "Get the wellness vending pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported campus auxiliary services on wellness vending implementations — planogram coordination with health services, signage approvals with counseling centers, and partnership models for clinical SKUs like naloxone and contraception. The recommendations reflect what works at the operator/coordinator interface; clinical authority sits with the institution.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Can a vending machine really help with student mental health?", answer: "Only on the margin and only through the small set of items where access friction matters: menstrual products, contraception, pregnancy tests, sleep aids, OTC pain meds, and naloxone in jurisdictions where it's legal in vending. The machine doesn't provide care; it reduces friction on getting the basics. Position it that way and don't oversell.", audience: "Student Affairs" },
      { question: "What should we stock in a wellness vending machine?", answer: "Menstrual products (pads, tampons, cups), safer-sex kits (condoms), pregnancy tests, sleep aids (melatonin, ear plugs, eye masks), OTC pain meds (ibuprofen, acetaminophen — single-dose packaging), electrolytes, allergy meds where state law allows, and naloxone where state law allows and a partner pharmacy or harm-reduction org is involved. Avoid sugary snacks dominating the planogram.", audience: "Health Services" },
      { question: "Is putting naloxone in a campus vending machine legal?", answer: "Depends on state — many states have made naloxone available without prescription and explicitly authorize vending placement; others have not. Coordinate with general counsel, state pharmacy board, and a partner pharmacy or harm-reduction organization. Where legal, vending placement near residence halls dramatically expands round-the-clock access.", audience: "Health Services" },
      { question: "How much does this cost the institution?", answer: "Clinical SKU costs vary: menstrual products $0.20-$0.50/item, condoms $0.10-$0.30, naloxone $20-40 per kit when bought in bulk, OTC pain meds $0.10-$0.20 per single dose. Subsidized programs typically run $4-12K per machine per year depending on SKU mix and use rate. Equipment is usually within standard operator contracts. Grants from health-and-wellness foundations frequently cover startup costs.", audience: "Auxiliary Services" },
      { question: "Should this be a separate machine or integrated with regular vending?", answer: "Both work. Dedicated wellness machine: cleaner signage, dedicated planogram, easier reporting; downside is lower foot traffic at the dedicated location. Integrated wellness rows in standard machines: higher foot traffic, broader normalization; downside is signage limitations and harder reporting. Most campuses run one dedicated wellness machine at a high-traffic residential placement and integrate selected SKUs (menstrual, condoms) into regular machines elsewhere.", audience: "Student Affairs" },
      { question: "How do we measure whether this is helping?", answer: "Anonymized category-level usage data: items dispensed by category by month, peak demand windows, restock cadence. Annual student climate survey items asking about access to wellness resources. Avoid metrics that re-identify individual purchases. Don't expect direct mental-health-outcome metrics — vending isn't a clinical intervention.", audience: "Institutional Research" },
      { question: "What about privacy concerns at the wellness machine?", answer: "Receipts show generic merchant names. Card statements show generic vendor. Anonymized data only in reporting. Placement in high-foot-traffic but not heavily-surveilled locations — students should feel they can use the machine without identifying themselves. FERPA implications minimal because there's no student-record link unless the institution chooses to integrate one.", audience: "General Counsel" },
      { question: "Will adding a wellness vending machine reduce health center visits?", answer: "Not in a meaningful way for the items vending handles — it shifts the channel for routine self-service items (menstrual, contraception, OTC) that didn't really need a clinical visit. For clinical care (counseling, treatment, evaluations), no effect. Frame this with health services so the program is positioned as augmenting access, not replacing care.", audience: "Health Services" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "Healthy Minds Study — national campus mental health survey", url: "https://healthymindsnetwork.org/hms/", note: "Authoritative source for U.S. college student mental health prevalence" },
      { label: "ACHA-NCHA — American College Health Association National College Health Assessment", url: "https://www.acha.org/ncha/", note: "Industry-standard campus health and wellness survey instrument" },
      { label: "988 Suicide & Crisis Lifeline — federal crisis services", url: "https://988lifeline.org/", note: "Standard crisis-line resource referenced on wellness signage" },
      { label: "SAMHSA — Substance Abuse and Mental Health Services Administration", url: "https://www.samhsa.gov/", note: "Federal authority on harm reduction and naloxone distribution policy" },
      { label: "ACHA — Healthy Campus framework", url: "https://www.acha.org/healthy-campus/", note: "Industry framework for campus-wide health and wellness initiatives" },
    ],
  }),
  relatedGuides({
    heading: "Related campus wellness and access guides",
    items: [
      { eyebrow: "Sister guide", title: "Accessible campus vending features", description: "ADA + accessibility design choices for campus machines including reach, audio output, and signage.", href: "/ai-vending-coolers/accessible-campus-vending-features" },
      { eyebrow: "Sister guide", title: "Addressing student food insecurity with vending", description: "Card-unlock, pantry locker, and dining-dollar subsidy models for campus food-security vending.", href: "/ai-vending-coolers/addressing-student-food-insecurity-vending" },
      { eyebrow: "Hub", title: "All AI vending and campus guides", description: "Accessibility, sustainability, wellness, and the operator-side patterns that work at every campus tier.", href: "/ai-vending-coolers" },
    ],
  }),
]);
process.exit(0);
