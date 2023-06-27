'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: 'jwt项目',
    });
  }
  async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await ctx.service.home.addUser(name);
      ctx.body = {
        name: ctx.request.body,
        code: 200,
        msg: '添加成功',
        data: null,
        res: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
        TT: error,
      };
    }
  }
  async editUser() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await ctx.service.home.editUser(id, name);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null,
      };
    }
  }
}


module.exports = HomeController;
