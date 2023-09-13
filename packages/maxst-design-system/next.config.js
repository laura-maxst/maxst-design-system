/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/scss/abstracts/_variables.scss"; @import "./src/styles/scss/abstracts/_functions.scss"; @import "./src/styles/scss/abstracts/_mixins.scss";`,
  },
};

module.exports = nextConfig;
