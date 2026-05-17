import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-negotiate-a-vending-contract",
  assetType: "checklist",
  title: "Vending Contract Negotiation Framework",
  subtitle: "Seven-lever checklist, RFP capability matrix, MSA amendment template",
  intro:
    "Use this framework when negotiating a vending or micro-market MSA from the host side. Most operator-drafted MSAs favor the operator on 5-7 of the seven levers below; structured negotiation typically improves 4-5 levers without affecting price. Standards cite PCI-DSS v4.0, ADA 2010, FDA Food Code 2022, and Automatic Merchandiser 2024 SOI commission benchmarks.",
  sections: [
    {
      heading: "Seven negotiation levers",
      paragraph:
        "Operator-drafted MSAs are negotiable on every lever below. The key is naming each lever and presenting a defensible counter — not a vague 'we want better terms.'",
      items: [
        { number: 1, title: "Term + renewal", description: "Operator default: 3-5 years with auto-renewal. Counter: 2 years initial, month-to-month after, 60-day non-renewal notice. Defends against locked-in underperformance." },
        { number: 2, title: "Commission structure", description: "Operator default: gross-sales % with no audit. Counter: net-sales % (after tax, refunds, processing fees), monthly reporting, annual audit right." },
        { number: 3, title: "Service SLA + credits", description: "Operator default: best-efforts language. Counter: tiered SLA (Tier-1 < 24 hr, Tier-2 < 7 day, Tier-3 < 14 day) with commission credits for missed SLA." },
        { number: 4, title: "Termination + cure", description: "Operator default: cause-only termination with 90-day cure. Counter: 30-90 day convenience termination + 30-day cure on material breach; immediate termination for foodborne illness, PCI breach, ADA non-conformance." },
        { number: 5, title: "Compliance attestations", description: "Operator default: omitted or vague. Counter: explicit PCI-DSS v4.0 + ADA Section 308 + FDA Food Code 2022 + FALCPA + state sales tax attestations; annual refresh; material-breach trigger if lapse." },
        { number: 6, title: "Indemnification + insurance", description: "Operator default: mutual indemnification, $1M product liability. Counter: operator indemnifies host for foodborne illness, PCI breach, ADA, sales-tax error; product liability ≥ $2M; cyber liability ≥ $1M; host named additional insured." },
        { number: 7, title: "Refund + customer-service flow", description: "Operator default: refund 'as available.' Counter: app + on-machine touchpad + SMS refund mechanisms; cashless refund < 24 hours; refund-rate KPI < 2% with root-cause review trigger." },
      ],
    },
    {
      heading: "RFP capability matrix — score operators before MSA negotiation",
      paragraph:
        "Operators score themselves higher than reality on capability. Verify each line with reference calls and documentation requests.",
      headers: ["Capability", "Required", "Operator score (1-5)", "Verification method"],
      rows: [
        ["Telemetry — sub-15-minute heartbeat, per-SKU velocity", "Yes", "—", "Live dashboard demo"],
        ["PCI-DSS v4.0 attestation", "Yes", "—", "Current SAQ-C-VT or ROC document"],
        ["ADA Section 308 annual recertification", "Yes", "—", "Recent attestation + photos"],
        ["FDA Food Code 2022 cold-chain attestation", "Yes (refrigerated)", "—", "Sample cold-chain log"],
        ["Service SLA tier structure", "Yes", "—", "MSA template + reference call"],
        ["Refund flow: app + on-machine + SMS", "Yes", "—", "Live demo + reference call"],
        ["QBR cadence quarterly with action items", "Yes", "—", "Sample QBR minutes"],
        ["Three same-metro references", "Yes", "—", "Direct reference call to each"],
      ],
    },
    {
      heading: "Commission benchmarks — defensible counters",
      paragraph:
        "Reflect Automatic Merchandiser 2024 SOI commission ranges. Use these to counter operator opening offers.",
      headers: ["Stop type", "Operator opening (typical)", "Defensible counter", "Industry range"],
      rows: [
        ["Small office (< 50 employees)", "0%", "0-5% or service-level guarantees in lieu of commission", "0-10%"],
        ["Mid office (50-200 employees)", "10%", "12-18% on net sales", "10-20%"],
        ["Large office (200+ employees)", "15%", "18-25% on net sales", "15-30%"],
        ["Industrial / 24/7 (any size)", "10%", "15-20% (operator's higher service cost balances)", "15-25%"],
        ["School (K-12)", "10%", "15-20% with Smart Snacks compliance attestation", "10-25%"],
        ["Hospital / healthcare", "12%", "15-22% on net sales", "15-25%"],
      ],
    },
    {
      heading: "MSA amendment template — common requested changes",
      items: [
        { check: "Replace 'gross sales' with 'net sales' (after sales tax, refunds, processing fees) in commission clause." },
        { check: "Replace 'best efforts' with specific Tier-1 / Tier-2 / Tier-3 SLA targets and commission credits." },
        { check: "Add explicit compliance attestation schedule (PCI-DSS + ADA + FDA + sales tax) with annual refresh." },
        { check: "Replace operator-state governing-law clause with host-state governing law." },
        { check: "Add audit right — host can audit operator records on 30 days notice annually." },
        { check: "Add convenience-termination clause with 60-90 day notice; no exit fees." },
        { check: "Add data-processing addendum if app collects PII." },
        { check: "Add immediate-termination triggers (foodborne illness, PCI breach, ADA non-conformance)." },
        { check: "Add equipment-removal clause — 30 days at operator expense after termination." },
        { check: "Add SLA-credit table as Exhibit to MSA." },
      ],
    },
    {
      heading: "Negotiation tactics",
      items: [
        { number: 1, title: "Lead with capability, not price", description: "Open the negotiation with the capability matrix. Operators expecting a price negotiation are unprepared for a capability-led negotiation and concede non-price terms quickly." },
        { number: 2, title: "Reference the industry standards", description: "Cite NAMA, Automatic Merchandiser SOI, PCI-DSS, FDA Food Code. Operators with documented compliance respect cited standards." },
        { number: 3, title: "Use the audit / reference call as leverage", description: "If reference calls surface SLA or refund concerns, ask the operator to address those concerns explicitly in the MSA." },
        { number: 4, title: "Stage concessions", description: "Offer concessions on lower-stakes levers (e.g., 30 vs 60 day notice) in exchange for high-stakes wins (e.g., immediate termination for foodborne illness)." },
        { number: 5, title: "Walk away if seven levers fail to move", description: "An operator unwilling to negotiate any of the seven levers is signaling they expect to underperform. Award to a different operator." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Have a state-licensed attorney review the final MSA before signature; state-specific clauses require local counsel.",
});

console.log("wrote "+"how-to-negotiate-a-vending-contract");
