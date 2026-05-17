import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-student-mental-wellness",
  assetType: "pack",
  title: "Campus Wellness Vending Implementation Pack",
  subtitle: "Planogram, signage, and health-services partnership template for AI cooler wellness vending",
  intro:
    "Campus mental-wellness vending pairs AI coolers with student health services to make wellness resources (hydration, recovery, sleep aids, comfort SKUs) and crisis-line signage easy to access at 2 AM during finals. This pack bundles the three working documents (planogram, signage kit, partnership template) a student-affairs + counseling-services + auxiliary-services team needs.",
  sections: [
    {
      heading: "1. Wellness planogram (60 SKUs)",
      paragraph:
        "Wellness planogram weights hydration + sleep + recovery + comfort-food + emergency-care SKUs. ≥ 50% HHS-aligned where dining-services standard requires. Allergen labeling per FALCPA on every SKU.",
      items: [
        { label: "Hydration + electrolyte — 20%", value: "Bottled water (multi-size), sparkling water, electrolyte (Liquid IV, Nuun, Powerade Zero), coconut water. $1.50-$4.00." },
        { label: "Sleep + calm — 12%", value: "Chamomile + sleepy tea, magnesium drink, melatonin gummies/tabs, lavender supplement, calming snack (matcha latte). $2.50-$8.00." },
        { label: "Recovery + protein — 15%", value: "RTD protein shake, Greek yogurt, hard-boiled egg cup, hummus + veg cup, protein bar, electrolyte recovery. $3.00-$5.50." },
        { label: "Comfort food (HHS-aligned where possible) — 15%", value: "Soup + ramen cup (low-sodium), mac-and-cheese cup, oatmeal cup, hot cocoa, single-serve dessert. $2.50-$5.00." },
        { label: "Emergency / OTC — 10%", value: "Pain reliever 2-pack (ibuprofen + acetaminophen), allergy 2-pack, antacid, anti-nausea, melatonin, electrolyte rehydration. $2.50-$6.00." },
        { label: "Wellness convenience — 10%", value: "Eye mask, earplugs 5-pack, gum + mints, single-use tissue pack, hand-warmer, lip balm. $2.50-$8.00." },
        { label: "Energy + caffeine (balanced) — 10%", value: "Cold brew, RTD coffee, kombucha, low-cal energy. $3.00-$5.00." },
        { label: "Healthy snack — 8%", value: "Whole-grain crackers, popcorn, almond pack, fruit + nut bar, soft-bake oat cookie. $1.50-$3.50." },
      ],
    },
    {
      heading: "2. Cooler-face signage + wellness messaging kit",
      paragraph:
        "Wellness coolers double as quiet wellness touchpoints. Cooler-face signage carries crisis-line numbers + counseling resource QR + accessibility info — not in a clinical way, but always available.",
      items: [
        { check: "Cooler-face panel (11x17 inside-glass): 'Take care of you' — payment options + refund QR + allergen summary + 988 / campus crisis-line + counseling-services QR" },
        { check: "Dietary attestation icons + healthy-share badge visible at cooler face" },
        { check: "Wellness-prompts strip (along top header): rotating message ('hydrate today,' 'rest is productive,' 'reach out — counseling services [QR]')" },
        { check: "988 + crisis-line number printed prominently on every cooler face (state-specific number where applicable)" },
        { check: "Counseling-services + basic-needs hub QR — links to plain-language web page" },
        { check: "Accessibility note: alternative refund flow + accommodation request channel" },
        { check: "Emergency contact: 24/7 student health + after-hours counseling number" },
        { check: "FALCPA + dietary signage compliant with campus + state code" },
      ],
    },
    {
      heading: "3. Health-services partnership template",
      paragraph:
        "Wellness vending succeeds when student health services + counseling services + auxiliary services are co-owners. The template below defines the partnership.",
      items: [
        { label: "Sponsoring offices", value: "Student health services + counseling services + auxiliary services + dean of students; signed memorandum of understanding (MoU) defines roles." },
        { label: "Wellness planogram review", value: "Semi-annual: student health dietitian + counseling-services rep review planogram for wellness alignment; auxiliary services + operator coordinate." },
        { label: "Subsidy program (optional)", value: "Student health funds a 'wellness boost' credit for eligible students (high-stress weeks, mental-health awareness month); operator dispenses against the credit." },
        { label: "Crisis-line signage coordination", value: "Counseling services owns crisis-line signage content + cadence; operator commits to displaying current campus + 988 numbers on every cooler face." },
        { label: "Awareness-week activation", value: "Mental-health awareness month (May), suicide-prevention week (September), stress-awareness week — coordinated SKU spotlight + signage + social campaign." },
        { label: "Data + privacy", value: "Aggregated cooler utilization shared with student health for trend analysis (peak stress periods, healthy-share trends); no student-identifiable data; FERPA DPA covers any campus-card-tender-tied data." },
        { label: "Quarterly review", value: "Auxiliary services + student health + counseling + operator account manager review planogram, signage, awareness-week activations, sponsorship reconciliation." },
        { label: "Annual review", value: "Outcomes assessment: utilization, planogram impact, healthy-share trend; aligned to student-wellness strategic plan." },
      ],
    },
    {
      heading: "4. Awareness-week activation calendar",
      headers: ["Month", "Theme", "SKU spotlight", "Signage + comms"],
      rows: [
        ["September", "Suicide prevention week", "Comfort SKUs (warm tea, soup, soft-bake)", "988 callout + counseling-services QR"],
        ["October", "Mental health awareness day (10/10)", "Sleep + calm SKUs, healthy share", "Counseling-services hours + walk-in info"],
        ["November", "Stress-awareness week (pre-Thanksgiving)", "Recovery protein, hydration", "Counseling + basic-needs hub QR"],
        ["December", "Finals fuel + wellness", "Hydration + healthy snack + sleep aid", "24/7 cooler signage + crisis-line"],
        ["February", "Eating disorder awareness", "HHS-aligned + healthy share visible", "Student health nutrition resource QR"],
        ["March", "Sleep awareness week", "Sleep + calm SKUs, herbal tea", "Sleep-hygiene resource QR"],
        ["April", "Stress-awareness month", "Recovery + balanced SKUs", "Counseling + basic-needs hub QR"],
        ["May", "Mental health awareness month", "Full wellness mix featured", "Counseling + 988 + wellness hub QR"],
      ],
    },
    {
      heading: "5. Placement criteria — wellness coolers",
      items: [
        { check: "Foot traffic ≥ 300 unique students/day during academic term" },
        { check: "Placement near student health center, counseling services, or basic-needs hub" },
        { check: "Operating hours: ≥ 18 hr/day during term; 24/7 during high-stress weeks where building access supports" },
        { check: "Acoustic + lighting: low-noise compressor; dimmed overnight lighting; not in clinical waiting room" },
        { check: "ADA Section 308 compliance: 30x48 in clear floor space, operable parts 15-48 in AFF, ≤ 5 lbf operating force" },
        { check: "Privacy: cooler placement allows discreet purchase (e.g., not in front of receptionist) for stigma-sensitive SKUs (sleep aid, OTC, comfort)" },
        { check: "Trash + recycling within 25 ft" },
        { check: "Cellular ≥ -95 dBm or Ethernet drop on segmented VLAN" },
      ],
    },
    {
      heading: "6. Stigma + dignity framework",
      paragraph:
        "Wellness coolers carry sleep aid + OTC + recovery SKUs that some students avoid in stigmatizing environments. The framework below ensures dignified access.",
      items: [
        { label: "Privacy at point of purchase", value: "Cooler dispenses without visible-to-others packaging; refund flow is private (QR / SMS, not in-person)." },
        { label: "No 'mental-health-only' branding", value: "Cooler cabinet wrap matches campus brand standards; wellness messaging is one of several rotating themes." },
        { label: "Crisis-line visible always", value: "988 + campus crisis line on every cooler face, every day — not as a special-event call-out." },
        { label: "Refund + complaint without identification", value: "Refund flow does not require student ID; QR + SMS allow anonymous refund routing." },
        { label: "Sleep aid + OTC at scale", value: "Sleep aid + OTC are normal SKUs alongside snack + beverage — destigmatized by inclusion in standard wellness mix." },
        { label: "Dietary attestation accuracy", value: "Vegan, GF, halal, kosher, dairy-free icons visible per SKU; reduces friction for diet-restrictive students." },
        { label: "Cultural relevance", value: "Curated SKU mix matching campus demographics; refreshed quarterly with student-affairs input." },
      ],
    },
    {
      heading: "7. Operator selection criteria — wellness vending",
      items: [
        { check: "Higher-ed wellness or healthy-vending reference accounts ≥ 2 active ≥ 12 months" },
        { check: "Smart-Snacks / HHS / NEMS-V / FITPICK planogram capability attested" },
        { check: "Campus card SDK + FERPA DPA on file" },
        { check: "Signage flexibility: cooler-face panel supports wellness messaging + crisis-line + counseling-services QR" },
        { check: "Allergen + dietary attestation accuracy + cultural-attestation accuracy" },
        { check: "Refund automation: QR + SMS refund flow ≤ 24 hr credit-back, no in-person identification required" },
        { check: "Insurance: $2M GL, $1M umbrella, food product liability $1M, cyber $5M" },
        { check: "Sustainability + STARS-aligned reporting capability" },
      ],
    },
    {
      heading: "8. Quarterly + annual review framework",
      items: [
        { check: "Quarterly: utilization by cooler placement (aggregated only)" },
        { check: "Quarterly: planogram refresh with student health + counseling-services input" },
        { check: "Quarterly: signage + crisis-line content audit; ensure 988 + campus crisis-line current" },
        { check: "Quarterly: awareness-week activation review + planning for next quarter" },
        { check: "Semi-annual: dietitian + student health audit (HHS-alignment, allergen, cultural)" },
        { check: "Annual: outcomes assessment aligned to student-wellness strategic plan" },
        { check: "Annual: privacy-office review of data flows + DPA scope" },
        { check: "Annual: operator contract review + commission tier re-anchor" },
      ],
    },
  ],
  footer:
    "This pack is informational. Student health services + counseling services + auxiliary services + dean of students + privacy office should jointly review program design before launch. Crisis-line signage content + cadence should be owned by counseling services and refreshed periodically.",
});

console.log("wrote " + "vending-student-mental-wellness");
