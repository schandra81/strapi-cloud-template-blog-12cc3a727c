import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "social-media-campus-vending-promo",
  assetType: "pack",
  title: "Campus Vending Social Campaign Pack",
  subtitle: "12-month calendar, creative briefs, and sponsor pitch deck for campus AI cooler + vending promotion",
  intro:
    "Campus vending becomes a campus brand asset when student-life teams treat it like the foodservice partner it is: scheduled launches, themed weeks, sponsor pitches, and TikTok-native content. This pack bundles a 12-month calendar, creative briefs for each campaign, and a sponsor pitch deck outline.",
  sections: [
    {
      heading: "1. 12-month campaign calendar",
      headers: ["Month", "Campaign theme", "Channel mix", "KPI"],
      rows: [
        ["Aug — Move-in", "Free-first-purchase week + cooler tour", "TikTok + Instagram Reels + RA blast + parent email", "First-purchase QR redemptions"],
        ["Sep — Welcome week", "Campus tour scavenger hunt (cooler stops)", "Instagram + GroupMe + campus app", "Transactions per cooler week 1-3"],
        ["Oct — Midterms fuel", "Healthy-snack + caffeine partnerships", "TikTok creator + dining-services co-post", "Healthy-share % uplift"],
        ["Nov — Late-night thanksgiving", "Comfort-food planogram refresh", "Instagram Stories + library partnership", "Late-night basket trend"],
        ["Dec — Finals week", "24/7 cooler highlight + healthy-share subsidy", "TikTok creator + student-wellness co-post", "Finals-week transactions"],
        ["Jan — Spring move-in", "Free first-purchase reset", "Instagram + RA blast + parent email", "Spring first-purchase redemptions"],
        ["Feb — Black history month", "Local + minority-owned SKU spotlight", "Instagram Reels + sustainability office co-post", "Local SKU sell-through"],
        ["Mar — Spring break", "Travel-snack pack + hydration", "Instagram + TikTok creators", "Travel-pack revenue"],
        ["Apr — Earth month", "Sustainability + plant-forward week", "Instagram + sustainability office co-post + AASHE STARS angle", "Plant-forward share uplift"],
        ["May — Finals + commencement", "Recovery + celebration mix", "Instagram + alumni magazine feature", "End-of-semester revenue"],
        ["Jun-Jul — Summer + orientation", "Orientation tours + low-volume planogram", "Orientation collateral + parent email", "Orientation tour engagement"],
        ["Year-round", "User-generated content (#CoolerFinds, #DormSnackGoals)", "TikTok + Instagram tagging + reposts", "UGC volume + engagement"],
      ],
    },
    {
      heading: "2. Creative brief template — per campaign",
      paragraph:
        "Use the brief structure below for each monthly campaign. Operator marketing team + auxiliary services + student-affairs comms collaborate.",
      items: [
        { label: "Campaign name + dates", value: "Working title, launch date, end date, hero week." },
        { label: "Audience", value: "Primary (e.g., freshmen, athletes, late-night studiers), secondary (parents, alumni, sponsors)." },
        { label: "Insight + hook", value: "One-sentence audience truth driving the campaign (e.g., 'midterms peak demand for healthy fuel + caffeine')." },
        { label: "Key messages", value: "3 bullets max — what the audience should remember." },
        { label: "Creative + assets", value: "TikTok (3-5 videos), Instagram Reels (2-3), Stories (5-7 frames), poster art, RA email graphic." },
        { label: "Distribution", value: "Channels + partner accounts + paid amplification (if any)." },
        { label: "KPIs + measurement", value: "Engagement, transactions per cooler, redemption codes, healthy-share share if applicable." },
        { label: "Compliance + brand", value: "Campus brand standards approval; allergen + dietary attestation language; refund + accessibility reference linked." },
      ],
    },
    {
      heading: "3. Sponsor pitch deck — outline + key sections",
      paragraph:
        "Local businesses, supplier brands, and athletic boosters can sponsor cooler placements, planogram features, or campaign weeks. Use the deck outline below.",
      items: [
        { label: "1. Cover + ask", value: "Sponsor logo + campus brand + one-line ask ($X for [campaign / placement / SKU spotlight])." },
        { label: "2. Audience + reach", value: "Enrollment, foot traffic at top cooler placements (union, library, athletics), follower counts on student-life social, anticipated impressions." },
        { label: "3. Cooler placement + brand integration", value: "Branded cooler-wrap option, sponsored shelf, sponsored SKU spotlight, sponsored campaign theme." },
        { label: "4. Activation calendar", value: "Where the sponsorship lights up: cooler-face, social, RA blast, on-site activation, athletic event tie-in." },
        { label: "5. Sustainability + community impact", value: "Local sourcing tie-in, AASHE STARS angle, minority-owned business angle, alumni/community resonance." },
        { label: "6. Measurement + reporting", value: "What sponsor receives: impressions, transactions per spotlighted SKU, redemption codes, social engagement, optional case study." },
        { label: "7. Pricing tiers", value: "Bronze ($X / single campaign), Silver ($XX / quarter), Gold ($XXX / academic year + cooler wrap), Title sponsor (capital share + multi-year)." },
        { label: "8. Compliance + terms", value: "Campus brand standards approval, advertising-content standards, exclusivity clauses if applicable, termination + refund language." },
        { label: "9. Next steps", value: "Decision deadline, sponsorship agreement template, contact." },
      ],
    },
    {
      heading: "4. Asset inventory — by channel",
      items: [
        { label: "TikTok — creator + organic", value: "3-5 videos per campaign (30-60 sec each); brief student creators with #CoolerFinds, #DormSnackGoals, #CampusLifeHack hashtags." },
        { label: "Instagram Reels + Stories", value: "2-3 Reels per campaign + 5-7 Stories frames; cooler-walkthrough, planogram spotlight, refund-flow demo." },
        { label: "Print + cooler face", value: "11x17 poster at each cooler; cooler-face panel; lobby table-tent during launch week." },
        { label: "RA + residence-life", value: "Floor-meeting talking points; email template; GroupMe announcement copy." },
        { label: "Parent + family email", value: "Quarterly parent newsletter feature (move-in, finals, healthy-share)." },
        { label: "Athletic + event integration", value: "Game-day cooler activation, halftime spot, athletics social cross-post." },
        { label: "Alumni magazine + website", value: "Annual feature on campus wellness + sustainability impact (AASHE STARS data)." },
      ],
    },
    {
      heading: "5. Compliance + content standards",
      items: [
        { check: "Campus brand standards: logo, color, fonts, and tone approved before publication" },
        { check: "FERPA: no student-identifiable data in campaign creative (no student names, IDs, or photos without signed release)" },
        { check: "FALCPA: allergen labeling visible in any food-SKU creative" },
        { check: "Dietary attestation accuracy: vegan/GF/nut-free claims verified by operator + dietitian before promotion" },
        { check: "Sustainability claims: any 'local,' 'plant-forward,' or 'organic' framing tied to operator's signed STARS report" },
        { check: "Accessibility: campaign assets include alt-text + captions; cooler-face signage maintains ADA standards" },
        { check: "Sponsor exclusivity: confirm no conflict with existing dining-services or athletics sponsor contracts" },
      ],
    },
    {
      heading: "6. Measurement framework — KPI dictionary",
      items: [
        { label: "Top-funnel", value: "Reach, impressions, engagement rate, UGC mentions, hashtag usage." },
        { label: "Mid-funnel", value: "QR redemptions, app installs, loyalty signups." },
        { label: "Bottom-funnel", value: "Transactions per cooler per week, basket size, repeat purchase rate, spotlighted SKU sell-through." },
        { label: "Brand + experience", value: "Survey-measured satisfaction, refund rate, complaint volume, dietitian audit score." },
        { label: "Sustainability + STARS", value: "Local SKU sell-through, plant-forward share trend, packaging-recyclability progress." },
        { label: "Sponsor reporting", value: "Per-sponsor: impressions, transactions, redemption codes, social engagement on co-tagged content." },
      ],
    },
    {
      heading: "7. Operator + campus comms workflow",
      items: [
        { number: 1, title: "Monthly editorial meeting", description: "Operator marketing + auxiliary services + student-affairs comms + sustainability office review next-month campaign brief; approve assets + sponsor tie-ins." },
        { number: 2, title: "Creative production", description: "Operator funds creator + production; student-affairs comms reviews for brand + compliance. Final approval ≤ 7 days before launch." },
        { number: 3, title: "Launch + amplification", description: "Cross-channel post + RA blast + parent email; operator-funded paid amplification for top campaigns (Earth month, finals)." },
        { number: 4, title: "Mid-campaign check-in", description: "Day 7 mid-campaign data review; pivot creative or amplification if KPIs lagging." },
        { number: 5, title: "End-of-campaign reporting", description: "Within 7 days of campaign end: KPI report, learnings, sponsor reporting if applicable." },
        { number: 6, title: "Quarterly campaign review", description: "Joint review of 3-month campaign mix; planogram + creative + sponsor tier adjustments for next quarter." },
      ],
    },
  ],
  footer:
    "This pack is informational. Student-affairs comms + brand standards + sustainability office + dining services should jointly review campaign briefs and sponsor agreements before publication. Operator-funded campaigns should align with campus content standards and avoid student-identifiable content without signed release.",
});

console.log("wrote " + "social-media-campus-vending-promo");
