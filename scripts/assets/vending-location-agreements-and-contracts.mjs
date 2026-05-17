import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-location-agreements-and-contracts",
  assetType: "template",
  title: "Vending Location Agreement Framework",
  subtitle: "Twelve core clauses, attorney guidance, and modern operator templates",
  intro:
    "A vending location agreement is the contract between the property host (landlord, building manager, employer, school district, hospital) and the vending operator that places + services equipment on the host's premises. Most disputes in the first 24 months of an operator relationship trace to gaps in this agreement. This framework gives the host's procurement or facilities lead a defensible twelve-clause structure, attorney-review guidance on the clauses most often litigated, and modern operator template variants for office, hospitality, healthcare, education, and industrial settings.",
  sections: [
    {
      heading: "1. The twelve core clauses",
      paragraph:
        "Every modern vending location agreement should address these twelve clauses. Order varies by attorney preference; substance is industry-standard.",
      items: [
        { number: 1, title: "Parties + premises", description: "Legal names of host + operator, premises address(es), specific zones within the premises where equipment is placed (with floor plan or schedule attached)." },
        { number: 2, title: "Term + renewal", description: "Initial term (commonly 36-60 months), renewal mechanism (auto-renew, mutual extension, or market-rate review), notice period (90-180 days typical)." },
        { number: 3, title: "Exclusivity + scope", description: "Whether the operator has exclusive vending rights on the premises, exclusions for competing modalities (cafeteria, OCS, micro-market by another operator), pouring-rights coordination if a Coca-Cola or PepsiCo agreement is in place." },
        { number: 4, title: "Equipment + services", description: "Make/model/quantity, telemetry vendor + heartbeat interval, payment ecosystem (EMV chip + contactless + mobile wallet), cashless required, restock cadence, planogram management." },
        { number: 5, title: "Commission + payment", description: "Commission rate, calculation method (gross of refund, net of tax, etc.), payment cadence (monthly typical), settlement date (by 15th of following month), audit right with telemetry data access." },
        { number: 6, title: "Service-level agreement", description: "Per-machine uptime target (97-98%), ticket SLA tiers, refund response, cold-chain SLA where applicable, remedies for SLA miss (commission credit, service-improvement plan, termination right)." },
        { number: 7, title: "Compliance + standards", description: "ADA Title III + Section 308 reach range; FALCPA allergen labeling; Smart Snacks attestation for K-12; FDA Menu Labeling Final Rule where applicable; refrigerant compliance under AIM Act for refrigerated devices." },
        { number: 8, title: "Insurance + indemnification", description: "Operator CGL $2M minimum aggregate, workers' comp, additional-insured endorsement naming host, waiver of subrogation, hold-harmless for slip/trip + product liability." },
        { number: 9, title: "Data + privacy", description: "PCI-DSS compliance through payment vendor, FERPA where K-12 student-account integration applies, host PII not shared with operator beyond transaction ID, data-breach notification requirements." },
        { number: 10, title: "Termination", description: "Termination for cause (30-day cure for material breach), termination for convenience (90-180 day notice mutual), bankruptcy + change-of-control triggers, equipment removal at termination." },
        { number: 11, title: "Assignment + change-of-control", description: "Operator cannot assign without host consent; change-of-control triggers host review right; sub-contracting limitations." },
        { number: 12, title: "Governing law + dispute resolution", description: "State of governing law (typically host's state), venue, dispute-resolution escalation (negotiation → mediation → arbitration or court), attorney's fees clause." },
      ],
    },
    {
      heading: "2. Attorney guidance — clauses most often litigated",
      paragraph:
        "Industry data on vending-contract disputes (where public) concentrates in five clauses. Counsel should review each with extra care.",
      items: [
        { label: "Exclusivity + scope", value: "Disputes arise when host adds a micro-market or OCS without the vending operator's consent, or when the vending operator's planogram conflicts with the host's beverage pouring-rights contract. Define exclusions explicitly." },
        { label: "Commission calculation method", value: "Gross-of-refund versus net-of-tax-and-refund produces materially different commission. Specify the methodology in a numerical worked example attached as an exhibit." },
        { label: "SLA remedies", value: "Aspirational SLA without monetary remedies is unenforceable in practice. Tie SLA miss to commission credit + service-improvement plan + termination right at threshold breaches." },
        { label: "Equipment removal at termination", value: "Operator should remove equipment within 30 days of termination at operator's cost; restore wall/floor/electrical to original condition. Without this clause, host may be stuck with abandoned equipment." },
        { label: "Audit right + telemetry access", value: "Without a documented audit right, host cannot verify operator-reported commission against actual telemetry sales. Include audit right + telemetry data export in every modern agreement." },
      ],
    },
    {
      heading: "3. Modern operator template variants",
      paragraph:
        "Major operator types maintain different boilerplate. The host's counsel should be aware of the default operator template before negotiating.",
      headers: ["Operator type", "Default term", "Default commission method", "Common gap to close"],
      rows: [
        ["National operator (Aramark, Compass, Canteen)", "5 years, 5-year auto-renew", "Commission % of net sales after refund + tax", "Auto-renewal trap; convert to mutual extension"],
        ["Regional independent", "3 years, 90-day notice", "Commission % of gross sales", "SLA without remedies; add commission-credit triggers"],
        ["OCS-led (office coffee + vending bundle)", "3-5 years, equipment-tied", "Blended OCS + vending commission", "Pouring-rights coordination; vending exclusivity scope"],
        ["Healthcare-specialized operator", "5 years, board-approved", "Per-machine flat + commission", "Schedule H community-benefit alignment language"],
        ["Education-specialized operator", "3 years, board-approved", "Commission % of net + revenue-allocation rider", "Smart Snacks attestation + FERPA on student-account integration"],
      ],
    },
    {
      heading: "4. Exhibit checklist — what to attach to the agreement",
      items: [
        { check: "Exhibit A — Premises floor plan + equipment schedule (machine make/model/serial/location)" },
        { check: "Exhibit B — Telemetry data fields + export format" },
        { check: "Exhibit C — SLA matrix + remedies" },
        { check: "Exhibit D — Commission calculation worked example" },
        { check: "Exhibit E — Insurance certificates + additional-insured endorsement template" },
        { check: "Exhibit F — Background-check + compliance attestation (education, healthcare, government)" },
        { check: "Exhibit G — Smart Snacks SKU list (K-12) or healthy-options planogram (hospital, hotel)" },
        { check: "Exhibit H — ADA + Section 308 attestation per device" },
        { check: "Exhibit I — Pouring-rights coordination (where Coca-Cola / PepsiCo contract in force)" },
        { check: "Exhibit J — Revenue allocation policy (hospital, school district)" },
      ],
    },
    {
      heading: "5. Pre-signing checklist for the host",
      paragraph:
        "Run through this checklist with counsel + procurement + the operating-line owner before signing. Most disputes are preventable here.",
      items: [
        { check: "Counsel review of the twelve clauses + the five most-litigated clauses" },
        { check: "Insurance certificate verified — limits, additional-insured, waiver of subrogation" },
        { check: "Three operator references called; each reachable + approved to discuss" },
        { check: "Commission methodology worked-example agreed to by host controller + operator account manager" },
        { check: "Telemetry vendor confirmed; sample monthly export reviewed by host finance" },
        { check: "SLA matrix reviewed by the operating-line owner (F&B director, GM, plant manager, district business manager)" },
        { check: "Pouring-rights coordination confirmed if a Coca-Cola or PepsiCo agreement is in force" },
        { check: "Termination + equipment-removal terms reviewed; restoration scope documented" },
        { check: "Audit right confirmed in writing with telemetry data export" },
        { check: "Board / corporate approval where the host policy requires it (school district, public hospital, public university, government agency)" },
      ],
    },
    {
      heading: "6. Negotiation playbook — five concessions to seek",
      items: [
        { number: 1, title: "Convert auto-renewal to mutual extension", description: "Five-year auto-renewal with 180-day notice is the operator default. Most hosts can negotiate to a 90-day mutual extension with a market-rate review at renewal." },
        { number: 2, title: "Increase commission by 2-5 points in exchange for longer term", description: "Operators typically accept higher commission in exchange for term length extension or equipment-investment certainty." },
        { number: 3, title: "Add audit right + telemetry access if absent", description: "This is non-negotiable in modern agreements; insist on it." },
        { number: 4, title: "Add SLA remedies — commission credit + termination right", description: "Aspirational SLA without remedies is the most common operator default; remedies make the SLA enforceable." },
        { number: 5, title: "Reserve revenue-allocation transparency", description: "Where host policy or board rule requires revenue allocation reporting, reserve the right in the contract." },
      ],
    },
  ],
  footer:
    "This framework is a working contractual reference, not legal advice. Final agreement should be reviewed by counsel and aligned to state code, host procurement policy, and any sector-specific standard (USDA Smart Snacks for K-12, IRS Schedule H for nonprofit hospital, brand standards for hotel, FAR for federal placement). The five most-litigated clauses warrant extra counsel review at signing.",
});

console.log("wrote "+"vending-location-agreements-and-contracts");
