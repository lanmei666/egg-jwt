module.exports = secret => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.token; // 若是没有 token，返回的是 null 字符串
    let decode;
    if (token !== 'null' && token) {
      try {
        // eslint-disable-next-line no-unused-vars
        decode = ctx.app.jwt.verify(token, secret); // 验证token
        await next();
      } catch (error) {
        console.log('error', error);
        ctx.status = 200;
        ctx.body = {
          msg: 'token已过期，请重新登录',
          code: 401,
          tt: error,
        };
        return;
      }
    } else {
      ctx.status = 200;
      ctx.body = {
        code: 401,
        msg: 'token不存在',
      };
      return;
    }
  };
};
