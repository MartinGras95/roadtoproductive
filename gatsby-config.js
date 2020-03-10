/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Road to Productive",
    description:"Welcome to the official Road To Productive Blog!",
    author: "Martin Gras",
    email: "road2productive@gmail.com",
  },

  // Plugins
  plugins:[

    // scss
    'gatsby-plugin-sass',
    // plugin for images
    'gatsby-plugin-sharp',
    // Helmet
    'gatsby-plugin-react-helmet',

    // filesystem, because it is an object it need resolve to name it
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        //source directory
        name: 'src',
        // path to the src directory
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    {
      // remark (convert markdown to html)
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            // using images in markdown
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }

        ]
      }
    }
  ]
    }

