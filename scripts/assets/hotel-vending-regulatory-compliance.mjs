import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "hotel-vending-regulatory-compliance",
  assetType: "pack",
  title: "Hotel Vending Compliance Review Framework",
  subtitle: "Seven regulatory regimes, documentation packet, and quarterly review cadence",
  intro:
    "Hotel vending sits at the intersection of seven distinct regulatory regimes — none of them controlled by the operator alone. This framework consolidates the documentation packet and quarterly review cadence a GM or director of engineering can use to keep the program audit-ready. Built around capability the operator should be able to attest to in writing.",
  sections: [
    {
      heading: "1. The seven regimes",
      paragraph:
        "Each regime is enforced by a different authority. Operator-attestation, facility-level review, or both are required.",
      headers: ["Regime", "Authority", "Operator scope", "Facility scope"],
      rows: [
        ["FDA Food Code (TCS, allergen, date marking)", "State / local health authority adopting FDA Food Code", "HACCP plan, commissary cert, cold-chain log", "Permit posted; alcove cleanliness"],
        ["FALCPA allergen labeling", "FDA 21 CFR 101", "Per-SKU Top-9 declaration; allergen card on machine", "Spot-check at quarterly review"],
        ["ADA Title III + 2010 Standards (§§ 305, 308, 309)", "DOJ; private right of action", "Machine reach range, force, VPAT", "Alcove clear floor space; route"],
        ["PCI-DSS v4.0 (card payment)", "Card brands; acquirer", "EMV reader, segmentation, attestation", "Network if reader on facility VLAN"],
        ["NFPA 1 + 101 (fire / life safety)", "Local fire marshal", "Equipment listing (UL)", "Egress width; outlet load; sprinkler"],
        ["State weights + measures", "State Dept of Agriculture", "Pricing accuracy, dispense verification", "N/A typically"],
        ["State + local tax (sales / use)", "State revenue dept", "Pricing-inclusive vs additive; reporting", "1099 reporting if commission paid to host"],
      ],
    },
    {
      heading: "2. FDA Food Code documentation packet",
      items: [
        { check: "Commissary food-establishment permit current (verify expiration date)" },
        { check: "Most recent state/local health inspection — within past 12 months" },
        { check: "HACCP plan or written Active Managerial Control narrative" },
        { check: "Continuous temperature log from commissary to cooler — sub-15-minute resolution, retained 90 days minimum (§8-201.14)" },
        { check: "Date-marking SOP — TCS foods marked with use-by date ≤ 7 days (§3-501.17)" },
        { check: "Holding-temperature alarms configured — TCS ≤ 41°F (§3-501.16)" },
        { check: "Recall procedure — Class I product pulled within 24 hours of FDA notice" },
        { check: "Operator route-staff food handler / manager certification (ANSI-CFP recognized)" },
      ],
    },
    {
      heading: "3. FALCPA + allergen documentation",
      items: [
        { number: 1, title: "Per-SKU labeling", description: "Top-9 allergens (milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soy, sesame — sesame added January 2023) declared on each package per 21 CFR 101.10–101.92." },
        { number: 2, title: "Gluten-free claims", description: "If any SKU bears 'gluten-free' claim, < 20 ppm gluten per 21 CFR 101.91. Operator carries certificate of analysis on request." },
        { number: 3, title: "Allergen summary card on machine", description: "Quick-reference card on machine face listing common-name allergens visible in current planogram. Refreshed at each planogram change." },
        { number: 4, title: "Cross-contact at commissary", description: "Commissary HACCP includes allergen cross-contact control. Documented in HACCP plan section 4 or equivalent." },
      ],
    },
    {
      heading: "4. ADA Title III audit (Section 308 / 305 / 309)",
      items: [
        { check: "Reach range: operable parts 15–48 in above finished floor (§308.2.1, §308.3.1)" },
        { check: "Obstructed-reach correction applied where machine sits behind transaction shelf (§308.2.2, §308.3.2)" },
        { check: "Clear floor space 30 in × 48 in at operable parts (§305.3)" },
        { check: "Operating force ≤ 5 lbf on all selection buttons, card reader, contactless tap, dispense flap (§309.4)" },
        { check: "VPAT (2.5-Rev508 or current) on file for kiosk OS, card reader, mobile-wallet flow" },
        { check: "Cashless option available; refund flow accessible via app/SMS/phone (not solely touchscreen)" },
        { check: "Operator ADA attestation signed at install and annually" },
      ],
    },
    {
      heading: "5. PCI-DSS v4.0 documentation",
      items: [
        { label: "Reader generation", value: "PCI-PTS POI v6 or current; EMV L1 + L2 certified; contactless EMV." },
        { label: "Tokenization", value: "PAN tokenized at reader; never transmitted in clear to operator back-end." },
        { label: "Network segmentation", value: "Reader uses operator cellular LTE or facility PCI-segmented VLAN. Written attestation from facility IT if on facility network." },
        { label: "Attestation of Compliance (AoC)", value: "Operator provides annual AoC for the vending payment scope; SAQ B-IP typical for IP-connected POI." },
        { label: "Skimmer + tamper inspection", value: "Daily visual + monthly tamper-seal check; tamper response procedure (cardholder notification, brand mandates) on file." },
        { label: "Firmware lifecycle", value: "Reader replaced or firmware-refreshed before end-of-life per PCI device lifecycle (typically 5–7 years)." },
      ],
    },
    {
      heading: "6. NFPA + state weights/measures + tax",
      paragraph:
        "Local fire marshal, state weights + measures inspector, and state revenue authority each have a distinct touch-point. Operator attests; facility coordinates.",
      items: [
        { number: 1, title: "NFPA 101 §7.1 egress", description: "Vending alcove placement retains ≥ 44 in egress corridor width (or ≥ 36 in in occupancy < 50). Equipment UL-listed; dedicated 20A circuit; not blocking sprinkler coverage." },
        { number: 2, title: "Weights + measures", description: "Pricing display accurate to displayed value; dispense reliability ≥ 99.5% per state spec. Operator carries last state inspection report (typically annual)." },
        { number: 3, title: "Sales / use tax", description: "Operator carries state vending operator license where required; sales tax remitted (price-inclusive or price-additive per state rule). Commission to host reported on 1099-NEC if > $600/year (IRS 26 USC §6041)." },
      ],
    },
    {
      heading: "7. Quarterly compliance review template",
      items: [
        { check: "Commissary inspection report — within 12 months, no critical violations" },
        { check: "Temperature excursion log — count, duration, resolution" },
        { check: "Allergen labeling spot-check — 20% sample of SKUs" },
        { check: "ADA measurements — reach range, force, clear floor space — re-verified" },
        { check: "PCI tamper-seal inspection log + firmware status" },
        { check: "Egress audit — corridor clearance + outlet load" },
        { check: "Weights + measures + tax filings current" },
        { check: "Refund rate (target < 2%) + reason codes" },
        { check: "Service ticket SLA adherence" },
        { check: "Action items + owner + due date" },
      ],
    },
    {
      heading: "8. Indicative compliance budget",
      headers: ["Line item", "Range", "Cadence"],
      rows: [
        ["Annual ADA attestation + measurements", "$200 – $500/machine", "Annual"],
        ["PCI AoC + reader lifecycle", "$0 – $300/machine", "Annual + every 5–7 years for reader"],
        ["Commissary inspection / HACCP review", "$400 – $1,800", "Annual"],
        ["State vending license + weights+measures", "$50 – $400/machine", "Annual"],
        ["Quarterly compliance review meeting", "$300 – $700", "Quarterly"],
        ["Document retention system", "$0 – $1,200", "One-time + storage"],
      ],
    },
    {
      heading: "9. Capability framing",
      paragraph:
        "LetUsVending is equipped to coordinate hotel vending placements through operators that can attest to the seven-regime framework above. Capability is described in operator-attested terms with documentation provided on request during scoping. This framework is informational and not legal, tax, or accreditation advice — final compliance posture should be confirmed by the hotel's risk, legal, and engineering teams in coordination with the operator and local authorities.",
    },
  ],
  footer:
    "Reference document for GMs, directors of engineering, and risk teams. Local jurisdictions may add requirements above the federal floor; consult qualified counsel for complex placements (gaming-property, government-flag, branded-resort).",
});

console.log("wrote "+"hotel-vending-regulatory-compliance");
