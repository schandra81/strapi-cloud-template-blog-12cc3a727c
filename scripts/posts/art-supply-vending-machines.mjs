import { seedPost, tldr, statStrip, comparisonTable, costBreakdown, specList, tipCards, decisionTree, caseStudy, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("art-supply-vending-machines", [
  tldr({
    heading: "What are art supply vending machines — and where do they actually work?",
    paragraph:
      "Art supply vending machines dispense pencils, brushes, paints, sketchbooks, markers, erasers, blades, and small consumables. The placement profile is narrow: art schools, university fine-arts departments, community art centers, makerspaces, and museum education wings. The economic case rests on three structural facts. First, art students need 'one more pencil at 11 PM' more often than they need bulk supplies — campus bookstores close, and the nearest art store is rarely within walking distance, so the willingness-to-pay for after-hours access is genuinely high (15-35% markup vs retail is tolerated, sometimes higher on emergency items like X-Acto blades during a thesis crit). Second, fine-arts SKUs are small, dense, and high-margin — a single Prismacolor pencil that costs the operator $1.20 sells at $2.50-$3.00; a kneaded eraser at $0.90 cost sells at $2.50; the math compares favorably to snack vending at the same machine throughput. Third, the placement is captive in a way most vending is not — fine-arts buildings often run 24/7 with badge access, but the supply room closes at 5 PM, leaving 14+ hours of unmet demand on every weekday and the entire weekend. Constraints: SKU velocity is uneven (some items rotate weekly during midterms and crits, others sit for months), so telemetry-driven planogram is mandatory; equipment is custom (Fastenal-style industrial vending with helical coils and small bins, not standard snack glass-front), capital is $9-18K per machine; service cadence is bi-weekly for low-volume sites and weekly during exam periods; and the operator must understand the academic calendar — restocking the week before finals matters more than restocking the week after spring break. Where it works, an art supply machine generates $400-$900 monthly at a 200-student program and $900-$1,800 at a 500+ student program with strong programming.",
    bullets: [
      { emphasis: "Captive demand at fine-arts buildings is the placement thesis:",
        text: "Fine-arts buildings run 24/7 with badge access; the supply room closes at 5 PM. Vending fills 14+ hours of after-hours and weekend demand, which campus bookstores and retail can't serve." },
      { emphasis: "Margins compare favorably to snack vending:",
        text: "Single pencils at $1.20 cost sell at $2.50-$3.00; kneaded erasers at $0.90 cost sell at $2.50. SKU-level margin on art supplies runs 50-65%, similar to or above snacks." },
      { emphasis: "Equipment is industrial-style, not glass-front:",
        text: "Fastenal-style helical coils and small bins with secure dispensing — $9-18K per machine, not $5-12K combo. Match the SKU mix to the equipment before scoping placement.", },
    ],
  }),
  statStrip({
    heading: "Art supply vending benchmarks",
    stats: [
      { number: "$400-1800", label: "monthly revenue range", sub: "200-500+ student programs", accent: "blue" },
      { number: "$9-18K", label: "equipment capital per machine", sub: "industrial-style helical-coil vendor", accent: "orange" },
      { number: "50-65%", label: "SKU-level margin", sub: "comparable to snack vending", accent: "green" },
      { number: "14+ hrs", label: "after-hours demand window", sub: "supply room closes at 5 PM", accent: "blue" },
    ],
  }),
  costBreakdown({
    heading: "Art supply vending capital + monthly economics",
    sub: "Mid-traffic placement at a 350-student fine-arts program with 24/7 building access and bi-weekly service.",
    items: [
      { label: "Industrial helical-coil vending machine", amount: "$12,000", range: "$9-18K depending on bins + payment + telemetry" },
      { label: "Cashless payment + telemetry setup", amount: "$650", range: "One-time per-machine integration" },
      { label: "Opening planogram cost-of-goods", amount: "$1,400", range: "180-260 SKU rotation + spare bins" },
      { label: "Install + electrical + delivery", amount: "$450", range: "$300-700 typical" },
      { label: "Monthly gross revenue (mid-traffic)", amount: "$900", range: "$400-1800 by program size" },
      { label: "Less cost-of-goods (38%)", amount: "-$342", range: "Lower than snacks; high-margin SKUs" },
      { label: "Less service + telemetry monthly", amount: "-$95", range: "Bi-weekly route + $35 telemetry" },
      { label: "Net contribution per machine monthly", amount: "$463", range: "Before commission to host institution" },
    ],
    totalLabel: "Approximate per-machine net contribution monthly",
    totalAmount: "$463",
  }),
  comparisonTable({
    heading: "Art supply vending vs nearest alternatives",
    sub: "Compare against campus bookstore, retail art store, and absence of supply access.",
    headers: ["Dimension", "Art supply vending", "Campus bookstore", "Retail art store", "Status quo (no access)"],
    rows: [
      ["Hours of access", "24/7 building access", "9 AM-5 PM weekday", "10 AM-7 PM with travel", "None after 5 PM"],
      ["After-hours emergency item (blade, pencil)", "Available", "Closed", "Closed or 20+ min travel", "Lost work hour"],
      ["Price premium vs retail", "15-35% above retail", "Retail markup", "Baseline retail", "n/a"],
      ["Walkability from studio", "In-building", "On-campus", "Off-campus", "n/a"],
      ["Weekend access", "Yes", "Closed or limited", "Limited hours", "None"],
      ["SKU breadth", "180-260 high-velocity items", "Full breadth", "Full breadth", "n/a"],
      ["Bulk-purchase fit", "Not designed for bulk", "Yes", "Yes", "n/a"],
      ["Cashless payment", "Standard", "Standard", "Standard", "n/a"],
    ],
  }),
  specList({
    heading: "Art supply vending planogram building blocks",
    items: [
      { label: "Drawing pencils + graphite leads", value: "Prismacolor Premier (Black, White, Indigo Blue, Tuscan Red — five-color anchor), Staedtler Mars Lumograph 2H/HB/2B/4B/6B, Faber-Castell 9000 series. Single-pencil dispense matters more than set dispense — students need one specific grade at the moment of crit prep. 30-50% of slot allocation at most fine-arts placements." },
      { label: "Erasers, sharpeners, and small tools", value: "Kneaded erasers (Faber-Castell, Sanford), white plastic erasers (Staedtler Mars), needle-tip sharpeners, X-Acto #11 blade refills (5-pack), Faber-Castell tortillons, blending stumps. X-Acto blade refills are emergency-purchase SKUs during thesis and midterm cycles — keep stocked." },
      { label: "Sketchbooks and small paper", value: "Strathmore 400 series small-format (5.5x8.5 sketch, 9x12 mixed media), Moleskine art journals, single-sheet 18x24 newsprint pads, single-sheet bristol board. Avoid full-size 22x30 sheets — equipment can't dispense without damage. Match sheet size to dispense bin geometry at scoping." },
      { label: "Markers, pens, and ink", value: "Copic Ciao single markers (4-6 anchor colors), Sakura Pigma Microns (sizes 005-08), Faber-Castell PITT artist pens, Sharpie fine and ultra-fine, India ink small bottles (cap-sealed where local rule allows). Copic Ciao margins are strong but capital cost per marker is $4-6 — manage shrinkage carefully with telemetry-tracked dispense." },
      { label: "Paint, brushes, and small palettes", value: "Single tubes of student-grade acrylic (Liquitex Basics 22ml), gouache singles, watercolor singles, synthetic brush 3-packs, small plastic palettes. Full-size 75ml tubes don't fit standard bin geometry — restrict to 22ml or smaller. Avoid open-cup paint and aerosol fixative (regulatory + safety)." },
      { label: "Specialty consumables for media-specific programs", value: "Charcoal vine bundles, willow charcoal, compressed charcoal, chamois cloth for blending, fixative spray cans (where venue rule permits + secure dispensing required). Match consumables to actual studio programming — sculpture programs need different SKUs than painting or illustration." },
      { label: "Non-art adjacencies that lift overall throughput", value: "Phone chargers (5-10% of slots), AA/AAA batteries (3-5% of slots), USB-C and Lightning cables, small notebook spirals, ballpoint pens, mechanical pencil leads. Adjacencies lift average daily throughput by 15-25% at art-school placements and reduce machine idle." },
      { label: "Telemetry-driven planogram refresh cadence", value: "Refresh every 2-4 weeks during active semester, monthly during summer and winter break. Track per-SKU velocity weekly. Pencil grades and blade refills shift with assignment cycle — drawing-fundamentals course concentrates 2B/4B demand, advanced printmaking concentrates blade and brayer demand. Coordinate with department staff on syllabus calendar." },
      { label: "Equipment configuration: industrial helical-coil, not glass-front", value: "Fastenal-style or Vendekin-style industrial machines with 60-180 helical coils and secure bin dispensing. Glass-front snack machines mishandle small dense items (pencils jam, blades pose safety risk). Capital is higher ($9-18K vs $5-12K combo) but loss rate is lower and SKU breadth higher." },
      { label: "Cashless payment + telemetry as a baseline", value: "Cantaloupe / Nayax / USConnect cashless reader required — students rarely carry cash, and Apple Pay / Google Pay / contactless card lifts dispense rate 25-40% over coin-only. Telemetry is mandatory for planogram refinement at low-volume specialty placements; do not deploy without." },
    ],
  }),
  decisionTree({
    heading: "Should we scope an art supply vending placement?",
    question: "Does the venue have 100+ active fine-arts students with 24/7 building access, a closed-after-5-PM supply room, and a department staff contact willing to coordinate on syllabus calendar + planogram refresh?",
    yesBranch: {
      title: "Scope a placement — economic case is real",
      description: "At 100+ active fine-arts students with 24/7 access and a closed supply room, the after-hours demand window supports $400-1800 monthly revenue and 50-65% margins. Scope industrial-style equipment, coordinate with department staff on syllabus and refresh cadence, and deploy with cashless and telemetry from day one. Bi-weekly service cadence during semester; weekly during midterm and finals weeks.",
      finalTone: "go",
      finalLabel: "Scope the placement",
    },
    noBranch: {
      title: "Don't scope — placement economics won't support",
      description: "Under 100 students or without 24/7 access, throughput is too low to justify the $9-18K capital + bi-weekly service. Consider micro-market or alternative amenity solutions. Revisit if program expands or if multiple smaller programs can share a single vending placement.",
      finalTone: "stop",
      finalLabel: "Skip or revisit later",
    },
  }),
  caseStudy({
    tag: "Capability scenario · 380-student fine-arts program",
    title: "Art supply vending at a 380-student fine-arts program",
    context: "Capability description for a fine-arts program with painting, drawing, illustration, and printmaking concentrations. Building runs 24/7 with student-ID badge access; supply room is staffed 9 AM-5 PM weekday. Vending placement scoped at the second-floor studio corridor near the printmaking and drawing studios. Cashless and telemetry deployed; bi-weekly service cadence with weekly service during midterm and final-crit weeks.",
    meta: [
      { label: "Program size", value: "380 active students" },
      { label: "Building access", value: "24/7 student-ID badge" },
      { label: "Supply room hours", value: "9 AM-5 PM weekday" },
      { label: "Machine count", value: "1 industrial helical-coil unit" },
      { label: "Service cadence", value: "Bi-weekly + weekly during midterm/finals" },
    ],
    results: [
      { number: "$900-1200", label: "monthly revenue target" },
      { number: "180-220", label: "SKU rotation" },
      { number: "50-65%", label: "gross margin range" },
      { number: "10-15%", label: "commission to department" },
    ],
  }),
  tipCards({
    heading: "Five art supply vending mistakes",
    sub: "Each documented from placement scoping and operator post-implementation reviews at fine-arts venues.",
    items: [
      { title: "Using a snack glass-front machine for art supplies", body: "Glass-front snack machines mishandle small dense items — pencils jam in coils, blades pose safety risk, paint tubes fall and rupture. Industrial helical-coil with secure dispensing is required. Capital is higher but loss rate is lower and SKU breadth higher. Specify equipment type at proposal." },
      { title: "Ignoring the syllabus calendar", body: "Pencil grades and blade demand shift with the assignment cycle. Drawing-fundamentals concentrates 2B/4B demand; printmaking concentrates blade and brayer demand. Coordinate with department staff on syllabus before opening planogram; refresh weekly during midterm and finals. Operators that ignore syllabus miss the demand peak." },
      { title: "Pricing too low to recover capital", body: "Industrial-style equipment is $9-18K vs $5-12K combo. Pricing at retail parity won't recover capital at low-volume specialty placements. 15-35% above retail is tolerated for after-hours access; on emergency SKUs (blades, pencils during crit week) higher tolerance exists. Set price by willingness-to-pay, not retail parity." },
      { title: "Skipping cashless and telemetry", body: "Students rarely carry cash. Cashless (Apple Pay / Google Pay / contactless) lifts dispense rate 25-40% over coin-only. Telemetry is mandatory for planogram refinement at low-volume specialty placements — without it, planogram drifts and stockouts cluster on high-velocity SKUs during peak weeks. Deploy both from day one." },
      { title: "Stocking full-size paper and 75ml tubes", body: "Full-size 22x30 paper and 75ml paint tubes don't fit standard bin geometry. Restrict to 5.5x8.5 to 9x12 paper and 22ml tubes. Operators that load oversized SKUs see jam rates spike, paint rupture, and customer-complaint volume rise. Match SKU geometry to equipment bin at scoping." },
    ],
  }),
  inlineCta({
    text: "Want the art supply vending scoping framework (equipment selection + planogram + syllabus coordination + telemetry economics)?",
    buttonLabel: "Get the scoping framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to scope art supply vending at fine-arts programs, makerspaces, and community art centers — including industrial-style equipment selection, planogram building blocks, syllabus-driven refresh cadence, cashless + telemetry deployment, and host commission structures. The benchmarks reflect operator-side data and department-staff feedback from specialty vending placements at art schools and university fine-arts departments.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What is an art supply vending machine?", answer: "An industrial-style vending machine (Fastenal-style or Vendekin-style) with helical coils and secure bin dispensing, stocked with pencils, brushes, paints, sketchbooks, markers, erasers, blades, and small consumables. Capital is $9-18K per machine vs $5-12K for snack combo; SKU geometry, dispensing safety, and breadth are matched to fine-arts use rather than to snack vending.", audience: "Hosts" },
      { question: "Where do they actually work?", answer: "Art schools, university fine-arts departments, community art centers, makerspaces, and museum education wings with 100+ active students, 24/7 building access, and a supply room that closes at 5 PM. Below 100 active students or without 24/7 access, throughput won't support $9-18K capital + bi-weekly service.", audience: "Department Staff" },
      { question: "What's the typical monthly revenue?", answer: "$400-900 monthly at 200-student programs and $900-1800 at 500+ student programs with strong programming. Margins run 50-65% at the SKU level — comparable to or above snack vending. The price premium for after-hours access (15-35% above retail) supports the equipment capital recovery.", audience: "Operators" },
      { question: "What SKUs should we stock?", answer: "Drawing pencils + graphite (Prismacolor Premier, Staedtler Mars), erasers + small tools (kneaded erasers, X-Acto #11 blade refills), small-format sketchbooks (Strathmore 400, Moleskine), markers + pens (Copic Ciao, Sakura Pigma Micron), small paint tubes (Liquitex Basics 22ml), and non-art adjacencies (phone chargers, batteries, USB-C cables). 180-260 SKU rotation typical.", audience: "Operators" },
      { question: "How often do we restock?", answer: "Bi-weekly during active semester; weekly during midterm and finals weeks; monthly during summer and winter break. Telemetry-driven refresh — track per-SKU velocity weekly and adjust to syllabus calendar. Operators that ignore syllabus miss the demand peak.", audience: "Operators" },
      { question: "What's the commission to the host institution?", answer: "10-15% of net sales typical at fine-arts placements; lower than mainstream vending because per-machine revenue is lower and capital is higher. Some department-staff agreements substitute operator-provided amenity (free pencils for foundation-year students) for cash commission — structure as written agreement either way.", audience: "Hosts" },
      { question: "Can we sell aerosol fixative or X-Acto blades?", answer: "X-Acto #11 blade refill 5-packs are standard at art-school vending with secure-bin dispensing. Aerosol fixative depends on venue rule and operator capability — some venues prohibit aerosols indoors, some require secure dispensing with age-of-major verification, and some operators decline to handle. Verify state and venue rule before adding.", audience: "Department Staff" },
      { question: "Do we need cashless payment?", answer: "Yes. Students rarely carry cash; Apple Pay, Google Pay, and contactless card payment lift dispense rate 25-40% over coin-only. Cantaloupe / Nayax / USConnect cashless reader is the modern baseline. Skip cashless and revenue drops 25-40% at art-school placements — not optional.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — specialty vending industry guidance", url: "https://www.namanow.org/", note: "Industry trade association covering specialty vending equipment and operator practice" },
      { label: "Fastenal Vending — industrial vending equipment", url: "https://www.fastenal.com/products/vending", note: "Industrial helical-coil vending platform commonly adapted for specialty SKUs" },
      { label: "NASAD — National Association of Schools of Art and Design accreditation standards", url: "https://nasad.arts-accredit.org/", note: "Accreditation framework for fine-arts programs in the US" },
      { label: "Cantaloupe / Nayax / USConnect — cashless and telemetry platforms", url: "https://www.cantaloupe.com/", note: "Modern operator cashless and telemetry platforms for specialty vending" },
      { label: "Strathmore + Prismacolor + Faber-Castell — SKU-level retail pricing benchmarks", url: "https://www.strathmoreartist.com/", note: "Manufacturer SKU references for art supply planogram building blocks" },
    ],
  }),
  relatedGuides({
    heading: "Related specialty vending guides",
    items: [
      { eyebrow: "Sister guide", title: "Specialty vending overview", description: "Eight specialty vending categories in commercial production with equipment, economics, and regulatory framework.", href: "/specialty-vending-machines/specialty-vending-overview" },
      { eyebrow: "Sister guide", title: "Specialty vending for campus needs", description: "Match specialty categories to campus placements: fresh food, electronics, personal care, art supplies.", href: "/specialty-vending-machines/specialty-vending-campus-needs" },
      { eyebrow: "Hub", title: "All specialty vending guides", description: "Specialty equipment, planogram, regulatory framework, and operator capability across categories.", href: "/specialty-vending-machines" },
    ],
  }),
]);
process.exit(0);
