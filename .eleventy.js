module.exports = function (config) {
  config.addPassthroughCopy("assets");
};
const minifyHtml = require('./src/minifyHtml')
const browsersyncConfig = require('./src/browsersyncConfig')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
    'netlifycms.yml': 'admin/config.yml',
    'site/favicon.ico': 'favicon.ico',
    'node_modules/alpinejs/dist/cdn.min.js': 'alpine.min.js',
    'node_modules/@fortawesome/fontawesome-free/sprites': 'static/sprites',
  })

  if (isProduction) {
    eleventyConfig.addTransform('minifyHtml', minifyHtml)
  } else {
    eleventyConfig.setBrowserSyncConfig(browsersyncConfig)
  }

  return {
    dir: {
      input: 'site',
      output: 'dist',
    },
  }
}
