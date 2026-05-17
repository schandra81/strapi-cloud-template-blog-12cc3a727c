import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-install-vending-in-your-warehouse",
  assetType: "checklist",
  title: "Warehouse Vending Install Verification Checklist",
  subtitle: "Site survey + electrical scope + cellular + 3-shift planogram + ANSI / OSHA placement",
  intro:
    "Warehouses and distribution centers require an install scope that mid-rise office HVAC + 9-to-5 placements never face: ambient temperature swings, 24/7 operation, three shifts, forklift traffic, and OSHA egress + emergency-eyewash + storage-rack interaction. This checklist gives the facility manager, EHS lead, and procurement officer a contract-ready pre-install survey and a 30/60/90 day startup audit. Operator should attest in writing to each item.",
  sections: [
    {
      heading: "1. Pre-install site survey",
      paragraph:
        "Conduct the site survey with operator, facility manager, and EHS lead present. Document every measurement with photos. Retain in procurement file.",
      items: [
        { check: "Floor load: machine + product weight ~700-1,000 lbs; verify floor rating per ASCE 7-22 (typical warehouse slab ≥ 250 psf — far above requirement)." },
        { check: "Doorway clearance to placement: ≥ 36 in wide, no permanent threshold > 1/2 in (ADA 303.3); double-doors where machine width > 30 in." },
        { check: "Forklift / pallet-jack delivery path documented — operator typically delivers via 27-30 in width machine on pallet jack." },
        { check: "Ambient temperature range at placement (record min/max over 7 days)." },
        { check: "Humidity range at placement (record min/max over 7 days)." },
        { check: "Cellular signal: ≥ -100 dBm RSRP (LTE Cat-1) or equivalent verified with cellular meter — not phone bars." },
        { check: "Proximity to break room, restroom, time clock; walking distance < 200 ft from production floor." },
      ],
    },
    {
      heading: "2. Electrical scope of work",
      items: [
        { check: "Dedicated 120V / 20A circuit per machine (NEC 210.23(B)(2)); not shared with break-room appliances." },
        { check: "GFCI protection where placement is within 6 ft of sink, wash bay, or eyewash station (NEC 210.8)." },
        { check: "Receptacle within 6 ft of machine placement (NEC 400.8 — no extension cords)." },
        { check: "Refrigerated machine: minimum 12 in clearance from rear coil to wall (manufacturer spec); confirm with Royal Vendors, Crane Merchandising Systems, AMS, or Vendo install guide." },
        { check: "Coffee / hot beverage equipment: 30A circuit minimum where pulled-water; consider 240V split for high-draw espresso." },
        { check: "Lockout / tagout point identified for maintenance access (29 CFR 1910.147)." },
        { check: "Surge suppression / dedicated transient voltage surge suppressor where industrial loads are switched on the same panel." },
      ],
    },
    {
      heading: "3. Connectivity + telemetry",
      items: [
        { check: "Cellular preferred for industrial sites — separates payment + telemetry from facility production network." },
        { check: "If facility Wi-Fi: VLAN isolated from production network; PSK rotated quarterly; segmented per PCI DSS v4.0.1 Req 1.2.6." },
        { check: "Telemetry vendor: Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, AWM Smart Shelf, or equivalent — heartbeat ≤ 15 min." },
        { check: "Operator dashboard read-access for facility manager + EHS + procurement." },
        { check: "Service alert SLA: <24 hr response for outage, <24 hr resolution for revenue-critical / cold-chain fault." },
      ],
    },
    {
      heading: "4. ANSI / OSHA placement requirements",
      items: [
        { check: "Egress + corridor width per IBC 1005 + NFPA 101 maintained after machine install (typical 44 in minimum; verify locally)." },
        { check: "Machine not blocking eyewash station, emergency shower, fire extinguisher, fire pull, or first-aid cabinet (ANSI Z358.1, NFPA 10)." },
        { check: "Forklift traffic separation: machine 18+ in from drive aisle striping; bollards installed where impact risk elevated (ANSI MH16.1)." },
        { check: "Anchor / tip-over restraint installed — Consumer Product Safety Commission has documented fatal tip-over incidents." },
        { check: "Floor signage / striping demarcates pedestrian access path (OSHA 1910.144 color-coding)." },
        { check: "Adequate lighting on machine face (≥ 200 lux) — many warehouse zones below this baseline." },
      ],
    },
    {
      heading: "5. Three-shift planogram baseline",
      paragraph:
        "Warehouses run shift 1 (typically 6 AM-2 PM), shift 2 (2 PM-10 PM), shift 3 (10 PM-6 AM). Per-shift velocity will differ; planogram should be telemetry-tuned at 30 and 90 days post-install.",
      items: [
        { label: "Shift 1 (6 AM-2 PM)", value: "Breakfast bars, fresh fruit, yogurt, RTD coffee, water, balanced lunch combo. Higher fresh / cold-chain weighting." },
        { label: "Shift 2 (2 PM-10 PM)", value: "Snacks, sodas, energy drinks, lunch leftovers, heat-and-eat entrées where micro-market." },
        { label: "Shift 3 (10 PM-6 AM)", value: "Caffeine beverages (energy + cold brew), hot drinks, comfort snacks, calorie-dense meal replacements." },
        { label: "PPE-friendly grip", value: "SKU packaging openable with glove on (avoid micro-perforation pull tabs at heavy-glove sites)." },
        { label: "Hydration emphasis", value: "Water 30-40% of beverage facings at hot / heavy-PPE sites; electrolyte SKUs where heat-illness risk elevated (OSHA heat NEP)." },
      ],
    },
    {
      heading: "6. 30 / 60 / 90 day startup audit",
      items: [
        { number: 1, title: "Day 30", description: "Telemetry-derived per-shift velocity vs install projection; refund volume; payment failure rate; first planogram refresh." },
        { number: 2, title: "Day 60", description: "Stockout incidents + resolution; full QBR draft; ANSI / OSHA placement walk-through with EHS lead." },
        { number: 3, title: "Day 90", description: "Formal QBR with operator: uptime SLA adherence, planogram v2, capture-rate vs ADP target, refund rate, action items + owners." },
      ],
    },
    {
      heading: "7. Operator MSA + insurance verification",
      items: [
        { check: "Operator carries $2M general liability minimum; warehouse/EHS-elevated sites often $5M." },
        { check: "Workers comp + auto liability current; certificate of insurance names facility as additional insured." },
        { check: "Background-checked service techs per facility policy; site induction + PPE briefing completed." },
        { check: "After-hours service procedure aligned with facility security / lockout policy." },
        { check: "Operator commits to 5-business-day stockout resolution + 24-hour outage response in writing." },
      ],
    },
  ],
  footer:
    "Informational only — not engineering or safety advice. Verify NEC, IBC, NFPA, ANSI, and OSHA requirements with facility EHS lead and local AHJ. LetUsVending is equipped to coordinate warehouse-experienced operators with 24/7 SLAs and three-shift planogram tuning.",
});

console.log("wrote "+"how-to-install-vending-in-your-warehouse");
