const Router = require("koa-router");
const { registration, login } = require("../controllers/auth-controller");
const router = new Router();

router.post("/register", async (ctx) => {
  const user = await registration(ctx.request.body);
  ctx.body = user
  ctx.status = 201;
});

router.post("/login", async (ctx) => {
  const user = await login(ctx.request.body);
  ctx.body = user;
  ctx.session.userId = user.id;
  ctx.session.isLogged = true;
  ctx.status = 200;
});

router.post("/logout", (ctx) => {
  if (ctx.session || ctx.session.isLogged) {
    ctx.session = null;
    ctx.status = 200;
    ctx.session.isLogged = false;
  }
});

module.exports = router;