import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hospital-vending-revenue",
  assetType: "playbook",
  title: "Hospital Vending Revenue Playbook",
  subtitle: "Commission structure, revenue drivers, telemetry reporting, and commission distribution to designated fund",
  intro:
    "Hospital vending is one of the few amenity programs that returns commission revenue back to the hospital. Most facilities direct the commission into an employee-benefit fund, an auxiliary fund, or a designated patient-services fund. This playbook codifies commission structures, revenue drivers, telemetry-driven reporting, and the distribution mechanics that keep the program transparent and auditable for hospital finance.",
  sections: [
    {
      heading: "1. Commission-structure options",
      paragraph:
        "Most hospital vending agreements use one of four commission structures. Choice depends on the hospital's risk tolerance, expected volume, and infrastructure (equipment ownership, power, network).",
      headers: ["Structure", "Hospital share", "Operator share", "Best fit"],
      rows: [
        ["Percent-of-gross", "10-22% of gross revenue", "78-90%", "Standard; appropriate for most hospitals at moderate volume"],
        ["Tiered percent-of-gross", "Tier 1: 8-12%; Tier 2: 12-18%; Tier 3: 18-25%", "Sliding scale", "High-volume hospitals where stretch-tier rewards growth"],
        ["Fixed minimum + percent-of-gross", "$X/month minimum plus 8-15% of gross above breakeven", "Variable", "Lower-volume sites where hospital wants revenue floor"],
        ["Net-profit share", "30-50% of net profit after operator costs", "50-70%", "Hospital with strong audit capability; less common"],
      ],
    },
    {
      heading: "2. Revenue drivers",
      paragraph:
        "Five variables drive hospital vending gross revenue. Tuning each lifts total program revenue by 10-30%.",
      items: [
        { label: "Placement count and location", value: "More machines in higher-traffic locations = higher gross revenue. Optimal density: 1 machine per 75-150 employees + dedicated machines in family-waiting and ED-adjacent areas. Site survey identifies optimal placement before contract signing." },
        { label: "Planogram velocity tuning", value: "Telemetry-driven planogram refresh quarterly. Top-velocity SKUs receive more facings; under-velocity SKUs replaced. 15-25% gross revenue lift typical from first-year planogram tuning vs. static planogram." },
        { label: "Pricing strategy", value: "Hospital vending pricing typically 80-95% of convenience-store pricing for comparable SKUs. Premium SKUs (specialty coffee, RTD smoothies) priced at convenience-store parity. Below-market pricing erodes operator commission; above-market pricing reduces transaction volume." },
        { label: "Payment mix", value: "Cashless penetration target 70%+. Each percentage point of cashless adds 1-2% to per-transaction revenue (lower abandonment, faster transactions, fewer refunds). EMV contactless + venue wallet integration is the lever." },
        { label: "Uptime and reliability", value: "Each percentage point above 95% uptime correlates with 0.8-1.2% gross revenue increase. Top-quartile programs hold 98%+ uptime. Below 92% drives material revenue loss." },
      ],
    },
    {
      heading: "3. Telemetry-driven reporting",
      paragraph:
        "Commission accountability requires telemetry-grade reporting. Without it, the hospital cannot verify commission calculations or identify under-performing machines.",
      items: [
        { number: 1, title: "Monthly commission statement", description: "Per-machine gross revenue, refund volume, net revenue, applicable commission rate, commission owed to hospital. PDF and Excel-export available to hospital finance. Reconciled to operator payment processor records." },
        { number: 2, title: "Quarterly performance scorecard", description: "Per-machine uptime, refund rate, top-10 SKU velocity, planogram adherence, restock cadence performance vs. SLA. Identifies under-performers and recommends action." },
        { number: 3, title: "Annual revenue and commission summary", description: "Full-year gross, net, and commission with year-over-year comparison. Supports hospital budget and audit cycle." },
        { number: 4, title: "Audit-rights documentation", description: "Operator's payment processor (Cantaloupe, Nayax, USA Technologies, 365 Retail Markets, AWM Smart Shelf) records available to hospital on request with 30-day notice. Independent third-party audit available annually at hospital expense." },
      ],
    },
    {
      heading: "4. Commission-distribution mechanics",
      headers: ["Destination", "Common allocation", "Examples"],
      rows: [
        ["Employee benefit fund", "30-60%", "Staff appreciation events, employee wellness fund, healthcare-worker support fund"],
        ["Hospital auxiliary fund", "20-40%", "Volunteer program, patient comfort items, family-waiting amenities"],
        ["Patient-services fund", "10-30%", "Patient education materials, patient comfort items, language-services support"],
        ["Department-specific", "5-15%", "Designated unit fund (NICU, oncology, palliative care) where vending machine is placed adjacent"],
        ["Hospital general fund", "0-20%", "Lowest-priority; most hospitals direct commission to designated employee or patient fund"],
      ],
    },
    {
      heading: "5. Volume bands and benchmarks",
      paragraph:
        "Per-machine monthly gross revenue benchmarks vary by placement type, hospital size, and shift pattern. Operators benchmark new placements against these bands to set expectations.",
      headers: ["Placement type", "Low end", "Median", "High end"],
      rows: [
        ["Nursing-unit adjacent (high-traffic)", "$800/month", "$1,400/month", "$2,200/month"],
        ["Emergency department adjacent", "$1,200/month", "$2,000/month", "$3,500/month"],
        ["Cafeteria-supplemental staff break", "$400/month", "$700/month", "$1,200/month"],
        ["Family-waiting / lobby", "$500/month", "$900/month", "$1,500/month"],
        ["Outpatient clinic", "$300/month", "$500/month", "$900/month"],
        ["Overnight / quiet wing", "$200/month", "$400/month", "$700/month"],
      ],
    },
    {
      heading: "6. Annual program review and growth levers",
      items: [
        { check: "Quarterly business review with operator: per-machine revenue, uptime, SLA performance, planogram refresh recommendations." },
        { check: "Annual placement-density review: any machine below $400/month evaluated for relocation, downsizing, or removal." },
        { check: "Annual planogram refresh aligned with hospital food-services healthy-options guidelines and FALCPA allergen requirements." },
        { check: "Equipment lifecycle review: pre-2015 equipment scheduled for replacement; refresh schedule supports modern OEM telemetry and IoT capability." },
        { check: "Cashless penetration tracking: target 70%+; quarterly review of payment-failure rate and EMV terminal firmware." },
        { check: "Commission distribution audit: hospital finance verifies distribution to designated funds annually." },
        { check: "RFP refresh cycle: most hospitals re-bid every 3-5 years; market-rate commission structures and SLA terms benchmarked." },
      ],
    },
    {
      heading: "7. Financial-control and audit considerations",
      items: [
        { label: "Commission reconciliation", value: "Hospital finance reconciles operator monthly statement against telemetry-reported gross revenue. Variance > 2% triggers operator review and corrective action." },
        { label: "Refund treatment", value: "Refunds deducted from gross revenue before commission calculation. Operator refund log available for hospital audit." },
        { label: "Sales-tax treatment", value: "Vending sales-tax treatment varies by state. Some states (e.g., New York, California, Pennsylvania) impose sales tax on vending sales; others exempt. Operator collects and remits per state law; hospital commission calculated on net-of-tax revenue typically." },
        { label: "Equipment-cost separation", value: "Equipment lease, install, and maintenance costs typically operator's burden under percent-of-gross structure. Net-profit share structure requires line-item audit of operator costs." },
        { label: "Insurance and indemnification", value: "Operator carries general liability, product liability, and auto liability with hospital named additional-insured. Certificate of insurance refreshed annually; coverage limits typically $1M-$2M per occurrence." },
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate commission structure, distribution mechanics, and reporting cadence to your hospital's financial-control standards, audit expectations, and designated-fund priorities.",
});

console.log("wrote "+"hospital-vending-revenue");
