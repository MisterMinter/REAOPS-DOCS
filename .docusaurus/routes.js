import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/REAOPS-DOCS/docs',
    component: ComponentCreator('/REAOPS-DOCS/docs', '38a'),
    routes: [
      {
        path: '/REAOPS-DOCS/docs',
        component: ComponentCreator('/REAOPS-DOCS/docs', '53b'),
        routes: [
          {
            path: '/REAOPS-DOCS/docs',
            component: ComponentCreator('/REAOPS-DOCS/docs', '5f6'),
            routes: [
              {
                path: '/REAOPS-DOCS/docs/admin/config',
                component: ComponentCreator('/REAOPS-DOCS/docs/admin/config', '2bd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/REAOPS-DOCS/docs/getting-started/setup',
                component: ComponentCreator('/REAOPS-DOCS/docs/getting-started/setup', 'd92'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/REAOPS-DOCS/docs/integrations/hubspot',
                component: ComponentCreator('/REAOPS-DOCS/docs/integrations/hubspot', '410'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/REAOPS-DOCS/docs/workflows/workflow',
                component: ComponentCreator('/REAOPS-DOCS/docs/workflows/workflow', '4e3'),
                exact: true,
                sidebar: "defaultSidebar"
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
