import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/REAOPS-DOCS/docs',
    component: ComponentCreator('/REAOPS-DOCS/docs', 'adb'),
    routes: [
      {
        path: '/REAOPS-DOCS/docs',
        component: ComponentCreator('/REAOPS-DOCS/docs', 'a03'),
        routes: [
          {
            path: '/REAOPS-DOCS/docs',
            component: ComponentCreator('/REAOPS-DOCS/docs', 'c0b'),
            routes: [
              {
                path: '/REAOPS-DOCS/docs/admin/config',
                component: ComponentCreator('/REAOPS-DOCS/docs/admin/config', '439'),
                exact: true
              },
              {
                path: '/REAOPS-DOCS/docs/admin/configuration',
                component: ComponentCreator('/REAOPS-DOCS/docs/admin/configuration', '975'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/REAOPS-DOCS/docs/features/overview',
                component: ComponentCreator('/REAOPS-DOCS/docs/features/overview', '181'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/REAOPS-DOCS/docs/getting-started/intro',
                component: ComponentCreator('/REAOPS-DOCS/docs/getting-started/intro', '563'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/REAOPS-DOCS/docs/getting-started/quick-start',
                component: ComponentCreator('/REAOPS-DOCS/docs/getting-started/quick-start', '3e8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/REAOPS-DOCS/docs/getting-started/setup',
                component: ComponentCreator('/REAOPS-DOCS/docs/getting-started/setup', '24b'),
                exact: true
              },
              {
                path: '/REAOPS-DOCS/docs/integrations/hubspot',
                component: ComponentCreator('/REAOPS-DOCS/docs/integrations/hubspot', '4a6'),
                exact: true
              },
              {
                path: '/REAOPS-DOCS/docs/user-guide/telegram',
                component: ComponentCreator('/REAOPS-DOCS/docs/user-guide/telegram', '237'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/REAOPS-DOCS/docs/workflows/workflow',
                component: ComponentCreator('/REAOPS-DOCS/docs/workflows/workflow', 'afc'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/REAOPS-DOCS/',
    component: ComponentCreator('/REAOPS-DOCS/', '80f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
