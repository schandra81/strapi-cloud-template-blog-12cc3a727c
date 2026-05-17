import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "emergency-vending-preparedness",
  assetType: "template",
  title: "Emergency Vending Preparedness Framework",
  subtitle: "Continuity-of-vending plan, surge inventory matrix, shelter-zone map, table-top exercise",
  intro:
    "Use this framework to integrate vending into an entertainment venue's emergency-operations plan. Each section is capability-framed and references FEMA CPG 101 (Comprehensive Preparedness Guide), NFPA 1600 (Continuity, Emergency, and Crisis Management Programs), NIMS ICS, ASTM E2876 (mass-care planning), FDA Food Code 2022 cold-chain rules, and ADA Section 308. Operator capability should be confirmed in writing before contract execution.",
  sections: [
    {
      heading: "1. Continuity of Vending Plan (CVP) template",
      paragraph:
        "The Continuity of Vending Plan is a 1-3 page operator + venue agreement that describes how vending continues to operate (or is preserved as a relief asset) during an emergency. Models on FEMA CPG 101 continuity-planning structure.",
      items: [
        { label: "Scope", value: "Defines which placements are covered (front-of-house, back-of-house, shelter zone, cast-only, gate-adjacent). Specifies hazards covered (severe weather, power outage, active threat, fire, public-health event, civil unrest)." },
        { label: "Concept of operations", value: "Pre-event, during-event, post-event roles for operator + venue. Maps to NIMS ICS — operator assigns a vending liaison to the venue's Incident Command." },
        { label: "Restock + power", value: "Pre-event restock cadence (T-72, T-24, T-0); back-up power source identification (generator circuit, UPS); refrigeration ride-through plan." },
        { label: "Cashless + cash continuity", value: "Cashless fallback if telco/network down (offline-mode payment, cash acceptance, manual voucher). Operator should attest to offline-mode capability." },
        { label: "Communications", value: "Operator-side contact tree (24/7 number, SMS, email); venue-side EOC notification path; resident/guest-facing comms via venue channels." },
        { label: "Plan review", value: "Annual review co-signed by operator + venue EOC director; updates after each activation." },
      ],
    },
    {
      heading: "2. Surge inventory matrix",
      paragraph:
        "Pre-position SKUs that match the most-likely emergency-need profile. Water + shelf-stable calories + electrolyte are the baseline; specific SKU mix shifts by hazard.",
      headers: ["Hazard", "Water (per capita / day)", "Shelf-stable cal", "Electrolyte", "Other"],
      rows: [
        ["Severe weather (overnight)", "1 gal", "1,500-2,000 cal", "8-16 oz", "Snack, granola, jerky, peanut butter cracker"],
        ["Power outage", "1 gal", "1,500-2,000 cal", "8-16 oz", "Same — emphasize non-perishable; deprioritize fresh"],
        ["Public-health (extended dwell)", "1 gal", "2,000 cal", "16 oz", "Allergen-tagged + dietary diversity (kosher, halal, gluten-free)"],
        ["Active threat / shelter-in-place", "0.5 gal (short duration)", "500-1,000 cal", "8 oz", "Quiet-pack snacks (no loud wrappers)"],
        ["Civil unrest / extended lockdown", "1 gal", "2,000 cal", "16 oz", "Same as public-health"],
      ],
    },
    {
      heading: "3. Shelter-zone map + placement",
      items: [
        { label: "Primary shelter zone", value: "Locate vending within or immediately adjacent to the designated primary shelter (typically reinforced interior space — concourse, basement, gym, theater)." },
        { label: "Secondary shelter zone", value: "Vending in secondary shelter (cast areas, back-of-house) to serve staff during extended events." },
        { label: "Cold-chain backup", value: "Identify which vending units are on the back-up power circuit (generator, UPS). FDA Food Code 3-501.19 — refrigerated foods discarded if above 41°F for > 4 hours; cold-chain ride-through prevents avoidable discard." },
        { label: "ADA + accessibility in shelter", value: "Shelter-zone vending must remain ADA Section 308 compliant (reach range, clear floor space, operating force) even during emergency operations." },
        { label: "Map artifact", value: "Floor plan with all vending placements marked, shelter-zone overlay, generator-fed unit overlay, primary + secondary egress overlay. Updated annually; provided to venue EOC + operator." },
      ],
    },
    {
      heading: "4. Table-top exercise (TTX) guide",
      paragraph:
        "Run an annual table-top exercise to validate the Continuity of Vending Plan. Adapted from FEMA HSEEP (Homeland Security Exercise and Evaluation Program).",
      items: [
        { number: 1, title: "Define exercise scope", description: "Pick one or two hazards (e.g., severe weather + power outage). Define exercise window (90-120 minutes), participant roster (venue EOC, operator vending liaison, facilities, food safety, comms)." },
        { number: 2, title: "Set the scenario", description: "Realistic scenario with injects (e.g., 'Storm forecast 72 hours out → power outage hour 6 → 8 hours of refrigeration loss → public-info request'). Distribute scenario brief 48 hours before TTX." },
        { number: 3, title: "Inject 1 — pre-event", description: "T-24: pre-event restock + back-up power confirmation. Discuss decision points + resource gaps." },
        { number: 4, title: "Inject 2 — during event", description: "Power outage hour 3: cold-chain ride-through monitoring; cashless offline-mode activation; comms to staff + guests." },
        { number: 5, title: "Inject 3 — post-event", description: "Power restored hour 14: cold-chain assessment + product discard decisions per FDA Food Code 3-501.19; restock cadence; refund / complaint flow." },
        { number: 6, title: "After-action review (AAR)", description: "Capture gaps, owners, due dates. Update Continuity of Vending Plan within 30 days. AAR retained in venue + operator files for 3 years per NFPA 1600 best practice." },
      ],
    },
    {
      heading: "5. Operator capability checks",
      items: [
        { check: "Operator should attest to assigning a vending liaison to the venue's Emergency Operations Center / Incident Command during activations." },
        { check: "Operator should attest to a 24/7/365 emergency contact number with ≤ 1 hour response time during active emergencies." },
        { check: "Operator should attest to offline-mode cashless capability (transaction queued, settled on reconnection) and cash-fallback capability for at least 1 unit per shelter zone." },
        { check: "Operator should attest to pre-positioned surge inventory ≥ 50% above baseline for hazard-season placements (tornado, hurricane, wildfire seasons by region)." },
        { check: "Operator should attest to FDA Food Code 3-501.19 cold-chain discard procedure + restock SLA after a power-outage event (target ≤ 24 hours from power restoration)." },
        { check: "Operator should provide $5M general liability + product liability, additional-insured endorsement to venue, and a written CVP signed by operator + venue EOC director." },
      ],
    },
    {
      heading: "6. Pricing + free-vend during emergencies",
      items: [
        { label: "Free-vend authorization", value: "Venue EOC director may authorize free-vend during a declared emergency; operator implements via remote-disable of payment requirement or operator-side over-ride code." },
        { label: "Price-gouging compliance", value: "Most states prohibit price-gouging during declared emergencies (state attorney general jurisdiction). Operator commits in CVP to no price increase during declared emergencies; reduces enforcement and reputational risk." },
        { label: "Cost recovery", value: "Venue + operator pre-agree on cost recovery for free-vend periods (operator absorbs to a defined ceiling; venue underwrites above ceiling)." },
        { label: "Documentation", value: "Operator logs all free-vend transactions with venue authorization timestamp; preserves for audit + insurance recovery." },
      ],
    },
    {
      heading: "7. Reporting + post-event review",
      items: [
        { check: "During event: hourly status report from operator vending liaison to venue EOC (uptime, inventory level, cold-chain status)." },
        { check: "Post-event: 24-hour rapid AAR; 14-day full AAR with operator + venue debrief." },
        { check: "Discard report per FDA Food Code 3-501.19 (cold-chain failure documentation, product discarded, refund volume)." },
        { check: "Insurance claim filing within carrier-specified window (typically 30 days for property-damage; 60 days for business-interruption)." },
        { check: "Plan update + sign-off within 30 days; refresh of TTX schedule." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, emergency-management, or food-safety advice. Emergency response is governed by NIMS, the venue's emergency operations plan, and applicable local + state + federal authorities. Confirm operator capability and CVP execution before relying on vending as part of the emergency response plan.",
});

console.log("wrote " + "emergency-vending-preparedness");
