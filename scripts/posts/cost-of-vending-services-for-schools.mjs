import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, tipCards, decisionTree, keyTakeaways, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("cost-of-vending-services-for-schools", [
  tldr({
    heading: "What does vending service for a K-12 school actually cost — and what determines the price the district pays vs receives?",
    paragraph:
      "Vending service at K-12 schools is almost universally structured as zero-cost-to-district / commission-back, not a cost line for the district. Full-service operators install + stock + service equipment at no capital outlay to the school, recoup investment through retail sales, and pay back commission on net sales to the school food authority (SFA), student activity fund, athletic boosters, or general fund per district policy. Standard commission ranges at school vending: 10-15% of net sales at smaller schools (under 500 students, single placement), 15-22% at mid-size schools (500-1,500 students, 2-4 placements), and 22-30% at large high schools / multi-school district contracts (1,500+ students or 3+ schools, 5+ placements). The 'true cost' framing the school controls: (1) the catalog must be Smart Snacks-compliant which compresses category mix and average ring vs unrestricted vending (typical $1.50-$2.50 avg ring vs $2.50-$3.50 at unrestricted office vending), (2) commission structure (% of gross vs % of net vs flat $/machine), (3) refund policy + payment processor fees borne by operator, (4) pricing strategy (district can elect price-capped SKUs which reduces commission but improves student affordability), (5) infrastructure costs (electrical, data, location prep — sometimes shared, sometimes district), (6) equipment refresh cycle (operator-financed at most schools; some districts grant capital), (7) any base management fees (rare at K-12 — most schools commission-only). Hidden cost areas: cashless processing fees passed through, refund accounting variations, partial-year stockout penalties, and contract early termination fees. Modern operators (Five Star Food Service, Canteen K-12, regional school-experienced) bid transparent commission structures with SLA-tied performance benchmarks. This guide covers the cost structure, commission benchmarks, infrastructure cost share, the SKU pricing implications of Smart Snacks compliance, and the full district-side economic model for school vending. Written for school food authorities, business managers, district procurement teams, and superintendent offices.",
    bullets: [
      { emphasis: "Vending at K-12 is zero-cost-to-district / commission-back:", text: "Operator installs + stocks + services at no capital outlay. Commission paid back to SFA / activity fund / athletic boosters / general fund per district policy. Standard 10-30% of net sales depending on volume + scale." },
      { emphasis: "Commission scales with volume and scale:", text: "10-15% small (under 500 students). 15-22% mid-size. 22-30% large high schools / district contracts. Multi-school district contracts unlock premium commission tiers." },
      { emphasis: "Smart Snacks compliance compresses average ring:", text: "Compliant catalog $1.50-$2.50 avg ring vs $2.50-$3.50 office unrestricted. Plan revenue projections accordingly. Operator + district trade transparency on pricing strategy." },
    ],
  }),
  statStrip({
    heading: "School vending cost benchmarks",
    stats: [
      { number: "$0", label: "district capital outlay", sub: "operator-financed equipment standard", accent: "blue" },
      { number: "10-30%", label: "commission of net sales", sub: "scales with student count + placements", accent: "orange" },
      { number: "$1.50-$2.50", label: "Smart Snacks avg ring", sub: "vs $2.50-$3.50 office unrestricted", accent: "blue" },
      { number: "5-7 yr", label: "typical contract term", sub: "with operator capital commitment", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Commission structure by school size",
    sub: "Commission scales with student count, placement count, and revenue projection. Multi-school district contracts unlock premium tiers.",
    headers: ["School profile", "Commission of net sales", "Typical placements", "Annual revenue range"],
    rows: [
      ["Small (<500 students)", "10-15%", "1-2 machines", "$3K-$10K/yr"],
      ["Mid-size (500-1,500)", "15-22%", "2-4 machines", "$10K-$35K/yr"],
      ["Large high school (1,500+)", "22-28%", "4-8 machines", "$35K-$120K/yr"],
      ["Multi-school district (3+)", "25-30%", "10-30+ machines", "$100K-$500K+/yr"],
      ["Athletic / activity placements", "20-30%", "1-3 machines", "$8K-$40K/yr"],
      ["Staff-only break room", "15-25%", "1-2 machines", "$5K-$25K/yr"],
    ],
  }),
  costBreakdown({
    heading: "What the school's economic model looks like (illustrative)",
    sub: "Representative full-year revenue + commission for a 1,200-student high school with 3 placements at Smart Snacks-compliant catalog. Numbers reflect operator-side benchmarks at comparable school placements.",
    items: [
      { label: "Gross vending sales (3 placements)", amount: "$48,000", range: "$36K-$72K range typical" },
      { label: "Refunds + service credits (operator-borne)", amount: "-$960", range: "approx 2% of gross" },
      { label: "Net sales (commission basis)", amount: "$47,040", range: "after refunds" },
      { label: "Commission @ 20% of net (school)", amount: "$9,408", range: "paid to activity fund or SFA" },
      { label: "Cashless processing fees (operator-borne)", amount: "$0 district", range: "absorbed in operator margin" },
      { label: "Equipment + service + refills (operator-borne)", amount: "$0 district", range: "operator-financed full-service" },
      { label: "Infrastructure (electrical, location prep)", amount: "$0-$500 one-time", range: "shared per contract; some districts" },
    ],
    totalLabel: "Net financial benefit to school",
    totalAmount: "$8,908 - $9,408/yr",
  }),
  specList({
    heading: "School vending cost + commission specifications",
    items: [
      { label: "Commission structure — net sales standard", value: "Commission paid on net sales (gross minus refunds + service credits). Some legacy operators bid on gross sales which sounds higher but doesn't account for refund + credit deduction — verify basis at proposal. Net sales basis is school-favorable transparency. Operator must report monthly with line-item detail per machine + per SKU category." },
      { label: "Payment frequency + statement transparency", value: "Monthly statement with quarterly settlement standard at school vending. Modern operators provide line-item statements: gross sales per machine, refunds per machine, net sales, commission calculation, payment method (ACH preferred at districts; check sometimes). Some districts require quarterly settlement (Q + 30 days). Build into contract." },
      { label: "Smart Snacks SKU pricing compression", value: "Smart Snacks-compliant catalog runs $1.50-$2.50 avg ring vs $2.50-$3.50 at unrestricted office vending. Compliance compresses category mix (lower-margin healthier SKUs replace high-margin candy / chips), which compresses commission revenue. Plan revenue projections at $1.50-$2.50 avg ring; some districts elect price-capped SKUs (lower student price = higher access, slightly lower commission)." },
      { label: "Cashless processing fees + refund policy", value: "Modern school vending runs 60-80% cashless (Apple Pay, Google Pay, contactless card, student ID/badge). Cashless processing fees (2.5-3.5% of cashless transactions) absorbed in operator margin — not deducted from commission at modern operators. Refund policy: operator-funded refund process (Nayax, Cantaloupe, USA Technologies platform handle automatically); refunds deducted from gross at commission calculation." },
      { label: "Equipment + capital model", value: "Operator-financed full-service standard. Operator owns + delivers + installs + services equipment at no district capital outlay. Equipment refresh on 5-7 year cycle (sometimes shorter at premium contracts with capital commitment to AI coolers or modern combo equipment). District typically provides location + power; operator provides everything else." },
      { label: "Infrastructure cost share", value: "Power: standard 110V or 220V circuit at machine location — typically district / school facility (existing capacity at most placements). Data: modern smart vending requires cellular telemetry — operator-provided + operator-borne. Location prep (concrete pad, security fencing, kiosk enclosure): situational; one-time district cost at exterior or athletic placements; absent at standard hallway / cafeteria placements." },
      { label: "Hidden cost areas + transparency", value: "Common hidden cost areas to verify at contract: (1) cashless processing fees passed through (avoid — should be operator-borne), (2) partial-year stockout penalties (avoid — should be operator SLA), (3) early termination fees (verify scope + amount), (4) refund processing fees (avoid — operator-borne), (5) management or base fees (rare at K-12; verify absent). Read all 'fees' sections of contract carefully." },
      { label: "Multi-school district contract economics", value: "Multi-school district contracts (3+ schools under single operator) unlock premium commission tiers (25-30%). District-level scale + administrative consolidation + standardized planogram + standardized service routes create operator efficiency that supports higher commission. Build into RFP at districts with 3+ schools and 10+ placements." },
      { label: "Contract term length + capital commitment", value: "5-7 year typical at modern school vending with operator capital commitment. Longer terms (7-10 years) at premium contracts with significant equipment refresh + AI cooler deployment. Build mid-term performance review (30-month mark) into contract — review SLA + commission performance, renegotiate commission if volume exceeded projection." },
    ],
  }),
  decisionTree({
    heading: "Which school vending cost model fits our district?",
    question: "Do we have (a) 3+ schools OR 1,500+ students at primary school AND (b) want premium commission rate AND (c) can offer 5-7 year contract term with operator capital commitment?",
    yesBranch: {
      title: "Multi-school district contract — premium commission tier",
      description: "Multi-school district RFP. 25-30% commission of net sales. 5-7 year term with operator capital commitment to AI coolers + modern combo equipment. Standardized planogram + service routes. Mid-term performance review at 30-month mark. Quarterly statement settlement.",
      finalTone: "go",
      finalLabel: "Multi-school premium tier",
    },
    noBranch: {
      title: "Single-school standard contract — right-sized commission tier",
      description: "Standard single-school commission tier (10-22% per school size). 3-5 year term. Standard equipment. Monthly statement. Build review window at year 2 to assess SLA + commission performance. Right-size to district scale.",
      finalTone: "stop",
      finalLabel: "Single-school standard tier",
    },
  }),
  tipCards({
    heading: "Six school vending cost mistakes to avoid",
    sub: "Each is documented in school RFP review and operator contract dispute resolution at K-12 placements.",
    items: [
      { title: "Accepting commission on gross sales without refund deduction", body: "Some legacy operators bid on gross sales which sounds higher but doesn't account for refund + service credit deduction. Net sales basis is school-favorable transparency. Verify basis at proposal — net sales after refunds is the modern standard." },
      { title: "Not benchmarking commission to volume + scale", body: "Small (under 500 students): 10-15%. Mid-size: 15-22%. Large high school: 22-28%. Multi-school district: 25-30%. Operators bidding at the low end of a higher band are extracting value. Counter with benchmarked range at proposal review." },
      { title: "Hidden cashless processing fee pass-through", body: "Cashless processing fees (2.5-3.5% of cashless transactions) should be absorbed in operator margin — not deducted from commission. Some legacy operators pass through. Avoid at contract. Modern operators absorb. Verify at proposal." },
      { title: "Ignoring Smart Snacks pricing compression in revenue projection", body: "Smart Snacks-compliant catalog runs $1.50-$2.50 avg ring vs $2.50-$3.50 unrestricted. Plan revenue projections at Smart Snacks ring level — don't project unrestricted vending revenue at compliant schools. Revenue projection at $1.50-$2.50 avg ring is realistic." },
      { title: "Long-term contracts without performance review", body: "5-7 year contracts standard but should include mid-term performance review at 30-month mark — review SLA + commission performance, renegotiate commission tier if volume exceeded projection. Avoid open-ended long-term contracts with no review window." },
      { title: "Skipping early termination + exit clauses", body: "Verify early termination scope + amount at contract. Modern operators write 60-90 day exit on cause (un-cured SLA failure, statement non-compliance). 90-180 day exit for convenience. Avoid contracts with punitive exit fees that lock district into underperforming service." },
    ],
  }),
  keyTakeaways({
    heading: "Key takeaways for school vending cost",
    takeaways: [
      "Vending at K-12 is zero-cost-to-district / commission-back. Operator-financed equipment. Commission paid to SFA / activity fund / boosters / general fund per district policy.",
      "Commission scales with volume + scale. 10-15% small schools. 15-22% mid-size. 22-28% large high schools. 25-30% multi-school district contracts.",
      "Smart Snacks compliance compresses average ring to $1.50-$2.50. Plan revenue projections accordingly. Operator + district trade transparency on pricing strategy.",
      "Modern operators absorb cashless processing fees + refund processing in operator margin. Don't accept pass-through at contract.",
      "Multi-school district contracts (3+ schools) unlock premium commission tiers. Build into RFP at districts with 3+ schools and 10+ placements.",
    ],
  }),
  inlineCta({
    text: "Want the school vending economic model (commission tiers, revenue projection, transparency checklist, RFP framework)?",
    buttonLabel: "Get the school cost framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to model school vending economics across K-12 placements — single-school small / mid-size programs through multi-school district contracts — including commission tier benchmarking, Smart Snacks revenue projection, transparency clause review, cashless fee structure, infrastructure cost share, and RFP framework design. Recommendations reflect operator-side data and benchmarks at comparable school placements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much does vending service cost a school?", answer: "Vending at K-12 is almost universally structured as zero-cost-to-district / commission-back, not a cost line for the school. Operator installs + stocks + services at no capital outlay. Commission paid back to SFA / activity fund / athletic boosters / general fund per district policy.", audience: "Business Manager" },
      { question: "What commission should a school expect?", answer: "10-15% of net sales at small schools (under 500 students), 15-22% at mid-size schools (500-1,500), 22-28% at large high schools, and 25-30% at multi-school district contracts. Athletic / activity placements typically 20-30%. Multi-school district contracts unlock premium commission tiers.", audience: "School Food Authority" },
      { question: "Should commission be on gross sales or net sales?", answer: "Net sales is school-favorable transparency. Net sales = gross sales minus refunds + service credits. Some legacy operators bid on gross sales which sounds higher but doesn't account for refund deduction. Modern operators bid on net sales with monthly line-item statement.", audience: "Procurement" },
      { question: "Are there hidden fees we should watch for?", answer: "Common hidden cost areas: (1) cashless processing fees passed through (should be operator-borne), (2) partial-year stockout penalties (should be operator SLA), (3) early termination fees (verify scope + amount), (4) refund processing fees (operator-borne), (5) management or base fees (rare at K-12; verify absent). Read all 'fees' sections.", audience: "Procurement" },
      { question: "Does Smart Snacks affect revenue?", answer: "Yes — Smart Snacks-compliant catalog runs $1.50-$2.50 avg ring vs $2.50-$3.50 at unrestricted office vending. Compliance compresses category mix and average ring, which compresses commission revenue. Plan revenue projections at $1.50-$2.50 avg ring. Some districts elect price-capped SKUs for affordability vs commission trade.", audience: "School Food Authority" },
      { question: "Who pays for the equipment?", answer: "Operator-financed full-service standard. Operator owns + delivers + installs + services equipment at no district capital outlay. Equipment refresh on 5-7 year cycle. District typically provides location + power; operator provides everything else (equipment, refills, service, telemetry, payment hardware).", audience: "Facility Manager" },
      { question: "How does multi-school district contracting work?", answer: "Multi-school district contracts (3+ schools under single operator) unlock premium commission tiers (25-30%). District-level scale + administrative consolidation + standardized planogram + standardized service routes create operator efficiency. Build into RFP at districts with 3+ schools and 10+ placements.", audience: "Procurement" },
      { question: "What contract term length is standard?", answer: "5-7 year typical at modern school vending with operator capital commitment. Longer terms (7-10 years) at premium contracts with significant equipment refresh + AI cooler deployment. Build mid-term performance review (30-month mark) into contract — review SLA + commission performance, renegotiate commission if volume exceeded projection.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "USDA Food and Nutrition Service — Smart Snacks in School rule", url: "https://www.fns.usda.gov/cn/tools-schools-focusing-smart-snacks", note: "Federal USDA rule setting nutrition standards for foods sold to students; impacts SKU mix + average ring at school vending" },
      { label: "School Nutrition Association — SNA professional resources", url: "https://schoolnutrition.org/", note: "Industry trade association covering school food authority practice and vending program economics" },
      { label: "NAMA — National Automatic Merchandising Association", url: "https://www.namanow.org/", note: "Industry trade association covering vending operator commission practice and contract benchmarks" },
      { label: "Association of School Business Officials International (ASBO)", url: "https://www.asbointl.org/", note: "Professional association covering school business management including vending contract economics" },
      { label: "U.S. Department of Education — district financial reporting", url: "https://www2.ed.gov/about/offices/list/oese/index.html", note: "Federal framework underlying district revenue reporting; vending commission flows reported per district policy" },
    ],
  }),
  relatedGuides({
    heading: "Related school vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending solutions for school districts", description: "Multi-school district contract framework, standardized planogram, and service route economics.", href: "/vending-for-schools/vending-solutions-for-school-districts" },
      { eyebrow: "Sister guide", title: "Healthy vending machines for schools", description: "Smart Snacks compliance, SKU catalog, audit documentation, and state + district overlay.", href: "/vending-for-schools/healthy-vending-machines-for-schools" },
      { eyebrow: "Hub", title: "All school vending guides", description: "K-12 vending across compliance, planogram, contracting, and program economics.", href: "/vending-for-schools" },
    ],
  }),
]);
process.exit(0);
