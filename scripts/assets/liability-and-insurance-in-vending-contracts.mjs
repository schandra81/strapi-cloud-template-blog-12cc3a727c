import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "liability-and-insurance-in-vending-contracts",
  assetType: "checklist",
  title: "Vending Contract Liability + Insurance Review Checklist",
  subtitle: "Eight-component review framework, coverage benchmarks, risk-category allocation, and clause-by-clause attestation",
  intro:
    "Use this checklist before signing or renewing a vending contract. Each item maps to a specific risk category, an insurance line, or an indemnity allocation pattern. Operator should be able to attest in writing and provide certificate of insurance (COI) evidence on request. This is informational, not legal advice — coordinate the final review with your risk manager and insurance broker.",
  sections: [
    {
      heading: "1. Commercial general liability (CGL) — ISO CG 00 01 baseline",
      paragraph:
        "CGL is the foundation policy and covers third-party bodily injury, property damage, and personal/advertising injury arising from operator activities at the site. Match limits to your facility's risk profile and contractual exposure.",
      items: [
        { check: "CGL per-occurrence limit at least $1M; general aggregate at least $2M; products/completed operations aggregate at least $2M." },
        { check: "Policy form is ISO CG 00 01 (current edition) or substantially equivalent — no manuscript reductions to definitions, supplementary payments, or insuring agreements." },
        { check: "Products/completed operations coverage explicitly listed (critical for food and beverage dispensing)." },
        { check: "Contractual liability coverage not excluded; insured contract definition includes the vending services agreement." },
        { check: "Host site named as additional insured on a primary, non-contributory basis (ISO CG 20 10 + CG 20 37 endorsement combination or equivalent)." },
        { check: "Waiver of subrogation in favor of host (ISO CG 24 04 or equivalent)." },
      ],
    },
    {
      heading: "2. Product liability + food safety — FDA 21 CFR 117",
      items: [
        { check: "Products/completed operations limit at least $2M, available to cover allergen mislabeling, contamination, or product defect claims." },
        { check: "Operator attests to FDA 21 CFR 117 (Preventive Controls for Human Food) compliance for all packaged food handled in the supply chain." },
        { check: "FALCPA (Food Allergen Labeling and Consumer Protection Act) allergen disclosure verified on every SKU; gluten-free claims meet FDA 21 CFR 101.91 where applicable." },
        { check: "Cold-chain attestation: refrigerated and fresh SKUs held at ≤41°F per FDA Food Code 3-501.16; documented temperature logs available on request." },
        { check: "Recall response capability: operator can pull a SKU across the fleet within 24 hours and provide written confirmation." },
      ],
    },
    {
      heading: "3. Workers' compensation + employer's liability",
      items: [
        { check: "Workers' compensation per statutory limits in the state(s) of operation." },
        { check: "Employer's liability limits at least $1M each accident / $1M disease policy limit / $1M disease each employee." },
        { check: "Waiver of subrogation in favor of host where state law permits (WC 00 03 13 or state equivalent)." },
        { check: "Operator confirms route drivers and merchandisers are W-2 employees, or provides equivalent coverage attestation if any independent contractors are used on-site." },
      ],
    },
    {
      heading: "4. Commercial auto + cyber + umbrella",
      items: [
        { check: "Commercial auto (symbol 1 — any auto): at least $1M combined single limit; hired and non-owned auto coverage included." },
        { check: "Umbrella / excess liability: at least $5M follow-form over CGL, auto, and employer's liability (raise to $10M for airports, hospitals, and large institutional sites)." },
        { check: "Cyber liability: at least $1M for first-party + third-party exposure; required when operator handles cashless transactions, telemetry data, or PII through an app or kiosk." },
        { check: "PCI DSS attestation (current version) for the operator's payment processor relationship; SAQ type matches the integration model." },
        { check: "Crime / employee dishonesty coverage at least $250K — recommended given operator employees access cash boxes and inventory on premises." },
      ],
    },
    {
      heading: "5. Indemnity + hold-harmless allocation",
      paragraph:
        "Indemnity language should track responsibility — operator indemnifies host for operator-caused harm; host indemnifies operator for host-caused harm. Mutual, comparative-fault language is preferred over one-way carve-outs.",
      items: [
        { check: "Operator indemnifies host for bodily injury, property damage, and economic loss caused by operator's acts, omissions, products, or negligence." },
        { check: "Host's indemnity scope limited to host's negligent acts, premises conditions, and breach of host's express duties under the contract." },
        { check: "No 'sole negligence' carve-outs that require operator to indemnify host for host's own sole or gross negligence (anti-indemnity statutes apply in many states)." },
        { check: "Indemnity survives termination of the contract for the duration of any applicable statute of limitations." },
        { check: "Defense obligation explicit: operator agrees to defend host with counsel acceptable to host, not merely reimburse defense costs." },
      ],
    },
    {
      heading: "6. Risk-category allocation — who carries what",
      headers: ["Risk category", "Primary responsibility", "Backstop coverage"],
      rows: [
        ["Product defect / contamination / allergen mislabeling", "Operator (products/completed ops)", "Operator umbrella"],
        ["Slip-and-fall caused by leaking machine", "Operator CGL", "Operator umbrella"],
        ["Slip-and-fall on host floor (unrelated to machine)", "Host CGL", "Host umbrella"],
        ["Electrical fire from operator-supplied cord/plug", "Operator CGL", "Operator umbrella"],
        ["Electrical fire from host-supplied outlet/circuit", "Host CGL / property", "Host umbrella"],
        ["Theft of machine inventory by third party", "Operator crime / inventory", "Host security obligations only if specified"],
        ["Data breach via operator app/kiosk", "Operator cyber", "Operator umbrella where included"],
        ["Worker injury during route service", "Operator workers' comp", "Operator employer's liability"],
      ],
    },
    {
      heading: "7. Certificate of insurance (COI) + ongoing verification",
      items: [
        { check: "COI received before machines arrive on site; renewal COI received at least 30 days before policy expiration." },
        { check: "Host named as certificate holder; additional insured status reflected on the COI (description of operations and endorsement form numbers listed)." },
        { check: "30-day notice of cancellation, non-renewal, or material change endorsement included where state law permits." },
        { check: "Operator provides copies of additional insured and waiver of subrogation endorsements on request — COI alone is not proof of coverage." },
        { check: "Annual coverage review scheduled with broker; limits and forms re-benchmarked against any material change in machine count, site count, or product mix." },
      ],
    },
    {
      heading: "8. Termination, limitation of liability, and dispute resolution",
      items: [
        { check: "Limitation of liability caps (if any) carve out indemnity obligations, IP infringement, confidentiality breach, and willful misconduct." },
        { check: "No exclusion of consequential damages where the loss is actually reasonably foreseeable (e.g., business interruption from a recall)." },
        { check: "Dispute resolution clause specifies venue, choice of law, and whether arbitration or court litigation applies (review with counsel)." },
        { check: "Termination-for-cause triggers include loss of required insurance, COI lapse, recall obligations not met, or material breach of indemnity duties." },
        { check: "Document retention obligation: operator and host each retain contract, COI, attestations, and incident records for contract term + 5 years (or longer if applicable statute requires)." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal or insurance advice. Coverage requirements vary by jurisdiction, industry, and site type. Coordinate the final review with your risk manager, insurance broker, and counsel. LetUsVending can help you find operators equipped to meet these coverage benchmarks — we do not place insurance or provide legal advice.",
});

console.log("wrote " + "liability-and-insurance-in-vending-contracts");
