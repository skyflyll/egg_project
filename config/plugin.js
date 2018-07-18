'use strict';

// had enabled by egg
// exports.static = true;

// 添加渲染模板
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};

// 添加 mongoose
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};