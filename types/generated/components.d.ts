import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    description: '';
    displayName: 'Cta';
    icon: 'cursor';
  };
  attributes: {
    badge: Schema.Attribute.String;
    features: Schema.Attribute.Component<'shared.checklist-item', true>;
    note: Schema.Attribute.String;
    phone_label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Call'>;
    phone_link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'tel:8005550199'>;
    phone_number: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'(800) 555-0199'>;
    primary_cta_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_cta_text: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksEmailNotification extends Struct.ComponentSchema {
  collectionName: 'components_blocks_email_notifications';
  info: {
    description: 'Images used in email notifications';
    displayName: 'Email Notification';
    icon: 'envelop';
  };
  attributes: {
    document_icon: Schema.Attribute.Media<'images'>;
    dollar_icon: Schema.Attribute.Media<'images'>;
    footer: Schema.Attribute.Media<'images'>;
    header: Schema.Attribute.Media<'images'>;
    id_icon: Schema.Attribute.Media<'images'>;
    like_icon: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    side_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Email Notification'>;
    user_icon: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'home';
  };
  attributes: {
    advertising_image: Schema.Attribute.Media<'images'>;
    background_image: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    phone_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Direct Hotline'>;
    phone_link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'tel:8005550199'>;
    phone_number: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'(800) 555-0199'>;
    primary_cta_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_cta_text: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    subheading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_it_works';
  info: {
    description: '';
    displayName: 'How It Works';
    icon: 'cog';
  };
  attributes: {
    steps: Schema.Attribute.Component<'shared.step', true>;
    subheading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our streamlined process helps operators find qualified location leads in minutes.'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLandingCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_ctas';
  info: {
    description: '';
    displayName: 'Cta';
    icon: 'cursor';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    primary_cta_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_cta_text: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    service_list: Schema.Attribute.Component<'shared.checklist-item', true>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLandingHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'home';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    phone_label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Call'>;
    phone_link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'tel:8005550199'>;
    phone_number: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'(800) 555-0199'>;
    primary_cta_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_cta_text: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    subheading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksLandingLeadFormShowcase extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_lead_form_showcases';
  info: {
    description: '';
    displayName: 'Lead Form Showcase';
    icon: 'write';
  };
  attributes: {
    checklist: Schema.Attribute.Component<'shared.checklist-item', true>;
    phone_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Prefer to talk? Call us now for exclusive offline leads'>;
    phone_link: Schema.Attribute.String;
    phone_number: Schema.Attribute.String;
    side_image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLandingLocationsGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_locations_grids';
  info: {
    description: '';
    displayName: 'Locations Grid';
    icon: 'grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.landing-location-card', true>;
    subheading: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLandingStatsStrip extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_stats_strips';
  info: {
    description: '';
    displayName: 'Stats Strip';
    icon: 'dashboard';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLandingWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_why_choose_us';
  info: {
    description: '';
    displayName: 'Why Choose Us';
    icon: 'star';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.Component<'shared.point', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLeadFormShowcase extends Struct.ComponentSchema {
  collectionName: 'components_blocks_lead_form_showcases';
  info: {
    description: '';
    displayName: 'Lead Form Showcase';
    icon: 'write';
  };
  attributes: {
    checklist: Schema.Attribute.Component<'shared.checklist-item', true>;
    form_image: Schema.Attribute.Media<'images'>;
    phone_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Prefer to talk? Call us now for exclusive offline leads'>;
    phone_link: Schema.Attribute.String;
    phone_number: Schema.Attribute.String;
    side_image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLocationsGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_locations_grids';
  info: {
    description: '';
    displayName: 'Locations Grid';
    icon: 'grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.location-card', true>;
    subheading: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Our platform has pre-qualified leads across all major business categories. Find the perfect fit for your machines.'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksMachineTypes extends Struct.ComponentSchema {
  collectionName: 'components_blocks_machine_types';
  info: {
    description: '';
    displayName: 'Machine Types';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.machine-card', true>;
    subheading: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksStatsStrip extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_strips';
  info: {
    description: '';
    displayName: 'Stats Strip';
    icon: 'dashboard';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
    icon: 'message';
  };
  attributes: {
    subheading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Join hundreds of operators who have expanded their routes with our platform.'>;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_choose_us';
  info: {
    description: '';
    displayName: 'Why Choose Us';
    icon: 'star';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.Component<'shared.point', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogFaq extends Struct.ComponentSchema {
  collectionName: 'components_blog_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogPoint extends Struct.ComponentSchema {
  collectionName: 'components_blog_points';
  info: {
    description: '';
    displayName: 'Point';
    icon: 'star';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlogPointsSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_points_sections';
  info: {
    description: '';
    displayName: 'Points Section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.Component<'blog.point', true>;
  };
}

export interface CityIndustryFaq extends Struct.ComponentSchema {
  collectionName: 'components_city_industry_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CityFaq extends Struct.ComponentSchema {
  collectionName: 'components_city_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterContactItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_items';
  info: {
    description: '';
    displayName: 'Contact Item';
    icon: 'phone';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['phone', 'email', 'address', 'other']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'phone'>;
    url: Schema.Attribute.String;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
    icon: 'share';
  };
  attributes: {
    label: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'linkedin', 'x', 'youtube', 'tiktok', 'other']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IndustryFaq extends Struct.ComponentSchema {
  collectionName: 'components_industry_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryAnchorEmployer extends Struct.ComponentSchema {
  collectionName: 'components_library_anchor_employers';
  info: {
    description: 'Named local employer / institution on a city page';
    displayName: 'Anchor employer';
  };
  attributes: {
    category: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryArchBlock extends Struct.ComponentSchema {
  collectionName: 'components_library_arch_blocks';
  info: {
    description: 'Single block in a system-architecture tier';
    displayName: 'Architecture block';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    sub: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['default', 'dark', 'blue', 'orange']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface LibraryArchTier extends Struct.ComponentSchema {
  collectionName: 'components_library_arch_tiers';
  info: {
    description: 'One horizontal tier in a system-architecture diagram';
    displayName: 'Architecture tier';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'library.arch-block', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryAuthorLink extends Struct.ComponentSchema {
  collectionName: 'components_library_author_links';
  info: {
    description: 'Outbound link shown on the AuthorCard';
    displayName: 'Author link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockAuthorCard extends Struct.ComponentSchema {
  collectionName: 'components_library_block_author_card';
  info: {
    description: 'Author byline with bio + outbound links. Emits Person JSON-LD (E-E-A-T).';
    displayName: 'Block \u00B7 Author card';
    icon: 'user';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    bio: Schema.Attribute.Text & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'library.author-link', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface LibraryBlockBuyVsLease extends Struct.ComponentSchema {
  collectionName: 'components_library_block_buy_vs_lease';
  info: {
    description: 'Side-by-side buy / lease decision card.';
    displayName: 'Block \u00B7 Buy vs lease comparison';
    icon: 'balance-scale';
  };
  attributes: {
    buy: Schema.Attribute.Component<'library.bvl-option', false>;
    heading: Schema.Attribute.String;
    lease: Schema.Attribute.Component<'library.bvl-option', false>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_library_block_case_study';
  info: {
    description: 'Single case study summary with KPI results.';
    displayName: 'Block \u00B7 Case study card';
    icon: 'briefcase';
  };
  attributes: {
    context: Schema.Attribute.Text & Schema.Attribute.Required;
    meta: Schema.Attribute.Component<'library.case-meta', true>;
    results: Schema.Attribute.Component<'library.case-result', true>;
    tag: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Case study'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockCertificationBadges
  extends Struct.ComponentSchema {
  collectionName: 'components_library_block_certification_badges';
  info: {
    description: 'Row of certification badges.';
    displayName: 'Block \u00B7 Certification badges';
    icon: 'certificate';
  };
  attributes: {
    badges: Schema.Attribute.Component<'library.cert-badge', true>;
    heading: Schema.Attribute.String;
  };
}

export interface LibraryBlockCityAnchorEmployers
  extends Struct.ComponentSchema {
  collectionName: 'components_library_block_city_anchor_employers';
  info: {
    description: 'Pill list of major employers/institutions where vending has been placed in this city.';
    displayName: 'Block \u00B7 City anchor employers';
    icon: 'building';
  };
  attributes: {
    employers: Schema.Attribute.Component<'library.trust-employer', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Major employers we serve in the area'>;
    sub: Schema.Attribute.Text;
  };
}

export interface LibraryBlockCityHero extends Struct.ComponentSchema {
  collectionName: 'components_library_block_city_hero';
  info: {
    description: 'Full-bleed city hero with breadcrumbs, facts, CTAs, and an optional How-it-works right rail.';
    displayName: 'Block \u00B7 City hero';
    icon: 'map-marker-alt';
  };
  attributes: {
    alsoServes: Schema.Attribute.JSON;
    breadcrumbs: Schema.Attribute.Component<'library.breadcrumb-item', true>;
    cityName: Schema.Attribute.String & Schema.Attribute.Required;
    dateModified: Schema.Attribute.String;
    datePublished: Schema.Attribute.String;
    facts: Schema.Attribute.Component<'library.city-fact', true>;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    heroImageUrl: Schema.Attribute.String;
    howItWorks: Schema.Attribute.Component<'library.howit-step', true>;
    howItWorksHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How it works'>;
    intro: Schema.Attribute.Text & Schema.Attribute.Required;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    openingHours: Schema.Attribute.JSON;
    phone: Schema.Attribute.String;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String;
    ratingValue: Schema.Attribute.Decimal;
    reviewCount: Schema.Attribute.Integer;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
    serviceName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Vending Services'>;
    speakableSelectors: Schema.Attribute.JSON;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    stateCode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    variant: Schema.Attribute.Enumeration<['split', 'background']> &
      Schema.Attribute.DefaultTo<'background'>;
  };
}

export interface LibraryBlockCityImageStrip extends Struct.ComponentSchema {
  collectionName: 'components_library_block_city_image_strip';
  info: {
    description: "2-3 contextual photos of a city's anchor sites with captions.";
    displayName: 'Block \u00B7 City image strip';
    icon: 'images';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Component<'library.image-strip-item', true>;
    sub: Schema.Attribute.Text;
  };
}

export interface LibraryBlockCityIndustryGrid extends Struct.ComponentSchema {
  collectionName: 'components_library_block_city_industry_grid';
  info: {
    description: 'Grid of industry-specific links for a city (office, schools, healthcare, etc.)';
    displayName: 'Block \u00B7 City industry grid';
    icon: 'th';
  };
  attributes: {
    cityName: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'library.industry-card', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sub: Schema.Attribute.Text;
  };
}

export interface LibraryBlockComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_library_block_comparison_table';
  info: {
    description: 'X vs Y comparison. `headers` and `rows` are JSON: headers=["H1","H2"], rows=[["cell",{"icon":"check","text":"\u2026"}], \u2026].';
    displayName: 'Block \u00B7 Comparison table';
    icon: 'table';
  };
  attributes: {
    headers: Schema.Attribute.JSON & Schema.Attribute.Required;
    heading: Schema.Attribute.String;
    rows: Schema.Attribute.JSON & Schema.Attribute.Required;
    sub: Schema.Attribute.String;
    winnerColumn: Schema.Attribute.Integer;
  };
}

export interface LibraryBlockComplianceCard extends Struct.ComponentSchema {
  collectionName: 'components_library_block_compliance_card';
  info: {
    description: 'Regulatory limits grid (Smart Snacks, ADA, OSHA, FDA).';
    displayName: 'Block \u00B7 Compliance card';
    icon: 'shield';
  };
  attributes: {
    badge: Schema.Attribute.String;
    citation: Schema.Attribute.Component<'library.citation', false>;
    decorativeImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    limits: Schema.Attribute.Component<'library.compliance-limit', true>;
  };
}

export interface LibraryBlockContactForm extends Struct.ComponentSchema {
  collectionName: 'components_library_block_contact_form';
  info: {
    description: 'Lead-capture quiz form. Compact variant hides the side image.';
    displayName: 'Block \u00B7 Contact Form (Quiz)';
    icon: 'envelope';
  };
  attributes: {
    checklist: Schema.Attribute.JSON;
    compact: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    phoneLabel: Schema.Attribute.String;
    phoneLink: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LibraryBlockContractClause extends Struct.ComponentSchema {
  collectionName: 'components_library_block_contract_clause';
  info: {
    description: 'Single contract clause with quote, flags, and a tip.';
    displayName: 'Block \u00B7 Contract clause card';
    icon: 'file-contract';
  };
  attributes: {
    clauseNumber: Schema.Attribute.String;
    flags: Schema.Attribute.Component<'library.clause-flag', true>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    tipBody: Schema.Attribute.Text;
    tipTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Tip'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockCostBreakdown extends Struct.ComponentSchema {
  collectionName: 'components_library_block_cost_breakdown';
  info: {
    description: 'Line items + total row. Dollar-intent table.';
    displayName: 'Block \u00B7 Cost breakdown';
    icon: 'money';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'library.cost-line', true>;
    sub: Schema.Attribute.String;
    totalAmount: Schema.Attribute.String & Schema.Attribute.Required;
    totalLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockDecisionTree extends Struct.ComponentSchema {
  collectionName: 'components_library_block_decision_tree';
  info: {
    description: 'Single-question Y/N tree. Exactly 2 branches.';
    displayName: 'Block \u00B7 Decision tree';
    icon: 'code-branch';
  };
  attributes: {
    branches: Schema.Attribute.Component<'library.decision-branch', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
      >;
    heading: Schema.Attribute.String;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockDimensionDiagram extends Struct.ComponentSchema {
  collectionName: 'components_library_block_dimension_diagram';
  info: {
    description: "Labeled front + side silhouette with width / depth / height arrows and a spec strip. Use for any 'will this machine fit' question.";
    displayName: 'Block \u00B7 Dimension diagram';
    icon: 'ruler';
  };
  attributes: {
    depth: Schema.Attribute.String & Schema.Attribute.Required;
    doorwayClearance: Schema.Attribute.String;
    footprint: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    height: Schema.Attribute.String & Schema.Attribute.Required;
    machineName: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text;
    sub: Schema.Attribute.String;
    weightEmpty: Schema.Attribute.String;
    weightLoaded: Schema.Attribute.String;
    width: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockDualAudience extends Struct.ComponentSchema {
  collectionName: 'components_library_block_dual_audience';
  info: {
    description: 'Side-by-side columns for two audiences (parent / admin, customer / employee).';
    displayName: 'Block \u00B7 Dual-audience layout';
    icon: 'columns';
  };
  attributes: {
    heading: Schema.Attribute.String;
    left: Schema.Attribute.Component<'library.dual-column', false>;
    right: Schema.Attribute.Component<'library.dual-column', false>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockFacilityBadgingMatrix
  extends Struct.ComponentSchema {
  collectionName: 'components_library_block_facility_badging_matrix';
  info: {
    description: 'Table of facilities a partner is pre-cleared at \u2014 badging type, lead time, status.';
    displayName: 'Block \u00B7 Facility badging matrix';
    icon: 'shield-alt';
  };
  attributes: {
    footnote: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    rows: Schema.Attribute.Component<'library.facility-row', true>;
    sub: Schema.Attribute.Text;
  };
}

export interface LibraryBlockFloorplan extends Struct.ComponentSchema {
  collectionName: 'components_library_block_floorplan';
  info: {
    description: 'Inline SVG floorplan + legend. svgInner is raw inner SVG (use viewBox).';
    displayName: 'Block \u00B7 Floorplan';
    icon: 'map';
  };
  attributes: {
    heading: Schema.Attribute.String;
    legend: Schema.Attribute.JSON;
    sub: Schema.Attribute.String;
    svgInner: Schema.Attribute.Text & Schema.Attribute.Required;
    viewBox: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'0 0 400 220'>;
  };
}

export interface LibraryBlockFranchiseMatrix extends Struct.ComponentSchema {
  collectionName: 'components_library_block_franchise_matrix';
  info: {
    description: 'FDD-style franchise comparison table.';
    displayName: 'Block \u00B7 Franchise matrix';
    icon: 'th-list';
  };
  attributes: {
    heading: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'library.franchise-row', true>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockFundraisingCalculator
  extends Struct.ComponentSchema {
  collectionName: 'components_library_block_fundraising_calculator';
  info: {
    description: 'Interactive sliders \u2192 annual commission. Schools cluster engagement.';
    displayName: 'Block \u00B7 Fundraising calculator';
    icon: 'calculator';
  };
  attributes: {
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/#get-machine'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get a real quote'>;
    defaultCommissionPct: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<12>;
    defaultMachines: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    defaultTicketCents: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<175>;
    defaultTransactionsPerDay: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<35>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Fundraising commission calculator'>;
    schoolDays: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<180>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockGradeComparison extends Struct.ComponentSchema {
  collectionName: 'components_library_block_grade_comparison';
  info: {
    description: 'K-5 / 6-8 / 9-12 side-by-side cards.';
    displayName: 'Block \u00B7 Grade-level comparison';
    icon: 'graduation-cap';
  };
  attributes: {
    grades: Schema.Attribute.Component<'library.grade-card', true>;
    heading: Schema.Attribute.String;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockHoursGrid extends Struct.ComponentSchema {
  collectionName: 'components_library_block_hours_grid';
  info: {
    description: 'Weekly operating-hours grid. `rows[].slots` is JSON array of 7 status entries (open/partial/locked/weekend).';
    displayName: 'Block \u00B7 Hours grid';
    icon: 'calendar';
  };
  attributes: {
    caption: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'library.hours-row', true>;
  };
}

export interface LibraryBlockImageWithCaption extends Struct.ComponentSchema {
  collectionName: 'components_library_block_image_with_caption';
  info: {
    description: 'Standalone image block with caption + credit. Emits ImageObject.';
    displayName: 'Block \u00B7 Image with caption';
    icon: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.String;
    credit: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LibraryBlockInlineCta extends Struct.ComponentSchema {
  collectionName: 'components_library_block_inline_cta';
  info: {
    description: 'Mid-content conversion CTA banner.';
    displayName: 'Block \u00B7 Inline CTA';
    icon: 'arrow-right';
  };
  attributes: {
    buttonHref: Schema.Attribute.String & Schema.Attribute.Required;
    buttonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockKeyTakeaways extends Struct.ComponentSchema {
  collectionName: 'components_library_block_key_takeaways';
  info: {
    description: 'Bulleted highlights. List-snippet bait.';
    displayName: 'Block \u00B7 Key takeaways';
    icon: 'check';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Key takeaways'>;
    takeaways: Schema.Attribute.Component<'library.takeaway', true>;
  };
}

export interface LibraryBlockLeadMagnet extends Struct.ComponentSchema {
  collectionName: 'components_library_block_lead_magnet';
  info: {
    description: 'Downloadable resource CTA card. Conversion surface.';
    displayName: 'Block \u00B7 Lead magnet';
    icon: 'download';
  };
  attributes: {
    buttonHref: Schema.Attribute.String & Schema.Attribute.Required;
    buttonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    iconText: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u2605'>;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockNearbyCitiesGrid extends Struct.ComponentSchema {
  collectionName: 'components_library_block_nearby_cities_grid';
  info: {
    description: 'Photo-grid of nearby cities with internal links for local SEO.';
    displayName: 'Block \u00B7 Nearby cities grid';
    icon: 'map';
  };
  attributes: {
    cities: Schema.Attribute.Component<'library.nearby-city', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Nearby cities we serve'>;
    sub: Schema.Attribute.Text;
  };
}

export interface LibraryBlockNutritionLabel extends Struct.ComponentSchema {
  collectionName: 'components_library_block_nutrition_label';
  info: {
    description: 'FDA-format nutrition label + compliance pass/warn/fail rows.';
    displayName: 'Block \u00B7 Nutrition label';
    icon: 'apple';
  };
  attributes: {
    allergens: Schema.Attribute.String;
    calories: Schema.Attribute.String & Schema.Attribute.Required;
    compliance: Schema.Attribute.Component<'library.compliance-row', true>;
    heading: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'library.nutrient-row', true>;
    servingSize: Schema.Attribute.String & Schema.Attribute.Required;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockPlTable extends Struct.ComponentSchema {
  collectionName: 'components_library_block_pl_table';
  info: {
    description: 'P&L table with summary output panel + KPIs.';
    displayName: 'Block \u00B7 Operator P&L table';
    icon: 'chart-line';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kpis: Schema.Attribute.Component<'library.stat-item', true>;
    outputAmount: Schema.Attribute.String & Schema.Attribute.Required;
    outputLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'ANNUAL NET'>;
    outputSub: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'library.pl-row', true>;
    sub: Schema.Attribute.String;
    totalAmount: Schema.Attribute.String & Schema.Attribute.Required;
    totalLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBlockRedFlagChecklist extends Struct.ComponentSchema {
  collectionName: 'components_library_block_red_flag_checklist';
  info: {
    description: 'Numbered red-flag items with severity tags.';
    displayName: 'Block \u00B7 Red-flag checklist';
    icon: 'exclamation-triangle';
  };
  attributes: {
    flags: Schema.Attribute.Component<'library.red-flag', true>;
    heading: Schema.Attribute.String;
    iconText: Schema.Attribute.String & Schema.Attribute.DefaultTo<'!'>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockRelatedGuides extends Struct.ComponentSchema {
  collectionName: 'components_library_block_related_guides';
  info: {
    description: 'Sister-page card grid for internal linking.';
    displayName: 'Block \u00B7 Related guides';
    icon: 'link';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Related guides'>;
    items: Schema.Attribute.Component<'library.related-item', true>;
  };
}

export interface LibraryBlockRichText extends Struct.ComponentSchema {
  collectionName: 'components_library_block_rich_text';
  info: {
    description: 'Wraps a markdown/rich-text body inside the dynamic zone. Use for prose between structured blocks.';
    displayName: 'Block \u00B7 Rich text';
    icon: 'align-left';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface LibraryBlockSalesPipeline extends Struct.ComponentSchema {
  collectionName: 'components_library_block_sales_pipeline';
  info: {
    description: 'Kanban-style operator sales pipeline.';
    displayName: 'Block \u00B7 Sales pipeline';
    icon: 'stream';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stages: Schema.Attribute.Component<'library.pipe-stage', true>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockSampleStatement extends Struct.ComponentSchema {
  collectionName: 'components_library_block_sample_statement';
  info: {
    description: 'Visual mock of a commission statement \u2014 header metadata, per-machine line items, totals, footnote. AI-citation magnet.';
    displayName: 'Block \u00B7 Sample commission statement';
    icon: 'file-invoice-dollar';
  };
  attributes: {
    accountName: Schema.Attribute.String & Schema.Attribute.Required;
    calculationBasis: Schema.Attribute.String;
    footnote: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    issuedDate: Schema.Attribute.String;
    lines: Schema.Attribute.Component<'library.statement-line', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    paymentMethod: Schema.Attribute.String;
    period: Schema.Attribute.String & Schema.Attribute.Required;
    sub: Schema.Attribute.String;
    totalCommission: Schema.Attribute.String & Schema.Attribute.Required;
    totalGross: Schema.Attribute.String & Schema.Attribute.Required;
    totalNet: Schema.Attribute.String & Schema.Attribute.Required;
    totalRefunds: Schema.Attribute.String;
  };
}

export interface LibraryBlockSecurityLayerStack extends Struct.ComponentSchema {
  collectionName: 'components_library_block_security_layer_stack';
  info: {
    description: "Vertical stack of defense-in-depth layers, each with a tagline and feature list. Reusable for any 'layered architecture' explainer.";
    displayName: 'Block \u00B7 Security layer stack';
    icon: 'shield-halved';
  };
  attributes: {
    footnote: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    layers: Schema.Attribute.Component<'library.security-layer', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockSourceCitations extends Struct.ComponentSchema {
  collectionName: 'components_library_block_source_citations';
  info: {
    description: 'Numbered citation footer. Article.citation authority signal.';
    displayName: 'Block \u00B7 Source citations';
    icon: 'link';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Sources'>;
    sources: Schema.Attribute.Component<'library.source', true>;
  };
}

export interface LibraryBlockSpecList extends Struct.ComponentSchema {
  collectionName: 'components_library_block_spec_list';
  info: {
    description: 'Bold-label specs / requirements list.';
    displayName: 'Block \u00B7 Spec list';
    icon: 'list';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'library.spec-item', true>;
  };
}

export interface LibraryBlockStatStrip extends Struct.ComponentSchema {
  collectionName: 'components_library_block_stat_strip';
  info: {
    description: 'Dark KPI strip. Use sparingly.';
    displayName: 'Block \u00B7 Stat callout strip';
    icon: 'chart-pie';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'library.stat-item', true>;
  };
}

export interface LibraryBlockSystemArchitecture extends Struct.ComponentSchema {
  collectionName: 'components_library_block_system_architecture';
  info: {
    description: 'Tiered stack diagram for tech / AI cooler posts.';
    displayName: 'Block \u00B7 System architecture';
    icon: 'sitemap';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub: Schema.Attribute.String;
    tiers: Schema.Attribute.Component<'library.arch-tier', true>;
  };
}

export interface LibraryBlockTabbedFaq extends Struct.ComponentSchema {
  collectionName: 'components_library_block_tabbed_faq';
  info: {
    description: 'Audience-tabbed FAQ accordion. Emits FAQPage JSON-LD.';
    displayName: 'Block \u00B7 Tabbed FAQ';
    icon: 'question-circle';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'library.faq-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently asked questions'>;
  };
}

export interface LibraryBlockTestimonialQuote extends Struct.ComponentSchema {
  collectionName: 'components_library_block_testimonial_quote';
  info: {
    description: 'Pull-quote with optional side image. Emits Review JSON-LD.';
    displayName: 'Block \u00B7 Testimonial quote';
    icon: 'quote-right';
  };
  attributes: {
    avatarImage: Schema.Attribute.Media<'images'>;
    avatarInitials: Schema.Attribute.String;
    emitReviewSchema: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
    sideImage: Schema.Attribute.Media<'images'>;
  };
}

export interface LibraryBlockTimeline extends Struct.ComponentSchema {
  collectionName: 'components_library_block_timeline';
  info: {
    description: 'Process timeline. Emits HowTo JSON-LD.';
    displayName: 'Block \u00B7 Timeline / HowTo';
    icon: 'clock';
  };
  attributes: {
    heading: Schema.Attribute.String;
    howToName: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'library.timeline-step', true>;
    sub: Schema.Attribute.String;
    totalTime: Schema.Attribute.String;
  };
}

export interface LibraryBlockTipCards extends Struct.ComponentSchema {
  collectionName: 'components_library_block_tip_cards';
  info: {
    description: 'Numbered tip / mistake cards. "X mistakes to avoid" pattern.';
    displayName: 'Block \u00B7 Tip / mistake cards';
    icon: 'exclamation';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'library.tip-item', true>;
    startNumber: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryBlockTldrQuickAnswer extends Struct.ComponentSchema {
  collectionName: 'components_library_block_tldr_quick_answer';
  info: {
    description: 'Paragraph + bulleted list. Featured-snippet target.';
    displayName: 'Block \u00B7 TL;DR quick answer';
    icon: 'lightbulb';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'library.bullet-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LibraryBlockTrustStrip extends Struct.ComponentSchema {
  collectionName: 'components_library_block_trust_strip';
  info: {
    description: 'Dark strip below the hero \u2014 "Trusted by" anchor names + star rating.';
    displayName: 'Block \u00B7 Trust strip';
    icon: 'shield-alt';
  };
  attributes: {
    employers: Schema.Attribute.Component<'library.trust-employer', true>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by teams at'>;
    ratingCount: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'247 reviews'>;
    ratingValue: Schema.Attribute.String & Schema.Attribute.DefaultTo<'4.8'>;
  };
}

export interface LibraryBlockVendorCards extends Struct.ComponentSchema {
  collectionName: 'components_library_block_vendor_cards';
  info: {
    description: 'Best-companies grid for vendor listicles.';
    displayName: 'Block \u00B7 Vendor cards grid';
    icon: 'building';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub: Schema.Attribute.String;
    vendors: Schema.Attribute.Component<'library.vendor-item', true>;
  };
}

export interface LibraryBreadcrumbItem extends Struct.ComponentSchema {
  collectionName: 'components_library_breadcrumb_items';
  info: {
    description: 'Single link in a breadcrumb trail';
    displayName: 'Breadcrumb item';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_library_bullet_items';
  info: {
    description: 'Single bullet with optional bold lead-in';
    displayName: 'Bullet item';
  };
  attributes: {
    emphasis: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LibraryBvlOption extends Struct.ComponentSchema {
  collectionName: 'components_library_bvl_options';
  info: {
    description: 'Single buy or lease option card';
    displayName: 'Buy/lease option';
  };
  attributes: {
    iconText: Schema.Attribute.String & Schema.Attribute.Required;
    isBest: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'library.bvl-stat', true>;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    whenToChoose: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LibraryBvlStat extends Struct.ComponentSchema {
  collectionName: 'components_library_bvl_stats';
  info: {
    description: 'Key/value stat for a buy-vs-lease option';
    displayName: 'Buy/lease stat';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryCaseMeta extends Struct.ComponentSchema {
  collectionName: 'components_library_case_meta';
  info: {
    description: 'Label / value metadata pair for a case study';
    displayName: 'Case meta item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryCaseResult extends Struct.ComponentSchema {
  collectionName: 'components_library_case_results';
  info: {
    description: 'Result KPI for a case study';
    displayName: 'Case result';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryCertBadge extends Struct.ComponentSchema {
  collectionName: 'components_library_cert_badges';
  info: {
    description: 'Single certification badge';
    displayName: 'Certification badge';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['blue', 'orange', 'green', 'purple', 'red']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    iconText: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryCitation extends Struct.ComponentSchema {
  collectionName: 'components_library_citations';
  info: {
    description: 'Source citation with optional URL and last-verified date';
    displayName: 'Citation';
  };
  attributes: {
    date: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface LibraryCityFact extends Struct.ComponentSchema {
  collectionName: 'components_library_city_facts';
  info: {
    description: 'Label / value fact tile shown in city hero';
    displayName: 'City fact';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    wide: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LibraryClauseFlag extends Struct.ComponentSchema {
  collectionName: 'components_library_clause_flags';
  info: {
    description: 'Negotiate / watch flag pill on a contract clause card';
    displayName: 'Clause flag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    tone: Schema.Attribute.Enumeration<['neg', 'watch']> &
      Schema.Attribute.DefaultTo<'neg'>;
  };
}

export interface LibraryClearanceSpec extends Struct.ComponentSchema {
  collectionName: 'components_library_clearance_specs';
  info: {
    description: "Single clearance requirement (e.g., 'Behind machine \u2014 6 in for ventilation').";
    displayName: 'Clearance spec';
  };
  attributes: {
    reason: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    zone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryComplianceLimit extends Struct.ComponentSchema {
  collectionName: 'components_library_compliance_limits';
  info: {
    description: 'Single nutrient / regulatory cap';
    displayName: 'Compliance limit';
  };
  attributes: {
    context: Schema.Attribute.String;
    limit: Schema.Attribute.String & Schema.Attribute.Required;
    nutrient: Schema.Attribute.String & Schema.Attribute.Required;
    unit: Schema.Attribute.String;
  };
}

export interface LibraryComplianceRow extends Struct.ComponentSchema {
  collectionName: 'components_library_compliance_rows';
  info: {
    description: 'Row in a compliance pass/warn/fail check';
    displayName: 'Compliance row';
  };
  attributes: {
    criterion: Schema.Attribute.String & Schema.Attribute.Required;
    detail: Schema.Attribute.String & Schema.Attribute.Required;
    small: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<['pass', 'warn', 'fail']> &
      Schema.Attribute.DefaultTo<'pass'>;
  };
}

export interface LibraryCostLine extends Struct.ComponentSchema {
  collectionName: 'components_library_cost_lines';
  info: {
    description: 'Line item in a cost breakdown table';
    displayName: 'Cost line';
  };
  attributes: {
    amount: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    range: Schema.Attribute.String;
  };
}

export interface LibraryDecisionBranch extends Struct.ComponentSchema {
  collectionName: 'components_library_decision_branches';
  info: {
    description: 'Single Y/N branch in a decision tree';
    displayName: 'Decision branch';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    finalLabel: Schema.Attribute.String;
    finalTone: Schema.Attribute.Enumeration<['go', 'stop']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    yn: Schema.Attribute.Enumeration<['YES', 'NO']> & Schema.Attribute.Required;
  };
}

export interface LibraryDimensionCallout extends Struct.ComponentSchema {
  collectionName: 'components_library_dimension_callouts';
  info: {
    description: 'Single labeled measurement on a dimension diagram.';
    displayName: 'Dimension callout';
  };
  attributes: {
    axis: Schema.Attribute.Enumeration<['width', 'depth', 'height']> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryDualColumn extends Struct.ComponentSchema {
  collectionName: 'components_library_dual_columns';
  info: {
    description: 'One of two columns in a dual-audience layout';
    displayName: 'Dual-audience column';
  };
  attributes: {
    specs: Schema.Attribute.Component<'library.dual-spec', true>;
    sub: Schema.Attribute.String;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryDualSpec extends Struct.ComponentSchema {
  collectionName: 'components_library_dual_specs';
  info: {
    description: 'Key/value spec row inside a dual-audience column';
    displayName: 'Dual-audience spec';
  };
  attributes: {
    k: Schema.Attribute.String & Schema.Attribute.Required;
    v: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryFacilityRow extends Struct.ComponentSchema {
  collectionName: 'components_library_facility_rows';
  info: {
    description: 'Row in the FacilityBadgingMatrix table.';
    displayName: 'Facility row';
  };
  attributes: {
    badgingType: Schema.Attribute.String & Schema.Attribute.Required;
    facility: Schema.Attribute.String & Schema.Attribute.Required;
    leadTime: Schema.Attribute.String & Schema.Attribute.Required;
    status: Schema.Attribute.Enumeration<['standard', 'expedited', 'complex']> &
      Schema.Attribute.DefaultTo<'standard'>;
  };
}

export interface LibraryFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_library_faq_items';
  info: {
    description: 'Single Q/A in a tabbed FAQ block. Audience tag groups items into tabs.';
    displayName: 'FAQ item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    audience: Schema.Attribute.String;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryFranchiseRow extends Struct.ComponentSchema {
  collectionName: 'components_library_franchise_rows';
  info: {
    description: 'Row in a franchise comparison matrix';
    displayName: 'Franchise row';
  };
  attributes: {
    franchiseFee: Schema.Attribute.String & Schema.Attribute.Required;
    initialInvestment: Schema.Attribute.String & Schema.Attribute.Required;
    logoText: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    niche: Schema.Attribute.String;
    royaltyLabel: Schema.Attribute.String & Schema.Attribute.Required;
    royaltyTone: Schema.Attribute.Enumeration<['lo', 'mid', 'hi']> &
      Schema.Attribute.DefaultTo<'lo'>;
    territory: Schema.Attribute.String;
    training: Schema.Attribute.String;
  };
}

export interface LibraryGradeCard extends Struct.ComponentSchema {
  collectionName: 'components_library_grade_cards';
  info: {
    description: 'Single grade-level card (e.g. K-5, 6-8, 9-12)';
    displayName: 'Grade card';
  };
  attributes: {
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    iconText: Schema.Attribute.String & Schema.Attribute.Required;
    iconVariant: Schema.Attribute.Enumeration<['default', 'mid', 'hs']> &
      Schema.Attribute.DefaultTo<'default'>;
    linkHref: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    range: Schema.Attribute.String & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<'library.grade-section', true>;
  };
}

export interface LibraryGradeSection extends Struct.ComponentSchema {
  collectionName: 'components_library_grade_sections';
  info: {
    description: 'Row inside a grade-level card';
    displayName: 'Grade section';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    pillLabel: Schema.Attribute.String;
    pillTone: Schema.Attribute.Enumeration<['ok', 'partial', 'no']>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LibraryHoursRow extends Struct.ComponentSchema {
  collectionName: 'components_library_hours_rows';
  info: {
    description: 'Single hour row in the weekly hours grid. Slots field is JSON of [{status,label}] for Mon..Sun.';
    displayName: 'Hours row';
  };
  attributes: {
    hour: Schema.Attribute.String & Schema.Attribute.Required;
    slots: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface LibraryHowitStep extends Struct.ComponentSchema {
  collectionName: 'components_library_howit_steps';
  info: {
    description: 'Step in the right-rail How-it-works panel (CityHero background variant)';
    displayName: 'How-it-works step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconSvg: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryImageStripItem extends Struct.ComponentSchema {
  collectionName: 'components_library_image_strip_items';
  info: {
    description: 'Single image with caption in a CityImageStrip.';
    displayName: 'Image strip item';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    src: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryIndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_library_industry_cards';
  info: {
    description: 'One vertical / industry tile on a city page (e.g. Office, Schools, Healthcare)';
    displayName: 'Industry card';
  };
  attributes: {
    description: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    iconText: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryMetaStripItem extends Struct.ComponentSchema {
  collectionName: 'components_library_meta_strip_items';
  info: {
    description: 'Label / value pair shown in the hero meta strip';
    displayName: 'Meta strip item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryNearbyCity extends Struct.ComponentSchema {
  collectionName: 'components_library_nearby_cities';
  info: {
    description: 'Single card in the Nearby Cities grid (with optional photo)';
    displayName: 'Nearby city card';
  };
  attributes: {
    distanceMiles: Schema.Attribute.Integer;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    population: Schema.Attribute.String;
    state: Schema.Attribute.String;
  };
}

export interface LibraryNutrientRow extends Struct.ComponentSchema {
  collectionName: 'components_library_nutrient_rows';
  info: {
    description: 'Row inside an FDA-style nutrition label';
    displayName: 'Nutrient row';
  };
  attributes: {
    bold: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    dv: Schema.Attribute.String;
    indent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String;
  };
}

export interface LibraryPipeCard extends Struct.ComponentSchema {
  collectionName: 'components_library_pipe_cards';
  info: {
    description: 'Single card inside a sales-pipeline stage';
    displayName: 'Pipeline card';
  };
  attributes: {
    hot: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    meta: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryPipeStage extends Struct.ComponentSchema {
  collectionName: 'components_library_pipe_stages';
  info: {
    description: 'One column in a sales pipeline';
    displayName: 'Pipeline stage';
  };
  attributes: {
    cards: Schema.Attribute.Component<'library.pipe-card', true>;
    count: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    stage: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryPlRow extends Struct.ComponentSchema {
  collectionName: 'components_library_pl_rows';
  info: {
    description: 'Row in an operator P&L table';
    displayName: 'P&L row';
  };
  attributes: {
    kind: Schema.Attribute.Enumeration<
      ['revenue', 'expense', 'header-revenue', 'header-expense']
    > &
      Schema.Attribute.DefaultTo<'revenue'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String;
  };
}

export interface LibraryRedFlag extends Struct.ComponentSchema {
  collectionName: 'components_library_red_flags';
  info: {
    description: 'Single red flag with severity';
    displayName: 'Red flag';
  };
  attributes: {
    detail: Schema.Attribute.String;
    severity: Schema.Attribute.Enumeration<['high', 'med', 'low']> &
      Schema.Attribute.DefaultTo<'high'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryRelatedItem extends Struct.ComponentSchema {
  collectionName: 'components_library_related_items';
  info: {
    description: 'Card in a related-guides grid';
    displayName: 'Related item';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibrarySecurityLayer extends Struct.ComponentSchema {
  collectionName: 'components_library_security_layers';
  info: {
    description: 'One ring of defense-in-depth (e.g., Physical, Payment, Telemetry). Holds a JSON list of features.';
    displayName: 'Security layer';
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<
      ['blue', 'orange', 'green', 'red', 'slate']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    features: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tagline: Schema.Attribute.String;
  };
}

export interface LibrarySource extends Struct.ComponentSchema {
  collectionName: 'components_library_sources';
  info: {
    description: 'Footer-style numbered reference';
    displayName: 'Source';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibrarySpecItem extends Struct.ComponentSchema {
  collectionName: 'components_library_spec_items';
  info: {
    description: 'Key/value spec row (label + value)';
    displayName: 'Spec item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LibraryStatItem extends Struct.ComponentSchema {
  collectionName: 'components_library_stat_items';
  info: {
    description: 'Single number with label and optional sub-label';
    displayName: 'Stat item';
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<['orange', 'blue']> &
      Schema.Attribute.DefaultTo<'orange'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    sub: Schema.Attribute.String;
  };
}

export interface LibraryStatementLine extends Struct.ComponentSchema {
  collectionName: 'components_library_statement_lines';
  info: {
    description: 'Single row in a sample commission statement (per machine or per SKU).';
    displayName: 'Statement line';
  };
  attributes: {
    commission: Schema.Attribute.String & Schema.Attribute.Required;
    gross: Schema.Attribute.String & Schema.Attribute.Required;
    location: Schema.Attribute.String;
    machineLabel: Schema.Attribute.String & Schema.Attribute.Required;
    net: Schema.Attribute.String & Schema.Attribute.Required;
    rate: Schema.Attribute.String;
    refunds: Schema.Attribute.String;
    units: Schema.Attribute.Integer;
  };
}

export interface LibraryTakeaway extends Struct.ComponentSchema {
  collectionName: 'components_library_takeaways';
  info: {
    description: 'Single key-takeaway bullet';
    displayName: 'Takeaway';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LibraryTimelineStep extends Struct.ComponentSchema {
  collectionName: 'components_library_timeline_steps';
  info: {
    description: 'Single step in a numbered process timeline';
    displayName: 'Timeline step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryTipItem extends Struct.ComponentSchema {
  collectionName: 'components_library_tip_items';
  info: {
    description: 'Single numbered tip or mistake card';
    displayName: 'Tip / mistake';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryTrustEmployer extends Struct.ComponentSchema {
  collectionName: 'components_library_trust_employers';
  info: {
    description: 'Named anchor employer shown in the trust strip';
    displayName: 'Trust strip employer';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryVendorItem extends Struct.ComponentSchema {
  collectionName: 'components_library_vendor_items';
  info: {
    description: 'Single vendor card in a vendor grid';
    displayName: 'Vendor item';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    logoText: Schema.Attribute.String & Schema.Attribute.Required;
    meta: Schema.Attribute.Component<'library.vendor-meta', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LibraryVendorMeta extends Struct.ComponentSchema {
  collectionName: 'components_library_vendor_meta';
  info: {
    description: 'Bold label / plain value pair shown on vendor cards';
    displayName: 'Vendor meta';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResourceFaq extends Struct.ComponentSchema {
  collectionName: 'components_resource_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedChecklistItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_checklist_items';
  info: {
    description: '';
    displayName: 'Checklist Item';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: '';
    displayName: 'Faq Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLandingLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_landing_location_cards';
  info: {
    description: '';
    displayName: 'Landing Location Card';
    icon: 'map-marker';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_cards';
  info: {
    description: '';
    displayName: 'Location Card';
    icon: 'map-marker';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMachineCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_machine_cards';
  info: {
    description: '';
    displayName: 'Machine Card';
    icon: 'apps';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    description: '';
    displayName: 'Point';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'cast';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 155;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    description: '';
    displayName: 'Stat';
    icon: 'hashtag';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    description: '';
    displayName: 'Step';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    hover_icon: Schema.Attribute.Media<'images'>;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    icon: 'quote-right';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer & Schema.Attribute.Required;
    review: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cta': BlocksCta;
      'blocks.email-notification': BlocksEmailNotification;
      'blocks.faq': BlocksFaq;
      'blocks.hero': BlocksHero;
      'blocks.how-it-works': BlocksHowItWorks;
      'blocks.landing-cta': BlocksLandingCta;
      'blocks.landing-hero': BlocksLandingHero;
      'blocks.landing-lead-form-showcase': BlocksLandingLeadFormShowcase;
      'blocks.landing-locations-grid': BlocksLandingLocationsGrid;
      'blocks.landing-stats-strip': BlocksLandingStatsStrip;
      'blocks.landing-why-choose-us': BlocksLandingWhyChooseUs;
      'blocks.lead-form-showcase': BlocksLeadFormShowcase;
      'blocks.locations-grid': BlocksLocationsGrid;
      'blocks.machine-types': BlocksMachineTypes;
      'blocks.stats-strip': BlocksStatsStrip;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.why-choose-us': BlocksWhyChooseUs;
      'blog.faq': BlogFaq;
      'blog.point': BlogPoint;
      'blog.points-section': BlogPointsSection;
      'city-industry.faq': CityIndustryFaq;
      'city.faq': CityFaq;
      'footer.contact-item': FooterContactItem;
      'footer.link': FooterLink;
      'footer.social-link': FooterSocialLink;
      'industry.faq': IndustryFaq;
      'library.anchor-employer': LibraryAnchorEmployer;
      'library.arch-block': LibraryArchBlock;
      'library.arch-tier': LibraryArchTier;
      'library.author-link': LibraryAuthorLink;
      'library.block-author-card': LibraryBlockAuthorCard;
      'library.block-buy-vs-lease': LibraryBlockBuyVsLease;
      'library.block-case-study': LibraryBlockCaseStudy;
      'library.block-certification-badges': LibraryBlockCertificationBadges;
      'library.block-city-anchor-employers': LibraryBlockCityAnchorEmployers;
      'library.block-city-hero': LibraryBlockCityHero;
      'library.block-city-image-strip': LibraryBlockCityImageStrip;
      'library.block-city-industry-grid': LibraryBlockCityIndustryGrid;
      'library.block-comparison-table': LibraryBlockComparisonTable;
      'library.block-compliance-card': LibraryBlockComplianceCard;
      'library.block-contact-form': LibraryBlockContactForm;
      'library.block-contract-clause': LibraryBlockContractClause;
      'library.block-cost-breakdown': LibraryBlockCostBreakdown;
      'library.block-decision-tree': LibraryBlockDecisionTree;
      'library.block-dimension-diagram': LibraryBlockDimensionDiagram;
      'library.block-dual-audience': LibraryBlockDualAudience;
      'library.block-facility-badging-matrix': LibraryBlockFacilityBadgingMatrix;
      'library.block-floorplan': LibraryBlockFloorplan;
      'library.block-franchise-matrix': LibraryBlockFranchiseMatrix;
      'library.block-fundraising-calculator': LibraryBlockFundraisingCalculator;
      'library.block-grade-comparison': LibraryBlockGradeComparison;
      'library.block-hours-grid': LibraryBlockHoursGrid;
      'library.block-image-with-caption': LibraryBlockImageWithCaption;
      'library.block-inline-cta': LibraryBlockInlineCta;
      'library.block-key-takeaways': LibraryBlockKeyTakeaways;
      'library.block-lead-magnet': LibraryBlockLeadMagnet;
      'library.block-nearby-cities-grid': LibraryBlockNearbyCitiesGrid;
      'library.block-nutrition-label': LibraryBlockNutritionLabel;
      'library.block-pl-table': LibraryBlockPlTable;
      'library.block-red-flag-checklist': LibraryBlockRedFlagChecklist;
      'library.block-related-guides': LibraryBlockRelatedGuides;
      'library.block-rich-text': LibraryBlockRichText;
      'library.block-sales-pipeline': LibraryBlockSalesPipeline;
      'library.block-sample-statement': LibraryBlockSampleStatement;
      'library.block-security-layer-stack': LibraryBlockSecurityLayerStack;
      'library.block-source-citations': LibraryBlockSourceCitations;
      'library.block-spec-list': LibraryBlockSpecList;
      'library.block-stat-strip': LibraryBlockStatStrip;
      'library.block-system-architecture': LibraryBlockSystemArchitecture;
      'library.block-tabbed-faq': LibraryBlockTabbedFaq;
      'library.block-testimonial-quote': LibraryBlockTestimonialQuote;
      'library.block-timeline': LibraryBlockTimeline;
      'library.block-tip-cards': LibraryBlockTipCards;
      'library.block-tldr-quick-answer': LibraryBlockTldrQuickAnswer;
      'library.block-trust-strip': LibraryBlockTrustStrip;
      'library.block-vendor-cards': LibraryBlockVendorCards;
      'library.breadcrumb-item': LibraryBreadcrumbItem;
      'library.bullet-item': LibraryBulletItem;
      'library.bvl-option': LibraryBvlOption;
      'library.bvl-stat': LibraryBvlStat;
      'library.case-meta': LibraryCaseMeta;
      'library.case-result': LibraryCaseResult;
      'library.cert-badge': LibraryCertBadge;
      'library.citation': LibraryCitation;
      'library.city-fact': LibraryCityFact;
      'library.clause-flag': LibraryClauseFlag;
      'library.clearance-spec': LibraryClearanceSpec;
      'library.compliance-limit': LibraryComplianceLimit;
      'library.compliance-row': LibraryComplianceRow;
      'library.cost-line': LibraryCostLine;
      'library.decision-branch': LibraryDecisionBranch;
      'library.dimension-callout': LibraryDimensionCallout;
      'library.dual-column': LibraryDualColumn;
      'library.dual-spec': LibraryDualSpec;
      'library.facility-row': LibraryFacilityRow;
      'library.faq-item': LibraryFaqItem;
      'library.franchise-row': LibraryFranchiseRow;
      'library.grade-card': LibraryGradeCard;
      'library.grade-section': LibraryGradeSection;
      'library.hours-row': LibraryHoursRow;
      'library.howit-step': LibraryHowitStep;
      'library.image-strip-item': LibraryImageStripItem;
      'library.industry-card': LibraryIndustryCard;
      'library.meta-strip-item': LibraryMetaStripItem;
      'library.nearby-city': LibraryNearbyCity;
      'library.nutrient-row': LibraryNutrientRow;
      'library.pipe-card': LibraryPipeCard;
      'library.pipe-stage': LibraryPipeStage;
      'library.pl-row': LibraryPlRow;
      'library.red-flag': LibraryRedFlag;
      'library.related-item': LibraryRelatedItem;
      'library.security-layer': LibrarySecurityLayer;
      'library.source': LibrarySource;
      'library.spec-item': LibrarySpecItem;
      'library.stat-item': LibraryStatItem;
      'library.statement-line': LibraryStatementLine;
      'library.takeaway': LibraryTakeaway;
      'library.timeline-step': LibraryTimelineStep;
      'library.tip-item': LibraryTipItem;
      'library.trust-employer': LibraryTrustEmployer;
      'library.vendor-item': LibraryVendorItem;
      'library.vendor-meta': LibraryVendorMeta;
      'resource.faq': ResourceFaq;
      'shared.checklist-item': SharedChecklistItem;
      'shared.faq-item': SharedFaqItem;
      'shared.landing-location-card': SharedLandingLocationCard;
      'shared.location-card': SharedLocationCard;
      'shared.machine-card': SharedMachineCard;
      'shared.media': SharedMedia;
      'shared.point': SharedPoint;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stat': SharedStat;
      'shared.step': SharedStep;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
