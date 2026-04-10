import type {Config} from "@docusaurus/types";
import MarkdownError from "@docusaurus/MarkdownError";

const config: Config = {
  title: "REAOPS Documentation",
  url: "https://mistminterm.github.io",
  baseUrl: "/REAOPS-DOCS/",
  organizationName: "MistMinterm",
  projectName: "REAOPS-DOCS",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require("./sidebars").default,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
};

export default config;