'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/test.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /test', () => {
    return app.httpRequest()
      .get('/test')
      .expect('hello world')
      .expect(200);
  });
});
