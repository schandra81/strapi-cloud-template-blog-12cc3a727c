import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-get-vending-machines-in-your-gym",
  assetType: "pack",
  title: "Gym Vending Installation Pack",
  subtitle: "RFP template, reference-check questions, healthy framework spec, contract terms",
  intro:
    "Adding vending to a gym is a 60-120 day process when run correctly. This pack walks through the four documents that drive the result — RFP, reference-check script, healthy-framework spec, and contract term sheet.",
  sections: [
    {
      heading: "1. Scoping the placement — five questions before the RFP goes out",
      paragraph:
        "Operators bid the way the host scopes. Tighten these five answers first so the bids are comparable.",
      items: [
        { number: 1, title: "Footprint + power", description: "Wall footprint, dedicated 120V/20A circuit availability, ceiling height ≥ 84 inches, ADA clear floor space (30 in × 48 in) available." },
        { number: 2, title: "Member count + peak", description: "Active members, peak-hour concurrent, class mix (drives recovery demand). Operators bid differently at 400 vs 1,200 members." },
        { number: 3, title: "Mix — beverage / snack / recovery / fresh", description: "Specify whether the placement is single combo, snack + beverage pair, or beverage + snack + recovery cooler trio." },
        { number: 4, title: "Cashless-only or cash + cashless", description: "Cashless-only reduces validator service calls 80% (NAMA 2024 study) but excludes members who pay cash." },
        { number: 5, title: "Branding requirements", description: "Standard operator wrap, custom-wrap, or full five-layer custom brand stack." },
      ],
    },
    {
      heading: "2. RFP template — what every operator must respond to",
      paragraph:
        "A consistent RFP makes responses comparable. Require operators to answer in the same format.",
      items: [
        { check: "Company profile: years in business, fleet size, geographic coverage, references." },
        { check: "Equipment spec: make + model + ENERGY STAR 4.0 attestation + AHRI 810-2016 / SNAP refrigerant attestation per unit." },
        { check: "Telemetry stack: vendor, heartbeat interval, dashboard demo access." },
        { check: "Payment stack: PCI-DSS attestation, supported tenders (chip, contactless, Apple/Google Pay, RFID fob)." },
        { check: "Planogram proposal: SKU list with per-SKU FALCPA allergen labels, ENERGY STAR + recyclable packaging where applicable." },
        { check: "Commission schedule: per-category commission %, payment cadence (monthly or quarterly), audit access." },
        { check: "Service SLA: Tier 1 / 2 / 3 definitions, acknowledgement + resolution targets." },
        { check: "Maintenance: refrigeration service schedule, condenser-coil cleaning cadence." },
        { check: "Insurance: GL, auto, workers comp limits with sample COI naming the gym as additional insured." },
        { check: "Term + termination: contract length, renewal terms, termination for cause / convenience, equipment removal." },
      ],
    },
    {
      heading: "3. Reference-check questions",
      paragraph:
        "Operators provide references; the host must call them. Use this script — 10 minutes per reference.",
      items: [
        { number: 1, title: "Length of relationship + scale", description: "How long? How many machines? Single or multi-site?" },
        { number: 2, title: "On-time service performance", description: "What is the actual restock-on-time rate? What is the service-ticket resolution time?" },
        { number: 3, title: "Stockout frequency", description: "How often does a featured SKU stock out before the next restock?" },
        { number: 4, title: "Commission accuracy + audit", description: "Do commission reports tie to telemetry? Have you ever found a discrepancy?" },
        { number: 5, title: "Refund process", description: "How does the operator handle member refunds? How long does it take?" },
        { number: 6, title: "Equipment quality + reliability", description: "How often do machines go offline? How fast does the operator respond?" },
        { number: 7, title: "Account management", description: "Do you have a named account manager? How responsive?" },
        { number: 8, title: "Contract experience", description: "Any surprise fees? Anything you wish you had negotiated differently?" },
        { number: 9, title: "Would you renew?", description: "Open-ended; tells you more than the prior 8 combined." },
      ],
    },
    {
      heading: "4. Healthy framework spec",
      paragraph:
        "Most gyms want a healthy planogram framework. Three frameworks dominate; pick one and write it into the contract so the operator cannot drift back to candy-and-chips.",
      headers: ["Framework", "Definition", "Reference"],
      rows: [
        ["HHFKA 2010 Smart Snacks", "≤ 200 cal, ≤ 200 mg sodium snack; ≤ 35% calories from fat", "USDA FNS 7 CFR Part 210 (school standard, used as gym benchmark)"],
        ["Partnership for a Healthier America (PHA)", "Beverage tiered: Tier 1 = water/unsweetened; Tier 2 = ≤ 40 cal/8 oz; max 30% Tier 3", "PHA Healthier Vending Initiative 2018-2023"],
        ["NEMS-V (Nutrition Environment Measures - Vending)", "Score each SKU green/yellow/red; commit to ≥ 50% green/yellow in planogram", "Hopkins Bloomberg NEMS-V 2014 (validated)"],
        ["AHA Healthy Workplace Food + Beverage Toolkit", "Tiered: Better Choice, Promote, Discourage; commit to ≥ 50% Better Choice + Promote", "American Heart Association 2021 update"],
      ],
    },
    {
      heading: "5. Contract term sheet — the 12 clauses that matter",
      items: [
        { number: 1, title: "Term", description: "1-3 years; longer for capex contribution. Auto-renew with 60-day notice window for non-renewal." },
        { number: 2, title: "Commission schedule", description: "Per-category %, payment cadence, audit access." },
        { number: 3, title: "Sales tax handling", description: "Whether commission is gross-of-tax or net-of-tax; specify state collection responsibility." },
        { number: 4, title: "SLA", description: "Tier 1 / 2 / 3 definitions with acknowledgement + resolution targets and credit / penalty if missed." },
        { number: 5, title: "Planogram approval", description: "Quarterly review with gym sign-off on SKU adds / changes." },
        { number: 6, title: "Healthy framework adherence", description: "Specific framework + minimum % compliance; right to terminate for sustained non-compliance." },
        { number: 7, title: "Equipment ownership + service", description: "Operator owns; warranty obligations; replacement on failure." },
        { number: 8, title: "Refund policy", description: "Member refund SLA; refund reporting to gym." },
        { number: 9, title: "Insurance", description: "GL $1M/$2M, auto $1M, WC statutory; certificate names gym as additional insured." },
        { number: 10, title: "Indemnification + limit of liability", description: "Mutual indemnification; LoL capped at greater of $X or 12 months commission." },
        { number: 11, title: "Termination", description: "Termination for cause (30-day cure) and for convenience (60-90 day notice)." },
        { number: 12, title: "Data ownership", description: "Gym owns the transaction + member-tier data passed via integration; operator owns the operations data; both have access during the term." },
      ],
    },
    {
      heading: "6. Implementation timeline",
      headers: ["Phase", "Duration"],
      rows: [
        ["Scoping + RFP draft", "2-3 weeks"],
        ["Operator outreach + RFP responses", "3-4 weeks"],
        ["Operator interviews + references", "2-3 weeks"],
        ["Contract negotiation", "2-4 weeks"],
        ["Site prep (electrical, ADA)", "2-3 weeks"],
        ["Equipment install + commissioning", "3-7 days"],
        ["Soft launch + planogram tune", "30 days"],
      ],
    },
    {
      heading: "7. Soft-launch checklist",
      items: [
        { check: "Day 1: telemetry online, planogram loaded, signage + shelf talkers in place, refund flow tested with a $1 test purchase." },
        { check: "Week 1: front-desk script briefed; member feedback channel open; first telemetry summary reviewed." },
        { check: "Day 14: first commission report reviewed; reconciliation against telemetry." },
        { check: "Day 30: planogram tune based on telemetry velocity; healthy-framework compliance audit." },
        { check: "Day 60: first QBR with operator; SLA performance against targets; member NPS micro-survey." },
        { check: "Day 90: second planogram tune; consider expansion if performance hits targets." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce vetted operators equipped to bid against the RFP framework above.",
});

console.log("wrote "+"how-to-get-vending-machines-in-your-gym");
