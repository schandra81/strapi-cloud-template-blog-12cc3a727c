import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-public-park-events",
  assetType: "rfp template",
  title: "Parks-System Vending RFP Template",
  subtitle: "Permanent + event provisions, outdoor-rated equipment specs, and operator capability matrix",
  intro:
    "Use this RFP template to solicit vending bids for a parks system — combining permanent year-round placements (visitor centers, busy trailheads, plaza pavilions) with event provisions for festivals, concerts, races, and seasonal activations. The template specifies outdoor-rated equipment, weather contingency, permit posture, and the SLA appropriate to public-space placements.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Parks system scope", value: "(specify — e.g., 30-park municipal system, single regional park district, state-park concession). Capability framing — describe scale, not specific park names." },
        { label: "Placements in scope", value: "Permanent: visitor centers, trailheads, plaza pavilions, recreation buildings. Event: festivals, concerts, races, seasonal activations. Operator scopes each separately." },
        { label: "Contract term", value: "3-5 year initial with annual seasonal-mix review." },
        { label: "Compliance authority", value: "Parks department, local health department, FDA Food Code 2022 where TCS food is sold, ADA Section 308 / 305, local AHJ for temporary structures." },
      ],
    },
    {
      heading: "2. Permanent placement requirements",
      headers: ["Placement type", "SKU breadth", "Equipment", "Cadence"],
      rows: [
        ["Visitor center (indoor)", "30-45", "Standard glass-front combo; UL 751", "2-3 visits/week"],
        ["Trailhead (outdoor, covered)", "20-30", "NEMA 3R outdoor-rated cabinet; UL 751 + outdoor-listed power supply", "Weekly + telemetry-driven"],
        ["Plaza pavilion (outdoor, exposed)", "25-35", "NEMA 4 weather-rated; tamper-resistant cabinet; UL 751", "Weekly + telemetry-driven"],
        ["Recreation building", "30-45", "Standard glass-front combo; ADA Section 308", "2-3 visits/week"],
      ],
    },
    {
      heading: "3. Event provision framework",
      paragraph:
        "Event placements are scoped on top of the permanent network. Operator commits to mobilization timelines per Section 4.",
      items: [
        { number: 1, title: "Event request lead time", description: "Parks department issues event request T-30 days; operator confirms scope + pricing within 5 business days." },
        { number: 2, title: "Mobilization", description: "Operator deploys event-specific machines T-2 days; pre-stocks per planogram; commissions telemetry + cashless payment." },
        { number: 3, title: "Operations", description: "Operator covers event hours with restock surge crew; uptime SLA per Section 6." },
        { number: 4, title: "De-mobilization", description: "Operator removes event-specific units T+1; final reconciliation within 5 business days." },
        { number: 5, title: "Event-specific permits + insurance", description: "Operator files temporary food-service permits (where TCS), tent permits (NFPA 1 Chapter 25 / IFC Chapter 38), and provides event-day COI naming parks system + event producer as additional insured." },
      ],
    },
    {
      heading: "4. Outdoor-rated equipment specifications",
      items: [
        { label: "Enclosure rating", value: "NEMA 3R minimum for covered outdoor (rain only); NEMA 4 for uncovered or hose-down (dust + water-jet). Specify per placement." },
        { label: "Temperature operating range", value: "Most refrigerated vending operates 35°F-100°F ambient. Below 32°F or above 105°F requires shade structure, supplemental cooling, or temporary relocation." },
        { label: "UV + weatherability", value: "Cabinet finish + branding vinyl rated for outdoor UV (3M IJ180mC or Avery MPI 1105 with laminated overlay; 7-year outdoor durability)." },
        { label: "Tamper + theft resistance", value: "16-gauge steel cabinet; UL 437 high-security keyway; bolted to pad where placement permits." },
        { label: "Power + data", value: "Hardwired or solar-augmented per placement; cellular telemetry (sub-15-min heartbeat) since most park placements lack WAN." },
        { label: "Accessibility", value: "ADA Section 308 reach range maintained even at outdoor placements; pad-grade Section 305 clear floor space; ADA-compliant approach path per 2010 ADA Standards 402." },
      ],
    },
    {
      heading: "5. Weather + safety contingency",
      items: [
        { check: "Operator publishes severe-weather protocol: wind gusts > 40 mph, lightning within 8 mi, or NWS severe-weather warning triggers shutdown + lockdown per facility safety policy." },
        { check: "Wildfire-zone placements: operator coordinates with parks fire-management for evacuation + equipment-removal protocol." },
        { check: "Freezing-zone placements: operator drains beverage supply lines (where applicable) and switches refrigerated units to standby per manufacturer cold-weather guidance." },
        { check: "Heat-zone placements: operator confirms equipment cooling capacity above 100°F; supplemental shade or temporary relocation triggered above 105°F." },
        { check: "Flood-zone placements: operator confirms pad elevation and detachable-anchor protocol where 100-year floodplain applies." },
      ],
    },
    {
      heading: "6. SLA framework",
      headers: ["Item", "Permanent SLA", "Event SLA"],
      rows: [
        ["Uptime (operating hours)", "95%", "98%"],
        ["Stockout SLA", "48 hours per-SKU", "1 hour during event peak"],
        ["Cold-chain alert response", "4 hours on-site", "2 hours on-site"],
        ["Refund auto-credit", "24 hours (cashless)", "4 hours (cashless)"],
        ["Damage / vandalism repair", "7 business days", "T+1 of next event"],
        ["Reporting", "Monthly + quarterly", "Per-event flash within 24 hours"],
      ],
    },
    {
      heading: "7. Operator capability matrix",
      headers: ["Criterion", "Weight"],
      rows: [
        ["Outdoor-rated equipment portfolio (Section 4)", "20%"],
        ["Permanent + event capability mix (Sections 2 + 3)", "15%"],
        ["Telemetry + uptime track record", "15%"],
        ["Weather + safety contingency (Section 5)", "10%"],
        ["Restock cadence + SLA commitment (Section 6)", "10%"],
        ["Permit + insurance posture", "10%"],
        ["Pricing transparency", "15%"],
        ["ADA / accessibility", "5%"],
      ],
    },
    {
      heading: "8. Required attachments",
      items: [
        { check: "Outdoor equipment spec sheets (NEMA, UL, temperature operating range)." },
        { check: "Permanent + event planogram samples." },
        { check: "Weather + safety contingency runbook (Section 5)." },
        { check: "Sample monthly + per-event reports." },
        { check: "Insurance certificate, $2M GL minimum, listing parks system as additional insured." },
        { check: "References: 3 parks / outdoor / event contacts (last 24 months) — capability framing." },
      ],
    },
    {
      heading: "9. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal." },
        { label: "Due date", value: "(specify — typically 30-45 days)" },
        { label: "Mandatory site walk", value: "Walk through 2-3 representative permanent placements + 1 event footprint; capability framing in scoring." },
        { label: "Award", value: "(specify — typically 45-75 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage parks procurement and risk counsel before issue. Permit and insurance requirements vary by jurisdiction.",
});

console.log("wrote "+"vending-public-park-events");
