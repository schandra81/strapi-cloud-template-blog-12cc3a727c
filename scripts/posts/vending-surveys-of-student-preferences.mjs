import { seedPost, tldr, statStrip, specList, comparisonTable, tipCards, timeline, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-surveys-of-student-preferences", [
  tldr({
    heading: "How do campus operators run vending surveys of student preferences — and what do results show?",
    paragraph:
      "Vending surveys of student preferences are the data foundation that separates well-run campus vending programs from generic-template equipment deployments. Modern campus operators run quarterly surveys covering eight dimensions: (1) product preferences (top SKUs by category — snacks, beverages, fresh, healthy, ethnic, dietary-restricted); (2) placement preferences (where students want machines — residence halls, libraries, dining commons, athletics, classroom buildings, student union); (3) payment preferences (declining-balance student ID + mobile wallet + EMV + cash); (4) timing preferences (hours of operation, peak-demand periods, late-night + early-morning coverage); (5) dietary preferences (gluten-free, vegan, vegetarian, kosher, halal, allergen-restricted shares of planogram); (6) sustainability preferences (recycling, refrigerant, energy efficiency, package waste); (7) accessibility preferences (touchscreen ADA compliance, language support, dietary filtering UX); (8) loyalty + program preferences (campus dining integration, wellness program tie-in, loyalty pricing). Survey response rates 15-25% typical at modern campus operators (using QR + email + SMS + in-app channels); 1500-3000 responses at mid-size university (15-25K student population). Key findings across surveys: students prioritize variety + healthy share + dietary diversity + payment convenience + 24-hour access. Results drive planogram refinement + placement decisions + AI cooler wall deployment + sustainability programming. Campus vending programs with quarterly survey cadence produce 25-40% higher per-student revenue + dramatically better NPS than programs without survey cadence.",
    bullets: [
      { emphasis: "Eight survey dimensions cover student preferences:", text: "Products, placement, payment, timing, dietary, sustainability, accessibility, loyalty. Quarterly cadence at modern campus operators." },
      { emphasis: "15-25% response rate typical with multi-channel outreach:", text: "QR + email + SMS + in-app channels. 1500-3000 responses at mid-size university (15-25K students). Demographic-representative sampling validates results." },
      { emphasis: "Survey-driven programs produce 25-40% higher revenue + better NPS:", text: "Quarterly planogram refinement based on actual student preferences. Versus generic-template deployments that ignore campus-specific preferences." },
    ],
  }),
  statStrip({
    heading: "Campus vending survey benchmarks",
    stats: [
      { number: "15-25%", label: "survey response rate", sub: "multi-channel modern campus", accent: "blue" },
      { number: "1500-3000", label: "responses mid-size university", sub: "15-25K student population", accent: "orange" },
      { number: "Quarterly", label: "survey cadence", sub: "modern campus operators", accent: "blue" },
      { number: "25-40%", label: "revenue uplift", sub: "survey-driven vs generic deployment", accent: "orange" },
    ],
  }),
  specList({
    heading: "Eight student preference survey dimensions",
    items: [
      { label: "1. Product preferences", value: "Top SKUs by category — snacks (chips, candy, crackers, jerky), beverages (carbonated, water, juice, energy, coffee, tea), fresh (sandwiches, salads, yogurt, fruit), healthy (low-sugar, low-sodium, high-protein), ethnic (Asian, Latin, Mediterranean), dietary-restricted (gluten-free, vegan, kosher, halal). Multi-select with rank-order. Drives planogram refinement." },
      { label: "2. Placement preferences", value: "Where students want machines — residence halls (per-floor or central), libraries (24-hour access), dining commons (supplement to dining), athletics (post-workout), classroom buildings (between-class), student union (gathering space), administrative (admissions tour route). Drives new-placement decisions + relocation." },
      { label: "3. Payment preferences", value: "Declining-balance student ID card (campus dining integration), mobile wallet (Apple Pay, Google Pay), EMV chip + NFC contactless, QR code, cash (declining share). Modern campuses see 75-95% cashless preference; declining-balance student ID integration consistently most-requested feature." },
      { label: "4. Timing preferences", value: "Hours of operation, peak-demand periods (between-class, lunch, evening, late-night), 24-hour access at residence halls + libraries, exam-period extended hours, summer-session reduced coverage. Drives service-route scheduling + restock timing. Telemetry-based operators adjust restock to demand patterns." },
      { label: "5. Dietary preferences", value: "Gluten-free share, vegan share, vegetarian share, kosher share, halal share, allergen-restricted (FDA top 9 allergens) share. Drives planogram allocation. Modern campuses target 15-25% dietary-restricted share at residence + dining placements. Higher at international student-heavy campuses." },
      { label: "6. Sustainability preferences", value: "Recycling bins co-located, refrigerant transition (R-290, R-744), ENERGY STAR certified equipment, package waste reduction (refillable containers, compostable packaging), local + sustainable sourcing. Students increasingly prioritize sustainability; drives ESG-aligned operator selection." },
      { label: "7. Accessibility preferences", value: "Touchscreen ADA compliance, language support (English + Spanish + others per campus demographic), dietary filtering UX (find gluten-free items in 2 clicks), audio guidance for visually-impaired, contrast-compliant display. Accessibility services office often co-runs accessibility survey questions." },
      { label: "8. Loyalty + program preferences", value: "Campus dining integration (declining-balance student ID), wellness program tie-in (healthy-SKU discount), loyalty pricing (Buy-9-Get-1), event-tie-in promotions (athletics, exam-period, orientation). Modern campuses increasingly adopt loyalty integration with declining-balance student ID systems." },
    ],
  }),
  timeline({
    heading: "Quarterly campus vending survey workflow",
    sub: "Modern campus operators run quarterly surveys with multi-channel outreach + planogram refinement loop.",
    howToName: "Run a quarterly campus vending survey",
    totalTime: "8 weeks per cycle",
    steps: [
      { duration: "Week 1", title: "Survey design + stakeholder review", description: "Campus dining office + operator account manager review survey instrument. Update questions based on prior-quarter findings + new equipment + new placements. Add campus-specific questions (events, programs, accessibility services updates). Estimate 25-40 questions, 5-7 minutes to complete." },
      { duration: "Week 2", title: "Survey channel preparation", description: "QR codes printed for placement at each vending machine (table-tent or door-decal). Email list verified with campus IT (FERPA-compliant student outreach). SMS opt-in list verified. In-app integration with campus dining app + student services portal. Multi-channel maximizes response rate." },
      { duration: "Week 3-4", title: "Survey distribution + outreach", description: "QR + email + SMS + in-app distribution. Initial email blast + reminder at day 5 + reminder at day 10. Incentive offered (declining-balance credit, free-vend coupon, prize drawing). Multi-channel outreach drives 15-25% response rate at modern campus operators." },
      { duration: "Week 5", title: "Survey close + data validation", description: "Survey closes; responses validated for completeness + demographic representativeness. Check distribution across class year (freshman, sophomore, junior, senior, grad), housing status (residence, off-campus, commuter), academic college (arts, sciences, engineering, business, etc.). Flag underrepresented demographics for follow-up." },
      { duration: "Week 6", title: "Analysis + planogram refinement proposal", description: "Operator data team analyzes responses. Cross-tabulates preferences by demographic, placement, time-of-day. Produces planogram refinement proposal — SKU additions/deletions, dietary share adjustments, placement recommendations, service-cadence adjustments. Sustainability + accessibility findings flagged separately." },
      { duration: "Week 7", title: "Campus stakeholder review", description: "Operator presents findings + proposal to campus dining office + wellness office + sustainability office + accessibility services + student affairs. Joint review + decision on planogram changes. Survey results shared with student government if appropriate (transparency builds program credibility)." },
      { duration: "Week 8", title: "Implementation + measurement baseline", description: "Operator implements approved planogram changes during next service cycle. Telemetry captures pre-change + post-change SKU performance. Baseline measurement for next-quarter survey impact assessment. Cycle repeats next quarter." },
    ],
  }),
  comparisonTable({
    heading: "Survey-driven vending program vs generic-template deployment",
    sub: "Same vending equipment, dramatically different program outcomes based on survey cadence + responsiveness.",
    headers: ["Program dimension", "Survey-driven (modern)", "Generic-template (legacy)", "Lift"],
    rows: [
      ["Survey cadence", "Quarterly", "Annual or none", "4× more frequent"],
      ["Response channels", "QR + email + SMS + in-app", "Single channel (email typical)", "Multi-channel"],
      ["Response rate", "15-25%", "3-8%", "3× higher"],
      ["Planogram refinement", "Quarterly cycles, demographic-targeted", "Annual or none", "4× more frequent"],
      ["Dietary share alignment", "15-25% (matches survey)", "5-10% (template default)", "2-3× higher"],
      ["Per-student revenue", "$80-180/year", "$50-110/year", "+30-70%"],
      ["NPS score", "60-80", "20-45", "+30-40 points"],
    ],
  }),
  tipCards({
    heading: "Five campus vending survey best practices",
    sub: "Each reflects modern campus operator practice + survey methodology guidance.",
    items: [
      { title: "Multi-channel outreach (QR + email + SMS + in-app)", body: "Single-channel email surveys produce 3-8% response rates at campus. Multi-channel outreach reaches 15-25% modern. QR codes at vending machines capture in-moment feedback; email reaches broader audience; SMS for high-priority follow-up; in-app integration with campus dining or student services for top response." },
      { title: "Demographic-representative validation", body: "Check survey responses across class year, housing status, academic college, ethnicity (where appropriate + privacy-compliant). Underrepresented demographics may indicate equipment-access gaps. International student responses often highlight ethnic + dietary-restricted SKU gaps not visible in domestic-student-only samples." },
      { title: "Quarterly cadence (not annual)", body: "Annual surveys can't keep pace with campus turnover (freshman class refresh each year) + seasonal demand patterns + new program launches. Quarterly cadence supports rapid planogram + placement refinement. Campus operators with quarterly cadence outperform annual operators 25-40% on per-student revenue + NPS." },
      { title: "Transparency with student government + stakeholders", body: "Share survey results with student government, dining office, wellness office, sustainability office, accessibility services. Builds program credibility + sustains support. Survey results sometimes published in campus newspaper or shared in dining services blog. Transparency reinforces operator + campus partnership." },
      { title: "Survey-incentive offer (small but visible)", body: "Small incentive (free-vend coupon, declining-balance credit, prize drawing) drives 30-50% response rate uplift vs no incentive. Incentive cost typically $200-500 per quarter (offset by program revenue lift dramatically). Make incentive visible in survey invitation; reinforces operator-student engagement." },
    ],
  }),
  keyTakeaways({
    heading: "Campus vending survey program — what works",
    takeaways: [
      { text: "Eight survey dimensions: products, placement, payment, timing, dietary, sustainability, accessibility, loyalty." },
      { text: "Quarterly cadence — annual surveys can't keep pace with campus turnover + seasonal patterns." },
      { text: "Multi-channel outreach (QR + email + SMS + in-app) drives 15-25% response rates vs 3-8% single-channel." },
      { text: "Demographic-representative validation across class year, housing status, academic college." },
      { text: "Planogram refinement on quarterly cycle based on actual survey findings + telemetry data." },
      { text: "Transparency with stakeholders (dining, wellness, sustainability, accessibility, student government) sustains support." },
      { text: "Survey-driven programs produce 25-40% higher per-student revenue + 30-40 point NPS lift vs generic-template." },
      { text: "Small incentive ($200-500/quarter) drives 30-50% response rate uplift vs no incentive." },
    ],
  }),
  inlineCta({
    text: "Want the campus vending survey program framework (eight dimensions + quarterly workflow + multi-channel outreach + planogram refinement)?",
    buttonLabel: "Get the survey framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported campus vending survey program design across community college, regional state, R1 research, liberal arts, and HBCU campuses — including survey instrument design, multi-channel outreach configuration, demographic-representative validation, quarterly cadence workflow, planogram refinement loop, and stakeholder transparency practice. The survey benchmarks reflect operator-side data and student affairs + dining services feedback from modern campus programs.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Why run student preference surveys for campus vending?", answer: "Survey-driven programs produce 25-40% higher per-student revenue + 30-40 point NPS lift vs generic-template deployments. Quarterly cadence supports planogram + placement refinement. Eight survey dimensions: products, placement, payment, timing, dietary, sustainability, accessibility, loyalty.", audience: "Campus Dining" },
      { question: "How do we get a good response rate?", answer: "Multi-channel outreach (QR + email + SMS + in-app) drives 15-25% response rates at modern campus operators. Single-channel email surveys produce 3-8% only. QR codes at vending machines capture in-moment feedback; in-app integration with campus dining or student services reaches highest response.", audience: "Operators" },
      { question: "How often should we survey?", answer: "Quarterly cadence at modern campus operators. Annual surveys can't keep pace with campus turnover (freshman class refresh) + seasonal demand patterns + new program launches. Campus operators with quarterly cadence outperform annual operators 25-40% on per-student revenue + NPS.", audience: "Campus Dining" },
      { question: "Should we offer an incentive?", answer: "Yes. Small incentive (free-vend coupon, declining-balance credit, prize drawing) drives 30-50% response rate uplift vs no incentive. Cost typically $200-500 per quarter. Offsets program revenue lift dramatically. Make incentive visible in survey invitation.", audience: "Operators" },
      { question: "How do we validate survey results?", answer: "Demographic-representative validation across class year, housing status, academic college, ethnicity (where appropriate + privacy-compliant). Underrepresented demographics may indicate equipment-access gaps. International student responses often highlight ethnic + dietary-restricted SKU gaps.", audience: "Campus Dining" },
      { question: "Should we share results with student government?", answer: "Yes. Share survey results with student government, dining office, wellness office, sustainability office, accessibility services. Builds program credibility + sustains support. Survey results sometimes published in campus newspaper or dining services blog. Transparency reinforces operator + campus partnership.", audience: "Student Affairs" },
      { question: "What do students typically prioritize?", answer: "Variety + healthy share + dietary diversity + payment convenience (declining-balance student ID integration) + 24-hour access at residence halls + libraries. Modern campuses see 75-95% cashless preference. International student-heavy campuses prioritize ethnic + dietary-restricted SKU representation.", audience: "Operators" },
      { question: "How does FERPA factor in?", answer: "Survey outreach to student email lists requires FERPA-compliant coordination with campus IT. Aggregate response data not subject to FERPA; individual responses anonymized in operator analysis. Confirm campus FERPA compliance officer review before initial survey distribution. Modern campus operators have established workflows.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NACUFS — National Association of College and University Food Services", url: "https://www.nacufs.org/", note: "Industry trade association covering campus dining + vending operations" },
      { label: "FERPA — Family Educational Rights and Privacy Act compliance", url: "https://studentprivacy.ed.gov/", note: "Federal student privacy law governing campus survey outreach" },
      { label: "NAMA — campus vending operator practice", url: "https://www.namanow.org/", note: "Industry guidance on campus vending operations + survey methodology" },
      { label: "Inside Higher Ed — campus dining + student preference coverage", url: "https://www.insidehighered.com/", note: "Higher-education trade publication covering campus dining + student services" },
      { label: "Vending Times — campus vending coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering campus vending technology + operator practice" },
    ],
  }),
  relatedGuides({
    heading: "Related campus vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Maximize campus vending revenue share", description: "Commission structures, telemetry-driven planogram, AI cooler deployment, and revenue-share negotiation patterns.", href: "/ai-vending-coolers/maximize-campus-vending-revenue-share" },
      { eyebrow: "Operations", title: "AI vending coolers in apartments", description: "AI cooler walls at student housing + apartment complexes — equipment, placement, customer experience.", href: "/ai-vending-coolers/ai-vending-coolers-in-apartments" },
      { eyebrow: "Hub", title: "All AI vending and campus guides", description: "AI vending, smart coolers, sustainability, and the operator-side patterns serving campus placements.", href: "/ai-vending-coolers" },
    ],
  }),
]);
process.exit(0);
