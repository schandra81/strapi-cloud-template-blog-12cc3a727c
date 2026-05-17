import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "office-coffee-machine-maintenance",
  assetType: "pack",
  title: "Office Coffee Machine Maintenance Pack",
  subtitle: "Daily checklist, OCS contract scope, descaling cadence, water filtration spec, and quarterly PM documentation",
  intro:
    "This pack consolidates the maintenance practices that keep an office coffee program running at 98%+ uptime over a 5-7 year equipment life. It separates host-side daily tasks from operator-side preventive maintenance, gives water hardness and descaling math, and supplies the documentation an operator should attest to at every quarterly business review.",
  sections: [
    {
      heading: "1. Daily host-side checklist (5 minutes)",
      paragraph:
        "These items take a designated workplace-experience or facilities steward 5 minutes per machine. Operator-side daily tasks are separate and listed in section 3.",
      items: [
        { check: "Wipe drip tray + machine exterior with food-safe sanitizer (no abrasive cleaners)" },
        { check: "Empty grounds bin if visible through transparent door (most superautomatics hold 60-80 pucks)" },
        { check: "Top off bean hopper to 60-80% full (avoids stale beans at top + low-bean errors)" },
        { check: "Top off cup + lid + condiment supply" },
        { check: "Verify milk fridge temperature ≤ 40°F (digital thermometer log)" },
        { check: "Run on-machine rinse cycle (typically a single-button prompt on Franke / Schaerer / WMF)" },
        { check: "Log any error code or unusual behavior in shared service log (Slack channel, ticket system, or paper log)" },
      ],
    },
    {
      heading: "2. Weekly host-side checklist (15 minutes)",
      items: [
        { check: "Deep-clean milk system per manufacturer cycle (Franke A300/A600: programmed Hyclean cycle, 8-12 min)" },
        { check: "Wipe and sanitize all touch surfaces (selection panel, dispense spouts, drip tray)" },
        { check: "Empty + sanitize grounds bin + drip tray separately" },
        { check: "Inspect water filter indicator (most cartridges have a date sticker or telemetry-reported gallon count)" },
        { check: "Run on-machine descale-check cycle (machine will flag if descale is due)" },
        { check: "Photograph or document any cosmetic damage and report to operator" },
      ],
    },
    {
      heading: "3. Operator-side preventive maintenance cadence",
      headers: ["Cadence", "Tasks", "Documentation"],
      rows: [
        ["Each restock (2-3×/week)", "Inspect grinder burr alignment, milk-line clarity, dispense spouts. Replace expiring product. Verify telemetry sync.", "Restock report with date, time, SKUs, technician initials"],
        ["Monthly", "Full descale cycle (citric or proprietary descaler). Clean group head + brew unit. Lubricate brew unit gaskets. Check pressure (9 bar ± 0.5 espresso).", "Monthly PM checklist signed + photo of pressure gauge + descale receipt"],
        ["Quarterly", "Replace water filter cartridge. Inspect + replace milk-line tubing. Calibrate grinder. Replace gaskets. Firmware update.", "Quarterly PM report + parts replaced + firmware version. Filed in QBR deck."],
        ["Annual", "Full rebuild — boiler descale, pump check, solenoid valves, group head rebuild, brew unit replacement at end of cycle count. Test ground-to-cup time + temp + crema.", "Annual PM certificate signed by manufacturer-certified technician. Required for warranty + uptime SLA."],
      ],
    },
    {
      heading: "4. Water filtration spec + hardness math",
      paragraph:
        "Water is the #1 cause of premature failure on bean-to-cup machines. Specialty Coffee Association (SCA) water standard targets: TDS 75-250 mg/L, hardness 17-85 mg/L as CaCO3 (1-5 grains), alkalinity 40-75 mg/L, chloride < 10 mg/L. Most US tap water exceeds hardness — filtration is mandatory.",
      items: [
        { label: "Filter type", value: "Carbon block + ion-exchange softener (BWT Bestmax Premium, Pentair Everpure 4FC-S, BUNN EQHP-25). Reverse osmosis with remineralization for premium tier or hardness > 250 ppm." },
        { label: "Sizing", value: "Match filter to weekly volume. Bestmax Premium V: ~3,000 L (~12,000 cups) per cartridge. Replace at 6 months or volume threshold, whichever first." },
        { label: "Hardness measurement", value: "Test inlet water quarterly with reagent strips (Hach 5-in-1) or digital meter (HM Digital TDS-EZ). Document on PM report." },
        { label: "Scale indicator", value: "If descale alert fires more than once per 8 weeks at expected volume, filter is undersized or expired. Resize or replace." },
        { label: "Backflow + plumbing", value: "Dedicated 1/4 in cold water line with shut-off valve + pressure regulator (40-80 psi) + backflow preventer per local plumbing code." },
      ],
    },
    {
      heading: "5. Descaling cadence + chemistry",
      paragraph:
        "Descale cadence is a function of water hardness × volume. Use this matrix to validate your operator's plan.",
      headers: ["Inlet hardness (gpg)", "Volume (cups/week)", "Descale cadence", "Filter cadence"],
      rows: [
        ["1-3 (soft, filtered)", "≤ 500", "Quarterly", "6 months"],
        ["1-3 (soft, filtered)", "500-1,500", "Monthly", "4-6 months"],
        ["3-7 (moderate)", "≤ 500", "Monthly", "4 months"],
        ["3-7 (moderate)", "500-1,500", "Bi-weekly + filter upgrade", "3 months"],
        ["7+ (hard, unfiltered)", "Any", "Add RO + remineralization", "2-3 months"],
      ],
    },
    {
      heading: "6. Equipment cycle counts + replacement triggers",
      items: [
        { label: "Brew unit (bean-to-cup)", value: "Replace at 30,000-50,000 cycles per manufacturer (Franke A300 ~ 40,000; Schaerer ~ 50,000). Telemetry tracks exact count." },
        { label: "Group head gaskets", value: "Replace every 6-12 months or 15,000 shots, whichever first." },
        { label: "Grinder burrs", value: "Steel burrs: 600-800 kg of beans. Ceramic burrs: 1,200-1,500 kg. Telemetry-tracked or weighed at PM." },
        { label: "Boiler descale chemistry", value: "Manufacturer-approved descaler only (Cafiza / Urnex Dezcal / Franke-supplied). Citric acid 5-10% solution for stainless boilers; never vinegar (acetic acid pits brass + copper components)." },
        { label: "End-of-life decision", value: "Refurb economic when total ownership cost (refurb + 1 yr PM) < 50% of new equivalent. Most fleets refurb at year 5 and replace at year 7-8." },
      ],
    },
    {
      heading: "7. Service SLA tiers",
      items: [
        { number: 1, title: "Tier 1 — machine offline, payment failure, leak", description: "<4 hour acknowledgement, <24 hour resolution. Loaner machine within 24 hours for primary brewer if not resolvable on-site." },
        { number: 2, title: "Tier 2 — single-drink failure, descale-required, dispense error", description: "Same-day acknowledgement, <48 hour resolution at next restock." },
        { number: 3, title: "Tier 3 — cosmetic, planogram, refresh request", description: "5-day acknowledgement, 14-day resolution." },
      ],
    },
    {
      heading: "8. Quarterly business review (QBR) documentation",
      paragraph:
        "Operator brings the following to every quarterly review. Host facilities + workplace-experience steward signs off.",
      items: [
        { check: "Uptime report per machine per month over the quarter (telemetry-verified)" },
        { check: "PM completion log with technician name, date, parts replaced" },
        { check: "Water filter replacement receipts + descale completion certificates" },
        { check: "Cycle count per brew unit + grinder + projected replacement window" },
        { check: "Service ticket log with SLA adherence (acknowledged / resolved within tier)" },
        { check: "Cost-per-cup actuals vs. bid; commodity pass-through reconciliation" },
        { check: "Member feedback + satisfaction (NPS / smile-rating) trend" },
        { check: "Action items + owner + due date for next quarter" },
      ],
    },
  ],
  footer:
    "This pack is operator-neutral. Use it to align internal facilities staff and as the documentation backbone for your operator's PM scope.",
});

console.log("wrote " + "office-coffee-machine-maintenance");
