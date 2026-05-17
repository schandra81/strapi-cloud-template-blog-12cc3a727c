import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gym-staff-vending-oversight",
  assetType: "template",
  title: "Gym Staff Vending Oversight Template",
  subtitle: "Protocol, cadence, operator escalation contacts",
  intro:
    "Use this template to standardize the role gym staff play in supporting a third-party vending program. Operator owns the equipment, restock, and service; gym staff are the on-site eyes-and-ears that surface issues, escalate, and protect the member experience. References include FDA Food Code 2022, FALCPA + FASTER Act allergen handling, ADA Section 308, and standard OSHA workplace-safety practice. Confirm operator capabilities in writing before contract execution.",
  sections: [
    {
      heading: "1. Staff oversight protocol — by role",
      paragraph:
        "Three staff roles cover the oversight model. Match this to your gym's actual org structure.",
      headers: ["Role", "Owns", "Daily action", "Escalation"],
      rows: [
        ["Front-desk / member-services", "Member-facing reports (no vend, no refund, allergen complaint)", "Log incidents in shared tracker; issue member-facing apology + refund slip", "Operator support number for Tier-1 incidents"],
        ["Floor supervisor / shift lead", "Inspection of equipment + signage during walk-throughs", "1x/shift visual inspection of each unit", "Operator field service for Tier-2 incidents"],
        ["Gym manager", "Operator relationship + monthly review", "Monthly review of operator report; quarterly business review co-host", "Operator account manager for contract + commission"],
      ],
    },
    {
      heading: "2. Daily inspection checklist (per shift)",
      items: [
        { check: "All units powered + display screen working (no error message)." },
        { check: "Refrigerated units showing internal temp ≤ 40°F (visible thermometer or app)." },
        { check: "No visible obstruction in front of any unit; ADA clear floor space (30x48 in) preserved." },
        { check: "No leaks, no spills, no debris around units; no pest activity." },
        { check: "Allergen + nutrition signage in place and legible on each machine face." },
        { check: "Member-facing refund / support QR or sticker present and undamaged." },
        { check: "Trash + recycling + compost bins adjacent to vending are not overflowing." },
      ],
    },
    {
      heading: "3. Weekly cadence (floor supervisor)",
      items: [
        { check: "Stockout-pattern check: any SKU stocked out > 48 hours? Note for operator." },
        { check: "Service-ticket review: any open tickets > 24 hours past SLA? Escalate." },
        { check: "Cleanliness deep-check: glass, gasket seal, dispense tray. Operator handles deep clean per scheduled cadence." },
        { check: "Refund-volume pulse: members reporting more than 1 refund/day? Flag." },
        { check: "Member-feedback scan: in-app, on-machine QR survey, front-desk notes." },
      ],
    },
    {
      heading: "4. Monthly cadence (gym manager)",
      items: [
        { check: "Review operator's monthly report (uptime, transactions, basket, stockouts, refunds, temperature log)." },
        { check: "Review commission payment + reconcile to operator's sales report." },
        { check: "Review member-feedback themes + NPS." },
        { check: "Update vendor-management file: current insurance certificate, PCI AOC, NSF certification, food-safety attestation." },
        { check: "Confirm next month's restock schedule + planogram refresh proposals." },
      ],
    },
    {
      heading: "5. Operator escalation contact tree",
      paragraph:
        "Maintain a written escalation contact tree. Update at every quarterly business review. Post at front desk + manager office.",
      items: [
        { label: "Tier-1 — Operator 24/7 support line", value: "[Phone] / [Email] / [Operator app]. Use for: no vend, payment failure, cold-chain excursion, allergen complaint." },
        { label: "Tier-2 — Operator field service dispatch", value: "[Phone] / [Email]. Use for: stockout, planogram update request, cosmetic damage, signage update." },
        { label: "Tier-3 — Operator account manager", value: "[Name] / [Phone] / [Email]. Use for: contract questions, commission reconciliation, escalations beyond field service, RFP renewal." },
        { label: "Tier-4 — Operator general manager / VP", value: "[Name] / [Phone] / [Email]. Use for: chronic SLA failures, contract dispute, termination considerations." },
        { label: "Internal escalation", value: "Gym district manager + corporate facilities POC. Use for: operator unresponsive at any tier, member-safety incident." },
      ],
    },
    {
      heading: "6. Incident response — common scenarios",
      items: [
        { number: 1, title: "Member reports no vend (item not dispensed)", description: "Front desk issues member-facing refund slip; logs incident in tracker; calls operator Tier-1 support if more than 1 incident/day. Operator credits or refunds within 24 hours." },
        { number: 2, title: "Member reports food-quality issue (spoiled, expired)", description: "Front desk removes the SKU from inventory (place 'out of order' sign), photographs the SKU + expiration date, contacts operator Tier-1 support. Operator inspects + replaces within 24 hours; documents in food-safety file." },
        { number: 3, title: "Member reports allergen-mislabeling complaint", description: "Front desk treats as Tier-1; immediate notification to operator + gym manager. Operator inspects label, replaces SKU, files incident report. Member offered full refund + medical-attention guidance per FALCPA + FDA Food Code best practice." },
        { number: 4, title: "Refrigeration excursion (temp > 40°F for > 30 min)", description: "Telemetry alerts operator + gym manager. Operator dispatches within ≤ 24 hours; FDA Food Code 3-501.16 + 3-501.19 — refrigerated foods discarded if above 41°F for > 4 hours." },
        { number: 5, title: "Equipment damage (vandalism, accident)", description: "Floor supervisor photographs damage, files incident report, contacts operator. Operator service + insurance follow-up." },
      ],
    },
    {
      heading: "7. Operator capability checks",
      items: [
        { check: "Operator should provide a written escalation contact tree with named individuals at each tier, updated quarterly." },
        { check: "Operator should attest to ≤ 24 hour Tier-1 response and ≤ 24 hour Tier-1 resolution SLA." },
        { check: "Operator should attest to food-safety incident response per FDA Food Code 3-501.16 + 3-501.19 + 3-501.17 (date marking)." },
        { check: "Operator should provide gym staff training (recorded webinar or on-site session) on the staff oversight protocol + escalation tree." },
        { check: "Operator should attest to staff support: front-desk staff are not required to perform any operator-side work (restock, refund issuance beyond a slip, equipment service)." },
      ],
    },
  ],
  footer:
    "This template is informational and not legal, food-safety, or HR advice. Gym staff are not operator employees; their role is to surface issues + escalate, not to perform operator-side service or restock. Confirm staff training + escalation tree in writing with the operator.",
});

console.log("wrote " + "gym-staff-vending-oversight");
