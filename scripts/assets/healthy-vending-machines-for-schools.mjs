import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-vending-machines-for-schools",
  assetType: "pack",
  title: "School Healthy Vending Pack",
  subtitle: "Smart Snacks compliance framework, SKU catalog, audit documentation template, and operator selection checklist",
  intro:
    "This pack is a working compliance + procurement framework for K-12 districts, individual schools, and higher-ed campuses operating vending under USDA Smart Snacks in School. It supplements district nutrition services' own policy with the operational details — SKU catalog, planogram, audit documentation, and operator-selection criteria — needed to keep a program audit-ready.",
  sections: [
    {
      heading: "1. Smart Snacks in School — regulatory framework",
      paragraph:
        "USDA Smart Snacks Final Rule (7 CFR 210 + 220) applies to all foods + beverages sold to students on the school campus during the school day (midnight to 30 minutes after the last bell). Includes vending, school stores, fundraisers, and à la carte.",
      items: [
        { label: "Snack standards (all grade levels)", value: "≤ 200 cal/portion, ≤ 35% calories from total fat, ≤ 10% calories from saturated fat, 0 g trans fat, ≤ 200 mg sodium, ≤ 35% sugar by weight." },
        { label: "First-ingredient rule", value: "Whole-grain-rich (≥ 50% whole-grain ingredient by weight) OR fruit/vegetable/dairy/protein-food as first ingredient OR ≥ ¼ cup fruit/veg per portion." },
        { label: "Beverage limits (elementary K-5)", value: "Water (any size), low-fat milk ≤ 8 oz, 100% juice ≤ 8 oz only. No caffeinated beverages." },
        { label: "Beverage limits (middle 6-8)", value: "Water (any size), low-fat milk ≤ 12 oz, 100% juice ≤ 12 oz only. No caffeinated beverages." },
        { label: "Beverage limits (high 9-12)", value: "Water (any size), low-fat milk ≤ 12 oz, 100% juice ≤ 12 oz, other beverages ≤ 60 cal/12 oz or ≤ 40 cal/8 oz. Caffeinated permitted." },
        { label: "Entrée standards", value: "≤ 350 cal, ≤ 35% calories from total fat, ≤ 10% calories from saturated fat, 0 g trans fat, ≤ 480 mg sodium." },
      ],
    },
    {
      heading: "2. SKU catalog by category (Smart Snacks-aligned)",
      paragraph:
        "All SKUs below were Smart Snacks-aligned at publication; re-verify against the USDA Smart Snacks Product Calculator or state-equivalent before contract.",
      headers: ["Category", "Example SKUs", "Verified standard"],
      rows: [
        ["Whole-grain bars", "Nature Valley Crunchy (Oats 'n Honey), Quaker Chewy 25% Less Sugar, KIND Healthy Grains, Special K Protein", "Smart Snacks"],
        ["Fruit + veg", "Sun-Maid Raisins, Stretch Island Fruit Strips, Bare Crunchy Apple Chips, Annie's Organic Fruit Snacks (verify portion)", "Smart Snacks"],
        ["Nuts + seeds (HS only)", "Wonderful Pistachios (1.5 oz), Sahale Glazed Cashews, Justin's Almond Butter pack", "Smart Snacks (peanut-free zones excluded)"],
        ["Baked + popped chips", "Skinny Pop Mini (0.5 oz), Popcorners Mini, SunChips Reduced Sodium", "Smart Snacks (verify portion)"],
        ["Dairy + protein", "Sargento String Cheese, fairlife Core Power (HS only), Babybel Light", "Smart Snacks (refrigerated)"],
        ["Yogurt + parfait", "Chobani Low-Fat Less Sugar, Siggi's, Stonyfield Organic Fat-Free", "Smart Snacks (refrigerated)"],
        ["Beverages — water", "Aquafina (100% rPET pilot), LIFEWTR, school-branded bottled water", "Compliant any size"],
        ["Beverages — milk", "fairlife 2% (8 oz K-5, 12 oz MS/HS), Horizon Organic, Lactaid", "Smart Snacks"],
        ["Beverages — juice", "Apple & Eve 6.75 oz, Mott's for Tots 6.75 oz, Tropicana 100% Juice 6 oz", "Smart Snacks (100% juice required)"],
        ["Beverages — other (HS only)", "Sparkling water (LaCroix, Bubly, Aha), low-cal sports drink (G2, Powerade Zero)", "Smart Snacks HS only"],
      ],
    },
    {
      heading: "3. Planogram framework by grade level",
      paragraph:
        "Strictest planogram applies to the youngest grade level the machine serves. Mixed K-8 building: apply elementary standard.",
      headers: ["Grade level", "Beverage mix", "Snack mix", "Caffeine policy"],
      rows: [
        ["Elementary (K-5)", "Water + 100% juice (≤ 8 oz) + low-fat milk (≤ 8 oz)", "100% Smart Snacks; nut-aware planogram", "No caffeinated beverages"],
        ["Middle (6-8)", "Water + 100% juice (≤ 12 oz) + low-fat milk (≤ 12 oz)", "100% Smart Snacks", "No caffeinated beverages"],
        ["High (9-12)", "Above + other beverages ≤ 60 cal/12 oz (sparkling water, low-cal sports, diet)", "100% Smart Snacks", "Permitted; sparkling caffeinated water allowed"],
        ["Higher-ed (no Smart Snacks mandate)", "Open + healthier-defaults recommended", "≥ 50% Fit Pick / better-for-you", "Open"],
      ],
    },
    {
      heading: "4. Allergen + cross-contact framework",
      items: [
        { label: "FALCPA top-9 disclosure", value: "Every SKU labeled for milk, egg, fish, shellfish, tree nut, peanut, wheat, soy, sesame. Operator supplies CSV of allergen data per SKU." },
        { label: "Nut-free zone (K-5 default)", value: "Dedicated machine or planogram row with no tree-nut or peanut SKUs. Clear signage at student eye-level." },
        { label: "Gluten-free options", value: "≥ 15% of healthier SKUs gluten-free (KIND Healthy Grains certain SKUs, RXBAR, Larabar, Chomps)." },
        { label: "Dietary accommodation request", value: "Process for parent / student to request specific dietary SKU additions; food-service director reviews monthly." },
        { label: "Cross-contact attestation", value: "Operator attests to manufacturer cross-contact statements on each SKU (e.g., 'may contain' peanut traces)." },
      ],
    },
    {
      heading: "5. Audit documentation template",
      paragraph:
        "Operator provides this documentation at install, annually, and at any USDA or state audit. Filed with food-service director.",
      items: [
        { check: "Smart Snacks Product Calculator output per SKU, dated within last 90 days" },
        { check: "Manufacturer nutrition label + ingredient list per SKU (PDF or operator-portal export)" },
        { check: "Operator attestation letter: all SKUs compliant with Smart Snacks Final Rule" },
        { check: "Allergen disclosure CSV per SKU (top-9 + cross-contact)" },
        { check: "Quarterly compliance refresh: confirm no SKU formulation change broke compliance" },
        { check: "Planogram diagram + photograph per machine showing current SKU placement" },
        { check: "Vending operator background-check + fingerprint attestation per state code (CA AB 1610, FL 1012.32, TX 22.083)" },
        { check: "Telemetry-verified restock log with date, technician, SKUs (for HACCP-equivalent food-safety record where applicable)" },
      ],
    },
    {
      heading: "6. Equipment + safety specification",
      items: [
        { label: "Equipment type", value: "Glass-front refrigerated snack/food for fresh + dairy + parfait; CRBV for beverages; ambient snack for shelf-stable. ENERGY STAR-certified preferred." },
        { label: "ADA compliance", value: "2010 ADA Standards Section 308 (reach range 15-48 in) + 309 (≤ 5 lbf operating force). Required in all public + federally-funded facilities including schools." },
        { label: "Anti-tip + anti-rock", value: "All machines secured to wall or anti-tip bracket per UL 541 + NAMA safety guidance." },
        { label: "Glass safety", value: "Tempered safety glass per ANSI Z97.1 on glass-front machines." },
        { label: "Electrical", value: "GFCI-protected 120V/15A outlet per NEC 210.8(B). Dedicated circuit preferred." },
        { label: "Temperature monitoring", value: "Refrigerated machines maintain 33-40°F per FDA Food Code. Telemetry-verified with excursion alerts." },
      ],
    },
    {
      heading: "7. Subsidy + pricing strategy",
      items: [
        { label: "Price points (K-12)", value: "Most district policies cap vending at $1.00-$2.00 per snack and $1.50-$3.00 per beverage. Operator supplies tiered pricing per SKU." },
        { label: "Subsidy from district / activity fund", value: "Free-vend water + fruit; subsidize whole-grain bars to parity with conventional. Activity-fund-supported water on game days." },
        { label: "Title I + free + reduced", value: "Where district policy allows, vending purchase via student meal account; aligned with USDA Community Eligibility Provision (CEP) where applicable." },
        { label: "Revenue share to school", value: "Typical 10-20% commission to school activity fund. Earmarked for wellness + nutrition programs per CDC Whole School, Whole Community, Whole Child (WSCC) model." },
      ],
    },
    {
      heading: "8. Operator selection checklist",
      items: [
        { check: "Operator demonstrates Smart Snacks compliance database + Product Calculator workflow" },
        { check: "Background-checked + fingerprinted restock staff per state code; copies on file with district HR" },
        { check: "ENERGY STAR + low-GWP-refrigerant equipment standard" },
        { check: "Allergen + cross-contact disclosure CSV per SKU" },
        { check: "Telemetry on every machine with monthly utilization + compliance report" },
        { check: "References from 3+ comparable districts with ≥ 24 months tenure" },
        { check: "Insurance: $2M general liability, $1M product liability, $1M cyber, certificate naming district as additional insured" },
        { check: "Capacity to support audit (USDA or state) within 5 business days" },
        { check: "Local + district-of-attendance preference where applicable (Buy California, Buy Florida-Grown, similar)" },
      ],
    },
    {
      heading: "9. Wellness + curriculum integration",
      items: [
        { check: "Vending data shared with school wellness council per CDC WSCC framework" },
        { check: "Nutrition curriculum integration — vending datasets shared with health + science classes (NGSS HS-LS1 + MS-LS1)" },
        { check: "Annual student survey on healthier SKU preferences feeds quarterly planogram refresh" },
        { check: "Parent + PTO communication on vending changes via newsletter + parent portal" },
        { check: "Coordination with athletic department on game-day hydration + post-practice protein options" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps districts scope Smart Snacks-compliant healthier vending programs with operators positioned to serve K-12 and higher-ed.",
});

console.log("wrote " + "healthy-vending-machines-for-schools");
