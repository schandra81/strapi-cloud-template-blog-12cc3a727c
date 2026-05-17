import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gym-member-feedback-vending",
  assetType: "playbook",
  title: "Gym Member Feedback Program Playbook",
  subtitle: "Five channels, quarterly review cadence, and 30-day SKU response",
  intro:
    "Member feedback turns gym vending from an installed amenity into a continuously-tuned member-experience program. The difference between a 60-NPS amenity and a 75-NPS amenity is whether members feel heard. This playbook codifies five feedback channels, quarterly review cadence with the operator, and a 30-day SKU-response guarantee that converts suggestions into stocked product.",
  sections: [
    {
      heading: "1. Five member-feedback channels",
      paragraph:
        "Single-channel feedback misses 60-70% of member input. Five channels — passive and active, on-machine and off — capture the full picture and feed a unified review process.",
      items: [
        { number: 1, title: "On-machine QR suggestion form", description: "QR code on each machine links to a 4-field operator form (SKU suggestion, machine location, optional member ID, optional contact for follow-up). Mobile-friendly; submission < 30 seconds. Operator acknowledges within 48 hours; substantive response within 14 days." },
        { number: 2, title: "Quarterly member survey", description: "5-question survey distributed via gym CRM (Mindbody, ClubReady, ABC Financial, Daxko). Questions: (1) Have you used vending in the past 90 days? (2) Were the products you wanted in stock? (3) Rate the price-to-quality 1-5. (4) Rate machine cleanliness 1-5. (5) Open suggestion field. Response rate target 25-35%." },
        { number: 3, title: "Front-desk feedback log", description: "Front-desk team logs verbal member feedback in club POS or shared spreadsheet. Captures the members who don't fill in surveys or scan QR codes. Reviewed monthly with operator." },
        { number: 4, title: "Personal-trainer and instructor feedback", description: "Trainers and instructors hear product requests during member coaching. Monthly check-in with floor staff captures supplement, hydration, and recovery SKU requests that members would not necessarily submit themselves." },
        { number: 5, title: "Social and digital monitoring", description: "Club's social media (Instagram, Facebook, Yelp, Google reviews) monitored for vending mentions. Negative reviews referencing vending trigger immediate operator action and direct response to the member where possible." },
      ],
    },
    {
      heading: "2. Quarterly feedback review",
      paragraph:
        "All five channels feed a single quarterly review with the operator. This converts member input into operator action.",
      headers: ["Step", "Owner", "Input", "Output"],
      rows: [
        ["Channel aggregation", "Gym member-experience lead", "QR submissions + survey + front-desk + trainer + social", "Consolidated feedback log"],
        ["Theme clustering", "Gym member-experience lead", "Consolidated feedback log", "Top-10 themes by mention count"],
        ["Operator review meeting", "Gym + operator account manager", "Themes + telemetry velocity report", "Action items with owner and due date"],
        ["Member response", "Gym member-experience lead", "Action items + planogram update", "Member newsletter or in-app message announcing planogram refresh"],
        ["Closure tracking", "Operator account manager", "Action items", "Closure verification at next quarter review"],
      ],
    },
    {
      heading: "3. 30-day SKU-response guarantee",
      paragraph:
        "The differentiator between a generic vending placement and a member-experience program is how fast a member suggestion becomes a stocked SKU. The 30-day SKU-response guarantee structures this.",
      items: [
        { label: "Day 1-3 — Acknowledgement", value: "Operator acknowledges submission within 48 hours via the contact channel the member provided (email, app, or text)." },
        { label: "Day 3-14 — Feasibility review", value: "Operator evaluates: distributor availability, FALCPA allergen compatibility, refrigeration or shelf-stability fit, planogram capacity, gross-margin economics. Provides 'yes / no / alternative' response with reasoning." },
        { label: "Day 14-30 — Restock execution", value: "If approved: SKU sourced from operator distributor (Vistar, Core-Mark, McLane, KeHE), priced, planogrammed, and stocked at next route visit. Member notified via in-app message and gym newsletter mention." },
        { label: "Day 30 — Member acknowledgement", value: "Member who submitted suggestion thanked publicly (with consent) in gym social media or newsletter. Drives subsequent submission volume." },
        { label: "Exception path — declined SKU", value: "Operator provides explanation: out-of-stock at distributor, allergen-conflict with existing planogram, refrigeration capacity exceeded, or projected velocity below 30-day re-evaluation threshold. Alternative SKU suggested where possible." },
      ],
    },
    {
      heading: "4. Theme clustering and prioritization",
      paragraph:
        "Raw feedback volume is not actionable; clustered themes are. The member-experience lead clusters feedback into 8-12 themes per quarter for the operator review.",
      headers: ["Theme category", "Common themes", "Action types"],
      rows: [
        ["Selection breadth", "More plant-based, more allergen-free, more international", "Planogram refresh, new SKU sourcing"],
        ["Pricing", "Too expensive, premium-tier surcharge, price-tier consistency", "Pricing review, member-discount program"],
        ["Stock availability", "Always out of [SKU], stockouts on weekends", "Telemetry alert tuning, restock cadence increase"],
        ["Equipment reliability", "Payment didn't work, dispense failed, refund slow", "Operator service ticket, payment terminal firmware, refund process review"],
        ["Cleanliness and signage", "Smudged glass, faded label, missing allergen info", "PM cadence increase, signage refresh"],
        ["Brand and identity", "Wrap looks faded, sponsor doesn't fit our brand", "Wrap refresh or replacement, sponsor renewal discussion"],
      ],
    },
    {
      heading: "5. Member-experience metrics",
      items: [
        { check: "Member NPS lift on vending question — track quarter-over-quarter. Baseline 50-60; target 70+." },
        { check: "Suggestion-volume per 100 members per quarter — target 5-15. Low volume suggests low engagement; high volume suggests active program." },
        { check: "SKU-request fulfillment rate — percent of qualifying member requests fulfilled within 30 days. Target 60%+." },
        { check: "Refund rate as percent of transactions — target < 1%. Above 2% triggers planogram + equipment quality review." },
        { check: "Survey response rate — target 25-35% of active member base quarterly." },
        { check: "Negative review volume in social and digital channels — target zero negative vending mentions per month." },
      ],
    },
    {
      heading: "6. Integration with gym CRM and operator dashboard",
      items: [
        { label: "Gym CRM integration", value: "Mindbody, ClubReady, ABC Financial, or Daxko send quarterly survey on schedule. Response data exported to gym member-experience BI." },
        { label: "Operator dashboard", value: "Operator account manager has read-write access to consolidated feedback log. Action items tracked with owner, status, and due date." },
        { label: "Cross-channel deduplication", value: "Member ID joined across QR submissions, survey responses, and front-desk log to avoid double-counting a member who provided feedback through multiple channels." },
        { label: "PII handling", value: "Member contact information used only for response to that member's specific submission. Aggregated themes shared with operator; PII held back. Compliance with applicable state privacy law (CCPA, CDPA, etc.)." },
        { label: "Quarterly business review", value: "Operator + gym member-experience lead + gym GM review trends, action items, and planogram refresh. Sponsor (if Tier 2-3 branded program) included in the QBR for product-level feedback." },
      ],
    },
    {
      heading: "7. Program lifecycle and continuous improvement",
      items: [
        { number: 1, title: "Quarter 1 — Baseline", description: "Five channels launched. Member NPS baseline captured. First quarter of theme clustering and action items." },
        { number: 2, title: "Quarter 2-3 — Tuning", description: "Suggestion volume rises as members realize the channel works. SKU-response guarantee enforced. NPS lift first measurable." },
        { number: 3, title: "Year 1 — Stable state", description: "Quarterly cadence stable. 60%+ of qualifying SKU requests fulfilled. Member NPS lift 8-15 points typical." },
        { number: 4, title: "Year 2+ — Sponsor integration", description: "Branded program sponsors review feedback themes for their portfolio. Co-marketing campaigns target identified member preferences." },
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate channel mix, review cadence, and SKU-response targets to your club's CRM platform, member demographic, and operator account-management capability.",
});

console.log("wrote "+"gym-member-feedback-vending");
