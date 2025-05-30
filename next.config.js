/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Optional: Set assetPrefix and basePath if your site is not at the root of the domain
   assetPrefix: '/your-repository-name/',
   basePath: '/your-repository-name',
};
module.exports = nextConfig;
