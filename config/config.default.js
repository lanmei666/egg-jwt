/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1687700812193_3270';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
      lgnoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  config.view = {

    mapping: { '.html': 'ejs' }, // 左侧选项写成 .html 会自动替换为 .html文件

  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'sxn998238', // 初始化密码，没设置的可以不写
      // 数据库名
      database: 'test', // 我们新建的数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // config/config.default.js
  config.jwt = {
    secret: 'sxn',
  };
  config.middleware = [ 'cors' ];
  return {
    ...config,
    ...userConfig,
  };
};
