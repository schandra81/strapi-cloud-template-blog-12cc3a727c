import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machines-for-student-fundraising",
  assetType: "pack",
  title: "AI Cooler Student Fundraising Pack",
  subtitle: "Commission framework, Smart Snacks checklist, placement matrix, and operator selection criteria for student-organization fundraising vending",
  intro:
    "Student organizations, athletic clubs, and Greek-life chapters can use AI cooler vending as a recurring fundraising revenue stream — but the program needs Smart Snacks alignment (where K-12 or auxiliary-services standard requires), clean commission accounting, and a placement matrix that matches each org to a viable cooler. This pack bundles four working documents.",
  sections: [
    {
      heading: "1. Commission framework — student-org fundraising",
      paragraph:
        "Commission to a student organization is typically 8-15% of gross revenue from a designated cooler placement, paid quarterly. Tiers below anchor negotiation.",
      headers: ["Cooler traffic tier", "Annual gross / cooler", "Org commission tier", "Estimated annual revenue to org"],
      rows: [
        ["Low-traffic (residence-hall floor)", "$25K-$45K", "8-10%", "$2K-$4.5K"],
        ["Mid-traffic (academic building lobby)", "$45K-$90K", "10-12%", "$4.5K-$10.8K"],
        ["High-traffic (union, library anchor)", "$90K-$180K", "12-15%", "$10.8K-$27K"],
        ["Athletics venue (gym, stadium concourse)", "$60K-$200K", "10-15%", "$6K-$30K"],
      ],
    },
    {
      heading: "2. Smart Snacks + HHS-alignment checklist",
      paragraph:
        "Smart Snacks rules apply to K-12; on university campuses, HHS Food Service Guidelines or campus dietitian standards apply. If your campus requires Smart-Snacks-aligned vending for student-organization fundraising, the checklist below applies.",
      items: [
        { check: "Per snack: ≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from total fat, ≤ 10% saturated fat, ≤ 35% sugar by weight" },
        { check: "Fruit, vegetable, dairy, protein, whole grain — at least one as the first ingredient or 10%+ DV per serving" },
        { check: "Beverages: water (any size), low-fat plain milk (≤ 12 oz), unflavored low-fat milk (≤ 8 oz), 100% juice (≤ 12 oz), flavored milk (≤ 8 oz, ≤ 100 cal)" },
        { check: "Caffeinated beverages restricted to coffee/tea (no energy drinks) where Smart Snacks framework adopted" },
        { check: "Sugar-sweetened beverages capped per Smart Snacks: ≤ 60 cal/12 oz (high school) or stricter" },
        { check: "Allergen labeling per FALCPA on every SKU; cooler-face allergen summary" },
        { check: "Dietitian audit semi-annual; remediation plan within 30 days for non-compliance" },
        { check: "Healthy-share floor: ≥ 50% of cooler facings meeting Smart Snacks or HHS standards" },
      ],
    },
    {
      heading: "3. Placement matrix — student-org fit",
      paragraph:
        "Match each student organization to the cooler placement that aligns with their member base + on-campus visibility.",
      headers: ["Student organization", "Best-fit placement", "Planogram emphasis", "Smart Snacks compatibility"],
      rows: [
        ["Varsity athletics booster", "Athletic facility, stadium concourse, recreation center", "Hydration, recovery protein, clean-protein bar", "Strong (HHS-aligned + FITPICK)"],
        ["Greek-life chapter", "Greek-life common room, residence-hall adjacent to chapter house", "Snack, beverage, late-night comfort", "Medium (planogram balances)"],
        ["Cultural / affinity group", "Multicultural center, dining-services adjacent", "Culturally relevant + traditional + plant-based", "Medium (cultural mix)"],
        ["Pre-health / pre-med club", "Health-sciences building lobby", "Healthy + protein + caffeine", "Strong (HHS-aligned)"],
        ["Business / entrepreneurship club", "Business school lobby, career center adjacent", "Professional snack + caffeine + breath-fresh", "Medium"],
        ["Sustainability / Outdoor club", "Sustainability center, outdoor-rec adjacent", "Plant-forward + local + recyclable packaging", "Strong (HHS + STARS)"],
        ["Student government", "Student union, government office adjacent", "Variety + indulgent + healthy mix", "Medium"],
      ],
    },
    {
      heading: "4. Operator selection criteria — fundraising context",
      items: [
        { check: "Higher-ed reference accounts ≥ 2 active student-organization placements at peer institutions" },
        { check: "Smart-Snacks / HHS / FITPICK planogram capability attested and demonstrable" },
        { check: "Campus card SDK + FERPA DPA on file" },
        { check: "Commission accounting: per-cooler, per-organization tracked; quarterly statements to each org" },
        { check: "Refund automation + dashboard accessible to student-org + auxiliary services" },
        { check: "Insurance: $2M GL, $1M umbrella, food product liability $1M, additional-insured to university + student-org" },
        { check: "Sustainability + STARS-aligned reporting capability for org-aligned planogram (sustainability club, etc.)" },
        { check: "Brand-flexibility: cabinet wrap supports student-org branding + university brand standards co-design" },
      ],
    },
    {
      heading: "5. Operating workflow — student-org governance",
      items: [
        { number: 1, title: "Org sponsorship + brand approval", description: "Student-org advisor + auxiliary services confirm placement + brand standards; org submits cabinet-wrap design + planogram preferences." },
        { number: 2, title: "Cooler install + launch", description: "Operator installs cooler with org-branded wrap; soft-launch event with org members; cooler-face signage explains 'proceeds support [org]'." },
        { number: 3, title: "Restock + service", description: "Operator runs standard restock cadence + service SLA; org has no operational responsibility (no labor commitment)." },
        { number: 4, title: "Quarterly commission statement", description: "Operator issues quarterly statement to org treasurer; commission payment within 30 days of quarter close; auxiliary services CCs statement for audit." },
        { number: 5, title: "Planogram refresh", description: "Semi-annual: org input on planogram aligned to org identity (e.g., athletics → recovery protein focus); dietitian + auxiliary services co-approve." },
        { number: 6, title: "Promotion calendar", description: "Org-aligned promotions (home-game day discount, awareness-week SKU spotlight); operator funds creative; org promotes via channels." },
        { number: 7, title: "Annual review", description: "Year-end performance review with org leadership + auxiliary services + operator; renewal decision + new placement consideration." },
      ],
    },
    {
      heading: "6. Fundraising-vending vs traditional fundraising — comparison",
      headers: ["Factor", "AI cooler fundraising", "Traditional fundraising (bake sale, gala, raffle)"],
      rows: [
        ["Setup time", "Cooler placement + install + brand wrap (6-8 weeks initial)", "Per-event 4-12 weeks planning"],
        ["Recurring revenue", "Steady commission quarterly", "Lumpy, event-by-event"],
        ["Member labor commitment", "Minimal (no shifts to staff)", "High (event-day staffing, prep)"],
        ["Annual revenue potential", "$4K-$30K depending on placement", "Variable; typical small-org $2K-$10K/event"],
        ["Compliance overhead", "Smart-Snacks + allergen + FERPA + dietitian audit", "Food-safety + permit + insurance per event"],
        ["Scalability", "Add placements; commission tier improves with volume", "Limited by member time + event frequency"],
        ["Risk", "Operator-borne capital + uptime risk", "Org-borne event-day risk (weather, attendance)"],
      ],
    },
    {
      heading: "7. Communications + promotion kit",
      items: [
        { label: "Cabinet wrap + cooler-face signage", value: "Org logo + 'proceeds support [org mission]' + transparent commission % displayed; campus brand standards co-approved." },
        { label: "Social media template", value: "Instagram/TikTok caption: 'Every purchase from the [cooler name] cooler supports [org]. Tap to pay, snack, and support.'" },
        { label: "Game-day / event-day cross-promo", value: "Athletic boosters: home-game-day discount or featured SKU; awareness-week: cultural club spotlights cultural SKUs." },
        { label: "Newsletter feature", value: "Org newsletter quarterly: 'Your snacks are funding [scholarship/event/trip]' — transparent reporting on commission utilization." },
        { label: "Recognition + transparency", value: "Annual transparency report: total commission earned + how spent (events, scholarships, equipment, philanthropy)." },
        { label: "Alumni engagement", value: "Alumni magazine feature: 'How AI cooler vending funded [org accomplishment]' — engages alumni donors + parents." },
      ],
    },
    {
      heading: "8. Risk + compliance considerations",
      items: [
        { check: "Smart-Snacks / HHS-alignment audited semi-annually; failure triggers cure plan within 30 days" },
        { check: "FERPA DPA covers campus card SDK if cooler accepts campus-card tender" },
        { check: "Insurance: operator carries $2M GL + food product liability; student-org named as additional-insured" },
        { check: "Tax: commission revenue to student-org may have unrelated business income tax (UBIT) implications for nonprofit affiliates; tax counsel review recommended" },
        { check: "Contract: org-operator memorandum of agreement signed by org advisor + auxiliary services" },
        { check: "Brand standards: org cabinet-wrap must respect university brand standards + trademark policies" },
        { check: "Termination: org can request placement removal with 60-day notice; operator transitions cooler to standard cabinet wrap" },
      ],
    },
  ],
  footer:
    "This pack is informational. Student-org advisor + auxiliary services + dietitian + brand standards + tax counsel should jointly review program design before launch. Smart Snacks alignment + commission accounting + FERPA DPA are core compliance components.",
});

console.log("wrote " + "vending-machines-for-student-fundraising");
