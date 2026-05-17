import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "best-selling-entertainment-venue-vending-products",
  assetType: "matrix",
  title: "Entertainment Venue Vending Planogram Framework",
  subtitle: "Zone-specific SKU catalog, event-overlay matrix, seasonal shift protocol, and category review cadence",
  intro:
    "Entertainment venue planograms behave differently than office or healthcare. Dwell time is short, basket size is impulse-driven, and SKU velocity swings 3-5x between an idle weekday and an event night. This framework defines zone-by-zone SKU weighting, an event-overlay matrix capable operators run on top of the baseline, the seasonal shift protocol (per NAMA 2024 Industry Report Q3-Q4 reset cadence), and the category-review cadence under which the planogram refreshes. Capability framing only — operator confirms final SKU list against your venue's quarterly velocity report.",
  sections: [
    {
      heading: "1. Zone-by-zone SKU matrix (baseline, 40-SKU snack + 30-SKU beverage frame)",
      paragraph:
        "Each venue zone has a distinct dwell pattern. The matrix below weights category share by zone — total per zone sums to 100%. Pricing is a starting range; operator confirms by market and tax-inclusive jurisdiction.",
      headers: [
        "Venue zone",
        "Salty snack share",
        "Sweet / candy share",
        "Better-for-you share",
        "Cold beverage share",
        "Energy / functional share",
        "Notes",
      ],
      rows: [
        [
          "Lobby / box office",
          "20%",
          "35%",
          "10%",
          "25%",
          "10%",
          "Impulse-heavy, $2-$5 price band, large facings for hero candy SKUs",
        ],
        [
          "Concourse (between acts)",
          "30%",
          "20%",
          "10%",
          "30%",
          "10%",
          "Combo-ready (chip + drink), 10-12 oz beverage anchored",
        ],
        [
          "VIP / suite hallway",
          "15%",
          "20%",
          "25%",
          "20%",
          "20%",
          "Premium SKUs, $4-$8 band, single-serve charcuterie, sparkling water",
        ],
        [
          "Back-of-house / staff",
          "25%",
          "15%",
          "20%",
          "20%",
          "20%",
          "Shift-aware (see playbook); functional caffeine + meal replacements",
        ],
        [
          "Outdoor plaza / patio",
          "20%",
          "15%",
          "10%",
          "40%",
          "15%",
          "Bottled water hero SKU, electrolyte tier; weather-resistant cabinet",
        ],
        [
          "Family / kids area",
          "15%",
          "30%",
          "30%",
          "20%",
          "5%",
          "FALCPA allergen labels mandatory; energy SKUs restricted under 16",
        ],
      ],
    },
    {
      heading: "2. Event-overlay matrix",
      paragraph:
        "On event nights the baseline planogram does not flex — the overlay does. Capable operators stage an overlay kit (10-15 SKUs) keyed to the audience profile, swapped in 24-48 hours pre-event and reverted in the next visit. This protects baseline velocity for daily traffic while capturing event peaks.",
      headers: ["Event type", "Audience profile", "Overlay swap-ins", "Pull-from baseline", "Pre-event window"],
      rows: [
        [
          "Family show / matinee",
          "Adults + children, 1-3 hr dwell",
          "Kid-friendly fruit snacks, juice boxes, allergen-free bars, mini-cookies",
          "Energy drinks, jerky, spicy chips",
          "T-48 hours",
        ],
        [
          "Concert (rock / pop)",
          "Adult, 4-6 hr dwell + tailgate",
          "Energy drinks, electrolyte, premium chips, gum, mints",
          "Juice boxes, fruit snacks, low-caffeine teas",
          "T-24 hours",
        ],
        [
          "Sporting event",
          "Adult + family, peak halftime",
          "Sunflower seeds, jerky, sports drinks, peanuts, popcorn",
          "Premium chocolate, sit-down snacks",
          "T-24 hours",
        ],
        [
          "Corporate / private",
          "Adult professional",
          "Sparkling water, single-serve premium, healthy bars",
          "Spicy snacks, sugary candy, energy drinks",
          "T-48 hours",
        ],
        [
          "Late-night / club",
          "21+, 4 hr+ dwell",
          "Caffeinated SKUs, electrolyte, mints, salty snacks",
          "Family-pack candy, juice boxes",
          "T-24 hours",
        ],
      ],
    },
    {
      heading: "3. Seasonal shift + category review cadence",
      paragraph:
        "Entertainment venues reset planograms 4x per year, aligned with the NAMA 2024 Industry Report Q3-Q4 reset cadence and confectionery seasonal calendars. Telemetry-driven velocity is the source of truth — operator should pull per-SKU sell-through and refresh bottom-quartile SKUs at each review.",
      items: [
        {
          label: "Q1 reset (Jan-Mar)",
          value:
            "Drop holiday SKUs, introduce wellness / better-for-you weighting (post-New-Year demand spike +30-40% per IRI category data). Reduce indulgent share 5-10%.",
        },
        {
          label: "Q2 reset (Apr-Jun)",
          value:
            "Outdoor + patio cabinets activated. Bottled water moves to hero. Electrolyte tier expands. Heat-sensitive SKUs (chocolate) pulled from non-conditioned cabinets per FDA Food Code 3-501.16.",
        },
        {
          label: "Q3 reset (Jul-Sep)",
          value:
            "Peak event season. Largest overlay kit deployment. Telemetry restock cadence shifts from 1x/week to 2-3x/week per cabinet. Energy / functional share +5-8%.",
        },
        {
          label: "Q4 reset (Oct-Dec)",
          value:
            "Holiday / indulgent overlay (premium chocolate, seasonal limited editions). Family-show overlay days increase. Reduce outdoor cabinet inventory ahead of seasonal close.",
        },
        {
          label: "Category review (per cabinet, monthly during peak season)",
          value:
            "Drop the bottom 5 SKUs by velocity (defined as < 0.3 units/facing/week sustained over 2 reviews) and substitute. Operator provides exception report for hero SKUs trending down — root cause before SKU pull.",
        },
        {
          label: "Quarterly business review (per venue, every 90 days)",
          value:
            "Operator delivers velocity report, refund rate (target < 2%), uptime, stockout count + duration, and recommended next-quarter planogram + overlay calendar.",
        },
      ],
    },
  ],
  footer:
    "This framework is a working planogram reference. Operator should attest to telemetry-backed velocity reporting (Cantaloupe, Nayax, 365 Retail, or comparable) before contract execution. FALCPA allergen labeling is required on every SKU; an allergen summary card on the cabinet face is best practice. Capability claims should be verified against your operator's actual fleet data.",
});

console.log("wrote " + "best-selling-entertainment-venue-vending-products");
