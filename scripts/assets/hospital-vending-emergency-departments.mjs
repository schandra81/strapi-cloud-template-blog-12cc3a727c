import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hospital-vending-emergency-departments",
  assetType: "pack",
  title: "Emergency Department Vending Placement Pack",
  subtitle: "24/7 access design, comfort planogram, clinical coordination, ED-grade SLA",
  intro:
    "Emergency departments operate 24/7 with average length-of-stay 2.5-6 hours (CDC NHAMCS 2022 ED survey). Patients and families wait — and they need access to food, drink, charging, and comfort items at any hour. This pack covers the placement design, planogram, clinical coordination, and SLA framework specific to the ED.",
  sections: [
    {
      heading: "1. ED placement design — three zones",
      paragraph:
        "An ED placement is more than a single machine in the lobby. Three zones each have distinct demand and constraints.",
      headers: ["Zone", "Audience", "Typical equipment", "Constraints"],
      rows: [
        ["Public waiting", "Patients + family", "1-2 combo units + glass-front beverage", "ADA, infection control, fire egress per NFPA 101"],
        ["Treatment-area family room", "Family of admitted ED patient", "Single combo or micro-market kiosk", "Lower noise; comfort SKUs; HIPAA-aware placement"],
        ["Staff break room (ED)", "ED clinicians + nurses + techs", "Refrigerated + ambient pair + coffee", "24/7 access; cashless preferred; quick-grab meal-replacement"],
      ],
    },
    {
      heading: "2. Comfort planogram — what ED visitors actually want",
      paragraph:
        "ED visitor purchase patterns differ from break-room vending. Caffeine, water, comfort snacks, charging cables, kid-friendly items dominate. Telemetry from major IDN ED placements shows 60-70% of ED vending transactions are beverages.",
      headers: ["Category", "Share of facings", "Examples"],
      rows: [
        ["Water + hydration", "25-35%", "Bottled water, electrolyte, sparkling"],
        ["Caffeine", "15-20%", "RTD coffee, energy drinks, bottled tea"],
        ["Comfort snacks", "20-25%", "Crackers, pretzels, trail mix, fruit snacks"],
        ["Family / kid", "10-15%", "Juice boxes, animal crackers, fruit cups"],
        ["Sustenance / meal-replacement", "10-15%", "Protein bars, jerky, RTD shakes, soup cups (hot if available)"],
        ["Personal essentials", "5-10%", "Phone charger, lip balm, gum, OTC headache (where allowed)"],
      ],
    },
    {
      heading: "3. 24/7 access design — durability + reliability",
      paragraph:
        "Overnight ED staff cannot wait until the next business day for a service ticket. The placement must be engineered for 24/7 uptime.",
      items: [
        { label: "Telemetry heartbeat", value: "≤ 15 minutes; offline > 30 min triggers automatic operator dispatch." },
        { label: "Cashless-only configuration", value: "Validators fail 5-10× more often than card readers. ED placement should accept tap + chip + Apple/Google Pay only." },
        { label: "Refrigeration redundancy", value: "Temperature alert at 4 hours below 41°F trigger threshold; technician dispatch within 4 hours for refrigerated equipment per FDA Food Code §3-501.16." },
        { label: "Lighting + visibility", value: "≥ 30 fc at machine face per IES RP-29 (healthcare lighting). Operable parts visible from 6 feet for accessibility + safety." },
        { label: "Operator coverage", value: "Operator must provide 24/7 dispatch capability; verify contracted technician availability for the local market." },
      ],
    },
    {
      heading: "4. Clinical coordination",
      paragraph:
        "ED is the most operationally sensitive location in the hospital. Coordinate placement with ED leadership, infection prevention, security, and patient experience.",
      items: [
        { check: "ED medical director + nurse manager sign-off on planogram + placement footprint." },
        { check: "Infection prevention review per CDC + Joint Commission EOC.02.06.05; equipment surfaces compatible with EPA List N disinfectants (effective 2024)." },
        { check: "Security review: placement does not block sight lines or duress alarm access; cabinet anchored per CMS-mandated stability." },
        { check: "Patient experience review (HCAHPS Question 22 - cleanliness + Question 23 - quietness implications)." },
        { check: "Restock schedule avoids shift-change peaks (typically 7AM, 3PM, 7PM, 11PM) to reduce crowding interference." },
        { check: "Operator drivers complete hospital orientation including BBP + universal precautions per OSHA 1910.1030." },
      ],
    },
    {
      heading: "5. ED-grade SLA",
      paragraph:
        "ED placements run on a tighter SLA than standard hospital break-room vending. Tie SLA to operator performance with measurable credits or penalties.",
      headers: ["Tier", "Issue type", "Acknowledgement", "Resolution"],
      rows: [
        ["1", "Machine offline / refrigeration excursion / payment outage", "≤ 1 hour", "≤ 12 hours (24/7 dispatch)"],
        ["2", "Stockout on top-5 SKUs", "≤ 4 hours", "≤ 24 hours"],
        ["3", "Stockout on tail SKUs / planogram refresh", "24-48 hours", "Next scheduled visit (≤ 5 days)"],
        ["4", "Cosmetic / signage", "5 days", "14 days"],
      ],
    },
    {
      heading: "6. Pricing + free / subsidized SKU policy",
      paragraph:
        "Some hospitals subsidize a baseline tier (water + crackers free; rest at retail) in the ED as part of the patient-experience program. Decide intentionally.",
      items: [
        { label: "Full retail", value: "Member self-pays via cashless. Operator standard commission applies." },
        { label: "Patient-comp coupon", value: "Triage nurse hands a comp code redeemable at the machine for water + cracker. Hospital reimburses operator at cost. Tracks against patient experience budget." },
        { label: "Subsidized basket", value: "Lower-tier baseline (water + crackers + juice) priced at $0.25-$0.50; hospital absorbs $1.50 differential per unit. Funded through community benefit / patient experience." },
        { label: "Staff-only badge SKUs", value: "Staff badge unlocks 20-30% lower price tier; tied to badge access controls via Nayax or Cantaloupe RFID integration." },
      ],
    },
    {
      heading: "7. Charging stations + adjacencies",
      paragraph:
        "ED waiting room visitors disproportionately need device charging. A vending placement pairs naturally with a charging adjacency.",
      items: [
        { check: "Charging hub adjacent (USB-A + USB-C + wireless Qi) compliant with UL 2738 (multi-port chargers)." },
        { check: "Power source: dedicated 120V/15A circuit; UL listed; tamper-resistant outlets per NEC 406.12." },
        { check: "ADA reach: charging hub operable parts within 15-48 in AFF; clear floor space 30 in × 48 in." },
        { check: "Signage: 'Free Charging — Courtesy of [Hospital]' high-contrast per Section 703." },
        { check: "Refresh capacity: 4-8 simultaneous device ports; turnover at 30-60 minute average dwell." },
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["ED leadership scoping", "30 days", "ED director + materials mgmt"],
        ["IP + fire + ADA review", "30-45 days", "Facilities + IP"],
        ["Operator selection", "30-45 days", "Materials mgmt"],
        ["Contract + SLA negotiation", "30-45 days", "Legal + materials"],
        ["Equipment install + commissioning", "5-10 days", "Operator + facilities"],
        ["ED staff orientation + briefing", "1 week", "ED + operator"],
        ["Soft launch + first 30-day SLA review", "30 days", "Operator + ED director"],
        ["Quarterly business review cadence begins", "Quarter 2", "Operator + materials mgmt"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to support ED-grade vending placements with 24/7 dispatch capability.",
});

console.log("wrote "+"hospital-vending-emergency-departments");
