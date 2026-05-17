import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "tax-benefits-gym-vending",
  assetType: "checklist",
  title: "Gym Vending Tax Treatment Framework",
  subtitle: "Four buckets, realistic posture, advisor review checklist, and IRS publication references",
  intro:
    "Use this checklist when evaluating the tax posture of a gym's vending program. Gym vending tax treatment depends on whether the gym owns or leases the machine, whether the machine is operator-run on commission, and how commission income is reported. Coordinate the final review with a CPA familiar with hospitality / fitness operators. Mark each item Verified with CPA, Verbally discussed, or Open issue.",
  sections: [
    {
      heading: "1. Four tax buckets for gym vending",
      paragraph:
        "Most gym vending arrangements fall into one of four buckets. Each bucket has a distinct tax profile — verify which applies before signing.",
      items: [
        { check: "Bucket A — Operator-owned, commission to gym: machine is owner-operated by a third-party vending operator; gym receives a percentage commission. Gym reports commission as ordinary income (no Section 179 / bonus depreciation on the machine, since the gym does not own it)." },
        { check: "Bucket B — Gym-owned, gym-operated: gym buys and operates the machine. Machine is depreciable equipment per IRS Publication 946 (typically 7-year MACRS class). Section 179 and bonus depreciation may apply per IRC §179 and §168(k) — phaseouts vary by year." },
        { check: "Bucket C — Gym-leased, gym-operated: gym leases the machine under a true operating lease; lease payments deductible as ordinary business expense per IRS Publication 535." },
        { check: "Bucket D — Wellness amenity (no charge to members): some gyms offer water or supplement vending complimentary to members; cost is deductible as employee-benefit / member-amenity expense rather than COGS." },
      ],
    },
    {
      heading: "2. Section 179 + bonus depreciation eligibility (Bucket B)",
      items: [
        { check: "Asset class confirmed: vending machines typically MACRS 7-year property per IRS Publication 946 Appendix B." },
        { check: "Section 179 expense election available subject to annual cap and taxable-income limit (IRC §179) — confirm current-year cap with CPA." },
        { check: "Bonus depreciation under IRC §168(k) phasing down through 2027 per the TCJA schedule — confirm current-year bonus percentage with CPA." },
        { check: "Recapture rules per IRC §1245 understood — if the machine is converted to personal use or sold within the recovery period, depreciation may be recaptured as ordinary income." },
      ],
    },
    {
      heading: "3. Sales tax, excise tax, and state-level treatment",
      items: [
        { check: "Sales tax on vending sales: most states require collection on the retail price; some states have reduced 'food and beverage from vending' rates (e.g., Virginia, Texas, several others)." },
        { check: "Bottle deposit / container redemption value (CRV) — required in 10+ states; passed through at retail and not part of revenue." },
        { check: "Sugar-sweetened beverage taxes: applicable in select municipalities (Berkeley CA, Boulder CO, Philadelphia PA, Seattle WA, etc.) — verify operator collects and remits." },
        { check: "Local business license, gross receipts tax, or city / county vending permit — varies by jurisdiction." },
      ],
    },
    {
      heading: "4. Commission income reporting (Bucket A)",
      items: [
        { check: "Commission base verified: gross sales vs. net sales (net of sales tax, processing fees, refunds, shrink)." },
        { check: "Form 1099-NEC issued by operator to gym (or gym-owned LLC) where commission ≥ $600 annually — verify per IRS instructions for Form 1099-NEC." },
        { check: "Books reconcile against operator's quarterly sales export and processor settlement reports." },
        { check: "Commission income classified as ordinary business income (Schedule C, F, or K-1 depending on entity structure)." },
      ],
    },
    {
      heading: "5. Advisor review checklist — coordinate with CPA",
      items: [
        { check: "Bucket identification confirmed in writing with CPA before signing operator contract." },
        { check: "Section 179 / §168(k) calculations run for current tax year if gym owns the machine (Bucket B)." },
        { check: "Sales tax registration confirmed in every state where the gym operates machines (Bucket B and C)." },
        { check: "Quarterly commission reconciliation (Bucket A) sample-tested by CPA in the first quarter of the contract." },
        { check: "Annual review with CPA at year-end: confirm bucket assignment is still correct, no structural changes (lease to own conversion, etc.)." },
      ],
    },
  ],
  footer:
    "This framework is informational and not tax or legal advice. Tax laws (Section 179, §168(k), state sales tax, beverage taxes) change frequently; always coordinate with a qualified CPA before relying on any tax treatment described above. References to IRS Publications 946 and 535 and to IRC sections are provided as starting points only. LetUsVending can connect you with operators familiar with gym placements — request the gym capability matrix to compare candidates.",
});

console.log("wrote " + "tax-benefits-gym-vending");
