import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "managing-vending-contracts-agencies",
  assetType: "toolkit",
  title: "Public Agency Vending Contract Management Toolkit",
  subtitle: "Quarterly agenda, commission reconciliation template, healthy-vending audit checklist, and renewal decision framework",
  intro:
    "This toolkit gives contracting officers, facility coordinators, and agency wellness leads the working documents to govern an existing vending contract at a federal, state, county, or municipal site. Standards referenced: ADA Section 308, GSA SIN 478-1 vending services context, AbilityOne 41 CFR Part 51 where the placement is Randolph-Sheppard or AbilityOne, HHS/CDC food-service guidelines, FALCPA allergen labeling, and PCI-DSS 4.0. Capability-framed — operator attestations belong in the contract file.",
  sections: [
    {
      heading: "1. Quarterly business review agenda",
      paragraph:
        "Schedule the QBR 30 days in advance. Required attendees: contracting officer (or COR), facility coordinator, agency wellness lead (where applicable), operator account manager, operator route supervisor. Block 75 minutes.",
      items: [
        { number: 1, title: "Uptime + service SLA review (15 min)", description: "Operator presents per-machine, per-month uptime over the quarter. Target ≥ 98%. Review Tier-1 incident log (machine offline > 24 hr, cold-chain excursion, payment system down) and resolution times against SLA." },
        { number: 2, title: "Commission reconciliation (10 min)", description: "Cross-check operator's revenue report against telemetry transaction count. Variance ≤ 1% expected; > 2% triggers reconciliation per Section 2." },
        { number: 3, title: "Planogram + velocity (15 min)", description: "Top-20 / bottom-20 SKUs; operator proposes drops + adds for next quarter. Confirm healthier-vending mix per Section 3 audit." },
        { number: 4, title: "Compliance attestation refresh (10 min)", description: "ADA Section 308 attestation, PCI-DSS 4.0 currency, FDA menu labeling adherence (where > 20 placements), state weights-and-measures registration, Randolph-Sheppard / AbilityOne flow-down where applicable." },
        { number: 5, title: "End-user feedback (10 min)", description: "Refund volume + reason codes (target < 2% of transactions). Sample of any employee or visitor complaints since last QBR." },
        { number: 6, title: "Action items + accountabilities (15 min)", description: "Each open item gets an owner and a due date. Action items roll to the next QBR agenda." },
      ],
    },
    {
      heading: "2. Commission reconciliation template",
      paragraph:
        "Use this monthly. Variance ≤ 1% between operator-reported revenue and telemetry transaction count × posted price is normal (refunds, comps). Variance > 2% triggers a written request for reconciliation.",
      headers: ["Field", "Source", "Notes"],
      rows: [
        ["Period", "Calendar month", "Operator reports by 15th of following month per typical contract"],
        ["Gross revenue (operator-reported)", "Operator monthly statement", "Should include cash + cashless gross"],
        ["Transaction count (telemetry)", "Cantaloupe / Nayax / 365 / AWM portal export", "Agency contracting officer should have read-only portal access"],
        ["Avg posted price", "Planogram of record", "Weight by SKU mix where the planogram is mixed-price"],
        ["Calculated gross (txns × avg price)", "Computed", "Compare to operator-reported gross"],
        ["Variance %", "Computed", "Acceptable ≤ 1%; flag at > 2%; written request at > 2%"],
        ["Refunds", "Operator refund log", "Subtract from gross to get net"],
        ["Comps / promotions", "Operator promo log", "E.g., free-first-purchase or wellness program subsidy"],
        ["Net revenue", "Computed", "Basis for commission tier"],
        ["Commission rate", "Contract Schedule B", "Tiered by volume or flat percentage"],
        ["Commission due", "Net × rate", "Operator remits per contract cadence (monthly or quarterly typical)"],
        ["Commission paid", "Bank confirmation", "Verify against agency receivables"],
      ],
    },
    {
      heading: "3. Healthy-vending audit checklist",
      paragraph:
        "Federal and many state placements require a healthier-vending standard. Audit at every QBR. The checklist below references the HHS/CDC Food Service Guidelines for Federal Facilities and the GSA healthier-food provisions where in effect.",
      items: [
        { check: "≥ 50% of snack facings meet the HHS/CDC Food Service Guidelines: ≤ 200 cal, ≤ 230 mg sodium, ≤ 10 g added sugar, ≤ 35% calories from total fat (with seafood/seeds/nuts exception)." },
        { check: "≥ 50% of beverage facings meet beverage criteria: water, ≤ 40 cal per 8 oz juice, low-fat dairy, unsweetened tea/coffee." },
        { check: "Calorie display per FDA menu labeling rule (≥ 20 placements operator-wide)." },
        { check: "Allergen labeling per FALCPA on each SKU; allergen summary signage on the machine face." },
        { check: "ADA Section 308 reach range verified at audit (15-48 in operable parts; ≤ 5 lbf operating force)." },
        { check: "Healthier-option facings are at eye level (24-60 in shelf) where possible." },
        { check: "Pricing parity: healthier options priced ≤ 10% above conventional comparator." },
        { check: "Signage promotes healthier options (point-of-decision prompts per CDC guidance)." },
        { check: "Cold-chain attestation: refrigerated units hold ≤ 40°F per FDA Food Code 3-501.16; telemetry log on file." },
        { check: "Quarterly photo documentation of planogram retained in contract file." },
      ],
    },
    {
      heading: "4. End-user feedback channels + refund flow",
      paragraph:
        "Public-building visitors and staff need an accessible refund and feedback path. Channels and SLAs should be in the contract.",
      items: [
        { label: "Channel 1 — On-machine QR / NFC", value: "QR or NFC tap on machine face links to operator refund form; auto-credit to cashless transactions within 24 hr." },
        { label: "Channel 2 — Text-to-refund", value: "SMS short code or 10-digit number printed on machine; auto-credit cashless within 24 hr; cash refund mailed within 7 business days." },
        { label: "Channel 3 — Phone", value: "Toll-free number printed on machine; staffed during business hours; voicemail with same-business-day callback." },
        { label: "Channel 4 — Facility coordinator", value: "Local facility contact accepts complaints and forwards to operator; closes loop with end user within 5 business days." },
        { label: "Reporting", value: "Operator delivers monthly refund report by reason code; QBR reviews trend and triggers planogram or machine quality review at > 2%." },
      ],
    },
    {
      heading: "5. Contract renewal decision framework",
      paragraph:
        "Begin renewal review 9-12 months before contract expiration. Decision framework below should be documented in the contract file.",
      headers: ["Criterion", "Renew threshold", "Re-compete trigger"],
      rows: [
        ["Uptime SLA over current term", "≥ 98% monthly average", "< 98% in any 2 consecutive months"],
        ["Service SLA adherence", "≥ 95% of tickets within Tier-1/Tier-2 windows", "< 90% adherence in any quarter"],
        ["Healthier-vending audit", "All checks pass at last 2 QBRs", "Failed audit not cured within 60 days"],
        ["Commission variance", "≤ 1% average; no variance > 2%", "Recurring variance > 2% unresolved"],
        ["Compliance attestations current", "ADA, PCI-DSS 4.0, FDA menu labeling, insurance COI", "Any attestation lapse not cured within 30 days"],
        ["End-user satisfaction", "Refund rate < 2%; complaint volume flat or declining", "Refund rate ≥ 2% across 2 quarters"],
        ["Randolph-Sheppard / AbilityOne flow-down", "Active and documented where applicable", "Lapse in priority where federal placement"],
      ],
    },
    {
      heading: "6. Annual compliance file checklist",
      items: [
        { check: "Operator's current insurance COI ($2M GL, $1M umbrella, additional-insured endorsement)" },
        { check: "PCI-DSS 4.0 AOC / SAQ-B-IP" },
        { check: "ADA Section 308 written attestation (annual)" },
        { check: "FDA menu labeling attestation where applicable (≥ 20 placements operator-wide)" },
        { check: "Healthier-vending policy attestation per HHS/CDC Food Service Guidelines" },
        { check: "Randolph-Sheppard priority attestation where federal cafeteria/vending placement" },
        { check: "AbilityOne 41 CFR Part 51 flow-down where applicable" },
        { check: "State weights-and-measures registration where required" },
        { check: "Quarterly QBR records (last 4 quarters retained)" },
        { check: "Monthly commission reconciliation records (last 12 months)" },
        { check: "Refund + complaint log (last 12 months)" },
      ],
    },
  ],
  footer:
    "This toolkit is informational and not legal advice. Federal contracting officers, state procurement officials, and local facility coordinators should consult agency counsel for Randolph-Sheppard, AbilityOne, and any state-specific blind-vendor priority program flow-down. Operator capability claims should be verified through written attestation and on-site audit. LetUsVending can connect agency teams with operators equipped to serve public-building placements.",
});

console.log("wrote "+"managing-vending-contracts-agencies");
