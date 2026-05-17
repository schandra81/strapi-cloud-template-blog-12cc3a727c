import { seedPost, tldr, statStrip, specList, comparisonTable, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("secure-vending-design-public", [
  tldr({
    heading: "What does secure vending design look like for public buildings?",
    paragraph:
      "Secure vending isn't one feature — it's four layers stacked. Layer 1: remove the motivation. Cashless-only operation eliminates the primary incentive for forced entry; modern public-building vending runs 95%+ cashless. Layer 2: physically harden the equipment. Reinforced cabinets, security glass, anti-pry hardware, pick-resistant locks, internal alarms and tamper sensors at high-risk sites. Layer 3: environmental design. Placement near security desks, after-hours lighting, camera coverage tied to the building's security system. Layer 4: access control on the operator side. Background-checked techs, badge programs with audit trails, controlled chain-of-custody. Operators serving public buildings well stack all four. Operators who try to economize by skipping layers pay for it in loss and downtime.",
    bullets: [
      { emphasis: "Cashless-only is the dominant security move:", text: "Removing cash removes the motivation. 95%+ of modern public-building vending runs cashless." },
      { emphasis: "Reinforced cabinets + security glass:", text: "Stops opportunistic attacks. Higher-grade equipment is a small fraction of total cost at public-sector accounts." },
      { emphasis: "Placement matters more than people realize:", text: "Near security desks + after-hours lighting + camera coverage cuts incident rates 60-80% vs unmonitored placements." },
    ],
  }),
  statStrip({
    heading: "Public-building vending security benchmarks",
    stats: [
      { number: "95%+", label: "cashless transaction share", sub: "modern public-building vending", accent: "blue" },
      { number: "60-80%", label: "incident reduction", sub: "from camera + lighting + placement", accent: "orange" },
      { number: "<0.5%", label: "loss rate target", sub: "across all four layers stacked", accent: "orange" },
      { number: "$200-800", label: "security hardening premium", sub: "per machine vs standard equipment", accent: "blue" },
    ],
  }),
  specList({
    heading: "The four security layers — what each one specifically requires",
    items: [
      { label: "Layer 1: Cashless-only operation", value: "Card reader + contactless (EMV chip, Apple/Google Wallet) handles 95%+ of payments. Bill validator disabled in firmware or physically removed. No coin mechanism. Removes the cash-box target entirely." },
      { label: "Layer 2A: Reinforced cabinet construction", value: "Higher-gauge steel (16 ga vs standard 18 ga), reinforced door frames, internal cross-bracing. Resists hammer attacks and crowbar pry attempts. Adds $200-400 per machine; standard at most public-building operators." },
      { label: "Layer 2B: Security glass on snack-machine fronts", value: "Polycarbonate or laminated glass (vs standard tempered) resists shatter attacks. Adds $80-150 per machine. Mandatory at transit-station, courthouse-exterior, and other high-exposure placements." },
      { label: "Layer 2C: Anti-pry door hardware", value: "Recessed hinges, anti-leverage door edges, pick-resistant and bump-resistant lock cylinders. Some manufacturers offer Medeco or ASSA-Abloy cylinder upgrades for $80-200." },
      { label: "Layer 2D: Internal alarms + tamper sensors", value: "Motion sensors inside the cabinet, door-position switches, vibration sensors. Triggers operator alert and (optionally) audible alarm on attack. $300-600 per machine; standard at high-risk placements." },
      { label: "Layer 3: Placement strategy", value: "Near security desks (within 30 ft of staffed area), in well-lit corridors, on lines-of-sight from camera coverage. Avoid: isolated corridors, after-hours-unsupervised exterior placements, blind-corner alcoves." },
      { label: "Layer 4A: Operator background checks", value: "Standard public-sector requirement: criminal background check on every service tech. Many public sites require fingerprint-based federal background check (Tier 1 NACI minimum)." },
      { label: "Layer 4B: Badge + key control programs", value: "Issued service-tech badges with audit trail of every site visit. Lost/stolen badges deactivated within hours. Operator's badge program documented and auditable; standard at federal and high-security sites." },
    ],
  }),
  comparisonTable({
    heading: "Standard commercial vending security vs public-building secured vending",
    sub: "Same equipment vocabulary, different specification choices. Each axis adds modest cost and dramatically reduces loss exposure.",
    headers: ["Security element", "Standard commercial vending", "Public-building secured vending"],
    rows: [
      ["Cash handling", "Cash + card hybrid", { icon: "check", text: "Cashless-only standard" }],
      ["Cabinet steel gauge", "18 ga standard", "16 ga reinforced"],
      ["Snack machine glass", "Tempered", "Polycarbonate or laminated"],
      ["Door hardware", "Standard hinges + cylinder", "Anti-pry hinges + Medeco / ASSA-Abloy cylinder"],
      ["Internal alarms", "Optional", { icon: "check", text: "Standard at high-risk placements" }],
      ["Lighting around placement", "Per building default", "After-hours dedicated lighting"],
      ["Camera coverage", "Optional", { icon: "check", text: "Integrated with building security" }],
      ["Service-tech screening", "Operator's discretion", "Background check + badge program"],
      ["Total per-machine security premium", "Baseline", "+$200-800"],
      ["Typical loss rate", "1-3%", { icon: "check", text: "<0.5%" }],
    ],
  }),
  tipCards({
    heading: "Four security design mistakes in public-building vending",
    sub: "Each is a documented failure mode. All preventable with disciplined security specification during the RFP.",
    items: [
      { title: "Keeping cash 'because some users prefer it'", body: "Cash represents <5% of transactions at most modern public sites — but contains 100% of the forced-entry risk. The convenience cost of going cashless (small) is dwarfed by the loss + downtime cost of cash-targeted incidents. Pair with a cash-to-card kiosk in the lobby ($2K-3K) if you genuinely have a cash-using minority." },
      { title: "Skipping reinforced cabinets to save $400/machine", body: "Standard cabinet failure in a high-risk placement: opportunistic attack succeeds, $300-1,500 in cash + product lost, downtime during repair, reputational hit with the host. The $400 reinforcement decision compounds into $1,500-4,000 of avoided loss over the contract term." },
      { title: "Placing machines in isolated corridors after hours", body: "Same equipment in a lit central corridor vs an unlit basement hallway: 4-8× incident rate difference. Placement isn't free — it's a security decision. Coordinate with facilities to choose high-visibility placements even if it means a slightly less-convenient location for users." },
      { title: "Treating service-tech access as the operator's problem only", body: "Operator with weak badge control creates exposure for the host facility — insider theft, key duplication, unauthorized access patterns. Verify the operator's badge program (audit trail, deactivation process, recurring renewal) during contract negotiation. Make it a contractual requirement, not a hope." },
    ],
  }),
  decisionTree({
    heading: "Should we specify high-risk security hardening for our public-building machines?",
    question: "Are any vending placements in: transit-adjacent areas, exterior or after-hours-public spaces, or facilities with documented prior vending incidents?",
    yesBranch: {
      title: "Yes — specify the full security stack.",
      description: "High-risk placements warrant cashless-only + reinforced cabinets + security glass + anti-pry hardware + internal alarms + camera coverage. Combined cost: $400-800/machine premium. Returns in dramatically lower incident rates and minimal downtime — pays back within 2-3 years even at single-machine scale.",
      finalTone: "go",
      finalLabel: "FULL SECURITY STACK · HIGH-RISK",
    },
    noBranch: {
      title: "Standard secured spec is sufficient.",
      description: "Lower-risk indoor placements (interior office corridors, staff-only areas) don't justify the highest-tier hardening. Specify cashless-only + reinforced cabinets + standard placement strategy. Most public-building vending fits this profile.",
      finalTone: "stop",
      finalLabel: "STANDARD SECURED · INDOOR",
    },
  }),
  inlineCta({
    text: "Want the public-building vending security RFP template (layer-by-layer spec, operator credentialing checklist, incident-response SLA)?",
    buttonLabel: "Get the security RFP template",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported secure vending design at federal, state, and county public-building accounts including courthouse, transit-adjacent, and unattended-public-area placements. The four-layer framework, hardening cost benchmarks, and loss-rate targets reflect his operational data from 40+ public-building accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How much does security hardening add to a public-building vending budget?", answer: "$200-800 per machine in equipment premium, spread across reinforced cabinet, security glass, anti-pry hardware, and (optionally) internal alarms + tamper sensors. Camera and lighting are typically part of building security infrastructure, not vending budget. Operator-side credentialing programs add modest overhead but are usually included in the operator's contract pricing.", audience: "Facilities" },
      { question: "Should we eliminate cash entirely from public-building vending?", answer: "At most public buildings, yes. Cash represents <5% of transactions at modern sites and 100% of forced-entry motivation. Pair with a cash-to-card kiosk ($2K-3K) for the cash-using minority. Some public services serving demographics with limited card access may justify hybrid; verify with your audience.", audience: "Facilities" },
      { question: "What's the difference between standard reinforced cabinets and 'security-grade' equipment?", answer: "Standard reinforced: 16-ga steel, basic anti-pry. Security-grade: 14-ga steel, reinforced door frames, anti-leverage edges, Medeco or ASSA-Abloy cylinders, internal cross-bracing, often factory-installed tamper sensors. Most operators offer both; security-grade for high-risk placements only.", audience: "Facilities" },
      { question: "How do we verify the operator's background-check process?", answer: "Request the operator's standard background check policy in writing. Confirm: criminal background check on every tech (yes/no), federal fingerprint check for federal sites (yes/no required), recurring renewal cadence, badge audit-trail capability, badge deactivation process for lost/stolen. Operators serving public sector regularly should have a documented policy.", audience: "Facilities" },
      { question: "What's a reasonable incident-response SLA from the operator?", answer: "Critical events (forced entry attempt, security alarm, vandalism): 24 hours to assessment + repair start. Routine repairs (jammed mechanism, payment failure): 48-72 hours. Document SLA in the contract with credits for misses. Verify the operator's after-hours coverage during diligence — some operators outsource overnight response with longer delays.", audience: "Facilities" },
      { question: "Does cashless-only really stop forced-entry attempts?", answer: "It dramatically reduces them. Forced-entry attempts on cashless machines drop ~70-90% vs cash-enabled at the same location. The remaining incidents are typically opportunistic vandalism (graffiti, broken glass) rather than theft targeting. The cash decision is the single highest-leverage security choice.", audience: "Facilities" },
      { question: "How do cameras and lighting integrate with vending placement?", answer: "Camera and lighting are usually building-security infrastructure, not vending-budget items. Coordinate placement with facilities security during install: confirm machine sits within a camera field of view, ensure after-hours lighting illuminates the placement, integrate any alarms with the building's central monitoring station. Free or low-cost; high security impact.", audience: "Facilities" },
      { question: "Are security features standard or premium options from operators?", answer: "Cashless-only: standard at most modern operators. Reinforced cabinets: usually standard at public-building operators. Security glass + anti-pry hardware + alarms: typically premium options requiring spec in the RFP. Don't assume — itemize required security features in the contract.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "ASIS International — physical security standards for retail vending", url: "https://www.asisonline.org/", note: "Industry-standard physical security framework applicable to vending equipment" },
      { label: "GSA — federal facility security and access control", url: "https://www.gsa.gov/", note: "Federal building access control and credentialing standards" },
      { label: "NAMA — secure vending operator best practices", url: "https://www.namanow.org/", note: "Operator-side guidance on security specifications and incident response" },
      { label: "Medeco / ASSA-Abloy — high-security lock cylinder specifications", url: "https://www.medeco.com/", note: "Reference for pick-resistant + bump-resistant lock standards" },
      { label: "Underwriters Laboratories (UL) — physical security equipment certifications", url: "https://www.ul.com/", note: "Certification standards for security-grade equipment hardening" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building and security guides",
    items: [
      { eyebrow: "Sister guide", title: "Public building vending logistics", description: "Service-tech access, credentialing, route density — the operational patterns that pair with security design.", href: "/vending-for-public-buildings/public-building-vending-logistics" },
      { eyebrow: "Operations", title: "Advanced payment systems in government vending", description: "Cashless infrastructure, contactless support, and the payment-system requirements that drive security outcomes.", href: "/vending-for-public-buildings/advanced-payment-systems-government-vending" },
      { eyebrow: "Hub", title: "All public-building vending guides", description: "Security, contracts, logistics, accessibility, and the operator-side patterns that work across public-sector accounts.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
