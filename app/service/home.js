const Service = require('egg').Service;
class HomeService extends Service {
  async user() {
    // eslint-disable-next-line object-curly-spacing
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    // eslint-disable-next-line no-unused-vars
    const QUERY_STR = 'id,name';
    // eslint-disable-next-line prefer-const
    let sql = `select  ${QUERY_STR} from list `;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
    // 假设数据库中获取数据
  }
  async addUser(name) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    try {
      const result = await app.mysql.insert('list', { name }); // 给list表新增一条数据
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // service/home.js
  async editUser(id, name) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    try {
      const result = await app.mysql.update('list', { name }, {
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


}
module.exports = HomeService;
