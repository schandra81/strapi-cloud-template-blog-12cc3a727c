import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("who-fills-and-restocks-vending-machines", [
  tldr({
    heading: "Who fills and restocks vending machines?",
    paragraph:
      "Under standard full-service vending contracts, the operator handles all restocking. The operator's route drivers visit machines on telemetry-driven schedules (or fixed weekly routes at legacy operators), unlock the machine, verify inventory, place new stock behind older (FIFO discipline), close and lock the machine, update the inventory system. The host (property owner / facility manager) provides electrical and floor space; receives commission on net sales. Operators with telemetry-driven prioritization optimize routes daily — skipping machines that don't need restock, prioritizing machines about to run out. Route drivers typically handle 25-50 machines per day depending on route density. They're employees of the operator, badged for site access where applicable (SIDA for airports, hospital security badges, federal access badges). Customers and host staff never restock machines under standard contracts — restocking is operator scope. Self-service or owner-operator models exist but are rare; only at very small placements without standard operator coverage.",
    bullets: [
      { emphasis: "Operator's route drivers handle restocking:", text: "Standard full-service vending. Drivers visit machines on telemetry-driven schedules. 25-50 machines per day per driver. FIFO discipline; inventory system update." },
      { emphasis: "Host provides space, receives commission:", text: "Host's role is electrical + floor space + coordination. Operator owns operations including restocking. Commission 10-25% of net sales to host." },
      { emphasis: "Customers and host staff don't restock:", text: "Under standard contracts, restocking is operator scope. Self-service models rare; only at very small placements without operator coverage." },
    ],
  }),
  statStrip({
    heading: "Vending restock benchmarks",
    stats: [
      { number: "Operator route drivers", label: "standard restock workforce", sub: "full-service contracts", accent: "blue" },
      { number: "25-50", label: "machines per driver per day", sub: "depending on route density", accent: "blue" },
      { number: "Telemetry-driven", label: "modern route schedule", sub: "skip / prioritize based on need", accent: "blue" },
      { number: "FIFO", label: "restock discipline", sub: "first-in-first-out", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Restock workforce + workflow by service model",
    sub: "Different service models have different restock workforces. Full-service operator standard at most commercial placements.",
    headers: ["Service model", "Who restocks", "Schedule cadence", "Best fit"],
    rows: [
      ["Full-service vending (standard)", "Operator route drivers", "Telemetry-driven; weekly typical", "Most commercial placements"],
      ["Self-service / owner-operator", "Owner operator", "Owner-managed", "Very small placements without operator"],
      ["Managed-services", "Operator drivers (host pays fee)", "Operator-managed", "Specialty / experimental"],
      ["Refreshment program", "Refreshment company employees", "Multi-cycle (vending + coffee + fruit)", "Premium offices, dealerships"],
      ["Micro-market", "Operator drivers + fresh food specialist", "Multi-cycle (2-3× weekly + daily for fresh)", "High-volume placements"],
    ],
  }),
  specList({
    heading: "Vending restock workforce specifications",
    items: [
      { label: "Operator route drivers", value: "Route drivers are operator employees. Pre-employment background checks. Badged for site access where applicable (SIDA for airports, hospital security badges, federal CAC/PIV where applicable). 25-50 machines per day per driver depending on route density." },
      { label: "Telemetry-driven prioritization", value: "Modern route schedules driven by telemetry data — fill level + days-to-empty trigger visit. Routes optimized daily; skip machines that don't need restock; prioritize machines about to stockout. Cuts truck miles 25-40% vs fixed routes." },
      { label: "Per-visit workflow", value: "Driver unlocks machine, verifies telemetry status, removes empty / expired stock, places new stock behind older (FIFO), closes and locks machine, cleans exterior, updates inventory system. 15-25 minutes per machine typical." },
      { label: "FIFO discipline", value: "First-in-first-out. New stock placed behind older stock so older sells first. Documented procedure; periodic audit. Critical for waste reduction (3-5× impact). Best-in-class operators include FIFO audit in route quality program." },
      { label: "Inventory system update", value: "Driver updates inventory system at each machine — typically via mobile device or tablet. Real-time CMMS / ERP update. Connects to telemetry for cross-check. Modern operators run integrated workflow." },
      { label: "Site access badging", value: "Drivers badged for site access where applicable. SIDA for airports (post-security routes). Hospital security badges. Federal CAC / PIV at federal sites. Pre-employment background checks + periodic re-vetting. Operator HR maintains current badging." },
      { label: "Service combined with restock", value: "Driver handles exterior cleaning, payment hardware inspection, signage check during restock visit. Telemetry status verified before leaving site. Integrated visit reduces total driver time per machine." },
      { label: "Driver training + certification", value: "Operator-side training: equipment operation, FIFO discipline, customer service, troubleshooting, safety (lifting, route truck driving). ServSafe or equivalent food handler certification for food-handling drivers. Annual refresher training." },
      { label: "Safety + security protocols", value: "Driver safety (truck driving, lifting product, customer interaction). Cash collection at cash-accepting machines (two-person rule at high-security sites). Tamper-evident packaging on stock. Operator's general liability + workers' comp insurance covers route operations.", },
    ],
  }),
  tipCards({
    heading: "Five vending restock misconceptions",
    sub: "Each is common misunderstanding by prospective hosts. All clarifiable with structured RFP review.",
    items: [
      { title: "Thinking we need to restock machines", body: "Under standard full-service vending contracts, the operator handles all restocking. Host provides electrical and floor space; operator handles operations. Host staff doesn't unlock or restock machines (machines are locked operator property)." },
      { title: "Thinking customers can refill machines", body: "Customers never restock. Machines are operator-owned and locked. Only operator route drivers have keys / access. Some 'fill yourself' specialty models exist but are very rare and not full-service vending." },
      { title: "Underestimating telemetry-driven scheduling", body: "Modern operators don't run fixed weekly routes; they run telemetry-driven prioritization. Some machines visited 2-3× weekly during peaks; others 1-2× monthly during lows. Driver workload varies by demand pattern, not fixed schedule." },
      { title: "Skipping driver background check requirement", body: "Route drivers access host's facility regularly. Pre-employment background checks + periodic re-vetting matter. SIDA / hospital / federal sites require explicit badging. Verify operator HR practices at proposal; modern operators document; legacy operators may not." },
      { title: "Not coordinating site access at install", body: "Operators need site access for restocking. Coordinate at install — entry hours, security check-in, badge issuance, after-hours access for some placements (24-hour retailers, hospitals, airports). Without coordinated access, restocking efficiency degrades.", },
    ],
  }),
  inlineCta({
    text: "Want the vending restock workflow framework (operator scope + telemetry + FIFO + access)?",
    buttonLabel: "Get the restock framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending restock workflow design across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — including telemetry-driven prioritization, FIFO discipline, driver workforce management, and site access coordination. The benchmarks reflect operator-side data from current accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who fills and restocks vending machines?", answer: "Under standard full-service vending contracts, operator route drivers handle restocking. Drivers visit machines on telemetry-driven schedules. Host provides electrical and floor space; receives commission on net sales. Customers and host staff never restock machines.", audience: "Property Managers" },
      { question: "How often do drivers visit?", answer: "Telemetry-driven schedule. Some machines 2-3× weekly during peaks; others 1-2× monthly during lows. Modern operators visit based on need (fill level + days-to-empty trigger). Legacy operators run fixed weekly routes.", audience: "Property Managers" },
      { question: "Are drivers employees of the operator?", answer: "Yes. Route drivers are operator employees. Pre-employment background checks. Badged for site access where applicable. ServSafe or equivalent food handler certification for food-handling drivers. Modern operators have structured HR + training; legacy operators may not.", audience: "HR / Security" },
      { question: "What's FIFO discipline?", answer: "First-in-first-out — driver places new stock behind older stock so older sells first. Prevents premature expiration. Reduces waste 3-5× vs reverse-FIFO. Documented procedure + periodic audit. Critical for perishable / dated SKUs. Modern operators include in route quality program.", audience: "Operators" },
      { question: "Do customers ever restock machines?", answer: "Almost never. Machines are operator-owned and locked. Only operator route drivers have keys / access. Some 'fill yourself' specialty models exist but are rare and not standard full-service vending. Host staff don't restock either.", audience: "Property Managers" },
      { question: "What if a machine runs out before driver arrives?", answer: "Telemetry should detect approaching-stockout and trigger priority visit. If stockout occurs, operator dispatches emergency restock (24-48 hour typical). Modern operators reduce stockouts 50-70% vs legacy. Persistent stockouts signal operator quality issue.", audience: "Property Managers" },
      { question: "How does site access coordination work?", answer: "Operator coordinates at install on entry hours, security check-in, badge issuance, after-hours access for some placements. SIDA / hospital / federal sites require explicit badging. Build access coordination into contract; verify at install. Operator HR maintains current badging.", audience: "Operators" },
      { question: "What happens if operator drivers can't access our site?", answer: "Restocking efficiency degrades. Operator workload increases (rescheduling, longer visits). Host receives less reliable service. Build site access into operator contract at signature; verify access workflow at install; address access issues promptly at quarterly review.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator route practice", url: "https://www.namanow.org/", note: "Industry guidance on vending route operations and driver workforce" },
      { label: "ServSafe — food handler certification", url: "https://www.servsafe.com/", note: "Standard food safety certification framework" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry route platforms", url: "https://www.cantaloupe.com/", note: "Telemetry platforms enabling driver route prioritization" },
      { label: "OSHA — workplace safety for route drivers", url: "https://www.osha.gov/", note: "Federal occupational safety covering route driver workforce" },
      { label: "TSA — SIDA badge framework", url: "https://www.tsa.gov/", note: "Federal security framework for airport route driver badging" },
    ],
  }),
  relatedGuides({
    heading: "Related operations guides",
    items: [
      { eyebrow: "Sister guide", title: "How often are vending machines refilled?", description: "Restock cadence, telemetry-driven prioritization, and per-placement tuning.", href: "/vending-faq/how-often-are-vending-machines-refilled" },
      { eyebrow: "Operations", title: "What is full-service vending?", description: "Service model overview — operator scope and host responsibility.", href: "/vending-Info-for-businesses/what-is-full-service-vending" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Service models, placement, operations, and operator selection.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
