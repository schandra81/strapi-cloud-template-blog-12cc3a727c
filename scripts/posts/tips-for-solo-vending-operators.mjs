import { seedPost, tldr, statStrip, specList, tipCards, decisionTree, timeline, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("tips-for-solo-vending-operators", [
  tldr({
    heading: "What do solo vending operators actually need to know to run a sustainable single-person route?",
    paragraph:
      "Solo vending operator success is a function of route density (drive-time as a percentage of working hours), placement quality (high-velocity wellness-aligned vs low-velocity unfit), telemetry adoption (catch stockouts before lost revenue compounds), supplier discipline (cash-and-carry warehouse + minimum-order pricing), and time discipline (route + admin + sourcing in fixed windows). The sustainable single-person scale is typically 15-35 machines depending on geographic density — tight 5-10 mile radius routes support 30-35 machines + ~$8-15K monthly gross at $4-7K monthly net, while sprawled 25-50 mile routes support 15-22 machines + ~$5-9K monthly gross at $2-4K monthly net (drive-time eats the day). Three structural choices separate sustainable solo operators from those who exit at month 18-24: (1) placement filtering — solo operators can't afford a single drag-on-route placement; net-contribution-per-machine review at quarter 1 + 2 + 3 + 4 + remove or renegotiate below threshold, (2) telemetry from day one — Nayax VPOS Touch + Cantaloupe ePort cost $25-50 monthly per machine but cut driver visits by 25-40% by routing only-where-needed, (3) cash-and-carry warehouse pricing discipline — Sam's Club Business, Costco Business, RestaurantDepot at 50-55% cost-of-goods vs convenience-store retail at 62-68% drives margin survival. The honest framing: solo vending is a job, not a passive income stream. Successful solo operators work 35-45 hours weekly on route + admin + sourcing at scale, and net income tracks with placement quality + density discipline, not machine count. Don't chase machine count; chase per-machine net contribution.",
    bullets: [
      { emphasis: "15-35 sustainable machines depending on density:",
        text: "Tight 5-10 mile radius routes support 30-35 machines + $4-7K monthly net; sprawled 25-50 mile routes cap at 15-22 machines + $2-4K monthly net. Drive-time eats the day." },
      { emphasis: "Three structural choices separate sustainable solo operators:",
        text: "Placement filtering (remove drag-on-route placements quickly), telemetry from day one (cut driver visits 25-40%), cash-and-carry warehouse pricing discipline (50-55% COGS vs 62-68% retail)." },
      { emphasis: "Solo vending is a job, not passive income:",
        text: "Successful solo operators work 35-45 hours weekly. Net income tracks placement quality + density, not machine count. Chase per-machine net contribution, not machine count.", },
    ],
  }),
  statStrip({
    heading: "Solo vending operator benchmarks",
    stats: [
      { number: "15-35", label: "sustainable machine count", sub: "depends on route density", accent: "blue" },
      { number: "$2-7K", label: "monthly net income range", sub: "at solo single-person scale", accent: "orange" },
      { number: "25-40%", label: "driver-visit reduction", sub: "with telemetry vs route-as-needed", accent: "blue" },
      { number: "50-55%", label: "warehouse cost-of-goods target", sub: "vs 62-68% at retail / partial-pallet", accent: "blue" },
    ],
  }),
  specList({
    heading: "Solo vending operator specifications",
    items: [
      { label: "Route density vs sustainable machine count", value: "Tight 5-10 mile radius routes (urban + dense-suburb) support 30-35 machines on a 4-day route cadence at 35-45 hours weekly. Medium 10-25 mile radius routes support 22-28 machines. Sprawled 25-50 mile rural / mixed routes cap at 15-22 machines (drive-time becomes the binding constraint). Drive-time as percentage of working hours is the single most important density metric." },
      { label: "Placement filtering + net-contribution-per-machine review", value: "Quarter 1 + 2 + 3 + 4 review at each placement: net contribution per machine, dispense rate trend, host commission cost, service cost (per-visit + drive-time). Below $80-120 monthly net contribution = drag on route. Remove or renegotiate (higher dispense rate, lower commission, lower service frequency). Solo operators can't carry drag placements — they consume the labor budget." },
      { label: "Telemetry adoption from day one", value: "Nayax VPOS Touch + Cantaloupe ePort cost $25-50 monthly per machine + transaction fees but cut driver visits by 25-40% (route only-where-needed, not on calendar cadence). At 25 machines, telemetry saves 4-8 hours weekly + 50-100 miles weekly + catches stockouts before lost revenue. Telemetry pays for itself at machine 10-15; mandatory from day one at modern solo operations." },
      { label: "Cash-and-carry warehouse pricing discipline", value: "Sam's Club Business, Costco Business, RestaurantDepot produce 50-55% cost-of-goods on standard planogram. Convenience-store retail or distributor partial-pallet drifts to 62-68% and kills margin. Solo operators benefit most — supplier-negotiation leverage matches large operators only at warehouse pricing. Build weekly warehouse run into route cadence; don't drift to convenience-store sourcing." },
      { label: "Route + admin + sourcing time blocks", value: "Sustainable solo operators block: route (3-4 days weekly, 6-8 hours each), admin (1 day weekly, 4-6 hours), sourcing + supplier coordination (1 day weekly, 4-6 hours). Without time discipline, admin + sourcing get squeezed and surface at quarterly review as missed receipts, missed planogram refresh, missed supplier negotiation. Block calendar; protect the blocks." },
      { label: "Equipment financing vs cash purchase at solo scale", value: "Solo operators typically run mixed equipment age — newer machines financed at 4-7% APR over 36-60 months, older machines purchased cash from refurbisher (USelectIt, Crane Merchandising used market). $4-8K used + refurbished per machine vs $8-15K new. Match capital to route economics; don't over-spec equipment at low-velocity placements." },
      { label: "Insurance + business structure", value: "Solo operators carry $1M general liability + $500K product liability minimum at most office / commercial placements; some institutional placements (hospital, federal, university) require $1-2M. LLC structure standard for liability + tax purposes. Workers comp not required at solo (no employees) but required if hiring even part-time helper. Build into year-one operating plan." },
      { label: "Supplier negotiation at solo scale", value: "Solo operators can negotiate beverage-supplier (Pepsi, Coca-Cola direct-store-delivery) at 25+ placement scale — preferential pricing + planogram support + cooler placement. Snack-supplier negotiation harder (cash-and-carry warehouse is the main lever). USConnect, Vending Operator Association, NAMA networking surfaces supplier connections + negotiation playbook." },
      { label: "Annual scale-vs-hire decision point", value: "Sustainable solo operator hits 25-35 machine ceiling at 35-45 hours weekly. Beyond that, hire part-time helper (10-15 hours weekly for restock-only route) or stay at solo ceiling. Hire decision adds workers comp + payroll tax + management overhead — net income may not increase proportionally. Run year-two financials before commit." },
    ],
  }),
  timeline({
    heading: "First-year solo vending operator timeline",
    sub: "From decision to scale ceiling. Each phase has a specific revenue + machine-count + capability milestone.",
    howToName: "Solo vending operator first year",
    totalTime: "12 months",
    steps: [
      { label: "Month 1-2", title: "Business structure + capital + first 3-5 placements", description: "LLC formation, $1M GL + $500K product liability insurance, business banking + bookkeeping software, equipment financing + first 3-5 machine purchase (mix new + used), first 3-5 placement signed (sister-network + cold-call + Vending Operator Association lead)." },
      { label: "Month 3-5", title: "Route cadence + telemetry + supplier discipline established", description: "Telemetry deployed at all placements (Nayax or Cantaloupe). Cash-and-carry warehouse weekly run pattern established. Route cadence dialed (3-4 day route + 1 admin + 1 sourcing weekly). First quarterly placement review at month 3 with net-contribution-per-machine analysis." },
      { label: "Month 6-8", title: "Scale to 12-18 machines + first placement filter", description: "Network referrals + cold-call campaign produces 8-12 additional placements. Quarter-2 review flags 1-2 drag-on-route placements — remove or renegotiate. Supplier-negotiation traction at beverage suppliers (Pepsi or Coca-Cola DSD). First minor scale capability test." },
      { label: "Month 9-12", title: "Approach 20-30 machine ceiling + year-one financial review", description: "Continue network referral + cold-call to 20-30 machines depending on density. Year-end P&L review: gross revenue + net contribution + COGS percentage + service-cost-per-visit + drive-time percentage. Plan year two: scale-to-ceiling, hire helper, or hold-and-optimize." },
    ],
  }),
  decisionTree({
    heading: "Should we hire a part-time helper or hold at solo ceiling?",
    question: "Are we consistently working 45+ hours weekly with 25+ profitable machines, and is route density tight enough that adding 10-15 machines wouldn't push drive-time past 35% of working hours?",
    yesBranch: {
      title: "Hire part-time restock helper — scale to 40-50 machines",
      description: "Density supports growth. Hire 10-15 hour weekly restock-only helper at $18-25/hr + workers comp. Owner runs admin + sourcing + supplier + placement negotiation; helper runs restock route. Net income lifts 30-50% at scale; management complexity adds. Build into year-two plan.",
      finalTone: "go",
      finalLabel: "Hire part-time helper",
    },
    noBranch: {
      title: "Hold at solo ceiling — optimize per-machine net contribution",
      description: "Density doesn't support growth OR hours are sustainable. Hold at 25-35 machine ceiling. Focus on per-machine net contribution lift — placement upgrade, supplier negotiation, planogram refinement, telemetry-driven service-visit reduction. Sustainable solo operation; review hire decision annually.",
      finalTone: "stop",
      finalLabel: "Hold at solo ceiling",
    },
  }),
  tipCards({
    heading: "Seven solo vending operator mistakes",
    sub: "Documented from year-one + year-two solo operator P&L review and Vending Operator Association forum feedback. Each preventable with placement + telemetry + time-block discipline.",
    items: [
      { title: "Chasing machine count over per-machine net contribution", body: "Adding placements without quarterly net-contribution review produces a portfolio with 30-40% drag placements that consume labor budget. Chase per-machine net contribution: $80-120 monthly minimum threshold; remove or renegotiate below. Tight 20-machine route beats sprawled 35-machine route at year-one net income." },
      { title: "Skipping telemetry to save $25-50 monthly per machine", body: "Solo operators most benefit from telemetry — Nayax VPOS Touch or Cantaloupe ePort. Cuts driver visits by 25-40%, catches stockouts before lost revenue, surfaces per-machine velocity + planogram refinement. Telemetry pays for itself at machine 10-15. Skipping telemetry to save $25-50 monthly per machine costs $200-400 monthly per machine in lost revenue + extra drive-time." },
      { title: "Convenience-store sourcing instead of warehouse pricing", body: "Buying planogram product at convenience-store retail or distributor partial-pallet drifts cost-of-goods to 62-68% — kills margin at solo scale. Sam's Club Business, Costco Business, RestaurantDepot cash-and-carry produce 50-55% COGS. Block weekly warehouse run into route cadence; don't drift to convenience-store sourcing under time pressure." },
      { title: "No quarterly placement review", body: "Drag placements masked at annual review surface at quarterly review — net contribution below $80-120 monthly, dispense rate decline, host commission creeping above 18-20%. Quarterly review catches drag early; annual review surfaces 9-12 months of compounded labor cost. Calendar-block quarterly review; don't skip." },
      { title: "Mixing personal + business finances", body: "Solo operators without LLC structure + dedicated business banking mix personal + business finances. Surfaces at tax filing + insurance claim + supplier negotiation. LLC + business banking + bookkeeping software (QuickBooks, Wave, Xero) at month 1; not optional at any scale." },
      { title: "Accepting host-favorable commission structure without negotiation", body: "Host-pitched 25-30% commission at low-velocity placement kills solo operator margin. Solo operators must negotiate commission to placement-fit: 10-15% at low-velocity, 15-20% at medium, 20-25% only at high-velocity. Volume + placement quality drives commission ceiling; don't accept host opening offer." },
      { title: "Skipping year-one tax + retirement planning", body: "Solo operator net income of $40-100K annually surfaces tax + retirement planning needs — SEP-IRA or Solo 401(k), quarterly estimated tax payments, mileage + depreciation tracking. Skipping year-one planning produces tax surprise + missed retirement contribution + audit risk. CPA consultation at month 9 minimum.", },
    ],
  }),
  keyTakeaways({
    heading: "Solo vending operator key takeaways",
    takeaways: [
      "Sustainable solo scale is 15-35 machines depending on route density; chase per-machine net contribution, not machine count.",
      "Telemetry from day one is non-negotiable at modern solo operations — Nayax or Cantaloupe pays for itself at machine 10-15.",
      "Cash-and-carry warehouse pricing discipline (50-55% COGS) is the largest margin lever at solo scale; don't drift to convenience-store retail.",
      "Quarterly placement review with net-contribution-per-machine analysis catches drag early; annual review surfaces 9-12 months of compounded labor cost.",
      "Solo vending is a job, not passive income — successful operators work 35-45 hours weekly with disciplined time blocks for route + admin + sourcing.",
    ],
  }),
  inlineCta({
    text: "Want the solo vending operator framework (route density + placement filter + telemetry + sourcing + time blocks)?",
    buttonLabel: "Get the solo operator framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to coach solo vending operators through route density planning, placement filtering, telemetry adoption, supplier discipline, and year-one P&L structuring — including LLC formation, equipment financing, insurance scoping, and tax / retirement planning at solo scale. The benchmarks reflect year-one + year-two solo operator P&L data and Vending Operator Association forum feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How many machines can a solo operator manage?", answer: "15-35 depending on geographic route density. Tight 5-10 mile radius supports 30-35 at 35-45 hours weekly. Medium 10-25 mile radius supports 22-28. Sprawled 25-50 mile rural routes cap at 15-22 (drive-time becomes binding constraint). Chase density before chasing machine count.", audience: "Operators" },
      { question: "What's realistic net income at solo scale?", answer: "$2-4K monthly net at sprawled rural routes (15-22 machines), $4-7K monthly net at dense urban / suburban routes (25-35 machines). Net income tracks placement quality + route density more than machine count. Don't accept any placement; filter by net-contribution-per-machine quarterly.", audience: "Operators" },
      { question: "Is telemetry worth it at solo scale?", answer: "Yes — most beneficial at solo scale. Nayax VPOS Touch + Cantaloupe ePort cost $25-50 monthly per machine but cut driver visits by 25-40% (route only-where-needed). At 25 machines saves 4-8 hours weekly + catches stockouts. Pays for itself at machine 10-15. Mandatory from day one at modern solo operations.", audience: "Operators" },
      { question: "Where should I source product?", answer: "Cash-and-carry warehouse: Sam's Club Business, Costco Business, RestaurantDepot. Produces 50-55% cost-of-goods on standard planogram. Convenience-store retail or distributor partial-pallet drifts to 62-68% and kills margin. Block weekly warehouse run into route cadence; supplement with beverage DSD at 25+ machine scale.", audience: "Operators" },
      { question: "How do I get my first 5 placements?", answer: "Sister-network referrals (existing professional + community network), Vending Operator Association leads + forum, cold-call campaign at office parks + manufacturing + apartment complexes within route radius, NAMA + state vending association events. First 5 are hardest; placements 6-15 surface from referrals at year-end.", audience: "Operators" },
      { question: "When should I hire help?", answer: "When working 45+ hours weekly with 25+ profitable machines AND density supports growth (drive-time wouldn't push past 35% with 10-15 added machines). Hire 10-15 hour weekly restock-only helper at $18-25/hr + workers comp. Owner runs admin + sourcing + placement; helper runs restock route. Net income lifts 30-50% at scale.", audience: "Operators" },
      { question: "Do I need LLC + insurance?", answer: "Yes — LLC structure + $1M GL + $500K product liability at month 1. Some institutional placements (hospital, federal, university) require $1-2M GL. Business banking + bookkeeping software (QuickBooks, Wave, Xero) at month 1. CPA consultation at month 9 minimum for year-one tax + retirement planning.", audience: "Operators" },
      { question: "What commission rate should I offer hosts?", answer: "Match commission to placement velocity: 10-15% at low-velocity, 15-20% at medium, 20-25% only at high-velocity. Don't accept host-pitched 25-30% at low-velocity placement — kills solo operator margin. Negotiate from placement fundamentals; volume + placement quality drives commission ceiling.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator industry practice + benchmarks", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator economics + solo scale practice" },
      { label: "Cantaloupe Seed — operator telemetry + cashless platform", url: "https://www.cantaloupe.com/", note: "Largest North American vending operator telemetry platform; supports solo operator scale" },
      { label: "Nayax VPOS Touch — vending payment + telemetry", url: "https://www.nayax.com/", note: "Modern vending payment + telemetry platform widely adopted at solo operator scale" },
      { label: "SBA — small business structure + insurance guidance", url: "https://www.sba.gov/", note: "Federal small business framework covering LLC formation + insurance + tax planning" },
      { label: "Vending Market Watch — solo + small operator coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering solo + small vending operator economics + case studies" },
    ],
  }),
  relatedGuides({
    heading: "Related vending business startup guides",
    items: [
      { eyebrow: "Sister guide", title: "Is vending a profitable business?", description: "Honest profitability framing for vending operators — placement, scale, telemetry, portfolio discipline.", href: "/vending-business-startup/is-vending-a-profitable-business" },
      { eyebrow: "Sister guide", title: "How to find good vending locations", description: "Placement-fit framework + cold-call playbook + referral strategy for vending operators.", href: "/vending-business-startup/how-to-find-good-vending-locations" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Startup capital, financing, location, profitability, contracts, and operator capability.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
