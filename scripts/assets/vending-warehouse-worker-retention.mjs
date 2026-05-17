import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-warehouse-worker-retention",
  assetType: "playbook",
  title: "Warehouse Amenity-for-Retention Playbook",
  subtitle: "Workforce baseline + program design template + retention ROI model + operator RFP language + measurement cadence",
  intro:
    "Warehouse separation rates run 50-65% annually at most US logistics hubs (BLS JOLTS), and 100%+ at high-pressure operations. Vending and break-room amenity is consistently ranked in the top-5 workplace factors affecting frontline retention (Gallup Q12, MIT Sloan workforce surveys). This playbook codifies the design, ROI, and measurement framework an operator should be equipped to deliver.",
  sections: [
    {
      heading: "1. Workforce baseline framework",
      paragraph:
        "Retention ROI begins with measuring the right baseline. The program design must reflect the workforce being served.",
      items: [
        { label: "Headcount by shift", value: "Total headcount across 3-4 shifts; peak shift drives equipment count." },
        { label: "Voluntary separation rate", value: "Pull from HRIS (Workday, UKG, ADP, Ceridian). Industry benchmark: 50-65% annual voluntary separation (BLS JOLTS warehousing)." },
        { label: "Cost-per-separation", value: "SHRM benchmark: 50-60% of annual salary for frontline replacement (recruiting, onboarding, productivity ramp). At $40k average warehouse base, that's $20-24k per separation." },
        { label: "Engagement baseline", value: "Gallup Q12 score or pulse-survey result. 'I have the materials and equipment to do my work right' and 'in the last seven days, I have received recognition' correlate strongly with retention." },
        { label: "Amenity baseline", value: "Current break-room equipment, vending uptime, planogram health, worker satisfaction survey verbatims." },
      ],
    },
    {
      heading: "2. Program design template",
      paragraph:
        "Retention-oriented vending programs typically include four design elements above a baseline 24/7 amenity.",
      items: [
        { number: 1, title: "Subsidy or stipend", description: "Host funds a monthly stipend (e.g., $15-25/worker/month healthy-food credit). Worker uses at the kiosk or vending; overage flows to payroll deduct or card. Removes the 'I'm too broke for break-room food' friction at end of pay cycle." },
        { number: 2, title: "Recognition tokens", description: "Perfect-attendance, safety-milestone, and tenure-milestone events push one-time credits to the worker's vending account via HRIS integration. Gallup data shows tangible recognition correlates with reduced turnover at the 60-90 day tenure cliff." },
        { number: 3, title: "Wellness tie-in", description: "Healthy-SKU purchases credited toward the host wellness program (Virgin Pulse, Limeade, WellRight). Aligns vending with the worker-health narrative HR is already running." },
        { number: 4, title: "Communication kit", description: "Multi-language signage (English + Spanish minimum), QR-to-refund flow, monthly LTO highlights, shift-huddle launch deck. Amenity has to feel visible — not just present." },
      ],
    },
    {
      heading: "3. Retention ROI model",
      paragraph:
        "Use this framework to size the program. Numbers are illustrative; substitute your HRIS values.",
      headers: ["Input", "Example value", "Notes"],
      rows: [
        ["Frontline headcount", "1,500", "Peak-shift across 3 shifts"],
        ["Annual voluntary separation rate (baseline)", "60%", "BLS warehousing benchmark"],
        ["Cost per separation", "$22,000", "SHRM 55% of $40k base"],
        ["Annual separation cost (baseline)", "$19.8M", "1,500 × 60% × $22k"],
        ["Retention uplift target", "3-5 pp reduction in voluntary separation rate", "MIT Sloan: amenity programs typically deliver 2-7 pp"],
        ["Avoided separation cost at 3 pp uplift", "$990k/yr", "1,500 × 3% × $22k"],
        ["Program annual cost (subsidy + tokens + equipment refresh)", "$300-500k", "Sized by stipend × headcount × 12"],
        ["Net retention ROI", "$490-690k/yr at 3 pp uplift", "Before counting productivity + safety + recruiting savings"],
      ],
    },
    {
      heading: "4. Operator RFP language",
      items: [
        { number: 1, title: "Subsidy + stipend integration", description: "'Operator's kiosk + app supports host-funded subsidies and stipends, redeemable against eligible SKUs as defined by Host. Operator integrates via SSO/SCIM to Host's HRIS (Workday, UKG, ADP, Ceridian, or comparable). Operator does not collect or store worker SSN, DOB, or pay-rate data.'" },
        { number: 2, title: "Recognition token feed", description: "'Operator supports inbound API feed of one-time credit events from Host's HRIS or recognition platform (Workhuman, Bonusly, Awardco, or comparable). Credits redeemable at all touchpoints; expiration window configurable by Host.'" },
        { number: 3, title: "Wellness program integration", description: "'Operator supports outbound activity feed to Host's wellness platform (Virgin Pulse, Limeade, WellRight, or comparable) tagging healthy-SKU purchases. Tagging methodology aligned with Partnership for a Healthier America standards.'" },
        { number: 4, title: "Multi-language signage capability", description: "'Operator provides machine-face signage and refund-flow communication in English and Spanish at minimum, with additional languages by Host facility demographics. Pictographic SKU labels for low-literacy support.'" },
        { number: 5, title: "Reporting cadence", description: "'Operator delivers monthly retention-relevant metrics: % of workers active on the program, subsidy redemption rate, healthy-SKU velocity, refund volume, satisfaction-survey verbatims.'" },
      ],
    },
    {
      heading: "5. Measurement cadence",
      paragraph:
        "Retention ROI is a leading-indicator + lagging-indicator measurement. Both must be tracked.",
      items: [
        { label: "Weekly leading indicators", value: "Per-machine uptime, refund rate, restock cadence adherence, Tier 1 SLA adherence." },
        { label: "Monthly leading indicators", value: "% of workers active on the program, average spend per worker, subsidy redemption rate, healthy-SKU share." },
        { label: "Quarterly lagging indicators", value: "Voluntary separation rate (3 months trailing, vs baseline), Gallup Q12 score (where surveyed), break-room amenity satisfaction (pulse survey)." },
        { label: "Annual outcome", value: "ROI calculation: avoided separation cost - program cost; productivity + safety incident rate as secondary measures." },
      ],
    },
    {
      heading: "6. Privacy + data minimization",
      items: [
        { check: "Operator processes transaction metadata only (machine ID, SKU, timestamp, payment method, host-issued worker token)" },
        { check: "Operator does not store worker PII (SSN, DOB, pay rate, address)" },
        { check: "HRIS feed runs via host's HRIS API; operator receives only the data needed for subsidy redemption and recognition crediting" },
        { check: "PCI DSS Level 1 or 2 attestation on file" },
        { check: "Annual recertification of data-sharing posture with host privacy officer" },
        { check: "State privacy law compliance (CCPA, CPRA, VCDPA, CPA, etc.) — consumer-rights request flow defined" },
      ],
    },
    {
      heading: "7. Service SLA",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain / HRIS feed", "Offline > 30 min, temperature excursion, payroll-deduct feed failure", "30 minutes", "4 hours on-site or 4 hours data-feed restoration"],
        ["Tier 2 — stockout / planogram / recognition feed", "Stockout, planogram refresh, recognition token not landing", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Voluntary separation rate trend (vs baseline)" },
        { check: "Program participation rate (% of workers active)" },
        { check: "Subsidy redemption rate" },
        { check: "Recognition token redemption rate" },
        { check: "Healthy-SKU share + velocity" },
        { check: "Worker feedback summary + pulse-survey verbatims" },
        { check: "ROI model refresh (avoided separation cost - program cost)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or HR advice. Coordinate with HR, payroll/HRIS, wellness program manager, and General Counsel before deploying subsidy or HRIS-integrated programs. LetUsVending is equipped to arrange operators with documented retention-program capability.",
});

console.log("wrote "+"vending-warehouse-worker-retention");
