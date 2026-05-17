import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gamification-campus-vending-rewards",
  assetType: "guide",
  title: "Campus Vending Gamification Program Design Guide",
  subtitle: "Integration architecture, benefit design, measurement, and operator scoping",
  intro:
    "Use this guide to design a gamification + rewards program tied to campus vending. Well-designed gamification can lift cashless conversion 15-25% and average ticket 5-12% (industry benchmarks from Cantaloupe, Nayax, and 365 Retail Markets case data), while also serving institutional goals around wellness, food security, and student engagement. Bad design rewards bad behavior — this guide covers both sides.",
  sections: [
    {
      heading: "1. Integration architecture",
      paragraph:
        "Three integration layers determine what is technically possible: payment, identity, and content.",
      items: [
        { label: "Payment integration", value: "Vending operator's payment platform (Apple Pay / Google Pay / NFC + chip) must support promotional pricing rules and points accrual. Confirm operator's platform — Cantaloupe Seed, Nayax Engagement, 365 Retail Markets, or comparable." },
        { label: "Identity integration", value: "Pseudonymous token from campus card platform (Blackboard, CBORD, TouchNet, Atrium) so accrual ties to a student without exposing PII to operator. FERPA-aligned data minimization." },
        { label: "Content + reward integration", value: "Reward catalog hosted in campus app or operator app; redemption flow either a one-tap at machine or a code-generated voucher. Confirm UX before launch." },
      ],
    },
    {
      heading: "2. Benefit design",
      paragraph:
        "Benefit design separates programs that build habit from programs that subsidize buyers who would have bought anyway. The framework below mixes accrual + activity rewards.",
      headers: ["Reward type", "Mechanic", "Best for"],
      rows: [
        ["Accrual (points per dollar)", "Earn N points per $; redeem at threshold (e.g., $25 = 1 free drink)", "Drives baseline cashless conversion + repeat use"],
        ["Streak (consecutive-day or visit)", "Maintain N-day streak; bonus point or unlock", "Habit formation; useful for wellness goals"],
        ["Challenge (category-specific)", "Buy from 3 healthy categories in 1 week; unlock reward", "Drives mix shift toward wellness-aligned SKUs"],
        ["Time-of-day micro-reward", "10% off between 7-9 AM (breakfast push)", "Smooths velocity, builds morning habit"],
        ["Social / cohort", "Residence-hall cohort competition; top hall earns vending credit pool", "Engagement + community-building"],
        ["Wellness-tied", "Integration with rec-center check-in (worked out + vending purchase same day = bonus)", "Reinforces wellness behavior"],
      ],
    },
    {
      heading: "3. Anti-pattern guard",
      paragraph:
        "Gamification can backfire. Watch for these.",
      items: [
        { check: "Avoid rewards that drive over-consumption of high-calorie / high-sugar SKUs. Cap daily redemptions; weight reward catalog toward water + balanced SKUs." },
        { check: "Avoid rewards that disadvantage low-income students. Open accrual to all transactions including SNAP-WIC where supported; never require minimum spend to participate." },
        { check: "Avoid identifiable individual leaderboards. Cohort or anonymous-percentile only; protects FERPA + student dignity." },
        { check: "Avoid time-locked rewards that exclude shift students or evening attendees. Multiple redemption windows preferred." },
        { check: "Avoid mandatory app download. Provide tap-and-go fallback for students without smartphone access." },
      ],
    },
    {
      heading: "4. Measurement framework",
      items: [
        { number: 1, title: "Baseline metrics (pre-launch)", description: "Cashless conversion %, average ticket, units per transaction, monthly active token count, category-mix %." },
        { number: 2, title: "Engagement metrics (post-launch)", description: "Token enrollment %, redemption rate, repeat-redemption rate, streak length distribution, challenge-completion rate." },
        { number: 3, title: "Mix-shift metrics", description: "% of units in healthy-category SKUs pre- vs. post-launch; correlate with wellness-tied challenges." },
        { number: 4, title: "Revenue metrics", description: "Average ticket lift; UPT lift; net revenue lift after reward cost; payback period on program operating cost." },
        { number: 5, title: "Equity metrics", description: "Enrollment + redemption by college, by year, by Pell-status (institutional aggregate only). Ensures program isn't concentrating benefit on already-advantaged students." },
      ],
    },
    {
      heading: "5. Operator scoping checklist",
      items: [
        { check: "Operator's platform supports promotional pricing rules (time-of-day, category-specific, code-redemption)." },
        { check: "Operator integrates with campus card platform via documented API (Blackboard / CBORD / TouchNet / Atrium)." },
        { check: "Operator provides telemetry-level data on redemption events (FERPA-aligned aggregate)." },
        { check: "Operator's app or campus-app integration UX tested with student focus group before launch." },
        { check: "Reward cost (foregone revenue + administrative cost) shared between institution + operator per signed schedule." },
        { check: "Quarterly review cadence with student affairs, auxiliary services, and operator to refresh challenge catalog." },
      ],
    },
    {
      heading: "6. Launch + iteration cadence",
      items: [
        { label: "Pilot (Months 1-3)", value: "Launch with 2-3 mechanics (accrual + 1 challenge); measure baseline lift; gather student-focus-group feedback." },
        { label: "Scale (Months 4-6)", value: "Roll out across full vending network; add wellness-tied + cohort mechanics." },
        { label: "Iterate (ongoing)", value: "Refresh challenge catalog quarterly; sunset mechanics that don't deliver mix-shift or engagement; add seasonal moments (finals, orientation, homecoming)." },
        { label: "Annual review", value: "Full program review with student affairs, dining, auxiliary, and operator; renew or restructure based on outcomes." },
      ],
    },
  ],
  footer:
    "Informational guide — confirm with student affairs, FERPA + IT security, and operator before launch. Reward economics should be modeled before commitment.",
});

console.log("wrote "+"gamification-campus-vending-rewards");
