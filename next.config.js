/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;
module.exports = {
  // nextConfig,
  images: {
    domains: ['be-store-gg.cyclic.app'],
  },
};
