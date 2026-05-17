import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-solutions-remote-manufacturing",
  assetType: "playbook",
  title: "Remote Manufacturing Vending Playbook",
  subtitle: "Equipment, telemetry redundancy, restock cadence, service SLA, and on-site spare parts",
  intro:
    "Remote manufacturing sites — oilfield service yards, rural assembly plants, mining-adjacent operations, isolated processing facilities — break the assumptions consumer vending depends on. Cellular coverage is patchy. Driver routes are long. A single missed restock can mean a full week without service. This playbook specifies the redundancies that make remote vending reliable.",
  sections: [
    {
      heading: "1. Site classification — drive-time + cellular",
      paragraph:
        "Classify each remote site against the operator's depot drive-time and the cellular coverage profile. The combination drives equipment, telemetry, and contract structure.",
      items: [
        { label: "Tier R1 — 60-120 min drive, full LTE coverage", value: "Standard equipment + standard telemetry. Restock 1-2x/week. Most rural plants fall here." },
        { label: "Tier R2 — 120-240 min drive, intermittent LTE / 3G", value: "Industrial-spec equipment + dual-carrier telemetry modem + on-site spare-parts kit. Restock 1x/week with 2-3 day buffer planogram." },
        { label: "Tier R3 — 240+ min drive, satellite-only or no coverage", value: "Outdoor-rated industrial equipment + satellite telemetry (Iridium/Inmarsat) or store-and-forward LTE + 2-week planogram capacity + on-site service tech on retainer." },
        { label: "Tier R4 — Camp / FIFO site", value: "Bespoke contract — operator co-locates restock with the camp's existing supply chain (weekly truck). Telemetry over camp Wi-Fi if available." },
      ],
    },
    {
      heading: "2. Telemetry redundancy",
      paragraph:
        "Standard cellular telemetry assumes carrier-grade LTE at the placement. Remote sites need redundancy so the operator does not drive 4 hours to find a known-offline machine.",
      items: [
        { number: 1, title: "Primary modem", description: "Cantaloupe Seed Pro, Nayax VPOS Touch, or 365 Retail Markets ConnectedFresh — dual-SIM (Verizon + AT&T or T-Mobile)." },
        { number: 2, title: "Backup channel", description: "Tier R3 adds Iridium SBD or Inmarsat IsatData Pro satellite telemetry for status pings every 4 hours when cellular is unavailable." },
        { number: 3, title: "Store-and-forward", description: "Telemetry firmware queues transactions and status events when offline, uploads on next connection. No transaction loss." },
        { number: 4, title: "On-machine status panel", description: "Local LED + dispatch-callable SMS code for on-site supervisor to manually trigger service request without depending on telemetry." },
      ],
    },
    {
      heading: "3. Restock cadence + planogram buffer",
      headers: ["Tier", "Restock cadence", "Planogram buffer", "Pre-positioned stock"],
      rows: [
        ["R1", "1-2 visits/week", "5-7 days of facings", "None"],
        ["R2", "1 visit/week", "10-14 days of facings + 3-day reserve under the cabinet", "1 case top-30 SKUs on-site, host-controlled"],
        ["R3", "1 visit / 2 weeks", "21-28 days of facings + on-site reserve cabinet", "1 pallet rotating reserve, operator-keyed"],
        ["R4", "Co-loaded with camp supply truck", "Sized to camp rotation (14-28 days)", "Per camp procedure"],
      ],
    },
    {
      heading: "4. Service SLA — adjusted for drive time",
      items: [
        { label: "Tier 1 — revenue critical / cold-chain / payment", value: "R1: <24 hr ack + <24 hr resolution. R2: <24 hr ack + <48 hr resolution. R3: <24 hr ack + <96 hr resolution; on-site spare-parts kit allows host-side first response." },
        { label: "Tier 2 — stockout / planogram", value: "R1: <48 hr / 5-7 day. R2-R3: addressed at next scheduled restock; planogram buffer absorbs." },
        { label: "Tier 3 — cosmetic / signage", value: "Addressed at scheduled visit." },
      ],
    },
    {
      heading: "5. On-site spare parts kit (Tier R2-R3)",
      paragraph:
        "Operator pre-positions a service kit on-site. Host-side facility tech can perform first-response actions over phone with operator dispatch, avoiding a 4-hour drive for a common failure.",
      items: [
        { check: "Bill validator (MEI VN2700 or Coinco BillPro) — 1 spare" },
        { check: "Coin mech (Coinco Quantum or MEI Mars CF7000) — 1 spare" },
        { check: "Card reader (Nayax VPOS Touch or Cantaloupe ePort G11) — 1 spare" },
        { check: "Vending motor + helix kit — 2 of each common motor model" },
        { check: "Refrigeration capacitor + condenser fan motor — 1 each" },
        { check: "Door gasket — 1 (refrigerated unit)" },
        { check: "Glass-front cleaning kit + sealed bezels — 1" },
        { check: "Field service manual + emergency dispatch SMS code list" },
      ],
    },
    {
      heading: "6. Contract structure for remote service",
      items: [
        { label: "Pricing", value: "Expect $0.10-$0.30 per-unit logistics premium on remote placements. Some operators bill a flat monthly service fee instead of pure commission for Tier R3 sites." },
        { label: "Commission", value: "Commission rates 3-8% lower than urban equivalents to fund the logistics premium. Many remote sites run zero-commission with host subsidy instead." },
        { label: "Host subsidy", value: "Some remote sites use a per-employee monthly subsidy ($5-$20) to lower per-unit prices for the workforce. Common in FIFO + camp settings." },
        { label: "SLA carve-outs", value: "Contract explicitly carves out weather and access road closure as force-majeure events that extend SLA windows." },
      ],
    },
    {
      heading: "7. KPI scorecard for remote sites",
      headers: ["Metric", "R1 target", "R2 target", "R3 target"],
      rows: [
        ["Uptime", "≥ 98%", "≥ 96%", "≥ 94%"],
        ["Stockout SKU-hours", "≤ 2%", "≤ 4%", "≤ 6%"],
        ["Tier 1 resolution time", "< 24 hr", "< 48 hr", "< 96 hr"],
        ["First-response success without truck roll", "n/a", "≥ 50%", "≥ 70%"],
        ["Refund rate", "< 2%", "< 3%", "< 4%"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, telemetry redundancy planning, and SLA structuring for remote manufacturing placements that don't fit standard urban service routes.",
});

console.log("wrote "+"vending-solutions-remote-manufacturing");
