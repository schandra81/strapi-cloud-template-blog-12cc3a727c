import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "early-termination-of-vending-contracts",
  assetType: "checklist",
  title: "Vending Contract Termination Framework",
  subtitle: "Trigger checklist, cure-period scoping, exit-fee benchmarks, and transition timeline",
  intro:
    "Use this framework when terminating a vending or micro-market MSA early. Most MSAs allow termination only on stated triggers with a cure period; jumping the cure clock invites a wrongful-termination claim. Standards cite PCI-DSS v4.0, ADA 2010 Standards, FDA Food Code 2022, and FALCPA.",
  sections: [
    {
      heading: "Trigger checklist — when is early termination defensible?",
      paragraph:
        "Termination triggers fall into four categories: SLA failures, compliance failures, financial failures, and conduct failures. Document each trigger in writing with date-stamped evidence.",
      items: [
        { check: "Repeated Tier-1 SLA failure — 3+ missed < 24-hour resolutions in a single quarter, documented in operator's own SLA-adherence report." },
        { check: "Refund-rate exceeding MSA KPI — typically > 3% sustained over 2 consecutive months." },
        { check: "Stockout-incident rate exceeding MSA KPI — typically > 5 incidents per machine per month sustained over 2 months." },
        { check: "PCI-DSS attestation lapse — operator can't produce a current SAQ-C-VT or ROC; this is a material breach per most MSAs." },
        { check: "Cold-chain failure resulting in TCS food at > 41°F sustained > 4 hours per FDA Food Code 2022." },
        { check: "Foodborne illness incident traceable to operator product; immediate-termination trigger." },
        { check: "ADA non-conformance unresolved after one cure period." },
        { check: "Insurance lapse — COI expired without renewal." },
        { check: "Material misrepresentation — operator certified compliance attestations that were not in fact current." },
        { check: "Operator conduct — theft, harassment, or unauthorized access by operator personnel." },
      ],
    },
    {
      heading: "Cure-period scoping",
      paragraph:
        "Most MSAs include a 30-day cure period for material breach. Some breaches require immediate termination without cure — verify your MSA's express carve-outs before issuing notice.",
      headers: ["Trigger category", "Cure period (typical)", "Notes"],
      rows: [
        ["SLA failure (Tier-1)", "30 days from notice", "Operator must demonstrate remediation plan + 30-day clean-record cure."],
        ["Compliance attestation lapse", "15-30 days", "PCI-DSS or ADA — operator must produce attestation within cure window."],
        ["Cold-chain temperature excursion", "Immediate", "FDA Food Code 2022 §3-501.16; no cure period for repeated excursion."],
        ["Foodborne illness", "Immediate", "No cure; operator removed from premises."],
        ["Insurance lapse", "10 days", "Operator must produce renewed COI within cure window."],
        ["Material misrepresentation", "Immediate", "No cure; founded on fraud / misrep."],
      ],
    },
    {
      heading: "Exit fees + financial transition",
      paragraph:
        "Industry-standard MSAs do not impose exit fees on host-initiated termination for cause. Operator-drafted MSAs may include 'liquidated damages' clauses — these are negotiable and often unenforceable as penalty clauses.",
      items: [
        { check: "For-cause termination — no exit fee. Operator removes equipment within 30 days at operator's expense." },
        { check: "For-convenience termination — exit-fee benchmarks: 1-3 months commission, capped at remaining contract value." },
        { check: "Equipment-buyout — only if host wants to retain machines; valued at depreciated book value, NOT replacement cost." },
        { check: "Unpaid commission — held by host until equipment removal and final reconciliation." },
        { check: "Sales-tax remittance — operator must complete final remittance and provide host with paid-in-full receipt." },
        { check: "Refund-pipeline — operator must process all pending refunds before final exit." },
      ],
    },
    {
      heading: "Transition timeline template (90-day standard)",
      items: [
        { number: 1, title: "Day 0 — Written notice of termination", description: "Issued by host counsel, references specific MSA section + trigger, requests acknowledgement within 5 business days." },
        { number: 2, title: "Day 5-10 — Operator response + cure plan (if applicable)", description: "Operator responds in writing; if cure period applies, operator's remediation plan documented." },
        { number: 3, title: "Day 30 — Cure-period close + termination effective", description: "If cure failed (or not applicable), termination is effective. Operator service continues during cure period." },
        { number: 4, title: "Day 30-60 — RFP for replacement operator", description: "Host issues RFP to 3-5 vetted operators. Capability-driven evaluation, not price-anchored." },
        { number: 5, title: "Day 60-75 — New operator MSA + installation prep", description: "Host signs MSA with new operator; new operator conducts site survey + electrical / data scope." },
        { number: 6, title: "Day 75-90 — Equipment swap", description: "Outgoing operator removes equipment; incoming operator installs; soft-launch with new planogram." },
      ],
    },
    {
      heading: "Documentation pack — required for defensible termination",
      items: [
        { check: "Last 12 months of SLA-adherence reports (operator-provided)." },
        { check: "Last 12 months of stockout-incident logs (operator-provided)." },
        { check: "Last 12 months of refund-rate reports (operator-provided)." },
        { check: "Last 12 months of cold-chain logs (operator-provided)." },
        { check: "Current PCI-DSS attestation (or evidence of lapse)." },
        { check: "Current ADA Section 308 recertification (or evidence of lapse)." },
        { check: "Current COI (or evidence of lapse)." },
        { check: "Service-ticket log with date-stamped entries showing missed SLA." },
        { check: "Written complaints from host employees or facility staff." },
        { check: "Any health-department, ADA, or PCI investigation findings." },
      ],
    },
    {
      heading: "Common operator pushback + responses",
      items: [
        { number: 1, title: "'You need to give us another cure period'", description: "Response: The MSA provides one cure period per breach; repeated breach of the same KPI exhausts cure. Cite contract section." },
        { number: 2, title: "'Exit fee is owed'", description: "Response: For-cause termination doesn't trigger exit fees in industry-standard MSAs. Liquidated-damages clauses are reviewable as unenforceable penalty clauses." },
        { number: 3, title: "'Equipment removal will take 60-90 days'", description: "Response: MSA typically requires removal within 30 days. After day 30, host may charge storage or dispose of equipment per MSA." },
        { number: 4, title: "'Final commission is owed'", description: "Response: Final commission is held until equipment removal + final reconciliation. Net of pending refunds, sales tax remittance, damages." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Termination notices should be reviewed by counsel licensed in your state before issuance; the consequences of a wrongful-termination claim materially exceed the cost of legal review.",
});

console.log("wrote "+"early-termination-of-vending-contracts");
