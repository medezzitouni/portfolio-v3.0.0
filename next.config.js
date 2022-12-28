/** @type {import('next').NextConfig} */

const { ENV } = process.env

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: ENV == 'prod' ? '/portfolio-v3.0.0/' : '',
  basePath: ENV == 'prod' ? '/portfolio-v3.0.0' : '',
  images: {
    loader: 'imgix',
    path: ''
  },
  
}

module.exports = nextConfig

