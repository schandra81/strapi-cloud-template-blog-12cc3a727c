import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "common-mistakes-in-vending-franchises",
  assetType: "pack",
  title: "Vending Franchise Diligence Pack",
  subtitle: "FTC Item 19 audit template, current-franchisee call script, and attorney-review checklist",
  intro:
    "Use this pack before signing any Franchise Disclosure Document (FDD). The FTC Franchise Rule (16 CFR Part 436) requires the franchisor to deliver the FDD at least 14 calendar days before signing or paying. This pack helps you verify Item 19 financial performance representations, structure current-franchisee outreach, and build the attorney review file your counsel will request.",
  sections: [
    {
      heading: "1. FDD delivery + 14-day cooling-off verification",
      paragraph:
        "The FTC Franchise Rule mandates a minimum 14-calendar-day review window. Document delivery date in writing.",
      items: [
        { label: "FDD receipt date", value: "Record exact calendar date of FDD delivery; preserve email/courier confirmation. Earliest signing date is 14 days later." },
        { label: "State waiting period", value: "Confirm any state-specific waiting period (e.g., NY, CA, IL registration states); add to the federal floor." },
        { label: "Material change requirement", value: "If the FDD is amended materially before signing, a new 7-day waiting period applies under 436.2(a)(2)." },
      ],
    },
    {
      heading: "2. Item 19 financial performance audit",
      paragraph:
        "Item 19 is optional. When present, it must have a reasonable basis. Many franchisor disputes originate here. Verify scope, sample size, time period, and exclusions.",
      items: [
        { check: "Item 19 specifies the time period covered (most recent fiscal year vs. multi-year average)." },
        { check: "Sample size disclosed: number of franchisees included vs. total system." },
        { check: "Geographic, account-mix, or tenure exclusions explicitly disclosed." },
        { check: "Gross vs. net distinction stated; cost-of-goods, commissions, route labor accounted for." },
        { check: "Median and quartile distribution shown, not only average (averages skew up)." },
        { check: "Substantiation backup available on request per 436.5(s)(3)." },
      ],
    },
    {
      heading: "3. Current-franchisee call script",
      paragraph:
        "Item 20 lists current and former franchisees with contact information. Speak to at least 8-10 current operators across 3+ regions and at least 3 former operators.",
      items: [
        { number: 1, title: "Tenure + region", description: "How long have you operated? What region? Do you operate single-unit or multi-unit?" },
        { number: 2, title: "Revenue vs. Item 19 disclosure", description: "Without disclosing exact numbers, did your year-1, year-2, and year-3 revenue track the FDD Item 19 range? What percentage of franchisees you know hit those numbers?" },
        { number: 3, title: "Hidden costs", description: "What costs surprised you in year 1 that were not clearly disclosed in Items 5, 6, or 7? (Common: tech fee escalators, mandatory remodels, required supplier markups.)" },
        { number: 4, title: "Franchisor support", description: "Rate field support, marketing, and tech support 1-10. Specific examples of help received in the last 12 months?" },
        { number: 5, title: "Disputes + transfers", description: "Any disputes with the franchisor? How were they resolved? Any restrictions on transfer or exit that surprised you?" },
        { number: 6, title: "Would-you-do-it-again", description: "Knowing what you know now, would you sign again? Why or why not?" },
      ],
    },
    {
      heading: "4. Attorney review checklist",
      paragraph:
        "Engage a franchise-specialist attorney (not general business counsel) before signing. Provide them the full FDD plus this checklist.",
      items: [
        { check: "Item 5 initial fees: refundability terms, what happens if territory not delivered." },
        { check: "Item 6 ongoing fees: royalty escalators, tech fee floor, mandatory marketing contribution." },
        { check: "Item 7 estimated initial investment: are 'additional funds' adequate for 90-day operating runway." },
        { check: "Item 8 restrictions on sources of products: required supplier markups, deviation policy." },
        { check: "Item 12 territory: protected vs. non-protected, encroachment carve-outs, online sales rights." },
        { check: "Item 17 renewal, termination, transfer: post-term non-compete scope, transfer fees, right-of-first-refusal trigger." },
        { check: "Item 21 audited financial statements: balance-sheet health, debt-service coverage, going-concern opinion." },
      ],
    },
    {
      heading: "5. Territory + encroachment red flags",
      items: [
        { check: "Territory defined by named accounts, geography, or population? Named-account territories are the strongest." },
        { check: "Reserved-account carve-outs: does the franchisor reserve national accounts, military, federal, or institutional channels?" },
        { check: "Alternative-channel reservation: does the franchisor reserve micro-markets, smart-fridge, or online-order channels inside your territory?" },
        { check: "Encroachment dispute procedure: arbitration vs. court, venue, fee-shifting." },
      ],
    },
    {
      heading: "6. Tech + supply lock-in audit",
      items: [
        { label: "Telemetry platform", value: "Mandated platform (Cantaloupe, Nayax, 365, etc.) vs. open choice. Required platform + monthly per-machine fee schedule + termination data-export rights." },
        { label: "Payment processor", value: "Mandated processor with markup vs. open choice. Calculate effective rate vs. independent EMV-certified processors." },
        { label: "Product supply", value: "Mandatory distributor (with markup) vs. recommended distributor. Compare per-case pricing to independent wholesale." },
        { label: "Machine purchase", value: "OEM source mandated? Compare to independent dealers; quantify markup over 5-year horizon." },
      ],
    },
    {
      heading: "7. Exit + transfer red flags",
      items: [
        { check: "Transfer fee: typically 5,000-25,000 dollars. Disclosed up front." },
        { check: "Buyer-approval criteria: are they objective or franchisor-discretionary." },
        { check: "Right-of-first-refusal: scope, timing, valuation method." },
        { check: "Post-term non-compete: scope (radius), duration (commonly 2 years), business definition. Some state courts (e.g., CA) limit enforceability." },
        { check: "De-identification cost: signage removal, route-customer handoff cost, equipment buyback at depreciated vs. market value." },
      ],
    },
    {
      heading: "8. Pre-signing red-flag summary",
      items: [
        { check: "Litigation in Item 3 — count + nature (franchisee-initiated vs. franchisor-initiated)." },
        { check: "Bankruptcy disclosure in Item 4 (franchisor or principals within last 10 years)." },
        { check: "High franchisee turnover in Item 20 (transfers, terminations, non-renewals over last 3 years)." },
        { check: "Item 19 omitted entirely — franchisor unwilling to disclose unit economics." },
        { check: "Pressure to sign before 14-day window — automatic disqualifier." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal or financial advice. Engage a franchise-specialist attorney and a CPA before signing. LetUsVending can describe operator alternatives to franchise ownership for your placement, but does not endorse or sell any franchise.",
});

console.log("wrote "+"common-mistakes-in-vending-franchises");
