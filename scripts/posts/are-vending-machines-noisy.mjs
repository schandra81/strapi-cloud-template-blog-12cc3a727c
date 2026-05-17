import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("are-vending-machines-noisy", [
  tldr({
    heading: "Are vending machines noisy?",
    paragraph:
      "Modern vending machines are quiet — typically 38-48 dBA at one meter, which is roughly the level of a household refrigerator and below normal conversation. The noise comes from three sources: the refrigeration compressor cycling (loudest source, audible only when running, 5-10 minutes per hour at modern equipment), the vend mechanism during dispense (1-3 seconds per transaction), and the cooling fans on refrigerated cabinets and electronics enclosures. Modern equipment runs much quieter than 2010-era machines because of three changes — variable-speed compressors that ramp up gradually rather than cycling hard on/off, R290 hydrocarbon refrigerant (lower noise signature than R134a), and brushless DC fans that replace older AC fans. Placement matters more than equipment for actual perceived noise — cabinets against a shared apartment bedroom wall or a thin office partition transmit compressor cycling as low-frequency rumble that telephone-line earsthick walls insufficiently. Standard mitigation: locate cabinets in dedicated alcoves or against masonry / concrete walls, leave 4-6 inches rear ventilation clearance (overheating produces louder fan speeds), choose equipment with published dBA specs, and request a noise readout at install on shared-wall placements. Resident, employee, or patient noise complaints at modern cabinets are almost always placement, not equipment. Operators with experience handle noise-sensitive placements (hospitals, hotels, residence halls) routinely.",
    bullets: [
      { emphasis: "Modern equipment 38-48 dBA at one meter:", text: "Roughly the level of a household refrigerator and below normal conversation. Variable-speed compressors plus brushless DC fans plus R290 refrigerant drive the improvement vs 2010-era equipment." },
      { emphasis: "Placement matters more than equipment for perceived noise:", text: "Against masonry walls or in alcoves the cabinet is inaudible 10 feet away. Against shared apartment bedroom walls compressor rumble transmits through drywall." },
      { emphasis: "Standard mitigation is well-developed:", text: "Dedicated alcoves, masonry / concrete walls, 4-6 inch rear ventilation clearance, published dBA specs. Operators experienced with hotels and hospitals handle noise-sensitive placements routinely." },
    ],
  }),
  statStrip({
    heading: "Vending machine noise benchmarks",
    stats: [
      { number: "38-48", label: "dBA at one meter", sub: "modern equipment, compressor on", accent: "blue" },
      { number: "55-62", label: "dBA at one meter", sub: "2010-era equipment, compressor on", accent: "orange" },
      { number: "5-10 min/hr", label: "compressor on-cycle time", sub: "modern variable-speed compressor", accent: "blue" },
      { number: "4-6 in", label: "minimum rear ventilation clearance", sub: "reduces fan-speed noise from overheating", accent: "orange" },
    ],
  }),
  comparisonTable({
    heading: "Vending machine noise levels in context",
    sub: "dBA at one meter, compressor on. Vending noise is comparable to a household refrigerator and well below normal conversation.",
    headers: ["Source", "Typical dBA at 1 m", "Comparison", "Perceptibility at 10 ft"],
    rows: [
      ["Library / quiet office (ambient)", "30-35", "Reference quiet environment", "—"],
      ["Modern beverage cooler (R290, BLDC fan)", { icon: "check", text: "38-44" }, "Below normal conversation", "Barely audible"],
      ["Modern snack cabinet (no refrigeration)", "32-38", "Lower than ambient office", "Inaudible"],
      ["Modern combo unit (R290 refrigerated lane)", "40-46", "Comparable to household refrigerator", "Faintly audible"],
      ["2010-era beverage cooler (R134a, AC fan)", "55-62", "Comparable to normal conversation", "Clearly audible"],
      ["Refrigerator (household)", "40-50", "Reference comparison", "Faintly audible"],
      ["Normal conversation at 3 ft", "60-65", "Reference comparison", "Clearly audible"],
    ],
  }),
  specList({
    heading: "Vending machine noise specifications and mitigation",
    items: [
      { label: "Refrigeration compressor — variable-speed standard", value: "Modern equipment uses variable-speed (inverter-driven) compressors that ramp gradually. 2010-era equipment uses fixed-speed compressors that cycle hard on/off, producing audible click and rumble at each cycle. Variable-speed compressors run quieter and longer at lower speed, lower total noise exposure." },
      { label: "Refrigerant — R290 hydrocarbon standard", value: "R290 (propane-based) refrigerant has lower noise signature than R134a in vending applications. Smaller refrigerant charge, lower compressor work cycle, lower line vibration. EPA SNAP-approved for vending. Standard at modern equipment." },
      { label: "Fans — brushless DC (BLDC) standard", value: "Brushless DC fans replace older AC fans on modern equipment. Lower noise signature, lower energy draw, longer service life. Variable speed responsive to cabinet temperature. AC fans on 2010-era equipment run at single speed and produce constant audible whine." },
      { label: "Published dBA specs at procurement", value: "Modern cabinet manufacturers (Crane, AMS, Wittern, Fuji) publish dBA specs at one meter, compressor on. Request specs at procurement. Cabinets without published dBA specs likely 2010-era or generic; specify modern equipment from operator." },
      { label: "Rear ventilation clearance — 4-6 inches minimum", value: "Refrigerated cabinets need rear clearance for condenser airflow. Insufficient clearance causes overheating; fans run at higher speed; compressor runs longer cycles; cabinet runs noisier. 4-6 inch clearance minimum at modern cabinets. Operator verifies at install." },
      { label: "Placement against masonry or concrete walls", value: "Masonry and concrete walls absorb low-frequency compressor rumble. Drywall partitions transmit it through to adjacent rooms (bedrooms, conference rooms, patient rooms). Operator should propose masonry or alcove placement at noise-sensitive applications; if not, ask." },
      { label: "Dedicated alcove or vending nook", value: "Some properties design dedicated alcoves for vending — masonry surround, sound-absorbing wall panels, controlled HVAC. Common at hospitals, hotels, and Class A office buildings. Reduces noise transmission to corridor or shared spaces. Operator works with property architect on alcove design." },
      { label: "Noise readout at install (for shared-wall placements)", value: "Operator can take a dBA reading at install to validate placement noise level. Useful at shared-wall placements — confirms cabinet meets spec, document for future noise complaint resolution. Modern operator standard at hospital, hotel, residence hall placements." },
    ],
  }),
  tipCards({
    heading: "Five vending noise mitigation strategies",
    sub: "Each is well-developed at operators with experience in noise-sensitive placements (hospitals, hotels, residence halls, conference centers).",
    items: [
      { title: "Choose modern equipment with published dBA specs", body: "Request dBA spec at procurement. Modern equipment (Crane, AMS, Wittern, Fuji) publishes specs at one meter, compressor on. Cabinets without published specs likely 2010-era; do not deploy at noise-sensitive placements. Operators with experience in hospitals and hotels carry the right equipment." },
      { title: "Place against masonry, not drywall partition", body: "Drywall transmits low-frequency compressor rumble. Masonry absorbs it. At apartments and hotels, place cabinet against corridor masonry wall, not against shared bedroom drywall. Modern operator proposes correct placement; ask if proposed location is shared-wall." },
      { title: "Honor 4-6 inch rear ventilation clearance", body: "Refrigerated cabinets need rear clearance for condenser airflow. Insufficient clearance causes overheating, fans run at higher speed, longer compressor cycles, louder cabinet. Verify at install. Operator should size placement footprint with clearance included." },
      { title: "Dedicated alcove or vending nook at premium placements", body: "Hospitals, Class A hotels, residence halls increasingly design dedicated vending alcoves with masonry surround and sound absorption panels. Reduces transmission to corridor and adjacent rooms. Operator coordinates with property architect at install." },
      { title: "Document noise readout at install on sensitive placements", body: "Modern operator takes dBA reading at install on noise-sensitive placements — hospitals, hotels, residence halls, conference centers. Documented baseline supports future noise-complaint resolution. Standard at experienced operators in these segments." },
    ],
  }),
  decisionTree({
    heading: "Is this placement at risk of resident or tenant noise complaints?",
    question: "Is the cabinet within 15 feet of a sleeping or quiet-work space (bedroom, hotel guest room, patient room, conference room) AND on a drywall partition rather than masonry wall?",
    yesBranch: {
      title: "Noise-sensitive placement — mitigate at install.",
      description: "Use modern equipment with published low dBA spec. Place against masonry wall if possible or in dedicated alcove with sound absorption. Honor 4-6 inch rear ventilation clearance. Document dBA reading at install. Operator with hospital / hotel / residence hall experience handles this routinely.",
      finalTone: "go",
      finalLabel: "MITIGATE AT INSTALL",
    },
    noBranch: {
      title: "Standard placement — modern equipment is fine.",
      description: "Office breakroom, lobby, fitness center, mailroom — perceptible noise from modern cabinet (38-48 dBA) is well below ambient. Standard placement guidelines apply. No special mitigation needed beyond standard operator install practice.",
      finalTone: "stop",
      finalLabel: "STANDARD INSTALL",
    },
  }),
  inlineCta({
    text: "Want the noise-sensitive placement spec (dBA requirements, masonry / alcove design, ventilation clearance, install readout)?",
    buttonLabel: "Get the noise-sensitive placement spec",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending placement at noise-sensitive properties — hospitals, hotels, residence halls, conference centers, multifamily luxury properties. Familiar with modern equipment dBA specifications (variable-speed compressors, R290 refrigerant, brushless DC fans), masonry placement strategies, dedicated alcove design, ventilation clearance requirements, and operator install practices. The benchmarks reflect operator-side data and property-side feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Are vending machines noisy?", answer: "Modern equipment is quiet — typically 38-48 dBA at one meter, comparable to a household refrigerator and below normal conversation. Variable-speed compressors, R290 refrigerant, and brushless DC fans drive the improvement versus 2010-era equipment. Noise comes from compressor cycling (5-10 minutes per hour) and cooling fans. Placement matters more than equipment for perceived noise.", audience: "Property Managers" },
      { question: "How loud is a typical vending machine?", answer: "Modern beverage cooler 38-44 dBA at one meter, compressor on. Modern snack cabinet (no refrigeration) 32-38 dBA. Combo unit 40-46 dBA. 2010-era equipment 55-62 dBA. Reference points — household refrigerator 40-50 dBA, normal conversation 60-65 dBA, library ambient 30-35 dBA. Modern vending is well within everyday ambient noise levels.", audience: "Property Managers" },
      { question: "Will residents or hotel guests hear the cabinet through the wall?", answer: "Depends on wall construction. Masonry or concrete walls absorb the low-frequency compressor rumble; drywall partitions transmit it. Place cabinet against masonry / corridor wall if possible, not against shared bedroom drywall. Dedicated vending alcove with sound absorption mitigates further. Hospital, hotel, and residence hall operators handle this routinely.", audience: "Property Managers" },
      { question: "What about the noise of the vend mechanism (dispense sound)?", answer: "1-3 seconds per transaction; not continuous. Audible click-and-drop when a snack falls or a beverage spirals out. Perceptible only at the cabinet; not transmitted through walls. Not a meaningful noise issue at any placement.", audience: "Property Managers" },
      { question: "Why does the cabinet sometimes get louder?", answer: "Two common causes — insufficient rear ventilation clearance (cabinet overheats, fans ramp up, compressor cycles longer) or service condition (dirty condenser coil, refrigerant low, motor wearing). Modern operator catches both via telemetry (anomaly detection on fan speed and compressor cycle data). Service ticket auto-creates; technician dispatches. Resolve within standard SLA.", audience: "Property Managers" },
      { question: "Can we ask for a quieter machine?", answer: "Yes. Request modern equipment with published dBA spec at procurement (under 45 dBA at one meter for refrigerated cabinets, under 40 dBA for snack-only). Modern operators carry equipment from Crane, AMS, Wittern, Fuji with published specs. Specify in RFP at noise-sensitive placements (hospitals, hotels, residence halls).", audience: "Property Managers" },
      { question: "What's the standard install for noise-sensitive placements?", answer: "Masonry or concrete wall placement (not shared bedroom drywall). 4-6 inch rear ventilation clearance. Modern equipment with published low dBA spec. Optional — dedicated alcove with sound absorption, dBA reading at install for documentation. Operators with hospital, hotel, residence hall experience deliver this routinely.", audience: "Property Managers" },
      { question: "What if we get noise complaints after install?", answer: "Operator dispatches service ticket — verify ventilation clearance, condenser cleanliness, compressor cycle pattern, fan speed. Most complaints resolved at first service visit. Persistent complaint at properly-installed modern cabinet usually points to placement (shared-wall transmission) — operator and property manager review relocation or alcove retrofit options.", audience: "Property Managers" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending equipment standards and noise specifications", url: "https://www.namanow.org/", note: "Industry guidance on vending cabinet specifications including noise and ventilation" },
      { label: "EPA SNAP — refrigerant approvals (R290 hydrocarbon)", url: "https://www.epa.gov/snap", note: "Federal program approving R290 for vending refrigeration, including noise signature benefits" },
      { label: "ASHRAE — refrigeration noise and vibration standards", url: "https://www.ashrae.org/", note: "Engineering standards governing refrigeration noise and vibration in commercial equipment" },
      { label: "OSHA — workplace noise standards (29 CFR 1910.95)", url: "https://www.osha.gov/noise", note: "Federal occupational noise standards. Vending equipment well below OSHA noise exposure thresholds." },
      { label: "AHRI — air conditioning, heating, and refrigeration institute", url: "https://www.ahrinet.org/", note: "Industry trade association covering refrigeration equipment noise and energy standards" },
    ],
  }),
  relatedGuides({
    heading: "Related vending FAQ guides",
    items: [
      { eyebrow: "Sister FAQ", title: "What happens if a vending machine breaks", description: "Operator's breakdown response workflow — telemetry detection, tiered SLA, refund processing.", href: "/vending-faq/what-happens-if-a-vending-machine-breaks" },
      { eyebrow: "Operations", title: "Energy-efficient vending technology", description: "R290 refrigerant, brushless DC fans, variable-speed compressors — the engineering behind quiet and efficient modern cabinets.", href: "/vending-technology/energy-efficient-vending-technology" },
      { eyebrow: "Hub", title: "All vending FAQ", description: "Common questions about vending operations, contracts, equipment, payment, and service.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
