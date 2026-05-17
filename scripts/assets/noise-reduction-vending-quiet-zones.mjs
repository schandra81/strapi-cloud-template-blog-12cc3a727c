import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "noise-reduction-vending-quiet-zones",
  assetType: "playbook",
  title: "Warehouse Quiet-Zone Vending Playbook",
  subtitle: "Placement strategy, low-noise equipment specification, acoustic infrastructure",
  intro:
    "Warehouse quiet zones — designated break areas adjacent to noise-controlled work cells, hearing-conservation zones, recorded-call rooms, or quality-control areas — cannot host standard vending. Refrigeration compressors, dispense mechanics, and dropping cans push standard equipment to 55-72 dBA at 1 m, which violates the quiet-zone purpose. This playbook codifies placement, equipment spec, and acoustic infrastructure that keeps the quiet zone quiet.",
  sections: [
    {
      heading: "1. Quiet-zone classification",
      paragraph:
        "Classify the placement against the target ambient level. Quiet-zone vending placement design follows the same hierarchy.",
      items: [
        { label: "Q1 — Library / recorded-call / studio quiet", value: "Target ambient ≤ 35 dBA. No vending inside; vending placement is in a vestibule or 30+ ft offset behind sound-rated wall." },
        { label: "Q2 — Hearing-conservation break room", value: "Target ambient ≤ 50 dBA per OSHA 1910.95 hearing-conservation program intent. Low-noise equipment + enclosure required." },
        { label: "Q3 — Standard breakroom adjacent to quiet work", value: "Target ambient ≤ 60 dBA. Low-noise equipment; enclosure optional." },
        { label: "Q4 — Standard breakroom (no quiet constraint)", value: "No constraint; standard equipment acceptable." },
      ],
    },
    {
      heading: "2. Low-noise equipment specification",
      headers: ["Equipment type", "Standard dBA at 1m", "Low-noise spec dBA at 1m", "Source"],
      rows: [
        ["Snack glass-front", "45-55 (steady)", "≤ 42 (Crane Merchant Combo low-noise variant; AMS Sensit 3 quiet kit)", "Manufacturer spec sheet"],
        ["Cold beverage glass-front", "55-65 (compressor cycle)", "≤ 48 (Royal RVCC quiet kit; Vendo 821 low-noise package)", "Manufacturer spec sheet"],
        ["Refrigerated food", "55-65 (compressor + can-drop)", "≤ 50 (Crane Merchant Media quiet kit)", "Manufacturer spec sheet"],
        ["Frozen", "60-72 (compressor cycle)", "≤ 55 (Crane 158 frozen quiet kit)", "Manufacturer spec sheet"],
        ["Coffee tower / bean-to-cup", "55-72 (grinder + brew)", "≤ 55 sustained + ≤ 65 peak during brew (Crane Café System Quiet; Franke Sinfonia Quiet)", "Manufacturer spec sheet"],
        ["Ice-maker (where present)", "60-70 (cycle)", "Site away from quiet zone or specify low-noise ice variant (Hoshizaki KM-Q series)", "Manufacturer spec sheet"],
      ],
    },
    {
      heading: "3. Placement design for Q1-Q2 zones",
      items: [
        { number: 1, title: "Vestibule offset", description: "Q1 placement is in a vestibule or alcove separated from the quiet zone by a sound-rated door (STC 35+) and a 6-10 ft pass-through corridor. Workers exit the quiet zone, transit corridor, reach vending." },
        { number: 2, title: "Wall transmission", description: "Q2 wall between breakroom + quiet work area STC 45-50 (gypsum + insulation + double-stud common construction)." },
        { number: 3, title: "Floor + ceiling isolation", description: "Equipment on isolation pad (vibration absorbing rubber/cork) to reduce structure-borne transmission. Ceiling tile NRC ≥ 0.70 in breakroom." },
        { number: 4, title: "Dispense bin design", description: "Soft-drop dispense (no can-drop into metal bin); padded or angled bin reduces impact. Low-noise equipment kits include padded bin." },
        { number: 5, title: "Compressor scheduling", description: "Some equipment supports compressor-pause scheduling (e.g., during recorded-call windows). Telemetry-controlled where applicable." },
      ],
    },
    {
      heading: "4. Acoustic infrastructure",
      paragraph:
        "Beyond equipment, the breakroom itself needs treatment to keep ambient levels in target. Treatment is one-time capex paired with low-noise equipment selection.",
      items: [
        { check: "Wall partition STC 45-50 between breakroom + quiet work zone (Q2-Q3); STC 55+ (Q1)" },
        { check: "Sound-rated door STC 35+ (Q2-Q3) or STC 45+ (Q1) on the breakroom-quiet zone threshold" },
        { check: "Ceiling tile NRC ≥ 0.70 in breakroom; baffles or clouds for high-ceiling spaces" },
        { check: "Wall-mounted acoustic panels (NRC ≥ 0.85) on 25-50% of wall surface in breakroom" },
        { check: "Floor isolation pad under refrigerated equipment to dampen vibration to slab" },
        { check: "Air-handler grille selection — low-velocity diffusers to avoid HVAC contribution to ambient" },
        { check: "Quiet-zone signage posted at boundary with target dBA + worker reporting path" },
      ],
    },
    {
      heading: "5. Operational support structure",
      items: [
        { label: "Restock cadence", value: "Telemetry-driven. Restock visits scheduled during non-quiet windows where applicable (shift change, lunch, dinner)." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain, payment — <24 hr ack + <24 hr resolution. Acoustic kit failure (e.g., compressor noise spike) flagged as Tier 1." },
        { label: "Acoustic verification", value: "dBA measurement at 1 m from equipment + at quiet-zone boundary on install + annually. Operator provides measurement report." },
        { label: "Telemetry alert — noise", value: "Compressor runtime + cycle frequency tracked; abnormal cycle pattern flags potential refrigeration issue before audible noise complaint." },
      ],
    },
    {
      heading: "6. Compliance + safety overlay",
      items: [
        { check: "OSHA 1910.95 hearing-conservation program — vending placement does not undermine engineering controls in adjacent work areas" },
        { check: "ANSI/NAMA 2-2011 §4 — 36 in. service clearance maintained (acoustic enclosure design does not block service)" },
        { check: "ADA 2010 Standards §305 + §308 — clear-floor-space + reach range maintained behind acoustic curtains or enclosures" },
        { check: "FDA 21 CFR §101.8 — calorie disclosure visible (acoustic panels do not obscure)" },
        { check: "FALCPA + ADA — allergen + accessibility signage placement preserved" },
        { check: "NFPA + AHJ — any enclosure construction permitted; no obstruction of sprinkler coverage or egress" },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Ambient dBA at quiet-zone boundary", "≤ Q-tier target (35 / 50 / 60)", "Annual + on issue"],
        ["Equipment dBA at 1 m", "≤ low-noise spec", "Annual"],
        ["Compressor cycle frequency", "Within mfr spec ± 10%", "Telemetry — continuous"],
        ["Noise complaint count", "0 per quarter", "Quarterly"],
        ["Uptime", "≥ 98%", "Monthly"],
        ["Tier 1 resolution time", "< 24 hr", "Monthly"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator + low-noise equipment selection, acoustic infrastructure scoping, and dBA verification for warehouse quiet-zone vending placements.",
});

console.log("wrote "+"noise-reduction-vending-quiet-zones");
