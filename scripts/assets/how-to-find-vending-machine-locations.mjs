import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-find-vending-machine-locations",
  assetType: "playbook",
  title: "Vending Location Acquisition Playbook",
  subtitle: "Six channels, location criteria scorecard, site survey, and scam avoidance",
  intro:
    "This playbook codifies the six acquisition channels operators use to build a 30+ machine route, the criteria that separate a profitable stop from a money loser, and the red flags that distinguish a real placement opportunity from a locator scam. Numbers are drawn from NAMA Industry FactBook reporting and Automatic Merchandiser State of the Industry data.",
  sections: [
    {
      heading: "1. The six acquisition channels",
      paragraph:
        "Most operators discover that 60-70% of route growth comes from referrals and direct outreach, not paid locators. Build a balanced channel mix so no single source dictates your pipeline.",
      items: [
        { number: 1, title: "Direct outreach to facility managers", description: "Cold-call or in-person visits to office parks (25-150 employees), light manufacturing, auto dealerships, and self-storage offices. Target stops with 40+ daily foot-traffic and no existing operator." },
        { number: 2, title: "Referrals from existing accounts", description: "After 90 days of clean service, ask the facility contact for a referral to a sister site, vendor in the supply chain, or peer property manager. Operators report a 35-45% close rate on warm referrals vs 3-5% on cold." },
        { number: 3, title: "Property managers + commercial brokers", description: "Multi-tenant office buildings and industrial parks centralize amenity decisions through the property manager. Bring a one-page capability sheet and a sample QBR report." },
        { number: 4, title: "Local trade associations", description: "Chamber of commerce, BOMA (Building Owners and Managers Association), IFMA (International Facility Management Association) chapter meetings, and SHRM HR roundtables surface decision-makers." },
        { number: 5, title: "Paid locators (use with caution)", description: "A locator typically charges $300-$1,200 per placed account. Vet aggressively (see scam section below). Useful for accelerating a new operator's first 5-10 placements; expensive for established routes." },
        { number: 6, title: "Digital lead capture + SEO", description: "Most facility managers Google 'vending services near [city]' before issuing an RFP. A local landing page with case studies and an RFP intake form converts at 2-4% of organic traffic." },
      ],
    },
    {
      heading: "2. Location criteria scorecard",
      paragraph:
        "Score every prospect against these criteria before committing equipment. A score below 65 typically forecasts a stop that loses money once you include depreciation, fuel, and shrinkage.",
      headers: ["Criterion", "Weight", "Threshold", "Notes"],
      rows: [
        ["Daily captive audience", "25%", "40+ people on-site for 4+ hours", "Headcount × hours-on-site predicts unit velocity better than raw headcount."],
        ["Existing operator status", "15%", "No incumbent OR incumbent on month-to-month", "Active multi-year contracts are off-limits until natural expiry."],
        ["Electrical + data infrastructure", "15%", "120V/20A within 6 feet; cellular signal -85 dBm or better", "Bad power or no signal = no telemetry = stockouts."],
        ["Foot-traffic pattern", "15%", "Concentrated breaks (8-9 AM, 12-1 PM, 3 PM)", "Steady all-day trickle yields lower per-machine revenue than concentrated peaks."],
        ["Demographics + spending power", "10%", "Median household income $45K+ in the trade area", "Verify with US Census ACS 5-year tract data."],
        ["Drive time from existing route", "10%", "≤ 30 minutes from another stop", "Isolated stops kill route economics."],
        ["Decision-maker engagement", "10%", "Facility manager or HR/admin will sign an MSA", "Avoid stops where the request came from a non-decision-maker."],
      ],
    },
    {
      heading: "3. Site survey checklist",
      items: [
        { check: "Measured floor space — 40 inch × 36 inch minimum for a snack machine; 42 inch × 32 inch for a beverage machine. ADA 305 clear floor space 30 inch × 48 inch in front." },
        { check: "Confirmed 120V/20A dedicated circuit within 6 feet (or 240V if multi-machine bank). No shared circuits with HVAC or microwaves." },
        { check: "Cellular signal test — minimum -85 dBm on the operator's carrier; otherwise plan wired ethernet or a Wi-Fi MOU with the host." },
        { check: "Photographed install location from 3 angles plus a wide-frame of the breakroom." },
        { check: "Measured doorway widths along the delivery path — minimum 36 inch clearance, 80 inch height." },
        { check: "Verified delivery dock or front-door access hours; coordinated with facility security for badged access." },
        { check: "Confirmed sales tax jurisdiction (state + local) and any prepared-food tax applicability." },
        { check: "Confirmed COI requirements — typical hosts request $1M / $2M general liability with host as additional insured." },
      ],
    },
    {
      heading: "4. The acquisition conversation",
      items: [
        { number: 1, title: "Open with capability, not product", description: "'We operate a vending route serving facilities like yours within 30 minutes. Telemetry-driven restocks, cashless on every machine, ADA-compliant signage, and a 24-hour service SLA.' Skip the brand pitch — the host cares about uptime and zero hassle." },
        { number: 2, title: "Surface the host's current pain", description: "Ask: 'How often is the current machine out of the items people actually buy?' and 'When something breaks, how long does it take?' Stockout rate >5% and service response >48 hours are the universal pain points." },
        { number: 3, title: "Propose a 60-90 day pilot", description: "Pilot with telemetry, weekly stockout reporting, and a planogram review at day 45. Pilot terms convert at 70-80% to multi-year MSAs because the host has data, not a sales pitch." },
        { number: 4, title: "Document host benefits in writing", description: "Commission structure, refund policy, planogram refresh cadence, and service SLA in the proposal — not verbal. Hosts who've been burned by prior operators need the paper trail." },
      ],
    },
    {
      heading: "5. Commission + revenue-share benchmarks",
      paragraph:
        "Commission norms vary by audience size and location difficulty. Higher commissions are not always best — a 25% commission on a high-volume stop nets the host more than 35% on a low-volume stop. The benchmarks below reflect Automatic Merchandiser 2024 State of the Industry reporting.",
      headers: ["Stop type", "Typical commission", "Notes"],
      rows: [
        ["Small office (under 50 employees)", "0-10%", "Many small stops are commission-free in exchange for service guarantees."],
        ["Mid office (50-200 employees)", "10-20%", "Standard range; host typically wants quarterly commission reporting."],
        ["Large office / industrial (200+ employees)", "15-30%", "Higher commissions often paired with exclusivity and minimum-volume guarantees."],
        ["Schools (K-12)", "10-25%", "Must comply with Smart Snacks in School (USDA 7 CFR 210.11) on competitive food sales."],
        ["Hospitals / 24/7 facilities", "15-25%", "Higher commission balanced against operator's higher service cost (shift coverage)."],
      ],
    },
    {
      heading: "6. Scam + bad-locator avoidance",
      paragraph:
        "The FTC has prosecuted multiple vending business-opportunity and locator scams under the Business Opportunity Rule (16 CFR Part 437). Red flags below correlate with the FTC and state AG settlements published since 2010.",
      items: [
        { check: "Locator promises 'guaranteed' high-traffic placements but won't name specific facilities until after payment — universal scam pattern." },
        { check: "Locator collects payment up front for placements they haven't secured. Legitimate locators tie payment to confirmed placement and a host signature." },
        { check: "Equipment-plus-locations bundle from the same vendor — classic biz-op fraud structure. Buy equipment and acquire locations through separate, independent channels." },
        { check: "Locator refuses to provide an FTC-required disclosure document if total payment exceeds the threshold ($500-$1,000 depending on state). Cite 16 CFR 437.3." },
        { check: "Locator can't provide a list of past placements you can call directly. Always call 5+ references at random." },
        { check: "Promises of $X per month per machine without specifying audience size, foot-traffic, or commission structure. Real numbers come from real telemetry data." },
        { check: "Pressure to sign within 24 hours, 'limited inventory of premium territories,' or any high-pressure close. Walk away." },
      ],
    },
    {
      heading: "7. KPIs after placement",
      items: [
        { label: "Week 1-4 baseline", value: "Capture per-SKU velocity; establish stockout-free planogram." },
        { label: "Day 45 review", value: "Planogram refresh based on actual sales. Drop bottom-quartile SKUs; expand top-quartile facings." },
        { label: "Day 90 health check", value: "Uptime ≥ 98%, stockout incidents < 3 per machine, service SLA adherence ≥ 95%, refund rate < 2%." },
        { label: "Quarterly business review", value: "Per-machine revenue trend, host satisfaction score, planogram changes, action items." },
        { label: "12-month renewal posture", value: "Stops underperforming the criteria scorecard by month 9 should be repositioned, reformulated, or pulled before renewal." },
      ],
    },
  ],
  footer:
    "This playbook is operational guidance — adapt scorecards to your route economics. LetUsVending matches qualified hosts to vetted operators across all 50 states.",
});

console.log("wrote "+"how-to-find-vending-machine-locations");
