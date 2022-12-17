/** @type {import('next').NextConfig} */

const { ENV } = process.env

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: ENV == 'prod' ? '/portfolio/' : '',
  basePath: ENV == 'prod' ? '/portfolio' : '',
  images: {
    loader: 'imgix',
    path: ''
  },
  
}

module.exports = nextConfig

