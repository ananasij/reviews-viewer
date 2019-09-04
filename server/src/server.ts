import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as cors from '@koa/cors';
import * as logger from 'koa-logger';

import { routes } from './routes';
import { Route } from './types';

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(cors());

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

app.on('error', (err, ctx) => {
    // TODO: centralized error handling;
    console.error(err);
});

router.get('/', (ctx, next) => {
    ctx.body = 'Hello world!';
});

routes.map((route: Route) => router[route.method](route.path, ...route.actions));

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening to port ${port}.`)
});
