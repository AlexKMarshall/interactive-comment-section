const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    path.resolve("./.storybook/vanilla-extract"),
    path.resolve("./.storybook/ts-paths"),
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
