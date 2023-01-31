/** @type {import('next').NextConfig} */

module.exports = {
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
  },
  typescript: {
    ignoreBuildErrors: true
  }
}