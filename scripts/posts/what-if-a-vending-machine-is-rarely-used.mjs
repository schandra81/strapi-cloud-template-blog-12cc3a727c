import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-if-a-vending-machine-is-rarely-used", [
  tldr({
    heading: "What happens when a vending machine is rarely used — and what are the host and operator options?",
    paragraph:
      "When a vending machine is rarely used (sustained low transaction volume across 60-90 days), four root causes typically explain the underperformance: (1) insufficient foot traffic at the placement — building occupancy lower than original sizing assumption, hybrid work patterns reducing daily presence, or building zone reconfigured away from the machine. (2) Planogram mismatch — SKU mix not aligned with employee preferences, missing healthy and allergen-restricted formats, energy-drink-heavy in wrong demographic, dated planogram with high stockout rate. (3) Equipment or location issues — broken cashless reader, poor refrigeration temperature, blocked or hard-to-see equipment position, accessibility concerns. (4) Competing options — nearby cafeteria, micro-market, or breakroom replaced the value proposition. Diagnosis starts with operator telemetry data — modern operators provide per-SKU velocity, transaction count, fill-level trend, and refund/failure rate. The remediation menu: planogram refresh (telemetry-driven SKU rotation, healthy and allergen coverage expansion), equipment relocation within the building, signage and visibility improvements, cashless and telemetry verification, equipment downsizing (e.g., refrigerated combo replacing snack + cooler pair), or removal. Most operators will work with the host to relocate or remediate before removal — relocation costs are operator-borne but disruption to host is real. Removal happens at sustained underperformance after remediation attempts; standard contracts permit either party 30-90 day removal notice. At host-funded equipment (franchise structure), removal carries depreciation write-off implications. At operator-funded equipment (standard third-party), removal returns equipment to operator inventory.",
    bullets: [
      { emphasis: "Four root causes — foot traffic / planogram / equipment / competing options:",
        text: "Diagnosis starts with operator telemetry data (per-SKU velocity, transaction count, refund rate). Each root cause has distinct remediation path before considering removal." },
      { emphasis: "Remediation menu — refresh / relocate / verify / downsize / remove:",
        text: "Most operators work with host to remediate before removal. Planogram refresh fastest; equipment relocation operator-borne; downsizing reduces footprint; removal last resort." },
      { emphasis: "Standard contracts permit 30-90 day removal notice either party:",
        text: "At operator-funded equipment, removal returns equipment to operator inventory. At host-funded equipment (franchise), removal carries depreciation write-off. Document removal trigger thresholds in contract." },
    ],
  }),
  statStrip({
    heading: "Underperforming vending machine benchmarks",
    stats: [
      { number: "60-90 days", label: "sustained low volume window", sub: "before remediation action", accent: "orange" },
      { number: "4", label: "common root causes", sub: "traffic / planogram / equipment / competition", accent: "blue" },
      { number: "30-90 days", label: "standard removal notice", sub: "either party in standard contract", accent: "blue" },
      { number: "$0", label: "host relocation cost", sub: "operator-borne in standard contract", accent: "green" },
    ],
  }),
  comparisonTable({
    heading: "Diagnosis and remediation paths for rarely-used vending machines",
    sub: "Each root cause has distinct remediation. Diagnose before acting; operator telemetry data is the foundation.",
    headers: ["Root cause", "Diagnosis signal", "Remediation path", "Effort"],
    rows: [
      ["Insufficient foot traffic", "Building occupancy down, hybrid-work reduced presence, zone reconfigured", "Equipment relocation or removal", "Medium-high"],
      ["Planogram mismatch", "Per-SKU velocity skewed; high stockout on healthy/allergen; dated SKU set", "Planogram refresh with telemetry rotation", "Low (operator-side)"],
      ["Equipment or location issue", "High refund rate, cashless reader failures, refrigeration deviation, poor visibility", "Equipment service + position adjustment", "Low-medium"],
      ["Competing options", "Cafeteria opened nearby, micro-market replaced value, breakroom moved", "Downsizing or removal", "Medium"],
      ["Insufficient promotion", "Employees unaware of equipment; no signage", "Signage + employee communication", "Low"],
      ["Combined causes", "Mixed telemetry signals", "Phased remediation across causes", "Medium-high"],
    ],
  }),
  specList({
    heading: "Underperforming vending machine specifications and remediation",
    items: [
      { label: "Diagnosis using operator telemetry data", value: "Modern operators provide per-SKU velocity (transactions per SKU per week), total transaction count, fill-level trend over 30-90 days, refund and cashless failure rate, and revenue trend. Compare to original sizing baseline (transactions per employee per week × headcount = expected transactions). Underperformance typically defined as <50% of sizing baseline sustained over 60-90 days. Telemetry signals guide root cause: per-SKU skew indicates planogram; even-skew low volume indicates traffic or competition." },
      { label: "Foot traffic remediation (relocation or removal)", value: "Building occupancy reduction (hybrid work, reorganization, building zone closure) is the most common root cause at office placements 2020-present. Equipment relocation within the building (to higher-traffic floor or breakroom) is operator-borne under standard contracts; coordinate with operator route manager. If no higher-traffic placement available, equipment removal is appropriate; document in 30-90 day notice period." },
      { label: "Planogram refresh remediation", value: "Operator runs telemetry-driven SKU rotation: bottom-quartile velocity SKUs rotated every 8-12 weeks; new SKU introductions tested at 2-4 slot allocation for 8-week velocity assessment. Add missing healthy and allergen-restricted formats (15-20% slot share). Add wellness-program subsidized SKUs where supported. Refresh stockout-heavy SKUs to new vendors. Monthly category reporting to host with rotation recommendations." },
      { label: "Equipment service remediation", value: "Cashless reader failures, refrigeration temperature deviation, vend failures, change-return jams all reduce employee confidence and transaction volume. Operator service tech inspection identifies issues; modern telemetry surfaces failures in real-time. Verify >99.5% cashless reliability in last 90 days; address any recurring failures. ENERGY STAR equipment with cellular telemetry minimizes service issues." },
      { label: "Location and visibility remediation", value: "Equipment positioned in poor visibility zones (behind doors, in alcoves, around corners) underperforms versus prominent positions. Lighting at the machine zone matters — well-lit areas drive 15-25% higher visibility. ADA accessibility verification: clear path of travel, reach height for primary selection controls, audible signals. Coordinate position adjustment with operator at next service visit." },
      { label: "Competing-options diagnosis", value: "Nearby cafeteria, micro-market, branded coffee bar, or pantry program may have replaced the vending value proposition. Diagnose through employee survey or operator account review. Remediation options: downsize equipment to match reduced demand (snack-only replacing combo), narrow planogram to non-competing categories (e.g., 24-hour access SKUs not available in 9-5 cafeteria), or remove and reinvest budget in complementary equipment." },
      { label: "Equipment downsizing remediation", value: "If diagnosis indicates reduced but non-zero demand, downsize equipment to match. Refrigerated combo (single unit) replacing snack + refrigerated cooler pair. Smaller-footprint snack machine replacing larger unit. Reduces operator footprint cost and aligns equipment size with sustained demand. Operator coordinates equipment swap; capital implications depend on contract structure." },
      { label: "Removal process and notice period", value: "Standard contracts permit 30-90 day removal notice either party. Host triggers removal via written notice to operator; operator schedules equipment removal and final commission reconciliation. At operator-funded equipment, removal returns equipment to operator inventory at no host cost. At host-funded equipment (franchise structure), removal carries depreciation write-off implications; consult finance on book value." },
      { label: "Contract trigger thresholds (preventive)", value: "Modern operator contracts specify revenue-floor thresholds and remediation triggers: <50% of sizing baseline sustained over 60 days triggers remediation review; <30% triggers removal evaluation. Build into contract at proposal. Provides framework for managing underperformance without ad-hoc disputes; protects operator and host through predictable thresholds." },
      { label: "Reinvestment of removed-equipment budget", value: "When equipment is removed, the host budget previously committed to that placement (electricity, breakroom space, time coordinating with operator) can reinvest in complementary amenity equipment — coffee station upgrade, refrigerated locker for fresh items, micro-market kiosk at a higher-traffic location, or expanded subsidy on remaining machines. Plan reinvestment in advance of removal." },
    ],
  }),
  decisionTree({
    heading: "Should you relocate, downsize, or remove the underperforming vending machine?",
    question: "Has the machine sustained <50% of its sizing baseline transaction volume over 60-90 days, after operator planogram refresh and equipment service verification?",
    yesBranch: {
      title: "Proceed to relocate, downsize, or remove",
      description: "Coordinate with operator on remediation path. Relocate to higher-traffic placement within the building (operator-borne). Downsize equipment to match reduced demand (refrigerated combo replacing snack + cooler pair). Or remove with 30-90 day standard contract notice. At operator-funded equipment, removal returns to operator inventory; at host-funded, consult finance on depreciation write-off.",
      finalTone: "go",
      finalLabel: "Take action",
    },
    noBranch: {
      title: "Continue remediation — planogram + equipment + signage",
      description: "Run planogram refresh with telemetry-driven SKU rotation (bottom-quartile rotation every 8-12 weeks, healthy and allergen coverage expansion, stockout-heavy SKU refresh). Verify equipment service status (cashless reliability >99.5%, refrigeration temperature, vend reliability). Add signage and employee communication. Re-evaluate at 60-day post-remediation telemetry window.",
      finalTone: "stop",
      finalLabel: "Continue remediation",
    },
  }),
  tipCards({
    heading: "Five underperforming vending machine handling mistakes",
    sub: "Each documented in host-operator post-implementation reviews. All preventable with structured diagnosis and contract discipline.",
    items: [
      { title: "Removing equipment before diagnosing root cause", body: "Premature removal forfeits operator-borne remediation effort. Diagnose with operator telemetry data first: per-SKU velocity, transaction count, refund rate. Identify root cause (traffic / planogram / equipment / competition) before triggering removal. Most operators work with host to remediate before removal." },
      { title: "Not specifying remediation triggers in contract", body: "Without contract-specified revenue-floor thresholds and remediation triggers, underperformance handling becomes ad-hoc dispute. Build <50% sizing baseline over 60 days as remediation trigger; <30% as removal evaluation. Provides framework for managing underperformance with predictable thresholds protecting both parties." },
      { title: "Accepting commodity planogram refresh", body: "Operator planogram refresh that just rotates between commodity SKUs misses opportunities to address root causes. Specify telemetry-driven rotation, healthy and allergen-restricted format expansion (15-20% slot share), wellness-program subsidized SKUs, and stockout-heavy SKU vendor changes. Refresh quality matters; verify against per-SKU telemetry baseline." },
      { title: "Skipping equipment service verification before removal", body: "Cashless reader failures, refrigeration temperature deviation, vend failures, and change-return jams all reduce transaction volume. Some 'underperforming' machines are simply broken. Operator service tech inspection identifies issues; verify >99.5% cashless reliability and refrigeration spec before concluding underperformance." },
      { title: "No reinvestment plan for removed-equipment budget", body: "When equipment is removed, the host budget previously committed (electricity, breakroom space, operator coordination time) can reinvest in complementary amenity equipment. Plan reinvestment in advance of removal: coffee station upgrade, refrigerated locker, micro-market kiosk at higher-traffic location, or expanded subsidy on remaining machines." },
    ],
  }),
  inlineCta({
    text: "Want the underperforming vending machine framework — diagnosis using telemetry, remediation menu, removal triggers, and reinvestment planning?",
    buttonLabel: "Get the diagnosis framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to help facility managers, HR teams, and property managers diagnose underperforming vending equipment using operator telemetry data — including root-cause identification across foot traffic / planogram / equipment / competing options; remediation path selection (planogram refresh, equipment service, relocation, downsizing, removal); contract trigger threshold specification; removal process and notice period coordination; and reinvestment planning for removed-equipment budget. The benchmarks reflect operator-side telemetry data and host post-implementation patterns.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What happens if a vending machine is rarely used?", answer: "Four root causes typically explain underperformance: insufficient foot traffic, planogram mismatch, equipment or location issues, competing options (cafeteria, micro-market, pantry program). Diagnose with operator telemetry data, then remediate (planogram refresh, equipment service, relocation, downsizing) or remove with 30-90 day standard contract notice.", audience: "Facility Managers" },
      { question: "How is underperformance defined?", answer: "Typically <50% of original sizing baseline transaction volume sustained over 60-90 days. Sizing baseline = transactions per employee per week × headcount. Modern operator contracts specify revenue-floor thresholds: <50% over 60 days triggers remediation review; <30% triggers removal evaluation.", audience: "Procurement" },
      { question: "Will the operator relocate the equipment?", answer: "Yes under standard contracts. Equipment relocation within the building (to higher-traffic floor or breakroom) is operator-borne. Coordinate with operator route manager. If no higher-traffic placement available, equipment removal is appropriate; document in 30-90 day notice period.", audience: "Facility Managers" },
      { question: "What's the removal process?", answer: "Standard contracts permit 30-90 day removal notice either party. Host triggers removal via written notice to operator; operator schedules equipment removal and final commission reconciliation. At operator-funded equipment, removal returns equipment to operator inventory at no host cost. At host-funded equipment, consult finance on depreciation write-off.", audience: "Procurement" },
      { question: "What's the cost of remediation vs removal?", answer: "Planogram refresh: operator-borne, no host cost. Equipment service: operator-borne under standard contracts. Equipment relocation: operator-borne. Equipment removal: no host cost at operator-funded equipment. Host-funded equipment removal: depreciation write-off on book value. Replacement equipment purchase: host or operator depending on structure.", audience: "Procurement" },
      { question: "How do we diagnose root cause?", answer: "Operator telemetry data is the foundation. Per-SKU velocity shows planogram fit; total transaction count shows traffic; refund and cashless failure rate shows equipment health; trend across 30-90 days shows pattern. Compare to original sizing baseline. Per-SKU skew indicates planogram; even-skew low volume indicates traffic or competition.", audience: "Operators" },
      { question: "Can we downsize instead of removing?", answer: "Yes when diagnosis indicates reduced but non-zero demand. Refrigerated combo (single unit) replacing snack + refrigerated cooler pair. Smaller-footprint snack machine replacing larger unit. Reduces operator footprint cost and aligns equipment size with sustained demand. Operator coordinates equipment swap.", audience: "Facility Managers" },
      { question: "What about the budget after removal?", answer: "Reinvest the previously-committed budget (electricity, breakroom space, operator coordination) in complementary amenity equipment: coffee station upgrade, refrigerated locker for fresh items, micro-market kiosk at higher-traffic location, or expanded subsidy on remaining machines. Plan reinvestment in advance of removal.", audience: "HR / Facilities" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — National Automatic Merchandising Association — Contract guidance", url: "https://www.namanow.org/", note: "Industry guidance on operator contract structures including removal and notice periods" },
      { label: "Vending Times — Industry trade publication", url: "https://www.vendingtimes.com/", note: "Trade publication coverage of operator-host relationship management and contract patterns" },
      { label: "U.S. Bureau of Labor Statistics — Office occupancy and hybrid work data", url: "https://www.bls.gov/", note: "Federal data on office occupancy patterns underlying foot-traffic analysis" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry platforms", url: "https://www.cantaloupe.com/", note: "Telemetry platforms providing per-SKU velocity and transaction data for diagnosis" },
      { label: "Automatic Merchandiser — Industry trade publication", url: "https://www.vendingmarketwatch.com/", note: "Trade publication coverage of underperformance diagnosis and remediation patterns" },
    ],
  }),
  relatedGuides({
    heading: "Related vending FAQ guides",
    items: [
      { eyebrow: "Sister guide", title: "Do businesses pay for vending electricity", description: "Contract structure determining electricity-cost responsibility across third-party arrangements.", href: "/vending-faq/do-businesses-pay-for-vending-electricity" },
      { eyebrow: "Operations", title: "How much electricity does a vending machine use", description: "Annual kWh consumption by equipment type and operating environment.", href: "/vending-faq/how-much-electricity-does-a-vending-machine-use" },
      { eyebrow: "Hub", title: "All vending FAQ guides", description: "Common questions across contracts, equipment, payments, and operations.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
