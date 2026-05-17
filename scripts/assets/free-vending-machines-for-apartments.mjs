import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "free-vending-machines-for-apartments",
  assetType: "pack",
  title: "Apartment Free Vending Framework",
  subtitle: "Service-model variants, operator qualification, contract template",
  intro:
    "'Free vending' is a procurement-model term, not a product. This framework defines four service-model variants, the operator capability checklist for each, and the contract clauses that protect both host and operator.",
  sections: [
    {
      heading: "1. Service-model variants",
      paragraph:
        "Operator funding mechanics differ across the four models. Choose the model that fits the property's amenity-stack and budget.",
      headers: ["Model", "Resident pays", "Host pays", "Operator economics"],
      rows: [
        ["Traditional retail (not 'free')", "Sticker price", "$0", "Operator margin from retail markup; host receives commission"],
        ["Subsidized vending", "Reduced or $0 (resident sees subsidy)", "Monthly invoice for delta + admin fee", "Operator margin from full price; host pays the gap"],
        ["Fully-subsidized / 'free'", "$0", "Full per-unit invoice + service fee", "Operator passes COGS + service + margin to host"],
        ["Amenity-fee model", "$0 at point-of-sale", "Monthly amenity fee per unit (often blended into HOA / amenity dues)", "Operator runs as a managed amenity service"],
      ],
    },
    {
      heading: "2. When each variant fits",
      items: [
        { label: "Subsidized vending", value: "Best fit: lifestyle / luxury 200-500 unit property positioning a 'free coffee + water' lobby amenity. Host wants member-only incentive without giving away every SKU." },
        { label: "Fully-subsidized / 'free'", value: "Best fit: smaller premium developments, corporate housing, executive-suite buildings, owner-occupied co-ops. Host wants white-glove amenity." },
        { label: "Amenity-fee model", value: "Best fit: build-to-rent, condo association, or premium developments where amenity fee is already itemized in lease / dues." },
        { label: "Traditional retail", value: "Best fit: workforce / mid-tier where residents prefer real-cost transparency and price-sensitive shopping." },
      ],
    },
    {
      heading: "3. Operator qualification checklist",
      items: [
        { check: "Multifamily-experience references in subsidized / free models (3 minimum)." },
        { check: "Telemetry coverage 100% with read-only host dashboard." },
        { check: "Inventory + service cost transparency — operator can produce per-SKU cost-of-goods, per-restock labor cost, per-machine service overhead." },
        { check: "ENERGY STAR-certified cabinets to minimize host's energy-line responsibility." },
        { check: "Four-tier SLA with service-credit clause." },
        { check: "Member-app SDK (Cantaloupe Engage / Nayax Onyx / 365 Pay) for tracking even when resident pays $0 — needed for refund + abuse detection." },
        { check: "Abuse-detection on free models — velocity cap per resident credential, anti-stockpiling controls." },
        { check: "Insurance — $2M GL + product + auto, host additional insured." },
      ],
    },
    {
      heading: "4. Free-model pricing structure",
      paragraph:
        "Operators on fully-subsidized models invoice host on a transparent line-item basis to avoid commercial dispute.",
      headers: ["Line item", "Typical pricing"],
      rows: [
        ["COGS pass-through", "Operator's wholesale cost + 5-10% handling"],
        ["Cabinet rental / depreciation", "$75-$200/cabinet/month (capex amortized)"],
        ["Telemetry + software", "$25-$60/cabinet/month"],
        ["Field service + restock labor", "$60-$120/visit (cadence-dependent)"],
        ["Operator overhead + margin", "10-18% of total line items above"],
        ["Total per cabinet per month (typical range)", "$650-$2,500 (sku-mix dependent)"],
      ],
    },
    {
      heading: "5. Abuse-prevention spec (free / subsidized)",
      paragraph:
        "Without controls, free models invite stockpiling. The controls below preserve the amenity for the resident community.",
      items: [
        { label: "Per-credential velocity cap", value: "Member-app SDK enforces N items / hour / credential (e.g., 2 items / hr); rolling window." },
        { label: "Per-credential daily cap", value: "Max items / day / credential (e.g., 6 items / day)." },
        { label: "SKU restrictions", value: "Premium SKUs ($5+ retail) optionally locked to mid-tier credential (e.g., longer-tenure residents) or excluded from free tier." },
        { label: "Abuse-pattern alerts", value: "Operator monitors for velocity anomalies; top-quartile users flagged for property review." },
        { label: "Host escalation", value: "Property manager has authority to suspend credential or downgrade tier." },
      ],
    },
    {
      heading: "6. Contract template clauses",
      items: [
        { check: "Service-model variant named (subsidized / fully-subsidized / amenity-fee)." },
        { check: "Per-line-item invoice schema attached." },
        { check: "Monthly invoice with telemetry-backed transaction log + per-SKU detail." },
        { check: "Abuse-prevention controls documented; threshold parameters set." },
        { check: "Audit rights — host can review COGS evidence on a sample-basis quarterly." },
        { check: "30-day notice for SKU additions / removals from free / subsidized tier." },
        { check: "Cap on monthly invoice — host's max exposure stated (e.g., $2,500 / cabinet / month ceiling); excess routed to traditional pay-tier." },
        { check: "Equipment-removal at contract end, host-owns-nothing." },
        { check: "Insurance, ADA, ENERGY STAR attestations." },
      ],
    },
    {
      heading: "7. Resident communication for free / subsidized programs",
      items: [
        { check: "Lobby signage explaining the amenity (sponsored, member-only, daily limits)." },
        { check: "Resident-portal announcement at launch — what's free vs paid, how to access, daily caps." },
        { check: "Member-app onboarding — first-use flow shows tier, limits, premium-tier upsell." },
        { check: "Refund flow visible — even $0 transactions need recourse if no-vend." },
        { check: "Property-manager direct-line to operator for resident escalations." },
        { check: "Quarterly survey on planogram preferences + utilization." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to match qualifying multifamily hosts with operators experienced in subsidized and fully-subsidized vending models. Specific invoice ranges and feasible cabinet count depend on resident behavior + planogram tier — described honestly at intake. Capability framing only.",
    },
  ],
  footer:
    "Invoice line items and abuse-prevention thresholds are reference values. Confirm against operator proposals and your property's amenity budget.",
});

console.log("wrote " + "free-vending-machines-for-apartments");
