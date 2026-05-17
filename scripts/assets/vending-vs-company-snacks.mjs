import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-vs-company-snacks",
  assetType: "playbook",
  title: "Vending vs. Company-Paid Snacks Decision Playbook",
  subtitle: "Cost models, assortment comparison, workforce-experience signal, and hybrid program design",
  intro:
    "The 'do we pay for the snacks or charge for them?' decision drives ~$30-$3,600 per employee per year in employer cost and a measurable engagement-survey delta. This playbook codifies the cost models, assortment comparison, and hybrid program design the LetUsVending operator network typically presents — referenced against SHRM's 2024 Employee Benefits research, IRC §132(e) de minimis fringe benefit rules, and FDA FALCPA + FASTER Act allergen labeling.",
  sections: [
    {
      heading: "1. The four operating models",
      paragraph:
        "Pick a model first; the cost math falls out from there. Mixed models exist and most mature programs end up hybrid.",
      items: [
        { number: 1, title: "Vending only (employee pays at market price)", description: "Operator owns assortment, labeling, replenishment, refunds. Employer cost ~$0. Engagement signal: neutral-to-negative at competitive employers." },
        { number: 2, title: "Pantry only (free snacks + beverages, no machines)", description: "Employer or operator stocks; employees take freely. Higher engagement signal but higher cost and harder shrink controls." },
        { number: 3, title: "Subsidized vending (employer buys down a category or per-employee stipend)", description: "Operator runs the machines; employer subsidizes via category buy-down, stipend at the kiosk, or free-vend SKUs. Cleanest controls + middle of the cost curve." },
        { number: 4, title: "Hybrid (free coffee + water + fruit; paid for everything else)", description: "Most-adopted format. Defensible employer cost, healthy-share-forward, signals 'we care' without unbounded spend." },
      ],
    },
    {
      heading: "2. Cost comparison (per employee per workday)",
      headers: ["Model", "Employer cost / employee / day", "Annual / 250 workdays", "Per-FTE annualized"],
      rows: [
        ["Vending only", "$0", "$0", "$0"],
        ["Subsidized vending (category)", "$0.30-$1.20", "$75-$300", "$75-$300"],
        ["Subsidized vending (stipend)", "$0.50-$3.00", "$125-$750", "$125-$750"],
        ["Hybrid (free coffee/water/fruit)", "$0.50-$1.50", "$125-$375", "$125-$375"],
        ["Full pantry (free snacks)", "$2.50-$7.00", "$625-$1,750", "$625-$1,750"],
        ["Full pantry + fresh food + barista", "$6.00-$15.00", "$1,500-$3,750", "$1,500-$3,750"],
      ],
    },
    {
      heading: "3. Assortment comparison",
      headers: ["Attribute", "Vending only", "Pantry / free", "Hybrid"],
      rows: [
        ["Healthy-share % (typical)", "20-30%", "40-60%", "35-50%"],
        ["Fresh-food coverage", "Limited (cooler-only)", "Robust (cooler + grab-and-go)", "Moderate"],
        ["Allergen / dietary coverage", "Constrained by machine slots", "Easier — open shelf", "Easier — open shelf"],
        ["Brand-system visibility", "Low (machine livery)", "High (full room branding)", "Medium-high"],
        ["Engagement-survey lift", "Neutral", "Strongest", "Strong, sustainable"],
      ],
    },
    {
      heading: "4. Workforce-experience signal",
      paragraph:
        "SHRM 2024 Employee Benefits research shows ~41% of employers offer free snacks or beverages and ~28% offer subsidized food. The benchmark matters: if your peer set offers free pantry and you offer vending only, the survey delta shows up.",
      items: [
        { label: "Retention math", value: "Average replacement cost 50-200% of salary (SHRM). A 0.5 percentage-point retention lift on a $75k median workforce defends a $150-$600/FTE/yr food program." },
        { label: "Engagement signal", value: "Gallup Q12 items 4 ('material and equipment') and 5 ('care') correlate with food-program presence. Annual scorecard line item." },
        { label: "Recruiting signal", value: "Glassdoor and Comparably benefits ratings carry food-program detail; visible on candidate research." },
        { label: "DEI + dietary coverage", value: "Free / subsidized pantry expands dietary coverage (gluten-free, dairy-free, vegan, halal/kosher) easier than vending machine slots." },
      ],
    },
    {
      heading: "5. Tax and accounting considerations",
      items: [
        { check: "IRC §132(e) de minimis fringe benefit treatment for occasional employer-provided food + beverage where value is small and infrequent" },
        { check: "Post-TCJA: employer deduction for snacks + beverages is generally 50% deductible through 2025; verify with tax counsel and watch for sunset provisions" },
        { check: "Cafeteria / on-premises meals — IRC §119 / §132(e)(2) — different treatment than snacks; consult counsel" },
        { check: "Payroll-tax treatment of stipend-style benefits depends on cash-equivalence — kiosk credit is generally not treated as cash if locked to the market" },
        { check: "State and local tax can differ; sales-tax exempt food categories vary by jurisdiction" },
      ],
    },
    {
      heading: "6. Hybrid program design (recommended starting point)",
      items: [
        { number: 1, title: "Free tier (employer pays)", description: "Coffee, tea, water, sparkling water, fresh fruit, healthy-share endcap (≤200 cal). Typical cost $0.50-$1.50/employee/day. Signals 'we care' with bounded spend." },
        { number: 2, title: "Paid tier (employee pays)", description: "Snacks, sodas, energy drinks, indulgent SKUs, fresh entrées at market price. Operator carries margin." },
        { number: 3, title: "Stipend overlay", description: "Optional employer stipend ($5-$15/employee/week) loaded to kiosk account on top of free tier — useful for shift work or hybrid-work weeks." },
        { number: 4, title: "Event overlay", description: "Free-vend Fridays, all-hands days, recognition events — operator bills the employer per-transaction or daily flat." },
        { number: 5, title: "Quarterly review", description: "QBR with operator + HR + facilities — healthy-share velocity, redemption rate, refund rate, NPS, dietary coverage, cost vs. budget." },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can model the four operating models against your specific headcount + shift mix, then match you with operator partners equipped to run vending, pantry, or hybrid programs with allergen-compliant labeling, healthy-share planograms, kiosk-stipend integration, and quarterly engagement reporting. Scope is set per site after a discovery call.",
    },
  ],
  footer:
    "Informational reference, not tax or legal advice. Confirm IRC §132(e) and post-TCJA deductibility with tax counsel for your facts and circumstances. Citations current at publication.",
});

console.log("wrote "+"vending-vs-company-snacks");
