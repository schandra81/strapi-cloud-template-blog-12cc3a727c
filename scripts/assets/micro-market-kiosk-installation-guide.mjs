import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-market-kiosk-installation-guide",
  assetType: "checklist",
  title: "10-Phase Micro-Market Kiosk Installation Checklist",
  subtitle: "Survey, electrical, network, PCI-DSS, planogram, soft launch, and 30-day review",
  intro:
    "Use this checklist to install a kiosk-anchored micro-market (365 Retail Markets, AVI-SPL Three Square, Avanti, or comparable). Each phase has photo / sign-off deliverables; standards cite NEC 2023, PCI-DSS v4.0 (effective March 2024), and FDA Food Code 2022.",
  sections: [
    {
      heading: "Phase 1 — Site survey + scope finalization",
      items: [
        { check: "Kiosk footprint marked; clear floor space 30 inch × 48 inch verified per ADA Section 305." },
        { check: "Cooler / freezer / ambient fixture floor plan finalized." },
        { check: "Sign-off: host facility manager + operator install lead." },
        { check: "Photos: 4 corners of room, ceiling, utility stubs, delivery path." },
      ],
    },
    {
      heading: "Phase 2 — Electrical scope per NEC 2023",
      items: [
        { check: "Coolers — dedicated 120V/20A circuit each; NEMA 5-20R within 6 feet." },
        { check: "Kiosk — dedicated 120V/15A on UPS battery backup." },
        { check: "Licensed electrician + permit; load calculation documented." },
        { check: "Sign-off: licensed electrician + AHJ inspection." },
      ],
    },
    {
      heading: "Phase 3 — Network + data",
      items: [
        { check: "Wired ethernet drop at kiosk; static IP or DHCP reservation." },
        { check: "Cellular failover signal ≥ -85 dBm verified." },
        { check: "Kiosk VLAN segmented from corporate network." },
        { check: "Sign-off: host IT lead + operator network engineer." },
      ],
    },
    {
      heading: "Phase 4 — Cold-chain commissioning (FDA Food Code 2022)",
      items: [
        { check: "Each cooler holds ≤ 38°F for 24 hours empty before stocking." },
        { check: "Temperature alerting configured: alert at > 41°F sustained > 30 minutes." },
        { check: "Photo: temp log printout for each cooler." },
      ],
    },
    {
      heading: "Phase 5 — PCI-DSS v4.0 confirmation",
      items: [
        { check: "Operator's current SAQ-C-VT or ROC on file." },
        { check: "Tokenization verified — no PAN on kiosk." },
        { check: "TLS 1.2+ enforced for kiosk-to-gateway." },
        { check: "Sign-off: operator PCI lead + host security." },
      ],
    },
    {
      heading: "Phase 6 — ADA + accessibility",
      items: [
        { check: "Kiosk reach range 15-48 inches per Section 308." },
        { check: "Touchscreen audio output or paired mobile app accessibility (WCAG 2.1 AA)." },
        { check: "Photo: reach-range measurement." },
      ],
    },
    {
      heading: "Phase 7 — Planogram + software configuration",
      items: [
        { check: "SKU catalog + pricing + tax rules loaded." },
        { check: "Allergen labels per FALCPA on every SKU." },
        { check: "Wellness SKU mix per host policy." },
        { check: "Sign-off: operator merchandising lead." },
      ],
    },
    {
      heading: "Phase 8 — HR + payroll deduction (if applicable)",
      items: [
        { check: "Employee badge sync tested." },
        { check: "Privacy notice + opt-in/opt-out tested per CCPA/CPRA." },
        { check: "Sign-off: host HR + payroll." },
      ],
    },
    {
      heading: "Phase 9 — Soft launch",
      items: [
        { check: "Initial stock per planogram; cold-chain log started." },
        { check: "Employee communications sent." },
        { check: "Daily site visits by operator for 7 days; stockouts logged." },
        { check: "Photo: stocked fixtures + signage." },
      ],
    },
    {
      heading: "Phase 10 — 30-day review",
      items: [
        { check: "Per-SKU velocity report delivered." },
        { check: "Planogram refresh — bottom-quartile dropped, top-quartile expanded." },
        { check: "Refund-rate report < 2% of transactions." },
        { check: "QBR cadence confirmed; action items + owner + due date." },
        { check: "Sign-off: operator account manager + host facility manager." },
      ],
    },
  ],
  footer:
    "This checklist is operational guidance; consult licensed trade professionals for jurisdiction-specific permit and code requirements.",
});

console.log("wrote "+"micro-market-kiosk-installation-guide");
