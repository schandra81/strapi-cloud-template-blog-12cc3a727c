import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "future-vending-trends-logistics",
  assetType: "playbook",
  title: "Logistics Vending Future-Readiness Playbook",
  subtitle: "Capability audit, modern RFP language, AI cooler deployment, workforce-platform integration",
  intro:
    "Logistics-hub vending is in transition. AI computer-vision coolers, app-based workforce platforms, and ESG reporting expectations are now in the RFP cycle. This playbook codifies the capabilities a forward-looking operator should be equipped to deliver and how to write them into your next agreement.",
  sections: [
    {
      heading: "1. Capability audit — score your current operator",
      paragraph:
        "Score 0-2 per capability (0 = absent, 1 = roadmap, 2 = in-production). 12-14 indicates current state; below 8 indicates a refresh cycle is overdue.",
      headers: ["Capability", "What to look for", "Score 0-2"],
      rows: [
        ["Cellular telemetry sub-15-minute heartbeat", "Real-time dashboard, not nightly batch", "_"],
        ["Per-shift velocity reporting", "Velocity sliced by hour window, not daily totals", "_"],
        ["AI computer-vision cooler readiness", "Operator has deployed AWM, Boxie, Foxbox, AiFi, or comparable at ≥ one customer", "_"],
        ["Workforce-platform integration", "Operator app or kiosk can SSO to Workday, UKG, ADP, Ceridian", "_"],
        ["Scope 2 emissions reporting", "kWh + emission-factor report per machine, quarterly", "_"],
        ["R-290 refrigerant fleet conversion", "≥ 50% of fleet on R-290; replacement path for the remainder", "_"],
        ["FALCPA + state nutrition compliance", "Automated allergen-label audit; planogram tagging", "_"],
      ],
    },
    {
      heading: "2. Modern RFP language — clauses to add",
      paragraph:
        "Copy these clauses into your next RFP. Each is enforceable, measurable, and reflects a 2026-era logistics operator's standard capability.",
      items: [
        { number: 1, title: "AI cooler readiness", description: "'Operator has deployed AI computer-vision coolers (AWM Smart Shelf, Boxie, Foxbox, AiFi, or comparable) at no fewer than one (1) Fortune 500 logistics customer in the past 24 months. Operator will provide a customer reference letter on request.'" },
        { number: 2, title: "Telemetry transparency", description: "'Operator provides Host real-time access to a property-level dashboard showing per-machine uptime, last-restock timestamp, per-SKU velocity, refund volume, and temperature logs (where refrigerated). Dashboard available via web and mobile.'" },
        { number: 3, title: "Energy + scope 2 reporting", description: "'Operator provides quarterly scope 2 emissions report covering all machines at Host's facility: kWh consumption per machine × the applicable regional emission factor (eGRID subregion or local-grid factor). Report compatible with CDP and GRI 305-2 disclosure.'" },
        { number: 4, title: "Refrigerant transition", description: "'Operator attests that no fewer than fifty percent (50%) of refrigerated machines deployed at Host's facility use R-290 hydrocarbon refrigerant or other refrigerant with GWP ≤ 150. Operator commits to one hundred percent (100%) within thirty-six (36) months of contract effective date.'" },
        { number: 5, title: "Workforce-platform integration", description: "'Operator's kiosk + app supports SSO via SCIM 2.0 or OIDC to Host's HRIS (Workday, UKG, ADP, Ceridian, or comparable). Payroll-deduct integration runs through Host's HRIS API; Operator does not store employee SSN, DOB, or pay-rate data.'" },
        { number: 6, title: "Data privacy + minimization", description: "'Operator processes transaction metadata only — machine ID, SKU, timestamp, payment method, and the Host-issued loyalty token where applicable. Operator does not collect, store, or share worker PII outside the Host's HRIS-mediated integration channel.'" },
      ],
    },
    {
      heading: "3. AI computer-vision cooler deployment framework",
      paragraph:
        "AI coolers replace coil-and-spiral vending with a refrigerated case where workers tap a card, open the door, take items, and the system charges automatically. Velocity uplift commonly reported at 25-50% vs equivalent vending square footage.",
      items: [
        { number: 1, title: "Site survey", description: "Network: 1 dedicated Ethernet drop per cooler, or 5G/LTE-M cellular with ≥ 10 Mbps sustained. Power: dedicated 20A circuit, no shared loads. Lighting: ambient 50-200 lux at the case (computer vision performance is lighting-sensitive)." },
        { number: 2, title: "Inventory + planogram setup", description: "Vendor or operator loads SKU master with weight, dimensions, image references. Computer-vision training period 2-4 weeks during which accuracy is monitored at 95%+." },
        { number: 3, title: "Payment + identity", description: "EMV chip, contactless, mobile wallet at minimum. Payroll-deduct via HRIS integration where the host elects." },
        { number: 4, title: "Performance monitoring", description: "Accuracy ≥ 98% transaction recognition; mis-charge rate < 1%. Vendor SLA covers vision-model recalibration when accuracy slips." },
        { number: 5, title: "Workforce communication", description: "Launch huddle for shift-by-shift orientation; refund flow signage prominent; FAQ card at the cooler." },
      ],
    },
    {
      heading: "4. Workforce-platform integration",
      paragraph:
        "Integration with the host's HRIS turns vending into a managed-benefit touchpoint without compromising worker privacy.",
      items: [
        { label: "Payroll deduction", value: "Worker enrolls via host SSO. Transactions accumulate over the pay period; total deducted on payday. HRIS API receives the file (Workday, UKG, ADP, Ceridian)." },
        { label: "Subsidy + employer-paid programs", value: "Host funds a monthly stipend (e.g., $20/month healthy-food subsidy). Worker uses it at the kiosk or cooler with no out-of-pocket up to the stipend; overage flows to payroll deduct or card." },
        { label: "Shift-recognition tokens", value: "Worker completes shift perfect-attendance milestone; HRIS pushes a one-time credit to the worker's vending account." },
        { label: "Wellness program tie-in", value: "Healthy-SKU purchases counted toward wellness program points (where the host's wellness vendor — Virgin Pulse, Limeade, WellRight — supports an inbound activity feed)." },
      ],
    },
    {
      heading: "5. ESG + reporting framework",
      items: [
        { number: 1, title: "Scope 2 emissions", description: "Quarterly report: kWh per machine × eGRID subregion factor → tCO2e. Aggregated to facility level for the host's CDP, GRI 305-2, or SASB disclosure." },
        { number: 2, title: "Refrigerant inventory", description: "Per-machine refrigerant type, charge weight, and end-of-life reclaim attestation. Aggregated for the host's EPA SNAP and Significant New Alternatives Policy reporting." },
        { number: 3, title: "Packaging + waste", description: "Operator pulls dated SKUs for waste audit; donation-where-possible attestation (Bill Emerson Good Samaritan Food Donation Act protections)." },
        { number: 4, title: "Workforce wellness reporting", description: "Healthy-SKU share of facings; healthy-SKU velocity. Reported to the host wellness program for ROI calculation." },
      ],
    },
    {
      heading: "6. Service SLA — future-state",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — AI cooler / kiosk down", "AI cooler offline, kiosk down, payment failure, cold-chain excursion", "15 minutes (real-time alert)", "4 hours on-site"],
        ["Tier 2 — stockout / vision recalibration", "Stockout, AI accuracy drift, planogram refresh", "12 hours", "Next visit or 48 hours"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
        ["Data + reporting", "Dashboard down, ESG report missing", "Same-day", "72 hours"],
      ],
    },
    {
      heading: "7. Quarterly business review",
      items: [
        { check: "Uptime report by machine and cooler" },
        { check: "AI cooler accuracy + mis-charge rate" },
        { check: "Per-shift velocity vs planogram-target ratio" },
        { check: "Scope 2 emissions report + R-290 transition status" },
        { check: "Workforce-platform integration health (HRIS feed success rate)" },
        { check: "Refund + dispute volume" },
        { check: "Worker feedback summary" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal advice. Coordinate with hub EHS, HR, IT, sustainability, and procurement before contracting modern-capability terms. LetUsVending is equipped to arrange operators with documented AI cooler and workforce-platform integration experience.",
});

console.log("wrote "+"future-vending-trends-logistics");
