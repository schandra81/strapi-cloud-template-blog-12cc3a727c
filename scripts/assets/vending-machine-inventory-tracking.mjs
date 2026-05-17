import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-inventory-tracking",
  assetType: "checklist",
  title: "Vending Inventory Tracking Verification Checklist",
  subtitle: "Telemetry coverage + dashboard read-access + SLA + audit rights + reconciliation",
  intro:
    "Inventory tracking is the operator-side capability that drives stockout reduction (typical 25-45% reduction with telemetry vs paper-route), planogram velocity tuning, and dispute-free commission reconciliation. This checklist gives the facility manager + procurement officer a verifiable inventory baseline mapped to platforms used in the industry (Cantaloupe Seed, Nayax MoMa, 365 Retail Markets ADM, AWM Smart Shelf, Parlevel, VendSoft).",
  sections: [
    {
      heading: "1. Telemetry-driven inventory baseline",
      items: [
        { check: "Per-SKU velocity captured at machine-level cadence ≤ 15 min." },
        { check: "Par-stock targets defined per SKU per machine; refresh quarterly based on rolling 90-day velocity." },
        { check: "Pre-kit picking at warehouse driven by telemetry forecast (not paper restock card)." },
        { check: "Stockout incidents logged per machine per SKU; rolling 30-day trend visible." },
        { check: "Expired product flagged via planogram-date logic where SKU has < 30-day shelf life (fresh food)." },
      ],
    },
    {
      heading: "2. Dashboard read-access (facility-side)",
      items: [
        { check: "Facility manager + procurement + (where applicable) SFA / SFA business office have named-user access." },
        { check: "Dashboard surfaces: per-machine inventory level, par-stock vs current, last-restock timestamp, stockout history." },
        { check: "Per-SKU velocity, refund, and waste reports exportable to CSV / XLSX." },
        { check: "Discrepancy alerts: telemetry-counted vends vs cash + cashless transactions reconcile to ≤ 1% delta." },
        { check: "SSO / SAML federation at enterprise placements; named-user audit trail." },
      ],
    },
    {
      heading: "3. Commission + revenue reconciliation",
      paragraph:
        "Tie commission to telemetry-counted vends, not operator-side cash counts. This eliminates the most common dispute vector at QBR.",
      items: [
        { check: "Commission calculation references telemetry vend count + gross sales by machine." },
        { check: "Monthly statement: per-machine, per-SKU vends + gross + commission detail." },
        { check: "Discrepancy threshold ≤ 1% between telemetry vends and reported gross; > 1% triggers root-cause review." },
        { check: "Refund + void volume disclosed; refund rate > 2% triggers planogram + hardware review." },
        { check: "Quarterly reconciled commission payment with audit-grade detail." },
      ],
    },
    {
      heading: "4. SLA — restock + stockout response",
      headers: ["Scenario", "Operator SLA"],
      rows: [
        ["Per-SKU stockout (single facing)", "Next scheduled visit; ≤ 5 business days"],
        ["Multi-SKU stockout (≥ 3 facings)", "Within 48 business hours"],
        ["Full-machine stockout", "Within 24 hours"],
        ["Refrigerated stockout / temperature excursion", "Within 4 hours (cold chain)"],
        ["Pricing / planogram change request", "5-7 business days for full refresh"],
      ],
    },
    {
      heading: "5. Audit rights + documentation",
      items: [
        { check: "Audit right written into MSA with 10-business-day notice." },
        { check: "Operator provides per-machine, per-SKU vend log on request; 24 months minimum retention." },
        { check: "Cash + cashless transaction log retained 24 months." },
        { check: "Refund + chargeback log retained 18 months (Visa Dispute Monitoring Program window)." },
        { check: "Annual independent revenue audit available at operator expense above defined gross threshold." },
        { check: "Smart Snacks / nutrition compliance evidenced via SKU list refreshed each semester at K-12 placements." },
      ],
    },
    {
      heading: "6. Quarterly Business Review",
      items: [
        { check: "Inventory level trend per machine over the quarter." },
        { check: "Per-SKU velocity report; SKUs at < 50% of target velocity flagged for substitution." },
        { check: "Stockout incidents + resolution time vs SLA." },
        { check: "Waste / shrink report (expired SKU + theft + service-loss)." },
        { check: "Planogram refresh recommendations for the next quarter." },
        { check: "Action items + named owners + due dates; carried to next QBR." },
      ],
    },
    {
      heading: "7. Data integrity + integration",
      items: [
        { check: "SKU master synchronized between operator system + planogram + dashboard + (where applicable) nutrition labeling." },
        { check: "Barcode / UPC capture verified at pre-kit warehouse + restock." },
        { check: "Telemetry-to-ERP integration documented where facility runs corporate procurement (SAP, Oracle, Workday, NetSuite)." },
        { check: "Where micro-market + vending hybrid: unified inventory view across SKUs at the placement." },
        { check: "Sub-processor list maintained where data flows to analytics / loyalty platforms." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or audit advice. Verify reconciliation methodology with finance + procurement; coordinate audit timing with operator. LetUsVending is equipped to coordinate operators with telemetry-verified inventory, dashboard read-access, and audit-grade commission reconciliation.",
});

console.log("wrote "+"vending-machine-inventory-tracking");
