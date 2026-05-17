import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "shift-friendly-vending-options",
  assetType: "playbook",
  title: "Shift-Friendly Vending Operational Playbook",
  subtitle: "Restock cadence + service SLA + planogram tuning + EHS coordination by shift configuration",
  intro:
    "A vending program tuned to annual-average velocity underperforms at every shift boundary. Workers on shift-3 (overnight) face different SKU availability, payment friction, and recovery needs than shift-1. This playbook codifies the shift-aware operational framework an operator should be equipped to deliver — measured by per-shift uptime, velocity, and refund metrics.",
  sections: [
    {
      heading: "1. Shift configuration baseline",
      paragraph:
        "Three shift patterns cover most manufacturing + logistics + healthcare facilities. The vending program adjusts to each.",
      headers: ["Pattern", "Shifts", "Peak break windows", "Restock implication"],
      rows: [
        ["3-shift continuous (24/7)", "6 AM-2 PM, 2-10 PM, 10 PM-6 AM", "9-10 AM, 5-6 PM, 1-2 AM", "Pre-shift-1 (5-6 AM) + telemetry-driven mid-shift top-off"],
        ["4-wave (4×10 hr)", "6 AM-4 PM, 4 PM-2 AM, 10 PM-8 AM, weekend coverage", "Mid-shift breaks staggered", "2x weekly restocks; telemetry-driven for wave transitions"],
        ["2-shift + weekend", "6 AM-2 PM, 2-10 PM weekdays; reduced weekend", "9-10 AM + 5-6 PM weekdays", "Monday + Thursday restock minimum; weekend mid-restock if telemetry triggers"],
      ],
    },
    {
      heading: "2. Restock cadence by shift volume",
      headers: ["Shift volume (peak-shift headcount)", "Visits / week", "Pre-shift restock target", "Peak coverage"],
      rows: [
        ["High (300+ workers/shift)", "4-5", "Before shift-1 start (5-6 AM)", "Dedicated surge crew during shift transitions"],
        ["Medium (150-300 workers/shift)", "3-4", "Before shift-1 start", "Telemetry-driven mid-shift top-off"],
        ["Low-medium (75-150 workers/shift)", "2-3", "Off-peak window", "On-demand based on telemetry"],
        ["Low (under 75 workers/shift)", "1-2", "Off-peak window", "On-demand"],
      ],
    },
    {
      heading: "3. Shift-aware planogram tuning",
      paragraph:
        "Shift-1 (day) and shift-3 (overnight) workers have different purchase patterns. Telemetry tracks per-shift velocity; planogram adjusts at quarterly review.",
      items: [
        { label: "Shift-1 (6 AM-2 PM)", value: "Breakfast-weighted: breakfast bars, fresh fruit, yogurt, coffee RTD, water, balanced lunch combo. ~25% water + electrolyte, ~15% caffeine, ~20% snacks, ~20% healthy/protein, ~15% meal." },
        { label: "Shift-2 (2-10 PM)", value: "Lunch + snack-weighted: salty + sweet snacks, sodas, energy drinks, lunch leftovers, meal replacement. ~25% water/electrolyte, ~15-20% caffeine, ~25% snacks, ~15% healthy, ~15% meal." },
        { label: "Shift-3 (10 PM-6 AM)", value: "Caffeine + comfort-weighted: caffeinated beverages, hot drinks, comfort snacks, calorie-dense meal replacements. ~20% water/electrolyte, ~30% caffeine, ~20% snacks, ~10% healthy, ~15-20% meal." },
        { label: "Quarterly tuning gate", value: "Per-shift velocity data triggers planogram adjustment when any category drifts > 10% from target for 2 consecutive months." },
      ],
    },
    {
      heading: "4. Service SLA by shift",
      paragraph:
        "Tier 1 issues during shift-3 must be addressable without waking the operator dispatch chain — telemetry + on-call rotation make this feasible.",
      headers: ["Tier", "Examples", "Acknowledgement (24/7)", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain", "Offline > 30 min, payment down, temperature excursion", "30 minutes (24/7 telemetry alert)", "4 hours on-site (24/7 dispatch)"],
        ["Tier 2 — stockout / planogram", "Stockout, planogram refresh, shift-velocity mismatch", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning", "5 days", "14 days"],
        ["Shift-handoff escalation", "Issue raised at shift huddle by HR/EHS", "Same-shift response", "Resolved or escalated within 4 hours"],
      ],
    },
    {
      heading: "5. Overnight-shift considerations",
      paragraph:
        "Overnight shift workers face documented health pressure (NIOSH + CDC shift-work research). The vending program design accounts for this without overstating clinical impact.",
      items: [
        { number: 1, title: "Circadian-aligned planogram", description: "Caffeine availability without over-promotion; hot beverage options (hot tea, hot chocolate) for sustained energy without crash; protein-forward + complex-carb meal options that don't disrupt next-day sleep." },
        { number: 2, title: "Lighting + ambient experience", description: "Where vending sits adjacent to the breakroom, machine signage dimmable to overnight ambient (warmer 2700-3000 K, 100-200 lux) — reduces circadian disruption." },
        { number: 3, title: "Refund + service access overnight", description: "App + SMS + QR refund flows accessible 24/7 with auto-credit within 24 hours; phone fallback to operator dispatch. Worker doesn't need to wait until day-shift HR opens to resolve." },
        { number: 4, title: "Hot beverage availability", description: "Hot coffee + tea machines (where deployed) at NSF/ANSI 18 food-zone standard; descaling cycle 4-6 weeks; FDA Food Code 4-202 alignment." },
        { number: 5, title: "Heat / cold environment overlay", description: "ACOEM heat-illness guidance applies during summer overnight in non-conditioned facilities; planogram weights water + electrolyte. Cold-environment overnight (cold storage, frozen food) weights hot beverage + calorie-dense meal." },
      ],
    },
    {
      heading: "6. EHS coordination by shift",
      items: [
        { check: "Operator route staff wear hi-vis PPE per facility EHS policy at every visit, day or night" },
        { check: "Overnight restock visits coordinated with shift supervisor; badged escort where facility security policy requires" },
        { check: "Restock windows aligned with low-activity periods (typically 1-2 hours before shift start, 30-60 min during shift change)" },
        { check: "Refrigerant + electrical work by EPA Section 608 + R-290 certified technicians during day-shift windows when possible; emergency work 24/7" },
        { check: "OSHA recordable-event reporting: 24-hour notification to host EHS regardless of shift" },
        { check: "Equipment placement preserves NFPA 101 egress on every shift; lighting + signage readable at overnight ambient lux levels" },
        { check: "Heat-illness or cold-stress protocol active: planogram water/electrolyte or hot-beverage prioritization aligned with EHS heat/cold management plan" },
      ],
    },
    {
      heading: "7. Worker communication",
      items: [
        { label: "Multi-language signage", value: "English + Spanish minimum (additional by demographic). Pictographic SKU labels for low-literacy support. ADA Section 703 contrast + character height." },
        { label: "Per-shift LTO communication", value: "Where LTO slate varies by shift (e.g., breakfast LTO for shift-1 only), shift-specific signage avoids confusion." },
        { label: "Refund flow signage", value: "QR-to-app on every machine; phone fallback for cash refunds; expected 24-hour cashless auto-credit window." },
        { label: "Shift-huddle briefing template", value: "Slide deck for HR + EHS at shift huddles when a planogram refresh or LTO goes live. Same content across shifts; cadence matched to each shift's huddle schedule." },
        { label: "Feedback channel", value: "QR-to-feedback on every machine; operator + host review monthly; per-shift feedback tagged for shift-specific issues." },
      ],
    },
    {
      heading: "8. Quarterly business review — per-shift metrics",
      items: [
        { check: "Uptime by machine + by shift (target ≥ 99.5%)" },
        { check: "Per-shift velocity vs planogram-target ratio" },
        { check: "Tier 1 SLA breach rate by shift (target zero)" },
        { check: "Refund volume + reason codes by shift" },
        { check: "Per-shift LTO performance (retain / promote / drop)" },
        { check: "Worker feedback summary by shift" },
        { check: "Restock cadence adherence (pre-shift restock on-time rate)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or HR advice. Coordinate with EHS, HR, Facilities, and Procurement before contracting shift-friendly terms. LetUsVending is equipped to arrange operators with documented multi-shift 24/7 capability.",
});

console.log("wrote "+"shift-friendly-vending-options");
