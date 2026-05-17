import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "future-university-vending-tech",
  assetType: "pack",
  title: "University Vending Technology Roadmap Pack",
  subtitle: "5-year plan, RFP template, integration checklist, and operator evaluation framework",
  intro:
    "University vending is on a five-year technology arc: from traditional cash + card combo to AI cooler, campus-card integration, payroll-deduction, sustainability metrics, and AASHE STARS reporting. This pack bundles a roadmap, RFP template clauses, integration checklist, and operator evaluation framework for a 5-year technology transition.",
  sections: [
    {
      heading: "1. 5-year technology roadmap",
      headers: ["Year", "Capabilities", "Target placements", "Key milestones"],
      rows: [
        ["Year 1 — foundation", "Cashless EMV, contactless, basic telemetry, refund QR + SMS", "All existing placements", "Replace cash-only units; standardize telemetry"],
        ["Year 2 — campus card", "Campus card SDK, payroll deduction (staff), unified account + app", "Top 50% placements by traffic", "Sign FERPA DPA; certify SDK; pilot 5 placements"],
        ["Year 3 — AI cooler pilot", "AI cooler at union, library, athletics anchor placements", "5-10 anchor placements", "Replace highest-traffic combo with AI cooler"],
        ["Year 4 — full integration", "AI cooler scale-out; sustainability + STARS reporting; mobile app + loyalty", "20-30 placements with AI cooler", "STARS OP-8 + OP-9 alignment; planogram dietitian audit"],
        ["Year 5 — optimization", "Predictive restock, dynamic planogram, advanced loyalty, alumni network integration", "All placements", "Predictive ML; energy-efficiency capex refresh"],
      ],
    },
    {
      heading: "2. RFP template — required clauses",
      paragraph:
        "Use the clauses below in any vending RFP. Each maps to an operator capability the university should require in writing.",
      items: [
        { label: "Commission + minimum guarantee", value: "Operator submits commission tier table per volume bracket; minimum-guarantee floor per placement; quarterly true-up." },
        { label: "Uptime SLA", value: "98%+ per machine per month; service credit ($X/breach hour) for breach. Telemetry-driven measurement, not self-report." },
        { label: "Refund SLA", value: "≤ 24 hr credit-back to original tender; QR + SMS refund flow at every cooler; refund dashboard shared with campus." },
        { label: "Campus card SDK", value: "Operator certifies SDK integration with [campus-card vendor]; FERPA DPA signed; test in dev environment before contract execution." },
        { label: "PCI + security", value: "PCI-DSS 4.0 AOC + SAQ-B-IP; SOC 2 Type II in good standing; SIG/HECVAT response; pen-test report shareable under NDA." },
        { label: "Sustainability + STARS reporting", value: "Operator commits to quarterly sustainability report aligned to AASHE STARS OP-8 + OP-9 sub-credits (local share, plant-forward share, packaging recyclability, ENERGY STAR equipment)." },
        { label: "Dietitian + Smart-Snacks alignment", value: "Operator commits to ≥ 50% HHS-aligned facings; dietitian audit semi-annually." },
        { label: "Accessibility", value: "ADA Section 308 attestation per cooler; VPAT for digital interfaces; annual accessibility audit." },
        { label: "Insurance + indemnity", value: "$2M GL, $1M umbrella, cyber-liability $5M, food product liability $1M; additional-insured to university." },
        { label: "Transition + termination", value: "180-day operator transition obligation on termination; data export + retention obligations clear." },
      ],
    },
    {
      heading: "3. Integration checklist — campus systems",
      items: [
        { check: "Campus card vendor (Atrium / Blackboard / CBORD / TouchNet) SDK certified" },
        { check: "Campus IdP (Okta / Azure AD / Shibboleth) SSO for operator admin portal" },
        { check: "Campus VLAN provisioned for cooler fleet; egress whitelist to operator API + payment processor" },
        { check: "Auxiliary-services finance GL mapping for commission + sustainability subsidies" },
        { check: "Dietitian + dining services planogram review workflow" },
        { check: "Residence life + library admin escalation tree for incidents + refunds" },
        { check: "Campus brand standards approval workflow for cabinet wrap + signage" },
        { check: "Sustainability + STARS coordinator reporting cadence (quarterly + annual)" },
        { check: "Campus police + EHS coordination MoU for incidents + restock route" },
        { check: "Privacy office FERPA DPA signed + GLBA acknowledgment on file" },
      ],
    },
    {
      heading: "4. Operator evaluation framework — weighted scorecard",
      paragraph:
        "Apply a weighted scorecard to RFP responses. Adjust weights to fit campus priorities (e.g., sustainability-heavy campuses weight category 7 higher).",
      headers: ["Category", "Weight", "Sub-criteria"],
      rows: [
        ["Reference accounts + track record", "15%", "Peer-institution placements ≥ 12 mo; reference calls; turnover history"],
        ["Technology stack", "15%", "AI cooler platform; telemetry; cashless + campus card; app + refund automation"],
        ["Financial offer", "20%", "Commission tier; minimums; capital share; transition costs"],
        ["Security + privacy", "10%", "PCI; SOC 2; FERPA DPA; SIG/HECVAT response"],
        ["Service SLAs", "10%", "Uptime; refund; tier-1 response; route cadence"],
        ["Planogram + dietitian alignment", "10%", "HHS healthy share; allergen labeling; Smart-Snacks; refresh cadence"],
        ["Sustainability + STARS", "10%", "Local share; plant-forward; packaging; ENERGY STAR; workforce attestation"],
        ["Accessibility + experience", "5%", "ADA attestation; VPAT; refund flow; communications kit"],
        ["Transition + onboarding plan", "5%", "12-week plan; legacy data migration; staff training"],
      ],
    },
    {
      heading: "5. Pilot-to-scale workflow",
      items: [
        { number: 1, title: "Phase 0 — current-state audit", description: "Inventory existing placements, volume, contract terms, uptime, complaints. Establish baseline." },
        { number: 2, title: "Phase 1 — pilot RFP (5 placements)", description: "Issue RFP for AI cooler pilot at 5 high-traffic placements (union, library anchor, athletics, two residence halls). Award + install within 6 months." },
        { number: 3, title: "Phase 2 — pilot operations (6 months)", description: "Run pilot; collect uptime, refund, velocity, dietitian audit. Joint operator + campus quarterly review." },
        { number: 4, title: "Phase 3 — scale RFP", description: "Convert pilot learnings into final RFP for campus-wide program; structure as multi-year contract with annual scope adjustment." },
        { number: 5, title: "Phase 4 — campus-wide install", description: "Phased install over 12-18 months; legacy combo replaced or refurbished; new placements lit up." },
        { number: 6, title: "Phase 5 — optimization", description: "Year 2+ runs on annual review cadence; planogram + commission true-up annually; capital refresh on 5-7 year cycle." },
      ],
    },
    {
      heading: "6. Sustainability + AASHE STARS reporting",
      items: [
        { check: "OP-8 Sustainable Dining: % HHS-aligned, % plant-forward, % organic, % third-party-certified" },
        { check: "OP-8: local/regional share within 250 miles" },
        { check: "OP-9 Sustainable Procurement: ENERGY STAR equipment %; refrigerant GWP < 700 where supplied" },
        { check: "Packaging: % curbside-recyclable, compostable, or refillable" },
        { check: "Workforce: route-staff living-wage attestation" },
        { check: "Energy: kWh per cooler per year; trend year-over-year" },
        { check: "Annual operator sustainability report to STARS coordinator" },
      ],
    },
    {
      heading: "7. Risk + contingency planning",
      items: [
        { label: "Operator default", value: "Termination-for-cause clause + 180-day transition obligation; campus retains data export rights; second-place RFP respondent on standby." },
        { label: "Technology obsolescence", value: "Cooler refresh on 5-7 year cycle; operator commits to upgrade path on contract renewal." },
        { label: "Campus card vendor change", value: "Contract requires operator to re-integrate with new campus card vendor within 12 months at no cost beyond reasonable implementation fees." },
        { label: "Sustainability mandate change", value: "Contract amendment process if AASHE STARS or campus sustainability standard changes mid-contract." },
        { label: "Data breach", value: "Operator cyber-liability $5M; 24 hr notification SLA; campus privacy office leads coordinated response." },
        { label: "Volume shortfall", value: "Minimum-guarantee clause; placement consolidation flexibility built into contract." },
      ],
    },
    {
      heading: "8. Annual review + scope-change process",
      items: [
        { check: "Annual joint review meeting: auxiliary services + dietitian + IT + sustainability + privacy office" },
        { check: "Prior-year performance: revenue, commission, uptime, refund, dietitian audit, STARS metrics" },
        { check: "Scope-change requests: new placements, removed placements, planogram refresh, integration additions" },
        { check: "Commission-tier review based on actual volume vs tier thresholds" },
        { check: "Renewal decision: extend, re-RFP, or terminate; planning horizon ≥ 12 months before contract end" },
      ],
    },
  ],
  footer:
    "This pack is informational. Auxiliary services + procurement + dietitian + IT + privacy + sustainability office should jointly review operator capability claims and attestations before contract execution. Roadmap timing should align with capital-budget cycles + existing contract terms.",
});

console.log("wrote " + "future-university-vending-tech");
