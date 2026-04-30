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
    subheading: Schema.Attribute.Text &
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
      'city-industry.faq': CityIndustryFaq;
      'city.faq': CityFaq;
      'footer.contact-item': FooterContactItem;
      'footer.link': FooterLink;
      'footer.social-link': FooterSocialLink;
      'industry.faq': IndustryFaq;
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
