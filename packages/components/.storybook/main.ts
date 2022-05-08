// @ts-nocheck

import { mergeConfig } from "vite";
import {
  defineManagerConfig,
  definePreviewConfig,
} from "../../../scripts/common";
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
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  // @ts-ignore
  managerWebpack(config) {
    return defineManagerConfig(pkg["name"], config);
  },
  viteFinal(config) {
    return mergeConfig(config, definePreviewConfig(pkg["name"], {}));
  },
};
