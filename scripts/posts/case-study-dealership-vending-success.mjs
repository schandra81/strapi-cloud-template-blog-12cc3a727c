import { seedPost, tldr, statStrip, caseStudy, specList, tipCards, testimonial, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("case-study-dealership-vending-success", [
  tldr({
    heading: "How does a structured dealership vending program perform vs ad-hoc placement?",
    paragraph:
      "A multi-franchise auto dealership (75K sq ft showroom + service drive + 14-bay service center, 45 sales staff, 35 service technicians, 110+ customers per day in service waiting area) deployed a structured vending program after 14 months of basic snack-and-soda placement underperformance. Approach: 1 premium beverage merchandiser + 1 snack / combo unit + 1 dedicated water cooler in customer waiting area (visible from service-advisor desks), 1 healthier-snack-skewed combo in technician break room, 1 coffee + specialty beverage station at sales floor (visible to customers + staff), cellular telemetry on all units, EMV + contactless + Apple Pay / Google Pay across all units, 'complimentary' tagged SKUs for service customers (cost-recovered via service ticket), allergen-restricted formats (15% of planogram covering customer + tech dietary diversity), branded wraps coordinated with dealership marketing. Results: $38K cumulative gross revenue over 18 months (vs projected $11K under prior ad-hoc), $6.8K dealership commission revenue, customer experience uplift (service-customer survey reflects waiting-area amenity improvement), 0.4% theft rate (vs 2-3% under ad-hoc), measurable bump in service-customer satisfaction score (CSI). The case reflects dealership vending best practice — customer-facing premium equipment, staff-facing healthier-skew break room, coffee + specialty at sales floor, complimentary-tag patterns, cellular telemetry, branded wraps.",
    bullets: [
      { emphasis: "$38K cumulative revenue over 18 months (vs $11K ad-hoc):",
        text: "3.5× revenue lift with structured program. Customer-facing premium + staff-skewed break-room + coffee at sales floor drove uplift. Complimentary-tag patterns supported service-customer experience." },
      { emphasis: "Measurable customer satisfaction uplift:",
        text: "Service-customer survey reflects waiting-area amenity improvement. CSI score bump documented. Supports business case for vending retention at multi-franchise rollouts." },
      { emphasis: "0.4% theft rate (vs 2-3% ad-hoc):",
        text: "Cellular telemetry + customer-facing visible placement + service-advisor desk oversight drove theft rate well below ad-hoc baseline. Branded wraps additionally reduced anonymous-machine targeting.", },
    ],
  }),
  statStrip({
    heading: "Dealership vending benchmarks",
    stats: [
      { number: "$38K", label: "cumulative gross revenue", sub: "18 months structured vs $11K ad-hoc", accent: "blue" },
      { number: "3.5×", label: "revenue lift", sub: "structured program vs ad-hoc baseline", accent: "blue" },
      { number: "0.4%", label: "theft rate", sub: "vs 2-3% under ad-hoc placement", accent: "blue" },
      { number: "CSI bump", label: "customer satisfaction uplift", sub: "service-customer survey", accent: "blue" },
    ],
  }),
  caseStudy({
    tag: "Dealership vending success",
    title: "Multi-franchise dealership — structured program produces 3.5× revenue + CSI uplift over 18 months",
    context: "75K sq ft showroom + service drive + 14-bay service center, multi-franchise auto dealership. 45 sales staff, 35 service technicians, 110+ customers daily in service waiting area. Pre-implementation (months 1-14): ad-hoc vending placement — 2 standard snack-and-soda machines in service waiting area, 1 in tech break room. No telemetry, no payment-stack modernization, no allergen-restricted SKUs, no customer-facing premium equipment, basic branded wraps. Frequent stockouts (5-10% rate), refund disputes, theft / vandalism at 2-3% revenue. GM initiated structured operator transition at month 14; 18-month structured program followed.",
    meta: [
      { label: "Dealership scope", value: "75K sq ft showroom + service drive + 14-bay service center, 45 sales staff, 35 service techs, 110+ customers daily" },
      { label: "Pre-implementation baseline", value: "Ad-hoc placement, $11K projected revenue, 2-3% theft rate, 5-10% stockout rate, frequent refund disputes" },
      { label: "Structured program scope", value: "5 units — 1 premium beverage merchandiser + 1 snack/combo + 1 water cooler (customer waiting) + 1 tech break-room combo + 1 coffee/specialty station (sales floor)" },
      { label: "Structured capability stack", value: "Cellular telemetry, EMV + contactless + mobile-wallet payment, complimentary-tag patterns for service customers, allergen-restricted formats (15% planogram), branded wraps coordinated with dealership marketing" },
    ],
    results: [
      { metric: "$38K", description: "Cumulative gross revenue over 18 months of structured program (vs $11K projected under ad-hoc continuation). 3.5× revenue lift driven by customer-facing premium beverage merchandiser + staff-skewed break-room + coffee at sales floor." },
      { metric: "$6.8K", description: "Dealership commission revenue at 18% tiered commission structure. Offsets customer-amenity cost line in dealership budget. Modern operator monthly itemized statement with telemetry-backed dispense data; verifiable in operator portal." },
      { metric: "0.4%", description: "Theft rate under structured program (vs 2-3% ad-hoc). Cellular telemetry + customer-facing visible placement + service-advisor desk oversight drove improvement. Branded wraps additionally reduced anonymous-machine targeting." },
      { metric: "CSI uplift", description: "Service-customer survey reflects waiting-area amenity improvement. Customer Satisfaction Index (CSI) score bump documented. Supports business case for vending retention at multi-franchise rollouts." },
      { metric: "5-10% → 1.5%", description: "Stockout rate reduction. Cellular telemetry + responsive service routing (under 24-48 hours from low-stock alert) drove improvement. Modern operator standard; legacy operators don't reach this performance." },
      { metric: "Allergen-restricted 15%", description: "Planogram share — gluten-free, nut-free, vegan, lactose-free SKUs. Covers customer + tech dietary diversity. FDA top 9 allergens labeled per regulation. Service customers report positive on allergen options availability." },
    ],
  }),
  testimonial({
    quote: "We treated vending as background until our operator switch. Now the customer waiting area feels intentional — a beverage merchandiser visible from the service-advisor desk, allergen-friendly options for everyone, and clean branded wraps. Our CSI scores moved on the waiting-area amenity questions, and the revenue caught us off guard.",
    name: "General Manager",
    role: "Multi-franchise auto dealership (case study composite)",
  }),
  specList({
    heading: "Dealership vending program specifications",
    items: [
      { label: "Customer-facing premium beverage merchandiser", value: "Visible from service-advisor desks; standard at modern dealerships. Premium glass-front beverage merchandiser with bottled water, premium juice, premium soda, energy drinks, premium iced tea / coffee. ENERGY STAR; cellular telemetry. Branded wrap coordinated with dealership marketing." },
      { label: "Service waiting area combo + water cooler", value: "Snack / combo unit + dedicated water cooler in service waiting area. Combo unit covers shelf-stable + refrigerated SKUs. Water cooler reduces single-use plastic + supports customer hospitality. Both visible from service-advisor desks for oversight." },
      { label: "Tech break room healthier-skew combo", value: "Combo unit in tech break room with healthier-skewed planogram (granola, jerky, protein bars, lower-sugar beverages). Tech population skews healthier than service-customer hospitality skew. Same operator + telemetry + payment-stack; different planogram." },
      { label: "Coffee + specialty beverage station at sales floor", value: "Visible to customers + staff at sales floor. Single-cup or commercial brewer coffee + specialty beverage (cappuccino, latte, hot chocolate). Premium customer hospitality. Coordinated with sales-team service practice; cost typically absorbed by dealership marketing budget." },
      { label: "Cellular telemetry on all units", value: "100% telemetry coverage via cellular (Cantaloupe / Nayax / USConnect or similar). Real-time data — revenue, transactions, stockouts, service tickets, refrigeration. Anomaly detection. No dealership Wi-Fi dependence. Modern operator standard." },
      { label: "Modern payment stack on all units", value: "EMV + contactless + mobile-wallet (Apple Pay, Google Pay). Customer-facing equipment increasingly cashless; service-customer demographic 70-85% cashless at modern dealerships. Tech break room mix similar. Modern operator standard." },
      { label: "Complimentary-tag SKU patterns for service customers", value: "Selected SKUs tagged 'complimentary' for service customers — service-ticket bar code activates vend at zero customer cost; dealership cost-recovered via service ticket line item. Modern customer-experience pattern. Coordinate with service-advisor desk + operator on dispense protocol." },
      { label: "Allergen-restricted planogram (15%)", value: "Gluten-free, nut-free, vegan, lactose-free SKUs in 15% of planogram. Covers customer + tech dietary diversity. FDA top 9 allergens labeled per regulation. Service customers report positive on allergen options availability." },
      { label: "Branded wraps coordinated with dealership marketing", value: "Coordinated wrap design with dealership marketing team. Brand consistency across customer-facing equipment. Wraps additionally reduce anonymous-machine targeting (theft / vandalism). Operator coordinates production + install; refresh at planogram cycle (~ 2 years)." },
    ],
  }),
  tipCards({
    heading: "Five dealership vending success patterns",
    sub: "Each is reflected in the case study and represents dealership best practice.",
    items: [
      { title: "Customer-facing premium beverage merchandiser", body: "Visible from service-advisor desks; standard at modern dealerships. Premium glass-front beverage merchandiser supports customer hospitality narrative + drives waiting-area CSI. Distinguishes service-customer experience from ad-hoc snack-and-soda placement." },
      { title: "Complimentary-tag SKUs for service customers", body: "Selected SKUs tagged 'complimentary' — service-ticket bar code activates vend at zero customer cost; dealership cost-recovered via service ticket. Modern customer-experience pattern. Coordinates with service-advisor desk + operator on dispense protocol." },
      { title: "Tech break room healthier-skew planogram", body: "Tech population skews healthier than service-customer hospitality. Different planogram (granola, jerky, protein bars, lower-sugar) at tech break room. Same operator + telemetry + payment-stack; planogram differentiated." },
      { title: "Cellular telemetry + responsive service routing", body: "5-10% stockout rate (ad-hoc) reduced to 1.5% (structured) with cellular telemetry + responsive service routing (under 24-48 hours from low-stock alert). Modern operator standard. Customer experience suffers at stockouts; telemetry catches before customer impact." },
      { title: "Branded wraps coordinated with dealership marketing", body: "Coordinated wrap design with dealership marketing. Brand consistency across customer-facing equipment. Wraps additionally reduce anonymous-machine targeting (theft / vandalism). Operator coordinates production + install; refresh at planogram cycle." },
    ],
  }),
  inlineCta({
    text: "Want the dealership vending program framework (customer-facing premium + complimentary-tag + telemetry + branded wraps)?",
    buttonLabel: "Get the dealership framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported dealership vending program design across multi-franchise auto, motorcycle, and RV dealership accounts — including customer-facing premium beverage merchandiser specification, complimentary-tag SKU protocols with service-advisor desks, tech break-room planogram differentiation, branded wrap coordination with dealership marketing, and cellular telemetry deployment. The case study benchmarks reflect operator-side data + dealership GM + CSI survey feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does a successful dealership vending program look like?", answer: "Customer-facing premium beverage merchandiser visible from service-advisor desks, snack / combo + water cooler in service waiting area, tech break-room healthier-skew combo, coffee + specialty beverage station at sales floor, cellular telemetry across all units, modern payment stack, complimentary-tag SKUs for service customers, allergen-restricted formats, branded wraps. Structured programs produce 3-4× revenue + CSI uplift vs ad-hoc placement.", audience: "Dealership GMs" },
      { question: "How much revenue should a dealership vending program produce?", answer: "Varies by customer traffic + tech count + program quality. Mid-size dealership (40-60 sales + 25-40 tech + 100+ customers daily): $25-50K cumulative revenue over 18-24 months typical at structured program. Per-unit per-month: $1-4K at customer-facing premium beverage merchandiser, $0.5-2K at tech break room.", audience: "Dealership GMs" },
      { question: "Should we tag SKUs as complimentary for service customers?", answer: "Yes, at modern dealerships. Selected SKUs tagged 'complimentary' — service-ticket bar code activates vend at zero customer cost; dealership cost-recovered via service ticket line item. Supports customer-hospitality narrative + CSI score. Coordinate with service-advisor desk + operator on dispense protocol.", audience: "Service Managers" },
      { question: "What about the tech break room?", answer: "Healthier-skew planogram at tech break room — granola, jerky, protein bars, lower-sugar beverages. Tech population skews healthier than service-customer hospitality. Same operator + telemetry + payment-stack; planogram differentiated. Coordinate at install + at quarterly planogram refresh.", audience: "Service Managers" },
      { question: "Do we need branded wraps?", answer: "Modern dealership standard. Coordinated wrap design with dealership marketing. Brand consistency across customer-facing equipment supports CSI + customer experience. Wraps additionally reduce anonymous-machine targeting (theft / vandalism). Operator coordinates production + install.", audience: "Marketing" },
      { question: "What about theft and vandalism?", answer: "0.4% theft rate typical at structured programs (vs 2-3% under ad-hoc). Cellular telemetry + customer-facing visible placement + service-advisor desk oversight drives improvement. Branded wraps additionally reduce anonymous-machine targeting. Modern operator standard.", audience: "Operations Managers" },
      { question: "How do CSI scores move with vending?", answer: "Customer-facing premium beverage merchandiser + complimentary-tag SKUs + water cooler + clean branded wraps move waiting-area amenity questions. Service-customer survey reflects improvement. Bump in CSI score documented at structured programs. Supports business case for vending retention at multi-franchise rollouts.", audience: "Dealership GMs" },
      { question: "Which operators support dealership programs?", answer: "Modern dealership-experienced operators with customer-facing premium beverage merchandiser fleet + cellular telemetry + modern payment stack + complimentary-tag dispense protocol + branded wrap coordination. Legacy operators stuck with snack-and-soda placement lag. Verify at proposal demo + reference checks.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NADA — National Automobile Dealers Association", url: "https://www.nada.org/", note: "Industry trade association covering dealership operations + customer experience" },
      { label: "J.D. Power — Customer Satisfaction Index (CSI)", url: "https://www.jdpower.com/business/automotive/customer-satisfaction-index-csi", note: "Industry standard customer satisfaction measurement at dealerships" },
      { label: "FDA — vending machine labeling requirements", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/vending-machine-labeling-requirements", note: "Federal labeling compliance applicable to dealership vending" },
      { label: "AIADA — American International Automobile Dealers", url: "https://www.aiada.org/", note: "Industry trade association covering import dealership operations" },
      { label: "NAMA — dealership and waiting-area vending practice", url: "https://www.namanow.org/", note: "Industry guidance on dealership vending operations" },
    ],
  }),
  relatedGuides({
    heading: "Related dealership vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Beverage vending in dealership waiting areas", description: "Premium beverage merchandiser, water cooler, and complimentary-tag patterns at customer-facing placements.", href: "/vending-for-dealerships/beverage-vending-in-dealership-waiting-areas" },
      { eyebrow: "Operations", title: "Dealership vending placement flow", description: "Customer-facing vs staff-facing zoning, service-advisor coordination, and brand-wrap patterns.", href: "/vending-for-dealerships/dealership-vending-placement-flow" },
      { eyebrow: "Hub", title: "All dealership vending guides", description: "Equipment, customer experience, branded wraps, complimentary-tag protocols, and operations at dealerships.", href: "/vending-for-dealerships" },
    ],
  }),
]);
process.exit(0);
