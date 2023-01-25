/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");


const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: ''
      }
    ]
  }
}

module.exports = withPlaiceholder(nextConfig)
