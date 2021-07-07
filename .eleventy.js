const minifyHtml = require('./src/minifyHtml')
const browsersyncConfig = require('./src/browsersyncConfig')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = function (config) {
  config.addPassthroughCopy({
    'www/assets': 'assets',
    'netlifycms.yml': 'admin/config.yml',
    'site/favicon.ico': 'favicon.ico',
    'node_modules/alpinejs/dist/cdn.min.js': 'alpine.min.js',
    'node_modules/bootstrap-icons/bootstrap-icons.svg': 'assets/bootstrap-icons.svg',
  })

  if (isProduction) {
    config.addTransform('minifyHtml', minifyHtml)
  } else {
    config.setBrowserSyncConfig(browsersyncConfig)
  }

  return {
    dir: {
      input: 'www',
      output: 'public',
    },
  }
}
