'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    const data ={
      index:'egg_project'
    };
    await this.ctx.render('index.html', data);
  }
}

module.exports = IndexController;
