import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "coffee-maker-cleaning-sanitation",
  assetType: "template",
  title: "Office Coffee Equipment Cleaning + Sanitation Protocol Template",
  subtitle: "Cadence + supplies + staff training + operator scope — NSF/ANSI 4 + 169 aligned",
  intro:
    "Office coffee equipment (bean-to-cup, single-serve pod, traditional brewer, espresso, hot/cold water tower) accumulates biofilm, coffee oils, scale, and dairy residue. NSF/ANSI 4 (commercial cooking equipment), NSF/ANSI 18 (beverage dispensing equipment), and NSF/ANSI 169 (food equipment materials) define equipment hygiene baselines. FDA Food Code 2022 / 2024 supplement governs food-contact surface sanitation in workplaces serving food. This fillable template gives a facility manager the cleaning cadence, supply list, staff training plan, and the boundary between staff scope and operator scope.",
  sections: [
    {
      heading: "1. Equipment inventory + classification",
      headers: ["Equipment type", "Sanitation class", "Daily cleaning by", "Weekly+ by"],
      rows: [
        ["Bean-to-cup (Schaerer, Franke, WMF, Jura X-series)", "NSF/ANSI 4 + 18", "Staff (rinse cycle + drip tray)", "Operator (descaling, group head, milk system)"],
        ["Single-serve pod (Keurig K-2500 / 3500, Bunn MyCafe AP, Flavia C600)", "NSF/ANSI 18", "Staff (drip tray + needle)", "Operator (descaling, water filter)"],
        ["Traditional brewer (Bunn Axiom, Curtis G4, Newco LCD)", "NSF/ANSI 4", "Staff (rinse + decanter)", "Operator (sprayhead, deliming)"],
        ["Espresso (La Marzocco, Nuova Simonelli, Rancilio, Slayer)", "NSF/ANSI 4", "Staff (purge, drip tray)", "Operator (group head, steam wand, backflush)"],
        ["Hot/cold water tower (Bunn AquaFusion, Waterlogic, Quench)", "NSF/ANSI 4 + 53", "Staff (visual check, exterior wipe)", "Operator (filter, sanitization, UV check)"],
        ["Cold brew / nitro (Stumptown, Rhino, custom Cornelius)", "NSF/ANSI 18", "Staff (faucet wipe)", "Operator (line + keg cleaning, sanitizing)"],
      ],
    },
    {
      heading: "2. Daily cleaning protocol (staff scope)",
      paragraph:
        "Performed by office host / facilities aide / first-in barista. Estimated time: 5-10 minutes per equipment type.",
      items: [
        { number: 1, title: "Visual inspection", description: "Check for spills, drips, exterior staining, decanter cracks, milk-line drips. Report defects via facility ticket." },
        { number: 2, title: "Drip tray + grounds drawer", description: "Empty, rinse with hot water, wipe dry. Replace before next use. Empty trash; line bin." },
        { number: 3, title: "Exterior surfaces", description: "Wipe with food-safe sanitizer (quaternary ammonium, e.g., Ecolab Mikro-Quat, at 200 ppm per label) on non-glossy surfaces. Spot-clean touchscreens with manufacturer-approved wipe." },
        { number: 4, title: "Sprayhead / brew chamber rinse", description: "Run a clean-water rinse cycle on bean-to-cup + pod brewers per manufacturer prompt." },
        { number: 5, title: "Milk system (where applicable)", description: "End-of-day milk flush per manufacturer (typically water + cleaning detergent rinse cycle). NEVER leave milk in lines overnight." },
        { number: 6, title: "Sign-off", description: "Log on daily checklist (paper or app) — initial + time. Retain for 30 days." },
      ],
    },
    {
      heading: "3. Weekly / monthly cleaning protocol (operator scope)",
      items: [
        { number: 1, title: "Weekly — group head + sprayhead", description: "Detergent backflush (espresso) or sprayhead clean (traditional brewer) per manufacturer. Cafiza or equivalent detergent on espresso group heads." },
        { number: 2, title: "Weekly — milk lines + frothing wand", description: "Deep clean with milk-line cleaner (Rinza, Cafetto Mfc, or manufacturer-supplied). Inspect O-rings; replace as needed." },
        { number: 3, title: "Monthly — descaling (water hardness > 5 gpg)", description: "Citric acid or manufacturer-approved descaler per cycle. Frequency adjusts with water hardness — softer water may extend to quarterly." },
        { number: 4, title: "Quarterly — water filter change", description: "Replace per manufacturer (typical 6 months OR 1,500 gallons; whichever first). 3M HF20-MS, Everpure 4FC-S, BWT bestmax — match by equipment." },
        { number: 5, title: "Quarterly — pressure + temperature verification", description: "Verify brew temperature 195-205°F (NCA standard) and pressure 8-10 bar (espresso). Document on service ticket." },
        { number: 6, title: "Annually — preventive maintenance", description: "Manufacturer-prescribed PM (gaskets, seals, valves). Replace water filter if not already done. Inspect electrical + plumbing per manufacturer." },
      ],
    },
    {
      heading: "4. Supplies + chemicals — minimum baseline",
      items: [
        { label: "Food-safe sanitizer", value: "Quaternary ammonium (200 ppm working) — Ecolab Mikro-Quat, Diversey J-512, Spartan SaniDate. EPA-registered." },
        { label: "Coffee equipment detergent", value: "Cafiza (Urnex), Cafetto Espresso Clean — manufacturer-approved." },
        { label: "Milk-line cleaner", value: "Rinza (Urnex), Cafetto Mfc, manufacturer-supplied. NSF-registered." },
        { label: "Descaling agent", value: "Citric acid (food grade) OR manufacturer-supplied descaler (Saeco, Jura, Schaerer)." },
        { label: "Water filtration", value: "3M HF20-MS, Everpure 4FC-S, BWT bestmax — match by equipment. NSF/ANSI 42 + 53 + 401." },
        { label: "Single-use wipes", value: "Food-contact-safe (no quat) for touchscreens + interior contact." },
        { label: "PPE", value: "Nitrile gloves, eye protection during descale + chemical handling." },
        { label: "SDS storage", value: "Safety Data Sheets accessible per 29 CFR 1910.1200 (HazCom 2012)." },
      ],
    },
    {
      heading: "5. Staff training plan",
      items: [
        { check: "Initial training: 30-minute video + 1-hour hands-on with operator service tech at install." },
        { check: "Annual refresher: 30 minutes; coincides with operator quarterly PM visit." },
        { check: "New-hire orientation: 15-minute walkthrough by trained team lead." },
        { check: "HazCom briefing on chemicals used (29 CFR 1910.1200); SDS location documented." },
        { check: "Log of trained staff retained 3 years; updated on hire / departure." },
        { check: "Escalation path: visible service-call number + operator dashboard URL at each equipment station." },
      ],
    },
    {
      heading: "6. Cadence summary",
      headers: ["Task", "Cadence", "Owner"],
      rows: [
        ["Drip tray empty + rinse", "Daily (each shift)", "Staff"],
        ["Exterior wipe + sanitize", "Daily", "Staff"],
        ["Milk line end-of-day flush", "Daily (or after every milk use)", "Staff"],
        ["Sprayhead / brew chamber rinse", "Daily", "Staff"],
        ["Group head detergent backflush", "Weekly", "Operator (or trained staff)"],
        ["Milk-line deep clean", "Weekly", "Operator"],
        ["Descaling cycle", "Monthly (hard water) — quarterly (soft)", "Operator"],
        ["Water filter change", "Per manufacturer (6 mo or 1,500 gal)", "Operator"],
        ["Pressure + temperature verification", "Quarterly", "Operator"],
        ["Preventive maintenance", "Annually", "Operator"],
      ],
    },
    {
      heading: "7. Documentation + audit",
      items: [
        { check: "Daily checklist retained 30 days; quarterly retained 1 year; annual PM service tickets retained 3 years." },
        { check: "Operator dashboard surfaces service tickets + PM history to facility manager." },
        { check: "Water-quality test (TDS, hardness) at install + annually; documented." },
        { check: "Audit available on 10-business-day notice; coordinated with operator service ops." },
      ],
    },
  ],
  footer:
    "Template only — not health-code or chemical-safety advice. Verify NSF/ANSI, FDA Food Code, OSHA HazCom, and local health-department requirements with the AHJ. LetUsVending is equipped to coordinate office-coffee operators with NSF-aligned protocols and documented staff-training packets.",
});

console.log("wrote "+"coffee-maker-cleaning-sanitation");
