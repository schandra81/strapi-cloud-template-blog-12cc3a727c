'use strict';

const sections = [
  { title: 'Industry-Specific Vending Services', slug: 'industry-specific', order: 1 },
  { title: 'Vending Management', slug: 'vending-management', order: 2 },
  { title: 'Vending Education For Businesses', slug: 'vending-education', order: 3 },
  { title: 'Smart & AI Vending', slug: 'smart-ai-vending', order: 4 },
  { title: 'Healthy Vending', slug: 'healthy-vending', order: 5 },
  { title: 'Growth & Location Strategy', slug: 'growth-strategy', order: 6 },
];

async function seedBlogSections() {
  for (const section of sections) {
    const existing = await strapi.entityService.findMany('api::blog-section.blog-section', {
      filters: { slug: section.slug },
    });

    if (existing.length === 0) {
      await strapi.entityService.create('api::blog-section.blog-section', {
        data: {
          ...section,
          publishedAt: new Date(),
        },
      });
      console.log(`Created blog section: ${section.title}`);
    } else {
      console.log(`Skipped blog section (already exists): ${section.title}`);
    }
  }
}

module.exports = seedBlogSections;
