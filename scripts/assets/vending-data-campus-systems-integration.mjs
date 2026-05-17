import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-data-campus-systems-integration",
  assetType: "pack",
  title: "Campus Vending Data Integration Pack",
  subtitle: "Architecture diagram, system-by-system integration spec, FERPA + IRB framework, BI dashboard templates, operator data API spec",
  intro:
    "Campus AI cooler programs emit transaction, telemetry, and (where SDK-integrated) campus-card data. This pack bundles the integration architecture, system-by-system spec, FERPA + IRB framework, BI dashboard templates, and operator data API expectations a campus IT + auxiliary services + institutional research team needs.",
  sections: [
    {
      heading: "1. Integration architecture (text diagram)",
      paragraph:
        "Data flows in 4 layers: cooler edge → operator cloud → campus integration tier → campus consumers (BI, finance, dietitian, research). Each layer has a clear boundary + governance owner.",
      items: [
        { label: "Layer 1 — cooler edge", value: "Vision system, payment terminal, sensors, telemetry agent. Emits: anonymized transaction events, telemetry pings, sensor alerts. PCI tokenized at terminal; no PAN leaves cooler." },
        { label: "Layer 2 — operator cloud", value: "Operator's SaaS platform: aggregates events, computes velocity + uptime, runs vision model, manages refund flow. Hosted in operator AWS/Azure with SOC 2 Type II posture." },
        { label: "Layer 3 — campus integration tier", value: "Campus integration hub (Mulesoft, Boomi, custom .NET, or campus enterprise API gateway). Receives operator webhook + REST pulls; transforms; routes to campus consumers. Owned by Campus IT." },
        { label: "Layer 4a — finance + ERP", value: "Auxiliary services GL mapping; commission reconciliation; tax + sales tax remittance. Workday Financials, Banner, PeopleSoft, or comparable." },
        { label: "Layer 4b — BI + analytics", value: "Tableau, Power BI, Looker dashboards for auxiliary services + dietitian + sustainability + IR. Anonymized + aggregated only unless FERPA DPA + IRB approves identifiable use." },
        { label: "Layer 4c — campus card platform", value: "Bi-directional SDK with Atrium / Blackboard / CBORD / TouchNet for tender posting + balance check." },
        { label: "Layer 4d — research data store", value: "De-identified longitudinal data store for IRB-approved nutrition / food-security / behavior research." },
      ],
    },
    {
      heading: "2. System-by-system integration spec",
      paragraph:
        "Use the spec below for each campus system the cooler program touches. Confirm operator attestation + integration test results.",
      items: [
        { label: "Campus card platform (one-card)", value: "SDK / direct API certified by Atrium/Blackboard/CBORD/TouchNet; tender mapping; daily settlement file; FERPA DPA; SOC 2 in good standing." },
        { label: "Identity provider (IdP)", value: "Operator admin portal SSO via Okta/Azure AD/Shibboleth; SCIM for user provisioning; MFA enforced; SAML 2.0 or OIDC." },
        { label: "Campus network", value: "Cooler fleet on segmented VLAN; egress whitelist to operator + payment processor; ingress for telemetry only; no lateral path to admin networks." },
        { label: "ERP / finance", value: "Monthly commission file (CSV or API) mapped to GL codes; sales tax remittance per state code; quarterly true-up." },
        { label: "Dietary / dining services system", value: "Optional: dietitian audit export from operator (HHS-aligned SKU list, packaging, sourcing) to dining services planogram management." },
        { label: "BI + reporting", value: "Operator data warehouse export (S3, BigQuery, Snowflake, REST API) to campus BI; cadence daily; data dictionary versioned." },
        { label: "Sustainability + STARS", value: "Quarterly sustainability metrics report (local share, plant-forward, packaging, ENERGY STAR, workforce) to sustainability coordinator." },
        { label: "IRB / research", value: "De-identified data store with IRB-approved access tier; longitudinal panel for food-security or behavior research; data-use agreement per research project." },
      ],
    },
    {
      heading: "3. FERPA + IRB framework",
      paragraph:
        "Cooler programs collect transaction data tied to campus card tender = student-ID-linked data. FERPA + (in some cases) GLBA + IRB apply.",
      items: [
        { check: "Operator-signed FERPA DPA covering any student-ID data that traverses operator systems via campus card SDK" },
        { check: "GLBA acknowledgment if cooler tender includes financial-aid balance or refund-disbursement integration" },
        { check: "Data minimization: only required fields traverse operator; no birthdate, SSN, home address, or grade fields" },
        { check: "Retention: identifiable data ≤ 90 days at operator; aggregated/anonymized longer with privacy-office sign-off" },
        { check: "Re-identification ban: no joining cooler transaction data with academic or financial-aid records without IRB approval" },
        { check: "Research use: separate IRB protocol required for any use beyond operations; consent + de-identification plan included" },
        { check: "Disclosure log: any non-routine disclosure logged; FERPA-compliant audit trail" },
        { check: "Annual privacy-office review of data flows + DPA scope" },
      ],
    },
    {
      heading: "4. BI dashboard templates",
      paragraph:
        "Build the dashboards below in Tableau / Power BI / Looker; cadence daily or weekly. Each dashboard has a defined consumer + use case.",
      items: [
        { label: "Operations dashboard (auxiliary services)", value: "Per-cooler uptime, daily/weekly transactions, basket size trend, refund rate, top-15/bottom-15 SKUs, service ticket queue. Daily refresh." },
        { label: "Dietitian dashboard", value: "HHS-aligned share %, sugar-sweetened beverage share, allergen labeling completeness, dietary-attestation accuracy, planogram refresh suggestions. Weekly refresh." },
        { label: "Sustainability dashboard", value: "Local + regional share, plant-forward share, packaging-recyclability share, ENERGY STAR equipment %, kWh per cooler. Quarterly refresh." },
        { label: "Finance dashboard", value: "Commission revenue YTD vs target, per-placement revenue trend, sales-tax remittance, refund + service-credit impact. Monthly refresh." },
        { label: "Security + access dashboard", value: "Cooler offline incidents, tilt/door alerts, refund anomaly, vision-system drift, refund rate by cooler. Daily refresh." },
        { label: "Student wellness + experience dashboard", value: "Survey-measured satisfaction, complaint volume, accessibility-accommodation requests. Quarterly refresh." },
        { label: "Research / IR dashboard (de-identified)", value: "Aggregated longitudinal trends (consumption mix, healthy-share trend, late-night transaction pattern). IRB-approved use only." },
      ],
    },
    {
      heading: "5. Operator data API spec",
      paragraph:
        "Operator should expose the API spec below to campus IT for integration. Confirm endpoints, authentication, rate limits, and data dictionary.",
      items: [
        { label: "Authentication", value: "OAuth 2.0 client credentials; tokens scoped per consumer; MFA on operator portal for human admin." },
        { label: "Transaction events", value: "Webhook POST per transaction (timestamp, cooler ID, anonymized session ID, SKU, qty, price, tender type, refund flag). REST GET supports backfill." },
        { label: "Telemetry events", value: "REST GET for hourly aggregates: uptime, temperature (refrigerated), door-open count, anomaly flags. Webhook for real-time alerts." },
        { label: "Planogram + catalog", value: "REST GET for current SKU catalog per cooler: SKU, name, allergens, dietary attestation, HHS-aligned flag, sourcing flags." },
        { label: "Refund + dispute", value: "REST POST + GET for refund flow; status webhook for credit-back confirmation." },
        { label: "Commission + finance", value: "Monthly CSV or REST GET for commission report; per-placement, per-SKU, per-tender breakdown." },
        { label: "Sustainability metrics", value: "Quarterly REST GET for STARS-aligned metrics export." },
        { label: "Rate limits + retries", value: "100 req/sec sustained, 1000 req/sec burst; exponential backoff guidance; idempotency keys on POSTs." },
      ],
    },
    {
      heading: "6. Data classification + governance",
      headers: ["Data class", "Examples", "Access controls", "Retention"],
      rows: [
        ["Public", "Cooler ID, location, equipment type", "Open to campus + public docs", "Indefinite"],
        ["Internal", "Transaction count, basket size, uptime", "Auxiliary services + ops staff", "7 years (records retention)"],
        ["Confidential — operational", "Per-SKU velocity, refund detail, vision-drift", "Auxiliary services + operator + dietitian", "5 years"],
        ["FERPA-protected", "Campus-card-tender events tied to student ID", "Privacy office + auxiliary services with DPA", "≤ 90 days identifiable, then de-identified"],
        ["PCI in scope", "PAN; cardholder data", "Never enters campus systems; operator-only", "Per PCI-DSS 4.0"],
        ["Research-tier (de-identified)", "Aggregated longitudinal panels", "IRB-approved researchers", "Per IRB protocol"],
      ],
    },
    {
      heading: "7. Implementation phases",
      items: [
        { number: 1, title: "Phase 0 — discovery + DPA", description: "Privacy office signs FERPA DPA; IT confirms identity + network architecture; finance confirms GL mapping; sustainability confirms STARS scope." },
        { number: 2, title: "Phase 1 — operator integration", description: "Operator webhook + REST endpoints configured; campus integration tier built; test in dev environment; sample data exchange." },
        { number: 3, title: "Phase 2 — campus card + finance", description: "Campus card SDK certified; finance commission file in production; reconciliation workflow live." },
        { number: 4, title: "Phase 3 — BI dashboards", description: "Operations + dietitian + sustainability + finance dashboards built; user access provisioned via IdP; access tier mapped to data class." },
        { number: 5, title: "Phase 4 — research tier", description: "De-identified data store stood up; IRB protocols established; first research project access tier provisioned." },
        { number: 6, title: "Phase 5 — optimization", description: "Predictive restock model, dynamic planogram, sponsor reporting; quarterly review of integration scope + new use cases." },
      ],
    },
    {
      heading: "8. Quarterly + annual review checklist",
      items: [
        { check: "Quarterly: data-flow + DPA review with privacy office" },
        { check: "Quarterly: BI dashboard usage + access audit" },
        { check: "Quarterly: API uptime + rate-limit incidents" },
        { check: "Annually: SOC 2 + PCI + FERPA DPA refresh" },
        { check: "Annually: data classification + retention schedule review" },
        { check: "Annually: IRB-approved research access tier review" },
        { check: "Annually: integration scope amendment if new systems added" },
      ],
    },
  ],
  footer:
    "This pack is informational. Campus IT + privacy office + auxiliary services + IR + finance + sustainability office should jointly review operator API spec + DPA + integration architecture before contract execution. Data flows that involve student-ID-tied data require FERPA DPA + GLBA-aware design + (where research applies) IRB approval.",
});

console.log("wrote " + "vending-data-campus-systems-integration");
