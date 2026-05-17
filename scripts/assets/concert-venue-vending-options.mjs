import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "concert-venue-vending-options",
  assetType: "matrix",
  title: "Concert Venue Vending Framework",
  subtitle: "Format-by-venue-type matrix, equipment specification, and operator capability vetting checklist",
  intro:
    "Concert venues run vending as a complement to F&B concessions, not a substitute. The right format depends on venue capacity, dwell pattern (theater vs amphitheater vs arena), and whether the venue is owned-and-operated or third-party booked (Live Nation, AEG, ASM Global). This framework provides the format matrix, equipment spec, and the operator vetting checklist used at major-venue placements where insurance, security, and on-site presence are non-negotiable. Capability framing only.",
  sections: [
    {
      heading: "1. Format-by-venue-type matrix",
      paragraph:
        "Concert venue formats range from a single back-of-house cabinet for staff to a 12-cabinet concourse bank at a 15,000-seat arena. Match the format to the venue capacity and dwell pattern. Operator confirms final cabinet count against the venue's annual event calendar and per-event attendance projection.",
      headers: [
        "Venue type",
        "Capacity",
        "Recommended format",
        "Cabinet count",
        "Cold-chain",
        "Concession-integration model",
      ],
      rows: [
        [
          "Small theater / club",
          "200-1,000",
          "Single combo + cold beverage, back-of-house staff cabinet",
          "1-3",
          "Yes",
          "Complementary (off-hours, lobby only)",
        ],
        [
          "Mid-size theater",
          "1,000-3,500",
          "Multi-cabinet lobby bank, optional VIP suite cabinet",
          "3-6",
          "Yes",
          "Complementary; concourse closed during F&B service",
        ],
        [
          "Performing arts center",
          "1,500-2,800",
          "Lobby + mezzanine bank, premium SKU weighting, AI cooler at VIP",
          "4-7",
          "Yes",
          "Complementary; donor / member-tier branding",
        ],
        [
          "Amphitheater / outdoor",
          "5,000-25,000",
          "Plaza + concourse bank, weather-rated cabinets, bottled water hero",
          "6-15",
          "Yes — refrigerated + frozen",
          "Complementary; allowed during all-ages early entry",
        ],
        [
          "Arena (Live Nation / AEG / ASM)",
          "10,000-20,000",
          "Concourse bank, suite-level premium cabinets, staff back-of-house",
          "8-20",
          "Yes",
          "Negotiated MSA; SKU non-compete with F&B contractor",
        ],
        [
          "Festival grounds",
          "Variable (10,000-80,000)",
          "Trailer-mounted or modular bank, generator-fed, cellular telemetry",
          "10-40 per zone",
          "Yes — limited frozen",
          "Negotiated per-event; revenue share to promoter",
        ],
      ],
    },
    {
      heading: "2. Equipment specification",
      paragraph:
        "Concert venues have hard-failure modes — a payment outage during intermission is lost revenue with no recovery, and a cold-chain excursion during a 6-hour outdoor show is product loss. Equipment must be specified for the load, not the average.",
      items: [
        {
          label: "Cabinet build",
          value:
            "ENERGY STAR Tier 2 refrigerated cabinets, hardened steel front for high-traffic environments. Outdoor / amphitheater placements: NEMA 3R or IP54-rated cabinet, auto-shutdown above 100°F ambient. NSF-listed for foodservice.",
        },
        {
          label: "Payment stack",
          value:
            "Apple Pay, Google Pay, contactless EMV, mag-stripe fallback, optional QR-to-wallet. PCI-DSS 4.0 (AOC + SAQ-B-IP on file). Operator must attest to payment processor redundancy (primary + failover gateway) for surge nights.",
        },
        {
          label: "Telemetry + surge handling",
          value:
            "Cellular modem with 5-minute heartbeat during event hours. Stockout alert < 15 minutes. Capable operators run on-site surge crews during peak transitions (doors-open, intermission, set-changeover) at arena / amphitheater placements.",
        },
        {
          label: "Power + connectivity",
          value:
            "Dedicated 208V/20A or 115V/15A circuits per cabinet, GFCI, surge protection. Cellular signal > -95 dBm or hardwired Ethernet drop. Generator-fed festival placements require operator-supplied UPS + telemetry backup.",
        },
        {
          label: "ADA Section 308",
          value:
            "Operable parts 15-48 in above finished floor, 30 x 48 in clear floor space in concourse high-traffic flow. ≤ 5 lbf operating force. Tactile + high-contrast pricing display. Written attestation at install and annually.",
        },
        {
          label: "Service SLA",
          value:
            "Event-night Tier 1 response < 2 hours (on-site crew). Standard Tier 1 < 24 hours. Uptime SLA 98% measured by telemetry; 99.5% during scheduled event windows.",
        },
      ],
    },
    {
      heading: "3. Operator capability vetting checklist",
      paragraph:
        "Concert venue placements require operator capability that goes beyond standard vending — security clearance, insurance riders, surge staffing, F&B non-compete navigation. Score each candidate operator and require written attestation before contract execution.",
      items: [
        { check: "Reference accounts: 3+ active concert / theater / arena placements ≥ 24 months in service. Reference calls with venue ops manager required." },
        { check: "Insurance: $5M general liability, $3M umbrella, $2M product liability, $1M auto for restock vehicles. Additional-insured endorsement to venue + ownership group + booking promoter (Live Nation, AEG, etc.)." },
        { check: "Security clearance: background-checked restock technicians, badge program at venue, after-hours / load-in protocols documented. Compliance with venue's NDA and IP rules (no photos of artist load-in)." },
        { check: "F&B non-compete: written SKU non-compete list against venue F&B contractor (typically Levy, Aramark, Sodexo, Centerplate). Operator attests planogram avoids restricted categories." },
        { check: "Surge staffing: operator commits surge crew presence during event hours for arena / amphitheater placements. Crew count scales with attendance projection." },
        { check: "Telemetry-backed SLA: operator commits 98% baseline / 99.5% event-window uptime, measured by cellular telemetry export. Audit-rights clause in contract." },
        { check: "ADA + accessibility: written ADA Section 308 attestation at install and annually; VPAT for digital interface; site-walk verification." },
        { check: "Payment redundancy: primary + failover payment gateway; written attestation. PCI-DSS 4.0 AOC and SAQ-B-IP on file (annually refreshed)." },
        { check: "Cold-chain SLA: ≤ 4 hour on-site response for cold-chain excursion; full product-loss credit to venue for sustained > 2 hour excursion per FDA Food Code 3-501.16." },
        { check: "Revenue reporting: monthly settlement with telemetry-export evidence; quarterly business review with venue ops + F&B leadership." },
      ],
    },
  ],
  footer:
    "This framework is informational and not contract language. Concert venues with booking promoter agreements (Live Nation, AEG, ASM Global) typically require the operator to be approved on the promoter's vendor list — confirm before issuing RFP. Capability claims should be verified through reference calls and written attestation before contract execution.",
});

console.log("wrote " + "concert-venue-vending-options");
