const nextI18nConfig = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: nextI18nConfig.i18n,
}

module.exports = nextConfig