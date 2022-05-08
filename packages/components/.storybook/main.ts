// @ts-nocheck
/**
 * webpack case
 * `can` see config about iframe options when build storybook
 *  And I can modify public path in webpack config
 * */
// module.exports = {
//   stories: [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//   ],
//   framework: "@storybook/react",
//   webpackFinal(config) {
//     console.log(config);
//     return config;
//   },
// };

import { mergeConfig } from "vite";
import { definePreviewConfig } from "../../../scripts/common";
import pkg from "../package.json";

/**
 * vite case
 * `can not` see config about iframe options when build storybook
 */
export default {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  // outputDir: "components",
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal(config) {
    return mergeConfig(config, definePreviewConfig(pkg["name"], {}));
  },
};
