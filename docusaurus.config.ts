import type {Config} from "@docusaurus/types";

const config: Config = {
  title: "REAOPS Documentation",
  url: "https://misterminter.github.io",
  baseUrl: "/REAOPS-DOCS/",
  organizationName: "MisterMinter",
  projectName: "REAOPS-DOCS",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require("./sidebars.js"),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
};

export default config;
