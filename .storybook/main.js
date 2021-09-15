const reactJsx = require("vite-react-jsx");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here

    config.plugins.push(reactJsx.default());

    // return the customized config
    return config;
  },
};
