import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "micro-market-installation-checklist",
  assetType: "checklist",
  title: "12-Phase Micro-Market Installation Checklist",
  subtitle: "Site survey, electrical, data, cold-chain, PCI-DSS, HR badge, and soft launch",
  intro:
    "Use this checklist to install a 50-200 employee corporate micro-market with zero post-launch surprises. Each phase maps to a contractually attestable deliverable; standards cited reference NEC 2023, FDA Food Code 2022, PCI-DSS v4.0, and ADA 2010 Standards Section 305-309.",
  sections: [
    {
      heading: "Phase 1 — Site survey (T-60 days)",
      items: [
        { check: "Measured kiosk footprint (typically 24 inch × 24 inch base + 18 inch clearance behind for cabling)." },
        { check: "Measured fixture floor plan (coolers 30 inch × 72 inch, ambient racks per planogram)." },
        { check: "ADA 305 clear floor space 30 inch × 48 inch verified at every operable part (kiosk + each cooler door)." },
        { check: "Photo documentation: 4 corners of the room + overhead + utility-stub locations." },
      ],
    },
    {
      heading: "Phase 2 — Electrical scope (T-55 days)",
      paragraph:
        "Electrical capacity is the most common cause of install delays. NEC 2023 Articles 422 + 440 govern appliance and refrigeration branch circuits.",
      items: [
        { check: "Coolers — dedicated 120V/20A circuit per cooler; NEMA 5-20R receptacle within 6 feet." },
        { check: "Hot-food unit (if applicable) — dedicated 120V/20A or 240V/30A per OEM spec." },
        { check: "Kiosk — dedicated 120V/15A circuit on UPS battery backup." },
        { check: "Lighting (overhead + cooler) on facility circuit; not shared with vending loads." },
        { check: "Licensed electrician performs install; permits pulled per local AHJ; load calculation documented." },
      ],
    },
    {
      heading: "Phase 3 — Data scope (T-50 days)",
      items: [
        { check: "Hardwired ethernet drop at kiosk (preferred over cellular for PCI scope reduction)." },
        { check: "If cellular — signal strength ≥ -85 dBm on operator's carrier verified at install location." },
        { check: "Backup connectivity — failover from primary ethernet to cellular within 60 seconds (or vice versa)." },
        { check: "Network segmentation — kiosk on a separate VLAN from host corporate network; firewall rules documented." },
      ],
    },
    {
      heading: "Phase 4 — Cold-chain commissioning (T-45 days)",
      paragraph:
        "FDA Food Code 2022 §3-501.16 requires TCS foods at ≤ 41°F. Commission each cooler with a 72-hour temperature log before stocking.",
      items: [
        { check: "Each refrigerated unit run empty for 24 hours; verified to hold ≤ 38°F throughout cycle." },
        { check: "Door-open temperature recovery ≤ 5°F rise; recovery time ≤ 10 minutes." },
        { check: "Temperature-excursion alerting configured: alert at > 41°F sustained > 30 minutes." },
        { check: "Cold-chain alerts route to operator + host facility manager." },
      ],
    },
    {
      heading: "Phase 5 — PCI-DSS scope confirmation (T-40 days)",
      items: [
        { check: "Operator provides current PCI-DSS v4.0 attestation (SAQ-C-VT or ROC)." },
        { check: "Card reader is current-generation EMV + contactless + mobile-wallet capable." },
        { check: "Tokenization confirmed — no PAN data persists on kiosk after transaction." },
        { check: "Encryption confirmed — TLS 1.2+ for all kiosk-to-gateway traffic." },
      ],
    },
    {
      heading: "Phase 6 — ADA + accessibility validation (T-35 days)",
      items: [
        { check: "Kiosk reach range 15-48 inches per Section 308." },
        { check: "Kiosk touchscreen has audio-output mode or paired mobile app accessibility." },
        { check: "Tactile braille pricing labels where required." },
        { check: "Site walk with host accessibility coordinator; written sign-off." },
      ],
    },
    {
      heading: "Phase 7 — Equipment delivery + placement (T-21 days)",
      items: [
        { check: "Delivery dock scheduled with host receiving / loading dock." },
        { check: "Pathway clearance verified (doorways ≥ 36 inch wide, ≥ 80 inch tall)." },
        { check: "Equipment placed, leveled, and connected to power + data." },
        { check: "Internal lighting + signage installed." },
      ],
    },
    {
      heading: "Phase 8 — Software + planogram configuration (T-14 days)",
      items: [
        { check: "SKU catalog uploaded to kiosk; pricing + tax rules configured." },
        { check: "Wellness SKUs flagged per host policy (FitPick / NAMA / corporate program)." },
        { check: "Allergen labels per FALCPA configured for every SKU." },
        { check: "Loyalty / payroll-deduction integration tested (if applicable)." },
      ],
    },
    {
      heading: "Phase 9 — HR badge + employee enrollment (T-10 days)",
      items: [
        { check: "Host HR provides employee roster with badge IDs for payroll-deduction sync (if applicable)." },
        { check: "Privacy notice + opt-in/opt-out flow tested per CCPA/CPRA + state equivalents." },
        { check: "Employee onboarding communications drafted with host comms." },
      ],
    },
    {
      heading: "Phase 10 — Initial stocking + cold-chain validation (T-3 days)",
      items: [
        { check: "Initial planogram stocked; cold-chain log started at each cooler door." },
        { check: "Refund procedure tested with operator + 2 host volunteers." },
        { check: "Service-ticket creation tested end-to-end." },
      ],
    },
    {
      heading: "Phase 11 — Soft launch (T-0 to T+7)",
      items: [
        { check: "Communications go out to employees: location, hours, payment methods, refund." },
        { check: "Daily site visit by operator for first 7 days; per-SKU velocity captured." },
        { check: "Stockout incidents logged; planogram tuned daily." },
      ],
    },
    {
      heading: "Phase 12 — 45-day review + planogram refresh",
      items: [
        { check: "Operator delivers per-SKU velocity report and refund-rate report." },
        { check: "Planogram refresh: drop bottom-quartile SKUs; expand top-quartile facings." },
        { check: "Wellness SKU mix reviewed against host policy target." },
        { check: "Action items + owner + due date documented; QBR cadence confirmed (quarterly)." },
      ],
    },
  ],
  footer:
    "This checklist is operational guidance; consult licensed electrical + plumbing + permit professionals for code compliance in your jurisdiction.",
});

console.log("wrote "+"micro-market-installation-checklist");
