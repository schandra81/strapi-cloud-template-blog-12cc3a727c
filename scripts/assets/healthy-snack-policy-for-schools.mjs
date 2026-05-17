import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-snack-policy-for-schools",
  assetType: "checklist",
  title: "K-12 Healthy Snack Policy Drafting Framework",
  subtitle: "Ten-element policy checklist + operator MSA capability matrix + SFA Administrative Review prep",
  intro:
    "A district healthy-snack policy is required under 42 U.S.C. 1758b (Local School Wellness Policy) and reviewed during the triennial Administrative Review under 7 CFR 210.18. This framework gives the wellness committee a ten-element drafting checklist, an operator MSA (Master Services Agreement) capability matrix, and the documentation needed at the next Administrative Review. Use during policy adoption and at each triennial assessment.",
  sections: [
    {
      heading: "1. Ten-element healthy snack policy checklist",
      paragraph:
        "Each element is referenced to USDA Local School Wellness Policy Final Rule (81 FR 50151, August 2016) implementing the Healthy, Hunger-Free Kids Act of 2010. Policy must be public, reviewed triennially, and tied to measurable goals.",
      items: [
        { check: "Element 1 — Nutrition guidelines for all foods sold during the school day match or exceed USDA Smart Snacks (7 CFR 210.11)." },
        { check: "Element 2 — Standards for foods provided but not sold (classroom celebrations, rewards) referenced and aligned where adopted." },
        { check: "Element 3 — Nutrition promotion: marketing on school property limited to Smart-Snacks-compliant products (7 CFR 210.31)." },
        { check: "Element 4 — Nutrition education integrated into K-12 curriculum; goals measurable." },
        { check: "Element 5 — Physical activity goals (referenced; not in scope of vending but required in same policy)." },
        { check: "Element 6 — Stakeholder participation: parents, students, SFA, school board, public, food service operators." },
        { check: "Element 7 — Triennial assessment: extent of compliance + comparison to model + progress." },
        { check: "Element 8 — Public notification: policy + assessment results posted on district website." },
        { check: "Element 9 — Recordkeeping: most recent policy, documentation of public involvement, triennial assessment." },
        { check: "Element 10 — Designated official(s) responsible for implementation + compliance — named in policy." },
      ],
    },
    {
      heading: "2. Smart Snacks nutrition thresholds (drafting reference)",
      headers: ["Nutrient / criterion", "Snack / side", "Entrée"],
      rows: [
        ["Calories", "≤ 200 cal", "≤ 350 cal"],
        ["Sodium", "≤ 200 mg", "≤ 480 mg"],
        ["Total fat", "≤ 35% of calories", "≤ 35% of calories"],
        ["Saturated fat", "< 10% of calories", "< 10% of calories"],
        ["Trans fat", "0 g", "0 g"],
        ["Total sugar", "≤ 35% by weight", "≤ 35% by weight"],
        ["First ingredient", "Fruit, veg, dairy, protein, whole grain", "Same"],
      ],
    },
    {
      heading: "3. Operator MSA capability matrix — what to require in writing",
      items: [
        { label: "Smart Snacks attestation", value: "Operator signed attestation that 100% of SKUs sold during the school day pass Smart Snacks Product Calculator; SKU list refreshed each semester." },
        { label: "Substitution policy", value: "Operator commits to 5-business-day substitution when an SKU is delisted by manufacturer or fails reformulation review." },
        { label: "Marketing compliance — 7 CFR 210.31", value: "All in-school signage, machine wraps, cup branding limited to Smart-Snacks-compliant SKUs; operator removes non-compliant marketing at own cost." },
        { label: "Labeling", value: "Allergen labeling per FALCPA on every facing; calorie disclosure per FDA 21 CFR 101.8 for chains with 20+ machines." },
        { label: "Telemetry", value: "Read-access dashboard for SFA director showing per-SKU velocity + planogram + price changes (Cantaloupe Seed, Nayax MoMa, 365 ADM, AWM, or comparable)." },
        { label: "Administrative Review support", value: "Operator provides documentation packet (Smart Snacks SKU list, attestation, calorie labeling, marketing inventory) to SFA within 5 business days of SA notification." },
        { label: "Refund + recall procedure", value: "Refund within 5 business days; manufacturer recall pulled from machines within 24 hours of FDA / USDA notice." },
      ],
    },
    {
      heading: "4. Triennial Administrative Review preparation",
      paragraph:
        "Under 7 CFR 210.18 the State Agency (SA) reviews each SFA on a 3-year cycle. Vending compliance is a documented review element. Required documentation listed below.",
      items: [
        { check: "Current wellness policy (signed, dated, posted to district website)." },
        { check: "Most recent triennial assessment with progress notes and stakeholder participation log." },
        { check: "Operator Smart Snacks attestation + current SKU list with Smart Snacks Calculator output." },
        { check: "Per-machine planogram with photographs from past 30 days." },
        { check: "Marketing inventory: machine wraps, scoreboards, cups, posters — each verified Smart Snacks compliant." },
        { check: "Designated wellness official named in policy is reachable + briefed for SA interview." },
        { check: "Public notification: policy + assessment URL + last-updated date on district homepage." },
      ],
    },
    {
      heading: "5. Wellness committee meeting cadence",
      items: [
        { number: 1, title: "Annual policy review (August)", description: "Committee reviews policy, operator SKU list, planogram, prior-year compliance, sets current-year measurable goals." },
        { number: 2, title: "Mid-year check (January)", description: "Telemetry review, marketing audit, student/parent feedback survey, planogram refresh for spring." },
        { number: 3, title: "End-of-year assessment (May-June)", description: "Compile annual report; every third year compile full triennial assessment per 7 CFR 210.30(d)." },
      ],
    },
    {
      heading: "6. Common Administrative Review findings to pre-empt",
      items: [
        { check: "Non-compliant SKU in machine — refresh planogram + SKU list one week before SA visit." },
        { check: "Stale marketing — audit cups, scoreboards, posters quarterly; document removal." },
        { check: "Missing public notification — confirm policy URL + assessment URL live and current." },
        { check: "Stakeholder participation undocumented — keep sign-in sheets + meeting minutes for 3 years." },
        { check: "Triennial assessment not completed — calendar reminder set 9 months before due date." },
      ],
    },
  ],
  footer:
    "Informational only — not legal advice. Verify Smart Snacks SKU status with the SFA director using the Alliance for a Healthier Generation Smart Snacks Product Calculator; consult the State Agency for state-specific overlays. LetUsVending is equipped to coordinate Smart-Snacks-aligned operators and Administrative-Review-ready documentation.",
});

console.log("wrote "+"healthy-snack-policy-for-schools");
