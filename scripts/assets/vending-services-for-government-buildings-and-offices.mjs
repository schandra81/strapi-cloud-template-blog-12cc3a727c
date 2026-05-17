import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-services-for-government-buildings-and-offices",
  assetType: "pack",
  title: "Government Building and Office Vending Lifecycle Pack",
  subtitle: "Contract scope, installation checklist, quarterly review template",
  intro:
    "Government buildings and offices — federal agency offices, state buildings, county admin, city hall — share operating characteristics distinct from private workplaces: structured procurement, accountability under public-records and open-meeting laws, federal-funding implications, and a mixed audience of employees + visiting public. This pack covers the contract scope, installation framework, and the quarterly review cadence that keeps the program performing across the full term.",
  sections: [
    {
      heading: "1. Procurement-path decision",
      paragraph:
        "Identify the procurement path early — it determines the contract template, the scoring rubric, and the timeline.",
      items: [
        { label: "GSA Schedule 73 (federal)", value: "Food Service / Vending. Federal-agency offices procure via GSA Schedule. Streamlined ordering; pre-negotiated terms. Coordinate with agency's GSA representative." },
        { label: "Federal concession (Randolph-Sheppard Act — 20 U.S.C. § 107)", value: "For federal-building vending in some locations, the Randolph-Sheppard Act gives priority to blind licensees through the state's Business Enterprise Program. Verify priority status with state BEP coordinator before issuing competitive RFP." },
        { label: "State master contract", value: "Most states maintain a master vending contract. State agencies + offices can ride the master without independent solicitation in most cases." },
        { label: "Cooperative procurement (NASPO ValuePoint / OMNIA / Sourcewell)", value: "Used by many counties + cities. Streamlined path leveraging pre-competed contracts." },
        { label: "Local RFP / concession agreement", value: "City + county admin offices typically issue independent RFPs or concession agreements. Operator pays commission (8-25%) to the agency." },
      ],
    },
    {
      heading: "2. Contract scope — clauses that matter",
      paragraph:
        "A government vending contract is more than pricing. Include the scope clauses below.",
      items: [
        { check: "Term + renewal — 3-5 year base; optional 1-year renewals; clear termination-for-convenience clause." },
        { check: "Commission schedule (concession path) — % of gross revenue; reporting cadence; payment schedule." },
        { check: "Performance standards — uptime %, restock cadence, refund SLA, telemetry availability." },
        { check: "Equipment refresh — minimum equipment age at install; refresh trigger (5-7 year typical)." },
        { check: "ENERGY STAR + sustainability — all refrigerated equipment ENERGY STAR; refrigerants ≤ 150 GWP." },
        { check: "ADA attestation — Title II + Section 504 (federal); annual recertification." },
        { check: "PCI DSS v4.0 — operator AOC on file; reviewed annually." },
        { check: "Background check + access — operator route drivers cleared through agency contractor program; HSPD-12 / PIV-I for federal placements where required." },
        { check: "Insurance — commercial general liability ≥ $1M each occurrence / $2M aggregate; auto; workers' comp per state." },
        { check: "Open-records compliance — operator acknowledges agency must disclose contract under state public-records / FOIA per applicable law." },
        { check: "Federal Funding Accountability — operator's USAspending / SAM.gov registration current (federal-funded path)." },
      ],
    },
    {
      heading: "3. Installation checklist",
      paragraph:
        "Run this checklist before each placement goes live.",
      items: [
        { number: 1, title: "Site survey", description: "Facility manager + operator walk-through. Confirm placement, dimensions, clearance, circuit, signal, ADA path-of-travel." },
        { number: 2, title: "Electrical", description: "Dedicated 20A circuit per refrigerated machine; GFCI per NEC 210.8 where applicable; surge protection; circuit labeled in panel." },
        { number: 3, title: "Telemetry", description: "Cellular signal test (≥ -100 dBm RSSI); external antenna if marginal. PCI scope kept on operator side via cellular path." },
        { number: 4, title: "Equipment placement", description: "Anchored / leveled; clearance per manufacturer (typically 4-6 in rear, 2 in side, 12 in top); ADA clear-floor verified (30 × 48 in)." },
        { number: 5, title: "Software + signage", description: "Operator portal access provisioned for facility manager; on-machine signage installed (refund process, allergen summary, ADA accommodation contact, language-access copy where required)." },
        { number: 6, title: "Background + badge", description: "Operator route drivers enrolled in agency contractor-access program; background check on file." },
        { number: 7, title: "Live test", description: "Cashless transaction tested end-to-end; refund flow tested; telemetry heartbeat verified; first-day stocking confirmed against planogram." },
        { number: 8, title: "Go-live communication", description: "Building-wide announcement (email + lobby signage); refund + customer-service contact published." },
      ],
    },
    {
      heading: "4. Planogram baseline — government office",
      paragraph:
        "Adjust for building demographics + visitor mix.",
      headers: ["Category", "Slots (40-slot combo)", "Notes"],
      rows: [
        ["Water + hydration", "5-6", "Plastic bottle; price near cost where contract supports"],
        ["Coffee + cold-brew", "3-4", "AM peak; aluminum / paperboard"],
        ["Sports / energy", "2-3", "Lower than private-office mix"],
        ["Meal-format", "4-5", "Sandwich, wrap, microwaveable bowl"],
        ["Fresh fruit + yogurt", "3-4", "Visitor-friendly"],
        ["Protein bars + granola", "4-5", "Better-for-you share"],
        ["Salty snacks", "4-5", "Standard"],
        ["Lower-sugar / family-friendly", "3-4", "Visiting-public mix"],
        ["Sweet snacks", "3-4", "Standard"],
      ],
    },
    {
      heading: "5. Quarterly review template (QBR)",
      paragraph:
        "Operator + facility manager review quarterly. Public-records implications — keep meeting notes structured and factual.",
      items: [
        { check: "Per-machine uptime % (rolling 3 months)." },
        { check: "Service-SLA adherence by tier (T1 / T2 / T3)." },
        { check: "Stockouts: count, MTTR, top-5 SKUs by stockout rate." },
        { check: "Revenue + transaction count + average ticket (concession path)." },
        { check: "Commission paid to date vs. budget." },
        { check: "Refund rate + reason codes." },
        { check: "Planogram refresh recommendations from telemetry." },
        { check: "Energy + Scope 2 metrics (if program-integrated)." },
        { check: "ADA + PCI + cleaning attestations current." },
        { check: "Background-check + badge roster current." },
        { check: "User-feedback channel summary (refund inquiries, SKU requests)." },
        { check: "Action items + owner + due date." },
      ],
    },
    {
      heading: "6. Federal-building extras",
      paragraph:
        "Federal-building placements add a few specific requirements.",
      items: [
        { check: "HSPD-12 / PIV-I credentials for operator route drivers where required (typically GSA-managed buildings)." },
        { check: "Randolph-Sheppard priority verified before competitive solicitation." },
        { check: "FAR clauses incorporated by reference (if direct federal contract path)." },
        { check: "Section 508 — digital accessibility for any operator portal exposed to federal users." },
        { check: "Buy American Act / Build America, Buy America (BABA) considered where equipment falls in scope." },
      ],
    },
    {
      heading: "7. Open-records + transparency",
      paragraph:
        "Government vending contracts are subject to public-records / FOIA / state Sunshine laws. Plan for it.",
      items: [
        { check: "Contract drafted with the assumption it may be disclosed in full under public-records request." },
        { check: "Commission revenue accounted in the agency's general ledger; visible in budget documents." },
        { check: "Performance reports retained per agency records-retention schedule (typically 3-7 years)." },
        { check: "Operator selection memo + scoring sheet retained per procurement records-retention schedule." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate procurement-path selection, RFP language, contract clauses, and the install + QBR lifecycle for government-office placements. The operator selected via this framework executes the program; the agency owns the procurement instrument, records retention, and public-records compliance.",
    },
  ],
  footer:
    "Informational reference. Federal, state, and local procurement requirements vary; coordinate with agency procurement officer, GSA representative (federal), or state BEP coordinator (Randolph-Sheppard) as applicable.",
});

console.log("wrote "+"vending-services-for-government-buildings-and-offices");
