import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hotel-vending-accessibility-ada",
  assetType: "checklist",
  title: "Hotel Vending ADA Placement Checklist",
  subtitle: "Reach range, clear floor space, signage, and audible / visual feedback verification",
  intro:
    "Use this checklist before signing a hotel vending contract and at annual recertification. Each item maps to a specific ADA Title III or Section 308 / 305 / 309.4 / 703 requirement. Operator should be able to attest in writing and provide documentation on request.",
  sections: [
    {
      heading: "1. Reach range — ADA Section 308",
      paragraph:
        "Reach range applies to operable parts (selection buttons, payment readers, dispense doors, refund release). Verify both forward and side reach where the device permits parallel approach.",
      items: [
        { check: "Highest operable part ≤ 48 in AFF for unobstructed forward reach (Section 308.2.1)." },
        { check: "Lowest operable part ≥ 15 in AFF (Section 308.2.1)." },
        { check: "Obstructed forward reach: depth of obstruction ≤ 20 in and highest operable part ≤ 48 in (Section 308.2.2); if depth 20-25 in, highest operable part ≤ 44 in." },
        { check: "Side reach: highest operable part ≤ 48 in unobstructed (Section 308.3.1); over obstruction up to 10 in deep, ≤ 48 in; 10-24 in obstruction, ≤ 46 in (Section 308.3.2)." },
        { check: "Card reader, contactless reader, PIN pad, and dispense flap each meet reach range and operate with one hand without tight grasping, pinching, or twisting (Section 309.4)." },
      ],
    },
    {
      heading: "2. Clear floor space — ADA Section 305",
      items: [
        { check: "30 × 48 in clear floor space provided for parallel or forward approach to operable parts." },
        { check: "Clear floor space free of permanent obstructions and not within a major circulation path that creates traffic conflict." },
        { check: "Carpet pile ≤ ½ in with secured edges per Section 302.2." },
        { check: "Vending alcove door clear width ≥ 32 in per Section 404.2.3; door operating force ≤ 5 lbf per Section 404.2.9." },
      ],
    },
    {
      heading: "3. Signage and high-contrast pricing — ADA Section 703",
      items: [
        { check: "Pricing display character height ≥ 5/8 in per Section 703.5.5 where pricing serves as building signage." },
        { check: "Contrast ratio ≥ 70% between characters and background per Section 703.5.1." },
        { check: "Tactile braille pricing labels at federal placements or where state code requires (Section 703.3 + 703.4)." },
        { check: "Allergen icons supplement text-only allergen lists; FALCPA disclosure on every SKU." },
        { check: "Pricing visible from the 30 × 48 in clear floor space; no glare-inducing fluorescent reflection on the display." },
      ],
    },
    {
      heading: "4. Audible and visual feedback — ADA Section 309 / 707",
      items: [
        { check: "Selection feedback: audible tone or click confirms selection." },
        { check: "Visual feedback: display confirms selection text large enough to read from the clear floor space (typical character ≥ ½ in)." },
        { check: "Error states (out of stock, payment declined, refund pending) clearly indicated by both audible and visual cues — not visual-only." },
        { check: "Dispense complete confirmation by both audible and visual cue." },
      ],
    },
    {
      heading: "5. Verification and documentation",
      items: [
        { check: "Operator provides written ADA attestation at install and annually thereafter." },
        { check: "Operator provides VPAT (Voluntary Product Accessibility Template) for digital interfaces — card reader, kiosk, app." },
        { check: "Site-visit verification scheduled at install and annually; photos and measurements documented." },
        { check: "Hotel accessibility coordinator copied on all attestation documents and retains records for contract term + 5 years." },
        { check: "Complaint log: guest accessibility concerns recorded, root-cause analyzed, remediation owner and due date assigned." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. ADA Title III applies to hotels as places of public accommodation; state and local jurisdictions may add requirements above the federal floor. Coordinate the final review with counsel. LetUsVending can connect you with operators equipped to attest to each item — request the hotel capability matrix to compare candidates.",
});

console.log("wrote " + "hotel-vending-accessibility-ada");
