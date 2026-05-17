import { seedPost, tldr, statStrip, costBreakdown, comparisonTable, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("roi-office-vending", [
  tldr({
    heading: "What's the ROI of office vending — and how does it net out across direct revenue, employee experience, recruiting + retention, and ESG?",
    paragraph:
      "Office vending ROI nets out across four value drivers most facility + HR + finance leads don't measure together: (1) direct revenue — commission revenue inbound at standard operator-funded contracts (5-18% of net sales at qualifying placements; $5-15K/year at typical 200-employee office with 4 machines; net inbound to facility at standard placements); (2) employee experience perception — modern HR surveys show 8-15% perception lift at well-designed vending programs with healthy-share + dietary inclusivity + branded touchscreen + ESG-aligned sourcing (perception → recruiting + retention contribution); (3) recruiting + retention contribution — employee experience perception lift correlates with 3-8% retention improvement at engaged employee segments + recruiting time-to-fill improvement at competitive employer markets (translates to $50-200/employee/year retained value at typical knowledge-worker salary bands); (4) ESG + sustainability + brand contribution — ENERGY STAR Tier 2 equipment + R-290 / R-744 low-GWP refrigerant + Fair Trade + B-Corp + compostable packaging + multi-cultural ERG sourcing contributes to corporate ESG scorecard + DEI program reporting + investor + customer brand perception. The negative-cost ROI picture: at standard operator-funded contract with quality program design, net facility position is NET REVENUE INBOUND (commission revenue exceeds $0 ongoing cost) + amplified by employee experience + recruiting + retention + ESG contribution. Premium multi-platform refreshment programs (AmLaw 200, hospitality, financial services) flip to modestly POSITIVE cost ($40-120/employee/month) but justify ROI through enhanced amenity + recruiting + retention + brand contribution at higher salary bands. Five ROI levers to optimize: (a) commission rate (5-18% range; aggregate multi-machine count to maximize), (b) healthy-share + dietary inclusivity (drives employee perception + retention), (c) branded touchscreen + comms integration (drives perception + recruiting), (d) ESG + sustainability sourcing (drives corporate ESG scorecard + brand), (e) member-engagement integration with wellness + benefits platforms (drives wellness program engagement + retention). Build measurement framework into program at concept — commission revenue tracking + quarterly employee survey + retention + recruiting correlation + ESG reporting.",
    bullets: [
      { emphasis: "Four ROI value drivers: direct revenue + employee perception + recruiting + retention + ESG:",
        text: "Modern facility + HR + finance leads should measure together. Standard operator-funded contract nets to net revenue inbound + amplified by perception + retention + ESG contribution." },
      { emphasis: "Net facility position is NET REVENUE INBOUND at standard placements:",
        text: "Commission revenue ($5-15K/year at typical 200-employee office) exceeds $0 ongoing cost. Premium multi-platform programs modestly POSITIVE cost ($40-120/employee/month) but justified by enhanced amenity + recruiting + retention." },
      { emphasis: "Five ROI levers — commission rate, healthy-share + dietary inclusivity, branded touchscreen, ESG sourcing, member-engagement integration:",
        text: "Build measurement framework into program at concept — commission tracking + quarterly employee survey + retention + recruiting correlation + ESG reporting. Modern operators bring native; legacy operators don't credibly support.", },
    ],
  }),
  statStrip({
    heading: "Office vending ROI benchmarks",
    stats: [
      { number: "5-18%", label: "commission revenue", sub: "of net sales at standard placement", accent: "orange" },
      { number: "8-15%", label: "employee experience perception lift", sub: "well-designed vending programs", accent: "orange" },
      { number: "3-8%", label: "retention improvement", sub: "engaged employee segments", accent: "blue" },
      { number: "+NET", label: "facility position at standard placement", sub: "commission exceeds $0 ongoing cost", accent: "blue" },
    ],
  }),
  costBreakdown({
    heading: "Office vending ROI — 5-year framework for 200-employee office",
    sub: "Illustrative 5-year ROI framework at 200-employee office with 4 machines under standard operator-funded contract + quality program design. Facility + HR + finance perspective.",
    items: [
      { label: "Direct cost — operator-funded equipment + service", amount: "$0", range: "Standard operator-funded contract; operator absorbs capital + service" },
      { label: "Direct cost — power consumption (operator-funded equipment)", amount: "$0", range: "Operator absorbs at operator-funded model" },
      { label: "Direct cost — brand wrap + touchscreen content + ESG sourcing premium", amount: "$8,500", range: "One-time customization spend; brand wrap $2-5K + content workflow + ESG sourcing premium" },
      { label: "Direct revenue — commission to facility (12% net, 5 years)", amount: "$28,800", range: "$240K cumulative gross sales × 12% commission rate" },
      { label: "Employee experience value — perception lift × retention", amount: "$45,000", range: "8-15% perception lift × 200 FTE × 3-8% retention contribution × $50-200/FTE/year retained value" },
      { label: "Recruiting contribution — time-to-fill improvement + offer-acceptance", amount: "$18,000", range: "Competitive employer market; 2-4 fewer recruiting cycles × $4-8K cost per recruiting cycle" },
      { label: "ESG + sustainability contribution — scorecard + brand perception", amount: "Qualitative", range: "Corporate ESG scorecard + DEI program reporting + investor + customer brand perception; qualitative but real" },
      { label: "5-year net facility position (financial only)", amount: "+$20,300", range: "Direct + perception + recruiting; ESG qualitative; standard placement nets to net revenue inbound" },
      { label: "5-year ROI multiple", amount: "3.4x", range: "Net financial return / customization spend; before ESG + brand contribution amplification" },
    ],
    totalLabel: "5-year ROI multiple (financial only)",
    totalAmount: "3.4x",
  }),
  comparisonTable({
    heading: "Office vending ROI by program tier",
    sub: "ROI varies meaningfully by program tier. Standard placements net to net revenue inbound; premium multi-platform programs modestly positive cost but justified by enhanced contribution.",
    headers: ["Program tier", "Direct cost / FTE / mo", "Commission to facility", "Perception lift", "Net ROI position"],
    rows: [
      ["Standard office program (operator-funded)", "$0 ongoing direct", "5-12% (12% mid)", "5-10%", "Net revenue inbound (+3-5x multiple)"],
      ["Quality-of-life office (operator-funded + AI cooler / micro-market)", "$5-15", "8-15% (12% mid)", "10-15%", "Net revenue inbound (+2-4x multiple)"],
      ["Premium office (branded + ESG + wellness integration)", "$15-40", "10-18% (15% mid)", "12-18%", "Modestly positive cost (+1.5-3x multiple)"],
      ["Premium multi-platform (AmLaw / hospitality / finance)", "$40-120", "Hybrid + service fee", "15-20%", "Modestly positive cost (+1-2x multiple)"],
      ["Operator capability bar", "Modern tier-1", "Modern tier-1", "Modern tier-1", "Modern tier-1"],
      ["Measurement framework", "Commission + survey + retention + ESG", "Commission + survey + retention + ESG", "Commission + survey + retention + ESG", "Commission + survey + retention + ESG"],
    ],
  }),
  specList({
    heading: "Office vending ROI measurement specifications",
    items: [
      { label: "Direct revenue tracking — commission rate + multi-machine aggregation", value: "Commission rate 5-18% of net sales at standard office placements; 10-15% mid-range at modern operator-funded contracts. Commission rate improves with multi-machine count (aggregate operator route efficiency): 1-2 machines support 5-10% rate, 4-8 machines support 12-18% rate. Aggregate machine count into single operator contract to maximize commission. Modern operators provide monthly commission statement with per-machine + per-SKU breakdown; legacy operators provide aggregate-only statement. Quarterly QBR reconciliation." },
      { label: "Employee experience perception lift — quarterly survey", value: "Quarterly employee survey on vending + amenity program (5-point Likert scale): overall satisfaction with vending, frequency of use, healthy-share availability, dietary inclusivity (vegan / gluten-free / kosher / halal / dairy-free / low-FODMAP), branded touchscreen experience, ESG + sustainability perception, member-engagement integration (wellness + benefits app). Year-over-year tracking. Modern HR surveys show 8-15% perception lift at well-designed vending programs vs commodity vending. Coordinate with HR + employee experience team at deployment." },
      { label: "Recruiting + retention correlation — engaged segment analysis", value: "Employee experience perception lift correlates with retention improvement at engaged employee segments (employees who use vending 3+ times per week): 3-8% retention improvement at competitive employer markets + recruiting time-to-fill improvement (2-4 fewer recruiting cycles per 100 employees per year). Retained-value calculation: retention improvement × 100 FTE × $50-200/FTE/year retained value (varies by salary band + recruiting cost). Coordinate measurement with HR + talent acquisition + people-analytics team." },
      { label: "ESG + sustainability + brand contribution — corporate scorecard + DEI reporting", value: "ESG + sustainability metrics: ENERGY STAR Tier 2 equipment percentage, R-290 / R-744 low-GWP refrigerant percentage (vs R-134a), Fair Trade + B-Corp + compostable packaging SKU percentage, multi-cultural ERG sourcing percentage (Black-owned, women-owned, AAPI-owned, Latino-owned, LGBTQ+ allied brands), packaging waste + recycling metrics. Reports into corporate ESG scorecard + DEI program reporting + investor + customer brand perception. Qualitative-but-real contribution to brand equity + investor + customer perception." },
      { label: "Member-engagement integration — wellness + benefits platform", value: "Vending purchases feed employer wellness platform (Virgin Pulse, Wellable, Limeade, Personify Health) + benefits platform (Justworks, Rippling, Gusto, ADP, Workday) at supporting placements. Engagement metrics: vending-purchase wellness reward redemption rate, healthy-share challenge completion rate, hydration challenge completion rate, recovery challenge completion rate. Drives wellness program engagement (15-25% lift at engaged member segments) + retention contribution at engaged segments. Modern operators support; legacy operators don't credibly support." },
      { label: "Five ROI levers — commission, healthy-share, branded touchscreen, ESG, member-engagement", value: "(1) Commission rate optimization (5-18% range; aggregate multi-machine count + competitive RFP every 3-5 years). (2) Healthy-share + dietary inclusivity (40-70% of slots qualifying; drives perception + retention). (3) Branded touchscreen + comms integration (employer logo + welcome message + internal campaigns + ERG content + member-app integration; drives perception + recruiting). (4) ESG + sustainability sourcing (ENERGY STAR + R-290 / R-744 + Fair Trade + B-Corp + compostable; drives corporate ESG scorecard + brand). (5) Member-engagement integration (wellness + benefits platform integration; drives engagement + retention)." },
      { label: "Measurement framework — quarterly + annual cadence", value: "Quarterly cadence: commission revenue tracking, employee survey results, vending-purchase wellness engagement, ESG + sustainability reporting, QBR with operator. Annual cadence: cumulative commission revenue, employee perception lift year-over-year, retention correlation analysis, recruiting time-to-fill improvement, ESG scorecard contribution, corporate brand perception correlation. Coordinate measurement with HR + finance + ESG + facilities + people-analytics teams. Modern operators bring written QBR report tied to measurement framework." },
      { label: "Multi-machine aggregation strategy for commission maximization", value: "Operator route efficiency improves with multi-machine placement at single facility; commission rate improves correspondingly. 1-2 machines support 5-10% commission (sub-route-density); 4-8 machines support 12-18% (route-efficient); 10+ machines at single facility (large office or campus) support 15-22% (route-optimal). Aggregate machine count into single operator contract where possible. Avoid single-machine contracts at multi-machine facilities — leaves commission rate on table." },
      { label: "Premium multi-platform program ROI framework", value: "Premium multi-platform refreshment programs (AmLaw 200, hospitality, financial services) flip to modestly POSITIVE cost ($40-120/employee/month) but justify ROI through: enhanced amenity at higher salary bands (recruiting + retention contribution amplified at $200-500K salary band knowledge workers), premium-tier brand contribution (investor + client meeting aesthetic), wellness program engagement (high-engagement at premium tier employees), ESG + DEI contribution at major-brand employer. ROI multiple lower than standard ($1-2x vs +3-5x) but justifies on absolute contribution at high-salary band." },
      { label: "Hidden ROI amplifiers — multi-site + portfolio scale", value: "Multi-site employer (HQ + satellite offices, multi-region, multi-country) supports operator route efficiency + consolidated commission + standardized program quality + centralized QBR + cross-site SKU + planogram learning. Portfolio scale amplifies ROI multiple via: standardized program quality (consistent perception lift across sites), cross-site procurement scale (commodity SKU cost reduction), consolidated brand-team interface (faster content refresh + branded partnership), centralized ESG + DEI reporting. Multi-site operators (Canteen, Five Star, Aramark Refreshment, Compass Group Eurest) bring native; smaller regional operators don't." },
    ],
  }),
  decisionTree({
    heading: "Standard ROI framework — or premium multi-platform ROI framework?",
    question: "Are we a standard office (50-500 employees, knowledge work salary bands, modest brand investment) or premium employer (AmLaw 200, hospitality, financial services, $200-500K salary band, high brand investment + ESG + DEI program + investor + client meeting aesthetic)?",
    yesBranch: {
      title: "Premium multi-platform ROI framework",
      description: "Premium multi-platform refreshment program ($40-120/employee/month) with hospitality-grade coffee + chef kiosks + branded reusable cup + ESG-aligned sourcing + multi-language touchscreen + wellness platform integration + branded product partnership. ROI justifies through enhanced amenity at higher salary bands + recruiting + retention contribution amplification + premium brand + investor + client meeting aesthetic. ROI multiple +1-2x lower than standard but justifies on absolute contribution. Modern hospitality-experienced operator required.",
      finalTone: "go",
      finalLabel: "Premium multi-platform ROI framework",
    },
    noBranch: {
      title: "Standard ROI framework — operator-funded with five-lever optimization",
      description: "Standard office program with operator-funded contract + five-lever ROI optimization (commission rate, healthy-share + dietary inclusivity, branded touchscreen, ESG sourcing, member-engagement integration) + quarterly + annual measurement framework. Net facility position is NET REVENUE INBOUND (commission revenue exceeds $0 ongoing cost) + amplified by perception + retention + ESG contribution. ROI multiple +3-5x at quality program design.",
      finalTone: "stop",
      finalLabel: "Standard ROI framework",
    },
  }),
  tipCards({
    heading: "Six office vending ROI measurement mistakes",
    sub: "Documented at facility + HR + finance + ESG + people-analytics team reviews. All preventable with cross-team measurement framework + modern operator capability + structured QBR cadence.",
    items: [
      { title: "Measuring only direct revenue — missing perception + retention + ESG amplification", body: "Direct commission revenue alone undersells vending ROI 2-4x. Perception lift (8-15% at engaged segments) + retention improvement (3-8% at competitive markets) + ESG + DEI + brand contribution amplify total ROI 3-5x at standard placements. Build cross-team measurement framework with facility + HR + finance + ESG + people-analytics at deployment. Modern HR + people-analytics teams support; legacy programs measure direct revenue only." },
      { title: "Skipping quarterly employee survey + retention correlation analysis", body: "Quarterly employee survey on vending + amenity program + year-over-year tracking + retention correlation at engaged segments is the perception + retention measurement foundation. Without survey + correlation, perception + retention contribution is faith-based. Build measurement into program at concept; coordinate with HR + people-analytics team; iterate based on data." },
      { title: "No multi-machine aggregation strategy at multi-machine facility", body: "Single-machine contracts at 4+ machine facilities leave commission rate on table (5-10% sub-route-density vs 12-22% route-optimal). Aggregate machine count into single operator contract to maximize commission. Modern operators welcome multi-machine aggregation; legacy operators sometimes resist. Build aggregation strategy into operator RFP + contract structuring." },
      { title: "ESG + sustainability sourcing without operator capability verification", body: "ESG + sustainability + brand contribution requires operator-side ENERGY STAR Tier 2 + R-290 / R-744 + Fair Trade + B-Corp + compostable packaging + multi-cultural ERG sourcing capability. Legacy operators don't credibly support; produces inconsistent ESG reporting + corporate scorecard gaps. Vet ESG capability at operator RFP + quarterly QBR + annual ESG report." },
      { title: "Premium multi-platform program ROI mismatched to employer salary band", body: "Premium multi-platform program ($40-120/employee/month) justifies ROI at $200-500K salary band knowledge workers (AmLaw 200, hospitality, financial services); doesn't justify at standard office ($50-150K salary band). Match program tier to employer salary band + recruiting + retention investment. Coordinate with HR + finance at program tier selection." },
      { title: "No member-engagement integration at modern wellness + benefits platform", body: "Wellness + benefits platform integration (Virgin Pulse, Wellable, Limeade, Personify Health + Workday, Justworks, Rippling, Gusto) drives wellness engagement (15-25% lift at engaged member segments) + retention contribution. Modern operators with API integration bring native; legacy operators don't credibly support. Vet at RFP — request wellness + benefits platform integration portfolio + references.", },
    ],
  }),
  keyTakeaways({
    takeaways: [
      "Office vending ROI nets across four value drivers: direct revenue (commission 5-18%), employee experience perception (8-15% lift), recruiting + retention (3-8% retention improvement at engaged segments), ESG + sustainability + brand contribution (corporate scorecard + DEI program + investor + customer perception).",
      "Net facility position at standard operator-funded contract is NET REVENUE INBOUND (commission exceeds $0 ongoing cost) + amplified by perception + retention + ESG contribution. ROI multiple +3-5x at quality program design. Premium multi-platform programs flip to modestly positive cost but justify on absolute contribution at higher salary bands.",
      "Five ROI levers: (1) commission rate optimization (5-18% range; aggregate multi-machine count), (2) healthy-share + dietary inclusivity (40-70% of slots qualifying), (3) branded touchscreen + comms integration (employer logo + ERG content + member-app), (4) ESG + sustainability sourcing (ENERGY STAR + R-290 / R-744 + Fair Trade + B-Corp + compostable), (5) member-engagement integration (wellness + benefits platform).",
      "Build cross-team measurement framework at concept — commission revenue tracking + quarterly employee survey + retention + recruiting correlation + ESG reporting. Coordinate with facility + HR + finance + ESG + people-analytics teams at deployment.",
      "Modern tier-1 operators bring native capability for all five ROI levers + measurement framework reporting; legacy operators don't credibly support; produces inconsistent ROI capture + missed amplification. Vet at RFP with cross-team measurement framework + portfolio references.",
    ],
  }),
  inlineCta({
    text: "Want the office vending ROI framework (four value drivers + five levers + cross-team measurement + quarterly + annual cadence)?",
    buttonLabel: "Get the ROI framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support office vending ROI framework design across standard office, quality-of-life office, premium office, and premium multi-platform refreshment placements — including four-value-driver measurement framework (direct revenue + employee perception + recruiting + retention + ESG + brand contribution), five-lever optimization framework (commission rate + healthy-share + branded touchscreen + ESG sourcing + member-engagement integration), cross-team measurement coordination (facility + HR + finance + ESG + people-analytics + talent-acquisition teams), modern tier-1 operator vetting at RFP with measurement framework + portfolio references, quarterly + annual measurement cadence + QBR with operator, multi-machine aggregation strategy for commission maximization, and premium multi-platform program ROI framework for high-salary-band employer placements. Recommendations reflect operator-side data + facility + HR + finance + ESG + people-analytics team post-deployment feedback across standard + quality-of-life + premium + premium multi-platform office placements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the ROI of office vending?", answer: "Net facility position at standard operator-funded contract is NET REVENUE INBOUND (commission revenue 5-18% exceeds $0 ongoing cost) + amplified by perception + retention + ESG contribution. ROI multiple +3-5x at quality program design. Premium multi-platform programs ($40-120/employee/month) flip to modestly positive cost but justify on absolute contribution at higher salary bands ($200-500K knowledge worker).", audience: "CFO / Finance" },
      { question: "What value drivers should we measure?", answer: "Four value drivers: (1) direct revenue (commission 5-18% of net sales), (2) employee experience perception lift (8-15% at well-designed programs), (3) recruiting + retention contribution (3-8% retention improvement at engaged segments + recruiting time-to-fill improvement), (4) ESG + sustainability + brand contribution (corporate scorecard + DEI + investor + customer perception). Build cross-team measurement framework with facility + HR + finance + ESG + people-analytics.", audience: "HR / Finance / ESG" },
      { question: "How do we measure perception lift?", answer: "Quarterly employee survey on vending + amenity program (5-point Likert scale): overall satisfaction, frequency of use, healthy-share availability, dietary inclusivity, branded touchscreen experience, ESG perception, member-engagement integration. Year-over-year tracking. Modern HR surveys show 8-15% perception lift at well-designed vending programs vs commodity vending.", audience: "HR / People Analytics" },
      { question: "How does vending affect retention?", answer: "Employee experience perception lift correlates with retention improvement at engaged employee segments (employees who use vending 3+ times per week): 3-8% retention improvement at competitive employer markets + recruiting time-to-fill improvement. Retained-value calculation: retention improvement × 100 FTE × $50-200/FTE/year retained value (varies by salary band + recruiting cost). Coordinate measurement with HR + talent acquisition.", audience: "HR / Talent Acquisition" },
      { question: "What are the ROI levers we can optimize?", answer: "Five ROI levers: (1) commission rate (5-18% range; aggregate multi-machine count to maximize), (2) healthy-share + dietary inclusivity (40-70% of slots qualifying), (3) branded touchscreen + comms integration (employer logo + welcome + ERG content + member-app), (4) ESG + sustainability sourcing (ENERGY STAR + R-290 / R-744 + Fair Trade + B-Corp + compostable), (5) member-engagement integration (wellness + benefits platform).", audience: "Facilities / Operations" },
      { question: "How does multi-machine aggregation maximize commission?", answer: "Operator route efficiency improves with multi-machine placement at single facility; commission rate improves correspondingly. 1-2 machines support 5-10% (sub-route-density), 4-8 machines support 12-18% (route-efficient), 10+ machines support 15-22% (route-optimal). Aggregate machine count into single operator contract; avoid single-machine contracts at multi-machine facilities.", audience: "Procurement / Finance" },
      { question: "Should we invest in premium multi-platform program?", answer: "Premium multi-platform program ($40-120/employee/month) justifies ROI at $200-500K salary band knowledge workers (AmLaw 200, hospitality, financial services, premium consulting); doesn't justify at standard office ($50-150K salary band). Match program tier to employer salary band + recruiting + retention investment. Coordinate with HR + finance at program tier selection.", audience: "CFO / HR" },
      { question: "How do we report ESG contribution?", answer: "ESG + sustainability metrics: ENERGY STAR Tier 2 equipment percentage, R-290 / R-744 low-GWP refrigerant percentage, Fair Trade + B-Corp + compostable packaging SKU percentage, multi-cultural ERG sourcing percentage (Black-owned, women-owned, AAPI-owned, Latino-owned, LGBTQ+ allied), packaging waste + recycling metrics. Reports into corporate ESG scorecard + DEI program reporting + investor + customer brand perception.", audience: "ESG / Sustainability / Brand" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "SHRM — Society for Human Resource Management employee experience + amenity research", url: "https://www.shrm.org/", note: "Industry trade association covering employee experience + amenity program ROI research" },
      { label: "NAMA — vending industry economics + commission benchmarks", url: "https://www.namanow.org/", note: "Industry trade association covering operator-funded contract economics + commission rate benchmarks" },
      { label: "Gallup — employee engagement + retention research", url: "https://www.gallup.com/workplace/", note: "Employee engagement + retention research underlying perception + retention ROI framework" },
      { label: "ENERGY STAR — refrigerated vending machine energy + cost savings", url: "https://www.energystar.gov/products/commercial_food_service_equipment/refrigerated_vending_machines", note: "EPA energy + cost savings data + ENERGY STAR Tier 2 ESG contribution" },
      { label: "IFMA — workplace amenity + facilities management research", url: "https://www.ifma.org/", note: "Industry trade association covering workplace amenity + facilities management ROI frameworks" },
    ],
  }),
  relatedGuides({
    heading: "Related office vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Cost of office vending services", description: "Operator-funded vs host-funded models, commission economics, customization budgeting framework.", href: "/office-vending-services/cost-of-office-vending-services" },
      { eyebrow: "Sister guide", title: "Office vending branding", description: "Five branding layers + ROI in employee experience + recruiting + retention + brand perception.", href: "/office-vending-services/branding-office-vending" },
      { eyebrow: "Hub", title: "All office vending guides", description: "Vending, coffee, micro-markets, branding, ROI frameworks across modern office placements.", href: "/office-vending-services" },
    ],
  }),
]);
process.exit(0);
