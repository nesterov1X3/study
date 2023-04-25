const Router = require("koa-router");
const { getCourse, createCourse, deleteCourse, updateCourse } = require("../controllers/course-controller");
const router = new Router();

router.get("/course/:id?", async (ctx) => {
  const course = await getCourse(ctx.params, ctx.query);
  ctx.status = 200;
  ctx.body = course;
});

router.post("/course", async (ctx) => {
  const course = await createCourse(ctx.request.body);
  ctx.status = 201;
  ctx.body = course;
});

router.delete("/course/:id", async (ctx) => {
  await deleteCourse(ctx.params);
  ctx.status = 200;
  ctx.message = 'Course successfully deleted';
});

router.put("/course", async (ctx) => {
  const updatedCourseById = await updateCourse(ctx.request.body);
  ctx.status = 200;
  ctx.body = updatedCourseById;
  ctx.message = 'Course successfully updated';
});


module.exports = router;