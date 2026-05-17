import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-size-and-space-requirements",
  assetType: "checklist",
  title: "Vending Machine Size + Space Requirement Checklist",
  subtitle: "Dimensions + maneuvering clearance + doorway + floor load + ADA approach",
  intro:
    "Before a placement is approved, verify the machine fits — not only at its final position, but along the entire delivery path from receiving to that position. Standard manufacturer dimensions, ADA approach clearances (28 CFR Part 36 + 2010 ADA Standards), and floor-load minimums (ASCE 7-22) are summarized here. Use during site survey, operator selection, and on the day of delivery.",
  sections: [
    {
      heading: "1. Typical machine dimensions (manufacturer reference)",
      headers: ["Machine class", "Width", "Depth", "Height", "Empty weight"],
      rows: [
        ["Snack (5-wide)", "37-41 in", "33-36 in", "72-75 in", "550-650 lbs"],
        ["Snack (6-wide)", "42-46 in", "33-36 in", "72-75 in", "600-700 lbs"],
        ["Beverage (glass-front)", "37-41 in", "33-36 in", "72-79 in", "650-750 lbs"],
        ["Beverage (stack-loaded)", "37-41 in", "32-36 in", "72-79 in", "700-800 lbs"],
        ["Combo (snack + beverage)", "39-41 in", "36-38 in", "72-75 in", "650-750 lbs"],
        ["Frozen / refrigerated fresh food", "39-41 in", "36-41 in", "72-75 in", "750-900 lbs"],
        ["Coffee / espresso (counter-top)", "16-22 in", "20-26 in", "30-36 in", "60-150 lbs"],
        ["Coffee / espresso (floor)", "24-32 in", "26-32 in", "65-72 in", "250-450 lbs"],
        ["AI / smart cooler", "26-39 in", "31-38 in", "75-82 in", "550-800 lbs"],
      ],
    },
    {
      heading: "2. Loaded weight + floor load",
      items: [
        { check: "Snack: ~700 lbs loaded; beverage: ~900-1,000 lbs loaded; frozen: ~1,000-1,100 lbs loaded." },
        { check: "Commercial floor minimum live load 50 psf — any commercial slab clears requirement." },
        { check: "Above-grade wood floor: verify ≥ 40 psf per IBC Table 1607.1; reinforce or relocate if sub-rated." },
        { check: "Raised access floor (data center, modern office): verify panel + pedestal rating ≥ 1,250 lb point load." },
        { check: "Anti-tip-over restraint anchored to floor or wall — CPSC has documented fatal tip-over incidents." },
      ],
    },
    {
      heading: "3. Delivery path clearances",
      items: [
        { check: "Doorway clear width ≥ 36 in (ADA 404.2.3); permanent threshold ≤ 1/2 in (ADA 303.3)." },
        { check: "Corridor turn: ≥ 60 in for 180-degree turn with machine on hand truck; pivot point measured at machine center." },
        { check: "Elevator inside clear ≥ 42 in × 51 in (typical passenger code minimum 6 ft × 4 ft 3 in); freight elevator strongly preferred." },
        { check: "Elevator door clear width ≥ 36 in; verify cab rating ≥ 2,500 lb where machine + hand truck combined." },
        { check: "Stairs: machine cannot be delivered up stairs over 2 risers without piano dolly + 2-person crew + insurance rider." },
        { check: "Ramp grade ≤ 1:12 (ADA 405.2) where ADA path; ≤ 1:8 acceptable for delivery-only path with appropriate crew." },
      ],
    },
    {
      heading: "4. Placement clearances + ventilation",
      items: [
        { check: "Rear clearance: 3-6 in refrigerated (compressor venting); confirm manufacturer cut sheet (Royal Vendors, Crane Merchandising Systems, AMS, Vendo)." },
        { check: "Side clearance: 1-2 in minimum each side for service access; 6+ in preferred for side-load planogram refresh." },
        { check: "Top clearance: 4 in minimum for refrigerated condenser intake on top-mount units." },
        { check: "Service door swing: ≥ 30 in clear forward of machine to fully open + load." },
        { check: "Ambient temp at placement 50-90°F; refrigerated machines derate above 90°F." },
      ],
    },
    {
      heading: "5. ADA clear floor space + approach — 2010 ADA Standards",
      items: [
        { check: "30 in × 48 in clear floor space at machine face (Section 305.3) for forward or parallel approach." },
        { check: "Accessible route ≥ 36 in wide leads to clear floor space (Section 403.5.1; 32 in minimum at point of obstruction)." },
        { check: "Reach range: highest operable part ≤ 48 in AFF; lowest ≥ 15 in AFF (Section 308)." },
        { check: "Knee + toe clearance under any machine overhang per Section 306 where forward approach used." },
        { check: "Clear floor space free of permanent obstructions (trash cans, signage, queue stanchions)." },
      ],
    },
    {
      heading: "6. Egress + code clearances",
      items: [
        { check: "Corridor width after machine install ≥ code minimum (IBC 1020 / NFPA 101 — typically 44 in commercial)." },
        { check: "Machine does not block fire extinguisher (NFPA 10), eyewash (ANSI Z358.1), AED, fire pull, or first-aid cabinet." },
        { check: "Egress path clearance per IBC 1005 maintained at full occupancy." },
        { check: "Means-of-egress signage + lighting unobstructed." },
        { check: "AHJ + fire marshal sign-off where placement is in egress path or assembly occupancy." },
      ],
    },
    {
      heading: "7. Pre-delivery sign-off",
      items: [
        { check: "Facility manager confirms placement + delivery path measurements (photo + dimensions logged)." },
        { check: "Receiving + dock access coordinated; appointment scheduled." },
        { check: "Operator confirms manufacturer + model + dimensions in delivery confirmation." },
        { check: "Security + badging arranged for install crew." },
        { check: "Floor protection (Masonite or equivalent) prepared along delivery path on finished floor." },
      ],
    },
  ],
  footer:
    "Informational only — not engineering or code advice. Verify IBC, NFPA, ADA, and manufacturer dimensions with the AHJ + operator + manufacturer cut sheet. LetUsVending is equipped to coordinate operator site surveys, delivery-path verification, and ADA-compliant placements.",
});

console.log("wrote "+"vending-machine-size-and-space-requirements");
