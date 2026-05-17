import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "accessibility-in-public-vending",
  assetType: "checklist",
  title: "Public-Building Vending Accessibility Checklist",
  subtitle: "ADA Title III + Section 308 audit, verification methods, and annual recertification",
  intro:
    "Use this checklist before signing a public-building vending contract and at annual recertification. Each item maps to a specific ADA Title III or Section 308 requirement. Operator should be able to attest in writing and provide documentation on request.",
  sections: [
    {
      heading: "Reach range — Section 308",
      paragraph:
        "ADA reach range applies to operable parts (selection buttons, payment readers, dispense doors). Verify both forward and side reach where the device permits parallel approach.",
      items: [
        { check: "Highest operable part is no higher than 48 inches above finished floor for unobstructed forward reach (308.2.1)." },
        { check: "Lowest operable part is no lower than 15 inches above finished floor (308.2.1)." },
        { check: "If obstructed forward reach, depth of obstruction ≤ 20 inches and highest point ≤ 48 inches (308.2.2)." },
        { check: "Card reader, contactless reader, and PIN pad each meet reach range and are operable with one hand without tight grasping, pinching, or twisting (309.4)." },
      ],
    },
    {
      heading: "Clear floor space — Section 305",
      items: [
        { check: "30 inch × 48 inch clear floor space provided for parallel or forward approach to operable parts." },
        { check: "Clear floor space free of permanent obstructions; not within a major circulation path that creates conflict with traffic." },
        { check: "If floor surface is carpeted, pile height ≤ ½ inch with secured edges per 302.2." },
      ],
    },
    {
      heading: "Operating force — Section 309.4",
      items: [
        { check: "Operable parts function with one hand and require ≤ 5 lbf to operate." },
        { check: "No tight grasping, pinching, or twisting of the wrist required (e.g., recessed paddles instead of round knobs)." },
        { check: "Selection buttons distinguishable by touch (raised characters, recessed buttons, or tactile indicators) where the device interface is visual-only." },
      ],
    },
    {
      heading: "Signage + product visibility",
      items: [
        { check: "Product labels visible from the clear floor space (no obstructions, glare-free lighting)." },
        { check: "Allergen labeling per FALCPA on each SKU; allergen summary signage on the machine face." },
        { check: "High-contrast pricing display; characters ≥ 5/8 inch and contrast ratio ≥ 70% per Section 703." },
        { check: "Tactile braille pricing labels at federal placements or where state code requires." },
      ],
    },
    {
      heading: "Payment + dispense accessibility",
      items: [
        { check: "Card reader, contactless tap zone, and mobile-wallet target meet reach range and 5 lbf operating force." },
        { check: "Dispense bin opening within reach range; dispense flap requires ≤ 5 lbf and does not require tight grasping." },
        { check: "Cashless option available so users without coin/bill handling capability can complete transactions." },
        { check: "Refund flow accessible via app, SMS, or phone — not solely through a wall-mounted touchscreen out of reach range." },
      ],
    },
    {
      heading: "Verification + documentation",
      items: [
        { check: "Operator provides written ADA attestation at install and annually." },
        { check: "Operator provides VPAT (Voluntary Product Accessibility Template) for digital interfaces (card reader, kiosk, app)." },
        { check: "Site-visit verification scheduled at install and annually thereafter; photos and measurements documented." },
        { check: "Facility accessibility coordinator copied on all attestation documents." },
        { check: "Procurement file retains documentation for the duration of the contract plus 5 years." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. Federal placements coordinate with the facility security officer and accessibility coordinator. State and local jurisdictions may add requirements above the federal floor.",
});

console.log("wrote sample checklist");
