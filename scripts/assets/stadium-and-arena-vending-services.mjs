import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "stadium-and-arena-vending-services",
  assetType: "rfp template",
  title: "Stadium + Arena Vending Services RFP Template",
  subtitle: "Format-mix planning, operator capability matrix, CVP template, sponsor activation guide, and scoring framework",
  intro:
    "Use this RFP template to solicit vending bids for stadiums, arenas, and major-event venues. The framework covers four format mixes (traditional + cooler + smart-cooler + AI-powered), capability matrix scoring, a sponsor-activation playbook, and an embedded Customer Value Proposition (CVP) the operator must complete in their response.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue capacity + event mix", value: "(specify — e.g., 50,000-seat outdoor stadium with NFL + concerts, or 18,000-seat indoor arena with NBA + NHL + concerts)" },
        { label: "Annual events", value: "(specify — typical: 8-10 NFL home games, 41 NBA / NHL home games, 30-50 concert / family / specialty events)" },
        { label: "Machine count by zone", value: "Specify total + per-zone breakdown: main concourse, club, VIP / suite, BOH, exterior. Capability framing — describe footprint, not anchor venue names." },
        { label: "Contract term", value: "5-year initial, 5-year option, with annual technology refresh." },
      ],
    },
    {
      heading: "2. Format-mix planning",
      paragraph:
        "Modern stadium vending typically blends 4 formats. Operator scopes the % mix per zone and the rationale.",
      headers: ["Format", "Best for", "SKU breadth", "Avg ticket"],
      rows: [
        ["Traditional vending (helix / glass-front)", "High-traffic concourse, exterior, BOH; familiar UX", "30-45 SKUs", "$3-$8"],
        ["Refrigerated cooler (glass-door, single-item)", "Beverage-heavy zones, fresh / cold-chain", "15-30 SKUs", "$3-$10"],
        ["Smart cooler (RFID, weight, or vision-based)", "Premium / club zones; supports prepared food, multi-item per transaction", "25-50 SKUs", "$5-$25"],
        ["AI-powered grab-and-go (computer vision)", "VIP / club / convention; lowest friction, highest UPT", "30-80 SKUs", "$8-$40"],
      ],
    },
    {
      heading: "3. Operator capability matrix",
      headers: ["Criterion", "Weight", "Evidence required"],
      rows: [
        ["Format-mix capability across all four (Section 2)", "15%", "Operator demonstrates portfolio across formats — capability framing acceptable, do not require anchor venue names"],
        ["Telemetry + uptime", "10%", "Cantaloupe, Nayax, 365 Retail Markets, AWM Smart Shelf, or comparable; <15-min heartbeat; 98%+ uptime track record"],
        ["Cold-chain + food-safety", "10%", "HACCP plan; FDA Food Code 2022 §3-501 attestation; temperature-monitoring telemetry"],
        ["Cashless + payment", "10%", "Apple Pay / Google Pay / NFC; venue member-charge integration; PCI DSS Level 1"],
        ["Restock cadence", "10%", "Per-event surge crew; telemetry-driven mid-event top-off; demonstrated 1-2-hour stockout recovery"],
        ["Sponsor activation capability", "10%", "Per Section 5 — tiered logo matrix, sponsor SKU integration, digital sidekick"],
        ["Reporting + analytics", "10%", "Per-event flash report; monthly + QBR; year-over-year RPV trending"],
        ["Insurance + bonding", "5%", "$5M GL + $5M product liability minimum; PCI compliance attestation"],
        ["Pricing structure transparency", "15%", "Revenue share or fixed fee, line-itemized; commission tier structure if applicable"],
        ["ADA + accessibility", "5%", "ADA Section 308 reach range, Section 305 clear floor space; VPAT for digital interfaces"],
      ],
    },
    {
      heading: "4. Customer Value Proposition (CVP) — operator response",
      paragraph:
        "Operator completes the CVP template inline. Scoring rewards specificity over generic claims.",
      headers: ["CVP element", "Operator response"],
      rows: [
        ["Audience job-to-be-done", "(operator describes what stadium audience hires vending to do — speed, novelty, premium, dietary, etc.)"],
        ["Pain reliever", "(how operator removes concourse friction — queue time, dietary search, cashless friction)"],
        ["Gain creator", "(how operator creates upside vs. concession — unique SKUs, anchor pricing, sponsor exclusives, dwell-zone capture)"],
        ["Proof points", "(metrics operator commits to — RPV, UPT, attach, cashless mix, uptime)"],
        ["Differentiator vs. status quo", "(why this operator vs. incumbent or DIY)"],
      ],
    },
    {
      heading: "5. Sponsor activation guide",
      items: [
        { number: 1, title: "Tier matrix", description: "Primary (full machine wrap + digital sidekick + dedicated SKU shelf), Secondary (side panel + sidekick rotation), Tertiary (shelf-talker only). Operator presents matrix at T-30." },
        { number: 2, title: "Sponsor SKU integration", description: "Sponsor SKUs merchandised at eye-level (rows 2-3); sponsor logo on machine face; dedicated digital sidekick callout; separate velocity reporting." },
        { number: 3, title: "Activation extensions", description: "QR / NFC tap to sponsor landing or sweepstakes; scan-volume report at month-end." },
        { number: 4, title: "Sponsor approvals", description: "Sponsor brand-team must approve all wraps + content before T-30 lock; any in-event change requires sponsor + venue marketing co-approval within 24 hours." },
      ],
    },
    {
      heading: "6. SLA + credits",
      items: [
        { label: "Uptime SLA (event hours)", value: "98% (99.5% for club + VIP). Each percentage point below = 2% credit." },
        { label: "Stockout SLA (peak window)", value: "Per-SKU stockout > 1 hour during peak = SKU-line credit for that event." },
        { label: "Cold-chain SLA", value: "Temperature excursion outside 35-40°F triggers alert; 2-hour on-site response (4-hour for general placements)." },
        { label: "Refund SLA", value: "Cashless refund auto-credited within 4 hours; cash refund issued at next visit (max 7 days)." },
        { label: "Reporting SLA", value: "Per-event flash report within 24 hours of event close." },
      ],
    },
    {
      heading: "7. Required attachments",
      items: [
        { check: "Format-mix capability portfolio (Section 2) — capability framing, no false claims of work at named anchor venues." },
        { check: "Completed CVP (Section 4)." },
        { check: "Sample tiered logo matrix + sponsor activation deck." },
        { check: "Sample per-event flash + monthly + QBR reports." },
        { check: "Telemetry platform demo." },
        { check: "Insurance certificates per Section 3 weighting." },
        { check: "ADA / accessibility documentation (VPAT, Section 308 reach-range attestation)." },
        { check: "References: 3 venue F&B / procurement / marketing contacts (last 24 months)." },
      ],
    },
    {
      heading: "8. Pricing structure",
      items: [
        { label: "Revenue-share model (typical)", value: "Operator pays venue % of gross sales; tiers based on annual sales (e.g., 8% on first $250K, 12% on $250K-$1M, 15% above). Specify base + tier in operator response." },
        { label: "Fixed-fee model (less common)", value: "Operator pays fixed monthly per machine; venue retains all sales. Suitable where venue has strong merchandising preference." },
        { label: "Hybrid", value: "Fixed minimum + revenue share above threshold." },
        { label: "Capital allocation", value: "Operator funds equipment + branding; venue may co-fund premium-tier finishes (suite hallway). Specify any venue capital ask." },
      ],
    },
    {
      heading: "9. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal; supporting materials in single ZIP." },
        { label: "Due date", value: "(specify — typically 45-60 days for stadium-scale complexity)" },
        { label: "Mandatory site walk", value: "Operator attends site walk; capability framing applies to scoring." },
        { label: "Q&A window", value: "15 business days." },
        { label: "Award", value: "(specify — typically 60-90 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage venue procurement, F&B leadership, and risk counsel before issue. Revenue-share benchmarks vary by venue size, audience demographics, and exclusivity terms.",
});

console.log("wrote "+"stadium-and-arena-vending-services");
