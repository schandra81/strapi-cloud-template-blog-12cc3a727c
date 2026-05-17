import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hotel-vending-contracts-guide",
  assetType: "template",
  title: "Hotel Vending Contract Template",
  subtitle: "Eight contract dimensions, SLA clauses, and equipment-ownership comparison for full-service, select-service, and limited-service hotels",
  intro:
    "Hotel vending sits at the intersection of guest-experience scoring (J.D. Power, Forbes Travel Guide, AAA Diamond inspection), brand-standard compliance (Marriott BSA, Hilton OS&E, IHG Brand Standards), and limited operational bandwidth in select-service and limited-service properties. This template gives the GM, the F&B director, and the brand procurement office a defensible eight-dimension contract that maps to brand-standard inspection items and protects the operating reserve.",
  sections: [
    {
      heading: "1. Equipment ownership — three models compared",
      paragraph:
        "Most hotel operators choose between operator-owned, hotel-owned, and lease-to-own. Each has implications for capex, commission rate, refresh cycle, and brand-standard refresh compliance.",
      headers: ["Model", "Capex", "Commission rate", "Refresh responsibility", "Best fit"],
      rows: [
        ["Operator-owned (full-service operator)", "$0 hotel capex", "10-25% commission to hotel", "Operator (typically every 5-7 years)", "Select-service + extended-stay; properties under 200 keys"],
        ["Hotel-owned (operator services only)", "Full capex on hotel ($8K-$25K per machine)", "60-85% net retained by hotel", "Hotel (capex cycle on the hotel)", "Full-service + resort properties with brand-mandated equipment spec"],
        ["Lease-to-own", "Monthly lease payment ($150-$350/mo)", "40-60% retained by hotel after lease", "Operator during lease; hotel after buyout", "Properties planning brand-conversion or major renovation"],
      ],
    },
    {
      heading: "2. The eight contract dimensions — required clauses",
      paragraph:
        "Every hotel vending contract should address these eight dimensions explicitly. Missing dimensions are the most common source of dispute in the first 24 months of an operator relationship.",
      items: [
        { number: 1, title: "Equipment specification + brand-standard compliance", description: "Specify make/model, telemetry vendor, cashless reader (Apple Pay + Google Pay + tap), ADA Section 308 reach-range compliance, and brand-standard appearance package (cabinet color, signage, brand-approved façade where applicable)." },
        { number: 2, title: "Service-level agreement (SLA)", description: "Restock cadence (weekly minimum; twice-weekly for high-occupancy resorts), service-ticket SLA (Tier 1 < 24 hours, Tier 2 < 5 days), refund response (< 24 hours via app/SMS), uptime target (typically 97-98%)." },
        { number: 3, title: "Commission + payment terms", description: "Commission rate, calculation method (gross or net of sales tax and refund), payment frequency (typically monthly), settlement date (commonly by 15th of following month), commission floor where negotiated." },
        { number: 4, title: "Planogram + product mix", description: "Brand-standard healthy-options percentage (commonly 35-50%), allergen labeling per FALCPA, beverage-pouring-rights coordination with hotel beverage contract, seasonal refresh cadence." },
        { number: 5, title: "Telemetry + reporting", description: "Cellular-modem telemetry on every machine, monthly per-machine + per-SKU report, uptime + stockout + refund metrics, audit-right clause for hotel to verify commission against telemetry." },
        { number: 6, title: "Term + termination", description: "Initial term (commonly 36-60 months), renewal mechanism (auto-renew vs. mutual extension), termination-for-cause notice (typically 30 days), termination-for-convenience option, equipment removal terms at termination." },
        { number: 7, title: "Insurance + indemnification", description: "Operator-side commercial general liability (typically $2M aggregate), workers' comp on operator personnel, hold-harmless for slip/trip on machine area, additional-insured endorsement naming hotel + brand." },
        { number: 8, title: "Guest-experience + escalation", description: "Front-desk + guest-services escalation contact, response time during guest complaint, alignment with Marriott BSA / Hilton OS&E / IHG Brand Standards equivalents, refund flow accessible without front-desk involvement." },
      ],
    },
    {
      heading: "3. SLA clause language — drop-in",
      paragraph:
        "Reference language for the SLA section. Adjust uptime + cadence numbers to match your operator capability and property occupancy profile.",
      items: [
        { label: "Uptime", value: "Operator shall maintain a 97% per-machine monthly uptime measured by telemetry. Uptime below 95% for two consecutive months triggers a service-improvement plan; below 90% for two consecutive months triggers termination-for-cause rights." },
        { label: "Restock cadence", value: "Minimum weekly restock; high-occupancy seasons (defined as STR occupancy > 80%) require twice-weekly restock. Operator restock log delivered monthly with the commission statement." },
        { label: "Service tickets", value: "Tier 1 (machine offline, payment failure, cold-chain excursion) — acknowledgement within 4 hours, resolution within 24 hours. Tier 2 (single SKU stockout, planogram refresh) — acknowledgement within 24 hours, resolution within 5 business days." },
        { label: "Guest refunds", value: "Refund flow accessible via mobile app, SMS-to-refund number, or front-desk-issued credit. Refund credited to original payment method within 24 hours for cashless transactions; cash refunds within 7 days." },
        { label: "Cold-chain", value: "Refrigerated devices monitored continuously; temperature excursion outside 35-40°F triggers alert with 4-hour SLA response. Spoilage events documented in monthly statement." },
      ],
    },
    {
      heading: "4. Commission calculation — worked example",
      paragraph:
        "Use this worked example to align operator + hotel finance on the commission methodology before contract signing. Avoids the most common reconciliation dispute.",
      headers: ["Line", "Method A — gross of refund", "Method B — net of refund + tax"],
      rows: [
        ["Gross vending sales (telemetry)", "$5,200", "$5,200"],
        ["Sales tax collected", "Excluded", "$390 (7.5%)"],
        ["Refund volume", "$104 (2%)", "$104"],
        ["Commissionable base", "$5,200", "$4,706"],
        ["Commission rate", "20%", "20%"],
        ["Hotel commission", "$1,040", "$941"],
      ],
    },
    {
      heading: "5. Brand-standard alignment",
      paragraph:
        "Major hotel brands publish brand-standard inspection items that touch vending. Operator capability should be verifiable against each.",
      items: [
        { label: "Marriott BSA + GuestVoice", value: "Marriott Brand Standards Audit (BSA) inspects vending area cleanliness, signage, ADA reach range, and healthy-options availability. GuestVoice guest survey includes 'snacks and beverages' attribute. Operator should attest to BSA-ready presentation." },
        { label: "Hilton OS&E + SALT", value: "Hilton Operating Supplies & Equipment list defines approved equipment finishes for branded properties; SALT guest survey scores snack-and-beverage availability. Operator confirms OS&E-compliant cabinet finishes where applicable." },
        { label: "IHG Brand Standards + HeartBeat", value: "IHG Brand Standards inspection covers vending placement, accessibility, and product-mix balance. HeartBeat guest survey scores food + beverage at property." },
        { label: "AAA Diamond + Forbes Travel Guide", value: "Four-Diamond and Four-Star+ properties are inspected on vending presentation + accessibility. Operator capability should support Four-Diamond inspection readiness for upscale properties." },
      ],
    },
    {
      heading: "6. Pre-contract due diligence checklist",
      items: [
        { check: "Operator references — three properties of comparable scale + brand tier" },
        { check: "Telemetry vendor confirmation (Cantaloupe / Nayax / 365 Retail Markets / AWM)" },
        { check: "Insurance certificate review — limits, additional-insured, waiver of subrogation" },
        { check: "Sample monthly commission statement reviewed by hotel controller" },
        { check: "Sample SLA report reviewed by F&B director" },
        { check: "ADA attestation + photo evidence of reach range at an existing operator location" },
        { check: "Brand-standard alignment attestation (operator certifies BSA / OS&E / IHG standards readiness)" },
        { check: "Healthy-options planogram sample with allergen labeling per FALCPA" },
        { check: "Termination + equipment-removal terms reviewed by hotel counsel" },
        { check: "Coordination with the hotel beverage pouring-rights contract (Coca-Cola / PepsiCo) to avoid conflict" },
      ],
    },
    {
      heading: "7. Common contract gaps to close",
      items: [
        { label: "No telemetry audit right", value: "Without an audit-right clause, hotel cannot verify the commission base against operator-reported sales. Always include." },
        { label: "Auto-renewal trap", value: "Five-year auto-renewal with 180-day notice is the industry norm; recommend a 90-day mutual extension instead, with a market-rate review at renewal." },
        { label: "Brand-conversion provision missing", value: "If the property is sold or rebrands, equipment removal + commission true-up terms should be defined at signing." },
        { label: "Beverage pouring-rights conflict", value: "Resort + full-service properties typically have a Coca-Cola or PepsiCo pouring-rights contract. The vending contract must align (typically by reference) or operator product mix will violate the pouring contract." },
      ],
    },
  ],
  footer:
    "This template is a working contractual reference, not legal advice. Final contract should be reviewed by hotel counsel and aligned with the brand-standard documents that apply to your specific flag. Commission + SLA + telemetry clauses are the most commonly contested in the first 24 months; close those gaps before signing.",
});

console.log("wrote "+"hotel-vending-contracts-guide");
