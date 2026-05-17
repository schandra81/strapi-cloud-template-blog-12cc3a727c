import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-much-space-does-a-vending-machine-need",
  assetType: "checklist",
  title: "Vending Space + Clearance Install Survey Checklist",
  subtitle: "Footprint, clearance, ceiling, doorway, floor load, and ADA verification",
  intro:
    "Use this checklist before quoting a vending placement to verify the alcove can accept the machine being proposed. Most full-size snack and beverage units occupy a 28-40 inch wide × 30-36 inch deep × 72-76 inch tall footprint, but service clearance, doorway path, and ADA requirements typically govern the install — not the cabinet size alone. Mark each item Verified, Acceptable with mitigation, or Reject before scheduling install.",
  sections: [
    {
      heading: "1. Machine footprint reference — full-size units",
      headers: ["Machine type", "Width", "Depth", "Height", "Weight (empty)"],
      rows: [
        ["Snack (spirals)", "37-41 in", "33-36 in", "72-76 in", "650-750 lb"],
        ["Beverage (can/bottle drop)", "37-41 in", "32-36 in", "72-79 in", "700-900 lb"],
        ["Combo (snack + beverage)", "39-43 in", "32-36 in", "72-79 in", "750-900 lb"],
        ["Fresh-food / refrigerated", "39-43 in", "34-38 in", "72-79 in", "750-900 lb"],
        ["Coffee (bean-to-cup)", "26-32 in", "30-36 in", "72-79 in", "400-700 lb"],
        ["Micro-market kiosk", "20-30 in", "20-30 in", "60-75 in", "150-300 lb"],
      ],
    },
    {
      heading: "2. Service clearance and alcove geometry",
      items: [
        { check: "Front swing clearance ≥ 36 inches when the cabinet door is fully open for restock — verified against the actual door swing depth from the manufacturer spec." },
        { check: "Side clearance ≥ 2 inches between machines and ≥ 6 inches to a side wall for cable management and ventilation." },
        { check: "Rear clearance ≥ 4 inches for ventilation on most refrigerated units (verify against manufacturer spec; some hot-aisle designs require more)." },
        { check: "Top clearance ≥ 4 inches from cabinet top to ceiling, sprinkler head, or HVAC diffuser." },
      ],
    },
    {
      heading: "3. Doorway, corridor, and elevator delivery path",
      items: [
        { check: "Doorway width ≥ machine width + 4 inches (manufacturer spec) — typical 36-inch door passes most 37-41 inch wide cabinets only with door removal." },
        { check: "Corridor turning radius ≥ 60 inches for a typical 4-wheeled vending dolly handling a full-size cabinet." },
        { check: "Elevator inside dimensions ≥ machine width × depth × height + 6 inches per dimension; elevator weight capacity ≥ machine weight + 250 lb dolly + operators." },
        { check: "Threshold transitions (door sweeps, expansion joints) flagged for ramping or rigging plan if the height differential exceeds ½ inch." },
      ],
    },
    {
      heading: "4. Ceiling, sprinkler, and HVAC",
      items: [
        { check: "Ceiling height ≥ machine height + 6 inches; minimum 78-inch ceiling for most full-size snack/beverage cabinets." },
        { check: "Sprinkler head obstruction: maintain 18 inch clearance below the sprinkler deflector per NFPA 13 Section 8.6.5 (most jurisdictions)." },
        { check: "HVAC diffuser placement does not blow directly onto the cabinet face (causes condensation on glass-front units and degrades the user experience)." },
        { check: "Emergency egress path width preserved per IBC / NFPA 101 (typical 44-inch corridor; do not encroach with cabinet or service swing)." },
      ],
    },
    {
      heading: "5. Floor load and ADA clear floor space",
      items: [
        { check: "Floor live load ≥ 100 psf (typical commercial); IBC residential is 40 psf, light office is 50 psf — full-loaded vending units commonly impose 250-300 psf at the leveling feet." },
        { check: "If the location is elevated (mezzanine, second floor over a finished space), structural review by a licensed engineer documented." },
        { check: "ADA Section 305: 30 × 48 inch clear floor space for parallel or forward approach in front of the operable parts." },
        { check: "ADA Section 308 reach range: highest operable part ≤ 48 inches AFF (forward unobstructed); lowest operable part ≥ 15 inches AFF." },
        { check: "Travel path to and from the machine meets ADA Section 403 — minimum 36-inch clear width with no obstructions." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering or accessibility-law advice. Always confirm against the specific manufacturer cut sheet and verify ADA, IBC, NFPA 13, and local jurisdiction requirements with qualified professionals. LetUsVending can connect you with operators who survey each location before placement — request a site survey to start.",
});

console.log("wrote " + "how-much-space-does-a-vending-machine-need");
