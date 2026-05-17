import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "specialty-vending-apartment-amenities",
  assetType: "pack",
  title: "Specialty Vending Selection Framework",
  subtitle: "Demographic match, equipment specs, operator capability checklist",
  intro:
    "Specialty vending (ice cream, pet, beauty, wellness, electronics, fitness recovery) is a category-by-category capability decision. This framework matches specialty category to resident demographic, lays out the equipment spec, and codifies the operator capability checklist.",
  sections: [
    {
      heading: "1. Specialty category taxonomy",
      headers: ["Category", "Best demographic fit", "Capex range", "Service intensity"],
      rows: [
        ["Ice cream / frozen treats", "Family-heavy, lifestyle, kid-friendly properties", "$5K-$18K", "Bi-weekly Q1/Q4, weekly Q2/Q3, cold-chain SLA"],
        ["Pet treats + waste-bags", "Pet-policy properties; dog-park / dog-wash amenity", "$2K-$5K", "Monthly"],
        ["Beauty + personal care", "Lifestyle / luxury; female-skewed demographic", "$10K-$25K (smart cabinet)", "Bi-weekly"],
        ["Wellness (CBD, melatonin, electrolyte)", "Wellness-positioning properties, fitness corridor", "$8K-$20K", "Weekly"],
        ["Electronics + travel-essentials", "Co-living, corporate housing, near-airport", "$15K-$35K", "Bi-weekly"],
        ["Fitness recovery (protein, supplements)", "Fitness-amenity-heavy properties", "$6K-$15K", "Weekly"],
        ["Office / co-work supplies", "Co-work-amenity-heavy properties", "$4K-$10K", "Monthly"],
      ],
    },
    {
      heading: "2. Demographic match heuristics",
      paragraph:
        "Resident demographic predicts specialty-category fit. Use property data + NMHC benchmarks.",
      items: [
        { label: "Family-heavy (3-bedroom share > 25%)", value: "Ice cream, kid snacks, pet treats. Avoid CBD / wellness adult-only specialty unless physically segregated." },
        { label: "Young-professional / single-occupant (studio + 1-BR > 60%)", value: "Wellness, electronics, fitness recovery, beauty. Premium price-point support." },
        { label: "Senior / 55+", value: "Wellness (electrolyte, supplements), pharmacy-adjacent OTC, accessibility-spec equipment mandatory." },
        { label: "Student / co-living", value: "Office supplies, electronics, fitness recovery, snack specialty (energy bars, late-night)." },
        { label: "Luxury / lifestyle", value: "Beauty, wellness, premium electronics, ice cream premium-tier. Brand-immersive cabinet finish." },
        { label: "Pet-friendly (pet-policy properties)", value: "Pet treat + waste-bag dispenser at dog-wash + dog-park amenity." },
      ],
    },
    {
      heading: "3. Equipment specifications",
      items: [
        { label: "Ice cream / frozen", value: "Fastcorp 632 robotic-arm freezer or Fuji Electric FFV; -10°F to 0°F hold; ENERGY STAR Tier 2 current models; cellular telemetry with sub-5-min heartbeat; floor-anchored." },
        { label: "Pet treats + waste-bags", value: "Compact specialty machine (Selectivend / IntelliVend), 8-15 SKUs, 110V/15A, weatherized if at outdoor dog park (NEMA 3R / IP54)." },
        { label: "Beauty + personal care", value: "Smart cabinet with RFID inventory (Nayax Onyx RFID base) or vending kiosk (IntelliVend Tower), 20-30 SKUs, hardened glass, brand-finish required." },
        { label: "Wellness", value: "Glass-front cabinet with refrigerated + ambient split (electrolyte refrigerated, supplements ambient); 30-40 SKUs; ENERGY STAR-cert refrigerated section." },
        { label: "Electronics", value: "Hardened steel cabinet 14-gauge, Medeco / Abloy lock, anti-fish coin/bill validator, RFID inventory, $25-$50K SKU value insured." },
        { label: "Fitness recovery", value: "Refrigerated cabinet for protein RTDs + ambient shelf for bars/supplements; 25-35 SKUs; near fitness-center foot-traffic." },
        { label: "Office / co-work supplies", value: "Compact mixed-format (Selectivend SVA / Snack/Beverage hybrid), 20-30 SKUs (cables, batteries, snacks); 110V/15A." },
      ],
    },
    {
      heading: "4. Operator capability checklist per specialty",
      paragraph:
        "Not every multifamily operator is equipped for every specialty category. Use the checklist below to gate operator qualification.",
      items: [
        { number: 1, title: "Ice cream / frozen", description: "Cold-chain SLA contract, cellular temperature monitoring, ENERGY STAR Tier 2 freezer fleet, FDA Food Code 3-501.16 attestation, 4-hr excursion response SLA, seasonal cadence." },
        { number: 2, title: "Pet treats + waste-bags", description: "Pet-property references, FDA AAFCO-compliant treats supplier, outdoor-rated cabinet capability if dog-park placement." },
        { number: 3, title: "Beauty + personal care", description: "FDA-registered cosmetic supplier, brand-licensing where applicable, FALCPA-style allergen labeling, secure cabinet experience." },
        { number: 4, title: "Wellness", description: "FDA-DSHEA-compliant supplement supplier; state-specific CBD/cannabis-adjacent compliance where applicable; mid-tier inventory insurance." },
        { number: 5, title: "Electronics", description: "$25-$200K floor-inventory insurance, hardened-cabinet experience, RFID inventory, lost-prevention controls, MSRP-discipline." },
        { number: 6, title: "Fitness recovery", description: "Protein + supplement compliance (FDA-DSHEA), refrigerated + ambient cabinet experience, near-fitness placement experience." },
        { number: 7, title: "Office / co-work supplies", description: "Mixed-format inventory, compact cabinet experience, B2B SKU supplier relationships (Amazon Business or comparable)." },
      ],
    },
    {
      heading: "5. Compliance + regulatory footnotes",
      items: [
        { check: "Food safety — FDA Food Code Chapter 3 for ice cream, fresh, beverage." },
        { check: "Cosmetics — FDA Color Additives + Cosmetic Labeling per FDCA Section 601-602." },
        { check: "Supplements — DSHEA labeling + structure-function claims compliance." },
        { check: "CBD / cannabis-adjacent — state-specific; Farm Bill THC threshold compliance; some states (FL, TX) require additional licensure." },
        { check: "Electronics — California Prop 65 chemical warning; FCC + UL certification labeling." },
        { check: "Pet treats — AAFCO labeling; jurisdiction-specific feed-control compliance." },
        { check: "ADA accessibility — Title III + Section 308 reach-range for all specialty cabinets at public-amenity placements." },
      ],
    },
    {
      heading: "6. Commission framework by specialty",
      headers: ["Specialty", "Monthly gross / cabinet", "Commission tier"],
      rows: [
        ["Ice cream", "$700-$2,500", "5-15% (cold-chain reduces room)"],
        ["Pet", "$150-$400", "0-3% (low-volume; often free-amenity placement)"],
        ["Beauty", "$800-$2,500", "8-15%"],
        ["Wellness", "$700-$2,000", "8-15%"],
        ["Electronics", "$1,500-$5,000", "12-22% (higher ATV)"],
        ["Fitness recovery", "$600-$1,800", "8-15%"],
        ["Office / co-work supplies", "$300-$900", "5-10%"],
      ],
    },
    {
      heading: "7. Placement-evaluation worksheet",
      items: [
        { check: "Property resident demographic confirmed against specialty match in Section 2." },
        { check: "Zone identified (lobby / lounge / fitness / pool / dog-wash / corridor) with foot-traffic estimate." },
        { check: "Power + signal verified (circuit, surge protection, cellular > -95 dBm or Wi-Fi)." },
        { check: "Compliance footprint reviewed for the chosen specialty (food / cosmetic / supplement / electronics)." },
        { check: "ADA reach-range pre-check (48 in upper / 15 in lower)." },
        { check: "Operator capability checklist passed for the specialty." },
        { check: "Resident-communication plan drafted (portal announcement, lobby signage, member-app deep-link)." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface specialty operators against the seven categories above. Specific equipment capex, planogram fit, and commission tier depend on operator capacity and property volume — described honestly at intake. Capability framing only; we do not represent placements at any specific named property unless explicitly confirmed.",
    },
  ],
  footer:
    "Capex, commission, and compliance details are reference values. Confirm against operator proposals and category-specific regulators.",
});

console.log("wrote " + "specialty-vending-apartment-amenities");
