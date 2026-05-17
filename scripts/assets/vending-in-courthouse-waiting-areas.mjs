import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-in-courthouse-waiting-areas",
  assetType: "pack",
  title: "Courthouse Vending Pack",
  subtitle: "Glass-free planogram template, security pre-clearance checklist, meal-replacement weighting",
  intro:
    "Courthouse vending serves a captive audience — jurors waiting through voir dire, members of the public waiting on docket, attorneys + clerks across long days. Glass containers, alcohol, certain energy drinks, and any item that could be repurposed as a weapon are typically prohibited inside the security perimeter. This pack codifies the courthouse-specific planogram, pre-clearance checklist, and operating protocols.",
  sections: [
    {
      heading: "1. Why courthouse vending is its own category",
      paragraph:
        "Three constraints make courthouse vending unlike any other public-building placement: (1) security perimeter rules restrict packaging materials, (2) captive-audience dwell times (4-8 hours for jurors, often without ability to leave) push the planogram toward meal replacements, (3) building access for operator route drivers requires court-side security pre-clearance + sometimes individual case-day coordination.",
    },
    {
      heading: "2. Prohibited / restricted packaging — security perimeter",
      paragraph:
        "Inside the courthouse security perimeter, US Marshals Service / court security typically prohibit:",
      items: [
        { check: "Glass containers (bottles, jars) — risk as projectile / weapon." },
        { check: "Metal cans with full-cut tops (some jurisdictions); pull-tab aluminum acceptable in most." },
        { check: "Items with metal foil seals heavier than standard yogurt-cup foil (case-by-case)." },
        { check: "Alcohol (always)." },
        { check: "Energy drinks above [varies by jurisdiction caffeine threshold] — some courts restrict; check local policy." },
        { check: "Heated / pressurized aerosol packaging." },
        { check: "Anything with an internal heating element (some self-heating beverage packaging)." },
      ],
    },
    {
      heading: "3. Glass-free planogram template",
      paragraph:
        "Plastic / aluminum / paperboard only. Meal-replacement-weighted to reflect long juror dwell times.",
      headers: ["Category", "Slots", "Packaging spec"],
      rows: [
        ["Water (16 oz / 1 L)", "5-6", "Plastic bottle only"],
        ["Juice + sports drink", "4-5", "Plastic bottle or paperboard carton"],
        ["Coffee / cold-brew", "3-4", "Aluminum pull-tab can or paperboard"],
        ["Meal-format (sandwich, wrap, microwaveable bowl)", "5-7", "Plastic clamshell / paperboard sleeve; microwaveable in plastic"],
        ["Fresh fruit cups + yogurt", "3-4", "Plastic cup with foil seal"],
        ["Protein bars + granola", "5-6", "Foil / film flexible packaging"],
        ["Salty snacks", "4-5", "Film bag"],
        ["Sweet snacks", "3-4", "Film bag / paperboard"],
      ],
    },
    {
      heading: "4. Meal-replacement weighting — captive-audience dwell",
      paragraph:
        "Jurors and waiting public often cannot leave the courthouse during a session. Meal-format and protein-dense options matter more here than in any other public-building category.",
      items: [
        { label: "Refrigerated meal-format", value: "Turkey + cheese sandwich, hummus + veg wrap, chicken Caesar wrap, grain bowl. 3-4 slots minimum." },
        { label: "Microwaveable shelf-stable", value: "Soup cup, mac-and-cheese cup, chicken-rice bowl, oatmeal. 2-3 slots; requires microwave in waiting area." },
        { label: "Protein-dense snacks", value: "Jerky, mixed nuts, hard-boiled eggs (if refrigerated), protein bars. 3-4 slots." },
        { label: "Fresh fruit + yogurt", value: "Apple slices, grape cup, yogurt, hummus + pretzel pack. 2-3 slots." },
      ],
    },
    {
      heading: "5. Pre-clearance checklist (operator + facility)",
      paragraph:
        "Run before contract sign + before any equipment delivery.",
      items: [
        { check: "Court administrator + facility chief security officer review proposed planogram for packaging compliance." },
        { check: "Operator route driver background check meets court's contractor-access standard (state / federal varies)." },
        { check: "Operator route driver enrolled in courthouse contractor-badge program." },
        { check: "Operator's restock cart / dolly meets security screening protocol (X-ray + visual inspection at entry)." },
        { check: "Restock visit schedule coordinated with court calendar — avoid high-security days (high-profile trials) unless cleared." },
        { check: "Equipment delivery scheduled with facility (typically before court opens or after close)." },
        { check: "Cash collection: most courts prefer cashless-only; if cash is included, collection scheduled with security present." },
        { check: "Operator's commercial GL + auto insurance certificates on file (typically $1M minimum)." },
      ],
    },
    {
      heading: "6. Equipment + telemetry — courthouse-specific",
      items: [
        { check: "Cashless-primary or cashless-only — reduces cash-handling security overhead." },
        { check: "Cellular telemetry — courthouse Wi-Fi is restricted; cellular is standard." },
        { check: "External antenna for thick-wall historic courthouses." },
        { check: "E-lock with audit log — every door-open event logged (deters insider theft + supports incident investigation)." },
        { check: "Tamper-resistant fasteners." },
        { check: "Glass-front reinforced (laminated / tempered) where required by AHJ / facility security." },
        { check: "Surge protection." },
        { check: "Dedicated 20A circuit; documented in facility electrical drawings." },
      ],
    },
    {
      heading: "7. Service cadence + court-calendar coordination",
      paragraph:
        "Court calendars drive demand. High-volume days (jury selection, multi-defendant docket, civil-motion day) push 2-3× normal-day velocity.",
      items: [
        { number: 1, title: "Baseline cadence", description: "Restock 2-3× per week for active courthouses; 1× per week for smaller / part-time facilities." },
        { number: 2, title: "Court-calendar overlay", description: "Court administrator shares 4-week calendar with operator. Operator overlays jury / docket peak days and adjusts restock to land morning-of." },
        { number: 3, title: "Tier-1 SLA", description: "Offline / payment failure: <24 hr response. Refrigeration excursion (fresh-meal stock): <4 hr response." },
        { number: 4, title: "Refund / dispense-failure", description: "Refund process accessible to jurors without leaving floor — QR code on machine to operator's mobile refund form. Refund credited within 24 hr (cashless) or via clerk's office (cash)." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate court-administrator review, security pre-clearance language, and the courthouse-specific planogram template. The operator selected via this framework executes the program; the court administrator + facility chief security officer own access protocol and packaging compliance.",
    },
  ],
  footer:
    "Informational reference. Security perimeter rules and packaging restrictions vary by courthouse (federal, state, county) and by case sensitivity. Coordinate with the court administrator and facility chief security officer.",
});

console.log("wrote "+"vending-in-courthouse-waiting-areas");
