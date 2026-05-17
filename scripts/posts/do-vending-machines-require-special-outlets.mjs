import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-vending-machines-require-special-outlets", [
  tldr({
    heading: "Do vending machines need special electrical outlets?",
    paragraph:
      "Most vending machines run on standard 120V 20-amp grounded outlets, but not standard 15-amp outlets — that's the most common installation mistake. Snack-only machines draw 3-5 amps at peak; beverage and combo machines with refrigeration draw 8-15 amps at peak (compressor startup spikes). Sharing a 15A circuit with a coffee maker, microwave, or copier reliably trips the breaker. Best practice: dedicated 20A circuit per refrigerated machine; shared 20A circuit for two snack-only machines is acceptable. Larger machines (ice cream freezers, AI-cooler refrigerated walls, multi-zone combo units) sometimes need 240V/30A. GFCI is required in some occupancies (kitchens, outdoor, near water); surge protection is recommended everywhere. Operators specify the electrical requirement at install survey; if your spec doesn't match, plan for an electrician before machine delivery (not after).",
    bullets: [
      { emphasis: "20A circuit, not 15A:", text: "Standard residential 15A outlets handle 12A continuous; refrigerated vending machines exceed this on compressor startup. Tripping breakers, refrigeration cycling, and warranty issues follow. 20A dedicated circuit is the baseline." },
      { emphasis: "Dedicated circuit per refrigerated machine:", text: "Sharing a 20A circuit between a beverage machine and any other appliance (coffee maker, copier, microwave) reliably trips during simultaneous load. Dedicated circuit prevents the failure mode." },
      { emphasis: "Larger machines need more:", text: "Ice cream freezers, AI-cooler walls, and multi-zone combo machines can need 240V/30A. Specs vary by manufacturer; verify at install survey, not after delivery." },
    ],
  }),
  statStrip({
    heading: "Vending machine electrical benchmarks",
    stats: [
      { number: "120V / 20A", label: "standard requirement", sub: "most refrigerated machines", accent: "blue" },
      { number: "8-15 A", label: "peak draw", sub: "with compressor startup", accent: "blue" },
      { number: "$150-500", label: "circuit installation", sub: "if not already present", accent: "orange" },
      { number: "240V / 30A", label: "larger machines", sub: "ice cream / AI cooler walls", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Vending machine electrical requirements by type",
    sub: "Per-machine requirement varies by refrigeration, freezer, and capacity. Verify the operator's spec sheet before install.",
    headers: ["Machine type", "Voltage", "Amperage", "Notes"],
    rows: [
      ["Snack-only (non-refrigerated)", "120V", "15-20A dedicated or shared", "Light load; sharing acceptable with planning"],
      ["Beverage (single-zone refrigerated)", "120V", "20A dedicated", "Refrigeration cycle requires dedicated circuit"],
      ["Combo (snack + beverage)", "120V", "20A dedicated", "Refrigeration zone drives requirement"],
      ["Frozen / ice cream", "120V or 240V", "20-30A dedicated", "Verify spec — some need 240V"],
      ["AI cooler wall (refrigerated, multi-zone)", "120V or 240V", "20-30A dedicated", "Larger units lean 240V"],
      ["Specialty (coffee, fresh)", "120V", "20A dedicated; some need plumbing", "Coffee/fresh add water-supply spec"],
      ["Outdoor / weatherized", "120V", "20A dedicated + GFCI + weatherproof outlet", "GFCI required by NEC"],
    ],
  }),
  specList({
    heading: "Electrical installation specifications",
    items: [
      { label: "Circuit dedication", value: "Dedicated 20A circuit per refrigerated machine. Sharing with other loads (microwave, coffee, copier) triggers breaker trips during simultaneous use. Snack-only machines can share with another snack machine on the same 20A circuit." },
      { label: "Outlet type", value: "Standard NEMA 5-20R (T-slot) for 20A circuits. Some installations use NEMA 5-15R (standard 3-prong) but on a 20A circuit — code permits this but verify with local AHJ (Authority Having Jurisdiction)." },
      { label: "Ground integrity", value: "Three-prong grounded outlet is mandatory. Two-prong outlets or improperly grounded receptacles will fail operator install survey. Older buildings sometimes have ungrounded outlets despite three-prong appearance — test before install." },
      { label: "GFCI requirement", value: "NEC requires GFCI for outlets in kitchens, bathrooms, outdoor, basements (in some jurisdictions), and within 6 ft of water. Vending machines in cafeterias, breakrooms with sinks, and outdoor placements need GFCI. Compressor inrush can nuisance-trip GFCI; specify GFCI-compatible electronics with operator." },
      { label: "Surge protection", value: "Surge protector at outlet or dedicated whole-circuit surge device recommended. Modern cashless payment hardware is surge-sensitive; replacement cost $300-800. Surge protection cheap insurance." },
      { label: "Plumbing & drainage (specialty machines)", value: "Coffee, espresso, ice machines, and some AI coolers need water supply (1/4 inch RO line typical) and drain. Plan plumbing alongside electrical at install survey, not after." },
      { label: "Voltage stability check", value: "Verify voltage at outlet under load (line voltage often drops 5-10% with compressor inrush). If voltage drops below 108V, refrigeration suffers and warranty may not apply. Some sites need transformer or line conditioner." },
      { label: "Generator / emergency power tie-in", value: "Where emergency-vending capability is a requirement (airports, hospitals, emergency operations centers), machines should be on backup generator circuit. Coordinate with facilities at install survey." },
    ],
  }),
  decisionTree({
    heading: "Does our location need an electrical upgrade for vending?",
    question: "Does the proposed machine location have a dedicated 20A grounded outlet within 6 feet, with no shared appliances on the same circuit?",
    yesBranch: {
      title: "Install-ready — operator schedules delivery",
      description: "Standard configuration. Operator install crew handles placement, leveling, plug-in, and telemetry verification. Total install typically 1-2 hours.",
      finalTone: "go",
      finalLabel: "Schedule install",
    },
    noBranch: {
      title: "Schedule electrician before machine delivery",
      description: "Most common path. Licensed electrician installs dedicated 20A circuit ($150-500 typical for short runs, $500-1,200 for longer runs or panel upgrades). Schedule electrician 2-4 weeks before machine delivery; verify with operator before final scheduling.",
      finalTone: "go",
      finalLabel: "Electrician first",
    },
  }),
  tipCards({
    heading: "Five electrical installation mistakes",
    sub: "Each is documented in operator install-survey reviews. All preventable with proper electrical planning.",
    items: [
      { title: "Plugging refrigerated machine into a 15A circuit", body: "Most common installation mistake. Compressor inrush exceeds 15A breaker; breaker trips intermittently. Machine appears 'broken' when it's actually the circuit. Operators bear the support cost; site bears the customer-trust cost. Specify 20A dedicated up front." },
      { title: "Sharing the circuit with a coffee maker or microwave", body: "When the coffee maker runs simultaneously with vending compressor cycle, the breaker trips. Workers blame the vending machine. The fix is rewiring; the prevention is dedicated circuit at install." },
      { title: "Two-prong or ungrounded outlets", body: "Older buildings sometimes have three-prong outlets that aren't actually grounded (lost when the building was rewired). Test with a $5 outlet tester before install. Ungrounded outlet voids warranty and can cause cashless hardware faults." },
      { title: "Skipping GFCI in required occupancies", body: "Kitchens, breakrooms with sinks, outdoor placements need GFCI. NEC requires it; AHJ inspects. Skipping GFCI in required occupancy = installation fails inspection. Plan GFCI at install survey, coordinate with the operator for compatible hardware." },
      { title: "No surge protection on cashless hardware", body: "Cashless boards (Cantaloupe, Nayax, USConnect) cost $300-800 to replace. A single surge event can wipe them out. Surge protector at outlet ($30-60) or whole-circuit surge ($150-300) is cheap insurance. Standard install practice for newer operators." },
    ],
  }),
  inlineCta({
    text: "Want the vending machine electrical install checklist (voltage, circuit, GFCI, plumbing)?",
    buttonLabel: "Get the install checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine installations across offices, schools, campuses, and institutional sites — coordinating with facilities, licensed electricians, and AHJs on electrical specifications. The amperage benchmarks and code compliance guidance reflect operator-side install data and NEC standards.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Can I plug a vending machine into a regular outlet?", answer: "Snack-only machines: usually yes, on a 20A circuit. Refrigerated machines (beverage, combo, frozen): no — they need a dedicated 20A grounded outlet. 15A circuits trip the breaker on compressor startup. The most common installation mistake is using 15A circuits for refrigerated machines.", audience: "Property Managers" },
      { question: "What if my outlet is only 15A?", answer: "Schedule an electrician to upgrade to 20A before machine delivery. $150-500 typical for short circuit runs from the panel. Operator install crew won't proceed with a 15A circuit on a refrigerated machine because warranty and reliability depend on proper circuit.", audience: "Property Managers" },
      { question: "Do vending machines need GFCI outlets?", answer: "Depends on the occupancy. Kitchens, breakrooms with sinks, outdoor placements, and basements (in some jurisdictions) require GFCI per NEC. Plain office, hallway, and academic placements don't. Verify with operator at install survey; AHJ has final say.", audience: "Facilities" },
      { question: "Do larger machines need 240V?", answer: "Some. Ice cream / freezer units, AI cooler walls with multi-zone refrigeration, and some specialty machines need 240V/30A. Verify spec sheet at install survey. Standard refrigerated snack/beverage/combo machines run on 120V/20A.", audience: "Facilities" },
      { question: "What's the difference between dedicated and shared circuits?", answer: "Dedicated: this circuit only powers this machine. Shared: this circuit powers multiple devices. Refrigerated vending should be dedicated to avoid breaker trips from simultaneous loads. Snack-only machines can sometimes share with another snack machine.", audience: "Facilities" },
      { question: "What about surge protection?", answer: "Recommended everywhere; sometimes required. Cashless payment hardware costs $300-800 to replace after a surge. Surge protector at the outlet ($30-60) or whole-circuit surge ($150-300) is cheap insurance. Modern operators specify it at install.", audience: "Facilities" },
      { question: "Can I use an extension cord?", answer: "No. Extension cords aren't rated for continuous load; they overheat and fail. Many operators void warranty if a machine is on an extension cord. Schedule electrical work to get a proper outlet within 6 feet of the machine.", audience: "Property Managers" },
      { question: "What if the install crew finds the circuit doesn't meet spec?", answer: "They'll halt install, document the issue, and reschedule. The site needs to schedule an electrician before reinstall. Operator install crew can't risk warranty by installing on a non-spec circuit. Plan electrical work ahead to avoid reschedule fees.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing commercial outlet, GFCI, and circuit requirements" },
      { label: "NEMA — outlet standards", url: "https://www.nema.org/", note: "Outlet and plug standard reference for 5-15R / 5-20R configurations" },
      { label: "ENERGY STAR — vending machine certification", url: "https://www.energystar.gov/products/commercial_food_service_equipment", note: "Federal energy efficiency program; energy consumption baseline data" },
      { label: "NAMA — vending equipment installation standards", url: "https://www.namanow.org/", note: "Industry guidance on vending installation and electrical compliance" },
      { label: "OSHA — workplace electrical safety", url: "https://www.osha.gov/", note: "Workplace electrical compliance referenced in vending installation" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and installation guides",
    items: [
      { eyebrow: "Sister guide", title: "How are vending machines installed?", description: "End-to-end installation process — site survey, electrical, delivery, setup, and verification.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Operations", title: "How much weight does a vending machine hold?", description: "Floor load, stocked weight, and structural considerations for vending placements.", href: "/vending-faq/how-much-weight-does-a-vending-machine-hold" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, installation, and ongoing operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
