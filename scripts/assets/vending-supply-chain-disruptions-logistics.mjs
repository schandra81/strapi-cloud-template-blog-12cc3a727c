import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-supply-chain-disruptions-logistics",
  assetType: "pack",
  title: "Logistics Hub Vending Resilience Pack",
  subtitle: "Disruption risk assessment, operator selection criteria, contract terms, severe-weather playbook, and quarterly review template",
  intro:
    "Vending programs at logistics hubs are themselves a supply chain — and that supply chain breaks during severe weather, regional fuel disruption, commissary failures, payment-network outages, and recall events. This pack consolidates five working documents to make a vending program resilient: disruption risk assessment, operator selection criteria, contract clauses, severe-weather playbook, and quarterly review template.",
  sections: [
    {
      heading: "1. Disruption risk assessment",
      paragraph:
        "Map likely disruptions and operator-side mitigations. Below covers the most common five categories — review at install + annually.",
      headers: ["Disruption class", "Frequency", "Operator mitigation", "Facility-side mitigation"],
      rows: [
        ["Severe weather (named storm, ice, wildfire)", "1–3x/year regional", "Pre-storm restock + route closure plan", "Egress-clear placement + emergency hydration plan"],
        ["Commissary failure (fire, inspection failure, recall)", "Rare; impactful when occurs", "Backup commissary or operator network mutual-aid", "FALCPA + recall comms ready"],
        ["Fuel / route disruption", "1–2x/year regional", "Telemetry-driven prioritization; route adjustment", "Buffer hydration on site"],
        ["Payment network outage (acquirer, card brand)", "Rare", "Offline-mode capable EMV reader; manual reconciliation", "Cash mechanism if planned"],
        ["FDA Class I recall (SKU-level)", "Multiple/year industry-wide", "24-hour pull SOP; reverse-supply-chain", "Comms ready; allergen overlay if related"],
      ],
    },
    {
      heading: "2. Operator selection — resilience criteria",
      paragraph:
        "Resilience-weighted scorecard. Use alongside or instead of standard operator scorecard during a recompete after a disruption event.",
      headers: ["Criterion", "Weight", "Verification"],
      rows: [
        ["Multi-commissary network or mutual-aid agreement", "15%", "Operator describes failover commissary; written attestation"],
        ["Dual-SIM cellular telemetry", "10%", "Modem spec + carrier list"],
        ["Offline-mode payment capability", "10%", "EMV reader spec; offline transaction limit + reconciliation flow"],
        ["FDA Class I recall SOP", "10%", "Documented 24-hour pull SOP + comms template"],
        ["Severe-weather route plan", "15%", "Written pre-storm + post-storm playbook"],
        ["Buffer-stock + spare-parts kit at site", "10%", "Inventory list; placed on-site or within 2-hour delivery"],
        ["After-hours phone escalation (24/7)", "10%", "Named contacts; first-call answer rate"],
        ["Insurance + indemnity for service interruption", "10%", "Cert of insurance; carve-outs disclosed"],
        ["Operator size + financial stability", "10%", "Audited financials or business reference; D&B"],
      ],
    },
    {
      heading: "3. Contract clauses — resilience",
      items: [
        { number: 1, title: "Multi-commissary attestation", description: "Operator shall maintain primary + secondary commissary capability. In the event of primary commissary disruption > 72 hours, operator shall serve Site from secondary commissary within 48 hours with no material change in planogram." },
        { number: 2, title: "Severe-weather pre-position", description: "Upon NOAA National Hurricane Center advisory or comparable severe-weather warning issued ≥ 48 hours pre-event, Operator shall pre-position restock to bring all SKUs to ≥ 80% full and confirm telemetry online." },
        { number: 3, title: "FDA Class I recall pull", description: "Operator shall pull affected SKUs within 24 hours of FDA Class I recall notice (21 CFR 7.3). Operator shall notify Site within 4 hours and provide reconciliation report within 7 days." },
        { number: 4, title: "Payment outage credit", description: "In the event of payment-network outage > 4 hours that prevents cashless transactions, Operator shall enable offline-mode where capable; Site shall not be invoiced for service fees attributable to outage period." },
        { number: 5, title: "Spare parts on site", description: "Operator shall maintain a spare-parts kit on Site or within 2-hour delivery: commonly-failing components (compressor capacitor, card reader, motor, fuses)." },
        { number: 6, title: "Service-credit remedy", description: "If Tier 1 resolve clock missed > 2 incidents in any 90-day period, Operator shall issue a service credit equal to 50% of that 90-day service fee, applied against next invoice." },
      ],
    },
    {
      heading: "4. Severe-weather playbook",
      paragraph:
        "Time-sequenced steps from advisory through post-event. Operator-side and facility-side actions interleaved.",
      items: [
        { number: 1, title: "T-72 hours — advisory issued (NHC, NWS, state EM)", description: "Operator confirms pre-position plan with facility services; reviews route accessibility. Facility confirms egress + emergency lighting at vending alcoves." },
        { number: 2, title: "T-48 hours — pre-position restock", description: "Operator restock to ≥ 80% all SKUs. Bias planogram to shelf-stable hydration, snack, and pre-packaged real-meal. Telemetry confirmed online." },
        { number: 3, title: "T-24 hours — facility close prep", description: "Facility confirms emergency lighting, generator readiness, and post-event reopening contacts. Operator confirms after-hours phone line." },
        { number: 4, title: "Event window — service hold", description: "Operator route holds for safety. Facility tracks telemetry where available; cold-chain alerts logged for post-event triage." },
        { number: 5, title: "T+24 hours post-event — reopen sweep", description: "Operator dispatches first route post-event to assess damage, pull any TCS waste, restore service. Facility logs any damage to alcoves." },
        { number: 6, title: "T+72 hours — reconciliation", description: "Cold-chain loss accounting; refund / credit processing for guest transactions affected; lessons captured for next-cycle update." },
      ],
    },
    {
      heading: "5. FDA recall + payment outage playbooks (summary)",
      items: [
        { label: "Class I recall SOP", value: "T+0 FDA notice received → T+4 hr operator notifies site → T+24 hr SKUs physically pulled from all cabinets → T+48 hr disposal/return chain confirmed → T+7 day reconciliation report. Allergen-related recall triggers Top-9 spot-check across remaining planogram." },
        { label: "Payment outage SOP", value: "Card-brand or acquirer outage detected → operator switches readers to offline-mode where supported (typical offline limit $20–$30/transaction) → reconciliation push-through when network restored → service-fee credit applied per contract clause #4 above." },
        { label: "Commissary failure SOP", value: "Primary commissary down → operator activates secondary within 48 hours → site notified within 4 hours → planogram-substitution list provided; substitutions limit to ≤ 10% of SKUs without RD / wellness committee review." },
      ],
    },
    {
      heading: "6. Quarterly review template",
      items: [
        { check: "Disruption log — incidents this quarter, type, duration, resolution time" },
        { check: "Operator route-miss rate (service visits delayed or skipped)" },
        { check: "Cold-chain excursion log + product loss accounting" },
        { check: "Recall events affecting planogram + pull timing" },
        { check: "Service credit issued vs SLA breach count" },
        { check: "Severe-weather pre-position effectiveness review (if any)" },
        { check: "Spare-parts kit inventory verified; replenish any consumed" },
        { check: "Action items + owner + due date" },
      ],
    },
    {
      heading: "7. Indicative budget — resilience overlay",
      headers: ["Line item", "Range", "Notes"],
      rows: [
        ["Multi-commissary capability", "$0 (operator-side investment)", "Verify, don't pay"],
        ["Dual-SIM cellular modem", "$0–$120/cabinet one-time", "Often included; sometimes uplift"],
        ["Spare-parts kit on site", "$280 – $620/year", "Restocked at annual review"],
        ["Offline-mode payment capability", "$0", "Reader-spec — verify before contract"],
        ["Severe-weather pre-position event", "$0", "Operator absorbs as part of contract obligation"],
        ["Service-credit (when triggered)", "Negative — credit to facility", "50% of 90-day service fee per clause"],
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate resilient logistics-hub vending through operators that can attest in writing to multi-commissary capability, dual-SIM telemetry, offline-mode payment, FDA recall SOP, and severe-weather pre-position. Capability documentation provided on request during scoping; we do not claim engagements at any specific named site that experienced a disruption event.",
    },
  ],
  footer:
    "Reference for facility services, risk, and procurement teams. Final contract clauses should be reviewed by counsel; severe-weather and recall SOPs should align with the parent organization's broader BCP.",
});

console.log("wrote "+"vending-supply-chain-disruptions-logistics");
