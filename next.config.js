const { i18n } = require("./next-i18next.config");
/* @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
  compress: true,
  i18n,
};
