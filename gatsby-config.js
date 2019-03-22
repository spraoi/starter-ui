const { plugins } = require('@spraoi/gatsby-config');

module.exports = {
  plugins: [
    ...plugins,
    'gatsby-plugin-react-svg',
    {
      options: { fonts: ['Open Sans:300,400,700'] },
      resolve: 'gatsby-plugin-google-fonts',
    },
  ],
  siteMetadata: {
    title: 'Spraoi App',
  },
};
