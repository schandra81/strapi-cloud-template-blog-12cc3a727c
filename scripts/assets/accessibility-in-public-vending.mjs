import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "accessibility-in-public-vending",
  assetType: "checklist",
  title: "Public-Building Vending Accessibility Verification Checklist",
  subtitle: "ADA Title II/III + 2010 ADA Standards Section 308/309 + VPAT 2.5 + annual audit",
  intro:
    "Public-building vending placements must satisfy 2010 ADA Standards for Accessible Design (Sections 305, 308, 309, 703) plus state-specific overlays (e.g., California Title 24, Texas TAS, Massachusetts 521 CMR). This checklist covers install verification, digital accessibility (Section 508 / WCAG 2.1 AA), and annual recertification. Operator should attest in writing and provide measurement documentation, VPAT 2.5, and a written remediation plan for any non-conforming items.",
  sections: [
    {
      heading: "1. Reach range verification — 2010 ADA Standards Section 308",
      paragraph:
        "Reach range applies to every operable part: selection buttons, card reader, contactless tap zone, PIN pad, dispense flap, change-return lever, refund button. Measure with a calibrated tape and record to the procurement file.",
      items: [
        { check: "Unobstructed forward reach: highest operable part ≤ 48 in AFF and lowest operable part ≥ 15 in AFF (308.2.1)." },
        { check: "Obstructed forward reach: if obstruction depth ≤ 20 in, max reach 48 in; if 20-25 in, max reach 44 in (308.2.2)." },
        { check: "Unobstructed side reach: highest operable part ≤ 48 in AFF, lowest ≥ 15 in AFF (308.3.1)." },
        { check: "Obstructed side reach: if obstruction ≤ 10 in deep, max reach 48 in; if 10-24 in, max reach 46 in (308.3.2)." },
        { check: "Card reader + contactless tap zone + mobile-wallet target each independently meet reach range." },
        { check: "Dispense bin opening within reach range and not below 15 in AFF." },
      ],
    },
    {
      heading: "2. Clear floor space + approach — Section 305",
      items: [
        { check: "30 in × 48 in minimum clear floor space at each machine face for forward or parallel approach (305.3)." },
        { check: "Clear space free of permanent obstructions (trash cans, A-frame signage, queue stanchions)." },
        { check: "Knee + toe clearance under any machine overhang per 306 where forward approach is used." },
        { check: "Floor surface stable, firm, slip-resistant (302.1); carpet pile ≤ 1/2 in with secured edges (302.2)." },
        { check: "Accessible route to machine ≥ 36 in wide (404 / 403.5.1) with no abrupt level change > 1/4 in (303)." },
      ],
    },
    {
      heading: "3. Operating force + dexterity — Section 309.4",
      items: [
        { check: "All operable parts operable with one hand and require ≤ 5 lbf to operate (309.4)." },
        { check: "No tight grasping, pinching, or twisting of the wrist required (recessed paddles vs round knobs)." },
        { check: "Selection buttons distinguishable by touch where the interface is visual-only (raised, recessed, or tactile)." },
        { check: "Coin/bill slot openings ≥ 1.25 in to accommodate limited dexterity." },
        { check: "Refund / change-return mechanism operable without bending below 15 in AFF or reaching above 48 in." },
      ],
    },
    {
      heading: "4. Digital interface + Section 508 + WCAG 2.1 AA",
      paragraph:
        "Federal placements (GSA, VA, DoD, Smithsonian, federal courthouses) must conform to Section 508 Revised standards (36 CFR Part 1194) — which incorporates WCAG 2.1 Level A and AA. State agencies often adopt equivalent standards (e.g., California Gov Code 7405).",
      items: [
        { check: "Operator provides VPAT 2.5 (Voluntary Product Accessibility Template) covering kiosk firmware, payment terminal, and mobile app." },
        { check: "Touchscreen interfaces support audio output via headphone jack (508 / WCAG 1.1.1 + 1.4.4)." },
        { check: "Text contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text (WCAG 1.4.3)." },
        { check: "Mobile app and refund portal conform to WCAG 2.1 AA; operator provides accessibility statement URL." },
        { check: "Card reader supports speech output (e.g., Verifone or Ingenico models with headphone jack) at federal placements." },
      ],
    },
    {
      heading: "5. Signage, labeling, allergen disclosure",
      items: [
        { check: "Product labels visible from clear floor space without glare; LED lighting ≥ 200 lux on selection face." },
        { check: "Allergen labeling per FALCPA (21 U.S.C. 343) on each SKU; allergen summary on machine face." },
        { check: "Pricing display characters ≥ 5/8 in with ≥ 70% contrast ratio (Section 703.2)." },
        { check: "Tactile braille pricing labels at federal placements and where state code requires (e.g., 521 CMR 41.0)." },
        { check: "Nutrition disclosure compliant with FDA calorie-labeling rule (21 CFR 101.8) for chains with 20+ machines." },
      ],
    },
    {
      heading: "6. Verification documentation + annual recertification",
      items: [
        { check: "Operator written ADA attestation signed at install and at each annual recertification." },
        { check: "Photo + measurement log retained in procurement file (calibrated tape, measurements to 1/4 in)." },
        { check: "VPAT 2.5 dated within 12 months and on file." },
        { check: "Site visit verification scheduled annually; non-conformance triggers 30-day remediation plan." },
        { check: "Facility accessibility coordinator + ADA coordinator (per 28 CFR 35.107 for Title II entities) copied on attestation." },
        { check: "Procurement file retains documentation for contract term plus 5 years (or per agency record retention)." },
        { check: "Tenant / public complaint procedure published; complaints logged + responded to within 15 business days." },
      ],
    },
  ],
  footer:
    "Informational only — not legal advice. Verify federal placement requirements with the facility ADA coordinator and the contracting officer; state and local jurisdictions may add requirements above the federal floor. LetUsVending is equipped to coordinate operator selection and verification documentation for public-building placements.",
});

console.log("wrote "+"accessibility-in-public-vending");
