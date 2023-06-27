'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  // eslint-disable-next-line no-unused-vars
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  router.post('/api/user/getinfo', _jwt, controller.user.test);
  // router.get('/api/user/getinfo', controller.user.test);
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/user/:id', controller.home.user);
  // app/router.js
  router.get('/user', controller.home.user);
  router.post('/add_User', controller.home.addUser);
  router.put('/edit_user', app.controller.home.editUser);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);

};
