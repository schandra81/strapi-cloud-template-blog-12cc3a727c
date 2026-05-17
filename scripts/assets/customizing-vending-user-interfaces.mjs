import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "customizing-vending-user-interfaces",
  assetType: "pack",
  title: "Industrial Vending UI Customization Pack",
  subtitle: "Requirements scoping, RFP language, deployment timeline for glove-friendly UI",
  intro:
    "Industrial vending UI customization is governed by ANSI Z535 signage standards, ADA Section 308 reach range + 5 lbf operating force, PPE-glove dexterity constraints, and ANSI/ASSE Z244.1 lockout-aware service interface. Off-the-shelf retail UIs typically fail at least one of these. This pack codifies three artifacts — requirements scoping, RFP language, deployment timeline — so an industrial buyer is equipped to specify a UI that workers in gloves, ear protection, and varying lighting can operate.",
  sections: [
    {
      heading: "1. Requirements scoping framework",
      paragraph:
        "Scope the UI customization across seven dimensions. Operator should be able to attest to each.",
      items: [
        { label: "PPE-glove operability", value: "Touchscreen + selection buttons operable with cut-resistant gloves (ANSI/ISEA 105 level A3+) without removing PPE." },
        { label: "Single-hand operation", value: "All operable parts function with one hand per ADA Section 309.4; ≤ 5 lbf operating force." },
        { label: "Reach range", value: "Highest operable part ≤ 48 inches; lowest ≥ 15 inches per ADA Section 308.2.1." },
        { label: "Visual contrast", value: "≥ 70% luminance contrast per Section 703; characters ≥ 5/8 inch for primary labels." },
        { label: "Audio + tactile feedback", value: "Audible click or tactile click on each operable part; audio confirmation of dispense." },
        { label: "Multi-language", value: "UI supports primary languages of the workforce; minimum English + 1-2 additional based on demographic." },
        { label: "Lockout-aware service interface", value: "Service door + electrical disconnect placed per ANSI/ASSE Z244.1; service interface restricted to authorized technicians." },
      ],
    },
    {
      heading: "2. Hardware UI specifications",
      paragraph:
        "Hardware UI specs are codified before RFP. These are the seven specs that matter most for industrial use.",
      headers: ["Spec area", "Industrial requirement", "Why"],
      rows: [
        ["Touchscreen", "Capacitive with conductive-glove mode or resistive", "Capacitive cap-touch fails with most gloves"],
        ["Button size", "≥ 0.75 inch with 0.25-inch spacing", "Glove dexterity"],
        ["Card reader", "EMV + NFC + mobile wallet; weatherproof IP54", "Cashless mix targets ≥ 70%"],
        ["Display", "Brightness ≥ 500 cd/m² for warehouse lighting", "Outdoor-grade display for sunlight-exposed dock areas"],
        ["Audio", "≥ 85 dB confirmation tone (above OSHA 90 dB action level if hearing protection)", "Worker confirmation in noisy environments"],
        ["Tactile feedback", "Haptic motor on touchscreen + audible click on buttons", "Glove use eliminates fingertip feel"],
        ["Receipt option", "Optional QR-code receipt to mobile wallet", "Replaces paper receipt for refund tracking"],
      ],
    },
    {
      heading: "3. Software UI specifications",
      paragraph:
        "Software customization covers language, accessibility, refund flow, and integration with operator and host systems.",
      items: [
        { number: 1, title: "Language selection", description: "On-screen language toggle; default language by location; supported languages per workforce demographic." },
        { number: 2, title: "Large-text mode", description: "Workers with visual impairment can toggle large-text mode that scales characters by 50% per Section 703 contrast + size rules." },
        { number: 3, title: "Voice-over option", description: "Optional voice-over per ADA Section 707 / kiosk accessibility guidance." },
        { number: 4, title: "Refund flow", description: "Single-tap refund via app or SMS-to-refund number; auto-credit within 24 hours for cashless transactions." },
        { number: 5, title: "Free-vend authentication", description: "Where employer subsidizes, authentication via badge + employee number; daily / shift limits configurable." },
        { number: 6, title: "Allergen flag", description: "Per-SKU allergen badge displays on selection per FALCPA; allergen filter option in UI." },
        { number: 7, title: "Telemetry hook", description: "All UI events (selection, dispense, refund) logged to operator dashboard for QBR analysis." },
      ],
    },
    {
      heading: "4. RFP language",
      paragraph:
        "Insert these clauses into the vending RFP. Each closes a common gap that surfaces with off-the-shelf retail UIs.",
      items: [
        { label: "Glove operability attestation", value: "Bidder attests that machine UI operates with ANSI/ISEA 105 level A3+ cut-resistant gloves without PPE removal. Bidder provides demonstration video as part of proposal." },
        { label: "ADA Section 308 attestation", value: "Bidder attests operable parts meet 308.2.1 reach range, 309.4 operating force, and 703 visual contrast. Bidder provides VPAT for digital interface." },
        { label: "ANSI Z535 signage", value: "Machine-mounted signage compliant with ANSI Z535.1 color + Z535.2 design + Z535.4 product safety signs." },
        { label: "Multi-language", value: "UI supports English + [language list per workforce]. Bidder configures default and provides language toggle." },
        { label: "Refund flow", value: "Refund via app, SMS, or single-tap UI; auto-credit within 24 hours; refund rate report in monthly KPI." },
        { label: "Allergen flag", value: "UI displays FALCPA-compliant allergen badge per SKU; allergen filter option for users with allergies." },
        { label: "Lockout-aware service", value: "Service door interlock prevents power-on during service per ANSI/ASSE Z244.1; service log auto-captured to operator dashboard." },
      ],
    },
    {
      heading: "5. Deployment timeline",
      paragraph:
        "Typical industrial UI customization deployment runs 12-16 weeks from award. Each phase has gating attestation.",
      headers: ["Week", "Milestone", "Attestation"],
      rows: [
        ["Week 1-2", "Requirements lock", "Host signs UI spec; ADA + ANSI references confirmed"],
        ["Week 3-6", "Hardware procurement + customization", "Operator demonstrates glove-mode operability"],
        ["Week 7-8", "Software config + UAT", "Refund flow + allergen flag + language toggle tested"],
        ["Week 9-10", "Installation + Section 308 measurement", "ADA reach range + operating force verified on site"],
        ["Week 11-12", "Training + employee comms", "Worker briefing + refund channel posted"],
        ["Week 13-16", "Live + first-month review", "Telemetry confirms cashless mix + refund rate KPI"],
      ],
    },
    {
      heading: "6. UAT (user acceptance test) checklist",
      items: [
        { check: "All operable parts test ≤ 5 lbf with calibrated gauge." },
        { check: "Touchscreen operates with gloves on (ANSI/ISEA 105 A3+ sample)." },
        { check: "Card reader and contactless tap zone functional EMV + NFC + mobile wallet." },
        { check: "Language toggle switches between configured languages without restart." },
        { check: "Refund flow tested via app + SMS + single-tap UI; auto-credit confirmed." },
        { check: "Allergen filter displays per-SKU allergens correctly." },
        { check: "Voice-over option (if scoped) operates with attached or built-in audio." },
        { check: "Service door interlock prevents power-on during service." },
        { check: "Telemetry logs all UI events; operator dashboard shows clean traces." },
      ],
    },
    {
      heading: "7. Annual UI recertification",
      items: [
        { check: "ADA Section 308 measurements re-verified; photo log." },
        { check: "Glove-mode operability re-demonstrated." },
        { check: "Software firmware updated to current stable version." },
        { check: "Multi-language entries reviewed against current workforce demographic." },
        { check: "Refund flow tested end-to-end." },
        { check: "Annual KPI report — cashless mix, refund rate, language-toggle usage." },
      ],
    },
  ],
  footer:
    "This pack is a working UI specification reference. Confirm ADA, ANSI, and FALCPA requirements with the host EHS coordinator and operator before RFP issue.",
});

console.log("wrote "+"customizing-vending-user-interfaces");
