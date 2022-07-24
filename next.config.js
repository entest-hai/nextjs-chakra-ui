const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    modern: true
  }
}

module.exports = withContentlayer(nextConfig)
