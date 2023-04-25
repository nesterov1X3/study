const Router = require("koa-router");
const api = new Router();

const auth = require("./auth-router");
const users = require("./users-router");
const course = require("./course-router");
const course_cart = require("./course_cart-router");
const order = require("./order-router");

api.use(users.routes());
api.use(auth.routes());
api.use(course.routes());
api.use(course_cart.routes());
api.use(order.routes());

module.exports = api;
