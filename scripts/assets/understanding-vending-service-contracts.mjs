import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "understanding-vending-service-contracts",
  assetType: "checklist",
  title: "Vending Service Contract Review Framework — 12 Dimensions",
  subtitle: "Attorney-style review checklist for term, commission, service, technology, insurance, indemnity, and exit",
  intro:
    "Use this checklist as a working overlay on top of a draft vending services agreement. Each dimension reflects a clause family that appears in standard NAMA / IFMA-style contracts. Mark each item as Verified (with written attestation), Acceptable (with caveats), or Reject — and require written confirmation on every Verified line.",
  sections: [
    {
      heading: "1. Parties, premises, and scope",
      items: [
        { check: "Parties identified with full legal names, entity types, and signing authority verified (corporate resolution or COI of LLC manager)." },
        { check: "Premises described by address, building, and specific machine locations (alcove / break room / floor)." },
        { check: "Scope identifies machine count, machine types (snack, beverage, fresh, combo, micro-market), and any phased rollout dates." },
        { check: "Excluded categories listed (coffee, OCS, water service, micro-market) so cross-vendor disputes are pre-resolved." },
      ],
    },
    {
      heading: "2. Term, renewal, and notice",
      items: [
        { check: "Initial term ≤ 36 months for first contract; renewal terms ≤ 12 months unless mutual written consent." },
        { check: "Automatic renewal flagged; affirmative non-renewal notice window 60-90 days." },
        { check: "Termination-for-convenience window defined for both parties (30-90 days typical)." },
        { check: "Assignment requires prior written consent (avoid silent transfer to a successor operator)." },
      ],
    },
    {
      heading: "3. Commission and revenue share",
      items: [
        { check: "Commission base defined (gross vs. net), with net deductions enumerated (sales tax, processing fees, refunds, shrink)." },
        { check: "Commission rate stated by tier, with sales thresholds and rate schedules attached as Exhibit A." },
        { check: "Payment cadence (monthly) and method (ACH preferred over check) defined; late-payment interest specified." },
        { check: "Audit rights: host may inspect operator sales records, telemetry exports, and processor settlement reports with reasonable notice." },
      ],
    },
    {
      heading: "4. Pricing, planogram, and product mix",
      items: [
        { check: "Retail pricing schedule attached; price changes require written notice (30 days typical) and tied to CPI or commodity index." },
        { check: "Planogram review cadence (quarterly) and host approval rights for material category changes." },
        { check: "Healthy-options standard referenced (FITPick, USDA Smart Snacks, state DGS, or facility-defined nutrition policy)." },
        { check: "Allergen labeling per FALCPA and disclosure obligations spelled out." },
      ],
    },
    {
      heading: "5. Service level agreement (SLA)",
      items: [
        { check: "Uptime target ≥ 98% on a per-machine, per-month basis." },
        { check: "Restock cadence linked to telemetry thresholds rather than fixed calendar days." },
        { check: "Service ticket tiers defined (Tier 1 machine down / Tier 2 stockout / Tier 3 cosmetic) with explicit acknowledgement and resolution SLAs." },
        { check: "Credits or remedies for sustained SLA failure (e.g., commission uplift, machine replacement, contract termination right)." },
      ],
    },
    {
      heading: "6. Technology, payment, and data",
      items: [
        { check: "Cashless acceptance baseline: tap, mobile wallet, and major card networks (Visa, Mastercard, AmEx, Discover)." },
        { check: "PCI DSS attestation (current version) with appropriate SAQ form; AOC available on request." },
        { check: "Data ownership clause: host receives read access to per-machine telemetry; operator owns payment-instrument data subject to PCI obligations." },
        { check: "Breach notification SLA aligned with applicable state law (often 72 hours) and contractual notice." },
      ],
    },
    {
      heading: "7. Insurance and additional insured status",
      items: [
        { check: "CGL $1M/$2M, products/completed ops $2M, auto $1M CSL, workers' comp statutory + employer's liability $1M, umbrella ≥ $5M (raise for airports/hospitals)." },
        { check: "Host named additional insured on primary, non-contributory basis (CG 20 10 + CG 20 37 or equivalent), with waiver of subrogation." },
        { check: "Cyber liability ≥ $1M where operator handles cashless transactions, telemetry, or app PII." },
        { check: "COI received before install and at each renewal; 30-day cancellation notice endorsement included." },
      ],
    },
    {
      heading: "8. Indemnity and limitation of liability",
      items: [
        { check: "Mutual indemnity for each party's negligence, with carve-outs for sole negligence and gross negligence." },
        { check: "Operator defends host with counsel acceptable to host, not merely reimburses defense costs." },
        { check: "Limitation of liability caps carve out indemnity obligations, IP infringement, confidentiality, and willful misconduct." },
        { check: "Indemnity survives termination for the applicable statute of limitations." },
      ],
    },
    {
      heading: "9. Compliance, ADA, and licensing",
      items: [
        { check: "ADA Title III + Section 308 reach range, clear floor space, and operating force attested." },
        { check: "Health department permits, food-handler certifications, and applicable state vending licenses listed." },
        { check: "Energy Star / EISA tiered standards attested for refrigerated machines where applicable." },
        { check: "Tax responsibility allocated: operator collects and remits applicable sales tax; commission paid net of tax where required." },
      ],
    },
    {
      heading: "10. Confidentiality and IP",
      items: [
        { check: "Mutual confidentiality covers commercial terms, sales data, and operator pricing schedules." },
        { check: "Host marks / logos use governed by a brand-use addendum; operator may not advertise the host as a customer without written consent." },
        { check: "Telemetry data and aggregated benchmarks: operator may use de-identified aggregates; host PII and identifiable site data remain host-owned." },
      ],
    },
    {
      heading: "11. Force majeure and continuity",
      items: [
        { check: "Force majeure defined narrowly — pandemics, natural disasters, government orders — not generic 'beyond reasonable control' language." },
        { check: "Notice obligation during force majeure (e.g., 5 business days) and a continuity plan reference." },
        { check: "Either party may terminate if force majeure persists beyond a defined window (90-180 days typical)." },
      ],
    },
    {
      heading: "12. Termination, exit, and dispute resolution",
      items: [
        { check: "Termination-for-cause triggers enumerated (SLA failure, COI lapse, breach of indemnity, recall failure, payment default)." },
        { check: "Machine removal SLA (e.g., 14 days post-termination), restoration of floor, electrical, and signage at operator cost." },
        { check: "Cooperation with successor operator: data export, planogram handover, transition period (30 days typical)." },
        { check: "Dispute resolution venue, choice of law, and arbitration vs. court litigation specified." },
      ],
    },
  ],
  footer:
    "This 12-dimension framework is informational and not legal advice. Coordinate the final review with counsel before signing. LetUsVending can connect you with operators equipped to attest to each dimension in writing — request a side-by-side capability matrix to compare candidates.",
});

console.log("wrote " + "understanding-vending-service-contracts");
