module.exports = {
  siteMetadata: {
    title: `My Hero Academia`,
    description: `Site basé sur l'API myheroacademiaapi.com`,
    author: `Shamila Remtoula`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `My Hero Academia`,
        short_name: `myheroacademia`,
        start_url: `/`,
        background_color: `#121214`,
        theme_color: `#F6D63F`,
        display: `minimal-ui`,
        icon: `src/images/Toshinori_Yagi_rounded.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
