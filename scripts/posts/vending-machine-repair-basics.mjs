import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("vending-machine-repair-basics", [
  tldr({
    heading: "What are the most common vending machine repairs and how do operators handle them?",
    paragraph:
      "Vending machine repair runs across six common failure categories: (1) Mechanical jams (coin mech, bill validator, motor brushes, spiral coil binding) — most frequent issue at 30-50% of service tickets, typically resolved in 15-45 minutes by operator/route tech, parts cost $25-$150; (2) Payment hardware failure (card reader, bill validator, cellular modem) — 15-25% of tickets, requires replacement or vendor service, $200-$700 part cost plus labor; (3) Refrigeration failure (compressor, condenser fan, thermostat, refrigerant leak) — 10-20% of tickets at refrigerated machines, $300-$800 repair cost, may require service technician; (4) Control board / electronics failure — 5-15% of tickets, $200-$500 board replacement, requires diagnostic; (5) Door / lock / security (lock cylinder, T-handle, sensor) — 5-10% of tickets, $50-$200 typical; (6) Dispense mechanism (motor, gearbox, drop sensor) — 10-15% of tickets, $75-$300 typical. Service SLA at structured accounts 24-48 hours; 12-24 hours at critical placements (healthcare, wellness room, dock office). Repair-vs-replace decision driven by equipment age — repair viable up to 12-15 years at quality new machines, 8-12 years at quality refurbished. Maintenance reserve 10-15% of revenue funds repair across machine lifespan. Modern operators use telemetry data (Cantaloupe, Nayax, 365 ADM) to predict failure (motor brush wear, payment hardware degradation, refrigeration trend) and schedule preventive maintenance; reduces unplanned downtime by 30-50%. Critical mistakes: ignoring maintenance reserve, no parts inventory at first machines, no service training for route tech, no dispatch protocol for high-priority tickets. Don't replace machine for routine repair — most repairs cost a small fraction of replacement and extend useful life by years.",
    bullets: [
      { emphasis: "Six common failure categories — mechanical / payment / refrigeration / control board / door / dispense:", text: "Mechanical jams 30-50% of tickets; payment hardware 15-25%; refrigeration 10-20%; control board 5-15%; door/lock 5-10%; dispense 10-15%. Service SLA 24-48 hr at structured accounts." },
      { emphasis: "Repair vs replace driven by machine age:", text: "Repair viable up to 12-15 years at quality new machines, 8-12 at quality refurbished. Most repairs cost a small fraction of replacement; replace only at end-of-life or repeated failure." },
      { emphasis: "Maintenance reserve 10-15% of revenue + telemetry-driven preventive:", text: "Reserve funds repair across lifespan. Telemetry data predicts failure; preventive maintenance reduces unplanned downtime 30-50%." },
    ],
  }),
  statStrip({
    heading: "Vending repair benchmarks",
    stats: [
      { number: "30-50%", label: "of service tickets are mechanical jams", sub: "most frequent category", accent: "blue" },
      { number: "24-48 hr", label: "service SLA at structured accounts", sub: "12-24 hr at critical placements", accent: "blue" },
      { number: "10-15%", label: "of revenue as maintenance reserve", sub: "funds repair across lifespan", accent: "orange" },
      { number: "30-50%", label: "unplanned downtime reduction", sub: "with telemetry-driven preventive", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Common vending repairs by category",
    sub: "Most frequent failure categories with typical repair time, parts cost, and complexity. Verify with manufacturer service manual at first occurrence.",
    headers: ["Category", "% of tickets", "Typical repair time", "Parts cost", "Complexity"],
    rows: [
      ["Mechanical jam (coin mech, bill validator)", "30-50%", "15-45 min", "$25-$150", "Operator / route tech"],
      ["Payment hardware (card reader, modem)", "15-25%", "30-90 min", "$200-$700", "Operator + vendor support"],
      ["Refrigeration (compressor, fan, thermostat)", "10-20%", "1-4 hours", "$300-$800", "Service technician"],
      ["Control board / electronics", "5-15%", "30-90 min", "$200-$500", "Operator with diagnostic capability"],
      ["Door / lock / security", "5-10%", "15-60 min", "$50-$200", "Operator / route tech"],
      ["Dispense mechanism (motor, gearbox)", "10-15%", "30-90 min", "$75-$300", "Operator / route tech"],
      ["Coin mech replacement", "5-10%", "20-40 min", "$75-$200", "Operator / route tech"],
      ["Bill validator replacement", "5-10%", "20-40 min", "$150-$400", "Operator / route tech"],
      ["Spiral / coil replacement", "5-8%", "10-30 min", "$15-$50", "Operator / route tech"],
      ["LED / lighting", "3-5%", "10-20 min", "$20-$80", "Operator / route tech"],
    ],
  }),
  specList({
    heading: "Repair playbook by category",
    items: [
      { label: "Mechanical jams — coin mech, bill validator, spiral coil", value: "Most frequent service category. Coin mech jam typically resolved by clearing rejected coins + brush cleaning. Bill validator jam from torn bills, lint, dust — clear path with compressed air, replace pickup roller if worn. Spiral coil binding from product packaging or coil bend — straighten coil or replace. Motor brush wear after 3-7 years — replace brushes ($25-$75) before motor failure. Operator/route tech resolves; parts stocked in service van." },
      { label: "Payment hardware — card reader, bill validator, cellular modem", value: "Card reader (Cantaloupe ePort, Nayax Onyx, 365 ADM) failure typically requires replacement — $400-$700 hardware plus vendor activation. Cellular modem failure $200-$450 replacement. Bill validator (MEI / Coinco / ICT) replacement $150-$400. Most modern payment hardware has 1-3 year warranty; vendor support for in-warranty replacement. Operator stocks spare modem + card reader for rapid replacement at structured accounts." },
      { label: "Refrigeration — compressor, condenser fan, thermostat", value: "Compressor failure $300-$800 (compressor + labor + refrigerant). Condenser fan motor $75-$200. Thermostat / temperature control board $100-$300. Refrigerant leak repair requires EPA-certified technician; $200-$500 typical. Refrigerated machines most common refrigeration issue at 5-8 years; preventive maintenance (clean condenser coils annually, verify thermostat operation) extends life. Service technician required for compressor and refrigerant work." },
      { label: "Control board / electronics", value: "Control board (main logic board) failure produces machine non-responsive or erratic behavior. Replacement $200-$500 plus 30-90 minute install. Diagnostic via manufacturer service manual + multi-meter testing. Modern machines often have replaceable sub-modules (display, payment interface, motor control); replacement at module level cheaper than full board. Service tech training reduces vendor dependency." },
      { label: "Door / lock / security", value: "T-handle lock failure (worn cylinder, broken key) $50-$150. Door switch or door sensor failure $50-$100. Security alarm or surveillance camera failure $100-$300. Lock cylinder replacement at operator scale routine; spare cylinders stocked. After vandalism damage — door panel replacement $200-$500 plus labor; some operators carry replacement door for rapid swap." },
      { label: "Dispense mechanism — motor, gearbox, drop sensor", value: "Vend motor failure (gearbox seizure, motor burnout) $75-$200 per coil. Drop sensor (IR beam at delivery bin) failure produces 'product not delivered' detection failure and increased dispute incidence — replacement $50-$150. Multi-vend selection switches $25-$75. Operator/route tech resolves; parts stocked in service van. Repeated motor failures may indicate planogram overload (heavy products in light-duty coils)." },
      { label: "Preventive maintenance protocol", value: "Quarterly inspection: clean condenser coils, verify thermostat operation, lubricate hinge/slide, clean payment hardware, test dispense at each coil, verify cellular signal strength. Semi-annual: replace motor brushes (preventive), inspect door seal, test backup battery. Annual: deep clean interior, verify electrical connections, test compressor performance, recalibrate payment hardware. Preventive reduces unplanned downtime 30-50%." },
      { label: "Telemetry-driven failure prediction", value: "Modern telemetry platforms (Cantaloupe, Nayax, 365 ADM) report sell-through anomalies (sudden stop at coil suggests motor failure), payment hardware degradation (transaction failure rate trends), refrigeration trend (temperature variance, compressor cycle), cellular signal degradation. Operator dashboard alerts on predictive failure; preventive maintenance scheduled before customer-impacting failure. Modern operator capability; differentiates at structured accounts." },
      { label: "Parts inventory + service spares", value: "Service van stocked with common parts: motor brushes (assorted models), spiral coils (assorted sizes), bill validator pickup rollers, coin mech parts, T-handle cylinders, fuses, light bulbs/LEDs, payment hardware cables. Inventory cost $500-$1,500 at startup; replenished from manufacturer parts catalog or 3rd-party parts distributors (Allied Vending, Vending World Parts). Reduces second-visit service incidents 60-80%." },
      { label: "Service SLA + dispatch protocol", value: "24-48 hr service SLA at structured accounts. 12-24 hr at critical placements (healthcare, wellness room, dock office, 24/7 industrial). Service ticket triage by impact: machine down (high), payment hardware down (high), single coil down (medium), cosmetic (low). Dispatch protocol documented; route tech receives tickets via dashboard. Modern operator capability; legacy operators lack." },
    ],
  }),
  timeline({
    heading: "Routine service ticket workflow",
    sub: "From initial ticket through resolution and reporting. Typical 24-48 hour SLA at structured accounts.",
    howToName: "Vending machine service ticket workflow",
    totalTime: "P2D",
    steps: [
      { label: "STEP 1", title: "Ticket intake + triage", description: "Service ticket created from telemetry alert, host call, dashboard fault code, or customer dispute. Triage by impact — machine down (high priority), payment hardware down (high), single coil down (medium), cosmetic (low). Critical placements escalate to 12-24 hr SLA. Operator dispatch routes ticket to route tech based on location and availability." },
      { label: "STEP 2", title: "Pre-arrival diagnostic", description: "Route tech reviews telemetry data and fault history before arrival. Identifies likely failure category (mechanical jam, payment hardware, refrigeration, control board, dispense). Loads service van with likely parts. Notifies host of ETA. Pre-arrival diagnostic reduces second-visit incidence 60-80%." },
      { label: "STEP 3", title: "On-site diagnostic + repair", description: "On-site: open machine, verify fault code, run diagnostic per manufacturer service manual, test components with multi-meter. Repair: replace failed component from service van parts inventory. Most mechanical/payment hardware/dispense repairs resolved in 15-90 minutes. Refrigeration and control board repairs may require return visit with specialty parts." },
      { label: "STEP 4", title: "Verification + test transaction", description: "Verify repair: test dispense at affected coils, test payment hardware with card and bill, verify telemetry data flow to dashboard, verify temperature in refrigerated machine. Test transaction at machine confirms full operation. Notify host of resolution; log ticket completion in dashboard." },
      { label: "STEP 5", title: "Documentation + reporting", description: "Document ticket in dashboard: fault category, parts replaced, labor time, dispute resolution if applicable. Monthly account report includes service ticket history + SLA performance. Quarterly review surfaces repeated-failure patterns (motor brush wear cluster, payment hardware degradation) for preventive maintenance scheduling." },
    ],
  }),
  tipCards({
    heading: "Five repair mistakes",
    sub: "Each documented in operator post-launch reviews. All preventable with disciplined service rhythm.",
    items: [
      { title: "No parts inventory at first machines", body: "Most common cause of extended downtime. Without parts inventory, every service ticket requires parts order (3-7 day lead time) + return visit. Stock $500-$1,500 service van inventory at startup: motor brushes, spiral coils, bill validator parts, coin mech parts, T-handle cylinders, fuses, payment hardware cables. Reduces second-visit incidents 60-80%." },
      { title: "Skipping preventive maintenance", body: "Operators that don't run quarterly inspection accumulate unplanned downtime. Quarterly inspection (clean condenser coils, verify thermostat, lubricate, clean payment hardware, test dispense, verify cellular) takes 30-45 minutes per machine. Preventive reduces unplanned downtime 30-50%. Build into route rhythm; document in operator playbook." },
      { title: "Replacing machine for routine repair", body: "Most repairs cost a small fraction of replacement ($25-$800 vs $4K-$15K) and extend useful life by years. Quality machines have 12-15 year lifespan with maintenance; repair viable up to age threshold. Replace only at end-of-life (15+ years), repeated failure (3+ tickets per year for similar issue), or vandalism damage. Calculate repair-vs-replace ROI at each major repair." },
      { title: "No service training for route tech", body: "Operators that don't train route tech on common repairs require vendor service for routine issues — extends downtime, increases service cost. Train route tech on mechanical jams + bill validator + coin mech + LED + spiral coil + motor brush replacement. Manufacturer service manuals + YouTube training. Reduces vendor dependency; faster resolution." },
      { title: "No dispatch protocol for high-priority tickets", body: "Critical placements (healthcare, wellness room, dock office, 24/7 industrial) need 12-24 hr SLA. Without dispatch protocol, high-priority tickets queue with routine tickets and miss SLA. Document dispatch protocol in operator playbook; route tech receives tickets via dashboard with priority flag. Modern operator capability; differentiates at structured accounts." },
    ],
  }),
  inlineCta({
    text: "Want the vending repair playbook with parts inventory + preventive schedule + dispatch protocol?",
    buttonLabel: "Get the repair playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise vending operators on repair playbook — six common failure categories with repair time + parts cost + complexity, preventive maintenance protocol, telemetry-driven failure prediction, parts inventory specification, service SLA + dispatch protocol for structured accounts. The framework reflects operator-side data from current vending placements across office, healthcare, school, industrial, and hospitality accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What are the most common vending machine repairs?", answer: "Six categories: (1) mechanical jams — coin mech, bill validator, spiral coil — 30-50% of tickets; (2) payment hardware — card reader, modem, bill validator — 15-25%; (3) refrigeration — compressor, fan, thermostat — 10-20%; (4) control board / electronics — 5-15%; (5) door / lock / security — 5-10%; (6) dispense mechanism — motor, gearbox, drop sensor — 10-15%. Most resolved by operator/route tech in 15-90 minutes.", audience: "Operators" },
      { question: "How much do repairs cost?", answer: "Mechanical $25-$150 parts. Payment hardware $200-$700. Refrigeration $300-$800. Control board $200-$500. Door / lock $50-$200. Dispense mechanism $75-$300. Maintenance reserve 10-15% of revenue funds repair across machine lifespan. Most repairs cost a small fraction of replacement; replace only at end-of-life or repeated failure.", audience: "Operators" },
      { question: "How long does a repair take?", answer: "Mechanical jams 15-45 minutes. Payment hardware 30-90 minutes. Dispense mechanism 30-90 minutes. Control board 30-90 minutes. Door / lock 15-60 minutes. Refrigeration 1-4 hours (may require service technician + return visit for specialty parts). Service SLA 24-48 hours at structured accounts; 12-24 hours at critical placements.", audience: "Operators" },
      { question: "Can I repair the machine myself?", answer: "Yes for most common repairs at operator/route tech scale. Mechanical jams, bill validator, coin mech, LED, spiral coil, motor brush replacement, door / lock all operator-level work. Refrigeration (compressor, refrigerant) requires EPA-certified technician. Control board diagnostic requires multi-meter + manufacturer service manual; replacement straightforward. Train route tech on common repairs; reduces vendor dependency.", audience: "Operators" },
      { question: "When should I replace a machine instead of repairing?", answer: "Replace at end-of-life (15+ years), repeated failure (3+ tickets per year for similar issue), vandalism damage exceeding 50% of replacement value, or technology obsolescence (no cashless payment, no telemetry capability). Most repairs cost a small fraction of replacement; quality new machines 12-15 year lifespan. Calculate repair-vs-replace ROI at each major repair; document in account file.", audience: "Operators" },
      { question: "What parts should I stock?", answer: "Service van inventory $500-$1,500 at startup: motor brushes (assorted), spiral coils (assorted sizes), bill validator pickup rollers, coin mech parts, T-handle cylinders, fuses, light bulbs/LEDs, payment hardware cables, drop sensors. Replenish from manufacturer catalogs or 3rd-party parts distributors (Allied Vending, Vending World Parts). Reduces second-visit incidence 60-80%.", audience: "Operators" },
      { question: "What's preventive maintenance for vending?", audience: "Operators", answer: "Quarterly: clean condenser coils, verify thermostat, lubricate hinge/slide, clean payment hardware, test dispense at each coil, verify cellular signal. Semi-annual: replace motor brushes preventively, inspect door seal, test backup battery. Annual: deep clean interior, verify electrical connections, test compressor performance, recalibrate payment hardware. Reduces unplanned downtime 30-50%." },
      { question: "How does telemetry help with repairs?", answer: "Modern telemetry (Cantaloupe, Nayax, 365 ADM) reports sell-through anomalies (motor failure indicator), payment hardware degradation (transaction failure trend), refrigeration trend (temperature variance), cellular signal degradation. Dashboard alerts on predictive failure; preventive maintenance scheduled before customer-impacting failure. Reduces unplanned downtime 30-50% and improves service SLA performance.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — operator service standards", url: "https://www.namanow.org/", note: "Industry trade association covering operator service + maintenance standards" },
      { label: "Vending Times — repair and equipment coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering vending equipment repair + parts sourcing + service rhythm" },
      { label: "Cantaloupe — telemetry-driven failure prediction", url: "https://www.cantaloupe.com/", note: "Telemetry platform for predictive maintenance and dashboard alerts on equipment health" },
      { label: "EPA — refrigerant handling certification", url: "https://www.epa.gov/section608", note: "Federal certification requirement for refrigerant handling in vending refrigeration repair" },
      { label: "Crane / USI / AMS — manufacturer service manuals", url: "https://www.cranems.com/", note: "Manufacturer service documentation for vending machine repair and parts reference" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Tools and software for vending businesses", description: "Telemetry platforms, dashboard tagging, dispatch protocol, route management, and service ticket tooling.", href: "/vending-business-startup/tools-and-software-for-vending-businesses" },
      { eyebrow: "Operations", title: "How to start a vending machine business", description: "Step-by-step launch sequence including equipment procurement, service training, and route operations.", href: "/vending-business-startup/how-to-start-a-vending-machine-business" },
      { eyebrow: "Hub", title: "All vending business startup guides", description: "Formation, capital, licensing, equipment, sourcing, operations, and repair across vending startup topics.", href: "/vending-business-startup" },
    ],
  }),
]);
process.exit(0);
