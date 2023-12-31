import path from "path";
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions", 
    '@storybook/addon-styling',
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "../src"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@components": path.resolve(__dirname, "../src/components")
    };
    return config;
  }
};