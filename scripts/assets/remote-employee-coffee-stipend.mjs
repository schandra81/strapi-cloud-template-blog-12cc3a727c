import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "remote-employee-coffee-stipend",
  assetType: "template",
  title: "Remote Employee Coffee Stipend — Program Template",
  subtitle: "Model selection, IRS tax framework, expense platform setup, and reporting",
  intro:
    "Use this template to design and launch a remote-employee coffee (or broader food + beverage) stipend program. Each section is capability-framed and references IRS guidance (IRC §62, §132, §274), FLSA expense reimbursement standards, and platform capabilities (Forma, Compt, Fringe, Espresa, Edenred, Levy, Workhuman). Confirm tax treatment with tax counsel before launch.",
  sections: [
    {
      heading: "1. Stipend model selection",
      paragraph:
        "Three structures cover most remote-coffee programs. Selection drives tax treatment, platform requirements, and budget predictability.",
      headers: ["Model", "How it works", "Tax treatment (US)", "Best fit"],
      rows: [
        ["Taxable cash stipend", "Fixed monthly $ added to payroll, no receipts", "Wages, subject to FIT, FICA, SUI", "Smallest programs (<50 FTE), lowest admin"],
        ["Accountable-plan reimbursement", "Receipts required, business-purpose statement, excess returned", "Non-taxable under IRC §62(c) + Reg. §1.62-2", "Mid-size programs with expense platform"],
        ["Expense-platform card / wallet", "Closed-loop card or wallet at curated merchants", "Non-taxable if accountable-plan rules met; taxable if open-cash", "Largest programs, ESG/brand-led, multi-category lifestyle benefit"],
      ],
    },
    {
      heading: "2. Budget + amount benchmarks",
      paragraph:
        "Benchmarks below reflect 2024-2025 lifestyle stipend market data from Compt, Forma, and Fringe published reports. Adjust to local cost of living and program scope.",
      headers: ["Program type", "Monthly per employee", "Annual per employee", "Common scope"],
      rows: [
        ["Coffee-only", "$15-$30", "$180-$360", "Coffee shop spend, beans, home brewer supplies"],
        ["Coffee + breakfast", "$30-$60", "$360-$720", "Coffee + breakfast venues + grocery"],
        ["Food + beverage", "$50-$150", "$600-$1,800", "Restaurants, coffee shops, grocery, meal delivery"],
        ["Lifestyle (multi-category)", "$75-$200", "$900-$2,400", "Food + wellness + WFH + family + learning"],
      ],
    },
    {
      heading: "3. IRS + tax framework",
      paragraph:
        "Tax treatment depends on whether the program meets accountable-plan rules. Confirm with tax counsel. References below are starting points.",
      items: [
        { label: "IRC §62(c) + Reg. §1.62-2 (accountable plan)", value: "Three conditions: (1) business connection, (2) substantiation of amount, time, place, and business purpose within reasonable period, (3) return of amounts in excess of substantiated expenses. If all three met, reimbursements are excluded from wages." },
        { label: "IRC §132(e) (de minimis fringe)", value: "Occasional coffee, snacks, and similar items of small value may qualify as de minimis. The IRS has not formally defined a de minimis dollar threshold; conservatively treated < $100/year/employee with infrequent provision." },
        { label: "IRC §274(n) (meal deduction limitation)", value: "Employer deduction for food + beverage is generally limited to 50%; certain de minimis benefits and meals on employer premises have historically had different treatment. Confirm current rules with tax counsel as TCJA + subsequent legislation has changed limits." },
        { label: "State payroll tax", value: "If treated as wages, state income, SUI, and local payroll taxes apply. Multi-state remote programs should map withholding by employee work-location." },
        { label: "FLSA expense reimbursement", value: "If expenses incurred for the benefit of the employer would reduce wages below minimum wage or overtime rate, reimbursement is required regardless of stipend structure." },
      ],
    },
    {
      heading: "4. Expense platform setup",
      paragraph:
        "Platform selection drives admin overhead, employee experience, and merchant control. Confirm capability list in writing through vendor RFP.",
      items: [
        { label: "Closed-loop card", value: "Issued by Forma, Compt, Fringe, Espresa, Workhuman, Edenred. Card runs on closed merchant network or category-controlled open-loop (MCC restriction). SOC 2 Type II attestation required." },
        { label: "Receipt-based reimbursement", value: "Employee submits receipt via app or web; platform verifies merchant category, business purpose, and policy compliance; payment via payroll add-on or ACH." },
        { label: "Marketplace wallet", value: "Employee picks merchants from a curated catalog (Starbucks, local roasters, grocery delivery). Wallet balance topped monthly; unused balance forfeits or rolls per program rules." },
        { label: "Integration requirements", value: "SSO (SAML 2.0, OIDC), HRIS integration (Workday, BambooHR, Rippling, ADP, UKG, Paylocity), payroll integration for taxable add-on, SOX-aligned audit trail." },
        { label: "Data + privacy", value: "Platform should be GDPR + CCPA compliant; data residency option for EU employees; SOC 2 Type II; PCI-DSS 4.0 if card-issuing." },
      ],
    },
    {
      heading: "5. Policy + eligibility template",
      items: [
        { label: "Eligible employees", value: "Active W-2 employees in remote or hybrid status; minimum hours threshold (typically ≥ 30 hrs/week or per benefits-eligibility); exclude contractors per IRS classification rules." },
        { label: "Eligible expenses", value: "Coffee shop purchases, whole-bean coffee, roasted coffee subscriptions, home espresso supplies (filters, milk, sweeteners). Exclude: alcohol, gift cards (where program treats them as cash), home appliance purchases over $X." },
        { label: "Substantiation", value: "Itemized receipt with merchant name, date, amount, category. Business-purpose statement: 'Remote work coffee benefit per policy [X].' Submitted within 60 days of purchase." },
        { label: "Use-it-or-lose-it", value: "Monthly cap; unused balance forfeits at month-end (taxable cash model: not applicable). Annual rollover not permitted in accountable-plan model to preserve tax treatment." },
        { label: "Multi-state + global", value: "Program scope by country/state; US-only or global with country-specific caps (UK, Canada, Germany, India typical first-wave). Local tax wrappers vary; confirm with global mobility + tax counsel." },
      ],
    },
    {
      heading: "6. Communications + launch SOP",
      items: [
        { number: 1, title: "T-30: policy finalization", description: "Tax counsel + benefits counsel review program design and policy language. Final policy posted to HRIS + intranet." },
        { number: 2, title: "T-21: platform configuration", description: "Vendor onboarding, SSO + HRIS integration, eligibility load, merchant category whitelist, audit-log review." },
        { number: 3, title: "T-14: pilot group launch", description: "100-person pilot across 2-3 functions; collect feedback on platform UX, merchant coverage, receipt-flow." },
        { number: 4, title: "T-7: communications kit", description: "FAQ, recorded enablement webinar, manager talking points, IT/SSO troubleshooting playbook." },
        { number: 5, title: "T-0: full rollout", description: "All eligible employees enrolled; first monthly stipend issued; helpdesk staffed for first two weeks." },
        { number: 6, title: "T+90: program review", description: "Utilization, employee satisfaction (target NPS ≥ 60), merchant gap analysis, policy refinements." },
      ],
    },
    {
      heading: "7. Reporting + KPIs",
      items: [
        { check: "Utilization rate (% of eligible employees redeeming monthly; target ≥ 70%)." },
        { check: "Average monthly spend per active user vs cap." },
        { check: "Merchant category mix (coffee shop vs grocery vs subscription)." },
        { check: "Geographic distribution (state, country) for tax + policy review." },
        { check: "Employee satisfaction pulse (post-launch + quarterly)." },
        { check: "Audit-log review (substantiation completeness, policy exceptions, refund volume)." },
        { check: "Total program cost vs budget; per-FTE cost trending." },
      ],
    },
  ],
  footer:
    "This template is informational and not tax, legal, or benefits advice. Confirm program design and tax treatment with qualified tax counsel and benefits counsel before launch. Multi-state and multi-country programs require additional local-law review.",
});

console.log("wrote " + "remote-employee-coffee-stipend");
