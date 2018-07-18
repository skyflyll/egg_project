'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // 后去用户
    async getUser() {
        return this.ctx.model.User.find().exec();
    }
    // 创建用户
    async creatUser() {
        const user = new this.ctx.model.User();

        user.userName = 'cdccdcd';
        user.password = "我是密码";
        user.email = "270901715@qq.com";
        user.avatar = "http://hhhhhhhhh";
        user.discribe = "mmmmmmmmmmm";
        

        return user.save();
    }
}

module.exports = UserService;