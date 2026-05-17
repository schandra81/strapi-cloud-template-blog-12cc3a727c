import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "benefits-of-micro-markets-for-employees",
  assetType: "playbook",
  title: "Office Micro-Market Employee-Benefit Playbook",
  subtitle: "Assortment, fresh-food, healthy-share, subsidy integration, and engagement-survey measurement",
  intro:
    "A workplace micro-market shifts from a 'snacks-on-a-wall' utility to a measurable employee benefit when assortment, subsidy mechanics, and engagement measurement are designed together. This playbook codifies the operating practices LetUsVending operator partners are equipped to deliver — sourced against FDA FALCPA labeling (21 USC 343), the 2020-2025 Dietary Guidelines for Americans, and the SHRM Employee Benefits 2024 research framework.",
  sections: [
    {
      heading: "1. Benefit-tier framework",
      paragraph:
        "Treat the micro-market as a tier-2 benefit alongside parking, transit, and wellness stipends. SHRM 2024 found 41% of employers now offer free snacks or beverages and 28% offer subsidized food — frame the program in that benchmark.",
      headers: ["Tier", "Employer cost share", "Typical employer signal", "Engagement lever"],
      rows: [
        ["Tier 1 — fully subsidized", "100% of catalog", "Top-of-market employer (tech, life sciences)", "Free coffee + healthy snack wall; daily fresh food"],
        ["Tier 2 — partial subsidy", "20-50% of selected SKUs", "Most mid-market employers", "Healthy-share buy-down + fresh-food subsidy"],
        ["Tier 3 — convenience-only", "0%, market price", "Cost-conscious; replacing vending", "Lower price than retail via operator economics"],
      ],
    },
    {
      heading: "2. Assortment by employee-benefit objective",
      items: [
        { label: "Healthy-share target", value: "35-50% of facings meet 'better-for-you' criteria — ≤200 cal, ≤10g added sugar, ≤480mg sodium, or whole-grain/protein-forward. Aligns with the FDA Healthy claim (21 CFR 101.65(d)(2)) where claimed." },
        { label: "Fresh-food category", value: "Grab-and-go salads, sandwiches, wraps, fruit, yogurt — managed under FDA Food Code 2022 cold-chain (≤41°F) with date-marked discard within 7 days of preparation." },
        { label: "Dietary coverage", value: "≥1 gluten-free, ≥1 dairy-free, ≥1 vegan, ≥1 high-protein, ≥1 low-sodium per category. FALCPA + FASTER Act top-9 allergen labels on every SKU." },
        { label: "Cultural + occasion variety", value: "Quarterly planogram refresh rotates 15-25% of SKUs. Cultural-heritage months trigger themed feature SKUs (Lunar New Year, AAPI Heritage, Hispanic Heritage, etc.)." },
      ],
    },
    {
      heading: "3. Subsidy integration models",
      items: [
        { number: 1, title: "Stipend at the kiosk (recommended)", description: "Employer loads $X/week into employee account at the micro-market kiosk (365 Retail Markets, Avanti, Three Square, or comparable). Employee redeems at point of sale. Operator reconciles monthly to employer AP. Aligns with IRS de minimis fringe benefit treatment under IRC §132(e) when occasional and low-value." },
        { number: 2, title: "Category buy-down", description: "Employer subsidizes a specific category (fresh food, coffee, healthy-share) — operator marks down that category and bills the employer the differential. Lower admin overhead than per-employee stipend." },
        { number: 3, title: "Free-vend SKUs", description: "Subset of SKUs (water, fruit, coffee) free to scan. Operator bills employer at COGS + service fee. Highest engagement signal." },
        { number: 4, title: "Subsidy ceiling controls", description: "All three models accept daily/weekly per-employee caps configured in the kiosk software. Prevents subsidy abuse and keeps the program within budget." },
      ],
    },
    {
      heading: "4. Engagement-survey measurement",
      paragraph:
        "Build a measurement cadence around the SHRM Employee Benefits Research Index and standard pulse-survey practices so the program defends its budget annually.",
      headers: ["Cadence", "Instrument", "Sample size", "Reported metric"],
      rows: [
        ["Quarterly", "5-question pulse via Microsoft Forms / Culture Amp", "≥20% of headcount", "Net satisfaction (top-2-box %)"],
        ["Annual", "Full benefits survey (15-25 questions)", "≥40% of headcount", "Likely-to-recommend, perceived value, dietary coverage"],
        ["Continuous", "Kiosk transaction telemetry", "100% of transactions", "Unique users, repeat rate, basket mix, healthy-share velocity"],
        ["Annual", "Exit-interview question", "All exits", "Did the workplace food program influence retention?"],
      ],
    },
    {
      heading: "5. ROI defensibility for HR + finance",
      items: [
        { label: "Hard-cost benchmarks", value: "MIT Workplace Institute and Aramark surveys put employer cost of an unsubsidized snack-and-beverage program at $0-$10/employee/month. A fully subsidized fresh-food + healthy-share tier typically lands at $40-$120/employee/month." },
        { label: "Retention math", value: "SHRM 2024 estimates replacement cost at 50-200% of annual salary. If the program lifts retention by even 0.5 percentage points on a $75k workforce, the math defends itself at most subsidy levels." },
        { label: "Productivity signal", value: "Harvard School of Public Health (Thorndike et al., 2014; 2020) showed healthy-default placements raise healthy-share by 10-30% — track that lift quarterly as a wellness-program contribution." },
        { label: "Engagement signal", value: "Gallup Q12 item 4 ('material and equipment') and item 5 ('care') correlate with food-program presence in workplace surveys; report alongside benefits scorecard." },
      ],
    },
    {
      heading: "6. Communication + launch plan",
      items: [
        { number: 1, title: "T-30 days — internal pre-launch", description: "All-hands announcement, intranet post with photos of the planned kiosk + planogram, dietary-coverage commitments stated publicly." },
        { number: 2, title: "T-7 days — onboarding", description: "Email sequence walks employees through kiosk account creation, payroll deduction or stipend setup, allergen filter, refund flow." },
        { number: 3, title: "Launch week — staff support", description: "Operator field rep on-site at peak hours days 1-3. HR runs a tasting / sample event. QR-coded SKU surveys collect first-week feedback." },
        { number: 4, title: "T+30, T+90 — pulse + refresh", description: "30-day pulse, 90-day full planogram refresh based on transaction telemetry + survey signal. Communicate refresh as 'you asked, we added.'" },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an employer to operator partners equipped to deliver micro-market programs at all three benefit tiers, including 365 Retail Markets / Avanti / Three Square kiosk platforms, FDA Food Code-compliant fresh-food programs, dietitian-reviewed planograms, and quarterly engagement reporting to HR. Programs are scoped per site after a discovery call covering headcount, shift mix, kitchen access, and benefit tier.",
    },
  ],
  footer:
    "Informational reference. Subsidy tax treatment depends on facts and circumstances — confirm with payroll and tax counsel. Standards citations current as of publication; verify the latest version before contracting.",
});

console.log("wrote "+"benefits-of-micro-markets-for-employees");
