import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "national-vs-local-vending-companies",
  assetType: "matrix",
  title: "National vs Local Vending Operator Selection Framework",
  subtitle: "RFP evaluation criteria, capability matrix, and scoring rubric",
  intro:
    "The national-vs-local decision is not binary. A 1,200-employee single-campus client is well-served by a strong regional independent; a 40-state QSR franchisee fleet is not. The right answer is a function of footprint, technology stack, service density, financial controls, and how well the operator handles the failure modes you care about (cold-chain, payment, ADA, audit). This framework provides the RFP evaluation criteria, the capability matrix that distinguishes national from local capacity, and a 100-point scoring rubric capable procurement teams use to make a defensible award. Capability framing only.",
  sections: [
    {
      heading: "1. RFP evaluation criteria (eight categories, weighted)",
      paragraph:
        "Use these eight categories on the RFP. Weight by what matters to your placement profile — a multi-state fleet weights footprint + technology higher; a single-campus client weights service density + flexibility higher.",
      headers: ["Category", "What to ask for", "Recommended weight (single site)", "Recommended weight (multi-state)"],
      rows: [
        [
          "Footprint + service density",
          "Branches / depots within 50 mi of each placement; technician headcount per region",
          "10%",
          "20%",
        ],
        [
          "Technology stack",
          "VMS (Cantaloupe, Nayax, 365 Retail, Lightspeed); telemetry; payment stack; app",
          "15%",
          "20%",
        ],
        [
          "Operations capability + SLA",
          "Restock cadence; SLA tiers; uptime attestation; cold-chain SLA",
          "20%",
          "15%",
        ],
        [
          "Financial + audit",
          "PCI-DSS 4.0 AOC; revenue reconciliation; audit-rights; settlement cadence",
          "15%",
          "10%",
        ],
        [
          "Compliance + insurance",
          "$ liability limits; ADA attestation; FALCPA / FDA Food Code; OSHA",
          "10%",
          "10%",
        ],
        [
          "References + experience",
          "3+ active comparable placements ≥ 24 months; reference calls",
          "10%",
          "10%",
        ],
        [
          "Commercial terms",
          "Commission structure; minimum guarantee; co-branded planogram revenue",
          "10%",
          "10%",
        ],
        [
          "Flexibility + responsiveness",
          "Account-manager assignment; QBR cadence; cure-period responsiveness",
          "10%",
          "5%",
        ],
      ],
    },
    {
      heading: "2. National vs local capability matrix",
      paragraph:
        "Both archetypes have legitimate strengths and weaknesses. The matrix below maps where each typically wins and where each typically struggles. Operator-specific exceptions are common — score the operator, not the archetype.",
      headers: ["Capability", "National operator (Aramark, Canteen, Five Star)", "Regional / independent operator", "Notes"],
      rows: [
        [
          "Footprint (multi-state)",
          "Strong (40-50 state coverage typical)",
          "Limited (1-5 state coverage typical)",
          "National wins multi-state fleet RFPs",
        ],
        [
          "Service density at single site",
          "Variable (depot-dependent)",
          "Strong (often nearest depot)",
          "Regional wins single-site response time",
        ],
        [
          "Technology baseline (telemetry, cashless)",
          "Strong; uniform across fleet",
          "Variable; depends on operator investment",
          "National baseline higher; top regionals match",
        ],
        [
          "Account-manager continuity",
          "Variable; territory turnover risk",
          "Strong; owner-operator often direct",
          "Regional wins relationship continuity",
        ],
        [
          "CPG trade-marketing relationships",
          "Strong; national CPG account-managers",
          "Variable; depends on operator scale",
          "National wins co-branded promo revenue (Layer 3)",
        ],
        [
          "Cold-chain SLA infrastructure",
          "Strong; standard SLA documentation",
          "Strong if cold-chain-experienced",
          "Verify per-operator; not archetype-determined",
        ],
        [
          "ADA + compliance documentation",
          "Strong; standardized attestation",
          "Variable; smaller operators less standardized",
          "Top-tier regional matches national; verify with VPAT",
        ],
        [
          "PCI-DSS 4.0 + audit-rights",
          "Strong; AOC + SAQ-B-IP standardized",
          "Variable; smaller operators may rely on processor SAQ",
          "Verify before contract; refresh annually",
        ],
        [
          "Insurance limits ($2M+ liability)",
          "Standard",
          "Variable",
          "Confirm certificate before contract",
        ],
        [
          "Commission structure flexibility",
          "Less flexible (corporate margin discipline)",
          "More flexible",
          "Regional often wins on tiered MG + commission negotiation",
        ],
        [
          "Innovation cadence (AI cooler, micro-market)",
          "Strong; capital deployment funded",
          "Variable; depends on operator capital position",
          "Top regionals investing; verify with pilot reference",
        ],
        [
          "QBR + reporting cadence",
          "Standardized quarterly",
          "Variable",
          "Top regionals match; smaller operators less formal",
        ],
        [
          "Service surge capacity (event nights)",
          "Strong; multi-depot pool",
          "Variable; single-depot constraint",
          "National wins event-driven environments",
        ],
        [
          "Federal placement capacity (PIV, FBI Tier 3)",
          "Strong if federal-experienced",
          "Variable",
          "Operator must demonstrate active federal credential portfolio",
        ],
      ],
    },
    {
      heading: "3. 100-point scoring rubric",
      paragraph:
        "Score each operator on a 100-point rubric. The weighting below assumes a multi-state mid-size client; adjust weights to match your evaluation profile. Each row scored 0-10, multiplied by weight.",
      headers: ["Criterion", "Weight", "Max points", "What earns a 10"],
      rows: [
        [
          "Footprint vs your placement map",
          "1.5x",
          "15",
          "Branches / depots within 50 mi of 100% of placements; resident technician within 30 mi",
        ],
        [
          "Telemetry + VMS depth",
          "1.5x",
          "15",
          "Cellular telemetry every cabinet, 5-min heartbeat, real-time SKU velocity export, host portal access",
        ],
        [
          "Service SLA + uptime attestation",
          "1.5x",
          "15",
          "98%+ uptime telemetry-attested; Tier 1 < 24 hr; cold-chain < 4 hr; documented cure period",
        ],
        [
          "Financial controls + audit rights",
          "1.0x",
          "10",
          "PCI-DSS 4.0 AOC + SAQ-B-IP on file; monthly settlement with telemetry-export evidence; audit-rights clause",
        ],
        [
          "Compliance + insurance",
          "1.0x",
          "10",
          "$2M+ liability, ADA Section 308 attestation, VPAT, FALCPA, FDA Food Code adherence, OSHA program",
        ],
        [
          "References (3+ active ≥ 24 months)",
          "1.0x",
          "10",
          "Three comparable references, all ≥ 24 months in service, reference call confirms claims",
        ],
        [
          "Commercial terms",
          "1.0x",
          "10",
          "Tiered commission, optional MG, layers 2-7 revenue stack supported (CPG, screen, app, sponsorship)",
        ],
        [
          "Flexibility + responsiveness",
          "0.5x",
          "5",
          "Named account manager; QBR cadence; cure-period responsiveness in writing",
        ],
        [
          "Cold-chain SLA",
          "0.5x",
          "5",
          "≤ 4 hr cold-chain response; full product-loss credit for sustained > 2 hr excursion per FDA Food Code 3-501.16",
        ],
        [
          "Innovation / future fit (AI cooler, micro-market, digital signage)",
          "0.5x",
          "5",
          "Active pilot fleet, reference site, capital deployment plan",
        ],
      ],
    },
    {
      heading: "4. Award scoring guidance",
      items: [
        {
          label: "90-100: Strong award candidate",
          value:
            "Operator demonstrates capability across all weighted categories; reference checks confirm. Contract negotiation focuses on commercial terms and SLA cure-period language.",
        },
        {
          label: "75-89: Conditional award",
          value:
            "Operator has gaps in 1-2 categories. Award with corrective-action plan; require attestation of gap closure within 90 days. Common gaps: PCI documentation, ADA attestation, screen-ad capability.",
        },
        {
          label: "60-74: Re-bid or specific scope only",
          value:
            "Operator has gaps in 3+ categories. Consider for a sub-scope (single region, single cabinet type) where the gaps don't matter, or re-bid with the gaps stated as RFP requirements.",
        },
        {
          label: "Below 60: Decline",
          value:
            "Operator missing baseline compliance (PCI, ADA, insurance) or footprint mismatch. Decline; document in procurement file.",
        },
      ],
    },
  ],
  footer:
    "This framework is informational and not procurement advice for any specific RFP. PCI-DSS 4.0, ADA Section 308, FDA Food Code 3-501.16, and FALCPA are required compliance baselines. Capability claims should be verified through reference calls (3+ active comparable placements ≥ 24 months in service) and written attestation. Operator selection is jurisdiction-dependent and federal placements coordinate with the contracting agency. Capability framing only.",
});

console.log("wrote " + "national-vs-local-vending-companies");
