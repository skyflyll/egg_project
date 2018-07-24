'use strict';
const path = require('path');
const fs = require('fs');
const pump = require('mz-modules/pump');
const moment = require('moment');
const sha1 = require('sha1');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {

  }


  /**
   * @param 用户注册
   *  showSignup() method:GET 用户注册页面
   *  signup() method:POST 注册请求提交
   */

  async showSignup() {
    let data = {}
    await this.ctx.render('/user/signup.html', data);
  }
  async signup() {
    const ctx = this.ctx;
    //获取文件的stream
    const stream = await this.ctx.getFileStream();

    // 改名操作
    const timeNow = moment(Date.now()).format("YYMMDDhhmmss")
    const hash = parseInt(Math.random() * 10000);
    const extendName = path.extname(stream.filename);
    const filename = timeNow + hash + extendName;

    // 获取传输的用户数据
    const user = {}
    user.userName = stream.fields.userName;
    user.passWord = sha1(stream.fields.passWord);
    user.avatar = filename;
    user.discribe = stream.fields.discribe;
    let createUser;
    try {
      // 用户信息写入数据库
      createUser = await ctx.service.user.creatUser(user);
    } catch (err) {
      throw (err)
    }
    if (createUser) {
      // 用户信息写入成功后保存图片
      const target = path.join(this.config.baseDir, 'app/public/img', filename);
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
      this.ctx.redirect('/');
    }
  }

  /**
   * @param 用户登录
   * showLogin() method:GET 显示用户登录
   * login() method:POST 提交用户信息
   */

  async showLogin() {
    let data = {}
    await this.ctx.render('/user/login.html', data);
  }

  async login() {
    let data = {};
    let ctx = this.ctx;
    const parts = this.ctx.multipart({
      autoFields: true
    });
    await parts()
    const userInfo = parts.field;
    let user;
    try {
      user = await ctx.service.user.userLogin(userInfo);
    } catch (err) {

    }
    const tempPass = sha1(userInfo.passWord);

    if (tempPass == user.password) {
      user.password = null;
      ctx.cookies.set('userInfo', JSON.stringify(user), {
        maxAge: 24 * 60 * 60 * 1000,
      });
     ctx.redirect('/index');
    }
  }
  /**
   *  注销登录
   */
   async logout(){
     let ctx = this.ctx;
     ctx.cookies.set('userInfo', null)
     ctx.redirect('/index')
   }

  // async index() {
  //   const getUser = await this.ctx.service.user.getUser();
  //   console.log("getUser==========",getUser);
  // }

}

module.exports = UserController;