import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-in-courthouses-and-dmv", [
  tldr({
    heading: "Why do courthouses and DMVs both run on the same vending-operations playbook even though one is a court and the other is a state agency?",
    paragraph:
      "Courthouses and DMV offices share the operational pattern that makes vending profitable: a captive audience that cannot leave during their wait, an unpredictable dwell time that turns a routine errand into a half-day stranding, and a security or queue-management envelope that shapes how the machine is serviced. A DMV visitor pulling a number at 9 AM may not be called until 1 PM. A juror arrives at 7:45 AM and may not be released until 5 PM. In both cases the person is hungry, has nowhere to go, and will spend whatever it takes to bridge the gap. The right program addresses (1) captive-audience planogram weighted toward meal-replacement (real protein, hearty snacks, larger beverages) instead of office-style snack-heavy mix, (2) state-procurement compliance — courthouses run on county or state procurement; DMVs run on state-procurement frameworks with state nutrition standards layered on, (3) accessibility — same ADA + ABA standards, often with stricter local enforcement at facilities serving the public, (4) restock windows aligned with court session schedules or DMV peak-hours patterns, (5) signage in multiple languages at DMVs serving diverse populations (Spanish + English at minimum; Mandarin, Korean, Vietnamese, Tagalog, French at metropolitan locations). Modern operators understand that the DMV-vs-courthouse distinction matters less than the captive-audience pattern — they bundle the same operating disciplines at proposal. Legacy operators treat them as different categories and underperform on both.",
    bullets: [
      { emphasis: "Captive audience math drives both:", text: "Per-person daily spend runs $5-12 at DMV and $7-12 at courthouse vs $2-4 at typical office vending. Same hunger, same dwell, same revenue pattern." },
      { emphasis: "State procurement governs DMVs; county or state for courthouses:", text: "Both require formal RFP, accessibility scope, and often state nutrition standard alignment. Operators must be state-procurement-registered." },
      { emphasis: "Multi-language signage matters more at DMV:", text: "DMVs serve broader demographics than courthouses. Spanish + English minimum; add per-location dominant secondary languages at metro DMVs." },
    ],
  }),
  statStrip({
    heading: "Courthouse and DMV vending benchmarks",
    stats: [
      { number: "4-8 hr", label: "typical DMV / juror wait", sub: "captive audience time", accent: "blue" },
      { number: "$5-12", label: "per-person daily spend", sub: "vs $2-4 typical office", accent: "orange" },
      { number: "2-3", label: "languages on signage typical", sub: "at metropolitan DMV locations", accent: "blue" },
      { number: "5-15%", label: "commission to county or state", sub: "per standard procurement contract", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Courthouse and DMV vending — what's similar and what differs",
    sub: "Both run the captive-audience pattern. The procurement layer and the security envelope diverge, but the planogram and revenue model converge.",
    headers: ["Aspect", "Courthouse account", "DMV account"],
    rows: [
      ["Captive audience", { icon: "check", text: "Jurors, witnesses, attorneys" }, { icon: "check", text: "License + registration + ID applicants" }],
      ["Dwell time", "6-8 hours typical", "2-6 hours typical"],
      ["Per-person daily spend", "$7-12", "$5-10"],
      ["Glass container policy", { icon: "x", text: "Prohibited (most courts)" }, "Generally allowed"],
      ["Security screening for service techs", "Visitor screening + scheduled windows", "Standard contractor access"],
      ["Procurement layer", "County or state procurement", "State procurement primary"],
      ["Multi-language signage", "Limited (legal-process language matters)", { icon: "check", text: "Spanish + English minimum at most" }],
      ["Healthy-vending mandate", "Often required by jurisdiction", "Often required at state-procurement"],
      ["Restock window flexibility", "Around court sessions", "Around DMV peak hours (10 AM-2 PM)"],
      ["Card payment share", "85-95%", "70-85%"],
    ],
  }),
  specList({
    heading: "Combined courthouse and DMV operating specifications",
    items: [
      { label: "Captive-audience planogram weighting", value: "Meal-replacement weighted at both — real protein (jerky, protein bars, nuts, peanut butter crackers with cheese), hearty snacks, larger beverages, fruit cups. Avoid the office-style snack-heavy mix; chips and candy under-perform because the audience is filling a multi-hour meal gap, not snacking. 30-50% planogram shift from a typical office mix produces 20-40% volume lift at courthouse and DMV accounts." },
      { label: "State procurement scope", value: "DMVs run on state procurement frameworks (California DMV under DGS, New York DMV under OGS, Texas DMV under TXDOT or DPS depending on function, Florida DHSMV state procurement). Courthouses run on county procurement for state-court systems and federal procurement (GSA Schedule) for federal courthouses. Verify procurement layer at RFP scope; operator must be state-procurement-registered (or GSA Schedule for federal) before bidding." },
      { label: "State nutrition standard alignment", value: "Many state procurement frameworks layer on state nutrition standards at vending (California SB 1420 calorie disclosure, New York EO 190 vending standards, Massachusetts EOHHS, Washington DES). Healthy-share targets typically 30-50% at state-procured vending. Verify state nutrition standards at RFP scope; revise planogram if state standard exceeds operator default." },
      { label: "Accessibility scope", value: "ADA + ABA at federal courthouses + state and county accessibility codes at state and county courthouses + state accessibility codes at DMVs. Common scope: 48 inch maximum reach height for controls + payment, 4.5:1 minimum color contrast on signage + payment surface, Braille labeling, audio cue support, 36 inch minimum approach width, 60 inch turning radius. Annual audit minimum; documented in operator service file." },
      { label: "Multi-language signage at DMV", value: "Spanish + English baseline at most US metropolitan DMVs. Add per-location dominant secondary languages — Mandarin and Cantonese at SF Bay Area + Seattle + Los Angeles + NYC metro, Korean at LA + Atlanta + NJ metro, Vietnamese at Houston + Dallas + Northern Virginia, Tagalog at SF Bay Area + LA, French at northern border DMVs + Louisiana, Russian at NYC + Sacramento. Coordinate with DMV language access coordinator." },
      { label: "Restock window scheduling", value: "Courthouses restrict restocking during active court sessions (typically 9 AM-12 PM, 1:30 PM-4:30 PM). Restock windows: pre-7:30 AM, lunch (12-1:30 PM), or after 4:30 PM. DMVs have less rigid session schedules but peak hours (10 AM-2 PM Tuesday-Saturday at most state DMVs) should be avoided for restock to minimize line disruption. Pre-opening (7-8 AM) or post-closing (5-6 PM) windows preferred." },
      { label: "Service-tech access protocol", value: "Courthouses require visitor screening + scheduled windows + screened toolkits (sharp tools may be restricted). DMVs use standard contractor access through staff entrances. Both benefit from pre-cleared route-regular technicians during operator onboarding; first-visit techs without pre-cleared credentials lose 30-90 minutes to screening at courthouse, 10-20 minutes at DMV. Build pre-clearance into the operator service contract." },
      { label: "Cash-handling and payment compliance", value: "PCI-DSS baseline for commercial card acceptance at both. Card share runs higher at courthouses (85-95%) than at DMVs (70-85%) — DMVs serve broader demographic including older and lower-income visitors more likely to use cash. Keep bill validator at DMV machines; consider cashless at high-card-share courthouses. Coin and bill collection through armored car or operator-employee-only handling at both." },
      { label: "Telemetry and stockout response", value: "Cellular telemetry preferred over facility Wi-Fi at both — court and DMV IT networks often patch overnight, taking Wi-Fi-dependent telemetry offline. Stockout response SLA typically 24 hours at courthouse and DMV accounts, with critical-location SLA (jury staging areas, DMV waiting area) negotiated to 12 hours at major sites. Verify operator overnight on-call rota at RFP." },
      { label: "Calorie disclosure and allergen labeling", value: "ACA Section 4205 calorie disclosure at vending signage required for operators with 20+ machines (most courthouse and DMV operators trigger this). FDA Nutrition Facts updates at packaged food. Top-9 allergen labeling at machine signage. Multi-language signage at DMV per language access coordinator. Modern operators provide all four at install; verify at RFP." },
    ],
  }),
  tipCards({
    heading: "Five operator practices that work at both courthouses and DMVs",
    sub: "Same captive-audience pattern, same operating disciplines. All preventable problems if addressed at proposal and onboarding.",
    items: [
      { title: "Bid against the captive-audience revenue model, not office-vending benchmarks", body: "Per-machine volume at courthouse and DMV accounts runs 2-4x typical office vending. Pricing the bid against office benchmarks leaves margin on the table or — worse — underspecifies capacity and the machine runs dry during peak. Build the bid against verified captive-audience per-person spend at the specific facility class." },
      { title: "Standardize the meal-replacement planogram", body: "Real protein + hearty snacks + larger beverages + fruit cups dominate the captive-audience planogram. Same template works at courthouse and DMV. Maintain 60-70% meal-replacement weight + 20-30% traditional snack + 10-15% healthy / specialty. Refresh quarterly based on per-account vend data." },
      { title: "Pre-clear service techs at courthouse onboarding; standardize DMV access during the same period", body: "Courthouse onboarding takes 4-8 weeks for credential issuance. Use the same window to standardize DMV access protocols across the state-procurement contract. One operator-onboarding sprint covers both facility types and the marginal cost is small relative to the time saved across the contract term." },
      { title: "Match signage language coverage to DMV demographic", body: "Spanish + English baseline at most metropolitan DMVs. Add per-location dominant secondary languages at the DMV language access coordinator's recommendation. Mandarin + Cantonese, Korean, Vietnamese, Tagalog, French, Russian are the most common additions at US metro DMVs. Same signage template carries to neighboring courthouses if applicable." },
      { title: "Build quarterly review into the service contract", body: "Courthouse session schedules and DMV peak-hour patterns shift seasonally (jury terms, license-renewal cycles, registration peaks). Quarterly review with facility managers catches changes before they erode revenue or service quality. Build the cadence into the operator service contract; legacy operators commonly skip this and the program degrades within a year." },
    ],
  }),
  decisionTree({
    heading: "Should the courthouse and DMV in our county be on the same vending contract?",
    question: "Are both facilities under the same procurement authority (county procurement covers the courthouse, state procurement covers the DMV) — or does a single state-procurement RFP cover both?",
    yesBranch: {
      title: "Yes, single procurement covers both — bundle the contract.",
      description: "When a state-procurement RFP can cover both the state-court courthouse and the state DMV, bundling produces operational efficiencies (one operator, one service route, one credentialing sprint, one telemetry dashboard, one quarterly review cadence). Most states allow this; some require separate procurement. Verify with the state procurement office at RFP scope. Bundle planogram and signage templates with per-facility variation as needed.",
      finalTone: "go",
      finalLabel: "BUNDLE UNDER STATE PROCUREMENT",
    },
    noBranch: {
      title: "No — separate contracts under separate procurement authorities.",
      description: "When the courthouse runs on county procurement and the DMV runs on state procurement, the procurement authorities are different and the contracts are separate. Same operator can win both, but each requires a separate RFP response. Standardize the operating model (planogram, signage, telemetry, service protocols) across both to reduce marginal cost; price the bids independently against each facility's traffic.",
      finalTone: "go",
      finalLabel: "SEPARATE CONTRACTS, STANDARDIZED OPERATIONS",
    },
  }),
  caseStudy({
    tag: "Real numbers · State procurement combined courthouse and DMV contract",
    title: "$182,400 in annual vending revenue across one state-court courthouse and three DMV offices",
    context: "A southwestern-state combined state-procurement vending contract covering one mid-sized state-court courthouse (320-juror weekly pool) plus three regional DMV offices (combined 1,800 daily visitors). Operator bundled the route under one state-registered vending contract, standardized planogram across all four locations with per-DMV signage language variation, and committed to twice-weekly restock at each location. State commission at 10% of gross.",
    meta: [
      { label: "Facilities", value: "1 courthouse + 3 DMV offices" },
      { label: "Machines", value: "11 total (3 courthouse + 8 across 3 DMVs)" },
      { label: "Restock", value: "2x weekly each location" },
      { label: "Commission", value: "10% gross to state" },
    ],
    results: [
      { number: "$182,400", label: "annual gross sales combined" },
      { number: "$18,240", label: "annual commission to state" },
      { number: "82%", label: "card payment share averaged" },
    ],
  }),
  inlineCta({
    text: "Want the combined courthouse and DMV vending pack (state-procurement scope + captive-audience planogram + multi-language signage template)?",
    buttonLabel: "Get the combined pack",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help county and state-procurement managers design combined courthouse and DMV vending programs — captive-audience planogram weighted toward meal-replacement at both facility types, state-procurement scope (CA DGS, NY OGS, TX DPS, FL DHSMV depending on state), state nutrition standard alignment, ADA + ABA accessibility coordination with facility accessibility offices, multi-language signage coordination with DMV language access coordinators, twice-weekly restock cadence aligned with court sessions and DMV peak hours, and quarterly review with facility managers. The framework reflects operator-side data across state-court courthouses, federal courthouses, regional DMV offices, and combined state-procurement vending deployments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why is the planogram at our DMV the same as at the courthouse next door?", answer: "Same captive-audience pattern — visitors at both facilities can't leave during their wait and are filling a multi-hour meal gap. Meal-replacement-weighted planogram (real protein, hearty snacks, larger beverages) outperforms the office-style snack-heavy mix at both. 30-50% planogram shift produces 20-40% volume lift. Modern operators standardize the captive-audience template across courthouse and DMV accounts.", audience: "Visitors" },
      { question: "Can we run one vending contract across our state courthouse and state DMVs?", answer: "Often yes, if a single state-procurement RFP covers both. State-procured contracts can bundle state-court courthouses with state DMVs under one operator — produces operational efficiencies and uniform service quality. Verify procurement authority with the state procurement office. If the courthouse runs on county procurement and the DMV on state procurement, contracts remain separate but the same operator can win both.", audience: "Procurement" },
      { question: "Do DMVs require multi-language signage at vending?", answer: "Most metropolitan DMVs do — Spanish + English baseline at most US locations, with per-location dominant secondary languages (Mandarin + Cantonese, Korean, Vietnamese, Tagalog, French, Russian) added at the DMV language access coordinator's recommendation. Courthouses have less stringent multi-language signage requirements but benefit from the same coverage at facilities serving diverse populations.", audience: "DMV Visitors" },
      { question: "What healthy-vending standard applies?", answer: "State nutrition standards layer on at state procurement (California SB 1420 calorie disclosure + healthy-share scope, New York EO 190 vending standards, Massachusetts EOHHS, Washington DES) — typically 30-50% healthy share. Federal courthouses align with HHS / GSA Food Service Guidelines for Federal Facilities at 50-75%. ACA Section 4205 calorie disclosure applies at operators with 20+ machines (most operators trigger this).", audience: "Health-Conscious Visitors" },
      { question: "How does restock work without disrupting our court sessions or DMV lines?", answer: "Courthouses restrict restocking during active sessions (typically 9 AM-12 PM and 1:30 PM-4:30 PM). Service windows: pre-7:30 AM, lunch (12-1:30 PM), or after 4:30 PM. DMVs have less rigid session schedules but peak hours (10 AM-2 PM Tuesday-Saturday at most state DMVs) should be avoided. Pre-opening (7-8 AM) or post-closing (5-6 PM) windows preferred. Document approved windows in the operator service contract.", audience: "Facility Managers" },
      { question: "Are vending purchases at the courthouse or DMV reimbursable?", answer: "At courthouse, federal and many state courts provide a juror meal allowance that covers vending purchases — save receipts; most modern courthouse vending issues a receipt by email/text when paying with a card. At DMV, vending purchases are typically personal expenses (no reimbursement). DMV employees on lunch break may have employer reimbursement policies that cover vending; check with HR.", audience: "Visitors" },
      { question: "What's a reasonable commission rate to expect at courthouse or DMV vending?", answer: "5-15% of gross sales is standard for public-building vending. Higher-traffic courthouses (200+ juror weekly pool) and high-traffic DMVs (500+ daily visitors) can negotiate 10-15% — sometimes 12-18% at metropolitan facilities. Smaller county courthouses and regional DMVs land at 5-10%. Above 18% is rare and usually traded against a longer contract term or capital contribution from the operator.", audience: "Procurement" },
      { question: "How do we evaluate operators for combined courthouse + DMV RFP?", answer: "Score on four dimensions: captive-audience experience (have they served similar high-dwell-time public facilities?), state-procurement registration (DBE participation, prevailing wage compliance, state nutrition standard alignment), service operations (twice-weekly restock with pre-cleared techs across all facilities), and reporting transparency (per-facility per-SKU sales reports with telemetry backing). Public-procurement RFPs typically weight these 30/25/25/20.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ADA Standards 2010 — public accommodation requirements", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Federal accessibility standards applicable to courthouse and DMV vending placements" },
      { label: "GSA — federal procurement and Schedule contracts", url: "https://www.gsa.gov/", note: "Federal procurement framework governing federal courthouse vending eligibility" },
      { label: "NCSC — National Center for State Courts facilities guidelines", url: "https://www.ncsc.org/", note: "Operational guidance on vending and food-service at state-court courthouses" },
      { label: "AAMVA — American Association of Motor Vehicle Administrators", url: "https://www.aamva.org/", note: "Operational guidance and best practices at state DMV facilities including visitor amenities" },
      { label: "FDA — ACA Section 4205 vending calorie disclosure", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/calorie-labeling-articles-food-vending-machines", note: "Federal vending machine calorie disclosure requirement for operators with 20+ machines" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending in courthouse waiting areas", description: "Captive-audience math, glass-free security envelope, and the planogram weighting that lifts juror-area sales 20-40%.", href: "/vending-for-public-buildings/vending-in-courthouse-waiting-areas" },
      { eyebrow: "Operations", title: "Public-building vending logistics", description: "Service-tech access, credentialing, route density, and the operational patterns that work across courts, federal buildings, and state agencies.", href: "/vending-for-public-buildings/public-building-vending-logistics" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Operations, contracts, accessibility, security, and the operator-side patterns that work at every public-building account.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
