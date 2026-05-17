import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "school-administrator-guide-to-vending",
  assetType: "pack",
  title: "School Administrator Vending Pack",
  subtitle: "Procurement framework, compliance overlay tracker, contract structure template, category review cadence",
  intro:
    "K-12 vending is one of the few campus services governed simultaneously by federal nutrition law (7 CFR 210.11), state competitive-food rules, district wellness policy, and standard procurement law. This pack codifies the four artifacts an administrator needs — procurement framework, compliance overlay tracker, contract structure template, and category review cadence — so the administrator is equipped to run an audit-ready program rather than improvise.",
  sections: [
    {
      heading: "1. Procurement framework",
      paragraph:
        "Most districts procure vending through one of three pathways. The framework below identifies the right path based on revenue, scope, and state procurement law.",
      headers: ["Pathway", "When to use", "Threshold (typical)", "Documentation"],
      rows: [
        ["Cooperative purchasing (Sourcewell, OMNIA, TIPS)", "Standard scope, want operator quality vetted", "Any revenue", "Cooperative contract # + state approval"],
        ["RFP (district-issued)", "Custom scope, multi-campus, > $250K/year revenue", "Above state procurement threshold (varies)", "Full RFP + scoring rubric + board approval"],
        ["Direct award (small district)", "Single campus, ≤ state threshold", "Often < $50K/year", "Quote + board consent agenda"],
      ],
    },
    {
      heading: "2. Compliance overlay tracker",
      paragraph:
        "Vending compliance has four layers. The tracker lets the administrator confirm operator attestation against each layer before commit and at annual recertification.",
      items: [
        { number: 1, title: "Federal — Smart Snacks in School (7 CFR 210.11)", description: "All student-accessible SKUs during the school day pass the USDA Smart Snacks Product Calculator. Operator provides per-SKU attestation quarterly." },
        { number: 2, title: "Federal — FALCPA + FDA Food Code", description: "Allergen labels per FALCPA on every SKU; refrigerated units hold 35-40°F per FDA Food Code 3-501.16; HACCP-style temperature log for fresh-food." },
        { number: 3, title: "Federal — ADA Title III + Section 308", description: "Operable parts ≤ 48 inches above floor, ≥ 15 inches; ≤ 5 lbf operating force; clear floor space 30×48 inches; cashless option for users without coin/bill handling." },
        { number: 4, title: "State — Competitive food rules", description: "State agency rules layer above the federal floor; the school nutrition director confirms which state overlay applies." },
        { number: 5, title: "Local — District wellness policy (HHFKA § 204)", description: "Wellness committee approves SKU list, planogram, and after-school event mode." },
        { number: 6, title: "Local — Board policy", description: "Board approves vending contract and any revenue-sharing arrangement with athletics or PTA." },
      ],
    },
    {
      heading: "3. Contract structure template",
      paragraph:
        "The contract has six standard sections. Use this template as a starting point; legal counsel localizes for state law.",
      items: [
        { label: "Scope", value: "Number and type of machines, placement, audience, restock cadence, after-school event mode, donation pathway, and reporting." },
        { label: "Commission structure", value: "Percentage of gross sales or fixed per-machine fee; payment frequency (monthly typical); cash and cashless commission rates can differ." },
        { label: "SLA tiers", value: "Tier-1 (offline / payment / cold-chain): < 24-hour resolution. Tier-2 (stockout / planogram): 24-48-hour ack, 5-7-day resolution. Tier-3 (cosmetic): 14-day resolution." },
        { label: "Compliance attestation", value: "Operator attests to Smart Snacks, FALCPA, FDA Food Code, ADA Section 308, and state competitive-food rules at install and quarterly." },
        { label: "Insurance + indemnification", value: "GL ≥ $2M/$5M aggregate, auto, workers' comp, cyber. Operator indemnifies district for product liability per state cap." },
        { label: "Term + termination", value: "Initial term 36-60 months; termination for cause (SLA breach, compliance failure) on 30 days' notice; termination for convenience on 90 days' notice." },
      ],
    },
    {
      heading: "4. Category review cadence",
      paragraph:
        "Reviews happen at four cadences. The administrator owns the calendar; the school nutrition director and operator share the data.",
      headers: ["Cadence", "Owner", "Review scope", "Output"],
      rows: [
        ["Monthly", "Operator → administrator", "Telemetry KPI report (stockout, cashless mix, refund rate)", "Variance flag if any KPI is outside target"],
        ["Quarterly", "Wellness committee", "SKU list, planogram refresh, compliance attestation, parent feedback", "Approved planogram + corrective action plan"],
        ["Annually", "Administrator + nutrition director", "Contract review, KPI annual trend, audit attestation", "Continue / renegotiate / re-bid decision"],
        ["Triennially", "Wellness committee + board", "Full wellness policy refresh per HHFKA § 204", "Updated wellness policy"],
      ],
    },
    {
      heading: "5. Operator selection scorecard",
      paragraph:
        "Use this six-dimension scorecard to score operators in a competitive RFP or to validate a cooperative-purchasing pick. Each dimension scored 1-5; min total 24/30 for award.",
      headers: ["Dimension", "What to verify", "Score weight"],
      rows: [
        ["K-12 experience", "≥ 24 months of K-12 placements; 3 references", "20%"],
        ["Compliance capability", "Smart Snacks workflow + attestation history", "20%"],
        ["Telemetry + technology", "Cellular telemetry + cashless + planogram remote-push", "15%"],
        ["Service SLA + cadence", "Tiered SLA + restock cadence flexibility", "15%"],
        ["Wellness alignment", "Track record of wellness-committee engagement", "10%"],
        ["Commission economics", "Competitive rate + transparent reporting", "20%"],
      ],
    },
    {
      heading: "6. Annual recertification checklist",
      items: [
        { check: "Smart Snacks attestation refreshed for full SKU list." },
        { check: "ADA Section 308 site visit completed; measurements logged with photo." },
        { check: "FDA Food Code temperature logs reviewed; no excursions outstanding." },
        { check: "Insurance certificates current (GL + auto + workers' comp + cyber)." },
        { check: "Wellness committee minutes attached to procurement file." },
        { check: "Annual KPI trend report attached (12-month stockout, cashless mix, refund rate)." },
        { check: "State competitive-food overlay reviewed against any state-rule changes." },
        { check: "Board re-consent if contract term renewal applies." },
      ],
    },
    {
      heading: "7. Common administrator pitfalls",
      paragraph:
        "These are the six issues that most often surface in K-12 vending audits. Document mitigations in the operator contract.",
      items: [
        { label: "Smart Snacks drift", value: "SKU added by operator without per-SKU attestation. Mitigation: quarterly attestation + sample audit." },
        { label: "After-school window confusion", value: "Operator continues compliant planogram after last bell, losing event-mode revenue. Mitigation: contract addendum defines event-mode SKUs." },
        { label: "Temperature excursion gap", value: "Refrigerated unit deviates outside 35-40°F without alarm. Mitigation: 4-hour SLA alarm + monthly review." },
        { label: "Cashless gap", value: "Cashless coverage < 60% leaves free/reduced-eligible students without access. Mitigation: student-ID integration." },
        { label: "Refund opacity", value: "Refund rate not reported; member complaints accumulate. Mitigation: monthly KPI report + quarterly review." },
        { label: "Wellness committee disengagement", value: "Committee skips quarterly review. Mitigation: standing agenda item + 7-day pre-meeting packet." },
      ],
    },
  ],
  footer:
    "This pack is a working administrator reference. Localize to district procurement code and state competitive-food rules. Confirm board approval workflow with the superintendent's office before commit.",
});

console.log("wrote "+"school-administrator-guide-to-vending");
