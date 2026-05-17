import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-for-rehab-centers",
  assetType: "pack",
  title: "Rehab Center Vending Implementation Pack",
  subtitle: "Clinical coordination workflow, planogram by population, SLA framework",
  intro:
    "Rehab centers — inpatient rehab facilities (IRF), skilled nursing (SNF), substance-use disorder (SUD) facilities, behavioral health, and pediatric / adolescent rehab — operate under tight clinical control over food and beverage. A vending placement here is not a standard break-room install. This pack covers the clinical coordination workflow, population-specific planogram, and SLA framework tuned for rehab.",
  sections: [
    {
      heading: "1. Rehab populations + clinical constraints",
      paragraph:
        "Each rehab population has distinct dietary, behavioral, and safety constraints. The planogram, packaging, and machine choice must reflect them.",
      headers: ["Population", "Key constraints", "Planogram impact"],
      rows: [
        ["Inpatient rehab (IRF — post-stroke / TBI / orthopedic)", "Dysphagia, fluid restriction, diabetes mgmt", "Smaller portions, labeled carb counts, no thick-liquid violations"],
        ["Substance-use disorder (SUD)", "No alcohol-content products; mouthwash, vanilla extract concerns minimal in vending; FDA-approved nicotine replacement not in vending", "Avoid energy drinks > 200 mg caffeine; clear allergen labeling; review with clinical team"],
        ["Behavioral health (adult + adolescent)", "Ligature risk, sharps risk, food-substitute risk", "Cabinet anti-ligature design; secure mounting; no glass bottles; no items with cords / strings"],
        ["Pediatric rehab", "Choking hazard < 4 yo; allergen-aware; no high-caffeine", "Age-appropriate sizing; allergen highlight; caffeine ≤ 65 mg per serving"],
        ["Skilled nursing (SNF)", "CMS-regulated; modified diets; high diabetes prevalence", "Coordinate with RD; carb-labeled SKUs; portion-controlled"],
        ["Cardiac / pulmonary rehab", "Sodium-controlled, heart-healthy framework", "AHA Heart-Check; sodium ≤ 600 mg per SKU"],
      ],
    },
    {
      heading: "2. Clinical coordination workflow",
      paragraph:
        "Every rehab vending placement needs sign-off from clinical leadership. Build the workflow into the contract.",
      items: [
        { number: 1, title: "Clinical sponsor", description: "Medical director (IRF / SNF) or program director (SUD / behavioral) sponsors the placement and signs off on planogram framework." },
        { number: 2, title: "Registered Dietitian review", description: "RD reviews planogram against population's dietary plan; flags SKUs to exclude (high sodium, dysphagia risk, food-allergy clusters). RD review repeated quarterly." },
        { number: 3, title: "Behavioral health / SUD review", description: "Where applicable, behavioral health clinical lead reviews for ligature, sharps, food-substitute concerns. Adolescent unit may require additional restrictions." },
        { number: 4, title: "Patient safety committee", description: "Placement goes to patient safety committee for one-time approval + annual re-review." },
        { number: 5, title: "Family + patient handout", description: "If patients are independent shoppers, provide a family handout describing the framework, the safe SKUs, and the dietary considerations." },
        { number: 6, title: "Incident pathway", description: "Define the path for any vending-related clinical concern (e.g., dysphagia near-miss, allergen exposure) — typically incident reporting per Joint Commission PI.01.01.01." },
      ],
    },
    {
      heading: "3. Population-aware planogram framework",
      paragraph:
        "Rehab planograms vary by population. Below: example planogram axes for the major populations. Treat as starting points; RD-tuned per site.",
      headers: ["Category", "IRF (post-stroke)", "SUD (adult)", "Behavioral (adolescent)", "Cardiac rehab"],
      rows: [
        ["Water + low-cal hydration", "40%", "30%", "30%", "35%"],
        ["Carb-labeled snacks", "20%", "15%", "20%", "15%"],
        ["Protein bars (food-class)", "15%", "20%", "15%", "20%"],
        ["Caffeine (≤ 200mg/serving)", "5%", "10%", "0%", "5%"],
        ["Fresh fruit / yogurt (cold-chain)", "10%", "10%", "20%", "15%"],
        ["Sodium ≤ 600mg snacks (AHA Heart-Check)", "10%", "15%", "15%", "10%"],
      ],
    },
    {
      heading: "4. Equipment selection — behavioral + ligature considerations",
      paragraph:
        "Standard vending equipment carries multiple ligature anchor points (handles, hooks, cord-routes). Behavioral health placements need a hardened review.",
      items: [
        { label: "Cabinet mounting", value: "Floor-anchored (≥ 4 anchor points) per OSHA 1910.176 + NAMA tip-prevention; no exposed handles or hooks on cabinet exterior." },
        { label: "No glass bottles", value: "Exclude glass-bottle SKUs from behavioral + adolescent placements; specify aluminum cans and rigid plastic only." },
        { label: "Power cord", value: "Routed inside wall via NEC-compliant raceway; not exposed in patient area. Coordinate with facilities per IBC + NFPA 70." },
        { label: "Touchscreen vs button", value: "Some behavioral programs prefer non-touchscreen to reduce risk; verify with clinical lead." },
        { label: "Dispense bin design", value: "Anti-ligature dispense flap; no protruding spring or hook." },
        { label: "Service access controls", value: "Service door requires staff escort during operator visits in behavioral / SUD / adolescent settings." },
      ],
    },
    {
      heading: "5. Payment + cost handling",
      paragraph:
        "Rehab patient access to cash varies; many SUD and behavioral facilities restrict personal cash. Payment design needs to fit.",
      items: [
        { label: "Cashless + family-account", value: "Family / guarantor preloads patient account; patient redeems via fob or PIN. Avoids cash-on-person issues." },
        { label: "Hospital-issued credit", value: "Per-patient allowance (e.g., $20/week) loaded onto fob; covers staple SKUs." },
        { label: "Free baseline + paid premium", value: "Water + crackers free (facility funded); premium SKUs paid via family account." },
        { label: "Staff-only badge", value: "Staff badge unlocks staff-priced SKUs in staff break-room machines." },
        { label: "Caregiver / visitor cashless", value: "Standard cashless (Apple Pay / Google Pay / contactless card) on visitor-facing units." },
      ],
    },
    {
      heading: "6. SLA framework — rehab-aware",
      headers: ["Tier", "Issue", "Ack", "Resolution"],
      rows: [
        ["1", "Refrigeration excursion, payment outage, offline, security incident", "≤ 1 hour", "≤ 12 hours"],
        ["2", "Top-SKU stockout, planogram refresh", "4-12 hours", "≤ 48 hours"],
        ["3", "Tail SKU / signage / cosmetic", "24-48 hours", "5-7 days"],
        ["4", "Ligature-risk identified during routine inspection", "Same shift", "≤ 24 hours, machine offline until resolved"],
      ],
    },
    {
      heading: "7. Allergen + labeling discipline",
      paragraph:
        "Rehab populations frequently include patients with documented food allergies. FALCPA + state code applies + rehab clinical protocols may add restrictions.",
      items: [
        { check: "FALCPA 9 major allergens (21 USC §343) labeled on every SKU: milk, egg, fish, shellfish, tree nuts, peanuts, wheat, soybeans, sesame (added 2023)." },
        { check: "FDA Food Code §3-602.11 vending allergen-summary sign on machine face." },
        { check: "Per-SKU allergen sticker visible through glass (operator standard practice)." },
        { check: "Clinical RD reviews allergen mix at quarterly QBR; flags any concentration concern (e.g., high peanut concentration in pediatric unit)." },
        { check: "Allergen-incident protocol: any patient allergen exposure logged per Joint Commission PI.01.01.01 + reviewed by clinical team." },
        { check: "Operator product recall protocol: 24-hour pull of any recalled SKU per FDA / USDA recall notification." },
      ],
    },
    {
      heading: "8. Measurement + reporting",
      headers: ["Metric", "Source", "Cadence"],
      rows: [
        ["Per-SKU velocity by unit", "Operator telemetry", "Monthly"],
        ["Planogram framework compliance", "Operator audit + RD spot-check", "Quarterly"],
        ["Stockout + spoilage", "Operator report", "Monthly"],
        ["Allergen / incident log", "Hospital incident system", "Monthly"],
        ["Patient + family experience survey (where applicable)", "Patient experience team", "Quarterly"],
        ["Clinical RD planogram review sign-off", "Clinical sponsor", "Quarterly"],
        ["EOC documentation pack", "Operator + facilities", "Annual"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver rehab center vending programs aligned with clinical, behavioral, and dietary requirements.",
});

console.log("wrote "+"vending-for-rehab-centers");
