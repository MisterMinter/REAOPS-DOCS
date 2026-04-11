import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/REAOPS-DOCS/docs',
    component: ComponentCreator('/REAOPS-DOCS/docs', 'd76'),
    routes: [
      {
        path: '/REAOPS-DOCS/docs/admin/config',
        component: ComponentCreator('/REAOPS-DOCS/docs/admin/config', 'dfd'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/REAOPS-DOCS/docs/getting-started/setup',
        component: ComponentCreator('/REAOPS-DOCS/docs/getting-started/setup', '519'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/REAOPS-DOCS/docs/integrations/hubspot',
        component: ComponentCreator('/REAOPS-DOCS/docs/integrations/hubspot', '74a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/REAOPS-DOCS/docs/workflows/workflow',
        component: ComponentCreator('/REAOPS-DOCS/docs/workflows/workflow', '6c3'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '/REAOPS-DOCS/',
    component: ComponentCreator('/REAOPS-DOCS/', '860'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
