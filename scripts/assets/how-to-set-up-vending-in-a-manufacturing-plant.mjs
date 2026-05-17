import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-set-up-vending-in-a-manufacturing-plant",
  assetType: "pack",
  title: "Manufacturing Vending Setup Pack",
  subtitle: "RFP criteria, site survey checklist, contract framework, and transition playbook",
  intro:
    "Setting up vending in a manufacturing plant the right way takes 60–90 days from kickoff to go-live. This pack consolidates the four working documents a facility services + HR team needs to run the procurement: RFP criteria with scoring weights, site survey checklist, contract framework, and a transition playbook for new program or operator change.",
  sections: [
    {
      heading: "1. RFP criteria — scored weights",
      paragraph:
        "Issue the RFP to 3–4 operators with manufacturing experience in your region. Score consistently across criteria below.",
      headers: ["Criterion", "Weight", "What to look for"],
      rows: [
        ["Manufacturing track record", "15%", "Operator-attested multi-shift PPE-zone-aware sites of comparable scale"],
        ["Telemetry depth (sub-15-min, per-shift velocity, cold-chain)", "15%", "Datasheet + dashboard demo"],
        ["SLA structure (Tier 1/2/3 + remedies)", "15%", "Written tiers; service credit remedy; after-hours escalation"],
        ["Fresh / refrigerated capability", "10%", "FDA-registered commissary; HACCP plan"],
        ["Payment + PCI", "10%", "PCI-DSS v4.0 AoC; EMV + contactless; offline-mode capability"],
        ["Payroll-deduct integration", "10%", "Workday / Kronos / UKG file format; bi-weekly cadence"],
        ["Wellness committee cooperation", "10%", "Quarterly planogram refresh; AHA-aligned slot share"],
        ["Insurance + indemnity", "8%", "$1M/$2M GL + product liability + cyber if cashless"],
        ["DEI / dietary inclusivity", "7%", "Vegetarian, GF, halal/kosher, low-sodium, diabetes-friendly slot share"],
      ],
    },
    {
      heading: "2. Site survey checklist",
      items: [
        { check: "Workforce headcount per shift; shift hours; rotating Saturday or 24/7 coverage flag" },
        { check: "Break-room footprint and pedometer flow at shift-change peak" },
        { check: "Existing vending or food-service equipment + condition" },
        { check: "Dedicated 20A circuits available or required new install (estimate $400–$1,500 each)" },
        { check: "Cellular signal strength: Verizon / AT&T / T-Mobile RSRP measurement at each placement; target ≥ −90 dBm" },
        { check: "Network — facility VLAN drop available with PCI segmentation attestation, or cellular-only preferred" },
        { check: "Egress + NFPA 101 §7.1 corridor width at each placement (≥ 44 in)" },
        { check: "Sprinkler clearance ≥ 18 in below deflector at each placement (NFPA 13 §8.6)" },
        { check: "Forklift / MHE path offset; OSHA 29 CFR 1910.176(a) aisle clearance" },
        { check: "ADA reach range, clear floor space, operating force feasibility at each placement (§§308, 305, 309)" },
        { check: "PPE zone overlay — placement strictly in break room, never on active production floor" },
        { check: "Climate control at placement zones (ambient 50–90°F for refrigerated cabinets per NSF-7 spec)" },
        { check: "Photographs of each placement at install + measurements retained 5+ years" },
      ],
    },
    {
      heading: "3. Contract framework — key clauses",
      items: [
        { number: 1, title: "Term + termination", description: "Typical 3-year initial term with 1-year auto-renew. Termination for convenience with 60–90 day notice; termination for cause with 30-day cure." },
        { number: 2, title: "SLA + service credit", description: "Three-tier SLA with remedies. Service credit = 50% of 90-day service fee if Tier 1 missed > 2x in 90-day period OR uptime < 95% for 2 consecutive months." },
        { number: 3, title: "Commission + subsidy mechanics", description: "Commission % tiered by site revenue (0% under threshold; 5–25% above). Subsidy mechanic via payroll-deduct or wellness account; reconciliation monthly." },
        { number: 4, title: "Audit rights", description: "Host has audit right on 30-day notice; operator opens commission books for inspection. Quarterly reports include unit counts + revenue per machine." },
        { number: 5, title: "Insurance + indemnity", description: "$1M / $2M GL + product liability + cyber if cashless. Cross-indemnity for third-party claims; mutual hold-harmless." },
        { number: 6, title: "PCI + data", description: "Operator attests to PCI-DSS v4.0 AoC current. Employee data (badge ID) handled under data terms; no PHI; no patient or customer data." },
        { number: 7, title: "ADA + safety attestation", description: "Operator attests in writing at install + annually to §§308, 305, 309 compliance; recertification photos + measurements." },
        { number: 8, title: "Transition + end-of-term", description: "Equipment removal at operator cost. Customer data + planogram history portable; operator returns or destroys per host instruction." },
      ],
    },
    {
      heading: "4. Transition playbook — new program",
      items: [
        { number: 1, title: "Week 1–2: kickoff + planogram principles", description: "Joint kickoff with operator AM + facility services + HR + wellness committee. Planogram principles drafted (AHA-aligned %, dietary inclusivity, subsidy mechanics)." },
        { number: 2, title: "Week 3–4: install prep", description: "Electrical install scheduled; cellular survey completed; planogram loaded; signage + comms drafted." },
        { number: 3, title: "Week 5–7: install + integration", description: "Equipment installed; telemetry verified; badge + payroll-deduct integration tested in staging; soft-launch shift 1." },
        { number: 4, title: "Week 8: workforce onboarding", description: "Onboarding comms 2 weeks pre-launch; signage at break-room entry; QR-coded refund flow; lunch-and-learns for committee members." },
        { number: 5, title: "Week 9–10: full go-live + first telemetry cycle", description: "All shifts live; first per-shift velocity report at end of week 10." },
        { number: 6, title: "Week 11–13: 90-day review", description: "Quarterly business review with operator. Decide expansion, contraction, or hold. Document lessons learned." },
      ],
    },
    {
      heading: "5. Transition playbook — operator change (recompete)",
      paragraph:
        "Operator change mid-contract or at end-of-term has its own playbook. Below covers the typical 60-day window.",
      items: [
        { number: 1, title: "T-60 days: notice + parallel planning", description: "Notice to outgoing operator. New operator runs site survey + signs contract. Workforce comms drafted." },
        { number: 2, title: "T-30 days: hardware swap planning", description: "Confirm whether equipment is operator-owned (most common in full-service) — outgoing operator removes; new operator installs. Refund tail handled by outgoing." },
        { number: 3, title: "T-14 days: workforce comms", description: "All-hands comms; signage refresh; new app / SMS / refund flow communicated." },
        { number: 4, title: "T-0: cutover", description: "Outgoing equipment removed in 24–48 hours; new equipment installed within 24–72 hours; signage updated; planogram loaded." },
        { number: 5, title: "T+30 days: stabilization review", description: "First-month telemetry; refund + escalation pattern review; any open issues from transition closed." },
      ],
    },
    {
      heading: "6. Indicative cost — setup",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Equipment (operator-funded in full-service)", "$0", "Capital recovered through revenue + service fee"],
        ["Electrical install (per circuit)", "$400 – $1,500", "Per dedicated 20A circuit"],
        ["Cellular signal kit (if needed)", "$0 – $800/machine", "Amplifier + antenna; often included"],
        ["Signage + workforce comms launch", "$400 – $1,800", "One-time"],
        ["Payroll-deduct integration", "$0 – $3,500", "One-time if integrating with Workday/Kronos/UKG for first time"],
        ["Workforce communications", "$200 – $800", "Onboarding materials + QR codes"],
        ["Total setup (one-time)", "$1,000 – $8,400", "Site-dependent"],
      ],
    },
    {
      heading: "7. Common setup mistakes — to avoid",
      items: [
        { check: "Skipping cellular signal verification → telemetry SLA fails at fringe-signal placements" },
        { check: "Skipping ADA measurements → § 308/305/309 failure becomes litigation exposure" },
        { check: "Subsidy mechanic via discount-at-PoS instead of badge ID → no per-FTE participation visibility" },
        { check: "Workforce comms skipped or rushed → low participation; subsidy budget wasted" },
        { check: "Contract missing service-credit remedy → no leverage when SLA missed" },
        { check: "No quarterly business review cadence → planogram drift; no continuous improvement" },
        { check: "Operator without PCI-DSS v4.0 AoC selected → cyber liability falls on facility" },
        { check: "No fresh / refrigerated capability → real-meal share stays low; participation plateaus" },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate manufacturing-plant vending setup through operators that can attest in writing to manufacturing track record, multi-shift telemetry, ADA + NFPA + OSHA compliant placement, PCI-DSS v4.0 cashless, and payroll-deduct integration. Capability documentation provided on request during scoping; we do not claim engagements at any specific named plant.",
    },
  ],
  footer:
    "Working reference for manufacturing facility services, HR, procurement, and wellness teams. Contract clauses and audit rights should be reviewed by counsel before signature.",
});

console.log("wrote "+"how-to-set-up-vending-in-a-manufacturing-plant");
