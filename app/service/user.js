'use strict';

/**
 * @param 用户操作
 * getUser 查询用户
 * createUser 创建用户
 * 
 */
const Service = require('egg').Service;
class UserService extends Service {

    /**
     *  getUser()
     * 获取用户列表
     */

    async getUser() {
        return this.ctx.model.User.find().exec();
    }

    /**
     * createUser()
     * 创建用户
     */
    async creatUser(userInfo) {
        const user = new this.ctx.model.User();
        user.userName = userInfo.userName;
        user.password = userInfo.passWord;
        // user.email = "270901715@qq.com";
        user.avatar = userInfo.avatar;
        user.discribe = userInfo.discribe;

        return user.save();
    }
    /**
     * 
     * @param {userName} userInfo 
     * 用户登录的信息
     */
    async userLogin(userInfo) {
        const query = {
            userName: userInfo.userName
        }
        return this.ctx.model.User.findOne(query)
    }

}

module.exports = UserService;