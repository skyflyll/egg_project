'use strict';

exports.index = function* (ctx) {
  console.log('jjjjjjjjjjjjjjjjjjjjjj')
  ctx.body = yield ctx.model.User.find({});
}
