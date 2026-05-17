import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-much-weight-does-a-vending-machine-hold",
  assetType: "checklist",
  title: "Vending Machine Install Survey Checklist — Weight, Floor Load, Clearance, and Electrical",
  subtitle: "Cabinet weight reference, point load calculation, structural review trigger, and ADA verification",
  intro:
    "Use this checklist when surveying a placement on an elevated floor, mezzanine, or any structurally sensitive area. Full-size vending machines fully loaded routinely exceed 1,200-1,500 lb. The point load at each leveling foot can reach 250-300 psf — well above the live-load assumption for residential or light-office construction. Mark each item Verified, Reviewed with engineer, or Reject before install.",
  sections: [
    {
      heading: "1. Cabinet weight reference (empty vs. fully loaded)",
      headers: ["Machine type", "Empty (lb)", "Fully loaded (lb)", "Approx. point load per foot"],
      rows: [
        ["Snack (spiral)", "650-750", "1,000-1,200", "250-300 lb"],
        ["Beverage (can/bottle)", "700-900", "1,200-1,500", "300-375 lb"],
        ["Combo (snack + beverage)", "750-900", "1,200-1,500", "300-375 lb"],
        ["Fresh-food / refrigerated", "750-900", "1,100-1,400", "275-350 lb"],
        ["Coffee (bean-to-cup)", "400-700", "500-850", "125-215 lb"],
        ["Micro-market kiosk", "150-300", "200-400", "50-100 lb"],
      ],
    },
    {
      heading: "2. Floor live load — IBC and ASCE 7 reference",
      items: [
        { check: "IBC Table 1607.1 live load values verified for the placement floor: light office 50 psf, retail / mercantile 75-100 psf, light manufacturing 125 psf." },
        { check: "Point-load calculation: total loaded weight ÷ 4 leveling feet ÷ (typical 4 in² contact area) = lb/ft² applied locally. Most full-size cabinets exceed 250 psf at the foot." },
        { check: "Concentrated load review per IBC 1607.4 — vending machines commonly classify as a concentrated load and must be reviewed against the floor system's concentrated capacity." },
        { check: "Elevated floors (mezzanine, upper-story over a finished space, post-tensioned slabs) reviewed by a licensed structural engineer with sign-off documented." },
        { check: "Wood-framed floors: joist span, spacing, and grade reviewed; load-distribution plywood pad or steel plate specified if the engineer recommends." },
      ],
    },
    {
      heading: "3. Clearance, ventilation, and service",
      items: [
        { check: "Front swing clearance ≥ 36 inches with the cabinet door fully open for restock; verified against manufacturer cut sheet." },
        { check: "Rear ventilation clearance ≥ 4 inches; some refrigerated units require 6 inches or a vent grille to a service chase." },
        { check: "Side clearance ≥ 2 inches between machines and ≥ 6 inches to a wall for cable runs." },
        { check: "Top clearance ≥ 4 inches from cabinet to ceiling, sprinkler head, or HVAC diffuser; sprinkler deflector clearance ≥ 18 inches per NFPA 13 Section 8.6.5." },
      ],
    },
    {
      heading: "4. Electrical baseline",
      items: [
        { check: "Dedicated 20A 120V circuit per NEC 210.23; verify against machine nameplate FLA." },
        { check: "GFCI receptacle per NEC 210.8(B) for commercial kitchens, break rooms with sinks, and outdoor locations." },
        { check: "Voltage drop ≤ 3% at running load per NEC 210.19(A) Informational Note 4." },
        { check: "Receptacle configuration matches cordcap (NEMA 5-15R, 5-20R, 6-20R, or 6-30R as applicable)." },
      ],
    },
    {
      heading: "5. Anchoring, tip resistance, and ADA",
      items: [
        { check: "Cabinet anti-tip device installed per manufacturer recommendation (typical: L-bracket or wall strap from cabinet top to wall stud)." },
        { check: "Outdoor or seismic placements anchored to slab with concrete anchors per manufacturer spec and ASCE 7 seismic / wind coefficients for the jurisdiction." },
        { check: "ADA Section 305 clear floor space (30 × 48 inches) preserved at the machine face." },
        { check: "ADA Section 308 reach range: highest operable part ≤ 48 inches AFF; lowest operable part ≥ 15 inches AFF." },
        { check: "Cabinet leveled per manufacturer spec (≤ ¼ inch out of plumb) before final anchoring." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering advice. Live-load classifications, concentrated-load reviews, and seismic anchoring should be performed by a licensed structural engineer per IBC, ASCE 7, and local jurisdiction. LetUsVending can connect you with operators who survey each location before placement — request a site survey to start.",
});

console.log("wrote " + "how-much-weight-does-a-vending-machine-hold");
