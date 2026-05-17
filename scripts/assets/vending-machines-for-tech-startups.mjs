import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machines-for-tech-startups",
  assetType: "pack",
  title: "Tech Startup Vending Pack",
  subtitle: "Stage transitions + dietary inclusivity + wellness-app integration + ESG sourcing",
  intro:
    "Tech startups grow vending programs in three stage transitions: 10-25 employees (single fridge + Costco run) → 25-100 (operator-managed pantry) → 100-400 (full-service vending + micro-market) → 400+ (multi-floor hospitality-grade). This pack maps the right scope to each stage, layers dietary inclusivity + wellness-app + ESG sourcing onto every tier, and avoids the two failure modes startups consistently hit (over-scoping at series A, under-scoping at series C).",
  sections: [
    {
      heading: "1. Four stage transitions",
      headers: ["Stage", "Headcount", "Approach", "Monthly budget"],
      rows: [
        ["Pre-seed / seed (< 25 employees)", "5-25", "Office manager runs Costco / Instacart; one fridge + coffee maker + bottle-fill", "$200-800 total"],
        ["Series A (25-100)", "25-100", "Operator-managed pantry: 1 combo + 1 bean-to-cup coffee + ambient snack rack", "$15-30 per employee"],
        ["Series B / C (100-400)", "100-400", "Full vending + micro-market: glass-front refrigerated + AI camera cooler + multi-machine + member app", "$25-45 per employee"],
        ["Late stage / public (400+)", "400-2,000+", "Hospitality-grade: barista bar + micro-market + multi-floor + dietary-program-led + ESG-aligned", "$35-75 per employee"],
      ],
    },
    {
      heading: "2. Two common failure modes",
      items: [
        { number: 1, title: "Over-scoping at Series A", description: "Hiring a vending operator at < 50 employees often produces a half-empty pantry that the operator can't make economic. Stick with office-manager-managed at < 25; bring in operator at 25+ with a Balanced archetype, not Premium." },
        { number: 2, title: "Under-scoping at Series C+", description: "At 200+ employees, the 'fridge + Costco' model becomes a part-time job for the office manager + driver of attrition. Founders often delay the operator transition 6-12 months too long. Trigger: office manager spends > 5 hr/week or pantry is empty > 20% of the time." },
      ],
    },
    {
      heading: "3. Dietary inclusivity for tech startup demographics",
      paragraph:
        "Tech startup populations skew toward higher vegan + vegetarian + plant-based + GF + dairy-free rates than typical workplaces. Plan accordingly.",
      headers: ["Diet", "Tech startup typical %", "Target catalog facing %"],
      rows: [
        ["Vegan", "5-10% strict; 20-30% flexitarian/plant-forward", "25-35%"],
        ["Vegetarian", "10-15%", "Included in vegan + plant-forward"],
        ["Gluten-free", "5-10% medical; 15-25% lifestyle", "20-30%"],
        ["Low-sugar / keto / paleo", "15-25%", "30-40%"],
        ["Halal / kosher", "Site-specific (often 5-15% combined in US tech)", "Verify with HR demographics"],
        ["Allergen-aware (top-9)", "Universal — every SKU labeled", "100% FALCPA-compliant"],
      ],
    },
    {
      heading: "4. Wellness-app integration",
      paragraph:
        "Tech startups disproportionately use Virgin Pulse, Wellable, Limeade, Castlight, Cleo, Wellhub (Gympass), and direct Apple Health / Google Fit integrations. Vending program should integrate via the operator's REST + OAuth.",
      items: [
        { label: "Steps + activity → snack credit", value: "Daily steps target unlocks free or discounted protein snack. Drives 10-20% incremental engagement." },
        { label: "Hydration challenge", value: "Daily water goal unlocks free sparkling water or hydration drink (Liquid IV, Nuun)." },
        { label: "Mindfulness + EAP linkage", value: "Mindfulness app session (Calm, Headspace) unlocks free adaptogenic beverage (Recess, Kin, Cure)." },
        { label: "Quarterly biometric reward", value: "Biometric screening completion unlocks credit ($25-50) at vending micro-market." },
        { label: "Member-app push", value: "Personalized push: 'You're 200 steps from a free bar' or 'Today's featured plant-based drink' — drives same-day uplift 15-30%." },
      ],
    },
    {
      heading: "5. ESG sourcing — startup-relevant",
      paragraph:
        "Late-stage + IPO-track startups face investor + employee ESG scrutiny. Build the program ESG-ready from Series B onward.",
      items: [
        { check: "Coffee: 100% Fair Trade or Rainforest Alliance; ≥ 50% USDA Organic" },
        { check: "Chocolate: ≥ 50% Fair Trade" },
        { check: "Aluminum cans: ≥ 70% recycled content" },
        { check: "PET bottles: ≥ 50% rPET" },
        { check: "Snack films: mono-material PE + How2Recycle labeling preferred" },
        { check: "Equipment: 100% ENERGY STAR + 100% R-290 / R-600a" },
        { check: "Diverse-owned suppliers prioritized (women / minority / LGBTQ+ / disability-owned per NMSDC, WBENC, NGLCC, NaVOBA, DOBE)" },
        { check: "Annual emission factor per vend supplied for Scope 3 disclosure" },
        { check: "Diversion infrastructure (3-bin sort) adjacent to every machine" },
        { check: "Operator carbon trajectory aligned with SBTi 1.5°C pathway" },
      ],
    },
    {
      heading: "6. Equipment + tech stack recommendations by stage",
      items: [
        { label: "Series A (25-100)", value: "Combo machine (AMS Combi / Seaga INF5C) + bean-to-cup coffee (Franke A300 with Franke Connect) + cellular telemetry (Cantaloupe Seed) + member-app option (365 Pay). Refrigerated half R-290." },
        { label: "Series B (100-200)", value: "Above + glass-front refrigerated snack (AMS 39-Visi) + AI camera cooler trial (365 Pico or AWM Smart Shelf) + nitro cold brew tap. Two bean-to-cup brewers." },
        { label: "Series C (200-400)", value: "Full micro-market with grab-and-go cooler + barista hybrid + multi-floor coverage + member badge integration + wellness-app integration live. 3-4 bean-to-cup brewers." },
        { label: "Late stage / public (400+)", value: "Hospitality-grade barista bar (La Marzocco + manual espresso) + multi-floor micro-market + on-site cafe operator partnership for breakfast + lunch fresh-food. ESG dashboards integrated with corporate sustainability portal." },
      ],
    },
    {
      heading: "7. Cost-per-employee benchmarks by stage",
      headers: ["Stage", "Headcount", "Equipment monthly", "SKU + service monthly", "Total per employee"],
      rows: [
        ["Series A", "25-100", "$200-500", "$300-2,000", "$15-30"],
        ["Series B", "100-200", "$600-1,200", "$1,500-5,000", "$22-38"],
        ["Series C", "200-400", "$1,200-2,500", "$4,000-12,000", "$28-45"],
        ["Late stage", "400-1,000", "$2,500-5,000", "$10,000-40,000", "$35-65"],
        ["Public + flagship", "1,000+", "$5,000-15,000+", "$30,000-150,000+", "$45-85"],
      ],
    },
    {
      heading: "8. Member-app + technology integration checklist",
      items: [
        { check: "Operator member app (Cantaloupe Seed Cashless, 365 Pay, USConnect, Hangar 12) deployed at Series A+" },
        { check: "Corporate SSO integration (Okta, Google Workspace, Azure AD, OneLogin) for badge / mobile tap-to-pay" },
        { check: "Wellness app integration (Virgin Pulse, Wellable, Limeade, Castlight, Wellhub, Cleo)" },
        { check: "Slack + Teams + email push notification for promotions" },
        { check: "Apple Wallet + Google Wallet passes for member ID + reward credit" },
        { check: "REST API + OAuth available for HR + facilities + sustainability data feeds" },
        { check: "SOC 2 Type II attested operator platform" },
        { check: "PCI-DSS validated payment processor (Stripe / Adyen / Heartland)" },
      ],
    },
    {
      heading: "9. Operator selection checklist — startup-fit",
      items: [
        { check: "Operator supports scale-up — capacity to grow from Series A to Series C without contract reset" },
        { check: "Catalog flexibility — line-item pricing + quarterly SKU refresh" },
        { check: "Member-app + wellness-app integration capability" },
        { check: "ENERGY STAR + R-290 equipment standard" },
        { check: "Diverse-owned supplier sourcing capability" },
        { check: "AI camera cooler + micro-market experience" },
        { check: "Termination for convenience with 60-90 day notice (startups change office fast)" },
        { check: "References from 3+ comparable tech hosts with ≥ 18 months tenure across at least one stage transition" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps startup office managers, people ops, and facilities teams scope stage-appropriate vending programs with qualified operators.",
});

console.log("wrote " + "vending-machines-for-tech-startups");
