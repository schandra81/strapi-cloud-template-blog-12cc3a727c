import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-vending-for-college-students",
  assetType: "pack",
  title: "Campus AI Cooler Design Pack — Healthy Vending",
  subtitle: "Planogram framework, RFP language, and payment integration scope for HHS-aligned campus AI coolers",
  intro:
    "Healthy-vending on campus is no longer a marketing line — it's enforceable through HHS Food Service Guidelines (FSG), Smart Snacks (where K-12 framing applies), AASHE STARS alignment, and the campus dietitian's quarterly audit. This pack bundles the three working documents (planogram framework, RFP language, payment integration scope) a campus team needs to launch a healthy-vending AI cooler program.",
  sections: [
    {
      heading: "1. HHS-aligned planogram framework",
      paragraph:
        "HHS Food Service Guidelines (FSG) define healthy-share thresholds for federally connected food service. Universities adopting the FSG floor (typically 50-75% HHS-aligned facings) can use the framework below.",
      items: [
        { label: "Beverage — HHS Standard", value: "Water (still + sparkling) ≥ 35% of beverage facings. No-cal or low-cal (< 40 cal/8 oz) ≥ 50%. Caloric beverages ≤ 25 cal/8 oz on standard sizes. Allowed: 100% juice, plain milk, low-fat dairy, unsweetened tea/coffee." },
        { label: "Snack — HHS Standard", value: "Per serving: ≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from total fat (with exemptions), ≤ 10% saturated fat, ≤ 35% sugar by weight (with exemptions for fruit + dairy)." },
        { label: "Fresh + perishable — HHS preferred", value: "Whole fruit, hard-boiled egg cup, Greek yogurt, hummus + veg, salad bowl, sushi tray, charcuterie cup. ≥ 25% of cooler facings recommended." },
        { label: "Dietary attestation per SKU", value: "Vegan, vegetarian, gluten-free, nut-free, dairy-free, kosher, halal — labeled at SKU and aggregated on cooler face." },
        { label: "Allergen labeling", value: "FALCPA on every pack; cooler face displays allergen summary with cross-contamination note." },
        { label: "Local + regional share", value: "Operator targets ≥ 15% local/regional SKUs (within 250 miles); supports AASHE STARS OP-8 sub-credit." },
        { label: "Dietitian audit", value: "Semi-annual audit by campus dietitian; pass = ≥ 50% HHS-aligned facings, allergen labeling complete, no expired SKUs." },
      ],
    },
    {
      heading: "2. Planogram template — 70 SKU HHS-aligned mix",
      paragraph:
        "Target ≥ 50% HHS-aligned. Substitute by campus dietitian preference. Allergen labels per FALCPA on every SKU.",
      items: [
        { label: "Water + unsweetened — 22%", value: "Still water, sparkling water (Spindrift, LaCroix), unsweetened tea/coffee, sparkling unsweetened. $1.50-$3.50." },
        { label: "Low-cal beverage — 15%", value: "Coconut water, electrolyte (no/low cal), low-cal sparkling, plain kombucha. $2.50-$4.50." },
        { label: "Fresh + perishable — 18%", value: "Greek yogurt, whole fruit, hard-boiled egg cup, hummus + veg, salad bowl, sushi tray. $3.50-$8.50." },
        { label: "Protein + smart bar — 12%", value: "RXBAR, KIND Protein, Built, Larabar, Aloha. $2.50-$4.00." },
        { label: "HHS-aligned snack — 13%", value: "Baked chips, Skinny Pop popcorn, almond pack, trail mix, rice cakes, whole-grain crackers. $1.50-$3.50." },
        { label: "Plain milk + dairy — 5%", value: "Plain milk (low-fat), Greek yogurt, cottage cheese. $2.00-$3.50." },
        { label: "Treat / non-HHS — 15%", value: "Bottom-half tier; non-HHS allowed but not promoted; transparent labeling. $1.50-$4.00." },
      ],
    },
    {
      heading: "3. RFP language — healthy-vending clauses",
      paragraph:
        "Drop the following clauses into any healthy-vending RFP. Each requires written operator commitment.",
      items: [
        { label: "HHS-alignment commitment", value: "Operator commits to ≥ [50/65/75]% of cooler facings meeting HHS FSG snack + beverage standards as documented quarterly." },
        { label: "Smart-Snacks compatibility (where K-12 framing applies)", value: "Operator commits to ≥ 50% Smart-Snacks-compliant facings; nutrition-fact-panel attestation available per SKU." },
        { label: "Allergen labeling", value: "FALCPA labeling on every SKU; cooler-face allergen summary; ≥ 25% nut-free options labeled." },
        { label: "Dietitian audit", value: "Operator supports semi-annual campus dietitian audit; remediation plan due within 30 days for any non-compliance." },
        { label: "Local + regional sourcing", value: "Operator commits to ≥ 15% local/regional SKUs (within 250 miles); annual sustainability report aligned to AASHE STARS OP-8." },
        { label: "Sugar-sweetened beverage cap", value: "Operator commits to ≤ 25% of beverage facings being sugar-sweetened (> 25 cal/8 oz)." },
        { label: "Dietary attestation labeling", value: "Vegan, vegetarian, gluten-free, nut-free, dairy-free, kosher, halal — visible at SKU; summary on cooler face." },
        { label: "Refresh cadence", value: "Operator refreshes planogram quarterly based on velocity + dietitian input; underperforming SKUs replaced within 60 days." },
      ],
    },
    {
      heading: "4. Payment + identity integration scope",
      paragraph:
        "Healthy-vending coolers benefit from incentive-payment integration (free-water program, healthy-share subsidies). Operator should support each component below.",
      items: [
        { label: "Campus card SDK", value: "Atrium, Blackboard Transact, CBORD, TouchNet OneCard, or comparable; certified integration; FERPA DPA signed." },
        { label: "Healthy-share subsidy", value: "Operator app supports campus-funded credit ($X/student/visit) for HHS-aligned SKUs; expires at end of academic term; usage report monthly." },
        { label: "Free-water program", value: "Operator supports unlimited-water voucher for residence-hall placements on heat-illness days (coordinated with student health)." },
        { label: "Apple Pay + Google Pay", value: "Contactless EMV, mobile wallet at cooler face; tokenized; PCI-DSS 4.0 attestation." },
        { label: "Loyalty + healthy-share gamification", value: "Optional: app loyalty program where HHS-aligned purchases earn double points; gamification toward wellness rewards (campus rec credit, dining-dollar boost)." },
        { label: "Refund + dispute", value: "QR + SMS refund flow ≤ 24 hr credit-back; campus dietitian + auxiliary services see refund dashboard." },
      ],
    },
    {
      heading: "5. Communications + signage kit",
      items: [
        { check: "Cooler-face panel: 'How it works' + payment options + refund QR + allergen summary" },
        { check: "Healthy-share badge: visible at cooler face explaining HHS standard + percent compliance" },
        { check: "Dietary attestation legend (vegan, GF, etc.) at cooler face" },
        { check: "Per-SKU shelf-talker tag with allergen + dietary attestation icons" },
        { check: "Free-water + healthy-share subsidy explainer card if program funded" },
        { check: "Newsletter copy: 200-word explainer for residence-life or student-health newsletter" },
        { check: "Refund + escalation 4x6 lobby card with QR + SMS + dietitian email contact for nutrition concerns" },
      ],
    },
    {
      heading: "6. Dietitian audit checklist (semi-annual)",
      items: [
        { check: "Count HHS-aligned facings; target ≥ 50% (or campus-defined floor)" },
        { check: "Sugar-sweetened beverage facings ≤ 25%" },
        { check: "Allergen labeling complete + accurate" },
        { check: "Fresh/perishable rotation: no expired or near-expiry SKUs visible" },
        { check: "Dietary attestation icons consistent and accurate" },
        { check: "Refresh cycle: bottom-15 SKU replacement plan from operator" },
        { check: "Subsidy/incentive program reconciliation" },
        { check: "Student-feedback survey results review" },
      ],
    },
    {
      heading: "7. Operator selection criteria — healthy vending",
      items: [
        { check: "HHS / Smart-Snacks planogram capability attested + demonstrated" },
        { check: "Campus dietitian audit history at peer institution placements" },
        { check: "Local + regional sourcing capability (≥ 15% within 250 miles)" },
        { check: "AASHE STARS reporting capability (OP-8 + OP-9)" },
        { check: "Campus card SDK + FERPA DPA on file" },
        { check: "Insurance + food product liability $1M + cyber $5M" },
        { check: "Reference calls with campus dietitian + auxiliary services at 2+ peer institutions" },
      ],
    },
    {
      heading: "8. Annual review + improvement process",
      items: [
        { check: "Q1: prior-year HHS-alignment trend; dietitian summary report" },
        { check: "Q1: student wellness survey results; planogram input requests" },
        { check: "Q2: pilot 10 new SKUs targeting wellness goals; measure velocity vs displaced SKUs" },
        { check: "Q3: finalize annual planogram + HHS-alignment target adjustment" },
        { check: "Q4: AASHE STARS reporting + sustainability annual report from operator" },
      ],
    },
  ],
  footer:
    "This pack is informational. Campus dietitian, auxiliary services, student health, and the sustainability office should jointly review operator capability claims and HHS-alignment attestations before contract execution. HHS Food Service Guidelines are voluntary at universities but increasingly required by state systems and AASHE STARS-pursuing institutions.",
});

console.log("wrote " + "healthy-vending-for-college-students");
