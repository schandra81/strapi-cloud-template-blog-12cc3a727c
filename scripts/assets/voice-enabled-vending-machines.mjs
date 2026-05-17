import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "voice-enabled-vending-machines",
  assetType: "pack",
  title: "Voice-Enabled Vending Pilot Framework",
  subtitle: "Placement fit, hardware spec, privacy architecture, NLU training, and pilot measurement",
  intro:
    "Voice-enabled vending adds an audio input + NLU layer to an existing machine. It offers genuine accessibility benefit under ADA Section 309.4 and Section 707 (audio output) and can speed transactions in hands-busy environments. But it carries its own privacy, ambient-noise, and accuracy risks. This pack defines a 90-day pilot framework with measurable accuracy, accessibility, and consent metrics.",
  sections: [
    {
      heading: "1. Placement-fit screen",
      paragraph:
        "Voice helps most where the ambient environment supports clean audio capture and where hands-busy use cases exist. It helps least where background SPL is high or where privacy expectations are high.",
      items: [
        { label: "High-fit placements", value: "Hospital staff break rooms, lab corridors, manufacturing clean-bay anterooms, residential micro-markets, gym/spa locker corridors, accessibility-priority public buildings." },
        { label: "Marginal-fit placements", value: "Office lobbies during commute peaks, transit-station mezzanines, mixed-use breakrooms with TVs / music." },
        { label: "Poor-fit placements", value: "Production-floor adjacent (high SPL), child-care areas (COPPA concerns), open-plan offices where bystander capture is likely." },
      ],
    },
    {
      heading: "2. Hardware specification",
      items: [
        { check: "Directional / beam-forming microphone array (4-mic minimum) with adaptive noise suppression; rated for typical placement ambient SPL ≤ 70 dB." },
        { check: "Push-to-talk button or wake-word activation; continuous always-listening prohibited." },
        { check: "Visible indicator when microphone is active (LED ring + on-screen banner)." },
        { check: "Audio-output speaker meeting Section 707 (ADA) audio specifications where the machine is the primary interface for accessibility." },
        { check: "On-device wake-word detection; cloud round-trip only after wake-word triggers." },
        { check: "Physical microphone mute switch accessible to facilities staff (for after-hours, maintenance, or privacy concerns)." },
      ],
    },
    {
      heading: "3. Privacy + data architecture",
      paragraph:
        "Voice data is biometric-adjacent in many state-privacy frameworks (TX BIPA-style laws, Illinois BIPA, Washington My Health My Data). Treat audio as sensitive personal information from day one.",
      items: [
        { check: "On-device wake-word; no audio streamed to cloud until wake-word fires." },
        { check: "Post-wake utterance length capped (e.g., 8 seconds); silence-based end-of-utterance detection." },
        { check: "Transcription + intent inference only; raw audio not persisted past intent resolution (delete within 24 hours unless flagged for QA)." },
        { check: "Voice transcript stored with pseudonymized member ID; not linked to name/address/SSN." },
        { check: "QA sample (≤ 1% of utterances) retained for model improvement under explicit opt-in; opt-out at any time; deletion within 30 days of request." },
        { check: "No voice-based identification or voice-print storage." },
        { check: "Sub-processor disclosure for any cloud NLU provider; DPA signed; data residency stated (US-based for US placements)." },
      ],
    },
    {
      heading: "4. NLU training + accuracy targets",
      headers: ["Metric", "Definition", "Target"],
      rows: [
        ["Wake-word true-positive rate", "Wake-word detected when uttered", "≥ 95%"],
        ["Wake-word false-positive rate", "Wake-word detected when not uttered (per 24 hr)", "≤ 1 per machine per 24 hr"],
        ["Intent accuracy (clean ambient)", "Correct intent resolved at SPL ≤ 60 dB", "≥ 92%"],
        ["Intent accuracy (typical ambient)", "Correct intent resolved at typical placement SPL", "≥ 85%"],
        ["Allergen / dietary phrase recognition", "Correct resolution of 'no peanuts' / 'gluten-free' / 'no dairy' style filters", "≥ 95%"],
        ["End-to-end time-to-dispense", "Wake-word to dispense", "≤ 10 seconds"],
      ],
    },
    {
      heading: "5. Accessibility + consent",
      items: [
        { check: "ADA Section 309.4 — voice as alternative to touch; touch must remain fully functional for non-voice members." },
        { check: "Section 707 — audio output meets ADA acoustic and frequency specifications; volume adjustable; assistive-listening loop available where the placement is a public-accommodation building." },
        { check: "Bystander notice — visible on-machine signage that voice input is supported and how to disable." },
        { check: "Opt-out — touch-only mode available without enabling voice; voice does not gate access to the catalog." },
        { check: "Visual confirmation — every voice transaction confirmed on-screen with SKU + price before dispense; member can cancel." },
      ],
    },
    {
      heading: "6. Pilot scope + KPIs (90 days)",
      items: [
        { label: "Adoption", value: "% of unique members who use voice at least once in 30 days. Target: 25%+ at high-fit placements, 10%+ at marginal-fit." },
        { label: "Repeat use", value: "% of voice-adopters with 3+ voice transactions in 30 days. Target: 50%+." },
        { label: "Voice-share of transactions", value: "% of transactions completed via voice (vs. touch). Target: 15-25% steady-state at high-fit placements." },
        { label: "Accuracy", value: "Per section 4 targets, audited weekly." },
        { label: "Refund-by-voice rate", value: "Refund rate on voice-initiated vs. touch-initiated. Should be parity or better." },
        { label: "Accessibility usage", value: "% of voice transactions from members who self-identified as needing accessibility support. Track without identifying individuals." },
        { label: "NPS — voice users", value: "+30 minimum at 60 days." },
      ],
    },
    {
      heading: "7. Operator + vendor diligence",
      items: [
        { check: "NLU vendor — current SOC 2 Type II; model-card for intent model." },
        { check: "Audio data-handling addendum to DPA — explicit retention + deletion + use-limitation terms." },
        { check: "BIPA / state-biometric-law alignment for any placement in IL, TX, WA, NY, or comparable jurisdictions." },
        { check: "Right-to-audit on the audio pipeline." },
        { check: "Incident-response — voice-related incident (false dispense, transcription leak) handled per Tier-1 SLA (4-hour notify, 24-hour contain)." },
      ],
    },
    {
      heading: "8. Pre-signing red flags",
      items: [
        { check: "Continuous always-on microphone (no wake-word gating)." },
        { check: "Raw audio retained beyond 24 hours by default without explicit opt-in." },
        { check: "Voice-print / speaker-identification feature enabled by default." },
        { check: "Touch-only fallback unavailable or degraded — voice required to use the machine." },
        { check: "No physical microphone mute switch for facilities staff." },
        { check: "BIPA / state-biometric exposure unacknowledged at IL / WA / TX placements." },
      ],
    },
  ],
  footer:
    "This pack is informational and not legal, accessibility, or AI-governance advice. Voice deployments involving employee, patient, or student data should be reviewed by HR, privacy/legal, accessibility, and security teams. Biometric and state-privacy scoping should be confirmed with counsel.",
});

console.log("wrote "+"voice-enabled-vending-machines");
