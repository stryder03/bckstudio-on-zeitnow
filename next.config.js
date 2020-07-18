const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

module.exports = withPlugins([[withImages],], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.node = {
      fs: "empty",
      tls: "empty",
      net: "empty"
    };
    const { dir } = options

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader'
        }
      ]
    })
    return config;
  },
  target: 'serverless',
});
