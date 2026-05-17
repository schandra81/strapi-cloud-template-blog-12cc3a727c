import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-install-vending-machines-in-hotels",
  assetType: "checklist",
  title: "Hotel Vending Install Checklist",
  subtitle: "Placement zones, brand finish, PMS integration, per-alcove electrical, and scheduling",
  intro:
    "Use this checklist when installing vending machines in a hotel — full-service, limited-service, extended-stay, or boutique. Hotel vending installs differ from typical commercial sites in three ways: brand finish requirements (cabinet wrap, signage), PMS / room-charge integration, and scheduling around guest occupancy. Mark each item Verified, Acceptable with mitigation, or Reject before scheduling install.",
  sections: [
    {
      heading: "1. Placement zones and machine selection",
      headers: ["Zone", "Recommended machine", "Common SKU mix"],
      rows: [
        ["Per-floor alcove", "Beverage + snack combo or beverage-only", "Water, soda, candy, chips, snack bars"],
        ["Lobby off-corridor", "Combo or micro-market kiosk", "Grab-and-go meals, toiletries, OTC, snacks, beverages"],
        ["Fitness center", "Beverage + protein combo", "Water, electrolyte, protein bars, towels"],
        ["Pool deck (outdoor-rated)", "Beverage-only outdoor-rated", "Water, soda, sunscreen, accessories"],
        ["Business center / lounge", "Snack + coffee combo", "Coffee, water, snack bars, breakfast items"],
      ],
    },
    {
      heading: "2. Brand finish and cabinet wrap",
      items: [
        { check: "Cabinet wrap or paint specified to brand standards (cabinet color, side panel graphic, header signage)." },
        { check: "Brand-flag logo placement approved by hotel's brand-standards manager and operator's print vendor." },
        { check: "Wrap material rated for indoor commercial use (typical 3M Controltac or equivalent vinyl) with 3-5 year UV/wear life." },
        { check: "Wrap installation scheduled during install or pre-staging — not retrofitted after the cabinet is on the floor." },
        { check: "Brand-standards review form signed off by hotel general manager and operator account manager." },
      ],
    },
    {
      heading: "3. PMS integration and room-charge billing",
      items: [
        { check: "PMS integration feasibility confirmed: Oracle OPERA, Mews, Cloudbeds, Marriott FOSSE, Hilton OnQ, or comparable property-management system." },
        { check: "Room-charge interface: vending machine reads guest room key (HID card) or accepts mobile-wallet linked to folio." },
        { check: "Daily folio reconciliation between operator telemetry and PMS revenue ledger; mismatch tolerance ≤ 1% by dollar volume." },
        { check: "Refund flow integrated with PMS so room-charged refunds appear on the folio rather than as a separate operator-side credit." },
        { check: "PCI DSS scope: card reader and any embedded PMS integration each maintain compliant scope (current PCI DSS version)." },
      ],
    },
    {
      heading: "4. Per-alcove electrical and plumbing",
      items: [
        { check: "Each alcove provided with a dedicated 20A 120V circuit per NEC 210.23; refrigerated combo or hot-food machines may require 240V." },
        { check: "GFCI per NEC 210.8(B) for placements within 6 ft of a sink or in wet locations; weather-resistant in-use cover for outdoor / pool-deck." },
        { check: "Voltage drop ≤ 3% at running load per NEC 210.19(A) Informational Note 4 — long alcove runs from the panel may require upsizing conductors." },
        { check: "Plumbing: coffee or water machines need a ¼-in cold-water line with shutoff valve, pressure 30-80 psi, backflow protection per local plumbing code." },
        { check: "Sprinkler deflector clearance ≥ 18 in per NFPA 13 Section 8.6.5; HVAC diffuser placement does not blow directly onto cabinet face." },
      ],
    },
    {
      heading: "5. Scheduling and guest impact",
      items: [
        { check: "Install scheduled during low-occupancy window (typical 10 AM - 3 PM weekdays); avoid weekend and holiday peaks." },
        { check: "Elevator reservation booked with front desk so machine delivery does not interfere with check-in/out traffic." },
        { check: "Floor protection plan (Masonite or plywood track) documented to prevent damage to lobby and corridor flooring." },
        { check: "Acoustic considerations: cabinet placement away from guest-room walls; refrigeration cycle noise ≤ 55 dB at 1 m per typical hotel guest-area limit." },
        { check: "Sign-off walk-through with hotel engineering, front-desk manager, and operator account manager at install completion." },
      ],
    },
    {
      heading: "6. ADA and accessibility verification",
      items: [
        { check: "ADA Section 308 reach range (≤ 48 in / ≥ 15 in AFF), Section 305 clear floor space (30 × 48 in), Section 309.4 operating force (≤ 5 lbf)." },
        { check: "Section 703 character height ≥ 5/8 in and contrast ratio ≥ 70% for pricing display." },
        { check: "Audible + visual feedback on selection, payment, dispense, and refund states." },
        { check: "Operator provides written ADA attestation at install and annually thereafter; VPAT for digital interfaces." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering, accessibility-law, or PCI-compliance advice. Electrical and plumbing work must be performed by licensed professionals per NEC and local plumbing code; PMS integration and PCI scoping should be reviewed with the hotel's IT and PCI assessor. LetUsVending can connect you with operators equipped for hotel placements — request the hotel capability matrix to compare candidates.",
});

console.log("wrote " + "how-to-install-vending-machines-in-hotels");
