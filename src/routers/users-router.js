const Router = require("koa-router");
const { getUsers, deleteUser, updateUser } = require("../controllers/users-controller");
const router = new Router();

router.get("/users/:id?", async (ctx) => {
  const userById = await getUsers(ctx.params, ctx.query);
  ctx.status = 200;
  ctx.body = userById;
});

router.delete("/user/:id", async (ctx) => {
  await deleteUser(ctx.params);
  ctx.status = 200;
  ctx.message = 'User successfully deleted';
});

router.put("/user", async (ctx) => {
  const updatedUserById = await updateUser(ctx.request.body);
  ctx.status = 200;
  ctx.body = updatedUserById;
  ctx.message = 'User successfully updated';
});

module.exports = router;