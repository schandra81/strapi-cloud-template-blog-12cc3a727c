import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "what-are-combo-vending-machines",
  assetType: "template",
  title: "Two-Week Vending Traffic Study Template",
  subtitle: "Pre-RFP traffic + intent measurement to size a combo vs separate-unit decision",
  intro:
    "Use this template to run a structured 14-day traffic and intent study before issuing a vending RFP. Output drives equipment sizing (combo unit vs separate snack + beverage), facing count, refrigeration scope, and commission expectations. The template is built to be reproduced in Google Sheets, Excel, or any tracking tool. Methodology references NEMS-V (Nutrition Environment Measures Survey — Vending) and standard retail-traffic study practice.",
  sections: [
    {
      heading: "1. Pre-study setup",
      paragraph:
        "Operator and host complete this together before day 1. Misaligned definitions are the single biggest source of bad study output.",
      items: [
        { label: "Define the study area", value: "Identify each candidate placement zone (lobby, breakroom, corridor adjacency). Mark on a floor plan with dimensions, sight-lines, and current foot-traffic path." },
        { label: "Confirm headcount + shifts", value: "Daily on-site population by shift (e.g., shift-1 200 / shift-2 60 / shift-3 30). Distinguish from total employees / members / residents (many won't visit daily)." },
        { label: "Identify existing channels", value: "List current food-and-beverage options within 5 minutes walking distance (cafeteria, café, market, peer vending, off-site retail). Calls 'competition' explicit." },
        { label: "Define measurement windows", value: "Three 60-90 minute windows per day capturing your most-likely peaks (AM peak, lunch, PM/late peak). Total study window = 14 consecutive days." },
        { label: "Recruit counters or telemetry", value: "Two-person manual count team OR people-counting telemetry (sensor at door / amenity area). Calibrate sensor against manual count on day 1." },
      ],
    },
    {
      heading: "2. Daily data collection — Sheet 1: Foot traffic",
      paragraph:
        "Manual or telemetry-driven count of unique passersby vs interactors during each measurement window. Refer to this sheet during planogram + sizing discussions.",
      headers: ["Column", "Field", "Type", "Notes"],
      rows: [
        ["A", "Date", "Date", "YYYY-MM-DD"],
        ["B", "Day of week", "Lookup", "Auto-fill from date"],
        ["C", "Window", "Pick list", "AM peak / Lunch / PM peak"],
        ["D", "Start time", "Time", "Within the defined window"],
        ["E", "End time", "Time", ""],
        ["F", "Unique passersby", "Integer", "People who walk past the zone"],
        ["G", "Interactors", "Integer", "People who stop, browse, or use any existing channel"],
        ["H", "Conversion rate", "Formula", "= G / F"],
        ["I", "Weather", "Text", "Drives F&B demand at outdoor + indoor venues"],
        ["J", "Notes", "Text", "Event, holiday, special schedule"],
      ],
    },
    {
      heading: "3. Daily data collection — Sheet 2: Stated intent",
      paragraph:
        "Sample of 20-50 interactors per day asked 4 short questions. Drives planogram weighting and combo-vs-separate decision.",
      items: [
        { label: "Q1 — Snack vs beverage intent", value: "Would you buy a snack, a beverage, both, or neither during this visit? (Pick list)" },
        { label: "Q2 — Category specifics", value: "If snack: chip / bar / nut / candy / fresh / other. If beverage: water / sparkling / soda / coffee / energy / juice / other. (Multi-select)" },
        { label: "Q3 — Price tolerance", value: "What would you expect to pay for [chosen item]? ($ open-end; or pick list $1-$2 / $2-$3 / $3-$4 / $4-$5 / $5+)" },
        { label: "Q4 — Cashless preference", value: "How would you pay? (Cash / card / mobile wallet / app / badge)" },
      ],
    },
    {
      heading: "4. Daily data collection — Sheet 3: Adjacent channel pull",
      paragraph:
        "Foot-traffic and interactor numbers without context misstate vending demand. Track the adjacent channel pull every day in the same windows.",
      headers: ["Day", "Cafeteria peak basket count", "On-site café cup count", "Off-site retail trip count", "Notes"],
      rows: [
        ["Day 1 (Mon)", "Captured from cafeteria POS or visual count", "From café POS or visual count", "Self-report sample at exit", "Note any closures or special menus"],
        ["Day 2 (Tue)", "", "", "", ""],
        ["…", "", "", "", ""],
        ["Day 14 (Sun)", "", "", "", ""],
      ],
    },
    {
      heading: "5. Combo vs separate-unit decision logic",
      paragraph:
        "Output of the 14-day study should support a combo vs separate-unit recommendation against the thresholds below.",
      headers: ["Daily interactors (avg)", "Snack:bev intent ratio", "Recommendation"],
      rows: [
        ["< 40", "Any", "Single combo unit (snack + bev) — simplest fit"],
        ["40-100", "Roughly balanced (40-60% : 40-60%)", "Single combo unit"],
        ["40-100", "Skewed > 70% to one category", "Separate dominant-category unit + small adjacent unit"],
        ["100-200", "Any", "Combo plus dedicated beverage merchandiser"],
        ["> 200", "Any", "Separate snack + beverage merchandisers + optional fresh refrigerator"],
      ],
    },
    {
      heading: "6. Analysis + RFP outputs",
      items: [
        { check: "Daily and per-window average traffic + interactor counts with 14-day variance." },
        { check: "Conversion rate over the window (target benchmark 5-15% of passersby become interactors in a healthy program area)." },
        { check: "Snack-to-beverage intent ratio + category share within each." },
        { check: "Price-tolerance distribution by category." },
        { check: "Cashless-preference share (drives PCI scope, badge integration, app integration)." },
        { check: "Adjacent-channel pull baseline (cafeteria + café + off-site retail)." },
        { check: "Combo-vs-separate recommendation with sizing rationale." },
        { check: "Per-window peak demand to size restock cadence + telemetry alert thresholds." },
      ],
    },
    {
      heading: "7. Operator capability checks",
      items: [
        { check: "Operator should attest to running the traffic study at no cost as part of the RFP / pre-install process." },
        { check: "Operator should attest to using a NEMS-V-aligned or comparable methodology with documented inter-rater reliability if multiple counters." },
        { check: "Operator should attest to telemetry calibration if using people-counting sensors (manual count vs sensor parity within 5% on day 1)." },
        { check: "Operator should attest to delivering the full report (sheets + analysis + recommendation) within 7 business days of study end." },
        { check: "Operator should attest to no obligation by host to award contract based on the study — study is informational." },
      ],
    },
  ],
  footer:
    "This template is informational and not statistical-survey advice. A 14-day window captures normal variance but may not capture seasonal extremes or one-off events. Re-run after major workforce changes or 12-18 months after install to validate planogram + cadence assumptions.",
});

console.log("wrote " + "what-are-combo-vending-machines");
