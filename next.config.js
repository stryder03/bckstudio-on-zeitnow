const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.node = {
      fs: "empty",
      tls: "empty",
      net: "empty"
    };
    return config;
  },
  target: 'serverless',
  env: {
    MAILGUN_KEY: process.env.MAILGUN_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAPS_KEY: process.env.MAPS_KEY

  },
});
