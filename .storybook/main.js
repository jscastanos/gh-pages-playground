const reactJsx = require("vite-react-jsx");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      plugins: [...config.plugins, reactJsx.default()],
      entries: [
        `${path.relative(
          config.root,
          path.resolve(__dirname, "../stories")
        )}/**/*.stories.@(js|jsx|ts|tsx)`,
      ],
    };
  },
};
