module.exports = {
  title: 'REAOPS Documentation',
  tagline: 'Documentation for REAOPS',
  url: 'https://misterminter.github.io',
  baseUrl: '/REAOPS-DOCS/',
  organizationName: 'MisterMinter',
  projectName: 'REAOPS-DOCS',
  onBrokenLinks: 'throw',
  webpack: {
    configure: (config) => {
      // Remove invalid ProgressPlugin options that newer webpack doesn't support
      const progressPlugins = config.plugins?.filter(p => 
        p && p.constructor && p.constructor.name === 'ProgressPlugin'
      );
      
      if (progressPlugins) {
        progressPlugins.forEach(plugin => {
          // The ProgressPlugin stores options in a _options property
          if (plugin._options) {
            delete plugin._options.name;
            delete plugin._options.color;
            delete plugin._options.reporters;
            delete plugin._options.reporter;
          }
        });
      }
      return config;
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
