import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "bowling-alley-vending-services",
  assetType: "matrix",
  title: "Bowling Alley Vending Framework",
  subtitle: "Venue-type format matrix, equipment specification, and league-bowler SKU catalog",
  intro:
    "Bowling alley vending is not one program. A 32-lane family entertainment center with arcade adjacency runs a different format than a 12-lane neighborhood house with a Wednesday-Friday league calendar. This framework provides the venue-type-to-format matrix, the equipment specification (cabinet, payment, telemetry) capable operators commit to in writing, and a league-bowler SKU catalog weighted by USBC sanctioned-league dwell pattern (typical 3-hour league night, 4-bowler team).",
  sections: [
    {
      heading: "1. Venue-type to vending format matrix",
      paragraph:
        "Match the program format to the venue type. A boutique center will under-perform with a 4-cabinet bank; a 32-lane family entertainment center will lose revenue to a single combo machine. Operator should confirm cabinet count against foot-traffic counts (typical bowling foot traffic 0.4-0.7 visits per lane per open hour during league night).",
      headers: [
        "Venue type",
        "Typical lanes",
        "Recommended format",
        "Cabinet count",
        "Cold-chain required",
        "Arcade / amusement adjacency",
      ],
      rows: [
        [
          "Neighborhood house (league-anchored)",
          "8-16",
          "Snack + beverage combo, 1 cold cabinet",
          "2-3",
          "Yes — beverage cabinet",
          "Optional",
        ],
        [
          "Mid-market center",
          "16-24",
          "Snack, beverage, hot beverage, optional fresh food",
          "3-5",
          "Yes",
          "Recommended (claw / prize)",
        ],
        [
          "Family entertainment center (FEC)",
          "24-40",
          "Multi-cabinet bank (snack, beverage, frozen, fresh, candy / arcade prize)",
          "5-8",
          "Yes — multiple",
          "Required — token / ticket integration",
        ],
        [
          "Boutique / upscale (Lucky Strike, Pinstripes-tier)",
          "10-20",
          "AI cooler or curated micro-market, branded cabinet face",
          "1-2 premium",
          "Yes",
          "Lounge-style; no traditional arcade",
        ],
        [
          "Pro shop / training center",
          "Variable",
          "Single combo + cold beverage",
          "1-2",
          "Optional",
          "No",
        ],
      ],
    },
    {
      heading: "2. Equipment specification (operator attestation required)",
      paragraph:
        "Bowling centers have unique environmental conditions — pin-deck vibration, lane-oil aerosol, intermittent kitchen humidity, 60-85°F seasonal ambient range. Equipment must be specified for the environment, not assumed.",
      items: [
        {
          label: "Cabinet build",
          value:
            "ENERGY STAR Tier 2 refrigerated cabinet (40-45°F hold per FDA Food Code 3-501.16), powder-coated steel, vibration-resistant compressor mount. NSF-listed for foodservice placement. Lane-oil exposure: cabinet placed > 25 ft from pin-deck or shielded.",
        },
        {
          label: "Payment stack",
          value:
            "Apple Pay, Google Pay, contactless EMV, mag-stripe fallback. PCI-DSS 4.0 (AOC + SAQ-B-IP on file). Optional integration with venue POS / house-card (Embed, Intercard, Sacoa) for FECs — operator should attest to POS-platform certification.",
        },
        {
          label: "Telemetry",
          value:
            "Cellular modem (Cat-M1 or LTE) with 5-15 minute heartbeat. Cantaloupe, Nayax, 365 Retail, or comparable. Per-SKU velocity export to operator dashboard. Stockout alerts < 30 minutes.",
        },
        {
          label: "ADA Section 308 compliance",
          value:
            "Operable parts 15-48 in above finished floor, 30 in x 48 in clear floor space, ≤ 5 lbf operating force. Tactile + high-contrast pricing display. Operator provides written ADA attestation at install and annually.",
        },
        {
          label: "Service SLA",
          value:
            "Tier 1 (offline, payment failure, cold-chain excursion): < 24 hr response. Tier 2 (stockout, planogram refresh): 24-48 hr. Tier 3 (cosmetic): 5-day. Uptime SLA 98% measured by telemetry.",
        },
        {
          label: "Insurance",
          value:
            "$2M general liability, $1M umbrella, additional-insured endorsement to venue. Product liability ≥ $1M. Workers compensation per state requirement for restock technicians.",
        },
      ],
    },
    {
      heading: "3. League-bowler SKU catalog (3-hour league night, 4-bowler team)",
      paragraph:
        "League bowlers exhibit a predictable purchase pattern across a 3-hour league session — opening hydration, mid-game salty snack, late-game caffeine + indulgent. The catalog below is weighted for that pattern. Drop-frequency thresholds are USBC-sanctioned-league averages from operator placements.",
      headers: ["Category", "Share of facings", "Top SKU examples", "Price band", "Velocity (units / facing / week, league season)"],
      rows: [
        [
          "Cold beverage (water, soda, sports drink)",
          "30%",
          "Bottled water, Gatorade, Coke, Diet Coke, Mtn Dew, sparkling water",
          "$2.00-$4.00",
          "4.0-6.5",
        ],
        [
          "Salty snack (chips, popcorn, pretzels)",
          "20%",
          "Doritos, Lay's, Cheetos, popcorn, pretzels, mixed nuts",
          "$1.75-$3.50",
          "2.5-4.0",
        ],
        [
          "Candy / sweet",
          "15%",
          "Snickers, M&M, Twix, Skittles, Reese's, Sour Patch",
          "$1.75-$3.00",
          "2.0-3.5",
        ],
        [
          "Energy / functional",
          "10%",
          "Red Bull, Monster, Celsius, 5-hour Energy",
          "$3.00-$5.50",
          "1.5-3.0",
        ],
        [
          "Hot beverage (coffee, hot chocolate)",
          "10%",
          "Drip coffee, cappuccino, hot chocolate (single-cup or bean-to-cup)",
          "$1.50-$3.50",
          "1.5-3.5 (seasonal Q4 peak)",
        ],
        [
          "Better-for-you / protein",
          "10%",
          "Protein bar, jerky, almonds, RX bar, Kind bar",
          "$2.50-$4.50",
          "1.0-2.0",
        ],
        [
          "Indulgent / premium",
          "5%",
          "Single-serve ice cream, premium chocolate, novelty SKU",
          "$3.00-$5.50",
          "1.0-2.5 (weather-sensitive)",
        ],
      ],
    },
  ],
  footer:
    "This framework is informational. Capability framing only — operator confirms final SKU list and cabinet count against your venue's foot-traffic count, league calendar (USBC and house league night roster), and quarterly velocity report. FALCPA allergen labeling is required on every SKU.",
});

console.log("wrote " + "bowling-alley-vending-services");
