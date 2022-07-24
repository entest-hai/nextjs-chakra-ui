// import { withContentlayer } from 'next-contentlayer'

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    modern: true
  }
}

module.exports = withContentlayer(nextConfig)

// module.exports = {
//   async rewrites() {
//     console.log('rewrite something here ')
//     return [
//       {
//         source: '/about',
//         destination: '/',
//       },
//       {
//         source: '/cloudfront',
//         destination: '/cloudfront.html'
//       }
//     ]
//   },
// }
