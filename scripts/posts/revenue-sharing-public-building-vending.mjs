import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("revenue-sharing-public-building-vending", [
  tldr({
    heading: "How does revenue sharing work in public-building vending — and what commission structure, fund allocation, and contract terms drive defensible General Fund or wellness fund outcomes?",
    paragraph:
      "Revenue sharing in public-building vending — city halls, county administration, courthouses, libraries, transit stations, community centers, recreation centers, senior centers, federal buildings — is structurally different from commercial host vending because the public entity has fiduciary obligations to taxpayers, transparency expectations to elected officials and community stakeholders, and procurement constraints under state public procurement law. Modern public-building vending revenue sharing follows seven principles: (1) tiered commission structure escalating with gross revenue (15-22% at small placements, 22-30% at high-volume placements, 25-35% at AI cooler wall qualifying placements) replaces legacy flat-rate 8-12% structure that underpays public entity at high-volume placements; (2) quarterly transparent commission statements with per-machine line-item revenue, refunds, net, rate, and commission amount auditable by facilities + finance + internal audit; (3) dedicated fund allocation — General Fund, employee wellness fund, accessibility services fund, sustainability fund, or community programs fund per council / commission policy; (4) procurement cooperative leverage at RFP (NASPO ValuePoint, regional CPOs, NACo membership) accessing pre-negotiated MSAs with modern operators including ADA + sustainability + telemetry as standard; (5) annual program review for commission rate refinement + placement adjustment + technology upgrade with public stakeholder transparency; (6) operator-side compliance documentation (ACAA / ADA Title II / Section 504 / Section 508 / VPAT / Title VI LEP signage / ENERGY STAR / R-290 refrigerant / cellular telemetry / SIDA-equivalent badging at courthouses) supporting RFP requirements and contract enforcement; (7) refund mechanism transparency with same-day cash + monthly account reconciliation supporting universal design and resident trust. Mid-size city hall (640 staff, 1,500 daily visitors, 12 modern machines): $250-400K annual gross revenue producing $55-100K General Fund or wellness fund commission. Smaller (~400 staff, 800 daily visitors, 6-8 machines): $100-200K gross producing $20-50K commission. Larger municipal complex (~1,200 staff, 3,000 daily visitors, 18-25 machines): $500-900K gross producing $120-250K commission. Programs without framework underperform 30-60% on commission with same machine count and traffic. Written for city managers, finance directors, facilities directors, procurement officers, council / commission members, and internal audit reviewing public-building vending revenue sharing contracts.",
    bullets: [
      { emphasis: "Seven principles drive defensible public-building vending revenue sharing:",
        text: "Tiered commission structure, quarterly transparent statements, dedicated fund allocation, procurement cooperative leverage, annual program review, operator compliance documentation, refund mechanism transparency." },
      { emphasis: "Mid-size city hall $55-100K General Fund or wellness fund commission with framework applied:",
        text: "Smaller (~400 staff) $20-50K; larger municipal complex $120-250K. Programs without framework underperform 30-60% on commission with same machine count and traffic." },
      { emphasis: "Procurement cooperative leverage reduces RFP timeline 30-50%:",
        text: "Pre-negotiated MSAs with modern operators including ADA + sustainability + telemetry + ACAA / Section 504 / VPAT as standard. NASPO ValuePoint, regional CPOs, NACo membership. Smaller cities benefit disproportionately." },
    ],
  }),
  statStrip({
    heading: "Public-building vending revenue sharing benchmarks",
    stats: [
      { number: "$55-100K", label: "mid-size city hall annual commission", sub: "640 staff + 1,500 visitors + 12 machines", accent: "blue" },
      { number: "$120-250K", label: "larger municipal complex commission", sub: "1,200 staff + 3,000 visitors + 18-25 machines", accent: "orange" },
      { number: "22-30%", label: "tiered commission top-tier", sub: "high-volume placements at modern contracts", accent: "blue" },
      { number: "30-60%", label: "commission underperformance no-framework", sub: "vs framework-applied programs", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Commission structures — flat-rate vs tiered vs AI-cooler revenue share at public buildings",
    sub: "Same vending equipment, dramatically different revenue outcomes based on commission structure. Modern public-building contracts use tiered structure capturing fair share at high-volume placements.",
    headers: ["Commission structure", "Small placements", "Mid-size placements", "AI cooler + high-volume"],
    rows: [
      ["Flat-rate (legacy)", "8-10%", "10-12%", "12-15%"],
      ["Tiered gross revenue (modern)", "15-22%", "22-28%", "25-32%"],
      ["AI cooler revenue share (specialty)", "N/A (capital threshold)", "N/A (volume threshold)", "30-40% + capital co-investment"],
      ["Net commission vs flat-rate", "+50-80%", "+80-110%", "+100-140%"],
      ["Annual commission (mid-size city hall, 12 machines)", "$30-50K", "$55-100K", "$110-180K"],
      ["Annual commission (larger municipal, 18-25 machines)", "$60-110K", "$120-250K", "$200-400K"],
    ],
  }),
  costBreakdown({
    heading: "Public-building vending revenue sharing — mid-size city hall annual model",
    sub: "Mid-size city hall: 640 staff, 1,500 daily public visitors, 12 modern machines deployed across atrium, court services, council anteroom, staff break rooms, after-hours permit lobby. Modern operator with tiered commission structure.",
    items: [
      { label: "Atrium high-volume combo machines (3 machines)", amount: "$28K", range: "26% commission on $108K gross. Highest-volume entrance area public visitors. Tiered top-tier rate at $30K+ per-machine gross." },
      { label: "Court services waiting combo machines (2 machines)", amount: "$13K", range: "22% commission on $59K gross. Residents in court queue. Mid-tier rate at $25-30K per-machine gross." },
      { label: "Council anteroom combo machine (1 machine)", amount: "$5.5K", range: "22% commission on $25K gross. Council members + meeting attendees. Mid-tier rate." },
      { label: "Staff break room combo machines (4 machines)", amount: "$14K", range: "20% commission on $70K gross. City staff across departments. Steady weekday demand. Lower-tier rate at $15-20K per-machine gross." },
      { label: "After-hours permit lobby combo machines (2 machines)", amount: "$8K", range: "22% commission on $36K gross. Evening permit pickup + drop-off. After-hours availability premium." },
      { label: "Refund reconciliation adjustment", amount: "($1.4K)", range: "Refunds processed per operator dashboard. ~0.5% of gross revenue. Same-day cash refund + monthly account reconciliation." },
      { label: "Operator-side opportunity (after commission)", amount: "$244K", range: "$312K gross less $68K General Fund commission less $0 (refunds netted at operator). Operator covers COGS, labor, refrigeration, cellular telemetry, ADA audit, multi-language signage." },
    ],
    totalLabel: "Annual commission to General Fund or wellness fund",
    totalAmount: "$67.1K",
  }),
  specList({
    heading: "Seven principles to maximize public-building vending revenue sharing",
    items: [
      { label: "1. Tiered commission structure escalating with gross revenue", value: "Replaces legacy flat-rate 8-12% structure that underpays public entity at high-volume placements. Modern tiered structure — 15-22% at small placements ($15-50K gross), 22-28% at mid-size ($50-150K gross), 25-32% at high-volume ($150K+ gross or AI cooler wall placements). Captures fair share at high-volume placements while compensating operators appropriately at lower-volume. Build into RFP scoring." },
      { label: "2. Quarterly transparent commission statements with per-machine line items", value: "Operator provides quarterly commission statements with per-machine gross revenue, refund reconciliation, net revenue, commission rate per placement tier, and commission amount. Finance director receives 30 days after quarter end. Auditable by internal audit. Replaces operator-self-reported lump-sum commission with transparent line-item statements. Modern operator standard; legacy operator resist." },
      { label: "3. Dedicated fund allocation per council / commission policy", value: "Commission revenue dedicated to defined fund — General Fund, employee wellness fund, accessibility services fund, sustainability fund, community programs fund. Per council / commission policy. Transparent allocation supports stakeholder reporting + council reporting + community-trust building. Programs with dedicated fund governance maintain commission rates better at RFP cycles." },
      { label: "4. Procurement cooperative leverage at RFP", value: "Regional cooperative purchasing organizations (CPOs) maintain pre-negotiated MSAs with modern vending operators including ADA + sustainability + telemetry + ACAA + Section 504 + VPAT requirements as standard. NASPO ValuePoint, regional CPOs (Sourcewell, OMNIA Partners), NACo membership programs. Reduces RFP timeline 30-50%. Accesses competitive commission rates at modern capability." },
      { label: "5. Annual program review for commission rate refinement", value: "Annual contract review for commission rate refinement based on per-placement performance, placement adjustment based on traffic analysis, technology upgrade (AI cooler wall, sustainability fleet refresh, payment upgrade). Public stakeholder transparency — review summary published or shared with council / commission. Builds program governance + sustains commission rates at RFP cycles." },
      { label: "6. Operator-side compliance documentation supporting contract enforcement", value: "ACAA (Air Carrier Access Act for transit station placements) / ADA Title II / Section 504 / Section 508 / VPAT / Title VI LEP signage / ENERGY STAR / R-290 refrigerant / cellular telemetry / SIDA-equivalent badging at courthouses + federal buildings. Documentation accessible to facilities + procurement + internal audit. Supports contract enforcement and audit response. Modern operator standard; legacy operator drift produces compliance gaps." },
      { label: "7. Refund mechanism transparency", value: "Same-day cash refund for cash-paying residents (facility staff issues from petty cash; operator reconciles weekly). Monthly account reconciliation for cashless purchases (operator credits card account directly). Refund contact phone number on machine in multiple languages + audio output. Modern operator refund cycle 24-48 hours; legacy operators 7-14 days. Build refund SLA into contract." },
    ],
  }),
  tipCards({
    heading: "Six public-building vending revenue sharing mistakes",
    sub: "Each is recoverable through next contract cycle. All catchable during RFP design and operator capability evaluation.",
    items: [
      { title: "Flat-rate commission at modern public-building contracts", body: "Flat-rate 8-12% commission underpays public entity at high-volume placements (atrium + court services + AI cooler wall). Tiered commission structure escalating to 25-32% at high-volume captures fair share. Modern public-building contracts use tiered structure. Don't lock long contracts with flat-rate commission — material General Fund or wellness fund commission lost over contract term." },
      { title: "Legacy operator at modern public-building program", body: "Legacy operators with fixed-route + no telemetry + minimal reporting + cash-only payment + English-only signage produce 30-60% commission underperformance at public-building placements. RFP rebid is the leverage point; lock the rebid into modern requirements. Don't drift with legacy operator at renewal." },
      { title: "Operator-self-reported lump-sum commission", body: "Operator-self-reported lump-sum commission without per-machine line items fails internal audit and council reporting. Modern operators provide quarterly per-machine line-item statements with gross, refunds, net, rate, commission. Build into contract Section 5; reject operators without transparent reporting capability." },
      { title: "No dedicated fund allocation policy", body: "Commission deposited to General Fund without policy designation lacks stakeholder reporting clarity and community-trust building. Council / commission policy designating fund allocation (General Fund, employee wellness, accessibility services, sustainability, community programs) supports transparent reporting and sustained commission rates at RFP cycles." },
      { title: "RFP without procurement cooperative leverage", body: "RFP from scratch takes 6-8 months at public entity with full procurement code compliance. Procurement cooperative leverage (NASPO ValuePoint, regional CPOs, NACo) reduces to 3-4 months with pre-negotiated modern operator MSAs. Smaller cities benefit disproportionately. Verify your state CPO has vending category coverage." },
      { title: "No annual program review or technology upgrade cadence", body: "Public-building vending contracts of 5-10 years without annual review drift on commission rate, placement performance, and technology obsolescence. Annual program review for commission rate refinement + placement adjustment + technology upgrade (AI cooler wall, sustainability, payment) sustains program governance. Build cadence into contract." },
    ],
  }),
  decisionTree({
    heading: "Are we capturing fair commission share at our public-building vending program?",
    question: "Are we running tiered commission structure with quarterly transparent statements, dedicated fund allocation, procurement cooperative leverage, annual program review, operator compliance documentation, and refund mechanism transparency?",
    yesBranch: {
      title: "Yes — optimize tier rates + AI cooler wall placement evaluation",
      description: "Modern revenue sharing framework present. Optimize within tier rate refinement at annual review + AI cooler wall placement evaluation at qualifying high-volume locations (atrium, public concourse, transit station, courthouse public area with 200+ daily users) + commission rate review at RFP renewal milestone. Quarterly statement review with internal audit + council / commission reporting cadence.",
      finalTone: "go",
      finalLabel: "OPTIMIZE · MAXIMIZE COMMISSION",
    },
    noBranch: {
      title: "No — RFP rebid with modern requirements + cooperative leverage",
      description: "Legacy commission structure without modern framework underperforms 30-60% on commission with same machine count and traffic. RFP rebid is the leverage point. Use procurement cooperative leverage (NASPO ValuePoint, regional CPOs, NACo) for pre-negotiated MSAs with modern operators including tiered commission + ADA + sustainability + telemetry + ACAA / Section 504 / VPAT as standard. 4-6 month transition timeline.",
      finalTone: "stop",
      finalLabel: "RFP REBID · COOPERATIVE LEVERAGE",
    },
  }),
  inlineCta({
    text: "Want the public-building vending revenue sharing framework (tiered commission + transparent statements + dedicated fund + procurement cooperative leverage)?",
    buttonLabel: "Get the revenue sharing framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support public-building vending revenue sharing program design across city halls, county administration, courthouses, libraries, transit stations, community centers, recreation centers, and federal buildings — including tiered commission structure design, quarterly transparent commission statement specifications, dedicated fund allocation policy support (General Fund, employee wellness, accessibility services, sustainability, community programs), procurement cooperative leverage at RFP (NASPO ValuePoint, regional CPOs, NACo), annual program review cadence, operator compliance documentation specifications (ACAA / ADA Title II / Section 504 / Section 508 / VPAT / Title VI LEP signage / ENERGY STAR / R-290 / cellular telemetry / SIDA-equivalent badging), and refund mechanism transparency. The revenue sharing benchmarks reflect operator-side data and facilities + finance + procurement + internal audit feedback at peer public-building placements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How does revenue sharing work in public-building vending?", answer: "Operator pays commission to public entity per contract terms. Modern tiered commission structure escalating with gross revenue replaces legacy flat-rate. Quarterly transparent statements with per-machine line items. Commission deposited to dedicated fund (General Fund, employee wellness, accessibility services, sustainability, community programs) per council / commission policy. Modern programs produce 30-60% higher commission than legacy at same machine count and traffic.", audience: "City Manager / Finance Director" },
      { question: "What commission rate should we negotiate?", answer: "Tiered commission structure escalating with gross revenue. Small placements 15-22%, mid-size 22-28%, high-volume (atrium + AI cooler wall) 25-32%. Specialty AI cooler placements with capital co-investment 30-40%. Modern programs replace flat-rate 8-12% legacy commission. Tiered structure captures fair share at high-volume placements.", audience: "Procurement / Finance" },
      { question: "How much commission should a mid-size city hall produce?", answer: "Mid-size city hall (640 staff, 1,500 daily visitors, 12 modern machines): $55-100K annual commission with framework applied. Smaller (~400 staff, 800 daily visitors, 6-8 machines): $20-50K. Larger municipal complex (~1,200 staff, 3,000 daily visitors, 18-25 machines): $120-250K. Programs without framework underperform 30-60% on commission with same machine count and traffic.", audience: "Finance Director / City Manager" },
      { question: "Where should commission be allocated?", answer: "Dedicated fund per council / commission policy — General Fund (general municipal use), employee wellness fund (staff wellness programs), accessibility services fund (ADA-related improvements), sustainability fund (climate action plan), community programs fund (recreation + senior + youth services). Transparent allocation builds stakeholder support + sustains commission rates at RFP cycles.", audience: "City Manager / Council" },
      { question: "How do procurement cooperatives help?", answer: "Regional cooperative purchasing organizations (CPOs) maintain pre-negotiated MSAs with modern vending operators including tiered commission + ADA + sustainability + telemetry + ACAA + Section 504 + VPAT as standard. NASPO ValuePoint, Sourcewell, OMNIA Partners, NACo membership programs. Reduces RFP timeline 30-50% and accesses competitive commission rates. Smaller cities benefit disproportionately.", audience: "Procurement" },
      { question: "Should we accept operator-self-reported lump-sum commission?", answer: "No at modern public-building contracts. Operator-self-reported lump-sum commission without per-machine line items fails internal audit and council reporting. Modern operators provide quarterly per-machine line-item statements with gross, refunds, net, rate, commission. Build into contract Section 5; reject operators without transparent reporting capability.", audience: "Internal Audit / Finance" },
      { question: "How often should we review the program?", answer: "Annual program review for commission rate refinement based on per-placement performance, placement adjustment based on traffic analysis, technology upgrade evaluation (AI cooler wall, sustainability fleet refresh, payment upgrade). Public stakeholder transparency. Builds program governance + sustains commission rates at RFP cycles.", audience: "Facilities / Procurement" },
      { question: "What compliance documentation should the operator provide?", answer: "ACAA (transit station placements) + ADA Title II + Section 504 + Section 508 + VPAT + Title VI LEP signage + ENERGY STAR + R-290 refrigerant + cellular telemetry + SIDA-equivalent badging at courthouses + federal buildings. Quarterly compliance summary. Annual audit response capability. Documentation accessible to facilities + procurement + internal audit + ADA coordinator + equity coordinator.", audience: "Compliance / Risk Management" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "GFOA — Government Finance Officers Association", url: "https://www.gfoa.org/", note: "Professional standards for public-sector finance including commission revenue accounting and transparent reporting" },
      { label: "NIGP — Institute for Public Procurement", url: "https://www.nigp.org/", note: "Public procurement professional standards including cooperative purchasing and vending RFP design" },
      { label: "ICMA — International City / County Management Association", url: "https://icma.org/", note: "Professional association for municipal management — facilities and revenue program guidance" },
      { label: "NASPO ValuePoint cooperative purchasing", url: "https://www.naspo.org/", note: "Multi-state cooperative purchasing program with pre-negotiated MSAs supporting public-building vending RFPs" },
      { label: "GSA — Federal Acquisition Service vending guidance", url: "https://www.gsa.gov/", note: "Federal procurement standards applicable at federal building placements and adapted at municipal contracts" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Case study", title: "Case study — city hall vending success", description: "Mid-size municipal city hall 18-month structured RFP-driven transition producing 3.25× revenue and 6.7× General Fund commission lift.", href: "/vending-for-public-buildings/case-study-city-hall-vending-success" },
      { eyebrow: "Sister guide", title: "Accessibility standards for vending in public buildings", description: "ADA Title II + Section 504 + Section 508 twelve specifications + VPAT documentation + annual recertification.", href: "/vending-for-public-buildings/accessibility-standards-vending-public" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "City halls, courthouses, libraries, transit stations, government offices, and community centers.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
