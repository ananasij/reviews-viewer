import { Context } from 'koa';
import { reviewsData } from '../server';

export const reviewsRoute = async (ctx: Context, next: Function) => {
  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = {
    data: reviewsData
  };
};
