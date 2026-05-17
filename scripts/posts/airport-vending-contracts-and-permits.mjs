import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, timeline, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("airport-vending-contracts-and-permits", [
  tldr({
    heading: "How are airport vending contracts and permits structured?",
    paragraph:
      "Airport vending placement is the most heavily-regulated vending category — federal (FAA, TSA, DOT/ACAA), airport-authority (the operating body of each airport), and concessionaire-master-lease (the master concessions operator that holds the airport's food + beverage rights and sub-leases space to vending operators) overlay all govern the placement. Five contract + permit layers: (1) airport authority concession framework — most major airports (large hubs, medium hubs) award master concession to a single concessionaire (typically HMSHost, OTG, SSP America, Areas) for 10-20 year terms; vending operators sub-lease through master concessionaire, not directly with airport, (2) vending-specific RFP through master concessionaire — sub-lease structure with commission to concessionaire (15-30% of net sales) plus base rent at high-traffic placements, (3) TSA security badging — vending operator staff serving inside the security checkpoint need SIDA (Security Identification Display Area) badge; 6-12 week background check + fingerprint + training process, (4) FAA + airport accessibility compliance — ACAA + ADA + Section 504 overlay (stricter than most placements); VPAT documentation at proposal required, (5) airport facility integration — power, network, signage, brand alignment with airport standards. Placement-specific premiums apply: gate-side concourse highest revenue + highest rent, post-security pre-gate (gate hold areas) high revenue + moderate rent, pre-security (landside) moderate revenue + lower rent, employee back-of-house lower revenue + no rent. Modern airport vending placements run $30K-150K annual revenue at gate-side, $15K-75K at pre-security, $5K-25K at back-of-house. Sub-lease terms 3-10 years with renewal rights at master concessionaire discretion. Permit + RFP process takes 6-18 months from initial expression of interest to live placement. Operator-side: airport experience matters substantially — operators without airport-deployment history struggle with security badging, accessibility compliance, and master concessionaire requirements. Verify operator airport-deployment references before pursuing sub-lease.",
    bullets: [
      { emphasis: "Five contract + permit layers:", text: "Airport authority concession framework, master concessionaire sub-lease, TSA security badging, FAA accessibility, facility integration." },
      { emphasis: "Master concessionaire holds rights:", text: "HMSHost, OTG, SSP America, Areas hold 10-20 year master concession. Vending operators sub-lease through them, not direct with airport." },
      { emphasis: "6-18 month permit process:", text: "From expression of interest to live placement. Operator airport experience required; verify references." },
    ],
  }),
  statStrip({
    heading: "Airport vending contract benchmarks",
    stats: [
      { number: "10-20 yr", label: "master concession term", sub: "concessionaire holds airport rights", accent: "blue" },
      { number: "15-30%", label: "sub-lease commission", sub: "to master concessionaire", accent: "orange" },
      { number: "6-12 wk", label: "TSA SIDA badging", sub: "background check + fingerprint + training", accent: "blue" },
      { number: "6-18 mo", label: "permit + RFP process", sub: "expression of interest to live placement", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Placement zones — revenue + rent + compliance",
    sub: "Placement-specific premiums and compliance overlays apply. Gate-side highest revenue and rent; back-of-house lowest revenue but no rent.",
    headers: ["Placement zone", "Revenue range", "Rent + commission", "Compliance overlay"],
    rows: [
      ["Gate-side concourse", "$60K-150K annual", "Base rent + 25-30% commission", "ACAA + ADA + 504 + TSA SIDA"],
      ["Post-security pre-gate", "$30K-90K annual", "Base rent + 20-25% commission", "ACAA + ADA + 504 + TSA SIDA"],
      ["Pre-security landside", "$15K-50K annual", "No base rent + 15-20% commission", "ACAA + ADA + 504"],
      ["Baggage claim", "$10K-30K annual", "No base rent + 15-20% commission", "ACAA + ADA + 504"],
      ["Employee back-of-house", "$5K-25K annual", "No base rent + 12-18% commission", "ADA only"],
    ],
  }),
  specList({
    heading: "Contract + permit specifications by layer",
    items: [
      { label: "Airport authority concession framework", value: "Most major airports (large hubs, medium hubs) award master concession to single concessionaire for 10-20 year terms. Concessionaires: HMSHost (Autogrill / Avolta), OTG, SSP America, Areas, Paradies Lagardère. Vending operators sub-lease through master concessionaire — not direct with airport authority. Small + non-hub airports may award direct vending contracts; verify framework at airport." },
      { label: "Master concessionaire sub-lease structure", value: "Sub-lease with commission to concessionaire (15-30% net sales) plus base rent at high-traffic placements ($50-300/sqft annual). Term 3-10 years; renewal at concessionaire discretion. Concessionaire approves operator + planogram. Operator subject to concessionaire SLA in addition to airport requirements. Modern sub-leases include performance triggers and termination-for-cause clauses." },
      { label: "TSA SIDA security badging", value: "Vending operator staff serving inside security checkpoint (post-security placements) need SIDA badge. 6-12 week background check + fingerprint + training process per badged staff. Annual renewal. Replacement of lost badge: 2-4 weeks. Operators with airport-deployment history have process down; new operators struggle." },
      { label: "FAA + airport accessibility compliance", value: "ACAA + ADA + Section 504 + Section 508 layered overlay. VPAT documentation at proposal required. Reach range, audio output, screen-reader-compatible touchscreen, tactile cues, maneuvering space, signage placement, multi-language support, cognitive accessibility. Annual compliance audit at major airports. Stricter than commercial sites." },
      { label: "Airport facility integration", value: "Power (dedicated 120V/15A circuit; some airports require essential power circuit), network (ethernet preferred; airport IT coordinates connection), signage (airport brand-standard signage required; operator wraps non-conforming), brand alignment with airport standards (finish, materials, lighting). Operator + airport facilities coordinate at install." },
      { label: "Operator references + airport-deployment history", value: "Verify operator airport-deployment references at proposal. Operators without airport-deployment history struggle with security badging, accessibility compliance, master concessionaire requirements. Reference checks with at least 2 same-tier airports. Documented airport deployments minimum 3 placements." },
      { label: "Permit + RFP process timeline", value: "6-18 months from initial expression of interest to live placement. Phases: expression of interest (master concessionaire response 30-60 days), RFP issued (60-90 days response), proposal review (30-60 days), selection + sub-lease negotiation (60-90 days), TSA badging (6-12 weeks parallel), installation + commissioning (30-60 days). Plan accordingly." },
      { label: "Reporting + audit requirements", value: "Monthly per-machine itemized statements to master concessionaire + airport authority. Annual accessibility compliance audit at major airports. Annual TSA badge renewal. Sub-lease renewal documentation at term boundary. Operator maintains documentation for 7 years (audit retention)." },
    ],
  }),
  timeline({
    heading: "Airport vending permit + RFP process",
    sub: "6-18 month timeline from expression of interest to live placement. Major airports at upper end.",
    howToName: "Airport vending sub-lease process",
    totalTime: "6-18 months",
    steps: [
      { label: "Month 1-2", title: "Expression of interest to master concessionaire", description: "Operator submits expression of interest with airport-deployment history, equipment specifications, sustainability + accessibility commitments. Master concessionaire response 30-60 days." },
      { label: "Month 2-4", title: "RFP issued + response", description: "Master concessionaire issues RFP for specific placement(s). Operator responds with commercial terms, equipment specifications, planogram proposal, compliance documentation (VPAT, ENERGY STAR, sustainability), references. 60-90 days response window." },
      { label: "Month 4-6", title: "Proposal review + selection", description: "Master concessionaire reviews proposals. Reference checks. Selection committee + airport authority approval. 30-60 days review window." },
      { label: "Month 6-8", title: "Sub-lease negotiation + TSA badging start", description: "Sub-lease terms negotiated: commission rate, base rent, term length, renewal rights, performance triggers, termination-for-cause. TSA SIDA badging process initiated for operator staff (6-12 weeks parallel to sub-lease negotiation)." },
      { label: "Month 8-12", title: "Installation + commissioning", description: "Equipment delivered + installed. Power + network verified. Signage installed per airport brand standards. Accessibility compliance verified. TSA badging complete. Operator + airport facilities coordinate around airport operations." },
      { label: "Month 12-18", title: "Live launch + first compliance audit", description: "Live launch. First 90 days monitored closely for revenue, equipment reliability, dispute volume, compliance. First annual accessibility compliance audit at year-end." },
    ],
  }),
  tipCards({
    heading: "Five airport vending contract pitfalls",
    sub: "Each documented in operator + master concessionaire reviews. All preventable with structured approach.",
    items: [
      { title: "Pursuing direct contract with airport authority at major airport", body: "Major airports (large hubs, medium hubs) award master concession to single concessionaire — vending operators sub-lease through master concessionaire, not direct with airport. Direct expression of interest with airport authority redirected to master concessionaire. Pursue sub-lease through HMSHost / OTG / SSP America / Areas instead." },
      { title: "Underestimating TSA SIDA badging timeline", body: "Operator commits to live-placement date without TSA SIDA badging timeline. Background check + fingerprint + training process is 6-12 weeks per badged staff. Live placement delayed. Start badging process at sub-lease negotiation; budget 6-12 weeks parallel." },
      { title: "Skipping VPAT documentation at proposal", body: "Operator submits proposal without VPAT (Voluntary Product Accessibility Template). Federal accessibility framework requires VPAT documentation. Major-airport RFPs reject operators without VPAT. Specify VPAT documentation at proposal; refresh annually." },
      { title: "Sub-lease without performance triggers", body: "Sub-lease has term length but no performance triggers (minimum revenue, uptime SLA, dispute rate). Concessionaire cannot terminate underperforming operator. Modern sub-leases include performance triggers and termination-for-cause clauses; specify at negotiation." },
      { title: "Operator without airport-deployment history", body: "Operator with no airport-deployment history pursues major-airport sub-lease. Struggles with security badging, accessibility compliance, master concessionaire requirements. Verify references at proposal — minimum 3 documented airport placements + 2 same-tier references." },
    ],
  }),
  decisionTree({
    heading: "Should our airport pursue master concessionaire sub-lease vs direct vending contract?",
    question: "Is your airport a large hub (FAA Hub Type L) OR medium hub (M) with existing master concession agreement?",
    yesBranch: {
      title: "Master concessionaire sub-lease — standard at major airports.",
      description: "Major airports have master concession agreements with HMSHost / OTG / SSP America / Areas. Vending operators sub-lease through master concessionaire, not direct with airport authority. Sub-lease commission 15-30% to concessionaire + base rent at high-traffic placements. 6-18 month permit process.",
      finalTone: "go",
      finalLabel: "MASTER CONCESSIONAIRE · SUB-LEASE",
    },
    noBranch: {
      title: "Direct vending contract may be available.",
      description: "Small + non-hub airports (FAA Hub Type S / N) may award direct vending contracts without master concession overlay. Verify framework at airport before pursuing. Direct contracts have lower commission overhead but same federal accessibility + (often) TSA badging requirements.",
      finalTone: "stop",
      finalLabel: "DIRECT CONTRACT · VERIFY FRAMEWORK",
    },
  }),
  inlineCta({
    text: "Want the airport vending permit + RFP playbook (five layers, master concessionaire framework, TSA badging timeline)?",
    buttonLabel: "Get the airport playbook",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise airport vending operators and airport authority procurement teams on master concessionaire sub-lease structures, TSA SIDA badging timelines, FAA + ACAA + ADA accessibility compliance, and VPAT documentation at proposal. Benchmarks reflect operator-side data across airport vending deployments and master concessionaire sub-lease structures.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do airport vending contracts work?", answer: "Most major airports (large hubs, medium hubs) award master concession to single concessionaire (HMSHost, OTG, SSP America, Areas, Paradies) for 10-20 year terms. Vending operators sub-lease through master concessionaire — not direct with airport authority. Small + non-hub airports may award direct vending contracts.", audience: "Airport Operators" },
      { question: "What commission + rent should we expect?", answer: "Sub-lease commission to master concessionaire 15-30% net sales. Base rent at high-traffic placements ($50-300/sqft annual). Gate-side concourse: 25-30% + rent. Post-security pre-gate: 20-25% + rent. Pre-security landside: 15-20% (often no rent). Back-of-house: 12-18% (no rent).", audience: "Airport Operators" },
      { question: "What is TSA SIDA badging?", answer: "Security Identification Display Area badge required for vending operator staff serving inside security checkpoint (post-security placements). 6-12 week background check + fingerprint + training process per badged staff. Annual renewal. Replacement of lost badge: 2-4 weeks. Start at sub-lease negotiation to avoid live-placement delay.", audience: "Operators" },
      { question: "What accessibility compliance applies at airports?", answer: "Layered overlay: ACAA (DOT Air Carrier Access Act) + ADA (Americans with Disabilities Act) + Section 504 (Rehabilitation Act) + Section 508 (federal procurement). Stricter than commercial sites. VPAT documentation at proposal required. Annual accessibility compliance audit at major airports.", audience: "Compliance" },
      { question: "How long does the permit + RFP process take?", answer: "6-18 months from initial expression of interest to live placement. Major airports at upper end. Phases: expression of interest (30-60 days), RFP issued (60-90 days response), proposal review (30-60 days), selection + sub-lease negotiation (60-90 days), TSA badging (6-12 weeks parallel), installation + commissioning (30-60 days).", audience: "Operators" },
      { question: "What references should we provide as an operator?", answer: "Minimum 3 documented airport placements. 2 same-tier airport references (large hub if pursuing large hub, etc.). Documented compliance with ACAA + ADA + 504 + 508 + TSA SIDA badging. Operators without airport-deployment history struggle with major-airport sub-lease pursuit.", audience: "Operators" },
      { question: "What's the difference between airport and commercial vending placements?", answer: "Heavier regulatory overlay (FAA + TSA + DOT/ACAA + airport authority + master concessionaire), longer permit process (6-18 mo vs 30-90 days commercial), higher rent + commission structures, stricter accessibility (ACAA layered on ADA), TSA badging for post-security staff. Higher revenue per placement but higher complexity.", audience: "Operators" },
      { question: "What about non-hub airports?", answer: "Small + non-hub airports (FAA Hub Type S / N) may award direct vending contracts without master concession overlay. Lower commission overhead. Same federal accessibility + (often) TSA badging requirements. Verify framework at airport before pursuing. Direct contracts simpler but lower revenue scale.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "FAA — airport hub classification and concession framework", url: "https://www.faa.gov/airports/planning_capacity/categories/", note: "Federal airport classification framework relevant to concession structure" },
      { label: "TSA — Security Identification Display Area (SIDA) badging", url: "https://www.tsa.gov/for-industry/airport-security", note: "Federal security badging framework for airport vendors" },
      { label: "DOT — Air Carrier Access Act (ACAA)", url: "https://www.transportation.gov/individuals/aviation-consumer-protection/air-carrier-access-act", note: "Federal airport accessibility framework" },
      { label: "ACI-NA — Airports Council International–North America concession data", url: "https://airportscouncil.org/", note: "Industry trade association covering airport concession structures" },
      { label: "HMSHost / Avolta — master concessionaire framework", url: "https://www.avoltaworld.com/en/our-business/hmshost", note: "Major master concessionaire structure reference" },
    ],
  }),
  relatedGuides({
    heading: "Related airport vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Accessible airport vending", description: "ACAA + ADA + Section 504 + Section 508 layered accessibility compliance at airports.", href: "/vending-for-airports/accessible-airport-vending" },
      { eyebrow: "Operations", title: "Airport vending design evolution", description: "Equipment, placement, and operator-side trends across airport vending category.", href: "/vending-for-airports/airport-vending-design-evolution" },
      { eyebrow: "Hub", title: "All airport vending guides", description: "Placement, equipment, contracts, accessibility, dietary, and operator structures for airports.", href: "/vending-for-airports" },
    ],
  }),
]);
process.exit(0);
