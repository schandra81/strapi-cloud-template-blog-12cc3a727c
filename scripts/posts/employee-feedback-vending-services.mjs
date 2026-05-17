import { seedPost, tldr, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("employee-feedback-vending-services", [
  tldr({
    heading: "How should we collect employee feedback on vending services?",
    paragraph:
      "Employee feedback on workplace vending drives planogram refinement, service quality improvement, and amenity satisfaction. The four channels that produce useful data: (1) telemetry sales data (revealed preference, what employees buy), (2) operator portal / app feedback (product requests, complaints, suggestions), (3) machine-side QR feedback (immediate response after transaction), (4) annual employee survey (strategic-level satisfaction). Combined produces rich signal. Most companies rely only on annual surveys (stale data 6-12 months after experience) or complaints (negatives, not optimization). Best-in-class companies combine all four + quarterly review with operator. Coordinate with HR + facilities. Wellness program integration adds another channel (wellness platform feedback connects to vending healthy-choice patterns). The revenue + satisfaction lift from structured feedback: 15-25% improvement on amenity satisfaction scores; modest revenue lift via planogram refinement. Worth the structured investment.",
    bullets: [
      { emphasis: "Four channels: telemetry + portal + QR + survey:", text: "Combined produces rich signal. Most companies rely on annual surveys alone — stale data 6-12 months after experience. Modern best practice combines all four." },
      { emphasis: "Coordinate with HR + facilities:", text: "Employee feedback routes through HR or facility manager. Operator account manager coordinates response + corrective action. Quarterly business review aligns feedback to operations." },
      { emphasis: "+15-25% amenity satisfaction lift:", text: "Structured feedback program produces measurable amenity satisfaction improvement. Combined with planogram refinement, drives modest revenue lift." },
    ],
  }),
  specList({
    heading: "Employee vending feedback specifications",
    items: [
      { label: "Telemetry sales data", value: "Operator provides per-SKU per-machine sales data monthly. Reveals revealed preference — what employees actually buy. Identifies top SKUs, slow movers, peak demand windows, allergen-restricted uptake. Most actionable feedback channel; modern operators provide natively." },
      { label: "Operator portal / app feedback", value: "Customer portal (Cantaloupe Pay, Nayax, USConnect) allows employees to submit product requests, complaints, suggestions. Operator acknowledges within 24-48 hours; responds within 7-14 days. Build into operator contract." },
      { label: "Machine-side QR feedback", value: "QR sticker on machine linking to operator feedback form. Employee scans, submits feedback. Visible eye-level placement on every machine. Often combined with refund + receipt QR codes. Immediate-response feedback after transaction." },
      { label: "Annual employee survey integration", value: "Annual employee satisfaction survey includes vending questions: amenity satisfaction, planogram preferences, healthy-choice preferences, accessibility, dietary inclusion. Coordinate with HR on survey design. Share results with operator quarterly." },
      { label: "Wellness program integration", value: "Wellness platform (Virgin Pulse, Limeade, Castlight) feedback connects to vending healthy-choice patterns. Healthy-SKU uptake by wellness-program participants. Healthy / unhealthy ratio trends. Coordinate with HR / benefits office on integration." },
      { label: "Quarterly business review", value: "HR + facility manager + operator account manager review quarterly. Performance trends, feedback themes, planogram refinement opportunities, service quality. Action items tracked across quarters. Modern best practice." },
      { label: "Closing the loop with employees", value: "When employee feedback drives change (new SKU added, machine relocated, pricing adjusted), communicate change back via HR / facilities channels. Closes feedback loop; builds trust; increases engagement. Without loop closure, employees stop engaging." },
      { label: "Confidentiality + appropriate scope", value: "Feedback channel is for vending experience, not employment issues. Operator handles vending-relevant feedback; HR handles employment concerns. Maintain appropriate scope; don't conflate channels." },
      { label: "Multi-language support at diverse workplaces", value: "Diverse workplaces benefit from multi-language feedback forms. Spanish, Mandarin, Hindi at workplaces with substantial non-English-speaking population. Coordinate with HR on supported languages.", },
    ],
  }),
  tipCards({
    heading: "Five employee vending feedback mistakes",
    sub: "Each is documented in workplace post-implementation reviews. All preventable with structured feedback program.",
    items: [
      { title: "Annual survey as only feedback channel", body: "Annual surveys produce stale data 6-12 months after experience. Generalized; doesn't capture per-machine or per-SKU signal. Continuous feedback through telemetry + portal + QR catches optimization opportunities in real time. Combine multiple channels." },
      { title: "Complaint-only feedback", body: "Feedback systems that only capture complaints surface negatives without optimization signals. Telemetry sales data + product requests reveal what's working, not just what's broken. Build all four channels into program." },
      { title: "No quarterly review with operator", body: "Feedback that doesn't get reviewed doesn't drive action. Quarterly HR + facility manager + operator review identifies actionable patterns. Without review, feedback accumulates without changing the program." },
      { title: "Not closing the loop with employees", body: "When employee feedback drives change, communicate back via HR / facilities channels. Closes the loop; builds trust; encourages future feedback. Without loop closure, employees stop engaging — program produces less data over time." },
      { title: "Conflating vending feedback with HR feedback", body: "Vending feedback channel for vending experience; HR channel for employment issues. Conflating produces inappropriate scope creep and undermines both channels. Maintain appropriate boundaries; coordinate operator + HR appropriately.", },
    ],
  }),
  inlineCta({
    text: "Want the employee vending feedback framework (four channels + quarterly review + wellness integration)?",
    buttonLabel: "Get the feedback framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported employee vending feedback programs across small office, mid-size enterprise, and large enterprise accounts — including telemetry-driven sales analysis, operator portal integration, machine-side QR feedback, annual survey coordination, and wellness platform integration. The benchmarks reflect operator-side data and HR / facility manager feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should we collect employee feedback on vending?", answer: "Four channels: telemetry sales data (revealed preference), operator portal / app (product requests, complaints, suggestions), machine-side QR feedback (immediate after transaction), annual employee survey (strategic-level satisfaction). Modern best practice combines all four; legacy programs rely on annual survey alone.", audience: "HR / Facilities" },
      { question: "Why isn't an annual survey enough?", answer: "Annual surveys produce stale data 6-12 months after experience. Generalized; doesn't capture per-machine or per-SKU signal. Continuous feedback through telemetry + portal + QR catches optimization opportunities in real time. Annual surveys complement, don't replace, continuous feedback.", audience: "HR / Facilities" },
      { question: "What's telemetry sales data?", answer: "Per-SKU per-machine sales data from operator. Reveals revealed preference — what employees actually buy. Identifies top SKUs, slow movers, peak demand windows, allergen-restricted uptake. Most actionable feedback channel; modern operators provide monthly.", audience: "Operators" },
      { question: "How do we get employees to submit feedback?", answer: "Visible QR on machine + signage + operator portal awareness. Some companies run annual feedback campaigns highlighting how to submit. Closing the loop (showing how feedback drove change) is the long-term driver of continued engagement.", audience: "HR" },
      { question: "Should we integrate vending feedback with wellness?", answer: "At workplaces with wellness programs yes. Wellness platform feedback connects to vending healthy-choice patterns. Healthy-SKU uptake by wellness-program participants. Coordinate with HR / benefits office on integration; build into wellness program design.", audience: "Wellness Officers" },
      { question: "How often should we review feedback with operator?", answer: "Quarterly. HR + facility manager + operator account manager review trends, themes, planogram refinement opportunities, service quality. Action items tracked across quarters. Modern best practice; without review, feedback accumulates without driving change.", audience: "HR / Facilities" },
      { question: "What's the impact of structured feedback?", answer: "+15-25% amenity satisfaction improvement vs feedback-poor programs. Combined with planogram refinement, drives modest revenue lift. Worth the structured investment; most of the lift comes from telemetry-driven planogram refinement + product-request-driven SKU additions.", audience: "HR / Facilities" },
      { question: "Should we ask HR to handle all complaints?", answer: "No. Maintain appropriate scope: vending feedback channel for vending experience; HR channel for employment issues. Conflating produces inappropriate scope creep and undermines both channels. Operator handles vending-relevant feedback; HR handles employment concerns.", audience: "HR" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SHRM — Society for Human Resource Management", url: "https://www.shrm.org/", note: "HR industry standards covering employee feedback programs" },
      { label: "WELCOA — Wellness Council of America", url: "https://www.welcoa.org/", note: "Industry trade association covering workplace wellness program design" },
      { label: "Cantaloupe / Nayax / USConnect — customer feedback portals", url: "https://www.cantaloupe.com/", note: "Cashless platform customer portals supporting feedback workflow" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering amenity feedback" },
      { label: "NAMA — vending operator customer-experience practice", url: "https://www.namanow.org/", note: "Industry guidance on customer feedback workflows" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Can employees request products in vending?", description: "Employee product request workflows + operator coordination.", href: "/vending-faq/can-employees-request-products-in-vending" },
      { eyebrow: "Operations", title: "Measure vending machine performance", description: "Five performance dimensions + monthly reporting + quarterly review.", href: "/vending-Info-for-businesses/measure-vending-machine-performance" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Employee feedback, performance measurement, vendor selection, and operations.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
