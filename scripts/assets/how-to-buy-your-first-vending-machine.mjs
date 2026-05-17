import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-buy-your-first-vending-machine",
  assetType: "checklist",
  title: "28-Point First Vending Machine Inspection Checklist",
  subtitle: "Pre-purchase inspection, paperwork verification, and condition scoring",
  intro:
    "Use this checklist before you wire funds for a used or refurbished vending machine. Bring it printed to the seller's facility, score each line, and walk away from machines scoring below 70 / 100. References cite NAMA Industry Standard 19 (vending machine vending) and FDA Food Code 2022 Part 4.",
  sections: [
    {
      heading: "Cabinet + structural condition (1-5)",
      paragraph:
        "The cabinet is the most expensive component to refurbish. Surface rust, frame damage, or door-seal failure typically signals a machine past its economic life.",
      items: [
        { check: "1. Exterior paint — no major chips, scratches, or rust. Touch-ups acceptable; rust-through is not." },
        { check: "2. Door alignment — gasket seals continuously when closed; no gaps when paper is inserted around the perimeter (refrigerated units)." },
        { check: "3. Hinges + latch — no excessive play, latch engages firmly without forcing." },
        { check: "4. Coin-mech door + bill-validator door — keys operate freely, locks engaged and not drilled-out / replaced with substitutes." },
        { check: "5. Cabinet feet / leveling — all four feet present and adjustable. Cabinet sits flat without rocking." },
      ],
    },
    {
      heading: "Refrigeration + cold-chain (refrigerated units only) (6-10)",
      paragraph:
        "FDA Food Code 2022 §3-501.16 requires refrigerated potentially hazardous foods to be held at 41°F or below. A failing compressor or evaporator is the #1 reason used refrigerated machines are unprofitable.",
      items: [
        { check: "6. Compressor — runs without excessive noise (no metal-on-metal grinding), cycles on within 30 seconds of cabinet temp rising." },
        { check: "7. Internal cabinet temperature — measured with an independent probe, 33-40°F throughout duty cycle." },
        { check: "8. Condenser coil — clean (or pre-cleaned), fins not damaged, fan operates without bearing whine." },
        { check: "9. Evaporator — frost pattern even, no excessive ice buildup, drain pan empty and drain line clear." },
        { check: "10. Refrigerant type — verify R-134a, R-290, or R-744 (CO2). Pre-2010 machines may use R-22 which is EPA-phased-out and expensive to recharge." },
      ],
    },
    {
      heading: "Payment systems (11-15)",
      paragraph:
        "PCI-DSS v4.0 (effective March 2024) places liability for card-data breaches on the operator. Card readers must be on the current MDB-compliant generation; legacy readers will not pass PCI audit.",
      items: [
        { check: "11. Card reader — Nayax, Cantaloupe, USA Technologies, or 365 Retail Markets; PCI-DSS v4.0 compliant; cellular SIM active or transferable." },
        { check: "12. Bill validator — MEI/CPI/JCM model accepting current US series; rejection rate ≤ 5% on test bills." },
        { check: "13. Coin mech — accepts current US coinage; coin return functional; payout tubes loaded for change." },
        { check: "14. MDB harness — clean wiring, all connectors seated, no aftermarket splices or electrical tape repairs." },
        { check: "15. Cashless transaction test — operator performs a $1 test sale and confirms it lands in the merchant account dashboard." },
      ],
    },
    {
      heading: "Selection mechanism + dispense (16-20)",
      items: [
        { check: "16. Spirals / coils — uniform spacing, no kinks or off-axis rotation; spirals can be reshaped or replaced individually." },
        { check: "17. Drop sensor / dispense detection — every selection completes with the iVend or shelf-detect circuit confirming product fell." },
        { check: "18. Selection keypad — every digit / letter responsive, no missing or worn keycaps." },
        { check: "19. Door interlock — machine inhibits sales when door is open." },
        { check: "20. Test vend — operator runs a free test vend on every row; no jams, no double drops." },
      ],
    },
    {
      heading: "Electrical + safety (21-24)",
      paragraph:
        "UL 541 is the safety standard for refrigerated vending; UL 751 for non-refrigerated. A missing or removed UL label is a red flag — it usually means the cabinet was rebuilt outside the original spec.",
      items: [
        { check: "21. UL 541 or UL 751 label present on cabinet (refrigerated vs non-refrigerated)." },
        { check: "22. Power cord intact, no nicks or repairs; matches the cabinet rating (15A or 20A NEMA 5-15P / 5-20P)." },
        { check: "23. Internal lighting — LED preferred; no broken ballasts or exposed wiring." },
        { check: "24. Ground continuity — verified with a multimeter (chassis-to-ground)." },
      ],
    },
    {
      heading: "Paperwork + documentation (25-28)",
      items: [
        { check: "25. Bill of sale — signed by the seller, lists make/model/serial number, sale price, and 'as-is' or warranty terms." },
        { check: "26. Title / origin — for ex-route machines, a delivery receipt or original purchase invoice from the OEM/dealer." },
        { check: "27. Service history — at minimum, the prior operator's service-call summary for the last 12 months." },
        { check: "28. Owner's manual + planogram template — should accompany the machine; otherwise download from the OEM (Crane, AMS, Royal, Seaga, USI/Wittern, Federal Industries)." },
      ],
    },
  ],
  footer:
    "Score each item 0 (fail), 2 (acceptable), or 4 (excellent). Machines scoring below 70 / 112 are not worth the negotiated purchase price; renegotiate or walk away. This checklist is informational, not legal advice.",
});

console.log("wrote "+"how-to-buy-your-first-vending-machine");
