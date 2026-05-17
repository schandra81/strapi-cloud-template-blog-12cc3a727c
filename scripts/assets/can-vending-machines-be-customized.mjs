import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-vending-machines-be-customized",
  assetType: "pack",
  title: "Vending Customization Pack",
  subtitle: "Six-dimension framework, brand finish spec, SDK timeline, tier pricing, BI export",
  intro:
    "Modern vending platforms (Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf) expose 6 dimensions of customization. This pack defines each dimension, what to spec in the operator contract, and the realistic timeline to expect.",
  sections: [
    {
      heading: "1. Six-dimension customization framework",
      paragraph:
        "Customization requests fall into six discrete dimensions. Mixing them on a single line item leads to scope creep and missed timelines.",
      headers: ["Dimension", "What it covers", "Lead time"],
      rows: [
        ["1. Cabinet finish", "Vinyl wrap, powder coat, custom panel insert, illuminated marquee", "3-6 weeks"],
        ["2. Planogram", "SKU mix, facings, slot configuration, allergen layout", "1-2 weeks"],
        ["3. Pricing tier", "Member vs guest pricing, time-of-day pricing, loyalty discount", "1-3 weeks (depends on payment platform)"],
        ["4. Closed-loop integration", "Member-app SDK, badge / RFID auth, host-issued credits", "6-12 weeks"],
        ["5. UI / language", "On-screen language, custom welcome screen, multi-currency", "2-6 weeks"],
        ["6. Data / BI export", "API access, scheduled CSV drops, BI tool connector", "2-4 weeks"],
      ],
    },
    {
      heading: "2. Brand finish spec",
      items: [
        { label: "Vinyl wrap", value: "3M IJ180Cv3 or Avery MPI 1105 cast vinyl with 3M 8520 / Avery DOL 1480 laminate. 7-year outdoor / 10-year indoor durability." },
        { label: "Powder coat", value: "TGIC polyester powder coat, 2-3 mil thickness, RAL or Pantone match. Furniture-grade durability." },
        { label: "Panel insert", value: "Custom-printed acrylic or aluminum composite panel sized to OEM cabinet door (typical 60-80 in × 24-32 in). Requires CAD drawing from OEM." },
        { label: "Illuminated marquee", value: "LED-backlit edge-lit marquee 8-12 in tall, custom artwork, controllable via vending controller for time-of-day messaging." },
        { label: "Artwork deliverables", value: "Vector EPS / AI / PDF at 1:1 scale, CMYK + Pantone, with 0.25 in bleed. Photography ≥ 300 dpi at final size." },
      ],
    },
    {
      heading: "3. Closed-loop SDK integration timeline",
      paragraph:
        "Member-app integration (badge-tap, app-pay, host-credit) is the highest-value customization for amenity programs. It uses payment-platform SDKs — Nayax Onyx, Cantaloupe Engage, 365 Pay.",
      items: [
        { number: 1, title: "Weeks 1-2 — Scoping", description: "Authentication model (NFC badge, QR code, app token), credit-funding source (host payroll, host stipend, member card-on-file), refund flow." },
        { number: 2, title: "Weeks 3-5 — Development", description: "Operator engages payment platform; SDK keys issued; sandbox-environment integration with host IT or app vendor." },
        { number: 3, title: "Weeks 6-8 — UAT", description: "User-acceptance testing on 1-2 pilot machines with employee or resident sample. Edge cases: failed-tap, double-charge, refund, account suspension." },
        { number: 4, title: "Weeks 9-10 — Production rollout", description: "Push to full portfolio; member-facing FAQ + support ticket queue activated; first-30-day high-touch support." },
        { number: 5, title: "Weeks 11-12 — Stabilization", description: "Monitor decline-rate, transaction-mix, refund-rate. Tune time-out and retry parameters." },
      ],
    },
    {
      heading: "4. Tier-based pricing setup",
      paragraph:
        "Payment platforms support multi-tier pricing keyed to authentication source. Most common at amenity-vending placements.",
      headers: ["Tier", "Typical price relationship", "Example use"],
      rows: [
        ["Member (badge / app)", "Base price × 0.75 - 1.00", "Office employee, residential member, student"],
        ["Guest (cash / open card)", "Base price × 1.10 - 1.30", "Visitor without member credential"],
        ["Subsidized", "Base price × 0.50 - 0.75", "Host pays delta via monthly statement"],
        ["Free (host-paid)", "$0 to member; host invoiced", "Amenity-grade lounge / wellness placement"],
      ],
    },
    {
      heading: "5. BI export configuration",
      paragraph:
        "Host-side analytics require structured data exports. Capable operators provide one or more of the channels below.",
      items: [
        { label: "Scheduled CSV / SFTP", value: "Daily or weekly CSV drop to host SFTP server. Standard schema: transaction_id, timestamp, machine_id, sku, qty, unit_price, payment_type, refund_flag." },
        { label: "REST API", value: "Cantaloupe / Nayax / 365 REST endpoints with OAuth 2.0; rate-limited to ~100 req/min." },
        { label: "BI connector", value: "Native Power BI / Tableau connectors via ODBC or direct integration. Snowflake share available with some platforms." },
        { label: "Required data points", value: "Transaction-level detail, per-SKU velocity, refund volume, uptime per machine, telemetry-event log." },
      ],
    },
    {
      heading: "6. Operator contract addenda required",
      items: [
        { check: "Brand-finish spec attached (with vinyl-wrap or powder-coat manufacturer + warranty)." },
        { check: "Planogram refresh cadence stated (quarterly minimum)." },
        { check: "Pricing-tier authority — who can change member vs guest pricing, and notice period." },
        { check: "SDK integration scope statement — auth model, credit source, refund flow." },
        { check: "BI export schema and delivery channel + SLA." },
        { check: "Equipment-return condition — re-wrap or wrap-removal cost responsibility at contract end." },
      ],
    },
    {
      heading: "7. Cost framework (host budgeting)",
      headers: ["Dimension", "Typical cost driver", "Range"],
      rows: [
        ["Vinyl wrap", "Per cabinet, install included", "$400-$900"],
        ["Powder coat", "Per cabinet, off-site, refurb-grade", "$600-$1,400"],
        ["Custom panel insert", "Print + cut + install", "$200-$500"],
        ["Illuminated marquee", "Hardware + artwork", "$1,200-$3,500"],
        ["SDK integration (one-time)", "Operator + payment-platform engineering", "$3,500-$12,000"],
        ["BI export (recurring)", "Platform license + data egress", "$50-$300 / month"],
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to surface operators on Cantaloupe, Nayax, 365 Retail Markets, or AWM Smart Shelf that can deliver each dimension of customization above. Specific scope and lead times depend on the operator's existing tooling and integrator capacity.",
    },
  ],
  footer:
    "Costs and lead times are reference ranges. Confirm against your operator and payment-platform vendor at scoping.",
});

console.log("wrote " + "can-vending-machines-be-customized");
