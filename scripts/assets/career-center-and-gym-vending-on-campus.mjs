import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "career-center-and-gym-vending-on-campus",
  assetType: "pack",
  title: "Campus Placement Planogram Pack — Career Center + Gym",
  subtitle: "Per-placement planograms, budget-subsidization templates, and operator coordination workflow",
  intro:
    "Career center and campus gym are two of the highest-leverage vending placements on a university campus, but each has a distinct planogram. Career-center traffic skews professional-snack + caffeine; gym traffic skews recovery + hydration. This pack bundles the planograms, the subsidy templates auxiliary services + student affairs use to underwrite specific SKUs, and the operator workflow.",
  sections: [
    {
      heading: "1. Career-center placement planogram (60 SKUs)",
      paragraph:
        "Career-center cooler operates during business hours, peaks between 10 AM-2 PM during interview-prep + employer-fair seasons. Planogram weights professional-presentable snack + caffeine + breath-fresh items.",
      items: [
        { label: "Caffeine + cold brew — 22%", value: "RTD cold brew (Stumptown, La Colombe, Chameleon), iced espresso, kombucha-caffeine blend, tea, premium soda. $3.50-$5.50." },
        { label: "Professional-presentable snack — 22%", value: "Better-for-you crackers, pretzels, popcorn, jerky, no-crumb snack bars; nothing high-mess or strong-odor. $2.00-$4.50." },
        { label: "Protein + lunch substitute — 18%", value: "Greek yogurt, hummus + veg, protein bowl, chicken-salad cup, hard-boiled-egg cup. $4.50-$8.50." },
        { label: "Hydration — 15%", value: "Sparkling water, still water, electrolyte. $2.00-$4.00." },
        { label: "Breath + fresh — 8%", value: "Sugar-free gum, mints, breath strips. $2.00-$3.50." },
        { label: "Convenience + emergency — 10%", value: "Lint roller, breath spray, single-use deodorant wipe, stain stick, OTC pain reliever, phone charge cable, resume folder. $3.50-$10.00." },
        { label: "Indulgent — 5%", value: "Single-serve cookie or chocolate; small footprint, post-interview comfort. $3.00-$4.50." },
      ],
    },
    {
      heading: "2. Gym placement planogram (60 SKUs)",
      paragraph:
        "Campus gym cooler peaks pre-workout (5-9 AM, 4-7 PM) and post-workout (immediately after). Planogram weights recovery + hydration + clean-protein. Apply NAMA FITPICK or Smart Snacks guidance where state code requires.",
      items: [
        { label: "Hydration — 28%", value: "Electrolyte (Liquid IV, Nuun, Gatorade Zero), coconut water, premium still water, sparkling water. $2.50-$4.50." },
        { label: "Recovery protein — 22%", value: "Ready-to-drink protein shake (Fairlife, Premier, Orgain), single-serve protein powder packets, casein blend. $3.50-$5.50." },
        { label: "Pre-workout + caffeine — 15%", value: "Cold brew, RTD energy (Celsius, C4, Alani Nu), green tea. $3.00-$5.00." },
        { label: "Whole-food snack — 15%", value: "Greek yogurt + granola, banana + almond-butter cup, overnight oats, jerky, single-serve nut mix. $3.50-$6.00." },
        { label: "Bar — clean-protein — 10%", value: "RXBAR, Built, Quest, Aloha, KIND Protein. $2.50-$4.00." },
        { label: "Convenience + recovery — 7%", value: "Magnesium drink, melatonin, ibuprofen 2-pack, kinesio-tape strip, hair tie 2-pack. $2.50-$8.00." },
        { label: "Indulgent earned-treat — 3%", value: "Protein cookie, low-sugar ice cream cup. $3.50-$5.50." },
      ],
    },
    {
      heading: "3. Budget-subsidization template — what to subsidize and how",
      paragraph:
        "Some SKUs serve a student-affairs goal that doesn't pay for itself at retail price (e.g., recovery protein, professional-presentable snack for under-resourced students). Auxiliary services or career-services budget can underwrite via the template below.",
      headers: ["SKU category", "Subsidy sponsor", "Subsidy mechanism", "Per-unit subsidy", "Annual budget impact"],
      rows: [
        ["Recovery protein (gym)", "Athletics or Student Wellness", "Operator drops retail price by $X; sponsor reimburses operator quarterly", "$0.75-$1.25", "$2,000-$5,000"],
        ["Interview snack (career center)", "Career Services", "Career Services pre-loads campus-card credit ($5/student/visit) tied to cooler", "Variable", "$3,000-$8,000"],
        ["Hydration (gym + summer)", "Student Wellness or Health Services", "Free-bottle voucher for hot-weather days", "$1.50-$2.50", "$1,500-$4,000"],
        ["Smart-Snacks compliant (where mandated)", "Auxiliary Services", "Operator commits to ≥ 50% facings; sponsor underwrites lower margin", "Margin offset 3-5%", "$3,000-$10,000"],
      ],
    },
    {
      heading: "4. Operator coordination workflow",
      items: [
        { number: 1, title: "Joint planogram review (career services + athletics + auxiliary)", description: "Quarterly meeting to confirm SKU mix matches each placement's calendar (interview seasons, athletic seasons, finals)." },
        { number: 2, title: "Subsidy reconciliation", description: "Monthly operator report shows units sold per subsidized SKU; sponsor reimburses operator within 30 days; ledger maintained in auxiliary-services finance system." },
        { number: 3, title: "Restock cadence", description: "Career center: 2x/week + telemetry-triggered top-off during employer-fair weeks. Gym: 3x/week during fall + spring, 2x/week summer + breaks." },
        { number: 4, title: "Service SLA", description: "Tier-1 (offline, payment system down, cold-chain fail): ≤ 24 hr resolution. Tier-2 (single-SKU stockout): ≤ 48 hr. Tier-3 (cosmetic, signage): ≤ 7 days." },
        { number: 5, title: "Communications + signage", description: "Operator provides cooler-face signage explaining payment + refund + allergen labeling; career services + gym front desk display refund QR + escalation number." },
        { number: 6, title: "Quarterly business review", description: "Operator + auxiliary services + sponsor offices review velocity, refund rate, subsidy ROI, planogram refresh." },
      ],
    },
    {
      heading: "5. Placement-specific operating notes",
      items: [
        { label: "Career-center hours + access", value: "Operates during business hours; restock ideally before 9 AM or after 5 PM to avoid interfering with traffic. Cooler face camera + signage approved by career-center director." },
        { label: "Gym hours + access", value: "Operates 5 AM-midnight or 24/7. Restock at 4-5 AM or post-midnight to avoid peak. Cooler tilt sensor + door alarm tied to facility security desk." },
        { label: "Career-center allergen + dietary", value: "Min 25% of SKUs nut-free, gluten-free, or vegan; allergen panel posted; FALCPA labeling on each pack." },
        { label: "Gym allergen + dietary", value: "Min 25% vegan or plant-protein; nut-free options clearly labeled; FITPICK or NEMS-V-aligned mix targeted." },
        { label: "Promotions calendar — career center", value: "Free-first-purchase coupon at career-fair registration; employer-fair sponsor placements." },
        { label: "Promotions calendar — gym", value: "Free-electrolyte day on first 90F+ day; recovery-protein discount tied to varsity meet weekends." },
      ],
    },
    {
      heading: "6. Operator selection criteria — campus placement",
      items: [
        { check: "Campus reference accounts ≥ 2 active placements at peer institutions" },
        { check: "FERPA DPA in place (if campus-card SDK integration)" },
        { check: "Smart-Snacks / FITPICK / NEMS-V planogram capability attested" },
        { check: "Refund automation: QR + SMS refund flow ≤ 24 hr credit-back" },
        { check: "Reporting: per-placement, per-SKU, per-shift velocity dashboards accessible to auxiliary-services + sponsor offices" },
        { check: "Insurance: $2M GL, additional-insured to university; food product liability $1M" },
        { check: "Commission tier: 8-15% of gross, scaled by volume; lower tier for subsidized SKUs offset" },
      ],
    },
    {
      heading: "7. Annual planogram refresh process",
      items: [
        { check: "Q1: pull velocity report for prior 12 months; identify bottom-15 SKUs" },
        { check: "Q1: career services + athletics + auxiliary collect student-survey input (Google Forms, 10-question)" },
        { check: "Q2: operator proposes refreshed planogram; sponsor offices confirm subsidy categories" },
        { check: "Q2: pilot 10 new SKUs in each placement for 60 days; measure velocity vs displaced SKUs" },
        { check: "Q3: finalize annual planogram; brand-approval signage refresh; press release + newsletter to students" },
        { check: "Q4: end-of-academic-year review; carry forward winners; sunset losers" },
      ],
    },
  ],
  footer:
    "This pack is informational. Auxiliary services should confirm planograms with campus dietitian + student-affairs leadership before launch. Operator capability claims should be verified through reference calls at peer institutions and through written attestation before contract execution.",
});

console.log("wrote " + "career-center-and-gym-vending-on-campus");
