const blogPosts = require('./src/data/blogPosts.json');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dreamkeralaholidays.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thankyou'],
      },
    ],
  },
  exclude: ['/thankyou', '/api/*', '/DefaultHeroSection'],
  additionalPaths: async (config) => {
    return blogPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date(post.date).toISOString(),
    }));
  },
}
