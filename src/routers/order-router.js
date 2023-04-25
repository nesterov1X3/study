const Router = require("koa-router");
const { getOrder, createOrder } = require("../controllers/order-controller");
const router = new Router();

router.get("/course-order/:user_id", async (ctx) => {
  const orderCourse = await getOrder(ctx.params);
  ctx.status = 200;
  ctx.body = orderCourse;
});

router.post("/course-order", async (ctx) => {
  const orderCourse = await createOrder(ctx.request.body);
  ctx.status = 201;
  ctx.body = orderCourse;
});

module.exports = router;