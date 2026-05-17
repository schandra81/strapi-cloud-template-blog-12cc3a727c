import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hospital-vending-placement-guide",
  assetType: "pack",
  title: "Hospital Vending Placement Pack",
  subtitle: "Zone-by-zone planogram, RFP template, infection control checklist, ADA audit framework",
  intro:
    "Hospital vending placement is a multi-stakeholder decision. This pack covers zone-by-zone planogram guidance, an RFP template, an infection-control checklist, and the ADA audit framework needed for placement, contract, and ongoing operation.",
  sections: [
    {
      heading: "1. Zone-by-zone planogram framework",
      paragraph:
        "Hospital traffic and dwell time vary dramatically by zone. A 'one planogram fits all' approach wastes capacity. Define per-zone planograms in the contract.",
      headers: ["Zone", "Audience", "Dwell time", "Top categories"],
      rows: [
        ["Main lobby / visitor entrance", "Visitors", "5-15 min", "Beverages, gift, comfort snacks"],
        ["ED waiting", "Patient family", "2-6 hours", "Beverages, family snacks, charging-adjacent"],
        ["Surgery / OR family waiting", "Patient family", "2-8 hours", "Coffee + meal-replacement + comfort"],
        ["Patient unit family rooms", "Patient family", "Variable", "Quiet snacks, comfort SKUs, no high-noise items"],
        ["Staff break rooms (24/7)", "Clinicians + staff", "10-30 min", "Meal-replacement, healthy beverage, caffeine"],
        ["Cafeteria adjacency", "All", "Variable", "Backup-coverage planogram (overnight when cafe closed)"],
        ["NICU / pediatric family lounge", "Patient family", "Long stay", "Family snacks, hydration, kid-friendly"],
        ["Outpatient lobbies / clinics", "Outpatients + drivers", "30-90 min", "Beverages, light snacks, comfort"],
      ],
    },
    {
      heading: "2. RFP template — what every operator must respond to",
      items: [
        { check: "Operator company profile: years in healthcare, healthcare clients (named or anonymized), fleet size, geographic coverage." },
        { check: "Equipment: per-location proposal with make + model + ENERGY STAR 4.0 + AHRI 810-2016 / SNAP refrigerant attestation." },
        { check: "Telemetry stack: vendor, heartbeat interval, temperature alerting, dashboard access for hospital materials management." },
        { check: "Per-zone planogram proposal aligned with zone framework above + FALCPA per-SKU allergen labeling." },
        { check: "Healthy-beverage framework attestation (AHA, PHA, NEMS-V, or Kaiser equivalent)." },
        { check: "Service SLA proposal with tier definitions + acknowledgement + resolution targets + credit / penalty for misses." },
        { check: "Infection-prevention compatibility: surface materials, disinfectant compatibility (CDC EPA List N), cleaning workflow." },
        { check: "ADA Section 305 + 308 attestation per unit (clear floor space, reach range, operating force ≤ 5 lbf)." },
        { check: "Joint Commission EOC documentation pack — sample provided." },
        { check: "Commission schedule + foundation / auxiliary share." },
        { check: "Insurance: GL $2M/$4M, product liability $2M, auto $1M, workers comp; certificate naming hospital as additional insured." },
        { check: "Term + renewal + termination terms." },
        { check: "References from at least 3 hospital deployments." },
      ],
    },
    {
      heading: "3. Infection control checklist",
      paragraph:
        "Infection prevention (IP) reviews every food and beverage placement. The checklist below maps to CDC, Joint Commission EOC.02.06.05, and AIA / FGI Guidelines for Hospital Design (2022).",
      items: [
        { check: "Cabinet exterior materials compatible with EPA List N disinfectants (effective 2024)." },
        { check: "No fabric, upholstery, or porous surfaces on cabinet exterior." },
        { check: "Base raised ≥ 4 inches off the floor or fully sealed to floor for cleanability per AIA / FGI 2022." },
        { check: "Card reader + touchscreen surfaces wipeable without damage; oleophobic / antimicrobial coating preferred." },
        { check: "Dispense mechanism stainless or polymer with no horizontal dust-collection ledges." },
        { check: "Refrigerated cabinet self-defrost drain piped to floor drain or evaporator pan with anti-microbial liner." },
        { check: "Air-cooled condenser intake ≥ 6 inches from any wall; cleanable monthly per OEM spec." },
        { check: "EVS daily wipe-down high-touch surfaces (selection pad, card reader, dispense door) per IP protocol." },
        { check: "Outbreak protocol: terminal clean of cabinet + 6-foot perimeter during communicable-disease event." },
        { check: "No live or fresh-cut flowers in any vending placement (CDC ICU + IP guidance for immunocompromised patient adjacencies)." },
      ],
    },
    {
      heading: "4. ADA audit framework",
      paragraph:
        "Every hospital vending placement is a public-accommodation surface under ADA Title III. ADA audit happens at install and annually thereafter.",
      headers: ["ADA spec", "Section", "Verification method"],
      rows: [
        ["Highest operable part ≤ 48 in AFF (unobstructed forward)", "308.2.1", "Tape-measure verification at install"],
        ["Lowest operable part ≥ 15 in AFF", "308.2.1", "Tape-measure verification at install"],
        ["Clear floor space 30 in × 48 in", "305", "Floor-plan + on-site verification"],
        ["Operating force ≤ 5 lbf, no tight grasping", "309.4", "Push-pull force gauge at install"],
        ["Card reader + dispense bin reach + force compliance", "309.4 + 308", "Combined verification"],
        ["Character contrast ≥ 70% for pricing display", "703", "Sign + label inspection"],
        ["Tactile braille labels (federal placements / state code)", "703.3 + 703.4", "Verification at install"],
        ["Operator written attestation + annual recertification", "Contract clause", "Annual document review"],
      ],
    },
    {
      heading: "5. Stakeholder approval map",
      paragraph:
        "Hospital placements require approval from multiple roles. Map the approvals before submitting the placement proposal.",
      items: [
        { label: "Materials management / supply chain", value: "Contract owner; runs RFP + vendor management." },
        { label: "Facilities + plant operations", value: "Power, ADA, fire egress (IBC + NFPA 101), placement footprint." },
        { label: "Infection prevention", value: "Surface compatibility, cleaning protocol, outbreak response." },
        { label: "Nutrition / food service", value: "Healthy-beverage + healthy-food framework adherence." },
        { label: "Auxiliary / volunteer foundation", value: "Where revenue routes to foundation programs." },
        { label: "Patient experience", value: "HCAHPS implications, zone fit." },
        { label: "Compliance / Joint Commission readiness", value: "EOC documentation pack alignment." },
        { label: "Risk management", value: "Insurance + indemnification review." },
        { label: "Security", value: "Sight lines, duress alarm, after-hours access." },
        { label: "Legal", value: "Contract terms, BAA-applicability review (typically not — vending isn't HIPAA-scoped unless integrated with patient records)." },
      ],
    },
    {
      heading: "6. Power + electrical spec",
      items: [
        { label: "Refrigerated cabinet", value: "Dedicated 120V/20A circuit per NEC Article 422. GFCI per NEC 210.8 in damp / public areas." },
        { label: "Ambient snack", value: "Dedicated 120V/15A circuit." },
        { label: "Charging station adjacency", value: "Separate 120V/20A circuit; UL 2738 multi-port charger; tamper-resistant outlets per NEC 406.12." },
        { label: "Emergency power", value: "Verify whether the placement is on emergency power feed (typically only ED / critical-care). Most break-room and lobby vending runs on normal power per NFPA 99 §6.3." },
        { label: "UL listing", value: "Vending: UL 541 (refrigerated commercial) or UL 751 (vending machine, dry); micro-market cabinets per UL 471 (commercial refrigerators)." },
      ],
    },
    {
      heading: "7. Fire egress + life safety",
      items: [
        { check: "Cabinet does not reduce egress corridor below 44 in min width per IBC §1018.2." },
        { check: "Cabinet does not block sight lines to exit signage or duress alarms." },
        { check: "Cabinet anchored to floor or wall per NAMA + manufacturer + OSHA 1910.176 storage stability." },
        { check: "Combustible loading + smoke detector spacing: do not place vending under sprinkler-deflector shadow that would obstruct spray pattern (NFPA 13 §10.2.7.4)." },
        { check: "Annual fire-marshal walk-through; documented in EOC compliance file." },
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["Stakeholder kickoff + zone mapping", "30-45 days", "Materials mgmt + stakeholders"],
        ["RFP issuance + operator responses", "30-45 days", "Materials mgmt"],
        ["Operator interviews + references", "30 days", "Materials mgmt"],
        ["Contract negotiation", "30-45 days", "Legal"],
        ["Site review (IP, fire, ADA, power)", "30-45 days", "Facilities + IP + ADA coordinator"],
        ["Equipment install + commissioning", "5-15 days per site", "Operator + facilities"],
        ["Soft launch + first audit", "30 days", "Operator + stakeholders"],
        ["Quarterly business review cadence begins", "Quarter 2", "Operator + materials mgmt"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to navigate the full hospital placement framework above.",
});

console.log("wrote "+"hospital-vending-placement-guide");
