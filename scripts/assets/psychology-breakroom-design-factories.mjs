import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "psychology-breakroom-design-factories",
  assetType: "playbook",
  title: "Factory Breakroom Psychology + Design Playbook",
  subtitle: "Acoustic + lighting + visual + ergonomic + thermal + refreshment + social-space integration",
  intro:
    "A factory breakroom is a 15-30 minute psychological reset between work blocks. The space's acoustic, lighting, visual, ergonomic, thermal, and refreshment design either supports recovery or interrupts it. This playbook codifies the seven-dimension design framework an operator and facility team should be equipped to deliver — anchored to evidence from environmental psychology, occupational health, and recovery research.",
  sections: [
    {
      heading: "1. Seven-dimension design framework",
      paragraph:
        "A recovery-effective breakroom integrates seven dimensions. Most facility breakrooms get 2-4 right; a deliberate design gets all seven.",
      headers: ["Dimension", "Goal", "Evidence base"],
      rows: [
        ["Acoustic", "≤ 55 dBA sustained noise level", "WELL Building Standard v2 + ANSI S12.2 occupied-space criteria"],
        ["Lighting", "300-500 lux ambient, 3000-4000 K CCT, dimmable", "IES RP-1 + WELL Light feature"],
        ["Visual", "Biophilia + natural elements + low-clutter sightlines", "Ulrich + Kaplan attention restoration research"],
        ["Ergonomic", "Mixed seating (lounge + dining), 30 ft² per worker peak", "ANSI/HFES 100 + ADA Section 305 clear floor space"],
        ["Thermal", "68-74°F, 30-60% RH, air change rate 4-6 ACH", "ASHRAE 55 thermal comfort + ASHRAE 62.1 ventilation"],
        ["Refreshment", "24/7 vending + coffee + water + healthy options", "Partnership for a Healthier America + AHA Healthy Workplace Toolkit"],
        ["Social space", "Mixed zones: quiet + conversation + active", "MIT Sloan + Gallup Q12 social-cohesion research"],
      ],
    },
    {
      heading: "2. Acoustic design",
      paragraph:
        "Factory floors run 75-95 dBA. The breakroom is the recovery space — but if it sits next to the production floor with minimal acoustic isolation, recovery doesn't happen.",
      items: [
        { number: 1, title: "Wall + door STC rating", description: "Demising wall STC ≥ 50 between production floor and breakroom; door STC ≥ 30 (typically a solid-core door with seals). Measured at commissioning by ASTM E336." },
        { number: 2, title: "Ceiling + finish absorption", description: "Acoustic ceiling tile NRC ≥ 0.70; some wall acoustic panels in zones > 200 ft²; flooring with acoustic backing where possible." },
        { number: 3, title: "Equipment noise", description: "Refrigerated vending + coolers ≤ 55 dBA at 3 ft (R-290 + EC fan motors typically achieve this; older R-404A units do not). Ice machines, coffee equipment, microwaves on the side of the room opposite seating clusters." },
        { number: 4, title: "Background sound", description: "Optional ambient sound system at 35-45 dBA (masking sound or low-volume music if culture permits). WELL Sound feature recommendation." },
      ],
    },
    {
      heading: "3. Lighting design",
      items: [
        { label: "Ambient lux", value: "300-500 lux at table-top height (IES RP-1 office/break). Dimmable to 100-200 lux for overnight-shift breakroom (circadian-aware)." },
        { label: "Color temperature", value: "3000-4000 K (neutral white). Warmer (2700-3000 K) for evening + overnight shifts where circadian alignment matters; cooler (4000 K) for day shift." },
        { label: "Daylight access", value: "Where feasible, glazing to provide daylight + outdoor view. Ulrich + Kaplan attention-restoration research: views of nature reduce mental fatigue by 13-23% in lab settings." },
        { label: "Glare control", value: "UGR ≤ 19 (IES). Diffused fixtures, no direct line-of-sight glare from any seating position." },
        { label: "Equipment lighting", value: "Vending machine interior LED at 3500-4000 K matches breakroom ambient. Signage backlights dimmable." },
      ],
    },
    {
      heading: "4. Visual + biophilia",
      items: [
        { number: 1, title: "Biophilic elements", description: "Plants (live where maintenance supports; high-quality artificial where not), nature imagery (large-scale prints, projected nature scenes), natural materials (wood, stone, cork) in finishes. Reduces stress markers in lab + field studies (Bringslimark et al., HortScience 2009)." },
        { number: 2, title: "Color palette", description: "Calm neutrals (warm whites, soft greys, muted earth tones) for walls; accent colors that match facility brand without being overwhelming." },
        { number: 3, title: "Sightlines", description: "Avoid direct visual line back into the production floor through windows or doorways. If unavoidable, frosted glass or visual screens." },
        { number: 4, title: "Wayfinding + amenity signage", description: "Multi-language (English + Spanish minimum; pictographic for low-literacy support). ADA Section 703 character + contrast + braille where applicable." },
      ],
    },
    {
      heading: "5. Ergonomic + seating",
      items: [
        { label: "Capacity", value: "30 ft² per worker at peak occupancy (typical break peak = 30-40% of shift headcount in the room simultaneously). 100-worker shift × 35% × 30 ft² = ~1,050 ft² breakroom." },
        { label: "Seating mix", value: "60% dining-table seating (eating), 25% lounge seating (decompression), 15% counter / standing seating (quick break). Mixed seating supports the range of break types." },
        { label: "Table size", value: "4-seat tables (most common), 2-seat (paired conversation), 6-8 seat (team huddle). Mix prevents over-crowding at peak." },
        { label: "ADA clear floor space", value: "30 in × 48 in at every seating type; aisles ≥ 36 in; 60 in passing space at one point per aisle (ADA Section 305 + 403)." },
        { label: "Charging + tech", value: "USB-A + USB-C + 120V outlets at table-top height; sized for 30-50% of seats. Where workers' phones are tools for shift coordination, this is functional, not amenity." },
      ],
    },
    {
      heading: "6. Thermal + ventilation",
      items: [
        { label: "Temperature", value: "68-74°F per ASHRAE 55. Workers entering from a hot environment recover faster at the lower end; from a cold environment, at the higher end. Adjustable thermostat for shift-by-shift tuning." },
        { label: "Humidity", value: "30-60% relative humidity per ASHRAE 55." },
        { label: "Ventilation", value: "ASHRAE 62.1 minimum + breakroom-specific: 4-6 air changes per hour. Where workers enter with dust, fumes, or volatile compounds on PPE, supply-air pressure positive vs production floor." },
        { label: "Air filtration", value: "MERV 13+ filters where the building HVAC supports it. HEPA-grade where the facility handles hazardous materials." },
        { label: "Coffee + cooking exhaust", value: "Local exhaust at coffee station + microwave wall if vapor + odor levels warrant." },
      ],
    },
    {
      heading: "7. Refreshment + social-space integration",
      paragraph:
        "Vending + coffee + water + healthy options are the visible amenity — but the social-space design determines whether workers actually use them.",
      items: [
        { number: 1, title: "Refreshment zone layout", description: "Vending + cooler + coffee clustered together on one wall; queue line clear of seating; ADA reach range (Section 308) at all touchpoints. Multi-language signage." },
        { number: 2, title: "Healthy SKU prominence", description: "Healthy-SKU facings positioned at eye level (5-6 ft); indulgent SKUs at lower positions (still within ADA reach range). Partnership for a Healthier America standards alignment." },
        { number: 3, title: "Social zones", description: "Quiet zone (away from refreshment cluster, individual or 2-seat tables); conversation zone (4-6 seat tables, central); active zone (counter/standing, charging stations, near entry)." },
        { number: 4, title: "Recognition + communication wall", description: "Bulletin board + digital signage for safety milestones, team recognition, schedule changes, wellness program updates. Gallup Q12 'recognition' driver visible." },
        { number: 5, title: "24/7 access policy", description: "Where production runs 24/7, breakroom + vending accessible 24/7. Badge-controlled access where security posture requires." },
      ],
    },
    {
      heading: "8. Standards + design references",
      items: [
        { label: "WELL Building Standard v2", value: "Air, Water, Nourishment, Light, Movement, Thermal Comfort, Sound, Materials, Mind, Community concepts. Facility teams pursuing WELL certification reference this directly." },
        { label: "ASHRAE 55 thermal comfort + 62.1 ventilation", value: "Industry baseline." },
        { label: "IES RP-1 office + commercial lighting", value: "Lux + UGR + color rendering." },
        { label: "ADA Title III Sections 305 / 308 / 309 / 403 / 703", value: "Clear floor space, reach range, operating force, accessible route, signage." },
        { label: "ASTM E336 acoustic field measurement", value: "Wall + door STC verification at commissioning." },
        { label: "Partnership for a Healthier America + AHA Healthy Workplace Toolkit", value: "Refreshment planogram standards." },
        { label: "ANSI/HFES 100 Human Factors Engineering of Computer Workstations", value: "Adjacent reference for ergonomic seating where workers use phones/tablets in breakroom." },
      ],
    },
  ],
  footer:
    "This playbook is informational and not design or engineering advice. Coordinate with Facilities, EHS, HR, an interior designer, and a licensed engineer (ME/EE) before initiating a breakroom build-out. LetUsVending is equipped to coordinate vending + refreshment design with your interior + facility team.",
});

console.log("wrote "+"psychology-breakroom-design-factories");
