import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-accessibility-students",
  assetType: "checklist",
  title: "Student Vending Accessibility Checklist",
  subtitle: "ADA Section 308/309 + audio + nutrition + 504 plan alignment + placement audit",
  intro:
    "K-12 and higher-ed vending placements must satisfy 2010 ADA Standards for Accessible Design at every machine, in every wing, on every floor — and must integrate with the school's Section 504 / IDEA accommodations plans. This checklist gives the SFA director, 504 coordinator, and accessibility coordinator a verifiable per-machine audit before contract execution and at annual recertification.",
  sections: [
    {
      heading: "1. Reach range + clear floor space",
      paragraph:
        "Public schools as Title II entities apply 2010 ADA Standards (28 CFR 35.151). Verify each operable part — selection buttons, card reader, contactless tap zone, dispense flap, change-return — with calibrated measurement.",
      items: [
        { check: "Highest operable part ≤ 48 in AFF (unobstructed forward reach, Section 308.2.1)." },
        { check: "Lowest operable part ≥ 15 in AFF (Section 308.2.1)." },
        { check: "30 in × 48 in clear floor space at machine face (Section 305.3)." },
        { check: "Accessible route ≥ 36 in wide leads to clear floor space (Section 403.5.1)." },
        { check: "Operating force ≤ 5 lbf on all operable parts (Section 309.4)." },
        { check: "No tight grasping, pinching, or twisting required (Section 309.4)." },
      ],
    },
    {
      heading: "2. Audio + sensory accommodation",
      items: [
        { check: "Card reader / kiosk supports audio output via 3.5 mm headphone jack for blind / low-vision students." },
        { check: "Selection buttons distinguishable by touch (raised, recessed, or tactile indicator)." },
        { check: "Price display ≥ 5/8 in characters with ≥ 70% contrast ratio (ADA Section 703.2)." },
        { check: "Touchscreen, where used, supports screen-reader / VoiceOver-style audio confirmation." },
        { check: "Visual + audio confirmation of vend (helpful for students with sensory processing differences)." },
        { check: "Operator mobile app conforms to WCAG 2.1 AA; accessibility statement URL provided." },
      ],
    },
    {
      heading: "3. Nutrition + dietary accommodation",
      items: [
        { check: "Allergen labeling per FALCPA (21 U.S.C. 343) on each facing — Big 9 incl. sesame (FASTER Act 2021)." },
        { check: "Allergen summary signage on machine face — students with EpiPen 504 plans can identify safe SKUs without staff support." },
        { check: "Gluten-free SKUs flagged where district has documented celiac population in 504 plans." },
        { check: "Calorie disclosure per FDA 21 CFR 101.8 for chains with 20+ machines under common ownership." },
        { check: "Smart Snacks SKU list refreshed each semester per 7 CFR 210.11." },
        { check: "Diabetic-friendly SKU selection (low-sugar protein) flagged for students with diabetic 504 plans." },
      ],
    },
    {
      heading: "4. Placement audit (per machine, every wing)",
      items: [
        { check: "Machine on accessible route from every classroom that may need it (computer lab, gym, library, athletic complex)." },
        { check: "No level change > 1/4 in within clear floor space (Section 303)." },
        { check: "Carpet pile ≤ 1/2 in, edges secured (Section 302.2)." },
        { check: "Lighting ≥ 200 lux on machine face for visibility (helpful for low-vision)." },
        { check: "Clear floor space not within major circulation path that creates traffic conflict (mitigates anxiety / mobility access)." },
        { check: "Wheelchair-accessible machine within 200 ft of any general-use machine where building floor plan requires." },
      ],
    },
    {
      heading: "5. Section 504 + IDEA plan alignment",
      paragraph:
        "Students with disabilities may have 504 plans (Rehabilitation Act of 1973) or IEPs (IDEA, 20 U.S.C. 1400) that include cafeteria + vending accommodations. SFA and 504 coordinator should review vending each plan-update cycle.",
      items: [
        { check: "504 coordinator briefed on machine locations, payment methods, and accessibility features." },
        { check: "Students with mobility 504 plans able to operate every accessible machine independently — verified by walkthrough." },
        { check: "Students with anxiety / autism 504 plans have low-traffic placement options identified." },
        { check: "Students with cashless-only restrictions (e.g., low-income free/reduced-meal anonymity) accommodated via cashless option and discreet refund flow." },
        { check: "Family-engagement communication: 504/IEP team copied on annual ADA attestation." },
      ],
    },
    {
      heading: "6. Documentation + annual recertification",
      items: [
        { check: "Operator ADA attestation signed at install and at each annual recertification." },
        { check: "Photo + measurement log per machine retained 5 years." },
        { check: "VPAT 2.5 for kiosk firmware + payment terminal + mobile app — dated within 12 months." },
        { check: "Complaint procedure published (district ADA / 504 coordinator contact)." },
        { check: "Complaints logged + responded to within 15 business days (28 CFR 35.107)." },
        { check: "Triennial Administrative Review packet includes ADA attestation + 504 alignment notes." },
      ],
    },
  ],
  footer:
    "Informational only — not legal advice. Verify with district ADA / 504 coordinators and the SFA director. LetUsVending is equipped to coordinate operator selection, VPAT documentation, and per-machine measurement records for K-12 and higher-ed placements.",
});

console.log("wrote "+"vending-machine-accessibility-students");
