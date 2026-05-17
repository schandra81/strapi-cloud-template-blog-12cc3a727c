import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-promotional-vending",
  assetType: "pack",
  title: "Seasonal + Promotional Vending Pack",
  subtitle: "Annual calendar + five mechanics + ERG / DEI / wellness integration + brand partnership + member-app reward",
  intro:
    "Seasonal + promotional vending turns a static cost center into a workplace-engagement asset. This pack lays out a full-year promotional calendar, five proven mechanics, ERG / DEI / wellness integration patterns, brand-partnership structures, and the measurement model that proves uplift.",
  sections: [
    {
      heading: "1. Annual promotional calendar",
      paragraph:
        "Anchor quarterly tentpoles to wellness + DEI + brand + holiday cycles. Most workplaces run 8-14 promotions per year.",
      headers: ["Month", "Tentpole", "Wellness / DEI tie-in", "SKU emphasis"],
      rows: [
        ["January", "New Year wellness reset", "Wellness fair + biometric screening", "Plant-based + low-sugar + hydration"],
        ["February", "Heart Health Month + Black History Month", "AHA Heart Month + Black ERG", "Low-sodium + Black-owned brands (Partake Foods, McBride Sisters, Pop Up Bagels)"],
        ["March", "Women's History + Nutrition Month", "Women's ERG + RDN / Academy of Nutrition", "Women-owned brands (Spindrift, Olipop, Lily's, Daring Foods) + Fit Pick Select"],
        ["April", "Earth Day + Stress Awareness", "Sustainability + EAP", "Plastic-free + adaptogenic beverages (Recess, Kin)"],
        ["May", "Mental Health Awareness + AAPI Heritage", "Mental Health ERG + AAPI ERG", "Calm-supporting beverages + AAPI-owned brands (OMSOM, Wai Lana, Fly By Jing)"],
        ["June", "Pride Month + National Dairy Month", "LGBTQ+ ERG + plant-based dairy alt", "Pride-themed + Oatly + Califia + plant-milk emphasis"],
        ["July", "Hydration Month / Summer", "Wellness + hydration", "Sparkling water + electrolyte drinks (Liquid IV, Nuun, Pedialyte Sport)"],
        ["August", "Back-to-School (parents) + National Wellness Month", "Family / parents ERG", "Convenience + kid-friendly + healthy lunch packs"],
        ["September", "Hispanic Heritage Month + National Coffee Day (Sept 29)", "Hispanic ERG + coffee", "Hispanic-owned brands (Goya healthier line, OFM Foods) + premium coffee"],
        ["October", "Breast Cancer Awareness + Cybersecurity Awareness + Vegetarian Month", "Pink-ribbon + IT + plant-based", "Pink-packaging partnerships + plant-based emphasis"],
        ["November", "Diabetes Awareness + Native Heritage + Thanksgiving", "ADA + Native ERG + community giving", "Low-sugar + Native-owned brands (Tanka, Sakari Farms, Bedré Fine Chocolate)"],
        ["December", "Holiday + Year-end gratitude", "All-employee appreciation", "Seasonal flavors + giving + free-vend reward week"],
      ],
    },
    {
      heading: "2. Five proven promotional mechanics",
      items: [
        { number: 1, title: "Free-vend week or day", description: "Host covers entire transaction cost for a week or day. Highest engagement mechanic; 80-95% activation among headcount. Cost: $4-12 per employee per day. Use sparingly (1-2× per quarter)." },
        { number: 2, title: "Buy-one-get-one + bundle promos", description: "Operator-funded or co-funded. Bundles healthier + indulgent ('apple + chocolate bar = $1.50'). Cost-neutral; lifts plant-based + Fit Pick velocity 20-40%." },
        { number: 3, title: "Loyalty stamp / punch card via member app", description: "10th drink free, 5th plant-based bar free. Cantaloupe Seed, 365 Pay, USConnect support natively. Drives repeat behavior over 3-6 month windows." },
        { number: 4, title: "ERG + DEI sponsored SKUs", description: "ERG selects 4-6 SKUs aligned with heritage month; subsidized or featured-position planogram. Engages ERG members + cross-pollinates education." },
        { number: 5, title: "Wellness-app-linked challenges", description: "Steps-to-snack, hydration-to-water, mindfulness-to-coffee credits via Virgin Pulse / Wellable / Limeade. Adds 10-25% incremental engagement at low marginal cost." },
      ],
    },
    {
      heading: "3. ERG / DEI integration playbook",
      paragraph:
        "Each ERG curates a tentpole promotion annually. Workplace-experience + ERG council co-design the SKU + signage + activation.",
      items: [
        { label: "Discovery", value: "ERG submits 6-8 SKU candidates 90 days ahead. Operator validates availability + nutrition labeling." },
        { label: "Sourcing", value: "Prefer brands owned by the ERG-aligned community (Black-owned, women-owned, AAPI, LGBTQ+, Hispanic, Native, Disability-owned). Certifications: NMSDC, WBENC, NGLCC, NaVOBA." },
        { label: "Curation + signage", value: "ERG provides backstory + brand-founder story for in-machine signage or member-app push notification." },
        { label: "Subsidy", value: "ERG budget or central-DEI fund subsidizes featured SKUs to parity with conventional during the month." },
        { label: "Activation", value: "ERG + L&D host a 'meet the founder' webinar, tasting event, or hallway pop-up. Operator coordinates SKU delivery." },
        { label: "Measurement", value: "Per-SKU velocity over the month + ERG-member survey + cross-pollination tracking (non-ERG-member purchases of featured SKUs)." },
      ],
    },
    {
      heading: "4. Brand partnership structures",
      paragraph:
        "National + regional brands actively partner with workplace operators to seed new SKUs. Three partnership types:",
      headers: ["Partnership type", "Structure", "Cost to host", "Brand benefit"],
      rows: [
        ["Free-sample seeding", "Brand provides 200-500 units; host runs 1-2 day free-vend", "$0 (operator absorbs ops cost)", "Trial + sampling data"],
        ["Co-funded launch promo", "Brand covers 30-50% of unit cost during launch month", "50-70% discount for host", "Velocity data + repeat-purchase rate"],
        ["Featured-position contract", "Brand pays for top-of-eye placement quarterly", "$0 or revenue share to host", "Top-of-eye visibility"],
      ],
    },
    {
      heading: "5. Member app + technology stack",
      items: [
        { label: "Loyalty + reward engine", value: "Cantaloupe Seed, 365 Pay, USConnect, Hangar 12 — native loyalty + reward + push notification." },
        { label: "Wellness app integration", value: "Virgin Pulse, Wellable, Limeade, Castlight — REST + OAuth integration for steps + hydration + mindfulness reward credit." },
        { label: "Member badge tap", value: "HID + LEGIC + Mifare badge → operator card reader (Nayax Onyx, Cantaloupe ePort Engage). SSO to corporate identity provider." },
        { label: "Push notification", value: "Member app push: '10% off plant-based today,' 'Free coffee for Heart Month,' 'New SKU featured this week.' Drives same-day uplift 15-30%." },
        { label: "ERG + DEI segmentation", value: "Member opt-in to ERG affiliation triggers tailored push (e.g., Black ERG gets Black History Month promo announcement first)." },
      ],
    },
    {
      heading: "6. Hydration + wellness-event tie-ins",
      items: [
        { check: "Annual wellness fair: free-vend day + biometric screening table + nutrition educator on-site" },
        { check: "Hydration challenge (June or July): free sparkling water + branded reusable bottle distribution" },
        { check: "Mindfulness Month (October or May): adaptogenic beverages (Recess, Kin Euphorics, Cure) featured + EAP collaboration" },
        { check: "Steps challenge: wellness-app steps unlock free or discounted protein snack" },
        { check: "Office sports league + after-work events: hydration + post-workout protein available 24/7" },
        { check: "EAP awareness: stress-supportive beverages + signage with EAP contact info" },
      ],
    },
    {
      heading: "7. Measurement framework",
      items: [
        { label: "Promotion participation rate", value: "Unique employees engaging / total headcount. Target: ≥ 40% on free-vend day, ≥ 20% on subsidized promo, ≥ 10% on loyalty challenge." },
        { label: "Same-period vends uplift", value: "Promo period vends vs. same period prior year (or 4-week trailing average). Target: 15-40% uplift on featured SKUs." },
        { label: "Repeat-purchase rate", value: "% of promo-period purchasers who repeat the SKU within 30 days of promo end. Target: 25-40% for trial-stage SKUs." },
        { label: "ERG + DEI engagement score", value: "ERG member survey: did the program feel authentic + supportive? Target: ≥ 80% positive." },
        { label: "Cross-pollination", value: "% of non-ERG-member purchases of ERG-featured SKUs. Target: ≥ 60% (program reaches beyond ERG)." },
        { label: "Cost-per-engagement", value: "Total promo cost / unique-employees-engaged. Target: ≤ $5-15 depending on promotion type." },
      ],
    },
    {
      heading: "8. Annual planning + governance",
      items: [
        { check: "Q4 prior year: Workplace-experience + ERG council + benefits team agree annual calendar" },
        { check: "Q1 + Q2 + Q3 + Q4: Quarterly planning session with operator (60 days ahead) to confirm SKUs + signage + subsidy" },
        { check: "Monthly: Operator confirms previous month metrics; flag underperformers for course-correction" },
        { check: "QBR: Full review of promotion mix + cost + uplift + engagement; recommend year-2 calendar adjustments" },
        { check: "Annual: Member-app push opt-in audit + privacy policy refresh" },
        { check: "Brand partnership pipeline: 3-5 prospective brands in discovery at any time" },
      ],
    },
    {
      heading: "9. Operator selection checklist",
      items: [
        { check: "Member-app + loyalty + push-notification platform (Cantaloupe, 365, USConnect, Hangar 12)" },
        { check: "Wellness-app integration capability (Virgin Pulse, Wellable, Limeade)" },
        { check: "Catalog flexibility for ERG / DEI / brand-partnership SKU additions on 30-day cycle" },
        { check: "Subsidy-flexible billing (line-item per SKU per promo)" },
        { check: "References from 3+ comparable-headcount hosts running active promotional calendars ≥ 18 months" },
        { check: "Brand-partnership relationships demonstrated (3+ active national or regional brand seeding programs)" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps workplace-experience, HR, and DEI teams scope promotional vending calendars with operators positioned to support member-app + ERG + brand-partnership programs.",
});

console.log("wrote " + "seasonal-promotional-vending");
