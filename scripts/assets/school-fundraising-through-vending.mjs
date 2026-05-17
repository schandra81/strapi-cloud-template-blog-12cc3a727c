import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "school-fundraising-through-vending",
  assetType: "playbook",
  title: "School Vending Fundraising Playbook",
  subtitle: "Smart Snacks checklist, RFP framework, sponsor agreement template, planogram by placement type, quarterly review template",
  intro:
    "School vending as a fundraising channel — for athletic programs, band, debate, PTA, booster clubs — works when the program respects USDA Smart Snacks (7 CFR §210.11) during school day, structures sponsorship + commission cleanly, and reports back to the booster organization quarterly. This playbook codifies the full program.",
  sections: [
    {
      heading: "1. Smart Snacks compliance — checklist",
      paragraph:
        "Every SKU on a student-access machine during school day (midnight before school until 30 min after dismissal) must pass 7 CFR §210.11. Fundraising programs that ignore Smart Snacks lose state child-nutrition funding and trigger USDA audit findings.",
      items: [
        { check: "Snack: ≤ 200 calories AND ≤ 200 mg sodium AND ≤ 35% calories from fat AND ≤ 10% calories from saturated fat AND 0g trans fat" },
        { check: "Snack: ≤ 35% by weight sugar; first ingredient whole grain or fruit/vegetable/dairy/protein OR ≥ 10% DV of calcium/potassium/vit D/fiber" },
        { check: "Entree: ≤ 350 calories AND ≤ 480 mg sodium AND same fat/sugar limits" },
        { check: "Beverage K-5: water; milk ≤ 8 oz; 100% juice ≤ 8 oz" },
        { check: "Beverage 6-8: water; milk ≤ 12 oz; 100% juice ≤ 12 oz" },
        { check: "Beverage 9-12: water; milk ≤ 12 oz; 100% juice ≤ 12 oz; low/no-cal ≤ 20 oz; other ≤ 12 oz with ≤ 40 cal/8 oz" },
        { check: "Caffeine — none in K-8; allowed in high school" },
        { check: "Verification — operator maintains Smart Snacks Product Calculator results or USDA-aligned vendor attestation per SKU; on file with district nutrition services" },
        { check: "After-school + faculty-only — Smart Snacks does not apply after dismissal + 30 min, or at faculty-only placements; operator + district may schedule planogram switch" },
      ],
    },
    {
      heading: "2. RFP framework — fundraising vending",
      paragraph:
        "Athletic boosters + PTA + activity programs frequently issue their own vending RFPs separate from district master agreements. RFP should align to district master agreement language to avoid compliance drift.",
      items: [
        { number: 1, title: "Section 1 — Scope + parties", description: "Booster organization (with district endorsement) as principal; operator as vendor. Define placements, machine count, hours, target install date." },
        { number: 2, title: "Section 2 — Smart Snacks compliance", description: "Per-SKU attestation required; right of district nutrition services to require SKU removal. Documentation retained per district master agreement." },
        { number: 3, title: "Section 3 — Equipment + telemetry", description: "ENERGY STAR refrigeration; cellular telemetry; cashless + prepaid integration; ADA Title III §305 + §308 compliance." },
        { number: 4, title: "Section 4 — Commission + revenue split", description: "Booster commission rate (typically 15-35% of gross); pay-out cadence (monthly); minimum guarantee (optional)." },
        { number: 5, title: "Section 5 — Sponsorship rights", description: "Wrap + signage rights to sponsor (athletic program, local business); sponsor approval workflow; sponsor exclusivity (if any) per category." },
        { number: 6, title: "Section 6 — Operations + SLA", description: "Restock cadence, service SLA tiers, refund flow, academic calendar coordination." },
        { number: 7, title: "Section 7 — Reporting", description: "Monthly revenue + commission report; quarterly business review with booster + activity director + nutrition services." },
        { number: 8, title: "Section 8 — Insurance + compliance", description: "$2M GL + $1M auto + $1M product; booster + district named as additional insured. Annual certificate." },
      ],
    },
    {
      heading: "3. Sponsor agreement — template structure",
      paragraph:
        "Sponsor agreements pair a local business or category supplier with a fundraising program in exchange for branded wrap, exclusivity, or featured placement. Use this structure as the baseline.",
      items: [
        { check: "Parties + term — booster organization + sponsor (named entity); 1-3 year primary with renewal" },
        { check: "Sponsorship fee + structure — flat annual + per-transaction royalty + minimum guarantee" },
        { check: "Branding rights — wrap design + placement + sign + on-screen logo on Class P equipment" },
        { check: "Exclusivity — category exclusivity (beverage or snack) within named placements; non-exclusive across district" },
        { check: "Product-placement rights — sponsor SKUs allocated specified % of facings (typically 20-50%); Smart Snacks compliance per district policy" },
        { check: "Approval workflow — district + nutrition services + activity director approve final wrap + planogram" },
        { check: "Termination — 90-day for convenience; immediate for compliance failure; cure period for material breach" },
        { check: "Brand-conduct clause — sponsor's brand conduct off-program may trigger termination if it conflicts with district values policy" },
      ],
    },
    {
      heading: "4. Planogram by placement type",
      headers: ["Placement", "School-day planogram", "After-school planogram", "Fundraising performance"],
      rows: [
        ["Gym / athletic lobby", "Smart Snacks + electrolyte + water-heavy", "Expand sports drinks + protein", "Highest — game-day + practice traffic"],
        ["Cafeteria", "Smart Snacks 100%", "Same (cafeteria typically closes)", "Moderate — cafeteria competes"],
        ["Media center / library", "Smart Snacks + study-fuel", "Same", "Moderate — quieter traffic"],
        ["Faculty lounge", "Open planogram (faculty-only access)", "Same", "Steady — faculty + coach traffic"],
        ["After-school program room", "Smart Snacks until 30 min post-dismissal", "Expand mainstream after window", "High — after-school program is the fundraising sweet spot"],
        ["Visiting-team locker / sideline", "Open planogram (after school day)", "Open", "Event-day spike"],
      ],
    },
    {
      heading: "5. Operational support structure",
      items: [
        { label: "Restock cadence", value: "2-3 visits/week during school year. Pre-position for game-week + tournament-week surges. Suspended or minimal during summer + breaks unless after-school programs run." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain, payment — <24 hr ack + <24 hr resolution." },
        { label: "Service SLA — Tier 2", value: "Stockout, planogram refresh — 24-48 hr ack, 5-7 day resolution." },
        { label: "Refund flow", value: "Refund via app, on-machine touchpad, or front-office hand-off. Refund cost split per RFP (typically operator-borne up to 2%; booster-borne above)." },
        { label: "Reporting", value: "Monthly revenue + commission statement to booster treasurer + activity director; quarterly business review covers all metrics + planogram action items." },
      ],
    },
    {
      heading: "6. Quarterly review template",
      items: [
        { check: "Total gross sales + commission earned by booster organization" },
        { check: "Per-placement revenue + variance vs prior quarter + prior year" },
        { check: "Smart Snacks compliance audit — per-SKU verification + any findings" },
        { check: "Top-20 and bottom-20 SKUs with planogram action items" },
        { check: "Service SLA adherence (Tier 1-3) + refund rate" },
        { check: "Sponsor mix + sponsorship revenue contribution" },
        { check: "Calendar look-ahead — events, fundraising drives, planogram surge plan" },
        { check: "Action items + owner + due date, carried in QBR tracker" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Uptime", "≥ 98%", "Monthly"],
        ["Smart Snacks compliance", "100%", "Per-SKU; annual + quarterly spot"],
        ["Booster commission", "≥ commitment", "Monthly"],
        ["Stockout SKU-hours", "≤ 2%", "Weekly"],
        ["Tier 1 resolution time", "< 24 hr", "Monthly"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Game-week / event surge accuracy", "Within 10% of forecast", "Per event"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, Smart Snacks attestation, RFP development, sponsor agreement drafting, and quarterly review structure for school fundraising vending programs.",
});

console.log("wrote "+"school-fundraising-through-vending");
