module.exports = {
  title: 'REAOPS Documentation',
  tagline: 'Documentation for REAOPS',
  url: 'https://misterminter.github.io',
  baseUrl: '/REAOPS-DOCS/',
  organizationName: 'MisterMinter',
  projectName: 'REAOPS-DOCS',
  onBrokenLinks: 'throw',
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
