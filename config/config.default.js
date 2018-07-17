'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531796886440_4754';

  // add your config here
  config.middleware = [];

  //模板引擎渲染配置
  config.view = {
    // 多模板文件入口
    root: [
      path.join(appInfo.baseDir,"app/view"),
      path.join(appInfo.baseDir,"app/view2"),
      path.join(appInfo.baseDir,"path/to/another")
    ].join(','),
    defaultViewEngine: 'nunjucks', //设置模板引擎
    defaultExtension: '.html', // 默认拓展名
    mapping: {
      '.html': 'nunjucks', //指定模板拓展名
    },
  }

  //数据库链接配置
  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/egg',
      options: {},
    },
  };


  return config;
};
