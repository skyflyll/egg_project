'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router , controller } = app;
    router.get('/', controller.home.index);
    router.get('/index', controller.index.index);
    router.get('/user', controller.user.index);

    // 用户注册
    router.get('/signup', controller.user.showSignup);
    router.post('/signup', controller.user.signup);
    
    //用户登录
    router.get("/login",controller.user.showLogin);
    router.post("/login",controller.user.login);

    // 注销
    router.get('/logout',controller.user.logout);
    
};