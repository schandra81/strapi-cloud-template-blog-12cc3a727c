import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-advertising-in-gyms",
  assetType: "pack",
  title: "Gym Vending Sponsorship + Advertising Framework",
  subtitle: "Realistic economics, portfolio packaging, sponsor outreach, attribution + reporting",
  intro:
    "Vending wraps + on-machine digital screens + member-app placements are the three components of a gym vending advertising program. This pack covers what each tier earns, how to package the portfolio, how to pitch sponsors, and how to attribute results.",
  sections: [
    {
      heading: "1. Three advertising surfaces in a gym vending placement",
      paragraph:
        "Each surface has its own ad-tech stack and pricing benchmark. Mix all three to package a credible sponsorship.",
      items: [
        { number: 1, title: "Cabinet wrap (out-of-home)", description: "Vinyl wrap on machine exterior. 3M IJ180Cv3 cast vinyl, 6-year outdoor durability. OOH industry-standard CPM benchmarks from OAAA 2024 reports." },
        { number: 2, title: "On-machine digital screen (DOOH)", description: "Cantaloupe Engage, Nayax VPOS Touch, 365 Pico, or AWM Smart Shelf. Plays brand video / static / interactive while machine is idle. Programmatic DOOH per IAB Tech Lab OpenRTB DOOH spec (2024)." },
        { number: 3, title: "Member-app placement", description: "In-app sponsor tile / featured brand / co-branded challenge. Tied to gym member-app surface via gym software (Mindbody Marketing Suite, Glofox, ClubReady)." },
      ],
    },
    {
      heading: "2. Realistic economics — what each surface earns",
      paragraph:
        "Industry benchmarks from OAAA, IAB Tech Lab, Mindbody Retail Lift Study 2024, and Nielsen Audio + OOH benchmarks. These are aggregate ranges; actual deals vary 30-50% by gym brand prestige + market.",
      headers: ["Surface", "Pricing model", "Realistic range / machine / month"],
      rows: [
        ["Cabinet wrap", "Flat monthly", "$75-$350 (single-club) up to $800 (boutique flagship)"],
        ["On-machine DOOH screen", "CPM or flat monthly", "$50-$200 (single-club) up to $500 (high-traffic flagship)"],
        ["Member-app sponsor tile", "Flat or CPC", "$100-$500 per campaign per month"],
        ["Co-branded challenge / month", "Flat fee per challenge", "$1,000-$5,000 per campaign"],
        ["Full-club takeover (all surfaces, 1 month)", "Bundled flat", "$3,000-$15,000 (single club, 1 month)"],
      ],
    },
    {
      heading: "3. Portfolio packaging — what to offer sponsors",
      paragraph:
        "Sponsors buy clusters, not single machines. Package multiple clubs + multiple surfaces into a tiered media kit.",
      items: [
        { label: "Bronze", value: "Single club, cabinet wrap only, 3 months. $300-$700 / month. Entry point for local brands." },
        { label: "Silver", value: "Single club, cabinet + DOOH screen, 3 months. $500-$1,200 / month." },
        { label: "Gold", value: "Single club, cabinet + DOOH + member-app, 3 months. $1,500-$3,000 / month." },
        { label: "Platinum", value: "5-10 clubs cluster, all surfaces, 6 months. $7,500-$25,000 / month. Targets regional brands + national brands testing the channel." },
        { label: "Title", value: "Multi-quarter exclusive + co-branded challenge + co-branded SKU. $50K-$250K / season. Targets major CPG (PepsiCo, Coca-Cola, KIND, Quest, Liquid IV)." },
      ],
    },
    {
      heading: "4. Sponsor outreach playbook",
      items: [
        { number: 1, title: "Identify likely advertisers", description: "Recovery + protein brands (Quest, KIND, RXBAR, Premier Protein, Fairlife, Liquid IV, LMNT), apparel (Lululemon, Vuori, Athleta), wellness apps (Calm, Headspace, Whoop), local health-and-wellness (PT clinics, dermatologists, juice bars)." },
        { number: 2, title: "Pitch deck content", description: "Member demographics + psychographics, dwell time at machine, monthly impressions, NPS, sample creative templates, audited audience numbers via Geopath OOH measurement or Nielsen + Whoop's gym audience reports." },
        { number: 3, title: "Audience proof", description: "Geopath panel-based impression measurement (industry standard for OOH) or operator-side telemetry (transactions per machine × dwell estimate). Brand wants verified numbers, not handwave." },
        { number: 4, title: "Creative spec sheet", description: "Provide vinyl wrap dimensions, DOOH screen aspect ratio + resolution (1080p typical), and member-app placement specs in a one-page sheet." },
        { number: 5, title: "Term sheet", description: "Pricing + duration + creative-approval process + cancellation + makegood policy." },
      ],
    },
    {
      heading: "5. Attribution + reporting",
      paragraph:
        "Sponsors will not renew without attribution. Build a reporting cadence that ties spend to outcomes.",
      items: [
        { label: "Impressions (OOH baseline)", value: "Geopath or operator-telemetry-derived impressions. Per OAAA Eyes-On methodology: visits × dwell × visibility factor." },
        { label: "DOOH playback", value: "Player-side log of impressions delivered (timestamp + duration). Standard IAB Tech Lab OpenRTB DOOH reporting." },
        { label: "Member-app clicks + CTR", value: "Standard in-app analytics (Mixpanel, Amplitude, gym's native tooling)." },
        { label: "Sponsor-SKU lift", value: "If sponsor has an SKU in the planogram, A/B test velocity vs. control machines during campaign vs. pre-period." },
        { label: "Member NPS + brand recall survey", value: "Quarterly micro-survey to a sampled cohort: 'Have you seen [Brand] at the gym? Are you more likely to purchase?' Standard recall measurement per Marketing Accountability Standards Board (MASB)." },
      ],
    },
    {
      heading: "6. Creative + approval workflow",
      items: [
        { check: "Creative spec sheet provided to sponsor in advance (cabinet wrap dimensions, DOOH screen 1920×1080 typical, member-app tile typically 1080×1080 or 1920×1080)." },
        { check: "Sponsor delivers print-ready PDF or video file ≥ 10 business days before launch." },
        { check: "Gym brand team reviews for fit with brand standards (do not co-brand with conflicting categories — e.g., a yoga studio may decline alcohol sponsors)." },
        { check: "ADA + accessibility review: signage character contrast ≥ 70% per Section 703; closed captions on DOOH video where audio is used (rare in vending, but ADA-relevant)." },
        { check: "Proofs (cabinet wrap physical Pantone proof, DOOH screen preview) approved by both parties." },
        { check: "Install / go-live coordinated with operator service schedule." },
      ],
    },
    {
      heading: "7. Legal + contract considerations",
      items: [
        { check: "Right to refuse: gym retains the right to decline creative that violates brand standards or jurisdictional rules (e.g., alcohol in family-club; CBD in some states)." },
        { check: "Make-good clauses: define remediation if impressions or DOOH playback falls below committed levels." },
        { check: "Exclusivity: define whether sponsor has category-exclusivity (e.g., 'only protein bar advertiser') and at what cluster level." },
        { check: "Intellectual property: sponsor warrants creative does not infringe; gym retains usage rights for the engagement period only." },
        { check: "Termination: 30-day cure for material breach; gym may terminate for brand-safety incidents involving the sponsor (PR-disaster clause)." },
        { check: "Data sharing: clarify what data flows to sponsor (aggregate impressions vs. member-level — member-level requires explicit member consent per CCPA / state privacy laws)." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators with DOOH-equipped fleets and audience-measurement capabilities for gym vending sponsorship programs.",
});

console.log("wrote "+"vending-advertising-in-gyms");
