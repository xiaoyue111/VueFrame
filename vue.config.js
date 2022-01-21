const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  // devServer: {},
  // publicPath: "./",
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@images', resolve('src/assets/images'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))
      .set('@api', resolve('src/api'))
      .set('@router', resolve('src/router'))
      .set('@utils', resolve('src/utils'))
  },
  configureWebpack: (config) => {
    config.externals = {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    }
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "api",
        },
      },
    },
  },
}