import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "future-school-vending-trends",
  assetType: "pack",
  title: "Future School Vending Adoption Roadmap",
  subtitle: "5-year sequenced trend plan covering AI cooler, Smart Snacks alignment, and cashless adoption",
  intro:
    "School vending is in the middle of a five-year shift: AI smart-coolers, fully cashless payment, telemetry-driven planograms, and stronger Smart Snacks alignment. This roadmap sequences the trend adoption so a district is equipped to commit each year's capability rather than chase trends reactively. References: USDA Smart Snacks in School (7 CFR 210.11), NAMA State of the Industry, NACS payment-mix reports, FDA Food Code.",
  sections: [
    {
      heading: "1. Five-year sequencing overview",
      paragraph:
        "Each year focuses on one capability layer. A district can compress the timeline, but skipping the telemetry foundation in Year 1 typically forces rework in Years 3-5.",
      headers: ["Year", "Primary capability", "Secondary capability", "Investment posture"],
      rows: [
        ["Year 1", "Telemetry baseline + cashless payment", "Smart Snacks Product Calculator workflow", "Equipment refresh — combo + beverage cooler"],
        ["Year 2", "Planogram refresh cadence + telemetry-driven assortment", "Allergen labeling + FALCPA compliance", "Process maturity — no major capital"],
        ["Year 3", "AI smart-cooler pilot in staff lounges", "After-school event-mode planogram", "Pilot capital — 1-2 units per HS"],
        ["Year 4", "Fresh-food / grab-and-go in cafeterias", "Student-ID payment integration (MySchoolBucks / Titan)", "Capital — fresh-food machines"],
        ["Year 5", "Full cashless conversion + AI cooler rollout in HS", "Wellness-policy refresh + QBR cadence", "Sustaining capital — refresh cycle"],
      ],
    },
    {
      heading: "2. Year 1 — telemetry + cashless foundation",
      paragraph:
        "Without telemetry, every subsequent capability is guesswork. The Year-1 milestone is a complete inventory of machines reporting sub-15-minute heartbeats to a single operator dashboard.",
      items: [
        { number: 1, title: "Telemetry RFP language", description: "Specify Cantaloupe, Nayax, 365 Retail Markets, or comparable cellular telemetry with per-SKU velocity reporting and temperature monitoring for refrigerated units." },
        { number: 2, title: "Cashless payment hardware", description: "EMV chip, contactless NFC, mobile-wallet support (Apple Pay / Google Pay). PCI DSS compliant; payment-failure rate < 1.5% target." },
        { number: 3, title: "Smart Snacks workflow", description: "Every SKU runs through the USDA Smart Snacks Product Calculator before planogram commit; operator provides written attestation per quarter." },
        { number: 4, title: "Wellness committee briefing", description: "District wellness committee briefed on telemetry capability and Smart Snacks workflow before Year-1 close." },
      ],
    },
    {
      heading: "3. Year 2 — assortment + allergen maturity",
      paragraph:
        "Year 2 turns the Year-1 telemetry into action: a quarterly planogram refresh that prunes bottom-quartile SKUs and replaces them with telemetry-validated top performers. Allergen labeling under FALCPA gets a process owner.",
      items: [
        { label: "Planogram cadence", value: "Quarterly refresh; bottom-20% sell-through SKUs replaced with telemetry-validated candidates from comparable schools." },
        { label: "Allergen labeling", value: "All SKUs carry FALCPA-compliant allergen labels visible from the clear floor space; allergen summary on the machine face." },
        { label: "Refund flow", value: "Cashless refund via app or SMS within 24 hours; refund rate > 2% triggers planogram or hardware review." },
        { label: "Wellness reporting", value: "Operator delivers quarterly compliance report to the wellness committee; report stored with the district nutrition director." },
      ],
    },
    {
      heading: "4. Year 3 — AI smart-cooler pilot",
      paragraph:
        "AI smart-coolers (AWM Smart Shelf, 365 Retail Markets PicoCooler, Selecta, Aramark Avenue C) are best piloted in staff lounges where Smart Snacks scope is reduced. Pilot success criteria are documented before launch.",
      items: [
        { check: "Pilot scope: 1-2 AI coolers in staff lounges per high school." },
        { check: "Success criteria: loss rate < 2%, transaction time < 30 sec, staff NPS ≥ +30." },
        { check: "Compliance scope: if student-accessible during school day, all SKUs filtered through Smart Snacks." },
        { check: "12-month pilot review with go/no-go decision for Year-5 expansion." },
        { check: "Telemetry integrates with existing operator dashboard." },
      ],
    },
    {
      heading: "5. Year 4 — fresh-food + student-ID payment",
      paragraph:
        "Fresh-food vending extends reimbursable-meal scope under NSLP and gives the cafeteria a grab-and-go channel for late arrivals and short lunch periods. Student-ID payment integration removes the cash barrier for free/reduced-price students.",
      items: [
        { label: "Fresh-food equipment", value: "Reach-in cooler with HACCP-style temperature monitoring; 35-40°F; per-SKU shelf-life tracking via telemetry." },
        { label: "Smart Snacks compliance", value: "Entrée ≤ 350 cal, ≤ 35% fat-calories, ≤ 480 mg sodium; snack ≤ 200 cal." },
        { label: "Student-ID integration", value: "MySchoolBucks, Titan, LINQ Connect, or comparable POS that recognizes free/reduced-price eligibility." },
        { label: "Allergen handling", value: "Peanut/tree-nut segregation; allergen labels on each SKU." },
      ],
    },
    {
      heading: "6. Year 5 — full cashless + HS AI cooler rollout",
      paragraph:
        "By Year 5, cashless payment crosses ~85-90% of transactions at most HS placements (consistent with NACS payment-mix data). AI smart-coolers expand from staff lounges to high-school staff areas and, where wellness policy permits, to student-accessible locations during the school day with Smart Snacks scope.",
      items: [
        { number: 1, title: "Cashless conversion", description: "Coin/bill acceptors removed or downgraded; signage directs members to cashless. Refund flow validated across all units." },
        { number: 2, title: "HS AI cooler", description: "AI coolers in staff areas at every HS; pilot evaluation for student-accessible AI coolers with full Smart Snacks scope." },
        { number: 3, title: "Wellness policy refresh", description: "District wellness policy refreshed to reflect telemetry, AI coolers, fresh-food, and after-school event mode." },
        { number: 4, title: "QBR cadence", description: "Quarterly business review with operator, school nutrition director, wellness committee chair, and athletics coordinator." },
      ],
    },
    {
      heading: "7. Trend-readiness scorecard",
      paragraph:
        "Use the scorecard at each annual review to confirm progress against the roadmap.",
      headers: ["Capability", "Year 1", "Year 3", "Year 5"],
      rows: [
        ["Telemetry coverage", "100% of machines", "100% + temperature", "100% + per-shift velocity"],
        ["Cashless mix", "≥ 60%", "≥ 75%", "≥ 85%"],
        ["Planogram refresh cadence", "Annual", "Quarterly", "Quarterly + event mode"],
        ["AI cooler deployment", "Not deployed", "Staff pilot 1-2/HS", "HS rollout"],
        ["Fresh-food vending", "Not deployed", "Cafeteria pilot", "Cafeteria standard"],
        ["Smart Snacks attestation", "Annual", "Quarterly", "Quarterly + SKU-level audit"],
      ],
    },
    {
      heading: "8. Operator capability checklist",
      items: [
        { check: "Operator has 24+ months of K-12 placement experience." },
        { check: "Operator can attest to telemetry, cashless, Smart Snacks workflow, and AI cooler pilot capability." },
        { check: "Operator has executed a wellness-policy review with the district." },
        { check: "Operator's restock cadence is contractually flexible." },
        { check: "Operator carries the standard K-12 insurance package (GL + auto + workers' comp + cyber)." },
        { check: "Operator reports quarterly KPI report and Smart Snacks compliance attestation in writing." },
      ],
    },
  ],
  footer:
    "This roadmap is a planning reference. Localize to the district's wellness policy and confirm state competitive-food rules with the district school nutrition director before commit.",
});

console.log("wrote "+"future-school-vending-trends");
