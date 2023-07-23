/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },

  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
