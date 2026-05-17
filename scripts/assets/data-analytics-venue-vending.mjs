import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "data-analytics-venue-vending",
  assetType: "playbook",
  title: "Entertainment Venue Vending Data Analytics Framework",
  subtitle: "Telemetry stack RFP, BI integration, category review cadence, and event-day attribution",
  intro:
    "Entertainment venue vending differs from steady-state office vending in three ways: event-day demand spikes 5-15× baseline, planogram pivots by event type (concert vs. sport vs. family show), and venue concession partners measure category performance against ticket-attribution and per-cap revenue. This framework codifies the telemetry stack, BI integration, and category-review cadence that produce decision-grade analytics for venue operators.",
  sections: [
    {
      heading: "1. Telemetry stack RFP requirements",
      paragraph:
        "Venue vending telemetry must capture event-aware data: per-event velocity, per-section attribution, payment-channel mix, and event-type benchmarking. Standard office vending telemetry covers basic uptime but lacks event attribution.",
      items: [
        { label: "Heartbeat frequency", value: "≤ 5 minute heartbeat during events, ≤ 15 minute baseline. Sub-minute payment-transaction logging required." },
        { label: "Required telemetry providers", value: "Cantaloupe Seed Pro, Nayax VPOS Touch, USA Technologies Cantaloupe ePort Connect, 365 Retail Markets PicoStation, or AWM Smart Shelf. Each integrates with venue POS and BI through standard REST APIs or scheduled SFTP." },
        { label: "Data points required", value: "Transaction timestamp (ISO-8601 with venue timezone), machine ID, SKU, price, payment method, payment processor response, refund flag, internal temp (refrigerated units), door-open events, restock events, planogram version ID." },
        { label: "Event-aware metadata", value: "Each transaction tagged with event ID (sourced from venue ticketing system: Ticketmaster, AXS, SeatGeek, or venue-native), event type (concert/sport/family/private), event start and end times, expected attendance, weather conditions on event day." },
        { label: "Data retention", value: "Minimum 24 months online, 5 years archived. Aligns with most venue concession-contract audit-rights periods." },
      ],
    },
    {
      heading: "2. BI integration playbook",
      paragraph:
        "Vending telemetry only delivers decision value when integrated with venue POS, ticketing, and labor systems. The integration is typically through a venue-native data warehouse (Snowflake, BigQuery, Databricks) or BI tool (Tableau, Power BI, Looker).",
      items: [
        { number: 1, title: "Source-system inventory", description: "List the venue source systems the analytics framework joins: telemetry (operator), POS (Oracle Simphony, Toast, Square for Restaurants), ticketing (Ticketmaster Pro, AXS, SeatGeek Enterprise), CRM (Salesforce, KORE Sports), labor (UKG, Kronos), weather feed (NOAA or weather.com API), venue facilities (BMS / building-management)." },
        { number: 2, title: "Data-pipeline architecture", description: "Telemetry → operator data warehouse → venue warehouse via daily SFTP or hourly REST. Common pattern: operator pushes raw transaction log nightly; venue ETL job joins to event, attendance, and weather data; BI tool surfaces per-event, per-machine, per-SKU dashboards." },
        { number: 3, title: "Standard dashboards", description: "Per-machine revenue heatmap; per-event category mix vs. event-type benchmark; per-SKU velocity ranking; uptime and SLA scorecard; refund volume and trend; event-day vs. baseline comparison." },
        { number: 4, title: "Per-cap attribution", description: "Vending gross revenue divided by paid attendance for each event. Compared to concession per-cap and ticketing average revenue per attendee. Benchmark against venue-type tables published by Pollstar Pro and VenuesNow." },
      ],
    },
    {
      heading: "3. Category review cadence",
      headers: ["Cadence", "Review scope", "Owner", "Output"],
      rows: [
        ["Daily (event days)", "Stockout flags, uptime, payment-failure rate", "Operator route ops", "Restock dispatch + fix tickets"],
        ["Weekly", "Top-20 SKU velocity vs. previous week + planogram adherence", "Operator account manager", "Planogram tuning recommendations"],
        ["Monthly", "Per-machine revenue + uptime + refund rate scorecard", "Operator account manager + venue concessions director", "Performance scorecard vs. SLA"],
        ["Quarterly", "Category review by event type; planogram refresh; equipment lifecycle", "Operator + venue + planogram analyst", "Planogram update + capex plan"],
        ["Annually", "Concession agreement performance review + RFP refresh", "Operator owner + venue VP of operations", "Contract renewal terms"],
      ],
    },
    {
      heading: "4. Event-type benchmarks",
      paragraph:
        "Per-cap revenue and category mix vary dramatically by event type. The analytics framework benchmarks each event against type-specific patterns; large variances trigger root-cause analysis.",
      headers: ["Event type", "Vending per-cap range", "Top category mix", "Notable patterns"],
      rows: [
        ["Major-league sport (MLB, NBA, NHL, NFL)", "$0.30-$1.00", "Hydration 35% / snacks 25% / sweets 15%", "Per-cap rises in extreme weather; alcohol-adjacent SKUs avoided on family-section machines"],
        ["Concert (arena tour)", "$0.50-$1.50", "Hydration 45% / energy 20% / snacks 20%", "Per-cap spikes during opener and intermission; demographic skews younger"],
        ["Family show (Disney on Ice, Sesame Live)", "$0.40-$1.00", "Hydration 30% / kid-friendly snacks 35% / sweets 20%", "Higher kid-pack SKU share; lower energy-drink"],
        ["Comedy or theater", "$0.30-$0.70", "Hydration 35% / snacks 25% / candy 20%", "Lower velocity; longer intermission dwell"],
        ["Convention / trade show", "$0.20-$0.50 attendees-per-machine basis", "Hydration 40% / snacks 30% / coffee 15%", "Steady all-day; morning coffee spike"],
        ["Private event / corporate buyout", "Variable", "Often hosted; vending used as overflow", "Often complimentary by venue with sponsor"],
      ],
    },
    {
      heading: "5. Statistical models and decision support",
      items: [
        { label: "Demand forecasting", value: "Per-machine, per-event demand forecast using historical event-type baseline plus regression on attendance, weather, and pre-event ticket-sales velocity. ARIMA or Prophet model is standard; XGBoost where the venue has 2+ years of clean data. Drives restock crew sizing for each event." },
        { label: "Stockout prediction", value: "Per-SKU stockout probability calculated from baseline velocity, current stock level, and event-type forecast. Threshold > 30% probability triggers pre-event restock alert." },
        { label: "Planogram optimization", value: "Per-event category mix optimization using linear programming (Python PuLP, Gurobi). Constraint: refrigerated capacity, non-refrigerated capacity, ABC-velocity ranking. Outputs the event-day planogram for each machine." },
        { label: "A/B testing", value: "Quarterly A/B test on planogram changes. Hold-out machine retains baseline planogram while test machine runs new mix; per-cap revenue compared at the event level. Two-sided t-test on event-paired per-cap." },
      ],
    },
    {
      heading: "6. Data security and PII",
      paragraph:
        "Venue vending analytics intersect PCI DSS, state data-privacy regulations, and venue-specific contracts. The framework must hold PII out of the BI layer and keep payment data in PCI scope only inside the operator and processor systems.",
      items: [
        { check: "PCI DSS 4.0 scope confined to operator telemetry and payment processor. Venue BI receives transaction metadata only (timestamp, machine, SKU, price, anonymous transaction ID)." },
        { check: "No primary account number (PAN), expiration, CVV, or cardholder name in the venue warehouse." },
        { check: "Loyalty or member-ID joins use a hashed key shared with the venue CRM. Reversible only inside the operator and venue systems with strict access control." },
        { check: "State data-privacy compliance: California CCPA/CPRA, Virginia CDPA, Colorado CPA, Connecticut CTDPA — venue concession contract should reference the data-processing roles between venue, operator, and processor." },
        { check: "Annual SOC 2 Type II report from telemetry provider and operator data warehouse. Available to venue on request." },
      ],
    },
    {
      heading: "7. Onboarding milestones",
      items: [
        { number: 1, title: "Week 0-2 — Source-system inventory", description: "Document venue source systems, contacts, and data interfaces. Confirm event-data feed availability." },
        { number: 2, title: "Week 2-6 — Pipeline build", description: "Operator pushes nightly transaction log; venue ETL joins to event, attendance, and weather data. Standard dashboard published." },
        { number: 3, title: "Week 6-12 — Event-aware planogram", description: "First quarter of event-tagged data analyzed. Per-event-type planogram baseline published." },
        { number: 4, title: "Quarter 2 — Forecasting and A/B framework", description: "Demand-forecast model trained. First planogram A/B test launched." },
        { number: 5, title: "Quarter 4 — Quarterly business review with full year of data", description: "Year-one performance vs. SLA, per-cap vs. industry benchmark, planogram refresh roadmap, capex plan." },
      ],
    },
  ],
  footer:
    "This framework is a working analytics reference. Calibrate the data points, dashboards, and review cadence to your venue type, event mix, and concession-contract reporting requirements.",
});

console.log("wrote "+"data-analytics-venue-vending");
