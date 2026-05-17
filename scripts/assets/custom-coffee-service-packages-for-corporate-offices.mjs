import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "custom-coffee-service-packages-for-corporate-offices",
  assetType: "pack",
  title: "Custom Office Coffee Service (OCS) Package Pack",
  subtitle: "Seven-dimension framework, matrix-mapped bundles, equipment specs, and reference-check guidance",
  intro:
    "This pack helps procurement, facilities, and workplace-experience teams scope a custom OCS program rather than accept a vendor's off-the-shelf bundle. It covers the seven decision dimensions, three reference bundle archetypes, equipment shortlists by tier, KPI targets, and the questions to ask an operator's existing references before signing.",
  sections: [
    {
      heading: "1. Seven-dimension OCS scoping framework",
      paragraph:
        "Most OCS bids fail because the host scopes on price alone. The seven dimensions below let two operators bid on a like-for-like scope.",
      items: [
        { label: "Headcount + density", value: "Daily on-site headcount, peak occupancy, machines per 100 employees (target: 1 brewer per 50-75 employees for bean-to-cup; 1 per 25-35 for single-cup). Dwell time per drink (45-90 seconds for bean-to-cup at peak)." },
        { label: "Drink profile", value: "Mix of brewed coffee, espresso-based drinks, cold brew, tea, hot chocolate, flavored milks. Hybrid sites typically target 60% bean-to-cup espresso menu / 30% drip / 10% specialty." },
        { label: "Equipment tier", value: "Pour-over + airpot (entry), single-cup pod (transitional), bean-to-cup superautomatic (mid), full barista-style (premium). See section 4." },
        { label: "Service model", value: "Full-service (operator restocks + maintains + cleans), micro-market hybrid, self-managed (host buys product, operator maintains). Full-service is standard above 75 employees." },
        { label: "Subsidy structure", value: "Free-vend (host pays 100%), subsidized (host covers 50-100% of base SKUs), pay-per-cup (employees pay $0.50-$1.50). Free-vend is the dominant model for high-retention employers." },
        { label: "Sustainability + sourcing", value: "Fair Trade, Rainforest Alliance, Organic, Specialty Coffee Association (SCA) grade ≥ 80 cupping score, compostable cups, Smart-Way-certified freight, low-GWP refrigerants on cold equipment." },
        { label: "Telemetry + reporting", value: "Cellular telemetry on every brewer (heartbeat, drinks/day, water/grounds flow). Monthly utilization report, quarterly business review (QBR), satisfaction-survey embed (NPS or 5-point smile-rating)." },
      ],
    },
    {
      heading: "2. Reference bundle archetypes",
      paragraph:
        "Three archetypes map the seven dimensions to a like-for-like scope. Operators bid against the chosen archetype with line-item adjustments.",
      headers: ["Archetype", "Headcount", "Equipment", "Service", "Typical $/employee/month"],
      rows: [
        ["Essentials", "25-100", "1 bean-to-cup superautomatic + 1 pod backup + airpot drip + filtered water tower", "2× restock/week + monthly PM + 24-hr service SLA", "$18-32"],
        ["Hybrid Cafe", "100-400", "2-3 bean-to-cup units + cold-brew tap + tea station + RO-filtered water + airpot overflow", "3× restock/week + biweekly PM + 8-hr service SLA + quarterly cupping refresh", "$28-48"],
        ["Premium Hospitality", "400+", "Full bean-to-cup line + manual espresso bar + nitro cold brew + drip pour-over + barista-staffed peak hours", "Daily restock + weekly PM + 4-hr service SLA + on-site barista 2-4 hr/day at peak", "$45-85"],
      ],
    },
    {
      heading: "3. Bean + sourcing specification",
      items: [
        { label: "Grade", value: "Specialty grade per SCA (≥ 80 cupping score). Reject below 78. Operator submits Q-grader scoresheet per origin." },
        { label: "Origin transparency", value: "Single-origin or named-region blends. Lot ID + harvest year traceable to producer co-op or estate." },
        { label: "Roast date freshness", value: "Beans delivered within 21 days of roast. Site rotation FIFO with 60-day max bean shelf life." },
        { label: "Certification stack", value: "Fair Trade USA or Fair Trade International, Rainforest Alliance, USDA Organic where employer ESG mandate applies. Bird Friendly (Smithsonian) is a niche premium tier." },
        { label: "Decaf option", value: "Swiss Water Process or CO2-decaffeinated (chemical-free). Standard offering, not premium upcharge." },
      ],
    },
    {
      heading: "4. Equipment shortlist by tier",
      headers: ["Tier", "Brewer", "Capacity (cups/hr)", "Footprint", "Maintenance cadence"],
      rows: [
        ["Entry pod", "Keurig K-3500 / Bunn My Cafe", "30-40", "8 × 14 in", "Daily descale rinse, monthly water filter"],
        ["Mid bean-to-cup", "Franke A300 / Schaerer Coffee Club / WMF 1100 S", "60-90", "12 × 22 in", "Daily auto-clean, weekly milk-system deep clean, quarterly PM"],
        ["High bean-to-cup", "Franke A600 / Schaerer Coffee Soul / Eversys e'2m", "90-150", "16 × 26 in", "Daily auto-clean, weekly PM, biannual gasket/group-head service"],
        ["Premium hospitality", "La Marzocco Linea PB + Mythos grinder", "120-200+", "30 × 24 in", "Daily back-flush, weekly PM, semi-annual rebuild by certified tech"],
      ],
    },
    {
      heading: "5. Water + dairy + ancillary spec",
      items: [
        { label: "Water filtration", value: "Carbon block + softener (target hardness 50-80 ppm CaCO3, TDS 100-200 ppm per SCA water standard). Reverse osmosis with remineralization for premium tier. Filter replacement every 6 months or 6,000 gallons." },
        { label: "Dairy", value: "Refrigerated milk reservoir (NSF-rated), 2% + whole + oat (Oatly Barista, Califia) + almond options. Telemetry-monitored temp (33-40°F)." },
        { label: "Cups + lids", value: "PFAS-free compostable cups (BPI-certified or Cedar Grove accepted), PLA lids, or fiber lids. Optional ceramic mug program with employee-owned cups." },
        { label: "Condiments", value: "Cane sugar, raw sugar, stevia (Truvia or SweetLeaf), erythritol blend. Honey + agave packets. Avoid HFCS-based syrups in premium tier." },
      ],
    },
    {
      heading: "6. KPI targets + measurement",
      items: [
        { label: "Uptime", value: "≥ 98% per machine per month (telemetry-verified). Sub-95% triggers root-cause review at QBR." },
        { label: "Drinks per employee per day", value: "Bean-to-cup mid-tier baseline: 1.4-1.8 drinks/employee/day. Hybrid cafe: 1.8-2.4." },
        { label: "Satisfaction (NPS)", value: "Target NPS ≥ 40 within 90 days of launch, ≥ 50 by month 12. Survey embedded in payment confirmation or mobile app." },
        { label: "Waste", value: "Spent grounds composted or partnered with municipal compost stream. Cup-diversion rate ≥ 60% where compost infrastructure exists." },
        { label: "Cost variance", value: "Monthly cost-per-cup tracking with ≤ 5% variance to bid. Variance > 10% triggers contract clause review." },
      ],
    },
    {
      heading: "7. Reference-check guidance",
      paragraph:
        "Ask each operator for three references at similar headcount + equipment tier. Use these questions on a 20-minute call.",
      items: [
        { check: "How long has the operator served you? (target: 24+ months for tier confidence)" },
        { check: "What was the actual uptime over the last 12 months vs. contract SLA?" },
        { check: "How quickly does the operator resolve a payment-system or brewer outage in practice (not contract SLA)?" },
        { check: "How does the operator handle planogram or menu refresh requests? Cadence + responsiveness." },
        { check: "What was the QBR cadence and quality? Show me a redacted QBR deck." },
        { check: "Has cost-per-cup tracked to bid, or have there been pass-through increases? What was the largest increase and notice period?" },
        { check: "How did the operator handle the first major equipment failure? Loaner machine within 24 hours?" },
        { check: "Would you re-select this operator at next renewal? Why or why not?" },
      ],
    },
    {
      heading: "8. Contract clause checklist",
      items: [
        { check: "Uptime SLA with credit mechanism (e.g., 1% monthly fee credit per 1% uptime below 98%)" },
        { check: "Cost-pass-through formula tied to published commodity index (ICE coffee C, dairy) with cap" },
        { check: "Equipment replacement cycle (5-7 years bean-to-cup, 3-5 years pod, end-of-life refurb vs. replace decision)" },
        { check: "Telemetry data ownership — host retains right to export raw data on contract termination" },
        { check: "Termination for convenience with 60-90 day notice, no early-termination fee after month 24" },
        { check: "Insurance: $2M general liability, $1M product liability, certificate naming host as additional insured" },
        { check: "Health-department + food-handler certification on file (where local code applies to coffee service)" },
        { check: "ADA compliance attestation for brewer height, reach, and operating force per 2010 ADA Standards Section 308 + 309" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending can help your facilities team scope, RFP, and evaluate qualified OCS operators in your metro.",
});

console.log("wrote " + "custom-coffee-service-packages-for-corporate-offices");
