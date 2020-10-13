module.exports = {
  siteMetadata: {
    title: `Daily Dose`,
    description: `A chrome extension that displays one random drug per day along with relevant info such as molecule, strength, and indication.`,
    author: `jamesabaja.dev@gmail.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: false,
        directives: {
          "script-src": "'unsafe-inline' 'self' blob: filesystem:",
          "default-src": "'unsafe-inline' 'self'",
          "script-src-elem": "'unsafe-inline' 'self' blob: filesystem:",
          "style-src": "'unsafe-inline' 'self' https://fonts.googleapis.com",
          "style-src-elem":
            "'unsafe-inline' 'self' https://fonts.googleapis.com",
          "font-src": "https://fonts.googleapis.com https://fonts.gstatic.com",
          //"img-src": "'self' data: www.google-analytics.com",
          // you can add your directives or override defaults
        },
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
