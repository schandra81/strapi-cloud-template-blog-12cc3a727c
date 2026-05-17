import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "personalized-vending-experiences-ai",
  assetType: "pack",
  title: "Personalized Vending Pilot Framework",
  subtitle: "Placement fit, recommendation models, privacy architecture, opt-in design, and pilot measurement",
  intro:
    "Personalized vending (AI-driven recommendations, member-specific pricing, dietary-preference surfacing) only earns its place where placement, privacy architecture, and opt-in design are all in good shape. This pack defines a 90-day pilot framework with measurable activation, repeat, and consent metrics. It maps to FTC Section 5 (unfair/deceptive practices), CCPA / CPRA where applicable, GDPR where applicable, ADA Section 309.4, and FALCPA allergen labeling.",
  sections: [
    {
      heading: "1. Placement-fit screen — where personalization pays back",
      paragraph:
        "Personalization adds operating complexity (consent management, model maintenance, A/B testing infrastructure). It pays back only where placement supports repeat visits and identity is already known.",
      items: [
        { label: "High-fit placements", value: "Corporate campus with badge/SSO identity, healthcare staff areas, university residence + dining, multi-unit residential with member app, 24/7 micro-markets with closed-loop." },
        { label: "Marginal-fit placements", value: "Mixed-use lobbies with anonymous walk-up traffic, transit hubs, hospitality." },
        { label: "Poor-fit placements", value: "Single anonymous machine, sub-100-employee single-site office, schools subject to USDA Smart Snacks (use compliance-locked planogram, not personalization)." },
      ],
    },
    {
      heading: "2. Recommendation-model design",
      items: [
        { number: 1, title: "Cold-start (visit 1)", description: "No member history. Recommend by placement-level top-decile velocity + healthy-share floor + allergen-flag respect from member-provided allergen list (opt-in)." },
        { number: 2, title: "Warm-start (visits 2-5)", description: "Collaborative-filter + content-based hybrid using member's prior purchases and similar-member purchases at the placement. Diversity term injected to avoid filter bubble." },
        { number: 3, title: "Steady-state (6+ visits)", description: "Personalized ranking on a fixed planogram; recommended SKUs surfaced first; remaining catalog browsable. Recommendation diversity audited monthly." },
        { number: 4, title: "Negative signals", description: "Explicit dislike (member flags 'don't recommend'), refund flag, allergen mismatch all feed back into model. Refund rate by recommended SKU is a model-quality KPI." },
        { number: 5, title: "Fairness checks", description: "Model output audited for systematic SKU exclusion across protected-class proxies (where any demographic is collected for benefit-eligibility reasons)." },
      ],
    },
    {
      heading: "3. Privacy architecture",
      items: [
        { check: "Data minimization — store employee/member ID + purchase events + opt-in preferences. Do not store name, address, government ID, payroll details, compensation, benefits-eligibility data." },
        { check: "Purpose limitation — purchase data used for personalization + operations; not sold or used for advertising; not shared with employer in member-identifiable form." },
        { check: "Retention — member-level purchase data retained for the period stated in privacy notice (commonly 12-24 months); deleted on member request." },
        { check: "Pseudonymization — model trained on pseudonymized member IDs; re-identification only at the recommendation API for the active member." },
        { check: "Data residency — primary store US-based for US placements; international transfer mechanism documented if applicable." },
        { check: "Sub-processor disclosure — list of ML platform, hosting, analytics vendors with current security attestations." },
      ],
    },
    {
      heading: "4. Opt-in design (FTC + CCPA aligned)",
      paragraph:
        "Personalization requires affirmative opt-in where placement triggers state-privacy-law scope (CA, CO, CT, UT, VA, TX, etc.). Even outside those scopes, opt-in is the FTC-aligned standard.",
      items: [
        { check: "Clear, layered privacy notice presented at app onboarding and at first on-machine personalization moment." },
        { check: "Toggle for 'personalize recommendations' default OFF; member must enable. Toggle reversible at any time." },
        { check: "Granular consent — recommendations on, member-specific pricing on, marketing communications on — each separate." },
        { check: "Allergen-list opt-in stored separately and surfaced as a safety-tool option even if personalization is off." },
        { check: "Member dashboard shows data collected, purpose, retention, and 'delete my data' button. Deletion completed within 30 days." },
        { check: "Consent log retained for the duration of the relationship + 3 years; auditable." },
      ],
    },
    {
      heading: "5. Pilot scope + KPIs (90 days)",
      headers: ["Metric", "Definition", "Target"],
      rows: [
        ["Opt-in rate", "% of eligible members who enable personalization within 30 days", "30% or better"],
        ["Activation", "% of opted-in members with first personalized transaction in 30 days", "70%"],
        ["Repeat", "% of activated members with 2nd transaction within 30 days", "75%"],
        ["Recommendation acceptance", "% of recommended SKUs purchased (vs. browse)", "30% or better"],
        ["Diversity", "Median number of distinct SKUs purchased per active member per month", "≥ 4"],
        ["Refund-by-recommendation", "Refund rate on recommended SKUs", "≤ 2%"],
        ["NPS", "In-app survey at days 30/60/90", "+30 minimum"],
        ["Opt-out rate", "Members who disable personalization after enabling", "≤ 10% in 90 days"],
      ],
    },
    {
      heading: "6. Accessibility + safety guardrails",
      items: [
        { check: "ADA Section 309.4 — recommendation interface operable with one hand and ≤ 5 lbf operating force." },
        { check: "Screen content available via audio output / accessible alternative for members with vision impairment." },
        { check: "Allergen labeling per FALCPA — recommendations respect member allergen list; if no list, generic allergen labeling visible on each SKU." },
        { check: "Healthy-share floor enforced — recommendation engine cannot rank healthy SKUs below planogram floor allocation." },
        { check: "No exclusionary pricing — member-specific pricing pilots run only against opt-in, with transparent rules; no protected-class proxies." },
      ],
    },
    {
      heading: "7. Operator + vendor diligence checklist",
      items: [
        { check: "ML platform — current SOC 2 Type II; model-card documentation for the recommendation model." },
        { check: "Bias + fairness testing performed during model development; results shared with host under NDA." },
        { check: "Sub-processor list disclosed; data-processing addendum (DPA) signed." },
        { check: "Right-to-audit clause included; host or designee may audit annually with notice." },
        { check: "Model retraining cadence documented (typically monthly); change-management process for material model updates." },
      ],
    },
    {
      heading: "8. Pilot acceptance + remedies",
      items: [
        { number: 1, title: "Acceptance", description: "All KPIs in section 5 met or exceeded over the final 30 days of the 90-day pilot. Privacy + accessibility checklists pass." },
        { number: 2, title: "Partial acceptance", description: "5 of 8 KPIs met; remediation plan agreed for the rest. Re-measure over a 60-day extension." },
        { number: 3, title: "Non-acceptance", description: "≤ 4 KPIs met or any privacy/accessibility checklist fails. Operator removes personalization layer at own cost; baseline planogram restored; no penalty to host." },
      ],
    },
    {
      heading: "9. Pre-signing red flags",
      items: [
        { check: "Operator collects PII beyond minimization standard (name + address + DOB) for personalization." },
        { check: "Opt-in default ON, or consent buried in terms of service." },
        { check: "No deletion mechanism or deletion SLA > 30 days." },
        { check: "Model-card + bias-testing documentation refused." },
        { check: "Recommendation engine can override healthy-share floor or allergen flags." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal, privacy, or AI-governance advice. Personalization pilots involving employee data should be reviewed by HR, privacy/legal, and security teams. State-privacy-law scoping (CCPA/CPRA, CO, CT, UT, VA, TX) and federal sectoral rules where applicable (HIPAA, FERPA, COPPA) should be confirmed with counsel.",
});

console.log("wrote "+"personalized-vending-experiences-ai");
