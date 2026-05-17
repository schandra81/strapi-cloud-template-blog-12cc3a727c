import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "diy-gym-vending-maintenance",
  assetType: "pack",
  title: "DIY Gym Vending Maintenance Pack",
  subtitle: "Daily / weekly / monthly cadence + approved tools + operator boundary + member-triage script",
  intro:
    "Most gym vending contracts assign primary service to the operator. But there is a small set of routine tasks the gym staff can (and should) handle at the front desk — cleaning, stock-out triage, member refunds — that keep the unit looking sharp between visits. This pack defines exactly where the line sits.",
  sections: [
    {
      heading: "1. Operator boundary — what is NEVER DIY",
      paragraph:
        "Tampering with electrical, refrigeration, or payment hardware violates most operator contracts and voids manufacturer warranty. Gym staff should not open the service door, touch the compressor, or attempt validator repair under any circumstance.",
      items: [
        { check: "Service-door access is operator-only. The gym does not hold a service key." },
        { check: "Refrigeration system (compressor, condenser, evaporator, refrigerant) is operator + EPA Section 608-certified technician only." },
        { check: "Bill validator + coin mech + card reader is operator only — PCI-DSS implications for the gym if tampered." },
        { check: "Vend motors / spirals / coils are operator only — pinch + crush hazards behind the glass." },
        { check: "Electrical (cords, plugs, GFCI) — gym facilities team only if licensed; otherwise operator." },
      ],
    },
    {
      heading: "2. Daily DIY cadence (front-desk, 2-3 minutes)",
      paragraph:
        "A 2-3 minute pass at the start of each shift catches 80% of the issues that cause member complaints. Build this into the front-desk opening checklist.",
      items: [
        { check: "Wipe front glass + selection pad + card reader with microfiber + 70% isopropyl wipe (no ammonia, no abrasive)." },
        { check: "Wipe dispense tray + door interior of any spilled product residue." },
        { check: "Check machine is powered on and display is showing the welcome screen (not an error code)." },
        { check: "Note any obvious stock-outs on featured SKUs; submit ticket via operator app." },
        { check: "Check floor in front of machine for spills, debris; mop if needed (slip hazard per OSHA 1910.22)." },
      ],
    },
    {
      heading: "3. Weekly DIY cadence (manager, 10-15 minutes)",
      paragraph:
        "Weekly checks cover the items that compound over a week — signage, label legibility, telemetry health, member feedback.",
      items: [
        { check: "Full exterior wipe-down: top, sides, base — microfiber + 70% isopropyl. Pay attention to corners that gather dust." },
        { check: "Inspect all shelf-talkers + signage for tears, fading, or out-of-date class-schedule references; replace as needed from the gym's branded sign kit." },
        { check: "Confirm telemetry is reporting (operator dashboard or weekly digest email); flag any machine that has been offline > 4 hours." },
        { check: "Review member-feedback log (if maintained at the front desk); compile recurring stock-out or product requests for the operator's quarterly review." },
        { check: "Verify temperature display on refrigerated unit reads 33-40°F (1-4°C); FDA Food Code §3-501.16 requires ≤ 41°F for TCS hold." },
        { check: "Check expiration date on the 3 front-most SKUs in each refrigerated row; flag any within 7 days of best-by date." },
      ],
    },
    {
      heading: "4. Monthly DIY cadence (facilities or manager, 30-45 minutes)",
      paragraph:
        "Monthly touches cover the deeper items that the operator covers on a quarterly business review cadence — but you want to catch between visits.",
      items: [
        { check: "Photograph each machine (front + side angles) and store in a monthly inspection folder — useful for damage claims + warranty disputes." },
        { check: "Inspect cabinet ventilation clearance ≥ 6 inches on sides and back per manufacturer spec; clear any storage that has migrated into clearance zone." },
        { check: "Verify cabinet is plumb + level (within 1/8 inch over 24 inches per most manufacturer install guides); refrigeration tray drains rely on level seating." },
        { check: "Inspect floor anchor / strap for tip-prevention compliance (NAMA / OSHA 1910.176 storage stability)." },
        { check: "Check ADA reach: highest operable part ≤ 48 in AFF; lowest ≤ 15 in AFF; clear floor space 30 in × 48 in still unobstructed." },
        { check: "Compile and submit any service issues to the operator via the QBR (quarterly business review) channel — do not let them accumulate." },
      ],
    },
    {
      heading: "5. Approved DIY tools + supplies",
      paragraph:
        "Use only the supplies on this list. Ammonia-based cleaners damage touchscreen coatings; bleach degrades cabinet wrap adhesive.",
      items: [
        { label: "Cleaner", value: "70% isopropyl wipes (e.g., Sani-Cloth AF3, PDI Super Sani-Cloth Plus) or microfiber + 70% IPA spray. Avoid ammonia, bleach, citrus solvent." },
        { label: "Touchscreen", value: "Manufacturer-approved screen wipe (Klear Screen, iKlear) for OLED / capacitive surfaces; never paper towel (microscratches)." },
        { label: "Glass", value: "Streak-free glass cleaner (ammonia-free) + microfiber cloth." },
        { label: "Drying", value: "Lint-free microfiber towel." },
        { label: "Spill kit", value: "Absorbent towels + caution sign + wet-floor cone (OSHA 1910.22)." },
        { label: "Thermometer", value: "Calibrated thermometer to spot-check refrigerated cabinet temperature (optional but useful for ServSafe / Food Code audits)." },
      ],
    },
    {
      heading: "6. Member-triage script — what to tell members at the desk",
      paragraph:
        "Member complaints are the #1 source of friction. A simple front-desk script resolves 90% of issues in under 60 seconds and reduces operator service tickets.",
      items: [
        { number: 1, title: "Member: 'My snack got stuck.'", description: "Front desk: 'I'll log it — can I have the slot number and your member ID? You'll see a refund credited to your card or member account in 24-48 hours.' Do NOT shake or rock the machine — tipping hazard per OSHA + NAMA guidance." },
        { number: 2, title: "Member: 'It charged me twice.'", description: "Front desk: 'Forward the receipt or app screenshot — refund is automatic within 48 hours for cashless. I'll log a ticket with the operator either way.'" },
        { number: 3, title: "Member: 'The machine is offline / says ERROR.'", description: "Front desk: 'Thanks for letting me know — I'll alert the operator now. We'll have it resolved within their SLA (typically 24 hours for offline, 4 hours for refrigeration).'" },
        { number: 4, title: "Member: 'You're out of [SKU].'", description: "Front desk: 'Telemetry should have flagged it; I'll add your request to the QBR list and confirm with the operator on their next visit.'" },
        { number: 5, title: "Member: 'Can I get [allergen] info?'", description: "Front desk: Direct member to FALCPA allergen label on the package face. If member has a severe allergy concern, do not improvise — direct them to the operator's allergen contact." },
      ],
    },
    {
      heading: "7. Service-ticket lifecycle",
      paragraph:
        "Every DIY-discovered issue ends in either a self-resolution or an operator ticket. Use a single shared log (front-desk Slack channel, Asana, or operator portal) so issues are tracked from discovery to resolution.",
      headers: ["Stage", "Owner", "Target time"],
      rows: [
        ["Discovery (front desk)", "Front desk staff", "Same shift"],
        ["Log in shared tool", "Front desk staff", "Within 1 hour"],
        ["Operator ticket created", "Manager", "Within 4 hours"],
        ["Operator acknowledgement", "Operator", "Per SLA tier (24 hr Tier 1)"],
        ["Resolution", "Operator", "Per SLA tier (24-72 hr Tier 1)"],
        ["Close-loop with member", "Front desk", "Within 24 hours of resolution"],
      ],
    },
  ],
  footer:
    "This pack is informational. For service issues outside the DIY scope, contact your operator's customer service line. LetUsVending can introduce operators with documented SLA frameworks if your current provider is not meeting expectations.",
});

console.log("wrote "+"diy-gym-vending-maintenance");
