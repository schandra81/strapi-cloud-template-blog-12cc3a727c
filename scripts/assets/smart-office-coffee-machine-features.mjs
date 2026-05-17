import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "smart-office-coffee-machine-features",
  assetType: "pack",
  title: "Smart Office Coffee Machine Pack",
  subtitle: "Six-feature framework, equipment shortlist, mobile app onboarding, network connectivity spec, and OCS integration",
  intro:
    "Smart office coffee machines are now table stakes at headcounts above 100. This pack defines the six functional features that distinguish a true connected brewer from a marketing label, gives an equipment shortlist by tier, and spells out the network, integration, and rollout decisions facilities and IT need to make jointly.",
  sections: [
    {
      heading: "1. Six-feature framework",
      paragraph:
        "Use this framework when bidding smart brewers. A brewer should hit all six dimensions; 'smart' bids that hit only 1-2 are usually pod machines with a USB stick.",
      items: [
        { label: "Telemetry + remote monitoring", value: "Cellular or Wi-Fi heartbeat ≤ 15 min. Reports per-drink counts, error codes, milk + bean levels, water filter life, temperature, pressure. OCS operator dashboards: Cantaloupe, Nayax, Crane Streamware, Franke Connect, Schaerer Coffee Link." },
        { label: "Mobile app ordering + payment", value: "Tap-to-brew from phone, drink personalization (strength, milk type, temperature), cashless wallet (Apple Pay, Google Pay, corporate badge). Integrates with member-app stack (Hangar 12, Five Star Breakroom, 365 Pay)." },
        { label: "Predictive maintenance", value: "Cycle counts + sensor trends predict brew-unit, gasket, grinder-burr replacement before failure. Reduces unplanned downtime by 40-60% in measured deployments." },
        { label: "Personalization + loyalty", value: "Saved drink preferences, wellness-app integration (steps-to-coffee), birthday or work-anniversary promos, free-drink reward tiers." },
        { label: "Telemetry-driven planogram", value: "Auto-tunes milk + bean reorder cadence based on per-drink velocity. Cuts stockouts by 30-50% vs. fixed restock." },
        { label: "Energy + sustainability reporting", value: "kWh per drink, water per drink, grounds composted, cup-diversion rate, refrigerant GWP. Feeds ESG reporting (CDP, GRI, SASB)." },
      ],
    },
    {
      heading: "2. Equipment shortlist by tier",
      headers: ["Tier", "Brewer", "Telemetry", "App", "Predictive PM"],
      rows: [
        ["Pod (entry)", "Keurig K-Supreme Plus SMART / Bunn BrewWise", "Wi-Fi heartbeat", "Limited (vendor app)", "Basic descale alerts"],
        ["Bean-to-cup (mid)", "Franke A300 + Franke Connect / Schaerer Coffee Club + Coffee Link / WMF 1100 S Connect", "Cellular + Wi-Fi", "Full mobile order / personalization", "Cycle-count predictive + remote diagnostic"],
        ["Bean-to-cup (high)", "Franke A600 / Schaerer Coffee Soul / Eversys e'2m / Cimbali S30", "Cellular + Wi-Fi + Bluetooth beacon", "Full mobile + member badge tap-to-brew", "Sensor-fusion predictive + auto-dispatch ticket"],
        ["Hospitality / barista hybrid", "La Marzocco Linea PB with KB90 + Mythos grinders + Modbar add-ons", "Cellular telemetry retrofit", "Vendor-agnostic (Square / Toast / Member POS)", "Cycle + barista-driven log"],
      ],
    },
    {
      heading: "3. Network + connectivity spec",
      paragraph:
        "Most smart-brewer rollouts stall at the network step. Pre-stage with IT before equipment lands.",
      items: [
        { label: "Cellular vs. Wi-Fi", value: "Cellular preferred (operator-owned SIM, no host network burden). Wi-Fi acceptable on guest or IoT-segmented SSID with WPA2-Enterprise. Avoid corporate-trusted SSID (certificate sprawl)." },
        { label: "Bandwidth", value: "≤ 50 MB/month per brewer typical. Spikes during firmware updates (50-200 MB)." },
        { label: "Firewall + ports", value: "Outbound HTTPS 443 to operator cloud (Franke: connect.franke.com; Schaerer: coffeelink.schaerer.com). MQTT on 8883 for some platforms. Operator supplies allowlist." },
        { label: "VLAN", value: "Dedicated IoT VLAN with no east-west traffic to corporate LAN. Internet-egress only." },
        { label: "Latency tolerance", value: "Telemetry tolerates 500 ms - 2 s. Mobile-order-to-brew should be < 3 s end-to-end." },
      ],
    },
    {
      heading: "4. Mobile app onboarding plan",
      items: [
        { number: 1, title: "Week -2: IT + facilities pre-stage", description: "VLAN + allowlist live. Brewers receive SIMs or Wi-Fi credentials. Test order-to-brew with operator on 2 devices." },
        { number: 2, title: "Week -1: Employee enrollment", description: "Email + Slack launch with QR code linking to App Store + Play Store. Pre-load corporate SSO (SAML / OIDC) for badge sign-in." },
        { number: 3, title: "Week 0: Launch day", description: "On-site barista or operator rep at peak hours (7-10 AM). Free-drink promo to drive first order. Track activation rate target ≥ 60% of headcount in 30 days." },
        { number: 4, title: "Week 4: Adoption check", description: "Pull activation, drinks-per-active-user, NPS. Re-engagement push to non-activators. Adjust planogram from velocity data." },
        { number: 5, title: "Quarterly: QBR adoption review", description: "Active users / total headcount, drinks-per-active-user, repeat rate, member-saved drinks. Plan promos + new SKUs from feedback." },
      ],
    },
    {
      heading: "5. OCS integration + interoperability",
      items: [
        { label: "Member app + POS", value: "365 Pay, Five Star Breakroom, USConnect, Hangar 12 USA Live, Cantaloupe Seed Cashless. Most integrate via REST + OAuth to operator dashboards." },
        { label: "Corporate badge", value: "HID + LEGIC + Mifare badge tap-to-brew via operator reader (Nayax Onyx, Cantaloupe ePort Engage). Single sign-on to corporate identity provider." },
        { label: "Wellness platform", value: "Virgin Pulse, Wellable, Limeade — APIs for steps-to-drink reward credit, hydration challenge integration." },
        { label: "Facilities BMS", value: "BACnet or Modbus integration for kWh + water + occupancy at premium tier. Most mid-tier brewers expose telemetry via operator cloud rather than direct BMS." },
        { label: "Data export", value: "Operator must contractually provide raw telemetry export (CSV / JSON / API) so host retains data ownership at contract termination." },
      ],
    },
    {
      heading: "6. Security + privacy",
      items: [
        { check: "Operator dashboards SOC 2 Type II attested (annual report on file)" },
        { check: "Mobile app meets OWASP MASVS Level 1 + privacy policy compliant with state laws (CCPA / CPA / VCDPA)" },
        { check: "PCI-DSS validated payment processor (Stripe / Adyen / Heartland) — operator never touches card data" },
        { check: "Brewer firmware signed + updated via secure channel; no factory-default credentials" },
        { check: "Employee personal data minimized — drink preferences + payment token only; no email beyond app login" },
        { check: "Data retention policy: 24 months for transaction data, 90 days for raw telemetry, configurable by host" },
        { check: "Annual penetration test on operator platform; results available under NDA" },
      ],
    },
    {
      heading: "7. KPI targets + measurement",
      items: [
        { label: "Activation", value: "≥ 60% of headcount activated in 30 days; ≥ 75% by month 6." },
        { label: "Drinks per active user / day", value: "1.4-2.0 in mid-tier; 2.0-2.8 in hospitality tier." },
        { label: "Mobile-order share", value: "≥ 25% of drinks within 90 days; ≥ 40% by month 12 in mature deployments." },
        { label: "Unplanned downtime", value: "≤ 1% per machine per month (predictive PM target)." },
        { label: "NPS", value: "≥ 40 within 90 days; ≥ 50 by month 12." },
      ],
    },
    {
      heading: "8. Procurement clause checklist",
      items: [
        { check: "Telemetry export rights at contract termination (raw CSV/JSON within 30 days, no fee)" },
        { check: "Firmware update SLA: critical security within 14 days, feature within 90 days" },
        { check: "Predictive-PM credit: every prevented failure (vs. baseline) credits 0.5% of monthly fee" },
        { check: "Data residency: US-only data center storage where employer mandate requires" },
        { check: "Mobile-app uptime ≥ 99.5%; outages of > 1 hour credit 1% monthly fee" },
        { check: "Integration cooperation clause: operator commits to standard REST API and OAuth for host-side integrations within 60 days" },
      ],
    },
  ],
  footer:
    "Smart-brewer programs succeed when facilities + IT + workplace-experience pre-stage together. LetUsVending helps scope, RFP, and qualify smart-equipment operators in your metro.",
});

console.log("wrote " + "smart-office-coffee-machine-features");
