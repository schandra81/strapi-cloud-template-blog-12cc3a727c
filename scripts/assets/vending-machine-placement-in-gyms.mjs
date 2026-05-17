import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-placement-in-gyms",
  assetType: "checklist",
  title: "Gym Vending Zone-Mapping Checklist",
  subtitle: "Five-zone placement framework, member-flow analysis, equipment selection, and operator capability",
  intro:
    "Use this checklist when mapping vending placement at a gym, studio, or fitness facility. Zone placement drives traffic, dwell time, and per-machine velocity more than any other single factor. Mark each item Verified, Acceptable with mitigation, or Reject before scheduling install.",
  sections: [
    {
      heading: "1. The five gym vending zones",
      paragraph:
        "Most gyms support 1-5 vending zones. Each zone has a distinct member-flow profile, dwell time, and SKU mix.",
      items: [
        { check: "Zone 1 — Entry / check-in: highest dwell time. Best for hydration, pre-workout, snacks, supplements. Highest velocity for a single machine." },
        { check: "Zone 2 — Locker room / shower exit: post-workout recovery. Best for protein, electrolyte, water, towel / amenity vending." },
        { check: "Zone 3 — Cardio / strength floor (perimeter): mid-workout hydration top-off. Best for water + electrolyte; smaller footprint preferred." },
        { check: "Zone 4 — Group fitness / studio corridor: pre/post-class window. Best for protein bars, ready-to-drink shakes, towels." },
        { check: "Zone 5 — Smoothie bar / café adjacency: complementary, not competitive. Best for grab-and-go snack, supplement, or apparel vending." },
      ],
    },
    {
      heading: "2. Member-flow analysis",
      items: [
        { check: "Member-count peak hours mapped (typical gyms peak 5-8 AM and 5-8 PM with a midday secondary peak)." },
        { check: "Class schedule overlaid: studio peak adds 20-40 members per class window into Zone 4." },
        { check: "Average dwell time at each zone measured (entry 1-3 min, locker room 5-10 min, floor seconds, studio corridor 2-5 min)." },
        { check: "Walking path conflicts identified: vending in Zone 1 should not block check-in queue; Zone 3 should not block cardio aisle width." },
        { check: "Member persona segmentation (early-morning fitness vs. midday senior vs. evening peak) used to weight SKU mix per zone." },
      ],
    },
    {
      heading: "3. Equipment selection by zone",
      headers: ["Zone", "Recommended machine", "Typical SKU mix"],
      rows: [
        ["Zone 1 — Entry", "Beverage + snack combo or micro-market", "Water, sports drinks, protein bars, supplements, fruit, pre-workout"],
        ["Zone 2 — Locker room", "Beverage + supplement combo", "Recovery drinks, protein, electrolytes, towels, amenity kits"],
        ["Zone 3 — Floor perimeter", "Beverage-only (slim profile)", "Water, electrolyte, sports drinks"],
        ["Zone 4 — Studio corridor", "Snack + beverage combo", "Protein bars, ready-to-drink shakes, water, towels"],
        ["Zone 5 — Café adjacency", "Micro-market kiosk or apparel vending", "Healthy snacks, supplements, branded apparel, accessories"],
      ],
    },
    {
      heading: "4. Site, electrical, and ADA per zone",
      items: [
        { check: "Dedicated 20A 120V circuit per NEC 210.23 for each machine; GFCI per NEC 210.8(B) where placement is in a locker room or near a sink." },
        { check: "Voltage drop ≤ 3% at running load per NEC 210.19(A) Informational Note 4." },
        { check: "ADA Section 308 reach range (≤ 48 in / ≥ 15 in AFF), Section 305 clear floor space (30 × 48 in), Section 309.4 operating force (≤ 5 lbf)." },
        { check: "Locker-room placements: corrosion-resistant cabinet finish; humidity tolerance verified against manufacturer spec." },
        { check: "Floor live load ≥ 100 psf for cardio / strength floor placement (typical commercial); structural review for any mezzanine placement." },
      ],
    },
    {
      heading: "5. Operator capability and SLA",
      items: [
        { check: "Operator carries CGL $1M/$2M, products/completed ops $2M (covers supplement / protein SKUs), umbrella ≥ $5M, workers' comp." },
        { check: "Operator attests to telemetry (≤ 15 min heartbeat) and uptime target ≥ 98% on a per-machine, per-month basis." },
        { check: "Restock cadence linked to telemetry threshold (refill when any SKU drops below 20%) rather than fixed calendar day." },
        { check: "Quarterly business review delivered: per-zone velocity, stockouts, refund volume, planogram refresh recommendations." },
        { check: "Supplement SKU sourcing: operator buys from FDA-registered facilities per FDA 21 CFR Part 111 (cGMP for dietary supplements) and can produce certificates of analysis (CoA) on request." },
        { check: "Healthy options framework referenced (USDA Smart Snacks, FITPick, or facility-defined nutrition policy)." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not engineering or accessibility-law advice. Zone selection should be coordinated with the gym's operations manager and the operator's site survey. LetUsVending can connect you with operators equipped for gym placements — request the gym capability matrix to compare candidates side by side.",
});

console.log("wrote " + "vending-machine-placement-in-gyms");
