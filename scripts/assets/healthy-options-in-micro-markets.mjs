import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-options-in-micro-markets",
  assetType: "playbook",
  title: "Micro-Market Healthy-Options Playbook",
  subtitle: "Assortment, planograms, dietitian coordination, labeling, dietary coverage, and measurement",
  intro:
    "This playbook codifies the operating practices that turn 'healthy options in the market' from marketing copy into a measurable program. It maps to the FDA FALCPA + FASTER Act allergen rules, 21 CFR 101.65 nutrient-content claims, the 2020-2025 Dietary Guidelines for Americans, the FDA menu-labeling rule for chains of 20+ (21 CFR 101.11), and the NEMS-V healthy-vending scoring methodology used in academic and public-health programs.",
  sections: [
    {
      heading: "1. Healthy-share definition",
      paragraph:
        "Use a single, defensible 'healthy-share' definition across procurement, planogram, signage, and reporting. Mixing definitions is the most common reason healthy programs fail audit.",
      headers: ["Threshold", "Calories", "Added sugar", "Sodium", "Other"],
      rows: [
        ["Better-for-you (entry)", "≤230 kcal per pack", "≤10g", "≤480mg", "Whole-grain or ≥3g protein or ≥3g fiber"],
        ["Healthy (FDA-aligned)", "≤200 kcal", "≤6g", "≤230mg", "Meets 21 CFR 101.65(d)(2) where claimed"],
        ["Beverages", "≤40 kcal / 12 oz", "≤4g added sugar", "n/a", "Water, unsweet tea, ≤0% juice excluded from sugar count"],
        ["Fresh-food entrée", "≤700 kcal", "≤10g added sugar", "≤800mg", "≥15g protein, ≥3 food groups"],
      ],
    },
    {
      heading: "2. Planogram and placement",
      items: [
        { number: 1, title: "Eye-level rule (Thorndike et al., Harvard 2014/2020)", description: "Place 35-50% of eye-level facings on the healthy-share definition. Eye-level lifts healthy-share velocity 10-30% without subsidy changes." },
        { number: 2, title: "Endcaps + reach-zone", description: "Reserve the right-hand reach zone (most-shopped side) for fresh-food and healthy-share. Audit quarterly with planogram photography." },
        { number: 3, title: "Coffee + water adjacency", description: "Place water + unsweetened beverages adjacent to the coffee station and fresh-food cooler — the highest-traffic dwell points." },
        { number: 4, title: "Choice architecture signage", description: "Green-leaf icon + 'Better-for-you' shelf strip on every qualifying facing. NEMS-V scoring rewards consistent visual cueing." },
      ],
    },
    {
      heading: "3. Dietitian coordination model",
      items: [
        { label: "Registered dietitian (RD/RDN)", value: "Engage a Commission on Dietetic Registration-credentialed RDN for planogram review, allergen-claim attestation, and quarterly assortment audit. Typical engagement: 4-8 hours/quarter." },
        { label: "Audit deliverables", value: "Healthy-share % per category, dietary-coverage gap analysis, signage-claim review, recommended adds/drops with rationale." },
        { label: "Wellness-program tie-in", value: "RDN report is the artifact wellness teams use to justify the micro-market as a wellness benefit and as data for biometric / outcomes reporting." },
        { label: "Operator-side dietitian (alternative)", value: "Many operator partners retain an in-house RDN whose attestation is delivered with each quarterly business review." },
      ],
    },
    {
      heading: "4. Labeling and claim compliance",
      items: [
        { check: "FALCPA + FASTER Act top-9 allergen statement on every SKU (milk, egg, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, sesame)" },
        { check: "FDA Nutrition Facts panel (21 CFR 101.9) on every packaged SKU; updated label format with added sugars line" },
        { check: "Calorie disclosure on standard-menu items if the operator falls under 21 CFR 101.11 chain coverage (20+ locations)" },
        { check: "Health and nutrient-content claims limited to those defined in 21 CFR 101.13 + 101.65 ('low sodium,' 'healthy,' etc.)" },
        { check: "Shelf signage matches package label — no claims on the shelf strip that aren't on the package" },
        { check: "Allergen filter active in the kiosk software (365 Retail Markets, Avanti, Three Square) so members can sort by allergen" },
      ],
    },
    {
      heading: "5. Dietary coverage by category",
      headers: ["Category", "Gluten-free", "Dairy-free", "Vegan", "High-protein", "Lower-sodium"],
      rows: [
        ["Snacks", "≥3 SKUs", "≥3 SKUs", "≥2 SKUs", "≥3 SKUs", "≥2 SKUs"],
        ["Beverages", "All", "≥4 SKUs", "≥4 SKUs", "≥2 SKUs (protein drinks)", "All (water/tea)"],
        ["Fresh entrées", "≥1 SKU", "≥1 SKU", "≥1 SKU", "≥2 SKUs", "≥1 SKU"],
        ["Breakfast", "≥1 SKU", "≥1 SKU", "≥1 SKU", "≥2 SKUs (Greek yogurt etc.)", "≥1 SKU"],
        ["Confection / treat", "≥1 SKU", "≥1 SKU", "≥1 SKU", "n/a", "n/a"],
      ],
    },
    {
      heading: "6. Measurement and reporting",
      items: [
        { number: 1, title: "Healthy-share velocity (monthly)", description: "Healthy-share units sold ÷ total units sold. Target ≥30% within 6 months, ≥40% within 12 months. Pulled from kiosk POS telemetry." },
        { number: 2, title: "Healthy-share facings (quarterly)", description: "Healthy-share facings ÷ total facings, audited via planogram photo. Target ≥35%." },
        { number: 3, title: "NEMS-V score (annual)", description: "Run the NEMS-V (Nutrition Environment Measures Survey — Vending) audit annually. Targets vary by program; ≥75% is a defensible 'healthy environment' threshold." },
        { number: 4, title: "Member NPS for assortment", description: "Quarterly 1-question pulse: 'The market gives me healthy options I want to eat.' Top-2-box target ≥75%." },
        { number: 5, title: "Dietitian attestation", description: "Quarterly RDN report attached to the QBR deck." },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an employer or property with operator partners equipped to run a NEMS-V-style healthy micro-market — including RDN-reviewed planograms, FDA-compliant labeling and claims, kiosk allergen filtering, and quarterly healthy-share velocity reporting. Programs are scoped per site after a discovery call covering headcount, shift mix, fresh-food kitchen access, and dietary-coverage requirements.",
    },
  ],
  footer:
    "Informational reference, not medical or regulatory advice. Confirm specific health and nutrient-content claims with a registered dietitian and counsel before publishing. Standards citations current at publication; verify the latest version before contracting.",
});

console.log("wrote "+"healthy-options-in-micro-markets");
