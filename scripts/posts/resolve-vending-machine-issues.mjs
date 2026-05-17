import { seedPost, tldr, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("resolve-vending-machine-issues", [
  tldr({
    heading: "How do operators resolve vending machine issues — full workflow?",
    paragraph:
      "Vending issue resolution workflow: telemetry-driven detection (anomaly identified within 5-60 minutes of fault) → operator SOC triage (categorize fault: mechanical, refrigeration, payment, electrical, telemetry, software, vandalism, planogram) → service ticket creation (assigned priority + parts requirement) → driver dispatch (with on-truck parts where possible) → resolution at machine (typical 24-48 hours non-parts, 5-7 days with back-order parts) → telemetry verification (machine returned to service) → post-resolution reporting (CMMS log + customer-facing communication where applicable). Modern operators run telemetry-driven proactive workflow; legacy operators react to customer complaints. Customer-side: auto-refund via telemetry-detected failure (within 1 hour modern best practice), visible service contact on machine (phone + QR + email), customer-initiated refund within 24-48 hours response standard. Build issue resolution workflow into operator service contract with performance SLA + reporting cadence + escalation path.",
    bullets: [
      { emphasis: "Telemetry-driven proactive workflow modern standard:",
        text: "Anomaly detection → SOC triage → service ticket → driver dispatch → resolution → verification → reporting. Modern operators run; legacy operators react to customer complaints." },
      { emphasis: "24-48 hour resolution non-parts; 5-7 days with parts:",
        text: "On-truck parts inventory reduces resolution time. Modern operator standard. Build SLA into operator contract with performance bonus / penalty." },
      { emphasis: "Auto-refund via telemetry within 1 hour:",
        text: "Customer doesn't initiate; operator detects + refunds. Eliminates support friction. Modern best practice; verify operator capability at proposal demo.", },
    ],
  }),
  timeline({
    heading: "Vending issue resolution workflow",
    sub: "End-to-end from fault detection to resolution + verification + reporting. Modern operators run integrated workflow.",
    howToName: "Resolve a vending machine issue",
    totalTime: "5 minutes to 7 days depending on fault type",
    steps: [
      { title: "Telemetry-driven fault detection", description: "Operator SOC monitors telemetry for anomalies — failed-vend patterns, refrigeration temperature excursions, payment hardware errors, connectivity drops, unexpected access events. Anomaly identified within 5-60 minutes of fault. Modern operators have natively.", duration: "5-60 minutes" },
      { title: "SOC triage + service ticket creation", description: "SOC team categorizes fault (mechanical, refrigeration, payment, electrical, telemetry, software, vandalism, planogram) + assigns priority (P1 critical = same-day; P2 standard = 24-48 hour; P3 minor = next route stop) + parts requirement. Service ticket created in CMMS.", duration: "15-30 minutes" },
      { title: "Auto-refund (if applicable)", description: "If telemetry confirms failed vend, refund issues automatically to original card without customer action (within 1 hour modern best practice). Customer receives email notification. Eliminates support friction at common failure modes (jam, stuck product, payment hardware error).", duration: "Within 1 hour" },
      { title: "Driver dispatch", description: "Driver dispatched per priority + route schedule. P1 critical: same-day dispatch with on-truck parts. P2 standard: next route or 24-48 hour. P3 minor: next regular route stop. On-truck parts inventory matched to fleet model mix reduces resolution time.", duration: "Same-day to 48 hours" },
      { title: "Resolution at machine", description: "Driver troubleshoots + resolves at machine using on-truck parts where possible. Common resolutions: clear jam, replace coil, reset payment hardware, refrigerant top-off (if HVAC-certified), firmware update via telemetry. Resolution typically same-day or next-day with on-truck parts.", duration: "15 minutes - 4 hours per machine" },
      { title: "Telemetry verification + return to service", description: "Telemetry confirms machine returned to service (transactions resume + refrigeration stable + payment hardware functional). Service ticket closed in CMMS with resolution notes. Spare parts log updated.", duration: "10-30 minutes" },
      { title: "Customer-facing communication", description: "Visible service contact on machine for customer questions. Auto-refund email notification sent if applicable. Periodic 'machine back in service' messaging at high-customer-complaint placements. Modern operator best practice.", duration: "Ongoing" },
      { title: "Post-resolution reporting", description: "CMMS log + quarterly business review with host on issue patterns. Modern operators provide pre-formatted reports (response times + refund volume + complaint themes + resolution patterns). Identifies systemic issues + optimization opportunities.", duration: "Quarterly" },
    ],
  }),
  specList({
    heading: "Vending issue resolution workflow specifications",
    items: [
      { label: "Telemetry-driven fault detection", value: "Real-time anomaly detection on failed-vend patterns, refrigeration faults, payment hardware errors, connectivity drops, unexpected access events. Modern operator SOC monitors continuously. Anomaly identified within 5-60 minutes of fault. Modern standard." },
      { label: "SOC triage workflow", value: "SOC team categorizes fault into 8 categories: mechanical (jam, motor, dispenser), refrigeration (compressor, evaporator, drain), payment (EMV, contactless, cellular), electrical (breaker, surge, GFCI), telemetry (cellular, board), software (firmware, processor), vandalism (theft, damage), planogram (wrong SKU, mis-spaced). Priority assignment + parts requirement." },
      { label: "Service ticket priority assignment", value: "P1 critical: same-day resolution required (refrigeration failure, payment hardware down at high-volume placement, vandalism). P2 standard: 24-48 hour resolution (jam, common failures). P3 minor: next route stop (planogram, signage, cosmetic). Tied to SLA performance metrics." },
      { label: "Auto-refund workflow", value: "Telemetry confirms failed vend → operator system issues refund automatically to original card within 1 hour → customer receives email notification → service ticket created for underlying fault. Eliminates customer support friction at common failures. Modern best practice." },
      { label: "On-truck parts inventory", value: "Common parts on driver service truck: helical coils, motors, dispensers, payment hardware components, refrigeration sensors, cellular boards. Specialty parts (compressors, telemetry boards) 5-7 day back-order. On-truck parts reduce resolution from 5-7 days to same-day or next-day." },
      { label: "Resolution at machine", value: "Driver troubleshoots + resolves at machine. Common resolutions: clear jam, replace coil, reset payment hardware, firmware update via telemetry, refrigerant top-off (HVAC-certified), cellular reset. Telemetry confirms return to service. CMMS log updated." },
      { label: "Customer-facing communication", value: "Visible service contact on machine (phone + QR + email + machine ID). Auto-refund email notification. Operator portal for customer-initiated refund (24-48 hour response). Multi-language at international + diverse audience placements." },
      { label: "Post-resolution reporting", value: "CMMS log per service ticket. Quarterly business review with host on issue patterns: response time trends + refund volume + complaint themes + resolution patterns + recurring issues. Identifies systemic issues + optimization opportunities. Modern best practice." },
      { label: "Escalation path", value: "Service ticket → driver dispatch (24-48 hour P2) → operator account manager (if not resolved by 48 hours) → operator director-level (if not resolved by 5 days) → operator executive (rare; major service failure). Build escalation path into operator service contract.", },
    ],
  }),
  tipCards({
    heading: "Five vending issue resolution workflow mistakes",
    sub: "All preventable with telemetry-driven workflow + on-truck parts + auto-refund + reporting.",
    items: [
      { title: "Reactive workflow without telemetry", body: "Operators that wait for customer complaints to detect issues react days after problems start. Modern telemetry-driven proactive detection identifies anomalies within 5-60 minutes. Modern operators run; legacy operators react. Hard RFP requirement at modern placements." },
      { title: "No on-truck parts inventory", body: "Operators with parts only at warehouse produce 3-7 day resolution for common parts issues. On-truck parts matched to fleet model mix reduces resolution to same-day or next-day. Build on-truck parts capability into operator contract." },
      { title: "Customer-initiated refund workflow only", body: "Customer must initiate + wait 3-7 days for refund produces frustration. Modern auto-refund via telemetry-detected failure within 1 hour eliminates friction. Build auto-refund capability into operator contract; modern operators have natively." },
      { title: "No priority assignment + escalation path", body: "All service tickets treated equally produces P1 critical issues waiting + P3 minor issues blocking critical resolution. Priority assignment + escalation path (driver → account manager → director → executive) modern operator workflow. Build into contract." },
      { title: "No quarterly business review on issue patterns", body: "Operator + host quarterly review identifies systemic issues + recurring patterns + optimization opportunities. Without review, issues recur + drag service quality. Build into operator contract; modern operators support, legacy operators don't structure.", },
    ],
  }),
  inlineCta({
    text: "Want the vending issue resolution workflow framework (telemetry + SOC + auto-refund + on-truck parts + reporting)?",
    buttonLabel: "Get the issue resolution framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending issue resolution workflow design across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — including telemetry-driven detection, SOC triage, on-truck parts planning, auto-refund deployment, and quarterly business review structure. The benchmarks reflect operator-side data from current accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do operators resolve vending machine issues?", answer: "Telemetry-driven detection → SOC triage + service ticket creation → driver dispatch with on-truck parts → resolution at machine → telemetry verification → post-resolution reporting. Modern operators run integrated workflow; legacy operators react to customer complaints. Build SLA into operator contract.", audience: "Property Managers" },
      { question: "How fast should issues be resolved?", answer: "24-48 hour resolution for non-parts issues (common at best-in-class operators). 5-7 days with back-order parts (specialty refrigeration, telemetry boards). Auto-refund within 1 hour via telemetry-detected failure. P1 critical same-day; P2 standard 24-48 hour; P3 minor next route.", audience: "Procurement" },
      { question: "What's auto-refund via telemetry?", answer: "Telemetry confirms failed vend → operator system issues refund automatically to original card within 1 hour without customer action → customer receives email notification. Eliminates customer support friction. Modern best practice; verify operator capability at proposal demo.", audience: "Customers" },
      { question: "What parts should be on driver trucks?", answer: "Common parts: helical coils, motors, dispensers, payment hardware components, refrigeration sensors, cellular boards. Reduces resolution from 5-7 days (warehouse-only parts) to same-day or next-day. Modern operator standard; build into operator contract.", audience: "Operators" },
      { question: "How does priority assignment work?", answer: "P1 critical: same-day resolution required (refrigeration failure, payment hardware down at high-volume placement, vandalism). P2 standard: 24-48 hour resolution (jam, common failures). P3 minor: next route stop (planogram, signage, cosmetic). Tied to SLA performance metrics.", audience: "Operators" },
      { question: "What's the escalation path?", answer: "Service ticket → driver dispatch → operator account manager (if not resolved by 48 hours) → operator director-level (if not resolved by 5 days) → operator executive (rare; major service failure). Build escalation path into operator service contract; modern operators have structured.", audience: "Procurement" },
      { question: "How is customer-facing communication handled?", answer: "Visible service contact on machine (phone + QR + email + machine ID). Auto-refund email notification. Operator portal for customer-initiated refund (24-48 hour response). Multi-language at international + diverse audience placements.", audience: "Operators" },
      { question: "What reporting should we expect?", answer: "Quarterly business review with operator on issue patterns: response time trends + refund volume + complaint themes + resolution patterns + recurring issues. Identifies systemic issues + optimization opportunities. Modern best practice; build into operator contract.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator service standards", url: "https://www.namanow.org/", note: "Industry trade association covering vending issue resolution + service SLA" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry-driven service platforms", url: "https://www.cantaloupe.com/", note: "Cashless platforms enabling telemetry-driven fault detection + auto-refund" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Property owner standards covering vending service" },
      { label: "IFMA — facility management standards", url: "https://www.ifma.org/", note: "Facility management industry standards covering vending service workflow" },
      { label: "Vending Times — modern operator service workflow coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering modern operator service practices" },
    ],
  }),
  relatedGuides({
    heading: "Related operations + service guides",
    items: [
      { eyebrow: "Sister guide", title: "Troubleshooting vending machine issues", description: "Common issue types + root causes + resolution paths.", href: "/vending-faq/troubleshooting-vending-machine-issues" },
      { eyebrow: "Operations", title: "Vending customer service and troubleshooting", description: "Service standards, SLA, and escalation paths.", href: "/vending-for-apartments/vending-customer-service-troubleshooting" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Service workflow, performance measurement, vendor selection, operations.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
