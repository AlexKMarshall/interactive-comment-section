const path = require("path");

module.exports = {
  stories: [
    "../**/stories/**/*.stories.mdx",
    "../**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    path.resolve("./.storybook/ts-paths"),
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
