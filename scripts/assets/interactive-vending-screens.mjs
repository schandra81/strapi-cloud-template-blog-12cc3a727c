import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "interactive-vending-screens",
  assetType: "checklist",
  title: "Interactive Vending Screen Verification Framework",
  subtitle: "Capability checklist + MDM + ADA / Section 508 + nutrition disclosure + privacy",
  intro:
    "Touchscreen-equipped vending machines (Crane Merchandising Systems Streamware-enabled, AMS Touch, USA Technologies / Cantaloupe ePort Engage, Vendekin, smart coolers from Cooler Screens, AAEON, Selecta) introduce new procurement scrutiny: mobile-device management (MDM) for content / firmware, ADA + Section 508 conformance on the interface, FDA calorie-disclosure rules for menu-board-style displays, and US state privacy law obligations where the screen captures imagery or behavior. This framework gives facilities, procurement, and IT a contract-ready verification checklist.",
  sections: [
    {
      heading: "1. Hardware capability",
      items: [
        { check: "Touchscreen ≥ 21.5 in for full menu-board UX; ≥ 7 in acceptable as selector display." },
        { check: "Capacitive (PCAP) touch with glove-mode support where industrial / cold-room placement." },
        { check: "Brightness ≥ 700 nits where ambient lighting ≥ 500 lux; sun-readable ≥ 1,500 nits at semi-outdoor placement." },
        { check: "IP-rated bezel (IP54+) where wash-down or splash risk; tempered + anti-vandal cover glass." },
        { check: "Headphone jack (3.5 mm) for audio output per Section 508 / WCAG 2.1 AA." },
        { check: "On-screen keyboard + dwell-click support for limited-mobility users." },
      ],
    },
    {
      heading: "2. MDM + content management",
      paragraph:
        "Operator must run a managed-device infrastructure equivalent to an enterprise MDM (Microsoft Intune, Jamf, SOTI, VMware Workspace ONE). Without MDM the screen becomes a managed-content liability — stale calorie labels, expired promotions, unauthorized content.",
      items: [
        { check: "Operator MDM platform documented; firmware + content push remote-managed." },
        { check: "Content workflow: planogram changes pushed to screen within 24 hours of operator system update." },
        { check: "Calorie + allergen content tied to SKU master; updates push automatically with planogram." },
        { check: "Content approval gate: facility / SFA / wellness committee has review-and-block right on creative content." },
        { check: "Audit log: content + firmware change events retained 12 months minimum." },
        { check: "Kiosk mode locked; OS-level access prevented (Android Enterprise / Windows Assigned Access)." },
      ],
    },
    {
      heading: "3. ADA + Section 508 + WCAG 2.1 AA",
      items: [
        { check: "VPAT 2.5 (Voluntary Product Accessibility Template) dated within 12 months on file." },
        { check: "Touchscreen highest operable target ≤ 48 in AFF (2010 ADA Standards 308.2.1)." },
        { check: "Operating force ≤ 5 lbf; usable with one hand and no tight grasping (Section 309.4)." },
        { check: "Audio output via 3.5 mm jack supports screen-reader-equivalent narration of menu + price + allergen." },
        { check: "Text contrast ratio ≥ 4.5:1 (WCAG 1.4.3); ≥ 3:1 for large text." },
        { check: "Font size minimum equivalent to 14-pt at typical viewing distance; magnification supported." },
        { check: "Touch target ≥ 9.6 mm (WCAG 2.5.5 enhanced); spacing prevents adjacent-selection error." },
        { check: "Dwell-click / sticky-keys / single-hand operation modes supported." },
      ],
    },
    {
      heading: "4. Nutrition + calorie disclosure",
      items: [
        { check: "FDA Menu Labeling Rule (21 CFR 101.8) applies to chains with 20+ machines under common ownership — verify scope." },
        { check: "Calorie display per selection (and per item where multi-serve) — same display prominence as price." },
        { check: "Allergen labeling per FALCPA (21 U.S.C. 343); Big 9 allergens including sesame (FASTER Act 2021)." },
        { check: "Smart Snacks SKU flags at K-12 placements per 7 CFR 210.11." },
        { check: "Nutrition Facts panel viewable on-screen or via QR linking to authoritative source (SKU master)." },
        { check: "State / city overlays verified: New York City Health Code Section 81.50 (calorie posting), California Prop 65 (acrylamide / heavy metals)." },
      ],
    },
    {
      heading: "5. Privacy + data — US state law overlay",
      paragraph:
        "Smart coolers + camera-equipped screens may collect imagery, demographic inference, dwell time, or behavioral data — triggering CCPA/CPRA (California), VCDPA (Virginia), CPA (Colorado), CTDPA (Connecticut), UCPA (Utah), and 15+ other state laws active or in-effect through 2026.",
      items: [
        { check: "Operator data-collection inventory documented: imagery (yes/no), facial analysis (yes/no), dwell time, transaction telemetry." },
        { check: "Privacy notice posted at machine + on operator website per CCPA §1798.100; mirror disclosures for VCDPA / CPA / CTDPA / UCPA." },
        { check: "If facial analysis: BIPA (Illinois 740 ILCS 14) consent obtained where applicable; Texas CUBI (Tex. Bus. & Com. Code 503.001) and Washington (RCW 19.375) overlays verified." },
        { check: "If targeted advertising: opt-out mechanism + Global Privacy Control honored." },
        { check: "Data retention schedule documented; minimum-necessary principle applied." },
        { check: "Vendor data processing agreement (DPA) in place; sub-processor list maintained." },
      ],
    },
    {
      heading: "6. Security + payment integration",
      items: [
        { check: "Payment via PCI PTS v6+ approved terminal; PCI DSS v4.0.1 AOC on file (effective 31 March 2025)." },
        { check: "Touchscreen UX never captures PAN; payment device handles entry + tokenization." },
        { check: "P2PE v3.1 or strong tokenization; no PAN on operator host." },
        { check: "Screen-to-network: TLS 1.2 minimum (TLS 1.3 preferred); SSL / TLS 1.0/1.1 disabled (NIST SP 800-52 Rev. 2)." },
        { check: "Firmware update process signed; downgrade prevention enforced." },
        { check: "Vulnerability scanning quarterly; SBOM available on request." },
      ],
    },
    {
      heading: "7. Contract + operational",
      items: [
        { check: "MSA references VPAT 2.5, PCI DSS v4.0.1, FDA 21 CFR 101.8, FALCPA, applicable state privacy laws." },
        { check: "Quarterly content + privacy + accessibility review built into QBR." },
        { check: "Operator commits to <24 hour content removal SLA for non-compliant or inappropriate content." },
        { check: "Operator carries cyber liability insurance ≥ $1M; data-breach notification cooperation." },
        { check: "Sunset / decommission procedure: data deleted per retention schedule on contract end." },
      ],
    },
  ],
  footer:
    "Informational only — not legal advice. Verify accessibility, FDA, FTC, and state privacy law applicability with counsel and the facility ADA / wellness coordinator. LetUsVending is equipped to coordinate operators with VPAT-documented touchscreen platforms and content-management SLAs.",
});

console.log("wrote "+"interactive-vending-screens");
