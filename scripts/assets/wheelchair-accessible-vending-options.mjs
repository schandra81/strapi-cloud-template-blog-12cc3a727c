import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "wheelchair-accessible-vending-options",
  assetType: "pack",
  title: "Wheelchair-Accessible Vending Audit Pack",
  subtitle: "ADA reach range, clear floor space, operable parts force testing, and VPAT framework",
  intro:
    "This pack consolidates the working documents a facility accessibility coordinator, procurement officer, or vending operator can use to audit a placement against the 2010 ADA Standards for Accessible Design (Section 308 reach range, Section 305 clear floor space, Section 309 operable parts) and request a VPAT for digital interfaces. Use as a capability reference when scoping a new program or recertifying an existing fleet.",
  sections: [
    {
      heading: "1. Reach-range audit — Section 308",
      paragraph:
        "Reach range applies to operable parts: selection buttons, card readers, contactless tap zone, dispense doors, refund buttons, and any user-facing touchscreen. Verify both unobstructed and obstructed cases.",
      items: [
        { label: "Unobstructed forward / side reach — high", value: "≤ 48 inches above finished floor (§308.2.1, §308.3.1)." },
        { label: "Unobstructed forward / side reach — low", value: "≥ 15 inches above finished floor (§308.2.1, §308.3.1)." },
        { label: "Obstructed forward reach — high", value: "If obstruction ≤ 20 in deep, max reach is 48 in; if obstruction > 20 in and ≤ 25 in deep, max reach drops to 44 in (§308.2.2)." },
        { label: "Obstructed side reach — high", value: "If obstruction ≤ 10 in deep, max reach is 48 in; if obstruction > 10 in and ≤ 24 in deep, max reach drops to 46 in (§308.3.2)." },
        { label: "Verification method", value: "Field tape measure at install and at annual recertification. Photographs taken at each measurement point; retained in procurement file 5 years." },
      ],
    },
    {
      heading: "2. Clear-floor-space audit — Section 305",
      items: [
        { check: "30 in × 48 in minimum clear floor space provided at the operable parts (§305.3)." },
        { check: "Clear floor space allows either forward or parallel approach (machine documented for which approach it supports)." },
        { check: "Knee + toe clearance under any front-projecting trim is ≥ 9 in toe / ≥ 27 in knee if forward approach is required (§306)." },
        { check: "Floor surface stable, firm, slip-resistant per §302.1; carpet pile ≤ ½ in with secured edges (§302.2)." },
        { check: "Clear floor space does not overlap a major circulation path that creates conflict — accessible route width retained at ≥ 36 in (§403.5.1)." },
        { check: "Threshold at entry to alcove ≤ ½ in beveled (§303.3) if machine sits in a recessed alcove." },
      ],
    },
    {
      heading: "3. Operable-parts audit — Section 309",
      items: [
        { check: "Operable parts function with one hand (§309.4)." },
        { check: "No tight grasping, pinching, or twisting of the wrist required (§309.4) — paddle handles or recessed buttons preferred over round knobs." },
        { check: "Operating force ≤ 5 lbf (§309.4) — verified with force gauge at each selection button, card reader, contactless tap, and dispense flap." },
        { check: "Selection method usable without speech (machine does not require voice command to complete a purchase)." },
        { check: "Cashless payment available so users without coin/bill handling capability can transact." },
        { check: "Refund flow accessible via app, SMS, or phone — not solely through a wall-mounted touchscreen out of reach range." },
      ],
    },
    {
      heading: "4. Tactile + visual interface audit — Sections 703, 707",
      paragraph:
        "Where the device interface is visual-only, additional tactile cues are required. Where a kiosk includes a touchscreen, Section 707 (and DOJ 2024 Title II web/kiosk rule for public entities) applies.",
      items: [
        { label: "Tactile selection", value: "Raised characters, recessed buttons, or tactile selection numbers where visual-only labels are used (§703.3 references)." },
        { label: "Character height + contrast", value: "Visual character height ≥ 5/8 in; contrast ratio ≥ 70% per §703.5.1 for high-traffic public placements." },
        { label: "Braille pricing labels", value: "Provided at federal placements (Randolph-Sheppard) and where state code requires (e.g., several state procurement codes for state buildings)." },
        { label: "Audio output", value: "Touchscreen kiosks with audio output via standard 3.5mm headphone jack or wireless pairing; navigable without visual reliance (§707.5, WCAG 2.1 AA alignment)." },
        { label: "Privacy", value: "Audio mode shields visual display so a user wearing headphones can navigate privately (§707.5.2)." },
      ],
    },
    {
      heading: "5. VPAT framework (Voluntary Product Accessibility Template)",
      paragraph:
        "Operator-side digital interfaces (card reader, mobile-wallet flow, kiosk OS, operator app for refunds) should each have a VPAT 2.5-Rev508 (or current revision) on file. Reviewer scopes the VPAT against the specific deployment, not the manufacturer's marketing.",
      items: [
        { number: 1, title: "Scope", description: "VPAT covers the exact firmware/software version deployed at the site, not a generic product family. Version + release date recorded." },
        { number: 2, title: "Section 508 chapters", description: "Reviewer confirms Chapter 4 (Hardware), Chapter 5 (Software), Chapter 6 (Support Documentation), and Chapter 7 (Support Services) are each addressed with 'Supports / Partially Supports / Does Not Support / Not Applicable' and a remarks column." },
        { number: 3, title: "Critical conformance points", description: "302.1 Without Vision, 302.3 Without Use of Hands, 302.5 Without Hearing, 302.7 With Limited Manipulation, 402.2 Speech-Output Enabled, 407.6 Operable Parts — Discernible, 407.7 Operable Parts — Tactilely Discernible." },
        { number: 4, title: "Remediation timeline", description: "Any 'Does Not Support' or 'Partially Supports' line item carries a documented remediation plan + date." },
      ],
    },
    {
      heading: "6. Indicative cost of compliant placement",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["ADA-compliant vending machine (snack/beverage)", "$4,800 – $9,500", "Section 308 reach range, ≤ 5 lbf operating force, paddle/recessed buttons"],
        ["ADA-compliant micro-market kiosk", "$8,500 – $18,000", "Touchscreen with §707 audio output, accessible reach range, tactile keypad"],
        ["VPAT acquisition / review", "$0 – $1,200", "Manufacturer-provided; third-party review if procurement requires"],
        ["Site survey + measurements", "$300 – $800", "Tape, force gauge, photographs, written attestation"],
        ["Annual recertification", "$200 – $500/machine", "Walk-through + measurements + photo log"],
        ["Remediation (signage / lifts / rerouting)", "Variable", "Sometimes $0; sometimes major if alcove rework needed"],
      ],
    },
    {
      heading: "7. Annual recertification checklist",
      items: [
        { check: "Reach range re-measured at every operable part (§308)" },
        { check: "Clear floor space re-measured (§305)" },
        { check: "Operating force re-tested with calibrated force gauge (§309.4)" },
        { check: "Photos taken at install date matched against current photos — no creep into compliance edge" },
        { check: "VPAT version on file matches firmware / software currently deployed" },
        { check: "Refund flow tested via app + SMS + phone — at least one method available without on-machine touchscreen reach" },
        { check: "Operator signs annual ADA attestation; facility accessibility coordinator counter-signs" },
        { check: "Documentation retained in procurement file for contract duration + 5 years" },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate ADA-compliant vending placements with operators that can attest in writing to Section 308 reach range, Section 305 clear floor space, Section 309 operating force, and VPAT-on-file for digital interfaces. Capability is described in operator-attested terms — documentation provided on request during scoping. This pack is informational and not legal advice; complex placements (federal buildings, courthouses, transit) should be reviewed by qualified ADA counsel.",
    },
  ],
  footer:
    "Reference document for facility coordinators, procurement officers, and operators. Federal placements coordinate with the facility accessibility coordinator and where applicable, the Randolph-Sheppard licensing agency.",
});

console.log("wrote "+"wheelchair-accessible-vending-options");
