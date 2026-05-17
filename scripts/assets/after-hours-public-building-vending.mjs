import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "after-hours-public-building-vending",
  assetType: "pack",
  title: "After-Hours Public-Building Vending Pack",
  subtitle: "Circuit checklist, cellular telemetry spec, shift-change service protocol",
  intro:
    "Public buildings — courthouses, libraries, transit stations, recreation centers — serve workers and the public outside business hours. After-hours vending requires a different operating model than business-hours office vending: dedicated circuits, cellular telemetry independent of building Wi-Fi, and service protocols timed to building staffing windows. This pack codifies the install + service framework.",
  sections: [
    {
      heading: "1. After-hours operating profile",
      paragraph:
        "After-hours demand differs from business-hours demand on three dimensions: volume (typically 20-40% of business-hours velocity), product mix (more beverages, meal replacements, fewer fresh items), and service availability (building staffing is reduced or absent).",
      headers: ["Building type", "After-hours window", "Typical user", "Velocity share"],
      rows: [
        ["Courthouse", "Limited — security-controlled after hours", "Night staff, custodial, after-hours jury operations", "5-10% of business-hours velocity"],
        ["Library (24/7 or extended hours)", "Often 10 PM-6 AM closed; some 24/7", "Late-evening patrons, custodial", "10-20%"],
        ["Transit station", "16-24 hour operation", "Commuters, transit workers, off-peak travelers", "30-50%"],
        ["Recreation center / pool", "Early morning + evening leagues", "League players, after-school programs", "Peaks evenings 6-10 PM"],
        ["DMV / waiting area", "Standard business hours only", "—", "—"],
        ["Government office building", "Late evening custodial + occasional after-hours work", "Custodial, security, late-stay staff", "5-15%"],
      ],
    },
    {
      heading: "2. Electrical circuit checklist",
      paragraph:
        "Vending equipment requires a dedicated 20A circuit per machine (manufacturer typical). After-hours placements add specific risks — circuit cycling during janitorial shifts, breaker resets only available when staff are present.",
      items: [
        { check: "Dedicated 20A circuit per refrigerated machine (NEC 210 — branch circuit sizing)." },
        { check: "GFCI protection where required by NEC 210.8 (within 6 ft of sinks, outdoor placement, basement / unfinished space)." },
        { check: "Surge protection on circuit — power events in older public buildings are common." },
        { check: "Circuit clearly labeled in panel with placement reference (e.g., 'Vending — North Lobby')." },
        { check: "Building-automation / lighting circuits do not share with vending (avoids scheduled shutoff after hours)." },
        { check: "Emergency / generator backup decision — typically NO (vending is not life-safety); document so facility knows machine goes dark on outage." },
        { check: "After-hours breaker reset protocol documented — who has access, response time, operator notification path." },
      ],
    },
    {
      heading: "3. Cellular telemetry specification (do NOT rely on building Wi-Fi)",
      paragraph:
        "Building Wi-Fi rarely covers vending placements at usable signal, often goes down or restarts overnight, and adds an IT-coordination burden. Cellular modem on the machine is the standard.",
      items: [
        { label: "Cellular modem", value: "4G LTE Cat-M1 or LTE-M / NB-IoT preferred for low power + indoor penetration. CAT-1 acceptable. Avoid 3G (sunsetted by US carriers 2022)." },
        { label: "Carrier coverage", value: "Verify carrier signal ≥ -100 dBm RSSI at the placement before install. Modem with multi-carrier eSIM preferred for thick-wall buildings (basement courthouses, transit underground)." },
        { label: "Heartbeat cadence", value: "≤ 15 minutes. Alert threshold: 30 minutes offline triggers operator NOC alert." },
        { label: "Data plan", value: "Operator's commercial IoT plan; not on facility account. ~$3-8 per machine per month typical." },
        { label: "Antenna placement", value: "External antenna for basement or steel-cabinet placements where signal is degraded." },
        { label: "PCI scope", value: "Cellular path keeps cashless transactions off the building network — PCI scope stays with operator." },
      ],
    },
    {
      heading: "4. Shift-change + after-hours service protocol",
      paragraph:
        "Operator service visits must align with building access windows. The protocol below covers the common after-hours coordination patterns.",
      items: [
        { number: 1, title: "Building access registration", description: "Operator route drivers cleared through facility security badge / contractor-access program. Background check + ID on file per facility policy. Federal buildings: HSPD-12 / PIV-I where required." },
        { number: 2, title: "Service window definition", description: "Routine restock during business hours where building staff are present. Emergency service (offline, temperature) outside business hours via after-hours coordinator." },
        { number: 3, title: "Custodial coordination", description: "Operator schedules visits to avoid conflict with floor-cleaning / waxing cycles. Custodial supervisor notified day-of for surface coordination." },
        { number: 4, title: "Security escort policy", description: "Some facilities require escort for any contractor work after hours. Document policy in contract; cost passes through transparently." },
        { number: 5, title: "Offline / breaker-trip response", description: "If machine goes offline outside business hours, operator notifies facility next business day. Tier-1 SLA window starts at building re-opening." },
        { number: 6, title: "Cold-chain excursion (refrigerated)", description: "Temperature excursion triggers immediate alert. Facility's after-hours coordinator (security desk) notified. If unrecoverable, fresh-food product loss documented and credited." },
      ],
    },
    {
      heading: "5. Public-building procurement framing",
      paragraph:
        "Public buildings procure under state / local contract code. Vending typically falls under either a small-procurement threshold (no bid required) or a competitive RFP path.",
      items: [
        { label: "State-contract path", value: "Most states have a vending services line on the master contract schedule. Procuring from this schedule streamlines the path; pricing is pre-negotiated." },
        { label: "Local RFP path", value: "Many city / county purchasing departments issue their own RFP for buildings outside state-schedule scope. Standard RFP language applies." },
        { label: "GSA Schedule (federal)", value: "Federal buildings procure via GSA Schedule 73 (Food Service / Vending) where applicable. Coordinate with facility GSA representative." },
        { label: "Concession / no-cost contract", value: "Many public-building vending contracts are concession agreements — operator pays a commission percentage to the building / agency. No facility outlay; revenue share documented." },
      ],
    },
    {
      heading: "6. Accessibility (ADA Title II)",
      paragraph:
        "Public buildings fall under ADA Title II (state + local government services). After-hours placements still meet full ADA requirements — reach range, clear floor space, operating force.",
      items: [
        { check: "Highest operable part ≤ 48 in AFF (ADA Section 308.2.1)." },
        { check: "Lowest operable part ≥ 15 in AFF." },
        { check: "30 in × 48 in clear floor space (Section 305)." },
        { check: "Operating force ≤ 5 lbf, no tight grasping / pinching / twisting (Section 309.4)." },
        { check: "Cashless option present so users without coin/bill handling capability can transact." },
        { check: "ADA attestation on file from operator; annual recertification." },
      ],
    },
    {
      heading: "7. Implementation checklist",
      items: [
        { check: "Facility site survey — placement, circuit, signal, ADA clearance." },
        { check: "Cellular signal test at placement (-100 dBm or better)." },
        { check: "Dedicated 20A circuit confirmed; surge protection installed." },
        { check: "Building security badge program enrollment for operator route drivers." },
        { check: "After-hours coordinator contact captured (security desk number)." },
        { check: "Custodial supervisor briefed on visit schedule." },
        { check: "Telemetry dashboard access provisioned for facility manager." },
        { check: "Quarterly review cadence scheduled." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate after-hours operator vetting, RFP language, and circuit + telemetry specification for public-building placements. We do not own or service the equipment — the operator selected via this framework executes the program.",
    },
  ],
  footer:
    "Informational reference. Verify all electrical, security, and procurement requirements with the specific jurisdiction; public-building requirements vary by state, county, and city.",
});

console.log("wrote "+"after-hours-public-building-vending");
