import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-are-vending-machines-installed",
  assetType: "pdf",
  title: "28-Point Pre-Install Site Survey Checklist",
  subtitle: "Hand to facilities before the operator arrives — dimensional, electrical, accessibility, telemetry, and compliance verification",
  intro:
    "Hand this checklist to the facilities team before the operator's installer arrives on site. Every item references a measurable specification — NFPA 70 (NEC) for electrical, NFPA 13 for sprinkler clearance, OSHA 1910.37 for egress, ADA Section 308 + 309 for accessibility, FDA Food Code 3-501.16 for cold-chain, and PCI-DSS 4.0 for payment compliance. Capability-framed: operator should attest in writing to each item before install day.",
  sections: [
    {
      heading: "1. Delivery + access route (points 1-4)",
      items: [
        { check: "1. Delivery route confirmed: receiving dock or front entry to placement; doorways ≥ 36 in clear; tight-corner radius noted." },
        { check: "2. Elevator capacity ≥ 1,500 lb if upstairs; elevator car ≥ 80 in tall for an upright machine." },
        { check: "3. Floor protection plan: dolly skid, blankets, or floor runners for path through finished spaces." },
        { check: "4. Loading dock available + scheduled OR curbside drop with stair-climbing dolly arranged." },
      ],
    },
    {
      heading: "2. Placement envelope + clearances (points 5-9)",
      items: [
        { check: "5. Machine footprint + 4 in side / 6 in rear ventilation clearance fits at placement." },
        { check: "6. Floor level within ¼ inch over 4 ft span; no expansion joint within footprint." },
        { check: "7. Floor load: machine + loaded product (typical 800-1,400 lb) within posted capacity." },
        { check: "8. Door swing arc clear in front (typical 36-42 in)." },
        { check: "9. Service-side access: front-load servicing preferred; if rear-access required, ≥ 24 in clearance behind unit." },
      ],
    },
    {
      heading: "3. Electrical (points 10-13) — NFPA 70 / NEC",
      items: [
        { check: "10. Dedicated 120V/15A (non-refrigerated) or 120V/20A (refrigerated/combo) circuit within 6 ft of placement." },
        { check: "11. GFCI per NEC Article 422 where within 6 ft of sink or wash zone." },
        { check: "12. Circuit not shared with high-draw equipment; cord drops straight to receptacle (no daisy-chain)." },
        { check: "13. Surge protection at the machine OR whole-building surge protection per NEC 285." },
      ],
    },
    {
      heading: "4. ADA + accessibility (points 14-17) — Section 308 + 309",
      items: [
        { check: "14. Highest operable part ≤ 48 in AFF (selection keypad, payment reader, dispense flap)." },
        { check: "15. Lowest operable part ≥ 15 in AFF (card reader, dispense bin opening)." },
        { check: "16. Operating force ≤ 5 lbf (309.4); no tight grasping, pinching, or twisting required." },
        { check: "17. 30 in × 48 in clear floor space for parallel or forward approach (305.3)." },
      ],
    },
    {
      heading: "5. Fire + egress (points 18-20) — NFPA 13 + OSHA 1910.37",
      items: [
        { check: "18. NFPA 13 sprinkler clearance: typical 18 in below deflector kept clear." },
        { check: "19. Egress corridor width preserved (≥ 28 in for ≤ 50 occupants; ≥ 44 in for > 50)." },
        { check: "20. Smoke / fire detector coverage not blocked; manual pull station access maintained." },
      ],
    },
    {
      heading: "6. Telemetry + payment (points 21-23) — PCI-DSS 4.0",
      items: [
        { check: "21. Cellular signal verified at placement ≥ -100 dBm OR dedicated Ethernet drop available." },
        { check: "22. Contactless EMV + Apple Pay / Google Pay supported; operator's PCI-DSS 4.0 AOC + SAQ-B-IP on file." },
        { check: "23. Host facility coordinator granted read-only access to telemetry portal (Cantaloupe / Nayax / 365 / AWM)." },
      ],
    },
    {
      heading: "7. Cold-chain (points 24-25) — FDA Food Code 3-501.16",
      items: [
        { check: "24. Refrigerated unit holds ≤ 40°F; internal-temp telemetry alert configured (immediate alert with 4-hr resolution SLA)." },
        { check: "25. Ambient operating range at placement within machine spec (typical 50-90°F); placement is not in unconditioned space without high-ambient-rated unit." },
      ],
    },
    {
      heading: "8. Compliance + documentation (points 26-28)",
      items: [
        { check: "26. FALCPA allergen labeling on each SKU; allergen summary signage at machine face; FDA menu labeling per 21 CFR 101.11 where operator has ≥ 20 placements." },
        { check: "27. Operator COI on file ($2M GL, $1M umbrella, additional-insured endorsement, product liability ≥ $1M)." },
        { check: "28. State weights-and-measures registration where required; local health permit where applicable; ADA Section 308 written attestation on file." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. Facilities should confirm placement complies with local code, fire marshal, and tenant constraints. Operator capability claims should be verified through written attestation. LetUsVending can connect facility teams with operators equipped to deliver compliant installs.",
});

console.log("wrote "+"how-are-vending-machines-installed");
