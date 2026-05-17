import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("student-feedback-vending-management", [
  tldr({
    heading: "How should campuses structure student feedback to improve vending?",
    paragraph:
      "Student feedback on campus vending is one of the most underused operational tools. Most campuses collect feedback only via annual amenity surveys or complaint-driven channels; the structured operators run continuous feedback through telemetry + portal + survey integration. The four channels that produce useful data: (1) telemetry sales data (revealed preference, what students actually buy); (2) operator portal / app feedback (product requests, complaints, suggestions); (3) machine-side QR feedback (immediate response after transaction); (4) annual amenity surveys (strategic-level satisfaction). Combined, these produce a rich signal: where to place machines, what to stock, what prices to set, what brands to consider. The mistake most campuses make: relying only on annual surveys (which produce stale, generalized data 6-12 months after experience) or only on complaints (which surface negatives, not optimizations). Best-in-class campuses combine all four channels and review quarterly with operator. The revenue + satisfaction lift from structured feedback: 15-25% sales lift, 20-30% satisfaction improvement on amenity surveys.",
    bullets: [
      { emphasis: "Four feedback channels:", text: "Telemetry (revealed preference), operator portal (requests), machine QR (immediate), annual survey (strategic). Combined produces rich operational signal." },
      { emphasis: "Don't rely on annual surveys alone:", text: "Annual surveys produce stale, generalized data. Continuous feedback through telemetry + portal + QR catches optimization opportunities in real time." },
      { emphasis: "Revenue + satisfaction lift from feedback:", text: "Structured feedback produces 15-25% sales lift and 20-30% amenity satisfaction improvement vs feedback-poor programs. Worth structured investment." },
    ],
  }),
  statStrip({
    heading: "Campus vending feedback benchmarks",
    stats: [
      { number: "4", label: "feedback channels", sub: "telemetry, portal, QR, survey", accent: "blue" },
      { number: "Quarterly", label: "feedback review", sub: "with operator", accent: "blue" },
      { number: "+15-25%", label: "sales lift", sub: "structured feedback program", accent: "blue" },
      { number: "+20-30%", label: "satisfaction improvement", sub: "vs feedback-poor program", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Student vending feedback channels compared",
    sub: "Four channels with different strengths. Modern programs use all four; legacy programs use only one or two.",
    headers: ["Channel", "Data type", "Frequency", "Strategic vs operational"],
    rows: [
      ["Telemetry sales data", "Revealed preference (what students buy)", "Real-time, ongoing", "Operational (planogram, pricing)"],
      ["Operator portal / app feedback", "Product requests, complaints, suggestions", "Continuous", "Operational (SKU rotation, service)"],
      ["Machine-side QR feedback", "Immediate response after transaction", "Continuous", "Operational (specific issue)"],
      ["Annual amenity survey", "Satisfaction, perception, strategic preferences", "Annual", "Strategic (program direction)"],
      ["Focus groups (where used)", "Qualitative insight", "1-2× yearly", "Strategic (new initiatives)"],
    ],
  }),
  specList({
    heading: "Student vending feedback specifications",
    items: [
      { label: "Telemetry sales data analysis", value: "Operator provides per-SKU per-placement sales data monthly. Reveals: top SKUs, slow-movers, peak-demand windows, price-elasticity signals, allergen-restricted uptake. Most actionable feedback channel; modern operators have this natively." },
      { label: "Operator portal / app feedback", value: "Customer portal (Cantaloupe Pay, Nayax, USConnect) allows students to submit product requests, complaints, suggestions. Operator acknowledges within 24-48 hours; responds within 7-14 days. Modern best practice." },
      { label: "Machine-side QR feedback", value: "QR sticker on machine linking to operator feedback form. Customer scans, submits feedback. Visible eye-level placement on every machine. Often combined with refund and receipt QR codes." },
      { label: "Annual amenity survey integration", value: "Annual campus-wide amenity survey includes vending questions: satisfaction, planogram preferences, healthy-share preferences, accessibility, sustainability. Coordinate with institutional research; share data with operator quarterly." },
      { label: "Focus groups for new initiatives", value: "When considering significant changes (new placement, planogram pivot, brand partnership, sustainability initiative), focus groups with 8-12 students per group surface concerns and refine direction. 1-2× yearly maximum to avoid feedback fatigue." },
      { label: "Quarterly review with operator", value: "Auxiliary services + operator review feedback data quarterly. Identifies: SKU rotation candidates, placement optimization, pricing concerns, service issues, planogram refinement opportunities. Action items tracked across quarters." },
      { label: "Closing the loop with students", value: "When student feedback drives change (new SKU added, machine relocated, pricing adjusted), communicate the change back to students via student affairs channels. Closes feedback loop; builds trust; increases engagement." },
      { label: "Student affairs / wellness office coordination", value: "Student feedback that touches dietary restrictions, wellness, food security, or sustainability concerns coordinates with student affairs and wellness office. Cross-functional review identifies systemic patterns vs isolated requests." },
      { label: "Privacy + FERPA compliance", value: "Feedback data anonymized for analysis. Identifiable student data only with explicit consent and legitimate business need. FERPA applies when feedback ties to student records (e.g., wellness program participation)." },
    ],
  }),
  tipCards({
    heading: "Five student vending feedback mistakes",
    sub: "Each is documented in campus auxiliary services post-program reviews. All preventable with structured feedback program.",
    items: [
      { title: "Annual surveys as only feedback channel", body: "Annual surveys produce stale, generalized data 6-12 months after experience. Continuous feedback through telemetry + portal + QR catches optimization opportunities in real time. Don't rely on annual surveys alone." },
      { title: "Complaint-only feedback channel", body: "Feedback systems that only capture complaints surface negatives without optimization signals. Telemetry sales data and product requests reveal what's working, not just what's broken. Build all four channels into program." },
      { title: "No quarterly review with operator", body: "Feedback that doesn't get reviewed doesn't drive action. Quarterly auxiliary services + operator review identifies actionable patterns. Without review, feedback accumulates without changing the program." },
      { title: "Not closing the loop with students", body: "When student feedback drives change, communicate the change back via student affairs channels. Closes the loop; builds trust; encourages future feedback. Without loop closure, students stop engaging." },
      { title: "Skipping FERPA review", body: "Feedback that ties to student records (wellness participation, course enrollment) triggers FERPA. Work with general counsel before linking feedback to identifiable student data. Most programs skip this until legal flags it post-launch." },
    ],
  }),
  inlineCta({
    text: "Want the campus vending feedback framework (telemetry, portal, QR, survey, quarterly review)?",
    buttonLabel: "Get the feedback framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported campus vending feedback programs across telemetry-driven planogram refinement, operator portal integration, annual amenity surveys, and focus group facilitation. The feedback channel benchmarks reflect operator-side data and auxiliary services feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should we collect student feedback on campus vending?", answer: "Four channels: telemetry sales data (revealed preference), operator portal/app (product requests, complaints, suggestions), machine-side QR feedback (immediate response), annual amenity survey (strategic-level satisfaction). Modern programs use all four; legacy programs use only one or two.", audience: "Auxiliary Services" },
      { question: "Why isn't an annual amenity survey enough?", answer: "Annual surveys produce stale data 6-12 months after experience. Generalized; doesn't capture per-placement or per-SKU signal. Continuous feedback through telemetry + portal + QR catches optimization opportunities in real time. Annual surveys complement, don't replace.", audience: "Auxiliary Services" },
      { question: "What's telemetry sales data?", answer: "Per-SKU per-placement sales data from operator. Reveals: top SKUs, slow-movers, peak-demand windows, price-elasticity signals, allergen-restricted uptake. Most actionable feedback channel; modern operators provide monthly. Reflects revealed preference (what students actually buy), not stated preference.", audience: "Operators" },
      { question: "How do we get students to submit feedback?", answer: "Visible QR on machine + signage + operator portal awareness. Some campuses run annual feedback campaigns highlighting how to submit. Closing the loop (showing how feedback drove change) is the long-term driver of continued engagement.", audience: "Student Affairs" },
      { question: "Should we run focus groups?", answer: "1-2× yearly maximum, for significant initiatives (new placement, planogram pivot, brand partnership, sustainability initiative). 8-12 students per group. Beyond this cadence, feedback fatigue sets in. Quarterly review with operator handles ongoing optimization.", audience: "Auxiliary Services" },
      { question: "How often should we review feedback with operator?", answer: "Quarterly. Auxiliary services + operator review: SKU rotation candidates, placement optimization, pricing concerns, service issues, planogram refinement opportunities. Action items tracked across quarters. Without review, feedback accumulates without driving change.", audience: "Auxiliary Services" },
      { question: "What's the impact of structured feedback?", answer: "Structured feedback produces 15-25% sales lift and 20-30% amenity satisfaction improvement vs feedback-poor programs. Worth structured investment. Most of the lift comes from telemetry-driven planogram refinement and product-request-driven SKU additions.", audience: "Auxiliary Services" },
      { question: "What about FERPA and privacy?", answer: "Feedback data anonymized for analysis. Identifiable student data only with explicit consent and legitimate business need. FERPA applies when feedback ties to student records (e.g., wellness program participation). Work with general counsel before linking feedback to identifiable data.", audience: "Compliance" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NACAS — campus auxiliary services research", url: "https://www.nacas.org/", note: "Industry trade association covering campus amenity feedback practices" },
      { label: "Cantaloupe / Nayax / USConnect — customer feedback portals", url: "https://www.cantaloupe.com/", note: "Cashless platform vendors enabling structured feedback collection" },
      { label: "Educational Advisory Board — campus amenity research", url: "https://www.eab.com/", note: "Higher education research firm covering amenity feedback patterns" },
      { label: "FERPA — student record privacy", url: "https://studentprivacy.ed.gov/", note: "Federal privacy law governing student-record-linked feedback programs" },
      { label: "NAMA — vending operator customer-experience practice", url: "https://www.namanow.org/", note: "Industry guidance on customer feedback and request workflows" },
    ],
  }),
  relatedGuides({
    heading: "Related campus vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Optimize campus vending placement", description: "Full-campus placement strategy informed by feedback and telemetry data.", href: "/ai-vending-coolers/optimize-campus-vending-placement" },
      { eyebrow: "Operations", title: "Vending product trends for college", description: "Student-preference trends informed by feedback data, category evolution, and product mix.", href: "/ai-vending-coolers/vending-product-trends-college" },
      { eyebrow: "Hub", title: "All AI vending and campus guides", description: "Feedback, planogram, sustainability, wellness, and operator-side patterns at the campus tier.", href: "/ai-vending-coolers" },
    ],
  }),
]);
process.exit(0);
