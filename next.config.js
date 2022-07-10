/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  dev: {
    baseUrl: 'http://localhost:3000',
  },
  compiler: {
    removeConsole: true,
  },
  swcMinify: true,
};
