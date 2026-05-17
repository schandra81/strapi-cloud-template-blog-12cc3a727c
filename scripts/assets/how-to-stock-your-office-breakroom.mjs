import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-stock-your-office-breakroom",
  assetType: "playbook",
  title: "Office Breakroom Stocking Playbook",
  subtitle: "SKU category framework, replenishment model selection, allergen labeling, and healthy-share design",
  intro:
    "Office breakrooms move from 'we ordered Costco runs' to a defensible managed program with three decisions: a SKU category framework, a replenishment model that fits headcount, and a healthy-share + allergen-labeling backbone. This playbook codifies the LetUsVending operator-network practice and references the FDA FALCPA + FASTER Act allergen rules, the 2020-2025 Dietary Guidelines for Americans, OSHA 1910.141 sanitation, and FDA Food Code 2022 for any fresh/perishable items.",
  sections: [
    {
      heading: "1. SKU category framework",
      paragraph:
        "Stock against five anchor categories with target facings/share by headcount. Audit quarterly via planogram photo so the lineup doesn't drift to whichever distributor ran a deal.",
      headers: ["Category", "Facings (50-150 emp)", "Facings (150-400 emp)", "Healthy-share target"],
      rows: [
        ["Coffee + tea + creamer", "15-20% of stock value", "12-18%", "≥1 unsweet/half-sugar option"],
        ["Beverages (water, soda, sparkling, energy, juice)", "20-25%", "20-25%", "≥40% water/unsweet"],
        ["Snacks (salty, sweet, protein bar, nuts, fruit)", "30-40%", "30-40%", "≥35% better-for-you (≤200 cal, ≤10g added sugar, ≤480mg sodium)"],
        ["Fresh + grab-and-go (fruit, yogurt, salad, wrap)", "10-15% (if a cooler exists)", "15-20%", "All meet better-for-you definition"],
        ["Pantry essentials (paper goods, condiments, utensils)", "10-15%", "10-15%", "n/a"],
      ],
    },
    {
      heading: "2. Replenishment model selection",
      items: [
        { number: 1, title: "DIY (admin Costco/Sam's run)", description: "Works under ~30 employees. Hidden cost: 4-8 hours/week of admin time at $30-$60 loaded rate = $6,000-$25,000/yr. Allergen labeling and FALCPA compliance fall to admin." },
        { number: 2, title: "Pantry-delivery subscription (Crafty, SnackMagic, Mouth, Office Otter, et al.)", description: "Works 30-200 employees. Pre-curated SKU lists, weekly delivery, e-commerce reorder. Margin is ~15-25% above wholesale; no on-site service or fresh food unless added." },
        { number: 3, title: "Managed pantry + micro-market hybrid (operator)", description: "Works 100+ employees. Operator owns SKU sourcing, planogram, fresh-food cold-chain, healthy-share share, restock cadence, and refund flow. Telemetry-enabled. Allergen labels supplied with every SKU." },
        { number: 4, title: "Full corporate dining + barista (compass / aramark / sodexo / contract)", description: "Works 500+ employees or premium tier. Adds prepared-food kitchen, barista, catering. Highest cost, highest service level." },
      ],
    },
    {
      heading: "3. Allergen and labeling compliance",
      items: [
        { check: "FALCPA + FASTER Act top-9 allergen labels on every packaged SKU (milk, egg, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, sesame)" },
        { check: "FDA Nutrition Facts panel (21 CFR 101.9) on every packaged SKU; format including 'Added Sugars' line" },
        { check: "Allergen summary card visible at the pantry — lists top-9 allergens for every SKU in the lineup" },
        { check: "Cross-contact signage at any open bulk dispenser" },
        { check: "Date-marking + discard log for fresh/perishable items per FDA Food Code 2022 §3-501.17 (7-day max)" },
        { check: "Refrigerated holding ≤41°F continuously per Food Code 2022 §3-501.16; thermometer visible inside cooler" },
        { check: "OSHA 1910.141 sanitation: handwash sink within reasonable proximity, daily cleaning log" },
      ],
    },
    {
      heading: "4. Healthy-share design (operator-grade)",
      items: [
        { label: "Definition", value: "Better-for-you = ≤200 cal/pack, ≤10g added sugar, ≤480mg sodium, OR whole-grain/protein-forward. Aligns with FDA 21 CFR 101.65(d)(2) 'healthy' claim framework." },
        { label: "Placement", value: "Eye-level + entry-side facings prioritize healthy-share (Thorndike et al., Harvard 2014/2020 — 10-30% velocity lift)." },
        { label: "Dietary coverage", value: "≥3 gluten-free, ≥3 dairy-free, ≥2 vegan, ≥3 high-protein, ≥2 low-sodium snacks; ≥4 water/unsweet beverages." },
        { label: "Signage", value: "Green-leaf or 'better-for-you' shelf strip on every qualifying facing. Sentence case, 1-1.5 in cap height for legibility." },
        { label: "RDN review", value: "Quarterly registered-dietitian review where the operator supports it; report attached to QBR." },
      ],
    },
    {
      heading: "5. Restock cadence by headcount + model",
      headers: ["Headcount", "Pantry-subscription cadence", "Managed-operator cadence", "Fresh-food cadence"],
      rows: [
        ["30-100", "Weekly delivery", "1-2 visits/week", "n/a unless cooler"],
        ["100-250", "2x/week", "2-3 visits/week", "2x/week"],
        ["250-500", "2-3x/week or in-house stocker", "3-4 visits/week, telemetry-driven", "3x/week"],
        ["500-1000", "In-house stocker or operator", "Daily or telemetry-on-demand", "Daily"],
        ["1000+", "Operator-managed", "Daily + dedicated route", "Daily + dietitian audit"],
      ],
    },
    {
      heading: "6. Budget math",
      items: [
        { number: 1, title: "DIY benchmark", description: "$0.50-$2.50 per employee per day in product cost; admin overhead $6k-$25k/yr (often hidden)." },
        { number: 2, title: "Pantry subscription", description: "$1.50-$4.00 per employee per day all-in, depending on healthy-share + fresh-food inclusion." },
        { number: 3, title: "Managed operator", description: "$2.00-$6.00 per employee per day for full managed pantry + fresh-food + healthy-share + allergen labeling + telemetry. Subsidy strategy decides what the employer absorbs vs. employee pays." },
        { number: 4, title: "Hybrid free / paid", description: "Most defensible budget posture: free coffee + water + fruit; paid (with healthy-share endcap) for everything else. Lands at $0.50-$1.50/employee/day employer cost." },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an employer with operator partners equipped to deliver a managed breakroom — SKU sourcing, FALCPA-compliant labeling, FDA Food Code-compliant fresh-food, healthy-share planograms, telemetry-driven restock, and quarterly business reviews to HR and facilities. Scope is set per site after a discovery call covering headcount, kitchen access, and benefit tier.",
    },
  ],
  footer:
    "Informational reference. Confirm labeling-rule application with counsel and a registered dietitian where claims are made. Standards citations current at publication; verify the latest version before contracting.",
});

console.log("wrote "+"how-to-stock-your-office-breakroom");
