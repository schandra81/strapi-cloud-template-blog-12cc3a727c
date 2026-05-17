import { seedPost, tldr, timeline, specList, comparisonTable, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-we-match-vendors-to-locations", [
  tldr({
    heading: "How does a vending locator match vendors to locations?",
    paragraph:
      "Quality vendor-location matching is a multi-criteria filter, not first-available pairing. The match criteria stack: (1) geography fit — vendor service radius covers location with route economics intact (typically 30-45 minute drive from operator warehouse at high-traffic, 60-75 minutes acceptable at low-traffic); (2) machine-type fit — vendor stocks the equipment the location needs (snack + beverage combo, AI cooler wall, fresh food, micro-market, coffee); (3) placement-type expertise — vendor has documented track record in office vs apartment vs hospital vs campus vs construction vs retail vs airport vs federal (operator capability differs sharply by placement type); (4) operator capability tier — vendor has telemetry, modern payment, ENERGY STAR + low-GWP refrigerant, allergen-restricted depth, accessibility audit, service SLA matching placement requirements; (5) compliance fit — federal placements need GSA + Section 508 + AbilityOne; airport needs SIDA + ACAA + ACA reporting; hospital needs HIPAA-aware; school needs Smart Snacks + sensory accommodation; (6) host requirements fit — commission expectations, contract length, sustainability spec, accessibility, dietary-restricted depth; (7) vendor capacity — vendor has route + service capacity to add the location without degrading existing service quality. Modern locators run multi-criteria matching algorithm; legacy locators run first-available pairing and produce mismatch + churn.",
    bullets: [
      { emphasis: "Match criteria stack — 7 filters from geography to vendor capacity:",
        text: "Geography + machine type + placement-type expertise + operator capability + compliance + host requirements + vendor capacity. Multi-criteria filter; not first-available pairing." },
      { emphasis: "Placement-type expertise differs sharply — office vs airport vs hospital vs federal:",
        text: "Operator capability differs by placement type. Office-experienced operator doesn't qualify for airport / federal / hospital without specific capability stack." },
      { emphasis: "Quality matching reduces 12-month churn from 35% to 10-15%:",
        text: "Mismatch is the primary driver of paid-placement 12-month churn. Better matching is the leverage point; documented criteria + multi-filter process produces.", },
    ],
  }),
  timeline({
    heading: "Vendor-location matching process — step-by-step",
    sub: "Eight-step structured matching from intake to introduction. Each step has acceptance criteria.",
    howToName: "Match a vendor to a vending location",
    totalTime: "5-15 business days from host intake to vendor introduction",
    steps: [
      { title: "Host intake + documented criteria", description: "Capture host context: headcount / traffic (documented source), placement type, current vending status, decision-maker, geography, machine type expected, commission expectations, contract length, sustainability / accessibility requirements, dietary-restricted needs. Document in matching database.", duration: "30-60 minutes intake interview" },
      { title: "Vendor pool segmentation by geography", description: "Filter vendor pool by service radius covering host location with route economics intact. 30-45 minute drive from operator warehouse typical at high-traffic; 60-75 minutes acceptable at low-traffic. Vendors outside radius excluded. Document filter outcome.", duration: "10-15 minutes database filter" },
      { title: "Filter by machine-type fit", description: "Filter vendor pool by machine type stocked: snack + beverage combo, AI cooler wall, fresh food, micro-market, coffee, specialty. Vendors without machine-type match excluded. Some vendors carry multiple machine types; document capability range.", duration: "10-15 minutes database filter" },
      { title: "Filter by placement-type expertise", description: "Filter by documented track record in placement type. Office-experienced vendors don't qualify for airport / federal / hospital without specific capability stack. Vendors with mismatched placement-type history produce 35%+ 12-month churn. Modern locators require placement-type fit; legacy locators ignore.", duration: "15-30 minutes capability review" },
      { title: "Filter by operator capability tier", description: "Filter by required capability: telemetry coverage, modern payment, ENERGY STAR + low-GWP refrigerant, allergen-restricted depth, accessibility audit, service SLA. Capability mismatch produces RFP failure + customer complaints. Modern locators filter; legacy locators don't.", duration: "30-45 minutes capability matching" },
      { title: "Filter by compliance fit", description: "Federal placements: GSA Schedule + Section 508 + AbilityOne. Airport: SIDA badging + ACAA + ACA reporting. Hospital: HIPAA-aware staff. School: Smart Snacks + sensory accommodation. Vendors without compliance capability excluded from compliance-sensitive placements.", duration: "30-45 minutes compliance review" },
      { title: "Filter by host requirements + vendor capacity", description: "Match commission expectations, contract length, sustainability + accessibility specifications, dietary-restricted depth. Confirm vendor route + service capacity to add the placement without degrading existing service quality. Vendors at capacity excluded.", duration: "30-45 minutes match review" },
      { title: "Broker introduction + handoff", description: "Top 1-3 matched vendors introduced to host. Vendor handoff package: documented host criteria, placement-zone observations, decision-maker context, expected commission + contract length, compliance + capability requirements. Vendor schedules site walk within 5-7 days.", duration: "1-2 business days introduction" },
    ],
  }),
  specList({
    heading: "Vendor-location matching criteria specifications",
    items: [
      { label: "Geography fit — service radius + route economics", value: "Vendor service radius covers location with route economics intact. 30-45 minute drive from vendor warehouse at high-traffic (daily / 48-hour service cadence economically feasible). 60-75 minutes acceptable at low-traffic (weekly cadence). Beyond 75-minute drive route economics typically don't support placement profitably." },
      { label: "Machine-type fit — snack + beverage / AI cooler / fresh food / micro-market / coffee", value: "Match machine type required by placement: snack + beverage combo at most office / apartment, AI cooler wall at high-traffic central seating (mall, corporate HQ, gym), fresh food at hospitals + airports + premium offices, micro-market at office break room / corporate HQ / large apartment, coffee at office / hospital / dealership. Vendor must stock matched equipment + carry SKU planogram + service capability." },
      { label: "Placement-type expertise — documented track record", value: "Office, apartment, hospital, campus, construction, retail, mall, airport, federal, school, hotel, gym, dealership, manufacturing, hospitality. Operator capability differs sharply by placement type. Office-experienced operators don't qualify for airport (SIDA + ACAA + ACA reporting + dietary-restricted depth) or federal (GSA + Section 508 + AbilityOne) without specific capability stack. Verify 3+ comparable references in matched placement type." },
      { label: "Operator capability tier — telemetry + ENERGY STAR + payment + accessibility", value: "Modern operator capability stack: 100% telemetry coverage, EMV + contactless + mobile wallet payment, ENERGY STAR + low-GWP refrigerant fleet, 25%+ allergen-restricted SKU depth, ADA + ACAA / Section 504 audit, quarterly ESG / ACA reporting where applicable. High-traffic + federal + airport + major-institutional placements require modern capability." },
      { label: "Compliance fit — federal + airport + hospital + school", value: "Federal: GSA Schedule contract + Section 508 + AbilityOne. Airport: SIDA badging + ACAA + ADA + Section 504 + ACA reporting. Hospital: HIPAA-aware route crews + Joint Commission alignment. School: USDA Smart Snacks + sensory accommodation + allergen labeling. Construction: OSHA awareness + after-hours access protocol. Compliance gaps drive RFP failure + customer complaints + lawsuit exposure." },
      { label: "Host requirements fit — commission + contract + sustainability + accessibility", value: "Commission expectations (10-30% range placement-dependent). Contract length (1-5 years). Sustainability spec (ENERGY STAR + recycling + reporting). Accessibility (ADA + WCAG). Dietary-restricted depth (5-35% planogram). Modern payment requirement. Operator must meet host-stated requirements; modern operators stretch on capability stack." },
      { label: "Vendor capacity — route + service load", value: "Vendor route + service capacity to add the placement without degrading existing service quality. Vendors at capacity excluded; even capability-matched vendors decline if route adds 90+ minutes weekly without route restructure. Match assumes vendor capacity. Locator confirms at vendor intake before broker introduction." },
      { label: "Multi-criteria scoring + ranking", value: "Top 1-3 matched vendors ranked by composite score across all criteria. Operator-host match weighted toward placement-type expertise + capability tier + compliance fit (these drive 80% of churn). Geography + machine type + capacity binary filters. Modern locators apply scoring + ranking; legacy locators run first-available." },
      { label: "Match outcome documentation + churn calibration", value: "Match outcome documented per placement: criteria scoring + vendor selected + ranked alternatives + host-vendor fit score. 12-month churn measured against matched placements. Above-threshold churn triggers matching criteria recalibration. Modern locators run continuous calibration; legacy locators don't.", },
    ],
  }),
  comparisonTable({
    heading: "Matching quality — modern locator vs legacy locator",
    sub: "Same vendor pool + same host pool; matching quality drives placement viability + 12-month churn.",
    headers: ["Dimension", "Modern multi-criteria matching", "Legacy first-available matching"],
    rows: [
      ["Filter criteria count", "7 multi-criteria filters", "1-2 (geography + machine type)"],
      ["Placement-type expertise required", "Required + documented references", "Not required"],
      ["Operator capability tier required", "Required + audited capability stack", "Not required"],
      ["Compliance fit required", "Required at federal / airport / hospital / school", "Not required"],
      ["Vendor capacity confirmed", "Confirmed at vendor intake", "Not confirmed"],
      ["Matching algorithm", "Multi-criteria scoring + ranking", "First-available + manual pairing"],
      ["12-month placement churn", "10-15% typical", "30-45% typical"],
      ["Match outcome documentation", "Per-placement criteria + score + outcome", "Minimal"],
      ["Continuous calibration", "Quarterly recalibration from churn data", "None"],
    ],
  }),
  tipCards({
    heading: "Six vendor-location matching mistakes",
    sub: "All preventable with multi-criteria matching + documented placement-type fit + compliance verification.",
    items: [
      { title: "First-available matching without expertise check", body: "Office-experienced vendor matched to airport placement fails ACAA + SIDA + ACA reporting requirements. Hospital placement assigned to office vendor fails HIPAA-aware operations + dietary-restricted depth. Multi-criteria matching with documented placement-type expertise prevents; first-available matching produces churn." },
      { title: "No compliance verification at federal / airport / hospital / school", body: "Federal placements need GSA + Section 508 + AbilityOne. Airport needs SIDA + ACAA + ACA reporting. Hospital needs HIPAA-aware. School needs Smart Snacks + sensory. Vendors without compliance capability fail RFP requirements + produce customer complaints + lawsuit exposure. Verify at matching." },
      { title: "Ignoring vendor capacity", body: "Matching capability-fit vendor at capacity adds placement at margin of vendor's service capability. Route degrades + stockouts rise + customer complaints + 12-month churn at the original placements + the new placement. Confirm vendor capacity at intake; exclude at-capacity vendors." },
      { title: "Generic capability tier — not differentiated by placement", body: "Modern operator at office placement may be modern operator at airport (telemetry + ENERGY STAR + payment cover both). But operator capability + service SLA + reporting cadence differ sharply between office and airport. Match capability tier to placement requirements, not operator's general capability claim." },
      { title: "No documentation of match outcome", body: "Match outcome documentation drives matching criteria calibration. Per-placement criteria scoring + vendor selected + ranked alternatives + 12-month outcome. Modern locators document + recalibrate quarterly; legacy locators don't and repeat matching mistakes." },
      { title: "Locator stays in operator-host loop after introduction", body: "Locator role concludes at vendor introduction. Operator owns site walk + proposal + contract + install + ongoing operations. Locators that stay in loop add friction + dilute operator-host relationship + create unclear escalation paths. Modern locators hand off cleanly; legacy locators don't.", },
    ],
  }),
  inlineCta({
    text: "Want the vendor-location matching framework (multi-criteria + placement-type fit + compliance + capacity)?",
    buttonLabel: "Get the matching framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vendor-location matching across the operator capability spectrum — including office, apartment, hospital, campus, construction, retail, mall, airport, federal, school, hotel, gym, and manufacturing placements. The matching framework reflects locator-side data on 12-month churn drivers and operator capability differentiation by placement type.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does a locator match vendors to locations?", answer: "Multi-criteria filter: geography + machine type + placement-type expertise + operator capability tier + compliance fit + host requirements + vendor capacity. 7-step process from host intake to vendor introduction. Top 1-3 matched vendors introduced. Modern locators run multi-criteria; legacy locators run first-available.", audience: "Hosts" },
      { question: "Why does placement-type expertise matter?", answer: "Operator capability differs sharply by placement type. Office-experienced operators don't qualify for airport (SIDA + ACAA + ACA reporting + dietary-restricted depth) or federal (GSA + Section 508 + AbilityOne) without specific capability stack. Verify 3+ comparable references in matched placement type.", audience: "Hosts" },
      { question: "What compliance applies to my placement?", answer: "Federal: GSA Schedule + Section 508 + AbilityOne. Airport: SIDA badging + ACAA + ADA + Section 504 + ACA reporting. Hospital: HIPAA-aware + Joint Commission alignment. School: USDA Smart Snacks + sensory accommodation + allergen labeling. Construction: OSHA + after-hours access. Match vendor compliance capability to placement.", audience: "Hosts" },
      { question: "What's the vendor capability tier?", answer: "Modern operator capability stack: 100% telemetry, EMV + contactless + mobile wallet, ENERGY STAR + low-GWP refrigerant fleet, 25%+ allergen-restricted SKU depth, ADA + ACAA / Section 504 audit, quarterly ESG / ACA reporting where applicable. High-traffic + federal + airport + major-institutional placements require modern.", audience: "Hosts" },
      { question: "How many vendors do I review?", answer: "Top 1-3 matched vendors typical. Locator screens vendor pool against your placement criteria + delivers ranked matches. You conduct site walks + review proposals + select operator. Locator role concludes at introduction; operator-host contract direct.", audience: "Hosts" },
      { question: "How long does matching take?", answer: "5-15 business days from host intake to vendor introduction typical. Faster at accessible segments (office, apartment, gym). Longer at hard-to-reach + compliance-sensitive (federal, airport, hospital, major-institutional). Operator site walk + proposal + contract adds 4-12 weeks after introduction.", audience: "Hosts" },
      { question: "Why does the vendor's capacity matter?", answer: "Capability-fit vendor at capacity adds placement at margin of service capability. Route degrades + stockouts rise + customer complaints + 12-month churn. Modern locators confirm vendor capacity at intake; legacy locators ignore. At-capacity vendors excluded from match; ranked alternatives identified.", audience: "Hosts" },
      { question: "What's the matching outcome calibrated against?", answer: "12-month placement churn data. Modern matching produces 10-15% 12-month churn; legacy matching 30-45%. Above-threshold churn triggers criteria recalibration. Modern locators run continuous calibration quarterly; legacy locators don't and repeat matching mistakes.", audience: "Hosts" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator standards + matching", url: "https://www.namanow.org/", note: "Industry trade association covering operator standards and placement matching" },
      { label: "FTC — Business Opportunity Rule 16 CFR 437", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation governing locator services and matching practice" },
      { label: "ACI-NA — Airports Council International North America", url: "https://airportscouncil.org/", note: "Airport vendor capability and compliance standards" },
      { label: "GSA — General Services Administration vending standards", url: "https://www.gsa.gov/", note: "Federal vending standards including GSA Schedule + Section 508 + AbilityOne" },
      { label: "Vending Market Watch — locator + matching practice coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering locator matching practice and outcomes" },
    ],
  }),
  relatedGuides({
    heading: "Related vending locator guides",
    items: [
      { eyebrow: "Sister guide", title: "How vending locator services work", description: "Locator-operator-host process from engagement to contract signing.", href: "/vending-machine-locators/how-vending-locator-services-work" },
      { eyebrow: "Operations", title: "Should you pay for vending locations", description: "Paid locator vs DIY cold calling economics and hybrid pattern.", href: "/vending-machine-locators/should-you-pay-for-vending-locations" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Locator services, matching, contracts, commissions, and business-type fit.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
