import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "do-businesses-earn-commission-from-vending",
  assetType: "guide",
  title: "Vending Commission Benchmarking Guide",
  subtitle: "Rate, basis, cadence, and statement format",
  intro:
    "Yes — most host businesses earn a commission on vending sales. The commission structure varies by host type, sales volume, and exclusivity terms. This guide benchmarks typical rates, explains the four common commission bases, defines the standard payment cadence, and specifies what a compliant commission statement should contain. Use it to evaluate proposals and audit incumbent operators.",
  sections: [
    {
      heading: "1. Typical commission rates by host type",
      paragraph:
        "Rates are industry-typical ranges from publicly available operator proposals + the National Automatic Merchandising Association (NAMA) member-survey data. Actual rates depend on machine count, sales volume, capital contribution, and exclusivity. Capability framing — these are benchmarks, not guarantees.",
      headers: ["Host type", "Typical commission rate", "Notes"],
      rows: [
        ["Small office (under 50 employees)", "5-10% of gross", "Usually flat rate; commission may not be offered on very-low-volume locations"],
        ["Mid-size workplace (50-500)", "10-20% of gross", "Tiered structure common"],
        ["Large workplace (500+)", "15-25% of gross", "Tiered + minimum-volume guarantees common"],
        ["Manufacturing / industrial", "15-25% of gross", "Often higher because volume + 24/7 operation"],
        ["Healthcare campus", "10-20% of gross", "Tiered; compliance overlays add operator cost"],
        ["University / college", "20-35% of gross", "Higher rates because of competitive RFP environment + auxiliary-services model"],
        ["Stadium / arena (general concourse)", "15-25% of gross", "Plus capital + branding contribution"],
        ["Stadium / arena (premium / VIP)", "25-40% of gross", "Higher because premium SKU mix + higher margin"],
        ["Public building / government", "Variable", "Often set by procurement RFP or governed by Randolph-Sheppard Act for blind-vendor priority on federal property (20 USC §107)"],
        ["Hotel / hospitality", "15-25% of gross", "Sometimes flat fee instead"],
      ],
    },
    {
      heading: "2. Commission bases — four common models",
      items: [
        { number: 1, title: "Percentage of gross sales (most common)", description: "Operator pays host % of gross revenue. Simple to audit. Best for host where vending sales are stable and visible." },
        { number: 2, title: "Percentage of net sales", description: "Gross minus sales tax (and sometimes minus credit-card processing fees). Common where local sales tax is high. Audit-ability lower; require operator to publish the deduction formula." },
        { number: 3, title: "Tiered commission", description: "Lower % on first $X of monthly sales, higher % above threshold. Aligns operator + host: operator earns more share at lower volume; host earns more share at higher volume. Common at large + premium hosts." },
        { number: 4, title: "Fixed monthly fee", description: "Operator pays flat $/machine/month regardless of sales. Operator retains all sales upside. Suitable for hosts that prefer predictability or where sales volume is uncertain." },
      ],
    },
    {
      heading: "3. Payment cadence",
      items: [
        { label: "Monthly (most common)", value: "Operator delivers commission statement + payment within 15-30 days of month end. Industry standard." },
        { label: "Quarterly", value: "Some smaller-volume hosts accept quarterly to reduce administrative cost." },
        { label: "Annual reconciliation", value: "Annual true-up against telemetry data; any overpayment or underpayment reconciled." },
        { label: "Payment method", value: "ACH preferred; check accepted; some operators offer direct portal credit." },
      ],
    },
    {
      heading: "4. What a compliant commission statement should contain",
      paragraph:
        "Operator's commission statement should be auditable. The following content set is industry-standard. Anything less should raise questions in your operator review.",
      items: [
        { check: "Reporting period (month / quarter, with explicit start + end date)." },
        { check: "Per-machine gross sales (revenue)." },
        { check: "Per-machine units sold (volume)." },
        { check: "Per-machine cashless mix % (validates revenue against telemetry)." },
        { check: "Sales tax breakout (per jurisdiction where machines are placed)." },
        { check: "Any deductions (credit-card processing fees, refunds, comps) — itemized." },
        { check: "Commission rate applied (with tier breakdown if applicable)." },
        { check: "Commission amount + payment method + payment date." },
        { check: "Year-to-date and trailing-12-month roll-up." },
        { check: "Operator contact for statement questions." },
      ],
    },
    {
      heading: "5. Audit + verification",
      items: [
        { number: 1, title: "Telemetry cross-check", description: "Host requests operator's telemetry export quarterly; cross-check unit counts and gross sales against the commission statement." },
        { number: 2, title: "Cashless mix sanity check", description: "Industry cashless mix is typically 60-80% in workplace, 70-90% in premium venue. If operator's reported cashless mix is implausibly low, gross sales may be under-reported." },
        { number: 3, title: "Refund + comp reconciliation", description: "Refunds + comps reduce commission base. Confirm refund rate is plausible (typically 1-3% of transactions). Higher rates suggest equipment problem or accounting error." },
        { number: 4, title: "Annual independent audit (large hosts)", description: "Large hosts (university, premium venue, multi-site corporate) commission an annual independent audit of commission statements vs. telemetry + payment-processor data." },
      ],
    },
    {
      heading: "6. Special cases + compliance overlays",
      items: [
        { label: "Randolph-Sheppard Act (federal property)", value: "20 USC §107 grants blind vendors priority on federal property. Commission structure governed by state licensing agency; host's discretion is limited." },
        { label: "Public-university auxiliary-services contracts", value: "Often go through formal RFP; commission rates published in award packet. Some states have minimum-commission floors set by state procurement code." },
        { label: "Stadium / arena exclusivity", value: "Commission often paired with operator's right to be sole vending provider; operator typically pays a higher % in exchange for exclusivity + branding rights." },
        { label: "Healthcare", value: "JCAHO + state health-department compliance adds operator cost; commission rates may be lower to offset." },
        { label: "Schools (K-12)", value: "Healthy-vending standards (USDA Smart Snacks per 7 CFR 210.11) constrain SKU mix; commission rates typically 10-20%." },
      ],
    },
    {
      heading: "7. Negotiation checklist",
      items: [
        { check: "Benchmark commission rate against Section 1 industry-typical range for your host type." },
        { check: "Confirm commission basis (gross vs. net vs. tiered vs. fixed) and audit-ability." },
        { check: "Specify payment cadence (monthly preferred) + payment method (ACH preferred)." },
        { check: "Confirm commission statement content per Section 4." },
        { check: "Negotiate audit rights — telemetry export + annual independent audit for large hosts." },
        { check: "Specify tier structure (where applicable) — protect host upside as sales grow." },
        { check: "Specify minimum-volume guarantees (where operator commits)." },
        { check: "Specify exclusivity terms (where granted) + corresponding commission uplift." },
        { check: "Confirm any capital contribution (machine cost, branding cost) and how it affects commission rate." },
      ],
    },
  ],
  footer:
    "Informational guide — engage procurement counsel + finance before contract issue. Commission benchmarks are industry-typical ranges; actual rates depend on host volume, exclusivity, and capital structure.",
});

console.log("wrote "+"do-businesses-earn-commission-from-vending");
