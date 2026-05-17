import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-vending-programs-for-manufacturing",
  assetType: "playbook",
  title: "Custom Manufacturing Vending Program Playbook",
  subtitle: "Nine-dimension design framework + facility-profile-driven specifications + ROI structure",
  intro:
    "A 'custom' manufacturing vending program is one where nine design dimensions are tuned to the facility profile rather than to a generic operator template. This playbook codifies those dimensions, the facility-profile inputs that drive them, and the ROI structure an operator should be equipped to deliver.",
  sections: [
    {
      heading: "1. Nine-dimension design framework",
      paragraph:
        "A custom program is defined by deliberate choices across nine dimensions. Capture the facility's choice on each before issuing an RFP.",
      headers: ["Dimension", "Decision range", "Driver"],
      rows: [
        ["Format", "Vending / micro-market / pantry / hybrid", "Headcount, footprint, security posture"],
        ["Equipment refrigeration", "R-290 / R-744 / legacy R-404A", "ESG posture, sustainability targets"],
        ["Payment", "Cashless-only / cash+cashless / payroll deduct", "Workforce banking access, HRIS capability"],
        ["Planogram", "Standard / shift-aware / healthy-weighted / ethnic-weighted", "Demographic + workforce health priorities"],
        ["Pricing", "Retail / subsidized / fully comped", "HR / wellness program funding"],
        ["Telemetry depth", "Basic uptime / per-SKU velocity / per-shift / AI vision", "Operations maturity + reporting needs"],
        ["Communication", "English-only / multi-language / pictographic", "Workforce language profile"],
        ["Service SLA", "Standard / sub-4-hour / sub-2-hour", "Production-criticality of break-time efficiency"],
        ["ESG reporting", "None / scope 2 only / full CDP+GRI roll-up", "Sustainability disclosure scope"],
      ],
    },
    {
      heading: "2. Facility profile inputs",
      paragraph:
        "Each design choice is driven by facility-profile data. Collect these inputs before design.",
      items: [
        { label: "Workforce composition", value: "Headcount by shift, age/gender mix, language distribution, average tenure, voluntary separation rate (HRIS pull)." },
        { label: "Production criticality", value: "Break-time efficiency — how many minutes a vending outage adds to break time × workers × shifts/day = labor cost of downtime." },
        { label: "Existing amenity baseline", value: "Current equipment, uptime, planogram health, satisfaction survey verbatims." },
        { label: "Sustainability targets", value: "Facility scope 2 reduction targets, CDP / GRI reporting scope, R-290 transition timeline (if any)." },
        { label: "EHS profile", value: "OSHA recordables, heat-stress program, hearing conservation, hi-vis PPE, badge-controlled break room or open access." },
        { label: "Regulatory overlay", value: "FDA Food Code state adoption, state break-law requirements, state alcohol/tobacco posture (if relevant), state nutrition mandates (CA, MA, MN)." },
      ],
    },
    {
      heading: "3. Equipment specification template",
      items: [
        { label: "Refrigeration tier (preferred)", value: "ENERGY STAR-qualified, R-290 hydrocarbon refrigerant (GWP 3), LED interior, EC fan motors, sleep-mode programming. ENERGY STAR Refrigerated Beverage Vending Machines V4.0." },
        { label: "Snack tier", value: "LED interior, vacuum sensors, glass-front, ADA Section 308/309/703 compliance, multi-language signage capability." },
        { label: "Coffee tier (if elected)", value: "NSF/ANSI 18 food-zone certified, descaling cycle 4-6 weeks, FDA Food Code 4-202." },
        { label: "Payment tier", value: "EMV chip + contactless + mobile wallet + QR fallback; payroll deduct via HRIS API where the host elects." },
        { label: "Telemetry tier", value: "Cellular sub-15-minute heartbeat; per-shift velocity reporting; temperature logs 12-month retention; dashboard access for facility + corporate viewers." },
        { label: "Kiosk tier (if micro-market)", value: "PCI DSS Level 1/2, VPAT for accessibility, screen-reader audio output, large-character mode." },
      ],
    },
    {
      heading: "4. Planogram design — facility-profile-driven",
      paragraph:
        "Three planogram archetypes cover most manufacturing facilities. Custom programs blend across archetypes.",
      headers: ["Archetype", "Water/electrolyte", "Caffeine", "Snacks", "Healthy/protein", "Meal", "Sundry"],
      rows: [
        ["Hot-environment (foundry, steel, food production)", "35-40%", "10-15%", "15-20%", "10-15%", "10-15%", "5%"],
        ["Standard 3-shift production", "25%", "15-20%", "20-25%", "15-20%", "15%", "5%"],
        ["Cold-environment (cold storage, frozen food)", "15-20%", "25-30%", "15-20%", "15%", "15-20%", "5%"],
      ],
    },
    {
      heading: "5. ROI structure",
      paragraph:
        "ROI for a custom manufacturing program calculates across four buckets. Quantify each in the design phase to defend the budget.",
      items: [
        { number: 1, title: "Break-time efficiency", description: "Vending uptime + adequate planogram reduces minutes-per-break by 1-3 min. At 1,000 workers × 2 breaks/shift × 3 shifts × $30 fully-loaded labor cost, every 1 min saved is $3M/year." },
        { number: 2, title: "Voluntary separation reduction", description: "Amenity is a top-5 retention factor per Gallup Q12 and MIT Sloan workforce research. 2-5 pp reduction in voluntary separation at 50%+ baseline rate = $200-600k avoided cost per 500-worker facility (at SHRM 55%-of-base separation cost)." },
        { number: 3, title: "Health + benefits cost trajectory", description: "Healthy-SKU weighted planograms + employer subsidy contribute to wellness program engagement. Multi-year studies (Goetzel et al., JOEM) suggest 1-3% reduction in benefits cost trajectory for engaged workforces." },
        { number: 4, title: "Sustainability + scope 2 contribution", description: "R-290 + ENERGY STAR fleet reduces facility scope 2 by 5-15% of vending-attributable kWh. Contributes to corporate CDP / SBTi targets." },
      ],
    },
    {
      heading: "6. Operator RFP language",
      items: [
        { check: "'Operator can attest to and provide reference for the nine-dimension design framework specified by Host'" },
        { check: "'Operator's fleet at this facility will be ≥ 95% ENERGY STAR-certified and ≥ 50% R-290 refrigerant within 12 months of contract effective date; 100% within 36 months'" },
        { check: "'Operator supports multi-language signage (English + Spanish minimum) and pictographic SKU labels for low-literacy support'" },
        { check: "'Operator integrates payroll-deduct and subsidy via Host HRIS API; Operator does not store worker SSN, DOB, or pay-rate data'" },
        { check: "'Operator delivers monthly scope 2 emissions report compatible with CDP and GRI 305-2 disclosure'" },
        { check: "'Operator's Tier 1 SLA is ≤ 4-hour on-site for offline > 30 min, payment failure, or temperature excursion. Penalty for breach written into the agreement'" },
        { check: "'Operator provides quarterly business review report covering uptime, per-shift velocity, refund volume, subsidy redemption, scope 2 emissions, and worker feedback'" },
      ],
    },
    {
      heading: "7. Service SLA",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain / HRIS feed", "Offline > 30 min, temperature excursion, payment down, payroll-deduct feed failure", "30 minutes", "4 hours on-site or 4 hours data restoration"],
        ["Tier 2 — stockout / planogram / subsidy", "Stockout, planogram refresh, subsidy credit not landing", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Uptime + Tier 1 SLA breach rate" },
        { check: "Per-shift velocity vs planogram-target ratio" },
        { check: "Subsidy + recognition redemption rate" },
        { check: "Healthy-SKU share + velocity" },
        { check: "Voluntary separation rate trend (vs baseline)" },
        { check: "Scope 2 emissions report + R-290 transition status" },
        { check: "Worker feedback summary (multi-language verbatim review)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal advice. Coordinate with Facilities, EHS, HR, IT, Sustainability, Procurement, and General Counsel before contracting. LetUsVending is equipped to arrange operators with documented custom-program design capability across the nine dimensions.",
});

console.log("wrote "+"custom-vending-programs-for-manufacturing");
