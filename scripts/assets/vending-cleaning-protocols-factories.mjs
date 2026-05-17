import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-cleaning-protocols-factories",
  assetType: "pack",
  title: "Manufacturing Vending Cleaning Protocol Pack",
  subtitle: "Cadence checklist, operator + facility responsibility split, documentation templates, GMP-zone coordination",
  intro:
    "Factory vending sits in a high-traffic, often particulate-heavy environment. Cleaning has to satisfy three audiences at once — workers (food contact surfaces), corporate QA (GMP / HACCP traceability where applicable), and EHS (heat-illness and allergen control). This pack defines cadence, responsibility split, documentation, and GMP-zone coordination.",
  sections: [
    {
      heading: "1. Standards reference",
      items: [
        { label: "FDA Food Code 2022", value: "Federal model code adopted by most state and local jurisdictions. Section 4-602 covers food-contact surface cleaning frequency. Vending machines that dispense potentially-hazardous food (sandwiches, fresh items, micro-market refrigerated) are in scope." },
        { label: "21 CFR Part 110 / Part 117 (cGMP for food)", value: "Applies if vending sits within a food-manufacturing GMP zone. Cleaning + traceability requirements escalate inside the zone." },
        { label: "NAMA standards reference", value: "National Automatic Merchandising Association publishes machine-cleaning guidance for refrigerated, ambient, and hot-beverage equipment." },
        { label: "OSHA 1910.141 — sanitation in the workplace", value: "Sets baseline expectations for break areas and food-handling adjacency." },
      ],
    },
    {
      heading: "2. Cleaning cadence — by surface and machine type",
      paragraph:
        "Frequencies below are the floor. Plant-specific GMP zones, allergen control programs, or local health-department adoptions may require higher frequency.",
      headers: ["Surface / area", "Cadence", "Tool / chemistry"],
      rows: [
        ["Selection buttons + card reader (high-touch)", "Daily", "Quaternary-ammonium wipe (food-safe, EPA-registered against norovirus / SARS-CoV-2)"],
        ["Glass front + cabinet exterior", "Daily", "Glass cleaner; microfiber cloth; non-streak"],
        ["Dispense bin + flap (food-contact)", "Weekly minimum; daily if fresh-food", "Food-safe sanitizer (chlorine 50-100 ppm or quat 200 ppm)"],
        ["Coin / bill validator opening", "Weekly", "Compressed air + dry microfiber (no liquid into mech)"],
        ["Refrigeration condenser coils", "Quarterly", "HVAC coil brush + vacuum; service-vendor or trained operator tech"],
        ["Refrigerated cabinet interior", "Monthly", "Empty + warm-water + food-safe sanitizer; verify gasket integrity"],
        ["Underneath / behind cabinet", "Quarterly", "Floor crew during deep clean; report particulate accumulation as condenser-airflow risk"],
        ["Door gaskets", "Monthly inspect; replace as needed", "Visual; replace if compressed, torn, or mildewed"],
      ],
    },
    {
      heading: "3. Operator vs. facility responsibility split",
      paragraph:
        "Define the split in the operator contract — not at the curb. Most disputes arise from undefined responsibility on cabinet exterior + floor area.",
      headers: ["Task", "Operator", "Facility"],
      rows: [
        ["High-touch surface daily wipe", "Restock visit", "Facility custodial backup between visits"],
        ["Glass + cabinet exterior", "Each visit", "Facility custodial daily"],
        ["Dispense bin interior", "Operator (food contact)", "—"],
        ["Refrigeration coils / interior", "Operator (technical)", "—"],
        ["Floor area within 3 ft of machine", "—", "Facility custodial"],
        ["Behind / beneath machine (quarterly)", "Operator + facility coordination", "Facility provides access; operator pulls + cleans"],
        ["Pest control (machine interior)", "Operator", "Facility provides perimeter IPM"],
      ],
    },
    {
      heading: "4. GMP-zone coordination — when vending sits inside or adjacent to GMP",
      paragraph:
        "Food, pharma, and personal-care manufacturing sites have GMP zones with elevated cleaning + traceability requirements. Vending should typically sit outside the GMP zone — in the break area, not on the production floor.",
      items: [
        { check: "Vending placement is outside the GMP zone unless specifically engineered (stainless cabinet, captive-key cleaning protocol, validated cleaning records)." },
        { check: "If adjacent to GMP zone, an air-lock or vestibule break area separates vending from process areas." },
        { check: "Cleaning chemistries selected from facility's approved chemistry list (no off-list chemicals introduced)." },
        { check: "Operator route driver cleared on GMP gown-up / hygiene requirements if they cross into adjacent zones." },
        { check: "Allergen control program reviewed — vended products with allergens (peanuts, tree nuts, milk, soy) must not contaminate adjacent GMP allergen-control zones." },
      ],
    },
    {
      heading: "5. Daily cleaning checklist (post on machine)",
      items: [
        { check: "Selection buttons + card reader wiped with food-safe disinfecting wipe." },
        { check: "Glass front + cabinet exterior wiped; no streaks, no fingerprints." },
        { check: "Dispense bin interior inspected; debris removed." },
        { check: "Trash + recycling bins within 5 ft emptied; floor clear of wrappers." },
        { check: "Spill check; no liquid pooling beneath cabinet." },
        { check: "Custodial initial + timestamp on cleaning log on machine face." },
      ],
    },
    {
      heading: "6. Weekly deep-clean checklist (operator)",
      items: [
        { check: "Dispense bin + flap sanitized (chlorine 50-100 ppm or quat 200 ppm)." },
        { check: "Door gaskets inspected; cleaned with mild detergent." },
        { check: "Selection-button surround sanitized." },
        { check: "Coin / bill validator opening cleared with compressed air." },
        { check: "Refrigerated cabinet interior temperature verified (35-40°F)." },
        { check: "Allergen labels on each SKU verified legible." },
        { check: "Cleaning entry logged in operator portal." },
      ],
    },
    {
      heading: "7. Documentation template — what to retain",
      paragraph:
        "Retention aligns with FDA Food Code recommendations and plant QA practice. Most facilities keep 2 years of cleaning records.",
      items: [
        { label: "Daily log", value: "On-machine cleaning log signed by custodial. Retained 90 days on-site, then archived." },
        { label: "Weekly + monthly", value: "Operator portal entry with timestamp, technician ID, chemistry used. Retained ≥ 2 years." },
        { label: "Quarterly deep clean", value: "Photo before / after; gasket inspection result; coil-cleaning verification. Retained ≥ 2 years." },
        { label: "Incident records", value: "Any pest sighting, spill, allergen-cross-contact, or temperature excursion. Retained per facility QA policy (commonly 3-5 years)." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to translate your facility's QA / GMP / EHS requirements into an operator cleaning specification and coordinate operator selection. The operator selected via this framework executes daily cleaning and retains documentation.",
    },
  ],
  footer:
    "Informational reference. Plant QA and EHS own the authoritative cleaning + allergen-control program; this pack supports operator coordination.",
});

console.log("wrote "+"vending-cleaning-protocols-factories");
