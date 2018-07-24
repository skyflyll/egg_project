'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

 // 路由限制
module.exports = app => {

  require('./router/web')(app);
  require('./router/api')(app);

};
