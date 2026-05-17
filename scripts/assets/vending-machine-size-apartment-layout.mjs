import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-size-apartment-layout",
  assetType: "checklist",
  title: "Apartment Vending Pre-Installation Survey Checklist",
  subtitle: "Dimensions, delivery path, floor loading, power, telemetry, and ADA verification",
  intro:
    "Use this checklist before scheduling vending install at a multifamily property — lobby, package room, fitness center, pool deck, or resident lounge. Apartment placements pose specific challenges around delivery path through finished interiors, floor loading on elevated slabs, and ADA accessibility for resident common areas. Mark each item Verified, Acceptable with mitigation, or Reject before scheduling install.",
  sections: [
    {
      heading: "1. Machine footprint and placement zone",
      headers: ["Common apartment placement", "Suggested machine type", "Typical footprint (W × D × H)"],
      rows: [
        ["Lobby / package room", "Snack + beverage combo or micro-market kiosk", "39-43 × 32-36 × 72-79 in"],
        ["Fitness center", "Beverage + protein / fitness combo", "37-41 × 32-36 × 72-76 in"],
        ["Pool deck (outdoor-rated)", "Beverage only, outdoor-rated", "37-41 × 32-36 × 72-76 in"],
        ["Resident lounge / co-work", "Coffee + snack combo, micro-market", "26-43 × 30-36 × 60-79 in"],
      ],
    },
    {
      heading: "2. Delivery path — door, corridor, elevator",
      items: [
        { check: "Front door, vestibule door, and unit door widths measured: typical apartment lobby door is 36 in wide; a 41-inch cabinet may require door removal and reinstall." },
        { check: "Corridor turning radius ≥ 60 inches for a typical 4-wheeled vending dolly with a full-size cabinet." },
        { check: "Elevator cab dimensions ≥ machine width × depth × height + 6 inches per dimension; cab weight capacity ≥ machine weight + 250 lb dolly + operators (typical 2,500-3,500 lb residential elevator)." },
        { check: "Threshold transitions, expansion joints, and door sweeps flagged for rigging plan if differential exceeds ½ inch." },
        { check: "Floor protection plan (Masonite or plywood track) documented to prevent damage to finished lobby flooring." },
      ],
    },
    {
      heading: "3. Floor loading and structural review",
      items: [
        { check: "IBC Table 1607.1: residential live load 40 psf, corridor / lobby 100 psf — full-loaded full-size vending unit can impose 250-300 psf at the leveling feet." },
        { check: "Elevated slab or wood-framed floor: structural review by a licensed engineer documented; load-distribution plywood pad or steel plate specified if engineer recommends." },
        { check: "Post-tensioned concrete slabs: cabinet anchoring requires PT-scan before drilling to avoid tendon strike (typical practice for slab-on-grade upper floors)." },
        { check: "Pool deck or balcony placement: outdoor-rated and engineered for both live load and exterior wind / seismic per ASCE 7." },
      ],
    },
    {
      heading: "4. Power and connectivity",
      items: [
        { check: "Dedicated 20A 120V circuit per NEC 210.23; coffee / hot units may need 240V." },
        { check: "GFCI per NEC 210.8(B) where placement is within 6 ft of a sink or in a fitness room with cleaning sink; AFCI per NEC 210.12 where applicable for dwelling-unit common areas." },
        { check: "Outdoor pool-deck placement: GFCI required per NEC 210.8(B); weather-resistant in-use cover (NEMA WD-6 / UL 514D 'extra duty')." },
        { check: "Cellular signal strength verified at the placement (≥ -100 dBm RSRP LTE) or building Wi-Fi credentials provided for the telemetry modem." },
        { check: "Building cellular DAS (distributed antenna system) compatibility confirmed where signal is weak through concrete." },
      ],
    },
    {
      heading: "5. ADA and resident common-area accessibility",
      items: [
        { check: "Apartment common areas covered by ADA Title III (or Fair Housing Act + local code) — clear floor space (30 × 48 in) preserved at the machine face." },
        { check: "Reach range per ADA Section 308: highest operable part ≤ 48 in AFF; lowest operable part ≥ 15 in AFF." },
        { check: "Operating force per ADA Section 309.4: ≤ 5 lbf, one-handed, no tight grasping / pinching / twisting." },
        { check: "Pool-deck placement: 36-inch clear travel width preserved per ADA Section 403; pool-area accessibility coordinated with the property's existing ADA plan." },
        { check: "Signage and pricing display contrast ratio ≥ 70%, character height ≥ 5/8 in per ADA Section 703." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering or accessibility-law advice. Structural review of elevated slabs and wood-framed floors should be performed by a licensed structural engineer. ADA and FHA applicability to specific apartment common areas should be verified with counsel. LetUsVending can connect you with operators equipped for multifamily placements — request a site survey to start.",
});

console.log("wrote " + "vending-machine-size-apartment-layout");
