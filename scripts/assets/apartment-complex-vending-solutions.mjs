import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "apartment-complex-vending-solutions",
  assetType: "pack",
  title: "Apartment Vending Program Design Template",
  subtitle: "Property-type sizing, zone planning, operator RFP framework",
  intro:
    "Apartment vending sizing depends on property type, unit count, zone-by-zone resident behavior, and amenity-grade target. This template gives owners and property managers a defensible operator RFP grounded in NMHC and NAA benchmarks.",
  sections: [
    {
      heading: "1. Property-type sizing matrix",
      paragraph:
        "Unit count alone is not enough — sizing depends on resident demographic, building format, and amenity-stack target.",
      headers: ["Property type", "Unit-count range", "Typical machines", "Format mix"],
      rows: [
        ["Garden-style (3-story)", "100-300 units", "1-2 placements", "1 snack/beverage combo OR 1 micro-market"],
        ["Mid-rise (4-7 story)", "200-500 units", "2-4 placements", "Combo + beverage cooler + fitness-zone snack"],
        ["High-rise (8+ story)", "300-800 units", "3-6 placements", "Lobby micro-market + amenity-floor cooler + fitness + pool"],
        ["Lifestyle / luxury", "150-600 units", "3-5 placements", "Premium micro-market + smart cooler + specialty (ice cream / spa)"],
        ["Student / co-living", "200-1,000 beds", "3-8 placements", "Lounge snack + beverage cooler + 24/7 essentials"],
        ["Senior / 55+", "100-400 units", "2-3 placements", "Lobby beverage + lounge snack; accessibility-spec mandatory"],
      ],
    },
    {
      heading: "2. Zone planning framework",
      paragraph:
        "Resident behavior varies by amenity zone. Planogram + format choices follow zone, not building.",
      items: [
        { label: "Lobby / mail / package room", value: "Highest dwell — 1.5-3 min per visit. Best for beverage cooler, premium snack, micro-market. Convenience SKUs (umbrellas, batteries) viable." },
        { label: "Fitness center", value: "Pre + post-workout traffic. Sports drinks, water, protein bars, recovery snacks. Avoid sugary sodas in branded fitness spaces." },
        { label: "Pool deck", value: "Seasonal Q2-Q3 peak. Bottled water, sports drinks, kid snacks, sunblock, ice cream (if cabinet available). Hardened outdoor cabinet required." },
        { label: "Resident lounge / co-work", value: "All-day dwell. Coffee + tea + snack + beverage. Member-app pricing tier recommended." },
        { label: "Dog wash / pet area", value: "Niche but high-engagement. Treat dispenser, waste-bag dispenser, paw-wipe — small-format specialty machine." },
        { label: "Bike room / parking corridor", value: "Quick-grab essentials. Cold beverage + snack combo." },
      ],
    },
    {
      heading: "3. Format selection framework",
      headers: ["Format", "Property tier fit", "Capex (operator-funded)", "Resident UX"],
      rows: [
        ["Traditional combo (snack + beverage)", "Workforce / mid-tier", "$3,500-$6,500", "Buttons + cashless tap"],
        ["Glass-front beverage cooler", "All tiers", "$4,500-$7,500", "Door-open dispense"],
        ["Micro-market (open shelf + kiosk)", "Mid-tier / lifestyle", "$15K-$35K", "Self-checkout kiosk"],
        ["Smart cooler (RFID)", "Lifestyle / luxury", "$12K-$22K per cabinet", "Tap-and-go"],
        ["AI vision cooler (AWM)", "Luxury", "$18K-$30K per cabinet", "Open-take-go"],
        ["Specialty (ice cream / coffee / pet)", "All tiers, niche", "$5K-$25K", "Format-specific"],
      ],
    },
    {
      heading: "4. Operator RFP template",
      paragraph:
        "Issue to 3-5 operators. Score using the rubric in Section 5.",
      items: [
        { number: 1, title: "Background", description: "Operator company, years in multifamily, references with comparable unit-count + tier." },
        { number: 2, title: "Equipment proposal", description: "Cabinet make/model per zone, ENERGY STAR certification, finish + branding options, telemetry platform." },
        { number: 3, title: "Service spec", description: "Restock cadence, telemetry-driven dispatch, four-tier SLA, refund SLA, monthly scorecard format." },
        { number: 4, title: "Planogram", description: "Per-zone SKU mix with healthy-vending share, allergen labeling, member-app pricing tier, seasonal cadence." },
        { number: 5, title: "Commission framework", description: "Tiered commission per gross-revenue range; settlement cadence; audit rights." },
        { number: 6, title: "Closed-loop integration", description: "Member-app or building-app SDK support (badge / QR / app pay); credit-funding model." },
        { number: 7, title: "Insurance + compliance", description: "GL $2M, auto, product liability; ADA attestation; state retail food permit if fresh." },
        { number: 8, title: "Term + exit", description: "Term length, removal cost responsibility, equipment-return condition." },
      ],
    },
    {
      heading: "5. Operator scoring rubric",
      headers: ["Criterion", "Weight", "Max score"],
      rows: [
        ["Multifamily references — comparable tier", "1.5x", "4.5"],
        ["Telemetry coverage + reporting", "1.5x", "4.5"],
        ["ENERGY STAR + eco-spec compliance", "1.0x", "3"],
        ["Healthy-vending + allergen-labeling", "1.0x", "3"],
        ["Four-tier SLA + service-credit clause", "1.5x", "4.5"],
        ["Closed-loop / member-app integration", "1.0x", "3"],
        ["Commission tier + audit rights", "1.0x", "3"],
        ["Insurance + ADA attestation", "1.0x", "3"],
      ],
    },
    {
      heading: "6. Commission expectations by tier",
      paragraph:
        "Commissions follow revenue volume. A typical 250-unit garden community supports a $700-$1,400/month gross per placement; lifestyle high-rise can reach $2,500-$5,000/month per anchor placement.",
      headers: ["Monthly gross / placement", "Commission tier (snack / beverage)"],
      rows: [
        ["< $300", "Placement fee model — 0-2%"],
        ["$300-$700", "3-6%"],
        ["$700-$1,500", "6-12%"],
        ["$1,500-$3,000", "12-18%"],
        ["> $3,000", "18-25%"],
      ],
    },
    {
      heading: "7. Resident communication plan",
      items: [
        { check: "Resident-portal announcement at install — location, SKUs, payment methods, refund flow." },
        { check: "Resident-app deep link to operator app (member-pricing tier if applicable)." },
        { check: "Lobby signage with QR-to-refund + service ticket." },
        { check: "Onboarding email for new leases — amenity-stack section includes vending FAQs." },
        { check: "Quarterly resident-feedback survey — top SKU requests, satisfaction score." },
        { check: "Property-manager direct-line to operator dispatch for resident escalations." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface multifamily-experienced operators against the framework above. Where a property's unit count + zone mix supports placement, we match against operators with route density in the submarket — capability framing only.",
    },
  ],
  footer:
    "Sizing, commission, and capex ranges are reference values. Confirm against operator proposals and your property's specific resident demographics.",
});

console.log("wrote " + "apartment-complex-vending-solutions");
