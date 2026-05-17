import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "cost-of-vending-for-gyms",
  assetType: "pack",
  title: "Gym Vending Cost & Commission Pack",
  subtitle: "Contract structures, commission negotiation, recovery cooler evaluation, gym-app SDK framework, operator selection",
  intro:
    "Gym vending economics differ from office vending: higher AUR (average unit revenue) from protein and recovery SKUs, but lower transactions per visit and seasonal volume swings. This pack covers the four contract structures, realistic commission ranges, recovery-cooler evaluation, gym-app integration, and how to choose an operator.",
  sections: [
    {
      heading: "1. Four contract structures — pick before negotiating",
      paragraph:
        "Gym operators commonly see four structures. Each shifts capex, opex, pricing control, and risk differently. Choose the one that fits the gym's brand model, financial profile, and member-experience priorities.",
      headers: ["Structure", "Capex / opex owner", "Pricing control", "Risk to gym", "Typical gym fit"],
      rows: [
        ["Full-service operator", "Operator owns + services", "Operator (host can request)", "Low", "Single-club + small chain"],
        ["Commission only", "Operator owns", "Operator + host approval", "Low", "Mid chains, 5-50 clubs"],
        ["Revenue share with subsidy", "Operator owns; host pays monthly", "Host", "Medium", "Premium / boutique"],
        ["Host-owned", "Host owns equipment + inventory", "Host", "High", "Large chains, branded retail focus"],
      ],
    },
    {
      heading: "2. Commission ranges — realistic 2024-2026",
      paragraph:
        "Commission is a percentage of gross sales (some operators pay on net of sales tax). NAMA 2024 State of the Industry pegs average vending commission at 12-22% with significant variance by category and location.",
      items: [
        { label: "Low-volume single club (<200 transactions/week)", value: "0-8% commission. Operator margin already thin; expect cabinet fees waived but no commission." },
        { label: "Mid-volume single club (200-800 transactions/week)", value: "10-18% commission, payable monthly or quarterly. Standard market range." },
        { label: "High-volume single club (800+ transactions/week)", value: "18-28% commission. Some operators offer signing bonus or capex contribution." },
        { label: "Chain-wide (5+ clubs)", value: "15-25% blended; higher-volume clubs subsidize lower-volume in a uniform commission schedule." },
        { label: "Premium / recovery SKUs", value: "Recovery shakes, protein, electrolyte drinks often carry separate commission line (often 5-10% lower than ambient snack) due to lower per-SKU margin." },
      ],
    },
    {
      heading: "3. Recovery-cooler evaluation — should the gym add one?",
      paragraph:
        "A recovery cooler (fresh protein shakes, recovery drinks, refrigerated meal-prep) is a category expansion. It carries higher revenue per square foot but also higher spoilage and higher equipment cost.",
      headers: ["Factor", "Threshold for viability"],
      rows: [
        ["Member count", "≥ 800 active members"],
        ["Peak hours density", "≥ 80 concurrent members at peak"],
        ["Strength / HIIT mix", "≥ 50% of class hours in strength / HIIT (drives recovery demand)"],
        ["Refrigeration capex", "$3,500-$6,500 per glass-front merchandiser, ENERGY STAR 4.0"],
        ["Spoilage allowance", "Budget 8-15% spoilage on fresh SKUs at launch, target 4-7% steady-state"],
        ["Refresh cadence", "Operator restocks fresh SKUs 2-3× weekly minimum (FDA Food Code §3-501.17 date-marking)"],
      ],
    },
    {
      heading: "4. Gym-app SDK framework — connecting vending to the membership",
      paragraph:
        "Mid and large chains increasingly want the vending stack to talk to the gym's member app (e.g., Mindbody, Glofox, ClubReady, GymMaster). The integration framework matters because it determines whether members can pay via app credits, see balances, or earn loyalty points.",
      items: [
        { label: "Tier 1 — open API operator", value: "Operator offers REST API for transaction events. Gym app team builds integration (typically 4-12 weeks). Examples: Nayax (Open API), Cantaloupe (Seed Connect API), 365 Retail Markets (PicoMarket API)." },
        { label: "Tier 2 — pre-built integration", value: "Operator and gym software vendor already have a pre-built connector. Saves engineering time. Verify direct existence before signing." },
        { label: "Tier 3 — closed-loop card / fob", value: "Member fob authenticates at machine; payment posts to member account. Common with 365 Retail Markets and Avanti micro-markets." },
        { label: "Tier 4 — no integration", value: "Vending operates on standard cashless (Apple Pay / Google Pay / contactless card). Acceptable for single club; suboptimal for chains pursuing loyalty data." },
      ],
    },
    {
      heading: "5. Hidden costs — what operators don't put in the headline",
      paragraph:
        "The headline commission rate omits 4-6 line items that materially change the economics. Audit each one in the contract.",
      items: [
        { check: "Cashless transaction fee — operator typically passes through 3-4% interchange; verify whether this is netted before commission." },
        { check: "Telemetry fee — $5-$20 per machine per month; verify who pays." },
        { check: "Cabinet electricity — most contracts put electricity on the host; ENERGY STAR 4.0 unit ≈ $80-$140/year at $0.12/kWh." },
        { check: "Equipment maintenance after year-1 — verify warranty period and post-warranty service rate." },
        { check: "Capex contribution / signing bonus — typical $500-$3,500 per machine on multi-year deals; verify pay-back if contract is terminated early." },
        { check: "Removal / decommissioning fee — operator may bill removal at $250-$750 per machine at term end." },
        { check: "Cardholder data compliance (PCI-DSS) — confirm operator carries PCI-DSS attestation; gym should not be the merchant of record." },
      ],
    },
    {
      heading: "6. Commission audit framework",
      paragraph:
        "A monthly commission report should show per-machine sales, sales tax handling, refund volume, and the math from gross sales to commission paid. Insist on these line items.",
      items: [
        { number: 1, title: "Per-machine gross sales", description: "Each machine sales by month, with per-SKU breakout available on request." },
        { number: 2, title: "Sales tax handling", description: "Note whether commission is calculated on gross-of-tax or net-of-tax; both are legitimate, but the contract must specify." },
        { number: 3, title: "Refunds + write-offs", description: "Refund volume, reason codes, and effect on commission base." },
        { number: 4, title: "Cashless processing fees", description: "If operator passes through, line item should show interchange amount." },
        { number: 5, title: "Telemetry / cabinet fees", description: "Itemized so the gym sees true effective commission rate." },
        { number: 6, title: "Service ticket log", description: "Volume, type, resolution time — supports SLA enforcement." },
      ],
    },
    {
      heading: "7. Operator selection criteria for gyms",
      items: [
        { check: "Telemetry-equipped fleet ≥ 80%; will dedicate telemetry-equipped units to the gym placement." },
        { check: "Carries at least 5 of: protein bars (Quest, Built, Barebells, Pure Protein, RXBAR), recovery shakes (Muscle Milk, Premier Protein, Fairlife Core Power), electrolyte drinks (BodyArmor, Liquid IV, Gatorade Fit)." },
        { check: "Provides ENERGY STAR 4.0 attestation per unit." },
        { check: "Provides ADA Section 308 + 305 reach + clear floor space attestation." },
        { check: "PCI-DSS attestation on cashless stack." },
        { check: "Open API or pre-built gym software integration available if the chain plans loyalty integration." },
        { check: "References from at least 2 prior gym deployments of comparable size; commission audit history available." },
        { check: "Insurance: GL ≥ $1M/$2M, auto ≥ $1M, workers comp per state; certificate names gym as additional insured." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to serve gyms across single-club and multi-club operations.",
});

console.log("wrote "+"cost-of-vending-for-gyms");
