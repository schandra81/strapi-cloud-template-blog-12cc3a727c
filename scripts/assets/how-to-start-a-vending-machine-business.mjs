import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "how-to-start-a-vending-machine-business",
  assetType: "playbook",
  title: "Vending Business Launch Playbook",
  subtitle: "Parallel-track execution and anchor account development for the first 6 months",
  intro:
    "Most vending business startups fail not on the equipment but on running the four launch workstreams in series instead of parallel. This playbook codifies the parallel-track execution model — entity + tax, equipment + telemetry, sourcing + planogram, and anchor-account sales — that gets a new operator to 8-12 placed machines in 5-7 months. Referenced against IRS Pub 583 (starting a business), NAMA (National Automatic Merchandising Association) operator practice, FDA FALCPA + FASTER Act labeling, FDA Food Code 2022 cold-chain, NEC 210.8 GFCI, and PCI-DSS 4.0 cashless requirements.",
  sections: [
    {
      heading: "1. Parallel-track timeline (months 1-7)",
      headers: ["Month", "Entity + finance", "Equipment + telemetry", "Sourcing + planogram", "Sales (anchor accounts)"],
      rows: [
        ["1", "LLC / S-corp filing, EIN, business banking", "Machine shortlist + telemetry vendor RFP", "Distributor accounts opened (Vistar, McLane, Eby-Brown)", "Anchor list (20-50 candidates), outreach starts"],
        ["2", "Sales-tax permits, liability insurance, surety bond if state-required", "Order 2-4 starter machines + telemetry SIMs", "Planogram v1 + healthy-share definition", "5-10 site walks scheduled"],
        ["3", "Bookkeeping / Quickbooks setup, payroll if hiring", "Machine delivery + telemetry activation", "First-stock order received + labeled (FALCPA)", "First contract signed — pilot site"],
        ["4", "Sales-tax filing cadence + business credit lines", "First installs + commissioning checklist", "Velocity baseline (4-week observation)", "2-3 additional contracts signed"],
        ["5", "Quarterly tax estimate + audit-trail review", "Telemetry-driven dispatch tuned", "Planogram v2 from telemetry data", "Anchor (50+ employee) account pursued"],
        ["6", "First QBR with anchor account", "Route planning + service-call SLA", "Quarterly assortment refresh", "8-12 machines placed; pipeline of 10-20"],
        ["7", "Cash-flow + reinvestment review", "Refresh + service contract for next 12 mo", "Healthy-share + dietary coverage audit", "First multi-machine commercial account"],
      ],
    },
    {
      heading: "2. Entity, tax, and compliance setup",
      items: [
        { number: 1, title: "Entity formation", description: "LLC for most solo operators; S-corp election at ~$50-80k+ net income for SE-tax planning. File with the Secretary of State; cost $50-$500 depending on jurisdiction." },
        { number: 2, title: "Federal + state registrations", description: "EIN from IRS (free, online), state sales-tax permit, local business license, FDA food-facility registration if applicable (21 CFR 1.225), some states require a 'merchandise vendor' permit." },
        { number: 3, title: "Insurance", description: "General liability $1M/$2M typical; product liability rider; commercial auto for the service vehicle; workers' comp where required by state once an employee is hired." },
        { number: 4, title: "Cashless / payments", description: "PCI-DSS 4.0 scope is reduced when telemetry/card readers tokenize at the point of swipe (Nayax, Cantaloupe, Worldnet, USAT). Attest to SAQ-B-IP at minimum." },
        { number: 5, title: "Recordkeeping", description: "IRS Pub 583 — keep receipts, mileage logs, service-call logs, and sales-tax detail for 4-7 years. Quickbooks Online or Wave for bookkeeping." },
      ],
    },
    {
      heading: "3. Equipment + telemetry scope",
      items: [
        { label: "Machine mix (starter pack)", value: "2 combo (snack + drink) or 1 snack + 1 drink. Newer used (Crane, AMS, USI, National) 5-10 years old runs $2,000-$4,500; refurbished $4,000-$7,000; new $5,500-$9,500." },
        { label: "Telemetry", value: "Cellular modem on every machine — Cantaloupe Seed, Nayax VPOS Touch, 365 Retail Markets Smart Series, or comparable. Cost $30-$60/machine/month. Non-negotiable for route economics." },
        { label: "Card reader / cashless", value: "EMV + NFC + mobile-wallet. Coverage rate at workplace placements typically 60-80% cashless; airports 80-95%." },
        { label: "Electrical", value: "NEC 210.8 GFCI 20A 120V receptacle within 6 feet of each machine; coordinate with site facilities." },
        { label: "Refrigerated machines", value: "FDA Food Code 2022 §3-501.16 — ≤41°F for TCS foods; thermometer in cold zone." },
      ],
    },
    {
      heading: "4. Sourcing + planogram",
      items: [
        { check: "Distributor accounts: Vistar (national vending wholesale), McLane (broadline), Eby-Brown (convenience), local C&S, Costco Business" },
        { check: "Planogram v1: 60% top-velocity SKUs (Cheez-It, Doritos, Pop-Tarts, Snickers, water, Coke, Pepsi, Red Bull), 25% mid-velocity, 15% healthy-share endcap" },
        { check: "Healthy-share definition documented (≤200 cal, ≤10g added sugar, ≤480mg sodium) so anchor accounts can reference it" },
        { check: "Allergen labels on every SKU per FALCPA + FASTER Act (top-9)" },
        { check: "Margin target: 50-55% gross margin on combined product mix; less is a planogram problem, more is a pricing problem" },
        { check: "Refresh cadence: quarterly drops/adds based on telemetry velocity" },
      ],
    },
    {
      heading: "5. Anchor-account development",
      paragraph:
        "Anchor accounts are 50-300 employee sites where one win unlocks two-machine economics. Targeting beats canvassing.",
      items: [
        { number: 1, title: "Target profile (anchor)", description: "50-300 employees, 24/5 or 24/7 schedule, single decision-maker (HR director / facilities manager), existing vending vendor underperforming." },
        { number: 2, title: "Outreach sequence", description: "LinkedIn + email + warm referral. Mention specific operating signal — telemetry uptime, refund-flow SLA, healthy-share %. Avoid generic 'we offer vending' pitches." },
        { number: 3, title: "Discovery questions", description: "Headcount, shift mix, existing vendor + frustration points, healthy-share + dietary-coverage requirements, commission expectation, contract length willingness." },
        { number: 4, title: "Pilot terms", description: "30-90 day pilot at single location, telemetry-reported KPIs (uptime, healthy-share velocity, refund rate, NPS), break clause." },
        { number: 5, title: "Commission framework", description: "Tiered by gross — 0% under $X, 5-10% on the next tier, 10-15% above. NAMA operator-survey median 5-8%." },
      ],
    },
    {
      heading: "6. Operational SLA the new operator must publish",
      items: [
        { check: "Tier 1 (offline / payment down / temperature excursion) <24 hr acknowledgement, <24 hr resolution" },
        { check: "Tier 2 (single SKU stockout) 24-48 hr ack, 5-7 day resolution" },
        { check: "Tier 3 (cosmetic / signage) 5-day ack, 14-day resolution" },
        { check: "Refund flow within 24 hours of member request (app / SMS / on-machine)" },
        { check: "Monthly route audit + quarterly business review with the anchor" },
        { check: "Insurance + sales-tax + ADA / FALCPA attestation provided in writing on request" },
      ],
    },
    {
      heading: "7. LetUsVending operator-network referral framework",
      paragraph:
        "New operators in the LetUsVending network gain access to anchor-account demand routing, telemetry vendor introductions, distributor reference codes, and the capability framework documented above. Network membership is qualified per market — capability assessment first, then route assignment.",
    },
  ],
  footer:
    "Informational reference, not legal/tax/accounting advice. Confirm entity formation, sales-tax registration, ADA compliance, and PCI scope with counsel for your facts and jurisdiction. Citations current at publication.",
});

console.log("wrote "+"how-to-start-a-vending-machine-business");
