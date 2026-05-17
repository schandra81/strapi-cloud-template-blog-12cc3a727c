import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-choose-office-coffee-service",
  assetType: "matrix",
  title: "Office Coffee Service Selection Framework",
  subtitle: "RFP + capability matrix + service model + bean tier + maintenance SLA",
  intro:
    "This framework gives facilities, HR, and procurement a structured way to evaluate office coffee service (OCS) providers. References to NSF/ANSI 4 commercial refrigeration, NSF/ANSI 18 manual dispensing equipment, UL 197 commercial electric cooking appliances, ENERGY STAR for commercial brewers, ADA Section 308 for accessible operable parts, and PCI-DSS 4.0 where the program includes account or payment-linked OCS.",
  sections: [
    {
      heading: "1. Service-model + capability matrix",
      paragraph:
        "OCS bids generally fall in three service models. Choose model first; then evaluate operators within model.",
      headers: ["Service element", "Self-serve (lease + supplies)", "Managed OCS", "Full barista service"],
      rows: [
        ["Equipment ownership", "Operator lease or sale", "Operator-owned", "Operator-owned + staff"],
        ["Bean / supply delivery", "Standing order", "Operator-managed", "Operator-managed"],
        ["Daily cleaning", "Host staff", "Operator weekly + host daily", "Operator daily"],
        ["Maintenance / repair SLA", "Service call basis", "≤ 24 hr Tier-1, ≤ 48 hr Tier-2", "On-site daily"],
        ["Cup / lid / stirrer / sugar / sweetener", "Standing order", "Operator-managed", "Operator-managed"],
        ["Water filter change", "Host coordinates", "Operator scheduled quarterly", "Operator scheduled monthly"],
        ["Descaling", "Host coordinates", "Quarterly operator visit", "Monthly operator visit"],
        ["Bean origin + certification options", "Catalog", "Catalog + custom", "Custom + estate-direct"],
        ["Plant-milk + condiment range", "Catalog", "Catalog + custom", "Custom"],
        ["Typical cost (per cup)", "$0.15-$0.30", "$0.30-$0.55", "$0.65-$1.50+"],
        ["Best fit", "Up to 200 cups/day; budget-driven", "200-1,000 cups/day; full-service", "1,000+ cups/day or premium hospitality"],
      ],
    },
    {
      heading: "2. Bean tier matrix",
      paragraph:
        "Bean tier is a major lever on per-cup cost and brand perception. Use the framework below to set expectations in the RFP.",
      headers: ["Tier", "Source profile", "Certification", "Per-lb operator cost", "Per-cup cost (est.)", "Best fit"],
      rows: [
        ["Tier 1 — commercial commodity", "Standard commercial blend", "None or limited fair-trade share", "$5-$8/lb", "$0.10-$0.15", "High-volume value-driven offices"],
        ["Tier 2 — certified blend", "Fair-trade + rainforest-alliance majority", "Fair-trade USA or Rainforest Alliance", "$8-$12/lb", "$0.15-$0.22", "Mainstream office programs"],
        ["Tier 3 — premium specialty", "Single-origin + craft roaster", "Direct-trade or organic", "$12-$18/lb", "$0.22-$0.35", "Premium offices, recruiting-focused"],
        ["Tier 4 — local / estate-direct", "Local roaster + named estate", "Custom certifications", "$18-$28/lb", "$0.35-$0.55", "Hospitality, executive, brand-forward"],
      ],
    },
    {
      heading: "3. Capability rubric + maintenance SLA",
      items: [
        { label: "Reference accounts (≥ 3 comparable offices ≥ 12 months in service)", value: "5 = ≥ 5 in matching size band; 3 = ≥ 3; 1 = none in size band." },
        { label: "Equipment specification + ENERGY STAR / NSF compliance", value: "Operator should provide model list with NSF/ANSI 4 + 18 certification + ENERGY STAR where commercially available." },
        { label: "Tier-1 service SLA (machine offline, brew failure)", value: "5 = ≤ 24 hr ack + resolution; 3 = ≤ 48 hr; 1 = no contractual SLA." },
        { label: "Tier-2 service SLA (descaling, filter, calibration)", value: "5 = scheduled per cadence + on-demand within 5 days; 3 = scheduled only; 1 = on-call." },
        { label: "Water filtration program", value: "5 = under-counter cartridge (3M / Everpure / Pentair) with documented replacement; 3 = scheduled; 1 = no filtration." },
        { label: "Bean origin + certification share", value: "5 = ≥ 50% fair-trade / rainforest-alliance / organic; 3 = ≥ 30%; 1 = no certification commitment." },
        { label: "Sustainability + cup waste", value: "5 = BPI-certified compostable cup option + recycling capture; 3 = recyclable cup; 1 = standard non-recyclable." },
        { label: "Account management + QBR cadence", value: "5 = quarterly QBR + monthly stand-up; 3 = quarterly QBR; 1 = annual review only." },
        { label: "Pricing transparency", value: "5 = published per-cup / per-month + supply pass-through detail; 3 = monthly statement; 1 = bundled invoice without detail." },
        { label: "Insurance + liability", value: "$2M GL + $1M umbrella + additional-insured endorsement; food product liability ≥ $1M." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Operator capability claims should be verified through reference calls and written attestation. LetUsVending can connect host teams with operators equipped to deliver OCS at the right service model and bean tier.",
});

console.log("wrote "+"how-to-choose-office-coffee-service");
