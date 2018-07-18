'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const user = await this.ctx.service.user.creatUser();
    console.log("save==========",user);
  }

  // async index() {
  //   const getUser = await this.ctx.service.user.getUser();
  //   console.log("getUser==========",getUser);
  // }

}

module.exports = UserController;
