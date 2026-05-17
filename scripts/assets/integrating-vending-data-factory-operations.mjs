import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "integrating-vending-data-factory-operations",
  assetType: "pack",
  title: "Manufacturing Vending Data Integration Pack",
  subtitle: "Use case framework, integration patterns, operator capability profile, implementation roadmap",
  intro:
    "This pack helps facility, IT, and operations leaders evaluate how vending telemetry should integrate with factory data systems (MES, CMMS, ERP, BI). It frames operator capability, lists the standards-aligned integration patterns most plants use, and gives a 90-day implementation roadmap. The frameworks are equipment- and operator-agnostic.",
  sections: [
    {
      heading: "1. Use case framework — what data is worth integrating",
      paragraph:
        "Not every vending data point is worth piping into MES or a corporate BI tool. Score each use case on operational value vs. integration cost. Most plants prioritize 3-5 of the use cases below.",
      headers: ["Use case", "Source system", "Target system", "Value driver"],
      rows: [
        ["Stockout prevention", "Operator telemetry (Cantaloupe / Nayax / 365 / AWM)", "Operator CRM + facility dashboard", "Reduce break-time stockouts; improve worker satisfaction"],
        ["Shift-aware planogram", "DEX / per-SKU velocity", "Operator merchandising tool", "Match SKU mix to shift-1 / shift-2 / shift-3 demand"],
        ["Refrigeration / temperature alerting", "Modem temperature sensor", "Facility CMMS + operator NOC", "Cold-chain compliance; spoilage avoidance"],
        ["Energy & Scope 2 reporting", "Sub-meter / smart plug", "ESG / sustainability platform", "ENERGY STAR refresh ROI; corporate ESG attestation"],
        ["Service SLA reporting", "Operator ticketing", "Facility QBR pack", "Verify uptime + restock cadence against contract"],
        ["Cashless reconciliation", "Payment gateway (PCI DSS in scope)", "ERP / AP", "Audit trail for commission / revenue share"],
      ],
    },
    {
      heading: "2. Integration patterns — pick by data freshness need",
      paragraph:
        "Vending data is rarely real-time-critical (unlike line equipment). Most plants land on a near-real-time pull every 15-30 minutes for dashboards plus a daily batch for ERP / BI.",
      items: [
        { label: "Pattern A — Operator portal only", value: "No integration. Facility logs into operator portal for QBR. Lowest cost. Acceptable for small (1-3 machine) deployments." },
        { label: "Pattern B — Daily CSV / SFTP batch", value: "Operator emits daily CSV (sales, stockouts, uptime, refunds) to a facility SFTP. Loaded into BI by IT. Acceptable for QBR-cadence reporting." },
        { label: "Pattern C — REST API pull (NAMA DEX / EVA-DTS aligned)", value: "Operator exposes REST API or webhook. Facility pulls every 15-30 minutes. Most common pattern for plants with active facility dashboards." },
        { label: "Pattern D — Direct MES / CMMS event hook", value: "Temperature excursion or offline event posts to facility event bus (Kafka / Azure Event Grid / AWS EventBridge). Triggers CMMS ticket. Highest integration cost; used by plants with cold-chain or GMP requirements." },
      ],
    },
    {
      heading: "3. Standards + protocol reference",
      paragraph:
        "Vending telemetry uses a small set of well-established standards. RFP should require operator to support at least one machine-data standard plus a documented portal API.",
      items: [
        { label: "DEX (Direct Exchange) — UCS spec", value: "The bedrock per-SKU sales / inventory protocol every modern vending machine emits. Operator pulls DEX from each machine via cellular modem; this is what every dashboard, planogram, and stockout report rolls up from." },
        { label: "EVA-DTS (European Vending Association — Data Transfer Standard)", value: "Successor / European cousin of DEX. Operator telemetry stacks (Nayax, Cantaloupe) export EVA-DTS for cross-platform compatibility." },
        { label: "MDB (Multi-Drop Bus / Internal Communication Protocol)", value: "Inside-the-machine protocol between cashless reader, bill validator, coin mech, and main board. Relevant for RFP because it determines which payment + telemetry hardware can be retrofit to existing machines." },
        { label: "PCI DSS v4.0", value: "All cashless transactions must run on PCI DSS v4.0-validated infrastructure. RFP requires AOC (Attestation of Compliance) on file." },
        { label: "ISO 27001 (operator IT) + SOC 2 Type II", value: "Recommended for any operator that exposes a portal or API. Plants under corporate IT governance often require both." },
      ],
    },
    {
      heading: "4. Operator capability profile — RFP scoring rubric",
      paragraph:
        "Score each candidate operator on the dimensions below. A 1-5 score per row; weight by your plant's priority. Operators below a 3.5 weighted average rarely deliver on integration commitments.",
      headers: ["Capability", "What to ask for", "Minimum acceptable"],
      rows: [
        ["Telemetry platform", "Vendor + version + machine coverage %", "Cellular telemetry on 100% of machines; sub-15-min heartbeat"],
        ["Portal API", "REST API docs + sample auth + rate limits", "OAuth2 or API-key auth; documented endpoints for sales, stockouts, uptime, refunds"],
        ["Data freshness", "End-to-end latency from machine to portal", "≤ 30 minutes for sales; ≤ 5 minutes for offline / temperature alerts"],
        ["Webhook / event hook", "Webhook support for offline + temperature events", "HTTPS POST with retry; signed payload"],
        ["Standards support", "DEX / EVA-DTS export", "Either format available for ad-hoc machine-level export"],
        ["Security attestations", "PCI DSS AOC, SOC 2 Type II, ISO 27001", "PCI DSS v4.0 AOC current; SOC 2 or ISO 27001 within 12 months"],
        ["Data retention", "Years of historical data accessible via portal / API", "≥ 24 months online; longer via export"],
      ],
    },
    {
      heading: "5. Security + IT governance checklist",
      items: [
        { check: "Operator cellular modem is on a separate APN — not on plant Wi-Fi or plant OT network." },
        { check: "If operator requires plant network access for any reason, segment via dedicated VLAN with deny-by-default firewall rules." },
        { check: "PCI DSS AOC on file; reviewed annually." },
        { check: "Operator portal access uses SSO (SAML / OIDC) where available; otherwise enforced MFA + least-privilege user roles." },
        { check: "API credentials rotated quarterly; stored in plant secret manager (HashiCorp Vault / Azure Key Vault / AWS Secrets Manager)." },
        { check: "Webhook endpoints validate signed payloads + source IP allowlist." },
        { check: "Data classification reviewed — vending sales data typically internal-only; no PII beyond cashless transaction hashes." },
      ],
    },
    {
      heading: "6. Implementation roadmap — 90 days",
      items: [
        { number: 1, title: "Days 0-15 — discovery + scoping", description: "Workshop with facility + IT + operator. Identify the 3-5 use cases worth integrating. Pick integration pattern (B / C / D). Document data flow." },
        { number: 2, title: "Days 15-30 — operator portal access + dashboards", description: "Stand up operator-portal SSO. Build initial QBR dashboard from portal exports. Confirms data quality before any code is written." },
        { number: 3, title: "Days 30-60 — API or SFTP integration", description: "IT integrates operator API (Pattern C) or SFTP feed (Pattern B). Lands data in plant BI / data lake. Schema validated; backfill 60-90 days." },
        { number: 4, title: "Days 60-75 — alerting + CMMS hook (if Pattern D)", description: "Wire offline + temperature events into facility event bus and CMMS. Run live drills (pull modem; trigger event; confirm CMMS ticket)." },
        { number: 5, title: "Days 75-90 — review + handover", description: "QBR pack rebuilt from integrated data. Document runbook. Transition to steady-state operation. Schedule quarterly integration health check." },
      ],
    },
    {
      heading: "7. Quarterly business review template",
      paragraph:
        "Once integration is live, the QBR pack should be auto-generated from the integrated data — not assembled manually each quarter.",
      items: [
        { check: "Uptime % per machine, per month (rolling 12 months)" },
        { check: "Stockouts: count, MTTR, top-5 SKUs by stockout rate" },
        { check: "Per-shift velocity report (shift-1 / shift-2 / shift-3)" },
        { check: "Refrigeration excursions: count, duration, resolution time" },
        { check: "Energy: kWh per machine per month, trend vs. baseline" },
        { check: "Service SLA adherence by tier (Tier 1 / 2 / 3)" },
        { check: "Refund rate + reason codes" },
        { check: "Cashless mix % and revenue share reconciliation" },
      ],
    },
    {
      heading: "8. Capability framing — what we coordinate",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate operator selection, RFP scoring, and integration sequencing for manufacturing sites. We do not operate the machines or build the integration code ourselves; the patterns above are the patterns we see our partner operators support.",
    },
  ],
  footer:
    "This pack is informational and not a security or legal opinion. Coordinate with plant IT, operations, and procurement before any data integration goes live.",
});

console.log("wrote "+"integrating-vending-data-factory-operations");
