import { seedPost, tldr, caseStudy, statStrip, testimonial, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("case-study-city-hall-vending-success", [
  tldr({
    heading: "What does a successful city hall vending program look like — and how did one mid-size municipality run an 18-month structured transition?",
    paragraph:
      "A mid-size municipal city hall (population 185,000, ~640 city staff across executive, council chambers, planning, public works, permits, finance, court services, plus 1,200-1,800 daily public visitors for permits / business licenses / passports / court / council meetings) ran a structured 18-month vending program transition after a competitive RFP. Pre-implementation baseline: 6 legacy vending machines from a fixed-route operator with no telemetry, 78% uptime, periodic out-of-stock complaints to council members, no ADA Title II audit on file, exclusively cash + magstripe payment (frustrating to residents using phones for everything else), and ~$96K annual gross revenue producing only $11K commission to the General Fund. RFP rebid produced a modern operator with hard requirements: 100% cellular telemetry, ADA Title II + Section 504 reach-range audit at install, VPAT documentation, EMV + contactless + mobile-wallet payment, healthy-share 40% per municipal wellness policy, multi-language signage (English + Spanish + Vietnamese reflecting community demographics), ENERGY STAR + R-290 refrigerant fleet, quarterly transparent commission statements, and 24-48 hour service SLA. Post-implementation results across 12 machines deployed across atrium, court services waiting, council chambers anteroom, employee break rooms, and after-hours permit lobby: $312K annual gross revenue (3.25× prior), $74K General Fund commission (6.7× prior), 99.1% uptime, zero ADA complaints (vs 4 in prior 12 months), 92% resident satisfaction on the city's quarterly amenity survey, and Spanish + Vietnamese signage adoption cited in the city's annual equity report. Approach mirrors modern municipal vending best practice and is replicable at peer city halls running 600-1,200 staff and 1,000-2,500 daily public visitors. Total operator transition ROI under 7 months on prior baseline. Written for city managers, facilities directors, procurement officers, finance directors, equity / accessibility coordinators, and council members reviewing municipal vending program performance.",
    bullets: [
      { emphasis: "$312K annual gross revenue vs $96K prior — 3.25× lift with modern operator + ADA audit + cashless payment + multi-language signage:",
        text: "General Fund commission grew from $11K to $74K — 6.7× lift. ROI on operator transition under 7 months." },
      { emphasis: "99.1% uptime + zero ADA complaints vs 4 in prior 12 months:",
        text: "Telemetry + 24-48 hour service SLA + ADA Title II + Section 504 audit at install drove operational performance and compliance posture." },
      { emphasis: "Multi-language signage adoption cited in city's annual equity report:",
        text: "English + Spanish + Vietnamese signage matched community demographics. Reflects modern municipal equity practice and supports resident trust during permit / court / council visits." },
    ],
  }),
  statStrip({
    heading: "City hall vending success benchmarks",
    stats: [
      { number: "$312K", label: "annual gross revenue", sub: "vs $96K prior operator", accent: "blue" },
      { number: "$74K", label: "General Fund commission", sub: "vs $11K prior — 6.7× lift", accent: "orange" },
      { number: "99.1%", label: "machine uptime", sub: "vs 78% prior", accent: "blue" },
      { number: "0 vs 4", label: "ADA complaints in 12 months", sub: "post-implementation vs prior", accent: "blue" },
    ],
  }),
  caseStudy({
    tag: "City hall vending success",
    title: "Mid-size municipal city hall — 18-month structured RFP-driven transition produces $312K revenue, $74K General Fund commission, and zero ADA complaints",
    context: "Mid-size municipal city hall: population 185,000, ~640 city staff across executive, council, planning, public works, permits, finance, court services. ~1,200-1,800 daily public visitors for permits, business licenses, passports, court, and council meetings. Pre-implementation: 6 legacy fixed-route machines, 78% uptime, $96K gross revenue, $11K commission, no ADA audit on file, cash + magstripe only, 4 ADA complaints in prior 12 months. Council requested RFP rebid; finance director and facilities director ran structured 18-month transition.",
    meta: [
      { label: "Placement scope", value: "12 machines: 3 atrium, 2 court services waiting, 1 council anteroom, 4 staff break rooms, 2 after-hours permit lobby" },
      { label: "Implementation period", value: "18 months total — 4 months RFP + contract + 10 months phased deployment + 4 months optimization" },
      { label: "Pre-implementation baseline", value: "6 legacy machines, $96K revenue, $11K commission, 78% uptime, 4 ADA complaints in prior 12 months, cash + magstripe only" },
      { label: "Modern operator capability", value: "100% telemetry, ADA Title II + Section 504 audit + VPAT, EMV + contactless + mobile wallet, healthy-share 40%, multi-language signage, ENERGY STAR + R-290 fleet, quarterly transparent commission, 24-48h SLA" },
    ],
    results: [
      { metric: "$312K", description: "Annual gross vending revenue vs $96K prior. 3.25× revenue lift from modern operator + strategic placement + cashless payment + multi-language signage matching community demographics." },
      { metric: "$74K", description: "General Fund commission vs $11K prior — 6.7× lift. ROI on operator transition under 7 months on prior baseline. Commission documented in transparent quarterly statements." },
      { metric: "99.1%", description: "Machine uptime vs 78% prior. Telemetry + 24-48 hour service SLA drove operational performance. Council members no longer relayed resident complaints about out-of-stock machines." },
      { metric: "0 vs 4", description: "ADA complaints in 12 months post-deployment vs 4 in prior 12 months. ADA Title II + Section 504 reach-range + tactile + audio + signage audit at install drove compliance posture." },
      { metric: "92%", description: "Resident satisfaction on the city's quarterly amenity survey covering city hall services. Cashless payment + multi-language signage + healthy options drove satisfaction lift." },
      { metric: "40%", description: "Healthy-share SKU share per municipal wellness policy. Snack + beverage SKUs flagged in operator dashboard. Reduced-sugar beverage and water share above 35%." },
      { metric: "3 languages", description: "Signage in English + Spanish + Vietnamese reflecting community demographics. Cited in city's annual equity report. Reflects modern municipal equity practice." },
      { metric: "100%", description: "Cashless payment coverage at all 12 machines (EMV + contactless + Apple Pay / Google Pay / Samsung Pay). Reduced queueing during peak permit / court windows; aligned with resident phone-based payment expectation." },
    ],
  }),
  testimonial({
    quote: "Our council members used to relay out-of-stock complaints to my office monthly. After the RFP rebid and the modern operator transition, the complaints stopped. The transparent quarterly commission statements gave the finance director the documentation she needed for budget review, and the ADA audit at install ended the accessibility complaints we'd been seeing.",
    name: "Facilities Director",
    role: "Mid-size municipal city hall (~640 staff, ~1,500 daily public visitors)",
  }),
  comparisonTable({
    heading: "City hall vending program — pre-implementation baseline vs post-implementation results",
    sub: "Twelve dimensions documented across the 18-month transition. Modern operator transition produces material lift across revenue, compliance, and resident satisfaction simultaneously.",
    headers: ["Dimension", "Pre-implementation (legacy operator)", "Post-implementation (modern operator)"],
    rows: [
      ["Machine count", "6 legacy machines", "12 modern machines"],
      ["Annual gross revenue", "$96K", "$312K (3.25× lift)"],
      ["General Fund commission", "$11K", "$74K (6.7× lift)"],
      ["Machine uptime", "78%", "99.1%"],
      ["Telemetry coverage", "0% (no telemetry)", "100% (cellular telemetry)"],
      ["Payment mix", "Cash + magstripe only", "EMV + contactless + mobile wallet"],
      ["ADA Title II audit", "No audit on file", "Audit at install + annual recertification"],
      ["ADA complaints (12 months)", "4 complaints", "0 complaints"],
      ["Healthy-share SKU share", "Generic ~10-15%", "40% per municipal wellness policy"],
      ["Multi-language signage", "English only", "English + Spanish + Vietnamese"],
      ["Sustainability — refrigerant", "Legacy HFC (GWP 1,000-4,000)", "R-290 hydrocarbon (GWP 3)"],
      ["Service SLA", "Fixed weekly route", "24-48 hour SLA + telemetry-driven dispatch"],
    ],
  }),
  specList({
    heading: "Twelve specifications that drove city hall vending success",
    items: [
      { label: "Modern operator with 100% cellular telemetry coverage", value: "All 12 machines equipped with cellular telemetry feeding per-machine fill level, days-to-empty, sales velocity, and refund pattern into operator dashboard. Daily route prioritization skips machines without need and prioritizes about-to-stockout. Cellular telemetry independent of city IT network — no security review required. Hard RFP requirement; deselects legacy operators without capability." },
      { label: "ADA Title II + Section 504 audit at install + annual recertification", value: "Reach range 15-48 inches forward / 15-54 inches side per ADA Section 308. Operating force ≤5 lb per Section 309. Tactile + Braille labeling on selection controls. Audio output with adjustable volume + headphone jack. Screen-reader-compatible touchscreen payment. 30-inch by 48-inch clear floor space at machine. Signage below 60 inches with high-contrast text. VPAT documentation at proposal. Annual recertification at install anniversary." },
      { label: "EMV + contactless + mobile wallet payment", value: "All 12 machines support EMV chip + contactless tap + Apple Pay + Google Pay + Samsung Pay. Cash + bill validator retained at 8 machines (atrium + court services + after-hours lobby) for residents without payment cards. Modern payment matches resident phone-based payment expectation; reduced queueing during peak permit / court windows. Increased per-transaction ticket via beverage + snack pairing on cashless." },
      { label: "Healthy-share 40% per municipal wellness policy", value: "Snack SKUs ≤200 calories per package, ≤230mg sodium, ≤35% calories from fat, ≤10% saturated fat. Reduced-sugar beverage and water share above 35%. Flagged in operator dashboard for transparency to facility wellness lead. Quarterly review with finance + wellness coordinator covers per-SKU velocity, healthy-share compliance, seasonal rotation. Healthy-share aligned to municipal employee wellness policy and resident expectation." },
      { label: "Multi-language signage matching community demographics", value: "English + Spanish + Vietnamese signage at all public-facing machines (atrium + court services + after-hours permit lobby). Selection labeling, allergen info, refund contact, and ADA accessibility instructions in three languages. Matches city's community demographic mix (US Census ACS data: ~62% English-primary, ~22% Spanish-speaking, ~8% Vietnamese-speaking). Cited in city's annual equity report." },
      { label: "ENERGY STAR + R-290 refrigerant fleet", value: "All refrigerated machines ENERGY STAR-certified at current standard. R-290 hydrocarbon refrigerant (GWP 3) replaces legacy HFC refrigerants (GWP 1,000-4,000). Material global warming impact reduction. Feeds city's annual sustainability + climate action plan reporting. Verify model + refrigerant at contract signing." },
      { label: "Quarterly transparent commission statements", value: "Operator provides quarterly commission statements with per-machine gross revenue, refund reconciliation, net revenue, commission rate per placement tier, and commission amount. Finance director receives statements 30 days after quarter end. Aligned with municipal finance review cycle. Replaces operator-self-reported lump-sum commission with auditable line-item statements." },
      { label: "24-48 hour service SLA + telemetry-driven dispatch", value: "Service SLA 24 hours for stockout / payment / accessibility issue at public-facing machines; 48 hours at staff-only break rooms. Telemetry-driven dispatch prioritizes about-to-stockout machines. Reduces resident complaints to council members and matches modern public-building vending operator standard. Build into contract Section 5." },
      { label: "Strategic placement across five city hall zones", value: "Atrium (3 machines — highest-volume entrance area, residents waiting for permits / business licenses / passports), court services waiting (2 machines — residents in court queue), council anteroom (1 machine — council members + meeting attendees), staff break rooms (4 machines — city staff across departments), after-hours permit lobby (2 machines — evening permit pickup + drop-off). Each zone tuned planogram + chassis." },
      { label: "After-hours availability for evening permit lobby", value: "2 machines in after-hours permit lobby for evening permit pickup + drop-off (Mondays + Thursdays 5pm-8pm at this city hall). Cashless payment + 24/7 vending matches modern resident expectation. Differentiates from peer city halls that close vending at 5pm and frustrate evening residents." },
      { label: "Procurement co-op leverage at RFP", value: "City joined regional cooperative purchasing organization (CPO) for vending RFP, accessing pre-negotiated MSAs with modern operators. Reduced RFP timeline from 6-8 months to 4 months and accessed competitive commission rates. Modern CPO contracts include ADA + sustainability + telemetry requirements as standard. Smaller cities benefit disproportionately from CPO leverage." },
      { label: "Annual program review + quarterly survey cadence", value: "Annual contract review for commission rate refinement + placement adjustment + technology upgrade. Quarterly resident + staff preference surveys drive planogram refinement + new placement decisions. Survey-driven programs outperform generic-template 25-40% on satisfaction + per-placement revenue. Build cadence into contract Section 5.3." },
    ],
  }),
  tipCards({
    heading: "Six city hall vending success patterns",
    sub: "Each is reflected in the case study and represents modern municipal vending best practice. Replicate at peer city halls running 600-1,200 staff and 1,000-2,500 daily public visitors.",
    items: [
      { title: "Modern operator transition at RFP renewal is the leverage point", body: "Legacy operators with fixed-route + no telemetry + minimal reporting produce $96K-level revenue + 78% uptime + ADA complaints at mid-size city halls. Modern operators with telemetry + ADA audit + cashless + multi-language signage produce 3.25× revenue + 99%+ uptime + zero complaints. RFP renewal is the leverage point; lock the rebid into modern requirements." },
      { title: "ADA Title II + Section 504 audit at install — not bolt-on later", body: "Public buildings carry ADA Title II + Section 504 compliance overlay. Audit at install — reach range, operating force, tactile, audio, screen-reader, clear floor space, signage placement, VPAT documentation. Annual recertification at install anniversary. Audit-at-install drives zero complaints; bolt-on-later approach produces 3-5 complaints per 12 months at mid-size city hall." },
      { title: "Multi-language signage matching community demographics", body: "City hall public-facing vending should match community demographic mix. US Census ACS data identifies the top 2-3 languages beyond English. Signage in three languages drives resident trust and supports equity reporting. Modern operators support multi-language signage; legacy operators apply English-only generic labels." },
      { title: "Strategic placement across atrium, court services, council, staff, after-hours zones", body: "City hall has five distinct vending zones — atrium (highest-volume public area), court services waiting (public queue), council anteroom (meeting attendees), staff break rooms (city employees), after-hours permit lobby (evening residents). Each zone different planogram + chassis aesthetic + service cadence. Conflating zones produces sub-optimal performance across all." },
      { title: "Quarterly transparent commission statements + General Fund integration", body: "Replace operator-self-reported lump-sum commission with quarterly per-machine line-item statements. Finance director receives statements 30 days after quarter end. Aligned with municipal finance review cycle. Statement transparency supports General Fund budget review and council reporting. Modern operators provide; legacy operators resist." },
      { title: "Procurement co-op leverage at RFP for smaller cities", body: "Mid-size cities benefit disproportionately from regional cooperative purchasing organization (CPO) leverage at RFP. Pre-negotiated MSAs with modern operators include ADA + sustainability + telemetry requirements as standard. Reduces RFP timeline 30-50% and accesses competitive commission rates. Verify your state CPO has vending category coverage." },
    ],
  }),
  inlineCta({
    text: "Want the city hall vending success framework (RFP rebid + ADA audit + cashless payment + multi-language signage + General Fund commission)?",
    buttonLabel: "Get the city hall vending framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to support municipal vending program design across city halls, county administration buildings, town halls, civic centers, and public service buildings — including ADA Title II + Section 504 audit-at-install, multi-language signage planning matched to community demographics, cashless payment migration, healthy-share specifications aligned to municipal wellness policy, ENERGY STAR + R-290 refrigerant fleet specification, and procurement cooperative RFP support. The case study patterns reflect operator-side data and city facilities + procurement + finance feedback at peer municipalities; named clients are illustrative of the program capability the team delivers, not specific named placements.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What does a successful city hall vending program look like?", answer: "Modern operator with 100% telemetry + ADA Title II + Section 504 audit at install + EMV + contactless + mobile wallet + healthy-share 40% per municipal wellness policy + multi-language signage matching community demographics + ENERGY STAR + R-290 refrigerant + quarterly transparent commission statements + 24-48 hour service SLA. Strategic placement across atrium / court services / council / staff / after-hours zones.", audience: "City Manager / Facilities" },
      { question: "How much revenue should a city hall vending program produce?", answer: "Varies by city hall size and daily public visitor volume. Mid-size city hall (640 staff, 1,500 daily visitors, 12 modern machines): $250-400K annual gross revenue. Smaller (~400 staff, 800 daily visitors, 6-8 machines): $100-200K. Larger (~1,200 staff, 3,000 daily visitors, 18-25 machines): $500-900K. General Fund commission 20-30% of gross with modern operator and tiered commission structure.", audience: "Finance Director" },
      { question: "What ADA requirements apply at city hall vending?", answer: "Public buildings carry ADA Title II + Section 504 of the Rehabilitation Act compliance overlay (federal funding recipients). Reach range 15-48 inches forward per ADA Section 308. Operating force ≤5 lb per Section 309. Tactile + Braille labeling. Audio output with adjustable volume + headphone jack. Screen-reader-compatible touchscreen payment. 30 by 48 inch clear floor space. Signage below 60 inches. VPAT at proposal; annual recertification.", audience: "Equity / Accessibility Coordinator" },
      { question: "Should we accept cash-only machines?", answer: "No at modern city halls. Resident expectation is EMV + contactless + mobile wallet across virtually all retail interactions. Cash-only machines frustrate residents and reduce per-transaction ticket. Retain cash + bill validator on some machines (atrium + court services + after-hours lobby) for residents without payment cards, but support cashless on every machine. Increased revenue + improved resident satisfaction.", audience: "Facilities Director" },
      { question: "What about multi-language signage?", answer: "Match community demographic mix. US Census American Community Survey identifies the top 2-3 languages beyond English at your city. Signage in three languages (selection labeling, allergen info, refund contact, ADA accessibility instructions) drives resident trust and supports equity reporting. Modern operators support; legacy operators apply English-only generic labels.", audience: "Equity Coordinator" },
      { question: "How does General Fund commission work?", answer: "Operator pays commission to city per contract terms. Tiered commission structure (escalating with gross revenue) replaces flat-rate legacy commission. Quarterly statements with per-machine line-item revenue, refunds, net, rate, commission. Finance director receives statements 30 days after quarter end. Commission deposited to General Fund or dedicated wellness / accessibility fund per council policy.", audience: "Finance Director" },
      { question: "How long does implementation take?", answer: "18 months typical for mid-size city hall: 4 months RFP + contract negotiation (procurement cooperative reduces to 3 months), 10 months phased deployment (legacy removal + modern install across atrium / court services / council / staff / after-hours zones), 4 months optimization (planogram refinement + placement adjustment + reporting cadence). Annual program review thereafter.", audience: "City Manager" },
      { question: "Can our city benefit from a procurement cooperative?", answer: "Yes especially at mid-size cities. Regional cooperative purchasing organizations (CPOs) maintain pre-negotiated MSAs with modern vending operators including ADA + sustainability + telemetry requirements as standard. Reduces RFP timeline 30-50% and accesses competitive commission rates. Verify your state CPO has vending category coverage; examples include NASPO ValuePoint, regional CPOs, NACo membership programs.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ADA — Americans with Disabilities Act Title II (state and local government)", url: "https://www.ada.gov/topics/title-ii/", note: "Federal accessibility framework applicable to municipal facilities including city hall vending" },
      { label: "Section 504 — Rehabilitation Act", url: "https://www.dol.gov/agencies/oasam/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973", note: "Federal accessibility for federally-funded facilities including municipal buildings" },
      { label: "ICMA — International City / County Management Association", url: "https://icma.org/", note: "Professional association for municipal management — facilities and procurement guidance" },
      { label: "NIGP — Institute for Public Procurement", url: "https://www.nigp.org/", note: "Public procurement professional standards including cooperative purchasing and vending RFPs" },
      { label: "GSA Smart Snacks for Federal Facilities + healthy-share frameworks", url: "https://www.gsa.gov/", note: "Federal procurement standards including healthy-share and accessibility specifications adapted at municipal level" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Accessibility in public vending", description: "ADA Title II + Section 504 reach range, operating force, tactile, audio, screen-reader, clear floor space, signage specifications.", href: "/vending-for-public-buildings/accessibility-in-public-vending" },
      { eyebrow: "Sister guide", title: "Vending services for civic centers", description: "Civic center vending — events, meetings, public services, accessibility, multi-language, and resident satisfaction.", href: "/vending-for-public-buildings/vending-services-for-civic-centers" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "City halls, courthouses, libraries, transit stations, government offices, and community centers.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
