import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "what-are-the-dimensions-of-a-vending-machine",
  assetType: "pdf",
  title: "Vending Machine Pre-Install Site Survey Checklist",
  subtitle: "Dimensional, electrical, clearance, accessibility, and egress verification for facilities teams",
  intro:
    "Hand this checklist to the facilities team before the operator's installer arrives. Every item maps to a measurable specification — dimensions, electrical capacity, ADA Section 308 reach range, NFPA 13 sprinkler clearance, NFPA 70 (NEC) circuit requirements, OSHA 1910.37 egress widths, or FDA Food Code 3-501.16 cold-chain holding temperature. Capability-framed: operator should attest in writing to compliance with each item.",
  sections: [
    {
      heading: "1. Machine envelope + footprint",
      paragraph:
        "Standard full-size combo or beverage machines fall in 39-42 in W × 33-36 in D × 72-79 in H. Glass-front cooler machines run 39-43 in W × 33-37 in D × 72-79 in H. Confirm the specific model's published dimensions on the operator's submittal before install day.",
      items: [
        { check: "Width clearance: machine width + 4 in side ventilation × 2 sides verified at placement (typical 47-50 in clear width for a 39-42 in machine)." },
        { check: "Depth clearance: machine depth + 6 in rear ventilation verified (typical 39-43 in clear depth)." },
        { check: "Height clearance: ceiling clear of at least 80 in to allow opening top-access service panels on glass-front coolers." },
        { check: "Door swing arc: full door swing unobstructed (typical 36-42 in clear in front)." },
        { check: "Floor pad: level within ¼ inch over 4 ft span; no expansion joint within machine footprint." },
        { check: "Floor load: machine + loaded product (typical 800-1,400 lb) within posted floor capacity." },
        { check: "Delivery route: dolly path from receiving to placement verified; door widths ≥ 36 in or removable hinges; elevator capacity ≥ 1,500 lb if upstairs." },
      ],
    },
    {
      heading: "2. Electrical specification (NFPA 70 / NEC)",
      items: [
        { check: "Dedicated 120V/15A circuit (non-refrigerated) or 120V/20A (refrigerated / combo) within 6 ft of placement." },
        { check: "Circuit not shared with high-draw equipment (microwave, refrigerator, copier)." },
        { check: "GFCI per NEC Article 422 where within 6 ft of a sink or wash zone." },
        { check: "Receptacle within 6 ft to avoid daisy-chained extension cords (not allowed for permanent placements)." },
        { check: "Cord drape: receptacle position allows cord to drop straight without crossing aisle." },
        { check: "Surge protection: facility electrical service has whole-building surge protection or a hospital-grade surge strip dedicated to the machine." },
      ],
    },
    {
      heading: "3. ADA Section 308 + 309 accessibility",
      items: [
        { check: "Highest operable part ≤ 48 in above finished floor (308.2.1) — verify selection keypad, payment reader, dispense flap." },
        { check: "Lowest operable part ≥ 15 in AFF (308.2.1) — verify card reader and dispense bin opening." },
        { check: "Operating force ≤ 5 lbf (309.4) — verify with calibrated push-pull gauge or operator attestation." },
        { check: "No tight grasping, pinching, or twisting required (309.4) — verify dispense flap and refund button design." },
        { check: "Clear floor space 30 in × 48 in for parallel or forward approach (305.3)." },
        { check: "Operable parts distinguishable by touch where the interface is visual-only (tactile / contrast)." },
      ],
    },
    {
      heading: "4. NFPA 13 + fire / egress",
      items: [
        { check: "Sprinkler head clearance per NFPA 13: typical 18 in below deflector kept clear; machine not blocking sprinkler coverage." },
        { check: "Egress width per OSHA 1910.37: corridor clear ≥ 28 in for ≤ 50 occupants; ≥ 44 in for > 50 occupants — machine does not narrow below threshold." },
        { check: "Machine not placed in a means-of-egress path or in front of any required exit." },
        { check: "Smoke / fire detector coverage not blocked; ceiling sensors clear within 36 in radius." },
        { check: "Manual pull station access maintained — typical 60 in AFF mounting per local code, unobstructed approach." },
      ],
    },
    {
      heading: "5. Telemetry + payment readiness",
      items: [
        { check: "Cellular signal verified at placement ≥ -100 dBm (operator brings test device); OR dedicated Ethernet drop available." },
        { check: "Cellular carrier confirmed (operator's modem matches available carrier — Verizon, AT&T, T-Mobile)." },
        { check: "Payment hardware: contactless EMV + Apple Pay/Google Pay supported; PCI-DSS 4.0 AOC and SAQ-B-IP on file." },
        { check: "Telemetry portal access granted to host facility coordinator (read-only)." },
      ],
    },
    {
      heading: "6. Cold-chain + refrigeration (if refrigerated machine)",
      items: [
        { check: "Operating temperature holds ≤ 40°F per FDA Food Code 3-501.16; internal-temp telemetry alert configured." },
        { check: "Ambient operating range verified at placement (typical machine spec 50-90°F)." },
        { check: "Refrigerant disclosed (R-290 propane, R-134a, R-448A); low-GWP refrigerant preferred where commercially available." },
        { check: "Defrost / condensate handling — drain or evaporative tray confirmed; no condensate puddle on placement floor." },
      ],
    },
    {
      heading: "7. Signage + compliance documentation",
      items: [
        { check: "FALCPA allergen labeling visible on each SKU." },
        { check: "FDA menu labeling (calorie display) per 21 CFR 101.11 where operator has ≥ 20 placements." },
        { check: "Refund / support phone + QR code visible on machine face." },
        { check: "Operator emergency contact + service ticket process posted near machine." },
        { check: "Operator's COI on file with host facility coordinator ($2M GL, $1M umbrella, additional-insured endorsement)." },
        { check: "State weights-and-measures registration where required." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. Facilities should confirm placement complies with local building code, fire marshal requirements, and any tenant or lease constraints. Operator capability claims should be verified through written attestation. LetUsVending can connect facility teams with operators equipped to deliver compliant installs.",
});

console.log("wrote "+"what-are-the-dimensions-of-a-vending-machine");
