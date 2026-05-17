import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-markets-in-education-facilities",
  assetType: "playbook",
  title: "Education Micro-Market Framework",
  subtitle: "K-12 Smart Snacks compliance overlay, higher-ed meal-plan integration, RFP template",
  intro:
    "Micro-markets in education facilities split into two regulatory worlds. K-12 must apply USDA Smart Snacks in School standards (7 CFR §210.11) to every student-access SKU during school day; higher-ed has no federal nutrition mandate but typically integrates with the meal-plan system + campus card. This playbook codifies both worlds in one framework, with an RFP template at the end.",
  sections: [
    {
      heading: "1. Two regulatory worlds — K-12 vs higher-ed",
      headers: ["Dimension", "K-12", "Higher-ed"],
      rows: [
        ["Nutrition mandate", "Smart Snacks in School (7 CFR §210.11) during school day", "None federal; campus wellness policy may apply"],
        ["Calorie label", "FDA 21 CFR §101.8 + state code", "FDA 21 CFR §101.8 (glass-front) + voluntary on micro-market"],
        ["Allergen", "FALCPA + 21 CFR 117 if on-site prep", "Same"],
        ["Payment", "Campus prepaid + cash + cashless typical", "Meal-plan + campus card + cashless typical"],
        ["Hours", "Restricted to instructional day + after-school", "Often 24/7 in dorms + libraries"],
        ["Audit", "USDA + state child nutrition annual", "Internal + occasional state procurement audit"],
      ],
    },
    {
      heading: "2. K-12 Smart Snacks compliance overlay",
      paragraph:
        "7 CFR §210.11 sets numeric limits per SKU. Every student-access micro-market SKU must pass during school day (midnight before school until 30 minutes after dismissal).",
      items: [
        { check: "Snack: ≤ 200 calories AND ≤ 200 mg sodium AND ≤ 35% calories from fat AND ≤ 10% calories from saturated fat AND 0g trans fat" },
        { check: "Snack: ≤ 35% by weight sugar; first ingredient is whole grain or first ingredient is fruit/vegetable/dairy/protein OR contains ≥ 10% DV of calcium/potassium/vit D/fiber" },
        { check: "Entree: ≤ 350 calories AND ≤ 480 mg sodium AND same fat/sugar limits" },
        { check: "Beverage K-5: water (no size limit); milk ≤ 8 oz unflavored or flavored nonfat ≤ 8 oz; 100% juice ≤ 8 oz" },
        { check: "Beverage 6-8: water; milk ≤ 12 oz; 100% juice ≤ 12 oz" },
        { check: "Beverage 9-12: water; milk ≤ 12 oz; 100% juice ≤ 12 oz; low/no-calorie ≤ 20 oz (≤ 5 cal/8 oz or ≤ 10 cal/20 oz); other ≤ 12 oz with ≤ 40 cal/8 oz" },
        { check: "Caffeine — none in elementary or middle; allowed in high school" },
        { check: "Verification — operator maintains Alliance for a Healthier Generation Smart Snacks Product Calculator results or USDA-aligned vendor attestation per SKU" },
      ],
    },
    {
      heading: "3. Higher-ed meal-plan integration patterns",
      items: [
        { number: 1, title: "Campus card swipe", description: "Mag-stripe or contactless campus card (Blackboard Transact, CBORD Odyssey, Atrium, TouchNet) integrates with micro-market POS (365 Retail Markets, Avanti). Stored value or meal-plan-funded debit." },
        { number: 2, title: "Meal-plan equivalency", description: "$5-$10 'meal swipe' converts at micro-market POS; remainder forfeited or returned to plan. Most common in late-night dorm + library placements." },
        { number: 3, title: "Dining dollars / flex dollars", description: "Stored-value funded by meal plan, used at vending + micro-market + dining locations. Operates as closed-loop currency through campus card vendor." },
        { number: 4, title: "Subsidy + access", description: "Wellness office or student activities may subsidize access — e.g., free coffee at exam week. Funded by sponsor account, drawn via promo code or campus card flag." },
        { number: 5, title: "Open POS / app pay", description: "Standard contactless + app pay (Apple Pay, Google Pay, Stripe). Used where campus card integration is not warranted." },
      ],
    },
    {
      heading: "4. Equipment + placement",
      items: [
        { label: "Equipment platform", value: "365 Retail Markets Pico/Stockwell, Avanti Markets MicroMarket, or Three Square Markets — self-checkout open-shelf with cooler + freezer + ambient + kiosk POS." },
        { label: "Placement footprint", value: "100-300 sq ft typical; cooler (40-80 SKUs) + freezer (20-40 SKUs) + ambient shelving (60-120 SKUs) + 1-2 POS kiosks. Some K-12 placements use compact 50-100 sq ft configurations." },
        { label: "K-12 placement", value: "High school cafeteria or media center; elementary + middle typically not warranted. Locked overnight; vended only during instructional hours + after-school program window." },
        { label: "Higher-ed placement", value: "Dorm common areas, library, student union, fitness center, late-night anchors. 24/7 access via campus card after-hours." },
        { label: "Surveillance + loss prevention", value: "Camera + AI analytics (365 RM 'Smart Eye', Avanti 'Eye on the Cooler') for inventory + loss-prevention. Typical shrink 1-3% well-managed." },
      ],
    },
    {
      heading: "5. RFP template — section structure",
      paragraph:
        "Use this section structure verbatim in the district / system RFP. Includes scoring rubric placeholder for evaluation committee.",
      items: [
        { check: "Section 1 — Scope: campuses, machine + market counts, hours, target install date" },
        { check: "Section 2 — Smart Snacks compliance (K-12) or wellness policy alignment (higher-ed); per-SKU attestation required" },
        { check: "Section 3 — Equipment specification: platform, refrigeration, ENERGY STAR, kiosk POS, loss-prevention" },
        { check: "Section 4 — Payment integration: campus card + meal plan + cashless; PCI DSS v4 attestation" },
        { check: "Section 5 — Operations: restock cadence, service SLA tiers, refund flow, academic calendar coordination" },
        { check: "Section 6 — Reporting: telemetry + sales + nutrition + ADA audit reports; reporting cadence" },
        { check: "Section 7 — Commission + pricing: commission %, price ceilings, subsidy structure if any" },
        { check: "Section 8 — Insurance + compliance: $2M GL + $1M auto + $1M product; certificate filed annually" },
        { check: "Section 9 — Scoring rubric: nutrition 25 / price 20 / operations 20 / reporting 15 / experience 10 / sustainability 10" },
        { check: "Section 10 — Submission: format, deadline, contact, Q&A window" },
      ],
    },
    {
      heading: "6. Operational support structure",
      items: [
        { label: "Restock cadence", value: "K-12: 2-3 visits/week during school year, suspended during breaks. Higher-ed: 4-7 visits/week year-round with surge during exam + move-in/out weeks." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain excursion, payment system failure — <24 hr ack + <24 hr resolution." },
        { label: "Service SLA — Tier 2", value: "SKU stockout, planogram refresh — 24-48 hr ack, 5-7 day resolution." },
        { label: "Refund flow", value: "Refund via kiosk POS, app, or campus front-office hand-off. Auto-credit within 24 hr for campus card + cashless." },
        { label: "Academic calendar coordination", value: "Pre-position for back-to-school + welcome week; scale down for breaks; surge for finals + move-in/out; planogram refresh quarterly." },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "K-12 target", "Higher-ed target"],
      rows: [
        ["Uptime", "≥ 98%", "≥ 99%"],
        ["Smart Snacks compliance", "100%", "n/a (or per wellness policy)"],
        ["Stockout SKU-hours", "≤ 2%", "≤ 1%"],
        ["Shrink %", "≤ 2%", "≤ 2%"],
        ["Tier 1 resolution time", "< 24 hr", "< 24 hr"],
        ["Refund rate", "< 2%", "< 2%"],
        ["Meal-plan / campus-card transaction share", "n/a", "≥ 50% (24/7 dorm placements)"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, Smart Snacks compliance verification, meal-plan integration scoping, and full RFP development for K-12 districts and higher-ed systems.",
});

console.log("wrote "+"micro-markets-in-education-facilities");
