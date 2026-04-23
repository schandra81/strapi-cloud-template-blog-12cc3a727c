'use strict';

/**
 * blog-category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const postPopulate = {
  featuredImage: true,
  faqItems: true,
  seo: {
    populate: {
      ogImage: true,
    },
  },
  author: {
    populate: {
      avatar: true,
    },
  },
  section: true,
  category: true,
};

const categoryPopulate = {
  featuredImage: true,
  seo: {
    populate: {
      ogImage: true,
    },
  },
  sections: {
    populate: {
      posts: {
        populate: postPopulate,
      },
    },
  },
  posts: {
    populate: postPopulate,
  },
};

function groupCategory(category) {
  if (!category) {
    return category;
  }

  const sections = Array.isArray(category.sections) ? category.sections : [];
  const posts = Array.isArray(category.posts) ? category.posts : [];

  return {
    ...category,
    sections: sections.map((section) => ({
      ...section,
      posts: Array.isArray(section.posts) ? section.posts : [],
    })),
    directPosts: posts.filter((post) => !post.section),
  };
}

module.exports = createCoreController('api::blog-category.blog-category', ({ strapi }) => ({
  async find(ctx) {
    const categories = await strapi.entityService.findMany(
      'api::blog-category.blog-category',
      {
        ...ctx.query,
        populate: categoryPopulate,
      }
    );

    const data = Array.isArray(categories) ? categories.map(groupCategory) : [];

    return { data };
  },

  async findOne(ctx) {
    const categories = await strapi.entityService.findMany(
      'api::blog-category.blog-category',
      {
        ...ctx.query,
        filters: {
          ...(ctx.query.filters || {}),
          id: ctx.params.id,
        },
        populate: categoryPopulate,
      }
    );

    const data = Array.isArray(categories) ? groupCategory(categories[0]) || null : null;

    return { data };
  },
}));
