import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "gamified-gym-vending",
  assetType: "pack",
  title: "Gamified Gym Vending Pack",
  subtitle: "Member-app integration, tier-based pricing, challenge + social-feed structure",
  intro:
    "Gamified vending ties machine purchases to member-app behaviors — check-ins, class attendance, streaks, leaderboards, badges. Done well, it lifts vending velocity 20-40% and member retention 4-9 points (Mindbody Retail Lift Study 2024). This pack covers the integration stack, pricing tiers, challenge mechanics, and the SDK / API capabilities required.",
  sections: [
    {
      heading: "1. Member-app integration stack",
      paragraph:
        "Gamification requires bidirectional data flow: machine -> app (transaction event) and app -> machine (member tier, point balance, discount eligibility). Three integration patterns dominate.",
      items: [
        { number: 1, title: "Pattern A — Open API + member fob", description: "Operator exposes REST API + webhooks. Member fob (RFID or QR) identifies member at machine. Examples: Nayax Open API, Cantaloupe Seed Connect API, 365 Retail Markets PicoMarket API. Most flexible; 6-12 week build." },
        { number: 2, title: "Pattern B — Pre-built connector", description: "Operator + gym software vendor (Mindbody, Glofox, ClubReady, GymMaster) maintain a pre-built connector. Faster (2-4 weeks) but limited to vendor-defined features." },
        { number: 3, title: "Pattern C — App-mediated QR pay", description: "Member opens gym app at machine; app generates one-time QR; machine scans + posts transaction to app for point award. No fob required; works on existing cashless terminals." },
      ],
    },
    {
      heading: "2. Tier-based pricing — the simplest gamification",
      paragraph:
        "Tier pricing rewards membership level with member-only prices at the machine. Drives both adoption (sign up for tier X to unlock) and frequency.",
      headers: ["Member tier", "Vending price level", "Example differential"],
      rows: [
        ["Day pass / non-member", "Retail", "$3.50 protein bar"],
        ["Basic member", "Retail -5%", "$3.32"],
        ["Premium / unlimited", "Retail -10%", "$3.15"],
        ["VIP / annual prepay", "Retail -15%", "$2.97"],
        ["Trainer / staff", "Wholesale +20%", "$2.10"],
      ],
    },
    {
      heading: "3. Challenge structures — short-form + long-form",
      paragraph:
        "Mix short-form (1-2 week) challenges that build habit with long-form (8-12 week) challenges that reward sustained engagement. Per BJ Fogg's behavior model + 2023 Habit Lab research, both intervals contribute to retention.",
      items: [
        { label: "Streak: 7-day check-in", value: "Member checks in 7 days straight -> unlock $1 off any vending purchase. Resets weekly. Easy entry; drives early-stage habit formation." },
        { label: "Class attendance: 12 in 30 days", value: "12 class check-ins in a calendar month -> unlock free recovery SKU. Targets churn risk window (months 2-4 are highest attrition per IHRSA 2024)." },
        { label: "Strength PR: log a new lift", value: "Member logs a 1-rep-max PR in the gym app -> unlock recovery bundle (protein + electrolyte at 20% off). Reinforces in-app logging behavior." },
        { label: "Annual leaderboard", value: "Top 100 members by class attendance + check-ins -> branded swag pack + free recovery cooler stack for 1 month. Drives long-term engagement." },
        { label: "Friend referral", value: "Member refers a friend who joins -> 10 vending credits ($30 value). Aligns with the gym's growth funnel." },
      ],
    },
    {
      heading: "4. Social feed + leaderboard mechanics",
      paragraph:
        "Social proof multiplies engagement (Cialdini 2021 update) but must respect data privacy — most gyms have to opt-in members per HIPAA-adjacent and state privacy rules (CCPA, BIPA where biometrics are used). Build the feed with explicit opt-in.",
      items: [
        { check: "Default privacy: member appears anonymous on leaderboard unless opted-in. CCPA-compliant explicit consent." },
        { check: "No PHI / health data leakage — heart rate, weight, body composition stay off the public feed even with opt-in." },
        { check: "Leaderboard refresh weekly; show top 10 + member's rank to avoid 'I'm-too-far-behind' demotivation." },
        { check: "Comment + reaction features moderated against the gym's community guidelines + Section 230 considerations." },
        { check: "Block / mute features required (CCPA + state privacy)." },
      ],
    },
    {
      heading: "5. Badge + point economy design",
      paragraph:
        "Badges and points become a virtual currency. Design the economy so points retain perceived value (target redemption rate 30-50% per loyalty industry benchmarks — Bond 2024 Loyalty Report).",
      headers: ["Activity", "Points awarded", "Vending redemption value"],
      rows: [
        ["Single class check-in", "5", "1 point = $0.10 off"],
        ["7-day streak completion", "50", "$5.00 off any vending purchase"],
        ["Strength PR logged", "30", "$3.00 recovery credit"],
        ["Referral conversion", "300", "$30 vending credit"],
        ["Trainer rating + feedback", "10", "$1.00 vending credit"],
      ],
    },
    {
      heading: "6. Operator capabilities required",
      items: [
        { check: "Open REST API with documented endpoints for: transaction posting, member-tier lookup, dynamic pricing, refund initiation." },
        { check: "Webhook delivery for real-time transaction events to the gym-app backend." },
        { check: "RFID fob (typically MIFARE Classic or DESFire) or QR scan support at machine." },
        { check: "Dynamic pricing engine — can apply per-member-tier price overrides at vend time." },
        { check: "PCI-DSS attestation maintained; gym is not in PCI scope." },
        { check: "Telemetry uptime ≥ 98% monthly average; downtime credits per SLA." },
      ],
    },
    {
      heading: "7. Measurement framework — proving the lift",
      paragraph:
        "Run a 90-day pilot with a control / treatment split (machines or member cohorts), then measure the delta on a defined set of metrics.",
      headers: ["Metric", "Baseline", "Gamified target", "Source"],
      rows: [
        ["Vending transactions / member / month", "0.8-1.4", "+25% to +50%", "Operator telemetry"],
        ["Average unit revenue (AUR)", "$2.40-$3.10", "+5% to +10%", "Operator telemetry"],
        ["Class attendance / member / month", "Baseline", "+10% to +20%", "Gym app"],
        ["12-month retention", "Baseline (typically 65-75%)", "+4 to +9 points", "Gym CRM"],
        ["NPS — F&B mention rate", "Baseline survey", "+10 to +20 points", "Quarterly survey"],
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["Operator + gym-app integration scoping", "2-3 weeks", "Gym CTO + operator"],
        ["API + webhook build", "6-10 weeks", "Gym app team"],
        ["Tier pricing setup at operator", "1-2 weeks", "Operator"],
        ["Challenge UI build", "4-6 weeks", "Gym app team"],
        ["Closed-beta with 100 members", "30 days", "Gym + operator"],
        ["Full rollout", "1-2 weeks", "Gym"],
        ["90-day measurement period", "90 days", "Gym + operator"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver gamified gym vending with open API integration to major gym software platforms.",
});

console.log("wrote "+"gamified-gym-vending");
