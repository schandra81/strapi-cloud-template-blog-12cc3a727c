import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-vending-campus-events",
  assetType: "playbook",
  title: "Campus Seasonal Vending Playbook",
  subtitle: "Calendar pivots, planogram shifts, and route schedules across the academic year",
  intro:
    "University campus vending has more demand variability than almost any other placement. Move-in surge, finals weeks, breaks, summer minimum-staffing, and event tentpoles each shift velocity 30-60% in days. This playbook codifies the calendar-aligned planogram shifts, route schedules, and equipment-rightsizing actions that keep service quality high without burning operator margin on dead-air weeks. It maps to standard NAMA service KPIs, FALCPA allergen labeling, ADA Section 309.4, and the wellness-program healthy-share floors common in campus dining agreements.",
  sections: [
    {
      heading: "1. Academic-year calendar grid",
      paragraph:
        "Build the program calendar against the registrar's academic calendar, not a generic fiscal year. Account for quarter vs. semester systems, summer session intensity, and athletic-event tentpoles.",
      headers: ["Window", "Duration", "Velocity profile", "Planogram + cadence action"],
      rows: [
        ["Move-in / orientation", "10-14 days", "Surge: 130-180% of school-session baseline", "Full breadth + extra grab-and-go + bottled water surge"],
        ["School session (steady)", "8-12 weeks", "Baseline", "Standard planogram + 2-3x/week cadence"],
        ["Midterm window", "1-2 weeks", "110-130% of baseline", "Caffeine + study-snack surge"],
        ["Finals week", "1-2 weeks", "130-160% of baseline at study placements", "Caffeine + comfort-food + 24/7 cadence at libraries"],
        ["Winter break", "3-4 weeks", "20-30% of baseline", "Reduce cadence; pull short-shelf-life; close low-occupancy machines"],
        ["Spring session", "12-14 weeks", "Baseline", "Iced/RTD weighting increases through term"],
        ["Spring finals + commencement", "2 weeks", "Surge then dropoff", "Caffeine + commencement-day water + grab-and-go"],
        ["Summer session", "8-10 weeks", "30-50% of baseline; concentrated", "Consolidate to fewer machines; same-store-style planogram"],
      ],
    },
    {
      heading: "2. Move-in / orientation playbook",
      items: [
        { number: 1, title: "Pre-arrival (T-minus 7 days)", description: "Stock to 120% of normal across residence-hall machines. Add bottled water at every machine. Confirm cashless rails (parents tap-pay)." },
        { number: 2, title: "Move-in day(s)", description: "Surge route — operator field rep on-site, telemetry-driven 2x/day top-off. Refund/feedback channel publicized at orientation. Bottled water + iced beverage focus." },
        { number: 3, title: "Orientation week", description: "Maintain elevated cadence. Survey new students for SKU requests; queue for first quarterly refresh." },
        { number: 4, title: "Settle to baseline (T+10 days)", description: "Return to standard cadence. Document velocity in QBR; identify outlier machines for further investigation." },
      ],
    },
    {
      heading: "3. Finals / midterm pivots",
      items: [
        { check: "Increase caffeinated allocation 20% at study libraries and 24/7 study lounges T-21 days before finals." },
        { check: "Double restock cadence at library + study placements T-14 days." },
        { check: "Add large-format (16-20 oz) energy + RTD coffee where slot depth allows T-7 days." },
        { check: "Add comfort-food + meal-replacement SKUs at residence-hall machines (clif, RXBAR, instant noodles)." },
        { check: "Hot-brew machine stocked at 2x normal cadence; stale-product disposal documented." },
        { check: "Post-finals (T+3 days): revert to baseline; pull large-format and short-shelf-life SKUs before break." },
      ],
    },
    {
      heading: "4. Break-period rightsizing",
      paragraph:
        "Winter break (3-4 weeks) and summer (8-10 weeks) carry the program's biggest shrink and dead-air risk. Three options scale operator effort to demand.",
      items: [
        { label: "Option A — close low-occupancy machines", value: "Power off + signage at residence-hall machines that drop below 20 transactions/week. Restock pause; resume at next school session." },
        { label: "Option B — reduced-cadence service", value: "1x/week cadence; pull short-shelf-life and fresh; maintain core shelf-stable SKUs only. Best for academic buildings that remain partially occupied." },
        { label: "Option C — consolidate to anchor machines", value: "Designate 1-2 machines per zone as 'break service'; communicate to remaining residents/staff. Other machines paused." },
      ],
    },
    {
      heading: "5. Event + tentpole calendar",
      items: [
        { check: "Athletic tentpoles (home football, basketball, hockey) — pre-event stock-up at adjacent placements; sports drinks + water + snacks; restock evening-after." },
        { check: "Commencement — large-format water + grab-and-go at venue-adjacent machines; refund slip + operator-app channel publicized for guests." },
        { check: "Admissions / open-house weekends — full breadth at student-union and tour-route machines; cashless verified." },
        { check: "Concerts / performing-arts series — pre-event stock at venue-adjacent machines; clean disposal route after evening events." },
        { check: "Conference / summer-program hosting — short-term planogram pivot to general-public preferences (bottled water, classic snack SKUs) for 1-2 weeks." },
      ],
    },
    {
      heading: "6. Healthy-share + dietary requirements",
      items: [
        { check: "Healthy-share floor maintained year-round at ≥ 30% (NANA threshold: ≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from fat); seasonal pivots cannot displace this floor." },
        { check: "Allergen labeling per FALCPA on every SKU; allergen summary signage on machine face; allergen-flag opt-in for app members." },
        { check: "Halal / kosher / vegetarian SKUs identified where placement student population includes these preferences. Inventory tracked separately." },
        { check: "Sugar-free + low-sugar SKUs at every placement; flagged for diabetic students." },
        { check: "Dining-coordination — vending planogram aligns with campus dining wellness policy; no parallel-pricing that undercuts dining wellness offerings." },
      ],
    },
    {
      heading: "7. KPIs + QBR cadence",
      items: [
        { label: "Uptime", value: "≥ 98% per machine, 90-day rolling. Standard NAMA-aligned target." },
        { label: "Stockout per placement type", value: "≤ 4/machine/quarter at study + residence; ≤ 6 at academic buildings (acceptable due to event-traffic spikes)." },
        { label: "Velocity per slot, seasonal-indexed", value: "Operator benchmarks against comparable campus placements; indexed for school-session vs. break." },
        { label: "Shrink + waste during breaks", value: "≤ 3% of restock value, measured per break period." },
        { label: "Refund rate", value: "≤ 2% of transactions; higher refund weeks investigated within 14 days." },
        { label: "NPS (student survey)", value: "+30 minimum; surveyed twice yearly (mid-fall, mid-spring)." },
      ],
    },
    {
      heading: "8. Operator + host QBR template — campus version",
      items: [
        { check: "Per-window velocity (move-in, midterm, finals, break, summer) vs. prior year." },
        { check: "Stockout incidents by window + machine." },
        { check: "Healthy-share consumption — % of transactions on healthy-flagged SKUs vs. floor." },
        { check: "Event-coverage performance — venue-adjacent machine uptime + stockout during events." },
        { check: "Shrink / waste during winter + summer breaks." },
        { check: "Member feedback themes (residence life, athletics, dining liaisons)." },
        { check: "Planogram-refresh proposal for next quarter, with expected velocity lift." },
        { check: "Action items, owner, due date." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Campus beverage exclusives, dining-services contracts, and athletic-sponsor agreements may constrain planogram changes; coordinate with the agreement holder where one is in effect.",
});

console.log("wrote "+"seasonal-vending-campus-events");
