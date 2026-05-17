import { seedPost, tldr, statStrip, specList, tipCards, timeline, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("employee-feedback-construction-vending", [
  tldr({
    heading: "How should construction site vending programs collect and act on crew feedback?",
    paragraph:
      "Crew feedback is the most under-used data input at construction-site vending programs. The standard pattern: passive feedback via QR-code on each machine (Google Forms or operator-native survey), monthly pulse surveys at site safety meetings (5-question form, anonymous), planogram suggestion box at site office trailer (paper or app-based), quarterly business review (operator + GC + crew representative review of feedback themes), and complaint tickets through site office or operator hotline. Construction crews particularly benefit from active feedback collection because crew composition shifts across phases (foundation / structure / finish), regional / cultural / dietary diversity is high (sub-contractors from multiple firms with varying crew backgrounds), and shift timing varies (early start crews vs late finish crews have different snack / drink preferences). Operator data layered on top: telemetry-driven SKU performance data (top sellers / bottom sellers / stockout patterns) plus payment-method mix patterns. Combining qualitative feedback with telemetry quantitative produces optimal planogram refinements — crew may suggest a new SKU (e.g., electrolyte drinks in summer), and telemetry validates demand at trial deployment. Best-practice operators run formal feedback cycles quarterly with planogram refinement deliverables; legacy operators don't collect feedback or collect it without acting. Verify operator capability at proposal — request sample feedback summary + planogram refinement deliverable from existing customer. Effective programs sustain 80%+ crew satisfaction scores, drive 10-25% revenue uplift vs feedback-uninformed planograms, and reduce off-site lunch trips by 15-30%.",
    bullets: [
      { emphasis: "Crew feedback is under-used at construction programs:", text: "Standard channels — QR-code on machines, monthly pulse surveys at safety meetings, planogram suggestion box at site office, quarterly business review, complaint tickets. Combine qualitative feedback with telemetry quantitative." },
      { emphasis: "Phase + sub-contractor diversity creates feedback complexity:", text: "Construction crews shift composition across foundation / structure / finish phases. Regional / cultural / dietary diversity high (sub-contractors from multiple firms). Active feedback drives phase-aware + culturally-fit planograms." },
      { emphasis: "Best-practice operators run quarterly feedback cycles:", text: "80%+ crew satisfaction sustained at structured programs. 10-25% revenue uplift vs feedback-uninformed planograms. 15-30% reduction in off-site lunch trips. Verify operator capability at proposal." },
    ],
  }),
  statStrip({
    heading: "Construction site crew feedback benchmarks",
    stats: [
      { number: "80%+", label: "crew satisfaction at structured programs", sub: "vs 50-65% at unstructured", accent: "blue" },
      { number: "10-25%", label: "revenue uplift", sub: "vs feedback-uninformed planograms", accent: "blue" },
      { number: "15-30%", label: "off-site lunch trip reduction", sub: "at structured feedback programs", accent: "blue" },
      { number: "Quarterly", label: "feedback cycle cadence", sub: "modern operator standard", accent: "blue" },
    ],
  }),
  specList({
    heading: "Construction site crew feedback specifications",
    items: [
      { label: "Passive feedback via QR-code on each machine", value: "QR-code sticker at each machine linking to Google Forms or operator-native survey. 3-5 questions — overall satisfaction, last purchase satisfaction, SKU suggestions, machine condition. Anonymous. Modern operators surface QR-code response data at operator dashboard; GC portal access at quarterly business review." },
      { label: "Monthly pulse surveys at site safety meetings", value: "5-question form distributed at monthly site safety meeting (required attendance for all crew). Anonymous. Captures phase-specific feedback — crew composition shifts across foundation / structure / finish phases produce different snack / drink preferences. Operator collates responses across phases for trend analysis." },
      { label: "Planogram suggestion box at site office trailer", value: "Paper-based or app-based suggestion submission at site office trailer. Reviewed at weekly site safety meeting; relayed to operator at biweekly check-in. Drives crew engagement (crew sees their suggestions tested at vending). Effective programs validate 30-50% of suggestions via trial SKU deployment with telemetry monitoring." },
      { label: "Quarterly business review with feedback theme summary", value: "Operator + GC + crew representative review of feedback themes. Operator presents feedback summary (themes, top suggestions, planogram refinements made, refinements pending). GC + crew representative validate feedback themes. Drives planogram refinement deliverables." },
      { label: "Complaint tickets through site office or operator hotline", value: "Standard support channel for service issues — machine malfunction, refund disputes, payment hardware issues, food-safety concerns. Site office routes to operator; operator hotline accepts direct crew complaints. SLA — initial response 4 hours, resolution 24-48 hours. Tracked at quarterly business review." },
      { label: "Telemetry-driven SKU performance data overlay", value: "Operator telemetry data layered on top of crew feedback. Top sellers / bottom sellers / stockout patterns. Combine qualitative feedback (crew suggests SKU) with telemetry quantitative (validate demand at trial deployment). Optimal planogram refinement comes from combining both data sources." },
      { label: "Phase + sub-contractor crew composition awareness", value: "Construction crews shift composition across foundation / structure / finish phases. Regional / cultural / dietary diversity high (sub-contractors from multiple firms). Operator should refine planogram at phase transitions using feedback + telemetry data. 10-25% revenue uplift vs generic planogram." },
      { label: "Cultural + dietary diversity coverage", value: "Sub-contractor crews often include immigrant / minority workers with cultural / dietary preferences. Halal-certified SKUs (IFANCA), kosher (OU / Star-K), vegetarian / vegan SKUs, regional preferences (e.g., Latin American snacks at construction sites with Latino crew majority). Feedback drives coverage; operator sourcing capability matters." },
      { label: "Feedback action loop + transparency", value: "Crew feedback acted upon visibly — operator + GC publish planogram refinements at quarterly business review. Crew sees suggestions tested at vending; sustains feedback engagement. Without action loop, crew feedback collapses (response rate drops 50%+ within 6 months of inaction). Modern operators have native action loop discipline." },
    ],
  }),
  timeline({
    heading: "Construction site crew feedback cycle (quarterly)",
    sub: "Standard quarterly cycle from feedback collection to planogram refinement deployment.",
    howToName: "Crew feedback cycle",
    totalTime: "90 days",
    steps: [
      { label: "Days 1-30", title: "Passive + active feedback collection", description: "QR-code responses captured continuously. Monthly pulse survey at site safety meeting. Planogram suggestion box reviewed weekly at site office. Complaint tickets routed through site office or operator hotline." },
      { label: "Days 31-60", title: "Feedback theme analysis + telemetry overlay", description: "Operator collates feedback responses, identifies themes (top requests, complaint patterns, phase-specific preferences). Telemetry data overlay — SKU performance, stockout patterns, payment-method mix. Combine qualitative + quantitative for planogram refinement candidates." },
      { label: "Days 61-75", title: "Quarterly business review presentation", description: "Operator presents feedback theme summary + planogram refinement candidates to GC + crew representative. Discussion on phase-specific refinements (e.g., electrolyte drinks heavier at summer foundation phase). Refinement priorities set; trial SKU deployment plan agreed." },
      { label: "Days 76-83", title: "Planogram refinement deployment", description: "Operator deploys planogram refinements at next service visit. Trial SKUs deployed at 1-2 machines for telemetry validation; full deployment after 2-4 week trial if demand confirms. Signage / touchscreen surface updated to highlight new SKUs." },
      { label: "Days 84-90", title: "Refinement performance monitoring + cycle close", description: "Telemetry monitors trial SKU performance over 2-4 weeks. Successful SKUs deploy to all machines; underperforming SKUs revert. Cycle closes with refinement results documented. Next quarterly cycle begins." },
    ],
  }),
  tipCards({
    heading: "Five construction site crew feedback patterns",
    sub: "Documented across construction-specialty operator deployments. All reflect modern feedback discipline.",
    items: [
      { title: "Combine qualitative feedback with telemetry quantitative", body: "Crew suggests SKU (e.g., electrolyte drinks in summer) — telemetry validates demand at trial deployment. Without telemetry, crew suggestions deploy without performance validation; underperformers persist. Modern operators native combine both data sources." },
      { title: "Run feedback cycles quarterly with refinement deliverables", body: "Quarterly cadence aligns with planogram refinement timing. Operator presents feedback summary + refinements at quarterly business review. Without action loop, crew feedback collapses (response rate drops 50%+ within 6 months of inaction). Specify cadence + deliverables in contract." },
      { title: "Refine planogram at phase transitions", body: "Crew composition shifts across foundation / structure / finish phases. Refine planogram at each phase transition using feedback + telemetry data. 10-25% revenue uplift vs generic planogram. Operator should surface phase-aware refinement deliverables; legacy operators run generic planograms across phases." },
      { title: "Cover cultural + dietary diversity actively", body: "Sub-contractor crews often include immigrant / minority workers with cultural / dietary preferences. Halal, kosher, vegetarian, vegan, regional SKUs. Feedback channels surface preferences; operator sourcing capability matters. Verify at proposal — does operator source halal-certified SKUs at scale?" },
      { title: "Publish action loop transparency", body: "Crew sees suggestions tested at vending — sustains feedback engagement. Publish refinement results at site office / safety meeting. Without visible action loop, crew feedback collapses. Modern operators native action loop discipline; legacy operators collect feedback without acting." },
    ],
  }),
  keyTakeaways({
    takeaways: [
      "Crew feedback is the most under-used data input at construction-site vending programs. Standard channels — QR-code on machines, monthly pulse surveys, planogram suggestion box, quarterly business review, complaint tickets.",
      "Combine qualitative crew feedback with telemetry quantitative data for optimal planogram refinements. Crew suggests SKU; telemetry validates demand at trial deployment.",
      "Best-practice operators run quarterly feedback cycles with planogram refinement deliverables. 80%+ crew satisfaction sustained; 10-25% revenue uplift vs feedback-uninformed planograms.",
      "Construction crews shift composition across foundation / structure / finish phases; refine planogram at each phase transition. 10-25% revenue uplift vs generic planogram.",
      "Cover cultural + dietary diversity actively — halal, kosher, vegetarian, vegan, regional SKUs. Verify operator sourcing capability at proposal.",
    ],
  }),
  inlineCta({
    text: "Want the construction site crew feedback framework (QR-code + pulse surveys + suggestion box + quarterly review + telemetry overlay)?",
    buttonLabel: "Get the feedback framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise on construction site vending crew feedback program design — including passive QR-code feedback, monthly pulse surveys at site safety meetings, planogram suggestion box management, quarterly business review structure, telemetry overlay, and phase-aware + culturally-aware planogram refinement. The benchmarks reflect operator-side feedback data from construction-specialty deployments and GC + crew representative input.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How should construction site vending collect crew feedback?", answer: "Standard channels — QR-code on each machine, monthly pulse surveys at site safety meetings, planogram suggestion box at site office, quarterly business review with crew representative, complaint tickets through site office or operator hotline. Combine qualitative feedback with telemetry quantitative for optimal planogram refinements.", audience: "GCs" },
      { question: "Why is crew feedback important at construction sites?", answer: "Crew composition shifts across foundation / structure / finish phases. Regional / cultural / dietary diversity high (sub-contractors from multiple firms with varying crew backgrounds). Shift timing varies (early start vs late finish crews). Active feedback drives phase-aware + culturally-fit planograms producing 10-25% revenue uplift vs generic.", audience: "GCs" },
      { question: "How often should feedback cycles run?", answer: "Quarterly cadence at modern operators. Aligns with planogram refinement timing. Operator presents feedback summary + refinements at quarterly business review. Specify cadence + deliverables in contract; without action loop, crew feedback collapses (response rate drops 50%+ within 6 months of inaction).", audience: "Operators" },
      { question: "How do we combine feedback with telemetry data?", answer: "Crew suggests SKU (qualitative); telemetry validates demand at trial deployment (quantitative). Optimal planogram refinement combines both. Trial SKUs deployed at 1-2 machines for 2-4 week telemetry validation; full deployment after demand confirms.", audience: "Operators" },
      { question: "What about cultural + dietary diversity?", answer: "Sub-contractor crews often include immigrant / minority workers with cultural / dietary preferences — halal-certified SKUs (IFANCA), kosher (OU / Star-K), vegetarian / vegan SKUs, regional preferences (Latin American snacks at sites with Latino crew majority). Feedback drives coverage; verify operator sourcing capability at proposal.", audience: "GCs" },
      { question: "What does an effective crew satisfaction score look like?", answer: "80%+ at structured programs (vs 50-65% at unstructured). Measured via QR-code passive feedback + monthly pulse survey + quarterly business review. Sustained 80%+ correlates with 10-25% revenue uplift and 15-30% off-site lunch trip reduction.", audience: "GCs" },
      { question: "What's the operator hotline SLA?", answer: "Standard support channel for service issues — machine malfunction, refund disputes, payment hardware issues, food-safety concerns. SLA — initial response 4 hours, resolution 24-48 hours. Tracked at quarterly business review. Specify in contract.", audience: "Procurement" },
      { question: "How do we verify operator feedback discipline at proposal?", answer: "Request sample feedback summary + planogram refinement deliverable from existing customer. Verify quarterly cadence is native to operator. Legacy operators may not have feedback collection capability or may collect without acting; eliminate at proposal review.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "AGC — Associated General Contractors of America", url: "https://www.agc.org/", note: "Industry trade association covering construction-site amenity programs and crew satisfaction" },
      { label: "OSHA — workplace safety + amenity standards", url: "https://www.osha.gov/", note: "Federal workplace safety governing construction-site amenities and crew well-being" },
      { label: "NAMA — vending operations + customer feedback guidance", url: "https://www.namanow.org/", note: "Industry association covering vending feedback collection and planogram refinement standards" },
      { label: "CDC NIOSH — Total Worker Health", url: "https://www.cdc.gov/niosh/twh/", note: "Federal guidance on worker health programs at construction sites including nutrition and amenity access" },
      { label: "Cantaloupe — vending feedback + telemetry overlay", url: "https://www.cantaloupe.com/", note: "Vending operator platform with crew feedback collection and telemetry overlay capabilities" },
    ],
  }),
  relatedGuides({
    heading: "Related construction site vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Data-driven vending construction", description: "Telemetry, anomaly detection, route optimization, and GC portal access at construction sites.", href: "/vending-for-construction-sites/data-driven-vending-construction" },
      { eyebrow: "Operations", title: "Snack vending for construction workers", description: "Planogram fit for crew preferences, allergen coverage, and phase-aware refinement.", href: "/vending-for-construction-sites/snack-vending-for-construction-workers" },
      { eyebrow: "Hub", title: "All construction-site vending guides", description: "Equipment, planogram, security, placement, payment, and operations for construction and industrial placements.", href: "/vending-for-construction-sites" },
    ],
  }),
]);
process.exit(0);
