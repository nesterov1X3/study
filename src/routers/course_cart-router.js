const Router = require("koa-router");
const { getCourseCart, createCourseCart, deleteCourseCart } = require("../controllers/course_cart-controller");
const router = new Router();

router.get("/course-cart/:user_id", async (ctx) => {
  const courseCart = await getCourseCart(ctx.params);
  ctx.status = 200;
  ctx.body = courseCart;
});

router.post("/course-cart", async (ctx) => {
  const courseCart = await createCourseCart(ctx.request.body);
  ctx.status = 201;
  ctx.body = courseCart;
});

router.delete("/course-cart/:user_id", async (ctx) => {
  await deleteCourseCart(ctx.params);
  ctx.status = 200;
  ctx.message = "Cart course successfully deleted"
})

module.exports = router;