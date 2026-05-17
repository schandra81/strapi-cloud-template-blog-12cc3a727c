import { seedPost, tldr, statStrip, comparisonTable, specList, timeline, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("public-building-vending-logistics", [
  tldr({
    heading: "What does servicing vending in a public building actually involve?",
    paragraph:
      "Servicing a public building isn't 'restock and leave.' Every visit involves access credentialing (which can take weeks to first obtain), security screening at the loading dock or main entry, parking constraints that limit where the service vehicle can sit, and longer in-building travel from dock to vending location. The result: a tech who can hit 15-20 commercial accounts in a day will only hit 6-8 government accounts. Route density falls 50-60%, which has to be priced into the contract. Operators who win public-building work treat the access procedures as the *job*, not the overhead — and they invest in long-term relationships with facility staff because relationships solve operational problems that procedure can't.",
    bullets: [
      { emphasis: "Credentialing first, restocking second:", text: "Federal building credentials take 4-12 weeks to issue. Onboarding a new tech to a federal route adds 6-10 weeks before solo service is possible." },
      { emphasis: "Route density drops 50-60%:", text: "15-20 commercial stops/day vs 6-8 government stops/day. Same tech, half the throughput. Contract pricing must reflect this." },
      { emphasis: "Relationships compound:", text: "A facility manager who knows your tech by name handles minor issues directly. The relationship is worth more than any clause in the SLA." },
    ],
  }),
  statStrip({
    heading: "Public-building service-logistics benchmarks",
    stats: [
      { number: "4-12 wk", label: "first federal credential", sub: "from application to badge", accent: "blue" },
      { number: "6-8", label: "service stops per day", sub: "vs 15-20 commercial", accent: "orange" },
      { number: "15-25 min", label: "added per stop", sub: "for screening + dock-to-location travel", accent: "orange" },
      { number: "6-10 wk", label: "new-tech route onboarding", sub: "before solo service permitted", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Commercial vs public-building service operations — where the differences add up",
    sub: "Same equipment, same restock task, very different operational envelope. Each row drives a real per-day throughput delta.",
    headers: ["Operations axis", "Commercial account", "Public-building account"],
    rows: [
      ["Service stops per day", "15-20", "6-8"],
      ["Credential required", "None", "Building-specific (federal/state/local)"],
      ["Loading-dock screening", "None or minimal", "Vehicle + cargo screening"],
      ["Tools brought on-site", "Full kit", "Screened; some restrictions"],
      ["Parking", "Building lot, free", "Designated lot, often metered or distant"],
      ["Dock-to-machine travel", "1-3 min", "5-15 min through controlled corridors"],
      ["Restock schedule flexibility", "Walk-in any business hour", "Scheduled around court/session/agency hours"],
      ["Tech onboarding to route", "1-2 days", "6-10 weeks for federal"],
      ["Issue escalation path", "Direct to building manager", "Through agency contracting officer"],
    ],
  }),
  specList({
    heading: "Credentialing types every government-account operator should know",
    items: [
      { label: "HSPD-12 / PIV credential (federal)", value: "Personal Identity Verification card. Required for unescorted access at most federal buildings. 4-12 week first issuance, 5-year validity, agency-specific provisioning. Background-check sufficient for most vending techs (Tier 1)." },
      { label: "PIV-I (interoperable, federal contractor)", value: "Issued by approved contractor PIV-I providers; functionally interoperable with PIV. Used when the contractor (operator) doesn't have a direct federal sponsor. Slightly faster to provision but limited in some agencies." },
      { label: "GSA-issued PASS card", value: "GSA's contractor identity card for buildings under GSA management. Distinct from PIV; common for vending operators serving multiple GSA-managed sites." },
      { label: "State / county contractor badges", value: "Issued by individual jurisdictions. Application process varies widely — some require fingerprinting, some require references, some just an application and ID. Annual renewal typical." },
      { label: "Facility-specific visitor badge", value: "Day-of badge issued at the security desk on arrival. Backstop when the regular credential is unavailable. Slower process; expect 10-20 minutes per visit." },
      { label: "Escorted access (no badge)", value: "Service tech escorted by facility staff. Only viable for one-off or rare visits — facility staff cost is high and the model doesn't scale to recurring routes." },
      { label: "Background-investigation tier", value: "Tier 1 (NACI) is standard for low-risk contractor access; Tier 3 (SF-85P) for moderate-risk; Tier 5 (SF-86) for high-risk classified-facility access. Vending typically only requires Tier 1." },
      { label: "Credential reciprocity", value: "Some credentials work across multiple buildings (HSPD-12 PIV is the most portable). Others are facility-locked. Track which credentials each tech holds and which buildings they unlock — saves planning time." },
    ],
  }),
  timeline({
    heading: "A realistic public-building service day, hour by hour",
    sub: "Single tech servicing four downtown government accounts. Notice how much of the day is access overhead, not vend-handling.",
    howToName: "Public-building vending service-route day",
    totalTime: "P1D",
    steps: [
      { label: "6:30 AM", title: "Warehouse load + route prep", description: "Tech loads van for the day, organizes per-account totes, prints any required arrival manifests (federal buildings require pre-notification at some sites). 30 min." },
      { label: "7:00–7:30 AM", title: "Travel to first account", description: "Drive to first downtown account. Park at designated contractor lot, walk to loading dock. 30 min." },
      { label: "7:30–8:15 AM", title: "Account 1 — federal courthouse", description: "Loading-dock vehicle screening (10 min), tech screening (5 min), cargo inspection (5 min), dock-to-jury-room corridor travel (8 min), machine restock (12 min). 45 min total — restock itself is 27%." },
      { label: "8:15–10:00 AM", title: "Accounts 2 + 3 — state office building + adjacent county building", description: "Two stops, ~50 min each. State building has dedicated service entrance (saves screening time). County uses main entry (full screening). 1 hr 45 min total." },
      { label: "10:00–11:00 AM", title: "Lunch / travel to afternoon account", description: "Cross-town travel to fourth account. Lunch en route. 1 hr." },
      { label: "11:00 AM–12:30 PM", title: "Account 4 — federal regional office", description: "Most complex stop. Pre-arrival call to facility security (5 min), screening (15 min), badge pickup, escort to floor (10 min), restock at 3 machines on 2 floors (40 min), escort out (10 min), debrief at security desk (10 min). 1 hr 30 min." },
      { label: "12:30–1:30 PM", title: "Return to warehouse + close-out", description: "Drive back, unload empty totes, file daily report, log any incidents. 1 hour." },
    ],
  }),
  tipCards({
    heading: "Four logistics mistakes that cost government-account operators",
    sub: "Each shows up routinely in service-route post-mortems. All preventable with route planning that takes the access envelope seriously.",
    items: [
      { title: "Pricing the contract at commercial route economics", body: "If your route economics assume 15 stops/day at a federal building, you'll lose money. Build the bid against 6-8 stops/day. Some operators win government work at commercial pricing then quietly degrade service — that's a fast path to non-renewal and bad references." },
      { title: "Single-credentialing the route lead", body: "If only one tech holds the credential, vacation and illness create service gaps that hit the SLA. Cross-credential at least two techs per government account. The 6-10 week onboarding is a one-time cost, recovered the first time the lead is out sick." },
      { title: "Treating the security desk as adversarial", body: "Security staff have heard every excuse and seen every shortcut. The tech who shows up early, has paperwork in order, knows the dock manager by name, and brings the security team a box of doughnuts at Christmas gets through screening 30% faster. Not a joke — measurable in route timing data." },
      { title: "Skipping the post-visit debrief", body: "Public buildings change rules constantly. The 30-second 'anything new I should know?' conversation with the security desk on the way out catches new escort requirements, changed dock hours, or policy updates before they bite the next visit." },
    ],
  }),
  inlineCta({
    text: "Want the credential matrix template (per-tech, per-building, expiration tracking) operators use for government-account fleets?",
    buttonLabel: "Get the credential matrix",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has run government-vending routes across federal, state, and county portfolios for twelve years. The 4-12 week credential timelines, 6-8 stops-per-day route density, and 30% screening-speedup-by-relationship benchmarks come directly from his standing route-operations data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much should we add to a commercial-vending bid when bidding public-building work?", answer: "20-40% on the service-side line items (route, restock, response time). Less on the equipment side (machines and telemetry cost the same). The biggest hidden cost is tech onboarding — budget $1,500-3,500 per new tech for credential processing, training, and lost productivity during onboarding.", audience: "Operators" },
      { question: "Can we use general-labor contractors for restock in government buildings?", answer: "Generally no for credentialed buildings — the credential is issued to an individual, and most government contracts require background-checked W-2 employees of the operator. Some buildings allow temp labor under direct supervision. Confirm in the contract; the auditing implications of getting it wrong are serious.", audience: "Operators" },
      { question: "What happens if our tech's credential gets revoked?", answer: "Lose access immediately. Common causes: missed re-fingerprint window, change in background-check status, or an incident report. Mitigation: track expiration dates in a shared system with 60/30/7-day reminders, and maintain 2× the technicians-needed-for-route credentialed at all times.", audience: "Operators" },
      { question: "Why is the operator's invoice so much higher than the office-park vendor's?", answer: "Public-building service routes are 50-60% less dense than commercial routes — the operator's per-stop cost is 2× or more. Add credentialing infrastructure, longer travel within buildings, scheduling constraints around session hours, and the operator's higher insurance for government work. The differential is real, not padding.", audience: "Facilities" },
      { question: "How do we know our operator is actually doing the restocks they claim?", answer: "Telemetry. Modern machines report every vend event in real time. Cross-check the operator's stated restock visits against vend volume — a restock should be followed by a measurable inventory bump and a clearing of low-SKU alerts. If telemetry doesn't tie out to claimed visits, escalate. Operators with nothing to hide give you the dashboard access on request.", audience: "Facilities" },
      { question: "Should we provide a dedicated parking space for the vending service vehicle?", answer: "Yes if you can — saves the tech 5-15 minutes per visit, which compounds across the contract term. Even a 'service-vehicle 15 minute' loading-zone designation helps. Most buildings can do this without policy changes if facilities asks.", audience: "Facilities" },
      { question: "What's a reasonable SLA for restock response after a stockout report?", answer: "Commercial standard is 24-48 hours. Government accounts typically negotiate 24 hours for critical placements (jury rooms, federal courtroom corridors, agency front-desks) and 48-72 hours for back-office machines. SLA misses should carry a defined credit on the next commission payment.", audience: "Facilities" },
      { question: "Are there special insurance requirements for government-account operators?", audience: "Operators", answer: "Yes. General liability minimums are typically $1M-2M per occurrence (vs $500K-1M commercial), workers comp at state-statutory levels, and many federal contracts require Service Contract Act compliance (prevailing wage). Some agencies require cyber-liability coverage for telemetry data. Read each agency's standard contract supplements carefully." },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "HSPD-12 / FIPS 201 — federal Personal Identity Verification standard", url: "https://www.dhs.gov/homeland-security-presidential-directive-12", note: "Source for federal credential requirements and timelines" },
      { label: "GSA — contractor PASS card program", url: "https://www.gsa.gov/", note: "Reference for GSA-managed building access" },
      { label: "Federal Acquisition Regulation (FAR) Part 52 — contractor personnel security clauses", url: "https://www.acquisition.gov/far/part-52", note: "Standard contract supplements for federal vending work" },
      { label: "Service Contract Act (SCA) — Department of Labor wage determinations", url: "https://www.dol.gov/agencies/whd/government-contracts", note: "Prevailing-wage requirements for service contractors on federal accounts" },
      { label: "NAMA — public-building operator working group resources", url: "https://www.namanow.org/", note: "Industry guidance on credentialing, route density, and pricing" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending in courthouse waiting areas", description: "Captive-audience math, glass-free security envelope, and the planogram weighting that lifts juror-area sales 20-40%.", href: "/vending-for-public-buildings/vending-in-courthouse-waiting-areas" },
      { eyebrow: "Contracts", title: "Managing vending contracts at agencies", description: "Quarterly review cadence, commission reconciliation, healthy-vending audits, and the active-management practices that compound over contract terms.", href: "/vending-for-public-buildings/managing-vending-contracts-agencies" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Logistics, contracts, accessibility, security, and the operator-side patterns that work across government accounts.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
