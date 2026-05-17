import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "snack-vending-for-construction-workers",
  assetType: "playbook",
  title: "Construction Site Snack Vending Playbook",
  subtitle: "High-calorie planogram, shift-transition restocking, outdoor-rated equipment, and dust/vibration tolerance",
  intro:
    "Construction workers expend 2,800-4,500 kcal per shift per the US Army Research Institute of Environmental Medicine occupational metabolism tables. Site vending must deliver calorie-dense, low-friction nutrition under outdoor, dust, vibration, and shift-transition constraints. This playbook covers equipment, planogram, restock cadence, and OSHA + ANSI hydration coordination for active job sites.",
  sections: [
    {
      heading: "1. Site classification and equipment hardening",
      paragraph:
        "Job-site placements range from a trailer-adjacent indoor setup to an exposed laydown yard. Equipment class follows the dust, vibration, and weather exposure profile.",
      headers: ["Site location", "Cabinet rating", "Dust/vibration spec", "Recommended class"],
      rows: [
        ["Site trailer or break room (climate-controlled)", "Indoor NEMA 1", "Standard", "AMS Sensit 3, USI 3535 — same as office"],
        ["Covered laydown area", "NEMA 3R / IP44", "MIL-STD-810G method 514.6 vibration-tolerant compressor mounts", "Crane Genesis outdoor, Royal Vendors RVRDV outdoor"],
        ["Exposed yard", "NEMA 4 / IP55, IP66 in coastal/saline", "Anti-pry hood, sealed gaskets, dust-filtered evaporator", "Outdoor-hardened with custom security and dust-filter package"],
      ],
    },
    {
      heading: "2. Outdoor and durability specification",
      items: [
        { label: "Temperature operating range", value: "-10 to 120°F continuous. Equipment selected for both winter-startup torque (refrigerant viscosity at low temp) and summer condenser performance at 105°F+ ambient." },
        { label: "Dust ingress protection", value: "IP55 minimum on cabinet seals; IP66 in coastal/saline or high-fine-dust environments (concrete, drywall, masonry sites). Dust filter on condenser intake replaced quarterly under the operator PM contract." },
        { label: "Vibration tolerance", value: "Compressor anti-vibration mounts (Lord Corporation Plateform or equivalent) rated for nearby heavy equipment operation. Mount machine on isolation pad if within 30 feet of pile-driving or compactor operations." },
        { label: "Surge and dirty-power protection", value: "Generator-powered sites: machine on dedicated 20A circuit with line conditioner (Tripp Lite LC2400) before the surge protector. Voltage regulator inside the cabinet (90-130V tolerance) on most outdoor-rated models." },
        { label: "Anti-vandalism", value: "Reinforced cabinet, anti-pry hood, blade-resistant glass on exposed sites, internal cage for cash vault. CCTV coverage from site security camera where available; otherwise GPS-tagged cellular alarm with door-open sensor." },
      ],
    },
    {
      heading: "3. High-calorie planogram",
      paragraph:
        "Construction worker metabolism justifies a planogram weighted toward calorie-dense, protein-balanced, and electrolyte-rich SKUs. The standard office planogram leaves a hungry shift workforce after 4 hours; the construction planogram targets 600-900 kcal per typical mid-shift purchase.",
      headers: ["Category", "Share of facings", "Kcal range", "Top SKUs"],
      rows: [
        ["Hydration + electrolyte", "25-30%", "0-200", "Bottled water (16.9 + 20 oz), Gatorade, Powerade, Liquid IV stick packs, Pedialyte"],
        ["Salty snacks", "20-25%", "300-500", "Lay's, Doritos, Cheetos, Cheez-It, peanuts, beef jerky"],
        ["Sweet + chocolate", "10-15%", "200-400", "Snickers, Twix, Reese's, M&Ms, granola bars"],
        ["Protein + meal replacement", "10-15%", "200-400", "Slim Jim, beef jerky, RXBAR, peanut-butter crackers, hard-boiled-egg pack"],
        ["Carbonated + energy", "10-15%", "0-300", "Coke, Mountain Dew, Red Bull, Monster, Celsius, RTD coffee"],
        ["Hearty / canned", "5-10%", "300-500", "Hormel Compleats (microwave), canned chili, soup cans, instant noodles where break room has microwave"],
      ],
    },
    {
      heading: "4. Shift-transition restocking",
      paragraph:
        "Construction shifts often run 6 AM - 2:30 PM and 2:30 PM - 11 PM. Restocking lands in the narrow window between shifts to avoid disrupting work and to ensure both shifts start with a full machine.",
      items: [
        { number: 1, title: "Pre-shift-1 restock", description: "Route arrives 5:00-5:45 AM to fully stock before 6:00 AM shift start. Cold-chain temp verified and logged per FDA Food Code 3-501.16 (35-40°F refrigerated, <40°F ready-to-eat protein)." },
        { number: 2, title: "Mid-shift telemetry top-off", description: "Telemetry triggers a mid-day top-off when any top-20 SKU drops below 30%. Operator route-management system (Cantaloupe Seed Pro, Nayax VPOS, USA Technologies) dispatches the closest route vehicle." },
        { number: 3, title: "Pre-shift-2 restock", description: "Route arrives 1:30-2:00 PM to refresh between shifts. Hot-temperature SKUs (chocolate, certain snacks) inspected for melt-damage and rotated during peak-heat months." },
        { number: 4, title: "Weekly deep restock", description: "Full restock and planogram refresh once per week. Equipment cleaned, dust filter inspected, vault collected, refund log reviewed, and FALCPA allergen signage refreshed." },
      ],
    },
    {
      heading: "5. OSHA hydration and break-area coordination",
      paragraph:
        "OSHA 1926.51 mandates potable water on construction sites; site superintendents often supplement with electrolyte programs during summer per OSHA-NIOSH Heat Illness Prevention guidance. The vending program coordinates with — not replaces — the mandatory hydration program.",
      items: [
        { check: "Vending machine placement does not obstruct OSHA-required water-cooler access or hand-wash stations." },
        { check: "Electrolyte SKUs (Gatorade, Liquid IV) priced at or below site convenience-store rate so workers aren't penalized for buying hydration." },
        { check: "OSHA-NIOSH heat-illness flyer posted within 10 feet of machine in summer months; phone number for site safety officer printed on machine signage." },
        { check: "Break-area coordination with site superintendent: machine location, power circuit, restock-vehicle access, and after-hours security plan documented in the placement agreement." },
        { check: "Cold-chain attestation per FDA Food Code 3-501.16 maintained for refrigerated SKUs; temp log available on operator request within 24 hours." },
      ],
    },
    {
      heading: "6. Site-mobility plan",
      items: [
        { label: "Equipment relocation", value: "Construction sites evolve in 3-6 month phases. Operator includes 2 site-relocations per year in the standard placement agreement (forklift access, power-circuit transfer, telemetry IP refresh)." },
        { label: "Job-end demobilization", value: "60-day notice to operator for site demobilization; operator removes equipment, settles commissions, and credits any unused tokens or app credits." },
        { label: "Multi-site GC contract", value: "General contractors with 5+ active sites typically negotiate a master agreement: pooled equipment, single point-of-contact, consolidated billing, and quarterly commission across all sites. Discount of 1-2% on equipment fees common in this structure." },
        { label: "Trailer pad and concrete requirements", value: "Machines require level pad, 4×8 minimum, capable of supporting 800-1,200 lb dressed equipment. Operator delivers leveling shims at install." },
      ],
    },
    {
      heading: "7. Commission and revenue share",
      headers: ["Site volume (monthly gross/machine)", "Site share", "Operator share", "Notes"],
      rows: [
        ["Under $500", "0-8%", "92-100%", "Small sub-contractor sites; commission often waived to keep program economic"],
        ["$500-$1,200", "10-15%", "85-90%", "Standard mid-size jobsite"],
        ["$1,200-$2,500", "15-22%", "78-85%", "High-volume major-project sites"],
        ["Over $2,500", "22-28%", "72-78%", "Mega-project or multi-machine campus; competitive bid range"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate equipment hardening, planogram, and shift-restock cadence to your site phase, climate zone, and shift schedule.",
});

console.log("wrote "+"snack-vending-for-construction-workers");
