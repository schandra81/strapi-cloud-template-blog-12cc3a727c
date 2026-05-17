import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "combo-vending-machines-for-office-breakrooms",
  assetType: "checklist",
  title: "Office Combo vs Paired vs AI Cooler Decision Framework",
  subtitle: "Employee-count threshold, operator capability checklist, and RFP scope",
  intro:
    "Use this framework to choose between a combo machine, a paired snack+beverage layout, and an AI-cooler / micro-market install for a 15-200 employee office. Choice is driven by headcount, breakroom footprint, planogram complexity, and operator capability — not aesthetics.",
  sections: [
    {
      heading: "Employee-count + format selection thresholds",
      paragraph:
        "These thresholds reflect Automatic Merchandiser 2024 State of the Industry per-stop revenue tables. Below 50 employees a combo is the only revenue-viable format; above 100 employees a combo will stockout and frustrate users.",
      headers: ["Employee count", "Recommended format", "Notes"],
      rows: [
        ["15-50", "Combo machine (snack + beverage in one cabinet)", "30-40 SKU max; weekly restock; commission typically 0-10%."],
        ["50-100", "Paired snack + beverage (two machines)", "60-80 SKU; 2x weekly restock; commission 10-15%."],
        ["100-150", "Paired + AI cooler (grab-and-go fresh)", "Adds fresh-food revenue; commission 15-20%; cold-chain required."],
        ["150-200", "Micro-market (kiosk + coolers + ambient racks)", "150+ SKU; daily/EOD restock; commission 15-25%; PCI-DSS scope."],
      ],
    },
    {
      heading: "When NOT to choose a combo",
      items: [
        { check: "Headcount > 75 — single-cabinet capacity will stockout daily." },
        { check: "Host wants > 30 SKUs — combo capacity caps at 30-40 SKUs across snack + beverage." },
        { check: "Host wants fresh food — combos don't typically support 41°F TCS food per FDA Food Code 2022." },
        { check: "Host wants per-SKU velocity data — most combos use legacy controllers without telemetry." },
        { check: "Host wants cashless on every selection — older combos retrofit poorly to PCI-DSS v4.0 readers." },
      ],
    },
    {
      heading: "Combo machine specification checklist",
      paragraph:
        "If your headcount fits the 15-50 employee range, specify the combo to industry standards. Avoid bargain combos with non-MDB controllers — they cannot be retrofitted for cashless or telemetry.",
      items: [
        { check: "Current-generation MDB controller (Crane, AMS, Seaga, USI/Wittern, Federal — current models)." },
        { check: "Cashless reader on the spec sheet — Nayax, Cantaloupe, or 365 Retail Markets; PCI-DSS v4.0 compliant." },
        { check: "Refrigerated lower section holds beverages at 33-40°F per FDA Food Code 2022." },
        { check: "ADA Section 308 reach range — highest operable part ≤ 48 inches; selection buttons + payment within reach." },
        { check: "UL 541 (refrigerated) or UL 751 (non-refrigerated) label present." },
        { check: "Drop-sensor / iVend — refunds automated on missed drops." },
        { check: "Telemetry — cellular modem with sub-15-minute heartbeat." },
        { check: "Energy Star certification (most current OEM models qualify)." },
      ],
    },
    {
      heading: "Operator capability checklist (any format)",
      items: [
        { check: "Telemetry on every machine; sub-15-minute heartbeat." },
        { check: "Service SLA Tier 1 < 24 hour resolution; documented in MSA." },
        { check: "Refund flow: app + on-machine touchpad + SMS-to-refund number." },
        { check: "Planogram refresh cadence every 45-60 days." },
        { check: "PCI-DSS v4.0 attestation (SAQ-C-VT or higher)." },
        { check: "ADA annual recertification per Section 308." },
        { check: "FDA Food Code 2022 cold-chain attestation (refrigerated SKUs)." },
        { check: "QBR cadence quarterly with stockout-rate, refund-rate, velocity reporting." },
      ],
    },
    {
      heading: "RFP scope template — what to ask",
      items: [
        { check: "Format recommendation (combo / paired / cooler / market) with employee-count rationale." },
        { check: "Sample planogram by SKU with wholesale + retail pricing." },
        { check: "Commission structure with stockout-rate-linked adjustments." },
        { check: "Service SLA tiers with credits for missed SLA." },
        { check: "Sample monthly + quarterly report formats." },
        { check: "Insurance COI ≥ $2M product liability with host as additional insured." },
        { check: "Three same-metro client references." },
      ],
    },
    {
      heading: "Cost benchmarks — operator-funded equipment (capital-light to host)",
      paragraph:
        "Most office vending in the US is operator-funded — operator owns the machine and recovers cost through margin. Below are typical sticker prices if a host chooses to buy equipment outright.",
      headers: ["Format", "Equipment cost (new)", "Equipment cost (refurb)", "Operator monthly net (typical)"],
      rows: [
        ["Combo (single cabinet)", "$5,500-$8,500", "$2,800-$4,500", "$200-$400"],
        ["Snack + beverage paired", "$9,000-$15,000", "$4,500-$8,000", "$500-$1,200"],
        ["AI cooler (single)", "$10,000-$18,000", "N/A — typically only new", "$800-$2,000"],
        ["Micro-market (kiosk + 2 coolers + ambient)", "$25,000-$60,000", "$15,000-$35,000", "$2,000-$6,000"],
      ],
    },
  ],
  footer:
    "This framework is operational guidance. Equipment costs vary by region and supply-chain conditions; obtain three quotes before committing to outright purchase.",
});

console.log("wrote "+"combo-vending-machines-for-office-breakrooms");
