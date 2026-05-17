import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "questions-to-ask-before-signing-vending-contract",
  assetType: "checklist",
  title: "30+ Questions to Ask Before Signing a Vending Contract",
  subtitle: "A printable review framework covering term, commission, service, technology, insurance, and exit",
  intro:
    "Use this checklist when reviewing a draft contract or evaluating a proposed operator. Each question maps to a specific clause type or operational risk. Mark each item as confirmed in writing, attested verbally only, or unresolved — and require written attestation on every confirmed item before signing.",
  sections: [
    {
      heading: "1. Term, renewal, and exclusivity",
      items: [
        { check: "What is the initial term, and does it auto-renew? Renewal terms longer than 12 months should require affirmative consent." },
        { check: "Is exclusivity required for the full property or only the building/wing where the machines sit? Carve out coffee, micro-market, and OCS where relevant." },
        { check: "What is the notice window for non-renewal (30 / 60 / 90 days), and does the window apply to the host, the operator, or both?" },
        { check: "Does the contract bind successors and assigns? Acquisition of the operator by a third party can change service quality overnight." },
      ],
    },
    {
      heading: "2. Commission, pricing, and revenue share",
      items: [
        { check: "Is commission paid on gross sales or net sales? Net definitions vary — confirm whether sales tax, processing fees, refunds, and shrink are deducted." },
        { check: "What is the commission percentage at each volume tier, and when is payment due (monthly / quarterly)?" },
        { check: "Who sets retail pricing, and how often can it be adjusted? Tie price changes to a CPI ceiling or a written notice obligation." },
        { check: "What audit rights does the host have over sales data, telemetry exports, and processor settlement reports?" },
        { check: "How are minimum guarantees, signing bonuses, or capital contributions treated if the contract terminates early?" },
      ],
    },
    {
      heading: "3. Service SLA and uptime",
      items: [
        { check: "What is the restock cadence, and is it tied to a telemetry threshold (e.g., refill when any SKU drops below 20%) rather than a fixed day-of-week?" },
        { check: "What is the operator's documented uptime target? 95% is workable for small sites, 98% should be expected for sites with 100+ daily users." },
        { check: "What is the SLA for service tickets by severity tier? Tier 1 (machine down) should be acknowledged within 4 hours and resolved within 24-48." },
        { check: "How is downtime measured — by operator telemetry alone, or with host verification rights?" },
        { check: "Who covers the cost of a failed machine? Operator should bear cost of repair/replacement except where damage is host-caused." },
      ],
    },
    {
      heading: "4. Product mix and planogram control",
      items: [
        { check: "Who selects SKUs, and what is the process to add, swap, or remove a product?" },
        { check: "Are healthy options included, and do they meet a published standard (FITPick, USDA Smart Snacks, state DGS, or equivalent)?" },
        { check: "Are allergen-friendly, halal, kosher, and vegetarian options offered, and how often is the planogram refreshed?" },
        { check: "What is the planogram review cadence (quarterly is typical), and how are stockouts attributed in the report?" },
      ],
    },
    {
      heading: "5. Payment, technology, and data",
      items: [
        { check: "Does each machine accept tap-to-pay, mobile wallet, and major card networks? Cashless mix should support 60-80% of transactions in modern installs." },
        { check: "Is the payment platform PCI DSS compliant (current version), and which SAQ form applies? Operator should provide AOC on request." },
        { check: "Who owns telemetry, sales, and user data (where an app is used)? Confirm host receives at least read access to per-machine performance data." },
        { check: "What is the operator's data breach notification SLA (72 hours is the common baseline aligned with state breach-notification laws)?" },
        { check: "Is there a refund process accessible by app, SMS, or phone — not only via on-machine touchpad?" },
      ],
    },
    {
      heading: "6. Insurance, indemnity, and compliance",
      items: [
        { check: "Are insurance limits adequate (CGL $1M/$2M, products/completed ops $2M, umbrella $5M, workers' comp + employer's liability, cyber where applicable)?" },
        { check: "Is the host named as additional insured on a primary, non-contributory basis with waiver of subrogation?" },
        { check: "Are indemnity obligations mutual and comparative-fault based, with carve-outs for sole-negligence anti-indemnity scenarios?" },
        { check: "Is ADA Title III + Section 308 reach range, clear floor space, and operating force attested in writing?" },
        { check: "Are health-department permits, food-handler certifications, and applicable state licenses on file with the operator?" },
      ],
    },
    {
      heading: "7. Termination, exit, and removal",
      items: [
        { check: "What triggers termination for cause (SLA failure, COI lapse, data breach, missed commission payments, recall failure)?" },
        { check: "What is the termination-for-convenience notice window, and is there a buyout fee tied to undepreciated capital contributions?" },
        { check: "Who pays for machine removal, floor patching, and electrical decommissioning at exit, and what is the timeline?" },
        { check: "Does the operator agree to cooperate with a successor operator (data export, planogram handover, transition period)?" },
        { check: "What happens to commission earned but unpaid at termination — is there a defined settlement window?" },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. Coordinate the final review with counsel before signing. LetUsVending can connect you with operators equipped to attest to each item above in writing — request the operator capability matrix to start a side-by-side comparison.",
});

console.log("wrote " + "questions-to-ask-before-signing-vending-contract");
