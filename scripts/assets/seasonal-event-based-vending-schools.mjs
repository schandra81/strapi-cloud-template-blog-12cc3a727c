import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-event-based-vending-schools",
  assetType: "playbook",
  title: "Seasonal School Vending Playbook",
  subtitle: "Seven planning cycles, academic calendar coordination, event-day surge protocols",
  intro:
    "School vending demand is not uniform — it spikes for back-to-school, fall sports, semester finals, winter performance season, state testing, spring sports, and graduation. This playbook codifies the seven planning cycles, the academic calendar coordination protocols, and the event-day surge protocols that keep machines stocked during peak and lean when traffic disappears.",
  sections: [
    {
      heading: "1. The seven planning cycles",
      headers: ["Cycle", "Window", "Demand pattern", "Operator action"],
      rows: [
        ["C1 — Back-to-school", "2 weeks pre-start through Sep 30", "Surge: new-student exploration + welcome events", "Pre-position fresh planogram; 4-5 visits/week first 4 weeks"],
        ["C2 — Fall sports + homecoming", "Sep through Nov", "Surge: game-day + tournament-day at gym/athletic placements", "Event-aligned surge restock; expand electrolyte + sports nutrition"],
        ["C3 — Semester finals", "Late Nov + early Dec / late Apr + early May", "Surge: library + study spaces; caffeine + study-fuel weighted", "Expand caffeine + protein; library + media-center surge restock"],
        ["C4 — Winter break + performance season", "Dec 15 through Jan 7", "Lean: most school empty; performance + sports tournament traffic only", "Scale restock to 1/week or pause; reposition for performance events"],
        ["C5 — State testing", "Late Feb through early May (per state)", "Surge: testing-week mornings; brain-fuel weighted", "Per-state testing calendar; expand protein bars + low-sugar"],
        ["C6 — Spring sports + prom", "Mar through May", "Surge: outdoor sports + prom-week", "Outdoor placement surge; expand hydration + electrolyte"],
        ["C7 — Graduation + summer transition", "Late May through August", "Lean: most school empty; summer-school + tournament only", "Scale to 0-1 visit/week; planogram refresh for fall"],
      ],
    },
    {
      heading: "2. Academic calendar coordination",
      paragraph:
        "Each district publishes an academic calendar with school days, holidays, parent-teacher conferences, testing dates, and event dates. Operator integrates this calendar into route planning so restock cadence flexes with traffic.",
      items: [
        { number: 1, title: "Calendar import", description: "District provides academic calendar (ICS or CSV) at start of school year; operator imports into route-planning system (Vendsoft, VendingMetrics, VendMAX) for the year." },
        { number: 2, title: "Surge calendar overlay", description: "Athletic + activity + testing schedules layered onto academic calendar; restock cadence flexes per placement per event." },
        { number: 3, title: "Closure flagging", description: "Holidays + breaks + early-dismissal days flagged; operator suspends restock + dispatches PM visits during longer closures." },
        { number: 4, title: "Calendar change notification", description: "District notifies operator of calendar changes (weather closures, schedule changes) by 6 AM same-day; operator adjusts route." },
      ],
    },
    {
      heading: "3. Event-day surge protocols",
      paragraph:
        "Home games, tournaments, graduation, prom, and performances drive 3-5x normal traffic at the corresponding placement. Surge protocol pre-positions stock + adds same-day restock.",
      items: [
        { check: "Game-day gym placement — pre-stock day-before; same-day mid-game top-off; expand electrolyte + sports nutrition + grab-and-go" },
        { check: "Tournament weekend — daily restock through tournament; portable backup machine if traffic 2x+ normal capacity" },
        { check: "State / regional testing week — testing-morning restock; expand protein bars + low-sugar + water at testing-room-adjacent placements" },
        { check: "Performance night (band, drama) — afternoon restock for evening crowd; expand mainstream snack + beverage at performance-venue placements" },
        { check: "Graduation week — daily restock; portable backup at outdoor ceremony venue with shaded power source" },
        { check: "Prom / dance — evening top-off; expand mainstream + hydration at venue-adjacent placement" },
        { check: "Welcome week / orientation — daily restock; planogram refresh for new students" },
      ],
    },
    {
      heading: "4. Planogram by season",
      headers: ["Season", "Weight shift", "Featured SKUs"],
      rows: [
        ["Back-to-school + welcome week", "Variety + exploration", "Mix of mainstream + new + Smart Snacks-compliant launch SKUs"],
        ["Fall sports", "Hydration + electrolyte", "Gatorade, Liquid IV, Body Armor, water"],
        ["Finals + study weeks", "Caffeine + protein + study-fuel", "Cold brew (HS), nuts, protein bars, low-sugar snacks"],
        ["Winter performance season", "Comfort + warm-beverage", "Hot coffee, hot cocoa, comfort snack, soup"],
        ["State testing", "Brain-fuel + low-sugar", "Nuts, RXBAR, Lärabar, water, low-sugar yogurt"],
        ["Spring sports + outdoor", "Hydration + electrolyte (intensified)", "Same as fall sports + outdoor electrolyte"],
        ["Graduation + transitions", "Celebration + variety", "Mainstream + premium for events"],
      ],
    },
    {
      heading: "5. Smart Snacks compliance — seasonal overlay",
      paragraph:
        "Seasonal planogram changes must continue to pass 7 CFR §210.11 during school day. Operator + district nutrition services review every seasonal planogram before launch.",
      items: [
        { check: "Pre-season planogram submitted to district nutrition services 2 weeks before launch" },
        { check: "Each new SKU has Smart Snacks Product Calculator result + USDA-aligned vendor attestation on file" },
        { check: "After-school + event-day planogram (when Smart Snacks doesn't apply) clearly distinguished in plan-of-record" },
        { check: "Faculty-only placement planogram (Smart Snacks doesn't apply) clearly distinguished" },
        { check: "Quarterly compliance audit covers every seasonal SKU rotated through the prior quarter" },
      ],
    },
    {
      heading: "6. Operational support structure",
      items: [
        { label: "Restock cadence — peak weeks", "value": "4-5 visits/week at high-traffic placements; daily for event-day surge." },
        { label: "Restock cadence — lean weeks", value: "0-1 visit/week during winter / summer break; PM visits scheduled during these windows." },
        { label: "Service SLA — Tier 1", value: "Offline, cold-chain, payment — <24 hr ack + <24 hr resolution." },
        { label: "Event-day SLA add-on", value: "Same-day top-off pre-game / pre-event; emergency restock <4 hr if portable backup needed." },
        { label: "Refund flow", value: "Refund via app, on-machine touchpad, or front-office. Quarterly refund report; event-day refund spike investigated." },
      ],
    },
    {
      heading: "7. KPI scorecard",
      headers: ["Metric", "Target", "Reporting"],
      rows: [
        ["Uptime peak weeks", "≥ 99%", "Weekly"],
        ["Uptime lean weeks", "≥ 95% (or paused)", "Monthly"],
        ["Event-day stockout rate", "≤ 5% of facings", "Per-event"],
        ["Smart Snacks compliance", "100%", "Per-SKU; quarterly"],
        ["Tier 1 resolution time", "< 24 hr", "Monthly"],
        ["Refund rate", "< 2%", "Quarterly"],
        ["Seasonal planogram approval lead time", "≥ 2 weeks", "Per season"],
      ],
    },
  ],
  footer:
    "LetUsVending is equipped to coordinate operator selection, academic calendar integration, seasonal planogram approval, and event-day surge protocols for K-12 + higher-ed school vending.",
});

console.log("wrote "+"seasonal-event-based-vending-schools");
