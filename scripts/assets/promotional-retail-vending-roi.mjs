import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "promotional-retail-vending-roi",
  assetType: "pack",
  title: "Promotional Vending Campaign Pack",
  subtitle: "Campaign type menu, ROI calculation framework, measurement infrastructure template, operator scorecard",
  intro:
    "Promotional vending — BOGO weeks, manufacturer-funded feature campaigns, loyalty-app overlays, sampling drops — moves a high-ROI line of merchandising if instrumented correctly. The biggest mistakes are treating campaigns as ad-hoc operator favors and not instrumenting measurement. This pack codifies the campaign type menu, ROI framework, measurement infrastructure, and operator scorecard.",
  sections: [
    {
      heading: "1. Campaign type menu",
      paragraph:
        "Five promotional patterns cover 90% of retail vending campaigns. Choose by objective + measurement maturity.",
      headers: ["Campaign type", "Mechanic", "Typical lift", "Best for"],
      rows: [
        ["BOGO / 2-for-1", "Buy one, get one free or half-price (matched SKU)", "30-80% velocity lift on featured SKU during campaign", "Clear out aging inventory; trial new SKU"],
        ["Manufacturer-funded feature", "Supplier funds price markdown + display tag for new-product launch", "40-100% lift on featured SKU; volume targets set with supplier", "New product launches; supplier-funded campaigns"],
        ["Loyalty-app overlay", "App-only discount or points-multiplier on selected SKUs", "15-30% lift on featured SKU; 5-10% lift in app-active users", "Drive loyalty program adoption; first-party data"],
        ["Sampling drop", "Free sample with any purchase, time-bound", "Trial coverage rather than sales lift", "New SKU introduction; demographic survey collection"],
        ["Cross-promotion / shop-the-store", "Vending receipt code unlocks store-side discount", "Marginal vending lift; measurable store-side traffic", "Vending-to-store traffic; loyalty wallet adoption"],
      ],
    },
    {
      heading: "2. ROI calculation framework",
      paragraph:
        "Three-tier ROI calculation — basic, supplier-funded, and full attribution.",
      items: [
        { number: 1, title: "Basic ROI — single SKU, single window", description: "Incremental units × unit margin − promotion cost. Incremental units = (campaign-window units − baseline units from prior 4 weeks). Promotion cost = price markdown × campaign units + signage + operator labor for SKU change. Run for every BOGO / markdown campaign." },
        { number: 2, title: "Supplier-funded ROI", description: "Net retailer cost may be zero or negative — supplier funds price markdown + signage. ROI computed from incremental margin minus retailer's labor + measurement cost. Run when supplier brings the budget." },
        { number: 3, title: "Full attribution — multi-channel", description: "Vending campaign lift + downstream store / app effects. Requires loyalty-program ID matching to confirm vending campaign drove store / app behavior. Most retailers run this for 1-2 flagship campaigns per year." },
      ],
    },
    {
      heading: "3. Measurement infrastructure template",
      paragraph:
        "Without measurement, a campaign is a guess. Wire the infrastructure in at the operator + retailer level.",
      items: [
        { check: "Operator's portal exposes per-SKU velocity at hourly + daily resolution." },
        { check: "Campaign window flagged in portal (start + end timestamps; price applied)." },
        { check: "Baseline window (4 weeks pre-campaign) auto-calculated for comparison." },
        { check: "Loyalty-app integration (if applicable) — campaign promo code linked to loyalty member ID." },
        { check: "Operator + retailer share a campaign tracker spreadsheet / dashboard updated daily during campaign." },
        { check: "Post-campaign report due ≤ 14 days after campaign close — auto-generated where possible." },
        { check: "Stockout flag — campaign that stocks out before window close is a missed-revenue event; document for next-campaign sizing." },
      ],
    },
    {
      heading: "4. Operator scorecard — campaign capability",
      paragraph:
        "Not all operators execute campaigns well. Score on the dimensions below before committing to a campaign-heavy program.",
      headers: ["Capability", "What to verify", "Minimum acceptable"],
      rows: [
        ["Campaign-pricing on machine", "Time-bound price tag (start + end) without manual planogram change", "Yes — telemetry-controlled or scheduled price drop"],
        ["Signage capability", "Pre-printed or digital signage produced within 2 weeks of campaign approval", "≤ 14 day signage SLA"],
        ["Velocity reporting", "Per-SKU hourly + daily velocity in portal", "Hourly resolution; ≤ 24 hr latency"],
        ["Stockout management", "Operator surges restock during campaign to maintain in-stock", "Stockout rate during campaign ≤ baseline rate"],
        ["Loyalty integration", "Campaign promo code wires to retailer's loyalty platform", "API or batch integration documented"],
        ["Post-campaign report", "Auto-generated within 14 days", "Yes"],
        ["Supplier-funded coordination", "Operator coordinates with manufacturer reps; submits funded-campaign reports per supplier requirement", "Yes"],
      ],
    },
    {
      heading: "5. Pricing + margin guardrails",
      items: [
        { check: "Price-markdown ≤ 40% of regular price (deeper markdowns rarely pay back; signal devaluation to regular shoppers)." },
        { check: "Campaign window 7-14 days (longer windows dilute lift; shorter windows risk under-trial)." },
        { check: "Minimum margin maintained on featured SKU (or supplier-funded — document funding source)." },
        { check: "Hot-SKU campaigns require operator stockout-risk SLA — if stocks-out mid-campaign, operator credits revenue gap." },
        { check: "Cross-promotion: receipt code valid for 7-30 days to capture downstream visit." },
      ],
    },
    {
      heading: "6. Campaign calendar — 12-month template",
      paragraph:
        "Anchor campaigns to seasonal demand + supplier-funded windows.",
      items: [
        { label: "January — new-year wellness", value: "Better-for-you SKU feature; loyalty-app overlay. Modest margin lift; positions wellness narrative." },
        { label: "February — Valentine's / Super Bowl", value: "Snack + treat BOGO; supplier-funded campaigns common." },
        { label: "March-April — spring refresh", value: "Planogram refresh kickoff; trial new SKUs via sampling drop." },
        { label: "May — summer prep", value: "Hydration + sports-drink feature; supplier-funded launches." },
        { label: "June-August — summer peak", value: "BOGO on slow-mover SKUs to clear inventory before fall refresh." },
        { label: "September — back-to-routine", value: "Coffee + breakfast feature; loyalty-app overlay." },
        { label: "October — fall flavor", value: "Pumpkin / cinnamon SKU launches; supplier-funded common." },
        { label: "November-December — holiday + thank-you", value: "Cross-promotion with store-side gifting; holiday SKU rotation; thank-you BOGO events." },
      ],
    },
    {
      heading: "7. RFP language — promotional program capability",
      items: [
        { check: "Operator supports time-bound price changes via telemetry without manual planogram reset." },
        { check: "Operator provides per-SKU hourly + daily velocity reporting in portal." },
        { check: "Operator commits to ≤ 14 day campaign turnaround (approval to live)." },
        { check: "Operator integrates with retailer's loyalty platform (API or batch) where applicable." },
        { check: "Operator supplies pre-printed or digital signage at standardized sizes." },
        { check: "Stockout-during-campaign SLA — operator credits revenue gap if stockout occurs before window close." },
        { check: "Post-campaign report delivered ≤ 14 days; auto-generated where possible." },
        { check: "Supplier-funded campaign coordination available where retailer has direct supplier relationships." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate operator selection on campaign capability, RFP scoring, and the ROI + measurement framework above. The operator selected via this framework executes the campaigns and reports performance; retailer's marketing + merchandising teams own campaign strategy + supplier relationships.",
    },
  ],
  footer:
    "Informational reference. Campaign lift figures are operator + supplier program averages; results vary by SKU, store, season, and competing channels.",
});

console.log("wrote "+"promotional-retail-vending-roi");
