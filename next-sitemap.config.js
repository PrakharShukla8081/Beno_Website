/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.benosupport.com",
  generateRobotsTxt: true,
  sitemapSize: 10000,
  outDir: "./public",
  generateIndexSitemap: false,
};

module.exports = config;
