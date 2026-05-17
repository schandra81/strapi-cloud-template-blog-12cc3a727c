import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-vending-solutions-from-management-companies",
  assetType: "pack",
  title: "Custom Vending RFP Pack",
  subtitle: "5-dimension customization spec, operator scoring matrix, and contract addendum",
  intro:
    "Use this pack when the standard VMS placement doesn't fit — branded wraps, custom planograms, integrated identity, alternative form factors, or member-app experience. The pack codifies a 5-dimension customization spec, an RFP scoring matrix, and the contract addendum language that protects the host's customization investment.",
  sections: [
    {
      heading: "1. The 5 customization dimensions",
      paragraph:
        "Most 'custom vending' requests reduce to one or more of these five dimensions. Specifying which dimensions matter — and which don't — saves 30-60 days in RFP cycle time.",
      items: [
        { label: "Dimension 1 — Hardware form factor", value: "Standard glass-front vs. micro-market vs. smart-cooler vs. locker-pickup vs. branded enclosure / wrap. Includes physical footprint, power draw, network, and ADA reach-range constraints (Section 308)." },
        { label: "Dimension 2 — Planogram + SKU", value: "Open product set, branded-product carve-outs, healthy-share floor (NANA 200/35/230 thresholds), allergen labeling per FALCPA, local-source sourcing requirements." },
        { label: "Dimension 3 — Identity + payment rails", value: "Closed-loop badge/SSO integration, payroll deduct, subsidized pricing tiers, tier-based pricing for member loyalty programs, EMV + contactless + wallet rails." },
        { label: "Dimension 4 — Branding + member experience", value: "Vinyl wrap, screen branding, app branding, on-machine signage, recommendation prompts, member dashboard, in-app survey + feedback loop." },
        { label: "Dimension 5 — Data + analytics", value: "Per-SKU velocity, per-segment heatmap, A/B test framework, KPI dashboard, integration to host BI (Tableau, Power BI, Looker), data-retention + access terms." },
      ],
    },
    {
      heading: "2. Customization scoping worksheet",
      paragraph:
        "For each dimension, document the desired state, the constraint that drives it, and the success criterion. This becomes Schedule A of the contract addendum.",
      headers: ["Dimension", "Desired state", "Driving constraint", "Success criterion"],
      rows: [
        ["Hardware", "Smart cooler, 60 in W, branded wrap, 2 power circuits", "Lobby aesthetic + power available", "Installed within 14 days of permit; wrap matches PMS spec"],
        ["Planogram", "60% healthy share, no top-50 SSB brands, local snack vendor included", "Wellness committee mandate", "Quarterly velocity review confirms healthy-share + local SKU sustained"],
        ["Identity", "Badge tap (HID iCLASS), payroll deduct, tier-based pricing for L1/L2/L3 employees", "HR/IT mandate", "End-to-end transaction in under 6 seconds; settlement to AP monthly"],
        ["Branding", "Vinyl wrap matching brand book; app co-brand; 'company-favorites' recommendation rail", "Marketing mandate", "Visual QA pass at install; co-brand approval flow documented"],
        ["Data", "Per-SKU velocity, per-floor heatmap, weekly export to host BI via SFTP", "Wellness + finance reporting", "Weekly file delivery by 09:00 Monday; schema published"],
      ],
    },
    {
      heading: "3. Operator-capability questionnaire",
      items: [
        { number: 1, title: "Hardware portfolio", description: "Which OEMs do you stock? Do you maintain inventory of smart coolers + micro-market kiosks + locker systems, or do you order on demand? Lead time at signing?" },
        { number: 2, title: "Wrap + branding workflow", description: "In-house print + install or third-party? Wrap-design approval cycle (rounds, days)? Damage-replacement policy?" },
        { number: 3, title: "Identity-system integrations", description: "Confirmed integrations to Okta, Azure AD, campus SSO, HID, Lenel, badge providers? Reference accounts using each?" },
        { number: 4, title: "Closed-loop + subsidy", description: "Tier-based pricing engine — operator-native vs. via partner? Settlement cadence to host AP? SOC 2 Type II for the settlement environment?" },
        { number: 5, title: "Data + analytics", description: "Native dashboard, scheduled export, or API? Schema documentation? Data-retention period? Per-member vs. aggregate access?" },
        { number: 6, title: "Pilot capability", description: "Can you run a 90-day pilot with measurable KPIs before full deployment? What's the cost structure?" },
      ],
    },
    {
      heading: "4. RFP scoring matrix (100 points)",
      headers: ["Dimension", "Points", "Scoring sub-criteria"],
      rows: [
        ["Hardware fit", "15", "Form factor in inventory (5), lead time (5), ADA + power compliance (5)"],
        ["Planogram capability", "15", "Healthy-share floor (5), allergen labeling (5), local-sourcing accommodation (5)"],
        ["Identity + payment", "20", "Closed-loop integration (10), tier-based pricing (5), settlement + SOC 2 (5)"],
        ["Branding + member exp", "15", "Wrap workflow (5), app branding (5), recommendation framework (5)"],
        ["Data + analytics", "15", "Schema published (5), export cadence (5), data-retention terms (5)"],
        ["Track record", "10", "3+ comparable references (5), case studies (5)"],
        ["Pilot capability", "10", "Pilot proposed with KPIs (10)"],
      ],
    },
    {
      heading: "5. Pilot KPI framework",
      items: [
        { label: "Activation rate", value: "% of eligible members who complete first transaction in 30 days. Target: 60%+ at office; 40%+ at residential." },
        { label: "Repeat rate", value: "% of activated members with 2nd transaction in 30 days. Target: 70%+." },
        { label: "Velocity per slot", value: "Transactions per slot per day vs. baseline machine. Target: parity or better within 60 days." },
        { label: "Healthy-share consumption", value: "% of transactions on healthy-flagged SKUs. Track against planogram allocation." },
        { label: "NPS + feedback", value: "In-app survey at 30/60/90 days. NPS target +30 minimum." },
      ],
    },
    {
      heading: "6. Contract addendum language (Schedule A)",
      items: [
        { check: "Schedule A enumerates each of the 5 dimensions with desired state, constraint, success criterion (per the worksheet)." },
        { check: "Operator responsibilities itemized per dimension (hardware delivery + install, wrap design + production + install, integration build + test, planogram launch + maintenance, data feed delivery)." },
        { check: "Host responsibilities itemized (IT/identity coordination, brand asset delivery, comms + change management)." },
        { check: "Pilot acceptance criteria (KPIs above) and remedies if criteria not met (re-pilot at operator cost, scope reduction, exit at no penalty)." },
        { check: "Customization cost amortization — wrap/integration cost amortized over initial term; early-exit recapture defined." },
        { check: "Data ownership — host owns transactional data; operator licensed for service + de-identified benchmarking only." },
        { check: "IP — branding assets remain host property; operator returns or destroys on termination." },
      ],
    },
    {
      heading: "7. Commercial structures for custom programs",
      headers: ["Structure", "Best fit", "Notes"],
      rows: [
        ["Operator-funded (CapEx amortized in margin)", "Recurring high-volume sites, multi-year term", "Lower headline cost; longer term lock"],
        ["Host-funded (CapEx + operator runs)", "One-off lobby / branded program", "Higher upfront; flexibility on operator switch"],
        ["Hybrid (host funds wrap + integration; operator funds hardware)", "Most custom programs", "Aligns incentives; clear ownership"],
        ["Subsidized service-fee", "Sub-100-employee sites with custom branding", "Predictable cost; not volume-dependent"],
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Operator commits to all 5 dimensions but provides no comparable references." },
        { check: "Pilot proposed with no acceptance criteria — soft launch with no exit." },
        { check: "Customization cost amortized over a longer term than the initial term, locking the host." },
        { check: "Data terms grant operator perpetual rights to member-level transaction data." },
        { check: "Integration scope underdocumented — operator promises 'standard SSO' without naming IdPs + reference accounts." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal or procurement advice. Contract terms should be reviewed by your counsel and IT/security team where identity integration is in scope.",
});

console.log("wrote "+"custom-vending-solutions-from-management-companies");
