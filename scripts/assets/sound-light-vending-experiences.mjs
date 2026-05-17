import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "sound-light-vending-experiences",
  assetType: "rfp template",
  title: "Venue Vending Sound + Light Experience RFP Template",
  subtitle: "Six-category design, sensory accommodation protocol, OSHA compliance, and operator scoring",
  intro:
    "Use this RFP template to solicit vending bids where machines incorporate sound, light, motion, or interactive sensory elements (illuminated wraps, sound triggers, motion-activated digital sidekicks, AR/QR integrations). The template specifies the six experience categories, the sensory-accommodation protocol required for accessibility, and the OSHA compliance posture for staff working near amplified-sound and high-illumination installations.",
  sections: [
    {
      heading: "1. Project overview",
      items: [
        { label: "Venue + event mix", value: "(stadium / arena / theater / convention / experiential brand activation — specify capacity, event types)" },
        { label: "Machine count + placements", value: "Specify zones and indicate which categories of sensory experience apply to each placement. Capability framing — describe environment, not anchor venues." },
        { label: "Contract term", value: "2-4 year initial with annual capability refresh (sensory-content + firmware)." },
        { label: "Power + data", value: "Operator specifies power draw, data connection (cellular vs. venue WAN), and any audio routing requirements." },
      ],
    },
    {
      heading: "2. Six experience categories",
      headers: ["#", "Category", "Specification"],
      rows: [
        ["1", "Illuminated front face", "LED-backlit translucent vinyl with diffuser; UL 60950 or UL 8750 listed; ENERGY STAR-class lighting; CCT specified per venue (typically 3000K-4000K). Brightness adjustable for circadian and audience-comfort tuning."],
        ["2", "Edge / accent lighting", "RGB or programmable warm-white edge lighting on machine perimeter; dimmable; DMX or proprietary CMS-controllable for event-themed scenes."],
        ["3", "Sound triggers", "Sub-70 dBA peak at 3 ft per ANSI/ASA S12.2 for ambient placements; sub-85 dBA short-burst on transaction confirmation. Mute / accessibility-mode required (see Section 3)."],
        ["4", "Motion-activated digital sidekick", "21\"-32\" commercial-grade display; motion sensor triggers contextual content when audience approaches. UL 60950 listed."],
        ["5", "AR / QR / NFC integration", "Tap or scan triggers branded landing page, AR overlay, or sweepstakes. NFC ISO/IEC 14443 standard; tag durability rated for 100,000+ taps."],
        ["6", "Interactive cabinet (touch / gesture)", "Touchscreen front overlay or gesture-camera selection. Touchscreen complies with Section 308 reach range; gesture interface offers tactile-button fallback per ADA 309.4."],
      ],
    },
    {
      heading: "3. Sensory-accommodation protocol",
      paragraph:
        "Sensory installations must be accessible to audiences with sensory-processing needs (autism spectrum, photosensitive epilepsy, hearing aids, low vision). Operator must offer the following modes by default.",
      items: [
        { check: "Mute mode: any sound trigger can be silenced at the machine (physical button or app toggle) and silenced venue-wide via CMS for sensory-friendly performances." },
        { check: "Reduced-motion mode: motion-activated content can be set to static during sensory-friendly events." },
        { check: "Photosensitive-epilepsy compliance: no flashing content at 3-30 Hz frequency per W3C WCAG 2.2 Success Criterion 2.3.1 and ITU-R BT.1702." },
        { check: "Lighting dimming: edge + accent lighting dimmable to 10% of peak; pre-show + sensory-friendly mode profile preset." },
        { check: "Hearing-aid T-coil compatibility for any speech audio (FCC Section 68.317 hearing-aid-compatible) where audio is informational rather than ambient." },
        { check: "Captioning for any video / spoken content on digital sidekicks; WCAG 2.2 Level AA captioning standard." },
        { check: "Operator publishes a sensory-accommodation summary that venue accessibility coordinator can distribute to audiences in advance." },
      ],
    },
    {
      heading: "4. OSHA + staff compliance",
      items: [
        { label: "Noise exposure (OSHA 29 CFR 1910.95)", value: "Staff working > 8 hours within 5 ft of machines with sustained > 85 dBA require hearing-conservation program. Operator confirms ambient levels per ANSI/ASA S12.2." },
        { label: "Lighting safety", value: "LED + edge-lighting installations must comply with IEC 62471 photobiological-safety limits; no Class 2 or higher hazard exposure to staff or audience." },
        { label: "Electrical (NFPA 70 / NEC)", value: "All wiring run in metal conduit or NEC-rated cable assemblies; GFCI on any wet-zone or exterior placement; UL 60950 / UL 62368 listed power supplies." },
        { label: "Egress + clearances", value: "Machines + signage do not obstruct egress per IBC Chapter 10; minimum 36-inch clearance maintained in front of machine for ADA Section 305 clear floor space." },
        { label: "Staff training", value: "Operator's on-site staff complete sensory-mode operation training; documented before first event." },
      ],
    },
    {
      heading: "5. Scoring matrix",
      headers: ["Criterion", "Weight"],
      rows: [
        ["Six-category execution capability (Section 2)", "25%"],
        ["Sensory-accommodation protocol (Section 3)", "20%"],
        ["OSHA + compliance posture (Section 4)", "10%"],
        ["CMS + content-management platform", "10%"],
        ["Hardware durability + warranty", "10%"],
        ["Reporting + analytics (dwell, scan, engagement)", "10%"],
        ["Pricing transparency", "10%"],
        ["Insurance + bonding", "5%"],
      ],
    },
    {
      heading: "6. Required attachments",
      items: [
        { check: "Portfolio: 3+ comparable sensory installations (capability framing — describe install scale and category mix, not anchor venues)." },
        { check: "UL / IEC / ANSI compliance documentation per Section 4." },
        { check: "Sensory-accommodation summary sheet venue can distribute pre-event." },
        { check: "CMS platform demo (Stratacache, BrightSign, Enplug, or comparable)." },
        { check: "Sample dwell + engagement analytics report." },
        { check: "Insurance certificate, $5M GL minimum given experiential-equipment risk." },
        { check: "References: 3 venue marketing / F&B / accessibility contacts (last 24 months)." },
      ],
    },
    {
      heading: "7. Submission instructions",
      items: [
        { label: "Format", value: "PDF response, with appendix for sample sensory profile, CMS demo video link, and compliance documentation." },
        { label: "Due date", value: "(specify — typically 30-45 days given complexity)" },
        { label: "Pre-bid demo", value: "Operator demonstrates a single working machine with all six categories, or provides a recorded demo if travel infeasible." },
        { label: "Award", value: "(specify — typically 45-60 days)" },
      ],
    },
  ],
  footer:
    "Informational template — engage venue procurement, accessibility coordinator, and risk counsel before issue. Sensory-accommodation requirements are governed by ADA Title III and venue policy; some jurisdictions exceed federal minimums.",
});

console.log("wrote "+"sound-light-vending-experiences");
