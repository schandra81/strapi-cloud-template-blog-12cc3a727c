import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "managing-hospital-vending-multiple-locations",
  assetType: "pack",
  title: "Multi-Location Hospital Vending Pack",
  subtitle: "RFP template, contract structure, SLA framework, audit checklist",
  intro:
    "Health systems with 3+ hospitals plus outpatient + ambulatory locations need a different vending strategy than a single hospital. This pack covers multi-location RFP design, contract structures, SLA framework, and the audit checklist to keep performance consistent across sites.",
  sections: [
    {
      heading: "1. Multi-location strategy — three structures",
      paragraph:
        "Choose the structure that fits the system's scale, geographic footprint, and centralization preference.",
      headers: ["Structure", "Mechanics", "Best fit"],
      rows: [
        ["Single national operator", "One operator covers all sites under one master MSA", "Large IDN with footprint in multiple states; national operators like Compass Group / Canteen, Aramark Refreshments, Five Star Food Service"],
        ["Regional operator clusters", "2-4 regional operators each cover a region under aligned MSAs", "Mid IDN spanning 2-3 regions; balances local service with central governance"],
        ["Per-site operator + central governance", "Each site selects its own operator under a system-wide template", "Smaller IDN or recently-merged systems with legacy local relationships"],
      ],
    },
    {
      heading: "2. Master Services Agreement (MSA) framework",
      paragraph:
        "The MSA is the legal + commercial anchor. Use a single MSA across the system with site-specific Statements of Work (SOWs).",
      items: [
        { number: 1, title: "MSA scope", description: "Definitions, term, mutual representations, insurance, indemnification, limit of liability, IP, confidentiality, termination — items common to every site." },
        { number: 2, title: "SOW per site", description: "Equipment count + models, planogram, commission schedule, SLA tier per zone (ED, lobby, staff break, outpatient), zone-specific stakeholders." },
        { number: 3, title: "Master commission schedule", description: "Standard categories + rates; per-site overrides documented in SOW only with VP-level approval." },
        { number: 4, title: "Central governance", description: "Quarterly QBR at system level + per-site QBR; named system account exec at operator." },
        { number: 5, title: "Single billing point", description: "Operator invoices system materials management; system disburses to site cost centers." },
      ],
    },
    {
      heading: "3. RFP template — multi-location-specific items",
      paragraph:
        "Beyond the standard hospital RFP, multi-location adds operational + governance items that single-site RFPs miss.",
      items: [
        { check: "Geographic coverage proof: operator demonstrates direct or partner coverage in every site's metro market with named technician(s)." },
        { check: "Cross-site reporting: operator provides system-rollup dashboards (system → region → site → machine)." },
        { check: "Standardized planogram framework with per-zone variants (ED, lobby, staff, outpatient) deployable system-wide." },
        { check: "Standardized SLA tier definitions applicable system-wide with site-specific resolution adjustments." },
        { check: "EOC documentation pack delivered consistently per Joint Commission EOC.02.06.05 across all sites." },
        { check: "Cross-site refund + member-experience policy (member at site A redeems at site B)." },
        { check: "Vendor management: operator's subcontractor + partner policy if regional partners are required." },
        { check: "Commission audit at system level: monthly with quarterly true-up." },
        { check: "Telemetry rollup: site-level + system-level dashboards; data access for materials management." },
        { check: "References from at least 2 prior multi-site IDN deployments at comparable scale." },
      ],
    },
    {
      heading: "4. SLA framework — site-tier aware",
      paragraph:
        "SLAs vary by site type. A community hospital ED gets the same tightness as the academic medical center ED. Define tiers by site role, not site name.",
      headers: ["Site role", "Tier 1 Ack / Resolve", "Tier 2 Resolve", "Tier 3 Resolve"],
      rows: [
        ["Level 1 / academic ED + ICU", "≤ 1 hr / ≤ 12 hr", "≤ 24 hr", "5 days"],
        ["Community hospital", "≤ 2 hr / ≤ 24 hr", "≤ 48 hr", "7 days"],
        ["Outpatient / ambulatory", "≤ 4 hr / ≤ 48 hr", "≤ 72 hr", "7 days"],
        ["Administrative / corporate", "≤ 4 hr / ≤ 72 hr", "5 days", "14 days"],
      ],
    },
    {
      heading: "5. Audit + governance checklist",
      paragraph:
        "Without governance, multi-site contracts drift within 12 months. Build quarterly + annual audit cadence.",
      items: [
        { check: "Monthly: telemetry + commission report aggregation; flag sites > 1 standard deviation from system average on uptime, stockout, or commission %." },
        { check: "Quarterly: System QBR with operator senior leadership; per-site QBR with materials mgmt + facility ops." },
        { check: "Quarterly: Random site visits (2-4 sites per quarter); ADA + IP + planogram audit." },
        { check: "Semi-annual: Healthy-beverage / healthy-food framework compliance audit." },
        { check: "Annual: Full EOC documentation review per Joint Commission EOC.02.06.01 + EOC.02.06.05." },
        { check: "Annual: Insurance certificate refresh; verify aggregate limits remain adequate." },
        { check: "Annual: Operator financial health review (D&B, recent financial statements where contract allows)." },
        { check: "Annual: Contract performance scorecard published to system leadership." },
      ],
    },
    {
      heading: "6. Commission + finance structure",
      paragraph:
        "Multi-site commission structures benefit from blended rates that smooth per-site variance and allow the operator to invest in lower-volume sites.",
      items: [
        { label: "Blended commission", value: "Single % across all sites; lifts low-volume sites that would otherwise be uneconomic for the operator." },
        { label: "Tiered by site role", value: "Different rates for ED, lobby, staff, outpatient; reflects revenue + cost-to-serve differences." },
        { label: "Category-tiered", value: "Lower commission on premium / recovery SKUs (higher COGS); higher on ambient snacks." },
        { label: "Foundation share", value: "% of commission routed to system or local foundation per site (IRS Form 990 Schedule H community benefit alignment)." },
        { label: "Cashless interchange handling", value: "Pass-through specified at MSA; standard 2.9-4.0%." },
        { label: "Sales tax", value: "Operator manages multi-state sales tax collection + remittance per state DOR rules." },
      ],
    },
    {
      heading: "7. Planogram + brand consistency",
      paragraph:
        "Members visiting multiple system sites should see consistent quality + framework even if individual SKUs vary by region.",
      items: [
        { check: "System-wide planogram template: per-zone category share + healthy-tier minimums." },
        { check: "Top-50 system SKUs: required at every site for visitor familiarity." },
        { check: "Regional SKU tail: operator may swap up to 25% of facings for regional preferences without system approval." },
        { check: "Quarterly planogram refresh aligned with system marketing calendar." },
        { check: "Branded signage + tier-color labels per the chosen healthy framework — identical across all sites." },
      ],
    },
    {
      heading: "8. Operator capabilities required",
      items: [
        { check: "Demonstrated multi-site IDN deployment at ≥ 5 hospitals; references provided." },
        { check: "National or multi-region service coverage with named technician(s) per market." },
        { check: "System + site rollup telemetry + commission dashboards." },
        { check: "Standardized EOC documentation pack delivered consistently across all sites." },
        { check: "Named system account exec + per-region account managers." },
        { check: "PCI-DSS attestation maintained; cashless handled via operator merchant ID, not system." },
        { check: "Insurance with aggregate limits scaling to system footprint (typically GL $5M/$10M aggregate for system-wide deployments)." },
        { check: "Financial stability — D&B credit score acceptable to system finance; 3 years of audited or reviewed statements." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to support multi-location hospital vending across IDN footprints.",
});

console.log("wrote "+"managing-hospital-vending-multiple-locations");
