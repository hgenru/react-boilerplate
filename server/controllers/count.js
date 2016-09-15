'use strict';
const Router = require('koa-router');

let count = 0;
let countRuter = new Router();

countRuter.post('/', (ctx, next) => {
    ctx.body = count + 1;
    return next();
});

countRuter.get('/', (ctx, next) => {
    ctx.body = count;
    return next();
});

module.exports = countRuter;
