import type { StorybookConfig } from "storybook/internal/types";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook/addon-links",
    "storybook/addon-essentials",
    "storybook/addon-interactions",
    "./local-preset.js",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
