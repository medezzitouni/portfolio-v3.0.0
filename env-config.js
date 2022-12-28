const { ENV } = process.env

module.exports = {
  'process.env.BACKEND_URL': ENV == 'prod' ?  '/portfolio-v3.0.0/': ''
}