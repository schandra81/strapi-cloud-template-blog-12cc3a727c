import { seedPost, tldr, decisionTree, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("what-to-do-if-a-location-is-underperforming", [
  tldr({
    heading: "What should an operator do if a vending location is underperforming?",
    paragraph:
      "Underperformance has root causes; structured diagnosis precedes action. First step: define underperforming — net contribution below operator threshold (typically <$100 monthly net at $800 mid-traffic placement, or below 12-month projected revenue by 30%+). Second: diagnose with telemetry + service-log review + planogram analysis + host conversation. Common root causes: stale planogram (no rotation 6+ months — fix with quarterly rotation + dietary-restricted depth + seasonal SKUs); high-stockout placement-zone mismatch (move to higher-traffic zone + telemetry-driven service prioritization); modern-payment gap (add EMV + contactless + mobile wallet; cash-only loses 15-25% of potential revenue at modern placements); commission or pricing misalignment (renegotiate at next renewal); host audience drift (headcount drop, occupancy drop, traffic shift — re-evaluate placement viability); equipment failure pattern (replace + upgrade to telemetry-equipped modern unit). After diagnosis, run 90-day improvement plan: defined interventions + measurable targets + monthly review. If no improvement after 90 days, decision point: relocate machine, renegotiate contract, exit placement. Operators that don't structure diagnosis + improvement plan run sub-$400 monthly underperformers for years and drag fleet economics.",
    bullets: [
      { emphasis: "Define underperforming — net contribution threshold + projection deviation:",
        text: "<$100 monthly net at $800 mid-traffic placement, or below 12-month projected revenue by 30%+. Defined threshold drives intervention." },
      { emphasis: "Diagnose root cause with telemetry + service-log + planogram + host conversation:",
        text: "Common causes: stale planogram + zone mismatch + payment gap + commission misalignment + audience drift + equipment failure." },
      { emphasis: "90-day improvement plan with monthly review + decision point:",
        text: "Defined interventions + measurable targets. If no improvement after 90 days, relocate / renegotiate / exit. Avoid running underperformers indefinitely.", },
    ],
  }),
  decisionTree({
    heading: "Should we keep this underperforming location or exit?",
    question: "After 90-day structured improvement plan, has net contribution per machine recovered to within 30% of projection?",
    yesBranch: {
      title: "Keep the placement + maintain monthly review",
      description: "Recovery to within 30% of projection indicates root cause addressed. Continue quarterly review at standard cadence. Document interventions + outcomes in CRM for future location evaluation calibration. If recovery driven by planogram rotation, build into operator playbook. If driven by zone move, build placement-zone audit into evaluation methodology.",
      finalTone: "go",
      finalLabel: "Keep + monitor",
    },
    noBranch: {
      title: "Relocate / renegotiate / exit — decision tree by root cause",
      description: "If root cause is host audience drift (headcount drop, occupancy drop, traffic shift) + no recovery path → exit at next renewal or with notice per contract. If root cause is commission / pricing misalignment + host won't renegotiate → exit. If root cause is zone mismatch + host won't relocate → relocate to qualifying zone elsewhere in portfolio. If root cause is equipment failure + retrofit infeasible → relocate to replacement-equipped placement. Document post-mortem in CRM.",
      finalTone: "stop",
      finalLabel: "Relocate / exit",
    },
  }),
  timeline({
    heading: "Underperforming location intervention — step-by-step",
    sub: "Eight-step structured intervention from diagnosis to decision. Each step has acceptance criteria.",
    howToName: "Address underperforming vending location",
    totalTime: "90-day intervention cycle + decision point at day 90",
    steps: [
      { title: "Define underperforming — measurable threshold", description: "Net contribution per machine below operator threshold (typically <$100 monthly net at $800 mid-traffic placement). Or 12-month revenue below projection by 30%+. Or churn-risk indicators (host complaints, contract renewal at risk, customer feedback negative). Document threshold + actual.", duration: "15-30 minutes review" },
      { title: "Diagnose with telemetry + service logs", description: "Telemetry data: per-SKU sales, stockout incidents, payment-type mix, time-of-day demand pattern, service-visit frequency, cash-vs-card mix. Service logs: stockout history, mechanical failure history, planogram-change history. Identify pattern: stale planogram, zone mismatch, payment gap, equipment issue.", duration: "1-2 hours data review" },
      { title: "Walk the placement at peak + off-peak", description: "Re-walk the placement at peak hour and off-peak. Verify current traffic patterns vs initial evaluation. Confirm placement zone still appropriate. Check current vending competition (other operators, food court, convenience store nearby). Document observations.", duration: "60-90 minutes 2 visits" },
      { title: "Talk to the host", description: "Host conversation: facility manager, property manager, GC, store manager, concession office. Ask about headcount / occupancy / traffic changes, host satisfaction, customer complaints, contract renewal expectations, willingness to renegotiate commission / contract terms. 30-45 minutes.", duration: "30-45 minutes" },
      { title: "Develop 90-day intervention plan", description: "Defined interventions matched to root cause: planogram rotation, zone relocation within facility, modern payment upgrade, equipment swap, commission renegotiation. Measurable targets: net contribution recovery, stockout reduction, sales velocity lift. Monthly review cadence.", duration: "60-90 minutes plan development" },
      { title: "Execute interventions in first 30 days", description: "Implement interventions: planogram rotation + dietary-restricted depth + seasonal SKUs, zone relocation within facility (host coordination), modern payment retrofit, equipment swap + telemetry upgrade. Document at start; track daily telemetry.", duration: "30 days execution + telemetry tracking" },
      { title: "Monthly review at day 30 + day 60", description: "Review at day 30 + day 60: telemetry data, sales velocity, customer feedback, host feedback. Adjust interventions if data warrants. If trending recovery, continue. If no improvement, escalate to relocation / exit consideration at day 90.", duration: "60 minutes per monthly review" },
      { title: "Day-90 decision point", description: "Net contribution per machine measured. If within 30% of projection or improving toward, keep + standard monthly review. If no improvement, decision: relocate machine, renegotiate contract, exit placement. Document post-mortem in CRM for future evaluation calibration.", duration: "60-90 minutes decision + documentation" },
    ],
  }),
  specList({
    heading: "Underperformance root cause specifications",
    items: [
      { label: "Stale planogram — no rotation 6+ months", value: "Modern operators rotate planogram quarterly + seasonally + by audience feedback. Stale planogram drives velocity decline 15-25%. Fix: quarterly rotation + dietary-restricted depth + seasonal SKUs (Q1 nutrition resolution, Q4 holiday treats) + audience-feedback-driven swap-in / swap-out. Track planogram-rotation date in operator dashboard." },
      { label: "Placement-zone mismatch — wrong zone within facility", value: "Initial placement at low-traffic zone of facility (back corridor, parking garage stairwell, dead-space mezzanine). Move to higher-traffic zone (cafeteria perimeter, main entrance, anchor adjacency). Coordinate with host. Telemetry-driven service prioritization once relocated." },
      { label: "Modern payment gap — cash-only or partial-modern", value: "Cash-only machines lose 15-25% of potential revenue at modern placements. Partial-modern (EMV only, no contactless / no mobile wallet) loses 5-10%. Retrofit modern payment (EMV + contactless + Apple Pay / Google Pay / Samsung Pay). Hardware cost $400-$1,200 per machine + payment processing $25-$40 monthly. Typically pays back within 6-12 months." },
      { label: "Commission or pricing misalignment", value: "Commission rate above operator economic threshold (>15% at low-traffic placement) produces loss-making. Renegotiate at renewal or earlier with data. Pricing too low (below local convenience-store / food court anchor) leaves revenue on table; adjust pricing with telemetry justification. Modern operators run pricing audit annually." },
      { label: "Host audience drift — headcount, occupancy, traffic", value: "Office headcount drop (downsizing, hybrid work). Apartment occupancy drop. Mall traffic shift away from anchor. Construction phase wind-down. Audience drift may not be recoverable; verify with documented data (HR roster, property roster, footfall data). If unrecoverable, plan exit + portfolio rebalance." },
      { label: "Equipment failure pattern — repeated mechanical / payment issues", value: "Equipment-failure-driven stockouts + payment outages + customer complaints. Modern telemetry surfaces failure pattern. Aging equipment (10+ years), discontinued model, no telemetry-equipped retrofit path → swap with modern unit + telemetry. Equipment cap-ex $3K-$8K per machine; typically pays back within 12-18 months." },
      { label: "Competition from new vending / micro-market in facility", value: "New competing vending machine, micro-market, AI cooler wall, expanded café in facility shifts demand. Re-evaluate placement role. Sometimes complementary (vending + micro-market serve different audiences); sometimes cannibalizing (exit or relocate). Coordinate with host on facility amenity strategy." },
      { label: "Service cadence misalignment", value: "Service cadence too long for placement velocity produces stockouts + customer dissatisfaction + revenue loss. Telemetry-driven service prioritization fixes; daily route reprioritization based on per-machine fill level + days-to-empty. Modern operators run telemetry-driven; legacy operators run fixed-route + miss high-velocity placements.", },
    ],
  }),
  tipCards({
    heading: "Six underperformance-intervention mistakes",
    sub: "All preventable with structured diagnosis + 90-day improvement plan + day-90 decision discipline.",
    items: [
      { title: "Running underperformers indefinitely without diagnosis", body: "Operators that don't structure underperformance diagnosis run sub-$400 monthly placements for years. Drag fleet economics + service load. Quarterly portfolio review surfaces underperformers; 90-day structured intervention cycle drives recovery or exit. Don't drift." },
      { title: "Single intervention without root-cause diagnosis", body: "Operators that swap planogram without diagnosing root cause often miss zone mismatch + payment gap + audience drift. Diagnose first; intervene matched to root cause. Generic 'try a different planogram' rarely fixes structural placement issues." },
      { title: "Skipping the host conversation", body: "Host knows audience changes (headcount drop, occupancy drop, traffic shift) before operator notices in revenue data. 30-45 minute host conversation surfaces non-telemetry context: facility plans, audience trends, competitive landscape, renewal expectations. Inform intervention." },
      { title: "No measurable targets in intervention plan", body: "'Improve performance' isn't a target. Defined targets: net contribution recovery to projection, stockout incidents below threshold, sales velocity lift X%, payment-type mix shift. Without targets, intervention drifts + day-90 decision lacks data. Modern operators define targets at intervention start." },
      { title: "Sunk-cost reluctance to exit", body: "Operators that sunk-cost low-traffic placements + invested in equipment / planogram / commission rate sometimes refuse to exit even after 90-day intervention fails. Net contribution drives decision, not sunk cost. Document post-mortem; rebalance portfolio." },
      { title: "No post-mortem documentation", body: "Underperformance + intervention + outcome data informs future evaluation calibration. Document: original projection, actual revenue, root cause, intervention, outcome, decision. Modern operators build evaluation methodology from post-mortem data; legacy operators repeat mistakes.", },
    ],
  }),
  inlineCta({
    text: "Want the underperformance intervention framework (diagnosis + 90-day plan + decision point)?",
    buttonLabel: "Get the intervention framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operators diagnosing and addressing underperforming placements across office, apartment, hospital, campus, construction, retail, and airport contexts — including telemetry-driven diagnosis, 90-day intervention planning, host conversation methodology, and day-90 relocate-or-exit decisions. The frameworks reflect operator-side intervention data and outcomes.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What counts as an underperforming vending location?", answer: "Net contribution per machine below operator threshold (typically <$100 monthly net at $800 mid-traffic placement). Or 12-month revenue below projection by 30%+. Or churn-risk indicators (host complaints, contract renewal at risk, customer feedback negative). Defined threshold drives intervention.", audience: "Operators" },
      { question: "What are the common root causes?", answer: "Stale planogram (no rotation 6+ months) + placement-zone mismatch + modern-payment gap + commission or pricing misalignment + host audience drift (headcount, occupancy, traffic) + equipment failure pattern + competition from new vending in facility + service cadence misalignment. Diagnose before intervening.", audience: "Operators" },
      { question: "How do we diagnose?", answer: "Telemetry data + service logs + peak + off-peak placement walk + host conversation. Telemetry surfaces planogram + payment + service patterns. Service logs surface equipment + stockout patterns. Walk verifies zone + traffic patterns. Host conversation surfaces audience + facility context. Combine for root cause.", audience: "Operators" },
      { question: "What's a typical intervention plan?", answer: "90-day structured plan with defined interventions matched to root cause + measurable targets + monthly review. Day 30 + day 60 reviews; day 90 decision point. Interventions: planogram rotation, zone relocation, modern payment retrofit, equipment swap, commission renegotiation.", audience: "Operators" },
      { question: "When should we exit a placement?", answer: "After 90-day intervention fails + root cause unrecoverable (host audience drift, no renegotiation path, no relocation option). Exit at next renewal or with notice per contract. Document post-mortem. Operators that sunk-cost reluctance run underperformers indefinitely; net contribution drives decision.", audience: "Operators" },
      { question: "What about commission renegotiation?", answer: "Commission rate above operator economic threshold (>15% at low-traffic placement) produces loss-making. Renegotiate at renewal or earlier with telemetry-driven data. Modern operators present data-backed renegotiation; legacy operators don't. Sometimes commission drop unlocks placement viability.", audience: "Operators" },
      { question: "What's the modern-payment retrofit cost?", answer: "EMV + contactless + Apple Pay / Google Pay / Samsung Pay retrofit $400-$1,200 per machine hardware + $25-$40 monthly payment processing subscription. Cash-only loses 15-25% of potential revenue at modern placements; typically pays back within 6-12 months. Often the first intervention to consider.", audience: "Operators" },
      { question: "How do we avoid underperformance in the first place?", answer: "Structured location evaluation before signing (documented headcount + site walk + accessibility + revenue projection + NPV). 40-60% of evaluated locations should fail evaluation and not advance to proposal. Quarterly portfolio review surfaces drift early. Modern operator capability + portfolio discipline.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator practice", url: "https://www.namanow.org/", note: "Industry trade association covering placement performance and operator intervention" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry diagnostic platforms", url: "https://www.cantaloupe.com/", note: "Modern operator telemetry platforms supporting underperformance diagnosis" },
      { label: "Vending Times — operator practice + underperformance coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering placement intervention and exit benchmarks" },
      { label: "FTC — Business Opportunity Rule", url: "https://www.ftc.gov/legal-library/browse/rules/business-opportunity-rule", note: "Federal regulation covering vending placement and contract practice" },
      { label: "Vending Market Watch — operator portfolio coverage", url: "https://www.vendingmarketwatch.com/", note: "Trade publication covering operator portfolio review and placement economics" },
    ],
  }),
  relatedGuides({
    heading: "Related vending placement guides",
    items: [
      { eyebrow: "Sister guide", title: "How to evaluate a vending location", description: "Nine-step structured evaluation methodology with NPV-based go / no-go decision.", href: "/vending-machine-locators/how-to-evaluate-a-vending-location" },
      { eyebrow: "Operations", title: "Best locations for vending machines", description: "Placement type guidance, headcount thresholds, and revenue benchmarks across placements.", href: "/vending-machine-locators/best-locations-for-vending-machines" },
      { eyebrow: "Hub", title: "All vending locator guides", description: "Lead generation, evaluation, intervention, exit, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
