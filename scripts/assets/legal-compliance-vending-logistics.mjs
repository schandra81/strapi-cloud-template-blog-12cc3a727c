import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "legal-compliance-vending-logistics",
  assetType: "checklist",
  title: "Logistics Hub Vending Compliance Framework",
  subtitle: "Seven-layer compliance stack, contract clauses, audit walk checklist, and multi-tenant attribution",
  intro:
    "Use this checklist when scoping a vending program at a logistics hub — distribution center, warehouse campus, port terminal, intermodal yard, or third-party logistics (3PL) facility. Logistics hubs add OSHA general industry obligations, FMCSA driver hours-of-service overlap, and multi-tenant attribution complexity that don't appear at typical office or retail sites. Mark each item Verified, Acceptable with mitigation, or Not addressed before contract execution.",
  sections: [
    {
      heading: "1. Layer 1 — OSHA general industry (29 CFR 1910)",
      items: [
        { check: "OSHA 29 CFR 1910.36 / 1910.37 egress: vending machine and its 30 × 48 in clear floor space do not encroach on the 28-in minimum egress corridor width or block exit access." },
        { check: "OSHA 29 CFR 1910.176 powered industrial truck (forklift) traffic separation: bollards or guard rails protect the cabinet from forklift impact in forklift-accessible areas." },
        { check: "OSHA 29 CFR 1910.305 electrical: receptacle installation, conductor sizing, and circuit protection meet NEC and OSHA requirements." },
        { check: "Walking-working surfaces per OSHA 29 CFR 1910 Subpart D: no trip hazards (cords, mats, transitions) in the cabinet approach path." },
      ],
    },
    {
      heading: "2. Layer 2 — FDA food safety (21 CFR 117)",
      items: [
        { check: "FDA 21 CFR 117 Preventive Controls for Human Food: operator's supply chain attests to PCQI-qualified facility sourcing." },
        { check: "Cold-chain attestation: refrigerated SKUs held at ≤ 41°F per FDA Food Code 3-501.16; temperature logs available on request." },
        { check: "FALCPA allergen disclosure on every SKU; allergen summary signage on the machine face." },
        { check: "Recall response: operator can pull a SKU across the fleet within 24 hours with written confirmation." },
        { check: "First-in / first-out rotation attested at each restock visit; expiration date display on the machine face or via app." },
      ],
    },
    {
      heading: "3. Layer 3 — FMCSA hours-of-service overlap (49 CFR 395)",
      paragraph:
        "Logistics hubs host commercial drivers subject to FMCSA hours-of-service (HOS) regulations. Vending placements should support the 30-minute break required after 8 cumulative hours of driving (49 CFR 395.3(a)(3)(ii)).",
      items: [
        { check: "Placement supports the FMCSA 30-minute break: refreshment, snack, and beverage SKUs available 24/7 with no break in service." },
        { check: "Driver-lounge proximity: vending placed within or adjacent to the driver lounge where applicable; clear sightline from rest area seating." },
        { check: "Hot-food or microwave-ready SKUs offered where driver dwell times exceed 30 minutes (sleeper-berth or 10-hour off-duty period)." },
        { check: "Cashless payment supported so out-of-state drivers without local cash can transact (60-80% cashless mix is the modern baseline)." },
      ],
    },
    {
      heading: "4. Layer 4 — TWIC / port + intermodal credentialing",
      items: [
        { check: "TWIC (Transportation Worker Identification Credential) required for operator route drivers at MTSA-regulated port and intermodal facilities (33 CFR Part 105)." },
        { check: "TWIC enrollment lead time 4-6 weeks; renewal cycle 5 years." },
        { check: "Site-specific access protocol coordinated with the port or terminal's facility security officer (FSO)." },
        { check: "Restock vehicle inspection, escort requirement, and time-window restrictions documented." },
      ],
    },
    {
      heading: "5. Layer 5 — ADA Title III + Section 308",
      items: [
        { check: "ADA Section 308 reach range (≤ 48 in / ≥ 15 in AFF), Section 305 clear floor space (30 × 48 in), Section 309.4 operating force (≤ 5 lbf)." },
        { check: "Section 703 pricing display: character height ≥ 5/8 in, contrast ratio ≥ 70%." },
        { check: "Section 403 travel path width ≥ 36 in to and from the machine." },
        { check: "VPAT available for digital interfaces (card reader, kiosk, app)." },
      ],
    },
    {
      heading: "6. Layer 6 — multi-tenant attribution",
      paragraph:
        "Logistics hubs frequently host multiple tenants — 3PL operators, freight forwarders, warehouse staff, driver visitors. Commission attribution and access control should reflect that mix.",
      items: [
        { check: "Cashless transaction tagging: machine identifies tenant area at point of sale so commission can be apportioned per tenant lease." },
        { check: "Tenant-specific access cards or app-linked employee IDs supported for closed-loop vending where the facility uses that model." },
        { check: "Quarterly per-tenant velocity report from operator to facility management for lease accounting." },
        { check: "Refund flow accessible via app, SMS, or phone — not solely through an on-machine touchpad in a high-traffic forklift area." },
      ],
    },
    {
      heading: "7. Layer 7 — insurance and operator capability",
      items: [
        { check: "Operator carries CGL $1M/$2M, products/completed ops $2M, umbrella ≥ $10M (typical logistics hub floor), commercial auto $1M CSL, workers' comp + employer's liability." },
        { check: "Facility owner and applicable tenants named additional insured on a primary, non-contributory basis with waiver of subrogation." },
        { check: "Telemetry heartbeat ≤ 15 min; uptime target ≥ 98% on a per-machine, per-month basis." },
        { check: "Operator attests to 24/7 service SLA: Tier 1 ≤ 4 hour, Tier 2 ≤ 24-48 hour, Tier 3 ≤ 14 day." },
        { check: "Operator references at comparable logistics-hub placements provided on request (capability framing — not a guarantee of named work)." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal, regulatory, or food-safety advice. OSHA general industry, FDA Food Code, FMCSA HOS, MTSA / TWIC, and ADA Title III each apply with their own enforcement bodies. Coordinate the final review with the facility safety officer, counsel, and the operator's compliance team. LetUsVending can connect you with operators equipped to operate at logistics hubs — request the logistics capability matrix to compare candidates.",
});

console.log("wrote " + "legal-compliance-vending-logistics");
