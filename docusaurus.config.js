module.exports = {
  title: 'REAOPS Documentation',
  tagline: 'Documentation for REAOPS',
  url: 'https://misterminter.github.io',
  baseUrl: '/REAOPS-DOCS/',
  organizationName: 'MisterMinter',
  projectName: 'REAOPS-DOCS',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  webpack: {
    configure: (webpackConfig) => {
      // Remove ProgressPlugin which has incompatible options with newer webpack
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ProgressPlugin'
      );
      return webpackConfig;
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      },
    ],
  ],
};
