/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        fonts: ['CeraPro', 'Avenir Next', 'Avenir', 'Helvetica', 'Ubuntu', 'DejaVu Sans', 'Arial'],
      },
    },
  ],
};
