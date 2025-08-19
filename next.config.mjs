import next from 'next'
const isDev = process.env.NODE_ENV !== 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  webpack: (config) => {
    // Custom Webpack configuration for optimizing images and assets
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'images/'
}
},
      ]
})
    return config
  },
  env: {
    BRAND_NAME: 'FashionTV',
    PRIMARY_COLOR: '#FFC0CB', // Pink
    SECONDARY_COLOR: '#FFFFFF', // White
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
},
    ]
  },
  async rewrites() {
    return [
      {
        source: '/products/:slug',
        destination: '/products/detail?slug=:slug'
},
    ]
  }
}
export default nextConfig;