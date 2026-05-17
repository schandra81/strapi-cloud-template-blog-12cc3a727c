import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "are-there-hidden-fees-in-vending-services",
  assetType: "checklist",
  title: "Vending Contract Fee Review Checklist",
  subtitle: "Commission, relocation, termination, processing, and pass-through fee audit",
  intro:
    "Use this checklist when reviewing a proposal, RFP response, or active contract. The same headline commission rate can become a very different effective rate once fees and deductions are applied. Mark each item as Disclosed in writing, Verbally discussed, or Not addressed — and require written disclosure on every fee category before signing.",
  sections: [
    {
      heading: "1. Commission and revenue base",
      items: [
        { check: "Commission base defined: gross sales or net sales (net of what — sales tax, processing fees, refunds, shrink, breakage)?" },
        { check: "Sales tax treatment: does the operator deduct collected sales tax before applying the commission rate?" },
        { check: "Cashless processing pass-through: are payment processing fees (typically 2.5-4% of cashless gross) deducted from the commission base?" },
        { check: "Refunds and chargebacks: deducted from the commission base, or absorbed by the operator?" },
        { check: "Volume tier definitions: do tiers reset monthly, quarterly, or annually, and are they per-machine or aggregate?" },
      ],
    },
    {
      heading: "2. One-time and setup fees",
      items: [
        { check: "Installation fee, delivery fee, or setup fee disclosed in writing." },
        { check: "Electrical or plumbing work cost responsibility (operator vs. host) defined; ≥ $500-$2,000 is a typical range for a dedicated 20A 120V circuit or 240V install." },
        { check: "Machine relocation fee schedule disclosed; typical range $150-$500 per machine per move." },
        { check: "Signage, decal, or co-branding setup cost disclosed." },
      ],
    },
    {
      heading: "3. Ongoing operational fees",
      items: [
        { check: "Telemetry or technology fee disclosed (sometimes passed through as a flat monthly fee, sometimes embedded in the processing rate)." },
        { check: "Software / app subscription fee for operator app or kiosk loyalty program disclosed." },
        { check: "Energy reimbursement clause: who pays for the machine's metered electricity (~$15-$30 per machine per month for refrigerated units)?" },
        { check: "Cleaning and stocking labor fees, if charged separately from commission, disclosed." },
      ],
    },
    {
      heading: "4. Termination and exit fees",
      items: [
        { check: "Early termination fee disclosed and tied to undepreciated capital investment (e.g., signing bonuses, electrical, or branding work)." },
        { check: "Machine removal fee disclosed; standard practice is operator pays for removal except in early host-initiated termination." },
        { check: "Liquidated damages clause reviewed for reasonableness — a flat 6-12 months of commission projection is the common (but contestable) market reference." },
        { check: "Restoration cost: floor patching, electrical decommissioning, signage removal — who pays?" },
      ],
    },
    {
      heading: "5. Hidden pass-through and audit-recoverable fees",
      items: [
        { check: "Commission adjustments for shrink (theft, breakage, expired stock): defined as a percentage cap, not open-ended." },
        { check: "Inventory reconciliation methodology: physical count vs. telemetry-derived; mismatch tolerance disclosed." },
        { check: "Fuel or delivery surcharge clause: tied to a published index (e.g., EIA diesel price), not a unilateral operator decision." },
        { check: "CPI escalator clause: applied to retail pricing only, not commission rate." },
        { check: "Audit rights: host may inspect operator sales records, telemetry, and processor reports with reasonable notice to verify pass-through fee calculations." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal or financial advice. Effective commission rate = headline rate × (net base / gross base) − (operational pass-throughs / gross base). Run the math on three months of representative data before signing. LetUsVending can introduce you to operators willing to disclose every fee category in writing — request a side-by-side fee schedule.",
});

console.log("wrote " + "are-there-hidden-fees-in-vending-services");
