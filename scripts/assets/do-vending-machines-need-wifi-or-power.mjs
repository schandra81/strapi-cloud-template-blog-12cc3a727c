import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "do-vending-machines-need-wifi-or-power",
  assetType: "checklist",
  title: "Vending Machine Install Survey Checklist",
  subtitle: "Power (NEC 210), GFCI (NEC 210.8), cellular vs Wi-Fi, water + drainage, ambient",
  intro:
    "Before an operator schedules delivery, complete this install survey to avoid the most common reasons a placement is delayed: dedicated circuit not present, GFCI required, cellular signal weak, doorway clearance tight, or no water + drain for fresh-brew / espresso. The survey aligns to NEC 2023 (NFPA 70), ADA 2010 Standards, and standard manufacturer install guides (Royal Vendors, Crane Merchandising Systems, AMS, Vendo, Coffetek, Bunn).",
  sections: [
    {
      heading: "1. Power scope — NEC 2023 (NFPA 70)",
      items: [
        { check: "Dedicated 120V / 20A circuit per snack or beverage machine — NEC 210.23(B)(2). Not shared with break-room microwave or coffee pot." },
        { check: "Hot-beverage / espresso pulled-water equipment: dedicated 30A or 240V split per manufacturer cut sheet." },
        { check: "Receptacle within 6 ft of placement — no extension cords (NEC 400.8 / 590.4(D))." },
        { check: "Branch-circuit conductor sized per NEC 240.4 + 310.16; verify panel directory updated." },
        { check: "Surge suppression where industrial / motor loads share the panel; transient voltage surge suppressor at point-of-use." },
      ],
    },
    {
      heading: "2. GFCI + AFCI requirements — NEC 210.8 / 210.12",
      items: [
        { check: "GFCI required where placement is within 6 ft of any sink, wash bay, or eyewash station — NEC 210.8(B)(5)." },
        { check: "GFCI required at any kitchen / break-room placement per NEC 210.8(B)(2) (commercial)." },
        { check: "Outdoor or wet-location placement: GFCI + weather-resistant receptacle + in-use cover — NEC 210.8(B)(4) + 406.9." },
        { check: "AFCI may be required for placement in patient / sleeping areas (dwelling units, NEC 210.12) — rare for commercial vending but verify at hospitals / dorms." },
        { check: "GFCI receptacle test cadence: monthly per manufacturer + UL 943; document log at hospitality / school placements." },
      ],
    },
    {
      heading: "3. Connectivity — cellular vs Wi-Fi",
      paragraph:
        "Modern telemetry-enabled machines (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, AWM Smart Shelf, USA Technologies / Cantaloupe ePort) prefer cellular for payment + telemetry. Wi-Fi is acceptable for micro-markets and unattended retail when properly isolated.",
      items: [
        { check: "Cellular signal ≥ -100 dBm RSRP measured with cellular meter (not phone bars); LTE Cat-1 or Cat-M typical." },
        { check: "Carrier diversity: operator supports failover where placement is at fringe coverage (verizon + AT&T failover on same SIM where available)." },
        { check: "If Wi-Fi: dedicated VLAN isolated from facility production network; PSK rotated quarterly per PCI DSS v4.0.1 Req 8.3.6." },
        { check: "Wi-Fi placement signal ≥ -67 dBm at machine — confirm with site survey app (Ekahau, NetSpot, or vendor tool)." },
        { check: "PCI DSS v4.0.1 segmentation verified where payment terminal is on facility network." },
      ],
    },
    {
      heading: "4. Water + drainage (fresh-brew, espresso, frozen)",
      items: [
        { check: "Cold-water connection 3/8 in OD (typical) within 6 ft of machine; shut-off valve accessible." },
        { check: "Water pressure 20-80 psi (manufacturer spec; Bunn, Cornelius, Curtis, Newco, Schaerer, Franke)." },
        { check: "Water filter per manufacturer (typical 5-micron carbon block); change cadence on log." },
        { check: "Floor drain or drip-tray management for frozen / refrigerated condensate." },
        { check: "Backflow prevention per IPC / state plumbing code where building requires." },
        { check: "Soft-water treatment recommended where TDS > 170 ppm or hardness > 7 gpg (manufacturer-protected boiler life)." },
      ],
    },
    {
      heading: "5. Doorway, clearance, floor",
      items: [
        { check: "Doorway clearance ≥ 36 in wide; permanent threshold ≤ 1/2 in (ADA 303.3)." },
        { check: "Path of delivery: hand-truck or pallet-jack accessible from receiving to placement." },
        { check: "Floor load: typical snack ~700 lbs loaded, beverage ~900 lbs loaded; floor must rate ≥ 50 psf (any commercial floor)." },
        { check: "Wall clearance 3-6 in rear for refrigerated machines (compressor venting); confirm manufacturer spec." },
        { check: "ADA clear floor space 30 in × 48 in at machine face (Section 305.3)." },
      ],
    },
    {
      heading: "6. Ambient + environmental",
      items: [
        { check: "Ambient temperature 50-90°F (manufacturer spec; refrigerated machines derate above 90°F)." },
        { check: "Humidity ≤ 70% RH non-condensing; condensate drain or evaporation pan capable." },
        { check: "Lighting on machine face ≥ 200 lux for visibility + ADA legibility." },
        { check: "Outdoor or semi-outdoor placement: NEMA 3R or 4 enclosure rating required; outdoor-rated machine + heater package where freezing risk." },
        { check: "Indoor air quality / ventilation adequate for hot-beverage steam load." },
      ],
    },
    {
      heading: "7. Pre-install sign-off",
      items: [
        { check: "Facility manager signs survey; operator attests install scope acceptable." },
        { check: "Electrical work, if any, scheduled with licensed electrician + permit per AHJ." },
        { check: "Plumbing work, if any, scheduled with licensed plumber + permit per AHJ." },
        { check: "Install date set; receiving + facility access coordinated; security badging arranged." },
        { check: "30 / 60 / 90 day startup audit dates calendared." },
      ],
    },
  ],
  footer:
    "Informational only — not engineering or electrical advice. Verify NEC, IPC, ADA, and manufacturer install requirements with licensed trades and local AHJ. LetUsVending is equipped to coordinate operator site surveys, install scope, and 30/60/90 day startup audits.",
});

console.log("wrote "+"do-vending-machines-need-wifi-or-power");
