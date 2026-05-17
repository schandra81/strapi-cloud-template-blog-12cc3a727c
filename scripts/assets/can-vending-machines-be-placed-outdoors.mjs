import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-vending-machines-be-placed-outdoors",
  assetType: "checklist",
  title: "Outdoor Vending Placement Site Survey Checklist",
  subtitle: "Equipment rating, power, overhead protection, climate, anchoring, and cellular connectivity",
  intro:
    "Use this checklist before quoting an outdoor vending placement. Outdoor placements multiply the failure modes of an indoor install — equipment must be rated for outdoor use, electrical must meet NEC outdoor branch-circuit requirements, and the site must support reliable telemetry. Mark each item as Verified, Accepted with mitigation, or Reject before scheduling install.",
  sections: [
    {
      heading: "1. Equipment rating and enclosure",
      items: [
        { check: "Machine listed for outdoor use by manufacturer (outdoor-rated SKU or outdoor enclosure model)." },
        { check: "Cabinet UL 751 (commercial refrigerator) or comparable listing for any cold/refrigerated unit; NEMA 3R or NEMA 4 enclosure rating for the electrical compartment." },
        { check: "Operating temperature window stated by manufacturer; typical outdoor units rated -10°F to 110°F ambient." },
        { check: "Vandal-resistant glass / polycarbonate front per manufacturer outdoor spec (typical thickness ≥ ½ inch)." },
        { check: "Cash box and dispense bin locking mechanisms designed for outdoor use (corrosion-resistant tumblers or electronic locks)." },
      ],
    },
    {
      heading: "2. Power and electrical — NEC outdoor branch-circuit requirements",
      items: [
        { check: "Dedicated 20A 120V circuit (or 240V where required), wired to a GFCI receptacle per NEC 210.8(B) for outdoor commercial locations." },
        { check: "Receptacle in a weatherproof in-use cover (NEMA WD-6 / UL 514D 'extra duty' rating) regardless of whether a plug is currently engaged." },
        { check: "Conductor and conduit rated for outdoor / wet locations (UF cable, RMC, or LFMC per NEC Article 300)." },
        { check: "Surge protective device (SPD) rated for the branch circuit; outdoor lightning exposure significantly raises risk." },
        { check: "Voltage drop ≤ 3% at maximum running load — verify with a clamp meter under compressor start." },
      ],
    },
    {
      heading: "3. Overhead protection and ground conditions",
      items: [
        { check: "Permanent overhead cover (roof / awning / canopy) extends at least 24 inches beyond the machine footprint on all sides where rain or sun exposure is direct." },
        { check: "Slope or drainage adequate so water does not pool at the machine base; machine sits on a curb, pad, or platform above the surrounding finished grade." },
        { check: "Distance from sprinkler heads, downspouts, and roof drainage outlets at least 36 inches." },
        { check: "Direct sun exposure on the cabinet face limited; south- or west-facing placements may exceed manufacturer ambient rating in summer." },
      ],
    },
    {
      heading: "4. Climate and seasonal operation",
      items: [
        { check: "Refrigerated SKU placement: ambient temperature in coldest month ≥ manufacturer minimum (typically 32-40°F)." },
        { check: "Snack SKU placement: chocolate and confection products require ambient ≤ 75°F for shelf integrity." },
        { check: "Humidity exposure: outdoor humidity > 90% with poor ventilation accelerates corrosion; specify a corrosion-resistant cabinet finish." },
        { check: "Wind exposure: anchoring schedule sized for the local design wind speed per ASCE 7 (typically 90-130 mph nominal, 3-second gust)." },
      ],
    },
    {
      heading: "5. Anchoring, security, and ADA",
      items: [
        { check: "Machine anchored to concrete pad or building structure per manufacturer outdoor anchoring spec (typical: 4 × ½ inch concrete anchor bolts to 4 inch slab)." },
        { check: "Bollards or curb stops protect the machine front from vehicle impact where parking, drive lanes, or pedestrian traffic is within 8 feet." },
        { check: "Lighting: at least 10 foot-candles at the machine face during operating hours per IESNA outdoor commercial recommendation." },
        { check: "ADA Title III + Section 308 reach range, clear floor space, and operating force met at the outdoor location (same standards apply outdoors)." },
        { check: "CCTV or operator-monitored security camera covers the machine face where the site is public-facing or operates overnight." },
      ],
    },
    {
      heading: "6. Cellular connectivity and telemetry",
      items: [
        { check: "Cellular signal strength at machine location ≥ -100 dBm RSRP (LTE) measured by operator at survey, with the carrier the telemetry modem uses." },
        { check: "Fallback connectivity option (alternate carrier SIM, Wi-Fi bridge to building network) defined if primary signal is marginal." },
        { check: "Telemetry heartbeat configured ≤ 15 minutes; offline alert SLA ≤ 30 minutes." },
        { check: "Cashless acceptance latency verified at site — outdoor installs occasionally fail tap-to-pay if the modem cannot maintain a session." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering advice. Outdoor placements should be reviewed by a licensed electrician and a code official for NEC, ASCE 7 wind, and local jurisdiction requirements. LetUsVending can connect you with operators equipped for outdoor placements — request the outdoor capability matrix to compare candidates.",
});

console.log("wrote " + "can-vending-machines-be-placed-outdoors");
