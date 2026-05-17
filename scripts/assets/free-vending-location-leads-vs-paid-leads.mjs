import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "free-vending-location-leads-vs-paid-leads",
  assetType: "checklist",
  title: "Vending Location Lead Channel Framework",
  subtitle: "Free vs paid CRM funnel design + FTC disclosure + 12-month retention tracking",
  intro:
    "Vending route operators frequently spend $1,500-$8,000/year on paid location leads (CMS / lead-broker subscriptions) without measuring conversion or 12-month retention. This framework compares free vs paid lead channels, gives a CRM funnel design any operator can adopt in HubSpot Free / Pipedrive / Zoho / spreadsheet, and lists FTC Endorsement Guides + business-opportunity rule disclosures that paid lead vendors must satisfy (16 CFR Part 437).",
  sections: [
    {
      heading: "1. Lead channel comparison",
      headers: ["Channel", "Typical cost", "Lead quality signal", "Best for"],
      rows: [
        ["Cold canvassing (walk-in)", "$0 hard cost; 4-8 hr/wk labor", "Direct decision-maker access; site verified in person", "Local route, low-population placements"],
        ["LinkedIn outbound (free)", "$0; 2-4 hr/wk", "Verified title + company; warm if connection-pathway", "Mid-market office, healthcare, schools"],
        ["Google Local + Maps listing", "$0; setup once", "Inbound; warm; decision-maker self-identifies", "All segments; foundational"],
        ["Operator network referrals (NAMA, regional)", "$0-$500/yr membership", "High; pre-qualified by referring operator", "Multi-state expansion, complex placements"],
        ["Paid lead broker (subscription)", "$1,500-$8,000/yr", "Variable; verify FTC + business-opportunity rule disclosures", "Operators with sales capacity to work volume"],
        ["Paid lead broker (pay-per-lead)", "$25-$150/lead", "Higher than subscription if vendor disqualifies non-fits", "Targeted segment expansion"],
        ["Lead-gen marketplace (LetUsVending, etc.)", "Varies; per-placement or subscription", "Placement-matched; capacity-verified", "Operators with route geometry for the segment"],
      ],
    },
    {
      heading: "2. FTC + business-opportunity rule due diligence",
      paragraph:
        "Paid lead vendors making earnings claims, retention claims, or selling exclusive territories may be subject to FTC Endorsement Guides (16 CFR Part 255) and the Business Opportunity Rule (16 CFR Part 437). Verify before signing.",
      items: [
        { check: "Vendor provides a written Disclosure Document (16 CFR 437.3) where the offer includes earnings claims, exclusive territory, or buy-back guarantee." },
        { check: "Earnings claims documented with a written Earnings Claim Statement (16 CFR 437.4) — substantiation available on request." },
        { check: "Endorser / testimonial disclosures comply with 16 CFR Part 255 — material connection disclosed; \"typical\" vs \"atypical\" results disclosed." },
        { check: "Refund + cancellation terms in writing; cooling-off period if applicable under state business-opportunity statute." },
        { check: "Better Business Bureau record + state AG complaints history reviewed." },
      ],
    },
    {
      heading: "3. CRM funnel design (free-tier compatible)",
      paragraph:
        "Build the same five-stage funnel whether using HubSpot Free, Pipedrive, Zoho CRM Free, Folk, or a Google Sheet. Stages should map to a decision the prospect made — not to an internal task.",
      items: [
        { number: 1, title: "Stage 1 — Identified", description: "Lead has name, company, address, phone OR email. Source tagged (channel from §1). Cost-of-acquisition logged." },
        { number: 2, title: "Stage 2 — Contacted", description: "Outbound attempt logged (call, email, walk-in, LinkedIn). Response or no-response recorded with timestamp." },
        { number: 3, title: "Stage 3 — Qualified", description: "Decision-maker confirmed. ADP captured. Site survey scheduled. Deal-breaker checklist (§3 below) reviewed." },
        { number: 4, title: "Stage 4 — Proposed", description: "Written proposal sent with commission tier, planogram, install scope, term, SLA. Date sent + version tracked." },
        { number: 5, title: "Stage 5 — Installed", description: "Contract signed. Install date set. 30/60/90 day audit calendared. 12-month retention tracked from install date." },
      ],
    },
    {
      heading: "4. Channel ROI tracking — minimum data per lead",
      items: [
        { check: "Source channel (one of the rows in §1)." },
        { check: "Cost-of-acquisition (CoA) attributed: subscription cost / leads received OR pay-per-lead unit cost OR canvassing hours × loaded labor rate." },
        { check: "Days to first contact, days to qualified, days to install." },
        { check: "Install date + projected gross + actual gross at month 6 and month 12." },
        { check: "12-month retention (installed and still operating at +365 days)." },
        { check: "Lifetime value = sum of monthly gross × commission rate over contract term." },
        { check: "Channel ROI = (LTV - CoA - install cost - service cost) / CoA, computed per channel per quarter." },
      ],
    },
    {
      heading: "5. Free-channel productivity benchmarks",
      headers: ["Channel", "Activity / week", "Typical conversion", "12-month retention"],
      rows: [
        ["Cold canvass", "30-50 doors", "1-3 installs / 100 doors", "75-85%"],
        ["LinkedIn outbound", "50-100 messages", "2-5 installs / 200 messages", "80-90%"],
        ["Google Local inbound", "Setup once; 1 hr/wk maintenance", "Variable; 1-4 installs/month at maturity", "85-92%"],
        ["Operator referrals", "Network maintenance; 2-3 hr/wk", "70-85% of referrals install", "88-95%"],
      ],
    },
    {
      heading: "6. Paid-channel red flags",
      items: [
        { check: "\"Guaranteed installs\" without buy-back disclosure — likely Business Opportunity Rule violation if material." },
        { check: "Exclusive-territory pricing without territory map + competitor-buyer disclosure." },
        { check: "Testimonials without typicality disclaimer per 16 CFR 255.2." },
        { check: "No refund / cancellation in writing." },
        { check: "Earnings claims without Earnings Claim Statement (16 CFR 437.4)." },
        { check: "Lead deduplication policy unclear (multiple operators bidding same lead)." },
        { check: "Lead age / freshness undisclosed (40-day-old leads convert at < 30% of fresh-lead conversion)." },
      ],
    },
    {
      heading: "7. Quarterly channel review",
      items: [
        { check: "Compute ROI per channel using §4 data." },
        { check: "Drop channels with negative ROI over two consecutive quarters." },
        { check: "Reinvest 30-50% of channel-ROI surplus into the top two channels." },
        { check: "Refresh CRM stages + tags + dashboards." },
        { check: "Annual: compare 12-month retention by channel; reweight portfolio toward high-retention channels." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or financial advice. Verify FTC Endorsement Guides + Business Opportunity Rule applicability with counsel before signing paid lead contracts with earnings claims. LetUsVending is equipped to match operators to verified, capacity-aligned placements.",
});

console.log("wrote "+"free-vending-location-leads-vs-paid-leads");
