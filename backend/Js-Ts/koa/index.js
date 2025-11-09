const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = { message: 'Bonjour depuis Koa!', time: new Date().toISOString() };
});

router.get('/health', async (ctx) => {
  ctx.body = { status: 'ok', uptime: process.uptime() };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Koa server listening on port ${PORT}`);
});
