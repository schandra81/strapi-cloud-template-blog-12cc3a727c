import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "pop-up-vending-special-events",
  assetType: "rfp template",
  title: "Pop-Up Vending for Special Events RFP Template",
  subtitle: "Deployment timeline, permit checklist, sponsor-integration playbook, and operator scoring framework",
  intro:
    "Use this RFP template to solicit pop-up vending bids for festivals, conventions, sports activations, and brand experiences. Pop-up programs differ from permanent placements: short deployment, weather exposure, permit complexity, and sponsor-driven SKU mix. This template specifies all four.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Event type + duration", value: "(festival / convention / sports activation / brand experience — specify days on-site, daily attendance, weather risk)" },
        { label: "Footprint", value: "Number of pop-up units, footprint per unit (typical 10x10 to 20x20 with machine + queue), power + water needs. Capability framing — describe environment, not anchor event names." },
        { label: "Deployment window", value: "Load-in date, event date(s), load-out date. Typical pop-up timeline T-60 / T-30 / T-7 / T-0 / T+1." },
        { label: "Contract", value: "Single-event or multi-event (e.g., 6-event festival circuit). Operator scopes mobilization cost separately if multi-event." },
      ],
    },
    {
      heading: "2. Deployment timeline (T-60 to T+1)",
      headers: ["Milestone", "Owner", "Deliverable"],
      rows: [
        ["T-60 days — contract + site survey", "Operator + venue ops", "Signed contract, site survey with power / water / load-path photos, machine count finalized"],
        ["T-45 days — permit application", "Operator", "All permits filed per Section 3; copies to venue procurement"],
        ["T-30 days — SKU + sponsor lock", "Operator + sponsor lead", "SKU catalog locked; sponsor branding art-board approved"],
        ["T-14 days — production + branding", "Operator", "Vinyl wraps produced; equipment staged; insurance certificates issued"],
        ["T-7 days — pre-event ops review", "Operator + venue ops", "Walk-through, refund + escalation contact list, restock cadence confirmed"],
        ["T-3 days — staging + delivery", "Operator", "Machines delivered to staging zone; commissioning + telemetry test"],
        ["T-1 day — load-in + setup", "Operator + venue ops", "Final placement, power-up, payment-system test, stock to plan"],
        ["T-0 — event day(s)", "Operator on-site team", "Continuous restock per telemetry; refund handling; uptime ≥ 98%"],
        ["T+1 — load-out + recon", "Operator", "Equipment removed within agreed window; final reconciliation report within 5 business days"],
      ],
    },
    {
      heading: "3. Permit + compliance checklist",
      paragraph:
        "Pop-up vending typically requires more permits than permanent placements. Operator owns filing; venue provides letters of authorization where required. Reference local health department + fire marshal codes (NFPA 1 / IFC Chapter 38 for temporary structures, local food-service permits).",
      items: [
        { check: "Temporary food-service permit (health department) — required where TCS food is sold; lead time typically 14-21 days." },
        { check: "Temporary structure / tent permit per NFPA 1 Chapter 25 or IFC Chapter 38 — required for footprints with overhead cover > 200 sq ft." },
        { check: "Electrical permit for temporary power (generator or venue-provided) — local AHJ inspection often required for 100A+ service." },
        { check: "Fire marshal sign-off on egress, extinguisher placement (one 2A:10B:C per 75 ft of travel distance per NFPA 10)." },
        { check: "Business license + sales-tax registration for the jurisdiction (where operator is out-of-state)." },
        { check: "ABC review if any SKUs include functional botanicals near regulatory line (e.g., kava, CBD)." },
        { check: "Certificate of insurance naming venue, event producer, and host municipality as additional insured." },
        { check: "Background-check attestation for all on-site staff (where event requires)." },
      ],
    },
    {
      heading: "4. Sponsor-integration playbook",
      items: [
        { number: 1, title: "Brand-tier matrix", description: "Operator presents primary / secondary / tertiary logo placement matrix. Primary = full wrap; secondary = side panel + digital sidekick; tertiary = shelf-talker or signage adjacent." },
        { number: 2, title: "Sponsor SKU integration", description: "Operator merchandises sponsor SKUs at eye-level shelves (rows 2-3 of typical machine), with sponsor logo on machine and dedicated digital sidekick callout. Velocity reported separately." },
        { number: 3, title: "Activation extensions", description: "Optional QR / NFC tap at machine pushes to sponsor landing page or sweepstakes entry. Operator provides scan-volume report at T+1 reconciliation." },
        { number: 4, title: "Sponsor compliance", description: "Operator must hold sponsor-brand approval before T-30 lock. Any in-event content change requires sponsor + venue marketing co-approval within 24 hours." },
      ],
    },
    {
      heading: "5. Outdoor + weather provisions",
      items: [
        { label: "Equipment rating", value: "NEMA 3R minimum for any equipment exposed to weather; NEMA 4 for hose-down environments. Specify UL 751 listing for vending machines." },
        { label: "Temperature operating range", value: "Most refrigerated vending operates 35°F-100°F ambient. Outdoor deployments below 32°F or above 105°F require shade structures, supplemental cooling, or interior placement." },
        { label: "Weather contingency", value: "Operator commits to weather-event protocol: wind gust > 40 mph or lightning within 8 mi triggers shutdown + lockdown per NWS guidance." },
        { label: "Surge planning", value: "Operator schedules dedicated restock surge crew during peak attendance windows (typically the 2-hour window before and after main event)." },
      ],
    },
    {
      heading: "6. SLA + credits",
      items: [
        { label: "On-time load-in SLA", value: "100% of units operational by event open. Each unit late = 5% credit on that line item." },
        { label: "Uptime SLA (event hours)", value: "98%; each percentage point below = 2% credit." },
        { label: "Stockout SLA", value: "Per-SKU stockout > 1 hour during peak window = SKU-line credit for that day." },
        { label: "Refund SLA", value: "On-site refund desk staffed during all event hours; cashless refund auto-credited within 4 hours; cash refund issued on-site." },
        { label: "Reconciliation SLA", value: "Final report within 5 business days of load-out." },
      ],
    },
    {
      heading: "7. Required attachments (operator response)",
      items: [
        { check: "Portfolio: 3+ comparable pop-up deployments (capability framing — describe scale and complexity, not anchor event names)." },
        { check: "Sample deployment timeline (Section 2) populated for a comparable event." },
        { check: "Permit-filing track record + sample COI." },
        { check: "Sponsor-integration capability deck (Section 4)." },
        { check: "Outdoor equipment spec sheets (NEMA / UL ratings)." },
        { check: "Sample reconciliation report." },
        { check: "References: 3 event-producer or venue contacts (last 24 months)." },
      ],
    },
    {
      heading: "8. Submission instructions",
      items: [
        { label: "Format", value: "PDF response via procurement portal." },
        { label: "Due date", value: "(specify — typically 21-30 days from RFP issue, given pop-up timeline pressure)" },
        { label: "Mandatory site walk", value: "Operator must attend site walk; capability framing applies — operators are evaluated on capability fit, not prior placements at the named venue." },
        { label: "Award notification", value: "(specify — typically within 14 days after submission close)" },
      ],
    },
  ],
  footer:
    "Informational template; not legal advice. Permit and insurance requirements vary by jurisdiction — confirm with the local AHJ and risk counsel.",
});

console.log("wrote "+"pop-up-vending-special-events");
