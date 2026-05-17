import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "touchless-coffee-machines-for-offices",
  assetType: "rfp template",
  title: "Touchless Office Coffee Framework",
  subtitle: "Technology comparison, equipment specification, OCS operator RFP template, and cleaning protocol",
  intro:
    "Touchless office coffee — bean-to-cup brewers with app, gesture, or RFID activation — became the default office spec after the COVID-19 transmission research published by the CDC + NIOSH and after ANSI/NSF 18 (Manual Food and Beverage Dispensing Equipment) was updated to address contactless operation. This framework gives the workplace experience leader + facilities team an objective technology comparison, an equipment spec the OCS operator can quote, a complete RFP template, and a cleaning protocol aligned to NSF + ANSI standards.",
  sections: [
    {
      heading: "1. Touchless activation technology — comparison",
      paragraph:
        "Three activation technologies dominate the market. Choose based on user flow, security requirements, and budget.",
      headers: ["Technology", "How it works", "Best fit", "Limitations"],
      rows: [
        ["Mobile app + QR code", "User scans QR on brewer screen; selects drink in app; brewer dispenses", "Tenant offices + coworking + hospitality", "Requires phone + battery; not great for visitors without the app"],
        ["RFID badge tap", "User taps employee badge or guest card on contactless reader; brewer dispenses default drink or last drink", "Corporate offices with existing badge ecosystem (HID, Mifare)", "Setup requires IT + facilities coordination"],
        ["Gesture / motion + voice", "Wave-to-start sensor or short voice command (\"start coffee\")", "Reception areas, executive floors, hospitality lobby", "Background noise + lighting affect reliability"],
      ],
    },
    {
      heading: "2. Equipment specification — bean-to-cup brewer",
      paragraph:
        "Specify the brewer at the model level so quotes are apples-to-apples. Major commercial brands include Franke (A1000 / A800), WMF (5000S+ / 1500S+), Schaerer (Soul / Coffee Skye), Eversys (e'2 / Cameo), JURA (Giga X8 Professional), and La Cimbali (S30).",
      items: [
        { check: "Bean-to-cup operation with twin-grinder option for caffeinated + decaf or two bean profiles" },
        { check: "Hot water + steam wand for tea + manual milk options" },
        { check: "Auto-milk system with refrigerated milk container and CIP (clean-in-place) cycle" },
        { check: "Contactless activation method (app / RFID / gesture / voice) per the comparison table" },
        { check: "Telemetry — daily brew counts, per-drink mix, hopper level, milk level, cleaning cycle status (Franke FoamMaster Connect, WMF CoffeeConnect, Schaerer Coffee Link, or comparable)" },
        { check: "PCI-DSS attestation through payment vendor where the brewer is pay-per-cup" },
        { check: "ENERGY STAR or comparable energy certification for commercial coffee equipment where available" },
        { check: "NSF certification or NSF/ANSI 18 compliance for the brewer" },
      ],
    },
    {
      heading: "3. OCS operator RFP template",
      paragraph:
        "Eight sections every OCS RFP should include. Total response 25-40 pages depending on installation count.",
      items: [
        { number: 1, title: "Section A — Bidder profile", description: "Years in OCS, brewer brand authorization, technician certification (Franke / WMF / Schaerer / Eversys / JURA certified service)." },
        { number: 2, title: "Section B — Equipment spec proposal", description: "Per-floor brewer recommendation with model + activation technology + telemetry vendor." },
        { number: 3, title: "Section C — Bean + supply program", description: "Bean origin + roast + grind, milk + alternative-milk options (oat / almond / soy), syrup + sweetener inventory, allergen labeling per FALCPA." },
        { number: 4, title: "Section D — SLA + telemetry", description: "Uptime 97%, tier-1 < 24 hr, daily hopper-level check via telemetry, refund + reorder mechanism." },
        { number: 5, title: "Section E — Cleaning + sanitation", description: "Daily CIP cycle, weekly deep clean, monthly descaling, quarterly preventive maintenance per manufacturer schedule." },
        { number: 6, title: "Section F — Implementation + training", description: "Install schedule, user onboarding (signage + email + lunch-and-learn), facilities + IT coordination for activation technology." },
        { number: 7, title: "Section G — Commercial terms", description: "Equipment lease vs purchase, supply pricing, route service frequency, billing cadence + audit right." },
        { number: 8, title: "Section H — References + capability", description: "Three OCS references at comparable footprint with named workplace experience or facilities contact." },
      ],
    },
    {
      heading: "4. Cleaning protocol — NSF + ANSI aligned",
      paragraph:
        "Operator + tenant share cleaning responsibility. Operator covers route-side daily CIP and weekly deep clean; tenant covers ambient cleanliness around the brewer. NSF/ANSI 18 compliance is verified at install and at annual reattestation.",
      items: [
        { label: "Daily — operator (via telemetry-triggered CIP)", value: "Automated clean-in-place cycle for milk system; rinse cycle for brew group; daily counter wipe-down where staffed by route." },
        { label: "Daily — tenant", value: "Wipe brewer face + drip tray + cup-warming surface; empty drip tray where not auto-drained; restock bean hopper from sealed bag (only if tenant manages refill)." },
        { label: "Weekly — operator", value: "Deep clean of brew group + grinder + milk system per manufacturer protocol; descaling cycle as required by water hardness; replace water filter cartridge per schedule." },
        { label: "Monthly — operator", value: "Comprehensive preventive maintenance: gasket inspection, seal replacement where worn, pump pressure verification, steam wand calibration, telemetry firmware update." },
        { label: "Quarterly — operator", value: "Full machine PM per manufacturer schedule (Franke / WMF / Schaerer / Eversys / JURA service interval); NSF/ANSI 18 cleanliness audit; water-quality test on incoming line." },
        { label: "Annual — operator + tenant", value: "Equipment refresh decision (replace > 5 years or > 250K brew cycles); NSF/ANSI 18 reattestation; ADA + Section 308 reach range verification." },
      ],
    },
    {
      heading: "5. SLA + telemetry",
      headers: ["SLA dimension", "Target", "Measurement", "Remedy"],
      rows: [
        ["Per-brewer uptime", "97% monthly", "Telemetry — minutes online / minutes in month", "Service-improvement plan at < 95%"],
        ["Tier-1 ticket (offline / payment / leak)", "Acknowledge < 4 hrs; resolve < 24 hrs", "Operator CRM + telemetry", "Per-ticket credit at SLA miss"],
        ["Bean / milk stockout", "Hopper / container > 20% at all times", "Telemetry level sensor", "Stockout incident logged + cadence review"],
        ["Refund / drink-error", "Credit < 24 hrs cashless; cash < 7 days", "Refund log", "Refund rate > 2% triggers brewer + planogram review"],
        ["Cleaning cycle adherence", "100% scheduled CIP completed", "Telemetry cleaning log", "Missed cycle triggers root-cause memo"],
      ],
    },
    {
      heading: "6. Common pitfalls",
      items: [
        { label: "Choosing activation technology that doesn't match user flow", value: "Mobile app fails for executive offices where visitors need access; RFID fails for coworking with rotating membership; gesture fails for lobbies with high ambient noise. Match technology to context." },
        { label: "Underspecifying cleaning + sanitation", value: "Office coffee disputes concentrate in milk-system spoilage + grind staleness. Specify the cleaning protocol in the contract with telemetry-verified completion." },
        { label: "Missing telemetry on hopper + milk levels", value: "Without telemetry-driven restock, OCS operators rotate weekly and miss stockouts mid-week. Telemetry hopper-level sensing is now standard." },
        { label: "No allergen labeling", value: "Plant-milk + flavor-syrup allergens require FALCPA labeling on the brewer or via QR code. Common gap in OCS programs." },
        { label: "ADA Section 308 reach-range miss", value: "Many countertop brewers exceed the 48\" reach-range maximum when placed on standard counters. Verify at install." },
      ],
    },
  ],
  footer:
    "This framework is a working procurement reference. Final RFP + equipment selection should be reviewed by workplace experience leadership, facilities, IT (for activation technology integration), and counsel where the equipment-lease structure requires it. NSF/ANSI 18 + ADA + FALCPA compliance are non-negotiable in modern office coffee programs.",
});

console.log("wrote "+"touchless-coffee-machines-for-offices");
