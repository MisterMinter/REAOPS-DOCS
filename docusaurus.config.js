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
    configure: (webpackConfig, isServer) => {
      // Filter out any plugin with ProgressPlugin or similar
      if (webpackConfig.plugins) {
        webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
          const name = plugin.constructor?.name || '';
          return !name.includes('Progress');
        });
      }
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
