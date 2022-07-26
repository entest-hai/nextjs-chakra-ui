const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  typescript: {
    ignoreBuildErrors: true
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = withContentlayer(nextConfig)
