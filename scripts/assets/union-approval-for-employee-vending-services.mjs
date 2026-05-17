import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "union-approval-for-employee-vending-services",
  assetType: "pack",
  title: "Union-Coordinated Vending Services Pack",
  subtitle: "CBA provision review, RFP criteria, labor-management committee governance",
  intro:
    "Vending program decisions in a unionized facility are governed by the collective bargaining agreement (CBA) and the labor-management committee. Bringing in vending without coordination triggers grievances under NLRA Section 8(a)(5) (refusal to bargain over mandatory subjects). This pack frames the CBA provisions to review, the joint-decision RFP scoring rubric, and a governance structure that survives the next contract cycle.",
  sections: [
    {
      heading: "1. NLRA framing — why coordination is non-optional",
      paragraph:
        "Under NLRA Section 8(a)(5), employers must bargain in good faith over mandatory subjects of bargaining — including conditions that affect terms and conditions of employment. Vending services have been treated as a permissive subject in many cases, but specific elements (meal-break access, on-site food availability, pricing of subsidized SKUs, cashless-payroll integration) routinely cross into mandatory territory. The safe operating posture is joint coordination with the labor-management committee.",
    },
    {
      heading: "2. CBA provisions to review before issuing an RFP",
      paragraph:
        "Pull the current CBA and locate each of these provisions. Note section number for the RFP appendix.",
      items: [
        { label: "Meal and break period", value: "Defines unpaid meal break (typically 30 min) and paid rest breaks (typically 15 min × 2). Vending placement + access during these windows is the central operational question." },
        { label: "Food service / cafeteria provisions", value: "Many CBAs reference 'reasonable on-site food availability.' Vending often satisfies this requirement; the contract should make this explicit." },
        { label: "Wage deduction / payroll integration", value: "Any cashless system that integrates with payroll (badge-pay) is a mandatory subject. Requires CBA amendment or side-letter agreement." },
        { label: "Health and safety", value: "Hot-food vending, allergen labeling, refrigeration requirements may map to existing H&S provisions." },
        { label: "Subcontracting / outsourcing", value: "Some CBAs restrict bringing in contractors. Vending operators usually fall outside this language, but verify." },
        { label: "Labor-management committee scope", value: "The standing committee that reviews shop-floor issues. Make vending a standing agenda item." },
      ],
    },
    {
      heading: "3. Joint labor-management committee — governance structure",
      paragraph:
        "Establish a vending sub-committee or add vending as a recurring item on the existing labor-management committee. The structure below is standard.",
      headers: ["Role", "Seats", "Responsibilities"],
      rows: [
        ["Co-chair (management)", "1", "Facility manager or HR director. Sets agenda jointly with union co-chair."],
        ["Co-chair (union)", "1", "Local steward or business agent. Sets agenda jointly with management."],
        ["Members (per-shift)", "3-6", "1-2 stewards per shift; supervisors per shift. Ensures shift-3 voice."],
        ["Operator liaison", "1", "Operator's account manager. Attends quarterly; not a voting member."],
        ["EHS representative", "1", "Heat illness / allergen / cold-chain coordination."],
      ],
    },
    {
      heading: "4. Joint RFP scoring rubric",
      paragraph:
        "Union and management co-score each candidate operator on the 7 dimensions below. Score 1-5; weight by committee consensus.",
      headers: ["Dimension", "What to evaluate", "Typical weight"],
      rows: [
        ["Worker access + pricing", "Pricing fairness, subsidy structure, cashless without exclusion", "20%"],
        ["Shift coverage", "Service across shift-1 / shift-2 / shift-3; planogram tuned per shift", "15%"],
        ["Quality + variety", "Meal-format coverage; healthy share; allergen + dietary labeling", "15%"],
        ["Worker grievance / refund process", "Refund mechanism; how operator escalates complaints; union involvement in resolution", "15%"],
        ["Reliability + uptime", "Telemetry, SLA tiers, MTTR", "15%"],
        ["Labor practices (operator)", "Operator's own labor practices — is the route driver / restock crew union-friendly?", "10%"],
        ["Transparency + reporting", "Quarterly report to labor-management committee; open data access", "10%"],
      ],
    },
    {
      heading: "5. Contract clauses to include in the operator agreement",
      items: [
        { check: "Labor-management committee receives quarterly performance report (uptime, stockouts, refunds, planogram velocity)." },
        { check: "Pricing on a defined subsidy basket (water, fresh fruit, baseline meal) requires committee notice before change." },
        { check: "Planogram refresh proposals reviewed with committee before execution; committee has consultative input (not unilateral approval) on SKU mix." },
        { check: "Worker grievances about vending escalate via committee, not solely via operator's customer service." },
        { check: "Operator route drivers / restock crew labor practices disclosed annually." },
        { check: "Cashless / badge-pay system, if implemented, requires a side-letter agreement signed by both parties." },
        { check: "Operator commits not to use the breakroom space for advertising contrary to bargained terms (e.g., political content, anti-union messaging)." },
      ],
    },
    {
      heading: "6. Implementation timeline — typical 90-day joint process",
      items: [
        { number: 1, title: "Days 0-30 — committee formation + CBA review", description: "Stand up vending sub-committee. Review CBA provisions. Document shared baseline (current pain points, worker survey)." },
        { number: 2, title: "Days 30-60 — joint RFP issuance", description: "Co-developed RFP issued to 3-5 operators. Joint walk-through of facility. References + pricing reviewed jointly." },
        { number: 3, title: "Days 60-75 — operator interviews + reference checks", description: "Operator candidates present to full committee. Reference checks include union counterparts at reference sites where possible." },
        { number: 4, title: "Days 75-90 — joint selection + side letter", description: "Joint recommendation memo to facility manager + union local. Side letter (if cashless / payroll integration) drafted and ratified." },
      ],
    },
    {
      heading: "7. Worker communication — joint messaging",
      paragraph:
        "Communications about the program should be co-signed or jointly cleared. Sole-management messaging about a jointly-decided program is a common source of friction.",
      items: [
        { check: "Launch announcement co-signed by HR + union local." },
        { check: "Refund / grievance procedure posted on machine face with both management + union contact info." },
        { check: "Quarterly worker satisfaction snapshot — 3-question intercept survey, results shared with committee." },
        { check: "Pricing changes communicated ≥ 30 days in advance with rationale." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate joint RFPs, vet operator labor practices, and provide a neutral framework for labor-management committee review. We are not a labor relations or legal advisor — coordinate with your in-house labor counsel on CBA interpretation and any side letter language.",
    },
  ],
  footer:
    "Informational only — not legal or labor-relations advice. CBA interpretation and side letter drafting are the proper domain of in-house labor counsel and your union local.",
});

console.log("wrote "+"union-approval-for-employee-vending-services");
