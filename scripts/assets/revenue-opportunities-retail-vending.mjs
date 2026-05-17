import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "revenue-opportunities-retail-vending",
  assetType: "matrix",
  title: "Retail Vending Revenue Framework",
  subtitle: "Seven-layer revenue stack, operator capability matrix, and sample monthly settlement statement",
  intro:
    "Retail-center vending revenue is not a single number — it is a stack of seven layers, each with a different operator capability requirement. A landlord that only negotiates commission percent on layer 1 leaves the other six on the table. This framework codifies the seven-layer stack, the operator-capability matrix required to monetize each layer, and a sample monthly settlement statement that surfaces all seven. Capability framing only — actual revenue depends on traffic, equipment, and operator capacity.",
  sections: [
    {
      heading: "1. The seven-layer revenue stack",
      paragraph:
        "Each layer has a different unit economic profile and a different operator capability requirement. Capable operators surface all seven on the monthly statement; less-capable operators surface only Layer 1.",
      headers: [
        "Layer",
        "Revenue source",
        "Unit economic profile",
        "Operator capability required",
        "Center revenue share (typical)",
      ],
      rows: [
        [
          "1. Transaction commission",
          "% of gross from SKU sales",
          "Volume-driven, COGS 22-30% (snack/beverage), 35-45% (cold-chain)",
          "Telemetry-backed reporting, tiered commission structure",
          "5-18% depending on tier",
        ],
        [
          "2. Placement fee / minimum guarantee",
          "Fixed monthly or annual MG",
          "Floor under commission; protects low-volume placement",
          "Operator underwrites volume risk",
          "$500-$3,500 / cabinet / year typical",
        ],
        [
          "3. Co-branded planogram / promo placement",
          "CPG slotting fee + promo lifts",
          "CPG-funded; trade-marketing budget",
          "Operator with CPG trade-marketing relationships",
          "$0.50-$2.50 / facing / month or % uplift",
        ],
        [
          "4. Digital signage / screen ad inventory",
          "Cabinet-face digital screen ad sell-through",
          "Programmatic DOOH; CPM 4-12 typical",
          "Cabinet with digital screen (Cantaloupe, Vendekin, comparable)",
          "10-25% net ad revenue to host",
        ],
        [
          "5. Loyalty / app-driven attach",
          "App-based promo, loyalty-program sponsorship",
          "Per-redemption fee + member acquisition revenue",
          "Operator with app platform (Cantaloupe USAT, 365 Retail, Nayax)",
          "Negotiated, often co-marketing offset",
        ],
        [
          "6. Cabinet-face / wrap branding (sponsored cabinet)",
          "Sponsorship fee from CPG, financial, or category-exclusive partner",
          "Long-term agreement, 12-24 month terms",
          "Operator sells sponsorship; center approves brand",
          "30-50% net sponsorship to host",
        ],
        [
          "7. Data / shopper-insight share",
          "Anonymized SKU velocity + shopper pattern data sold to CPG / market-research",
          "Emerging revenue stream; per-cabinet data feed",
          "Operator with data partnership (Nielsen, Circana, IRI, Placer.ai)",
          "Negotiated per data agreement",
        ],
      ],
    },
    {
      heading: "2. Operator capability matrix (Layer 1 vs full-stack)",
      paragraph:
        "Most operators can deliver Layer 1; few can deliver all seven. The matrix below maps the capability gap. Score each candidate operator and require written attestation of which layers they support.",
      headers: [
        "Capability",
        "Layer 1 operator",
        "Mid-capability operator",
        "Full-stack operator",
        "Verification method",
      ],
      rows: [
        [
          "Telemetry + commission reporting",
          "Yes",
          "Yes",
          "Yes",
          "Cellular telemetry export, monthly settlement statement",
        ],
        [
          "Minimum guarantee underwriting",
          "Sometimes",
          "Yes",
          "Yes",
          "MSA appendix with MG by cabinet",
        ],
        [
          "CPG trade-marketing relationships",
          "No",
          "Sometimes",
          "Yes",
          "Reference CPGs (Coca-Cola, PepsiCo, Hershey, Mondelez), promo calendar",
        ],
        [
          "Digital screen ad inventory",
          "No",
          "Sometimes",
          "Yes",
          "Cabinet with screen, DOOH platform partner (Vistar, Place Exchange)",
        ],
        [
          "App / loyalty platform",
          "No",
          "Yes",
          "Yes",
          "Operator app (USA Technologies, 365 Pay, Nayax MoMa), member count",
        ],
        [
          "Sponsorship sales capability",
          "No",
          "No",
          "Yes",
          "Active sponsored-cabinet portfolio, references",
        ],
        [
          "Data partnership / panel",
          "No",
          "No",
          "Yes",
          "Data-partner agreement (Nielsen / Circana / IRI / Placer)",
        ],
        [
          "Audit + reconciliation rights",
          "Limited",
          "Yes",
          "Yes",
          "MSA audit clause, telemetry export on request",
        ],
        [
          "ADA Section 308 attestation",
          "Sometimes",
          "Yes",
          "Yes",
          "Written attestation at install + annually",
        ],
        [
          "PCI-DSS 4.0 attestation",
          "Yes (legal floor)",
          "Yes",
          "Yes",
          "AOC + SAQ-B-IP on file, annual refresh",
        ],
      ],
    },
    {
      heading: "3. Sample monthly settlement statement (all seven layers)",
      paragraph:
        "Capable operators settle all seven layers on the same monthly statement. A center comparing operator statements should expect to see line items below; absence is a capability gap.",
      headers: ["Line item", "Description", "Sample monthly amount"],
      rows: [
        [
          "Layer 1 — Gross sales (cabinet 001-007)",
          "Telemetry-backed gross from 7 cabinets",
          "$11,420",
        ],
        [
          "Layer 1 — Commission tier (12% blended)",
          "Tiered commission applied per cabinet revenue band",
          "$1,370",
        ],
        [
          "Layer 2 — Minimum guarantee (if applicable)",
          "Floor for cabinets 004 + 006 (low-volume zones)",
          "$0 (commission exceeded MG floor)",
        ],
        [
          "Layer 3 — CPG slotting / promo",
          "Trade-marketing facings for Coca-Cola Q-promo + Hershey HEDC",
          "$320",
        ],
        [
          "Layer 4 — Digital screen ad inventory share",
          "DOOH programmatic + direct sell across 4 screen-equipped cabinets",
          "$285",
        ],
        [
          "Layer 5 — Loyalty / app revenue share",
          "Member-acquisition + redemption-fee share (240 active members)",
          "$60",
        ],
        [
          "Layer 6 — Sponsored cabinet (cabinet 003)",
          "12-month financial-services sponsor at $1,200 / cabinet / month, 40% to center",
          "$480",
        ],
        [
          "Layer 7 — Data partnership share",
          "Anonymized velocity data to category panel; quarterly true-up",
          "$45",
        ],
        [
          "Total center revenue (this month)",
          "Sum of layers 1-7",
          "$2,560",
        ],
        [
          "Reference: Layer 1 alone",
          "What a Layer-1-only operator would settle",
          "$1,370",
        ],
        [
          "Incremental from layers 2-7",
          "Capability uplift over Layer 1 only",
          "$1,190 (+87%)",
        ],
      ],
    },
  ],
  footer:
    "This framework is illustrative. Actual revenue depends on cabinet count, zone foot traffic, operator capability, and CPG / sponsor demand in your market. Operator capability claims should be verified through reference calls and written attestation, with sample settlement statements provided before contract execution. PCI-DSS 4.0, ADA Section 308, and FDA Food Code 3-501.16 are required compliance baselines. Capability framing only.",
});

console.log("wrote " + "revenue-opportunities-retail-vending");
