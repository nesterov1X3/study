const Koa = require('koa');
const http = require('http');
const api = require('./src/routers/index');
const { Model } = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile');
const koaBody = require('koa-body');
const session = require('koa-session');
const { CONFIG } = require('./src/const/config');


const app = new Koa();
const port = process.env.PORT || 3000;

app.keys = [process.env.KEY];

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.statusCode || e.status || 500;
    ctx.response.message = e.message;
    ctx.body = ctx.response;
  }
}).use(koaBody()).use(session(CONFIG, app)).use(api.routes());

Model.knex(new Knex(knexfile));
http.createServer(app.callback()).listen(port);
