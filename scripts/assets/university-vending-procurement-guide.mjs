import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "university-vending-procurement-guide",
  assetType: "rfp template",
  title: "University Vending Procurement Framework",
  subtitle: "RFP template, evaluation rubric, and contract terms for higher-education auxiliary services",
  intro:
    "University vending procurement is governed by state procurement code (typically aligned to Uniform Guidance 2 CFR Part 200), institution board policy, AASHE STARS sustainability commitments, Title IX program accessibility on campus, and ADA Title II reach-range and clear-floor-space standards. This framework gives the auxiliary services office + procurement + sustainability office a defensible RFP template, an evaluation rubric, and contract terms the board can adopt.",
  sections: [
    {
      heading: "1. Pre-RFP scope definition",
      paragraph:
        "Before issuing the RFP, the auxiliary services office defines scope explicitly. Most disputes in higher-ed vending procurement trace to scope gaps between vending, micro-markets, OCS (office coffee), and the campus dining contract.",
      items: [
        { label: "Equipment in scope", value: "List every building + every floor + every break room with current or proposed vending. Specify combo, snack, beverage, hot-beverage, AI cooler, micro-market by location." },
        { label: "Equipment out of scope", value: "Campus dining contract devices (typically Aramark, Chartwells, Sodexo, Compass, Bon Appétit). Athletic concession devices. Hospital devices on academic-medical-center campuses." },
        { label: "Geography", value: "Main campus + satellite campuses + housing + research buildings. Confirm coverage of off-campus institution-owned property." },
        { label: "Cohorts served", value: "Undergraduate, graduate, faculty/staff, visitors, conference attendees. Each cohort has different price sensitivity + planogram preference." },
        { label: "Beverage pouring-rights coordination", value: "Most universities have an exclusive pouring-rights contract with Coca-Cola or PepsiCo. Vending RFP must align — typically by reference to the pouring contract." },
      ],
    },
    {
      heading: "2. RFP template — required sections",
      items: [
        { number: 1, title: "Section A — Solicitation summary", description: "Institution name + tax ID, procurement officer + contact, response deadline, format requirements, evaluation timeline, board-approval requirement." },
        { number: 2, title: "Section B — Scope + equipment list", description: "Building-by-building equipment schedule, telemetry requirement, payment ecosystem (EMV chip + contactless + mobile wallet + campus card integration)." },
        { number: 3, title: "Section C — Bidder qualifications + gating", description: "Minimum years in business, three higher-ed references at comparable scale, insurance ($2M CGL minimum), state debarment screen clean, OFAC clean, e-Verify attestation." },
        { number: 4, title: "Section D — Sustainability requirements", description: "ENERGY STAR fleet share, AIM Act refrigerant compliance, packaging recyclability share, local + organic + fair-trade planogram share, AASHE STARS reporting alignment." },
        { number: 5, title: "Section E — SLA + telemetry", description: "97-98% uptime, tier-1 < 24 hr, refund < 24 hr cashless, cold-chain < 4 hr, telemetry vendor + heartbeat + data export." },
        { number: 6, title: "Section F — Accessibility + compliance", description: "ADA Title II + Section 308 attestation per device, FALCPA allergen labeling, FDA Menu Labeling where applicable, Section 508 for digital interfaces on touchscreen devices." },
        { number: 7, title: "Section G — Commission + financial", description: "Commission rate, calculation method, payment cadence, audit right, equipment investment, refresh cycle, term + renewal." },
        { number: 8, title: "Section H — Implementation + transition", description: "Equipment-install schedule, telemetry activation, planogram development, training of campus partners, transition cooperation with outgoing operator." },
      ],
    },
    {
      heading: "3. Evaluation rubric",
      headers: ["Dimension", "Weight", "Notes"],
      rows: [
        ["SLA + telemetry capability", "20%", "Uptime, ticket SLA, telemetry vendor, data export, audit right"],
        ["Sustainability commitments", "20%", "ENERGY STAR, refrigerants, planogram + packaging, STARS alignment"],
        ["Compliance + accessibility", "15%", "ADA, FALCPA, Section 508, insurance, background checks"],
        ["Commission + financial terms", "15%", "Commission rate, equipment investment, refresh cycle"],
        ["References + capability", "10%", "Reachable references, footprint, staffing"],
        ["Implementation plan", "10%", "Schedule, training, change management"],
        ["Community + local impact", "10%", "Local sourcing, student-employment, sustainability research"],
      ],
    },
    {
      heading: "4. Contract terms — university-specific clauses",
      paragraph:
        "In addition to standard vending location agreement clauses, university contracts typically add the items below. Coordinate with institution counsel + procurement.",
      items: [
        { label: "Board-approval rider", value: "Contracts exceeding the procurement threshold (typically $100K-$500K aggregate by state code) require board approval. Reserve the contingency in the contract." },
        { label: "Campus-card integration", value: "Vending payment accepts the campus card (Blackboard Transact, CBORD, TouchNet, etc.). Operator manages POS integration; institution retains data ownership." },
        { label: "FERPA on campus-card", value: "Where campus card includes student PII, FERPA limits what the operator may access. Transaction ID only; no name or demographic data." },
        { label: "Title IX accessibility on campus", value: "Vending placements in athletic facilities + recreation centers must meet Title IX program accessibility under 34 CFR 106.41." },
        { label: "Sustainability + STARS alignment", value: "Operator commits to quarterly STARS-aligned scorecard; annual narrative submitted by Jan 15 to support institution reporting cycle." },
        { label: "Pouring-rights coordination", value: "Vending beverage planogram aligns with the institution's pouring-rights contract (typically Coca-Cola or PepsiCo). Cross-reference in the contract." },
        { label: "Research data sharing", value: "Operator commits to making aggregate telemetry data available for faculty + student research projects under the institution's data-governance policy." },
        { label: "Revenue allocation transparency", value: "Where vending revenue is allocated to student programs (athletics, library, scholarships), the allocation policy is referenced in the contract." },
      ],
    },
    {
      heading: "5. Implementation timeline",
      headers: ["Phase", "Duration", "Owner", "Outputs"],
      rows: [
        ["RFP development", "6-8 weeks", "Procurement + auxiliary services + sustainability", "Final RFP + evaluation rubric + board memo"],
        ["RFP issuance + Q&A", "4-6 weeks", "Procurement", "Posted RFP + addenda + Q&A log"],
        ["Response window", "4-6 weeks", "Bidders", "Submitted responses"],
        ["Evaluation + interview", "3-4 weeks", "Evaluation committee", "Scored rubric + interview notes + recommendation"],
        ["Board approval", "1-2 board cycles", "Auxiliary services + procurement", "Board resolution"],
        ["Contract negotiation", "4-6 weeks", "Procurement + counsel + winning bidder", "Signed contract + exhibits"],
        ["Implementation + transition", "8-12 weeks", "Auxiliary services + winning bidder", "Equipment install + telemetry activation + go-live"],
      ],
    },
    {
      heading: "6. Common procurement gaps",
      items: [
        { label: "Pouring-rights misalignment", value: "Most universities have a Coca-Cola or PepsiCo pouring-rights contract. RFPs that don't reference it create operator-vs-pouring-rights conflicts within 6 months. Always cross-reference." },
        { label: "Sustainability platitudes without metrics", value: "Operators commonly write 'environmentally responsible' without per-metric commitments. Require ENERGY STAR %, refrigerant types, packaging %, fleet composition." },
        { label: "Campus-card integration scope gap", value: "Specify whether operator manages POS integration, who owns the data, and what FERPA-compliant data flow looks like. Without specification, transition is rocky." },
        { label: "No board-approval contingency", value: "Contracts above the procurement threshold require board approval; signed bids that bypass board approval can be void." },
        { label: "Sustainability office not on the evaluation committee", value: "AASHE STARS reporting depends on the sustainability office. Include them on the evaluation committee, not just for compliance review." },
        { label: "Transition cooperation undefined", value: "Outgoing operator needs to support transition for 60-90 days; specify in both the outgoing termination clause and the incoming contract." },
      ],
    },
  ],
  footer:
    "This framework is a working procurement reference, not legal advice. Final RFP + contract should be reviewed by institution counsel, procurement, auxiliary services, sustainability, and the campus-card office. Pouring-rights coordination + sustainability metrics + campus-card integration are the most commonly gapped areas; address all three before issuance.",
});

console.log("wrote "+"university-vending-procurement-guide");
