import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-market-vs-specialty-vending",
  assetType: "checklist",
  title: "Micro-Market vs Specialty Vending Selection Framework",
  subtitle: "Placement criteria, infrastructure checklist, revenue projection, and operator capability",
  intro:
    "Use this framework to choose between a kiosk-anchored micro-market and a specialty-vending program (single-category machines for coffee, healthy, fresh-food, or branded items) for a 50-300 person facility. The two formats are not interchangeable; they serve different audience sizes and operational economics.",
  sections: [
    {
      heading: "Placement criteria — when each format wins",
      paragraph:
        "Specialty vending wins below 75 employees or where loss-prevention concerns or 24/7 operation rule out an open-shelf micro-market. Micro-market wins above 75 employees, longer dwell time, or where fresh-food + planogram complexity is required.",
      headers: ["Criterion", "Micro-market", "Specialty vending"],
      rows: [
        ["Audience size", "75-500+ employees with dwell time", "20-150 employees, any dwell pattern"],
        ["Loss prevention concern", "Lower-shrink populations (corporate, healthcare, mfg with badge access)", "Public access, high-traffic transit, 24/7 unsupervised"],
        ["SKU complexity", "100-300 SKUs across categories", "20-40 SKUs in a single category"],
        ["Fresh-food + cold-chain depth", "Required — multiple coolers + deli/sandwich/salad", "Single-category (e.g., one cold drink machine)"],
        ["Capital + footprint", "$25K-$60K equipment, 200-400 sq ft", "$5K-$18K per machine, 12-30 sq ft each"],
        ["Operator model", "PCI-DSS kiosk + daily restock + cold-chain", "Per-machine telemetry + 1-2x weekly restock"],
      ],
    },
    {
      heading: "Infrastructure checklist by format",
      paragraph:
        "Infrastructure scope is the most common reason a planned format slips. Validate before signing the MSA.",
      items: [
        { check: "Micro-market — 200-400 sq ft contiguous floor space (kiosk + 2 coolers + ambient racks)." },
        { check: "Micro-market — 4-6 dedicated 120V/20A circuits per NEC 2023 Article 422." },
        { check: "Micro-market — wired ethernet drop at kiosk; cellular failover ≥ -85 dBm." },
        { check: "Specialty vending — 1 dedicated 120V/20A circuit per machine; NEMA 5-20R within 6 feet." },
        { check: "Specialty vending — cellular signal ≥ -85 dBm or wired ethernet at each machine." },
        { check: "Both formats — ADA Section 305 clear floor space 30 inch × 48 inch at each operable part." },
        { check: "Both formats — ADA Section 308 reach range 15-48 inches on all operable parts." },
      ],
    },
    {
      heading: "Revenue projection — typical ranges (Automatic Merchandiser 2024 SOI data)",
      paragraph:
        "These ranges reflect mature programs in their second year — first year is typically 60-80% of mature. Adjust for region (Midwest 0.85x, West Coast 1.15x).",
      headers: ["Format / audience", "Monthly gross revenue", "Operator net margin", "Host commission (typical)"],
      rows: [
        ["Single combo (15-50 emp)", "$300-$700", "20-30%", "0-10%"],
        ["Paired snack+bev (50-100 emp)", "$1,200-$2,800", "22-30%", "10-15%"],
        ["Specialty single (one category)", "$600-$1,800", "25-35%", "10-20%"],
        ["AI cooler (75-150 emp)", "$2,000-$5,000", "20-28%", "15-20%"],
        ["Micro-market (100-250 emp)", "$4,500-$12,000", "18-25%", "15-25%"],
        ["Micro-market (250-500 emp)", "$10,000-$25,000", "20-28%", "18-28%"],
      ],
    },
    {
      heading: "Operator capability profile — required for either format",
      items: [
        { check: "Telemetry on every machine / kiosk; sub-15-minute heartbeat." },
        { check: "PCI-DSS v4.0 attestation (SAQ-C-VT or higher)." },
        { check: "FDA Food Code 2022 cold-chain attestation for refrigerated TCS food." },
        { check: "ADA Section 308 annual recertification." },
        { check: "Service SLA Tier-1 < 24 hours, Tier-2 < 7 days." },
        { check: "Refund-rate KPI < 2% of transactions." },
        { check: "QBR cadence quarterly with action items." },
        { check: "COI ≥ $2M product liability with host as additional insured." },
      ],
    },
    {
      heading: "Decision shortcut — which to pick",
      items: [
        { check: "< 50 employees → specialty or combo (micro-market won't pencil)." },
        { check: "50-75 employees, narrow SKU need → specialty paired with a coffee unit." },
        { check: "75-150 employees, broad need + fresh food → micro-market." },
        { check: "150+ employees → micro-market is the standard." },
        { check: "24/7 unsupervised public access → specialty vending only (shrink risk too high for open shelves)." },
        { check: "Single high-volume category (e.g., coffee at a 500-person call center) → branded specialty as the primary format." },
      ],
    },
  ],
  footer:
    "This framework is operational guidance. Revenue projections vary materially by region, audience, and operator capability — obtain projections from 3 vetted operators before committing.",
});

console.log("wrote "+"micro-market-vs-specialty-vending");
