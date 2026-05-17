import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "accessibility-hotel-vending-machines",
  assetType: "checklist",
  title: "Hotel Vending Accessibility Framework",
  subtitle: "Seven-dimension audit checklist, state-specific enhancements, and operator contract clauses",
  intro:
    "Use this checklist when auditing or specifying hotel vending machines for ADA Title III and applicable state accessibility code. Hotels host a wide range of guests including travelers with disabilities, families with strollers, and elderly guests with mobility limitations — vending placements need to support the full population. Mark each item Verified at install and annually, Verified with mitigation, or Open issue.",
  sections: [
    {
      heading: "1. Reach range — ADA Section 308",
      items: [
        { check: "Highest operable part (selection button, payment reader, dispense door release) ≤ 48 in AFF for unobstructed forward reach per ADA Section 308.2.1." },
        { check: "Lowest operable part ≥ 15 in AFF per ADA Section 308.2.1." },
        { check: "If obstructed forward reach: depth of obstruction ≤ 20 in, highest operable part ≤ 48 in (308.2.2); if depth 20-25 in, highest operable part ≤ 44 in." },
        { check: "Side reach over an obstruction up to 10 in deep: highest operable part ≤ 48 in; if obstruction 10-24 in, ≤ 46 in (308.3.2)." },
      ],
    },
    {
      heading: "2. Clear floor space — ADA Section 305",
      items: [
        { check: "30 × 48 in clear floor space for parallel or forward approach to the operable parts." },
        { check: "Clear floor space outside the major circulation path; placement does not create conflict with corridor traffic." },
        { check: "Carpet pile ≤ ½ in with secured edges per ADA Section 302.2." },
        { check: "Vending alcove door (if present) provides 32 in clear width per ADA Section 404.2.3 and operating force ≤ 5 lbf per ADA Section 404.2.9." },
      ],
    },
    {
      heading: "3. Operating force and one-hand operation — ADA Section 309.4",
      items: [
        { check: "Operable parts function with one hand and require ≤ 5 lbf to operate." },
        { check: "No tight grasping, pinching, or twisting of the wrist required (e.g., recessed paddles instead of round knobs)." },
        { check: "Dispense bin opening within reach range; dispense flap requires ≤ 5 lbf." },
        { check: "Selection buttons distinguishable by touch (raised characters, recessed buttons, tactile indicators) where the device interface is visual-only." },
      ],
    },
    {
      heading: "4. Signage, pricing, and product visibility — ADA Section 703",
      items: [
        { check: "Pricing display character height ≥ 5/8 in per ADA Section 703.5.5 (where pricing serves as building signage)." },
        { check: "Contrast ratio ≥ 70% between characters and background per ADA Section 703.5.1." },
        { check: "Product labels visible from the clear floor space; no obstructions or glare." },
        { check: "Allergen disclosure on every SKU per FALCPA; allergen summary signage on the machine face." },
      ],
    },
    {
      heading: "5. Payment, refund, and digital interface accessibility",
      items: [
        { check: "Card reader, contactless tap zone, and mobile-wallet target meet reach range and 5 lbf operating force." },
        { check: "Cashless option available so guests without coin / bill handling capability can complete transactions." },
        { check: "Refund flow accessible via app, SMS-to-refund number, or front-desk request — not solely on-machine touchpad." },
        { check: "Digital interface VPAT (Voluntary Product Accessibility Template) available for card reader, kiosk, and any app." },
        { check: "Audible / tactile feedback on selection and dispense for guests with visual impairment." },
      ],
    },
    {
      heading: "6. State-specific enhancements above the federal floor",
      paragraph:
        "Several states impose accessibility requirements that exceed ADA Title III. Coordinate with state-level counsel where applicable.",
      items: [
        { check: "California: CBC Chapter 11B and Unruh Act compliance; CBC reach range matches ADA but enforcement and damages exposure is higher." },
        { check: "New York: NYC Local Law 58 (signage), NYS Human Rights Law, and NYC ADA enforcement priorities." },
        { check: "Massachusetts: 521 CMR (Architectural Access Board) — reach range matches ADA but enforcement and inspection process differs." },
        { check: "Texas: TAS (Texas Accessibility Standards) — registered accessibility specialist (RAS) review required on commercial projects." },
        { check: "Other jurisdictions: confirm local code with the building department before install (especially hotels with public-accommodation status under Title III)." },
      ],
    },
    {
      heading: "7. Operator contract clauses",
      items: [
        { check: "Operator attests in writing to ADA Title III + Section 308 / 305 / 309.4 / 703 compliance at install and annually thereafter." },
        { check: "Operator provides VPAT for any digital interface and updates on each material firmware change." },
        { check: "Operator agrees to remediate any accessibility deficiency within 30 days of notice from the hotel accessibility coordinator." },
        { check: "Operator carries CGL with no exclusion for ADA-related claims and names hotel additional insured (primary, non-contributory) with waiver of subrogation." },
        { check: "Operator participates in annual accessibility walk with the hotel's accessibility coordinator, with documentation retained for contract term + 5 years." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. ADA Title III, state accessibility codes, and FHA may apply. Coordinate the final review with the hotel's accessibility coordinator and counsel. LetUsVending can connect you with operators equipped to attest to each dimension — request the hotel capability matrix to compare candidates.",
});

console.log("wrote " + "accessibility-hotel-vending-machines");
