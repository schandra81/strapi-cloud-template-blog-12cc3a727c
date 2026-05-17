import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "placement-of-vending-in-retail-centers",
  assetType: "matrix",
  title: "Retail-Center Vending Placement Framework",
  subtitle: "Zone matrix, equipment match, foot-traffic study protocol, and master service agreement scope",
  intro:
    "Retail-center vending placement — enclosed mall, lifestyle center, power center, strip center, mixed-use, transit-oriented — depends on getting four things right at the same time: the right zone, the right equipment for that zone's environment, a defensible foot-traffic study, and a master service agreement (MSA) that survives tenant turnover. This framework codifies all four. Capability framing only — operator confirms final placement against your center's leasing plan and traffic counts.",
  sections: [
    {
      heading: "1. Zone-by-zone placement matrix",
      paragraph:
        "Retail-center foot traffic is non-uniform. The same center can have 18,000 passes/day at the food-court entry and < 800 passes/day at a back-of-house service corridor. The matrix below maps zone type to recommended cabinet format, dwell pattern, and category weighting. Operator confirms zone selection against site walk and leasing plan.",
      headers: [
        "Zone",
        "Typical pass count (passes/day)",
        "Recommended format",
        "Dwell pattern",
        "Category weighting",
      ],
      rows: [
        [
          "Food-court adjacent",
          "8,000-25,000",
          "Cold beverage + grab-and-go meal cabinet, AI cooler at premium center",
          "Long (15-45 min)",
          "Beverage 40%, meal 25%, snack 20%, BFY 15%",
        ],
        [
          "Anchor-store entry (Macy's / Target / TJX)",
          "4,000-15,000",
          "Beverage + snack combo, hot beverage at Q4",
          "Short (2-5 min)",
          "Beverage 35%, snack 30%, candy 20%, BFY 15%",
        ],
        [
          "Center-court / common area",
          "6,000-20,000",
          "Multi-cabinet bank, premium SKU weighting",
          "Medium (5-15 min)",
          "Beverage 35%, snack 25%, candy 20%, BFY 15%, premium 5%",
        ],
        [
          "Mall corridor mid-block",
          "1,500-5,000",
          "Single combo, telemetry-driven cadence",
          "Pass-through (< 1 min)",
          "Beverage 40%, snack 30%, candy 20%, BFY 10%",
        ],
        [
          "Cinema / entertainment anchor",
          "2,500-10,000 (showtime-driven)",
          "Beverage + concession-complementary SKU mix",
          "Pre-show (10-30 min)",
          "Beverage 45%, candy 25%, snack 20%, BFY 10%",
        ],
        [
          "Customer service / management office",
          "200-800",
          "Single combo, staff-aware planogram",
          "Long (staff dwell)",
          "Beverage 40%, meal 20%, snack 25%, BFY 15%",
        ],
        [
          "Restroom corridor / family lounge",
          "1,000-4,000",
          "Beverage cabinet, hot beverage option",
          "Short (post-restroom)",
          "Beverage 60%, snack 25%, BFY 15%",
        ],
        [
          "Tenant break-room (B2B)",
          "Per tenant headcount",
          "Single combo or micro-market",
          "Shift-driven",
          "Beverage 35%, snack 30%, meal 20%, BFY 15%",
        ],
        [
          "Outdoor plaza / patio (lifestyle / mixed-use)",
          "1,500-8,000 (weather-sensitive)",
          "Weather-rated cabinet, bottled water hero",
          "Variable",
          "Beverage 50%, snack 25%, BFY 15%, premium 10%",
        ],
        [
          "Transit-adjacent / parking-deck entry",
          "3,000-12,000 (commute peaks)",
          "Cold beverage + grab-and-go, AM hot beverage",
          "Pass-through (peaks 7-9 AM, 4-7 PM)",
          "Beverage 45%, meal 25%, snack 20%, hot bev 10%",
        ],
      ],
    },
    {
      heading: "2. Equipment match to zone environment",
      paragraph:
        "Retail zones have different environmental envelopes — climate-controlled common area, semi-conditioned anchor vestibule, exposed outdoor plaza. Equipment must be specified for the zone, not the center. The match below sets the minimum spec; operator confirms with manufacturer cut sheet.",
      items: [
        {
          label: "Indoor common area + corridor",
          value:
            "Standard ENERGY STAR Tier 2 refrigerated cabinet (40-45°F hold per FDA Food Code 3-501.16). Ambient 65-78°F, < 60% RH typical. Cellular telemetry (Cat-M1) with 5-15 min heartbeat. ADA Section 308 compliant. Power: 115V/15A dedicated.",
        },
        {
          label: "Vestibule / anchor entry (semi-conditioned)",
          value:
            "Hardened ENERGY STAR cabinet with humidity-tolerant payment reader (corrosion-resistant rated). Ambient 50-90°F, up to 70% RH seasonal. Auto-shutdown above 95°F ambient recommended. Cellular signal > -95 dBm.",
        },
        {
          label: "Outdoor plaza / patio",
          value:
            "NEMA 3R or IP54-rated cabinet. Auto-shutdown above 100°F ambient. UV-resistant cabinet front. Bottled-water hero SKU. Pulled SKUs in Q1 cold regions (operator confirms in seasonal protocol).",
        },
        {
          label: "Cinema / entertainment-adjacent",
          value:
            "Standard cabinet with F&B-non-compete SKU planogram. Operator attests to compliance with cinema contractor's restricted SKU list (typically Coke / Pepsi product-line restrictions, popcorn / large-candy exclusions).",
        },
        {
          label: "Premium center (lifestyle, Class-A)",
          value:
            "AI cooler (AiFi, Trigo, Standard AI, Grabango platform) or curated micro-market. Branded cabinet face for center co-branding. Premium SKU weighting; $4-$12 price band.",
        },
        {
          label: "Power + connectivity baseline",
          value:
            "Dedicated 115V/15A or 208V/20A circuit, GFCI, surge protection. Cellular signal > -95 dBm or hardwired Ethernet drop. Operator confirms at site survey before LOI.",
        },
        {
          label: "Service SLA",
          value:
            "Tier 1 (offline / cold-chain / payment-failure) < 24 hr. Tier 2 (stockout / planogram) 24-48 hr. Tier 3 (cosmetic) 5-day. 98% telemetry-backed uptime SLA. Restock cadence keyed to zone pass count (1x/week to 3x/week).",
        },
      ],
    },
    {
      heading: "3. Foot-traffic study protocol",
      paragraph:
        "A defensible foot-traffic study is what separates a placement that hits projection from one that under-performs. The protocol below is what capable operators run before signing a placement letter. ICSC (International Council of Shopping Centers) traffic-counting guidance is the industry reference.",
      items: [
        { check: "Counter type: door-counter (anchor entries) + zone-counter (Sensormatic, ShopperTrak, Placer.ai, or comparable cellular-derived dataset) for in-center zones." },
        { check: "Count window: minimum 2 calendar weeks including 2 weekends; include 1 high-traffic event day (sale, holiday tax-free weekend) and 1 typical weekday." },
        { check: "Time-of-day breakdown: hourly counts to identify peak (typically 12-2 PM and 5-7 PM for retail centers; 7-9 PM for entertainment-anchored)." },
        { check: "Seasonality adjustment: count compared to ICSC monthly seasonality index for the center type (enclosed mall vs lifestyle vs power center) to project annualized." },
        { check: "Conversion-rate assumption: 0.3-0.8% of zone pass count converts to a vending transaction (operator-confirmed against comparable placements)." },
        { check: "Basket-size assumption: $2.50-$4.50 average for traditional; $5.50-$8.50 average for AI cooler / micro-market (operator confirms by SKU mix)." },
        { check: "Revenue projection model: pass count × conversion × basket × open-day count = projected monthly gross. Sensitivity table at 0.3% / 0.5% / 0.8% conversion." },
        { check: "Comparable-placement reference: operator provides 2-3 comparable placements (same center type, same zone, ≥ 12 months in service) with actual monthly gross for validation." },
        { check: "Site walk: physical walk with center leasing + facilities, ADA Section 308 verification, electrical + cellular signal test, fire-egress confirmation." },
        { check: "Go / no-go threshold: minimum projected monthly gross of $1,200 for traditional cabinet, $4,500 for AI cooler (operator confirms break-even with center)." },
      ],
    },
    {
      heading: "4. Master service agreement (MSA) scope checklist",
      paragraph:
        "The MSA is what survives tenant turnover, GM turnover, and operator account-manager turnover. A weak MSA is the single largest source of revenue leakage in retail-center vending. The checklist below sets the minimum scope.",
      items: [
        { check: "Term: typical 3-5 years initial, with 2-3 year renewal options. Auto-renewal clause with 90-day opt-out notice." },
        { check: "Placement schedule: appendix listing each cabinet by ID, zone, and category, updated annually. Adds / removes require written change order, not handshake." },
        { check: "Commission structure: tiered by gross revenue (e.g., 0% to break-even, 5-10% mid-tier, 12-18% premium-tier). Settlement monthly or quarterly with telemetry-export evidence." },
        { check: "Audit rights: center has audit rights on 30-day notice, telemetry export on request, annual reconciliation." },
        { check: "Service SLA: Tier 1 / 2 / 3 thresholds documented with cure period and remedy (credit, removal, replacement). 98% uptime baseline." },
        { check: "Insurance: $2M general liability, $1M umbrella, $1M product liability. Additional-insured endorsement to center owner + management company + property manager. Workers comp per state." },
        { check: "Indemnification: mutual indemnification with carve-outs for gross negligence; product liability indemnification to center for SKU-related incidents." },
        { check: "ADA compliance: operator attests to ADA Section 308 compliance at install and annually. VPAT for digital interfaces. Site-walk verification documented." },
        { check: "Payment + PCI: operator attests to PCI-DSS 4.0 compliance, AOC and SAQ-B-IP on file, refreshed annually. No PAN storage at cabinet." },
        { check: "Termination: for-cause termination with cure period; for-convenience termination with 60-90 day notice. Cabinet-removal SLA (typically 10-15 business days)." },
        { check: "Tenant non-compete: SKU-level non-compete with center anchor tenants (e.g., Coca-Cola anchor restricts Pepsi facings) documented." },
        { check: "Brand / signage: center has approval rights over cabinet branding, signage, and any co-branded SKUs. No exterior cabinet wraps without written approval." },
      ],
    },
  ],
  footer:
    "This framework is informational. ICSC traffic-counting guidance, FDA Food Code 3-501.16 cold-hold standard, and ADA Section 308 are the cited references. Operator capability claims should be verified through reference calls (3+ active retail-center placements ≥ 24 months in service) and written attestation. Capability framing only — placement timing depends on operator capacity in your service area.",
});

console.log("wrote " + "placement-of-vending-in-retail-centers");
