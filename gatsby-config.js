module.exports = {
  siteMetadata: {
    title: 'Gusta Project',
    company: 'Gusta Project',
    description: 'An e-liquid mixing website.',
    keywords: ['vaporizer', 'vape', 'mixing', 'calculator', 'recipe'],
    googleAnalyticsId: 'UA-140812424-1'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gusta Project',
        /* eslint-disable camelcase */
        short_name: 'gusta-project',
        start_url: '/',
        background_color: '#343a40',
        theme_color: '#343a40',
        /* eslint-enable */
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/locale`,
        name: `locale`
      }
    },
    {
      resolve: 'gatsby-plugin-i18next',
      options: {
        availableLngs: ['en'],
        fallbackLng: 'en'
      }
    }
  ]
};
