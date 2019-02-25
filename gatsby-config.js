const fileSources = [
  // People yaml
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './content/misc/people',
    },
  },
  // Tenders yaml
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './content/tenders',
    },
  },
  // News markdowns
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './content/news',
    },
  },
];

const transformers = ['gatsby-transformer-remark', 'gatsby-transformer-yaml'];

const layout = [
  {
    resolve: 'gatsby-plugin-layout',
    options: {
      component: require.resolve('./src/components/layout.jsx'),
    },
  },
];

const googleFonts = [
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['Muli'],
    },
  },
];

const plugins = [
  // emotion.sh for css-in-jsx
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  ...fileSources,
  ...transformers,
  ...layout,
  ...googleFonts,
];

module.exports = {
  plugins,
};
