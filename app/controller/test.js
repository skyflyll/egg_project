'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async list() {
    this.ctx.body = 'hello world';
  }
}

module.exports = TestController;
