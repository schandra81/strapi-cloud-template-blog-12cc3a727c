import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "best-micro-market-vendors-near-me",
  assetType: "checklist",
  title: "Micro-Market Operator Evaluation Framework",
  subtitle: "Geography, capability matrix, six-criterion scoring, and reference checklist",
  intro:
    "Use this framework when evaluating operators for a 50-200 employee corporate micro-market. The six criteria below reflect NAMA Coffee, Tea & Water Council operator-vetting guidance and PCI-DSS v4.0 (March 2024) requirements applicable to unattended retail.",
  sections: [
    {
      heading: "Geography + service-radius verification",
      paragraph:
        "Most micro-market operators commit to ≤ 30 minutes drive time from a regional warehouse for daily restock viability. A stop outside that radius typically sees stockout-rate degradation within 60 days.",
      items: [
        { check: "Operator's regional warehouse is ≤ 30 minutes drive from your site." },
        { check: "Operator has at least 5 other active accounts in your metro." },
        { check: "Operator provides 3 same-metro client references (call them directly)." },
        { check: "Operator's emergency-service technician resides within 1 hour drive time." },
      ],
    },
    {
      heading: "Capability matrix — must-have features",
      paragraph:
        "Score the operator on each line. A miss on any of the first four lines is a disqualifier; misses on the remaining lines should be priced into the commission negotiation.",
      headers: ["Capability", "Required", "Notes"],
      rows: [
        ["PCI-DSS v4.0 attestation for kiosk + apps", "Yes", "Required as of March 31, 2024; obtain operator's ROC or SAQ."],
        ["365 Retail Markets, AVI-SPL, Three Square, or comparable kiosk platform", "Yes", "Single-source kiosk + back-office reduces integration risk."],
        ["Telemetry-driven restock (Cantaloupe, Nayax, or kiosk-native)", "Yes", "Sub-15-minute heartbeat; per-SKU velocity reporting."],
        ["Cold-chain monitoring with 4-hour SLA on temperature excursion", "Yes", "FDA Food Code 2022 §3-501.16; required for grab-and-go refrigerated."],
        ["NAMA membership + active Coffee, Tea & Water Council participation", "Preferred", "Indicates industry-standard practices."],
        ["Smart Snacks / corporate-wellness SKU sourcing", "Preferred", "Hosts with HR wellness programs need a documented SKU framework."],
        ["Quarterly Business Review cadence", "Required", "QBR is the contractual mechanism for performance improvement."],
        ["Bilingual customer-service line (English + Spanish)", "Preferred", "Material for many manufacturing + healthcare hosts."],
      ],
    },
    {
      heading: "Six scoring criteria",
      items: [
        { number: 1, title: "Telemetry + stockout track record", description: "Ask for stockout-incident reports from 3 existing accounts. Operators worth signing report < 3 stockouts per machine per month and < 5% of SKUs OOS at any given time." },
        { number: 2, title: "Service SLA adherence", description: "Ask for SLA-adherence data: Tier 1 incidents (machine down, payment failure) resolved within 24 hours ≥ 95% of the time. Anything below 90% is a red flag." },
        { number: 3, title: "PCI-DSS + data-security posture", description: "Verify operator has completed PCI-DSS v4.0 SAQ-C-VT or ROC. Ask for the attestation date and any open compensating controls." },
        { number: 4, title: "Planogram refresh cadence", description: "Operators with weekly velocity reporting refresh planograms every 45-60 days. Operators on quarterly refresh are typically slower to respond to host wellness or seasonal demand." },
        { number: 5, title: "Cold-chain attestation", description: "Operator should provide HACCP-style cold-chain logs (recorded at each restock) and 4-hour SLA on temperature excursion alerts. Required for grab-and-go fresh food per FDA Food Code." },
        { number: 6, title: "Renewal + termination terms", description: "Examine MSA termination clause — 30-90 day notice without cause is industry-standard. Anything requiring 'cause' or imposing exit fees > 3 months commission is non-standard and should be negotiated out." },
      ],
    },
    {
      heading: "Reference checklist — questions to ask 3 same-metro clients",
      items: [
        { check: "How long have you been with this operator?" },
        { check: "What's your typical stockout incident rate per month?" },
        { check: "How quickly does a Tier-1 service ticket get resolved? Give me a specific recent example." },
        { check: "Has the operator missed a QBR or planogram-refresh commitment in the last 12 months?" },
        { check: "Has there been a PCI-DSS, cold-chain, or refund-volume escalation? How was it handled?" },
        { check: "Would you sign with this operator again on the same terms?" },
        { check: "What's one thing you'd negotiate differently next time?" },
      ],
    },
    {
      heading: "Procurement timeline (typical 90-120 day cycle)",
      items: [
        { label: "Week 1-2", value: "Define employee headcount, breakroom footprint, planogram preferences, and wellness SKU policy." },
        { label: "Week 3-4", value: "Issue RFP to 3-5 operators meeting capability matrix; conduct site walks." },
        { label: "Week 5-6", value: "Receive proposals; score against six criteria; call references." },
        { label: "Week 7-8", value: "Down-select to 2 operators; conduct on-site pilot kiosk demo." },
        { label: "Week 9-12", value: "Negotiate MSA; complete COI verification; schedule install." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. PCI-DSS attestation and HACCP cold-chain practices should be verified by your compliance team before contract signature.",
});

console.log("wrote "+"best-micro-market-vendors-near-me");
