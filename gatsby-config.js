require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}` || `.env`,
});


module.exports = {
  // Remove pathPrefix for Vercel
  pathPrefix: "/msocb-website-new",
  siteMetadata: {
    title: `MSOCB Website`,
    description: `Organic Certification Portal for Meghalaya.`,
    author: `@msocb`,
    siteUrl: `https://msocb.vercel.app`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MSOCB Website`,
        short_name: `MSOCB`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/msocb_logo.png`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.API_URL,
        requestTimeout: 30000,
        concurrentFileRequests: 2,
        skipFileDownloads: false,
        fastBuilds: true,
        apiBase: 'jsonapi',
      },
    },
  ],
};
