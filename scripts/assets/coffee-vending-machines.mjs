import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "coffee-vending-machines",
  assetType: "playbook",
  title: "Coffee Vending Machine Selection Playbook",
  subtitle: "Category-by-category sizing, water filtration, maintenance cadence, and OCS-vs-DIY framework",
  intro:
    "Choosing a coffee machine is the most over-engineered and under-measured workplace decision: getting it right means happy employees and a clean QBR; getting it wrong means a broken bean-to-cup unit, a $4/cup capsule program, and Slack complaints. This playbook codifies category sizing, water filtration, maintenance cadence, and the OCS-vs-DIY framework — referenced against NSF/ANSI 42 + 53 + 372 (water), NEC 210.8 GFCI, and the SCA (Specialty Coffee Association) brewing standard (10:1 to 18:1 brew ratio, 195-205°F).",
  sections: [
    {
      heading: "1. Category-by-category capability summary",
      headers: ["Category", "Capex range", "Cost / cup", "Throughput / day", "Best fit"],
      rows: [
        ["Pod / capsule (Keurig, Nespresso, Flavia)", "$300-$2,500 per unit", "$0.50-$1.20", "50-200 cups", "10-50 employees per unit"],
        ["Single-cup bean-to-cup (Jura, WMF, Franke)", "$3,000-$12,000", "$0.25-$0.50", "200-800 cups", "50-300 employees"],
        ["Commercial bean-to-cup (Eversys, Schaerer, Thermoplan)", "$12,000-$40,000", "$0.20-$0.40", "800-2,000 cups", "300-1,500 employees"],
        ["Brew-by-pot (Bunn, Wilbur Curtis, Fetco)", "$400-$3,500", "$0.10-$0.25", "Higher in burst windows", "Cafeterias, large breakrooms"],
        ["Espresso traditional (La Marzocco, Slayer, Synesso)", "$8,000-$30,000+", "$0.30-$0.60 + barista labor", "Throughput depends on barista", "Premium hospitality / executive areas"],
      ],
    },
    {
      heading: "2. Sizing — cups per machine per day",
      paragraph:
        "Rule of thumb: 1.5-2.5 cups per employee per workday in the U.S. workplace (NCA generation-cohort data). Size for the 80th-percentile peak, not the average.",
      items: [
        { label: "Pod / capsule throughput cap", value: "~120 cups/day before queueing complaints; descale every 200-400 cycles." },
        { label: "Single-cup bean-to-cup throughput", value: "~600 cups/day with twin grinders + auto-clean; daily milk-system rinse if milk-equipped." },
        { label: "Commercial bean-to-cup throughput", value: "Up to 250 cups/hour peak; SCA-spec brew temperature 195-205°F and brew ratio 1:15 to 1:18." },
        { label: "Brew-by-pot throughput", value: "1.5 gallons per 4-minute cycle = ~24 cups; works best for breakroom-side coffee station with airpots." },
      ],
    },
    {
      heading: "3. Water filtration (the #1 reliability lever)",
      items: [
        { number: 1, title: "Why filtration matters", description: "Hardness > 100 ppm CaCO3 scales boilers and clogs solenoids; chlorine taints flavor. Most premature bean-to-cup failures trace to skipped filtration." },
        { number: 2, title: "Standards reference", description: "Inline filter certified to NSF/ANSI 42 (taste/odor + chlorine reduction), NSF/ANSI 53 (heavy metals + cysts), and NSF/ANSI 372 (lead-free contact). Replace per manufacturer schedule, typically every 6 months or 5,000-10,000 gallons." },
        { number: 3, title: "Hardness target", description: "Target 50-100 ppm CaCO3 for espresso/bean-to-cup; below 30 ppm risks corrosion and flat extraction. Add a remineralization stage if RO is used." },
        { number: 4, title: "Plumbing requirements", description: "Dedicated 3/8 in cold-water line with shutoff; backflow preventer per local plumbing code. Drain proximity for pulled-shot bean-to-cup units." },
        { number: 5, title: "Electrical requirements", description: "20A 120V dedicated circuit per single-cup bean-to-cup; 30A 208V for many commercial units. GFCI per NEC 210.8 in wet locations." },
      ],
    },
    {
      heading: "4. Maintenance cadence",
      headers: ["Task", "Pod/capsule", "Single-cup bean-to-cup", "Commercial bean-to-cup"],
      rows: [
        ["Daily rinse", "n/a", "Milk system + brew chamber", "Milk system + brew chamber"],
        ["Weekly clean", "External wipe", "Detergent cycle + grouphead clean", "Detergent cycle + grouphead + steam wand"],
        ["Monthly descale", "Descale cartridge", "Backflush + descale", "Backflush + boiler service"],
        ["Quarterly PM", "Operator-visit check", "Gasket + seal inspection", "Tech-visit PM + calibration"],
        ["Annual PM", "Replace if reliability declines", "Brew unit replacement or refurb", "Full strip + rebuild on burner units"],
        ["Filter change", "Every 6 months", "Every 6 months / 5-10k gal", "Every 6 months / 5-10k gal"],
      ],
    },
    {
      heading: "5. OCS vs. DIY framework",
      items: [
        { label: "Office Coffee Service (OCS)", value: "Operator owns equipment, breakdown service, water filter changes, descaling, supply replenishment, and refund flow. Predictable monthly per-cup or per-machine fee; typical SLA 24-48 hr response. Equipment refresh every 5-7 years." },
        { label: "DIY (admin orders pods)", value: "Admin orders supplies; in-house facilities or external tech handles breakdowns. Lower fixed cost; higher hidden cost in admin time + machine downtime + lost-day productivity." },
        { label: "Hybrid", value: "Employer owns the equipment; operator provides break/fix + filter + descale + supplies under a service contract. Common in headquarters environments where equipment is part of the brand-system." },
        { label: "Break-even line", value: "OCS is typically more economical above ~75 employees once admin time, downtime, and consumable-pricing leverage are accounted for." },
      ],
    },
    {
      heading: "6. Quality + experience controls",
      items: [
        { check: "SCA brew-ratio target 1:15 to 1:18 weight-based for filter coffee; 195-205°F brew temperature" },
        { check: "Bean freshness — within 4-8 weeks of roast date; rotate bean SKUs quarterly so the program doesn't stale" },
        { check: "Milk handling — refrigerated ≤41°F per FDA Food Code 2022 §3-501.16; daily flush of milk lines" },
        { check: "Decaf, non-dairy (oat, almond, soy), and unsweet/half-sweet syrup coverage" },
        { check: "Allergen signage on flavored / dairy options (FALCPA + FASTER Act top-9)" },
        { check: "Refund/credit flow for failed brews — kiosk / app / SMS / on-machine button" },
        { check: "Cup, sleeve, stir-stick, sugar/sweetener, napkin par levels audited weekly" },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an employer or property with operator partners equipped to deliver coffee-vending and OCS programs across all five categories above — including SCA-spec single-cup bean-to-cup, commercial bean-to-cup, traditional espresso, brew-by-pot, and pod/capsule formats. Programs are scoped per site after a discovery call covering headcount, shift mix, water infrastructure, and brand-experience tier.",
    },
  ],
  footer:
    "Informational reference. Confirm plumbing, electrical, and water-quality requirements with a licensed AHJ engineer for your jurisdiction. Standards citations current at publication; verify the latest version before contracting.",
});

console.log("wrote "+"coffee-vending-machines");
