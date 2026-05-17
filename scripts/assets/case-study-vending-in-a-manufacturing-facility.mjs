import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "case-study-vending-in-a-manufacturing-facility",
  assetType: "pack",
  title: "Manufacturing Vending Case Study Pack",
  subtitle: "Deployment workflow, operator RFP framework, and retention-impact reporting",
  intro:
    "Manufacturing facility leaders deploying vending often want a structured case-study-shaped reference: how a representative 250-FTE plant gets from RFP to go-live in 90 days, what success looks like at year-one, and how to measure retention-adjacent impact. This pack consolidates a deployment workflow, an operator RFP framework, and a retention-impact reporting template — presented as a representative scenario (not a claim of work performed at any specific named facility).",
  sections: [
    {
      heading: "1. Representative scenario — what the pack illustrates",
      paragraph:
        "The reference scenario in this pack describes a hypothetical 250-FTE manufacturing site running three 8-hour shifts (Mon–Fri with rotating Saturday), with mixed PPE zones, a 4,000 sq ft break room, and a wellness committee. Figures are illustrative ranges drawn from typical industry benchmarks — not measurements from a specific plant.",
      items: [
        { label: "Workforce profile", value: "250 FTE, 3 shifts; 60% production-floor, 30% warehouse, 10% admin/QA" },
        { label: "Shift hours", value: "Shift 1: 6 AM–2 PM; Shift 2: 2 PM–10 PM; Shift 3: 10 PM–6 AM" },
        { label: "Break room", value: "4,000 sq ft; nearest commissary food service 25 miles" },
        { label: "Wellness mandate", value: "AHA-aligned snack/beverage minimum 30% of slots; subsidy budget $90,000–$140,000/year" },
        { label: "PPE zones", value: "Hard hat + safety glasses on production floor; hi-vis vest in warehouse; vending strictly in break room" },
      ],
    },
    {
      heading: "2. Deployment workflow — 90-day timeline",
      items: [
        { number: 1, title: "Days 0–14 — discovery + RFP", description: "Site survey by 2–3 operators; pedometer mapping of break-room flow; wellness committee draft planogram principles; payroll-deduct path identified (Workday / Kronos / UKG)." },
        { number: 2, title: "Days 15–30 — operator selection", description: "Scored RFP responses against criteria below. Reference checks (3 minimum), insurance verification ($1M / $2M GL + product liability), AoC (PCI-DSS v4.0) confirmed." },
        { number: 3, title: "Days 31–60 — install + integration", description: "Dedicated 20A circuits run; equipment delivered + installed; cellular telemetry verified ≥ −90 dBm at all placements; badge integration tested in staging; planogram loaded." },
        { number: 4, title: "Days 60–75 — onboarding + go-live", description: "Workforce comms 2 weeks pre-launch; signage at break-room entry; QR-coded refund flow; soft-launch shift 1 first; full 3-shift go-live day 75." },
        { number: 5, title: "Days 75–90 — first telemetry cycle", description: "Per-shift velocity baseline; first planogram refresh; refund rate review; uptime report; first quarterly review scheduled day 90." },
      ],
    },
    {
      heading: "3. Operator RFP framework",
      headers: ["Criterion", "Weight", "What to look for"],
      rows: [
        ["Manufacturing track record", "15%", "Multi-shift operations; PPE-zone awareness; written attestation"],
        ["Telemetry depth", "15%", "Cellular sub-15-min heartbeat; per-shift velocity; cold-chain alerts"],
        ["SLA structure (Tier 1/2/3)", "15%", "Written tiers; remedies for breach; service credits"],
        ["Fresh / refrigerated capability", "10%", "FDA-registered commissary; HACCP plan; ≤ 90-min drive from commissary"],
        ["Payment + PCI", "10%", "PCI-DSS v4.0 AoC; EMV + contactless; offline-mode capability"],
        ["Payroll-deduct integration", "10%", "Workday / Kronos / UKG file format; bi-weekly cadence"],
        ["Wellness committee cooperation", "10%", "Planogram refresh quarterly; AHA-aligned slot %"],
        ["Insurance + indemnity", "8%", "$1M / $2M GL + product liability + cyber for cashless"],
        ["DEI / dietary inclusivity", "7%", "Vegetarian, GF, halal/kosher, low-sodium, diabetes-friendly slot share"],
      ],
    },
    {
      heading: "4. Equipment + planogram — representative",
      headers: ["Class", "Count", "Placement", "Slot share"],
      rows: [
        ["Smart cooler (micro-market reach-in)", "1", "Break room — fresh / real-meal", "25% real-meal + 25% protein snack + 50% other"],
        ["Beverage cabinet (ENERGY STAR refrigerated)", "2", "Break room + floor-adjacent break station", "30% water + 25% sport/electrolyte + 25% soda + 20% coffee/tea/energy"],
        ["Snack cabinet (non-refrigerated)", "1", "Break room", "30% wellness (AHA-aligned) + 30% protein + 25% sodium-replenishment + 15% indulgent"],
        ["Coffee station (single-serve)", "1", "Break room", "Coffee, tea, hot chocolate — critical for shift 3"],
      ],
    },
    {
      heading: "5. Year-1 success metrics — representative ranges",
      paragraph:
        "Below: typical industry-benchmark ranges for a similar deployment profile. Replace with actual measurements at quarterly reviews.",
      items: [
        { label: "Uptime (per-machine, monthly)", value: "98%+ target; 95%+ floor with corrective action plan if missed" },
        { label: "Per-shift velocity participation", value: "40–60% of FTE transact ≥ 1x/shift week (subsidy-driven)" },
        { label: "Wellness slot velocity share", value: "≥ 35% of units (AHA-aligned slots) — measures whether wellness planogram actually moves" },
        { label: "Refund rate", value: "< 2% of transactions; > 2% triggers planogram + machine quality review" },
        { label: "Cold-chain excursion (per quarter)", value: "0 ideally; ≤ 2 with full resolution including affected product pulled" },
        { label: "Quarterly business review", value: "On-cadence; all action items closed before next QBR" },
      ],
    },
    {
      heading: "6. Retention-impact reporting framework",
      paragraph:
        "Vending is one of many touch-points in a retention equation. Use a directional framework — never claim a causal retention lift without controlling for other variables.",
      items: [
        { number: 1, title: "Workforce pulse — pre/post", description: "Single pulse-survey question pre-deployment and at 90 days, 6 months, 12 months: 'Rate break-room food + drink options 1–5.' Capture department + shift. Pre-post delta is directional only." },
        { number: 2, title: "Exit-interview text mining", description: "Reverse-coded mentions of break-room food / drink in voluntary exit interviews. Trend over 12-month rolling window post-deployment." },
        { number: 3, title: "Internal-referral rate (if HR tracks)", description: "Internal-referral hires often correlate with workplace satisfaction proxies. Trend pre-post, accounting for other initiatives." },
        { number: 4, title: "Absenteeism + tardiness (caution)", description: "Vending availability can reduce 'left site for lunch' patterns; track minutes-on-site as a proxy. Causal attribution to vending alone is not supportable; report as directional with confounders called out." },
        { number: 5, title: "Subsidy ROI framing", description: "If subsidy budget is $120k/year and replacement-cost-per-turnover is $4,000–$8,000 (BLS / SHRM benchmark ranges), prevent ~30 voluntary departures to break even on subsidy. Not a guarantee; framework only." },
      ],
    },
    {
      heading: "7. Indicative budget — year 1",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Hardware (full-service: operator-funded)", "$0", "Operator capital; recovered through subsidy + retail"],
        ["Subsidy ($5/shift × 240 shifts × 50% participation × 250 FTE)", "$120,000 – $150,000/year", "Adjust for participation rate"],
        ["Dedicated electrical / install", "$1,800 – $5,500", "One-time"],
        ["Quarterly business reviews", "$1,200 – $3,200/year", "Account manager + dashboard build"],
        ["Wellness committee consult (RD review)", "$1,800 – $4,200/year", "Quarterly planogram refresh"],
        ["Total program (year 1)", "$125,000 – $165,000", "Driven by subsidy"],
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate manufacturing-facility vending deployments through operators that can attest in writing to multi-shift telemetry, PPE-zone-aware placement, wellness-committee planogram cadence, and payroll-deduct subsidy integration. The scenario in this pack is illustrative — we do not claim work performed at any specific named manufacturing plant. Capability documentation provided on request during scoping.",
    },
  ],
  footer:
    "Working reference for manufacturing facility, HR, and wellness teams. Replace illustrative ranges with site-specific figures from your operator and HR data before any budget decision; retention-impact framing is directional only.",
});

console.log("wrote "+"case-study-vending-in-a-manufacturing-facility");
