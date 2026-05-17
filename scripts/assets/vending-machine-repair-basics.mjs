import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-repair-basics",
  assetType: "playbook",
  title: "Vending Machine Repair Playbook",
  subtitle: "Parts inventory + preventive maintenance schedule + dispatch protocol",
  intro:
    "98%+ machine uptime is the difference between a vending business that compounds and one that bleeds anchor accounts. This playbook codifies the parts inventory, preventive maintenance schedule, and dispatch protocol the LetUsVending operator network uses — referenced against NAMA technician training, NEC 210.8 GFCI / 250.118 grounding, ASHRAE 15 refrigerant safety, EPA Section 608 refrigerant handling, FDA Food Code 2022 cold-chain (≤41°F), and OSHA 1910.147 lockout/tagout.",
  sections: [
    {
      heading: "1. Spare-parts kit (per route, $400-$900)",
      paragraph:
        "Carry the high-mortality parts on the truck. 80% of service calls resolve in the first visit when these are stocked.",
      headers: ["Part", "Typical mortality", "Truck stock"],
      rows: [
        ["MDB harness + cables (snack + drink)", "Connector intermittents at 5-8 yr", "1 of each form factor"],
        ["DEX / MDB jumper + diagnostic dongle", "Diagnostic-only", "1 per truck"],
        ["Coil motor (1.5V DC) for spiral machines", "1 in 50 coils/yr", "2-3 spares"],
        ["Snack auger motor + clutch", "1 in 100/yr", "1-2 spares"],
        ["Drink delivery cup / chute solenoid", "1 in 75/yr", "1-2 spares"],
        ["Validator (bill acceptor) — MEI / Coinco", "1 in 30/yr (cash-heavy sites)", "1 refurb spare"],
        ["Coin mech — Coinco MAG / MEI Mars", "1 in 30/yr", "1 refurb spare"],
        ["Card reader (Cantaloupe Seed, Nayax VPOS, USAT)", "1 in 20/yr (vendor RMA)", "1 swap unit per route"],
        ["Refrigeration fan motor (evaporator + condenser)", "1 in 50/yr", "1 of each"],
        ["Compressor relay + start cap", "1 in 75/yr", "1-2 spares"],
        ["Door switch, ribbon cable, keypad", "Wear items", "1 set"],
        ["Lighting — LED strip, ballast", "5-7 yr life", "1 of each"],
      ],
    },
    {
      heading: "2. Preventive maintenance schedule",
      items: [
        { number: 1, title: "Every visit (1-3x/week)", description: "Wipe glass + selection area, test 3 random selections, verify card reader online (telemetry), check internal temperature on refrigerated units, top-off coin/bill mech, photograph planogram." },
        { number: 2, title: "Monthly", description: "Clean coin/bill mech path, vacuum condenser coil (refrigerated units), check door gasket, test refund button, log refund rate, calibrate temperature sensor." },
        { number: 3, title: "Quarterly", description: "Lockout/tagout per OSHA 1910.147, deep-clean evaporator, inspect compressor for oil leaks, verify door switch + interlock, replace any worn coils, check belts/clutches in spiral machines, validate keypad responsiveness, full sanitize of cold-food units per FDA Food Code 2022." },
        { number: 4, title: "Annually", description: "Refrigerant pressure check (EPA Section 608 certified tech), MDB harness inspection, validator firmware update, card reader firmware update, OEM PM kit installation, scale removal on coffee/hot-beverage units." },
        { number: 5, title: "Every 5-7 yr / EOL", description: "Compressor + condensing-unit swap or whole-machine refresh decision; refurb cycle vs. replace decision per the operator's capex policy." },
      ],
    },
    {
      heading: "3. Dispatch tier matrix",
      headers: ["Tier", "Description", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1", "Offline / payment down / temperature excursion / safety hazard", "<24 hr", "<24 hr"],
        ["Tier 2", "Single SKU stockout / planogram refresh request", "24-48 hr", "5-7 days"],
        ["Tier 3", "Cosmetic / signage / non-revenue-impacting", "5 days", "14 days"],
        ["Tier 4 — refrigeration", "Cold-chain temp out-of-spec > 30 min", "Immediate page", "<4 hr"],
        ["Tier 5 — emergency", "Vandalism / fire / water leak / injury", "Immediate", "Per AHJ + insurer"],
      ],
    },
    {
      heading: "4. Telemetry → dispatch automation",
      items: [
        { label: "Heartbeat", value: "Modem heartbeat every 5-15 minutes (Cantaloupe Seed, Nayax, 365 Retail Markets, Vendsys). 30-minute offline triggers Tier-1 alert." },
        { label: "Cold-chain alert", value: "Temperature > 41°F for > 30 minutes triggers Tier-4 alert. FDA Food Code 2022 §3-501.16 — corrective action required." },
        { label: "Payment failure alert", value: "Card-reader decline rate >5% / hour triggers Tier-1 alert. Usually a card-reader firmware reset or RMA." },
        { label: "Stockout alert", value: "SKU below threshold triggers Tier-2 — auto-attached to the next planned visit if telemetry sees adequate stock on adjacent SKUs." },
        { label: "Vibration / door alert", value: "Suspected tilt / pry events trigger an immediate operations alert + camera-frame retrieval where the site supports it." },
      ],
    },
    {
      heading: "5. Common failure modes + first-pass fix",
      items: [
        { number: 1, title: "Coil not vending (spiral machine)", description: "First-pass — check coil motor connector + voltage; replace coil motor; reseat MDB. 80% of cases. If persists, suspect main board." },
        { number: 2, title: "Cold-zone temperature alert", description: "First-pass — check condenser coil for dust, evaporator fan motor running, door gasket seal, ambient temperature. If sealed system, EPA Section 608-certified tech only." },
        { number: 3, title: "Bill acceptor jam / reject", description: "First-pass — clean validator path with cleaning card; firmware reset; if persists, swap to refurb unit, send original to RMA." },
        { number: 4, title: "Card reader 'no signal'", description: "First-pass — power-cycle modem (60 sec off), reseat SIM, check carrier coverage; if persists, swap unit; coordinate with the telemetry vendor on RMA." },
        { number: 5, title: "Spiral over-vend / under-vend", description: "First-pass — calibrate spiral home position, verify SKU sits flush, replace coil if worn." },
      ],
    },
    {
      heading: "6. Safety + compliance",
      items: [
        { check: "OSHA 1910.147 lockout/tagout on any service that exposes a tech to electrical or mechanical hazard" },
        { check: "EPA Section 608 certification for any refrigerant handling — universal or Type 1/2/3 as appropriate" },
        { check: "NEC 210.8 GFCI receptacle within 6 feet of every machine on first install" },
        { check: "NEC 250.118 grounding continuity check on every PM visit" },
        { check: "Ladder + lift safety per OSHA 1910.23 / ANSI A14 if servicing overhead" },
        { check: "Bloodborne pathogen kit on the truck for cleanup after vandalism / injury" },
        { check: "Service-call log retained 3-5 years for AHJ + insurer reference" },
      ],
    },
    {
      heading: "7. Refurb vs. replace decision",
      items: [
        { label: "Refurb threshold", value: "Replace compressor + condensing unit on a 8-12 year machine if frame, payment, and electronics are sound. ~$800-$2,200 vs. $4,500-$9,000 for new." },
        { label: "Replace threshold", value: "Card-reader/electronics generation gap, frame corrosion, or third compressor failure in 5 years — replace." },
        { label: "Refresh cadence", value: "Anchor accounts get refreshed equipment every 5-7 years — line item in the contract is the cleanest way to budget it." },
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an account or operator to service partners equipped to deliver the SLA tiers, telemetry-driven dispatch, EPA Section 608-certified refrigerant work, OSHA 1910.147-compliant service, and refurb/replace lifecycle planning summarized above. Service scope is set per route after site survey + telemetry vendor selection.",
    },
  ],
  footer:
    "Informational reference. Confirm all electrical, refrigerant, and safety requirements with a licensed AHJ tech for your jurisdiction. Citations current at publication.",
});

console.log("wrote "+"vending-machine-repair-basics");
