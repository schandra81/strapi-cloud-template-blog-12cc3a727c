import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-community-engagement-apartments",
  assetType: "template",
  title: "Apartment Vending Community Engagement Framework",
  subtitle: "Seven engagement patterns, quarterly workflow, and reporting templates",
  intro:
    "Use this framework to operate a multifamily vending program that residents actually use, not just walk past. Each section is capability-framed and references CCPA / state privacy regimes for any resident data, ADA Title III / Section 308 for placement, and FALCPA for any food product offered. Confirm operator capabilities in writing before contract execution.",
  sections: [
    {
      heading: "1. Seven engagement patterns",
      paragraph:
        "Multifamily vending succeeds when it shows up in resident touchpoints, not just at the machine. Below are the seven patterns that drive sustained utilization. Pick 3-5 to operationalize at any property.",
      headers: ["#", "Pattern", "Why it works"],
      rows: [
        ["1", "Move-in welcome kit + free-first credit", "Anchors awareness in week-1 when residents form daily habits"],
        ["2", "Quarterly resident survey + planogram update", "Closes the feedback loop; residents see their input drive the assortment"],
        ["3", "Tasting events + new-SKU drops", "Trial barriers fall when residents sample before purchasing"],
        ["4", "Resident app / portal integration", "Single login covers vending + amenity bookings + service requests"],
        ["5", "Loyalty + birthday rewards", "Repeat purchase + birthday-month free credit drive emotional engagement"],
        ["6", "Local roaster / maker rotation", "Community-relevance lift over national-brand-only assortment"],
        ["7", "Lobby + elevator + door-hanger comms", "Distributes awareness across resident routine touchpoints"],
      ],
    },
    {
      heading: "2. Move-in welcome kit",
      items: [
        { label: "Welcome card", value: "4x6 in card delivered with move-in packet. Includes QR for free-first-purchase code, support number, allergen + nutrition note, ADA accessibility note." },
        { label: "First-purchase credit value", value: "$5-$10 (operator-funded as part of contract); reload code expires 30 days from move-in." },
        { label: "Resident app onboarding", value: "Steps to install resident app, link credit code, set dietary tags (vegetarian, gluten-free, dairy-free) for personalization." },
        { label: "First-purchase tracking", value: "Operator tracks redemption + first 30-day basket count; reports back at quarterly review." },
      ],
    },
    {
      heading: "3. Quarterly survey + planogram update",
      paragraph:
        "Three-question survey delivered via app + email + on-machine QR. Closes the loop with planogram action at quarter-end. Reference Census Bureau survey design fundamentals.",
      items: [
        { number: 1, title: "Question 1 — satisfaction", description: "How satisfied are you with the vending selection at [property name]? (1-5 scale)" },
        { number: 2, title: "Question 2 — open feedback", description: "What product would you like to see added, removed, or swapped? (open-end, 250 char max)" },
        { number: 3, title: "Question 3 — usage frequency", description: "How often do you purchase from the vending? (Daily / weekly / monthly / rarely / never)" },
        { number: 4, title: "Planogram action", description: "Add top-2 requested SKUs, drop bottom-2 by velocity, communicate changes via app + lobby signage within 14 days." },
      ],
    },
    {
      heading: "4. Tasting events + new-SKU drops",
      items: [
        { label: "Cadence", value: "Quarterly tasting event 30-60 minutes in lobby or amenity area; aligned with rotation launch." },
        { label: "Format", value: "Free samples of 4-6 new SKUs; resident-app punch card for trial; QR survey at exit." },
        { label: "Operator deliverables", value: "Tasting supplies, samples, branded signage, on-site host. Local roaster or maker present where featured." },
        { label: "Capacity planning", value: "Expect 15-25% of in-residence population to attend over the event window; size samples accordingly." },
        { label: "Follow-up", value: "New SKU drop announcement 7 days post-event; first 50 purchasers receive a $1 credit." },
      ],
    },
    {
      heading: "5. Resident app + portal integration",
      paragraph:
        "Reduce friction by piggybacking on the existing resident portal (Yardi RentCafe, AppFolio Portal, Realm, Buildium, etc.) where feasible.",
      items: [
        { check: "SSO between operator app and resident portal (SAML 2.0 or OIDC)." },
        { check: "Single resident profile with dietary tags, payment method on file, loyalty balance, refund history." },
        { check: "In-app announcements for new SKUs, tasting events, planogram updates, service incidents." },
        { check: "Refund / support flow accessible in-app (target < 24 hour resolution)." },
        { check: "Resident data handled per CCPA + state privacy regimes; data residency option for EU residents; operator SOC 2 Type II on file." },
        { check: "Operator app PCI-DSS 4.0 attested; no PAN storage at the cooler or in resident-app cache." },
      ],
    },
    {
      heading: "6. Loyalty + birthday rewards",
      items: [
        { label: "Loyalty program", value: "Points-per-dollar (e.g., 1 point per $1 spent); redeem at 100-500 point thresholds for free SKU or credit." },
        { label: "Birthday reward", value: "$5-$10 credit auto-issued in birthday-month via app push + email." },
        { label: "Resident-of-the-month feature", value: "Highlight top-purchaser of the month with a $10 credit + lobby shout-out (opt-in; per CCPA + property privacy policy)." },
        { label: "Refer-a-resident", value: "Where the property's lease + privacy policy allow: $5 credit to existing resident + $5 first-purchase credit to new resident on lease signing." },
        { label: "Lease-renewal credit", value: "Property-funded $25-$50 credit at lease renewal as a stickiness lever; coordinate with leasing team." },
      ],
    },
    {
      heading: "7. Local roaster / maker rotation",
      paragraph:
        "Quarterly feature of a local roaster, baker, snack maker, or beverage producer. Drives community relevance and supports the property's neighborhood-positioning story.",
      items: [
        { check: "Source 3-4 local makers per market for rotation; operator vets food-safety credentials (FDA + state food-manufacturer license + product liability)." },
        { check: "Operator should attest to product liability insurance follow-on for any local-maker product carried." },
        { check: "Quarterly feature launch combined with tasting event + app announcement + lobby signage." },
        { check: "Operator + property co-fund any local-maker partnership marketing (e.g., maker-bio card placed at the machine)." },
        { check: "Local-maker SKU rotation reported to property at quarterly review with velocity + margin." },
      ],
    },
    {
      heading: "8. Quarterly workflow",
      items: [
        { number: 1, title: "Week 1 — survey + data pull", description: "Operator pushes quarterly survey to residents via app + email; pulls prior-quarter velocity + refund + uptime data." },
        { number: 2, title: "Week 2 — analysis + planogram proposal", description: "Operator drafts planogram refresh + local-maker rotation + tasting event date." },
        { number: 3, title: "Week 3 — quarterly business review (QBR)", description: "On-site or video review with property manager + leasing team. Approve planogram + tasting event + comms plan." },
        { number: 4, title: "Week 4 — execute", description: "Planogram update, tasting event, app announcement, lobby signage, door-hanger drops where applicable." },
        { number: 5, title: "Mid-quarter — pulse check", description: "Operator pulls mid-quarter telemetry; flags any stockout or velocity miss; one-touch planogram swap if needed." },
      ],
    },
    {
      heading: "9. Reporting templates",
      items: [
        { check: "Monthly: uptime, transactions, revenue, basket, refund volume, stockout incidents." },
        { check: "Monthly: app + survey engagement (DAU, MAU, survey response rate, NPS)." },
        { check: "Quarterly: planogram refresh report (added, dropped, substituted SKUs + velocity rationale)." },
        { check: "Quarterly: tasting event + local-maker feature outcomes (attendees, samples consumed, new-SKU velocity post-event)." },
        { check: "Quarterly: loyalty + birthday redemption rates; refer-a-resident counts." },
        { check: "Annually: program ROI summary; lease-renewal credit redemption rate + correlation with retention." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Resident-data handling must comply with CCPA, state privacy regimes, and the property's privacy policy. Any property-funded credits or rewards should be coordinated with the property's accounting + leasing teams to avoid lease-amendment or rent-credit complications.",
});

console.log("wrote " + "vending-community-engagement-apartments");
