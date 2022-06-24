const { defineConfig } = require('@vue/cli-service')
const registerRouter = require('./backend/router')
// const express = require('express')
// const app = express()
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和mixin
        // additionalData相当于添加一些额外的sass文件
        additionalData: `
        @import "@/assets/scss/variable.scss";
        @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  // 启动node server的方法
  devServer: {
    // open: true,
    // webpack4.x的方法  app就是express的一个实例 根据这个实例可以搭建后端路由
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      registerRouter(devServer.app)
    }
  }


})
