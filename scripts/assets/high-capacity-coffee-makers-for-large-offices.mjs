import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "high-capacity-coffee-makers-for-large-offices",
  assetType: "worksheet",
  title: "Large-Office High-Capacity Coffee Worksheet",
  subtitle: "Cup-volume sizing, multi-machine specification, service contract matrix, and OCS RFP template",
  intro:
    "Use this worksheet to size a high-capacity office coffee service (OCS) for offices serving 100-1,500+ users per day. References to NSF/ANSI 4 commercial refrigeration, NSF/ANSI 18 manual food and beverage dispensing, UL 197 commercial electric cooking appliances, and ENERGY STAR for commercial brewers. Capability-framed throughout.",
  sections: [
    {
      heading: "1. Cup-volume sizing worksheet",
      paragraph:
        "Estimate cups-per-day from headcount × adoption rate × cups-per-user. Daily cup volume drives the machine specification.",
      headers: ["Input", "Formula", "Typical value", "Your value"],
      rows: [
        ["Headcount on-site (daily avg)", "(Total HC) × (avg in-office %)", "Total HC × 65-80%", "____"],
        ["Coffee adoption rate", "% of in-office population who drink office coffee", "55-75%", "____"],
        ["Cups per drinker per day", "Average", "1.5-2.2", "____"],
        ["Daily cups", "HC × adoption × cups/drinker", "—", "____"],
        ["Peak-hour share", "% of daily cups concentrated in peak hour (typically 8-9 AM)", "20-30%", "____"],
        ["Peak cups/hour", "Daily × peak share", "—", "____"],
        ["Recommended brewing capacity (cups/hr)", "Peak cups/hr × 1.25 safety factor", "—", "____"],
      ],
    },
    {
      heading: "2. Multi-machine specification template",
      paragraph:
        "At ≥ 500 daily cups, distribute across multiple machines or formats. Use the table below to select.",
      headers: ["Daily cups", "Recommended configuration", "Format", "Floor footprint", "Electrical"],
      rows: [
        ["Up to 200", "1× bean-to-cup or 1× pod machine + airpots", "Single unit", "1-2 sq ft", "120V/15A"],
        ["200-500", "1-2× bean-to-cup + 1× pod machine + drip carafe backup", "2 stations", "3-6 sq ft", "120V/20A (each)"],
        ["500-1,000", "2× bean-to-cup + drip + 1× cold brew tap + plant milk dispenser", "Dual zones", "8-12 sq ft", "Dedicated circuits"],
        ["1,000-1,500", "3× bean-to-cup + drip + 2× cold tap + thermal carafes for satellite kitchens", "Hub + satellites", "12-20 sq ft", "208V/30A or multiple 120V/20A circuits"],
        ["1,500+", "Hub + 2-4 satellite zones; consider barista-staffed service model", "Hub + multi satellite", "Per zone", "Hub typically 208V; satellites 120V"],
      ],
    },
    {
      heading: "3. Equipment specification checklist",
      items: [
        { check: "Brewer: NSF/ANSI 4 certified; commercial-grade (Bunn, Curtis, Fetco, Wilbur Curtis, or comparable)" },
        { check: "Bean-to-cup: integrated grinder, milk steamer (where plant-milk supported); ENERGY STAR certified preferred" },
        { check: "Water filtration: 3M / Everpure / Pentair under-counter cartridge with TDS reduction + scale inhibitor; replacement schedule documented" },
        { check: "Plumbing: ¼ in copper or PEX water line with shut-off; backflow preventer per local code" },
        { check: "Drain: where required by machine; route to floor drain or condensate pump" },
        { check: "Electrical: dedicated 120V/20A or 208V/30A per machine spec; GFCI per NFPA 70 Article 422 within 6 ft of sink" },
        { check: "Refrigeration (for milk/dairy/plant milk): NSF/ANSI 7 commercial refrigeration; holds 33-40°F per FDA Food Code 3-501.16" },
        { check: "Cleaning: NSF/ANSI 51 food-zone surfaces; daily/weekly cleaning schedule documented" },
        { check: "ADA Section 308: operable parts 15-48 in AFF; ≤ 5 lbf operating force; cup-dispense reach range compliant" },
      ],
    },
    {
      heading: "4. Service contract matrix",
      paragraph:
        "OCS contracts vary by service model. Use this matrix to set expectations and compare bids.",
      headers: ["Service element", "Self-serve (lease + supplies)", "Managed OCS", "Full barista service"],
      rows: [
        ["Equipment ownership", "Operator lease or sale", "Operator-owned", "Operator-owned + staff"],
        ["Bean / supply delivery", "Standing order", "Operator-managed", "Operator-managed"],
        ["Daily cleaning", "Host staff", "Operator weekly + host daily", "Operator daily"],
        ["Maintenance / repair", "Operator service call", "Operator SLA (≤ 24 hr Tier-1)", "Operator on-site"],
        ["Cup / lid / stirrer / sugar / sweetener", "Standing order", "Operator-managed", "Operator-managed"],
        ["Water filter change", "Host coordinates", "Operator scheduled", "Operator scheduled"],
        ["Descaling", "Host coordinates", "Quarterly operator visit", "Monthly operator visit"],
        ["Typical cost (per cup)", "$0.15-$0.30", "$0.30-$0.55", "$0.65-$1.50+"],
        ["Best fit", "Up to 200 cups/day", "200-1,000 cups/day", "1,000+ cups/day or premium hospitality"],
      ],
    },
    {
      heading: "5. OCS RFP template — section outline",
      items: [
        { number: 1, title: "Facility profile", description: "Headcount, in-office days, current coffee program, complaints / drivers for change, target cup volume, target launch date." },
        { number: 2, title: "Equipment specification", description: "Reference Section 3 checklist; operator marks comply / not-comply; operator proposes specific machine model(s) and rationale." },
        { number: 3, title: "Service model", description: "Operator proposes self-serve / managed / barista per Section 4; commits to SLA in writing." },
        { number: 4, title: "Bean + supply program", description: "Bean origin + certification mix (fair-trade, rainforest-alliance, organic, single-origin %); plant-milk options; cup/lid sustainability." },
        { number: 5, title: "Pricing", description: "All-in cost per cup or per-month subscription; equipment lease vs purchase; supply pass-through; refund policy." },
        { number: 6, title: "Sustainability / ESG", description: "Cup compostability, milk + creamer waste, packaging recyclability, supplier diversity." },
        { number: 7, title: "Implementation timeline", description: "T-30 / T-21 / T-14 / T-7 / T-0 plan with owner accountability." },
        { number: 8, title: "References + capability evidence", description: "3+ comparable accounts ≥ 12 months in service; sample QBR." },
        { number: 9, title: "Compliance attestations", description: "ADA, NSF/ANSI 4 + 18, FDA Food Code, insurance COI." },
      ],
    },
    {
      heading: "6. Quarterly business review checklist",
      items: [
        { check: "Cup volume trend (per machine, per month)" },
        { check: "Bean origin + certification mix delivered (vs RFP commitment)" },
        { check: "Service ticket log + SLA adherence" },
        { check: "Water filter change history" },
        { check: "Descaling history" },
        { check: "Refund + complaint log" },
        { check: "Employee satisfaction pulse (where applicable)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This worksheet is informational and not legal advice. Facilities should confirm plumbing and electrical work complies with local code. Operator capability claims should be verified through reference calls and written attestation. LetUsVending can connect host teams with operators equipped to serve large-office OCS placements.",
});

console.log("wrote "+"high-capacity-coffee-makers-for-large-offices");
